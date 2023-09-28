import { TaikoBridgeModule } from "./bridges/Taiko/taiko";
import { ScrollBridgeModule } from "./bridges/Scroll/Bridgescroll";
import { ScrollDexModule } from "./bridges/Scroll/dex";
import { MantaBridgeModule } from "./bridges/MantaPacific/manta";
import { parseFile } from "./helperMod/viemHelper";

const privateKey = parseFile('./privateKey.txt');

const taiko = new TaikoBridgeModule(privateKey);
const scrollBridge = new ScrollBridgeModule(privateKey);
const scrollDex = new ScrollDexModule(privateKey);

scrollDex.scrollFabric()