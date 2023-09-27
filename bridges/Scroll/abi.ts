export const abiBridge = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "l1Token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "l2Token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "DepositERC20",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "DepositETH",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "l1Token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "l2Token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "FinalizeWithdrawERC20",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "FinalizeWithdrawETH",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RefundERC20",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "RefundETH",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldDefaultERC20Gateway",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newDefaultERC20Gateway",
          "type": "address"
        }
      ],
      "name": "SetDefaultERC20Gateway",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldGateway",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newGateway",
          "type": "address"
        }
      ],
      "name": "SetERC20Gateway",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldETHGateway",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newEthGateway",
          "type": "address"
        }
      ],
      "name": "SetETHGateway",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "ERC20Gateway",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "defaultERC20Gateway",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_gasLimit",
          "type": "uint256"
        }
      ],
      "name": "depositERC20",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_gasLimit",
          "type": "uint256"
        }
      ],
      "name": "depositERC20",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_gasLimit",
          "type": "uint256"
        }
      ],
      "name": "depositERC20AndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_gasLimit",
          "type": "uint256"
        }
      ],
      "name": "depositETH",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_gasLimit",
          "type": "uint256"
        }
      ],
      "name": "depositETH",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_gasLimit",
          "type": "uint256"
        }
      ],
      "name": "depositETHAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ethGateway",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "finalizeWithdrawERC20",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "finalizeWithdrawETH",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "gatewayInContext",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "getERC20Gateway",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_l1Address",
          "type": "address"
        }
      ],
      "name": "getL2ERC20Address",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ethGateway",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_defaultERC20Gateway",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "requestERC20",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newDefaultERC20Gateway",
          "type": "address"
        }
      ],
      "name": "setDefaultERC20Gateway",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_tokens",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "_gateways",
          "type": "address[]"
        }
      ],
      "name": "setERC20Gateway",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newEthGateway",
          "type": "address"
        }
      ],
      "name": "setETHGateway",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]

export const DodoAbi = [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "weth",
        "internalType": "address payable"
      },
      {
        "type": "address",
        "name": "dodoApproveProxy",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "feeReceiver",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "event",
    "name": "OrderHistory",
    "inputs": [
      {
        "type": "address",
        "name": "fromToken",
        "internalType": "address",
        "indexed": false
      },
      {
        "type": "address",
        "name": "toToken",
        "internalType": "address",
        "indexed": false
      },
      {
        "type": "address",
        "name": "sender",
        "internalType": "address",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "fromAmount",
        "internalType": "uint256",
        "indexed": false
      },
      {
        "type": "uint256",
        "name": "returnAmount",
        "internalType": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "internalType": "address",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "internalType": "address",
        "indexed": true
      }
    ],
    "anonymous": false
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "name": "_DODO_APPROVE_PROXY_",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "name": "_WETH_",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "addApproveWhiteList",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddr",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "addWhiteList",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddr",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "changeRouteFeeRate",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFeeRate",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "changeRouteFeeReceiver",
    "inputs": [
      {
        "type": "address",
        "name": "newFeeReceiver",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "changeTotalWeight",
    "inputs": [
      {
        "type": "uint256",
        "name": "newTotalWeight",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [
      {
        "type": "uint256",
        "name": "receiveAmount",
        "internalType": "uint256"
      }
    ],
    "name": "dodoMutliSwap",
    "inputs": [
      {
        "type": "uint256",
        "name": "fromTokenAmount",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "minReturnAmount",
        "internalType": "uint256"
      },
      {
        "type": "uint256[]",
        "name": "splitNumber",
        "internalType": "uint256[]"
      },
      {
        "type": "address[]",
        "name": "midToken",
        "internalType": "address[]"
      },
      {
        "type": "address[]",
        "name": "assetFrom",
        "internalType": "address[]"
      },
      {
        "type": "bytes[]",
        "name": "sequence",
        "internalType": "bytes[]"
      },
      {
        "type": "bytes",
        "name": "feeData",
        "internalType": "bytes"
      },
      {
        "type": "uint256",
        "name": "deadLine",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [
      {
        "type": "uint256",
        "name": "receiveAmount",
        "internalType": "uint256"
      }
    ],
    "name": "externalSwap",
    "inputs": [
      {
        "type": "address",
        "name": "fromToken",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "toToken",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "approveTarget",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "swapTarget",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "fromTokenAmount",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "minReturnAmount",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "feeData",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "callDataConcat",
        "internalType": "bytes"
      },
      {
        "type": "uint256",
        "name": "deadLine",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "name": "isApproveWhiteListedContract",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "name": "isWhiteListedContract",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [
      {
        "type": "uint256",
        "name": "receiveAmount",
        "internalType": "uint256"
      }
    ],
    "name": "mixSwap",
    "inputs": [
      {
        "type": "address",
        "name": "fromToken",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "toToken",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "fromTokenAmount",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "minReturnAmount",
        "internalType": "uint256"
      },
      {
        "type": "address[]",
        "name": "mixAdapters",
        "internalType": "address[]"
      },
      {
        "type": "address[]",
        "name": "mixPairs",
        "internalType": "address[]"
      },
      {
        "type": "address[]",
        "name": "assetTo",
        "internalType": "address[]"
      },
      {
        "type": "uint256",
        "name": "directions",
        "internalType": "uint256"
      },
      {
        "type": "bytes[]",
        "name": "moreInfos",
        "internalType": "bytes[]"
      },
      {
        "type": "bytes",
        "name": "feeData",
        "internalType": "bytes"
      },
      {
        "type": "uint256",
        "name": "deadLine",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "name": "owner",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "removeApproveWhiteList",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddr",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "removeWhiteList",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddr",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "renounceOwnership",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "routeFeeRate",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "name": "routeFeeReceiver",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "superWithdraw",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "name": "totalWeight",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
]