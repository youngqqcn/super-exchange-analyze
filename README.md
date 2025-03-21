# Super.exchange 分析

## IDL 文件

-   IDL 文件: [super_exhcange_IDL_prod.json](./super_exchange_IDL_prod.json)

## 关于 SUPER 的购买机制

```mermaid
sequenceDiagram
    actor 用户
    participant 前端
    participant 后端
    participant 合约
    用户->>+前端: 购买SUPER
    前端->>+后端: 获取可用积分
    后端-->>-前端: 可用积分余额
    前端->>+后端: 请求构造交易API
    后端->>合约: 获取SuperAccount信息
    合约-->>后端: 返回nonce和buyAmount
    后端->>后端: 构造交易
    后端->>后端: 使用授权账户签名交易

    后端-->>-前端: 构造后的交易(已部分签名)
    前端-->>+用户: 钱包授权签名
    用户->>-前端: 签名后的交易
    前端->>+合约: 发送交易
    合约->>合约: 校验授权账户签名
    合约->>合约: 校验nonce和和buyAmount
    合约->>合约: 更新nonce和和buyAmount
    合约->>合约: 执行交易
    合约-->>-前端: 交易成功
    前端-->>-用户: SUPER购买成功
```

![](./imgs/super-account.jpg)

## 定价曲线

庄家控筹率

| 所需 SOL | 控筹率 |
| -------- | ------ |
| 4        | 5%     |
| 16       | 10%    |
| 41       | 15%    |
| 83       | 20%    |
| 149      | 25%    |
| 239      | 30%    |
| 369      | 35%    |
| 559      | 40%    |
| 849      | 45%    |
| 1307     | 50%    |
| 2063     | 55%    |
| 3387     | 60%    |
| 5874     | 65%    |
| 11000    | 70%    |
| 22955    | 75%    |
| 56240    | 80%    |
| 159250   | 85%    |
| 582423   | 90%    |
| 3288509  | 95%    |

![](./imgs/curves.jpg)

## 7 条曲线

```js

// 7条曲线
  , MULTIPLIER = BigInt(1e19)
  , SUPPLY_MULTIPLIER = BigInt(1e4)
  , MAX_TOKEN_SUPPLY = BigInt(1e9) * BigInt(1e6);
BigInt(1e8);
const U64_MAX = (BigInt(1) << BigInt(64)) - BigInt(1)
  , FIND_ROOT_MAX_ERROR = BigInt(1e5)
  , CURVE_1_PARAMS = {
    n: 32,
    k_with_multiplier_sol: BigInt("8750000000000000000") * BigInt(LAMPORTS_PER_SOL$1),
    c_with_sol: BigInt("875000000"),
    token_supply_at_boundary: MAX_TOKEN_SUPPLY * BigInt(95) / BigInt(100),
    native_amount_at_boundary: BigInt(3_642_026_972)
}
  , CURVE_2_PARAMS = {
    n: 16,
    k_with_multiplier_sol: BigInt("39761280660000000000") * BigInt(LAMPORTS_PER_SOL$1),
    c_with_sol: BigInt("5392026971"),
    token_supply_at_boundary: MAX_TOKEN_SUPPLY * BigInt(90) / BigInt(100),
    native_amount_at_boundary: BigInt(16_065_526_972 + 1)
}
  , CURVE_3_PARAMS = {
    n: 8,
    k_with_multiplier_sol: BigInt("184735467600000000000") * BigInt(LAMPORTS_PER_SOL$1),
    c_with_sol: BigInt("26849580917"),
    token_supply_at_boundary: MAX_TOKEN_SUPPLY * BigInt(80) / BigInt(100),
    native_amount_at_boundary: BigInt(83_261_338_320 + 1)
}
  , CURVE_4_PARAMS = {
    n: 4,
    k_with_multiplier_sol: BigInt("902028650400000000000") * BigInt(LAMPORTS_PER_SOL$1),
    c_with_sol: BigInt("136960500156"),
    token_supply_at_boundary: MAX_TOKEN_SUPPLY * BigInt(20) / BigInt(100),
    native_amount_at_boundary: BigInt(56_239_830_149_844)
}
  , CURVE_5_PARAMS = {
    n: 3,
    k_with_multiplier_sol: BigInt("6013524336000000000000") * BigInt(LAMPORTS_PER_SOL$1),
    c_with_sol: BigInt("18929224050156"),
    token_supply_at_boundary: MAX_TOKEN_SUPPLY * BigInt(10) / BigInt(100),
    native_amount_at_boundary: BigInt(582_423_209_549_844)
}
  , CURVE_6_PARAMS = {
    n: 2,
    k_with_multiplier_sol: BigInt("90202865040000000000000") * BigInt(LAMPORTS_PER_SOL$1),
    c_with_sol: BigInt("319605440850156"),
    token_supply_at_boundary: MAX_TOKEN_SUPPLY * BigInt(5) / BigInt(100),
    native_amount_at_boundary: BigInt("3288509160749844")
}
  , CURVE_7_PARAMS = {
    n: 1,
    k_with_multiplier_sol: BigInt("3608114602000000000000000") * BigInt(LAMPORTS_PER_SOL$1),
    c_with_sol: BigInt("3927720043250156"),
    token_supply_at_boundary: BigInt(1),
    native_amount_at_boundary: U64_MAX
}
  , CURVE_LAST_PARAMS = CURVE_7_PARAMS
  , CURVES = [CURVE_1_PARAMS, CURVE_2_PARAMS, CURVE_3_PARAMS, CURVE_4_PARAMS, CURVE_5_PARAMS, CURVE_6_PARAMS, CURVE_7_PARAMS];

```

