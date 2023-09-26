import { createWalletClient, createPublicClient, http, PublicClient, Hex, WalletClient, HttpTransport, Chain, PrivateKeyAccount, parseEther, parseGwei, formatGwei} from "viem";
import { Sepolia, TaikoL2 } from "./viemChain";
//import {sepolia, taikoJolnir } from 'viem/chains'
import {privateKeyToAccount} from "viem/accounts";
import fs from 'fs';


export function getTaikoClient(): PublicClient {
    return createPublicClient({ chain:TaikoL2, transport:http() });
};

export function getTaikoWallet({privateKey}:{privateKey:Hex}):WalletClient<HttpTransport,Chain,PrivateKeyAccount>  {
    return createWalletClient({chain:TaikoL2, account:privateKeyToAccount(privateKey), transport:http() });
};

export function getSepoliaClient(): PublicClient {
    return createPublicClient({ chain:Sepolia, transport:http() });
};

export function getSepoliaWallet({privateKey}:{privateKey:Hex}):WalletClient<HttpTransport,Chain,PrivateKeyAccount>  {
    return createWalletClient({chain:Sepolia, account:privateKeyToAccount(privateKey), transport:http() });
};

export const parseFile = (file:any) => {
    const data = fs.readFileSync(file, "utf-8");
    const array = (data.replace(/[^a-zA-Z0-9\n]/g,'')).split('\n');
    return array;
}
