import { defineChain } from 'viem'

export const Goerli = defineChain({
    id:5,
    name:'Goerli',
    network: 'goerli',
    nativeCurrency:{
        decimals: 18, 
        name: 'Ether',
        symbol: 'ETH'
    }, 
    rpcUrls: {
        default: {
            http: ['https://ethereum-goerli.publicnode.com'],
        },
        public: {
            http : ['https://ethereum-goerli.publicnode.com']
        }
    },
    blockExplorers: {
        default: {name:'Explorer', url:'https://goerli.etherscan.io'},
    }
});



export const Sepolia = defineChain({
    id:11155111,
    name:'Sepolia',
    network: 'sepolia',
    nativeCurrency:{
        decimals: 18, 
        name: 'Ether',
        symbol: 'ETH'
    }, 
    rpcUrls: {
        default: {
            http: ['https://endpoints.omniatech.io/v1/eth/sepolia/public'],
        },
        public: {
            http : ['https://endpoints.omniatech.io/v1/eth/sepolia/public']
        }
    },
    blockExplorers: {
        default: {name:'Explorer', url:'https://sepolia.etherscan.io'},
    }
});

export const Scroll = defineChain({
    id:534351,
    name:'Scroll Sepolia',
    network: 'scroll',
    nativeCurrency:{
        decimals: 18, 
        name: 'Ether',
        symbol: 'ETH'
    }, 
    rpcUrls: {
        default: {
            http: ['https://sepolia-rpc.scroll.io'],
        },
        public: {
            http : ['https://sepolia-rpc.scroll.io']
        }
    },
    blockExplorers: {
        default: {name:'Explorer', url:'https://sepolia-blockscout.scroll.io'},
    }
});


export const TaikoL2 = defineChain({
    id:167007,
    name:'Taiko',
    network: 'Taiko',
    nativeCurrency:{
        decimals: 18, 
        name: 'Ether',
        symbol: 'ETH'
    }, 
    rpcUrls: {
        default: {
            http: ['https://rpc.jolnir.taiko.xyz'],
        },
        public: {
            http : ['https://rpc.jolnir.taiko.xyz']
        }
    },
    blockExplorers: {
        default: {name:'Explorer', url:'https://explorer.jolnir.taiko.xyz'},
    }
});


