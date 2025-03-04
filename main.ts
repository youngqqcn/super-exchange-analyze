import * as anchor from "@coral-xyz/anchor";
import * as web3 from "@solana/web3.js";
import {
    ComputeBudgetProgram,
    Connection,
    PublicKey,
    SystemProgram,
} from "@solana/web3.js";
import { GgMemeIdl } from "./super_exchange_IDL.js";
// import { I } from "./super-exchange/index-BFZ26sEw.js";
import bs58 from "bs58";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";

// 加载.env环境变量
import "jsr:@std/dotenv/load";

import { Buffer } from "node:buffer";
import { config } from "node:process";
import { assert } from "@std/assert/assert";

class CustomWallet implements anchor.Wallet {
    public payer: web3.Keypair;
    public publicKey: PublicKey;
    constructor(payer: web3.Keypair = web3.Keypair.generate()) {
        this.payer = payer;
        this.publicKey = this.payer.publicKey;
    }
    static local(): CustomWallet | never {
        return new CustomWallet(web3.Keypair.generate());
    }

    async signTransaction<
        T extends web3.Transaction | web3.VersionedTransaction
    >(transaction: T): Promise<T> {
        // Implement transaction signing
        return transaction;
    }

    async signAllTransactions<
        T extends web3.Transaction | web3.VersionedTransaction
    >(transactions: T[]): Promise<T[]> {
        // Implement signing of multiple transactions
        return transactions;
    }
}

// async s => {
//     const [d] = U.findProgramAddressSync([A.from("market"), A.from(s.tokenSymbol), r.toBuffer()], i.programId)
//       , n = await i.account.market.fetch(d)
//       , {feeRecipient: f} = await i.account.config.fetch(r)
//       , x = W(n.tokenMint, e.publicKey, !0);
//     let b = "";
//     if (s.tokenSymbol === _t) {
//         let h = !0
//           , w = !0;
//         const [T] = U.findProgramAddressSync([A.from("super_account"), e.publicKey.toBuffer(), r.toBuffer()], i.programId);
//         try {
//             await i.account.superAccount.fetch(T)
//         } catch {
//             w = !1
//         }
//         const R = new U(s.tokenAddress)
//           , {feeRecipient: v} = await i.account.config.fetch(r)
//           , E = W(R, e.publicKey, !0);
//         await t.getAccountInfo(E) || (h = !1);
//         const yt = {
//             account_exists: w,
//             ata_account_exists: h,
//             super_amount: s.buyAmount.toString(),
//             max_pay: s.maxPay.toString(),
//             fee_recipient: v.toBase58()
//         }
//         // 请求后端接口, 构造交易
//           , $ = await p({
//             requestBody: yt
//         });
//         if ($)
//             if ($ && $.code === Kt.Success) {
//                 const tt = Vt.decode($.data.transaction)
//                   , Ct = Lt.from(tt)
//                   , ft = await t.getLatestBlockhash();
//                 b = await e.sendTransaction(Ct, t),
//                 await t.confirmTransaction({
//                     signature: b,
//                     ...ft
//                 }, "confirmed")
//             } else
//                 throw new Error($ == null ? void 0 : $.msg);
//         else
//             throw new Error("Failed to buy SUPER")
//     } else {
//         let h = [];
//         await t.getAccountInfo(x) || h.push(Et(e.publicKey, x, e.publicKey, n.tokenMint));
//         const [T] = U.findProgramAddressSync([A.from("market_community_vault"), A.from(s.tokenSymbol), r.toBuffer()], i.programId)
//           , R = s.isNative ? await i.methods.buyTokenExactIn({
//             payAmount: new z(s.maxPay.toString()),
//             minReceive: new z(s.buyAmount.toString()),
//             donateRate: 0
//         }).accountsPartial({
//             config: r,
//             market: d,
//             feeRecipient: f,
//             tokenVault: n.tokenVault,
//             tokenRecipient: x,
//             nativeVault: n.nativeVault,
//             communityVault: T
//         }).instruction() : await i.methods.buyToken({
//             buyAmount: new z(s.buyAmount.toString()),
//             maxPay: new z(s.maxPay.toString()),
//             donateRate: 0
//         }).accountsPartial({
//             config: r,
//             market: d,
//             feeRecipient: f,
//             tokenVault: n.tokenVault,
//             tokenRecipient: x,
//             nativeVault: n.nativeVault,
//             communityVault: T
//         }).instruction();
//         h.push(R);
//         const v = await u(h)
//           , E = G.setComputeUnitLimit({
//             units: v.simulateResult.value.unitsConsumed * it
//         });
//         h.unshift(E);
//         const Y = new Q(new X({
//             instructions: h,
//             recentBlockhash: v.latestBlockhash.blockhash,
//             payerKey: e.publicKey
//         }).compileToV0Message());
//         b = await e.sendTransaction(Y, t),
//         await t.confirmTransaction({
//             signature: b,
//             ...v.latestBlockhash
//         }, "confirmed")
//     }
//     return {
//         signature: b,
//         tokenMint: n.tokenMint
//     }
// }

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// 配置地址
const CONFIG_ACCOUNT = "7ci3rZLKS92bdvVBD9qGH8qpRk3o975TxViLAFRh7hUx";
const FeeDistributor = "feeDQ2GHpsLz67tNSXjfYfCmW7bXKcL4PEU7WAgFaN9";

