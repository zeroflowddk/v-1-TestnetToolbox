import { toBytes, toHex } from "viem";
import { getSepoliaClient, getSepoliaWallet, getTaikoClient, getTaikoWallet } from "../../helperMod/viemHelper";
import { Taiko } from "../../setting";
import { bridgeAbi } from "./abi";
import { TaikoContract } from "./contract";

class TaikoModule {
    private privateKey:string
    constructor(privateKey:string){
        this.privateKey = privateKey;
    };
    async BridgeDepositeL1L2():Promise<void>{
        const sepoliaClient = getSepoliaClient();
        const sepoliaWallet = getSepoliaWallet({ privateKey: `0x${this.privateKey}` });
        const getBalance = await sepoliaClient.getBalance(sepoliaWallet.account);
        const amount = getBalance / BigInt(100) * BigInt(Taiko.amountProcent);
        const argsBridge = [1,sepoliaWallet.account.address, 11155111, 167007, sepoliaWallet.account.address, sepoliaWallet.account.address, sepoliaWallet.account.address, amount, 1350000000900000, 140000, "0x", ""];
        console.log(argsBridge)
        const txPayload = await sepoliaWallet.writeContract({
            address: "0x5293Bb897db0B64FFd11E0194984E8c5F1f06178",
            abi: bridgeAbi,
            args: [argsBridge],
            functionName: 'sendMessage',
            value: amount + BigInt(1350000000900000),
            gas: BigInt(117238)
        });

        console.log(`Send transaction on Bridge: https://sepolia.etherscan.io/tx/${txPayload}` );
    };

    // async Dex():Promise<void>{
    //     const taikoClient = getTaikoClient();
    //     const taikoWallet = getTaikoWallet({ privateKey: `0x${this.privateKey}` });
    //     const getBalance = await taikoClient.
    // };
};

const taiko = new TaikoModule('свой приватник');
// taiko.BridgeDepositeL1L2();