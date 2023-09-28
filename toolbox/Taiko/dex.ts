import { fabric, swap } from "./abi";
import { parseEther } from "viem";
import { getTaikoWallet } from "../../helperMod/viemHelper";
import { Taiko } from "../../setting";


export class TaikoDexModule {
    private privateKey:string[]
    constructor(privateKey:string[]){
        this.privateKey = privateKey;
    };

    async taikoFabric():Promise<void>{
        const taikoWallet = getTaikoWallet({ privateKey: `0x${this.privateKey}` });
        const numberContracts = Taiko.numberTaikoContracts;
        const argsDex = [numberContracts];
        const txPayload = await taikoWallet.writeContract({
            address: "0xF69992828179C1D4A13E048c1B6692fB656372fA",
            abi: fabric,
            args: argsDex,
            functionName: 'createContracts',
            value: BigInt(numberContracts) * parseEther('0.001'),
        });
        console.log("Send transaction on fabric:", `https://explorer.jolnir.taiko.xyz/address/${txPayload}` );
    };
};
