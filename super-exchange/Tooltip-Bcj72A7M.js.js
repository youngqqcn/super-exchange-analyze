import {a6 as D, a7 as H, r as C, a8 as I, j as o, ac as j, ab as _, ad as k, ae as K, cj as bt, af as P, ag as N, ah as kt, aj as pt, ak as gt, ck as vt, x as wt, G as Z, a$ as et, cl as xt, d as V, f as Tt, h as St, k as ht, B, Q as jt, aK as Rt, _ as at, T as M, p as S, C as O, cm as $t, $ as Mt, a2 as q, a3 as F, cn as ot, aX as At, aY as Pt, co as Bt, b as zt, cp as Nt, cq as Ut, cr as Dt, cs as Ht, ct as st, V as L, I as nt, cu as It, c as U, cv as A, av as W, cw as z, cx as G, cy as it, cz as Q, cA as X, P as _t, A as Kt, cB as Vt, cC as Lt, cD as Et, a1 as Ot} from "./index-bdam-jY8.js";
import {T as rt} from "./useWindowSize-BmlbqoX0.js";
function qt(t) {
    return H("MuiSwitch", t)
}
const m = D("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"])
  , Ft = t => {
    const {classes: e, edge: a, size: c, color: i, checked: r, disabled: l} = t
      , p = {
        root: ["root", a && `edge${k(a)}`, `size${k(c)}`],
        switchBase: ["switchBase", `color${k(i)}`, r && "checked", l && "disabled"],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"]
    }
      , u = K(p, qt, e);
    return {
        ...e,
        ...u
    }
}
  , Wt = j("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (t, e) => {
        const {ownerState: a} = t;
        return [e.root, a.edge && e[`edge${k(a.edge)}`], e[`size${k(a.size)}`]]
    }
})({
    display: "inline-flex",
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: "hidden",
    padding: 12,
    boxSizing: "border-box",
    position: "relative",
    flexShrink: 0,
    zIndex: 0,
    verticalAlign: "middle",
    "@media print": {
        colorAdjust: "exact"
    },
    variants: [{
        props: {
            edge: "start"
        },
        style: {
            marginLeft: -8
        }
    }, {
        props: {
            edge: "end"
        },
        style: {
            marginRight: -8
        }
    }, {
        props: {
            size: "small"
        },
        style: {
            width: 40,
            height: 24,
            padding: 7,
            [`& .${m.thumb}`]: {
                width: 16,
                height: 16
            },
            [`& .${m.switchBase}`]: {
                padding: 4,
                [`&.${m.checked}`]: {
                    transform: "translateX(16px)"
                }
            }
        }
    }]
})
  , Gt = j(bt, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (t, e) => {
        const {ownerState: a} = t;
        return [e.switchBase, {
            [`& .${m.input}`]: e.input
        }, a.color !== "default" && e[`color${k(a.color)}`]]
    }
})(P( ({theme: t}) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    color: t.vars ? t.vars.palette.Switch.defaultColor : `${t.palette.mode === "light" ? t.palette.common.white : t.palette.grey[300]}`,
    transition: t.transitions.create(["left", "transform"], {
        duration: t.transitions.duration.shortest
    }),
    [`&.${m.checked}`]: {
        transform: "translateX(20px)"
    },
    [`&.${m.disabled}`]: {
        color: t.vars ? t.vars.palette.Switch.defaultDisabledColor : `${t.palette.mode === "light" ? t.palette.grey[100] : t.palette.grey[600]}`
    },
    [`&.${m.checked} + .${m.track}`]: {
        opacity: .5
    },
    [`&.${m.disabled} + .${m.track}`]: {
        opacity: t.vars ? t.vars.opacity.switchTrackDisabled : `${t.palette.mode === "light" ? .12 : .2}`
    },
    [`& .${m.input}`]: {
        left: "-100%",
        width: "300%"
    }
})), P( ({theme: t}) => ({
    "&:hover": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : N(t.palette.action.active, t.palette.action.hoverOpacity),
        "@media (hover: none)": {
            backgroundColor: "transparent"
        }
    },
    variants: [...Object.entries(t.palette).filter(kt(["light"])).map( ([e]) => ({
        props: {
            color: e
        },
        style: {
            [`&.${m.checked}`]: {
                color: (t.vars || t).palette[e].main,
                "&:hover": {
                    backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : N(t.palette[e].main, t.palette.action.hoverOpacity),
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                },
                [`&.${m.disabled}`]: {
                    color: t.vars ? t.vars.palette.Switch[`${e}DisabledColor`] : `${t.palette.mode === "light" ? pt(t.palette[e].main, .62) : gt(t.palette[e].main, .55)}`
                }
            },
            [`&.${m.checked} + .${m.track}`]: {
                backgroundColor: (t.vars || t).palette[e].main
            }
        }
    }))]
})))
  , Qt = j("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (t, e) => e.track
})(P( ({theme: t}) => ({
    height: "100%",
    width: "100%",
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: t.transitions.create(["opacity", "background-color"], {
        duration: t.transitions.duration.shortest
    }),
    backgroundColor: t.vars ? t.vars.palette.common.onBackground : `${t.palette.mode === "light" ? t.palette.common.black : t.palette.common.white}`,
    opacity: t.vars ? t.vars.opacity.switchTrack : `${t.palette.mode === "light" ? .38 : .3}`
})))
  , Xt = j("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (t, e) => e.thumb
})(P( ({theme: t}) => ({
    boxShadow: (t.vars || t).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%"
})))
  , Zt = C.forwardRef(function(e, a) {
    const c = I({
        props: e,
        name: "MuiSwitch"
    })
      , {className: i, color: r="primary", edge: l=!1, size: p="medium", sx: u, ...y} = c
      , g = {
        ...c,
        color: r,
        edge: l,
        size: p
    }
      , s = Ft(g)
      , d = o.jsx(Xt, {
        className: s.thumb,
        ownerState: g
    });
    return o.jsxs(Wt, {
        className: _(s.root, i),
        sx: u,
        ownerState: g,
        children: [o.jsx(Gt, {
            type: "checkbox",
            icon: d,
            checkedIcon: d,
            ref: a,
            ownerState: g,
            ...y,
            classes: {
                ...s,
                root: s.switchBase
            }
        }), o.jsx(Qt, {
            className: s.track,
            ownerState: g
        })]
    })
})
  , mt = C.createContext();
