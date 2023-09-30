import { fabric, taikoSwap } from "./abi";
import { parseEther } from "viem";
import { getTaikoClient, getTaikoWallet } from "../../helperMod/viemHelper";
import { Taiko } from "../../setting";
import { taikoContracts } from "./addresses";
import chalk from "chalk";

export class TaikoDexModule {
    private privateKey:string
    constructor(privateKey:string){
        this.privateKey = privateKey;
    };

    async taikoFabric(numbetOfContracts:number):Promise<void>{
        try {
            const taikoWallet = getTaikoWallet({ privateKey: `0x${this.privateKey}` });
            const argsDex = [numbetOfContracts];
            const txPayload = await taikoWallet.writeContract({
                address: "0xF69992828179C1D4A13E048c1B6692fB656372fA",
                abi: fabric,
                args: argsDex,
                functionName: 'createContracts',
                value: BigInt(numbetOfContracts) * parseEther('0.001'),
            });
            console.log(chalk.green("Send transaction on fabric:", `https://explorer.jolnir.taiko.xyz/address/${txPayload}` ));
        } catch(error) {console.log(chalk.red("Произошла ошибка:", error));}
    };

    async taikoSwap(tokenB:string):Promise<void>{
        try {
            tokenB = (tokenB === 'horse') ? taikoContracts.horse : taikoContracts.ttkjo;
            const taikoClient = getTaikoClient();
            const taikoWallet = getTaikoWallet({ privateKey: `0x${this.privateKey}` });
            const getBalance = await taikoClient.getBalance(taikoWallet.account);
            const [minPercentage, maxPercentage] = Taiko.amountInProcentDex;
            const randomPercentage = Math.ceil(Math.random() * (maxPercentage - minPercentage) + minPercentage);
            const amount = (getBalance / BigInt(100)) * BigInt(randomPercentage);
            const swapPath = [taikoContracts.eth, tokenB];
            const deadline = Math.floor(Date.now() / 1000) + 60 * 10;
            const argsDex = [amount, swapPath, taikoWallet.account.address, deadline];
            const txPayload = await taikoWallet.writeContract({
                address: "0xCC287c5F7455Aa091C34CA7C73228863a99B0070",
                abi: taikoSwap,
                args: argsDex,
                functionName: 'swapExactETHForTokens',
                value: amount,
            });
            console.log(chalk.green("Send transaction on Taiko Swap:", `https://explorer.jolnir.taiko.xyz/address/${txPayload}` ));
        } catch(error){console.log(chalk.red("Произошла ошибка:", error));}
    };
};
