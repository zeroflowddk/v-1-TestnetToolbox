import { getSepoliaClient, getSepoliaWallet, getTaikoClient, getTaikoWallet } from "../../helperMod/viemHelper";
import { Taiko } from "../../setting";
import { bridgeAbi } from "./abi";


export class TaikoBridgeModule {
    private privateKey:string[]
    constructor(privateKey:string[]){
        this.privateKey = privateKey;
    };
    async bridgeDepositeL1L2():Promise<void>{
        const sepoliaClient = getSepoliaClient();
        const sepoliaWallet = getSepoliaWallet({ privateKey: `0x${this.privateKey}` });
        const getBalance = await sepoliaClient.getBalance(sepoliaWallet.account);
        const [minPercentage, maxPercentage] = Taiko.amountBridgeProcentIn;
        const randomPercentage = Math.ceil(Math.random() * (maxPercentage - minPercentage) + minPercentage);
        const amount = (getBalance / BigInt(100)) * BigInt(randomPercentage);
        const argsBridge = [1,sepoliaWallet.account.address, 11155111, 167007, sepoliaWallet.account.address, sepoliaWallet.account.address, sepoliaWallet.account.address, amount, 1350000000900000, 140000, "0x", ""];
        const txPayload = await sepoliaWallet.writeContract({
            address: "0x5293Bb897db0B64FFd11E0194984E8c5F1f06178",
            abi: bridgeAbi,
            args: [argsBridge],
            functionName: 'sendMessage',
            value: amount + BigInt(1350000000900000),
            gas: BigInt(117238)
        });
        
        console.log("Send transaction on Bridge:", `https://sepolia.etherscan.io/tx/${txPayload}` );
    };
    async bridgeDepositeL2L1():Promise<void>{
        const taikoClient = getTaikoClient();
        const taikoWallet = getTaikoWallet({ privateKey: `0x${this.privateKey}` });
        const getBalance = await taikoClient.getBalance(taikoWallet.account);
        const [minPercentage, maxPercentage] = Taiko.amountBridgeProcentIn;
        const randomPercentage = Math.ceil(Math.random() * (maxPercentage - minPercentage) + minPercentage);
        const amount = (getBalance / BigInt(100)) * BigInt(randomPercentage);
        const argsBridge = [0,taikoWallet.account.address, 167007, 11155111, taikoWallet.account.address, taikoWallet.account.address, taikoWallet.account.address, amount, 1350000000900000, 140000, "0x", ""];
        const txPayload = await taikoWallet.writeContract({
            address: "0x5293Bb897db0B64FFd11E0194984E8c5F1f06178",
            abi: bridgeAbi,
            args: [argsBridge],
            functionName: 'sendMessage',
            value: amount + BigInt(2000000000000000),
            gas: BigInt(117238)
        });
        console.log("Send transaction on Bridge:", `https://explorer.jolnir.taiko.xyz/tx/${txPayload}` );
    };
};