## 购买 SUPER 或其他 Token

用户要持有积分才能购买 SUPER

```js
async (s) => {
    const [d] = U.findProgramAddressSync(
            [A.from("market"), A.from(s.tokenSymbol), r.toBuffer()],
            i.programId
        ),
        n = await i.account.market.fetch(d),
        { feeRecipient: f } = await i.account.config.fetch(r),
        x = W(n.tokenMint, e.publicKey, !0);
    let b = "";

    if (s.tokenSymbol === _t) {
        // 购买 SUPER,  需要用户持有积分才能购买 SUPER

        let h = !0, // SUPER的Token ATA账户是否存在
            w = !0; // superAccount的PDA账户是否存在

        // 计算账户的 superAccount ， 用来存储 nonce 和buyAmount ，
        // nonce: 从0开始递增，防止交易重放
        // buyAmount: 已购买的SUPER数量，与中心化数据库做校验,防止多买
        const [T] = U.findProgramAddressSync(
            [A.from("super_account"), e.publicKey.toBuffer(), r.toBuffer()],
            i.programId
        );
        try {
            // 检查 superAccount的PDA账户是否已经存在
            await i.account.superAccount.fetch(T);
        } catch {
            w = !1; // 不存在
        }
        const R = new U(s.tokenAddress),
            { feeRecipient: v } = await i.account.config.fetch(r),
            E = W(R, e.publicKey, !0);
        (await t.getAccountInfo(E)) || (h = !1);

        // 接口请求参数
        const yt = {
                account_exists: w,
                ata_account_exists: h,
                super_amount: s.buyAmount.toString(),
                max_pay: s.maxPay.toString(),
                fee_recipient: v.toBase58(),
            },
            // 请求后端接口, 构造交易
            $ = await p({
                requestBody: yt,
            });

        if ($)
            if ($ && $.code === Kt.Success) {
                // base58解码交易
                const tt = Vt.decode($.data.transaction),
                    Ct = Lt.from(tt),
                    ft = await t.getLatestBlockhash();
                (b = await e.sendTransaction(Ct, t)),
                    await t.confirmTransaction(
                        {
                            signature: b,
                            ...ft,
                        },
                        "confirmed"
                    );
            } else throw new Error($ == null ? void 0 : $.msg);
        else throw new Error("Failed to buy SUPER");
    } else {
        // 购买非SUPER的token, 不需要检查积分, 直接前端构造交易即可

        let h = [];
        (await t.getAccountInfo(x)) ||
            h.push(Et(e.publicKey, x, e.publicKey, n.tokenMint));
        const [T] = U.findProgramAddressSync(
                [
                    A.from("market_community_vault"),
                    A.from(s.tokenSymbol),
                    r.toBuffer(),
                ],
                i.programId
            ),
            R = s.isNative
                ? await i.methods
                      .buyTokenExactIn({
                          payAmount: new z(s.maxPay.toString()),
                          minReceive: new z(s.buyAmount.toString()),
                          donateRate: 0,
                      })
                      .accountsPartial({
                          config: r,
                          market: d,
                          feeRecipient: f,
                          tokenVault: n.tokenVault,
                          tokenRecipient: x,
                          nativeVault: n.nativeVault,
                          communityVault: T,
                      })
                      .instruction()
                : await i.methods
                      .buyToken({
                          buyAmount: new z(s.buyAmount.toString()),
                          maxPay: new z(s.maxPay.toString()),
                          donateRate: 0,
                      })
                      .accountsPartial({
                          config: r,
                          market: d,
                          feeRecipient: f,
                          tokenVault: n.tokenVault,
                          tokenRecipient: x,
                          nativeVault: n.nativeVault,
                          communityVault: T,
                      })
                      .instruction();
        h.push(R);
        const v = await u(h),
            E = G.setComputeUnitLimit({
                units: v.simulateResult.value.unitsConsumed * it,
            });
        h.unshift(E);
        const Y = new Q(
            new X({
                instructions: h,
                recentBlockhash: v.latestBlockhash.blockhash,
                payerKey: e.publicKey,
            }).compileToV0Message()
        );
        (b = await e.sendTransaction(Y, t)),
            await t.confirmTransaction(
                {
                    signature: b,
                    ...v.latestBlockhash,
                },
                "confirmed"
            );
    }
    return {
        signature: b,
        tokenMint: n.tokenMint,
    };
};
```

## 计算买入 Token 数量(非 SUPER)

