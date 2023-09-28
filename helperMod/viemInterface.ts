import { TaikoBridgeModule } from "../toolbox/Taiko/taiko";
import { ScrollBridgeModule } from "../toolbox/Scroll/Bridgescroll";
import { MantaBridgeModule } from "../toolbox/MantaPacific/manta";
import { ScrollDexModule } from "../toolbox/Scroll/dex";
import { TaikoDexModule } from "../toolbox/Taiko/dex";
import { parseFile } from "./viemHelper";

const privateKey = parseFile('./privateKey.txt');

export const mantaBridge = new MantaBridgeModule(privateKey);
export const taikoBridge = new TaikoBridgeModule(privateKey);
export const taikoDex = new TaikoDexModule(privateKey);
export const scrollBridge = new ScrollBridgeModule(privateKey);
export const scrollDex = new ScrollDexModule(privateKey);