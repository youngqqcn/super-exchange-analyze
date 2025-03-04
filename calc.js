const Decimal = require("./utils/decimal.js");

// 7条曲线
const MULTIPLIER = BigInt(1e19);
const SUPPLY_MULTIPLIER = BigInt(1e4);
const MAX_TOKEN_SUPPLY = BigInt(1e9) * BigInt(1e6);
const LAMPORTS_PER_SOL$1 = 1e9;
const DEFAULT_TOKEN_DECIMALS_NUMBER = 1e6;
const DEFAULT_TOKEN_DECIMALS = 6;
const DEFAULT_NATIVE_DECIMALS = 9;

BigInt(1e8);
const U64_MAX = (BigInt(1) << BigInt(64)) - BigInt(1),
    FIND_ROOT_MAX_ERROR = BigInt(1e5),
    CURVE_1_PARAMS = {
        n: 32,
        k_with_multiplier_sol:
            BigInt("8750000000000000000") * BigInt(LAMPORTS_PER_SOL$1), // 875000000 * MULTIPLIER * LAMPORTS_PER_SOL$1
        c_with_sol: BigInt("875000000"),
        token_supply_at_boundary: (MAX_TOKEN_SUPPLY * BigInt(95)) / BigInt(100),
        native_amount_at_boundary: BigInt(3642026972),
    },
    CURVE_2_PARAMS = {
        n: 16,
        k_with_multiplier_sol:
            BigInt("39761280660000000000") * BigInt(LAMPORTS_PER_SOL$1),
        c_with_sol: BigInt("5392026971"),
        token_supply_at_boundary: (MAX_TOKEN_SUPPLY * BigInt(90)) / BigInt(100),
        native_amount_at_boundary: BigInt(16065526972 + 1),
    },
    CURVE_3_PARAMS = {
        n: 8,
        k_with_multiplier_sol:
            BigInt("184735467600000000000") * BigInt(LAMPORTS_PER_SOL$1),
        c_with_sol: BigInt("26849580917"),
        token_supply_at_boundary: (MAX_TOKEN_SUPPLY * BigInt(80)) / BigInt(100),
        native_amount_at_boundary: BigInt(83261338320 + 1),
    },
    CURVE_4_PARAMS = {
        n: 4,
        k_with_multiplier_sol:
            BigInt("902028650400000000000") * BigInt(LAMPORTS_PER_SOL$1),
        c_with_sol: BigInt("136960500156"),
        token_supply_at_boundary: (MAX_TOKEN_SUPPLY * BigInt(20)) / BigInt(100),
        native_amount_at_boundary: BigInt(56239830149844),
    },
    CURVE_5_PARAMS = {
        n: 3,
        k_with_multiplier_sol:
            BigInt("6013524336000000000000") * BigInt(LAMPORTS_PER_SOL$1),
        c_with_sol: BigInt("18929224050156"),
        token_supply_at_boundary: (MAX_TOKEN_SUPPLY * BigInt(10)) / BigInt(100),
        native_amount_at_boundary: BigInt(582423209549844),
    },
    CURVE_6_PARAMS = {
        n: 2,
        k_with_multiplier_sol:
            BigInt("90202865040000000000000") * BigInt(LAMPORTS_PER_SOL$1),
        c_with_sol: BigInt("319605440850156"),
        token_supply_at_boundary: (MAX_TOKEN_SUPPLY * BigInt(5)) / BigInt(100),
        native_amount_at_boundary: BigInt("3288509160749844"),
    },
    CURVE_7_PARAMS = {
        n: 1,
        k_with_multiplier_sol:
            BigInt("3608114602000000000000000") * BigInt(LAMPORTS_PER_SOL$1),
        c_with_sol: BigInt("3927720043250156"),
        token_supply_at_boundary: BigInt(1),
        native_amount_at_boundary: U64_MAX,
    },
    CURVE_LAST_PARAMS = CURVE_7_PARAMS,
    CURVES = [
        CURVE_1_PARAMS,
        CURVE_2_PARAMS,
        CURVE_3_PARAMS,
        CURVE_4_PARAMS,
        CURVE_5_PARAMS,
        CURVE_6_PARAMS,
        CURVE_7_PARAMS,
    ];

// 按照
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

