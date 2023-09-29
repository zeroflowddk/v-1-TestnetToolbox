import { parseEther } from "viem";
import { getScrollClient, getScrollWallet } from "../../helperMod/viemHelper";
import { Scroll } from "../../setting";
import { fabric } from "./abi";

export class ScrollDexModule {
    private privateKey:string[]
    constructor(privateKey:string[]){
        this.privateKey = privateKey;
    };

    async scrollFabric():Promise<void>{
        const scrollWallet = getScrollWallet({ privateKey: `0x${this.privateKey}` });
        const numberContracts = Scroll.numberScrollContracts;
        const contractAddress = []
        const argsDex = [numberContracts];
        const txPayload = await scrollWallet.writeContract({
            address: "0x51a0f1CFcF0304E4Cea2F63479AE62AcBBC7D075",
            abi: fabric,
            args: argsDex,
            functionName: 'createContracts',
            value: BigInt(numberContracts) * parseEther('0.001'),
        });
        console.log("Send transaction on fabric:", `https://sepolia-blockscout.scroll.io/address/${txPayload}` );
    };
};
