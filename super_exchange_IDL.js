const address = "super4XGGb7KWorPuoSNVQDHAVQjWzTpqcoRS86d9Us"
  , metadata = {
    name: "gg_meme",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor"
}
  , instructions = [{
    name: "buy_super",
    discriminator: [143, 214, 29, 74, 169, 226, 100, 253],
    accounts: [{
        name: "config",
        relations: ["market"]
    }, {
        name: "market",
        writable: !0
    }, {
        name: "native_vault",
        writable: !0,
        relations: ["market"]
    }, {
        name: "fee_recipient",
        writable: !0
    }, {
        name: "token_vault",
        writable: !0
    }, {
        name: "community_vault",
        writable: !0
    }, {
        name: "super_account",
        writable: !0,
        pda: {
            seeds: [{
                kind: "const",
                value: [115, 117, 112, 101, 114, 95, 97, 99, 99, 111, 117, 110, 116]
            }, {
                kind: "account",
                path: "payer"
            }, {
                kind: "account",
                path: "config"
            }]
        }
    }, {
        name: "token_recipient",
        writable: !0
    }, {
        name: "payer",
        writable: !0,
        signer: !0
    }, {
        name: "update_market_metadata_authority",
        signer: !0,
        relations: ["config"]
    }, {
        name: "token_program",
        address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
    }, {
        name: "system_program",
        address: "11111111111111111111111111111111"
    }],
    args: [{
        name: "args",
        type: {
            defined: {
                name: "BuySuperArgs"
            }
        }
    }]
}, {
    name: "buy_token",
    discriminator: [138, 127, 14, 91, 38, 87, 115, 105],
    accounts: [{
        name: "config",
        relations: ["market"]
    }, {
        name: "market",
        writable: !0
    }, {
        name: "native_vault",
        writable: !0,
        relations: ["market"]
    }, {
        name: "fee_recipient",
        writable: !0
    }, {
        name: "token_vault",
        writable: !0
    }, {
        name: "community_vault",
        writable: !0
    }, {
        name: "token_recipient",
        writable: !0
    }, {
        name: "payer",
        writable: !0,
        signer: !0
    }, {
        name: "token_program",
        address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
    }, {
        name: "system_program",
        address: "11111111111111111111111111111111"
    }],
    args: [{
        name: "args",
        type: {
            defined: {
                name: "BuyTokenArgs"
            }
        }
    }]
}, {
    name: "buy_token_exact_in",
    discriminator: [234, 141, 190, 236, 221, 89, 9, 143],
    accounts: [{
        name: "config",
        relations: ["market"]
    }, {
        name: "market",
        writable: !0
    }, {
        name: "native_vault",
        writable: !0,
        relations: ["market"]
    }, {
        name: "fee_recipient",
        writable: !0
    }, {
        name: "token_vault",
        writable: !0
    }, {
        name: "community_vault",
        writable: !0
    }, {
        name: "token_recipient",
        writable: !0
    }, {
        name: "payer",
        writable: !0,
        signer: !0
    }, {
        name: "token_program",
        address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
    }, {
        name: "system_program",
        address: "11111111111111111111111111111111"
    }],
    args: [{
        name: "args",
        type: {
            defined: {
                name: "BuyTokenExactInArgs"
            }
        }
    }]
}, {
    name: "create_super_account",
    discriminator: [5, 140, 235, 182, 62, 39, 109, 62],
    accounts: [{
        name: "config"
    }, {
        name: "super_account",
        writable: !0,
        pda: {
            seeds: [{
                kind: "const",
                value: [115, 117, 112, 101, 114, 95, 97, 99, 99, 111, 117, 110, 116]
            }, {
                kind: "account",
                path: "owner"
            }, {
                kind: "account",
                path: "config"
            }]
        }
    }, {
        name: "owner"
    }, {
        name: "payer",
        writable: !0,
        signer: !0
    }, {
        name: "system_program",
        address: "11111111111111111111111111111111"
    }],
    args: []
}, {
    name: "give_rewards",
    discriminator: [254, 219, 13, 211, 184, 19, 82, 47],
    accounts: [{
        name: "config",
        relations: ["market"]
    }, {
        name: "market"
    }, {
        name: "payer",
        writable: !0,
        signer: !0
    }, {
        name: "token_payer",
        writable: !0
    }, {
        name: "token_recipient",
        writable: !0
    }, {
        name: "token_program",
        address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
    }],
    args: [{
        name: "args",
        type: {
            defined: {
                name: "GiveRewardsArgs"
            }
        }
    }]
}, {
    name: "initialize_config",
    docs: ["Initializes a new config account."],
    discriminator: [208, 127, 21, 1, 194, 190, 196, 70],
    accounts: [{
        name: "config",
        writable: !0,
        signer: !0
    }, {
        name: "payer",
        writable: !0,
        signer: !0
    }, {
        name: "system_program",
        address: "11111111111111111111111111111111"
    }],
    args: [{
        name: "args",
        type: {
            defined: {
                name: "InitializeConfigArgs"
            }
        }
    }]
}, {
    name: "initialize_market",
    docs: ["Initializes a new market."],
    discriminator: [35, 35, 189, 193, 155, 48, 170, 203],
    accounts: [{
        name: "config"
    }, {
        name: "token_metadata",
        writable: !0
    }, {
        name: "token_mint",
        writable: !0,
        signer: !0
    }, {
        name: "token_vault",
        docs: ["The vault that holds the token."],
        writable: !0,
        pda: {
            seeds: [{
                kind: "account",
                path: "market"
            }, {
                kind: "const",
                value: [6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206, 235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140, 245, 133, 126, 255, 0, 169]
            }, {
                kind: "account",
                path: "token_mint"
            }],
            program: {
                kind: "const",
                value: [140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142, 13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216, 219, 233, 248, 89]
            }
        }
    }, {
        name: "community_vault",
        writable: !0
    }, {
        name: "market",
        writable: !0,
        pda: {
            seeds: [{
                kind: "const",
                value: [109, 97, 114, 107, 101, 116]
            }, {
                kind: "arg",
                path: "args.symbol"
            }, {
                kind: "account",
                path: "config"
            }]
        }
    }, {
        name: "native_vault",
        docs: ["The vault that holds the native token(SOL)."],
        writable: !0
    }, {
        name: "fee_recipient",
        writable: !0
    }, {
        name: "payer",
        writable: !0,
        signer: !0
    }, {
        name: "token_program",
        address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
    }, {
        name: "associated_token_program",
        address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
    }, {
        name: "metaplex_program",
        address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
    }, {
        name: "system_program",
        address: "11111111111111111111111111111111"
    }, {
        name: "rent",
        address: "SysvarRent111111111111111111111111111111111"
    }],
    args: [{
        name: "args",
        type: {
            defined: {
                name: "InitializeMarketArgs"
            }
        }
    }]
}, {
    name: "realloc_config",
    docs: ["Reallocates the config account."],
    discriminator: [39, 50, 148, 55, 7, 85, 147, 114],
    accounts: [{
        name: "config",
        writable: !0
    }, {
        name: "signer",
        writable: !0,
        signer: !0
    }, {
        name: "system_program",
        address: "11111111111111111111111111111111"
    }],
    args: []
}, {
    name: "sell_token",
    discriminator: [109, 61, 40, 187, 230, 176, 135, 174],
    accounts: [{
        name: "config",
        relations: ["market"]
    }, {
        name: "market",
        writable: !0
    }, {
        name: "native_vault",
        writable: !0,
        relations: ["market"]
    }, {
        name: "fee_recipient",
        writable: !0
    }, {
        name: "token_vault",
        writable: !0,
        relations: ["market"]
    }, {
        name: "native_recipient",
        writable: !0
    }, {
        name: "token_payer",
        writable: !0
    }, {
        name: "payer",
        signer: !0
    }, {
        name: "token_program",
        address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
    }, {
        name: "system_program",
        address: "11111111111111111111111111111111"
    }],
    args: [{
        name: "args",
        type: {
            defined: {
                name: "SellTokenArgs"
            }
        }
    }]
}, {
    name: "set_config_authority",
    docs: ["Sets the authority of the config account."],
    discriminator: [16, 200, 212, 18, 95, 43, 107, 89],
    accounts: [{
        name: "config",
        writable: !0
    }, {
        name: "authority",
        signer: !0,
        relations: ["config"]
    }],
    args: [{
        name: "authority",
        type: "pubkey"
    }]
}, {
    name: "set_create_market_config",
    docs: ["Sets the create market config of the config account."],
    discriminator: [182, 176, 151, 6, 99, 252, 142, 165],
    accounts: [{
        name: "config",
        writable: !0
    }, {
        name: "authority",
        signer: !0,
        relations: ["config"]
    }],
    args: [{
        name: "args",
        type: {
            defined: {
                name: "SetCreateMarketConfigArgs"
            }
        }
    }]
}, {
    name: "set_fee_recipient",
    docs: ["Sets the fee recipient of the config account."],
    discriminator: [227, 18, 215, 42, 237, 246, 151, 66],
    accounts: [{
        name: "config",
        writable: !0
    }, {
        name: "authority",
        signer: !0,
        relations: ["config"]
    }],
    args: [{
        name: "fee_recipient",
        type: "pubkey"
    }]
}, {
    name: "update_market_metadata",
    docs: ["Updates the metadata of a market."],
    discriminator: [28, 237, 190, 65, 132, 24, 133, 243],
    accounts: [{
        name: "config",
        relations: ["market"]
    }, {
        name: "market"
    }, {
        name: "token_metadata",
        writable: !0
    }, {
        name: "market_metadata_authority",
        signer: !0
    }, {
        name: "metaplex_program",
        address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
    }],
    args: [{
        name: "args",
        type: {
            defined: {
                name: "UpdateMarketMetadataArgs"
            }
        }
    }]
}]
  , accounts = [{
    name: "Config",
    discriminator: [155, 12, 170, 224, 30, 250, 204, 130]
}, {
    name: "Market",
    discriminator: [219, 190, 213, 55, 0, 227, 198, 154]
}, {
    name: "SuperAccount",
    discriminator: [183, 136, 83, 244, 222, 229, 230, 80]
}]
  , errors = [{
    code: 6e3,
    name: "MakerFeeRateTooHigh",
    msg: "Maker fee rate too high"
}, {
    code: 6001,
    name: "TakerFeeRateTooHigh",
    msg: "Taker fee rate too high"
}, {
    code: 6002,
    name: "NotConfigAuthority",
    msg: "Not config authority"
}, {
    code: 6003,
    name: "AmountCannotBeZero",
    msg: "Amount cannot be zero"
}, {
    code: 6004,
    name: "ConfigAccountMismatch",
    msg: "Config account mismatch"
}, {
    code: 6005,
    name: "TokenMintAccountMismatch",
    msg: "Token mint account mismatch"
}, {
    code: 6006,
    name: "FeeRecipientMismatch",
    msg: "Fee recipient mismatch"
}, {
    code: 6007,
    name: "BuyAmountTooLarge",
    msg: "Buy amount too large"
}, {
    code: 6008,
    name: "PayAmountExceedsMaxPay",
    msg: "Pay amount exceeds max pay"
}, {
    code: 6009,
    name: "InvalidSymbolLength",
    msg: "Invalid symbol length"
}, {
    code: 6010,
    name: "InvalidSymbol",
    msg: "Invalid symbol"
}, {
    code: 6011,
    name: "NotMetadataAuthority",
    msg: "Invalid metadata authority"
}, {
    code: 6012,
    name: "SigVerificationFailed",
    msg: "Sig verification failed"
}, {
    code: 6013,
    name: "InitializeBuyAmountTooSmall",
    msg: "Initialize buy amount too small"
}, {
    code: 6014,
    name: "TokenVaultAccountMismatch",
    msg: "Token vault account mismatch"
}, {
    code: 6015,
    name: "CalculateYUnderflow",
    msg: "Underflow when calculating y"
}, {
    code: 6016,
    name: "TooMuchNativeTokenRequired",
    msg: "Too much native token required"
}, {
    code: 6017,
    name: "NativeVaultAccountMismatch",
    msg: "Native vault account mismatch"
}, {
    code: 6018,
    name: "ReceiveAmountTooSmall",
    msg: "Receive amount too small"
}, {
    code: 6019,
    name: "ReservedSymbol",
    msg: "Reserved symbol"
}, {
    code: 6020,
    name: "CommunityVaultAccountMismatch",
    msg: "Community vault account mismatch"
}, {
    code: 6021,
    name: "DonateRateTooHigh",
    msg: "Donate rate too high"
}, {
    code: 6022,
    name: "MissingCreateMarketAuthority",
    msg: "Missing create market authority"
}, {
    code: 6023,
    name: "CannotUseThisInstruction",
    msg: "Cannot use this instruction"
}, {
    code: 6024,
    name: "NonceUnexpected",
    msg: "Buy nonce unexpected"
}, {
    code: 6025,
    name: "BuyAmountUnexpected",
    msg: "Buy amount unexpected"
}, {
    code: 6026,
    name: "FeatureNotSupported",
    msg: "Feature not supported"
}]
  , types = [{
    name: "BuySuperArgs",
    type: {
        kind: "struct",
        fields: [{
            name: "next_nonce",
            type: "u32"
        }, {
            name: "next_buy_amount",
            type: "u64"
        }, {
            name: "max_pay",
            type: "u64"
        }, {
            name: "donate_rate",
            type: "u32"
        }]
    }
}, {
    name: "BuyTokenArgs",
    type: {
        kind: "struct",
        fields: [{
            name: "buy_amount",
            type: "u64"
        }, {
            name: "max_pay",
            type: "u64"
        }, {
            name: "donate_rate",
            type: "u32"
        }]
    }
}, {
    name: "BuyTokenExactInArgs",
    type: {
        kind: "struct",
        fields: [{
            name: "pay_amount",
            docs: ["The amount of the native token (SOL) to pay, not including fees.", "", "The actual amount paid will be `pay_amount + fees`.", "", "# Examples", "If you want to buy 1.234 SOL of token, you need to set pay_amount to 1.234 * 10^9,", "and the program will automatically add the trading fee on this basis."],
            type: "u64"
        }, {
            name: "min_receive",
            docs: ["The minimum amount of the token to receive."],
            type: "u64"
        }, {
            name: "donate_rate",
            type: "u32"
        }]
    }
}, {
    name: "Config",
    type: {
        kind: "struct",
        fields: [{
            name: "authority",
            type: "pubkey"
        }, {
            name: "fee_recipient",
            type: "pubkey"
        }, {
            name: "create_market_fee",
            docs: ["The fee to create a market."],
            type: "u64"
        }, {
            name: "create_market_min_buy_amount",
            docs: ["The minimum amount of token that must be bought when creating a market."],
            type: "u64"
        }, {
            name: "update_market_metadata_authority",
            docs: ["The pubkey of the update_market_metadata authority."],
            type: "pubkey"
        }, {
            name: "unused_1",
            type: "u32"
        }, {
            name: "unused_2",
            type: "u32"
        }, {
            name: "restrict_create_market",
            type: "bool"
        }]
    }
}, {
    name: "GiveRewardsArgs",
    type: {
        kind: "struct",
        fields: [{
            name: "post_id",
            type: "i64"
        }, {
            name: "post_author_id",
            type: "i64"
        }, {
            name: "comment_id",
            docs: ["comment_id=0 if give rewards to post"],
            type: "i64"
        }, {
            name: "amount",
            type: "u64"
        }, {
            name: "anonymous",
            type: "bool"
        }, {
            name: "message",
            type: "string"
        }]
    }
}, {
    name: "InitializeConfigArgs",
    type: {
        kind: "struct",
        fields: [{
            name: "authority",
            type: "pubkey"
        }, {
            name: "fee_recipient",
            type: "pubkey"
        }, {
            name: "create_market_fee",
            type: "u64"
        }, {
            name: "create_market_min_buy_amount",
            type: "u64"
        }, {
            name: "update_market_metadata_authority",
            type: "pubkey"
        }, {
            name: "restrict_create_market",
            type: "bool"
        }]
    }
}, {
    name: "InitializeMarketArgs",
    type: {
        kind: "struct",
        fields: [{
            name: "name",
            type: "string"
        }, {
            name: "symbol",
            type: "string"
        }, {
            name: "uri",
            type: "string"
        }]
    }
}, {
    name: "Market",
    type: {
        kind: "struct",
        fields: [{
            name: "config",
            type: "pubkey"
        }, {
            name: "token_mint",
            type: "pubkey"
        }, {
            name: "token_vault",
            docs: ["The vault that holds the token."],
            type: "pubkey"
        }, {
            name: "native_vault",
            docs: ["The vault that holds the native token(SOL)."],
            type: "pubkey"
        }, {
            name: "remaining_supply",
            type: "u64"
        }, {
            name: "symbol",
            type: "string"
        }, {
            name: "bump",
            type: {
                array: ["u8", 1]
            }
        }, {
            name: "native_vault_bump",
            type: {
                array: ["u8", 1]
            }
        }, {
            name: "community_vault",
            type: "pubkey"
        }, {
            name: "community_vault_bump",
            type: {
                array: ["u8", 1]
            }
        }]
    }
}, {
    name: "SellTokenArgs",
    type: {
        kind: "struct",
        fields: [{
            name: "sell_amount",
            type: "u64"
        }, {
            name: "min_receive",
            type: "u64"
        }]
    }
}, {
    name: "SetCreateMarketConfigArgs",
    type: {
        kind: "struct",
        fields: [{
            name: "create_market_fee",
            type: "u64"
        }, {
            name: "create_market_min_buy_amount",
            type: "u64"
        }, {
            name: "update_market_metadata_authority",
            type: "pubkey"
        }, {
            name: "restrict_create_market",
            type: "bool"
        }]
    }
}, {
    name: "SuperAccount",
    type: {
        kind: "struct",
        fields: [{
            name: "nonce",
            type: "u32"
        }, {
            name: "buy_amount",
            type: "u64"
        }]
    }
}, {
    name: "UpdateMarketMetadataArgs",
    type: {
        kind: "struct",
        fields: [{
            name: "name",
            type: "string"
        }, {
            name: "uri",
            type: "string"
        }, {
            name: "post_id",
            docs: ["Only used for logging."],
            type: "u64"
        }]
    }
}]

