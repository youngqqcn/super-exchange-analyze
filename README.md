


- 7条曲线
  - index-BFZ26sEw:82256

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



计算买入token数量

```js

if (Ut.isNative) {
    // 按sol买入
    // hn: SOL数量
    const _n = Number(hn) * LAMPORTS_PER_SOL$1
        // kn: 加上手续费的总SOL
        // Dn: 买入的token数量
        // remaining_token_supply: 当前供应量
        , {total: kn, buy_amount: Dn} = compute_buy_token_exact_in_with_fee(_n, remaining_token_supply)

        , jn = div(Number(Dn), DEFAULT_TOKEN_DECIMALS_NUMBER)
        , Bn = translation(div(Number(kn), LAMPORTS_PER_SOL$1), DEFAULT_NATIVE_DECIMALS);
    Nt(Bn.toString()),
    St(hn),
    kt(jn.toString())
} else {
    // 按照token数量买入
    const _n = Number(hn) * DEFAULT_TOKEN_DECIMALS_NUMBER
        , {y: kn, total: Dn} = compute_swap_with_fee(_n, MAX_TOKEN_SUPPLY, !0)
        , jn = translation(div(Number(Dn), LAMPORTS_PER_SOL$1), DEFAULT_NATIVE_DECIMALS)
        , Bn = translation(div(Number(kn), LAMPORTS_PER_SOL$1), DEFAULT_NATIVE_DECIMALS);
    Nt(jn.toString()),
    St(Bn.toString()),
    kt(hn)
}

function compute_swap_with_fee(_e, $, et) {
    let tt = compute_swap(BigInt(_e), BigInt($), et), nt;
    et ? nt = BigInt($) - BigInt(_e) : nt = BigInt($) + BigInt(_e);
    let rt = compute_fee(tt, nt), it;
    return et ? it = tt + rt : it = tt - rt,
    {
        y: tt,
        fee: rt,
        total: it
    }
}

function compute_swap(_e, $, et) {
    let tt;
    if (et) {
        if (tt = $ - _e,
        tt == BigInt(0))
            throw new Error("Cannot buy all remaining supply")
    } else if (tt = $ + _e,
    tt > MAX_TOKEN_SUPPLY)
        throw new Error("Cannot sell more than max token supply");
    let nt = BigInt(0);
    if (et) {
        let rt = BigInt(0)
          , it = !0
          , ot = BigInt(0);
        for (let st of CURVES)
            if ($ > st.token_supply_at_boundary)
                if (it && (it = !1,
                rt = calculate_curve($, !1, st)),
                tt >= st.token_supply_at_boundary) {
                    ot = calculate_curve(tt, !0, st);
                    break
                } else
                    $ = st.token_supply_at_boundary;
        nt = ot - rt
    } else {
        let rt = BigInt(0)
          , it = BigInt(0);
        for (let ot = CURVES.length - 1; ot >= 0; ot--) {
            let st = CURVES[ot], lt;
            if (ot == 0 ? lt = MAX_TOKEN_SUPPLY : lt = CURVES[ot - 1].token_supply_at_boundary,
            $ < lt)
                if (rt == BigInt(0) && (rt = calculate_curve($, !1, st)),
                tt <= lt) {
                    it = calculate_curve(tt, !0, st);
                    break
                } else
                    $ = lt
        }
        rt > it && (nt = rt - it)
    }
    return nt
}

function compute_buy_token_exact_in_with_fee(_e, $) {
    let et = compute_buy_token_exact_in(BigInt(_e), BigInt($))
      , tt = BigInt($) - et
      , nt = compute_fee(_e, tt);
    return {
        buy_amount: et,
        y: BigInt(_e),
        fee: nt,
        total: BigInt(_e) + nt
    }
}

/**
 * _e: SOL数量
 * $: 当前供应量
 */
function compute_buy_token_exact_in(_e, $) {


    let et = BigInt(0)
      , tt = !0
      , nt = BigInt(0);
    for (let rt of CURVES)
        if ($ > rt.token_supply_at_boundary) {
            tt && (tt = !1, et = calculate_curve($, !1, rt));
            let it = rt.native_amount_at_boundary - et;
            if (_e < it || rt.k_with_multiplier_sol == CURVE_LAST_PARAMS.k_with_multiplier_sol) {
                nt += find_root($, et, _e, rt);
                break
            } else if (_e == it) {
                nt += $ - rt.token_supply_at_boundary;
                break
            } else
                nt += $ - rt.token_supply_at_boundary,
                $ = rt.token_supply_at_boundary,
                _e -= it,
                et = rt.native_amount_at_boundary
        }
    return nt
}

function find_root(_e, $, et, tt) {
    let nt = $ + et;
    if (tt.k_with_multiplier_sol == CURVE_LAST_PARAMS.k_with_multiplier_sol) {
        let ot = MAX_TOKEN_SUPPLY * (CURVE_LAST_PARAMS.k_with_multiplier_sol / MULTIPLIER)
          , st = nt + CURVE_LAST_PARAMS.c_with_sol
          , lt = ceil_div(ot, st);
        if (lt >= _e)
            throw new Error("Buy amount too large");
        return _e - lt
    }
    let rt = tt.token_supply_at_boundary
      , it = _e;
    for (; it - rt > FIND_ROOT_MAX_ERROR; ) {
        let ot = rt + it >> BigInt(1)
          , st = calculate_curve(ot, !0, tt);
        nt > st ? it = ot : rt = ot
    }
    return _e - it
}

function calculate_curve(_e, $, et) {
    let tt = pow(_e, BigInt(et.n), $);
    return div_with_rounding(et.k_with_multiplier_sol, tt, $) - et.c_with_sol
}
```


- 积分

```js
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
```# super-exchange-analyze