// 二分法求根
// 问题: 在区间内是线性方程，为什么要用二分法求解而不是直接用表达式？
function find_root(currentTokenReserve, y, buySolAmount, curve) {
    let nt = y + buySolAmount;

    // 当达到最后一条曲线
    if (
        curve.k_with_multiplier_sol == CURVE_LAST_PARAMS.k_with_multiplier_sol
    ) {
        let ot =
                MAX_TOKEN_SUPPLY *
                (CURVE_LAST_PARAMS.k_with_multiplier_sol / MULTIPLIER),
            st = nt + CURVE_LAST_PARAMS.c_with_sol,
            lt = ceil_div(ot, st);
        if (lt >= currentTokenReserve) throw new Error("Buy amount too large");
        return currentTokenReserve - lt;
    }
    let rt = curve.token_supply_at_boundary,
        it = currentTokenReserve;

    // accuracy的作用是控制精度
    let accuracy = FIND_ROOT_MAX_ERROR;
    // let accuracy = 1;
    let i = 0;
    for (; it - rt > accuracy; i++) {
        let ot = (rt + it) >> BigInt(1); // 除以2
        let st = calculate_curve(ot, true, curve);
        nt > st ? (it = ot) : (rt = ot);
    }
    // console.log("二分查找求解根的次数: ", i);
    return currentTokenReserve - it;
}

// y为SOL数量, y = k/(x^n)
function calculate_curve(x, $, curve) {
    let tt = pow(x, BigInt(curve.n), $);
    return (
        div_with_rounding(curve.k_with_multiplier_sol, tt, $) - curve.c_with_sol
    );
}

function ceil_div(_e, $) {
    let et = _e / $;
    return et * $ == _e ? et : et + BigInt(1);
}

function div_with_rounding(_e, $, et) {
    let tt = _e / $;
    return et && _e % $ != BigInt(0) ? tt + BigInt(1) : tt;
}

// 改造的快速幂
function pow(n, p, isCeilRound) {
    let tt = MULTIPLIER;
    let nt = n * SUPPLY_MULTIPLIER;
    for (; p > BigInt(0); ) {
        if (p % BigInt(2) == BigInt(1)) {
            tt = tt * nt;
            tt = div_with_rounding(tt, MULTIPLIER, isCeilRound);
        }
        nt = nt * nt;
        nt = div_with_rounding(nt, MULTIPLIER, isCeilRound);
        p /= BigInt(2);
    }
    return tt;
}

function toDecimalPlaces$1(_e, $ = DEFAULT_PRECISION, et = Decimal.ROUND_DOWN) {
    try {
        return new Decimal(_e).toFixed($, et);
    } catch {
        return String(_e || "-");
    }
}
function formatDecimalPlaces(_e, $ = DEFAULT_PRECISION) {
    return _e.includes(".") && _e.split(".")[1].length > $
        ? toDecimalPlaces$1(_e, $)
        : _e;
}
function translation(_e, $ = DEFAULT_PRECISION) {
    let et = Number(_e);
    return !isNaN(et) && String(et).toLowerCase().includes("e")
        ? et.toFixed($)
        : _e;
}
function isNumeric(_e) {
    return _e === "" ? !1 : !Number.isNaN(Number(_e));
}
function checkInputNumberic(_e, $ = DEFAULT_PRECISION, et = !1) {
    let tt = "";
    et && (tt = "(\\-|\\+)?");
    const nt = new RegExp(
            `^${tt}[0-9]{0,${MAX_USER_INTERER - 1}}?(\\.\\d{0,${$}})?$`
        ),
        rt = new RegExp("^0?(\\.\\d{0," + $ + "})?$");
    return !(!nt.test(_e) && !rt.test(_e));
}
function plus(_e, $) {
    return !isNumeric(_e) || !isNumeric($)
        ? "0"
        : new Decimal(_e).plus($).toString();
}
function minus(_e, $) {
    return !isNumeric(_e) || !isNumeric($)
        ? "0"
        : new Decimal(_e).minus($).toString();
}
function multipliedBy(_e, $) {
    return !isNumeric(_e) || !isNumeric($)
        ? "0"
        : new Decimal(_e).mul($).toString();
}
function div(_e, $) {
    return !isNumeric(_e) || !isNumeric($)
        ? "0"
        : new Decimal(_e).div($).toString();
}
function abs(_e) {
    return isNumeric(_e) ? new Decimal(_e).abs().toString() : "0";
}

function compute_buy_token_exact_in_with_fee(solAmount, $) {
    let et = compute_buy_token_exact_in(BigInt(solAmount), BigInt($)),
        tt = BigInt($) - et,
        nt = compute_fee(solAmount, tt);
    return {
        buy_amount: et,
        y: BigInt(solAmount),
        fee: nt,
        total: BigInt(solAmount) + nt,
    };
}

