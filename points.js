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