export const GgMemeIdl = {
    address,
    metadata,
    instructions,
    accounts,
    errors,
    types,
};

// const DEV_PROGRAM_ACCOUNTS = {
//     ConfigAccount: "GRAwZQybSEocRMhm27tsfRa3kC5EUwzs9cBUpJBHvVrM"
// }
//   , PROD_PROGRAM_ACCOUNTS = {
//     ConfigAccount: "7ci3rZLKS92bdvVBD9qGH8qpRk3o975TxViLAFRh7hUx"
// }
//   , DEV_PROGRAM_IDS = {
//     GgMeme: "quakeq7M2xRtm5sWahu5tqAW6SiX6Pu56fAVw5fKEHw",
//     FeeDistributor: "quakeZy21sx3BkYnneXoDjQ3fYzMsSZ6w5fbzAo9SmS"
// }
//   , PROD_PROGRAM_IDS = {
//     GgMeme: "super4XGGb7KWorPuoSNVQDHAVQjWzTpqcoRS86d9Us",
//     FeeDistributor: "feeDQ2GHpsLz67tNSXjfYfCmW7bXKcL4PEU7WAgFaN9"
// };

// GgMemeIdl.address = PROD_PROGRAM_IDS.GgMeme,

// console.log(JSON.stringify(GgMemeIdl));
