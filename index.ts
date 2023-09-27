import { TaikoBridgeModule } from "./bridges/Taiko/taiko";
import { ScrollBridgeModule } from "./bridges/Scroll/scrollBridge";
import { MantaBridgeModule } from "./bridges/MantaPacific/manta";
import { parseFile } from "./helperMod/viemHelper";

const privateKey = parseFile('./privateKey.txt');

const taiko = new TaikoBridgeModule(privateKey);
const scroll = new ScrollBridgeModule(privateKey);