function compute_fee(_e, $) {
    let et;
    return (
        BigInt($) >= CURVE_3_PARAMS.token_supply_at_boundary
            ? (et = BigInt(100))
            : BigInt($) >= CURVE_4_PARAMS.token_supply_at_boundary
            ? (et = BigInt(50))
            : (et = BigInt(10)),
        (BigInt(_e) * et) / BigInt(1e4)
    );
}

function compute_swap_with_fee(_e, $, et) {
    let tt = compute_swap(BigInt(_e), BigInt($), et),
        nt;
    et ? (nt = BigInt($) - BigInt(_e)) : (nt = BigInt($) + BigInt(_e));
    let rt = compute_fee(tt, nt),
        it;
    return (
        et ? (it = tt + rt) : (it = tt - rt),
        {
            y: tt,
            fee: rt,
            total: it,
        }
    );
}

function compute_swap(_e, $, et) {
    let tt;
    if (et) {
        if (((tt = $ - _e), tt == BigInt(0)))
            throw new Error("Cannot buy all remaining supply");
    } else if (((tt = $ + _e), tt > MAX_TOKEN_SUPPLY))
        throw new Error("Cannot sell more than max token supply");
    let nt = BigInt(0);
    if (et) {
        let rt = BigInt(0),
            it = !0,
            ot = BigInt(0);
        for (let st of CURVES)
            if ($ > st.token_supply_at_boundary)
                if (
                    (it && ((it = !1), (rt = calculate_curve($, !1, st))),
                    tt >= st.token_supply_at_boundary)
                ) {
                    ot = calculate_curve(tt, !0, st);
                    break;
                } else $ = st.token_supply_at_boundary;
        nt = ot - rt;
    } else {
        let rt = BigInt(0),
            it = BigInt(0);
        for (let ot = CURVES.length - 1; ot >= 0; ot--) {
            let st = CURVES[ot],
                lt;
            if (
                (ot == 0
                    ? (lt = MAX_TOKEN_SUPPLY)
                    : (lt = CURVES[ot - 1].token_supply_at_boundary),
                $ < lt)
            )
                if (
                    (rt == BigInt(0) && (rt = calculate_curve($, !1, st)),
                    tt <= lt)
                ) {
                    it = calculate_curve(tt, !0, st);
                    break;
                } else $ = lt;
        }
        rt > it && (nt = rt - it);
    }
    return nt;
}
function calculate_market_cap(_e) {
    return _e.mul(new Decimal(MAX_TOKEN_SUPPLY.toString()).div(new Decimal(1e6)))
}

function search_curve(_e) {
    for (let $ of CURVES)
        if (_e > $.token_supply_at_boundary)
            return $;
    return CURVE_LAST_PARAMS
}
function calculate_price(_e, $, et) {
    let tt = new Decimal(_e.toString()).div(new Decimal(1e6))
      , nt = new Decimal(($ + et.c_with_sol).toString()).div(new Decimal(LAMPORTS_PER_SOL$1))
      , rt = Decimal.set({
        precision: 15,
        rounding: Decimal.ROUND_DOWN
    });
    return new rt(et.n).mul(nt).div(tt)
}


function curve_points(_e, $=1e3, et=300, tt=BigInt(200) * BigInt(1e9)) {
    if (et < 100)
        throw new Error("Invalid max threshold");
    if ($ < 2)
        throw new Error("Invalid max points");
    let nt = []
      , rt = MAX_TOKEN_SUPPLY - BigInt(_e)
      , ot = compute_swap(rt, MAX_TOKEN_SUPPLY, !0) * BigInt(et) / BigInt(100)
      , st = compute_swap(MAX_TOKEN_SUPPLY - BigInt(1), MAX_TOKEN_SUPPLY, !0);
    ot > st && (ot = st),
    ot < BigInt(tt) && (ot = BigInt(tt));
    let lt = compute_buy_token_exact_in(ot, MAX_TOKEN_SUPPLY), ct = BigInt(0), dt = ceil_div(lt - ct, BigInt($ - 1)), pt;
    for (let mt = 0; mt < $; mt++) {
        let yt = ct + dt * BigInt(mt)
          , Et = BigInt(0);
        yt > BigInt(0) && (Et = compute_swap(yt, MAX_TOKEN_SUPPLY, !0));
        let _t = {
            buy_amount: yt,
            y: Et,
            current: !1,
            market_cap: calculate_market_cap(calculate_price(MAX_TOKEN_SUPPLY - yt, Et, search_curve(MAX_TOKEN_SUPPLY - yt)))
        };
        nt.push(_t),
        pt === void 0 && yt >= BigInt(rt) && (pt = Number(mt))
    }
    let ht = nt[pt];
    if (ht.y == rt)
        ht.current = !0;
    else {
        let mt = compute_swap(rt, MAX_TOKEN_SUPPLY, !0);
        ht.buy_amount = rt,
        ht.y = mt,
        ht.current = !0,
        ht.market_cap = calculate_market_cap(calculate_price(BigInt(_e), mt, search_curve(BigInt(_e))))
    }
    return nt
}