-   全部源码: [calc.js](./calc.js)
    - 核心算法代码段：https://github.com/youngqqcn/super-exchange-analyze/blob/4c3834364eb20511254415baa188cb3a8421c4e5/calc.js#L83-L159

```js
if (Ut.isNative) {
    // 按sol买入
    // hn: SOL数量
    const _n = Number(hn) * LAMPORTS_PER_SOL$1,
        // kn: 加上手续费的总SOL
        // Dn: 买入的token数量
        // remaining_token_supply: 当前供应量
        { total: kn, buy_amount: Dn } = compute_buy_token_exact_in_with_fee(
            _n,
            remaining_token_supply
        ),
        jn = div(Number(Dn), DEFAULT_TOKEN_DECIMALS_NUMBER),
        Bn = translation(
            div(Number(kn), LAMPORTS_PER_SOL$1),
            DEFAULT_NATIVE_DECIMALS
        );
    Nt(Bn.toString()), St(hn), kt(jn.toString());
} else {
    // 按照token数量买入
    const _n = Number(hn) * DEFAULT_TOKEN_DECIMALS_NUMBER,
        { y: kn, total: Dn } = compute_swap_with_fee(_n, MAX_TOKEN_SUPPLY, !0),
        jn = translation(
            div(Number(Dn), LAMPORTS_PER_SOL$1),
            DEFAULT_NATIVE_DECIMALS
        ),
        Bn = translation(
            div(Number(kn), LAMPORTS_PER_SOL$1),
            DEFAULT_NATIVE_DECIMALS
        );
    Nt(jn.toString()), St(Bn.toString()), kt(hn);
}


// 按照SOL数量买入
function compute_buy_token_exact_in(buySolAmount, currentTokenReserve) {
    // x^n * y = k
    // y 为 SOL数量
    // x 为 token数量
    let y = BigInt(0);
    let tt = true;
    let nt = BigInt(0);
    for (let curve of CURVES) {
        if (currentTokenReserve > curve.token_supply_at_boundary) {
            if (tt) {
                tt = false;
                y = calculate_curve(currentTokenReserve, false, curve);
            }
            let it = curve.native_amount_at_boundary - y;
            if (
                buySolAmount < it ||
                curve.k_with_multiplier_sol ==
                    CURVE_LAST_PARAMS.k_with_multiplier_sol
            ) {
                // 二分法根
                nt += find_root(currentTokenReserve, y, buySolAmount, curve);
                break;
            } else if (buySolAmount == it) {
                nt += currentTokenReserve - curve.token_supply_at_boundary;
                break;
            } else {
                // 跨区间

                (nt += currentTokenReserve - curve.token_supply_at_boundary),
                    (currentTokenReserve = curve.token_supply_at_boundary),
                    (buySolAmount -= it),
                    (y = curve.native_amount_at_boundary);
            }
        }
    }
    return nt;
}

```

## 计算 SUPER 和积分

```js
function curve_points(_e, $ = 1e3, et = 300, tt = BigInt(200) * BigInt(1e9)) {
    if (et < 100) throw new Error("Invalid max threshold");
    if ($ < 2) throw new Error("Invalid max points");
    let nt = [],
        rt = MAX_TOKEN_SUPPLY - BigInt(_e),
        ot =
            (compute_swap(rt, MAX_TOKEN_SUPPLY, !0) * BigInt(et)) / BigInt(100),
        st = compute_swap(MAX_TOKEN_SUPPLY - BigInt(1), MAX_TOKEN_SUPPLY, !0);
    ot > st && (ot = st), ot < BigInt(tt) && (ot = BigInt(tt));
    let lt = compute_buy_token_exact_in(ot, MAX_TOKEN_SUPPLY),
        ct = BigInt(0),
        dt = ceil_div(lt - ct, BigInt($ - 1)),
        pt;
    for (let mt = 0; mt < $; mt++) {
        let yt = ct + dt * BigInt(mt),
            Et = BigInt(0);
        yt > BigInt(0) && (Et = compute_swap(yt, MAX_TOKEN_SUPPLY, !0));
        let _t = {
            buy_amount: yt,
            y: Et,
            current: !1,
            market_cap: calculate_market_cap(
                calculate_price(
                    MAX_TOKEN_SUPPLY - yt,
                    Et,
                    search_curve(MAX_TOKEN_SUPPLY - yt)
                )
            ),
        };
        nt.push(_t), pt === void 0 && yt >= BigInt(rt) && (pt = Number(mt));
    }
    let ht = nt[pt];
    if (ht.y == rt) ht.current = !0;
    else {
        let mt = compute_swap(rt, MAX_TOKEN_SUPPLY, !0);
        (ht.buy_amount = rt),
            (ht.y = mt),
            (ht.current = !0),
            (ht.market_cap = calculate_market_cap(
                calculate_price(BigInt(_e), mt, search_curve(BigInt(_e)))
            ));
    }
    return nt;
}
```

## 积分分配的算法

> https://docs.super.exchange/supernomics/superchanics

-   1 积分可以购买 1 SUPER
-   每 5 分钟分配一次

    -   80% 给交易者
    -   20% 给邀请者

-   公式:
    ![](./imgs/super-points-fomular.png)
