import { TaikoBridgeModule } from "../toolbox/Taiko/taiko";
import { ScrollBridgeModule } from "../toolbox/Scroll/Bridgescroll";
import { MantaBridgeModule } from "../toolbox/MantaPacific/manta";
import { ScrollDexModule } from "../toolbox/Scroll/dex";
import { TaikoDexModule } from "../toolbox/Taiko/dex";
import { parseFile } from "./viemHelper";
import { Modules } from "../setting";

export const privateKey = parseFile('./privateKey.txt');

export const mantaBridge = new MantaBridgeModule(privateKey);
export const taikoBridge = new TaikoBridgeModule(privateKey);
export const taikoDex = new TaikoDexModule(privateKey);
export const scrollBridge = new ScrollBridgeModule(privateKey);
export const scrollDex = new ScrollDexModule(privateKey);

if (Modules){
    mantaBridge.bridgeManta()
} else {
    console.log('Модуль не включен в конфиге')
}