/**
 *
 * @param {string} amount 买入数量
 * @param {boolean} isBuyBySOL  true按照SOL买入; false 按照token数量买入
 * @param {number} currentTokenReserve 当前剩余token数量
 * @returns
 */
function buyToken(amount, isBuyBySOL, currentTokenReserve) {
    if (amount === "") {
        console.log("请输入有效数量");
        return;
    }
    const hn = formatDecimalPlaces(
        amount,
        isBuyBySOL ? DEFAULT_NATIVE_DECIMALS : DEFAULT_TOKEN_DECIMALS
    );

    if (
        Number(multipliedBy(hn, DEFAULT_TOKEN_DECIMALS_NUMBER)) >=
        Number(currentTokenReserve)
    ) {
        console.log("数量超过当前可购买的token数量");
        return;
    }

    if (isBuyBySOL) {
        // 按SOL买入
        const _n = Math.floor(Number(hn) * LAMPORTS_PER_SOL$1),
            { total: kn, buy_amount: Dn } = compute_buy_token_exact_in_with_fee(
                _n,
                currentTokenReserve
            ),
            jn = div(Number(Dn), DEFAULT_TOKEN_DECIMALS_NUMBER),
            Bn = translation(
                div(Number(kn), LAMPORTS_PER_SOL$1),
                DEFAULT_NATIVE_DECIMALS
            );
        return {
            totalWithFee: Bn.toString(),
            solAmount: hn,
            tokenAmount: jn.toString(),
        };
    } else {
        // 按照token数量买入
        const _n = Number(hn) * DEFAULT_TOKEN_DECIMALS_NUMBER,
            { y: kn, total: Dn } = compute_swap_with_fee(
                _n,
                currentTokenReserve,
                !0
            ),
            jn = translation(
                div(Number(Dn), LAMPORTS_PER_SOL$1),
                DEFAULT_NATIVE_DECIMALS
            ),
            Bn = translation(
                div(Number(kn), LAMPORTS_PER_SOL$1),
                DEFAULT_NATIVE_DECIMALS
            );
        return {
            jn: jn.toString(),
            Bn: Bn.toString(),
            hn: hn,
        };
    }
}

// let ret = compute_buy_token_exact_in(100000000n, 963507986534386n);
// console.log(ret);

(() => {
    // console.log(pow(BigInt(2), BigInt(10), true));
    // console.log(buyToken("1", true, MAX_TOKEN_SUPPLY));

    // console.log(buyToken("3.642026972", true, MAX_TOKEN_SUPPLY));       //  50,000,000
    // console.log(buyToken("16.065526973", true, MAX_TOKEN_SUPPLY));      // 100,000,000
    // console.log(buyToken("83.261338321", true, MAX_TOKEN_SUPPLY));      // 200,000,000
    // console.log(buyToken("56239.830149844", true, MAX_TOKEN_SUPPLY));   // 800,000,000
    // console.log(buyToken("582423.209549844", true, MAX_TOKEN_SUPPLY));  // 900,000,000
    // console.log(buyToken("3288509.160749844", true, MAX_TOKEN_SUPPLY)); // 950,000,000

    let i = 0.875;
    while (i <= 500000) {
        i += 10;
        let ret = buyToken(i.toString(), true, MAX_TOKEN_SUPPLY);
        console.log(`${i.toFixed(9).toString()},${ret.tokenAmount/1e9}`);
    }

    // while (i <= 582423) {
    //     i += 10;
    //     let ret = buyToken(i.toString(), true, MAX_TOKEN_SUPPLY);
    //     console.log(`${i.toFixed(9).toString()},${ret.tokenAmount}`);
    // }




    // console.log(buyToken("3927720.043250156", true, MAX_TOKEN_SUPPLY)); // 999,999,999

    // console.log(
    //     buyToken("3.642026972", true, MAX_TOKEN_SUPPLY - BigInt(100_000_000 * 10 ** 6))
    // );
    // console.log(
    //     buyToken("1", true, MAX_TOKEN_SUPPLY - BigInt(200_000_000 * 10 ** 6))
    // );

    // let ret = buyToken("0.1", true, 963507986534386n);
    // console.log(ret);

    // let ret2 = buyToken("1028939.329889", false, 963507986534386n);
    // console.log(ret2);
})();
