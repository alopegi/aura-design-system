import { g as zx, c as Ux } from "./index.c4aa511a.js";
function $x(Ft, ur) {
  for (var y = 0; y < ur.length; y++) {
    const Je = ur[y];
    if (typeof Je != "string" && !Array.isArray(Je)) {
      for (const R in Je)
        if (R !== "default" && !(R in Ft)) {
          const v = Object.getOwnPropertyDescriptor(Je, R);
          v &&
            Object.defineProperty(
              Ft,
              R,
              v.get ? v : { enumerable: !0, get: () => Je[R] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(Ft, Symbol.toStringTag, { value: "Module" })
  );
}
var xi = { exports: {} };
/*! axe v4.5.2
 * Copyright (c) 2022 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */ (function (Ft) {
  (function ur(y) {
    var Je = y,
      R = y.document,
      v = v || {};
    (v.version = "4.5.2"),
      P(Ft) === "object" &&
        Ft.exports &&
        typeof ur.toString == "function" &&
        ((v.source =
          "(" +
          ur.toString() +
          ')(typeof window === "object" ? window : this);'),
        (Ft.exports = v)),
      typeof y.getComputedStyle == "function" && (y.axe = v);
    function sr(A) {
      (this.name = "SupportError"),
        (this.cause = A.cause),
        (this.message = "`".concat(
          A.cause,
          "` - feature unsupported in your environment."
        )),
        A.ruleId &&
          ((this.ruleId = A.ruleId),
          (this.message += " Skipping ".concat(this.ruleId, " rule."))),
        (this.stack = new Error().stack);
    }
    (sr.prototype = Object.create(Error.prototype)),
      (sr.prototype.constructor = sr);
    var zs = ["node"],
      Us = ["node"],
      $s = ["variant"],
      Ws = ["matches"],
      Gs = ["chromium"],
      Ys = ["noImplicit"],
      Ks = ["noPresentational"],
      Xs = ["nodes"],
      Js = ["node"],
      Qs = ["relatedNodes"],
      Zs = ["environmentData"],
      ec = ["environmentData"],
      tc = ["node"],
      rc = ["environmentData"],
      ac = ["environmentData"],
      nc = ["environmentData"];
    function ic(A, S, L) {
      return (
        S in A
          ? Object.defineProperty(A, S, {
              value: L,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (A[S] = L),
        A
      );
    }
    function Ei(A, S) {
      if (typeof S != "function" && S !== null)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (A.prototype = Object.create(S && S.prototype, {
        constructor: { value: A, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(A, "prototype", { writable: !1 }),
        S && Ta(A, S);
    }
    function Ta(A, S) {
      return (
        (Ta = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (G, fe) {
              return (G.__proto__ = fe), G;
            }),
        Ta(A, S)
      );
    }
    function Ai(A) {
      var S = lc();
      return function () {
        var G = Mr(A),
          fe;
        if (S) {
          var De = Mr(this).constructor;
          fe = Reflect.construct(G, arguments, De);
        } else fe = G.apply(this, arguments);
        return oc(this, fe);
      };
    }
    function oc(A, S) {
      if (S && (P(S) === "object" || typeof S == "function")) return S;
      if (S !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Fi(A);
    }
    function Fi(A) {
      if (A === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return A;
    }
    function lc() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch {
        return !1;
      }
    }
    function Mr(A) {
      return (
        (Mr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (L) {
              return L.__proto__ || Object.getPrototypeOf(L);
            }),
        Mr(A)
      );
    }
    function Ve(A, S) {
      if (A == null) return {};
      var L = uc(A, S),
        G,
        fe;
      if (Object.getOwnPropertySymbols) {
        var De = Object.getOwnPropertySymbols(A);
        for (fe = 0; fe < De.length; fe++)
          (G = De[fe]),
            !(S.indexOf(G) >= 0) &&
              (!Object.prototype.propertyIsEnumerable.call(A, G) ||
                (L[G] = A[G]));
      }
      return L;
    }
    function uc(A, S) {
      if (A == null) return {};
      var L = {},
        G = Object.keys(A),
        fe,
        De;
      for (De = 0; De < G.length; De++)
        (fe = G[De]), !(S.indexOf(fe) >= 0) && (L[fe] = A[fe]);
      return L;
    }
    function ie(A) {
      return dc(A) || cc(A) || Sa(A) || sc();
    }
    function sc() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function cc(A) {
      if (
        (typeof Symbol < "u" && A[Symbol.iterator] != null) ||
        A["@@iterator"] != null
      )
        return Array.from(A);
    }
    function dc(A) {
      if (Array.isArray(A)) return Oa(A);
    }
    function ne() {
      return (
        (ne = Object.assign
          ? Object.assign.bind()
          : function (A) {
              for (var S = 1; S < arguments.length; S++) {
                var L = arguments[S];
                for (var G in L)
                  Object.prototype.hasOwnProperty.call(L, G) && (A[G] = L[G]);
              }
              return A;
            }),
        ne.apply(this, arguments)
      );
    }
    function ve(A, S) {
      return mc(A) || pc(A, S) || Sa(A, S) || fc();
    }
    function fc() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pc(A, S) {
      var L =
        A == null
          ? null
          : (typeof Symbol < "u" && A[Symbol.iterator]) || A["@@iterator"];
      if (L != null) {
        var G = [],
          fe = !0,
          De = !1,
          et,
          F;
        try {
          for (
            L = L.call(A);
            !(fe = (et = L.next()).done) &&
            (G.push(et.value), !(S && G.length === S));
            fe = !0
          );
        } catch (ke) {
          (De = !0), (F = ke);
        } finally {
          try {
            !fe && L.return != null && L.return();
          } finally {
            if (De) throw F;
          }
        }
        return G;
      }
    }
    function mc(A) {
      if (Array.isArray(A)) return A;
    }
    function cr(A, S) {
      if (!(A instanceof S))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ci(A, S) {
      for (var L = 0; L < S.length; L++) {
        var G = S[L];
        (G.enumerable = G.enumerable || !1),
          (G.configurable = !0),
          "value" in G && (G.writable = !0),
          Object.defineProperty(A, G.key, G);
      }
    }
    function dr(A, S, L) {
      return (
        S && Ci(A.prototype, S),
        L && Ci(A, L),
        Object.defineProperty(A, "prototype", { writable: !1 }),
        A
      );
    }
    function ft(A, S) {
      var L = (typeof Symbol < "u" && A[Symbol.iterator]) || A["@@iterator"];
      if (!L) {
        if (
          Array.isArray(A) ||
          (L = Sa(A)) ||
          (S && A && typeof A.length == "number")
        ) {
          L && (A = L);
          var G = 0,
            fe = function () {};
          return {
            s: fe,
            n: function () {
              return G >= A.length ? { done: !0 } : { done: !1, value: A[G++] };
            },
            e: function (yt) {
              throw yt;
            },
            f: fe,
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var De = !0,
        et = !1,
        F;
      return {
        s: function () {
          L = L.call(A);
        },
        n: function () {
          var yt = L.next();
          return (De = yt.done), yt;
        },
        e: function (yt) {
          (et = !0), (F = yt);
        },
        f: function () {
          try {
            !De && L.return != null && L.return();
          } finally {
            if (et) throw F;
          }
        },
      };
    }
    function Sa(A, S) {
      if (!!A) {
        if (typeof A == "string") return Oa(A, S);
        var L = Object.prototype.toString.call(A).slice(8, -1);
        if (
          (L === "Object" && A.constructor && (L = A.constructor.name),
          L === "Map" || L === "Set")
        )
          return Array.from(A);
        if (
          L === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)
        )
          return Oa(A, S);
      }
    }
    function Oa(A, S) {
      (S == null || S > A.length) && (S = A.length);
      for (var L = 0, G = new Array(S); L < S; L++) G[L] = A[L];
      return G;
    }
    function P(A) {
      return (
        (P =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (S) {
                return typeof S;
              }
            : function (S) {
                return S &&
                  typeof Symbol == "function" &&
                  S.constructor === Symbol &&
                  S !== Symbol.prototype
                  ? "symbol"
                  : typeof S;
              }),
        P(A)
      );
    }
    (function () {
      var A = Object.create,
        S = Object.defineProperty,
        L = Object.getPrototypeOf,
        G = Object.prototype.hasOwnProperty,
        fe = Object.getOwnPropertyNames,
        De = Object.getOwnPropertyDescriptor,
        et = function (t) {
          return S(t, "__esModule", { value: !0 });
        },
        F = function (t, r) {
          return function () {
            return r || t((r = { exports: {} }).exports, r), r.exports;
          };
        },
        ke = function (t, r) {
          for (var a in r) S(t, a, { get: r[a], enumerable: !0 });
        },
        yt = function (t, r, a) {
          if ((r && P(r) === "object") || typeof r == "function") {
            var n = ft(fe(r)),
              i;
            try {
              var o = function () {
                var u = i.value;
                !G.call(t, u) &&
                  u !== "default" &&
                  S(t, u, {
                    get: function () {
                      return r[u];
                    },
                    enumerable: !(a = De(r, u)) || a.enumerable,
                  });
              };
              for (n.s(); !(i = n.n()).done; ) o();
            } catch (l) {
              n.e(l);
            } finally {
              n.f();
            }
          }
          return t;
        },
        pt = function (t) {
          return yt(
            et(
              S(
                t != null ? A(L(t)) : {},
                "default",
                t && t.__esModule && "default" in t
                  ? {
                      get: function () {
                        return t.default;
                      },
                      enumerable: !0,
                    }
                  : { value: t, enumerable: !0 }
              )
            ),
            t
          );
        },
        ki = F(function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          function t(o) {
            return (
              (o >= "a" && o <= "z") ||
              (o >= "A" && o <= "Z") ||
              o === "-" ||
              o === "_"
            );
          }
          e.isIdentStart = t;
          function r(o) {
            return (
              (o >= "a" && o <= "z") ||
              (o >= "A" && o <= "Z") ||
              (o >= "0" && o <= "9") ||
              o === "-" ||
              o === "_"
            );
          }
          e.isIdent = r;
          function a(o) {
            return (
              (o >= "a" && o <= "f") ||
              (o >= "A" && o <= "F") ||
              (o >= "0" && o <= "9")
            );
          }
          e.isHex = a;
          function n(o) {
            for (var l = o.length, u = "", s = 0; s < l; ) {
              var c = o.charAt(s);
              if (e.identSpecialChars[c]) u += "\\" + c;
              else if (
                c === "_" ||
                c === "-" ||
                (c >= "A" && c <= "Z") ||
                (c >= "a" && c <= "z") ||
                (s !== 0 && c >= "0" && c <= "9")
              )
                u += c;
              else {
                var d = c.charCodeAt(0);
                if ((d & 63488) === 55296) {
                  var f = o.charCodeAt(s++);
                  if ((d & 64512) !== 55296 || (f & 64512) !== 56320)
                    throw Error("UCS-2(decode): illegal sequence");
                  d = ((d & 1023) << 10) + (f & 1023) + 65536;
                }
                u += "\\" + d.toString(16) + " ";
              }
              s++;
            }
            return u;
          }
          e.escapeIdentifier = n;
          function i(o) {
            for (var l = o.length, u = "", s = 0, c; s < l; ) {
              var d = o.charAt(s);
              d === '"'
                ? (d = '\\"')
                : d === "\\"
                ? (d = "\\\\")
                : (c = e.strReplacementsRev[d]) !== void 0 && (d = c),
                (u += d),
                s++;
            }
            return '"' + u + '"';
          }
          (e.escapeStr = i),
            (e.identSpecialChars = {
              "!": !0,
              '"': !0,
              "#": !0,
              $: !0,
              "%": !0,
              "&": !0,
              "'": !0,
              "(": !0,
              ")": !0,
              "*": !0,
              "+": !0,
              ",": !0,
              ".": !0,
              "/": !0,
              ";": !0,
              "<": !0,
              "=": !0,
              ">": !0,
              "?": !0,
              "@": !0,
              "[": !0,
              "\\": !0,
              "]": !0,
              "^": !0,
              "`": !0,
              "{": !0,
              "|": !0,
              "}": !0,
              "~": !0,
            }),
            (e.strReplacementsRev = {
              "\n": "\\n",
              "\r": "\\r",
              "	": "\\t",
              "\f": "\\f",
              "\v": "\\v",
            }),
            (e.singleQuoteEscapeChars = {
              n: `
`,
              r: "\r",
              t: "	",
              f: "\f",
              "\\": "\\",
              "'": "'",
            }),
            (e.doubleQuotesEscapeChars = {
              n: `
`,
              r: "\r",
              t: "	",
              f: "\f",
              "\\": "\\",
              '"': '"',
            });
        }),
        hc = F(function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var t = ki();
          function r(a, n, i, o, l, u) {
            var s = a.length,
              c = "";
            function d(g, x) {
              var E = "";
              for (n++, c = a.charAt(n); n < s; ) {
                if (c === g) return n++, E;
                if (c === "\\") {
                  n++, (c = a.charAt(n));
                  var C = void 0;
                  if (c === g) E += g;
                  else if ((C = x[c]) !== void 0) E += C;
                  else if (t.isHex(c)) {
                    var N = c;
                    for (n++, c = a.charAt(n); t.isHex(c); )
                      (N += c), n++, (c = a.charAt(n));
                    c === " " && (n++, (c = a.charAt(n))),
                      (E += String.fromCharCode(parseInt(N, 16)));
                    continue;
                  } else E += c;
                } else E += c;
                n++, (c = a.charAt(n));
              }
              return E;
            }
            function f() {
              var g = "";
              for (c = a.charAt(n); n < s; ) {
                if (t.isIdent(c)) g += c;
                else if (c === "\\") {
                  if ((n++, n >= s))
                    throw Error("Expected symbol but end of file reached.");
                  if (((c = a.charAt(n)), t.identSpecialChars[c])) g += c;
                  else if (t.isHex(c)) {
                    var x = c;
                    for (n++, c = a.charAt(n); t.isHex(c); )
                      (x += c), n++, (c = a.charAt(n));
                    c === " " && (n++, (c = a.charAt(n))),
                      (g += String.fromCharCode(parseInt(x, 16)));
                    continue;
                  } else g += c;
                } else return g;
                n++, (c = a.charAt(n));
              }
              return g;
            }
            function p() {
              c = a.charAt(n);
              for (
                var g = !1;
                c === " " ||
                c === "	" ||
                c ===
                  `
` ||
                c === "\r" ||
                c === "\f";

              )
                (g = !0), n++, (c = a.charAt(n));
              return g;
            }
            function m() {
              var g = b();
              if (n < s)
                throw Error('Rule expected but "' + a.charAt(n) + '" found.');
              return g;
            }
            function b() {
              var g = D();
              if (!g) return null;
              var x = g;
              for (c = a.charAt(n); c === ","; ) {
                if (
                  (n++,
                  p(),
                  x.type !== "selectors" &&
                    (x = { type: "selectors", selectors: [g] }),
                  (g = D()),
                  !g)
                )
                  throw Error('Rule expected after ",".');
                x.selectors.push(g);
              }
              return x;
            }
            function D() {
              p();
              var g = { type: "ruleSet" },
                x = h();
              if (!x) return null;
              for (
                var E = g;
                x &&
                ((x.type = "rule"),
                (E.rule = x),
                (E = x),
                p(),
                (c = a.charAt(n)),
                !(n >= s || c === "," || c === ")"));

              )
                if (l[c]) {
                  var C = c;
                  if ((n++, p(), (x = h()), !x))
                    throw Error('Rule expected after "' + C + '".');
                  x.nestingOperator = C;
                } else (x = h()), x && (x.nestingOperator = null);
              return g;
            }
            function h() {
              for (var g = null; n < s; )
                if (((c = a.charAt(n)), c === "*"))
                  n++, ((g = g || {}).tagName = "*");
                else if (t.isIdentStart(c) || c === "\\")
                  (g = g || {}).tagName = f();
                else if (c === ".")
                  n++,
                    (g = g || {}),
                    (g.classNames = g.classNames || []).push(f());
                else if (c === "#") n++, ((g = g || {}).id = f());
                else if (c === "[") {
                  n++, p();
                  var x = { name: f() };
                  if ((p(), c === "]")) n++;
                  else {
                    var E = "";
                    if ((o[c] && ((E = c), n++, (c = a.charAt(n))), n >= s))
                      throw Error('Expected "=" but end of file reached.');
                    if (c !== "=")
                      throw Error('Expected "=" but "' + c + '" found.');
                    (x.operator = E + "="), n++, p();
                    var C = "";
                    if (((x.valueType = "string"), c === '"'))
                      C = d('"', t.doubleQuotesEscapeChars);
                    else if (c === "'") C = d("'", t.singleQuoteEscapeChars);
                    else if (u && c === "$")
                      n++, (C = f()), (x.valueType = "substitute");
                    else {
                      for (; n < s && c !== "]"; )
                        (C += c), n++, (c = a.charAt(n));
                      C = C.trim();
                    }
                    if ((p(), n >= s))
                      throw Error('Expected "]" but end of file reached.');
                    if (c !== "]")
                      throw Error('Expected "]" but "' + c + '" found.');
                    n++, (x.value = C);
                  }
                  (g = g || {}), (g.attrs = g.attrs || []).push(x);
                } else if (c === ":") {
                  n++;
                  var N = f(),
                    M = { name: N };
                  if (c === "(") {
                    n++;
                    var H = "";
                    if ((p(), i[N] === "selector"))
                      (M.valueType = "selector"), (H = b());
                    else {
                      if (((M.valueType = i[N] || "string"), c === '"'))
                        H = d('"', t.doubleQuotesEscapeChars);
                      else if (c === "'") H = d("'", t.singleQuoteEscapeChars);
                      else if (u && c === "$")
                        n++, (H = f()), (M.valueType = "substitute");
                      else {
                        for (; n < s && c !== ")"; )
                          (H += c), n++, (c = a.charAt(n));
                        H = H.trim();
                      }
                      p();
                    }
                    if (n >= s)
                      throw Error('Expected ")" but end of file reached.');
                    if (c !== ")")
                      throw Error('Expected ")" but "' + c + '" found.');
                    n++, (M.value = H);
                  }
                  (g = g || {}), (g.pseudos = g.pseudos || []).push(M);
                } else break;
              return g;
            }
            return m();
          }
          e.parseCssSelector = r;
        }),
        vc = F(function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var t = ki();
          function r(a) {
            var n = "";
            switch (a.type) {
              case "ruleSet":
                for (var i = a.rule, o = []; i; )
                  i.nestingOperator && o.push(i.nestingOperator),
                    o.push(r(i)),
                    (i = i.rule);
                n = o.join(" ");
                break;
              case "selectors":
                n = a.selectors.map(r).join(", ");
                break;
              case "rule":
                a.tagName &&
                  (a.tagName === "*"
                    ? (n = "*")
                    : (n = t.escapeIdentifier(a.tagName))),
                  a.id && (n += "#" + t.escapeIdentifier(a.id)),
                  a.classNames &&
                    (n += a.classNames
                      .map(function (l) {
                        return "." + t.escapeIdentifier(l);
                      })
                      .join("")),
                  a.attrs &&
                    (n += a.attrs
                      .map(function (l) {
                        return "operator" in l
                          ? l.valueType === "substitute"
                            ? "[" +
                              t.escapeIdentifier(l.name) +
                              l.operator +
                              "$" +
                              l.value +
                              "]"
                            : "[" +
                              t.escapeIdentifier(l.name) +
                              l.operator +
                              t.escapeStr(l.value) +
                              "]"
                          : "[" + t.escapeIdentifier(l.name) + "]";
                      })
                      .join("")),
                  a.pseudos &&
                    (n += a.pseudos
                      .map(function (l) {
                        return l.valueType
                          ? l.valueType === "selector"
                            ? ":" +
                              t.escapeIdentifier(l.name) +
                              "(" +
                              r(l.value) +
                              ")"
                            : l.valueType === "substitute"
                            ? ":" +
                              t.escapeIdentifier(l.name) +
                              "($" +
                              l.value +
                              ")"
                            : l.valueType === "numeric"
                            ? ":" +
                              t.escapeIdentifier(l.name) +
                              "(" +
                              l.value +
                              ")"
                            : ":" +
                              t.escapeIdentifier(l.name) +
                              "(" +
                              t.escapeIdentifier(l.value) +
                              ")"
                          : ":" + t.escapeIdentifier(l.name);
                      })
                      .join(""));
                break;
              default:
                throw Error('Unknown entity type: "' + a.type + '".');
            }
            return n;
          }
          e.renderEntity = r;
        }),
        Ri = F(function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var t = hc(),
            r = vc(),
            a = (function () {
              function n() {
                (this.pseudos = {}),
                  (this.attrEqualityMods = {}),
                  (this.ruleNestingOperators = {}),
                  (this.substitutesEnabled = !1);
              }
              return (
                (n.prototype.registerSelectorPseudos = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    this.pseudos[s] = "selector";
                  }
                  return this;
                }),
                (n.prototype.unregisterSelectorPseudos = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    delete this.pseudos[s];
                  }
                  return this;
                }),
                (n.prototype.registerNumericPseudos = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    this.pseudos[s] = "numeric";
                  }
                  return this;
                }),
                (n.prototype.unregisterNumericPseudos = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    delete this.pseudos[s];
                  }
                  return this;
                }),
                (n.prototype.registerNestingOperators = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    this.ruleNestingOperators[s] = !0;
                  }
                  return this;
                }),
                (n.prototype.unregisterNestingOperators = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    delete this.ruleNestingOperators[s];
                  }
                  return this;
                }),
                (n.prototype.registerAttrEqualityMods = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    this.attrEqualityMods[s] = !0;
                  }
                  return this;
                }),
                (n.prototype.unregisterAttrEqualityMods = function () {
                  for (var i = [], o = 0; o < arguments.length; o++)
                    i[o] = arguments[o];
                  for (var l = 0, u = i; l < u.length; l++) {
                    var s = u[l];
                    delete this.attrEqualityMods[s];
                  }
                  return this;
                }),
                (n.prototype.enableSubstitutes = function () {
                  return (this.substitutesEnabled = !0), this;
                }),
                (n.prototype.disableSubstitutes = function () {
                  return (this.substitutesEnabled = !1), this;
                }),
                (n.prototype.parse = function (i) {
                  return t.parseCssSelector(
                    i,
                    0,
                    this.pseudos,
                    this.attrEqualityMods,
                    this.ruleNestingOperators,
                    this.substitutesEnabled
                  );
                }),
                (n.prototype.render = function (i) {
                  return r.renderEntity(i).trim();
                }),
                n
              );
            })();
          e.CssSelectorParser = a;
        }),
        gc = F(function (e, t) {
          t.exports = function () {};
        }),
        Ct = F(function (e, t) {
          var r = gc()();
          t.exports = function (a) {
            return a !== r && a !== null;
          };
        }),
        Ti = F(function (e, t) {
          var r = Ct(),
            a = Array.prototype.forEach,
            n = Object.create,
            i = function (l, u) {
              var s;
              for (s in l) u[s] = l[s];
            };
          t.exports = function (o) {
            var l = n(null);
            return (
              a.call(arguments, function (u) {
                !r(u) || i(Object(u), l);
              }),
              l
            );
          };
        }),
        bc = F(function (e, t) {
          t.exports = function () {
            var r = Math.sign;
            return typeof r != "function" ? !1 : r(10) === 1 && r(-20) === -1;
          };
        }),
        yc = F(function (e, t) {
          t.exports = function (r) {
            return (r = Number(r)), isNaN(r) || r === 0 ? r : r > 0 ? 1 : -1;
          };
        }),
        Dc = F(function (e, t) {
          t.exports = bc()() ? Math.sign : yc();
        }),
        wc = F(function (e, t) {
          var r = Dc(),
            a = Math.abs,
            n = Math.floor;
          t.exports = function (i) {
            return isNaN(i)
              ? 0
              : ((i = Number(i)), i === 0 || !isFinite(i) ? i : r(i) * n(a(i)));
          };
        }),
        kt = F(function (e, t) {
          var r = wc(),
            a = Math.max;
          t.exports = function (n) {
            return a(0, r(n));
          };
        }),
        Si = F(function (e, t) {
          var r = kt();
          t.exports = function (a, n, i) {
            var o;
            return isNaN(a)
              ? ((o = n), o >= 0 ? (i && o ? o - 1 : o) : 1)
              : a === !1
              ? !1
              : r(a);
          };
        }),
        Dt = F(function (e, t) {
          t.exports = function (r) {
            if (typeof r != "function")
              throw new TypeError(r + " is not a function");
            return r;
          };
        }),
        Vt = F(function (e, t) {
          var r = Ct();
          t.exports = function (a) {
            if (!r(a)) throw new TypeError("Cannot use null or undefined");
            return a;
          };
        }),
        _c = F(function (e, t) {
          var r = Dt(),
            a = Vt(),
            n = Function.prototype.bind,
            i = Function.prototype.call,
            o = Object.keys,
            l = Object.prototype.propertyIsEnumerable;
          t.exports = function (u, s) {
            return function (c, d) {
              var f,
                p = arguments[2],
                m = arguments[3];
              return (
                (c = Object(a(c))),
                r(d),
                (f = o(c)),
                m && f.sort(typeof m == "function" ? n.call(m, c) : void 0),
                typeof u != "function" && (u = f[u]),
                i.call(u, f, function (b, D) {
                  return l.call(c, b) ? i.call(d, p, c[b], b, c, D) : s;
                })
              );
            };
          };
        }),
        Br = F(function (e, t) {
          t.exports = _c()("forEach");
        }),
        Rt = F(function () {}),
        xc = F(function (e, t) {
          t.exports = function () {
            var r = Object.assign,
              a;
            return typeof r != "function"
              ? !1
              : ((a = { foo: "raz" }),
                r(a, { bar: "dwa" }, { trzy: "trzy" }),
                a.foo + a.bar + a.trzy === "razdwatrzy");
          };
        }),
        Ec = F(function (e, t) {
          t.exports = function () {
            try {
              return Object.keys("primitive"), !0;
            } catch {
              return !1;
            }
          };
        }),
        Ac = F(function (e, t) {
          var r = Ct(),
            a = Object.keys;
          t.exports = function (n) {
            return a(r(n) ? Object(n) : n);
          };
        }),
        Fc = F(function (e, t) {
          t.exports = Ec()() ? Object.keys : Ac();
        }),
        Cc = F(function (e, t) {
          var r = Fc(),
            a = Vt(),
            n = Math.max;
          t.exports = function (i, o) {
            var l,
              u,
              s = n(arguments.length, 2),
              c;
            for (
              i = Object(a(i)),
                c = function (f) {
                  try {
                    i[f] = o[f];
                  } catch (p) {
                    l || (l = p);
                  }
                },
                u = 1;
              u < s;
              ++u
            )
              (o = arguments[u]), r(o).forEach(c);
            if (l !== void 0) throw l;
            return i;
          };
        }),
        Oi = F(function (e, t) {
          t.exports = xc()() ? Object.assign : Cc();
        }),
        kc = F(function (e, t) {
          var r = Ct(),
            a = { function: !0, object: !0 };
          t.exports = function (n) {
            return (r(n) && a[P(n)]) || !1;
          };
        }),
        Rc = F(function (e, t) {
          var r = Oi(),
            a = kc(),
            n = Ct(),
            i = Error.captureStackTrace;
          t.exports = function (o) {
            var l = new Error(o),
              u = arguments[1],
              s = arguments[2];
            return (
              n(s) || (a(u) && ((s = u), (u = null))),
              n(s) && r(l, s),
              n(u) && (l.code = u),
              i && i(l, t.exports),
              l
            );
          };
        }),
        Ii = F(function (e, t) {
          var r = Vt(),
            a = Object.defineProperty,
            n = Object.getOwnPropertyDescriptor,
            i = Object.getOwnPropertyNames,
            o = Object.getOwnPropertySymbols;
          t.exports = function (l, u) {
            var s,
              c = Object(r(u));
            if (
              ((l = Object(r(l))),
              i(c).forEach(function (d) {
                try {
                  a(l, d, n(u, d));
                } catch (f) {
                  s = f;
                }
              }),
              typeof o == "function" &&
                o(c).forEach(function (d) {
                  try {
                    a(l, d, n(u, d));
                  } catch (f) {
                    s = f;
                  }
                }),
              s !== void 0)
            )
              throw s;
            return l;
          };
        }),
        Pi = F(function (e, t) {
          var r = kt(),
            a = function (s, c) {
              return c;
            },
            n,
            i,
            o,
            l;
          try {
            Object.defineProperty(a, "length", {
              configurable: !0,
              writable: !1,
              enumerable: !1,
              value: 1,
            });
          } catch {}
          a.length === 1
            ? ((n = { configurable: !0, writable: !1, enumerable: !1 }),
              (i = Object.defineProperty),
              (t.exports = function (u, s) {
                return (
                  (s = r(s)),
                  u.length === s ? u : ((n.value = s), i(u, "length", n))
                );
              }))
            : ((l = Ii()),
              (o = (function () {
                var u = [];
                return function (s) {
                  var c,
                    d = 0;
                  if (u[s]) return u[s];
                  for (c = []; s--; ) c.push("a" + (++d).toString(36));
                  return new Function(
                    "fn",
                    "return function (" +
                      c.join(", ") +
                      ") { return fn.apply(this, arguments); };"
                  );
                };
              })()),
              (t.exports = function (u, s) {
                var c;
                if (((s = r(s)), u.length === s)) return u;
                c = o(s)(u);
                try {
                  l(c, u);
                } catch {}
                return c;
              }));
        }),
        Ni = F(function (e, t) {
          var r = void 0;
          t.exports = function (a) {
            return a !== r && a !== null;
          };
        }),
        Tc = F(function (e, t) {
          var r = Ni(),
            a = { object: !0, function: !0, undefined: !0 };
          t.exports = function (n) {
            return r(n) ? hasOwnProperty.call(a, P(n)) : !1;
          };
        }),
        Sc = F(function (e, t) {
          var r = Tc();
          t.exports = function (a) {
            if (!r(a)) return !1;
            try {
              return a.constructor ? a.constructor.prototype === a : !1;
            } catch {
              return !1;
            }
          };
        }),
        Oc = F(function (e, t) {
          var r = Sc();
          t.exports = function (a) {
            if (typeof a != "function" || !hasOwnProperty.call(a, "length"))
              return !1;
            try {
              if (
                typeof a.length != "number" ||
                typeof a.call != "function" ||
                typeof a.apply != "function"
              )
                return !1;
            } catch {
              return !1;
            }
            return !r(a);
          };
        }),
        Ic = F(function (e, t) {
          var r = Oc(),
            a = /^\s*class[\s{/}]/,
            n = Function.prototype.toString;
          t.exports = function (i) {
            return !(!r(i) || a.test(n.call(i)));
          };
        }),
        Pc = F(function (e, t) {
          var r = "razdwatrzy";
          t.exports = function () {
            return typeof r.contains != "function"
              ? !1
              : r.contains("dwa") === !0 && r.contains("foo") === !1;
          };
        }),
        Nc = F(function (e, t) {
          var r = String.prototype.indexOf;
          t.exports = function (a) {
            return r.call(this, a, arguments[1]) > -1;
          };
        }),
        Mc = F(function (e, t) {
          t.exports = Pc()() ? String.prototype.contains : Nc();
        }),
        Tt = F(function (e, t) {
          var r = Ni(),
            a = Ic(),
            n = Oi(),
            i = Ti(),
            o = Mc(),
            l = (t.exports = function (u, s) {
              var c, d, f, p, m;
              return (
                arguments.length < 2 || typeof u != "string"
                  ? ((p = s), (s = u), (u = null))
                  : (p = arguments[2]),
                r(u)
                  ? ((c = o.call(u, "c")),
                    (d = o.call(u, "e")),
                    (f = o.call(u, "w")))
                  : ((c = f = !0), (d = !1)),
                (m = { value: s, configurable: c, enumerable: d, writable: f }),
                p ? n(i(p), m) : m
              );
            });
          l.gs = function (u, s, c) {
            var d, f, p, m;
            return (
              typeof u != "string"
                ? ((p = c), (c = s), (s = u), (u = null))
                : (p = arguments[3]),
              r(s)
                ? a(s)
                  ? r(c)
                    ? a(c) || ((p = c), (c = void 0))
                    : (c = void 0)
                  : ((p = s), (s = c = void 0))
                : (s = void 0),
              r(u)
                ? ((d = o.call(u, "c")), (f = o.call(u, "e")))
                : ((d = !0), (f = !1)),
              (m = { get: s, set: c, configurable: d, enumerable: f }),
              p ? n(i(p), m) : m
            );
          };
        }),
        Bc = F(function (e, t) {
          var r = Tt(),
            a = Dt(),
            n = Function.prototype.apply,
            i = Function.prototype.call,
            o = Object.create,
            l = Object.defineProperty,
            u = Object.defineProperties,
            s = Object.prototype.hasOwnProperty,
            c = { configurable: !0, enumerable: !1, writable: !0 },
            d,
            f,
            p,
            m,
            b,
            D,
            h;
          (d = function (x, E) {
            var C;
            return (
              a(E),
              s.call(this, "__ee__")
                ? (C = this.__ee__)
                : ((C = c.value = o(null)),
                  l(this, "__ee__", c),
                  (c.value = null)),
              C[x]
                ? P(C[x]) === "object"
                  ? C[x].push(E)
                  : (C[x] = [C[x], E])
                : (C[x] = E),
              this
            );
          }),
            (f = function (x, E) {
              var C, N;
              return (
                a(E),
                (N = this),
                d.call(
                  this,
                  x,
                  (C = function () {
                    p.call(N, x, C), n.call(E, this, arguments);
                  })
                ),
                (C.__eeOnceListener__ = E),
                this
              );
            }),
            (p = function (x, E) {
              var C, N, M, H;
              if ((a(E), !s.call(this, "__ee__"))) return this;
              if (((C = this.__ee__), !C[x])) return this;
              if (((N = C[x]), P(N) === "object"))
                for (H = 0; (M = N[H]); ++H)
                  (M === E || M.__eeOnceListener__ === E) &&
                    (N.length === 2 ? (C[x] = N[H ? 0 : 1]) : N.splice(H, 1));
              else (N === E || N.__eeOnceListener__ === E) && delete C[x];
              return this;
            }),
            (m = function (x) {
              var E, C, N, M, H;
              if (!!s.call(this, "__ee__") && ((M = this.__ee__[x]), !!M))
                if (P(M) === "object") {
                  for (
                    C = arguments.length, H = new Array(C - 1), E = 1;
                    E < C;
                    ++E
                  )
                    H[E - 1] = arguments[E];
                  for (M = M.slice(), E = 0; (N = M[E]); ++E)
                    n.call(N, this, H);
                } else
                  switch (arguments.length) {
                    case 1:
                      i.call(M, this);
                      break;
                    case 2:
                      i.call(M, this, arguments[1]);
                      break;
                    case 3:
                      i.call(M, this, arguments[1], arguments[2]);
                      break;
                    default:
                      for (
                        C = arguments.length, H = new Array(C - 1), E = 1;
                        E < C;
                        ++E
                      )
                        H[E - 1] = arguments[E];
                      n.call(M, this, H);
                  }
            }),
            (b = { on: d, once: f, off: p, emit: m }),
            (D = { on: r(d), once: r(f), off: r(p), emit: r(m) }),
            (h = u({}, D)),
            (t.exports = e =
              function (x) {
                return x == null ? o(h) : u(Object(x), D);
              }),
            (e.methods = b);
        }),
        qc = F(function (e, t) {
          t.exports = function () {
            var r = Array.from,
              a,
              n;
            return typeof r != "function"
              ? !1
              : ((a = ["raz", "dwa"]),
                (n = r(a)),
                Boolean(n && n !== a && n[1] === "dwa"));
          };
        }),
        Lc = F(function (e, t) {
          t.exports = function () {
            return (typeof globalThis > "u" ? "undefined" : P(globalThis)) !==
              "object" || !globalThis
              ? !1
              : globalThis.Array === Array;
          };
        }),
        Vc = F(function (e, t) {
          var r = function () {
            if (
              (typeof self > "u" ? "undefined" : P(self)) === "object" &&
              self
            )
              return self;
            if ((typeof y > "u" ? "undefined" : P(y)) === "object" && y)
              return y;
            throw new Error("Unable to resolve global `this`");
          };
          t.exports = (function () {
            if (this) return this;
            try {
              Object.defineProperty(Object.prototype, "__global__", {
                get: function () {
                  return this;
                },
                configurable: !0,
              });
            } catch {
              return r();
            }
            try {
              return __global__ || r();
            } finally {
              delete Object.prototype.__global__;
            }
          })();
        }),
        qr = F(function (e, t) {
          t.exports = Lc()() ? globalThis : Vc();
        }),
        jc = F(function (e, t) {
          var r = qr(),
            a = { object: !0, symbol: !0 };
          t.exports = function () {
            var n = r.Symbol,
              i;
            if (typeof n != "function") return !1;
            i = n("test symbol");
            try {
              String(i);
            } catch {
              return !1;
            }
            return !(
              !a[P(n.iterator)] ||
              !a[P(n.toPrimitive)] ||
              !a[P(n.toStringTag)]
            );
          };
        }),
        Hc = F(function (e, t) {
          t.exports = function (r) {
            return r
              ? P(r) === "symbol"
                ? !0
                : !r.constructor || r.constructor.name !== "Symbol"
                ? !1
                : r[r.constructor.toStringTag] === "Symbol"
              : !1;
          };
        }),
        Mi = F(function (e, t) {
          var r = Hc();
          t.exports = function (a) {
            if (!r(a)) throw new TypeError(a + " is not a symbol");
            return a;
          };
        }),
        zc = F(function (e, t) {
          var r = Tt(),
            a = Object.create,
            n = Object.defineProperty,
            i = Object.prototype,
            o = a(null);
          t.exports = function (l) {
            for (var u = 0, s, c; o[l + (u || "")]; ) ++u;
            return (
              (l += u || ""),
              (o[l] = !0),
              (s = "@@" + l),
              n(
                i,
                s,
                r.gs(null, function (d) {
                  c || ((c = !0), n(this, s, r(d)), (c = !1));
                })
              ),
              s
            );
          };
        }),
        Uc = F(function (e, t) {
          var r = Tt(),
            a = qr().Symbol;
          t.exports = function (n) {
            return Object.defineProperties(n, {
              hasInstance: r("", (a && a.hasInstance) || n("hasInstance")),
              isConcatSpreadable: r(
                "",
                (a && a.isConcatSpreadable) || n("isConcatSpreadable")
              ),
              iterator: r("", (a && a.iterator) || n("iterator")),
              match: r("", (a && a.match) || n("match")),
              replace: r("", (a && a.replace) || n("replace")),
              search: r("", (a && a.search) || n("search")),
              species: r("", (a && a.species) || n("species")),
              split: r("", (a && a.split) || n("split")),
              toPrimitive: r("", (a && a.toPrimitive) || n("toPrimitive")),
              toStringTag: r("", (a && a.toStringTag) || n("toStringTag")),
              unscopables: r("", (a && a.unscopables) || n("unscopables")),
            });
          };
        }),
        $c = F(function (e, t) {
          var r = Tt(),
            a = Mi(),
            n = Object.create(null);
          t.exports = function (i) {
            return Object.defineProperties(i, {
              for: r(function (o) {
                return n[o] ? n[o] : (n[o] = i(String(o)));
              }),
              keyFor: r(function (o) {
                var l;
                a(o);
                for (l in n) if (n[l] === o) return l;
              }),
            });
          };
        }),
        Wc = F(function (e, t) {
          var r = Tt(),
            a = Mi(),
            n = qr().Symbol,
            i = zc(),
            o = Uc(),
            l = $c(),
            u = Object.create,
            s = Object.defineProperties,
            c = Object.defineProperty,
            d,
            f,
            p;
          if (typeof n == "function")
            try {
              String(n()), (p = !0);
            } catch {}
          else n = null;
          (f = function (b) {
            if (this instanceof f)
              throw new TypeError("Symbol is not a constructor");
            return d(b);
          }),
            (t.exports = d =
              function m(b) {
                var D;
                if (this instanceof m)
                  throw new TypeError("Symbol is not a constructor");
                return p
                  ? n(b)
                  : ((D = u(f.prototype)),
                    (b = b === void 0 ? "" : String(b)),
                    s(D, { __description__: r("", b), __name__: r("", i(b)) }));
              }),
            o(d),
            l(d),
            s(f.prototype, {
              constructor: r(d),
              toString: r("", function () {
                return this.__name__;
              }),
            }),
            s(d.prototype, {
              toString: r(function () {
                return "Symbol (" + a(this).__description__ + ")";
              }),
              valueOf: r(function () {
                return a(this);
              }),
            }),
            c(
              d.prototype,
              d.toPrimitive,
              r("", function () {
                var m = a(this);
                return P(m) === "symbol" ? m : m.toString();
              })
            ),
            c(d.prototype, d.toStringTag, r("c", "Symbol")),
            c(f.prototype, d.toStringTag, r("c", d.prototype[d.toStringTag])),
            c(f.prototype, d.toPrimitive, r("c", d.prototype[d.toPrimitive]));
        }),
        Gc = F(function (e, t) {
          t.exports = jc()() ? qr().Symbol : Wc();
        }),
        Yc = F(function (e, t) {
          var r = Object.prototype.toString,
            a = r.call(
              (function () {
                return arguments;
              })()
            );
          t.exports = function (n) {
            return r.call(n) === a;
          };
        }),
        Kc = F(function (e, t) {
          var r = Object.prototype.toString,
            a = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
          t.exports = function (n) {
            return typeof n == "function" && a(r.call(n));
          };
        }),
        Xc = F(function (e, t) {
          var r = Object.prototype.toString,
            a = r.call("");
          t.exports = function (n) {
            return (
              typeof n == "string" ||
              (n &&
                P(n) === "object" &&
                (n instanceof String || r.call(n) === a)) ||
              !1
            );
          };
        }),
        Jc = F(function (e, t) {
          var r = Gc().iterator,
            a = Yc(),
            n = Kc(),
            i = kt(),
            o = Dt(),
            l = Vt(),
            u = Ct(),
            s = Xc(),
            c = Array.isArray,
            d = Function.prototype.call,
            f = { configurable: !0, enumerable: !0, writable: !0, value: null },
            p = Object.defineProperty;
          t.exports = function (m) {
            var b = arguments[1],
              D = arguments[2],
              h,
              g,
              x,
              E,
              C,
              N,
              M,
              H,
              ee,
              q;
            if (
              ((m = Object(l(m))),
              u(b) && o(b),
              !this || this === Array || !n(this))
            ) {
              if (!b) {
                if (a(m))
                  return (
                    (C = m.length),
                    C !== 1
                      ? Array.apply(null, m)
                      : ((E = new Array(1)), (E[0] = m[0]), E)
                  );
                if (c(m)) {
                  for (E = new Array((C = m.length)), g = 0; g < C; ++g)
                    E[g] = m[g];
                  return E;
                }
              }
              E = [];
            } else h = this;
            if (!c(m)) {
              if ((ee = m[r]) !== void 0) {
                for (
                  M = o(ee).call(m), h && (E = new h()), H = M.next(), g = 0;
                  !H.done;

                )
                  (q = b ? d.call(b, D, H.value, g) : H.value),
                    h ? ((f.value = q), p(E, g, f)) : (E[g] = q),
                    (H = M.next()),
                    ++g;
                C = g;
              } else if (s(m)) {
                for (C = m.length, h && (E = new h()), g = 0, x = 0; g < C; ++g)
                  (q = m[g]),
                    g + 1 < C &&
                      ((N = q.charCodeAt(0)),
                      N >= 55296 && N <= 56319 && (q += m[++g])),
                    (q = b ? d.call(b, D, q, x) : q),
                    h ? ((f.value = q), p(E, x, f)) : (E[x] = q),
                    ++x;
                C = x;
              }
            }
            if (C === void 0)
              for (C = i(m.length), h && (E = new h(C)), g = 0; g < C; ++g)
                (q = b ? d.call(b, D, m[g], g) : m[g]),
                  h ? ((f.value = q), p(E, g, f)) : (E[g] = q);
            return h && ((f.value = null), (E.length = C)), E;
          };
        }),
        Ia = F(function (e, t) {
          t.exports = qc()() ? Array.from : Jc();
        }),
        Qc = F(function (e, t) {
          var r = Ia(),
            a = Array.isArray;
          t.exports = function (n) {
            return a(n) ? n : r(n);
          };
        }),
        Zc = F(function (e, t) {
          var r = Qc(),
            a = Ct(),
            n = Dt(),
            i = Array.prototype.slice,
            o;
          (o = function (u) {
            return this.map(function (s, c) {
              return s ? s(u[c]) : u[c];
            }).concat(i.call(u, this.length));
          }),
            (t.exports = function (l) {
              return (
                (l = r(l)),
                l.forEach(function (u) {
                  a(u) && n(u);
                }),
                o.bind(l)
              );
            });
        }),
        ed = F(function (e, t) {
          var r = Dt();
          t.exports = function (a) {
            var n;
            return typeof a == "function"
              ? { set: a, get: a }
              : ((n = { get: r(a.get) }),
                a.set !== void 0
                  ? ((n.set = r(a.set)),
                    a.delete && (n.delete = r(a.delete)),
                    a.clear && (n.clear = r(a.clear)),
                    n)
                  : ((n.set = n.get), n));
          };
        }),
        td = F(function (e, t) {
          var r = Rc(),
            a = Pi(),
            n = Tt(),
            i = Bc().methods,
            o = Zc(),
            l = ed(),
            u = Function.prototype.apply,
            s = Function.prototype.call,
            c = Object.create,
            d = Object.defineProperties,
            f = i.on,
            p = i.emit;
          t.exports = function (m, b, D) {
            var h = c(null),
              g,
              x,
              E,
              C,
              N,
              M,
              H,
              ee,
              q,
              J,
              $,
              te,
              le,
              pe,
              Q;
            return (
              b !== !1 ? (x = b) : isNaN(m.length) ? (x = 1) : (x = m.length),
              D.normalizer &&
                ((J = l(D.normalizer)),
                (E = J.get),
                (C = J.set),
                (N = J.delete),
                (M = J.clear)),
              D.resolvers != null && (Q = o(D.resolvers)),
              E
                ? (pe = a(function (oe) {
                    var O,
                      ce,
                      w = arguments;
                    if (
                      (Q && (w = Q(w)),
                      (O = E(w)),
                      O !== null && hasOwnProperty.call(h, O))
                    )
                      return $ && g.emit("get", O, w, this), h[O];
                    if (
                      (w.length === 1
                        ? (ce = s.call(m, this, w[0]))
                        : (ce = u.call(m, this, w)),
                      O === null)
                    ) {
                      if (((O = E(w)), O !== null))
                        throw r("Circular invocation", "CIRCULAR_INVOCATION");
                      O = C(w);
                    } else if (hasOwnProperty.call(h, O)) throw r("Circular invocation", "CIRCULAR_INVOCATION");
                    return (h[O] = ce), te && g.emit("set", O, null, ce), ce;
                  }, x))
                : b === 0
                ? (pe = function () {
                    var O;
                    if (hasOwnProperty.call(h, "data"))
                      return (
                        $ && g.emit("get", "data", arguments, this), h.data
                      );
                    if (
                      (arguments.length
                        ? (O = u.call(m, this, arguments))
                        : (O = s.call(m, this)),
                      hasOwnProperty.call(h, "data"))
                    )
                      throw r("Circular invocation", "CIRCULAR_INVOCATION");
                    return (
                      (h.data = O), te && g.emit("set", "data", null, O), O
                    );
                  })
                : (pe = function (O) {
                    var ce,
                      w = arguments,
                      z;
                    if (
                      (Q && (w = Q(arguments)),
                      (z = String(w[0])),
                      hasOwnProperty.call(h, z))
                    )
                      return $ && g.emit("get", z, w, this), h[z];
                    if (
                      (w.length === 1
                        ? (ce = s.call(m, this, w[0]))
                        : (ce = u.call(m, this, w)),
                      hasOwnProperty.call(h, z))
                    )
                      throw r("Circular invocation", "CIRCULAR_INVOCATION");
                    return (h[z] = ce), te && g.emit("set", z, null, ce), ce;
                  }),
              (g = {
                original: m,
                memoized: pe,
                profileName: D.profileName,
                get: function (O) {
                  return Q && (O = Q(O)), E ? E(O) : String(O[0]);
                },
                has: function (O) {
                  return hasOwnProperty.call(h, O);
                },
                delete: function (O) {
                  var ce;
                  !hasOwnProperty.call(h, O) ||
                    (N && N(O),
                    (ce = h[O]),
                    delete h[O],
                    le && g.emit("delete", O, ce));
                },
                clear: function () {
                  var O = h;
                  M && M(), (h = c(null)), g.emit("clear", O);
                },
                on: function (O, ce) {
                  return (
                    O === "get"
                      ? ($ = !0)
                      : O === "set"
                      ? (te = !0)
                      : O === "delete" && (le = !0),
                    f.call(this, O, ce)
                  );
                },
                emit: p,
                updateEnv: function () {
                  m = g.original;
                },
              }),
              E
                ? (H = a(function (oe) {
                    var O,
                      ce = arguments;
                    Q && (ce = Q(ce)), (O = E(ce)), O !== null && g.delete(O);
                  }, x))
                : b === 0
                ? (H = function () {
                    return g.delete("data");
                  })
                : (H = function (O) {
                    return Q && (O = Q(arguments)[0]), g.delete(O);
                  }),
              (ee = a(function () {
                var oe,
                  O = arguments;
                return b === 0
                  ? h.data
                  : (Q && (O = Q(O)),
                    E ? (oe = E(O)) : (oe = String(O[0])),
                    h[oe]);
              })),
              (q = a(function () {
                var oe,
                  O = arguments;
                return b === 0
                  ? g.has("data")
                  : (Q && (O = Q(O)),
                    E ? (oe = E(O)) : (oe = String(O[0])),
                    oe === null ? !1 : g.has(oe));
              })),
              d(pe, {
                __memoized__: n(!0),
                delete: n(H),
                clear: n(g.clear),
                _get: n(ee),
                _has: n(q),
              }),
              g
            );
          };
        }),
        rd = F(function (e, t) {
          var r = Dt(),
            a = Br(),
            n = Rt(),
            i = td(),
            o = Si();
          t.exports = function l(u) {
            var s, c, d;
            if ((r(u), (s = Object(arguments[1])), s.async && s.promise))
              throw new Error(
                "Options 'async' and 'promise' cannot be used together"
              );
            return hasOwnProperty.call(u, "__memoized__") && !s.force
              ? u
              : ((c = o(s.length, u.length, s.async && n.async)),
                (d = i(u, c, s)),
                a(n, function (f, p) {
                  s[p] && f(s[p], d, s);
                }),
                l.__profiler__ && l.__profiler__(d),
                d.updateEnv(),
                d.memoized);
          };
        }),
        ad = F(function (e, t) {
          t.exports = function (r) {
            var a,
              n,
              i = r.length;
            if (!i) return "";
            for (a = String(r[(n = 0)]); --i; ) a += "" + r[++n];
            return a;
          };
        }),
        nd = F(function (e, t) {
          t.exports = function (r) {
            return r
              ? function (a) {
                  for (var n = String(a[0]), i = 0, o = r; --o; )
                    n += "" + a[++i];
                  return n;
                }
              : function () {
                  return "";
                };
          };
        }),
        id = F(function (e, t) {
          t.exports = function () {
            var r = Number.isNaN;
            return typeof r != "function" ? !1 : !r({}) && r(NaN) && !r(34);
          };
        }),
        od = F(function (e, t) {
          t.exports = function (r) {
            return r !== r;
          };
        }),
        ld = F(function (e, t) {
          t.exports = id()() ? Number.isNaN : od();
        }),
        Pa = F(function (e, t) {
          var r = ld(),
            a = kt(),
            n = Vt(),
            i = Array.prototype.indexOf,
            o = Object.prototype.hasOwnProperty,
            l = Math.abs,
            u = Math.floor;
          t.exports = function (s) {
            var c, d, f, p;
            if (!r(s)) return i.apply(this, arguments);
            for (
              d = a(n(this).length),
                f = arguments[1],
                isNaN(f)
                  ? (f = 0)
                  : f >= 0
                  ? (f = u(f))
                  : (f = a(this.length) - u(l(f))),
                c = f;
              c < d;
              ++c
            )
              if (o.call(this, c) && ((p = this[c]), r(p))) return c;
            return -1;
          };
        }),
        ud = F(function (e, t) {
          var r = Pa(),
            a = Object.create;
          t.exports = function () {
            var n = 0,
              i = [],
              o = a(null);
            return {
              get: function (u) {
                var s = 0,
                  c = i,
                  d,
                  f = u.length;
                if (f === 0) return c[f] || null;
                if ((c = c[f])) {
                  for (; s < f - 1; ) {
                    if (((d = r.call(c[0], u[s])), d === -1)) return null;
                    (c = c[1][d]), ++s;
                  }
                  return (
                    (d = r.call(c[0], u[s])), d === -1 ? null : c[1][d] || null
                  );
                }
                return null;
              },
              set: function (u) {
                var s = 0,
                  c = i,
                  d,
                  f = u.length;
                if (f === 0) c[f] = ++n;
                else {
                  for (c[f] || (c[f] = [[], []]), c = c[f]; s < f - 1; )
                    (d = r.call(c[0], u[s])),
                      d === -1 &&
                        ((d = c[0].push(u[s]) - 1), c[1].push([[], []])),
                      (c = c[1][d]),
                      ++s;
                  (d = r.call(c[0], u[s])),
                    d === -1 && (d = c[0].push(u[s]) - 1),
                    (c[1][d] = ++n);
                }
                return (o[n] = u), n;
              },
              delete: function (u) {
                var s = 0,
                  c = i,
                  d,
                  f = o[u],
                  p = f.length,
                  m = [];
                if (p === 0) delete c[p];
                else if ((c = c[p])) {
                  for (; s < p - 1; ) {
                    if (((d = r.call(c[0], f[s])), d === -1)) return;
                    m.push(c, d), (c = c[1][d]), ++s;
                  }
                  if (((d = r.call(c[0], f[s])), d === -1)) return;
                  for (
                    u = c[1][d], c[0].splice(d, 1), c[1].splice(d, 1);
                    !c[0].length && m.length;

                  )
                    (d = m.pop()),
                      (c = m.pop()),
                      c[0].splice(d, 1),
                      c[1].splice(d, 1);
                }
                delete o[u];
              },
              clear: function () {
                (i = []), (o = a(null));
              },
            };
          };
        }),
        sd = F(function (e, t) {
          var r = Pa();
          t.exports = function () {
            var a = 0,
              n = [],
              i = [];
            return {
              get: function (l) {
                var u = r.call(n, l[0]);
                return u === -1 ? null : i[u];
              },
              set: function (l) {
                return n.push(l[0]), i.push(++a), a;
              },
              delete: function (l) {
                var u = r.call(i, l);
                u !== -1 && (n.splice(u, 1), i.splice(u, 1));
              },
              clear: function () {
                (n = []), (i = []);
              },
            };
          };
        }),
        cd = F(function (e, t) {
          var r = Pa(),
            a = Object.create;
          t.exports = function (n) {
            var i = 0,
              o = [[], []],
              l = a(null);
            return {
              get: function (s) {
                for (var c = 0, d = o, f; c < n - 1; ) {
                  if (((f = r.call(d[0], s[c])), f === -1)) return null;
                  (d = d[1][f]), ++c;
                }
                return (
                  (f = r.call(d[0], s[c])), f === -1 ? null : d[1][f] || null
                );
              },
              set: function (s) {
                for (var c = 0, d = o, f; c < n - 1; )
                  (f = r.call(d[0], s[c])),
                    f === -1 &&
                      ((f = d[0].push(s[c]) - 1), d[1].push([[], []])),
                    (d = d[1][f]),
                    ++c;
                return (
                  (f = r.call(d[0], s[c])),
                  f === -1 && (f = d[0].push(s[c]) - 1),
                  (d[1][f] = ++i),
                  (l[i] = s),
                  i
                );
              },
              delete: function (s) {
                for (var c = 0, d = o, f, p = [], m = l[s]; c < n - 1; ) {
                  if (((f = r.call(d[0], m[c])), f === -1)) return;
                  p.push(d, f), (d = d[1][f]), ++c;
                }
                if (((f = r.call(d[0], m[c])), f !== -1)) {
                  for (
                    s = d[1][f], d[0].splice(f, 1), d[1].splice(f, 1);
                    !d[0].length && p.length;

                  )
                    (f = p.pop()),
                      (d = p.pop()),
                      d[0].splice(f, 1),
                      d[1].splice(f, 1);
                  delete l[s];
                }
              },
              clear: function () {
                (o = [[], []]), (l = a(null));
              },
            };
          };
        }),
        Bi = F(function (e, t) {
          var r = Dt(),
            a = Br(),
            n = Function.prototype.call;
          t.exports = function (i, o) {
            var l = {},
              u = arguments[2];
            return (
              r(o),
              a(i, function (s, c, d, f) {
                l[c] = n.call(o, u, s, c, d, f);
              }),
              l
            );
          };
        }),
        Na = F(function (e, t) {
          var r = function (i) {
              if (typeof i != "function")
                throw new TypeError(i + " is not a function");
              return i;
            },
            a = function (i) {
              var o = R.createTextNode(""),
                l,
                u,
                s = 0;
              return (
                new i(function () {
                  var c;
                  if (l) u && (l = u.concat(l));
                  else {
                    if (!u) return;
                    l = u;
                  }
                  if (((u = l), (l = null), typeof u == "function")) {
                    (c = u), (u = null), c();
                    return;
                  }
                  for (o.data = s = ++s % 2; u; )
                    (c = u.shift()), u.length || (u = null), c();
                }).observe(o, { characterData: !0 }),
                function (c) {
                  if ((r(c), l)) {
                    typeof l == "function" ? (l = [l, c]) : l.push(c);
                    return;
                  }
                  (l = c), (o.data = s = ++s % 2);
                }
              );
            };
          t.exports = (function () {
            if (
              (typeof process > "u" ? "undefined" : P(process)) === "object" &&
              process &&
              typeof process.nextTick == "function"
            )
              return process.nextTick;
            if (typeof queueMicrotask == "function")
              return function (n) {
                queueMicrotask(r(n));
              };
            if ((typeof R > "u" ? "undefined" : P(R)) === "object" && R) {
              if (typeof MutationObserver == "function")
                return a(MutationObserver);
              if (typeof WebKitMutationObserver == "function")
                return a(WebKitMutationObserver);
            }
            return typeof setImmediate == "function"
              ? function (n) {
                  setImmediate(r(n));
                }
              : typeof setTimeout == "function" ||
                (typeof setTimeout > "u" ? "undefined" : P(setTimeout)) ===
                  "object"
              ? function (n) {
                  setTimeout(r(n), 0);
                }
              : null;
          })();
        }),
        dd = F(function () {
          var e = Ia(),
            t = Bi(),
            r = Ii(),
            a = Pi(),
            n = Na(),
            i = Array.prototype.slice,
            o = Function.prototype.apply,
            l = Object.create;
          Rt().async = function (u, s) {
            var c = l(null),
              d = l(null),
              f = s.memoized,
              p = s.original,
              m,
              b,
              D;
            s.memoized = a(function (h) {
              var g = arguments,
                x = g[g.length - 1];
              return (
                typeof x == "function" && ((m = x), (g = i.call(g, 0, -1))),
                f.apply((b = this), (D = g))
              );
            }, f);
            try {
              r(s.memoized, f);
            } catch {}
            s.on("get", function (h) {
              var g, x, E;
              if (!!m) {
                if (c[h]) {
                  typeof c[h] == "function" ? (c[h] = [c[h], m]) : c[h].push(m),
                    (m = null);
                  return;
                }
                (g = m),
                  (x = b),
                  (E = D),
                  (m = b = D = null),
                  n(function () {
                    var C;
                    hasOwnProperty.call(d, h)
                      ? ((C = d[h]),
                        s.emit("getasync", h, E, x),
                        o.call(g, C.context, C.args))
                      : ((m = g), (b = x), (D = E), f.apply(x, E));
                  });
              }
            }),
              (s.original = function () {
                var h, g, x, E;
                return m
                  ? ((h = e(arguments)),
                    (g = function C(N) {
                      var M,
                        H,
                        ee = C.id;
                      if (ee == null) {
                        n(o.bind(C, this, arguments));
                        return;
                      }
                      if ((delete C.id, (M = c[ee]), delete c[ee], !!M))
                        return (
                          (H = e(arguments)),
                          s.has(ee) &&
                            (N
                              ? s.delete(ee)
                              : ((d[ee] = { context: this, args: H }),
                                s.emit(
                                  "setasync",
                                  ee,
                                  typeof M == "function" ? 1 : M.length
                                ))),
                          typeof M == "function"
                            ? (E = o.call(M, this, H))
                            : M.forEach(function (q) {
                                E = o.call(q, this, H);
                              }, this),
                          E
                        );
                    }),
                    (x = m),
                    (m = b = D = null),
                    h.push(g),
                    (E = o.call(p, this, h)),
                    (g.cb = x),
                    (m = g),
                    E)
                  : o.call(p, this, arguments);
              }),
              s.on("set", function (h) {
                if (!m) {
                  s.delete(h);
                  return;
                }
                c[h]
                  ? typeof c[h] == "function"
                    ? (c[h] = [c[h], m.cb])
                    : c[h].push(m.cb)
                  : (c[h] = m.cb),
                  delete m.cb,
                  (m.id = h),
                  (m = null);
              }),
              s.on("delete", function (h) {
                var g;
                hasOwnProperty.call(c, h) ||
                  !d[h] ||
                  ((g = d[h]),
                  delete d[h],
                  s.emit("deleteasync", h, i.call(g.args, 1)));
              }),
              s.on("clear", function () {
                var h = d;
                (d = l(null)),
                  s.emit(
                    "clearasync",
                    t(h, function (g) {
                      return i.call(g.args, 1);
                    })
                  );
              });
          };
        }),
        fd = F(function (e, t) {
          var r = Array.prototype.forEach,
            a = Object.create;
          t.exports = function (n) {
            var i = a(null);
            return (
              r.call(arguments, function (o) {
                i[o] = !0;
              }),
              i
            );
          };
        }),
        qi = F(function (e, t) {
          t.exports = function (r) {
            return typeof r == "function";
          };
        }),
        pd = F(function (e, t) {
          var r = qi();
          t.exports = function (a) {
            try {
              return a && r(a.toString) ? a.toString() : String(a);
            } catch {
              throw new TypeError("Passed argument cannot be stringifed");
            }
          };
        }),
        md = F(function (e, t) {
          var r = Vt(),
            a = pd();
          t.exports = function (n) {
            return a(r(n));
          };
        }),
        hd = F(function (e, t) {
          var r = qi();
          t.exports = function (a) {
            try {
              return a && r(a.toString) ? a.toString() : String(a);
            } catch {
              return "<Non-coercible to string value>";
            }
          };
        }),
        vd = F(function (e, t) {
          var r = hd(),
            a = /[\n\r\u2028\u2029]/g;
          t.exports = function (n) {
            var i = r(n);
            return (
              i.length > 100 && (i = i.slice(0, 99) + "\u2026"),
              (i = i.replace(a, function (o) {
                return JSON.stringify(o).slice(1, -1);
              })),
              i
            );
          };
        }),
        Li = F(function (e, t) {
          (t.exports = r), (t.exports.default = r);
          function r(a) {
            return (
              !!a &&
              (P(a) === "object" || typeof a == "function") &&
              typeof a.then == "function"
            );
          }
        }),
        gd = F(function () {
          var e = Bi(),
            t = fd(),
            r = md(),
            a = vd(),
            n = Li(),
            i = Na(),
            o = Object.create,
            l = t("then", "then:finally", "done", "done:finally");
          Rt().promise = function (u, s) {
            var c = o(null),
              d = o(null),
              f = o(null);
            if (u === !0) u = null;
            else if (((u = r(u)), !l[u]))
              throw new TypeError("'" + a(u) + "' is not valid promise mode");
            s.on("set", function (p, m, b) {
              var D = !1;
              if (!n(b)) {
                (d[p] = b), s.emit("setasync", p, 1);
                return;
              }
              (c[p] = 1), (f[p] = b);
              var h = function (N) {
                  var M = c[p];
                  if (D)
                    throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
                  !M || (delete c[p], (d[p] = N), s.emit("setasync", p, M));
                },
                g = function () {
                  (D = !0), c[p] && (delete c[p], delete f[p], s.delete(p));
                },
                x = u;
              if ((x || (x = "then"), x === "then")) {
                var E = function () {
                  i(g);
                };
                (b = b.then(function (C) {
                  i(h.bind(this, C));
                }, E)),
                  typeof b.finally == "function" && b.finally(E);
              } else if (x === "done") {
                if (typeof b.done != "function")
                  throw new Error(
                    "Memoizee error: Retrieved promise does not implement 'done' in 'done' mode"
                  );
                b.done(h, g);
              } else if (x === "done:finally") {
                if (typeof b.done != "function")
                  throw new Error(
                    "Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode"
                  );
                if (typeof b.finally != "function")
                  throw new Error(
                    "Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode"
                  );
                b.done(h), b.finally(g);
              }
            }),
              s.on("get", function (p, m, b) {
                var D;
                if (c[p]) {
                  ++c[p];
                  return;
                }
                D = f[p];
                var h = function () {
                  s.emit("getasync", p, m, b);
                };
                n(D)
                  ? typeof D.done == "function"
                    ? D.done(h)
                    : D.then(function () {
                        i(h);
                      })
                  : h();
              }),
              s.on("delete", function (p) {
                if ((delete f[p], c[p])) {
                  delete c[p];
                  return;
                }
                if (!!hasOwnProperty.call(d, p)) {
                  var m = d[p];
                  delete d[p], s.emit("deleteasync", p, [m]);
                }
              }),
              s.on("clear", function () {
                var p = d;
                (d = o(null)),
                  (c = o(null)),
                  (f = o(null)),
                  s.emit(
                    "clearasync",
                    e(p, function (m) {
                      return [m];
                    })
                  );
              });
          };
        }),
        bd = F(function () {
          var e = Dt(),
            t = Br(),
            r = Rt(),
            a = Function.prototype.apply;
          r.dispose = function (n, i, o) {
            var l;
            if ((e(n), (o.async && r.async) || (o.promise && r.promise))) {
              i.on(
                "deleteasync",
                (l = function (s, c) {
                  a.call(n, null, c);
                })
              ),
                i.on("clearasync", function (u) {
                  t(u, function (s, c) {
                    l(c, s);
                  });
                });
              return;
            }
            i.on(
              "delete",
              (l = function (s, c) {
                n(c);
              })
            ),
              i.on("clear", function (u) {
                t(u, function (s, c) {
                  l(c, s);
                });
              });
          };
        }),
        yd = F(function (e, t) {
          t.exports = 2147483647;
        }),
        Dd = F(function (e, t) {
          var r = kt(),
            a = yd();
          t.exports = function (n) {
            if (((n = r(n)), n > a))
              throw new TypeError(n + " exceeds maximum possible timeout");
            return n;
          };
        }),
        wd = F(function () {
          var e = Ia(),
            t = Br(),
            r = Na(),
            a = Li(),
            n = Dd(),
            i = Rt(),
            o = Function.prototype,
            l = Math.max,
            u = Math.min,
            s = Object.create;
          i.maxAge = function (c, d, f) {
            var p, m, b, D;
            (c = n(c)),
              c &&
                ((p = s(null)),
                (m =
                  (f.async && i.async) || (f.promise && i.promise)
                    ? "async"
                    : ""),
                d.on("set" + m, function (h) {
                  (p[h] = setTimeout(function () {
                    d.delete(h);
                  }, c)),
                    typeof p[h].unref == "function" && p[h].unref(),
                    D &&
                      (D[h] && D[h] !== "nextTick" && clearTimeout(D[h]),
                      (D[h] = setTimeout(function () {
                        delete D[h];
                      }, b)),
                      typeof D[h].unref == "function" && D[h].unref());
                }),
                d.on("delete" + m, function (h) {
                  clearTimeout(p[h]),
                    delete p[h],
                    D &&
                      (D[h] !== "nextTick" && clearTimeout(D[h]), delete D[h]);
                }),
                f.preFetch &&
                  (f.preFetch === !0 || isNaN(f.preFetch)
                    ? (b = 0.333)
                    : (b = l(u(Number(f.preFetch), 1), 0)),
                  b &&
                    ((D = {}),
                    (b = (1 - b) * c),
                    d.on("get" + m, function (h, g, x) {
                      D[h] ||
                        ((D[h] = "nextTick"),
                        r(function () {
                          var E;
                          D[h] === "nextTick" &&
                            (delete D[h],
                            d.delete(h),
                            f.async && ((g = e(g)), g.push(o)),
                            (E = d.memoized.apply(x, g)),
                            f.promise &&
                              a(E) &&
                              (typeof E.done == "function"
                                ? E.done(o, o)
                                : E.then(o, o)));
                        }));
                    }))),
                d.on("clear" + m, function () {
                  t(p, function (h) {
                    clearTimeout(h);
                  }),
                    (p = {}),
                    D &&
                      (t(D, function (h) {
                        h !== "nextTick" && clearTimeout(h);
                      }),
                      (D = {}));
                }));
          };
        }),
        _d = F(function (e, t) {
          var r = kt(),
            a = Object.create,
            n = Object.prototype.hasOwnProperty;
          t.exports = function (i) {
            var o = 0,
              l = 1,
              u = a(null),
              s = a(null),
              c = 0,
              d;
            return (
              (i = r(i)),
              {
                hit: function (p) {
                  var m = s[p],
                    b = ++c;
                  if (((u[b] = p), (s[p] = b), !m))
                    return ++o, o <= i ? void 0 : ((p = u[l]), d(p), p);
                  if ((delete u[m], l === m)) for (; !n.call(u, ++l); );
                },
                delete: (d = function (p) {
                  var m = s[p];
                  if (!!m && (delete u[m], delete s[p], --o, l === m)) {
                    if (!o) {
                      (c = 0), (l = 1);
                      return;
                    }
                    for (; !n.call(u, ++l); );
                  }
                }),
                clear: function () {
                  (o = 0), (l = 1), (u = a(null)), (s = a(null)), (c = 0);
                },
              }
            );
          };
        }),
        xd = F(function () {
          var e = kt(),
            t = _d(),
            r = Rt();
          r.max = function (a, n, i) {
            var o, l, u;
            (a = e(a)),
              a &&
                ((l = t(a)),
                (o =
                  (i.async && r.async) || (i.promise && r.promise)
                    ? "async"
                    : ""),
                n.on(
                  "set" + o,
                  (u = function (c) {
                    (c = l.hit(c)), c !== void 0 && n.delete(c);
                  })
                ),
                n.on("get" + o, u),
                n.on("delete" + o, l.delete),
                n.on("clear" + o, l.clear));
          };
        }),
        Ed = F(function () {
          var e = Tt(),
            t = Rt(),
            r = Object.create,
            a = Object.defineProperties;
          t.refCounter = function (n, i, o) {
            var l, u;
            (l = r(null)),
              (u =
                (o.async && t.async) || (o.promise && t.promise)
                  ? "async"
                  : ""),
              i.on("set" + u, function (s, c) {
                l[s] = c || 1;
              }),
              i.on("get" + u, function (s) {
                ++l[s];
              }),
              i.on("delete" + u, function (s) {
                delete l[s];
              }),
              i.on("clear" + u, function () {
                l = {};
              }),
              a(i.memoized, {
                deleteRef: e(function () {
                  var s = i.get(arguments);
                  return s === null || !l[s]
                    ? null
                    : --l[s]
                    ? !1
                    : (i.delete(s), !0);
                }),
                getRefCount: e(function () {
                  var s = i.get(arguments);
                  return s === null || !l[s] ? 0 : l[s];
                }),
              });
          };
        }),
        Vi = F(function (e, t) {
          var r = Ti(),
            a = Si(),
            n = rd();
          t.exports = function (i) {
            var o = r(arguments[1]),
              l;
            return (
              o.normalizer ||
                ((l = o.length = a(o.length, i.length, o.async)),
                l !== 0 &&
                  (o.primitive
                    ? l === !1
                      ? (o.normalizer = ad())
                      : l > 1 && (o.normalizer = nd()(l))
                    : l === !1
                    ? (o.normalizer = ud()())
                    : l === 1
                    ? (o.normalizer = sd()())
                    : (o.normalizer = cd()(l)))),
              o.async && dd(),
              o.promise && gd(),
              o.dispose && bd(),
              o.maxAge && wd(),
              o.max && xd(),
              o.refCounter && Ed(),
              n(i, o)
            );
          };
        }),
        ji = F(function (e, t) {
          (function () {
            var r = {
              name: "doT",
              version: "1.1.1",
              templateSettings: {
                evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
                interpolate: /\{\{=([\s\S]+?)\}\}/g,
                encode: /\{\{!([\s\S]+?)\}\}/g,
                use: /\{\{#([\s\S]+?)\}\}/g,
                useParams:
                  /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
                define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
                defineParams: /^\s*([\w$]+):([\s\S]+)/,
                conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
                iterate:
                  /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
                varname: "it",
                strip: !0,
                append: !0,
                selfcontained: !1,
                doNotSkipEncoded: !1,
              },
              template: void 0,
              compile: void 0,
              log: !0,
            };
            (function () {
              if (
                (typeof globalThis > "u" ? "undefined" : P(globalThis)) !==
                "object"
              )
                try {
                  Object.defineProperty(Object.prototype, "__magic__", {
                    get: function () {
                      return this;
                    },
                    configurable: !0,
                  }),
                    (__magic__.globalThis = __magic__),
                    delete Object.prototype.__magic__;
                } catch {
                  y.globalThis = (function () {
                    if (typeof self < "u") return self;
                    if (typeof y < "u") return y;
                    if (typeof Je < "u") return Je;
                    if (typeof this < "u") return this;
                    throw new Error("Unable to locate global `this`");
                  })();
                }
            })(),
              (r.encodeHTMLSource = function (l) {
                var u = {
                    "&": "&#38;",
                    "<": "&#60;",
                    ">": "&#62;",
                    '"': "&#34;",
                    "'": "&#39;",
                    "/": "&#47;",
                  },
                  s = l ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                return function (c) {
                  return c
                    ? c.toString().replace(s, function (d) {
                        return u[d] || d;
                      })
                    : "";
                };
              }),
              typeof t < "u" && t.exports
                ? (t.exports = r)
                : (globalThis.doT = r);
            var a = {
                append: {
                  start: "'+(",
                  end: ")+'",
                  startencode: "'+encodeHTML(",
                },
                split: {
                  start: "';out+=(",
                  end: ");out+='",
                  startencode: "';out+=encodeHTML(",
                },
              },
              n = /$^/;
            function i(l, u, s) {
              return (typeof u == "string" ? u : u.toString())
                .replace(l.define || n, function (c, d, f, p) {
                  return (
                    d.indexOf("def.") === 0 && (d = d.substring(4)),
                    d in s ||
                      (f === ":"
                        ? (l.defineParams &&
                            p.replace(l.defineParams, function (m, b, D) {
                              s[d] = { arg: b, text: D };
                            }),
                          d in s || (s[d] = p))
                        : new Function("def", "def['" + d + "']=" + p)(s)),
                    ""
                  );
                })
                .replace(l.use || n, function (c, d) {
                  l.useParams &&
                    (d = d.replace(l.useParams, function (p, m, b, D) {
                      if (s[b] && s[b].arg && D) {
                        var h = (b + ":" + D).replace(/'|\\/g, "_");
                        return (
                          (s.__exp = s.__exp || {}),
                          (s.__exp[h] = s[b].text.replace(
                            new RegExp(
                              "(^|[^\\w$])" + s[b].arg + "([^\\w$])",
                              "g"
                            ),
                            "$1" + D + "$2"
                          )),
                          m + "def.__exp['" + h + "']"
                        );
                      }
                    }));
                  var f = new Function("def", "return " + d)(s);
                  return f && i(l, f, s);
                });
            }
            function o(l) {
              return l.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
            }
            (r.template = function (l, u, s) {
              u = u || r.templateSettings;
              var c = u.append ? a.append : a.split,
                d,
                f = 0,
                p,
                m = u.use || u.define ? i(u, l, s || {}) : l;
              (m = (
                "var out='" +
                (u.strip
                  ? m
                      .replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ")
                      .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "")
                  : m
                )
                  .replace(/'|\\/g, "\\$&")
                  .replace(u.interpolate || n, function (b, D) {
                    return c.start + o(D) + c.end;
                  })
                  .replace(u.encode || n, function (b, D) {
                    return (d = !0), c.startencode + o(D) + c.end;
                  })
                  .replace(u.conditional || n, function (b, D, h) {
                    return D
                      ? h
                        ? "';}else if(" + o(h) + "){out+='"
                        : "';}else{out+='"
                      : h
                      ? "';if(" + o(h) + "){out+='"
                      : "';}out+='";
                  })
                  .replace(u.iterate || n, function (b, D, h, g) {
                    return D
                      ? ((f += 1),
                        (p = g || "i" + f),
                        (D = o(D)),
                        "';var arr" +
                          f +
                          "=" +
                          D +
                          ";if(arr" +
                          f +
                          "){var " +
                          h +
                          "," +
                          p +
                          "=-1,l" +
                          f +
                          "=arr" +
                          f +
                          ".length-1;while(" +
                          p +
                          "<l" +
                          f +
                          "){" +
                          h +
                          "=arr" +
                          f +
                          "[" +
                          p +
                          "+=1];out+='")
                      : "';} } out+='";
                  })
                  .replace(u.evaluate || n, function (b, D) {
                    return "';" + o(D) + "out+='";
                  }) +
                "';return out;"
              )
                .replace(/\n/g, "\\n")
                .replace(/\t/g, "\\t")
                .replace(/\r/g, "\\r")
                .replace(/(\s|;|\}|^|\{)out\+='';/g, "$1")
                .replace(/\+''/g, "")),
                d &&
                  (!u.selfcontained &&
                    globalThis &&
                    !globalThis._encodeHTML &&
                    (globalThis._encodeHTML = r.encodeHTMLSource(
                      u.doNotSkipEncoded
                    )),
                  (m =
                    "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" +
                    r.encodeHTMLSource.toString() +
                    "(" +
                    (u.doNotSkipEncoded || "") +
                    "));" +
                    m));
              try {
                return new Function(u.varname, m);
              } catch (b) {
                throw (
                  (typeof console < "u" &&
                    console.log("Could not create a template function: " + m),
                  b)
                );
              }
            }),
              (r.compile = function (l, u) {
                return r.template(l, null, u);
              });
          })();
        }),
        Ad = F(function (e, t) {
          (function (r, a) {
            P(e) === "object" && typeof t < "u"
              ? (t.exports = a())
              : (r.ES6Promise = a());
          })(e, function () {
            function r(_) {
              var k = P(_);
              return _ !== null && (k === "object" || k === "function");
            }
            function a(_) {
              return typeof _ == "function";
            }
            var n = void 0;
            Array.isArray
              ? (n = Array.isArray)
              : (n = function (k) {
                  return Object.prototype.toString.call(k) === "[object Array]";
                });
            var i = n,
              o = 0,
              l = void 0,
              u = void 0,
              s = function (k, T) {
                (N[o] = k),
                  (N[o + 1] = T),
                  (o += 2),
                  o === 2 && (u ? u(M) : ee());
              };
            function c(_) {
              u = _;
            }
            function d(_) {
              s = _;
            }
            var f = typeof y < "u" ? y : void 0,
              p = f || {},
              m = p.MutationObserver || p.WebKitMutationObserver,
              b =
                typeof self > "u" &&
                typeof process < "u" &&
                {}.toString.call(process) === "[object process]",
              D =
                typeof Uint8ClampedArray < "u" &&
                typeof importScripts < "u" &&
                typeof MessageChannel < "u";
            function h() {
              return function () {
                return process.nextTick(M);
              };
            }
            function g() {
              return typeof l < "u"
                ? function () {
                    l(M);
                  }
                : C();
            }
            function x() {
              var _ = 0,
                k = new m(M),
                T = R.createTextNode("");
              return (
                k.observe(T, { characterData: !0 }),
                function () {
                  T.data = _ = ++_ % 2;
                }
              );
            }
            function E() {
              var _ = new MessageChannel();
              return (
                (_.port1.onmessage = M),
                function () {
                  return _.port2.postMessage(0);
                }
              );
            }
            function C() {
              var _ = setTimeout;
              return function () {
                return _(M, 1);
              };
            }
            var N = new Array(1e3);
            function M() {
              for (var _ = 0; _ < o; _ += 2) {
                var k = N[_],
                  T = N[_ + 1];
                k(T), (N[_] = void 0), (N[_ + 1] = void 0);
              }
              o = 0;
            }
            function H() {
              try {
                var _ = Function("return this")().require("vertx");
                return (l = _.runOnLoop || _.runOnContext), g();
              } catch {
                return C();
              }
            }
            var ee = void 0;
            b
              ? (ee = h())
              : m
              ? (ee = x())
              : D
              ? (ee = E())
              : f === void 0
              ? (ee = H())
              : (ee = C());
            function q(_, k) {
              var T = this,
                V = new this.constructor(te);
              V[$] === void 0 && Te(V);
              var Y = T._state;
              if (Y) {
                var re = arguments[Y - 1];
                s(function () {
                  return xe(Y, V, re, T._result);
                });
              } else we(T, V, _, k);
              return V;
            }
            function J(_) {
              var k = this;
              if (_ && P(_) === "object" && _.constructor === k) return _;
              var T = new k(te);
              return W(T, _), T;
            }
            var $ = Math.random().toString(36).substring(2);
            function te() {}
            var le = void 0,
              pe = 1,
              Q = 2;
            function oe() {
              return new TypeError("You cannot resolve a promise with itself");
            }
            function O() {
              return new TypeError(
                "A promises callback cannot return that same promise."
              );
            }
            function ce(_, k, T, V) {
              try {
                _.call(k, T, V);
              } catch (Y) {
                return Y;
              }
            }
            function w(_, k, T) {
              s(function (V) {
                var Y = !1,
                  re = ce(
                    T,
                    k,
                    function (Ne) {
                      Y || ((Y = !0), k !== Ne ? W(V, Ne) : U(V, Ne));
                    },
                    function (Ne) {
                      Y || ((Y = !0), j(V, Ne));
                    },
                    "Settle: " + (V._label || " unknown promise")
                  );
                !Y && re && ((Y = !0), j(V, re));
              }, _);
            }
            function z(_, k) {
              k._state === pe
                ? U(_, k._result)
                : k._state === Q
                ? j(_, k._result)
                : we(
                    k,
                    void 0,
                    function (T) {
                      return W(_, T);
                    },
                    function (T) {
                      return j(_, T);
                    }
                  );
            }
            function I(_, k, T) {
              k.constructor === _.constructor &&
              T === q &&
              k.constructor.resolve === J
                ? z(_, k)
                : T === void 0
                ? U(_, k)
                : a(T)
                ? w(_, k, T)
                : U(_, k);
            }
            function W(_, k) {
              if (_ === k) j(_, oe());
              else if (r(k)) {
                var T = void 0;
                try {
                  T = k.then;
                } catch (V) {
                  j(_, V);
                  return;
                }
                I(_, k, T);
              } else U(_, k);
            }
            function he(_) {
              _._onerror && _._onerror(_._result), _e(_);
            }
            function U(_, k) {
              _._state === le &&
                ((_._result = k),
                (_._state = pe),
                _._subscribers.length !== 0 && s(_e, _));
            }
            function j(_, k) {
              _._state === le && ((_._state = Q), (_._result = k), s(he, _));
            }
            function we(_, k, T, V) {
              var Y = _._subscribers,
                re = Y.length;
              (_._onerror = null),
                (Y[re] = k),
                (Y[re + pe] = T),
                (Y[re + Q] = V),
                re === 0 && _._state && s(_e, _);
            }
            function _e(_) {
              var k = _._subscribers,
                T = _._state;
              if (k.length !== 0) {
                for (
                  var V = void 0, Y = void 0, re = _._result, Ne = 0;
                  Ne < k.length;
                  Ne += 3
                )
                  (V = k[Ne]), (Y = k[Ne + T]), V ? xe(T, V, Y, re) : Y(re);
                _._subscribers.length = 0;
              }
            }
            function xe(_, k, T, V) {
              var Y = a(T),
                re = void 0,
                Ne = void 0,
                lr = !0;
              if (Y) {
                try {
                  re = T(V);
                } catch (Ra) {
                  (lr = !1), (Ne = Ra);
                }
                if (k === re) {
                  j(k, O());
                  return;
                }
              } else re = V;
              k._state !== le ||
                (Y && lr
                  ? W(k, re)
                  : lr === !1
                  ? j(k, Ne)
                  : _ === pe
                  ? U(k, re)
                  : _ === Q && j(k, re));
            }
            function Ie(_, k) {
              try {
                k(
                  function (V) {
                    W(_, V);
                  },
                  function (V) {
                    j(_, V);
                  }
                );
              } catch (T) {
                j(_, T);
              }
            }
            var qe = 0;
            function We() {
              return qe++;
            }
            function Te(_) {
              (_[$] = qe++),
                (_._state = void 0),
                (_._result = void 0),
                (_._subscribers = []);
            }
            function ot() {
              return new Error("Array Methods must be provided an Array");
            }
            var Le = (function () {
              function _(k, T) {
                (this._instanceConstructor = k),
                  (this.promise = new k(te)),
                  this.promise[$] || Te(this.promise),
                  i(T)
                    ? ((this.length = T.length),
                      (this._remaining = T.length),
                      (this._result = new Array(this.length)),
                      this.length === 0
                        ? U(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(T),
                          this._remaining === 0 &&
                            U(this.promise, this._result)))
                    : j(this.promise, ot());
              }
              return (
                (_.prototype._enumerate = function (T) {
                  for (var V = 0; this._state === le && V < T.length; V++)
                    this._eachEntry(T[V], V);
                }),
                (_.prototype._eachEntry = function (T, V) {
                  var Y = this._instanceConstructor,
                    re = Y.resolve;
                  if (re === J) {
                    var Ne = void 0,
                      lr = void 0,
                      Ra = !1;
                    try {
                      Ne = T.then;
                    } catch (_i) {
                      (Ra = !0), (lr = _i);
                    }
                    if (Ne === q && T._state !== le)
                      this._settledAt(T._state, V, T._result);
                    else if (typeof Ne != "function")
                      this._remaining--, (this._result[V] = T);
                    else if (Y === be) {
                      var wi = new Y(te);
                      Ra ? j(wi, lr) : I(wi, T, Ne), this._willSettleAt(wi, V);
                    } else
                      this._willSettleAt(
                        new Y(function (_i) {
                          return _i(T);
                        }),
                        V
                      );
                  } else this._willSettleAt(re(T), V);
                }),
                (_.prototype._settledAt = function (T, V, Y) {
                  var re = this.promise;
                  re._state === le &&
                    (this._remaining--,
                    T === Q ? j(re, Y) : (this._result[V] = Y)),
                    this._remaining === 0 && U(re, this._result);
                }),
                (_.prototype._willSettleAt = function (T, V) {
                  var Y = this;
                  we(
                    T,
                    void 0,
                    function (re) {
                      return Y._settledAt(pe, V, re);
                    },
                    function (re) {
                      return Y._settledAt(Q, V, re);
                    }
                  );
                }),
                _
              );
            })();
            function ye(_) {
              return new Le(this, _).promise;
            }
            function Pe(_) {
              var k = this;
              return i(_)
                ? new k(function (T, V) {
                    for (var Y = _.length, re = 0; re < Y; re++)
                      k.resolve(_[re]).then(T, V);
                  })
                : new k(function (T, V) {
                    return V(new TypeError("You must pass an array to race."));
                  });
            }
            function Fe(_) {
              var k = this,
                T = new k(te);
              return j(T, _), T;
            }
            function Ce() {
              throw new TypeError(
                "You must pass a resolver function as the first argument to the promise constructor"
              );
            }
            function Se() {
              throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
              );
            }
            var be = (function () {
              function _(k) {
                (this[$] = We()),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  te !== k &&
                    (typeof k != "function" && Ce(),
                    this instanceof _ ? Ie(this, k) : Se());
              }
              return (
                (_.prototype.catch = function (T) {
                  return this.then(null, T);
                }),
                (_.prototype.finally = function (T) {
                  var V = this,
                    Y = V.constructor;
                  return a(T)
                    ? V.then(
                        function (re) {
                          return Y.resolve(T()).then(function () {
                            return re;
                          });
                        },
                        function (re) {
                          return Y.resolve(T()).then(function () {
                            throw re;
                          });
                        }
                      )
                    : V.then(T, T);
                }),
                _
              );
            })();
            (be.prototype.then = q),
              (be.all = ye),
              (be.race = Pe),
              (be.resolve = J),
              (be.reject = Fe),
              (be._setScheduler = c),
              (be._setAsap = d),
              (be._asap = s);
            function de() {
              var _ = void 0;
              if (typeof Je < "u") _ = Je;
              else if (typeof self < "u") _ = self;
              else
                try {
                  _ = Function("return this")();
                } catch {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                  );
                }
              var k = _.Promise;
              if (k) {
                var T = null;
                try {
                  T = Object.prototype.toString.call(k.resolve());
                } catch {}
                if (T === "[object Promise]" && !k.cast) return;
              }
              _.Promise = be;
            }
            return (be.polyfill = de), (be.Promise = be), be;
          });
        }),
        Fd = F(function (e) {
          var t = void 0,
            r = 1e5,
            a = (function () {
              var w = Object.prototype.toString,
                z = Object.prototype.hasOwnProperty;
              return {
                Class: function (W) {
                  return w.call(W).replace(/^\[object *|\]$/g, "");
                },
                HasProperty: function (W, he) {
                  return he in W;
                },
                HasOwnProperty: function (W, he) {
                  return z.call(W, he);
                },
                IsCallable: function (W) {
                  return typeof W == "function";
                },
                ToInt32: function (W) {
                  return W >> 0;
                },
                ToUint32: function (W) {
                  return W >>> 0;
                },
              };
            })(),
            n = Math.LN2,
            i = Math.abs,
            o = Math.floor,
            l = Math.log,
            u = Math.min,
            s = Math.pow,
            c = Math.round;
          function d(w) {
            if (p && f) {
              var z = p(w),
                I;
              for (I = 0; I < z.length; I += 1)
                f(w, z[I], {
                  value: w[z[I]],
                  writable: !1,
                  enumerable: !1,
                  configurable: !1,
                });
            }
          }
          var f;
          Object.defineProperty &&
          (function () {
            try {
              return Object.defineProperty({}, "x", {}), !0;
            } catch {
              return !1;
            }
          })()
            ? (f = Object.defineProperty)
            : (f = function (z, I, W) {
                if (!z === Object(z))
                  throw new TypeError(
                    "Object.defineProperty called on non-object"
                  );
                return (
                  a.HasProperty(W, "get") &&
                    Object.prototype.__defineGetter__ &&
                    Object.prototype.__defineGetter__.call(z, I, W.get),
                  a.HasProperty(W, "set") &&
                    Object.prototype.__defineSetter__ &&
                    Object.prototype.__defineSetter__.call(z, I, W.set),
                  a.HasProperty(W, "value") && (z[I] = W.value),
                  z
                );
              });
          var p =
            Object.getOwnPropertyNames ||
            function (w) {
              if (w !== Object(w))
                throw new TypeError(
                  "Object.getOwnPropertyNames called on non-object"
                );
              var z = [],
                I;
              for (I in w) a.HasOwnProperty(w, I) && z.push(I);
              return z;
            };
          function m(w) {
            if (!f) return;
            if (w.length > r)
              throw new RangeError("Array too large for polyfill");
            function z(W) {
              f(w, W, {
                get: function () {
                  return w._getter(W);
                },
                set: function (U) {
                  w._setter(W, U);
                },
                enumerable: !0,
                configurable: !1,
              });
            }
            var I;
            for (I = 0; I < w.length; I += 1) z(I);
          }
          function b(w, z) {
            var I = 32 - z;
            return (w << I) >> I;
          }
          function D(w, z) {
            var I = 32 - z;
            return (w << I) >>> I;
          }
          function h(w) {
            return [w & 255];
          }
          function g(w) {
            return b(w[0], 8);
          }
          function x(w) {
            return [w & 255];
          }
          function E(w) {
            return D(w[0], 8);
          }
          function C(w) {
            return (w = c(Number(w))), [w < 0 ? 0 : w > 255 ? 255 : w & 255];
          }
          function N(w) {
            return [(w >> 8) & 255, w & 255];
          }
          function M(w) {
            return b((w[0] << 8) | w[1], 16);
          }
          function H(w) {
            return [(w >> 8) & 255, w & 255];
          }
          function ee(w) {
            return D((w[0] << 8) | w[1], 16);
          }
          function q(w) {
            return [(w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255];
          }
          function J(w) {
            return b((w[0] << 24) | (w[1] << 16) | (w[2] << 8) | w[3], 32);
          }
          function $(w) {
            return [(w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255];
          }
          function te(w) {
            return D((w[0] << 24) | (w[1] << 16) | (w[2] << 8) | w[3], 32);
          }
          function le(w, z, I) {
            var W = (1 << (z - 1)) - 1,
              he,
              U,
              j,
              we,
              _e,
              xe,
              Ie;
            function qe(We) {
              var Te = o(We),
                ot = We - Te;
              return ot < 0.5 ? Te : ot > 0.5 || Te % 2 ? Te + 1 : Te;
            }
            for (
              w !== w
                ? ((U = (1 << z) - 1), (j = s(2, I - 1)), (he = 0))
                : w === 1 / 0 || w === -1 / 0
                ? ((U = (1 << z) - 1), (j = 0), (he = w < 0 ? 1 : 0))
                : w === 0
                ? ((U = 0), (j = 0), (he = 1 / w === -1 / 0 ? 1 : 0))
                : ((he = w < 0),
                  (w = i(w)),
                  w >= s(2, 1 - W)
                    ? ((U = u(o(l(w) / n), 1023)),
                      (j = qe((w / s(2, U)) * s(2, I))),
                      j / s(2, I) >= 2 && ((U = U + 1), (j = 1)),
                      U > W
                        ? ((U = (1 << z) - 1), (j = 0))
                        : ((U = U + W), (j = j - s(2, I))))
                    : ((U = 0), (j = qe(w / s(2, 1 - W - I))))),
                _e = [],
                we = I;
              we;
              we -= 1
            )
              _e.push(j % 2 ? 1 : 0), (j = o(j / 2));
            for (we = z; we; we -= 1) _e.push(U % 2 ? 1 : 0), (U = o(U / 2));
            for (
              _e.push(he ? 1 : 0), _e.reverse(), xe = _e.join(""), Ie = [];
              xe.length;

            )
              Ie.push(parseInt(xe.substring(0, 8), 2)), (xe = xe.substring(8));
            return Ie;
          }
          function pe(w, z, I) {
            var W = [],
              he,
              U,
              j,
              we,
              _e,
              xe,
              Ie,
              qe;
            for (he = w.length; he; he -= 1)
              for (j = w[he - 1], U = 8; U; U -= 1)
                W.push(j % 2 ? 1 : 0), (j = j >> 1);
            return (
              W.reverse(),
              (we = W.join("")),
              (_e = (1 << (z - 1)) - 1),
              (xe = parseInt(we.substring(0, 1), 2) ? -1 : 1),
              (Ie = parseInt(we.substring(1, 1 + z), 2)),
              (qe = parseInt(we.substring(1 + z), 2)),
              Ie === (1 << z) - 1
                ? qe !== 0
                  ? NaN
                  : xe * (1 / 0)
                : Ie > 0
                ? xe * s(2, Ie - _e) * (1 + qe / s(2, I))
                : qe !== 0
                ? xe * s(2, -(_e - 1)) * (qe / s(2, I))
                : xe < 0
                ? -0
                : 0
            );
          }
          function Q(w) {
            return pe(w, 11, 52);
          }
          function oe(w) {
            return le(w, 11, 52);
          }
          function O(w) {
            return pe(w, 8, 23);
          }
          function ce(w) {
            return le(w, 8, 23);
          }
          (function () {
            var w = function (Te) {
              if (((Te = a.ToInt32(Te)), Te < 0))
                throw new RangeError(
                  "ArrayBuffer size is not a small enough positive integer"
                );
              (this.byteLength = Te),
                (this._bytes = []),
                (this._bytes.length = Te);
              var ot;
              for (ot = 0; ot < this.byteLength; ot += 1) this._bytes[ot] = 0;
              d(this);
            };
            e.ArrayBuffer = e.ArrayBuffer || w;
            var z = function () {};
            function I(We, Te, ot) {
              var Le;
              return (
                (Le = function (Pe, Fe, Ce) {
                  var Se, be, de, _;
                  if (!arguments.length || typeof arguments[0] == "number") {
                    if (((this.length = a.ToInt32(arguments[0])), Ce < 0))
                      throw new RangeError(
                        "ArrayBufferView size is not a small enough positive integer"
                      );
                    (this.byteLength = this.length * this.BYTES_PER_ELEMENT),
                      (this.buffer = new w(this.byteLength)),
                      (this.byteOffset = 0);
                  } else if (
                    P(arguments[0]) === "object" &&
                    arguments[0].constructor === Le
                  )
                    for (
                      Se = arguments[0],
                        this.length = Se.length,
                        this.byteLength = this.length * this.BYTES_PER_ELEMENT,
                        this.buffer = new w(this.byteLength),
                        this.byteOffset = 0,
                        de = 0;
                      de < this.length;
                      de += 1
                    )
                      this._setter(de, Se._getter(de));
                  else if (
                    P(arguments[0]) === "object" &&
                    !(
                      arguments[0] instanceof w ||
                      a.Class(arguments[0]) === "ArrayBuffer"
                    )
                  )
                    for (
                      be = arguments[0],
                        this.length = a.ToUint32(be.length),
                        this.byteLength = this.length * this.BYTES_PER_ELEMENT,
                        this.buffer = new w(this.byteLength),
                        this.byteOffset = 0,
                        de = 0;
                      de < this.length;
                      de += 1
                    )
                      (_ = be[de]), this._setter(de, Number(_));
                  else if (
                    P(arguments[0]) === "object" &&
                    (arguments[0] instanceof w ||
                      a.Class(arguments[0]) === "ArrayBuffer")
                  ) {
                    if (
                      ((this.buffer = Pe),
                      (this.byteOffset = a.ToUint32(Fe)),
                      this.byteOffset > this.buffer.byteLength)
                    )
                      throw new RangeError("byteOffset out of range");
                    if (this.byteOffset % this.BYTES_PER_ELEMENT)
                      throw new RangeError(
                        "ArrayBuffer length minus the byteOffset is not a multiple of the element size."
                      );
                    if (arguments.length < 3) {
                      if (
                        ((this.byteLength =
                          this.buffer.byteLength - this.byteOffset),
                        this.byteLength % this.BYTES_PER_ELEMENT)
                      )
                        throw new RangeError(
                          "length of buffer minus byteOffset not a multiple of the element size"
                        );
                      this.length = this.byteLength / this.BYTES_PER_ELEMENT;
                    } else
                      (this.length = a.ToUint32(Ce)),
                        (this.byteLength =
                          this.length * this.BYTES_PER_ELEMENT);
                    if (
                      this.byteOffset + this.byteLength >
                      this.buffer.byteLength
                    )
                      throw new RangeError(
                        "byteOffset and length reference an area beyond the end of the buffer"
                      );
                  } else throw new TypeError("Unexpected argument type(s)");
                  (this.constructor = Le), d(this), m(this);
                }),
                (Le.prototype = new z()),
                (Le.prototype.BYTES_PER_ELEMENT = We),
                (Le.prototype._pack = Te),
                (Le.prototype._unpack = ot),
                (Le.BYTES_PER_ELEMENT = We),
                (Le.prototype._getter = function (ye) {
                  if (arguments.length < 1)
                    throw new SyntaxError("Not enough arguments");
                  if (((ye = a.ToUint32(ye)), ye >= this.length)) return t;
                  var Pe = [],
                    Fe,
                    Ce;
                  for (
                    Fe = 0, Ce = this.byteOffset + ye * this.BYTES_PER_ELEMENT;
                    Fe < this.BYTES_PER_ELEMENT;
                    Fe += 1, Ce += 1
                  )
                    Pe.push(this.buffer._bytes[Ce]);
                  return this._unpack(Pe);
                }),
                (Le.prototype.get = Le.prototype._getter),
                (Le.prototype._setter = function (ye, Pe) {
                  if (arguments.length < 2)
                    throw new SyntaxError("Not enough arguments");
                  if (((ye = a.ToUint32(ye)), ye >= this.length)) return t;
                  var Fe = this._pack(Pe),
                    Ce,
                    Se;
                  for (
                    Ce = 0, Se = this.byteOffset + ye * this.BYTES_PER_ELEMENT;
                    Ce < this.BYTES_PER_ELEMENT;
                    Ce += 1, Se += 1
                  )
                    this.buffer._bytes[Se] = Fe[Ce];
                }),
                (Le.prototype.set = function (ye, Pe) {
                  if (arguments.length < 1)
                    throw new SyntaxError("Not enough arguments");
                  var Fe, Ce, Se, be, de, _, k, T, V, Y;
                  if (
                    P(arguments[0]) === "object" &&
                    arguments[0].constructor === this.constructor
                  ) {
                    if (
                      ((Fe = arguments[0]),
                      (Se = a.ToUint32(arguments[1])),
                      Se + Fe.length > this.length)
                    )
                      throw new RangeError(
                        "Offset plus length of array is out of range"
                      );
                    if (
                      ((T = this.byteOffset + Se * this.BYTES_PER_ELEMENT),
                      (V = Fe.length * this.BYTES_PER_ELEMENT),
                      Fe.buffer === this.buffer)
                    ) {
                      for (
                        Y = [], de = 0, _ = Fe.byteOffset;
                        de < V;
                        de += 1, _ += 1
                      )
                        Y[de] = Fe.buffer._bytes[_];
                      for (de = 0, k = T; de < V; de += 1, k += 1)
                        this.buffer._bytes[k] = Y[de];
                    } else
                      for (
                        de = 0, _ = Fe.byteOffset, k = T;
                        de < V;
                        de += 1, _ += 1, k += 1
                      )
                        this.buffer._bytes[k] = Fe.buffer._bytes[_];
                  } else if (
                    P(arguments[0]) === "object" &&
                    typeof arguments[0].length < "u"
                  ) {
                    if (
                      ((Ce = arguments[0]),
                      (be = a.ToUint32(Ce.length)),
                      (Se = a.ToUint32(arguments[1])),
                      Se + be > this.length)
                    )
                      throw new RangeError(
                        "Offset plus length of array is out of range"
                      );
                    for (de = 0; de < be; de += 1)
                      (_ = Ce[de]), this._setter(Se + de, Number(_));
                  } else throw new TypeError("Unexpected argument type(s)");
                }),
                (Le.prototype.subarray = function (ye, Pe) {
                  function Fe(Se, be, de) {
                    return Se < be ? be : Se > de ? de : Se;
                  }
                  (ye = a.ToInt32(ye)),
                    (Pe = a.ToInt32(Pe)),
                    arguments.length < 1 && (ye = 0),
                    arguments.length < 2 && (Pe = this.length),
                    ye < 0 && (ye = this.length + ye),
                    Pe < 0 && (Pe = this.length + Pe),
                    (ye = Fe(ye, 0, this.length)),
                    (Pe = Fe(Pe, 0, this.length));
                  var Ce = Pe - ye;
                  return (
                    Ce < 0 && (Ce = 0),
                    new this.constructor(
                      this.buffer,
                      this.byteOffset + ye * this.BYTES_PER_ELEMENT,
                      Ce
                    )
                  );
                }),
                Le
              );
            }
            var W = I(1, h, g),
              he = I(1, x, E),
              U = I(1, C, E),
              j = I(2, N, M),
              we = I(2, H, ee),
              _e = I(4, q, J),
              xe = I(4, $, te),
              Ie = I(4, ce, O),
              qe = I(8, oe, Q);
            (e.Int8Array = e.Int8Array || W),
              (e.Uint8Array = e.Uint8Array || he),
              (e.Uint8ClampedArray = e.Uint8ClampedArray || U),
              (e.Int16Array = e.Int16Array || j),
              (e.Uint16Array = e.Uint16Array || we),
              (e.Int32Array = e.Int32Array || _e),
              (e.Uint32Array = e.Uint32Array || xe),
              (e.Float32Array = e.Float32Array || Ie),
              (e.Float64Array = e.Float64Array || qe);
          })(),
            (function () {
              function w(U, j) {
                return a.IsCallable(U.get) ? U.get(j) : U[j];
              }
              var z = (function () {
                  var U = new e.Uint16Array([4660]),
                    j = new e.Uint8Array(U.buffer);
                  return w(j, 0) === 18;
                })(),
                I = function (j, we, _e) {
                  if (arguments.length === 0) j = new e.ArrayBuffer(0);
                  else if (
                    !(
                      j instanceof e.ArrayBuffer || a.Class(j) === "ArrayBuffer"
                    )
                  )
                    throw new TypeError("TypeError");
                  if (
                    ((this.buffer = j || new e.ArrayBuffer(0)),
                    (this.byteOffset = a.ToUint32(we)),
                    this.byteOffset > this.buffer.byteLength)
                  )
                    throw new RangeError("byteOffset out of range");
                  if (
                    (arguments.length < 3
                      ? (this.byteLength =
                          this.buffer.byteLength - this.byteOffset)
                      : (this.byteLength = a.ToUint32(_e)),
                    this.byteOffset + this.byteLength > this.buffer.byteLength)
                  )
                    throw new RangeError(
                      "byteOffset and length reference an area beyond the end of the buffer"
                    );
                  d(this);
                };
              function W(U) {
                return function (j, we) {
                  if (
                    ((j = a.ToUint32(j)),
                    j + U.BYTES_PER_ELEMENT > this.byteLength)
                  )
                    throw new RangeError("Array index out of range");
                  j += this.byteOffset;
                  var _e = new e.Uint8Array(
                      this.buffer,
                      j,
                      U.BYTES_PER_ELEMENT
                    ),
                    xe = [],
                    Ie;
                  for (Ie = 0; Ie < U.BYTES_PER_ELEMENT; Ie += 1)
                    xe.push(w(_e, Ie));
                  return (
                    Boolean(we) === Boolean(z) && xe.reverse(),
                    w(new U(new e.Uint8Array(xe).buffer), 0)
                  );
                };
              }
              (I.prototype.getUint8 = W(e.Uint8Array)),
                (I.prototype.getInt8 = W(e.Int8Array)),
                (I.prototype.getUint16 = W(e.Uint16Array)),
                (I.prototype.getInt16 = W(e.Int16Array)),
                (I.prototype.getUint32 = W(e.Uint32Array)),
                (I.prototype.getInt32 = W(e.Int32Array)),
                (I.prototype.getFloat32 = W(e.Float32Array)),
                (I.prototype.getFloat64 = W(e.Float64Array));
              function he(U) {
                return function (j, we, _e) {
                  if (
                    ((j = a.ToUint32(j)),
                    j + U.BYTES_PER_ELEMENT > this.byteLength)
                  )
                    throw new RangeError("Array index out of range");
                  var xe = new U([we]),
                    Ie = new e.Uint8Array(xe.buffer),
                    qe = [],
                    We,
                    Te;
                  for (We = 0; We < U.BYTES_PER_ELEMENT; We += 1)
                    qe.push(w(Ie, We));
                  Boolean(_e) === Boolean(z) && qe.reverse(),
                    (Te = new e.Uint8Array(
                      this.buffer,
                      j,
                      U.BYTES_PER_ELEMENT
                    )),
                    Te.set(qe);
                };
              }
              (I.prototype.setUint8 = he(e.Uint8Array)),
                (I.prototype.setInt8 = he(e.Int8Array)),
                (I.prototype.setUint16 = he(e.Uint16Array)),
                (I.prototype.setInt16 = he(e.Int16Array)),
                (I.prototype.setUint32 = he(e.Uint32Array)),
                (I.prototype.setInt32 = he(e.Int32Array)),
                (I.prototype.setFloat32 = he(e.Float32Array)),
                (I.prototype.setFloat64 = he(e.Float64Array)),
                (e.DataView = e.DataView || I);
            })();
        }),
        Cd = F(function (e) {
          (function (t) {
            if (t.WeakMap) return;
            var r = Object.prototype.hasOwnProperty,
              a =
                Object.defineProperty &&
                (function () {
                  try {
                    return Object.defineProperty({}, "x", { value: 1 }).x === 1;
                  } catch {}
                })(),
              n = function (l, u, s) {
                a
                  ? Object.defineProperty(l, u, {
                      configurable: !0,
                      writable: !0,
                      value: s,
                    })
                  : (l[u] = s);
              };
            t.WeakMap = (function () {
              function o() {
                if (this === void 0)
                  throw new TypeError("Constructor WeakMap requires 'new'");
                if ((n(this, "_id", u("_WeakMap")), arguments.length > 0))
                  throw new TypeError("WeakMap iterable is not supported");
              }
              n(o.prototype, "delete", function (c) {
                if ((l(this, "delete"), !i(c))) return !1;
                var d = c[this._id];
                return d && d[0] === c ? (delete c[this._id], !0) : !1;
              }),
                n(o.prototype, "get", function (c) {
                  if ((l(this, "get"), !!i(c))) {
                    var d = c[this._id];
                    if (d && d[0] === c) return d[1];
                  }
                }),
                n(o.prototype, "has", function (c) {
                  if ((l(this, "has"), !i(c))) return !1;
                  var d = c[this._id];
                  return !!(d && d[0] === c);
                }),
                n(o.prototype, "set", function (c, d) {
                  if ((l(this, "set"), !i(c)))
                    throw new TypeError("Invalid value used as weak map key");
                  var f = c[this._id];
                  return f && f[0] === c
                    ? ((f[1] = d), this)
                    : (n(c, this._id, [c, d]), this);
                });
              function l(c, d) {
                if (!i(c) || !r.call(c, "_id"))
                  throw new TypeError(
                    d + " method called on incompatible receiver " + P(c)
                  );
              }
              function u(c) {
                return c + "_" + s() + "." + s();
              }
              function s() {
                return Math.random().toString().substring(2);
              }
              return n(o, "_polyfill", !0), o;
            })();
            function i(o) {
              return Object(o) === o;
            }
          })(
            typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
              ? self
              : typeof y < "u"
              ? y
              : typeof Je < "u"
              ? Je
              : e
          );
        }),
        kd = [
          {
            name: "NA",
            value: "inapplicable",
            priority: 0,
            group: "inapplicable",
          },
          { name: "PASS", value: "passed", priority: 1, group: "passes" },
          {
            name: "CANTTELL",
            value: "cantTell",
            priority: 2,
            group: "incomplete",
          },
          { name: "FAIL", value: "failed", priority: 3, group: "violations" },
        ],
        tt = {
          helpUrlBase: "https://dequeuniversity.com/rules/",
          gridSize: 200,
          results: [],
          resultGroups: [],
          resultGroupMap: {},
          impact: Object.freeze(["minor", "moderate", "serious", "critical"]),
          preload: Object.freeze({ assets: ["cssom", "media"], timeout: 1e4 }),
          allOrigins: "<unsafe_all_origins>",
          sameOrigin: "<same_origin>",
        };
      kd.forEach(function (e) {
        var t = e.name,
          r = e.value,
          a = e.priority,
          n = e.group;
        (tt[t] = r),
          (tt[t + "_PRIO"] = a),
          (tt[t + "_GROUP"] = n),
          (tt.results[a] = r),
          (tt.resultGroups[a] = n),
          (tt.resultGroupMap[r] = n);
      }),
        Object.freeze(tt.results),
        Object.freeze(tt.resultGroups),
        Object.freeze(tt.resultGroupMap),
        Object.freeze(tt);
      var Z = tt;
      function Rd() {
        (typeof console > "u" ? "undefined" : P(console)) === "object" &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments);
      }
      var St = Rd,
        Td = /[\t\r\n\f]/g,
        Sd = (function () {
          function e() {
            cr(this, e), (this.parent = void 0);
          }
          return (
            dr(e, [
              {
                key: "props",
                get: function () {
                  throw new Error(
                    'VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties'
                  );
                },
              },
              {
                key: "attrNames",
                get: function () {
                  throw new Error(
                    'VirtualNode class must have an "attrNames" property'
                  );
                },
              },
              {
                key: "attr",
                value: function () {
                  throw new Error(
                    'VirtualNode class must have an "attr" function'
                  );
                },
              },
              {
                key: "hasAttr",
                value: function () {
                  throw new Error(
                    'VirtualNode class must have a "hasAttr" function'
                  );
                },
              },
              {
                key: "hasClass",
                value: function (r) {
                  var a = this.attr("class");
                  if (!a) return !1;
                  var n = " " + r + " ";
                  return (" " + a + " ").replace(Td, " ").indexOf(n) >= 0;
                },
              },
            ]),
            e
          );
        })(),
        X = Sd,
        Ma = {};
      ke(Ma, {
        DqElement: function () {
          return rt;
        },
        aggregate: function () {
          return Lr;
        },
        aggregateChecks: function () {
          return Ui;
        },
        aggregateNodeResults: function () {
          return $i;
        },
        aggregateResult: function () {
          return Wi;
        },
        areStylesSet: function () {
          return Ld;
        },
        assert: function () {
          return me;
        },
        checkHelper: function () {
          return za;
        },
        clone: function () {
          return mt;
        },
        closest: function () {
          return $e;
        },
        collectResultsFromFrames: function () {
          return wo;
        },
        contains: function () {
          return Gt;
        },
        convertSelector: function () {
          return $r;
        },
        cssParser: function () {
          return ro;
        },
        deepMerge: function () {
          return on;
        },
        escapeSelector: function () {
          return Ee;
        },
        extendMetaData: function () {
          return ln;
        },
        filterHtmlAttrs: function () {
          return Hl;
        },
        finalizeRuleResult: function () {
          return fr;
        },
        findBy: function () {
          return br;
        },
        getAllChecks: function () {
          return Xr;
        },
        getAncestry: function () {
          return Ur;
        },
        getBaseLang: function () {
          return Pt;
        },
        getCheckMessage: function () {
          return Gp;
        },
        getCheckOption: function () {
          return ca;
        },
        getEnvironmentData: function () {
          return xt;
        },
        getFlattenedTree: function () {
          return Pn;
        },
        getFrameContexts: function () {
          return im;
        },
        getFriendlyUriEnd: function () {
          return Ki;
        },
        getNodeAttributes: function () {
          return jr;
        },
        getNodeFromTree: function () {
          return B;
        },
        getPreloadConfig: function () {
          return Bl;
        },
        getRootNode: function () {
          return yr;
        },
        getRule: function () {
          return xl;
        },
        getScroll: function () {
          return ht;
        },
        getScrollState: function () {
          return um;
        },
        getSelector: function () {
          return Ha;
        },
        getSelectorData: function () {
          return zr;
        },
        getShadowSelector: function () {
          return qa;
        },
        getStandards: function () {
          return sm;
        },
        getStyleSheetFactory: function () {
          return Fl;
        },
        getXpath: function () {
          return to;
        },
        injectStyle: function () {
          return fm;
        },
        isHidden: function () {
          return pm;
        },
        isHtmlElement: function () {
          return qn;
        },
        isNodeInContext: function () {
          return Ln;
        },
        isShadowRoot: function () {
          return Qr;
        },
        isValidLang: function () {
          return ma;
        },
        isXHTML: function () {
          return Hr;
        },
        matchAncestry: function () {
          return Vn;
        },
        matches: function () {
          return Wa;
        },
        matchesExpression: function () {
          return zt;
        },
        matchesSelector: function () {
          return jt;
        },
        memoize: function () {
          return nt;
        },
        mergeResults: function () {
          return Jr;
        },
        nodeSorter: function () {
          return jn;
        },
        parseCrossOriginStylesheet: function () {
          return zn;
        },
        parseSameOriginStylesheet: function () {
          return Rl;
        },
        parseStylesheet: function () {
          return Hn;
        },
        performanceTimer: function () {
          return Oe;
        },
        pollyfillElementsFromPoint: function () {
          return Tl;
        },
        preload: function () {
          return ql;
        },
        preloadCssom: function () {
          return Ol;
        },
        preloadMedia: function () {
          return Nl;
        },
        processMessage: function () {
          return Bn;
        },
        publishMetaData: function () {
          return fa;
        },
        querySelectorAll: function () {
          return Ye;
        },
        querySelectorAllFilter: function () {
          return vt;
        },
        queue: function () {
          return lt;
        },
        respondable: function () {
          return at;
        },
        ruleShouldRun: function () {
          return jl;
        },
        select: function () {
          return $n;
        },
        sendCommandToFrame: function () {
          return go;
        },
        setScrollState: function () {
          return Km;
        },
        shadowSelect: function () {
          return Xm;
        },
        shouldPreload: function () {
          return Ml;
        },
        toArray: function () {
          return Yi;
        },
        tokenList: function () {
          return Be;
        },
        uniqueArray: function () {
          return xr;
        },
        uuid: function () {
          return R1;
        },
        validInputTypes: function () {
          return pa;
        },
        validLangs: function () {
          return Wl;
        },
      });
      function Od(e, t, r) {
        (t = t.slice()), r && t.push(r);
        var a = t
          .map(function (n) {
            return e.indexOf(n);
          })
          .sort();
        return e[a.pop()];
      }
      var Lr = Od,
        Id = Z.CANTTELL_PRIO,
        Pd = Z.FAIL_PRIO,
        Vr = [];
      (Vr[Z.PASS_PRIO] = !0),
        (Vr[Z.CANTTELL_PRIO] = null),
        (Vr[Z.FAIL_PRIO] = !1);
      var Hi = ["any", "all", "none"];
      function zi(e, t) {
        return Hi.reduce(function (r, a) {
          return (
            (r[a] = (e[a] || []).map(function (n) {
              return t(n, a);
            })),
            r
          );
        }, {});
      }
      function Nd(e) {
        var t = Object.assign({}, e);
        zi(t, function (n, i) {
          var o = typeof n.result > "u" ? -1 : Vr.indexOf(n.result);
          (n.priority = o !== -1 ? o : Z.CANTTELL_PRIO),
            i === "none" &&
              (n.priority === Z.PASS_PRIO
                ? (n.priority = Z.FAIL_PRIO)
                : n.priority === Z.FAIL_PRIO && (n.priority = Z.PASS_PRIO));
        });
        var r = {
          all: t.all.reduce(function (n, i) {
            return Math.max(n, i.priority);
          }, 0),
          none: t.none.reduce(function (n, i) {
            return Math.max(n, i.priority);
          }, 0),
          any:
            t.any.reduce(function (n, i) {
              return Math.min(n, i.priority);
            }, 4) % 4,
        };
        t.priority = Math.max(r.all, r.none, r.any);
        var a = [];
        return (
          Hi.forEach(function (n) {
            (t[n] = t[n].filter(function (i) {
              return i.priority === t.priority && i.priority === r[n];
            })),
              t[n].forEach(function (i) {
                return a.push(i.impact);
              });
          }),
          [Id, Pd].includes(t.priority)
            ? (t.impact = Lr(Z.impact, a))
            : (t.impact = null),
          zi(t, function (n) {
            delete n.result, delete n.priority;
          }),
          (t.result = Z.results[t.priority]),
          delete t.priority,
          t
        );
      }
      var Ui = Nd;
      function Md(e) {
        var t = v._audit.rules.find(function (r) {
          return r.id === e.id;
        });
        return (
          t &&
            t.impact &&
            e.nodes.forEach(function (r) {
              ["any", "all", "none"].forEach(function (a) {
                (r[a] || []).forEach(function (n) {
                  n.impact = t.impact;
                });
              });
            }),
          Object.assign(e, $i(e.nodes)),
          delete e.nodes,
          e
        );
      }
      var fr = Md;
      function Bd(e) {
        var t = {};
        if (
          ((e = e.map(function (i) {
            if (i.any && i.all && i.none) return Ui(i);
            if (Array.isArray(i.node)) return fr(i);
            throw new TypeError("Invalid Result type");
          })),
          e && e.length)
        ) {
          var r = e.map(function (i) {
            return i.result;
          });
          t.result = Lr(Z.results, r, t.result);
        } else t.result = "inapplicable";
        Z.resultGroups.forEach(function (i) {
          return (t[i] = []);
        }),
          e.forEach(function (i) {
            var o = Z.resultGroupMap[i.result];
            t[o].push(i);
          });
        var a = Z.FAIL_GROUP;
        if ((t[a].length === 0 && (a = Z.CANTTELL_GROUP), t[a].length > 0)) {
          var n = t[a].map(function (i) {
            return i.impact;
          });
          t.impact = Lr(Z.impact, n) || null;
        } else t.impact = null;
        return t;
      }
      var $i = Bd;
      function Ba(e, t, r) {
        var a = Object.assign({}, t);
        (a.nodes = (a[r] || []).concat()),
          Z.resultGroups.forEach(function (n) {
            delete a[n];
          }),
          e[r].push(a);
      }
      function qd(e) {
        var t = {};
        return (
          Z.resultGroups.forEach(function (r) {
            return (t[r] = []);
          }),
          e.forEach(function (r) {
            r.error
              ? Ba(t, r, Z.CANTTELL_GROUP)
              : r.result === Z.NA
              ? Ba(t, r, Z.NA_GROUP)
              : Z.resultGroups.forEach(function (a) {
                  Array.isArray(r[a]) && r[a].length > 0 && Ba(t, r, a);
                });
          }),
          t
        );
      }
      var Wi = qd;
      function Gi(e, t, r) {
        var a = y.getComputedStyle(e, null);
        if (!a) return !1;
        for (var n = 0; n < t.length; ++n) {
          var i = t[n];
          if (a.getPropertyValue(i.property) === i.value) return !0;
        }
        return !e.parentNode || e.nodeName.toUpperCase() === r.toUpperCase()
          ? !1
          : Gi(e.parentNode, t, r);
      }
      var Ld = Gi;
      function Vd(e, t) {
        if (!e) throw new Error(t);
      }
      var me = Vd;
      function jd(e) {
        return Array.prototype.slice.call(e);
      }
      var Yi = jd;
      function Hd(e) {
        for (
          var t = String(e),
            r = t.length,
            a = -1,
            n,
            i = "",
            o = t.charCodeAt(0);
          ++a < r;

        ) {
          if (((n = t.charCodeAt(a)), n == 0)) {
            i += "\uFFFD";
            continue;
          }
          if (
            (n >= 1 && n <= 31) ||
            n == 127 ||
            (a == 0 && n >= 48 && n <= 57) ||
            (a == 1 && n >= 48 && n <= 57 && o == 45)
          ) {
            i += "\\" + n.toString(16) + " ";
            continue;
          }
          if (a == 0 && r == 1 && n == 45) {
            i += "\\" + t.charAt(a);
            continue;
          }
          if (
            n >= 128 ||
            n == 45 ||
            n == 95 ||
            (n >= 48 && n <= 57) ||
            (n >= 65 && n <= 90) ||
            (n >= 97 && n <= 122)
          ) {
            i += t.charAt(a);
            continue;
          }
          i += "\\" + t.charAt(a);
        }
        return i;
      }
      var Ee = Hd;
      function zd() {
        var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return (
          e.length !== 0 && (e.match(/[0-9]/g) || "").length >= e.length / 2
        );
      }
      function pr(e, t) {
        return [e.substring(0, t), e.substring(t)];
      }
      function mr(e) {
        return e.replace(/\s+$/, "");
      }
      function Ud(e) {
        var t = e,
          r = "",
          a = "",
          n = "",
          i = "",
          o = "",
          l = "";
        if (e.includes("#")) {
          var u = pr(e, e.indexOf("#")),
            s = ve(u, 2);
          (e = s[0]), (l = s[1]);
        }
        if (e.includes("?")) {
          var c = pr(e, e.indexOf("?")),
            d = ve(c, 2);
          (e = d[0]), (o = d[1]);
        }
        if (e.includes("://")) {
          var f = e.split("://"),
            p = ve(f, 2);
          (r = p[0]), (e = p[1]);
          var m = pr(e, e.indexOf("/")),
            b = ve(m, 2);
          (a = b[0]), (e = b[1]);
        } else if (e.substr(0, 2) === "//") {
          e = e.substr(2);
          var D = pr(e, e.indexOf("/")),
            h = ve(D, 2);
          (a = h[0]), (e = h[1]);
        }
        if (
          (a.substr(0, 4) === "www." && (a = a.substr(4)), a && a.includes(":"))
        ) {
          var g = pr(a, a.indexOf(":")),
            x = ve(g, 2);
          (a = x[0]), (n = x[1]);
        }
        return (
          (i = e),
          {
            original: t,
            protocol: r,
            domain: a,
            port: n,
            path: i,
            query: o,
            hash: l,
          }
        );
      }
      function $d() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
          t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          !(
            e.length <= 1 ||
            e.substr(0, 5) === "data:" ||
            e.substr(0, 11) === "javascript:" ||
            e.includes("?")
          )
        ) {
          var r = t.currentDomain,
            a = t.maxLength,
            n = a === void 0 ? 25 : a,
            i = Ud(e),
            o = i.path,
            l = i.domain,
            u = i.hash,
            s = o.substr(o.substr(0, o.length - 2).lastIndexOf("/") + 1);
          if (u)
            return s && (s + u).length <= n
              ? mr(s + u)
              : s.length < 2 && u.length > 2 && u.length <= n
              ? mr(u)
              : void 0;
          if (
            (l && l.length < n && o.length <= 1) ||
            (o === "/" + s && l && r && l !== r && (l + o).length <= n)
          )
            return mr(l + o);
          var c = s.lastIndexOf(".");
          if (
            (c === -1 || c > 1) &&
            (c !== -1 || s.length > 2) &&
            s.length <= n &&
            !s.match(/index(\.[a-zA-Z]{2-4})?/) &&
            !zd(s)
          )
            return mr(s);
        }
      }
      var Ki = $d;
      function Wd(e) {
        return e.attributes instanceof y.NamedNodeMap
          ? e.attributes
          : e.cloneNode(!1).attributes;
      }
      var jr = Wd,
        Gd = (function () {
          var e;
          function t(r) {
            var a,
              n,
              i = [
                "matches",
                "matchesSelector",
                "mozMatchesSelector",
                "webkitMatchesSelector",
                "msMatchesSelector",
              ],
              o = i.length;
            for (a = 0; a < o; a++) if (((n = i[a]), r[n])) return n;
          }
          return function (r, a) {
            return (!e || !r[e]) && (e = t(r)), r[e] ? r[e](a) : !1;
          };
        })(),
        jt = Gd;
      function Yd(e) {
        return e.createElement ? e.createElement("A").localName === "A" : !1;
      }
      var Hr = Yd;
      function Kd(e, t) {
        var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t) return "";
        var a = (t.getRootNode && t.getRootNode()) || R;
        if (a.nodeType !== 11) return e(t, r, a);
        for (var n = []; a.nodeType === 11; ) {
          if (!a.host) return "";
          n.unshift({ elm: t, doc: a }), (t = a.host), (a = t.getRootNode());
        }
        return (
          n.unshift({ elm: t, doc: a }),
          n.map(function (i) {
            var o = i.elm,
              l = i.doc;
            return e(o, r, l);
          })
        );
      }
      var qa = Kd,
        La,
        Xd = [
          "class",
          "style",
          "id",
          "selected",
          "checked",
          "disabled",
          "tabindex",
          "aria-checked",
          "aria-selected",
          "aria-invalid",
          "aria-activedescendant",
          "aria-busy",
          "aria-disabled",
          "aria-expanded",
          "aria-grabbed",
          "aria-pressed",
          "aria-valuenow",
        ],
        Jd = 31,
        Qd = /([\\"])/g,
        Zd = /(\r\n|\r|\n)/g;
      function Va(e) {
        return e.replace(Qd, "\\$1").replace(Zd, "\\a ");
      }
      function Xi(e, t) {
        var r = t.name,
          a;
        if (r.indexOf("href") !== -1 || r.indexOf("src") !== -1) {
          var n = Ki(e.getAttribute(r));
          n
            ? (a = Ee(t.name) + '$="' + Va(n) + '"')
            : (a = Ee(t.name) + '="' + Va(e.getAttribute(r)) + '"');
        } else a = Ee(r) + '="' + Va(t.value) + '"';
        return a;
      }
      function ja(e, t) {
        return e.count < t.count ? -1 : e.count === t.count ? 0 : 1;
      }
      function Ji(e) {
        return (
          !Xd.includes(e.name) &&
          e.name.indexOf(":") === -1 &&
          (!e.value || e.value.length < Jd)
        );
      }
      function zr(e) {
        var t = { classes: {}, tags: {}, attributes: {} };
        e = Array.isArray(e) ? e : [e];
        for (
          var r = e.slice(),
            a = [],
            n = function () {
              var o = r.pop(),
                l = o.actualNode;
              if (l.querySelectorAll) {
                var u = l.nodeName;
                t.tags[u] ? t.tags[u]++ : (t.tags[u] = 1),
                  l.classList &&
                    Array.from(l.classList).forEach(function (s) {
                      var c = Ee(s);
                      t.classes[c] ? t.classes[c]++ : (t.classes[c] = 1);
                    }),
                  l.hasAttributes() &&
                    Array.from(jr(l))
                      .filter(Ji)
                      .forEach(function (s) {
                        var c = Xi(l, s);
                        c &&
                          (t.attributes[c]
                            ? t.attributes[c]++
                            : (t.attributes[c] = 1));
                      });
              }
              for (
                o.children.length && (a.push(r), (r = o.children.slice()));
                !r.length && a.length;

              )
                r = a.pop();
            };
          r.length;

        )
          n();
        return t;
      }
      function e1(e, t) {
        var r = [],
          a = t.classes,
          n = t.tags;
        return (
          e.classList &&
            Array.from(e.classList).forEach(function (i) {
              var o = Ee(i);
              a[o] < n[e.nodeName] &&
                r.push({ name: o, count: a[o], species: "class" });
            }),
          r.sort(ja)
        );
      }
      function t1(e, t) {
        var r = (e.parentNode && Array.from(e.parentNode.children || "")) || [],
          a = r.find(function (i) {
            return i !== e && jt(i, t);
          });
        if (a) {
          var n = 1 + r.indexOf(e);
          return ":nth-child(" + n + ")";
        } else return "";
      }
      function r1(e) {
        if (!!e.getAttribute("id")) {
          var t = (e.getRootNode && e.getRootNode()) || R,
            r = "#" + Ee(e.getAttribute("id") || "");
          if (!r.match(/player_uid_/) && t.querySelectorAll(r).length === 1)
            return r;
        }
      }
      function Qi(e) {
        return (
          typeof La > "u" && (La = Hr(R)),
          Ee(La ? e.localName : e.nodeName.toLowerCase())
        );
      }
      function a1(e, t) {
        var r = [],
          a = t.attributes,
          n = t.tags;
        return (
          e.hasAttributes() &&
            Array.from(jr(e))
              .filter(Ji)
              .forEach(function (i) {
                var o = Xi(e, i);
                o &&
                  a[o] < n[e.nodeName] &&
                  r.push({ name: o, count: a[o], species: "attribute" });
              }),
          r.sort(ja)
        );
      }
      function n1(e, t) {
        var r = "",
          a,
          n = e1(e, t),
          i = a1(e, t);
        return (
          n.length && n[0].count === 1
            ? (a = [n[0]])
            : i.length && i[0].count === 1
            ? ((a = [i[0]]), (r = Qi(e)))
            : ((a = n.concat(i)),
              a.sort(ja),
              (a = a.slice(0, 3)),
              a.some(function (o) {
                return o.species === "class";
              })
                ? a.sort(function (o, l) {
                    return o.species !== l.species && o.species === "class"
                      ? -1
                      : o.species === l.species
                      ? 0
                      : 1;
                  })
                : (r = Qi(e))),
          (r += a.reduce(function (o, l) {
            switch (l.species) {
              case "class":
                return o + "." + l.name;
              case "attribute":
                return o + "[" + l.name + "]";
            }
            return o;
          }, ""))
        );
      }
      function i1(e, t, r) {
        if (!v._selectorData)
          throw new Error("Expect axe._selectorData to be set up");
        var a = t.toRoot,
          n = a === void 0 ? !1 : a,
          i,
          o;
        do {
          var l = r1(e);
          l || ((l = n1(e, v._selectorData)), (l += t1(e, l))),
            i ? (i = l + " > " + i) : (i = l),
            o
              ? (o = o.filter(function (u) {
                  return jt(u, i);
                }))
              : (o = Array.from(r.querySelectorAll(i))),
            (e = e.parentElement);
        } while ((o.length > 1 || n) && e && e.nodeType !== 11);
        return o.length === 1
          ? i
          : i.indexOf(" > ") !== -1
          ? ":root" + i.substring(i.indexOf(" > "))
          : ":root";
      }
      function Ha(e, t) {
        return qa(i1, e, t);
      }
      function Zi(e) {
        var t = e.nodeName.toLowerCase(),
          r = e.parentElement;
        if (!r) return t;
        var a = "";
        if (t !== "head" && t !== "body" && r.children.length > 1) {
          var n = Array.prototype.indexOf.call(r.children, e) + 1;
          a = ":nth-child(".concat(n, ")");
        }
        return Zi(r) + " > " + t + a;
      }
      function Ur(e, t) {
        return qa(Zi, e, t);
      }
      function eo(e, t) {
        var r, a;
        if (!e) return [];
        if (!t && e.nodeType === 9) return (t = [{ str: "html" }]), t;
        if (
          ((t = t || []),
          e.parentNode && e.parentNode !== e && (t = eo(e.parentNode, t)),
          e.previousSibling)
        ) {
          (a = 1), (r = e.previousSibling);
          do
            r.nodeType === 1 && r.nodeName === e.nodeName && a++,
              (r = r.previousSibling);
          while (r);
          a === 1 && (a = null);
        } else if (e.nextSibling) {
          r = e.nextSibling;
          do
            r.nodeType === 1 && r.nodeName === e.nodeName
              ? ((a = 1), (r = null))
              : ((a = null), (r = r.previousSibling));
          while (r);
        }
        if (e.nodeType === 1) {
          var n = {};
          n.str = e.nodeName.toLowerCase();
          var i = e.getAttribute && Ee(e.getAttribute("id"));
          i &&
            e.ownerDocument.querySelectorAll("#" + i).length === 1 &&
            (n.id = e.getAttribute("id")),
            a > 1 && (n.count = a),
            t.push(n);
        }
        return t;
      }
      function o1(e) {
        return e.reduce(function (t, r) {
          return r.id
            ? "/".concat(r.str, "[@id='").concat(r.id, "']")
            : t +
                "/".concat(r.str) +
                (r.count > 0 ? "[".concat(r.count, "]") : "");
        }, "");
      }
      function l1(e) {
        var t = eo(e);
        return o1(t);
      }
      var to = l1,
        hr = {},
        u1 = {
          set: function (t, r) {
            s1(t), (hr[t] = r);
          },
          get: function (t, r) {
            if ((c1(r), t in hr)) return hr[t];
            if (typeof r == "function") {
              var a = r();
              return (
                me(
                  a !== void 0,
                  "Cache creator function should not return undefined"
                ),
                this.set(t, a),
                hr[t]
              );
            }
          },
          clear: function () {
            hr = {};
          },
        };
      function s1(e) {
        me(typeof e == "string", "key must be a string, " + P(e) + " given"),
          me(e !== "", "key must not be empty");
      }
      function c1(e) {
        me(
          typeof e == "function" || typeof e > "u",
          "creator must be a function or undefined, " + P(e) + " given"
        );
      }
      var ae = u1;
      function d1(e, t) {
        var r = t || e;
        return ae.get("nodeMap") ? ae.get("nodeMap").get(r) : null;
      }
      var B = d1;
      function f1(e, t) {
        if (((t = t || 300), e.length > t)) {
          var r = e.indexOf(">");
          e = e.substring(0, r + 1);
        }
        return e;
      }
      function p1(e) {
        if (!(e != null && e.outerHTML)) return "";
        var t = e.outerHTML;
        return (
          !t &&
            typeof y.XMLSerializer == "function" &&
            (t = new y.XMLSerializer().serializeToString(e)),
          f1(t || "")
        );
      }
      function Ht(e) {
        var t,
          r,
          a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (
          ((this.spec = n),
          e instanceof X
            ? ((this._virtualNode = e), (this._element = e.actualNode))
            : ((this._element = e), (this._virtualNode = B(e))),
          (this.fromFrame =
            ((t = this.spec.selector) === null || t === void 0
              ? void 0
              : t.length) > 1),
          a.absolutePaths && (this._options = { toRoot: !0 }),
          (this.nodeIndexes = []),
          Array.isArray(this.spec.nodeIndexes)
            ? (this.nodeIndexes = this.spec.nodeIndexes)
            : typeof ((r = this._virtualNode) === null || r === void 0
                ? void 0
                : r.nodeIndex) == "number" &&
              (this.nodeIndexes = [this._virtualNode.nodeIndex]),
          (this.source = null),
          !v._audit.noHtml)
        ) {
          var i;
          this.source =
            (i = this.spec.source) !== null && i !== void 0
              ? i
              : p1(this._element);
        }
      }
      (Ht.prototype = {
        get selector() {
          return this.spec.selector || [Ha(this.element, this._options)];
        },
        get ancestry() {
          return this.spec.ancestry || [Ur(this.element)];
        },
        get xpath() {
          return this.spec.xpath || [to(this.element)];
        },
        get element() {
          return this._element;
        },
        toJSON: function () {
          return {
            selector: this.selector,
            source: this.source,
            xpath: this.xpath,
            ancestry: this.ancestry,
            nodeIndexes: this.nodeIndexes,
          };
        },
      }),
        (Ht.fromFrame = function (t, r, a) {
          var n = Ht.mergeSpecs(t, a);
          return new Ht(a.element, r, n);
        }),
        (Ht.mergeSpecs = function (t, r) {
          return ne({}, t, {
            selector: [].concat(ie(r.selector), ie(t.selector)),
            ancestry: [].concat(ie(r.ancestry), ie(t.ancestry)),
            xpath: [].concat(ie(r.xpath), ie(t.xpath)),
            nodeIndexes: [].concat(ie(r.nodeIndexes), ie(t.nodeIndexes)),
          });
        });
      var rt = Ht;
      function m1(e, t, r, a) {
        return {
          isAsync: !1,
          async: function () {
            return (
              (this.isAsync = !0),
              function (i) {
                i instanceof Error ? a(i) : ((e.result = i), r(e));
              }
            );
          },
          data: function (i) {
            e.data = i;
          },
          relatedNodes: function (i) {
            !y.Node ||
              ((i = i instanceof y.Node ? [i] : Yi(i)),
              i.every(function (o) {
                return o instanceof y.Node || o.actualNode;
              }) &&
                (e.relatedNodes = i.map(function (o) {
                  return new rt(o, t);
                })));
          },
        };
      }
      var za = m1;
      function Ua(e) {
        var t,
          r,
          a,
          n,
          i = e;
        if (
          ((t = y) !== null && t !== void 0 && t.Node && e instanceof y.Node) ||
          ((r = y) !== null &&
            r !== void 0 &&
            r.HTMLCollection &&
            e instanceof y.HTMLCollection)
        )
          return e;
        if (e !== null && P(e) === "object")
          if (Array.isArray(e))
            for (i = [], a = 0, n = e.length; a < n; a++) i[a] = Ua(e[a]);
          else {
            i = {};
            for (a in e) i[a] = Ua(e[a]);
          }
        return i;
      }
      var mt = Ua,
        h1 = pt(Ri()),
        vr = new h1.CssSelectorParser();
      vr.registerSelectorPseudos("not"),
        vr.registerSelectorPseudos("is"),
        vr.registerNestingOperators(">"),
        vr.registerAttrEqualityMods("^", "$", "*", "~");
      var ro = vr;
      function v1(e, t) {
        return (
          e.props.nodeType === 1 &&
          (t.tag === "*" || e.props.nodeName === t.tag)
        );
      }
      function g1(e, t) {
        return (
          !t.classes ||
          t.classes.every(function (r) {
            return e.hasClass(r.value);
          })
        );
      }
      function b1(e, t) {
        return (
          !t.attributes ||
          t.attributes.every(function (r) {
            var a = e.attr(r.key);
            return a !== null && r.test(a);
          })
        );
      }
      function y1(e, t) {
        return !t.id || e.props.id === t.id;
      }
      function D1(e, t) {
        return !!(
          !t.pseudos ||
          t.pseudos.every(function (r) {
            if (r.name === "not")
              return !r.expressions.some(function (a) {
                return zt(e, a);
              });
            if (r.name === "is")
              return r.expressions.some(function (a) {
                return zt(e, a);
              });
            throw new Error(
              "the pseudo selector " + r.name + " has not yet been implemented"
            );
          })
        );
      }
      function ao(e, t) {
        return v1(e, t) && g1(e, t) && b1(e, t) && y1(e, t) && D1(e, t);
      }
      var gr = (function () {
          var e = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,
            t = "\\";
          return function (r) {
            return r.replace(e, t);
          };
        })(),
        $a = /\\/g;
      function w1(e) {
        if (!!e)
          return e.map(function (t) {
            var r = t.name.replace($a, ""),
              a = (t.value || "").replace($a, ""),
              n,
              i;
            switch (t.operator) {
              case "^=":
                i = new RegExp("^" + gr(a));
                break;
              case "$=":
                i = new RegExp(gr(a) + "$");
                break;
              case "~=":
                i = new RegExp("(^|\\s)" + gr(a) + "(\\s|$)");
                break;
              case "|=":
                i = new RegExp("^" + gr(a) + "(-|$)");
                break;
              case "=":
                n = function (l) {
                  return a === l;
                };
                break;
              case "*=":
                n = function (l) {
                  return l && l.includes(a);
                };
                break;
              case "!=":
                n = function (l) {
                  return a !== l;
                };
                break;
              default:
                n = function (l) {
                  return l !== null;
                };
            }
            return (
              a === "" &&
                /^[*$^]=$/.test(t.operator) &&
                (n = function () {
                  return !1;
                }),
              n ||
                (n = function (l) {
                  return l && i.test(l);
                }),
              {
                key: r,
                value: a,
                type: typeof t.value > "u" ? "attrExist" : "attrValue",
                test: n,
              }
            );
          });
      }
      function _1(e) {
        if (!!e)
          return e.map(function (t) {
            return (
              (t = t.replace($a, "")),
              { value: t, regexp: new RegExp("(^|\\s)" + gr(t) + "(\\s|$)") }
            );
          });
      }
      function x1(e) {
        if (!!e)
          return e.map(function (t) {
            var r;
            return (
              ["is", "not"].includes(t.name) &&
                ((r = t.value),
                (r = r.selectors ? r.selectors : [r]),
                (r = no(r))),
              { name: t.name, expressions: r, value: t.value }
            );
          });
      }
      function no(e) {
        return e.map(function (t) {
          for (var r = [], a = t.rule; a; )
            r.push({
              tag: a.tagName ? a.tagName.toLowerCase() : "*",
              combinator: a.nestingOperator ? a.nestingOperator : " ",
              id: a.id,
              attributes: w1(a.attrs),
              classes: _1(a.classNames),
              pseudos: x1(a.pseudos),
            }),
              (a = a.rule);
          return r;
        });
      }
      function $r(e) {
        var t = ro.parse(e);
        return (t = t.selectors ? t.selectors : [t]), no(t);
      }
      function io(e, t, r, a) {
        if (!e) return !1;
        for (
          var n = Array.isArray(t), i = n ? t[r] : t, o = ao(e, i);
          !o && a && e.parent;

        )
          (e = e.parent), (o = ao(e, i));
        if (r > 0) {
          if ([" ", ">"].includes(i.combinator) === !1)
            throw new Error(
              "axe.utils.matchesExpression does not support the combinator: " +
                i.combinator
            );
          o = o && io(e.parent, t, r - 1, i.combinator === " ");
        }
        return o;
      }
      function zt(e, t, r) {
        return io(e, t, t.length - 1, r);
      }
      function E1(e, t) {
        var r = $r(t);
        return r.some(function (a) {
          return zt(e, a);
        });
      }
      var Wa = E1;
      function A1(e, t) {
        for (; e; ) {
          if (Wa(e, t)) return e;
          if (typeof e.parent > "u")
            throw new TypeError("Cannot resolve parent for non-DOM nodes");
          e = e.parent;
        }
        return null;
      }
      var $e = A1;
      function Wr() {}
      function Ga(e) {
        if (typeof e != "function")
          throw new TypeError("Queue methods require functions as arguments");
      }
      function F1() {
        var e = [],
          t = 0,
          r = 0,
          a = Wr,
          n = !1,
          i,
          o = function (p) {
            (i = p),
              setTimeout(function () {
                i != null && St("Uncaught error (of queue)", i);
              }, 1);
          },
          l = o;
        function u(f) {
          return function (p) {
            (e[f] = p), (r -= 1), !r && a !== Wr && ((n = !0), a(e));
          };
        }
        function s(f) {
          return (a = Wr), l(f), e;
        }
        function c() {
          for (var f = e.length; t < f; t++) {
            var p = e[t];
            try {
              p.call(null, u(t), s);
            } catch (m) {
              s(m);
            }
          }
        }
        var d = {
          defer: function (p) {
            if (P(p) === "object" && p.then && p.catch) {
              var m = p;
              p = function (D, h) {
                m.then(D).catch(h);
              };
            }
            if ((Ga(p), i === void 0)) {
              if (n) throw new Error("Queue already completed");
              return e.push(p), ++r, c(), d;
            }
          },
          then: function (p) {
            if ((Ga(p), a !== Wr)) throw new Error("queue `then` already set");
            return i || ((a = p), r || ((n = !0), a(e))), d;
          },
          catch: function (p) {
            if ((Ga(p), l !== o)) throw new Error("queue `catch` already set");
            return i ? (p(i), (i = null)) : (l = p), d;
          },
          abort: s,
        };
        return d;
      }
      var lt = F1,
        Ut,
        $t,
        Ya = y.crypto || y.msCrypto;
      !$t &&
        Ya &&
        Ya.getRandomValues &&
        ((Ka = new Uint8Array(16)),
        ($t = function () {
          return Ya.getRandomValues(Ka), Ka;
        }));
      var Ka;
      $t ||
        ((Xa = new Array(16)),
        ($t = function () {
          for (var t = 0, r; t < 16; t++)
            (t & 3) === 0 && (r = Math.random() * 4294967296),
              (Xa[t] = (r >>> ((t & 3) << 3)) & 255);
          return Xa;
        }));
      for (
        var Xa,
          oo = typeof y.Buffer == "function" ? y.Buffer : Array,
          Ja = [],
          lo = {},
          Wt = 0;
        Wt < 256;
        Wt++
      )
        (Ja[Wt] = (Wt + 256).toString(16).substr(1)), (lo[Ja[Wt]] = Wt);
      function C1(e, t, r) {
        var a = (t && r) || 0,
          n = 0;
        for (
          t = t || [],
            e.toLowerCase().replace(/[0-9a-f]{2}/g, function (i) {
              n < 16 && (t[a + n++] = lo[i]);
            });
          n < 16;

        )
          t[a + n++] = 0;
        return t;
      }
      function Qa(e, t) {
        var r = t || 0,
          a = Ja;
        return (
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          "-" +
          a[e[r++]] +
          a[e[r++]] +
          "-" +
          a[e[r++]] +
          a[e[r++]] +
          "-" +
          a[e[r++]] +
          a[e[r++]] +
          "-" +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]] +
          a[e[r++]]
        );
      }
      var wt = $t(),
        k1 = [wt[0] | 1, wt[1], wt[2], wt[3], wt[4], wt[5]],
        uo = ((wt[6] << 8) | wt[7]) & 16383,
        Za = 0,
        en = 0;
      function so(e, t, r) {
        var a = (t && r) || 0,
          n = t || [];
        e = e || {};
        var i = e.clockseq != null ? e.clockseq : uo,
          o = e.msecs != null ? e.msecs : new Date().getTime(),
          l = e.nsecs != null ? e.nsecs : en + 1,
          u = o - Za + (l - en) / 1e4;
        if (
          (u < 0 && e.clockseq == null && (i = (i + 1) & 16383),
          (u < 0 || o > Za) && e.nsecs == null && (l = 0),
          l >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (Za = o), (en = l), (uo = i), (o += 122192928e5);
        var s = ((o & 268435455) * 1e4 + l) % 4294967296;
        (n[a++] = (s >>> 24) & 255),
          (n[a++] = (s >>> 16) & 255),
          (n[a++] = (s >>> 8) & 255),
          (n[a++] = s & 255);
        var c = ((o / 4294967296) * 1e4) & 268435455;
        (n[a++] = (c >>> 8) & 255),
          (n[a++] = c & 255),
          (n[a++] = ((c >>> 24) & 15) | 16),
          (n[a++] = (c >>> 16) & 255),
          (n[a++] = (i >>> 8) | 128),
          (n[a++] = i & 255);
        for (var d = e.node || k1, f = 0; f < 6; f++) n[a + f] = d[f];
        return t || Qa(n);
      }
      function Ot(e, t, r) {
        var a = (t && r) || 0;
        typeof e == "string" &&
          ((t = e == "binary" ? new oo(16) : null), (e = null)),
          (e = e || {});
        var n = e.random || (e.rng || $t)();
        if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), t))
          for (var i = 0; i < 16; i++) t[a + i] = n[i];
        return t || Qa(n);
      }
      (Ut = Ot),
        (Ut.v1 = so),
        (Ut.v4 = Ot),
        (Ut.parse = C1),
        (Ut.unparse = Qa),
        (Ut.BufferClass = oo),
        (v._uuid = so());
      var R1 = Ot,
        T1 = Object.freeze([
          "EvalError",
          "RangeError",
          "ReferenceError",
          "SyntaxError",
          "TypeError",
          "URIError",
        ]);
      function S1(e) {
        var t = e.topic,
          r = e.channelId,
          a = e.message,
          n = e.messageId,
          i = e.keepalive,
          o = {
            channelId: r,
            topic: t,
            messageId: n,
            keepalive: !!i,
            source: co(),
          };
        return (
          a instanceof Error
            ? (o.error = { name: a.name, message: a.message, stack: a.stack })
            : (o.payload = a),
          JSON.stringify(o)
        );
      }
      function O1(e) {
        var t;
        try {
          t = JSON.parse(e);
        } catch {
          return;
        }
        if (!!I1(t)) {
          var r = t,
            a = r.topic,
            n = r.channelId,
            i = r.messageId,
            o = r.keepalive,
            l = P(t.error) === "object" ? P1(t.error) : t.payload;
          return {
            topic: a,
            message: l,
            messageId: i,
            channelId: n,
            keepalive: !!o,
          };
        }
      }
      function I1(e) {
        return (
          e !== null &&
          P(e) === "object" &&
          typeof e.channelId == "string" &&
          e.source === co()
        );
      }
      function P1(e) {
        var t = e.message || "Unknown error occurred",
          r = T1.includes(e.name) ? e.name : "Error",
          a = y[r] || Error;
        return (
          e.stack &&
            (t +=
              `
` + e.stack.replace(e.message, "")),
          new a(t)
        );
      }
      function co() {
        var e = "axeAPI",
          t = "";
        return (
          typeof v < "u" &&
            v._audit &&
            v._audit.application &&
            (e = v._audit.application),
          typeof v < "u" && (t = v.version),
          e + "." + t
        );
      }
      function tn(e) {
        po(e),
          me(
            y.parent === e,
            "Source of the response must be the parent window."
          );
      }
      function fo(e) {
        po(e),
          me(
            e.parent === y,
            "Respondable target must be a frame in the current window"
          );
      }
      function po(e) {
        me(y !== e, "Messages can not be sent to the same window.");
      }
      var Gr = {};
      function N1(e, t) {
        var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        me(!Gr[e], "A replyHandler already exists for this message channel."),
          (Gr[e] = { replyHandler: t, sendToParent: r });
      }
      function M1(e) {
        return Gr[e];
      }
      function B1(e) {
        delete Gr[e];
      }
      var Yr = [];
      function rn() {
        var e = "".concat(Ot(), ":").concat(Ot());
        return Yr.includes(e) ? rn() : (Yr.push(e), e);
      }
      function q1(e) {
        return Yr.includes(e) ? !1 : (Yr.push(e), !0);
      }
      function an(e, t, r, a) {
        if (
          (typeof a == "function" && N1(t.channelId, a, r),
          r ? tn(e) : fo(e),
          t.message instanceof Error && !r)
        )
          return v.log(t.message), !1;
        var n = S1(ne({ messageId: rn() }, t)),
          i = v._audit.allowedOrigins;
        return !i || !i.length
          ? !1
          : (i.forEach(function (o) {
              try {
                e.postMessage(n, o);
              } catch (l) {
                throw l instanceof e.DOMException
                  ? new Error(
                      'allowedOrigins value "'.concat(
                        o,
                        '" is not a valid origin'
                      )
                    )
                  : l;
              }
            }),
            !0);
      }
      function L1(e, t, r) {
        if (!e.parent !== y) return v.log(t);
        try {
          an(
            e,
            {
              topic: null,
              channelId: r,
              message: t,
              messageId: rn(),
              keepalive: !0,
            },
            !0
          );
        } catch (a) {
          return v.log(a);
        }
      }
      function mo(e, t) {
        var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        return function (n, i, o) {
          var l = { channelId: t, message: n, keepalive: i };
          an(e, l, r, o);
        };
      }
      function V1(e) {
        var t = v._audit.allowedOrigins;
        return (t && t.includes("*")) || t.includes(e);
      }
      function j1(e, t) {
        var r = e.origin,
          a = e.data,
          n = e.source;
        try {
          var i = O1(a) || {},
            o = i.channelId,
            l = i.message,
            u = i.messageId;
          if (!V1(r) || !q1(u)) return;
          if (l instanceof Error && n.parent !== y) return v.log(l), !1;
          try {
            if (i.topic) {
              var s = mo(n, o);
              tn(n), t(i, s);
            } else H1(n, i);
          } catch (c) {
            L1(n, c, o);
          }
        } catch (c) {
          return v.log(c), !1;
        }
      }
      function H1(e, t) {
        var r = t.channelId,
          a = t.message,
          n = t.keepalive,
          i = M1(r) || {},
          o = i.replyHandler,
          l = i.sendToParent;
        if (!!o) {
          l ? tn(e) : fo(e);
          var u = mo(e, r, l);
          !n && r && B1(r);
          try {
            o(a, n, u);
          } catch (s) {
            v.log(s), u(s, n);
          }
        }
      }
      var z1 = {
        open: function (t) {
          if (typeof y.addEventListener == "function") {
            var r = function (n) {
              j1(n, t);
            };
            return (
              y.addEventListener("message", r, !1),
              function () {
                y.removeEventListener("message", r, !1);
              }
            );
          }
        },
        post: function (t, r, a) {
          return typeof y.addEventListener != "function" ? !1 : an(t, r, !1, a);
        },
      };
      function ho(e) {
        e.updateMessenger(z1);
      }
      var Kr,
        vo,
        nn = {};
      function at(e, t, r, a, n) {
        var i = {
          topic: t,
          message: r,
          channelId: "".concat(Ot(), ":").concat(Ot()),
          keepalive: a,
        };
        return vo(e, i, n);
      }
      function U1(e, t) {
        var r = e.topic,
          a = e.message,
          n = e.keepalive,
          i = nn[r];
        if (!!i)
          try {
            i(a, n, t);
          } catch (o) {
            v.log(o), t(o, n);
          }
      }
      (at.updateMessenger = function (t) {
        var r = t.open,
          a = t.post;
        me(typeof r == "function", "open callback must be a function"),
          me(typeof a == "function", "post callback must be a function"),
          Kr && Kr();
        var n = r(U1);
        n
          ? (me(
              typeof n == "function",
              "open callback must return a cleanup function"
            ),
            (Kr = n))
          : (Kr = null),
          (vo = a);
      }),
        (at.subscribe = function (t, r) {
          me(typeof r == "function", "Subscriber callback must be a function"),
            me(!nn[t], "Topic ".concat(t, " is already registered to.")),
            (nn[t] = r);
        }),
        (at.isInFrame = function () {
          var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
          return !!t.frameElement;
        }),
        ho(at);
      function go(e, t, r, a) {
        var n,
          i,
          o = e.contentWindow,
          l =
            (n =
              (i = t.options) === null || i === void 0
                ? void 0
                : i.pingWaitTime) !== null && n !== void 0
              ? n
              : 500;
        if (!o) {
          St("Frame does not have a content window", e), r(null);
          return;
        }
        if (l === 0) {
          bo(e, t, r, a);
          return;
        }
        var u = setTimeout(function () {
          u = setTimeout(function () {
            t.debug ? a(yo("No response from frame", e)) : r(null);
          }, 0);
        }, l);
        at(o, "axe.ping", null, void 0, function () {
          clearTimeout(u), bo(e, t, r, a);
        });
      }
      function bo(e, t, r, a) {
        var n,
          i,
          o =
            (n =
              (i = t.options) === null || i === void 0
                ? void 0
                : i.frameWaitTime) !== null && n !== void 0
              ? n
              : 6e4,
          l = e.contentWindow,
          u = setTimeout(function () {
            a(yo("Axe in frame timed out", e));
          }, o);
        at(l, "axe.start", t, void 0, function (s) {
          clearTimeout(u), s instanceof Error ? a(s) : r(s);
        });
      }
      function yo(e, t) {
        var r;
        return v._tree && (r = Ha(t)), new Error(e + ": " + (r || t));
      }
      function $1(e) {
        var t = [];
        return t
          .concat(e.any || [])
          .concat(e.all || [])
          .concat(e.none || []);
      }
      var Xr = $1;
      function W1(e, t, r) {
        if (Array.isArray(e))
          return e.find(function (a) {
            return P(a) === "object" && a[t] === r;
          });
      }
      var br = W1;
      function G1(e, t, r) {
        e.forEach(function (a) {
          a.node = rt.fromFrame(a.node, t, r);
          var n = Xr(a);
          n.forEach(function (i) {
            i.relatedNodes = i.relatedNodes.map(function (o) {
              return rt.fromFrame(o, t, r);
            });
          });
        });
      }
      function Y1(e, t) {
        for (var r = t[0].node, a = 0; a < e.length; a++) {
          var n = e[a].node,
            i = Do(n.nodeIndexes, r.nodeIndexes);
          if (i > 0 || (i === 0 && r.selector.length < n.selector.length)) {
            e.splice.apply(e, [a, 0].concat(ie(t)));
            return;
          }
        }
        e.push.apply(e, ie(t));
      }
      function K1(e) {
        return !e || !e.results
          ? null
          : Array.isArray(e.results)
          ? e.results.length
            ? e.results
            : null
          : [e.results];
      }
      function X1(e, t) {
        var r = [];
        return (
          e.forEach(function (a) {
            var n = K1(a);
            if (!(!n || !n.length)) {
              var i = J1(a, t);
              n.forEach(function (o) {
                o.nodes && i && G1(o.nodes, t, i);
                var l = br(r, "id", o.id);
                l ? o.nodes.length && Y1(l.nodes, o.nodes) : r.push(o);
              });
            }
          }),
          r.forEach(function (a) {
            a.nodes &&
              a.nodes.sort(function (n, i) {
                return Do(n.node.nodeIndexes, i.node.nodeIndexes);
              });
          }),
          r
        );
      }
      function Do() {
        for (
          var e =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : [],
            r = Math.max(
              e == null ? void 0 : e.length,
              t == null ? void 0 : t.length
            ),
            a = 0;
          a < r;
          a++
        ) {
          var n = e == null ? void 0 : e[a],
            i = t == null ? void 0 : t[a];
          if (typeof n != "number" || isNaN(n)) return a === 0 ? 1 : -1;
          if (typeof i != "number" || isNaN(i)) return a === 0 ? -1 : 1;
          if (n !== i) return n - i;
        }
        return 0;
      }
      var Jr = X1;
      function J1(e, t) {
        return e.frameElement
          ? new rt(e.frameElement, t)
          : e.frameSpec
          ? e.frameSpec
          : null;
      }
      function wo(e, t, r, a, n, i) {
        var o = lt(),
          l = e.frames;
        l.forEach(function (u) {
          var s = u.node,
            c = Ve(u, zs);
          o.defer(function (d, f) {
            var p = { options: t, command: r, parameter: a, context: c };
            function m(b) {
              return d(b ? { results: b, frameElement: s } : null);
            }
            go(s, p, m, f);
          });
        }),
          o
            .then(function (u) {
              n(Jr(u, t));
            })
            .catch(i);
      }
      function Gt(e, t) {
        if (e.shadowId || t.shadowId) {
          do {
            if (e.shadowId === t.shadowId) return !0;
            t = t.parent;
          } while (t);
          return !1;
        }
        if (!e.actualNode)
          do {
            if (t === e) return !0;
            t = t.parent;
          } while (t);
        if (typeof e.actualNode.contains != "function") {
          var r = e.actualNode.compareDocumentPosition(t.actualNode);
          return !!(r & 16);
        }
        return e.actualNode.contains(t.actualNode);
      }
      function _o() {
        for (
          var e = {}, t = arguments.length, r = new Array(t), a = 0;
          a < t;
          a++
        )
          r[a] = arguments[a];
        return (
          r.forEach(function (n) {
            if (!(!n || P(n) !== "object" || Array.isArray(n)))
              for (var i = 0, o = Object.keys(n); i < o.length; i++) {
                var l = o[i];
                !e.hasOwnProperty(l) ||
                P(n[l]) !== "object" ||
                Array.isArray(e[l])
                  ? (e[l] = n[l])
                  : (e[l] = _o(e[l], n[l]));
              }
          }),
          e
        );
      }
      var on = _o;
      function Q1(e, t) {
        Object.assign(e, t),
          Object.keys(t)
            .filter(function (r) {
              return typeof t[r] == "function";
            })
            .forEach(function (r) {
              e[r] = null;
              try {
                e[r] = t[r](e);
              } catch {}
            });
      }
      var ln = Q1,
        Z1 = [
          "article",
          "aside",
          "blockquote",
          "body",
          "div",
          "footer",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "main",
          "nav",
          "p",
          "section",
          "span",
        ];
      function ef(e) {
        if (e.shadowRoot) {
          var t = e.nodeName.toLowerCase();
          if (Z1.includes(t) || /^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))
            return !0;
        }
        return !1;
      }
      var Qr = ef,
        un = {};
      ke(un, {
        createGrid: function () {
          return Xt;
        },
        findElmsInContext: function () {
          return xo;
        },
        findNearbyElms: function () {
          return mn;
        },
        findUp: function () {
          return Kt;
        },
        findUpVirtual: function () {
          return Yt;
        },
        getComposedParent: function () {
          return Me;
        },
        getElementByReference: function () {
          return gn;
        },
        getElementCoordinates: function () {
          return cn;
        },
        getElementStack: function () {
          return wn;
        },
        getRootNode: function () {
          return je;
        },
        getScrollOffset: function () {
          return Lo;
        },
        getTabbableElements: function () {
          return Ko;
        },
        getTextElementStack: function () {
          return Xo;
        },
        getViewportSize: function () {
          return Zr;
        },
        hasContent: function () {
          return aa;
        },
        hasContentVirtual: function () {
          return Dr;
        },
        hasLangText: function () {
          return En;
        },
        idrefs: function () {
          return it;
        },
        insertedIntoFocusOrder: function () {
          return tl;
        },
        isCurrentPageLink: function () {
          return vn;
        },
        isFocusable: function () {
          return Re;
        },
        isHTML5: function () {
          return nl;
        },
        isHiddenForEveryone: function () {
          return _t;
        },
        isHiddenWithCSS: function () {
          return $f;
        },
        isInTabOrder: function () {
          return st;
        },
        isInTextBlock: function () {
          return Fn;
        },
        isModalOpen: function () {
          return wr;
        },
        isMultiline: function () {
          return cl;
        },
        isNativelyFocusable: function () {
          return An;
        },
        isNode: function () {
          return dp;
        },
        isOffscreen: function () {
          return ea;
        },
        isOpaque: function () {
          return yp;
        },
        isSkipLink: function () {
          return Cn;
        },
        isVisible: function () {
          return Ap;
        },
        isVisibleOnScreen: function () {
          return Qe;
        },
        isVisibleToScreenReaders: function () {
          return Ae;
        },
        isVisualContent: function () {
          return _n;
        },
        reduceToElementsBelowFloating: function () {
          return dl;
        },
        shadowElementsFromPoint: function () {
          return kp;
        },
        urlPropsFromAttribute: function () {
          return Pp;
        },
        visuallyContains: function () {
          return la;
        },
        visuallyOverlaps: function () {
          return kn;
        },
        visuallySort: function () {
          return bn;
        },
      });
      function tf(e) {
        var t = (e.getRootNode && e.getRootNode()) || R;
        return t === e && (t = R), t;
      }
      var yr = tf,
        je = yr;
      function rf(e) {
        var t = e.context,
          r = e.value,
          a = e.attr,
          n = e.elm,
          i = n === void 0 ? "" : n,
          o,
          l = Ee(r);
        return (
          t.nodeType === 9 || t.nodeType === 11 ? (o = t) : (o = je(t)),
          Array.from(o.querySelectorAll(i + "[" + a + "=" + l + "]"))
        );
      }
      var xo = rf;
      function af(e, t) {
        var r;
        if (
          ((r = e.actualNode),
          !e.shadowId && typeof e.actualNode.closest == "function")
        ) {
          var a = e.actualNode.closest(t);
          return a || null;
        }
        do
          (r = r.assignedSlot ? r.assignedSlot : r.parentNode),
            r && r.nodeType === 11 && (r = r.host);
        while (r && !jt(r, t) && r !== R.documentElement);
        return !r || !jt(r, t) ? null : r;
      }
      var Yt = af;
      function nf(e, t) {
        return Yt(B(e), t);
      }
      var Kt = nf,
        of = pt(Vi());
      v._memoizedFns = [];
      function lf(e) {
        var t = (0, of.default)(e);
        return v._memoizedFns.push(t), t;
      }
      var nt = lf;
      function Eo(e, t) {
        return (
          (e.left | 0) < (t.right | 0) &&
          (e.right | 0) > (t.left | 0) &&
          (e.top | 0) < (t.bottom | 0) &&
          (e.bottom | 0) > (t.top | 0)
        );
      }
      var uf =
          /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,
        sf = /(\w+)\((\d+)/;
      function Ao(e) {
        return ["style", "script", "noscript", "template"].includes(
          e.props.nodeName
        );
      }
      function Fo(e) {
        return e.props.nodeName === "area"
          ? !1
          : e.getComputedStylePropertyValue("display") === "none";
      }
      function Co(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.isAncestor;
        return (
          !r &&
          ["hidden", "collapse"].includes(
            e.getComputedStylePropertyValue("visibility")
          )
        );
      }
      function ko(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.isAncestor;
        return (
          !!r &&
          e.getComputedStylePropertyValue("content-visibility") === "hidden"
        );
      }
      function Ro(e) {
        return e.attr("aria-hidden") === "true";
      }
      function To(e) {
        return e.getComputedStylePropertyValue("opacity") === "0";
      }
      function So(e) {
        var t = ht(e.actualNode),
          r = parseInt(e.getComputedStylePropertyValue("height")),
          a = parseInt(e.getComputedStylePropertyValue("width"));
        return !!t && (r === 0 || a === 0);
      }
      function Oo(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.isAncestor;
        if (r) return !1;
        var a = e.boundingClientRect,
          n = Io(e);
        return n.length
          ? n.some(function (i) {
              var o = i.boundingClientRect;
              return o.width < 2 || o.height < 2 ? !0 : !Eo(a, o);
            })
          : !1;
      }
      var Io = nt(function (t) {
        var r = [];
        if (!t) return r;
        var a = t.getComputedStylePropertyValue("overflow");
        return a === "hidden" && r.push(t), r.concat(Io(t.parent));
      });
      function Po(e) {
        var t = e.getComputedStylePropertyValue("clip").match(uf),
          r = e.getComputedStylePropertyValue("clip-path").match(sf);
        if (t && t.length === 5) {
          var a = e.getComputedStylePropertyValue("position");
          if (["fixed", "absolute"].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1],
            i = parseInt(r[2], 10);
          switch (n) {
            case "inset":
              return i >= 50;
            case "circle":
              return i === 0;
          }
        }
        return !1;
      }
      function sn(e, t) {
        var r = $e(e, "map");
        if (!r) return !0;
        var a = r.attr("name");
        if (!a) return !0;
        var n = yr(e.actualNode);
        if (!n || n.nodeType !== 9) return !0;
        var i = Ye(v._tree, 'img[usemap="#'.concat(Ee(a), '"]'));
        return !i || !i.length
          ? !0
          : i.some(function (o) {
              return !t(o);
            });
      }
      function No(e) {
        var t;
        if (
          ((t = e.parent) === null || t === void 0
            ? void 0
            : t.props.nodeName) !== "details"
        )
          return !1;
        if (e.props.nodeName === "summary") {
          var r = e.parent.children.find(function (a) {
            return a.props.nodeName === "summary";
          });
          if (r === e) return !1;
        }
        return !e.parent.hasAttr("open");
      }
      var cf = [Fo, Co, ko, No];
      function _t(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.skipAncestors,
          a = t.isAncestor,
          n = a === void 0 ? !1 : a;
        return (e = e instanceof X ? e : B(e)), r ? Mo(e, n) : Bo(e, n);
      }
      var Mo = nt(function (t, r) {
          return Ao(t)
            ? !0
            : t.actualNode
            ? !!(
                cf.some(function (a) {
                  return a(t, { isAncestor: r });
                }) || !t.actualNode.isConnected
              )
            : !1;
        }),
        Bo = nt(function (t, r) {
          return Mo(t, r) ? !0 : t.parent ? Bo(t.parent, !0) : !1;
        });
      function qo(e) {
        if (e.assignedSlot) return qo(e.assignedSlot);
        if (e.parentNode) {
          var t = e.parentNode;
          if (t.nodeType === 1) return t;
          if (t.host) return t.host;
        }
        return null;
      }
      var Me = qo;
      function df(e) {
        if ((!e.nodeType && e.document && (e = e.document), e.nodeType === 9)) {
          var t = e.documentElement,
            r = e.body;
          return {
            left: (t && t.scrollLeft) || (r && r.scrollLeft) || 0,
            top: (t && t.scrollTop) || (r && r.scrollTop) || 0,
          };
        }
        return { left: e.scrollLeft, top: e.scrollTop };
      }
      var Lo = df;
      function ff(e) {
        var t = Lo(R),
          r = t.left,
          a = t.top,
          n = e.getBoundingClientRect();
        return {
          top: n.top + a,
          right: n.right + r,
          bottom: n.bottom + a,
          left: n.left + r,
          width: n.right - n.left,
          height: n.bottom - n.top,
        };
      }
      var cn = ff;
      function pf(e) {
        var t = e.document,
          r = t.documentElement;
        if (e.innerWidth) return { width: e.innerWidth, height: e.innerHeight };
        if (r) return { width: r.clientWidth, height: r.clientHeight };
        var a = t.body;
        return { width: a.clientWidth, height: a.clientHeight };
      }
      var Zr = pf;
      function mf(e, t) {
        for (e = Me(e); e && e.nodeName.toLowerCase() !== "html"; ) {
          if (e.scrollTop && ((t += e.scrollTop), t >= 0)) return !1;
          e = Me(e);
        }
        return !0;
      }
      function hf(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.isAncestor;
        if (r) return !1;
        if (((e = e instanceof X ? e.actualNode : e), !!e)) {
          var a,
            n = R.documentElement,
            i = y.getComputedStyle(e),
            o = y.getComputedStyle(R.body || n).getPropertyValue("direction"),
            l = cn(e);
          if (l.bottom < 0 && (mf(e, l.bottom) || i.position === "absolute"))
            return !0;
          if (l.left === 0 && l.right === 0) return !1;
          if (o === "ltr") {
            if (l.right <= 0) return !0;
          } else if (((a = Math.max(n.scrollWidth, Zr(y).width)), l.left >= a))
            return !0;
          return !1;
        }
      }
      var ea = hf,
        vf = [To, So, Oo, Po, ea];
      function Qe(e) {
        return (e = e instanceof X ? e : B(e)), dn(e);
      }
      var dn = nt(function (t, r) {
        return t.actualNode && t.props.nodeName === "area"
          ? !sn(t, dn)
          : _t(t, { skipAncestors: !0, isAncestor: r }) ||
            (t.actualNode &&
              vf.some(function (a) {
                return a(t, { isAncestor: r });
              }))
          ? !1
          : t.parent
          ? dn(t.parent, !0)
          : !0;
      });
      function Vo(e, t) {
        var r = Math.min(e.top, t.top),
          a = Math.max(e.right, t.right),
          n = Math.max(e.bottom, t.bottom),
          i = Math.min(e.left, t.left);
        return new y.DOMRect(i, r, a - i, n - r);
      }
      function fn(e, t) {
        var r = e.x,
          a = e.y,
          n = t.top,
          i = t.right,
          o = t.bottom,
          l = t.left;
        return a >= n && r <= i && a <= o && r >= l;
      }
      function Xt() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : R.body,
          t = arguments.length > 1 ? arguments[1] : void 0,
          r =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : null;
        if (ae.get("gridCreated") && !r) return Z.gridSize;
        if ((ae.set("gridCreated", !0), !r)) {
          var a,
            n = B(R.documentElement);
          if (
            (n || (n = new Tn(R.documentElement)),
            (n._stackingOrder = [0]),
            ((a = t) !== null && a !== void 0) || (t = new pn()),
            jo(t, n),
            ht(n.actualNode))
          ) {
            var i = new pn(n);
            n._subGrid = i;
          }
        }
        for (
          var o = R.createTreeWalker(e, y.NodeFilter.SHOW_ELEMENT, null, !1),
            l = r ? o.nextNode() : o.currentNode;
          l;

        ) {
          var u = B(l);
          l.parentElement
            ? (r = B(l.parentElement))
            : l.parentNode && B(l.parentNode) && (r = B(l.parentNode)),
            u || (u = new v.VirtualNode(l, r)),
            (u._stackingOrder = bf(u, r));
          var s = yf(u, r),
            c = s ? s._subGrid : t;
          if (ht(u.actualNode)) {
            var d = new pn(u);
            u._subGrid = d;
          }
          var f = u.boundingClientRect;
          f.width !== 0 && f.height !== 0 && Qe(l) && jo(c, u),
            Qr(l) && Xt(l.shadowRoot, c, u),
            (l = o.nextNode());
        }
        return Z.gridSize;
      }
      function gf(e, t) {
        var r = e.getComputedStylePropertyValue("position"),
          a = e.getComputedStylePropertyValue("z-index");
        if (
          r === "fixed" ||
          r === "sticky" ||
          (a !== "auto" && r !== "static") ||
          e.getComputedStylePropertyValue("opacity") !== "1"
        )
          return !0;
        var n =
          e.getComputedStylePropertyValue("-webkit-transform") ||
          e.getComputedStylePropertyValue("-ms-transform") ||
          e.getComputedStylePropertyValue("transform") ||
          "none";
        if (n !== "none") return !0;
        var i = e.getComputedStylePropertyValue("mix-blend-mode");
        if (i && i !== "normal") return !0;
        var o = e.getComputedStylePropertyValue("filter");
        if (o && o !== "none") return !0;
        var l = e.getComputedStylePropertyValue("perspective");
        if (l && l !== "none") return !0;
        var u = e.getComputedStylePropertyValue("clip-path");
        if (u && u !== "none") return !0;
        var s =
          e.getComputedStylePropertyValue("-webkit-mask") ||
          e.getComputedStylePropertyValue("mask") ||
          "none";
        if (s !== "none") return !0;
        var c =
          e.getComputedStylePropertyValue("-webkit-mask-image") ||
          e.getComputedStylePropertyValue("mask-image") ||
          "none";
        if (c !== "none") return !0;
        var d =
          e.getComputedStylePropertyValue("-webkit-mask-border") ||
          e.getComputedStylePropertyValue("mask-border") ||
          "none";
        if (
          d !== "none" ||
          e.getComputedStylePropertyValue("isolation") === "isolate"
        )
          return !0;
        var f = e.getComputedStylePropertyValue("will-change");
        if (
          f === "transform" ||
          f === "opacity" ||
          e.getComputedStylePropertyValue("-webkit-overflow-scrolling") ===
            "touch"
        )
          return !0;
        var p = e.getComputedStylePropertyValue("contain");
        if (["layout", "paint", "strict", "content"].includes(p)) return !0;
        if (a !== "auto" && t) {
          var m = t.getComputedStylePropertyValue("display");
          if (
            [
              "flex",
              "inline-flex",
              "inline flex",
              "grid",
              "inline-grid",
              "inline grid",
            ].includes(m)
          )
            return !0;
        }
        return !1;
      }
      function bf(e, t) {
        var r = t._stackingOrder.slice(),
          a = e.getComputedStylePropertyValue("z-index"),
          n = e.getComputedStylePropertyValue("position") !== "static",
          i = e.getComputedStylePropertyValue("float") !== "none";
        if (n && !["auto", "0"].includes(a)) {
          for (
            ;
            r.find(function (l) {
              return l % 1 !== 0;
            });

          ) {
            var o = r.findIndex(function (l) {
              return l % 1 !== 0;
            });
            r.splice(o, 1);
          }
          r[r.length - 1] = parseInt(a);
        }
        return gf(e, t) ? r.push(0) : n ? r.push(0.5) : i && r.push(0.25), r;
      }
      function yf(e, t) {
        for (var r = null, a = [e]; t; ) {
          if (ht(t.actualNode)) {
            r = t;
            break;
          }
          if (t._scrollRegionParent) {
            r = t._scrollRegionParent;
            break;
          }
          a.push(t),
            (t = B(t.actualNode.parentElement || t.actualNode.parentNode));
        }
        return (
          a.forEach(function (n) {
            return (n._scrollRegionParent = r);
          }),
          r
        );
      }
      function jo(e, t) {
        t.clientRects.forEach(function (r) {
          var a;
          ((a = t._grid) !== null && a !== void 0) || (t._grid = e);
          var n = e.getGridPositionOfRect(r);
          e.loopGridPosition(n, function (i) {
            i.includes(t) || i.push(t);
          });
        });
      }
      var pn = (function () {
        function e() {
          var t =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : null;
          cr(this, e), (this.container = t), (this.cells = []);
        }
        return (
          dr(e, [
            {
              key: "toGridIndex",
              value: function (r) {
                return Math.floor(r / Z.gridSize);
              },
            },
            {
              key: "getCellFromPoint",
              value: function (r) {
                var a,
                  n,
                  i = r.x,
                  o = r.y;
                me(this.boundaries, "Grid does not have cells added");
                var l = this.toGridIndex(o),
                  u = this.toGridIndex(i);
                me(
                  fn({ y: l, x: u }, this.boundaries),
                  "Element midpoint exceeds the grid bounds"
                );
                var s =
                  (a = this.cells[l - this.cells._negativeIndex]) !== null &&
                  a !== void 0
                    ? a
                    : [];
                return (n = s[u - s._negativeIndex]) !== null && n !== void 0
                  ? n
                  : [];
              },
            },
            {
              key: "loopGridPosition",
              value: function (r, a) {
                var n = r,
                  i = n.left,
                  o = n.right,
                  l = n.top,
                  u = n.bottom;
                this.boundaries && (r = Vo(this.boundaries, r)),
                  (this.boundaries = r),
                  Ho(this.cells, l, u, function (s, c) {
                    Ho(s, i, o, function (d, f) {
                      a(d, { row: c, col: f });
                    });
                  });
              },
            },
            {
              key: "getGridPositionOfRect",
              value: function (r) {
                var a = r.top,
                  n = r.right,
                  i = r.bottom,
                  o = r.left,
                  l =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : 0;
                return (
                  (a = this.toGridIndex(a - l)),
                  (n = this.toGridIndex(n + l - 1)),
                  (i = this.toGridIndex(i + l - 1)),
                  (o = this.toGridIndex(o - l)),
                  new y.DOMRect(o, a, n - o, i - a)
                );
              },
            },
          ]),
          e
        );
      })();
      function Ho(e, t, r, a) {
        var n;
        if (
          (((n = e._negativeIndex) !== null && n !== void 0) ||
            (e._negativeIndex = 0),
          t < e._negativeIndex)
        ) {
          for (var i = 0; i < e._negativeIndex - t; i++) e.splice(0, 0, []);
          e._negativeIndex = t;
        }
        for (
          var o = t - e._negativeIndex, l = r - e._negativeIndex, u = o;
          u <= l;
          u++
        ) {
          var s, c;
          ((c = e[(s = u)]) !== null && c !== void 0) || (e[s] = []),
            a(e[u], u + e._negativeIndex);
        }
      }
      function mn(e) {
        var t,
          r,
          a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (
          (Xt(),
          !(
            (t = e._grid) !== null &&
            t !== void 0 &&
            (r = t.cells) !== null &&
            r !== void 0 &&
            r.length
          ))
        )
          return [];
        var n = e.boundingClientRect,
          i = e._grid,
          o = hn(e),
          l = i.getGridPositionOfRect(n, a),
          u = [];
        return (
          i.loopGridPosition(l, function (s) {
            var c = ft(s),
              d;
            try {
              for (c.s(); !(d = c.n()).done; ) {
                var f = d.value;
                f && f !== e && !u.includes(f) && o === hn(f) && u.push(f);
              }
            } catch (p) {
              c.e(p);
            } finally {
              c.f();
            }
          }),
          u
        );
      }
      var hn = nt(function (e) {
          return e
            ? e.getComputedStylePropertyValue("position") === "fixed"
              ? !0
              : hn(e.parent)
            : !1;
        }),
        Df = /^\/\#/,
        wf = /^#[!/]/;
      function vn(e) {
        var t,
          r = e.getAttribute("href");
        if (!r || r === "#") return !1;
        if (Df.test(r)) return !0;
        var a = e.hash,
          n = e.protocol,
          i = e.hostname,
          o = e.port,
          l = e.pathname;
        if (wf.test(a)) return !1;
        if (r.charAt(0) === "#") return !0;
        if (
          typeof ((t = y.location) === null || t === void 0
            ? void 0
            : t.origin) != "string" ||
          y.location.origin.indexOf("://") === -1
        )
          return null;
        var u = y.location.origin + y.location.pathname,
          s;
        return (
          i
            ? (s = ""
                .concat(n, "//")
                .concat(i)
                .concat(o ? ":".concat(o) : ""))
            : (s = y.location.origin),
          l ? (s += (l[0] !== "/" ? "/" : "") + l) : (s += y.location.pathname),
          s === u
        );
      }
      function _f(e, t) {
        var r = e.getAttribute(t);
        if (!r || (t === "href" && !vn(e))) return null;
        r.indexOf("#") !== -1 &&
          (r = decodeURIComponent(r.substr(r.indexOf("#") + 1)));
        var a = R.getElementById(r);
        return a || ((a = R.getElementsByName(r)), a.length ? a[0] : null);
      }
      var gn = _f;
      function bn(e, t) {
        Xt();
        for (
          var r = Math.max(e._stackingOrder.length, t._stackingOrder.length),
            a = 0;
          a < r;
          a++
        ) {
          if (typeof t._stackingOrder[a] > "u") return -1;
          if (
            typeof e._stackingOrder[a] > "u" ||
            t._stackingOrder[a] > e._stackingOrder[a]
          )
            return 1;
          if (t._stackingOrder[a] < e._stackingOrder[a]) return -1;
        }
        var n = e.actualNode,
          i = t.actualNode;
        if (n.getRootNode && n.getRootNode() !== i.getRootNode()) {
          for (var o = []; n; )
            o.push({ root: n.getRootNode(), node: n }),
              (n = n.getRootNode().host);
          for (
            ;
            i &&
            !o.find(function (D) {
              return D.root === i.getRootNode();
            });

          )
            i = i.getRootNode().host;
          if (
            ((n = o.find(function (D) {
              return D.root === i.getRootNode();
            }).node),
            n === i)
          )
            return e.actualNode.getRootNode() !== n.getRootNode() ? -1 : 1;
        }
        var l = y.Node,
          u = l.DOCUMENT_POSITION_FOLLOWING,
          s = l.DOCUMENT_POSITION_CONTAINS,
          c = l.DOCUMENT_POSITION_CONTAINED_BY,
          d = n.compareDocumentPosition(i),
          f = d & u ? 1 : -1,
          p = d & s || d & c,
          m = zo(e),
          b = zo(t);
        return m === b || p ? f : b - m;
      }
      function zo(e) {
        return e.getComputedStylePropertyValue("display").indexOf("inline") !==
          -1
          ? 2
          : Uo(e)
          ? 1
          : 0;
      }
      function Uo(e) {
        if (!e) return !1;
        if (e._isFloated !== void 0) return e._isFloated;
        var t = e.getComputedStylePropertyValue("float");
        if (t !== "none") return (e._isFloated = !0), !0;
        var r = Uo(e.parent);
        return (e._isFloated = r), r;
      }
      var $o = {};
      ke($o, {
        getBoundingRect: function () {
          return Vo;
        },
        getOffset: function () {
          return Wo;
        },
        getRectCenter: function () {
          return yn;
        },
        hasVisualOverlap: function () {
          return Go;
        },
        isPointInRect: function () {
          return fn;
        },
        rectsOverlap: function () {
          return Eo;
        },
        splitRects: function () {
          return Yo;
        },
      });
      function Wo(e, t) {
        var r = e.boundingClientRect,
          a = t.boundingClientRect,
          n = xf(r, a),
          i = Ef(n, r, a);
        return Af(n, i);
      }
      function xf(e, t) {
        var r = [
            ["x", "left", "right", "width"],
            ["y", "top", "bottom", "height"],
          ],
          a = {};
        return (
          r.forEach(function (n) {
            var i = ve(n, 4),
              o = i[0],
              l = i[1],
              u = i[2],
              s = i[3];
            if (t[l] < e[l] && t[u] > e[u]) {
              a[o] = e[l] + e[s] / 2;
              return;
            }
            var c = t[l] + t[s] / 2,
              d = Math.abs(c - e[l]),
              f = Math.abs(c - e[u]);
            d >= f ? (a[o] = e[l]) : (a[o] = e[u]);
          }),
          a
        );
      }
      function Ef(e, t, r) {
        var a = e.x,
          n = e.y;
        if (Ff({ x: a, y: n }, r)) {
          var i = Cf({ x: a, y: n }, t, r);
          if (i !== null) return i;
          r = t;
        }
        var o = r,
          l = o.top,
          u = o.right,
          s = o.bottom,
          c = o.left,
          d = a >= c && a <= u,
          f = n >= l && n <= s,
          p = Math.abs(c - a) < Math.abs(u - a) ? c : u,
          m = Math.abs(l - n) < Math.abs(s - n) ? l : s;
        return !d && f
          ? { x: p, y: n }
          : d && !f
          ? { x: a, y: m }
          : !d && !f
          ? { x: p, y: m }
          : Math.abs(a - p) < Math.abs(n - m)
          ? { x: p, y: n }
          : { x: a, y: m };
      }
      function Af(e, t) {
        var r = Math.abs(e.x - t.x),
          a = Math.abs(e.y - t.y);
        return !r || !a ? r || a : Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
      }
      function Ff(e, t) {
        var r = e.x,
          a = e.y;
        return a >= t.top && r <= t.right && a <= t.bottom && r >= t.left;
      }
      function Cf(e, t, r) {
        var a = e.x,
          n = e.y,
          i,
          o;
        if (
          (a === t.left && t.right < r.right
            ? (i = t.right)
            : a === t.right && t.left > r.left && (i = t.left),
          n === t.top && t.bottom < r.bottom
            ? (o = t.bottom)
            : n === t.bottom && t.top > r.top && (o = t.top),
          !i && !o)
        )
          return null;
        if (o) {
          if (!i) return { x: a, y: o };
        } else return { x: i, y: n };
        return Math.abs(a - i) < Math.abs(n - o)
          ? { x: i, y: n }
          : { x: a, y: o };
      }
      function yn(e) {
        var t = e.left,
          r = e.top,
          a = e.width,
          n = e.height;
        return new y.DOMPoint(t + a / 2, r + n / 2);
      }
      function Go(e, t) {
        var r = e.boundingClientRect,
          a = t.boundingClientRect;
        return r.left >= a.right ||
          r.right <= a.left ||
          r.top >= a.bottom ||
          r.bottom <= a.top
          ? !1
          : bn(e, t) > 0;
      }
      function Yo(e, t) {
        var r = [e],
          a = ft(t),
          n;
        try {
          var i = function () {
            var l = n.value;
            r = r.reduce(function (u, s) {
              return u.concat(kf(s, l));
            }, []);
          };
          for (a.s(); !(n = a.n()).done; ) i();
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
        return r;
      }
      function kf(e, t) {
        var r = e.top,
          a = e.left,
          n = e.bottom,
          i = e.right,
          o = r < t.bottom && n > t.top,
          l = a < t.right && i > t.left,
          u = [];
        return (
          ta(t.top, r, n) &&
            l &&
            u.push({ top: r, left: a, bottom: t.top, right: i }),
          ta(t.right, a, i) &&
            o &&
            u.push({ top: r, left: t.right, bottom: n, right: i }),
          ta(t.bottom, r, n) &&
            l &&
            u.push({ top: t.bottom, right: i, bottom: n, left: a }),
          ta(t.left, a, i) &&
            o &&
            u.push({ top: r, left: a, bottom: n, right: t.left }),
          u.length === 0 && u.push(e),
          u.map(Rf)
        );
      }
      var ta = function (t, r, a) {
        return t > r && t < a;
      };
      function Rf(e) {
        return ne({}, e, {
          x: e.left,
          y: e.top,
          height: e.bottom - e.top,
          width: e.right - e.left,
        });
      }
      function Dn(e, t) {
        var r =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
          a = yn(t),
          n = e.getCellFromPoint(a) || [],
          i = Math.floor(a.x),
          o = Math.floor(a.y),
          l = n.filter(function (s) {
            return s.clientRects.some(function (c) {
              var d = c.left,
                f = c.top;
              return (
                i < Math.floor(d + c.width) &&
                i >= Math.floor(d) &&
                o < Math.floor(f + c.height) &&
                o >= Math.floor(f)
              );
            });
          }),
          u = e.container;
        return (
          u && (l = Dn(u._grid, u.boundingClientRect, !0).concat(l)),
          r ||
            (l = l
              .sort(bn)
              .map(function (s) {
                return s.actualNode;
              })
              .concat(R.documentElement)
              .filter(function (s, c, d) {
                return d.indexOf(s) === c;
              })),
          l
        );
      }
      function Tf(e) {
        Xt();
        var t = B(e),
          r = t._grid;
        return r ? Dn(r, t.boundingClientRect) : [];
      }
      var wn = Tf;
      function Sf(e) {
        var t = Ye(e, "*"),
          r = t.filter(function (a) {
            var n = a.isFocusable,
              i = a.actualNode.getAttribute("tabindex");
            return (
              (i = i && !isNaN(parseInt(i, 10)) ? parseInt(i) : null),
              i ? n && i >= 0 : n
            );
          });
        return r;
      }
      var Ko = Sf;
      function Of(e) {
        return e
          ? e
              .replace(
                /\r\n/g,
                `
`
              )
              .replace(/\u00A0/g, " ")
              .replace(/[\s]{2,}/g, " ")
              .trim()
          : "";
      }
      var K = Of;
      function If(e) {
        Xt();
        var t = B(e),
          r = t._grid;
        if (!r) return [];
        var a = t.boundingClientRect,
          n = [];
        return (
          Array.from(e.childNodes).forEach(function (i) {
            if (i.nodeType === 3 && K(i.textContent) !== "") {
              var o = R.createRange();
              o.selectNodeContents(i);
              var l = Array.from(o.getClientRects()),
                u = l.some(function (f) {
                  var p = yn(f);
                  return !fn(p, a);
                });
              if (u) return;
              for (var s = 0, c = l; s < c.length; s++) {
                var d = c[s];
                d.width >= 1 && d.height >= 1 && n.push(d);
              }
            }
          }),
          n.length
            ? n.map(function (i) {
                return Dn(r, i);
              })
            : [wn(e)]
        );
      }
      var Xo = If,
        Pf = [
          "checkbox",
          "img",
          "meter",
          "progressbar",
          "scrollbar",
          "radio",
          "slider",
          "spinbutton",
          "textbox",
        ];
      function Nf(e) {
        var t = e instanceof X ? e : B(e),
          r = v.commons.aria.getExplicitRole(t);
        if (r) return Pf.indexOf(r) !== -1;
        switch (t.props.nodeName) {
          case "img":
          case "iframe":
          case "object":
          case "video":
          case "audio":
          case "canvas":
          case "svg":
          case "math":
          case "button":
          case "select":
          case "textarea":
          case "keygen":
          case "progress":
          case "meter":
            return !0;
          case "input":
            return t.props.type !== "hidden";
          default:
            return !1;
        }
      }
      var _n = Nf;
      function Mf(e, t) {
        e = e.actualNode || e;
        try {
          var r = je(e),
            a = [],
            n = e.getAttribute(t);
          if (n) {
            n = Be(n);
            for (var i = 0; i < n.length; i++) a.push(r.getElementById(n[i]));
          }
          return a;
        } catch {
          throw new TypeError("Cannot resolve id references for non-DOM nodes");
        }
      }
      var it = Mf;
      function Ae(e) {
        return (e = e instanceof X ? e : B(e)), xn(e);
      }
      var xn = nt(function (t, r) {
        return Ro(t)
          ? !1
          : t.actualNode && t.props.nodeName === "area"
          ? !sn(t, xn)
          : _t(t, { skipAncestors: !0, isAncestor: r })
          ? !1
          : t.parent
          ? xn(t.parent, !0)
          : !0;
      });
      function Jo(e, t, r) {
        var a = e instanceof X ? e : B(e),
          n = t ? Ae : Qe,
          i = !e.actualNode || (e.actualNode && n(e)),
          o = a.children
            .map(function (l) {
              var u = l.props,
                s = u.nodeType,
                c = u.nodeValue;
              if (s === 3) {
                if (c && i) return c;
              } else if (!r) return Jo(l, t);
            })
            .join("");
        return K(o);
      }
      var ut = Jo;
      function Bf(e) {
        var t, r;
        return (e.attr("aria-labelledby") &&
          ((t = it(e.actualNode, "aria-labelledby")),
          (r = t
            .map(function (a) {
              var n = B(a);
              return n ? ut(n) : "";
            })
            .join(" ")
            .trim()),
          r)) ||
          ((r = e.attr("aria-label")), r && ((r = K(r)), r))
          ? r
          : null;
      }
      var ra = Bf,
        qf = [
          "head",
          "title",
          "template",
          "script",
          "style",
          "iframe",
          "object",
          "video",
          "audio",
          "noscript",
        ];
      function Qo(e) {
        return qf.includes(e.props.nodeName)
          ? !1
          : e.children.some(function (t) {
              var r = t.props;
              return r.nodeType === 3 && r.nodeValue.trim();
            });
      }
      function Zo(e, t, r) {
        return (
          Qo(e) ||
          _n(e.actualNode) ||
          (!r && !!ra(e)) ||
          (!t &&
            e.children.some(function (a) {
              return a.actualNode.nodeType === 1 && Zo(a);
            }))
        );
      }
      var Dr = Zo;
      function Lf(e, t, r) {
        return (e = B(e)), Dr(e, t, r);
      }
      var aa = Lf;
      function En(e) {
        return typeof e.children > "u" || Qo(e)
          ? !0
          : e.props.nodeType === 1 && _n(e)
          ? !!v.commons.text.accessibleTextVirtual(e)
          : e.children.some(function (t) {
              return !t.attr("lang") && En(t) && !_t(t);
            });
      }
      var Vf = [
        "button",
        "command",
        "fieldset",
        "keygen",
        "optgroup",
        "option",
        "select",
        "textarea",
        "input",
      ];
      function jf(e) {
        return Vf.includes(e);
      }
      function Hf(e) {
        var t = e instanceof X ? e : B(e);
        if (jf(t.props.nodeName) && t.hasAttr("disabled")) return !0;
        for (
          var r = t.parent, a = [], n = !1;
          r &&
          r.shadowId === t.shadowId &&
          !n &&
          (a.push(r), r.props.nodeName !== "legend");

        ) {
          if (r._inDisabledFieldset !== void 0) {
            n = r._inDisabledFieldset;
            break;
          }
          r.props.nodeName === "fieldset" && r.hasAttr("disabled") && (n = !0),
            (r = r.parent);
        }
        return (
          a.forEach(function (i) {
            return (i._inDisabledFieldset = n);
          }),
          n ? !0 : t.props.nodeName !== "area" && t.actualNode ? _t(t) : !1
        );
      }
      var el = Hf;
      function zf(e) {
        var t = e instanceof X ? e : B(e);
        if (!t || el(t)) return !1;
        switch (t.props.nodeName) {
          case "a":
          case "area":
            if (t.hasAttr("href")) return !0;
            break;
          case "input":
            return t.props.type !== "hidden";
          case "textarea":
          case "select":
          case "summary":
          case "button":
            return !0;
          case "details":
            return !Ye(t, "summary").length;
        }
        return !1;
      }
      var An = zf;
      function Re(e) {
        var t = e instanceof X ? e : B(e);
        if (t.props.nodeType !== 1 || el(t)) return !1;
        if (An(t)) return !0;
        var r = t.attr("tabindex");
        return !!(r && !isNaN(parseInt(r, 10)));
      }
      function Uf(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return t > -1 && Re(e) && !An(e);
      }
      var tl = Uf;
      function rl(e, t) {
        var r = e instanceof X ? e : B(e),
          a = e instanceof y.Node ? e : r == null ? void 0 : r.actualNode;
        return r
          ? (r._isHiddenWithCSS === void 0 && (r._isHiddenWithCSS = al(a, t)),
            r._isHiddenWithCSS)
          : al(a, t);
      }
      function al(e, t) {
        if (
          e.nodeType === 9 ||
          (e.nodeType === 11 && (e = e.host),
          ["STYLE", "SCRIPT"].includes(e.nodeName.toUpperCase()))
        )
          return !1;
        var r = y.getComputedStyle(e, null);
        if (!r) throw new Error("Style does not exist for the given element.");
        var a = r.getPropertyValue("display");
        if (a === "none") return !0;
        var n = ["hidden", "collapse"],
          i = r.getPropertyValue("visibility");
        if ((n.includes(i) && !t) || (n.includes(i) && t && n.includes(t)))
          return !0;
        var o = Me(e);
        return o && !n.includes(i) ? rl(o, i) : !1;
      }
      var $f = rl;
      function Wf(e) {
        var t = e.doctype;
        return t === null
          ? !1
          : t.name === "html" && !t.publicId && !t.systemId;
      }
      var nl = Wf;
      function st(e) {
        var t = e instanceof X ? e : B(e);
        if (t.props.nodeType !== 1) return !1;
        var r = parseInt(t.attr("tabindex", 10));
        return r <= -1 ? !1 : Re(t);
      }
      var Gf = {
          "aria-activedescendant": { type: "idref", allowEmpty: !0 },
          "aria-atomic": { type: "boolean", global: !0 },
          "aria-autocomplete": {
            type: "nmtoken",
            values: ["inline", "list", "both", "none"],
          },
          "aria-busy": { type: "boolean", global: !0 },
          "aria-checked": {
            type: "nmtoken",
            values: ["false", "mixed", "true", "undefined"],
          },
          "aria-colcount": { type: "int", minValue: -1 },
          "aria-colindex": { type: "int", minValue: 1 },
          "aria-colspan": { type: "int", minValue: 1 },
          "aria-controls": { type: "idrefs", allowEmpty: !0, global: !0 },
          "aria-current": {
            type: "nmtoken",
            allowEmpty: !0,
            values: [
              "page",
              "step",
              "location",
              "date",
              "time",
              "true",
              "false",
            ],
            global: !0,
          },
          "aria-describedby": { type: "idrefs", allowEmpty: !0, global: !0 },
          "aria-details": { type: "idref", allowEmpty: !0, global: !0 },
          "aria-disabled": { type: "boolean", global: !0 },
          "aria-dropeffect": {
            type: "nmtokens",
            values: ["copy", "execute", "link", "move", "none", "popup"],
            global: !0,
          },
          "aria-errormessage": { type: "idref", allowEmpty: !0, global: !0 },
          "aria-expanded": {
            type: "nmtoken",
            values: ["true", "false", "undefined"],
          },
          "aria-flowto": { type: "idrefs", allowEmpty: !0, global: !0 },
          "aria-grabbed": {
            type: "nmtoken",
            values: ["true", "false", "undefined"],
            global: !0,
          },
          "aria-haspopup": {
            type: "nmtoken",
            allowEmpty: !0,
            values: [
              "true",
              "false",
              "menu",
              "listbox",
              "tree",
              "grid",
              "dialog",
            ],
            global: !0,
          },
          "aria-hidden": {
            type: "nmtoken",
            values: ["true", "false", "undefined"],
            global: !0,
          },
          "aria-invalid": {
            type: "nmtoken",
            values: ["grammar", "false", "spelling", "true"],
            global: !0,
          },
          "aria-keyshortcuts": { type: "string", allowEmpty: !0, global: !0 },
          "aria-label": { type: "string", allowEmpty: !0, global: !0 },
          "aria-labelledby": { type: "idrefs", allowEmpty: !0, global: !0 },
          "aria-level": { type: "int", minValue: 1 },
          "aria-live": {
            type: "nmtoken",
            values: ["assertive", "off", "polite"],
            global: !0,
          },
          "aria-modal": { type: "boolean" },
          "aria-multiline": { type: "boolean" },
          "aria-multiselectable": { type: "boolean" },
          "aria-orientation": {
            type: "nmtoken",
            values: ["horizontal", "undefined", "vertical"],
          },
          "aria-owns": { type: "idrefs", allowEmpty: !0, global: !0 },
          "aria-placeholder": { type: "string", allowEmpty: !0 },
          "aria-posinset": { type: "int", minValue: 1 },
          "aria-pressed": {
            type: "nmtoken",
            values: ["false", "mixed", "true", "undefined"],
          },
          "aria-readonly": { type: "boolean" },
          "aria-relevant": {
            type: "nmtokens",
            values: ["additions", "all", "removals", "text"],
            global: !0,
          },
          "aria-required": { type: "boolean" },
          "aria-roledescription": {
            type: "string",
            allowEmpty: !0,
            global: !0,
          },
          "aria-rowcount": { type: "int", minValue: -1 },
          "aria-rowindex": { type: "int", minValue: 1 },
          "aria-rowspan": { type: "int", minValue: 0 },
          "aria-selected": {
            type: "nmtoken",
            values: ["false", "true", "undefined"],
          },
          "aria-setsize": { type: "int", minValue: -1 },
          "aria-sort": {
            type: "nmtoken",
            values: ["ascending", "descending", "none", "other"],
          },
          "aria-valuemax": { type: "decimal" },
          "aria-valuemin": { type: "decimal" },
          "aria-valuenow": { type: "decimal" },
          "aria-valuetext": { type: "string" },
        },
        il = Gf,
        Yf = {
          alert: {
            type: "widget",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          alertdialog: {
            type: "widget",
            allowedAttrs: ["aria-expanded", "aria-modal"],
            superclassRole: ["alert", "dialog"],
            accessibleNameRequired: !0,
          },
          application: {
            type: "landmark",
            allowedAttrs: ["aria-activedescendant", "aria-expanded"],
            superclassRole: ["structure"],
            accessibleNameRequired: !0,
          },
          article: {
            type: "structure",
            allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"],
            superclassRole: ["document"],
          },
          banner: {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          blockquote: { type: "structure", superclassRole: ["section"] },
          button: {
            type: "widget",
            allowedAttrs: ["aria-expanded", "aria-pressed"],
            superclassRole: ["command"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          caption: {
            type: "structure",
            requiredContext: ["figure", "table", "grid", "treegrid"],
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          cell: {
            type: "structure",
            requiredContext: ["row"],
            allowedAttrs: [
              "aria-colindex",
              "aria-colspan",
              "aria-rowindex",
              "aria-rowspan",
              "aria-expanded",
            ],
            superclassRole: ["section"],
            nameFromContent: !0,
          },
          checkbox: {
            type: "widget",
            allowedAttrs: ["aria-checked", "aria-readonly", "aria-required"],
            superclassRole: ["input"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          code: {
            type: "structure",
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          columnheader: {
            type: "structure",
            requiredContext: ["row"],
            allowedAttrs: [
              "aria-sort",
              "aria-colindex",
              "aria-colspan",
              "aria-expanded",
              "aria-readonly",
              "aria-required",
              "aria-rowindex",
              "aria-rowspan",
              "aria-selected",
            ],
            superclassRole: ["cell", "gridcell", "sectionhead"],
            accessibleNameRequired: !1,
            nameFromContent: !0,
          },
          combobox: {
            type: "widget",
            requiredAttrs: ["aria-expanded", "aria-controls"],
            allowedAttrs: [
              "aria-owns",
              "aria-autocomplete",
              "aria-readonly",
              "aria-required",
              "aria-activedescendant",
              "aria-orientation",
            ],
            superclassRole: ["select"],
            accessibleNameRequired: !0,
          },
          command: { type: "abstract", superclassRole: ["widget"] },
          complementary: {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          composite: { type: "abstract", superclassRole: ["widget"] },
          contentinfo: {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          comment: {
            type: "structure",
            allowedAttrs: ["aria-level", "aria-posinset", "aria-setsize"],
            superclassRole: ["article"],
          },
          definition: {
            type: "structure",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          deletion: {
            type: "structure",
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          dialog: {
            type: "widget",
            allowedAttrs: ["aria-expanded", "aria-modal"],
            superclassRole: ["window"],
            accessibleNameRequired: !0,
          },
          directory: {
            type: "structure",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["list"],
            nameFromContent: !0,
          },
          document: {
            type: "structure",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["structure"],
          },
          emphasis: {
            type: "structure",
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          feed: {
            type: "structure",
            requiredOwned: ["article"],
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["list"],
          },
          figure: {
            type: "structure",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
            nameFromContent: !0,
          },
          form: {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          grid: {
            type: "composite",
            requiredOwned: ["rowgroup", "row"],
            allowedAttrs: [
              "aria-level",
              "aria-multiselectable",
              "aria-readonly",
              "aria-activedescendant",
              "aria-colcount",
              "aria-expanded",
              "aria-rowcount",
            ],
            superclassRole: ["composite", "table"],
            accessibleNameRequired: !1,
          },
          gridcell: {
            type: "widget",
            requiredContext: ["row"],
            allowedAttrs: [
              "aria-readonly",
              "aria-required",
              "aria-selected",
              "aria-colindex",
              "aria-colspan",
              "aria-expanded",
              "aria-rowindex",
              "aria-rowspan",
            ],
            superclassRole: ["cell", "widget"],
            nameFromContent: !0,
          },
          group: {
            type: "structure",
            allowedAttrs: ["aria-activedescendant", "aria-expanded"],
            superclassRole: ["section"],
          },
          heading: {
            type: "structure",
            requiredAttrs: ["aria-level"],
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["sectionhead"],
            accessibleNameRequired: !1,
            nameFromContent: !0,
          },
          img: {
            type: "structure",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
          input: { type: "abstract", superclassRole: ["widget"] },
          insertion: {
            type: "structure",
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          landmark: { type: "abstract", superclassRole: ["section"] },
          link: {
            type: "widget",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["command"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
          },
          list: {
            type: "structure",
            requiredOwned: ["group", "listitem"],
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          listbox: {
            type: "widget",
            requiredOwned: ["group", "option"],
            allowedAttrs: [
              "aria-multiselectable",
              "aria-readonly",
              "aria-required",
              "aria-activedescendant",
              "aria-expanded",
              "aria-orientation",
            ],
            superclassRole: ["select"],
            accessibleNameRequired: !0,
          },
          listitem: {
            type: "structure",
            requiredContext: ["list", "group"],
            allowedAttrs: [
              "aria-level",
              "aria-posinset",
              "aria-setsize",
              "aria-expanded",
            ],
            superclassRole: ["section"],
            nameFromContent: !0,
          },
          log: {
            type: "widget",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          main: {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          marquee: {
            type: "widget",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          math: {
            type: "structure",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
            childrenPresentational: !0,
          },
          menu: {
            type: "composite",
            requiredOwned: [
              "group",
              "menuitemradio",
              "menuitem",
              "menuitemcheckbox",
            ],
            allowedAttrs: [
              "aria-activedescendant",
              "aria-expanded",
              "aria-orientation",
            ],
            superclassRole: ["select"],
          },
          menubar: {
            type: "composite",
            requiredOwned: [
              "group",
              "menuitemradio",
              "menuitem",
              "menuitemcheckbox",
              "menu",
            ],
            allowedAttrs: [
              "aria-activedescendant",
              "aria-expanded",
              "aria-orientation",
            ],
            superclassRole: ["menu"],
          },
          menuitem: {
            type: "widget",
            requiredContext: ["menu", "menubar", "group"],
            allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"],
            superclassRole: ["command"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
          },
          menuitemcheckbox: {
            type: "widget",
            requiredContext: ["menu", "menubar", "group"],
            allowedAttrs: [
              "aria-checked",
              "aria-posinset",
              "aria-readonly",
              "aria-setsize",
            ],
            superclassRole: ["checkbox", "menuitem"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          menuitemradio: {
            type: "widget",
            requiredContext: ["menu", "menubar", "group"],
            allowedAttrs: [
              "aria-checked",
              "aria-posinset",
              "aria-readonly",
              "aria-setsize",
            ],
            superclassRole: ["menuitemcheckbox", "radio"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          meter: {
            type: "structure",
            allowedAttrs: ["aria-valuetext"],
            requiredAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
            superclassRole: ["range"],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
          mark: {
            type: "structure",
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          navigation: {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          none: {
            type: "structure",
            superclassRole: ["structure"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          note: {
            type: "structure",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          option: {
            type: "widget",
            requiredContext: ["group", "listbox"],
            allowedAttrs: [
              "aria-selected",
              "aria-checked",
              "aria-posinset",
              "aria-setsize",
            ],
            superclassRole: ["input"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          paragraph: {
            type: "structure",
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          presentation: {
            type: "structure",
            superclassRole: ["structure"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          progressbar: {
            type: "widget",
            allowedAttrs: [
              "aria-expanded",
              "aria-valuemax",
              "aria-valuemin",
              "aria-valuenow",
              "aria-valuetext",
            ],
            superclassRole: ["range"],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
          radio: {
            type: "widget",
            allowedAttrs: [
              "aria-checked",
              "aria-posinset",
              "aria-setsize",
              "aria-required",
            ],
            superclassRole: ["input"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          radiogroup: {
            type: "composite",
            allowedAttrs: [
              "aria-readonly",
              "aria-required",
              "aria-activedescendant",
              "aria-expanded",
              "aria-orientation",
            ],
            superclassRole: ["select"],
            accessibleNameRequired: !1,
          },
          range: { type: "abstract", superclassRole: ["widget"] },
          region: {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
            accessibleNameRequired: !1,
          },
          roletype: { type: "abstract", superclassRole: [] },
          row: {
            type: "structure",
            requiredContext: ["grid", "rowgroup", "table", "treegrid"],
            requiredOwned: ["cell", "columnheader", "gridcell", "rowheader"],
            allowedAttrs: [
              "aria-colindex",
              "aria-level",
              "aria-rowindex",
              "aria-selected",
              "aria-activedescendant",
              "aria-expanded",
              "aria-posinset",
              "aria-setsize",
            ],
            superclassRole: ["group", "widget"],
            nameFromContent: !0,
          },
          rowgroup: {
            type: "structure",
            requiredContext: ["grid", "table", "treegrid"],
            requiredOwned: ["row"],
            superclassRole: ["structure"],
            nameFromContent: !0,
          },
          rowheader: {
            type: "structure",
            requiredContext: ["row"],
            allowedAttrs: [
              "aria-sort",
              "aria-colindex",
              "aria-colspan",
              "aria-expanded",
              "aria-readonly",
              "aria-required",
              "aria-rowindex",
              "aria-rowspan",
              "aria-selected",
            ],
            superclassRole: ["cell", "gridcell", "sectionhead"],
            accessibleNameRequired: !1,
            nameFromContent: !0,
          },
          scrollbar: {
            type: "widget",
            requiredAttrs: ["aria-valuenow"],
            allowedAttrs: [
              "aria-controls",
              "aria-orientation",
              "aria-valuemax",
              "aria-valuemin",
              "aria-valuetext",
            ],
            superclassRole: ["range"],
            childrenPresentational: !0,
          },
          search: {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          searchbox: {
            type: "widget",
            allowedAttrs: [
              "aria-activedescendant",
              "aria-autocomplete",
              "aria-multiline",
              "aria-placeholder",
              "aria-readonly",
              "aria-required",
            ],
            superclassRole: ["textbox"],
            accessibleNameRequired: !0,
          },
          section: {
            type: "abstract",
            superclassRole: ["structure"],
            nameFromContent: !0,
          },
          sectionhead: {
            type: "abstract",
            superclassRole: ["structure"],
            nameFromContent: !0,
          },
          select: { type: "abstract", superclassRole: ["composite", "group"] },
          separator: {
            type: "structure",
            allowedAttrs: [
              "aria-valuemax",
              "aria-valuemin",
              "aria-valuenow",
              "aria-orientation",
              "aria-valuetext",
            ],
            superclassRole: ["structure", "widget"],
            childrenPresentational: !0,
          },
          slider: {
            type: "widget",
            requiredAttrs: ["aria-valuenow"],
            allowedAttrs: [
              "aria-valuemax",
              "aria-valuemin",
              "aria-orientation",
              "aria-readonly",
              "aria-valuetext",
            ],
            superclassRole: ["input", "range"],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
          spinbutton: {
            type: "widget",
            allowedAttrs: [
              "aria-valuemax",
              "aria-valuemin",
              "aria-readonly",
              "aria-required",
              "aria-activedescendant",
              "aria-valuetext",
              "aria-valuenow",
            ],
            superclassRole: ["composite", "input", "range"],
            accessibleNameRequired: !0,
          },
          status: {
            type: "widget",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          strong: {
            type: "structure",
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          structure: { type: "abstract", superclassRole: ["roletype"] },
          subscript: {
            type: "structure",
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          superscript: {
            type: "structure",
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          switch: {
            type: "widget",
            requiredAttrs: ["aria-checked"],
            allowedAttrs: ["aria-readonly"],
            superclassRole: ["checkbox"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          suggestion: {
            type: "structure",
            requiredOwned: ["insertion", "deletion"],
            superclassRole: ["section"],
            prohibitedAttrs: ["aria-label", "aria-labelledby"],
          },
          tab: {
            type: "widget",
            requiredContext: ["tablist"],
            allowedAttrs: [
              "aria-posinset",
              "aria-selected",
              "aria-setsize",
              "aria-expanded",
            ],
            superclassRole: ["sectionhead", "widget"],
            nameFromContent: !0,
            childrenPresentational: !0,
          },
          table: {
            type: "structure",
            requiredOwned: ["rowgroup", "row"],
            allowedAttrs: ["aria-colcount", "aria-rowcount", "aria-expanded"],
            superclassRole: ["section"],
            accessibleNameRequired: !1,
            nameFromContent: !0,
          },
          tablist: {
            type: "composite",
            requiredOwned: ["tab"],
            allowedAttrs: [
              "aria-level",
              "aria-multiselectable",
              "aria-orientation",
              "aria-activedescendant",
              "aria-expanded",
            ],
            superclassRole: ["composite"],
          },
          tabpanel: {
            type: "widget",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
            accessibleNameRequired: !1,
          },
          term: {
            type: "structure",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
            nameFromContent: !0,
          },
          text: {
            type: "structure",
            superclassRole: ["section"],
            nameFromContent: !0,
          },
          textbox: {
            type: "widget",
            allowedAttrs: [
              "aria-activedescendant",
              "aria-autocomplete",
              "aria-multiline",
              "aria-placeholder",
              "aria-readonly",
              "aria-required",
            ],
            superclassRole: ["input"],
            accessibleNameRequired: !0,
          },
          time: { type: "structure", superclassRole: ["section"] },
          timer: {
            type: "widget",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["status"],
          },
          toolbar: {
            type: "structure",
            allowedAttrs: [
              "aria-orientation",
              "aria-activedescendant",
              "aria-expanded",
            ],
            superclassRole: ["group"],
            accessibleNameRequired: !0,
          },
          tooltip: {
            type: "structure",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
            nameFromContent: !0,
          },
          tree: {
            type: "composite",
            requiredOwned: ["group", "treeitem"],
            allowedAttrs: [
              "aria-multiselectable",
              "aria-required",
              "aria-activedescendant",
              "aria-expanded",
              "aria-orientation",
            ],
            superclassRole: ["select"],
            accessibleNameRequired: !1,
          },
          treegrid: {
            type: "composite",
            requiredOwned: ["rowgroup", "row"],
            allowedAttrs: [
              "aria-activedescendant",
              "aria-colcount",
              "aria-expanded",
              "aria-level",
              "aria-multiselectable",
              "aria-orientation",
              "aria-readonly",
              "aria-required",
              "aria-rowcount",
            ],
            superclassRole: ["grid", "tree"],
            accessibleNameRequired: !1,
          },
          treeitem: {
            type: "widget",
            requiredContext: ["group", "tree"],
            allowedAttrs: [
              "aria-checked",
              "aria-expanded",
              "aria-level",
              "aria-posinset",
              "aria-selected",
              "aria-setsize",
            ],
            superclassRole: ["listitem", "option"],
            accessibleNameRequired: !0,
            nameFromContent: !0,
          },
          widget: { type: "abstract", superclassRole: ["roletype"] },
          window: { type: "abstract", superclassRole: ["roletype"] },
        },
        ol = Yf,
        Kf = {
          "doc-abstract": {
            type: "section",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          "doc-acknowledgments": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-afterword": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-appendix": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-backlink": {
            type: "link",
            allowedAttrs: ["aria-expanded"],
            nameFromContent: !0,
            superclassRole: ["link"],
          },
          "doc-biblioentry": {
            type: "listitem",
            allowedAttrs: [
              "aria-expanded",
              "aria-level",
              "aria-posinset",
              "aria-setsize",
            ],
            superclassRole: ["listitem"],
            deprecated: !0,
          },
          "doc-bibliography": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-biblioref": {
            type: "link",
            allowedAttrs: ["aria-expanded"],
            nameFromContent: !0,
            superclassRole: ["link"],
          },
          "doc-chapter": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-colophon": {
            type: "section",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          "doc-conclusion": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-cover": {
            type: "img",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["img"],
          },
          "doc-credit": {
            type: "section",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          "doc-credits": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-dedication": {
            type: "section",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          "doc-endnote": {
            type: "listitem",
            allowedAttrs: [
              "aria-expanded",
              "aria-level",
              "aria-posinset",
              "aria-setsize",
            ],
            superclassRole: ["listitem"],
            deprecated: !0,
          },
          "doc-endnotes": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-epigraph": {
            type: "section",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          "doc-epilogue": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-errata": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-example": {
            type: "section",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          "doc-footnote": {
            type: "section",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          "doc-foreword": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-glossary": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-glossref": {
            type: "link",
            allowedAttrs: ["aria-expanded"],
            nameFromContent: !0,
            superclassRole: ["link"],
          },
          "doc-index": {
            type: "navigation",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["navigation"],
          },
          "doc-introduction": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-noteref": {
            type: "link",
            allowedAttrs: ["aria-expanded"],
            nameFromContent: !0,
            superclassRole: ["link"],
          },
          "doc-notice": {
            type: "note",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["note"],
          },
          "doc-pagebreak": {
            type: "separator",
            allowedAttrs: ["aria-expanded", "aria-orientation"],
            superclassRole: ["separator"],
            childrenPresentational: !0,
          },
          "doc-pagelist": {
            type: "navigation",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["navigation"],
          },
          "doc-part": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-preface": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-prologue": {
            type: "landmark",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["landmark"],
          },
          "doc-pullquote": { type: "none", superclassRole: ["none"] },
          "doc-qna": {
            type: "section",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["section"],
          },
          "doc-subtitle": {
            type: "sectionhead",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["sectionhead"],
          },
          "doc-tip": {
            type: "note",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["note"],
          },
          "doc-toc": {
            type: "navigation",
            allowedAttrs: ["aria-expanded"],
            superclassRole: ["navigation"],
          },
        },
        Xf = Kf,
        Jf = {
          "graphics-document": {
            type: "structure",
            superclassRole: ["document"],
            accessibleNameRequired: !0,
          },
          "graphics-object": {
            type: "structure",
            superclassRole: ["group"],
            nameFromContent: !0,
          },
          "graphics-symbol": {
            type: "structure",
            superclassRole: ["img"],
            accessibleNameRequired: !0,
            childrenPresentational: !0,
          },
        },
        Qf = Jf,
        Zf = {
          a: {
            variant: {
              href: {
                matches: "[href]",
                contentTypes: ["interactive", "phrasing", "flow"],
                allowedRoles: [
                  "button",
                  "checkbox",
                  "menuitem",
                  "menuitemcheckbox",
                  "menuitemradio",
                  "option",
                  "radio",
                  "switch",
                  "tab",
                  "treeitem",
                  "doc-backlink",
                  "doc-biblioref",
                  "doc-glossref",
                  "doc-noteref",
                ],
                namingMethods: ["subtreeText"],
              },
              default: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
            },
          },
          abbr: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          address: { contentTypes: ["flow"], allowedRoles: !0 },
          area: {
            variant: {
              href: { matches: "[href]", allowedRoles: !1 },
              default: { allowedRoles: ["button", "link"] },
            },
            contentTypes: ["phrasing", "flow"],
            namingMethods: ["altText"],
          },
          article: {
            contentTypes: ["sectioning", "flow"],
            allowedRoles: [
              "feed",
              "presentation",
              "none",
              "document",
              "application",
              "main",
              "region",
            ],
            shadowRoot: !0,
          },
          aside: {
            contentTypes: ["sectioning", "flow"],
            allowedRoles: [
              "feed",
              "note",
              "presentation",
              "none",
              "region",
              "search",
              "doc-dedication",
              "doc-example",
              "doc-footnote",
              "doc-pullquote",
              "doc-tip",
            ],
          },
          audio: {
            variant: {
              controls: {
                matches: "[controls]",
                contentTypes: ["interactive", "embedded", "phrasing", "flow"],
              },
              default: { contentTypes: ["embedded", "phrasing", "flow"] },
            },
            allowedRoles: ["application"],
            chromiumRole: "Audio",
          },
          b: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          base: { allowedRoles: !1, noAriaAttrs: !0 },
          bdi: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          bdo: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          blockquote: {
            contentTypes: ["flow"],
            allowedRoles: !0,
            shadowRoot: !0,
          },
          body: { allowedRoles: !1, shadowRoot: !0 },
          br: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: ["presentation", "none"],
            namingMethods: ["titleText", "singleSpace"],
          },
          button: {
            contentTypes: ["interactive", "phrasing", "flow"],
            allowedRoles: [
              "checkbox",
              "link",
              "menuitem",
              "menuitemcheckbox",
              "menuitemradio",
              "option",
              "radio",
              "switch",
              "tab",
            ],
            namingMethods: ["subtreeText"],
          },
          canvas: {
            allowedRoles: !0,
            contentTypes: ["embedded", "phrasing", "flow"],
            chromiumRole: "Canvas",
          },
          caption: { allowedRoles: !1 },
          cite: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          code: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          col: { allowedRoles: !1, noAriaAttrs: !0 },
          colgroup: { allowedRoles: !1, noAriaAttrs: !0 },
          data: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          datalist: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            implicitAttrs: { "aria-multiselectable": "false" },
          },
          dd: { allowedRoles: !1 },
          del: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          dfn: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          details: { contentTypes: ["interactive", "flow"], allowedRoles: !1 },
          dialog: { contentTypes: ["flow"], allowedRoles: ["alertdialog"] },
          div: { contentTypes: ["flow"], allowedRoles: !0, shadowRoot: !0 },
          dl: {
            contentTypes: ["flow"],
            allowedRoles: ["group", "list", "presentation", "none"],
            chromiumRole: "DescriptionList",
          },
          dt: { allowedRoles: ["listitem"] },
          em: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          embed: {
            contentTypes: ["interactive", "embedded", "phrasing", "flow"],
            allowedRoles: [
              "application",
              "document",
              "img",
              "presentation",
              "none",
            ],
            chromiumRole: "EmbeddedObject",
          },
          fieldset: {
            contentTypes: ["flow"],
            allowedRoles: ["none", "presentation", "radiogroup"],
            namingMethods: ["fieldsetLegendText"],
          },
          figcaption: { allowedRoles: ["group", "none", "presentation"] },
          figure: {
            contentTypes: ["flow"],
            allowedRoles: !0,
            namingMethods: ["figureText", "titleText"],
          },
          footer: {
            contentTypes: ["flow"],
            allowedRoles: ["group", "none", "presentation", "doc-footnote"],
            shadowRoot: !0,
          },
          form: {
            contentTypes: ["flow"],
            allowedRoles: ["search", "none", "presentation"],
          },
          h1: {
            contentTypes: ["heading", "flow"],
            allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
            shadowRoot: !0,
            implicitAttrs: { "aria-level": "1" },
          },
          h2: {
            contentTypes: ["heading", "flow"],
            allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
            shadowRoot: !0,
            implicitAttrs: { "aria-level": "2" },
          },
          h3: {
            contentTypes: ["heading", "flow"],
            allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
            shadowRoot: !0,
            implicitAttrs: { "aria-level": "3" },
          },
          h4: {
            contentTypes: ["heading", "flow"],
            allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
            shadowRoot: !0,
            implicitAttrs: { "aria-level": "4" },
          },
          h5: {
            contentTypes: ["heading", "flow"],
            allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
            shadowRoot: !0,
            implicitAttrs: { "aria-level": "5" },
          },
          h6: {
            contentTypes: ["heading", "flow"],
            allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
            shadowRoot: !0,
            implicitAttrs: { "aria-level": "6" },
          },
          head: { allowedRoles: !1, noAriaAttrs: !0 },
          header: {
            contentTypes: ["flow"],
            allowedRoles: ["group", "none", "presentation", "doc-footnote"],
            shadowRoot: !0,
          },
          hgroup: { contentTypes: ["heading", "flow"], allowedRoles: !0 },
          hr: {
            contentTypes: ["flow"],
            allowedRoles: ["none", "presentation", "doc-pagebreak"],
            namingMethods: ["titleText", "singleSpace"],
          },
          html: { allowedRoles: !1, noAriaAttrs: !0 },
          i: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          iframe: {
            contentTypes: ["interactive", "embedded", "phrasing", "flow"],
            allowedRoles: [
              "application",
              "document",
              "img",
              "none",
              "presentation",
            ],
            chromiumRole: "Iframe",
          },
          img: {
            variant: {
              nonEmptyAlt: {
                matches: [
                  { attributes: { alt: "/.+/" } },
                  { hasAccessibleName: !0 },
                ],
                allowedRoles: [
                  "button",
                  "checkbox",
                  "link",
                  "menuitem",
                  "menuitemcheckbox",
                  "menuitemradio",
                  "option",
                  "progressbar",
                  "radio",
                  "scrollbar",
                  "separator",
                  "slider",
                  "switch",
                  "tab",
                  "treeitem",
                  "doc-cover",
                ],
              },
              usemap: {
                matches: "[usemap]",
                contentTypes: ["interactive", "embedded", "flow"],
              },
              default: {
                allowedRoles: ["presentation", "none"],
                contentTypes: ["embedded", "flow"],
              },
            },
            namingMethods: ["altText"],
          },
          input: {
            variant: {
              button: {
                matches: { properties: { type: "button" } },
                allowedRoles: [
                  "link",
                  "menuitem",
                  "menuitemcheckbox",
                  "menuitemradio",
                  "option",
                  "radio",
                  "switch",
                  "tab",
                ],
              },
              buttonType: {
                matches: {
                  properties: { type: ["button", "submit", "reset"] },
                },
                namingMethods: ["valueText", "titleText", "buttonDefaultText"],
              },
              checkboxPressed: {
                matches: {
                  properties: { type: "checkbox" },
                  attributes: { "aria-pressed": "/.*/" },
                },
                allowedRoles: [
                  "button",
                  "menuitemcheckbox",
                  "option",
                  "switch",
                ],
                implicitAttrs: { "aria-checked": "false" },
              },
              checkbox: {
                matches: {
                  properties: { type: "checkbox" },
                  attributes: { "aria-pressed": null },
                },
                allowedRoles: ["menuitemcheckbox", "option", "switch"],
                implicitAttrs: { "aria-checked": "false" },
              },
              noRoles: {
                matches: {
                  properties: {
                    type: [
                      "color",
                      "date",
                      "datetime-local",
                      "file",
                      "month",
                      "number",
                      "password",
                      "range",
                      "reset",
                      "submit",
                      "time",
                      "week",
                    ],
                  },
                },
                allowedRoles: !1,
              },
              hidden: {
                matches: { properties: { type: "hidden" } },
                contentTypes: ["flow"],
                allowedRoles: !1,
                noAriaAttrs: !0,
              },
              image: {
                matches: { properties: { type: "image" } },
                allowedRoles: [
                  "link",
                  "menuitem",
                  "menuitemcheckbox",
                  "menuitemradio",
                  "radio",
                  "switch",
                ],
                namingMethods: [
                  "altText",
                  "valueText",
                  "labelText",
                  "titleText",
                  "buttonDefaultText",
                ],
              },
              radio: {
                matches: { properties: { type: "radio" } },
                allowedRoles: ["menuitemradio"],
                implicitAttrs: { "aria-checked": "false" },
              },
              textWithList: {
                matches: {
                  properties: { type: "text" },
                  attributes: { list: "/.*/" },
                },
                allowedRoles: !1,
              },
              default: {
                contentTypes: ["interactive", "flow"],
                allowedRoles: ["combobox", "searchbox", "spinbutton"],
                implicitAttrs: { "aria-valuenow": "" },
                namingMethods: ["labelText", "placeholderText"],
              },
            },
          },
          ins: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          kbd: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          label: {
            contentTypes: ["interactive", "phrasing", "flow"],
            allowedRoles: !1,
            chromiumRole: "Label",
          },
          legend: { allowedRoles: !1 },
          li: {
            allowedRoles: [
              "menuitem",
              "menuitemcheckbox",
              "menuitemradio",
              "option",
              "none",
              "presentation",
              "radio",
              "separator",
              "tab",
              "treeitem",
              "doc-biblioentry",
              "doc-endnote",
            ],
            implicitAttrs: { "aria-setsize": "1", "aria-posinset": "1" },
          },
          link: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          main: { contentTypes: ["flow"], allowedRoles: !1, shadowRoot: !0 },
          map: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          math: {
            contentTypes: ["embedded", "phrasing", "flow"],
            allowedRoles: !1,
          },
          mark: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          menu: {
            contentTypes: ["flow"],
            allowedRoles: [
              "directory",
              "group",
              "listbox",
              "menu",
              "menubar",
              "none",
              "presentation",
              "radiogroup",
              "tablist",
              "toolbar",
              "tree",
            ],
          },
          meta: {
            variant: {
              itemprop: {
                matches: "[itemprop]",
                contentTypes: ["phrasing", "flow"],
              },
            },
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          meter: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            chromiumRole: "progressbar",
          },
          nav: {
            contentTypes: ["sectioning", "flow"],
            allowedRoles: [
              "doc-index",
              "doc-pagelist",
              "doc-toc",
              "menu",
              "menubar",
              "none",
              "presentation",
              "tablist",
            ],
            shadowRoot: !0,
          },
          noscript: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          object: {
            variant: {
              usemap: {
                matches: "[usemap]",
                contentTypes: ["interactive", "embedded", "phrasing", "flow"],
              },
              default: { contentTypes: ["embedded", "phrasing", "flow"] },
            },
            allowedRoles: ["application", "document", "img"],
            chromiumRole: "PluginObject",
          },
          ol: {
            contentTypes: ["flow"],
            allowedRoles: [
              "directory",
              "group",
              "listbox",
              "menu",
              "menubar",
              "none",
              "presentation",
              "radiogroup",
              "tablist",
              "toolbar",
              "tree",
            ],
          },
          optgroup: { allowedRoles: !1 },
          option: {
            allowedRoles: !1,
            implicitAttrs: { "aria-selected": "false" },
          },
          output: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !0,
            namingMethods: ["subtreeText"],
          },
          p: { contentTypes: ["flow"], allowedRoles: !0, shadowRoot: !0 },
          param: { allowedRoles: !1, noAriaAttrs: !0 },
          picture: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          pre: { contentTypes: ["flow"], allowedRoles: !0 },
          progress: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            implicitAttrs: {
              "aria-valuemax": "100",
              "aria-valuemin": "0",
              "aria-valuenow": "0",
            },
          },
          q: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          rp: { allowedRoles: !0 },
          rt: { allowedRoles: !0 },
          ruby: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          s: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          samp: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          script: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          section: {
            contentTypes: ["sectioning", "flow"],
            allowedRoles: [
              "alert",
              "alertdialog",
              "application",
              "banner",
              "complementary",
              "contentinfo",
              "dialog",
              "document",
              "feed",
              "group",
              "log",
              "main",
              "marquee",
              "navigation",
              "none",
              "note",
              "presentation",
              "search",
              "status",
              "tabpanel",
              "doc-abstract",
              "doc-acknowledgments",
              "doc-afterword",
              "doc-appendix",
              "doc-bibliography",
              "doc-chapter",
              "doc-colophon",
              "doc-conclusion",
              "doc-credit",
              "doc-credits",
              "doc-dedication",
              "doc-endnotes",
              "doc-epigraph",
              "doc-epilogue",
              "doc-errata",
              "doc-example",
              "doc-foreword",
              "doc-glossary",
              "doc-index",
              "doc-introduction",
              "doc-notice",
              "doc-pagelist",
              "doc-part",
              "doc-preface",
              "doc-prologue",
              "doc-pullquote",
              "doc-qna",
              "doc-toc",
            ],
            shadowRoot: !0,
          },
          select: {
            variant: {
              combobox: {
                matches: { attributes: { multiple: null, size: [null, "1"] } },
                allowedRoles: ["menu"],
              },
              default: { allowedRoles: !1 },
            },
            contentTypes: ["interactive", "phrasing", "flow"],
            implicitAttrs: { "aria-valuenow": "" },
            namingMethods: ["labelText"],
          },
          slot: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          small: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          source: { allowedRoles: !1, noAriaAttrs: !0 },
          span: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !0,
            shadowRoot: !0,
          },
          strong: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          style: { allowedRoles: !1, noAriaAttrs: !0 },
          svg: {
            contentTypes: ["embedded", "phrasing", "flow"],
            allowedRoles: !0,
            chromiumRole: "SVGRoot",
            namingMethods: ["svgTitleText"],
          },
          sub: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          summary: { allowedRoles: !1, namingMethods: ["subtreeText"] },
          sup: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          table: {
            contentTypes: ["flow"],
            allowedRoles: !0,
            namingMethods: ["tableCaptionText", "tableSummaryText"],
          },
          tbody: { allowedRoles: !0 },
          template: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: !1,
            noAriaAttrs: !0,
          },
          textarea: {
            contentTypes: ["interactive", "phrasing", "flow"],
            allowedRoles: !1,
            implicitAttrs: { "aria-valuenow": "", "aria-multiline": "true" },
            namingMethods: ["labelText", "placeholderText"],
          },
          tfoot: { allowedRoles: !0 },
          thead: { allowedRoles: !0 },
          time: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          title: { allowedRoles: !1, noAriaAttrs: !0 },
          td: { allowedRoles: !0 },
          th: { allowedRoles: !0 },
          tr: { allowedRoles: !0 },
          track: { allowedRoles: !1, noAriaAttrs: !0 },
          u: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          ul: {
            contentTypes: ["flow"],
            allowedRoles: [
              "directory",
              "group",
              "listbox",
              "menu",
              "menubar",
              "none",
              "presentation",
              "radiogroup",
              "tablist",
              "toolbar",
              "tree",
            ],
          },
          var: { contentTypes: ["phrasing", "flow"], allowedRoles: !0 },
          video: {
            variant: {
              controls: {
                matches: "[controls]",
                contentTypes: ["interactive", "embedded", "phrasing", "flow"],
              },
              default: { contentTypes: ["embedded", "phrasing", "flow"] },
            },
            allowedRoles: ["application"],
            chromiumRole: "video",
          },
          wbr: {
            contentTypes: ["phrasing", "flow"],
            allowedRoles: ["presentation", "none"],
          },
        },
        ep = Zf,
        tp = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        },
        rp = tp,
        ll = {
          ariaAttrs: il,
          ariaRoles: ne({}, ol, Xf, Qf),
          htmlElms: ep,
          cssColors: rp,
        },
        Jt = ne({}, ll);
      function ap(e) {
        Object.keys(Jt).forEach(function (t) {
          e[t] && (Jt[t] = on(Jt[t], e[t]));
        });
      }
      function np() {
        Object.keys(Jt).forEach(function (e) {
          Jt[e] = ll[e];
        });
      }
      var ue = Jt;
      function ip(e) {
        var t;
        (e instanceof X ||
          ((t = y) !== null &&
            t !== void 0 &&
            t.Node &&
            e instanceof y.Node)) &&
          (e = v.commons.aria.getRole(e));
        var r = ue.ariaRoles[e];
        return (r == null ? void 0 : r.type) || null;
      }
      var ct = ip;
      function ul(e, t) {
        t(e.actualNode) !== !1 &&
          e.children.forEach(function (r) {
            return ul(r, t);
          });
      }
      var op = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function sl(e) {
        var t = y.getComputedStyle(e).getPropertyValue("display");
        return op.includes(t) || t.substr(0, 6) === "table-";
      }
      function lp(e) {
        for (var t = Me(e); t && !sl(t); ) t = Me(t);
        return B(t);
      }
      function up(e, t) {
        if (sl(e)) return !1;
        var r = lp(e),
          a = "",
          n = "",
          i = 0;
        return (
          ul(r, function (o) {
            if (i === 2) return !1;
            if ((o.nodeType === 3 && (a += o.nodeValue), o.nodeType === 1)) {
              var l = (o.nodeName || "").toUpperCase();
              if ((o === e && (i = 1), ["BR", "HR"].includes(l)))
                i === 0 ? ((a = ""), (n = "")) : (i = 2);
              else {
                if (
                  o.style.display === "none" ||
                  o.style.overflow === "hidden" ||
                  !["", null, "none"].includes(o.style.float) ||
                  !["", null, "relative"].includes(o.style.position)
                )
                  return !1;
                if (ct(o) === "widget") return (n += o.textContent), !1;
              }
            }
          }),
          (a = K(a)),
          t != null && t.noLengthCompare
            ? a.length !== 0
            : ((n = K(n)), a.length > n.length)
        );
      }
      var Fn = up;
      function sp(e) {
        e = e || {};
        var t = e.modalPercent || 0.75;
        if (ae.get("isModalOpen")) return ae.get("isModalOpen");
        var r = vt(v._tree[0], "dialog, [role=dialog], [aria-modal=true]", Qe);
        if (r.length) return ae.set("isModalOpen", !0), !0;
        for (
          var a = Zr(y),
            n = a.width * t,
            i = a.height * t,
            o = (a.width - n) / 2,
            l = (a.height - i) / 2,
            u = [
              { x: o, y: l },
              { x: a.width - o, y: l },
              { x: a.width / 2, y: a.height / 2 },
              { x: o, y: a.height - l },
              { x: a.width - o, y: a.height - l },
            ],
            s = u.map(function (p) {
              return Array.from(R.elementsFromPoint(p.x, p.y));
            }),
            c = function (m) {
              var b = s[m].find(function (D) {
                var h = y.getComputedStyle(D);
                return (
                  parseInt(h.width, 10) >= n &&
                  parseInt(h.height, 10) >= i &&
                  h.getPropertyValue("pointer-events") !== "none" &&
                  (h.position === "absolute" || h.position === "fixed")
                );
              });
              if (
                b &&
                s.every(function (D) {
                  return D.includes(b);
                })
              )
                return ae.set("isModalOpen", !0), { v: !0 };
            },
            d = 0;
          d < s.length;
          d++
        ) {
          var f = c(d);
          if (P(f) === "object") return f.v;
        }
        ae.set("isModalOpen", void 0);
      }
      var wr = sp;
      function cl(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2,
          r = e.ownerDocument.createRange();
        r.setStart(e, 0), r.setEnd(e, e.childNodes.length);
        var a = 0,
          n = 0,
          i = ft(r.getClientRects()),
          o;
        try {
          for (i.s(); !(o = i.n()).done; ) {
            var l = o.value;
            if (!(l.height <= t))
              if (a > l.top + t) a = Math.max(a, l.bottom);
              else if (n === 0) (a = l.bottom), n++;
              else return !0;
          }
        } catch (u) {
          i.e(u);
        } finally {
          i.f();
        }
        return !1;
      }
      function cp(e) {
        return e instanceof y.Node;
      }
      var dp = cp,
        na = {},
        fp = {
          set: function (t, r) {
            if (typeof t != "string")
              throw new Error("Incomplete data: key must be a string");
            return r && (na[t] = r), na[t];
          },
          get: function (t) {
            return na[t];
          },
          clear: function () {
            na = {};
          },
        },
        He = fp;
      function pp(e, t) {
        var r = ["IMG", "CANVAS", "OBJECT", "IFRAME", "VIDEO", "SVG"],
          a = e.nodeName.toUpperCase();
        if (r.includes(a)) return He.set("bgColor", "imgNode"), !0;
        t = t || y.getComputedStyle(e);
        var n = t.getPropertyValue("background-image"),
          i = n !== "none";
        if (i) {
          var o = /gradient/.test(n);
          He.set("bgColor", o ? "bgGradient" : "bgImage");
        }
        return i;
      }
      var ia = pp;
      function mp(e, t, r) {
        if (/%$/.test(t))
          return r === 3 ? parseFloat(t) / 100 : (parseFloat(t) * 255) / 100;
        if (e[r] === "h") {
          if (/turn$/.test(t)) return parseFloat(t) * 360;
          if (/rad$/.test(t)) return parseFloat(t) * 57.3;
        }
        return parseFloat(t);
      }
      function hp(e) {
        var t = ve(e, 4),
          r = t[0],
          a = t[1],
          n = t[2],
          i = t[3];
        (a /= 255), (n /= 255);
        var o = (1 - Math.abs(2 * n - 1)) * a,
          l = o * (1 - Math.abs(((r / 60) % 2) - 1)),
          u = n - o / 2,
          s;
        return (
          r < 60
            ? (s = [o, l, 0])
            : r < 120
            ? (s = [l, o, 0])
            : r < 180
            ? (s = [0, o, l])
            : r < 240
            ? (s = [0, l, o])
            : r < 300
            ? (s = [l, 0, o])
            : (s = [o, 0, l]),
          s
            .map(function (c) {
              return Math.round((c + u) * 255);
            })
            .concat(i)
        );
      }
      function vp(e, t, r, a) {
        (this.red = e),
          (this.green = t),
          (this.blue = r),
          (this.alpha = a),
          (this.toHexString = function () {
            var l = Math.round(this.red).toString(16),
              u = Math.round(this.green).toString(16),
              s = Math.round(this.blue).toString(16);
            return (
              "#" +
              (this.red > 15.5 ? l : "0" + l) +
              (this.green > 15.5 ? u : "0" + u) +
              (this.blue > 15.5 ? s : "0" + s)
            );
          });
        var n = /^#[0-9a-f]{3,8}$/i,
          i = /^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i;
        (this.parseString = function (l) {
          if (ue.cssColors[l] || l === "transparent") {
            var u = ue.cssColors[l] || [0, 0, 0],
              s = ve(u, 3),
              c = s[0],
              d = s[1],
              f = s[2];
            (this.red = c),
              (this.green = d),
              (this.blue = f),
              (this.alpha = l === "transparent" ? 0 : 1);
            return;
          }
          if (l.match(i)) {
            this.parseColorFnString(l);
            return;
          }
          if (l.match(n)) {
            this.parseHexString(l);
            return;
          }
          throw new Error('Unable to parse color "'.concat(l, '"'));
        }),
          (this.parseRgbString = function (l) {
            if (l === "transparent") {
              (this.red = 0),
                (this.green = 0),
                (this.blue = 0),
                (this.alpha = 0);
              return;
            }
            this.parseColorFnString(l);
          }),
          (this.parseHexString = function (l) {
            if (!(!l.match(n) || [6, 8].includes(l.length))) {
              if (((l = l.replace("#", "")), l.length < 6)) {
                var u = l,
                  s = ve(u, 4),
                  c = s[0],
                  d = s[1],
                  f = s[2],
                  p = s[3];
                (l = c + c + d + d + f + f), p && (l += p + p);
              }
              var m = l.match(/.{1,2}/g);
              (this.red = parseInt(m[0], 16)),
                (this.green = parseInt(m[1], 16)),
                (this.blue = parseInt(m[2], 16)),
                m[3]
                  ? (this.alpha = parseInt(m[3], 16) / 255)
                  : (this.alpha = 1);
            }
          }),
          (this.parseColorFnString = function (l) {
            var u = l.match(i) || [],
              s = ve(u, 3),
              c = s[1],
              d = s[2];
            if (!(!c || !d)) {
              var f = d
                  .split(/\s*[,\/\s]\s*/)
                  .map(function (m) {
                    return m.replace(",", "").trim();
                  })
                  .filter(function (m) {
                    return m !== "";
                  }),
                p = f.map(function (m, b) {
                  return mp(c, m, b);
                });
              c.substr(0, 3) === "hsl" && (p = hp(p)),
                (this.red = p[0]),
                (this.green = p[1]),
                (this.blue = p[2]),
                (this.alpha = typeof p[3] == "number" ? p[3] : 1);
            }
          }),
          (this.getRelativeLuminance = function () {
            var l = this.red / 255,
              u = this.green / 255,
              s = this.blue / 255,
              c = l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4),
              d = u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4),
              f = s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
            return 0.2126 * c + 0.7152 * d + 0.0722 * f;
          });
      }
      var Ze = vp;
      function gp(e) {
        var t = new Ze();
        if (
          (t.parseString(e.getPropertyValue("background-color")), t.alpha !== 0)
        ) {
          var r = e.getPropertyValue("opacity");
          t.alpha = t.alpha * r;
        }
        return t;
      }
      var It = gp;
      function bp(e) {
        var t = y.getComputedStyle(e);
        return ia(e, t) || It(t).alpha === 1;
      }
      var yp = bp;
      function Cn(e) {
        if (!e.href) return !1;
        var t = ae.get("firstPageLink", Dp);
        return t
          ? e.compareDocumentPosition(t.actualNode) ===
              e.DOCUMENT_POSITION_FOLLOWING
          : !0;
      }
      function Dp() {
        var e;
        return (
          y.location.origin
            ? (e = Ye(v._tree, 'a[href]:not([href^="javascript:"])').find(
                function (t) {
                  return !vn(t.actualNode);
                }
              ))
            : (e = Ye(
                v._tree,
                'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])'
              )[0]),
          e || null
        );
      }
      var wp =
          /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,
        _p = /(\w+)\((\d+)/;
      function xp(e) {
        var t = e.getPropertyValue("clip").match(wp),
          r = e.getPropertyValue("clip-path").match(_p);
        if (t && t.length === 5) {
          var a = e.getPropertyValue("position");
          if (["fixed", "absolute"].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1],
            i = parseInt(r[2], 10);
          switch (n) {
            case "inset":
              return i >= 50;
            case "circle":
              return i === 0;
          }
        }
        return !1;
      }
      function Ep(e, t, r) {
        var a = Kt(e, "map");
        if (!a) return !1;
        var n = a.getAttribute("name");
        if (!n) return !1;
        var i = je(e);
        if (!i || i.nodeType !== 9) return !1;
        var o = Ye(v._tree, 'img[usemap="#'.concat(Ee(n), '"]'));
        return !o || !o.length
          ? !1
          : o.some(function (l) {
              var u = l.actualNode;
              return oa(u, t, r);
            });
      }
      function oa(e, t, r) {
        var a;
        if (!e)
          throw new TypeError(
            "Cannot determine if element is visible for non-DOM nodes"
          );
        var n = e instanceof X ? e : B(e);
        e = n ? n.actualNode : e;
        var i = "_isVisible" + (t ? "ScreenReader" : ""),
          o = (a = y.Node) !== null && a !== void 0 ? a : {},
          l = o.DOCUMENT_NODE,
          u = o.DOCUMENT_FRAGMENT_NODE,
          s = n ? n.props.nodeType : e.nodeType,
          c = n ? n.props.nodeName : e.nodeName.toLowerCase();
        if (n && typeof n[i] < "u") return n[i];
        if (s === l) return !0;
        if (["style", "script", "noscript", "template"].includes(c)) return !1;
        if ((e && s === u && (e = e.host), t)) {
          var d = n ? n.attr("aria-hidden") : e.getAttribute("aria-hidden");
          if (d === "true") return !1;
        }
        if (!e) {
          var f = n.parent,
            p = !0;
          return f && (p = oa(f, t, !0)), n && (n[i] = p), p;
        }
        var m = y.getComputedStyle(e, null);
        if (m === null) return !1;
        if (c === "area") return Ep(e, t, r);
        if (m.getPropertyValue("display") === "none") return !1;
        var b = parseInt(m.getPropertyValue("height")),
          D = parseInt(m.getPropertyValue("width")),
          h = ht(e),
          g = h && b === 0,
          x = h && D === 0,
          E =
            m.getPropertyValue("position") === "absolute" &&
            (b < 2 || D < 2) &&
            m.getPropertyValue("overflow") === "hidden";
        if (
          (!t &&
            (xp(m) || m.getPropertyValue("opacity") === "0" || g || x || E)) ||
          (!r &&
            (m.getPropertyValue("visibility") === "hidden" || (!t && ea(e))))
        )
          return !1;
        var C = e.assignedSlot ? e.assignedSlot : e.parentNode,
          N = !1;
        return C && (N = oa(C, t, !0)), n && (n[i] = N), N;
      }
      var Ap = oa;
      function Fp(e, t) {
        for (
          var r = ["fixed", "sticky"], a = [], n = !1, i = 0;
          i < e.length;
          ++i
        ) {
          var o = e[i];
          o === t && (n = !0);
          var l = y.getComputedStyle(o);
          if (!n && r.indexOf(l.position) !== -1) {
            a = [];
            continue;
          }
          a.push(o);
        }
        return a;
      }
      var dl = Fp;
      function la(e, t) {
        var r = fl(t);
        do {
          var a = fl(e);
          if (a === r || a === t) return Cp(e, t);
          e = a;
        } while (e);
        return !1;
      }
      function fl(e) {
        for (var t = B(e), r = t.parent; r; ) {
          if (ht(r.actualNode)) return r.actualNode;
          r = r.parent;
        }
      }
      function Cp(e, t) {
        var r = y.getComputedStyle(t),
          a = r.getPropertyValue("overflow");
        if (r.getPropertyValue("display") === "inline") return !0;
        var n = Array.from(e.getClientRects()),
          i = t.getBoundingClientRect(),
          o = { left: i.left, top: i.top, width: i.width, height: i.height };
        return (
          (["scroll", "auto"].includes(a) || t instanceof y.HTMLHtmlElement) &&
            ((o.width = t.scrollWidth), (o.height = t.scrollHeight)),
          n.length === 1 &&
            a === "hidden" &&
            r.getPropertyValue("white-space") === "nowrap" &&
            (n[0] = o),
          n.some(function (l) {
            return !(
              Math.ceil(l.left) < Math.floor(o.left) ||
              Math.ceil(l.top) < Math.floor(o.top) ||
              Math.floor(l.left + l.width) > Math.ceil(o.left + o.width) ||
              Math.floor(l.top + l.height) > Math.ceil(o.top + o.height)
            );
          })
        );
      }
      function pl(e, t) {
        var r =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : R,
          a =
            arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        if (a > 999) throw new Error("Infinite loop detected");
        return Array.from(r.elementsFromPoint(e, t) || [])
          .filter(function (n) {
            return je(n) === r;
          })
          .reduce(function (n, i) {
            if (Qr(i)) {
              var o = pl(e, t, i.shadowRoot, a + 1);
              (n = n.concat(o)), n.length && la(n[0], i) && n.push(i);
            } else n.push(i);
            return n;
          }, []);
      }
      var kp = pl;
      function Rp(e, t) {
        if (!!e.hasAttribute(t)) {
          var r = e.nodeName.toUpperCase(),
            a = e;
          (!["A", "AREA"].includes(r) || e.ownerSVGElement) &&
            ((a = R.createElement("a")), (a.href = e.getAttribute(t)));
          var n = ["https:", "ftps:"].includes(a.protocol)
              ? a.protocol.replace(/s:$/, ":")
              : a.protocol,
            i = /^\//.test(a.pathname) ? a.pathname : "/".concat(a.pathname),
            o = Sp(i),
            l = o.pathname,
            u = o.filename;
          return {
            protocol: n,
            hostname: a.hostname,
            port: Tp(a.port),
            pathname: /\/$/.test(l) ? l : "".concat(l, "/"),
            search: Op(a.search),
            hash: Ip(a.hash),
            filename: u,
          };
        }
      }
      function Tp(e) {
        var t = ["443", "80"];
        return t.includes(e) ? "" : e;
      }
      function Sp(e) {
        var t = e.split("/").pop();
        return !t || t.indexOf(".") === -1
          ? { pathname: e, filename: "" }
          : { pathname: e.replace(t, ""), filename: /index./.test(t) ? "" : t };
      }
      function Op(e) {
        var t = {};
        if (!e || !e.length) return t;
        var r = e.substring(1).split("&");
        if (!r || !r.length) return t;
        for (var a = 0; a < r.length; a++) {
          var n = r[a],
            i = n.split("="),
            o = ve(i, 2),
            l = o[0],
            u = o[1],
            s = u === void 0 ? "" : u;
          t[decodeURIComponent(l)] = decodeURIComponent(s);
        }
        return t;
      }
      function Ip(e) {
        if (!e) return "";
        var t = /#!?\/?/g,
          r = e.match(t);
        if (!r) return "";
        var a = ve(r, 1),
          n = a[0];
        return n === "#" ? "" : e;
      }
      var Pp = Rp;
      function Np(e, t) {
        var r = t.getBoundingClientRect(),
          a = r.top,
          n = r.left,
          i = {
            top: a - t.scrollTop,
            bottom: a - t.scrollTop + t.scrollHeight,
            left: n - t.scrollLeft,
            right: n - t.scrollLeft + t.scrollWidth,
          };
        if (
          (e.left > i.right && e.left > r.right) ||
          (e.top > i.bottom && e.top > r.bottom) ||
          (e.right < i.left && e.right < r.left) ||
          (e.bottom < i.top && e.bottom < r.top)
        )
          return !1;
        var o = y.getComputedStyle(t);
        return e.left > r.right || e.top > r.bottom
          ? o.overflow === "scroll" ||
              o.overflow === "auto" ||
              t instanceof y.HTMLBodyElement ||
              t instanceof y.HTMLHtmlElement
          : !0;
      }
      var kn = Np,
        Rn,
        ml = 0,
        Mp = (function (e) {
          Ei(r, e);
          var t = Ai(r);
          function r(a, n, i) {
            var o;
            if (
              (cr(this, r),
              (o = t.call(this)),
              (o.shadowId = i),
              (o.children = []),
              (o.actualNode = a),
              (o.parent = n),
              n || (ml = 0),
              (o.nodeIndex = ml++),
              (o._isHidden = null),
              (o._cache = {}),
              typeof Rn > "u" && (Rn = Hr(a.ownerDocument)),
              (o._isXHTML = Rn),
              a.nodeName.toLowerCase() === "input")
            ) {
              var l = a.getAttribute("type");
              (l = o._isXHTML ? l : (l || "").toLowerCase()),
                pa().includes(l) || (l = "text"),
                (o._type = l);
            }
            return ae.get("nodeMap") && ae.get("nodeMap").set(a, Fi(o)), o;
          }
          return (
            dr(r, [
              {
                key: "props",
                get: function () {
                  if (!this._cache.hasOwnProperty("props")) {
                    var n = this.actualNode,
                      i = n.nodeType,
                      o = n.nodeName,
                      l = n.id,
                      u = n.multiple,
                      s = n.nodeValue,
                      c = n.value,
                      d = n.selected;
                    this._cache.props = {
                      nodeType: i,
                      nodeName: this._isXHTML ? o : o.toLowerCase(),
                      id: l,
                      type: this._type,
                      multiple: u,
                      nodeValue: s,
                      value: c,
                      selected: d,
                    };
                  }
                  return this._cache.props;
                },
              },
              {
                key: "attr",
                value: function (n) {
                  return typeof this.actualNode.getAttribute != "function"
                    ? null
                    : this.actualNode.getAttribute(n);
                },
              },
              {
                key: "hasAttr",
                value: function (n) {
                  return typeof this.actualNode.hasAttribute != "function"
                    ? !1
                    : this.actualNode.hasAttribute(n);
                },
              },
              {
                key: "attrNames",
                get: function () {
                  if (!this._cache.hasOwnProperty("attrNames")) {
                    var n;
                    this.actualNode.attributes instanceof y.NamedNodeMap
                      ? (n = this.actualNode.attributes)
                      : (n = this.actualNode.cloneNode(!1).attributes),
                      (this._cache.attrNames = Array.from(n).map(function (i) {
                        return i.name;
                      }));
                  }
                  return this._cache.attrNames;
                },
              },
              {
                key: "getComputedStylePropertyValue",
                value: function (n) {
                  var i = "computedStyle_" + n;
                  return (
                    this._cache.hasOwnProperty(i) ||
                      (this._cache.hasOwnProperty("computedStyle") ||
                        (this._cache.computedStyle = y.getComputedStyle(
                          this.actualNode
                        )),
                      (this._cache[i] =
                        this._cache.computedStyle.getPropertyValue(n))),
                    this._cache[i]
                  );
                },
              },
              {
                key: "isFocusable",
                get: function () {
                  return (
                    this._cache.hasOwnProperty("isFocusable") ||
                      (this._cache.isFocusable = Re(this.actualNode)),
                    this._cache.isFocusable
                  );
                },
              },
              {
                key: "tabbableElements",
                get: function () {
                  return (
                    this._cache.hasOwnProperty("tabbableElements") ||
                      (this._cache.tabbableElements = Ko(this)),
                    this._cache.tabbableElements
                  );
                },
              },
              {
                key: "clientRects",
                get: function () {
                  return (
                    this._cache.hasOwnProperty("clientRects") ||
                      (this._cache.clientRects = Array.from(
                        this.actualNode.getClientRects()
                      ).filter(function (n) {
                        return n.width > 0;
                      })),
                    this._cache.clientRects
                  );
                },
              },
              {
                key: "boundingClientRect",
                get: function () {
                  return (
                    this._cache.hasOwnProperty("boundingClientRect") ||
                      (this._cache.boundingClientRect =
                        this.actualNode.getBoundingClientRect()),
                    this._cache.boundingClientRect
                  );
                },
              },
            ]),
            r
          );
        })(X),
        Tn = Mp;
      function Bp(e) {
        return (e || "")
          .trim()
          .replace(/\s{2,}/g, " ")
          .split(" ");
      }
      var Be = Bp,
        Qt = " [idsMap]";
      function hl(e, t, r) {
        var a = e[0]._selectorMap;
        if (!!a) {
          for (var n = e[0].shadowId, i = 0; i < t.length; i++)
            if (
              t[i].length > 1 &&
              t[i].some(function (u) {
                return vl(u);
              })
            )
              return;
          var o = new Set();
          t.forEach(function (u) {
            var s,
              c = qp(u, a, n);
            c == null ||
              (s = c.nodes) === null ||
              s === void 0 ||
              s.forEach(function (d) {
                (c.isComplexSelector && !zt(d, u)) || o.add(d);
              });
          });
          var l = [];
          return (
            o.forEach(function (u) {
              return l.push(u);
            }),
            r && (l = l.filter(r)),
            l.sort(function (u, s) {
              return u.nodeIndex - s.nodeIndex;
            })
          );
        }
      }
      function qp(e, t, r) {
        var a = e[e.length - 1],
          n = null,
          i = e.length > 1 || !!a.pseudos || !!a.classes;
        if (vl(a)) n = t["*"];
        else {
          if (a.id) {
            var o;
            if (
              !t[Qt] ||
              !((o = t[Qt][a.id]) !== null && o !== void 0 && o.length)
            )
              return;
            n = t[Qt][a.id].filter(function (b) {
              return b.shadowId === r;
            });
          }
          if (a.tag && a.tag !== "*") {
            var l;
            if (!((l = t[a.tag]) !== null && l !== void 0 && l.length)) return;
            var u = t[a.tag];
            n = n ? Sn(u, n) : u;
          }
          if (a.classes) {
            var s;
            if (!((s = t["[class]"]) !== null && s !== void 0 && s.length))
              return;
            var c = t["[class]"];
            n = n ? Sn(c, n) : c;
          }
          if (a.attributes)
            for (var d = 0; d < a.attributes.length; d++) {
              var f,
                p = a.attributes[d];
              if (
                (p.type === "attrValue" && (i = !0),
                !(
                  (f = t["[".concat(p.key, "]")]) !== null &&
                  f !== void 0 &&
                  f.length
                ))
              )
                return;
              var m = t["[".concat(p.key, "]")];
              n = n ? Sn(m, n) : m;
            }
        }
        return { nodes: n, isComplexSelector: i };
      }
      function vl(e) {
        return e.tag === "*" && !e.attributes && !e.id && !e.classes;
      }
      function Sn(e, t) {
        return e.filter(function (r) {
          return t.includes(r);
        });
      }
      function ua(e, t, r) {
        (r[e] = r[e] || []), r[e].push(t);
      }
      function gl(e, t) {
        e.props.nodeType === 1 &&
          (ua(e.props.nodeName, e, t),
          ua("*", e, t),
          e.attrNames.forEach(function (r) {
            r === "id" &&
              ((t[Qt] = t[Qt] || {}),
              Be(e.attr(r)).forEach(function (a) {
                ua(a, e, t[Qt]);
              })),
              ua("[".concat(r, "]"), e, t);
          }));
      }
      var On;
      function Lp(e) {
        var t = [];
        for (e = e.firstChild; e; ) t.push(e), (e = e.nextSibling);
        return t;
      }
      function In(e, t, r) {
        var a = new Tn(e, t, r);
        return gl(a, ae.get("selectorMap")), a;
      }
      function bl(e, t, r) {
        var a, n, i;
        function o(l, u, s) {
          var c = bl(u, t, s);
          return c && (l = l.concat(c)), l;
        }
        return (
          e.documentElement && (e = e.documentElement),
          (i = e.nodeName.toLowerCase()),
          Qr(e)
            ? ((On = !0),
              (a = In(e, r, t)),
              (t = "a" + Math.random().toString().substring(2)),
              (n = Array.from(e.shadowRoot.childNodes)),
              (a.children = n.reduce(function (l, u) {
                return o(l, u, a);
              }, [])),
              [a])
            : i === "content" && typeof e.getDistributedNodes == "function"
            ? ((n = Array.from(e.getDistributedNodes())),
              n.reduce(function (l, u) {
                return o(l, u, r);
              }, []))
            : i === "slot" && typeof e.assignedNodes == "function"
            ? ((n = Array.from(e.assignedNodes())),
              n.length || (n = Lp(e)),
              y.getComputedStyle(e),
              n.reduce(function (l, u) {
                return o(l, u, r);
              }, []))
            : e.nodeType === 1
            ? ((a = In(e, r, t)),
              (n = Array.from(e.childNodes)),
              (a.children = n.reduce(function (l, u) {
                return o(l, u, a);
              }, [])),
              [a])
            : e.nodeType === 3
            ? [In(e, r)]
            : void 0
        );
      }
      function Vp() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : R.documentElement,
          t = arguments.length > 1 ? arguments[1] : void 0;
        On = !1;
        var r = {};
        ae.set("nodeMap", new WeakMap()), ae.set("selectorMap", r);
        var a = bl(e, t, null);
        return (a[0]._selectorMap = r), (a[0]._hasShadowRoot = On), a;
      }
      var Pn = Vp;
      function jp(e) {
        return e ? e.trim().split("-")[0].toLowerCase() : "";
      }
      var Pt = jp;
      function Hp(e) {
        var t = {};
        return (
          (t.none = e.none.concat(e.all)),
          (t.any = e.any),
          Object.keys(t)
            .map(function (r) {
              if (!!t[r].length) {
                var a = v._audit.data.failureSummaries[r];
                if (a && typeof a.failureMessage == "function")
                  return a.failureMessage(
                    t[r].map(function (n) {
                      return n.message || "";
                    })
                  );
              }
            })
            .filter(function (r) {
              return r !== void 0;
            }).join(`

`)
        );
      }
      var Nn = Hp;
      function Mn() {
        var e = v._audit.data.incompleteFallbackMessage;
        return (
          typeof e == "function" && (e = e()), typeof e != "string" ? "" : e
        );
      }
      function zp(e, t) {
        ["any", "all", "none"].forEach(function (r) {
          !Array.isArray(e[r]) ||
            e[r]
              .filter(function (a) {
                return Array.isArray(a.relatedNodes);
              })
              .forEach(function (a) {
                a.relatedNodes = a.relatedNodes.map(function (n) {
                  var i,
                    o = {
                      html:
                        (i = n == null ? void 0 : n.source) !== null &&
                        i !== void 0
                          ? i
                          : "Undefined",
                    };
                  if (t.elementRef && !(n != null && n.fromFrame)) {
                    var l;
                    o.element =
                      (l = n == null ? void 0 : n.element) !== null &&
                      l !== void 0
                        ? l
                        : null;
                  }
                  if (t.selectors !== !1 || (n != null && n.fromFrame)) {
                    var u;
                    o.target =
                      (u = n == null ? void 0 : n.selector) !== null &&
                      u !== void 0
                        ? u
                        : [":root"];
                  }
                  if (t.ancestry) {
                    var s;
                    o.ancestry =
                      (s = n == null ? void 0 : n.ancestry) !== null &&
                      s !== void 0
                        ? s
                        : [":root"];
                  }
                  if (t.xpath) {
                    var c;
                    o.xpath =
                      (c = n == null ? void 0 : n.xpath) !== null &&
                      c !== void 0
                        ? c
                        : ["/"];
                  }
                  return o;
                });
              });
        });
      }
      var yl = Z.resultGroups;
      function Up(e, t) {
        var r = v.utils.aggregateResult(e);
        return (
          yl.forEach(function (a) {
            t.resultTypes &&
              !t.resultTypes.includes(a) &&
              (r[a] || []).forEach(function (n) {
                Array.isArray(n.nodes) &&
                  n.nodes.length > 0 &&
                  (n.nodes = [n.nodes[0]]);
              }),
              (r[a] = (r[a] || []).map(function (n) {
                return (
                  (n = Object.assign({}, n)),
                  Array.isArray(n.nodes) &&
                    n.nodes.length > 0 &&
                    (n.nodes = n.nodes.map(function (i) {
                      return (
                        P(i.node) === "object" &&
                          ((i.html = i.node.source),
                          t.elementRef &&
                            !i.node.fromFrame &&
                            (i.element = i.node.element),
                          (t.selectors !== !1 || i.node.fromFrame) &&
                            (i.target = i.node.selector),
                          t.ancestry && (i.ancestry = i.node.ancestry),
                          t.xpath && (i.xpath = i.node.xpath)),
                        delete i.result,
                        delete i.node,
                        zp(i, t),
                        i
                      );
                    })),
                  yl.forEach(function (i) {
                    return delete n[i];
                  }),
                  delete n.pageLevel,
                  delete n.result,
                  n
                );
              }));
          }),
          r
        );
      }
      var _r = Up,
        $p = /\$\{\s?data\s?\}/g;
      function sa(e, t) {
        if (typeof t == "string") return e.replace($p, t);
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var a = new RegExp("\\${\\s?data\\." + r + "\\s?}", "g"),
              n = typeof t[r] > "u" ? "" : String(t[r]);
            e = e.replace(a, n);
          }
        return e;
      }
      function Dl(e, t) {
        if (!!e) {
          if (Array.isArray(t)) {
            if (
              ((t.values = t.join(", ")),
              typeof e.singular == "string" && typeof e.plural == "string")
            ) {
              var r = t.length === 1 ? e.singular : e.plural;
              return sa(r, t);
            }
            return sa(e, t);
          }
          if (typeof e == "string") return sa(e, t);
          if (typeof t == "string") {
            var a = e[t];
            return sa(a, t);
          }
          var n = e.default || Mn();
          return (
            t && t.messageKey && e[t.messageKey] && (n = e[t.messageKey]),
            Dl(n, t)
          );
        }
      }
      var Bn = Dl;
      function Wp(e, t, r) {
        var a = v._audit.data.checks[e];
        if (!a)
          throw new Error(
            "Cannot get message for unknown check: ".concat(e, ".")
          );
        if (!a.messages[t])
          throw new Error(
            'Check "'.concat(e, '"" does not have a "').concat(t, '" message.')
          );
        return Bn(a.messages[t], r);
      }
      var Gp = Wp;
      function Yp(e, t, r) {
        var a = (((r.rules && r.rules[t]) || {}).checks || {})[e.id],
          n = (r.checks || {})[e.id],
          i = e.enabled,
          o = e.options;
        return (
          n &&
            (n.hasOwnProperty("enabled") && (i = n.enabled),
            n.hasOwnProperty("options") && (o = n.options)),
          a &&
            (a.hasOwnProperty("enabled") && (i = a.enabled),
            a.hasOwnProperty("options") && (o = a.options)),
          { enabled: i, options: o, absolutePaths: r.absolutePaths }
        );
      }
      var ca = Yp;
      function xt() {
        var e,
          t =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : null,
          r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y;
        return t && P(t) === "object"
          ? t
          : P(r) !== "object"
          ? {}
          : {
              testEngine: { name: "axe-core", version: v.version },
              testRunner: { name: v._audit.brand },
              testEnvironment: Kp(r),
              timestamp: new Date().toISOString(),
              url: (e = r.location) === null || e === void 0 ? void 0 : e.href,
            };
      }
      function Kp(e) {
        if (!e.navigator || P(e.navigator) !== "object") return {};
        var t = e.navigator,
          r = e.innerHeight,
          a = e.innerWidth,
          n = Xp(e) || {},
          i = n.angle,
          o = n.type;
        return {
          userAgent: t.userAgent,
          windowWidth: a,
          windowHeight: r,
          orientationAngle: i,
          orientationType: o,
        };
      }
      function Xp(e) {
        var t = e.screen;
        return t.orientation || t.msOrientation || t.mozOrientation;
      }
      function wl(e, t) {
        var r = t.focusable,
          a = t.page;
        return {
          node: e,
          include: [],
          exclude: [],
          initiator: !1,
          focusable: r && Jp(e),
          size: Qp(e),
          page: a,
        };
      }
      function Jp(e) {
        var t = e.getAttribute("tabindex");
        if (!t) return !0;
        var r = parseInt(t, 10);
        return isNaN(r) || r >= 0;
      }
      function Qp(e) {
        var t = parseInt(e.getAttribute("width"), 10),
          r = parseInt(e.getAttribute("height"), 10);
        if (isNaN(t) || isNaN(r)) {
          var a = e.getBoundingClientRect();
          (t = isNaN(t) ? a.width : t), (r = isNaN(r) ? a.height : r);
        }
        return { width: t, height: r };
      }
      function Zp(e, t) {
        !Ae(t) || br(e.frames, "node", t) || e.frames.push(wl(t, e));
      }
      function em(e) {
        var t = e.include;
        return t.length === 1 && t[0].actualNode === R.documentElement;
      }
      function tm(e, t, r) {
        e.frames = e.frames || [];
        var a = r.shift(),
          n = R.querySelectorAll(a);
        Array.from(n).forEach(function (i) {
          if (
            (e.frames.forEach(function (l) {
              l.node === i && l[t].push(r);
            }),
            !e.frames.find(function (l) {
              return l.node === i;
            }))
          ) {
            var o = wl(i, e);
            r && o[t].push(r), e.frames.push(o);
          }
        });
      }
      function rm(e) {
        if ((e && P(e) === "object") || e instanceof y.NodeList) {
          if (e instanceof y.Node) return { include: [e], exclude: [] };
          if (e.hasOwnProperty("include") || e.hasOwnProperty("exclude"))
            return {
              include: e.include && +e.include.length ? e.include : [R],
              exclude: e.exclude || [],
            };
          if (e.length === +e.length) return { include: e, exclude: [] };
        }
        return typeof e == "string"
          ? { include: [e], exclude: [] }
          : { include: [R], exclude: [] };
      }
      function _l(e, t) {
        for (var r, a = [], n, i = 0, o = e[t].length; i < o; i++)
          if (((r = e[t][i]), typeof r == "string")) {
            (n = Array.from(R.querySelectorAll(r))),
              (a = a.concat(
                n.map(function (l) {
                  return B(l);
                })
              ));
            break;
          } else
            r && r.length && !(r instanceof y.Node)
              ? r.length > 1
                ? tm(e, t, r)
                : ((n = Array.from(R.querySelectorAll(r[0]))),
                  (a = a.concat(
                    n.map(function (l) {
                      return B(l);
                    })
                  )))
              : r instanceof y.Node &&
                (r.documentElement instanceof y.Node
                  ? a.push(e.flatTree[0])
                  : a.push(B(r)));
        return a.filter(function (l) {
          return l;
        });
      }
      function am(e) {
        if (e.include.length === 0) {
          if (e.frames.length === 0) {
            var t = at.isInFrame() ? "frame" : "page";
            return new Error(
              "No elements found for include in " + t + " Context"
            );
          }
          e.frames.forEach(function (r, a) {
            if (r.include.length === 0)
              return new Error(
                "No elements found for include in Context of frame " + a
              );
          });
        }
      }
      function nm(e) {
        for (
          var t = e.include,
            r = e.exclude,
            a = Array.from(t).concat(Array.from(r)),
            n = 0;
          n < a.length;
          ++n
        ) {
          var i = a[n];
          if (i instanceof y.Element) return i.ownerDocument.documentElement;
          if (i instanceof y.Document) return i.documentElement;
        }
        return R.documentElement;
      }
      function da(e, t) {
        var r,
          a,
          n,
          i,
          o = this;
        (e = mt(e)),
          (this.frames = []),
          (this.page =
            typeof ((r = e) === null || r === void 0 ? void 0 : r.page) ==
            "boolean"
              ? e.page
              : void 0),
          (this.initiator =
            typeof ((a = e) === null || a === void 0 ? void 0 : a.initiator) ==
            "boolean"
              ? e.initiator
              : !0),
          (this.focusable =
            typeof ((n = e) === null || n === void 0 ? void 0 : n.focusable) ==
            "boolean"
              ? e.focusable
              : !0),
          (this.size =
            P((i = e) === null || i === void 0 ? void 0 : i.size) === "object"
              ? e.size
              : {}),
          (e = rm(e)),
          (this.flatTree = t != null ? t : Pn(nm(e))),
          (this.exclude = e.exclude),
          (this.include = e.include),
          (this.include = _l(this, "include")),
          (this.exclude = _l(this, "exclude")),
          $n("frame, iframe", this).forEach(function (u) {
            Ln(u, o) && Zp(o, u.actualNode);
          }),
          typeof this.page > "u" &&
            ((this.page = em(this)),
            this.frames.forEach(function (u) {
              u.page = o.page;
            }));
        var l = am(this);
        if (l instanceof Error) throw l;
        Array.isArray(this.include) ||
          (this.include = Array.from(this.include)),
          this.include.sort(jn);
      }
      function im(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t.iframes === !1) return [];
        var r = new da(e),
          a = r.frames;
        return a.map(function (n) {
          var i = n.node,
            o = Ve(n, Us);
          o.initiator = !1;
          var l = Ur(i);
          return { frameSelector: l, frameContext: o };
        });
      }
      function om(e) {
        var t = v._audit.rules.find(function (r) {
          return r.id === e;
        });
        if (!t) throw new Error("Cannot find rule by id: ".concat(e));
        return t;
      }
      var xl = om;
      function ht(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
          r = e.scrollWidth > e.clientWidth + t,
          a = e.scrollHeight > e.clientHeight + t;
        if (!!(r || a)) {
          var n = y.getComputedStyle(e),
            i = El(n, "overflow-x"),
            o = El(n, "overflow-y");
          if ((r && i) || (a && o))
            return { elm: e, top: e.scrollTop, left: e.scrollLeft };
        }
      }
      function El(e, t) {
        var r = e.getPropertyValue(t);
        return ["scroll", "auto"].includes(r);
      }
      function Al(e) {
        return Array.from(e.children || e.childNodes || []).reduce(function (
          t,
          r
        ) {
          var a = ht(r);
          return a && t.push(a), t.concat(Al(r));
        },
        []);
      }
      function lm() {
        var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y,
          t = e.document.documentElement,
          r = [
            e.pageXOffset !== void 0
              ? { elm: e, top: e.pageYOffset, left: e.pageXOffset }
              : { elm: t, top: t.scrollTop, left: t.scrollLeft },
          ];
        return r.concat(Al(R.body));
      }
      var um = lm;
      function sm() {
        return mt(ue);
      }
      function cm(e) {
        if (!e)
          throw new Error(
            "axe.utils.getStyleSheetFactory should be invoked with an argument"
          );
        return function (t) {
          var r = t.data,
            a = t.isCrossOrigin,
            n = a === void 0 ? !1 : a,
            i = t.shadowId,
            o = t.root,
            l = t.priority,
            u = t.isLink,
            s = u === void 0 ? !1 : u,
            c = e.createElement("style");
          if (s) {
            var d = e.createTextNode('@import "'.concat(r.href, '"'));
            c.appendChild(d);
          } else c.appendChild(e.createTextNode(r));
          return (
            e.head.appendChild(c),
            {
              sheet: c.sheet,
              isCrossOrigin: n,
              shadowId: i,
              root: o,
              priority: l,
            }
          );
        };
      }
      var Fl = cm,
        Ge;
      function dm(e) {
        if (Ge && Ge.parentNode)
          return (
            Ge.styleSheet === void 0
              ? Ge.appendChild(R.createTextNode(e))
              : (Ge.styleSheet.cssText += e),
            Ge
          );
        if (!!e) {
          var t = R.head || R.getElementsByTagName("head")[0];
          return (
            (Ge = R.createElement("style")),
            (Ge.type = "text/css"),
            Ge.styleSheet === void 0
              ? Ge.appendChild(R.createTextNode(e))
              : (Ge.styleSheet.cssText = e),
            t.appendChild(Ge),
            Ge
          );
        }
      }
      var fm = dm;
      function Cl(e, t) {
        var r = B(e);
        if (e.nodeType === 9) return !1;
        if ((e.nodeType === 11 && (e = e.host), r && r._isHidden !== null))
          return r._isHidden;
        var a = y.getComputedStyle(e, null);
        if (
          !a ||
          !e.parentNode ||
          a.getPropertyValue("display") === "none" ||
          (!t && a.getPropertyValue("visibility") === "hidden") ||
          e.getAttribute("aria-hidden") === "true"
        )
          return !0;
        var n = e.assignedSlot ? e.assignedSlot : e.parentNode,
          i = Cl(n, !0);
        return r && (r._isHidden = i), i;
      }
      var pm = Cl;
      function mm(e) {
        var t,
          r,
          a =
            (t =
              (r = e.props) === null || r === void 0 ? void 0 : r.nodeName) !==
              null && t !== void 0
              ? t
              : e.nodeName.toLowerCase();
        return e.namespaceURI === "http://www.w3.org/2000/svg"
          ? !1
          : !!ue.htmlElms[a];
      }
      var qn = mm;
      function kl(e) {
        return e.sort(function (t, r) {
          return Gt(t, r) ? 1 : -1;
        })[0];
      }
      function hm(e, t) {
        var r =
            t.include &&
            kl(
              t.include.filter(function (n) {
                return Gt(n, e);
              })
            ),
          a =
            t.exclude &&
            kl(
              t.exclude.filter(function (n) {
                return Gt(n, e);
              })
            );
        return !!((!a && r) || (a && Gt(a, r)));
      }
      var Ln = hm;
      function vm(e, t) {
        return e.length !== t.length
          ? !1
          : e.every(function (r, a) {
              var n = t[a];
              return Array.isArray(r)
                ? r.length !== n.length
                  ? !1
                  : r.every(function (i, o) {
                      return n[o] === i;
                    })
                : r === n;
            });
      }
      var Vn = vm;
      function gm(e, t) {
        return (
          (e = e.actualNode || e),
          (t = t.actualNode || t),
          e === t ? 0 : e.compareDocumentPosition(t) & 4 ? -1 : 1
        );
      }
      var jn = gm;
      function bm(e, t, r, a) {
        var n =
            arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
          i = Array.from(e.cssRules);
        if (!i) return Promise.resolve();
        var o = i.filter(function (c) {
          return c.type === 3;
        });
        if (!o.length)
          return Promise.resolve({
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId,
            sheet: e,
          });
        var l = o
            .filter(function (c) {
              return c.href;
            })
            .map(function (c) {
              return c.href;
            })
            .filter(function (c) {
              return !a.includes(c);
            }),
          u = l.map(function (c, d) {
            var f = [].concat(ie(r), [d]),
              p = /^https?:\/\/|^\/\//i.test(c);
            return zn(c, t, f, a, p);
          }),
          s = i.filter(function (c) {
            return c.type !== 3;
          });
        return (
          s.length &&
            u.push(
              Promise.resolve(
                t.convertDataToStylesheet({
                  data: s
                    .map(function (c) {
                      return c.cssText;
                    })
                    .join(),
                  isCrossOrigin: n,
                  priority: r,
                  root: t.rootNode,
                  shadowId: t.shadowId,
                })
              )
            ),
          Promise.all(u)
        );
      }
      var Rl = bm;
      function ym(e, t, r, a) {
        var n =
            arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
          i = Dm(e);
        return i ? Rl(e, t, r, a, n) : zn(e.href, t, r, a, !0);
      }
      function Dm(e) {
        try {
          var t = e.cssRules;
          return !(!t && e.href);
        } catch {
          return !1;
        }
      }
      var Hn = ym;
      function wm(e, t, r, a, n) {
        return (
          a.push(e),
          new Promise(function (i, o) {
            var l = new y.XMLHttpRequest();
            l.open("GET", e),
              (l.timeout = Z.preload.timeout),
              l.addEventListener("error", o),
              l.addEventListener("timeout", o),
              l.addEventListener("loadend", function (u) {
                if (u.loaded && l.responseText) return i(l.responseText);
                o(l.responseText);
              }),
              l.send();
          }).then(function (i) {
            var o = t.convertDataToStylesheet({
              data: i,
              isCrossOrigin: n,
              priority: r,
              root: t.rootNode,
              shadowId: t.shadowId,
            });
            return Hn(o.sheet, t, r, a, o.isCrossOrigin);
          })
        );
      }
      var zn = wm,
        _m = (function () {
          function e() {
            if (y.performance && y.performance) return y.performance.now();
          }
          var t = null,
            r = e();
          return {
            start: function () {
              this.mark("mark_axe_start");
            },
            end: function () {
              this.mark("mark_axe_end"),
                this.measure("axe", "mark_axe_start", "mark_axe_end"),
                this.logMeasures("axe");
            },
            auditStart: function () {
              this.mark("mark_audit_start");
            },
            auditEnd: function () {
              this.mark("mark_audit_end"),
                this.measure(
                  "audit_start_to_end",
                  "mark_audit_start",
                  "mark_audit_end"
                ),
                this.logMeasures();
            },
            mark: function (n) {
              y.performance &&
                y.performance.mark !== void 0 &&
                y.performance.mark(n);
            },
            measure: function (n, i, o) {
              y.performance &&
                y.performance.measure !== void 0 &&
                y.performance.measure(n, i, o);
            },
            logMeasures: function (n) {
              function i(c) {
                St("Measure " + c.name + " took " + c.duration + "ms");
              }
              if (y.performance && y.performance.getEntriesByType !== void 0)
                for (
                  var o = y.performance.getEntriesByName("mark_axe_start")[0],
                    l = y.performance
                      .getEntriesByType("measure")
                      .filter(function (c) {
                        return c.startTime >= o.startTime;
                      }),
                    u = 0;
                  u < l.length;
                  ++u
                ) {
                  var s = l[u];
                  if (s.name === n) {
                    i(s);
                    return;
                  }
                  i(s);
                }
            },
            timeElapsed: function () {
              return e() - r;
            },
            reset: function () {
              t || (t = e()), (r = e());
            },
          };
        })(),
        Oe = _m;
      typeof Object.assign != "function" &&
        (function () {
          Object.assign = function (e) {
            if (e == null)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), r = 1; r < arguments.length; r++) {
              var a = arguments[r];
              if (a != null)
                for (var n in a) a.hasOwnProperty(n) && (t[n] = a[n]);
            }
            return t;
          };
        })(),
        Array.prototype.find ||
          Object.defineProperty(Array.prototype, "find", {
            value: function (t) {
              if (this === null)
                throw new TypeError(
                  "Array.prototype.find called on null or undefined"
                );
              if (typeof t != "function")
                throw new TypeError("predicate must be a function");
              for (
                var r = Object(this),
                  a = r.length >>> 0,
                  n = arguments[1],
                  i,
                  o = 0;
                o < a;
                o++
              )
                if (((i = r[o]), t.call(n, i, o, r))) return i;
            },
          }),
        Array.prototype.findIndex ||
          Object.defineProperty(Array.prototype, "findIndex", {
            value: function (t, r) {
              if (this === null)
                throw new TypeError(
                  "Array.prototype.find called on null or undefined"
                );
              if (typeof t != "function")
                throw new TypeError("predicate must be a function");
              for (
                var a = Object(this), n = a.length >>> 0, i, o = 0;
                o < n;
                o++
              )
                if (((i = a[o]), t.call(r, i, o, a))) return o;
              return -1;
            },
          });
      function Tl() {
        if (R.elementsFromPoint) return R.elementsFromPoint;
        if (R.msElementsFromPoint) return R.msElementsFromPoint;
        var e = (function () {
            var n = R.createElement("x");
            return (
              (n.style.cssText = "pointer-events:auto"),
              n.style.pointerEvents === "auto"
            );
          })(),
          t = e ? "pointer-events" : "visibility",
          r = e ? "none" : "hidden",
          a = R.createElement("style");
        return (
          (a.innerHTML = e
            ? "* { pointer-events: all }"
            : "* { visibility: visible }"),
          function (n, i) {
            var o,
              l,
              u,
              s = [],
              c = [];
            for (
              R.head.appendChild(a);
              (o = R.elementFromPoint(n, i)) && s.indexOf(o) === -1;

            )
              s.push(o),
                c.push({
                  value: o.style.getPropertyValue(t),
                  priority: o.style.getPropertyPriority(t),
                }),
                o.style.setProperty(t, r, "important");
            for (
              s.indexOf(R.documentElement) < s.length - 1 &&
                (s.splice(s.indexOf(R.documentElement), 1),
                s.push(R.documentElement)),
                l = c.length;
              (u = c[--l]);

            )
              s[l].style.setProperty(t, u.value ? u.value : "", u.priority);
            return R.head.removeChild(a), s;
          }
        );
      }
      typeof y.addEventListener == "function" && (R.elementsFromPoint = Tl()),
        Array.prototype.includes ||
          Object.defineProperty(Array.prototype, "includes", {
            value: function (t) {
              var r = Object(this),
                a = parseInt(r.length, 10) || 0;
              if (a === 0) return !1;
              var n = parseInt(arguments[1], 10) || 0,
                i;
              n >= 0 ? (i = n) : ((i = a + n), i < 0 && (i = 0));
              for (var o; i < a; ) {
                if (((o = r[i]), t === o || (t !== t && o !== o))) return !0;
                i++;
              }
              return !1;
            },
          }),
        Array.prototype.some ||
          Object.defineProperty(Array.prototype, "some", {
            value: function (t) {
              if (this == null)
                throw new TypeError(
                  "Array.prototype.some called on null or undefined"
                );
              if (typeof t != "function") throw new TypeError();
              for (
                var r = Object(this),
                  a = r.length >>> 0,
                  n = arguments.length >= 2 ? arguments[1] : void 0,
                  i = 0;
                i < a;
                i++
              )
                if (i in r && t.call(n, r[i], i, r)) return !0;
              return !1;
            },
          }),
        Array.from ||
          Object.defineProperty(Array, "from", {
            value: (function () {
              var e = Object.prototype.toString,
                t = function (o) {
                  return (
                    typeof o == "function" || e.call(o) === "[object Function]"
                  );
                },
                r = function (o) {
                  var l = Number(o);
                  return isNaN(l)
                    ? 0
                    : l === 0 || !isFinite(l)
                    ? l
                    : (l > 0 ? 1 : -1) * Math.floor(Math.abs(l));
                },
                a = Math.pow(2, 53) - 1,
                n = function (o) {
                  var l = r(o);
                  return Math.min(Math.max(l, 0), a);
                };
              return function (o) {
                var l = this,
                  u = Object(o);
                if (o == null)
                  throw new TypeError(
                    "Array.from requires an array-like object - not null or undefined"
                  );
                var s = arguments.length > 1 ? arguments[1] : void 0,
                  c;
                if (typeof s < "u") {
                  if (!t(s))
                    throw new TypeError(
                      "Array.from: when provided, the second argument must be a function"
                    );
                  arguments.length > 2 && (c = arguments[2]);
                }
                for (
                  var d = n(u.length),
                    f = t(l) ? Object(new l(d)) : new Array(d),
                    p = 0,
                    m;
                  p < d;

                )
                  (m = u[p]),
                    s
                      ? (f[p] = typeof c > "u" ? s(m, p) : s.call(c, m, p))
                      : (f[p] = m),
                    (p += 1);
                return (f.length = d), f;
              };
            })(),
          }),
        String.prototype.includes ||
          (String.prototype.includes = function (e, t) {
            return (
              typeof t != "number" && (t = 0),
              t + e.length > this.length ? !1 : this.indexOf(e, t) !== -1
            );
          }),
        Array.prototype.flat ||
          Object.defineProperty(Array.prototype, "flat", {
            configurable: !0,
            value: function e() {
              var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
              return t
                ? Array.prototype.reduce.call(
                    this,
                    function (r, a) {
                      return (
                        Array.isArray(a)
                          ? r.push.apply(r, e.call(a, t - 1))
                          : r.push(a),
                        r
                      );
                    },
                    []
                  )
                : Array.prototype.slice.call(this);
            },
            writable: !0,
          }),
        y.Node &&
          !("isConnected" in y.Node.prototype) &&
          Object.defineProperty(y.Node.prototype, "isConnected", {
            get: function () {
              return (
                !this.ownerDocument ||
                !(
                  this.ownerDocument.compareDocumentPosition(this) &
                  this.DOCUMENT_POSITION_DISCONNECTED
                )
              );
            },
          });
      function xm(e, t) {
        return e.concat(t).filter(function (r, a, n) {
          return n.indexOf(r) === a;
        });
      }
      var xr = xm;
      function Sl(e, t, r, a, n) {
        var i = n || {};
        return (
          (i.vNodes = e),
          (i.vNodesIndex = 0),
          (i.anyLevel = t),
          (i.thisLevel = r),
          (i.parentShadowId = a),
          i
        );
      }
      var Un = [];
      function Em(e, t, r) {
        for (
          var a = [],
            n = Array.isArray(e) ? e : [e],
            i = Sl(n, t, null, e[0].shadowId, Un.pop()),
            o = [];
          i.vNodesIndex < i.vNodes.length;

        ) {
          for (
            var l,
              u,
              s = i.vNodes[i.vNodesIndex++],
              c = null,
              d = null,
              f =
                (((l = i.anyLevel) === null || l === void 0
                  ? void 0
                  : l.length) || 0) +
                (((u = i.thisLevel) === null || u === void 0
                  ? void 0
                  : u.length) || 0),
              p = !1,
              m = 0;
            m < f;
            m++
          ) {
            var b,
              D,
              h,
              g =
                m <
                (((b = i.anyLevel) === null || b === void 0
                  ? void 0
                  : b.length) || 0)
                  ? i.anyLevel[m]
                  : i.thisLevel[
                      m -
                        (((D = i.anyLevel) === null || D === void 0
                          ? void 0
                          : D.length) || 0)
                    ];
            if ((!g[0].id || s.shadowId === i.parentShadowId) && zt(s, g[0]))
              if (g.length === 1) !p && (!r || r(s)) && (o.push(s), (p = !0));
              else {
                var x = g.slice(1);
                if ([" ", ">"].includes(x[0].combinator) === !1)
                  throw new Error(
                    "axe.utils.querySelectorAll does not support the combinator: " +
                      g[1].combinator
                  );
                x[0].combinator === ">"
                  ? (c = c || []).push(x)
                  : (d = d || []).push(x);
              }
            (!g[0].id || s.shadowId === i.parentShadowId) &&
              (h = i.anyLevel) !== null &&
              h !== void 0 &&
              h.includes(g) &&
              (d = d || []).push(g);
          }
          for (
            s.children &&
            s.children.length &&
            (a.push(i), (i = Sl(s.children, d, c, s.shadowId, Un.pop())));
            i.vNodesIndex === i.vNodes.length && a.length;

          )
            Un.push(i), (i = a.pop());
        }
        return o;
      }
      function Am(e, t, r) {
        e = Array.isArray(e) ? e : [e];
        var a = $r(t),
          n = hl(e, a, r);
        return n || Em(e, a, r);
      }
      var vt = Am;
      function Fm(e) {
        var t = e.treeRoot,
          r = t === void 0 ? v._tree[0] : t,
          a = Cm(r);
        if (!a.length) return Promise.resolve();
        var n = R.implementation.createHTMLDocument(
            "Dynamic document for loading cssom"
          ),
          i = Fl(n);
        return km(a, i).then(function (o) {
          return Il(o);
        });
      }
      var Ol = Fm;
      function Cm(e) {
        var t = [],
          r = vt(e, "*", function (a) {
            return t.includes(a.shadowId) ? !1 : (t.push(a.shadowId), !0);
          }).map(function (a) {
            return { shadowId: a.shadowId, rootNode: yr(a.actualNode) };
          });
        return xr(r, []);
      }
      function km(e, t) {
        var r = [];
        return (
          e.forEach(function (a, n) {
            var i = a.rootNode,
              o = a.shadowId,
              l = Rm(i, o, t);
            if (!l) return Promise.all(r);
            var u = n + 1,
              s = {
                rootNode: i,
                shadowId: o,
                convertDataToStylesheet: t,
                rootIndex: u,
              },
              c = [],
              d = Promise.all(
                l.map(function (f, p) {
                  var m = [u, p];
                  return Hn(f, s, m, c);
                })
              );
            r.push(d);
          }),
          Promise.all(r)
        );
      }
      function Il(e) {
        return e.reduce(function (t, r) {
          return Array.isArray(r) ? t.concat(Il(r)) : t.concat(r);
        }, []);
      }
      function Rm(e, t, r) {
        var a;
        return e.nodeType === 11 && t ? (a = Tm(e, r)) : (a = Sm(e)), Im(a);
      }
      function Tm(e, t) {
        return Array.from(e.children)
          .filter(Om)
          .reduce(function (r, a) {
            var n = a.nodeName.toUpperCase(),
              i = n === "STYLE" ? a.textContent : a,
              o = n === "LINK",
              l = t({ data: i, isLink: o, root: e });
            return r.push(l.sheet), r;
          }, []);
      }
      function Sm(e) {
        return Array.from(e.styleSheets).filter(function (t) {
          return t.media ? Pl(t.media.mediaText) : !1;
        });
      }
      function Om(e) {
        var t = e.nodeName.toUpperCase(),
          r = e.getAttribute("href"),
          a = e.getAttribute("rel"),
          n =
            t === "LINK" &&
            r &&
            a &&
            e.rel.toUpperCase().includes("STYLESHEET"),
          i = t === "STYLE";
        return i || (n && Pl(e.media));
      }
      function Pl(e) {
        return e ? !e.toUpperCase().includes("PRINT") : !0;
      }
      function Im(e) {
        var t = [];
        return e.filter(function (r) {
          return r.href ? (t.includes(r.href) ? !1 : (t.push(r.href), !0)) : !0;
        });
      }
      function Pm(e) {
        var t = e.treeRoot,
          r = t === void 0 ? v._tree[0] : t,
          a = vt(r, "video, audio", function (n) {
            var i = n.actualNode;
            if (i.hasAttribute("src")) return !!i.getAttribute("src");
            var o = Array.from(i.getElementsByTagName("source")).filter(
              function (l) {
                return !!l.getAttribute("src");
              }
            );
            return !(o.length <= 0);
          });
        return Promise.all(
          a.map(function (n) {
            var i = n.actualNode;
            return Nm(i);
          })
        );
      }
      var Nl = Pm;
      function Nm(e) {
        return new Promise(function (t) {
          e.readyState > 0 && t(e);
          function r() {
            e.removeEventListener("loadedmetadata", r), t(e);
          }
          e.addEventListener("loadedmetadata", r);
        });
      }
      function Mm(e) {
        return P(e) === "object" && Array.isArray(e.assets);
      }
      function Ml(e) {
        return !e || e.preload === void 0 || e.preload === null
          ? !0
          : typeof e.preload == "boolean"
          ? e.preload
          : Mm(e.preload);
      }
      function Bl(e) {
        var t = Z.preload,
          r = t.assets,
          a = t.timeout,
          n = { assets: r, timeout: a };
        if (!e.preload || typeof e.preload == "boolean") return n;
        var i = e.preload.assets.every(function (o) {
          return r.includes(o.toLowerCase());
        });
        if (!i)
          throw new Error(
            "Requested assets, not supported. Supported assets are: ".concat(
              r.join(", "),
              "."
            )
          );
        return (
          (n.assets = xr(
            e.preload.assets.map(function (o) {
              return o.toLowerCase();
            }),
            []
          )),
          e.preload.timeout &&
            typeof e.preload.timeout == "number" &&
            !isNaN(e.preload.timeout) &&
            (n.timeout = e.preload.timeout),
          n
        );
      }
      function Bm(e) {
        var t = { cssom: Ol, media: Nl };
        return Ml(e)
          ? new Promise(function (r, a) {
              var n = Bl(e),
                i = n.assets,
                o = n.timeout,
                l = setTimeout(function () {
                  return a(new Error("Preload assets timed out."));
                }, o);
              Promise.all(
                i.map(function (u) {
                  return t[u](e).then(function (s) {
                    return ic({}, u, s);
                  });
                })
              )
                .then(function (u) {
                  var s = u.reduce(function (c, d) {
                    return ne({}, c, d);
                  }, {});
                  clearTimeout(l), r(s);
                })
                .catch(function (u) {
                  clearTimeout(l), a(u);
                });
            })
          : Promise.resolve();
      }
      var ql = Bm;
      function qm(e, t) {
        function r(n) {
          return n.incomplete && n.incomplete.default
            ? n.incomplete.default
            : Mn();
        }
        if (e && e.missingData)
          try {
            var a = t.incomplete[e.missingData[0].reason];
            if (!a) throw new Error();
            return a;
          } catch {
            return typeof e.missingData == "string"
              ? t.incomplete[e.missingData]
              : r(t);
          }
        else return e && e.messageKey ? t.incomplete[e.messageKey] : r(t);
      }
      function Ll(e, t, r) {
        return function (a) {
          var n = e[a.id] || {},
            i = n.messages || {},
            o = Object.assign({}, n);
          delete o.messages,
            !r.reviewOnFail && a.result === void 0
              ? (P(i.incomplete) === "object" &&
                  !Array.isArray(a.data) &&
                  (o.message = qm(a.data, i)),
                o.message || (o.message = i.incomplete))
              : (o.message = a.result === t ? i.pass : i.fail),
            typeof o.message != "function" &&
              (o.message = Bn(o.message, a.data)),
            ln(a, o);
        };
      }
      function Lm(e) {
        var t = v._audit.data.checks || {},
          r = v._audit.data.rules || {},
          a = br(v._audit.rules, "id", e.id) || {};
        e.tags = mt(a.tags || []);
        var n = Ll(t, !0, a),
          i = Ll(t, !1, a);
        e.nodes.forEach(function (o) {
          o.any.forEach(n), o.all.forEach(n), o.none.forEach(i);
        }),
          ln(e, mt(r[e.id] || {}));
      }
      var fa = Lm;
      function Vm(e, t) {
        return vt(e, t);
      }
      var Ye = Vm;
      function Vl(e, t) {
        var r,
          a,
          n,
          i = v._audit && v._audit.tagExclude ? v._audit.tagExclude : [];
        return (
          t.hasOwnProperty("include") || t.hasOwnProperty("exclude")
            ? ((r = t.include || []),
              (r = Array.isArray(r) ? r : [r]),
              (a = t.exclude || []),
              (a = Array.isArray(a) ? a : [a]),
              (a = a.concat(
                i.filter(function (o) {
                  return r.indexOf(o) === -1;
                })
              )))
            : ((r = Array.isArray(t) ? t : [t]),
              (a = i.filter(function (o) {
                return r.indexOf(o) === -1;
              }))),
          (n = r.some(function (o) {
            return e.tags.indexOf(o) !== -1;
          })),
          n || (r.length === 0 && e.enabled !== !1)
            ? a.every(function (o) {
                return e.tags.indexOf(o) === -1;
              })
            : !1
        );
      }
      function jm(e, t, r) {
        var a = r.runOnly || {},
          n = (r.rules || {})[e.id];
        return e.pageLevel && !t.page
          ? !1
          : a.type === "rule"
          ? a.values.indexOf(e.id) !== -1
          : n && typeof n.enabled == "boolean"
          ? n.enabled
          : a.type === "tag" && a.values
          ? Vl(e, a.values)
          : Vl(e, []);
      }
      var jl = jm;
      function Hl(e, t) {
        if (!t) return e;
        var r = e.cloneNode(!1),
          a = jr(r);
        if (r.nodeType === 1) {
          var n = r.outerHTML;
          r = ae.get(n, function () {
            return zl(r, a, e, t);
          });
        } else r = zl(r, a, e, t);
        return (
          Array.from(e.childNodes).forEach(function (i) {
            r.appendChild(Hl(i, t));
          }),
          r
        );
      }
      function zl(e, t, r, a) {
        return (
          t &&
            ((e = R.createElement(e.nodeName)),
            Array.from(t).forEach(function (n) {
              Hm(r, n.name, a) || e.setAttribute(n.name, n.value);
            })),
          e
        );
      }
      function Hm(e, t, r) {
        return typeof r[t] > "u" ? !1 : r[t] === !0 ? !0 : jt(e, r[t]);
      }
      function zm(e, t) {
        var r;
        if (e.length === 0) return t;
        e.length < t.length && ((r = e), (e = t), (t = r));
        for (var a = 0, n = t.length; a < n; a++)
          e.includes(t[a]) || e.push(t[a]);
        return e;
      }
      function Um(e) {
        return e.reduce(function (t, r) {
          return (!t.length || !Gt(t[t.length - 1], r)) && t.push(r), t;
        }, []);
      }
      function $m(e, t) {
        var r = [],
          a;
        if (v._selectCache)
          for (var n = 0, i = v._selectCache.length; n < i; n++) {
            var o = v._selectCache[n];
            if (o.selector === e) return o.result;
          }
        for (var l = Um(t.include), u = Wm(t), s = 0; s < l.length; s++) {
          a = l[s];
          var c = vt(a, e, u);
          r = zm(r, c);
        }
        return (
          v._selectCache && v._selectCache.push({ selector: e, result: r }), r
        );
      }
      var $n = $m;
      function Wm(e) {
        return !e.exclude || e.exclude.length === 0
          ? null
          : function (t) {
              return Ln(t, e);
            };
      }
      function Gm(e, t, r) {
        if (e === y) return e.scroll(r, t);
        (e.scrollTop = t), (e.scrollLeft = r);
      }
      function Ym(e) {
        e.forEach(function (t) {
          var r = t.elm,
            a = t.top,
            n = t.left;
          return Gm(r, a, n);
        });
      }
      var Km = Ym;
      function Xm(e) {
        var t = Array.isArray(e) ? ie(e) : [e];
        return Ul(t, R);
      }
      function Ul(e, t) {
        var r = e.shift(),
          a = r ? t.querySelector(r) : null;
        return e.length === 0
          ? a
          : a != null && a.shadowRoot
          ? Ul(e, a.shadowRoot)
          : null;
      }
      function Jm() {
        return [
          "hidden",
          "text",
          "search",
          "tel",
          "url",
          "email",
          "password",
          "date",
          "month",
          "week",
          "time",
          "datetime-local",
          "number",
          "range",
          "color",
          "checkbox",
          "radio",
          "file",
          "submit",
          "image",
          "reset",
          "button",
        ];
      }
      var pa = Jm,
        $l = [
          ,
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1],
            [
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              1,
            ],
            [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1],
            [, 1, , , 1, , , 1, , , , , , 1],
            [, 1, , 1, , , , 1, , , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1],
            [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1],
            [
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1],
            [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1],
            [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1],
            [, , , , 1, , , , , , , , , , , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              ,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, , , , , , , 1, , , , , , , 1],
            [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1],
            ,
            [1, 1, 1, , , , , , , , , , , , , 1],
            [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [, , , 1, , , , , , , , , , , , , , , 1],
            [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1],
            [
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              ,
              ,
              1,
            ],
            ,
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
            ],
            [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1],
            [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1],
            [, , , , , , , 1, , , , 1, , 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1],
            [
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , , , , , , 1],
            ,
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1],
            [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, 1],
            [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1],
            ,
            [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1],
            [1, 1, , , 1, 1, , 1, , , , , 1, , 1],
          ],
          [
            ,
            [, 1],
            [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1],
            [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1],
            ,
            [1, , , , , 1],
            [, 1, , , , 1, , , , 1],
            [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1],
            [, , , , , , , , , , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , , 1, , , , 1, , 1],
            [, 1],
            [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1],
            [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1],
            [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1],
            [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1],
            [1, , , , , , , , , , , , , , , , , , , , 1],
            [, , , , , , , , , 1],
            ,
            [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1],
            [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1],
            [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1],
            [1, , , , , , , , , , , , , , , , , 1],
            [, , , , , 1, , , 1, , , , , , 1],
            [, , , , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , , 1],
            [, 1, , , , , , , , , , , , , , 1],
            [, 1, , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , 1],
            ,
            [, , , , , , , , , , , , , , , , , , 1],
            [1, , , , , , , , , 1, , , , 1],
            [, , , , , , , , , , , , , , , , , , 1],
            ,
            [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1],
            [1],
            [, , , , , , , , , , , 1, , , , , , , , , , , 1],
            [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1],
            [, , , , , , , , , , , , , , , , 1, , , , , 1],
            [, , 1, , , , , 1, , 1],
            [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1],
            [, , , , , 1],
            [, , , , , , , , , , , , , , , , , , , 1],
            [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1],
            [, , , , , 1, , , , , , , 1, , , , , , , 1],
            ,
            [
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
            ],
            [, , , , , , , , , , , , , , , , , , 1],
            [, 1, , , , 1],
            ,
            [1],
          ],
          [
            ,
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1],
            [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1],
            [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1],
            [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1],
            [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , , , , , , 1],
            [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1],
            [, 1, , , , , , , , 1, , , , , , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1],
            [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1],
            [, , , , , , , , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1],
            [, 1, , , , , , , , 1, , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1],
            [, 1, , , , , , , 1],
            [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1],
            [1, 1, , , 1, , , 1, 1, 1, , , , 1],
            ,
            [, , , , , , , , , , , , , 1, , , , , , , , , , 1],
            [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1],
            [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1],
            [, , , , , , , , , 1],
            [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1],
            [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
            ],
            [, , , , , , , , , , , , , , , 1, , , , 1],
            ,
            [
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
            ],
            [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1],
            [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1],
            [, 1, , 1, , , , , , , , , , , , 1],
            ,
            [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1],
            [1],
          ],
          [
            ,
            [1, , , , , , , , , 1, , , , , 1, , 1, , 1],
            [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1],
            [, 1, , , , , , , 1, , , , 1, , , , , , 1],
            [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1],
            [1],
            [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1],
            [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1],
            [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1],
            [1, , , , , , , , , , , , , , 1, , , , 1],
            [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1],
            [
              1,
              ,
              ,
              ,
              ,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
            ],
            [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1],
            [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1],
            [
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
            ],
            [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1],
            [, , , , , , , , , 1, , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , , , 1, , 1],
            [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1],
            [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, , , , , , , , , , , , , 1],
            [, , 1, , , , , , , , , , , , , , , , , , , , 1],
            [1, , , , , , , , , , , 1, , 1, , 1, , , , 1],
            [, , , 1, , , , , , , , , 1],
            [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1],
            [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1],
            [, , , , , , , , , , , , , , , , , , , 1, 1],
            [, 1, , , , , , 1, , , , , , , , , , , , , 1],
            [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1],
            ,
            [, , 1, , , 1, , , , , , 1, , , , 1],
            [, , , , , , , , , 1, , , , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
            ],
            [, , , , , 1, , , , , , , , , , , , , 1],
            [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1],
            [, , , , , 1, , , , , , , , , , , , , , 1],
            [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1],
            [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1],
            [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1],
            [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1],
            [, , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1],
            [, , , , , , , , , , , , 1],
            ,
            [
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [1, , , , 1, , , , , , , , , , 1],
            [1, , , , , , , , , 1],
            ,
            [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1],
            [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , , , , , , , , 1],
            [
              1,
              1,
              1,
              ,
              ,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              1,
            ],
            [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1],
            ,
            [
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
            ],
            [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1],
            [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1],
            ,
            [, 1, , , , , , 1, , , , , , , 1],
            [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1],
          ],
          [
            ,
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1],
            [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              ,
              ,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, , , , , , , , 1, , , , , 1, , 1],
            [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1],
            [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1],
          ],
          [
            ,
            [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1],
            [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1],
            [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1],
            [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1],
            ,
            [, , , , , , , , , , , , , , , 1, , , , 1, , 1],
            [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , , 1, 1],
            [, 1, , , , , , , , , , , , , 1],
            [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
            ],
            [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1],
            [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1],
            [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1],
            ,
            [
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              ,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , , 1, , , , 1, , , , 1, 1],
            [, , , , 1],
            [, , , , , , , , , 1, , , 1],
            ,
            [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1],
            [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1],
            [
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              ,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , , , , 1],
            [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1],
            [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            ,
            [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1],
            [, , , , , , , , , , , , , 1],
            [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1],
            [, , , , , , , , , , , , , , 1],
          ],
          [
            ,
            [, 1],
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
            ],
            [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1],
            [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1],
            [, 1, , , , , , , , , , , , , , , 1],
          ],
          [
            ,
            [
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , 1, , , , , , , , , 1, 1, , , , 1],
            [, , , , , , 1],
            [, , 1],
            [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1],
            ,
            [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1],
            [, , , , , , , 1, , , , , , , , , 1],
            [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1],
            [, , , , , , , 1, , 1, , , , , , , , , , 1],
            [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1],
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1],
            [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1],
            [, , , , , , , , , , , , , , 1, , , , , , 1],
            ,
            [, , , , , , , , , 1, , , , , , 1, , , , , 1],
            [, , 1, , , , , , , 1, , , 1, 1],
            [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1],
            [
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
            ],
            ,
            [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1],
            [, , , , 1, , , , , , , , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , 1, , , , , 1, , 1],
            [, , , , , , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1],
            [
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1],
            [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1],
            [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1],
            [
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1],
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
            ],
            [
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
            ],
            [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1],
          ],
          [
            ,
            [, , , , , , , , , , , , , 1, 1, , , , 1],
            [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1],
            ,
            [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , 1],
            [, , , , , , , , , 1],
            [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1],
            [, 1, , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , , , , , 1, , , 1],
            [, , , , , , , , , 1],
            [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1],
            [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1],
            [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1],
            [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1],
            [, , , , , , , , , , , 1],
            [, , , , , , , , , 1, , , , , , , , , , , , , 1],
            ,
            [
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1],
            [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1],
            [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1],
            [, , , , , 1, , , 1, , , , 1],
            [, 1],
            ,
            [, 1],
            [1, , , , , , , , , , , , , , 1, , , , , 1],
          ],
          [
            ,
            [
              ,
              1,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
            ],
            [, , 1, , , , , , , , , 1],
            ,
            ,
            [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1],
            ,
            [, , , , , , , , , , , , , , , , , , 1, , 1],
            ,
            [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1],
            ,
            [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1],
            [, , , , , , , , , , , , , , , , 1, , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , , , , , , , 1, , 1, , , 1],
            [1, , , , , , , , , , , , , , , , , , 1, , 1],
            ,
            ,
            [, 1, , , , , , , , , , , , , , 1, , , , 1, 1],
            [, , , , , , , , , 1, , , 1, , , , , , , , , , 1],
            [, , , , , , , , , , , , , , , 1],
            [, , , , , , , , , , , , , 1, 1, , , , , , 1],
            ,
            [, 1],
          ],
          [
            ,
            [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1,
            ],
            [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1],
            [, 1, , , , , , , , 1],
            [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1],
            [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1],
            [, , , , , , , 1],
            [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1],
            [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1],
            [
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [, 1, , , , , , , , 1],
            [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1],
            [
              ,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1],
            [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1],
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
            ],
            [, , , 1],
            ,
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1],
            [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1],
            [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1],
            ,
            [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1],
            [, 1, , , , , , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1],
          ],
          [
            ,
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              ,
              ,
              ,
              ,
              1,
              1,
              1,
            ],
            [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1],
            [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1],
            [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1],
            [, 1],
            [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1],
            [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1],
            [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1],
            [, , 1, , , , , , , , , , , , , , , , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              1,
            ],
            [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , , , , , , , , , , , , , , 1],
            [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              ,
              1,
            ],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
            ],
            [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1],
            [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1],
            [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1],
            [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1],
            [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1],
            [, , , , , , , , 1, , , , , 1, , , 1],
          ],
          [
            ,
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1],
            [, , , , , , , , 1, , , , 1, , 1, , 1],
            [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1],
            [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1],
            ,
            [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1],
            [, 1, , , 1, , , , , , , , 1, , , , , , , 1],
            [
              1,
              1,
              ,
              ,
              ,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
            ],
            ,
            [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1],
            [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
              ,
              1,
            ],
            [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1],
            [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1],
            [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1],
            ,
            [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1],
            [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1],
            [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              ,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , , , , , , , , , , , , , , , , , 1],
            [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1],
            [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1],
            [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1],
            [, , , , , , , 1, , , , 1],
          ],
          [
            ,
            [
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1],
            [, 1, , , , , , , 1],
            [, , , , , , , , , , 1],
            [, 1, , , , , , 1, 1, , , , , , 1],
            ,
            [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1],
            [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1],
            [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1],
            ,
            [
              ,
              1,
              1,
              ,
              1,
              ,
              ,
              1,
              1,
              ,
              ,
              1,
              ,
              ,
              1,
              1,
              1,
              ,
              1,
              ,
              1,
              1,
              1,
              ,
              ,
              ,
              1,
            ],
            [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1],
            [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1],
            [
              ,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
            ],
            [, , , , , 1],
            [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1],
            [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1],
            [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1],
            [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1],
            ,
            [, 1],
            [, , , , , , , , , , , , , , , , , , , , , , , , 1],
            [, , 1, , , , , 1, , , 1, , , , 1, , 1],
            [, 1, , , , , , , , , 1],
          ],
        ];
      function Qm(e) {
        for (var t = $l; e.length < 3; ) e += "`";
        for (var r = 0; r <= e.length - 1; r++) {
          var a = e.charCodeAt(r) - 96;
          if (((t = t[a]), !t)) return !1;
        }
        return !0;
      }
      function Wl(e) {
        e = Array.isArray(e) ? e : $l;
        var t = [];
        return (
          e.forEach(function (r, a) {
            var n = String.fromCharCode(a + 96).replace("`", "");
            Array.isArray(r)
              ? (t = t.concat(
                  Wl(r).map(function (i) {
                    return n + i;
                  })
                ))
              : t.push(n);
          }),
          t
        );
      }
      var ma = Qm,
        Zm = (function (e) {
          Ei(r, e);
          var t = Ai(r);
          function r(a) {
            var n;
            return (
              cr(this, r),
              (n = t.call(this)),
              (n._props = th(a)),
              (n._attrs = rh(a)),
              n
            );
          }
          return (
            dr(r, [
              {
                key: "props",
                get: function () {
                  return this._props;
                },
              },
              {
                key: "attr",
                value: function (n) {
                  var i;
                  return (i = this._attrs[n]) !== null && i !== void 0
                    ? i
                    : null;
                },
              },
              {
                key: "hasAttr",
                value: function (n) {
                  return this._attrs[n] !== void 0;
                },
              },
              {
                key: "attrNames",
                get: function () {
                  return Object.keys(this._attrs);
                },
              },
            ]),
            r
          );
        })(X),
        Wn = {
          "#cdata-section": 2,
          "#text": 3,
          "#comment": 8,
          "#document": 9,
          "#document-fragment": 11,
        },
        Gl = {},
        eh = Object.keys(Wn);
      eh.forEach(function (e) {
        Gl[Wn[e]] = e;
      });
      function th(e) {
        var t,
          r,
          a,
          n = (t = e.nodeName) !== null && t !== void 0 ? t : Gl[e.nodeType],
          i =
            (r =
              (a = e.nodeType) !== null && a !== void 0
                ? a
                : Wn[e.nodeName]) !== null && r !== void 0
              ? r
              : 1;
        me(
          typeof i == "number",
          "nodeType has to be a number, got '".concat(i, "'")
        ),
          me(
            typeof n == "string",
            "nodeName has to be a string, got '".concat(n, "'")
          ),
          (n = n.toLowerCase());
        var o = null;
        n === "input" &&
          ((o = (
            e.type ||
            (e.attributes && e.attributes.type) ||
            ""
          ).toLowerCase()),
          pa().includes(o) || (o = "text"));
        var l = ne({}, e, { nodeType: i, nodeName: n });
        return o && (l.type = o), delete l.attributes, Object.freeze(l);
      }
      function rh(e) {
        var t = e.attributes,
          r = t === void 0 ? {} : t,
          a = { htmlFor: "for", className: "class" };
        return Object.keys(r).reduce(function (n, i) {
          var o = r[i];
          if (
            (me(
              P(o) !== "object" || o === null,
              "expects attributes not to be an object, '".concat(i, "' was")
            ),
            o !== void 0)
          ) {
            var l = a[i] || i;
            n[l] = o !== null ? String(o) : null;
          }
          return n;
        }, {});
      }
      var Yl = Zm,
        Kl = {};
      ke(Kl, {
        CssSelectorParser: function () {
          return ah.CssSelectorParser;
        },
        doT: function () {
          return Xl.default;
        },
        emojiRegexText: function () {
          return Gn;
        },
        memoize: function () {
          return nh.default;
        },
      });
      var ah = pt(Ri()),
        Xl = pt(ji()),
        Gn = function () {
          return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
        },
        nh = pt(Vi()),
        ih = pt(Ad()),
        oh = pt(Fd());
      pt(Cd()),
        (Xl.default.templateSettings.strip = !1),
        "Promise" in y || ih.default.polyfill(),
        "Uint32Array" in y || (y.Uint32Array = oh.Uint32Array),
        y.Uint32Array &&
          ("some" in y.Uint32Array.prototype ||
            Object.defineProperty(y.Uint32Array.prototype, "some", {
              value: Array.prototype.some,
            }),
          "reduce" in y.Uint32Array.prototype ||
            Object.defineProperty(y.Uint32Array.prototype, "reduce", {
              value: Array.prototype.reduce,
            }));
      function lh(e, t) {
        if (((e = e || function () {}), (t = t || v.log), !v._audit))
          throw new Error("No audit configured");
        var r = v.utils.queue(),
          a = [];
        Object.keys(v.plugins).forEach(function (i) {
          r.defer(function (o) {
            var l = function (s) {
              a.push(s), o();
            };
            try {
              v.plugins[i].cleanup(o, l);
            } catch (u) {
              l(u);
            }
          });
        });
        var n = v.utils.getFlattenedTree(R.body);
        v.utils.querySelectorAll(n, "iframe, frame").forEach(function (i) {
          r.defer(function (o, l) {
            return v.utils.sendCommandToFrame(
              i.actualNode,
              { command: "cleanup-plugin" },
              o,
              l
            );
          });
        }),
          r
            .then(function (i) {
              a.length === 0 ? e(i) : t(a);
            })
            .catch(t);
      }
      var Jl = lh,
        Er = {},
        Ql;
      function Zl(e) {
        return Er.hasOwnProperty(e);
      }
      function Yn(e) {
        return typeof e == "string" && Er[e]
          ? Er[e]
          : typeof e == "function"
          ? e
          : Ql;
      }
      function uh(e, t, r) {
        (Er[e] = t), r && (Ql = t);
      }
      function sh(e) {
        var t;
        if (((t = v._audit), !t)) throw new Error("No audit configured");
        if (e.axeVersion || e.ver) {
          var r = e.axeVersion || e.ver;
          if (!/^\d+\.\d+\.\d+(-canary)?/.test(r))
            throw new Error("Invalid configured version ".concat(r));
          var a = r.split("-"),
            n = ve(a, 2),
            i = n[0],
            o = n[1],
            l = i.split(".").map(Number),
            u = ve(l, 3),
            s = u[0],
            c = u[1],
            d = u[2],
            f = v.version.split("-"),
            p = ve(f, 2),
            m = p[0],
            b = p[1],
            D = m.split(".").map(Number),
            h = ve(D, 3),
            g = h[0],
            x = h[1],
            E = h[2];
          if (
            s !== g ||
            x < c ||
            (x === c && E < d) ||
            (s === g && c === x && d === E && o && o !== b)
          )
            throw new Error(
              "Configured version "
                .concat(r, " is not compatible with current axe version ")
                .concat(v.version)
            );
        }
        if (
          (e.reporter &&
            (typeof e.reporter == "function" || Zl(e.reporter)) &&
            (t.reporter = e.reporter),
          e.checks)
        ) {
          if (!Array.isArray(e.checks))
            throw new TypeError("Checks property must be an array");
          e.checks.forEach(function (N) {
            if (!N.id)
              throw new TypeError(
                "Configured check ".concat(
                  JSON.stringify(N),
                  " is invalid. Checks must be an object with at least an id property"
                )
              );
            t.addCheck(N);
          });
        }
        var C = [];
        if (e.rules) {
          if (!Array.isArray(e.rules))
            throw new TypeError("Rules property must be an array");
          e.rules.forEach(function (N) {
            if (!N.id)
              throw new TypeError(
                "Configured rule ".concat(
                  JSON.stringify(N),
                  " is invalid. Rules must be an object with at least an id property"
                )
              );
            C.push(N.id), t.addRule(N);
          });
        }
        if (
          (e.disableOtherRules &&
            t.rules.forEach(function (N) {
              C.includes(N.id) === !1 && (N.enabled = !1);
            }),
          typeof e.branding < "u"
            ? t.setBranding(e.branding)
            : t._constructHelpUrls(),
          e.tagExclude && (t.tagExclude = e.tagExclude),
          e.locale && t.applyLocale(e.locale),
          e.standards && ap(e.standards),
          e.noHtml && (t.noHtml = !0),
          e.allowedOrigins)
        ) {
          if (!Array.isArray(e.allowedOrigins))
            throw new TypeError("Allowed origins property must be an array");
          if (e.allowedOrigins.includes("*"))
            throw new Error(
              '"*" is not allowed. Use "'.concat(Z.allOrigins, '" instead')
            );
          t.setAllowedOrigins(e.allowedOrigins);
        }
      }
      var ch = sh;
      function dh(e) {
        at.updateMessenger(e);
      }
      function fh(e) {
        e = e || [];
        var t = e.length
            ? v._audit.rules.filter(function (a) {
                return !!e.filter(function (n) {
                  return a.tags.indexOf(n) !== -1;
                }).length;
              })
            : v._audit.rules,
          r = v._audit.data.rules || {};
        return t.map(function (a) {
          var n = r[a.id] || {};
          return {
            ruleId: a.id,
            description: n.description,
            help: n.help,
            helpUrl: n.helpUrl,
            tags: a.tags,
            actIds: a.actIds,
          };
        });
      }
      var ph = fh,
        eu = {};
      ke(eu, {
        allowedAttr: function () {
          return tu;
        },
        arialabelText: function () {
          return Ar;
        },
        arialabelledbyText: function () {
          return kr;
        },
        getAccessibleRefs: function () {
          return ii;
        },
        getElementUnallowedRoles: function () {
          return Vu;
        },
        getExplicitRole: function () {
          return ge;
        },
        getImplicitRole: function () {
          return dt;
        },
        getOwnedVirtual: function () {
          return Cr;
        },
        getRole: function () {
          return se;
        },
        getRoleType: function () {
          return ct;
        },
        getRolesByType: function () {
          return Wv;
        },
        getRolesWithNameFromContents: function () {
          return Kv;
        },
        implicitNodes: function () {
          return Jv;
        },
        implicitRole: function () {
          return dt;
        },
        isAccessibleRef: function () {
          return ya;
        },
        isAriaRoleAllowedOnElement: function () {
          return Lu;
        },
        isUnsupportedRole: function () {
          return Kn;
        },
        isValidRole: function () {
          return Zt;
        },
        label: function () {
          return zu;
        },
        labelVirtual: function () {
          return ra;
        },
        lookupTable: function () {
          return Hu;
        },
        namedFromContents: function () {
          return bu;
        },
        requiredAttr: function () {
          return Uu;
        },
        requiredContext: function () {
          return li;
        },
        requiredOwned: function () {
          return ui;
        },
        validateAttr: function () {
          return Sr;
        },
        validateAttrValue: function () {
          return $u;
        },
      });
      function mh() {
        return ae.get("globalAriaAttrs", function () {
          return Object.keys(ue.ariaAttrs).filter(function (e) {
            return ue.ariaAttrs[e].global;
          });
        });
      }
      var Nt = mh;
      function hh(e) {
        var t = ue.ariaRoles[e],
          r = ie(Nt());
        return (
          t &&
            (t.allowedAttrs && r.push.apply(r, ie(t.allowedAttrs)),
            t.requiredAttrs && r.push.apply(r, ie(t.requiredAttrs))),
          r
        );
      }
      var tu = hh;
      function vh(e) {
        if (!(e instanceof X)) {
          if (e.nodeType !== 1) return "";
          e = B(e);
        }
        return e.attr("aria-label") || "";
      }
      var Ar = vh;
      function gh(e) {
        var t = ue.ariaRoles[e];
        return t ? !!t.unsupported : !1;
      }
      var Kn = gh;
      function bh(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.allowAbstract,
          a = t.flagUnsupported,
          n = a === void 0 ? !1 : a,
          i = ue.ariaRoles[e],
          o = Kn(e);
        return !i || (n && o) ? !1 : r ? !0 : i.type !== "abstract";
      }
      var Zt = bh;
      function yh(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.fallback,
          a = t.abstracts,
          n = t.dpub;
        if (((e = e instanceof X ? e : B(e)), e.props.nodeType !== 1))
          return null;
        var i = (e.attr("role") || "").trim().toLowerCase(),
          o = r ? Be(i) : [i],
          l = o.find(function (u) {
            return !n && u.substr(0, 4) === "doc-"
              ? !1
              : Zt(u, { allowAbstract: a });
          });
        return l || null;
      }
      var ge = yh;
      function Dh(e) {
        return Object.keys(ue.htmlElms).filter(function (t) {
          var r = ue.htmlElms[t];
          return r.contentTypes
            ? r.contentTypes.includes(e)
            : r.variant && r.variant.default && r.variant.default.contentTypes
            ? r.variant.default.contentTypes.includes(e)
            : !1;
        });
      }
      var Xn = Dh;
      function wh(e) {
        for (var t = [], r = e.rows, a = 0, n = r.length; a < n; a++) {
          var i = r[a].cells;
          t[a] = t[a] || [];
          for (var o = 0, l = 0, u = i.length; l < u; l++)
            for (var s = 0; s < i[l].colSpan; s++) {
              for (
                var c = i[l].getAttribute("rowspan"),
                  d =
                    parseInt(c) === 0 || i[l].rowspan === 0
                      ? r.length
                      : i[l].rowSpan,
                  f = 0;
                f < d;
                f++
              ) {
                for (t[a + f] = t[a + f] || []; t[a + f][o]; ) o++;
                t[a + f][o] = i[l];
              }
              o++;
            }
        }
        return t;
      }
      var gt = nt(wh);
      function _h(e, t) {
        var r, a;
        for (t || (t = gt(Kt(e, "table"))), r = 0; r < t.length; r++)
          if (t[r] && ((a = t[r].indexOf(e)), a !== -1)) return { x: a, y: r };
      }
      var ha = nt(_h);
      function xh(e) {
        var t = e instanceof X ? e : B(e);
        e = t.actualNode;
        var r = t.attr("scope"),
          a = t.attr("role");
        if (!["td", "th"].includes(t.props.nodeName))
          throw new TypeError("Expected TD or TH element");
        if (a === "columnheader") return "col";
        if (a === "rowheader") return "row";
        if (r === "col" || r === "row") return r;
        if (t.props.nodeName !== "th") return !1;
        if (!t.actualNode) return "auto";
        var n = gt(Kt(e, "table")),
          i = ha(e, n),
          o = n[i.y].reduce(function (u, s) {
            return u && s.nodeName.toUpperCase() === "TH";
          }, !0);
        if (o) return "col";
        var l = n
          .map(function (u) {
            return u[i.x];
          })
          .reduce(function (u, s) {
            return u && s && s.nodeName.toUpperCase() === "TH";
          }, !0);
        return l ? "row" : "auto";
      }
      var Jn = xh;
      function Eh(e) {
        return ["col", "auto"].indexOf(Jn(e)) !== -1;
      }
      var er = Eh;
      function Ah(e) {
        return ["row", "auto"].includes(Jn(e));
      }
      var tr = Ah,
        ru =
          Xn("sectioning")
            .map(function (e) {
              return "".concat(e, ":not([role])");
            })
            .join(", ") +
          " , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]";
      function au(e) {
        var t = K(kr(e)),
          r = K(Ar(e));
        return !!(t || r);
      }
      var Fh = {
          a: function (t) {
            return t.hasAttr("href") ? "link" : null;
          },
          area: function (t) {
            return t.hasAttr("href") ? "link" : null;
          },
          article: "article",
          aside: "complementary",
          body: "document",
          button: "button",
          datalist: "listbox",
          dd: "definition",
          dfn: "term",
          details: "group",
          dialog: "dialog",
          dt: "term",
          fieldset: "group",
          figure: "figure",
          footer: function (t) {
            var r = $e(t, ru);
            return r ? null : "contentinfo";
          },
          form: function (t) {
            return au(t) ? "form" : null;
          },
          h1: "heading",
          h2: "heading",
          h3: "heading",
          h4: "heading",
          h5: "heading",
          h6: "heading",
          header: function (t) {
            var r = $e(t, ru);
            return r ? null : "banner";
          },
          hr: "separator",
          img: function (t) {
            var r = t.hasAttr("alt") && !t.attr("alt"),
              a = Nt().find(function (n) {
                return t.hasAttr(n);
              });
            return r && !a && !Re(t) ? "presentation" : "img";
          },
          input: function (t) {
            var r;
            if (t.hasAttr("list")) {
              var a = it(t.actualNode, "list").filter(function (n) {
                return !!n;
              })[0];
              r = a && a.nodeName.toLowerCase() === "datalist";
            }
            switch (t.props.type) {
              case "checkbox":
                return "checkbox";
              case "number":
                return "spinbutton";
              case "radio":
                return "radio";
              case "range":
                return "slider";
              case "search":
                return r ? "combobox" : "searchbox";
              case "button":
              case "image":
              case "reset":
              case "submit":
                return "button";
              case "text":
              case "tel":
              case "url":
              case "email":
              case "":
                return r ? "combobox" : "textbox";
              default:
                return "textbox";
            }
          },
          li: "listitem",
          main: "main",
          math: "math",
          menu: "list",
          nav: "navigation",
          ol: "list",
          optgroup: "group",
          option: "option",
          output: "status",
          progress: "progressbar",
          section: function (t) {
            return au(t) ? "region" : null;
          },
          select: function (t) {
            return t.hasAttr("multiple") || parseInt(t.attr("size")) > 1
              ? "listbox"
              : "combobox";
          },
          summary: "button",
          table: "table",
          tbody: "rowgroup",
          td: function (t) {
            var r = $e(t, "table"),
              a = ge(r);
            return ["grid", "treegrid"].includes(a) ? "gridcell" : "cell";
          },
          textarea: "textbox",
          tfoot: "rowgroup",
          th: function (t) {
            if (er(t)) return "columnheader";
            if (tr(t)) return "rowheader";
          },
          thead: "rowgroup",
          tr: "row",
          ul: "list",
        },
        Qn = Fh;
      function Ch(e, t) {
        var r = P(t);
        if (Array.isArray(t) && typeof e < "u") return t.includes(e);
        if (r === "function") return !!t(e);
        if (e != null) {
          if (t instanceof RegExp) return t.test(e);
          if (/^\/.*\/$/.test(t)) {
            var a = t.substring(1, t.length - 1);
            return new RegExp(a).test(e);
          }
        }
        return t === e;
      }
      var Mt = Ch;
      function kh(e, t) {
        return Mt(!!Ue(e), t);
      }
      var nu = kh;
      function Rh(e, t) {
        var r = P(t);
        if (r !== "object" || Array.isArray(t) || t instanceof RegExp)
          throw new Error("Expect matcher to be an object");
        return Object.keys(t).every(function (a) {
          return Mt(e(a), t[a]);
        });
      }
      var Zn = Rh;
      function Th(e, t) {
        return (
          e instanceof X || (e = B(e)),
          Zn(function (r) {
            return e.attr(r);
          }, t)
        );
      }
      var iu = Th;
      function Sh(e, t) {
        return !!t(e);
      }
      var ou = Sh;
      function Oh(e, t) {
        return Mt(ge(e), t);
      }
      var lu = Oh;
      function Ih(e, t) {
        return Mt(dt(e), t);
      }
      var uu = Ih;
      function Ph(e, t) {
        return e instanceof X || (e = B(e)), Mt(e.props.nodeName, t);
      }
      var su = Ph;
      function Nh(e, t) {
        return (
          e instanceof X || (e = B(e)),
          Zn(function (r) {
            return e.props[r];
          }, t)
        );
      }
      var cu = Nh;
      function Mh(e, t) {
        return Mt(se(e), t);
      }
      var du = Mh,
        fu = {
          hasAccessibleName: nu,
          attributes: iu,
          condition: ou,
          explicitRole: lu,
          implicitRole: uu,
          nodeName: su,
          properties: cu,
          semanticRole: du,
        };
      function pu(e, t) {
        return (
          e instanceof X || (e = B(e)),
          Array.isArray(t)
            ? t.some(function (r) {
                return pu(e, r);
              })
            : typeof t == "string"
            ? Wa(e, t)
            : Object.keys(t).every(function (r) {
                if (!fu[r])
                  throw new Error('Unknown matcher type "'.concat(r, '"'));
                var a = fu[r],
                  n = t[r];
                return a(e, n);
              })
        );
      }
      var mu = pu;
      function Bh(e, t) {
        return mu(e, t);
      }
      var Ke = Bh;
      (Ke.hasAccessibleName = nu),
        (Ke.attributes = iu),
        (Ke.condition = ou),
        (Ke.explicitRole = lu),
        (Ke.fromDefinition = mu),
        (Ke.fromFunction = Zn),
        (Ke.fromPrimative = Mt),
        (Ke.implicitRole = uu),
        (Ke.nodeName = su),
        (Ke.properties = cu),
        (Ke.semanticRole = du);
      var Fr = Ke;
      function qh(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.noMatchAccessibleName,
          a = r === void 0 ? !1 : r,
          n = ue.htmlElms[e.props.nodeName];
        if (!n) return {};
        if (!n.variant) return n;
        var i = n.variant,
          o = Ve(n, $s);
        for (var l in i)
          if (!(!i.hasOwnProperty(l) || l === "default")) {
            for (
              var u = i[l],
                s = u.matches,
                c = Ve(u, Ws),
                d = Array.isArray(s) ? s : [s],
                f = 0;
              f < d.length && a;
              f++
            )
              if (d[f].hasOwnProperty("hasAccessibleName")) return n;
            if (Fr(e, s)) for (var p in c) c.hasOwnProperty(p) && (o[p] = c[p]);
          }
        for (var m in i.default)
          i.default.hasOwnProperty(m) &&
            typeof o[m] > "u" &&
            (o[m] = i.default[m]);
        return o;
      }
      var Bt = qh;
      function Lh(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.chromium,
          a = e instanceof X ? e : B(e);
        if (((e = a.actualNode), !a))
          throw new ReferenceError(
            "Cannot get implicit role of a node outside the current scope."
          );
        var n = a.props.nodeName,
          i = Qn[n];
        if (!i && r) {
          var o = Bt(a),
            l = o.chromiumRole;
          return l || null;
        }
        return typeof i == "function" ? i(a) : i || null;
      }
      var dt = Lh,
        Vh = {
          td: ["tr"],
          th: ["tr"],
          tr: ["thead", "tbody", "tfoot", "table"],
          thead: ["table"],
          tbody: ["table"],
          tfoot: ["table"],
          li: ["ol", "ul"],
          dt: ["dl", "div"],
          dd: ["dl", "div"],
          div: ["dl"],
        };
      function hu(e, t) {
        var r = Vh[e.props.nodeName];
        if (!r) return null;
        if (!e.parent)
          throw new ReferenceError(
            "Cannot determine role presentational inheritance of a required parent outside the current scope."
          );
        if (!r.includes(e.parent.props.nodeName)) return null;
        var a = ge(e.parent, t);
        return ["none", "presentation"].includes(a) && !gu(e.parent)
          ? a
          : a
          ? null
          : hu(e.parent, t);
      }
      function vu(e, t) {
        var r = t.chromium,
          a = Ve(t, Gs),
          n = dt(e, { chromium: r });
        if (!n) return null;
        var i = hu(e, a);
        return i || n;
      }
      function gu(e) {
        var t = Nt().some(function (r) {
          return e.hasAttr(r);
        });
        return t || Re(e);
      }
      function jh(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.noImplicit,
          a = Ve(t, Ys),
          n = e instanceof X ? e : B(e);
        if (n.props.nodeType !== 1) return null;
        var i = ge(n, a);
        return i
          ? ["presentation", "none"].includes(i) && gu(n)
            ? r
              ? null
              : vu(n, a)
            : i
          : r
          ? null
          : vu(n, a);
      }
      function Hh(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.noPresentational,
          a = Ve(t, Ks),
          n = jh(e, a);
        return r && ["presentation", "none"].includes(n) ? null : n;
      }
      var se = Hh,
        zh = ["iframe"];
      function Uh(e) {
        var t = e instanceof X ? e : B(e);
        return t.props.nodeType !== 1 ||
          !e.hasAttr("title") ||
          (!Ke(t, zh) && ["none", "presentation"].includes(se(t)))
          ? ""
          : t.attr("title");
      }
      var va = Uh;
      function $h(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.strict;
        if (((e = e instanceof X ? e : B(e)), e.props.nodeType !== 1))
          return !1;
        var a = se(e),
          n = ue.ariaRoles[a];
        return n && n.nameFromContent
          ? !0
          : r
          ? !1
          : !n || ["presentation", "none"].includes(a);
      }
      var bu = $h;
      function Wh(e) {
        var t = e.actualNode,
          r = e.children;
        if (!r) throw new Error("getOwnedVirtual requires a virtual node");
        if (e.hasAttr("aria-owns")) {
          var a = it(t, "aria-owns")
            .filter(function (n) {
              return !!n;
            })
            .map(function (n) {
              return v.utils.getNodeFromTree(n);
            });
          return [].concat(ie(r), ie(a));
        }
        return ie(r);
      }
      var Cr = Wh;
      function Gh(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = Ue.alreadyProcessed;
        t.startNode = t.startNode || e;
        var a = t,
          n = a.strict,
          i = a.inControlContext,
          o = a.inLabelledByContext,
          l = Bt(e, { noMatchAccessibleName: !0 }),
          u = l.contentTypes;
        if (
          r(e, t) ||
          e.props.nodeType !== 1 ||
          (u != null && u.includes("embedded")) ||
          (!bu(e, { strict: n }) && !t.subtreeDescendant)
        )
          return "";
        if (!n) {
          var s = !i && !o;
          t = ne({ subtreeDescendant: s }, t);
        }
        return Cr(e).reduce(function (c, d) {
          return Kh(c, d, t);
        }, "");
      }
      var Yh = Xn("phrasing").concat(["#text"]);
      function Kh(e, t, r) {
        var a = t.props.nodeName,
          n = Ue(t, r);
        return n
          ? (Yh.includes(a) ||
              (n[0] !== " " && (n += " "),
              e && e[e.length - 1] !== " " && (n = " " + n)),
            e + n)
          : e;
      }
      var Et = Gh;
      function Xh(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = Ue.alreadyProcessed;
        if (t.inControlContext || t.inLabelledByContext || r(e, t)) return "";
        t.startNode || (t.startNode = e);
        var a = ne({ inControlContext: !0 }, t),
          n = Jh(e),
          i = $e(e, "label"),
          o;
        return (
          i ? ((o = [].concat(ie(n), [i.actualNode])), o.sort(jn)) : (o = n),
          o
            .map(function (l) {
              return qt(l, a);
            })
            .filter(function (l) {
              return l !== "";
            })
            .join(" ")
        );
      }
      function Jh(e) {
        if (!e.attr("id")) return [];
        if (!e.actualNode)
          throw new TypeError(
            "Cannot resolve explicit label reference for non-DOM nodes"
          );
        return xo({
          elm: "label",
          attr: "for",
          value: e.attr("id"),
          context: e.actualNode,
        });
      }
      var ei = Xh,
        Qh = { submit: "Submit", image: "Submit", reset: "Reset", button: "" },
        Zh = {
          valueText: function (t) {
            var r = t.actualNode;
            return r.value || "";
          },
          buttonDefaultText: function (t) {
            var r = t.actualNode;
            return Qh[r.type] || "";
          },
          tableCaptionText: ga.bind(null, "caption"),
          figureText: ga.bind(null, "figcaption"),
          svgTitleText: ga.bind(null, "title"),
          fieldsetLegendText: ga.bind(null, "legend"),
          altText: ti.bind(null, "alt"),
          tableSummaryText: ti.bind(null, "summary"),
          titleText: va,
          subtreeText: Et,
          labelText: ei,
          singleSpace: function () {
            return " ";
          },
          placeholderText: ti.bind(null, "placeholder"),
        };
      function ti(e, t) {
        return t.attr(e) || "";
      }
      function ga(e, t, r) {
        var a = t.actualNode;
        e = e.toLowerCase();
        var n = [e, a.nodeName.toLowerCase()].join(","),
          i = a.querySelector(n);
        return !i || i.nodeName.toLowerCase() !== e ? "" : qt(i, r);
      }
      var yu = Zh;
      function ev(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = e.actualNode;
        if (e.props.nodeType !== 1 || ["presentation", "none"].includes(se(e)))
          return "";
        var a = tv(e),
          n = a.reduce(function (i, o) {
            return i || o(e, t);
          }, "");
        return t.debug && v.log(n || "{empty-value}", r, t), n;
      }
      function tv(e) {
        var t = Bt(e, { noMatchAccessibleName: !0 }),
          r = t.namingMethods || [];
        return r.map(function (a) {
          return yu[a];
        });
      }
      var Du = ev,
        rv = {
          accessibleNameFromFieldValue: ["combobox", "listbox", "progressbar"],
        },
        wu = rv,
        av = [
          "button",
          "checkbox",
          "color",
          "file",
          "hidden",
          "image",
          "password",
          "radio",
          "reset",
          "submit",
        ];
      function nv(e) {
        e = e instanceof X ? e : B(e);
        var t = e.props.nodeName;
        return (
          t === "textarea" ||
          (t === "input" && !av.includes((e.attr("type") || "").toLowerCase()))
        );
      }
      var _u = nv;
      function iv(e) {
        e = e instanceof X ? e : B(e);
        var t = e.props.nodeName;
        return t === "select";
      }
      var xu = iv;
      function ov(e) {
        var t = ge(e);
        return t === "textbox";
      }
      var Eu = ov;
      function lv(e) {
        var t = ge(e);
        return t === "listbox";
      }
      var Au = lv;
      function uv(e) {
        var t = ge(e);
        return t === "combobox";
      }
      var Fu = uv,
        sv = ["progressbar", "scrollbar", "slider", "spinbutton"];
      function cv(e) {
        var t = ge(e);
        return sv.includes(t);
      }
      var Cu = cv,
        dv = [
          "textbox",
          "progressbar",
          "scrollbar",
          "slider",
          "spinbutton",
          "combobox",
          "listbox",
        ],
        ri = {
          nativeTextboxValue: pv,
          nativeSelectValue: mv,
          ariaTextboxValue: hv,
          ariaListboxValue: ku,
          ariaComboboxValue: vv,
          ariaRangeValue: gv,
        };
      function fv(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = e.actualNode,
          a = wu.accessibleNameFromFieldValue || [],
          n = se(e);
        if (t.startNode === e || !dv.includes(n) || a.includes(n)) return "";
        var i = Object.keys(ri).map(function (l) {
            return ri[l];
          }),
          o = i.reduce(function (l, u) {
            return l || u(e, t);
          }, "");
        return t.debug && St(o || "{empty-value}", r, t), o;
      }
      function pv(e) {
        var t = e instanceof X ? e : B(e);
        return (_u(t) && t.props.value) || "";
      }
      function mv(e) {
        var t = e instanceof X ? e : B(e);
        if (!xu(t)) return "";
        var r = Ye(t, "option"),
          a = r.filter(function (n) {
            return n.props.selected;
          });
        return (
          a.length || a.push(r[0]),
          a
            .map(function (n) {
              return ut(n);
            })
            .join(" ") || ""
        );
      }
      function hv(e) {
        var t = e instanceof X ? e : B(e),
          r = t.actualNode;
        return Eu(t) ? (!r || (r && !_t(r)) ? ut(t, !0) : r.textContent) : "";
      }
      function ku(e, t) {
        var r = e instanceof X ? e : B(e);
        if (!Au(r)) return "";
        var a = Cr(r).filter(function (n) {
          return se(n) === "option" && n.attr("aria-selected") === "true";
        });
        return a.length === 0 ? "" : Ue(a[0], t);
      }
      function vv(e, t) {
        var r = e instanceof X ? e : B(e);
        if (!Fu(r)) return "";
        var a = Cr(r).filter(function (n) {
          return se(n) === "listbox";
        })[0];
        return a ? ku(a, t) : "";
      }
      function gv(e) {
        var t = e instanceof X ? e : B(e);
        if (!Cu(t) || !t.hasAttr("aria-valuenow")) return "";
        var r = +t.attr("aria-valuenow");
        return isNaN(r) ? "0" : String(r);
      }
      var Ru = fv;
      function Tu() {
        return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
      }
      function Su() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g;
      }
      function Ou() {
        return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
      }
      function bv(e, t) {
        var r = t.emoji,
          a = t.nonBmp,
          n = t.punctuations;
        return r
          ? Gn().test(e)
          : a
          ? Tu().test(e) || Ou().test(e)
          : n
          ? Su().test(e)
          : !1;
      }
      var ai = bv;
      function yv(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : 0.15,
          r =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3,
          a = e.actualNode.nodeValue.trim();
        if (!K(a) || ai(a, { emoji: !0, nonBmp: !0 })) return !1;
        var n = ae.get("canvasContext", function () {
            return R.createElement("canvas").getContext("2d");
          }),
          i = n.canvas;
        ae.get("fonts") || ae.set("fonts", {});
        var o = ae.get("fonts"),
          l = y.getComputedStyle(e.parent.actualNode),
          u = l.getPropertyValue("font-family");
        o[u] || (o[u] = { occurances: 0, numLigatures: 0 });
        var s = o[u];
        if (s.occurances >= r) {
          if (s.numLigatures / s.occurances === 1) return !0;
          if (s.numLigatures === 0) return !1;
        }
        s.occurances++;
        var c = 30,
          d = "".concat(c, "px ").concat(u);
        n.font = d;
        var f = a.charAt(0),
          p = n.measureText(f).width;
        if (p < 30) {
          var m = 30 / p;
          (p *= m), (c *= m), (d = "".concat(c, "px ").concat(u));
        }
        (i.width = p),
          (i.height = c),
          (n.font = d),
          (n.textAlign = "left"),
          (n.textBaseline = "top"),
          n.fillText(f, 0, 0);
        var b = new Uint32Array(n.getImageData(0, 0, p, c).data.buffer);
        if (
          !b.some(function (N) {
            return N;
          })
        )
          return s.numLigatures++, !0;
        n.clearRect(0, 0, p, c), n.fillText(a, 0, 0);
        var D = new Uint32Array(n.getImageData(0, 0, p, c).data.buffer),
          h = b.reduce(function (N, M, H) {
            return (M === 0 && D[H] === 0) || (M !== 0 && D[H] !== 0) ? N : ++N;
          }, 0),
          g = a.split("").reduce(function (N, M) {
            return N + n.measureText(M).width;
          }, 0),
          x = n.measureText(a).width,
          E = h / b.length,
          C = 1 - x / g;
        return E >= t && C >= t ? (s.numLigatures++, !0) : !1;
      }
      var Iu = yv;
      function Pu(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (((t = xv(e, t)), wv(e, t) || _v(e, t))) return "";
        var r = [kr, Ar, Du, Ru, Et, Dv, va],
          a = r.reduce(function (n, i) {
            return t.startNode === e && (n = K(n)), n !== "" ? n : i(e, t);
          }, "");
        return t.debug && v.log(a || "{empty-value}", e.actualNode, t), a;
      }
      function Dv(e) {
        return e.props.nodeType !== 3 ? "" : e.props.nodeValue;
      }
      function wv(e, t) {
        return !e || e.props.nodeType !== 1 || t.includeHidden ? !1 : !Ae(e);
      }
      function _v(e, t) {
        var r = t.ignoreIconLigature,
          a = t.pixelThreshold,
          n = t.occuranceThreshold;
        return e.props.nodeType !== 3 || !r ? !1 : Iu(e, a, n);
      }
      function xv(e, t) {
        return (
          t.startNode || (t = ne({ startNode: e }, t)),
          e.props.nodeType === 1 &&
            t.inLabelledByContext &&
            t.includeHidden === void 0 &&
            (t = ne({ includeHidden: !Ae(e) }, t)),
          t
        );
      }
      Pu.alreadyProcessed = function (t, r) {
        return (
          (r.processed = r.processed || []),
          r.processed.includes(t) ? !0 : (r.processed.push(t), !1)
        );
      };
      var Ue = Pu;
      function Ev(e, t) {
        var r = B(e);
        return Ue(r, t);
      }
      var qt = Ev;
      function Av(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e instanceof X)) {
          if (e.nodeType !== 1) return "";
          e = B(e);
        }
        if (
          e.props.nodeType !== 1 ||
          t.inLabelledByContext ||
          t.inControlContext ||
          !e.attr("aria-labelledby")
        )
          return "";
        var r = it(e, "aria-labelledby").filter(function (a) {
          return a;
        });
        return r.reduce(function (a, n) {
          var i = qt(
            n,
            ne({ inLabelledByContext: !0, startNode: t.startNode || e }, t)
          );
          return a ? "".concat(a, " ").concat(i) : i;
        }, "");
      }
      var kr = Av,
        Rr = {};
      ke(Rr, {
        accessibleText: function () {
          return qt;
        },
        accessibleTextVirtual: function () {
          return Ue;
        },
        autocomplete: function () {
          return Lt;
        },
        formControlValue: function () {
          return Ru;
        },
        formControlValueMethods: function () {
          return ri;
        },
        hasUnicode: function () {
          return ai;
        },
        isHumanInterpretable: function () {
          return ni;
        },
        isIconLigature: function () {
          return Iu;
        },
        isValidAutocomplete: function () {
          return Nu;
        },
        label: function () {
          return Ov;
        },
        labelText: function () {
          return ei;
        },
        labelVirtual: function () {
          return ba;
        },
        nativeElementType: function () {
          return Pv;
        },
        nativeTextAlternative: function () {
          return Du;
        },
        nativeTextMethods: function () {
          return yu;
        },
        removeUnicode: function () {
          return Tr;
        },
        sanitize: function () {
          return K;
        },
        subtreeText: function () {
          return Et;
        },
        titleText: function () {
          return va;
        },
        unsupported: function () {
          return wu;
        },
        visible: function () {
          return Mu;
        },
        visibleTextNodes: function () {
          return Nv;
        },
        visibleVirtual: function () {
          return ut;
        },
      });
      function Fv(e, t) {
        var r = t.emoji,
          a = t.nonBmp,
          n = t.punctuations;
        return (
          r && (e = e.replace(Gn(), "")),
          a && ((e = e.replace(Tu(), "")), (e = e.replace(Ou(), ""))),
          n && (e = e.replace(Su(), "")),
          e
        );
      }
      var Tr = Fv;
      function Cv(e) {
        if (!e.length) return 0;
        var t = ["x", "i"];
        if (t.includes(e)) return 0;
        var r = Tr(e, { emoji: !0, nonBmp: !0, punctuations: !0 });
        return K(r) ? 1 : 0;
      }
      var ni = Cv,
        Lt = {
          stateTerms: ["on", "off"],
          standaloneTerms: [
            "name",
            "honorific-prefix",
            "given-name",
            "additional-name",
            "family-name",
            "honorific-suffix",
            "nickname",
            "username",
            "new-password",
            "current-password",
            "organization-title",
            "organization",
            "street-address",
            "address-line1",
            "address-line2",
            "address-line3",
            "address-level4",
            "address-level3",
            "address-level2",
            "address-level1",
            "country",
            "country-name",
            "postal-code",
            "cc-name",
            "cc-given-name",
            "cc-additional-name",
            "cc-family-name",
            "cc-number",
            "cc-exp",
            "cc-exp-month",
            "cc-exp-year",
            "cc-csc",
            "cc-type",
            "transaction-currency",
            "transaction-amount",
            "language",
            "bday",
            "bday-day",
            "bday-month",
            "bday-year",
            "sex",
            "url",
            "photo",
            "one-time-code",
          ],
          qualifiers: ["home", "work", "mobile", "fax", "pager"],
          qualifiedTerms: [
            "tel",
            "tel-country-code",
            "tel-national",
            "tel-area-code",
            "tel-local",
            "tel-local-prefix",
            "tel-local-suffix",
            "tel-extension",
            "email",
            "impp",
          ],
          locations: ["billing", "shipping"],
        };
      function kv(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.looseTyped,
          a = r === void 0 ? !1 : r,
          n = t.stateTerms,
          i = n === void 0 ? [] : n,
          o = t.locations,
          l = o === void 0 ? [] : o,
          u = t.qualifiers,
          s = u === void 0 ? [] : u,
          c = t.standaloneTerms,
          d = c === void 0 ? [] : c,
          f = t.qualifiedTerms,
          p = f === void 0 ? [] : f;
        if (
          ((e = e.toLowerCase().trim()),
          (i = i.concat(Lt.stateTerms)),
          i.includes(e) || e === "")
        )
          return !0;
        (s = s.concat(Lt.qualifiers)),
          (l = l.concat(Lt.locations)),
          (d = d.concat(Lt.standaloneTerms)),
          (p = p.concat(Lt.qualifiedTerms));
        var m = e.split(/\s+/g);
        if (
          !a &&
          (m[0].length > 8 && m[0].substr(0, 8) === "section-" && m.shift(),
          l.includes(m[0]) && m.shift(),
          s.includes(m[0]) && (m.shift(), (d = [])),
          m.length !== 1)
        )
          return !1;
        var b = m[m.length - 1];
        return d.includes(b) || p.includes(b);
      }
      var Nu = kv;
      function Rv(e, t, r) {
        return (e = B(e)), ut(e, t, r);
      }
      var Mu = Rv;
      function Tv(e) {
        var t, r, a;
        if (((r = ra(e)), r)) return r;
        if (e.attr("id")) {
          if (!e.actualNode)
            throw new TypeError(
              "Cannot resolve explicit label reference for non-DOM nodes"
            );
          var n = Ee(e.attr("id"));
          if (
            ((a = je(e.actualNode)),
            (t = a.querySelector('label[for="' + n + '"]')),
            (r = t && Mu(t, !0)),
            r)
          )
            return r;
        }
        return (t = $e(e, "label")), (r = t && ut(t, !0)), r || null;
      }
      var ba = Tv;
      function Sv(e) {
        return (e = B(e)), ba(e);
      }
      var Ov = Sv,
        Iv = [
          {
            matches: [
              { nodeName: "textarea" },
              {
                nodeName: "input",
                properties: {
                  type: ["text", "password", "search", "tel", "email", "url"],
                },
              },
            ],
            namingMethods: "labelText",
          },
          {
            matches: {
              nodeName: "input",
              properties: { type: ["button", "submit", "reset"] },
            },
            namingMethods: ["valueText", "titleText", "buttonDefaultText"],
          },
          {
            matches: { nodeName: "input", properties: { type: "image" } },
            namingMethods: [
              "altText",
              "valueText",
              "labelText",
              "titleText",
              "buttonDefaultText",
            ],
          },
          { matches: "button", namingMethods: "subtreeText" },
          { matches: "fieldset", namingMethods: "fieldsetLegendText" },
          { matches: "OUTPUT", namingMethods: "subtreeText" },
          {
            matches: [
              { nodeName: "select" },
              {
                nodeName: "input",
                properties: {
                  type: /^(?!text|password|search|tel|email|url|button|submit|reset)/,
                },
              },
            ],
            namingMethods: "labelText",
          },
          { matches: "summary", namingMethods: "subtreeText" },
          { matches: "figure", namingMethods: ["figureText", "titleText"] },
          { matches: "img", namingMethods: "altText" },
          {
            matches: "table",
            namingMethods: ["tableCaptionText", "tableSummaryText"],
          },
          {
            matches: ["hr", "br"],
            namingMethods: ["titleText", "singleSpace"],
          },
        ],
        Pv = Iv;
      function Bu(e) {
        var t = Qe(e),
          r = [];
        return (
          e.children.forEach(function (a) {
            a.actualNode.nodeType === 3
              ? t && r.push(a)
              : (r = r.concat(Bu(a)));
          }),
          r
        );
      }
      var Nv = Bu,
        Mv = /^idrefs?$/;
      function qu(e, t, r) {
        if (e.hasAttribute) {
          if (e.nodeName.toUpperCase() === "LABEL" && e.hasAttribute("for")) {
            var a = e.getAttribute("for");
            (t[a] = t[a] || []), t[a].push(e);
          }
          for (var n = 0; n < r.length; ++n) {
            var i = r[n],
              o = K(e.getAttribute(i) || "");
            if (!!o)
              for (var l = Be(o), u = 0; u < l.length; ++u)
                (t[l[u]] = t[l[u]] || []), t[l[u]].push(e);
          }
        }
        for (var s = 0; s < e.childNodes.length; s++)
          e.childNodes[s].nodeType === 1 && qu(e.childNodes[s], t, r);
      }
      function Bv(e) {
        e = e.actualNode || e;
        var t = je(e);
        t = t.documentElement || t;
        var r = ae.get("idRefsByRoot", function () {
            return new WeakMap();
          }),
          a = r.get(t);
        if (!a) {
          (a = {}), r.set(t, a);
          var n = Object.keys(ue.ariaAttrs).filter(function (i) {
            var o = ue.ariaAttrs[i].type;
            return Mv.test(o);
          });
          qu(t, a, n);
        }
        return a[e.id] || [];
      }
      var ii = Bv;
      function qv(e, t) {
        var r = e instanceof X ? e : B(e),
          a = dt(r),
          n = Bt(r);
        return Array.isArray(n.allowedRoles)
          ? n.allowedRoles.includes(t)
          : t === a
          ? !1
          : !!n.allowedRoles;
      }
      var Lu = qv,
        Lv = [
          "doc-backlink",
          "doc-biblioentry",
          "doc-biblioref",
          "doc-cover",
          "doc-endnote",
          "doc-glossref",
          "doc-noteref",
        ],
        Vv = { header: "banner", footer: "contentinfo" };
      function jv(e) {
        var t = [];
        if (!e) return t;
        if (e.hasAttr("role")) {
          var r = Be(e.attr("role").toLowerCase());
          t = t.concat(r);
        }
        return t.filter(function (a) {
          return Zt(a);
        });
      }
      function Hv(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
          r = e instanceof X ? e : B(e);
        if (!qn(r)) return [];
        var a = r.props.nodeName,
          n = dt(r) || Vv[a],
          i = jv(r);
        return i.filter(function (o) {
          return !zv(o, r, t, n);
        });
      }
      function zv(e, t, r, a) {
        return r && e === a
          ? !0
          : Lv.includes(e) && ct(e) !== a
          ? !1
          : Lu(t, e);
      }
      var Vu = Hv;
      function Uv(e) {
        return Object.keys(ue.ariaRoles).filter(function (t) {
          return ue.ariaRoles[t].type === e;
        });
      }
      var rr = Uv;
      function $v(e) {
        return rr(e);
      }
      var Wv = $v;
      function Gv() {
        return ae.get("ariaRolesNameFromContent", function () {
          return Object.keys(ue.ariaRoles).filter(function (e) {
            return ue.ariaRoles[e].nameFromContent;
          });
        });
      }
      var oi = Gv;
      function Yv() {
        return oi();
      }
      var Kv = Yv,
        ju = function (t) {
          return t === null;
        },
        ze = function (t) {
          return t !== null;
        },
        bt = {};
      (bt.attributes = {
        "aria-activedescendant": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1,
        },
        "aria-atomic": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1,
        },
        "aria-autocomplete": {
          type: "nmtoken",
          values: ["inline", "list", "both", "none"],
          unsupported: !1,
        },
        "aria-busy": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1,
        },
        "aria-checked": {
          type: "nmtoken",
          values: ["true", "false", "mixed", "undefined"],
          unsupported: !1,
        },
        "aria-colcount": { type: "int", unsupported: !1 },
        "aria-colindex": { type: "int", unsupported: !1 },
        "aria-colspan": { type: "int", unsupported: !1 },
        "aria-controls": { type: "idrefs", allowEmpty: !0, unsupported: !1 },
        "aria-current": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["page", "step", "location", "date", "time", "true", "false"],
          unsupported: !1,
        },
        "aria-describedby": { type: "idrefs", allowEmpty: !0, unsupported: !1 },
        "aria-describedat": { unsupported: !0, unstandardized: !0 },
        "aria-details": { type: "idref", allowEmpty: !0, unsupported: !1 },
        "aria-disabled": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1,
        },
        "aria-dropeffect": {
          type: "nmtokens",
          values: ["copy", "move", "reference", "execute", "popup", "none"],
          unsupported: !1,
        },
        "aria-errormessage": { type: "idref", allowEmpty: !0, unsupported: !1 },
        "aria-expanded": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1,
        },
        "aria-flowto": { type: "idrefs", allowEmpty: !0, unsupported: !1 },
        "aria-grabbed": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1,
        },
        "aria-haspopup": {
          type: "nmtoken",
          allowEmpty: !0,
          values: [
            "true",
            "false",
            "menu",
            "listbox",
            "tree",
            "grid",
            "dialog",
          ],
          unsupported: !1,
        },
        "aria-hidden": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1,
        },
        "aria-invalid": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "spelling", "grammar"],
          unsupported: !1,
        },
        "aria-keyshortcuts": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1,
        },
        "aria-label": { type: "string", allowEmpty: !0, unsupported: !1 },
        "aria-labelledby": { type: "idrefs", allowEmpty: !0, unsupported: !1 },
        "aria-level": { type: "int", unsupported: !1 },
        "aria-live": {
          type: "nmtoken",
          values: ["off", "polite", "assertive"],
          unsupported: !1,
        },
        "aria-modal": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1,
        },
        "aria-multiline": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1,
        },
        "aria-multiselectable": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1,
        },
        "aria-orientation": {
          type: "nmtoken",
          values: ["horizontal", "vertical"],
          unsupported: !1,
        },
        "aria-owns": { type: "idrefs", allowEmpty: !0, unsupported: !1 },
        "aria-placeholder": { type: "string", allowEmpty: !0, unsupported: !1 },
        "aria-posinset": { type: "int", unsupported: !1 },
        "aria-pressed": {
          type: "nmtoken",
          values: ["true", "false", "mixed", "undefined"],
          unsupported: !1,
        },
        "aria-readonly": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1,
        },
        "aria-relevant": {
          type: "nmtokens",
          values: ["additions", "removals", "text", "all"],
          unsupported: !1,
        },
        "aria-required": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1,
        },
        "aria-roledescription": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1,
        },
        "aria-rowcount": { type: "int", unsupported: !1 },
        "aria-rowindex": { type: "int", unsupported: !1 },
        "aria-rowspan": { type: "int", unsupported: !1 },
        "aria-selected": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1,
        },
        "aria-setsize": { type: "int", unsupported: !1 },
        "aria-sort": {
          type: "nmtoken",
          values: ["ascending", "descending", "other", "none"],
          unsupported: !1,
        },
        "aria-valuemax": { type: "decimal", unsupported: !1 },
        "aria-valuemin": { type: "decimal", unsupported: !1 },
        "aria-valuenow": { type: "decimal", unsupported: !1 },
        "aria-valuetext": { type: "string", unsupported: !1 },
      }),
        (bt.globalAttributes = [
          "aria-atomic",
          "aria-busy",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-details",
          "aria-disabled",
          "aria-dropeffect",
          "aria-flowto",
          "aria-grabbed",
          "aria-haspopup",
          "aria-hidden",
          "aria-invalid",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-live",
          "aria-owns",
          "aria-relevant",
          "aria-roledescription",
        ]),
        (bt.role = {
          alert: {
            type: "widget",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          alertdialog: {
            type: "widget",
            attributes: {
              allowed: ["aria-expanded", "aria-modal", "aria-errormessage"],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["dialog", "section"],
          },
          application: {
            type: "landmark",
            attributes: {
              allowed: [
                "aria-expanded",
                "aria-errormessage",
                "aria-activedescendant",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: [
              "article",
              "audio",
              "embed",
              "iframe",
              "object",
              "section",
              "svg",
              "video",
            ],
          },
          article: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-expanded",
                "aria-posinset",
                "aria-setsize",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["article"],
            unsupported: !1,
          },
          banner: {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["header"],
            unsupported: !1,
            allowedElements: ["section"],
          },
          button: {
            type: "widget",
            attributes: {
              allowed: ["aria-expanded", "aria-pressed", "aria-errormessage"],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            implicit: [
              "button",
              'input[type="button"]',
              'input[type="image"]',
              'input[type="reset"]',
              'input[type="submit"]',
              "summary",
            ],
            unsupported: !1,
            allowedElements: [{ nodeName: "a", attributes: { href: ze } }],
          },
          cell: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-colindex",
                "aria-colspan",
                "aria-rowindex",
                "aria-rowspan",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["row"],
            implicit: ["td", "th"],
            unsupported: !1,
          },
          checkbox: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-checked",
                "aria-required",
                "aria-readonly",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            implicit: ['input[type="checkbox"]'],
            unsupported: !1,
            allowedElements: ["button"],
          },
          columnheader: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-colindex",
                "aria-colspan",
                "aria-expanded",
                "aria-rowindex",
                "aria-rowspan",
                "aria-required",
                "aria-readonly",
                "aria-selected",
                "aria-sort",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["row"],
            implicit: ["th"],
            unsupported: !1,
          },
          combobox: {
            type: "composite",
            attributes: {
              allowed: [
                "aria-autocomplete",
                "aria-required",
                "aria-activedescendant",
                "aria-orientation",
                "aria-errormessage",
              ],
              required: ["aria-expanded"],
            },
            owned: { all: ["listbox", "tree", "grid", "dialog", "textbox"] },
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: [
              {
                nodeName: "input",
                properties: { type: ["text", "search", "tel", "url", "email"] },
              },
            ],
          },
          command: { nameFrom: ["author"], type: "abstract", unsupported: !1 },
          complementary: {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["aside"],
            unsupported: !1,
            allowedElements: ["section"],
          },
          composite: {
            nameFrom: ["author"],
            type: "abstract",
            unsupported: !1,
          },
          contentinfo: {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["footer"],
            unsupported: !1,
            allowedElements: ["section"],
          },
          definition: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["dd", "dfn"],
            unsupported: !1,
          },
          dialog: {
            type: "widget",
            attributes: {
              allowed: ["aria-expanded", "aria-modal", "aria-errormessage"],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["dialog"],
            unsupported: !1,
            allowedElements: ["section"],
          },
          directory: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            unsupported: !1,
            allowedElements: ["ol", "ul"],
          },
          document: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["body"],
            unsupported: !1,
            allowedElements: [
              "article",
              "embed",
              "iframe",
              "object",
              "section",
              "svg",
            ],
          },
          "doc-abstract": {
            type: "section",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-acknowledgments": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-afterword": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-appendix": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-backlink": {
            type: "link",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            unsupported: !1,
            allowedElements: [{ nodeName: "a", attributes: { href: ze } }],
          },
          "doc-biblioentry": {
            type: "listitem",
            attributes: {
              allowed: [
                "aria-expanded",
                "aria-level",
                "aria-posinset",
                "aria-setsize",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: ["doc-bibliography"],
            unsupported: !1,
            allowedElements: ["li"],
          },
          "doc-bibliography": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: { one: ["doc-biblioentry"] },
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-biblioref": {
            type: "link",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            unsupported: !1,
            allowedElements: [{ nodeName: "a", attributes: { href: ze } }],
          },
          "doc-chapter": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-colophon": {
            type: "section",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-conclusion": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-cover": {
            type: "img",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
          },
          "doc-credit": {
            type: "section",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-credits": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-dedication": {
            type: "section",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-endnote": {
            type: "listitem",
            attributes: {
              allowed: [
                "aria-expanded",
                "aria-level",
                "aria-posinset",
                "aria-setsize",
                "aria-errormessage",
              ],
            },
            owned: null,
            namefrom: ["author"],
            context: ["doc-endnotes"],
            unsupported: !1,
            allowedElements: ["li"],
          },
          "doc-endnotes": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: { one: ["doc-endnote"] },
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-epigraph": {
            type: "section",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
          },
          "doc-epilogue": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-errata": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-example": {
            type: "section",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["aside", "section"],
          },
          "doc-footnote": {
            type: "section",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["aside", "footer", "header"],
          },
          "doc-foreword": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-glossary": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: ["term", "definition"],
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["dl"],
          },
          "doc-glossref": {
            type: "link",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author", "contents"],
            context: null,
            unsupported: !1,
            allowedElements: [{ nodeName: "a", attributes: { href: ze } }],
          },
          "doc-index": {
            type: "navigation",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["nav", "section"],
          },
          "doc-introduction": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-noteref": {
            type: "link",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author", "contents"],
            context: null,
            unsupported: !1,
            allowedElements: [{ nodeName: "a", attributes: { href: ze } }],
          },
          "doc-notice": {
            type: "note",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-pagebreak": {
            type: "separator",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["hr"],
          },
          "doc-pagelist": {
            type: "navigation",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["nav", "section"],
          },
          "doc-part": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-preface": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-prologue": {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-pullquote": {
            type: "none",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["aside", "section"],
          },
          "doc-qna": {
            type: "section",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          "doc-subtitle": {
            type: "sectionhead",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: { nodeName: ["h1", "h2", "h3", "h4", "h5", "h6"] },
          },
          "doc-tip": {
            type: "note",
            attributes: { allowed: ["aria-expanded"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["aside"],
          },
          "doc-toc": {
            type: "navigation",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            namefrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["nav", "section"],
          },
          feed: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: { one: ["article"] },
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["article", "aside", "section"],
          },
          figure: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            implicit: ["figure"],
            unsupported: !1,
          },
          form: {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["form"],
            unsupported: !1,
          },
          grid: {
            type: "composite",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-expanded",
                "aria-colcount",
                "aria-level",
                "aria-multiselectable",
                "aria-readonly",
                "aria-rowcount",
                "aria-errormessage",
              ],
            },
            owned: { one: ["rowgroup", "row"] },
            nameFrom: ["author"],
            context: null,
            implicit: ["table"],
            unsupported: !1,
          },
          gridcell: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-colindex",
                "aria-colspan",
                "aria-expanded",
                "aria-rowindex",
                "aria-rowspan",
                "aria-selected",
                "aria-readonly",
                "aria-required",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["row"],
            implicit: ["td", "th"],
            unsupported: !1,
          },
          group: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-expanded",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["details", "optgroup"],
            unsupported: !1,
            allowedElements: [
              "dl",
              "figcaption",
              "fieldset",
              "figure",
              "footer",
              "header",
              "ol",
              "ul",
            ],
          },
          heading: {
            type: "structure",
            attributes: {
              required: ["aria-level"],
              allowed: ["aria-expanded", "aria-errormessage"],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            implicit: ["h1", "h2", "h3", "h4", "h5", "h6"],
            unsupported: !1,
          },
          img: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["img"],
            unsupported: !1,
            allowedElements: ["embed", "iframe", "object", "svg"],
          },
          input: { nameFrom: ["author"], type: "abstract", unsupported: !1 },
          landmark: { nameFrom: ["author"], type: "abstract", unsupported: !1 },
          link: {
            type: "widget",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            implicit: ["a[href]", "area[href]"],
            unsupported: !1,
            allowedElements: [
              "button",
              { nodeName: "input", properties: { type: ["image", "button"] } },
            ],
          },
          list: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: { all: ["listitem"] },
            nameFrom: ["author"],
            context: null,
            implicit: ["ol", "ul", "dl"],
            unsupported: !1,
          },
          listbox: {
            type: "composite",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-multiselectable",
                "aria-readonly",
                "aria-required",
                "aria-expanded",
                "aria-orientation",
                "aria-errormessage",
              ],
            },
            owned: { all: ["option"] },
            nameFrom: ["author"],
            context: null,
            implicit: ["select"],
            unsupported: !1,
            allowedElements: ["ol", "ul"],
          },
          listitem: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-level",
                "aria-posinset",
                "aria-setsize",
                "aria-expanded",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["list"],
            implicit: ["li", "dt"],
            unsupported: !1,
          },
          log: {
            type: "widget",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          main: {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["main"],
            unsupported: !1,
            allowedElements: ["article", "section"],
          },
          marquee: {
            type: "widget",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          math: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["math"],
            unsupported: !1,
          },
          menu: {
            type: "composite",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-expanded",
                "aria-orientation",
                "aria-errormessage",
              ],
            },
            owned: { one: ["menuitem", "menuitemradio", "menuitemcheckbox"] },
            nameFrom: ["author"],
            context: null,
            implicit: ['menu[type="context"]'],
            unsupported: !1,
            allowedElements: ["ol", "ul"],
          },
          menubar: {
            type: "composite",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-expanded",
                "aria-orientation",
                "aria-errormessage",
              ],
            },
            owned: { one: ["menuitem", "menuitemradio", "menuitemcheckbox"] },
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["ol", "ul"],
          },
          menuitem: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-posinset",
                "aria-setsize",
                "aria-expanded",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["menu", "menubar"],
            implicit: ['menuitem[type="command"]'],
            unsupported: !1,
            allowedElements: [
              "button",
              "li",
              { nodeName: "iput", properties: { type: ["image", "button"] } },
              { nodeName: "a", attributes: { href: ze } },
            ],
          },
          menuitemcheckbox: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-checked",
                "aria-posinset",
                "aria-setsize",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["menu", "menubar"],
            implicit: ['menuitem[type="checkbox"]'],
            unsupported: !1,
            allowedElements: [
              { nodeName: ["button", "li"] },
              {
                nodeName: "input",
                properties: { type: ["checkbox", "image", "button"] },
              },
              { nodeName: "a", attributes: { href: ze } },
            ],
          },
          menuitemradio: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-checked",
                "aria-selected",
                "aria-posinset",
                "aria-setsize",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["menu", "menubar"],
            implicit: ['menuitem[type="radio"]'],
            unsupported: !1,
            allowedElements: [
              { nodeName: ["button", "li"] },
              {
                nodeName: "input",
                properties: { type: ["image", "button", "radio"] },
              },
              { nodeName: "a", attributes: { href: ze } },
            ],
          },
          navigation: {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["nav"],
            unsupported: !1,
            allowedElements: ["section"],
          },
          none: {
            type: "structure",
            attributes: null,
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: [
              {
                nodeName: [
                  "article",
                  "aside",
                  "dl",
                  "embed",
                  "figcaption",
                  "fieldset",
                  "figure",
                  "footer",
                  "form",
                  "h1",
                  "h2",
                  "h3",
                  "h4",
                  "h5",
                  "h6",
                  "header",
                  "hr",
                  "iframe",
                  "li",
                  "ol",
                  "section",
                  "ul",
                ],
              },
              { nodeName: "img", attributes: { alt: ze } },
            ],
          },
          note: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["aside"],
          },
          option: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-selected",
                "aria-posinset",
                "aria-setsize",
                "aria-checked",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["listbox"],
            implicit: ["option"],
            unsupported: !1,
            allowedElements: [
              { nodeName: ["button", "li"] },
              {
                nodeName: "input",
                properties: { type: ["checkbox", "button"] },
              },
              { nodeName: "a", attributes: { href: ze } },
            ],
          },
          presentation: {
            type: "structure",
            attributes: null,
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: [
              {
                nodeName: [
                  "article",
                  "aside",
                  "dl",
                  "embed",
                  "figcaption",
                  "fieldset",
                  "figure",
                  "footer",
                  "form",
                  "h1",
                  "h2",
                  "h3",
                  "h4",
                  "h5",
                  "h6",
                  "header",
                  "hr",
                  "iframe",
                  "li",
                  "ol",
                  "section",
                  "ul",
                ],
              },
              { nodeName: "img", attributes: { alt: ze } },
            ],
          },
          progressbar: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-valuetext",
                "aria-valuenow",
                "aria-valuemax",
                "aria-valuemin",
                "aria-expanded",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["progress"],
            unsupported: !1,
          },
          radio: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-selected",
                "aria-posinset",
                "aria-setsize",
                "aria-required",
                "aria-errormessage",
                "aria-checked",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            implicit: ['input[type="radio"]'],
            unsupported: !1,
            allowedElements: [
              { nodeName: ["button", "li"] },
              { nodeName: "input", properties: { type: ["image", "button"] } },
            ],
          },
          radiogroup: {
            type: "composite",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-required",
                "aria-expanded",
                "aria-readonly",
                "aria-errormessage",
                "aria-orientation",
              ],
            },
            owned: { all: ["radio"] },
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: { nodeName: ["ol", "ul", "fieldset"] },
          },
          range: { nameFrom: ["author"], type: "abstract", unsupported: !1 },
          region: {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: [
              "section[aria-label]",
              "section[aria-labelledby]",
              "section[title]",
            ],
            unsupported: !1,
            allowedElements: { nodeName: ["article", "aside"] },
          },
          roletype: { type: "abstract", unsupported: !1 },
          row: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-colindex",
                "aria-expanded",
                "aria-level",
                "aria-selected",
                "aria-rowindex",
                "aria-errormessage",
              ],
            },
            owned: { one: ["cell", "columnheader", "rowheader", "gridcell"] },
            nameFrom: ["author", "contents"],
            context: ["rowgroup", "grid", "treegrid", "table"],
            implicit: ["tr"],
            unsupported: !1,
          },
          rowgroup: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-expanded",
                "aria-errormessage",
              ],
            },
            owned: { all: ["row"] },
            nameFrom: ["author", "contents"],
            context: ["grid", "table", "treegrid"],
            implicit: ["tbody", "thead", "tfoot"],
            unsupported: !1,
          },
          rowheader: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-colindex",
                "aria-colspan",
                "aria-expanded",
                "aria-rowindex",
                "aria-rowspan",
                "aria-required",
                "aria-readonly",
                "aria-selected",
                "aria-sort",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["row"],
            implicit: ["th"],
            unsupported: !1,
          },
          scrollbar: {
            type: "widget",
            attributes: {
              required: ["aria-controls", "aria-valuenow"],
              allowed: [
                "aria-valuetext",
                "aria-orientation",
                "aria-errormessage",
                "aria-valuemax",
                "aria-valuemin",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
          },
          search: {
            type: "landmark",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: { nodeName: ["aside", "form", "section"] },
          },
          searchbox: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-autocomplete",
                "aria-multiline",
                "aria-readonly",
                "aria-required",
                "aria-placeholder",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ['input[type="search"]'],
            unsupported: !1,
            allowedElements: {
              nodeName: "input",
              properties: { type: "text" },
            },
          },
          section: {
            nameFrom: ["author", "contents"],
            type: "abstract",
            unsupported: !1,
          },
          sectionhead: {
            nameFrom: ["author", "contents"],
            type: "abstract",
            unsupported: !1,
          },
          select: { nameFrom: ["author"], type: "abstract", unsupported: !1 },
          separator: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-expanded",
                "aria-orientation",
                "aria-valuenow",
                "aria-valuemax",
                "aria-valuemin",
                "aria-valuetext",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["hr"],
            unsupported: !1,
            allowedElements: ["li"],
          },
          slider: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-valuetext",
                "aria-orientation",
                "aria-readonly",
                "aria-errormessage",
                "aria-valuemax",
                "aria-valuemin",
              ],
              required: ["aria-valuenow"],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ['input[type="range"]'],
            unsupported: !1,
          },
          spinbutton: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-valuetext",
                "aria-required",
                "aria-readonly",
                "aria-errormessage",
                "aria-valuemax",
                "aria-valuemin",
              ],
              required: ["aria-valuenow"],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ['input[type="number"]'],
            unsupported: !1,
            allowedElements: {
              nodeName: "input",
              properties: { type: ["text", "tel"] },
            },
          },
          status: {
            type: "widget",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ["output"],
            unsupported: !1,
            allowedElements: ["section"],
          },
          structure: { type: "abstract", unsupported: !1 },
          switch: {
            type: "widget",
            attributes: {
              allowed: ["aria-errormessage"],
              required: ["aria-checked"],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            unsupported: !1,
            allowedElements: [
              "button",
              {
                nodeName: "input",
                properties: { type: ["checkbox", "image", "button"] },
              },
              { nodeName: "a", attributes: { href: ze } },
            ],
          },
          tab: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-selected",
                "aria-expanded",
                "aria-setsize",
                "aria-posinset",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["tablist"],
            unsupported: !1,
            allowedElements: [
              {
                nodeName: ["button", "h1", "h2", "h3", "h4", "h5", "h6", "li"],
              },
              { nodeName: "input", properties: { type: "button" } },
              { nodeName: "a", attributes: { href: ze } },
            ],
          },
          table: {
            type: "structure",
            attributes: {
              allowed: ["aria-colcount", "aria-rowcount", "aria-errormessage"],
            },
            owned: { one: ["rowgroup", "row"] },
            nameFrom: ["author", "contents"],
            context: null,
            implicit: ["table"],
            unsupported: !1,
          },
          tablist: {
            type: "composite",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-expanded",
                "aria-level",
                "aria-multiselectable",
                "aria-orientation",
                "aria-errormessage",
              ],
            },
            owned: { all: ["tab"] },
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["ol", "ul"],
          },
          tabpanel: {
            type: "widget",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["section"],
          },
          term: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            implicit: ["dt"],
            unsupported: !1,
          },
          textbox: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-autocomplete",
                "aria-multiline",
                "aria-readonly",
                "aria-required",
                "aria-placeholder",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: [
              'input[type="text"]',
              'input[type="email"]',
              'input[type="password"]',
              'input[type="tel"]',
              'input[type="url"]',
              "input:not([type])",
              "textarea",
            ],
            unsupported: !1,
          },
          timer: {
            type: "widget",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
          },
          toolbar: {
            type: "structure",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-expanded",
                "aria-orientation",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author"],
            context: null,
            implicit: ['menu[type="toolbar"]'],
            unsupported: !1,
            allowedElements: ["ol", "ul"],
          },
          tooltip: {
            type: "structure",
            attributes: { allowed: ["aria-expanded", "aria-errormessage"] },
            owned: null,
            nameFrom: ["author", "contents"],
            context: null,
            unsupported: !1,
          },
          tree: {
            type: "composite",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-multiselectable",
                "aria-required",
                "aria-expanded",
                "aria-orientation",
                "aria-errormessage",
              ],
            },
            owned: { all: ["treeitem"] },
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
            allowedElements: ["ol", "ul"],
          },
          treegrid: {
            type: "composite",
            attributes: {
              allowed: [
                "aria-activedescendant",
                "aria-colcount",
                "aria-expanded",
                "aria-level",
                "aria-multiselectable",
                "aria-readonly",
                "aria-required",
                "aria-rowcount",
                "aria-orientation",
                "aria-errormessage",
              ],
            },
            owned: { one: ["rowgroup", "row"] },
            nameFrom: ["author"],
            context: null,
            unsupported: !1,
          },
          treeitem: {
            type: "widget",
            attributes: {
              allowed: [
                "aria-checked",
                "aria-selected",
                "aria-expanded",
                "aria-level",
                "aria-posinset",
                "aria-setsize",
                "aria-errormessage",
              ],
            },
            owned: null,
            nameFrom: ["author", "contents"],
            context: ["group", "tree"],
            unsupported: !1,
            allowedElements: [
              "li",
              { nodeName: "a", attributes: { href: ze } },
            ],
          },
          widget: { type: "abstract", unsupported: !1 },
          window: { nameFrom: ["author"], type: "abstract", unsupported: !1 },
        }),
        (bt.implicitHtmlRole = Qn),
        (bt.elementsAllowedNoRole = [
          {
            nodeName: [
              "base",
              "body",
              "caption",
              "col",
              "colgroup",
              "datalist",
              "dd",
              "details",
              "dt",
              "head",
              "html",
              "keygen",
              "label",
              "legend",
              "main",
              "map",
              "math",
              "meta",
              "meter",
              "noscript",
              "optgroup",
              "param",
              "picture",
              "progress",
              "script",
              "source",
              "style",
              "template",
              "textarea",
              "title",
              "track",
            ],
          },
          { nodeName: "area", attributes: { href: ze } },
          {
            nodeName: "input",
            properties: {
              type: [
                "color",
                "data",
                "datatime",
                "file",
                "hidden",
                "month",
                "number",
                "password",
                "range",
                "reset",
                "submit",
                "time",
                "week",
              ],
            },
          },
          { nodeName: "link", attributes: { href: ze } },
          { nodeName: "menu", attributes: { type: "context" } },
          {
            nodeName: "menuitem",
            attributes: { type: ["command", "checkbox", "radio"] },
          },
          {
            nodeName: "select",
            condition: function (t) {
              return (
                t instanceof v.AbstractVirtualNode ||
                  (t = v.utils.getNodeFromTree(t)),
                Number(t.attr("size")) > 1
              );
            },
            properties: { multiple: !0 },
          },
          {
            nodeName: [
              "clippath",
              "cursor",
              "defs",
              "desc",
              "feblend",
              "fecolormatrix",
              "fecomponenttransfer",
              "fecomposite",
              "feconvolvematrix",
              "fediffuselighting",
              "fedisplacementmap",
              "fedistantlight",
              "fedropshadow",
              "feflood",
              "fefunca",
              "fefuncb",
              "fefuncg",
              "fefuncr",
              "fegaussianblur",
              "feimage",
              "femerge",
              "femergenode",
              "femorphology",
              "feoffset",
              "fepointlight",
              "fespecularlighting",
              "fespotlight",
              "fetile",
              "feturbulence",
              "filter",
              "hatch",
              "hatchpath",
              "lineargradient",
              "marker",
              "mask",
              "meshgradient",
              "meshpatch",
              "meshrow",
              "metadata",
              "mpath",
              "pattern",
              "radialgradient",
              "solidcolor",
              "stop",
              "switch",
              "view",
            ],
          },
        ]),
        (bt.elementsAllowedAnyRole = [
          { nodeName: "a", attributes: { href: ju } },
          { nodeName: "img", attributes: { alt: ju } },
          {
            nodeName: [
              "abbr",
              "address",
              "canvas",
              "div",
              "p",
              "pre",
              "blockquote",
              "ins",
              "del",
              "output",
              "span",
              "table",
              "tbody",
              "thead",
              "tfoot",
              "td",
              "em",
              "strong",
              "small",
              "s",
              "cite",
              "q",
              "dfn",
              "abbr",
              "time",
              "code",
              "var",
              "samp",
              "kbd",
              "sub",
              "sup",
              "i",
              "b",
              "u",
              "mark",
              "ruby",
              "rt",
              "rp",
              "bdi",
              "bdo",
              "br",
              "wbr",
              "th",
              "tr",
            ],
          },
        ]),
        (bt.evaluateRoleForElement = {
          A: function (t) {
            var r = t.node,
              a = t.out;
            return r.namespaceURI === "http://www.w3.org/2000/svg"
              ? !0
              : r.href.length
              ? a
              : !0;
          },
          AREA: function (t) {
            var r = t.node;
            return !r.href;
          },
          BUTTON: function (t) {
            var r = t.node,
              a = t.role,
              n = t.out;
            return r.getAttribute("type") === "menu" ? a === "menuitem" : n;
          },
          IMG: function (t) {
            var r = t.node,
              a = t.role,
              n = t.out;
            switch (r.alt) {
              case null:
                return n;
              case "":
                return a === "presentation" || a === "none";
              default:
                return a !== "presentation" && a !== "none";
            }
          },
          INPUT: function (t) {
            var r = t.node,
              a = t.role,
              n = t.out;
            switch (r.type) {
              case "button":
              case "image":
                return n;
              case "checkbox":
                return a === "button" && r.hasAttribute("aria-pressed")
                  ? !0
                  : n;
              case "radio":
                return a === "menuitemradio";
              case "text":
                return (
                  a === "combobox" || a === "searchbox" || a === "spinbutton"
                );
              case "tel":
                return a === "combobox" || a === "spinbutton";
              case "url":
              case "search":
              case "email":
                return a === "combobox";
              default:
                return !1;
            }
          },
          LI: function (t) {
            var r = t.node,
              a = t.out,
              n = v.utils.matchesSelector(r, "ol li, ul li");
            return n ? a : !0;
          },
          MENU: function (t) {
            var r = t.node;
            return r.getAttribute("type") !== "context";
          },
          OPTION: function (t) {
            var r = t.node,
              a = v.utils.matchesSelector(
                r,
                "select > option, datalist > option, optgroup > option"
              );
            return !a;
          },
          SELECT: function (t) {
            var r = t.node,
              a = t.role;
            return !r.multiple && r.size <= 1 && a === "menu";
          },
          SVG: function (t) {
            var r = t.node,
              a = t.out;
            return r.parentNode &&
              r.parentNode.namespaceURI === "http://www.w3.org/2000/svg"
              ? !0
              : a;
          },
        }),
        (bt.rolesOfType = {
          widget: [
            "button",
            "checkbox",
            "dialog",
            "gridcell",
            "link",
            "log",
            "marquee",
            "menuitem",
            "menuitemcheckbox",
            "menuitemradio",
            "option",
            "progressbar",
            "radio",
            "scrollbar",
            "searchbox",
            "slider",
            "spinbutton",
            "status",
            "switch",
            "tab",
            "tabpanel",
            "textbox",
            "timer",
            "tooltip",
            "tree",
            "treeitem",
          ],
        });
      var Hu = bt;
      function Xv(e) {
        var t = null,
          r = Hu.role[e];
        return r && r.implicit && (t = mt(r.implicit)), t;
      }
      var Jv = Xv;
      function Qv(e) {
        return !!ii(e).length;
      }
      var ya = Qv;
      function Zv(e) {
        return (e = B(e)), ra(e);
      }
      var zu = Zv;
      function eg(e) {
        var t = ue.ariaRoles[e];
        return !t || !Array.isArray(t.requiredAttrs) ? [] : ie(t.requiredAttrs);
      }
      var Uu = eg;
      function tg(e) {
        var t = ue.ariaRoles[e];
        return !t || !Array.isArray(t.requiredContext)
          ? null
          : ie(t.requiredContext);
      }
      var li = tg;
      function rg(e) {
        var t = ue.ariaRoles[e];
        return !t || !Array.isArray(t.requiredOwned)
          ? null
          : ie(t.requiredOwned);
      }
      var ui = rg;
      function ag(e, t) {
        e = e instanceof X ? e : B(e);
        var r,
          a,
          n = e.attr(t),
          i = ue.ariaAttrs[t];
        if (!i || (i.allowEmpty && (!n || n.trim() === ""))) return !0;
        switch (i.type) {
          case "boolean":
            return ["true", "false"].includes(n.toLowerCase());
          case "nmtoken":
            return typeof n == "string" && i.values.includes(n.toLowerCase());
          case "nmtokens":
            return (
              (a = Be(n)),
              a.reduce(function (u, s) {
                return u && i.values.includes(s);
              }, a.length !== 0)
            );
          case "idref":
            try {
              var o = je(e.actualNode);
              return !!(n && o.getElementById(n));
            } catch {
              throw new TypeError(
                "Cannot resolve id references for partial DOM"
              );
            }
          case "idrefs":
            return it(e, t).some(function (u) {
              return !!u;
            });
          case "string":
            return n.trim() !== "";
          case "decimal":
            return (
              (r = n.match(/^[-+]?([0-9]*)\.?([0-9]*)$/)),
              !!(r && (r[1] || r[2]))
            );
          case "int":
            var l = typeof i.minValue < "u" ? i.minValue : -1 / 0;
            return /^[-+]?[0-9]+$/.test(n) && parseInt(n) >= l;
        }
      }
      var $u = ag;
      function ng(e) {
        var t = ue.ariaAttrs[e];
        return !!t;
      }
      var Sr = ng;
      function ig(e, t, r) {
        var a = Be(r.attr("role")).filter(function (n) {
          return ct(n) === "abstract";
        });
        return a.length > 0 ? (this.data(a), !0) : !1;
      }
      var og = ig;
      function lg(e, t, r) {
        var a = [],
          n = se(r),
          i = r.attrNames,
          o = tu(n);
        Array.isArray(t[n]) && (o = xr(t[n].concat(o)));
        var l = ae.get("aria-allowed-attr-table", function () {
          return new WeakMap();
        });
        function u() {
          if (r.parent && n === "row") {
            var m = $e(
                r,
                'table, [role="treegrid"], [role="table"], [role="grid"]'
              ),
              b = l.get(m);
            if (
              (m && !b && ((b = se(m)), l.set(m, b)),
              ["table", "grid"].includes(b) && n === "row")
            )
              return !0;
          }
        }
        var s = Array.isArray(t.validTreeRowAttrs) ? t.validTreeRowAttrs : [],
          c = {};
        if (
          (s.forEach(function (m) {
            c[m] = u;
          }),
          o)
        )
          for (var d = 0; d < i.length; d++) {
            var f,
              p = i[d];
            ((Sr(p) && (f = c[p]) !== null && f !== void 0 && f.call(c)) ||
              (Sr(p) && !o.includes(p))) &&
              a.push(p + '="' + r.attr(p) + '"');
          }
        return a.length
          ? (this.data(a), !qn(r) && !n && !Re(r) ? void 0 : !1)
          : !0;
      }
      function ug(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = t.allowImplicit,
          n = a === void 0 ? !0 : a,
          i = t.ignoredTags,
          o = i === void 0 ? [] : i,
          l = r.props.nodeName;
        if (
          o
            .map(function (s) {
              return s.toLowerCase();
            })
            .includes(l)
        )
          return !0;
        var u = Vu(r, n);
        return u.length ? (this.data(u), Ae(r) ? !1 : void 0) : !0;
      }
      var sg = ug;
      function cg(e, t, r) {
        return r.attr("aria-busy") === "true";
      }
      function dg(e, t, r) {
        t = Array.isArray(t) ? t : [];
        var a = r.attr("aria-errormessage"),
          n = r.hasAttr("aria-errormessage"),
          i = r.attr("aria-invalid"),
          o = r.hasAttr("aria-invalid");
        if (!o || i === "false") return !0;
        function l(u) {
          if (u.trim() === "")
            return ue.ariaAttrs["aria-errormessage"].allowEmpty;
          var s;
          try {
            s = u && it(r, "aria-errormessage")[0];
          } catch {
            this.data({ messageKey: "idrefs", values: Be(u) });
            return;
          }
          if (s)
            return Ae(s)
              ? s.getAttribute("role") === "alert" ||
                  s.getAttribute("aria-live") === "assertive" ||
                  s.getAttribute("aria-live") === "polite" ||
                  Be(r.attr("aria-describedby")).indexOf(u) > -1
              : (this.data({ messageKey: "hidden", values: Be(u) }), !1);
        }
        return t.indexOf(a) === -1 && n
          ? (this.data(Be(a)), l.call(this, a))
          : !0;
      }
      var fg = dg;
      function pg(e, t, r) {
        return r.attr("aria-hidden") !== "true";
      }
      var mg = pg;
      function hg(e, t, r) {
        var a = r.attr("aria-level"),
          n = parseInt(a, 10);
        if (!(n > 6)) return !0;
      }
      var vg = hg;
      function gg(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = (t == null ? void 0 : t.elementsAllowedAriaLabel) || [],
          n = r.props.nodeName,
          i = se(r, { chromium: !0 }),
          o = bg(i, n, a),
          l = o.filter(function (c) {
            return r.attrNames.includes(c) ? K(r.attr(c)) !== "" : !1;
          });
        if (l.length === 0) return !1;
        var u = r.hasAttr("role") ? "hasRole" : "noRole";
        (u += l.length > 1 ? "Plural" : "Singular"),
          this.data({ role: i, nodeName: n, messageKey: u, prohibited: l });
        var s = Et(r, { subtreeDescendant: !0 });
        if (K(s) === "") return !0;
      }
      function bg(e, t, r) {
        var a = ue.ariaRoles[e];
        return a
          ? a.prohibitedAttrs || []
          : !!e || r.includes(t)
          ? []
          : ["aria-label", "aria-labelledby"];
      }
      var Wu = {};
      ke(Wu, {
        getAriaRolesByType: function () {
          return rr;
        },
        getAriaRolesSupportingNameFromContent: function () {
          return oi;
        },
        getElementSpec: function () {
          return Bt;
        },
        getElementsByContentType: function () {
          return Xn;
        },
        getGlobalAriaAttrs: function () {
          return Nt;
        },
        implicitHtmlRoles: function () {
          return Qn;
        },
      });
      function yg(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = [],
          n = r.attrNames,
          i = ge(r);
        if (n.length) {
          var o = Uu(i),
            l = Bt(r);
          if ((Array.isArray(t[i]) && (o = xr(t[i], o)), i && o))
            for (var u = 0, s = o.length; u < s; u++) {
              var c = o[u];
              !r.attr(c) &&
                !(l.implicitAttrs && typeof l.implicitAttrs[c] < "u") &&
                a.push(c);
            }
        }
        var d = i === "combobox" && a.includes("aria-controls");
        return (
          d &&
            (r.hasAttr("aria-owns") || r.attr("aria-expanded") !== "true") &&
            a.splice(a.indexOf("aria-controls", 1)),
          a.length ? (this.data(a), !1) : !0
        );
      }
      var Dg = yg;
      function wg(e, t) {
        for (
          var r = [],
            a = Cr(e),
            n = function (l) {
              var u = a[l],
                s = se(u, { noPresentational: !0 }),
                c = Nt().some(function (f) {
                  return u.hasAttr(f);
                }),
                d = c || Re(u);
              (!s && !d) ||
              (["group", "rowgroup"].includes(s) &&
                t.some(function (f) {
                  return f === s;
                }))
                ? a.push.apply(a, ie(u.children))
                : (s || d) && r.push({ role: s, ownedElement: u });
            },
            i = 0;
          i < a.length;
          i++
        )
          n(i);
        return r;
      }
      function _g(e, t, r, a) {
        for (
          var n = function (u) {
              var s = a[u].role;
              if (r.includes(s))
                return (
                  (r = r.filter(function (c) {
                    return c !== s;
                  })),
                  { v: null }
                );
            },
            i = 0;
          i < a.length;
          i++
        ) {
          var o = n(i);
          if (P(o) === "object") return o.v;
        }
        return r.length ? r : null;
      }
      function xg(e, t, r) {
        var a = t && Array.isArray(t.reviewEmpty) ? t.reviewEmpty : [],
          n = ge(r, { dpub: !0 }),
          i = ui(n);
        if (i === null) return !0;
        var o = wg(r, i),
          l = o.filter(function (s) {
            var c = s.role;
            return !i.includes(c);
          });
        if (l.length)
          return (
            this.relatedNodes(
              l.map(function (s) {
                var c = s.ownedElement;
                return c;
              })
            ),
            this.data({ messageKey: "unallowed" }),
            !1
          );
        var u = _g(r, n, i, o);
        if (!u) return !0;
        if (
          (this.data(u),
          !(
            a.includes(n) &&
            !Dr(r, !1, !0) &&
            !o.length &&
            (!r.hasAttr("aria-owns") || !it(e, "aria-owns").length)
          ))
        )
          return !1;
      }
      var Eg = xg;
      function Gu(e, t, r, a) {
        var n = ge(e);
        if ((r || (r = li(n)), !r)) return null;
        for (var i = r.includes("group"), o = a ? e : e.parent; o; ) {
          var l = se(o, { noPresentational: !0 });
          if (!l) o = o.parent;
          else if (l === "group" && i)
            t.includes(n) && r.push(n),
              (r = r.filter(function (u) {
                return u !== "group";
              })),
              (o = o.parent);
          else return r.includes(l) ? null : r;
        }
        return r;
      }
      function Ag(e) {
        for (var t = [], r = null; e; ) {
          if (e.getAttribute("id")) {
            var a = Ee(e.getAttribute("id")),
              n = je(e);
            (r = n.querySelector("[aria-owns~=".concat(a, "]"))),
              r && t.push(r);
          }
          e = e.parentElement;
        }
        return t.length ? t : null;
      }
      function Fg(e, t, r) {
        var a = t && Array.isArray(t.ownGroupRoles) ? t.ownGroupRoles : [],
          n = Gu(r, a);
        if (!n) return !0;
        var i = Ag(e);
        if (i) {
          for (var o = 0, l = i.length; o < l; o++)
            if (((n = Gu(B(i[o]), a, n, !0)), !n)) return !0;
        }
        return this.data(n), !1;
      }
      var Cg = Fg;
      function kg(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = se(r),
          n = t.supportedRoles || [];
        if (n.includes(a)) return !0;
        if (!(a && a !== "presentation" && a !== "none")) return !1;
      }
      var Rg = kg;
      function Tg(e, t, r) {
        var a = r.attrNames.filter(function (n) {
          var i = ue.ariaAttrs[n];
          if (!Sr(n)) return !1;
          var o = i.unsupported;
          return P(o) !== "object" ? !!o : !Fr(e, o.exceptions);
        });
        return a.length ? (this.data(a), !0) : !1;
      }
      var Sg = Tg;
      function Og(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = [],
          n = /^aria-/;
        return (
          r.attrNames.forEach(function (i) {
            t.indexOf(i) === -1 && n.test(i) && !Sr(i) && a.push(i);
          }),
          a.length ? (this.data(a), !1) : !0
        );
      }
      var Ig = Og;
      function Pg(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = "",
          n = "",
          i = [],
          o = /^aria-/,
          l = ["aria-errormessage"],
          u = {
            "aria-controls": function () {
              return (
                r.attr("aria-expanded") !== "false" &&
                r.attr("aria-selected") !== "false"
              );
            },
            "aria-current": function (c) {
              c ||
                ((a = 'aria-current="'.concat(r.attr("aria-current"), '"')),
                (n = "ariaCurrent"));
            },
            "aria-owns": function () {
              return r.attr("aria-expanded") !== "false";
            },
            "aria-describedby": function (c) {
              c ||
                ((a = 'aria-describedby="'.concat(
                  r.attr("aria-describedby"),
                  '"'
                )),
                (n =
                  v._tree && v._tree[0]._hasShadowRoot
                    ? "noIdShadow"
                    : "noId"));
            },
            "aria-labelledby": function (c) {
              c ||
                ((a = 'aria-labelledby="'.concat(
                  r.attr("aria-labelledby"),
                  '"'
                )),
                (n =
                  v._tree && v._tree[0]._hasShadowRoot
                    ? "noIdShadow"
                    : "noId"));
            },
          };
        if (
          (r.attrNames.forEach(function (s) {
            if (!(l.includes(s) || t.includes(s) || !o.test(s))) {
              var c,
                d = r.attr(s);
              try {
                c = $u(r, s);
              } catch {
                (a = "".concat(s, '="').concat(d, '"')), (n = "idrefs");
                return;
              }
              (u[s] ? u[s](c) : !0) &&
                !c &&
                (d === "" && !Ng(s)
                  ? ((a = s), (n = "empty"))
                  : i.push("".concat(s, '="').concat(d, '"')));
            }
          }),
          i.length)
        )
          return this.data(i), !1;
        if (a) {
          this.data({ messageKey: n, needsReview: a });
          return;
        }
        return !0;
      }
      function Ng(e) {
        var t;
        return (
          ((t = ue.ariaAttrs[e]) === null || t === void 0 ? void 0 : t.type) ===
          "string"
        );
      }
      function Mg(e, t, r) {
        var a = se(r, { dpub: !0, fallback: !0 }),
          n = ue.ariaRoles[a];
        return n != null && n.deprecated ? (this.data(a), !0) : !1;
      }
      function Bg(e, t) {
        var r = dt(e);
        return (
          !r &&
          t.length === 2 &&
          t.includes("none") &&
          t.includes("presentation")
        );
      }
      function qg(e, t, r) {
        var a = Be(r.attr("role"));
        return a.length <= 1 ? !1 : Bg(r, a) ? void 0 : !0;
      }
      var Lg = qg;
      function Vg(e, t, r) {
        var a = Nt().filter(function (n) {
          return r.hasAttr(n);
        });
        return this.data(a), a.length > 0;
      }
      var jg = Vg;
      function Hg(e) {
        var t = e.getAttribute("role");
        if (t === null) return !1;
        var r = ct(t);
        return r === "widget" || r === "composite";
      }
      var zg = Hg;
      function Ug(e, t, r) {
        var a = Be(r.attr("role")),
          n = a.every(function (i) {
            return !Zt(i, { allowAbstract: !0 });
          });
        return n ? (this.data(a), !0) : !1;
      }
      var $g = Ug;
      function Wg(e, t, r) {
        return Re(r);
      }
      var Gg = Wg;
      function Yg(e, t, r) {
        var a = se(r, { noImplicit: !0 });
        this.data(a);
        var n, i;
        try {
          (n = K(ei(r)).toLowerCase()), (i = K(Ue(r)).toLowerCase());
        } catch {
          return;
        }
        if (!i && !n) return !1;
        if (!(!i && n) && !!i.includes(n)) return !1;
      }
      var Kg = Yg;
      function Xg(e, t, r) {
        var a = se(r, { dpub: !0, fallback: !0 }),
          n = Kn(a);
        return n && this.data(a), n;
      }
      var Jg = Xg,
        Qg = { ARTICLE: !0, ASIDE: !0, NAV: !0, SECTION: !0 },
        Zg = {
          application: !0,
          banner: !1,
          complementary: !0,
          contentinfo: !0,
          form: !0,
          main: !0,
          navigation: !0,
          region: !0,
          search: !1,
        };
      function eb(e) {
        var t = e.nodeName.toUpperCase();
        return Qg[t] || !1;
      }
      function tb(e, t) {
        var r = ge(e);
        return (r && (Zg[r] || t.roles.includes(r))) || !1;
      }
      function rb(e, t) {
        return tb(e, t) || eb(e);
      }
      var ab = rb,
        Yu = {};
      ke(Yu, {
        Color: function () {
          return Ze;
        },
        centerPointOfRect: function () {
          return ib;
        },
        elementHasImage: function () {
          return ia;
        },
        elementIsDistinct: function () {
          return Xu;
        },
        filteredRectStack: function () {
          return Qu;
        },
        flattenColors: function () {
          return Or;
        },
        flattenShadowColors: function () {
          return Da;
        },
        getBackgroundColor: function () {
          return Ir;
        },
        getBackgroundStack: function () {
          return Zu;
        },
        getContrast: function () {
          return ar;
        },
        getForegroundColor: function () {
          return _a;
        },
        getOwnBackgroundColor: function () {
          return It;
        },
        getRectStack: function () {
          return Ju;
        },
        getTextShadowColors: function () {
          return wa;
        },
        hasValidContrastRatio: function () {
          return Cb;
        },
        incompleteData: function () {
          return He;
        },
      });
      function nb(e) {
        if (!(e.left > y.innerWidth) && !(e.top > y.innerHeight)) {
          var t = Math.min(Math.ceil(e.left + e.width / 2), y.innerWidth - 1),
            r = Math.min(Math.ceil(e.top + e.height / 2), y.innerHeight - 1);
          return { x: t, y: r };
        }
      }
      var ib = nb;
      function Ku(e) {
        return e
          .getPropertyValue("font-family")
          .split(/[,;]/g)
          .map(function (t) {
            return t.trim().toLowerCase();
          });
      }
      function ob(e, t) {
        var r = y.getComputedStyle(e);
        if (r.getPropertyValue("background-image") !== "none") return !0;
        var a = ["border-bottom", "border-top", "outline"].reduce(function (
          l,
          u
        ) {
          var s = new Ze();
          return (
            s.parseString(r.getPropertyValue(u + "-color")),
            l ||
              (r.getPropertyValue(u + "-style") !== "none" &&
                parseFloat(r.getPropertyValue(u + "-width")) > 0 &&
                s.alpha !== 0)
          );
        },
        !1);
        if (a) return !0;
        var n = y.getComputedStyle(t);
        if (Ku(r)[0] !== Ku(n)[0]) return !0;
        var i = [
            "text-decoration-line",
            "text-decoration-style",
            "font-weight",
            "font-style",
            "font-size",
          ].reduce(function (l, u) {
            return l || r.getPropertyValue(u) !== n.getPropertyValue(u);
          }, !1),
          o = r.getPropertyValue("text-decoration");
        return (
          o.split(" ").length < 3 &&
            (i = i || o !== n.getPropertyValue("text-decoration")),
          i
        );
      }
      var Xu = ob;
      function lb(e) {
        var t = wn(e),
          r = Xo(e);
        return !r || r.length <= 1
          ? [t]
          : r.some(function (a) {
              return a === void 0;
            })
          ? null
          : (r.splice(0, 0, t), r);
      }
      var Ju = lb;
      function ub(e) {
        var t = Ju(e);
        if (t && t.length === 1) return t[0];
        if (t && t.length > 1) {
          var r = t.shift(),
            a;
          return (
            t.forEach(function (n, i) {
              if (i !== 0) {
                var o = t[i - 1],
                  l = t[i];
                a =
                  o.every(function (u, s) {
                    return u === l[s];
                  }) || r.includes(e);
              }
            }),
            a ? t[0] : (He.set("bgColor", "elmPartiallyObscuring"), null)
          );
        }
        return He.set("bgColor", "outsideViewport"), null;
      }
      var Qu = ub;
      function sb(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      var cb = {
        normal: function (t, r) {
          return r;
        },
        multiply: function (t, r) {
          return r * t;
        },
        screen: function (t, r) {
          return t + r - t * r;
        },
        overlay: function (t, r) {
          return this["hard-light"](r, t);
        },
        darken: function (t, r) {
          return Math.min(t, r);
        },
        lighten: function (t, r) {
          return Math.max(t, r);
        },
        "color-dodge": function (t, r) {
          return t === 0 ? 0 : r === 1 ? 1 : Math.min(1, t / (1 - r));
        },
        "color-burn": function (t, r) {
          return t === 1 ? 1 : r === 0 ? 0 : 1 - Math.min(1, (1 - t) / r);
        },
        "hard-light": function (t, r) {
          return r <= 0.5 ? this.multiply(t, 2 * r) : this.screen(t, 2 * r - 1);
        },
        "soft-light": function (t, r) {
          if (r <= 0.5) return t - (1 - 2 * r) * t * (1 - t);
          var a = t <= 0.25 ? ((16 * t - 12) * t + 4) * t : Math.sqrt(t);
          return t + (2 * r - 1) * (a - t);
        },
        difference: function (t, r) {
          return Math.abs(t - r);
        },
        exclusion: function (t, r) {
          return t + r - 2 * t * r;
        },
      };
      function si(e, t, r, a, n) {
        return (
          t * (1 - a) * e +
          t * a * cb[n](r / 255, e / 255) * 255 +
          (1 - t) * a * r
        );
      }
      function db(e, t) {
        var r =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : "normal",
          a = si(e.red, e.alpha, t.red, t.alpha, r),
          n = si(e.green, e.alpha, t.green, t.alpha, r),
          i = si(e.blue, e.alpha, t.blue, t.alpha, r),
          o = sb(e.alpha + t.alpha * (1 - e.alpha), 0, 1),
          l = Math.round(a / o),
          u = Math.round(n / o),
          s = Math.round(i / o);
        return new Ze(l, u, s, o);
      }
      var Or = db;
      function fb(e, t) {
        var r = e.alpha,
          a = (1 - r) * t.red + r * e.red,
          n = (1 - r) * t.green + r * e.green,
          i = (1 - r) * t.blue + r * e.blue,
          o = e.alpha + t.alpha * (1 - e.alpha);
        return new Ze(a, n, i, o);
      }
      var Da = fb;
      function pb(e, t) {
        var r = y.Node.DOCUMENT_POSITION_CONTAINED_BY;
        if (!(e.compareDocumentPosition(t) & r)) return !1;
        var a = y.getComputedStyle(t),
          n = a.getPropertyValue("display");
        if (!n.includes("inline")) return !1;
        var i = a.getPropertyValue("position");
        return i === "static";
      }
      function mb(e, t, r) {
        for (var a = e - 1; a >= 0; a--) {
          if (!pb(r, t[a])) return !0;
          t.splice(a, 1);
        }
        return !1;
      }
      function hb(e) {
        var t = e.indexOf(R.body),
          r = e,
          a = It(y.getComputedStyle(R.documentElement));
        if (t > 1 && a.alpha === 0 && !ia(R.documentElement)) {
          t > 1 && (r.splice(t, 1), r.push(R.body));
          var n = r.indexOf(R.documentElement);
          n > 0 && (r.splice(n, 1), r.push(R.documentElement));
        }
        return r;
      }
      function vb(e) {
        var t = Qu(e);
        if (t === null) return null;
        (t = dl(t, e)), (t = hb(t));
        var r = t.indexOf(e);
        return mb(r, t, e)
          ? (He.set("bgColor", "bgOverlap"), null)
          : r !== -1
          ? t
          : null;
      }
      var Zu = vb;
      function gb(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.minRatio,
          a = t.maxRatio,
          n = y.getComputedStyle(e),
          i = n.getPropertyValue("text-shadow");
        if (i === "none") return [];
        var o = n.getPropertyValue("font-size"),
          l = parseInt(o);
        me(isNaN(l) === !1, "Unable to determine font-size value ".concat(o));
        var u = [],
          s = bb(i);
        return (
          s.forEach(function (c) {
            var d = c.colorStr,
              f = c.pixels;
            d = d || n.getPropertyValue("color");
            var p = ve(f, 3),
              m = p[0],
              b = p[1],
              D = p[2],
              h = D === void 0 ? 0 : D;
            if ((!r || h >= l * r) && (!a || h < l * a)) {
              var g = yb({
                colorStr: d,
                offsetY: m,
                offsetX: b,
                blurRadius: h,
                fontSize: l,
              });
              u.push(g);
            }
          }),
          u
        );
      }
      function bb(e) {
        var t = { pixels: [] },
          r = e.trim(),
          a = [t];
        if (!r) return [];
        for (; r; ) {
          var n =
              r.match(/^rgba?\([0-9,.\s]+\)/i) ||
              r.match(/^[a-z]+/i) ||
              r.match(/^#[0-9a-f]+/i),
            i = r.match(/^([0-9.-]+)px/i) || r.match(/^(0)/);
          if (n)
            me(
              !t.colorStr,
              "Multiple colors identified in text-shadow: ".concat(e)
            ),
              (r = r.replace(n[0], "").trim()),
              (t.colorStr = n[0]);
          else if (i) {
            me(
              t.pixels.length < 3,
              "Too many pixel units in text-shadow: ".concat(e)
            ),
              (r = r.replace(i[0], "").trim());
            var o = parseFloat((i[1][0] === "." ? "0" : "") + i[1]);
            t.pixels.push(o);
          } else if (r[0] === ",")
            me(
              t.pixels.length >= 2,
              "Missing pixel value in text-shadow: ".concat(e)
            ),
              (t = { pixels: [] }),
              a.push(t),
              (r = r.substr(1).trim());
          else throw new Error("Unable to process text-shadows: ".concat(e));
        }
        return a;
      }
      function yb(e) {
        var t = e.colorStr,
          r = e.offsetX,
          a = e.offsetY,
          n = e.blurRadius,
          i = e.fontSize;
        if (r > n || a > n) return new Ze(0, 0, 0, 0);
        var o = new Ze();
        return o.parseString(t), (o.alpha *= Db(n, i)), o;
      }
      function Db(e, t) {
        if (e === 0) return 1;
        var r = e / t;
        return 0.185 / (r + 0.4);
      }
      var wa = gb;
      function Ir(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          r =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : 0.1,
          a = B(e),
          n = a._cache.getBackgroundColor;
        if (n)
          return (
            t.push.apply(t, ie(n.bgElms)),
            He.set("bgColor", n.incompleteData),
            n.bgColor
          );
        var i = wb(e, t, r);
        return (
          (a._cache.getBackgroundColor = {
            bgColor: i,
            bgElms: t,
            incompleteData: He.get("bgColor"),
          }),
          i
        );
      }
      function wb(e, t, r) {
        var a,
          n = wa(e, { minRatio: r });
        n.length && (n = [{ color: n.reduce(Da) }]);
        var i = Zu(e);
        if (
          ((i || []).some(function (u) {
            var s = y.getComputedStyle(u),
              c = It(s);
            if (_b(e, u, c) || ia(u, s)) return (n = null), t.push(u), !0;
            if (c.alpha !== 0) {
              t.push(u);
              var d = s.getPropertyValue("mix-blend-mode");
              return n.unshift({ color: c, blendMode: ci(d) }), c.alpha === 1;
            } else return !1;
          }),
          n === null || i === null)
        )
          return null;
        var o = xb(e, i.includes(R.body));
        if (((a = n).unshift.apply(a, ie(o)), n.length === 0))
          return new Ze(255, 255, 255, 1);
        var l = n.reduce(function (u, s) {
          return Or(s.color, u.color instanceof Ze ? u.color : u, s.blendMode);
        });
        return Or(
          l.color instanceof Ze ? l.color : l,
          new Ze(255, 255, 255, 1)
        );
      }
      function _b(e, t, r) {
        var a = e !== t && !la(e, t) && r.alpha !== 0;
        return a && He.set("bgColor", "elmPartiallyObscured"), a;
      }
      function ci(e) {
        return e || void 0;
      }
      function xb(e, t) {
        var r = [];
        if (!t) {
          var a = R.documentElement,
            n = R.body,
            i = y.getComputedStyle(a),
            o = y.getComputedStyle(n),
            l = It(i),
            u = It(o),
            s = u.alpha !== 0 && la(e, n);
          ((u.alpha !== 0 && l.alpha === 0) || (s && u.alpha !== 1)) &&
            r.unshift({
              color: u,
              blendMode: ci(o.getPropertyValue("mix-blend-mode")),
            }),
            l.alpha !== 0 &&
              (!s || (s && u.alpha !== 1)) &&
              r.unshift({
                color: l,
                blendMode: ci(i.getPropertyValue("mix-blend-mode")),
              });
        }
        return r;
      }
      function Eb(e, t) {
        if (!t || !e) return null;
        t.alpha < 1 && (t = Or(t, e));
        var r = e.getRelativeLuminance(),
          a = t.getRelativeLuminance();
        return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
      }
      var ar = Eb;
      function es(e) {
        if (!e) return 1;
        var t = B(e);
        if (t && t._opacity !== void 0 && t._opacity !== null)
          return t._opacity;
        var r = y.getComputedStyle(e),
          a = r.getPropertyValue("opacity"),
          n = a * es(e.parentElement);
        return t && (t._opacity = n), n;
      }
      function Ab(e, t, r) {
        var a = y.getComputedStyle(e),
          n = new Ze();
        n.parseString(a.getPropertyValue("color"));
        var i = es(e);
        if (((n.alpha = n.alpha * i), n.alpha === 1)) return n;
        if ((r || (r = Ir(e, [])), r === null)) {
          var o = He.get("bgColor");
          return He.set("fgColor", o), null;
        }
        if (n.alpha < 1) {
          var l = wa(e, { minRatio: 0 });
          return [n].concat(ie(l), [r]).reduce(Da);
        }
        return Or(n, r);
      }
      var _a = Ab;
      function Fb(e, t, r, a) {
        var n = ar(e, t),
          i =
            (a && Math.ceil(r * 72) / 96 < 14) ||
            (!a && Math.ceil(r * 72) / 96 < 18),
          o = i ? 4.5 : 3;
        return { isValid: n > o, contrastRatio: n, expectedContrastRatio: o };
      }
      var Cb = Fb;
      function kb(e, t, r) {
        var a = t.ignoreUnicode,
          n = t.ignoreLength,
          i = t.ignorePseudo,
          o = t.boldValue,
          l = t.boldTextPt,
          u = t.largeTextPt,
          s = t.contrastRatio,
          c = t.shadowOutlineEmMax,
          d = t.pseudoSizeThreshold;
        if (!Qe(e)) return this.data({ messageKey: "hidden" }), !0;
        var f = ut(r, !1, !0);
        if (a && Tb(f)) {
          this.data({ messageKey: "nonBmp" });
          return;
        }
        var p = y.getComputedStyle(e),
          m = parseFloat(p.getPropertyValue("font-size")),
          b = p.getPropertyValue("font-weight"),
          D = parseFloat(b) >= o || b === "bold",
          h = Math.ceil(m * 72) / 96,
          g = (D && h < l) || (!D && h < u),
          x = g ? s.normal : s.large,
          E = x.expected,
          C = x.minThreshold,
          N = x.maxThreshold,
          M = Rb(r, { ignorePseudo: i, pseudoSizeThreshold: d });
        if (M) {
          this.data({
            fontSize: ""
              .concat(((m * 72) / 96).toFixed(1), "pt (")
              .concat(m, "px)"),
            fontWeight: D ? "bold" : "normal",
            messageKey: "pseudoContent",
            expectedContrastRatio: E + ":1",
          }),
            this.relatedNodes(M.actualNode);
          return;
        }
        var H = [],
          ee = Ir(e, H, c),
          q = _a(e, !1, ee),
          J = wa(e, { minRatio: 0.001, maxRatio: c }),
          $ = null,
          te = null,
          le = null;
        if (J.length === 0) $ = ar(ee, q);
        else if (q && ee) {
          le = [].concat(ie(J), [ee]).reduce(Da);
          var pe = ar(ee, q),
            Q = ar(ee, le),
            oe = ar(le, q);
          ($ = Math.max(pe, Q, oe)),
            $ !== pe && (te = Q > oe ? "shadowOnBgColor" : "fgOnShadowColor");
        }
        var O = $ > E;
        if (
          (typeof C == "number" && (typeof $ != "number" || $ < C)) ||
          (typeof N == "number" && (typeof $ != "number" || $ > N))
        )
          return this.data({ contrastRatio: $ }), !0;
        var ce = Math.floor($ * 100) / 100,
          w;
        ee === null ? (w = He.get("bgColor")) : O || (w = te);
        var z = ce === 1,
          I = f.length === 1;
        if (
          (z
            ? (w = He.set("bgColor", "equalRatio"))
            : !O && I && !n && (w = "shortTextContent"),
          this.data({
            fgColor: q ? q.toHexString() : void 0,
            bgColor: ee ? ee.toHexString() : void 0,
            contrastRatio: ce,
            fontSize: ""
              .concat(((m * 72) / 96).toFixed(1), "pt (")
              .concat(m, "px)"),
            fontWeight: D ? "bold" : "normal",
            messageKey: w,
            expectedContrastRatio: E + ":1",
            shadowColor: le ? le.toHexString() : void 0,
          }),
          q === null || ee === null || z || (I && !n && !O))
        ) {
          (w = null), He.clear(), this.relatedNodes(H);
          return;
        }
        return O || this.relatedNodes(H), O;
      }
      function Rb(e, t) {
        var r = t.pseudoSizeThreshold,
          a = r === void 0 ? 0.25 : r,
          n = t.ignorePseudo,
          i = n === void 0 ? !1 : n;
        if (!i) {
          var o = e.boundingClientRect,
            l = o.width * o.height * a;
          do {
            var u = ts(e.actualNode, ":before"),
              s = ts(e.actualNode, ":after");
            if (u + s > l) return e;
          } while ((e = e.parent));
        }
      }
      var ts = nt(function (t, r) {
        var a = y.getComputedStyle(t, r),
          n = function (u, s) {
            return a.getPropertyValue(u) === s;
          };
        if (
          n("content", "none") ||
          n("display", "none") ||
          n("visibility", "hidden") ||
          n("position", "absolute") === !1 ||
          (It(a).alpha === 0 && n("background-image", "none"))
        )
          return 0;
        var i = rs(a.getPropertyValue("width")),
          o = rs(a.getPropertyValue("height"));
        return i.unit !== "px" || o.unit !== "px"
          ? i.value === 0 || o.value === 0
            ? 0
            : 1 / 0
          : i.value * o.value;
      });
      function Tb(e) {
        var t = { nonBmp: !0 },
          r = ai(e, t),
          a = K(Tr(e, t)) === "";
        return r && a;
      }
      function rs(e) {
        var t = /^([0-9.]+)([a-z]+)$/i,
          r = e.match(t) || [],
          a = ve(r, 3),
          n = a[1],
          i = n === void 0 ? "" : n,
          o = a[2],
          l = o === void 0 ? "" : o;
        return { value: parseFloat(i), unit: l.toLowerCase() };
      }
      function as(e, t) {
        var r = e.getRelativeLuminance(),
          a = t.getRelativeLuminance();
        return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
      }
      var Sb = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function ns(e) {
        var t = y.getComputedStyle(e).getPropertyValue("display");
        return Sb.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      function Ob(e, t) {
        var r = t.requiredContrastRatio;
        if (ns(e)) return !1;
        for (var a = Me(e); a && a.nodeType === 1 && !ns(a); ) a = Me(a);
        if (!!a) {
          this.relatedNodes([a]);
          var n = _a(e),
            i = _a(a),
            o = Ir(e),
            l = Ir(a),
            u = n && i ? as(n, i) : void 0;
          if ((u && (u = Math.floor(u * 100) / 100), u && u >= r)) return !0;
          var s = o && l ? as(o, l) : void 0;
          if ((s && (s = Math.floor(s * 100) / 100), s && s >= r)) return !0;
          if (!s) {
            var c,
              d =
                (c = He.get("bgColor")) !== null && c !== void 0
                  ? c
                  : "bgContrast";
            this.data({ messageKey: d }), He.clear();
            return;
          }
          if (!!u)
            return u === 1 && s > 1
              ? (this.data({
                  messageKey: "bgContrast",
                  contrastRatio: s,
                  requiredContrastRatio: r,
                  nodeBackgroundColor: o ? o.toHexString() : void 0,
                  parentBackgroundColor: l ? l.toHexString() : void 0,
                }),
                !1)
              : (this.data({
                  messageKey: "fgContrast",
                  contrastRatio: u,
                  requiredContrastRatio: r,
                  nodeColor: n ? n.toHexString() : void 0,
                  parentColor: i ? i.toHexString() : void 0,
                }),
                !1);
        }
      }
      var Ib = Ob,
        Pb = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function is(e) {
        var t = y.getComputedStyle(e).getPropertyValue("display");
        return Pb.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      function Nb(e) {
        if (is(e)) return !1;
        for (var t = Me(e); t && t.nodeType === 1 && !is(t); ) t = Me(t);
        if (!!t) return this.relatedNodes([t]), Xu(e, t);
      }
      var Mb = Nb;
      function Bb(e, t, r) {
        if (r.props.nodeName !== "input") return !0;
        var a = ["text", "search", "number", "tel"],
          n = ["text", "search", "url"],
          i = {
            bday: ["text", "search", "date"],
            email: ["text", "search", "email"],
            username: ["text", "search", "email"],
            "street-address": ["text"],
            tel: ["text", "search", "tel"],
            "tel-country-code": ["text", "search", "tel"],
            "tel-national": ["text", "search", "tel"],
            "tel-area-code": ["text", "search", "tel"],
            "tel-local": ["text", "search", "tel"],
            "tel-local-prefix": ["text", "search", "tel"],
            "tel-local-suffix": ["text", "search", "tel"],
            "tel-extension": ["text", "search", "tel"],
            "cc-number": a,
            "cc-exp": ["text", "search", "month", "tel"],
            "cc-exp-month": a,
            "cc-exp-year": a,
            "cc-csc": a,
            "transaction-amount": a,
            "bday-day": a,
            "bday-month": a,
            "bday-year": a,
            "new-password": ["text", "search", "password"],
            "current-password": ["text", "search", "password"],
            url: n,
            photo: n,
            impp: n,
          };
        P(t) === "object" &&
          Object.keys(t).forEach(function (d) {
            i[d] || (i[d] = []), (i[d] = i[d].concat(t[d]));
          });
        var o = r.attr("autocomplete"),
          l = o.split(/\s+/g).map(function (d) {
            return d.toLowerCase();
          }),
          u = l[l.length - 1];
        if (Lt.stateTerms.includes(u)) return !0;
        var s = i[u],
          c = r.hasAttr("type") ? K(r.attr("type")).toLowerCase() : "text";
        return (
          (c = pa().includes(c) ? c : "text"),
          typeof s > "u" ? c === "text" : s.includes(c)
        );
      }
      var qb = Bb;
      function Lb(e, t, r) {
        var a = r.attr("autocomplete") || "";
        return Nu(a, t);
      }
      var Vb = Lb;
      function jb(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0;
        if (!t.attribute || typeof t.attribute != "string")
          throw new TypeError(
            "attr-non-space-content requires options.attribute to be a string"
          );
        if (!r.hasAttr(t.attribute))
          return this.data({ messageKey: "noAttr" }), !1;
        var a = r.attr(t.attribute),
          n = !K(a);
        return n ? (this.data({ messageKey: "emptyAttr" }), !1) : !0;
      }
      var Hb = jb;
      function zb(e) {
        var t = e.some(function (r) {
          return r.result === !0;
        });
        return (
          t &&
            e.forEach(function (r) {
              r.result = !0;
            }),
          e
        );
      }
      var Ub = zb;
      function $b(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError(
            "has-descendant requires options.selector to be a string"
          );
        if (t.passForModal && wr()) return !0;
        var a = vt(r, t.selector, function (n) {
          return Ae(n);
        });
        return (
          this.relatedNodes(
            a.map(function (n) {
              return n.actualNode;
            })
          ),
          a.length > 0
        );
      }
      var Wb = $b;
      function Gb(e, t, r) {
        try {
          return K(Et(r)) !== "";
        } catch {
          return;
        }
      }
      function Yb(e, t, r) {
        return Fr(r, t.matcher);
      }
      var Kb = Yb;
      function Xb(e) {
        return e.filter(function (t) {
          return t.data !== "ignored";
        });
      }
      var Jb = Xb;
      function Qb(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError(
            "page-no-duplicate requires options.selector to be a string"
          );
        var a = "page-no-duplicate;" + t.selector;
        if (ae.get(a)) {
          this.data("ignored");
          return;
        }
        ae.set(a, !0);
        var n = vt(v._tree[0], t.selector, function (i) {
          return Ae(i);
        });
        return (
          typeof t.nativeScopeFilter == "string" &&
            (n = n.filter(function (i) {
              return (
                i.actualNode.hasAttribute("role") || !Yt(i, t.nativeScopeFilter)
              );
            })),
          this.relatedNodes(
            n
              .filter(function (i) {
                return i !== r;
              })
              .map(function (i) {
                return i.actualNode;
              })
          ),
          n.length <= 1
        );
      }
      var Zb = Qb;
      function ey(e) {
        var t = {};
        return e
          .filter(function (r) {
            if (!r.data) return !1;
            var a = r.data.toUpperCase();
            return t[a]
              ? (t[a].relatedNodes.push(r.relatedNodes[0]), !1)
              : ((t[a] = r), (r.relatedNodes = []), !0);
          })
          .map(function (r) {
            return (r.result = !!r.relatedNodes.length), r;
          });
      }
      var ty = ey;
      function ry(e, t, r) {
        return (
          _t(r) || (this.data(r.attr("accesskey")), this.relatedNodes([e])), !0
        );
      }
      var ay = ry;
      function ny(e, t, r) {
        var a = r.tabbableElements;
        if (!a) return !1;
        var n = a.filter(function (i) {
          return i !== r;
        });
        return n.length > 0;
      }
      var iy = ny;
      function oy(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"],
          n = r.tabbableElements;
        if (!n || !n.length) return !0;
        var i = n.filter(function (o) {
          return a.includes(o.props.nodeName);
        });
        return (
          this.relatedNodes(
            i.map(function (o) {
              return o.actualNode;
            })
          ),
          i.length === 0 || wr()
            ? !0
            : i.every(function (o) {
                var l = o.getComputedStylePropertyValue("pointer-events"),
                  u = parseInt(o.getComputedStylePropertyValue("width")),
                  s = parseInt(o.getComputedStylePropertyValue("height"));
                return (
                  o.actualNode.onfocus || ((u === 0 || s === 0) && l === "none")
                );
              })
            ? void 0
            : !1
        );
      }
      var ly = oy;
      function uy(e, t, r) {
        if (r.hasAttr("contenteditable") && a(r)) return !0;
        return st(r);
        function a(n) {
          var i = n.attr("contenteditable");
          if (i === "true" || i === "") return !0;
          if (i === "false") return !1;
          var o = $e(r.parent, "[contenteditable]");
          return o ? a(o) : !1;
        }
      }
      var sy = uy;
      function cy(e, t, r) {
        var a = r.tabbableElements.map(function (n) {
          var i = n.actualNode;
          return i;
        });
        if (!a || !a.length) return !0;
        if (wr()) {
          this.relatedNodes(a);
          return;
        }
        return !0;
      }
      var dy = cy;
      function fy(e, t, r) {
        var a = r.attr("tabindex"),
          n = Re(r) && a > -1;
        if (!n) return !1;
        try {
          return !Ue(r);
        } catch {
          return;
        }
      }
      var py = fy;
      function my(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"],
          n = r.tabbableElements;
        if (!n || !n.length) return !0;
        var i = n.filter(function (o) {
          return !a.includes(o.props.nodeName);
        });
        return (
          this.relatedNodes(
            i.map(function (o) {
              return o.actualNode;
            })
          ),
          i.length === 0 || wr()
            ? !0
            : i.every(function (o) {
                var l = o.getComputedStylePropertyValue("pointer-events"),
                  u = parseInt(o.getComputedStylePropertyValue("width")),
                  s = parseInt(o.getComputedStylePropertyValue("height"));
                return (
                  o.actualNode.onfocus || ((u === 0 || s === 0) && l === "none")
                );
              })
            ? void 0
            : !1
        );
      }
      var hy = my;
      function vy(e, t, r) {
        if (!!r.children)
          try {
            return !r.children.some(function (a) {
              return os(a);
            });
          } catch {
            return;
          }
      }
      function os(e) {
        if (st(e)) return !0;
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return !1;
        }
        return e.children.some(function (t) {
          return os(t);
        });
      }
      function gy(e) {
        var t = rr("landmark"),
          r = Me(e),
          a = se(e);
        for (this.data({ role: a }); r; ) {
          var n = r.getAttribute("role");
          if (
            (!n && r.nodeName.toUpperCase() !== "FORM" && (n = dt(r)),
            n && t.includes(n) && !(n === "main" && a === "complementary"))
          )
            return !1;
          r = Me(r);
        }
        return !0;
      }
      var by = gy;
      function yy(e, t, r) {
        if (!!r.children)
          try {
            var a = ls(r);
            if (!a.length) return !0;
            var n = a.filter(Dy);
            return (
              n.length > 0
                ? (this.data({ messageKey: "notHidden" }), this.relatedNodes(n))
                : this.relatedNodes(a),
              !1
            );
          } catch {
            return;
          }
      }
      function ls(e) {
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return [];
        }
        var t = [];
        return (
          e.children.forEach(function (r) {
            ct(r) === "widget" && Re(r)
              ? t.push(r)
              : t.push.apply(t, ie(ls(r)));
          }),
          t
        );
      }
      function Dy(e) {
        var t = parseInt(e.attr("tabindex"), 10);
        return !isNaN(t) && t < 0;
      }
      function wy(e, t, r) {
        var a = parseInt(r.attr("tabindex"), 10);
        return isNaN(a) ? !0 : a <= 0;
      }
      var _y = wy;
      function xy(e, t, r) {
        var a = r.attr("alt"),
          n = /^\s+$/;
        return typeof a == "string" && n.test(a);
      }
      var Ey = xy;
      function Ay(e, t, r) {
        if (["none", "presentation"].includes(se(r))) return !1;
        var a = $e(r, t.parentSelector);
        if (!a) return !1;
        var n = ut(a, !0).toLowerCase();
        return n === "" ? !1 : n === Ue(r).toLowerCase();
      }
      var Fy = Ay;
      function Cy(e, t, r) {
        var a = this;
        if (!r.attr("id")) return !1;
        if (!!r.actualNode) {
          var n = je(r.actualNode),
            i = Ee(r.attr("id")),
            o = Array.from(n.querySelectorAll('label[for="'.concat(i, '"]')));
          if ((this.relatedNodes(o), !o.length)) return !1;
          try {
            return o.some(function (l) {
              if (Qe(l)) {
                var u = K(qt(l, { inControlContext: !0, startNode: r }));
                return a.data({ explicitLabel: u }), !!u;
              } else return !0;
            });
          } catch {
            return;
          }
        }
      }
      var ky = Cy;
      function Ry(e, t, r) {
        var a = ba(r),
          n = e.getAttribute("title");
        if (!a) return !1;
        if (!n && ((n = ""), e.getAttribute("aria-describedby"))) {
          var i = it(e, "aria-describedby");
          n = i
            .map(function (o) {
              return o ? qt(o) : "";
            })
            .join("");
        }
        return K(n) === K(a);
      }
      var Ty = Ry;
      function Sy(e, t, r) {
        if (r.hasAttr("id")) {
          if (!r.actualNode) return;
          var a = je(e),
            n = Ee(e.getAttribute("id")),
            i = a.querySelector('label[for="'.concat(n, '"]'));
          if (i && !Ae(i)) {
            var o;
            try {
              o = Ue(r).trim();
            } catch {
              return;
            }
            var l = o === "";
            return l;
          }
        }
        return !1;
      }
      var Oy = Sy;
      function Iy(e, t, r) {
        try {
          var a = $e(r, "label");
          if (a) {
            var n = K(Ue(a, { inControlContext: !0, startNode: r }));
            return (
              a.actualNode && this.relatedNodes([a.actualNode]),
              this.data({ implicitLabel: n }),
              !!n
            );
          }
          return !1;
        } catch {
          return;
        }
      }
      var Py = Iy;
      function us(e, t) {
        var r = ss(t),
          a = ss(e);
        return !r || !a ? !1 : r.includes(a);
      }
      function ss(e) {
        var t = Tr(e, { emoji: !0, nonBmp: !0, punctuations: !0 });
        return K(t);
      }
      function Ny(e, t, r) {
        var a = t || {},
          n = a.pixelThreshold,
          i = a.occuranceThreshold,
          o = qt(e).toLowerCase();
        if (!(ni(o) < 1)) {
          var l = K(
            Et(r, {
              subtreeDescendant: !0,
              ignoreIconLigature: !0,
              pixelThreshold: n,
              occuranceThreshold: i,
            })
          ).toLowerCase();
          return l ? (ni(l) < 1 ? (us(l, o) ? !0 : void 0) : us(l, o)) : !0;
        }
      }
      var My = Ny;
      function By(e) {
        var t = Ee(e.getAttribute("id")),
          r = e.parentNode,
          a = je(e);
        a = a.documentElement || a;
        var n = Array.from(a.querySelectorAll('label[for="'.concat(t, '"]')));
        for (
          n.length &&
          (n = n.filter(function (l) {
            return !_t(l);
          }));
          r;

        )
          r.nodeName.toUpperCase() === "LABEL" &&
            n.indexOf(r) === -1 &&
            n.push(r),
            (r = r.parentNode);
        if ((this.relatedNodes(n), n.length > 1)) {
          var i = n.filter(function (l) {
            return Ae(l);
          });
          if (i.length > 1) return;
          var o = it(e, "aria-labelledby");
          return o.includes(i[0]) ? !1 : void 0;
        }
        return !1;
      }
      var qy = By;
      function Ly(e, t, r) {
        var a = ba(r),
          n = va(r),
          i = r.attr("aria-describedby");
        return !a && !!(n || i);
      }
      var Vy = Ly;
      function jy(e) {
        var t = [];
        return e.filter(function (r) {
          var a = function (o) {
              return (
                r.data.role === o.data.role &&
                r.data.accessibleText === o.data.accessibleText
              );
            },
            n = t.find(a);
          return n
            ? ((n.result = !1), n.relatedNodes.push(r.relatedNodes[0]), !1)
            : (t.push(r), (r.relatedNodes = []), !0);
        });
      }
      var Hy = jy;
      function zy(e, t, r) {
        var a = se(e),
          n = Ue(r);
        return (
          (n = n ? n.toLowerCase() : null),
          this.data({ role: a, accessibleText: n }),
          this.relatedNodes([e]),
          !0
        );
      }
      var Uy = zy;
      function di(e) {
        return (e || "").trim() !== "";
      }
      function $y(e, t, r) {
        var a = typeof R < "u" ? Hr(R) : !1;
        if (
          t.attributes.includes("xml:lang") &&
          t.attributes.includes("lang") &&
          di(r.attr("xml:lang")) &&
          !di(r.attr("lang")) &&
          !a
        )
          return this.data({ messageKey: "noXHTML" }), !1;
        var n = t.attributes.some(function (i) {
          return di(r.attr(i));
        });
        return n ? !0 : (this.data({ messageKey: "noLang" }), !1);
      }
      var Wy = $y;
      function Gy(e, t, r) {
        var a = [];
        return (
          t.attributes.forEach(function (n) {
            var i = r.attr(n);
            if (typeof i == "string") {
              var o = Pt(i),
                l = t.value ? !t.value.map(Pt).includes(o) : !ma(o);
              ((o !== "" && l) || (i !== "" && !K(i))) &&
                a.push(n + '="' + r.attr(n) + '"');
            }
          }),
          !a.length || (r.props.nodeName !== "html" && !En(r))
            ? !1
            : (this.data(a), !0)
        );
      }
      var Yy = Gy;
      function Ky(e, t, r) {
        var a = Pt(r.attr("lang")),
          n = Pt(r.attr("xml:lang"));
        return a === n;
      }
      var Xy = Ky;
      function Jy(e) {
        var t = Me(e),
          r = t.nodeName.toUpperCase(),
          a = ge(t);
        return (
          r === "DIV" &&
            ["presentation", "none", null].includes(a) &&
            ((t = Me(t)), (r = t.nodeName.toUpperCase()), (a = ge(t))),
          r !== "DL"
            ? !1
            : !!(!a || ["presentation", "none", "list"].includes(a))
        );
      }
      var Qy = Jy;
      function Zy(e) {
        var t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = [],
          n = [];
        if (!!r.children) {
          for (var i = cs(r.children); i.length; ) {
            var o,
              l = i.shift(),
              u = l.vChild,
              s = l.nested;
            if (t.divGroups && !s && tD(u)) {
              if (!u.children) return;
              var c = cs(u.children, !0);
              i.push.apply(i, ie(c));
              continue;
            }
            var d = eD(u, s, t);
            !d ||
              (n.includes(d) || n.push(d),
              (u == null || (o = u.actualNode) === null || o === void 0
                ? void 0
                : o.nodeType) === 1 && a.push(u.actualNode));
          }
          return n.length === 0
            ? !1
            : (this.data({ values: n.join(", ") }), this.relatedNodes(a), !0);
        }
      }
      function eD(e, t, r) {
        var a = r.validRoles,
          n = a === void 0 ? [] : a,
          i = r.validNodeNames,
          o = i === void 0 ? [] : i,
          l = e.props,
          u = l.nodeName,
          s = l.nodeType,
          c = l.nodeValue,
          d = t ? "div > " : "";
        if (s === 3 && c.trim() !== "") return d + "#text";
        if (s !== 1 || !Ae(e)) return !1;
        var f = ge(e);
        return f
          ? n.includes(f)
            ? !1
            : d + "[role=".concat(f, "]")
          : o.includes(u)
          ? !1
          : d + u;
      }
      function tD(e) {
        return e.props.nodeName === "div" && ge(e) === null;
      }
      function cs(e) {
        var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return e.map(function (r) {
          return { vChild: r, nested: t };
        });
      }
      function rD(e, t, r) {
        var a = r.parent;
        if (!!a) {
          var n = a.props.nodeName,
            i = ge(a);
          return ["presentation", "none", "list"].includes(i)
            ? !0
            : i && Zt(i)
            ? (this.data({ messageKey: "roleNotValid" }), !1)
            : ["ul", "ol", "menu"].includes(n);
        }
      }
      function aD(e, t, r) {
        var a = ["definition", "term", "list"],
          n = { badNodes: [], hasNonEmptyTextNode: !1 },
          i = r.children.reduce(function (l, u) {
            var s = u.actualNode;
            return s.nodeName.toUpperCase() === "DIV" && se(s) === null
              ? l.concat(u.children)
              : l.concat(u);
          }, []),
          o = i.reduce(function (l, u) {
            var s = u.actualNode,
              c = s.nodeName.toUpperCase();
            if (s.nodeType === 1 && Ae(s)) {
              var d = ge(s);
              ((c !== "DT" && c !== "DD") || d) &&
                (a.includes(d) || l.badNodes.push(s));
            } else s.nodeType === 3 && s.nodeValue.trim() !== "" && (l.hasNonEmptyTextNode = !0);
            return l;
          }, n);
        return (
          o.badNodes.length && this.relatedNodes(o.badNodes),
          !!o.badNodes.length || o.hasNonEmptyTextNode
        );
      }
      var nD = aD;
      function iD(e, t, r) {
        var a = !1,
          n = !1,
          i = !0,
          o = [],
          l = [],
          u = [];
        return (
          r.children.forEach(function (s) {
            var c = s.actualNode;
            if (c.nodeType === 3 && c.nodeValue.trim() !== "") {
              a = !0;
              return;
            }
            if (!(c.nodeType !== 1 || !Ae(c))) {
              i = !1;
              var d = c.nodeName.toUpperCase() === "LI",
                f = se(s),
                p = f === "listitem";
              !d && !p && o.push(c),
                d && !p && (l.push(c), u.includes(f) || u.push(f)),
                p && (n = !0);
            }
          }),
          a || o.length
            ? (this.relatedNodes(o), !0)
            : i || n
            ? !1
            : (this.relatedNodes(l),
              this.data({ messageKey: "roleNotValid", roles: u.join(", ") }),
              !0)
        );
      }
      var oD = iD;
      function lD(e, t, r) {
        var a = r.children;
        if (!a || !a.length) return !1;
        for (var n = !1, i = !1, o, l = 0; l < a.length; l++) {
          if (
            ((o = a[l].props.nodeName.toUpperCase()),
            o === "DT" && (n = !0),
            n && o === "DD")
          )
            return !1;
          o === "DD" && (i = !0);
        }
        return n || i;
      }
      var uD = lD;
      function sD(e, t, r) {
        var a = Ye(r, "track"),
          n = a.some(function (i) {
            return (i.attr("kind") || "").toLowerCase() === "captions";
          });
        return n ? !1 : void 0;
      }
      var cD = sD,
        ds = " > ";
      function dD(e) {
        var t = {};
        return e.filter(function (r) {
          var a = r.node.ancestry[r.node.ancestry.length - 1] !== "html";
          if (a) {
            var n = r.node.ancestry.flat(1 / 0).join(ds);
            return (t[n] = r), !0;
          }
          var i = r.node.ancestry
            .slice(0, r.node.ancestry.length - 1)
            .flat(1 / 0)
            .join(ds);
          return t[i] && (t[i].result = !0), !1;
        });
      }
      var fD = dD;
      function pD(e, t) {
        return t.isViolation ? !1 : void 0;
      }
      var mD = pD;
      function hD(e, t) {
        if (!e.duration) {
          console.warn("axe.utils.preloadMedia did not load metadata");
          return;
        }
        var r = t.allowedDuration,
          a = r === void 0 ? 3 : r,
          n = i(e);
        if (n <= a && !e.hasAttribute("loop")) return !0;
        if (!e.hasAttribute("controls")) return !1;
        return !0;
        function i(u) {
          if (!u.currentSrc) return 0;
          var s = o(u.currentSrc);
          return s
            ? s.length === 1
              ? Math.abs(u.duration - s[0])
              : Math.abs(s[1] - s[0])
            : Math.abs(u.duration - (u.currentTime || 0));
        }
        function o(u) {
          var s = u.match(/#t=(.*)/);
          if (!!s) {
            var c = ve(s, 2),
              d = c[1],
              f = d.split(",");
            return f.map(function (p) {
              return /:/.test(p) ? l(p) : parseFloat(p);
            });
          }
        }
        function l(u) {
          for (var s = u.split(":"), c = 0, d = 1; s.length > 0; )
            (c += d * parseInt(s.pop(), 10)), (d *= 60);
          return parseFloat(c);
        }
      }
      var vD = hD;
      function gD(e, t, r, a) {
        var n = a || {},
          i = n.cssom,
          o = i === void 0 ? void 0 : i,
          l = t || {},
          u = l.degreeThreshold,
          s = u === void 0 ? 0 : u;
        if (!o || !o.length) return;
        for (
          var c = !1,
            d = [],
            f = h(o),
            p = function () {
              var J = b[m],
                $ = f[J],
                te = $.root,
                le = $.rules,
                pe = le.filter(g);
              if (!pe.length) return "continue";
              pe.forEach(function (Q) {
                var oe = Q.cssRules;
                Array.from(oe).forEach(function (O) {
                  var ce = x(O);
                  if (ce && O.selectorText.toUpperCase() !== "HTML") {
                    var w =
                      Array.from(te.querySelectorAll(O.selectorText)) || [];
                    d = d.concat(w);
                  }
                  c = c || ce;
                });
              });
            },
            m = 0,
            b = Object.keys(f);
          m < b.length;
          m++
        )
          var D = p();
        if (!c) return !0;
        return d.length && this.relatedNodes(d), !1;
        function h(q) {
          return q.reduce(function (J, $) {
            var te = $.sheet,
              le = $.root,
              pe = $.shadowId,
              Q = pe || "topDocument";
            if ((J[Q] || (J[Q] = { root: le, rules: [] }), !te || !te.cssRules))
              return J;
            var oe = Array.from(te.cssRules);
            return (J[Q].rules = J[Q].rules.concat(oe)), J;
          }, {});
        }
        function g(q) {
          var J = q.type,
            $ = q.cssText;
          return J !== 4
            ? !1
            : /orientation:\s*landscape/i.test($) ||
                /orientation:\s*portrait/i.test($);
        }
        function x(q) {
          var J = q.selectorText,
            $ = q.style;
          if (!J || $.length <= 0) return !1;
          var te = $.transform || $.webkitTransform || $.msTransform || !1;
          if (!te) return !1;
          var le = te.match(
            /(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/
          );
          if (!le) return !1;
          var pe = ve(le, 3),
            Q = pe[1],
            oe = pe[2],
            O = E(Q, oe);
          return !O || ((O = Math.abs(O)), Math.abs(O - 180) % 180 <= s)
            ? !1
            : Math.abs(O - 90) % 90 <= s;
        }
        function E(q, J) {
          switch (q) {
            case "rotate":
            case "rotateZ":
              return C(J);
            case "rotate3d":
              var $ = J.split(",").map(function (Q) {
                  return Q.trim();
                }),
                te = ve($, 4),
                le = te[2],
                pe = te[3];
              return parseInt(le) === 0 ? void 0 : C(pe);
            case "matrix":
            case "matrix3d":
              return N(J);
            default:
              return;
          }
        }
        function C(q) {
          var J = q.match(/(deg|grad|rad|turn)/) || [],
            $ = ve(J, 1),
            te = $[0];
          if (!!te) {
            var le = parseFloat(q.replace(te, ""));
            switch (te) {
              case "rad":
                return M(le);
              case "grad":
                return H(le);
              case "turn":
                return ee(le);
              case "deg":
              default:
                return parseInt(le);
            }
          }
        }
        function N(q) {
          var J = q.split(",");
          if (J.length <= 6) {
            var $ = ve(J, 2),
              te = $[0],
              le = $[1],
              pe = Math.atan2(parseFloat(le), parseFloat(te));
            return M(pe);
          }
          var Q = parseFloat(J[8]),
            oe = Math.asin(Q),
            O = Math.cos(oe),
            ce = Math.acos(parseFloat(J[0]) / O);
          return M(ce);
        }
        function M(q) {
          return Math.round(q * (180 / Math.PI));
        }
        function H(q) {
          return (
            (q = q % 400), q < 0 && (q += 400), Math.round((q / 400) * 360)
          );
        }
        function ee(q) {
          return Math.round(360 / (1 / q));
        }
      }
      var bD = gD;
      function yD(e, t, r) {
        var a = t || {},
          n = a.scaleMinimum,
          i = n === void 0 ? 2 : n,
          o = a.lowerBound,
          l = o === void 0 ? !1 : o,
          u = r.attr("content") || "";
        if (!u) return !0;
        var s = u.split(/[;,]/).reduce(function (d, f) {
          var p = f.trim();
          if (!p) return d;
          var m = p.split("="),
            b = ve(m, 2),
            D = b[0],
            h = b[1];
          if (!D || !h) return d;
          var g = D.toLowerCase().trim(),
            x = h.toLowerCase().trim();
          return (
            g === "maximum-scale" && x === "yes" && (x = 1),
            (g === "maximum-scale" && parseFloat(x) < 0) || (d[g] = x),
            d
          );
        }, {});
        if (l && s["maximum-scale"] && parseFloat(s["maximum-scale"]) < l)
          return !0;
        if (!l && s["user-scalable"] === "no")
          return this.data("user-scalable=no"), !1;
        var c = parseFloat(s["user-scalable"]);
        return !l && s["user-scalable"] && (c || c === 0) && c > -1 && c < 1
          ? (this.data("user-scalable"), !1)
          : s["maximum-scale"] && parseFloat(s["maximum-scale"]) < i
          ? (this.data("maximum-scale"), !1)
          : !0;
      }
      var DD = yD,
        wD = 0.05;
      function _D(e, t, r) {
        var a = (t == null ? void 0 : t.minOffset) || 24,
          n = [],
          i = a,
          o = ft(mn(r, a)),
          l;
        try {
          for (o.s(); !(l = o.n()).done; ) {
            var u = l.value;
            if (!(ct(u) !== "widget" || !Re(u))) {
              var s = xD(Wo(r, u));
              s + wD >= a || ((i = Math.min(i, s)), n.push(u));
            }
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
        if (n.length === 0)
          return this.data({ closestOffset: i, minOffset: a }), !0;
        if (
          (this.relatedNodes(
            n.map(function (c) {
              var d = c.actualNode;
              return d;
            })
          ),
          !n.some(st))
        ) {
          this.data({
            messageKey: "nonTabbableNeighbor",
            closestOffset: i,
            minOffset: a,
          });
          return;
        }
        return (
          this.data({ closestOffset: i, minOffset: a }), st(r) ? !1 : void 0
        );
      }
      function xD(e) {
        return Math.round(e * 10) / 10;
      }
      var fs = 0.05;
      function ED(e, t, r) {
        var a = (t == null ? void 0 : t.minSize) || 24,
          n = r.boundingClientRect,
          i = pi.bind(null, a),
          o = mn(r),
          l = AD(r, o),
          u = FD(r, o),
          s = u.fullyObscuringElms,
          c = u.partialObscuringElms;
        if (s.length && !l.length)
          return (
            this.relatedNodes(xa(s)), this.data({ messageKey: "obscured" }), !0
          );
        var d = st(r) ? !1 : void 0;
        if (!i(n) && !l.length) return this.data(ne({ minSize: a }, fi(n))), d;
        var f = RD(c),
          p = CD(r, f);
        if (l.length && (s.length || !i(p || n))) {
          this.data({ minSize: a, messageKey: "contentOverflow" }),
            this.relatedNodes(xa(l));
          return;
        }
        if (f.length !== 0 && !i(p)) {
          var m = f.every(st),
            b = "partiallyObscured".concat(m ? "" : "NonTabbable");
          return (
            this.data(ne({ messageKey: b, minSize: a }, fi(p))),
            this.relatedNodes(xa(f)),
            m ? d : void 0
          );
        }
        return (
          this.data(ne({ minSize: a }, fi(p || n))),
          this.relatedNodes(xa(f)),
          !0
        );
      }
      function AD(e, t) {
        return t.filter(function (r) {
          return !ps(r, e) && ms(e, r);
        });
      }
      function FD(e, t) {
        var r = [],
          a = [],
          n = ft(t),
          i;
        try {
          for (n.s(); !(i = n.n()).done; ) {
            var o = i.value;
            !ms(e, o) &&
              Go(e, o) &&
              TD(o) !== "none" &&
              (ps(e, o) ? r.push(o) : a.push(o));
          }
        } catch (l) {
          n.e(l);
        } finally {
          n.f();
        }
        return { fullyObscuringElms: r, partialObscuringElms: a };
      }
      function CD(e, t) {
        var r = e.boundingClientRect;
        if (t.length === 0) return null;
        var a = t.map(function (i) {
            var o = i.boundingClientRect;
            return o;
          }),
          n = Yo(r, a);
        return kD(n);
      }
      function kD(e, t) {
        return e.reduce(function (r, a) {
          var n = pi(t, r),
            i = pi(t, a);
          if (n !== i) return n ? r : a;
          var o = r.width * r.height,
            l = a.width * a.height;
          return o > l ? r : a;
        });
      }
      function RD(e) {
        return e.filter(function (t) {
          return ct(t) === "widget" && Re(t);
        });
      }
      function ps(e, t) {
        var r = e.boundingClientRect,
          a = t.boundingClientRect;
        return (
          r.top >= a.top &&
          r.left >= a.left &&
          r.bottom <= a.bottom &&
          r.right <= a.right
        );
      }
      function TD(e) {
        return e.getComputedStylePropertyValue("pointer-events");
      }
      function fi(e) {
        return {
          width: Math.round(e.width * 10) / 10,
          height: Math.round(e.height * 10) / 10,
        };
      }
      function ms(e, t) {
        return e.actualNode.contains(t.actualNode) && !st(t);
      }
      function pi(e, t) {
        var r = t.width,
          a = t.height;
        return r + fs >= e && a + fs >= e;
      }
      function xa(e) {
        return e.map(function (t) {
          var r = t.actualNode;
          return r;
        });
      }
      function SD(e) {
        var t = ID(e);
        return (
          e.forEach(function (r) {
            r.result = OD(r, t);
          }),
          e
        );
      }
      function OD(e, t) {
        var r,
          a,
          n,
          i,
          o = hs(t, e.node.ancestry),
          l =
            (r = (a = t[o]) === null || a === void 0 ? void 0 : a.level) !==
              null && r !== void 0
              ? r
              : -1,
          u =
            (n = (i = t[o - 1]) === null || i === void 0 ? void 0 : i.level) !==
              null && n !== void 0
              ? n
              : -1;
        if (o === 0) return !0;
        if (l !== -1) return l - u <= 1;
      }
      function ID(e) {
        (e = ie(e)),
          e.sort(function (r, a) {
            var n = r.node,
              i = a.node;
            return n.ancestry.length - i.ancestry.length;
          });
        var t = e.reduce(PD, []);
        return t.filter(function (r) {
          var a = r.level;
          return a !== -1;
        });
      }
      function PD(e, t) {
        var r,
          a = (r = t.data) === null || r === void 0 ? void 0 : r.headingOrder,
          n = vs(t.node.ancestry, 1);
        if (!a) return e;
        var i = a.map(function (l) {
            return MD(l, n);
          }),
          o = ND(e, n);
        return (
          o === -1
            ? e.push.apply(e, ie(i))
            : e.splice.apply(e, [o, 0].concat(ie(i))),
          e
        );
      }
      function ND(e, t) {
        for (; t.length; ) {
          var r = hs(e, t);
          if (r !== -1) return r;
          t = vs(t, 1);
        }
        return -1;
      }
      function hs(e, t) {
        return e.findIndex(function (r) {
          return Vn(r.ancestry, t);
        });
      }
      function MD(e, t) {
        var r = t.concat(e.ancestry);
        return ne({}, e, { ancestry: r });
      }
      function vs(e, t) {
        return e.slice(0, e.length - t);
      }
      function BD(e) {
        var t = se(e),
          r = t && t.includes("heading"),
          a = e.attr("aria-level"),
          n = parseInt(a, 10),
          i = e.props.nodeName.match(/h(\d)/) || [],
          o = ve(i, 2),
          l = o[1];
        return r
          ? l && !a
            ? parseInt(l, 10)
            : isNaN(n) || n < 1
            ? l
              ? parseInt(l, 10)
              : 2
            : n || -1
          : -1;
      }
      function qD() {
        var e = ae.get("headingOrder");
        if (e) return !0;
        var t = "h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",
          r = vt(v._tree[0], t, Ae);
        return (
          (e = r.map(function (a) {
            return { ancestry: [Ur(a.actualNode)], level: BD(a) };
          })),
          this.data({ headingOrder: e }),
          ae.set("headingOrder", r),
          !0
        );
      }
      var LD = qD;
      function gs(e, t) {
        if (!e || !t) return !1;
        var r = Object.getOwnPropertyNames(e),
          a = Object.getOwnPropertyNames(t);
        if (r.length !== a.length) return !1;
        var n = r.every(function (i) {
          var o = e[i],
            l = t[i];
          return P(o) !== P(l)
            ? !1
            : P(o) === "object" || P(l) === "object"
            ? gs(o, l)
            : o === l;
        });
        return n;
      }
      function VD(e) {
        if (e.length < 2) return e;
        for (
          var t = e.filter(function (l) {
              var u = l.result;
              return u !== void 0;
            }),
            r = [],
            a = {},
            n = function (u) {
              var s,
                c = t[u],
                d = c.data,
                f = d.name,
                p = d.urlProps;
              if (a[f]) return "continue";
              var m = t.filter(function (D, h) {
                  var g = D.data;
                  return g.name === f && h !== u;
                }),
                b = m.every(function (D) {
                  var h = D.data;
                  return gs(h.urlProps, p);
                });
              m.length && !b && (c.result = void 0),
                (c.relatedNodes = []),
                (s = c.relatedNodes).push.apply(
                  s,
                  ie(
                    m.map(function (D) {
                      return D.relatedNodes[0];
                    })
                  )
                ),
                (a[f] = m),
                r.push(c);
            },
            i = 0;
          i < t.length;
          i++
        )
          var o = n(i);
        return r;
      }
      var jD = VD,
        bs = {};
      ke(bs, {
        aria: function () {
          return eu;
        },
        color: function () {
          return Yu;
        },
        dom: function () {
          return un;
        },
        forms: function () {
          return ys;
        },
        matches: function () {
          return Fr;
        },
        math: function () {
          return $o;
        },
        standards: function () {
          return Wu;
        },
        table: function () {
          return ws;
        },
        text: function () {
          return Rr;
        },
        utils: function () {
          return Ma;
        },
      });
      var ys = {};
      ke(ys, {
        isAriaCombobox: function () {
          return Fu;
        },
        isAriaListbox: function () {
          return Au;
        },
        isAriaRange: function () {
          return Cu;
        },
        isAriaTextbox: function () {
          return Eu;
        },
        isDisabled: function () {
          return Pr;
        },
        isNativeSelect: function () {
          return xu;
        },
        isNativeTextbox: function () {
          return _u;
        },
      });
      var HD = ["fieldset", "button", "select", "input", "textarea"];
      function Ds(e) {
        var t = e._isDisabled;
        if (typeof t == "boolean") return t;
        var r = e.props.nodeName,
          a = e.attr("aria-disabled");
        return (
          HD.includes(r) && e.hasAttr("disabled")
            ? (t = !0)
            : a
            ? (t = a.toLowerCase() === "true")
            : e.parent
            ? (t = Ds(e.parent))
            : (t = !1),
          (e._isDisabled = t),
          t
        );
      }
      var Pr = Ds,
        ws = {};
      ke(ws, {
        getAllCells: function () {
          return mi;
        },
        getCellPosition: function () {
          return ha;
        },
        getHeaders: function () {
          return Ea;
        },
        getScope: function () {
          return Jn;
        },
        isColumnHeader: function () {
          return er;
        },
        isDataCell: function () {
          return xs;
        },
        isDataTable: function () {
          return Aa;
        },
        isHeader: function () {
          return YD;
        },
        isRowHeader: function () {
          return tr;
        },
        toArray: function () {
          return gt;
        },
        toGrid: function () {
          return gt;
        },
        traverse: function () {
          return hi;
        },
      });
      function zD(e) {
        var t,
          r,
          a,
          n,
          i = [];
        for (t = 0, a = e.rows.length; t < a; t++)
          for (r = 0, n = e.rows[t].cells.length; r < n; r++)
            i.push(e.rows[t].cells[r]);
        return i;
      }
      var mi = zD;
      function _s(e, t, r) {
        for (
          var a = e === "row" ? "_rowHeaders" : "_colHeaders",
            n = e === "row" ? tr : er,
            i = r[t.y][t.x],
            o = i.colSpan - 1,
            l = i.getAttribute("rowspan"),
            u = parseInt(l) === 0 || i.rowspan === 0 ? r.length : i.rowSpan,
            s = u - 1,
            c = t.y + s,
            d = t.x + o,
            f = e === "row" ? t.y : 0,
            p = e === "row" ? 0 : t.x,
            m,
            b = [],
            D = c;
          D >= f && !m;
          D--
        )
          for (var h = d; h >= p; h--) {
            var g = r[D] ? r[D][h] : void 0;
            if (!!g) {
              var x = v.utils.getNodeFromTree(g);
              if (x[a]) {
                m = x[a];
                break;
              }
              b.push(g);
            }
          }
        return (
          (m = (m || []).concat(b.filter(n))),
          b.forEach(function (E) {
            var C = v.utils.getNodeFromTree(E);
            C[a] = m;
          }),
          m
        );
      }
      function UD(e, t) {
        if (e.getAttribute("headers")) {
          var r = it(e, "headers");
          if (
            r.filter(function (o) {
              return o;
            }).length
          )
            return r;
        }
        t || (t = gt(Kt(e, "table")));
        var a = ha(e, t),
          n = _s("row", a, t),
          i = _s("col", a, t);
        return [].concat(n, i).reverse();
      }
      var Ea = UD;
      function $D(e) {
        if (!e.children.length && !e.textContent.trim()) return !1;
        var t = e.getAttribute("role");
        return Zt(t)
          ? ["cell", "gridcell"].includes(t)
          : e.nodeName.toUpperCase() === "TD";
      }
      var xs = $D;
      function WD(e) {
        var t = (e.getAttribute("role") || "").toLowerCase();
        if ((t === "presentation" || t === "none") && !Re(e)) return !1;
        if (
          e.getAttribute("contenteditable") === "true" ||
          Kt(e, '[contenteditable="true"]') ||
          t === "grid" ||
          t === "treegrid" ||
          t === "table" ||
          ct(t) === "landmark"
        )
          return !0;
        if (e.getAttribute("datatable") === "0") return !1;
        if (e.getAttribute("summary") || e.tHead || e.tFoot || e.caption)
          return !0;
        for (var r = 0, a = e.children.length; r < a; r++)
          if (e.children[r].nodeName.toUpperCase() === "COLGROUP") return !0;
        for (var n = 0, i = e.rows.length, o, l, u = !1, s = 0; s < i; s++) {
          o = e.rows[s];
          for (var c = 0, d = o.cells.length; c < d; c++) {
            if (
              ((l = o.cells[c]),
              l.nodeName.toUpperCase() === "TH" ||
                (!u &&
                  (l.offsetWidth !== l.clientWidth ||
                    l.offsetHeight !== l.clientHeight) &&
                  (u = !0),
                l.getAttribute("scope") ||
                  l.getAttribute("headers") ||
                  l.getAttribute("abbr")) ||
                ["columnheader", "rowheader"].includes(
                  (l.getAttribute("role") || "").toLowerCase()
                ) ||
                (l.children.length === 1 &&
                  l.children[0].nodeName.toUpperCase() === "ABBR"))
            )
              return !0;
            n++;
          }
        }
        if (e.getElementsByTagName("table").length || i < 2) return !1;
        var f = e.rows[Math.ceil(i / 2)];
        if (f.cells.length === 1 && f.cells[0].colSpan === 1) return !1;
        if (f.cells.length >= 5 || u) return !0;
        var p, m;
        for (s = 0; s < i; s++) {
          if (
            ((o = e.rows[s]),
            (p &&
              p !==
                y.getComputedStyle(o).getPropertyValue("background-color")) ||
              ((p = y.getComputedStyle(o).getPropertyValue("background-color")),
              m &&
                m !==
                  y.getComputedStyle(o).getPropertyValue("background-image")))
          )
            return !0;
          m = y.getComputedStyle(o).getPropertyValue("background-image");
        }
        return i >= 20
          ? !0
          : !(
              cn(e).width > Zr(y).width * 0.95 ||
              n < 10 ||
              e.querySelector("object, embed, iframe, applet")
            );
      }
      var Aa = WD;
      function GD(e) {
        if (er(e) || tr(e)) return !0;
        if (e.getAttribute("id")) {
          var t = Ee(e.getAttribute("id"));
          return !!R.querySelector('[headers~="'.concat(t, '"]'));
        }
        return !1;
      }
      var YD = GD;
      function Es(e, t, r, a) {
        var n,
          i = r[t.y] ? r[t.y][t.x] : void 0;
        return i
          ? typeof a == "function" && ((n = a(i, t, r)), n === !0)
            ? [i]
            : ((n = Es(e, { x: t.x + e.x, y: t.y + e.y }, r, a)),
              n.unshift(i),
              n)
          : [];
      }
      function KD(e, t, r, a) {
        if (
          (Array.isArray(t) && ((a = r), (r = t), (t = { x: 0, y: 0 })),
          typeof e == "string")
        )
          switch (e) {
            case "left":
              e = { x: -1, y: 0 };
              break;
            case "up":
              e = { x: 0, y: -1 };
              break;
            case "right":
              e = { x: 1, y: 0 };
              break;
            case "down":
              e = { x: 0, y: 1 };
              break;
          }
        return Es(e, { x: t.x + e.x, y: t.y + e.y }, r, a);
      }
      var hi = KD;
      function XD(e, t, r) {
        var a = Rr.accessibleTextVirtual(r),
          n = Rr.sanitize(
            Rr.removeUnicode(a, { emoji: !0, nonBmp: !0, punctuations: !0 })
          ).toLowerCase();
        if (!!n) {
          var i = { name: n, urlProps: un.urlPropsFromAttribute(e, "href") };
          return this.data(i), this.relatedNodes([e]), !0;
        }
      }
      var JD = XD;
      function QD(e, t, r) {
        var a = Ye(r, "a[href]");
        return a.some(function (n) {
          return /^#[^/!]/.test(n.attr("href"));
        });
      }
      var ZD = QD,
        ew = /[;,\s]/,
        tw = /^[0-9.]+$/;
      function rw(e, t, r) {
        var a = t || {},
          n = a.minDelay,
          i = a.maxDelay,
          o = (r.attr("content") || "").trim(),
          l = o.split(ew),
          u = ve(l, 1),
          s = u[0];
        if (!s.match(tw)) return !0;
        var c = parseFloat(s);
        return (
          this.data({ redirectDelay: c }),
          (typeof n == "number" && c <= t.minDelay) ||
            (typeof i == "number" && c > t.maxDelay)
        );
      }
      function aw(e) {
        switch (e) {
          case "lighter":
            return 100;
          case "normal":
            return 400;
          case "bold":
            return 700;
          case "bolder":
            return 900;
        }
        return (e = parseInt(e)), isNaN(e) ? 400 : e;
      }
      function nw(e) {
        for (
          var t = e, r = e.textContent.trim(), a = r;
          a === r && t !== void 0;

        ) {
          var n = -1;
          if (((e = t), e.children.length === 0)) return e;
          do n++, (a = e.children[n].textContent.trim());
          while (a === "" && n + 1 < e.children.length);
          t = e.children[n];
        }
        return e;
      }
      function vi(e) {
        var t = y.getComputedStyle(nw(e));
        return {
          fontWeight: aw(t.getPropertyValue("font-weight")),
          fontSize: parseInt(t.getPropertyValue("font-size")),
          isItalic: t.getPropertyValue("font-style") === "italic",
        };
      }
      function As(e, t, r) {
        return r.reduce(function (a, n) {
          return (
            a ||
            ((!n.size || e.fontSize / n.size > t.fontSize) &&
              (!n.weight || e.fontWeight - n.weight > t.fontWeight) &&
              (!n.italic || (e.isItalic && !t.isItalic)))
          );
        }, !1);
      }
      function iw(e, t, r) {
        var a = Array.from(e.parentNode.children),
          n = a.indexOf(e);
        t = t || {};
        var i = t.margins || [],
          o = a.slice(n + 1).find(function (D) {
            return D.nodeName.toUpperCase() === "P";
          }),
          l = a
            .slice(0, n)
            .reverse()
            .find(function (D) {
              return D.nodeName.toUpperCase() === "P";
            }),
          u = vi(e),
          s = o ? vi(o) : null,
          c = l ? vi(l) : null,
          d = t.passLength,
          f = t.failLength,
          p = e.textContent.trim().length,
          m = o == null ? void 0 : o.textContent.trim().length;
        if (p > m * d || !s || !As(u, s, i)) return !0;
        var b = Yt(r, "blockquote");
        if (
          !(b && b.nodeName.toUpperCase() === "BLOCKQUOTE") &&
          !(c && !As(u, c, i)) &&
          !(p > m * f)
        )
          return !1;
      }
      var ow = iw;
      function lw(e) {
        var t = e.filter(function (r) {
          return r.data.isIframe;
        });
        return (
          e.forEach(function (r) {
            if (!(r.result || r.node.ancestry.length === 1)) {
              var a = r.node.ancestry.slice(0, -1),
                n = ft(t),
                i;
              try {
                for (n.s(); !(i = n.n()).done; ) {
                  var o = i.value;
                  if (Vn(a, o.node.ancestry)) {
                    r.result = o.result;
                    break;
                  }
                }
              } catch (l) {
                n.e(l);
              } finally {
                n.f();
              }
            }
          }),
          t.forEach(function (r) {
            r.result || (r.result = !0);
          }),
          e
        );
      }
      var uw = lw,
        sw = rr("landmark"),
        cw = ["alert", "log", "status"];
      function dw(e, t, r) {
        this.data({ isIframe: ["iframe", "frame"].includes(r.props.nodeName) });
        var a = ae.get("regionlessNodes", function () {
          return fw(t);
        });
        return !a.includes(r);
      }
      function fw(e) {
        var t = Fs(v._tree[0], e)
          .map(function (r) {
            for (
              ;
              r.parent &&
              !r.parent._hasRegionDescendant &&
              r.parent.actualNode !== R.body;

            )
              r = r.parent;
            return r;
          })
          .filter(function (r, a, n) {
            return n.indexOf(r) === a;
          });
        return t;
      }
      function Fs(e, t) {
        var r = e.actualNode;
        if (
          se(e) === "button" ||
          pw(e, t) ||
          ["iframe", "frame"].includes(e.props.nodeName) ||
          (Cn(e.actualNode) && gn(e.actualNode, "href")) ||
          !Ae(r)
        ) {
          for (var a = e; a; ) (a._hasRegionDescendant = !0), (a = a.parent);
          return ["iframe", "frame"].includes(e.props.nodeName) ? [e] : [];
        } else
          return r !== R.body && aa(r, !0)
            ? [e]
            : e.children
                .filter(function (n) {
                  var i = n.actualNode;
                  return i.nodeType === 1;
                })
                .map(function (n) {
                  return Fs(n, t);
                })
                .reduce(function (n, i) {
                  return n.concat(i);
                }, []);
      }
      function pw(e, t) {
        var r = e.actualNode,
          a = se(e),
          n = (r.getAttribute("aria-live") || "").toLowerCase().trim();
        return !!(
          ["assertive", "polite"].includes(n) ||
          cw.includes(a) ||
          sw.includes(a) ||
          (t.regionMatcher && Fr(e, t.regionMatcher))
        );
      }
      function mw(e) {
        var t = gn(e, "href");
        return t ? Ae(t) || void 0 : !1;
      }
      var hw = mw;
      function vw(e) {
        var t = {};
        return (
          e.forEach(function (r) {
            t[r.data] = t[r.data] !== void 0 ? ++t[r.data] : 0;
          }),
          e.forEach(function (r) {
            r.result = !!t[r.data];
          }),
          e
        );
      }
      var gw = vw;
      function bw(e, t, r) {
        var a = K(r.attr("title")).toLowerCase();
        return this.data(a), !0;
      }
      var yw = bw;
      function Dw(e) {
        var t = [];
        return e.filter(function (r) {
          return t.indexOf(r.data) === -1 ? (t.push(r.data), !0) : !1;
        });
      }
      var ww = Dw;
      function _w(e) {
        var t = e.getAttribute("id").trim();
        if (!t) return !0;
        var r = je(e),
          a = Array.from(
            r.querySelectorAll('[id="'.concat(Ee(t), '"]'))
          ).filter(function (n) {
            return n !== e;
          });
        return a.length && this.relatedNodes(a), this.data(t), a.length === 0;
      }
      var xw = _w;
      function Ew(e, t, r) {
        return !!K(Ar(r));
      }
      var Aw = Ew;
      function Fw(e, t, r) {
        try {
          return !!K(kr(r));
        } catch {
          return;
        }
      }
      var Cw = Fw;
      function kw(e, t) {
        var r = t.cssProperties.filter(function (a) {
          if (e.style.getPropertyPriority(a) === "important") return a;
        });
        return r.length > 0 ? (this.data(r), !1) : !0;
      }
      var Rw = kw;
      function Tw() {
        var e = R.title;
        return !!K(e);
      }
      var Sw = Tw;
      function Ow() {}
      var Iw = Ow;
      function Pw(e, t, r) {
        var a = r.props.nodeName;
        return ["img", "input", "area"].includes(a) ? r.hasAttr("alt") : !1;
      }
      var Nw = Pw;
      function Mw(e, t) {
        var r = t.cssProperty,
          a = t.absoluteValues,
          n = t.minValue,
          i = t.maxValue,
          o = t.normalValue,
          l = o === void 0 ? 0 : o,
          u = t.noImportant,
          s = t.multiLineOnly;
        if (
          (!u && e.style.getPropertyPriority(r) !== "important") ||
          (s && !cl(e))
        )
          return !0;
        var c = {};
        typeof n == "number" && (c.minValue = n),
          typeof i == "number" && (c.maxValue = i);
        var d = e.style.getPropertyValue(r);
        if (["inherit", "unset", "revert", "revert-layer"].includes(d))
          return this.data(ne({ value: d }, c)), !0;
        var f = Bw(e, { absoluteValues: a, cssProperty: r, normalValue: l });
        if ((this.data(ne({ value: f }, c)), typeof f == "number"))
          return (
            (typeof n != "number" || f >= n) && (typeof i != "number" || f <= i)
          );
      }
      function Bw(e, t) {
        var r = t.cssProperty,
          a = t.absoluteValues,
          n = t.normalValue,
          i = y.getComputedStyle(e),
          o = i.getPropertyValue(r);
        if (o === "normal") return n;
        var l = parseFloat(o);
        if (a) return l;
        var u = parseFloat(i.getPropertyValue("font-size")),
          s = Math.round((l / u) * 100) / 100;
        return isNaN(s) ? o : s;
      }
      function qw(e) {
        return Qe(e);
      }
      var Lw = qw;
      function Vw(e, t, r) {
        var a = r.props.nodeName,
          n = (r.attr("type") || "").toLowerCase(),
          i = r.attr("value");
        return (
          i && this.data({ messageKey: "has-label" }),
          a === "input" && ["submit", "reset"].includes(n) ? i === null : !1
        );
      }
      var jw = Vw;
      function Hw(e, t, r) {
        var a = ge(r);
        if (
          ["presentation", "none"].includes(a) &&
          ["iframe", "frame"].includes(r.props.nodeName) &&
          r.hasAttr("title")
        )
          return (
            this.data({ messageKey: "iframe", nodeName: r.props.nodeName }), !1
          );
        var n = se(r);
        if (["presentation", "none"].includes(n))
          return this.data({ role: n }), !0;
        if (!["presentation", "none"].includes(a)) return !1;
        var i = Nt().some(function (u) {
            return r.hasAttr(u);
          }),
          o = Re(r),
          l;
        return (
          i && !o
            ? (l = "globalAria")
            : !i && o
            ? (l = "focusable")
            : (l = "both"),
          this.data({ messageKey: l, role: n }),
          !1
        );
      }
      function zw(e, t, r) {
        if (!!r.children) {
          var a = r.children.find(function (i) {
            var o = i.props;
            return o.nodeName === "title";
          });
          if (!a) return this.data({ messageKey: "noTitle" }), !1;
          try {
            var n = Et(a, { includeHidden: !0 }).trim();
            if (n === "") return this.data({ messageKey: "emptyTitle" }), !1;
          } catch {
            return;
          }
          return !0;
        }
      }
      var Uw = zw;
      function $w(e) {
        var t = gt(e),
          r = t[0];
        return t.length <= 1 || r.length <= 1 || e.rows.length <= 1
          ? !0
          : r.reduce(function (a, n, i) {
              return a || (n !== r[i + 1] && r[i + 1] !== void 0);
            }, !1);
      }
      var Ww = $w;
      function Gw(e) {
        return nl(R) ? e.nodeName.toUpperCase() === "TH" : !0;
      }
      var Yw = Gw,
        Kw = Xw;
      function Xw(e, t, r) {
        if (r.children !== void 0) {
          var a = r.attr("summary"),
            n = r.children.find(Jw),
            i = n ? K(Et(n)) : !1;
          return !i || !a ? !1 : K(a).toLowerCase() === K(i).toLowerCase();
        }
      }
      function Jw(e) {
        return e.props.nodeName === "caption";
      }
      function Qw(e, t) {
        var r = e.getAttribute("scope").toLowerCase();
        return t.values.indexOf(r) !== -1;
      }
      var Zw = Qw;
      function e_(e) {
        var t = [],
          r = mi(e),
          a = gt(e);
        return (
          r.forEach(function (n) {
            if (aa(n) && xs(n) && !zu(n)) {
              var i = Ea(n, a).some(function (o) {
                return o !== null && !!aa(o);
              });
              i || t.push(n);
            }
          }),
          t.length ? (this.relatedNodes(t), !1) : !0
        );
      }
      var t_ = e_;
      function r_(e) {
        for (var t = [], r = [], a = [], n = 0; n < e.rows.length; n++)
          for (var i = e.rows[n], o = 0; o < i.cells.length; o++)
            t.push(i.cells[o]);
        var l = t.reduce(function (u, s) {
          return s.getAttribute("id") && u.push(s.getAttribute("id")), u;
        }, []);
        if (
          (t.forEach(function (u) {
            var s = !1,
              c = !1;
            if (!(!u.hasAttribute("headers") || !Ae(u))) {
              var d = u.getAttribute("headers").trim();
              if (!d) return r.push(u);
              var f = Be(d);
              f.length !== 0 &&
                (u.getAttribute("id") &&
                  (s = f.indexOf(u.getAttribute("id").trim()) !== -1),
                (c = f.some(function (p) {
                  return !l.includes(p);
                })),
                (s || c) && a.push(u));
            }
          }),
          a.length > 0)
        )
          return this.relatedNodes(a), !1;
        if (r.length) {
          this.relatedNodes(r);
          return;
        }
        return !0;
      }
      var a_ = r_;
      function n_(e) {
        var t = mi(e),
          r = this,
          a = [];
        t.forEach(function (l) {
          var u = l.getAttribute("headers");
          u && (a = a.concat(u.split(/\s+/)));
          var s = l.getAttribute("aria-labelledby");
          s && (a = a.concat(s.split(/\s+/)));
        });
        var n = t.filter(function (l) {
            return K(l.textContent) === ""
              ? !1
              : l.nodeName.toUpperCase() === "TH" ||
                  ["rowheader", "columnheader"].indexOf(
                    l.getAttribute("role")
                  ) !== -1;
          }),
          i = gt(e),
          o = !0;
        return (
          n.forEach(function (l) {
            if (!(l.getAttribute("id") && a.includes(l.getAttribute("id")))) {
              var u = ha(l, i),
                s = !1;
              er(l) &&
                (s = hi("down", u, i).find(function (c) {
                  return !er(c) && Ea(c, i).includes(l);
                })),
                !s &&
                  tr(l) &&
                  (s = hi("right", u, i).find(function (c) {
                    return !tr(c) && Ea(c, i).includes(l);
                  })),
                s || r.relatedNodes(l),
                (o = o && s);
            }
          }),
          o ? !0 : void 0
        );
      }
      var i_ = n_;
      function o_(e, t, r) {
        var a = ["SCRIPT", "HEAD", "TITLE", "NOSCRIPT", "STYLE", "TEMPLATE"];
        if (!a.includes(e.nodeName.toUpperCase()) && Dr(r)) {
          var n = y.getComputedStyle(e);
          if (n.getPropertyValue("display") === "none") return;
          if (n.getPropertyValue("visibility") === "hidden") {
            var i = Me(e),
              o = i && y.getComputedStyle(i);
            if (!o || o.getPropertyValue("visibility") !== "hidden") return;
          }
        }
        return !0;
      }
      var l_ = o_;
      function u_(e, t) {
        var r = /^aria-/,
          a = t.attrNames;
        if (a.length) {
          for (var n = 0, i = a.length; n < i; n++) if (r.test(a[n])) return !0;
        }
        return !1;
      }
      var s_ = u_;
      function c_(e, t) {
        return ge(t, { dpub: !0, fallback: !0 }) !== null;
      }
      var d_ = c_;
      function f_(e, t) {
        var r = /^aria-/;
        return t.attrNames.some(function (a) {
          return r.test(a);
        });
      }
      var p_ = f_;
      function Cs(e) {
        return e
          ? e.getAttribute("aria-hidden") === "true"
            ? !1
            : Cs(Me(e))
          : !0;
      }
      function m_(e) {
        return Cs(Me(e));
      }
      var h_ = m_;
      function v_(e, t) {
        var r = ge(t, { dpub: !0 });
        return !!ui(r);
      }
      var g_ = v_;
      function b_(e, t) {
        var r = ge(t);
        return !!li(r);
      }
      var y_ = b_;
      function D_(e, t) {
        var r = t.attr("autocomplete");
        if (!r || K(r) === "") return !1;
        var a = t.props.nodeName;
        if (["textarea", "input", "select"].includes(a) === !1) return !1;
        var n = ["submit", "reset", "button", "hidden"];
        if (a === "input" && n.includes(t.props.type)) return !1;
        var i = t.attr("aria-disabled") || "false";
        if (t.hasAttr("disabled") || i.toLowerCase() === "true") return !1;
        var o = t.attr("role"),
          l = t.attr("tabindex");
        if (l === "-1" && o) {
          var u = ue.ariaRoles[o];
          if (u === void 0 || u.type !== "widget") return !1;
        }
        return !(l === "-1" && t.actualNode && !Qe(t) && !Ae(t));
      }
      var w_ = D_;
      function __(e, t, r) {
        return r.initiator;
      }
      var ks = __;
      function x_(e, t, r) {
        return ks(e, t, r) ? !!e.querySelector("a[href]") : !0;
      }
      var E_ = x_;
      function A_(e, t) {
        var r = t.props,
          a = r.nodeName,
          n = r.type;
        if (a === "option" || (a === "select" && !e.options.length)) return !1;
        var i = ["hidden", "range", "color", "checkbox", "radio", "image"];
        if ((a === "input" && i.includes(n)) || Pr(t)) return !1;
        var o = ["input", "select", "textarea"];
        if (o.includes(a)) {
          var l = y.getComputedStyle(e),
            u = parseInt(l.getPropertyValue("text-indent"), 10);
          if (u) {
            var s = e.getBoundingClientRect();
            if (
              ((s = {
                top: s.top,
                bottom: s.bottom,
                left: s.left + u,
                right: s.right + u,
              }),
              !kn(s, e))
            )
              return !1;
          }
          return !0;
        }
        var c = Yt(t, "label");
        if (a === "label" || c) {
          var d = c || e,
            f = c ? B(c) : t;
          if (d.htmlFor) {
            var p = je(d),
              m = p.getElementById(d.htmlFor),
              b = m && B(m);
            if (b && Pr(b)) return !1;
          }
          var D =
              'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea',
            h = Ye(f, D)[0];
          if (h && Pr(h)) return !1;
        }
        for (var g = [], x = t; x; ) {
          if (x.props.id) {
            var E = ii(x)
              .filter(function (te) {
                return Be(te.getAttribute("aria-labelledby") || "").includes(
                  x.props.id
                );
              })
              .map(function (te) {
                return B(te);
              });
            g.push.apply(g, ie(E));
          }
          x = x.parent;
        }
        if (g.length > 0 && g.every(Pr)) return !1;
        var C = ut(t, !1, !0),
          N = { emoji: !0, nonBmp: !1, punctuations: !0 };
        if (!C || !Tr(C, N)) return !1;
        for (
          var M = R.createRange(), H = t.children, ee = 0;
          ee < H.length;
          ee++
        ) {
          var q = H[ee];
          q.actualNode.nodeType === 3 &&
            K(q.actualNode.nodeValue) !== "" &&
            M.selectNodeContents(q.actualNode);
        }
        for (var J = M.getClientRects(), $ = 0; $ < J.length; $++)
          if (kn(J[$], e)) return !0;
        return !1;
      }
      var F_ = A_;
      function C_(e) {
        if (Aa(e)) {
          var t = gt(e);
          return (
            t.length >= 3 &&
            t[0].length >= 3 &&
            t[1].length >= 3 &&
            t[2].length >= 3
          );
        }
        return !1;
      }
      var k_ = C_;
      function R_(e) {
        return Aa(e);
      }
      var T_ = R_;
      function S_(e) {
        var t = e.getAttribute("id").trim(),
          r = '*[id="'.concat(Ee(t), '"]'),
          a = Array.from(je(e).querySelectorAll(r));
        return !ya(e) && a.some(Re);
      }
      var O_ = S_;
      function I_(e) {
        return ya(e);
      }
      var P_ = I_;
      function N_(e) {
        var t = e.getAttribute("id").trim(),
          r = '*[id="'.concat(Ee(t), '"]'),
          a = Array.from(je(e).querySelectorAll(r));
        return (
          !ya(e) &&
          a.every(function (n) {
            return !Re(n);
          })
        );
      }
      var M_ = N_;
      function B_(e, t, r) {
        var a, n;
        return (
          !r.initiator &&
          !r.focusable &&
          ((a = r.size) === null || a === void 0 ? void 0 : a.width) *
            ((n = r.size) === null || n === void 0 ? void 0 : n.height) >
            1
        );
      }
      var q_ = B_;
      function L_(e) {
        var t = e.getAttribute("title");
        return !!K(t);
      }
      var V_ = L_;
      function j_(e, t) {
        return dt(t, { chromium: !0 }) !== null;
      }
      var H_ = j_;
      function z_(e, t) {
        return se(t) === "heading";
      }
      function U_(e, t) {
        try {
          var r = t.props.nodeName;
          return r === "svg" ? !0 : !!$e(t, "svg");
        } catch {
          return !1;
        }
      }
      var gi = U_;
      function $_(e, t) {
        return !gi(e, t);
      }
      var W_ = $_;
      function G_(e, t) {
        var r = !!Ue(t);
        if (!r) return !1;
        var a = se(e);
        return !(a && a !== "link");
      }
      var Y_ = G_;
      function K_(e) {
        return tl(e);
      }
      var X_ = K_;
      function J_(e) {
        return Qe(e);
      }
      function Q_(e, t) {
        return Qe(t);
      }
      function Z_(e, t) {
        var r = se(e);
        if (!r) return !1;
        var a = rr("widget"),
          n = a.includes(r);
        if (!n) return !1;
        var i = oi();
        return !(!i.includes(r) || (!K(Ar(t)) && !K(kr(e))) || !K(ut(t)));
      }
      var e0 = Z_;
      function t0(e, t) {
        if (t.props.nodeName !== "input" || t.hasAttr("type") === !1) return !0;
        var r = t.attr("type").toLowerCase();
        return (
          ["hidden", "image", "button", "submit", "reset"].includes(r) === !1
        );
      }
      var r0 = t0;
      function a0(e, t) {
        var r = "article, aside, main, nav, section";
        return e.hasAttribute("role") || !Yt(t, r);
      }
      var n0 = a0;
      function i0(e, t) {
        var r = ["article", "aside", "main", "nav", "section"].join(",");
        function a(i) {
          return !$e(i, r);
        }
        function n(i) {
          var o = i.actualNode,
            l = rr("landmark"),
            u = se(o);
          if (!u) return !1;
          var s = o.nodeName.toUpperCase();
          if (s === "HEADER" || s === "FOOTER") return a(i);
          if (s === "SECTION" || s === "FORM") {
            var c = Ue(i);
            return !!c;
          }
          return l.indexOf(u) >= 0 || u === "region";
        }
        return n(t) && Ae(e);
      }
      var o0 = i0;
      function l0(e) {
        return !Aa(e) && !Re(e);
      }
      var u0 = l0;
      function s0(e) {
        var t = K(e.innerText),
          r = e.getAttribute("role");
        return (r && r !== "link") || !t || !Qe(e) ? !1 : Fn(e);
      }
      var c0 = s0;
      function d0(e, t) {
        var r = se(t);
        return r ? !!ue.ariaRoles[r].childrenPresentational : !1;
      }
      var f0 = d0;
      function p0(e) {
        return !(
          !e.currentSrc ||
          e.hasAttribute("paused") ||
          e.hasAttribute("muted")
        );
      }
      var m0 = p0;
      function h0(e, t) {
        return !(!t.hasAttr("role") || !t.attr("role").trim());
      }
      var v0 = h0;
      function g0(e, t) {
        var r = ge(t);
        if (!r || ["none", "presentation"].includes(r)) return !0;
        var a = ol[r] || {},
          n = a.accessibleNameRequired;
        return !!(n || Re(t));
      }
      var Rs = g0;
      function b0(e, t) {
        var r = Bt(t),
          a = r.namingMethods;
        return !(
          (a && a.length !== 0) ||
          (ge(t) === "combobox" && Ye(t, 'input:not([type="hidden"])').length)
        );
      }
      var y0 = b0;
      function D0(e, t) {
        var r = parseInt(t.attr("tabindex"), 10);
        return isNaN(r) || r >= 0;
      }
      var w0 = D0;
      function _0(e, t) {
        return !t.attr("role");
      }
      var x0 = _0;
      function E0(e, t) {
        return t.props.nodeName !== "html";
      }
      var A0 = E0,
        F0 = function (t, r) {
          return [Rs, C0].every(function (a) {
            return a(t, r);
          });
        };
      function C0(e) {
        var t;
        if (
          !(
            e != null &&
            (t = e.ownerDocument) !== null &&
            t !== void 0 &&
            t.createRange
          )
        )
          return !0;
        var r = e.ownerDocument.createRange();
        return (
          r.setStart(e, 0),
          r.setEnd(e, e.childNodes.length),
          r.getClientRects().length === 0
        );
      }
      function k0(e) {
        var t = Array.from(e.parentNode.childNodes),
          r = e.textContent.trim(),
          a = /[.!?:;](?![.!?:;])/g;
        if (r.length === 0 || (r.match(a) || []).length >= 2) return !1;
        var n = t.slice(t.indexOf(e) + 1).filter(function (i) {
          return (
            i.nodeName.toUpperCase() === "P" && i.textContent.trim() !== ""
          );
        });
        return n.length !== 0;
      }
      var R0 = k0;
      function T0(e, t) {
        return dt(t, { chromiumRoles: !0 }) !== null;
      }
      var S0 = T0;
      function O0(e, t) {
        if (!ht(e, 13)) return !1;
        var r = ge(t);
        if (il["aria-haspopup"].values.includes(r)) {
          if ($e(t, '[role~="combobox"]')) return !1;
          var a = t.attr("id");
          if (a) {
            var n = yr(e),
              i = Array.from(
                n.querySelectorAll(
                  '[aria-owns~="'
                    .concat(a, '"], [aria-controls~="')
                    .concat(a, '"]')
                )
              ),
              o = i.some(function (s) {
                var c = Be(s.getAttribute("role"));
                return c.includes("combobox");
              });
            if (o) return !1;
          }
        }
        var l = Ye(t, "*"),
          u = l.some(function (s) {
            return Dr(s, !0, !0);
          });
        return !!u;
      }
      var I0 = O0;
      function P0(e) {
        return Cn(e) && ea(e);
      }
      var N0 = P0;
      function M0(e, t) {
        var r = se(t);
        return ["treegrid", "grid", "table"].includes(r);
      }
      function B0(e, t) {
        return q0.every(function (r) {
          return r(e, t);
        });
      }
      var q0 = [
        function (e, t) {
          return Ts(t);
        },
        function (e, t) {
          return L0(t);
        },
        function (e, t) {
          return !gi(e, t);
        },
        function (e, t) {
          return Re(t);
        },
        function (e, t) {
          return st(t) || !V0(t);
        },
        function (e) {
          return !Fn(e, { noLengthCompare: !0 });
        },
      ];
      function Ts(e) {
        return ct(e) === "widget";
      }
      function L0(e) {
        return e.props.nodeName !== "area";
      }
      var V0 = nt(function e(t) {
        return t != null && t.parent
          ? Ts(t.parent) && st(t.parent)
            ? !0
            : e(t.parent)
          : !1;
      });
      function j0(e) {
        return (
          e.ownerDocument.defaultView.self === e.ownerDocument.defaultView.top
        );
      }
      var H0 = j0;
      function z0(e) {
        var t = Pt(e.getAttribute("lang")),
          r = Pt(e.getAttribute("xml:lang"));
        return ma(t) && ma(r);
      }
      var U0 = z0,
        $0 = {
          "abstractrole-evaluate": og,
          "accesskeys-after": ty,
          "accesskeys-evaluate": ay,
          "alt-space-value-evaluate": Ey,
          "aria-allowed-attr-evaluate": lg,
          "aria-allowed-attr-matches": s_,
          "aria-allowed-role-evaluate": sg,
          "aria-allowed-role-matches": d_,
          "aria-busy-evaluate": cg,
          "aria-errormessage-evaluate": fg,
          "aria-has-attr-matches": p_,
          "aria-hidden-body-evaluate": mg,
          "aria-hidden-focus-matches": h_,
          "aria-label-evaluate": Aw,
          "aria-labelledby-evaluate": Cw,
          "aria-level-evaluate": vg,
          "aria-prohibited-attr-evaluate": gg,
          "aria-required-attr-evaluate": Dg,
          "aria-required-children-evaluate": Eg,
          "aria-required-children-matches": g_,
          "aria-required-parent-evaluate": Cg,
          "aria-required-parent-matches": y_,
          "aria-roledescription-evaluate": Rg,
          "aria-unsupported-attr-evaluate": Sg,
          "aria-valid-attr-evaluate": Ig,
          "aria-valid-attr-value-evaluate": Pg,
          "attr-non-space-content-evaluate": Hb,
          "autocomplete-appropriate-evaluate": qb,
          "autocomplete-matches": w_,
          "autocomplete-valid-evaluate": Vb,
          "avoid-inline-spacing-evaluate": Rw,
          "bypass-matches": E_,
          "caption-evaluate": cD,
          "caption-faked-evaluate": Ww,
          "color-contrast-evaluate": kb,
          "color-contrast-matches": F_,
          "css-orientation-lock-evaluate": bD,
          "data-table-large-matches": k_,
          "data-table-matches": T_,
          "deprecatedrole-evaluate": Mg,
          "dlitem-evaluate": Qy,
          "doc-has-title-evaluate": Sw,
          "duplicate-id-active-matches": O_,
          "duplicate-id-after": ww,
          "duplicate-id-aria-matches": P_,
          "duplicate-id-evaluate": xw,
          "duplicate-id-misc-matches": M_,
          "duplicate-img-label-evaluate": Fy,
          "exists-evaluate": Iw,
          "explicit-evaluate": ky,
          "fallbackrole-evaluate": Lg,
          "focusable-content-evaluate": iy,
          "focusable-disabled-evaluate": ly,
          "focusable-element-evaluate": sy,
          "focusable-modal-open-evaluate": dy,
          "focusable-no-name-evaluate": py,
          "focusable-not-tabbable-evaluate": hy,
          "frame-focusable-content-evaluate": vy,
          "frame-focusable-content-matches": q_,
          "frame-tested-after": fD,
          "frame-tested-evaluate": mD,
          "frame-title-has-text-matches": V_,
          "has-alt-evaluate": Nw,
          "has-descendant-after": Ub,
          "has-descendant-evaluate": Wb,
          "has-global-aria-attribute-evaluate": jg,
          "has-implicit-chromium-role-matches": H_,
          "has-lang-evaluate": Wy,
          "has-text-content-evaluate": Gb,
          "has-widget-role-evaluate": zg,
          "heading-matches": z_,
          "heading-order-after": SD,
          "heading-order-evaluate": LD,
          "help-same-as-label-evaluate": Ty,
          "hidden-content-evaluate": l_,
          "hidden-explicit-label-evaluate": Oy,
          "html-namespace-matches": W_,
          "html5-scope-evaluate": Yw,
          "identical-links-same-purpose-after": jD,
          "identical-links-same-purpose-evaluate": JD,
          "identical-links-same-purpose-matches": Y_,
          "implicit-evaluate": Py,
          "inline-style-property-evaluate": Mw,
          "inserted-into-focus-order-matches": X_,
          "internal-link-present-evaluate": ZD,
          "invalid-children-evaluate": Zy,
          "invalidrole-evaluate": $g,
          "is-element-focusable-evaluate": Gg,
          "is-initiator-matches": ks,
          "is-on-screen-evaluate": Lw,
          "is-visible-matches": J_,
          "is-visible-on-screen-matches": Q_,
          "label-content-name-mismatch-evaluate": My,
          "label-content-name-mismatch-matches": e0,
          "label-matches": r0,
          "landmark-has-body-context-matches": n0,
          "landmark-is-top-level-evaluate": by,
          "landmark-is-unique-after": Hy,
          "landmark-is-unique-evaluate": Uy,
          "landmark-unique-matches": o0,
          "layout-table-matches": u0,
          "link-in-text-block-evaluate": Ib,
          "link-in-text-block-matches": c0,
          "link-in-text-block-style-evaluate": Mb,
          "listitem-evaluate": rD,
          "matches-definition-evaluate": Kb,
          "meta-refresh-evaluate": rw,
          "meta-viewport-scale-evaluate": DD,
          "multiple-label-evaluate": qy,
          "nested-interactive-matches": f0,
          "no-autoplay-audio-evaluate": vD,
          "no-autoplay-audio-matches": m0,
          "no-empty-role-matches": v0,
          "no-explicit-name-required-matches": Rs,
          "no-focusable-content-evaluate": yy,
          "no-implicit-explicit-label-evaluate": Kg,
          "no-naming-method-matches": y0,
          "no-negative-tabindex-matches": w0,
          "no-role-matches": x0,
          "non-empty-if-present-evaluate": jw,
          "not-html-matches": A0,
          "object-is-loaded-matches": F0,
          "only-dlitems-evaluate": nD,
          "only-listitems-evaluate": oD,
          "p-as-heading-evaluate": ow,
          "p-as-heading-matches": R0,
          "page-no-duplicate-after": Jb,
          "page-no-duplicate-evaluate": Zb,
          "presentation-role-conflict-matches": S0,
          "presentational-role-evaluate": Hw,
          "region-after": uw,
          "region-evaluate": dw,
          "same-caption-summary-evaluate": Kw,
          "scope-value-evaluate": Zw,
          "scrollable-region-focusable-matches": I0,
          "skip-link-evaluate": hw,
          "skip-link-matches": N0,
          "structured-dlitems-evaluate": uD,
          "svg-namespace-matches": gi,
          "svg-non-empty-title-evaluate": Uw,
          "tabindex-evaluate": _y,
          "table-or-grid-role-matches": M0,
          "target-offset-evaluate": _D,
          "target-size-evaluate": ED,
          "td-has-header-evaluate": t_,
          "td-headers-attr-evaluate": a_,
          "th-has-data-cells-evaluate": i_,
          "title-only-evaluate": Vy,
          "unique-frame-title-after": gw,
          "unique-frame-title-evaluate": yw,
          "unsupportedrole-evaluate": Jg,
          "valid-lang-evaluate": Yy,
          "valid-scrollable-semantics-evaluate": ab,
          "widget-not-inline-matches": B0,
          "window-is-top-matches": H0,
          "xml-lang-mismatch-evaluate": Xy,
          "xml-lang-mismatch-matches": U0,
        },
        Fa = $0;
      function W0(e) {
        (this.id = e.id),
          (this.data = null),
          (this.relatedNodes = []),
          (this.result = null);
      }
      var bi = W0;
      function yi(e) {
        if (typeof e == "string") {
          if (Fa[e]) return Fa[e];
          if (/^\s*function[\s\w]*\(/.test(e))
            return new Function("return " + e + ";")();
          throw new ReferenceError(
            "Function ID does not exist in the metadata-function-map: ".concat(
              e
            )
          );
        }
        return e;
      }
      function Ss() {
        var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return (Array.isArray(e) || P(e) !== "object") && (e = { value: e }), e;
      }
      function nr(e) {
        e && ((this.id = e.id), this.configure(e));
      }
      (nr.prototype.enabled = !0),
        (nr.prototype.run = function (t, r, a, n, i) {
          r = r || {};
          var o = r.hasOwnProperty("enabled") ? r.enabled : this.enabled,
            l = this.getOptions(r.options);
          if (o) {
            var u = new bi(this),
              s = za(u, r, n, i),
              c;
            try {
              c = this.evaluate.call(s, t.actualNode, l, t, a);
            } catch (d) {
              t && t.actualNode && (d.errorNode = new rt(t).toJSON()), i(d);
              return;
            }
            s.isAsync || ((u.result = c), n(u));
          } else n(null);
        }),
        (nr.prototype.runSync = function (t, r, a) {
          r = r || {};
          var n = r,
            i = n.enabled,
            o = i === void 0 ? this.enabled : i;
          if (!o) return null;
          var l = this.getOptions(r.options),
            u = new bi(this),
            s = za(u, r);
          s.async = function () {
            throw new Error(
              "Cannot run async check while in a synchronous run"
            );
          };
          var c;
          try {
            c = this.evaluate.call(s, t.actualNode, l, t, a);
          } catch (d) {
            throw (t && t.actualNode && (d.errorNode = new rt(t).toJSON()), d);
          }
          return (u.result = c), u;
        }),
        (nr.prototype.configure = function (t) {
          var r = this;
          (!t.evaluate || Fa[t.evaluate]) && (this._internalCheck = !0),
            t.hasOwnProperty("enabled") && (this.enabled = t.enabled),
            t.hasOwnProperty("options") &&
              (this._internalCheck
                ? (this.options = Ss(t.options))
                : (this.options = t.options)),
            ["evaluate", "after"]
              .filter(function (a) {
                return t.hasOwnProperty(a);
              })
              .forEach(function (a) {
                return (r[a] = yi(t[a]));
              });
        }),
        (nr.prototype.getOptions = function (t) {
          return this._internalCheck
            ? on(this.options, Ss(t || {}))
            : t || this.options;
        });
      var Os = nr;
      function G0(e) {
        (this.id = e.id),
          (this.result = Z.NA),
          (this.pageLevel = e.pageLevel),
          (this.impact = null),
          (this.nodes = []);
      }
      var Ca = G0;
      function Xe(e, t) {
        (this._audit = t),
          (this.id = e.id),
          (this.selector = e.selector || "*"),
          e.impact &&
            (me(
              Z.impact.includes(e.impact),
              "Impact ".concat(e.impact, " is not a valid impact")
            ),
            (this.impact = e.impact)),
          (this.excludeHidden =
            typeof e.excludeHidden == "boolean" ? e.excludeHidden : !0),
          (this.enabled = typeof e.enabled == "boolean" ? e.enabled : !0),
          (this.pageLevel = typeof e.pageLevel == "boolean" ? e.pageLevel : !1),
          (this.reviewOnFail =
            typeof e.reviewOnFail == "boolean" ? e.reviewOnFail : !1),
          (this.any = e.any || []),
          (this.all = e.all || []),
          (this.none = e.none || []),
          (this.tags = e.tags || []),
          (this.preload = !!e.preload),
          (this.actIds = e.actIds),
          e.matches && (this.matches = yi(e.matches));
      }
      (Xe.prototype.matches = function () {
        return !0;
      }),
        (Xe.prototype.gather = function (t) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = "mark_gather_start_" + this.id,
            n = "mark_gather_end_" + this.id,
            i = "mark_isVisibleToScreenReaders_start_" + this.id,
            o = "mark_isVisibleToScreenReaders_end_" + this.id;
          r.performanceTimer && Oe.mark(a);
          var l = $n(this.selector, t);
          return (
            this.excludeHidden &&
              (r.performanceTimer && Oe.mark(i),
              (l = l.filter(function (u) {
                return Ae(u);
              })),
              r.performanceTimer &&
                (Oe.mark(o),
                Oe.measure(
                  "rule_" +
                    this.id +
                    "#gather_axe.utils.isVisibleToScreenReaders",
                  i,
                  o
                ))),
            r.performanceTimer &&
              (Oe.mark(n), Oe.measure("rule_" + this.id + "#gather", a, n)),
            l
          );
        }),
        (Xe.prototype.runChecks = function (t, r, a, n, i, o) {
          var l = this,
            u = lt();
          this[t].forEach(function (s) {
            var c = l._audit.checks[s.id || s],
              d = ca(c, l.id, a);
            u.defer(function (f, p) {
              c.run(r, d, n, f, p);
            });
          }),
            u
              .then(function (s) {
                (s = s.filter(function (c) {
                  return c;
                })),
                  i({ type: t, results: s });
              })
              .catch(o);
        }),
        (Xe.prototype.runChecksSync = function (t, r, a, n) {
          var i = this,
            o = [];
          return (
            this[t].forEach(function (l) {
              var u = i._audit.checks[l.id || l],
                s = ca(u, i.id, a);
              o.push(u.runSync(r, s, n));
            }),
            (o = o.filter(function (l) {
              return l;
            })),
            { type: t, results: o }
          );
        }),
        (Xe.prototype.run = function (t) {
          var r = this,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0;
          a.performanceTimer && this._trackPerformance();
          var o = lt(),
            l = new Ca(this),
            u;
          try {
            u = this.gatherAndMatchNodes(t, a);
          } catch (s) {
            i(new sr({ cause: s, ruleId: this.id }));
            return;
          }
          a.performanceTimer && this._logGatherPerformance(u),
            u.forEach(function (s) {
              o.defer(function (c, d) {
                var f = lt();
                ["any", "all", "none"].forEach(function (p) {
                  f.defer(function (m, b) {
                    r.runChecks(p, s, a, t, m, b);
                  });
                }),
                  f
                    .then(function (p) {
                      var m = Is(p);
                      m &&
                        ((m.node = new rt(s, a)),
                        l.nodes.push(m),
                        r.reviewOnFail &&
                          (["any", "all"].forEach(function (b) {
                            m[b].forEach(function (D) {
                              D.result === !1 && (D.result = void 0);
                            });
                          }),
                          m.none.forEach(function (b) {
                            b.result === !0 && (b.result = void 0);
                          }))),
                        c();
                    })
                    .catch(function (p) {
                      return d(p);
                    });
              });
            }),
            o.defer(function (s) {
              return setTimeout(s, 0);
            }),
            a.performanceTimer && this._logRulePerformance(),
            o
              .then(function () {
                return n(l);
              })
              .catch(function (s) {
                return i(s);
              });
        }),
        (Xe.prototype.runSync = function (t) {
          var r = this,
            a =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
          a.performanceTimer && this._trackPerformance();
          var n = new Ca(this),
            i;
          try {
            i = this.gatherAndMatchNodes(t, a);
          } catch (o) {
            throw new sr({ cause: o, ruleId: this.id });
          }
          return (
            a.performanceTimer && this._logGatherPerformance(i),
            i.forEach(function (o) {
              var l = [];
              ["any", "all", "none"].forEach(function (s) {
                l.push(r.runChecksSync(s, o, a, t));
              });
              var u = Is(l);
              u &&
                ((u.node = o.actualNode ? new rt(o, a) : null),
                n.nodes.push(u),
                r.reviewOnFail &&
                  (["any", "all"].forEach(function (s) {
                    u[s].forEach(function (c) {
                      c.result === !1 && (c.result = void 0);
                    });
                  }),
                  u.none.forEach(function (s) {
                    s.result === !0 && (s.result = void 0);
                  })));
            }),
            a.performanceTimer && this._logRulePerformance(),
            n
          );
        }),
        (Xe.prototype._trackPerformance = function () {
          (this._markStart = "mark_rule_start_" + this.id),
            (this._markEnd = "mark_rule_end_" + this.id),
            (this._markChecksStart = "mark_runchecks_start_" + this.id),
            (this._markChecksEnd = "mark_runchecks_end_" + this.id);
        }),
        (Xe.prototype._logGatherPerformance = function (t) {
          St("gather (", t.length, "):", Oe.timeElapsed() + "ms"),
            Oe.mark(this._markChecksStart);
        }),
        (Xe.prototype._logRulePerformance = function () {
          Oe.mark(this._markChecksEnd),
            Oe.mark(this._markEnd),
            Oe.measure(
              "runchecks_" + this.id,
              this._markChecksStart,
              this._markChecksEnd
            ),
            Oe.measure("rule_" + this.id, this._markStart, this._markEnd);
        });
      function Is(e) {
        if (e.length) {
          var t = !1,
            r = {};
          return (
            e.forEach(function (a) {
              var n = a.results.filter(function (i) {
                return i;
              });
              (r[a.type] = n), n.length && (t = !0);
            }),
            t ? r : null
          );
        }
      }
      Xe.prototype.gatherAndMatchNodes = function (t, r) {
        var a = this,
          n = "mark_matches_start_" + this.id,
          i = "mark_matches_end_" + this.id,
          o = this.gather(t, r);
        return (
          r.performanceTimer && Oe.mark(n),
          (o = o.filter(function (l) {
            return a.matches(l.actualNode, l, t);
          })),
          r.performanceTimer &&
            (Oe.mark(i), Oe.measure("rule_" + this.id + "#matches", n, i)),
          o
        );
      };
      function Y0(e) {
        return Xr(e)
          .map(function (t) {
            var r = e._audit.checks[t.id || t];
            return r && typeof r.after == "function" ? r : null;
          })
          .filter(Boolean);
      }
      function K0(e, t) {
        var r = [];
        return (
          e.forEach(function (a) {
            var n = Xr(a);
            n.forEach(function (i) {
              i.id === t && ((i.node = a.node), r.push(i));
            });
          }),
          r
        );
      }
      function X0(e) {
        return e.filter(function (t) {
          return t.filtered !== !0;
        });
      }
      function J0(e) {
        var t = ["any", "all", "none"],
          r = e.nodes.filter(function (a) {
            var n = 0;
            return (
              t.forEach(function (i) {
                (a[i] = X0(a[i])), (n += a[i].length);
              }),
              n > 0
            );
          });
        return (
          e.pageLevel &&
            r.length &&
            (r = [
              r.reduce(function (a, n) {
                if (a)
                  return (
                    t.forEach(function (i) {
                      a[i].push.apply(a[i], n[i]);
                    }),
                    a
                  );
              }),
            ]),
          r
        );
      }
      (Xe.prototype.after = function (t, r) {
        var a = this,
          n = Y0(this),
          i = this.id;
        return (
          n.forEach(function (o) {
            var l = K0(t.nodes, o.id),
              u = ca(o, i, r),
              s = o.after(l, u);
            a.reviewOnFail &&
              s.forEach(function (c) {
                var d =
                    (a.any.includes(c.id) || a.all.includes(c.id)) &&
                    c.result === !1,
                  f = a.none.includes(c.id) && c.result === !0;
                (d || f) && (c.result = void 0);
              }),
              l.forEach(function (c) {
                delete c.node, s.indexOf(c) === -1 && (c.filtered = !0);
              });
          }),
          (t.nodes = J0(t)),
          t
        );
      }),
        (Xe.prototype.configure = function (t) {
          t.hasOwnProperty("selector") && (this.selector = t.selector),
            t.hasOwnProperty("excludeHidden") &&
              (this.excludeHidden =
                typeof t.excludeHidden == "boolean" ? t.excludeHidden : !0),
            t.hasOwnProperty("enabled") &&
              (this.enabled = typeof t.enabled == "boolean" ? t.enabled : !0),
            t.hasOwnProperty("pageLevel") &&
              (this.pageLevel =
                typeof t.pageLevel == "boolean" ? t.pageLevel : !1),
            t.hasOwnProperty("reviewOnFail") &&
              (this.reviewOnFail =
                typeof t.reviewOnFail == "boolean" ? t.reviewOnFail : !1),
            t.hasOwnProperty("any") && (this.any = t.any),
            t.hasOwnProperty("all") && (this.all = t.all),
            t.hasOwnProperty("none") && (this.none = t.none),
            t.hasOwnProperty("tags") && (this.tags = t.tags),
            t.hasOwnProperty("actIds") && (this.actIds = t.actIds),
            t.hasOwnProperty("matches") && (this.matches = yi(t.matches)),
            t.impact &&
              (me(
                Z.impact.includes(t.impact),
                "Impact ".concat(t.impact, " is not a valid impact")
              ),
              (this.impact = t.impact));
        });
      var Ps = Xe,
        ir = pt(ji()),
        or = /\{\{.+?\}\}/g;
      function Ns() {
        if (y.origin) return y.origin;
        if (y.location && y.location.origin) return y.location.origin;
      }
      function Q0(e) {
        var t;
        if (
          (e ? ((t = mt(e)), (t.commons = e.commons)) : (t = {}),
          (t.reporter = t.reporter || null),
          (t.noHtml = t.noHtml || !1),
          !t.allowedOrigins)
        ) {
          var r = Ns();
          t.allowedOrigins = r ? [r] : [];
        }
        return (
          (t.rules = t.rules || []),
          (t.checks = t.checks || []),
          (t.data = ne({ checks: {}, rules: {} }, t.data)),
          t
        );
      }
      function Ms(e, t, r) {
        var a, n;
        for (a = 0, n = e.length; a < n; a++) t[r](e[a]);
      }
      var Z0 = function (t, r) {
          var a = r.pass,
            n = r.fail;
          return (
            typeof a == "string" && or.test(a) && (a = ir.default.compile(a)),
            typeof n == "string" && or.test(n) && (n = ir.default.compile(n)),
            ne({}, t, {
              messages: {
                pass: a || t.messages.pass,
                fail: n || t.messages.fail,
                incomplete:
                  P(t.messages.incomplete) === "object"
                    ? ne({}, t.messages.incomplete, r.incomplete)
                    : r.incomplete,
              },
            })
          );
        },
        ex = function (t, r) {
          var a = r.help,
            n = r.description;
          return (
            typeof a == "string" && or.test(a) && (a = ir.default.compile(a)),
            typeof n == "string" && or.test(n) && (n = ir.default.compile(n)),
            ne({}, t, { help: a || t.help, description: n || t.description })
          );
        },
        tx = function (t, r) {
          var a = r.failureMessage;
          return (
            typeof a == "string" && or.test(a) && (a = ir.default.compile(a)),
            ne({}, t, { failureMessage: a || t.failureMessage })
          );
        },
        rx = function (t, r) {
          return (
            typeof r == "string" && or.test(r) && (r = ir.default.compile(r)),
            r || t
          );
        },
        ax = (function () {
          function e(t) {
            cr(this, e),
              (this.lang = "en"),
              (this.defaultConfig = t),
              (this.standards = ue),
              this._init(),
              (this._defaultLocale = null);
          }
          return (
            dr(e, [
              {
                key: "_setDefaultLocale",
                value: function () {
                  if (!this._defaultLocale) {
                    for (
                      var r = {
                          checks: {},
                          rules: {},
                          failureSummaries: {},
                          incompleteFallbackMessage: "",
                          lang: this.lang,
                        },
                        a = Object.keys(this.data.checks),
                        n = 0;
                      n < a.length;
                      n++
                    ) {
                      var i = a[n],
                        o = this.data.checks[i],
                        l = o.messages,
                        u = l.pass,
                        s = l.fail,
                        c = l.incomplete;
                      r.checks[i] = { pass: u, fail: s, incomplete: c };
                    }
                    for (
                      var d = Object.keys(this.data.rules), f = 0;
                      f < d.length;
                      f++
                    ) {
                      var p = d[f],
                        m = this.data.rules[p],
                        b = m.description,
                        D = m.help;
                      r.rules[p] = { description: b, help: D };
                    }
                    for (
                      var h = Object.keys(this.data.failureSummaries), g = 0;
                      g < h.length;
                      g++
                    ) {
                      var x = h[g],
                        E = this.data.failureSummaries[x],
                        C = E.failureMessage;
                      r.failureSummaries[x] = { failureMessage: C };
                    }
                    (r.incompleteFallbackMessage =
                      this.data.incompleteFallbackMessage),
                      (this._defaultLocale = r);
                  }
                },
              },
              {
                key: "_resetLocale",
                value: function () {
                  var r = this._defaultLocale;
                  !r || this.applyLocale(r);
                },
              },
              {
                key: "_applyCheckLocale",
                value: function (r) {
                  for (var a = Object.keys(r), n = 0; n < a.length; n++) {
                    var i = a[n];
                    if (!this.data.checks[i])
                      throw new Error(
                        'Locale provided for unknown check: "'.concat(i, '"')
                      );
                    this.data.checks[i] = Z0(this.data.checks[i], r[i]);
                  }
                },
              },
              {
                key: "_applyRuleLocale",
                value: function (r) {
                  for (var a = Object.keys(r), n = 0; n < a.length; n++) {
                    var i = a[n];
                    if (!this.data.rules[i])
                      throw new Error(
                        'Locale provided for unknown rule: "'.concat(i, '"')
                      );
                    this.data.rules[i] = ex(this.data.rules[i], r[i]);
                  }
                },
              },
              {
                key: "_applyFailureSummaries",
                value: function (r) {
                  for (var a = Object.keys(r), n = 0; n < a.length; n++) {
                    var i = a[n];
                    if (!this.data.failureSummaries[i])
                      throw new Error(
                        'Locale provided for unknown failureMessage: "'.concat(
                          i,
                          '"'
                        )
                      );
                    this.data.failureSummaries[i] = tx(
                      this.data.failureSummaries[i],
                      r[i]
                    );
                  }
                },
              },
              {
                key: "applyLocale",
                value: function (r) {
                  this._setDefaultLocale(),
                    r.checks && this._applyCheckLocale(r.checks),
                    r.rules && this._applyRuleLocale(r.rules),
                    r.failureSummaries &&
                      this._applyFailureSummaries(
                        r.failureSummaries,
                        "failureSummaries"
                      ),
                    r.incompleteFallbackMessage &&
                      (this.data.incompleteFallbackMessage = rx(
                        this.data.incompleteFallbackMessage,
                        r.incompleteFallbackMessage
                      )),
                    r.lang && (this.lang = r.lang);
                },
              },
              {
                key: "setAllowedOrigins",
                value: function (r) {
                  var a = Ns();
                  this.allowedOrigins = [];
                  var n = ft(r),
                    i;
                  try {
                    for (n.s(); !(i = n.n()).done; ) {
                      var o = i.value;
                      if (o === Z.allOrigins) {
                        this.allowedOrigins = ["*"];
                        return;
                      } else
                        o !== Z.sameOrigin
                          ? this.allowedOrigins.push(o)
                          : a && this.allowedOrigins.push(a);
                    }
                  } catch (l) {
                    n.e(l);
                  } finally {
                    n.f();
                  }
                },
              },
              {
                key: "_init",
                value: function () {
                  var r = Q0(this.defaultConfig);
                  (this.lang = r.lang || "en"),
                    (this.reporter = r.reporter),
                    (this.commands = {}),
                    (this.rules = []),
                    (this.checks = {}),
                    (this.brand = "axe"),
                    (this.application = "axeAPI"),
                    (this.tagExclude = ["experimental"]),
                    (this.noHtml = r.noHtml),
                    (this.allowedOrigins = r.allowedOrigins),
                    Ms(r.rules, this, "addRule"),
                    Ms(r.checks, this, "addCheck"),
                    (this.data = {}),
                    (this.data.checks = (r.data && r.data.checks) || {}),
                    (this.data.rules = (r.data && r.data.rules) || {}),
                    (this.data.failureSummaries =
                      (r.data && r.data.failureSummaries) || {}),
                    (this.data.incompleteFallbackMessage =
                      (r.data && r.data.incompleteFallbackMessage) || ""),
                    this._constructHelpUrls();
                },
              },
              {
                key: "registerCommand",
                value: function (r) {
                  this.commands[r.id] = r.callback;
                },
              },
              {
                key: "addRule",
                value: function (r) {
                  r.metadata && (this.data.rules[r.id] = r.metadata);
                  var a = this.getRule(r.id);
                  a ? a.configure(r) : this.rules.push(new Ps(r, this));
                },
              },
              {
                key: "addCheck",
                value: function (r) {
                  var a = r.metadata;
                  P(a) === "object" &&
                    ((this.data.checks[r.id] = a),
                    P(a.messages) === "object" &&
                      Object.keys(a.messages)
                        .filter(function (n) {
                          return (
                            a.messages.hasOwnProperty(n) &&
                            typeof a.messages[n] == "string"
                          );
                        })
                        .forEach(function (n) {
                          a.messages[n].indexOf("function") === 0 &&
                            (a.messages[n] = new Function(
                              "return " + a.messages[n] + ";"
                            )());
                        })),
                    this.checks[r.id]
                      ? this.checks[r.id].configure(r)
                      : (this.checks[r.id] = new Os(r));
                },
              },
              {
                key: "run",
                value: function (r, a, n, i) {
                  this.normalizeOptions(a), (v._selectCache = []);
                  var o = nx(this.rules, r, a),
                    l = o.now,
                    u = o.later,
                    s = lt();
                  l.forEach(function (f) {
                    s.defer(Bs(f, r, a));
                  });
                  var c = lt();
                  u.length &&
                    c.defer(function (f) {
                      ql(a)
                        .then(function (p) {
                          return f(p);
                        })
                        .catch(function (p) {
                          console.warn("Couldn't load preload assets: ", p),
                            f(void 0);
                        });
                    });
                  var d = lt();
                  d.defer(s),
                    d.defer(c),
                    d
                      .then(function (f) {
                        var p = f.pop();
                        if (p && p.length) {
                          var m = p[0];
                          m && (r = ne({}, r, m));
                        }
                        var b = f[0];
                        if (!u.length) {
                          (v._selectCache = void 0),
                            n(
                              b.filter(function (h) {
                                return !!h;
                              })
                            );
                          return;
                        }
                        var D = lt();
                        u.forEach(function (h) {
                          var g = Bs(h, r, a);
                          D.defer(g);
                        }),
                          D.then(function (h) {
                            (v._selectCache = void 0),
                              n(
                                b.concat(h).filter(function (g) {
                                  return !!g;
                                })
                              );
                          }).catch(i);
                      })
                      .catch(i);
                },
              },
              {
                key: "after",
                value: function (r, a) {
                  var n = this.rules;
                  return r.map(function (i) {
                    var o = br(n, "id", i.id);
                    if (!o)
                      throw new Error(
                        "Result for unknown rule. You may be running mismatch axe-core versions"
                      );
                    return o.after(i, a);
                  });
                },
              },
              {
                key: "getRule",
                value: function (r) {
                  return this.rules.find(function (a) {
                    return a.id === r;
                  });
                },
              },
              {
                key: "normalizeOptions",
                value: function (r) {
                  var a = this,
                    n = [],
                    i = [];
                  if (
                    (a.rules.forEach(function (c) {
                      i.push(c.id),
                        c.tags.forEach(function (d) {
                          n.includes(d) || n.push(d);
                        });
                    }),
                    ["object", "string"].includes(P(r.runOnly)))
                  ) {
                    if (
                      (typeof r.runOnly == "string" &&
                        (r.runOnly = [r.runOnly]),
                      Array.isArray(r.runOnly))
                    ) {
                      var o = r.runOnly.find(function (c) {
                          return n.includes(c);
                        }),
                        l = r.runOnly.find(function (c) {
                          return i.includes(c);
                        });
                      if (o && l)
                        throw new Error(
                          "runOnly cannot be both rules and tags"
                        );
                      l
                        ? (r.runOnly = { type: "rule", values: r.runOnly })
                        : (r.runOnly = { type: "tag", values: r.runOnly });
                    }
                    var u = r.runOnly;
                    if (
                      (u.value &&
                        !u.values &&
                        ((u.values = u.value), delete u.value),
                      !Array.isArray(u.values) || u.values.length === 0)
                    )
                      throw new Error(
                        "runOnly.values must be a non-empty array"
                      );
                    if (["rule", "rules"].includes(u.type))
                      (u.type = "rule"),
                        u.values.forEach(function (c) {
                          if (!i.includes(c))
                            throw new Error(
                              "unknown rule `" + c + "` in options.runOnly"
                            );
                        });
                    else if (["tag", "tags", void 0].includes(u.type)) {
                      u.type = "tag";
                      var s = u.values.filter(function (c) {
                        return !n.includes(c) && !/wcag2[1-3]a{1,3}/.test(c);
                      });
                      s.length !== 0 &&
                        v.log("Could not find tags `" + s.join("`, `") + "`");
                    } else
                      throw new Error(
                        "Unknown runOnly type '".concat(u.type, "'")
                      );
                  }
                  return (
                    P(r.rules) === "object" &&
                      Object.keys(r.rules).forEach(function (c) {
                        if (!i.includes(c))
                          throw new Error(
                            "unknown rule `" + c + "` in options.rules"
                          );
                      }),
                    r
                  );
                },
              },
              {
                key: "setBranding",
                value: function (r) {
                  var a = { brand: this.brand, application: this.application };
                  typeof r == "string" && (this.application = r),
                    r &&
                      r.hasOwnProperty("brand") &&
                      r.brand &&
                      typeof r.brand == "string" &&
                      (this.brand = r.brand),
                    r &&
                      r.hasOwnProperty("application") &&
                      r.application &&
                      typeof r.application == "string" &&
                      (this.application = r.application),
                    this._constructHelpUrls(a);
                },
              },
              {
                key: "_constructHelpUrls",
                value: function () {
                  var r = this,
                    a =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : null,
                    n = (v.version.match(/^[1-9][0-9]*\.[0-9]+/) || ["x.y"])[0];
                  this.rules.forEach(function (i) {
                    r.data.rules[i.id] || (r.data.rules[i.id] = {});
                    var o = r.data.rules[i.id];
                    (typeof o.helpUrl != "string" ||
                      (a && o.helpUrl === qs(a, i.id, n))) &&
                      (o.helpUrl = qs(r, i.id, n));
                  });
                },
              },
              {
                key: "resetRulesAndChecks",
                value: function () {
                  this._init(), this._resetLocale();
                },
              },
            ]),
            e
          );
        })();
      function nx(e, t, r) {
        var a = { now: [], later: [] },
          n = e.reduce(function (i, o) {
            return jl(o, t, r)
              ? o.preload
                ? (i.later.push(o), i)
                : (i.now.push(o), i)
              : i;
          }, a);
        return n;
      }
      function Bs(e, t, r) {
        return (
          r.performanceTimer && Oe.mark("mark_rule_start_" + e.id),
          function (a, n) {
            e.run(
              t,
              r,
              function (i) {
                a(i);
              },
              function (i) {
                if (r.debug) n(i);
                else {
                  var o = Object.assign(new Ca(e), {
                    result: Z.CANTTELL,
                    description: "An error occured while running this rule",
                    message: i.message,
                    stack: i.stack,
                    error: i,
                    errorNode: i.errorNode,
                  });
                  a(o);
                }
              }
            );
          }
        );
      }
      function qs(e, t, r) {
        var a = e.brand,
          n = e.application,
          i = e.lang;
        return (
          Z.helpUrlBase +
          a +
          "/" +
          (r || v.version.substring(0, v.version.lastIndexOf("."))) +
          "/" +
          t +
          "?application=" +
          encodeURIComponent(n) +
          (i && i !== "en" ? "&lang=" + encodeURIComponent(i) : "")
        );
      }
      var Ls = ax;
      function ix(e) {
        var t = y && "Node" in y && "NodeList" in y,
          r = !!R;
        if (!(t && r)) {
          if (!e || !e.ownerDocument)
            throw new Error(
              'Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.'
            );
          r || (ae.set("globalDocumentSet", !0), (R = e.ownerDocument)),
            t || (ae.set("globalWindowSet", !0), (y = R.defaultView));
        }
      }
      function Di() {
        ae.get("globalDocumentSet") &&
          (ae.set("globalDocumentSet", !1), (R = null)),
          ae.get("globalWindowSet") &&
            (ae.set("globalWindowSet", !1), (y = null));
      }
      function ox() {
        Di(),
          v._memoizedFns.forEach(function (e) {
            return e.clear();
          }),
          ae.clear(),
          (v._tree = void 0),
          (v._selectorData = void 0),
          (v._selectCache = void 0);
      }
      var At = ox;
      function lx(e, t, r, a) {
        try {
          (e = new da(e)),
            (v._tree = e.flatTree),
            (v._selectorData = zr(e.flatTree));
        } catch (o) {
          return At(), a(o);
        }
        var n = lt(),
          i = v._audit;
        t.performanceTimer && Oe.auditStart(),
          e.frames.length &&
            t.iframes !== !1 &&
            n.defer(function (o, l) {
              wo(e, t, "rules", null, o, l);
            }),
          n.defer(function (o, l) {
            i.run(e, t, o, l);
          }),
          n
            .then(function (o) {
              try {
                t.performanceTimer && Oe.auditEnd();
                var l = Jr(
                  o.map(function (u) {
                    return { results: u };
                  })
                );
                e.initiator &&
                  ((l = i.after(l, t)), l.forEach(fa), (l = l.map(fr)));
                try {
                  r(l, At);
                } catch (u) {
                  At(), St(u);
                }
              } catch (u) {
                At(), a(u);
              }
            })
            .catch(function (o) {
              At(), a(o);
            });
      }
      var Vs = lx;
      function ux(e, t, r) {
        var a = r,
          n = function (u) {
            u instanceof Error || (u = new Error(u)), r(u);
          },
          i = (e && e.context) || {};
        i.hasOwnProperty("include") && !i.include.length && (i.include = [R]);
        var o = (e && e.options) || {};
        switch (e.command) {
          case "rules":
            return Vs(
              i,
              o,
              function (l, u) {
                a(l), u();
              },
              n
            );
          case "cleanup-plugin":
            return Jl(a, n);
          default:
            if (v._audit && v._audit.commands && v._audit.commands[e.command])
              return v._audit.commands[e.command](e, r);
        }
      }
      y.top !== y &&
        (at.subscribe("axe.start", ux),
        at.subscribe("axe.ping", function (e, t, r) {
          r({ axe: !0 });
        }));
      function sx(e) {
        v._audit = new Ls(e);
      }
      var cx = sx;
      function Nr(e) {
        (this._run = e.run),
          (this._collect = e.collect),
          (this._registry = {}),
          e.commands.forEach(function (t) {
            v._audit.registerCommand(t);
          });
      }
      (Nr.prototype.run = function () {
        return this._run.apply(this, arguments);
      }),
        (Nr.prototype.collect = function () {
          return this._collect.apply(this, arguments);
        }),
        (Nr.prototype.cleanup = function (t) {
          var r = v.utils.queue(),
            a = this;
          Object.keys(this._registry).forEach(function (n) {
            r.defer(function (i) {
              a._registry[n].cleanup(i);
            });
          }),
            r.then(t);
        }),
        (Nr.prototype.add = function (t) {
          this._registry[t.id] = t;
        });
      function dx(e) {
        v.plugins[e.id] = new Nr(e);
      }
      var fx = dx;
      function px() {
        var e = v._audit;
        if (!e) throw new Error("No audit configured");
        e.resetRulesAndChecks(), np();
      }
      var mx = px;
      function hx(e, t) {
        var r =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (r.reporter = r.reporter || v._audit.reporter || "v1"),
          (v._selectorData = {}),
          t instanceof X || (t = new Yl(t));
        var a = xl(e);
        if (!a) throw new Error("unknown rule `" + e + "`");
        a = Object.create(a, { excludeHidden: { value: !1 } });
        var n = { initiator: !0, include: [t] },
          i = a.runSync(n, r);
        fa(i), fr(i);
        var o = Wi([i]);
        return (
          o.violations.forEach(function (l) {
            return l.nodes.forEach(function (u) {
              u.failureSummary = Nn(u);
            });
          }),
          ne({}, xt(), o, { toolOptions: r })
        );
      }
      var vx = hx;
      function js(e) {
        var t,
          r,
          a,
          n = ve(e, 3),
          i = n[0],
          o = n[1],
          l = n[2],
          u = new TypeError("axe.run arguments are invalid");
        if (!gx(i)) {
          if (l !== void 0) throw u;
          (l = o), (o = i), (i = R);
        }
        if (P(o) !== "object") {
          if (l !== void 0) throw u;
          (l = o), (o = {});
        }
        if (typeof l != "function" && l !== void 0) throw u;
        return (
          (o = mt(o)),
          (o.reporter =
            (t =
              (r = o.reporter) !== null && r !== void 0
                ? r
                : (a = v._audit) === null || a === void 0
                ? void 0
                : a.reporter) !== null && t !== void 0
              ? t
              : "v1"),
          { context: i, options: o, callback: l }
        );
      }
      function gx(e) {
        switch (!0) {
          case typeof e == "string":
          case Array.isArray(e):
          case y.Node && e instanceof y.Node:
          case y.NodeList && e instanceof y.NodeList:
            return !0;
          case P(e) !== "object":
            return !1;
          case e.include !== void 0:
          case e.exclude !== void 0:
          case typeof e.length == "number":
            return !0;
          default:
            return !1;
        }
      }
      var ka = function () {};
      function bx() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        ix(t[0]);
        var a = js(t),
          n = a.context,
          i = a.options,
          o = a.callback,
          l = o === void 0 ? ka : o,
          u = yx(l),
          s = u.thenable,
          c = u.resolve,
          d = u.reject;
        try {
          me(v._audit, "No audit configured"),
            me(
              !v._running,
              "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run."
            );
        } catch (m) {
          return wx(m, l);
        }
        (v._running = !0),
          i.performanceTimer && v.utils.performanceTimer.start();
        function f(m, b) {
          var D = function (g) {
            (v._running = !1), b();
            try {
              l(null, g);
            } catch (x) {
              v.log(x);
            }
            c(g);
          };
          i.performanceTimer && v.utils.performanceTimer.end();
          try {
            Dx(m, i, D);
          } catch (h) {
            (v._running = !1), b(), l(h), d(h);
          }
        }
        function p(m) {
          i.performanceTimer && v.utils.performanceTimer.end(),
            (v._running = !1),
            Di(),
            l(m),
            d(m);
        }
        return v._runRules(n, i, f, p), s;
      }
      function yx(e) {
        var t, r, a;
        return (
          typeof Promise == "function" && e === ka
            ? (t = new Promise(function (n, i) {
                (r = i), (a = n);
              }))
            : (a = r = ka),
          { thenable: t, reject: r, resolve: a }
        );
      }
      function Dx(e, t, r) {
        var a = Yn(t.reporter),
          n = a(e, t, r);
        n !== void 0 && r(n);
      }
      function wx(e, t) {
        if ((Di(), typeof t == "function" && t !== ka)) {
          t(e.message);
          return;
        }
        throw e;
      }
      function _x() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var a = js(t),
          n = a.options,
          i = a.context;
        me(v._audit, "Axe is not configured. Audit is missing."),
          me(
            !v._running,
            "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run."
          );
        var o = new da(i, v._tree);
        return (
          (v._tree = o.flatTree),
          (v._selectorData = zr(o.flatTree)),
          (v._running = !0),
          new Promise(function (l, u) {
            v._audit.run(o, n, l, u);
          })
            .then(function (l) {
              l = l.map(function (c) {
                var d = c.nodes,
                  f = Ve(c, Xs);
                return ne({ nodes: d.map(xx) }, f);
              });
              var u = o.frames.map(function (c) {
                  var d = c.node;
                  return new rt(d, n).toJSON();
                }),
                s;
              return (
                o.initiator && (s = xt()),
                (v._running = !1),
                At(),
                { results: l, frames: u, environmentData: s }
              );
            })
            .catch(function (l) {
              return (v._running = !1), At(), Promise.reject(l);
            })
        );
      }
      function xx(e) {
        var t = e.node,
          r = Ve(e, Js);
        r.node = t.toJSON();
        for (var a = 0, n = ["any", "all", "none"]; a < n.length; a++) {
          var i = n[a];
          r[i] = r[i].map(function (o) {
            var l = o.relatedNodes,
              u = Ve(o, Qs);
            return ne({}, u, {
              relatedNodes: l.map(function (s) {
                return s.toJSON();
              }),
            });
          });
        }
        return r;
      }
      function Ex(e) {
        var t,
          r,
          a,
          n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n = mt(n);
        var i =
            e.find(function (u) {
              return u.environmentData;
            }) || {},
          o = i.environmentData;
        v._audit.normalizeOptions(n),
          (n.reporter =
            (t =
              (r = n.reporter) !== null && r !== void 0
                ? r
                : (a = v._audit) === null || a === void 0
                ? void 0
                : a.reporter) !== null && t !== void 0
              ? t
              : "v1"),
          Ax(e);
        var l = Jr(e);
        return (
          (l = v._audit.after(l, n)),
          l.forEach(fa),
          (l = l.map(fr)),
          Cx(l, ne({ environmentData: o }, n))
        );
      }
      function Ax(e) {
        var t = [],
          r = ft(e),
          a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value,
              i = t.shift();
            if (!!n) {
              n.frameSpec = i != null ? i : null;
              var o = Fx(n);
              t.unshift.apply(t, ie(o));
            }
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      function Fx(e) {
        var t = e.frames,
          r = e.frameSpec;
        return r
          ? t.map(function (a) {
              return rt.mergeSpecs(a, r);
            })
          : t;
      }
      function Cx(e, t) {
        return new Promise(function (r) {
          var a = Yn(t.reporter);
          a(e, t, r);
        });
      }
      function kx(e) {
        if (v._tree)
          throw new Error(
            "Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again."
          );
        return (v._tree = Pn(e)), (v._selectorData = zr(v._tree)), v._tree[0];
      }
      var Rx = kx,
        Tx = function (t, r, a) {
          console.warn(
            '"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'
          ),
            typeof r == "function" && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, Zs);
          a(ne({}, xt(i), { toolOptions: o }, _r(t, r)));
        },
        Sx = Tx,
        Ox = function (t, r, a) {
          typeof r == "function" && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, ec);
          r.resultTypes = ["violations"];
          var l = _r(t, r),
            u = l.violations;
          a(ne({}, xt(i), { toolOptions: o, violations: u }));
        },
        Ix = Ox,
        Px = function (t, r, a) {
          if (
            (typeof r == "function" && ((a = r), (r = {})),
            !t || !Array.isArray(t))
          )
            return a(t);
          var n = t.map(function (i) {
            for (
              var o = ne({}, i),
                l = ["passes", "violations", "incomplete", "inapplicable"],
                u = 0,
                s = l;
              u < s.length;
              u++
            ) {
              var c = s[u];
              o[c] &&
                Array.isArray(o[c]) &&
                (o[c] = o[c].map(function (d) {
                  var f,
                    p = d.node,
                    m = Ve(d, tc);
                  return (
                    (p =
                      typeof ((f = p) === null || f === void 0
                        ? void 0
                        : f.toJSON) == "function"
                        ? p.toJSON()
                        : p),
                    ne({ node: p }, m)
                  );
                }));
            }
            return o;
          });
          a(n);
        },
        Hs = Px,
        Nx = function (t, r, a) {
          typeof r == "function" && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, rc);
          Hs(t, o, function (l) {
            var u = xt(i);
            a({ raw: l, env: u });
          });
        },
        Mx = Nx,
        Bx = function (t, r, a) {
          typeof r == "function" && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, ac),
            l = _r(t, r),
            u = function (c) {
              c.nodes.forEach(function (d) {
                d.failureSummary = Nn(d);
              });
            };
          l.incomplete.forEach(u),
            l.violations.forEach(u),
            a(ne({}, xt(i), { toolOptions: o }, l));
        },
        qx = Bx,
        Lx = function (t, r, a) {
          typeof r == "function" && ((a = r), (r = {}));
          var n = r,
            i = n.environmentData,
            o = Ve(n, nc),
            l = _r(t, r);
          a(ne({}, xt(i), { toolOptions: o }, l));
        },
        Vx = Lx,
        jx = {
          base: {
            Audit: Ls,
            CheckResult: bi,
            Check: Os,
            Context: da,
            RuleResult: Ca,
            Rule: Ps,
            metadataFunctionMap: Fa,
          },
          public: { reporters: Er },
          helpers: {
            failureSummary: Nn,
            incompleteFallbackMessage: Mn,
            processAggregate: _r,
          },
          utils: {
            setDefaultFrameMessenger: ho,
            cacheNodeSelectors: gl,
            getNodesMatchingExpression: hl,
            convertSelector: $r,
          },
          commons: {
            dom: {
              nativelyHidden: Ao,
              displayHidden: Fo,
              visibilityHidden: Co,
              contentVisibiltyHidden: ko,
              ariaHidden: Ro,
              opacityHidden: To,
              scrollHidden: So,
              overflowHidden: Oo,
              clipHidden: Po,
              areaHidden: sn,
              detailsHidden: No,
            },
          },
        },
        Hx = jx;
      (v._thisWillBeDeletedDoNotUse = Hx),
        (v.constants = Z),
        (v.log = St),
        (v.AbstractVirtualNode = X),
        (v.SerialVirtualNode = Yl),
        (v.VirtualNode = Tn),
        (v._cache = ae),
        (v.imports = Kl),
        (v.cleanup = Jl),
        (v.configure = ch),
        (v.frameMessenger = dh),
        (v.getRules = ph),
        (v._load = cx),
        (v.plugins = {}),
        (v.registerPlugin = fx),
        (v.hasReporter = Zl),
        (v.getReporter = Yn),
        (v.addReporter = uh),
        (v.reset = mx),
        (v._runRules = Vs),
        (v.runVirtualRule = vx),
        (v.run = bx),
        (v.setup = Rx),
        (v.teardown = At),
        (v.runPartial = _x),
        (v.finishRun = Ex),
        (v.commons = bs),
        (v.utils = Ma),
        v.addReporter("na", Sx),
        v.addReporter("no-passes", Ix),
        v.addReporter("rawEnv", Mx),
        v.addReporter("raw", Hs),
        v.addReporter("v1", qx),
        v.addReporter("v2", Vx, !0);
    })(),
      v._load({
        lang: "en",
        data: {
          rules: {
            accesskeys: {
              description: "Ensures every accesskey attribute value is unique",
              help: "accesskey attribute value should be unique",
            },
            "area-alt": {
              description:
                "Ensures <area> elements of image maps have alternate text",
              help: "Active <area> elements must have alternate text",
            },
            "aria-allowed-attr": {
              description:
                "Ensures ARIA attributes are allowed for an element's role",
              help: "Elements must only use allowed ARIA attributes",
            },
            "aria-allowed-role": {
              description:
                "Ensures role attribute has an appropriate value for the element",
              help: "ARIA role should be appropriate for the element",
            },
            "aria-command-name": {
              description:
                "Ensures every ARIA button, link and menuitem has an accessible name",
              help: "ARIA commands must have an accessible name",
            },
            "aria-dialog-name": {
              description:
                "Ensures every ARIA dialog and alertdialog node has an accessible name",
              help: "ARIA dialog and alertdialog nodes should have an accessible name",
            },
            "aria-hidden-body": {
              description:
                "Ensures aria-hidden='true' is not present on the document body.",
              help: "aria-hidden='true' must not be present on the document body",
            },
            "aria-hidden-focus": {
              description:
                "Ensures aria-hidden elements are not focusable nor contain focusable elements",
              help: "ARIA hidden element must not be focusable or contain focusable elements",
            },
            "aria-input-field-name": {
              description:
                "Ensures every ARIA input field has an accessible name",
              help: "ARIA input fields must have an accessible name",
            },
            "aria-meter-name": {
              description:
                "Ensures every ARIA meter node has an accessible name",
              help: "ARIA meter nodes must have an accessible name",
            },
            "aria-progressbar-name": {
              description:
                "Ensures every ARIA progressbar node has an accessible name",
              help: "ARIA progressbar nodes must have an accessible name",
            },
            "aria-required-attr": {
              description:
                "Ensures elements with ARIA roles have all required ARIA attributes",
              help: "Required ARIA attributes must be provided",
            },
            "aria-required-children": {
              description:
                "Ensures elements with an ARIA role that require child roles contain them",
              help: "Certain ARIA roles must contain particular children",
            },
            "aria-required-parent": {
              description:
                "Ensures elements with an ARIA role that require parent roles are contained by them",
              help: "Certain ARIA roles must be contained by particular parents",
            },
            "aria-roledescription": {
              description:
                "Ensure aria-roledescription is only used on elements with an implicit or explicit role",
              help: "aria-roledescription must be on elements with a semantic role",
            },
            "aria-roles": {
              description:
                "Ensures all elements with a role attribute use a valid value",
              help: "ARIA roles used must conform to valid values",
            },
            "aria-text": {
              description:
                'Ensures "role=text" is used on elements with no focusable descendants',
              help: '"role=text" should have no focusable descendants',
            },
            "aria-toggle-field-name": {
              description:
                "Ensures every ARIA toggle field has an accessible name",
              help: "ARIA toggle fields must have an accessible name",
            },
            "aria-tooltip-name": {
              description:
                "Ensures every ARIA tooltip node has an accessible name",
              help: "ARIA tooltip nodes must have an accessible name",
            },
            "aria-treeitem-name": {
              description:
                "Ensures every ARIA treeitem node has an accessible name",
              help: "ARIA treeitem nodes should have an accessible name",
            },
            "aria-valid-attr-value": {
              description: "Ensures all ARIA attributes have valid values",
              help: "ARIA attributes must conform to valid values",
            },
            "aria-valid-attr": {
              description:
                "Ensures attributes that begin with aria- are valid ARIA attributes",
              help: "ARIA attributes must conform to valid names",
            },
            "audio-caption": {
              description: "Ensures <audio> elements have captions",
              help: "<audio> elements must have a captions track",
            },
            "autocomplete-valid": {
              description:
                "Ensure the autocomplete attribute is correct and suitable for the form field",
              help: "autocomplete attribute must be used correctly",
            },
            "avoid-inline-spacing": {
              description:
                "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
              help: "Inline text spacing must be adjustable with custom stylesheets",
            },
            blink: {
              description: "Ensures <blink> elements are not used",
              help: "<blink> elements are deprecated and must not be used",
            },
            "button-name": {
              description: "Ensures buttons have discernible text",
              help: "Buttons must have discernible text",
            },
            bypass: {
              description:
                "Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
              help: "Page must have means to bypass repeated blocks",
            },
            "color-contrast-enhanced": {
              description:
                "Ensures the contrast between foreground and background colors meets WCAG 2 AAA contrast ratio thresholds",
              help: "Elements must have sufficient color contrast",
            },
            "color-contrast": {
              description:
                "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
              help: "Elements must have sufficient color contrast",
            },
            "css-orientation-lock": {
              description:
                "Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",
              help: "CSS Media queries must not lock display orientation",
            },
            "definition-list": {
              description: "Ensures <dl> elements are structured correctly",
              help: "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
            },
            dlitem: {
              description:
                "Ensures <dt> and <dd> elements are contained by a <dl>",
              help: "<dt> and <dd> elements must be contained by a <dl>",
            },
            "document-title": {
              description:
                "Ensures each HTML document contains a non-empty <title> element",
              help: "Documents must have <title> element to aid in navigation",
            },
            "duplicate-id-active": {
              description:
                "Ensures every id attribute value of active elements is unique",
              help: "IDs of active elements must be unique",
            },
            "duplicate-id-aria": {
              description:
                "Ensures every id attribute value used in ARIA and in labels is unique",
              help: "IDs used in ARIA and labels must be unique",
            },
            "duplicate-id": {
              description: "Ensures every id attribute value is unique",
              help: "id attribute value must be unique",
            },
            "empty-heading": {
              description: "Ensures headings have discernible text",
              help: "Headings should not be empty",
            },
            "empty-table-header": {
              description: "Ensures table headers have discernible text",
              help: "Table header text should not be empty",
            },
            "focus-order-semantics": {
              description:
                "Ensures elements in the focus order have a role appropriate for interactive content",
              help: "Elements in the focus order should have an appropriate role",
            },
            "form-field-multiple-labels": {
              description:
                "Ensures form field does not have multiple label elements",
              help: "Form field must not have multiple label elements",
            },
            "frame-focusable-content": {
              description:
                "Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",
              help: "Frames with focusable content must not have tabindex=-1",
            },
            "frame-tested": {
              description:
                "Ensures <iframe> and <frame> elements contain the axe-core script",
              help: "Frames should be tested with axe-core",
            },
            "frame-title-unique": {
              description:
                "Ensures <iframe> and <frame> elements contain a unique title attribute",
              help: "Frames must have a unique title attribute",
            },
            "frame-title": {
              description:
                "Ensures <iframe> and <frame> elements have an accessible name",
              help: "Frames must have an accessible name",
            },
            "heading-order": {
              description:
                "Ensures the order of headings is semantically correct",
              help: "Heading levels should only increase by one",
            },
            "hidden-content": {
              description: "Informs users about hidden content.",
              help: "Hidden content on the page should be analyzed",
            },
            "html-has-lang": {
              description: "Ensures every HTML document has a lang attribute",
              help: "<html> element must have a lang attribute",
            },
            "html-lang-valid": {
              description:
                "Ensures the lang attribute of the <html> element has a valid value",
              help: "<html> element must have a valid value for the lang attribute",
            },
            "html-xml-lang-mismatch": {
              description:
                "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
              help: "HTML elements with lang and xml:lang must have the same base language",
            },
            "identical-links-same-purpose": {
              description:
                "Ensure that links with the same accessible name serve a similar purpose",
              help: "Links with the same name must have a similar purpose",
            },
            "image-alt": {
              description:
                "Ensures <img> elements have alternate text or a role of none or presentation",
              help: "Images must have alternate text",
            },
            "image-redundant-alt": {
              description: "Ensure image alternative is not repeated as text",
              help: "Alternative text of images should not be repeated as text",
            },
            "input-button-name": {
              description: "Ensures input buttons have discernible text",
              help: "Input buttons must have discernible text",
            },
            "input-image-alt": {
              description:
                'Ensures <input type="image"> elements have alternate text',
              help: "Image buttons must have alternate text",
            },
            "label-content-name-mismatch": {
              description:
                "Ensures that elements labelled through their content must have their visible text as part of their accessible name",
              help: "Elements must have their visible text as part of their accessible name",
            },
            "label-title-only": {
              description:
                "Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
              help: "Form elements should have a visible label",
            },
            label: {
              description: "Ensures every form element has a label",
              help: "Form elements must have labels",
            },
            "landmark-banner-is-top-level": {
              description: "Ensures the banner landmark is at top level",
              help: "Banner landmark should not be contained in another landmark",
            },
            "landmark-complementary-is-top-level": {
              description:
                "Ensures the complementary landmark or aside is at top level",
              help: "Aside should not be contained in another landmark",
            },
            "landmark-contentinfo-is-top-level": {
              description: "Ensures the contentinfo landmark is at top level",
              help: "Contentinfo landmark should not be contained in another landmark",
            },
            "landmark-main-is-top-level": {
              description: "Ensures the main landmark is at top level",
              help: "Main landmark should not be contained in another landmark",
            },
            "landmark-no-duplicate-banner": {
              description:
                "Ensures the document has at most one banner landmark",
              help: "Document should not have more than one banner landmark",
            },
            "landmark-no-duplicate-contentinfo": {
              description:
                "Ensures the document has at most one contentinfo landmark",
              help: "Document should not have more than one contentinfo landmark",
            },
            "landmark-no-duplicate-main": {
              description: "Ensures the document has at most one main landmark",
              help: "Document should not have more than one main landmark",
            },
            "landmark-one-main": {
              description: "Ensures the document has a main landmark",
              help: "Document should have one main landmark",
            },
            "landmark-unique": {
              help: "Ensures landmarks are unique",
              description:
                "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
            },
            "link-in-text-block": {
              description:
                "Ensure links are distinguished from surrounding text in a way that does not rely on color",
              help: "Links must be distinguishable without relying on color",
            },
            "link-name": {
              description: "Ensures links have discernible text",
              help: "Links must have discernible text",
            },
            list: {
              description: "Ensures that lists are structured correctly",
              help: "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
            },
            listitem: {
              description: "Ensures <li> elements are used semantically",
              help: "<li> elements must be contained in a <ul> or <ol>",
            },
            marquee: {
              description: "Ensures <marquee> elements are not used",
              help: "<marquee> elements are deprecated and must not be used",
            },
            "meta-refresh-no-exceptions": {
              description:
                'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
              help: "Delayed refresh must not be used",
            },
            "meta-refresh": {
              description:
                'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
              help: "Delayed refresh under 20 hours must not be used",
            },
            "meta-viewport-large": {
              description:
                'Ensures <meta name="viewport"> can scale a significant amount',
              help: "Users should be able to zoom and scale the text up to 500%",
            },
            "meta-viewport": {
              description:
                'Ensures <meta name="viewport"> does not disable text scaling and zooming',
              help: "Zooming and scaling must not be disabled",
            },
            "nested-interactive": {
              description:
                "Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
              help: "Interactive controls must not be nested",
            },
            "no-autoplay-audio": {
              description:
                "Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
              help: "<video> or <audio> elements must not play automatically",
            },
            "object-alt": {
              description: "Ensures <object> elements have alternate text",
              help: "<object> elements must have alternate text",
            },
            "p-as-heading": {
              description:
                "Ensure bold, italic text and font-size is not used to style <p> elements as a heading",
              help: "Styled <p> elements must not be used as headings",
            },
            "page-has-heading-one": {
              description:
                "Ensure that the page, or at least one of its frames contains a level-one heading",
              help: "Page should contain a level-one heading",
            },
            "presentation-role-conflict": {
              description:
                "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
              help: "Ensure elements marked as presentational are consistently ignored",
            },
            region: {
              description: "Ensures all page content is contained by landmarks",
              help: "All page content should be contained by landmarks",
            },
            "role-img-alt": {
              description: "Ensures [role='img'] elements have alternate text",
              help: "[role='img'] elements must have an alternative text",
            },
            "scope-attr-valid": {
              description:
                "Ensures the scope attribute is used correctly on tables",
              help: "scope attribute should be used correctly",
            },
            "scrollable-region-focusable": {
              description:
                "Ensure elements that have scrollable content are accessible by keyboard",
              help: "Scrollable region must have keyboard access",
            },
            "select-name": {
              description: "Ensures select element has an accessible name",
              help: "Select element must have an accessible name",
            },
            "server-side-image-map": {
              description: "Ensures that server-side image maps are not used",
              help: "Server-side image maps must not be used",
            },
            "skip-link": {
              description: "Ensure all skip links have a focusable target",
              help: "The skip-link target should exist and be focusable",
            },
            "svg-img-alt": {
              description:
                "Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",
              help: "<svg> elements with an img role must have an alternative text",
            },
            tabindex: {
              description:
                "Ensures tabindex attribute values are not greater than 0",
              help: "Elements should not have tabindex greater than zero",
            },
            "table-duplicate-name": {
              description:
                "Ensure the <caption> element does not contain the same text as the summary attribute",
              help: "tables should not have the same summary and caption",
            },
            "table-fake-caption": {
              description:
                "Ensure that tables with a caption use the <caption> element.",
              help: "Data or header cells must not be used to give caption to a data table.",
            },
            "target-size": {
              description: "Ensure touch target have sufficient size and space",
              help: "All touch targets must be 24px large, or leave sufficient space",
            },
            "td-has-header": {
              description:
                "Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",
              help: "Non-empty <td> elements in larger <table> must have an associated table header",
            },
            "td-headers-attr": {
              description:
                "Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",
              help: "Table cells that use the headers attribute must only refer to cells in the same table",
            },
            "th-has-data-cells": {
              description:
                "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
              help: "Table headers in a data table must refer to data cells",
            },
            "valid-lang": {
              description: "Ensures lang attributes have valid values",
              help: "lang attribute must have a valid value",
            },
            "video-caption": {
              description: "Ensures <video> elements have captions",
              help: "<video> elements must have captions",
            },
          },
          checks: {
            abstractrole: {
              impact: "serious",
              messages: {
                pass: "Abstract roles are not used",
                fail: {
                  singular:
                    "Abstract role cannot be directly used: ${data.values}",
                  plural:
                    "Abstract roles cannot be directly used: ${data.values}",
                },
              },
            },
            "aria-allowed-attr": {
              impact: "critical",
              messages: {
                pass: "ARIA attributes are used correctly for the defined role",
                fail: {
                  singular: "ARIA attribute is not allowed: ${data.values}",
                  plural: "ARIA attributes are not allowed: ${data.values}",
                },
                incomplete:
                  "Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}",
              },
            },
            "aria-allowed-role": {
              impact: "minor",
              messages: {
                pass: "ARIA role is allowed for given element",
                fail: {
                  singular:
                    "ARIA role ${data.values} is not allowed for given element",
                  plural:
                    "ARIA roles ${data.values} are not allowed for given element",
                },
                incomplete: {
                  singular:
                    "ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",
                  plural:
                    "ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element",
                },
              },
            },
            "aria-busy": {
              impact: "serious",
              messages: {
                pass: "Element has an aria-busy attribute",
                fail: 'Element has no aria-busy="true" attribute',
              },
            },
            "aria-errormessage": {
              impact: "critical",
              messages: {
                pass: "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",
                fail: {
                  singular:
                    "aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",
                  plural:
                    "aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",
                  hidden:
                    "aria-errormessage value `${data.values}` cannot reference a hidden element",
                },
                incomplete: {
                  singular:
                    "ensure aria-errormessage value `${data.values}` references an existing element",
                  plural:
                    "ensure aria-errormessage values `${data.values}` reference existing elements",
                  idrefs:
                    "unable to determine if aria-errormessage element exists on the page: ${data.values}",
                },
              },
            },
            "aria-hidden-body": {
              impact: "critical",
              messages: {
                pass: "No aria-hidden attribute is present on document body",
                fail: "aria-hidden=true should not be present on the document body",
              },
            },
            "aria-level": {
              impact: "serious",
              messages: {
                pass: "aria-level values are valid",
                incomplete:
                  "aria-level values greater than 6 are not supported in all screenreader and browser combinations",
              },
            },
            "aria-prohibited-attr": {
              impact: "serious",
              messages: {
                pass: "ARIA attribute is allowed",
                fail: {
                  hasRolePlural:
                    '${data.prohibited} attributes cannot be used with role "${data.role}".',
                  hasRoleSingular:
                    '${data.prohibited} attribute cannot be used with role "${data.role}".',
                  noRolePlural:
                    "${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",
                  noRoleSingular:
                    "${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute.",
                },
                incomplete: {
                  hasRoleSingular:
                    '${data.prohibited} attribute is not well supported with role "${data.role}".',
                  hasRolePlural:
                    '${data.prohibited} attributes are not well supported with role "${data.role}".',
                  noRoleSingular:
                    "${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",
                  noRolePlural:
                    "${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute.",
                },
              },
            },
            "aria-required-attr": {
              impact: "critical",
              messages: {
                pass: "All required ARIA attributes are present",
                fail: {
                  singular:
                    "Required ARIA attribute not present: ${data.values}",
                  plural:
                    "Required ARIA attributes not present: ${data.values}",
                },
              },
            },
            "aria-required-children": {
              impact: "critical",
              messages: {
                pass: "Required ARIA children are present",
                fail: {
                  singular:
                    "Required ARIA child role not present: ${data.values}",
                  plural:
                    "Required ARIA children role not present: ${data.values}",
                  unallowed:
                    "Element has children which are not allowed (see related nodes)",
                },
                incomplete: {
                  singular:
                    "Expecting ARIA child role to be added: ${data.values}",
                  plural:
                    "Expecting ARIA children role to be added: ${data.values}",
                },
              },
            },
            "aria-required-parent": {
              impact: "critical",
              messages: {
                pass: "Required ARIA parent role present",
                fail: {
                  singular:
                    "Required ARIA parent role not present: ${data.values}",
                  plural:
                    "Required ARIA parents role not present: ${data.values}",
                },
              },
            },
            "aria-roledescription": {
              impact: "serious",
              messages: {
                pass: "aria-roledescription used on a supported semantic role",
                incomplete:
                  "Check that the aria-roledescription is announced by supported screen readers",
                fail: "Give the element a role that supports aria-roledescription",
              },
            },
            "aria-unsupported-attr": {
              impact: "critical",
              messages: {
                pass: "ARIA attribute is supported",
                fail: "ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}",
              },
            },
            "aria-valid-attr-value": {
              impact: "critical",
              messages: {
                pass: "ARIA attribute values are valid",
                fail: {
                  singular: "Invalid ARIA attribute value: ${data.values}",
                  plural: "Invalid ARIA attribute values: ${data.values}",
                },
                incomplete: {
                  noId: "ARIA attribute element ID does not exist on the page: ${data.needsReview}",
                  noIdShadow:
                    "ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",
                  ariaCurrent:
                    'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',
                  idrefs:
                    "Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",
                  empty:
                    "ARIA attribute value is ignored while empty: ${data.needsReview}",
                },
              },
            },
            "aria-valid-attr": {
              impact: "critical",
              messages: {
                pass: "ARIA attribute name is valid",
                fail: {
                  singular: "Invalid ARIA attribute name: ${data.values}",
                  plural: "Invalid ARIA attribute names: ${data.values}",
                },
              },
            },
            deprecatedrole: {
              impact: "minor",
              messages: {
                pass: "ARIA role is not deprecated",
                fail: "The role used is deprecated: ${data}",
              },
            },
            fallbackrole: {
              impact: "serious",
              messages: {
                pass: "Only one role value used",
                fail: "Use only one role value, since fallback roles are not supported in older browsers",
                incomplete:
                  "Use only role 'presentation' or 'none' since they are synonymous.",
              },
            },
            "has-global-aria-attribute": {
              impact: "minor",
              messages: {
                pass: {
                  singular: "Element has global ARIA attribute: ${data.values}",
                  plural: "Element has global ARIA attributes: ${data.values}",
                },
                fail: "Element does not have global ARIA attribute",
              },
            },
            "has-widget-role": {
              impact: "minor",
              messages: {
                pass: "Element has a widget role.",
                fail: "Element does not have a widget role.",
              },
            },
            invalidrole: {
              impact: "critical",
              messages: {
                pass: "ARIA role is valid",
                fail: {
                  singular:
                    "Role must be one of the valid ARIA roles: ${data.values}",
                  plural:
                    "Roles must be one of the valid ARIA roles: ${data.values}",
                },
              },
            },
            "is-element-focusable": {
              impact: "minor",
              messages: {
                pass: "Element is focusable.",
                fail: "Element is not focusable.",
              },
            },
            "no-implicit-explicit-label": {
              impact: "moderate",
              messages: {
                pass: "There is no mismatch between a <label> and accessible name",
                incomplete:
                  "Check that the <label> does not need be part of the ARIA ${data} field's name",
              },
            },
            unsupportedrole: {
              impact: "critical",
              messages: {
                pass: "ARIA role is supported",
                fail: "The role used is not widely supported in screen readers and assistive technologies: ${data}",
              },
            },
            "valid-scrollable-semantics": {
              impact: "minor",
              messages: {
                pass: "Element has valid semantics for an element in the focus order.",
                fail: "Element has invalid semantics for an element in the focus order.",
              },
            },
            "color-contrast-enhanced": {
              impact: "serious",
              messages: {
                pass: "Element has sufficient color contrast of ${data.contrastRatio}",
                fail: {
                  default:
                    "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                  fgOnShadowColor:
                    "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                  shadowOnBgColor:
                    "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                },
                incomplete: {
                  default: "Unable to determine contrast ratio",
                  bgImage:
                    "Element's background color could not be determined due to a background image",
                  bgGradient:
                    "Element's background color could not be determined due to a background gradient",
                  imgNode:
                    "Element's background color could not be determined because element contains an image node",
                  bgOverlap:
                    "Element's background color could not be determined because it is overlapped by another element",
                  fgAlpha:
                    "Element's foreground color could not be determined because of alpha transparency",
                  elmPartiallyObscured:
                    "Element's background color could not be determined because it's partially obscured by another element",
                  elmPartiallyObscuring:
                    "Element's background color could not be determined because it partially overlaps other elements",
                  outsideViewport:
                    "Element's background color could not be determined because it's outside the viewport",
                  equalRatio:
                    "Element has a 1:1 contrast ratio with the background",
                  shortTextContent:
                    "Element content is too short to determine if it is actual text content",
                  nonBmp: "Element content contains only non-text characters",
                  pseudoContent:
                    "Element's background color could not be determined due to a pseudo element",
                },
              },
            },
            "color-contrast": {
              impact: "serious",
              messages: {
                pass: {
                  default:
                    "Element has sufficient color contrast of ${data.contrastRatio}",
                  hidden: "Element is hidden",
                },
                fail: {
                  default:
                    "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                  fgOnShadowColor:
                    "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                  shadowOnBgColor:
                    "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                },
                incomplete: {
                  default: "Unable to determine contrast ratio",
                  bgImage:
                    "Element's background color could not be determined due to a background image",
                  bgGradient:
                    "Element's background color could not be determined due to a background gradient",
                  imgNode:
                    "Element's background color could not be determined because element contains an image node",
                  bgOverlap:
                    "Element's background color could not be determined because it is overlapped by another element",
                  fgAlpha:
                    "Element's foreground color could not be determined because of alpha transparency",
                  elmPartiallyObscured:
                    "Element's background color could not be determined because it's partially obscured by another element",
                  elmPartiallyObscuring:
                    "Element's background color could not be determined because it partially overlaps other elements",
                  outsideViewport:
                    "Element's background color could not be determined because it's outside the viewport",
                  equalRatio:
                    "Element has a 1:1 contrast ratio with the background",
                  shortTextContent:
                    "Element content is too short to determine if it is actual text content",
                  nonBmp: "Element content contains only non-text characters",
                  pseudoContent:
                    "Element's background color could not be determined due to a pseudo element",
                },
              },
            },
            "link-in-text-block-style": {
              impact: "serious",
              messages: {
                pass: "Links can be distinguished from surrounding text by visual styling",
                fail: "The link has no styling (such as underline) to distinguish it from the surrounding text",
              },
            },
            "link-in-text-block": {
              impact: "serious",
              messages: {
                pass: "Links can be distinguished from surrounding text in some way other than by color",
                fail: {
                  fgContrast:
                    "The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",
                  bgContrast:
                    "The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})",
                },
                incomplete: {
                  default:
                    "Element's foreground contrast ratio could not be determined",
                  bgContrast:
                    "Element's background contrast ratio could not be determined",
                  bgImage:
                    "Element's contrast ratio could not be determined due to a background image",
                  bgGradient:
                    "Element's contrast ratio could not be determined due to a background gradient",
                  imgNode:
                    "Element's contrast ratio could not be determined because element contains an image node",
                  bgOverlap:
                    "Element's contrast ratio could not be determined because of element overlap",
                },
              },
            },
            "autocomplete-appropriate": {
              impact: "serious",
              messages: {
                pass: "the autocomplete value is on an appropriate element",
                fail: "the autocomplete value is inappropriate for this type of input",
              },
            },
            "autocomplete-valid": {
              impact: "serious",
              messages: {
                pass: "the autocomplete attribute is correctly formatted",
                fail: "the autocomplete attribute is incorrectly formatted",
              },
            },
            accesskeys: {
              impact: "serious",
              messages: {
                pass: "Accesskey attribute value is unique",
                fail: "Document has multiple elements with the same accesskey",
              },
            },
            "focusable-content": {
              impact: "moderate",
              messages: {
                pass: "Element contains focusable elements",
                fail: "Element should have focusable content",
              },
            },
            "focusable-disabled": {
              impact: "serious",
              messages: {
                pass: "No focusable elements contained within element",
                incomplete:
                  "Check if the focusable elements immediately move the focus indicator",
                fail: "Focusable content should be disabled or be removed from the DOM",
              },
            },
            "focusable-element": {
              impact: "moderate",
              messages: {
                pass: "Element is focusable",
                fail: "Element should be focusable",
              },
            },
            "focusable-modal-open": {
              impact: "serious",
              messages: {
                pass: "No focusable elements while a modal is open",
                incomplete:
                  "Check that focusable elements are not tabbable in the current state",
              },
            },
            "focusable-no-name": {
              impact: "serious",
              messages: {
                pass: "Element is not in tab order or has accessible text",
                fail: "Element is in tab order and does not have accessible text",
                incomplete:
                  "Unable to determine if element has an accessible name",
              },
            },
            "focusable-not-tabbable": {
              impact: "serious",
              messages: {
                pass: "No focusable elements contained within element",
                incomplete:
                  "Check if the focusable elements immediately move the focus indicator",
                fail: "Focusable content should have tabindex='-1' or be removed from the DOM",
              },
            },
            "frame-focusable-content": {
              impact: "serious",
              messages: {
                pass: "Element does not have focusable descendants",
                fail: "Element has focusable descendants",
                incomplete: "Could not determine if element has descendants",
              },
            },
            "landmark-is-top-level": {
              impact: "moderate",
              messages: {
                pass: "The ${data.role} landmark is at the top level.",
                fail: "The ${data.role} landmark is contained in another landmark.",
              },
            },
            "no-focusable-content": {
              impact: "serious",
              messages: {
                pass: "Element does not have focusable descendants",
                fail: {
                  default: "Element has focusable descendants",
                  notHidden:
                    "Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with 'aria-hidden=true')",
                },
                incomplete: "Could not determine if element has descendants",
              },
            },
            "page-has-heading-one": {
              impact: "moderate",
              messages: {
                pass: "Page has at least one level-one heading",
                fail: "Page must have a level-one heading",
              },
            },
            "page-has-main": {
              impact: "moderate",
              messages: {
                pass: "Document has at least one main landmark",
                fail: "Document does not have a main landmark",
              },
            },
            "page-no-duplicate-banner": {
              impact: "moderate",
              messages: {
                pass: "Document does not have more than one banner landmark",
                fail: "Document has more than one banner landmark",
              },
            },
            "page-no-duplicate-contentinfo": {
              impact: "moderate",
              messages: {
                pass: "Document does not have more than one contentinfo landmark",
                fail: "Document has more than one contentinfo landmark",
              },
            },
            "page-no-duplicate-main": {
              impact: "moderate",
              messages: {
                pass: "Document does not have more than one main landmark",
                fail: "Document has more than one main landmark",
              },
            },
            tabindex: {
              impact: "serious",
              messages: {
                pass: "Element does not have a tabindex greater than 0",
                fail: "Element has a tabindex greater than 0",
              },
            },
            "alt-space-value": {
              impact: "critical",
              messages: {
                pass: "Element has a valid alt attribute value",
                fail: "Element has an alt attribute containing only a space character, which is not ignored by all screen readers",
              },
            },
            "duplicate-img-label": {
              impact: "minor",
              messages: {
                pass: "Element does not duplicate existing text in <img> alt text",
                fail: "Element contains <img> element with alt text that duplicates existing text",
              },
            },
            "explicit-label": {
              impact: "critical",
              messages: {
                pass: "Form element has an explicit <label>",
                fail: "Form element does not have an explicit <label>",
                incomplete:
                  "Unable to determine if form element has an explicit <label>",
              },
            },
            "help-same-as-label": {
              impact: "minor",
              messages: {
                pass: "Help text (title or aria-describedby) does not duplicate label text",
                fail: "Help text (title or aria-describedby) text is the same as the label text",
              },
            },
            "hidden-explicit-label": {
              impact: "critical",
              messages: {
                pass: "Form element has a visible explicit <label>",
                fail: "Form element has explicit <label> that is hidden",
                incomplete:
                  "Unable to determine if form element has explicit <label> that is hidden",
              },
            },
            "implicit-label": {
              impact: "critical",
              messages: {
                pass: "Form element has an implicit (wrapped) <label>",
                fail: "Form element does not have an implicit (wrapped) <label>",
                incomplete:
                  "Unable to determine if form element has an implicit (wrapped} <label>",
              },
            },
            "label-content-name-mismatch": {
              impact: "serious",
              messages: {
                pass: "Element contains visible text as part of it's accessible name",
                fail: "Text inside the element is not included in the accessible name",
              },
            },
            "multiple-label": {
              impact: "moderate",
              messages: {
                pass: "Form field does not have multiple label elements",
                incomplete:
                  "Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information.",
              },
            },
            "title-only": {
              impact: "serious",
              messages: {
                pass: "Form element does not solely use title attribute for its label",
                fail: "Only title used to generate label for form element",
              },
            },
            "landmark-is-unique": {
              impact: "moderate",
              messages: {
                pass: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
                fail: "The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable",
              },
            },
            "has-lang": {
              impact: "serious",
              messages: {
                pass: "The <html> element has a lang attribute",
                fail: {
                  noXHTML:
                    "The xml:lang attribute is not valid on HTML pages, use the lang attribute.",
                  noLang: "The <html> element does not have a lang attribute",
                },
              },
            },
            "valid-lang": {
              impact: "serious",
              messages: {
                pass: "Value of lang attribute is included in the list of valid languages",
                fail: "Value of lang attribute not included in the list of valid languages",
              },
            },
            "xml-lang-mismatch": {
              impact: "moderate",
              messages: {
                pass: "Lang and xml:lang attributes have the same base language",
                fail: "Lang and xml:lang attributes do not have the same base language",
              },
            },
            dlitem: {
              impact: "serious",
              messages: {
                pass: "Description list item has a <dl> parent element",
                fail: "Description list item does not have a <dl> parent element",
              },
            },
            listitem: {
              impact: "serious",
              messages: {
                pass: 'List item has a <ul>, <ol> or role="list" parent element',
                fail: {
                  default:
                    "List item does not have a <ul>, <ol> parent element",
                  roleNotValid:
                    'List item does not have a <ul>, <ol> parent element without a role, or a role="list"',
                },
              },
            },
            "only-dlitems": {
              impact: "serious",
              messages: {
                pass: "dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",
                fail: "dl element has direct children that are not allowed: ${data.values}",
              },
            },
            "only-listitems": {
              impact: "serious",
              messages: {
                pass: "List element only has direct children that are allowed inside <li> elements",
                fail: "List element has direct children that are not allowed: ${data.values}",
              },
            },
            "structured-dlitems": {
              impact: "serious",
              messages: {
                pass: "When not empty, element has both <dt> and <dd> elements",
                fail: "When not empty, element does not have at least one <dt> element followed by at least one <dd> element",
              },
            },
            caption: {
              impact: "critical",
              messages: {
                pass: "The multimedia element has a captions track",
                incomplete: "Check that captions is available for the element",
              },
            },
            "frame-tested": {
              impact: "critical",
              messages: {
                pass: "The iframe was tested with axe-core",
                fail: "The iframe could not be tested with axe-core",
                incomplete: "The iframe still has to be tested with axe-core",
              },
            },
            "no-autoplay-audio": {
              impact: "moderate",
              messages: {
                pass: "<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",
                fail: "<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",
                incomplete:
                  "Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism",
              },
            },
            "css-orientation-lock": {
              impact: "serious",
              messages: {
                pass: "Display is operable, and orientation lock does not exist",
                fail: "CSS Orientation lock is applied, and makes display inoperable",
                incomplete: "CSS Orientation lock cannot be determined",
              },
            },
            "meta-viewport-large": {
              impact: "minor",
              messages: {
                pass: "<meta> tag does not prevent significant zooming on mobile devices",
                fail: "<meta> tag limits zooming on mobile devices",
              },
            },
            "meta-viewport": {
              impact: "critical",
              messages: {
                pass: "<meta> tag does not disable zooming on mobile devices",
                fail: "${data} on <meta> tag disables zooming on mobile devices",
              },
            },
            "target-offset": {
              impact: "serious",
              messages: {
                pass: "Target has sufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)",
                fail: "Target has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)",
                incomplete: {
                  default:
                    "Element with negative tabindex has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px). Is this a target?",
                  nonTabbableNeighbor:
                    "Target has insufficient offset from a neighbor with negative tabindex (${data.closestOffset}px should be at least ${data.minOffset}px). Is the neighbor a target?",
                },
              },
            },
            "target-size": {
              impact: "serious",
              messages: {
                pass: {
                  default:
                    "Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",
                  obscured:
                    "Control is ignored because it is fully obscured and thus not clickable",
                },
                fail: {
                  default:
                    "Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",
                  partiallyObscured:
                    "Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",
                },
                incomplete: {
                  default:
                    "Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",
                  contentOverflow:
                    "Element size could not be accurately determined due to overflow content",
                  partiallyObscured:
                    "Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",
                  partiallyObscuredNonTabbable:
                    "Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?",
                },
              },
            },
            "header-present": {
              impact: "serious",
              messages: {
                pass: "Page has a heading",
                fail: "Page does not have a heading",
              },
            },
            "heading-order": {
              impact: "moderate",
              messages: {
                pass: "Heading order valid",
                fail: "Heading order invalid",
                incomplete: "Unable to determine previous heading",
              },
            },
            "identical-links-same-purpose": {
              impact: "minor",
              messages: {
                pass: "There are no other links with the same name, that go to a different URL",
                incomplete:
                  "Check that links have the same purpose, or are intentionally ambiguous.",
              },
            },
            "internal-link-present": {
              impact: "serious",
              messages: {
                pass: "Valid skip link found",
                fail: "No valid skip link found",
              },
            },
            landmark: {
              impact: "serious",
              messages: {
                pass: "Page has a landmark region",
                fail: "Page does not have a landmark region",
              },
            },
            "meta-refresh-no-exceptions": {
              impact: "minor",
              messages: {
                pass: "<meta> tag does not immediately refresh the page",
                fail: "<meta> tag forces timed refresh of page",
              },
            },
            "meta-refresh": {
              impact: "critical",
              messages: {
                pass: "<meta> tag does not immediately refresh the page",
                fail: "<meta> tag forces timed refresh of page (less than 20 hours)",
              },
            },
            "p-as-heading": {
              impact: "serious",
              messages: {
                pass: "<p> elements are not styled as headings",
                fail: "Heading elements should be used instead of styled <p> elements",
                incomplete:
                  "Unable to determine if <p> elements are styled as headings",
              },
            },
            region: {
              impact: "moderate",
              messages: {
                pass: "All page content is contained by landmarks",
                fail: "Some page content is not contained by landmarks",
              },
            },
            "skip-link": {
              impact: "moderate",
              messages: {
                pass: "Skip link target exists",
                incomplete:
                  "Skip link target should become visible on activation",
                fail: "No skip link target",
              },
            },
            "unique-frame-title": {
              impact: "serious",
              messages: {
                pass: "Element's title attribute is unique",
                fail: "Element's title attribute is not unique",
              },
            },
            "duplicate-id-active": {
              impact: "serious",
              messages: {
                pass: "Document has no active elements that share the same id attribute",
                fail: "Document has active elements with the same id attribute: ${data}",
              },
            },
            "duplicate-id-aria": {
              impact: "critical",
              messages: {
                pass: "Document has no elements referenced with ARIA or labels that share the same id attribute",
                fail: "Document has multiple elements referenced with ARIA with the same id attribute: ${data}",
              },
            },
            "duplicate-id": {
              impact: "minor",
              messages: {
                pass: "Document has no static elements that share the same id attribute",
                fail: "Document has multiple static elements with the same id attribute: ${data}",
              },
            },
            "aria-label": {
              impact: "serious",
              messages: {
                pass: "aria-label attribute exists and is not empty",
                fail: "aria-label attribute does not exist or is empty",
              },
            },
            "aria-labelledby": {
              impact: "serious",
              messages: {
                pass: "aria-labelledby attribute exists and references elements that are visible to screen readers",
                fail: "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
                incomplete:
                  "ensure aria-labelledby references an existing element",
              },
            },
            "avoid-inline-spacing": {
              impact: "serious",
              messages: {
                pass: "No inline styles with '!important' that affect text spacing has been specified",
                fail: {
                  singular:
                    "Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",
                  plural:
                    "Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers",
                },
              },
            },
            "button-has-visible-text": {
              impact: "critical",
              messages: {
                pass: "Element has inner text that is visible to screen readers",
                fail: "Element does not have inner text that is visible to screen readers",
                incomplete: "Unable to determine if element has children",
              },
            },
            "doc-has-title": {
              impact: "serious",
              messages: {
                pass: "Document has a non-empty <title> element",
                fail: "Document does not have a non-empty <title> element",
              },
            },
            exists: {
              impact: "minor",
              messages: {
                pass: "Element does not exist",
                incomplete: "Element exists",
              },
            },
            "has-alt": {
              impact: "critical",
              messages: {
                pass: "Element has an alt attribute",
                fail: "Element does not have an alt attribute",
              },
            },
            "has-visible-text": {
              impact: "minor",
              messages: {
                pass: "Element has text that is visible to screen readers",
                fail: "Element does not have text that is visible to screen readers",
                incomplete: "Unable to determine if element has children",
              },
            },
            "important-letter-spacing": {
              impact: "serious",
              messages: {
                pass: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
                fail: "letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)",
              },
            },
            "important-line-height": {
              impact: "serious",
              messages: {
                pass: "line-height in the style attribute is not set to !important, or meets the minimum",
                fail: "line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)",
              },
            },
            "important-word-spacing": {
              impact: "serious",
              messages: {
                pass: "word-spacing in the style attribute is not set to !important, or meets the minimum",
                fail: "word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)",
              },
            },
            "is-on-screen": {
              impact: "serious",
              messages: {
                pass: "Element is not visible",
                fail: "Element is visible",
              },
            },
            "non-empty-alt": {
              impact: "critical",
              messages: {
                pass: "Element has a non-empty alt attribute",
                fail: {
                  noAttr: "Element has no alt attribute",
                  emptyAttr: "Element has an empty alt attribute",
                },
              },
            },
            "non-empty-if-present": {
              impact: "critical",
              messages: {
                pass: {
                  default: "Element does not have a value attribute",
                  "has-label": "Element has a non-empty value attribute",
                },
                fail: "Element has a value attribute and the value attribute is empty",
              },
            },
            "non-empty-placeholder": {
              impact: "serious",
              messages: {
                pass: "Element has a placeholder attribute",
                fail: {
                  noAttr: "Element has no placeholder attribute",
                  emptyAttr: "Element has an empty placeholder attribute",
                },
              },
            },
            "non-empty-title": {
              impact: "serious",
              messages: {
                pass: "Element has a title attribute",
                fail: {
                  noAttr: "Element has no title attribute",
                  emptyAttr: "Element has an empty title attribute",
                },
              },
            },
            "non-empty-value": {
              impact: "critical",
              messages: {
                pass: "Element has a non-empty value attribute",
                fail: {
                  noAttr: "Element has no value attribute",
                  emptyAttr: "Element has an empty value attribute",
                },
              },
            },
            "presentational-role": {
              impact: "minor",
              messages: {
                pass: 'Element\'s default semantics were overriden with role="${data.role}"',
                fail: {
                  default: `Element's default semantics were not overridden with role="none" or role="presentation"`,
                  globalAria:
                    "Element's role is not presentational because it has a global ARIA attribute",
                  focusable:
                    "Element's role is not presentational because it is focusable",
                  both: "Element's role is not presentational because it has a global ARIA attribute and is focusable",
                  iframe:
                    'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers',
                },
              },
            },
            "role-none": {
              impact: "minor",
              messages: {
                pass: `Element's default semantics were overriden with role="none"`,
                fail: `Element's default semantics were not overridden with role="none"`,
              },
            },
            "role-presentation": {
              impact: "minor",
              messages: {
                pass: `Element's default semantics were overriden with role="presentation"`,
                fail: `Element's default semantics were not overridden with role="presentation"`,
              },
            },
            "svg-non-empty-title": {
              impact: "serious",
              messages: {
                pass: "Element has a child that is a title",
                fail: {
                  noTitle: "Element has no child that is a title",
                  emptyTitle: "Element child title is empty",
                },
                incomplete:
                  "Unable to determine element has a child that is a title",
              },
            },
            "caption-faked": {
              impact: "serious",
              messages: {
                pass: "The first row of a table is not used as a caption",
                fail: "The first child of the table should be a caption instead of a table cell",
              },
            },
            "html5-scope": {
              impact: "moderate",
              messages: {
                pass: "Scope attribute is only used on table header elements (<th>)",
                fail: "In HTML 5, scope attributes may only be used on table header elements (<th>)",
              },
            },
            "same-caption-summary": {
              impact: "minor",
              messages: {
                pass: "Content of summary attribute and <caption> are not duplicated",
                fail: "Content of summary attribute and <caption> element are identical",
                incomplete:
                  "Unable to determine if <table> element has a caption",
              },
            },
            "scope-value": {
              impact: "critical",
              messages: {
                pass: "Scope attribute is used correctly",
                fail: "The value of the scope attribute may only be 'row' or 'col'",
              },
            },
            "td-has-header": {
              impact: "critical",
              messages: {
                pass: "All non-empty data cells have table headers",
                fail: "Some non-empty data cells do not have table headers",
              },
            },
            "td-headers-attr": {
              impact: "serious",
              messages: {
                pass: "The headers attribute is exclusively used to refer to other cells in the table",
                incomplete: "The headers attribute is empty",
                fail: "The headers attribute is not exclusively used to refer to other cells in the table",
              },
            },
            "th-has-data-cells": {
              impact: "serious",
              messages: {
                pass: "All table header cells refer to data cells",
                fail: "Not all table header cells refer to data cells",
                incomplete: "Table data cells are missing or empty",
              },
            },
            "hidden-content": {
              impact: "minor",
              messages: {
                pass: "All content on the page has been analyzed.",
                fail: "There were problems analyzing the content on this page.",
                incomplete:
                  "There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it.",
              },
            },
          },
          failureSummaries: {
            any: {
              failureMessage: function (S) {
                var L = "Fix any of the following:",
                  G = S;
                if (G)
                  for (var fe, De = -1, et = G.length - 1; De < et; )
                    (fe = G[(De += 1)]),
                      (L +=
                        `
  ` +
                        fe.split(`
`).join(`
  `));
                return L;
              },
            },
            none: {
              failureMessage: function (S) {
                var L = "Fix all of the following:",
                  G = S;
                if (G)
                  for (var fe, De = -1, et = G.length - 1; De < et; )
                    (fe = G[(De += 1)]),
                      (L +=
                        `
  ` +
                        fe.split(`
`).join(`
  `));
                return L;
              },
            },
          },
          incompleteFallbackMessage:
            "axe couldn't tell the reason. Time to break out the element inspector!",
        },
        rules: [
          {
            id: "accesskeys",
            selector: "[accesskey]",
            excludeHidden: !1,
            tags: ["cat.keyboard", "best-practice"],
            all: [],
            any: [],
            none: ["accesskeys"],
          },
          {
            id: "area-alt",
            selector: "map area[href]",
            excludeHidden: !1,
            tags: [
              "cat.text-alternatives",
              "wcag2a",
              "wcag244",
              "wcag412",
              "section508",
              "section508.22.a",
              "ACT",
            ],
            actIds: ["c487ae"],
            all: [],
            any: [
              { options: { attribute: "alt" }, id: "non-empty-alt" },
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "aria-allowed-attr",
            matches: "aria-allowed-attr-matches",
            tags: ["cat.aria", "wcag2a", "wcag412"],
            actIds: ["5c01ea"],
            all: [],
            any: [
              {
                options: {
                  validTreeRowAttrs: [
                    "aria-posinset",
                    "aria-setsize",
                    "aria-expanded",
                    "aria-level",
                  ],
                },
                id: "aria-allowed-attr",
              },
            ],
            none: [
              "aria-unsupported-attr",
              {
                options: { elementsAllowedAriaLabel: ["applet", "input"] },
                id: "aria-prohibited-attr",
              },
            ],
          },
          {
            id: "aria-allowed-role",
            excludeHidden: !1,
            selector: "[role]",
            matches: "aria-allowed-role-matches",
            tags: ["cat.aria", "best-practice"],
            all: [],
            any: [
              {
                options: { allowImplicit: !0, ignoredTags: [] },
                id: "aria-allowed-role",
              },
            ],
            none: [],
          },
          {
            id: "aria-command-name",
            selector: '[role="link"], [role="button"], [role="menuitem"]',
            matches: "no-naming-method-matches",
            tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
            actIds: ["97a4e1"],
            all: [],
            any: [
              "has-visible-text",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "aria-dialog-name",
            selector: '[role="dialog"], [role="alertdialog"]',
            matches: "no-naming-method-matches",
            tags: ["cat.aria", "best-practice"],
            all: [],
            any: [
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "aria-hidden-body",
            selector: "body",
            excludeHidden: !1,
            matches: "is-initiator-matches",
            tags: ["cat.aria", "wcag2a", "wcag412"],
            all: [],
            any: ["aria-hidden-body"],
            none: [],
          },
          {
            id: "aria-hidden-focus",
            selector: '[aria-hidden="true"]',
            matches: "aria-hidden-focus-matches",
            excludeHidden: !1,
            tags: ["cat.name-role-value", "wcag2a", "wcag412"],
            actIds: ["6cfa84"],
            all: [
              "focusable-modal-open",
              "focusable-disabled",
              "focusable-not-tabbable",
            ],
            any: [],
            none: [],
          },
          {
            id: "aria-input-field-name",
            selector:
              '[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',
            matches: "no-naming-method-matches",
            tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
            actIds: ["e086e5"],
            all: [],
            any: [
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: ["no-implicit-explicit-label"],
          },
          {
            id: "aria-meter-name",
            selector: '[role="meter"]',
            matches: "no-naming-method-matches",
            tags: ["cat.aria", "wcag2a", "wcag111"],
            all: [],
            any: [
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "aria-progressbar-name",
            selector: '[role="progressbar"]',
            matches: "no-naming-method-matches",
            tags: ["cat.aria", "wcag2a", "wcag111"],
            all: [],
            any: [
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "aria-required-attr",
            selector: "[role]",
            tags: ["cat.aria", "wcag2a", "wcag412"],
            actIds: ["4e8ab6"],
            all: [],
            any: ["aria-required-attr"],
            none: [],
          },
          {
            id: "aria-required-children",
            selector: "[role]",
            matches: "aria-required-children-matches",
            tags: ["cat.aria", "wcag2a", "wcag131"],
            actIds: ["bc4a75"],
            all: [],
            any: [
              {
                options: {
                  reviewEmpty: [
                    "doc-bibliography",
                    "doc-endnotes",
                    "grid",
                    "list",
                    "listbox",
                    "menu",
                    "menubar",
                    "table",
                    "tablist",
                    "tree",
                    "treegrid",
                    "rowgroup",
                  ],
                },
                id: "aria-required-children",
              },
              "aria-busy",
            ],
            none: [],
          },
          {
            id: "aria-required-parent",
            selector: "[role]",
            matches: "aria-required-parent-matches",
            tags: ["cat.aria", "wcag2a", "wcag131"],
            actIds: ["ff89c9"],
            all: [],
            any: [
              {
                options: { ownGroupRoles: ["listitem", "treeitem"] },
                id: "aria-required-parent",
              },
            ],
            none: [],
          },
          {
            id: "aria-roledescription",
            selector: "[aria-roledescription]",
            tags: ["cat.aria", "wcag2a", "wcag412"],
            all: [],
            any: [
              {
                options: {
                  supportedRoles: [
                    "button",
                    "img",
                    "checkbox",
                    "radio",
                    "combobox",
                    "menuitemcheckbox",
                    "menuitemradio",
                  ],
                },
                id: "aria-roledescription",
              },
            ],
            none: [],
          },
          {
            id: "aria-roles",
            selector: "[role]",
            matches: "no-empty-role-matches",
            tags: ["cat.aria", "wcag2a", "wcag412"],
            actIds: ["674b10"],
            all: [],
            any: [],
            none: [
              "invalidrole",
              "abstractrole",
              "unsupportedrole",
              "deprecatedrole",
            ],
          },
          {
            id: "aria-text",
            selector: "[role=text]",
            tags: ["cat.aria", "best-practice"],
            all: [],
            any: ["no-focusable-content"],
            none: [],
          },
          {
            id: "aria-toggle-field-name",
            selector:
              '[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',
            matches: "no-naming-method-matches",
            tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
            actIds: ["e086e5"],
            all: [],
            any: [
              "has-visible-text",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: ["no-implicit-explicit-label"],
          },
          {
            id: "aria-tooltip-name",
            selector: '[role="tooltip"]',
            matches: "no-naming-method-matches",
            tags: ["cat.aria", "wcag2a", "wcag412"],
            all: [],
            any: [
              "has-visible-text",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "aria-treeitem-name",
            selector: '[role="treeitem"]',
            matches: "no-naming-method-matches",
            tags: ["cat.aria", "best-practice"],
            all: [],
            any: [
              "has-visible-text",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "aria-valid-attr-value",
            matches: "aria-has-attr-matches",
            tags: ["cat.aria", "wcag2a", "wcag412"],
            actIds: ["6a7281"],
            all: [
              { options: [], id: "aria-valid-attr-value" },
              "aria-errormessage",
              "aria-level",
            ],
            any: [],
            none: [],
          },
          {
            id: "aria-valid-attr",
            matches: "aria-has-attr-matches",
            tags: ["cat.aria", "wcag2a", "wcag412"],
            actIds: ["5f99a7"],
            all: [],
            any: [{ options: [], id: "aria-valid-attr" }],
            none: [],
          },
          {
            id: "audio-caption",
            selector: "audio",
            enabled: !1,
            excludeHidden: !1,
            tags: [
              "cat.time-and-media",
              "wcag2a",
              "wcag121",
              "section508",
              "section508.22.a",
            ],
            actIds: ["2eb176", "afb423"],
            all: [],
            any: [],
            none: ["caption"],
          },
          {
            id: "autocomplete-valid",
            matches: "autocomplete-matches",
            tags: ["cat.forms", "wcag21aa", "wcag135", "ACT"],
            actIds: ["73f2c2"],
            all: [
              {
                options: {
                  stateTerms: [
                    "none",
                    "false",
                    "true",
                    "disabled",
                    "enabled",
                    "undefined",
                    "null",
                  ],
                },
                id: "autocomplete-valid",
              },
            ],
            any: [],
            none: [],
          },
          {
            id: "avoid-inline-spacing",
            selector: "[style]",
            matches: "is-visible-on-screen-matches",
            tags: ["cat.structure", "wcag21aa", "wcag1412", "ACT"],
            actIds: ["24afc2", "9e45ec", "78fd32"],
            all: [
              {
                options: { cssProperty: "letter-spacing", minValue: 0.12 },
                id: "important-letter-spacing",
              },
              {
                options: { cssProperty: "word-spacing", minValue: 0.16 },
                id: "important-word-spacing",
              },
              {
                options: {
                  multiLineOnly: !0,
                  cssProperty: "line-height",
                  minValue: 1.5,
                  normalValue: 1,
                },
                id: "important-line-height",
              },
            ],
            any: [],
            none: [],
          },
          {
            id: "blink",
            selector: "blink",
            excludeHidden: !1,
            tags: [
              "cat.time-and-media",
              "wcag2a",
              "wcag222",
              "section508",
              "section508.22.j",
            ],
            all: [],
            any: [],
            none: ["is-on-screen"],
          },
          {
            id: "button-name",
            selector: "button",
            matches: "no-explicit-name-required-matches",
            tags: [
              "cat.name-role-value",
              "wcag2a",
              "wcag412",
              "section508",
              "section508.22.a",
              "ACT",
            ],
            actIds: ["97a4e1", "m6b1q3"],
            all: [],
            any: [
              "button-has-visible-text",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
              "presentational-role",
            ],
            none: [],
          },
          {
            id: "bypass",
            selector: "html",
            pageLevel: !0,
            matches: "bypass-matches",
            reviewOnFail: !0,
            tags: [
              "cat.keyboard",
              "wcag2a",
              "wcag241",
              "section508",
              "section508.22.o",
            ],
            actIds: ["cf77f2", "047fe0", "b40fd1", "3e12e1", "ye5d6e"],
            all: [],
            any: [
              "internal-link-present",
              {
                options: {
                  selector:
                    ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]",
                },
                id: "header-present",
              },
              { options: { selector: "main, [role=main]" }, id: "landmark" },
            ],
            none: [],
          },
          {
            id: "color-contrast-enhanced",
            matches: "color-contrast-matches",
            excludeHidden: !1,
            enabled: !1,
            tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
            actIds: ["09o5cg"],
            all: [],
            any: [
              {
                options: {
                  ignoreUnicode: !0,
                  ignoreLength: !1,
                  ignorePseudo: !1,
                  boldValue: 700,
                  boldTextPt: 14,
                  largeTextPt: 18,
                  contrastRatio: {
                    normal: { expected: 7, minThreshold: 4.5 },
                    large: { expected: 4.5, minThreshold: 3 },
                  },
                  pseudoSizeThreshold: 0.25,
                  shadowOutlineEmMax: 0.1,
                },
                id: "color-contrast-enhanced",
              },
            ],
            none: [],
          },
          {
            id: "color-contrast",
            matches: "color-contrast-matches",
            excludeHidden: !1,
            tags: ["cat.color", "wcag2aa", "wcag143", "ACT"],
            actIds: ["afw4f7", "09o5cg"],
            all: [],
            any: [
              {
                options: {
                  ignoreUnicode: !0,
                  ignoreLength: !1,
                  ignorePseudo: !1,
                  boldValue: 700,
                  boldTextPt: 14,
                  largeTextPt: 18,
                  contrastRatio: {
                    normal: { expected: 4.5 },
                    large: { expected: 3 },
                  },
                  pseudoSizeThreshold: 0.25,
                  shadowOutlineEmMax: 0.2,
                },
                id: "color-contrast",
              },
            ],
            none: [],
          },
          {
            id: "css-orientation-lock",
            selector: "html",
            tags: ["cat.structure", "wcag134", "wcag21aa", "experimental"],
            actIds: ["b33eff"],
            all: [
              { options: { degreeThreshold: 2 }, id: "css-orientation-lock" },
            ],
            any: [],
            none: [],
            preload: !0,
          },
          {
            id: "definition-list",
            selector: "dl",
            matches: "no-role-matches",
            tags: ["cat.structure", "wcag2a", "wcag131"],
            all: [],
            any: [],
            none: [
              "structured-dlitems",
              {
                options: {
                  validRoles: ["definition", "term", "listitem"],
                  validNodeNames: ["dt", "dd"],
                  divGroups: !0,
                },
                id: "only-dlitems",
              },
            ],
          },
          {
            id: "dlitem",
            selector: "dd, dt",
            matches: "no-role-matches",
            tags: ["cat.structure", "wcag2a", "wcag131"],
            all: [],
            any: ["dlitem"],
            none: [],
          },
          {
            id: "document-title",
            selector: "html",
            matches: "is-initiator-matches",
            tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT"],
            actIds: ["2779a5"],
            all: [],
            any: ["doc-has-title"],
            none: [],
          },
          {
            id: "duplicate-id-active",
            selector: "[id]",
            matches: "duplicate-id-active-matches",
            excludeHidden: !1,
            tags: ["cat.parsing", "wcag2a", "wcag411"],
            actIds: ["3ea0c8"],
            all: [],
            any: ["duplicate-id-active"],
            none: [],
          },
          {
            id: "duplicate-id-aria",
            selector: "[id]",
            matches: "duplicate-id-aria-matches",
            excludeHidden: !1,
            tags: ["cat.parsing", "wcag2a", "wcag411"],
            actIds: ["3ea0c8"],
            all: [],
            any: ["duplicate-id-aria"],
            none: [],
          },
          {
            id: "duplicate-id",
            selector: "[id]",
            matches: "duplicate-id-misc-matches",
            excludeHidden: !1,
            tags: ["cat.parsing", "wcag2a", "wcag411"],
            actIds: ["3ea0c8"],
            all: [],
            any: ["duplicate-id"],
            none: [],
          },
          {
            id: "empty-heading",
            selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
            matches: "heading-matches",
            tags: ["cat.name-role-value", "best-practice"],
            actIds: ["ffd0e9"],
            impact: "minor",
            all: [],
            any: [
              "has-visible-text",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "empty-table-header",
            selector: 'th, [role="rowheader"], [role="columnheader"]',
            tags: ["cat.name-role-value", "best-practice"],
            all: [],
            any: ["has-visible-text"],
            none: [],
          },
          {
            id: "focus-order-semantics",
            selector: "div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",
            matches: "inserted-into-focus-order-matches",
            tags: ["cat.keyboard", "best-practice", "experimental"],
            all: [],
            any: [
              { options: [], id: "has-widget-role" },
              {
                options: { roles: ["tooltip"] },
                id: "valid-scrollable-semantics",
              },
            ],
            none: [],
          },
          {
            id: "form-field-multiple-labels",
            selector: "input, select, textarea",
            matches: "label-matches",
            tags: ["cat.forms", "wcag2a", "wcag332"],
            all: [],
            any: [],
            none: ["multiple-label"],
          },
          {
            id: "frame-focusable-content",
            selector: "html",
            matches: "frame-focusable-content-matches",
            tags: ["cat.keyboard", "wcag2a", "wcag211"],
            actIds: ["akn7bn"],
            all: [],
            any: ["frame-focusable-content"],
            none: [],
          },
          {
            id: "frame-tested",
            selector: "html, frame, iframe",
            tags: ["cat.structure", "review-item", "best-practice"],
            all: [{ options: { isViolation: !1 }, id: "frame-tested" }],
            any: [],
            none: [],
          },
          {
            id: "frame-title-unique",
            selector: "frame[title], iframe[title]",
            matches: "frame-title-has-text-matches",
            tags: ["cat.text-alternatives", "wcag412", "wcag2a"],
            actIds: ["4b1c6c"],
            all: [],
            any: [],
            none: ["unique-frame-title"],
            reviewOnFail: !0,
          },
          {
            id: "frame-title",
            selector: "frame, iframe",
            matches: "no-negative-tabindex-matches",
            tags: [
              "cat.text-alternatives",
              "wcag2a",
              "wcag412",
              "section508",
              "section508.22.i",
            ],
            actIds: ["cae760"],
            all: [],
            any: [
              { options: { attribute: "title" }, id: "non-empty-title" },
              "aria-label",
              "aria-labelledby",
              "presentational-role",
            ],
            none: [],
          },
          {
            id: "heading-order",
            selector: "h1, h2, h3, h4, h5, h6, [role=heading]",
            matches: "heading-matches",
            tags: ["cat.semantics", "best-practice"],
            all: [],
            any: ["heading-order"],
            none: [],
          },
          {
            id: "hidden-content",
            selector: "*",
            excludeHidden: !1,
            tags: [
              "cat.structure",
              "experimental",
              "review-item",
              "best-practice",
            ],
            all: [],
            any: ["hidden-content"],
            none: [],
          },
          {
            id: "html-has-lang",
            selector: "html",
            matches: "is-initiator-matches",
            tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
            actIds: ["b5c3f8"],
            all: [],
            any: [
              { options: { attributes: ["lang", "xml:lang"] }, id: "has-lang" },
            ],
            none: [],
          },
          {
            id: "html-lang-valid",
            selector: "html[lang], html[xml\\:lang]",
            tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
            actIds: ["bf051a"],
            all: [],
            any: [],
            none: [
              {
                options: { attributes: ["lang", "xml:lang"] },
                id: "valid-lang",
              },
            ],
          },
          {
            id: "html-xml-lang-mismatch",
            selector: "html[lang][xml\\:lang]",
            matches: "xml-lang-mismatch-matches",
            tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
            actIds: ["5b7ae0"],
            all: ["xml-lang-mismatch"],
            any: [],
            none: [],
          },
          {
            id: "identical-links-same-purpose",
            selector: 'a[href], area[href], [role="link"]',
            excludeHidden: !1,
            enabled: !1,
            matches: "identical-links-same-purpose-matches",
            tags: ["cat.semantics", "wcag2aaa", "wcag249"],
            actIds: ["b20e66"],
            all: ["identical-links-same-purpose"],
            any: [],
            none: [],
          },
          {
            id: "image-alt",
            selector: "img",
            matches: "no-explicit-name-required-matches",
            tags: [
              "cat.text-alternatives",
              "wcag2a",
              "wcag111",
              "section508",
              "section508.22.a",
              "ACT",
            ],
            actIds: ["23a2a8"],
            all: [],
            any: [
              "has-alt",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
              "presentational-role",
            ],
            none: ["alt-space-value"],
          },
          {
            id: "image-redundant-alt",
            selector: "img",
            tags: ["cat.text-alternatives", "best-practice"],
            all: [],
            any: [],
            none: [
              {
                options: {
                  parentSelector:
                    "button, [role=button], a[href], p, li, td, th",
                },
                id: "duplicate-img-label",
              },
            ],
          },
          {
            id: "input-button-name",
            selector:
              'input[type="button"], input[type="submit"], input[type="reset"]',
            matches: "no-explicit-name-required-matches",
            tags: [
              "cat.name-role-value",
              "wcag2a",
              "wcag412",
              "section508",
              "section508.22.a",
              "ACT",
            ],
            actIds: ["97a4e1"],
            all: [],
            any: [
              "non-empty-if-present",
              { options: { attribute: "value" }, id: "non-empty-value" },
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
              "presentational-role",
            ],
            none: [],
          },
          {
            id: "input-image-alt",
            selector: 'input[type="image"]',
            matches: "no-explicit-name-required-matches",
            tags: [
              "cat.text-alternatives",
              "wcag2a",
              "wcag111",
              "wcag412",
              "section508",
              "section508.22.a",
              "ACT",
            ],
            actIds: ["59796f"],
            all: [],
            any: [
              { options: { attribute: "alt" }, id: "non-empty-alt" },
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "label-content-name-mismatch",
            matches: "label-content-name-mismatch-matches",
            tags: ["cat.semantics", "wcag21a", "wcag253", "experimental"],
            actIds: ["2ee8b8"],
            all: [],
            any: [
              {
                options: { pixelThreshold: 0.1, occuranceThreshold: 3 },
                id: "label-content-name-mismatch",
              },
            ],
            none: [],
          },
          {
            id: "label-title-only",
            selector: "input, select, textarea",
            matches: "label-matches",
            tags: ["cat.forms", "best-practice"],
            all: [],
            any: [],
            none: ["title-only"],
          },
          {
            id: "label",
            selector: "input, textarea",
            matches: "label-matches",
            tags: [
              "cat.forms",
              "wcag2a",
              "wcag412",
              "section508",
              "section508.22.n",
              "ACT",
            ],
            actIds: ["e086e5"],
            all: [],
            any: [
              "implicit-label",
              "explicit-label",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
              {
                options: { attribute: "placeholder" },
                id: "non-empty-placeholder",
              },
              "presentational-role",
            ],
            none: ["help-same-as-label", "hidden-explicit-label"],
          },
          {
            id: "landmark-banner-is-top-level",
            selector: "header:not([role]), [role=banner]",
            matches: "landmark-has-body-context-matches",
            tags: ["cat.semantics", "best-practice"],
            all: [],
            any: ["landmark-is-top-level"],
            none: [],
          },
          {
            id: "landmark-complementary-is-top-level",
            selector: "aside:not([role]), [role=complementary]",
            tags: ["cat.semantics", "best-practice"],
            all: [],
            any: ["landmark-is-top-level"],
            none: [],
          },
          {
            id: "landmark-contentinfo-is-top-level",
            selector: "footer:not([role]), [role=contentinfo]",
            matches: "landmark-has-body-context-matches",
            tags: ["cat.semantics", "best-practice"],
            all: [],
            any: ["landmark-is-top-level"],
            none: [],
          },
          {
            id: "landmark-main-is-top-level",
            selector: "main:not([role]), [role=main]",
            tags: ["cat.semantics", "best-practice"],
            all: [],
            any: ["landmark-is-top-level"],
            none: [],
          },
          {
            id: "landmark-no-duplicate-banner",
            selector: "header:not([role]), [role=banner]",
            tags: ["cat.semantics", "best-practice"],
            all: [],
            any: [
              {
                options: {
                  selector: "header:not([role]), [role=banner]",
                  nativeScopeFilter: "article, aside, main, nav, section",
                },
                id: "page-no-duplicate-banner",
              },
            ],
            none: [],
          },
          {
            id: "landmark-no-duplicate-contentinfo",
            selector: "footer:not([role]), [role=contentinfo]",
            tags: ["cat.semantics", "best-practice"],
            all: [],
            any: [
              {
                options: {
                  selector: "footer:not([role]), [role=contentinfo]",
                  nativeScopeFilter: "article, aside, main, nav, section",
                },
                id: "page-no-duplicate-contentinfo",
              },
            ],
            none: [],
          },
          {
            id: "landmark-no-duplicate-main",
            selector: "main:not([role]), [role=main]",
            tags: ["cat.semantics", "best-practice"],
            all: [],
            any: [
              {
                options: { selector: "main:not([role]), [role='main']" },
                id: "page-no-duplicate-main",
              },
            ],
            none: [],
          },
          {
            id: "landmark-one-main",
            selector: "html",
            tags: ["cat.semantics", "best-practice"],
            all: [
              {
                options: {
                  selector: "main:not([role]), [role='main']",
                  passForModal: !0,
                },
                id: "page-has-main",
              },
            ],
            any: [],
            none: [],
          },
          {
            id: "landmark-unique",
            selector:
              "[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",
            tags: ["cat.semantics", "best-practice"],
            matches: "landmark-unique-matches",
            all: [],
            any: ["landmark-is-unique"],
            none: [],
          },
          {
            id: "link-in-text-block",
            selector: "a[href], [role=link]",
            matches: "link-in-text-block-matches",
            excludeHidden: !1,
            tags: ["cat.color", "wcag2a", "wcag141"],
            all: [],
            any: [
              {
                options: { requiredContrastRatio: 3 },
                id: "link-in-text-block",
              },
              "link-in-text-block-style",
            ],
            none: [],
          },
          {
            id: "link-name",
            selector: "a[href]",
            tags: [
              "cat.name-role-value",
              "wcag2a",
              "wcag412",
              "wcag244",
              "section508",
              "section508.22.a",
              "ACT",
            ],
            actIds: ["c487ae"],
            all: [],
            any: [
              "has-visible-text",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: ["focusable-no-name"],
          },
          {
            id: "list",
            selector: "ul, ol",
            matches: "no-role-matches",
            tags: ["cat.structure", "wcag2a", "wcag131"],
            all: [],
            any: [],
            none: [
              {
                options: { validRoles: ["listitem"], validNodeNames: ["li"] },
                id: "only-listitems",
              },
            ],
          },
          {
            id: "listitem",
            selector: "li",
            matches: "no-role-matches",
            tags: ["cat.structure", "wcag2a", "wcag131"],
            all: [],
            any: ["listitem"],
            none: [],
          },
          {
            id: "marquee",
            selector: "marquee",
            excludeHidden: !1,
            tags: ["cat.parsing", "wcag2a", "wcag222"],
            all: [],
            any: [],
            none: ["is-on-screen"],
          },
          {
            id: "meta-refresh-no-exceptions",
            selector: 'meta[http-equiv="refresh"][content]',
            excludeHidden: !1,
            enabled: !1,
            tags: ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"],
            actIds: ["bisz58"],
            all: [],
            any: [
              {
                options: { minDelay: 72e3, maxDelay: !1 },
                id: "meta-refresh-no-exceptions",
              },
            ],
            none: [],
          },
          {
            id: "meta-refresh",
            selector: 'meta[http-equiv="refresh"][content]',
            excludeHidden: !1,
            tags: ["cat.time-and-media", "wcag2a", "wcag221"],
            actIds: ["bc659a", "bisz58"],
            all: [],
            any: [
              { options: { minDelay: 0, maxDelay: 72e3 }, id: "meta-refresh" },
            ],
            none: [],
          },
          {
            id: "meta-viewport-large",
            selector: 'meta[name="viewport"]',
            matches: "is-initiator-matches",
            excludeHidden: !1,
            tags: ["cat.sensory-and-visual-cues", "best-practice"],
            all: [],
            any: [
              {
                options: { scaleMinimum: 5, lowerBound: 2 },
                id: "meta-viewport-large",
              },
            ],
            none: [],
          },
          {
            id: "meta-viewport",
            selector: 'meta[name="viewport"]',
            matches: "is-initiator-matches",
            excludeHidden: !1,
            tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "ACT"],
            actIds: ["b4f0c3"],
            all: [],
            any: [{ options: { scaleMinimum: 2 }, id: "meta-viewport" }],
            none: [],
          },
          {
            id: "nested-interactive",
            matches: "nested-interactive-matches",
            tags: ["cat.keyboard", "wcag2a", "wcag412"],
            actIds: ["307n5z"],
            all: [],
            any: ["no-focusable-content"],
            none: [],
          },
          {
            id: "no-autoplay-audio",
            excludeHidden: !1,
            selector: "audio[autoplay], video[autoplay]",
            matches: "no-autoplay-audio-matches",
            reviewOnFail: !0,
            tags: ["cat.time-and-media", "wcag2a", "wcag142", "ACT"],
            actIds: ["80f0bf"],
            preload: !0,
            all: [{ options: { allowedDuration: 3 }, id: "no-autoplay-audio" }],
            any: [],
            none: [],
          },
          {
            id: "object-alt",
            selector: "object[data]",
            matches: "object-is-loaded-matches",
            tags: [
              "cat.text-alternatives",
              "wcag2a",
              "wcag111",
              "section508",
              "section508.22.a",
            ],
            actIds: ["8fc3b6"],
            all: [],
            any: [
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
              "presentational-role",
            ],
            none: [],
          },
          {
            id: "p-as-heading",
            selector: "p",
            matches: "p-as-heading-matches",
            tags: ["cat.semantics", "wcag2a", "wcag131", "experimental"],
            all: [
              {
                options: {
                  margins: [
                    { weight: 150, italic: !0 },
                    { weight: 150, size: 1.15 },
                    { italic: !0, size: 1.15 },
                    { size: 1.4 },
                  ],
                  passLength: 1,
                  failLength: 0.5,
                },
                id: "p-as-heading",
              },
            ],
            any: [],
            none: [],
          },
          {
            id: "page-has-heading-one",
            selector: "html",
            tags: ["cat.semantics", "best-practice"],
            all: [
              {
                options: {
                  selector:
                    "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",
                  passForModal: !0,
                },
                id: "page-has-heading-one",
              },
            ],
            any: [],
            none: [],
          },
          {
            id: "presentation-role-conflict",
            selector: `img[alt=''], [role="none"], [role="presentation"]`,
            matches: "has-implicit-chromium-role-matches",
            tags: ["cat.aria", "best-practice", "ACT"],
            actIds: ["46ca7f"],
            all: [],
            any: [],
            none: ["is-element-focusable", "has-global-aria-attribute"],
          },
          {
            id: "region",
            selector: "body *",
            tags: ["cat.keyboard", "best-practice"],
            all: [],
            any: [
              {
                options: {
                  regionMatcher:
                    "dialog, [role=dialog], [role=alertdialog], svg",
                },
                id: "region",
              },
            ],
            none: [],
          },
          {
            id: "role-img-alt",
            selector: "[role='img']:not(img, area, input, object)",
            matches: "html-namespace-matches",
            tags: [
              "cat.text-alternatives",
              "wcag2a",
              "wcag111",
              "section508",
              "section508.22.a",
              "ACT",
            ],
            actIds: ["23a2a8"],
            all: [],
            any: [
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "scope-attr-valid",
            selector: "td[scope], th[scope]",
            tags: ["cat.tables", "best-practice"],
            all: [
              "html5-scope",
              {
                options: { values: ["row", "col", "rowgroup", "colgroup"] },
                id: "scope-value",
              },
            ],
            any: [],
            none: [],
          },
          {
            id: "scrollable-region-focusable",
            matches: "scrollable-region-focusable-matches",
            tags: ["cat.keyboard", "wcag2a", "wcag211"],
            actIds: ["0ssw9k"],
            all: [],
            any: ["focusable-content", "focusable-element"],
            none: [],
          },
          {
            id: "select-name",
            selector: "select",
            tags: [
              "cat.forms",
              "wcag2a",
              "wcag412",
              "section508",
              "section508.22.n",
              "ACT",
            ],
            actIds: ["e086e5"],
            all: [],
            any: [
              "implicit-label",
              "explicit-label",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
              "presentational-role",
            ],
            none: ["help-same-as-label", "hidden-explicit-label"],
          },
          {
            id: "server-side-image-map",
            selector: "img[ismap]",
            tags: [
              "cat.text-alternatives",
              "wcag2a",
              "wcag211",
              "section508",
              "section508.22.f",
            ],
            all: [],
            any: [],
            none: ["exists"],
          },
          {
            id: "skip-link",
            selector: 'a[href^="#"], a[href^="/#"]',
            matches: "skip-link-matches",
            tags: ["cat.keyboard", "best-practice"],
            all: [],
            any: ["skip-link"],
            none: [],
          },
          {
            id: "svg-img-alt",
            selector:
              '[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',
            matches: "svg-namespace-matches",
            tags: [
              "cat.text-alternatives",
              "wcag2a",
              "wcag111",
              "section508",
              "section508.22.a",
              "ACT",
            ],
            actIds: ["7d6734"],
            all: [],
            any: [
              "svg-non-empty-title",
              "aria-label",
              "aria-labelledby",
              { options: { attribute: "title" }, id: "non-empty-title" },
            ],
            none: [],
          },
          {
            id: "tabindex",
            selector: "[tabindex]",
            tags: ["cat.keyboard", "best-practice"],
            all: [],
            any: ["tabindex"],
            none: [],
          },
          {
            id: "table-duplicate-name",
            selector: "table",
            tags: ["cat.tables", "best-practice"],
            all: [],
            any: [],
            none: ["same-caption-summary"],
          },
          {
            id: "table-fake-caption",
            selector: "table",
            matches: "data-table-matches",
            tags: [
              "cat.tables",
              "experimental",
              "wcag2a",
              "wcag131",
              "section508",
              "section508.22.g",
            ],
            all: ["caption-faked"],
            any: [],
            none: [],
          },
          {
            id: "target-size",
            selector: "*",
            enabled: !1,
            matches: "widget-not-inline-matches",
            tags: ["wcag22aa", "wcag258", "cat.sensory-and-visual-cues"],
            all: [],
            any: [
              { options: { minSize: 24 }, id: "target-size" },
              { options: { minOffset: 24 }, id: "target-offset" },
            ],
            none: [],
          },
          {
            id: "td-has-header",
            selector: "table",
            matches: "data-table-large-matches",
            tags: [
              "cat.tables",
              "experimental",
              "wcag2a",
              "wcag131",
              "section508",
              "section508.22.g",
            ],
            all: ["td-has-header"],
            any: [],
            none: [],
          },
          {
            id: "td-headers-attr",
            selector: "table",
            matches: "table-or-grid-role-matches",
            tags: [
              "cat.tables",
              "wcag2a",
              "wcag131",
              "section508",
              "section508.22.g",
            ],
            actIds: ["a25f45"],
            all: ["td-headers-attr"],
            any: [],
            none: [],
          },
          {
            id: "th-has-data-cells",
            selector: "table",
            matches: "data-table-matches",
            tags: [
              "cat.tables",
              "wcag2a",
              "wcag131",
              "section508",
              "section508.22.g",
            ],
            actIds: ["d0f69e"],
            all: ["th-has-data-cells"],
            any: [],
            none: [],
          },
          {
            id: "valid-lang",
            selector: "[lang]:not(html), [xml\\:lang]:not(html)",
            tags: ["cat.language", "wcag2aa", "wcag312", "ACT"],
            actIds: ["de46e4"],
            all: [],
            any: [],
            none: [
              {
                options: { attributes: ["lang", "xml:lang"] },
                id: "valid-lang",
              },
            ],
          },
          {
            id: "video-caption",
            selector: "video",
            tags: [
              "cat.text-alternatives",
              "wcag2a",
              "wcag122",
              "section508",
              "section508.22.a",
            ],
            actIds: ["eac66b"],
            all: [],
            any: [],
            none: ["caption"],
          },
        ],
        checks: [
          { id: "abstractrole", evaluate: "abstractrole-evaluate" },
          {
            id: "aria-allowed-attr",
            evaluate: "aria-allowed-attr-evaluate",
            options: {
              validTreeRowAttrs: [
                "aria-posinset",
                "aria-setsize",
                "aria-expanded",
                "aria-level",
              ],
            },
          },
          {
            id: "aria-allowed-role",
            evaluate: "aria-allowed-role-evaluate",
            options: { allowImplicit: !0, ignoredTags: [] },
          },
          { id: "aria-busy", evaluate: "aria-busy-evaluate" },
          { id: "aria-errormessage", evaluate: "aria-errormessage-evaluate" },
          { id: "aria-hidden-body", evaluate: "aria-hidden-body-evaluate" },
          { id: "aria-level", evaluate: "aria-level-evaluate" },
          {
            id: "aria-prohibited-attr",
            evaluate: "aria-prohibited-attr-evaluate",
            options: { elementsAllowedAriaLabel: ["applet", "input"] },
          },
          { id: "aria-required-attr", evaluate: "aria-required-attr-evaluate" },
          {
            id: "aria-required-children",
            evaluate: "aria-required-children-evaluate",
            options: {
              reviewEmpty: [
                "doc-bibliography",
                "doc-endnotes",
                "grid",
                "list",
                "listbox",
                "menu",
                "menubar",
                "table",
                "tablist",
                "tree",
                "treegrid",
                "rowgroup",
              ],
            },
          },
          {
            id: "aria-required-parent",
            evaluate: "aria-required-parent-evaluate",
            options: { ownGroupRoles: ["listitem", "treeitem"] },
          },
          {
            id: "aria-roledescription",
            evaluate: "aria-roledescription-evaluate",
            options: {
              supportedRoles: [
                "button",
                "img",
                "checkbox",
                "radio",
                "combobox",
                "menuitemcheckbox",
                "menuitemradio",
              ],
            },
          },
          {
            id: "aria-unsupported-attr",
            evaluate: "aria-unsupported-attr-evaluate",
          },
          {
            id: "aria-valid-attr-value",
            evaluate: "aria-valid-attr-value-evaluate",
            options: [],
          },
          {
            id: "aria-valid-attr",
            evaluate: "aria-valid-attr-evaluate",
            options: [],
          },
          { id: "deprecatedrole", evaluate: "deprecatedrole-evaluate" },
          { id: "fallbackrole", evaluate: "fallbackrole-evaluate" },
          {
            id: "has-global-aria-attribute",
            evaluate: "has-global-aria-attribute-evaluate",
          },
          {
            id: "has-widget-role",
            evaluate: "has-widget-role-evaluate",
            options: [],
          },
          { id: "invalidrole", evaluate: "invalidrole-evaluate" },
          {
            id: "is-element-focusable",
            evaluate: "is-element-focusable-evaluate",
          },
          {
            id: "no-implicit-explicit-label",
            evaluate: "no-implicit-explicit-label-evaluate",
          },
          { id: "unsupportedrole", evaluate: "unsupportedrole-evaluate" },
          {
            id: "valid-scrollable-semantics",
            evaluate: "valid-scrollable-semantics-evaluate",
            options: { roles: ["tooltip"] },
          },
          {
            id: "color-contrast-enhanced",
            evaluate: "color-contrast-evaluate",
            options: {
              ignoreUnicode: !0,
              ignoreLength: !1,
              ignorePseudo: !1,
              boldValue: 700,
              boldTextPt: 14,
              largeTextPt: 18,
              contrastRatio: {
                normal: { expected: 7, minThreshold: 4.5 },
                large: { expected: 4.5, minThreshold: 3 },
              },
              pseudoSizeThreshold: 0.25,
              shadowOutlineEmMax: 0.1,
            },
          },
          {
            id: "color-contrast",
            evaluate: "color-contrast-evaluate",
            options: {
              ignoreUnicode: !0,
              ignoreLength: !1,
              ignorePseudo: !1,
              boldValue: 700,
              boldTextPt: 14,
              largeTextPt: 18,
              contrastRatio: {
                normal: { expected: 4.5 },
                large: { expected: 3 },
              },
              pseudoSizeThreshold: 0.25,
              shadowOutlineEmMax: 0.2,
            },
          },
          {
            id: "link-in-text-block-style",
            evaluate: "link-in-text-block-style-evaluate",
          },
          {
            id: "link-in-text-block",
            evaluate: "link-in-text-block-evaluate",
            options: { requiredContrastRatio: 3 },
          },
          {
            id: "autocomplete-appropriate",
            evaluate: "autocomplete-appropriate-evaluate",
            deprecated: !0,
          },
          {
            id: "autocomplete-valid",
            evaluate: "autocomplete-valid-evaluate",
            options: {
              stateTerms: [
                "none",
                "false",
                "true",
                "disabled",
                "enabled",
                "undefined",
                "null",
              ],
            },
          },
          {
            id: "accesskeys",
            evaluate: "accesskeys-evaluate",
            after: "accesskeys-after",
          },
          { id: "focusable-content", evaluate: "focusable-content-evaluate" },
          { id: "focusable-disabled", evaluate: "focusable-disabled-evaluate" },
          { id: "focusable-element", evaluate: "focusable-element-evaluate" },
          {
            id: "focusable-modal-open",
            evaluate: "focusable-modal-open-evaluate",
          },
          { id: "focusable-no-name", evaluate: "focusable-no-name-evaluate" },
          {
            id: "focusable-not-tabbable",
            evaluate: "focusable-not-tabbable-evaluate",
          },
          {
            id: "frame-focusable-content",
            evaluate: "frame-focusable-content-evaluate",
          },
          {
            id: "landmark-is-top-level",
            evaluate: "landmark-is-top-level-evaluate",
          },
          {
            id: "no-focusable-content",
            evaluate: "no-focusable-content-evaluate",
          },
          {
            id: "page-has-heading-one",
            evaluate: "has-descendant-evaluate",
            after: "has-descendant-after",
            options: {
              selector:
                "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",
              passForModal: !0,
            },
          },
          {
            id: "page-has-main",
            evaluate: "has-descendant-evaluate",
            after: "has-descendant-after",
            options: {
              selector: "main:not([role]), [role='main']",
              passForModal: !0,
            },
          },
          {
            id: "page-no-duplicate-banner",
            evaluate: "page-no-duplicate-evaluate",
            after: "page-no-duplicate-after",
            options: {
              selector: "header:not([role]), [role=banner]",
              nativeScopeFilter: "article, aside, main, nav, section",
            },
          },
          {
            id: "page-no-duplicate-contentinfo",
            evaluate: "page-no-duplicate-evaluate",
            after: "page-no-duplicate-after",
            options: {
              selector: "footer:not([role]), [role=contentinfo]",
              nativeScopeFilter: "article, aside, main, nav, section",
            },
          },
          {
            id: "page-no-duplicate-main",
            evaluate: "page-no-duplicate-evaluate",
            after: "page-no-duplicate-after",
            options: { selector: "main:not([role]), [role='main']" },
          },
          { id: "tabindex", evaluate: "tabindex-evaluate" },
          { id: "alt-space-value", evaluate: "alt-space-value-evaluate" },
          {
            id: "duplicate-img-label",
            evaluate: "duplicate-img-label-evaluate",
            options: {
              parentSelector: "button, [role=button], a[href], p, li, td, th",
            },
          },
          { id: "explicit-label", evaluate: "explicit-evaluate" },
          {
            id: "help-same-as-label",
            evaluate: "help-same-as-label-evaluate",
            enabled: !1,
          },
          {
            id: "hidden-explicit-label",
            evaluate: "hidden-explicit-label-evaluate",
          },
          { id: "implicit-label", evaluate: "implicit-evaluate" },
          {
            id: "label-content-name-mismatch",
            evaluate: "label-content-name-mismatch-evaluate",
            options: { pixelThreshold: 0.1, occuranceThreshold: 3 },
          },
          { id: "multiple-label", evaluate: "multiple-label-evaluate" },
          { id: "title-only", evaluate: "title-only-evaluate" },
          {
            id: "landmark-is-unique",
            evaluate: "landmark-is-unique-evaluate",
            after: "landmark-is-unique-after",
          },
          {
            id: "has-lang",
            evaluate: "has-lang-evaluate",
            options: { attributes: ["lang", "xml:lang"] },
          },
          {
            id: "valid-lang",
            evaluate: "valid-lang-evaluate",
            options: { attributes: ["lang", "xml:lang"] },
          },
          { id: "xml-lang-mismatch", evaluate: "xml-lang-mismatch-evaluate" },
          { id: "dlitem", evaluate: "dlitem-evaluate" },
          { id: "listitem", evaluate: "listitem-evaluate" },
          {
            id: "only-dlitems",
            evaluate: "invalid-children-evaluate",
            options: {
              validRoles: ["definition", "term", "listitem"],
              validNodeNames: ["dt", "dd"],
              divGroups: !0,
            },
          },
          {
            id: "only-listitems",
            evaluate: "invalid-children-evaluate",
            options: { validRoles: ["listitem"], validNodeNames: ["li"] },
          },
          { id: "structured-dlitems", evaluate: "structured-dlitems-evaluate" },
          { id: "caption", evaluate: "caption-evaluate" },
          {
            id: "frame-tested",
            evaluate: "frame-tested-evaluate",
            after: "frame-tested-after",
            options: { isViolation: !1 },
          },
          {
            id: "no-autoplay-audio",
            evaluate: "no-autoplay-audio-evaluate",
            options: { allowedDuration: 3 },
          },
          {
            id: "css-orientation-lock",
            evaluate: "css-orientation-lock-evaluate",
            options: { degreeThreshold: 2 },
          },
          {
            id: "meta-viewport-large",
            evaluate: "meta-viewport-scale-evaluate",
            options: { scaleMinimum: 5, lowerBound: 2 },
          },
          {
            id: "meta-viewport",
            evaluate: "meta-viewport-scale-evaluate",
            options: { scaleMinimum: 2 },
          },
          {
            id: "target-offset",
            evaluate: "target-offset-evaluate",
            options: { minOffset: 24 },
          },
          {
            id: "target-size",
            evaluate: "target-size-evaluate",
            options: { minSize: 24 },
          },
          {
            id: "header-present",
            evaluate: "has-descendant-evaluate",
            after: "has-descendant-after",
            options: {
              selector:
                ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]",
            },
          },
          {
            id: "heading-order",
            evaluate: "heading-order-evaluate",
            after: "heading-order-after",
          },
          {
            id: "identical-links-same-purpose",
            evaluate: "identical-links-same-purpose-evaluate",
            after: "identical-links-same-purpose-after",
          },
          {
            id: "internal-link-present",
            evaluate: "internal-link-present-evaluate",
          },
          {
            id: "landmark",
            evaluate: "has-descendant-evaluate",
            options: { selector: "main, [role=main]" },
          },
          {
            id: "meta-refresh-no-exceptions",
            evaluate: "meta-refresh-evaluate",
            options: { minDelay: 72e3, maxDelay: !1 },
          },
          {
            id: "meta-refresh",
            evaluate: "meta-refresh-evaluate",
            options: { minDelay: 0, maxDelay: 72e3 },
          },
          {
            id: "p-as-heading",
            evaluate: "p-as-heading-evaluate",
            options: {
              margins: [
                { weight: 150, italic: !0 },
                { weight: 150, size: 1.15 },
                { italic: !0, size: 1.15 },
                { size: 1.4 },
              ],
              passLength: 1,
              failLength: 0.5,
            },
          },
          {
            id: "region",
            evaluate: "region-evaluate",
            after: "region-after",
            options: {
              regionMatcher: "dialog, [role=dialog], [role=alertdialog], svg",
            },
          },
          { id: "skip-link", evaluate: "skip-link-evaluate" },
          {
            id: "unique-frame-title",
            evaluate: "unique-frame-title-evaluate",
            after: "unique-frame-title-after",
          },
          {
            id: "duplicate-id-active",
            evaluate: "duplicate-id-evaluate",
            after: "duplicate-id-after",
          },
          {
            id: "duplicate-id-aria",
            evaluate: "duplicate-id-evaluate",
            after: "duplicate-id-after",
          },
          {
            id: "duplicate-id",
            evaluate: "duplicate-id-evaluate",
            after: "duplicate-id-after",
          },
          { id: "aria-label", evaluate: "aria-label-evaluate" },
          { id: "aria-labelledby", evaluate: "aria-labelledby-evaluate" },
          {
            id: "avoid-inline-spacing",
            evaluate: "avoid-inline-spacing-evaluate",
            options: {
              cssProperties: ["line-height", "letter-spacing", "word-spacing"],
            },
          },
          {
            id: "button-has-visible-text",
            evaluate: "has-text-content-evaluate",
          },
          { id: "doc-has-title", evaluate: "doc-has-title-evaluate" },
          { id: "exists", evaluate: "exists-evaluate" },
          { id: "has-alt", evaluate: "has-alt-evaluate" },
          { id: "has-visible-text", evaluate: "has-text-content-evaluate" },
          {
            id: "important-letter-spacing",
            evaluate: "inline-style-property-evaluate",
            options: { cssProperty: "letter-spacing", minValue: 0.12 },
          },
          {
            id: "important-line-height",
            evaluate: "inline-style-property-evaluate",
            options: {
              multiLineOnly: !0,
              cssProperty: "line-height",
              minValue: 1.5,
              normalValue: 1,
            },
          },
          {
            id: "important-word-spacing",
            evaluate: "inline-style-property-evaluate",
            options: { cssProperty: "word-spacing", minValue: 0.16 },
          },
          { id: "is-on-screen", evaluate: "is-on-screen-evaluate" },
          {
            id: "non-empty-alt",
            evaluate: "attr-non-space-content-evaluate",
            options: { attribute: "alt" },
          },
          {
            id: "non-empty-if-present",
            evaluate: "non-empty-if-present-evaluate",
          },
          {
            id: "non-empty-placeholder",
            evaluate: "attr-non-space-content-evaluate",
            options: { attribute: "placeholder" },
          },
          {
            id: "non-empty-title",
            evaluate: "attr-non-space-content-evaluate",
            options: { attribute: "title" },
          },
          {
            id: "non-empty-value",
            evaluate: "attr-non-space-content-evaluate",
            options: { attribute: "value" },
          },
          {
            id: "presentational-role",
            evaluate: "presentational-role-evaluate",
          },
          {
            id: "role-none",
            evaluate: "matches-definition-evaluate",
            deprecated: !0,
            options: { matcher: { attributes: { role: "none" } } },
          },
          {
            id: "role-presentation",
            evaluate: "matches-definition-evaluate",
            deprecated: !0,
            options: { matcher: { attributes: { role: "presentation" } } },
          },
          {
            id: "svg-non-empty-title",
            evaluate: "svg-non-empty-title-evaluate",
          },
          { id: "caption-faked", evaluate: "caption-faked-evaluate" },
          { id: "html5-scope", evaluate: "html5-scope-evaluate" },
          {
            id: "same-caption-summary",
            evaluate: "same-caption-summary-evaluate",
          },
          {
            id: "scope-value",
            evaluate: "scope-value-evaluate",
            options: { values: ["row", "col", "rowgroup", "colgroup"] },
          },
          { id: "td-has-header", evaluate: "td-has-header-evaluate" },
          { id: "td-headers-attr", evaluate: "td-headers-attr-evaluate" },
          { id: "th-has-data-cells", evaluate: "th-has-data-cells-evaluate" },
          { id: "hidden-content", evaluate: "hidden-content-evaluate" },
        ],
      });
  })(typeof window == "object" ? window : Ux);
})(xi);
const Wx = zx(xi.exports),
  Yx = $x({ __proto__: null, default: Wx }, [xi.exports]);
export { Yx as a };