function Jt(t) {
    return H("MuiTable", t)
}
D("MuiTable", ["root", "stickyHeader"]);
const Yt = t => {
    const {classes: e, stickyHeader: a} = t;
    return K({
        root: ["root", a && "stickyHeader"]
    }, Jt, e)
}
  , te = j("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (t, e) => {
        const {ownerState: a} = t;
        return [e.root, a.stickyHeader && e.stickyHeader]
    }
})(P( ({theme: t}) => ({
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    "& caption": {
        ...t.typography.body2,
        padding: t.spacing(2),
        color: (t.vars || t).palette.text.secondary,
        textAlign: "left",
        captionSide: "bottom"
    },
    variants: [{
        props: ({ownerState: e}) => e.stickyHeader,
        style: {
            borderCollapse: "separate"
        }
    }]
})))
  , ct = "table"
  , me = C.forwardRef(function(e, a) {
    const c = I({
        props: e,
        name: "MuiTable"
    })
      , {className: i, component: r=ct, padding: l="normal", size: p="medium", stickyHeader: u=!1, ...y} = c
      , g = {
        ...c,
        component: r,
        padding: l,
        size: p,
        stickyHeader: u
    }
      , s = Yt(g)
      , d = C.useMemo( () => ({
        padding: l,
        size: p,
        stickyHeader: u
    }), [l, p, u]);
    return o.jsx(mt.Provider, {
        value: d,
        children: o.jsx(te, {
            as: r,
            role: r === ct ? null : "table",
            ref: a,
            className: _(s.root, i),
            ownerState: g,
            ...y
        })
    })
})
  , J = C.createContext();
