export const appabi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    type: "error",
    name: "InsufficientFunds",
  },
  {
    inputs: [],
    type: "error",
    name: "InvalidPostFunds",
  },
  {
    inputs: [],
    type: "error",
    name: "InvalidPostIndex",
  },
  {
    inputs: [],
    type: "error",
    name: "InvalidPostOwner",
  },
  {
    inputs: [],
    type: "error",
    name: "InvalidWallIndex",
  },
  {
    inputs: [],
    type: "error",
    name: "ReentrancyGuardReentrantCall",
  },
  {
    inputs: [],
    type: "error",
    name: "WallExists",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postIndex",
        type: "uint256",
        indexed: true,
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
        indexed: false,
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "DepositToPost",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wallIndex",
        type: "uint256",
        indexed: true,
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "postIndex",
        type: "uint256",
        indexed: false,
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
        indexed: false,
      },
    ],
    type: "event",
    name: "NewPost",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "wallName",
        type: "string",
        indexed: false,
      },
      {
        internalType: "uint256",
        name: "wallIndex",
        type: "uint256",
        indexed: false,
      },
      {
        internalType: "uint256",
        name: "postCostFactor",
        type: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "NewWall",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postIndex",
        type: "uint256",
        indexed: true,
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
        indexed: false,
      },
    ],
    type: "event",
    name: "WithdrawalFromPost",
    anonymous: false,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postCostFactor",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "wallName",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "createWall",
    outputs: [
      {
        internalType: "uint256",
        name: "wallIndex",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    name: "lockFunds",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wallIndex",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "post",
    outputs: [
      {
        internalType: "uint256",
        name: "postIndex",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    name: "postOwnership",
    outputs: [
      {
        internalType: "uint256",
        name: "wallIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "funds",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "token",
    outputs: [
      {
        internalType: "contract ERC20Burnable",
        name: "",
        type: "address",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "postIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "unlockFunds",
    outputs: [],
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
    name: "wallIndexByHash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    name: "walls",
    outputs: [
      {
        internalType: "uint256",
        name: "postCostFactor",
        type: "uint256",
      },
    ],
  },
] as const;
