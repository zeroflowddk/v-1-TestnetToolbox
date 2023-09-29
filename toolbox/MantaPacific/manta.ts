import { getMantaClient, getMantaWallet } from "../../helperMod/viemHelper";
import { mantaBridgeAbi } from "./abi";
import { Manta } from "../../setting";


export class MantaBridgeModule {
    private privateKey:string[]
    constructor(privateKey:string[]){
        this.privateKey = privateKey;
    };

    async bridgeManta():Promise<void>{
        const mantaClient = getMantaClient();
        const mantaWallet = getMantaWallet({ privateKey: `0x${this.privateKey}` });
        const getBalance = await mantaClient.getBalance(mantaWallet.account);
        const [minPercentage, maxPercentage] = Manta.amountProcentInBridge;
        const randomPercentage = Math.ceil(Math.random() * (maxPercentage - minPercentage) + minPercentage);
        const amount = (getBalance / BigInt(100)) * BigInt(randomPercentage);
        const txPayload = await mantaWallet.writeContract({
            address: "0x4638aC6b5727a8b9586D3eba5B44Be4b74ED41Fc",
            abi: mantaBridgeAbi,
            args: [200000, "0x"],
            functionName: 'depositETH',
            value: amount
        });
        console.log(txPayload);
    };
};
