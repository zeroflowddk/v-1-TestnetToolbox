import { Modules, Taiko, Scroll, Manta } from "../setting";
import { TaikoBridgeModule } from "../toolbox/Taiko/taiko";
import { ScrollBridgeModule } from "../toolbox/Scroll/Bridgescroll";
import { MantaBridgeModule } from "../toolbox/MantaPacific/manta";
import { ScrollDexModule } from "../toolbox/Scroll/dex";
import { TaikoDexModule } from "../toolbox/Taiko/dex";
import { parseFile } from "./viemHelper";

export const privateKey = parseFile('./privateKey.txt');

export let mantaBridge: MantaBridgeModule | undefined;
export let taikoBridge: TaikoBridgeModule | undefined;
export let taikoDex: TaikoDexModule | undefined;
export let scrollBridge: ScrollBridgeModule | undefined;
export let scrollDex: ScrollDexModule | undefined;

if (Modules.taiko) {
    taikoBridge = new TaikoBridgeModule(privateKey);
    taikoDex = new TaikoDexModule(privateKey);
};
  
if (Modules.scroll) {
    scrollBridge = new ScrollBridgeModule(privateKey);
    scrollDex = new ScrollDexModule(privateKey);
};
  
if (Modules.manta) {
    mantaBridge = new MantaBridgeModule(privateKey);
};