(async () => {
    const idl = GgMemeIdl;
    // let fanslandProgramId = new web3.PublicKey(
    //     "super4XGGb7KWorPuoSNVQDHAVQjWzTpqcoRS86d9Us"
    // );

    const key = Deno.env.get("SUPER_KEY");
    // console.log("key = ", key);
    let payer = web3.Keypair.fromSecretKey(bs58.decode(key));
    const connection = new Connection(
        "https://mainnet.helius-rpc.com/?api-key=f95cc4fe-fe7c-4de8-abed-eaefe0771ba7"
    );
    const provider = new anchor.AnchorProvider(
        new Connection(
            "https://mainnet.helius-rpc.com/?api-key=f95cc4fe-fe7c-4de8-abed-eaefe0771ba7"
        ),
        new CustomWallet(), // 实际可使用钱包适配器, 或者 phantom钱包
        anchor.AnchorProvider.defaultOptions()
    );

    anchor.setProvider(provider);

    const program = new anchor.Program(idl as anchor.Idl, provider);
    const symbol = "SUPER";

    if (true) {
        const r = new PublicKey(CONFIG_ACCOUNT);
        const confgiAccount = new PublicKey(CONFIG_ACCOUNT);
        const [d] = PublicKey.findProgramAddressSync(
            [Buffer.from("market"), Buffer.from(symbol), r.toBuffer()],
            program.programId
        );
        const market = await program.account.market.fetch(d);
        // console.log(market);
        // let ata_account_exists = true,
        //     w = !0;
        // const [T] = PublicKey.findProgramAddressSync(
        //     [
        //         Buffer.from("super_account"),
        //         payer.publicKey.toBuffer(),
        //         r.toBuffer(),
        //     ],
        //     program.programId
        // );

        // let configAcc = await program.account.config.fetch(
        //     new PublicKey(CONFIG_ACCOUNT)
        // );
        // console.log("configAcc: ", configAcc);

        if (true) {
            // 计算账号的 superAccount
            const arr = [
                115, 117, 112, 101, 114, 95, 97, 99, 99, 111, 117, 110, 116,
            ];
            const fromAccount = new PublicKey(
                "B26boKDLpJ7VV1gggCB4WMp2ZtNe19MQqB3m668MnMZj"
            );
            const [superAccount] = PublicKey.findProgramAddressSync(
                [
                    Uint8Array.from(arr),
                    fromAccount.toBuffer(),
                    confgiAccount.toBuffer(),
                ],
                program.programId
            );

            console.log("superAccount = ", superAccount.toString());
            try {
                const superAccountInfo =
                    await program.account.superAccount.fetch(superAccount);

                console.log("super account: ", {
                    nonce: superAccountInfo.nonce,
                    buyAmount: superAccountInfo.buyAmount.toString(),
                });
            } catch {
                console.log("get superAccount error");
            }
        }

        return;

        const superTokenAddress = "suprkbfvwpFZXzWaoKjTzGkW1nkvvwK9n2E6g1zyLFo";
        const mint = new PublicKey(superTokenAddress); // SUPER 的地址
        const { feeRecipient: v } = await program.account.config.fetch(r);
        console.log("v = ", v); // 7PG3b8wKLxb2tK36imsBwagnQWRc7axTcfCG61upQzoL

        // const [rt] = PublicKey.findProgramAddressSync([$.toBuffer(), tt.toBuffer(), _e.toBuffer()], nt);

        const ata = getAssociatedTokenAddressSync(mint, payer.publicKey, true);
        if (await connection.getAccountInfo(ata)) {
            ata_account_exists = false;
        }

        // TODO:  创建ATA
        // getOrCreateAssociatedTokenAddress

        const ix = await program.methods
            .buy_super({
                next_nonce: 255,
                next_buy_amount: 175009207458,
                max_pay: 2000000000,
                donate_rate: 0,
            })
            .accountsPartial({
                config: r,
                market: d,
                feeRecipient: v,
                tokenVault: market.tokenVault,
                tokenRecipient: ata,
                nativeVault: market.nativeVault,
                communityVault: T,
            })
            .instruction();

        const recentBlockhash = (await connection.getLatestBlockhash())
            .blockhash;

        const tx = new web3.Transaction().add(
            ComputeBudgetProgram.setComputeUnitLimit({
                units: 50000,
            }),
            ComputeBudgetProgram.setComputeUnitPrice({
                microLamports: 1_000_000,
            }),
            ix
        );

        tx.feePayer = payer.publicKey;
        tx.recentBlockhash = recentBlockhash;
        tx.sign(payer);

        const rawTx = tx.serialize();
        const txSignature = await web3
            .sendAndConfirmRawTransaction(connection, Buffer.from(rawTx), {
                commitment: "confirmed",
            })
            .catch(async () => {
                await sleep(500);
                return await web3
                    .sendAndConfirmRawTransaction(
                        connection,
                        Buffer.from(rawTx),
                        {
                            commitment: "confirmed",
                        }
                    )
                    .catch((createPoolAndBuyTxFail) => {
                        console.log({ createPoolAndBuyTxFail });
                        return null;
                    });
            });
        if (!txSignature) console.log("Tx failed");
        console.log("Transaction successfull\nTx Signature: ", txSignature);
    }
})()
    .then()
    .catch((x) => {
        console.log(x);
    });