function ee(t) {
    return H("MuiTableCell", t)
}
const ae = D("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"])
  , oe = t => {
    const {classes: e, variant: a, align: c, padding: i, size: r, stickyHeader: l} = t
      , p = {
        root: ["root", a, l && "stickyHeader", c !== "inherit" && `align${k(c)}`, i !== "normal" && `padding${k(i)}`, `size${k(r)}`]
    };
    return K(p, ee, e)
}
  , se = j("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (t, e) => {
        const {ownerState: a} = t;
        return [e.root, e[a.variant], e[`size${k(a.size)}`], a.padding !== "normal" && e[`padding${k(a.padding)}`], a.align !== "inherit" && e[`align${k(a.align)}`], a.stickyHeader && e.stickyHeader]
    }
})(P( ({theme: t}) => ({
    ...t.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: t.vars ? `1px solid ${t.vars.palette.TableCell.border}` : `1px solid
    ${t.palette.mode === "light" ? pt(N(t.palette.divider, 1), .88) : gt(N(t.palette.divider, 1), .68)}`,
    textAlign: "left",
    padding: 16,
    variants: [{
        props: {
            variant: "head"
        },
        style: {
            color: (t.vars || t).palette.text.primary,
            lineHeight: t.typography.pxToRem(24),
            fontWeight: t.typography.fontWeightMedium
        }
    }, {
        props: {
            variant: "body"
        },
        style: {
            color: (t.vars || t).palette.text.primary
        }
    }, {
        props: {
            variant: "footer"
        },
        style: {
            color: (t.vars || t).palette.text.secondary,
            lineHeight: t.typography.pxToRem(21),
            fontSize: t.typography.pxToRem(12)
        }
    }, {
        props: {
            size: "small"
        },
        style: {
            padding: "6px 16px",
            [`&.${ae.paddingCheckbox}`]: {
                width: 24,
                padding: "0 12px 0 16px",
                "& > *": {
                    padding: 0
                }
            }
        }
    }, {
        props: {
            padding: "checkbox"
        },
        style: {
            width: 48,
            padding: "0 0 0 4px"
        }
    }, {
        props: {
            padding: "none"
        },
        style: {
            padding: 0
        }
    }, {
        props: {
            align: "left"
        },
        style: {
            textAlign: "left"
        }
    }, {
        props: {
            align: "center"
        },
        style: {
            textAlign: "center"
        }
    }, {
        props: {
            align: "right"
        },
        style: {
            textAlign: "right",
            flexDirection: "row-reverse"
        }
    }, {
        props: {
            align: "justify"
        },
        style: {
            textAlign: "justify"
        }
    }, {
        props: ({ownerState: e}) => e.stickyHeader,
        style: {
            position: "sticky",
            top: 0,
            zIndex: 2,
            backgroundColor: (t.vars || t).palette.background.default
        }
    }]
})))
  , ye = C.forwardRef(function(e, a) {
    const c = I({
        props: e,
        name: "MuiTableCell"
    })
      , {align: i="inherit", className: r, component: l, padding: p, scope: u, size: y, sortDirection: g, variant: s, ...d} = c
      , n = C.useContext(mt)
      , f = C.useContext(J)
      , x = f && f.variant === "head";
    let b;
    l ? b = l : b = x ? "th" : "td";
    let h = u;
    b === "td" ? h = void 0 : !h && x && (h = "col");
    const w = s || f && f.variant
      , T = {
        ...c,
        align: i,
        component: b,
        padding: p || (n && n.padding ? n.padding : "normal"),
        size: y || (n && n.size ? n.size : "medium"),
        sortDirection: g,
        stickyHeader: w === "head" && n && n.stickyHeader,
        variant: w
    }
      , R = oe(T);
    let v = null;
    return g && (v = g === "asc" ? "ascending" : "descending"),
    o.jsx(se, {
        as: b,
        ref: a,
        className: _(R.root, r),
        "aria-sort": v,
        scope: h,
        ownerState: T,
        ...d
    })
});
function ne(t) {
    return H("MuiTableHead", t)
}
D("MuiTableHead", ["root"]);
const ie = t => {
    const {classes: e} = t;
    return K({
        root: ["root"]
    }, ne, e)
}
  , re = j("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (t, e) => e.root
})({
    display: "table-header-group"
})
  , ce = {
    variant: "head"
}
  , lt = "thead"
  , Ce = C.forwardRef(function(e, a) {
    const c = I({
        props: e,
        name: "MuiTableHead"
    })
      , {className: i, component: r=lt, ...l} = c
      , p = {
        ...c,
        component: r
    }
      , u = ie(p);
    return o.jsx(J.Provider, {
        value: ce,
        children: o.jsx(re, {
            as: r,
            className: _(u.root, i),
            ref: a,
            role: r === lt ? null : "rowgroup",
            ownerState: p,
            ...l
        })
    })
});
function le(t) {
    return H("MuiTableRow", t)
}
const dt = D("MuiTableRow", ["root", "selected", "hover", "head", "footer"])
  , de = t => {
    const {classes: e, selected: a, hover: c, head: i, footer: r} = t;
    return K({
        root: ["root", a && "selected", c && "hover", i && "head", r && "footer"]
    }, le, e)
}
  , ue = j("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (t, e) => {
        const {ownerState: a} = t;
        return [e.root, a.head && e.head, a.footer && e.footer]
    }
})(P( ({theme: t}) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${dt.hover}:hover`]: {
        backgroundColor: (t.vars || t).palette.action.hover
    },
    [`&.${dt.selected}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : N(t.palette.primary.main, t.palette.action.selectedOpacity),
        "&:hover": {
            backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : N(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity)
        }
    }
})))
  , ut = "tr"
  , fe = C.forwardRef(function(e, a) {
    const c = I({
        props: e,
        name: "MuiTableRow"
    })
      , {className: i, component: r=ut, hover: l=!1, selected: p=!1, ...u} = c
      , y = C.useContext(J)
      , g = {
        ...c,
        component: r,
        hover: l,
        selected: p,
        head: y && y.variant === "head",
        footer: y && y.variant === "footer"
    }
      , s = de(g);
    return o.jsx(ue, {
        as: r,
        ref: a,
        className: _(s.root, i),
        role: r === ut ? null : "row",
        ownerState: g,
        ...u
    })
});
function be(t, e=2, a=!0, c=!1) {
    const i = Z(t, 0) ? "+" : "";
    try {
        return a ? `${c ? i : ""}${new V(t).mul(100).toDecimalPlaces(e, V.ROUND_DOWN).toString()}%` : `${c ? i : ""}${new V(t).toDecimalPlaces(e, V.ROUND_DOWN).toString()}%`
    } catch {
        return "-"
    }
}
function ke(t, e=2) {
    try {
        if (vt(t))
            return "0.00%";
        const a = wt(t, 100);
        return Z(a, 0) && et(a, .01) ? "<0.01%" : Z(a, -.01) && et(a, 0) ? "-0.01%" : `${xt(a, e)}%`
    } catch {
        return "-"
    }
}
function pe(t) {
    const {size: e=20} = t;
    return o.jsxs("svg", {
        width: e,
        height: e,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [o.jsxs("g", {
            clipPath: "url(#clip0_5_412)",
            children: [o.jsx("path", {
                d: "M10.0003 12.5003C11.381 12.5003 12.5003 11.381 12.5003 10.0003C12.5003 8.61961 11.381 7.50033 10.0003 7.50033C8.61961 7.50033 7.50033 8.61961 7.50033 10.0003C7.50033 11.381 8.61961 12.5003 10.0003 12.5003Z",
                stroke: "#D7DADC",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), o.jsx("path", {
                d: "M15.6064 12.2731C15.5055 12.5016 15.4755 12.755 15.52 13.0008C15.5646 13.2465 15.6817 13.4733 15.8564 13.6518L15.9018 13.6973C16.0427 13.838 16.1545 14.0051 16.2307 14.1891C16.307 14.373 16.3462 14.5702 16.3462 14.7693C16.3462 14.9684 16.307 15.1655 16.2307 15.3495C16.1545 15.5334 16.0427 15.7005 15.9018 15.8412C15.7611 15.9821 15.594 16.0939 15.4101 16.1701C15.2261 16.2464 15.029 16.2856 14.8299 16.2856C14.6308 16.2856 14.4336 16.2464 14.2497 16.1701C14.0657 16.0939 13.8986 15.9821 13.7579 15.8412L13.7124 15.7958C13.5339 15.6211 13.3071 15.504 13.0614 15.4594C12.8156 15.4149 12.5622 15.4449 12.3337 15.5458C12.1096 15.6418 11.9185 15.8013 11.7839 16.0045C11.6493 16.2078 11.5771 16.4459 11.5761 16.6897V16.8185C11.5761 17.2204 11.4165 17.6057 11.1323 17.8899C10.8482 18.174 10.4628 18.3337 10.0609 18.3337C9.65909 18.3337 9.2737 18.174 8.98956 17.8899C8.70541 17.6057 8.54578 17.2204 8.54578 16.8185V16.7503C8.53991 16.4996 8.45875 16.2564 8.31283 16.0524C8.16692 15.8484 7.963 15.693 7.7276 15.6064C7.4991 15.5055 7.24563 15.4755 6.99988 15.52C6.75413 15.5646 6.52736 15.6817 6.34881 15.8564L6.30336 15.9018C6.16264 16.0427 5.99554 16.1545 5.8116 16.2307C5.62766 16.307 5.4305 16.3462 5.23139 16.3462C5.03227 16.3462 4.83511 16.307 4.65117 16.2307C4.46724 16.1545 4.30013 16.0427 4.15942 15.9018C4.01854 15.7611 3.90679 15.594 3.83054 15.4101C3.75429 15.2261 3.71504 15.029 3.71504 14.8299C3.71504 14.6308 3.75429 14.4336 3.83054 14.2497C3.90679 14.0657 4.01854 13.8986 4.15942 13.7579L4.20487 13.7124C4.37952 13.5339 4.49668 13.3071 4.54124 13.0614C4.5858 12.8156 4.55572 12.5622 4.45487 12.3337C4.35884 12.1096 4.19938 11.9185 3.99613 11.7839C3.79288 11.6493 3.55471 11.5771 3.31093 11.5761H3.18214C2.7803 11.5761 2.39492 11.4165 2.11077 11.1323C1.82662 10.8482 1.66699 10.4628 1.66699 10.0609C1.66699 9.65909 1.82662 9.2737 2.11077 8.98956C2.39492 8.70541 2.7803 8.54578 3.18214 8.54578H3.25033C3.50108 8.53991 3.74427 8.45875 3.94828 8.31283C4.15229 8.16692 4.30769 7.963 4.39427 7.7276C4.49511 7.4991 4.52519 7.24563 4.48063 6.99988C4.43607 6.75413 4.31891 6.52736 4.14427 6.34881L4.09881 6.30336C3.95794 6.16264 3.84618 5.99554 3.76993 5.8116C3.69368 5.62766 3.65444 5.4305 3.65444 5.23139C3.65444 5.03227 3.69368 4.83511 3.76993 4.65117C3.84618 4.46724 3.95794 4.30013 4.09881 4.15942C4.23953 4.01854 4.40663 3.90679 4.59057 3.83054C4.7745 3.75429 4.97167 3.71504 5.17078 3.71504C5.36989 3.71504 5.56706 3.75429 5.75099 3.83054C5.93493 3.90679 6.10203 4.01854 6.24275 4.15942L6.2882 4.20487C6.46675 4.37952 6.69352 4.49668 6.93927 4.54124C7.18503 4.5858 7.4385 4.55572 7.66699 4.45487H7.7276C7.95167 4.35884 8.14276 4.19938 8.27737 3.99613C8.41197 3.79288 8.4842 3.55471 8.48517 3.31093V3.18214C8.48517 2.7803 8.64481 2.39492 8.92895 2.11077C9.2131 1.82662 9.59848 1.66699 10.0003 1.66699C10.4022 1.66699 10.7876 1.82662 11.0717 2.11077C11.3558 2.39492 11.5155 2.7803 11.5155 3.18214V3.25033C11.5164 3.4941 11.5887 3.73228 11.7233 3.93553C11.8579 4.13878 12.049 4.29823 12.2731 4.39427C12.5016 4.49511 12.755 4.52519 13.0008 4.48063C13.2465 4.43607 13.4733 4.31891 13.6518 4.14427L13.6973 4.09881C13.838 3.95794 14.0051 3.84618 14.1891 3.76993C14.373 3.69368 14.5702 3.65444 14.7693 3.65444C14.9684 3.65444 15.1655 3.69368 15.3495 3.76993C15.5334 3.84618 15.7005 3.95794 15.8412 4.09881C15.9821 4.23953 16.0939 4.40663 16.1701 4.59057C16.2464 4.7745 16.2856 4.97167 16.2856 5.17078C16.2856 5.36989 16.2464 5.56706 16.1701 5.75099C16.0939 5.93493 15.9821 6.10203 15.8412 6.24275L15.7958 6.2882C15.6211 6.46675 15.504 6.69352 15.4594 6.93927C15.4149 7.18503 15.4449 7.4385 15.5458 7.66699V7.7276C15.6418 7.95167 15.8013 8.14276 16.0045 8.27737C16.2078 8.41197 16.4459 8.4842 16.6897 8.48517H16.8185C17.2204 8.48517 17.6057 8.64481 17.8899 8.92895C18.174 9.2131 18.3337 9.59848 18.3337 10.0003C18.3337 10.4022 18.174 10.7876 17.8899 11.0717C17.6057 11.3558 17.2204 11.5155 16.8185 11.5155H16.7503C16.5065 11.5164 16.2684 11.5887 16.0651 11.7233C15.8619 11.8579 15.7024 12.049 15.6064 12.2731Z",
                stroke: "#D7DADC",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }), o.jsx("defs", {
            children: o.jsx("clipPath", {
                id: "clip0_5_412",
                children: o.jsx("rect", {
                    width: "20",
                    height: "20",
                    fill: "white"
                })
            })
        })]
    })
}
function ve({prio: t}) {
    const [e,a] = C.useState(!1)
      , {slippage: c, setSlippage: i} = Tt()
      , [r,l] = C.useState(!1)
      , [p,u] = C.useState(c);
    St();
    const {isMatchMobile: y} = ht()
      , g = d => {
        const n = d.target.value;
        if (n.trim() === "") {
            u("");
            return
        }
        if (n && q(n) && F(n, 6) && O(n, 25) ? u("25") : q(n) && F(n, 6) && u(n),
        n && q(n) && F(n, 6)) {
            if (O(n, 25)) {
                i("25");
                return
            }
            i(d.target.value)
        }
    }
      , s = d => {
        d.target.value.trim() === "" && (u(ot),
        i(ot))
    }
    ;
    return o.jsxs(o.Fragment, {
        children: [o.jsx(B, {
            className: "cursor-pointer",
            children: o.jsx(jt, {
                size: "small",
                onClick: () => a(!0),
                children: o.jsx(pe, {
                    size: y ? 16 : 20
                })
            })
        }), o.jsx(Rt, {
            open: e,
            onClose: () => a(!1),
            title: o.jsx(M, {
                variant: "h5",
                children: o.jsx(S, {
                    id: "0P1P67"
                })
            }),
            children: o.jsxs(B, {
                className: "space-y-3",
                children: [o.jsx(at, {
                    endAdornment: o.jsx("span", {
                        children: "%"
                    }),
                    fullWidth: !0,
                    value: p,
                    onChange: g,
                    onBlur: s
                }), o.jsx(M, {
                    children: o.jsx(S, {
                        id: "kbumyM"
                    })
                }), O(c, 5) ? o.jsx(M, {
                    color: "warning",
                    children: o.jsx(S, {
                        id: "7LUjiG"
                    })
                }) : null, o.jsxs(B, {
                    className: "space-y-2",
                    children: [o.jsxs(B, {
                        children: [o.jsx("span", {
                            children: o.jsx(S, {
                                id: "Tc+yvT"
                            })
                        }), o.jsx(Zt, {
                            checked: r,
                            onChange: (d, n) => l(n)
                        })]
                    }), r ? o.jsx(M, {
                        color: "text.secondary",
                        children: o.jsx(S, {
                            id: "no7jaB"
                        })
                    }) : null]
                }), o.jsxs(B, {
                    className: "space-y-2",
                    children: [o.jsxs(M, {
                        children: [o.jsx(S, {
                            id: "6t9BXr"
                        }), " ", o.jsx(M, {
                            color: "text.secondary",
                            className: "inline",
                            children: o.jsx(S, {
                                id: "fwIqjq"
                            })
                        })]
                    }), o.jsx(at, {
                        fullWidth: !0,
                        value: t,
                        disabled: !0,
                        endAdornment: o.jsxs(B, {
                            className: "flex items-center justify-end space-x-2 cursor-pointer",
                            children: [o.jsx($t, {
                                src: Mt,
                                sx: {
                                    width: 20,
                                    height: 20
                                }
                            }), o.jsx("span", {
                                children: "SOL"
                            })]
                        })
                    })]
                }), o.jsx(M, {
                    color: "text.secondary",
                    children: o.jsx(S, {
                        id: "laXI/l"
                    })
                })]
            })
        })]
    })
}
const we = () => {
    const {connection: t} = At()
      , e = Pt()
      , {cluster: a} = Bt()
      , c = It()
      , {program: i} = zt()
      , r = Nt(Ut.ConfigAccount, a.network)
      , l = Dt()
      , {request: p} = Ht({
        requestBody: {}
    }, !0)
      , u = async s => {
        s.unshift(G.setComputeUnitLimit({
            units: Ot
        }));
        const d = await t.getLatestBlockhash()
          , n = new Q(new X({
            instructions: s,
            recentBlockhash: d.blockhash,
            payerKey: e.publicKey
        }).compileToV0Message())
          , f = await t.simulateTransaction(n);
        return s.shift(),
        f.value.err,
        {
            simulateResult: f,
            latestBlockhash: d
        }
    }
      , y = st({
        mutationKey: ["counter", "butToken", {
            cluster: a
        }],
        mutationFn: async s => {
            const [d] = U.findProgramAddressSync([A.from("market"), A.from(s.tokenSymbol), r.toBuffer()], i.programId)
              , n = await i.account.market.fetch(d)
              , {feeRecipient: f} = await i.account.config.fetch(r)
              , x = W(n.tokenMint, e.publicKey, !0);
            let b = "";
            if (s.tokenSymbol === _t) {
                let h = !0
                  , w = !0;
                const [T] = U.findProgramAddressSync([A.from("super_account"), e.publicKey.toBuffer(), r.toBuffer()], i.programId);
                try {
                    await i.account.superAccount.fetch(T)
                } catch {
                    w = !1
                }
                const R = new U(s.tokenAddress)
                  , {feeRecipient: v} = await i.account.config.fetch(r)
                  , E = W(R, e.publicKey, !0);
                await t.getAccountInfo(E) || (h = !1);
                const yt = {
                    account_exists: w,
                    ata_account_exists: h,
                    super_amount: s.buyAmount.toString(),
                    max_pay: s.maxPay.toString(),
                    fee_recipient: v.toBase58()
                }
                  , $ = await p({
                    requestBody: yt
                });
                if ($)
                    if ($ && $.code === Kt.Success) {
                        const tt = Vt.decode($.data.transaction)
                          , Ct = Lt.from(tt)
                          , ft = await t.getLatestBlockhash();
                        b = await e.sendTransaction(Ct, t),
                        await t.confirmTransaction({
                            signature: b,
                            ...ft
                        }, "confirmed")
                    } else
                        throw new Error($ == null ? void 0 : $.msg);
                else
                    throw new Error("Failed to buy SUPER")
            } else {
                let h = [];
                await t.getAccountInfo(x) || h.push(Et(e.publicKey, x, e.publicKey, n.tokenMint));
                const [T] = U.findProgramAddressSync([A.from("market_community_vault"), A.from(s.tokenSymbol), r.toBuffer()], i.programId)
                  , R = s.isNative ? await i.methods.buyTokenExactIn({
                    payAmount: new z(s.maxPay.toString()),
                    minReceive: new z(s.buyAmount.toString()),
                    donateRate: 0
                }).accountsPartial({
                    config: r,
                    market: d,
                    feeRecipient: f,
                    tokenVault: n.tokenVault,
                    tokenRecipient: x,
                    nativeVault: n.nativeVault,
                    communityVault: T
                }).instruction() : await i.methods.buyToken({
                    buyAmount: new z(s.buyAmount.toString()),
                    maxPay: new z(s.maxPay.toString()),
                    donateRate: 0
                }).accountsPartial({
                    config: r,
                    market: d,
                    feeRecipient: f,
                    tokenVault: n.tokenVault,
                    tokenRecipient: x,
                    nativeVault: n.nativeVault,
                    communityVault: T
                }).instruction();
                h.push(R);
                const v = await u(h)
                  , E = G.setComputeUnitLimit({
                    units: v.simulateResult.value.unitsConsumed * it
                });
                h.unshift(E);
                const Y = new Q(new X({
                    instructions: h,
                    recentBlockhash: v.latestBlockhash.blockhash,
                    payerKey: e.publicKey
                }).compileToV0Message());
                b = await e.sendTransaction(Y, t),
                await t.confirmTransaction({
                    signature: b,
                    ...v.latestBlockhash
                }, "confirmed")
            }
            return {
                signature: b,
                tokenMint: n.tokenMint
            }
        }
        ,
        onSuccess: s => (c(s.signature),
        Promise.all([l.invalidateQueries({
            queryKey: ["get-balance", {
                endpoint: t.rpcEndpoint,
                address: e.publicKey
            }]
        }), l.invalidateQueries({
            queryKey: ["get-token-account-balance", {
                endpoint: t.rpcEndpoint,
                address: e.publicKey,
                tokenMint: s.tokenMint
            }]
        })])),
        onError: s => {
            if ((s == null ? void 0 : s.message) === "User rejected the request.") {
                L.error(nt._({
                    id: "Dw7UPC"
                }));
                return
            }
            L.error(s.message)
        }
    })
      , g = st({
        mutationKey: ["counter", "initializeMarket", {
            cluster: a
        }],
        mutationFn: async s => {
            const [d] = U.findProgramAddressSync([A.from("market"), A.from(s.tokenSymbol), r.toBuffer()], i.programId)
              , n = await i.account.market.fetch(d)
              , {feeRecipient: f} = await i.account.config.fetch(r)
              , x = W(n.tokenMint, e.publicKey, !0);
            let h = [await i.methods.sellToken({
                sellAmount: new z(s.sellAmount.toString()),
                minReceive: new z(s.minReceive.toString())
            }).accountsPartial({
                config: r,
                market: d,
                feeRecipient: f,
                tokenVault: n.tokenVault,
                nativeRecipient: e.publicKey,
                tokenPayer: x,
                nativeVault: n.nativeVault
            }).instruction()];
            const w = await u(h)
              , T = G.setComputeUnitLimit({
                units: w.simulateResult.value.unitsConsumed * it
            });
            h.unshift(T);
            const R = new Q(new X({
                instructions: h,
                recentBlockhash: w.latestBlockhash.blockhash,
                payerKey: e.publicKey
            }).compileToV0Message())
              , v = await e.sendTransaction(R, t);
            return await t.confirmTransaction({
                signature: v,
                ...w.latestBlockhash
            }, "confirmed"),
            {
                signature: v,
                tokenMint: n.tokenMint
            }
        }
        ,
        onSuccess: s => (c(s.signature),
        Promise.all([l.invalidateQueries({
            queryKey: ["get-balance", {
                endpoint: t.rpcEndpoint,
                address: e.publicKey
            }]
        }), l.invalidateQueries({
            queryKey: ["get-token-account-balance", {
                endpoint: t.rpcEndpoint,
                address: e.publicKey,
                tokenMint: s.tokenMint
            }]
        })])),
        onError: s => {
            if ((s == null ? void 0 : s.message) === "User rejected the request.") {
                L.error(nt._({
                    id: "Dw7UPC"
                }));
                return
            }
            L.error(s.message)
        }
    });
    return {
        buyToken: y,
        sellToken: g
    }
}
;
function xe(t) {
    const {children: e, placement: a="top"} = t
      , {isMatchMobile: c} = ht();
    return c ? o.jsx(rt, {
        enterTouchDelay: 0,
        arrow: !0,
        placement: a,
        leaveTouchDelay: 5e3,
        ...t,
        children: e
    }) : o.jsx(rt, {
        enterTouchDelay: 0,
        arrow: !0,
        placement: a,
        ...t,
        children: e
    })
}
export {ve as S, fe as T, xe as a, be as b, J as c, me as d, Ce as e, ye as f, ae as g, ke as t, we as u};
//# sourceMappingURL=Tooltip-Bcj72A7M.js.map
