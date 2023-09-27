import { parseEther } from "viem";
import { getSepoliaClient, getSepoliaWallet } from "../../helperMod/viemHelper";
import { Scroll } from "../../setting";
import { abiBridge } from "./abi";


export class ScrollBridgeModule {
    private privateKey:string
    constructor(privateKey:string){
        this.privateKey = privateKey;
    };

    async bridgeScroll():Promise<void>{
        const sepoliaClient = getSepoliaClient();
        const sepoliaWallet = getSepoliaWallet({ privateKey: `0x${this.privateKey}` });
        const getBalance = await sepoliaClient.getBalance(sepoliaWallet.account);
        const amount = getBalance / BigInt(100) * BigInt(Scroll.amountProcentIn);
        const argsBridge = [amount, BigInt(168000)];
        const txPayload = await sepoliaWallet.writeContract({
            address: "0x13FBE0D0e5552b8c9c4AE9e2435F38f37355998a",
            abi: abiBridge,
            args: argsBridge,
            functionName: 'depositETH',
            value: amount + BigInt(parseEther("0.0012")),
        });
        console.log("Send transaction on Bridge:", `https://sepolia.etherscan.io/tx/${txPayload}` );
    };
};
