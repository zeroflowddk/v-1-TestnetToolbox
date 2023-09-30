import { createWalletClient, createPublicClient, http, PublicClient, Hex, WalletClient, HttpTransport, Chain, PrivateKeyAccount, parseEther, parseGwei, formatGwei} from "viem";
import { Sepolia, TaikoL2, Scroll, Goerli } from "./viemChain";
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

export function getScrollClient(): PublicClient {
    return createPublicClient({ chain:Scroll, transport:http() });
};

export function getScrollWallet({privateKey}:{privateKey:Hex}):WalletClient<HttpTransport,Chain,PrivateKeyAccount>  {
    return createWalletClient({chain:Scroll, account:privateKeyToAccount(privateKey), transport:http() });
};


export function getMantaClient(): PublicClient {
    return createPublicClient({ chain:Goerli, transport:http() });
};

export function getMantaWallet({privateKey}:{privateKey:Hex}):WalletClient<HttpTransport,Chain,PrivateKeyAccount>  {
    return createWalletClient({chain:Goerli, account:privateKeyToAccount(privateKey), transport:http() });
};


export const parseFile = (file: any) => {
    const data = fs.readFileSync(file, "utf-8");
    const array = data.split('\n'); 
    return array;
}
