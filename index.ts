import { ScrollDexModule } from "./toolbox/Scroll/dex";
import { ScrollBridgeModule } from "./toolbox/Scroll/Bridgescroll";
import { parseFile } from "./helperMod/viemHelper";
import { Modules, Taiko, Scroll } from "./setting";
import chalk from "chalk";
import { TaikoBridgeModule } from "./toolbox/Taiko/taiko";
import { TaikoDexModule } from "./toolbox/Taiko/dex";

const wallet = parseFile('./privateKey.txt');

for (let i = 0; i < wallet.length; i++) {
    if (Modules.scroll) {
        if (Scroll.bridge) {
            const scrollBridge = new ScrollBridgeModule(wallet[i]);
            await scrollBridge.bridgeScroll();
        }
        if (Scroll.fabric) {
            const scrollDex = new ScrollDexModule(wallet[i]);
            await scrollDex.scrollFabric(Scroll.numberScrollContracts);
        }
    } else {
        console.log(chalk.red('У вас не включен модуль Scroll в файле settings.ts'))
    }

    if (Modules.taiko) {
        if (Taiko.bridge) {
            const taikoBridge = new TaikoBridgeModule(wallet[i]);
            await taikoBridge.bridgeDepositeL1L2();
        }
        if (Taiko.swap) {
            const taikoDex = new TaikoDexModule(wallet[i]);
            await taikoDex.taikoSwap(Taiko.toToken);
        }
        if (Taiko.fabric) {
            const taikoDex = new TaikoDexModule(wallet[i]);
            await taikoDex.taikoFabric(Taiko.numberTaikoContracts);
        }
    } else {
        console.log(chalk.red('У вас не включен модуль Taiko в файле settings.ts'))
    }

    if (Modules.manta) {
        const mantaBridge = new ScrollBridgeModule(wallet[i]);
        await mantaBridge.bridgeScroll();
    } else {
        console.log(chalk.red('У вас не включен модуль Manta Pacific в файле settings.ts'))
    }
}
