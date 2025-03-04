var Yv = Object.defineProperty;
var Zv = (e, t, r) => t in e ? Yv(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var Ni = (e, t, r) => Zv(e, typeof t != "symbol" ? t + "" : t, r);
import {a5 as Cp, j as v, a6 as Yl, a7 as Zl, r as C, a8 as Jl, a9 as Jv, aa as Xu, ab as te, ac as xt, ad as ae, ae as Ql, af as un, ag as Pe, ah as It, ai as Qv, aj as Tp, ak as ey, al as xi, am as wi, an as Ep, ao as ty, ap as kp, aq as ry, m as Ja, h as _r, k as Ke, Q as Yi, T as X, l as Xe, ar as Mp, as as Np, at as Ip, au as Jt, av as ny, c as Ji, aw as iy, u as ay, ax as Kt, J as ht, H as or, ay as oy, A as Qa, D as sy, S as eu, G as He, B as q, az as yr, p as V, P as Nt, aA as Gu, z as gt, s as En, aB as _i, aC as ly, _ as Dp, E as it, aD as tu, aE as ru, aF as uy, aG as cy, aH as fy, aI as dy, aJ as py, aK as Rp, aL as ot, aM as nu, aN as Rn, q as iu, aO as Bp, aP as Yu, aQ as hy, aR as my, aS as Zu, aT as ft, aU as vy, U as Ho, X as yy, W as gy, f as eo, aV as by, V as xy, I as gr, v as Zi, w as lr, x as At, aW as ce, aX as wy, aY as _y, aZ as Sy, a_ as Oy, $ as Py, b as Lp, a$ as Ay, y as Ir, b0 as jy, b1 as $y, b2 as Ju, d as ge, L as $r, K as sr, e as Cy, b3 as Qu, b4 as ec, C as ws, a2 as Ty, a3 as Ey, b5 as ky, a0 as tc, a4 as rc, a1 as nc, b6 as My, b7 as Ny, b8 as Iy, b9 as Dy, ba as Ry, bb as Ii, bc as Qi, bd as _s, be as ic, bf as By, bg as Z, bh as Ly, bi as Uy, bj as Cn, bk as Up, bl as ke, bm as to, bn as Si, bo as ro, bp as st, bq as cn, br as re, R as $, bs as Wy, bt as Wp, bu as zy, bv as Fy, bw as qy, bx as Oi, by as Hy, bz as Vy, bA as Ky, bB as au, bC as Xy, bD as Gy, bE as Pi, bF as Yy, bG as Zy, bH as Jy, bI as no, bJ as Qy, bK as eg, bL as tg, bM as rg, bN as ng, bO as ig, bP as ag, bQ as zp, bR as og, bS as sg, bT as lg, bU as ug, bV as cg, bW as yn, bX as ac, bY as fg} from "./index-bdam-jY8.js";
import {V as dg, j as Fp} from "./VirtualTable-CZIzG4Kv.js";
import {f as Ss} from "./formatDate-DxhhHgeR.js";
import {a as qp, b as Hp, u as pg, S as hg, t as mg} from "./Tooltip-Bcj72A7M.js";
import {P as vg, T as yg, a as gg} from "./useWindowSize-BmlbqoX0.js";
import {G as bg, a as xg, b as wg} from "./globe-C0f5z-cj.js";
import {q as Vo} from "./index--wg0NHeq.js";
function _g(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || ""
}
function Sg(e) {
    return parseFloat(e)
}
const Og = Cp(v.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Pg(e) {
    return Zl("MuiChip", e)
}
const ie = Yl("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"])
  , Ag = e => {
    const {classes: t, disabled: r, size: n, color: i, iconColor: a, onDelete: o, clickable: s, variant: l} = e
      , u = {
        root: ["root", l, r && "disabled", `size${ae(n)}`, `color${ae(i)}`, s && "clickable", s && `clickableColor${ae(i)}`, o && "deletable", o && `deletableColor${ae(i)}`, `${l}${ae(i)}`],
        label: ["label", `label${ae(n)}`],
        avatar: ["avatar", `avatar${ae(n)}`, `avatarColor${ae(i)}`],
        icon: ["icon", `icon${ae(n)}`, `iconColor${ae(a)}`],
        deleteIcon: ["deleteIcon", `deleteIcon${ae(n)}`, `deleteIconColor${ae(i)}`, `deleteIcon${ae(l)}Color${ae(i)}`]
    };
    return Ql(u, Pg, t)
}
  , jg = xt("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: r} = e
          , {color: n, iconColor: i, clickable: a, onDelete: o, size: s, variant: l} = r;
        return [{
            [`& .${ie.avatar}`]: t.avatar
        }, {
            [`& .${ie.avatar}`]: t[`avatar${ae(s)}`]
        }, {
            [`& .${ie.avatar}`]: t[`avatarColor${ae(n)}`]
        }, {
            [`& .${ie.icon}`]: t.icon
        }, {
            [`& .${ie.icon}`]: t[`icon${ae(s)}`]
        }, {
            [`& .${ie.icon}`]: t[`iconColor${ae(i)}`]
        }, {
            [`& .${ie.deleteIcon}`]: t.deleteIcon
        }, {
            [`& .${ie.deleteIcon}`]: t[`deleteIcon${ae(s)}`]
        }, {
            [`& .${ie.deleteIcon}`]: t[`deleteIconColor${ae(n)}`]
        }, {
            [`& .${ie.deleteIcon}`]: t[`deleteIcon${ae(l)}Color${ae(n)}`]
        }, t.root, t[`size${ae(s)}`], t[`color${ae(n)}`], a && t.clickable, a && n !== "default" && t[`clickableColor${ae(n)})`], o && t.deletable, o && n !== "default" && t[`deletableColor${ae(n)}`], t[l], t[`${l}${ae(n)}`]]
    }
})(un( ({theme: e}) => {
    const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
    return {
        maxWidth: "100%",
        fontFamily: e.typography.fontFamily,
        fontSize: e.typography.pxToRem(13),
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        color: (e.vars || e).palette.text.primary,
        backgroundColor: (e.vars || e).palette.action.selected,
        borderRadius: 32 / 2,
        whiteSpace: "nowrap",
        transition: e.transitions.create(["background-color", "box-shadow"]),
        cursor: "unset",
        outline: 0,
        textDecoration: "none",
        border: 0,
        padding: 0,
        verticalAlign: "middle",
        boxSizing: "border-box",
        [`&.${ie.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
            pointerEvents: "none"
        },
        [`& .${ie.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
            fontSize: e.typography.pxToRem(12)
        },
        [`& .${ie.avatarColorPrimary}`]: {
            color: (e.vars || e).palette.primary.contrastText,
            backgroundColor: (e.vars || e).palette.primary.dark
        },
        [`& .${ie.avatarColorSecondary}`]: {
            color: (e.vars || e).palette.secondary.contrastText,
            backgroundColor: (e.vars || e).palette.secondary.dark
        },
        [`& .${ie.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: e.typography.pxToRem(10)
        },
        [`& .${ie.icon}`]: {
            marginLeft: 5,
            marginRight: -6
        },
        [`& .${ie.deleteIcon}`]: {
            WebkitTapHighlightColor: "transparent",
            color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Pe(e.palette.text.primary, .26),
            fontSize: 22,
            cursor: "pointer",
            margin: "0 5px 0 -6px",
            "&:hover": {
                color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Pe(e.palette.text.primary, .4)
            }
        },
        variants: [{
            props: {
                size: "small"
            },
            style: {
                height: 24,
                [`& .${ie.icon}`]: {
                    fontSize: 18,
                    marginLeft: 4,
                    marginRight: -4
                },
                [`& .${ie.deleteIcon}`]: {
                    fontSize: 16,
                    marginRight: 4,
                    marginLeft: -4
                }
            }
        }, ...Object.entries(e.palette).filter(It(["contrastText"])).map( ([r]) => ({
            props: {
                color: r
            },
            style: {
                backgroundColor: (e.vars || e).palette[r].main,
                color: (e.vars || e).palette[r].contrastText,
                [`& .${ie.deleteIcon}`]: {
                    color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : Pe(e.palette[r].contrastText, .7),
                    "&:hover, &:active": {
                        color: (e.vars || e).palette[r].contrastText
                    }
                }
            }
        })), {
            props: r => r.iconColor === r.color,
            style: {
                [`& .${ie.icon}`]: {
                    color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
                }
            }
        }, {
            props: r => r.iconColor === r.color && r.color !== "default",
            style: {
                [`& .${ie.icon}`]: {
                    color: "inherit"
                }
            }
        }, {
            props: {
                onDelete: !0
            },
            style: {
                [`&.${ie.focusVisible}`]: {
                    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Pe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
                }
            }
        }, ...Object.entries(e.palette).filter(It(["dark"])).map( ([r]) => ({
            props: {
                color: r,
                onDelete: !0
            },
            style: {
                [`&.${ie.focusVisible}`]: {
                    background: (e.vars || e).palette[r].dark
                }
            }
        })), {
            props: {
                clickable: !0
            },
            style: {
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
                cursor: "pointer",
                "&:hover": {
                    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Pe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
                },
                [`&.${ie.focusVisible}`]: {
                    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Pe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
                },
                "&:active": {
                    boxShadow: (e.vars || e).shadows[1]
                }
            }
        }, ...Object.entries(e.palette).filter(It(["dark"])).map( ([r]) => ({
            props: {
                color: r,
                clickable: !0
            },
            style: {
                [`&:hover, &.${ie.focusVisible}`]: {
                    backgroundColor: (e.vars || e).palette[r].dark
                }
            }
        })), {
            props: {
                variant: "outlined"
            },
            style: {
                backgroundColor: "transparent",
                border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
                [`&.${ie.clickable}:hover`]: {
                    backgroundColor: (e.vars || e).palette.action.hover
                },
                [`&.${ie.focusVisible}`]: {
                    backgroundColor: (e.vars || e).palette.action.focus
                },
                [`& .${ie.avatar}`]: {
                    marginLeft: 4
                },
                [`& .${ie.avatarSmall}`]: {
                    marginLeft: 2
                },
                [`& .${ie.icon}`]: {
                    marginLeft: 4
                },
                [`& .${ie.iconSmall}`]: {
                    marginLeft: 2
                },
                [`& .${ie.deleteIcon}`]: {
                    marginRight: 5
                },
                [`& .${ie.deleteIconSmall}`]: {
                    marginRight: 3
                }
            }
        }, ...Object.entries(e.palette).filter(It()).map( ([r]) => ({
            props: {
                variant: "outlined",
                color: r
            },
            style: {
                color: (e.vars || e).palette[r].main,
                border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Pe(e.palette[r].main, .7)}`,
                [`&.${ie.clickable}:hover`]: {
                    backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Pe(e.palette[r].main, e.palette.action.hoverOpacity)
                },
                [`&.${ie.focusVisible}`]: {
                    backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Pe(e.palette[r].main, e.palette.action.focusOpacity)
                },
                [`& .${ie.deleteIcon}`]: {
                    color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Pe(e.palette[r].main, .7),
                    "&:hover, &:active": {
                        color: (e.vars || e).palette[r].main
                    }
                }
            }
        }))]
    }
}
))
  , $g = xt("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
        const {ownerState: r} = e
          , {size: n} = r;
        return [t.label, t[`label${ae(n)}`]]
    }
})({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap",
    variants: [{
        props: {
            variant: "outlined"
        },
        style: {
            paddingLeft: 11,
            paddingRight: 11
        }
    }, {
        props: {
            size: "small"
        },
        style: {
            paddingLeft: 8,
            paddingRight: 8
        }
    }, {
        props: {
            size: "small",
            variant: "outlined"
        },
        style: {
            paddingLeft: 7,
            paddingRight: 7
        }
    }]
});
function oc(e) {
    return e.key === "Backspace" || e.key === "Delete"
}
const ea = C.forwardRef(function(t, r) {
    const n = Jl({
        props: t,
        name: "MuiChip"
    })
      , {avatar: i, className: a, clickable: o, color: s="default", component: l, deleteIcon: u, disabled: f=!1, icon: c, label: d, onClick: p, onDelete: h, onKeyDown: m, onKeyUp: g, size: b="medium", variant: _="filled", tabIndex: w, skipFocusWhenDisabled: S=!1, ...y} = n
      , x = C.useRef(null)
      , O = Jv(x, r)
      , P = L => {
        L.stopPropagation(),
        h && h(L)
    }
      , A = L => {
        L.currentTarget === L.target && oc(L) && L.preventDefault(),
        m && m(L)
    }
      , k = L => {
        L.currentTarget === L.target && h && oc(L) && h(L),
        g && g(L)
    }
      , j = o !== !1 && p ? !0 : o
      , T = j || h ? Xu : l || "div"
      , N = {
        ...n,
        component: T,
        disabled: f,
        size: b,
        color: s,
        iconColor: C.isValidElement(c) && c.props.color || s,
        onDelete: !!h,
        clickable: j,
        variant: _
    }
      , E = Ag(N)
      , I = T === Xu ? {
        component: l || "div",
        focusVisibleClassName: E.focusVisible,
        ...h && {
            disableRipple: !0
        }
    } : {};
    let D = null;
    h && (D = u && C.isValidElement(u) ? C.cloneElement(u, {
        className: te(u.props.className, E.deleteIcon),
        onClick: P
    }) : v.jsx(Og, {
        className: te(E.deleteIcon),
        onClick: P
    }));
    let B = null;
    i && C.isValidElement(i) && (B = C.cloneElement(i, {
        className: te(E.avatar, i.props.className)
    }));
    let R = null;
    return c && C.isValidElement(c) && (R = C.cloneElement(c, {
        className: te(E.icon, c.props.className)
    })),
    v.jsxs(jg, {
        as: T,
        className: te(E.root, a),
        disabled: j && f ? !0 : void 0,
        onClick: p,
        onKeyDown: A,
        onKeyUp: k,
        ref: O,
        tabIndex: S && f ? -1 : w,
        ownerState: N,
        ...I,
        ...y,
        children: [B || R, v.jsx($g, {
            className: te(E.label),
            ownerState: N,
            children: d
        }), D]
    })
});
function Cg(e) {
    return Zl("MuiLinearProgress", e)
}
const Ko = Yl("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "bar1", "bar2", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"])
  , Os = 4
  , Ps = wi`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`
  , Tg = typeof Ps != "string" ? xi`
        animation: ${Ps} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null
  , As = wi`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`
  , Eg = typeof As != "string" ? xi`
        animation: ${As} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null
  , js = wi`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`
  , kg = typeof js != "string" ? xi`
        animation: ${js} 3s infinite linear;
      ` : null
  , Mg = e => {
    const {classes: t, variant: r, color: n} = e
      , i = {
        root: ["root", `color${ae(n)}`, r],
        dashed: ["dashed", `dashedColor${ae(n)}`],
        bar1: ["bar", "bar1", `barColor${ae(n)}`, (r === "indeterminate" || r === "query") && "bar1Indeterminate", r === "determinate" && "bar1Determinate", r === "buffer" && "bar1Buffer"],
        bar2: ["bar", "bar2", r !== "buffer" && `barColor${ae(n)}`, r === "buffer" && `color${ae(n)}`, (r === "indeterminate" || r === "query") && "bar2Indeterminate", r === "buffer" && "bar2Buffer"]
    };
    return Ql(i, Cg, t)
}
  , ou = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? Tp(e.palette[t].main, .62) : ey(e.palette[t].main, .5)
  , Ng = xt("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: r} = e;
        return [t.root, t[`color${ae(r.color)}`], t[r.variant]]
    }
})(un( ({theme: e}) => ({
    position: "relative",
    overflow: "hidden",
    display: "block",
    height: 4,
    zIndex: 0,
    "@media print": {
        colorAdjust: "exact"
    },
    variants: [...Object.entries(e.palette).filter(It()).map( ([t]) => ({
        props: {
            color: t
        },
        style: {
            backgroundColor: ou(e, t)
        }
    })), {
        props: ({ownerState: t}) => t.color === "inherit" && t.variant !== "buffer",
        style: {
            "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "currentColor",
                opacity: .3
            }
        }
    }, {
        props: {
            variant: "buffer"
        },
        style: {
            backgroundColor: "transparent"
        }
    }, {
        props: {
            variant: "query"
        },
        style: {
            transform: "rotate(180deg)"
        }
    }]
})))
  , Ig = xt("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
        const {ownerState: r} = e;
        return [t.dashed, t[`dashedColor${ae(r.color)}`]]
    }
})(un( ({theme: e}) => ({
    position: "absolute",
    marginTop: 0,
    height: "100%",
    width: "100%",
    backgroundSize: "10px 10px",
    backgroundPosition: "0 -23px",
    variants: [{
        props: {
            color: "inherit"
        },
        style: {
            opacity: .3,
            backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"
        }
    }, ...Object.entries(e.palette).filter(It()).map( ([t]) => {
        const r = ou(e, t);
        return {
            props: {
                color: t
            },
            style: {
                backgroundImage: `radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`
            }
        }
    }
    )]
})), kg || {
    animation: `${js} 3s infinite linear`
})
  , Dg = xt("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
        const {ownerState: r} = e;
        return [t.bar, t.bar1, t[`barColor${ae(r.color)}`], (r.variant === "indeterminate" || r.variant === "query") && t.bar1Indeterminate, r.variant === "determinate" && t.bar1Determinate, r.variant === "buffer" && t.bar1Buffer]
    }
})(un( ({theme: e}) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [{
        props: {
            color: "inherit"
        },
        style: {
            backgroundColor: "currentColor"
        }
    }, ...Object.entries(e.palette).filter(It()).map( ([t]) => ({
        props: {
            color: t
        },
        style: {
            backgroundColor: (e.vars || e).palette[t].main
        }
    })), {
        props: {
            variant: "determinate"
        },
        style: {
            transition: `transform .${Os}s linear`
        }
    }, {
        props: {
            variant: "buffer"
        },
        style: {
            zIndex: 1,
            transition: `transform .${Os}s linear`
        }
    }, {
        props: ({ownerState: t}) => t.variant === "indeterminate" || t.variant === "query",
        style: {
            width: "auto"
        }
    }, {
        props: ({ownerState: t}) => t.variant === "indeterminate" || t.variant === "query",
        style: Tg || {
            animation: `${Ps} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
        }
    }]
})))
  , Rg = xt("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
        const {ownerState: r} = e;
        return [t.bar, t.bar2, t[`barColor${ae(r.color)}`], (r.variant === "indeterminate" || r.variant === "query") && t.bar2Indeterminate, r.variant === "buffer" && t.bar2Buffer]
    }
})(un( ({theme: e}) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [...Object.entries(e.palette).filter(It()).map( ([t]) => ({
        props: {
            color: t
        },
        style: {
            "--LinearProgressBar2-barColor": (e.vars || e).palette[t].main
        }
    })), {
        props: ({ownerState: t}) => t.variant !== "buffer" && t.color !== "inherit",
        style: {
            backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
        }
    }, {
        props: ({ownerState: t}) => t.variant !== "buffer" && t.color === "inherit",
        style: {
            backgroundColor: "currentColor"
        }
    }, {
        props: {
            color: "inherit"
        },
        style: {
            opacity: .3
        }
    }, ...Object.entries(e.palette).filter(It()).map( ([t]) => ({
        props: {
            color: t,
            variant: "buffer"
        },
        style: {
            backgroundColor: ou(e, t),
            transition: `transform .${Os}s linear`
        }
    })), {
        props: ({ownerState: t}) => t.variant === "indeterminate" || t.variant === "query",
        style: {
            width: "auto"
        }
    }, {
        props: ({ownerState: t}) => t.variant === "indeterminate" || t.variant === "query",
        style: Eg || {
            animation: `${As} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
        }
    }]
})))
  , Vp = C.forwardRef(function(t, r) {
    const n = Jl({
        props: t,
        name: "MuiLinearProgress"
    })
      , {className: i, color: a="primary", value: o, valueBuffer: s, variant: l="indeterminate", ...u} = n
      , f = {
        ...n,
        color: a,
        variant: l
    }
      , c = Mg(f)
      , d = Qv()
      , p = {}
      , h = {
        bar1: {},
        bar2: {}
    };
    if ((l === "determinate" || l === "buffer") && o !== void 0) {
        p["aria-valuenow"] = Math.round(o),
        p["aria-valuemin"] = 0,
        p["aria-valuemax"] = 100;
        let m = o - 100;
        d && (m = -m),
        h.bar1.transform = `translateX(${m}%)`
    }
    if (l === "buffer" && s !== void 0) {
        let m = (s || 0) - 100;
        d && (m = -m),
        h.bar2.transform = `translateX(${m}%)`
    }
    return v.jsxs(Ng, {
        className: te(c.root, i),
        ownerState: f,
        role: "progressbar",
        ...p,
        ref: r,
        ...u,
        children: [l === "buffer" ? v.jsx(Ig, {
            className: c.dashed,
            ownerState: f
        }) : null, v.jsx(Dg, {
            className: c.bar1,
            ownerState: f,
            style: h.bar1
        }), l === "determinate" ? null : v.jsx(Rg, {
            className: c.bar2,
            ownerState: f,
            style: h.bar2
        })]
    })
});
function Bg(e) {
    return Zl("MuiSkeleton", e)
}
Yl("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const Lg = e => {
    const {classes: t, variant: r, animation: n, hasChildren: i, width: a, height: o} = e;
    return Ql({
        root: ["root", r, n, i && "withChildren", i && !a && "fitContent", i && !o && "heightAuto"]
    }, Bg, t)
}
  , $s = wi`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`
  , Cs = wi`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`
  , Ug = typeof $s != "string" ? xi`
        animation: ${$s} 2s ease-in-out 0.5s infinite;
      ` : null
  , Wg = typeof Cs != "string" ? xi`
        &::after {
          animation: ${Cs} 2s linear 0.5s infinite;
        }
      ` : null
  , zg = xt("span", {
    name: "MuiSkeleton",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: r} = e;
        return [t.root, t[r.variant], r.animation !== !1 && t[r.animation], r.hasChildren && t.withChildren, r.hasChildren && !r.width && t.fitContent, r.hasChildren && !r.height && t.heightAuto]
    }
})(un( ({theme: e}) => {
    const t = _g(e.shape.borderRadius) || "px"
      , r = Sg(e.shape.borderRadius);
    return {
        display: "block",
        backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : Pe(e.palette.text.primary, e.palette.mode === "light" ? .11 : .13),
        height: "1.2em",
        variants: [{
            props: {
                variant: "text"
            },
            style: {
                marginTop: 0,
                marginBottom: 0,
                height: "auto",
                transformOrigin: "0 55%",
                transform: "scale(1, 0.60)",
                borderRadius: `${r}${t}/${Math.round(r / .6 * 10) / 10}${t}`,
                "&:empty:before": {
                    content: '"\\00a0"'
                }
            }
        }, {
            props: {
                variant: "circular"
            },
            style: {
                borderRadius: "50%"
            }
        }, {
            props: {
                variant: "rounded"
            },
            style: {
                borderRadius: (e.vars || e).shape.borderRadius
            }
        }, {
            props: ({ownerState: n}) => n.hasChildren,
            style: {
                "& > *": {
                    visibility: "hidden"
                }
            }
        }, {
            props: ({ownerState: n}) => n.hasChildren && !n.width,
            style: {
                maxWidth: "fit-content"
            }
        }, {
            props: ({ownerState: n}) => n.hasChildren && !n.height,
            style: {
                height: "auto"
            }
        }, {
            props: {
                animation: "pulse"
            },
            style: Ug || {
                animation: `${$s} 2s ease-in-out 0.5s infinite`
            }
        }, {
            props: {
                animation: "wave"
            },
            style: {
                position: "relative",
                overflow: "hidden",
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                "&::after": {
                    background: `linear-gradient(
                90deg,
                transparent,
                ${(e.vars || e).palette.action.hover},
                transparent
              )`,
                    content: '""',
                    position: "absolute",
                    transform: "translateX(-100%)",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            }
        }, {
            props: {
                animation: "wave"
            },
            style: Wg || {
                "&::after": {
                    animation: `${Cs} 2s linear 0.5s infinite`
                }
            }
        }]
    }
}
))
  , Fg = C.forwardRef(function(t, r) {
    const n = Jl({
        props: t,
        name: "MuiSkeleton"
    })
      , {animation: i="pulse", className: a, component: o="span", height: s, style: l, variant: u="text", width: f, ...c} = n
      , d = {
        ...n,
        animation: i,
        component: o,
        variant: u,
        hasChildren: !!c.children
    }
      , p = Lg(d);
    return v.jsx(zg, {
        as: o,
        ref: r,
        className: te(p.root, a),
        ownerState: d,
        ...c,
        style: {
            width: f,
            height: s,
            ...l
        }
    })
})
  , qg = Cp(v.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search");
var Hg = Ep ? C.useLayoutEffect : C.useEffect
  , Kp = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
};
function Vg() {
    var e = C.useState(null)
      , t = e[0]
      , r = e[1]
      , n = C.useState(Kp)
      , i = n[0]
      , a = n[1]
      , o = C.useMemo(function() {
        return new window.ResizeObserver(function(s) {
            if (s[0]) {
                var l = s[0].contentRect
                  , u = l.x
                  , f = l.y
                  , c = l.width
                  , d = l.height
                  , p = l.top
                  , h = l.left
                  , m = l.bottom
                  , g = l.right;
                a({
                    x: u,
                    y: f,
                    width: c,
                    height: d,
                    top: p,
                    left: h,
                    bottom: m,
                    right: g
                })
            }
        }
        )
    }, []);
    return Hg(function() {
        if (t)
            return o.observe(t),
            function() {
                o.disconnect()
            }
    }, [t]),
    [r, i]
}
const Kg = Ep && typeof window.ResizeObserver < "u" ? Vg : function() {
    return [ty, Kp]
}
;
function ta(e, t=kp.Account) {
    return `https://solscan.io/${t}/${e}${ry.PORD !== "production" ? "?cluster=devnet" : ""}`
}
const De = [];
for (let e = 0; e < 256; ++e)
    De.push((e + 256).toString(16).slice(1));
function Xg(e, t=0) {
    return (De[e[t + 0]] + De[e[t + 1]] + De[e[t + 2]] + De[e[t + 3]] + "-" + De[e[t + 4]] + De[e[t + 5]] + "-" + De[e[t + 6]] + De[e[t + 7]] + "-" + De[e[t + 8]] + De[e[t + 9]] + "-" + De[e[t + 10]] + De[e[t + 11]] + De[e[t + 12]] + De[e[t + 13]] + De[e[t + 14]] + De[e[t + 15]]).toLowerCase()
}
let Xo;
const Gg = new Uint8Array(16);
function Yg() {
    if (!Xo) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        Xo = crypto.getRandomValues.bind(crypto)
    }
    return Xo(Gg)
}
const Zg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , sc = {
    randomUUID: Zg
};
function Jg(e, t, r) {
    var i;
    if (sc.randomUUID && !e)
        return sc.randomUUID();
    e = e || {};
    const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? Yg();
    if (n.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return n[6] = n[6] & 15 | 64,
    n[8] = n[8] & 63 | 128,
    Xg(n)
}
function Qg(e) {
    const {fill: t="", size: r=30} = e;
    return v.jsx("svg", {
        width: r,
        height: r,
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: v.jsx("path", {
            d: "M20 25L10 15L20 5",
            stroke: t,
            strokeWidth: "4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    })
}
function lc({title: e, to: t="", loading: r, rows: n=20, children: i}) {
    const a = Ja()
      , o = _r()
      , s = () => {
        if (t !== "")
            a(t);
        else {
            if (window.history.length > 2) {
                a(-1);
                return
            }
            a(Mp.Index)
        }
    }
      , {isMatchMobile: l} = Ke();
    return v.jsxs("div", {
        className: "space-y-2",
        children: [location.pathname.startsWith("/search") ? null : e ? v.jsxs("section", {
            className: "flex space-x-5 items-center pt-4 px-2 sm:-ml-3 sm:space-x-2",
            children: [v.jsx(Yi, {
                className: "p-1 w-[40px] h-[40px]",
                size: l ? "small" : "large",
                edge: "end",
                color: "inherit",
                onClick: s,
                sx: {
                    background: "inherit"
                },
                children: v.jsx(Qg, {
                    fill: o.palette.text.secondary,
                    size: l ? 24 : 28
                })
            }), v.jsx(X, {
                variant: "h4",
                className: "font-bold cursor-pointer",
                fontFamily: "Bunch",
                onClick: s,
                children: e
            })]
        }) : null, r === !0 ? v.jsx("section", {
            className: "p-4 sm:p-3",
            children: Xe.times(n).map(u => v.jsx(Fg, {}, u))
        }) : v.jsx(v.Fragment, {
            children: i
        })]
    })
}
const Ts = "data:image/svg+xml,%3csvg%20width='13'%20height='16'%20viewBox='0%200%2013%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.44021%201.05927C5.37375%201.02048%205.29778%201%205.22036%201C5.14294%201%205.06698%201.02048%205.00051%201.05927C4.94569%201.10171%204.9087%201.16232%204.89654%201.22962C4.88439%201.29692%204.89792%201.36623%204.93456%201.42444C6.28663%203.71212%206.57243%206.82681%204.7257%208.54526C4.01517%207.96187%203.45109%207.22701%203.07684%206.39721C2.39391%206.7678%201.82794%207.3141%201.44036%207.9768C1.05278%208.63951%200.858408%209.39328%200.878347%2010.1563C0.906232%2010.8289%201.07153%2011.4893%201.36452%2012.0987C1.65751%2012.708%202.07226%2013.2538%202.58439%2013.7041C3.09652%2014.1545%203.69567%2014.5002%204.34657%2014.721C4.99749%2014.9416%205.68701%2015.033%206.37456%2014.9894C9.91414%2014.9894%2011.7499%2012.8414%2011.8708%2010.1563C12.0137%206.93421%209.67229%202.97105%205.44021%201.05927Z'%20stroke='%23FF7F00'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function eb({marketId: e}) {
    const {latestDatas: t, deletLatestDataByKey: r} = Np()
      , [n,i] = C.useState([])
      , [a,o] = C.useState(!0)
      , {ticker: s} = Ip()
      , {token: l} = Jt()
      , u = C.useMemo( () => ny(new Ji(l.address), new Ji(iy), !0).toBase58(), [l, s])
      , f = [{
        label: v.jsx(V, {
            id: "LhMjLm"
        }),
        width: "18%",
        format: b => Ss(yr(b.block_time).unix())
    }, {
        label: v.jsx(V, {
            id: "+zy2Nq"
        }),
        width: 200,
        format: b => {
            const _ = b.recipient === u;
            return v.jsx(X, {
                fontSize: "inherit",
                color: b.is_buy ? "success.main" : "error.main",
                className: "tracking-tight",
                children: (s == null ? void 0 : s.toUpperCase()) === Nt ? v.jsx(v.Fragment, {
                    children: _ && b.is_buy ? v.jsxs(X, {
                        className: "flex",
                        children: [v.jsx("img", {
                            src: Ts,
                            alt: "",
                            className: "-ml-4 mr-1"
                        }), " ", v.jsx(V, {
                            id: "HeQ9Wo"
                        })]
                    }) : b.is_buy ? v.jsx(V, {
                        id: "qiOIiY"
                    }) : v.jsx(V, {
                        id: "xNB0TS"
                    })
                }) : v.jsx(v.Fragment, {
                    children: _ && b.is_buy ? v.jsx(V, {
                        id: "ctMW2b"
                    }) : v.jsx(v.Fragment, {
                        children: b.is_buy ? v.jsx(V, {
                            id: "qiOIiY"
                        }) : v.jsx(V, {
                            id: "xNB0TS"
                        })
                    })
                })
            })
        }
    }, {
        label: "SOL",
        width: "18%",
        format: b => v.jsx(q, {
            children: v.jsx(X, {
                fontSize: "inherit",
                children: Gu(b.total_native_amount, 4)
            })
        })
    }, {
        label: v.jsx(V, {
            id: "hehnjM"
        }),
        width: "18%",
        format: b => v.jsx(q, {
            children: v.jsx(X, {
                fontSize: "inherit",
                children: gt(b.token_amount)
            })
        })
    }, {
        label: v.jsx(V, {
            id: "a7u1N9"
        }),
        width: "14%",
        format: b => v.jsxs(X, {
            fontSize: "inherit",
            children: [gt(En(b.total_native_amount, b.token_amount), 9), " ", "SOL"]
        })
    }, {
        label: v.jsx(V, {
            id: "n0DQBh"
        }),
        width: "16%",
        align: "right",
        format: b => {
            const _ = w => {
                w.stopPropagation(),
                b.payer && window.open(ta(b.payer))
            }
            ;
            return v.jsx(X, {
                fontSize: "inherit",
                className: "underline-offset-2",
                onClick: _,
                children: b.payer ? _i(b.payer) : "-"
            })
        }
    }]
      , c = [{
        label: v.jsx(V, {
            id: "LhMjLm"
        }),
        width: 100,
        format: b => Ss(yr(b.block_time).unix()),
        stricky: !0
    }, {
        label: v.jsx(V, {
            id: "+zy2Nq"
        }),
        width: 160,
        format: b => {
            const _ = b.recipient === u;
            return v.jsx(X, {
                fontSize: "inherit",
                color: b.is_buy ? "success.main" : "error.main",
                className: "tracking-tight",
                children: (s == null ? void 0 : s.toUpperCase()) === Nt ? v.jsx(v.Fragment, {
                    children: _ && b.is_buy ? v.jsxs(X, {
                        className: "flex",
                        children: [v.jsx("img", {
                            src: Ts,
                            alt: "",
                            className: "-ml-4 mr-1"
                        }), " ", v.jsx(V, {
                            id: "HeQ9Wo"
                        })]
                    }) : b.is_buy ? v.jsx(V, {
                        id: "qiOIiY"
                    }) : v.jsx(V, {
                        id: "xNB0TS"
                    })
                }) : v.jsx(v.Fragment, {
                    children: _ && b.is_buy ? v.jsx(V, {
                        id: "ctMW2b"
                    }) : v.jsx(v.Fragment, {
                        children: b.is_buy ? v.jsx(V, {
                            id: "qiOIiY"
                        }) : v.jsx(V, {
                            id: "xNB0TS"
                        })
                    })
                })
            })
        }
    }, {
        label: "SOL",
        width: 100,
        format: b => v.jsx(q, {
            children: v.jsx(X, {
                fontSize: "inherit",
                children: Gu(b.total_native_amount, 4)
            })
        })
    }, {
        label: v.jsx(V, {
            id: "hehnjM"
        }),
        align: "right",
        width: 100,
        format: b => v.jsx(X, {
            fontSize: "inherit",
            children: gt(b.token_amount)
        })
    }];
    ay( () => {
        if (!e || Xe.isEmpty(t[Kt.TRADE]))
            return;
        const b = t[Kt.TRADE]
          , _ = b.map( (w, S) => w.mid !== Number(e) ? null : {
            ...b,
            block_time: Number(w.bt) * 1e3,
            is_buy: w.buy,
            native_amount: or(w.native_amt, 9),
            total_native_amount: or(w == null ? void 0 : w.total_native_amount, 9),
            token_amount: ht(w.token_amt, 6),
            payer: w.payer,
            id: w.id,
            signature: w.sig,
            recipient: w.recipient
        }).filter(w => w);
        return i(w => Xe.uniqBy([..._, ...w], "id")),
        () => {
            r(Kt.TRADE)
        }
    }
    , [t[Kt.TRADE], e]);
    const {loading: d, request: p} = oy({
        market_id: e
    }, !0)
      , h = C.useCallback(b => {
        var _;
        a && p({
            market_id: e,
            limit: "20",
            from: b === 0 ? 0 : (_ = n.slice(-1)[0]) == null ? void 0 : _.id
        }).then(w => {
            if ((w == null ? void 0 : w.code) === Qa.Success) {
                const {transaction_histories: S, has_more: y} = w.data;
                i(x => {
                    const O = x.filter(A => A.market_id === e);
                    return Xe.uniqBy([...O || [], ...S], "id")
                }
                ),
                o(y)
            }
        }
        )
    }
    , [e, a, d]);
    C.useEffect( () => {
        !e || !s || (i([]),
        h(0),
        o(!0))
    }
    , [e, s]);
    const {isMatchMobile: m} = Ke()
      , g = C.useMemo( () => {
        var _;
        return document.getElementById("holders") ? ((_ = document.getElementById("root")) == null ? void 0 : _.scrollHeight) - sy.HEIGHT_HEADER - 50 - 540 - 48 : 0
    }
    , [document.getElementById("holders")]);
    return v.jsxs(eu, {
        loading: d && Xe.isEmpty(n),
        children: [!Xe.isEmpty(n) && v.jsx(dg, {
            rows: n || [],
            columns: m ? c : f,
            maxHeight: He(g, 500) ? g : 500,
            loadMore: h,
            stricky: m,
            width: m ? "100vw" : "100%",
            onRowClick: (b, _) => {
                window.open(ta(b.signature, kp.TX))
            }
        }), d && v.jsx(q, {
            sx: {
                width: "100%"
            },
            children: v.jsx(Vp, {})
        })]
    })
}
function tb({marketId: e, handleRemoveRestrict: t, handleRestrict: r}) {
    const n = C.useRef()
      , [i,a] = C.useState("")
      , [o,s] = C.useState([])
      , [l,u] = C.useState(!0)
      , [f,c] = C.useState(!1)
      , {isMatchMobile: d} = Ke()
      , {request: p} = ly({
        cursor: "",
        limit: "10",
        market_id: e,
        param: i
    }, !0)
      , h = _r()
      , m = C.useMemo( () => !!(n != null && n.current && i.trim()), [n == null ? void 0 : n.current, i, o, f])
      , g = C.useCallback(y => {
        f || !l || !i.trim() || !e || (c(!0),
        p({
            cursor: y || "0",
            limit: "10",
            market_id: e,
            param: i
        }).then(x => {
            x.code === Qa.Success && (u(x.data.has_more),
            s(O => y ? Xe.uniqBy([...O, ...x.data.lists].map(P => ({
                ...P,
                user_profile: P.user,
                user_id: P.user.user_id
            })), "user_id") : x.data.lists.map(P => ({
                ...P,
                user_profile: P.user,
                user_id: P.user.user_id
            })))),
            c(!1)
        }
        ))
    }
    , [e, l, i]);
    C.useEffect( () => {
        i.trim() && g("")
    }
    , [i]);
    const b = y => {
        t(y),
        g("")
    }
      , _ = y => {
        r(y),
        g("")
    }
      , [w,{width: S}] = Kg();
    return v.jsxs(q, {
        ref: n,
        children: [v.jsx(Dp, {
            ref: w,
            placeholder: "Search",
            size: "small",
            fullWidth: !0,
            endAdornment: v.jsx(qg, {
                className: "opacity-40"
            }),
            value: i,
            onChange: y => {
                u(!0),
                s([]),
                a(y.target.value)
            }
        }), v.jsx(vg, {
            open: m,
            anchorEl: n == null ? void 0 : n.current,
            placement: "bottom-start",
            sx: {
                background: Tp(h.palette.background.paper, .05),
                color: h.palette.text.primary,
                zIndex: 1400,
                width: d ? S : 327,
                borderRadius: "12px"
            },
            children: v.jsx(q, {
                sx: {
                    height: 320
                },
                className: "px-3 py-3",
                children: o.length ? v.jsx(Fp, {
                    data: o,
                    endReached: () => {
                        var y, x;
                        return g((x = (y = o.slice(-1)[0]) == null ? void 0 : y.user_id) == null ? void 0 : x.toString())
                    }
                    ,
                    height: 350,
                    itemContent: (y, x) => {
                        var O;
                        return v.jsxs(q, {
                            className: "flex justify-between place-items-center py-1",
                            children: [v.jsxs(X, {
                                variant: "body2",
                                children: [v.jsxs("b", {
                                    children: ["@", (O = x == null ? void 0 : x.user) == null ? void 0 : O.nickname]
                                }), " ", _i(x.account)]
                            }), x.banned ? v.jsx(it, {
                                variant: "outlined",
                                size: "small",
                                className: "",
                                color: "secondary",
                                onClick: () => b(x.mod_id),
                                children: "Unrestrict"
                            }) : v.jsx(Xp, {
                                item: x,
                                handleRestrict: _
                            })]
                        }, x.account)
                    }
                }) : f ? v.jsx(q, {
                    className: "flex items-center justify-center h-full",
                    children: v.jsx(tu, {})
                }) : v.jsx(q, {
                    className: "py-2 text-center",
                    children: "No data"
                })
            })
        })]
    })
}
function rb({nickname: e, variant: t, color: r="text.primary", fontWeight: n=400, classname: i, children: a}) {
    const o = Ja();
    return v.jsx(X, {
        component: "span",
        fontWeight: n,
        color: r,
        className: ru("cursor-pointer", i),
        onClick: s => {
            s.stopPropagation(),
            o(`${Mp.Profile}/${e}`)
        }
        ,
        children: v.jsx(X, {
            variant: t,
            component: "span",
            fontWeight: n,
            children: a
        })
    })
}
const nb = e => {
    const {status: t} = e
      , [r,n] = C.useState("");
    return C.useEffect( () => {
        n(Jg())
    }
    , []),
    v.jsxs("svg", {
        width: "21",
        height: "21",
        viewBox: "0 0 21 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [v.jsx("circle", {
            cx: "10.9307",
            cy: "10.0391",
            r: "10",
            fill: t === "SUPER_MODERATOR" ? "#ED8BDB" : t === "MODERATOR" ? "#74B2FD" : "#9E9E9E"
        }), v.jsxs("g", {
            clipPath: `url(#${r})`,
            children: [v.jsx("path", {
                d: "M10.9316 5.3125C11.0731 5.3125 11.207 5.37474 11.2976 5.48198L13.405 7.98586L15.1923 6.80616C15.2714 6.75409 15.3642 6.72657 15.4589 6.72706C15.5536 6.72756 15.646 6.75604 15.7246 6.80894C15.8849 6.91702 15.963 7.11067 15.9219 7.29849L14.7311 12.7205C14.7075 12.8262 14.6484 12.9206 14.5638 12.9882C14.4792 13.0557 14.374 13.0924 14.2657 13.092H7.59758C7.48929 13.0924 7.38411 13.0557 7.29948 12.9882C7.21484 12.9206 7.15582 12.8262 7.1322 12.7205L5.94139 7.29849C5.92138 7.20651 5.92949 7.11065 5.96467 7.02335C5.99985 6.93605 6.06047 6.86134 6.13865 6.80894C6.21723 6.75604 6.30968 6.72756 6.4044 6.72706C6.49912 6.72657 6.59187 6.75409 6.67099 6.80616L8.45832 7.98586L10.5657 5.48198C10.6566 5.37474 10.7902 5.3125 10.9316 5.3125ZM10.9316 6.52054L8.91592 8.91467C8.84015 9.00423 8.73417 9.06291 8.61805 9.0796C8.50193 9.09629 8.38372 9.06984 8.28579 9.00525L7.1222 8.23702L7.98128 12.149H13.8823L14.7414 8.23702L13.5778 9.00552C13.3749 9.13916 13.1032 9.09999 12.9476 8.91467L10.9316 6.52054Z",
                fill: "black"
            }), v.jsx("path", {
                d: "M10.2024 11.0569C10.2024 10.8013 10.4202 10.5938 10.6886 10.5938H11.1748C11.4432 10.5938 11.661 10.801 11.661 11.0569C11.661 11.3125 11.4432 11.5198 11.1748 11.5198H10.6886C10.4202 11.5198 10.2024 11.3125 10.2024 11.0569ZM7.04199 14.2982C7.04199 14.0426 7.25982 13.8353 7.52821 13.8353H14.3352C14.5089 13.8353 14.6695 13.9234 14.7564 14.0667C14.7991 14.1364 14.8216 14.2166 14.8216 14.2983C14.8216 14.38 14.7991 14.4602 14.7564 14.5299C14.6695 14.673 14.5092 14.7613 14.3352 14.7613H7.52821C7.25982 14.7613 7.04199 14.5541 7.04199 14.2982Z",
                fill: "black"
            })]
        }), v.jsx("defs", {
            children: v.jsx("clipPath", {
                id: `${r}`,
                children: v.jsx("rect", {
                    width: "10",
                    height: "10",
                    fill: "white",
                    transform: "translate(5.93066 5.03906)"
                })
            })
        })]
    })
}
;
function ib({variant: e="inherit", color: t="inherit", fontWeight: r="inherit", maxWidth: n="120px", children: i}) {
    return v.jsx(X, {
        variant: e,
        color: t,
        fontWeight: r,
        maxWidth: n,
        className: "truncate",
        style: {
            maxWidth: n ? `${n}px` : "auto"
        },
        children: i
    })
}
function ab(e) {
    const {user: t, size: r=32, avatar: n=!0} = e
      , {isMatchMobile: i} = Ke();
    return v.jsxs(q, {
        className: "flex items-center space-x-2 sm:space-x-1",
        children: [n ? v.jsx(uy, {
            src: cy(t == null ? void 0 : t.avatar),
            userId: t == null ? void 0 : t.user_id,
            size: i ? 24 : r
        }) : null, v.jsx(rb, {
            nickname: t == null ? void 0 : t.nickname,
            children: v.jsx(ib, {
                fontWeight: 500,
                maxWidth: i ? 100 : 150,
                variant: i ? "body2" : "body1",
                children: t == null ? void 0 : t.nickname
            })
        }), t.moderator ? v.jsx(yg, {
            title: t.moderator.banned ? "Moderator permissions revoked" : "Moderator",
            arrow: !0,
            placement: "top",
            children: v.jsx(q, {
                children: v.jsx(nb, {
                    status: t.moderator.banned ? "" : t.moderator.status
                })
            })
        }) : null]
    })
}
function ob(e) {
    const {data: t=[], refetchHolders: r, marketId: n, ...i} = e
      , [a,o] = C.useState([])
      , [s,l] = C.useState(!1)
      , [u,f] = C.useState(!0)
      , [c,d] = C.useState("")
      , {isMatchMobile: p} = Ke()
      , [h,m] = C.useState("quickActions")
      , {request: g} = fy({
        market_id: n
    }, !0)
      , [b,_] = C.useState(!1)
      , [w,S] = C.useState(null)
      , {request: y} = dy({
        requestBody: {
            user_id: "",
            market_id: n,
            reason: ""
        }
    }, !0)
      , {request: x} = py({
        requestBody: {
            id: "",
            market_id: n
        }
    }, !0)
      , O = j => {
        y({
            requestBody: {
                user_id: j,
                market_id: n.toString(),
                reason: ""
            }
        }).then(T => {
            r(),
            A("", !0),
            S("")
        }
        )
    }
      , P = j => {
        x({
            requestBody: {
                id: j.toString(),
                market_id: n.toString()
            }
        }).then(T => {
            A("", !0),
            r()
        }
        )
    }
      , A = C.useCallback( (j, T=!1) => {
        !T && (!n || !i.open || !u || s) || (l(!0),
        g({
            market_id: n,
            limit: "10",
            from: j || ""
        }).then(N => {
            N.code === Qa.Success && (f(N.data.has_more),
            d(N.data.next),
            o(E => j ? Xe.uniqBy([...E, ...N.data.restricted_users], "user_id") : N.data.restricted_users)),
            l(!1)
        }
        ))
    }
    , [i.open, n, u, s]);
    C.useEffect( () => {
        if (!(!i.open || !n))
            return A(""),
            () => {
                f(!0),
                o([])
            }
    }
    , [i.open, n]);
    const k = (j, T) => {
        S(T),
        _(j)
    }
    ;
    return v.jsx(Rp, {
        ...i,
        sx: {
            "& .MuiDialog-paper": {
                background: "#000 !important",
                paddingBottom: "16px"
            }
        },
        children: v.jsxs(q, {
            className: "grid grid-cols-2 sm:grid-cols-1 gap-8 sm:gap-2 relative mb-4",
            children: [v.jsxs(q, {
                className: "space-y-4 sm:space-y-2",
                children: [v.jsx(tb, {
                    marketId: n,
                    handleRemoveRestrict: P,
                    handleRestrict: O
                }), v.jsx(ot, {
                    sx: {
                        marginRight: p ? "0" : "12px"
                    },
                    className: "sm:hidden sm:mt-2"
                }), v.jsxs(nu, {
                    value: h,
                    onChange: (j, T) => m(T),
                    className: "sm:block hidden",
                    children: [v.jsx(Rn, {
                        label: "Restricted",
                        value: "restrictedUsers"
                    }), v.jsx(Rn, {
                        label: "Quick Actions",
                        value: "quickActions"
                    })]
                }), v.jsx(q, {
                    sx: {
                        height: 345
                    },
                    className: `${p ? h === "restrictedUsers" ? "block" : "hidden" : ""}`,
                    children: a.length ? v.jsx(Fp, {
                        data: a,
                        endReached: () => A(c),
                        height: 330,
                        itemContent: (j, T) => v.jsxs(q, {
                            className: "flex justify-between place-items-center py-1",
                            children: [v.jsxs(X, {
                                variant: "body2",
                                children: [v.jsxs("b", {
                                    children: ["@", T == null ? void 0 : T.nickname]
                                }), " ", _i(T.account)]
                            }), v.jsx(it, {
                                variant: "outlined",
                                size: "small",
                                color: "secondary",
                                onClick: () => P(T.id),
                                children: "Unrestrict"
                            })]
                        }, T.account)
                    }) : s ? v.jsx(q, {
                        className: "flex items-center justify-center h-full",
                        children: v.jsx(tu, {})
                    }) : v.jsx(q, {
                        className: "py-2 text-center",
                        children: "No data"
                    })
                })]
            }), v.jsxs(q, {
                sx: {
                    height: 345
                },
                className: `${p ? h === "quickActions" ? "block" : "hidden" : ""} py-4 px-2 sm:px-0 space-y-4 sm:py-0`,
                children: [v.jsx(X, {
                    variant: "h5",
                    fontWeight: 700,
                    className: "sm:hidden",
                    children: "Quick Actions"
                }), v.jsx(q, {
                    className: "space-y-2",
                    children: t.map(j => {
                        var T;
                        return v.jsxs(q, {
                            className: "flex justify-between items-center space-x-1",
                            children: [v.jsx(q, {
                                className: "flex items-center space-x-1",
                                children: v.jsx(ab, {
                                    user: {
                                        ...j == null ? void 0 : j.user_profile,
                                        moderator: j.moderator
                                    },
                                    size: 20
                                })
                            }), j.moderator.banned ? v.jsx(it, {
                                variant: "outlined",
                                size: "small",
                                className: "",
                                color: "secondary",
                                onClick: () => P(j.moderator.banned_mod_id),
                                children: "Unrestrict"
                            }) : v.jsx(Xp, {
                                item: j,
                                open: b && w === ((T = j == null ? void 0 : j.user_profile) == null ? void 0 : T.user_id),
                                handleRestrict: O,
                                handleOpen: k
                            })]
                        }, j.account)
                    }
                    )
                })]
            }), v.jsx(ot, {
                orientation: "vertical",
                className: "absolute left-1/2 sm:hidden"
            })]
        })
    })
}
const Xp = e => {
    var a;
    const {handleRestrict: t, item: r, open: n, handleOpen: i} = e;
    return v.jsx(v.Fragment, {
        children: v.jsx(qp, {
            arrow: !0,
            placement: "top",
            open: n,
            title: v.jsxs(q, {
                className: "p-4 space-y-4",
                children: [v.jsxs(X, {
                    children: ["After performing this action,", " ", v.jsxs(X, {
                        color: "primary",
                        variant: "inherit",
                        className: "inline",
                        children: ["@", (a = r.user_profile) == null ? void 0 : a.nickname]
                    }), " ", "will lose moderator privileges."]
                }), v.jsxs(q, {
                    className: "flex justify-end items-center space-x-4",
                    children: [v.jsx(it, {
                        variant: "text",
                        size: "small",
                        color: "inherit",
                        onClick: () => i(!1),
                        children: "Cancel"
                    }), v.jsx(it, {
                        color: "primary",
                        size: "small",
                        variant: "text",
                        onClick: () => {
                            t(r == null ? void 0 : r.user_profile.user_id)
                        }
                        ,
                        children: "Confirm"
                    })]
                })]
            }),
            children: v.jsx(it, {
                variant: "outlined",
                size: "small",
                color: "secondary",
                sx: {
                    fontSize: 12
                },
                onClick: () => {
                    var o;
                    return i(!0, (o = r == null ? void 0 : r.user_profile) == null ? void 0 : o.user_id)
                }
                ,
                children: "Restrict Mod"
            })
        })
    })
}
  , sb = xt(X)`
  font-family: 'Chivo Mono' !important;
  &.linear {
    background-image: linear-gradient(90deg, #00aa12 3%, #b2c459 94%);
    color: transparent;
    background-clip: text;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
function Gp({from: e}) {
    const {tokenMetadata: t, holders: r, requestHolders: n, requestHoldersLoading: i, marketId: a} = Jt()
      , {isLogin: o} = iu()
      , {userInfo: s, setIsModerator: l} = Bp()
      , [u,f] = C.useState(!1)
      , [c,d] = C.useState(!1);
    Ja();
    const p = _r()
      , {isMatchMobile: h} = Ke()
      , m = C.useCallback( () => {
        a && n({
            market_id: t.market.market_id
        })
    }
    , [a]);
    C.useEffect( () => {
        if (!o)
            l(!1),
            d(!1);
        else {
            const b = r == null ? void 0 : r.find(_ => {
                var w;
                return ((w = _.user_profile) == null ? void 0 : w.user_id) === s.user_id
            }
            );
            b ? (b.moderator.banned ? l(!1) : (b.moderator.status === Yu.MODERATOR || b.moderator.status === Yu.SUPER_MODERATOR) && l(!0),
            b.moderator.status === "SUPER_MODERATOR" ? d(!0) : d(!1)) : (d(!1),
            l(!1))
        }
    }
    , [r, s, o]),
    C.useEffect( () => () => {
        l(!1)
    }
    , []);
    const g = ({item: b, index: _}) => {
        var w;
        return v.jsxs(my, {
            className: "flex justify-between items-center py-1 px-0 font-bold space-x-1.5",
            children: [v.jsxs(X, {
                component: "a",
                target: "_blank",
                href: ta(b.account),
                className: "underline-offset-2 flex items-center space-x-2",
                noWrap: !0,
                children: [b.is_associated_bonding_curve || b.is_black_hole ? "" : v.jsx("span", {
                    children: _ + 1
                }), v.jsx(X, {
                    noWrap: !0,
                    className: "hover:underline",
                    color: b.is_black_hole ? "warning" : "inherit",
                    children: _i(b.account)
                }), b.is_associated_bonding_curve && v.jsx(Zu, {
                    variant: "body2",
                    level: "l2",
                    children: "(Bonding Curve)"
                }), b.is_black_hole && v.jsxs(X, {
                    variant: "body2",
                    color: "warning",
                    children: ["(", v.jsx(V, {
                        id: "i20cQ+"
                    }), ")"]
                }), o && s.user_id === ((w = b.user_profile) == null ? void 0 : w.user_id) && v.jsxs(Zu, {
                    variant: "body2",
                    level: "l2",
                    children: ["(", v.jsx(V, {
                        id: "kWJmRL"
                    }), ")"]
                })]
            }), v.jsx(X, {
                color: b.is_black_hole ? "warning" : "inherit",
                children: Hp(b.percentage, 4)
            })]
        }, _)
    }
    ;
    return v.jsxs(q, {
        children: [v.jsxs(q, {
            className: "p-4 sm:pt-0",
            children: [v.jsxs(q, {
                className: "flex justify-between items-center relative",
                children: [v.jsx(sb, {
                    fontWeight: 500,
                    variant: "h5",
                    className: `space-x-2 flex itmes-center ${e === "detail" ? "" : "sm:hidden"}`,
                    children: v.jsx("span", {
                        children: v.jsx(V, {
                            id: "CI4Km7"
                        })
                    })
                }), null]
            }), v.jsx(ot, {
                className: "mt-4 sm:hidden",
                sx: {
                    borderStyle: "dashed",
                    borderColor: Pe(p.palette.divider, .5)
                }
            }), v.jsx(eu, {
                loading: i && Xe.isEmpty(r),
                children: v.jsxs(hy, {
                    id: "holders",
                    children: [Xe.isEmpty(r) ? null : v.jsx(g, {
                        item: r == null ? void 0 : r.find(b => b.is_associated_bonding_curve)
                    }), !Xe.isEmpty(r) && (r != null && r.find(b => b.is_black_hole)) ? v.jsx(g, {
                        item: r == null ? void 0 : r.find(b => b.is_black_hole)
                    }) : null, r == null ? void 0 : r.filter(b => !b.is_associated_bonding_curve && !b.is_black_hole).slice(0, 20).map( (b, _) => v.jsx(g, {
                        item: b,
                        index: _
                    }, _))]
                })
            })]
        }), c ? v.jsx(ob, {
            open: u,
            onClose: () => f(!1),
            title: v.jsxs(q, {
                children: [v.jsx(X, {
                    variant: "h5",
                    children: "Mod Restriction List"
                }), v.jsx(X, {
                    variant: "body2",
                    color: "text.secondary",
                    children: "Users on this list will be unable to hold mod permissions."
                })]
            }),
            width: h ? "100%" : 800,
            data: r.filter(b => !b.is_associated_bonding_curve && b.user_profile && !b.is_black_hole).slice(0, 10),
            refetchHolders: m,
            marketId: (t == null ? void 0 : t.market.market_id) || ""
        }) : null]
    })
}
function Yp() {
    const [e,t] = C.useState(ft.Trades)
      , {tokenMetadata: r} = C.useContext(vy);
    Ja(),
    iu();
    const n = l => {
        t(l)
    }
      , {isMatchMobile: i} = Ke()
      , {height: a} = gg();
    C.useMemo( () => a - 100 - 540 - 40, [a]);
    const {tabLabels: o, tabValues: s} = C.useMemo( () => i ? {
        tabLabels: [v.jsx(V, {
            id: "ZFtwlj"
        }), v.jsx(V, {
            id: "6g1gi0"
        }), v.jsx(V, {
            id: "CI4Km7"
        })],
        tabValues: [ft.Trades, ft.Proposals, ft.Holders]
    } : (e === ft.Holders && t(ft.Trades),
    {
        tabLabels: [v.jsx(V, {
            id: "ZFtwlj"
        }), v.jsx(V, {
            id: "6g1gi0"
        })],
        tabValues: [ft.Trades, ft.Proposals]
    }), [i, e]);
    return v.jsxs("div", {
        className: "sm:pt-2",
        children: [v.jsx(nu, {
            className: "px-4",
            value: e,
            onChange: (l, u) => n(u),
            color: "primary",
            children: s.map( (l, u) => v.jsx(Rn, {
                label: o[u],
                value: l
            }, l))
        }), v.jsxs("div", {
            children: [e === ft.Trades ? v.jsx(eb, {
                marketId: r.market.market_id
            }) : null, e === ft.Proposals ? v.jsx(q, {
                sx: {
                    height: "300px"
                },
                className: "flex items-center justify-center",
                children: v.jsx(X, {
                    children: v.jsx(V, {
                        id: "AUYALh"
                    })
                })
            }) : null, e === ft.Holders ? v.jsx(Gp, {}) : null]
        })]
    })
}
function uc({label: e, value: t, prefix: r, unit: n, loading: i, className: a}) {
    return v.jsxs("div", {
        className: ru("flex h-6 items-center justify-between space-x-2", a),
        children: [v.jsx("div", {
            className: "flex items-center",
            children: v.jsx(X, {
                variant: "body2",
                component: "span",
                color: "text.secondary",
                className: "whitespace-nowrap",
                children: e
            })
        }), i ? v.jsx(tu, {
            size: 16
        }) : v.jsxs("div", {
            className: "flex items-center space-x-1 text-right overflow-hidden",
            children: [r && v.jsx(X, {
                className: "min-w-min",
                noWrap: !0,
                component: "span",
                variant: "body2",
                color: "text.secondary",
                children: r
            }), v.jsx(X, {
                className: "w-full",
                component: "div",
                variant: "body2",
                color: "text.secondary",
                children: t
            }), n && v.jsx(X, {
                className: "min-w-min",
                noWrap: !0,
                component: "span",
                variant: "body2",
                color: "text.secondary",
                children: n
            })]
        })]
    })
}
const gn = e => {
    const {align: t="left", label: r, value: n, size: i, className: a, onClick: o} = e
      , {isMatchMobile: s} = Ke();
    return v.jsxs("div", {
        className: ru(`space-y-0.5 w-full sm:space-y-0.5 ${a}`),
        onClick: o,
        children: [v.jsx(X, {
            variant: "body2",
            color: "text.secondary",
            className: "sm:text-[14px]",
            align: t,
            noWrap: !0,
            children: r
        }), v.jsx(X, {
            variant: s || i === "small" ? "body2" : "h5",
            color: "text.primary",
            align: t,
            className: "sm:text-[14px]",
            noWrap: !0,
            children: n
        })]
    })
}
;
function cc({tokenMeta: e, direction: t="row", link: r, color: n}) {
    return Ke(),
    v.jsxs(v.Fragment, {
        children: [e.twitter ? v.jsx(Yi, {
            className: "size-6",
            component: "a",
            href: Ho(e.twitter),
            target: "_blank",
            children: v.jsx(yy, {
                sx: {
                    width: 16,
                    height: 16,
                    color: n ?? "inherit"
                }
            })
        }) : null, e.telegram ? v.jsx(Yi, {
            className: "size-6",
            component: "a",
            href: Ho(e.telegram),
            target: "_blank",
            children: v.jsx(gy, {
                sx: {
                    width: 20,
                    height: 20,
                    color: n ?? "inherit"
                },
                fontSize: "small",
                className: ""
            })
        }) : null, e.website ? v.jsx(Yi, {
            className: "size-6",
            component: "a",
            href: Ho(e.website),
            target: "_blank",
            sx: {
                color: n ?? "inherit"
            },
            children: v.jsx(bg, {
                size: 16,
                className: "basis-4 flex-shrink-0"
            })
        }) : null]
    })
}
function Zp() {
    var l;
    const {tokenMetadata: e, token: t} = Jt()
      , {isMatchMobile: r, isMatchPc: n} = Ke()
      , {solPrice: i} = eo()
      , [a,o] = by()
      , s = _r();
    return C.useEffect( () => {
        a && xy.success(gr._({
            id: "6V3Ea3"
        }))
    }
    , [a]),
    v.jsxs(q, {
        className: "flex items-center justify-between sm:space-x-2 sm:px-3 sm:pb-2 sm:flex-wrap sm:space-y-2",
        children: [v.jsxs(q, {
            className: "flex flex-1 items-center justify-between overflow-hidden space-x-4 sm:space-x-2",
            children: [v.jsx(Zi, {
                src: e.market_metadata.image_url,
                size: r ? 40 : 44,
                symbol: e.market.token_symbol
            }), v.jsxs(q, {
                className: "flex-1 overflow-hidden",
                children: [v.jsxs(X, {
                    fontWeight: 700,
                    className: "flex items-center space-x-3 flex-wrap",
                    children: [v.jsx(X, {
                        variant: "inherit",
                        fontSize: 16,
                        children: e == null ? void 0 : e.market.token_symbol
                    }), n && v.jsx(X, {
                        color: "text.secondary",
                        noWrap: !0,
                        className: "flex-1",
                        children: e == null ? void 0 : e.market.token_name
                    })]
                }), v.jsxs(q, {
                    className: "flex space-x-3",
                    children: [v.jsx(q, {
                        className: "flex space-x-3 items-center",
                        children: v.jsx(X, {
                            className: "hover:underline",
                            color: "text.secondary",
                            component: "a",
                            target: "_blank",
                            noWrap: !0,
                            variant: "body2",
                            href: ta(e.market.token_mint),
                            children: _i(e.market.token_mint)
                        })
                    }), r ? null : v.jsx("div", {
                        className: "flex items-center space-x-1",
                        children: v.jsx(cc, {
                            tokenMeta: e == null ? void 0 : e.market_metadata,
                            color: s.palette.text.secondary
                        })
                    }), e.market.token_symbol === Nt && v.jsx(qp, {
                        title: gr._({
                            id: "e93Bho"
                        }),
                        placement: "bottom",
                        arrow: !0,
                        children: v.jsx("img", {
                            src: Ts,
                            alt: "",
                            className: "-ml-4 mr-1"
                        })
                    })]
                })]
            })]
        }), v.jsxs(q, {
            className: "flex space-x-4 md:flex-col md:space-x-0 sm:space-x-0 sm:flex-col sm:justify-end",
            children: [v.jsx(uc, {
                label: v.jsxs(X, {
                    variant: "body1",
                    children: [v.jsx(V, {
                        id: "5N3b5J"
                    }), ":"]
                }),
                value: v.jsxs(X, {
                    color: "text.primary",
                    variant: "body1",
                    children: ["$", lr(At(e.market_ticker.market_cap, i), 2)]
                })
            }), v.jsx(uc, {
                label: v.jsx(X, {
                    variant: "body1",
                    children: v.jsx(V, {
                        id: "EOFF1k"
                    })
                }),
                value: v.jsx(X, {
                    color: "text.primary",
                    variant: "body1",
                    children: Ss(Number((l = e == null ? void 0 : e.market) == null ? void 0 : l.create_timestamp))
                })
            })]
        }), r ? v.jsx(q, {
            className: "w-full flex items-center justify-between",
            children: v.jsx(cc, {
                tokenMeta: e == null ? void 0 : e.market_metadata,
                direction: "row",
                link: !0
            })
        }) : null]
    })
}
const bn = {
    symbol: "SOL",
    isNative: !0,
    address: "",
    image_url: Py
};
function fc({activeDirection: e=ce.Buy}) {
    const {token: t, tokenMetadata: r, createAddressFee: n, hasAssociatedAddress: i} = Jt()
      , {connection: a} = wy()
      , {slippage: o} = eo()
      , [s,l] = C.useState(e)
      , {publicKey: u} = _y()
      , {marketInfo: f, updateNativeBalance: c, updateTokenBalance: d, balanceSubscribeState: p} = Sy()
      , {data: h, request: m} = Oy(void 0, !0)
      , {balance: g=""} = xg(!p)
      , b = r == null ? void 0 : r.market.market
      , {balance: _} = wg(t == null ? void 0 : t.address, u, !p)
      , {isLogin: w} = iu()
      , S = _r()
      , y = C.useMemo( () => t ? [bn, t] : [bn], [t])
      , {buyToken: x, sellToken: O} = pg()
      , {program: P} = Lp()
      , [A,k] = C.useState("")
      , [j,T] = C.useState("0")
      , N = t.symbol === Nt ? t : y[0]
      , [E,I] = C.useState(N)
      , [D,B] = C.useState(!1)
      , [R,L] = C.useState()
      , [K,G] = C.useState("")
      , [z,Y] = C.useState()
      , [se,we] = C.useState()
      , Ae = C.useMemo( () => w ? c || g : 0, [c, g, w])
      , [_t,Ce] = C.useMemo( () => !Ae || !se || !u || Ay(Ae, se) || !w ? [0, 0] : [Ae, He(Ir(Ae, se), 0) ? Ir(Ae, se) : 0], [Ae, se, u])
      , W = C.useMemo( () => !_ || !u ? 0 : d || _, [_, u, d])
      , Q = C.useCallback(async () => {
        if (!a && He(se, 0))
            return;
        const le = jy([$y.DefaultAccountState])
          , ze = await a.getMinimumBalanceForRentExemption(le);
        we(ze)
    }
    , [a, se]);
    C.useEffect( () => {
        !a || !u || se || Q()
    }
    , [a, u, se]),
    C.useEffect( () => {
        s === ce.Buy && I(t.symbol === Nt ? t : bn),
        s === ce.Sell && t && I(t)
    }
    , [s, t]);
    const ee = C.useCallback(async () => {
        if (!A || !z || !Ce) {
            L(null);
            return
        }
        if (s === ce.Buy && !E.isNative && He(A, ht(z))) {
            G("Max buy quantity exceeded");
            return
        }
        if (s === ce.Sell && A && Ju(W, 0)) {
            G("Insufficient token balance");
            return
        }
        if (s === ce.Sell && A && He(W, 0) && He(A, ht(Number(W)))) {
            G(gr._({
                id: "0M9qe5"
            }));
            return
        }
        G("");
        const le = A
          , ze = E.isNative ? new ge(le).times($r).toFixed(0) : new ge(le).times(Math.pow(10, sr)).toFixed(0);
        try {
            if (s === ce.Buy)
                if (E.isNative) {
                    const Fe = Cy(Number(ze), z);
                    L(Fe)
                } else {
                    const Fe = Qu(Number(ze), z, !0);
                    L(Fe)
                }
            else {
                const Fe = Qu(Number(ze), z, !1);
                L(Fe)
            }
        } catch (Fe) {
            G(Fe.message),
            L(null)
        }
    }
    , [A, s, E, t, z, W])
      , U = C.useCallback(async () => {
        if (!Xe.isEmpty(f)) {
            Y(f.remainingSupply.toString());
            return
        }
        const le = new Ji(b)
          , ze = await P.account.market.fetch(le);
        Y(ze.remainingSupply.toString())
    }
    , [b, f]);
    C.useEffect( () => {
        U()
    }
    , [f]),
    C.useEffect( () => {
        k(""),
        L(null)
    }
    , [b]),
    C.useEffect( () => {
        ee()
    }
    , [A, z]),
    C.useEffect( () => {
        t.symbol === Nt && w && m(void 0)
    }
    , [t, w]),
    C.useEffect( () => {
        h && h.code === Qa.Success && T(h.data.available_points)
    }
    , [h]);
    const me = () => {
        k(""),
        L(null)
    }
      , ne = C.useMemo( () => s === ce.Buy ? E.isNative ? En(100 - Number(o), 100) : En(100 + Number(o), 100) : En(100 - Number(o), 100), [o, s, E])
      , Se = async () => {
        const le = A
          , ze = E.isNative ? new ge(le).times($r).toDecimalPlaces(0, ge.ROUND_DOWN).toString() : new ge(le).times(Math.pow(10, sr)).toDecimalPlaces(0, ge.ROUND_DOWN).toString();
        try {
            if (E.isNative) {
                const Fe = At(ht(Number(R == null ? void 0 : R.buy_amount)), ne)
                  , vn = R == null ? void 0 : R.y
                  , qo = new ge(Fe).times(Math.pow(10, sr)).toDecimalPlaces(0, ge.ROUND_DOWN).toString();
                await x.mutateAsync({
                    tokenAddress: t.address,
                    tokenSymbol: t.symbol,
                    buyAmount: Number(qo),
                    maxPay: Number(vn),
                    isNative: !0
                }) && (me(),
                B(!1))
            } else {
                const Fe = At(or(Number(R == null ? void 0 : R.total), 9), ne)
                  , vn = new ge(Fe).times($r).toDecimalPlaces(0, ge.ROUND_DOWN).toString();
                await x.mutateAsync({
                    tokenAddress: t.address,
                    tokenSymbol: t.symbol,
                    buyAmount: Number(ze),
                    maxPay: Number(vn),
                    isNative: !1
                }) && (T(Ir(j, A)),
                me(),
                B(!1),
                setTimeout( () => {
                    m(void 0)
                }
                , 5e3))
            }
        } catch {
            B(!1)
        }
    }
      , Oe = async () => {
        const le = Number(A)
          , ze = new ge(le).times(Math.pow(10, sr)).toDecimalPlaces(0, ge.ROUND_DOWN).toString();
        try {
            const Fe = At(or(Number(R == null ? void 0 : R.total), 9), ne)
              , vn = new ge(Fe).times($r).toDecimalPlaces(0, ge.ROUND_DOWN).toString();
            await O.mutateAsync({
                tokenAddress: t.address,
                tokenSymbol: t.symbol,
                sellAmount: Number(ze),
                minReceive: Number(vn)
            }) && (me(),
            B(!1))
        } catch {
            B(!1)
        }
    }
      , Le = () => {
        !u || !t || (B(!0),
        s === ce.Buy ? Se() : Oe())
    }
      , St = le => {
        I(le),
        L(null),
        k("")
    }
      , Ye = C.useMemo( () => {
        if (!R)
            return "";
        if (s === ce.Buy) {
            if (E.isNative)
                return new ge(Number(R == null ? void 0 : R.buy_amount)).div(Math.pow(10, sr)).toNumber();
            {
                const le = Number(R.total);
                return new ge(le).div($r).toNumber()
            }
        } else
            return new ge(Number(R.total)).div($r).toNumber()
    }
    , [R, s, E])
      , [Ar,kt] = C.useMemo( () => !A || ec(A, 0) ? [v.jsx(V, {
        id: "CpsAmO"
    }), !0] : D ? [v.jsx(V, {
        id: "etLShk"
    }), !0] : A && !Ye ? K ? [K, !0] : [v.jsx(V, {
        id: "CpsAmO"
    }), !0] : E.symbol === Nt && s === ce.Buy && A && He(A, j) ? [v.jsx(V, {
        id: "ouGG/I"
    }), !0] : E.isNative && A && He(A, or(Ce)) ? [v.jsx(V, {
        id: "UuSyre"
    }), !0] : s === ce.Sell && A && Ju(W, 0) ? [v.jsx(V, {
        id: "einzuA"
    }), !0] : !E.isNative && s === ce.Sell && A && He(A, ht(W)) ? [v.jsx(V, {
        id: "einzuA"
    }), !0] : !E.isNative && s === ce.Buy && Ye && He(Ye, or(Ce)) ? [v.jsx(V, {
        id: "UuSyre"
    }), !0] : A && s === ce.Sell && He(A, ht(Number(W))) ? [v.jsx(V, {
        id: "0M9qe5"
    }), !0] : A && s === ce.Buy && E.isNative && R && ws(ht(Number(R.buy_amount)), ht(Number(z))) ? [v.jsx(V, {
        id: "8LSwp6"
    }), !0] : A && s === ce.Buy && !E.isNative && ws(A, ht(Number(z))) ? [v.jsx(V, {
        id: "8LSwp6"
    }), !0] : [v.jsx(V, {
        id: "CpsAmO"
    }), !1], [A, D, Ye, Ce, W, E, s, R, K, z])
      , Ot = le => {
        l(le),
        k("")
    }
      , jr = le => {
        k(le)
    }
      , Mi = le => {
        k(ht(At(W, le)).toString())
    }
    ;
    return v.jsxs(q, {
        className: "p-4 space-y-4 w-full rounded-xl sm:p-0 sm:flex sm:flex-col-reverse sm:space-y-0",
        children: [v.jsxs("div", {
            className: "grid grid-cols-2 gap-4 sm:pb-0",
            children: [v.jsx(it, {
                onClick: () => Ot(ce.Buy),
                color: s === ce.Buy ? "success" : "secondary",
                variant: "contained",
                size: "large",
                fullWidth: !0,
                children: v.jsx(V, {
                    id: "qiOIiY"
                })
            }), v.jsx(it, {
                onClick: () => Ot(ce.Sell),
                color: s === ce.Sell ? "error" : "secondary",
                variant: "contained",
                fullWidth: !0,
                size: "large",
                children: v.jsx(V, {
                    id: "xNB0TS"
                })
            })]
        }), v.jsxs(q, {
            className: "sm:pb-3 space-y-4",
            children: [v.jsx(Dp, {
                placeholder: "0.0",
                color: "secondary",
                fullWidth: !0,
                value: A,
                sx: {
                    background: S.palette.background.paper
                },
                onChange: le => {
                    (Ty(le.target.value.replaceAll(",", "")) || !le.target.value) && Ey(le.target.value.replaceAll(",", ""), E.isNative ? 9 : 6) && k(le.target.value.replaceAll(",", ""))
                }
                ,
                endAdornment: v.jsx(lb, {
                    tokens: y,
                    selectedToken: E,
                    onSelectToken: St,
                    disabled: s === ce.Sell || E.symbol === Nt
                })
            }), u ? v.jsxs(q, {
                className: "space-y-2",
                children: [v.jsxs(q, {
                    className: "flex justify-between text-sm space-x-2 items-center flex-wrap gap-2",
                    children: [v.jsxs(q, {
                        className: "flex items-center space-x-1",
                        children: [s === ce.Buy && E.isNative ? v.jsx(v.Fragment, {
                            children: [.1, .5].map( (le, ze) => v.jsx(ea, {
                                label: `${le} SOL`,
                                size: "small",
                                color: "default",
                                variant: "outlined",
                                sx: {
                                    padding: "1px 2px",
                                    fontSize: 12,
                                    ".MuiChip-label": {
                                        padding: "1px 4px"
                                    }
                                },
                                onClick: () => jr(le)
                            }, ze))
                        }) : null, s === ce.Sell ? v.jsx(v.Fragment, {
                            children: [.25, .5, .75, 1].map( (le, ze) => v.jsx(ea, {
                                label: `${Hp(le)}`,
                                size: "small",
                                color: "default",
                                variant: "outlined",
                                sx: {
                                    padding: "1px 2px",
                                    fontSize: 12,
                                    "& .MuiChip-label": {
                                        padding: "6px"
                                    }
                                },
                                onClick: () => Mi(le)
                            }, ze))
                        }) : null]
                    }), v.jsx(X, {
                        component: "div",
                        variant: "body2",
                        className: "flex items-center flex-1 justify-end",
                        children: u ? v.jsxs(q, {
                            className: "space-x-1 flex flex-col justify-end",
                            children: [s === ce.Buy && t.symbol === Nt && v.jsxs(q, {
                                className: "flex items-center justify-end space-x-1",
                                children: [v.jsxs(X, {
                                    variant: "inherit",
                                    align: "right",
                                    noWrap: !0,
                                    children: [v.jsx(V, {
                                        id: "m8PNnZ"
                                    }), " ", j]
                                }), v.jsx(it, {
                                    variant: "text",
                                    color: "primary",
                                    size: "small",
                                    sx: {
                                        padding: "3px 6px",
                                        minWidth: "auto"
                                    },
                                    onClick: () => jr(j),
                                    children: v.jsx(V, {
                                        id: "CK1KXz"
                                    })
                                })]
                            }), v.jsxs(q, {
                                className: "flex items-center justify-end space-x-1",
                                children: [v.jsxs(X, {
                                    variant: "inherit",
                                    align: "right",
                                    noWrap: !0,
                                    children: [v.jsx(V, {
                                        id: "+1Atxj"
                                    }), " ", s === ce.Buy ? _t ? gt(or(_t)) : "0" : W ? gt(ht(W)) : "0"]
                                }), v.jsx(X, {
                                    color: "text.secondary",
                                    component: "span",
                                    variant: "inherit",
                                    children: s === ce.Buy ? bn.symbol : r == null ? void 0 : r.market.token_symbol
                                })]
                            })]
                        }) : null
                    })]
                }), Ye && !ec(A, 0) ? v.jsxs(q, {
                    className: "flex items-center justify-between",
                    children: [v.jsx(X, {
                        className: "tracking-tight",
                        color: "text.secondary",
                        variant: "body2",
                        children: s === ce.Buy && !E.isNative ? v.jsx(V, {
                            id: "dzzTA7"
                        }) : v.jsx(V, {
                            id: "A/X5hS"
                        })
                    }), v.jsxs(X, {
                        variant: "body2",
                        children: [gt(Ye, 4), " ", E.isNative ? t.symbol : bn.symbol]
                    })]
                }) : null, v.jsx(it, {
                    variant: "contained",
                    color: s === ce.Buy ? "success" : "error",
                    fullWidth: !0,
                    onClick: Le,
                    size: "large",
                    disabled: kt,
                    children: Ar
                })]
            }) : v.jsx(q, {
                className: "flex",
                children: v.jsx(ky, {
                    fullWidth: !0
                })
            }), v.jsxs("div", {
                className: "flex items-center justify-between space-x-1 text-xs",
                children: [v.jsxs("label", {
                    className: "col-span-2",
                    children: [v.jsx(V, {
                        id: "29lDpG"
                    }), " ", o, "%"]
                }), v.jsxs("label", {
                    className: "col-span-2",
                    children: [v.jsx(V, {
                        id: "fJ8xC3"
                    }), " ", tc(Number(nc).toString(), rc), " SOL"]
                }), v.jsx("label", {
                    className: "flex justify-end",
                    children: v.jsx(hg, {
                        prio: tc(Number(nc).toString(), rc)
                    })
                })]
            })]
        })]
    })
}
function Jp() {
    const {isMatchMobile: e} = Ke()
      , [t,r] = C.useState(!1)
      , [n,i] = C.useState()
      , a = o => {
        r(!!o),
        i(o)
    }
    ;
    return e ? v.jsxs(q, {
        children: [t ? null : v.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [v.jsx(it, {
                onClick: () => a(ce.Buy),
                variant: "contained",
                size: "large",
                fullWidth: !0,
                color: "secondary",
                children: v.jsx(V, {
                    id: "qiOIiY"
                })
            }), v.jsx(it, {
                onClick: () => a(ce.Sell),
                variant: "contained",
                fullWidth: !0,
                size: "large",
                color: "secondary",
                children: v.jsx(V, {
                    id: "xNB0TS"
                })
            })]
        }), v.jsx(Rp, {
            open: t,
            onClose: () => a(""),
            children: v.jsx(q, {
                className: "space-y-3",
                children: v.jsx(fc, {
                    activeDirection: n || ce.Buy
                })
            })
        })]
    }) : v.jsx(fc, {})
}
const lb = ({onSelectToken: e, selectedToken: t, tokens: r, disabled: n=!1}) => {
    const [i,a] = C.useState(null)
      , o = l => {
        n || a(l.currentTarget)
    }
      , s = l => {
        e(l),
        a(null)
    }
    ;
    return v.jsxs(q, {
        children: [v.jsxs(q, {
            onClick: o,
            className: "flex items-center justify-end space-x-1 cursor-pointer",
            children: [t.isNative && v.jsx(Zi, {
                symbol: t.symbol,
                src: t.image_url,
                size: 20
            }), !t.isNative && v.jsx(Zi, {
                symbol: t.symbol,
                src: t.image_url,
                size: 20
            }), v.jsx("span", {
                children: t.symbol
            }), n ? null : v.jsx(My, {
                sx: {
                    fontSize: 16,
                    marginLeft: 0
                }
            })]
        }), v.jsx(Ny, {
            open: !!i,
            onClose: () => a(null),
            anchorEl: i,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right"
            },
            transformOrigin: {
                vertical: "top",
                horizontal: "right"
            },
            children: r.map(l => v.jsxs(Iy, {
                onClick: () => s(l),
                className: "flex items-center space-x-2",
                children: [v.jsx(Zi, {
                    symbol: l.symbol,
                    src: l.image_url,
                    size: 20
                }), v.jsx("span", {
                    className: "font-bold",
                    children: l.symbol
                })]
            }, l.address))
        })]
    })
}
  , ub = e => He(e, 0) ? "success" : He(0, e) ? "error" : "inherit";
function dc() {
    const {tokenMetadata: e} = Jt()
      , [t,r] = C.useState("5m")
      , n = u => {
        r(u)
    }
      , {solPrice: i} = eo()
      , a = _r()
      , o = C.useMemo( () => Ir(e.market_ticker[`tx_count_${t}`], e.market_ticker[`buy_tx_count_${t}`]), [t, e])
      , s = C.useMemo( () => Xe.isEmpty(e) ? 0 : At(En(e.market_ticker[`buy_tx_count_${t}`], e.market_ticker[`tx_count_${t}`]), 100), [e, t])
      , l = C.useMemo( () => {
        const u = Ir(e.market_ticker[`native_volume_${t}`], e.market_ticker[`buy_native_volume_${t}`]);
        return He(u, 0) ? u : 0
    }
    , [e, t]);
    return v.jsxs(q, {
        className: "px-4 sm:py-4",
        children: [v.jsx(ot, {
            sx: {
                borderStyle: "dashed",
                borderColor: Pe(a.palette.divider, .5)
            },
            className: "sm:block hidden"
        }), v.jsx(q, {
            className: "grid grid-cols-3 gap-2",
            children: ["5m", "1h", "24h"].map(u => v.jsx(cb, {
                className: `py-2 ${t === u ? "active" : ""}`,
                children: v.jsx(gn, {
                    label: u,
                    value: v.jsx(X, {
                        variant: "body2",
                        color: ub(e.market_ticker[`price_change_${u}`]),
                        children: mg(e.market_ticker[`price_change_${u}`])
                    }),
                    align: "center",
                    className: "cursor-pointer",
                    onClick: () => n(u)
                })
            }, u))
        }), v.jsx(ot, {
            sx: {
                borderStyle: "dashed",
                borderColor: Pe(a.palette.divider, .5)
            }
        }), v.jsxs(q, {
            className: "flex py-4 px-3 space-x-2",
            children: [v.jsx(gn, {
                label: v.jsx(V, {
                    id: "FS77M5"
                }),
                value: v.jsxs(X, {
                    color: "text.primary",
                    children: ["$", lr(At(e.market_ticker[`native_volume_${t}`], i), 2)]
                })
            }), v.jsxs(q, {
                className: "space-y-1",
                children: [v.jsxs(q, {
                    className: "flex items-center justify-end space-x-1 flex-1",
                    children: [v.jsx(ea, {
                        label: "B",
                        sx: {
                            backgroundColor: Pe(a.palette.success.main, .2),
                            color: a.palette.success.main,
                            height: 20,
                            width: 20,
                            borderRadius: "4px",
                            ".MuiChip-label": {
                                padding: "4px"
                            }
                        }
                    }), v.jsx(fb, {
                        variant: "determinate",
                        value: Number(s),
                        color: He(o, 0) ? "primary" : "secondary"
                    }), v.jsx(ea, {
                        label: "S",
                        sx: {
                            backgroundColor: Pe(a.palette.error.main, .2),
                            color: a.palette.error.main,
                            height: 20,
                            width: 20,
                            borderRadius: "4px",
                            ".MuiChip-label": {
                                padding: "4px"
                            }
                        }
                    })]
                }), v.jsxs(q, {
                    className: "flex justify-between items-center",
                    children: [v.jsxs(X, {
                        variant: "body2",
                        color: "text.secondary",
                        children: [v.jsx(X, {
                            color: "success",
                            className: "inline",
                            variant: "inherit",
                            children: e.market_ticker[`buy_tx_count_${t}`]
                        }), "/", v.jsxs(X, {
                            color: "text.primary",
                            className: "inline",
                            variant: "inherit",
                            children: ["$", lr(At(e.market_ticker[`buy_native_volume_${t}`], i), 2)]
                        })]
                    }), v.jsxs(X, {
                        variant: "body2",
                        color: "text.secondary",
                        children: [v.jsx(X, {
                            color: "error",
                            className: "inline",
                            variant: "inherit",
                            children: o
                        }), "/", v.jsxs(X, {
                            color: "text.primary",
                            className: "inline",
                            variant: "inherit",
                            children: ["$", lr(At(l, i), 2)]
                        })]
                    })]
                })]
            })]
        }), v.jsx(ot, {
            sx: {
                borderStyle: "dashed",
                borderColor: Pe(a.palette.divider, .5)
            }
        }), v.jsxs(q, {
            className: "flex justify-between py-3",
            children: [v.jsx(gn, {
                label: v.jsx(V, {
                    id: "5N3b5J"
                }),
                value: v.jsxs(X, {
                    fontWeight: 700,
                    children: ["$", lr(At(e.market_ticker.market_cap, i), 2)]
                })
            }), v.jsx(gn, {
                label: v.jsx(V, {
                    id: "CI4Km7"
                }),
                value: v.jsx(X, {
                    fontSize: 16,
                    fontWeight: 700,
                    children: gt(ws(e == null ? void 0 : e.market.holders, 1) ? Ir(e == null ? void 0 : e.market.holders, 1) : e == null ? void 0 : e.market.holders)
                })
            }), v.jsx(gn, {
                label: v.jsx(V, {
                    id: "3awOET"
                }),
                className: "flex-1",
                value: v.jsx(X, {
                    fontSize: 16,
                    fontWeight: 700,
                    children: e != null && e.market_ticker.rank ? e == null ? void 0 : e.market_ticker.rank : "-"
                })
            })]
        })]
    })
}
function Qp() {
    const {isMatchMobile: e} = Ke()
      , [t,r] = C.useState(!1);
    return e ? v.jsxs(q, {
        children: [v.jsx(q, {
            className: `flex justify-center ${t ? "rotate-180" : ""}`,
            onClick: () => r(!t),
            children: v.jsx(Dy, {})
        }), v.jsx(Ry, {
            open: t,
            onClose: () => r(!1),
            children: v.jsx(q, {
                className: "mb-10",
                children: v.jsx(dc, {})
            })
        })]
    }) : v.jsx(dc, {})
}
const cb = xt(q)`
  &.active {
    background: ${ ({theme: e}) => e.custom.cardBg};
  }
`
  , fb = xt(Vp)( ({theme: e}) => ({
    height: 5,
    borderRadius: 5,
    minWidth: 150,
    [`&.${Ko.colorPrimary}`]: {
        backgroundColor: e.palette.error.main
    },
    [`&.${Ko.colorSecondary}`]: {
        backgroundColor: e.custom.cardBg
    },
    [`& .${Ko.bar}`]: {
        backgroundColor: e.palette.success.main
    }
}));
function Es(e, t) {
    const r = Object.assign({}, e);
    for (const n in t)
        typeof e[n] != "object" || e[n] === null || Array.isArray(e[n]) ? t[n] !== void 0 && (r[n] = t[n]) : r[n] = Es(e[n], t[n]);
    return r
}
const db = {
    mobile: {
        disabled_features: ["left_toolbar", "header_widget", "timeframes_toolbar", "edit_buttons_in_legend", "context_menus", "control_bar", "border_around_the_chart"],
        enabled_features: []
    }
}
  , pb = {
    width: 800,
    height: 500,
    interval: "1D",
    timezone: "Etc/UTC",
    container: "",
    library_path: "",
    locale: "en",
    widgetbar: {
        details: !1,
        watchlist: !1,
        watchlist_settings: {
            default_symbols: []
        }
    },
    overrides: {
        "mainSeriesProperties.showCountdown": !1
    },
    studies_overrides: {},
    trading_customization: {
        position: {},
        order: {}
    },
    brokerConfig: {
        configFlags: {}
    },
    fullscreen: !1,
    autosize: !1,
    disabled_features: [],
    enabled_features: [],
    debug: !1,
    logo: {},
    time_frames: [{
        text: "5y",
        resolution: "1W"
    }, {
        text: "1y",
        resolution: "1W"
    }, {
        text: "6m",
        resolution: "120"
    }, {
        text: "3m",
        resolution: "60"
    }, {
        text: "1m",
        resolution: "30"
    }, {
        text: "5d",
        resolution: "5"
    }, {
        text: "1d",
        resolution: "1"
    }],
    client_id: "0",
    user_id: "0",
    charts_storage_api_version: "1.0",
    favorites: {
        intervals: [],
        chartTypes: []
    }
};
function hb() {
    return "CL v20.031 (internal id a88da32b @ 2021-10-11T10:22:03.968Z)"
}
const mb = class {
    constructor(e) {
        if (this._id = `tradingview_${(1048576 * (1 + Math.random()) | 0).toString(16).substring(1)}`,
        this._ready = !1,
        this._readyHandlers = [],
        this._onWindowResize = this._autoResizeChart.bind(this),
        !e.datafeed)
            throw new Error("Datafeed is not defined");
        if (this._options = Es(pb, e),
        e.preset) {
            const t = db[e.preset];
            t && (this._options.disabled_features !== void 0 ? this._options.disabled_features = this._options.disabled_features.concat(t.disabled_features) : this._options.disabled_features = t.disabled_features,
            this._options.enabled_features !== void 0 ? this._options.enabled_features = this._options.enabled_features.concat(t.enabled_features) : this._options.enabled_features = t.enabled_features)
        }
        this._options.theme === "Dark" && this._options.loading_screen === void 0 && (this._options.loading_screen = {
            backgroundColor: "#131722"
        }),
        this._create()
    }
    onChartReady(e) {
        this._ready ? e.call(this) : this._readyHandlers.push(e)
    }
    headerReady() {
        return this._innerWindowLoaded.then( () => this._innerWindow().headerReady())
    }
    onGrayedObjectClicked(e) {
        this._innerAPI().onGrayedObjectClicked(e)
    }
    onShortcut(e, t) {
        this._innerWindow().createShortcutAction(e, t)
    }
    subscribe(e, t) {
        this._innerAPI().subscribe(e, t)
    }
    unsubscribe(e, t) {
        this._innerAPI().unsubscribe(e, t)
    }
    chart(e) {
        return this._innerAPI().chart(e)
    }
    getLanguage() {
        return this._options.locale
    }
    setSymbol(e, t, r) {
        this._innerAPI().changeSymbol(e, t, r)
    }
    remove() {
        window.removeEventListener("resize", this._onWindowResize),
        this._readyHandlers.splice(0, this._readyHandlers.length),
        delete window[this._id],
        this._iFrame.parentNode && this._iFrame.parentNode.removeChild(this._iFrame)
    }
    closePopupsAndDialogs() {
        this._innerAPI().closePopupsAndDialogs()
    }
    selectLineTool(e) {
        this._innerAPI().selectLineTool(e)
    }
    selectedLineTool() {
        return this._innerAPI().selectedLineTool()
    }
    save(e) {
        this._innerAPI().saveChart(e)
    }
    load(e, t) {
        this._innerAPI().loadChart({
            json: e,
            extendedData: t
        })
    }
    getSavedCharts(e) {
        this._innerAPI().getSavedCharts(e)
    }
    loadChartFromServer(e) {
        this._innerAPI().loadChartFromServer(e)
    }
    saveChartToServer(e, t, r) {
        this._innerAPI().saveChartToServer(e, t, r)
    }
    removeChartFromServer(e, t) {
        this._innerAPI().removeChartFromServer(e, t)
    }
    onContextMenu(e) {
        this._innerAPI().onContextMenu(e)
    }
    createButton(e) {
        return this._innerWindow().createButton(e)
    }
    showNoticeDialog(e) {
        this._innerAPI().showNoticeDialog(e)
    }
    showConfirmDialog(e) {
        this._innerAPI().showConfirmDialog(e)
    }
    showLoadChartDialog() {
        this._innerAPI().showLoadChartDialog()
    }
    showSaveAsChartDialog() {
        this._innerAPI().showSaveAsChartDialog()
    }
    symbolInterval() {
        return this._innerAPI().getSymbolInterval()
    }
    mainSeriesPriceFormatter() {
        return this._innerAPI().mainSeriesPriceFormatter()
    }
    getIntervals() {
        return this._innerAPI().getIntervals()
    }
    getStudiesList() {
        return this._innerAPI().getStudiesList()
    }
    addCustomCSSFile(e) {
        this._innerWindow().addCustomCSSFile(e)
    }
    applyOverrides(e) {
        this._options = Es(this._options, {
            overrides: e
        }),
        this._innerWindow().applyOverrides(e)
    }
    applyStudiesOverrides(e) {
        this._innerWindow().applyStudiesOverrides(e)
    }
    watchList() {
        return this._innerAPI().watchlist()
    }
    activeChart() {
        return this._innerAPI().activeChart()
    }
    chartsCount() {
        return this._innerAPI().chartsCount()
    }
    layout() {
        return this._innerAPI().layout()
    }
    setLayout(e) {
        this._innerAPI().setLayout(e)
    }
    layoutName() {
        return this._innerAPI().layoutName()
    }
    changeTheme(e, t) {
        this._innerWindow().changeTheme(e, t)
    }
    getTheme() {
        return this._innerWindow().getTheme()
    }
    takeScreenshot() {
        this._innerAPI().takeScreenshot()
    }
    lockAllDrawingTools() {
        return this._innerAPI().lockAllDrawingTools()
    }
    hideAllDrawingTools() {
        return this._innerAPI().hideAllDrawingTools()
    }
    drawOnAllCharts(e) {
        this._innerAPI().drawOnAllCharts(e)
    }
    magnetEnabled() {
        return this._innerAPI().magnetEnabled()
    }
    magnetMode() {
        return this._innerAPI().magnetMode()
    }
    undoRedoState() {
        return this._innerAPI().undoRedoState()
    }
    setIntervalLinkingEnabled(e) {
        this._innerAPI().setIntervalLinkingEnabled(e)
    }
    setTimeFrame(e) {
        this._innerAPI().setTimeFrame(e)
    }
    symbolSync() {
        return this._innerAPI().symbolSync()
    }
    intervalSync() {
        return this._innerAPI().intervalSync()
    }
    crosshairSync() {
        return this._innerAPI().crosshairSync()
    }
    timeSync() {
        return this._innerAPI().timeSync()
    }
    getAllFeatures() {
        return this._innerWindow().getAllFeatures()
    }
    clearUndoHistory() {
        return this._innerAPI().clearUndoHistory()
    }
    undo() {
        return this._innerAPI().undo()
    }
    redo() {
        return this._innerAPI().redo()
    }
    startFullscreen() {
        this._innerAPI().startFullscreen()
    }
    exitFullscreen() {
        this._innerAPI().exitFullscreen()
    }
    takeClientScreenshot(e) {
        return this._innerAPI().takeClientScreenshot(e)
    }
    _innerAPI() {
        return this._innerWindow().tradingViewApi
    }
    _innerWindow() {
        return this._iFrame.contentWindow
    }
    _autoResizeChart() {
        this._options.fullscreen && (this._iFrame.style.height = window.innerHeight + "px")
    }
    _create() {
        const e = this._render();
        this._options.container_id;
        const t = this._options.container_id || this._options.container
          , r = typeof t == "string" ? document.getElementById(t) : t;
        if (r === null)
            throw new Error(`There is no such element - #${this._options.container}`);
        r.innerHTML = e,
        this._iFrame = r.querySelector(`#${this._id}`);
        const n = this._iFrame;
        (this._options.autosize || this._options.fullscreen) && (n.style.width = "100%",
        this._options.fullscreen || (n.style.height = "100%")),
        window.addEventListener("resize", this._onWindowResize),
        this._onWindowResize(),
        this._innerWindowLoaded = new Promise(i => {
            const a = () => {
                n.removeEventListener("load", a, !1),
                i()
            }
            ;
            n.addEventListener("load", a, !1)
        }
        ),
        this._innerWindowLoaded.then( () => {
            this._innerWindow().widgetReady( () => {
                this._ready = !0;
                for (const i of this._readyHandlers)
                    try {
                        i.call(this)
                    } catch {}
                this._innerWindow().initializationFinished()
            }
            )
        }
        )
    }
    _render() {
        const e = window;
        if (e[this._id] = {
            datafeed: this._options.datafeed,
            customFormatters: this._options.custom_formatters || this._options.customFormatters,
            brokerFactory: this._options.broker_factory || this._options.brokerFactory,
            overrides: this._options.overrides,
            studiesOverrides: this._options.studies_overrides,
            tradingCustomization: this._options.trading_customization,
            disabledFeatures: this._options.disabled_features,
            enabledFeatures: this._options.enabled_features,
            brokerConfig: this._options.broker_config || this._options.brokerConfig,
            restConfig: this._options.restConfig,
            favorites: this._options.favorites,
            logo: this._options.logo,
            numeric_formatting: this._options.numeric_formatting,
            rss_news_feed: this._options.rss_news_feed,
            newsProvider: this._options.news_provider,
            loadLastChart: this._options.load_last_chart,
            saveLoadAdapter: this._options.save_load_adapter,
            loading_screen: this._options.loading_screen,
            settingsAdapter: this._options.settings_adapter,
            getCustomIndicators: this._options.custom_indicators_getter,
            additionalSymbolInfoFields: this._options.additional_symbol_info_fields,
            headerWidgetButtonsMode: this._options.header_widget_buttons_mode
        },
        this._options.saved_data)
            e[this._id].chartContent = {
                json: this._options.saved_data
            },
            this._options.saved_data_meta_info && (e[this._id].chartContentExtendedData = this._options.saved_data_meta_info);
        else if (!this._options.load_last_chart && !this._options.symbol)
            throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");
        const t = (this._options.library_path || "") + `${encodeURIComponent(this._options.locale)}-tv-chart.a88da32b.html#symbol=` + encodeURIComponent(this._options.symbol || "") + "&interval=" + encodeURIComponent(this._options.interval) + (this._options.timeframe ? "&timeframe=" + encodeURIComponent(this._options.timeframe) : "") + (this._options.toolbar_bg ? "&toolbarbg=" + encodeURIComponent(this._options.toolbar_bg.replace("#", "")) : "") + (this._options.studies_access ? "&studiesAccess=" + encodeURIComponent(JSON.stringify(this._options.studies_access)) : "") + "&widgetbar=" + encodeURIComponent(JSON.stringify(this._options.widgetbar)) + (this._options.drawings_access ? "&drawingsAccess=" + encodeURIComponent(JSON.stringify(this._options.drawings_access)) : "") + "&timeFrames=" + encodeURIComponent(JSON.stringify(this._options.time_frames)) + "&locale=" + encodeURIComponent(this._options.locale) + "&uid=" + encodeURIComponent(this._id) + "&clientId=" + encodeURIComponent(String(this._options.client_id)) + "&userId=" + encodeURIComponent(String(this._options.user_id)) + (this._options.charts_storage_url ? "&chartsStorageUrl=" + encodeURIComponent(this._options.charts_storage_url) : "") + (this._options.charts_storage_api_version ? "&chartsStorageVer=" + encodeURIComponent(this._options.charts_storage_api_version) : "") + (this._options.custom_css_url ? "&customCSS=" + encodeURIComponent(this._options.custom_css_url) : "") + (this._options.auto_save_delay ? "&autoSaveDelay=" + encodeURIComponent(String(this._options.auto_save_delay)) : "") + "&debug=" + encodeURIComponent(String(this._options.debug)) + (this._options.snapshot_url ? "&snapshotUrl=" + encodeURIComponent(this._options.snapshot_url) : "") + (this._options.timezone ? "&timezone=" + encodeURIComponent(this._options.timezone) : "") + (this._options.study_count_limit ? "&studyCountLimit=" + encodeURIComponent(String(this._options.study_count_limit)) : "") + (this._options.symbol_search_request_delay ? "&ssreqdelay=" + encodeURIComponent(String(this._options.symbol_search_request_delay)) : "") + (this._options.compare_symbols ? "&compareSymbols=" + encodeURIComponent(JSON.stringify(this._options.compare_symbols)) : "") + (this._options.theme ? "&theme=" + encodeURIComponent(String(this._options.theme)) : "") + (this._options.header_widget_buttons_mode ? "&header_widget_buttons_mode=" + encodeURIComponent(String(this._options.header_widget_buttons_mode)) : "") + (this._options.time_scale ? "&time_scale=" + encodeURIComponent(JSON.stringify(this._options.time_scale)) : "");
        return '<iframe id="' + this._id + '" name="' + this._id + '"  src="' + t + '"' + (this._options.autosize || this._options.fullscreen ? "" : ' width="' + this._options.width + '" height="' + this._options.height + '"') + ' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'
    }
}
;
window.TradingView = window.TradingView || {},
window.TradingView.version = hb;
const pc = {};
function Di(e, {isCap: t=!1, isUSD: r=!1}) {
    return {
        history: pc,
        resolveSymbol: function(n) {
            const i = `${e}symbols?${Vo.stringify({
                symbol: n
            })}`;
            return n.split("-")[1],
            Ii.get(i).then(a => ({
                ...a.data
            }))
        },
        getBars: function(n, i, a, o, s, l) {
            const u = {
                symbol: n.ticker,
                resolution: i,
                from: a,
                to: o,
                countback: l
            }
              , {pricescale: f} = n
              , c = Qi.get(_s)
              , d = `${e}${t ? "cap/" : ""}history?${Vo.stringify(u)}`;
            return Ii.get(d).then(p => {
                if (p.Response && p.Response === "Error")
                    return [];
                if (p.data) {
                    const {t: g, o: b, c: _, v: w, l: S, h: y, s: x} = p.data;
                    if (x === "no_data")
                        return [];
                    var h = g.map( (O, P) => {
                        let A;
                        return r ? A = {
                            time: O * 1e3,
                            low: Number(S[P]) * Number(c),
                            high: Number(y[P]) * Number(c),
                            open: Number(b[P]) * Number(c),
                            close: Number(_[P]) * Number(c),
                            volume: Number(w[P])
                        } : A = {
                            time: O * 1e3,
                            low: Number(S[P]),
                            high: Number(y[P]),
                            open: Number(b[P]),
                            close: Number(_[P]),
                            volume: Number(w[P])
                        },
                        A
                    }
                    );
                    if (s) {
                        var m = h[h.length - 1];
                        pc[n.ticker] = {
                            lastBar: m,
                            symbolInfo: {
                                ...n,
                                pericesion: f
                            },
                            resolution: i
                        }
                    }
                    return h
                } else
                    return []
            }
            )
        },
        updateBar: function(n, i) {
            const a = {
                symbol: n.ticker,
                resolution: i,
                from: yr().subtract(10, "seconds").unix(),
                to: yr().unix(),
                countback: 2
            }
              , o = `${e}history?${Vo.stringify(a)}`;
            return Ii.get(o).then(s => {
                const {t: l, o: u, c: f, v: c, l: d, h: p, s: h} = s.data;
                if (h === "no_data")
                    return {};
                const {pricescale: m} = n
                  , g = Qi.get(_s);
                return l.map( (_, w) => {
                    let S;
                    return r ? S = {
                        time: _ * 1e3,
                        low: Number(d[w]) * Number(g),
                        high: Number(p[w]) * Number(g),
                        open: Number(u[w]) * Number(g),
                        close: Number(f[w]) * Number(g),
                        volume: Number(c[w])
                    } : S = {
                        time: _ * 1e3,
                        low: Number(d[w]),
                        high: Number(p[w]),
                        open: Number(u[w]),
                        close: Number(f[w]),
                        volume: Number(c[w])
                    },
                    S
                }
                )
            }
            )
        },
        getTime() {
            const n = `${e}time`;
            return Ii.get(n).then(i => i.data)
        }
    }
}
var Go = [];
const hc = {
    subscribeBars: function(e, t, r, n, i, a, o, s) {
        const {pricescale: l, isUSD: u} = s;
        var c = {
            channelString: `${e.ticker}-${t}`,
            uid: n,
            resolution: t,
            symbolInfo: e,
            lastBar: a,
            listener: r
        };
        i(),
        window.removeEventListener(ic, window.stream),
        window.stream = () => {
            const d = Qi.get(By)
              , p = Qi.get(_s);
            if (d.ticker === e.ticker) {
                const m = {
                    open: u ? Number(d.o) * Number(p) : d.o,
                    high: u ? Number(d.h) * Number(p) : d.h,
                    low: u ? Number(d.l) * Number(p) : d.l,
                    close: u ? Number(d.c) * Number(p) : d.c,
                    volume: Number(d.token_vol),
                    time: d.ts * 1e3
                };
                var h = vb({
                    open: Number(d.o),
                    high: Number(d.h),
                    low: Number(d.l),
                    close: Number(d.c),
                    volume: Number(d.token_vol),
                    time: d.ts * 1e3
                }, c);
                r(m),
                c.lastBar = h,
                Go.push(c)
            }
        }
        ,
        window.addEventListener(ic, window.stream)
    },
    unsubscribeBars: function(e) {
        var t = Go.findIndex(r => r.uid === e);
        t !== -1 && Go.splice(t, 1)
    }
};
function vb(e, t) {
    var r = t.lastBar;
    let n = t.resolution;
    n.includes("D") ? n = 1440 : n.includes("W") && (n = 10080);
    var i = n * 60, a = Math.floor(e.time / i) * i, o = r.time, s;
    return a > o ? (s = {
        time: a,
        open: r.close,
        high: r.close,
        low: r.close,
        close: e.close,
        volume: e.volume
    },
    s) : (e.close < r.low ? r.low = e.close : e.close > r.high && (r.high = e.close),
    r.volume = Number(e.volume),
    r.close = e.close,
    s = r,
    s)
}
const yb = ["1S", "15S", "30S", "1", "5", "15", "30", "60", "240", "1D"]
  , gb = {
    supports_search: !0,
    supports_group_request: !1,
    supported_resolutions: yb,
    supports_marks: !1,
    supports_time: !0
}
  , bb = (e, t) => ({
    onReady: r => {
        setTimeout( () => r(gb))
    }
    ,
    searchSymbols: (r, n, i, a) => {}
    ,
    resolveSymbol: (r, n, i) => {
        Di(e, t).resolveSymbol(r, n, i).then(a => {
            const {pricescale: o} = t;
            n({
                ...a,
                type: "crypto",
                volume_precision: 2,
                data_status: "streaming",
                has_seconds: !0,
                pricescale: new ge(10).pow(o).toNumber()
            })
        }
        )
    }
    ,
    getBars: function(r, n, i, a, o) {
        const {from: s, to: l, countBack: u, firstDataRequest: f} = i
          , c = l > yr().unix() ? yr().unix() : l
          , d = u > 2e3 ? 2e3 : u;
        Di(e, t).getBars(r, n, s, c, f, d).then(p => {
            p.length ? a(p, {
                noData: !1
            }) : a(p, {
                noData: !0
            })
        }
        ).catch(p => {
            o(p)
        }
        )
    },
    subscribeBars: (r, n, i, a, o) => {
        hc.subscribeBars(r, n, i, a, o, Di(e, t).history[r.ticker].lastBar, e, t)
    }
    ,
    unsubscribeBars: r => {
        hc.unsubscribeBars(r)
    }
    ,
    getServerTime: r => {
        Di(e, t).getTime().then(n => {
            r(n.data.server_time_unix)
        }
        )
    }
});
function mc(e) {
    return {
        "paneProperties.background": e.palette.background.paper,
        "paneProperties.backgroundGradientStartColor": e.palette.background.paper,
        "paneProperties.backgroundGradientEndColor": e.palette.background.paper,
        "scalesProperties.backgroundColor": e.palette.background.paper,
        volumePaneSize: "tiny",
        "paneProperties.crossHairProperties.width": 0,
        "mainSeriesProperties.candleStyle.upColor": e.palette.success.main,
        "mainSeriesProperties.candleStyle.downColor": e.palette.error.main,
        "mainSeriesProperties.candleStyle.wickUpColor": e.palette.success.main,
        "mainSeriesProperties.candleStyle.wickDownColor": e.palette.error.main,
        "mainSeriesProperties.candleStyle.borderUpColor": e.palette.success.main,
        "mainSeriesProperties.candleStyle.borderDownColor": e.palette.error.main,
        "mainSeriesProperties.hollowCandleStyle.upColor": e.palette.success.main,
        "mainSeriesProperties.hollowCandleStyle.downColor": e.palette.error.main,
        "mainSeriesProperties.hollowCandleStyle.wickUpColor": e.palette.success.main,
        "mainSeriesProperties.hollowCandleStyle.wickDownColor": e.palette.error.main,
        "mainSeriesProperties.hollowCandleStyle.borderUpColor": e.palette.success.main,
        "mainSeriesProperties.hollowCandleStyle.borderDownColor": e.palette.error.main,
        "mainSeriesProperties.haStyle.upColor": e.palette.success.main,
        "mainSeriesProperties.haStyle.downColor": e.palette.error.main,
        "mainSeriesProperties.haStyle.wickUpColor": e.palette.success.main,
        "mainSeriesProperties.haStyle.wickDownColor": e.palette.error.main,
        "mainSeriesProperties.haStyle.borderUpColor": e.palette.success.main,
        "mainSeriesProperties.baselineStyle.topFillColor1": Pe(e.palette.success.main, .28),
        "mainSeriesProperties.baselineStyle.topFillColor2": Pe(e.palette.success.main, .05),
        "mainSeriesProperties.baselineStyle.bottomFillColor1": Pe(e.palette.error.main, .05),
        "mainSeriesProperties.baselineStyle.bottomFillColor2": Pe(e.palette.error.main, .28),
        "mainSeriesProperties.baselineStyle.topLineColor": e.palette.success.main,
        "mainSeriesProperties.baselineStyle.bottomLineColor": e.palette.error.main
    }
}
const xb = {
    en: "en",
    ja: "ja",
    ko: "ko",
    fr: "fr",
    de: "de",
    "zh-HK": "zh_TW",
    "zh-CN": "zh",
    vn: "vi",
    portuguese: "pt",
    arabic: "ar",
    turkish: "tr",
    filipino: "en",
    spanish: "es",
    thai: "th"
};
class su extends C.PureComponent {
    constructor() {
        super(...arguments);
        Ni(this, "tvWidget", null);
        Ni(this, "datafeed", null)
    }
    componentDidUpdate(r, n) {
        var i;
        this.tvWidget && this.props.symbol && this.props.symbol !== r.symbol && this.rerenderTv(this.props),
        (i = this.tvWidget) != null && i._ready && this.props.theme && this.props.themes && this.props.theme !== r.theme && new Promise( (a, o) => a(this.tvWidget.changeTheme(this.props.theme === "dark" ? "Dark" : "Light"))).then(a => {
            var o;
            (o = this.tvWidget) == null || o.applyOverrides({
                ...mc(this.props.themes),
                "mainSeriesProperties.minTick": `${new ge(10).pow(this.props.pricescale - 1).toNumber()}, 1, true`
            })
        }
        ),
        this.props.pricescale !== r.pricescale && this.rerenderTv(this.props),
        this.props.locale !== r.locale && this.rerenderTv(this.props),
        this.props.isCap !== r.isCap && this.rerenderTv(this.props),
        this.props.isUSD !== r.isUSD && this.rerenderTv(this.props)
    }
    rerenderTv(r) {
        var o, s;
        const n = (s = (o = yr) == null ? void 0 : o.tz) == null ? void 0 : s.guess()
          , i = {
            symbol: this.props.symbol,
            datafeed: bb(this.props.baseUrl, {
                pricescale: this.props.pricescale,
                pericesion: this.props.pricescale,
                isCap: r.isCap,
                isUSD: r.isUSD
            }),
            debug: !1,
            interval: this.props.interval,
            container: "tv_chart_container",
            library_path: this.props.libraryPath,
            fullscreen: this.props.fullscreen,
            studies_overrides: this.props.studiesOverrides,
            height: this.props.height || 460,
            autoSize: !0,
            theme: this.props.theme === "dark" ? "Dark" : "Light",
            width: this.props.width || "100%",
            custom_css_url: "/tv.css",
            timezone: n,
            favorites: {
                intervals: this.props.isMatchMobile ? [] : ["1S", "15S", "30S", "1", "5", "15", "30", "60", "240", "1D"]
            },
            locale: xb[this.props.locale || "en"],
            disabled_features: ["left_toolbar", "header_symbol_search", "symbol_search_hot_key", "header_compare", "header_undo_redo", "go_to_date", "timeframes_toolbar", "header_saveload", "context_menus.legend_context_menu", "hide_last_na_study_output", "header_screenshot", "create_volume_indicator_by_default", "main_series_scale_menu", "save_chart_properties_to_local_storage", "move_logo_to_main_pane", "hide_unresolved_symbols_in_legend", "chart_property_page_background", "custom_resolutions", this.props.isMatchMobile ? "header_fullscreen_button" : ""].filter(l => l),
            enabled_features: ["adaptive_logo", "header_screenshot", "hide_left_toolbar_by_default", "seconds_resolution"],
            custom_formatters: {
                priceFormatterFactory: (l, u) => l === null ? null : l.format === "volume" ? {
                    format: (f, c) => f >= 1e9 ? `${(f / 1e9).toFixed(3)}B` : f >= 1e6 ? `${(f / 1e6).toFixed(3)}M` : f >= 1e3 ? `${(f / 1e3).toFixed(3)}K` : f.toFixed(2)
                } : null
            },
            loading_screen: {
                backgroundColor: window.innerWidth > 768 ? this.props.themes.palette.background.default : this.props.themes.palette.background.default,
                foregroundColor: window.innerWidth > 768 ? this.props.themes.palette.background.default : this.props.themes.palette.background.default
            }
        }
          , a = new mb(i);
        a.headerReady().then(function() {
            const l = a.createButton();
            l.innerHTML = "<span>Price</span>/<span>MCap</span>",
            l.childNodes[0].style = `
					color: ${r.isCap ? "inherit" : r.themes.palette.primary.main};
					font-weight:	${r.isCap ? 400 : 700};
				`,
            l.childNodes[2].style = `
					color: ${r.isCap ? r.themes.palette.primary.main : "inherit"};
					font-weight:	${r.isCap ? 400 : 700};
				`,
            l.childNodes[0].addEventListener("click", function(f) {
                r.onChangeType("price")
            }),
            l.childNodes[2].addEventListener("click", function(f) {
                r.onChangeType("marketCap")
            });
            const u = a.createButton();
            u.innerHTML = "<span>USD</span>/<span>SOL</span>",
            u.childNodes[0].style = `
					color: ${r.isUSD ? r.themes.palette.primary.main : "inherit"};
					font-weight:	${r.isUSD ? 400 : 700};
				`,
            u.childNodes[2].style = `
					color: ${r.isUSD ? "inherit" : r.themes.palette.primary.main};
					font-weight:	${r.isUSD ? 400 : 700};
				`,
            u.childNodes[0].addEventListener("click", function(f) {
                r.onChangeUnit("USD")
            }),
            u.childNodes[2].addEventListener("click", function(f) {
                r.onChangeUnit("SOL")
            })
        }),
        a.onChartReady( () => {
            a == null || a.applyOverrides({
                ...mc(this.props.themes),
                "mainSeriesProperties.minTick": `${new ge(10).pow(this.props.pricescale > 16 ? 16 : this.props.pricescale).toString()}, 1, true`
            }),
            a == null || a.applyStudiesOverrides({
                "volume.precision": this.props.pricescale > 6 ? 4 : 2,
                "volume.volume.color.0": this.props.themes.palette.error.main,
                "volume.volume.color.1": this.props.themes.palette.success.main,
                "volume.volume ma.color": this.props.themes.palette.primary.main
            }),
            a.activeChart().dataReady(async () => {
                var l;
                this.props.isMatchMobile || (await a.activeChart().createStudy("Volume", !1, !1),
                (l = a.activeChart().getPanes()[1]) == null || l.setHeight(60))
            }
            ),
            a.activeChart().setTimezone(n),
            a.activeChart().onIntervalChanged().subscribe(null, (l, u) => {
                this.props.onChangeInterval(l)
            }
            )
        }
        ),
        this.tvWidget = a
    }
    componentDidMount() {
        this.rerenderTv(this.props)
    }
    componentWillUnmount() {
        this.tvWidget !== null && (this.tvWidget.remove(),
        this.tvWidget = null)
    }
    render() {
        return v.jsx("div", {
            id: "tv_chart_container",
            className: "TVChartContainer"
        })
    }
}
Ni(su, "defaultProps", {
    symbol: "AAPL",
    interval: "15",
    containerId: "tv_chart_container",
    libraryPath: "/charting_library/",
    fullscreen: !1,
    autosize: !0,
    studiesOverrides: {}
});
su.propTypes = {
    baseUrl: Z.string,
    name: Z.string,
    symbol: Z.string,
    interval: Z.string,
    containerId: Z.string,
    datafeedUrl: Z.string,
    libraryPath: Z.string,
    fullscreen: Z.bool,
    autosize: Z.bool,
    studiesOverrides: Z.object,
    enabled_features: Z.array,
    theme: Z.string,
    themes: Z.object,
    pricescale: Z.number,
    timezone: Z.string,
    isMatchMobile: Z.bool,
    locale: Z.string,
    onChangeInterval: Z.func,
    onChangeSymbol: Z.func,
    onChangeType: Z.func,
    socket: Z.object
};
const wb = Ly()(Uy(e => ({
    resolution: "1",
    updateResolution: t => e(r => ({
        resolution: t
    })),
    priceUnit: Up.USD,
    setPriceUnit: t => e(r => ({
        priceUnit: t
    })),
    priceType: Cn.Price,
    setPriceType: t => e(r => ({
        priceType: t
    }))
}), {
    name: "ticker"
}));
function _b() {
    const {ticker: e=""} = Ip()
      , {theme: t, activeLocale: r} = Bp()
      , n = _r()
      , {resolution: i, updateResolution: a, priceUnit: o, priceType: s, setPriceUnit: l, setPriceType: u} = wb()
      , {token: f, tokenMetadata: c} = Jt()
      , {subscribeTickerCandle: d, unsubscribeTickerCandle: p, socket: h, readyState: m} = Np()
      , g = y => {
        a(y)
    }
    ;
    C.useEffect( () => {
        if (!(!i || !e || m !== 1))
            return d({
                type: s === Cn.MarketCap ? Kt.CAP_CANDLE : Kt.Candle,
                symbol: e,
                resolution: i
            }),
            () => {
                p({
                    type: s === Cn.MarketCap ? Kt.CAP_CANDLE : Kt.Candle,
                    symbol: e,
                    resolution: i
                })
            }
    }
    , [i, e, m, s]);
    const b = C.useMemo( () => s === Cn.Price ? 10 : 2, [s, c])
      , _ = y => {
        u(y)
    }
      , w = y => {
        l(y)
    }
      , {isMatchMobile: S} = Ke();
    return v.jsx("div", {
        className: "px-3",
        children: v.jsx(su, {
            symbol: `${f == null ? void 0 : f.symbol}`,
            theme: t,
            themes: n,
            baseUrl: "https://api.super.exchange/v1/udf/",
            isCap: s === Cn.MarketCap,
            isUSD: o === Up.USD,
            isMatchMobile: S,
            height: S ? 320 : 460,
            pricescale: b,
            locale: r,
            interval: i,
            onChangeInterval: g,
            onChangeType: _,
            onChangeUnit: w
        })
    })
}
function Sb(e) {
    return e == null
}
var Ob = Sb;
const ue = ke(Ob);
var Pb = ro
  , Ab = Si
  , jb = to
  , $b = "[object String]";
function Cb(e) {
    return typeof e == "string" || !Ab(e) && jb(e) && Pb(e) == $b
}
var Tb = Cb;
const Ai = ke(Tb);
var eh = {
    exports: {}
}
  , de = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lu = Symbol.for("react.element"), uu = Symbol.for("react.portal"), io = Symbol.for("react.fragment"), ao = Symbol.for("react.strict_mode"), oo = Symbol.for("react.profiler"), so = Symbol.for("react.provider"), lo = Symbol.for("react.context"), Eb = Symbol.for("react.server_context"), uo = Symbol.for("react.forward_ref"), co = Symbol.for("react.suspense"), fo = Symbol.for("react.suspense_list"), po = Symbol.for("react.memo"), ho = Symbol.for("react.lazy"), kb = Symbol.for("react.offscreen"), th;
th = Symbol.for("react.module.reference");
function ut(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case lu:
            switch (e = e.type,
            e) {
            case io:
            case oo:
            case ao:
            case co:
            case fo:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case Eb:
                case lo:
                case uo:
                case ho:
                case po:
                case so:
                    return e;
                default:
                    return t
                }
            }
        case uu:
            return t
        }
    }
}
de.ContextConsumer = lo;
de.ContextProvider = so;
de.Element = lu;
de.ForwardRef = uo;
de.Fragment = io;
de.Lazy = ho;
de.Memo = po;
de.Portal = uu;
de.Profiler = oo;
de.StrictMode = ao;
de.Suspense = co;
de.SuspenseList = fo;
de.isAsyncMode = function() {
    return !1
}
;
de.isConcurrentMode = function() {
    return !1
}
;
de.isContextConsumer = function(e) {
    return ut(e) === lo
}
;
de.isContextProvider = function(e) {
    return ut(e) === so
}
;
de.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === lu
}
;
de.isForwardRef = function(e) {
    return ut(e) === uo
}
;
de.isFragment = function(e) {
    return ut(e) === io
}
;
de.isLazy = function(e) {
    return ut(e) === ho
}
;
de.isMemo = function(e) {
    return ut(e) === po
}
;
de.isPortal = function(e) {
    return ut(e) === uu
}
;
de.isProfiler = function(e) {
    return ut(e) === oo
}
;
de.isStrictMode = function(e) {
    return ut(e) === ao
}
;
de.isSuspense = function(e) {
    return ut(e) === co
}
;
de.isSuspenseList = function(e) {
    return ut(e) === fo
}
;
de.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === io || e === oo || e === ao || e === co || e === fo || e === kb || typeof e == "object" && e !== null && (e.$$typeof === ho || e.$$typeof === po || e.$$typeof === so || e.$$typeof === lo || e.$$typeof === uo || e.$$typeof === th || e.getModuleId !== void 0)
}
;
de.typeOf = ut;
eh.exports = de;
var Mb = eh.exports
  , Nb = ro
  , Ib = to
  , Db = "[object Number]";
function Rb(e) {
    return typeof e == "number" || Ib(e) && Nb(e) == Db
}
var rh = Rb;
const Bb = ke(rh);
var Lb = rh;
function Ub(e) {
    return Lb(e) && e != +e
}
var Wb = Ub;
const fn = ke(Wb);
var yt = function(t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1
}
  , ur = function(t) {
    return Ai(t) && t.indexOf("%") === t.length - 1
}
  , F = function(t) {
    return Bb(t) && !fn(t)
}
  , Ee = function(t) {
    return F(t) || Ai(t)
}
  , zb = 0
  , ji = function(t) {
    var r = ++zb;
    return "".concat(t || "").concat(r)
}
  , br = function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0
      , i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!F(t) && !Ai(t))
        return n;
    var a;
    if (ur(t)) {
        var o = t.indexOf("%");
        a = r * parseFloat(t.slice(0, o)) / 100
    } else
        a = +t;
    return fn(a) && (a = n),
    i && a > r && (a = r),
    a
}
  , Er = function(t) {
    if (!t)
        return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null
}
  , Fb = function(t) {
    if (!Array.isArray(t))
        return !1;
    for (var r = t.length, n = {}, i = 0; i < r; i++)
        if (!n[t[i]])
            n[t[i]] = !0;
        else
            return !0;
    return !1
}
  , nt = function(t, r) {
    return F(t) && F(r) ? function(n) {
        return t + n * (r - t)
    }
    : function() {
        return r
    }
};
function ra(e, t, r) {
    return !e || !e.length ? null : e.find(function(n) {
        return n && (typeof t == "function" ? t(n) : st(n, t)) === r
    })
}
function Dr(e, t) {
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
            return !1;
    for (var n in t)
        if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
            return !1;
    return !0
}
function ks(e) {
    "@babel/helpers - typeof";
    return ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ks(e)
}
var qb = ["viewBox", "children"]
  , Hb = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"]
  , vc = ["points", "pathLength"]
  , Yo = {
    svg: qb,
    polygon: vc,
    polyline: vc
}
  , cu = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"]
  , na = function(t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean")
        return null;
    var n = t;
    if (C.isValidElement(t) && (n = t.props),
    !cn(n))
        return null;
    var i = {};
    return Object.keys(n).forEach(function(a) {
        cu.includes(a) && (i[a] = r || function(o) {
            return n[a](n, o)
        }
        )
    }),
    i
}
  , Vb = function(t, r, n) {
    return function(i) {
        return t(r, n, i),
        null
    }
}
  , ia = function(t, r, n) {
    if (!cn(t) || ks(t) !== "object")
        return null;
    var i = null;
    return Object.keys(t).forEach(function(a) {
        var o = t[a];
        cu.includes(a) && typeof o == "function" && (i || (i = {}),
        i[a] = Vb(o, r, n))
    }),
    i
}
  , Kb = ["children"]
  , Xb = ["children"];
function yc(e, t) {
    if (e == null)
        return {};
    var r = Gb(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function Gb(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function Ms(e) {
    "@babel/helpers - typeof";
    return Ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Ms(e)
}
var gc = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick"
}
  , Bt = function(t) {
    return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : ""
}
  , bc = null
  , Zo = null
  , fu = function e(t) {
    if (t === bc && Array.isArray(Zo))
        return Zo;
    var r = [];
    return C.Children.forEach(t, function(n) {
        ue(n) || (Mb.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n))
    }),
    Zo = r,
    bc = t,
    r
};
function bt(e, t) {
    var r = []
      , n = [];
    return Array.isArray(t) ? n = t.map(function(i) {
        return Bt(i)
    }) : n = [Bt(t)],
    fu(e).forEach(function(i) {
        var a = st(i, "type.displayName") || st(i, "type.name");
        n.indexOf(a) !== -1 && r.push(i)
    }),
    r
}
function Je(e, t) {
    var r = bt(e, t);
    return r && r[0]
}
var xc = function(t) {
    if (!t || !t.props)
        return !1;
    var r = t.props
      , n = r.width
      , i = r.height;
    return !(!F(n) || n <= 0 || !F(i) || i <= 0)
}
  , Yb = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"]
  , Zb = function(t) {
    return t && t.type && Ai(t.type) && Yb.indexOf(t.type) >= 0
}
  , Jb = function(t) {
    return t && Ms(t) === "object" && "clipDot"in t
}
  , Qb = function(t, r, n, i) {
    var a, o = (a = Yo == null ? void 0 : Yo[i]) !== null && a !== void 0 ? a : [];
    return !re(t) && (i && o.includes(r) || Hb.includes(r)) || n && cu.includes(r)
}
  , oe = function(t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean")
        return null;
    var i = t;
    if (C.isValidElement(t) && (i = t.props),
    !cn(i))
        return null;
    var a = {};
    return Object.keys(i).forEach(function(o) {
        var s;
        Qb((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o])
    }),
    a
}
  , Ns = function e(t, r) {
    if (t === r)
        return !0;
    var n = C.Children.count(t);
    if (n !== C.Children.count(r))
        return !1;
    if (n === 0)
        return !0;
    if (n === 1)
        return wc(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
        var a = t[i]
          , o = r[i];
        if (Array.isArray(a) || Array.isArray(o)) {
            if (!e(a, o))
                return !1
        } else if (!wc(a, o))
            return !1
    }
    return !0
}
  , wc = function(t, r) {
    if (ue(t) && ue(r))
        return !0;
    if (!ue(t) && !ue(r)) {
        var n = t.props || {}
          , i = n.children
          , a = yc(n, Kb)
          , o = r.props || {}
          , s = o.children
          , l = yc(o, Xb);
        return i && s ? Dr(a, l) && Ns(i, s) : !i && !s ? Dr(a, l) : !1
    }
    return !1
}
  , _c = function(t, r) {
    var n = []
      , i = {};
    return fu(t).forEach(function(a, o) {
        if (Zb(a))
            n.push(a);
        else if (a) {
            var s = Bt(a.type)
              , l = r[s] || {}
              , u = l.handler
              , f = l.once;
            if (u && (!f || !i[s])) {
                var c = u(a, s, o);
                n.push(c),
                i[s] = !0
            }
        }
    }),
    n
}
  , e0 = function(t) {
    var r = t && t.type;
    return r && gc[r] ? gc[r] : null
}
  , t0 = function(t, r) {
    return fu(r).indexOf(t)
}
  , r0 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Is() {
    return Is = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Is.apply(this, arguments)
}
function n0(e, t) {
    if (e == null)
        return {};
    var r = i0(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function i0(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function Ds(e) {
    var t = e.children
      , r = e.width
      , n = e.height
      , i = e.viewBox
      , a = e.className
      , o = e.style
      , s = e.title
      , l = e.desc
      , u = n0(e, r0)
      , f = i || {
        width: r,
        height: n,
        x: 0,
        y: 0
    }
      , c = te("recharts-surface", a);
    return $.createElement("svg", Is({}, oe(u, !0, "svg"), {
        className: c,
        width: r,
        height: n,
        style: o,
        viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
    }), $.createElement("title", null, s), $.createElement("desc", null, l), t)
}
var a0 = ["children", "className"];
function Rs() {
    return Rs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Rs.apply(this, arguments)
}
function o0(e, t) {
    if (e == null)
        return {};
    var r = s0(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function s0(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
var xe = $.forwardRef(function(e, t) {
    var r = e.children
      , n = e.className
      , i = o0(e, a0)
      , a = te("recharts-layer", n);
    return $.createElement("g", Rs({
        className: a
    }, oe(i, !0), {
        ref: t
    }), r)
})
  , hr = function(t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
        i[a - 2] = arguments[a]
};
function l0(e, t, r) {
    var n = -1
      , i = e.length;
    t < 0 && (t = -t > i ? 0 : i + t),
    r = r > i ? i : r,
    r < 0 && (r += i),
    i = t > r ? 0 : r - t >>> 0,
    t >>>= 0;
    for (var a = Array(i); ++n < i; )
        a[n] = e[n + t];
    return a
}
var u0 = l0
  , c0 = u0;
function f0(e, t, r) {
    var n = e.length;
    return r = r === void 0 ? n : r,
    !t && r >= n ? e : c0(e, t, r)
}
var d0 = f0
  , p0 = "\\ud800-\\udfff"
  , h0 = "\\u0300-\\u036f"
  , m0 = "\\ufe20-\\ufe2f"
  , v0 = "\\u20d0-\\u20ff"
  , y0 = h0 + m0 + v0
  , g0 = "\\ufe0e\\ufe0f"
  , b0 = "\\u200d"
  , x0 = RegExp("[" + b0 + p0 + y0 + g0 + "]");
function w0(e) {
    return x0.test(e)
}
var nh = w0;
function _0(e) {
    return e.split("")
}
var S0 = _0
  , ih = "\\ud800-\\udfff"
  , O0 = "\\u0300-\\u036f"
  , P0 = "\\ufe20-\\ufe2f"
  , A0 = "\\u20d0-\\u20ff"
  , j0 = O0 + P0 + A0
  , $0 = "\\ufe0e\\ufe0f"
  , C0 = "[" + ih + "]"
  , Bs = "[" + j0 + "]"
  , Ls = "\\ud83c[\\udffb-\\udfff]"
  , T0 = "(?:" + Bs + "|" + Ls + ")"
  , ah = "[^" + ih + "]"
  , oh = "(?:\\ud83c[\\udde6-\\uddff]){2}"
  , sh = "[\\ud800-\\udbff][\\udc00-\\udfff]"
  , E0 = "\\u200d"
  , lh = T0 + "?"
  , uh = "[" + $0 + "]?"
  , k0 = "(?:" + E0 + "(?:" + [ah, oh, sh].join("|") + ")" + uh + lh + ")*"
  , M0 = uh + lh + k0
  , N0 = "(?:" + [ah + Bs + "?", Bs, oh, sh, C0].join("|") + ")"
  , I0 = RegExp(Ls + "(?=" + Ls + ")|" + N0 + M0, "g");
function D0(e) {
    return e.match(I0) || []
}
var R0 = D0
  , B0 = S0
  , L0 = nh
  , U0 = R0;
function W0(e) {
    return L0(e) ? U0(e) : B0(e)
}
var z0 = W0
  , F0 = d0
  , q0 = nh
  , H0 = z0
  , V0 = Wy;
function K0(e) {
    return function(t) {
        t = V0(t);
        var r = q0(t) ? H0(t) : void 0
          , n = r ? r[0] : t.charAt(0)
          , i = r ? F0(r, 1).join("") : t.slice(1);
        return n[e]() + i
    }
}
var X0 = K0
  , G0 = X0
  , Y0 = G0("toUpperCase")
  , Z0 = Y0;
const mo = ke(Z0);
function ve(e) {
    return function() {
        return e
    }
}
const ch = Math.cos
  , aa = Math.sin
  , wt = Math.sqrt
  , oa = Math.PI
  , vo = 2 * oa
  , Us = Math.PI
  , Ws = 2 * Us
  , ir = 1e-6
  , J0 = Ws - ir;
function fh(e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
        this._ += arguments[t] + e[t]
}
function Q0(e) {
    let t = Math.floor(e);
    if (!(t >= 0))
        throw new Error(`invalid digits: ${e}`);
    if (t > 15)
        return fh;
    const r = 10 ** t;
    return function(n) {
        this._ += n[0];
        for (let i = 1, a = n.length; i < a; ++i)
            this._ += Math.round(arguments[i] * r) / r + n[i]
    }
}
class ex {
    constructor(t) {
        this._x0 = this._y0 = this._x1 = this._y1 = null,
        this._ = "",
        this._append = t == null ? fh : Q0(t)
    }
    moveTo(t, r) {
        this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`
    }
    closePath() {
        this._x1 !== null && (this._x1 = this._x0,
        this._y1 = this._y0,
        this._append`Z`)
    }
    lineTo(t, r) {
        this._append`L${this._x1 = +t},${this._y1 = +r}`
    }
    quadraticCurveTo(t, r, n, i) {
        this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`
    }
    bezierCurveTo(t, r, n, i, a, o) {
        this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`
    }
    arcTo(t, r, n, i, a) {
        if (t = +t,
        r = +r,
        n = +n,
        i = +i,
        a = +a,
        a < 0)
            throw new Error(`negative radius: ${a}`);
        let o = this._x1
          , s = this._y1
          , l = n - t
          , u = i - r
          , f = o - t
          , c = s - r
          , d = f * f + c * c;
        if (this._x1 === null)
            this._append`M${this._x1 = t},${this._y1 = r}`;
        else if (d > ir)
            if (!(Math.abs(c * l - u * f) > ir) || !a)
                this._append`L${this._x1 = t},${this._y1 = r}`;
            else {
                let p = n - o
                  , h = i - s
                  , m = l * l + u * u
                  , g = p * p + h * h
                  , b = Math.sqrt(m)
                  , _ = Math.sqrt(d)
                  , w = a * Math.tan((Us - Math.acos((m + d - g) / (2 * b * _))) / 2)
                  , S = w / _
                  , y = w / b;
                Math.abs(S - 1) > ir && this._append`L${t + S * f},${r + S * c}`,
                this._append`A${a},${a},0,0,${+(c * p > f * h)},${this._x1 = t + y * l},${this._y1 = r + y * u}`
            }
    }
    arc(t, r, n, i, a, o) {
        if (t = +t,
        r = +r,
        n = +n,
        o = !!o,
        n < 0)
            throw new Error(`negative radius: ${n}`);
        let s = n * Math.cos(i)
          , l = n * Math.sin(i)
          , u = t + s
          , f = r + l
          , c = 1 ^ o
          , d = o ? i - a : a - i;
        this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > ir || Math.abs(this._y1 - f) > ir) && this._append`L${u},${f}`,
        n && (d < 0 && (d = d % Ws + Ws),
        d > J0 ? this._append`A${n},${n},0,1,${c},${t - s},${r - l}A${n},${n},0,1,${c},${this._x1 = u},${this._y1 = f}` : d > ir && this._append`A${n},${n},0,${+(d >= Us)},${c},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`)
    }
    rect(t, r, n, i) {
        this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`
    }
    toString() {
        return this._
    }
}
function du(e) {
    let t = 3;
    return e.digits = function(r) {
        if (!arguments.length)
            return t;
        if (r == null)
            t = null;
        else {
            const n = Math.floor(r);
            if (!(n >= 0))
                throw new RangeError(`invalid digits: ${r}`);
            t = n
        }
        return e
    }
    ,
    () => new ex(t)
}
function pu(e) {
    return typeof e == "object" && "length"in e ? e : Array.from(e)
}
function dh(e) {
    this._context = e
}
dh.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(),
        this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
        case 0:
            this._point = 1,
            this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
            break;
        case 1:
            this._point = 2;
        default:
            this._context.lineTo(e, t);
            break
        }
    }
};
function yo(e) {
    return new dh(e)
}
function ph(e) {
    return e[0]
}
function hh(e) {
    return e[1]
}
function mh(e, t) {
    var r = ve(!0)
      , n = null
      , i = yo
      , a = null
      , o = du(s);
    e = typeof e == "function" ? e : e === void 0 ? ph : ve(e),
    t = typeof t == "function" ? t : t === void 0 ? hh : ve(t);
    function s(l) {
        var u, f = (l = pu(l)).length, c, d = !1, p;
        for (n == null && (a = i(p = o())),
        u = 0; u <= f; ++u)
            !(u < f && r(c = l[u], u, l)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()),
            d && a.point(+e(c, u, l), +t(c, u, l));
        if (p)
            return a = null,
            p + "" || null
    }
    return s.x = function(l) {
        return arguments.length ? (e = typeof l == "function" ? l : ve(+l),
        s) : e
    }
    ,
    s.y = function(l) {
        return arguments.length ? (t = typeof l == "function" ? l : ve(+l),
        s) : t
    }
    ,
    s.defined = function(l) {
        return arguments.length ? (r = typeof l == "function" ? l : ve(!!l),
        s) : r
    }
    ,
    s.curve = function(l) {
        return arguments.length ? (i = l,
        n != null && (a = i(n)),
        s) : i
    }
    ,
    s.context = function(l) {
        return arguments.length ? (l == null ? n = a = null : a = i(n = l),
        s) : n
    }
    ,
    s
}
function Ri(e, t, r) {
    var n = null
      , i = ve(!0)
      , a = null
      , o = yo
      , s = null
      , l = du(u);
    e = typeof e == "function" ? e : e === void 0 ? ph : ve(+e),
    t = typeof t == "function" ? t : ve(t === void 0 ? 0 : +t),
    r = typeof r == "function" ? r : r === void 0 ? hh : ve(+r);
    function u(c) {
        var d, p, h, m = (c = pu(c)).length, g, b = !1, _, w = new Array(m), S = new Array(m);
        for (a == null && (s = o(_ = l())),
        d = 0; d <= m; ++d) {
            if (!(d < m && i(g = c[d], d, c)) === b)
                if (b = !b)
                    p = d,
                    s.areaStart(),
                    s.lineStart();
                else {
                    for (s.lineEnd(),
                    s.lineStart(),
                    h = d - 1; h >= p; --h)
                        s.point(w[h], S[h]);
                    s.lineEnd(),
                    s.areaEnd()
                }
            b && (w[d] = +e(g, d, c),
            S[d] = +t(g, d, c),
            s.point(n ? +n(g, d, c) : w[d], r ? +r(g, d, c) : S[d]))
        }
        if (_)
            return s = null,
            _ + "" || null
    }
    function f() {
        return mh().defined(i).curve(o).context(a)
    }
    return u.x = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : ve(+c),
        n = null,
        u) : e
    }
    ,
    u.x0 = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : ve(+c),
        u) : e
    }
    ,
    u.x1 = function(c) {
        return arguments.length ? (n = c == null ? null : typeof c == "function" ? c : ve(+c),
        u) : n
    }
    ,
    u.y = function(c) {
        return arguments.length ? (t = typeof c == "function" ? c : ve(+c),
        r = null,
        u) : t
    }
    ,
    u.y0 = function(c) {
        return arguments.length ? (t = typeof c == "function" ? c : ve(+c),
        u) : t
    }
    ,
    u.y1 = function(c) {
        return arguments.length ? (r = c == null ? null : typeof c == "function" ? c : ve(+c),
        u) : r
    }
    ,
    u.lineX0 = u.lineY0 = function() {
        return f().x(e).y(t)
    }
    ,
    u.lineY1 = function() {
        return f().x(e).y(r)
    }
    ,
    u.lineX1 = function() {
        return f().x(n).y(t)
    }
    ,
    u.defined = function(c) {
        return arguments.length ? (i = typeof c == "function" ? c : ve(!!c),
        u) : i
    }
    ,
    u.curve = function(c) {
        return arguments.length ? (o = c,
        a != null && (s = o(a)),
        u) : o
    }
    ,
    u.context = function(c) {
        return arguments.length ? (c == null ? a = s = null : s = o(a = c),
        u) : a
    }
    ,
    u
}
class vh {
    constructor(t, r) {
        this._context = t,
        this._x = r
    }
    areaStart() {
        this._line = 0
    }
    areaEnd() {
        this._line = NaN
    }
    lineStart() {
        this._point = 0
    }
    lineEnd() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(),
        this._line = 1 - this._line
    }
    point(t, r) {
        switch (t = +t,
        r = +r,
        this._point) {
        case 0:
            {
                this._point = 1,
                this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
                break
            }
        case 1:
            this._point = 2;
        default:
            {
                this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
                break
            }
        }
        this._x0 = t,
        this._y0 = r
    }
}
function tx(e) {
    return new vh(e,!0)
}
function rx(e) {
    return new vh(e,!1)
}
const hu = {
    draw(e, t) {
        const r = wt(t / oa);
        e.moveTo(r, 0),
        e.arc(0, 0, r, 0, vo)
    }
}
  , nx = {
    draw(e, t) {
        const r = wt(t / 5) / 2;
        e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath()
    }
}
  , yh = wt(1 / 3)
  , ix = yh * 2
  , ax = {
    draw(e, t) {
        const r = wt(t / ix)
          , n = r * yh;
        e.moveTo(0, -r),
        e.lineTo(n, 0),
        e.lineTo(0, r),
        e.lineTo(-n, 0),
        e.closePath()
    }
}
  , ox = {
    draw(e, t) {
        const r = wt(t)
          , n = -r / 2;
        e.rect(n, n, r, r)
    }
}
  , sx = .8908130915292852
  , gh = aa(oa / 10) / aa(7 * oa / 10)
  , lx = aa(vo / 10) * gh
  , ux = -ch(vo / 10) * gh
  , cx = {
    draw(e, t) {
        const r = wt(t * sx)
          , n = lx * r
          , i = ux * r;
        e.moveTo(0, -r),
        e.lineTo(n, i);
        for (let a = 1; a < 5; ++a) {
            const o = vo * a / 5
              , s = ch(o)
              , l = aa(o);
            e.lineTo(l * r, -s * r),
            e.lineTo(s * n - l * i, l * n + s * i)
        }
        e.closePath()
    }
}
  , Jo = wt(3)
  , fx = {
    draw(e, t) {
        const r = -wt(t / (Jo * 3));
        e.moveTo(0, r * 2),
        e.lineTo(-Jo * r, -r),
        e.lineTo(Jo * r, -r),
        e.closePath()
    }
}
  , tt = -.5
  , rt = wt(3) / 2
  , zs = 1 / wt(12)
  , dx = (zs / 2 + 1) * 3
  , px = {
    draw(e, t) {
        const r = wt(t / dx)
          , n = r / 2
          , i = r * zs
          , a = n
          , o = r * zs + r
          , s = -a
          , l = o;
        e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(s, l),
        e.lineTo(tt * n - rt * i, rt * n + tt * i),
        e.lineTo(tt * a - rt * o, rt * a + tt * o),
        e.lineTo(tt * s - rt * l, rt * s + tt * l),
        e.lineTo(tt * n + rt * i, tt * i - rt * n),
        e.lineTo(tt * a + rt * o, tt * o - rt * a),
        e.lineTo(tt * s + rt * l, tt * l - rt * s),
        e.closePath()
    }
};
function hx(e, t) {
    let r = null
      , n = du(i);
    e = typeof e == "function" ? e : ve(e || hu),
    t = typeof t == "function" ? t : ve(t === void 0 ? 64 : +t);
    function i() {
        let a;
        if (r || (r = a = n()),
        e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
        a)
            return r = null,
            a + "" || null
    }
    return i.type = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : ve(a),
        i) : e
    }
    ,
    i.size = function(a) {
        return arguments.length ? (t = typeof a == "function" ? a : ve(+a),
        i) : t
    }
    ,
    i.context = function(a) {
        return arguments.length ? (r = a ?? null,
        i) : r
    }
    ,
    i
}
function sa() {}
function la(e, t, r) {
    e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + r) / 6)
}
function bh(e) {
    this._context = e
}
bh.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN,
        this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
        case 3:
            la(this, this._x1, this._y1);
        case 2:
            this._context.lineTo(this._x1, this._y1);
            break
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(),
        this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
        case 0:
            this._point = 1,
            this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
            break;
        case 1:
            this._point = 2;
            break;
        case 2:
            this._point = 3,
            this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
        default:
            la(this, e, t);
            break
        }
        this._x0 = this._x1,
        this._x1 = e,
        this._y0 = this._y1,
        this._y1 = t
    }
};
function mx(e) {
    return new bh(e)
}
function xh(e) {
    this._context = e
}
xh.prototype = {
    areaStart: sa,
    areaEnd: sa,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
        this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
        case 1:
            {
                this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
                break
            }
        case 2:
            {
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                this._context.closePath();
                break
            }
        case 3:
            {
                this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4);
                break
            }
        }
    },
    point: function(e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
        case 0:
            this._point = 1,
            this._x2 = e,
            this._y2 = t;
            break;
        case 1:
            this._point = 2,
            this._x3 = e,
            this._y3 = t;
            break;
        case 2:
            this._point = 3,
            this._x4 = e,
            this._y4 = t,
            this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
            break;
        default:
            la(this, e, t);
            break
        }
        this._x0 = this._x1,
        this._x1 = e,
        this._y0 = this._y1,
        this._y1 = t
    }
};
function vx(e) {
    return new xh(e)
}
function wh(e) {
    this._context = e
}
wh.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN,
        this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(),
        this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
        case 0:
            this._point = 1;
            break;
        case 1:
            this._point = 2;
            break;
        case 2:
            this._point = 3;
            var r = (this._x0 + 4 * this._x1 + e) / 6
              , n = (this._y0 + 4 * this._y1 + t) / 6;
            this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
            break;
        case 3:
            this._point = 4;
        default:
            la(this, e, t);
            break
        }
        this._x0 = this._x1,
        this._x1 = e,
        this._y0 = this._y1,
        this._y1 = t
    }
};
function yx(e) {
    return new wh(e)
}
function _h(e) {
    this._context = e
}
_h.prototype = {
    areaStart: sa,
    areaEnd: sa,
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        this._point && this._context.closePath()
    },
    point: function(e, t) {
        e = +e,
        t = +t,
        this._point ? this._context.lineTo(e, t) : (this._point = 1,
        this._context.moveTo(e, t))
    }
};
function gx(e) {
    return new _h(e)
}
function Sc(e) {
    return e < 0 ? -1 : 1
}
function Oc(e, t, r) {
    var n = e._x1 - e._x0
      , i = t - e._x1
      , a = (e._y1 - e._y0) / (n || i < 0 && -0)
      , o = (r - e._y1) / (i || n < 0 && -0)
      , s = (a * i + o * n) / (n + i);
    return (Sc(a) + Sc(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0
}
function Pc(e, t) {
    var r = e._x1 - e._x0;
    return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t
}
function Qo(e, t, r) {
    var n = e._x0
      , i = e._y0
      , a = e._x1
      , o = e._y1
      , s = (a - n) / 3;
    e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o)
}
function ua(e) {
    this._context = e
}
ua.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
        this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
        case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
        case 3:
            Qo(this, this._t0, Pc(this, this._t0));
            break
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(),
        this._line = 1 - this._line
    },
    point: function(e, t) {
        var r = NaN;
        if (e = +e,
        t = +t,
        !(e === this._x1 && t === this._y1)) {
            switch (this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                Qo(this, Pc(this, r = Oc(this, e, t)), r);
                break;
            default:
                Qo(this, this._t0, r = Oc(this, e, t));
                break
            }
            this._x0 = this._x1,
            this._x1 = e,
            this._y0 = this._y1,
            this._y1 = t,
            this._t0 = r
        }
    }
};
function Sh(e) {
    this._context = new Oh(e)
}
(Sh.prototype = Object.create(ua.prototype)).point = function(e, t) {
    ua.prototype.point.call(this, t, e)
}
;
function Oh(e) {
    this._context = e
}
Oh.prototype = {
    moveTo: function(e, t) {
        this._context.moveTo(t, e)
    },
    closePath: function() {
        this._context.closePath()
    },
    lineTo: function(e, t) {
        this._context.lineTo(t, e)
    },
    bezierCurveTo: function(e, t, r, n, i, a) {
        this._context.bezierCurveTo(t, e, n, r, a, i)
    }
};
function bx(e) {
    return new ua(e)
}
function xx(e) {
    return new Sh(e)
}
function Ph(e) {
    this._context = e
}
Ph.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = [],
        this._y = []
    },
    lineEnd: function() {
        var e = this._x
          , t = this._y
          , r = e.length;
        if (r)
            if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]),
            r === 2)
                this._context.lineTo(e[1], t[1]);
            else
                for (var n = Ac(e), i = Ac(t), a = 0, o = 1; o < r; ++a,
                ++o)
                    this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
        (this._line || this._line !== 0 && r === 1) && this._context.closePath(),
        this._line = 1 - this._line,
        this._x = this._y = null
    },
    point: function(e, t) {
        this._x.push(+e),
        this._y.push(+t)
    }
};
function Ac(e) {
    var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
    for (i[0] = 0,
    a[0] = 2,
    o[0] = e[0] + 2 * e[1],
    t = 1; t < r - 1; ++t)
        i[t] = 1,
        a[t] = 4,
        o[t] = 4 * e[t] + 2 * e[t + 1];
    for (i[r - 1] = 2,
    a[r - 1] = 7,
    o[r - 1] = 8 * e[r - 1] + e[r],
    t = 1; t < r; ++t)
        n = i[t] / a[t - 1],
        a[t] -= n,
        o[t] -= n * o[t - 1];
    for (i[r - 1] = o[r - 1] / a[r - 1],
    t = r - 2; t >= 0; --t)
        i[t] = (o[t] - i[t + 1]) / a[t];
    for (a[r - 1] = (e[r] + i[r - 1]) / 2,
    t = 0; t < r - 1; ++t)
        a[t] = 2 * e[t + 1] - i[t + 1];
    return [i, a]
}
function wx(e) {
    return new Ph(e)
}
function go(e, t) {
    this._context = e,
    this._t = t
}
go.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = this._y = NaN,
        this._point = 0
    },
    lineEnd: function() {
        0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y),
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(),
        this._line >= 0 && (this._t = 1 - this._t,
        this._line = 1 - this._line)
    },
    point: function(e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
        case 0:
            this._point = 1,
            this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
            break;
        case 1:
            this._point = 2;
        default:
            {
                if (this._t <= 0)
                    this._context.lineTo(this._x, t),
                    this._context.lineTo(e, t);
                else {
                    var r = this._x * (1 - this._t) + e * this._t;
                    this._context.lineTo(r, this._y),
                    this._context.lineTo(r, t)
                }
                break
            }
        }
        this._x = e,
        this._y = t
    }
};
function _x(e) {
    return new go(e,.5)
}
function Sx(e) {
    return new go(e,0)
}
function Ox(e) {
    return new go(e,1)
}
function Ur(e, t) {
    if ((o = e.length) > 1)
        for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
            for (i = a,
            a = e[t[r]],
            n = 0; n < s; ++n)
                a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1]
}
function Fs(e) {
    for (var t = e.length, r = new Array(t); --t >= 0; )
        r[t] = t;
    return r
}
function Px(e, t) {
    return e[t]
}
function Ax(e) {
    const t = [];
    return t.key = e,
    t
}
function jx() {
    var e = ve([])
      , t = Fs
      , r = Ur
      , n = Px;
    function i(a) {
        var o = Array.from(e.apply(this, arguments), Ax), s, l = o.length, u = -1, f;
        for (const c of a)
            for (s = 0,
            ++u; s < l; ++s)
                (o[s][u] = [0, +n(c, o[s].key, u, a)]).data = c;
        for (s = 0,
        f = pu(t(o)); s < l; ++s)
            o[f[s]].index = s;
        return r(o, f),
        o
    }
    return i.keys = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : ve(Array.from(a)),
        i) : e
    }
    ,
    i.value = function(a) {
        return arguments.length ? (n = typeof a == "function" ? a : ve(+a),
        i) : n
    }
    ,
    i.order = function(a) {
        return arguments.length ? (t = a == null ? Fs : typeof a == "function" ? a : ve(Array.from(a)),
        i) : t
    }
    ,
    i.offset = function(a) {
        return arguments.length ? (r = a ?? Ur,
        i) : r
    }
    ,
    i
}
function $x(e, t) {
    if ((n = e.length) > 0) {
        for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
            for (o = r = 0; r < n; ++r)
                o += e[r][i][1] || 0;
            if (o)
                for (r = 0; r < n; ++r)
                    e[r][i][1] /= o
        }
        Ur(e, t)
    }
}
function Cx(e, t) {
    if ((i = e.length) > 0) {
        for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
            for (var o = 0, s = 0; o < i; ++o)
                s += e[o][r][1] || 0;
            n[r][1] += n[r][0] = -s / 2
        }
        Ur(e, t)
    }
}
function Tx(e, t) {
    if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
        for (var r = 0, n = 1, i, a, o; n < a; ++n) {
            for (var s = 0, l = 0, u = 0; s < o; ++s) {
                for (var f = e[t[s]], c = f[n][1] || 0, d = f[n - 1][1] || 0, p = (c - d) / 2, h = 0; h < s; ++h) {
                    var m = e[t[h]]
                      , g = m[n][1] || 0
                      , b = m[n - 1][1] || 0;
                    p += g - b
                }
                l += c,
                u += p * c
            }
            i[n - 1][1] += i[n - 1][0] = r,
            l && (r -= u / l)
        }
        i[n - 1][1] += i[n - 1][0] = r,
        Ur(e, t)
    }
}
function Bn(e) {
    "@babel/helpers - typeof";
    return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Bn(e)
}
var Ex = ["type", "size", "sizeType"];
function qs() {
    return qs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    qs.apply(this, arguments)
}
function jc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function $c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? jc(Object(r), !0).forEach(function(n) {
            kx(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jc(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function kx(e, t, r) {
    return t = Mx(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Mx(e) {
    var t = Nx(e, "string");
    return Bn(t) == "symbol" ? t : t + ""
}
function Nx(e, t) {
    if (Bn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Bn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function Ix(e, t) {
    if (e == null)
        return {};
    var r = Dx(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function Dx(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
var Ah = {
    symbolCircle: hu,
    symbolCross: nx,
    symbolDiamond: ax,
    symbolSquare: ox,
    symbolStar: cx,
    symbolTriangle: fx,
    symbolWye: px
}
  , Rx = Math.PI / 180
  , Bx = function(t) {
    var r = "symbol".concat(mo(t));
    return Ah[r] || hu
}
  , Lx = function(t, r, n) {
    if (r === "area")
        return t;
    switch (n) {
    case "cross":
        return 5 * t * t / 9;
    case "diamond":
        return .5 * t * t / Math.sqrt(3);
    case "square":
        return t * t;
    case "star":
        {
            var i = 18 * Rx;
            return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
        }
    case "triangle":
        return Math.sqrt(3) * t * t / 4;
    case "wye":
        return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
        return Math.PI * t * t / 4
    }
}
  , Ux = function(t, r) {
    Ah["symbol".concat(mo(t))] = r
}
  , mu = function(t) {
    var r = t.type
      , n = r === void 0 ? "circle" : r
      , i = t.size
      , a = i === void 0 ? 64 : i
      , o = t.sizeType
      , s = o === void 0 ? "area" : o
      , l = Ix(t, Ex)
      , u = $c($c({}, l), {}, {
        type: n,
        size: a,
        sizeType: s
    })
      , f = function() {
        var g = Bx(n)
          , b = hx().type(g).size(Lx(a, s, n));
        return b()
    }
      , c = u.className
      , d = u.cx
      , p = u.cy
      , h = oe(u, !0);
    return d === +d && p === +p && a === +a ? $.createElement("path", qs({}, h, {
        className: te("recharts-symbols", c),
        transform: "translate(".concat(d, ", ").concat(p, ")"),
        d: f()
    })) : null
};
mu.registerSymbol = Ux;
function Wr(e) {
    "@babel/helpers - typeof";
    return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Wr(e)
}
function Hs() {
    return Hs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Hs.apply(this, arguments)
}
function Cc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Wx(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Cc(Object(r), !0).forEach(function(n) {
            Ln(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cc(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function zx(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Fx(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, $h(n.key), n)
    }
}
function qx(e, t, r) {
    return t && Fx(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Hx(e, t, r) {
    return t = ca(t),
    Vx(e, jh() ? Reflect.construct(t, r || [], ca(e).constructor) : t.apply(e, r))
}
function Vx(e, t) {
    if (t && (Wr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return Kx(e)
}
function Kx(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function jh() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (jh = function() {
        return !!e
    }
    )()
}
function ca(e) {
    return ca = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    ca(e)
}
function Xx(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Vs(e, t)
}
function Vs(e, t) {
    return Vs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Vs(e, t)
}
function Ln(e, t, r) {
    return t = $h(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function $h(e) {
    var t = Gx(e, "string");
    return Wr(t) == "symbol" ? t : t + ""
}
function Gx(e, t) {
    if (Wr(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Wr(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var dt = 32
  , vu = function(e) {
    function t() {
        return zx(this, t),
        Hx(this, t, arguments)
    }
    return Xx(t, e),
    qx(t, [{
        key: "renderIcon",
        value: function(n) {
            var i = this.props.inactiveColor
              , a = dt / 2
              , o = dt / 6
              , s = dt / 3
              , l = n.inactive ? i : n.color;
            if (n.type === "plainline")
                return $.createElement("line", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: l,
                    strokeDasharray: n.payload.strokeDasharray,
                    x1: 0,
                    y1: a,
                    x2: dt,
                    y2: a,
                    className: "recharts-legend-icon"
                });
            if (n.type === "line")
                return $.createElement("path", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: l,
                    d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(dt, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a),
                    className: "recharts-legend-icon"
                });
            if (n.type === "rect")
                return $.createElement("path", {
                    stroke: "none",
                    fill: l,
                    d: "M0,".concat(dt / 8, "h").concat(dt, "v").concat(dt * 3 / 4, "h").concat(-32, "z"),
                    className: "recharts-legend-icon"
                });
            if ($.isValidElement(n.legendIcon)) {
                var u = Wx({}, n);
                return delete u.legendIcon,
                $.cloneElement(n.legendIcon, u)
            }
            return $.createElement(mu, {
                fill: l,
                cx: a,
                cy: a,
                size: dt,
                sizeType: "diameter",
                type: n.type
            })
        }
    }, {
        key: "renderItems",
        value: function() {
            var n = this
              , i = this.props
              , a = i.payload
              , o = i.iconSize
              , s = i.layout
              , l = i.formatter
              , u = i.inactiveColor
              , f = {
                x: 0,
                y: 0,
                width: dt,
                height: dt
            }
              , c = {
                display: s === "horizontal" ? "inline-block" : "block",
                marginRight: 10
            }
              , d = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
            };
            return a.map(function(p, h) {
                var m = p.formatter || l
                  , g = te(Ln(Ln({
                    "recharts-legend-item": !0
                }, "legend-item-".concat(h), !0), "inactive", p.inactive));
                if (p.type === "none")
                    return null;
                var b = re(p.value) ? null : p.value;
                hr(!re(p.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
                var _ = p.inactive ? u : p.color;
                return $.createElement("li", Hs({
                    className: g,
                    style: c,
                    key: "legend-item-".concat(h)
                }, ia(n.props, p, h)), $.createElement(Ds, {
                    width: o,
                    height: o,
                    viewBox: f,
                    style: d
                }, n.renderIcon(p)), $.createElement("span", {
                    className: "recharts-legend-item-text",
                    style: {
                        color: _
                    }
                }, m ? m(b, p, h) : b))
            })
        }
    }, {
        key: "render",
        value: function() {
            var n = this.props
              , i = n.payload
              , a = n.layout
              , o = n.align;
            if (!i || !i.length)
                return null;
            var s = {
                padding: 0,
                margin: 0,
                textAlign: a === "horizontal" ? o : "left"
            };
            return $.createElement("ul", {
                className: "recharts-default-legend",
                style: s
            }, this.renderItems())
        }
    }])
}(C.PureComponent);
Ln(vu, "displayName", "Legend");
Ln(vu, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc"
});
function Yx(e, t, r, n) {
    for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
        if (t(e[a], a, e))
            return a;
    return -1
}
var Zx = Yx;
function Jx(e) {
    return e !== e
}
var Qx = Jx;
function e1(e, t, r) {
    for (var n = r - 1, i = e.length; ++n < i; )
        if (e[n] === t)
            return n;
    return -1
}
var t1 = e1
  , r1 = Zx
  , n1 = Qx
  , i1 = t1;
function a1(e, t, r) {
    return t === t ? i1(e, t, r) : r1(e, n1, r)
}
var o1 = a1
  , s1 = o1;
function l1(e, t) {
    var r = e == null ? 0 : e.length;
    return !!r && s1(e, t, 0) > -1
}
var u1 = l1;
function c1(e, t, r) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
        if (r(t, e[n]))
            return !0;
    return !1
}
var f1 = c1;
function d1() {}
var p1 = d1
  , es = zy
  , h1 = p1
  , m1 = Wp
  , v1 = 1 / 0
  , y1 = es && 1 / m1(new es([, -0]))[1] == v1 ? function(e) {
    return new es(e)
}
: h1
  , g1 = y1
  , b1 = Fy
  , x1 = u1
  , w1 = f1
  , _1 = qy
  , S1 = g1
  , O1 = Wp
  , P1 = 200;
function A1(e, t, r) {
    var n = -1
      , i = x1
      , a = e.length
      , o = !0
      , s = []
      , l = s;
    if (r)
        o = !1,
        i = w1;
    else if (a >= P1) {
        var u = t ? null : S1(e);
        if (u)
            return O1(u);
        o = !1,
        i = _1,
        l = new b1
    } else
        l = t ? [] : s;
    e: for (; ++n < a; ) {
        var f = e[n]
          , c = t ? t(f) : f;
        if (f = r || f !== 0 ? f : 0,
        o && c === c) {
            for (var d = l.length; d--; )
                if (l[d] === c)
                    continue e;
            t && l.push(c),
            s.push(f)
        } else
            i(l, c, r) || (l !== s && l.push(c),
            s.push(f))
    }
    return s
}
var j1 = A1
  , $1 = Oi
  , C1 = j1;
function T1(e, t) {
    return e && e.length ? C1(e, $1(t)) : []
}
var E1 = T1;
const Tc = ke(E1);
function Ch(e, t, r) {
    return t === !0 ? Tc(e, r) : re(t) ? Tc(e, t) : e
}
function zr(e) {
    "@babel/helpers - typeof";
    return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    zr(e)
}
var k1 = ["ref"];
function Ec(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Mt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ec(Object(r), !0).forEach(function(n) {
            bo(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ec(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function M1(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function kc(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Eh(n.key), n)
    }
}
function N1(e, t, r) {
    return t && kc(e.prototype, t),
    r && kc(e, r),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function I1(e, t, r) {
    return t = fa(t),
    D1(e, Th() ? Reflect.construct(t, r || [], fa(e).constructor) : t.apply(e, r))
}
function D1(e, t) {
    if (t && (zr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return R1(e)
}
function R1(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Th() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Th = function() {
        return !!e
    }
    )()
}
function fa(e) {
    return fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    fa(e)
}
function B1(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Ks(e, t)
}
function Ks(e, t) {
    return Ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Ks(e, t)
}
function bo(e, t, r) {
    return t = Eh(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Eh(e) {
    var t = L1(e, "string");
    return zr(t) == "symbol" ? t : t + ""
}
function L1(e, t) {
    if (zr(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (zr(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
function U1(e, t) {
    if (e == null)
        return {};
    var r = W1(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function W1(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function z1(e) {
    return e.value
}
function F1(e, t) {
    if ($.isValidElement(e))
        return $.cloneElement(e, t);
    if (typeof e == "function")
        return $.createElement(e, t);
    t.ref;
    var r = U1(t, k1);
    return $.createElement(vu, r)
}
var Mc = 1
  , Rr = function(e) {
    function t() {
        var r;
        M1(this, t);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
        return r = I1(this, t, [].concat(i)),
        bo(r, "lastBoundingBox", {
            width: -1,
            height: -1
        }),
        r
    }
    return B1(t, e),
    N1(t, [{
        key: "componentDidMount",
        value: function() {
            this.updateBBox()
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            this.updateBBox()
        }
    }, {
        key: "getBBox",
        value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return n.height = this.wrapperNode.offsetHeight,
                n.width = this.wrapperNode.offsetWidth,
                n
            }
            return null
        }
    }, {
        key: "updateBBox",
        value: function() {
            var n = this.props.onBBoxUpdate
              , i = this.getBBox();
            i ? (Math.abs(i.width - this.lastBoundingBox.width) > Mc || Math.abs(i.height - this.lastBoundingBox.height) > Mc) && (this.lastBoundingBox.width = i.width,
            this.lastBoundingBox.height = i.height,
            n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1,
            this.lastBoundingBox.height = -1,
            n && n(null))
        }
    }, {
        key: "getBBoxSnapshot",
        value: function() {
            return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Mt({}, this.lastBoundingBox) : {
                width: 0,
                height: 0
            }
        }
    }, {
        key: "getDefaultPosition",
        value: function(n) {
            var i = this.props, a = i.layout, o = i.align, s = i.verticalAlign, l = i.margin, u = i.chartWidth, f = i.chartHeight, c, d;
            if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
                if (o === "center" && a === "vertical") {
                    var p = this.getBBoxSnapshot();
                    c = {
                        left: ((u || 0) - p.width) / 2
                    }
                } else
                    c = o === "right" ? {
                        right: l && l.right || 0
                    } : {
                        left: l && l.left || 0
                    };
            if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
                if (s === "middle") {
                    var h = this.getBBoxSnapshot();
                    d = {
                        top: ((f || 0) - h.height) / 2
                    }
                } else
                    d = s === "bottom" ? {
                        bottom: l && l.bottom || 0
                    } : {
                        top: l && l.top || 0
                    };
            return Mt(Mt({}, c), d)
        }
    }, {
        key: "render",
        value: function() {
            var n = this
              , i = this.props
              , a = i.content
              , o = i.width
              , s = i.height
              , l = i.wrapperStyle
              , u = i.payloadUniqBy
              , f = i.payload
              , c = Mt(Mt({
                position: "absolute",
                width: o || "auto",
                height: s || "auto"
            }, this.getDefaultPosition(l)), l);
            return $.createElement("div", {
                className: "recharts-legend-wrapper",
                style: c,
                ref: function(p) {
                    n.wrapperNode = p
                }
            }, F1(a, Mt(Mt({}, this.props), {}, {
                payload: Ch(f, u, z1)
            })))
        }
    }], [{
        key: "getWithHeight",
        value: function(n, i) {
            var a = Mt(Mt({}, this.defaultProps), n.props)
              , o = a.layout;
            return o === "vertical" && F(n.props.height) ? {
                height: n.props.height
            } : o === "horizontal" ? {
                width: n.props.width || i
            } : null
        }
    }])
}(C.PureComponent);
bo(Rr, "displayName", "Legend");
bo(Rr, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom"
});
var Nc = Hy
  , q1 = Vy
  , H1 = Si
  , Ic = Nc ? Nc.isConcatSpreadable : void 0;
function V1(e) {
    return H1(e) || q1(e) || !!(Ic && e && e[Ic])
}
var K1 = V1
  , X1 = Ky
  , G1 = K1;
function kh(e, t, r, n, i) {
    var a = -1
      , o = e.length;
    for (r || (r = G1),
    i || (i = []); ++a < o; ) {
        var s = e[a];
        t > 0 && r(s) ? t > 1 ? kh(s, t - 1, r, n, i) : X1(i, s) : n || (i[i.length] = s)
    }
    return i
}
var Mh = kh;
function Y1(e, t) {
    var r = e.length;
    for (e.sort(t); r--; )
        e[r] = e[r].value;
    return e
}
var Z1 = Y1
  , Dc = au;
function J1(e, t) {
    if (e !== t) {
        var r = e !== void 0
          , n = e === null
          , i = e === e
          , a = Dc(e)
          , o = t !== void 0
          , s = t === null
          , l = t === t
          , u = Dc(t);
        if (!s && !u && !a && e > t || a && o && l && !s && !u || n && o && l || !r && l || !i)
            return 1;
        if (!n && !a && !u && e < t || u && r && i && !n && !a || s && r && i || !o && i || !l)
            return -1
    }
    return 0
}
var Q1 = J1
  , ew = Q1;
function tw(e, t, r) {
    for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
        var l = ew(i[n], a[n]);
        if (l) {
            if (n >= s)
                return l;
            var u = r[n];
            return l * (u == "desc" ? -1 : 1)
        }
    }
    return e.index - t.index
}
var rw = tw
  , ts = Xy
  , nw = Gy
  , iw = Oi
  , aw = Zy
  , ow = Z1
  , sw = Yy
  , lw = rw
  , uw = Pi
  , cw = Si;
function fw(e, t, r) {
    t.length ? t = ts(t, function(a) {
        return cw(a) ? function(o) {
            return nw(o, a.length === 1 ? a[0] : a)
        }
        : a
    }) : t = [uw];
    var n = -1;
    t = ts(t, sw(iw));
    var i = aw(e, function(a, o, s) {
        var l = ts(t, function(u) {
            return u(a)
        });
        return {
            criteria: l,
            index: ++n,
            value: a
        }
    });
    return ow(i, function(a, o) {
        return lw(a, o, r)
    })
}
var dw = fw;
function pw(e, t, r) {
    switch (r.length) {
    case 0:
        return e.call(t);
    case 1:
        return e.call(t, r[0]);
    case 2:
        return e.call(t, r[0], r[1]);
    case 3:
        return e.call(t, r[0], r[1], r[2])
    }
    return e.apply(t, r)
}
var hw = pw
  , mw = hw
  , Rc = Math.max;
function vw(e, t, r) {
    return t = Rc(t === void 0 ? e.length - 1 : t, 0),
    function() {
        for (var n = arguments, i = -1, a = Rc(n.length - t, 0), o = Array(a); ++i < a; )
            o[i] = n[t + i];
        i = -1;
        for (var s = Array(t + 1); ++i < t; )
            s[i] = n[i];
        return s[t] = r(o),
        mw(e, this, s)
    }
}
var yw = vw;
function gw(e) {
    return function() {
        return e
    }
}
var bw = gw
  , xw = Jy
  , ww = function() {
    try {
        var e = xw(Object, "defineProperty");
        return e({}, "", {}),
        e
    } catch {}
}()
  , Nh = ww
  , _w = bw
  , Bc = Nh
  , Sw = Pi
  , Ow = Bc ? function(e, t) {
    return Bc(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: _w(t),
        writable: !0
    })
}
: Sw
  , Pw = Ow
  , Aw = 800
  , jw = 16
  , $w = Date.now;
function Cw(e) {
    var t = 0
      , r = 0;
    return function() {
        var n = $w()
          , i = jw - (n - r);
        if (r = n,
        i > 0) {
            if (++t >= Aw)
                return arguments[0]
        } else
            t = 0;
        return e.apply(void 0, arguments)
    }
}
var Tw = Cw
  , Ew = Pw
  , kw = Tw
  , Mw = kw(Ew)
  , Nw = Mw
  , Iw = Pi
  , Dw = yw
  , Rw = Nw;
function Bw(e, t) {
    return Rw(Dw(e, t, Iw), e + "")
}
var Lw = Bw
  , Uw = tg
  , Ww = Qy
  , zw = eg
  , Fw = no;
function qw(e, t, r) {
    if (!Fw(r))
        return !1;
    var n = typeof t;
    return (n == "number" ? Ww(r) && zw(t, r.length) : n == "string" && t in r) ? Uw(r[t], e) : !1
}
var xo = qw
  , Hw = Mh
  , Vw = dw
  , Kw = Lw
  , Lc = xo
  , Xw = Kw(function(e, t) {
    if (e == null)
        return [];
    var r = t.length;
    return r > 1 && Lc(e, t[0], t[1]) ? t = [] : r > 2 && Lc(t[0], t[1], t[2]) && (t = [t[0]]),
    Vw(e, Hw(t, 1), [])
})
  , Gw = Xw;
const yu = ke(Gw);
function Un(e) {
    "@babel/helpers - typeof";
    return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Un(e)
}
function Xs() {
    return Xs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Xs.apply(this, arguments)
}
function Yw(e, t) {
    return e_(e) || Qw(e, t) || Jw(e, t) || Zw()
}
function Zw() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Jw(e, t) {
    if (e) {
        if (typeof e == "string")
            return Uc(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Uc(e, t)
    }
}
function Uc(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function Qw(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t !== 0)
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function e_(e) {
    if (Array.isArray(e))
        return e
}
function Wc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function rs(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Wc(Object(r), !0).forEach(function(n) {
            t_(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wc(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function t_(e, t, r) {
    return t = r_(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function r_(e) {
    var t = n_(e, "string");
    return Un(t) == "symbol" ? t : t + ""
}
function n_(e, t) {
    if (Un(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Un(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function i_(e) {
    return Array.isArray(e) && Ee(e[0]) && Ee(e[1]) ? e.join(" ~ ") : e
}
var a_ = function(t) {
    var r = t.separator
      , n = r === void 0 ? " : " : r
      , i = t.contentStyle
      , a = i === void 0 ? {} : i
      , o = t.itemStyle
      , s = o === void 0 ? {} : o
      , l = t.labelStyle
      , u = l === void 0 ? {} : l
      , f = t.payload
      , c = t.formatter
      , d = t.itemSorter
      , p = t.wrapperClassName
      , h = t.labelClassName
      , m = t.label
      , g = t.labelFormatter
      , b = t.accessibilityLayer
      , _ = b === void 0 ? !1 : b
      , w = function() {
        if (f && f.length) {
            var T = {
                padding: 0,
                margin: 0
            }
              , N = (d ? yu(f, d) : f).map(function(E, I) {
                if (E.type === "none")
                    return null;
                var D = rs({
                    display: "block",
                    paddingTop: 4,
                    paddingBottom: 4,
                    color: E.color || "#000"
                }, s)
                  , B = E.formatter || c || i_
                  , R = E.value
                  , L = E.name
                  , K = R
                  , G = L;
                if (B && K != null && G != null) {
                    var z = B(R, L, E, I, f);
                    if (Array.isArray(z)) {
                        var Y = Yw(z, 2);
                        K = Y[0],
                        G = Y[1]
                    } else
                        K = z
                }
                return $.createElement("li", {
                    className: "recharts-tooltip-item",
                    key: "tooltip-item-".concat(I),
                    style: D
                }, Ee(G) ? $.createElement("span", {
                    className: "recharts-tooltip-item-name"
                }, G) : null, Ee(G) ? $.createElement("span", {
                    className: "recharts-tooltip-item-separator"
                }, n) : null, $.createElement("span", {
                    className: "recharts-tooltip-item-value"
                }, K), $.createElement("span", {
                    className: "recharts-tooltip-item-unit"
                }, E.unit || ""))
            });
            return $.createElement("ul", {
                className: "recharts-tooltip-item-list",
                style: T
            }, N)
        }
        return null
    }
      , S = rs({
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap"
    }, a)
      , y = rs({
        margin: 0
    }, u)
      , x = !ue(m)
      , O = x ? m : ""
      , P = te("recharts-default-tooltip", p)
      , A = te("recharts-tooltip-label", h);
    x && g && f !== void 0 && f !== null && (O = g(m, f));
    var k = _ ? {
        role: "status",
        "aria-live": "assertive"
    } : {};
    return $.createElement("div", Xs({
        className: P,
        style: S
    }, k), $.createElement("p", {
        className: A,
        style: y
    }, $.isValidElement(O) ? O : "".concat(O)), w())
};
function Wn(e) {
    "@babel/helpers - typeof";
    return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Wn(e)
}
function Bi(e, t, r) {
    return t = o_(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function o_(e) {
    var t = s_(e, "string");
    return Wn(t) == "symbol" ? t : t + ""
}
function s_(e, t) {
    if (Wn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Wn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var xn = "recharts-tooltip-wrapper"
  , l_ = {
    visibility: "hidden"
};
function u_(e) {
    var t = e.coordinate
      , r = e.translateX
      , n = e.translateY;
    return te(xn, Bi(Bi(Bi(Bi({}, "".concat(xn, "-right"), F(r) && t && F(t.x) && r >= t.x), "".concat(xn, "-left"), F(r) && t && F(t.x) && r < t.x), "".concat(xn, "-bottom"), F(n) && t && F(t.y) && n >= t.y), "".concat(xn, "-top"), F(n) && t && F(t.y) && n < t.y))
}
function zc(e) {
    var t = e.allowEscapeViewBox
      , r = e.coordinate
      , n = e.key
      , i = e.offsetTopLeft
      , a = e.position
      , o = e.reverseDirection
      , s = e.tooltipDimension
      , l = e.viewBox
      , u = e.viewBoxDimension;
    if (a && F(a[n]))
        return a[n];
    var f = r[n] - s - i
      , c = r[n] + i;
    if (t[n])
        return o[n] ? f : c;
    if (o[n]) {
        var d = f
          , p = l[n];
        return d < p ? Math.max(c, l[n]) : Math.max(f, l[n])
    }
    var h = c + s
      , m = l[n] + u;
    return h > m ? Math.max(f, l[n]) : Math.max(c, l[n])
}
function c_(e) {
    var t = e.translateX
      , r = e.translateY
      , n = e.useTranslate3d;
    return {
        transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
    }
}
function f_(e) {
    var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, u, f, c;
    return o.height > 0 && o.width > 0 && r ? (f = zc({
        allowEscapeViewBox: t,
        coordinate: r,
        key: "x",
        offsetTopLeft: n,
        position: i,
        reverseDirection: a,
        tooltipDimension: o.width,
        viewBox: l,
        viewBoxDimension: l.width
    }),
    c = zc({
        allowEscapeViewBox: t,
        coordinate: r,
        key: "y",
        offsetTopLeft: n,
        position: i,
        reverseDirection: a,
        tooltipDimension: o.height,
        viewBox: l,
        viewBoxDimension: l.height
    }),
    u = c_({
        translateX: f,
        translateY: c,
        useTranslate3d: s
    })) : u = l_,
    {
        cssProperties: u,
        cssClasses: u_({
            translateX: f,
            translateY: c,
            coordinate: r
        })
    }
}
function Fr(e) {
    "@babel/helpers - typeof";
    return Fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Fr(e)
}
function Fc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function qc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Fc(Object(r), !0).forEach(function(n) {
            Ys(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fc(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function d_(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function p_(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Dh(n.key), n)
    }
}
function h_(e, t, r) {
    return t && p_(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function m_(e, t, r) {
    return t = da(t),
    v_(e, Ih() ? Reflect.construct(t, r || [], da(e).constructor) : t.apply(e, r))
}
function v_(e, t) {
    if (t && (Fr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return y_(e)
}
function y_(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Ih() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Ih = function() {
        return !!e
    }
    )()
}
function da(e) {
    return da = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    da(e)
}
function g_(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Gs(e, t)
}
function Gs(e, t) {
    return Gs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Gs(e, t)
}
function Ys(e, t, r) {
    return t = Dh(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Dh(e) {
    var t = b_(e, "string");
    return Fr(t) == "symbol" ? t : t + ""
}
function b_(e, t) {
    if (Fr(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Fr(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var Hc = 1
  , x_ = function(e) {
    function t() {
        var r;
        d_(this, t);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
        return r = m_(this, t, [].concat(i)),
        Ys(r, "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
                x: 0,
                y: 0
            },
            lastBoundingBox: {
                width: -1,
                height: -1
            }
        }),
        Ys(r, "handleKeyDown", function(o) {
            if (o.key === "Escape") {
                var s, l, u, f;
                r.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                        x: (s = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
                        y: (u = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && u !== void 0 ? u : 0
                    }
                })
            }
        }),
        r
    }
    return g_(t, e),
    h_(t, [{
        key: "updateBBox",
        value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                (Math.abs(n.width - this.state.lastBoundingBox.width) > Hc || Math.abs(n.height - this.state.lastBoundingBox.height) > Hc) && this.setState({
                    lastBoundingBox: {
                        width: n.width,
                        height: n.height
                    }
                })
            } else
                (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
                    lastBoundingBox: {
                        width: -1,
                        height: -1
                    }
                })
        }
    }, {
        key: "componentDidMount",
        value: function() {
            document.addEventListener("keydown", this.handleKeyDown),
            this.updateBBox()
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            document.removeEventListener("keydown", this.handleKeyDown)
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            var n, i;
            this.props.active && this.updateBBox(),
            this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1)
        }
    }, {
        key: "render",
        value: function() {
            var n = this
              , i = this.props
              , a = i.active
              , o = i.allowEscapeViewBox
              , s = i.animationDuration
              , l = i.animationEasing
              , u = i.children
              , f = i.coordinate
              , c = i.hasPayload
              , d = i.isAnimationActive
              , p = i.offset
              , h = i.position
              , m = i.reverseDirection
              , g = i.useTranslate3d
              , b = i.viewBox
              , _ = i.wrapperStyle
              , w = f_({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: p,
                position: h,
                reverseDirection: m,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: g,
                viewBox: b
            })
              , S = w.cssClasses
              , y = w.cssProperties
              , x = qc(qc({
                transition: d && a ? "transform ".concat(s, "ms ").concat(l) : void 0
            }, y), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && a && c ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
            }, _);
            return $.createElement("div", {
                tabIndex: -1,
                className: S,
                style: x,
                ref: function(P) {
                    n.wrapperNode = P
                }
            }, u)
        }
    }])
}(C.PureComponent)
  , w_ = function() {
    return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout)
}
  , dn = {
    isSsr: w_()
};
function qr(e) {
    "@babel/helpers - typeof";
    return qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    qr(e)
}
function Vc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Kc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Vc(Object(r), !0).forEach(function(n) {
            gu(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vc(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function __(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function S_(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Bh(n.key), n)
    }
}
function O_(e, t, r) {
    return t && S_(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function P_(e, t, r) {
    return t = pa(t),
    A_(e, Rh() ? Reflect.construct(t, r || [], pa(e).constructor) : t.apply(e, r))
}
function A_(e, t) {
    if (t && (qr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return j_(e)
}
function j_(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Rh() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Rh = function() {
        return !!e
    }
    )()
}
function pa(e) {
    return pa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    pa(e)
}
function $_(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Zs(e, t)
}
function Zs(e, t) {
    return Zs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Zs(e, t)
}
function gu(e, t, r) {
    return t = Bh(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Bh(e) {
    var t = C_(e, "string");
    return qr(t) == "symbol" ? t : t + ""
}
function C_(e, t) {
    if (qr(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (qr(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
function T_(e) {
    return e.dataKey
}
function E_(e, t) {
    return $.isValidElement(e) ? $.cloneElement(e, t) : typeof e == "function" ? $.createElement(e, t) : $.createElement(a_, t)
}
var Pt = function(e) {
    function t() {
        return __(this, t),
        P_(this, t, arguments)
    }
    return $_(t, e),
    O_(t, [{
        key: "render",
        value: function() {
            var n = this
              , i = this.props
              , a = i.active
              , o = i.allowEscapeViewBox
              , s = i.animationDuration
              , l = i.animationEasing
              , u = i.content
              , f = i.coordinate
              , c = i.filterNull
              , d = i.isAnimationActive
              , p = i.offset
              , h = i.payload
              , m = i.payloadUniqBy
              , g = i.position
              , b = i.reverseDirection
              , _ = i.useTranslate3d
              , w = i.viewBox
              , S = i.wrapperStyle
              , y = h ?? [];
            c && y.length && (y = Ch(h.filter(function(O) {
                return O.value != null && (O.hide !== !0 || n.props.includeHidden)
            }), m, T_));
            var x = y.length > 0;
            return $.createElement(x_, {
                allowEscapeViewBox: o,
                animationDuration: s,
                animationEasing: l,
                isAnimationActive: d,
                active: a,
                coordinate: f,
                hasPayload: x,
                offset: p,
                position: g,
                reverseDirection: b,
                useTranslate3d: _,
                viewBox: w,
                wrapperStyle: S
            }, E_(u, Kc(Kc({}, this.props), {}, {
                payload: y
            })))
        }
    }])
}(C.PureComponent);
gu(Pt, "displayName", "Tooltip");
gu(Pt, "defaultProps", {
    accessibilityLayer: !1,
    allowEscapeViewBox: {
        x: !1,
        y: !1
    },
    animationDuration: 400,
    animationEasing: "ease",
    contentStyle: {},
    coordinate: {
        x: 0,
        y: 0
    },
    cursor: !0,
    cursorStyle: {},
    filterNull: !0,
    isAnimationActive: !dn.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: {
        x: !1,
        y: !1
    },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: !1,
    viewBox: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
    },
    wrapperStyle: {}
});
var k_ = rg
  , M_ = function() {
    return k_.Date.now()
}
  , N_ = M_
  , I_ = /\s/;
function D_(e) {
    for (var t = e.length; t-- && I_.test(e.charAt(t)); )
        ;
    return t
}
var R_ = D_
  , B_ = R_
  , L_ = /^\s+/;
function U_(e) {
    return e && e.slice(0, B_(e) + 1).replace(L_, "")
}
var W_ = U_
  , z_ = W_
  , Xc = no
  , F_ = au
  , Gc = NaN
  , q_ = /^[-+]0x[0-9a-f]+$/i
  , H_ = /^0b[01]+$/i
  , V_ = /^0o[0-7]+$/i
  , K_ = parseInt;
function X_(e) {
    if (typeof e == "number")
        return e;
    if (F_(e))
        return Gc;
    if (Xc(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Xc(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = z_(e);
    var r = H_.test(e);
    return r || V_.test(e) ? K_(e.slice(2), r ? 2 : 8) : q_.test(e) ? Gc : +e
}
var Lh = X_
  , G_ = no
  , ns = N_
  , Yc = Lh
  , Y_ = "Expected a function"
  , Z_ = Math.max
  , J_ = Math.min;
function Q_(e, t, r) {
    var n, i, a, o, s, l, u = 0, f = !1, c = !1, d = !0;
    if (typeof e != "function")
        throw new TypeError(Y_);
    t = Yc(t) || 0,
    G_(r) && (f = !!r.leading,
    c = "maxWait"in r,
    a = c ? Z_(Yc(r.maxWait) || 0, t) : a,
    d = "trailing"in r ? !!r.trailing : d);
    function p(x) {
        var O = n
          , P = i;
        return n = i = void 0,
        u = x,
        o = e.apply(P, O),
        o
    }
    function h(x) {
        return u = x,
        s = setTimeout(b, t),
        f ? p(x) : o
    }
    function m(x) {
        var O = x - l
          , P = x - u
          , A = t - O;
        return c ? J_(A, a - P) : A
    }
    function g(x) {
        var O = x - l
          , P = x - u;
        return l === void 0 || O >= t || O < 0 || c && P >= a
    }
    function b() {
        var x = ns();
        if (g(x))
            return _(x);
        s = setTimeout(b, m(x))
    }
    function _(x) {
        return s = void 0,
        d && n ? p(x) : (n = i = void 0,
        o)
    }
    function w() {
        s !== void 0 && clearTimeout(s),
        u = 0,
        n = l = i = s = void 0
    }
    function S() {
        return s === void 0 ? o : _(ns())
    }
    function y() {
        var x = ns()
          , O = g(x);
        if (n = arguments,
        i = this,
        l = x,
        O) {
            if (s === void 0)
                return h(l);
            if (c)
                return clearTimeout(s),
                s = setTimeout(b, t),
                p(l)
        }
        return s === void 0 && (s = setTimeout(b, t)),
        o
    }
    return y.cancel = w,
    y.flush = S,
    y
}
var eS = Q_
  , tS = eS
  , rS = no
  , nS = "Expected a function";
function iS(e, t, r) {
    var n = !0
      , i = !0;
    if (typeof e != "function")
        throw new TypeError(nS);
    return rS(r) && (n = "leading"in r ? !!r.leading : n,
    i = "trailing"in r ? !!r.trailing : i),
    tS(e, t, {
        leading: n,
        maxWait: t,
        trailing: i
    })
}
var aS = iS;
const Uh = ke(aS);
function zn(e) {
    "@babel/helpers - typeof";
    return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    zn(e)
}
function Zc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Li(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Zc(Object(r), !0).forEach(function(n) {
            oS(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zc(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function oS(e, t, r) {
    return t = sS(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function sS(e) {
    var t = lS(e, "string");
    return zn(t) == "symbol" ? t : t + ""
}
function lS(e, t) {
    if (zn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (zn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function uS(e, t) {
    return pS(e) || dS(e, t) || fS(e, t) || cS()
}
function cS() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function fS(e, t) {
    if (e) {
        if (typeof e == "string")
            return Jc(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Jc(e, t)
    }
}
function Jc(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function dS(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t !== 0)
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function pS(e) {
    if (Array.isArray(e))
        return e
}
var hS = C.forwardRef(function(e, t) {
    var r = e.aspect
      , n = e.initialDimension
      , i = n === void 0 ? {
        width: -1,
        height: -1
    } : n
      , a = e.width
      , o = a === void 0 ? "100%" : a
      , s = e.height
      , l = s === void 0 ? "100%" : s
      , u = e.minWidth
      , f = u === void 0 ? 0 : u
      , c = e.minHeight
      , d = e.maxHeight
      , p = e.children
      , h = e.debounce
      , m = h === void 0 ? 0 : h
      , g = e.id
      , b = e.className
      , _ = e.onResize
      , w = e.style
      , S = w === void 0 ? {} : w
      , y = C.useRef(null)
      , x = C.useRef();
    x.current = _,
    C.useImperativeHandle(t, function() {
        return Object.defineProperty(y.current, "current", {
            get: function() {
                return y.current
            },
            configurable: !0
        })
    });
    var O = C.useState({
        containerWidth: i.width,
        containerHeight: i.height
    })
      , P = uS(O, 2)
      , A = P[0]
      , k = P[1]
      , j = C.useCallback(function(N, E) {
        k(function(I) {
            var D = Math.round(N)
              , B = Math.round(E);
            return I.containerWidth === D && I.containerHeight === B ? I : {
                containerWidth: D,
                containerHeight: B
            }
        })
    }, []);
    C.useEffect(function() {
        var N = function(L) {
            var K, G = L[0].contentRect, z = G.width, Y = G.height;
            j(z, Y),
            (K = x.current) === null || K === void 0 || K.call(x, z, Y)
        };
        m > 0 && (N = Uh(N, m, {
            trailing: !0,
            leading: !1
        }));
        var E = new ResizeObserver(N)
          , I = y.current.getBoundingClientRect()
          , D = I.width
          , B = I.height;
        return j(D, B),
        E.observe(y.current),
        function() {
            E.disconnect()
        }
    }, [j, m]);
    var T = C.useMemo(function() {
        var N = A.containerWidth
          , E = A.containerHeight;
        if (N < 0 || E < 0)
            return null;
        hr(ur(o) || ur(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, l),
        hr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var I = ur(o) ? N : o
          , D = ur(l) ? E : l;
        r && r > 0 && (I ? D = I / r : D && (I = D * r),
        d && D > d && (D = d)),
        hr(I > 0 || D > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, D, o, l, f, c, r);
        var B = !Array.isArray(p) && Bt(p.type).endsWith("Chart");
        return $.Children.map(p, function(R) {
            return $.isValidElement(R) ? C.cloneElement(R, Li({
                width: I,
                height: D
            }, B ? {
                style: Li({
                    height: "100%",
                    width: "100%",
                    maxHeight: D,
                    maxWidth: I
                }, R.props.style)
            } : {})) : R
        })
    }, [r, p, l, d, c, f, A, o]);
    return $.createElement("div", {
        id: g ? "".concat(g) : void 0,
        className: te("recharts-responsive-container", b),
        style: Li(Li({}, S), {}, {
            width: o,
            height: l,
            minWidth: f,
            minHeight: c,
            maxHeight: d
        }),
        ref: y
    }, T)
})
  , Wh = function(t) {
    return null
};
Wh.displayName = "Cell";
function Fn(e) {
    "@babel/helpers - typeof";
    return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Fn(e)
}
function Qc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Js(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Qc(Object(r), !0).forEach(function(n) {
            mS(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qc(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function mS(e, t, r) {
    return t = vS(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function vS(e) {
    var t = yS(e, "string");
    return Fn(t) == "symbol" ? t : t + ""
}
function yS(e, t) {
    if (Fn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Fn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Cr = {
    widthCache: {},
    cacheCount: 0
}
  , gS = 2e3
  , bS = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre"
}
  , ef = "recharts_measurement_span";
function xS(e) {
    var t = Js({}, e);
    return Object.keys(t).forEach(function(r) {
        t[r] || delete t[r]
    }),
    t
}
var kn = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || dn.isSsr)
        return {
            width: 0,
            height: 0
        };
    var n = xS(r)
      , i = JSON.stringify({
        text: t,
        copyStyle: n
    });
    if (Cr.widthCache[i])
        return Cr.widthCache[i];
    try {
        var a = document.getElementById(ef);
        a || (a = document.createElement("span"),
        a.setAttribute("id", ef),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
        var o = Js(Js({}, bS), n);
        Object.assign(a.style, o),
        a.textContent = "".concat(t);
        var s = a.getBoundingClientRect()
          , l = {
            width: s.width,
            height: s.height
        };
        return Cr.widthCache[i] = l,
        ++Cr.cacheCount > gS && (Cr.cacheCount = 0,
        Cr.widthCache = {}),
        l
    } catch {
        return {
            width: 0,
            height: 0
        }
    }
}
  , wS = function(t) {
    return {
        top: t.top + window.scrollY - document.documentElement.clientTop,
        left: t.left + window.scrollX - document.documentElement.clientLeft
    }
};
function qn(e) {
    "@babel/helpers - typeof";
    return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    qn(e)
}
function ha(e, t) {
    return PS(e) || OS(e, t) || SS(e, t) || _S()
}
function _S() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function SS(e, t) {
    if (e) {
        if (typeof e == "string")
            return tf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return tf(e, t)
    }
}
function tf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function OS(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t === 0) {
                if (Object(r) !== r)
                    return;
                l = !1
            } else
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function PS(e) {
    if (Array.isArray(e))
        return e
}
function AS(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function rf(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, $S(n.key), n)
    }
}
function jS(e, t, r) {
    return t && rf(e.prototype, t),
    r && rf(e, r),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function $S(e) {
    var t = CS(e, "string");
    return qn(t) == "symbol" ? t : t + ""
}
function CS(e, t) {
    if (qn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (qn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var nf = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/
  , af = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/
  , TS = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/
  , ES = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/
  , zh = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1
}
  , kS = Object.keys(zh)
  , kr = "NaN";
function MS(e, t) {
    return e * zh[t]
}
var Ui = function() {
    function e(t, r) {
        AS(this, e),
        this.num = t,
        this.unit = r,
        this.num = t,
        this.unit = r,
        Number.isNaN(t) && (this.unit = ""),
        r !== "" && !TS.test(r) && (this.num = NaN,
        this.unit = ""),
        kS.includes(r) && (this.num = MS(t, r),
        this.unit = "px")
    }
    return jS(e, [{
        key: "add",
        value: function(r) {
            return this.unit !== r.unit ? new e(NaN,"") : new e(this.num + r.num,this.unit)
        }
    }, {
        key: "subtract",
        value: function(r) {
            return this.unit !== r.unit ? new e(NaN,"") : new e(this.num - r.num,this.unit)
        }
    }, {
        key: "multiply",
        value: function(r) {
            return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN,"") : new e(this.num * r.num,this.unit || r.unit)
        }
    }, {
        key: "divide",
        value: function(r) {
            return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN,"") : new e(this.num / r.num,this.unit || r.unit)
        }
    }, {
        key: "toString",
        value: function() {
            return "".concat(this.num).concat(this.unit)
        }
    }, {
        key: "isNaN",
        value: function() {
            return Number.isNaN(this.num)
        }
    }], [{
        key: "parse",
        value: function(r) {
            var n, i = (n = ES.exec(r)) !== null && n !== void 0 ? n : [], a = ha(i, 3), o = a[1], s = a[2];
            return new e(parseFloat(o),s ?? "")
        }
    }])
}();
function Fh(e) {
    if (e.includes(kr))
        return kr;
    for (var t = e; t.includes("*") || t.includes("/"); ) {
        var r, n = (r = nf.exec(t)) !== null && r !== void 0 ? r : [], i = ha(n, 4), a = i[1], o = i[2], s = i[3], l = Ui.parse(a ?? ""), u = Ui.parse(s ?? ""), f = o === "*" ? l.multiply(u) : l.divide(u);
        if (f.isNaN())
            return kr;
        t = t.replace(nf, f.toString())
    }
    for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
        var c, d = (c = af.exec(t)) !== null && c !== void 0 ? c : [], p = ha(d, 4), h = p[1], m = p[2], g = p[3], b = Ui.parse(h ?? ""), _ = Ui.parse(g ?? ""), w = m === "+" ? b.add(_) : b.subtract(_);
        if (w.isNaN())
            return kr;
        t = t.replace(af, w.toString())
    }
    return t
}
var of = /\(([^()]*)\)/;
function NS(e) {
    for (var t = e; t.includes("("); ) {
        var r = of.exec(t)
          , n = ha(r, 2)
          , i = n[1];
        t = t.replace(of, Fh(i))
    }
    return t
}
function IS(e) {
    var t = e.replace(/\s+/g, "");
    return t = NS(t),
    t = Fh(t),
    t
}
function DS(e) {
    try {
        return IS(e)
    } catch {
        return kr
    }
}
function is(e) {
    var t = DS(e.slice(5, -1));
    return t === kr ? "" : t
}
var RS = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"]
  , BS = ["dx", "dy", "angle", "className", "breakAll"];
function Qs() {
    return Qs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Qs.apply(this, arguments)
}
function sf(e, t) {
    if (e == null)
        return {};
    var r = LS(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function LS(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function lf(e, t) {
    return FS(e) || zS(e, t) || WS(e, t) || US()
}
function US() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function WS(e, t) {
    if (e) {
        if (typeof e == "string")
            return uf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return uf(e, t)
    }
}
function uf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function zS(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t === 0) {
                if (Object(r) !== r)
                    return;
                l = !1
            } else
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function FS(e) {
    if (Array.isArray(e))
        return e
}
var qh = /[ \f\n\r\t\v\u2028\u2029]+/
  , Hh = function(t) {
    var r = t.children
      , n = t.breakAll
      , i = t.style;
    try {
        var a = [];
        ue(r) || (n ? a = r.toString().split("") : a = r.toString().split(qh));
        var o = a.map(function(l) {
            return {
                word: l,
                width: kn(l, i).width
            }
        })
          , s = n ? 0 : kn(" ", i).width;
        return {
            wordsWithComputedWidth: o,
            spaceWidth: s
        }
    } catch {
        return null
    }
}
  , qS = function(t, r, n, i, a) {
    var o = t.maxLines
      , s = t.children
      , l = t.style
      , u = t.breakAll
      , f = F(o)
      , c = s
      , d = function() {
        var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return I.reduce(function(D, B) {
            var R = B.word
              , L = B.width
              , K = D[D.length - 1];
            if (K && (i == null || a || K.width + L + n < Number(i)))
                K.words.push(R),
                K.width += L + n;
            else {
                var G = {
                    words: [R],
                    width: L
                };
                D.push(G)
            }
            return D
        }, [])
    }
      , p = d(r)
      , h = function(I) {
        return I.reduce(function(D, B) {
            return D.width > B.width ? D : B
        })
    };
    if (!f)
        return p;
    for (var m = "…", g = function(I) {
        var D = c.slice(0, I)
          , B = Hh({
            breakAll: u,
            style: l,
            children: D + m
        }).wordsWithComputedWidth
          , R = d(B)
          , L = R.length > o || h(R).width > Number(i);
        return [L, R]
    }, b = 0, _ = c.length - 1, w = 0, S; b <= _ && w <= c.length - 1; ) {
        var y = Math.floor((b + _) / 2)
          , x = y - 1
          , O = g(x)
          , P = lf(O, 2)
          , A = P[0]
          , k = P[1]
          , j = g(y)
          , T = lf(j, 1)
          , N = T[0];
        if (!A && !N && (b = y + 1),
        A && N && (_ = y - 1),
        !A && N) {
            S = k;
            break
        }
        w++
    }
    return S || p
}
  , cf = function(t) {
    var r = ue(t) ? [] : t.toString().split(qh);
    return [{
        words: r
    }]
}
  , HS = function(t) {
    var r = t.width
      , n = t.scaleToFit
      , i = t.children
      , a = t.style
      , o = t.breakAll
      , s = t.maxLines;
    if ((r || n) && !dn.isSsr) {
        var l, u, f = Hh({
            breakAll: o,
            children: i,
            style: a
        });
        if (f) {
            var c = f.wordsWithComputedWidth
              , d = f.spaceWidth;
            l = c,
            u = d
        } else
            return cf(i);
        return qS({
            breakAll: o,
            children: i,
            maxLines: s,
            style: a
        }, l, u, r, n)
    }
    return cf(i)
}
  , ff = "#808080"
  , ma = function(t) {
    var r = t.x
      , n = r === void 0 ? 0 : r
      , i = t.y
      , a = i === void 0 ? 0 : i
      , o = t.lineHeight
      , s = o === void 0 ? "1em" : o
      , l = t.capHeight
      , u = l === void 0 ? "0.71em" : l
      , f = t.scaleToFit
      , c = f === void 0 ? !1 : f
      , d = t.textAnchor
      , p = d === void 0 ? "start" : d
      , h = t.verticalAnchor
      , m = h === void 0 ? "end" : h
      , g = t.fill
      , b = g === void 0 ? ff : g
      , _ = sf(t, RS)
      , w = C.useMemo(function() {
        return HS({
            breakAll: _.breakAll,
            children: _.children,
            maxLines: _.maxLines,
            scaleToFit: c,
            style: _.style,
            width: _.width
        })
    }, [_.breakAll, _.children, _.maxLines, c, _.style, _.width])
      , S = _.dx
      , y = _.dy
      , x = _.angle
      , O = _.className
      , P = _.breakAll
      , A = sf(_, BS);
    if (!Ee(n) || !Ee(a))
        return null;
    var k = n + (F(S) ? S : 0), j = a + (F(y) ? y : 0), T;
    switch (m) {
    case "start":
        T = is("calc(".concat(u, ")"));
        break;
    case "middle":
        T = is("calc(".concat((w.length - 1) / 2, " * -").concat(s, " + (").concat(u, " / 2))"));
        break;
    default:
        T = is("calc(".concat(w.length - 1, " * -").concat(s, ")"));
        break
    }
    var N = [];
    if (c) {
        var E = w[0].width
          , I = _.width;
        N.push("scale(".concat((F(I) ? I / E : 1) / E, ")"))
    }
    return x && N.push("rotate(".concat(x, ", ").concat(k, ", ").concat(j, ")")),
    N.length && (A.transform = N.join(" ")),
    $.createElement("text", Qs({}, oe(A, !0), {
        x: k,
        y: j,
        className: te("recharts-text", O),
        textAnchor: p,
        fill: b.includes("url") ? ff : b
    }), w.map(function(D, B) {
        var R = D.words.join(P ? "" : " ");
        return $.createElement("tspan", {
            x: k,
            dy: B === 0 ? T : s,
            key: "".concat(R, "-").concat(B)
        }, R)
    }))
};
function Yt(e, t) {
    return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}
function VS(e, t) {
    return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
function bu(e) {
    let t, r, n;
    e.length !== 2 ? (t = Yt,
    r = (s, l) => Yt(e(s), l),
    n = (s, l) => e(s) - l) : (t = e === Yt || e === VS ? e : KS,
    r = e,
    n = e);
    function i(s, l, u=0, f=s.length) {
        if (u < f) {
            if (t(l, l) !== 0)
                return f;
            do {
                const c = u + f >>> 1;
                r(s[c], l) < 0 ? u = c + 1 : f = c
            } while (u < f)
        }
        return u
    }
    function a(s, l, u=0, f=s.length) {
        if (u < f) {
            if (t(l, l) !== 0)
                return f;
            do {
                const c = u + f >>> 1;
                r(s[c], l) <= 0 ? u = c + 1 : f = c
            } while (u < f)
        }
        return u
    }
    function o(s, l, u=0, f=s.length) {
        const c = i(s, l, u, f - 1);
        return c > u && n(s[c - 1], l) > -n(s[c], l) ? c - 1 : c
    }
    return {
        left: i,
        center: o,
        right: a
    }
}
function KS() {
    return 0
}
function Vh(e) {
    return e === null ? NaN : +e
}
function *XS(e, t) {
    for (let r of e)
        r != null && (r = +r) >= r && (yield r)
}
const GS = bu(Yt)
  , $i = GS.right;
bu(Vh).center;
class df extends Map {
    constructor(t, r=JS) {
        if (super(),
        Object.defineProperties(this, {
            _intern: {
                value: new Map
            },
            _key: {
                value: r
            }
        }),
        t != null)
            for (const [n,i] of t)
                this.set(n, i)
    }
    get(t) {
        return super.get(pf(this, t))
    }
    has(t) {
        return super.has(pf(this, t))
    }
    set(t, r) {
        return super.set(YS(this, t), r)
    }
    delete(t) {
        return super.delete(ZS(this, t))
    }
}
function pf({_intern: e, _key: t}, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : r
}
function YS({_intern: e, _key: t}, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : (e.set(n, r),
    r)
}
function ZS({_intern: e, _key: t}, r) {
    const n = t(r);
    return e.has(n) && (r = e.get(n),
    e.delete(n)),
    r
}
function JS(e) {
    return e !== null && typeof e == "object" ? e.valueOf() : e
}
function QS(e=Yt) {
    if (e === Yt)
        return Kh;
    if (typeof e != "function")
        throw new TypeError("compare is not a function");
    return (t, r) => {
        const n = e(t, r);
        return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0)
    }
}
function Kh(e, t) {
    return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0)
}
const eO = Math.sqrt(50)
  , tO = Math.sqrt(10)
  , rO = Math.sqrt(2);
function va(e, t, r) {
    const n = (t - e) / Math.max(0, r)
      , i = Math.floor(Math.log10(n))
      , a = n / Math.pow(10, i)
      , o = a >= eO ? 10 : a >= tO ? 5 : a >= rO ? 2 : 1;
    let s, l, u;
    return i < 0 ? (u = Math.pow(10, -i) / o,
    s = Math.round(e * u),
    l = Math.round(t * u),
    s / u < e && ++s,
    l / u > t && --l,
    u = -u) : (u = Math.pow(10, i) * o,
    s = Math.round(e / u),
    l = Math.round(t / u),
    s * u < e && ++s,
    l * u > t && --l),
    l < s && .5 <= r && r < 2 ? va(e, t, r * 2) : [s, l, u]
}
function el(e, t, r) {
    if (t = +t,
    e = +e,
    r = +r,
    !(r > 0))
        return [];
    if (e === t)
        return [e];
    const n = t < e
      , [i,a,o] = n ? va(t, e, r) : va(e, t, r);
    if (!(a >= i))
        return [];
    const s = a - i + 1
      , l = new Array(s);
    if (n)
        if (o < 0)
            for (let u = 0; u < s; ++u)
                l[u] = (a - u) / -o;
        else
            for (let u = 0; u < s; ++u)
                l[u] = (a - u) * o;
    else if (o < 0)
        for (let u = 0; u < s; ++u)
            l[u] = (i + u) / -o;
    else
        for (let u = 0; u < s; ++u)
            l[u] = (i + u) * o;
    return l
}
function tl(e, t, r) {
    return t = +t,
    e = +e,
    r = +r,
    va(e, t, r)[2]
}
function rl(e, t, r) {
    t = +t,
    e = +e,
    r = +r;
    const n = t < e
      , i = n ? tl(t, e, r) : tl(e, t, r);
    return (n ? -1 : 1) * (i < 0 ? 1 / -i : i)
}
function hf(e, t) {
    let r;
    for (const n of e)
        n != null && (r < n || r === void 0 && n >= n) && (r = n);
    return r
}
function mf(e, t) {
    let r;
    for (const n of e)
        n != null && (r > n || r === void 0 && n >= n) && (r = n);
    return r
}
function Xh(e, t, r=0, n=1 / 0, i) {
    if (t = Math.floor(t),
    r = Math.floor(Math.max(0, r)),
    n = Math.floor(Math.min(e.length - 1, n)),
    !(r <= t && t <= n))
        return e;
    for (i = i === void 0 ? Kh : QS(i); n > r; ) {
        if (n - r > 600) {
            const l = n - r + 1
              , u = t - r + 1
              , f = Math.log(l)
              , c = .5 * Math.exp(2 * f / 3)
              , d = .5 * Math.sqrt(f * c * (l - c) / l) * (u - l / 2 < 0 ? -1 : 1)
              , p = Math.max(r, Math.floor(t - u * c / l + d))
              , h = Math.min(n, Math.floor(t + (l - u) * c / l + d));
            Xh(e, t, p, h, i)
        }
        const a = e[t];
        let o = r
          , s = n;
        for (wn(e, r, t),
        i(e[n], a) > 0 && wn(e, r, n); o < s; ) {
            for (wn(e, o, s),
            ++o,
            --s; i(e[o], a) < 0; )
                ++o;
            for (; i(e[s], a) > 0; )
                --s
        }
        i(e[r], a) === 0 ? wn(e, r, s) : (++s,
        wn(e, s, n)),
        s <= t && (r = s + 1),
        t <= s && (n = s - 1)
    }
    return e
}
function wn(e, t, r) {
    const n = e[t];
    e[t] = e[r],
    e[r] = n
}
function nO(e, t, r) {
    if (e = Float64Array.from(XS(e)),
    !(!(n = e.length) || isNaN(t = +t))) {
        if (t <= 0 || n < 2)
            return mf(e);
        if (t >= 1)
            return hf(e);
        var n, i = (n - 1) * t, a = Math.floor(i), o = hf(Xh(e, a).subarray(0, a + 1)), s = mf(e.subarray(a + 1));
        return o + (s - o) * (i - a)
    }
}
function iO(e, t, r=Vh) {
    if (!(!(n = e.length) || isNaN(t = +t))) {
        if (t <= 0 || n < 2)
            return +r(e[0], 0, e);
        if (t >= 1)
            return +r(e[n - 1], n - 1, e);
        var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
        return o + (s - o) * (i - a)
    }
}
function aO(e, t, r) {
    e = +e,
    t = +t,
    r = (i = arguments.length) < 2 ? (t = e,
    e = 0,
    1) : i < 3 ? 1 : +r;
    for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
        a[n] = e + n * r;
    return a
}
function ct(e, t) {
    switch (arguments.length) {
    case 0:
        break;
    case 1:
        this.range(e);
        break;
    default:
        this.range(t).domain(e);
        break
    }
    return this
}
function qt(e, t) {
    switch (arguments.length) {
    case 0:
        break;
    case 1:
        {
            typeof e == "function" ? this.interpolator(e) : this.range(e);
            break
        }
    default:
        {
            this.domain(e),
            typeof t == "function" ? this.interpolator(t) : this.range(t);
            break
        }
    }
    return this
}
const nl = Symbol("implicit");
function xu() {
    var e = new df
      , t = []
      , r = []
      , n = nl;
    function i(a) {
        let o = e.get(a);
        if (o === void 0) {
            if (n !== nl)
                return n;
            e.set(a, o = t.push(a) - 1)
        }
        return r[o % r.length]
    }
    return i.domain = function(a) {
        if (!arguments.length)
            return t.slice();
        t = [],
        e = new df;
        for (const o of a)
            e.has(o) || e.set(o, t.push(o) - 1);
        return i
    }
    ,
    i.range = function(a) {
        return arguments.length ? (r = Array.from(a),
        i) : r.slice()
    }
    ,
    i.unknown = function(a) {
        return arguments.length ? (n = a,
        i) : n
    }
    ,
    i.copy = function() {
        return xu(t, r).unknown(n)
    }
    ,
    ct.apply(i, arguments),
    i
}
function Hn() {
    var e = xu().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, s = !1, l = 0, u = 0, f = .5;
    delete e.unknown;
    function c() {
        var d = t().length
          , p = i < n
          , h = p ? i : n
          , m = p ? n : i;
        a = (m - h) / Math.max(1, d - l + u * 2),
        s && (a = Math.floor(a)),
        h += (m - h - a * (d - l)) * f,
        o = a * (1 - l),
        s && (h = Math.round(h),
        o = Math.round(o));
        var g = aO(d).map(function(b) {
            return h + a * b
        });
        return r(p ? g.reverse() : g)
    }
    return e.domain = function(d) {
        return arguments.length ? (t(d),
        c()) : t()
    }
    ,
    e.range = function(d) {
        return arguments.length ? ([n,i] = d,
        n = +n,
        i = +i,
        c()) : [n, i]
    }
    ,
    e.rangeRound = function(d) {
        return [n,i] = d,
        n = +n,
        i = +i,
        s = !0,
        c()
    }
    ,
    e.bandwidth = function() {
        return o
    }
    ,
    e.step = function() {
        return a
    }
    ,
    e.round = function(d) {
        return arguments.length ? (s = !!d,
        c()) : s
    }
    ,
    e.padding = function(d) {
        return arguments.length ? (l = Math.min(1, u = +d),
        c()) : l
    }
    ,
    e.paddingInner = function(d) {
        return arguments.length ? (l = Math.min(1, d),
        c()) : l
    }
    ,
    e.paddingOuter = function(d) {
        return arguments.length ? (u = +d,
        c()) : u
    }
    ,
    e.align = function(d) {
        return arguments.length ? (f = Math.max(0, Math.min(1, d)),
        c()) : f
    }
    ,
    e.copy = function() {
        return Hn(t(), [n, i]).round(s).paddingInner(l).paddingOuter(u).align(f)
    }
    ,
    ct.apply(c(), arguments)
}
function Gh(e) {
    var t = e.copy;
    return e.padding = e.paddingOuter,
    delete e.paddingInner,
    delete e.paddingOuter,
    e.copy = function() {
        return Gh(t())
    }
    ,
    e
}
function Mn() {
    return Gh(Hn.apply(null, arguments).paddingInner(1))
}
function wu(e, t, r) {
    e.prototype = t.prototype = r,
    r.constructor = e
}
function Yh(e, t) {
    var r = Object.create(e.prototype);
    for (var n in t)
        r[n] = t[n];
    return r
}
function Ci() {}
var Vn = .7
  , ya = 1 / Vn
  , Br = "\\s*([+-]?\\d+)\\s*"
  , Kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*"
  , Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
  , oO = /^#([0-9a-f]{3,8})$/
  , sO = new RegExp(`^rgb\\(${Br},${Br},${Br}\\)$`)
  , lO = new RegExp(`^rgb\\(${Ct},${Ct},${Ct}\\)$`)
  , uO = new RegExp(`^rgba\\(${Br},${Br},${Br},${Kn}\\)$`)
  , cO = new RegExp(`^rgba\\(${Ct},${Ct},${Ct},${Kn}\\)$`)
  , fO = new RegExp(`^hsl\\(${Kn},${Ct},${Ct}\\)$`)
  , dO = new RegExp(`^hsla\\(${Kn},${Ct},${Ct},${Kn}\\)$`)
  , vf = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
wu(Ci, Xn, {
    copy(e) {
        return Object.assign(new this.constructor, this, e)
    },
    displayable() {
        return this.rgb().displayable()
    },
    hex: yf,
    formatHex: yf,
    formatHex8: pO,
    formatHsl: hO,
    formatRgb: gf,
    toString: gf
});
function yf() {
    return this.rgb().formatHex()
}
function pO() {
    return this.rgb().formatHex8()
}
function hO() {
    return Zh(this).formatHsl()
}
function gf() {
    return this.rgb().formatRgb()
}
function Xn(e) {
    var t, r;
    return e = (e + "").trim().toLowerCase(),
    (t = oO.exec(e)) ? (r = t[1].length,
    t = parseInt(t[1], 16),
    r === 6 ? bf(t) : r === 3 ? new Ge(t >> 8 & 15 | t >> 4 & 240,t >> 4 & 15 | t & 240,(t & 15) << 4 | t & 15,1) : r === 8 ? Wi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Wi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sO.exec(e)) ? new Ge(t[1],t[2],t[3],1) : (t = lO.exec(e)) ? new Ge(t[1] * 255 / 100,t[2] * 255 / 100,t[3] * 255 / 100,1) : (t = uO.exec(e)) ? Wi(t[1], t[2], t[3], t[4]) : (t = cO.exec(e)) ? Wi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = fO.exec(e)) ? _f(t[1], t[2] / 100, t[3] / 100, 1) : (t = dO.exec(e)) ? _f(t[1], t[2] / 100, t[3] / 100, t[4]) : vf.hasOwnProperty(e) ? bf(vf[e]) : e === "transparent" ? new Ge(NaN,NaN,NaN,0) : null
}
function bf(e) {
    return new Ge(e >> 16 & 255,e >> 8 & 255,e & 255,1)
}
function Wi(e, t, r, n) {
    return n <= 0 && (e = t = r = NaN),
    new Ge(e,t,r,n)
}
function mO(e) {
    return e instanceof Ci || (e = Xn(e)),
    e ? (e = e.rgb(),
    new Ge(e.r,e.g,e.b,e.opacity)) : new Ge
}
function il(e, t, r, n) {
    return arguments.length === 1 ? mO(e) : new Ge(e,t,r,n ?? 1)
}
function Ge(e, t, r, n) {
    this.r = +e,
    this.g = +t,
    this.b = +r,
    this.opacity = +n
}
wu(Ge, il, Yh(Ci, {
    brighter(e) {
        return e = e == null ? ya : Math.pow(ya, e),
        new Ge(this.r * e,this.g * e,this.b * e,this.opacity)
    },
    darker(e) {
        return e = e == null ? Vn : Math.pow(Vn, e),
        new Ge(this.r * e,this.g * e,this.b * e,this.opacity)
    },
    rgb() {
        return this
    },
    clamp() {
        return new Ge(mr(this.r),mr(this.g),mr(this.b),ga(this.opacity))
    },
    displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: xf,
    formatHex: xf,
    formatHex8: vO,
    formatRgb: wf,
    toString: wf
}));
function xf() {
    return `#${cr(this.r)}${cr(this.g)}${cr(this.b)}`
}
function vO() {
    return `#${cr(this.r)}${cr(this.g)}${cr(this.b)}${cr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
}
function wf() {
    const e = ga(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${mr(this.r)}, ${mr(this.g)}, ${mr(this.b)}${e === 1 ? ")" : `, ${e})`}`
}
function ga(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}
function mr(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0))
}
function cr(e) {
    return e = mr(e),
    (e < 16 ? "0" : "") + e.toString(16)
}
function _f(e, t, r, n) {
    return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN),
    new vt(e,t,r,n)
}
function Zh(e) {
    if (e instanceof vt)
        return new vt(e.h,e.s,e.l,e.opacity);
    if (e instanceof Ci || (e = Xn(e)),
    !e)
        return new vt;
    if (e instanceof vt)
        return e;
    e = e.rgb();
    var t = e.r / 255
      , r = e.g / 255
      , n = e.b / 255
      , i = Math.min(t, r, n)
      , a = Math.max(t, r, n)
      , o = NaN
      , s = a - i
      , l = (a + i) / 2;
    return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4,
    s /= l < .5 ? a + i : 2 - a - i,
    o *= 60) : s = l > 0 && l < 1 ? 0 : o,
    new vt(o,s,l,e.opacity)
}
function yO(e, t, r, n) {
    return arguments.length === 1 ? Zh(e) : new vt(e,t,r,n ?? 1)
}
function vt(e, t, r, n) {
    this.h = +e,
    this.s = +t,
    this.l = +r,
    this.opacity = +n
}
wu(vt, yO, Yh(Ci, {
    brighter(e) {
        return e = e == null ? ya : Math.pow(ya, e),
        new vt(this.h,this.s,this.l * e,this.opacity)
    },
    darker(e) {
        return e = e == null ? Vn : Math.pow(Vn, e),
        new vt(this.h,this.s,this.l * e,this.opacity)
    },
    rgb() {
        var e = this.h % 360 + (this.h < 0) * 360
          , t = isNaN(e) || isNaN(this.s) ? 0 : this.s
          , r = this.l
          , n = r + (r < .5 ? r : 1 - r) * t
          , i = 2 * r - n;
        return new Ge(as(e >= 240 ? e - 240 : e + 120, i, n),as(e, i, n),as(e < 120 ? e + 240 : e - 120, i, n),this.opacity)
    },
    clamp() {
        return new vt(Sf(this.h),zi(this.s),zi(this.l),ga(this.opacity))
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl() {
        const e = ga(this.opacity);
        return `${e === 1 ? "hsl(" : "hsla("}${Sf(this.h)}, ${zi(this.s) * 100}%, ${zi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`
    }
}));
function Sf(e) {
    return e = (e || 0) % 360,
    e < 0 ? e + 360 : e
}
function zi(e) {
    return Math.max(0, Math.min(1, e || 0))
}
function as(e, t, r) {
    return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255
}
const _u = e => () => e;
function gO(e, t) {
    return function(r) {
        return e + r * t
    }
}
function bO(e, t, r) {
    return e = Math.pow(e, r),
    t = Math.pow(t, r) - e,
    r = 1 / r,
    function(n) {
        return Math.pow(e + n * t, r)
    }
}
function xO(e) {
    return (e = +e) == 1 ? Jh : function(t, r) {
        return r - t ? bO(t, r, e) : _u(isNaN(t) ? r : t)
    }
}
function Jh(e, t) {
    var r = t - e;
    return r ? gO(e, r) : _u(isNaN(e) ? t : e)
}
const Of = function e(t) {
    var r = xO(t);
    function n(i, a) {
        var o = r((i = il(i)).r, (a = il(a)).r)
          , s = r(i.g, a.g)
          , l = r(i.b, a.b)
          , u = Jh(i.opacity, a.opacity);
        return function(f) {
            return i.r = o(f),
            i.g = s(f),
            i.b = l(f),
            i.opacity = u(f),
            i + ""
        }
    }
    return n.gamma = e,
    n
}(1);
function wO(e, t) {
    t || (t = []);
    var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
    return function(a) {
        for (i = 0; i < r; ++i)
            n[i] = e[i] * (1 - a) + t[i] * a;
        return n
    }
}
function _O(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView)
}
function SO(e, t) {
    var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
    for (o = 0; o < n; ++o)
        i[o] = pn(e[o], t[o]);
    for (; o < r; ++o)
        a[o] = t[o];
    return function(s) {
        for (o = 0; o < n; ++o)
            a[o] = i[o](s);
        return a
    }
}
function OO(e, t) {
    var r = new Date;
    return e = +e,
    t = +t,
    function(n) {
        return r.setTime(e * (1 - n) + t * n),
        r
    }
}
function ba(e, t) {
    return e = +e,
    t = +t,
    function(r) {
        return e * (1 - r) + t * r
    }
}
function PO(e, t) {
    var r = {}, n = {}, i;
    (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
    for (i in t)
        i in e ? r[i] = pn(e[i], t[i]) : n[i] = t[i];
    return function(a) {
        for (i in r)
            n[i] = r[i](a);
        return n
    }
}
var al = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
  , os = new RegExp(al.source,"g");
function AO(e) {
    return function() {
        return e
    }
}
function jO(e) {
    return function(t) {
        return e(t) + ""
    }
}
function $O(e, t) {
    var r = al.lastIndex = os.lastIndex = 0, n, i, a, o = -1, s = [], l = [];
    for (e = e + "",
    t = t + ""; (n = al.exec(e)) && (i = os.exec(t)); )
        (a = i.index) > r && (a = t.slice(r, a),
        s[o] ? s[o] += a : s[++o] = a),
        (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null,
        l.push({
            i: o,
            x: ba(n, i)
        })),
        r = os.lastIndex;
    return r < t.length && (a = t.slice(r),
    s[o] ? s[o] += a : s[++o] = a),
    s.length < 2 ? l[0] ? jO(l[0].x) : AO(t) : (t = l.length,
    function(u) {
        for (var f = 0, c; f < t; ++f)
            s[(c = l[f]).i] = c.x(u);
        return s.join("")
    }
    )
}
function pn(e, t) {
    var r = typeof t, n;
    return t == null || r === "boolean" ? _u(t) : (r === "number" ? ba : r === "string" ? (n = Xn(t)) ? (t = n,
    Of) : $O : t instanceof Xn ? Of : t instanceof Date ? OO : _O(t) ? wO : Array.isArray(t) ? SO : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? PO : ba)(e, t)
}
function Su(e, t) {
    return e = +e,
    t = +t,
    function(r) {
        return Math.round(e * (1 - r) + t * r)
    }
}
function CO(e, t) {
    t === void 0 && (t = e,
    e = pn);
    for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; )
        a[r] = e(i, i = t[++r]);
    return function(o) {
        var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
        return a[s](o - s)
    }
}
function TO(e) {
    return function() {
        return e
    }
}
function xa(e) {
    return +e
}
var Pf = [0, 1];
function Ve(e) {
    return e
}
function ol(e, t) {
    return (t -= e = +e) ? function(r) {
        return (r - e) / t
    }
    : TO(isNaN(t) ? NaN : .5)
}
function EO(e, t) {
    var r;
    return e > t && (r = e,
    e = t,
    t = r),
    function(n) {
        return Math.max(e, Math.min(t, n))
    }
}
function kO(e, t, r) {
    var n = e[0]
      , i = e[1]
      , a = t[0]
      , o = t[1];
    return i < n ? (n = ol(i, n),
    a = r(o, a)) : (n = ol(n, i),
    a = r(a, o)),
    function(s) {
        return a(n(s))
    }
}
function MO(e, t, r) {
    var n = Math.min(e.length, t.length) - 1
      , i = new Array(n)
      , a = new Array(n)
      , o = -1;
    for (e[n] < e[0] && (e = e.slice().reverse(),
    t = t.slice().reverse()); ++o < n; )
        i[o] = ol(e[o], e[o + 1]),
        a[o] = r(t[o], t[o + 1]);
    return function(s) {
        var l = $i(e, s, 1, n) - 1;
        return a[l](i[l](s))
    }
}
function Ti(e, t) {
    return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())
}
function wo() {
    var e = Pf, t = Pf, r = pn, n, i, a, o = Ve, s, l, u;
    function f() {
        var d = Math.min(e.length, t.length);
        return o !== Ve && (o = EO(e[0], e[d - 1])),
        s = d > 2 ? MO : kO,
        l = u = null,
        c
    }
    function c(d) {
        return d == null || isNaN(d = +d) ? a : (l || (l = s(e.map(n), t, r)))(n(o(d)))
    }
    return c.invert = function(d) {
        return o(i((u || (u = s(t, e.map(n), ba)))(d)))
    }
    ,
    c.domain = function(d) {
        return arguments.length ? (e = Array.from(d, xa),
        f()) : e.slice()
    }
    ,
    c.range = function(d) {
        return arguments.length ? (t = Array.from(d),
        f()) : t.slice()
    }
    ,
    c.rangeRound = function(d) {
        return t = Array.from(d),
        r = Su,
        f()
    }
    ,
    c.clamp = function(d) {
        return arguments.length ? (o = d ? !0 : Ve,
        f()) : o !== Ve
    }
    ,
    c.interpolate = function(d) {
        return arguments.length ? (r = d,
        f()) : r
    }
    ,
    c.unknown = function(d) {
        return arguments.length ? (a = d,
        c) : a
    }
    ,
    function(d, p) {
        return n = d,
        i = p,
        f()
    }
}
function Ou() {
    return wo()(Ve, Ve)
}
function NO(e) {
    return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10)
}
function wa(e, t) {
    if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
        return null;
    var r, n = e.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)]
}
function Hr(e) {
    return e = wa(Math.abs(e)),
    e ? e[1] : NaN
}
function IO(e, t) {
    return function(r, n) {
        for (var i = r.length, a = [], o = 0, s = e[0], l = 0; i > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)),
        a.push(r.substring(i -= s, i + s)),
        !((l += s + 1) > n)); )
            s = e[o = (o + 1) % e.length];
        return a.reverse().join(t)
    }
}
function DO(e) {
    return function(t) {
        return t.replace(/[0-9]/g, function(r) {
            return e[+r]
        })
    }
}
var RO = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Gn(e) {
    if (!(t = RO.exec(e)))
        throw new Error("invalid format: " + e);
    var t;
    return new Pu({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
    })
}
Gn.prototype = Pu.prototype;
function Pu(e) {
    this.fill = e.fill === void 0 ? " " : e.fill + "",
    this.align = e.align === void 0 ? ">" : e.align + "",
    this.sign = e.sign === void 0 ? "-" : e.sign + "",
    this.symbol = e.symbol === void 0 ? "" : e.symbol + "",
    this.zero = !!e.zero,
    this.width = e.width === void 0 ? void 0 : +e.width,
    this.comma = !!e.comma,
    this.precision = e.precision === void 0 ? void 0 : +e.precision,
    this.trim = !!e.trim,
    this.type = e.type === void 0 ? "" : e.type + ""
}
Pu.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
}
;
function BO(e) {
    e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
        switch (e[r]) {
        case ".":
            n = i = r;
            break;
        case "0":
            n === 0 && (n = r),
            i = r;
            break;
        default:
            if (!+e[r])
                break e;
            n > 0 && (n = 0);
            break
        }
    return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e
}
var Qh;
function LO(e, t) {
    var r = wa(e, t);
    if (!r)
        return e + "";
    var n = r[0]
      , i = r[1]
      , a = i - (Qh = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1
      , o = n.length;
    return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + wa(e, Math.max(0, t + a - 1))[0]
}
function Af(e, t) {
    var r = wa(e, t);
    if (!r)
        return e + "";
    var n = r[0]
      , i = r[1];
    return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0")
}
const jf = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: e => Math.round(e).toString(2),
    c: e => e + "",
    d: NO,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: e => Math.round(e).toString(8),
    p: (e, t) => Af(e * 100, t),
    r: Af,
    s: LO,
    X: e => Math.round(e).toString(16).toUpperCase(),
    x: e => Math.round(e).toString(16)
};
function $f(e) {
    return e
}
var Cf = Array.prototype.map
  , Tf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function UO(e) {
    var t = e.grouping === void 0 || e.thousands === void 0 ? $f : IO(Cf.call(e.grouping, Number), e.thousands + "")
      , r = e.currency === void 0 ? "" : e.currency[0] + ""
      , n = e.currency === void 0 ? "" : e.currency[1] + ""
      , i = e.decimal === void 0 ? "." : e.decimal + ""
      , a = e.numerals === void 0 ? $f : DO(Cf.call(e.numerals, String))
      , o = e.percent === void 0 ? "%" : e.percent + ""
      , s = e.minus === void 0 ? "−" : e.minus + ""
      , l = e.nan === void 0 ? "NaN" : e.nan + "";
    function u(c) {
        c = Gn(c);
        var d = c.fill
          , p = c.align
          , h = c.sign
          , m = c.symbol
          , g = c.zero
          , b = c.width
          , _ = c.comma
          , w = c.precision
          , S = c.trim
          , y = c.type;
        y === "n" ? (_ = !0,
        y = "g") : jf[y] || (w === void 0 && (w = 12),
        S = !0,
        y = "g"),
        (g || d === "0" && p === "=") && (g = !0,
        d = "0",
        p = "=");
        var x = m === "$" ? r : m === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""
          , O = m === "$" ? n : /[%p]/.test(y) ? o : ""
          , P = jf[y]
          , A = /[defgprs%]/.test(y);
        w = w === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
        function k(j) {
            var T = x, N = O, E, I, D;
            if (y === "c")
                N = P(j) + N,
                j = "";
            else {
                j = +j;
                var B = j < 0 || 1 / j < 0;
                if (j = isNaN(j) ? l : P(Math.abs(j), w),
                S && (j = BO(j)),
                B && +j == 0 && h !== "+" && (B = !1),
                T = (B ? h === "(" ? h : s : h === "-" || h === "(" ? "" : h) + T,
                N = (y === "s" ? Tf[8 + Qh / 3] : "") + N + (B && h === "(" ? ")" : ""),
                A) {
                    for (E = -1,
                    I = j.length; ++E < I; )
                        if (D = j.charCodeAt(E),
                        48 > D || D > 57) {
                            N = (D === 46 ? i + j.slice(E + 1) : j.slice(E)) + N,
                            j = j.slice(0, E);
                            break
                        }
                }
            }
            _ && !g && (j = t(j, 1 / 0));
            var R = T.length + j.length + N.length
              , L = R < b ? new Array(b - R + 1).join(d) : "";
            switch (_ && g && (j = t(L + j, L.length ? b - N.length : 1 / 0),
            L = ""),
            p) {
            case "<":
                j = T + j + N + L;
                break;
            case "=":
                j = T + L + j + N;
                break;
            case "^":
                j = L.slice(0, R = L.length >> 1) + T + j + N + L.slice(R);
                break;
            default:
                j = L + T + j + N;
                break
            }
            return a(j)
        }
        return k.toString = function() {
            return c + ""
        }
        ,
        k
    }
    function f(c, d) {
        var p = u((c = Gn(c),
        c.type = "f",
        c))
          , h = Math.max(-8, Math.min(8, Math.floor(Hr(d) / 3))) * 3
          , m = Math.pow(10, -h)
          , g = Tf[8 + h / 3];
        return function(b) {
            return p(m * b) + g
        }
    }
    return {
        format: u,
        formatPrefix: f
    }
}
var Fi, Au, em;
WO({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});
function WO(e) {
    return Fi = UO(e),
    Au = Fi.format,
    em = Fi.formatPrefix,
    Fi
}
function zO(e) {
    return Math.max(0, -Hr(Math.abs(e)))
}
function FO(e, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Hr(t) / 3))) * 3 - Hr(Math.abs(e)))
}
function qO(e, t) {
    return e = Math.abs(e),
    t = Math.abs(t) - e,
    Math.max(0, Hr(t) - Hr(e)) + 1
}
function tm(e, t, r, n) {
    var i = rl(e, t, r), a;
    switch (n = Gn(n ?? ",f"),
    n.type) {
    case "s":
        {
            var o = Math.max(Math.abs(e), Math.abs(t));
            return n.precision == null && !isNaN(a = FO(i, o)) && (n.precision = a),
            em(n, o)
        }
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
        {
            n.precision == null && !isNaN(a = qO(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
            break
        }
    case "f":
    case "%":
        {
            n.precision == null && !isNaN(a = zO(i)) && (n.precision = a - (n.type === "%") * 2);
            break
        }
    }
    return Au(n)
}
function Qt(e) {
    var t = e.domain;
    return e.ticks = function(r) {
        var n = t();
        return el(n[0], n[n.length - 1], r ?? 10)
    }
    ,
    e.tickFormat = function(r, n) {
        var i = t();
        return tm(i[0], i[i.length - 1], r ?? 10, n)
    }
    ,
    e.nice = function(r) {
        r == null && (r = 10);
        var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], l, u, f = 10;
        for (s < o && (u = o,
        o = s,
        s = u,
        u = i,
        i = a,
        a = u); f-- > 0; ) {
            if (u = tl(o, s, r),
            u === l)
                return n[i] = o,
                n[a] = s,
                t(n);
            if (u > 0)
                o = Math.floor(o / u) * u,
                s = Math.ceil(s / u) * u;
            else if (u < 0)
                o = Math.ceil(o * u) / u,
                s = Math.floor(s * u) / u;
            else
                break;
            l = u
        }
        return e
    }
    ,
    e
}
function _a() {
    var e = Ou();
    return e.copy = function() {
        return Ti(e, _a())
    }
    ,
    ct.apply(e, arguments),
    Qt(e)
}
function rm(e) {
    var t;
    function r(n) {
        return n == null || isNaN(n = +n) ? t : n
    }
    return r.invert = r,
    r.domain = r.range = function(n) {
        return arguments.length ? (e = Array.from(n, xa),
        r) : e.slice()
    }
    ,
    r.unknown = function(n) {
        return arguments.length ? (t = n,
        r) : t
    }
    ,
    r.copy = function() {
        return rm(e).unknown(t)
    }
    ,
    e = arguments.length ? Array.from(e, xa) : [0, 1],
    Qt(r)
}
function nm(e, t) {
    e = e.slice();
    var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
    return a < i && (o = r,
    r = n,
    n = o,
    o = i,
    i = a,
    a = o),
    e[r] = t.floor(i),
    e[n] = t.ceil(a),
    e
}
function Ef(e) {
    return Math.log(e)
}
function kf(e) {
    return Math.exp(e)
}
function HO(e) {
    return -Math.log(-e)
}
function VO(e) {
    return -Math.exp(-e)
}
function KO(e) {
    return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e
}
function XO(e) {
    return e === 10 ? KO : e === Math.E ? Math.exp : t => Math.pow(e, t)
}
function GO(e) {
    return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e),
    t => Math.log(t) / e)
}
function Mf(e) {
    return (t, r) => -e(-t, r)
}
function ju(e) {
    const t = e(Ef, kf)
      , r = t.domain;
    let n = 10, i, a;
    function o() {
        return i = GO(n),
        a = XO(n),
        r()[0] < 0 ? (i = Mf(i),
        a = Mf(a),
        e(HO, VO)) : e(Ef, kf),
        t
    }
    return t.base = function(s) {
        return arguments.length ? (n = +s,
        o()) : n
    }
    ,
    t.domain = function(s) {
        return arguments.length ? (r(s),
        o()) : r()
    }
    ,
    t.ticks = s => {
        const l = r();
        let u = l[0]
          , f = l[l.length - 1];
        const c = f < u;
        c && ([u,f] = [f, u]);
        let d = i(u), p = i(f), h, m;
        const g = s == null ? 10 : +s;
        let b = [];
        if (!(n % 1) && p - d < g) {
            if (d = Math.floor(d),
            p = Math.ceil(p),
            u > 0) {
                for (; d <= p; ++d)
                    for (h = 1; h < n; ++h)
                        if (m = d < 0 ? h / a(-d) : h * a(d),
                        !(m < u)) {
                            if (m > f)
                                break;
                            b.push(m)
                        }
            } else
                for (; d <= p; ++d)
                    for (h = n - 1; h >= 1; --h)
                        if (m = d > 0 ? h / a(-d) : h * a(d),
                        !(m < u)) {
                            if (m > f)
                                break;
                            b.push(m)
                        }
            b.length * 2 < g && (b = el(u, f, g))
        } else
            b = el(d, p, Math.min(p - d, g)).map(a);
        return c ? b.reverse() : b
    }
    ,
    t.tickFormat = (s, l) => {
        if (s == null && (s = 10),
        l == null && (l = n === 10 ? "s" : ","),
        typeof l != "function" && (!(n % 1) && (l = Gn(l)).precision == null && (l.trim = !0),
        l = Au(l)),
        s === 1 / 0)
            return l;
        const u = Math.max(1, n * s / t.ticks().length);
        return f => {
            let c = f / a(Math.round(i(f)));
            return c * n < n - .5 && (c *= n),
            c <= u ? l(f) : ""
        }
    }
    ,
    t.nice = () => r(nm(r(), {
        floor: s => a(Math.floor(i(s))),
        ceil: s => a(Math.ceil(i(s)))
    })),
    t
}
function im() {
    const e = ju(wo()).domain([1, 10]);
    return e.copy = () => Ti(e, im()).base(e.base()),
    ct.apply(e, arguments),
    e
}
function Nf(e) {
    return function(t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e))
    }
}
function If(e) {
    return function(t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e
    }
}
function $u(e) {
    var t = 1
      , r = e(Nf(t), If(t));
    return r.constant = function(n) {
        return arguments.length ? e(Nf(t = +n), If(t)) : t
    }
    ,
    Qt(r)
}
function am() {
    var e = $u(wo());
    return e.copy = function() {
        return Ti(e, am()).constant(e.constant())
    }
    ,
    ct.apply(e, arguments)
}
function Df(e) {
    return function(t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
    }
}
function YO(e) {
    return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e)
}
function ZO(e) {
    return e < 0 ? -e * e : e * e
}
function Cu(e) {
    var t = e(Ve, Ve)
      , r = 1;
    function n() {
        return r === 1 ? e(Ve, Ve) : r === .5 ? e(YO, ZO) : e(Df(r), Df(1 / r))
    }
    return t.exponent = function(i) {
        return arguments.length ? (r = +i,
        n()) : r
    }
    ,
    Qt(t)
}
function Tu() {
    var e = Cu(wo());
    return e.copy = function() {
        return Ti(e, Tu()).exponent(e.exponent())
    }
    ,
    ct.apply(e, arguments),
    e
}
function JO() {
    return Tu.apply(null, arguments).exponent(.5)
}
function Rf(e) {
    return Math.sign(e) * e * e
}
function QO(e) {
    return Math.sign(e) * Math.sqrt(Math.abs(e))
}
function om() {
    var e = Ou(), t = [0, 1], r = !1, n;
    function i(a) {
        var o = QO(e(a));
        return isNaN(o) ? n : r ? Math.round(o) : o
    }
    return i.invert = function(a) {
        return e.invert(Rf(a))
    }
    ,
    i.domain = function(a) {
        return arguments.length ? (e.domain(a),
        i) : e.domain()
    }
    ,
    i.range = function(a) {
        return arguments.length ? (e.range((t = Array.from(a, xa)).map(Rf)),
        i) : t.slice()
    }
    ,
    i.rangeRound = function(a) {
        return i.range(a).round(!0)
    }
    ,
    i.round = function(a) {
        return arguments.length ? (r = !!a,
        i) : r
    }
    ,
    i.clamp = function(a) {
        return arguments.length ? (e.clamp(a),
        i) : e.clamp()
    }
    ,
    i.unknown = function(a) {
        return arguments.length ? (n = a,
        i) : n
    }
    ,
    i.copy = function() {
        return om(e.domain(), t).round(r).clamp(e.clamp()).unknown(n)
    }
    ,
    ct.apply(i, arguments),
    Qt(i)
}
function sm() {
    var e = [], t = [], r = [], n;
    function i() {
        var o = 0
          , s = Math.max(1, t.length);
        for (r = new Array(s - 1); ++o < s; )
            r[o - 1] = iO(e, o / s);
        return a
    }
    function a(o) {
        return o == null || isNaN(o = +o) ? n : t[$i(r, o)]
    }
    return a.invertExtent = function(o) {
        var s = t.indexOf(o);
        return s < 0 ? [NaN, NaN] : [s > 0 ? r[s - 1] : e[0], s < r.length ? r[s] : e[e.length - 1]]
    }
    ,
    a.domain = function(o) {
        if (!arguments.length)
            return e.slice();
        e = [];
        for (let s of o)
            s != null && !isNaN(s = +s) && e.push(s);
        return e.sort(Yt),
        i()
    }
    ,
    a.range = function(o) {
        return arguments.length ? (t = Array.from(o),
        i()) : t.slice()
    }
    ,
    a.unknown = function(o) {
        return arguments.length ? (n = o,
        a) : n
    }
    ,
    a.quantiles = function() {
        return r.slice()
    }
    ,
    a.copy = function() {
        return sm().domain(e).range(t).unknown(n)
    }
    ,
    ct.apply(a, arguments)
}
function lm() {
    var e = 0, t = 1, r = 1, n = [.5], i = [0, 1], a;
    function o(l) {
        return l != null && l <= l ? i[$i(n, l, 0, r)] : a
    }
    function s() {
        var l = -1;
        for (n = new Array(r); ++l < r; )
            n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
        return o
    }
    return o.domain = function(l) {
        return arguments.length ? ([e,t] = l,
        e = +e,
        t = +t,
        s()) : [e, t]
    }
    ,
    o.range = function(l) {
        return arguments.length ? (r = (i = Array.from(l)).length - 1,
        s()) : i.slice()
    }
    ,
    o.invertExtent = function(l) {
        var u = i.indexOf(l);
        return u < 0 ? [NaN, NaN] : u < 1 ? [e, n[0]] : u >= r ? [n[r - 1], t] : [n[u - 1], n[u]]
    }
    ,
    o.unknown = function(l) {
        return arguments.length && (a = l),
        o
    }
    ,
    o.thresholds = function() {
        return n.slice()
    }
    ,
    o.copy = function() {
        return lm().domain([e, t]).range(i).unknown(a)
    }
    ,
    ct.apply(Qt(o), arguments)
}
function um() {
    var e = [.5], t = [0, 1], r, n = 1;
    function i(a) {
        return a != null && a <= a ? t[$i(e, a, 0, n)] : r
    }
    return i.domain = function(a) {
        return arguments.length ? (e = Array.from(a),
        n = Math.min(e.length, t.length - 1),
        i) : e.slice()
    }
    ,
    i.range = function(a) {
        return arguments.length ? (t = Array.from(a),
        n = Math.min(e.length, t.length - 1),
        i) : t.slice()
    }
    ,
    i.invertExtent = function(a) {
        var o = t.indexOf(a);
        return [e[o - 1], e[o]]
    }
    ,
    i.unknown = function(a) {
        return arguments.length ? (r = a,
        i) : r
    }
    ,
    i.copy = function() {
        return um().domain(e).range(t).unknown(r)
    }
    ,
    ct.apply(i, arguments)
}
const ss = new Date
  , ls = new Date;
function Me(e, t, r, n) {
    function i(a) {
        return e(a = arguments.length === 0 ? new Date : new Date(+a)),
        a
    }
    return i.floor = a => (e(a = new Date(+a)),
    a),
    i.ceil = a => (e(a = new Date(a - 1)),
    t(a, 1),
    e(a),
    a),
    i.round = a => {
        const o = i(a)
          , s = i.ceil(a);
        return a - o < s - a ? o : s
    }
    ,
    i.offset = (a, o) => (t(a = new Date(+a), o == null ? 1 : Math.floor(o)),
    a),
    i.range = (a, o, s) => {
        const l = [];
        if (a = i.ceil(a),
        s = s == null ? 1 : Math.floor(s),
        !(a < o) || !(s > 0))
            return l;
        let u;
        do
            l.push(u = new Date(+a)),
            t(a, s),
            e(a);
        while (u < a && a < o);
        return l
    }
    ,
    i.filter = a => Me(o => {
        if (o >= o)
            for (; e(o),
            !a(o); )
                o.setTime(o - 1)
    }
    , (o, s) => {
        if (o >= o)
            if (s < 0)
                for (; ++s <= 0; )
                    for (; t(o, -1),
                    !a(o); )
                        ;
            else
                for (; --s >= 0; )
                    for (; t(o, 1),
                    !a(o); )
                        ;
    }
    ),
    r && (i.count = (a, o) => (ss.setTime(+a),
    ls.setTime(+o),
    e(ss),
    e(ls),
    Math.floor(r(ss, ls))),
    i.every = a => (a = Math.floor(a),
    !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? o => n(o) % a === 0 : o => i.count(0, o) % a === 0) : i)),
    i
}
const Sa = Me( () => {}
, (e, t) => {
    e.setTime(+e + t)
}
, (e, t) => t - e);
Sa.every = e => (e = Math.floor(e),
!isFinite(e) || !(e > 0) ? null : e > 1 ? Me(t => {
    t.setTime(Math.floor(t / e) * e)
}
, (t, r) => {
    t.setTime(+t + r * e)
}
, (t, r) => (r - t) / e) : Sa);
Sa.range;
const Dt = 1e3
  , at = Dt * 60
  , Rt = at * 60
  , Ut = Rt * 24
  , Eu = Ut * 7
  , Bf = Ut * 30
  , us = Ut * 365
  , fr = Me(e => {
    e.setTime(e - e.getMilliseconds())
}
, (e, t) => {
    e.setTime(+e + t * Dt)
}
, (e, t) => (t - e) / Dt, e => e.getUTCSeconds());
fr.range;
const ku = Me(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Dt)
}
, (e, t) => {
    e.setTime(+e + t * at)
}
, (e, t) => (t - e) / at, e => e.getMinutes());
ku.range;
const Mu = Me(e => {
    e.setUTCSeconds(0, 0)
}
, (e, t) => {
    e.setTime(+e + t * at)
}
, (e, t) => (t - e) / at, e => e.getUTCMinutes());
Mu.range;
const Nu = Me(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Dt - e.getMinutes() * at)
}
, (e, t) => {
    e.setTime(+e + t * Rt)
}
, (e, t) => (t - e) / Rt, e => e.getHours());
Nu.range;
const Iu = Me(e => {
    e.setUTCMinutes(0, 0, 0)
}
, (e, t) => {
    e.setTime(+e + t * Rt)
}
, (e, t) => (t - e) / Rt, e => e.getUTCHours());
Iu.range;
const Ei = Me(e => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * at) / Ut, e => e.getDate() - 1);
Ei.range;
const _o = Me(e => {
    e.setUTCHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
}
, (e, t) => (t - e) / Ut, e => e.getUTCDate() - 1);
_o.range;
const cm = Me(e => {
    e.setUTCHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
}
, (e, t) => (t - e) / Ut, e => Math.floor(e / Ut));
cm.range;
function Sr(e) {
    return Me(t => {
        t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7),
        t.setHours(0, 0, 0, 0)
    }
    , (t, r) => {
        t.setDate(t.getDate() + r * 7)
    }
    , (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * at) / Eu)
}
const So = Sr(0)
  , Oa = Sr(1)
  , eP = Sr(2)
  , tP = Sr(3)
  , Vr = Sr(4)
  , rP = Sr(5)
  , nP = Sr(6);
So.range;
Oa.range;
eP.range;
tP.range;
Vr.range;
rP.range;
nP.range;
function Or(e) {
    return Me(t => {
        t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7),
        t.setUTCHours(0, 0, 0, 0)
    }
    , (t, r) => {
        t.setUTCDate(t.getUTCDate() + r * 7)
    }
    , (t, r) => (r - t) / Eu)
}
const Oo = Or(0)
  , Pa = Or(1)
  , iP = Or(2)
  , aP = Or(3)
  , Kr = Or(4)
  , oP = Or(5)
  , sP = Or(6);
Oo.range;
Pa.range;
iP.range;
aP.range;
Kr.range;
oP.range;
sP.range;
const Du = Me(e => {
    e.setDate(1),
    e.setHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setMonth(e.getMonth() + t)
}
, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, e => e.getMonth());
Du.range;
const Ru = Me(e => {
    e.setUTCDate(1),
    e.setUTCHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t)
}
, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, e => e.getUTCMonth());
Ru.range;
const Wt = Me(e => {
    e.setMonth(0, 1),
    e.setHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setFullYear(e.getFullYear() + t)
}
, (e, t) => t.getFullYear() - e.getFullYear(), e => e.getFullYear());
Wt.every = e => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Me(t => {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e),
    t.setMonth(0, 1),
    t.setHours(0, 0, 0, 0)
}
, (t, r) => {
    t.setFullYear(t.getFullYear() + r * e)
}
);
Wt.range;
const zt = Me(e => {
    e.setUTCMonth(0, 1),
    e.setUTCHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t)
}
, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), e => e.getUTCFullYear());
zt.every = e => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Me(t => {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
    t.setUTCMonth(0, 1),
    t.setUTCHours(0, 0, 0, 0)
}
, (t, r) => {
    t.setUTCFullYear(t.getUTCFullYear() + r * e)
}
);
zt.range;
function fm(e, t, r, n, i, a) {
    const o = [[fr, 1, Dt], [fr, 5, 5 * Dt], [fr, 15, 15 * Dt], [fr, 30, 30 * Dt], [a, 1, at], [a, 5, 5 * at], [a, 15, 15 * at], [a, 30, 30 * at], [i, 1, Rt], [i, 3, 3 * Rt], [i, 6, 6 * Rt], [i, 12, 12 * Rt], [n, 1, Ut], [n, 2, 2 * Ut], [r, 1, Eu], [t, 1, Bf], [t, 3, 3 * Bf], [e, 1, us]];
    function s(u, f, c) {
        const d = f < u;
        d && ([u,f] = [f, u]);
        const p = c && typeof c.range == "function" ? c : l(u, f, c)
          , h = p ? p.range(u, +f + 1) : [];
        return d ? h.reverse() : h
    }
    function l(u, f, c) {
        const d = Math.abs(f - u) / c
          , p = bu( ([,,g]) => g).right(o, d);
        if (p === o.length)
            return e.every(rl(u / us, f / us, c));
        if (p === 0)
            return Sa.every(Math.max(rl(u, f, c), 1));
        const [h,m] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
        return h.every(m)
    }
    return [s, l]
}
const [lP,uP] = fm(zt, Ru, Oo, cm, Iu, Mu)
  , [cP,fP] = fm(Wt, Du, So, Ei, Nu, ku);
function cs(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);
        return t.setFullYear(e.y),
        t
    }
    return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)
}
function fs(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y),
        t
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
}
function _n(e, t, r) {
    return {
        y: e,
        m: t,
        d: r,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    }
}
function dP(e) {
    var t = e.dateTime
      , r = e.date
      , n = e.time
      , i = e.periods
      , a = e.days
      , o = e.shortDays
      , s = e.months
      , l = e.shortMonths
      , u = Sn(i)
      , f = On(i)
      , c = Sn(a)
      , d = On(a)
      , p = Sn(o)
      , h = On(o)
      , m = Sn(s)
      , g = On(s)
      , b = Sn(l)
      , _ = On(l)
      , w = {
        a: B,
        A: R,
        b: L,
        B: K,
        c: null,
        d: qf,
        e: qf,
        f: IP,
        g: HP,
        G: KP,
        H: kP,
        I: MP,
        j: NP,
        L: dm,
        m: DP,
        M: RP,
        p: G,
        q: z,
        Q: Kf,
        s: Xf,
        S: BP,
        u: LP,
        U: UP,
        V: WP,
        w: zP,
        W: FP,
        x: null,
        X: null,
        y: qP,
        Y: VP,
        Z: XP,
        "%": Vf
    }
      , S = {
        a: Y,
        A: se,
        b: we,
        B: Ae,
        c: null,
        d: Hf,
        e: Hf,
        f: JP,
        g: lA,
        G: cA,
        H: GP,
        I: YP,
        j: ZP,
        L: hm,
        m: QP,
        M: eA,
        p: _t,
        q: Ce,
        Q: Kf,
        s: Xf,
        S: tA,
        u: rA,
        U: nA,
        V: iA,
        w: aA,
        W: oA,
        x: null,
        X: null,
        y: sA,
        Y: uA,
        Z: fA,
        "%": Vf
    }
      , y = {
        a: k,
        A: j,
        b: T,
        B: N,
        c: E,
        d: zf,
        e: zf,
        f: $P,
        g: Wf,
        G: Uf,
        H: Ff,
        I: Ff,
        j: OP,
        L: jP,
        m: SP,
        M: PP,
        p: A,
        q: _P,
        Q: TP,
        s: EP,
        S: AP,
        u: yP,
        U: gP,
        V: bP,
        w: vP,
        W: xP,
        x: I,
        X: D,
        y: Wf,
        Y: Uf,
        Z: wP,
        "%": CP
    };
    w.x = x(r, w),
    w.X = x(n, w),
    w.c = x(t, w),
    S.x = x(r, S),
    S.X = x(n, S),
    S.c = x(t, S);
    function x(W, Q) {
        return function(ee) {
            var U = [], me = -1, ne = 0, Se = W.length, Oe, Le, St;
            for (ee instanceof Date || (ee = new Date(+ee)); ++me < Se; )
                W.charCodeAt(me) === 37 && (U.push(W.slice(ne, me)),
                (Le = Lf[Oe = W.charAt(++me)]) != null ? Oe = W.charAt(++me) : Le = Oe === "e" ? " " : "0",
                (St = Q[Oe]) && (Oe = St(ee, Le)),
                U.push(Oe),
                ne = me + 1);
            return U.push(W.slice(ne, me)),
            U.join("")
        }
    }
    function O(W, Q) {
        return function(ee) {
            var U = _n(1900, void 0, 1), me = P(U, W, ee += "", 0), ne, Se;
            if (me != ee.length)
                return null;
            if ("Q"in U)
                return new Date(U.Q);
            if ("s"in U)
                return new Date(U.s * 1e3 + ("L"in U ? U.L : 0));
            if (Q && !("Z"in U) && (U.Z = 0),
            "p"in U && (U.H = U.H % 12 + U.p * 12),
            U.m === void 0 && (U.m = "q"in U ? U.q : 0),
            "V"in U) {
                if (U.V < 1 || U.V > 53)
                    return null;
                "w"in U || (U.w = 1),
                "Z"in U ? (ne = fs(_n(U.y, 0, 1)),
                Se = ne.getUTCDay(),
                ne = Se > 4 || Se === 0 ? Pa.ceil(ne) : Pa(ne),
                ne = _o.offset(ne, (U.V - 1) * 7),
                U.y = ne.getUTCFullYear(),
                U.m = ne.getUTCMonth(),
                U.d = ne.getUTCDate() + (U.w + 6) % 7) : (ne = cs(_n(U.y, 0, 1)),
                Se = ne.getDay(),
                ne = Se > 4 || Se === 0 ? Oa.ceil(ne) : Oa(ne),
                ne = Ei.offset(ne, (U.V - 1) * 7),
                U.y = ne.getFullYear(),
                U.m = ne.getMonth(),
                U.d = ne.getDate() + (U.w + 6) % 7)
            } else
                ("W"in U || "U"in U) && ("w"in U || (U.w = "u"in U ? U.u % 7 : "W"in U ? 1 : 0),
                Se = "Z"in U ? fs(_n(U.y, 0, 1)).getUTCDay() : cs(_n(U.y, 0, 1)).getDay(),
                U.m = 0,
                U.d = "W"in U ? (U.w + 6) % 7 + U.W * 7 - (Se + 5) % 7 : U.w + U.U * 7 - (Se + 6) % 7);
            return "Z"in U ? (U.H += U.Z / 100 | 0,
            U.M += U.Z % 100,
            fs(U)) : cs(U)
        }
    }
    function P(W, Q, ee, U) {
        for (var me = 0, ne = Q.length, Se = ee.length, Oe, Le; me < ne; ) {
            if (U >= Se)
                return -1;
            if (Oe = Q.charCodeAt(me++),
            Oe === 37) {
                if (Oe = Q.charAt(me++),
                Le = y[Oe in Lf ? Q.charAt(me++) : Oe],
                !Le || (U = Le(W, ee, U)) < 0)
                    return -1
            } else if (Oe != ee.charCodeAt(U++))
                return -1
        }
        return U
    }
    function A(W, Q, ee) {
        var U = u.exec(Q.slice(ee));
        return U ? (W.p = f.get(U[0].toLowerCase()),
        ee + U[0].length) : -1
    }
    function k(W, Q, ee) {
        var U = p.exec(Q.slice(ee));
        return U ? (W.w = h.get(U[0].toLowerCase()),
        ee + U[0].length) : -1
    }
    function j(W, Q, ee) {
        var U = c.exec(Q.slice(ee));
        return U ? (W.w = d.get(U[0].toLowerCase()),
        ee + U[0].length) : -1
    }
    function T(W, Q, ee) {
        var U = b.exec(Q.slice(ee));
        return U ? (W.m = _.get(U[0].toLowerCase()),
        ee + U[0].length) : -1
    }
    function N(W, Q, ee) {
        var U = m.exec(Q.slice(ee));
        return U ? (W.m = g.get(U[0].toLowerCase()),
        ee + U[0].length) : -1
    }
    function E(W, Q, ee) {
        return P(W, t, Q, ee)
    }
    function I(W, Q, ee) {
        return P(W, r, Q, ee)
    }
    function D(W, Q, ee) {
        return P(W, n, Q, ee)
    }
    function B(W) {
        return o[W.getDay()]
    }
    function R(W) {
        return a[W.getDay()]
    }
    function L(W) {
        return l[W.getMonth()]
    }
    function K(W) {
        return s[W.getMonth()]
    }
    function G(W) {
        return i[+(W.getHours() >= 12)]
    }
    function z(W) {
        return 1 + ~~(W.getMonth() / 3)
    }
    function Y(W) {
        return o[W.getUTCDay()]
    }
    function se(W) {
        return a[W.getUTCDay()]
    }
    function we(W) {
        return l[W.getUTCMonth()]
    }
    function Ae(W) {
        return s[W.getUTCMonth()]
    }
    function _t(W) {
        return i[+(W.getUTCHours() >= 12)]
    }
    function Ce(W) {
        return 1 + ~~(W.getUTCMonth() / 3)
    }
    return {
        format: function(W) {
            var Q = x(W += "", w);
            return Q.toString = function() {
                return W
            }
            ,
            Q
        },
        parse: function(W) {
            var Q = O(W += "", !1);
            return Q.toString = function() {
                return W
            }
            ,
            Q
        },
        utcFormat: function(W) {
            var Q = x(W += "", S);
            return Q.toString = function() {
                return W
            }
            ,
            Q
        },
        utcParse: function(W) {
            var Q = O(W += "", !0);
            return Q.toString = function() {
                return W
            }
            ,
            Q
        }
    }
}
var Lf = {
    "-": "",
    _: " ",
    0: "0"
}
  , Ie = /^\s*\d+/
  , pP = /^%/
  , hP = /[\\^$*+?|[\]().{}]/g;
function fe(e, t, r) {
    var n = e < 0 ? "-" : ""
      , i = (n ? -e : e) + ""
      , a = i.length;
    return n + (a < r ? new Array(r - a + 1).join(t) + i : i)
}
function mP(e) {
    return e.replace(hP, "\\$&")
}
function Sn(e) {
    return new RegExp("^(?:" + e.map(mP).join("|") + ")","i")
}
function On(e) {
    return new Map(e.map( (t, r) => [t.toLowerCase(), r]))
}
function vP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 1));
    return n ? (e.w = +n[0],
    r + n[0].length) : -1
}
function yP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 1));
    return n ? (e.u = +n[0],
    r + n[0].length) : -1
}
function gP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 2));
    return n ? (e.U = +n[0],
    r + n[0].length) : -1
}
function bP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 2));
    return n ? (e.V = +n[0],
    r + n[0].length) : -1
}
function xP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 2));
    return n ? (e.W = +n[0],
    r + n[0].length) : -1
}
function Uf(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 4));
    return n ? (e.y = +n[0],
    r + n[0].length) : -1
}
function Wf(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 2));
    return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3),
    r + n[0].length) : -1
}
function wP(e, t, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
    return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")),
    r + n[0].length) : -1
}
function _P(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 1));
    return n ? (e.q = n[0] * 3 - 3,
    r + n[0].length) : -1
}
function SP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 2));
    return n ? (e.m = n[0] - 1,
    r + n[0].length) : -1
}
function zf(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 2));
    return n ? (e.d = +n[0],
    r + n[0].length) : -1
}
function OP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 3));
    return n ? (e.m = 0,
    e.d = +n[0],
    r + n[0].length) : -1
}
function Ff(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 2));
    return n ? (e.H = +n[0],
    r + n[0].length) : -1
}
function PP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 2));
    return n ? (e.M = +n[0],
    r + n[0].length) : -1
}
function AP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 2));
    return n ? (e.S = +n[0],
    r + n[0].length) : -1
}
function jP(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 3));
    return n ? (e.L = +n[0],
    r + n[0].length) : -1
}
function $P(e, t, r) {
    var n = Ie.exec(t.slice(r, r + 6));
    return n ? (e.L = Math.floor(n[0] / 1e3),
    r + n[0].length) : -1
}
function CP(e, t, r) {
    var n = pP.exec(t.slice(r, r + 1));
    return n ? r + n[0].length : -1
}
function TP(e, t, r) {
    var n = Ie.exec(t.slice(r));
    return n ? (e.Q = +n[0],
    r + n[0].length) : -1
}
function EP(e, t, r) {
    var n = Ie.exec(t.slice(r));
    return n ? (e.s = +n[0],
    r + n[0].length) : -1
}
function qf(e, t) {
    return fe(e.getDate(), t, 2)
}
function kP(e, t) {
    return fe(e.getHours(), t, 2)
}
function MP(e, t) {
    return fe(e.getHours() % 12 || 12, t, 2)
}
function NP(e, t) {
    return fe(1 + Ei.count(Wt(e), e), t, 3)
}
function dm(e, t) {
    return fe(e.getMilliseconds(), t, 3)
}
function IP(e, t) {
    return dm(e, t) + "000"
}
function DP(e, t) {
    return fe(e.getMonth() + 1, t, 2)
}
function RP(e, t) {
    return fe(e.getMinutes(), t, 2)
}
function BP(e, t) {
    return fe(e.getSeconds(), t, 2)
}
function LP(e) {
    var t = e.getDay();
    return t === 0 ? 7 : t
}
function UP(e, t) {
    return fe(So.count(Wt(e) - 1, e), t, 2)
}
function pm(e) {
    var t = e.getDay();
    return t >= 4 || t === 0 ? Vr(e) : Vr.ceil(e)
}
function WP(e, t) {
    return e = pm(e),
    fe(Vr.count(Wt(e), e) + (Wt(e).getDay() === 4), t, 2)
}
function zP(e) {
    return e.getDay()
}
function FP(e, t) {
    return fe(Oa.count(Wt(e) - 1, e), t, 2)
}
function qP(e, t) {
    return fe(e.getFullYear() % 100, t, 2)
}
function HP(e, t) {
    return e = pm(e),
    fe(e.getFullYear() % 100, t, 2)
}
function VP(e, t) {
    return fe(e.getFullYear() % 1e4, t, 4)
}
function KP(e, t) {
    var r = e.getDay();
    return e = r >= 4 || r === 0 ? Vr(e) : Vr.ceil(e),
    fe(e.getFullYear() % 1e4, t, 4)
}
function XP(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : (t *= -1,
    "+")) + fe(t / 60 | 0, "0", 2) + fe(t % 60, "0", 2)
}
function Hf(e, t) {
    return fe(e.getUTCDate(), t, 2)
}
function GP(e, t) {
    return fe(e.getUTCHours(), t, 2)
}
function YP(e, t) {
    return fe(e.getUTCHours() % 12 || 12, t, 2)
}
function ZP(e, t) {
    return fe(1 + _o.count(zt(e), e), t, 3)
}
function hm(e, t) {
    return fe(e.getUTCMilliseconds(), t, 3)
}
function JP(e, t) {
    return hm(e, t) + "000"
}
function QP(e, t) {
    return fe(e.getUTCMonth() + 1, t, 2)
}
function eA(e, t) {
    return fe(e.getUTCMinutes(), t, 2)
}
function tA(e, t) {
    return fe(e.getUTCSeconds(), t, 2)
}
function rA(e) {
    var t = e.getUTCDay();
    return t === 0 ? 7 : t
}
function nA(e, t) {
    return fe(Oo.count(zt(e) - 1, e), t, 2)
}
function mm(e) {
    var t = e.getUTCDay();
    return t >= 4 || t === 0 ? Kr(e) : Kr.ceil(e)
}
function iA(e, t) {
    return e = mm(e),
    fe(Kr.count(zt(e), e) + (zt(e).getUTCDay() === 4), t, 2)
}
function aA(e) {
    return e.getUTCDay()
}
function oA(e, t) {
    return fe(Pa.count(zt(e) - 1, e), t, 2)
}
function sA(e, t) {
    return fe(e.getUTCFullYear() % 100, t, 2)
}
function lA(e, t) {
    return e = mm(e),
    fe(e.getUTCFullYear() % 100, t, 2)
}
function uA(e, t) {
    return fe(e.getUTCFullYear() % 1e4, t, 4)
}
function cA(e, t) {
    var r = e.getUTCDay();
    return e = r >= 4 || r === 0 ? Kr(e) : Kr.ceil(e),
    fe(e.getUTCFullYear() % 1e4, t, 4)
}
function fA() {
    return "+0000"
}
function Vf() {
    return "%"
}
function Kf(e) {
    return +e
}
function Xf(e) {
    return Math.floor(+e / 1e3)
}
var Tr, vm, ym;
dA({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function dA(e) {
    return Tr = dP(e),
    vm = Tr.format,
    Tr.parse,
    ym = Tr.utcFormat,
    Tr.utcParse,
    Tr
}
function pA(e) {
    return new Date(e)
}
function hA(e) {
    return e instanceof Date ? +e : +new Date(+e)
}
function Bu(e, t, r, n, i, a, o, s, l, u) {
    var f = Ou()
      , c = f.invert
      , d = f.domain
      , p = u(".%L")
      , h = u(":%S")
      , m = u("%I:%M")
      , g = u("%I %p")
      , b = u("%a %d")
      , _ = u("%b %d")
      , w = u("%B")
      , S = u("%Y");
    function y(x) {
        return (l(x) < x ? p : s(x) < x ? h : o(x) < x ? m : a(x) < x ? g : n(x) < x ? i(x) < x ? b : _ : r(x) < x ? w : S)(x)
    }
    return f.invert = function(x) {
        return new Date(c(x))
    }
    ,
    f.domain = function(x) {
        return arguments.length ? d(Array.from(x, hA)) : d().map(pA)
    }
    ,
    f.ticks = function(x) {
        var O = d();
        return e(O[0], O[O.length - 1], x ?? 10)
    }
    ,
    f.tickFormat = function(x, O) {
        return O == null ? y : u(O)
    }
    ,
    f.nice = function(x) {
        var O = d();
        return (!x || typeof x.range != "function") && (x = t(O[0], O[O.length - 1], x ?? 10)),
        x ? d(nm(O, x)) : f
    }
    ,
    f.copy = function() {
        return Ti(f, Bu(e, t, r, n, i, a, o, s, l, u))
    }
    ,
    f
}
function mA() {
    return ct.apply(Bu(cP, fP, Wt, Du, So, Ei, Nu, ku, fr, vm).domain([new Date(2e3,0,1), new Date(2e3,0,2)]), arguments)
}
function vA() {
    return ct.apply(Bu(lP, uP, zt, Ru, Oo, _o, Iu, Mu, fr, ym).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
}
function Po() {
    var e = 0, t = 1, r, n, i, a, o = Ve, s = !1, l;
    function u(c) {
        return c == null || isNaN(c = +c) ? l : o(i === 0 ? .5 : (c = (a(c) - r) * i,
        s ? Math.max(0, Math.min(1, c)) : c))
    }
    u.domain = function(c) {
        return arguments.length ? ([e,t] = c,
        r = a(e = +e),
        n = a(t = +t),
        i = r === n ? 0 : 1 / (n - r),
        u) : [e, t]
    }
    ,
    u.clamp = function(c) {
        return arguments.length ? (s = !!c,
        u) : s
    }
    ,
    u.interpolator = function(c) {
        return arguments.length ? (o = c,
        u) : o
    }
    ;
    function f(c) {
        return function(d) {
            var p, h;
            return arguments.length ? ([p,h] = d,
            o = c(p, h),
            u) : [o(0), o(1)]
        }
    }
    return u.range = f(pn),
    u.rangeRound = f(Su),
    u.unknown = function(c) {
        return arguments.length ? (l = c,
        u) : l
    }
    ,
    function(c) {
        return a = c,
        r = c(e),
        n = c(t),
        i = r === n ? 0 : 1 / (n - r),
        u
    }
}
function er(e, t) {
    return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())
}
function gm() {
    var e = Qt(Po()(Ve));
    return e.copy = function() {
        return er(e, gm())
    }
    ,
    qt.apply(e, arguments)
}
function bm() {
    var e = ju(Po()).domain([1, 10]);
    return e.copy = function() {
        return er(e, bm()).base(e.base())
    }
    ,
    qt.apply(e, arguments)
}
function xm() {
    var e = $u(Po());
    return e.copy = function() {
        return er(e, xm()).constant(e.constant())
    }
    ,
    qt.apply(e, arguments)
}
function Lu() {
    var e = Cu(Po());
    return e.copy = function() {
        return er(e, Lu()).exponent(e.exponent())
    }
    ,
    qt.apply(e, arguments)
}
function yA() {
    return Lu.apply(null, arguments).exponent(.5)
}
function wm() {
    var e = []
      , t = Ve;
    function r(n) {
        if (n != null && !isNaN(n = +n))
            return t(($i(e, n, 1) - 1) / (e.length - 1))
    }
    return r.domain = function(n) {
        if (!arguments.length)
            return e.slice();
        e = [];
        for (let i of n)
            i != null && !isNaN(i = +i) && e.push(i);
        return e.sort(Yt),
        r
    }
    ,
    r.interpolator = function(n) {
        return arguments.length ? (t = n,
        r) : t
    }
    ,
    r.range = function() {
        return e.map( (n, i) => t(i / (e.length - 1)))
    }
    ,
    r.quantiles = function(n) {
        return Array.from({
            length: n + 1
        }, (i, a) => nO(e, a / n))
    }
    ,
    r.copy = function() {
        return wm(t).domain(e)
    }
    ,
    qt.apply(r, arguments)
}
function Ao() {
    var e = 0, t = .5, r = 1, n = 1, i, a, o, s, l, u = Ve, f, c = !1, d;
    function p(m) {
        return isNaN(m = +m) ? d : (m = .5 + ((m = +f(m)) - a) * (n * m < n * a ? s : l),
        u(c ? Math.max(0, Math.min(1, m)) : m))
    }
    p.domain = function(m) {
        return arguments.length ? ([e,t,r] = m,
        i = f(e = +e),
        a = f(t = +t),
        o = f(r = +r),
        s = i === a ? 0 : .5 / (a - i),
        l = a === o ? 0 : .5 / (o - a),
        n = a < i ? -1 : 1,
        p) : [e, t, r]
    }
    ,
    p.clamp = function(m) {
        return arguments.length ? (c = !!m,
        p) : c
    }
    ,
    p.interpolator = function(m) {
        return arguments.length ? (u = m,
        p) : u
    }
    ;
    function h(m) {
        return function(g) {
            var b, _, w;
            return arguments.length ? ([b,_,w] = g,
            u = CO(m, [b, _, w]),
            p) : [u(0), u(.5), u(1)]
        }
    }
    return p.range = h(pn),
    p.rangeRound = h(Su),
    p.unknown = function(m) {
        return arguments.length ? (d = m,
        p) : d
    }
    ,
    function(m) {
        return f = m,
        i = m(e),
        a = m(t),
        o = m(r),
        s = i === a ? 0 : .5 / (a - i),
        l = a === o ? 0 : .5 / (o - a),
        n = a < i ? -1 : 1,
        p
    }
}
function _m() {
    var e = Qt(Ao()(Ve));
    return e.copy = function() {
        return er(e, _m())
    }
    ,
    qt.apply(e, arguments)
}
function Sm() {
    var e = ju(Ao()).domain([.1, 1, 10]);
    return e.copy = function() {
        return er(e, Sm()).base(e.base())
    }
    ,
    qt.apply(e, arguments)
}
function Om() {
    var e = $u(Ao());
    return e.copy = function() {
        return er(e, Om()).constant(e.constant())
    }
    ,
    qt.apply(e, arguments)
}
function Uu() {
    var e = Cu(Ao());
    return e.copy = function() {
        return er(e, Uu()).exponent(e.exponent())
    }
    ,
    qt.apply(e, arguments)
}
function gA() {
    return Uu.apply(null, arguments).exponent(.5)
}
const Gf = Object.freeze(Object.defineProperty({
    __proto__: null,
    scaleBand: Hn,
    scaleDiverging: _m,
    scaleDivergingLog: Sm,
    scaleDivergingPow: Uu,
    scaleDivergingSqrt: gA,
    scaleDivergingSymlog: Om,
    scaleIdentity: rm,
    scaleImplicit: nl,
    scaleLinear: _a,
    scaleLog: im,
    scaleOrdinal: xu,
    scalePoint: Mn,
    scalePow: Tu,
    scaleQuantile: sm,
    scaleQuantize: lm,
    scaleRadial: om,
    scaleSequential: gm,
    scaleSequentialLog: bm,
    scaleSequentialPow: Lu,
    scaleSequentialQuantile: wm,
    scaleSequentialSqrt: yA,
    scaleSequentialSymlog: xm,
    scaleSqrt: JO,
    scaleSymlog: am,
    scaleThreshold: um,
    scaleTime: mA,
    scaleUtc: vA,
    tickFormat: tm
}, Symbol.toStringTag, {
    value: "Module"
}));
var bA = au;
function xA(e, t, r) {
    for (var n = -1, i = e.length; ++n < i; ) {
        var a = e[n]
          , o = t(a);
        if (o != null && (s === void 0 ? o === o && !bA(o) : r(o, s)))
            var s = o
              , l = a
    }
    return l
}
var Pm = xA;
function wA(e, t) {
    return e > t
}
var _A = wA
  , SA = Pm
  , OA = _A
  , PA = Pi;
function AA(e) {
    return e && e.length ? SA(e, PA, OA) : void 0
}
var jA = AA;
const Xt = ke(jA);
function $A(e, t) {
    return e < t
}
var CA = $A
  , TA = Pm
  , EA = CA
  , kA = Pi;
function MA(e) {
    return e && e.length ? TA(e, kA, EA) : void 0
}
var NA = MA;
const jo = ke(NA);
var IA = Mh
  , DA = ng;
function RA(e, t) {
    return IA(DA(e, t), 1)
}
var BA = RA;
const LA = ke(BA);
var UA = ig;
function WA(e, t) {
    return UA(e, t)
}
var zA = WA;
const Yn = ke(zA);
var hn = 1e9, FA = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, zu, be = !0, lt = "[DecimalError] ", vr = lt + "Invalid argument: ", Wu = lt + "Exponent out of range: ", mn = Math.floor, ar = Math.pow, qA = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Qe, Ne = 1e7, ye = 7, Am = 9007199254740991, Aa = mn(Am / ye), H = {};
H.absoluteValue = H.abs = function() {
    var e = new this.constructor(this);
    return e.s && (e.s = 1),
    e
}
;
H.comparedTo = H.cmp = function(e) {
    var t, r, n, i, a = this;
    if (e = new a.constructor(e),
    a.s !== e.s)
        return a.s || -e.s;
    if (a.e !== e.e)
        return a.e > e.e ^ a.s < 0 ? 1 : -1;
    for (n = a.d.length,
    i = e.d.length,
    t = 0,
    r = n < i ? n : i; t < r; ++t)
        if (a.d[t] !== e.d[t])
            return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1
}
;
H.decimalPlaces = H.dp = function() {
    var e = this
      , t = e.d.length - 1
      , r = (t - e.e) * ye;
    if (t = e.d[t],
    t)
        for (; t % 10 == 0; t /= 10)
            r--;
    return r < 0 ? 0 : r
}
;
H.dividedBy = H.div = function(e) {
    return Lt(this, new this.constructor(e))
}
;
H.dividedToIntegerBy = H.idiv = function(e) {
    var t = this
      , r = t.constructor;
    return he(Lt(t, new r(e), 0, 1), r.precision)
}
;
H.equals = H.eq = function(e) {
    return !this.cmp(e)
}
;
H.exponent = function() {
    return $e(this)
}
;
H.greaterThan = H.gt = function(e) {
    return this.cmp(e) > 0
}
;
H.greaterThanOrEqualTo = H.gte = function(e) {
    return this.cmp(e) >= 0
}
;
H.isInteger = H.isint = function() {
    return this.e > this.d.length - 2
}
;
H.isNegative = H.isneg = function() {
    return this.s < 0
}
;
H.isPositive = H.ispos = function() {
    return this.s > 0
}
;
H.isZero = function() {
    return this.s === 0
}
;
H.lessThan = H.lt = function(e) {
    return this.cmp(e) < 0
}
;
H.lessThanOrEqualTo = H.lte = function(e) {
    return this.cmp(e) < 1
}
;
H.logarithm = H.log = function(e) {
    var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
    if (e === void 0)
        e = new n(10);
    else if (e = new n(e),
    e.s < 1 || e.eq(Qe))
        throw Error(lt + "NaN");
    if (r.s < 1)
        throw Error(lt + (r.s ? "NaN" : "-Infinity"));
    return r.eq(Qe) ? new n(0) : (be = !1,
    t = Lt(Zn(r, a), Zn(e, a), a),
    be = !0,
    he(t, i))
}
;
H.minus = H.sub = function(e) {
    var t = this;
    return e = new t.constructor(e),
    t.s == e.s ? Cm(t, e) : jm(t, (e.s = -e.s,
    e))
}
;
H.modulo = H.mod = function(e) {
    var t, r = this, n = r.constructor, i = n.precision;
    if (e = new n(e),
    !e.s)
        throw Error(lt + "NaN");
    return r.s ? (be = !1,
    t = Lt(r, e, 0, 1).times(e),
    be = !0,
    r.minus(t)) : he(new n(r), i)
}
;
H.naturalExponential = H.exp = function() {
    return $m(this)
}
;
H.naturalLogarithm = H.ln = function() {
    return Zn(this)
}
;
H.negated = H.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s || 0,
    e
}
;
H.plus = H.add = function(e) {
    var t = this;
    return e = new t.constructor(e),
    t.s == e.s ? jm(t, e) : Cm(t, (e.s = -e.s,
    e))
}
;
H.precision = H.sd = function(e) {
    var t, r, n, i = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(vr + e);
    if (t = $e(i) + 1,
    n = i.d.length - 1,
    r = n * ye + 1,
    n = i.d[n],
    n) {
        for (; n % 10 == 0; n /= 10)
            r--;
        for (n = i.d[0]; n >= 10; n /= 10)
            r++
    }
    return e && t > r ? t : r
}
;
H.squareRoot = H.sqrt = function() {
    var e, t, r, n, i, a, o, s = this, l = s.constructor;
    if (s.s < 1) {
        if (!s.s)
            return new l(0);
        throw Error(lt + "NaN")
    }
    for (e = $e(s),
    be = !1,
    i = Math.sqrt(+s),
    i == 0 || i == 1 / 0 ? (t = jt(s.d),
    (t.length + e) % 2 == 0 && (t += "0"),
    i = Math.sqrt(t),
    e = mn((e + 1) / 2) - (e < 0 || e % 2),
    i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(),
    t = t.slice(0, t.indexOf("e") + 1) + e),
    n = new l(t)) : n = new l(i.toString()),
    r = l.precision,
    i = o = r + 3; ; )
        if (a = n,
        n = a.plus(Lt(s, a, o + 2)).times(.5),
        jt(a.d).slice(0, o) === (t = jt(n.d)).slice(0, o)) {
            if (t = t.slice(o - 3, o + 1),
            i == o && t == "4999") {
                if (he(a, r + 1, 0),
                a.times(a).eq(s)) {
                    n = a;
                    break
                }
            } else if (t != "9999")
                break;
            o += 4
        }
    return be = !0,
    he(n, r)
}
;
H.times = H.mul = function(e) {
    var t, r, n, i, a, o, s, l, u, f = this, c = f.constructor, d = f.d, p = (e = new c(e)).d;
    if (!f.s || !e.s)
        return new c(0);
    for (e.s *= f.s,
    r = f.e + e.e,
    l = d.length,
    u = p.length,
    l < u && (a = d,
    d = p,
    p = a,
    o = l,
    l = u,
    u = o),
    a = [],
    o = l + u,
    n = o; n--; )
        a.push(0);
    for (n = u; --n >= 0; ) {
        for (t = 0,
        i = l + n; i > n; )
            s = a[i] + p[n] * d[i - n - 1] + t,
            a[i--] = s % Ne | 0,
            t = s / Ne | 0;
        a[i] = (a[i] + t) % Ne | 0
    }
    for (; !a[--o]; )
        a.pop();
    return t ? ++r : a.shift(),
    e.d = a,
    e.e = r,
    be ? he(e, c.precision) : e
}
;
H.toDecimalPlaces = H.todp = function(e, t) {
    var r = this
      , n = r.constructor;
    return r = new n(r),
    e === void 0 ? r : (Et(e, 0, hn),
    t === void 0 ? t = n.rounding : Et(t, 0, 8),
    he(r, e + $e(r) + 1, t))
}
;
H.toExponential = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === void 0 ? r = xr(n, !0) : (Et(e, 0, hn),
    t === void 0 ? t = i.rounding : Et(t, 0, 8),
    n = he(new i(n), e + 1, t),
    r = xr(n, !0, e + 1)),
    r
}
;
H.toFixed = function(e, t) {
    var r, n, i = this, a = i.constructor;
    return e === void 0 ? xr(i) : (Et(e, 0, hn),
    t === void 0 ? t = a.rounding : Et(t, 0, 8),
    n = he(new a(i), e + $e(i) + 1, t),
    r = xr(n.abs(), !1, e + $e(n) + 1),
    i.isneg() && !i.isZero() ? "-" + r : r)
}
;
H.toInteger = H.toint = function() {
    var e = this
      , t = e.constructor;
    return he(new t(e), $e(e) + 1, t.rounding)
}
;
H.toNumber = function() {
    return +this
}
;
H.toPower = H.pow = function(e) {
    var t, r, n, i, a, o, s = this, l = s.constructor, u = 12, f = +(e = new l(e));
    if (!e.s)
        return new l(Qe);
    if (s = new l(s),
    !s.s) {
        if (e.s < 1)
            throw Error(lt + "Infinity");
        return s
    }
    if (s.eq(Qe))
        return s;
    if (n = l.precision,
    e.eq(Qe))
        return he(s, n);
    if (t = e.e,
    r = e.d.length - 1,
    o = t >= r,
    a = s.s,
    o) {
        if ((r = f < 0 ? -f : f) <= Am) {
            for (i = new l(Qe),
            t = Math.ceil(n / ye + 4),
            be = !1; r % 2 && (i = i.times(s),
            Zf(i.d, t)),
            r = mn(r / 2),
            r !== 0; )
                s = s.times(s),
                Zf(s.d, t);
            return be = !0,
            e.s < 0 ? new l(Qe).div(i) : he(i, n)
        }
    } else if (a < 0)
        throw Error(lt + "NaN");
    return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1,
    s.s = 1,
    be = !1,
    i = e.times(Zn(s, n + u)),
    be = !0,
    i = $m(i),
    i.s = a,
    i
}
;
H.toPrecision = function(e, t) {
    var r, n, i = this, a = i.constructor;
    return e === void 0 ? (r = $e(i),
    n = xr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Et(e, 1, hn),
    t === void 0 ? t = a.rounding : Et(t, 0, 8),
    i = he(new a(i), e, t),
    r = $e(i),
    n = xr(i, e <= r || r <= a.toExpNeg, e)),
    n
}
;
H.toSignificantDigits = H.tosd = function(e, t) {
    var r = this
      , n = r.constructor;
    return e === void 0 ? (e = n.precision,
    t = n.rounding) : (Et(e, 1, hn),
    t === void 0 ? t = n.rounding : Et(t, 0, 8)),
    he(new n(r), e, t)
}
;
H.toString = H.valueOf = H.val = H.toJSON = H[Symbol.for("nodejs.util.inspect.custom")] = function() {
    var e = this
      , t = $e(e)
      , r = e.constructor;
    return xr(e, t <= r.toExpNeg || t >= r.toExpPos)
}
;
function jm(e, t) {
    var r, n, i, a, o, s, l, u, f = e.constructor, c = f.precision;
    if (!e.s || !t.s)
        return t.s || (t = new f(e)),
        be ? he(t, c) : t;
    if (l = e.d,
    u = t.d,
    o = e.e,
    i = t.e,
    l = l.slice(),
    a = o - i,
    a) {
        for (a < 0 ? (n = l,
        a = -a,
        s = u.length) : (n = u,
        i = o,
        s = l.length),
        o = Math.ceil(c / ye),
        s = o > s ? o + 1 : s + 1,
        a > s && (a = s,
        n.length = 1),
        n.reverse(); a--; )
            n.push(0);
        n.reverse()
    }
    for (s = l.length,
    a = u.length,
    s - a < 0 && (a = s,
    n = u,
    u = l,
    l = n),
    r = 0; a; )
        r = (l[--a] = l[a] + u[a] + r) / Ne | 0,
        l[a] %= Ne;
    for (r && (l.unshift(r),
    ++i),
    s = l.length; l[--s] == 0; )
        l.pop();
    return t.d = l,
    t.e = i,
    be ? he(t, c) : t
}
function Et(e, t, r) {
    if (e !== ~~e || e < t || e > r)
        throw Error(vr + e)
}
function jt(e) {
    var t, r, n, i = e.length - 1, a = "", o = e[0];
    if (i > 0) {
        for (a += o,
        t = 1; t < i; t++)
            n = e[t] + "",
            r = ye - n.length,
            r && (a += Vt(r)),
            a += n;
        o = e[t],
        n = o + "",
        r = ye - n.length,
        r && (a += Vt(r))
    } else if (o === 0)
        return "0";
    for (; o % 10 === 0; )
        o /= 10;
    return a + o
}
var Lt = function() {
    function e(n, i) {
        var a, o = 0, s = n.length;
        for (n = n.slice(); s--; )
            a = n[s] * i + o,
            n[s] = a % Ne | 0,
            o = a / Ne | 0;
        return o && n.unshift(o),
        n
    }
    function t(n, i, a, o) {
        var s, l;
        if (a != o)
            l = a > o ? 1 : -1;
        else
            for (s = l = 0; s < a; s++)
                if (n[s] != i[s]) {
                    l = n[s] > i[s] ? 1 : -1;
                    break
                }
        return l
    }
    function r(n, i, a) {
        for (var o = 0; a--; )
            n[a] -= o,
            o = n[a] < i[a] ? 1 : 0,
            n[a] = o * Ne + n[a] - i[a];
        for (; !n[0] && n.length > 1; )
            n.shift()
    }
    return function(n, i, a, o) {
        var s, l, u, f, c, d, p, h, m, g, b, _, w, S, y, x, O, P, A = n.constructor, k = n.s == i.s ? 1 : -1, j = n.d, T = i.d;
        if (!n.s)
            return new A(n);
        if (!i.s)
            throw Error(lt + "Division by zero");
        for (l = n.e - i.e,
        O = T.length,
        y = j.length,
        p = new A(k),
        h = p.d = [],
        u = 0; T[u] == (j[u] || 0); )
            ++u;
        if (T[u] > (j[u] || 0) && --l,
        a == null ? _ = a = A.precision : o ? _ = a + ($e(n) - $e(i)) + 1 : _ = a,
        _ < 0)
            return new A(0);
        if (_ = _ / ye + 2 | 0,
        u = 0,
        O == 1)
            for (f = 0,
            T = T[0],
            _++; (u < y || f) && _--; u++)
                w = f * Ne + (j[u] || 0),
                h[u] = w / T | 0,
                f = w % T | 0;
        else {
            for (f = Ne / (T[0] + 1) | 0,
            f > 1 && (T = e(T, f),
            j = e(j, f),
            O = T.length,
            y = j.length),
            S = O,
            m = j.slice(0, O),
            g = m.length; g < O; )
                m[g++] = 0;
            P = T.slice(),
            P.unshift(0),
            x = T[0],
            T[1] >= Ne / 2 && ++x;
            do
                f = 0,
                s = t(T, m, O, g),
                s < 0 ? (b = m[0],
                O != g && (b = b * Ne + (m[1] || 0)),
                f = b / x | 0,
                f > 1 ? (f >= Ne && (f = Ne - 1),
                c = e(T, f),
                d = c.length,
                g = m.length,
                s = t(c, m, d, g),
                s == 1 && (f--,
                r(c, O < d ? P : T, d))) : (f == 0 && (s = f = 1),
                c = T.slice()),
                d = c.length,
                d < g && c.unshift(0),
                r(m, c, g),
                s == -1 && (g = m.length,
                s = t(T, m, O, g),
                s < 1 && (f++,
                r(m, O < g ? P : T, g))),
                g = m.length) : s === 0 && (f++,
                m = [0]),
                h[u++] = f,
                s && m[0] ? m[g++] = j[S] || 0 : (m = [j[S]],
                g = 1);
            while ((S++ < y || m[0] !== void 0) && _--)
        }
        return h[0] || h.shift(),
        p.e = l,
        he(p, o ? a + $e(p) + 1 : a)
    }
}();
function $m(e, t) {
    var r, n, i, a, o, s, l = 0, u = 0, f = e.constructor, c = f.precision;
    if ($e(e) > 16)
        throw Error(Wu + $e(e));
    if (!e.s)
        return new f(Qe);
    for (be = !1,
    s = c,
    o = new f(.03125); e.abs().gte(.1); )
        e = e.times(o),
        u += 5;
    for (n = Math.log(ar(2, u)) / Math.LN10 * 2 + 5 | 0,
    s += n,
    r = i = a = new f(Qe),
    f.precision = s; ; ) {
        if (i = he(i.times(e), s),
        r = r.times(++l),
        o = a.plus(Lt(i, r, s)),
        jt(o.d).slice(0, s) === jt(a.d).slice(0, s)) {
            for (; u--; )
                a = he(a.times(a), s);
            return f.precision = c,
            t == null ? (be = !0,
            he(a, c)) : a
        }
        a = o
    }
}
function $e(e) {
    for (var t = e.e * ye, r = e.d[0]; r >= 10; r /= 10)
        t++;
    return t
}
function ds(e, t, r) {
    if (t > e.LN10.sd())
        throw be = !0,
        r && (e.precision = r),
        Error(lt + "LN10 precision limit exceeded");
    return he(new e(e.LN10), t)
}
function Vt(e) {
    for (var t = ""; e--; )
        t += "0";
    return t
}
function Zn(e, t) {
    var r, n, i, a, o, s, l, u, f, c = 1, d = 10, p = e, h = p.d, m = p.constructor, g = m.precision;
    if (p.s < 1)
        throw Error(lt + (p.s ? "NaN" : "-Infinity"));
    if (p.eq(Qe))
        return new m(0);
    if (t == null ? (be = !1,
    u = g) : u = t,
    p.eq(10))
        return t == null && (be = !0),
        ds(m, u);
    if (u += d,
    m.precision = u,
    r = jt(h),
    n = r.charAt(0),
    a = $e(p),
    Math.abs(a) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
            p = p.times(e),
            r = jt(p.d),
            n = r.charAt(0),
            c++;
        a = $e(p),
        n > 1 ? (p = new m("0." + r),
        a++) : p = new m(n + "." + r.slice(1))
    } else
        return l = ds(m, u + 2, g).times(a + ""),
        p = Zn(new m(n + "." + r.slice(1)), u - d).plus(l),
        m.precision = g,
        t == null ? (be = !0,
        he(p, g)) : p;
    for (s = o = p = Lt(p.minus(Qe), p.plus(Qe), u),
    f = he(p.times(p), u),
    i = 3; ; ) {
        if (o = he(o.times(f), u),
        l = s.plus(Lt(o, new m(i), u)),
        jt(l.d).slice(0, u) === jt(s.d).slice(0, u))
            return s = s.times(2),
            a !== 0 && (s = s.plus(ds(m, u + 2, g).times(a + ""))),
            s = Lt(s, new m(c), u),
            m.precision = g,
            t == null ? (be = !0,
            he(s, g)) : s;
        s = l,
        i += 2
    }
}
function Yf(e, t) {
    var r, n, i;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
    (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n),
    r += +t.slice(n + 1),
    t = t.substring(0, n)) : r < 0 && (r = t.length),
    n = 0; t.charCodeAt(n) === 48; )
        ++n;
    for (i = t.length; t.charCodeAt(i - 1) === 48; )
        --i;
    if (t = t.slice(n, i),
    t) {
        if (i -= n,
        r = r - n - 1,
        e.e = mn(r / ye),
        e.d = [],
        n = (r + 1) % ye,
        r < 0 && (n += ye),
        n < i) {
            for (n && e.d.push(+t.slice(0, n)),
            i -= ye; n < i; )
                e.d.push(+t.slice(n, n += ye));
            t = t.slice(n),
            n = ye - t.length
        } else
            n -= i;
        for (; n--; )
            t += "0";
        if (e.d.push(+t),
        be && (e.e > Aa || e.e < -Aa))
            throw Error(Wu + r)
    } else
        e.s = 0,
        e.e = 0,
        e.d = [0];
    return e
}
function he(e, t, r) {
    var n, i, a, o, s, l, u, f, c = e.d;
    for (o = 1,
    a = c[0]; a >= 10; a /= 10)
        o++;
    if (n = t - o,
    n < 0)
        n += ye,
        i = t,
        u = c[f = 0];
    else {
        if (f = Math.ceil((n + 1) / ye),
        a = c.length,
        f >= a)
            return e;
        for (u = a = c[f],
        o = 1; a >= 10; a /= 10)
            o++;
        n %= ye,
        i = n - ye + o
    }
    if (r !== void 0 && (a = ar(10, o - i - 1),
    s = u / a % 10 | 0,
    l = t < 0 || c[f + 1] !== void 0 || u % a,
    l = r < 4 ? (s || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || l || r == 6 && (n > 0 ? i > 0 ? u / ar(10, o - i) : 0 : c[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))),
    t < 1 || !c[0])
        return l ? (a = $e(e),
        c.length = 1,
        t = t - a - 1,
        c[0] = ar(10, (ye - t % ye) % ye),
        e.e = mn(-t / ye) || 0) : (c.length = 1,
        c[0] = e.e = e.s = 0),
        e;
    if (n == 0 ? (c.length = f,
    a = 1,
    f--) : (c.length = f + 1,
    a = ar(10, ye - n),
    c[f] = i > 0 ? (u / ar(10, o - i) % ar(10, i) | 0) * a : 0),
    l)
        for (; ; )
            if (f == 0) {
                (c[0] += a) == Ne && (c[0] = 1,
                ++e.e);
                break
            } else {
                if (c[f] += a,
                c[f] != Ne)
                    break;
                c[f--] = 0,
                a = 1
            }
    for (n = c.length; c[--n] === 0; )
        c.pop();
    if (be && (e.e > Aa || e.e < -Aa))
        throw Error(Wu + $e(e));
    return e
}
function Cm(e, t) {
    var r, n, i, a, o, s, l, u, f, c, d = e.constructor, p = d.precision;
    if (!e.s || !t.s)
        return t.s ? t.s = -t.s : t = new d(e),
        be ? he(t, p) : t;
    if (l = e.d,
    c = t.d,
    n = t.e,
    u = e.e,
    l = l.slice(),
    o = u - n,
    o) {
        for (f = o < 0,
        f ? (r = l,
        o = -o,
        s = c.length) : (r = c,
        n = u,
        s = l.length),
        i = Math.max(Math.ceil(p / ye), s) + 2,
        o > i && (o = i,
        r.length = 1),
        r.reverse(),
        i = o; i--; )
            r.push(0);
        r.reverse()
    } else {
        for (i = l.length,
        s = c.length,
        f = i < s,
        f && (s = i),
        i = 0; i < s; i++)
            if (l[i] != c[i]) {
                f = l[i] < c[i];
                break
            }
        o = 0
    }
    for (f && (r = l,
    l = c,
    c = r,
    t.s = -t.s),
    s = l.length,
    i = c.length - s; i > 0; --i)
        l[s++] = 0;
    for (i = c.length; i > o; ) {
        if (l[--i] < c[i]) {
            for (a = i; a && l[--a] === 0; )
                l[a] = Ne - 1;
            --l[a],
            l[i] += Ne
        }
        l[i] -= c[i]
    }
    for (; l[--s] === 0; )
        l.pop();
    for (; l[0] === 0; l.shift())
        --n;
    return l[0] ? (t.d = l,
    t.e = n,
    be ? he(t, p) : t) : new d(0)
}
function xr(e, t, r) {
    var n, i = $e(e), a = jt(e.d), o = a.length;
    return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Vt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
    a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Vt(-i - 1) + a,
    r && (n = r - o) > 0 && (a += Vt(n))) : i >= o ? (a += Vt(i + 1 - o),
    r && (n = r - i - 1) > 0 && (a = a + "." + Vt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
    r && (n = r - o) > 0 && (i + 1 === o && (a += "."),
    a += Vt(n))),
    e.s < 0 ? "-" + a : a
}
function Zf(e, t) {
    if (e.length > t)
        return e.length = t,
        !0
}
function Tm(e) {
    var t, r, n;
    function i(a) {
        var o = this;
        if (!(o instanceof i))
            return new i(a);
        if (o.constructor = i,
        a instanceof i) {
            o.s = a.s,
            o.e = a.e,
            o.d = (a = a.d) ? a.slice() : a;
            return
        }
        if (typeof a == "number") {
            if (a * 0 !== 0)
                throw Error(vr + a);
            if (a > 0)
                o.s = 1;
            else if (a < 0)
                a = -a,
                o.s = -1;
            else {
                o.s = 0,
                o.e = 0,
                o.d = [0];
                return
            }
            if (a === ~~a && a < 1e7) {
                o.e = 0,
                o.d = [a];
                return
            }
            return Yf(o, a.toString())
        } else if (typeof a != "string")
            throw Error(vr + a);
        if (a.charCodeAt(0) === 45 ? (a = a.slice(1),
        o.s = -1) : o.s = 1,
        qA.test(a))
            Yf(o, a);
        else
            throw Error(vr + a)
    }
    if (i.prototype = H,
    i.ROUND_UP = 0,
    i.ROUND_DOWN = 1,
    i.ROUND_CEIL = 2,
    i.ROUND_FLOOR = 3,
    i.ROUND_HALF_UP = 4,
    i.ROUND_HALF_DOWN = 5,
    i.ROUND_HALF_EVEN = 6,
    i.ROUND_HALF_CEIL = 7,
    i.ROUND_HALF_FLOOR = 8,
    i.clone = Tm,
    i.config = i.set = HA,
    e === void 0 && (e = {}),
    e)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
        t = 0; t < n.length; )
            e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return i.config(e),
    i
}
function HA(e) {
    if (!e || typeof e != "object")
        throw Error(lt + "Object expected");
    var t, r, n, i = ["precision", 1, hn, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
    for (t = 0; t < i.length; t += 3)
        if ((n = e[r = i[t]]) !== void 0)
            if (mn(n) === n && n >= i[t + 1] && n <= i[t + 2])
                this[r] = n;
            else
                throw Error(vr + r + ": " + n);
    if ((n = e[r = "LN10"]) !== void 0)
        if (n == Math.LN10)
            this[r] = new this(n);
        else
            throw Error(vr + r + ": " + n);
    return this
}
var zu = Tm(FA);
Qe = new zu(1);
const pe = zu;
function VA(e) {
    return YA(e) || GA(e) || XA(e) || KA()
}
function KA() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function XA(e, t) {
    if (e) {
        if (typeof e == "string")
            return sl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return sl(e, t)
    }
}
function GA(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e)
}
function YA(e) {
    if (Array.isArray(e))
        return sl(e)
}
function sl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
var ZA = function(t) {
    return t
}
  , Em = {}
  , km = function(t) {
    return t === Em
}
  , Jf = function(t) {
    return function r() {
        return arguments.length === 0 || arguments.length === 1 && km(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments)
    }
}
  , JA = function e(t, r) {
    return t === 1 ? r : Jf(function() {
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
        var o = i.filter(function(s) {
            return s !== Em
        }).length;
        return o >= t ? r.apply(void 0, i) : e(t - o, Jf(function() {
            for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
                l[u] = arguments[u];
            var f = i.map(function(c) {
                return km(c) ? l.shift() : c
            });
            return r.apply(void 0, VA(f).concat(l))
        }))
    })
}
  , $o = function(t) {
    return JA(t.length, t)
}
  , ll = function(t, r) {
    for (var n = [], i = t; i < r; ++i)
        n[i - t] = i;
    return n
}
  , QA = $o(function(e, t) {
    return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
        return t[r]
    }).map(e)
})
  , ej = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
    if (!r.length)
        return ZA;
    var i = r.reverse()
      , a = i[0]
      , o = i.slice(1);
    return function() {
        return o.reduce(function(s, l) {
            return l(s)
        }, a.apply(void 0, arguments))
    }
}
  , ul = function(t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("")
}
  , Mm = function(t) {
    var r = null
      , n = null;
    return function() {
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
            a[o] = arguments[o];
        return r && a.every(function(s, l) {
            return s === r[l]
        }) || (r = a,
        n = t.apply(void 0, a)),
        n
    }
};
function tj(e) {
    var t;
    return e === 0 ? t = 1 : t = Math.floor(new pe(e).abs().log(10).toNumber()) + 1,
    t
}
function rj(e, t, r) {
    for (var n = new pe(e), i = 0, a = []; n.lt(t) && i < 1e5; )
        a.push(n.toNumber()),
        n = n.add(r),
        i++;
    return a
}
var nj = $o(function(e, t, r) {
    var n = +e
      , i = +t;
    return n + r * (i - n)
})
  , ij = $o(function(e, t, r) {
    var n = t - +e;
    return n = n || 1 / 0,
    (r - e) / n
})
  , aj = $o(function(e, t, r) {
    var n = t - +e;
    return n = n || 1 / 0,
    Math.max(0, Math.min(1, (r - e) / n))
});
const Co = {
    rangeStep: rj,
    getDigitCount: tj,
    interpolateNumber: nj,
    uninterpolateNumber: ij,
    uninterpolateTruncation: aj
};
function cl(e) {
    return lj(e) || sj(e) || Nm(e) || oj()
}
function oj() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function sj(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e))
        return Array.from(e)
}
function lj(e) {
    if (Array.isArray(e))
        return fl(e)
}
function Jn(e, t) {
    return fj(e) || cj(e, t) || Nm(e, t) || uj()
}
function uj() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Nm(e, t) {
    if (e) {
        if (typeof e == "string")
            return fl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return fl(e, t)
    }
}
function fl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function cj(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = []
          , n = !0
          , i = !1
          , a = void 0;
        try {
            for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value),
            !(t && r.length === t)); n = !0)
                ;
        } catch (l) {
            i = !0,
            a = l
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i)
                    throw a
            }
        }
        return r
    }
}
function fj(e) {
    if (Array.isArray(e))
        return e
}
function Im(e) {
    var t = Jn(e, 2)
      , r = t[0]
      , n = t[1]
      , i = r
      , a = n;
    return r > n && (i = n,
    a = r),
    [i, a]
}
function Dm(e, t, r) {
    if (e.lte(0))
        return new pe(0);
    var n = Co.getDigitCount(e.toNumber())
      , i = new pe(10).pow(n)
      , a = e.div(i)
      , o = n !== 1 ? .05 : .1
      , s = new pe(Math.ceil(a.div(o).toNumber())).add(r).mul(o)
      , l = s.mul(i);
    return t ? l : new pe(Math.ceil(l))
}
function dj(e, t, r) {
    var n = 1
      , i = new pe(e);
    if (!i.isint() && r) {
        var a = Math.abs(e);
        a < 1 ? (n = new pe(10).pow(Co.getDigitCount(e) - 1),
        i = new pe(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new pe(Math.floor(e)))
    } else
        e === 0 ? i = new pe(Math.floor((t - 1) / 2)) : r || (i = new pe(Math.floor(e)));
    var o = Math.floor((t - 1) / 2)
      , s = ej(QA(function(l) {
        return i.add(new pe(l - o).mul(n)).toNumber()
    }), ll);
    return s(0, t)
}
function Rm(e, t, r, n) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (r - 1)))
        return {
            step: new pe(0),
            tickMin: new pe(0),
            tickMax: new pe(0)
        };
    var a = Dm(new pe(t).sub(e).div(r - 1), n, i), o;
    e <= 0 && t >= 0 ? o = new pe(0) : (o = new pe(e).add(t).div(2),
    o = o.sub(new pe(o).mod(a)));
    var s = Math.ceil(o.sub(e).div(a).toNumber())
      , l = Math.ceil(new pe(t).sub(o).div(a).toNumber())
      , u = s + l + 1;
    return u > r ? Rm(e, t, r, n, i + 1) : (u < r && (l = t > 0 ? l + (r - u) : l,
    s = t > 0 ? s : s + (r - u)),
    {
        step: a,
        tickMin: o.sub(new pe(s).mul(a)),
        tickMax: o.add(new pe(l).mul(a))
    })
}
function pj(e) {
    var t = Jn(e, 2)
      , r = t[0]
      , n = t[1]
      , i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6
      , a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
      , o = Math.max(i, 2)
      , s = Im([r, n])
      , l = Jn(s, 2)
      , u = l[0]
      , f = l[1];
    if (u === -1 / 0 || f === 1 / 0) {
        var c = f === 1 / 0 ? [u].concat(cl(ll(0, i - 1).map(function() {
            return 1 / 0
        }))) : [].concat(cl(ll(0, i - 1).map(function() {
            return -1 / 0
        })), [f]);
        return r > n ? ul(c) : c
    }
    if (u === f)
        return dj(u, i, a);
    var d = Rm(u, f, o, a)
      , p = d.step
      , h = d.tickMin
      , m = d.tickMax
      , g = Co.rangeStep(h, m.add(new pe(.1).mul(p)), p);
    return r > n ? ul(g) : g
}
function hj(e, t) {
    var r = Jn(e, 2)
      , n = r[0]
      , i = r[1]
      , a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
      , o = Im([n, i])
      , s = Jn(o, 2)
      , l = s[0]
      , u = s[1];
    if (l === -1 / 0 || u === 1 / 0)
        return [n, i];
    if (l === u)
        return [l];
    var f = Math.max(t, 2)
      , c = Dm(new pe(u).sub(l).div(f - 1), a, 0)
      , d = [].concat(cl(Co.rangeStep(new pe(l), new pe(u).sub(new pe(.99).mul(c)), c)), [u]);
    return n > i ? ul(d) : d
}
var mj = Mm(pj)
  , vj = Mm(hj)
  , yj = "Invariant failed";
function wr(e, t) {
    throw new Error(yj)
}
var gj = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Xr(e) {
    "@babel/helpers - typeof";
    return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Xr(e)
}
function ja() {
    return ja = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ja.apply(this, arguments)
}
function bj(e, t) {
    return Sj(e) || _j(e, t) || wj(e, t) || xj()
}
function xj() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function wj(e, t) {
    if (e) {
        if (typeof e == "string")
            return Qf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Qf(e, t)
    }
}
function Qf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function _j(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t !== 0)
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function Sj(e) {
    if (Array.isArray(e))
        return e
}
function Oj(e, t) {
    if (e == null)
        return {};
    var r = Pj(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function Pj(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function Aj(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function jj(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Um(n.key), n)
    }
}
function $j(e, t, r) {
    return t && jj(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Cj(e, t, r) {
    return t = $a(t),
    Tj(e, Bm() ? Reflect.construct(t, r || [], $a(e).constructor) : t.apply(e, r))
}
function Tj(e, t) {
    if (t && (Xr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return Ej(e)
}
function Ej(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Bm() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Bm = function() {
        return !!e
    }
    )()
}
function $a(e) {
    return $a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    $a(e)
}
function kj(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && dl(e, t)
}
function dl(e, t) {
    return dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    dl(e, t)
}
function Lm(e, t, r) {
    return t = Um(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Um(e) {
    var t = Mj(e, "string");
    return Xr(t) == "symbol" ? t : t + ""
}
function Mj(e, t) {
    if (Xr(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Xr(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var To = function(e) {
    function t() {
        return Aj(this, t),
        Cj(this, t, arguments)
    }
    return kj(t, e),
    $j(t, [{
        key: "render",
        value: function() {
            var n = this.props
              , i = n.offset
              , a = n.layout
              , o = n.width
              , s = n.dataKey
              , l = n.data
              , u = n.dataPointFormatter
              , f = n.xAxis
              , c = n.yAxis
              , d = Oj(n, gj)
              , p = oe(d, !1);
            this.props.direction === "x" && f.type !== "number" && wr();
            var h = l.map(function(m) {
                var g = u(m, s)
                  , b = g.x
                  , _ = g.y
                  , w = g.value
                  , S = g.errorVal;
                if (!S)
                    return null;
                var y = [], x, O;
                if (Array.isArray(S)) {
                    var P = bj(S, 2);
                    x = P[0],
                    O = P[1]
                } else
                    x = O = S;
                if (a === "vertical") {
                    var A = f.scale
                      , k = _ + i
                      , j = k + o
                      , T = k - o
                      , N = A(w - x)
                      , E = A(w + O);
                    y.push({
                        x1: E,
                        y1: j,
                        x2: E,
                        y2: T
                    }),
                    y.push({
                        x1: N,
                        y1: k,
                        x2: E,
                        y2: k
                    }),
                    y.push({
                        x1: N,
                        y1: j,
                        x2: N,
                        y2: T
                    })
                } else if (a === "horizontal") {
                    var I = c.scale
                      , D = b + i
                      , B = D - o
                      , R = D + o
                      , L = I(w - x)
                      , K = I(w + O);
                    y.push({
                        x1: B,
                        y1: K,
                        x2: R,
                        y2: K
                    }),
                    y.push({
                        x1: D,
                        y1: L,
                        x2: D,
                        y2: K
                    }),
                    y.push({
                        x1: B,
                        y1: L,
                        x2: R,
                        y2: L
                    })
                }
                return $.createElement(xe, ja({
                    className: "recharts-errorBar",
                    key: "bar-".concat(y.map(function(G) {
                        return "".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
                    }))
                }, p), y.map(function(G) {
                    return $.createElement("line", ja({}, G, {
                        key: "line-".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
                    }))
                }))
            });
            return $.createElement(xe, {
                className: "recharts-errorBars"
            }, h)
        }
    }])
}($.Component);
Lm(To, "defaultProps", {
    stroke: "black",
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    layout: "horizontal"
});
Lm(To, "displayName", "ErrorBar");
function Qn(e) {
    "@babel/helpers - typeof";
    return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Qn(e)
}
function ed(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function nr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ed(Object(r), !0).forEach(function(n) {
            Nj(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ed(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Nj(e, t, r) {
    return t = Ij(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Ij(e) {
    var t = Dj(e, "string");
    return Qn(t) == "symbol" ? t : t + ""
}
function Dj(e, t) {
    if (Qn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Qn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Wm = function(t) {
    var r = t.children
      , n = t.formattedGraphicalItems
      , i = t.legendWidth
      , a = t.legendContent
      , o = Je(r, Rr);
    if (!o)
        return null;
    var s = Rr.defaultProps, l = s !== void 0 ? nr(nr({}, s), o.props) : {}, u;
    return o.props && o.props.payload ? u = o.props && o.props.payload : a === "children" ? u = (n || []).reduce(function(f, c) {
        var d = c.item
          , p = c.props
          , h = p.sectors || p.data || [];
        return f.concat(h.map(function(m) {
            return {
                type: o.props.iconType || d.props.legendType,
                value: m.name,
                color: m.fill,
                payload: m
            }
        }))
    }, []) : u = (n || []).map(function(f) {
        var c = f.item
          , d = c.type.defaultProps
          , p = d !== void 0 ? nr(nr({}, d), c.props) : {}
          , h = p.dataKey
          , m = p.name
          , g = p.legendType
          , b = p.hide;
        return {
            inactive: b,
            dataKey: h,
            type: l.iconType || g || "square",
            color: Fu(c),
            value: m || h,
            payload: p
        }
    }),
    nr(nr(nr({}, l), Rr.getWithHeight(o, i)), {}, {
        payload: u,
        item: o
    })
};
function ei(e) {
    "@babel/helpers - typeof";
    return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ei(e)
}
function td(e) {
    return Uj(e) || Lj(e) || Bj(e) || Rj()
}
function Rj() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Bj(e, t) {
    if (e) {
        if (typeof e == "string")
            return pl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return pl(e, t)
    }
}
function Lj(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function Uj(e) {
    if (Array.isArray(e))
        return pl(e)
}
function pl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function rd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function _e(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? rd(Object(r), !0).forEach(function(n) {
            Lr(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Lr(e, t, r) {
    return t = Wj(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Wj(e) {
    var t = zj(e, "string");
    return ei(t) == "symbol" ? t : t + ""
}
function zj(e, t) {
    if (ei(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ei(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function et(e, t, r) {
    return ue(e) || ue(t) ? r : Ee(t) ? st(e, t, r) : re(t) ? t(e) : r
}
function Nn(e, t, r, n) {
    var i = LA(e, function(s) {
        return et(s, t)
    });
    if (r === "number") {
        var a = i.filter(function(s) {
            return F(s) || parseFloat(s)
        });
        return a.length ? [jo(a), Xt(a)] : [1 / 0, -1 / 0]
    }
    var o = n ? i.filter(function(s) {
        return !ue(s)
    }) : i;
    return o.map(function(s) {
        return Ee(s) || s instanceof Date ? s : ""
    })
}
var Fj = function(t) {
    var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (s <= 1)
        return 0;
    if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
        for (var l = a.range, u = 0; u < s; u++) {
            var f = u > 0 ? i[u - 1].coordinate : i[s - 1].coordinate
              , c = i[u].coordinate
              , d = u >= s - 1 ? i[0].coordinate : i[u + 1].coordinate
              , p = void 0;
            if (yt(c - f) !== yt(d - c)) {
                var h = [];
                if (yt(d - c) === yt(l[1] - l[0])) {
                    p = d;
                    var m = c + l[1] - l[0];
                    h[0] = Math.min(m, (m + f) / 2),
                    h[1] = Math.max(m, (m + f) / 2)
                } else {
                    p = f;
                    var g = d + l[1] - l[0];
                    h[0] = Math.min(c, (g + c) / 2),
                    h[1] = Math.max(c, (g + c) / 2)
                }
                var b = [Math.min(c, (p + c) / 2), Math.max(c, (p + c) / 2)];
                if (t > b[0] && t <= b[1] || t >= h[0] && t <= h[1]) {
                    o = i[u].index;
                    break
                }
            } else {
                var _ = Math.min(f, d)
                  , w = Math.max(f, d);
                if (t > (_ + c) / 2 && t <= (w + c) / 2) {
                    o = i[u].index;
                    break
                }
            }
        }
    else
        for (var S = 0; S < s; S++)
            if (S === 0 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S > 0 && S < s - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S === s - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2) {
                o = n[S].index;
                break
            }
    return o
}
  , Fu = function(t) {
    var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? _e(_e({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, s = a.fill, l;
    switch (i) {
    case "Line":
        l = o;
        break;
    case "Area":
    case "Radar":
        l = o && o !== "none" ? o : s;
        break;
    default:
        l = s;
        break
    }
    return l
}
  , qj = function(t) {
    var r = t.barSize
      , n = t.totalSize
      , i = t.stackGroups
      , a = i === void 0 ? {} : i;
    if (!a)
        return {};
    for (var o = {}, s = Object.keys(a), l = 0, u = s.length; l < u; l++)
        for (var f = a[s[l]].stackGroups, c = Object.keys(f), d = 0, p = c.length; d < p; d++) {
            var h = f[c[d]]
              , m = h.items
              , g = h.cateAxisId
              , b = m.filter(function(O) {
                return Bt(O.type).indexOf("Bar") >= 0
            });
            if (b && b.length) {
                var _ = b[0].type.defaultProps
                  , w = _ !== void 0 ? _e(_e({}, _), b[0].props) : b[0].props
                  , S = w.barSize
                  , y = w[g];
                o[y] || (o[y] = []);
                var x = ue(S) ? r : S;
                o[y].push({
                    item: b[0],
                    stackList: b.slice(1),
                    barSize: ue(x) ? void 0 : br(x, n, 0)
                })
            }
        }
    return o
}
  , Hj = function(t) {
    var r = t.barGap
      , n = t.barCategoryGap
      , i = t.bandSize
      , a = t.sizeList
      , o = a === void 0 ? [] : a
      , s = t.maxBarSize
      , l = o.length;
    if (l < 1)
        return null;
    var u = br(r, i, 0, !0), f, c = [];
    if (o[0].barSize === +o[0].barSize) {
        var d = !1
          , p = i / l
          , h = o.reduce(function(S, y) {
            return S + y.barSize || 0
        }, 0);
        h += (l - 1) * u,
        h >= i && (h -= (l - 1) * u,
        u = 0),
        h >= i && p > 0 && (d = !0,
        p *= .9,
        h = l * p);
        var m = (i - h) / 2 >> 0
          , g = {
            offset: m - u,
            size: 0
        };
        f = o.reduce(function(S, y) {
            var x = {
                item: y.item,
                position: {
                    offset: g.offset + g.size + u,
                    size: d ? p : y.barSize
                }
            }
              , O = [].concat(td(S), [x]);
            return g = O[O.length - 1].position,
            y.stackList && y.stackList.length && y.stackList.forEach(function(P) {
                O.push({
                    item: P,
                    position: g
                })
            }),
            O
        }, c)
    } else {
        var b = br(n, i, 0, !0);
        i - 2 * b - (l - 1) * u <= 0 && (u = 0);
        var _ = (i - 2 * b - (l - 1) * u) / l;
        _ > 1 && (_ >>= 0);
        var w = s === +s ? Math.min(_, s) : _;
        f = o.reduce(function(S, y, x) {
            var O = [].concat(td(S), [{
                item: y.item,
                position: {
                    offset: b + (_ + u) * x + (_ - w) / 2,
                    size: w
                }
            }]);
            return y.stackList && y.stackList.length && y.stackList.forEach(function(P) {
                O.push({
                    item: P,
                    position: O[O.length - 1].position
                })
            }),
            O
        }, c)
    }
    return f
}
  , Vj = function(t, r, n, i) {
    var a = n.children
      , o = n.width
      , s = n.margin
      , l = o - (s.left || 0) - (s.right || 0)
      , u = Wm({
        children: a,
        legendWidth: l
    });
    if (u) {
        var f = i || {}
          , c = f.width
          , d = f.height
          , p = u.align
          , h = u.verticalAlign
          , m = u.layout;
        if ((m === "vertical" || m === "horizontal" && h === "middle") && p !== "center" && F(t[p]))
            return _e(_e({}, t), {}, Lr({}, p, t[p] + (c || 0)));
        if ((m === "horizontal" || m === "vertical" && p === "center") && h !== "middle" && F(t[h]))
            return _e(_e({}, t), {}, Lr({}, h, t[h] + (d || 0)))
    }
    return t
}
  , Kj = function(t, r, n) {
    return ue(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0
}
  , zm = function(t, r, n, i, a) {
    var o = r.props.children
      , s = bt(o, To).filter(function(u) {
        return Kj(i, a, u.props.direction)
    });
    if (s && s.length) {
        var l = s.map(function(u) {
            return u.props.dataKey
        });
        return t.reduce(function(u, f) {
            var c = et(f, n);
            if (ue(c))
                return u;
            var d = Array.isArray(c) ? [jo(c), Xt(c)] : [c, c]
              , p = l.reduce(function(h, m) {
                var g = et(f, m, 0)
                  , b = d[0] - Math.abs(Array.isArray(g) ? g[0] : g)
                  , _ = d[1] + Math.abs(Array.isArray(g) ? g[1] : g);
                return [Math.min(b, h[0]), Math.max(_, h[1])]
            }, [1 / 0, -1 / 0]);
            return [Math.min(p[0], u[0]), Math.max(p[1], u[1])]
        }, [1 / 0, -1 / 0])
    }
    return null
}
  , Xj = function(t, r, n, i, a) {
    var o = r.map(function(s) {
        return zm(t, s, n, a, i)
    }).filter(function(s) {
        return !ue(s)
    });
    return o && o.length ? o.reduce(function(s, l) {
        return [Math.min(s[0], l[0]), Math.max(s[1], l[1])]
    }, [1 / 0, -1 / 0]) : null
}
  , Fm = function(t, r, n, i, a) {
    var o = r.map(function(l) {
        var u = l.props.dataKey;
        return n === "number" && u && zm(t, l, u, i) || Nn(t, u, n, a)
    });
    if (n === "number")
        return o.reduce(function(l, u) {
            return [Math.min(l[0], u[0]), Math.max(l[1], u[1])]
        }, [1 / 0, -1 / 0]);
    var s = {};
    return o.reduce(function(l, u) {
        for (var f = 0, c = u.length; f < c; f++)
            s[u[f]] || (s[u[f]] = !0,
            l.push(u[f]));
        return l
    }, [])
}
  , qm = function(t, r) {
    return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis"
}
  , dr = function(t, r, n) {
    if (!t)
        return null;
    var i = t.scale
      , a = t.duplicateDomain
      , o = t.type
      , s = t.range
      , l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2
      , u = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / l : 0;
    if (u = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? yt(s[0] - s[1]) * 2 * u : u,
    r && (t.ticks || t.niceTicks)) {
        var f = (t.ticks || t.niceTicks).map(function(c) {
            var d = a ? a.indexOf(c) : c;
            return {
                coordinate: i(d) + u,
                value: c,
                offset: u
            }
        });
        return f.filter(function(c) {
            return !fn(c.coordinate)
        })
    }
    return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(c, d) {
        return {
            coordinate: i(c) + u,
            value: c,
            index: d,
            offset: u
        }
    }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(c) {
        return {
            coordinate: i(c) + u,
            value: c,
            offset: u
        }
    }) : i.domain().map(function(c, d) {
        return {
            coordinate: i(c) + u,
            value: a ? a[c] : c,
            index: d,
            offset: u
        }
    })
}
  , ps = new WeakMap
  , qi = function(t, r) {
    if (typeof r != "function")
        return t;
    ps.has(t) || ps.set(t, new WeakMap);
    var n = ps.get(t);
    if (n.has(r))
        return n.get(r);
    var i = function() {
        t.apply(void 0, arguments),
        r.apply(void 0, arguments)
    };
    return n.set(r, i),
    i
}
  , Gj = function(t, r, n) {
    var i = t.scale
      , a = t.type
      , o = t.layout
      , s = t.axisType;
    if (i === "auto")
        return o === "radial" && s === "radiusAxis" ? {
            scale: Hn(),
            realScaleType: "band"
        } : o === "radial" && s === "angleAxis" ? {
            scale: _a(),
            realScaleType: "linear"
        } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
            scale: Mn(),
            realScaleType: "point"
        } : a === "category" ? {
            scale: Hn(),
            realScaleType: "band"
        } : {
            scale: _a(),
            realScaleType: "linear"
        };
    if (Ai(i)) {
        var l = "scale".concat(mo(i));
        return {
            scale: (Gf[l] || Mn)(),
            realScaleType: Gf[l] ? l : "point"
        }
    }
    return re(i) ? {
        scale: i
    } : {
        scale: Mn(),
        realScaleType: "point"
    }
}
  , nd = 1e-4
  , Yj = function(t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
        var n = r.length
          , i = t.range()
          , a = Math.min(i[0], i[1]) - nd
          , o = Math.max(i[0], i[1]) + nd
          , s = t(r[0])
          , l = t(r[n - 1]);
        (s < a || s > o || l < a || l > o) && t.domain([r[0], r[n - 1]])
    }
}
  , Zj = function(t, r) {
    if (!t)
        return null;
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n].item === r)
            return t[n].position;
    return null
}
  , Jj = function(t, r) {
    if (!r || r.length !== 2 || !F(r[0]) || !F(r[1]))
        return t;
    var n = Math.min(r[0], r[1])
      , i = Math.max(r[0], r[1])
      , a = [t[0], t[1]];
    return (!F(t[0]) || t[0] < n) && (a[0] = n),
    (!F(t[1]) || t[1] > i) && (a[1] = i),
    a[0] > i && (a[0] = i),
    a[1] < n && (a[1] = n),
    a
}
  , Qj = function(t) {
    var r = t.length;
    if (!(r <= 0))
        for (var n = 0, i = t[0].length; n < i; ++n)
            for (var a = 0, o = 0, s = 0; s < r; ++s) {
                var l = fn(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
                l >= 0 ? (t[s][n][0] = a,
                t[s][n][1] = a + l,
                a = t[s][n][1]) : (t[s][n][0] = o,
                t[s][n][1] = o + l,
                o = t[s][n][1])
            }
}
  , e$ = function(t) {
    var r = t.length;
    if (!(r <= 0))
        for (var n = 0, i = t[0].length; n < i; ++n)
            for (var a = 0, o = 0; o < r; ++o) {
                var s = fn(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                s >= 0 ? (t[o][n][0] = a,
                t[o][n][1] = a + s,
                a = t[o][n][1]) : (t[o][n][0] = 0,
                t[o][n][1] = 0)
            }
}
  , t$ = {
    sign: Qj,
    expand: $x,
    none: Ur,
    silhouette: Cx,
    wiggle: Tx,
    positive: e$
}
  , r$ = function(t, r, n) {
    var i = r.map(function(s) {
        return s.props.dataKey
    })
      , a = t$[n]
      , o = jx().keys(i).value(function(s, l) {
        return +et(s, l, 0)
    }).order(Fs).offset(a);
    return o(t)
}
  , n$ = function(t, r, n, i, a, o) {
    if (!t)
        return null;
    var s = o ? r.reverse() : r
      , l = {}
      , u = s.reduce(function(c, d) {
        var p, h = (p = d.type) !== null && p !== void 0 && p.defaultProps ? _e(_e({}, d.type.defaultProps), d.props) : d.props, m = h.stackId, g = h.hide;
        if (g)
            return c;
        var b = h[n]
          , _ = c[b] || {
            hasStack: !1,
            stackGroups: {}
        };
        if (Ee(m)) {
            var w = _.stackGroups[m] || {
                numericAxisId: n,
                cateAxisId: i,
                items: []
            };
            w.items.push(d),
            _.hasStack = !0,
            _.stackGroups[m] = w
        } else
            _.stackGroups[ji("_stackId_")] = {
                numericAxisId: n,
                cateAxisId: i,
                items: [d]
            };
        return _e(_e({}, c), {}, Lr({}, b, _))
    }, l)
      , f = {};
    return Object.keys(u).reduce(function(c, d) {
        var p = u[d];
        if (p.hasStack) {
            var h = {};
            p.stackGroups = Object.keys(p.stackGroups).reduce(function(m, g) {
                var b = p.stackGroups[g];
                return _e(_e({}, m), {}, Lr({}, g, {
                    numericAxisId: n,
                    cateAxisId: i,
                    items: b.items,
                    stackedData: r$(t, b.items, a)
                }))
            }, h)
        }
        return _e(_e({}, c), {}, Lr({}, d, p))
    }, f)
}
  , i$ = function(t, r) {
    var n = r.realScaleType
      , i = r.type
      , a = r.tickCount
      , o = r.originalDomain
      , s = r.allowDecimals
      , l = n || r.scale;
    if (l !== "auto" && l !== "linear")
        return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
        var u = t.domain();
        if (!u.length)
            return null;
        var f = mj(u, a, s);
        return t.domain([jo(f), Xt(f)]),
        {
            niceTicks: f
        }
    }
    if (a && i === "number") {
        var c = t.domain()
          , d = vj(c, a, s);
        return {
            niceTicks: d
        }
    }
    return null
};
function id(e) {
    var t = e.axis
      , r = e.ticks
      , n = e.bandSize
      , i = e.entry
      , a = e.index
      , o = e.dataKey;
    if (t.type === "category") {
        if (!t.allowDuplicatedCategory && t.dataKey && !ue(i[t.dataKey])) {
            var s = ra(r, "value", i[t.dataKey]);
            if (s)
                return s.coordinate + n / 2
        }
        return r[a] ? r[a].coordinate + n / 2 : null
    }
    var l = et(i, ue(o) ? t.dataKey : o);
    return ue(l) ? null : t.scale(l)
}
var ad = function(t) {
    var r = t.axis
      , n = t.ticks
      , i = t.offset
      , a = t.bandSize
      , o = t.entry
      , s = t.index;
    if (r.type === "category")
        return n[s] ? n[s].coordinate + i : null;
    var l = et(o, r.dataKey, r.domain[s]);
    return ue(l) ? null : r.scale(l) - a / 2 + i
}
  , a$ = function(t) {
    var r = t.numericAxis
      , n = r.scale.domain();
    if (r.type === "number") {
        var i = Math.min(n[0], n[1])
          , a = Math.max(n[0], n[1]);
        return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i
    }
    return n[0]
}
  , o$ = function(t, r) {
    var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? _e(_e({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
    if (Ee(a)) {
        var o = r[a];
        if (o) {
            var s = o.items.indexOf(t);
            return s >= 0 ? o.stackedData[s] : null
        }
    }
    return null
}
  , s$ = function(t) {
    return t.reduce(function(r, n) {
        return [jo(n.concat([r[0]]).filter(F)), Xt(n.concat([r[1]]).filter(F))]
    }, [1 / 0, -1 / 0])
}
  , Hm = function(t, r, n) {
    return Object.keys(t).reduce(function(i, a) {
        var o = t[a]
          , s = o.stackedData
          , l = s.reduce(function(u, f) {
            var c = s$(f.slice(r, n + 1));
            return [Math.min(u[0], c[0]), Math.max(u[1], c[1])]
        }, [1 / 0, -1 / 0]);
        return [Math.min(l[0], i[0]), Math.max(l[1], i[1])]
    }, [1 / 0, -1 / 0]).map(function(i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i
    })
}
  , od = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/
  , sd = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/
  , hl = function(t, r, n) {
    if (re(t))
        return t(r, n);
    if (!Array.isArray(t))
        return r;
    var i = [];
    if (F(t[0]))
        i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (od.test(t[0])) {
        var a = +od.exec(t[0])[1];
        i[0] = r[0] - a
    } else
        re(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
    if (F(t[1]))
        i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (sd.test(t[1])) {
        var o = +sd.exec(t[1])[1];
        i[1] = r[1] + o
    } else
        re(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
    return i
}
  , Ca = function(t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
        var i = t.scale.bandwidth();
        if (!n || i > 0)
            return i
    }
    if (t && r && r.length >= 2) {
        for (var a = yu(r, function(c) {
            return c.coordinate
        }), o = 1 / 0, s = 1, l = a.length; s < l; s++) {
            var u = a[s]
              , f = a[s - 1];
            o = Math.min((u.coordinate || 0) - (f.coordinate || 0), o)
        }
        return o === 1 / 0 ? 0 : o
    }
    return n ? void 0 : 0
}
  , ld = function(t, r, n) {
    return !t || !t.length || Yn(t, st(n, "type.defaultProps.domain")) ? r : t
}
  , Vm = function(t, r) {
    var n = t.type.defaultProps ? _e(_e({}, t.type.defaultProps), t.props) : t.props
      , i = n.dataKey
      , a = n.name
      , o = n.unit
      , s = n.formatter
      , l = n.tooltipType
      , u = n.chartType
      , f = n.hide;
    return _e(_e({}, oe(t, !1)), {}, {
        dataKey: i,
        unit: o,
        formatter: s,
        name: a || i,
        color: Fu(t),
        value: et(r, i),
        type: l,
        payload: r,
        chartType: u,
        hide: f
    })
};
function ti(e) {
    "@babel/helpers - typeof";
    return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ti(e)
}
function ud(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function cd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ud(Object(r), !0).forEach(function(n) {
            l$(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ud(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function l$(e, t, r) {
    return t = u$(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function u$(e) {
    var t = c$(e, "string");
    return ti(t) == "symbol" ? t : t + ""
}
function c$(e, t) {
    if (ti(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ti(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Ta = Math.PI / 180
  , f$ = function(t) {
    return t * 180 / Math.PI
}
  , Be = function(t, r, n, i) {
    return {
        x: t + Math.cos(-Ta * i) * n,
        y: r + Math.sin(-Ta * i) * n
    }
}
  , d$ = function(t, r) {
    var n = t.x
      , i = t.y
      , a = r.x
      , o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2))
}
  , p$ = function(t, r) {
    var n = t.x
      , i = t.y
      , a = r.cx
      , o = r.cy
      , s = d$({
        x: n,
        y: i
    }, {
        x: a,
        y: o
    });
    if (s <= 0)
        return {
            radius: s
        };
    var l = (n - a) / s
      , u = Math.acos(l);
    return i > o && (u = 2 * Math.PI - u),
    {
        radius: s,
        angle: f$(u),
        angleInRadian: u
    }
}
  , h$ = function(t) {
    var r = t.startAngle
      , n = t.endAngle
      , i = Math.floor(r / 360)
      , a = Math.floor(n / 360)
      , o = Math.min(i, a);
    return {
        startAngle: r - o * 360,
        endAngle: n - o * 360
    }
}
  , m$ = function(t, r) {
    var n = r.startAngle
      , i = r.endAngle
      , a = Math.floor(n / 360)
      , o = Math.floor(i / 360)
      , s = Math.min(a, o);
    return t + s * 360
}
  , fd = function(t, r) {
    var n = t.x
      , i = t.y
      , a = p$({
        x: n,
        y: i
    }, r)
      , o = a.radius
      , s = a.angle
      , l = r.innerRadius
      , u = r.outerRadius;
    if (o < l || o > u)
        return !1;
    if (o === 0)
        return !0;
    var f = h$(r), c = f.startAngle, d = f.endAngle, p = s, h;
    if (c <= d) {
        for (; p > d; )
            p -= 360;
        for (; p < c; )
            p += 360;
        h = p >= c && p <= d
    } else {
        for (; p > c; )
            p -= 360;
        for (; p < d; )
            p += 360;
        h = p >= d && p <= c
    }
    return h ? cd(cd({}, r), {}, {
        radius: o,
        angle: m$(p, r)
    }) : null
};
function ri(e) {
    "@babel/helpers - typeof";
    return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ri(e)
}
var v$ = ["offset"];
function y$(e) {
    return w$(e) || x$(e) || b$(e) || g$()
}
function g$() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function b$(e, t) {
    if (e) {
        if (typeof e == "string")
            return ml(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return ml(e, t)
    }
}
function x$(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function w$(e) {
    if (Array.isArray(e))
        return ml(e)
}
function ml(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function _$(e, t) {
    if (e == null)
        return {};
    var r = S$(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function S$(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function dd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Te(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? dd(Object(r), !0).forEach(function(n) {
            O$(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function O$(e, t, r) {
    return t = P$(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function P$(e) {
    var t = A$(e, "string");
    return ri(t) == "symbol" ? t : t + ""
}
function A$(e, t) {
    if (ri(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ri(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function ni() {
    return ni = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ni.apply(this, arguments)
}
var j$ = function(t) {
    var r = t.value
      , n = t.formatter
      , i = ue(t.children) ? r : t.children;
    return re(n) ? n(i) : i
}
  , $$ = function(t, r) {
    var n = yt(r - t)
      , i = Math.min(Math.abs(r - t), 360);
    return n * i
}
  , C$ = function(t, r, n) {
    var i = t.position, a = t.viewBox, o = t.offset, s = t.className, l = a, u = l.cx, f = l.cy, c = l.innerRadius, d = l.outerRadius, p = l.startAngle, h = l.endAngle, m = l.clockWise, g = (c + d) / 2, b = $$(p, h), _ = b >= 0 ? 1 : -1, w, S;
    i === "insideStart" ? (w = p + _ * o,
    S = m) : i === "insideEnd" ? (w = h - _ * o,
    S = !m) : i === "end" && (w = h + _ * o,
    S = m),
    S = b <= 0 ? S : !S;
    var y = Be(u, f, g, w)
      , x = Be(u, f, g, w + (S ? 1 : -1) * 359)
      , O = "M".concat(y.x, ",").concat(y.y, `
    A`).concat(g, ",").concat(g, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y)
      , P = ue(t.id) ? ji("recharts-radial-line-") : t.id;
    return $.createElement("text", ni({}, n, {
        dominantBaseline: "central",
        className: te("recharts-radial-bar-label", s)
    }), $.createElement("defs", null, $.createElement("path", {
        id: P,
        d: O
    })), $.createElement("textPath", {
        xlinkHref: "#".concat(P)
    }, r))
}
  , T$ = function(t) {
    var r = t.viewBox
      , n = t.offset
      , i = t.position
      , a = r
      , o = a.cx
      , s = a.cy
      , l = a.innerRadius
      , u = a.outerRadius
      , f = a.startAngle
      , c = a.endAngle
      , d = (f + c) / 2;
    if (i === "outside") {
        var p = Be(o, s, u + n, d)
          , h = p.x
          , m = p.y;
        return {
            x: h,
            y: m,
            textAnchor: h >= o ? "start" : "end",
            verticalAnchor: "middle"
        }
    }
    if (i === "center")
        return {
            x: o,
            y: s,
            textAnchor: "middle",
            verticalAnchor: "middle"
        };
    if (i === "centerTop")
        return {
            x: o,
            y: s,
            textAnchor: "middle",
            verticalAnchor: "start"
        };
    if (i === "centerBottom")
        return {
            x: o,
            y: s,
            textAnchor: "middle",
            verticalAnchor: "end"
        };
    var g = (l + u) / 2
      , b = Be(o, s, g, d)
      , _ = b.x
      , w = b.y;
    return {
        x: _,
        y: w,
        textAnchor: "middle",
        verticalAnchor: "middle"
    }
}
  , E$ = function(t) {
    var r = t.viewBox
      , n = t.parentViewBox
      , i = t.offset
      , a = t.position
      , o = r
      , s = o.x
      , l = o.y
      , u = o.width
      , f = o.height
      , c = f >= 0 ? 1 : -1
      , d = c * i
      , p = c > 0 ? "end" : "start"
      , h = c > 0 ? "start" : "end"
      , m = u >= 0 ? 1 : -1
      , g = m * i
      , b = m > 0 ? "end" : "start"
      , _ = m > 0 ? "start" : "end";
    if (a === "top") {
        var w = {
            x: s + u / 2,
            y: l - c * i,
            textAnchor: "middle",
            verticalAnchor: p
        };
        return Te(Te({}, w), n ? {
            height: Math.max(l - n.y, 0),
            width: u
        } : {})
    }
    if (a === "bottom") {
        var S = {
            x: s + u / 2,
            y: l + f + d,
            textAnchor: "middle",
            verticalAnchor: h
        };
        return Te(Te({}, S), n ? {
            height: Math.max(n.y + n.height - (l + f), 0),
            width: u
        } : {})
    }
    if (a === "left") {
        var y = {
            x: s - g,
            y: l + f / 2,
            textAnchor: b,
            verticalAnchor: "middle"
        };
        return Te(Te({}, y), n ? {
            width: Math.max(y.x - n.x, 0),
            height: f
        } : {})
    }
    if (a === "right") {
        var x = {
            x: s + u + g,
            y: l + f / 2,
            textAnchor: _,
            verticalAnchor: "middle"
        };
        return Te(Te({}, x), n ? {
            width: Math.max(n.x + n.width - x.x, 0),
            height: f
        } : {})
    }
    var O = n ? {
        width: u,
        height: f
    } : {};
    return a === "insideLeft" ? Te({
        x: s + g,
        y: l + f / 2,
        textAnchor: _,
        verticalAnchor: "middle"
    }, O) : a === "insideRight" ? Te({
        x: s + u - g,
        y: l + f / 2,
        textAnchor: b,
        verticalAnchor: "middle"
    }, O) : a === "insideTop" ? Te({
        x: s + u / 2,
        y: l + d,
        textAnchor: "middle",
        verticalAnchor: h
    }, O) : a === "insideBottom" ? Te({
        x: s + u / 2,
        y: l + f - d,
        textAnchor: "middle",
        verticalAnchor: p
    }, O) : a === "insideTopLeft" ? Te({
        x: s + g,
        y: l + d,
        textAnchor: _,
        verticalAnchor: h
    }, O) : a === "insideTopRight" ? Te({
        x: s + u - g,
        y: l + d,
        textAnchor: b,
        verticalAnchor: h
    }, O) : a === "insideBottomLeft" ? Te({
        x: s + g,
        y: l + f - d,
        textAnchor: _,
        verticalAnchor: p
    }, O) : a === "insideBottomRight" ? Te({
        x: s + u - g,
        y: l + f - d,
        textAnchor: b,
        verticalAnchor: p
    }, O) : cn(a) && (F(a.x) || ur(a.x)) && (F(a.y) || ur(a.y)) ? Te({
        x: s + br(a.x, u),
        y: l + br(a.y, f),
        textAnchor: "end",
        verticalAnchor: "end"
    }, O) : Te({
        x: s + u / 2,
        y: l + f / 2,
        textAnchor: "middle",
        verticalAnchor: "middle"
    }, O)
}
  , k$ = function(t) {
    return "cx"in t && F(t.cx)
};
function We(e) {
    var t = e.offset
      , r = t === void 0 ? 5 : t
      , n = _$(e, v$)
      , i = Te({
        offset: r
    }, n)
      , a = i.viewBox
      , o = i.position
      , s = i.value
      , l = i.children
      , u = i.content
      , f = i.className
      , c = f === void 0 ? "" : f
      , d = i.textBreakAll;
    if (!a || ue(s) && ue(l) && !C.isValidElement(u) && !re(u))
        return null;
    if (C.isValidElement(u))
        return C.cloneElement(u, i);
    var p;
    if (re(u)) {
        if (p = C.createElement(u, i),
        C.isValidElement(p))
            return p
    } else
        p = j$(i);
    var h = k$(a)
      , m = oe(i, !0);
    if (h && (o === "insideStart" || o === "insideEnd" || o === "end"))
        return C$(i, p, m);
    var g = h ? T$(i) : E$(i);
    return $.createElement(ma, ni({
        className: te("recharts-label", c)
    }, m, g, {
        breakAll: d
    }), p)
}
We.displayName = "Label";
var Km = function(t) {
    var r = t.cx
      , n = t.cy
      , i = t.angle
      , a = t.startAngle
      , o = t.endAngle
      , s = t.r
      , l = t.radius
      , u = t.innerRadius
      , f = t.outerRadius
      , c = t.x
      , d = t.y
      , p = t.top
      , h = t.left
      , m = t.width
      , g = t.height
      , b = t.clockWise
      , _ = t.labelViewBox;
    if (_)
        return _;
    if (F(m) && F(g)) {
        if (F(c) && F(d))
            return {
                x: c,
                y: d,
                width: m,
                height: g
            };
        if (F(p) && F(h))
            return {
                x: p,
                y: h,
                width: m,
                height: g
            }
    }
    return F(c) && F(d) ? {
        x: c,
        y: d,
        width: 0,
        height: 0
    } : F(r) && F(n) ? {
        cx: r,
        cy: n,
        startAngle: a || i || 0,
        endAngle: o || i || 0,
        innerRadius: u || 0,
        outerRadius: f || l || s || 0,
        clockWise: b
    } : t.viewBox ? t.viewBox : {}
}
  , M$ = function(t, r) {
    return t ? t === !0 ? $.createElement(We, {
        key: "label-implicit",
        viewBox: r
    }) : Ee(t) ? $.createElement(We, {
        key: "label-implicit",
        viewBox: r,
        value: t
    }) : C.isValidElement(t) ? t.type === We ? C.cloneElement(t, {
        key: "label-implicit",
        viewBox: r
    }) : $.createElement(We, {
        key: "label-implicit",
        content: t,
        viewBox: r
    }) : re(t) ? $.createElement(We, {
        key: "label-implicit",
        content: t,
        viewBox: r
    }) : cn(t) ? $.createElement(We, ni({
        viewBox: r
    }, t, {
        key: "label-implicit"
    })) : null : null
}
  , N$ = function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || !t.children && n && !t.label)
        return null;
    var i = t.children
      , a = Km(t)
      , o = bt(i, We).map(function(l, u) {
        return C.cloneElement(l, {
            viewBox: r || a,
            key: "label-".concat(u)
        })
    });
    if (!n)
        return o;
    var s = M$(t.label, r || a);
    return [s].concat(y$(o))
};
We.parseViewBox = Km;
We.renderCallByParent = N$;
function I$(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0
}
var D$ = I$;
const R$ = ke(D$);
function ii(e) {
    "@babel/helpers - typeof";
    return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ii(e)
}
var B$ = ["valueAccessor"]
  , L$ = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function U$(e) {
    return q$(e) || F$(e) || z$(e) || W$()
}
function W$() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function z$(e, t) {
    if (e) {
        if (typeof e == "string")
            return vl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return vl(e, t)
    }
}
function F$(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function q$(e) {
    if (Array.isArray(e))
        return vl(e)
}
function vl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function Ea() {
    return Ea = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Ea.apply(this, arguments)
}
function pd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function hd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? pd(Object(r), !0).forEach(function(n) {
            H$(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function H$(e, t, r) {
    return t = V$(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function V$(e) {
    var t = K$(e, "string");
    return ii(t) == "symbol" ? t : t + ""
}
function K$(e, t) {
    if (ii(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ii(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function md(e, t) {
    if (e == null)
        return {};
    var r = X$(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function X$(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
var G$ = function(t) {
    return Array.isArray(t.value) ? R$(t.value) : t.value
};
function Zt(e) {
    var t = e.valueAccessor
      , r = t === void 0 ? G$ : t
      , n = md(e, B$)
      , i = n.data
      , a = n.dataKey
      , o = n.clockWise
      , s = n.id
      , l = n.textBreakAll
      , u = md(n, L$);
    return !i || !i.length ? null : $.createElement(xe, {
        className: "recharts-label-list"
    }, i.map(function(f, c) {
        var d = ue(a) ? r(f, c) : et(f && f.payload, a)
          , p = ue(s) ? {} : {
            id: "".concat(s, "-").concat(c)
        };
        return $.createElement(We, Ea({}, oe(f, !0), u, p, {
            parentViewBox: f.parentViewBox,
            value: d,
            textBreakAll: l,
            viewBox: We.parseViewBox(ue(o) ? f : hd(hd({}, f), {}, {
                clockWise: o
            })),
            key: "label-".concat(c),
            index: c
        }))
    }))
}
Zt.displayName = "LabelList";
function Y$(e, t) {
    return e ? e === !0 ? $.createElement(Zt, {
        key: "labelList-implicit",
        data: t
    }) : $.isValidElement(e) || re(e) ? $.createElement(Zt, {
        key: "labelList-implicit",
        data: t,
        content: e
    }) : cn(e) ? $.createElement(Zt, Ea({
        data: t
    }, e, {
        key: "labelList-implicit"
    })) : null : null
}
function Z$(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || !e.children && r && !e.label)
        return null;
    var n = e.children
      , i = bt(n, Zt).map(function(o, s) {
        return C.cloneElement(o, {
            data: t,
            key: "labelList-".concat(s)
        })
    });
    if (!r)
        return i;
    var a = Y$(e.label, t);
    return [a].concat(U$(i))
}
Zt.renderCallByParent = Z$;
function ai(e) {
    "@babel/helpers - typeof";
    return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ai(e)
}
function yl() {
    return yl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    yl.apply(this, arguments)
}
function vd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function yd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? vd(Object(r), !0).forEach(function(n) {
            J$(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function J$(e, t, r) {
    return t = Q$(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Q$(e) {
    var t = eC(e, "string");
    return ai(t) == "symbol" ? t : t + ""
}
function eC(e, t) {
    if (ai(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ai(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var tC = function(t, r) {
    var n = yt(r - t)
      , i = Math.min(Math.abs(r - t), 359.999);
    return n * i
}
  , Hi = function(t) {
    var r = t.cx
      , n = t.cy
      , i = t.radius
      , a = t.angle
      , o = t.sign
      , s = t.isExternal
      , l = t.cornerRadius
      , u = t.cornerIsExternal
      , f = l * (s ? 1 : -1) + i
      , c = Math.asin(l / f) / Ta
      , d = u ? a : a + o * c
      , p = Be(r, n, f, d)
      , h = Be(r, n, i, d)
      , m = u ? a - o * c : a
      , g = Be(r, n, f * Math.cos(c * Ta), m);
    return {
        center: p,
        circleTangency: h,
        lineTangency: g,
        theta: c
    }
}
  , Xm = function(t) {
    var r = t.cx
      , n = t.cy
      , i = t.innerRadius
      , a = t.outerRadius
      , o = t.startAngle
      , s = t.endAngle
      , l = tC(o, s)
      , u = o + l
      , f = Be(r, n, a, o)
      , c = Be(r, n, a, u)
      , d = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(o > u), `,
    `).concat(c.x, ",").concat(c.y, `
  `);
    if (i > 0) {
        var p = Be(r, n, i, o)
          , h = Be(r, n, i, u);
        d += "L ".concat(h.x, ",").concat(h.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(o <= u), `,
            `).concat(p.x, ",").concat(p.y, " Z")
    } else
        d += "L ".concat(r, ",").concat(n, " Z");
    return d
}
  , rC = function(t) {
    var r = t.cx
      , n = t.cy
      , i = t.innerRadius
      , a = t.outerRadius
      , o = t.cornerRadius
      , s = t.forceCornerRadius
      , l = t.cornerIsExternal
      , u = t.startAngle
      , f = t.endAngle
      , c = yt(f - u)
      , d = Hi({
        cx: r,
        cy: n,
        radius: a,
        angle: u,
        sign: c,
        cornerRadius: o,
        cornerIsExternal: l
    })
      , p = d.circleTangency
      , h = d.lineTangency
      , m = d.theta
      , g = Hi({
        cx: r,
        cy: n,
        radius: a,
        angle: f,
        sign: -c,
        cornerRadius: o,
        cornerIsExternal: l
    })
      , b = g.circleTangency
      , _ = g.lineTangency
      , w = g.theta
      , S = l ? Math.abs(u - f) : Math.abs(u - f) - m - w;
    if (S < 0)
        return s ? "M ".concat(h.x, ",").concat(h.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Xm({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: u,
            endAngle: f
        });
    var y = "M ".concat(h.x, ",").concat(h.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(S > 180), ",").concat(+(c < 0), ",").concat(b.x, ",").concat(b.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(_.x, ",").concat(_.y, `
  `);
    if (i > 0) {
        var x = Hi({
            cx: r,
            cy: n,
            radius: i,
            angle: u,
            sign: c,
            isExternal: !0,
            cornerRadius: o,
            cornerIsExternal: l
        })
          , O = x.circleTangency
          , P = x.lineTangency
          , A = x.theta
          , k = Hi({
            cx: r,
            cy: n,
            radius: i,
            angle: f,
            sign: -c,
            isExternal: !0,
            cornerRadius: o,
            cornerIsExternal: l
        })
          , j = k.circleTangency
          , T = k.lineTangency
          , N = k.theta
          , E = l ? Math.abs(u - f) : Math.abs(u - f) - A - N;
        if (E < 0 && o === 0)
            return "".concat(y, "L").concat(r, ",").concat(n, "Z");
        y += "L".concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(j.x, ",").concat(j.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(E > 180), ",").concat(+(c > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(P.x, ",").concat(P.y, "Z")
    } else
        y += "L".concat(r, ",").concat(n, "Z");
    return y
}
  , nC = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1
}
  , Gm = function(t) {
    var r = yd(yd({}, nC), t)
      , n = r.cx
      , i = r.cy
      , a = r.innerRadius
      , o = r.outerRadius
      , s = r.cornerRadius
      , l = r.forceCornerRadius
      , u = r.cornerIsExternal
      , f = r.startAngle
      , c = r.endAngle
      , d = r.className;
    if (o < a || f === c)
        return null;
    var p = te("recharts-sector", d), h = o - a, m = br(s, h, 0, !0), g;
    return m > 0 && Math.abs(f - c) < 360 ? g = rC({
        cx: n,
        cy: i,
        innerRadius: a,
        outerRadius: o,
        cornerRadius: Math.min(m, h / 2),
        forceCornerRadius: l,
        cornerIsExternal: u,
        startAngle: f,
        endAngle: c
    }) : g = Xm({
        cx: n,
        cy: i,
        innerRadius: a,
        outerRadius: o,
        startAngle: f,
        endAngle: c
    }),
    $.createElement("path", yl({}, oe(r, !0), {
        className: p,
        d: g,
        role: "img"
    }))
};
function oi(e) {
    "@babel/helpers - typeof";
    return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    oi(e)
}
function gl() {
    return gl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    gl.apply(this, arguments)
}
function gd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function bd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? gd(Object(r), !0).forEach(function(n) {
            iC(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function iC(e, t, r) {
    return t = aC(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function aC(e) {
    var t = oC(e, "string");
    return oi(t) == "symbol" ? t : t + ""
}
function oC(e, t) {
    if (oi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (oi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var xd = {
    curveBasisClosed: vx,
    curveBasisOpen: yx,
    curveBasis: mx,
    curveBumpX: tx,
    curveBumpY: rx,
    curveLinearClosed: gx,
    curveLinear: yo,
    curveMonotoneX: bx,
    curveMonotoneY: xx,
    curveNatural: wx,
    curveStep: _x,
    curveStepAfter: Ox,
    curveStepBefore: Sx
}
  , Vi = function(t) {
    return t.x === +t.x && t.y === +t.y
}
  , Pn = function(t) {
    return t.x
}
  , An = function(t) {
    return t.y
}
  , sC = function(t, r) {
    if (re(t))
        return t;
    var n = "curve".concat(mo(t));
    return (n === "curveMonotone" || n === "curveBump") && r ? xd["".concat(n).concat(r === "vertical" ? "Y" : "X")] : xd[n] || yo
}
  , lC = function(t) {
    var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, l = t.connectNulls, u = l === void 0 ? !1 : l, f = sC(n, s), c = u ? a.filter(function(m) {
        return Vi(m)
    }) : a, d;
    if (Array.isArray(o)) {
        var p = u ? o.filter(function(m) {
            return Vi(m)
        }) : o
          , h = c.map(function(m, g) {
            return bd(bd({}, m), {}, {
                base: p[g]
            })
        });
        return s === "vertical" ? d = Ri().y(An).x1(Pn).x0(function(m) {
            return m.base.x
        }) : d = Ri().x(Pn).y1(An).y0(function(m) {
            return m.base.y
        }),
        d.defined(Vi).curve(f),
        d(h)
    }
    return s === "vertical" && F(o) ? d = Ri().y(An).x1(Pn).x0(o) : F(o) ? d = Ri().x(Pn).y1(An).y0(o) : d = mh().x(Pn).y(An),
    d.defined(Vi).curve(f),
    d(c)
}
  , In = function(t) {
    var r = t.className
      , n = t.points
      , i = t.path
      , a = t.pathRef;
    if ((!n || !n.length) && !i)
        return null;
    var o = n && n.length ? lC(t) : i;
    return $.createElement("path", gl({}, oe(t, !1), na(t), {
        className: te("recharts-curve", r),
        d: o,
        ref: a
    }))
}
  , uC = Object.getOwnPropertyNames
  , cC = Object.getOwnPropertySymbols
  , fC = Object.prototype.hasOwnProperty;
function wd(e, t) {
    return function(n, i, a) {
        return e(n, i, a) && t(n, i, a)
    }
}
function Ki(e) {
    return function(r, n, i) {
        if (!r || !n || typeof r != "object" || typeof n != "object")
            return e(r, n, i);
        var a = i.cache
          , o = a.get(r)
          , s = a.get(n);
        if (o && s)
            return o === n && s === r;
        a.set(r, n),
        a.set(n, r);
        var l = e(r, n, i);
        return a.delete(r),
        a.delete(n),
        l
    }
}
function _d(e) {
    return uC(e).concat(cC(e))
}
var dC = Object.hasOwn || function(e, t) {
    return fC.call(e, t)
}
;
function Pr(e, t) {
    return e === t || !e && !t && e !== e && t !== t
}
var pC = "__v"
  , hC = "__o"
  , mC = "_owner"
  , Sd = Object.getOwnPropertyDescriptor
  , Od = Object.keys;
function vC(e, t, r) {
    var n = e.length;
    if (t.length !== n)
        return !1;
    for (; n-- > 0; )
        if (!r.equals(e[n], t[n], n, n, e, t, r))
            return !1;
    return !0
}
function yC(e, t) {
    return Pr(e.getTime(), t.getTime())
}
function gC(e, t) {
    return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack
}
function bC(e, t) {
    return e === t
}
function Pd(e, t, r) {
    var n = e.size;
    if (n !== t.size)
        return !1;
    if (!n)
        return !0;
    for (var i = new Array(n), a = e.entries(), o, s, l = 0; (o = a.next()) && !o.done; ) {
        for (var u = t.entries(), f = !1, c = 0; (s = u.next()) && !s.done; ) {
            if (i[c]) {
                c++;
                continue
            }
            var d = o.value
              , p = s.value;
            if (r.equals(d[0], p[0], l, c, e, t, r) && r.equals(d[1], p[1], d[0], p[0], e, t, r)) {
                f = i[c] = !0;
                break
            }
            c++
        }
        if (!f)
            return !1;
        l++
    }
    return !0
}
var xC = Pr;
function wC(e, t, r) {
    var n = Od(e)
      , i = n.length;
    if (Od(t).length !== i)
        return !1;
    for (; i-- > 0; )
        if (!Ym(e, t, r, n[i]))
            return !1;
    return !0
}
function jn(e, t, r) {
    var n = _d(e)
      , i = n.length;
    if (_d(t).length !== i)
        return !1;
    for (var a, o, s; i-- > 0; )
        if (a = n[i],
        !Ym(e, t, r, a) || (o = Sd(e, a),
        s = Sd(t, a),
        (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
            return !1;
    return !0
}
function _C(e, t) {
    return Pr(e.valueOf(), t.valueOf())
}
function SC(e, t) {
    return e.source === t.source && e.flags === t.flags
}
function Ad(e, t, r) {
    var n = e.size;
    if (n !== t.size)
        return !1;
    if (!n)
        return !0;
    for (var i = new Array(n), a = e.values(), o, s; (o = a.next()) && !o.done; ) {
        for (var l = t.values(), u = !1, f = 0; (s = l.next()) && !s.done; ) {
            if (!i[f] && r.equals(o.value, s.value, o.value, s.value, e, t, r)) {
                u = i[f] = !0;
                break
            }
            f++
        }
        if (!u)
            return !1
    }
    return !0
}
function OC(e, t) {
    var r = e.length;
    if (t.length !== r)
        return !1;
    for (; r-- > 0; )
        if (e[r] !== t[r])
            return !1;
    return !0
}
function PC(e, t) {
    return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password
}
function Ym(e, t, r, n) {
    return (n === mC || n === hC || n === pC) && (e.$$typeof || t.$$typeof) ? !0 : dC(t, n) && r.equals(e[n], t[n], n, n, e, t, r)
}
var AC = "[object Arguments]"
  , jC = "[object Boolean]"
  , $C = "[object Date]"
  , CC = "[object Error]"
  , TC = "[object Map]"
  , EC = "[object Number]"
  , kC = "[object Object]"
  , MC = "[object RegExp]"
  , NC = "[object Set]"
  , IC = "[object String]"
  , DC = "[object URL]"
  , RC = Array.isArray
  , jd = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null
  , $d = Object.assign
  , BC = Object.prototype.toString.call.bind(Object.prototype.toString);
function LC(e) {
    var t = e.areArraysEqual
      , r = e.areDatesEqual
      , n = e.areErrorsEqual
      , i = e.areFunctionsEqual
      , a = e.areMapsEqual
      , o = e.areNumbersEqual
      , s = e.areObjectsEqual
      , l = e.arePrimitiveWrappersEqual
      , u = e.areRegExpsEqual
      , f = e.areSetsEqual
      , c = e.areTypedArraysEqual
      , d = e.areUrlsEqual;
    return function(h, m, g) {
        if (h === m)
            return !0;
        if (h == null || m == null)
            return !1;
        var b = typeof h;
        if (b !== typeof m)
            return !1;
        if (b !== "object")
            return b === "number" ? o(h, m, g) : b === "function" ? i(h, m, g) : !1;
        var _ = h.constructor;
        if (_ !== m.constructor)
            return !1;
        if (_ === Object)
            return s(h, m, g);
        if (RC(h))
            return t(h, m, g);
        if (jd != null && jd(h))
            return c(h, m, g);
        if (_ === Date)
            return r(h, m, g);
        if (_ === RegExp)
            return u(h, m, g);
        if (_ === Map)
            return a(h, m, g);
        if (_ === Set)
            return f(h, m, g);
        var w = BC(h);
        return w === $C ? r(h, m, g) : w === MC ? u(h, m, g) : w === TC ? a(h, m, g) : w === NC ? f(h, m, g) : w === kC ? typeof h.then != "function" && typeof m.then != "function" && s(h, m, g) : w === DC ? d(h, m, g) : w === CC ? n(h, m, g) : w === AC ? s(h, m, g) : w === jC || w === EC || w === IC ? l(h, m, g) : !1
    }
}
function UC(e) {
    var t = e.circular
      , r = e.createCustomConfig
      , n = e.strict
      , i = {
        areArraysEqual: n ? jn : vC,
        areDatesEqual: yC,
        areErrorsEqual: gC,
        areFunctionsEqual: bC,
        areMapsEqual: n ? wd(Pd, jn) : Pd,
        areNumbersEqual: xC,
        areObjectsEqual: n ? jn : wC,
        arePrimitiveWrappersEqual: _C,
        areRegExpsEqual: SC,
        areSetsEqual: n ? wd(Ad, jn) : Ad,
        areTypedArraysEqual: n ? jn : OC,
        areUrlsEqual: PC
    };
    if (r && (i = $d({}, i, r(i))),
    t) {
        var a = Ki(i.areArraysEqual)
          , o = Ki(i.areMapsEqual)
          , s = Ki(i.areObjectsEqual)
          , l = Ki(i.areSetsEqual);
        i = $d({}, i, {
            areArraysEqual: a,
            areMapsEqual: o,
            areObjectsEqual: s,
            areSetsEqual: l
        })
    }
    return i
}
function WC(e) {
    return function(t, r, n, i, a, o, s) {
        return e(t, r, s)
    }
}
function zC(e) {
    var t = e.circular
      , r = e.comparator
      , n = e.createState
      , i = e.equals
      , a = e.strict;
    if (n)
        return function(l, u) {
            var f = n()
              , c = f.cache
              , d = c === void 0 ? t ? new WeakMap : void 0 : c
              , p = f.meta;
            return r(l, u, {
                cache: d,
                equals: i,
                meta: p,
                strict: a
            })
        }
        ;
    if (t)
        return function(l, u) {
            return r(l, u, {
                cache: new WeakMap,
                equals: i,
                meta: void 0,
                strict: a
            })
        }
        ;
    var o = {
        cache: void 0,
        equals: i,
        meta: void 0,
        strict: a
    };
    return function(l, u) {
        return r(l, u, o)
    }
}
var FC = tr();
tr({
    strict: !0
});
tr({
    circular: !0
});
tr({
    circular: !0,
    strict: !0
});
tr({
    createInternalComparator: function() {
        return Pr
    }
});
tr({
    strict: !0,
    createInternalComparator: function() {
        return Pr
    }
});
tr({
    circular: !0,
    createInternalComparator: function() {
        return Pr
    }
});
tr({
    circular: !0,
    createInternalComparator: function() {
        return Pr
    },
    strict: !0
});
function tr(e) {
    e === void 0 && (e = {});
    var t = e.circular
      , r = t === void 0 ? !1 : t
      , n = e.createInternalComparator
      , i = e.createState
      , a = e.strict
      , o = a === void 0 ? !1 : a
      , s = UC(e)
      , l = LC(s)
      , u = n ? n(l) : WC(l);
    return zC({
        circular: r,
        comparator: l,
        createState: i,
        equals: u,
        strict: o
    })
}
function qC(e) {
    typeof requestAnimationFrame < "u" && requestAnimationFrame(e)
}
function Cd(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
      , r = -1
      , n = function i(a) {
        r < 0 && (r = a),
        a - r > t ? (e(a),
        r = -1) : qC(i)
    };
    requestAnimationFrame(n)
}
function bl(e) {
    "@babel/helpers - typeof";
    return bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    bl(e)
}
function HC(e) {
    return GC(e) || XC(e) || KC(e) || VC()
}
function VC() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function KC(e, t) {
    if (e) {
        if (typeof e == "string")
            return Td(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Td(e, t)
    }
}
function Td(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function XC(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function GC(e) {
    if (Array.isArray(e))
        return e
}
function YC() {
    var e = {}
      , t = function() {
        return null
    }
      , r = !1
      , n = function i(a) {
        if (!r) {
            if (Array.isArray(a)) {
                if (!a.length)
                    return;
                var o = a
                  , s = HC(o)
                  , l = s[0]
                  , u = s.slice(1);
                if (typeof l == "number") {
                    Cd(i.bind(null, u), l);
                    return
                }
                i(l),
                Cd(i.bind(null, u));
                return
            }
            bl(a) === "object" && (e = a,
            t(e)),
            typeof a == "function" && a()
        }
    };
    return {
        stop: function() {
            r = !0
        },
        start: function(a) {
            r = !1,
            n(a)
        },
        subscribe: function(a) {
            return t = a,
            function() {
                t = function() {
                    return null
                }
            }
        }
    }
}
function si(e) {
    "@babel/helpers - typeof";
    return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    si(e)
}
function Ed(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function kd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ed(Object(r), !0).forEach(function(n) {
            Zm(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ed(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Zm(e, t, r) {
    return t = ZC(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function ZC(e) {
    var t = JC(e, "string");
    return si(t) === "symbol" ? t : String(t)
}
function JC(e, t) {
    if (si(e) !== "object" || e === null)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (si(n) !== "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var QC = function(t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
        return n.filter(function(a) {
            return i.includes(a)
        })
    })
}
  , e2 = function(t) {
    return t
}
  , t2 = function(t) {
    return t.replace(/([A-Z])/g, function(r) {
        return "-".concat(r.toLowerCase())
    })
}
  , Dn = function(t, r) {
    return Object.keys(r).reduce(function(n, i) {
        return kd(kd({}, n), {}, Zm({}, i, t(i, r[i])))
    }, {})
}
  , Md = function(t, r, n) {
    return t.map(function(i) {
        return "".concat(t2(i), " ").concat(r, "ms ").concat(n)
    }).join(",")
};
function r2(e, t) {
    return a2(e) || i2(e, t) || Jm(e, t) || n2()
}
function n2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function i2(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t !== 0)
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function a2(e) {
    if (Array.isArray(e))
        return e
}
function o2(e) {
    return u2(e) || l2(e) || Jm(e) || s2()
}
function s2() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Jm(e, t) {
    if (e) {
        if (typeof e == "string")
            return xl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return xl(e, t)
    }
}
function l2(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function u2(e) {
    if (Array.isArray(e))
        return xl(e)
}
function xl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
var ka = 1e-4
  , Qm = function(t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1]
}
  , ev = function(t, r) {
    return t.map(function(n, i) {
        return n * Math.pow(r, i)
    }).reduce(function(n, i) {
        return n + i
    })
}
  , Nd = function(t, r) {
    return function(n) {
        var i = Qm(t, r);
        return ev(i, n)
    }
}
  , c2 = function(t, r) {
    return function(n) {
        var i = Qm(t, r)
          , a = [].concat(o2(i.map(function(o, s) {
            return o * s
        }).slice(1)), [0]);
        return ev(a, n)
    }
}
  , Id = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
    var i = r[0]
      , a = r[1]
      , o = r[2]
      , s = r[3];
    if (r.length === 1)
        switch (r[0]) {
        case "linear":
            i = 0,
            a = 0,
            o = 1,
            s = 1;
            break;
        case "ease":
            i = .25,
            a = .1,
            o = .25,
            s = 1;
            break;
        case "ease-in":
            i = .42,
            a = 0,
            o = 1,
            s = 1;
            break;
        case "ease-out":
            i = .42,
            a = 0,
            o = .58,
            s = 1;
            break;
        case "ease-in-out":
            i = 0,
            a = 0,
            o = .58,
            s = 1;
            break;
        default:
            {
                var l = r[0].split("(");
                if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
                    var u = l[1].split(")")[0].split(",").map(function(g) {
                        return parseFloat(g)
                    })
                      , f = r2(u, 4);
                    i = f[0],
                    a = f[1],
                    o = f[2],
                    s = f[3]
                }
            }
        }
    var c = Nd(i, o)
      , d = Nd(a, s)
      , p = c2(i, o)
      , h = function(b) {
        return b > 1 ? 1 : b < 0 ? 0 : b
    }
      , m = function(b) {
        for (var _ = b > 1 ? 1 : b, w = _, S = 0; S < 8; ++S) {
            var y = c(w) - _
              , x = p(w);
            if (Math.abs(y - _) < ka || x < ka)
                return d(w);
            w = h(w - y / x)
        }
        return d(w)
    };
    return m.isStepper = !1,
    m
}
  , f2 = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , r = t.stiff
      , n = r === void 0 ? 100 : r
      , i = t.damping
      , a = i === void 0 ? 8 : i
      , o = t.dt
      , s = o === void 0 ? 17 : o
      , l = function(f, c, d) {
        var p = -(f - c) * n
          , h = d * a
          , m = d + (p - h) * s / 1e3
          , g = d * s / 1e3 + f;
        return Math.abs(g - c) < ka && Math.abs(m) < ka ? [c, 0] : [g, m]
    };
    return l.isStepper = !0,
    l.dt = s,
    l
}
  , d2 = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
        switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
            return Id(i);
        case "spring":
            return f2();
        default:
            if (i.split("(")[0] === "cubic-bezier")
                return Id(i)
        }
    return typeof i == "function" ? i : null
};
function li(e) {
    "@babel/helpers - typeof";
    return li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    li(e)
}
function Dd(e) {
    return m2(e) || h2(e) || tv(e) || p2()
}
function p2() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function h2(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function m2(e) {
    if (Array.isArray(e))
        return _l(e)
}
function Rd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Re(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Rd(Object(r), !0).forEach(function(n) {
            wl(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function wl(e, t, r) {
    return t = v2(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function v2(e) {
    var t = y2(e, "string");
    return li(t) === "symbol" ? t : String(t)
}
function y2(e, t) {
    if (li(e) !== "object" || e === null)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (li(n) !== "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function g2(e, t) {
    return w2(e) || x2(e, t) || tv(e, t) || b2()
}
function b2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function tv(e, t) {
    if (e) {
        if (typeof e == "string")
            return _l(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return _l(e, t)
    }
}
function _l(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function x2(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t !== 0)
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function w2(e) {
    if (Array.isArray(e))
        return e
}
var Ma = function(t, r, n) {
    return t + (r - t) * n
}
  , Sl = function(t) {
    var r = t.from
      , n = t.to;
    return r !== n
}
  , _2 = function e(t, r, n) {
    var i = Dn(function(a, o) {
        if (Sl(o)) {
            var s = t(o.from, o.to, o.velocity)
              , l = g2(s, 2)
              , u = l[0]
              , f = l[1];
            return Re(Re({}, o), {}, {
                from: u,
                velocity: f
            })
        }
        return o
    }, r);
    return n < 1 ? Dn(function(a, o) {
        return Sl(o) ? Re(Re({}, o), {}, {
            velocity: Ma(o.velocity, i[a].velocity, n),
            from: Ma(o.from, i[a].from, n)
        }) : o
    }, r) : e(t, i, n - 1)
};
const S2 = function(e, t, r, n, i) {
    var a = QC(e, t), o = a.reduce(function(g, b) {
        return Re(Re({}, g), {}, wl({}, b, [e[b], t[b]]))
    }, {}), s = a.reduce(function(g, b) {
        return Re(Re({}, g), {}, wl({}, b, {
            from: e[b],
            velocity: 0,
            to: t[b]
        }))
    }, {}), l = -1, u, f, c = function() {
        return null
    }, d = function() {
        return Dn(function(b, _) {
            return _.from
        }, s)
    }, p = function() {
        return !Object.values(s).filter(Sl).length
    }, h = function(b) {
        u || (u = b);
        var _ = b - u
          , w = _ / r.dt;
        s = _2(r, s, w),
        i(Re(Re(Re({}, e), t), d())),
        u = b,
        p() || (l = requestAnimationFrame(c))
    }, m = function(b) {
        f || (f = b);
        var _ = (b - f) / n
          , w = Dn(function(y, x) {
            return Ma.apply(void 0, Dd(x).concat([r(_)]))
        }, o);
        if (i(Re(Re(Re({}, e), t), w)),
        _ < 1)
            l = requestAnimationFrame(c);
        else {
            var S = Dn(function(y, x) {
                return Ma.apply(void 0, Dd(x).concat([r(1)]))
            }, o);
            i(Re(Re(Re({}, e), t), S))
        }
    };
    return c = r.isStepper ? h : m,
    function() {
        return requestAnimationFrame(c),
        function() {
            cancelAnimationFrame(l)
        }
    }
};
function Gr(e) {
    "@babel/helpers - typeof";
    return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Gr(e)
}
var O2 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function P2(e, t) {
    if (e == null)
        return {};
    var r = A2(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function A2(e, t) {
    if (e == null)
        return {};
    var r = {}, n = Object.keys(e), i, a;
    for (a = 0; a < n.length; a++)
        i = n[a],
        !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
function hs(e) {
    return T2(e) || C2(e) || $2(e) || j2()
}
function j2() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function $2(e, t) {
    if (e) {
        if (typeof e == "string")
            return Ol(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Ol(e, t)
    }
}
function C2(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function T2(e) {
    if (Array.isArray(e))
        return Ol(e)
}
function Ol(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function Bd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function pt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Bd(Object(r), !0).forEach(function(n) {
            Tn(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Tn(e, t, r) {
    return t = rv(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function E2(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function k2(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, rv(n.key), n)
    }
}
function M2(e, t, r) {
    return t && k2(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function rv(e) {
    var t = N2(e, "string");
    return Gr(t) === "symbol" ? t : String(t)
}
function N2(e, t) {
    if (Gr(e) !== "object" || e === null)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Gr(n) !== "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function I2(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Pl(e, t)
}
function Pl(e, t) {
    return Pl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Pl(e, t)
}
function D2(e) {
    var t = R2();
    return function() {
        var n = Na(e), i;
        if (t) {
            var a = Na(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else
            i = n.apply(this, arguments);
        return Al(this, i)
    }
}
function Al(e, t) {
    if (t && (Gr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return jl(e)
}
function jl(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function R2() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function Na(e) {
    return Na = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Na(e)
}
var Ft = function(e) {
    I2(r, e);
    var t = D2(r);
    function r(n, i) {
        var a;
        E2(this, r),
        a = t.call(this, n, i);
        var o = a.props
          , s = o.isActive
          , l = o.attributeName
          , u = o.from
          , f = o.to
          , c = o.steps
          , d = o.children
          , p = o.duration;
        if (a.handleStyleChange = a.handleStyleChange.bind(jl(a)),
        a.changeStyle = a.changeStyle.bind(jl(a)),
        !s || p <= 0)
            return a.state = {
                style: {}
            },
            typeof d == "function" && (a.state = {
                style: f
            }),
            Al(a);
        if (c && c.length)
            a.state = {
                style: c[0].style
            };
        else if (u) {
            if (typeof d == "function")
                return a.state = {
                    style: u
                },
                Al(a);
            a.state = {
                style: l ? Tn({}, l, u) : u
            }
        } else
            a.state = {
                style: {}
            };
        return a
    }
    return M2(r, [{
        key: "componentDidMount",
        value: function() {
            var i = this.props
              , a = i.isActive
              , o = i.canBegin;
            this.mounted = !0,
            !(!a || !o) && this.runAnimation(this.props)
        }
    }, {
        key: "componentDidUpdate",
        value: function(i) {
            var a = this.props
              , o = a.isActive
              , s = a.canBegin
              , l = a.attributeName
              , u = a.shouldReAnimate
              , f = a.to
              , c = a.from
              , d = this.state.style;
            if (s) {
                if (!o) {
                    var p = {
                        style: l ? Tn({}, l, f) : f
                    };
                    this.state && d && (l && d[l] !== f || !l && d !== f) && this.setState(p);
                    return
                }
                if (!(FC(i.to, f) && i.canBegin && i.isActive)) {
                    var h = !i.canBegin || !i.isActive;
                    this.manager && this.manager.stop(),
                    this.stopJSAnimation && this.stopJSAnimation();
                    var m = h || u ? c : i.to;
                    if (this.state && d) {
                        var g = {
                            style: l ? Tn({}, l, m) : m
                        };
                        (l && d[l] !== m || !l && d !== m) && this.setState(g)
                    }
                    this.runAnimation(pt(pt({}, this.props), {}, {
                        from: m,
                        begin: 0
                    }))
                }
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.mounted = !1;
            var i = this.props.onAnimationEnd;
            this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(),
            this.manager = null),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i()
        }
    }, {
        key: "handleStyleChange",
        value: function(i) {
            this.changeStyle(i)
        }
    }, {
        key: "changeStyle",
        value: function(i) {
            this.mounted && this.setState({
                style: i
            })
        }
    }, {
        key: "runJSAnimation",
        value: function(i) {
            var a = this
              , o = i.from
              , s = i.to
              , l = i.duration
              , u = i.easing
              , f = i.begin
              , c = i.onAnimationEnd
              , d = i.onAnimationStart
              , p = S2(o, s, d2(u), l, this.changeStyle)
              , h = function() {
                a.stopJSAnimation = p()
            };
            this.manager.start([d, f, h, l, c])
        }
    }, {
        key: "runStepAnimation",
        value: function(i) {
            var a = this
              , o = i.steps
              , s = i.begin
              , l = i.onAnimationStart
              , u = o[0]
              , f = u.style
              , c = u.duration
              , d = c === void 0 ? 0 : c
              , p = function(m, g, b) {
                if (b === 0)
                    return m;
                var _ = g.duration
                  , w = g.easing
                  , S = w === void 0 ? "ease" : w
                  , y = g.style
                  , x = g.properties
                  , O = g.onAnimationEnd
                  , P = b > 0 ? o[b - 1] : g
                  , A = x || Object.keys(y);
                if (typeof S == "function" || S === "spring")
                    return [].concat(hs(m), [a.runJSAnimation.bind(a, {
                        from: P.style,
                        to: y,
                        duration: _,
                        easing: S
                    }), _]);
                var k = Md(A, _, S)
                  , j = pt(pt(pt({}, P.style), y), {}, {
                    transition: k
                });
                return [].concat(hs(m), [j, _, O]).filter(e2)
            };
            return this.manager.start([l].concat(hs(o.reduce(p, [f, Math.max(d, s)])), [i.onAnimationEnd]))
        }
    }, {
        key: "runAnimation",
        value: function(i) {
            this.manager || (this.manager = YC());
            var a = i.begin
              , o = i.duration
              , s = i.attributeName
              , l = i.to
              , u = i.easing
              , f = i.onAnimationStart
              , c = i.onAnimationEnd
              , d = i.steps
              , p = i.children
              , h = this.manager;
            if (this.unSubscribe = h.subscribe(this.handleStyleChange),
            typeof u == "function" || typeof p == "function" || u === "spring") {
                this.runJSAnimation(i);
                return
            }
            if (d.length > 1) {
                this.runStepAnimation(i);
                return
            }
            var m = s ? Tn({}, s, l) : l
              , g = Md(Object.keys(m), o, u);
            h.start([f, a, pt(pt({}, m), {}, {
                transition: g
            }), o, c])
        }
    }, {
        key: "render",
        value: function() {
            var i = this.props
              , a = i.children;
            i.begin;
            var o = i.duration;
            i.attributeName,
            i.easing;
            var s = i.isActive;
            i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart;
            var l = P2(i, O2)
              , u = C.Children.count(a)
              , f = this.state.style;
            if (typeof a == "function")
                return a(f);
            if (!s || u === 0 || o <= 0)
                return a;
            var c = function(p) {
                var h = p.props
                  , m = h.style
                  , g = m === void 0 ? {} : m
                  , b = h.className
                  , _ = C.cloneElement(p, pt(pt({}, l), {}, {
                    style: pt(pt({}, g), f),
                    className: b
                }));
                return _
            };
            return u === 1 ? c(C.Children.only(a)) : $.createElement("div", null, C.Children.map(a, function(d) {
                return c(d)
            }))
        }
    }]),
    r
}(C.PureComponent);
Ft.displayName = "Animate";
Ft.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function() {},
    onAnimationStart: function() {}
};
Ft.propTypes = {
    from: Z.oneOfType([Z.object, Z.string]),
    to: Z.oneOfType([Z.object, Z.string]),
    attributeName: Z.string,
    duration: Z.number,
    begin: Z.number,
    easing: Z.oneOfType([Z.string, Z.func]),
    steps: Z.arrayOf(Z.shape({
        duration: Z.number.isRequired,
        style: Z.object.isRequired,
        easing: Z.oneOfType([Z.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Z.func]),
        properties: Z.arrayOf("string"),
        onAnimationEnd: Z.func
    })),
    children: Z.oneOfType([Z.node, Z.func]),
    isActive: Z.bool,
    canBegin: Z.bool,
    onAnimationEnd: Z.func,
    shouldReAnimate: Z.bool,
    onAnimationStart: Z.func,
    onAnimationReStart: Z.func
};
function ui(e) {
    "@babel/helpers - typeof";
    return ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ui(e)
}
function Ia() {
    return Ia = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Ia.apply(this, arguments)
}
function B2(e, t) {
    return z2(e) || W2(e, t) || U2(e, t) || L2()
}
function L2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function U2(e, t) {
    if (e) {
        if (typeof e == "string")
            return Ld(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Ld(e, t)
    }
}
function Ld(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function W2(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t !== 0)
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function z2(e) {
    if (Array.isArray(e))
        return e
}
function Ud(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Wd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ud(Object(r), !0).forEach(function(n) {
            F2(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ud(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function F2(e, t, r) {
    return t = q2(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function q2(e) {
    var t = H2(e, "string");
    return ui(t) == "symbol" ? t : t + ""
}
function H2(e, t) {
    if (ui(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ui(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var zd = function(t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, u = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, f;
    if (o > 0 && a instanceof Array) {
        for (var c = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
            c[d] = a[d] > o ? o : a[d];
        f = "M".concat(t, ",").concat(r + s * c[0]),
        c[0] > 0 && (f += "A ".concat(c[0], ",").concat(c[0], ",0,0,").concat(u, ",").concat(t + l * c[0], ",").concat(r)),
        f += "L ".concat(t + n - l * c[1], ",").concat(r),
        c[1] > 0 && (f += "A ".concat(c[1], ",").concat(c[1], ",0,0,").concat(u, `,
        `).concat(t + n, ",").concat(r + s * c[1])),
        f += "L ".concat(t + n, ",").concat(r + i - s * c[2]),
        c[2] > 0 && (f += "A ".concat(c[2], ",").concat(c[2], ",0,0,").concat(u, `,
        `).concat(t + n - l * c[2], ",").concat(r + i)),
        f += "L ".concat(t + l * c[3], ",").concat(r + i),
        c[3] > 0 && (f += "A ".concat(c[3], ",").concat(c[3], ",0,0,").concat(u, `,
        `).concat(t, ",").concat(r + i - s * c[3])),
        f += "Z"
    } else if (o > 0 && a === +a && a > 0) {
        var h = Math.min(o, a);
        f = "M ".concat(t, ",").concat(r + s * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(u, ",").concat(t + l * h, ",").concat(r, `
            L `).concat(t + n - l * h, ",").concat(r, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(u, ",").concat(t + n, ",").concat(r + s * h, `
            L `).concat(t + n, ",").concat(r + i - s * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(u, ",").concat(t + n - l * h, ",").concat(r + i, `
            L `).concat(t + l * h, ",").concat(r + i, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(u, ",").concat(t, ",").concat(r + i - s * h, " Z")
    } else
        f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
    return f
}
  , V2 = function(t, r) {
    if (!t || !r)
        return !1;
    var n = t.x
      , i = t.y
      , a = r.x
      , o = r.y
      , s = r.width
      , l = r.height;
    if (Math.abs(s) > 0 && Math.abs(l) > 0) {
        var u = Math.min(a, a + s)
          , f = Math.max(a, a + s)
          , c = Math.min(o, o + l)
          , d = Math.max(o, o + l);
        return n >= u && n <= f && i >= c && i <= d
    }
    return !1
}
  , K2 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
}
  , qu = function(t) {
    var r = Wd(Wd({}, K2), t)
      , n = C.useRef()
      , i = C.useState(-1)
      , a = B2(i, 2)
      , o = a[0]
      , s = a[1];
    C.useEffect(function() {
        if (n.current && n.current.getTotalLength)
            try {
                var S = n.current.getTotalLength();
                S && s(S)
            } catch {}
    }, []);
    var l = r.x
      , u = r.y
      , f = r.width
      , c = r.height
      , d = r.radius
      , p = r.className
      , h = r.animationEasing
      , m = r.animationDuration
      , g = r.animationBegin
      , b = r.isAnimationActive
      , _ = r.isUpdateAnimationActive;
    if (l !== +l || u !== +u || f !== +f || c !== +c || f === 0 || c === 0)
        return null;
    var w = te("recharts-rectangle", p);
    return _ ? $.createElement(Ft, {
        canBegin: o > 0,
        from: {
            width: f,
            height: c,
            x: l,
            y: u
        },
        to: {
            width: f,
            height: c,
            x: l,
            y: u
        },
        duration: m,
        animationEasing: h,
        isActive: _
    }, function(S) {
        var y = S.width
          , x = S.height
          , O = S.x
          , P = S.y;
        return $.createElement(Ft, {
            canBegin: o > 0,
            from: "0px ".concat(o === -1 ? 1 : o, "px"),
            to: "".concat(o, "px 0px"),
            attributeName: "strokeDasharray",
            begin: g,
            duration: m,
            isActive: b,
            easing: h
        }, $.createElement("path", Ia({}, oe(r, !0), {
            className: w,
            d: zd(O, P, y, x, d),
            ref: n
        })))
    }) : $.createElement("path", Ia({}, oe(r, !0), {
        className: w,
        d: zd(l, u, f, c, d)
    }))
};
function $l() {
    return $l = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    $l.apply(this, arguments)
}
var Eo = function(t) {
    var r = t.cx
      , n = t.cy
      , i = t.r
      , a = t.className
      , o = te("recharts-dot", a);
    return r === +r && n === +n && i === +i ? $.createElement("circle", $l({}, oe(t, !1), na(t), {
        className: o,
        cx: r,
        cy: n,
        r: i
    })) : null
};
function ci(e) {
    "@babel/helpers - typeof";
    return ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ci(e)
}
var X2 = ["x", "y", "top", "left", "width", "height", "className"];
function Cl() {
    return Cl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Cl.apply(this, arguments)
}
function Fd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function G2(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Fd(Object(r), !0).forEach(function(n) {
            Y2(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Y2(e, t, r) {
    return t = Z2(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Z2(e) {
    var t = J2(e, "string");
    return ci(t) == "symbol" ? t : t + ""
}
function J2(e, t) {
    if (ci(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ci(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function Q2(e, t) {
    if (e == null)
        return {};
    var r = eT(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function eT(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
var tT = function(t, r, n, i, a, o) {
    return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n)
}
  , rT = function(t) {
    var r = t.x
      , n = r === void 0 ? 0 : r
      , i = t.y
      , a = i === void 0 ? 0 : i
      , o = t.top
      , s = o === void 0 ? 0 : o
      , l = t.left
      , u = l === void 0 ? 0 : l
      , f = t.width
      , c = f === void 0 ? 0 : f
      , d = t.height
      , p = d === void 0 ? 0 : d
      , h = t.className
      , m = Q2(t, X2)
      , g = G2({
        x: n,
        y: a,
        top: s,
        left: u,
        width: c,
        height: p
    }, m);
    return !F(n) || !F(a) || !F(c) || !F(p) || !F(s) || !F(u) ? null : $.createElement("path", Cl({}, oe(g, !0), {
        className: te("recharts-cross", h),
        d: tT(n, a, c, p, s, u)
    }))
}
  , nT = ag
  , iT = nT(Object.getPrototypeOf, Object)
  , aT = iT
  , oT = ro
  , sT = aT
  , lT = to
  , uT = "[object Object]"
  , cT = Function.prototype
  , fT = Object.prototype
  , nv = cT.toString
  , dT = fT.hasOwnProperty
  , pT = nv.call(Object);
function hT(e) {
    if (!lT(e) || oT(e) != uT)
        return !1;
    var t = sT(e);
    if (t === null)
        return !0;
    var r = dT.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && nv.call(r) == pT
}
var mT = hT;
const vT = ke(mT);
var yT = ro
  , gT = to
  , bT = "[object Boolean]";
function xT(e) {
    return e === !0 || e === !1 || gT(e) && yT(e) == bT
}
var wT = xT;
const _T = ke(wT);
function fi(e) {
    "@babel/helpers - typeof";
    return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    fi(e)
}
function Da() {
    return Da = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Da.apply(this, arguments)
}
function ST(e, t) {
    return jT(e) || AT(e, t) || PT(e, t) || OT()
}
function OT() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function PT(e, t) {
    if (e) {
        if (typeof e == "string")
            return qd(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return qd(e, t)
    }
}
function qd(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function AT(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t !== 0)
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function jT(e) {
    if (Array.isArray(e))
        return e
}
function Hd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Vd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Hd(Object(r), !0).forEach(function(n) {
            $T(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function $T(e, t, r) {
    return t = CT(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function CT(e) {
    var t = TT(e, "string");
    return fi(t) == "symbol" ? t : t + ""
}
function TT(e, t) {
    if (fi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (fi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Kd = function(t, r, n, i, a) {
    var o = n - i, s;
    return s = "M ".concat(t, ",").concat(r),
    s += "L ".concat(t + n, ",").concat(r),
    s += "L ".concat(t + n - o / 2, ",").concat(r + a),
    s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a),
    s += "L ".concat(t, ",").concat(r, " Z"),
    s
}
  , ET = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
}
  , kT = function(t) {
    var r = Vd(Vd({}, ET), t)
      , n = C.useRef()
      , i = C.useState(-1)
      , a = ST(i, 2)
      , o = a[0]
      , s = a[1];
    C.useEffect(function() {
        if (n.current && n.current.getTotalLength)
            try {
                var w = n.current.getTotalLength();
                w && s(w)
            } catch {}
    }, []);
    var l = r.x
      , u = r.y
      , f = r.upperWidth
      , c = r.lowerWidth
      , d = r.height
      , p = r.className
      , h = r.animationEasing
      , m = r.animationDuration
      , g = r.animationBegin
      , b = r.isUpdateAnimationActive;
    if (l !== +l || u !== +u || f !== +f || c !== +c || d !== +d || f === 0 && c === 0 || d === 0)
        return null;
    var _ = te("recharts-trapezoid", p);
    return b ? $.createElement(Ft, {
        canBegin: o > 0,
        from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: d,
            x: l,
            y: u
        },
        to: {
            upperWidth: f,
            lowerWidth: c,
            height: d,
            x: l,
            y: u
        },
        duration: m,
        animationEasing: h,
        isActive: b
    }, function(w) {
        var S = w.upperWidth
          , y = w.lowerWidth
          , x = w.height
          , O = w.x
          , P = w.y;
        return $.createElement(Ft, {
            canBegin: o > 0,
            from: "0px ".concat(o === -1 ? 1 : o, "px"),
            to: "".concat(o, "px 0px"),
            attributeName: "strokeDasharray",
            begin: g,
            duration: m,
            easing: h
        }, $.createElement("path", Da({}, oe(r, !0), {
            className: _,
            d: Kd(O, P, S, y, x),
            ref: n
        })))
    }) : $.createElement("g", null, $.createElement("path", Da({}, oe(r, !0), {
        className: _,
        d: Kd(l, u, f, c, d)
    })))
}
  , MT = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function di(e) {
    "@babel/helpers - typeof";
    return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    di(e)
}
function NT(e, t) {
    if (e == null)
        return {};
    var r = IT(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function IT(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function Xd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Ra(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Xd(Object(r), !0).forEach(function(n) {
            DT(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function DT(e, t, r) {
    return t = RT(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function RT(e) {
    var t = BT(e, "string");
    return di(t) == "symbol" ? t : t + ""
}
function BT(e, t) {
    if (di(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (di(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function LT(e, t) {
    return Ra(Ra({}, t), e)
}
function UT(e, t) {
    return e === "symbols"
}
function Gd(e) {
    var t = e.shapeType
      , r = e.elementProps;
    switch (t) {
    case "rectangle":
        return $.createElement(qu, r);
    case "trapezoid":
        return $.createElement(kT, r);
    case "sector":
        return $.createElement(Gm, r);
    case "symbols":
        if (UT(t))
            return $.createElement(mu, r);
        break;
    default:
        return null
    }
}
function WT(e) {
    return C.isValidElement(e) ? e.props : e
}
function zT(e) {
    var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? LT : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e.isActive, l = NT(e, MT), u;
    if (C.isValidElement(t))
        u = C.cloneElement(t, Ra(Ra({}, l), WT(t)));
    else if (re(t))
        u = t(l);
    else if (vT(t) && !_T(t)) {
        var f = i(t, l);
        u = $.createElement(Gd, {
            shapeType: r,
            elementProps: f
        })
    } else {
        var c = l;
        u = $.createElement(Gd, {
            shapeType: r,
            elementProps: c
        })
    }
    return s ? $.createElement(xe, {
        className: o
    }, u) : u
}
function ko(e, t) {
    return t != null && "trapezoids"in e.props
}
function Mo(e, t) {
    return t != null && "sectors"in e.props
}
function pi(e, t) {
    return t != null && "points"in e.props
}
function FT(e, t) {
    var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
    return i && a
}
function qT(e, t) {
    var r = e.endAngle === t.endAngle
      , n = e.startAngle === t.startAngle;
    return r && n
}
function HT(e, t) {
    var r = e.x === t.x
      , n = e.y === t.y
      , i = e.z === t.z;
    return r && n && i
}
function VT(e, t) {
    var r;
    return ko(e, t) ? r = FT : Mo(e, t) ? r = qT : pi(e, t) && (r = HT),
    r
}
function KT(e, t) {
    var r;
    return ko(e, t) ? r = "trapezoids" : Mo(e, t) ? r = "sectors" : pi(e, t) && (r = "points"),
    r
}
function XT(e, t) {
    if (ko(e, t)) {
        var r;
        return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload
    }
    if (Mo(e, t)) {
        var n;
        return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload
    }
    return pi(e, t) ? t.payload : {}
}
function GT(e) {
    var t = e.activeTooltipItem
      , r = e.graphicalItem
      , n = e.itemData
      , i = KT(r, t)
      , a = XT(r, t)
      , o = n.filter(function(l, u) {
        var f = Yn(a, l)
          , c = r.props[i].filter(function(h) {
            var m = VT(r, t);
            return m(h, t)
        })
          , d = r.props[i].indexOf(c[c.length - 1])
          , p = u === d;
        return f && p
    })
      , s = n.indexOf(o[o.length - 1]);
    return s
}
var YT = Math.ceil
  , ZT = Math.max;
function JT(e, t, r, n) {
    for (var i = -1, a = ZT(YT((t - e) / (r || 1)), 0), o = Array(a); a--; )
        o[n ? a : ++i] = e,
        e += r;
    return o
}
var QT = JT
  , eE = Lh
  , tE = 1 / 0
  , rE = 17976931348623157e292;
function nE(e) {
    if (!e)
        return e === 0 ? e : 0;
    if (e = eE(e),
    e === tE || e === -1 / 0) {
        var t = e < 0 ? -1 : 1;
        return t * rE
    }
    return e === e ? e : 0
}
var iE = nE
  , aE = QT
  , oE = xo
  , ms = iE;
function sE(e) {
    return function(t, r, n) {
        return n && typeof n != "number" && oE(t, r, n) && (r = n = void 0),
        t = ms(t),
        r === void 0 ? (r = t,
        t = 0) : r = ms(r),
        n = n === void 0 ? t < r ? 1 : -1 : ms(n),
        aE(t, r, n, e)
    }
}
var lE = sE
  , uE = lE
  , cE = uE()
  , fE = cE;
const Ba = ke(fE);
function hi(e) {
    "@babel/helpers - typeof";
    return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    hi(e)
}
function Yd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Zd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Yd(Object(r), !0).forEach(function(n) {
            iv(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function iv(e, t, r) {
    return t = dE(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function dE(e) {
    var t = pE(e, "string");
    return hi(t) == "symbol" ? t : t + ""
}
function pE(e, t) {
    if (hi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (hi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var hE = ["Webkit", "Moz", "O", "ms"]
  , mE = function(t, r) {
    var n = t.replace(/(\w)/, function(a) {
        return a.toUpperCase()
    })
      , i = hE.reduce(function(a, o) {
        return Zd(Zd({}, a), {}, iv({}, o + n, r))
    }, {});
    return i[t] = r,
    i
};
function Yr(e) {
    "@babel/helpers - typeof";
    return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Yr(e)
}
function La() {
    return La = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    La.apply(this, arguments)
}
function Jd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function vs(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Jd(Object(r), !0).forEach(function(n) {
            Ze(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function vE(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Qd(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, ov(n.key), n)
    }
}
function yE(e, t, r) {
    return t && Qd(e.prototype, t),
    r && Qd(e, r),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function gE(e, t, r) {
    return t = Ua(t),
    bE(e, av() ? Reflect.construct(t, r || [], Ua(e).constructor) : t.apply(e, r))
}
function bE(e, t) {
    if (t && (Yr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return xE(e)
}
function xE(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function av() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (av = function() {
        return !!e
    }
    )()
}
function Ua(e) {
    return Ua = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Ua(e)
}
function wE(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Tl(e, t)
}
function Tl(e, t) {
    return Tl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Tl(e, t)
}
function Ze(e, t, r) {
    return t = ov(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function ov(e) {
    var t = _E(e, "string");
    return Yr(t) == "symbol" ? t : t + ""
}
function _E(e, t) {
    if (Yr(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Yr(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var SE = function(t) {
    var r = t.data
      , n = t.startIndex
      , i = t.endIndex
      , a = t.x
      , o = t.width
      , s = t.travellerWidth;
    if (!r || !r.length)
        return {};
    var l = r.length
      , u = Mn().domain(Ba(0, l)).range([a, a + o - s])
      , f = u.domain().map(function(c) {
        return u(c)
    });
    return {
        isTextActive: !1,
        isSlideMoving: !1,
        isTravellerMoving: !1,
        isTravellerFocused: !1,
        startX: u(n),
        endX: u(i),
        scale: u,
        scaleValues: f
    }
}
  , ep = function(t) {
    return t.changedTouches && !!t.changedTouches.length
}
  , Zr = function(e) {
    function t(r) {
        var n;
        return vE(this, t),
        n = gE(this, t, [r]),
        Ze(n, "handleDrag", function(i) {
            n.leaveTimer && (clearTimeout(n.leaveTimer),
            n.leaveTimer = null),
            n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i)
        }),
        Ze(n, "handleTouchMove", function(i) {
            i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0])
        }),
        Ze(n, "handleDragEnd", function() {
            n.setState({
                isTravellerMoving: !1,
                isSlideMoving: !1
            }, function() {
                var i = n.props
                  , a = i.endIndex
                  , o = i.onDragEnd
                  , s = i.startIndex;
                o == null || o({
                    endIndex: a,
                    startIndex: s
                })
            }),
            n.detachDragEndListener()
        }),
        Ze(n, "handleLeaveWrapper", function() {
            (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut))
        }),
        Ze(n, "handleEnterSlideOrTraveller", function() {
            n.setState({
                isTextActive: !0
            })
        }),
        Ze(n, "handleLeaveSlideOrTraveller", function() {
            n.setState({
                isTextActive: !1
            })
        }),
        Ze(n, "handleSlideDragStart", function(i) {
            var a = ep(i) ? i.changedTouches[0] : i;
            n.setState({
                isTravellerMoving: !1,
                isSlideMoving: !0,
                slideMoveStartX: a.pageX
            }),
            n.attachDragEndListener()
        }),
        n.travellerDragStartHandlers = {
            startX: n.handleTravellerDragStart.bind(n, "startX"),
            endX: n.handleTravellerDragStart.bind(n, "endX")
        },
        n.state = {},
        n
    }
    return wE(t, e),
    yE(t, [{
        key: "componentWillUnmount",
        value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer),
            this.leaveTimer = null),
            this.detachDragEndListener()
        }
    }, {
        key: "getIndex",
        value: function(n) {
            var i = n.startX
              , a = n.endX
              , o = this.state.scaleValues
              , s = this.props
              , l = s.gap
              , u = s.data
              , f = u.length - 1
              , c = Math.min(i, a)
              , d = Math.max(i, a)
              , p = t.getIndexInRange(o, c)
              , h = t.getIndexInRange(o, d);
            return {
                startIndex: p - p % l,
                endIndex: h === f ? f : h - h % l
            }
        }
    }, {
        key: "getTextOfTick",
        value: function(n) {
            var i = this.props
              , a = i.data
              , o = i.tickFormatter
              , s = i.dataKey
              , l = et(a[n], s, n);
            return re(o) ? o(l, n) : l
        }
    }, {
        key: "attachDragEndListener",
        value: function() {
            window.addEventListener("mouseup", this.handleDragEnd, !0),
            window.addEventListener("touchend", this.handleDragEnd, !0),
            window.addEventListener("mousemove", this.handleDrag, !0)
        }
    }, {
        key: "detachDragEndListener",
        value: function() {
            window.removeEventListener("mouseup", this.handleDragEnd, !0),
            window.removeEventListener("touchend", this.handleDragEnd, !0),
            window.removeEventListener("mousemove", this.handleDrag, !0)
        }
    }, {
        key: "handleSlideDrag",
        value: function(n) {
            var i = this.state
              , a = i.slideMoveStartX
              , o = i.startX
              , s = i.endX
              , l = this.props
              , u = l.x
              , f = l.width
              , c = l.travellerWidth
              , d = l.startIndex
              , p = l.endIndex
              , h = l.onChange
              , m = n.pageX - a;
            m > 0 ? m = Math.min(m, u + f - c - s, u + f - c - o) : m < 0 && (m = Math.max(m, u - o, u - s));
            var g = this.getIndex({
                startX: o + m,
                endX: s + m
            });
            (g.startIndex !== d || g.endIndex !== p) && h && h(g),
            this.setState({
                startX: o + m,
                endX: s + m,
                slideMoveStartX: n.pageX
            })
        }
    }, {
        key: "handleTravellerDragStart",
        value: function(n, i) {
            var a = ep(i) ? i.changedTouches[0] : i;
            this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX
            }),
            this.attachDragEndListener()
        }
    }, {
        key: "handleTravellerMove",
        value: function(n) {
            var i = this.state
              , a = i.brushMoveStartX
              , o = i.movingTravellerId
              , s = i.endX
              , l = i.startX
              , u = this.state[o]
              , f = this.props
              , c = f.x
              , d = f.width
              , p = f.travellerWidth
              , h = f.onChange
              , m = f.gap
              , g = f.data
              , b = {
                startX: this.state.startX,
                endX: this.state.endX
            }
              , _ = n.pageX - a;
            _ > 0 ? _ = Math.min(_, c + d - p - u) : _ < 0 && (_ = Math.max(_, c - u)),
            b[o] = u + _;
            var w = this.getIndex(b)
              , S = w.startIndex
              , y = w.endIndex
              , x = function() {
                var P = g.length - 1;
                return o === "startX" && (s > l ? S % m === 0 : y % m === 0) || s < l && y === P || o === "endX" && (s > l ? y % m === 0 : S % m === 0) || s > l && y === P
            };
            this.setState(Ze(Ze({}, o, u + _), "brushMoveStartX", n.pageX), function() {
                h && x() && h(w)
            })
        }
    }, {
        key: "handleTravellerMoveKeyboard",
        value: function(n, i) {
            var a = this
              , o = this.state
              , s = o.scaleValues
              , l = o.startX
              , u = o.endX
              , f = this.state[i]
              , c = s.indexOf(f);
            if (c !== -1) {
                var d = c + n;
                if (!(d === -1 || d >= s.length)) {
                    var p = s[d];
                    i === "startX" && p >= u || i === "endX" && p <= l || this.setState(Ze({}, i, p), function() {
                        a.props.onChange(a.getIndex({
                            startX: a.state.startX,
                            endX: a.state.endX
                        }))
                    })
                }
            }
        }
    }, {
        key: "renderBackground",
        value: function() {
            var n = this.props
              , i = n.x
              , a = n.y
              , o = n.width
              , s = n.height
              , l = n.fill
              , u = n.stroke;
            return $.createElement("rect", {
                stroke: u,
                fill: l,
                x: i,
                y: a,
                width: o,
                height: s
            })
        }
    }, {
        key: "renderPanorama",
        value: function() {
            var n = this.props
              , i = n.x
              , a = n.y
              , o = n.width
              , s = n.height
              , l = n.data
              , u = n.children
              , f = n.padding
              , c = C.Children.only(u);
            return c ? $.cloneElement(c, {
                x: i,
                y: a,
                width: o,
                height: s,
                margin: f,
                compact: !0,
                data: l
            }) : null
        }
    }, {
        key: "renderTravellerLayer",
        value: function(n, i) {
            var a, o, s = this, l = this.props, u = l.y, f = l.travellerWidth, c = l.height, d = l.traveller, p = l.ariaLabel, h = l.data, m = l.startIndex, g = l.endIndex, b = Math.max(n, this.props.x), _ = vs(vs({}, oe(this.props, !1)), {}, {
                x: b,
                y: u,
                width: f,
                height: c
            }), w = p || "Min value: ".concat((a = h[m]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = h[g]) === null || o === void 0 ? void 0 : o.name);
            return $.createElement(xe, {
                tabIndex: 0,
                role: "slider",
                "aria-label": w,
                "aria-valuenow": n,
                className: "recharts-brush-traveller",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.travellerDragStartHandlers[i],
                onTouchStart: this.travellerDragStartHandlers[i],
                onKeyDown: function(y) {
                    ["ArrowLeft", "ArrowRight"].includes(y.key) && (y.preventDefault(),
                    y.stopPropagation(),
                    s.handleTravellerMoveKeyboard(y.key === "ArrowRight" ? 1 : -1, i))
                },
                onFocus: function() {
                    s.setState({
                        isTravellerFocused: !0
                    })
                },
                onBlur: function() {
                    s.setState({
                        isTravellerFocused: !1
                    })
                },
                style: {
                    cursor: "col-resize"
                }
            }, t.renderTraveller(d, _))
        }
    }, {
        key: "renderSlide",
        value: function(n, i) {
            var a = this.props
              , o = a.y
              , s = a.height
              , l = a.stroke
              , u = a.travellerWidth
              , f = Math.min(n, i) + u
              , c = Math.max(Math.abs(i - n) - u, 0);
            return $.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: {
                    cursor: "move"
                },
                stroke: "none",
                fill: l,
                fillOpacity: .2,
                x: f,
                y: o,
                width: c,
                height: s
            })
        }
    }, {
        key: "renderText",
        value: function() {
            var n = this.props
              , i = n.startIndex
              , a = n.endIndex
              , o = n.y
              , s = n.height
              , l = n.travellerWidth
              , u = n.stroke
              , f = this.state
              , c = f.startX
              , d = f.endX
              , p = 5
              , h = {
                pointerEvents: "none",
                fill: u
            };
            return $.createElement(xe, {
                className: "recharts-brush-texts"
            }, $.createElement(ma, La({
                textAnchor: "end",
                verticalAnchor: "middle",
                x: Math.min(c, d) - p,
                y: o + s / 2
            }, h), this.getTextOfTick(i)), $.createElement(ma, La({
                textAnchor: "start",
                verticalAnchor: "middle",
                x: Math.max(c, d) + l + p,
                y: o + s / 2
            }, h), this.getTextOfTick(a)))
        }
    }, {
        key: "render",
        value: function() {
            var n = this.props
              , i = n.data
              , a = n.className
              , o = n.children
              , s = n.x
              , l = n.y
              , u = n.width
              , f = n.height
              , c = n.alwaysShowText
              , d = this.state
              , p = d.startX
              , h = d.endX
              , m = d.isTextActive
              , g = d.isSlideMoving
              , b = d.isTravellerMoving
              , _ = d.isTravellerFocused;
            if (!i || !i.length || !F(s) || !F(l) || !F(u) || !F(f) || u <= 0 || f <= 0)
                return null;
            var w = te("recharts-brush", a)
              , S = $.Children.count(o) === 1
              , y = mE("userSelect", "none");
            return $.createElement(xe, {
                className: w,
                onMouseLeave: this.handleLeaveWrapper,
                onTouchMove: this.handleTouchMove,
                style: y
            }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(p, h), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(h, "endX"), (m || g || b || _ || c) && this.renderText())
        }
    }], [{
        key: "renderDefaultTraveller",
        value: function(n) {
            var i = n.x
              , a = n.y
              , o = n.width
              , s = n.height
              , l = n.stroke
              , u = Math.floor(a + s / 2) - 1;
            return $.createElement($.Fragment, null, $.createElement("rect", {
                x: i,
                y: a,
                width: o,
                height: s,
                fill: l,
                stroke: "none"
            }), $.createElement("line", {
                x1: i + 1,
                y1: u,
                x2: i + o - 1,
                y2: u,
                fill: "none",
                stroke: "#fff"
            }), $.createElement("line", {
                x1: i + 1,
                y1: u + 2,
                x2: i + o - 1,
                y2: u + 2,
                fill: "none",
                stroke: "#fff"
            }))
        }
    }, {
        key: "renderTraveller",
        value: function(n, i) {
            var a;
            return $.isValidElement(n) ? a = $.cloneElement(n, i) : re(n) ? a = n(i) : a = t.renderDefaultTraveller(i),
            a
        }
    }, {
        key: "getDerivedStateFromProps",
        value: function(n, i) {
            var a = n.data
              , o = n.width
              , s = n.x
              , l = n.travellerWidth
              , u = n.updateId
              , f = n.startIndex
              , c = n.endIndex;
            if (a !== i.prevData || u !== i.prevUpdateId)
                return vs({
                    prevData: a,
                    prevTravellerWidth: l,
                    prevUpdateId: u,
                    prevX: s,
                    prevWidth: o
                }, a && a.length ? SE({
                    data: a,
                    width: o,
                    x: s,
                    travellerWidth: l,
                    startIndex: f,
                    endIndex: c
                }) : {
                    scale: null,
                    scaleValues: null
                });
            if (i.scale && (o !== i.prevWidth || s !== i.prevX || l !== i.prevTravellerWidth)) {
                i.scale.range([s, s + o - l]);
                var d = i.scale.domain().map(function(p) {
                    return i.scale(p)
                });
                return {
                    prevData: a,
                    prevTravellerWidth: l,
                    prevUpdateId: u,
                    prevX: s,
                    prevWidth: o,
                    startX: i.scale(n.startIndex),
                    endX: i.scale(n.endIndex),
                    scaleValues: d
                }
            }
            return null
        }
    }, {
        key: "getIndexInRange",
        value: function(n, i) {
            for (var a = n.length, o = 0, s = a - 1; s - o > 1; ) {
                var l = Math.floor((o + s) / 2);
                n[l] > i ? s = l : o = l
            }
            return i >= n[s] ? s : o
        }
    }])
}(C.PureComponent);
Ze(Zr, "displayName", "Brush");
Ze(Zr, "defaultProps", {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    },
    leaveTimeOut: 1e3,
    alwaysShowText: !1
});
var OE = zp;
function PE(e, t) {
    var r;
    return OE(e, function(n, i, a) {
        return r = t(n, i, a),
        !r
    }),
    !!r
}
var AE = PE
  , jE = og
  , $E = Oi
  , CE = AE
  , TE = Si
  , EE = xo;
function kE(e, t, r) {
    var n = TE(e) ? jE : CE;
    return r && EE(e, t, r) && (t = void 0),
    n(e, $E(t))
}
var ME = kE;
const NE = ke(ME);
var Tt = function(t, r) {
    var n = t.alwaysShow
      , i = t.ifOverflow;
    return n && (i = "extendDomain"),
    i === r
}
  , tp = Nh;
function IE(e, t, r) {
    t == "__proto__" && tp ? tp(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : e[t] = r
}
var DE = IE
  , RE = DE
  , BE = sg
  , LE = Oi;
function UE(e, t) {
    var r = {};
    return t = LE(t),
    BE(e, function(n, i, a) {
        RE(r, i, t(n, i, a))
    }),
    r
}
var WE = UE;
const zE = ke(WE);
function FE(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (!t(e[r], r, e))
            return !1;
    return !0
}
var qE = FE
  , HE = zp;
function VE(e, t) {
    var r = !0;
    return HE(e, function(n, i, a) {
        return r = !!t(n, i, a),
        r
    }),
    r
}
var KE = VE
  , XE = qE
  , GE = KE
  , YE = Oi
  , ZE = Si
  , JE = xo;
function QE(e, t, r) {
    var n = ZE(e) ? XE : GE;
    return r && JE(e, t, r) && (t = void 0),
    n(e, YE(t))
}
var ek = QE;
const tk = ke(ek);
var rk = ["x", "y"];
function mi(e) {
    "@babel/helpers - typeof";
    return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    mi(e)
}
function El() {
    return El = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    El.apply(this, arguments)
}
function rp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function $n(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? rp(Object(r), !0).forEach(function(n) {
            nk(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function nk(e, t, r) {
    return t = ik(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function ik(e) {
    var t = ak(e, "string");
    return mi(t) == "symbol" ? t : t + ""
}
function ak(e, t) {
    if (mi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (mi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function ok(e, t) {
    if (e == null)
        return {};
    var r = sk(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function sk(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function lk(e, t) {
    var r = e.x
      , n = e.y
      , i = ok(e, rk)
      , a = "".concat(r)
      , o = parseInt(a, 10)
      , s = "".concat(n)
      , l = parseInt(s, 10)
      , u = "".concat(t.height || i.height)
      , f = parseInt(u, 10)
      , c = "".concat(t.width || i.width)
      , d = parseInt(c, 10);
    return $n($n($n($n($n({}, t), i), o ? {
        x: o
    } : {}), l ? {
        y: l
    } : {}), {}, {
        height: f,
        width: d,
        name: t.name,
        radius: t.radius
    })
}
function np(e) {
    return $.createElement(zT, El({
        shapeType: "rectangle",
        propTransformer: lk,
        activeClassName: "recharts-active-bar"
    }, e))
}
var uk = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function(n, i) {
        if (typeof t == "number")
            return t;
        var a = typeof n == "number";
        return a ? t(n, i) : (a || wr(),
        r)
    }
}, ck = ["value", "background"], sv;
function Jr(e) {
    "@babel/helpers - typeof";
    return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Jr(e)
}
function fk(e, t) {
    if (e == null)
        return {};
    var r = dk(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function dk(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function Wa() {
    return Wa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Wa.apply(this, arguments)
}
function ip(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function je(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ip(Object(r), !0).forEach(function(n) {
            Gt(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ip(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function pk(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function ap(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, uv(n.key), n)
    }
}
function hk(e, t, r) {
    return t && ap(e.prototype, t),
    r && ap(e, r),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function mk(e, t, r) {
    return t = za(t),
    vk(e, lv() ? Reflect.construct(t, r || [], za(e).constructor) : t.apply(e, r))
}
function vk(e, t) {
    if (t && (Jr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return yk(e)
}
function yk(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function lv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (lv = function() {
        return !!e
    }
    )()
}
function za(e) {
    return za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    za(e)
}
function gk(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && kl(e, t)
}
function kl(e, t) {
    return kl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    kl(e, t)
}
function Gt(e, t, r) {
    return t = uv(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function uv(e) {
    var t = bk(e, "string");
    return Jr(t) == "symbol" ? t : t + ""
}
function bk(e, t) {
    if (Jr(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Jr(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var ki = function(e) {
    function t() {
        var r;
        pk(this, t);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
        return r = mk(this, t, [].concat(i)),
        Gt(r, "state", {
            isAnimationFinished: !1
        }),
        Gt(r, "id", ji("recharts-bar-")),
        Gt(r, "handleAnimationEnd", function() {
            var o = r.props.onAnimationEnd;
            r.setState({
                isAnimationFinished: !0
            }),
            o && o()
        }),
        Gt(r, "handleAnimationStart", function() {
            var o = r.props.onAnimationStart;
            r.setState({
                isAnimationFinished: !1
            }),
            o && o()
        }),
        r
    }
    return gk(t, e),
    hk(t, [{
        key: "renderRectanglesStatically",
        value: function(n) {
            var i = this
              , a = this.props
              , o = a.shape
              , s = a.dataKey
              , l = a.activeIndex
              , u = a.activeBar
              , f = oe(this.props, !1);
            return n && n.map(function(c, d) {
                var p = d === l
                  , h = p ? u : o
                  , m = je(je(je({}, f), c), {}, {
                    isActive: p,
                    option: h,
                    index: d,
                    dataKey: s,
                    onAnimationStart: i.handleAnimationStart,
                    onAnimationEnd: i.handleAnimationEnd
                });
                return $.createElement(xe, Wa({
                    className: "recharts-bar-rectangle"
                }, ia(i.props, c, d), {
                    key: "rectangle-".concat(c == null ? void 0 : c.x, "-").concat(c == null ? void 0 : c.y, "-").concat(c == null ? void 0 : c.value)
                }), $.createElement(np, m))
            })
        }
    }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
            var n = this
              , i = this.props
              , a = i.data
              , o = i.layout
              , s = i.isAnimationActive
              , l = i.animationBegin
              , u = i.animationDuration
              , f = i.animationEasing
              , c = i.animationId
              , d = this.state.prevData;
            return $.createElement(Ft, {
                begin: l,
                duration: u,
                isActive: s,
                easing: f,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "bar-".concat(c),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, function(p) {
                var h = p.t
                  , m = a.map(function(g, b) {
                    var _ = d && d[b];
                    if (_) {
                        var w = nt(_.x, g.x)
                          , S = nt(_.y, g.y)
                          , y = nt(_.width, g.width)
                          , x = nt(_.height, g.height);
                        return je(je({}, g), {}, {
                            x: w(h),
                            y: S(h),
                            width: y(h),
                            height: x(h)
                        })
                    }
                    if (o === "horizontal") {
                        var O = nt(0, g.height)
                          , P = O(h);
                        return je(je({}, g), {}, {
                            y: g.y + g.height - P,
                            height: P
                        })
                    }
                    var A = nt(0, g.width)
                      , k = A(h);
                    return je(je({}, g), {}, {
                        width: k
                    })
                });
                return $.createElement(xe, null, n.renderRectanglesStatically(m))
            })
        }
    }, {
        key: "renderRectangles",
        value: function() {
            var n = this.props
              , i = n.data
              , a = n.isAnimationActive
              , o = this.state.prevData;
            return a && i && i.length && (!o || !Yn(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i)
        }
    }, {
        key: "renderBackground",
        value: function() {
            var n = this
              , i = this.props
              , a = i.data
              , o = i.dataKey
              , s = i.activeIndex
              , l = oe(this.props.background, !1);
            return a.map(function(u, f) {
                u.value;
                var c = u.background
                  , d = fk(u, ck);
                if (!c)
                    return null;
                var p = je(je(je(je(je({}, d), {}, {
                    fill: "#eee"
                }, c), l), ia(n.props, u, f)), {}, {
                    onAnimationStart: n.handleAnimationStart,
                    onAnimationEnd: n.handleAnimationEnd,
                    dataKey: o,
                    index: f,
                    className: "recharts-bar-background-rectangle"
                });
                return $.createElement(np, Wa({
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === s
                }, p))
            })
        }
    }, {
        key: "renderErrorBar",
        value: function(n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
                return null;
            var a = this.props
              , o = a.data
              , s = a.xAxis
              , l = a.yAxis
              , u = a.layout
              , f = a.children
              , c = bt(f, To);
            if (!c)
                return null;
            var d = u === "vertical" ? o[0].height / 2 : o[0].width / 2
              , p = function(g, b) {
                var _ = Array.isArray(g.value) ? g.value[1] : g.value;
                return {
                    x: g.x,
                    y: g.y,
                    value: _,
                    errorVal: et(g, b)
                }
            }
              , h = {
                clipPath: n ? "url(#clipPath-".concat(i, ")") : null
            };
            return $.createElement(xe, h, c.map(function(m) {
                return $.cloneElement(m, {
                    key: "error-bar-".concat(i, "-").concat(m.props.dataKey),
                    data: o,
                    xAxis: s,
                    yAxis: l,
                    layout: u,
                    offset: d,
                    dataPointFormatter: p
                })
            }))
        }
    }, {
        key: "render",
        value: function() {
            var n = this.props
              , i = n.hide
              , a = n.data
              , o = n.className
              , s = n.xAxis
              , l = n.yAxis
              , u = n.left
              , f = n.top
              , c = n.width
              , d = n.height
              , p = n.isAnimationActive
              , h = n.background
              , m = n.id;
            if (i || !a || !a.length)
                return null;
            var g = this.state.isAnimationFinished
              , b = te("recharts-bar", o)
              , _ = s && s.allowDataOverflow
              , w = l && l.allowDataOverflow
              , S = _ || w
              , y = ue(m) ? this.id : m;
            return $.createElement(xe, {
                className: b
            }, _ || w ? $.createElement("defs", null, $.createElement("clipPath", {
                id: "clipPath-".concat(y)
            }, $.createElement("rect", {
                x: _ ? u : u - c / 2,
                y: w ? f : f - d / 2,
                width: _ ? c : c * 2,
                height: w ? d : d * 2
            }))) : null, $.createElement(xe, {
                className: "recharts-bar-rectangles",
                clipPath: S ? "url(#clipPath-".concat(y, ")") : null
            }, h ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, y), (!p || g) && Zt.renderCallByParent(this.props, a))
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function(n, i) {
            return n.animationId !== i.prevAnimationId ? {
                prevAnimationId: n.animationId,
                curData: n.data,
                prevData: i.curData
            } : n.data !== i.curData ? {
                curData: n.data
            } : null
        }
    }])
}(C.PureComponent);
sv = ki;
Gt(ki, "displayName", "Bar");
Gt(ki, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    legendType: "rect",
    minPointSize: 0,
    hide: !1,
    data: [],
    layout: "vertical",
    activeBar: !1,
    isAnimationActive: !dn.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease"
});
Gt(ki, "getComposedData", function(e) {
    var t = e.props
      , r = e.item
      , n = e.barPosition
      , i = e.bandSize
      , a = e.xAxis
      , o = e.yAxis
      , s = e.xAxisTicks
      , l = e.yAxisTicks
      , u = e.stackedData
      , f = e.dataStartIndex
      , c = e.displayedData
      , d = e.offset
      , p = Zj(n, r);
    if (!p)
        return null;
    var h = t.layout
      , m = r.type.defaultProps
      , g = m !== void 0 ? je(je({}, m), r.props) : r.props
      , b = g.dataKey
      , _ = g.children
      , w = g.minPointSize
      , S = h === "horizontal" ? o : a
      , y = u ? S.scale.domain() : null
      , x = a$({
        numericAxis: S
    })
      , O = bt(_, Wh)
      , P = c.map(function(A, k) {
        var j, T, N, E, I, D;
        u ? j = Jj(u[f + k], y) : (j = et(A, b),
        Array.isArray(j) || (j = [x, j]));
        var B = uk(w, sv.defaultProps.minPointSize)(j[1], k);
        if (h === "horizontal") {
            var R, L = [o.scale(j[0]), o.scale(j[1])], K = L[0], G = L[1];
            T = ad({
                axis: a,
                ticks: s,
                bandSize: i,
                offset: p.offset,
                entry: A,
                index: k
            }),
            N = (R = G ?? K) !== null && R !== void 0 ? R : void 0,
            E = p.size;
            var z = K - G;
            if (I = Number.isNaN(z) ? 0 : z,
            D = {
                x: T,
                y: o.y,
                width: E,
                height: o.height
            },
            Math.abs(B) > 0 && Math.abs(I) < Math.abs(B)) {
                var Y = yt(I || B) * (Math.abs(B) - Math.abs(I));
                N -= Y,
                I += Y
            }
        } else {
            var se = [a.scale(j[0]), a.scale(j[1])]
              , we = se[0]
              , Ae = se[1];
            if (T = we,
            N = ad({
                axis: o,
                ticks: l,
                bandSize: i,
                offset: p.offset,
                entry: A,
                index: k
            }),
            E = Ae - we,
            I = p.size,
            D = {
                x: a.x,
                y: N,
                width: a.width,
                height: I
            },
            Math.abs(B) > 0 && Math.abs(E) < Math.abs(B)) {
                var _t = yt(E || B) * (Math.abs(B) - Math.abs(E));
                E += _t
            }
        }
        return je(je(je({}, A), {}, {
            x: T,
            y: N,
            width: E,
            height: I,
            value: u ? j : j[1],
            payload: A,
            background: D
        }, O && O[k] && O[k].props), {}, {
            tooltipPayload: [Vm(r, A)],
            tooltipPosition: {
                x: T + E / 2,
                y: N + I / 2
            }
        })
    });
    return je({
        data: P,
        layout: h
    }, d)
});
function vi(e) {
    "@babel/helpers - typeof";
    return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    vi(e)
}
function xk(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function op(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, cv(n.key), n)
    }
}
function wk(e, t, r) {
    return t && op(e.prototype, t),
    r && op(e, r),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function sp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function mt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? sp(Object(r), !0).forEach(function(n) {
            No(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function No(e, t, r) {
    return t = cv(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function cv(e) {
    var t = _k(e, "string");
    return vi(t) == "symbol" ? t : t + ""
}
function _k(e, t) {
    if (vi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (vi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Sk = function(t, r, n, i, a) {
    var o = t.width
      , s = t.height
      , l = t.layout
      , u = t.children
      , f = Object.keys(r)
      , c = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: s - n.bottom,
        bottomMirror: s - n.bottom
    }
      , d = !!Je(u, ki);
    return f.reduce(function(p, h) {
        var m = r[h], g = m.orientation, b = m.domain, _ = m.padding, w = _ === void 0 ? {} : _, S = m.mirror, y = m.reversed, x = "".concat(g).concat(S ? "Mirror" : ""), O, P, A, k, j;
        if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
            var T = b[1] - b[0]
              , N = 1 / 0
              , E = m.categoricalDomain.sort();
            if (E.forEach(function(se, we) {
                we > 0 && (N = Math.min((se || 0) - (E[we - 1] || 0), N))
            }),
            Number.isFinite(N)) {
                var I = N / T
                  , D = m.layout === "vertical" ? n.height : n.width;
                if (m.padding === "gap" && (O = I * D / 2),
                m.padding === "no-gap") {
                    var B = br(t.barCategoryGap, I * D)
                      , R = I * D / 2;
                    O = R - B - (R - B) / D * B
                }
            }
        }
        i === "xAxis" ? P = [n.left + (w.left || 0) + (O || 0), n.left + n.width - (w.right || 0) - (O || 0)] : i === "yAxis" ? P = l === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + (O || 0), n.top + n.height - (w.bottom || 0) - (O || 0)] : P = m.range,
        y && (P = [P[1], P[0]]);
        var L = Gj(m, a, d)
          , K = L.scale
          , G = L.realScaleType;
        K.domain(b).range(P),
        Yj(K);
        var z = i$(K, mt(mt({}, m), {}, {
            realScaleType: G
        }));
        i === "xAxis" ? (j = g === "top" && !S || g === "bottom" && S,
        A = n.left,
        k = c[x] - j * m.height) : i === "yAxis" && (j = g === "left" && !S || g === "right" && S,
        A = c[x] - j * m.width,
        k = n.top);
        var Y = mt(mt(mt({}, m), z), {}, {
            realScaleType: G,
            x: A,
            y: k,
            scale: K,
            width: i === "xAxis" ? n.width : m.width,
            height: i === "yAxis" ? n.height : m.height
        });
        return Y.bandSize = Ca(Y, z),
        !m.hide && i === "xAxis" ? c[x] += (j ? -1 : 1) * Y.height : m.hide || (c[x] += (j ? -1 : 1) * Y.width),
        mt(mt({}, p), {}, No({}, h, Y))
    }, {})
}
  , fv = function(t, r) {
    var n = t.x
      , i = t.y
      , a = r.x
      , o = r.y;
    return {
        x: Math.min(n, a),
        y: Math.min(i, o),
        width: Math.abs(a - n),
        height: Math.abs(o - i)
    }
}
  , Ok = function(t) {
    var r = t.x1
      , n = t.y1
      , i = t.x2
      , a = t.y2;
    return fv({
        x: r,
        y: n
    }, {
        x: i,
        y: a
    })
}
  , dv = function() {
    function e(t) {
        xk(this, e),
        this.scale = t
    }
    return wk(e, [{
        key: "domain",
        get: function() {
            return this.scale.domain
        }
    }, {
        key: "range",
        get: function() {
            return this.scale.range
        }
    }, {
        key: "rangeMin",
        get: function() {
            return this.range()[0]
        }
    }, {
        key: "rangeMax",
        get: function() {
            return this.range()[1]
        }
    }, {
        key: "bandwidth",
        get: function() {
            return this.scale.bandwidth
        }
    }, {
        key: "apply",
        value: function(r) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , i = n.bandAware
              , a = n.position;
            if (r !== void 0) {
                if (a)
                    switch (a) {
                    case "start":
                        return this.scale(r);
                    case "middle":
                        {
                            var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                            return this.scale(r) + o
                        }
                    case "end":
                        {
                            var s = this.bandwidth ? this.bandwidth() : 0;
                            return this.scale(r) + s
                        }
                    default:
                        return this.scale(r)
                    }
                if (i) {
                    var l = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + l
                }
                return this.scale(r)
            }
        }
    }, {
        key: "isInRange",
        value: function(r) {
            var n = this.range()
              , i = n[0]
              , a = n[n.length - 1];
            return i <= a ? r >= i && r <= a : r >= a && r <= i
        }
    }], [{
        key: "create",
        value: function(r) {
            return new e(r)
        }
    }])
}();
No(dv, "EPS", 1e-4);
var Hu = function(t) {
    var r = Object.keys(t).reduce(function(n, i) {
        return mt(mt({}, n), {}, No({}, i, dv.create(t[i])))
    }, {});
    return mt(mt({}, r), {}, {
        apply: function(i) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , o = a.bandAware
              , s = a.position;
            return zE(i, function(l, u) {
                return r[u].apply(l, {
                    bandAware: o,
                    position: s
                })
            })
        },
        isInRange: function(i) {
            return tk(i, function(a, o) {
                return r[o].isInRange(a)
            })
        }
    })
};
function Pk(e) {
    return (e % 180 + 180) % 180
}
var Ak = function(t) {
    var r = t.width
      , n = t.height
      , i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
      , a = Pk(i)
      , o = a * Math.PI / 180
      , s = Math.atan(n / r)
      , l = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(l)
}
  , jk = lg(function(e) {
    return {
        x: e.left,
        y: e.top,
        width: e.width,
        height: e.height
    }
}, function(e) {
    return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("")
})
  , pv = C.createContext(void 0)
  , hv = C.createContext(void 0)
  , mv = C.createContext(void 0)
  , $k = C.createContext({})
  , vv = C.createContext(void 0)
  , yv = C.createContext(0)
  , gv = C.createContext(0)
  , lp = function(t) {
    var r = t.state
      , n = r.xAxisMap
      , i = r.yAxisMap
      , a = r.offset
      , o = t.clipPathId
      , s = t.children
      , l = t.width
      , u = t.height
      , f = jk(a);
    return $.createElement(pv.Provider, {
        value: n
    }, $.createElement(hv.Provider, {
        value: i
    }, $.createElement($k.Provider, {
        value: a
    }, $.createElement(mv.Provider, {
        value: f
    }, $.createElement(vv.Provider, {
        value: o
    }, $.createElement(yv.Provider, {
        value: u
    }, $.createElement(gv.Provider, {
        value: l
    }, s)))))))
}
  , Ck = function() {
    return C.useContext(vv)
}
  , bv = function(t) {
    var r = C.useContext(pv);
    r == null && wr();
    var n = r[t];
    return n == null && wr(),
    n
}
  , xv = function(t) {
    var r = C.useContext(hv);
    r == null && wr();
    var n = r[t];
    return n == null && wr(),
    n
}
  , Tk = function() {
    var t = C.useContext(mv);
    return t
}
  , wv = function() {
    return C.useContext(gv)
}
  , _v = function() {
    return C.useContext(yv)
};
function Qr(e) {
    "@babel/helpers - typeof";
    return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Qr(e)
}
function Ek(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function kk(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Ov(n.key), n)
    }
}
function Mk(e, t, r) {
    return t && kk(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Nk(e, t, r) {
    return t = Fa(t),
    Ik(e, Sv() ? Reflect.construct(t, r || [], Fa(e).constructor) : t.apply(e, r))
}
function Ik(e, t) {
    if (t && (Qr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return Dk(e)
}
function Dk(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Sv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Sv = function() {
        return !!e
    }
    )()
}
function Fa(e) {
    return Fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Fa(e)
}
function Rk(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Ml(e, t)
}
function Ml(e, t) {
    return Ml = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Ml(e, t)
}
function up(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function cp(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? up(Object(r), !0).forEach(function(n) {
            Vu(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : up(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Vu(e, t, r) {
    return t = Ov(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Ov(e) {
    var t = Bk(e, "string");
    return Qr(t) == "symbol" ? t : t + ""
}
function Bk(e, t) {
    if (Qr(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Qr(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
function Lk(e, t) {
    return Fk(e) || zk(e, t) || Wk(e, t) || Uk()
}
function Uk() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Wk(e, t) {
    if (e) {
        if (typeof e == "string")
            return fp(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return fp(e, t)
    }
}
function fp(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function zk(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t !== 0)
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function Fk(e) {
    if (Array.isArray(e))
        return e
}
function Nl() {
    return Nl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Nl.apply(this, arguments)
}
var qk = function(t, r) {
    var n;
    return $.isValidElement(t) ? n = $.cloneElement(t, r) : re(t) ? n = t(r) : n = $.createElement("line", Nl({}, r, {
        className: "recharts-reference-line-line"
    })),
    n
}
  , Hk = function(t, r, n, i, a, o, s, l, u) {
    var f = a.x
      , c = a.y
      , d = a.width
      , p = a.height;
    if (n) {
        var h = u.y
          , m = t.y.apply(h, {
            position: o
        });
        if (Tt(u, "discard") && !t.y.isInRange(m))
            return null;
        var g = [{
            x: f + d,
            y: m
        }, {
            x: f,
            y: m
        }];
        return l === "left" ? g.reverse() : g
    }
    if (r) {
        var b = u.x
          , _ = t.x.apply(b, {
            position: o
        });
        if (Tt(u, "discard") && !t.x.isInRange(_))
            return null;
        var w = [{
            x: _,
            y: c + p
        }, {
            x: _,
            y: c
        }];
        return s === "top" ? w.reverse() : w
    }
    if (i) {
        var S = u.segment
          , y = S.map(function(x) {
            return t.apply(x, {
                position: o
            })
        });
        return Tt(u, "discard") && NE(y, function(x) {
            return !t.isInRange(x)
        }) ? null : y
    }
    return null
};
function Vk(e) {
    var t = e.x
      , r = e.y
      , n = e.segment
      , i = e.xAxisId
      , a = e.yAxisId
      , o = e.shape
      , s = e.className
      , l = e.alwaysShow
      , u = Ck()
      , f = bv(i)
      , c = xv(a)
      , d = Tk();
    if (!u || !d)
        return null;
    hr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var p = Hu({
        x: f.scale,
        y: c.scale
    })
      , h = Ee(t)
      , m = Ee(r)
      , g = n && n.length === 2
      , b = Hk(p, h, m, g, d, e.position, f.orientation, c.orientation, e);
    if (!b)
        return null;
    var _ = Lk(b, 2)
      , w = _[0]
      , S = w.x
      , y = w.y
      , x = _[1]
      , O = x.x
      , P = x.y
      , A = Tt(e, "hidden") ? "url(#".concat(u, ")") : void 0
      , k = cp(cp({
        clipPath: A
    }, oe(e, !0)), {}, {
        x1: S,
        y1: y,
        x2: O,
        y2: P
    });
    return $.createElement(xe, {
        className: te("recharts-reference-line", s)
    }, qk(o, k), We.renderCallByParent(e, Ok({
        x1: S,
        y1: y,
        x2: O,
        y2: P
    })))
}
var Io = function(e) {
    function t() {
        return Ek(this, t),
        Nk(this, t, arguments)
    }
    return Rk(t, e),
    Mk(t, [{
        key: "render",
        value: function() {
            return $.createElement(Vk, this.props)
        }
    }])
}($.Component);
Vu(Io, "displayName", "ReferenceLine");
Vu(Io, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle"
});
function Il() {
    return Il = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Il.apply(this, arguments)
}
function en(e) {
    "@babel/helpers - typeof";
    return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    en(e)
}
function dp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function pp(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? dp(Object(r), !0).forEach(function(n) {
            Do(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Kk(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Xk(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Av(n.key), n)
    }
}
function Gk(e, t, r) {
    return t && Xk(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Yk(e, t, r) {
    return t = qa(t),
    Zk(e, Pv() ? Reflect.construct(t, r || [], qa(e).constructor) : t.apply(e, r))
}
function Zk(e, t) {
    if (t && (en(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return Jk(e)
}
function Jk(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Pv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Pv = function() {
        return !!e
    }
    )()
}
function qa(e) {
    return qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    qa(e)
}
function Qk(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Dl(e, t)
}
function Dl(e, t) {
    return Dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Dl(e, t)
}
function Do(e, t, r) {
    return t = Av(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Av(e) {
    var t = eM(e, "string");
    return en(t) == "symbol" ? t : t + ""
}
function eM(e, t) {
    if (en(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (en(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var tM = function(t) {
    var r = t.x
      , n = t.y
      , i = t.xAxis
      , a = t.yAxis
      , o = Hu({
        x: i.scale,
        y: a.scale
    })
      , s = o.apply({
        x: r,
        y: n
    }, {
        bandAware: !0
    });
    return Tt(t, "discard") && !o.isInRange(s) ? null : s
}
  , Ro = function(e) {
    function t() {
        return Kk(this, t),
        Yk(this, t, arguments)
    }
    return Qk(t, e),
    Gk(t, [{
        key: "render",
        value: function() {
            var n = this.props
              , i = n.x
              , a = n.y
              , o = n.r
              , s = n.alwaysShow
              , l = n.clipPathId
              , u = Ee(i)
              , f = Ee(a);
            if (hr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),
            !u || !f)
                return null;
            var c = tM(this.props);
            if (!c)
                return null;
            var d = c.x
              , p = c.y
              , h = this.props
              , m = h.shape
              , g = h.className
              , b = Tt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0
              , _ = pp(pp({
                clipPath: b
            }, oe(this.props, !0)), {}, {
                cx: d,
                cy: p
            });
            return $.createElement(xe, {
                className: te("recharts-reference-dot", g)
            }, t.renderDot(m, _), We.renderCallByParent(this.props, {
                x: d - o,
                y: p - o,
                width: 2 * o,
                height: 2 * o
            }))
        }
    }])
}($.Component);
Do(Ro, "displayName", "ReferenceDot");
Do(Ro, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1
});
Do(Ro, "renderDot", function(e, t) {
    var r;
    return $.isValidElement(e) ? r = $.cloneElement(e, t) : re(e) ? r = e(t) : r = $.createElement(Eo, Il({}, t, {
        cx: t.cx,
        cy: t.cy,
        className: "recharts-reference-dot-dot"
    })),
    r
});
function Rl() {
    return Rl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Rl.apply(this, arguments)
}
function tn(e) {
    "@babel/helpers - typeof";
    return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    tn(e)
}
function hp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function mp(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? hp(Object(r), !0).forEach(function(n) {
            Bo(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function rM(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function nM(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, $v(n.key), n)
    }
}
function iM(e, t, r) {
    return t && nM(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function aM(e, t, r) {
    return t = Ha(t),
    oM(e, jv() ? Reflect.construct(t, r || [], Ha(e).constructor) : t.apply(e, r))
}
function oM(e, t) {
    if (t && (tn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return sM(e)
}
function sM(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function jv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (jv = function() {
        return !!e
    }
    )()
}
function Ha(e) {
    return Ha = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Ha(e)
}
function lM(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Bl(e, t)
}
function Bl(e, t) {
    return Bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Bl(e, t)
}
function Bo(e, t, r) {
    return t = $v(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function $v(e) {
    var t = uM(e, "string");
    return tn(t) == "symbol" ? t : t + ""
}
function uM(e, t) {
    if (tn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (tn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var cM = function(t, r, n, i, a) {
    var o = a.x1
      , s = a.x2
      , l = a.y1
      , u = a.y2
      , f = a.xAxis
      , c = a.yAxis;
    if (!f || !c)
        return null;
    var d = Hu({
        x: f.scale,
        y: c.scale
    })
      , p = {
        x: t ? d.x.apply(o, {
            position: "start"
        }) : d.x.rangeMin,
        y: n ? d.y.apply(l, {
            position: "start"
        }) : d.y.rangeMin
    }
      , h = {
        x: r ? d.x.apply(s, {
            position: "end"
        }) : d.x.rangeMax,
        y: i ? d.y.apply(u, {
            position: "end"
        }) : d.y.rangeMax
    };
    return Tt(a, "discard") && (!d.isInRange(p) || !d.isInRange(h)) ? null : fv(p, h)
}
  , Lo = function(e) {
    function t() {
        return rM(this, t),
        aM(this, t, arguments)
    }
    return lM(t, e),
    iM(t, [{
        key: "render",
        value: function() {
            var n = this.props
              , i = n.x1
              , a = n.x2
              , o = n.y1
              , s = n.y2
              , l = n.className
              , u = n.alwaysShow
              , f = n.clipPathId;
            hr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
            var c = Ee(i)
              , d = Ee(a)
              , p = Ee(o)
              , h = Ee(s)
              , m = this.props.shape;
            if (!c && !d && !p && !h && !m)
                return null;
            var g = cM(c, d, p, h, this.props);
            if (!g && !m)
                return null;
            var b = Tt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
            return $.createElement(xe, {
                className: te("recharts-reference-area", l)
            }, t.renderRect(m, mp(mp({
                clipPath: b
            }, oe(this.props, !0)), g)), We.renderCallByParent(this.props, g))
        }
    }])
}($.Component);
Bo(Lo, "displayName", "ReferenceArea");
Bo(Lo, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: .5,
    stroke: "none",
    strokeWidth: 1
});
Bo(Lo, "renderRect", function(e, t) {
    var r;
    return $.isValidElement(e) ? r = $.cloneElement(e, t) : re(e) ? r = e(t) : r = $.createElement(qu, Rl({}, t, {
        className: "recharts-reference-area-rect"
    })),
    r
});
function Cv(e, t, r) {
    if (t < 1)
        return [];
    if (t === 1 && r === void 0)
        return e;
    for (var n = [], i = 0; i < e.length; i += t)
        n.push(e[i]);
    return n
}
function fM(e, t, r) {
    var n = {
        width: e.width + t.width,
        height: e.height + t.height
    };
    return Ak(n, r)
}
function dM(e, t, r) {
    var n = r === "width"
      , i = e.x
      , a = e.y
      , o = e.width
      , s = e.height;
    return t === 1 ? {
        start: n ? i : a,
        end: n ? i + o : a + s
    } : {
        start: n ? i + o : a + s,
        end: n ? i : a
    }
}
function Va(e, t, r, n, i) {
    if (e * t < e * n || e * t > e * i)
        return !1;
    var a = r();
    return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0
}
function pM(e, t) {
    return Cv(e, t + 1)
}
function hM(e, t, r, n, i) {
    for (var a = (n || []).slice(), o = t.start, s = t.end, l = 0, u = 1, f = o, c = function() {
        var h = n == null ? void 0 : n[l];
        if (h === void 0)
            return {
                v: Cv(n, u)
            };
        var m = l, g, b = function() {
            return g === void 0 && (g = r(h, m)),
            g
        }, _ = h.coordinate, w = l === 0 || Va(e, _, b, f, s);
        w || (l = 0,
        f = o,
        u += 1),
        w && (f = _ + e * (b() / 2 + i),
        l += u)
    }, d; u <= a.length; )
        if (d = c(),
        d)
            return d.v;
    return []
}
function yi(e) {
    "@babel/helpers - typeof";
    return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    yi(e)
}
function vp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Ue(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? vp(Object(r), !0).forEach(function(n) {
            mM(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function mM(e, t, r) {
    return t = vM(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function vM(e) {
    var t = yM(e, "string");
    return yi(t) == "symbol" ? t : t + ""
}
function yM(e, t) {
    if (yi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (yi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function gM(e, t, r, n, i) {
    for (var a = (n || []).slice(), o = a.length, s = t.start, l = t.end, u = function(d) {
        var p = a[d], h, m = function() {
            return h === void 0 && (h = r(p, d)),
            h
        };
        if (d === o - 1) {
            var g = e * (p.coordinate + e * m() / 2 - l);
            a[d] = p = Ue(Ue({}, p), {}, {
                tickCoord: g > 0 ? p.coordinate - g * e : p.coordinate
            })
        } else
            a[d] = p = Ue(Ue({}, p), {}, {
                tickCoord: p.coordinate
            });
        var b = Va(e, p.tickCoord, m, s, l);
        b && (l = p.tickCoord - e * (m() / 2 + i),
        a[d] = Ue(Ue({}, p), {}, {
            isShow: !0
        }))
    }, f = o - 1; f >= 0; f--)
        u(f);
    return a
}
function bM(e, t, r, n, i, a) {
    var o = (n || []).slice()
      , s = o.length
      , l = t.start
      , u = t.end;
    if (a) {
        var f = n[s - 1]
          , c = r(f, s - 1)
          , d = e * (f.coordinate + e * c / 2 - u);
        o[s - 1] = f = Ue(Ue({}, f), {}, {
            tickCoord: d > 0 ? f.coordinate - d * e : f.coordinate
        });
        var p = Va(e, f.tickCoord, function() {
            return c
        }, l, u);
        p && (u = f.tickCoord - e * (c / 2 + i),
        o[s - 1] = Ue(Ue({}, f), {}, {
            isShow: !0
        }))
    }
    for (var h = a ? s - 1 : s, m = function(_) {
        var w = o[_], S, y = function() {
            return S === void 0 && (S = r(w, _)),
            S
        };
        if (_ === 0) {
            var x = e * (w.coordinate - e * y() / 2 - l);
            o[_] = w = Ue(Ue({}, w), {}, {
                tickCoord: x < 0 ? w.coordinate - x * e : w.coordinate
            })
        } else
            o[_] = w = Ue(Ue({}, w), {}, {
                tickCoord: w.coordinate
            });
        var O = Va(e, w.tickCoord, y, l, u);
        O && (l = w.tickCoord + e * (y() / 2 + i),
        o[_] = Ue(Ue({}, w), {}, {
            isShow: !0
        }))
    }, g = 0; g < h; g++)
        m(g);
    return o
}
function xM(e, t, r) {
    var n = e.tick
      , i = e.ticks
      , a = e.viewBox
      , o = e.minTickGap
      , s = e.orientation
      , l = e.interval
      , u = e.tickFormatter
      , f = e.unit
      , c = e.angle;
    if (!i || !i.length || !n)
        return [];
    if (F(l) || dn.isSsr)
        return pM(i, typeof l == "number" && F(l) ? l : 0);
    var d = []
      , p = s === "top" || s === "bottom" ? "width" : "height"
      , h = f && p === "width" ? kn(f, {
        fontSize: t,
        letterSpacing: r
    }) : {
        width: 0,
        height: 0
    }
      , m = function(w, S) {
        var y = re(u) ? u(w.value, S) : w.value;
        return p === "width" ? fM(kn(y, {
            fontSize: t,
            letterSpacing: r
        }), h, c) : kn(y, {
            fontSize: t,
            letterSpacing: r
        })[p]
    }
      , g = i.length >= 2 ? yt(i[1].coordinate - i[0].coordinate) : 1
      , b = dM(a, g, p);
    return l === "equidistantPreserveStart" ? hM(g, b, m, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? d = bM(g, b, m, i, o, l === "preserveStartEnd") : d = gM(g, b, m, i, o),
    d.filter(function(_) {
        return _.isShow
    }))
}
var wM = ["viewBox"]
  , _M = ["viewBox"]
  , SM = ["ticks"];
function rn(e) {
    "@babel/helpers - typeof";
    return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    rn(e)
}
function Mr() {
    return Mr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Mr.apply(this, arguments)
}
function yp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function qe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? yp(Object(r), !0).forEach(function(n) {
            Ku(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function ys(e, t) {
    if (e == null)
        return {};
    var r = OM(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function OM(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function PM(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function gp(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Ev(n.key), n)
    }
}
function AM(e, t, r) {
    return t && gp(e.prototype, t),
    r && gp(e, r),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function jM(e, t, r) {
    return t = Ka(t),
    $M(e, Tv() ? Reflect.construct(t, r || [], Ka(e).constructor) : t.apply(e, r))
}
function $M(e, t) {
    if (t && (rn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return CM(e)
}
function CM(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Tv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Tv = function() {
        return !!e
    }
    )()
}
function Ka(e) {
    return Ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Ka(e)
}
function TM(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Ll(e, t)
}
function Ll(e, t) {
    return Ll = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Ll(e, t)
}
function Ku(e, t, r) {
    return t = Ev(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Ev(e) {
    var t = EM(e, "string");
    return rn(t) == "symbol" ? t : t + ""
}
function EM(e, t) {
    if (rn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (rn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var Uo = function(e) {
    function t(r) {
        var n;
        return PM(this, t),
        n = jM(this, t, [r]),
        n.state = {
            fontSize: "",
            letterSpacing: ""
        },
        n
    }
    return TM(t, e),
    AM(t, [{
        key: "shouldComponentUpdate",
        value: function(n, i) {
            var a = n.viewBox
              , o = ys(n, wM)
              , s = this.props
              , l = s.viewBox
              , u = ys(s, _M);
            return !Dr(a, l) || !Dr(o, u) || !Dr(i, this.state)
        }
    }, {
        key: "componentDidMount",
        value: function() {
            var n = this.layerReference;
            if (n) {
                var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
                i && this.setState({
                    fontSize: window.getComputedStyle(i).fontSize,
                    letterSpacing: window.getComputedStyle(i).letterSpacing
                })
            }
        }
    }, {
        key: "getTickLineCoord",
        value: function(n) {
            var i = this.props, a = i.x, o = i.y, s = i.width, l = i.height, u = i.orientation, f = i.tickSize, c = i.mirror, d = i.tickMargin, p, h, m, g, b, _, w = c ? -1 : 1, S = n.tickSize || f, y = F(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (u) {
            case "top":
                p = h = n.coordinate,
                g = o + +!c * l,
                m = g - w * S,
                _ = m - w * d,
                b = y;
                break;
            case "left":
                m = g = n.coordinate,
                h = a + +!c * s,
                p = h - w * S,
                b = p - w * d,
                _ = y;
                break;
            case "right":
                m = g = n.coordinate,
                h = a + +c * s,
                p = h + w * S,
                b = p + w * d,
                _ = y;
                break;
            default:
                p = h = n.coordinate,
                g = o + +c * l,
                m = g + w * S,
                _ = m + w * d,
                b = y;
                break
            }
            return {
                line: {
                    x1: p,
                    y1: m,
                    x2: h,
                    y2: g
                },
                tick: {
                    x: b,
                    y: _
                }
            }
        }
    }, {
        key: "getTickTextAnchor",
        value: function() {
            var n = this.props, i = n.orientation, a = n.mirror, o;
            switch (i) {
            case "left":
                o = a ? "start" : "end";
                break;
            case "right":
                o = a ? "end" : "start";
                break;
            default:
                o = "middle";
                break
            }
            return o
        }
    }, {
        key: "getTickVerticalAnchor",
        value: function() {
            var n = this.props
              , i = n.orientation
              , a = n.mirror
              , o = "end";
            switch (i) {
            case "left":
            case "right":
                o = "middle";
                break;
            case "top":
                o = a ? "start" : "end";
                break;
            default:
                o = a ? "end" : "start";
                break
            }
            return o
        }
    }, {
        key: "renderAxisLine",
        value: function() {
            var n = this.props
              , i = n.x
              , a = n.y
              , o = n.width
              , s = n.height
              , l = n.orientation
              , u = n.mirror
              , f = n.axisLine
              , c = qe(qe(qe({}, oe(this.props, !1)), oe(f, !1)), {}, {
                fill: "none"
            });
            if (l === "top" || l === "bottom") {
                var d = +(l === "top" && !u || l === "bottom" && u);
                c = qe(qe({}, c), {}, {
                    x1: i,
                    y1: a + d * s,
                    x2: i + o,
                    y2: a + d * s
                })
            } else {
                var p = +(l === "left" && !u || l === "right" && u);
                c = qe(qe({}, c), {}, {
                    x1: i + p * o,
                    y1: a,
                    x2: i + p * o,
                    y2: a + s
                })
            }
            return $.createElement("line", Mr({}, c, {
                className: te("recharts-cartesian-axis-line", st(f, "className"))
            }))
        }
    }, {
        key: "renderTicks",
        value: function(n, i, a) {
            var o = this
              , s = this.props
              , l = s.tickLine
              , u = s.stroke
              , f = s.tick
              , c = s.tickFormatter
              , d = s.unit
              , p = xM(qe(qe({}, this.props), {}, {
                ticks: n
            }), i, a)
              , h = this.getTickTextAnchor()
              , m = this.getTickVerticalAnchor()
              , g = oe(this.props, !1)
              , b = oe(f, !1)
              , _ = qe(qe({}, g), {}, {
                fill: "none"
            }, oe(l, !1))
              , w = p.map(function(S, y) {
                var x = o.getTickLineCoord(S)
                  , O = x.line
                  , P = x.tick
                  , A = qe(qe(qe(qe({
                    textAnchor: h,
                    verticalAnchor: m
                }, g), {}, {
                    stroke: "none",
                    fill: u
                }, b), P), {}, {
                    index: y,
                    payload: S,
                    visibleTicksCount: p.length,
                    tickFormatter: c
                });
                return $.createElement(xe, Mr({
                    className: "recharts-cartesian-axis-tick",
                    key: "tick-".concat(S.value, "-").concat(S.coordinate, "-").concat(S.tickCoord)
                }, ia(o.props, S, y)), l && $.createElement("line", Mr({}, _, O, {
                    className: te("recharts-cartesian-axis-tick-line", st(l, "className"))
                })), f && t.renderTickItem(f, A, "".concat(re(c) ? c(S.value, y) : S.value).concat(d || "")))
            });
            return $.createElement("g", {
                className: "recharts-cartesian-axis-ticks"
            }, w)
        }
    }, {
        key: "render",
        value: function() {
            var n = this
              , i = this.props
              , a = i.axisLine
              , o = i.width
              , s = i.height
              , l = i.ticksGenerator
              , u = i.className
              , f = i.hide;
            if (f)
                return null;
            var c = this.props
              , d = c.ticks
              , p = ys(c, SM)
              , h = d;
            return re(l) && (h = d && d.length > 0 ? l(this.props) : l(p)),
            o <= 0 || s <= 0 || !h || !h.length ? null : $.createElement(xe, {
                className: te("recharts-cartesian-axis", u),
                ref: function(g) {
                    n.layerReference = g
                }
            }, a && this.renderAxisLine(), this.renderTicks(h, this.state.fontSize, this.state.letterSpacing), We.renderCallByParent(this.props))
        }
    }], [{
        key: "renderTickItem",
        value: function(n, i, a) {
            var o;
            return $.isValidElement(n) ? o = $.cloneElement(n, i) : re(n) ? o = n(i) : o = $.createElement(ma, Mr({}, i, {
                className: "recharts-cartesian-axis-tick-value"
            }), a),
            o
        }
    }])
}(C.Component);
Ku(Uo, "displayName", "CartesianAxis");
Ku(Uo, "defaultProps", {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: !0,
    axisLine: !0,
    tick: !0,
    mirror: !1,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd"
});
var kM = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], MM = ["key"], kv;
function nn(e) {
    "@babel/helpers - typeof";
    return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    nn(e)
}
function Mv(e, t) {
    if (e == null)
        return {};
    var r = NM(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function NM(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function pr() {
    return pr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    pr.apply(this, arguments)
}
function bp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Ht(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? bp(Object(r), !0).forEach(function(n) {
            $t(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function IM(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function xp(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Iv(n.key), n)
    }
}
function DM(e, t, r) {
    return t && xp(e.prototype, t),
    r && xp(e, r),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function RM(e, t, r) {
    return t = Xa(t),
    BM(e, Nv() ? Reflect.construct(t, r || [], Xa(e).constructor) : t.apply(e, r))
}
function BM(e, t) {
    if (t && (nn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return LM(e)
}
function LM(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Nv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Nv = function() {
        return !!e
    }
    )()
}
function Xa(e) {
    return Xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Xa(e)
}
function UM(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Ul(e, t)
}
function Ul(e, t) {
    return Ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Ul(e, t)
}
function $t(e, t, r) {
    return t = Iv(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Iv(e) {
    var t = WM(e, "string");
    return nn(t) == "symbol" ? t : t + ""
}
function WM(e, t) {
    if (nn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (nn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var rr = function(e) {
    function t() {
        var r;
        IM(this, t);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
        return r = RM(this, t, [].concat(i)),
        $t(r, "state", {
            isAnimationFinished: !0
        }),
        $t(r, "id", ji("recharts-area-")),
        $t(r, "handleAnimationEnd", function() {
            var o = r.props.onAnimationEnd;
            r.setState({
                isAnimationFinished: !0
            }),
            re(o) && o()
        }),
        $t(r, "handleAnimationStart", function() {
            var o = r.props.onAnimationStart;
            r.setState({
                isAnimationFinished: !1
            }),
            re(o) && o()
        }),
        r
    }
    return UM(t, e),
    DM(t, [{
        key: "renderDots",
        value: function(n, i, a) {
            var o = this.props.isAnimationActive
              , s = this.state.isAnimationFinished;
            if (o && !s)
                return null;
            var l = this.props
              , u = l.dot
              , f = l.points
              , c = l.dataKey
              , d = oe(this.props, !1)
              , p = oe(u, !0)
              , h = f.map(function(g, b) {
                var _ = Ht(Ht(Ht({
                    key: "dot-".concat(b),
                    r: 3
                }, d), p), {}, {
                    index: b,
                    cx: g.x,
                    cy: g.y,
                    dataKey: c,
                    value: g.value,
                    payload: g.payload,
                    points: f
                });
                return t.renderDotItem(u, _)
            })
              , m = {
                clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
            };
            return $.createElement(xe, pr({
                className: "recharts-area-dots"
            }, m), h)
        }
    }, {
        key: "renderHorizontalRect",
        value: function(n) {
            var i = this.props
              , a = i.baseLine
              , o = i.points
              , s = i.strokeWidth
              , l = o[0].x
              , u = o[o.length - 1].x
              , f = n * Math.abs(l - u)
              , c = Xt(o.map(function(d) {
                return d.y || 0
            }));
            return F(a) && typeof a == "number" ? c = Math.max(a, c) : a && Array.isArray(a) && a.length && (c = Math.max(Xt(a.map(function(d) {
                return d.y || 0
            })), c)),
            F(c) ? $.createElement("rect", {
                x: l < u ? l : l - f,
                y: 0,
                width: f,
                height: Math.floor(c + (s ? parseInt("".concat(s), 10) : 1))
            }) : null
        }
    }, {
        key: "renderVerticalRect",
        value: function(n) {
            var i = this.props
              , a = i.baseLine
              , o = i.points
              , s = i.strokeWidth
              , l = o[0].y
              , u = o[o.length - 1].y
              , f = n * Math.abs(l - u)
              , c = Xt(o.map(function(d) {
                return d.x || 0
            }));
            return F(a) && typeof a == "number" ? c = Math.max(a, c) : a && Array.isArray(a) && a.length && (c = Math.max(Xt(a.map(function(d) {
                return d.x || 0
            })), c)),
            F(c) ? $.createElement("rect", {
                x: 0,
                y: l < u ? l : l - f,
                width: c + (s ? parseInt("".concat(s), 10) : 1),
                height: Math.floor(f)
            }) : null
        }
    }, {
        key: "renderClipRect",
        value: function(n) {
            var i = this.props.layout;
            return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n)
        }
    }, {
        key: "renderAreaStatically",
        value: function(n, i, a, o) {
            var s = this.props
              , l = s.layout
              , u = s.type
              , f = s.stroke
              , c = s.connectNulls
              , d = s.isRange;
            s.ref;
            var p = Mv(s, kM);
            return $.createElement(xe, {
                clipPath: a ? "url(#clipPath-".concat(o, ")") : null
            }, $.createElement(In, pr({}, oe(p, !0), {
                points: n,
                connectNulls: c,
                type: u,
                baseLine: i,
                layout: l,
                stroke: "none",
                className: "recharts-area-area"
            })), f !== "none" && $.createElement(In, pr({}, oe(this.props, !1), {
                className: "recharts-area-curve",
                layout: l,
                type: u,
                connectNulls: c,
                fill: "none",
                points: n
            })), f !== "none" && d && $.createElement(In, pr({}, oe(this.props, !1), {
                className: "recharts-area-curve",
                layout: l,
                type: u,
                connectNulls: c,
                fill: "none",
                points: i
            })))
        }
    }, {
        key: "renderAreaWithAnimation",
        value: function(n, i) {
            var a = this
              , o = this.props
              , s = o.points
              , l = o.baseLine
              , u = o.isAnimationActive
              , f = o.animationBegin
              , c = o.animationDuration
              , d = o.animationEasing
              , p = o.animationId
              , h = this.state
              , m = h.prevPoints
              , g = h.prevBaseLine;
            return $.createElement(Ft, {
                begin: f,
                duration: c,
                isActive: u,
                easing: d,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "area-".concat(p),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, function(b) {
                var _ = b.t;
                if (m) {
                    var w = m.length / s.length, S = s.map(function(P, A) {
                        var k = Math.floor(A * w);
                        if (m[k]) {
                            var j = m[k]
                              , T = nt(j.x, P.x)
                              , N = nt(j.y, P.y);
                            return Ht(Ht({}, P), {}, {
                                x: T(_),
                                y: N(_)
                            })
                        }
                        return P
                    }), y;
                    if (F(l) && typeof l == "number") {
                        var x = nt(g, l);
                        y = x(_)
                    } else if (ue(l) || fn(l)) {
                        var O = nt(g, 0);
                        y = O(_)
                    } else
                        y = l.map(function(P, A) {
                            var k = Math.floor(A * w);
                            if (g[k]) {
                                var j = g[k]
                                  , T = nt(j.x, P.x)
                                  , N = nt(j.y, P.y);
                                return Ht(Ht({}, P), {}, {
                                    x: T(_),
                                    y: N(_)
                                })
                            }
                            return P
                        });
                    return a.renderAreaStatically(S, y, n, i)
                }
                return $.createElement(xe, null, $.createElement("defs", null, $.createElement("clipPath", {
                    id: "animationClipPath-".concat(i)
                }, a.renderClipRect(_))), $.createElement(xe, {
                    clipPath: "url(#animationClipPath-".concat(i, ")")
                }, a.renderAreaStatically(s, l, n, i)))
            })
        }
    }, {
        key: "renderArea",
        value: function(n, i) {
            var a = this.props
              , o = a.points
              , s = a.baseLine
              , l = a.isAnimationActive
              , u = this.state
              , f = u.prevPoints
              , c = u.prevBaseLine
              , d = u.totalLength;
            return l && o && o.length && (!f && d > 0 || !Yn(f, o) || !Yn(c, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, s, n, i)
        }
    }, {
        key: "render",
        value: function() {
            var n, i = this.props, a = i.hide, o = i.dot, s = i.points, l = i.className, u = i.top, f = i.left, c = i.xAxis, d = i.yAxis, p = i.width, h = i.height, m = i.isAnimationActive, g = i.id;
            if (a || !s || !s.length)
                return null;
            var b = this.state.isAnimationFinished
              , _ = s.length === 1
              , w = te("recharts-area", l)
              , S = c && c.allowDataOverflow
              , y = d && d.allowDataOverflow
              , x = S || y
              , O = ue(g) ? this.id : g
              , P = (n = oe(o, !1)) !== null && n !== void 0 ? n : {
                r: 3,
                strokeWidth: 2
            }
              , A = P.r
              , k = A === void 0 ? 3 : A
              , j = P.strokeWidth
              , T = j === void 0 ? 2 : j
              , N = Jb(o) ? o : {}
              , E = N.clipDot
              , I = E === void 0 ? !0 : E
              , D = k * 2 + T;
            return $.createElement(xe, {
                className: w
            }, S || y ? $.createElement("defs", null, $.createElement("clipPath", {
                id: "clipPath-".concat(O)
            }, $.createElement("rect", {
                x: S ? f : f - p / 2,
                y: y ? u : u - h / 2,
                width: S ? p : p * 2,
                height: y ? h : h * 2
            })), !I && $.createElement("clipPath", {
                id: "clipPath-dots-".concat(O)
            }, $.createElement("rect", {
                x: f - D / 2,
                y: u - D / 2,
                width: p + D,
                height: h + D
            }))) : null, _ ? null : this.renderArea(x, O), (o || _) && this.renderDots(x, I, O), (!m || b) && Zt.renderCallByParent(this.props, s))
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function(n, i) {
            return n.animationId !== i.prevAnimationId ? {
                prevAnimationId: n.animationId,
                curPoints: n.points,
                curBaseLine: n.baseLine,
                prevPoints: i.curPoints,
                prevBaseLine: i.curBaseLine
            } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? {
                curPoints: n.points,
                curBaseLine: n.baseLine
            } : null
        }
    }])
}(C.PureComponent);
kv = rr;
$t(rr, "displayName", "Area");
$t(rr, "defaultProps", {
    stroke: "#3182bd",
    fill: "#3182bd",
    fillOpacity: .6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: "line",
    connectNulls: !1,
    points: [],
    dot: !1,
    activeDot: !0,
    hide: !1,
    isAnimationActive: !dn.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
});
$t(rr, "getBaseValue", function(e, t, r, n) {
    var i = e.layout
      , a = e.baseValue
      , o = t.props.baseValue
      , s = o ?? a;
    if (F(s) && typeof s == "number")
        return s;
    var l = i === "horizontal" ? n : r
      , u = l.scale.domain();
    if (l.type === "number") {
        var f = Math.max(u[0], u[1])
          , c = Math.min(u[0], u[1]);
        return s === "dataMin" ? c : s === "dataMax" || f < 0 ? f : Math.max(Math.min(u[0], u[1]), 0)
    }
    return s === "dataMin" ? u[0] : s === "dataMax" ? u[1] : u[0]
});
$t(rr, "getComposedData", function(e) {
    var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, l = e.dataKey, u = e.stackedData, f = e.dataStartIndex, c = e.displayedData, d = e.offset, p = t.layout, h = u && u.length, m = kv.getBaseValue(t, r, n, i), g = p === "horizontal", b = !1, _ = c.map(function(S, y) {
        var x;
        h ? x = u[f + y] : (x = et(S, l),
        Array.isArray(x) ? b = !0 : x = [m, x]);
        var O = x[1] == null || h && et(S, l) == null;
        return g ? {
            x: id({
                axis: n,
                ticks: a,
                bandSize: s,
                entry: S,
                index: y
            }),
            y: O ? null : i.scale(x[1]),
            value: x,
            payload: S
        } : {
            x: O ? null : n.scale(x[1]),
            y: id({
                axis: i,
                ticks: o,
                bandSize: s,
                entry: S,
                index: y
            }),
            value: x,
            payload: S
        }
    }), w;
    return h || b ? w = _.map(function(S) {
        var y = Array.isArray(S.value) ? S.value[0] : null;
        return g ? {
            x: S.x,
            y: y != null && S.y != null ? i.scale(y) : null
        } : {
            x: y != null ? n.scale(y) : null,
            y: S.y
        }
    }) : w = g ? i.scale(m) : n.scale(m),
    Ht({
        points: _,
        baseLine: w,
        layout: p,
        isRange: b
    }, d)
});
$t(rr, "renderDotItem", function(e, t) {
    var r;
    if ($.isValidElement(e))
        r = $.cloneElement(e, t);
    else if (re(e))
        r = e(t);
    else {
        var n = te("recharts-area-dot", typeof e != "boolean" ? e.className : "")
          , i = t.key
          , a = Mv(t, MM);
        r = $.createElement(Eo, pr({}, a, {
            key: i,
            className: n
        }))
    }
    return r
});
function an(e) {
    "@babel/helpers - typeof";
    return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    an(e)
}
function zM(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function FM(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Bv(n.key), n)
    }
}
function qM(e, t, r) {
    return t && FM(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function HM(e, t, r) {
    return t = Ga(t),
    VM(e, Dv() ? Reflect.construct(t, r || [], Ga(e).constructor) : t.apply(e, r))
}
function VM(e, t) {
    if (t && (an(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return KM(e)
}
function KM(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Dv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Dv = function() {
        return !!e
    }
    )()
}
function Ga(e) {
    return Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Ga(e)
}
function XM(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Wl(e, t)
}
function Wl(e, t) {
    return Wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Wl(e, t)
}
function Rv(e, t, r) {
    return t = Bv(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Bv(e) {
    var t = GM(e, "string");
    return an(t) == "symbol" ? t : t + ""
}
function GM(e, t) {
    if (an(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (an(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
function zl() {
    return zl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    zl.apply(this, arguments)
}
function YM(e) {
    var t = e.xAxisId
      , r = wv()
      , n = _v()
      , i = bv(t);
    return i == null ? null : $.createElement(Uo, zl({}, i, {
        className: te("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
        viewBox: {
            x: 0,
            y: 0,
            width: r,
            height: n
        },
        ticksGenerator: function(o) {
            return dr(o, !0)
        }
    }))
}
var Wo = function(e) {
    function t() {
        return zM(this, t),
        HM(this, t, arguments)
    }
    return XM(t, e),
    qM(t, [{
        key: "render",
        value: function() {
            return $.createElement(YM, this.props)
        }
    }])
}($.Component);
Rv(Wo, "displayName", "XAxis");
Rv(Wo, "defaultProps", {
    allowDecimals: !0,
    hide: !1,
    orientation: "bottom",
    width: 0,
    height: 30,
    mirror: !1,
    xAxisId: 0,
    tickCount: 5,
    type: "category",
    padding: {
        left: 0,
        right: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1,
    allowDuplicatedCategory: !0
});
function on(e) {
    "@babel/helpers - typeof";
    return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    on(e)
}
function ZM(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function JM(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Wv(n.key), n)
    }
}
function QM(e, t, r) {
    return t && JM(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function eN(e, t, r) {
    return t = Ya(t),
    tN(e, Lv() ? Reflect.construct(t, r || [], Ya(e).constructor) : t.apply(e, r))
}
function tN(e, t) {
    if (t && (on(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return rN(e)
}
function rN(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function Lv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Lv = function() {
        return !!e
    }
    )()
}
function Ya(e) {
    return Ya = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Ya(e)
}
function nN(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Fl(e, t)
}
function Fl(e, t) {
    return Fl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Fl(e, t)
}
function Uv(e, t, r) {
    return t = Wv(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Wv(e) {
    var t = iN(e, "string");
    return on(t) == "symbol" ? t : t + ""
}
function iN(e, t) {
    if (on(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (on(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
function ql() {
    return ql = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ql.apply(this, arguments)
}
var aN = function(t) {
    var r = t.yAxisId
      , n = wv()
      , i = _v()
      , a = xv(r);
    return a == null ? null : $.createElement(Uo, ql({}, a, {
        className: te("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
        viewBox: {
            x: 0,
            y: 0,
            width: n,
            height: i
        },
        ticksGenerator: function(s) {
            return dr(s, !0)
        }
    }))
}
  , zo = function(e) {
    function t() {
        return ZM(this, t),
        eN(this, t, arguments)
    }
    return nN(t, e),
    QM(t, [{
        key: "render",
        value: function() {
            return $.createElement(aN, this.props)
        }
    }])
}($.Component);
Uv(zo, "displayName", "YAxis");
Uv(zo, "defaultProps", {
    allowDuplicatedCategory: !0,
    allowDecimals: !0,
    hide: !1,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: !1,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    padding: {
        top: 0,
        bottom: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1
});
function wp(e) {
    return uN(e) || lN(e) || sN(e) || oN()
}
function oN() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function sN(e, t) {
    if (e) {
        if (typeof e == "string")
            return Hl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Hl(e, t)
    }
}
function lN(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function uN(e) {
    if (Array.isArray(e))
        return Hl(e)
}
function Hl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
var Vl = function(t, r, n, i, a) {
    var o = bt(t, Io)
      , s = bt(t, Ro)
      , l = [].concat(wp(o), wp(s))
      , u = bt(t, Lo)
      , f = "".concat(i, "Id")
      , c = i[0]
      , d = r;
    if (l.length && (d = l.reduce(function(m, g) {
        if (g.props[f] === n && Tt(g.props, "extendDomain") && F(g.props[c])) {
            var b = g.props[c];
            return [Math.min(m[0], b), Math.max(m[1], b)]
        }
        return m
    }, d)),
    u.length) {
        var p = "".concat(c, "1")
          , h = "".concat(c, "2");
        d = u.reduce(function(m, g) {
            if (g.props[f] === n && Tt(g.props, "extendDomain") && F(g.props[p]) && F(g.props[h])) {
                var b = g.props[p]
                  , _ = g.props[h];
                return [Math.min(m[0], b, _), Math.max(m[1], b, _)]
            }
            return m
        }, d)
    }
    return a && a.length && (d = a.reduce(function(m, g) {
        return F(g) ? [Math.min(m[0], g), Math.max(m[1], g)] : m
    }, d)),
    d
}
  , gs = new ug
  , bs = "recharts.syncMouseEvents";
function gi(e) {
    "@babel/helpers - typeof";
    return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    gi(e)
}
function cN(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function fN(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, zv(n.key), n)
    }
}
function dN(e, t, r) {
    return t && fN(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function xs(e, t, r) {
    return t = zv(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function zv(e) {
    var t = pN(e, "string");
    return gi(t) == "symbol" ? t : t + ""
}
function pN(e, t) {
    if (gi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (gi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var hN = function() {
    function e() {
        cN(this, e),
        xs(this, "activeIndex", 0),
        xs(this, "coordinateList", []),
        xs(this, "layout", "horizontal")
    }
    return dN(e, [{
        key: "setDetails",
        value: function(r) {
            var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, s = o === void 0 ? null : o, l = r.layout, u = l === void 0 ? null : l, f = r.offset, c = f === void 0 ? null : f, d = r.mouseHandlerCallback, p = d === void 0 ? null : d;
            this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [],
            this.container = s ?? this.container,
            this.layout = u ?? this.layout,
            this.offset = c ?? this.offset,
            this.mouseHandlerCallback = p ?? this.mouseHandlerCallback,
            this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
    }, {
        key: "focus",
        value: function() {
            this.spoofMouse()
        }
    }, {
        key: "keyboardEvent",
        value: function(r) {
            if (this.coordinateList.length !== 0)
                switch (r.key) {
                case "ArrowRight":
                    {
                        if (this.layout !== "horizontal")
                            return;
                        this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1),
                        this.spoofMouse();
                        break
                    }
                case "ArrowLeft":
                    {
                        if (this.layout !== "horizontal")
                            return;
                        this.activeIndex = Math.max(this.activeIndex - 1, 0),
                        this.spoofMouse();
                        break
                    }
                }
        }
    }, {
        key: "setIndex",
        value: function(r) {
            this.activeIndex = r
        }
    }, {
        key: "spoofMouse",
        value: function() {
            var r, n;
            if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
                var i = this.container.getBoundingClientRect()
                  , a = i.x
                  , o = i.y
                  , s = i.height
                  , l = this.coordinateList[this.activeIndex].coordinate
                  , u = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0
                  , f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0
                  , c = a + l + u
                  , d = o + this.offset.top + s / 2 + f;
                this.mouseHandlerCallback({
                    pageX: c,
                    pageY: d
                })
            }
        }
    }])
}();
function mN(e, t, r) {
    if (r === "number" && t === !0 && Array.isArray(e)) {
        var n = e == null ? void 0 : e[0]
          , i = e == null ? void 0 : e[1];
        if (n && i && F(n) && F(i))
            return !0
    }
    return !1
}
function vN(e, t, r, n) {
    var i = n / 2;
    return {
        stroke: "none",
        fill: "#ccc",
        x: e === "horizontal" ? t.x - i : r.left + .5,
        y: e === "horizontal" ? r.top + .5 : t.y - i,
        width: e === "horizontal" ? n : r.width - 1,
        height: e === "horizontal" ? r.height - 1 : n
    }
}
function Fv(e) {
    var t = e.cx
      , r = e.cy
      , n = e.radius
      , i = e.startAngle
      , a = e.endAngle
      , o = Be(t, r, n, i)
      , s = Be(t, r, n, a);
    return {
        points: [o, s],
        cx: t,
        cy: r,
        radius: n,
        startAngle: i,
        endAngle: a
    }
}
function yN(e, t, r) {
    var n, i, a, o;
    if (e === "horizontal")
        n = t.x,
        a = n,
        i = r.top,
        o = r.top + r.height;
    else if (e === "vertical")
        i = t.y,
        o = i,
        n = r.left,
        a = r.left + r.width;
    else if (t.cx != null && t.cy != null)
        if (e === "centric") {
            var s = t.cx
              , l = t.cy
              , u = t.innerRadius
              , f = t.outerRadius
              , c = t.angle
              , d = Be(s, l, u, c)
              , p = Be(s, l, f, c);
            n = d.x,
            i = d.y,
            a = p.x,
            o = p.y
        } else
            return Fv(t);
    return [{
        x: n,
        y: i
    }, {
        x: a,
        y: o
    }]
}
function bi(e) {
    "@babel/helpers - typeof";
    return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    bi(e)
}
function _p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Xi(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? _p(Object(r), !0).forEach(function(n) {
            gN(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _p(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function gN(e, t, r) {
    return t = bN(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function bN(e) {
    var t = xN(e, "string");
    return bi(t) == "symbol" ? t : t + ""
}
function xN(e, t) {
    if (bi(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (bi(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function wN(e) {
    var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, s = e.activePayload, l = e.offset, u = e.activeTooltipIndex, f = e.tooltipAxisBandSize, c = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
    if (!n || !p || !a || !o || d !== "ScatterChart" && i !== "axis")
        return null;
    var h, m = In;
    if (d === "ScatterChart")
        h = o,
        m = rT;
    else if (d === "BarChart")
        h = vN(c, o, l, f),
        m = qu;
    else if (c === "radial") {
        var g = Fv(o)
          , b = g.cx
          , _ = g.cy
          , w = g.radius
          , S = g.startAngle
          , y = g.endAngle;
        h = {
            cx: b,
            cy: _,
            startAngle: S,
            endAngle: y,
            innerRadius: w,
            outerRadius: w
        },
        m = Gm
    } else
        h = {
            points: yN(c, o, l)
        },
        m = In;
    var x = Xi(Xi(Xi(Xi({
        stroke: "#ccc",
        pointerEvents: "none"
    }, l), h), oe(p, !1)), {}, {
        payload: s,
        payloadIndex: u,
        className: te("recharts-tooltip-cursor", p.className)
    });
    return C.isValidElement(p) ? C.cloneElement(p, x) : C.createElement(m, x)
}
var _N = ["item"]
  , SN = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function sn(e) {
    "@babel/helpers - typeof";
    return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    sn(e)
}
function Nr() {
    return Nr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Nr.apply(this, arguments)
}
function Sp(e, t) {
    return AN(e) || PN(e, t) || Hv(e, t) || ON()
}
function ON() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function PN(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, s = [], l = !0, u = !1;
        try {
            if (a = (r = r.call(e)).next,
            t !== 0)
                for (; !(l = (n = a.call(r)).done) && (s.push(n.value),
                s.length !== t); l = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!l && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return s
    }
}
function AN(e) {
    if (Array.isArray(e))
        return e
}
function Op(e, t) {
    if (e == null)
        return {};
    var r = jN(e, t), n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++)
            n = a[i],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function jN(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0)
                continue;
            r[n] = e[n]
        }
    return r
}
function $N(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function CN(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, Vv(n.key), n)
    }
}
function TN(e, t, r) {
    return t && CN(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function EN(e, t, r) {
    return t = Za(t),
    kN(e, qv() ? Reflect.construct(t, r || [], Za(e).constructor) : t.apply(e, r))
}
function kN(e, t) {
    if (t && (sn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return MN(e)
}
function MN(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function qv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (qv = function() {
        return !!e
    }
    )()
}
function Za(e) {
    return Za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Za(e)
}
function NN(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Kl(e, t)
}
function Kl(e, t) {
    return Kl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    Kl(e, t)
}
function ln(e) {
    return RN(e) || DN(e) || Hv(e) || IN()
}
function IN() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Hv(e, t) {
    if (e) {
        if (typeof e == "string")
            return Xl(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Xl(e, t)
    }
}
function DN(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function RN(e) {
    if (Array.isArray(e))
        return Xl(e)
}
function Xl(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function Pp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Pp(Object(r), !0).forEach(function(n) {
            J(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function J(e, t, r) {
    return t = Vv(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Vv(e) {
    var t = BN(e, "string");
    return sn(t) == "symbol" ? t : t + ""
}
function BN(e, t) {
    if (sn(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (sn(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var LN = {
    xAxis: ["bottom", "top"],
    yAxis: ["left", "right"]
}
  , UN = {
    width: "100%",
    height: "100%"
}
  , Kv = {
    x: 0,
    y: 0
};
function Gi(e) {
    return e
}
var WN = function(t, r) {
    return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius
}
  , zN = function(t, r, n, i) {
    var a = r.find(function(f) {
        return f && f.index === n
    });
    if (a) {
        if (t === "horizontal")
            return {
                x: a.coordinate,
                y: i.y
            };
        if (t === "vertical")
            return {
                x: i.x,
                y: a.coordinate
            };
        if (t === "centric") {
            var o = a.coordinate
              , s = i.radius;
            return M(M(M({}, i), Be(i.cx, i.cy, s, o)), {}, {
                angle: o,
                radius: s
            })
        }
        var l = a.coordinate
          , u = i.angle;
        return M(M(M({}, i), Be(i.cx, i.cy, l, u)), {}, {
            angle: u,
            radius: l
        })
    }
    return Kv
}
  , Fo = function(t, r) {
    var n = r.graphicalItems
      , i = r.dataStartIndex
      , a = r.dataEndIndex
      , o = (n ?? []).reduce(function(s, l) {
        var u = l.props.data;
        return u && u.length ? [].concat(ln(s), ln(u)) : s
    }, []);
    return o.length > 0 ? o : t && t.length && F(i) && F(a) ? t.slice(i, a + 1) : []
};
function Xv(e) {
    return e === "number" ? [0, "auto"] : void 0
}
var Gl = function(t, r, n, i) {
    var a = t.graphicalItems
      , o = t.tooltipAxis
      , s = Fo(r, t);
    return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(l, u) {
        var f, c = (f = u.props.data) !== null && f !== void 0 ? f : r;
        c && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (c = c.slice(t.dataStartIndex, t.dataEndIndex + 1));
        var d;
        if (o.dataKey && !o.allowDuplicatedCategory) {
            var p = c === void 0 ? s : c;
            d = ra(p, o.dataKey, i)
        } else
            d = c && c[n] || s[n];
        return d ? [].concat(ln(l), [Vm(u, d)]) : l
    }, [])
}
  , Ap = function(t, r, n, i) {
    var a = i || {
        x: t.chartX,
        y: t.chartY
    }
      , o = WN(a, n)
      , s = t.orderedTooltipTicks
      , l = t.tooltipAxis
      , u = t.tooltipTicks
      , f = Fj(o, s, u, l);
    if (f >= 0 && u) {
        var c = u[f] && u[f].value
          , d = Gl(t, r, f, c)
          , p = zN(n, s, f, a);
        return {
            activeTooltipIndex: f,
            activeLabel: c,
            activePayload: d,
            activeCoordinate: p
        }
    }
    return null
}
  , FN = function(t, r) {
    var n = r.axes
      , i = r.graphicalItems
      , a = r.axisType
      , o = r.axisIdKey
      , s = r.stackGroups
      , l = r.dataStartIndex
      , u = r.dataEndIndex
      , f = t.layout
      , c = t.children
      , d = t.stackOffset
      , p = qm(f, a);
    return n.reduce(function(h, m) {
        var g, b = m.type.defaultProps !== void 0 ? M(M({}, m.type.defaultProps), m.props) : m.props, _ = b.type, w = b.dataKey, S = b.allowDataOverflow, y = b.allowDuplicatedCategory, x = b.scale, O = b.ticks, P = b.includeHidden, A = b[o];
        if (h[A])
            return h;
        var k = Fo(t.data, {
            graphicalItems: i.filter(function(z) {
                var Y, se = o in z.props ? z.props[o] : (Y = z.type.defaultProps) === null || Y === void 0 ? void 0 : Y[o];
                return se === A
            }),
            dataStartIndex: l,
            dataEndIndex: u
        }), j = k.length, T, N, E;
        mN(b.domain, S, _) && (T = hl(b.domain, null, S),
        p && (_ === "number" || x !== "auto") && (E = Nn(k, w, "category")));
        var I = Xv(_);
        if (!T || T.length === 0) {
            var D, B = (D = b.domain) !== null && D !== void 0 ? D : I;
            if (w) {
                if (T = Nn(k, w, _),
                _ === "category" && p) {
                    var R = Fb(T);
                    y && R ? (N = T,
                    T = Ba(0, j)) : y || (T = ld(B, T, m).reduce(function(z, Y) {
                        return z.indexOf(Y) >= 0 ? z : [].concat(ln(z), [Y])
                    }, []))
                } else if (_ === "category")
                    y ? T = T.filter(function(z) {
                        return z !== "" && !ue(z)
                    }) : T = ld(B, T, m).reduce(function(z, Y) {
                        return z.indexOf(Y) >= 0 || Y === "" || ue(Y) ? z : [].concat(ln(z), [Y])
                    }, []);
                else if (_ === "number") {
                    var L = Xj(k, i.filter(function(z) {
                        var Y, se, we = o in z.props ? z.props[o] : (Y = z.type.defaultProps) === null || Y === void 0 ? void 0 : Y[o], Ae = "hide"in z.props ? z.props.hide : (se = z.type.defaultProps) === null || se === void 0 ? void 0 : se.hide;
                        return we === A && (P || !Ae)
                    }), w, a, f);
                    L && (T = L)
                }
                p && (_ === "number" || x !== "auto") && (E = Nn(k, w, "category"))
            } else
                p ? T = Ba(0, j) : s && s[A] && s[A].hasStack && _ === "number" ? T = d === "expand" ? [0, 1] : Hm(s[A].stackGroups, l, u) : T = Fm(k, i.filter(function(z) {
                    var Y = o in z.props ? z.props[o] : z.type.defaultProps[o]
                      , se = "hide"in z.props ? z.props.hide : z.type.defaultProps.hide;
                    return Y === A && (P || !se)
                }), _, f, !0);
            if (_ === "number")
                T = Vl(c, T, A, a, O),
                B && (T = hl(B, T, S));
            else if (_ === "category" && B) {
                var K = B
                  , G = T.every(function(z) {
                    return K.indexOf(z) >= 0
                });
                G && (T = K)
            }
        }
        return M(M({}, h), {}, J({}, A, M(M({}, b), {}, {
            axisType: a,
            domain: T,
            categoricalDomain: E,
            duplicateDomain: N,
            originalDomain: (g = b.domain) !== null && g !== void 0 ? g : I,
            isCategorical: p,
            layout: f
        })))
    }, {})
}
  , qN = function(t, r) {
    var n = r.graphicalItems
      , i = r.Axis
      , a = r.axisType
      , o = r.axisIdKey
      , s = r.stackGroups
      , l = r.dataStartIndex
      , u = r.dataEndIndex
      , f = t.layout
      , c = t.children
      , d = Fo(t.data, {
        graphicalItems: n,
        dataStartIndex: l,
        dataEndIndex: u
    })
      , p = d.length
      , h = qm(f, a)
      , m = -1;
    return n.reduce(function(g, b) {
        var _ = b.type.defaultProps !== void 0 ? M(M({}, b.type.defaultProps), b.props) : b.props
          , w = _[o]
          , S = Xv("number");
        if (!g[w]) {
            m++;
            var y;
            return h ? y = Ba(0, p) : s && s[w] && s[w].hasStack ? (y = Hm(s[w].stackGroups, l, u),
            y = Vl(c, y, w, a)) : (y = hl(S, Fm(d, n.filter(function(x) {
                var O, P, A = o in x.props ? x.props[o] : (O = x.type.defaultProps) === null || O === void 0 ? void 0 : O[o], k = "hide"in x.props ? x.props.hide : (P = x.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
                return A === w && !k
            }), "number", f), i.defaultProps.allowDataOverflow),
            y = Vl(c, y, w, a)),
            M(M({}, g), {}, J({}, w, M(M({
                axisType: a
            }, i.defaultProps), {}, {
                hide: !0,
                orientation: st(LN, "".concat(a, ".").concat(m % 2), null),
                domain: y,
                originalDomain: S,
                isCategorical: h,
                layout: f
            })))
        }
        return g
    }, {})
}
  , HN = function(t, r) {
    var n = r.axisType
      , i = n === void 0 ? "xAxis" : n
      , a = r.AxisComp
      , o = r.graphicalItems
      , s = r.stackGroups
      , l = r.dataStartIndex
      , u = r.dataEndIndex
      , f = t.children
      , c = "".concat(i, "Id")
      , d = bt(f, a)
      , p = {};
    return d && d.length ? p = FN(t, {
        axes: d,
        graphicalItems: o,
        axisType: i,
        axisIdKey: c,
        stackGroups: s,
        dataStartIndex: l,
        dataEndIndex: u
    }) : o && o.length && (p = qN(t, {
        Axis: a,
        graphicalItems: o,
        axisType: i,
        axisIdKey: c,
        stackGroups: s,
        dataStartIndex: l,
        dataEndIndex: u
    })),
    p
}
  , VN = function(t) {
    var r = Er(t)
      , n = dr(r, !1, !0);
    return {
        tooltipTicks: n,
        orderedTooltipTicks: yu(n, function(i) {
            return i.coordinate
        }),
        tooltipAxis: r,
        tooltipAxisBandSize: Ca(r, n)
    }
}
  , jp = function(t) {
    var r = t.children
      , n = t.defaultShowTooltip
      , i = Je(r, Zr)
      , a = 0
      , o = 0;
    return t.data && t.data.length !== 0 && (o = t.data.length - 1),
    i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex),
    i.props.endIndex >= 0 && (o = i.props.endIndex)),
    {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n
    }
}
  , KN = function(t) {
    return !t || !t.length ? !1 : t.some(function(r) {
        var n = Bt(r && r.type);
        return n && n.indexOf("Bar") >= 0
    })
}
  , $p = function(t) {
    return t === "horizontal" ? {
        numericAxisName: "yAxis",
        cateAxisName: "xAxis"
    } : t === "vertical" ? {
        numericAxisName: "xAxis",
        cateAxisName: "yAxis"
    } : t === "centric" ? {
        numericAxisName: "radiusAxis",
        cateAxisName: "angleAxis"
    } : {
        numericAxisName: "angleAxis",
        cateAxisName: "radiusAxis"
    }
}
  , XN = function(t, r) {
    var n = t.props
      , i = t.graphicalItems
      , a = t.xAxisMap
      , o = a === void 0 ? {} : a
      , s = t.yAxisMap
      , l = s === void 0 ? {} : s
      , u = n.width
      , f = n.height
      , c = n.children
      , d = n.margin || {}
      , p = Je(c, Zr)
      , h = Je(c, Rr)
      , m = Object.keys(l).reduce(function(y, x) {
        var O = l[x]
          , P = O.orientation;
        return !O.mirror && !O.hide ? M(M({}, y), {}, J({}, P, y[P] + O.width)) : y
    }, {
        left: d.left || 0,
        right: d.right || 0
    })
      , g = Object.keys(o).reduce(function(y, x) {
        var O = o[x]
          , P = O.orientation;
        return !O.mirror && !O.hide ? M(M({}, y), {}, J({}, P, st(y, "".concat(P)) + O.height)) : y
    }, {
        top: d.top || 0,
        bottom: d.bottom || 0
    })
      , b = M(M({}, g), m)
      , _ = b.bottom;
    p && (b.bottom += p.props.height || Zr.defaultProps.height),
    h && r && (b = Vj(b, i, n, r));
    var w = u - b.left - b.right
      , S = f - b.top - b.bottom;
    return M(M({
        brushBottom: _
    }, b), {}, {
        width: Math.max(w, 0),
        height: Math.max(S, 0)
    })
}
  , GN = function(t, r) {
    if (r === "xAxis")
        return t[r].width;
    if (r === "yAxis")
        return t[r].height
}
  , YN = function(t) {
    var r = t.chartName
      , n = t.GraphicalChild
      , i = t.defaultTooltipEventType
      , a = i === void 0 ? "axis" : i
      , o = t.validateTooltipEventTypes
      , s = o === void 0 ? ["axis"] : o
      , l = t.axisComponents
      , u = t.legendContent
      , f = t.formatAxisMap
      , c = t.defaultProps
      , d = function(b, _) {
        var w = _.graphicalItems
          , S = _.stackGroups
          , y = _.offset
          , x = _.updateId
          , O = _.dataStartIndex
          , P = _.dataEndIndex
          , A = b.barSize
          , k = b.layout
          , j = b.barGap
          , T = b.barCategoryGap
          , N = b.maxBarSize
          , E = $p(k)
          , I = E.numericAxisName
          , D = E.cateAxisName
          , B = KN(w)
          , R = [];
        return w.forEach(function(L, K) {
            var G = Fo(b.data, {
                graphicalItems: [L],
                dataStartIndex: O,
                dataEndIndex: P
            })
              , z = L.type.defaultProps !== void 0 ? M(M({}, L.type.defaultProps), L.props) : L.props
              , Y = z.dataKey
              , se = z.maxBarSize
              , we = z["".concat(I, "Id")]
              , Ae = z["".concat(D, "Id")]
              , _t = {}
              , Ce = l.reduce(function(kt, Ot) {
                var jr = _["".concat(Ot.axisType, "Map")]
                  , Mi = z["".concat(Ot.axisType, "Id")];
                jr && jr[Mi] || Ot.axisType === "zAxis" || wr();
                var le = jr[Mi];
                return M(M({}, kt), {}, J(J({}, Ot.axisType, le), "".concat(Ot.axisType, "Ticks"), dr(le)))
            }, _t)
              , W = Ce[D]
              , Q = Ce["".concat(D, "Ticks")]
              , ee = S && S[we] && S[we].hasStack && o$(L, S[we].stackGroups)
              , U = Bt(L.type).indexOf("Bar") >= 0
              , me = Ca(W, Q)
              , ne = []
              , Se = B && qj({
                barSize: A,
                stackGroups: S,
                totalSize: GN(Ce, D)
            });
            if (U) {
                var Oe, Le, St = ue(se) ? N : se, Ye = (Oe = (Le = Ca(W, Q, !0)) !== null && Le !== void 0 ? Le : St) !== null && Oe !== void 0 ? Oe : 0;
                ne = Hj({
                    barGap: j,
                    barCategoryGap: T,
                    bandSize: Ye !== me ? Ye : me,
                    sizeList: Se[Ae],
                    maxBarSize: St
                }),
                Ye !== me && (ne = ne.map(function(kt) {
                    return M(M({}, kt), {}, {
                        position: M(M({}, kt.position), {}, {
                            offset: kt.position.offset - Ye / 2
                        })
                    })
                }))
            }
            var Ar = L && L.type && L.type.getComposedData;
            Ar && R.push({
                props: M(M({}, Ar(M(M({}, Ce), {}, {
                    displayedData: G,
                    props: b,
                    dataKey: Y,
                    item: L,
                    bandSize: me,
                    barPosition: ne,
                    offset: y,
                    stackedData: ee,
                    layout: k,
                    dataStartIndex: O,
                    dataEndIndex: P
                }))), {}, J(J(J({
                    key: L.key || "item-".concat(K)
                }, I, Ce[I]), D, Ce[D]), "animationId", x)),
                childIndex: t0(L, b.children),
                item: L
            })
        }),
        R
    }
      , p = function(b, _) {
        var w = b.props
          , S = b.dataStartIndex
          , y = b.dataEndIndex
          , x = b.updateId;
        if (!xc({
            props: w
        }))
            return null;
        var O = w.children
          , P = w.layout
          , A = w.stackOffset
          , k = w.data
          , j = w.reverseStackOrder
          , T = $p(P)
          , N = T.numericAxisName
          , E = T.cateAxisName
          , I = bt(O, n)
          , D = n$(k, I, "".concat(N, "Id"), "".concat(E, "Id"), A, j)
          , B = l.reduce(function(z, Y) {
            var se = "".concat(Y.axisType, "Map");
            return M(M({}, z), {}, J({}, se, HN(w, M(M({}, Y), {}, {
                graphicalItems: I,
                stackGroups: Y.axisType === N && D,
                dataStartIndex: S,
                dataEndIndex: y
            }))))
        }, {})
          , R = XN(M(M({}, B), {}, {
            props: w,
            graphicalItems: I
        }), _ == null ? void 0 : _.legendBBox);
        Object.keys(B).forEach(function(z) {
            B[z] = f(w, B[z], R, z.replace("Map", ""), r)
        });
        var L = B["".concat(E, "Map")]
          , K = VN(L)
          , G = d(w, M(M({}, B), {}, {
            dataStartIndex: S,
            dataEndIndex: y,
            updateId: x,
            graphicalItems: I,
            stackGroups: D,
            offset: R
        }));
        return M(M({
            formattedGraphicalItems: G,
            graphicalItems: I,
            offset: R,
            stackGroups: D
        }, K), B)
    }
      , h = function(g) {
        function b(_) {
            var w, S, y;
            return $N(this, b),
            y = EN(this, b, [_]),
            J(y, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            J(y, "accessibilityManager", new hN),
            J(y, "handleLegendBBoxUpdate", function(x) {
                if (x) {
                    var O = y.state
                      , P = O.dataStartIndex
                      , A = O.dataEndIndex
                      , k = O.updateId;
                    y.setState(M({
                        legendBBox: x
                    }, p({
                        props: y.props,
                        dataStartIndex: P,
                        dataEndIndex: A,
                        updateId: k
                    }, M(M({}, y.state), {}, {
                        legendBBox: x
                    }))))
                }
            }),
            J(y, "handleReceiveSyncEvent", function(x, O, P) {
                if (y.props.syncId === x) {
                    if (P === y.eventEmitterSymbol && typeof y.props.syncMethod != "function")
                        return;
                    y.applySyncEvent(O)
                }
            }),
            J(y, "handleBrushChange", function(x) {
                var O = x.startIndex
                  , P = x.endIndex;
                if (O !== y.state.dataStartIndex || P !== y.state.dataEndIndex) {
                    var A = y.state.updateId;
                    y.setState(function() {
                        return M({
                            dataStartIndex: O,
                            dataEndIndex: P
                        }, p({
                            props: y.props,
                            dataStartIndex: O,
                            dataEndIndex: P,
                            updateId: A
                        }, y.state))
                    }),
                    y.triggerSyncEvent({
                        dataStartIndex: O,
                        dataEndIndex: P
                    })
                }
            }),
            J(y, "handleMouseEnter", function(x) {
                var O = y.getMouseInfo(x);
                if (O) {
                    var P = M(M({}, O), {}, {
                        isTooltipActive: !0
                    });
                    y.setState(P),
                    y.triggerSyncEvent(P);
                    var A = y.props.onMouseEnter;
                    re(A) && A(P, x)
                }
            }),
            J(y, "triggeredAfterMouseMove", function(x) {
                var O = y.getMouseInfo(x)
                  , P = O ? M(M({}, O), {}, {
                    isTooltipActive: !0
                }) : {
                    isTooltipActive: !1
                };
                y.setState(P),
                y.triggerSyncEvent(P);
                var A = y.props.onMouseMove;
                re(A) && A(P, x)
            }),
            J(y, "handleItemMouseEnter", function(x) {
                y.setState(function() {
                    return {
                        isTooltipActive: !0,
                        activeItem: x,
                        activePayload: x.tooltipPayload,
                        activeCoordinate: x.tooltipPosition || {
                            x: x.cx,
                            y: x.cy
                        }
                    }
                })
            }),
            J(y, "handleItemMouseLeave", function() {
                y.setState(function() {
                    return {
                        isTooltipActive: !1
                    }
                })
            }),
            J(y, "handleMouseMove", function(x) {
                x.persist(),
                y.throttleTriggeredAfterMouseMove(x)
            }),
            J(y, "handleMouseLeave", function(x) {
                y.throttleTriggeredAfterMouseMove.cancel();
                var O = {
                    isTooltipActive: !1
                };
                y.setState(O),
                y.triggerSyncEvent(O);
                var P = y.props.onMouseLeave;
                re(P) && P(O, x)
            }),
            J(y, "handleOuterEvent", function(x) {
                var O = e0(x)
                  , P = st(y.props, "".concat(O));
                if (O && re(P)) {
                    var A, k;
                    /.*touch.*/i.test(O) ? k = y.getMouseInfo(x.changedTouches[0]) : k = y.getMouseInfo(x),
                    P((A = k) !== null && A !== void 0 ? A : {}, x)
                }
            }),
            J(y, "handleClick", function(x) {
                var O = y.getMouseInfo(x);
                if (O) {
                    var P = M(M({}, O), {}, {
                        isTooltipActive: !0
                    });
                    y.setState(P),
                    y.triggerSyncEvent(P);
                    var A = y.props.onClick;
                    re(A) && A(P, x)
                }
            }),
            J(y, "handleMouseDown", function(x) {
                var O = y.props.onMouseDown;
                if (re(O)) {
                    var P = y.getMouseInfo(x);
                    O(P, x)
                }
            }),
            J(y, "handleMouseUp", function(x) {
                var O = y.props.onMouseUp;
                if (re(O)) {
                    var P = y.getMouseInfo(x);
                    O(P, x)
                }
            }),
            J(y, "handleTouchMove", function(x) {
                x.changedTouches != null && x.changedTouches.length > 0 && y.throttleTriggeredAfterMouseMove(x.changedTouches[0])
            }),
            J(y, "handleTouchStart", function(x) {
                x.changedTouches != null && x.changedTouches.length > 0 && y.handleMouseDown(x.changedTouches[0])
            }),
            J(y, "handleTouchEnd", function(x) {
                x.changedTouches != null && x.changedTouches.length > 0 && y.handleMouseUp(x.changedTouches[0])
            }),
            J(y, "handleDoubleClick", function(x) {
                var O = y.props.onDoubleClick;
                if (re(O)) {
                    var P = y.getMouseInfo(x);
                    O(P, x)
                }
            }),
            J(y, "handleContextMenu", function(x) {
                var O = y.props.onContextMenu;
                if (re(O)) {
                    var P = y.getMouseInfo(x);
                    O(P, x)
                }
            }),
            J(y, "triggerSyncEvent", function(x) {
                y.props.syncId !== void 0 && gs.emit(bs, y.props.syncId, x, y.eventEmitterSymbol)
            }),
            J(y, "applySyncEvent", function(x) {
                var O = y.props
                  , P = O.layout
                  , A = O.syncMethod
                  , k = y.state.updateId
                  , j = x.dataStartIndex
                  , T = x.dataEndIndex;
                if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
                    y.setState(M({
                        dataStartIndex: j,
                        dataEndIndex: T
                    }, p({
                        props: y.props,
                        dataStartIndex: j,
                        dataEndIndex: T,
                        updateId: k
                    }, y.state)));
                else if (x.activeTooltipIndex !== void 0) {
                    var N = x.chartX
                      , E = x.chartY
                      , I = x.activeTooltipIndex
                      , D = y.state
                      , B = D.offset
                      , R = D.tooltipTicks;
                    if (!B)
                        return;
                    if (typeof A == "function")
                        I = A(R, x);
                    else if (A === "value") {
                        I = -1;
                        for (var L = 0; L < R.length; L++)
                            if (R[L].value === x.activeLabel) {
                                I = L;
                                break
                            }
                    }
                    var K = M(M({}, B), {}, {
                        x: B.left,
                        y: B.top
                    })
                      , G = Math.min(N, K.x + K.width)
                      , z = Math.min(E, K.y + K.height)
                      , Y = R[I] && R[I].value
                      , se = Gl(y.state, y.props.data, I)
                      , we = R[I] ? {
                        x: P === "horizontal" ? R[I].coordinate : G,
                        y: P === "horizontal" ? z : R[I].coordinate
                    } : Kv;
                    y.setState(M(M({}, x), {}, {
                        activeLabel: Y,
                        activeCoordinate: we,
                        activePayload: se,
                        activeTooltipIndex: I
                    }))
                } else
                    y.setState(x)
            }),
            J(y, "renderCursor", function(x) {
                var O, P = y.state, A = P.isTooltipActive, k = P.activeCoordinate, j = P.activePayload, T = P.offset, N = P.activeTooltipIndex, E = P.tooltipAxisBandSize, I = y.getTooltipEventType(), D = (O = x.props.active) !== null && O !== void 0 ? O : A, B = y.props.layout, R = x.key || "_recharts-cursor";
                return $.createElement(wN, {
                    key: R,
                    activeCoordinate: k,
                    activePayload: j,
                    activeTooltipIndex: N,
                    chartName: r,
                    element: x,
                    isActive: D,
                    layout: B,
                    offset: T,
                    tooltipAxisBandSize: E,
                    tooltipEventType: I
                })
            }),
            J(y, "renderPolarAxis", function(x, O, P) {
                var A = st(x, "type.axisType")
                  , k = st(y.state, "".concat(A, "Map"))
                  , j = x.type.defaultProps
                  , T = j !== void 0 ? M(M({}, j), x.props) : x.props
                  , N = k && k[T["".concat(A, "Id")]];
                return C.cloneElement(x, M(M({}, N), {}, {
                    className: te(A, N.className),
                    key: x.key || "".concat(O, "-").concat(P),
                    ticks: dr(N, !0)
                }))
            }),
            J(y, "renderPolarGrid", function(x) {
                var O = x.props
                  , P = O.radialLines
                  , A = O.polarAngles
                  , k = O.polarRadius
                  , j = y.state
                  , T = j.radiusAxisMap
                  , N = j.angleAxisMap
                  , E = Er(T)
                  , I = Er(N)
                  , D = I.cx
                  , B = I.cy
                  , R = I.innerRadius
                  , L = I.outerRadius;
                return C.cloneElement(x, {
                    polarAngles: Array.isArray(A) ? A : dr(I, !0).map(function(K) {
                        return K.coordinate
                    }),
                    polarRadius: Array.isArray(k) ? k : dr(E, !0).map(function(K) {
                        return K.coordinate
                    }),
                    cx: D,
                    cy: B,
                    innerRadius: R,
                    outerRadius: L,
                    key: x.key || "polar-grid",
                    radialLines: P
                })
            }),
            J(y, "renderLegend", function() {
                var x = y.state.formattedGraphicalItems
                  , O = y.props
                  , P = O.children
                  , A = O.width
                  , k = O.height
                  , j = y.props.margin || {}
                  , T = A - (j.left || 0) - (j.right || 0)
                  , N = Wm({
                    children: P,
                    formattedGraphicalItems: x,
                    legendWidth: T,
                    legendContent: u
                });
                if (!N)
                    return null;
                var E = N.item
                  , I = Op(N, _N);
                return C.cloneElement(E, M(M({}, I), {}, {
                    chartWidth: A,
                    chartHeight: k,
                    margin: j,
                    onBBoxUpdate: y.handleLegendBBoxUpdate
                }))
            }),
            J(y, "renderTooltip", function() {
                var x, O = y.props, P = O.children, A = O.accessibilityLayer, k = Je(P, Pt);
                if (!k)
                    return null;
                var j = y.state
                  , T = j.isTooltipActive
                  , N = j.activeCoordinate
                  , E = j.activePayload
                  , I = j.activeLabel
                  , D = j.offset
                  , B = (x = k.props.active) !== null && x !== void 0 ? x : T;
                return C.cloneElement(k, {
                    viewBox: M(M({}, D), {}, {
                        x: D.left,
                        y: D.top
                    }),
                    active: B,
                    label: I,
                    payload: B ? E : [],
                    coordinate: N,
                    accessibilityLayer: A
                })
            }),
            J(y, "renderBrush", function(x) {
                var O = y.props
                  , P = O.margin
                  , A = O.data
                  , k = y.state
                  , j = k.offset
                  , T = k.dataStartIndex
                  , N = k.dataEndIndex
                  , E = k.updateId;
                return C.cloneElement(x, {
                    key: x.key || "_recharts-brush",
                    onChange: qi(y.handleBrushChange, x.props.onChange),
                    data: A,
                    x: F(x.props.x) ? x.props.x : j.left,
                    y: F(x.props.y) ? x.props.y : j.top + j.height + j.brushBottom - (P.bottom || 0),
                    width: F(x.props.width) ? x.props.width : j.width,
                    startIndex: T,
                    endIndex: N,
                    updateId: "brush-".concat(E)
                })
            }),
            J(y, "renderReferenceElement", function(x, O, P) {
                if (!x)
                    return null;
                var A = y
                  , k = A.clipPathId
                  , j = y.state
                  , T = j.xAxisMap
                  , N = j.yAxisMap
                  , E = j.offset
                  , I = x.type.defaultProps || {}
                  , D = x.props
                  , B = D.xAxisId
                  , R = B === void 0 ? I.xAxisId : B
                  , L = D.yAxisId
                  , K = L === void 0 ? I.yAxisId : L;
                return C.cloneElement(x, {
                    key: x.key || "".concat(O, "-").concat(P),
                    xAxis: T[R],
                    yAxis: N[K],
                    viewBox: {
                        x: E.left,
                        y: E.top,
                        width: E.width,
                        height: E.height
                    },
                    clipPathId: k
                })
            }),
            J(y, "renderActivePoints", function(x) {
                var O = x.item
                  , P = x.activePoint
                  , A = x.basePoint
                  , k = x.childIndex
                  , j = x.isRange
                  , T = []
                  , N = O.props.key
                  , E = O.item.type.defaultProps !== void 0 ? M(M({}, O.item.type.defaultProps), O.item.props) : O.item.props
                  , I = E.activeDot
                  , D = E.dataKey
                  , B = M(M({
                    index: k,
                    dataKey: D,
                    cx: P.x,
                    cy: P.y,
                    r: 4,
                    fill: Fu(O.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: P.payload,
                    value: P.value
                }, oe(I, !1)), na(I));
                return T.push(b.renderActiveDot(I, B, "".concat(N, "-activePoint-").concat(k))),
                A ? T.push(b.renderActiveDot(I, M(M({}, B), {}, {
                    cx: A.x,
                    cy: A.y
                }), "".concat(N, "-basePoint-").concat(k))) : j && T.push(null),
                T
            }),
            J(y, "renderGraphicChild", function(x, O, P) {
                var A = y.filterFormatItem(x, O, P);
                if (!A)
                    return null;
                var k = y.getTooltipEventType()
                  , j = y.state
                  , T = j.isTooltipActive
                  , N = j.tooltipAxis
                  , E = j.activeTooltipIndex
                  , I = j.activeLabel
                  , D = y.props.children
                  , B = Je(D, Pt)
                  , R = A.props
                  , L = R.points
                  , K = R.isRange
                  , G = R.baseLine
                  , z = A.item.type.defaultProps !== void 0 ? M(M({}, A.item.type.defaultProps), A.item.props) : A.item.props
                  , Y = z.activeDot
                  , se = z.hide
                  , we = z.activeBar
                  , Ae = z.activeShape
                  , _t = !!(!se && T && B && (Y || we || Ae))
                  , Ce = {};
                k !== "axis" && B && B.props.trigger === "click" ? Ce = {
                    onClick: qi(y.handleItemMouseEnter, x.props.onClick)
                } : k !== "axis" && (Ce = {
                    onMouseLeave: qi(y.handleItemMouseLeave, x.props.onMouseLeave),
                    onMouseEnter: qi(y.handleItemMouseEnter, x.props.onMouseEnter)
                });
                var W = C.cloneElement(x, M(M({}, A.props), Ce));
                function Q(Ot) {
                    return typeof N.dataKey == "function" ? N.dataKey(Ot.payload) : null
                }
                if (_t)
                    if (E >= 0) {
                        var ee, U;
                        if (N.dataKey && !N.allowDuplicatedCategory) {
                            var me = typeof N.dataKey == "function" ? Q : "payload.".concat(N.dataKey.toString());
                            ee = ra(L, me, I),
                            U = K && G && ra(G, me, I)
                        } else
                            ee = L == null ? void 0 : L[E],
                            U = K && G && G[E];
                        if (Ae || we) {
                            var ne = x.props.activeIndex !== void 0 ? x.props.activeIndex : E;
                            return [C.cloneElement(x, M(M(M({}, A.props), Ce), {}, {
                                activeIndex: ne
                            })), null, null]
                        }
                        if (!ue(ee))
                            return [W].concat(ln(y.renderActivePoints({
                                item: A,
                                activePoint: ee,
                                basePoint: U,
                                childIndex: E,
                                isRange: K
                            })))
                    } else {
                        var Se, Oe = (Se = y.getItemByXY(y.state.activeCoordinate)) !== null && Se !== void 0 ? Se : {
                            graphicalItem: W
                        }, Le = Oe.graphicalItem, St = Le.item, Ye = St === void 0 ? x : St, Ar = Le.childIndex, kt = M(M(M({}, A.props), Ce), {}, {
                            activeIndex: Ar
                        });
                        return [C.cloneElement(Ye, kt), null, null]
                    }
                return K ? [W, null, null] : [W, null]
            }),
            J(y, "renderCustomized", function(x, O, P) {
                return C.cloneElement(x, M(M({
                    key: "recharts-customized-".concat(P)
                }, y.props), y.state))
            }),
            J(y, "renderMap", {
                CartesianGrid: {
                    handler: Gi,
                    once: !0
                },
                ReferenceArea: {
                    handler: y.renderReferenceElement
                },
                ReferenceLine: {
                    handler: Gi
                },
                ReferenceDot: {
                    handler: y.renderReferenceElement
                },
                XAxis: {
                    handler: Gi
                },
                YAxis: {
                    handler: Gi
                },
                Brush: {
                    handler: y.renderBrush,
                    once: !0
                },
                Bar: {
                    handler: y.renderGraphicChild
                },
                Line: {
                    handler: y.renderGraphicChild
                },
                Area: {
                    handler: y.renderGraphicChild
                },
                Radar: {
                    handler: y.renderGraphicChild
                },
                RadialBar: {
                    handler: y.renderGraphicChild
                },
                Scatter: {
                    handler: y.renderGraphicChild
                },
                Pie: {
                    handler: y.renderGraphicChild
                },
                Funnel: {
                    handler: y.renderGraphicChild
                },
                Tooltip: {
                    handler: y.renderCursor,
                    once: !0
                },
                PolarGrid: {
                    handler: y.renderPolarGrid,
                    once: !0
                },
                PolarAngleAxis: {
                    handler: y.renderPolarAxis
                },
                PolarRadiusAxis: {
                    handler: y.renderPolarAxis
                },
                Customized: {
                    handler: y.renderCustomized
                }
            }),
            y.clipPathId = "".concat((w = _.id) !== null && w !== void 0 ? w : ji("recharts"), "-clip"),
            y.throttleTriggeredAfterMouseMove = Uh(y.triggeredAfterMouseMove, (S = _.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60),
            y.state = {},
            y
        }
        return NN(b, g),
        TN(b, [{
            key: "componentDidMount",
            value: function() {
                var w, S;
                this.addListener(),
                this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                        left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
                        top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout
                }),
                this.displayDefaultTooltip()
            }
        }, {
            key: "displayDefaultTooltip",
            value: function() {
                var w = this.props
                  , S = w.children
                  , y = w.data
                  , x = w.height
                  , O = w.layout
                  , P = Je(S, Pt);
                if (P) {
                    var A = P.props.defaultIndex;
                    if (!(typeof A != "number" || A < 0 || A > this.state.tooltipTicks.length - 1)) {
                        var k = this.state.tooltipTicks[A] && this.state.tooltipTicks[A].value
                          , j = Gl(this.state, y, A, k)
                          , T = this.state.tooltipTicks[A].coordinate
                          , N = (this.state.offset.top + x) / 2
                          , E = O === "horizontal"
                          , I = E ? {
                            x: T,
                            y: N
                        } : {
                            y: T,
                            x: N
                        }
                          , D = this.state.formattedGraphicalItems.find(function(R) {
                            var L = R.item;
                            return L.type.name === "Scatter"
                        });
                        D && (I = M(M({}, I), D.props.points[A].tooltipPosition),
                        j = D.props.points[A].tooltipPayload);
                        var B = {
                            activeTooltipIndex: A,
                            isTooltipActive: !0,
                            activeLabel: k,
                            activePayload: j,
                            activeCoordinate: I
                        };
                        this.setState(B),
                        this.renderCursor(P),
                        this.accessibilityManager.setIndex(A)
                    }
                }
            }
        }, {
            key: "getSnapshotBeforeUpdate",
            value: function(w, S) {
                if (!this.props.accessibilityLayer)
                    return null;
                if (this.state.tooltipTicks !== S.tooltipTicks && this.accessibilityManager.setDetails({
                    coordinateList: this.state.tooltipTicks
                }),
                this.props.layout !== w.layout && this.accessibilityManager.setDetails({
                    layout: this.props.layout
                }),
                this.props.margin !== w.margin) {
                    var y, x;
                    this.accessibilityManager.setDetails({
                        offset: {
                            left: (y = this.props.margin.left) !== null && y !== void 0 ? y : 0,
                            top: (x = this.props.margin.top) !== null && x !== void 0 ? x : 0
                        }
                    })
                }
                return null
            }
        }, {
            key: "componentDidUpdate",
            value: function(w) {
                Ns([Je(w.children, Pt)], [Je(this.props.children, Pt)]) || this.displayDefaultTooltip()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.removeListener(),
                this.throttleTriggeredAfterMouseMove.cancel()
            }
        }, {
            key: "getTooltipEventType",
            value: function() {
                var w = Je(this.props.children, Pt);
                if (w && typeof w.props.shared == "boolean") {
                    var S = w.props.shared ? "axis" : "item";
                    return s.indexOf(S) >= 0 ? S : a
                }
                return a
            }
        }, {
            key: "getMouseInfo",
            value: function(w) {
                if (!this.container)
                    return null;
                var S = this.container
                  , y = S.getBoundingClientRect()
                  , x = wS(y)
                  , O = {
                    chartX: Math.round(w.pageX - x.left),
                    chartY: Math.round(w.pageY - x.top)
                }
                  , P = y.width / S.offsetWidth || 1
                  , A = this.inRange(O.chartX, O.chartY, P);
                if (!A)
                    return null;
                var k = this.state
                  , j = k.xAxisMap
                  , T = k.yAxisMap
                  , N = this.getTooltipEventType();
                if (N !== "axis" && j && T) {
                    var E = Er(j).scale
                      , I = Er(T).scale
                      , D = E && E.invert ? E.invert(O.chartX) : null
                      , B = I && I.invert ? I.invert(O.chartY) : null;
                    return M(M({}, O), {}, {
                        xValue: D,
                        yValue: B
                    })
                }
                var R = Ap(this.state, this.props.data, this.props.layout, A);
                return R ? M(M({}, O), R) : null
            }
        }, {
            key: "inRange",
            value: function(w, S) {
                var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1
                  , x = this.props.layout
                  , O = w / y
                  , P = S / y;
                if (x === "horizontal" || x === "vertical") {
                    var A = this.state.offset
                      , k = O >= A.left && O <= A.left + A.width && P >= A.top && P <= A.top + A.height;
                    return k ? {
                        x: O,
                        y: P
                    } : null
                }
                var j = this.state
                  , T = j.angleAxisMap
                  , N = j.radiusAxisMap;
                if (T && N) {
                    var E = Er(T);
                    return fd({
                        x: O,
                        y: P
                    }, E)
                }
                return null
            }
        }, {
            key: "parseEventsOfWrapper",
            value: function() {
                var w = this.props.children
                  , S = this.getTooltipEventType()
                  , y = Je(w, Pt)
                  , x = {};
                y && S === "axis" && (y.props.trigger === "click" ? x = {
                    onClick: this.handleClick
                } : x = {
                    onMouseEnter: this.handleMouseEnter,
                    onDoubleClick: this.handleDoubleClick,
                    onMouseMove: this.handleMouseMove,
                    onMouseLeave: this.handleMouseLeave,
                    onTouchMove: this.handleTouchMove,
                    onTouchStart: this.handleTouchStart,
                    onTouchEnd: this.handleTouchEnd,
                    onContextMenu: this.handleContextMenu
                });
                var O = na(this.props, this.handleOuterEvent);
                return M(M({}, O), x)
            }
        }, {
            key: "addListener",
            value: function() {
                gs.on(bs, this.handleReceiveSyncEvent)
            }
        }, {
            key: "removeListener",
            value: function() {
                gs.removeListener(bs, this.handleReceiveSyncEvent)
            }
        }, {
            key: "filterFormatItem",
            value: function(w, S, y) {
                for (var x = this.state.formattedGraphicalItems, O = 0, P = x.length; O < P; O++) {
                    var A = x[O];
                    if (A.item === w || A.props.key === w.key || S === Bt(A.item.type) && y === A.childIndex)
                        return A
                }
                return null
            }
        }, {
            key: "renderClipPath",
            value: function() {
                var w = this.clipPathId
                  , S = this.state.offset
                  , y = S.left
                  , x = S.top
                  , O = S.height
                  , P = S.width;
                return $.createElement("defs", null, $.createElement("clipPath", {
                    id: w
                }, $.createElement("rect", {
                    x: y,
                    y: x,
                    height: O,
                    width: P
                })))
            }
        }, {
            key: "getXScales",
            value: function() {
                var w = this.state.xAxisMap;
                return w ? Object.entries(w).reduce(function(S, y) {
                    var x = Sp(y, 2)
                      , O = x[0]
                      , P = x[1];
                    return M(M({}, S), {}, J({}, O, P.scale))
                }, {}) : null
            }
        }, {
            key: "getYScales",
            value: function() {
                var w = this.state.yAxisMap;
                return w ? Object.entries(w).reduce(function(S, y) {
                    var x = Sp(y, 2)
                      , O = x[0]
                      , P = x[1];
                    return M(M({}, S), {}, J({}, O, P.scale))
                }, {}) : null
            }
        }, {
            key: "getXScaleByAxisId",
            value: function(w) {
                var S;
                return (S = this.state.xAxisMap) === null || S === void 0 || (S = S[w]) === null || S === void 0 ? void 0 : S.scale
            }
        }, {
            key: "getYScaleByAxisId",
            value: function(w) {
                var S;
                return (S = this.state.yAxisMap) === null || S === void 0 || (S = S[w]) === null || S === void 0 ? void 0 : S.scale
            }
        }, {
            key: "getItemByXY",
            value: function(w) {
                var S = this.state
                  , y = S.formattedGraphicalItems
                  , x = S.activeItem;
                if (y && y.length)
                    for (var O = 0, P = y.length; O < P; O++) {
                        var A = y[O]
                          , k = A.props
                          , j = A.item
                          , T = j.type.defaultProps !== void 0 ? M(M({}, j.type.defaultProps), j.props) : j.props
                          , N = Bt(j.type);
                        if (N === "Bar") {
                            var E = (k.data || []).find(function(R) {
                                return V2(w, R)
                            });
                            if (E)
                                return {
                                    graphicalItem: A,
                                    payload: E
                                }
                        } else if (N === "RadialBar") {
                            var I = (k.data || []).find(function(R) {
                                return fd(w, R)
                            });
                            if (I)
                                return {
                                    graphicalItem: A,
                                    payload: I
                                }
                        } else if (ko(A, x) || Mo(A, x) || pi(A, x)) {
                            var D = GT({
                                graphicalItem: A,
                                activeTooltipItem: x,
                                itemData: T.data
                            })
                              , B = T.activeIndex === void 0 ? D : T.activeIndex;
                            return {
                                graphicalItem: M(M({}, A), {}, {
                                    childIndex: B
                                }),
                                payload: pi(A, x) ? T.data[D] : A.props.data[D]
                            }
                        }
                    }
                return null
            }
        }, {
            key: "render",
            value: function() {
                var w = this;
                if (!xc(this))
                    return null;
                var S = this.props
                  , y = S.children
                  , x = S.className
                  , O = S.width
                  , P = S.height
                  , A = S.style
                  , k = S.compact
                  , j = S.title
                  , T = S.desc
                  , N = Op(S, SN)
                  , E = oe(N, !1);
                if (k)
                    return $.createElement(lp, {
                        state: this.state,
                        width: this.props.width,
                        height: this.props.height,
                        clipPathId: this.clipPathId
                    }, $.createElement(Ds, Nr({}, E, {
                        width: O,
                        height: P,
                        title: j,
                        desc: T
                    }), this.renderClipPath(), _c(y, this.renderMap)));
                if (this.props.accessibilityLayer) {
                    var I, D;
                    E.tabIndex = (I = this.props.tabIndex) !== null && I !== void 0 ? I : 0,
                    E.role = (D = this.props.role) !== null && D !== void 0 ? D : "application",
                    E.onKeyDown = function(R) {
                        w.accessibilityManager.keyboardEvent(R)
                    }
                    ,
                    E.onFocus = function() {
                        w.accessibilityManager.focus()
                    }
                }
                var B = this.parseEventsOfWrapper();
                return $.createElement(lp, {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId
                }, $.createElement("div", Nr({
                    className: te("recharts-wrapper", x),
                    style: M({
                        position: "relative",
                        cursor: "default",
                        width: O,
                        height: P
                    }, A)
                }, B, {
                    ref: function(L) {
                        w.container = L
                    }
                }), $.createElement(Ds, Nr({}, E, {
                    width: O,
                    height: P,
                    title: j,
                    desc: T,
                    style: UN
                }), this.renderClipPath(), _c(y, this.renderMap)), this.renderLegend(), this.renderTooltip()))
            }
        }])
    }(C.Component);
    J(h, "displayName", r),
    J(h, "defaultProps", M({
        layout: "horizontal",
        stackOffset: "none",
        barCategoryGap: "10%",
        barGap: 4,
        margin: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
        },
        reverseStackOrder: !1,
        syncMethod: "index"
    }, c)),
    J(h, "getDerivedStateFromProps", function(g, b) {
        var _ = g.dataKey
          , w = g.data
          , S = g.children
          , y = g.width
          , x = g.height
          , O = g.layout
          , P = g.stackOffset
          , A = g.margin
          , k = b.dataStartIndex
          , j = b.dataEndIndex;
        if (b.updateId === void 0) {
            var T = jp(g);
            return M(M(M({}, T), {}, {
                updateId: 0
            }, p(M(M({
                props: g
            }, T), {}, {
                updateId: 0
            }), b)), {}, {
                prevDataKey: _,
                prevData: w,
                prevWidth: y,
                prevHeight: x,
                prevLayout: O,
                prevStackOffset: P,
                prevMargin: A,
                prevChildren: S
            })
        }
        if (_ !== b.prevDataKey || w !== b.prevData || y !== b.prevWidth || x !== b.prevHeight || O !== b.prevLayout || P !== b.prevStackOffset || !Dr(A, b.prevMargin)) {
            var N = jp(g)
              , E = {
                chartX: b.chartX,
                chartY: b.chartY,
                isTooltipActive: b.isTooltipActive
            }
              , I = M(M({}, Ap(b, w, O)), {}, {
                updateId: b.updateId + 1
            })
              , D = M(M(M({}, N), E), I);
            return M(M(M({}, D), p(M({
                props: g
            }, D), b)), {}, {
                prevDataKey: _,
                prevData: w,
                prevWidth: y,
                prevHeight: x,
                prevLayout: O,
                prevStackOffset: P,
                prevMargin: A,
                prevChildren: S
            })
        }
        if (!Ns(S, b.prevChildren)) {
            var B, R, L, K, G = Je(S, Zr), z = G && (B = (R = G.props) === null || R === void 0 ? void 0 : R.startIndex) !== null && B !== void 0 ? B : k, Y = G && (L = (K = G.props) === null || K === void 0 ? void 0 : K.endIndex) !== null && L !== void 0 ? L : j, se = z !== k || Y !== j, we = !ue(w), Ae = we && !se ? b.updateId : b.updateId + 1;
            return M(M({
                updateId: Ae
            }, p(M(M({
                props: g
            }, b), {}, {
                updateId: Ae,
                dataStartIndex: z,
                dataEndIndex: Y
            }), b)), {}, {
                prevChildren: S,
                dataStartIndex: z,
                dataEndIndex: Y
            })
        }
        return null
    }),
    J(h, "renderActiveDot", function(g, b, _) {
        var w;
        return C.isValidElement(g) ? w = C.cloneElement(g, b) : re(g) ? w = g(b) : w = $.createElement(Eo, b),
        $.createElement(xe, {
            className: "recharts-active-dot",
            key: _
        }, w)
    });
    var m = C.forwardRef(function(b, _) {
        return $.createElement(h, Nr({}, b, {
            ref: _
        }))
    });
    return m.displayName = h.displayName,
    m
}
  , ZN = YN({
    chartName: "AreaChart",
    GraphicalChild: rr,
    axisComponents: [{
        axisType: "xAxis",
        AxisComp: Wo
    }, {
        axisType: "yAxis",
        AxisComp: zo
    }],
    formatAxisMap: Sk
});
const JN = e => {
    const {active: t, payload: r} = e;
    return t && r && r.length ? v.jsxs("div", {
        className: "custom-tooltip",
        style: {
            backgroundColor: "#000",
            padding: "20px",
            boxShadow: "0px 0px 16px 0px rgba(152, 255, 120, 0.40)"
        },
        children: [r[0].payload.current && v.jsx("p", {
            className: "mb-3",
            children: v.jsx(V, {
                id: "nkzPQC"
            })
        }), v.jsx("p", {
            className: "sm:text-xs",
            children: `${gr._({
                id: "Xka+yN"
            })} $${gt(r[0].payload.marketCap, 0)}`
        }), v.jsx("p", {
            className: "mt-3 sm:text-xs",
            children: `${gr._({
                id: "cDHoAv"
            })} ${gt(r[0].payload.butAmount)}`
        })]
    }) : null
}
  , QN = e => {
    const {cx: t, cy: r, payload: n, width: i} = e;
    return n.current ? v.jsxs(v.Fragment, {
        children: [v.jsx(Io, {
            y: n.marketCap,
            strokeOpacity: .6,
            stroke: "#98FF78",
            strokeWidth: 1,
            strokeDasharray: "5 5"
        }), v.jsx(Eo, {
            cx: t,
            cy: r,
            r: 6,
            fill: "#98FF78",
            stroke: "white",
            strokeWidth: 2
        })]
    }) : null
}
;
function eI() {
    const [e,t] = C.useState(0)
      , [r,n] = C.useState(0)
      , [i,a] = C.useState([])
      , {program: o} = Lp()
      , {tokenMetadata: s} = Jt()
      , {solPrice: l} = eo()
      , [u,f] = C.useState()
      , c = s == null ? void 0 : s.market.market
      , d = C.useCallback(async () => {
        const h = new Ji(c)
          , m = await o.account.market.fetch(h);
        f(m.remainingSupply.toString())
    }
    , [c]);
    C.useEffect( () => {
        d()
    }
    , [c]);
    const {isMatchMobile: p} = Ke();
    return C.useEffect( () => {
        let h = [];
        u && l && (h = cg(u, void 0, void 0, BigInt(1307) * BigInt(1e9)).map(g => {
            const b = Number(g.market_cap.mul(l).toFixed(2))
              , _ = new ge(Number(g.buy_amount)).dividedBy(Math.pow(10, sr)).toDecimalPlaces(0, ge.ROUND_DOWN).toNumber();
            return g.current && (t(b),
            n(_)),
            {
                marketCap: Number(g.market_cap.mul(l).toFixed(2)),
                butAmount: new ge(Number(g.buy_amount)).dividedBy(Math.pow(10, sr)).toDecimalPlaces(0, ge.ROUND_DOWN).toNumber(),
                current: g.current
            }
        }
        )),
        a(h)
    }
    , [u, l]),
    v.jsx(q, {
        className: "pl-3 pr-1.5 py-2",
        sx: {
            height: p ? 320 : 460
        },
        children: v.jsx(eu, {
            className: "flex items-center justify-center h-full",
            loading: Xe.isEmpty(i),
            children: v.jsx(hS, {
                width: "100%",
                height: "100%",
                children: v.jsxs(ZN, {
                    data: i,
                    children: [v.jsx("text", {
                        x: 80,
                        y: 14,
                        fill: "#ddd",
                        fontSize: p ? 12 : 13,
                        children: `${gr._({
                            id: "MjRR28"
                        })} $${gt(e, 0)}`
                    }), v.jsx("text", {
                        x: 80,
                        y: 46,
                        fill: "#ddd",
                        fontSize: p ? 12 : 13,
                        children: `${gr._({
                            id: "urqLzE"
                        })} ${gt(r, 0)}`
                    }), v.jsxs("defs", {
                        children: [v.jsxs("linearGradient", {
                            id: "colorStroke",
                            x1: "280",
                            y1: "39.5",
                            x2: "2",
                            y2: "39.5",
                            gradientUnits: "userSpaceOnUse",
                            children: [v.jsx("stop", {
                                stopColor: "#98FF78"
                            }), v.jsx("stop", {
                                offset: "1",
                                stopColor: "#17B26A"
                            })]
                        }), v.jsxs("linearGradient", {
                            id: "colorFill",
                            x1: "409.031",
                            y1: "0.5",
                            x2: "30",
                            y2: "460",
                            gradientUnits: "userSpaceOnUse",
                            children: [v.jsx("stop", {
                                stopColor: "#98FF78"
                            }), v.jsx("stop", {
                                offset: "1",
                                stopColor: "#17B26A",
                                stopOpacity: "0.04"
                            })]
                        })]
                    }), v.jsx(Wo, {
                        dataKey: "butAmount",
                        domain: [0, "dataMax"],
                        type: "number",
                        tickCount: 5,
                        tickFormatter: h => `${lr(h, 2)}`
                    }), v.jsx(zo, {
                        dataKey: "marketCap",
                        tickFormatter: h => `$${lr(h, 2)}`
                    }), v.jsx(Pt, {
                        content: v.jsx(JN, {})
                    }), v.jsx(rr, {
                        type: "monotone",
                        dataKey: "marketCap",
                        stroke: "url(#colorStroke)",
                        strokeWidth: "4",
                        fillOpacity: .15,
                        fill: "url(#colorFill)",
                        dot: v.jsx(QN, {})
                    })]
                })
            })
        })
    })
}
function Gv() {
    const [e,t] = C.useState(yn.Chart)
      , r = n => {
        t(n)
    }
    ;
    return v.jsxs("div", {
        className: "sm:pt-2",
        children: [v.jsxs(nu, {
            className: "px-4",
            value: e,
            onChange: (n, i) => r(i),
            color: "primary",
            children: [v.jsx(Rn, {
                label: v.jsx(V, {
                    id: "nuBbBr"
                }),
                value: yn.Chart
            }), v.jsx(Rn, {
                label: "Bonding Curve",
                value: yn.BoundingCurve
            })]
        }), v.jsxs("div", {
            children: [e === yn.Chart ? v.jsx(_b, {}) : null, e === yn.BoundingCurve ? v.jsx(eI, {}) : null]
        })]
    })
}
function tI() {
    return v.jsxs(rI, {
        className: "flex flex-grow justify-between relative h-full",
        children: [v.jsxs(q, {
            className: "left w-full flex-1",
            children: [v.jsx(q, {
                className: "tickerSummary p-4",
                children: v.jsx(Zp, {})
            }), v.jsx(Gv, {}), v.jsx(ot, {}), v.jsx(Yp, {})]
        }), v.jsxs(q, {
            className: "basis-[350px] overflow-hidden",
            children: [v.jsx(Jp, {}), v.jsx(ot, {}), v.jsx(Qp, {}), v.jsx(ot, {}), v.jsx(Gp, {})]
        })]
    })
}
const rI = xt(q)`
  min-height: calc(100vh - 100px);
  //height: calc(100vh - 100px);
  width: 100vw;
  box-sizing: border-box;
  .left {
    border-right: 1px solid ${ ({theme: e}) => e.palette.divider};
  }
  .tickerSummary {
    border-bottom: 1px solid ${ ({theme: e}) => e.palette.divider};
  }
`;
function nI() {
    return v.jsxs(q, {
        className: "py-4 relative mb-8",
        children: [v.jsx(Zp, {}), v.jsx(ot, {}), v.jsx(Qp, {}), v.jsx(ot, {}), v.jsx(Gv, {}), v.jsx(ot, {}), v.jsx(Yp, {}), v.jsx(q, {
            className: "px-4 fixed bottom-4 w-full z-50",
            children: v.jsx(Jp, {})
        })]
    })
}
function pI() {
    const {tokenStatus: e} = Jt()
      , {isMatchMobile: t} = Ke();
    return v.jsxs(v.Fragment, {
        children: [e === "Loading" && v.jsx(ac, {
            children: v.jsx(lc, {
                loading: !0
            })
        }), e === "Notfound" && v.jsx(ac, {
            children: v.jsx(lc, {
                children: v.jsx(fg, {
                    children: v.jsx(V, {
                        id: "DOs1d6"
                    })
                })
            })
        }), e === "Success" && v.jsx(v.Fragment, {
            children: t ? v.jsx(nI, {}) : v.jsx(tI, {})
        })]
    })
}
export {pI as default};
//# sourceMappingURL=index-Se2PPd5m.js.map
