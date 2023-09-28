import { fabric } from "./abi";
import { parseEther } from "viem";
import { getScrollWallet } from "../../helperMod/viemHelper";
import { Scroll } from "../../setting";


export class TaikoDexModule {
    private privateKey:string[]
    constructor(privateKey:string[]){
        this.privateKey = privateKey;
    };

    async taikoFabric():Promise<void>{
        const scrollWallet = getScrollWallet({ privateKey: `0x${this.privateKey}` });
        const numberContracts = Scroll.numberContracts;
        const argsDex = [numberContracts];
        const txPayload = await scrollWallet.writeContract({
            address: "0xF69992828179C1D4A13E048c1B6692fB656372fA",
            abi: fabric,
            args: argsDex,
            functionName: 'createContracts',
            value: BigInt(numberContracts) * parseEther('0.001'),
        });
        console.log("Send transaction on fabric:", `https://explorer.jolnir.taiko.xyz/address/${txPayload}` );
    };
};
