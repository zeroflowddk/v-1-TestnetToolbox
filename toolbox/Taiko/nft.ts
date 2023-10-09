import { getTaikoClient, getTaikoWallet } from "../../helperMod/viemHelper";
import { Hex, parseEther } from "viem";
import chalk from "chalk";
import { mint } from "./abi";

export class mintNftTaiko {
    private_key: string
    constructor(private_key:string){
        this.private_key = private_key;
    };  

    async mintNftHelloTaiko():Promise<void>{
        const client = getTaikoClient();
        const wallet = getTaikoWallet({ privateKey: `0x${this.private_key}`});
        const args = ['0xA0134C3431168D8fC611A8bb40364dd1F6A7ba1c', 1, [], 1]
        try {
            const mintPayload = await wallet.writeContract({
                address: "0xB80CDCCC10aa91CE60FB7F758e48Fa8e057FA57b", 
                abi: mint,
                functionName: 'mint',
                args:[args],
                value: parseEther('0.00025')
            });
            console.log(chalk.green("Send transaction with mint NFT:", `https://explorer.jolnir.taiko.xyz/address/${mintPayload}` ));
        } catch(error) {console.log(chalk.red("Произошла ошибка:", error))};

    };  
};

