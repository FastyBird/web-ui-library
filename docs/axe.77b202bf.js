var HE = Object.defineProperty;
var i = (gt, Rt) => HE(gt, "name", { value: Rt, configurable: !0 });
import { X as zE, Y as UE } from "./iframe.d6914b09.js";
function $E(gt, Rt) {
  for (var D = 0; D < Rt.length; D++) {
    const rt = Rt[D];
    if (typeof rt != "string" && !Array.isArray(rt)) {
      for (const R in rt)
        if (R !== "default" && !(R in gt)) {
          const g = Object.getOwnPropertyDescriptor(rt, R);
          g && Object.defineProperty(gt, R, g.get ? g : {
            enumerable: !0,
            get: () => rt[R]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(gt, Symbol.toStringTag, { value: "Module" }));
}
i($E, "_mergeNamespaces");
var Bi = { exports: {} };
/*! axe v4.7.0
 * Copyright (c) 2023 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */
(function(gt) {
  (/* @__PURE__ */ i(function Rt(D) {
    var rt = D, R = D.document, g = g || {};
    g.version = "4.7.0", P(gt) === "object" && gt.exports && typeof Rt.toString == "function" && (g.source = "(" + Rt.toString() + ')(typeof window === "object" ? window : this);', gt.exports = g), typeof D.getComputedStyle == "function" && (D.axe = g);
    function hr(F) {
      this.name = "SupportError", this.cause = F.cause, this.message = "`".concat(F.cause, "` - feature unsupported in your environment."), F.ruleId && (this.ruleId = F.ruleId, this.message += " Skipping ".concat(this.ruleId, " rule.")), this.stack = new Error().stack;
    }
    i(hr, "SupportError"), hr.prototype = Object.create(Error.prototype), hr.prototype.constructor = hr;
    var Ac = ["node"], Fc = ["variant"], Cc = ["matches"], Tc = ["chromium"], kc = ["noImplicit"], Rc = ["noPresentational"], Sc = ["node"], Oc = ["nodes"], Ic = ["node"], Pc = ["relatedNodes"], Mc = ["environmentData"], Nc = ["environmentData"], qc = ["node"], Bc = ["environmentData"], Lc = ["environmentData"], Vc = ["environmentData"];
    function jc(F) {
      return Ui(F) || Hi(F) || Hr(F) || zi();
    }
    i(jc, "_toArray");
    function Hc(F, S, q) {
      return S = Wi(S), S in F ? Object.defineProperty(F, S, {
        value: q,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : F[S] = q, F;
    }
    i(Hc, "_defineProperty");
    function Li(F, S) {
      if (typeof S != "function" && S !== null)
        throw new TypeError("Super expression must either be null or a function");
      F.prototype = Object.create(S && S.prototype, {
        constructor: {
          value: F,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(F, "prototype", {
        writable: !1
      }), S && Ma(F, S);
    }
    i(Li, "_inherits");
    function Ma(F, S) {
      return Ma = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : /* @__PURE__ */ i(function(W, me) {
        return W.__proto__ = me, W;
      }, "_setPrototypeOf"), Ma(F, S);
    }
    i(Ma, "_setPrototypeOf");
    function Vi(F) {
      var S = Uc();
      return /* @__PURE__ */ i(function() {
        var W = jr(F), me;
        if (S) {
          var De = jr(this).constructor;
          me = Reflect.construct(W, arguments, De);
        } else
          me = W.apply(this, arguments);
        return zc(this, me);
      }, "_createSuperInternal");
    }
    i(Vi, "_createSuper");
    function zc(F, S) {
      if (S && (P(S) === "object" || typeof S == "function"))
        return S;
      if (S !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return ji(F);
    }
    i(zc, "_possibleConstructorReturn");
    function ji(F) {
      if (F === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return F;
    }
    i(ji, "_assertThisInitialized");
    function Uc() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    i(Uc, "_isNativeReflectConstruct");
    function jr(F) {
      return jr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : /* @__PURE__ */ i(function(q) {
        return q.__proto__ || Object.getPrototypeOf(q);
      }, "_getPrototypeOf"), jr(F);
    }
    i(jr, "_getPrototypeOf");
    function je(F, S) {
      if (F == null)
        return {};
      var q = $c(F, S), W, me;
      if (Object.getOwnPropertySymbols) {
        var De = Object.getOwnPropertySymbols(F);
        for (me = 0; me < De.length; me++)
          W = De[me], !(S.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(F, W) || (q[W] = F[W]));
      }
      return q;
    }
    i(je, "_objectWithoutProperties");
    function $c(F, S) {
      if (F == null)
        return {};
      var q = {}, W = Object.keys(F), me, De;
      for (De = 0; De < W.length; De++)
        me = W[De], !(S.indexOf(me) >= 0) && (q[me] = F[me]);
      return q;
    }
    i($c, "_objectWithoutPropertiesLoose");
    function ae(F) {
      return Gc(F) || Hi(F) || Hr(F) || Wc();
    }
    i(ae, "_toConsumableArray");
    function Wc() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    i(Wc, "_nonIterableSpread");
    function Hi(F) {
      if (typeof Symbol < "u" && F[Symbol.iterator] != null || F["@@iterator"] != null)
        return Array.from(F);
    }
    i(Hi, "_iterableToArray");
    function Gc(F) {
      if (Array.isArray(F))
        return Na(F);
    }
    i(Gc, "_arrayWithoutHoles");
    function ue() {
      return ue = Object.assign ? Object.assign.bind() : function(F) {
        for (var S = 1; S < arguments.length; S++) {
          var q = arguments[S];
          for (var W in q)
            Object.prototype.hasOwnProperty.call(q, W) && (F[W] = q[W]);
        }
        return F;
      }, ue.apply(this, arguments);
    }
    i(ue, "_extends");
    function ge(F, S) {
      return Ui(F) || Yc(F, S) || Hr(F, S) || zi();
    }
    i(ge, "_slicedToArray");
    function zi() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    i(zi, "_nonIterableRest");
    function Yc(F, S) {
      var q = F == null ? null : typeof Symbol < "u" && F[Symbol.iterator] || F["@@iterator"];
      if (q != null) {
        var W, me, De, at, C = [], we = !0, nt = !1;
        try {
          if (De = (q = q.call(F)).next, S === 0) {
            if (Object(q) !== q)
              return;
            we = !1;
          } else
            for (; !(we = (W = De.call(q)).done) && (C.push(W.value), C.length !== S); we = !0)
              ;
        } catch (it) {
          nt = !0, me = it;
        } finally {
          try {
            if (!we && q.return != null && (at = q.return(), Object(at) !== at))
              return;
          } finally {
            if (nt)
              throw me;
          }
        }
        return C;
      }
    }
    i(Yc, "_iterableToArrayLimit");
    function Ui(F) {
      if (Array.isArray(F))
        return F;
    }
    i(Ui, "_arrayWithHoles");
    function Wt(F, S) {
      if (!(F instanceof S))
        throw new TypeError("Cannot call a class as a function");
    }
    i(Wt, "_classCallCheck");
    function $i(F, S) {
      for (var q = 0; q < S.length; q++) {
        var W = S[q];
        W.enumerable = W.enumerable || !1, W.configurable = !0, "value" in W && (W.writable = !0), Object.defineProperty(F, Wi(W.key), W);
      }
    }
    i($i, "_defineProperties");
    function Gt(F, S, q) {
      return S && $i(F.prototype, S), q && $i(F, q), Object.defineProperty(F, "prototype", {
        writable: !1
      }), F;
    }
    i(Gt, "_createClass");
    function Wi(F) {
      var S = Kc(F, "string");
      return P(S) === "symbol" ? S : String(S);
    }
    i(Wi, "_toPropertyKey");
    function Kc(F, S) {
      if (P(F) !== "object" || F === null)
        return F;
      var q = F[Symbol.toPrimitive];
      if (q !== void 0) {
        var W = q.call(F, S || "default");
        if (P(W) !== "object")
          return W;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (S === "string" ? String : Number)(F);
    }
    i(Kc, "_toPrimitive");
    function Ke(F, S) {
      var q = typeof Symbol < "u" && F[Symbol.iterator] || F["@@iterator"];
      if (!q) {
        if (Array.isArray(F) || (q = Hr(F)) || S && F && typeof F.length == "number") {
          q && (F = q);
          var W = 0, me = /* @__PURE__ */ i(function() {
          }, "F");
          return {
            s: me,
            n: /* @__PURE__ */ i(function() {
              return W >= F.length ? {
                done: !0
              } : {
                done: !1,
                value: F[W++]
              };
            }, "n"),
            e: /* @__PURE__ */ i(function(nt) {
              throw nt;
            }, "e"),
            f: me
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var De = !0, at = !1, C;
      return {
        s: /* @__PURE__ */ i(function() {
          q = q.call(F);
        }, "s"),
        n: /* @__PURE__ */ i(function() {
          var nt = q.next();
          return De = nt.done, nt;
        }, "n"),
        e: /* @__PURE__ */ i(function(nt) {
          at = !0, C = nt;
        }, "e"),
        f: /* @__PURE__ */ i(function() {
          try {
            !De && q.return != null && q.return();
          } finally {
            if (at)
              throw C;
          }
        }, "f")
      };
    }
    i(Ke, "_createForOfIteratorHelper");
    function Hr(F, S) {
      if (!!F) {
        if (typeof F == "string")
          return Na(F, S);
        var q = Object.prototype.toString.call(F).slice(8, -1);
        if (q === "Object" && F.constructor && (q = F.constructor.name), q === "Map" || q === "Set")
          return Array.from(F);
        if (q === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q))
          return Na(F, S);
      }
    }
    i(Hr, "_unsupportedIterableToArray");
    function Na(F, S) {
      (S == null || S > F.length) && (S = F.length);
      for (var q = 0, W = new Array(S); q < S; q++)
        W[q] = F[q];
      return W;
    }
    i(Na, "_arrayLikeToArray");
    function P(F) {
      return P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
        return typeof S;
      } : function(S) {
        return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
      }, P(F);
    }
    i(P, "_typeof"), function() {
      var F = Object.create, S = Object.defineProperty, q = Object.getPrototypeOf, W = Object.prototype.hasOwnProperty, me = Object.getOwnPropertyNames, De = Object.getOwnPropertyDescriptor, at = /* @__PURE__ */ i(function(t) {
        return S(t, "__esModule", {
          value: !0
        });
      }, "__markAsModule"), C = /* @__PURE__ */ i(function(t, r) {
        return function() {
          return r || t((r = {
            exports: {}
          }).exports, r), r.exports;
        };
      }, "__commonJS"), we = /* @__PURE__ */ i(function(t, r) {
        for (var a in r)
          S(t, a, {
            get: r[a],
            enumerable: !0
          });
      }, "__export"), nt = /* @__PURE__ */ i(function(t, r, a) {
        if (r && P(r) === "object" || typeof r == "function") {
          var n = Ke(me(r)), o;
          try {
            var l = /* @__PURE__ */ i(function() {
              var s = o.value;
              !W.call(t, s) && s !== "default" && S(t, s, {
                get: /* @__PURE__ */ i(function() {
                  return r[s];
                }, "get"),
                enumerable: !(a = De(r, s)) || a.enumerable
              });
            }, "_loop");
            for (n.s(); !(o = n.n()).done; )
              l();
          } catch (u) {
            n.e(u);
          } finally {
            n.f();
          }
        }
        return t;
      }, "__exportStar"), it = /* @__PURE__ */ i(function(t) {
        return nt(at(S(t != null ? F(q(t)) : {}, "default", t && t.__esModule && "default" in t ? {
          get: /* @__PURE__ */ i(function() {
            return t.default;
          }, "get"),
          enumerable: !0
        } : {
          value: t,
          enumerable: !0
        })), t);
      }, "__toModule"), Gi = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        function t(l) {
          return l >= "a" && l <= "z" || l >= "A" && l <= "Z" || l === "-" || l === "_";
        }
        i(t, "isIdentStart"), e.isIdentStart = t;
        function r(l) {
          return l >= "a" && l <= "z" || l >= "A" && l <= "Z" || l >= "0" && l <= "9" || l === "-" || l === "_";
        }
        i(r, "isIdent"), e.isIdent = r;
        function a(l) {
          return l >= "a" && l <= "f" || l >= "A" && l <= "F" || l >= "0" && l <= "9";
        }
        i(a, "isHex"), e.isHex = a;
        function n(l) {
          for (var u = l.length, s = "", c = 0; c < u; ) {
            var d = l.charAt(c);
            if (e.identSpecialChars[d])
              s += "\\" + d;
            else if (d === "_" || d === "-" || d >= "A" && d <= "Z" || d >= "a" && d <= "z" || c !== 0 && d >= "0" && d <= "9")
              s += d;
            else {
              var f = d.charCodeAt(0);
              if ((f & 63488) === 55296) {
                var p = l.charCodeAt(c++);
                if ((f & 64512) !== 55296 || (p & 64512) !== 56320)
                  throw Error("UCS-2(decode): illegal sequence");
                f = ((f & 1023) << 10) + (p & 1023) + 65536;
              }
              s += "\\" + f.toString(16) + " ";
            }
            c++;
          }
          return s;
        }
        i(n, "escapeIdentifier"), e.escapeIdentifier = n;
        function o(l) {
          for (var u = l.length, s = "", c = 0, d; c < u; ) {
            var f = l.charAt(c);
            f === '"' ? f = '\\"' : f === "\\" ? f = "\\\\" : (d = e.strReplacementsRev[f]) !== void 0 && (f = d), s += f, c++;
          }
          return '"' + s + '"';
        }
        i(o, "escapeStr"), e.escapeStr = o, e.identSpecialChars = {
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
          "~": !0
        }, e.strReplacementsRev = {
          "\n": "\\n",
          "\r": "\\r",
          "	": "\\t",
          "\f": "\\f",
          "\v": "\\v"
        }, e.singleQuoteEscapeChars = {
          n: `
`,
          r: "\r",
          t: "	",
          f: "\f",
          "\\": "\\",
          "'": "'"
        }, e.doubleQuotesEscapeChars = {
          n: `
`,
          r: "\r",
          t: "	",
          f: "\f",
          "\\": "\\",
          '"': '"'
        };
      }), Xc = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Gi();
        function r(a, n, o, l, u, s) {
          var c = a.length, d = "";
          function f(b, E) {
            var A = "";
            for (n++, d = a.charAt(n); n < c; ) {
              if (d === b)
                return n++, A;
              if (d === "\\") {
                n++, d = a.charAt(n);
                var T = void 0;
                if (d === b)
                  A += b;
                else if ((T = E[d]) !== void 0)
                  A += T;
                else if (t.isHex(d)) {
                  var M = d;
                  for (n++, d = a.charAt(n); t.isHex(d); )
                    M += d, n++, d = a.charAt(n);
                  d === " " && (n++, d = a.charAt(n)), A += String.fromCharCode(parseInt(M, 16));
                  continue;
                } else
                  A += d;
              } else
                A += d;
              n++, d = a.charAt(n);
            }
            return A;
          }
          i(f, "getStr");
          function p() {
            var b = "";
            for (d = a.charAt(n); n < c; ) {
              if (t.isIdent(d))
                b += d;
              else if (d === "\\") {
                if (n++, n >= c)
                  throw Error("Expected symbol but end of file reached.");
                if (d = a.charAt(n), t.identSpecialChars[d])
                  b += d;
                else if (t.isHex(d)) {
                  var E = d;
                  for (n++, d = a.charAt(n); t.isHex(d); )
                    E += d, n++, d = a.charAt(n);
                  d === " " && (n++, d = a.charAt(n)), b += String.fromCharCode(parseInt(E, 16));
                  continue;
                } else
                  b += d;
              } else
                return b;
              n++, d = a.charAt(n);
            }
            return b;
          }
          i(p, "getIdent");
          function m() {
            d = a.charAt(n);
            for (var b = !1; d === " " || d === "	" || d === `
` || d === "\r" || d === "\f"; )
              b = !0, n++, d = a.charAt(n);
            return b;
          }
          i(m, "skipWhitespace");
          function h() {
            var b = y();
            if (n < c)
              throw Error('Rule expected but "' + a.charAt(n) + '" found.');
            return b;
          }
          i(h, "parse2");
          function y() {
            var b = w();
            if (!b)
              return null;
            var E = b;
            for (d = a.charAt(n); d === ","; ) {
              if (n++, m(), E.type !== "selectors" && (E = {
                type: "selectors",
                selectors: [b]
              }), b = w(), !b)
                throw Error('Rule expected after ",".');
              E.selectors.push(b);
            }
            return E;
          }
          i(y, "parseSelector");
          function w() {
            m();
            var b = {
              type: "ruleSet"
            }, E = v();
            if (!E)
              return null;
            for (var A = b; E && (E.type = "rule", A.rule = E, A = E, m(), d = a.charAt(n), !(n >= c || d === "," || d === ")")); )
              if (u[d]) {
                var T = d;
                if (n++, m(), E = v(), !E)
                  throw Error('Rule expected after "' + T + '".');
                E.nestingOperator = T;
              } else
                E = v(), E && (E.nestingOperator = null);
            return b;
          }
          i(w, "parseSingleSelector");
          function v() {
            for (var b = null; n < c; )
              if (d = a.charAt(n), d === "*")
                n++, (b = b || {}).tagName = "*";
              else if (t.isIdentStart(d) || d === "\\")
                (b = b || {}).tagName = p();
              else if (d === ".")
                n++, b = b || {}, (b.classNames = b.classNames || []).push(p());
              else if (d === "#")
                n++, (b = b || {}).id = p();
              else if (d === "[") {
                n++, m();
                var E = {
                  name: p()
                };
                if (m(), d === "]")
                  n++;
                else {
                  var A = "";
                  if (l[d] && (A = d, n++, d = a.charAt(n)), n >= c)
                    throw Error('Expected "=" but end of file reached.');
                  if (d !== "=")
                    throw Error('Expected "=" but "' + d + '" found.');
                  E.operator = A + "=", n++, m();
                  var T = "";
                  if (E.valueType = "string", d === '"')
                    T = f('"', t.doubleQuotesEscapeChars);
                  else if (d === "'")
                    T = f("'", t.singleQuoteEscapeChars);
                  else if (s && d === "$")
                    n++, T = p(), E.valueType = "substitute";
                  else {
                    for (; n < c && d !== "]"; )
                      T += d, n++, d = a.charAt(n);
                    T = T.trim();
                  }
                  if (m(), n >= c)
                    throw Error('Expected "]" but end of file reached.');
                  if (d !== "]")
                    throw Error('Expected "]" but "' + d + '" found.');
                  n++, E.value = T;
                }
                b = b || {}, (b.attrs = b.attrs || []).push(E);
              } else if (d === ":") {
                n++;
                var M = p(), L = {
                  name: M
                };
                if (d === "(") {
                  n++;
                  var j = "";
                  if (m(), o[M] === "selector")
                    L.valueType = "selector", j = y();
                  else {
                    if (L.valueType = o[M] || "string", d === '"')
                      j = f('"', t.doubleQuotesEscapeChars);
                    else if (d === "'")
                      j = f("'", t.singleQuoteEscapeChars);
                    else if (s && d === "$")
                      n++, j = p(), L.valueType = "substitute";
                    else {
                      for (; n < c && d !== ")"; )
                        j += d, n++, d = a.charAt(n);
                      j = j.trim();
                    }
                    m();
                  }
                  if (n >= c)
                    throw Error('Expected ")" but end of file reached.');
                  if (d !== ")")
                    throw Error('Expected ")" but "' + d + '" found.');
                  n++, L.value = j;
                }
                b = b || {}, (b.pseudos = b.pseudos || []).push(L);
              } else
                break;
            return b;
          }
          return i(v, "parseRule"), h();
        }
        i(r, "parseCssSelector"), e.parseCssSelector = r;
      }), Jc = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Gi();
        function r(a) {
          var n = "";
          switch (a.type) {
            case "ruleSet":
              for (var o = a.rule, l = []; o; )
                o.nestingOperator && l.push(o.nestingOperator), l.push(r(o)), o = o.rule;
              n = l.join(" ");
              break;
            case "selectors":
              n = a.selectors.map(r).join(", ");
              break;
            case "rule":
              a.tagName && (a.tagName === "*" ? n = "*" : n = t.escapeIdentifier(a.tagName)), a.id && (n += "#" + t.escapeIdentifier(a.id)), a.classNames && (n += a.classNames.map(function(u) {
                return "." + t.escapeIdentifier(u);
              }).join("")), a.attrs && (n += a.attrs.map(function(u) {
                return "operator" in u ? u.valueType === "substitute" ? "[" + t.escapeIdentifier(u.name) + u.operator + "$" + u.value + "]" : "[" + t.escapeIdentifier(u.name) + u.operator + t.escapeStr(u.value) + "]" : "[" + t.escapeIdentifier(u.name) + "]";
              }).join("")), a.pseudos && (n += a.pseudos.map(function(u) {
                return u.valueType ? u.valueType === "selector" ? ":" + t.escapeIdentifier(u.name) + "(" + r(u.value) + ")" : u.valueType === "substitute" ? ":" + t.escapeIdentifier(u.name) + "($" + u.value + ")" : u.valueType === "numeric" ? ":" + t.escapeIdentifier(u.name) + "(" + u.value + ")" : ":" + t.escapeIdentifier(u.name) + "(" + t.escapeIdentifier(u.value) + ")" : ":" + t.escapeIdentifier(u.name);
              }).join(""));
              break;
            default:
              throw Error('Unknown entity type: "' + a.type + '".');
          }
          return n;
        }
        i(r, "renderEntity"), e.renderEntity = r;
      }), Yi = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Xc(), r = Jc(), a = function() {
          function n() {
            this.pseudos = {}, this.attrEqualityMods = {}, this.ruleNestingOperators = {}, this.substitutesEnabled = !1;
          }
          return i(n, "CssSelectorParser4"), n.prototype.registerSelectorPseudos = function() {
            for (var o = [], l = 0; l < arguments.length; l++)
              o[l] = arguments[l];
            for (var u = 0, s = o; u < s.length; u++) {
              var c = s[u];
              this.pseudos[c] = "selector";
            }
            return this;
          }, n.prototype.unregisterSelectorPseudos = function() {
            for (var o = [], l = 0; l < arguments.length; l++)
              o[l] = arguments[l];
            for (var u = 0, s = o; u < s.length; u++) {
              var c = s[u];
              delete this.pseudos[c];
            }
            return this;
          }, n.prototype.registerNumericPseudos = function() {
            for (var o = [], l = 0; l < arguments.length; l++)
              o[l] = arguments[l];
            for (var u = 0, s = o; u < s.length; u++) {
              var c = s[u];
              this.pseudos[c] = "numeric";
            }
            return this;
          }, n.prototype.unregisterNumericPseudos = function() {
            for (var o = [], l = 0; l < arguments.length; l++)
              o[l] = arguments[l];
            for (var u = 0, s = o; u < s.length; u++) {
              var c = s[u];
              delete this.pseudos[c];
            }
            return this;
          }, n.prototype.registerNestingOperators = function() {
            for (var o = [], l = 0; l < arguments.length; l++)
              o[l] = arguments[l];
            for (var u = 0, s = o; u < s.length; u++) {
              var c = s[u];
              this.ruleNestingOperators[c] = !0;
            }
            return this;
          }, n.prototype.unregisterNestingOperators = function() {
            for (var o = [], l = 0; l < arguments.length; l++)
              o[l] = arguments[l];
            for (var u = 0, s = o; u < s.length; u++) {
              var c = s[u];
              delete this.ruleNestingOperators[c];
            }
            return this;
          }, n.prototype.registerAttrEqualityMods = function() {
            for (var o = [], l = 0; l < arguments.length; l++)
              o[l] = arguments[l];
            for (var u = 0, s = o; u < s.length; u++) {
              var c = s[u];
              this.attrEqualityMods[c] = !0;
            }
            return this;
          }, n.prototype.unregisterAttrEqualityMods = function() {
            for (var o = [], l = 0; l < arguments.length; l++)
              o[l] = arguments[l];
            for (var u = 0, s = o; u < s.length; u++) {
              var c = s[u];
              delete this.attrEqualityMods[c];
            }
            return this;
          }, n.prototype.enableSubstitutes = function() {
            return this.substitutesEnabled = !0, this;
          }, n.prototype.disableSubstitutes = function() {
            return this.substitutesEnabled = !1, this;
          }, n.prototype.parse = function(o) {
            return t.parseCssSelector(o, 0, this.pseudos, this.attrEqualityMods, this.ruleNestingOperators, this.substitutesEnabled);
          }, n.prototype.render = function(o) {
            return r.renderEntity(o).trim();
          }, n;
        }();
        e.CssSelectorParser = a;
      }), Qc = C(function(e, t) {
        t.exports = function() {
        };
      }), St = C(function(e, t) {
        var r = Qc()();
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Ki = C(function(e, t) {
        var r = St(), a = Array.prototype.forEach, n = Object.create, o = /* @__PURE__ */ i(function(u, s) {
          var c;
          for (c in u)
            s[c] = u[c];
        }, "process2");
        t.exports = function(l) {
          var u = n(null);
          return a.call(arguments, function(s) {
            !r(s) || o(Object(s), u);
          }), u;
        };
      }), Zc = C(function(e, t) {
        t.exports = function() {
          var r = Math.sign;
          return typeof r != "function" ? !1 : r(10) === 1 && r(-20) === -1;
        };
      }), ed = C(function(e, t) {
        t.exports = function(r) {
          return r = Number(r), isNaN(r) || r === 0 ? r : r > 0 ? 1 : -1;
        };
      }), td = C(function(e, t) {
        t.exports = Zc()() ? Math.sign : ed();
      }), rd = C(function(e, t) {
        var r = td(), a = Math.abs, n = Math.floor;
        t.exports = function(o) {
          return isNaN(o) ? 0 : (o = Number(o), o === 0 || !isFinite(o) ? o : r(o) * n(a(o)));
        };
      }), Ot = C(function(e, t) {
        var r = rd(), a = Math.max;
        t.exports = function(n) {
          return a(0, r(n));
        };
      }), Xi = C(function(e, t) {
        var r = Ot();
        t.exports = function(a, n, o) {
          var l;
          return isNaN(a) ? (l = n, l >= 0 ? o && l ? l - 1 : l : 1) : a === !1 ? !1 : r(a);
        };
      }), xt = C(function(e, t) {
        t.exports = function(r) {
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          return r;
        };
      }), Yt = C(function(e, t) {
        var r = St();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError("Cannot use null or undefined");
          return a;
        };
      }), ad = C(function(e, t) {
        var r = xt(), a = Yt(), n = Function.prototype.bind, o = Function.prototype.call, l = Object.keys, u = Object.prototype.propertyIsEnumerable;
        t.exports = function(s, c) {
          return function(d, f) {
            var p, m = arguments[2], h = arguments[3];
            return d = Object(a(d)), r(f), p = l(d), h && p.sort(typeof h == "function" ? n.call(h, d) : void 0), typeof s != "function" && (s = p[s]), o.call(s, p, function(y, w) {
              return u.call(d, y) ? o.call(f, m, d[y], y, d, w) : c;
            });
          };
        };
      }), zr = C(function(e, t) {
        t.exports = ad()("forEach");
      }), It = C(function() {
      }), nd = C(function(e, t) {
        t.exports = function() {
          var r = Object.assign, a;
          return typeof r != "function" ? !1 : (a = {
            foo: "raz"
          }, r(a, {
            bar: "dwa"
          }, {
            trzy: "trzy"
          }), a.foo + a.bar + a.trzy === "razdwatrzy");
        };
      }), id = C(function(e, t) {
        t.exports = function() {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        };
      }), od = C(function(e, t) {
        var r = St(), a = Object.keys;
        t.exports = function(n) {
          return a(r(n) ? Object(n) : n);
        };
      }), ld = C(function(e, t) {
        t.exports = id()() ? Object.keys : od();
      }), ud = C(function(e, t) {
        var r = ld(), a = Yt(), n = Math.max;
        t.exports = function(o, l) {
          var u, s, c = n(arguments.length, 2), d;
          for (o = Object(a(o)), d = /* @__PURE__ */ i(function(p) {
            try {
              o[p] = l[p];
            } catch (m) {
              u || (u = m);
            }
          }, "assign"), s = 1; s < c; ++s)
            l = arguments[s], r(l).forEach(d);
          if (u !== void 0)
            throw u;
          return o;
        };
      }), Ji = C(function(e, t) {
        t.exports = nd()() ? Object.assign : ud();
      }), sd = C(function(e, t) {
        var r = St(), a = {
          function: !0,
          object: !0
        };
        t.exports = function(n) {
          return r(n) && a[P(n)] || !1;
        };
      }), cd = C(function(e, t) {
        var r = Ji(), a = sd(), n = St(), o = Error.captureStackTrace;
        t.exports = function(l) {
          var u = new Error(l), s = arguments[1], c = arguments[2];
          return n(c) || a(s) && (c = s, s = null), n(c) && r(u, c), n(s) && (u.code = s), o && o(u, t.exports), u;
        };
      }), Qi = C(function(e, t) {
        var r = Yt(), a = Object.defineProperty, n = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, l = Object.getOwnPropertySymbols;
        t.exports = function(u, s) {
          var c, d = Object(r(s));
          if (u = Object(r(u)), o(d).forEach(function(f) {
            try {
              a(u, f, n(s, f));
            } catch (p) {
              c = p;
            }
          }), typeof l == "function" && l(d).forEach(function(f) {
            try {
              a(u, f, n(s, f));
            } catch (p) {
              c = p;
            }
          }), c !== void 0)
            throw c;
          return u;
        };
      }), Zi = C(function(e, t) {
        var r = Ot(), a = /* @__PURE__ */ i(function(c, d) {
          return d;
        }, "test"), n, o, l, u;
        try {
          Object.defineProperty(a, "length", {
            configurable: !0,
            writable: !1,
            enumerable: !1,
            value: 1
          });
        } catch {
        }
        a.length === 1 ? (n = {
          configurable: !0,
          writable: !1,
          enumerable: !1
        }, o = Object.defineProperty, t.exports = function(s, c) {
          return c = r(c), s.length === c ? s : (n.value = c, o(s, "length", n));
        }) : (u = Qi(), l = function() {
          var s = [];
          return function(c) {
            var d, f = 0;
            if (s[c])
              return s[c];
            for (d = []; c--; )
              d.push("a" + (++f).toString(36));
            return new Function("fn", "return function (" + d.join(", ") + ") { return fn.apply(this, arguments); };");
          };
        }(), t.exports = function(s, c) {
          var d;
          if (c = r(c), s.length === c)
            return s;
          d = l(c)(s);
          try {
            u(d, s);
          } catch {
          }
          return d;
        });
      }), eo = C(function(e, t) {
        var r = void 0;
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), dd = C(function(e, t) {
        var r = eo(), a = {
          object: !0,
          function: !0,
          undefined: !0
        };
        t.exports = function(n) {
          return r(n) ? hasOwnProperty.call(a, P(n)) : !1;
        };
      }), fd = C(function(e, t) {
        var r = dd();
        t.exports = function(a) {
          if (!r(a))
            return !1;
          try {
            return a.constructor ? a.constructor.prototype === a : !1;
          } catch {
            return !1;
          }
        };
      }), pd = C(function(e, t) {
        var r = fd();
        t.exports = function(a) {
          if (typeof a != "function" || !hasOwnProperty.call(a, "length"))
            return !1;
          try {
            if (typeof a.length != "number" || typeof a.call != "function" || typeof a.apply != "function")
              return !1;
          } catch {
            return !1;
          }
          return !r(a);
        };
      }), md = C(function(e, t) {
        var r = pd(), a = /^\s*class[\s{/}]/, n = Function.prototype.toString;
        t.exports = function(o) {
          return !(!r(o) || a.test(n.call(o)));
        };
      }), hd = C(function(e, t) {
        var r = "razdwatrzy";
        t.exports = function() {
          return typeof r.contains != "function" ? !1 : r.contains("dwa") === !0 && r.contains("foo") === !1;
        };
      }), vd = C(function(e, t) {
        var r = String.prototype.indexOf;
        t.exports = function(a) {
          return r.call(this, a, arguments[1]) > -1;
        };
      }), gd = C(function(e, t) {
        t.exports = hd()() ? String.prototype.contains : vd();
      }), Pt = C(function(e, t) {
        var r = eo(), a = md(), n = Ji(), o = Ki(), l = gd(), u = t.exports = function(s, c) {
          var d, f, p, m, h;
          return arguments.length < 2 || typeof s != "string" ? (m = c, c = s, s = null) : m = arguments[2], r(s) ? (d = l.call(s, "c"), f = l.call(s, "e"), p = l.call(s, "w")) : (d = p = !0, f = !1), h = {
            value: c,
            configurable: d,
            enumerable: f,
            writable: p
          }, m ? n(o(m), h) : h;
        };
        u.gs = function(s, c, d) {
          var f, p, m, h;
          return typeof s != "string" ? (m = d, d = c, c = s, s = null) : m = arguments[3], r(c) ? a(c) ? r(d) ? a(d) || (m = d, d = void 0) : d = void 0 : (m = c, c = d = void 0) : c = void 0, r(s) ? (f = l.call(s, "c"), p = l.call(s, "e")) : (f = !0, p = !1), h = {
            get: c,
            set: d,
            configurable: f,
            enumerable: p
          }, m ? n(o(m), h) : h;
        };
      }), bd = C(function(e, t) {
        var r = Pt(), a = xt(), n = Function.prototype.apply, o = Function.prototype.call, l = Object.create, u = Object.defineProperty, s = Object.defineProperties, c = Object.prototype.hasOwnProperty, d = {
          configurable: !0,
          enumerable: !1,
          writable: !0
        }, f, p, m, h, y, w, v;
        f = /* @__PURE__ */ i(function(E, A) {
          var T;
          return a(A), c.call(this, "__ee__") ? T = this.__ee__ : (T = d.value = l(null), u(this, "__ee__", d), d.value = null), T[E] ? P(T[E]) === "object" ? T[E].push(A) : T[E] = [T[E], A] : T[E] = A, this;
        }, "on"), p = /* @__PURE__ */ i(function(E, A) {
          var T, M;
          return a(A), M = this, f.call(this, E, T = /* @__PURE__ */ i(function() {
            m.call(M, E, T), n.call(A, this, arguments);
          }, "once2")), T.__eeOnceListener__ = A, this;
        }, "once"), m = /* @__PURE__ */ i(function(E, A) {
          var T, M, L, j;
          if (a(A), !c.call(this, "__ee__"))
            return this;
          if (T = this.__ee__, !T[E])
            return this;
          if (M = T[E], P(M) === "object")
            for (j = 0; L = M[j]; ++j)
              (L === A || L.__eeOnceListener__ === A) && (M.length === 2 ? T[E] = M[j ? 0 : 1] : M.splice(j, 1));
          else
            (M === A || M.__eeOnceListener__ === A) && delete T[E];
          return this;
        }, "off"), h = /* @__PURE__ */ i(function(E) {
          var A, T, M, L, j;
          if (!!c.call(this, "__ee__") && (L = this.__ee__[E], !!L))
            if (P(L) === "object") {
              for (T = arguments.length, j = new Array(T - 1), A = 1; A < T; ++A)
                j[A - 1] = arguments[A];
              for (L = L.slice(), A = 0; M = L[A]; ++A)
                n.call(M, this, j);
            } else
              switch (arguments.length) {
                case 1:
                  o.call(L, this);
                  break;
                case 2:
                  o.call(L, this, arguments[1]);
                  break;
                case 3:
                  o.call(L, this, arguments[1], arguments[2]);
                  break;
                default:
                  for (T = arguments.length, j = new Array(T - 1), A = 1; A < T; ++A)
                    j[A - 1] = arguments[A];
                  n.call(L, this, j);
              }
        }, "emit"), y = {
          on: f,
          once: p,
          off: m,
          emit: h
        }, w = {
          on: r(f),
          once: r(p),
          off: r(m),
          emit: r(h)
        }, v = s({}, w), t.exports = e = /* @__PURE__ */ i(function(E) {
          return E == null ? l(v) : s(Object(E), w);
        }, "exports"), e.methods = y;
      }), yd = C(function(e, t) {
        t.exports = function() {
          var r = Array.from, a, n;
          return typeof r != "function" ? !1 : (a = ["raz", "dwa"], n = r(a), Boolean(n && n !== a && n[1] === "dwa"));
        };
      }), Dd = C(function(e, t) {
        t.exports = function() {
          return (typeof globalThis > "u" ? "undefined" : P(globalThis)) !== "object" || !globalThis ? !1 : globalThis.Array === Array;
        };
      }), wd = C(function(e, t) {
        var r = /* @__PURE__ */ i(function() {
          if ((typeof self > "u" ? "undefined" : P(self)) === "object" && self)
            return self;
          if ((typeof D > "u" ? "undefined" : P(D)) === "object" && D)
            return D;
          throw new Error("Unable to resolve global `this`");
        }, "naiveFallback");
        t.exports = function() {
          if (this)
            return this;
          try {
            Object.defineProperty(Object.prototype, "__global__", {
              get: /* @__PURE__ */ i(function() {
                return this;
              }, "get"),
              configurable: !0
            });
          } catch {
            return r();
          }
          try {
            return __global__ || r();
          } finally {
            delete Object.prototype.__global__;
          }
        }();
      }), Ur = C(function(e, t) {
        t.exports = Dd()() ? globalThis : wd();
      }), _d = C(function(e, t) {
        var r = Ur(), a = {
          object: !0,
          symbol: !0
        };
        t.exports = function() {
          var n = r.Symbol, o;
          if (typeof n != "function")
            return !1;
          o = n("test symbol");
          try {
            String(o);
          } catch {
            return !1;
          }
          return !(!a[P(n.iterator)] || !a[P(n.toPrimitive)] || !a[P(n.toStringTag)]);
        };
      }), xd = C(function(e, t) {
        t.exports = function(r) {
          return r ? P(r) === "symbol" ? !0 : !r.constructor || r.constructor.name !== "Symbol" ? !1 : r[r.constructor.toStringTag] === "Symbol" : !1;
        };
      }), to = C(function(e, t) {
        var r = xd();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError(a + " is not a symbol");
          return a;
        };
      }), Ed = C(function(e, t) {
        var r = Pt(), a = Object.create, n = Object.defineProperty, o = Object.prototype, l = a(null);
        t.exports = function(u) {
          for (var s = 0, c, d; l[u + (s || "")]; )
            ++s;
          return u += s || "", l[u] = !0, c = "@@" + u, n(o, c, r.gs(null, function(f) {
            d || (d = !0, n(this, c, r(f)), d = !1);
          })), c;
        };
      }), Ad = C(function(e, t) {
        var r = Pt(), a = Ur().Symbol;
        t.exports = function(n) {
          return Object.defineProperties(n, {
            hasInstance: r("", a && a.hasInstance || n("hasInstance")),
            isConcatSpreadable: r("", a && a.isConcatSpreadable || n("isConcatSpreadable")),
            iterator: r("", a && a.iterator || n("iterator")),
            match: r("", a && a.match || n("match")),
            replace: r("", a && a.replace || n("replace")),
            search: r("", a && a.search || n("search")),
            species: r("", a && a.species || n("species")),
            split: r("", a && a.split || n("split")),
            toPrimitive: r("", a && a.toPrimitive || n("toPrimitive")),
            toStringTag: r("", a && a.toStringTag || n("toStringTag")),
            unscopables: r("", a && a.unscopables || n("unscopables"))
          });
        };
      }), Fd = C(function(e, t) {
        var r = Pt(), a = to(), n = /* @__PURE__ */ Object.create(null);
        t.exports = function(o) {
          return Object.defineProperties(o, {
            for: r(function(l) {
              return n[l] ? n[l] : n[l] = o(String(l));
            }),
            keyFor: r(function(l) {
              var u;
              a(l);
              for (u in n)
                if (n[u] === l)
                  return u;
            })
          });
        };
      }), Cd = C(function(e, t) {
        var r = Pt(), a = to(), n = Ur().Symbol, o = Ed(), l = Ad(), u = Fd(), s = Object.create, c = Object.defineProperties, d = Object.defineProperty, f, p, m;
        if (typeof n == "function")
          try {
            String(n()), m = !0;
          } catch {
          }
        else
          n = null;
        p = /* @__PURE__ */ i(function(y) {
          if (this instanceof p)
            throw new TypeError("Symbol is not a constructor");
          return f(y);
        }, "_Symbol2"), t.exports = f = /* @__PURE__ */ i(function h(y) {
          var w;
          if (this instanceof h)
            throw new TypeError("Symbol is not a constructor");
          return m ? n(y) : (w = s(p.prototype), y = y === void 0 ? "" : String(y), c(w, {
            __description__: r("", y),
            __name__: r("", o(y))
          }));
        }, "_Symbol3"), l(f), u(f), c(p.prototype, {
          constructor: r(f),
          toString: r("", function() {
            return this.__name__;
          })
        }), c(f.prototype, {
          toString: r(function() {
            return "Symbol (" + a(this).__description__ + ")";
          }),
          valueOf: r(function() {
            return a(this);
          })
        }), d(f.prototype, f.toPrimitive, r("", function() {
          var h = a(this);
          return P(h) === "symbol" ? h : h.toString();
        })), d(f.prototype, f.toStringTag, r("c", "Symbol")), d(p.prototype, f.toStringTag, r("c", f.prototype[f.toStringTag])), d(p.prototype, f.toPrimitive, r("c", f.prototype[f.toPrimitive]));
      }), Td = C(function(e, t) {
        t.exports = _d()() ? Ur().Symbol : Cd();
      }), kd = C(function(e, t) {
        var r = Object.prototype.toString, a = r.call(function() {
          return arguments;
        }());
        t.exports = function(n) {
          return r.call(n) === a;
        };
      }), Rd = C(function(e, t) {
        var r = Object.prototype.toString, a = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
        t.exports = function(n) {
          return typeof n == "function" && a(r.call(n));
        };
      }), Sd = C(function(e, t) {
        var r = Object.prototype.toString, a = r.call("");
        t.exports = function(n) {
          return typeof n == "string" || n && P(n) === "object" && (n instanceof String || r.call(n) === a) || !1;
        };
      }), Od = C(function(e, t) {
        var r = Td().iterator, a = kd(), n = Rd(), o = Ot(), l = xt(), u = Yt(), s = St(), c = Sd(), d = Array.isArray, f = Function.prototype.call, p = {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: null
        }, m = Object.defineProperty;
        t.exports = function(h) {
          var y = arguments[1], w = arguments[2], v, b, E, A, T, M, L, j, ne, te;
          if (h = Object(u(h)), s(y) && l(y), !this || this === Array || !n(this)) {
            if (!y) {
              if (a(h))
                return T = h.length, T !== 1 ? Array.apply(null, h) : (A = new Array(1), A[0] = h[0], A);
              if (d(h)) {
                for (A = new Array(T = h.length), b = 0; b < T; ++b)
                  A[b] = h[b];
                return A;
              }
            }
            A = [];
          } else
            v = this;
          if (!d(h)) {
            if ((ne = h[r]) !== void 0) {
              for (L = l(ne).call(h), v && (A = new v()), j = L.next(), b = 0; !j.done; )
                te = y ? f.call(y, w, j.value, b) : j.value, v ? (p.value = te, m(A, b, p)) : A[b] = te, j = L.next(), ++b;
              T = b;
            } else if (c(h)) {
              for (T = h.length, v && (A = new v()), b = 0, E = 0; b < T; ++b)
                te = h[b], b + 1 < T && (M = te.charCodeAt(0), M >= 55296 && M <= 56319 && (te += h[++b])), te = y ? f.call(y, w, te, E) : te, v ? (p.value = te, m(A, E, p)) : A[E] = te, ++E;
              T = E;
            }
          }
          if (T === void 0)
            for (T = o(h.length), v && (A = new v(T)), b = 0; b < T; ++b)
              te = y ? f.call(y, w, h[b], b) : h[b], v ? (p.value = te, m(A, b, p)) : A[b] = te;
          return v && (p.value = null, A.length = T), A;
        };
      }), qa = C(function(e, t) {
        t.exports = yd()() ? Array.from : Od();
      }), Id = C(function(e, t) {
        var r = qa(), a = Array.isArray;
        t.exports = function(n) {
          return a(n) ? n : r(n);
        };
      }), Pd = C(function(e, t) {
        var r = Id(), a = St(), n = xt(), o = Array.prototype.slice, l;
        l = /* @__PURE__ */ i(function(s) {
          return this.map(function(c, d) {
            return c ? c(s[d]) : s[d];
          }).concat(o.call(s, this.length));
        }, "resolveArgs"), t.exports = function(u) {
          return u = r(u), u.forEach(function(s) {
            a(s) && n(s);
          }), l.bind(u);
        };
      }), Md = C(function(e, t) {
        var r = xt();
        t.exports = function(a) {
          var n;
          return typeof a == "function" ? {
            set: a,
            get: a
          } : (n = {
            get: r(a.get)
          }, a.set !== void 0 ? (n.set = r(a.set), a.delete && (n.delete = r(a.delete)), a.clear && (n.clear = r(a.clear)), n) : (n.set = n.get, n));
        };
      }), Nd = C(function(e, t) {
        var r = cd(), a = Zi(), n = Pt(), o = bd().methods, l = Pd(), u = Md(), s = Function.prototype.apply, c = Function.prototype.call, d = Object.create, f = Object.defineProperties, p = o.on, m = o.emit;
        t.exports = function(h, y, w) {
          var v = d(null), b, E, A, T, M, L, j, ne, te, Y, $, J, ie, ce, re;
          return y !== !1 ? E = y : isNaN(h.length) ? E = 1 : E = h.length, w.normalizer && (Y = u(w.normalizer), A = Y.get, T = Y.set, M = Y.delete, L = Y.clear), w.resolvers != null && (re = l(w.resolvers)), A ? ce = a(function(K) {
            var N, fe, _ = arguments;
            if (re && (_ = re(_)), N = A(_), N !== null && hasOwnProperty.call(v, N))
              return $ && b.emit("get", N, _, this), v[N];
            if (_.length === 1 ? fe = c.call(h, this, _[0]) : fe = s.call(h, this, _), N === null) {
              if (N = A(_), N !== null)
                throw r("Circular invocation", "CIRCULAR_INVOCATION");
              N = T(_);
            } else if (hasOwnProperty.call(v, N))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v[N] = fe, J && b.emit("set", N, null, fe), fe;
          }, E) : y === 0 ? ce = /* @__PURE__ */ i(function() {
            var N;
            if (hasOwnProperty.call(v, "data"))
              return $ && b.emit("get", "data", arguments, this), v.data;
            if (arguments.length ? N = s.call(h, this, arguments) : N = c.call(h, this), hasOwnProperty.call(v, "data"))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v.data = N, J && b.emit("set", "data", null, N), N;
          }, "memoized") : ce = /* @__PURE__ */ i(function(N) {
            var fe, _ = arguments, H;
            if (re && (_ = re(arguments)), H = String(_[0]), hasOwnProperty.call(v, H))
              return $ && b.emit("get", H, _, this), v[H];
            if (_.length === 1 ? fe = c.call(h, this, _[0]) : fe = s.call(h, this, _), hasOwnProperty.call(v, H))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v[H] = fe, J && b.emit("set", H, null, fe), fe;
          }, "memoized"), b = {
            original: h,
            memoized: ce,
            profileName: w.profileName,
            get: /* @__PURE__ */ i(function(N) {
              return re && (N = re(N)), A ? A(N) : String(N[0]);
            }, "get"),
            has: /* @__PURE__ */ i(function(N) {
              return hasOwnProperty.call(v, N);
            }, "has"),
            delete: /* @__PURE__ */ i(function(N) {
              var fe;
              !hasOwnProperty.call(v, N) || (M && M(N), fe = v[N], delete v[N], ie && b.emit("delete", N, fe));
            }, "_delete"),
            clear: /* @__PURE__ */ i(function() {
              var N = v;
              L && L(), v = d(null), b.emit("clear", N);
            }, "clear"),
            on: /* @__PURE__ */ i(function(N, fe) {
              return N === "get" ? $ = !0 : N === "set" ? J = !0 : N === "delete" && (ie = !0), p.call(this, N, fe);
            }, "on"),
            emit: m,
            updateEnv: /* @__PURE__ */ i(function() {
              h = b.original;
            }, "updateEnv")
          }, A ? j = a(function(K) {
            var N, fe = arguments;
            re && (fe = re(fe)), N = A(fe), N !== null && b.delete(N);
          }, E) : y === 0 ? j = /* @__PURE__ */ i(function() {
            return b.delete("data");
          }, "extDel") : j = /* @__PURE__ */ i(function(N) {
            return re && (N = re(arguments)[0]), b.delete(N);
          }, "extDel"), ne = a(function() {
            var K, N = arguments;
            return y === 0 ? v.data : (re && (N = re(N)), A ? K = A(N) : K = String(N[0]), v[K]);
          }), te = a(function() {
            var K, N = arguments;
            return y === 0 ? b.has("data") : (re && (N = re(N)), A ? K = A(N) : K = String(N[0]), K === null ? !1 : b.has(K));
          }), f(ce, {
            __memoized__: n(!0),
            delete: n(j),
            clear: n(b.clear),
            _get: n(ne),
            _has: n(te)
          }), b;
        };
      }), qd = C(function(e, t) {
        var r = xt(), a = zr(), n = It(), o = Nd(), l = Xi();
        t.exports = /* @__PURE__ */ i(function u(s) {
          var c, d, f;
          if (r(s), c = Object(arguments[1]), c.async && c.promise)
            throw new Error("Options 'async' and 'promise' cannot be used together");
          return hasOwnProperty.call(s, "__memoized__") && !c.force ? s : (d = l(c.length, s.length, c.async && n.async), f = o(s, d, c), a(n, function(p, m) {
            c[m] && p(c[m], f, c);
          }), u.__profiler__ && u.__profiler__(f), f.updateEnv(), f.memoized);
        }, "self2");
      }), Bd = C(function(e, t) {
        t.exports = function(r) {
          var a, n, o = r.length;
          if (!o)
            return "";
          for (a = String(r[n = 0]); --o; )
            a += "" + r[++n];
          return a;
        };
      }), Ld = C(function(e, t) {
        t.exports = function(r) {
          return r ? function(a) {
            for (var n = String(a[0]), o = 0, l = r; --l; )
              n += "" + a[++o];
            return n;
          } : function() {
            return "";
          };
        };
      }), Vd = C(function(e, t) {
        t.exports = function() {
          var r = Number.isNaN;
          return typeof r != "function" ? !1 : !r({}) && r(NaN) && !r(34);
        };
      }), jd = C(function(e, t) {
        t.exports = function(r) {
          return r !== r;
        };
      }), Hd = C(function(e, t) {
        t.exports = Vd()() ? Number.isNaN : jd();
      }), Ba = C(function(e, t) {
        var r = Hd(), a = Ot(), n = Yt(), o = Array.prototype.indexOf, l = Object.prototype.hasOwnProperty, u = Math.abs, s = Math.floor;
        t.exports = function(c) {
          var d, f, p, m;
          if (!r(c))
            return o.apply(this, arguments);
          for (f = a(n(this).length), p = arguments[1], isNaN(p) ? p = 0 : p >= 0 ? p = s(p) : p = a(this.length) - s(u(p)), d = p; d < f; ++d)
            if (l.call(this, d) && (m = this[d], r(m)))
              return d;
          return -1;
        };
      }), zd = C(function(e, t) {
        var r = Ba(), a = Object.create;
        t.exports = function() {
          var n = 0, o = [], l = a(null);
          return {
            get: /* @__PURE__ */ i(function(s) {
              var c = 0, d = o, f, p = s.length;
              if (p === 0)
                return d[p] || null;
              if (d = d[p]) {
                for (; c < p - 1; ) {
                  if (f = r.call(d[0], s[c]), f === -1)
                    return null;
                  d = d[1][f], ++c;
                }
                return f = r.call(d[0], s[c]), f === -1 ? null : d[1][f] || null;
              }
              return null;
            }, "get"),
            set: /* @__PURE__ */ i(function(s) {
              var c = 0, d = o, f, p = s.length;
              if (p === 0)
                d[p] = ++n;
              else {
                for (d[p] || (d[p] = [[], []]), d = d[p]; c < p - 1; )
                  f = r.call(d[0], s[c]), f === -1 && (f = d[0].push(s[c]) - 1, d[1].push([[], []])), d = d[1][f], ++c;
                f = r.call(d[0], s[c]), f === -1 && (f = d[0].push(s[c]) - 1), d[1][f] = ++n;
              }
              return l[n] = s, n;
            }, "set"),
            delete: /* @__PURE__ */ i(function(s) {
              var c = 0, d = o, f, p = l[s], m = p.length, h = [];
              if (m === 0)
                delete d[m];
              else if (d = d[m]) {
                for (; c < m - 1; ) {
                  if (f = r.call(d[0], p[c]), f === -1)
                    return;
                  h.push(d, f), d = d[1][f], ++c;
                }
                if (f = r.call(d[0], p[c]), f === -1)
                  return;
                for (s = d[1][f], d[0].splice(f, 1), d[1].splice(f, 1); !d[0].length && h.length; )
                  f = h.pop(), d = h.pop(), d[0].splice(f, 1), d[1].splice(f, 1);
              }
              delete l[s];
            }, "_delete"),
            clear: /* @__PURE__ */ i(function() {
              o = [], l = a(null);
            }, "clear")
          };
        };
      }), Ud = C(function(e, t) {
        var r = Ba();
        t.exports = function() {
          var a = 0, n = [], o = [];
          return {
            get: /* @__PURE__ */ i(function(u) {
              var s = r.call(n, u[0]);
              return s === -1 ? null : o[s];
            }, "get"),
            set: /* @__PURE__ */ i(function(u) {
              return n.push(u[0]), o.push(++a), a;
            }, "set"),
            delete: /* @__PURE__ */ i(function(u) {
              var s = r.call(o, u);
              s !== -1 && (n.splice(s, 1), o.splice(s, 1));
            }, "_delete"),
            clear: /* @__PURE__ */ i(function() {
              n = [], o = [];
            }, "clear")
          };
        };
      }), $d = C(function(e, t) {
        var r = Ba(), a = Object.create;
        t.exports = function(n) {
          var o = 0, l = [[], []], u = a(null);
          return {
            get: /* @__PURE__ */ i(function(c) {
              for (var d = 0, f = l, p; d < n - 1; ) {
                if (p = r.call(f[0], c[d]), p === -1)
                  return null;
                f = f[1][p], ++d;
              }
              return p = r.call(f[0], c[d]), p === -1 ? null : f[1][p] || null;
            }, "get"),
            set: /* @__PURE__ */ i(function(c) {
              for (var d = 0, f = l, p; d < n - 1; )
                p = r.call(f[0], c[d]), p === -1 && (p = f[0].push(c[d]) - 1, f[1].push([[], []])), f = f[1][p], ++d;
              return p = r.call(f[0], c[d]), p === -1 && (p = f[0].push(c[d]) - 1), f[1][p] = ++o, u[o] = c, o;
            }, "set"),
            delete: /* @__PURE__ */ i(function(c) {
              for (var d = 0, f = l, p, m = [], h = u[c]; d < n - 1; ) {
                if (p = r.call(f[0], h[d]), p === -1)
                  return;
                m.push(f, p), f = f[1][p], ++d;
              }
              if (p = r.call(f[0], h[d]), p !== -1) {
                for (c = f[1][p], f[0].splice(p, 1), f[1].splice(p, 1); !f[0].length && m.length; )
                  p = m.pop(), f = m.pop(), f[0].splice(p, 1), f[1].splice(p, 1);
                delete u[c];
              }
            }, "_delete"),
            clear: /* @__PURE__ */ i(function() {
              l = [[], []], u = a(null);
            }, "clear")
          };
        };
      }), ro = C(function(e, t) {
        var r = xt(), a = zr(), n = Function.prototype.call;
        t.exports = function(o, l) {
          var u = {}, s = arguments[2];
          return r(l), a(o, function(c, d, f, p) {
            u[d] = n.call(l, s, c, d, f, p);
          }), u;
        };
      }), La = C(function(e, t) {
        var r = /* @__PURE__ */ i(function(o) {
          if (typeof o != "function")
            throw new TypeError(o + " is not a function");
          return o;
        }, "ensureCallable"), a = /* @__PURE__ */ i(function(o) {
          var l = R.createTextNode(""), u, s, c = 0;
          return new o(function() {
            var d;
            if (u)
              s && (u = s.concat(u));
            else {
              if (!s)
                return;
              u = s;
            }
            if (s = u, u = null, typeof s == "function") {
              d = s, s = null, d();
              return;
            }
            for (l.data = c = ++c % 2; s; )
              d = s.shift(), s.length || (s = null), d();
          }).observe(l, {
            characterData: !0
          }), function(d) {
            if (r(d), u) {
              typeof u == "function" ? u = [u, d] : u.push(d);
              return;
            }
            u = d, l.data = c = ++c % 2;
          };
        }, "byObserver");
        t.exports = function() {
          if ((typeof process > "u" ? "undefined" : P(process)) === "object" && process && typeof process.nextTick == "function")
            return process.nextTick;
          if (typeof queueMicrotask == "function")
            return function(n) {
              queueMicrotask(r(n));
            };
          if ((typeof R > "u" ? "undefined" : P(R)) === "object" && R) {
            if (typeof MutationObserver == "function")
              return a(MutationObserver);
            if (typeof WebKitMutationObserver == "function")
              return a(WebKitMutationObserver);
          }
          return typeof setImmediate == "function" ? function(n) {
            setImmediate(r(n));
          } : typeof setTimeout == "function" || (typeof setTimeout > "u" ? "undefined" : P(setTimeout)) === "object" ? function(n) {
            setTimeout(r(n), 0);
          } : null;
        }();
      }), Wd = C(function() {
        var e = qa(), t = ro(), r = Qi(), a = Zi(), n = La(), o = Array.prototype.slice, l = Function.prototype.apply, u = Object.create;
        It().async = function(s, c) {
          var d = u(null), f = u(null), p = c.memoized, m = c.original, h, y, w;
          c.memoized = a(function(v) {
            var b = arguments, E = b[b.length - 1];
            return typeof E == "function" && (h = E, b = o.call(b, 0, -1)), p.apply(y = this, w = b);
          }, p);
          try {
            r(c.memoized, p);
          } catch {
          }
          c.on("get", function(v) {
            var b, E, A;
            if (!!h) {
              if (d[v]) {
                typeof d[v] == "function" ? d[v] = [d[v], h] : d[v].push(h), h = null;
                return;
              }
              b = h, E = y, A = w, h = y = w = null, n(function() {
                var T;
                hasOwnProperty.call(f, v) ? (T = f[v], c.emit("getasync", v, A, E), l.call(b, T.context, T.args)) : (h = b, y = E, w = A, p.apply(E, A));
              });
            }
          }), c.original = function() {
            var v, b, E, A;
            return h ? (v = e(arguments), b = /* @__PURE__ */ i(function T(M) {
              var L, j, ne = T.id;
              if (ne == null) {
                n(l.bind(T, this, arguments));
                return;
              }
              if (delete T.id, L = d[ne], delete d[ne], !!L)
                return j = e(arguments), c.has(ne) && (M ? c.delete(ne) : (f[ne] = {
                  context: this,
                  args: j
                }, c.emit("setasync", ne, typeof L == "function" ? 1 : L.length))), typeof L == "function" ? A = l.call(L, this, j) : L.forEach(function(te) {
                  A = l.call(te, this, j);
                }, this), A;
            }, "self2"), E = h, h = y = w = null, v.push(b), A = l.call(m, this, v), b.cb = E, h = b, A) : l.call(m, this, arguments);
          }, c.on("set", function(v) {
            if (!h) {
              c.delete(v);
              return;
            }
            d[v] ? typeof d[v] == "function" ? d[v] = [d[v], h.cb] : d[v].push(h.cb) : d[v] = h.cb, delete h.cb, h.id = v, h = null;
          }), c.on("delete", function(v) {
            var b;
            hasOwnProperty.call(d, v) || !f[v] || (b = f[v], delete f[v], c.emit("deleteasync", v, o.call(b.args, 1)));
          }), c.on("clear", function() {
            var v = f;
            f = u(null), c.emit("clearasync", t(v, function(b) {
              return o.call(b.args, 1);
            }));
          });
        };
      }), Gd = C(function(e, t) {
        var r = Array.prototype.forEach, a = Object.create;
        t.exports = function(n) {
          var o = a(null);
          return r.call(arguments, function(l) {
            o[l] = !0;
          }), o;
        };
      }), ao = C(function(e, t) {
        t.exports = function(r) {
          return typeof r == "function";
        };
      }), Yd = C(function(e, t) {
        var r = ao();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            throw new TypeError("Passed argument cannot be stringifed");
          }
        };
      }), Kd = C(function(e, t) {
        var r = Yt(), a = Yd();
        t.exports = function(n) {
          return a(r(n));
        };
      }), Xd = C(function(e, t) {
        var r = ao();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            return "<Non-coercible to string value>";
          }
        };
      }), Jd = C(function(e, t) {
        var r = Xd(), a = /[\n\r\u2028\u2029]/g;
        t.exports = function(n) {
          var o = r(n);
          return o.length > 100 && (o = o.slice(0, 99) + "\u2026"), o = o.replace(a, function(l) {
            return JSON.stringify(l).slice(1, -1);
          }), o;
        };
      }), no = C(function(e, t) {
        t.exports = r, t.exports.default = r;
        function r(a) {
          return !!a && (P(a) === "object" || typeof a == "function") && typeof a.then == "function";
        }
        i(r, "isPromise");
      }), Qd = C(function() {
        var e = ro(), t = Gd(), r = Kd(), a = Jd(), n = no(), o = La(), l = Object.create, u = t("then", "then:finally", "done", "done:finally");
        It().promise = function(s, c) {
          var d = l(null), f = l(null), p = l(null);
          if (s === !0)
            s = null;
          else if (s = r(s), !u[s])
            throw new TypeError("'" + a(s) + "' is not valid promise mode");
          c.on("set", function(m, h, y) {
            var w = !1;
            if (!n(y)) {
              f[m] = y, c.emit("setasync", m, 1);
              return;
            }
            d[m] = 1, p[m] = y;
            var v = /* @__PURE__ */ i(function(M) {
              var L = d[m];
              if (w)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              !L || (delete d[m], f[m] = M, c.emit("setasync", m, L));
            }, "onSuccess"), b = /* @__PURE__ */ i(function() {
              w = !0, d[m] && (delete d[m], delete p[m], c.delete(m));
            }, "onFailure"), E = s;
            if (E || (E = "then"), E === "then") {
              var A = /* @__PURE__ */ i(function() {
                o(b);
              }, "nextTickFailure");
              y = y.then(function(T) {
                o(v.bind(this, T));
              }, A), typeof y.finally == "function" && y.finally(A);
            } else if (E === "done") {
              if (typeof y.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
              y.done(v, b);
            } else if (E === "done:finally") {
              if (typeof y.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
              if (typeof y.finally != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
              y.done(v), y.finally(b);
            }
          }), c.on("get", function(m, h, y) {
            var w;
            if (d[m]) {
              ++d[m];
              return;
            }
            w = p[m];
            var v = /* @__PURE__ */ i(function() {
              c.emit("getasync", m, h, y);
            }, "emit");
            n(w) ? typeof w.done == "function" ? w.done(v) : w.then(function() {
              o(v);
            }) : v();
          }), c.on("delete", function(m) {
            if (delete p[m], d[m]) {
              delete d[m];
              return;
            }
            if (!!hasOwnProperty.call(f, m)) {
              var h = f[m];
              delete f[m], c.emit("deleteasync", m, [h]);
            }
          }), c.on("clear", function() {
            var m = f;
            f = l(null), d = l(null), p = l(null), c.emit("clearasync", e(m, function(h) {
              return [h];
            }));
          });
        };
      }), Zd = C(function() {
        var e = xt(), t = zr(), r = It(), a = Function.prototype.apply;
        r.dispose = function(n, o, l) {
          var u;
          if (e(n), l.async && r.async || l.promise && r.promise) {
            o.on("deleteasync", u = /* @__PURE__ */ i(function(c, d) {
              a.call(n, null, d);
            }, "del")), o.on("clearasync", function(s) {
              t(s, function(c, d) {
                u(d, c);
              });
            });
            return;
          }
          o.on("delete", u = /* @__PURE__ */ i(function(c, d) {
            n(d);
          }, "del")), o.on("clear", function(s) {
            t(s, function(c, d) {
              u(d, c);
            });
          });
        };
      }), e1 = C(function(e, t) {
        t.exports = 2147483647;
      }), t1 = C(function(e, t) {
        var r = Ot(), a = e1();
        t.exports = function(n) {
          if (n = r(n), n > a)
            throw new TypeError(n + " exceeds maximum possible timeout");
          return n;
        };
      }), r1 = C(function() {
        var e = qa(), t = zr(), r = La(), a = no(), n = t1(), o = It(), l = Function.prototype, u = Math.max, s = Math.min, c = Object.create;
        o.maxAge = function(d, f, p) {
          var m, h, y, w;
          d = n(d), d && (m = c(null), h = p.async && o.async || p.promise && o.promise ? "async" : "", f.on("set" + h, function(v) {
            m[v] = setTimeout(function() {
              f.delete(v);
            }, d), typeof m[v].unref == "function" && m[v].unref(), w && (w[v] && w[v] !== "nextTick" && clearTimeout(w[v]), w[v] = setTimeout(function() {
              delete w[v];
            }, y), typeof w[v].unref == "function" && w[v].unref());
          }), f.on("delete" + h, function(v) {
            clearTimeout(m[v]), delete m[v], w && (w[v] !== "nextTick" && clearTimeout(w[v]), delete w[v]);
          }), p.preFetch && (p.preFetch === !0 || isNaN(p.preFetch) ? y = 0.333 : y = u(s(Number(p.preFetch), 1), 0), y && (w = {}, y = (1 - y) * d, f.on("get" + h, function(v, b, E) {
            w[v] || (w[v] = "nextTick", r(function() {
              var A;
              w[v] === "nextTick" && (delete w[v], f.delete(v), p.async && (b = e(b), b.push(l)), A = f.memoized.apply(E, b), p.promise && a(A) && (typeof A.done == "function" ? A.done(l, l) : A.then(l, l)));
            }));
          }))), f.on("clear" + h, function() {
            t(m, function(v) {
              clearTimeout(v);
            }), m = {}, w && (t(w, function(v) {
              v !== "nextTick" && clearTimeout(v);
            }), w = {});
          }));
        };
      }), a1 = C(function(e, t) {
        var r = Ot(), a = Object.create, n = Object.prototype.hasOwnProperty;
        t.exports = function(o) {
          var l = 0, u = 1, s = a(null), c = a(null), d = 0, f;
          return o = r(o), {
            hit: /* @__PURE__ */ i(function(m) {
              var h = c[m], y = ++d;
              if (s[y] = m, c[m] = y, !h)
                return ++l, l <= o ? void 0 : (m = s[u], f(m), m);
              if (delete s[h], u === h)
                for (; !n.call(s, ++u); )
                  ;
            }, "hit"),
            delete: f = /* @__PURE__ */ i(function(m) {
              var h = c[m];
              if (!!h && (delete s[h], delete c[m], --l, u === h)) {
                if (!l) {
                  d = 0, u = 1;
                  return;
                }
                for (; !n.call(s, ++u); )
                  ;
              }
            }, "del"),
            clear: /* @__PURE__ */ i(function() {
              l = 0, u = 1, s = a(null), c = a(null), d = 0;
            }, "clear")
          };
        };
      }), n1 = C(function() {
        var e = Ot(), t = a1(), r = It();
        r.max = function(a, n, o) {
          var l, u, s;
          a = e(a), a && (u = t(a), l = o.async && r.async || o.promise && r.promise ? "async" : "", n.on("set" + l, s = /* @__PURE__ */ i(function(d) {
            d = u.hit(d), d !== void 0 && n.delete(d);
          }, "hit")), n.on("get" + l, s), n.on("delete" + l, u.delete), n.on("clear" + l, u.clear));
        };
      }), i1 = C(function() {
        var e = Pt(), t = It(), r = Object.create, a = Object.defineProperties;
        t.refCounter = function(n, o, l) {
          var u, s;
          u = r(null), s = l.async && t.async || l.promise && t.promise ? "async" : "", o.on("set" + s, function(c, d) {
            u[c] = d || 1;
          }), o.on("get" + s, function(c) {
            ++u[c];
          }), o.on("delete" + s, function(c) {
            delete u[c];
          }), o.on("clear" + s, function() {
            u = {};
          }), a(o.memoized, {
            deleteRef: e(function() {
              var c = o.get(arguments);
              return c === null || !u[c] ? null : --u[c] ? !1 : (o.delete(c), !0);
            }),
            getRefCount: e(function() {
              var c = o.get(arguments);
              return c === null || !u[c] ? 0 : u[c];
            })
          });
        };
      }), io = C(function(e, t) {
        var r = Ki(), a = Xi(), n = qd();
        t.exports = function(o) {
          var l = r(arguments[1]), u;
          return l.normalizer || (u = l.length = a(l.length, o.length, l.async), u !== 0 && (l.primitive ? u === !1 ? l.normalizer = Bd() : u > 1 && (l.normalizer = Ld()(u)) : u === !1 ? l.normalizer = zd()() : u === 1 ? l.normalizer = Ud()() : l.normalizer = $d()(u))), l.async && Wd(), l.promise && Qd(), l.dispose && Zd(), l.maxAge && r1(), l.max && n1(), l.refCounter && i1(), n(o, l);
        };
      }), oo = C(function(e, t) {
        (function() {
          var r = {
            name: "doT",
            version: "1.1.1",
            templateSettings: {
              evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
              interpolate: /\{\{=([\s\S]+?)\}\}/g,
              encode: /\{\{!([\s\S]+?)\}\}/g,
              use: /\{\{#([\s\S]+?)\}\}/g,
              useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
              define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
              defineParams: /^\s*([\w$]+):([\s\S]+)/,
              conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
              iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
              varname: "it",
              strip: !0,
              append: !0,
              selfcontained: !1,
              doNotSkipEncoded: !1
            },
            template: void 0,
            compile: void 0,
            log: !0
          };
          (function() {
            if ((typeof globalThis > "u" ? "undefined" : P(globalThis)) !== "object")
              try {
                Object.defineProperty(Object.prototype, "__magic__", {
                  get: /* @__PURE__ */ i(function() {
                    return this;
                  }, "get"),
                  configurable: !0
                }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
              } catch {
                D.globalThis = function() {
                  if (typeof self < "u")
                    return self;
                  if (typeof D < "u")
                    return D;
                  if (typeof rt < "u")
                    return rt;
                  if (typeof this < "u")
                    return this;
                  throw new Error("Unable to locate global `this`");
                }();
              }
          })(), r.encodeHTMLSource = function(u) {
            var s = {
              "&": "&#38;",
              "<": "&#60;",
              ">": "&#62;",
              '"': "&#34;",
              "'": "&#39;",
              "/": "&#47;"
            }, c = u ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
            return function(d) {
              return d ? d.toString().replace(c, function(f) {
                return s[f] || f;
              }) : "";
            };
          }, typeof t < "u" && t.exports ? t.exports = r : globalThis.doT = r;
          var a = {
            append: {
              start: "'+(",
              end: ")+'",
              startencode: "'+encodeHTML("
            },
            split: {
              start: "';out+=(",
              end: ");out+='",
              startencode: "';out+=encodeHTML("
            }
          }, n = /$^/;
          function o(u, s, c) {
            return (typeof s == "string" ? s : s.toString()).replace(u.define || n, function(d, f, p, m) {
              return f.indexOf("def.") === 0 && (f = f.substring(4)), f in c || (p === ":" ? (u.defineParams && m.replace(u.defineParams, function(h, y, w) {
                c[f] = {
                  arg: y,
                  text: w
                };
              }), f in c || (c[f] = m)) : new Function("def", "def['" + f + "']=" + m)(c)), "";
            }).replace(u.use || n, function(d, f) {
              u.useParams && (f = f.replace(u.useParams, function(m, h, y, w) {
                if (c[y] && c[y].arg && w) {
                  var v = (y + ":" + w).replace(/'|\\/g, "_");
                  return c.__exp = c.__exp || {}, c.__exp[v] = c[y].text.replace(new RegExp("(^|[^\\w$])" + c[y].arg + "([^\\w$])", "g"), "$1" + w + "$2"), h + "def.__exp['" + v + "']";
                }
              }));
              var p = new Function("def", "return " + f)(c);
              return p && o(u, p, c);
            });
          }
          i(o, "resolveDefs");
          function l(u) {
            return u.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
          }
          i(l, "unescape"), r.template = function(u, s, c) {
            s = s || r.templateSettings;
            var d = s.append ? a.append : a.split, f, p = 0, m, h = s.use || s.define ? o(s, u, c || {}) : u;
            h = ("var out='" + (s.strip ? h.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : h).replace(/'|\\/g, "\\$&").replace(s.interpolate || n, function(y, w) {
              return d.start + l(w) + d.end;
            }).replace(s.encode || n, function(y, w) {
              return f = !0, d.startencode + l(w) + d.end;
            }).replace(s.conditional || n, function(y, w, v) {
              return w ? v ? "';}else if(" + l(v) + "){out+='" : "';}else{out+='" : v ? "';if(" + l(v) + "){out+='" : "';}out+='";
            }).replace(s.iterate || n, function(y, w, v, b) {
              return w ? (p += 1, m = b || "i" + p, w = l(w), "';var arr" + p + "=" + w + ";if(arr" + p + "){var " + v + "," + m + "=-1,l" + p + "=arr" + p + ".length-1;while(" + m + "<l" + p + "){" + v + "=arr" + p + "[" + m + "+=1];out+='") : "';} } out+='";
            }).replace(s.evaluate || n, function(y, w) {
              return "';" + l(w) + "out+='";
            }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), f && (!s.selfcontained && globalThis && !globalThis._encodeHTML && (globalThis._encodeHTML = r.encodeHTMLSource(s.doNotSkipEncoded)), h = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + r.encodeHTMLSource.toString() + "(" + (s.doNotSkipEncoded || "") + "));" + h);
            try {
              return new Function(s.varname, h);
            } catch (y) {
              throw typeof console < "u" && console.log("Could not create a template function: " + h), y;
            }
          }, r.compile = function(u, s) {
            return r.template(u, null, s);
          };
        })();
      }), o1 = C(function(e, t) {
        (function(r, a) {
          P(e) === "object" && typeof t < "u" ? t.exports = a() : r.ES6Promise = a();
        })(e, function() {
          function r(x) {
            var k = P(x);
            return x !== null && (k === "object" || k === "function");
          }
          i(r, "objectOrFunction");
          function a(x) {
            return typeof x == "function";
          }
          i(a, "isFunction");
          var n = void 0;
          Array.isArray ? n = Array.isArray : n = /* @__PURE__ */ i(function(k) {
            return Object.prototype.toString.call(k) === "[object Array]";
          }, "_isArray");
          var o = n, l = 0, u = void 0, s = void 0, c = /* @__PURE__ */ i(function(k, O) {
            M[l] = k, M[l + 1] = O, l += 2, l === 2 && (s ? s(L) : ne());
          }, "asap2");
          function d(x) {
            s = x;
          }
          i(d, "setScheduler");
          function f(x) {
            c = x;
          }
          i(f, "setAsap");
          var p = typeof D < "u" ? D : void 0, m = p || {}, h = m.MutationObserver || m.WebKitMutationObserver, y = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", w = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
          function v() {
            return function() {
              return process.nextTick(L);
            };
          }
          i(v, "useNextTick");
          function b() {
            return typeof u < "u" ? function() {
              u(L);
            } : T();
          }
          i(b, "useVertxTimer");
          function E() {
            var x = 0, k = new h(L), O = R.createTextNode("");
            return k.observe(O, {
              characterData: !0
            }), function() {
              O.data = x = ++x % 2;
            };
          }
          i(E, "useMutationObserver");
          function A() {
            var x = new MessageChannel();
            return x.port1.onmessage = L, function() {
              return x.port2.postMessage(0);
            };
          }
          i(A, "useMessageChannel");
          function T() {
            var x = setTimeout;
            return function() {
              return x(L, 1);
            };
          }
          i(T, "useSetTimeout");
          var M = new Array(1e3);
          function L() {
            for (var x = 0; x < l; x += 2) {
              var k = M[x], O = M[x + 1];
              k(O), M[x] = void 0, M[x + 1] = void 0;
            }
            l = 0;
          }
          i(L, "flush");
          function j() {
            try {
              var x = Function("return this")().require("vertx");
              return u = x.runOnLoop || x.runOnContext, b();
            } catch {
              return T();
            }
          }
          i(j, "attemptVertx");
          var ne = void 0;
          y ? ne = v() : h ? ne = E() : w ? ne = A() : p === void 0 ? ne = j() : ne = T();
          function te(x, k) {
            var O = this, V = new this.constructor(J);
            V[$] === void 0 && Ie(V);
            var X = O._state;
            if (X) {
              var oe = arguments[X - 1];
              c(function() {
                return Ee(X, V, oe, O._result);
              });
            } else
              _e(O, V, x, k);
            return V;
          }
          i(te, "then");
          function Y(x) {
            var k = this;
            if (x && P(x) === "object" && x.constructor === k)
              return x;
            var O = new k(J);
            return G(O, x), O;
          }
          i(Y, "resolve$1");
          var $ = Math.random().toString(36).substring(2);
          function J() {
          }
          i(J, "noop3");
          var ie = void 0, ce = 1, re = 2;
          function K() {
            return new TypeError("You cannot resolve a promise with itself");
          }
          i(K, "selfFulfillment");
          function N() {
            return new TypeError("A promises callback cannot return that same promise.");
          }
          i(N, "cannotReturnOwn");
          function fe(x, k, O, V) {
            try {
              x.call(k, O, V);
            } catch (X) {
              return X;
            }
          }
          i(fe, "tryThen");
          function _(x, k, O) {
            c(function(V) {
              var X = !1, oe = fe(O, k, function(Ne) {
                X || (X = !0, k !== Ne ? G(V, Ne) : z(V, Ne));
              }, function(Ne) {
                X || (X = !0, U(V, Ne));
              }, "Settle: " + (V._label || " unknown promise"));
              !X && oe && (X = !0, U(V, oe));
            }, x);
          }
          i(_, "handleForeignThenable");
          function H(x, k) {
            k._state === ce ? z(x, k._result) : k._state === re ? U(x, k._result) : _e(k, void 0, function(O) {
              return G(x, O);
            }, function(O) {
              return U(x, O);
            });
          }
          i(H, "handleOwnThenable");
          function I(x, k, O) {
            k.constructor === x.constructor && O === te && k.constructor.resolve === Y ? H(x, k) : O === void 0 ? z(x, k) : a(O) ? _(x, k, O) : z(x, k);
          }
          i(I, "handleMaybeThenable");
          function G(x, k) {
            if (x === k)
              U(x, K());
            else if (r(k)) {
              var O = void 0;
              try {
                O = k.then;
              } catch (V) {
                U(x, V);
                return;
              }
              I(x, k, O);
            } else
              z(x, k);
          }
          i(G, "resolve");
          function he(x) {
            x._onerror && x._onerror(x._result), Re(x);
          }
          i(he, "publishRejection");
          function z(x, k) {
            x._state === ie && (x._result = k, x._state = ce, x._subscribers.length !== 0 && c(Re, x));
          }
          i(z, "fulfill");
          function U(x, k) {
            x._state === ie && (x._state = re, x._result = k, c(he, x));
          }
          i(U, "reject");
          function _e(x, k, O, V) {
            var X = x._subscribers, oe = X.length;
            x._onerror = null, X[oe] = k, X[oe + ce] = O, X[oe + re] = V, oe === 0 && x._state && c(Re, x);
          }
          i(_e, "subscribe2");
          function Re(x) {
            var k = x._subscribers, O = x._state;
            if (k.length !== 0) {
              for (var V = void 0, X = void 0, oe = x._result, Ne = 0; Ne < k.length; Ne += 3)
                V = k[Ne], X = k[Ne + O], V ? Ee(O, V, X, oe) : X(oe);
              x._subscribers.length = 0;
            }
          }
          i(Re, "publish");
          function Ee(x, k, O, V) {
            var X = a(O), oe = void 0, Ne = void 0, mr = !0;
            if (X) {
              try {
                oe = O(V);
              } catch (Pa) {
                mr = !1, Ne = Pa;
              }
              if (k === oe) {
                U(k, N());
                return;
              }
            } else
              oe = V;
            k._state !== ie || (X && mr ? G(k, oe) : mr === !1 ? U(k, Ne) : x === ce ? z(k, oe) : x === re && U(k, oe));
          }
          i(Ee, "invokeCallback");
          function Oe(x, k) {
            try {
              k(/* @__PURE__ */ i(function(V) {
                G(x, V);
              }, "resolvePromise"), /* @__PURE__ */ i(function(V) {
                U(x, V);
              }, "rejectPromise"));
            } catch (O) {
              U(x, O);
            }
          }
          i(Oe, "initializePromise");
          var Le = 0;
          function Me() {
            return Le++;
          }
          i(Me, "nextId");
          function Ie(x) {
            x[$] = Le++, x._state = void 0, x._result = void 0, x._subscribers = [];
          }
          i(Ie, "makePromise");
          function pr() {
            return new Error("Array Methods must be provided an Array");
          }
          i(pr, "validationError");
          var Ve = function() {
            function x(k, O) {
              this._instanceConstructor = k, this.promise = new k(J), this.promise[$] || Ie(this.promise), o(O) ? (this.length = O.length, this._remaining = O.length, this._result = new Array(this.length), this.length === 0 ? z(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(O), this._remaining === 0 && z(this.promise, this._result))) : U(this.promise, pr());
            }
            return i(x, "Enumerator2"), x.prototype._enumerate = /* @__PURE__ */ i(function(O) {
              for (var V = 0; this._state === ie && V < O.length; V++)
                this._eachEntry(O[V], V);
            }, "_enumerate"), x.prototype._eachEntry = /* @__PURE__ */ i(function(O, V) {
              var X = this._instanceConstructor, oe = X.resolve;
              if (oe === Y) {
                var Ne = void 0, mr = void 0, Pa = !1;
                try {
                  Ne = O.then;
                } catch (qi) {
                  Pa = !0, mr = qi;
                }
                if (Ne === te && O._state !== ie)
                  this._settledAt(O._state, V, O._result);
                else if (typeof Ne != "function")
                  this._remaining--, this._result[V] = O;
                else if (X === Ae) {
                  var Ni = new X(J);
                  Pa ? U(Ni, mr) : I(Ni, O, Ne), this._willSettleAt(Ni, V);
                } else
                  this._willSettleAt(new X(function(qi) {
                    return qi(O);
                  }), V);
              } else
                this._willSettleAt(oe(O), V);
            }, "_eachEntry"), x.prototype._settledAt = /* @__PURE__ */ i(function(O, V, X) {
              var oe = this.promise;
              oe._state === ie && (this._remaining--, O === re ? U(oe, X) : this._result[V] = X), this._remaining === 0 && z(oe, this._result);
            }, "_settledAt"), x.prototype._willSettleAt = /* @__PURE__ */ i(function(O, V) {
              var X = this;
              _e(O, void 0, function(oe) {
                return X._settledAt(ce, V, oe);
              }, function(oe) {
                return X._settledAt(re, V, oe);
              });
            }, "_willSettleAt"), x;
          }();
          function ye(x) {
            return new Ve(this, x).promise;
          }
          i(ye, "all");
          function Pe(x) {
            var k = this;
            return o(x) ? new k(function(O, V) {
              for (var X = x.length, oe = 0; oe < X; oe++)
                k.resolve(x[oe]).then(O, V);
            }) : new k(function(O, V) {
              return V(new TypeError("You must pass an array to race."));
            });
          }
          i(Pe, "race");
          function Te(x) {
            var k = this, O = new k(J);
            return U(O, x), O;
          }
          i(Te, "reject$1");
          function $e() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }
          i($e, "needsResolver");
          function We() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }
          i(We, "needsNew");
          var Ae = function() {
            function x(k) {
              this[$] = Me(), this._result = this._state = void 0, this._subscribers = [], J !== k && (typeof k != "function" && $e(), this instanceof x ? Oe(this, k) : We());
            }
            return i(x, "Promise2"), x.prototype.catch = /* @__PURE__ */ i(function(O) {
              return this.then(null, O);
            }, "_catch"), x.prototype.finally = /* @__PURE__ */ i(function(O) {
              var V = this, X = V.constructor;
              return a(O) ? V.then(function(oe) {
                return X.resolve(O()).then(function() {
                  return oe;
                });
              }, function(oe) {
                return X.resolve(O()).then(function() {
                  throw oe;
                });
              }) : V.then(O, O);
            }, "_finally"), x;
          }();
          Ae.prototype.then = te, Ae.all = ye, Ae.race = Pe, Ae.resolve = Y, Ae.reject = Te, Ae._setScheduler = d, Ae._setAsap = f, Ae._asap = c;
          function ve() {
            var x = void 0;
            if (typeof rt < "u")
              x = rt;
            else if (typeof self < "u")
              x = self;
            else
              try {
                x = Function("return this")();
              } catch {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
            var k = x.Promise;
            if (k) {
              var O = null;
              try {
                O = Object.prototype.toString.call(k.resolve());
              } catch {
              }
              if (O === "[object Promise]" && !k.cast)
                return;
            }
            x.Promise = Ae;
          }
          return i(ve, "polyfill"), Ae.polyfill = ve, Ae.Promise = Ae, Ae;
        });
      }), l1 = C(function(e) {
        var t = 1e5, r = function() {
          var _ = Object.prototype.toString, H = Object.prototype.hasOwnProperty;
          return {
            Class: /* @__PURE__ */ i(function(G) {
              return _.call(G).replace(/^\[object *|\]$/g, "");
            }, "Class"),
            HasProperty: /* @__PURE__ */ i(function(G, he) {
              return he in G;
            }, "HasProperty"),
            HasOwnProperty: /* @__PURE__ */ i(function(G, he) {
              return H.call(G, he);
            }, "HasOwnProperty"),
            IsCallable: /* @__PURE__ */ i(function(G) {
              return typeof G == "function";
            }, "IsCallable"),
            ToInt32: /* @__PURE__ */ i(function(G) {
              return G >> 0;
            }, "ToInt32"),
            ToUint32: /* @__PURE__ */ i(function(G) {
              return G >>> 0;
            }, "ToUint32")
          };
        }(), a = Math.LN2, n = Math.abs, o = Math.floor, l = Math.log, u = Math.min, s = Math.pow, c = Math.round;
        function d(_, H, I) {
          return _ < H ? H : _ > I ? I : _;
        }
        i(d, "clamp2");
        var f = Object.getOwnPropertyNames || function(_) {
          if (_ !== Object(_))
            throw new TypeError("Object.getOwnPropertyNames called on non-object");
          var H = [], I;
          for (I in _)
            r.HasOwnProperty(_, I) && H.push(I);
          return H;
        }, p;
        Object.defineProperty && function() {
          try {
            return Object.defineProperty({}, "x", {}), !0;
          } catch {
            return !1;
          }
        }() ? p = Object.defineProperty : p = /* @__PURE__ */ i(function(H, I, G) {
          if (!H === Object(H))
            throw new TypeError("Object.defineProperty called on non-object");
          return r.HasProperty(G, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(H, I, G.get), r.HasProperty(G, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(H, I, G.set), r.HasProperty(G, "value") && (H[I] = G.value), H;
        }, "defineProp");
        function m(_) {
          if (f && p) {
            var H = f(_), I;
            for (I = 0; I < H.length; I += 1)
              p(_, H[I], {
                value: _[H[I]],
                writable: !1,
                enumerable: !1,
                configurable: !1
              });
          }
        }
        i(m, "configureProperties");
        function h(_) {
          if (!p)
            return;
          if (_.length > t)
            throw new RangeError("Array too large for polyfill");
          function H(G) {
            p(_, G, {
              get: /* @__PURE__ */ i(function() {
                return _._getter(G);
              }, "get"),
              set: /* @__PURE__ */ i(function(z) {
                _._setter(G, z);
              }, "set"),
              enumerable: !0,
              configurable: !1
            });
          }
          i(H, "makeArrayAccessor");
          var I;
          for (I = 0; I < _.length; I += 1)
            H(I);
        }
        i(h, "makeArrayAccessors");
        function y(_, H) {
          var I = 32 - H;
          return _ << I >> I;
        }
        i(y, "as_signed");
        function w(_, H) {
          var I = 32 - H;
          return _ << I >>> I;
        }
        i(w, "as_unsigned");
        function v(_) {
          return [_ & 255];
        }
        i(v, "packI8");
        function b(_) {
          return y(_[0], 8);
        }
        i(b, "unpackI8");
        function E(_) {
          return [_ & 255];
        }
        i(E, "packU8");
        function A(_) {
          return w(_[0], 8);
        }
        i(A, "unpackU8");
        function T(_) {
          return _ = c(Number(_)), [_ < 0 ? 0 : _ > 255 ? 255 : _ & 255];
        }
        i(T, "packU8Clamped");
        function M(_) {
          return [_ >> 8 & 255, _ & 255];
        }
        i(M, "packI16");
        function L(_) {
          return y(_[0] << 8 | _[1], 16);
        }
        i(L, "unpackI16");
        function j(_) {
          return [_ >> 8 & 255, _ & 255];
        }
        i(j, "packU16");
        function ne(_) {
          return w(_[0] << 8 | _[1], 16);
        }
        i(ne, "unpackU16");
        function te(_) {
          return [_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255, _ & 255];
        }
        i(te, "packI32");
        function Y(_) {
          return y(_[0] << 24 | _[1] << 16 | _[2] << 8 | _[3], 32);
        }
        i(Y, "unpackI32");
        function $(_) {
          return [_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255, _ & 255];
        }
        i($, "packU32");
        function J(_) {
          return w(_[0] << 24 | _[1] << 16 | _[2] << 8 | _[3], 32);
        }
        i(J, "unpackU32");
        function ie(_, H, I) {
          var G = (1 << H - 1) - 1, he, z, U, _e, Re, Ee, Oe;
          function Le(Me) {
            var Ie = o(Me), pr = Me - Ie;
            return pr < 0.5 ? Ie : pr > 0.5 || Ie % 2 ? Ie + 1 : Ie;
          }
          for (i(Le, "roundToEven"), _ !== _ ? (z = (1 << H) - 1, U = s(2, I - 1), he = 0) : _ === 1 / 0 || _ === -1 / 0 ? (z = (1 << H) - 1, U = 0, he = _ < 0 ? 1 : 0) : _ === 0 ? (z = 0, U = 0, he = 1 / _ === -1 / 0 ? 1 : 0) : (he = _ < 0, _ = n(_), _ >= s(2, 1 - G) ? (z = u(o(l(_) / a), 1023), U = Le(_ / s(2, z) * s(2, I)), U / s(2, I) >= 2 && (z = z + 1, U = 1), z > G ? (z = (1 << H) - 1, U = 0) : (z = z + G, U = U - s(2, I))) : (z = 0, U = Le(_ / s(2, 1 - G - I)))), Re = [], _e = I; _e; _e -= 1)
            Re.push(U % 2 ? 1 : 0), U = o(U / 2);
          for (_e = H; _e; _e -= 1)
            Re.push(z % 2 ? 1 : 0), z = o(z / 2);
          for (Re.push(he ? 1 : 0), Re.reverse(), Ee = Re.join(""), Oe = []; Ee.length; )
            Oe.push(parseInt(Ee.substring(0, 8), 2)), Ee = Ee.substring(8);
          return Oe;
        }
        i(ie, "packIEEE754");
        function ce(_, H, I) {
          var G = [], he, z, U, _e, Re, Ee, Oe, Le;
          for (he = _.length; he; he -= 1)
            for (U = _[he - 1], z = 8; z; z -= 1)
              G.push(U % 2 ? 1 : 0), U = U >> 1;
          return G.reverse(), _e = G.join(""), Re = (1 << H - 1) - 1, Ee = parseInt(_e.substring(0, 1), 2) ? -1 : 1, Oe = parseInt(_e.substring(1, 1 + H), 2), Le = parseInt(_e.substring(1 + H), 2), Oe === (1 << H) - 1 ? Le === 0 ? Ee * (1 / 0) : NaN : Oe > 0 ? Ee * s(2, Oe - Re) * (1 + Le / s(2, I)) : Le !== 0 ? Ee * s(2, -(Re - 1)) * (Le / s(2, I)) : Ee < 0 ? -0 : 0;
        }
        i(ce, "unpackIEEE754");
        function re(_) {
          return ce(_, 11, 52);
        }
        i(re, "unpackF64");
        function K(_) {
          return ie(_, 11, 52);
        }
        i(K, "packF64");
        function N(_) {
          return ce(_, 8, 23);
        }
        i(N, "unpackF32");
        function fe(_) {
          return ie(_, 8, 23);
        }
        i(fe, "packF32"), function() {
          function _(Me) {
            if (Me = r.ToInt32(Me), Me < 0)
              throw new RangeError("ArrayBuffer size is not a small enough positive integer");
            this.byteLength = Me, this._bytes = [], this._bytes.length = Me;
            var Ie;
            for (Ie = 0; Ie < this.byteLength; Ie += 1)
              this._bytes[Ie] = 0;
            m(this);
          }
          i(_, "ArrayBuffer"), e.ArrayBuffer = e.ArrayBuffer || _;
          function H() {
          }
          i(H, "ArrayBufferView");
          function I(Me, Ie, pr) {
            var Ve;
            return Ve = /* @__PURE__ */ i(function(Pe, Te, $e) {
              var We, Ae, ve, x;
              if (!arguments.length || typeof arguments[0] == "number") {
                if (this.length = r.ToInt32(arguments[0]), $e < 0)
                  throw new RangeError("ArrayBufferView size is not a small enough positive integer");
                this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new _(this.byteLength), this.byteOffset = 0;
              } else if (P(arguments[0]) === "object" && arguments[0].constructor === Ve)
                for (We = arguments[0], this.length = We.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new _(this.byteLength), this.byteOffset = 0, ve = 0; ve < this.length; ve += 1)
                  this._setter(ve, We._getter(ve));
              else if (P(arguments[0]) === "object" && !(arguments[0] instanceof _ || r.Class(arguments[0]) === "ArrayBuffer"))
                for (Ae = arguments[0], this.length = r.ToUint32(Ae.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new _(this.byteLength), this.byteOffset = 0, ve = 0; ve < this.length; ve += 1)
                  x = Ae[ve], this._setter(ve, Number(x));
              else if (P(arguments[0]) === "object" && (arguments[0] instanceof _ || r.Class(arguments[0]) === "ArrayBuffer")) {
                if (this.buffer = Pe, this.byteOffset = r.ToUint32(Te), this.byteOffset > this.buffer.byteLength)
                  throw new RangeError("byteOffset out of range");
                if (this.byteOffset % this.BYTES_PER_ELEMENT)
                  throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
                if (arguments.length < 3) {
                  if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT)
                    throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
                  this.length = this.byteLength / this.BYTES_PER_ELEMENT;
                } else
                  this.length = r.ToUint32($e), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
                if (this.byteOffset + this.byteLength > this.buffer.byteLength)
                  throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
              } else
                throw new TypeError("Unexpected argument type(s)");
              this.constructor = Ve, m(this), h(this);
            }, "ctor"), Ve.prototype = new H(), Ve.prototype.BYTES_PER_ELEMENT = Me, Ve.prototype._pack = Ie, Ve.prototype._unpack = pr, Ve.BYTES_PER_ELEMENT = Me, Ve.prototype._getter = function(ye) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              if (ye = r.ToUint32(ye), !(ye >= this.length)) {
                for (var Pe = [], Te = 0, $e = this.byteOffset + ye * this.BYTES_PER_ELEMENT; Te < this.BYTES_PER_ELEMENT; Te += 1, $e += 1)
                  Pe.push(this.buffer._bytes[$e]);
                return this._unpack(Pe);
              }
            }, Ve.prototype.get = Ve.prototype._getter, Ve.prototype._setter = function(ye, Pe) {
              if (arguments.length < 2)
                throw new SyntaxError("Not enough arguments");
              if (ye = r.ToUint32(ye), ye < this.length) {
                var Te = this._pack(Pe), $e, We;
                for ($e = 0, We = this.byteOffset + ye * this.BYTES_PER_ELEMENT; $e < this.BYTES_PER_ELEMENT; $e += 1, We += 1)
                  this.buffer._bytes[We] = Te[$e];
              }
            }, Ve.prototype.set = function(ye, Pe) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              var Te, $e, We, Ae, ve, x, k, O, V, X;
              if (P(arguments[0]) === "object" && arguments[0].constructor === this.constructor) {
                if (Te = arguments[0], We = r.ToUint32(arguments[1]), We + Te.length > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                if (O = this.byteOffset + We * this.BYTES_PER_ELEMENT, V = Te.length * this.BYTES_PER_ELEMENT, Te.buffer === this.buffer) {
                  for (X = [], ve = 0, x = Te.byteOffset; ve < V; ve += 1, x += 1)
                    X[ve] = Te.buffer._bytes[x];
                  for (ve = 0, k = O; ve < V; ve += 1, k += 1)
                    this.buffer._bytes[k] = X[ve];
                } else
                  for (ve = 0, x = Te.byteOffset, k = O; ve < V; ve += 1, x += 1, k += 1)
                    this.buffer._bytes[k] = Te.buffer._bytes[x];
              } else if (P(arguments[0]) === "object" && typeof arguments[0].length < "u") {
                if ($e = arguments[0], Ae = r.ToUint32($e.length), We = r.ToUint32(arguments[1]), We + Ae > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                for (ve = 0; ve < Ae; ve += 1)
                  x = $e[ve], this._setter(We + ve, Number(x));
              } else
                throw new TypeError("Unexpected argument type(s)");
            }, Ve.prototype.subarray = function(ye, Pe) {
              ye = r.ToInt32(ye), Pe = r.ToInt32(Pe), arguments.length < 1 && (ye = 0), arguments.length < 2 && (Pe = this.length), ye < 0 && (ye = this.length + ye), Pe < 0 && (Pe = this.length + Pe), ye = d(ye, 0, this.length), Pe = d(Pe, 0, this.length);
              var Te = Pe - ye;
              return Te < 0 && (Te = 0), new this.constructor(this.buffer, this.byteOffset + ye * this.BYTES_PER_ELEMENT, Te);
            }, Ve;
          }
          i(I, "makeConstructor");
          var G = I(1, v, b), he = I(1, E, A), z = I(1, T, A), U = I(2, M, L), _e = I(2, j, ne), Re = I(4, te, Y), Ee = I(4, $, J), Oe = I(4, fe, N), Le = I(8, K, re);
          e.Int8Array = e.Int8Array || G, e.Uint8Array = e.Uint8Array || he, e.Uint8ClampedArray = e.Uint8ClampedArray || z, e.Int16Array = e.Int16Array || U, e.Uint16Array = e.Uint16Array || _e, e.Int32Array = e.Int32Array || Re, e.Uint32Array = e.Uint32Array || Ee, e.Float32Array = e.Float32Array || Oe, e.Float64Array = e.Float64Array || Le;
        }(), function() {
          function _(z, U) {
            return r.IsCallable(z.get) ? z.get(U) : z[U];
          }
          i(_, "r");
          var H = function() {
            var z = new e.Uint16Array([4660]), U = new e.Uint8Array(z.buffer);
            return _(U, 0) === 18;
          }();
          function I(z, U, _e) {
            if (arguments.length === 0)
              z = new e.ArrayBuffer(0);
            else if (!(z instanceof e.ArrayBuffer || r.Class(z) === "ArrayBuffer"))
              throw new TypeError("TypeError");
            if (this.buffer = z || new e.ArrayBuffer(0), this.byteOffset = r.ToUint32(U), this.byteOffset > this.buffer.byteLength)
              throw new RangeError("byteOffset out of range");
            if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = r.ToUint32(_e), this.byteOffset + this.byteLength > this.buffer.byteLength)
              throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
            m(this);
          }
          i(I, "DataView");
          function G(z) {
            return function(U, _e) {
              if (U = r.ToUint32(U), U + z.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              U += this.byteOffset;
              var Re = new e.Uint8Array(this.buffer, U, z.BYTES_PER_ELEMENT), Ee = [], Oe;
              for (Oe = 0; Oe < z.BYTES_PER_ELEMENT; Oe += 1)
                Ee.push(_(Re, Oe));
              return Boolean(_e) === Boolean(H) && Ee.reverse(), _(new z(new e.Uint8Array(Ee).buffer), 0);
            };
          }
          i(G, "makeGetter"), I.prototype.getUint8 = G(e.Uint8Array), I.prototype.getInt8 = G(e.Int8Array), I.prototype.getUint16 = G(e.Uint16Array), I.prototype.getInt16 = G(e.Int16Array), I.prototype.getUint32 = G(e.Uint32Array), I.prototype.getInt32 = G(e.Int32Array), I.prototype.getFloat32 = G(e.Float32Array), I.prototype.getFloat64 = G(e.Float64Array);
          function he(z) {
            return function(U, _e, Re) {
              if (U = r.ToUint32(U), U + z.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              var Ee = new z([_e]), Oe = new e.Uint8Array(Ee.buffer), Le = [], Me, Ie;
              for (Me = 0; Me < z.BYTES_PER_ELEMENT; Me += 1)
                Le.push(_(Oe, Me));
              Boolean(Re) === Boolean(H) && Le.reverse(), Ie = new e.Uint8Array(this.buffer, U, z.BYTES_PER_ELEMENT), Ie.set(Le);
            };
          }
          i(he, "makeSetter"), I.prototype.setUint8 = he(e.Uint8Array), I.prototype.setInt8 = he(e.Int8Array), I.prototype.setUint16 = he(e.Uint16Array), I.prototype.setInt16 = he(e.Int16Array), I.prototype.setUint32 = he(e.Uint32Array), I.prototype.setInt32 = he(e.Int32Array), I.prototype.setFloat32 = he(e.Float32Array), I.prototype.setFloat64 = he(e.Float64Array), e.DataView = e.DataView || I;
        }();
      }), u1 = C(function(e) {
        (function(t) {
          if (t.WeakMap)
            return;
          var r = Object.prototype.hasOwnProperty, a = Object.defineProperty && function() {
            try {
              return Object.defineProperty({}, "x", {
                value: 1
              }).x === 1;
            } catch {
            }
          }(), n = /* @__PURE__ */ i(function(u, s, c) {
            a ? Object.defineProperty(u, s, {
              configurable: !0,
              writable: !0,
              value: c
            }) : u[s] = c;
          }, "defineProperty");
          t.WeakMap = function() {
            function l() {
              if (this === void 0)
                throw new TypeError("Constructor WeakMap requires 'new'");
              if (n(this, "_id", s("_WeakMap")), arguments.length > 0)
                throw new TypeError("WeakMap iterable is not supported");
            }
            i(l, "WeakMap2"), n(l.prototype, "delete", function(d) {
              if (u(this, "delete"), !o(d))
                return !1;
              var f = d[this._id];
              return f && f[0] === d ? (delete d[this._id], !0) : !1;
            }), n(l.prototype, "get", function(d) {
              if (u(this, "get"), !!o(d)) {
                var f = d[this._id];
                if (f && f[0] === d)
                  return f[1];
              }
            }), n(l.prototype, "has", function(d) {
              if (u(this, "has"), !o(d))
                return !1;
              var f = d[this._id];
              return !!(f && f[0] === d);
            }), n(l.prototype, "set", function(d, f) {
              if (u(this, "set"), !o(d))
                throw new TypeError("Invalid value used as weak map key");
              var p = d[this._id];
              return p && p[0] === d ? (p[1] = f, this) : (n(d, this._id, [d, f]), this);
            });
            function u(d, f) {
              if (!o(d) || !r.call(d, "_id"))
                throw new TypeError(f + " method called on incompatible receiver " + P(d));
            }
            i(u, "checkInstance");
            function s(d) {
              return d + "_" + c() + "." + c();
            }
            i(s, "genId");
            function c() {
              return Math.random().toString().substring(2);
            }
            return i(c, "rand"), n(l, "_polyfill", !0), l;
          }();
          function o(l) {
            return Object(l) === l;
          }
          i(o, "isObject");
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof D < "u" ? D : typeof rt < "u" ? rt : e);
      }), s1 = [{
        name: "NA",
        value: "inapplicable",
        priority: 0,
        group: "inapplicable"
      }, {
        name: "PASS",
        value: "passed",
        priority: 1,
        group: "passes"
      }, {
        name: "CANTTELL",
        value: "cantTell",
        priority: 2,
        group: "incomplete"
      }, {
        name: "FAIL",
        value: "failed",
        priority: 3,
        group: "violations"
      }], ot = {
        helpUrlBase: "https://dequeuniversity.com/rules/",
        gridSize: 200,
        results: [],
        resultGroups: [],
        resultGroupMap: {},
        impact: Object.freeze(["minor", "moderate", "serious", "critical"]),
        preload: Object.freeze({
          assets: ["cssom", "media"],
          timeout: 1e4
        }),
        allOrigins: "<unsafe_all_origins>",
        sameOrigin: "<same_origin>"
      };
      s1.forEach(function(e) {
        var t = e.name, r = e.value, a = e.priority, n = e.group;
        ot[t] = r, ot[t + "_PRIO"] = a, ot[t + "_GROUP"] = n, ot.results[a] = r, ot.resultGroups[a] = n, ot.resultGroupMap[r] = n;
      }), Object.freeze(ot.results), Object.freeze(ot.resultGroups), Object.freeze(ot.resultGroupMap), Object.freeze(ot);
      var ee = ot;
      function c1() {
        (typeof console > "u" ? "undefined" : P(console)) === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      i(c1, "log");
      var Mt = c1, d1 = /[\t\r\n\f]/g, f1 = function() {
        function e() {
          Wt(this, e), this.parent = void 0;
        }
        return i(e, "AbstractVirtualNode"), Gt(e, [{
          key: "props",
          get: /* @__PURE__ */ i(function() {
            throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties');
          }, "get")
        }, {
          key: "attrNames",
          get: /* @__PURE__ */ i(function() {
            throw new Error('VirtualNode class must have an "attrNames" property');
          }, "get")
        }, {
          key: "attr",
          value: /* @__PURE__ */ i(function() {
            throw new Error('VirtualNode class must have an "attr" function');
          }, "attr")
        }, {
          key: "hasAttr",
          value: /* @__PURE__ */ i(function() {
            throw new Error('VirtualNode class must have a "hasAttr" function');
          }, "hasAttr")
        }, {
          key: "hasClass",
          value: /* @__PURE__ */ i(function(r) {
            var a = this.attr("class");
            if (!a)
              return !1;
            var n = " " + r + " ";
            return (" " + a + " ").replace(d1, " ").indexOf(n) >= 0;
          }, "hasClass")
        }]), e;
      }(), Z = f1, Va = {};
      we(Va, {
        DqElement: /* @__PURE__ */ i(function() {
          return lt;
        }, "DqElement"),
        aggregate: /* @__PURE__ */ i(function() {
          return $r;
        }, "aggregate"),
        aggregateChecks: /* @__PURE__ */ i(function() {
          return so;
        }, "aggregateChecks"),
        aggregateNodeResults: /* @__PURE__ */ i(function() {
          return co;
        }, "aggregateNodeResults"),
        aggregateResult: /* @__PURE__ */ i(function() {
          return fo;
        }, "aggregateResult"),
        areStylesSet: /* @__PURE__ */ i(function() {
          return D1;
        }, "areStylesSet"),
        assert: /* @__PURE__ */ i(function() {
          return pe;
        }, "assert"),
        checkHelper: /* @__PURE__ */ i(function() {
          return Ga;
        }, "checkHelper"),
        clone: /* @__PURE__ */ i(function() {
          return bt;
        }, "clone"),
        closest: /* @__PURE__ */ i(function() {
          return Xe;
        }, "closest"),
        collectResultsFromFrames: /* @__PURE__ */ i(function() {
          return Vo;
        }, "collectResultsFromFrames"),
        contains: /* @__PURE__ */ i(function() {
          return qt;
        }, "contains"),
        convertSelector: /* @__PURE__ */ i(function() {
          return Jr;
        }, "convertSelector"),
        cssParser: /* @__PURE__ */ i(function() {
          return _o;
        }, "cssParser"),
        deepMerge: /* @__PURE__ */ i(function() {
          return cn;
        }, "deepMerge"),
        escapeSelector: /* @__PURE__ */ i(function() {
          return Fe;
        }, "escapeSelector"),
        extendMetaData: /* @__PURE__ */ i(function() {
          return dn;
        }, "extendMetaData"),
        filterHtmlAttrs: /* @__PURE__ */ i(function() {
          return rs;
        }, "filterHtmlAttrs"),
        finalizeRuleResult: /* @__PURE__ */ i(function() {
          return vr;
        }, "finalizeRuleResult"),
        findBy: /* @__PURE__ */ i(function() {
          return _r;
        }, "findBy"),
        getAllChecks: /* @__PURE__ */ i(function() {
          return ra;
        }, "getAllChecks"),
        getAncestry: /* @__PURE__ */ i(function() {
          return Xr;
        }, "getAncestry"),
        getBaseLang: /* @__PURE__ */ i(function() {
          return $t;
        }, "getBaseLang"),
        getCheckMessage: /* @__PURE__ */ i(function() {
          return av;
        }, "getCheckMessage"),
        getCheckOption: /* @__PURE__ */ i(function() {
          return Da;
        }, "getCheckOption"),
        getEnvironmentData: /* @__PURE__ */ i(function() {
          return Ct;
        }, "getEnvironmentData"),
        getFlattenedTree: /* @__PURE__ */ i(function() {
          return ei;
        }, "getFlattenedTree"),
        getFrameContexts: /* @__PURE__ */ i(function() {
          return wv;
        }, "getFrameContexts"),
        getFriendlyUriEnd: /* @__PURE__ */ i(function() {
          return ho;
        }, "getFriendlyUriEnd"),
        getNodeAttributes: /* @__PURE__ */ i(function() {
          return Gr;
        }, "getNodeAttributes"),
        getNodeFromTree: /* @__PURE__ */ i(function() {
          return B;
        }, "getNodeFromTree"),
        getPreloadConfig: /* @__PURE__ */ i(function() {
          return Ju;
        }, "getPreloadConfig"),
        getRootNode: /* @__PURE__ */ i(function() {
          return xr;
        }, "getRootNode"),
        getRule: /* @__PURE__ */ i(function() {
          return qu;
        }, "getRule"),
        getScroll: /* @__PURE__ */ i(function() {
          return wt;
        }, "getScroll"),
        getScrollState: /* @__PURE__ */ i(function() {
          return Ev;
        }, "getScrollState"),
        getSelector: /* @__PURE__ */ i(function() {
          return Wa;
        }, "getSelector"),
        getSelectorData: /* @__PURE__ */ i(function() {
          return Kr;
        }, "getSelectorData"),
        getShadowSelector: /* @__PURE__ */ i(function() {
          return Ha;
        }, "getShadowSelector"),
        getStandards: /* @__PURE__ */ i(function() {
          return Av;
        }, "getStandards"),
        getStyleSheetFactory: /* @__PURE__ */ i(function() {
          return Vu;
        }, "getStyleSheetFactory"),
        getXpath: /* @__PURE__ */ i(function() {
          return wo;
        }, "getXpath"),
        injectStyle: /* @__PURE__ */ i(function() {
          return Tv;
        }, "injectStyle"),
        isHidden: /* @__PURE__ */ i(function() {
          return kv;
        }, "isHidden"),
        isHtmlElement: /* @__PURE__ */ i(function() {
          return oi;
        }, "isHtmlElement"),
        isNodeInContext: /* @__PURE__ */ i(function() {
          return li;
        }, "isNodeInContext"),
        isShadowRoot: /* @__PURE__ */ i(function() {
          return na;
        }, "isShadowRoot"),
        isValidLang: /* @__PURE__ */ i(function() {
          return Ea;
        }, "isValidLang"),
        isXHTML: /* @__PURE__ */ i(function() {
          return Yr;
        }, "isXHTML"),
        matchAncestry: /* @__PURE__ */ i(function() {
          return ui;
        }, "matchAncestry"),
        matches: /* @__PURE__ */ i(function() {
          return Xa;
        }, "matches"),
        matchesExpression: /* @__PURE__ */ i(function() {
          return Jt;
        }, "matchesExpression"),
        matchesSelector: /* @__PURE__ */ i(function() {
          return Kt;
        }, "matchesSelector"),
        memoize: /* @__PURE__ */ i(function() {
          return Ge;
        }, "memoize"),
        mergeResults: /* @__PURE__ */ i(function() {
          return aa;
        }, "mergeResults"),
        nodeSorter: /* @__PURE__ */ i(function() {
          return si;
        }, "nodeSorter"),
        parseCrossOriginStylesheet: /* @__PURE__ */ i(function() {
          return di;
        }, "parseCrossOriginStylesheet"),
        parseSameOriginStylesheet: /* @__PURE__ */ i(function() {
          return zu;
        }, "parseSameOriginStylesheet"),
        parseStylesheet: /* @__PURE__ */ i(function() {
          return ci;
        }, "parseStylesheet"),
        performanceTimer: /* @__PURE__ */ i(function() {
          return Se;
        }, "performanceTimer"),
        pollyfillElementsFromPoint: /* @__PURE__ */ i(function() {
          return Uu;
        }, "pollyfillElementsFromPoint"),
        preload: /* @__PURE__ */ i(function() {
          return Qu;
        }, "preload"),
        preloadCssom: /* @__PURE__ */ i(function() {
          return Wu;
        }, "preloadCssom"),
        preloadMedia: /* @__PURE__ */ i(function() {
          return Ku;
        }, "preloadMedia"),
        processMessage: /* @__PURE__ */ i(function() {
          return ai;
        }, "processMessage"),
        publishMetaData: /* @__PURE__ */ i(function() {
          return _a;
        }, "publishMetaData"),
        querySelectorAll: /* @__PURE__ */ i(function() {
          return et;
        }, "querySelectorAll"),
        querySelectorAllFilter: /* @__PURE__ */ i(function() {
          return ht;
        }, "querySelectorAllFilter"),
        queue: /* @__PURE__ */ i(function() {
          return ct;
        }, "queue"),
        respondable: /* @__PURE__ */ i(function() {
          return ut;
        }, "respondable"),
        ruleShouldRun: /* @__PURE__ */ i(function() {
          return ts;
        }, "ruleShouldRun"),
        select: /* @__PURE__ */ i(function() {
          return pi;
        }, "select"),
        sendCommandToFrame: /* @__PURE__ */ i(function() {
          return No;
        }, "sendCommandToFrame"),
        setScrollState: /* @__PURE__ */ i(function() {
          return sg;
        }, "setScrollState"),
        shadowSelect: /* @__PURE__ */ i(function() {
          return cg;
        }, "shadowSelect"),
        shadowSelectAll: /* @__PURE__ */ i(function() {
          return mi;
        }, "shadowSelectAll"),
        shouldPreload: /* @__PURE__ */ i(function() {
          return Xu;
        }, "shouldPreload"),
        toArray: /* @__PURE__ */ i(function() {
          return mo;
        }, "toArray"),
        tokenList: /* @__PURE__ */ i(function() {
          return ze;
        }, "tokenList"),
        uniqueArray: /* @__PURE__ */ i(function() {
          return Pr;
        }, "uniqueArray"),
        uuid: /* @__PURE__ */ i(function() {
          return df;
        }, "uuid"),
        validInputTypes: /* @__PURE__ */ i(function() {
          return xa;
        }, "validInputTypes"),
        validLangs: /* @__PURE__ */ i(function() {
          return ls;
        }, "validLangs")
      });
      function p1(e, t, r) {
        t = t.slice(), r && t.push(r);
        var a = t.map(function(n) {
          return e.indexOf(n);
        }).sort();
        return e[a.pop()];
      }
      i(p1, "aggregate");
      var $r = p1, m1 = ee.CANTTELL_PRIO, h1 = ee.FAIL_PRIO, Wr = [];
      Wr[ee.PASS_PRIO] = !0, Wr[ee.CANTTELL_PRIO] = null, Wr[ee.FAIL_PRIO] = !1;
      var lo = ["any", "all", "none"];
      function uo(e, t) {
        return lo.reduce(function(r, a) {
          return r[a] = (e[a] || []).map(function(n) {
            return t(n, a);
          }), r;
        }, {});
      }
      i(uo, "anyAllNone");
      function v1(e) {
        var t = Object.assign({}, e);
        uo(t, function(n, o) {
          var l = typeof n.result > "u" ? -1 : Wr.indexOf(n.result);
          n.priority = l !== -1 ? l : ee.CANTTELL_PRIO, o === "none" && (n.priority === ee.PASS_PRIO ? n.priority = ee.FAIL_PRIO : n.priority === ee.FAIL_PRIO && (n.priority = ee.PASS_PRIO));
        });
        var r = {
          all: t.all.reduce(function(n, o) {
            return Math.max(n, o.priority);
          }, 0),
          none: t.none.reduce(function(n, o) {
            return Math.max(n, o.priority);
          }, 0),
          any: t.any.reduce(function(n, o) {
            return Math.min(n, o.priority);
          }, 4) % 4
        };
        t.priority = Math.max(r.all, r.none, r.any);
        var a = [];
        return lo.forEach(function(n) {
          t[n] = t[n].filter(function(o) {
            return o.priority === t.priority && o.priority === r[n];
          }), t[n].forEach(function(o) {
            return a.push(o.impact);
          });
        }), [m1, h1].includes(t.priority) ? t.impact = $r(ee.impact, a) : t.impact = null, uo(t, function(n) {
          delete n.result, delete n.priority;
        }), t.result = ee.results[t.priority], delete t.priority, t;
      }
      i(v1, "aggregateChecks");
      var so = v1;
      function g1(e) {
        var t = g._audit.rules.find(function(r) {
          return r.id === e.id;
        });
        return t && t.impact && e.nodes.forEach(function(r) {
          ["any", "all", "none"].forEach(function(a) {
            (r[a] || []).forEach(function(n) {
              n.impact = t.impact;
            });
          });
        }), Object.assign(e, co(e.nodes)), delete e.nodes, e;
      }
      i(g1, "finalizeRuleResult");
      var vr = g1;
      function b1(e) {
        var t = {};
        if (e = e.map(function(o) {
          if (o.any && o.all && o.none)
            return so(o);
          if (Array.isArray(o.node))
            return vr(o);
          throw new TypeError("Invalid Result type");
        }), e && e.length) {
          var r = e.map(function(o) {
            return o.result;
          });
          t.result = $r(ee.results, r, t.result);
        } else
          t.result = "inapplicable";
        ee.resultGroups.forEach(function(o) {
          return t[o] = [];
        }), e.forEach(function(o) {
          var l = ee.resultGroupMap[o.result];
          t[l].push(o);
        });
        var a = ee.FAIL_GROUP;
        if (t[a].length === 0 && (a = ee.CANTTELL_GROUP), t[a].length > 0) {
          var n = t[a].map(function(o) {
            return o.impact;
          });
          t.impact = $r(ee.impact, n) || null;
        } else
          t.impact = null;
        return t;
      }
      i(b1, "aggregateNodeResults");
      var co = b1;
      function ja(e, t, r) {
        var a = Object.assign({}, t);
        a.nodes = (a[r] || []).concat(), ee.resultGroups.forEach(function(n) {
          delete a[n];
        }), e[r].push(a);
      }
      i(ja, "copyToGroup");
      function y1(e) {
        var t = {};
        return ee.resultGroups.forEach(function(r) {
          return t[r] = [];
        }), e.forEach(function(r) {
          r.error ? ja(t, r, ee.CANTTELL_GROUP) : r.result === ee.NA ? ja(t, r, ee.NA_GROUP) : ee.resultGroups.forEach(function(a) {
            Array.isArray(r[a]) && r[a].length > 0 && ja(t, r, a);
          });
        }), t;
      }
      i(y1, "aggregateResult");
      var fo = y1;
      function po(e, t, r) {
        var a = D.getComputedStyle(e, null);
        if (!a)
          return !1;
        for (var n = 0; n < t.length; ++n) {
          var o = t[n];
          if (a.getPropertyValue(o.property) === o.value)
            return !0;
        }
        return !e.parentNode || e.nodeName.toUpperCase() === r.toUpperCase() ? !1 : po(e.parentNode, t, r);
      }
      i(po, "areStylesSet");
      var D1 = po;
      function w1(e, t) {
        if (!e)
          throw new Error(t);
      }
      i(w1, "assert");
      var pe = w1;
      function _1(e) {
        return Array.prototype.slice.call(e);
      }
      i(_1, "toArray");
      var mo = _1;
      function x1(e) {
        for (var t = String(e), r = t.length, a = -1, n, o = "", l = t.charCodeAt(0); ++a < r; ) {
          if (n = t.charCodeAt(a), n == 0) {
            o += "\uFFFD";
            continue;
          }
          if (n >= 1 && n <= 31 || n == 127 || a == 0 && n >= 48 && n <= 57 || a == 1 && n >= 48 && n <= 57 && l == 45) {
            o += "\\" + n.toString(16) + " ";
            continue;
          }
          if (a == 0 && r == 1 && n == 45) {
            o += "\\" + t.charAt(a);
            continue;
          }
          if (n >= 128 || n == 45 || n == 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
            o += t.charAt(a);
            continue;
          }
          o += "\\" + t.charAt(a);
        }
        return o;
      }
      i(x1, "escapeSelector");
      var Fe = x1;
      function E1() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return e.length !== 0 && (e.match(/[0-9]/g) || "").length >= e.length / 2;
      }
      i(E1, "isMostlyNumbers");
      function gr(e, t) {
        return [e.substring(0, t), e.substring(t)];
      }
      i(gr, "splitString");
      function br(e) {
        return e.replace(/\s+$/, "");
      }
      i(br, "trimRight");
      function A1(e) {
        var t = e, r = "", a = "", n = "", o = "", l = "", u = "";
        if (e.includes("#")) {
          var s = gr(e, e.indexOf("#")), c = ge(s, 2);
          e = c[0], u = c[1];
        }
        if (e.includes("?")) {
          var d = gr(e, e.indexOf("?")), f = ge(d, 2);
          e = f[0], l = f[1];
        }
        if (e.includes("://")) {
          var p = e.split("://"), m = ge(p, 2);
          r = m[0], e = m[1];
          var h = gr(e, e.indexOf("/")), y = ge(h, 2);
          a = y[0], e = y[1];
        } else if (e.substr(0, 2) === "//") {
          e = e.substr(2);
          var w = gr(e, e.indexOf("/")), v = ge(w, 2);
          a = v[0], e = v[1];
        }
        if (a.substr(0, 4) === "www." && (a = a.substr(4)), a && a.includes(":")) {
          var b = gr(a, a.indexOf(":")), E = ge(b, 2);
          a = E[0], n = E[1];
        }
        return o = e, {
          original: t,
          protocol: r,
          domain: a,
          port: n,
          path: o,
          query: l,
          hash: u
        };
      }
      i(A1, "uriParser");
      function F1() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e.length <= 1 || e.substr(0, 5) === "data:" || e.substr(0, 11) === "javascript:" || e.includes("?"))) {
          var r = t.currentDomain, a = t.maxLength, n = a === void 0 ? 25 : a, o = A1(e), l = o.path, u = o.domain, s = o.hash, c = l.substr(l.substr(0, l.length - 2).lastIndexOf("/") + 1);
          if (s)
            return c && (c + s).length <= n ? br(c + s) : c.length < 2 && s.length > 2 && s.length <= n ? br(s) : void 0;
          if (u && u.length < n && l.length <= 1 || l === "/" + c && u && r && u !== r && (u + l).length <= n)
            return br(u + l);
          var d = c.lastIndexOf(".");
          if ((d === -1 || d > 1) && (d !== -1 || c.length > 2) && c.length <= n && !c.match(/index(\.[a-zA-Z]{2-4})?/) && !E1(c))
            return br(c);
        }
      }
      i(F1, "getFriendlyUriEnd");
      var ho = F1;
      function C1(e) {
        return e.attributes instanceof D.NamedNodeMap ? e.attributes : e.cloneNode(!1).attributes;
      }
      i(C1, "getNodeAttributes");
      var Gr = C1, T1 = function() {
        var e;
        function t(r) {
          var a, n, o = ["matches", "matchesSelector", "mozMatchesSelector", "webkitMatchesSelector", "msMatchesSelector"], l = o.length;
          for (a = 0; a < l; a++)
            if (n = o[a], r[n])
              return n;
        }
        return i(t, "getMethod"), function(r, a) {
          return (!e || !r[e]) && (e = t(r)), r[e] ? r[e](a) : !1;
        };
      }(), Kt = T1;
      function k1(e) {
        return e.createElement ? e.createElement("A").localName === "A" : !1;
      }
      i(k1, "isXHTML");
      var Yr = k1;
      function R1(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t)
          return "";
        var a = t.getRootNode && t.getRootNode() || R;
        if (a.nodeType !== 11)
          return e(t, r, a);
        for (var n = []; a.nodeType === 11; ) {
          if (!a.host)
            return "";
          n.unshift({
            elm: t,
            doc: a
          }), t = a.host, a = t.getRootNode();
        }
        return n.unshift({
          elm: t,
          doc: a
        }), n.map(function(o) {
          var l = o.elm, u = o.doc;
          return e(l, r, u);
        });
      }
      i(R1, "getShadowSelector");
      var Ha = R1, za, S1 = ["class", "style", "id", "selected", "checked", "disabled", "tabindex", "aria-checked", "aria-selected", "aria-invalid", "aria-activedescendant", "aria-busy", "aria-disabled", "aria-expanded", "aria-grabbed", "aria-pressed", "aria-valuenow"], O1 = 31, I1 = /([\\"])/g, P1 = /(\r\n|\r|\n)/g;
      function Ua(e) {
        return e.replace(I1, "\\$1").replace(P1, "\\a ");
      }
      i(Ua, "escapeAttribute");
      function vo(e, t) {
        var r = t.name, a;
        if (r.indexOf("href") !== -1 || r.indexOf("src") !== -1) {
          var n = ho(e.getAttribute(r));
          n ? a = Fe(t.name) + '$="' + Ua(n) + '"' : a = Fe(t.name) + '="' + Ua(e.getAttribute(r)) + '"';
        } else
          a = Fe(r) + '="' + Ua(t.value) + '"';
        return a;
      }
      i(vo, "getAttributeNameValue");
      function $a(e, t) {
        return e.count < t.count ? -1 : e.count === t.count ? 0 : 1;
      }
      i($a, "countSort");
      function go(e) {
        return !S1.includes(e.name) && e.name.indexOf(":") === -1 && (!e.value || e.value.length < O1);
      }
      i(go, "filterAttributes");
      function Kr(e) {
        var t = {
          classes: {},
          tags: {},
          attributes: {}
        };
        e = Array.isArray(e) ? e : [e];
        for (var r = e.slice(), a = [], n = /* @__PURE__ */ i(function() {
          var l = r.pop(), u = l.actualNode;
          if (u.querySelectorAll) {
            var s = u.nodeName;
            t.tags[s] ? t.tags[s]++ : t.tags[s] = 1, u.classList && Array.from(u.classList).forEach(function(c) {
              var d = Fe(c);
              t.classes[d] ? t.classes[d]++ : t.classes[d] = 1;
            }), u.hasAttributes() && Array.from(Gr(u)).filter(go).forEach(function(c) {
              var d = vo(u, c);
              d && (t.attributes[d] ? t.attributes[d]++ : t.attributes[d] = 1);
            });
          }
          for (l.children.length && (a.push(r), r = l.children.slice()); !r.length && a.length; )
            r = a.pop();
        }, "_loop2"); r.length; )
          n();
        return t;
      }
      i(Kr, "_getSelectorData");
      function M1(e, t) {
        var r = [], a = t.classes, n = t.tags;
        return e.classList && Array.from(e.classList).forEach(function(o) {
          var l = Fe(o);
          a[l] < n[e.nodeName] && r.push({
            name: l,
            count: a[l],
            species: "class"
          });
        }), r.sort($a);
      }
      i(M1, "uncommonClasses");
      function N1(e, t) {
        var r = e.parentNode && Array.from(e.parentNode.children || "") || [], a = r.find(function(o) {
          return o !== e && Kt(o, t);
        });
        if (a) {
          var n = 1 + r.indexOf(e);
          return ":nth-child(" + n + ")";
        } else
          return "";
      }
      i(N1, "getNthChildString");
      function q1(e) {
        if (!!e.getAttribute("id")) {
          var t = e.getRootNode && e.getRootNode() || R, r = "#" + Fe(e.getAttribute("id") || "");
          if (!r.match(/player_uid_/) && t.querySelectorAll(r).length === 1)
            return r;
        }
      }
      i(q1, "getElmId");
      function bo(e) {
        return typeof za > "u" && (za = Yr(R)), Fe(za ? e.localName : e.nodeName.toLowerCase());
      }
      i(bo, "getBaseSelector");
      function B1(e, t) {
        var r = [], a = t.attributes, n = t.tags;
        return e.hasAttributes() && Array.from(Gr(e)).filter(go).forEach(function(o) {
          var l = vo(e, o);
          l && a[l] < n[e.nodeName] && r.push({
            name: l,
            count: a[l],
            species: "attribute"
          });
        }), r.sort($a);
      }
      i(B1, "uncommonAttributes");
      function L1(e, t) {
        var r = "", a, n = M1(e, t), o = B1(e, t);
        return n.length && n[0].count === 1 ? a = [n[0]] : o.length && o[0].count === 1 ? (a = [o[0]], r = bo(e)) : (a = n.concat(o), a.sort($a), a = a.slice(0, 3), a.some(function(l) {
          return l.species === "class";
        }) ? a.sort(function(l, u) {
          return l.species !== u.species && l.species === "class" ? -1 : l.species === u.species ? 0 : 1;
        }) : r = bo(e)), r += a.reduce(function(l, u) {
          switch (u.species) {
            case "class":
              return l + "." + u.name;
            case "attribute":
              return l + "[" + u.name + "]";
          }
          return l;
        }, "");
      }
      i(L1, "getThreeLeastCommonFeatures");
      function V1(e, t, r) {
        if (!g._selectorData)
          throw new Error("Expect axe._selectorData to be set up");
        var a = t.toRoot, n = a === void 0 ? !1 : a, o, l;
        do {
          var u = q1(e);
          u || (u = L1(e, g._selectorData), u += N1(e, u)), o ? o = u + " > " + o : o = u, l ? l = l.filter(function(s) {
            return Kt(s, o);
          }) : l = Array.from(r.querySelectorAll(o)), e = e.parentElement;
        } while ((l.length > 1 || n) && e && e.nodeType !== 11);
        return l.length === 1 ? o : o.indexOf(" > ") !== -1 ? ":root" + o.substring(o.indexOf(" > ")) : ":root";
      }
      i(V1, "generateSelector");
      function Wa(e, t) {
        return Ha(V1, e, t);
      }
      i(Wa, "_getSelector");
      function yo(e) {
        var t = e.nodeName.toLowerCase(), r = e.parentElement;
        if (!r)
          return t;
        var a = "";
        if (t !== "head" && t !== "body" && r.children.length > 1) {
          var n = Array.prototype.indexOf.call(r.children, e) + 1;
          a = ":nth-child(".concat(n, ")");
        }
        return yo(r) + " > " + t + a;
      }
      i(yo, "generateAncestry");
      function Xr(e, t) {
        return Ha(yo, e, t);
      }
      i(Xr, "_getAncestry");
      function Do(e, t) {
        var r, a;
        if (!e)
          return [];
        if (!t && e.nodeType === 9)
          return t = [{
            str: "html"
          }], t;
        if (t = t || [], e.parentNode && e.parentNode !== e && (t = Do(e.parentNode, t)), e.previousSibling) {
          a = 1, r = e.previousSibling;
          do
            r.nodeType === 1 && r.nodeName === e.nodeName && a++, r = r.previousSibling;
          while (r);
          a === 1 && (a = null);
        } else if (e.nextSibling) {
          r = e.nextSibling;
          do
            r.nodeType === 1 && r.nodeName === e.nodeName ? (a = 1, r = null) : (a = null, r = r.previousSibling);
          while (r);
        }
        if (e.nodeType === 1) {
          var n = {};
          n.str = e.nodeName.toLowerCase();
          var o = e.getAttribute && Fe(e.getAttribute("id"));
          o && e.ownerDocument.querySelectorAll("#" + o).length === 1 && (n.id = e.getAttribute("id")), a > 1 && (n.count = a), t.push(n);
        }
        return t;
      }
      i(Do, "getXPathArray");
      function j1(e) {
        return e.reduce(function(t, r) {
          return r.id ? "/".concat(r.str, "[@id='").concat(r.id, "']") : t + "/".concat(r.str) + (r.count > 0 ? "[".concat(r.count, "]") : "");
        }, "");
      }
      i(j1, "xpathToString");
      function H1(e) {
        var t = Do(e);
        return j1(t);
      }
      i(H1, "getXpath");
      var wo = H1, yr = {}, z1 = {
        set: /* @__PURE__ */ i(function(t, r) {
          U1(t), yr[t] = r;
        }, "set"),
        get: /* @__PURE__ */ i(function(t, r) {
          if ($1(r), t in yr)
            return yr[t];
          if (typeof r == "function") {
            var a = r();
            return pe(a !== void 0, "Cache creator function should not return undefined"), this.set(t, a), yr[t];
          }
        }, "get"),
        clear: /* @__PURE__ */ i(function() {
          yr = {};
        }, "clear")
      };
      function U1(e) {
        pe(typeof e == "string", "key must be a string, " + P(e) + " given"), pe(e !== "", "key must not be empty");
      }
      i(U1, "validateKey");
      function $1(e) {
        pe(typeof e == "function" || typeof e > "u", "creator must be a function or undefined, " + P(e) + " given");
      }
      i($1, "validateCreator");
      var le = z1;
      function W1(e, t) {
        var r = t || e;
        return le.get("nodeMap") ? le.get("nodeMap").get(r) : null;
      }
      i(W1, "getNodeFromTree");
      var B = W1;
      function G1(e, t) {
        if (t = t || 300, e.length > t) {
          var r = e.indexOf(">");
          e = e.substring(0, r + 1);
        }
        return e;
      }
      i(G1, "truncate");
      function Y1(e) {
        if (!(e != null && e.outerHTML))
          return "";
        var t = e.outerHTML;
        return !t && typeof D.XMLSerializer == "function" && (t = new D.XMLSerializer().serializeToString(e)), G1(t || "");
      }
      i(Y1, "getSource");
      function Xt(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (this.spec = n, e instanceof Z ? (this._virtualNode = e, this._element = e.actualNode) : (this._element = e, this._virtualNode = B(e)), this.fromFrame = ((t = this.spec.selector) === null || t === void 0 ? void 0 : t.length) > 1, a.absolutePaths && (this._options = {
          toRoot: !0
        }), this.nodeIndexes = [], Array.isArray(this.spec.nodeIndexes) ? this.nodeIndexes = this.spec.nodeIndexes : typeof ((r = this._virtualNode) === null || r === void 0 ? void 0 : r.nodeIndex) == "number" && (this.nodeIndexes = [this._virtualNode.nodeIndex]), this.source = null, !g._audit.noHtml) {
          var o;
          this.source = (o = this.spec.source) !== null && o !== void 0 ? o : Y1(this._element);
        }
      }
      i(Xt, "DqElement"), Xt.prototype = {
        get selector() {
          return this.spec.selector || [Wa(this.element, this._options)];
        },
        get ancestry() {
          return this.spec.ancestry || [Xr(this.element)];
        },
        get xpath() {
          return this.spec.xpath || [wo(this.element)];
        },
        get element() {
          return this._element;
        },
        toJSON: /* @__PURE__ */ i(function() {
          return {
            selector: this.selector,
            source: this.source,
            xpath: this.xpath,
            ancestry: this.ancestry,
            nodeIndexes: this.nodeIndexes
          };
        }, "toJSON")
      }, Xt.fromFrame = /* @__PURE__ */ i(function(t, r, a) {
        var n = Xt.mergeSpecs(t, a);
        return new Xt(a.element, r, n);
      }, "fromFrame"), Xt.mergeSpecs = /* @__PURE__ */ i(function(t, r) {
        return ue({}, t, {
          selector: [].concat(ae(r.selector), ae(t.selector)),
          ancestry: [].concat(ae(r.ancestry), ae(t.ancestry)),
          xpath: [].concat(ae(r.xpath), ae(t.xpath)),
          nodeIndexes: [].concat(ae(r.nodeIndexes), ae(t.nodeIndexes))
        });
      }, "mergeSpec");
      var lt = Xt;
      function K1(e, t, r, a) {
        return {
          isAsync: !1,
          async: /* @__PURE__ */ i(function() {
            return this.isAsync = !0, function(o) {
              o instanceof Error ? a(o) : (e.result = o, r(e));
            };
          }, "async"),
          data: /* @__PURE__ */ i(function(o) {
            e.data = o;
          }, "data"),
          relatedNodes: /* @__PURE__ */ i(function(o) {
            !D.Node || (o = o instanceof D.Node ? [o] : mo(o), o.every(function(l) {
              return l instanceof D.Node || l.actualNode;
            }) && (e.relatedNodes = o.map(function(l) {
              return new lt(l, t);
            })));
          }, "relatedNodes")
        };
      }
      i(K1, "checkHelper");
      var Ga = K1;
      function Ya(e) {
        var t, r, a, n, o = e;
        if ((t = D) !== null && t !== void 0 && t.Node && e instanceof D.Node || (r = D) !== null && r !== void 0 && r.HTMLCollection && e instanceof D.HTMLCollection)
          return e;
        if (e !== null && P(e) === "object")
          if (Array.isArray(e))
            for (o = [], a = 0, n = e.length; a < n; a++)
              o[a] = Ya(e[a]);
          else {
            o = {};
            for (a in e)
              o[a] = Ya(e[a]);
          }
        return o;
      }
      i(Ya, "clone");
      var bt = Ya, X1 = it(Yi()), Dr = new X1.CssSelectorParser();
      Dr.registerSelectorPseudos("not"), Dr.registerSelectorPseudos("is"), Dr.registerNestingOperators(">"), Dr.registerAttrEqualityMods("^", "$", "*", "~");
      var _o = Dr;
      function J1(e, t) {
        return e.props.nodeType === 1 && (t.tag === "*" || e.props.nodeName === t.tag);
      }
      i(J1, "matchesTag");
      function Q1(e, t) {
        return !t.classes || t.classes.every(function(r) {
          return e.hasClass(r.value);
        });
      }
      i(Q1, "matchesClasses");
      function Z1(e, t) {
        return !t.attributes || t.attributes.every(function(r) {
          var a = e.attr(r.key);
          return a !== null && r.test(a);
        });
      }
      i(Z1, "matchesAttributes");
      function ef(e, t) {
        return !t.id || e.props.id === t.id;
      }
      i(ef, "matchesId");
      function tf(e, t) {
        return !!(!t.pseudos || t.pseudos.every(function(r) {
          if (r.name === "not")
            return !r.expressions.some(function(a) {
              return Jt(e, a);
            });
          if (r.name === "is")
            return r.expressions.some(function(a) {
              return Jt(e, a);
            });
          throw new Error("the pseudo selector " + r.name + " has not yet been implemented");
        }));
      }
      i(tf, "matchesPseudos");
      function xo(e, t) {
        return J1(e, t) && Q1(e, t) && Z1(e, t) && ef(e, t) && tf(e, t);
      }
      i(xo, "matchExpression");
      var wr = function() {
        var e = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g, t = "\\";
        return function(r) {
          return r.replace(e, t);
        };
      }(), Ka = /\\/g;
      function rf(e) {
        if (!!e)
          return e.map(function(t) {
            var r = t.name.replace(Ka, ""), a = (t.value || "").replace(Ka, ""), n, o;
            switch (t.operator) {
              case "^=":
                o = new RegExp("^" + wr(a));
                break;
              case "$=":
                o = new RegExp(wr(a) + "$");
                break;
              case "~=":
                o = new RegExp("(^|\\s)" + wr(a) + "(\\s|$)");
                break;
              case "|=":
                o = new RegExp("^" + wr(a) + "(-|$)");
                break;
              case "=":
                n = /* @__PURE__ */ i(function(u) {
                  return a === u;
                }, "test");
                break;
              case "*=":
                n = /* @__PURE__ */ i(function(u) {
                  return u && u.includes(a);
                }, "test");
                break;
              case "!=":
                n = /* @__PURE__ */ i(function(u) {
                  return a !== u;
                }, "test");
                break;
              default:
                n = /* @__PURE__ */ i(function(u) {
                  return u !== null;
                }, "test");
            }
            return a === "" && /^[*$^]=$/.test(t.operator) && (n = /* @__PURE__ */ i(function() {
              return !1;
            }, "test")), n || (n = /* @__PURE__ */ i(function(u) {
              return u && o.test(u);
            }, "test")), {
              key: r,
              value: a,
              type: typeof t.value > "u" ? "attrExist" : "attrValue",
              test: n
            };
          });
      }
      i(rf, "convertAttributes");
      function af(e) {
        if (!!e)
          return e.map(function(t) {
            return t = t.replace(Ka, ""), {
              value: t,
              regexp: new RegExp("(^|\\s)" + wr(t) + "(\\s|$)")
            };
          });
      }
      i(af, "convertClasses");
      function nf(e) {
        if (!!e)
          return e.map(function(t) {
            var r;
            return ["is", "not"].includes(t.name) && (r = t.value, r = r.selectors ? r.selectors : [r], r = Eo(r)), {
              name: t.name,
              expressions: r,
              value: t.value
            };
          });
      }
      i(nf, "convertPseudos");
      function Eo(e) {
        return e.map(function(t) {
          for (var r = [], a = t.rule; a; )
            r.push({
              tag: a.tagName ? a.tagName.toLowerCase() : "*",
              combinator: a.nestingOperator ? a.nestingOperator : " ",
              id: a.id,
              attributes: rf(a.attrs),
              classes: af(a.classNames),
              pseudos: nf(a.pseudos)
            }), a = a.rule;
          return r;
        });
      }
      i(Eo, "convertExpressions");
      function Jr(e) {
        var t = _o.parse(e);
        return t = t.selectors ? t.selectors : [t], Eo(t);
      }
      i(Jr, "_convertSelector");
      function Ao(e, t, r, a) {
        if (!e)
          return !1;
        for (var n = Array.isArray(t), o = n ? t[r] : t, l = xo(e, o); !l && a && e.parent; )
          e = e.parent, l = xo(e, o);
        if (r > 0) {
          if ([" ", ">"].includes(o.combinator) === !1)
            throw new Error("axe.utils.matchesExpression does not support the combinator: " + o.combinator);
          l = l && Ao(e.parent, t, r - 1, o.combinator === " ");
        }
        return l;
      }
      i(Ao, "optimizedMatchesExpression");
      function Jt(e, t, r) {
        return Ao(e, t, t.length - 1, r);
      }
      i(Jt, "_matchesExpression");
      function of(e, t) {
        var r = Jr(t);
        return r.some(function(a) {
          return Jt(e, a);
        });
      }
      i(of, "matches");
      var Xa = of;
      function lf(e, t) {
        for (; e; ) {
          if (Xa(e, t))
            return e;
          if (typeof e.parent > "u")
            throw new TypeError("Cannot resolve parent for non-DOM nodes");
          e = e.parent;
        }
        return null;
      }
      i(lf, "closest");
      var Xe = lf;
      function Qr() {
      }
      i(Qr, "noop");
      function Ja(e) {
        if (typeof e != "function")
          throw new TypeError("Queue methods require functions as arguments");
      }
      i(Ja, "funcGuard");
      function uf() {
        var e = [], t = 0, r = 0, a = Qr, n = !1, o, l = /* @__PURE__ */ i(function(m) {
          o = m, setTimeout(function() {
            o != null && Mt("Uncaught error (of queue)", o);
          }, 1);
        }, "defaultFail"), u = l;
        function s(p) {
          return function(m) {
            e[p] = m, r -= 1, !r && a !== Qr && (n = !0, a(e));
          };
        }
        i(s, "createResolve");
        function c(p) {
          return a = Qr, u(p), e;
        }
        i(c, "abort");
        function d() {
          for (var p = e.length; t < p; t++) {
            var m = e[t];
            try {
              m.call(null, s(t), c);
            } catch (h) {
              c(h);
            }
          }
        }
        i(d, "pop");
        var f = {
          defer: /* @__PURE__ */ i(function(m) {
            if (P(m) === "object" && m.then && m.catch) {
              var h = m;
              m = /* @__PURE__ */ i(function(w, v) {
                h.then(w).catch(v);
              }, "fn");
            }
            if (Ja(m), o === void 0) {
              if (n)
                throw new Error("Queue already completed");
              return e.push(m), ++r, d(), f;
            }
          }, "defer"),
          then: /* @__PURE__ */ i(function(m) {
            if (Ja(m), a !== Qr)
              throw new Error("queue `then` already set");
            return o || (a = m, r || (n = !0, a(e))), f;
          }, "then"),
          catch: /* @__PURE__ */ i(function(m) {
            if (Ja(m), u !== l)
              throw new Error("queue `catch` already set");
            return o ? (m(o), o = null) : u = m, f;
          }, "_catch"),
          abort: c
        };
        return f;
      }
      i(uf, "queue");
      var ct = uf, Qt, Zt, Qa = D.crypto || D.msCrypto;
      !Zt && Qa && Qa.getRandomValues && (Za = new Uint8Array(16), Zt = /* @__PURE__ */ i(function() {
        return Qa.getRandomValues(Za), Za;
      }, "whatwgRNG"));
      var Za;
      Zt || (en = new Array(16), Zt = /* @__PURE__ */ i(function() {
        for (var t = 0, r; t < 16; t++)
          (t & 3) === 0 && (r = Math.random() * 4294967296), en[t] = r >>> ((t & 3) << 3) & 255;
        return en;
      }, "_rng"));
      for (var en, Fo = typeof D.Buffer == "function" ? D.Buffer : Array, tn = [], Co = {}, er = 0; er < 256; er++)
        tn[er] = (er + 256).toString(16).substr(1), Co[tn[er]] = er;
      function sf(e, t, r) {
        var a = t && r || 0, n = 0;
        for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(o) {
          n < 16 && (t[a + n++] = Co[o]);
        }); n < 16; )
          t[a + n++] = 0;
        return t;
      }
      i(sf, "parse");
      function rn(e, t) {
        var r = t || 0, a = tn;
        return a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]];
      }
      i(rn, "unparse");
      var Et = Zt(), cf = [Et[0] | 1, Et[1], Et[2], Et[3], Et[4], Et[5]], To = (Et[6] << 8 | Et[7]) & 16383, an = 0, nn = 0;
      function ko(e, t, r) {
        var a = t && r || 0, n = t || [];
        e = e || {};
        var o = e.clockseq != null ? e.clockseq : To, l = e.msecs != null ? e.msecs : new Date().getTime(), u = e.nsecs != null ? e.nsecs : nn + 1, s = l - an + (u - nn) / 1e4;
        if (s < 0 && e.clockseq == null && (o = o + 1 & 16383), (s < 0 || l > an) && e.nsecs == null && (u = 0), u >= 1e4)
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        an = l, nn = u, To = o, l += 122192928e5;
        var c = ((l & 268435455) * 1e4 + u) % 4294967296;
        n[a++] = c >>> 24 & 255, n[a++] = c >>> 16 & 255, n[a++] = c >>> 8 & 255, n[a++] = c & 255;
        var d = l / 4294967296 * 1e4 & 268435455;
        n[a++] = d >>> 8 & 255, n[a++] = d & 255, n[a++] = d >>> 24 & 15 | 16, n[a++] = d >>> 16 & 255, n[a++] = o >>> 8 | 128, n[a++] = o & 255;
        for (var f = e.node || cf, p = 0; p < 6; p++)
          n[a + p] = f[p];
        return t || rn(n);
      }
      i(ko, "v1");
      function Nt(e, t, r) {
        var a = t && r || 0;
        typeof e == "string" && (t = e == "binary" ? new Fo(16) : null, e = null), e = e || {};
        var n = e.random || (e.rng || Zt)();
        if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t)
          for (var o = 0; o < 16; o++)
            t[a + o] = n[o];
        return t || rn(n);
      }
      i(Nt, "v4"), Qt = Nt, Qt.v1 = ko, Qt.v4 = Nt, Qt.parse = sf, Qt.unparse = rn, Qt.BufferClass = Fo, g._uuid = ko();
      var df = Nt, ff = Object.freeze(["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
      function pf(e) {
        var t = e.topic, r = e.channelId, a = e.message, n = e.messageId, o = e.keepalive, l = {
          channelId: r,
          topic: t,
          messageId: n,
          keepalive: !!o,
          source: Ro()
        };
        return a instanceof Error ? l.error = {
          name: a.name,
          message: a.message,
          stack: a.stack
        } : l.payload = a, JSON.stringify(l);
      }
      i(pf, "stringifyMessage");
      function mf(e) {
        var t;
        try {
          t = JSON.parse(e);
        } catch {
          return;
        }
        if (!!hf(t)) {
          var r = t, a = r.topic, n = r.channelId, o = r.messageId, l = r.keepalive, u = P(t.error) === "object" ? vf(t.error) : t.payload;
          return {
            topic: a,
            message: u,
            messageId: o,
            channelId: n,
            keepalive: !!l
          };
        }
      }
      i(mf, "parseMessage");
      function hf(e) {
        return e !== null && P(e) === "object" && typeof e.channelId == "string" && e.source === Ro();
      }
      i(hf, "isRespondableMessage");
      function vf(e) {
        var t = e.message || "Unknown error occurred", r = ff.includes(e.name) ? e.name : "Error", a = D[r] || Error;
        return e.stack && (t += `
` + e.stack.replace(e.message, "")), new a(t);
      }
      i(vf, "buildErrorObject");
      function Ro() {
        var e = "axeAPI", t = "";
        return typeof g < "u" && g._audit && g._audit.application && (e = g._audit.application), typeof g < "u" && (t = g.version), e + "." + t;
      }
      i(Ro, "getSource2");
      function on(e) {
        Oo(e), pe(D.parent === e, "Source of the response must be the parent window.");
      }
      i(on, "assertIsParentWindow");
      function So(e) {
        Oo(e), pe(e.parent === D, "Respondable target must be a frame in the current window");
      }
      i(So, "assertIsFrameWindow");
      function Oo(e) {
        pe(D !== e, "Messages can not be sent to the same window.");
      }
      i(Oo, "assetNotGlobalWindow");
      var Zr = {};
      function gf(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        pe(!Zr[e], "A replyHandler already exists for this message channel."), Zr[e] = {
          replyHandler: t,
          sendToParent: r
        };
      }
      i(gf, "storeReplyHandler");
      function bf(e) {
        return Zr[e];
      }
      i(bf, "getReplyHandler");
      function yf(e) {
        delete Zr[e];
      }
      i(yf, "deleteReplyHandler");
      var ea = [];
      function ln() {
        var e = "".concat(Nt(), ":").concat(Nt());
        return ea.includes(e) ? ln() : (ea.push(e), e);
      }
      i(ln, "createMessageId");
      function Df(e) {
        return ea.includes(e) ? !1 : (ea.push(e), !0);
      }
      i(Df, "isNewMessage");
      function un(e, t, r, a) {
        if (typeof a == "function" && gf(t.channelId, a, r), r ? on(e) : So(e), t.message instanceof Error && !r)
          return g.log(t.message), !1;
        var n = pf(ue({
          messageId: ln()
        }, t)), o = g._audit.allowedOrigins;
        return !o || !o.length ? !1 : (o.forEach(function(l) {
          try {
            e.postMessage(n, l);
          } catch (u) {
            throw u instanceof e.DOMException ? new Error('allowedOrigins value "'.concat(l, '" is not a valid origin')) : u;
          }
        }), !0);
      }
      i(un, "postMessage");
      function wf(e, t, r) {
        if (!e.parent !== D)
          return g.log(t);
        try {
          un(e, {
            topic: null,
            channelId: r,
            message: t,
            messageId: ln(),
            keepalive: !0
          }, !0);
        } catch (a) {
          return g.log(a);
        }
      }
      i(wf, "processError");
      function Io(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        return /* @__PURE__ */ i(function(n, o, l) {
          var u = {
            channelId: t,
            message: n,
            keepalive: o
          };
          un(e, u, r, l);
        }, "respond");
      }
      i(Io, "createResponder");
      function _f(e) {
        var t = g._audit.allowedOrigins;
        return t && t.includes("*") || t.includes(e);
      }
      i(_f, "originIsAllowed");
      function xf(e, t) {
        var r = e.origin, a = e.data, n = e.source;
        try {
          var o = mf(a) || {}, l = o.channelId, u = o.message, s = o.messageId;
          if (!_f(r) || !Df(s))
            return;
          if (u instanceof Error && n.parent !== D)
            return g.log(u), !1;
          try {
            if (o.topic) {
              var c = Io(n, l);
              on(n), t(o, c);
            } else
              Ef(n, o);
          } catch (d) {
            wf(n, d, l);
          }
        } catch (d) {
          return g.log(d), !1;
        }
      }
      i(xf, "messageHandler");
      function Ef(e, t) {
        var r = t.channelId, a = t.message, n = t.keepalive, o = bf(r) || {}, l = o.replyHandler, u = o.sendToParent;
        if (!!l) {
          u ? on(e) : So(e);
          var s = Io(e, r, u);
          !n && r && yf(r);
          try {
            l(a, n, s);
          } catch (c) {
            g.log(c), s(c, n);
          }
        }
      }
      i(Ef, "callReplyHandler");
      var Af = {
        open: /* @__PURE__ */ i(function(t) {
          if (typeof D.addEventListener == "function") {
            var r = /* @__PURE__ */ i(function(n) {
              xf(n, t);
            }, "handler");
            return D.addEventListener("message", r, !1), function() {
              D.removeEventListener("message", r, !1);
            };
          }
        }, "open"),
        post: /* @__PURE__ */ i(function(t, r, a) {
          return typeof D.addEventListener != "function" ? !1 : un(t, r, !1, a);
        }, "post")
      };
      function Po(e) {
        e.updateMessenger(Af);
      }
      i(Po, "setDefaultFrameMessenger");
      var ta, Mo, sn = {};
      function ut(e, t, r, a, n) {
        var o = {
          topic: t,
          message: r,
          channelId: "".concat(Nt(), ":").concat(Nt()),
          keepalive: a
        };
        return Mo(e, o, n);
      }
      i(ut, "_respondable");
      function Ff(e, t) {
        var r = e.topic, a = e.message, n = e.keepalive, o = sn[r];
        if (!!o)
          try {
            o(a, n, t);
          } catch (l) {
            g.log(l), t(l, n);
          }
      }
      i(Ff, "messageListener"), ut.updateMessenger = /* @__PURE__ */ i(function(t) {
        var r = t.open, a = t.post;
        pe(typeof r == "function", "open callback must be a function"), pe(typeof a == "function", "post callback must be a function"), ta && ta();
        var n = r(Ff);
        n ? (pe(typeof n == "function", "open callback must return a cleanup function"), ta = n) : ta = null, Mo = a;
      }, "updateMessenger"), ut.subscribe = /* @__PURE__ */ i(function(t, r) {
        pe(typeof r == "function", "Subscriber callback must be a function"), pe(!sn[t], "Topic ".concat(t, " is already registered to.")), sn[t] = r;
      }, "subscribe"), ut.isInFrame = /* @__PURE__ */ i(function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D;
        return !!t.frameElement;
      }, "isInFrame"), Po(ut);
      function No(e, t, r, a) {
        var n, o, l = e.contentWindow, u = (n = (o = t.options) === null || o === void 0 ? void 0 : o.pingWaitTime) !== null && n !== void 0 ? n : 500;
        if (!l) {
          Mt("Frame does not have a content window", e), r(null);
          return;
        }
        if (u === 0) {
          qo(e, t, r, a);
          return;
        }
        var s = setTimeout(function() {
          s = setTimeout(function() {
            t.debug ? a(Bo("No response from frame", e)) : r(null);
          }, 0);
        }, u);
        ut(l, "axe.ping", null, void 0, function() {
          clearTimeout(s), qo(e, t, r, a);
        });
      }
      i(No, "_sendCommandToFrame");
      function qo(e, t, r, a) {
        var n, o, l = (n = (o = t.options) === null || o === void 0 ? void 0 : o.frameWaitTime) !== null && n !== void 0 ? n : 6e4, u = e.contentWindow, s = setTimeout(/* @__PURE__ */ i(function() {
          a(Bo("Axe in frame timed out", e));
        }, "collectResultFramesTimeout"), l);
        ut(u, "axe.start", t, void 0, function(c) {
          clearTimeout(s), c instanceof Error ? a(c) : r(c);
        });
      }
      i(qo, "callAxeStart");
      function Bo(e, t) {
        var r;
        return g._tree && (r = Wa(t)), new Error(e + ": " + (r || t));
      }
      i(Bo, "err");
      function Cf(e) {
        var t = [];
        return t.concat(e.any || []).concat(e.all || []).concat(e.none || []);
      }
      i(Cf, "getAllChecks");
      var ra = Cf;
      function Tf(e, t, r) {
        if (Array.isArray(e))
          return e.find(function(a) {
            return P(a) === "object" && a[t] === r;
          });
      }
      i(Tf, "findBy");
      var _r = Tf;
      function kf(e, t, r) {
        e.forEach(function(a) {
          a.node = lt.fromFrame(a.node, t, r);
          var n = ra(a);
          n.forEach(function(o) {
            o.relatedNodes = o.relatedNodes.map(function(l) {
              return lt.fromFrame(l, t, r);
            });
          });
        });
      }
      i(kf, "pushFrame");
      function Rf(e, t) {
        for (var r = t[0].node, a = 0; a < e.length; a++) {
          var n = e[a].node, o = Lo(n.nodeIndexes, r.nodeIndexes);
          if (o > 0 || o === 0 && r.selector.length < n.selector.length) {
            e.splice.apply(e, [a, 0].concat(ae(t)));
            return;
          }
        }
        e.push.apply(e, ae(t));
      }
      i(Rf, "spliceNodes");
      function Sf(e) {
        return !e || !e.results ? null : Array.isArray(e.results) ? e.results.length ? e.results : null : [e.results];
      }
      i(Sf, "normalizeResult");
      function Of(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = Sf(a);
          if (!(!n || !n.length)) {
            var o = If(a, t);
            n.forEach(function(l) {
              l.nodes && o && kf(l.nodes, t, o);
              var u = _r(r, "id", l.id);
              u ? l.nodes.length && Rf(u.nodes, l.nodes) : r.push(l);
            });
          }
        }), r.forEach(function(a) {
          a.nodes && a.nodes.sort(function(n, o) {
            return Lo(n.node.nodeIndexes, o.node.nodeIndexes);
          });
        }), r;
      }
      i(Of, "mergeResults");
      function Lo() {
        for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = Math.max(e?.length, t?.length), a = 0; a < r; a++) {
          var n = e?.[a], o = t?.[a];
          if (typeof n != "number" || isNaN(n))
            return a === 0 ? 1 : -1;
          if (typeof o != "number" || isNaN(o))
            return a === 0 ? -1 : 1;
          if (n !== o)
            return n - o;
        }
        return 0;
      }
      i(Lo, "nodeIndexSort");
      var aa = Of;
      function If(e, t) {
        return e.frameElement ? new lt(e.frameElement, t) : e.frameSpec ? e.frameSpec : null;
      }
      i(If, "getFrameSpec");
      function Vo(e, t, r, a, n, o) {
        var l = ct(), u = e.frames;
        u.forEach(function(s) {
          var c = s.node, d = je(s, Ac);
          l.defer(function(f, p) {
            var m = {
              options: t,
              command: r,
              parameter: a,
              context: d
            };
            function h(y) {
              return f(y ? {
                results: y,
                frameElement: c
              } : null);
            }
            i(h, "callback"), No(c, m, h, p);
          });
        }), l.then(function(s) {
          n(aa(s, t));
        }).catch(o);
      }
      i(Vo, "_collectResultsFromFrames");
      function qt(e, t) {
        if (!e.shadowId && !t.shadowId && e.actualNode && typeof e.actualNode.contains == "function")
          return e.actualNode.contains(t.actualNode);
        do {
          if (e === t)
            return !0;
          if (t.nodeIndex < e.nodeIndex)
            return !1;
          t = t.parent;
        } while (t);
        return !1;
      }
      i(qt, "_contains");
      function jo() {
        for (var e = {}, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
          r[a] = arguments[a];
        return r.forEach(function(n) {
          if (!(!n || P(n) !== "object" || Array.isArray(n)))
            for (var o = 0, l = Object.keys(n); o < l.length; o++) {
              var u = l[o];
              !e.hasOwnProperty(u) || P(n[u]) !== "object" || Array.isArray(e[u]) ? e[u] = n[u] : e[u] = jo(e[u], n[u]);
            }
        }), e;
      }
      i(jo, "deepMerge");
      var cn = jo;
      function Pf(e, t) {
        Object.assign(e, t), Object.keys(t).filter(function(r) {
          return typeof t[r] == "function";
        }).forEach(function(r) {
          e[r] = null;
          try {
            e[r] = t[r](e);
          } catch {
          }
        });
      }
      i(Pf, "extendMetaData");
      var dn = Pf, Mf = ["article", "aside", "blockquote", "body", "div", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "main", "nav", "p", "section", "span"];
      function Nf(e) {
        if (e.shadowRoot) {
          var t = e.nodeName.toLowerCase();
          if (Mf.includes(t) || /^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))
            return !0;
        }
        return !1;
      }
      i(Nf, "isShadowRoot");
      var na = Nf, fn = {};
      we(fn, {
        createGrid: /* @__PURE__ */ i(function() {
          return Bt;
        }, "createGrid"),
        findElmsInContext: /* @__PURE__ */ i(function() {
          return Ho;
        }, "findElmsInContext"),
        findNearbyElms: /* @__PURE__ */ i(function() {
          return yn;
        }, "findNearbyElms"),
        findUp: /* @__PURE__ */ i(function() {
          return rr;
        }, "findUp"),
        findUpVirtual: /* @__PURE__ */ i(function() {
          return tr;
        }, "findUpVirtual"),
        focusDisabled: /* @__PURE__ */ i(function() {
          return _n;
        }, "focusDisabled"),
        getComposedParent: /* @__PURE__ */ i(function() {
          return qe;
        }, "getComposedParent"),
        getElementByReference: /* @__PURE__ */ i(function() {
          return En;
        }, "getElementByReference"),
        getElementCoordinates: /* @__PURE__ */ i(function() {
          return hn;
        }, "getElementCoordinates"),
        getElementStack: /* @__PURE__ */ i(function() {
          return _l;
        }, "getElementStack"),
        getModalDialog: /* @__PURE__ */ i(function() {
          return pl;
        }, "getModalDialog"),
        getOverflowHiddenAncestors: /* @__PURE__ */ i(function() {
          return pn;
        }, "getOverflowHiddenAncestors"),
        getRootNode: /* @__PURE__ */ i(function() {
          return He;
        }, "getRootNode"),
        getScrollOffset: /* @__PURE__ */ i(function() {
          return nl;
        }, "getScrollOffset"),
        getTabbableElements: /* @__PURE__ */ i(function() {
          return xl;
        }, "getTabbableElements"),
        getTextElementStack: /* @__PURE__ */ i(function() {
          return zn;
        }, "getTextElementStack"),
        getViewportSize: /* @__PURE__ */ i(function() {
          return ia;
        }, "getViewportSize"),
        getVisibleChildTextRects: /* @__PURE__ */ i(function() {
          return Hn;
        }, "getVisibleChildTextRects"),
        hasContent: /* @__PURE__ */ i(function() {
          return ma;
        }, "hasContent"),
        hasContentVirtual: /* @__PURE__ */ i(function() {
          return Sr;
        }, "hasContentVirtual"),
        hasLangText: /* @__PURE__ */ i(function() {
          return $n;
        }, "hasLangText"),
        idrefs: /* @__PURE__ */ i(function() {
          return st;
        }, "idrefs"),
        insertedIntoFocusOrder: /* @__PURE__ */ i(function() {
          return du;
        }, "insertedIntoFocusOrder"),
        isCurrentPageLink: /* @__PURE__ */ i(function() {
          return xn;
        }, "isCurrentPageLink"),
        isFocusable: /* @__PURE__ */ i(function() {
          return Ce;
        }, "isFocusable"),
        isHTML5: /* @__PURE__ */ i(function() {
          return mu;
        }, "isHTML5"),
        isHiddenForEveryone: /* @__PURE__ */ i(function() {
          return At;
        }, "isHiddenForEveryone"),
        isHiddenWithCSS: /* @__PURE__ */ i(function() {
          return ph;
        }, "isHiddenWithCSS"),
        isInTabOrder: /* @__PURE__ */ i(function() {
          return pt;
        }, "isInTabOrder"),
        isInTextBlock: /* @__PURE__ */ i(function() {
          return Wn;
        }, "isInTextBlock"),
        isInert: /* @__PURE__ */ i(function() {
          return la;
        }, "isInert"),
        isModalOpen: /* @__PURE__ */ i(function() {
          return Or;
        }, "isModalOpen"),
        isMultiline: /* @__PURE__ */ i(function() {
          return gu;
        }, "isMultiline"),
        isNativelyFocusable: /* @__PURE__ */ i(function() {
          return Sn;
        }, "isNativelyFocusable"),
        isNode: /* @__PURE__ */ i(function() {
          return wh;
        }, "isNode"),
        isOffscreen: /* @__PURE__ */ i(function() {
          return oa;
        }, "isOffscreen"),
        isOpaque: /* @__PURE__ */ i(function() {
          return kh;
        }, "isOpaque"),
        isSkipLink: /* @__PURE__ */ i(function() {
          return Gn;
        }, "isSkipLink"),
        isVisible: /* @__PURE__ */ i(function() {
          return Mh;
        }, "isVisible"),
        isVisibleOnScreen: /* @__PURE__ */ i(function() {
          return Je;
        }, "isVisibleOnScreen"),
        isVisibleToScreenReaders: /* @__PURE__ */ i(function() {
          return xe;
        }, "isVisibleToScreenReaders"),
        isVisualContent: /* @__PURE__ */ i(function() {
          return Un;
        }, "isVisualContent"),
        reduceToElementsBelowFloating: /* @__PURE__ */ i(function() {
          return Du;
        }, "reduceToElementsBelowFloating"),
        shadowElementsFromPoint: /* @__PURE__ */ i(function() {
          return Bh;
        }, "shadowElementsFromPoint"),
        urlPropsFromAttribute: /* @__PURE__ */ i(function() {
          return Uh;
        }, "urlPropsFromAttribute"),
        visuallyContains: /* @__PURE__ */ i(function() {
          return wu;
        }, "visuallyContains"),
        visuallyOverlaps: /* @__PURE__ */ i(function() {
          return Yn;
        }, "visuallyOverlaps"),
        visuallySort: /* @__PURE__ */ i(function() {
          return An;
        }, "visuallySort")
      });
      function qf(e) {
        var t = e.getRootNode && e.getRootNode() || R;
        return t === e && (t = R), t;
      }
      i(qf, "getRootNode");
      var xr = qf, He = xr;
      function Bf(e) {
        var t = e.context, r = e.value, a = e.attr, n = e.elm, o = n === void 0 ? "" : n, l, u = Fe(r);
        return t.nodeType === 9 || t.nodeType === 11 ? l = t : l = He(t), Array.from(l.querySelectorAll(o + "[" + a + "=" + u + "]"));
      }
      i(Bf, "findElmsInContext");
      var Ho = Bf;
      function Lf(e, t) {
        var r;
        if (r = e.actualNode, !e.shadowId && typeof e.actualNode.closest == "function") {
          var a = e.actualNode.closest(t);
          return a || null;
        }
        do
          r = r.assignedSlot ? r.assignedSlot : r.parentNode, r && r.nodeType === 11 && (r = r.host);
        while (r && !Kt(r, t) && r !== R.documentElement);
        return !r || !Kt(r, t) ? null : r;
      }
      i(Lf, "findUpVirtual");
      var tr = Lf;
      function Vf(e, t) {
        return tr(B(e), t);
      }
      i(Vf, "findUp");
      var rr = Vf, jf = it(io());
      g._memoizedFns = [];
      function Hf(e) {
        var t = (0, jf.default)(e);
        return g._memoizedFns.push(t), t;
      }
      i(Hf, "memoizeImplementation");
      var Ge = Hf;
      function zo(e, t) {
        return (e.left | 0) < (t.right | 0) && (e.right | 0) > (t.left | 0) && (e.top | 0) < (t.bottom | 0) && (e.bottom | 0) > (t.top | 0);
      }
      i(zo, "_rectsOverlap");
      var Uo = Ge(/* @__PURE__ */ i(function(t) {
        var r = [];
        if (!t)
          return r;
        var a = t.getComputedStylePropertyValue("overflow");
        return a === "hidden" && r.push(t), r.concat(Uo(t.parent));
      }, "getOverflowHiddenAncestorsMemoized")), pn = Uo, zf = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, Uf = /(\w+)\((\d+)/;
      function $o(e) {
        return ["style", "script", "noscript", "template"].includes(e.props.nodeName);
      }
      i($o, "nativelyHidden");
      function Wo(e) {
        return e.props.nodeName === "area" ? !1 : e.getComputedStylePropertyValue("display") === "none";
      }
      i(Wo, "displayHidden");
      function Go(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !r && ["hidden", "collapse"].includes(e.getComputedStylePropertyValue("visibility"));
      }
      i(Go, "visibilityHidden");
      function Yo(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !!r && e.getComputedStylePropertyValue("content-visibility") === "hidden";
      }
      i(Yo, "contentVisibiltyHidden");
      function Ko(e) {
        return e.attr("aria-hidden") === "true";
      }
      i(Ko, "ariaHidden");
      function Xo(e) {
        return e.getComputedStylePropertyValue("opacity") === "0";
      }
      i(Xo, "opacityHidden");
      function Jo(e) {
        var t = wt(e.actualNode), r = parseInt(e.getComputedStylePropertyValue("height")), a = parseInt(e.getComputedStylePropertyValue("width"));
        return !!t && (r === 0 || a === 0);
      }
      i(Jo, "scrollHidden");
      function Qo(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        var a = e.boundingClientRect, n = pn(e);
        return n.length ? n.some(function(o) {
          var l = o.boundingClientRect;
          return l.width < 2 || l.height < 2 ? !0 : !zo(a, l);
        }) : !1;
      }
      i(Qo, "overflowHidden");
      function Zo(e) {
        var t = e.getComputedStylePropertyValue("clip").match(zf), r = e.getComputedStylePropertyValue("clip-path").match(Uf);
        if (t && t.length === 5) {
          var a = e.getComputedStylePropertyValue("position");
          if (["fixed", "absolute"].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1], o = parseInt(r[2], 10);
          switch (n) {
            case "inset":
              return o >= 50;
            case "circle":
              return o === 0;
          }
        }
        return !1;
      }
      i(Zo, "clipHidden");
      function mn(e, t) {
        var r = Xe(e, "map");
        if (!r)
          return !0;
        var a = r.attr("name");
        if (!a)
          return !0;
        var n = xr(e.actualNode);
        if (!n || n.nodeType !== 9)
          return !0;
        var o = et(g._tree, 'img[usemap="#'.concat(Fe(a), '"]'));
        return !o || !o.length ? !0 : o.some(function(l) {
          return !t(l);
        });
      }
      i(mn, "areaHidden");
      function el(e) {
        var t;
        if (((t = e.parent) === null || t === void 0 ? void 0 : t.props.nodeName) !== "details")
          return !1;
        if (e.props.nodeName === "summary") {
          var r = e.parent.children.find(function(a) {
            return a.props.nodeName === "summary";
          });
          if (r === e)
            return !1;
        }
        return !e.parent.hasAttr("open");
      }
      i(el, "detailsHidden");
      var $f = [Wo, Go, Yo, el];
      function At(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipAncestors, a = t.isAncestor, n = a === void 0 ? !1 : a;
        return e = e instanceof Z ? e : B(e), r ? tl(e, n) : rl(e, n);
      }
      i(At, "_isHiddenForEveryone");
      var tl = Ge(/* @__PURE__ */ i(function(t, r) {
        return $o(t) ? !0 : t.actualNode ? !!($f.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) || !t.actualNode.isConnected) : !1;
      }, "isHiddenSelfMemoized")), rl = Ge(/* @__PURE__ */ i(function(t, r) {
        return tl(t, r) ? !0 : t.parent ? rl(t.parent, !0) : !1;
      }, "isHiddenAncestorsMemoized"));
      function al(e) {
        if (e.assignedSlot)
          return al(e.assignedSlot);
        if (e.parentNode) {
          var t = e.parentNode;
          if (t.nodeType === 1)
            return t;
          if (t.host)
            return t.host;
        }
        return null;
      }
      i(al, "getComposedParent");
      var qe = al;
      function Wf(e) {
        if (!e.nodeType && e.document && (e = e.document), e.nodeType === 9) {
          var t = e.documentElement, r = e.body;
          return {
            left: t && t.scrollLeft || r && r.scrollLeft || 0,
            top: t && t.scrollTop || r && r.scrollTop || 0
          };
        }
        return {
          left: e.scrollLeft,
          top: e.scrollTop
        };
      }
      i(Wf, "getScrollOffset");
      var nl = Wf;
      function Gf(e) {
        var t = nl(R), r = t.left, a = t.top, n = e.getBoundingClientRect();
        return {
          top: n.top + a,
          right: n.right + r,
          bottom: n.bottom + a,
          left: n.left + r,
          width: n.right - n.left,
          height: n.bottom - n.top
        };
      }
      i(Gf, "getElementCoordinates");
      var hn = Gf;
      function Yf(e) {
        var t = e.document, r = t.documentElement;
        if (e.innerWidth)
          return {
            width: e.innerWidth,
            height: e.innerHeight
          };
        if (r)
          return {
            width: r.clientWidth,
            height: r.clientHeight
          };
        var a = t.body;
        return {
          width: a.clientWidth,
          height: a.clientHeight
        };
      }
      i(Yf, "getViewportSize");
      var ia = Yf;
      function Kf(e, t) {
        for (e = qe(e); e && e.nodeName.toLowerCase() !== "html"; ) {
          if (e.scrollTop && (t += e.scrollTop, t >= 0))
            return !1;
          e = qe(e);
        }
        return !0;
      }
      i(Kf, "noParentScrolled");
      function Xf(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        if (e = e instanceof Z ? e.actualNode : e, !!e) {
          var a, n = R.documentElement, o = D.getComputedStyle(e), l = D.getComputedStyle(R.body || n).getPropertyValue("direction"), u = hn(e);
          if (u.bottom < 0 && (Kf(e, u.bottom) || o.position === "absolute"))
            return !0;
          if (u.left === 0 && u.right === 0)
            return !1;
          if (l === "ltr") {
            if (u.right <= 0)
              return !0;
          } else if (a = Math.max(n.scrollWidth, ia(D).width), u.left >= a)
            return !0;
          return !1;
        }
      }
      i(Xf, "isOffscreen");
      var oa = Xf, Jf = [Xo, Jo, Qo, Zo, oa];
      function Je(e) {
        return e = e instanceof Z ? e : B(e), vn(e);
      }
      i(Je, "_isVisibleOnScreen");
      var vn = Ge(/* @__PURE__ */ i(function(t, r) {
        return t.actualNode && t.props.nodeName === "area" ? !mn(t, vn) : At(t, {
          skipAncestors: !0,
          isAncestor: r
        }) || t.actualNode && Jf.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) ? !1 : t.parent ? vn(t.parent, !0) : !0;
      }, "isVisibleOnScreenMemoized"));
      function il(e, t) {
        var r = Math.min(e.top, t.top), a = Math.max(e.right, t.right), n = Math.max(e.bottom, t.bottom), o = Math.min(e.left, t.left);
        return new D.DOMRect(o, r, a - o, n - r);
      }
      i(il, "_getBoundingRect");
      function gn(e, t) {
        var r = e.x, a = e.y, n = t.top, o = t.right, l = t.bottom, u = t.left;
        return a >= n && r <= o && a <= l && r >= u;
      }
      i(gn, "_isPointInRect");
      var ol = 0, Qf = 0.1, ll = 0.2, ul = 0.3, sl = 0;
      function Bt() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R.body, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (le.get("gridCreated") && !r)
          return ee.gridSize;
        if (le.set("gridCreated", !0), !r) {
          var a, n = B(R.documentElement);
          if (n || (n = new Xn(R.documentElement)), sl = 0, n._stackingOrder = [Er(ol, null)], (a = t) !== null && a !== void 0 || (t = new bn()), dl(t, n), wt(n.actualNode)) {
            var o = new bn(n);
            n._subGrid = o;
          }
        }
        for (var l = R.createTreeWalker(e, D.NodeFilter.SHOW_ELEMENT, null, !1), u = r ? l.nextNode() : l.currentNode; u; ) {
          var s = B(u);
          s && s.parent ? r = s.parent : u.assignedSlot ? r = B(u.assignedSlot) : u.parentElement ? r = B(u.parentElement) : u.parentNode && B(u.parentNode) && (r = B(u.parentNode)), s || (s = new g.VirtualNode(u, r)), s._stackingOrder = ep(s, r, sl++);
          var c = rp(s, r), d = c ? c._subGrid : t;
          if (wt(s.actualNode)) {
            var f = new bn(s);
            s._subGrid = f;
          }
          var p = s.boundingClientRect;
          p.width !== 0 && p.height !== 0 && Je(u) && dl(d, s), na(u) && Bt(u.shadowRoot, d, s), u = l.nextNode();
        }
        return ee.gridSize;
      }
      i(Bt, "_createGrid");
      function Zf(e, t) {
        var r = e.getComputedStylePropertyValue("position"), a = e.getComputedStylePropertyValue("z-index");
        if (r === "fixed" || r === "sticky" || a !== "auto" && r !== "static" || e.getComputedStylePropertyValue("opacity") !== "1")
          return !0;
        var n = e.getComputedStylePropertyValue("-webkit-transform") || e.getComputedStylePropertyValue("-ms-transform") || e.getComputedStylePropertyValue("transform") || "none";
        if (n !== "none")
          return !0;
        var o = e.getComputedStylePropertyValue("mix-blend-mode");
        if (o && o !== "normal")
          return !0;
        var l = e.getComputedStylePropertyValue("filter");
        if (l && l !== "none")
          return !0;
        var u = e.getComputedStylePropertyValue("perspective");
        if (u && u !== "none")
          return !0;
        var s = e.getComputedStylePropertyValue("clip-path");
        if (s && s !== "none")
          return !0;
        var c = e.getComputedStylePropertyValue("-webkit-mask") || e.getComputedStylePropertyValue("mask") || "none";
        if (c !== "none")
          return !0;
        var d = e.getComputedStylePropertyValue("-webkit-mask-image") || e.getComputedStylePropertyValue("mask-image") || "none";
        if (d !== "none")
          return !0;
        var f = e.getComputedStylePropertyValue("-webkit-mask-border") || e.getComputedStylePropertyValue("mask-border") || "none";
        if (f !== "none" || e.getComputedStylePropertyValue("isolation") === "isolate")
          return !0;
        var p = e.getComputedStylePropertyValue("will-change");
        if (p === "transform" || p === "opacity" || e.getComputedStylePropertyValue("-webkit-overflow-scrolling") === "touch")
          return !0;
        var m = e.getComputedStylePropertyValue("contain");
        return !!(["layout", "paint", "strict", "content"].includes(m) || a !== "auto" && cl(t));
      }
      i(Zf, "isStackingContext");
      function cl(e) {
        if (!e)
          return !1;
        var t = e.getComputedStylePropertyValue("display");
        return ["flex", "inline-flex", "grid", "inline-grid"].includes(t);
      }
      i(cl, "isFlexOrGridContainer");
      function ep(e, t, r) {
        var a = t._stackingOrder.slice();
        if (!Zf(e, t))
          return e.getComputedStylePropertyValue("position") !== "static" ? a.push(Er(ul, e)) : e.getComputedStylePropertyValue("float") !== "none" && a.push(Er(ll, e)), a;
        var n = a.findIndex(function(u) {
          var s = u.value;
          return [ol, ll, ul].includes(s);
        });
        n !== -1 && a.splice(n, a.length - n);
        var o = tp(e, t);
        if (!["auto", "0"].includes(o))
          return a.push(Er(parseInt(o), e)), a;
        for (var l = r.toString(); l.length < 10; )
          l = "0" + l;
        return a.push(Er(parseFloat("".concat(Qf).concat(l)), e)), a;
      }
      i(ep, "createStackingOrder");
      function Er(e, t) {
        return {
          value: e,
          vNode: t
        };
      }
      i(Er, "createContext");
      function tp(e, t) {
        var r = e.getComputedStylePropertyValue("position");
        return r === "static" && !cl(t) ? "auto" : e.getComputedStylePropertyValue("z-index");
      }
      i(tp, "getRealZIndex");
      function rp(e, t) {
        for (var r = null, a = [e]; t; ) {
          if (wt(t.actualNode)) {
            r = t;
            break;
          }
          if (t._scrollRegionParent) {
            r = t._scrollRegionParent;
            break;
          }
          a.push(t), t = B(t.actualNode.parentElement || t.actualNode.parentNode);
        }
        return a.forEach(function(n) {
          return n._scrollRegionParent = r;
        }), r;
      }
      i(rp, "findScrollRegionParent");
      function dl(e, t) {
        t.clientRects.forEach(function(r) {
          var a;
          (a = t._grid) !== null && a !== void 0 || (t._grid = e);
          var n = e.getGridPositionOfRect(r);
          e.loopGridPosition(n, function(o) {
            o.includes(t) || o.push(t);
          });
        });
      }
      i(dl, "addNodeToGrid");
      var bn = function() {
        function e() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          Wt(this, e), this.container = t, this.cells = [];
        }
        return i(e, "Grid"), Gt(e, [{
          key: "toGridIndex",
          value: /* @__PURE__ */ i(function(r) {
            return Math.floor(r / ee.gridSize);
          }, "toGridIndex")
        }, {
          key: "getCellFromPoint",
          value: /* @__PURE__ */ i(function(r) {
            var a, n, o = r.x, l = r.y;
            pe(this.boundaries, "Grid does not have cells added");
            var u = this.toGridIndex(l), s = this.toGridIndex(o);
            pe(gn({
              y: u,
              x: s
            }, this.boundaries), "Element midpoint exceeds the grid bounds");
            var c = (a = this.cells[u - this.cells._negativeIndex]) !== null && a !== void 0 ? a : [];
            return (n = c[s - c._negativeIndex]) !== null && n !== void 0 ? n : [];
          }, "getCellFromPoint")
        }, {
          key: "loopGridPosition",
          value: /* @__PURE__ */ i(function(r, a) {
            var n = r, o = n.left, l = n.right, u = n.top, s = n.bottom;
            this.boundaries && (r = il(this.boundaries, r)), this.boundaries = r, fl(this.cells, u, s, function(c, d) {
              fl(c, o, l, function(f, p) {
                a(f, {
                  row: d,
                  col: p
                });
              });
            });
          }, "loopGridPosition")
        }, {
          key: "getGridPositionOfRect",
          value: /* @__PURE__ */ i(function(r) {
            var a = r.top, n = r.right, o = r.bottom, l = r.left, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return a = this.toGridIndex(a - u), n = this.toGridIndex(n + u - 1), o = this.toGridIndex(o + u - 1), l = this.toGridIndex(l - u), new D.DOMRect(l, a, n - l, o - a);
          }, "getGridPositionOfRect")
        }]), e;
      }();
      function fl(e, t, r, a) {
        var n;
        if ((n = e._negativeIndex) !== null && n !== void 0 || (e._negativeIndex = 0), t < e._negativeIndex) {
          for (var o = 0; o < e._negativeIndex - t; o++)
            e.splice(0, 0, []);
          e._negativeIndex = t;
        }
        for (var l = t - e._negativeIndex, u = r - e._negativeIndex, s = l; s <= u; s++) {
          var c, d;
          (d = e[c = s]) !== null && d !== void 0 || (e[c] = []), a(e[s], s + e._negativeIndex);
        }
      }
      i(fl, "loopNegativeIndexMatrix");
      function yn(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (Bt(), !((t = e._grid) !== null && t !== void 0 && (r = t.cells) !== null && r !== void 0 && r.length))
          return [];
        var n = e.boundingClientRect, o = e._grid, l = Dn(e), u = o.getGridPositionOfRect(n, a), s = [];
        return o.loopGridPosition(u, function(c) {
          var d = Ke(c), f;
          try {
            for (d.s(); !(f = d.n()).done; ) {
              var p = f.value;
              p && p !== e && !s.includes(p) && l === Dn(p) && s.push(p);
            }
          } catch (m) {
            d.e(m);
          } finally {
            d.f();
          }
        }), s;
      }
      i(yn, "_findNearbyElms");
      var Dn = Ge(function(e) {
        return e ? e.getComputedStylePropertyValue("position") === "fixed" ? !0 : Dn(e.parent) : !1;
      });
      function wn(e, t) {
        var r = Math.max(e.left, t.left), a = Math.min(e.right, t.right), n = Math.max(e.top, t.top), o = Math.min(e.bottom, t.bottom);
        return r >= a || n >= o ? null : new D.DOMRect(r, n, a - r, o - n);
      }
      i(wn, "_getIntersectionRect");
      var ap = Ge(/* @__PURE__ */ i(function() {
        var t;
        if (!g._tree)
          return null;
        var r = ht(g._tree[0], "dialog[open]", function(n) {
          var o = n.boundingClientRect, l = R.elementsFromPoint(o.left + 1, o.top + 1);
          return l.includes(n.actualNode) && Je(n);
        });
        if (!r.length)
          return null;
        var a = r.find(function(n) {
          var o = n.boundingClientRect, l = R.elementsFromPoint(o.left - 10, o.top - 10);
          return l.includes(n.actualNode);
        });
        return a || ((t = r.find(function(n) {
          var o, l = (o = np(n)) !== null && o !== void 0 ? o : {}, u = l.vNode, s = l.rect;
          if (!u)
            return !1;
          var c = R.elementsFromPoint(s.left + 1, s.top + 1);
          return !c.includes(u.actualNode);
        })) !== null && t !== void 0 ? t : null);
      }, "getModalDialogMemoized")), pl = ap;
      function np(e) {
        Bt();
        var t = g._tree[0]._grid, r = new D.DOMRect(0, 0, D.innerWidth, D.innerHeight);
        if (!!t)
          for (var a = 0; a < t.cells.length; a++) {
            var n = t.cells[a];
            if (!!n)
              for (var o = 0; o < n.length; o++) {
                var l = n[o];
                if (!!l)
                  for (var u = 0; u < l.length; u++) {
                    var s = l[u], c = s.boundingClientRect, d = wn(c, r);
                    if (s.props.nodeName !== "html" && s !== e && s.getComputedStylePropertyValue("pointer-events") !== "none" && d)
                      return {
                        vNode: s,
                        rect: d
                      };
                  }
              }
          }
      }
      i(np, "getNodeFromGrid");
      function la(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipAncestors, a = t.isAncestor;
        return r ? ml(e, a) : hl(e, a);
      }
      i(la, "_isInert");
      var ml = Ge(/* @__PURE__ */ i(function(t, r) {
        if (t.hasAttr("inert"))
          return !0;
        if (!r && t.actualNode) {
          var a = pl();
          if (a && !qt(a, t))
            return !0;
        }
        return !1;
      }, "isInertSelfMemoized")), hl = Ge(/* @__PURE__ */ i(function(t, r) {
        return ml(t, r) ? !0 : t.parent ? hl(t.parent, !0) : !1;
      }, "isInertAncestorsMemoized")), ip = ["button", "command", "fieldset", "keygen", "optgroup", "option", "select", "textarea", "input"];
      function op(e) {
        return ip.includes(e);
      }
      i(op, "isDisabledAttrAllowed");
      function lp(e) {
        var t = e instanceof Z ? e : B(e);
        if (op(t.props.nodeName) && t.hasAttr("disabled") || la(t))
          return !0;
        for (var r = t.parent, a = [], n = !1; r && r.shadowId === t.shadowId && !n && (a.push(r), r.props.nodeName !== "legend"); ) {
          if (r._inDisabledFieldset !== void 0) {
            n = r._inDisabledFieldset;
            break;
          }
          r.props.nodeName === "fieldset" && r.hasAttr("disabled") && (n = !0), r = r.parent;
        }
        return a.forEach(function(o) {
          return o._inDisabledFieldset = n;
        }), n ? !0 : t.props.nodeName !== "area" && t.actualNode ? At(t) : !1;
      }
      i(lp, "focusDisabled");
      var _n = lp, up = /^\/\#/, sp = /^#[!/]/;
      function xn(e) {
        var t, r = e.getAttribute("href");
        if (!r || r === "#")
          return !1;
        if (up.test(r))
          return !0;
        var a = e.hash, n = e.protocol, o = e.hostname, l = e.port, u = e.pathname;
        if (sp.test(a))
          return !1;
        if (r.charAt(0) === "#")
          return !0;
        if (typeof ((t = D.location) === null || t === void 0 ? void 0 : t.origin) != "string" || D.location.origin.indexOf("://") === -1)
          return null;
        var s = D.location.origin + D.location.pathname, c;
        return o ? c = "".concat(n, "//").concat(o).concat(l ? ":".concat(l) : "") : c = D.location.origin, u ? c += (u[0] !== "/" ? "/" : "") + u : c += D.location.pathname, c === s;
      }
      i(xn, "_isCurrentPageLink");
      function cp(e, t) {
        var r = e.getAttribute(t);
        if (!r || t === "href" && !xn(e))
          return null;
        r.indexOf("#") !== -1 && (r = decodeURIComponent(r.substr(r.indexOf("#") + 1)));
        var a = R.getElementById(r);
        return a || (a = R.getElementsByName(r), a.length ? a[0] : null);
      }
      i(cp, "getElementByReference");
      var En = cp;
      function An(e, t) {
        Bt();
        for (var r = Math.max(e._stackingOrder.length, t._stackingOrder.length), a = 0; a < r; a++) {
          if (typeof t._stackingOrder[a] > "u")
            return -1;
          if (typeof e._stackingOrder[a] > "u" || t._stackingOrder[a].value > e._stackingOrder[a].value)
            return 1;
          if (t._stackingOrder[a].value < e._stackingOrder[a].value)
            return -1;
        }
        var n = e.actualNode, o = t.actualNode;
        if (n.getRootNode && n.getRootNode() !== o.getRootNode()) {
          for (var l = []; n; )
            l.push({
              root: n.getRootNode(),
              node: n
            }), n = n.getRootNode().host;
          for (; o && !l.find(function(w) {
            return w.root === o.getRootNode();
          }); )
            o = o.getRootNode().host;
          if (n = l.find(function(w) {
            return w.root === o.getRootNode();
          }).node, n === o)
            return e.actualNode.getRootNode() !== n.getRootNode() ? -1 : 1;
        }
        var u = D.Node, s = u.DOCUMENT_POSITION_FOLLOWING, c = u.DOCUMENT_POSITION_CONTAINS, d = u.DOCUMENT_POSITION_CONTAINED_BY, f = n.compareDocumentPosition(o), p = f & s ? 1 : -1, m = f & c || f & d, h = vl(e), y = vl(t);
        return h === y || m ? p : y - h;
      }
      i(An, "_visuallySort");
      function vl(e) {
        return e.getComputedStylePropertyValue("display").indexOf("inline") !== -1 ? 2 : gl(e) ? 1 : 0;
      }
      i(vl, "getPositionOrder");
      function gl(e) {
        if (!e)
          return !1;
        if (e._isFloated !== void 0)
          return e._isFloated;
        var t = e.getComputedStylePropertyValue("float");
        if (t !== "none")
          return e._isFloated = !0, !0;
        var r = gl(e.parent);
        return e._isFloated = r, r;
      }
      i(gl, "isFloated");
      var bl = {};
      we(bl, {
        getBoundingRect: /* @__PURE__ */ i(function() {
          return il;
        }, "getBoundingRect"),
        getIntersectionRect: /* @__PURE__ */ i(function() {
          return wn;
        }, "getIntersectionRect"),
        getOffset: /* @__PURE__ */ i(function() {
          return yl;
        }, "getOffset"),
        getRectCenter: /* @__PURE__ */ i(function() {
          return Fn;
        }, "getRectCenter"),
        hasVisualOverlap: /* @__PURE__ */ i(function() {
          return Dl;
        }, "hasVisualOverlap"),
        isPointInRect: /* @__PURE__ */ i(function() {
          return gn;
        }, "isPointInRect"),
        rectsOverlap: /* @__PURE__ */ i(function() {
          return zo;
        }, "rectsOverlap"),
        splitRects: /* @__PURE__ */ i(function() {
          return wl;
        }, "splitRects")
      });
      function yl(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect, n = dp(r, a), o = fp(n, r, a);
        return pp(n, o);
      }
      i(yl, "_getOffset");
      function dp(e, t) {
        var r = [["x", "left", "right", "width"], ["y", "top", "bottom", "height"]], a = {};
        return r.forEach(function(n) {
          var o = ge(n, 4), l = o[0], u = o[1], s = o[2], c = o[3];
          if (t[u] < e[u] && t[s] > e[s]) {
            a[l] = e[u] + e[c] / 2;
            return;
          }
          var d = t[u] + t[c] / 2, f = Math.abs(d - e[u]), p = Math.abs(d - e[s]);
          f >= p ? a[l] = e[u] : a[l] = e[s];
        }), a;
      }
      i(dp, "getFarthestPoint");
      function fp(e, t, r) {
        var a = e.x, n = e.y;
        if (mp({
          x: a,
          y: n
        }, r)) {
          var o = hp({
            x: a,
            y: n
          }, t, r);
          if (o !== null)
            return o;
          r = t;
        }
        var l = r, u = l.top, s = l.right, c = l.bottom, d = l.left, f = a >= d && a <= s, p = n >= u && n <= c, m = Math.abs(d - a) < Math.abs(s - a) ? d : s, h = Math.abs(u - n) < Math.abs(c - n) ? u : c;
        return !f && p ? {
          x: m,
          y: n
        } : f && !p ? {
          x: a,
          y: h
        } : !f && !p ? {
          x: m,
          y: h
        } : Math.abs(a - m) < Math.abs(n - h) ? {
          x: m,
          y: n
        } : {
          x: a,
          y: h
        };
      }
      i(fp, "getClosestPoint");
      function pp(e, t) {
        var r = Math.abs(e.x - t.x), a = Math.abs(e.y - t.y);
        return !r || !a ? r || a : Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
      }
      i(pp, "pointDistance");
      function mp(e, t) {
        var r = e.x, a = e.y;
        return a >= t.top && r <= t.right && a <= t.bottom && r >= t.left;
      }
      i(mp, "pointInRect");
      function hp(e, t, r) {
        var a = e.x, n = e.y, o, l;
        if (a === t.left && t.right < r.right ? o = t.right : a === t.right && t.left > r.left && (o = t.left), n === t.top && t.bottom < r.bottom ? l = t.bottom : n === t.bottom && t.top > r.top && (l = t.top), !o && !l)
          return null;
        if (l) {
          if (!o)
            return {
              x: a,
              y: l
            };
        } else
          return {
            x: o,
            y: n
          };
        return Math.abs(a - o) < Math.abs(n - l) ? {
          x: o,
          y: n
        } : {
          x: a,
          y: l
        };
      }
      i(hp, "getCornerInAdjacentRect");
      function Fn(e) {
        var t = e.left, r = e.top, a = e.width, n = e.height;
        return new D.DOMPoint(t + a / 2, r + n / 2);
      }
      i(Fn, "_getRectCenter");
      function Dl(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.left >= a.right || r.right <= a.left || r.top >= a.bottom || r.bottom <= a.top ? !1 : An(e, t) > 0;
      }
      i(Dl, "_hasVisualOverlap");
      function wl(e, t) {
        var r = [e], a = Ke(t), n;
        try {
          var o = /* @__PURE__ */ i(function() {
            var u = n.value;
            r = r.reduce(function(s, c) {
              return s.concat(vp(c, u));
            }, []);
          }, "_loop3");
          for (a.s(); !(n = a.n()).done; )
            o();
        } catch (l) {
          a.e(l);
        } finally {
          a.f();
        }
        return r;
      }
      i(wl, "_splitRects");
      function vp(e, t) {
        var r = e.top, a = e.left, n = e.bottom, o = e.right, l = r < t.bottom && n > t.top, u = a < t.right && o > t.left, s = [];
        return ua(t.top, r, n) && u && s.push({
          top: r,
          left: a,
          bottom: t.top,
          right: o
        }), ua(t.right, a, o) && l && s.push({
          top: r,
          left: t.right,
          bottom: n,
          right: o
        }), ua(t.bottom, r, n) && u && s.push({
          top: t.bottom,
          right: o,
          bottom: n,
          left: a
        }), ua(t.left, a, o) && l && s.push({
          top: r,
          left: a,
          bottom: n,
          right: t.left
        }), s.length === 0 && s.push(e), s.map(gp);
      }
      i(vp, "splitRect");
      var ua = /* @__PURE__ */ i(function(t, r, a) {
        return t > r && t < a;
      }, "between");
      function gp(e) {
        return ue({}, e, {
          x: e.left,
          y: e.top,
          height: e.bottom - e.top,
          width: e.right - e.left
        });
      }
      i(gp, "computeRect");
      function Cn(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = Fn(t), n = e.getCellFromPoint(a) || [], o = Math.floor(a.x), l = Math.floor(a.y), u = n.filter(function(c) {
          return c.clientRects.some(function(d) {
            var f = d.left, p = d.top;
            return o < Math.floor(f + d.width) && o >= Math.floor(f) && l < Math.floor(p + d.height) && l >= Math.floor(p);
          });
        }), s = e.container;
        return s && (u = Cn(s._grid, s.boundingClientRect, !0).concat(u)), r || (u = u.sort(An).map(function(c) {
          return c.actualNode;
        }).concat(R.documentElement).filter(function(c, d, f) {
          return f.indexOf(c) === d;
        })), u;
      }
      i(Cn, "getRectStack");
      function bp(e) {
        Bt();
        var t = B(e), r = t._grid;
        return r ? Cn(r, t.boundingClientRect) : [];
      }
      i(bp, "getElementStack");
      var _l = bp;
      function yp(e) {
        var t = et(e, "*"), r = t.filter(function(a) {
          var n = a.isFocusable, o = a.actualNode.getAttribute("tabindex");
          return o = o && !isNaN(parseInt(o, 10)) ? parseInt(o) : null, o ? n && o >= 0 : n;
        });
        return r;
      }
      i(yp, "getTabbableElements");
      var xl = yp, Ar = {};
      we(Ar, {
        accessibleText: /* @__PURE__ */ i(function() {
          return Lt;
        }, "accessibleText"),
        accessibleTextVirtual: /* @__PURE__ */ i(function() {
          return Ye;
        }, "accessibleTextVirtual"),
        autocomplete: /* @__PURE__ */ i(function() {
          return zt;
        }, "autocomplete"),
        formControlValue: /* @__PURE__ */ i(function() {
          return tu;
        }, "formControlValue"),
        formControlValueMethods: /* @__PURE__ */ i(function() {
          return qn;
        }, "formControlValueMethods"),
        hasUnicode: /* @__PURE__ */ i(function() {
          return Ln;
        }, "hasUnicode"),
        isHumanInterpretable: /* @__PURE__ */ i(function() {
          return jn;
        }, "isHumanInterpretable"),
        isIconLigature: /* @__PURE__ */ i(function() {
          return Vn;
        }, "isIconLigature"),
        isValidAutocomplete: /* @__PURE__ */ i(function() {
          return ou;
        }, "isValidAutocomplete"),
        label: /* @__PURE__ */ i(function() {
          return Zm;
        }, "label"),
        labelText: /* @__PURE__ */ i(function() {
          return Pn;
        }, "labelText"),
        labelVirtual: /* @__PURE__ */ i(function() {
          return pa;
        }, "labelVirtual"),
        nativeElementType: /* @__PURE__ */ i(function() {
          return th;
        }, "nativeElementType"),
        nativeTextAlternative: /* @__PURE__ */ i(function() {
          return $l;
        }, "nativeTextAlternative"),
        nativeTextMethods: /* @__PURE__ */ i(function() {
          return Ul;
        }, "nativeTextMethods"),
        removeUnicode: /* @__PURE__ */ i(function() {
          return Rr;
        }, "removeUnicode"),
        sanitize: /* @__PURE__ */ i(function() {
          return Q;
        }, "sanitize"),
        subtreeText: /* @__PURE__ */ i(function() {
          return Ft;
        }, "subtreeText"),
        titleText: /* @__PURE__ */ i(function() {
          return ca;
        }, "titleText"),
        unsupported: /* @__PURE__ */ i(function() {
          return Wl;
        }, "unsupported"),
        visible: /* @__PURE__ */ i(function() {
          return lu;
        }, "visible"),
        visibleTextNodes: /* @__PURE__ */ i(function() {
          return rh;
        }, "visibleTextNodes"),
        visibleVirtual: /* @__PURE__ */ i(function() {
          return ft;
        }, "visibleVirtual")
      });
      function Dp(e, t) {
        e = e.actualNode || e;
        try {
          var r = He(e), a = [], n = e.getAttribute(t);
          if (n) {
            n = ze(n);
            for (var o = 0; o < n.length; o++)
              a.push(r.getElementById(n[o]));
          }
          return a;
        } catch {
          throw new TypeError("Cannot resolve id references for non-DOM nodes");
        }
      }
      i(Dp, "idrefs");
      var st = Dp;
      function wp(e, t) {
        var r = B(e);
        return Ye(r, t);
      }
      i(wp, "accessibleText");
      var Lt = wp;
      function _p(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e instanceof Z)) {
          if (e.nodeType !== 1)
            return "";
          e = B(e);
        }
        if (e.props.nodeType !== 1 || t.inLabelledByContext || t.inControlContext || !e.attr("aria-labelledby"))
          return "";
        var r = st(e, "aria-labelledby").filter(function(a) {
          return a;
        });
        return r.reduce(function(a, n) {
          var o = Lt(n, ue({
            inLabelledByContext: !0,
            startNode: t.startNode || e
          }, t));
          return a ? "".concat(a, " ").concat(o) : o;
        }, "");
      }
      i(_p, "arialabelledbyText");
      var Fr = _p;
      function xp(e) {
        if (!(e instanceof Z)) {
          if (e.nodeType !== 1)
            return "";
          e = B(e);
        }
        return e.attr("aria-label") || "";
      }
      i(xp, "arialabelText");
      var Cr = xp, Ep = {
        "aria-activedescendant": {
          type: "idref",
          allowEmpty: !0
        },
        "aria-atomic": {
          type: "boolean",
          global: !0
        },
        "aria-autocomplete": {
          type: "nmtoken",
          values: ["inline", "list", "both", "none"]
        },
        "aria-braillelabel": {
          type: "string",
          global: !0
        },
        "aria-brailleroledescription": {
          type: "string",
          global: !0
        },
        "aria-busy": {
          type: "boolean",
          global: !0
        },
        "aria-checked": {
          type: "nmtoken",
          values: ["false", "mixed", "true", "undefined"]
        },
        "aria-colcount": {
          type: "int",
          minValue: -1
        },
        "aria-colindex": {
          type: "int",
          minValue: 1
        },
        "aria-colspan": {
          type: "int",
          minValue: 1
        },
        "aria-controls": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-current": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["page", "step", "location", "date", "time", "true", "false"],
          global: !0
        },
        "aria-describedby": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-description": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-details": {
          type: "idref",
          allowEmpty: !0,
          global: !0
        },
        "aria-disabled": {
          type: "boolean",
          global: !0
        },
        "aria-dropeffect": {
          type: "nmtokens",
          values: ["copy", "execute", "link", "move", "none", "popup"],
          global: !0
        },
        "aria-errormessage": {
          type: "idref",
          allowEmpty: !0,
          global: !0
        },
        "aria-expanded": {
          type: "nmtoken",
          values: ["true", "false", "undefined"]
        },
        "aria-flowto": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-grabbed": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          global: !0
        },
        "aria-haspopup": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "menu", "listbox", "tree", "grid", "dialog"],
          global: !0
        },
        "aria-hidden": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          global: !0
        },
        "aria-invalid": {
          type: "nmtoken",
          values: ["grammar", "false", "spelling", "true"],
          global: !0
        },
        "aria-keyshortcuts": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-label": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-labelledby": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-level": {
          type: "int",
          minValue: 1
        },
        "aria-live": {
          type: "nmtoken",
          values: ["assertive", "off", "polite"],
          global: !0
        },
        "aria-modal": {
          type: "boolean"
        },
        "aria-multiline": {
          type: "boolean"
        },
        "aria-multiselectable": {
          type: "boolean"
        },
        "aria-orientation": {
          type: "nmtoken",
          values: ["horizontal", "undefined", "vertical"]
        },
        "aria-owns": {
          type: "idrefs",
          allowEmpty: !0,
          global: !0
        },
        "aria-placeholder": {
          type: "string",
          allowEmpty: !0
        },
        "aria-posinset": {
          type: "int",
          minValue: 1
        },
        "aria-pressed": {
          type: "nmtoken",
          values: ["false", "mixed", "true", "undefined"]
        },
        "aria-readonly": {
          type: "boolean"
        },
        "aria-relevant": {
          type: "nmtokens",
          values: ["additions", "all", "removals", "text"],
          global: !0
        },
        "aria-required": {
          type: "boolean"
        },
        "aria-roledescription": {
          type: "string",
          allowEmpty: !0,
          global: !0
        },
        "aria-rowcount": {
          type: "int",
          minValue: -1
        },
        "aria-rowindex": {
          type: "int",
          minValue: 1
        },
        "aria-rowspan": {
          type: "int",
          minValue: 0
        },
        "aria-selected": {
          type: "nmtoken",
          values: ["false", "true", "undefined"]
        },
        "aria-setsize": {
          type: "int",
          minValue: -1
        },
        "aria-sort": {
          type: "nmtoken",
          values: ["ascending", "descending", "none", "other"]
        },
        "aria-valuemax": {
          type: "decimal"
        },
        "aria-valuemin": {
          type: "decimal"
        },
        "aria-valuenow": {
          type: "decimal"
        },
        "aria-valuetext": {
          type: "string"
        }
      }, El = Ep, Ap = {
        alert: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        alertdialog: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-modal"],
          superclassRole: ["alert", "dialog"],
          accessibleNameRequired: !0
        },
        application: {
          type: "landmark",
          allowedAttrs: ["aria-activedescendant", "aria-expanded"],
          superclassRole: ["structure"],
          accessibleNameRequired: !0
        },
        article: {
          type: "structure",
          allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"],
          superclassRole: ["document"]
        },
        banner: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        blockquote: {
          type: "structure",
          superclassRole: ["section"]
        },
        button: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-pressed"],
          superclassRole: ["command"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        caption: {
          type: "structure",
          requiredContext: ["figure", "table", "grid", "treegrid"],
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        cell: {
          type: "structure",
          requiredContext: ["row"],
          allowedAttrs: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan", "aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        checkbox: {
          type: "widget",
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-readonly", "aria-required"],
          superclassRole: ["input"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        code: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        columnheader: {
          type: "structure",
          requiredContext: ["row"],
          allowedAttrs: ["aria-sort", "aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"],
          superclassRole: ["cell", "gridcell", "sectionhead"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        combobox: {
          type: "widget",
          requiredAttrs: ["aria-expanded", "aria-controls"],
          allowedAttrs: ["aria-owns", "aria-autocomplete", "aria-readonly", "aria-required", "aria-activedescendant", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !0
        },
        command: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        complementary: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        composite: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        contentinfo: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        comment: {
          type: "structure",
          allowedAttrs: ["aria-level", "aria-posinset", "aria-setsize"],
          superclassRole: ["article"]
        },
        definition: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        deletion: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        dialog: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-modal"],
          superclassRole: ["window"],
          accessibleNameRequired: !0
        },
        directory: {
          type: "structure",
          deprecated: !0,
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["list"],
          nameFromContent: !0
        },
        document: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["structure"]
        },
        emphasis: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        feed: {
          type: "structure",
          requiredOwned: ["article"],
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["list"]
        },
        figure: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        form: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        grid: {
          type: "composite",
          requiredOwned: ["rowgroup", "row"],
          allowedAttrs: ["aria-level", "aria-multiselectable", "aria-readonly", "aria-activedescendant", "aria-colcount", "aria-expanded", "aria-rowcount"],
          superclassRole: ["composite", "table"],
          accessibleNameRequired: !1
        },
        gridcell: {
          type: "widget",
          requiredContext: ["row"],
          allowedAttrs: ["aria-readonly", "aria-required", "aria-selected", "aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan"],
          superclassRole: ["cell", "widget"],
          nameFromContent: !0
        },
        group: {
          type: "structure",
          allowedAttrs: ["aria-activedescendant", "aria-expanded"],
          superclassRole: ["section"]
        },
        heading: {
          type: "structure",
          requiredAttrs: ["aria-level"],
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["sectionhead"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        img: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        input: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        insertion: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        landmark: {
          type: "abstract",
          superclassRole: ["section"]
        },
        link: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["command"],
          accessibleNameRequired: !0,
          nameFromContent: !0
        },
        list: {
          type: "structure",
          requiredOwned: ["listitem"],
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        listbox: {
          type: "widget",
          requiredOwned: ["group", "option"],
          allowedAttrs: ["aria-multiselectable", "aria-readonly", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !0
        },
        listitem: {
          type: "structure",
          requiredContext: ["list"],
          allowedAttrs: ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        log: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        main: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        marquee: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        math: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          childrenPresentational: !0
        },
        menu: {
          type: "composite",
          requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox", "menu", "separator"],
          allowedAttrs: ["aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"]
        },
        menubar: {
          type: "composite",
          requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox", "menu", "separator"],
          allowedAttrs: ["aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["menu"]
        },
        menuitem: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"],
          superclassRole: ["command"],
          accessibleNameRequired: !0,
          nameFromContent: !0
        },
        menuitemcheckbox: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-posinset", "aria-readonly", "aria-setsize"],
          superclassRole: ["checkbox", "menuitem"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        menuitemradio: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-posinset", "aria-readonly", "aria-setsize"],
          superclassRole: ["menuitemcheckbox", "radio"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        meter: {
          type: "structure",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuetext"],
          superclassRole: ["range"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        mark: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        navigation: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        none: {
          type: "structure",
          superclassRole: ["structure"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        note: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        option: {
          type: "widget",
          requiredContext: ["group", "listbox"],
          allowedAttrs: ["aria-selected", "aria-checked", "aria-posinset", "aria-setsize"],
          superclassRole: ["input"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        paragraph: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        presentation: {
          type: "structure",
          superclassRole: ["structure"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        progressbar: {
          type: "widget",
          allowedAttrs: ["aria-expanded", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"],
          superclassRole: ["range"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        radio: {
          type: "widget",
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-posinset", "aria-setsize", "aria-required"],
          superclassRole: ["input"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        radiogroup: {
          type: "composite",
          allowedAttrs: ["aria-readonly", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !1
        },
        range: {
          type: "abstract",
          superclassRole: ["widget"]
        },
        region: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"],
          accessibleNameRequired: !1
        },
        roletype: {
          type: "abstract",
          superclassRole: []
        },
        row: {
          type: "structure",
          requiredContext: ["grid", "rowgroup", "table", "treegrid"],
          requiredOwned: ["cell", "columnheader", "gridcell", "rowheader"],
          allowedAttrs: ["aria-colindex", "aria-level", "aria-rowindex", "aria-selected", "aria-activedescendant", "aria-expanded", "aria-posinset", "aria-setsize"],
          superclassRole: ["group", "widget"],
          nameFromContent: !0
        },
        rowgroup: {
          type: "structure",
          requiredContext: ["grid", "table", "treegrid"],
          requiredOwned: ["row"],
          superclassRole: ["structure"],
          nameFromContent: !0
        },
        rowheader: {
          type: "structure",
          requiredContext: ["row"],
          allowedAttrs: ["aria-sort", "aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"],
          superclassRole: ["cell", "gridcell", "sectionhead"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        scrollbar: {
          type: "widget",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuetext"],
          superclassRole: ["range"],
          childrenPresentational: !0
        },
        search: {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        searchbox: {
          type: "widget",
          allowedAttrs: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"],
          superclassRole: ["textbox"],
          accessibleNameRequired: !0
        },
        section: {
          type: "abstract",
          superclassRole: ["structure"],
          nameFromContent: !0
        },
        sectionhead: {
          type: "abstract",
          superclassRole: ["structure"],
          nameFromContent: !0
        },
        select: {
          type: "abstract",
          superclassRole: ["composite", "group"]
        },
        separator: {
          type: "structure",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-orientation", "aria-valuetext"],
          superclassRole: ["structure", "widget"],
          childrenPresentational: !0
        },
        slider: {
          type: "widget",
          requiredAttrs: ["aria-valuenow"],
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-orientation", "aria-readonly", "aria-valuetext"],
          superclassRole: ["input", "range"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        },
        spinbutton: {
          type: "widget",
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-readonly", "aria-required", "aria-activedescendant", "aria-valuetext", "aria-valuenow"],
          superclassRole: ["composite", "input", "range"],
          accessibleNameRequired: !0
        },
        status: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        strong: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        structure: {
          type: "abstract",
          superclassRole: ["roletype"]
        },
        subscript: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        superscript: {
          type: "structure",
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        switch: {
          type: "widget",
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-readonly"],
          superclassRole: ["checkbox"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        suggestion: {
          type: "structure",
          requiredOwned: ["insertion", "deletion"],
          superclassRole: ["section"],
          prohibitedAttrs: ["aria-label", "aria-labelledby"]
        },
        tab: {
          type: "widget",
          requiredContext: ["tablist"],
          allowedAttrs: ["aria-posinset", "aria-selected", "aria-setsize", "aria-expanded"],
          superclassRole: ["sectionhead", "widget"],
          nameFromContent: !0,
          childrenPresentational: !0
        },
        table: {
          type: "structure",
          requiredOwned: ["rowgroup", "row"],
          allowedAttrs: ["aria-colcount", "aria-rowcount", "aria-expanded"],
          superclassRole: ["section"],
          accessibleNameRequired: !1,
          nameFromContent: !0
        },
        tablist: {
          type: "composite",
          requiredOwned: ["tab"],
          allowedAttrs: ["aria-level", "aria-multiselectable", "aria-orientation", "aria-activedescendant", "aria-expanded"],
          superclassRole: ["composite"]
        },
        tabpanel: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          accessibleNameRequired: !1
        },
        term: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        text: {
          type: "structure",
          superclassRole: ["section"],
          nameFromContent: !0
        },
        textbox: {
          type: "widget",
          allowedAttrs: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"],
          superclassRole: ["input"],
          accessibleNameRequired: !0
        },
        time: {
          type: "structure",
          superclassRole: ["section"]
        },
        timer: {
          type: "widget",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["status"]
        },
        toolbar: {
          type: "structure",
          allowedAttrs: ["aria-orientation", "aria-activedescendant", "aria-expanded"],
          superclassRole: ["group"],
          accessibleNameRequired: !0
        },
        tooltip: {
          type: "structure",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"],
          nameFromContent: !0
        },
        tree: {
          type: "composite",
          requiredOwned: ["group", "treeitem"],
          allowedAttrs: ["aria-multiselectable", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"],
          accessibleNameRequired: !1
        },
        treegrid: {
          type: "composite",
          requiredOwned: ["rowgroup", "row"],
          allowedAttrs: ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required", "aria-rowcount"],
          superclassRole: ["grid", "tree"],
          accessibleNameRequired: !1
        },
        treeitem: {
          type: "widget",
          requiredContext: ["group", "tree"],
          allowedAttrs: ["aria-checked", "aria-expanded", "aria-level", "aria-posinset", "aria-selected", "aria-setsize"],
          superclassRole: ["listitem", "option"],
          accessibleNameRequired: !0,
          nameFromContent: !0
        },
        widget: {
          type: "abstract",
          superclassRole: ["roletype"]
        },
        window: {
          type: "abstract",
          superclassRole: ["roletype"]
        }
      }, Al = Ap, Fp = {
        "doc-abstract": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-acknowledgments": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-afterword": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-appendix": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-backlink": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-biblioentry": {
          type: "listitem",
          allowedAttrs: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"],
          superclassRole: ["listitem"],
          deprecated: !0
        },
        "doc-bibliography": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-biblioref": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-chapter": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-colophon": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-conclusion": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-cover": {
          type: "img",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["img"]
        },
        "doc-credit": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-credits": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-dedication": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-endnote": {
          type: "listitem",
          allowedAttrs: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"],
          superclassRole: ["listitem"],
          deprecated: !0
        },
        "doc-endnotes": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-epigraph": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-epilogue": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-errata": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-example": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-footnote": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-foreword": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-glossary": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-glossref": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-index": {
          type: "navigation",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["navigation"]
        },
        "doc-introduction": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-noteref": {
          type: "link",
          allowedAttrs: ["aria-expanded"],
          nameFromContent: !0,
          superclassRole: ["link"]
        },
        "doc-notice": {
          type: "note",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["note"]
        },
        "doc-pagebreak": {
          type: "separator",
          allowedAttrs: ["aria-expanded", "aria-orientation"],
          superclassRole: ["separator"],
          childrenPresentational: !0
        },
        "doc-pagelist": {
          type: "navigation",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["navigation"]
        },
        "doc-part": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-preface": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-prologue": {
          type: "landmark",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["landmark"]
        },
        "doc-pullquote": {
          type: "none",
          superclassRole: ["none"]
        },
        "doc-qna": {
          type: "section",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["section"]
        },
        "doc-subtitle": {
          type: "sectionhead",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["sectionhead"]
        },
        "doc-tip": {
          type: "note",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["note"]
        },
        "doc-toc": {
          type: "navigation",
          allowedAttrs: ["aria-expanded"],
          superclassRole: ["navigation"]
        }
      }, Cp = Fp, Tp = {
        "graphics-document": {
          type: "structure",
          superclassRole: ["document"],
          accessibleNameRequired: !0
        },
        "graphics-object": {
          type: "structure",
          superclassRole: ["group"],
          nameFromContent: !0
        },
        "graphics-symbol": {
          type: "structure",
          superclassRole: ["img"],
          accessibleNameRequired: !0,
          childrenPresentational: !0
        }
      }, kp = Tp, Rp = {
        a: {
          variant: {
            href: {
              matches: "[href]",
              contentTypes: ["interactive", "phrasing", "flow"],
              allowedRoles: ["button", "checkbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab", "treeitem", "doc-backlink", "doc-biblioref", "doc-glossref", "doc-noteref"],
              namingMethods: ["subtreeText"]
            },
            default: {
              contentTypes: ["phrasing", "flow"],
              allowedRoles: !0
            }
          }
        },
        abbr: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        address: {
          contentTypes: ["flow"],
          allowedRoles: !0
        },
        area: {
          variant: {
            href: {
              matches: "[href]",
              allowedRoles: !1
            },
            default: {
              allowedRoles: ["button", "link"]
            }
          },
          contentTypes: ["phrasing", "flow"],
          namingMethods: ["altText"]
        },
        article: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["feed", "presentation", "none", "document", "application", "main", "region"],
          shadowRoot: !0
        },
        aside: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["feed", "note", "presentation", "none", "region", "search", "doc-dedication", "doc-example", "doc-footnote", "doc-pullquote", "doc-tip"]
        },
        audio: {
          variant: {
            controls: {
              matches: "[controls]",
              contentTypes: ["interactive", "embedded", "phrasing", "flow"]
            },
            default: {
              contentTypes: ["embedded", "phrasing", "flow"]
            }
          },
          allowedRoles: ["application"],
          chromiumRole: "Audio"
        },
        b: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        base: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        bdi: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        bdo: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        blockquote: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        body: {
          allowedRoles: !1,
          shadowRoot: !0
        },
        br: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: ["presentation", "none"],
          namingMethods: ["titleText", "singleSpace"]
        },
        button: {
          contentTypes: ["interactive", "phrasing", "flow"],
          allowedRoles: ["checkbox", "combobox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"],
          namingMethods: ["subtreeText"]
        },
        canvas: {
          allowedRoles: !0,
          contentTypes: ["embedded", "phrasing", "flow"],
          chromiumRole: "Canvas"
        },
        caption: {
          allowedRoles: !1
        },
        cite: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        code: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        col: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        colgroup: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        data: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        datalist: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0,
          implicitAttrs: {
            "aria-multiselectable": "false"
          }
        },
        dd: {
          allowedRoles: !1
        },
        del: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        dfn: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        details: {
          contentTypes: ["interactive", "flow"],
          allowedRoles: !1
        },
        dialog: {
          contentTypes: ["flow"],
          allowedRoles: ["alertdialog"]
        },
        div: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        dl: {
          contentTypes: ["flow"],
          allowedRoles: ["group", "list", "presentation", "none"],
          chromiumRole: "DescriptionList"
        },
        dt: {
          allowedRoles: ["listitem"]
        },
        em: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        embed: {
          contentTypes: ["interactive", "embedded", "phrasing", "flow"],
          allowedRoles: ["application", "document", "img", "presentation", "none"],
          chromiumRole: "EmbeddedObject"
        },
        fieldset: {
          contentTypes: ["flow"],
          allowedRoles: ["none", "presentation", "radiogroup"],
          namingMethods: ["fieldsetLegendText"]
        },
        figcaption: {
          allowedRoles: ["group", "none", "presentation"]
        },
        figure: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          namingMethods: ["figureText", "titleText"]
        },
        footer: {
          contentTypes: ["flow"],
          allowedRoles: ["group", "none", "presentation", "doc-footnote"],
          shadowRoot: !0
        },
        form: {
          contentTypes: ["flow"],
          allowedRoles: ["search", "none", "presentation"]
        },
        h1: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "1"
          }
        },
        h2: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "2"
          }
        },
        h3: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "3"
          }
        },
        h4: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "4"
          }
        },
        h5: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "5"
          }
        },
        h6: {
          contentTypes: ["heading", "flow"],
          allowedRoles: ["none", "presentation", "tab", "doc-subtitle"],
          shadowRoot: !0,
          implicitAttrs: {
            "aria-level": "6"
          }
        },
        head: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        header: {
          contentTypes: ["flow"],
          allowedRoles: ["group", "none", "presentation", "doc-footnote"],
          shadowRoot: !0
        },
        hgroup: {
          contentTypes: ["heading", "flow"],
          allowedRoles: !0
        },
        hr: {
          contentTypes: ["flow"],
          allowedRoles: ["none", "presentation", "doc-pagebreak"],
          namingMethods: ["titleText", "singleSpace"]
        },
        html: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        i: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        iframe: {
          contentTypes: ["interactive", "embedded", "phrasing", "flow"],
          allowedRoles: ["application", "document", "img", "none", "presentation"],
          chromiumRole: "Iframe"
        },
        img: {
          variant: {
            nonEmptyAlt: {
              matches: [{
                attributes: {
                  alt: "/.+/"
                }
              }, {
                hasAccessibleName: !0
              }],
              allowedRoles: ["button", "checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "separator", "slider", "switch", "tab", "treeitem", "doc-cover"]
            },
            usemap: {
              matches: "[usemap]",
              contentTypes: ["interactive", "embedded", "flow"]
            },
            default: {
              allowedRoles: ["presentation", "none"],
              contentTypes: ["embedded", "flow"]
            }
          },
          namingMethods: ["altText"]
        },
        input: {
          variant: {
            button: {
              matches: {
                properties: {
                  type: "button"
                }
              },
              allowedRoles: ["checkbox", "combobox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"]
            },
            buttonType: {
              matches: {
                properties: {
                  type: ["button", "submit", "reset"]
                }
              },
              namingMethods: ["valueText", "titleText", "buttonDefaultText"]
            },
            checkboxPressed: {
              matches: {
                properties: {
                  type: "checkbox"
                },
                attributes: {
                  "aria-pressed": "/.*/"
                }
              },
              allowedRoles: ["button", "menuitemcheckbox", "option", "switch"],
              implicitAttrs: {
                "aria-checked": "false"
              }
            },
            checkbox: {
              matches: {
                properties: {
                  type: "checkbox"
                },
                attributes: {
                  "aria-pressed": null
                }
              },
              allowedRoles: ["menuitemcheckbox", "option", "switch"],
              implicitAttrs: {
                "aria-checked": "false"
              }
            },
            noRoles: {
              matches: {
                properties: {
                  type: ["color", "date", "datetime-local", "file", "month", "number", "password", "range", "reset", "submit", "time", "week"]
                }
              },
              allowedRoles: !1
            },
            hidden: {
              matches: {
                properties: {
                  type: "hidden"
                }
              },
              contentTypes: ["flow"],
              allowedRoles: !1,
              noAriaAttrs: !0
            },
            image: {
              matches: {
                properties: {
                  type: "image"
                }
              },
              allowedRoles: ["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio", "switch"],
              namingMethods: ["altText", "valueText", "labelText", "titleText", "buttonDefaultText"]
            },
            radio: {
              matches: {
                properties: {
                  type: "radio"
                }
              },
              allowedRoles: ["menuitemradio"],
              implicitAttrs: {
                "aria-checked": "false"
              }
            },
            textWithList: {
              matches: {
                properties: {
                  type: "text"
                },
                attributes: {
                  list: "/.*/"
                }
              },
              allowedRoles: !1
            },
            default: {
              contentTypes: ["interactive", "flow"],
              allowedRoles: ["combobox", "searchbox", "spinbutton"],
              implicitAttrs: {
                "aria-valuenow": ""
              },
              namingMethods: ["labelText", "placeholderText"]
            }
          }
        },
        ins: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        kbd: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        label: {
          contentTypes: ["interactive", "phrasing", "flow"],
          allowedRoles: !1,
          chromiumRole: "Label"
        },
        legend: {
          allowedRoles: !1
        },
        li: {
          allowedRoles: ["menuitem", "menuitemcheckbox", "menuitemradio", "option", "none", "presentation", "radio", "separator", "tab", "treeitem", "doc-biblioentry", "doc-endnote"],
          implicitAttrs: {
            "aria-setsize": "1",
            "aria-posinset": "1"
          }
        },
        link: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        main: {
          contentTypes: ["flow"],
          allowedRoles: !1,
          shadowRoot: !0
        },
        map: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        math: {
          contentTypes: ["embedded", "phrasing", "flow"],
          allowedRoles: !1
        },
        mark: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        menu: {
          contentTypes: ["flow"],
          allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
        },
        meta: {
          variant: {
            itemprop: {
              matches: "[itemprop]",
              contentTypes: ["phrasing", "flow"]
            }
          },
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        meter: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          chromiumRole: "progressbar"
        },
        nav: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["doc-index", "doc-pagelist", "doc-toc", "menu", "menubar", "none", "presentation", "tablist"],
          shadowRoot: !0
        },
        noscript: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        object: {
          variant: {
            usemap: {
              matches: "[usemap]",
              contentTypes: ["interactive", "embedded", "phrasing", "flow"]
            },
            default: {
              contentTypes: ["embedded", "phrasing", "flow"]
            }
          },
          allowedRoles: ["application", "document", "img"],
          chromiumRole: "PluginObject"
        },
        ol: {
          contentTypes: ["flow"],
          allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
        },
        optgroup: {
          allowedRoles: !1
        },
        option: {
          allowedRoles: !1,
          implicitAttrs: {
            "aria-selected": "false"
          }
        },
        output: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0,
          namingMethods: ["subtreeText"]
        },
        p: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        param: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        picture: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        pre: {
          contentTypes: ["flow"],
          allowedRoles: !0
        },
        progress: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          implicitAttrs: {
            "aria-valuemax": "100",
            "aria-valuemin": "0",
            "aria-valuenow": "0"
          }
        },
        q: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        rp: {
          allowedRoles: !0
        },
        rt: {
          allowedRoles: !0
        },
        ruby: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        s: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        samp: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        script: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        section: {
          contentTypes: ["sectioning", "flow"],
          allowedRoles: ["alert", "alertdialog", "application", "banner", "complementary", "contentinfo", "dialog", "document", "feed", "group", "log", "main", "marquee", "navigation", "none", "note", "presentation", "search", "status", "tabpanel", "doc-abstract", "doc-acknowledgments", "doc-afterword", "doc-appendix", "doc-bibliography", "doc-chapter", "doc-colophon", "doc-conclusion", "doc-credit", "doc-credits", "doc-dedication", "doc-endnotes", "doc-epigraph", "doc-epilogue", "doc-errata", "doc-example", "doc-foreword", "doc-glossary", "doc-index", "doc-introduction", "doc-notice", "doc-pagelist", "doc-part", "doc-preface", "doc-prologue", "doc-pullquote", "doc-qna", "doc-toc"],
          shadowRoot: !0
        },
        select: {
          variant: {
            combobox: {
              matches: {
                attributes: {
                  multiple: null,
                  size: [null, "1"]
                }
              },
              allowedRoles: ["menu"]
            },
            default: {
              allowedRoles: !1
            }
          },
          contentTypes: ["interactive", "phrasing", "flow"],
          implicitAttrs: {
            "aria-valuenow": ""
          },
          namingMethods: ["labelText"]
        },
        slot: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        small: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        source: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        span: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0,
          shadowRoot: !0
        },
        strong: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        style: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        svg: {
          contentTypes: ["embedded", "phrasing", "flow"],
          allowedRoles: !0,
          chromiumRole: "SVGRoot",
          namingMethods: ["svgTitleText"]
        },
        sub: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        summary: {
          allowedRoles: !1,
          namingMethods: ["subtreeText"]
        },
        sup: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        table: {
          contentTypes: ["flow"],
          allowedRoles: !0,
          namingMethods: ["tableCaptionText", "tableSummaryText"]
        },
        tbody: {
          allowedRoles: !0
        },
        template: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        textarea: {
          contentTypes: ["interactive", "phrasing", "flow"],
          allowedRoles: !1,
          implicitAttrs: {
            "aria-valuenow": "",
            "aria-multiline": "true"
          },
          namingMethods: ["labelText", "placeholderText"]
        },
        tfoot: {
          allowedRoles: !0
        },
        thead: {
          allowedRoles: !0
        },
        time: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        title: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        td: {
          allowedRoles: !0
        },
        th: {
          allowedRoles: !0
        },
        tr: {
          allowedRoles: !0
        },
        track: {
          allowedRoles: !1,
          noAriaAttrs: !0
        },
        u: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        ul: {
          contentTypes: ["flow"],
          allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
        },
        var: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: !0
        },
        video: {
          variant: {
            controls: {
              matches: "[controls]",
              contentTypes: ["interactive", "embedded", "phrasing", "flow"]
            },
            default: {
              contentTypes: ["embedded", "phrasing", "flow"]
            }
          },
          allowedRoles: ["application"],
          chromiumRole: "video"
        },
        wbr: {
          contentTypes: ["phrasing", "flow"],
          allowedRoles: ["presentation", "none"]
        }
      }, Sp = Rp, Op = {
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
        yellowgreen: [154, 205, 50]
      }, Ip = Op, Fl = {
        ariaAttrs: El,
        ariaRoles: ue({}, Al, Cp, kp),
        htmlElms: Sp,
        cssColors: Ip
      }, ar = ue({}, Fl);
      function Pp(e) {
        Object.keys(ar).forEach(function(t) {
          e[t] && (ar[t] = cn(ar[t], e[t]));
        });
      }
      i(Pp, "configureStandards");
      function Mp() {
        Object.keys(ar).forEach(function(e) {
          ar[e] = Fl[e];
        });
      }
      i(Mp, "resetStandards");
      var de = ar;
      function Np(e) {
        var t = de.ariaRoles[e];
        return t ? !!t.unsupported : !1;
      }
      i(Np, "isUnsupportedRole");
      var Tn = Np;
      function qp(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.allowAbstract, a = t.flagUnsupported, n = a === void 0 ? !1 : a, o = de.ariaRoles[e], l = Tn(e);
        return !o || n && l ? !1 : r ? !0 : o.type !== "abstract";
      }
      i(qp, "isValidRole");
      var nr = qp;
      function Bp(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fallback, a = t.abstracts, n = t.dpub;
        if (e = e instanceof Z ? e : B(e), e.props.nodeType !== 1)
          return null;
        var o = (e.attr("role") || "").trim().toLowerCase(), l = r ? ze(o) : [o], u = l.find(function(s) {
          return !n && s.substr(0, 4) === "doc-" ? !1 : nr(s, {
            allowAbstract: a
          });
        });
        return u || null;
      }
      i(Bp, "getExplicitRole");
      var be = Bp;
      function Lp(e) {
        return Object.keys(de.htmlElms).filter(function(t) {
          var r = de.htmlElms[t];
          return r.contentTypes ? r.contentTypes.includes(e) : r.variant && r.variant.default && r.variant.default.contentTypes ? r.variant.default.contentTypes.includes(e) : !1;
        });
      }
      i(Lp, "getElementsByContentType");
      var kn = Lp;
      function Vp() {
        return le.get("globalAriaAttrs", function() {
          return Object.keys(de.ariaAttrs).filter(function(e) {
            return de.ariaAttrs[e].global;
          });
        });
      }
      i(Vp, "getGlobalAriaAttrs");
      var Vt = Vp;
      function jp(e) {
        for (var t = [], r = e.rows, a = 0, n = r.length; a < n; a++) {
          var o = r[a].cells;
          t[a] = t[a] || [];
          for (var l = 0, u = 0, s = o.length; u < s; u++)
            for (var c = 0; c < o[u].colSpan; c++) {
              for (var d = o[u].getAttribute("rowspan"), f = parseInt(d) === 0 || o[u].rowspan === 0 ? r.length : o[u].rowSpan, p = 0; p < f; p++) {
                for (t[a + p] = t[a + p] || []; t[a + p][l]; )
                  l++;
                t[a + p][l] = o[u];
              }
              l++;
            }
        }
        return t;
      }
      i(jp, "toGrid");
      var yt = Ge(jp);
      function Hp(e, t) {
        var r, a;
        for (t || (t = yt(rr(e, "table"))), r = 0; r < t.length; r++)
          if (t[r] && (a = t[r].indexOf(e), a !== -1))
            return {
              x: a,
              y: r
            };
      }
      i(Hp, "getCellPosition");
      var sa = Ge(Hp);
      function zp(e) {
        var t = e instanceof Z ? e : B(e);
        e = t.actualNode;
        var r = t.attr("scope"), a = t.attr("role");
        if (!["td", "th"].includes(t.props.nodeName))
          throw new TypeError("Expected TD or TH element");
        if (a === "columnheader")
          return "col";
        if (a === "rowheader")
          return "row";
        if (r === "col" || r === "row")
          return r;
        if (t.props.nodeName !== "th")
          return !1;
        if (!t.actualNode)
          return "auto";
        var n = yt(rr(e, "table")), o = sa(e, n), l = n[o.y].reduce(function(s, c) {
          return s && c.nodeName.toUpperCase() === "TH";
        }, !0);
        if (l)
          return "col";
        var u = n.map(function(s) {
          return s[o.x];
        }).reduce(function(s, c) {
          return s && c && c.nodeName.toUpperCase() === "TH";
        }, !0);
        return u ? "row" : "auto";
      }
      i(zp, "getScope");
      var Rn = zp;
      function Up(e) {
        return ["col", "auto"].indexOf(Rn(e)) !== -1;
      }
      i(Up, "isColumnHeader");
      var ir = Up;
      function $p(e) {
        return ["row", "auto"].includes(Rn(e));
      }
      i($p, "isRowHeader");
      var or = $p;
      function Wp(e) {
        return e ? e.replace(/\r\n/g, `
`).replace(/\u00A0/g, " ").replace(/[\s]{2,}/g, " ").trim() : "";
      }
      i(Wp, "sanitize");
      var Q = Wp;
      function Gp(e) {
        var t = e instanceof Z ? e : B(e);
        if (!t || _n(t))
          return !1;
        switch (t.props.nodeName) {
          case "a":
          case "area":
            if (t.hasAttr("href"))
              return !0;
            break;
          case "input":
            return t.props.type !== "hidden";
          case "textarea":
          case "select":
          case "summary":
          case "button":
            return !0;
          case "details":
            return !et(t, "summary").length;
        }
        return !1;
      }
      i(Gp, "isNativelyFocusable");
      var Sn = Gp;
      function Ce(e) {
        var t = e instanceof Z ? e : B(e);
        if (t.props.nodeType !== 1 || _n(t))
          return !1;
        if (Sn(t))
          return !0;
        var r = t.attr("tabindex");
        return !!(r && !isNaN(parseInt(r, 10)));
      }
      i(Ce, "_isFocusable");
      var Cl = kn("sectioning").map(function(e) {
        return "".concat(e, ":not([role])");
      }).join(", ") + " , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]";
      function Tl(e) {
        var t = Q(Fr(e)), r = Q(Cr(e));
        return !!(t || r);
      }
      i(Tl, "hasAccessibleName");
      var Yp = {
        a: /* @__PURE__ */ i(function(t) {
          return t.hasAttr("href") ? "link" : null;
        }, "a"),
        area: /* @__PURE__ */ i(function(t) {
          return t.hasAttr("href") ? "link" : null;
        }, "area"),
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
        footer: /* @__PURE__ */ i(function(t) {
          var r = Xe(t, Cl);
          return r ? null : "contentinfo";
        }, "footer"),
        form: /* @__PURE__ */ i(function(t) {
          return Tl(t) ? "form" : null;
        }, "form"),
        h1: "heading",
        h2: "heading",
        h3: "heading",
        h4: "heading",
        h5: "heading",
        h6: "heading",
        header: /* @__PURE__ */ i(function(t) {
          var r = Xe(t, Cl);
          return r ? null : "banner";
        }, "header"),
        hr: "separator",
        img: /* @__PURE__ */ i(function(t) {
          var r = t.hasAttr("alt") && !t.attr("alt"), a = Vt().find(function(n) {
            return t.hasAttr(n);
          });
          return r && !a && !Ce(t) ? "presentation" : "img";
        }, "img"),
        input: /* @__PURE__ */ i(function(t) {
          var r;
          if (t.hasAttr("list")) {
            var a = st(t.actualNode, "list").filter(function(n) {
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
        }, "input"),
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
        section: /* @__PURE__ */ i(function(t) {
          return Tl(t) ? "region" : null;
        }, "section"),
        select: /* @__PURE__ */ i(function(t) {
          return t.hasAttr("multiple") || parseInt(t.attr("size")) > 1 ? "listbox" : "combobox";
        }, "select"),
        summary: "button",
        table: "table",
        tbody: "rowgroup",
        td: /* @__PURE__ */ i(function(t) {
          var r = Xe(t, "table"), a = be(r);
          return ["grid", "treegrid"].includes(a) ? "gridcell" : "cell";
        }, "td"),
        textarea: "textbox",
        tfoot: "rowgroup",
        th: /* @__PURE__ */ i(function(t) {
          if (ir(t))
            return "columnheader";
          if (or(t))
            return "rowheader";
        }, "th"),
        thead: "rowgroup",
        tr: "row",
        ul: "list"
      }, On = Yp;
      function Kp(e, t) {
        var r = P(t);
        if (Array.isArray(t) && typeof e < "u")
          return t.includes(e);
        if (r === "function")
          return !!t(e);
        if (e != null) {
          if (t instanceof RegExp)
            return t.test(e);
          if (/^\/.*\/$/.test(t)) {
            var a = t.substring(1, t.length - 1);
            return new RegExp(a).test(e);
          }
        }
        return t === e;
      }
      i(Kp, "fromPrimative");
      var jt = Kp;
      function Xp(e, t) {
        return jt(!!Ye(e), t);
      }
      i(Xp, "hasAccessibleName2");
      var kl = Xp;
      function Jp(e, t) {
        var r = P(t);
        if (r !== "object" || Array.isArray(t) || t instanceof RegExp)
          throw new Error("Expect matcher to be an object");
        return Object.keys(t).every(function(a) {
          return jt(e(a), t[a]);
        });
      }
      i(Jp, "fromFunction");
      var In = Jp;
      function Qp(e, t) {
        return e instanceof Z || (e = B(e)), In(function(r) {
          return e.attr(r);
        }, t);
      }
      i(Qp, "attributes");
      var Rl = Qp;
      function Zp(e, t) {
        return !!t(e);
      }
      i(Zp, "condition");
      var Sl = Zp;
      function em(e, t) {
        return jt(be(e), t);
      }
      i(em, "explicitRole");
      var Ol = em;
      function tm(e, t) {
        return jt(dt(e), t);
      }
      i(tm, "implicitRole");
      var Il = tm;
      function rm(e, t) {
        return e instanceof Z || (e = B(e)), jt(e.props.nodeName, t);
      }
      i(rm, "nodeName");
      var Pl = rm;
      function am(e, t) {
        return e instanceof Z || (e = B(e)), In(function(r) {
          return e.props[r];
        }, t);
      }
      i(am, "properties");
      var Ml = am;
      function nm(e, t) {
        return jt(se(e), t);
      }
      i(nm, "semanticRole");
      var Nl = nm, ql = {
        hasAccessibleName: kl,
        attributes: Rl,
        condition: Sl,
        explicitRole: Ol,
        implicitRole: Il,
        nodeName: Pl,
        properties: Ml,
        semanticRole: Nl
      };
      function Bl(e, t) {
        return e instanceof Z || (e = B(e)), Array.isArray(t) ? t.some(function(r) {
          return Bl(e, r);
        }) : typeof t == "string" ? Xa(e, t) : Object.keys(t).every(function(r) {
          if (!ql[r])
            throw new Error('Unknown matcher type "'.concat(r, '"'));
          var a = ql[r], n = t[r];
          return a(e, n);
        });
      }
      i(Bl, "fromDefinition");
      var Ll = Bl;
      function im(e, t) {
        return Ll(e, t);
      }
      i(im, "matches2");
      var Qe = im;
      Qe.hasAccessibleName = kl, Qe.attributes = Rl, Qe.condition = Sl, Qe.explicitRole = Ol, Qe.fromDefinition = Ll, Qe.fromFunction = In, Qe.fromPrimative = jt, Qe.implicitRole = Il, Qe.nodeName = Pl, Qe.properties = Ml, Qe.semanticRole = Nl;
      var Tr = Qe;
      function om(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noMatchAccessibleName, a = r === void 0 ? !1 : r, n = de.htmlElms[e.props.nodeName];
        if (!n)
          return {};
        if (!n.variant)
          return n;
        var o = n.variant, l = je(n, Fc);
        for (var u in o)
          if (!(!o.hasOwnProperty(u) || u === "default")) {
            for (var s = o[u], c = s.matches, d = je(s, Cc), f = Array.isArray(c) ? c : [c], p = 0; p < f.length && a; p++)
              if (f[p].hasOwnProperty("hasAccessibleName"))
                return n;
            if (Tr(e, c))
              for (var m in d)
                d.hasOwnProperty(m) && (l[m] = d[m]);
          }
        for (var h in o.default)
          o.default.hasOwnProperty(h) && typeof l[h] > "u" && (l[h] = o.default[h]);
        return l;
      }
      i(om, "getElementSpec");
      var Ht = om;
      function lm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.chromium, a = e instanceof Z ? e : B(e);
        if (e = a.actualNode, !a)
          throw new ReferenceError("Cannot get implicit role of a node outside the current scope.");
        var n = a.props.nodeName, o = On[n];
        if (!o && r) {
          var l = Ht(a), u = l.chromiumRole;
          return u || null;
        }
        return typeof o == "function" ? o(a) : o || null;
      }
      i(lm, "implicitRole2");
      var dt = lm, um = {
        td: ["tr"],
        th: ["tr"],
        tr: ["thead", "tbody", "tfoot", "table"],
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        li: ["ol", "ul"],
        dt: ["dl", "div"],
        dd: ["dl", "div"],
        div: ["dl"]
      };
      function Vl(e, t) {
        var r = um[e.props.nodeName];
        if (!r)
          return null;
        if (!e.parent) {
          if (!e.actualNode)
            return null;
          throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.");
        }
        if (!r.includes(e.parent.props.nodeName))
          return null;
        var a = be(e.parent, t);
        return ["none", "presentation"].includes(a) && !Hl(e.parent) ? a : a ? null : Vl(e.parent, t);
      }
      i(Vl, "getInheritedRole");
      function jl(e, t) {
        var r = t.chromium, a = je(t, Tc), n = dt(e, {
          chromium: r
        });
        if (!n)
          return null;
        var o = Vl(e, a);
        return o || n;
      }
      i(jl, "resolveImplicitRole");
      function Hl(e) {
        var t = Vt().some(function(r) {
          return e.hasAttr(r);
        });
        return t || Ce(e);
      }
      i(Hl, "hasConflictResolution");
      function sm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noImplicit, a = je(t, kc), n = e instanceof Z ? e : B(e);
        if (n.props.nodeType !== 1)
          return null;
        var o = be(n, a);
        return o ? ["presentation", "none"].includes(o) && Hl(n) ? r ? null : jl(n, a) : o : r ? null : jl(n, a);
      }
      i(sm, "resolveRole");
      function cm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noPresentational, a = je(t, Rc), n = sm(e, a);
        return r && ["presentation", "none"].includes(n) ? null : n;
      }
      i(cm, "getRole");
      var se = cm, dm = ["iframe"];
      function fm(e) {
        var t = e instanceof Z ? e : B(e);
        return t.props.nodeType !== 1 || !e.hasAttr("title") || !Qe(t, dm) && ["none", "presentation"].includes(se(t)) ? "" : t.attr("title");
      }
      i(fm, "titleText");
      var ca = fm;
      function pm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.strict;
        if (e = e instanceof Z ? e : B(e), e.props.nodeType !== 1)
          return !1;
        var a = se(e), n = de.ariaRoles[a];
        return n && n.nameFromContent ? !0 : r ? !1 : !n || ["presentation", "none"].includes(a);
      }
      i(pm, "namedFromContents");
      var zl = pm;
      function mm(e) {
        var t = e.actualNode, r = e.children;
        if (!r)
          throw new Error("getOwnedVirtual requires a virtual node");
        if (e.hasAttr("aria-owns")) {
          var a = st(t, "aria-owns").filter(function(n) {
            return !!n;
          }).map(function(n) {
            return g.utils.getNodeFromTree(n);
          });
          return [].concat(ae(r), ae(a));
        }
        return ae(r);
      }
      i(mm, "getOwnedVirtual");
      var kr = mm;
      function hm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ye.alreadyProcessed;
        t.startNode = t.startNode || e;
        var a = t, n = a.strict, o = a.inControlContext, l = a.inLabelledByContext, u = Ht(e, {
          noMatchAccessibleName: !0
        }), s = u.contentTypes;
        if (r(e, t) || e.props.nodeType !== 1 || s != null && s.includes("embedded") || !zl(e, {
          strict: n
        }) && !t.subtreeDescendant)
          return "";
        if (!n) {
          var c = !o && !l;
          t = ue({
            subtreeDescendant: c
          }, t);
        }
        return kr(e).reduce(function(d, f) {
          return gm(d, f, t);
        }, "");
      }
      i(hm, "subtreeText");
      var vm = kn("phrasing").concat(["#text"]);
      function gm(e, t, r) {
        var a = t.props.nodeName, n = Ye(t, r);
        return n ? (vm.includes(a) || (n[0] !== " " && (n += " "), e && e[e.length - 1] !== " " && (n = " " + n)), e + n) : e;
      }
      i(gm, "appendAccessibleText");
      var Ft = hm;
      function bm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ye.alreadyProcessed;
        if (t.inControlContext || t.inLabelledByContext || r(e, t))
          return "";
        t.startNode || (t.startNode = e);
        var a = ue({
          inControlContext: !0
        }, t), n = ym(e), o = Xe(e, "label"), l;
        return o ? (l = [].concat(ae(n), [o.actualNode]), l.sort(si)) : l = n, l.map(function(u) {
          return Lt(u, a);
        }).filter(function(u) {
          return u !== "";
        }).join(" ");
      }
      i(bm, "labelText");
      function ym(e) {
        if (!e.attr("id"))
          return [];
        if (!e.actualNode)
          throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
        return Ho({
          elm: "label",
          attr: "for",
          value: e.attr("id"),
          context: e.actualNode
        });
      }
      i(ym, "getExplicitLabels");
      var Pn = bm, Dm = {
        submit: "Submit",
        image: "Submit",
        reset: "Reset",
        button: ""
      }, wm = {
        valueText: /* @__PURE__ */ i(function(t) {
          var r = t.actualNode;
          return r.value || "";
        }, "valueText"),
        buttonDefaultText: /* @__PURE__ */ i(function(t) {
          var r = t.actualNode;
          return Dm[r.type] || "";
        }, "buttonDefaultText"),
        tableCaptionText: da.bind(null, "caption"),
        figureText: da.bind(null, "figcaption"),
        svgTitleText: da.bind(null, "title"),
        fieldsetLegendText: da.bind(null, "legend"),
        altText: Mn.bind(null, "alt"),
        tableSummaryText: Mn.bind(null, "summary"),
        titleText: ca,
        subtreeText: Ft,
        labelText: Pn,
        singleSpace: /* @__PURE__ */ i(function() {
          return " ";
        }, "singleSpace"),
        placeholderText: Mn.bind(null, "placeholder")
      };
      function Mn(e, t) {
        return t.attr(e) || "";
      }
      i(Mn, "attrText");
      function da(e, t, r) {
        var a = t.actualNode;
        e = e.toLowerCase();
        var n = [e, a.nodeName.toLowerCase()].join(","), o = a.querySelector(n);
        return !o || o.nodeName.toLowerCase() !== e ? "" : Lt(o, r);
      }
      i(da, "descendantText");
      var Ul = wm;
      function _m(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode;
        if (e.props.nodeType !== 1 || ["presentation", "none"].includes(se(e)))
          return "";
        var a = xm(e), n = a.reduce(function(o, l) {
          return o || l(e, t);
        }, "");
        return t.debug && g.log(n || "{empty-value}", r, t), n;
      }
      i(_m, "nativeTextAlternative");
      function xm(e) {
        var t = Ht(e, {
          noMatchAccessibleName: !0
        }), r = t.namingMethods || [];
        return r.map(function(a) {
          return Ul[a];
        });
      }
      i(xm, "findTextMethods");
      var $l = _m, Em = {
        accessibleNameFromFieldValue: ["combobox", "listbox", "progressbar"]
      }, Wl = Em;
      function xe(e) {
        return e = e instanceof Z ? e : B(e), Nn(e);
      }
      i(xe, "_isVisibleToScreenReaders");
      var Nn = Ge(/* @__PURE__ */ i(function(t, r) {
        return Ko(t) || la(t, {
          skipAncestors: !0,
          isAncestor: r
        }) ? !1 : t.actualNode && t.props.nodeName === "area" ? !mn(t, Nn) : At(t, {
          skipAncestors: !0,
          isAncestor: r
        }) ? !1 : t.parent ? Nn(t.parent, !0) : !0;
      }, "isVisibleToScreenReadersMemoized"));
      function Gl(e, t, r) {
        var a = e instanceof Z ? e : B(e), n = t ? xe : Je, o = !e.actualNode || e.actualNode && n(e), l = a.children.map(function(u) {
          var s = u.props, c = s.nodeType, d = s.nodeValue;
          if (c === 3) {
            if (d && o)
              return d;
          } else if (!r)
            return Gl(u, t);
        }).join("");
        return Q(l);
      }
      i(Gl, "visibleVirtual");
      var ft = Gl, Am = ["button", "checkbox", "color", "file", "hidden", "image", "password", "radio", "reset", "submit"];
      function Fm(e) {
        e = e instanceof Z ? e : B(e);
        var t = e.props.nodeName;
        return t === "textarea" || t === "input" && !Am.includes((e.attr("type") || "").toLowerCase());
      }
      i(Fm, "isNativeTextbox");
      var Yl = Fm;
      function Cm(e) {
        e = e instanceof Z ? e : B(e);
        var t = e.props.nodeName;
        return t === "select";
      }
      i(Cm, "isNativeSelect");
      var Kl = Cm;
      function Tm(e) {
        var t = be(e);
        return t === "textbox";
      }
      i(Tm, "isAriaTextbox");
      var Xl = Tm;
      function km(e) {
        var t = be(e);
        return t === "listbox";
      }
      i(km, "isAriaListbox");
      var Jl = km;
      function Rm(e) {
        var t = be(e);
        return t === "combobox";
      }
      i(Rm, "isAriaCombobox");
      var Ql = Rm, Sm = ["progressbar", "scrollbar", "slider", "spinbutton"];
      function Om(e) {
        var t = be(e);
        return Sm.includes(t);
      }
      i(Om, "isAriaRange");
      var Zl = Om, Im = ["textbox", "progressbar", "scrollbar", "slider", "spinbutton", "combobox", "listbox"], qn = {
        nativeTextboxValue: Mm,
        nativeSelectValue: Nm,
        ariaTextboxValue: qm,
        ariaListboxValue: eu,
        ariaComboboxValue: Bm,
        ariaRangeValue: Lm
      };
      function Pm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode, a = Wl.accessibleNameFromFieldValue || [], n = se(e);
        if (t.startNode === e || !Im.includes(n) || a.includes(n))
          return "";
        var o = Object.keys(qn).map(function(u) {
          return qn[u];
        }), l = o.reduce(function(u, s) {
          return u || s(e, t);
        }, "");
        return t.debug && Mt(l || "{empty-value}", r, t), l;
      }
      i(Pm, "formControlValue");
      function Mm(e) {
        var t = e instanceof Z ? e : B(e);
        return Yl(t) && t.props.value || "";
      }
      i(Mm, "nativeTextboxValue");
      function Nm(e) {
        var t = e instanceof Z ? e : B(e);
        if (!Kl(t))
          return "";
        var r = et(t, "option"), a = r.filter(function(n) {
          return n.props.selected;
        });
        return a.length || a.push(r[0]), a.map(function(n) {
          return ft(n);
        }).join(" ") || "";
      }
      i(Nm, "nativeSelectValue");
      function qm(e) {
        var t = e instanceof Z ? e : B(e), r = t.actualNode;
        return Xl(t) ? !r || r && !At(r) ? ft(t, !0) : r.textContent : "";
      }
      i(qm, "ariaTextboxValue");
      function eu(e, t) {
        var r = e instanceof Z ? e : B(e);
        if (!Jl(r))
          return "";
        var a = kr(r).filter(function(n) {
          return se(n) === "option" && n.attr("aria-selected") === "true";
        });
        return a.length === 0 ? "" : Ye(a[0], t);
      }
      i(eu, "ariaListboxValue");
      function Bm(e, t) {
        var r = e instanceof Z ? e : B(e);
        if (!Ql(r))
          return "";
        var a = kr(r).filter(function(n) {
          return se(n) === "listbox";
        })[0];
        return a ? eu(a, t) : "";
      }
      i(Bm, "ariaComboboxValue");
      function Lm(e) {
        var t = e instanceof Z ? e : B(e);
        if (!Zl(t) || !t.hasAttr("aria-valuenow"))
          return "";
        var r = +t.attr("aria-valuenow");
        return isNaN(r) ? "0" : String(r);
      }
      i(Lm, "ariaRangeValue");
      var tu = Pm;
      function ru() {
        return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
      }
      i(ru, "getUnicodeNonBmpRegExp");
      function au() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g;
      }
      i(au, "getPunctuationRegExp");
      function nu() {
        return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
      }
      i(nu, "getSupplementaryPrivateUseRegExp");
      var Bn = /* @__PURE__ */ i(function() {
        return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
      }, "emoji_regex_default");
      function Vm(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations;
        return r ? Bn().test(e) : a ? ru().test(e) || nu().test(e) : n ? au().test(e) : !1;
      }
      i(Vm, "hasUnicode");
      var Ln = Vm;
      function jm(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, a = e.actualNode.nodeValue.trim();
        if (!Q(a) || Ln(a, {
          emoji: !0,
          nonBmp: !0
        }))
          return !1;
        var n = le.get("canvasContext", function() {
          return R.createElement("canvas").getContext("2d", {
            willReadFrequently: !0
          });
        }), o = n.canvas;
        le.get("fonts") || le.set("fonts", {});
        var l = le.get("fonts"), u = D.getComputedStyle(e.parent.actualNode), s = u.getPropertyValue("font-family");
        l[s] || (l[s] = {
          occurrences: 0,
          numLigatures: 0
        });
        var c = l[s];
        if (c.occurrences >= r) {
          if (c.numLigatures / c.occurrences === 1)
            return !0;
          if (c.numLigatures === 0)
            return !1;
        }
        c.occurrences++;
        var d = 30, f = "".concat(d, "px ").concat(s);
        n.font = f;
        var p = a.charAt(0), m = n.measureText(p).width;
        if (m < 30) {
          var h = 30 / m;
          m *= h, d *= h, f = "".concat(d, "px ").concat(s);
        }
        o.width = m, o.height = d, n.font = f, n.textAlign = "left", n.textBaseline = "top", n.fillText(p, 0, 0);
        var y = new Uint32Array(n.getImageData(0, 0, m, d).data.buffer);
        if (!y.some(function(M) {
          return M;
        }))
          return c.numLigatures++, !0;
        n.clearRect(0, 0, m, d), n.fillText(a, 0, 0);
        var w = new Uint32Array(n.getImageData(0, 0, m, d).data.buffer), v = y.reduce(function(M, L, j) {
          return L === 0 && w[j] === 0 || L !== 0 && w[j] !== 0 ? M : ++M;
        }, 0), b = a.split("").reduce(function(M, L) {
          return M + n.measureText(L).width;
        }, 0), E = n.measureText(a).width, A = v / y.length, T = 1 - E / b;
        return A >= t && T >= t ? (c.numLigatures++, !0) : !1;
      }
      i(jm, "isIconLigature");
      var Vn = jm;
      function iu(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t = $m(e, t), zm(e, t) || Um(e, t))
          return "";
        var r = [Fr, Cr, $l, tu, Ft, Hm, ca], a = r.reduce(function(n, o) {
          return t.startNode === e && (n = Q(n)), n !== "" ? n : o(e, t);
        }, "");
        return t.debug && g.log(a || "{empty-value}", e.actualNode, t), a;
      }
      i(iu, "accessibleTextVirtual");
      function Hm(e) {
        return e.props.nodeType !== 3 ? "" : e.props.nodeValue;
      }
      i(Hm, "textNodeValue");
      function zm(e, t) {
        return !e || e.props.nodeType !== 1 || t.includeHidden ? !1 : !xe(e);
      }
      i(zm, "shouldIgnoreHidden");
      function Um(e, t) {
        var r, a = t.ignoreIconLigature, n = t.pixelThreshold, o = (r = t.occurrenceThreshold) !== null && r !== void 0 ? r : t.occuranceThreshold;
        return e.props.nodeType !== 3 || !a ? !1 : Vn(e, n, o);
      }
      i(Um, "shouldIgnoreIconLigature");
      function $m(e, t) {
        return t.startNode || (t = ue({
          startNode: e
        }, t)), e.props.nodeType === 1 && t.inLabelledByContext && t.includeHidden === void 0 && (t = ue({
          includeHidden: !xe(e)
        }, t)), t;
      }
      i($m, "prepareContext"), iu.alreadyProcessed = /* @__PURE__ */ i(function(t, r) {
        return r.processed = r.processed || [], r.processed.includes(t) ? !0 : (r.processed.push(t), !1);
      }, "alreadyProcessed");
      var Ye = iu;
      function Wm(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations;
        return r && (e = e.replace(Bn(), "")), a && (e = e.replace(ru(), ""), e = e.replace(nu(), "")), n && (e = e.replace(au(), "")), e;
      }
      i(Wm, "removeUnicode");
      var Rr = Wm;
      function Gm(e) {
        if (!e.length)
          return 0;
        var t = ["x", "i"];
        if (t.includes(e))
          return 0;
        var r = Rr(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return Q(r) ? 1 : 0;
      }
      i(Gm, "isHumanInterpretable");
      var jn = Gm, zt = {
        stateTerms: ["on", "off"],
        standaloneTerms: ["name", "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "nickname", "username", "new-password", "current-password", "organization-title", "organization", "street-address", "address-line1", "address-line2", "address-line3", "address-level4", "address-level3", "address-level2", "address-level1", "country", "country-name", "postal-code", "cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc", "cc-type", "transaction-currency", "transaction-amount", "language", "bday", "bday-day", "bday-month", "bday-year", "sex", "url", "photo", "one-time-code"],
        qualifiers: ["home", "work", "mobile", "fax", "pager"],
        qualifiedTerms: ["tel", "tel-country-code", "tel-national", "tel-area-code", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-extension", "email", "impp"],
        locations: ["billing", "shipping"]
      };
      function Ym(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.looseTyped, a = r === void 0 ? !1 : r, n = t.stateTerms, o = n === void 0 ? [] : n, l = t.locations, u = l === void 0 ? [] : l, s = t.qualifiers, c = s === void 0 ? [] : s, d = t.standaloneTerms, f = d === void 0 ? [] : d, p = t.qualifiedTerms, m = p === void 0 ? [] : p;
        if (e = e.toLowerCase().trim(), o = o.concat(zt.stateTerms), o.includes(e) || e === "")
          return !0;
        c = c.concat(zt.qualifiers), u = u.concat(zt.locations), f = f.concat(zt.standaloneTerms), m = m.concat(zt.qualifiedTerms);
        var h = e.split(/\s+/g);
        if (h[h.length - 1] === "webauthn" && (h.pop(), h.length === 0) || !a && (h[0].length > 8 && h[0].substr(0, 8) === "section-" && h.shift(), u.includes(h[0]) && h.shift(), c.includes(h[0]) && (h.shift(), f = []), h.length !== 1))
          return !1;
        var y = h[h.length - 1];
        return f.includes(y) || m.includes(y);
      }
      i(Ym, "isValidAutocomplete");
      var ou = Ym;
      function Km(e) {
        var t, r;
        return e.attr("aria-labelledby") && (t = st(e.actualNode, "aria-labelledby"), r = t.map(function(a) {
          var n = B(a);
          return n ? ft(n) : "";
        }).join(" ").trim(), r) || (r = e.attr("aria-label"), r && (r = Q(r), r)) ? r : null;
      }
      i(Km, "labelVirtual");
      var fa = Km;
      function Xm(e, t, r) {
        return e = B(e), ft(e, t, r);
      }
      i(Xm, "visible");
      var lu = Xm;
      function Jm(e) {
        var t, r, a;
        if (r = fa(e), r)
          return r;
        if (e.attr("id")) {
          if (!e.actualNode)
            throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
          var n = Fe(e.attr("id"));
          if (a = He(e.actualNode), t = a.querySelector('label[for="' + n + '"]'), r = t && lu(t, !0), r)
            return r;
        }
        return t = Xe(e, "label"), r = t && ft(t, !0), r || null;
      }
      i(Jm, "labelVirtual2");
      var pa = Jm;
      function Qm(e) {
        return e = B(e), pa(e);
      }
      i(Qm, "label");
      var Zm = Qm, eh = [{
        matches: [{
          nodeName: "textarea"
        }, {
          nodeName: "input",
          properties: {
            type: ["text", "password", "search", "tel", "email", "url"]
          }
        }],
        namingMethods: "labelText"
      }, {
        matches: {
          nodeName: "input",
          properties: {
            type: ["button", "submit", "reset"]
          }
        },
        namingMethods: ["valueText", "titleText", "buttonDefaultText"]
      }, {
        matches: {
          nodeName: "input",
          properties: {
            type: "image"
          }
        },
        namingMethods: ["altText", "valueText", "labelText", "titleText", "buttonDefaultText"]
      }, {
        matches: "button",
        namingMethods: "subtreeText"
      }, {
        matches: "fieldset",
        namingMethods: "fieldsetLegendText"
      }, {
        matches: "OUTPUT",
        namingMethods: "subtreeText"
      }, {
        matches: [{
          nodeName: "select"
        }, {
          nodeName: "input",
          properties: {
            type: /^(?!text|password|search|tel|email|url|button|submit|reset)/
          }
        }],
        namingMethods: "labelText"
      }, {
        matches: "summary",
        namingMethods: "subtreeText"
      }, {
        matches: "figure",
        namingMethods: ["figureText", "titleText"]
      }, {
        matches: "img",
        namingMethods: "altText"
      }, {
        matches: "table",
        namingMethods: ["tableCaptionText", "tableSummaryText"]
      }, {
        matches: ["hr", "br"],
        namingMethods: ["titleText", "singleSpace"]
      }], th = eh;
      function uu(e) {
        var t = Je(e), r = [];
        return e.children.forEach(function(a) {
          a.actualNode.nodeType === 3 ? t && r.push(a) : r = r.concat(uu(a));
        }), r;
      }
      i(uu, "visibleTextNodes");
      var rh = uu, ah = Ge(/* @__PURE__ */ i(function(t) {
        var r = B(t), a = r.boundingClientRect, n = [], o = pn(r);
        return t.childNodes.forEach(function(l) {
          if (!(l.nodeType !== 3 || Q(l.nodeValue) === "")) {
            var u = nh(l);
            ih(u, a) || n.push.apply(n, ae(oh(u, o)));
          }
        }), n.length ? n : [a];
      }, "getVisibleChildTextRectsMemoized")), Hn = ah;
      function nh(e) {
        var t = R.createRange();
        return t.selectNodeContents(e), Array.from(t.getClientRects());
      }
      i(nh, "getContentRects");
      function ih(e, t) {
        return e.some(function(r) {
          var a = Fn(r);
          return !gn(a, t);
        });
      }
      i(ih, "isOutsideNodeBounds");
      function oh(e, t) {
        var r = [];
        return e.forEach(function(a) {
          if (!(a.width < 1 || a.height < 1)) {
            var n = t.reduce(function(o, l) {
              return o && wn(o, l.boundingClientRect);
            }, a);
            n && r.push(n);
          }
        }), r;
      }
      i(oh, "filterHiddenRects");
      function lh(e) {
        Bt();
        var t = B(e), r = t._grid;
        if (!r)
          return [];
        var a = Hn(e);
        return a.map(function(n) {
          return Cn(r, n);
        });
      }
      i(lh, "getTextElementStack");
      var zn = lh, uh = ["checkbox", "img", "meter", "progressbar", "scrollbar", "radio", "slider", "spinbutton", "textbox"];
      function sh(e) {
        var t = e instanceof Z ? e : B(e), r = g.commons.aria.getExplicitRole(t);
        if (r)
          return uh.indexOf(r) !== -1;
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
      i(sh, "isVisualContent");
      var Un = sh, ch = ["head", "title", "template", "script", "style", "iframe", "object", "video", "audio", "noscript"];
      function su(e) {
        return ch.includes(e.props.nodeName) ? !1 : e.children.some(function(t) {
          var r = t.props;
          return r.nodeType === 3 && r.nodeValue.trim();
        });
      }
      i(su, "hasChildTextNodes");
      function cu(e, t, r) {
        return su(e) || Un(e.actualNode) || !r && !!fa(e) || !t && e.children.some(function(a) {
          return a.actualNode.nodeType === 1 && cu(a);
        });
      }
      i(cu, "hasContentVirtual");
      var Sr = cu;
      function dh(e, t, r) {
        return e = B(e), Sr(e, t, r);
      }
      i(dh, "hasContent");
      var ma = dh;
      function $n(e) {
        return typeof e.children > "u" || su(e) ? !0 : e.props.nodeType === 1 && Un(e) ? !!g.commons.text.accessibleTextVirtual(e) : e.children.some(function(t) {
          return !t.attr("lang") && $n(t) && !At(t);
        });
      }
      i($n, "_hasLangText");
      function fh(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return t > -1 && Ce(e) && !Sn(e);
      }
      i(fh, "insertedIntoFocusOrder");
      var du = fh;
      function fu(e, t) {
        var r = e instanceof Z ? e : B(e), a = e instanceof D.Node ? e : r?.actualNode;
        return r ? (r._isHiddenWithCSS === void 0 && (r._isHiddenWithCSS = pu(a, t)), r._isHiddenWithCSS) : pu(a, t);
      }
      i(fu, "isHiddenWithCSS");
      function pu(e, t) {
        if (e.nodeType === 9 || (e.nodeType === 11 && (e = e.host), ["STYLE", "SCRIPT"].includes(e.nodeName.toUpperCase())))
          return !1;
        var r = D.getComputedStyle(e, null);
        if (!r)
          throw new Error("Style does not exist for the given element.");
        var a = r.getPropertyValue("display");
        if (a === "none")
          return !0;
        var n = ["hidden", "collapse"], o = r.getPropertyValue("visibility");
        if (n.includes(o) && !t || n.includes(o) && t && n.includes(t))
          return !0;
        var l = qe(e);
        return l && !n.includes(o) ? fu(l, o) : !1;
      }
      i(pu, "_isHiddenWithCSS");
      var ph = fu;
      function mh(e) {
        var t = e.doctype;
        return t === null ? !1 : t.name === "html" && !t.publicId && !t.systemId;
      }
      i(mh, "isHTML5");
      var mu = mh;
      function pt(e) {
        var t = e instanceof Z ? e : B(e);
        if (t.props.nodeType !== 1)
          return !1;
        var r = parseInt(t.attr("tabindex", 10));
        return r <= -1 ? !1 : Ce(t);
      }
      i(pt, "_isInTabOrder");
      function hh(e) {
        var t;
        (e instanceof Z || (t = D) !== null && t !== void 0 && t.Node && e instanceof D.Node) && (e = g.commons.aria.getRole(e));
        var r = de.ariaRoles[e];
        return r?.type || null;
      }
      i(hh, "getRoleType");
      var mt = hh;
      function hu(e, t) {
        t(e.actualNode) !== !1 && e.children.forEach(function(r) {
          return hu(r, t);
        });
      }
      i(hu, "walkDomNode");
      var vh = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function vu(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return vh.includes(t) || t.substr(0, 6) === "table-";
      }
      i(vu, "isBlock");
      function gh(e) {
        for (var t = qe(e); t && !vu(t); )
          t = qe(t);
        return B(t);
      }
      i(gh, "getBlockParent");
      function bh(e, t) {
        if (vu(e))
          return !1;
        var r = gh(e), a = "", n = "", o = 0;
        return hu(r, function(l) {
          if (o === 2)
            return !1;
          if (l.nodeType === 3 && (a += l.nodeValue), l.nodeType === 1) {
            var u = (l.nodeName || "").toUpperCase();
            if (l === e && (o = 1), ["BR", "HR"].includes(u))
              o === 0 ? (a = "", n = "") : o = 2;
            else {
              if (l.style.display === "none" || l.style.overflow === "hidden" || !["", null, "none"].includes(l.style.float) || !["", null, "relative"].includes(l.style.position))
                return !1;
              if (mt(l) === "widget")
                return n += l.textContent, !1;
            }
          }
        }), a = Q(a), t != null && t.noLengthCompare ? a.length !== 0 : (n = Q(n), a.length > n.length);
      }
      i(bh, "isInTextBlock");
      var Wn = bh;
      function yh(e) {
        e = e || {};
        var t = e.modalPercent || 0.75;
        if (le.get("isModalOpen"))
          return le.get("isModalOpen");
        var r = ht(g._tree[0], "dialog, [role=dialog], [aria-modal=true]", Je);
        if (r.length)
          return le.set("isModalOpen", !0), !0;
        for (var a = ia(D), n = a.width * t, o = a.height * t, l = (a.width - n) / 2, u = (a.height - o) / 2, s = [{
          x: l,
          y: u
        }, {
          x: a.width - l,
          y: u
        }, {
          x: a.width / 2,
          y: a.height / 2
        }, {
          x: l,
          y: a.height - u
        }, {
          x: a.width - l,
          y: a.height - u
        }], c = s.map(function(m) {
          return Array.from(R.elementsFromPoint(m.x, m.y));
        }), d = /* @__PURE__ */ i(function(h) {
          var y = c[h].find(function(w) {
            var v = D.getComputedStyle(w);
            return parseInt(v.width, 10) >= n && parseInt(v.height, 10) >= o && v.getPropertyValue("pointer-events") !== "none" && (v.position === "absolute" || v.position === "fixed");
          });
          if (y && c.every(function(w) {
            return w.includes(y);
          }))
            return le.set("isModalOpen", !0), {
              v: !0
            };
        }, "_loop4"), f = 0; f < c.length; f++) {
          var p = d(f);
          if (P(p) === "object")
            return p.v;
        }
        le.set("isModalOpen", void 0);
      }
      i(yh, "isModalOpen");
      var Or = yh;
      function gu(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, r = e.ownerDocument.createRange();
        r.setStart(e, 0), r.setEnd(e, e.childNodes.length);
        var a = 0, n = 0, o = Ke(r.getClientRects()), l;
        try {
          for (o.s(); !(l = o.n()).done; ) {
            var u = l.value;
            if (!(u.height <= t))
              if (a > u.top + t)
                a = Math.max(a, u.bottom);
              else if (n === 0)
                a = u.bottom, n++;
              else
                return !0;
          }
        } catch (s) {
          o.e(s);
        } finally {
          o.f();
        }
        return !1;
      }
      i(gu, "_isMultiline");
      function Dh(e) {
        return e instanceof D.Node;
      }
      i(Dh, "isNode");
      var wh = Dh, ha = {}, _h = {
        set: /* @__PURE__ */ i(function(t, r) {
          if (typeof t != "string")
            throw new Error("Incomplete data: key must be a string");
          return r && (ha[t] = r), ha[t];
        }, "set"),
        get: /* @__PURE__ */ i(function(t) {
          return ha[t];
        }, "get"),
        clear: /* @__PURE__ */ i(function() {
          ha = {};
        }, "clear")
      }, Be = _h;
      function xh(e, t) {
        var r = ["IMG", "CANVAS", "OBJECT", "IFRAME", "VIDEO", "SVG"], a = e.nodeName.toUpperCase();
        if (r.includes(a))
          return Be.set("bgColor", "imgNode"), !0;
        t = t || D.getComputedStyle(e);
        var n = t.getPropertyValue("background-image"), o = n !== "none";
        if (o) {
          var l = /gradient/.test(n);
          Be.set("bgColor", l ? "bgGradient" : "bgImage");
        }
        return o;
      }
      i(xh, "elementHasImage");
      var va = xh, bu = /^#[0-9a-f]{3,8}$/i, yu = /^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i, Eh = function() {
        function e(t, r, a) {
          var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
          Wt(this, e), this.red = t, this.green = r, this.blue = a, this.alpha = n;
        }
        return i(e, "Color"), Gt(e, [{
          key: "toHexString",
          value: /* @__PURE__ */ i(function() {
            var r = Math.round(this.red).toString(16), a = Math.round(this.green).toString(16), n = Math.round(this.blue).toString(16);
            return "#" + (this.red > 15.5 ? r : "0" + r) + (this.green > 15.5 ? a : "0" + a) + (this.blue > 15.5 ? n : "0" + n);
          }, "toHexString")
        }, {
          key: "toJSON",
          value: /* @__PURE__ */ i(function() {
            var r = this.red, a = this.green, n = this.blue, o = this.alpha;
            return {
              red: r,
              green: a,
              blue: n,
              alpha: o
            };
          }, "toJSON")
        }, {
          key: "parseString",
          value: /* @__PURE__ */ i(function(r) {
            if (de.cssColors[r] || r === "transparent") {
              var a = de.cssColors[r] || [0, 0, 0], n = ge(a, 3), o = n[0], l = n[1], u = n[2];
              return this.red = o, this.green = l, this.blue = u, this.alpha = r === "transparent" ? 0 : 1, this;
            }
            if (r.match(yu))
              return this.parseColorFnString(r), this;
            if (r.match(bu))
              return this.parseHexString(r), this;
            throw new Error('Unable to parse color "'.concat(r, '"'));
          }, "parseString")
        }, {
          key: "parseRgbString",
          value: /* @__PURE__ */ i(function(r) {
            if (r === "transparent") {
              this.red = 0, this.green = 0, this.blue = 0, this.alpha = 0;
              return;
            }
            this.parseColorFnString(r);
          }, "parseRgbString")
        }, {
          key: "parseHexString",
          value: /* @__PURE__ */ i(function(r) {
            if (!(!r.match(bu) || [6, 8].includes(r.length))) {
              if (r = r.replace("#", ""), r.length < 6) {
                var a = r, n = ge(a, 4), o = n[0], l = n[1], u = n[2], s = n[3];
                r = o + o + l + l + u + u, s && (r += s + s);
              }
              var c = r.match(/.{1,2}/g);
              this.red = parseInt(c[0], 16), this.green = parseInt(c[1], 16), this.blue = parseInt(c[2], 16), c[3] ? this.alpha = parseInt(c[3], 16) / 255 : this.alpha = 1;
            }
          }, "parseHexString")
        }, {
          key: "parseColorFnString",
          value: /* @__PURE__ */ i(function(r) {
            var a = r.match(yu) || [], n = ge(a, 3), o = n[1], l = n[2];
            if (!(!o || !l)) {
              var u = l.split(/\s*[,\/\s]\s*/).map(function(c) {
                return c.replace(",", "").trim();
              }).filter(function(c) {
                return c !== "";
              }), s = u.map(function(c, d) {
                return Ah(o, c, d);
              });
              o.substr(0, 3) === "hsl" && (s = Fh(s)), this.red = s[0], this.green = s[1], this.blue = s[2], this.alpha = typeof s[3] == "number" ? s[3] : 1;
            }
          }, "parseColorFnString")
        }, {
          key: "getRelativeLuminance",
          value: /* @__PURE__ */ i(function() {
            var r = this.red / 255, a = this.green / 255, n = this.blue / 255, o = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), l = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4), u = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
            return 0.2126 * o + 0.7152 * l + 0.0722 * u;
          }, "getRelativeLuminance")
        }]), e;
      }(), ke = Eh;
      function Ah(e, t, r) {
        if (/%$/.test(t))
          return r === 3 ? parseFloat(t) / 100 : parseFloat(t) * 255 / 100;
        if (e[r] === "h") {
          if (/turn$/.test(t))
            return parseFloat(t) * 360;
          if (/rad$/.test(t))
            return parseFloat(t) * 57.3;
        }
        return parseFloat(t);
      }
      i(Ah, "convertColorVal");
      function Fh(e) {
        var t = ge(e, 4), r = t[0], a = t[1], n = t[2], o = t[3];
        a /= 255, n /= 255;
        var l = (1 - Math.abs(2 * n - 1)) * a, u = l * (1 - Math.abs(r / 60 % 2 - 1)), s = n - l / 2, c;
        return r < 60 ? c = [l, u, 0] : r < 120 ? c = [u, l, 0] : r < 180 ? c = [0, l, u] : r < 240 ? c = [0, u, l] : r < 300 ? c = [u, 0, l] : c = [l, 0, u], c.map(function(d) {
          return Math.round((d + s) * 255);
        }).concat(o);
      }
      i(Fh, "hslToRgb");
      function Ch(e) {
        var t = new ke();
        if (t.parseString(e.getPropertyValue("background-color")), t.alpha !== 0) {
          var r = e.getPropertyValue("opacity");
          t.alpha = t.alpha * r;
        }
        return t;
      }
      i(Ch, "getOwnBackgroundColor");
      var Ut = Ch;
      function Th(e) {
        var t = D.getComputedStyle(e);
        return va(e, t) || Ut(t).alpha === 1;
      }
      i(Th, "isOpaque");
      var kh = Th;
      function Gn(e) {
        if (!e.href)
          return !1;
        var t = le.get("firstPageLink", Rh);
        return t ? e.compareDocumentPosition(t.actualNode) === e.DOCUMENT_POSITION_FOLLOWING : !0;
      }
      i(Gn, "_isSkipLink");
      function Rh() {
        var e;
        return D.location.origin ? e = et(g._tree, 'a[href]:not([href^="javascript:"])').find(function(t) {
          return !xn(t.actualNode);
        }) : e = et(g._tree, 'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0], e || null;
      }
      i(Rh, "generateFirstPageLink");
      var Sh = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, Oh = /(\w+)\((\d+)/;
      function Ih(e) {
        var t = e.getPropertyValue("clip").match(Sh), r = e.getPropertyValue("clip-path").match(Oh);
        if (t && t.length === 5) {
          var a = e.getPropertyValue("position");
          if (["fixed", "absolute"].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1], o = parseInt(r[2], 10);
          switch (n) {
            case "inset":
              return o >= 50;
            case "circle":
              return o === 0;
          }
        }
        return !1;
      }
      i(Ih, "isClipped");
      function Ph(e, t, r) {
        var a = rr(e, "map");
        if (!a)
          return !1;
        var n = a.getAttribute("name");
        if (!n)
          return !1;
        var o = He(e);
        if (!o || o.nodeType !== 9)
          return !1;
        var l = et(g._tree, 'img[usemap="#'.concat(Fe(n), '"]'));
        return !l || !l.length ? !1 : l.some(function(u) {
          var s = u.actualNode;
          return ga(s, t, r);
        });
      }
      i(Ph, "isAreaVisible");
      function ga(e, t, r) {
        var a;
        if (!e)
          throw new TypeError("Cannot determine if element is visible for non-DOM nodes");
        var n = e instanceof Z ? e : B(e);
        e = n ? n.actualNode : e;
        var o = "_isVisible" + (t ? "ScreenReader" : ""), l = (a = D.Node) !== null && a !== void 0 ? a : {}, u = l.DOCUMENT_NODE, s = l.DOCUMENT_FRAGMENT_NODE, c = n ? n.props.nodeType : e.nodeType, d = n ? n.props.nodeName : e.nodeName.toLowerCase();
        if (n && typeof n[o] < "u")
          return n[o];
        if (c === u)
          return !0;
        if (["style", "script", "noscript", "template"].includes(d))
          return !1;
        if (e && c === s && (e = e.host), t) {
          var f = n ? n.attr("aria-hidden") : e.getAttribute("aria-hidden");
          if (f === "true")
            return !1;
        }
        if (!e) {
          var p = n.parent, m = !0;
          return p && (m = ga(p, t, !0)), n && (n[o] = m), m;
        }
        var h = D.getComputedStyle(e, null);
        if (h === null)
          return !1;
        if (d === "area")
          return Ph(e, t, r);
        if (h.getPropertyValue("display") === "none")
          return !1;
        var y = parseInt(h.getPropertyValue("height")), w = parseInt(h.getPropertyValue("width")), v = wt(e), b = v && y === 0, E = v && w === 0, A = h.getPropertyValue("position") === "absolute" && (y < 2 || w < 2) && h.getPropertyValue("overflow") === "hidden";
        if (!t && (Ih(h) || h.getPropertyValue("opacity") === "0" || b || E || A) || !r && (h.getPropertyValue("visibility") === "hidden" || !t && oa(e)))
          return !1;
        var T = e.assignedSlot ? e.assignedSlot : e.parentNode, M = !1;
        return T && (M = ga(T, t, !0)), n && (n[o] = M), M;
      }
      i(ga, "isVisible");
      var Mh = ga;
      function Nh(e, t) {
        for (var r = ["fixed", "sticky"], a = [], n = !1, o = 0; o < e.length; ++o) {
          var l = e[o];
          l === t && (n = !0);
          var u = D.getComputedStyle(l);
          if (!n && r.indexOf(u.position) !== -1) {
            a = [];
            continue;
          }
          a.push(l);
        }
        return a;
      }
      i(Nh, "reduceToElementsBelowFloating");
      var Du = Nh;
      function wu(e, t) {
        var r = _u(t);
        do {
          var a = _u(e);
          if (a === r || a === t)
            return qh(e, t);
          e = a;
        } while (e);
        return !1;
      }
      i(wu, "_visuallyContains");
      function _u(e) {
        for (var t = B(e), r = t.parent; r; ) {
          if (wt(r.actualNode))
            return r.actualNode;
          r = r.parent;
        }
      }
      i(_u, "getScrollAncestor");
      function qh(e, t) {
        var r = D.getComputedStyle(t), a = r.getPropertyValue("overflow");
        if (r.getPropertyValue("display") === "inline")
          return !0;
        var n = Array.from(e.getClientRects()), o = t.getBoundingClientRect(), l = {
          left: o.left,
          top: o.top,
          width: o.width,
          height: o.height
        };
        return (["scroll", "auto"].includes(a) || t instanceof D.HTMLHtmlElement) && (l.width = t.scrollWidth, l.height = t.scrollHeight), n.length === 1 && a === "hidden" && r.getPropertyValue("white-space") === "nowrap" && (n[0] = l), n.some(function(u) {
          return !(Math.ceil(u.left) < Math.floor(l.left) || Math.ceil(u.top) < Math.floor(l.top) || Math.floor(u.left + u.width) > Math.ceil(l.left + l.width) || Math.floor(u.top + u.height) > Math.ceil(l.top + l.height));
        });
      }
      i(qh, "contains2");
      function xu(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : R, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        if (a > 999)
          throw new Error("Infinite loop detected");
        return Array.from(r.elementsFromPoint(e, t) || []).filter(function(n) {
          return He(n) === r;
        }).reduce(function(n, o) {
          if (na(o)) {
            var l = xu(e, t, o.shadowRoot, a + 1);
            n = n.concat(l), n.length && wu(n[0], o) && n.push(o);
          } else
            n.push(o);
          return n;
        }, []);
      }
      i(xu, "shadowElementsFromPoint");
      var Bh = xu;
      function Lh(e, t) {
        if (!!e.hasAttribute(t)) {
          var r = e.nodeName.toUpperCase(), a = e;
          (!["A", "AREA"].includes(r) || e.ownerSVGElement) && (a = R.createElement("a"), a.href = e.getAttribute(t));
          var n = ["https:", "ftps:"].includes(a.protocol) ? a.protocol.replace(/s:$/, ":") : a.protocol, o = /^\//.test(a.pathname) ? a.pathname : "/".concat(a.pathname), l = jh(o), u = l.pathname, s = l.filename;
          return {
            protocol: n,
            hostname: a.hostname,
            port: Vh(a.port),
            pathname: /\/$/.test(u) ? u : "".concat(u, "/"),
            search: Hh(a.search),
            hash: zh(a.hash),
            filename: s
          };
        }
      }
      i(Lh, "urlPropsFromAttribute");
      function Vh(e) {
        var t = ["443", "80"];
        return t.includes(e) ? "" : e;
      }
      i(Vh, "getPort");
      function jh(e) {
        var t = e.split("/").pop();
        return !t || t.indexOf(".") === -1 ? {
          pathname: e,
          filename: ""
        } : {
          pathname: e.replace(t, ""),
          filename: /index./.test(t) ? "" : t
        };
      }
      i(jh, "getPathnameOrFilename");
      function Hh(e) {
        var t = {};
        if (!e || !e.length)
          return t;
        var r = e.substring(1).split("&");
        if (!r || !r.length)
          return t;
        for (var a = 0; a < r.length; a++) {
          var n = r[a], o = n.split("="), l = ge(o, 2), u = l[0], s = l[1], c = s === void 0 ? "" : s;
          t[decodeURIComponent(u)] = decodeURIComponent(c);
        }
        return t;
      }
      i(Hh, "getSearchPairs");
      function zh(e) {
        if (!e)
          return "";
        var t = /#!?\/?/g, r = e.match(t);
        if (!r)
          return "";
        var a = ge(r, 1), n = a[0];
        return n === "#" ? "" : e;
      }
      i(zh, "getHashRoute");
      var Uh = Lh;
      function $h(e, t) {
        var r = t.getBoundingClientRect(), a = r.top, n = r.left, o = {
          top: a - t.scrollTop,
          bottom: a - t.scrollTop + t.scrollHeight,
          left: n - t.scrollLeft,
          right: n - t.scrollLeft + t.scrollWidth
        };
        if (e.left > o.right && e.left > r.right || e.top > o.bottom && e.top > r.bottom || e.right < o.left && e.right < r.left || e.bottom < o.top && e.bottom < r.top)
          return !1;
        var l = D.getComputedStyle(t);
        return e.left > r.right || e.top > r.bottom ? l.overflow === "scroll" || l.overflow === "auto" || t instanceof D.HTMLBodyElement || t instanceof D.HTMLHtmlElement : !0;
      }
      i($h, "visuallyOverlaps");
      var Yn = $h, Kn, Eu = 0, Wh = function(e) {
        Li(r, e);
        var t = Vi(r);
        function r(a, n, o) {
          var l;
          if (Wt(this, r), l = t.call(this), l.shadowId = o, l.children = [], l.actualNode = a, l.parent = n, n || (Eu = 0), l.nodeIndex = Eu++, l._isHidden = null, l._cache = {}, typeof Kn > "u" && (Kn = Yr(a.ownerDocument)), l._isXHTML = Kn, a.nodeName.toLowerCase() === "input") {
            var u = a.getAttribute("type");
            u = l._isXHTML ? u : (u || "").toLowerCase(), xa().includes(u) || (u = "text"), l._type = u;
          }
          return le.get("nodeMap") && le.get("nodeMap").set(a, ji(l)), l;
        }
        return i(r, "VirtualNode"), Gt(r, [{
          key: "props",
          get: /* @__PURE__ */ i(function() {
            if (!this._cache.hasOwnProperty("props")) {
              var n = this.actualNode, o = n.nodeType, l = n.nodeName, u = n.id, s = n.multiple, c = n.nodeValue, d = n.value, f = n.selected;
              this._cache.props = {
                nodeType: o,
                nodeName: this._isXHTML ? l : l.toLowerCase(),
                id: u,
                type: this._type,
                multiple: s,
                nodeValue: c,
                value: d,
                selected: f
              };
            }
            return this._cache.props;
          }, "get")
        }, {
          key: "attr",
          value: /* @__PURE__ */ i(function(n) {
            return typeof this.actualNode.getAttribute != "function" ? null : this.actualNode.getAttribute(n);
          }, "attr")
        }, {
          key: "hasAttr",
          value: /* @__PURE__ */ i(function(n) {
            return typeof this.actualNode.hasAttribute != "function" ? !1 : this.actualNode.hasAttribute(n);
          }, "hasAttr")
        }, {
          key: "attrNames",
          get: /* @__PURE__ */ i(function() {
            if (!this._cache.hasOwnProperty("attrNames")) {
              var n;
              this.actualNode.attributes instanceof D.NamedNodeMap ? n = this.actualNode.attributes : n = this.actualNode.cloneNode(!1).attributes, this._cache.attrNames = Array.from(n).map(function(o) {
                return o.name;
              });
            }
            return this._cache.attrNames;
          }, "get")
        }, {
          key: "getComputedStylePropertyValue",
          value: /* @__PURE__ */ i(function(n) {
            var o = "computedStyle_" + n;
            return this._cache.hasOwnProperty(o) || (this._cache.hasOwnProperty("computedStyle") || (this._cache.computedStyle = D.getComputedStyle(this.actualNode)), this._cache[o] = this._cache.computedStyle.getPropertyValue(n)), this._cache[o];
          }, "getComputedStylePropertyValue")
        }, {
          key: "isFocusable",
          get: /* @__PURE__ */ i(function() {
            return this._cache.hasOwnProperty("isFocusable") || (this._cache.isFocusable = Ce(this.actualNode)), this._cache.isFocusable;
          }, "get")
        }, {
          key: "tabbableElements",
          get: /* @__PURE__ */ i(function() {
            return this._cache.hasOwnProperty("tabbableElements") || (this._cache.tabbableElements = xl(this)), this._cache.tabbableElements;
          }, "get")
        }, {
          key: "clientRects",
          get: /* @__PURE__ */ i(function() {
            return this._cache.hasOwnProperty("clientRects") || (this._cache.clientRects = Array.from(this.actualNode.getClientRects()).filter(function(n) {
              return n.width > 0;
            })), this._cache.clientRects;
          }, "get")
        }, {
          key: "boundingClientRect",
          get: /* @__PURE__ */ i(function() {
            return this._cache.hasOwnProperty("boundingClientRect") || (this._cache.boundingClientRect = this.actualNode.getBoundingClientRect()), this._cache.boundingClientRect;
          }, "get")
        }]), r;
      }(Z), Xn = Wh;
      function Gh(e) {
        return (e || "").trim().replace(/\s{2,}/g, " ").split(" ");
      }
      i(Gh, "tokenList");
      var ze = Gh, lr = " [idsMap]";
      function Au(e, t, r) {
        var a = e[0]._selectorMap;
        if (!!a) {
          for (var n = e[0].shadowId, o = 0; o < t.length; o++)
            if (t[o].length > 1 && t[o].some(function(s) {
              return Fu(s);
            }))
              return;
          var l = /* @__PURE__ */ new Set();
          t.forEach(function(s) {
            var c, d = Yh(s, a, n);
            d == null || (c = d.nodes) === null || c === void 0 || c.forEach(function(f) {
              d.isComplexSelector && !Jt(f, s) || l.add(f);
            });
          });
          var u = [];
          return l.forEach(function(s) {
            return u.push(s);
          }), r && (u = u.filter(r)), u.sort(function(s, c) {
            return s.nodeIndex - c.nodeIndex;
          });
        }
      }
      i(Au, "getNodesMatchingExpression");
      function Yh(e, t, r) {
        var a = e[e.length - 1], n = null, o = e.length > 1 || !!a.pseudos || !!a.classes;
        if (Fu(a))
          n = t["*"];
        else {
          if (a.id) {
            var l;
            if (!t[lr] || !((l = t[lr][a.id]) !== null && l !== void 0 && l.length))
              return;
            n = t[lr][a.id].filter(function(y) {
              return y.shadowId === r;
            });
          }
          if (a.tag && a.tag !== "*") {
            var u;
            if (!((u = t[a.tag]) !== null && u !== void 0 && u.length))
              return;
            var s = t[a.tag];
            n = n ? Jn(s, n) : s;
          }
          if (a.classes) {
            var c;
            if (!((c = t["[class]"]) !== null && c !== void 0 && c.length))
              return;
            var d = t["[class]"];
            n = n ? Jn(d, n) : d;
          }
          if (a.attributes)
            for (var f = 0; f < a.attributes.length; f++) {
              var p, m = a.attributes[f];
              if (m.type === "attrValue" && (o = !0), !((p = t["[".concat(m.key, "]")]) !== null && p !== void 0 && p.length))
                return;
              var h = t["[".concat(m.key, "]")];
              n = n ? Jn(h, n) : h;
            }
        }
        return {
          nodes: n,
          isComplexSelector: o
        };
      }
      i(Yh, "findMatchingNodes");
      function Fu(e) {
        return e.tag === "*" && !e.attributes && !e.id && !e.classes;
      }
      i(Fu, "isGlobalSelector");
      function Jn(e, t) {
        return e.filter(function(r) {
          return t.includes(r);
        });
      }
      i(Jn, "getSharedValues");
      function ba(e, t, r) {
        r[e] = r[e] || [], r[e].push(t);
      }
      i(ba, "cacheSelector");
      function Cu(e, t) {
        e.props.nodeType === 1 && (ba(e.props.nodeName, e, t), ba("*", e, t), e.attrNames.forEach(function(r) {
          r === "id" && (t[lr] = t[lr] || {}, ze(e.attr(r)).forEach(function(a) {
            ba(a, e, t[lr]);
          })), ba("[".concat(r, "]"), e, t);
        }));
      }
      i(Cu, "cacheNodeSelectors");
      var Qn;
      function Kh(e) {
        var t = [];
        for (e = e.firstChild; e; )
          t.push(e), e = e.nextSibling;
        return t;
      }
      i(Kh, "getSlotChildren");
      function Zn(e, t, r) {
        var a = new Xn(e, t, r);
        return Cu(a, le.get("selectorMap")), a;
      }
      i(Zn, "createNode");
      function Tu(e, t, r) {
        var a, n, o;
        function l(u, s, c) {
          var d = Tu(s, t, c);
          return d && (u = u.concat(d)), u;
        }
        return i(l, "reduceShadowDOM"), e.documentElement && (e = e.documentElement), o = e.nodeName.toLowerCase(), na(e) ? (Qn = !0, a = Zn(e, r, t), t = "a" + Math.random().toString().substring(2), n = Array.from(e.shadowRoot.childNodes), a.children = n.reduce(function(u, s) {
          return l(u, s, a);
        }, []), [a]) : o === "content" && typeof e.getDistributedNodes == "function" ? (n = Array.from(e.getDistributedNodes()), n.reduce(function(u, s) {
          return l(u, s, r);
        }, [])) : o === "slot" && typeof e.assignedNodes == "function" ? (n = Array.from(e.assignedNodes()), n.length || (n = Kh(e)), D.getComputedStyle(e), n.reduce(function(u, s) {
          return l(u, s, r);
        }, [])) : e.nodeType === 1 ? (a = Zn(e, r, t), n = Array.from(e.childNodes), a.children = n.reduce(function(u, s) {
          return l(u, s, a);
        }, []), [a]) : e.nodeType === 3 ? [Zn(e, r)] : void 0;
      }
      i(Tu, "flattenTree");
      function Xh() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : R.documentElement, t = arguments.length > 1 ? arguments[1] : void 0;
        Qn = !1;
        var r = {};
        le.set("nodeMap", /* @__PURE__ */ new WeakMap()), le.set("selectorMap", r);
        var a = Tu(e, t, null);
        return a[0]._selectorMap = r, a[0]._hasShadowRoot = Qn, a;
      }
      i(Xh, "getFlattenedTree");
      var ei = Xh;
      function Jh(e) {
        return e ? e.trim().split("-")[0].toLowerCase() : "";
      }
      i(Jh, "getBaseLang");
      var $t = Jh;
      function Qh(e) {
        var t = {};
        return t.none = e.none.concat(e.all), t.any = e.any, Object.keys(t).map(function(r) {
          if (!!t[r].length) {
            var a = g._audit.data.failureSummaries[r];
            if (a && typeof a.failureMessage == "function")
              return a.failureMessage(t[r].map(function(n) {
                return n.message || "";
              }));
          }
        }).filter(function(r) {
          return r !== void 0;
        }).join(`

`);
      }
      i(Qh, "failureSummary");
      var ti = Qh;
      function ri() {
        var e = g._audit.data.incompleteFallbackMessage;
        return typeof e == "function" && (e = e()), typeof e != "string" ? "" : e;
      }
      i(ri, "incompleteFallbackMessage");
      function Zh(e, t) {
        ["any", "all", "none"].forEach(function(r) {
          !Array.isArray(e[r]) || e[r].filter(function(a) {
            return Array.isArray(a.relatedNodes);
          }).forEach(function(a) {
            a.relatedNodes = a.relatedNodes.map(function(n) {
              var o, l = {
                html: (o = n?.source) !== null && o !== void 0 ? o : "Undefined"
              };
              if (t.elementRef && !(n != null && n.fromFrame)) {
                var u;
                l.element = (u = n?.element) !== null && u !== void 0 ? u : null;
              }
              if (t.selectors !== !1 || n != null && n.fromFrame) {
                var s;
                l.target = (s = n?.selector) !== null && s !== void 0 ? s : [":root"];
              }
              if (t.ancestry) {
                var c;
                l.ancestry = (c = n?.ancestry) !== null && c !== void 0 ? c : [":root"];
              }
              if (t.xpath) {
                var d;
                l.xpath = (d = n?.xpath) !== null && d !== void 0 ? d : ["/"];
              }
              return l;
            });
          });
        });
      }
      i(Zh, "normalizeRelatedNodes");
      var ku = ee.resultGroups;
      function ev(e, t) {
        var r = g.utils.aggregateResult(e);
        return ku.forEach(function(a) {
          t.resultTypes && !t.resultTypes.includes(a) && (r[a] || []).forEach(function(n) {
            Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = [n.nodes[0]]);
          }), r[a] = (r[a] || []).map(function(n) {
            return n = Object.assign({}, n), Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = n.nodes.map(function(o) {
              return P(o.node) === "object" && (o.html = o.node.source, t.elementRef && !o.node.fromFrame && (o.element = o.node.element), (t.selectors !== !1 || o.node.fromFrame) && (o.target = o.node.selector), t.ancestry && (o.ancestry = o.node.ancestry), t.xpath && (o.xpath = o.node.xpath)), delete o.result, delete o.node, Zh(o, t), o;
            })), ku.forEach(function(o) {
              return delete n[o];
            }), delete n.pageLevel, delete n.result, n;
          });
        }), r;
      }
      i(ev, "processAggregate");
      var Ir = ev, tv = /\$\{\s?data\s?\}/g;
      function ya(e, t) {
        if (typeof t == "string")
          return e.replace(tv, t);
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var a = new RegExp("\\${\\s?data\\." + r + "\\s?}", "g"), n = typeof t[r] > "u" ? "" : String(t[r]);
            e = e.replace(a, n);
          }
        return e;
      }
      i(ya, "substitute");
      function Ru(e, t) {
        if (!!e) {
          if (Array.isArray(t)) {
            if (t.values = t.join(", "), typeof e.singular == "string" && typeof e.plural == "string") {
              var r = t.length === 1 ? e.singular : e.plural;
              return ya(r, t);
            }
            return ya(e, t);
          }
          if (typeof e == "string")
            return ya(e, t);
          if (typeof t == "string") {
            var a = e[t];
            return ya(a, t);
          }
          var n = e.default || ri();
          return t && t.messageKey && e[t.messageKey] && (n = e[t.messageKey]), Ru(n, t);
        }
      }
      i(Ru, "processMessage");
      var ai = Ru;
      function rv(e, t, r) {
        var a = g._audit.data.checks[e];
        if (!a)
          throw new Error("Cannot get message for unknown check: ".concat(e, "."));
        if (!a.messages[t])
          throw new Error('Check "'.concat(e, '"" does not have a "').concat(t, '" message.'));
        return ai(a.messages[t], r);
      }
      i(rv, "getCheckMessage");
      var av = rv;
      function nv(e, t, r) {
        var a = ((r.rules && r.rules[t] || {}).checks || {})[e.id], n = (r.checks || {})[e.id], o = e.enabled, l = e.options;
        return n && (n.hasOwnProperty("enabled") && (o = n.enabled), n.hasOwnProperty("options") && (l = n.options)), a && (a.hasOwnProperty("enabled") && (o = a.enabled), a.hasOwnProperty("options") && (l = a.options)), {
          enabled: o,
          options: l,
          absolutePaths: r.absolutePaths
        };
      }
      i(nv, "getCheckOption");
      var Da = nv;
      function Ct() {
        var e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : D;
        return t && P(t) === "object" ? t : P(r) !== "object" ? {} : {
          testEngine: {
            name: "axe-core",
            version: g.version
          },
          testRunner: {
            name: g._audit.brand
          },
          testEnvironment: iv(r),
          timestamp: new Date().toISOString(),
          url: (e = r.location) === null || e === void 0 ? void 0 : e.href
        };
      }
      i(Ct, "_getEnvironmentData");
      function iv(e) {
        if (!e.navigator || P(e.navigator) !== "object")
          return {};
        var t = e.navigator, r = e.innerHeight, a = e.innerWidth, n = ov(e) || {}, o = n.angle, l = n.type;
        return {
          userAgent: t.userAgent,
          windowWidth: a,
          windowHeight: r,
          orientationAngle: o,
          orientationType: l
        };
      }
      i(iv, "getTestEnvironment");
      function ov(e) {
        var t = e.screen;
        return t.orientation || t.msOrientation || t.mozOrientation;
      }
      i(ov, "getOrientation");
      function Su(e, t) {
        var r = t.focusable, a = t.page;
        return {
          node: e,
          include: [],
          exclude: [],
          initiator: !1,
          focusable: r && lv(e),
          size: uv(e),
          page: a
        };
      }
      i(Su, "createFrameContext");
      function lv(e) {
        var t = e.getAttribute("tabindex");
        if (!t)
          return !0;
        var r = parseInt(t, 10);
        return isNaN(r) || r >= 0;
      }
      i(lv, "frameFocusable");
      function uv(e) {
        var t = parseInt(e.getAttribute("width"), 10), r = parseInt(e.getAttribute("height"), 10);
        if (isNaN(t) || isNaN(r)) {
          var a = e.getBoundingClientRect();
          t = isNaN(t) ? a.width : t, r = isNaN(r) ? a.height : r;
        }
        return {
          width: t,
          height: r
        };
      }
      i(uv, "getBoundingSize");
      function sv(e) {
        if (Iu(e)) {
          var t = " must be used inside include or exclude. It should not be on the same object.";
          Tt(!Dt(e, "fromFrames"), "fromFrames" + t), Tt(!Dt(e, "fromShadowDom"), "fromShadowDom" + t);
        } else if (ni(e))
          e = {
            include: e,
            exclude: []
          };
        else
          return {
            include: [R],
            exclude: []
          };
        var r = Ou(e.include);
        r.length === 0 && r.push(R);
        var a = Ou(e.exclude);
        return {
          include: r,
          exclude: a
        };
      }
      i(sv, "normalizeContext");
      function cv(e) {
        return Iu(e) || ni(e);
      }
      i(cv, "isContextSpec");
      function Ou() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [];
        Mu(e) || (e = [e]);
        for (var r = 0; r < e.length; r++) {
          var a = dv(e[r]);
          a && t.push(a);
        }
        return t;
      }
      i(Ou, "normalizeContextList");
      function dv(e) {
        return e instanceof D.Node ? e : typeof e == "string" ? [e] : (Pu(e) ? (pv(e), e = e.fromFrames) : ii(e) && (e = [e]), fv(e));
      }
      i(dv, "normalizeContextSelector");
      function fv(e) {
        if (!!Array.isArray(e)) {
          var t = [], r = Ke(e), a;
          try {
            for (r.s(); !(a = r.n()).done; ) {
              var n = a.value;
              if (ii(n) && (mv(n), n = n.fromShadowDom), typeof n != "string" && !hv(n))
                return;
              t.push(n);
            }
          } catch (o) {
            r.e(o);
          } finally {
            r.f();
          }
          return t;
        }
      }
      i(fv, "normalizeFrameSelectors");
      function Iu(e) {
        return ["include", "exclude"].some(function(t) {
          return Dt(e, t) && ni(e[t]);
        });
      }
      i(Iu, "isContextObject");
      function ni(e) {
        return typeof e == "string" || e instanceof D.Node || Pu(e) || ii(e) || Mu(e);
      }
      i(ni, "isContextProp");
      function Pu(e) {
        return Dt(e, "fromFrames");
      }
      i(Pu, "isLabelledFramesSelector");
      function ii(e) {
        return Dt(e, "fromShadowDom");
      }
      i(ii, "isLabelledShadowDomSelector");
      function pv(e) {
        Tt(Array.isArray(e.fromFrames), "fromFrames property must be an array"), Tt(e.fromFrames.every(function(t) {
          return !Dt(t, "fromFrames");
        }), "Invalid context; fromFrames selector must be appended, rather than nested"), Tt(!Dt(e, "fromShadowDom"), "fromFrames and fromShadowDom cannot be used on the same object");
      }
      i(pv, "assertLabelledFrameSelector");
      function mv(e) {
        Tt(Array.isArray(e.fromShadowDom), "fromShadowDom property must be an array"), Tt(e.fromShadowDom.every(function(t) {
          return !Dt(t, "fromFrames");
        }), "shadow selector must be inside fromFrame instead"), Tt(e.fromShadowDom.every(function(t) {
          return !Dt(t, "fromShadowDom");
        }), "fromShadowDom selector must be appended, rather than nested");
      }
      i(mv, "assertLabelledShadowDomSelector");
      function hv(e) {
        return Array.isArray(e) && e.every(function(t) {
          return typeof t == "string";
        });
      }
      i(hv, "isShadowSelector");
      function Mu(e) {
        return e && P(e) === "object" && typeof e.length == "number" && !(e instanceof D.Node);
      }
      i(Mu, "isArrayLike");
      function Tt(e, t) {
        pe(e, "Invalid context; ".concat(t, `
See: https://github.com/dequelabs/axe-core/blob/master/doc/context.md`));
      }
      i(Tt, "assert2");
      function Dt(e, t) {
        return !e || P(e) !== "object" ? !1 : Object.prototype.hasOwnProperty.call(e, t);
      }
      i(Dt, "objectHasOwn");
      function Nu(e, t) {
        for (var r = [], a = 0, n = e[t].length; a < n; a++) {
          var o = e[t][a];
          if (o instanceof D.Node)
            o.documentElement instanceof D.Node ? r.push(e.flatTree[0]) : r.push(B(o));
          else if (o && o.length)
            if (o.length > 1)
              vv(e, t, o);
            else {
              var l = mi(o[0]);
              r.push.apply(r, ae(l.map(function(u) {
                return B(u);
              })));
            }
        }
        return r.filter(function(u) {
          return u;
        });
      }
      i(Nu, "parseSelectorArray");
      function vv(e, t, r) {
        e.frames = e.frames || [];
        var a = r.shift(), n = mi(a);
        n.forEach(function(o) {
          var l = e.frames.find(function(u) {
            return u.node === o;
          });
          l || (l = Su(o, e), e.frames.push(l)), l[t].push(r);
        });
      }
      i(vv, "pushUniqueFrameSelector");
      function wa(e, t) {
        var r, a, n, o, l = this;
        e = bt(e), this.frames = [], this.page = typeof ((r = e) === null || r === void 0 ? void 0 : r.page) == "boolean" ? e.page : void 0, this.initiator = typeof ((a = e) === null || a === void 0 ? void 0 : a.initiator) == "boolean" ? e.initiator : !0, this.focusable = typeof ((n = e) === null || n === void 0 ? void 0 : n.focusable) == "boolean" ? e.focusable : !0, this.size = P((o = e) === null || o === void 0 ? void 0 : o.size) === "object" ? e.size : {}, e = sv(e), this.flatTree = t ?? ei(Dv(e)), this.exclude = e.exclude, this.include = e.include, this.include = Nu(this, "include"), this.exclude = Nu(this, "exclude"), pi("frame, iframe", this).forEach(function(u) {
          li(u, l) && gv(l, u.actualNode);
        }), typeof this.page > "u" && (this.page = bv(this), this.frames.forEach(function(u) {
          u.page = l.page;
        })), yv(this), Array.isArray(this.include) || (this.include = Array.from(this.include)), this.include.sort(si);
      }
      i(wa, "Context");
      function gv(e, t) {
        !xe(t) || _r(e.frames, "node", t) || e.frames.push(Su(t, e));
      }
      i(gv, "pushUniqueFrame");
      function bv(e) {
        var t = e.include;
        return t.length === 1 && t[0].actualNode === R.documentElement;
      }
      i(bv, "isPageContext");
      function yv(e) {
        if (e.include.length === 0 && e.frames.length === 0) {
          var t = ut.isInFrame() ? "frame" : "page";
          throw new Error("No elements found for include in " + t + " Context");
        }
      }
      i(yv, "validateContext");
      function Dv(e) {
        for (var t = e.include, r = e.exclude, a = Array.from(t).concat(Array.from(r)), n = 0; n < a.length; n++) {
          var o = a[n];
          if (o instanceof D.Element)
            return o.ownerDocument.documentElement;
          if (o instanceof D.Document)
            return o.documentElement;
        }
        return R.documentElement;
      }
      i(Dv, "getRootNode2");
      function wv(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t.iframes === !1)
          return [];
        var r = new wa(e), a = r.frames;
        return a.map(function(n) {
          var o = n.node, l = je(n, Sc);
          l.initiator = !1;
          var u = Xr(o);
          return {
            frameSelector: u,
            frameContext: l
          };
        });
      }
      i(wv, "_getFrameContexts");
      function _v(e) {
        var t = g._audit.rules.find(function(r) {
          return r.id === e;
        });
        if (!t)
          throw new Error("Cannot find rule by id: ".concat(e));
        return t;
      }
      i(_v, "getRule");
      var qu = _v;
      function wt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = e.scrollWidth > e.clientWidth + t, a = e.scrollHeight > e.clientHeight + t;
        if (!!(r || a)) {
          var n = D.getComputedStyle(e), o = Bu(n, "overflow-x"), l = Bu(n, "overflow-y");
          if (r && o || a && l)
            return {
              elm: e,
              top: e.scrollTop,
              left: e.scrollLeft
            };
        }
      }
      i(wt, "_getScroll");
      function Bu(e, t) {
        var r = e.getPropertyValue(t);
        return ["scroll", "auto"].includes(r);
      }
      i(Bu, "isScrollable");
      function Lu(e) {
        return Array.from(e.children || e.childNodes || []).reduce(function(t, r) {
          var a = wt(r);
          return a && t.push(a), t.concat(Lu(r));
        }, []);
      }
      i(Lu, "getElmScrollRecursive");
      function xv() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D, t = e.document.documentElement, r = [e.pageXOffset !== void 0 ? {
          elm: e,
          top: e.pageYOffset,
          left: e.pageXOffset
        } : {
          elm: t,
          top: t.scrollTop,
          left: t.scrollLeft
        }];
        return r.concat(Lu(R.body));
      }
      i(xv, "getScrollState");
      var Ev = xv;
      function Av() {
        return bt(de);
      }
      i(Av, "_getStandards");
      function Fv(e) {
        if (!e)
          throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument");
        return function(t) {
          var r = t.data, a = t.isCrossOrigin, n = a === void 0 ? !1 : a, o = t.shadowId, l = t.root, u = t.priority, s = t.isLink, c = s === void 0 ? !1 : s, d = e.createElement("style");
          if (c) {
            var f = e.createTextNode('@import "'.concat(r.href, '"'));
            d.appendChild(f);
          } else
            d.appendChild(e.createTextNode(r));
          return e.head.appendChild(d), {
            sheet: d.sheet,
            isCrossOrigin: n,
            shadowId: o,
            root: l,
            priority: u
          };
        };
      }
      i(Fv, "getStyleSheetFactory");
      var Vu = Fv, Ze;
      function Cv(e) {
        if (Ze && Ze.parentNode)
          return Ze.styleSheet === void 0 ? Ze.appendChild(R.createTextNode(e)) : Ze.styleSheet.cssText += e, Ze;
        if (!!e) {
          var t = R.head || R.getElementsByTagName("head")[0];
          return Ze = R.createElement("style"), Ze.type = "text/css", Ze.styleSheet === void 0 ? Ze.appendChild(R.createTextNode(e)) : Ze.styleSheet.cssText = e, t.appendChild(Ze), Ze;
        }
      }
      i(Cv, "injectStyle");
      var Tv = Cv;
      function ju(e, t) {
        var r = B(e);
        if (e.nodeType === 9)
          return !1;
        if (e.nodeType === 11 && (e = e.host), r && r._isHidden !== null)
          return r._isHidden;
        var a = D.getComputedStyle(e, null);
        if (!a || !e.parentNode || a.getPropertyValue("display") === "none" || !t && a.getPropertyValue("visibility") === "hidden" || e.getAttribute("aria-hidden") === "true")
          return !0;
        var n = e.assignedSlot ? e.assignedSlot : e.parentNode, o = ju(n, !0);
        return r && (r._isHidden = o), o;
      }
      i(ju, "isHidden");
      var kv = ju;
      function Rv(e) {
        var t, r, a = (t = (r = e.props) === null || r === void 0 ? void 0 : r.nodeName) !== null && t !== void 0 ? t : e.nodeName.toLowerCase();
        return e.namespaceURI === "http://www.w3.org/2000/svg" ? !1 : !!de.htmlElms[a];
      }
      i(Rv, "isHtmlElement");
      var oi = Rv;
      function li(e, t) {
        var r = t.include, a = r === void 0 ? [] : r, n = t.exclude, o = n === void 0 ? [] : n, l = a.filter(function(d) {
          return qt(d, e);
        });
        if (l.length === 0)
          return !1;
        var u = o.filter(function(d) {
          return qt(d, e);
        });
        if (u.length === 0)
          return !0;
        var s = Hu(l), c = Hu(u);
        return qt(c, s);
      }
      i(li, "_isNodeInContext");
      function Hu(e) {
        var t, r = Ke(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value;
            (!t || !qt(n, t)) && (t = n);
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
        return t;
      }
      i(Hu, "getDeepest");
      function Sv(e, t) {
        return e.length !== t.length ? !1 : e.every(function(r, a) {
          var n = t[a];
          return Array.isArray(r) ? r.length !== n.length ? !1 : r.every(function(o, l) {
            return n[l] === o;
          }) : r === n;
        });
      }
      i(Sv, "matchAncestry");
      var ui = Sv;
      function Ov(e, t) {
        return e = e.actualNode || e, t = t.actualNode || t, e === t ? 0 : e.compareDocumentPosition(t) & 4 ? -1 : 1;
      }
      i(Ov, "nodeSorter");
      var si = Ov;
      function Iv(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, o = Array.from(e.cssRules);
        if (!o)
          return Promise.resolve();
        var l = o.filter(function(d) {
          return d.type === 3;
        });
        if (!l.length)
          return Promise.resolve({
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId,
            sheet: e
          });
        var u = l.filter(function(d) {
          return d.href;
        }).map(function(d) {
          return d.href;
        }).filter(function(d) {
          return !a.includes(d);
        }), s = u.map(function(d, f) {
          var p = [].concat(ae(r), [f]), m = /^https?:\/\/|^\/\//i.test(d);
          return di(d, t, p, a, m);
        }), c = o.filter(function(d) {
          return d.type !== 3;
        });
        return c.length && s.push(Promise.resolve(t.convertDataToStylesheet({
          data: c.map(function(d) {
            return d.cssText;
          }).join(),
          isCrossOrigin: n,
          priority: r,
          root: t.rootNode,
          shadowId: t.shadowId
        }))), Promise.all(s);
      }
      i(Iv, "parseSameOriginStylesheet");
      var zu = Iv;
      function Pv(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, o = Mv(e);
        return o ? zu(e, t, r, a, n) : di(e.href, t, r, a, !0);
      }
      i(Pv, "parseStylesheet");
      function Mv(e) {
        try {
          var t = e.cssRules;
          return !(!t && e.href);
        } catch {
          return !1;
        }
      }
      i(Mv, "isSameOriginStylesheet");
      var ci = Pv;
      function Nv(e, t, r, a, n) {
        return a.push(e), new Promise(function(o, l) {
          var u = new D.XMLHttpRequest();
          u.open("GET", e), u.timeout = ee.preload.timeout, u.addEventListener("error", l), u.addEventListener("timeout", l), u.addEventListener("loadend", function(s) {
            if (s.loaded && u.responseText)
              return o(u.responseText);
            l(u.responseText);
          }), u.send();
        }).then(function(o) {
          var l = t.convertDataToStylesheet({
            data: o,
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId
          });
          return ci(l.sheet, t, r, a, l.isCrossOrigin);
        });
      }
      i(Nv, "parseCrossOriginStylesheet");
      var di = Nv, qv = function() {
        function e() {
          if (D.performance && D.performance)
            return D.performance.now();
        }
        i(e, "now");
        var t = null, r = e();
        return {
          start: /* @__PURE__ */ i(function() {
            this.mark("mark_axe_start");
          }, "start"),
          end: /* @__PURE__ */ i(function() {
            this.mark("mark_axe_end"), this.measure("axe", "mark_axe_start", "mark_axe_end"), this.logMeasures("axe");
          }, "end"),
          auditStart: /* @__PURE__ */ i(function() {
            this.mark("mark_audit_start");
          }, "auditStart"),
          auditEnd: /* @__PURE__ */ i(function() {
            this.mark("mark_audit_end"), this.measure("audit_start_to_end", "mark_audit_start", "mark_audit_end"), this.logMeasures();
          }, "auditEnd"),
          mark: /* @__PURE__ */ i(function(n) {
            D.performance && D.performance.mark !== void 0 && D.performance.mark(n);
          }, "mark"),
          measure: /* @__PURE__ */ i(function(n, o, l) {
            D.performance && D.performance.measure !== void 0 && D.performance.measure(n, o, l);
          }, "measure"),
          logMeasures: /* @__PURE__ */ i(function(n) {
            function o(d) {
              Mt("Measure " + d.name + " took " + d.duration + "ms");
            }
            if (i(o, "logMeasure"), D.performance && D.performance.getEntriesByType !== void 0)
              for (var l = D.performance.getEntriesByName("mark_axe_start")[0], u = D.performance.getEntriesByType("measure").filter(function(d) {
                return d.startTime >= l.startTime;
              }), s = 0; s < u.length; ++s) {
                var c = u[s];
                if (c.name === n) {
                  o(c);
                  return;
                }
                o(c);
              }
          }, "logMeasures"),
          timeElapsed: /* @__PURE__ */ i(function() {
            return e() - r;
          }, "timeElapsed"),
          reset: /* @__PURE__ */ i(function() {
            t || (t = e()), r = e();
          }, "reset")
        };
      }(), Se = qv;
      typeof Object.assign != "function" && function() {
        Object.assign = function(e) {
          if (e == null)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var t = Object(e), r = 1; r < arguments.length; r++) {
            var a = arguments[r];
            if (a != null)
              for (var n in a)
                a.hasOwnProperty(n) && (t[n] = a[n]);
          }
          return t;
        };
      }(), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: /* @__PURE__ */ i(function(t) {
          if (this === null)
            throw new TypeError("Array.prototype.find called on null or undefined");
          if (typeof t != "function")
            throw new TypeError("predicate must be a function");
          for (var r = Object(this), a = r.length >>> 0, n = arguments[1], o, l = 0; l < a; l++)
            if (o = r[l], t.call(n, o, l, r))
              return o;
        }, "value")
      }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: /* @__PURE__ */ i(function(t, r) {
          if (this === null)
            throw new TypeError("Array.prototype.find called on null or undefined");
          if (typeof t != "function")
            throw new TypeError("predicate must be a function");
          for (var a = Object(this), n = a.length >>> 0, o, l = 0; l < n; l++)
            if (o = a[l], t.call(r, o, l, a))
              return l;
          return -1;
        }, "value")
      });
      function Uu() {
        if (R.elementsFromPoint)
          return R.elementsFromPoint;
        if (R.msElementsFromPoint)
          return R.msElementsFromPoint;
        var e = function() {
          var n = R.createElement("x");
          return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
        }(), t = e ? "pointer-events" : "visibility", r = e ? "none" : "hidden", a = R.createElement("style");
        return a.innerHTML = e ? "* { pointer-events: all }" : "* { visibility: visible }", function(n, o) {
          var l, u, s, c = [], d = [];
          for (R.head.appendChild(a); (l = R.elementFromPoint(n, o)) && c.indexOf(l) === -1; )
            c.push(l), d.push({
              value: l.style.getPropertyValue(t),
              priority: l.style.getPropertyPriority(t)
            }), l.style.setProperty(t, r, "important");
          for (c.indexOf(R.documentElement) < c.length - 1 && (c.splice(c.indexOf(R.documentElement), 1), c.push(R.documentElement)), u = d.length; s = d[--u]; )
            c[u].style.setProperty(t, s.value ? s.value : "", s.priority);
          return R.head.removeChild(a), c;
        };
      }
      i(Uu, "_pollyfillElementsFromPoint"), typeof D.addEventListener == "function" && (R.elementsFromPoint = Uu()), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: /* @__PURE__ */ i(function(t) {
          var r = Object(this), a = parseInt(r.length, 10) || 0;
          if (a === 0)
            return !1;
          var n = parseInt(arguments[1], 10) || 0, o;
          n >= 0 ? o = n : (o = a + n, o < 0 && (o = 0));
          for (var l; o < a; ) {
            if (l = r[o], t === l || t !== t && l !== l)
              return !0;
            o++;
          }
          return !1;
        }, "value")
      }), Array.prototype.some || Object.defineProperty(Array.prototype, "some", {
        value: /* @__PURE__ */ i(function(t) {
          if (this == null)
            throw new TypeError("Array.prototype.some called on null or undefined");
          if (typeof t != "function")
            throw new TypeError();
          for (var r = Object(this), a = r.length >>> 0, n = arguments.length >= 2 ? arguments[1] : void 0, o = 0; o < a; o++)
            if (o in r && t.call(n, r[o], o, r))
              return !0;
          return !1;
        }, "value")
      }), Array.from || Object.defineProperty(Array, "from", {
        value: function() {
          var e = Object.prototype.toString, t = /* @__PURE__ */ i(function(l) {
            return typeof l == "function" || e.call(l) === "[object Function]";
          }, "isCallable"), r = /* @__PURE__ */ i(function(l) {
            var u = Number(l);
            return isNaN(u) ? 0 : u === 0 || !isFinite(u) ? u : (u > 0 ? 1 : -1) * Math.floor(Math.abs(u));
          }, "toInteger"), a = Math.pow(2, 53) - 1, n = /* @__PURE__ */ i(function(l) {
            var u = r(l);
            return Math.min(Math.max(u, 0), a);
          }, "toLength");
          return /* @__PURE__ */ i(function(l) {
            var u = this, s = Object(l);
            if (l == null)
              throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var c = arguments.length > 1 ? arguments[1] : void 0, d;
            if (typeof c < "u") {
              if (!t(c))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
              arguments.length > 2 && (d = arguments[2]);
            }
            for (var f = n(s.length), p = t(u) ? Object(new u(f)) : new Array(f), m = 0, h; m < f; )
              h = s[m], c ? p[m] = typeof d > "u" ? c(h, m) : c.call(d, h, m) : p[m] = h, m += 1;
            return p.length = f, p;
          }, "from");
        }()
      }), String.prototype.includes || (String.prototype.includes = function(e, t) {
        return typeof t != "number" && (t = 0), t + e.length > this.length ? !1 : this.indexOf(e, t) !== -1;
      }), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: /* @__PURE__ */ i(function e() {
          var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
          return t ? Array.prototype.reduce.call(this, function(r, a) {
            return Array.isArray(a) ? r.push.apply(r, e.call(a, t - 1)) : r.push(a), r;
          }, []) : Array.prototype.slice.call(this);
        }, "flat"),
        writable: !0
      }), D.Node && !("isConnected" in D.Node.prototype) && Object.defineProperty(D.Node.prototype, "isConnected", {
        get: /* @__PURE__ */ i(function() {
          return !this.ownerDocument || !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED);
        }, "get")
      });
      function Bv(e, t) {
        return e.concat(t).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
      }
      i(Bv, "uniqueArray");
      var Pr = Bv;
      function $u(e, t, r, a, n) {
        var o = n || {};
        return o.vNodes = e, o.vNodesIndex = 0, o.anyLevel = t, o.thisLevel = r, o.parentShadowId = a, o;
      }
      i($u, "createLocalVariables");
      var fi = [];
      function Lv(e, t, r) {
        for (var a = [], n = Array.isArray(e) ? e : [e], o = $u(n, t, null, e[0].shadowId, fi.pop()), l = []; o.vNodesIndex < o.vNodes.length; ) {
          for (var u, s, c = o.vNodes[o.vNodesIndex++], d = null, f = null, p = (((u = o.anyLevel) === null || u === void 0 ? void 0 : u.length) || 0) + (((s = o.thisLevel) === null || s === void 0 ? void 0 : s.length) || 0), m = !1, h = 0; h < p; h++) {
            var y, w, v, b = h < (((y = o.anyLevel) === null || y === void 0 ? void 0 : y.length) || 0) ? o.anyLevel[h] : o.thisLevel[h - (((w = o.anyLevel) === null || w === void 0 ? void 0 : w.length) || 0)];
            if ((!b[0].id || c.shadowId === o.parentShadowId) && Jt(c, b[0]))
              if (b.length === 1)
                !m && (!r || r(c)) && (l.push(c), m = !0);
              else {
                var E = b.slice(1);
                if ([" ", ">"].includes(E[0].combinator) === !1)
                  throw new Error("axe.utils.querySelectorAll does not support the combinator: " + b[1].combinator);
                E[0].combinator === ">" ? (d = d || []).push(E) : (f = f || []).push(E);
              }
            (!b[0].id || c.shadowId === o.parentShadowId) && (v = o.anyLevel) !== null && v !== void 0 && v.includes(b) && (f = f || []).push(b);
          }
          for (c.children && c.children.length && (a.push(o), o = $u(c.children, f, d, c.shadowId, fi.pop())); o.vNodesIndex === o.vNodes.length && a.length; )
            fi.push(o), o = a.pop();
        }
        return l;
      }
      i(Lv, "matchExpressions");
      function Vv(e, t, r) {
        e = Array.isArray(e) ? e : [e];
        var a = Jr(t), n = Au(e, a, r);
        return n || Lv(e, a, r);
      }
      i(Vv, "querySelectorAllFilter");
      var ht = Vv;
      function jv(e) {
        var t = e.treeRoot, r = t === void 0 ? g._tree[0] : t, a = Hv(r);
        if (!a.length)
          return Promise.resolve();
        var n = R.implementation.createHTMLDocument("Dynamic document for loading cssom"), o = Vu(n);
        return zv(a, o).then(function(l) {
          return Gu(l);
        });
      }
      i(jv, "preloadCssom");
      var Wu = jv;
      function Hv(e) {
        var t = [], r = ht(e, "*", function(a) {
          return t.includes(a.shadowId) ? !1 : (t.push(a.shadowId), !0);
        }).map(function(a) {
          return {
            shadowId: a.shadowId,
            rootNode: xr(a.actualNode)
          };
        });
        return Pr(r, []);
      }
      i(Hv, "getAllRootNodesInTree");
      function zv(e, t) {
        var r = [];
        return e.forEach(function(a, n) {
          var o = a.rootNode, l = a.shadowId, u = Uv(o, l, t);
          if (!u)
            return Promise.all(r);
          var s = n + 1, c = {
            rootNode: o,
            shadowId: l,
            convertDataToStylesheet: t,
            rootIndex: s
          }, d = [], f = Promise.all(u.map(function(p, m) {
            var h = [s, m];
            return ci(p, c, h, d);
          }));
          r.push(f);
        }), Promise.all(r);
      }
      i(zv, "getCssomForAllRootNodes");
      function Gu(e) {
        return e.reduce(function(t, r) {
          return Array.isArray(r) ? t.concat(Gu(r)) : t.concat(r);
        }, []);
      }
      i(Gu, "flattenAssets");
      function Uv(e, t, r) {
        var a;
        return e.nodeType === 11 && t ? a = $v(e, r) : a = Wv(e), Yv(a);
      }
      i(Uv, "getStylesheetsOfRootNode");
      function $v(e, t) {
        return Array.from(e.children).filter(Gv).reduce(function(r, a) {
          var n = a.nodeName.toUpperCase(), o = n === "STYLE" ? a.textContent : a, l = n === "LINK", u = t({
            data: o,
            isLink: l,
            root: e
          });
          return r.push(u.sheet), r;
        }, []);
      }
      i($v, "getStylesheetsFromDocumentFragment");
      function Wv(e) {
        return Array.from(e.styleSheets).filter(function(t) {
          return t.media ? Yu(t.media.mediaText) : !1;
        });
      }
      i(Wv, "getStylesheetsFromDocument");
      function Gv(e) {
        var t = e.nodeName.toUpperCase(), r = e.getAttribute("href"), a = e.getAttribute("rel"), n = t === "LINK" && r && a && e.rel.toUpperCase().includes("STYLESHEET"), o = t === "STYLE";
        return o || n && Yu(e.media);
      }
      i(Gv, "filerStyleAndLinkAttributesInDocumentFragment");
      function Yu(e) {
        return e ? !e.toUpperCase().includes("PRINT") : !0;
      }
      i(Yu, "filterMediaIsPrint");
      function Yv(e) {
        var t = [];
        return e.filter(function(r) {
          return r.href ? t.includes(r.href) ? !1 : (t.push(r.href), !0) : !0;
        });
      }
      i(Yv, "filterStylesheetsWithSameHref");
      function Kv(e) {
        var t = e.treeRoot, r = t === void 0 ? g._tree[0] : t, a = ht(r, "video, audio", function(n) {
          var o = n.actualNode;
          if (o.hasAttribute("src"))
            return !!o.getAttribute("src");
          var l = Array.from(o.getElementsByTagName("source")).filter(function(u) {
            return !!u.getAttribute("src");
          });
          return !(l.length <= 0);
        });
        return Promise.all(a.map(function(n) {
          var o = n.actualNode;
          return Xv(o);
        }));
      }
      i(Kv, "preloadMedia");
      var Ku = Kv;
      function Xv(e) {
        return new Promise(function(t) {
          e.readyState > 0 && t(e);
          function r() {
            e.removeEventListener("loadedmetadata", r), t(e);
          }
          i(r, "onMediaReady"), e.addEventListener("loadedmetadata", r);
        });
      }
      i(Xv, "isMediaElementReady");
      function Jv(e) {
        return P(e) === "object" && Array.isArray(e.assets);
      }
      i(Jv, "isValidPreloadObject");
      function Xu(e) {
        return !e || e.preload === void 0 || e.preload === null ? !0 : typeof e.preload == "boolean" ? e.preload : Jv(e.preload);
      }
      i(Xu, "_shouldPreload");
      function Ju(e) {
        var t = ee.preload, r = t.assets, a = t.timeout, n = {
          assets: r,
          timeout: a
        };
        if (!e.preload || typeof e.preload == "boolean")
          return n;
        var o = e.preload.assets.every(function(l) {
          return r.includes(l.toLowerCase());
        });
        if (!o)
          throw new Error("Requested assets, not supported. Supported assets are: ".concat(r.join(", "), "."));
        return n.assets = Pr(e.preload.assets.map(function(l) {
          return l.toLowerCase();
        }), []), e.preload.timeout && typeof e.preload.timeout == "number" && !isNaN(e.preload.timeout) && (n.timeout = e.preload.timeout), n;
      }
      i(Ju, "_getPreloadConfig");
      function Qv(e) {
        var t = {
          cssom: Wu,
          media: Ku
        };
        return Xu(e) ? new Promise(function(r, a) {
          var n = Ju(e), o = n.assets, l = n.timeout, u = setTimeout(function() {
            return a(new Error("Preload assets timed out."));
          }, l);
          Promise.all(o.map(function(s) {
            return t[s](e).then(function(c) {
              return Hc({}, s, c);
            });
          })).then(function(s) {
            var c = s.reduce(function(d, f) {
              return ue({}, d, f);
            }, {});
            clearTimeout(u), r(c);
          }).catch(function(s) {
            clearTimeout(u), a(s);
          });
        }) : Promise.resolve();
      }
      i(Qv, "preload");
      var Qu = Qv;
      function Zv(e, t) {
        function r(n) {
          return n.incomplete && n.incomplete.default ? n.incomplete.default : ri();
        }
        if (i(r, "getDefaultMsg"), e && e.missingData)
          try {
            var a = t.incomplete[e.missingData[0].reason];
            if (!a)
              throw new Error();
            return a;
          } catch {
            return typeof e.missingData == "string" ? t.incomplete[e.missingData] : r(t);
          }
        else
          return e && e.messageKey ? t.incomplete[e.messageKey] : r(t);
      }
      i(Zv, "getIncompleteReason");
      function Zu(e, t, r) {
        return function(a) {
          var n = e[a.id] || {}, o = n.messages || {}, l = Object.assign({}, n);
          delete l.messages, !r.reviewOnFail && a.result === void 0 ? (P(o.incomplete) === "object" && !Array.isArray(a.data) && (l.message = Zv(a.data, o)), l.message || (l.message = o.incomplete)) : l.message = a.result === t ? o.pass : o.fail, typeof l.message != "function" && (l.message = ai(l.message, a.data)), dn(a, l);
        };
      }
      i(Zu, "extender");
      function eg(e) {
        var t = g._audit.data.checks || {}, r = g._audit.data.rules || {}, a = _r(g._audit.rules, "id", e.id) || {};
        e.tags = bt(a.tags || []);
        var n = Zu(t, !0, a), o = Zu(t, !1, a);
        e.nodes.forEach(function(l) {
          l.any.forEach(n), l.all.forEach(n), l.none.forEach(o);
        }), dn(e, bt(r[e.id] || {}));
      }
      i(eg, "publishMetaData");
      var _a = eg;
      function tg(e, t) {
        return ht(e, t);
      }
      i(tg, "querySelectorAll");
      var et = tg;
      function es(e, t) {
        var r, a, n, o = g._audit && g._audit.tagExclude ? g._audit.tagExclude : [];
        return t.hasOwnProperty("include") || t.hasOwnProperty("exclude") ? (r = t.include || [], r = Array.isArray(r) ? r : [r], a = t.exclude || [], a = Array.isArray(a) ? a : [a], a = a.concat(o.filter(function(l) {
          return r.indexOf(l) === -1;
        }))) : (r = Array.isArray(t) ? t : [t], a = o.filter(function(l) {
          return r.indexOf(l) === -1;
        })), n = r.some(function(l) {
          return e.tags.indexOf(l) !== -1;
        }), n || r.length === 0 && e.enabled !== !1 ? a.every(function(l) {
          return e.tags.indexOf(l) === -1;
        }) : !1;
      }
      i(es, "matchTags");
      function rg(e, t, r) {
        var a = r.runOnly || {}, n = (r.rules || {})[e.id];
        return e.pageLevel && !t.page ? !1 : a.type === "rule" ? a.values.indexOf(e.id) !== -1 : n && typeof n.enabled == "boolean" ? n.enabled : a.type === "tag" && a.values ? es(e, a.values) : es(e, []);
      }
      i(rg, "ruleShouldRun");
      var ts = rg;
      function rs(e, t) {
        if (!t)
          return e;
        var r = e.cloneNode(!1), a = Gr(r);
        if (r.nodeType === 1) {
          var n = r.outerHTML;
          r = le.get(n, function() {
            return as(r, a, e, t);
          });
        } else
          r = as(r, a, e, t);
        return Array.from(e.childNodes).forEach(function(o) {
          r.appendChild(rs(o, t));
        }), r;
      }
      i(rs, "_filterHtmlAttrs");
      function as(e, t, r, a) {
        return t && (e = R.createElement(e.nodeName), Array.from(t).forEach(function(n) {
          ag(r, n.name, a) || e.setAttribute(n.name, n.value);
        })), e;
      }
      i(as, "setNodeAttributes");
      function ag(e, t, r) {
        return typeof r[t] > "u" ? !1 : r[t] === !0 ? !0 : Kt(e, r[t]);
      }
      i(ag, "attributeMatches");
      function pi(e, t) {
        var r = [], a;
        if (g._selectCache)
          for (var n = 0, o = g._selectCache.length; n < o; n++) {
            var l = g._selectCache[n];
            if (l.selector === e)
              return l.result;
          }
        for (var u = ng(t.include), s = ig(t), c = 0; c < u.length; c++) {
          a = u[c];
          var d = ht(a, e, s);
          r = og(r, d);
        }
        return g._selectCache && g._selectCache.push({
          selector: e,
          result: r
        }), r;
      }
      i(pi, "_select");
      function ng(e) {
        return e.reduce(function(t, r) {
          return (!t.length || !qt(t[t.length - 1], r)) && t.push(r), t;
        }, []);
      }
      i(ng, "getOuterIncludes");
      function ig(e) {
        return !e.exclude || e.exclude.length === 0 ? null : function(t) {
          return li(t, e);
        };
      }
      i(ig, "getContextFilter");
      function og(e, t) {
        if (e.length === 0)
          return t;
        if (e.length < t.length) {
          var r = e;
          e = t, t = r;
        }
        for (var a = 0, n = t.length; a < n; a++)
          e.includes(t[a]) || e.push(t[a]);
        return e;
      }
      i(og, "mergeArrayUniques");
      function lg(e, t, r) {
        if (e === D)
          return e.scroll(r, t);
        e.scrollTop = t, e.scrollLeft = r;
      }
      i(lg, "setScroll");
      function ug(e) {
        e.forEach(function(t) {
          var r = t.elm, a = t.top, n = t.left;
          return lg(r, a, n);
        });
      }
      i(ug, "setScrollState");
      var sg = ug;
      function cg(e) {
        var t = Array.isArray(e) ? ae(e) : [e];
        return ns(t, R);
      }
      i(cg, "_shadowSelect");
      function ns(e, t) {
        var r = e.shift(), a = r ? t.querySelector(r) : null;
        return e.length === 0 ? a : a != null && a.shadowRoot ? ns(e, a.shadowRoot) : null;
      }
      i(ns, "selectRecursive");
      function mi(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : R, r = Array.isArray(e) ? ae(e) : [e];
        return e.length === 0 ? [] : is(r, t);
      }
      i(mi, "_shadowSelectAll");
      function is(e, t) {
        var r = jc(e), a = r[0], n = r.slice(1), o = t.querySelectorAll(a);
        if (n.length === 0)
          return Array.from(o);
        var l = [], u = Ke(o), s;
        try {
          for (u.s(); !(s = u.n()).done; ) {
            var c = s.value;
            c != null && c.shadowRoot && l.push.apply(l, ae(is(n, c.shadowRoot)));
          }
        } catch (d) {
          u.e(d);
        } finally {
          u.f();
        }
        return l;
      }
      i(is, "selectAllRecursive");
      function dg() {
        return ["hidden", "text", "search", "tel", "url", "email", "password", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"];
      }
      i(dg, "validInputTypes");
      var xa = dg, os = [, [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , , , , , 1, 1, 1, 1, , , 1, 1, 1, , 1, , 1, , 1, 1], [1, 1, 1, , 1, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, 1, 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1], [1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , , 1, 1, , , , , , 1, 1], [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1], [, 1, , , 1, , , 1, , , , , , 1], [, 1, , 1, , , , 1, , , , 1], [1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [, 1, 1, , , , , , 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1], [, , , , 1, , , , , , , , , , , , , , , , , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, , 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, 1, , , , , 1], [1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , 1, , , , , , , 1], [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1], , [1, 1, 1, , , , , , , , , , , , , 1], [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1]], [, [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , 1, , , , , , , , , , , , , , , 1], [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1], [1, , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1], [, , , , , , , 1, , , , 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , 1], [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1], [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1], , [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1], [1, 1, , , 1, 1, , 1, , , , , 1, , 1]], [, [, 1], [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1], [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1], , [1, , , , , 1], [, 1, , , , 1, , , , 1], [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1], [, , , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , 1, , 1], [, 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1], [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1], [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1], [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1], [1, , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], , [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1], [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1], [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1], [1, , , , , , , , , , , , , , , , , 1], [, , , , , 1, , , 1, , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1], [, 1, , , , 1]], [, [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, 1, 1], [, , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], , [, , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1], , [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1], [1], [, , , , , , , , , , , 1, , , , , , , , , , , 1], [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , , 1], [, , 1, , , , , 1, , 1], [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1], [, , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1], [, , , , , 1, , , , , , , 1, , , , , , , 1], , [, , 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , , 1, 1, , 1, 1, 1, , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, , , , 1], , [1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, , , 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1], [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1], [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1], [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, , , , 1, 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1], [, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1], [, 1, , , , , , , , 1, , , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1], [1, 1, , , 1, , , 1, 1, 1, , , , 1], , [, , , , , , , , , , , , , 1, , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1], [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1], [, , , , , , , , , 1], [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1], [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , 1, , , , 1], , [1, 1, , 1, , 1, , , , , , 1, , 1, , 1, 1, , 1, , 1, 1, , 1, 1, , 1], [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1], [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1], [, 1, , 1, , , , , , , , , , , , 1], , [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1], [1]], [, [1, , , , , , , , , 1, , , , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1], [, 1, , , , , , , 1, , , , 1, , , , , , 1], [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1], [1], [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1], [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1], [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1], [1, , , , , , , , , , , , , , 1, , , , 1], [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1], [1, , , , , 1, , , , 1, , 1, 1, , , 1, 1, , 1, 1, 1, , 1, 1, 1, , 1], [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1], [1, , 1, 1, , 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , , , 1], [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1], [, , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1], [1, , 1, 1, 1, 1, , , , 1, , 1, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1], [1, , , , , , , , , , , , , 1], [, , 1, , , , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , , , 1, , 1, , 1, , , , 1], [, , , 1, , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1], [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1], [, , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , 1, , , , , , , , , , , , , 1], [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1], , [, , 1, , , 1, , , , , , 1, , , , 1], [, , , , , , , , , 1, , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , 1, , 1, , , 1, 1, 1, , , 1], [, , , , , 1, , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1], [, , , , , 1, , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1], [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1], [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1], [, , , , , , , , , , , , 1], , [, 1, 1, 1, 1, , , , 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1], [1, , , , 1, , , , , , , , , , 1], [1, , , , , , , , , 1], , [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , 1], [1, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, , 1, 1, , , , , 1], [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1, , 1, , 1, , , 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1], , [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1, , , , 1], [, 1, , , 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1], [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1], [1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1], [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1], , [, 1, , , , , , 1, , , , , , , 1], [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1]], [, [, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1], [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1], [1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , 1, 1, , 1, , 1, 1, 1, , 1, , 1, 1, , 1, 1, , 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , , 1, , , , , 1, , 1], [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1], [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1]], [, [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1], [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1], [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1], [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1], , [, , , , , , , , , , , , , , , 1, , , , 1, , 1], [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , , , , , , , , 1], [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1], [, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1], [1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1], [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1], [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1], , [1, 1, , 1, , 1, , 1, 1, , , , , , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1], [, 1, 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, , , 1, , , , 1, , , , 1, 1], [, , , , 1], [, , , , , , , , , 1, , , 1], , [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1], [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , , , , 1], [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1], [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], , [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1], [, , , , , , , , , , , , , 1], [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1], [, , , , , , , , , , , , , , 1]], [, [, 1], , , , , , , , , , , , , , , , , , , , [1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, , , , 1, , 1, 1], [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1], [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , , , , , , , , , , , , , , 1]], [, [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , 1, 1, , , , 1], [, , , , , , 1], [, , 1], [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1], , [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1], [, , , , , , , 1, , , , , , , , , 1], [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1], [, , , , , , , 1, , 1, , , , , , , , , , 1], [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1], , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1], [, , , , , , , , , , , , , , 1, , , , , , 1], , [, , , , , , , , , 1, , , , , , 1, , , , , 1], [, , 1, , , , , , , 1, , , 1, 1], [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1], [1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , , , 1, 1, 1, , , 1, 1, , , , 1, 1], , [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1], [, , , , 1, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , 1], [, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1], [1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1], [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1], [1, 1, 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1], [, 1, 1, 1, , 1, , 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [1, 1, , , , 1, , , 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, , 1], [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1]], [, [, , , , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1], , [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1], [, 1, , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1, , , 1], [, , , , , , , , , 1], [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1], [, , , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , , , , , 1], , [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1], [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1], [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1], [, , , , , 1, , , 1, , , , 1], [, 1], , [, 1], [1, , , , , , , , , , , , , , 1, , , , , 1]], [, [, 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , , 1], [, , 1, , , , , , , , , 1], , , [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1], , [, , , , , , , , , , , , , , , , , , 1, , 1], , [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1], , [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1], [, , , , , , , , , , , , , , , , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , 1, , , 1], [1, , , , , , , , , , , , , , , , , , 1, , 1], , , [, 1, , , , , , , , , , , , , , 1, , , , 1, 1], [, , , , , , , , , 1, , , 1, , , , , , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1, 1, , , , , , 1], , [, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1], [, 1, , , , , , , , 1], [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1], [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , , , , , 1], [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1], [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1], [, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, 1, 1, 1, , 1], [, 1, , , , , , , , 1], [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1], [, 1, , 1, , 1, , 1, 1, 1, , 1, 1, 1, , 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, , , 1, 1, , , , 1, , 1], [, , , 1], , [, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1], [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1], [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1], , [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1], [, 1, , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1]], [, [, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, , 1, , 1, 1, , , 1, 1, 1, 1, , 1, , , , , 1, 1, 1], [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1], [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1], [, 1], [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1], [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1], [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1], [, , 1, , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, , , , 1, 1], [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1], [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1], [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1], [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1], [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1], [, , , , , , , , 1, , , , , 1, , , 1]], [, [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1], [, , , , , , , , 1, , , , 1, , 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1], , [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1], [, 1, , , 1, , , , , , , , 1, , , , , , , 1], [1, 1, , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], , [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1], [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1], [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1], [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1], [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1], , [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1], [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1], [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1], [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1], [, , , , , , , 1, , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , 1], [, 1, , , , , , 1, 1, , , , , , 1], , [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1], [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1], [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1], , [, 1, 1, , 1, , , 1, 1, , , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , , 1], [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1], [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1], [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1], [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1], [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1], , [, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, , 1, , , , , 1, , , 1, , , , 1, , 1], [, 1, , , , , , , , , 1]]];
      function fg(e) {
        for (var t = os; e.length < 3; )
          e += "`";
        for (var r = 0; r <= e.length - 1; r++) {
          var a = e.charCodeAt(r) - 96;
          if (t = t[a], !t)
            return !1;
        }
        return !0;
      }
      i(fg, "isValidLang");
      function ls(e) {
        e = Array.isArray(e) ? e : os;
        var t = [];
        return e.forEach(function(r, a) {
          var n = String.fromCharCode(a + 96).replace("`", "");
          Array.isArray(r) ? t = t.concat(ls(r).map(function(o) {
            return n + o;
          })) : t.push(n);
        }), t;
      }
      i(ls, "_validLangs");
      var Ea = fg, pg = function(e) {
        Li(r, e);
        var t = Vi(r);
        function r(a) {
          var n;
          return Wt(this, r), n = t.call(this), n._props = hg(a), n._attrs = vg(a), n;
        }
        return i(r, "SerialVirtualNode"), Gt(r, [{
          key: "props",
          get: /* @__PURE__ */ i(function() {
            return this._props;
          }, "get")
        }, {
          key: "attr",
          value: /* @__PURE__ */ i(function(n) {
            var o;
            return (o = this._attrs[n]) !== null && o !== void 0 ? o : null;
          }, "attr")
        }, {
          key: "hasAttr",
          value: /* @__PURE__ */ i(function(n) {
            return this._attrs[n] !== void 0;
          }, "hasAttr")
        }, {
          key: "attrNames",
          get: /* @__PURE__ */ i(function() {
            return Object.keys(this._attrs);
          }, "get")
        }]), r;
      }(Z), hi = {
        "#cdata-section": 2,
        "#text": 3,
        "#comment": 8,
        "#document": 9,
        "#document-fragment": 11
      }, us = {}, mg = Object.keys(hi);
      mg.forEach(function(e) {
        us[hi[e]] = e;
      });
      function hg(e) {
        var t, r, a, n = (t = e.nodeName) !== null && t !== void 0 ? t : us[e.nodeType], o = (r = (a = e.nodeType) !== null && a !== void 0 ? a : hi[e.nodeName]) !== null && r !== void 0 ? r : 1;
        pe(typeof o == "number", "nodeType has to be a number, got '".concat(o, "'")), pe(typeof n == "string", "nodeName has to be a string, got '".concat(n, "'")), n = n.toLowerCase();
        var l = null;
        n === "input" && (l = (e.type || e.attributes && e.attributes.type || "").toLowerCase(), xa().includes(l) || (l = "text"));
        var u = ue({}, e, {
          nodeType: o,
          nodeName: n
        });
        return l && (u.type = l), delete u.attributes, Object.freeze(u);
      }
      i(hg, "normaliseProps");
      function vg(e) {
        var t = e.attributes, r = t === void 0 ? {} : t, a = {
          htmlFor: "for",
          className: "class"
        };
        return Object.keys(r).reduce(function(n, o) {
          var l = r[o];
          if (pe(P(l) !== "object" || l === null, "expects attributes not to be an object, '".concat(o, "' was")), l !== void 0) {
            var u = a[o] || o;
            n[u] = l !== null ? String(l) : null;
          }
          return n;
        }, {});
      }
      i(vg, "normaliseAttrs");
      var ss = pg, cs = {};
      we(cs, {
        CssSelectorParser: /* @__PURE__ */ i(function() {
          return gg.CssSelectorParser;
        }, "CssSelectorParser"),
        doT: /* @__PURE__ */ i(function() {
          return ds.default;
        }, "doT"),
        emojiRegexText: /* @__PURE__ */ i(function() {
          return Bn;
        }, "emojiRegexText"),
        memoize: /* @__PURE__ */ i(function() {
          return bg.default;
        }, "memoize")
      });
      var gg = it(Yi()), ds = it(oo()), bg = it(io()), yg = it(o1()), Dg = it(l1());
      it(u1()), ds.default.templateSettings.strip = !1, "Promise" in D || yg.default.polyfill(), "Uint32Array" in D || (D.Uint32Array = Dg.Uint32Array), D.Uint32Array && ("some" in D.Uint32Array.prototype || Object.defineProperty(D.Uint32Array.prototype, "some", {
        value: Array.prototype.some
      }), "reduce" in D.Uint32Array.prototype || Object.defineProperty(D.Uint32Array.prototype, "reduce", {
        value: Array.prototype.reduce
      }));
      function wg(e, t) {
        if (e = e || /* @__PURE__ */ i(function() {
        }, "res"), t = t || g.log, !g._audit)
          throw new Error("No audit configured");
        var r = g.utils.queue(), a = [];
        Object.keys(g.plugins).forEach(function(o) {
          r.defer(function(l) {
            var u = /* @__PURE__ */ i(function(c) {
              a.push(c), l();
            }, "rej2");
            try {
              g.plugins[o].cleanup(l, u);
            } catch (s) {
              u(s);
            }
          });
        });
        var n = g.utils.getFlattenedTree(R.body);
        g.utils.querySelectorAll(n, "iframe, frame").forEach(function(o) {
          r.defer(function(l, u) {
            return g.utils.sendCommandToFrame(o.actualNode, {
              command: "cleanup-plugin"
            }, l, u);
          });
        }), r.then(function(o) {
          a.length === 0 ? e(o) : t(a);
        }).catch(t);
      }
      i(wg, "cleanup");
      var fs = wg, Mr = {}, ps;
      function ms(e) {
        return Mr.hasOwnProperty(e);
      }
      i(ms, "hasReporter");
      function vi(e) {
        return typeof e == "string" && Mr[e] ? Mr[e] : typeof e == "function" ? e : ps;
      }
      i(vi, "getReporter");
      function _g(e, t, r) {
        Mr[e] = t, r && (ps = t);
      }
      i(_g, "addReporter");
      function xg(e) {
        var t;
        if (t = g._audit, !t)
          throw new Error("No audit configured");
        if (e.axeVersion || e.ver) {
          var r = e.axeVersion || e.ver;
          if (!/^\d+\.\d+\.\d+(-canary)?/.test(r))
            throw new Error("Invalid configured version ".concat(r));
          var a = r.split("-"), n = ge(a, 2), o = n[0], l = n[1], u = o.split(".").map(Number), s = ge(u, 3), c = s[0], d = s[1], f = s[2], p = g.version.split("-"), m = ge(p, 2), h = m[0], y = m[1], w = h.split(".").map(Number), v = ge(w, 3), b = v[0], E = v[1], A = v[2];
          if (c !== b || E < d || E === d && A < f || c === b && d === E && f === A && l && l !== y)
            throw new Error("Configured version ".concat(r, " is not compatible with current axe version ").concat(g.version));
        }
        if (e.reporter && (typeof e.reporter == "function" || ms(e.reporter)) && (t.reporter = e.reporter), e.checks) {
          if (!Array.isArray(e.checks))
            throw new TypeError("Checks property must be an array");
          e.checks.forEach(function(M) {
            if (!M.id)
              throw new TypeError("Configured check ".concat(JSON.stringify(M), " is invalid. Checks must be an object with at least an id property"));
            t.addCheck(M);
          });
        }
        var T = [];
        if (e.rules) {
          if (!Array.isArray(e.rules))
            throw new TypeError("Rules property must be an array");
          e.rules.forEach(function(M) {
            if (!M.id)
              throw new TypeError("Configured rule ".concat(JSON.stringify(M), " is invalid. Rules must be an object with at least an id property"));
            T.push(M.id), t.addRule(M);
          });
        }
        if (e.disableOtherRules && t.rules.forEach(function(M) {
          T.includes(M.id) === !1 && (M.enabled = !1);
        }), typeof e.branding < "u" ? t.setBranding(e.branding) : t._constructHelpUrls(), e.tagExclude && (t.tagExclude = e.tagExclude), e.locale && t.applyLocale(e.locale), e.standards && Pp(e.standards), e.noHtml && (t.noHtml = !0), e.allowedOrigins) {
          if (!Array.isArray(e.allowedOrigins))
            throw new TypeError("Allowed origins property must be an array");
          if (e.allowedOrigins.includes("*"))
            throw new Error('"*" is not allowed. Use "'.concat(ee.allOrigins, '" instead'));
          t.setAllowedOrigins(e.allowedOrigins);
        }
      }
      i(xg, "configure");
      var Eg = xg;
      function Ag(e) {
        ut.updateMessenger(e);
      }
      i(Ag, "frameMessenger2");
      function Fg(e) {
        e = e || [];
        var t = e.length ? g._audit.rules.filter(function(a) {
          return !!e.filter(function(n) {
            return a.tags.indexOf(n) !== -1;
          }).length;
        }) : g._audit.rules, r = g._audit.data.rules || {};
        return t.map(function(a) {
          var n = r[a.id] || {};
          return {
            ruleId: a.id,
            description: n.description,
            help: n.help,
            helpUrl: n.helpUrl,
            tags: a.tags,
            actIds: a.actIds
          };
        });
      }
      i(Fg, "getRules");
      var Cg = Fg, hs = {};
      we(hs, {
        allowedAttr: /* @__PURE__ */ i(function() {
          return vs;
        }, "allowedAttr"),
        arialabelText: /* @__PURE__ */ i(function() {
          return Cr;
        }, "arialabelText"),
        arialabelledbyText: /* @__PURE__ */ i(function() {
          return Fr;
        }, "arialabelledbyText"),
        getAccessibleRefs: /* @__PURE__ */ i(function() {
          return gi;
        }, "getAccessibleRefs"),
        getElementUnallowedRoles: /* @__PURE__ */ i(function() {
          return ys;
        }, "getElementUnallowedRoles"),
        getExplicitRole: /* @__PURE__ */ i(function() {
          return be;
        }, "getExplicitRole"),
        getImplicitRole: /* @__PURE__ */ i(function() {
          return dt;
        }, "getImplicitRole"),
        getOwnedVirtual: /* @__PURE__ */ i(function() {
          return kr;
        }, "getOwnedVirtual"),
        getRole: /* @__PURE__ */ i(function() {
          return se;
        }, "getRole"),
        getRoleType: /* @__PURE__ */ i(function() {
          return mt;
        }, "getRoleType"),
        getRolesByType: /* @__PURE__ */ i(function() {
          return Lg;
        }, "getRolesByType"),
        getRolesWithNameFromContents: /* @__PURE__ */ i(function() {
          return Hg;
        }, "getRolesWithNameFromContents"),
        implicitNodes: /* @__PURE__ */ i(function() {
          return Ug;
        }, "implicitNodes"),
        implicitRole: /* @__PURE__ */ i(function() {
          return dt;
        }, "implicitRole"),
        isAccessibleRef: /* @__PURE__ */ i(function() {
          return Aa;
        }, "isAccessibleRef"),
        isAriaRoleAllowedOnElement: /* @__PURE__ */ i(function() {
          return bs;
        }, "isAriaRoleAllowedOnElement"),
        isComboboxPopup: /* @__PURE__ */ i(function() {
          return yi;
        }, "isComboboxPopup"),
        isUnsupportedRole: /* @__PURE__ */ i(function() {
          return Tn;
        }, "isUnsupportedRole"),
        isValidRole: /* @__PURE__ */ i(function() {
          return nr;
        }, "isValidRole"),
        label: /* @__PURE__ */ i(function() {
          return xs;
        }, "label"),
        labelVirtual: /* @__PURE__ */ i(function() {
          return fa;
        }, "labelVirtual"),
        lookupTable: /* @__PURE__ */ i(function() {
          return ws;
        }, "lookupTable"),
        namedFromContents: /* @__PURE__ */ i(function() {
          return zl;
        }, "namedFromContents"),
        requiredAttr: /* @__PURE__ */ i(function() {
          return Es;
        }, "requiredAttr"),
        requiredContext: /* @__PURE__ */ i(function() {
          return Di;
        }, "requiredContext"),
        requiredOwned: /* @__PURE__ */ i(function() {
          return wi;
        }, "requiredOwned"),
        validateAttr: /* @__PURE__ */ i(function() {
          return Nr;
        }, "validateAttr"),
        validateAttrValue: /* @__PURE__ */ i(function() {
          return As;
        }, "validateAttrValue")
      });
      function Tg(e) {
        var t = de.ariaRoles[e], r = ae(Vt());
        return t && (t.allowedAttrs && r.push.apply(r, ae(t.allowedAttrs)), t.requiredAttrs && r.push.apply(r, ae(t.requiredAttrs))), r;
      }
      i(Tg, "allowedAttr");
      var vs = Tg, kg = /^idrefs?$/;
      function gs(e, t, r) {
        if (e.hasAttribute) {
          if (e.nodeName.toUpperCase() === "LABEL" && e.hasAttribute("for")) {
            var a = e.getAttribute("for");
            t[a] = t[a] || [], t[a].push(e);
          }
          for (var n = 0; n < r.length; ++n) {
            var o = r[n], l = Q(e.getAttribute(o) || "");
            if (!!l)
              for (var u = ze(l), s = 0; s < u.length; ++s)
                t[u[s]] = t[u[s]] || [], t[u[s]].push(e);
          }
        }
        for (var c = 0; c < e.childNodes.length; c++)
          e.childNodes[c].nodeType === 1 && gs(e.childNodes[c], t, r);
      }
      i(gs, "cacheIdRefs");
      function Rg(e) {
        e = e.actualNode || e;
        var t = He(e);
        t = t.documentElement || t;
        var r = le.get("idRefsByRoot", function() {
          return /* @__PURE__ */ new WeakMap();
        }), a = r.get(t);
        if (!a) {
          a = {}, r.set(t, a);
          var n = Object.keys(de.ariaAttrs).filter(function(o) {
            var l = de.ariaAttrs[o].type;
            return kg.test(l);
          });
          gs(t, a, n);
        }
        return a[e.id] || [];
      }
      i(Rg, "getAccessibleRefs");
      var gi = Rg;
      function Sg(e, t) {
        var r = e instanceof Z ? e : B(e), a = dt(r), n = Ht(r);
        return Array.isArray(n.allowedRoles) ? n.allowedRoles.includes(t) : t === a ? !1 : !!n.allowedRoles;
      }
      i(Sg, "isAriaRoleAllowedOnElement");
      var bs = Sg, Og = ["doc-backlink", "doc-biblioentry", "doc-biblioref", "doc-cover", "doc-endnote", "doc-glossref", "doc-noteref"], Ig = {
        header: "banner",
        footer: "contentinfo"
      };
      function Pg(e) {
        var t = [];
        if (!e)
          return t;
        if (e.hasAttr("role")) {
          var r = ze(e.attr("role").toLowerCase());
          t = t.concat(r);
        }
        return t.filter(function(a) {
          return nr(a);
        });
      }
      i(Pg, "getRoleSegments");
      function Mg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = e instanceof Z ? e : B(e);
        if (!oi(r))
          return [];
        var a = r.props.nodeName, n = dt(r) || Ig[a], o = Pg(r);
        return o.filter(function(l) {
          return !Ng(l, r, t, n);
        });
      }
      i(Mg, "getElementUnallowedRoles");
      function Ng(e, t, r, a) {
        return r && e === a ? !0 : Og.includes(e) && mt(e) !== a ? !1 : bs(t, e);
      }
      i(Ng, "roleIsAllowed");
      var ys = Mg;
      function qg(e) {
        return Object.keys(de.ariaRoles).filter(function(t) {
          return de.ariaRoles[t].type === e;
        });
      }
      i(qg, "getAriaRolesByType");
      var ur = qg;
      function Bg(e) {
        return ur(e);
      }
      i(Bg, "getRolesByType");
      var Lg = Bg;
      function Vg() {
        return le.get("ariaRolesNameFromContent", function() {
          return Object.keys(de.ariaRoles).filter(function(e) {
            return de.ariaRoles[e].nameFromContent;
          });
        });
      }
      i(Vg, "getAriaRolesSupportingNameFromContent");
      var bi = Vg;
      function jg() {
        return bi();
      }
      i(jg, "getRolesWithNameFromContents");
      var Hg = jg, Ds = /* @__PURE__ */ i(function(t) {
        return t === null;
      }, "isNull"), Ue = /* @__PURE__ */ i(function(t) {
        return t !== null;
      }, "isNotNull"), _t = {};
      _t.attributes = {
        "aria-activedescendant": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-atomic": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-autocomplete": {
          type: "nmtoken",
          values: ["inline", "list", "both", "none"],
          unsupported: !1
        },
        "aria-busy": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-checked": {
          type: "nmtoken",
          values: ["true", "false", "mixed", "undefined"],
          unsupported: !1
        },
        "aria-colcount": {
          type: "int",
          unsupported: !1
        },
        "aria-colindex": {
          type: "int",
          unsupported: !1
        },
        "aria-colspan": {
          type: "int",
          unsupported: !1
        },
        "aria-controls": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-current": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["page", "step", "location", "date", "time", "true", "false"],
          unsupported: !1
        },
        "aria-describedby": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-describedat": {
          unsupported: !0,
          unstandardized: !0
        },
        "aria-details": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-disabled": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-dropeffect": {
          type: "nmtokens",
          values: ["copy", "move", "reference", "execute", "popup", "none"],
          unsupported: !1
        },
        "aria-errormessage": {
          type: "idref",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-expanded": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1
        },
        "aria-flowto": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-grabbed": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1
        },
        "aria-haspopup": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "menu", "listbox", "tree", "grid", "dialog"],
          unsupported: !1
        },
        "aria-hidden": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-invalid": {
          type: "nmtoken",
          allowEmpty: !0,
          values: ["true", "false", "spelling", "grammar"],
          unsupported: !1
        },
        "aria-keyshortcuts": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-label": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-labelledby": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-level": {
          type: "int",
          unsupported: !1
        },
        "aria-live": {
          type: "nmtoken",
          values: ["off", "polite", "assertive"],
          unsupported: !1
        },
        "aria-modal": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-multiline": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-multiselectable": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-orientation": {
          type: "nmtoken",
          values: ["horizontal", "vertical"],
          unsupported: !1
        },
        "aria-owns": {
          type: "idrefs",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-placeholder": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-posinset": {
          type: "int",
          unsupported: !1
        },
        "aria-pressed": {
          type: "nmtoken",
          values: ["true", "false", "mixed", "undefined"],
          unsupported: !1
        },
        "aria-readonly": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-relevant": {
          type: "nmtokens",
          values: ["additions", "removals", "text", "all"],
          unsupported: !1
        },
        "aria-required": {
          type: "boolean",
          values: ["true", "false"],
          unsupported: !1
        },
        "aria-roledescription": {
          type: "string",
          allowEmpty: !0,
          unsupported: !1
        },
        "aria-rowcount": {
          type: "int",
          unsupported: !1
        },
        "aria-rowindex": {
          type: "int",
          unsupported: !1
        },
        "aria-rowspan": {
          type: "int",
          unsupported: !1
        },
        "aria-selected": {
          type: "nmtoken",
          values: ["true", "false", "undefined"],
          unsupported: !1
        },
        "aria-setsize": {
          type: "int",
          unsupported: !1
        },
        "aria-sort": {
          type: "nmtoken",
          values: ["ascending", "descending", "other", "none"],
          unsupported: !1
        },
        "aria-valuemax": {
          type: "decimal",
          unsupported: !1
        },
        "aria-valuemin": {
          type: "decimal",
          unsupported: !1
        },
        "aria-valuenow": {
          type: "decimal",
          unsupported: !1
        },
        "aria-valuetext": {
          type: "string",
          unsupported: !1
        }
      }, _t.globalAttributes = ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"], _t.role = {
        alert: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        alertdialog: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-modal", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["dialog", "section"]
        },
        application: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage", "aria-activedescendant"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["article", "audio", "embed", "iframe", "object", "section", "svg", "video"]
        },
        article: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["article"],
          unsupported: !1
        },
        banner: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["header"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        button: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-pressed", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["button", 'input[type="button"]', 'input[type="image"]', 'input[type="reset"]', 'input[type="submit"]', "summary"],
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        cell: {
          type: "structure",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["td", "th"],
          unsupported: !1
        },
        checkbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-required", "aria-readonly", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ['input[type="checkbox"]'],
          unsupported: !1,
          allowedElements: ["button"]
        },
        columnheader: {
          type: "structure",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-required", "aria-readonly", "aria-selected", "aria-sort", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["th"],
          unsupported: !1
        },
        combobox: {
          type: "composite",
          attributes: {
            allowed: ["aria-autocomplete", "aria-required", "aria-activedescendant", "aria-orientation", "aria-errormessage"],
            required: ["aria-expanded"]
          },
          owned: {
            all: ["listbox", "tree", "grid", "dialog", "textbox"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "input",
            properties: {
              type: ["text", "search", "tel", "url", "email"]
            }
          }]
        },
        command: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        complementary: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["aside"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        composite: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        contentinfo: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["footer"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        definition: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["dd", "dfn"],
          unsupported: !1
        },
        dialog: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-modal", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["dialog"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        directory: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        document: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["body"],
          unsupported: !1,
          allowedElements: ["article", "embed", "iframe", "object", "section", "svg"]
        },
        "doc-abstract": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-acknowledgments": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-afterword": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-appendix": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-backlink": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        "doc-biblioentry": {
          type: "listitem",
          attributes: {
            allowed: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: ["doc-bibliography"],
          unsupported: !1,
          allowedElements: ["li"]
        },
        "doc-bibliography": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            one: ["doc-biblioentry"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-biblioref": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        "doc-chapter": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-colophon": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-conclusion": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-cover": {
          type: "img",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1
        },
        "doc-credit": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-credits": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-dedication": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-endnote": {
          type: "listitem",
          attributes: {
            allowed: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: ["doc-endnotes"],
          unsupported: !1,
          allowedElements: ["li"]
        },
        "doc-endnotes": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            one: ["doc-endnote"]
          },
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-epigraph": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1
        },
        "doc-epilogue": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-errata": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-example": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside", "section"]
        },
        "doc-footnote": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside", "footer", "header"]
        },
        "doc-foreword": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-glossary": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: ["term", "definition"],
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["dl"]
        },
        "doc-glossref": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        "doc-index": {
          type: "navigation",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["nav", "section"]
        },
        "doc-introduction": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-noteref": {
          type: "link",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        "doc-notice": {
          type: "note",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-pagebreak": {
          type: "separator",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["hr"]
        },
        "doc-pagelist": {
          type: "navigation",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["nav", "section"]
        },
        "doc-part": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-preface": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-prologue": {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-pullquote": {
          type: "none",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside", "section"]
        },
        "doc-qna": {
          type: "section",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        "doc-subtitle": {
          type: "sectionhead",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: {
            nodeName: ["h1", "h2", "h3", "h4", "h5", "h6"]
          }
        },
        "doc-tip": {
          type: "note",
          attributes: {
            allowed: ["aria-expanded"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside"]
        },
        "doc-toc": {
          type: "navigation",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          namefrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["nav", "section"]
        },
        feed: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            one: ["article"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["article", "aside", "section"]
        },
        figure: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["figure"],
          unsupported: !1
        },
        form: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["form"],
          unsupported: !1
        },
        grid: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-colcount", "aria-level", "aria-multiselectable", "aria-readonly", "aria-rowcount", "aria-errormessage"]
          },
          owned: {
            one: ["rowgroup", "row"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ["table"],
          unsupported: !1
        },
        gridcell: {
          type: "widget",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-readonly", "aria-required", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["td", "th"],
          unsupported: !1
        },
        group: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["details", "optgroup"],
          unsupported: !1,
          allowedElements: ["dl", "figcaption", "fieldset", "figure", "footer", "header", "ol", "ul"]
        },
        heading: {
          type: "structure",
          attributes: {
            required: ["aria-level"],
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["h1", "h2", "h3", "h4", "h5", "h6"],
          unsupported: !1
        },
        img: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["img"],
          unsupported: !1,
          allowedElements: ["embed", "iframe", "object", "svg"]
        },
        input: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        landmark: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        link: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["a[href]", "area[href]"],
          unsupported: !1,
          allowedElements: ["button", {
            nodeName: "input",
            properties: {
              type: ["image", "button"]
            }
          }]
        },
        list: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: {
            all: ["listitem"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ["ol", "ul", "dl"],
          unsupported: !1
        },
        listbox: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-multiselectable", "aria-readonly", "aria-required", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            all: ["option"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ["select"],
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        listitem: {
          type: "structure",
          attributes: {
            allowed: ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["list"],
          implicit: ["li", "dt"],
          unsupported: !1
        },
        log: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        main: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["main"],
          unsupported: !1,
          allowedElements: ["article", "section"]
        },
        marquee: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        math: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["math"],
          unsupported: !1
        },
        menu: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            one: ["menuitem", "menuitemradio", "menuitemcheckbox"]
          },
          nameFrom: ["author"],
          context: null,
          implicit: ['menu[type="context"]'],
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        menubar: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            one: ["menuitem", "menuitemradio", "menuitemcheckbox"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        menuitem: {
          type: "widget",
          attributes: {
            allowed: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["menu", "menubar"],
          implicit: ['menuitem[type="command"]'],
          unsupported: !1,
          allowedElements: ["button", "li", {
            nodeName: "iput",
            properties: {
              type: ["image", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        menuitemcheckbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["menu", "menubar"],
          implicit: ['menuitem[type="checkbox"]'],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["checkbox", "image", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        menuitemradio: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-selected", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["menu", "menubar"],
          implicit: ['menuitem[type="radio"]'],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["image", "button", "radio"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        navigation: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["nav"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        none: {
          type: "structure",
          attributes: null,
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: ["article", "aside", "dl", "embed", "figcaption", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "iframe", "li", "ol", "section", "ul"]
          }, {
            nodeName: "img",
            attributes: {
              alt: Ue
            }
          }]
        },
        note: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["aside"]
        },
        option: {
          type: "widget",
          attributes: {
            allowed: ["aria-selected", "aria-posinset", "aria-setsize", "aria-checked", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["listbox"],
          implicit: ["option"],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["checkbox", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        presentation: {
          type: "structure",
          attributes: null,
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: [{
            nodeName: ["article", "aside", "dl", "embed", "figcaption", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "iframe", "li", "ol", "section", "ul"]
          }, {
            nodeName: "img",
            attributes: {
              alt: Ue
            }
          }]
        },
        progressbar: {
          type: "widget",
          attributes: {
            allowed: ["aria-valuetext", "aria-valuenow", "aria-valuemax", "aria-valuemin", "aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["progress"],
          unsupported: !1
        },
        radio: {
          type: "widget",
          attributes: {
            allowed: ["aria-selected", "aria-posinset", "aria-setsize", "aria-required", "aria-errormessage", "aria-checked"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ['input[type="radio"]'],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: ["image", "button"]
            }
          }]
        },
        radiogroup: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-required", "aria-expanded", "aria-readonly", "aria-errormessage", "aria-orientation"]
          },
          owned: {
            all: ["radio"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: {
            nodeName: ["ol", "ul", "fieldset"]
          }
        },
        range: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        region: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["section[aria-label]", "section[aria-labelledby]", "section[title]"],
          unsupported: !1,
          allowedElements: {
            nodeName: ["article", "aside"]
          }
        },
        roletype: {
          type: "abstract",
          unsupported: !1
        },
        row: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-colindex", "aria-expanded", "aria-level", "aria-selected", "aria-rowindex", "aria-errormessage"]
          },
          owned: {
            one: ["cell", "columnheader", "rowheader", "gridcell"]
          },
          nameFrom: ["author", "contents"],
          context: ["rowgroup", "grid", "treegrid", "table"],
          implicit: ["tr"],
          unsupported: !1
        },
        rowgroup: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-errormessage"]
          },
          owned: {
            all: ["row"]
          },
          nameFrom: ["author", "contents"],
          context: ["grid", "table", "treegrid"],
          implicit: ["tbody", "thead", "tfoot"],
          unsupported: !1
        },
        rowheader: {
          type: "structure",
          attributes: {
            allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-required", "aria-readonly", "aria-selected", "aria-sort", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["row"],
          implicit: ["th"],
          unsupported: !1
        },
        scrollbar: {
          type: "widget",
          attributes: {
            required: ["aria-controls", "aria-valuenow"],
            allowed: ["aria-valuetext", "aria-orientation", "aria-errormessage", "aria-valuemax", "aria-valuemin"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1
        },
        search: {
          type: "landmark",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: {
            nodeName: ["aside", "form", "section"]
          }
        },
        searchbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="search"]'],
          unsupported: !1,
          allowedElements: {
            nodeName: "input",
            properties: {
              type: "text"
            }
          }
        },
        section: {
          nameFrom: ["author", "contents"],
          type: "abstract",
          unsupported: !1
        },
        sectionhead: {
          nameFrom: ["author", "contents"],
          type: "abstract",
          unsupported: !1
        },
        select: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        },
        separator: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-orientation", "aria-valuenow", "aria-valuemax", "aria-valuemin", "aria-valuetext", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["hr"],
          unsupported: !1,
          allowedElements: ["li"]
        },
        slider: {
          type: "widget",
          attributes: {
            allowed: ["aria-valuetext", "aria-orientation", "aria-readonly", "aria-errormessage", "aria-valuemax", "aria-valuemin"],
            required: ["aria-valuenow"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="range"]'],
          unsupported: !1
        },
        spinbutton: {
          type: "widget",
          attributes: {
            allowed: ["aria-valuetext", "aria-required", "aria-readonly", "aria-errormessage", "aria-valuemax", "aria-valuemin"],
            required: ["aria-valuenow"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="number"]'],
          unsupported: !1,
          allowedElements: {
            nodeName: "input",
            properties: {
              type: ["text", "tel"]
            }
          }
        },
        status: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ["output"],
          unsupported: !1,
          allowedElements: ["section"]
        },
        structure: {
          type: "abstract",
          unsupported: !1
        },
        switch: {
          type: "widget",
          attributes: {
            allowed: ["aria-errormessage"],
            required: ["aria-checked"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1,
          allowedElements: ["button", {
            nodeName: "input",
            properties: {
              type: ["checkbox", "image", "button"]
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        tab: {
          type: "widget",
          attributes: {
            allowed: ["aria-selected", "aria-expanded", "aria-setsize", "aria-posinset", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["tablist"],
          unsupported: !1,
          allowedElements: [{
            nodeName: ["button", "h1", "h2", "h3", "h4", "h5", "h6", "li"]
          }, {
            nodeName: "input",
            properties: {
              type: "button"
            }
          }, {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        table: {
          type: "structure",
          attributes: {
            allowed: ["aria-colcount", "aria-rowcount", "aria-errormessage"]
          },
          owned: {
            one: ["rowgroup", "row"]
          },
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["table"],
          unsupported: !1
        },
        tablist: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            all: ["tab"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        tabpanel: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["section"]
        },
        term: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          implicit: ["dt"],
          unsupported: !1
        },
        textbox: {
          type: "widget",
          attributes: {
            allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="tel"]', 'input[type="url"]', "input:not([type])", "textarea"],
          unsupported: !1
        },
        timer: {
          type: "widget",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          unsupported: !1
        },
        toolbar: {
          type: "structure",
          attributes: {
            allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author"],
          context: null,
          implicit: ['menu[type="toolbar"]'],
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        tooltip: {
          type: "structure",
          attributes: {
            allowed: ["aria-expanded", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: null,
          unsupported: !1
        },
        tree: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-multiselectable", "aria-required", "aria-expanded", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            all: ["treeitem"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1,
          allowedElements: ["ol", "ul"]
        },
        treegrid: {
          type: "composite",
          attributes: {
            allowed: ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-readonly", "aria-required", "aria-rowcount", "aria-orientation", "aria-errormessage"]
          },
          owned: {
            one: ["rowgroup", "row"]
          },
          nameFrom: ["author"],
          context: null,
          unsupported: !1
        },
        treeitem: {
          type: "widget",
          attributes: {
            allowed: ["aria-checked", "aria-selected", "aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"]
          },
          owned: null,
          nameFrom: ["author", "contents"],
          context: ["group", "tree"],
          unsupported: !1,
          allowedElements: ["li", {
            nodeName: "a",
            attributes: {
              href: Ue
            }
          }]
        },
        widget: {
          type: "abstract",
          unsupported: !1
        },
        window: {
          nameFrom: ["author"],
          type: "abstract",
          unsupported: !1
        }
      }, _t.implicitHtmlRole = On, _t.elementsAllowedNoRole = [{
        nodeName: ["base", "body", "caption", "col", "colgroup", "datalist", "dd", "details", "dt", "head", "html", "keygen", "label", "legend", "main", "map", "math", "meta", "meter", "noscript", "optgroup", "param", "picture", "progress", "script", "source", "style", "template", "textarea", "title", "track"]
      }, {
        nodeName: "area",
        attributes: {
          href: Ue
        }
      }, {
        nodeName: "input",
        properties: {
          type: ["color", "data", "datatime", "file", "hidden", "month", "number", "password", "range", "reset", "submit", "time", "week"]
        }
      }, {
        nodeName: "link",
        attributes: {
          href: Ue
        }
      }, {
        nodeName: "menu",
        attributes: {
          type: "context"
        }
      }, {
        nodeName: "menuitem",
        attributes: {
          type: ["command", "checkbox", "radio"]
        }
      }, {
        nodeName: "select",
        condition: /* @__PURE__ */ i(function(t) {
          return t instanceof g.AbstractVirtualNode || (t = g.utils.getNodeFromTree(t)), Number(t.attr("size")) > 1;
        }, "condition"),
        properties: {
          multiple: !0
        }
      }, {
        nodeName: ["clippath", "cursor", "defs", "desc", "feblend", "fecolormatrix", "fecomponenttransfer", "fecomposite", "feconvolvematrix", "fediffuselighting", "fedisplacementmap", "fedistantlight", "fedropshadow", "feflood", "fefunca", "fefuncb", "fefuncg", "fefuncr", "fegaussianblur", "feimage", "femerge", "femergenode", "femorphology", "feoffset", "fepointlight", "fespecularlighting", "fespotlight", "fetile", "feturbulence", "filter", "hatch", "hatchpath", "lineargradient", "marker", "mask", "meshgradient", "meshpatch", "meshrow", "metadata", "mpath", "pattern", "radialgradient", "solidcolor", "stop", "switch", "view"]
      }], _t.elementsAllowedAnyRole = [{
        nodeName: "a",
        attributes: {
          href: Ds
        }
      }, {
        nodeName: "img",
        attributes: {
          alt: Ds
        }
      }, {
        nodeName: ["abbr", "address", "canvas", "div", "p", "pre", "blockquote", "ins", "del", "output", "span", "table", "tbody", "thead", "tfoot", "td", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "ruby", "rt", "rp", "bdi", "bdo", "br", "wbr", "th", "tr"]
      }], _t.evaluateRoleForElement = {
        A: /* @__PURE__ */ i(function(t) {
          var r = t.node, a = t.out;
          return r.namespaceURI === "http://www.w3.org/2000/svg" ? !0 : r.href.length ? a : !0;
        }, "A"),
        AREA: /* @__PURE__ */ i(function(t) {
          var r = t.node;
          return !r.href;
        }, "AREA"),
        BUTTON: /* @__PURE__ */ i(function(t) {
          var r = t.node, a = t.role, n = t.out;
          return r.getAttribute("type") === "menu" ? a === "menuitem" : n;
        }, "BUTTON"),
        IMG: /* @__PURE__ */ i(function(t) {
          var r = t.node, a = t.role, n = t.out;
          switch (r.alt) {
            case null:
              return n;
            case "":
              return a === "presentation" || a === "none";
            default:
              return a !== "presentation" && a !== "none";
          }
        }, "IMG"),
        INPUT: /* @__PURE__ */ i(function(t) {
          var r = t.node, a = t.role, n = t.out;
          switch (r.type) {
            case "button":
            case "image":
              return n;
            case "checkbox":
              return a === "button" && r.hasAttribute("aria-pressed") ? !0 : n;
            case "radio":
              return a === "menuitemradio";
            case "text":
              return a === "combobox" || a === "searchbox" || a === "spinbutton";
            case "tel":
              return a === "combobox" || a === "spinbutton";
            case "url":
            case "search":
            case "email":
              return a === "combobox";
            default:
              return !1;
          }
        }, "INPUT"),
        LI: /* @__PURE__ */ i(function(t) {
          var r = t.node, a = t.out, n = g.utils.matchesSelector(r, "ol li, ul li");
          return n ? a : !0;
        }, "LI"),
        MENU: /* @__PURE__ */ i(function(t) {
          var r = t.node;
          return r.getAttribute("type") !== "context";
        }, "MENU"),
        OPTION: /* @__PURE__ */ i(function(t) {
          var r = t.node, a = g.utils.matchesSelector(r, "select > option, datalist > option, optgroup > option");
          return !a;
        }, "OPTION"),
        SELECT: /* @__PURE__ */ i(function(t) {
          var r = t.node, a = t.role;
          return !r.multiple && r.size <= 1 && a === "menu";
        }, "SELECT"),
        SVG: /* @__PURE__ */ i(function(t) {
          var r = t.node, a = t.out;
          return r.parentNode && r.parentNode.namespaceURI === "http://www.w3.org/2000/svg" ? !0 : a;
        }, "SVG")
      }, _t.rolesOfType = {
        widget: ["button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "tree", "treeitem"]
      };
      var ws = _t;
      function zg(e) {
        var t = null, r = ws.role[e];
        return r && r.implicit && (t = bt(r.implicit)), t;
      }
      i(zg, "implicitNodes");
      var Ug = zg;
      function $g(e) {
        return !!gi(e).length;
      }
      i($g, "isAccessibleRef");
      var Aa = $g;
      function yi(e) {
        var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.popupRoles, n = se(e);
        if ((t = a) !== null && t !== void 0 || (a = El["aria-haspopup"].values), !a.includes(n))
          return !1;
        var o = Wg(e);
        if (_s(o))
          return !0;
        var l = e.props.id;
        if (!l)
          return !1;
        if (!e.actualNode)
          throw new Error("Unable to determine combobox popup without an actualNode");
        var u = xr(e.actualNode), s = u.querySelectorAll('[aria-owns~="'.concat(l, `"][role~="combobox"]:not(select),
     [aria-controls~="`).concat(l, '"][role~="combobox"]:not(select)'));
        return Array.from(s).some(_s);
      }
      i(yi, "_isComboboxPopup");
      var _s = /* @__PURE__ */ i(function(t) {
        return t && se(t) === "combobox";
      }, "isCombobox");
      function Wg(e) {
        for (; e = e.parent; )
          if (se(e, {
            noPresentational: !0
          }) !== null)
            return e;
        return null;
      }
      i(Wg, "nearestParentWithRole");
      function Gg(e) {
        return e = B(e), fa(e);
      }
      i(Gg, "label2");
      var xs = Gg;
      function Yg(e) {
        var t = de.ariaRoles[e];
        return !t || !Array.isArray(t.requiredAttrs) ? [] : ae(t.requiredAttrs);
      }
      i(Yg, "requiredAttr");
      var Es = Yg;
      function Kg(e) {
        var t = de.ariaRoles[e];
        return !t || !Array.isArray(t.requiredContext) ? null : ae(t.requiredContext);
      }
      i(Kg, "requiredContext");
      var Di = Kg;
      function Xg(e) {
        var t = de.ariaRoles[e];
        return !t || !Array.isArray(t.requiredOwned) ? null : ae(t.requiredOwned);
      }
      i(Xg, "requiredOwned");
      var wi = Xg;
      function Jg(e, t) {
        e = e instanceof Z ? e : B(e);
        var r, a, n = e.attr(t), o = de.ariaAttrs[t];
        if (!o || o.allowEmpty && (!n || n.trim() === ""))
          return !0;
        switch (o.type) {
          case "boolean":
            return ["true", "false"].includes(n.toLowerCase());
          case "nmtoken":
            return typeof n == "string" && o.values.includes(n.toLowerCase());
          case "nmtokens":
            return a = ze(n), a.reduce(function(s, c) {
              return s && o.values.includes(c);
            }, a.length !== 0);
          case "idref":
            try {
              var l = He(e.actualNode);
              return !!(n && l.getElementById(n));
            } catch {
              throw new TypeError("Cannot resolve id references for partial DOM");
            }
          case "idrefs":
            return st(e, t).some(function(s) {
              return !!s;
            });
          case "string":
            return n.trim() !== "";
          case "decimal":
            return r = n.match(/^[-+]?([0-9]*)\.?([0-9]*)$/), !!(r && (r[1] || r[2]));
          case "int":
            var u = typeof o.minValue < "u" ? o.minValue : -1 / 0;
            return /^[-+]?[0-9]+$/.test(n) && parseInt(n) >= u;
        }
      }
      i(Jg, "validateAttrValue");
      var As = Jg;
      function Qg(e) {
        var t = de.ariaAttrs[e];
        return !!t;
      }
      i(Qg, "validateAttr");
      var Nr = Qg;
      function Zg(e, t, r) {
        var a = ze(r.attr("role")).filter(function(n) {
          return mt(n) === "abstract";
        });
        return a.length > 0 ? (this.data(a), !0) : !1;
      }
      i(Zg, "abstractroleEvaluate");
      var eb = Zg;
      function tb(e, t, r) {
        var a = [], n = se(r), o = r.attrNames, l = vs(n);
        Array.isArray(t[n]) && (l = Pr(t[n].concat(l)));
        var u = le.get("aria-allowed-attr-table", function() {
          return /* @__PURE__ */ new WeakMap();
        });
        function s() {
          if (r.parent && n === "row") {
            var h = Xe(r, 'table, [role="treegrid"], [role="table"], [role="grid"]'), y = u.get(h);
            if (h && !y && (y = se(h), u.set(h, y)), ["table", "grid"].includes(y) && n === "row")
              return !0;
          }
        }
        i(s, "validateRowAttrs");
        var c = Array.isArray(t.validTreeRowAttrs) ? t.validTreeRowAttrs : [], d = {};
        if (c.forEach(function(h) {
          d[h] = s;
        }), l)
          for (var f = 0; f < o.length; f++) {
            var p, m = o[f];
            (Nr(m) && (p = d[m]) !== null && p !== void 0 && p.call(d) || Nr(m) && !l.includes(m)) && a.push(m + '="' + r.attr(m) + '"');
          }
        return a.length ? (this.data(a), !oi(r) && !n && !Ce(r) ? void 0 : !1) : !0;
      }
      i(tb, "ariaAllowedAttrEvaluate");
      function rb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t.allowImplicit, n = a === void 0 ? !0 : a, o = t.ignoredTags, l = o === void 0 ? [] : o, u = r.props.nodeName;
        if (l.map(function(c) {
          return c.toLowerCase();
        }).includes(u))
          return !0;
        var s = ys(r, n);
        return s.length ? (this.data(s), xe(r) ? !1 : void 0) : !0;
      }
      i(rb, "ariaAllowedRoleEvaluate");
      var ab = rb;
      function nb(e, t, r) {
        return r.attr("aria-busy") === "true";
      }
      i(nb, "ariaBusyEvaluate");
      function ib(e, t, r) {
        t = Array.isArray(t) ? t : [];
        var a = r.attr("aria-errormessage"), n = r.hasAttr("aria-errormessage"), o = r.attr("aria-invalid"), l = r.hasAttr("aria-invalid");
        if (!l || o === "false")
          return !0;
        function u(s) {
          if (s.trim() === "")
            return de.ariaAttrs["aria-errormessage"].allowEmpty;
          var c;
          try {
            c = s && st(r, "aria-errormessage")[0];
          } catch {
            this.data({
              messageKey: "idrefs",
              values: ze(s)
            });
            return;
          }
          if (c)
            return xe(c) ? c.getAttribute("role") === "alert" || c.getAttribute("aria-live") === "assertive" || c.getAttribute("aria-live") === "polite" || ze(r.attr("aria-describedby")).indexOf(s) > -1 : (this.data({
              messageKey: "hidden",
              values: ze(s)
            }), !1);
        }
        return i(u, "validateAttrValue2"), t.indexOf(a) === -1 && n ? (this.data(ze(a)), u.call(this, a)) : !0;
      }
      i(ib, "ariaErrormessageEvaluate");
      var ob = ib;
      function lb(e, t, r) {
        return r.attr("aria-hidden") !== "true";
      }
      i(lb, "ariaHiddenBodyEvaluate");
      var ub = lb;
      function sb(e, t, r) {
        var a = r.attr("aria-level"), n = parseInt(a, 10);
        if (!(n > 6))
          return !0;
      }
      i(sb, "ariaLevelEvaluate");
      var cb = sb;
      function db(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t?.elementsAllowedAriaLabel || [], n = r.props.nodeName, o = se(r, {
          chromium: !0
        }), l = fb(o, n, a), u = l.filter(function(d) {
          return r.attrNames.includes(d) ? Q(r.attr(d)) !== "" : !1;
        });
        if (u.length === 0)
          return !1;
        var s = r.hasAttr("role") ? "hasRole" : "noRole";
        s += u.length > 1 ? "Plural" : "Singular", this.data({
          role: o,
          nodeName: n,
          messageKey: s,
          prohibited: u
        });
        var c = Ft(r, {
          subtreeDescendant: !0
        });
        if (Q(c) === "")
          return !0;
      }
      i(db, "ariaProhibitedAttrEvaluate");
      function fb(e, t, r) {
        var a = de.ariaRoles[e];
        return a ? a.prohibitedAttrs || [] : !!e || r.includes(t) ? [] : ["aria-label", "aria-labelledby"];
      }
      i(fb, "listProhibitedAttrs");
      var Fs = {};
      we(Fs, {
        getAriaRolesByType: /* @__PURE__ */ i(function() {
          return ur;
        }, "getAriaRolesByType"),
        getAriaRolesSupportingNameFromContent: /* @__PURE__ */ i(function() {
          return bi;
        }, "getAriaRolesSupportingNameFromContent"),
        getElementSpec: /* @__PURE__ */ i(function() {
          return Ht;
        }, "getElementSpec"),
        getElementsByContentType: /* @__PURE__ */ i(function() {
          return kn;
        }, "getElementsByContentType"),
        getGlobalAriaAttrs: /* @__PURE__ */ i(function() {
          return Vt;
        }, "getGlobalAriaAttrs"),
        implicitHtmlRoles: /* @__PURE__ */ i(function() {
          return On;
        }, "implicitHtmlRoles")
      });
      function pb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = be(r), n = r.attrNames, o = Es(a);
        if (Array.isArray(t[a]) && (o = Pr(t[a], o)), !a || !n.length || !o.length || mb(r, a) || vb(r, a))
          return !0;
        var l = Ht(r), u = o.filter(function(s) {
          return !r.attr(s) && !hb(l, s);
        });
        return u.length ? (this.data(u), !1) : !0;
      }
      i(pb, "ariaRequiredAttrEvaluate");
      function mb(e, t) {
        return t === "separator" && !Ce(e);
      }
      i(mb, "isStaticSeparator");
      function hb(e, t) {
        var r;
        return ((r = e.implicitAttrs) === null || r === void 0 ? void 0 : r[t]) !== void 0;
      }
      i(hb, "hasImplicitAttr");
      function vb(e, t) {
        return t === "combobox" && e.attr("aria-expanded") === "false";
      }
      i(vb, "isClosedCombobox");
      function gb(e, t, r) {
        var a = t && Array.isArray(t.reviewEmpty) ? t.reviewEmpty : [], n = be(r, {
          dpub: !0
        }), o = wi(n);
        if (o === null)
          return !0;
        var l = bb(r, o), u = l.filter(function(c) {
          var d = c.role;
          return !o.includes(d);
        });
        if (u.length)
          return this.relatedNodes(u.map(function(c) {
            var d = c.ownedElement;
            return d;
          })), this.data({
            messageKey: "unallowed",
            values: u.map(function(c) {
              var d = c.ownedElement, f = c.attr;
              return wb(d, f);
            }).filter(function(c, d, f) {
              return f.indexOf(c) === d;
            }).join(", ")
          }), !1;
        var s = yb(r, n, o, l);
        if (!s)
          return !0;
        if (this.data(s), !(a.includes(n) && !Sr(r, !1, !0) && !l.length && (!r.hasAttr("aria-owns") || !st(e, "aria-owns").length)))
          return !1;
      }
      i(gb, "ariaRequiredChildrenEvaluate");
      function bb(e, t) {
        for (var r = [], a = kr(e), n = /* @__PURE__ */ i(function(s) {
          var c = a[s];
          if (c.props.nodeType !== 1)
            return "continue";
          var d = se(c, {
            noPresentational: !0
          }), f = Db(c), p = !!f || Ce(c);
          !xe(c) || !d && !p || ["group", "rowgroup"].includes(d) && t.some(function(m) {
            return m === d;
          }) ? a.push.apply(a, ae(c.children)) : (d || p) && r.push({
            role: d,
            attr: f || "tabindex",
            ownedElement: c
          });
        }, "_loop5"), o = 0; o < a.length; o++)
          var l = n(o);
        return r;
      }
      i(bb, "getOwnedRoles");
      function yb(e, t, r, a) {
        for (var n = /* @__PURE__ */ i(function(s) {
          var c = a[s].role;
          if (r.includes(c))
            return r = r.filter(function(d) {
              return d !== c;
            }), {
              v: null
            };
        }, "_loop6"), o = 0; o < a.length; o++) {
          var l = n(o);
          if (P(l) === "object")
            return l.v;
        }
        return r.length ? r : null;
      }
      i(yb, "missingRequiredChildren");
      function Db(e) {
        return Vt().find(function(t) {
          return e.hasAttr(t);
        });
      }
      i(Db, "getGlobalAriaAttr");
      function wb(e, t) {
        var r = e.props, a = r.nodeName, n = r.nodeType;
        if (n === 3)
          return "#text";
        var o = be(e, {
          dpub: !0
        });
        return o ? "[role=".concat(o, "]") : t ? a + "[".concat(t, "]") : a;
      }
      i(wb, "getUnallowedSelector");
      function Cs(e, t, r, a) {
        var n = be(e);
        if (r || (r = Di(n)), !r)
          return null;
        for (var o = r.includes("group"), l = a ? e : e.parent; l; ) {
          var u = se(l, {
            noPresentational: !0
          });
          if (!u)
            l = l.parent;
          else if (u === "group" && o)
            t.includes(n) && r.push(n), r = r.filter(function(s) {
              return s !== "group";
            }), l = l.parent;
          else
            return r.includes(u) ? null : r;
        }
        return r;
      }
      i(Cs, "getMissingContext");
      function _b(e) {
        for (var t = [], r = null; e; ) {
          if (e.getAttribute("id")) {
            var a = Fe(e.getAttribute("id")), n = He(e);
            r = n.querySelector("[aria-owns~=".concat(a, "]")), r && t.push(r);
          }
          e = e.parentElement;
        }
        return t.length ? t : null;
      }
      i(_b, "getAriaOwners");
      function xb(e, t, r) {
        var a = t && Array.isArray(t.ownGroupRoles) ? t.ownGroupRoles : [], n = Cs(r, a);
        if (!n)
          return !0;
        var o = _b(e);
        if (o) {
          for (var l = 0, u = o.length; l < u; l++)
            if (n = Cs(B(o[l]), a, n, !0), !n)
              return !0;
        }
        return this.data(n), !1;
      }
      i(xb, "ariaRequiredParentEvaluate");
      var Eb = xb;
      function Ab(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = se(r), n = t.supportedRoles || [];
        if (n.includes(a))
          return !0;
        if (!(a && a !== "presentation" && a !== "none"))
          return !1;
      }
      i(Ab, "ariaRoledescriptionEvaluate");
      var Fb = Ab;
      function Cb(e, t, r) {
        var a = r.attrNames.filter(function(n) {
          var o = de.ariaAttrs[n];
          if (!Nr(n))
            return !1;
          var l = o.unsupported;
          return P(l) !== "object" ? !!l : !Tr(e, l.exceptions);
        });
        return a.length ? (this.data(a), !0) : !1;
      }
      i(Cb, "ariaUnsupportedAttrEvaluate");
      var Tb = Cb;
      function kb(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = [], n = /^aria-/;
        return r.attrNames.forEach(function(o) {
          t.indexOf(o) === -1 && n.test(o) && !Nr(o) && a.push(o);
        }), a.length ? (this.data(a), !1) : !0;
      }
      i(kb, "ariaValidAttrEvaluate");
      var Rb = kb;
      function Sb(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = "", n = "", o = [], l = /^aria-/, u = ["aria-errormessage"], s = {
          "aria-controls": /* @__PURE__ */ i(function() {
            return r.attr("aria-expanded") !== "false" && r.attr("aria-selected") !== "false";
          }, "ariaControls"),
          "aria-current": /* @__PURE__ */ i(function(d) {
            d || (a = 'aria-current="'.concat(r.attr("aria-current"), '"'), n = "ariaCurrent");
          }, "ariaCurrent"),
          "aria-owns": /* @__PURE__ */ i(function() {
            return r.attr("aria-expanded") !== "false";
          }, "ariaOwns"),
          "aria-describedby": /* @__PURE__ */ i(function(d) {
            d || (a = 'aria-describedby="'.concat(r.attr("aria-describedby"), '"'), n = g._tree && g._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
          }, "ariaDescribedby"),
          "aria-labelledby": /* @__PURE__ */ i(function(d) {
            d || (a = 'aria-labelledby="'.concat(r.attr("aria-labelledby"), '"'), n = g._tree && g._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
          }, "ariaLabelledby")
        };
        if (r.attrNames.forEach(function(c) {
          if (!(u.includes(c) || t.includes(c) || !l.test(c))) {
            var d, f = r.attr(c);
            try {
              d = As(r, c);
            } catch {
              a = "".concat(c, '="').concat(f, '"'), n = "idrefs";
              return;
            }
            (s[c] ? s[c](d) : !0) && !d && (f === "" && !Ob(c) ? (a = c, n = "empty") : o.push("".concat(c, '="').concat(f, '"')));
          }
        }), o.length)
          return this.data(o), !1;
        if (a) {
          this.data({
            messageKey: n,
            needsReview: a
          });
          return;
        }
        return !0;
      }
      i(Sb, "ariaValidAttrValueEvaluate");
      function Ob(e) {
        var t;
        return ((t = de.ariaAttrs[e]) === null || t === void 0 ? void 0 : t.type) === "string";
      }
      i(Ob, "isStringType");
      function Ib(e, t, r) {
        var a = se(r, {
          dpub: !0,
          fallback: !0
        }), n = de.ariaRoles[a];
        return n != null && n.deprecated ? (this.data(a), !0) : !1;
      }
      i(Ib, "deprecatedroleEvaluate");
      function Pb(e, t) {
        var r = dt(e);
        return !r && t.length === 2 && t.includes("none") && t.includes("presentation");
      }
      i(Pb, "nonePresentationOnElementWithNoImplicitRole");
      function Mb(e, t, r) {
        var a = ze(r.attr("role"));
        return a.length <= 1 ? !1 : Pb(r, a) ? void 0 : !0;
      }
      i(Mb, "fallbackroleEvaluate");
      var Nb = Mb;
      function qb(e, t, r) {
        var a = Vt().filter(function(n) {
          return r.hasAttr(n);
        });
        return this.data(a), a.length > 0;
      }
      i(qb, "hasGlobalAriaAttributeEvaluate");
      var Bb = qb;
      function Lb(e) {
        var t = e.getAttribute("role");
        if (t === null)
          return !1;
        var r = mt(t);
        return r === "widget" || r === "composite";
      }
      i(Lb, "hasWidgetRoleEvaluate");
      var Vb = Lb;
      function jb(e, t, r) {
        var a = ze(r.attr("role")), n = a.every(function(o) {
          return !nr(o, {
            allowAbstract: !0
          });
        });
        return n ? (this.data(a), !0) : !1;
      }
      i(jb, "invalidroleEvaluate");
      var Hb = jb;
      function zb(e, t, r) {
        return Ce(r);
      }
      i(zb, "isElementFocusableEvaluate");
      var Ub = zb;
      function $b(e, t, r) {
        var a = se(r, {
          noImplicit: !0
        });
        this.data(a);
        var n, o;
        try {
          n = Q(Pn(r)).toLowerCase(), o = Q(Ye(r)).toLowerCase();
        } catch {
          return;
        }
        if (!o && !n)
          return !1;
        if (!(!o && n) && !!o.includes(n))
          return !1;
      }
      i($b, "noImplicitExplicitLabelEvaluate");
      var Wb = $b;
      function Gb(e, t, r) {
        var a = se(r, {
          dpub: !0,
          fallback: !0
        }), n = Tn(a);
        return n && this.data(a), n;
      }
      i(Gb, "unsupportedroleEvaluate");
      var Yb = Gb, Kb = {
        ARTICLE: !0,
        ASIDE: !0,
        NAV: !0,
        SECTION: !0
      }, Xb = {
        application: !0,
        article: !0,
        banner: !1,
        complementary: !0,
        contentinfo: !0,
        form: !0,
        main: !0,
        navigation: !0,
        region: !0,
        search: !1
      };
      function Jb(e) {
        var t = e.nodeName.toUpperCase();
        return Kb[t] || !1;
      }
      i(Jb, "validScrollableTagName");
      function Qb(e, t) {
        var r = be(e);
        return r && (Xb[r] || t.roles.includes(r)) || !1;
      }
      i(Qb, "validScrollableRole");
      function Zb(e, t) {
        return Qb(e, t) || Jb(e);
      }
      i(Zb, "validScrollableSemanticsEvaluate");
      var ey = Zb, Ts = {};
      we(Ts, {
        Color: /* @__PURE__ */ i(function() {
          return ke;
        }, "Color"),
        centerPointOfRect: /* @__PURE__ */ i(function() {
          return ry;
        }, "centerPointOfRect"),
        elementHasImage: /* @__PURE__ */ i(function() {
          return va;
        }, "elementHasImage"),
        elementIsDistinct: /* @__PURE__ */ i(function() {
          return Rs;
        }, "elementIsDistinct"),
        filteredRectStack: /* @__PURE__ */ i(function() {
          return oy;
        }, "filteredRectStack"),
        flattenColors: /* @__PURE__ */ i(function() {
          return vt;
        }, "flattenColors"),
        flattenShadowColors: /* @__PURE__ */ i(function() {
          return xi;
        }, "flattenShadowColors"),
        getBackgroundColor: /* @__PURE__ */ i(function() {
          return Br;
        }, "getBackgroundColor"),
        getBackgroundStack: /* @__PURE__ */ i(function() {
          return Ei;
        }, "getBackgroundStack"),
        getContrast: /* @__PURE__ */ i(function() {
          return sr;
        }, "getContrast"),
        getForegroundColor: /* @__PURE__ */ i(function() {
          return Ca;
        }, "getForegroundColor"),
        getOwnBackgroundColor: /* @__PURE__ */ i(function() {
          return Ut;
        }, "getOwnBackgroundColor"),
        getRectStack: /* @__PURE__ */ i(function() {
          return Ss;
        }, "getRectStack"),
        getStackingContext: /* @__PURE__ */ i(function() {
          return Ai;
        }, "getStackingContext"),
        getTextShadowColors: /* @__PURE__ */ i(function() {
          return Fa;
        }, "getTextShadowColors"),
        hasValidContrastRatio: /* @__PURE__ */ i(function() {
          return Fy;
        }, "hasValidContrastRatio"),
        incompleteData: /* @__PURE__ */ i(function() {
          return Be;
        }, "incompleteData"),
        stackingContextToColor: /* @__PURE__ */ i(function() {
          return qr;
        }, "stackingContextToColor")
      });
      function ty(e) {
        if (!(e.left > D.innerWidth) && !(e.top > D.innerHeight)) {
          var t = Math.min(Math.ceil(e.left + e.width / 2), D.innerWidth - 1), r = Math.min(Math.ceil(e.top + e.height / 2), D.innerHeight - 1);
          return {
            x: t,
            y: r
          };
        }
      }
      i(ty, "centerPointOfRect");
      var ry = ty;
      function ks(e) {
        return e.getPropertyValue("font-family").split(/[,;]/g).map(function(t) {
          return t.trim().toLowerCase();
        });
      }
      i(ks, "_getFonts");
      function ay(e, t) {
        var r = D.getComputedStyle(e);
        if (r.getPropertyValue("background-image") !== "none")
          return !0;
        var a = ["border-bottom", "border-top", "outline"].reduce(function(u, s) {
          var c = new ke();
          return c.parseString(r.getPropertyValue(s + "-color")), u || r.getPropertyValue(s + "-style") !== "none" && parseFloat(r.getPropertyValue(s + "-width")) > 0 && c.alpha !== 0;
        }, !1);
        if (a)
          return !0;
        var n = D.getComputedStyle(t);
        if (ks(r)[0] !== ks(n)[0])
          return !0;
        var o = ["text-decoration-line", "text-decoration-style", "font-weight", "font-style", "font-size"].reduce(function(u, s) {
          return u || r.getPropertyValue(s) !== n.getPropertyValue(s);
        }, !1), l = r.getPropertyValue("text-decoration");
        return l.split(" ").length < 3 && (o = o || l !== n.getPropertyValue("text-decoration")), o;
      }
      i(ay, "elementIsDistinct");
      var Rs = ay;
      function ny(e) {
        var t = _l(e), r = zn(e);
        return !r || r.length <= 1 ? [t] : r.some(function(a) {
          return a === void 0;
        }) ? null : (r.splice(0, 0, t), r);
      }
      i(ny, "getRectStack2");
      var Ss = ny;
      function iy(e) {
        var t = Ss(e);
        if (t && t.length === 1)
          return t[0];
        if (t && t.length > 1) {
          var r = t.shift(), a;
          return t.forEach(function(n, o) {
            if (o !== 0) {
              var l = t[o - 1], u = t[o];
              a = l.every(function(s, c) {
                return s === u[c];
              }) || r.includes(e);
            }
          }), a ? t[0] : (Be.set("bgColor", "elmPartiallyObscuring"), null);
        }
        return Be.set("bgColor", "outsideViewport"), null;
      }
      i(iy, "filteredRectStack");
      var oy = iy;
      function ly(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      i(ly, "clamp");
      var uy = {
        normal: /* @__PURE__ */ i(function(t, r) {
          return r;
        }, "normal"),
        multiply: /* @__PURE__ */ i(function(t, r) {
          return r * t;
        }, "multiply"),
        screen: /* @__PURE__ */ i(function(t, r) {
          return t + r - t * r;
        }, "screen"),
        overlay: /* @__PURE__ */ i(function(t, r) {
          return this["hard-light"](r, t);
        }, "overlay"),
        darken: /* @__PURE__ */ i(function(t, r) {
          return Math.min(t, r);
        }, "darken"),
        lighten: /* @__PURE__ */ i(function(t, r) {
          return Math.max(t, r);
        }, "lighten"),
        "color-dodge": /* @__PURE__ */ i(function(t, r) {
          return t === 0 ? 0 : r === 1 ? 1 : Math.min(1, t / (1 - r));
        }, "colorDodge"),
        "color-burn": /* @__PURE__ */ i(function(t, r) {
          return t === 1 ? 1 : r === 0 ? 0 : 1 - Math.min(1, (1 - t) / r);
        }, "colorBurn"),
        "hard-light": /* @__PURE__ */ i(function(t, r) {
          return r <= 0.5 ? this.multiply(t, 2 * r) : this.screen(t, 2 * r - 1);
        }, "hardLight"),
        "soft-light": /* @__PURE__ */ i(function(t, r) {
          if (r <= 0.5)
            return t - (1 - 2 * r) * t * (1 - t);
          var a = t <= 0.25 ? ((16 * t - 12) * t + 4) * t : Math.sqrt(t);
          return t + (2 * r - 1) * (a - t);
        }, "softLight"),
        difference: /* @__PURE__ */ i(function(t, r) {
          return Math.abs(t - r);
        }, "difference"),
        exclusion: /* @__PURE__ */ i(function(t, r) {
          return t + r - 2 * t * r;
        }, "exclusion")
      };
      function _i(e, t, r, a, n) {
        return t * (1 - a) * e + t * a * uy[n](r / 255, e / 255) * 255 + (1 - t) * a * r;
      }
      i(_i, "simpleAlphaCompositing");
      function sy(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "normal", a = _i(e.red, e.alpha, t.red, t.alpha, r), n = _i(e.green, e.alpha, t.green, t.alpha, r), o = _i(e.blue, e.alpha, t.blue, t.alpha, r), l = ly(e.alpha + t.alpha * (1 - e.alpha), 0, 1);
        if (l === 0)
          return new ke(a, n, o, l);
        var u = Math.round(a / l), s = Math.round(n / l), c = Math.round(o / l);
        return new ke(u, s, c, l);
      }
      i(sy, "flattenColors");
      var vt = sy;
      function xi(e, t) {
        var r = e.alpha, a = (1 - r) * t.red + r * e.red, n = (1 - r) * t.green + r * e.green, o = (1 - r) * t.blue + r * e.blue, l = e.alpha + t.alpha * (1 - e.alpha);
        return new ke(a, n, o, l);
      }
      i(xi, "_flattenShadowColors");
      function Ei(e) {
        for (var t = zn(e).map(function(n) {
          return n = Du(n, e), n = cy(n), n;
        }), r = 0; r < t.length; r++) {
          var a = t[r];
          if (a[0] !== e)
            return Be.set("bgColor", "bgOverlap"), null;
          if (r !== 0 && !dy(a, t[0]))
            return Be.set("bgColor", "elmPartiallyObscuring"), null;
        }
        return t[0] || null;
      }
      i(Ei, "_getBackgroundStack");
      function cy(e) {
        var t = e.indexOf(R.body), r = e, a = Ut(D.getComputedStyle(R.documentElement));
        if (t > 1 && a.alpha === 0 && !va(R.documentElement)) {
          t > 1 && (r.splice(t, 1), r.push(R.body));
          var n = r.indexOf(R.documentElement);
          n > 0 && (r.splice(n, 1), r.push(R.documentElement));
        }
        return r;
      }
      i(cy, "sortPageBackground");
      function dy(e, t) {
        if (e === t)
          return !0;
        if (e === null || t === null || e.length !== t.length)
          return !1;
        for (var r = 0; r < e.length; ++r)
          if (e[r] !== t[r])
            return !1;
        return !0;
      }
      i(dy, "shallowArraysEqual");
      function fy(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.minRatio, a = t.maxRatio, n = D.getComputedStyle(e), o = n.getPropertyValue("text-shadow");
        if (o === "none")
          return [];
        var l = n.getPropertyValue("font-size"), u = parseInt(l);
        pe(isNaN(u) === !1, "Unable to determine font-size value ".concat(l));
        var s = [], c = py(o);
        return c.forEach(function(d) {
          var f = d.colorStr, p = d.pixels;
          f = f || n.getPropertyValue("color");
          var m = ge(p, 3), h = m[0], y = m[1], w = m[2], v = w === void 0 ? 0 : w;
          if ((!r || v >= u * r) && (!a || v < u * a)) {
            var b = my({
              colorStr: f,
              offsetY: h,
              offsetX: y,
              blurRadius: v,
              fontSize: u
            });
            s.push(b);
          }
        }), s;
      }
      i(fy, "getTextShadowColors");
      function py(e) {
        var t = {
          pixels: []
        }, r = e.trim(), a = [t];
        if (!r)
          return [];
        for (; r; ) {
          var n = r.match(/^rgba?\([0-9,.\s]+\)/i) || r.match(/^[a-z]+/i) || r.match(/^#[0-9a-f]+/i), o = r.match(/^([0-9.-]+)px/i) || r.match(/^(0)/);
          if (n)
            pe(!t.colorStr, "Multiple colors identified in text-shadow: ".concat(e)), r = r.replace(n[0], "").trim(), t.colorStr = n[0];
          else if (o) {
            pe(t.pixels.length < 3, "Too many pixel units in text-shadow: ".concat(e)), r = r.replace(o[0], "").trim();
            var l = parseFloat((o[1][0] === "." ? "0" : "") + o[1]);
            t.pixels.push(l);
          } else if (r[0] === ",")
            pe(t.pixels.length >= 2, "Missing pixel value in text-shadow: ".concat(e)), t = {
              pixels: []
            }, a.push(t), r = r.substr(1).trim();
          else
            throw new Error("Unable to process text-shadows: ".concat(e));
        }
        return a;
      }
      i(py, "parseTextShadows");
      function my(e) {
        var t = e.colorStr, r = e.offsetX, a = e.offsetY, n = e.blurRadius, o = e.fontSize;
        if (r > n || a > n)
          return new ke(0, 0, 0, 0);
        var l = new ke();
        return l.parseString(t), l.alpha *= hy(n, o), l;
      }
      i(my, "textShadowColor");
      function hy(e, t) {
        if (e === 0)
          return 1;
        var r = e / t;
        return 0.185 / (r + 0.4);
      }
      i(hy, "blurRadiusToAlpha");
      var Fa = fy;
      function Ai(e, t) {
        var r, a = B(e);
        if (a._stackingContext)
          return a._stackingContext;
        var n = [], o = /* @__PURE__ */ new Map();
        return t = (r = t) !== null && r !== void 0 ? r : Ei(e), t.forEach(function(l) {
          var u, s = B(l), c = by(s), d = s._stackingOrder.filter(function(m) {
            var h = m.vNode;
            return !!h;
          });
          d.forEach(function(m, h) {
            var y, w = m.vNode, v = (y = d[h - 1]) === null || y === void 0 ? void 0 : y.vNode, b = Is(o, w, v);
            h === 0 && !o.get(w) && n.unshift(b), o.set(w, b);
          });
          var f = (u = d[d.length - 1]) === null || u === void 0 ? void 0 : u.vNode, p = Is(o, s, f);
          d.length || n.unshift(p), p.bgColor = c;
        }), a._stackingContext = n, n;
      }
      i(Ai, "_getStackingContext");
      function qr(e) {
        var t;
        if (!((t = e.descendants) !== null && t !== void 0 && t.length)) {
          var r = e.bgColor;
          return r.alpha *= e.opacity, {
            color: r,
            blendMode: e.blendMode
          };
        }
        var a = e.descendants.reduce(vy, Os()), n = vt(a, e.bgColor, e.descendants[0].blendMode);
        return n.alpha *= e.opacity, {
          color: n,
          blendMode: e.blendMode
        };
      }
      i(qr, "_stackingContextToColor");
      function vy(e, t) {
        var r;
        e instanceof ke ? r = e : r = qr(e).color;
        var a = qr(t).color;
        return vt(a, r, t.blendMode);
      }
      i(vy, "reduceToColor");
      function Os(e, t) {
        var r;
        return {
          vNode: e,
          ancestor: t,
          opacity: parseFloat((r = e?.getComputedStylePropertyValue("opacity")) !== null && r !== void 0 ? r : 1),
          bgColor: new ke(0, 0, 0, 0),
          blendMode: gy(e?.getComputedStylePropertyValue("mix-blend-mode")),
          descendants: []
        };
      }
      i(Os, "createStackingContext");
      function gy(e) {
        return e || void 0;
      }
      i(gy, "normalizeBlendMode");
      function Is(e, t, r) {
        var a, n = e.get(r), o = (a = e.get(t)) !== null && a !== void 0 ? a : Os(t, n);
        return n && r !== t && !n.descendants.includes(o) && n.descendants.unshift(o), o;
      }
      i(Is, "addToStackingContext");
      function by(e) {
        var t = new ke();
        return t.parseString(e.getComputedStylePropertyValue("background-color")), t;
      }
      i(by, "getOwnBackgroundColor2");
      function Br(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.1, a = B(e), n = a._cache.getBackgroundColor;
        if (n)
          return t.push.apply(t, ae(n.bgElms)), Be.set("bgColor", n.incompleteData), n.bgColor;
        var o = yy(e, t, r);
        return a._cache.getBackgroundColor = {
          bgColor: o,
          bgElms: t,
          incompleteData: Be.get("bgColor")
        }, o;
      }
      i(Br, "_getBackgroundColor2");
      function yy(e, t, r) {
        var a, n = Ei(e);
        if (!n)
          return null;
        var o = Hn(e), l = Fa(e, {
          minRatio: r
        });
        l.length && (l = [{
          color: l.reduce(xi)
        }]);
        for (var u = 0; u < n.length; u++) {
          var s = n[u], c = D.getComputedStyle(s);
          if (va(s, c))
            return t.push(s), null;
          var d = Ut(c);
          if (d.alpha !== 0) {
            if (c.getPropertyValue("display") !== "inline" && !Ps(s, o))
              return t.push(s), Be.set("bgColor", "elmPartiallyObscured"), null;
            if (t.push(s), d.alpha === 1)
              break;
          }
        }
        var f = Ai(e, n);
        l = f.map(qr).concat(l);
        var p = Dy(e, n.includes(R.body));
        if ((a = l).unshift.apply(a, ae(p)), l.length === 0)
          return new ke(255, 255, 255, 1);
        var m = l.reduce(function(h, y) {
          return vt(y.color, h.color instanceof ke ? h.color : h, y.blendMode);
        });
        return vt(m.color instanceof ke ? m.color : m, new ke(255, 255, 255, 1));
      }
      i(yy, "_getBackgroundColor");
      function Ps(e, t) {
        t = Array.isArray(t) ? t : [t];
        var r = e.getBoundingClientRect(), a = r.right, n = r.bottom, o = D.getComputedStyle(e), l = o.getPropertyValue("overflow");
        return (["scroll", "auto"].includes(l) || e instanceof D.HTMLHtmlElement) && (a = r.left + e.scrollWidth, n = r.top + e.scrollHeight), t.every(function(u) {
          return u.top >= r.top && u.bottom <= n && u.left >= r.left && u.right <= a;
        });
      }
      i(Ps, "fullyEncompasses");
      function Ms(e) {
        return e || void 0;
      }
      i(Ms, "normalizeBlendMode2");
      function Dy(e, t) {
        var r = [];
        if (!t) {
          var a = R.documentElement, n = R.body, o = D.getComputedStyle(a), l = D.getComputedStyle(n), u = Ut(o), s = Ut(l), c = s.alpha !== 0 && Ps(n, e.getBoundingClientRect());
          (s.alpha !== 0 && u.alpha === 0 || c && s.alpha !== 1) && r.unshift({
            color: s,
            blendMode: Ms(l.getPropertyValue("mix-blend-mode"))
          }), u.alpha !== 0 && (!c || c && s.alpha !== 1) && r.unshift({
            color: u,
            blendMode: Ms(o.getPropertyValue("mix-blend-mode"))
          });
        }
        return r;
      }
      i(Dy, "getPageBackgroundColors");
      function wy(e, t) {
        if (!t || !e)
          return null;
        t.alpha < 1 && (t = vt(t, e));
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
      }
      i(wy, "getContrast");
      var sr = wy;
      function Ca(e, t, r) {
        for (var a, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = D.getComputedStyle(e), l = [function() {
          return xy(o, n);
        }, function() {
          return _y(o);
        }, function() {
          return Fa(e, {
            minRatio: 0
          });
        }], u = [], s = 0, c = l; s < c.length; s++) {
          var d = c[s], f = d();
          if (!!f && (u = u.concat(f), f.alpha === 1))
            break;
        }
        var p = u.reduce(function(w, v) {
          return vt(w, v);
        });
        if ((a = r) !== null && a !== void 0 || (r = Br(e, [])), r === null) {
          var m = Be.get("bgColor");
          return Be.set("fgColor", m), null;
        }
        var h = Ai(e), y = Ns(h, e);
        return vt(Ey(p, y, h), new ke(255, 255, 255, 1));
      }
      i(Ca, "_getForegroundColor");
      function _y(e) {
        return new ke().parseString(e.getPropertyValue("-webkit-text-fill-color") || e.getPropertyValue("color"));
      }
      i(_y, "getTextColor");
      function xy(e, t) {
        var r = t.textStrokeEmMin, a = r === void 0 ? 0 : r, n = parseFloat(e.getPropertyValue("-webkit-text-stroke-width"));
        if (n === 0)
          return null;
        var o = e.getPropertyValue("font-size"), l = n / parseFloat(o);
        if (isNaN(l) || l < a)
          return null;
        var u = e.getPropertyValue("-webkit-text-stroke-color");
        return new ke().parseString(u);
      }
      i(xy, "getStrokeColor");
      function Ey(e, t, r) {
        for (; t; ) {
          var a;
          if (t.opacity === 1 && t.ancestor) {
            t = t.ancestor;
            continue;
          }
          e.alpha *= t.opacity;
          var n = ((a = t.ancestor) === null || a === void 0 ? void 0 : a.descendants) || r;
          t.opacity !== 1 && (n = n.slice(0, n.indexOf(t)));
          var o = n.map(qr);
          if (!o.length) {
            t = t.ancestor;
            continue;
          }
          var l = o.reduce(function(u, s) {
            return vt(s.color, u.color instanceof ke ? u.color : u);
          }, {
            color: new ke(0, 0, 0, 0),
            blendMode: "normal"
          });
          e = vt(e, l), t = t.ancestor;
        }
        return e;
      }
      i(Ey, "calculateBlendedForegroundColor");
      function Ns(e, t) {
        var r = Ke(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n, o = a.value;
            if (((n = o.vNode) === null || n === void 0 ? void 0 : n.actualNode) === t)
              return o;
            var l = Ns(o.descendants, t);
            if (l)
              return l;
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }
      }
      i(Ns, "findNodeInContexts");
      function Ay(e, t, r, a) {
        var n = sr(e, t), o = a && Math.ceil(r * 72) / 96 < 14 || !a && Math.ceil(r * 72) / 96 < 18, l = o ? 4.5 : 3;
        return {
          isValid: n > l,
          contrastRatio: n,
          expectedContrastRatio: l
        };
      }
      i(Ay, "hasValidContrastRatio");
      var Fy = Ay;
      function Cy(e, t, r) {
        var a = t.ignoreUnicode, n = t.ignoreLength, o = t.ignorePseudo, l = t.boldValue, u = t.boldTextPt, s = t.largeTextPt, c = t.contrastRatio, d = t.shadowOutlineEmMax, f = t.pseudoSizeThreshold;
        if (!Je(e))
          return this.data({
            messageKey: "hidden"
          }), !0;
        var p = ft(r, !1, !0);
        if (a && ky(p)) {
          this.data({
            messageKey: "nonBmp"
          });
          return;
        }
        var m = D.getComputedStyle(e), h = parseFloat(m.getPropertyValue("font-size")), y = m.getPropertyValue("font-weight"), w = parseFloat(y) >= l || y === "bold", v = Math.ceil(h * 72) / 96, b = w && v < u || !w && v < s, E = b ? c.normal : c.large, A = E.expected, T = E.minThreshold, M = E.maxThreshold, L = Ty(r, {
          ignorePseudo: o,
          pseudoSizeThreshold: f
        });
        if (L) {
          this.data({
            fontSize: "".concat((h * 72 / 96).toFixed(1), "pt (").concat(h, "px)"),
            fontWeight: w ? "bold" : "normal",
            messageKey: "pseudoContent",
            expectedContrastRatio: A + ":1"
          }), this.relatedNodes(L.actualNode);
          return;
        }
        var j = [], ne = Br(e, j, d), te = Ca(e, !1, ne, t), Y = Fa(e, {
          minRatio: 1e-3,
          maxRatio: d
        }), $ = null, J = null, ie = null;
        if (Y.length === 0)
          $ = sr(ne, te);
        else if (te && ne) {
          ie = [].concat(ae(Y), [ne]).reduce(xi);
          var ce = sr(ne, te), re = sr(ne, ie), K = sr(ie, te);
          $ = Math.max(ce, re, K), $ !== ce && (J = re > K ? "shadowOnBgColor" : "fgOnShadowColor");
        }
        var N = $ > A;
        if (typeof T == "number" && (typeof $ != "number" || $ < T) || typeof M == "number" && (typeof $ != "number" || $ > M))
          return this.data({
            contrastRatio: $
          }), !0;
        var fe = Math.floor($ * 100) / 100, _;
        ne === null ? _ = Be.get("bgColor") : N || (_ = J);
        var H = fe === 1, I = p.length === 1;
        if (H ? _ = Be.set("bgColor", "equalRatio") : !N && I && !n && (_ = "shortTextContent"), this.data({
          fgColor: te ? te.toHexString() : void 0,
          bgColor: ne ? ne.toHexString() : void 0,
          contrastRatio: fe,
          fontSize: "".concat((h * 72 / 96).toFixed(1), "pt (").concat(h, "px)"),
          fontWeight: w ? "bold" : "normal",
          messageKey: _,
          expectedContrastRatio: A + ":1",
          shadowColor: ie ? ie.toHexString() : void 0
        }), te === null || ne === null || H || I && !n && !N) {
          _ = null, Be.clear(), this.relatedNodes(j);
          return;
        }
        return N || this.relatedNodes(j), N;
      }
      i(Cy, "colorContrastEvaluate");
      function Ty(e, t) {
        var r = t.pseudoSizeThreshold, a = r === void 0 ? 0.25 : r, n = t.ignorePseudo, o = n === void 0 ? !1 : n;
        if (!o) {
          var l = e.boundingClientRect, u = l.width * l.height * a;
          do {
            var s = qs(e.actualNode, ":before"), c = qs(e.actualNode, ":after");
            if (s + c > u)
              return e;
          } while (e = e.parent);
        }
      }
      i(Ty, "findPseudoElement");
      var qs = Ge(/* @__PURE__ */ i(function(t, r) {
        var a = D.getComputedStyle(t, r), n = /* @__PURE__ */ i(function(s, c) {
          return a.getPropertyValue(s) === c;
        }, "matchPseudoStyle");
        if (n("content", "none") || n("display", "none") || n("visibility", "hidden") || n("position", "absolute") === !1 || Ut(a).alpha === 0 && n("background-image", "none"))
          return 0;
        var o = Bs(a.getPropertyValue("width")), l = Bs(a.getPropertyValue("height"));
        return o.unit !== "px" || l.unit !== "px" ? o.value === 0 || l.value === 0 ? 0 : 1 / 0 : o.value * l.value;
      }, "getPseudoElementArea2"));
      function ky(e) {
        var t = {
          nonBmp: !0
        }, r = Ln(e, t), a = Q(Rr(e, t)) === "";
        return r && a;
      }
      i(ky, "textIsEmojis");
      function Bs(e) {
        var t = /^([0-9.]+)([a-z]+)$/i, r = e.match(t) || [], a = ge(r, 3), n = a[1], o = n === void 0 ? "" : n, l = a[2], u = l === void 0 ? "" : l;
        return {
          value: parseFloat(o),
          unit: u.toLowerCase()
        };
      }
      i(Bs, "parseUnit");
      function Ls(e, t) {
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
      }
      i(Ls, "getContrast2");
      var Ry = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function Vs(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return Ry.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      i(Vs, "isBlock2");
      function Sy(e, t) {
        var r = t.requiredContrastRatio, a = t.allowSameColor;
        if (Vs(e))
          return !1;
        for (var n = qe(e); n && n.nodeType === 1 && !Vs(n); )
          n = qe(n);
        if (!!n) {
          this.relatedNodes([n]);
          var o = Ca(e), l = Ca(n), u = Br(e), s = Br(n), c = o && l ? Ls(o, l) : void 0;
          if (c && (c = Math.floor(c * 100) / 100), c && c >= r)
            return !0;
          var d = u && s ? Ls(u, s) : void 0;
          if (d && (d = Math.floor(d * 100) / 100), d && d >= r)
            return !0;
          if (!d) {
            var f, p = (f = Be.get("bgColor")) !== null && f !== void 0 ? f : "bgContrast";
            this.data({
              messageKey: p
            }), Be.clear();
            return;
          }
          if (!!c)
            return a && c === 1 && d === 1 ? !0 : c === 1 && d > 1 ? (this.data({
              messageKey: "bgContrast",
              contrastRatio: d,
              requiredContrastRatio: r,
              nodeBackgroundColor: u ? u.toHexString() : void 0,
              parentBackgroundColor: s ? s.toHexString() : void 0
            }), !1) : (this.data({
              messageKey: "fgContrast",
              contrastRatio: c,
              requiredContrastRatio: r,
              nodeColor: o ? o.toHexString() : void 0,
              parentColor: l ? l.toHexString() : void 0
            }), !1);
        }
      }
      i(Sy, "linkInTextBlockEvaluate");
      var Oy = Sy, Iy = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function js(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return Iy.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      i(js, "isBlock3");
      function Py(e) {
        if (js(e))
          return !1;
        for (var t = qe(e); t && t.nodeType === 1 && !js(t); )
          t = qe(t);
        if (!!t)
          return this.relatedNodes([t]), Rs(e, t);
      }
      i(Py, "linkInTextBlockStyleEvaluate");
      var My = Py;
      function Ny(e, t, r) {
        if (r.props.nodeName !== "input")
          return !0;
        var a = ["text", "search", "number", "tel"], n = ["text", "search", "url"], o = {
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
          impp: n
        };
        P(t) === "object" && Object.keys(t).forEach(function(f) {
          o[f] || (o[f] = []), o[f] = o[f].concat(t[f]);
        });
        var l = r.attr("autocomplete"), u = l.split(/\s+/g).map(function(f) {
          return f.toLowerCase();
        }), s = u[u.length - 1];
        if (zt.stateTerms.includes(s))
          return !0;
        var c = o[s], d = r.hasAttr("type") ? Q(r.attr("type")).toLowerCase() : "text";
        return d = xa().includes(d) ? d : "text", typeof c > "u" ? d === "text" : c.includes(d);
      }
      i(Ny, "autocompleteAppropriateEvaluate");
      var qy = Ny;
      function By(e, t, r) {
        var a = r.attr("autocomplete") || "";
        return ou(a, t);
      }
      i(By, "autocompleteValidEvaluate");
      var Ly = By;
      function Vy(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
        if (!t.attribute || typeof t.attribute != "string")
          throw new TypeError("attr-non-space-content requires options.attribute to be a string");
        if (!r.hasAttr(t.attribute))
          return this.data({
            messageKey: "noAttr"
          }), !1;
        var a = r.attr(t.attribute), n = !Q(a);
        return n ? (this.data({
          messageKey: "emptyAttr"
        }), !1) : !0;
      }
      i(Vy, "attrNonSpaceContentEvaluate");
      var jy = Vy;
      function Hy(e) {
        var t = e.some(function(r) {
          return r.result === !0;
        });
        return t && e.forEach(function(r) {
          r.result = !0;
        }), e;
      }
      i(Hy, "pageHasElmAfter");
      var zy = Hy;
      function Uy(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("has-descendant requires options.selector to be a string");
        if (t.passForModal && Or())
          return !0;
        var a = ht(r, t.selector, function(n) {
          return xe(n);
        });
        return this.relatedNodes(a.map(function(n) {
          return n.actualNode;
        })), a.length > 0;
      }
      i(Uy, "hasDescendant");
      var $y = Uy;
      function Wy(e, t, r) {
        try {
          return Q(Ft(r)) !== "";
        } catch {
          return;
        }
      }
      i(Wy, "hasTextContentEvaluate");
      function Gy(e, t, r) {
        return Tr(r, t.matcher);
      }
      i(Gy, "matchesDefinitionEvaluate");
      var Yy = Gy;
      function Ky(e) {
        return e.filter(function(t) {
          return t.data !== "ignored";
        });
      }
      i(Ky, "pageNoDuplicateAfter");
      var Xy = Ky;
      function Jy(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("page-no-duplicate requires options.selector to be a string");
        var a = "page-no-duplicate;" + t.selector;
        if (le.get(a)) {
          this.data("ignored");
          return;
        }
        le.set(a, !0);
        var n = ht(g._tree[0], t.selector, function(o) {
          return xe(o);
        });
        return typeof t.nativeScopeFilter == "string" && (n = n.filter(function(o) {
          return o.actualNode.hasAttribute("role") || !tr(o, t.nativeScopeFilter);
        })), this.relatedNodes(n.filter(function(o) {
          return o !== r;
        }).map(function(o) {
          return o.actualNode;
        })), n.length <= 1;
      }
      i(Jy, "pageNoDuplicateEvaluate");
      var Qy = Jy;
      function Zy(e) {
        var t = {};
        return e.filter(function(r) {
          if (!r.data)
            return !1;
          var a = r.data.toUpperCase();
          return t[a] ? (t[a].relatedNodes.push(r.relatedNodes[0]), !1) : (t[a] = r, r.relatedNodes = [], !0);
        }).map(function(r) {
          return r.result = !!r.relatedNodes.length, r;
        });
      }
      i(Zy, "accesskeysAfter");
      var eD = Zy;
      function tD(e, t, r) {
        return At(r) || (this.data(r.attr("accesskey")), this.relatedNodes([e])), !0;
      }
      i(tD, "accesskeysEvaluate");
      var rD = tD;
      function aD(e, t, r) {
        var a = r.tabbableElements;
        if (!a)
          return !1;
        var n = a.filter(function(o) {
          return o !== r;
        });
        return n.length > 0;
      }
      i(aD, "focusableContentEvaluate");
      var nD = aD;
      function iD(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var o = n.filter(function(l) {
          return a.includes(l.props.nodeName);
        });
        return this.relatedNodes(o.map(function(l) {
          return l.actualNode;
        })), o.length === 0 || Or() ? !0 : o.every(function(l) {
          var u = l.getComputedStylePropertyValue("pointer-events"), s = parseInt(l.getComputedStylePropertyValue("width")), c = parseInt(l.getComputedStylePropertyValue("height"));
          return l.actualNode.onfocus || (s === 0 || c === 0) && u === "none";
        }) ? void 0 : !1;
      }
      i(iD, "focusableDisabledEvaluate");
      var oD = iD;
      function lD(e, t, r) {
        if (r.hasAttr("contenteditable") && a(r))
          return !0;
        return pt(r);
        function a(n) {
          var o = n.attr("contenteditable");
          if (o === "true" || o === "")
            return !0;
          if (o === "false")
            return !1;
          var l = Xe(r.parent, "[contenteditable]");
          return l ? a(l) : !1;
        }
      }
      i(lD, "focusableElementEvaluate");
      var uD = lD;
      function sD(e, t, r) {
        var a = r.tabbableElements.map(function(n) {
          var o = n.actualNode;
          return o;
        });
        if (!a || !a.length)
          return !0;
        if (Or()) {
          this.relatedNodes(a);
          return;
        }
        return !0;
      }
      i(sD, "focusableModalOpenEvaluate");
      var cD = sD;
      function dD(e, t, r) {
        var a = r.attr("tabindex"), n = Ce(r) && a > -1;
        if (!n)
          return !1;
        try {
          return !Ye(r);
        } catch {
          return;
        }
      }
      i(dD, "focusableNoNameEvaluate");
      var fD = dD;
      function pD(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var o = n.filter(function(l) {
          return !a.includes(l.props.nodeName);
        });
        return this.relatedNodes(o.map(function(l) {
          return l.actualNode;
        })), o.length === 0 || Or() ? !0 : o.every(function(l) {
          var u = l.getComputedStylePropertyValue("pointer-events"), s = parseInt(l.getComputedStylePropertyValue("width")), c = parseInt(l.getComputedStylePropertyValue("height"));
          return l.actualNode.onfocus || (s === 0 || c === 0) && u === "none";
        }) ? void 0 : !1;
      }
      i(pD, "focusableNotTabbableEvaluate");
      var mD = pD;
      function hD(e, t, r) {
        if (!!r.children)
          try {
            return !r.children.some(function(a) {
              return Hs(a);
            });
          } catch {
            return;
          }
      }
      i(hD, "frameFocusableContentEvaluate");
      function Hs(e) {
        if (pt(e))
          return !0;
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return !1;
        }
        return e.children.some(function(t) {
          return Hs(t);
        });
      }
      i(Hs, "focusableDescendants");
      function vD(e) {
        var t = ur("landmark"), r = qe(e), a = se(e);
        for (this.data({
          role: a
        }); r; ) {
          var n = r.getAttribute("role");
          if (!n && r.nodeName.toUpperCase() !== "FORM" && (n = dt(r)), n && t.includes(n) && !(n === "main" && a === "complementary"))
            return !1;
          r = qe(r);
        }
        return !0;
      }
      i(vD, "landmarkIsTopLevelEvaluate");
      var gD = vD;
      function bD(e, t, r) {
        if (!!r.children)
          try {
            var a = zs(r);
            if (!a.length)
              return !0;
            var n = a.filter(yD);
            return n.length > 0 ? (this.data({
              messageKey: "notHidden"
            }), this.relatedNodes(n)) : this.relatedNodes(a), !1;
          } catch {
            return;
          }
      }
      i(bD, "noFocusableContentEvaluate");
      function zs(e) {
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return [];
        }
        var t = [];
        return e.children.forEach(function(r) {
          mt(r) === "widget" && Ce(r) ? t.push(r) : t.push.apply(t, ae(zs(r)));
        }), t;
      }
      i(zs, "getFocusableDescendants");
      function yD(e) {
        var t = parseInt(e.attr("tabindex"), 10);
        return !isNaN(t) && t < 0;
      }
      i(yD, "usesUnreliableHidingStrategy");
      function DD(e, t, r) {
        var a = parseInt(r.attr("tabindex"), 10);
        return isNaN(a) ? !0 : a <= 0;
      }
      i(DD, "tabindexEvaluate");
      var wD = DD;
      function _D(e, t, r) {
        var a = r.attr("alt"), n = /^\s+$/;
        return typeof a == "string" && n.test(a);
      }
      i(_D, "altSpaceValueEvaluate");
      var xD = _D;
      function ED(e, t, r) {
        if (["none", "presentation"].includes(se(r)))
          return !1;
        var a = Xe(r, t.parentSelector);
        if (!a)
          return !1;
        var n = ft(a, !0).toLowerCase();
        return n === "" ? !1 : n === Ye(r).toLowerCase();
      }
      i(ED, "duplicateImgLabelEvaluate");
      var AD = ED;
      function FD(e, t, r) {
        var a = this;
        if (!r.attr("id"))
          return !1;
        if (!!r.actualNode) {
          var n = He(r.actualNode), o = Fe(r.attr("id")), l = Array.from(n.querySelectorAll('label[for="'.concat(o, '"]')));
          if (this.relatedNodes(l), !l.length)
            return !1;
          try {
            return l.some(function(u) {
              if (Je(u)) {
                var s = Q(Lt(u, {
                  inControlContext: !0,
                  startNode: r
                }));
                return a.data({
                  explicitLabel: s
                }), !!s;
              } else
                return !0;
            });
          } catch {
            return;
          }
        }
      }
      i(FD, "explicitEvaluate");
      var CD = FD;
      function TD(e, t, r) {
        var a = pa(r), n = e.getAttribute("title");
        if (!a)
          return !1;
        if (!n && (n = "", e.getAttribute("aria-describedby"))) {
          var o = st(e, "aria-describedby");
          n = o.map(function(l) {
            return l ? Lt(l) : "";
          }).join("");
        }
        return Q(n) === Q(a);
      }
      i(TD, "helpSameAsLabelEvaluate");
      var kD = TD;
      function RD(e, t, r) {
        if (r.hasAttr("id")) {
          if (!r.actualNode)
            return;
          var a = He(e), n = Fe(e.getAttribute("id")), o = a.querySelector('label[for="'.concat(n, '"]'));
          if (o && !xe(o)) {
            var l;
            try {
              l = Ye(r).trim();
            } catch {
              return;
            }
            var u = l === "";
            return u;
          }
        }
        return !1;
      }
      i(RD, "hiddenExplicitLabelEvaluate");
      var SD = RD;
      function OD(e, t, r) {
        try {
          var a = Xe(r, "label");
          if (a) {
            var n = Q(Ye(a, {
              inControlContext: !0,
              startNode: r
            }));
            return a.actualNode && this.relatedNodes([a.actualNode]), this.data({
              implicitLabel: n
            }), !!n;
          }
          return !1;
        } catch {
          return;
        }
      }
      i(OD, "implicitEvaluate");
      var ID = OD;
      function Us(e, t) {
        var r = $s(t), a = $s(e);
        return !r || !a ? !1 : r.includes(a);
      }
      i(Us, "isStringContained");
      function $s(e) {
        var t = Rr(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return Q(t);
      }
      i($s, "curateString");
      function PD(e, t, r) {
        var a, n = t?.pixelThreshold, o = (a = t?.occurrenceThreshold) !== null && a !== void 0 ? a : t?.occuranceThreshold, l = Lt(e).toLowerCase();
        if (!(jn(l) < 1)) {
          var u = Q(Ft(r, {
            subtreeDescendant: !0,
            ignoreIconLigature: !0,
            pixelThreshold: n,
            occurrenceThreshold: o
          })).toLowerCase();
          return u ? jn(u) < 1 ? Us(u, l) ? !0 : void 0 : Us(u, l) : !0;
        }
      }
      i(PD, "labelContentNameMismatchEvaluate");
      var MD = PD;
      function ND(e) {
        var t = Fe(e.getAttribute("id")), r = e.parentNode, a = He(e);
        a = a.documentElement || a;
        var n = Array.from(a.querySelectorAll('label[for="'.concat(t, '"]')));
        for (n.length && (n = n.filter(function(u) {
          return !At(u);
        })); r; )
          r.nodeName.toUpperCase() === "LABEL" && n.indexOf(r) === -1 && n.push(r), r = r.parentNode;
        if (this.relatedNodes(n), n.length > 1) {
          var o = n.filter(function(u) {
            return xe(u);
          });
          if (o.length > 1)
            return;
          var l = st(e, "aria-labelledby");
          return l.includes(o[0]) ? !1 : void 0;
        }
        return !1;
      }
      i(ND, "multipleLabelEvaluate");
      var qD = ND;
      function BD(e, t, r) {
        var a = pa(r), n = ca(r), o = r.attr("aria-describedby");
        return !a && !!(n || o);
      }
      i(BD, "titleOnlyEvaluate");
      var LD = BD;
      function VD(e) {
        var t = [];
        return e.filter(function(r) {
          var a = /* @__PURE__ */ i(function(l) {
            return r.data.role === l.data.role && r.data.accessibleText === l.data.accessibleText;
          }, "findMatch"), n = t.find(a);
          return n ? (n.result = !1, n.relatedNodes.push(r.relatedNodes[0]), !1) : (t.push(r), r.relatedNodes = [], !0);
        });
      }
      i(VD, "landmarkIsUniqueAfter");
      var jD = VD;
      function HD(e, t, r) {
        var a = se(e), n = Ye(r);
        return n = n ? n.toLowerCase() : null, this.data({
          role: a,
          accessibleText: n
        }), this.relatedNodes([e]), !0;
      }
      i(HD, "landmarkIsUniqueEvaluate");
      var zD = HD;
      function Fi(e) {
        return (e || "").trim() !== "";
      }
      i(Fi, "hasValue");
      function UD(e, t, r) {
        var a = typeof R < "u" ? Yr(R) : !1;
        if (t.attributes.includes("xml:lang") && t.attributes.includes("lang") && Fi(r.attr("xml:lang")) && !Fi(r.attr("lang")) && !a)
          return this.data({
            messageKey: "noXHTML"
          }), !1;
        var n = t.attributes.some(function(o) {
          return Fi(r.attr(o));
        });
        return n ? !0 : (this.data({
          messageKey: "noLang"
        }), !1);
      }
      i(UD, "hasLangEvaluate");
      var $D = UD;
      function WD(e, t, r) {
        var a = [];
        return t.attributes.forEach(function(n) {
          var o = r.attr(n);
          if (typeof o == "string") {
            var l = $t(o), u = t.value ? !t.value.map($t).includes(l) : !Ea(l);
            (l !== "" && u || o !== "" && !Q(o)) && a.push(n + '="' + r.attr(n) + '"');
          }
        }), !a.length || r.props.nodeName !== "html" && !$n(r) ? !1 : (this.data(a), !0);
      }
      i(WD, "validLangEvaluate");
      var GD = WD;
      function YD(e, t, r) {
        var a = $t(r.attr("lang")), n = $t(r.attr("xml:lang"));
        return a === n;
      }
      i(YD, "xmlLangMismatchEvaluate");
      var KD = YD;
      function XD(e) {
        var t = qe(e), r = t.nodeName.toUpperCase(), a = be(t);
        return r === "DIV" && ["presentation", "none", null].includes(a) && (t = qe(t), r = t.nodeName.toUpperCase(), a = be(t)), r !== "DL" ? !1 : !!(!a || ["presentation", "none", "list"].includes(a));
      }
      i(XD, "dlitemEvaluate");
      var JD = XD;
      function QD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = [], n = [];
        if (!!r.children) {
          for (var o = Ws(r.children); o.length; ) {
            var l, u = o.shift(), s = u.vChild, c = u.nested;
            if (t.divGroups && !c && ew(s)) {
              if (!s.children)
                return;
              var d = Ws(s.children, !0);
              o.push.apply(o, ae(d));
              continue;
            }
            var f = ZD(s, c, t);
            !f || (n.includes(f) || n.push(f), (s == null || (l = s.actualNode) === null || l === void 0 ? void 0 : l.nodeType) === 1 && a.push(s.actualNode));
          }
          return n.length === 0 ? !1 : (this.data({
            values: n.join(", ")
          }), this.relatedNodes(a), !0);
        }
      }
      i(QD, "invalidChildrenEvaluate");
      function ZD(e, t, r) {
        var a = r.validRoles, n = a === void 0 ? [] : a, o = r.validNodeNames, l = o === void 0 ? [] : o, u = e.props, s = u.nodeName, c = u.nodeType, d = u.nodeValue, f = t ? "div > " : "";
        if (c === 3 && d.trim() !== "")
          return f + "#text";
        if (c !== 1 || !xe(e))
          return !1;
        var p = be(e);
        return p ? n.includes(p) ? !1 : f + "[role=".concat(p, "]") : l.includes(s) ? !1 : f + s;
      }
      i(ZD, "getInvalidSelector");
      function ew(e) {
        return e.props.nodeName === "div" && be(e) === null;
      }
      i(ew, "isDivGroup");
      function Ws(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return e.map(function(r) {
          return {
            vChild: r,
            nested: t
          };
        });
      }
      i(Ws, "mapWithNested");
      function tw(e, t, r) {
        var a = r.parent;
        if (!!a) {
          var n = a.props.nodeName, o = be(a);
          return ["presentation", "none", "list"].includes(o) ? !0 : o && nr(o) ? (this.data({
            messageKey: "roleNotValid"
          }), !1) : ["ul", "ol", "menu"].includes(n);
        }
      }
      i(tw, "listitemEvaluate");
      function rw(e, t, r) {
        var a = ["definition", "term", "list"], n = {
          badNodes: [],
          hasNonEmptyTextNode: !1
        }, o = r.children.reduce(function(u, s) {
          var c = s.actualNode;
          return c.nodeName.toUpperCase() === "DIV" && se(c) === null ? u.concat(s.children) : u.concat(s);
        }, []), l = o.reduce(function(u, s) {
          var c = s.actualNode, d = c.nodeName.toUpperCase();
          if (c.nodeType === 1 && xe(c)) {
            var f = be(c);
            (d !== "DT" && d !== "DD" || f) && (a.includes(f) || u.badNodes.push(c));
          } else
            c.nodeType === 3 && c.nodeValue.trim() !== "" && (u.hasNonEmptyTextNode = !0);
          return u;
        }, n);
        return l.badNodes.length && this.relatedNodes(l.badNodes), !!l.badNodes.length || l.hasNonEmptyTextNode;
      }
      i(rw, "onlyDlitemsEvaluate");
      var aw = rw;
      function nw(e, t, r) {
        var a = !1, n = !1, o = !0, l = [], u = [], s = [];
        return r.children.forEach(function(c) {
          var d = c.actualNode;
          if (d.nodeType === 3 && d.nodeValue.trim() !== "") {
            a = !0;
            return;
          }
          if (!(d.nodeType !== 1 || !xe(d))) {
            o = !1;
            var f = d.nodeName.toUpperCase() === "LI", p = se(c), m = p === "listitem";
            !f && !m && l.push(d), f && !m && (u.push(d), s.includes(p) || s.push(p)), m && (n = !0);
          }
        }), a || l.length ? (this.relatedNodes(l), !0) : o || n ? !1 : (this.relatedNodes(u), this.data({
          messageKey: "roleNotValid",
          roles: s.join(", ")
        }), !0);
      }
      i(nw, "onlyListitemsEvaluate");
      var iw = nw;
      function ow(e, t, r) {
        var a = r.children;
        if (!a || !a.length)
          return !1;
        for (var n = !1, o = !1, l, u = 0; u < a.length; u++) {
          if (l = a[u].props.nodeName.toUpperCase(), l === "DT" && (n = !0), n && l === "DD")
            return !1;
          l === "DD" && (o = !0);
        }
        return n || o;
      }
      i(ow, "structuredDlitemsEvaluate");
      var lw = ow;
      function uw(e, t, r) {
        var a = et(r, "track"), n = a.some(function(o) {
          return (o.attr("kind") || "").toLowerCase() === "captions";
        });
        return n ? !1 : void 0;
      }
      i(uw, "captionEvaluate");
      var sw = uw, Gs = " > ";
      function cw(e) {
        var t = {};
        return e.filter(function(r) {
          var a = r.node.ancestry[r.node.ancestry.length - 1] !== "html";
          if (a) {
            var n = r.node.ancestry.flat(1 / 0).join(Gs);
            return t[n] = r, !0;
          }
          var o = r.node.ancestry.slice(0, r.node.ancestry.length - 1).flat(1 / 0).join(Gs);
          return t[o] && (t[o].result = !0), !1;
        });
      }
      i(cw, "frameTestedAfter");
      var dw = cw;
      function fw(e, t) {
        return t.isViolation ? !1 : void 0;
      }
      i(fw, "frameTestedEvaluate");
      var pw = fw;
      function mw(e, t) {
        if (!e.duration) {
          console.warn("axe.utils.preloadMedia did not load metadata");
          return;
        }
        var r = t.allowedDuration, a = r === void 0 ? 3 : r, n = o(e);
        if (n <= a && !e.hasAttribute("loop"))
          return !0;
        if (!e.hasAttribute("controls"))
          return !1;
        return !0;
        function o(s) {
          if (!s.currentSrc)
            return 0;
          var c = l(s.currentSrc);
          return c ? c.length === 1 ? Math.abs(s.duration - c[0]) : Math.abs(c[1] - c[0]) : Math.abs(s.duration - (s.currentTime || 0));
        }
        function l(s) {
          var c = s.match(/#t=(.*)/);
          if (!!c) {
            var d = ge(c, 2), f = d[1], p = f.split(",");
            return p.map(function(m) {
              return /:/.test(m) ? u(m) : parseFloat(m);
            });
          }
        }
        function u(s) {
          for (var c = s.split(":"), d = 0, f = 1; c.length > 0; )
            d += f * parseInt(c.pop(), 10), f *= 60;
          return parseFloat(d);
        }
      }
      i(mw, "noAutoplayAudioEvaluate");
      var hw = mw;
      function vw(e, t, r, a) {
        var n = a || {}, o = n.cssom, l = o === void 0 ? void 0 : o, u = t || {}, s = u.degreeThreshold, c = s === void 0 ? 0 : s;
        if (!l || !l.length)
          return;
        for (var d = !1, f = [], p = v(l), m = /* @__PURE__ */ i(function() {
          var $ = y[h], J = p[$], ie = J.root, ce = J.rules, re = ce.filter(b);
          if (!re.length)
            return "continue";
          re.forEach(function(K) {
            var N = K.cssRules;
            Array.from(N).forEach(function(fe) {
              var _ = E(fe);
              if (_ && fe.selectorText.toUpperCase() !== "HTML") {
                var H = Array.from(ie.querySelectorAll(fe.selectorText)) || [];
                f = f.concat(H);
              }
              d = d || _;
            });
          });
        }, "_loop7"), h = 0, y = Object.keys(p); h < y.length; h++)
          var w = m();
        if (!d)
          return !0;
        return f.length && this.relatedNodes(f), !1;
        function v(Y) {
          return Y.reduce(function($, J) {
            var ie = J.sheet, ce = J.root, re = J.shadowId, K = re || "topDocument";
            if ($[K] || ($[K] = {
              root: ce,
              rules: []
            }), !ie || !ie.cssRules)
              return $;
            var N = Array.from(ie.cssRules);
            return $[K].rules = $[K].rules.concat(N), $;
          }, {});
        }
        i(v, "groupCssomByDocument");
        function b(Y) {
          var $ = Y.type, J = Y.cssText;
          return $ !== 4 ? !1 : /orientation:\s*landscape/i.test(J) || /orientation:\s*portrait/i.test(J);
        }
        i(b, "isMediaRuleWithOrientation");
        function E(Y) {
          var $ = Y.selectorText, J = Y.style;
          if (!$ || J.length <= 0)
            return !1;
          var ie = J.transform || J.webkitTransform || J.msTransform || !1;
          if (!ie && !J.rotate)
            return !1;
          var ce = A(ie), re = T("rotate", J.rotate), K = ce + re;
          return !K || (K = Math.abs(K), Math.abs(K - 180) % 180 <= c) ? !1 : Math.abs(K - 90) % 90 <= c;
        }
        i(E, "getIsOrientationLocked");
        function A(Y) {
          if (!Y)
            return 0;
          var $ = Y.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/);
          if (!$)
            return 0;
          var J = ge($, 3), ie = J[1], ce = J[2];
          return T(ie, ce);
        }
        i(A, "getTransformDegrees");
        function T(Y, $) {
          switch (Y) {
            case "rotate":
            case "rotateZ":
              return M($);
            case "rotate3d":
              var J = $.split(",").map(function(K) {
                return K.trim();
              }), ie = ge(J, 4), ce = ie[2], re = ie[3];
              return parseInt(ce) === 0 ? void 0 : M(re);
            case "matrix":
            case "matrix3d":
              return L($);
            default:
              return 0;
          }
        }
        i(T, "getRotationInDegrees");
        function M(Y) {
          var $ = Y.match(/(deg|grad|rad|turn)/) || [], J = ge($, 1), ie = J[0];
          if (!ie)
            return 0;
          var ce = parseFloat(Y.replace(ie, ""));
          switch (ie) {
            case "rad":
              return j(ce);
            case "grad":
              return ne(ce);
            case "turn":
              return te(ce);
            case "deg":
            default:
              return parseInt(ce);
          }
        }
        i(M, "getAngleInDegrees");
        function L(Y) {
          var $ = Y.split(",");
          if ($.length <= 6) {
            var J = ge($, 2), ie = J[0], ce = J[1], re = Math.atan2(parseFloat(ce), parseFloat(ie));
            return j(re);
          }
          var K = parseFloat($[8]), N = Math.asin(K), fe = Math.cos(N), _ = Math.acos(parseFloat($[0]) / fe);
          return j(_);
        }
        i(L, "getAngleInDegreesFromMatrixTransform");
        function j(Y) {
          return Math.round(Y * (180 / Math.PI));
        }
        i(j, "convertRadToDeg");
        function ne(Y) {
          return Y = Y % 400, Y < 0 && (Y += 400), Math.round(Y / 400 * 360);
        }
        i(ne, "convertGradToDeg");
        function te(Y) {
          return Math.round(360 / (1 / Y));
        }
        i(te, "convertTurnToDeg");
      }
      i(vw, "cssOrientationLockEvaluate");
      var gw = vw;
      function bw(e, t, r) {
        var a = t || {}, n = a.scaleMinimum, o = n === void 0 ? 2 : n, l = a.lowerBound, u = l === void 0 ? !1 : l, s = r.attr("content") || "";
        if (!s)
          return !0;
        var c = s.split(/[;,]/).reduce(function(f, p) {
          var m = p.trim();
          if (!m)
            return f;
          var h = m.split("="), y = ge(h, 2), w = y[0], v = y[1];
          if (!w || !v)
            return f;
          var b = w.toLowerCase().trim(), E = v.toLowerCase().trim();
          return b === "maximum-scale" && E === "yes" && (E = 1), b === "maximum-scale" && parseFloat(E) < 0 || (f[b] = E), f;
        }, {});
        if (u && c["maximum-scale"] && parseFloat(c["maximum-scale"]) < u)
          return !0;
        if (!u && c["user-scalable"] === "no")
          return this.data("user-scalable=no"), !1;
        var d = parseFloat(c["user-scalable"]);
        return !u && c["user-scalable"] && (d || d === 0) && d > -1 && d < 1 ? (this.data("user-scalable"), !1) : c["maximum-scale"] && parseFloat(c["maximum-scale"]) < o ? (this.data("maximum-scale"), !1) : !0;
      }
      i(bw, "metaViewportScaleEvaluate");
      var yw = bw, Dw = 0.05;
      function ww(e, t, r) {
        var a = t?.minOffset || 24, n = [], o = a, l = Ke(yn(r, a)), u;
        try {
          for (l.s(); !(u = l.n()).done; ) {
            var s = u.value;
            if (!(mt(s) !== "widget" || !Ce(s))) {
              var c = _w(yl(r, s));
              c + Dw >= a || (o = Math.min(o, c), n.push(s));
            }
          }
        } catch (d) {
          l.e(d);
        } finally {
          l.f();
        }
        if (n.length === 0)
          return this.data({
            closestOffset: o,
            minOffset: a
          }), !0;
        if (this.relatedNodes(n.map(function(d) {
          var f = d.actualNode;
          return f;
        })), !n.some(pt)) {
          this.data({
            messageKey: "nonTabbableNeighbor",
            closestOffset: o,
            minOffset: a
          });
          return;
        }
        return this.data({
          closestOffset: o,
          minOffset: a
        }), pt(r) ? !1 : void 0;
      }
      i(ww, "targetOffsetEvaluate");
      function _w(e) {
        return Math.round(e * 10) / 10;
      }
      i(_w, "roundToSingleDecimal");
      var Ys = 0.05;
      function xw(e, t, r) {
        var a = t?.minSize || 24, n = r.boundingClientRect, o = Ti.bind(null, a), l = yn(r), u = Ew(r, l), s = Aw(r, l), c = s.fullyObscuringElms, d = s.partialObscuringElms;
        if (c.length && !u.length)
          return this.relatedNodes(Ta(c)), this.data({
            messageKey: "obscured"
          }), !0;
        var f = pt(r) ? !1 : void 0;
        if (!o(n) && !u.length)
          return this.data(ue({
            minSize: a
          }, Ci(n))), f;
        var p = Tw(d), m = Fw(r, p);
        if (u.length && (c.length || !o(m || n))) {
          this.data({
            minSize: a,
            messageKey: "contentOverflow"
          }), this.relatedNodes(Ta(u));
          return;
        }
        if (p.length !== 0 && !o(m)) {
          var h = p.every(pt), y = "partiallyObscured".concat(h ? "" : "NonTabbable");
          return this.data(ue({
            messageKey: y,
            minSize: a
          }, Ci(m))), this.relatedNodes(Ta(p)), h ? f : void 0;
        }
        return this.data(ue({
          minSize: a
        }, Ci(m || n))), this.relatedNodes(Ta(p)), !0;
      }
      i(xw, "targetSize");
      function Ew(e, t) {
        return t.filter(function(r) {
          return !Ks(r, e) && Xs(e, r);
        });
      }
      i(Ew, "filterOverflowingContent");
      function Aw(e, t) {
        var r = [], a = [], n = Ke(t), o;
        try {
          for (n.s(); !(o = n.n()).done; ) {
            var l = o.value;
            !Xs(e, l) && Dl(e, l) && kw(l) !== "none" && (Ks(e, l) ? r.push(l) : a.push(l));
          }
        } catch (u) {
          n.e(u);
        } finally {
          n.f();
        }
        return {
          fullyObscuringElms: r,
          partialObscuringElms: a
        };
      }
      i(Aw, "filterByElmsOverlap");
      function Fw(e, t) {
        var r = e.boundingClientRect;
        if (t.length === 0)
          return null;
        var a = t.map(function(o) {
          var l = o.boundingClientRect;
          return l;
        }), n = wl(r, a);
        return Cw(n);
      }
      i(Fw, "getLargestUnobscuredArea");
      function Cw(e, t) {
        return e.reduce(function(r, a) {
          var n = Ti(t, r), o = Ti(t, a);
          if (n !== o)
            return n ? r : a;
          var l = r.width * r.height, u = a.width * a.height;
          return l > u ? r : a;
        });
      }
      i(Cw, "getLargestRect");
      function Tw(e) {
        return e.filter(function(t) {
          return mt(t) === "widget" && Ce(t);
        });
      }
      i(Tw, "filterFocusableWidgets");
      function Ks(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.top >= a.top && r.left >= a.left && r.bottom <= a.bottom && r.right <= a.right;
      }
      i(Ks, "isEnclosedRect");
      function kw(e) {
        return e.getComputedStylePropertyValue("pointer-events");
      }
      i(kw, "getCssPointerEvents");
      function Ci(e) {
        return {
          width: Math.round(e.width * 10) / 10,
          height: Math.round(e.height * 10) / 10
        };
      }
      i(Ci, "toDecimalSize");
      function Xs(e, t) {
        return e.actualNode.contains(t.actualNode) && !pt(t);
      }
      i(Xs, "isDescendantNotInTabOrder");
      function Ti(e, t) {
        var r = t.width, a = t.height;
        return r + Ys >= e && a + Ys >= e;
      }
      i(Ti, "rectHasMinimumSize");
      function Ta(e) {
        return e.map(function(t) {
          var r = t.actualNode;
          return r;
        });
      }
      i(Ta, "mapActualNodes");
      function Rw(e) {
        var t = Ow(e);
        return e.forEach(function(r) {
          r.result = Sw(r, t);
        }), e;
      }
      i(Rw, "headingOrderAfter");
      function Sw(e, t) {
        var r, a, n, o, l = Js(t, e.node.ancestry), u = (r = (a = t[l]) === null || a === void 0 ? void 0 : a.level) !== null && r !== void 0 ? r : -1, s = (n = (o = t[l - 1]) === null || o === void 0 ? void 0 : o.level) !== null && n !== void 0 ? n : -1;
        if (l === 0)
          return !0;
        if (u !== -1)
          return u - s <= 1;
      }
      i(Sw, "getHeadingOrderOutcome");
      function Ow(e) {
        e = ae(e), e.sort(function(r, a) {
          var n = r.node, o = a.node;
          return n.ancestry.length - o.ancestry.length;
        });
        var t = e.reduce(Iw, []);
        return t.filter(function(r) {
          var a = r.level;
          return a !== -1;
        });
      }
      i(Ow, "getHeadingOrder");
      function Iw(e, t) {
        var r, a = (r = t.data) === null || r === void 0 ? void 0 : r.headingOrder, n = Qs(t.node.ancestry, 1);
        if (!a)
          return e;
        var o = a.map(function(u) {
          return Mw(u, n);
        }), l = Pw(e, n);
        return l === -1 ? e.push.apply(e, ae(o)) : e.splice.apply(e, [l, 0].concat(ae(o))), e;
      }
      i(Iw, "mergeHeadingOrder");
      function Pw(e, t) {
        for (; t.length; ) {
          var r = Js(e, t);
          if (r !== -1)
            return r;
          t = Qs(t, 1);
        }
        return -1;
      }
      i(Pw, "getFrameIndex");
      function Js(e, t) {
        return e.findIndex(function(r) {
          return ui(r.ancestry, t);
        });
      }
      i(Js, "findHeadingOrderIndex");
      function Mw(e, t) {
        var r = t.concat(e.ancestry);
        return ue({}, e, {
          ancestry: r
        });
      }
      i(Mw, "addFrameToHeadingAncestry");
      function Qs(e, t) {
        return e.slice(0, e.length - t);
      }
      i(Qs, "shortenArray");
      function Nw(e) {
        var t = se(e), r = t && t.includes("heading"), a = e.attr("aria-level"), n = parseInt(a, 10), o = e.props.nodeName.match(/h(\d)/) || [], l = ge(o, 2), u = l[1];
        return r ? u && !a ? parseInt(u, 10) : isNaN(n) || n < 1 ? u ? parseInt(u, 10) : 2 : n || -1 : -1;
      }
      i(Nw, "getLevel");
      function qw() {
        var e = le.get("headingOrder");
        if (e)
          return !0;
        var t = "h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame", r = ht(g._tree[0], t, xe);
        return e = r.map(function(a) {
          return {
            ancestry: [Xr(a.actualNode)],
            level: Nw(a)
          };
        }), this.data({
          headingOrder: e
        }), le.set("headingOrder", r), !0;
      }
      i(qw, "headingOrderEvaluate");
      var Bw = qw;
      function Zs(e, t) {
        if (!e || !t)
          return !1;
        var r = Object.getOwnPropertyNames(e), a = Object.getOwnPropertyNames(t);
        if (r.length !== a.length)
          return !1;
        var n = r.every(function(o) {
          var l = e[o], u = t[o];
          return P(l) !== P(u) ? !1 : P(l) === "object" || P(u) === "object" ? Zs(l, u) : l === u;
        });
        return n;
      }
      i(Zs, "isIdenticalObject");
      function Lw(e) {
        if (e.length < 2)
          return e;
        for (var t = e.filter(function(u) {
          var s = u.result;
          return s !== void 0;
        }), r = [], a = {}, n = /* @__PURE__ */ i(function(s) {
          var c, d = t[s], f = d.data, p = f.name, m = f.urlProps;
          if (a[p])
            return "continue";
          var h = t.filter(function(w, v) {
            var b = w.data;
            return b.name === p && v !== s;
          }), y = h.every(function(w) {
            var v = w.data;
            return Zs(v.urlProps, m);
          });
          h.length && !y && (d.result = void 0), d.relatedNodes = [], (c = d.relatedNodes).push.apply(c, ae(h.map(function(w) {
            return w.relatedNodes[0];
          }))), a[p] = h, r.push(d);
        }, "_loop8"), o = 0; o < t.length; o++)
          var l = n(o);
        return r;
      }
      i(Lw, "identicalLinksSamePurposeAfter");
      var Vw = Lw, ec = {};
      we(ec, {
        aria: /* @__PURE__ */ i(function() {
          return hs;
        }, "aria"),
        color: /* @__PURE__ */ i(function() {
          return Ts;
        }, "color"),
        dom: /* @__PURE__ */ i(function() {
          return fn;
        }, "dom"),
        forms: /* @__PURE__ */ i(function() {
          return tc;
        }, "forms"),
        matches: /* @__PURE__ */ i(function() {
          return Tr;
        }, "matches"),
        math: /* @__PURE__ */ i(function() {
          return bl;
        }, "math"),
        standards: /* @__PURE__ */ i(function() {
          return Fs;
        }, "standards"),
        table: /* @__PURE__ */ i(function() {
          return ac;
        }, "table"),
        text: /* @__PURE__ */ i(function() {
          return Ar;
        }, "text"),
        utils: /* @__PURE__ */ i(function() {
          return Va;
        }, "utils")
      });
      var tc = {};
      we(tc, {
        isAriaCombobox: /* @__PURE__ */ i(function() {
          return Ql;
        }, "isAriaCombobox"),
        isAriaListbox: /* @__PURE__ */ i(function() {
          return Jl;
        }, "isAriaListbox"),
        isAriaRange: /* @__PURE__ */ i(function() {
          return Zl;
        }, "isAriaRange"),
        isAriaTextbox: /* @__PURE__ */ i(function() {
          return Xl;
        }, "isAriaTextbox"),
        isDisabled: /* @__PURE__ */ i(function() {
          return Lr;
        }, "isDisabled"),
        isNativeSelect: /* @__PURE__ */ i(function() {
          return Kl;
        }, "isNativeSelect"),
        isNativeTextbox: /* @__PURE__ */ i(function() {
          return Yl;
        }, "isNativeTextbox")
      });
      var jw = ["fieldset", "button", "select", "input", "textarea"];
      function rc(e) {
        var t = e._isDisabled;
        if (typeof t == "boolean")
          return t;
        var r = e.props.nodeName, a = e.attr("aria-disabled");
        return jw.includes(r) && e.hasAttr("disabled") ? t = !0 : a ? t = a.toLowerCase() === "true" : e.parent ? t = rc(e.parent) : t = !1, e._isDisabled = t, t;
      }
      i(rc, "isDisabled");
      var Lr = rc, ac = {};
      we(ac, {
        getAllCells: /* @__PURE__ */ i(function() {
          return ki;
        }, "getAllCells"),
        getCellPosition: /* @__PURE__ */ i(function() {
          return sa;
        }, "getCellPosition"),
        getHeaders: /* @__PURE__ */ i(function() {
          return ka;
        }, "getHeaders"),
        getScope: /* @__PURE__ */ i(function() {
          return Rn;
        }, "getScope"),
        isColumnHeader: /* @__PURE__ */ i(function() {
          return ir;
        }, "isColumnHeader"),
        isDataCell: /* @__PURE__ */ i(function() {
          return ic;
        }, "isDataCell"),
        isDataTable: /* @__PURE__ */ i(function() {
          return Ra;
        }, "isDataTable"),
        isHeader: /* @__PURE__ */ i(function() {
          return Gw;
        }, "isHeader"),
        isRowHeader: /* @__PURE__ */ i(function() {
          return or;
        }, "isRowHeader"),
        toArray: /* @__PURE__ */ i(function() {
          return yt;
        }, "toArray"),
        toGrid: /* @__PURE__ */ i(function() {
          return yt;
        }, "toGrid"),
        traverse: /* @__PURE__ */ i(function() {
          return Ri;
        }, "traverse")
      });
      function Hw(e) {
        var t, r, a, n, o = [];
        for (t = 0, a = e.rows.length; t < a; t++)
          for (r = 0, n = e.rows[t].cells.length; r < n; r++)
            o.push(e.rows[t].cells[r]);
        return o;
      }
      i(Hw, "getAllCells");
      var ki = Hw;
      function nc(e, t, r) {
        for (var a = e === "row" ? "_rowHeaders" : "_colHeaders", n = e === "row" ? or : ir, o = r[t.y][t.x], l = o.colSpan - 1, u = o.getAttribute("rowspan"), s = parseInt(u) === 0 || o.rowspan === 0 ? r.length : o.rowSpan, c = s - 1, d = t.y + c, f = t.x + l, p = e === "row" ? t.y : 0, m = e === "row" ? 0 : t.x, h, y = [], w = d; w >= p && !h; w--)
          for (var v = f; v >= m; v--) {
            var b = r[w] ? r[w][v] : void 0;
            if (!!b) {
              var E = g.utils.getNodeFromTree(b);
              if (E[a]) {
                h = E[a];
                break;
              }
              y.push(b);
            }
          }
        return h = (h || []).concat(y.filter(n)), y.forEach(function(A) {
          var T = g.utils.getNodeFromTree(A);
          T[a] = h;
        }), h;
      }
      i(nc, "traverseForHeaders");
      function zw(e, t) {
        if (e.getAttribute("headers")) {
          var r = st(e, "headers");
          if (r.filter(function(l) {
            return l;
          }).length)
            return r;
        }
        t || (t = yt(rr(e, "table")));
        var a = sa(e, t), n = nc("row", a, t), o = nc("col", a, t);
        return [].concat(n, o).reverse();
      }
      i(zw, "getHeaders");
      var ka = zw;
      function Uw(e) {
        if (!e.children.length && !e.textContent.trim())
          return !1;
        var t = e.getAttribute("role");
        return nr(t) ? ["cell", "gridcell"].includes(t) : e.nodeName.toUpperCase() === "TD";
      }
      i(Uw, "isDataCell");
      var ic = Uw;
      function $w(e) {
        var t = (e.getAttribute("role") || "").toLowerCase();
        if ((t === "presentation" || t === "none") && !Ce(e))
          return !1;
        if (e.getAttribute("contenteditable") === "true" || rr(e, '[contenteditable="true"]') || t === "grid" || t === "treegrid" || t === "table" || mt(t) === "landmark")
          return !0;
        if (e.getAttribute("datatable") === "0")
          return !1;
        if (e.getAttribute("summary") || e.tHead || e.tFoot || e.caption)
          return !0;
        for (var r = 0, a = e.children.length; r < a; r++)
          if (e.children[r].nodeName.toUpperCase() === "COLGROUP")
            return !0;
        for (var n = 0, o = e.rows.length, l, u, s = !1, c = 0; c < o; c++) {
          l = e.rows[c];
          for (var d = 0, f = l.cells.length; d < f; d++) {
            if (u = l.cells[d], u.nodeName.toUpperCase() === "TH" || (!s && (u.offsetWidth !== u.clientWidth || u.offsetHeight !== u.clientHeight) && (s = !0), u.getAttribute("scope") || u.getAttribute("headers") || u.getAttribute("abbr")) || ["columnheader", "rowheader"].includes((u.getAttribute("role") || "").toLowerCase()) || u.children.length === 1 && u.children[0].nodeName.toUpperCase() === "ABBR")
              return !0;
            n++;
          }
        }
        if (e.getElementsByTagName("table").length || o < 2)
          return !1;
        var p = e.rows[Math.ceil(o / 2)];
        if (p.cells.length === 1 && p.cells[0].colSpan === 1)
          return !1;
        if (p.cells.length >= 5 || s)
          return !0;
        var m, h;
        for (c = 0; c < o; c++) {
          if (l = e.rows[c], m && m !== D.getComputedStyle(l).getPropertyValue("background-color") || (m = D.getComputedStyle(l).getPropertyValue("background-color"), h && h !== D.getComputedStyle(l).getPropertyValue("background-image")))
            return !0;
          h = D.getComputedStyle(l).getPropertyValue("background-image");
        }
        return o >= 20 ? !0 : !(hn(e).width > ia(D).width * 0.95 || n < 10 || e.querySelector("object, embed, iframe, applet"));
      }
      i($w, "isDataTable");
      var Ra = $w;
      function Ww(e) {
        if (ir(e) || or(e))
          return !0;
        if (e.getAttribute("id")) {
          var t = Fe(e.getAttribute("id"));
          return !!R.querySelector('[headers~="'.concat(t, '"]'));
        }
        return !1;
      }
      i(Ww, "isHeader");
      var Gw = Ww;
      function oc(e, t, r, a) {
        var n, o = r[t.y] ? r[t.y][t.x] : void 0;
        return o ? typeof a == "function" && (n = a(o, t, r), n === !0) ? [o] : (n = oc(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a), n.unshift(o), n) : [];
      }
      i(oc, "traverseTable");
      function Yw(e, t, r, a) {
        if (Array.isArray(t) && (a = r, r = t, t = {
          x: 0,
          y: 0
        }), typeof e == "string")
          switch (e) {
            case "left":
              e = {
                x: -1,
                y: 0
              };
              break;
            case "up":
              e = {
                x: 0,
                y: -1
              };
              break;
            case "right":
              e = {
                x: 1,
                y: 0
              };
              break;
            case "down":
              e = {
                x: 0,
                y: 1
              };
              break;
          }
        return oc(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a);
      }
      i(Yw, "traverse");
      var Ri = Yw;
      function Kw(e, t, r) {
        var a = Ar.accessibleTextVirtual(r), n = Ar.sanitize(Ar.removeUnicode(a, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        })).toLowerCase();
        if (!!n) {
          var o = {
            name: n,
            urlProps: fn.urlPropsFromAttribute(e, "href")
          };
          return this.data(o), this.relatedNodes([e]), !0;
        }
      }
      i(Kw, "identicalLinksSamePurposeEvaluate");
      var Xw = Kw;
      function Jw(e, t, r) {
        var a = et(r, "a[href]");
        return a.some(function(n) {
          return /^#[^/!]/.test(n.attr("href"));
        });
      }
      i(Jw, "internalLinkPresentEvaluate");
      var Qw = Jw, Zw = /[;,\s]/, e0 = /^[0-9.]+$/;
      function t0(e, t, r) {
        var a = t || {}, n = a.minDelay, o = a.maxDelay, l = (r.attr("content") || "").trim(), u = l.split(Zw), s = ge(u, 1), c = s[0];
        if (!c.match(e0))
          return !0;
        var d = parseFloat(c);
        return this.data({
          redirectDelay: d
        }), typeof n == "number" && d <= t.minDelay || typeof o == "number" && d > t.maxDelay;
      }
      i(t0, "metaRefreshEvaluate");
      function r0(e) {
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
        return e = parseInt(e), isNaN(e) ? 400 : e;
      }
      i(r0, "normalizeFontWeight");
      function a0(e) {
        for (var t = e, r = e.textContent.trim(), a = r; a === r && t !== void 0; ) {
          var n = -1;
          if (e = t, e.children.length === 0)
            return e;
          do
            n++, a = e.children[n].textContent.trim();
          while (a === "" && n + 1 < e.children.length);
          t = e.children[n];
        }
        return e;
      }
      i(a0, "getTextContainer");
      function Si(e) {
        var t = D.getComputedStyle(a0(e));
        return {
          fontWeight: r0(t.getPropertyValue("font-weight")),
          fontSize: parseInt(t.getPropertyValue("font-size")),
          isItalic: t.getPropertyValue("font-style") === "italic"
        };
      }
      i(Si, "getStyleValues");
      function lc(e, t, r) {
        return r.reduce(function(a, n) {
          return a || (!n.size || e.fontSize / n.size > t.fontSize) && (!n.weight || e.fontWeight - n.weight > t.fontWeight) && (!n.italic || e.isItalic && !t.isItalic);
        }, !1);
      }
      i(lc, "isHeaderStyle");
      function n0(e, t, r) {
        var a = Array.from(e.parentNode.children), n = a.indexOf(e);
        t = t || {};
        var o = t.margins || [], l = a.slice(n + 1).find(function(w) {
          return w.nodeName.toUpperCase() === "P";
        }), u = a.slice(0, n).reverse().find(function(w) {
          return w.nodeName.toUpperCase() === "P";
        }), s = Si(e), c = l ? Si(l) : null, d = u ? Si(u) : null, f = t.passLength, p = t.failLength, m = e.textContent.trim().length, h = l?.textContent.trim().length;
        if (m > h * f || !c || !lc(s, c, o))
          return !0;
        var y = tr(r, "blockquote");
        if (!(y && y.nodeName.toUpperCase() === "BLOCKQUOTE") && !(d && !lc(s, d, o)) && !(m > h * p))
          return !1;
      }
      i(n0, "pAsHeadingEvaluate");
      var i0 = n0;
      function o0(e) {
        var t = e.filter(function(r) {
          return r.data.isIframe;
        });
        return e.forEach(function(r) {
          if (!(r.result || r.node.ancestry.length === 1)) {
            var a = r.node.ancestry.slice(0, -1), n = Ke(t), o;
            try {
              for (n.s(); !(o = n.n()).done; ) {
                var l = o.value;
                if (ui(a, l.node.ancestry)) {
                  r.result = l.result;
                  break;
                }
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
          }
        }), t.forEach(function(r) {
          r.result || (r.result = !0);
        }), e;
      }
      i(o0, "regionAfter");
      var l0 = o0, u0 = ur("landmark"), s0 = ["alert", "log", "status"];
      function c0(e, t, r) {
        this.data({
          isIframe: ["iframe", "frame"].includes(r.props.nodeName)
        });
        var a = le.get("regionlessNodes", function() {
          return d0(t);
        });
        return !a.includes(r);
      }
      i(c0, "regionEvaluate");
      function d0(e) {
        var t = uc(g._tree[0], e).map(function(r) {
          for (; r.parent && !r.parent._hasRegionDescendant && r.parent.actualNode !== R.body; )
            r = r.parent;
          return r;
        }).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
        return t;
      }
      i(d0, "getRegionlessNodes");
      function uc(e, t) {
        var r = e.actualNode;
        if (se(e) === "button" || f0(e, t) || ["iframe", "frame"].includes(e.props.nodeName) || Gn(e.actualNode) && En(e.actualNode, "href") || !xe(r)) {
          for (var a = e; a; )
            a._hasRegionDescendant = !0, a = a.parent;
          return ["iframe", "frame"].includes(e.props.nodeName) ? [e] : [];
        } else
          return r !== R.body && ma(r, !0) ? [e] : e.children.filter(function(n) {
            var o = n.actualNode;
            return o.nodeType === 1;
          }).map(function(n) {
            return uc(n, t);
          }).reduce(function(n, o) {
            return n.concat(o);
          }, []);
      }
      i(uc, "findRegionlessElms");
      function f0(e, t) {
        var r = e.actualNode, a = se(e), n = (r.getAttribute("aria-live") || "").toLowerCase().trim();
        return !!(["assertive", "polite"].includes(n) || s0.includes(a) || u0.includes(a) || t.regionMatcher && Tr(e, t.regionMatcher));
      }
      i(f0, "isRegion");
      function p0(e) {
        var t = En(e, "href");
        return t ? xe(t) || void 0 : !1;
      }
      i(p0, "skipLinkEvaluate");
      var m0 = p0;
      function h0(e) {
        var t = {};
        return e.forEach(function(r) {
          t[r.data] = t[r.data] !== void 0 ? ++t[r.data] : 0;
        }), e.forEach(function(r) {
          r.result = !!t[r.data];
        }), e;
      }
      i(h0, "uniqueFrameTitleAfter");
      var v0 = h0;
      function g0(e, t, r) {
        var a = Q(r.attr("title")).toLowerCase();
        return this.data(a), !0;
      }
      i(g0, "uniqueFrameTitleEvaluate");
      var b0 = g0;
      function y0(e) {
        var t = [];
        return e.filter(function(r) {
          return t.indexOf(r.data) === -1 ? (t.push(r.data), !0) : !1;
        });
      }
      i(y0, "duplicateIdAfter");
      var D0 = y0;
      function w0(e) {
        var t = e.getAttribute("id").trim();
        if (!t)
          return !0;
        var r = He(e), a = Array.from(r.querySelectorAll('[id="'.concat(Fe(t), '"]'))).filter(function(n) {
          return n !== e;
        });
        return a.length && this.relatedNodes(a), this.data(t), a.length === 0;
      }
      i(w0, "duplicateIdEvaluate");
      var _0 = w0;
      function x0(e, t, r) {
        return !!Q(Cr(r));
      }
      i(x0, "ariaLabelEvaluate");
      var E0 = x0;
      function A0(e, t, r) {
        try {
          return !!Q(Fr(r));
        } catch {
          return;
        }
      }
      i(A0, "ariaLabelledbyEvaluate");
      var F0 = A0;
      function C0(e, t) {
        var r = t.cssProperties.filter(function(a) {
          if (e.style.getPropertyPriority(a) === "important")
            return a;
        });
        return r.length > 0 ? (this.data(r), !1) : !0;
      }
      i(C0, "avoidInlineSpacingEvaluate");
      var T0 = C0;
      function k0() {
        var e = R.title;
        return !!Q(e);
      }
      i(k0, "docHasTitleEvaluate");
      var R0 = k0;
      function S0() {
      }
      i(S0, "existsEvaluate");
      var O0 = S0;
      function I0(e, t, r) {
        var a = r.props.nodeName;
        return ["img", "input", "area"].includes(a) ? r.hasAttr("alt") : !1;
      }
      i(I0, "hasAltEvaluate");
      var P0 = I0;
      function M0(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.minValue, o = t.maxValue, l = t.normalValue, u = l === void 0 ? 0 : l, s = t.noImportant, c = t.multiLineOnly;
        if (!s && e.style.getPropertyPriority(r) !== "important" || c && !gu(e))
          return !0;
        var d = {};
        typeof n == "number" && (d.minValue = n), typeof o == "number" && (d.maxValue = o);
        var f = e.style.getPropertyValue(r);
        if (["inherit", "unset", "revert", "revert-layer"].includes(f))
          return this.data(ue({
            value: f
          }, d)), !0;
        var p = N0(e, {
          absoluteValues: a,
          cssProperty: r,
          normalValue: u
        });
        if (this.data(ue({
          value: p
        }, d)), typeof p == "number")
          return (typeof n != "number" || p >= n) && (typeof o != "number" || p <= o);
      }
      i(M0, "inlineStyleProperty");
      function N0(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.normalValue, o = D.getComputedStyle(e), l = o.getPropertyValue(r);
        if (l === "normal")
          return n;
        var u = parseFloat(l);
        if (a)
          return u;
        var s = parseFloat(o.getPropertyValue("font-size")), c = Math.round(u / s * 100) / 100;
        return isNaN(c) ? l : c;
      }
      i(N0, "getNumberValue");
      function q0(e) {
        return Je(e);
      }
      i(q0, "isOnScreenEvaluate");
      var B0 = q0;
      function L0(e, t, r) {
        var a = r.props.nodeName, n = (r.attr("type") || "").toLowerCase(), o = r.attr("value");
        return o && this.data({
          messageKey: "has-label"
        }), a === "input" && ["submit", "reset"].includes(n) ? o === null : !1;
      }
      i(L0, "nonEmptyIfPresentEvaluate");
      var V0 = L0;
      function j0(e, t, r) {
        var a = be(r);
        if (["presentation", "none"].includes(a) && ["iframe", "frame"].includes(r.props.nodeName) && r.hasAttr("title"))
          return this.data({
            messageKey: "iframe",
            nodeName: r.props.nodeName
          }), !1;
        var n = se(r);
        if (["presentation", "none"].includes(n))
          return this.data({
            role: n
          }), !0;
        if (!["presentation", "none"].includes(a))
          return !1;
        var o = Vt().some(function(s) {
          return r.hasAttr(s);
        }), l = Ce(r), u;
        return o && !l ? u = "globalAria" : !o && l ? u = "focusable" : u = "both", this.data({
          messageKey: u,
          role: n
        }), !1;
      }
      i(j0, "presentationalRoleEvaluate");
      function H0(e, t, r) {
        if (!!r.children) {
          var a = r.children.find(function(o) {
            var l = o.props;
            return l.nodeName === "title";
          });
          if (!a)
            return this.data({
              messageKey: "noTitle"
            }), !1;
          try {
            var n = Ft(a, {
              includeHidden: !0
            }).trim();
            if (n === "")
              return this.data({
                messageKey: "emptyTitle"
              }), !1;
          } catch {
            return;
          }
          return !0;
        }
      }
      i(H0, "svgNonEmptyTitleEvaluate");
      var z0 = H0;
      function U0(e) {
        var t = yt(e), r = t[0];
        return t.length <= 1 || r.length <= 1 || e.rows.length <= 1 ? !0 : r.reduce(function(a, n, o) {
          return a || n !== r[o + 1] && r[o + 1] !== void 0;
        }, !1);
      }
      i(U0, "captionFakedEvaluate");
      var $0 = U0;
      function W0(e) {
        return mu(R) ? e.nodeName.toUpperCase() === "TH" : !0;
      }
      i(W0, "html5ScopeEvaluate");
      var G0 = W0, Y0 = K0;
      function K0(e, t, r) {
        if (r.children !== void 0) {
          var a = r.attr("summary"), n = r.children.find(X0), o = n ? Q(Ft(n)) : !1;
          return !o || !a ? !1 : Q(a).toLowerCase() === Q(o).toLowerCase();
        }
      }
      i(K0, "sameCaptionSummaryEvaluate");
      function X0(e) {
        return e.props.nodeName === "caption";
      }
      i(X0, "isCaptionNode");
      function J0(e, t) {
        var r = e.getAttribute("scope").toLowerCase();
        return t.values.indexOf(r) !== -1;
      }
      i(J0, "scopeValueEvaluate");
      var Q0 = J0;
      function Z0(e) {
        var t = [], r = ki(e), a = yt(e);
        return r.forEach(function(n) {
          if (ma(n) && ic(n) && !xs(n)) {
            var o = ka(n, a).some(function(l) {
              return l !== null && !!ma(l);
            });
            o || t.push(n);
          }
        }), t.length ? (this.relatedNodes(t), !1) : !0;
      }
      i(Z0, "tdHasHeaderEvaluate");
      var e_ = Z0;
      function t_(e) {
        for (var t = [], r = [], a = [], n = 0; n < e.rows.length; n++)
          for (var o = e.rows[n], l = 0; l < o.cells.length; l++)
            t.push(o.cells[l]);
        var u = t.reduce(function(s, c) {
          return c.getAttribute("id") && s.push(c.getAttribute("id")), s;
        }, []);
        if (t.forEach(function(s) {
          var c = !1, d = !1;
          if (!(!s.hasAttribute("headers") || !xe(s))) {
            var f = s.getAttribute("headers").trim();
            if (!f)
              return r.push(s);
            var p = ze(f);
            p.length !== 0 && (s.getAttribute("id") && (c = p.indexOf(s.getAttribute("id").trim()) !== -1), d = p.some(function(m) {
              return !u.includes(m);
            }), (c || d) && a.push(s));
          }
        }), a.length > 0)
          return this.relatedNodes(a), !1;
        if (r.length) {
          this.relatedNodes(r);
          return;
        }
        return !0;
      }
      i(t_, "tdHeadersAttrEvaluate");
      var r_ = t_;
      function a_(e) {
        var t = ki(e), r = this, a = [];
        t.forEach(function(u) {
          var s = u.getAttribute("headers");
          s && (a = a.concat(s.split(/\s+/)));
          var c = u.getAttribute("aria-labelledby");
          c && (a = a.concat(c.split(/\s+/)));
        });
        var n = t.filter(function(u) {
          return Q(u.textContent) === "" ? !1 : u.nodeName.toUpperCase() === "TH" || ["rowheader", "columnheader"].indexOf(u.getAttribute("role")) !== -1;
        }), o = yt(e), l = !0;
        return n.forEach(function(u) {
          if (!(u.getAttribute("id") && a.includes(u.getAttribute("id")))) {
            var s = sa(u, o), c = !1;
            ir(u) && (c = Ri("down", s, o).find(function(d) {
              return !ir(d) && ka(d, o).includes(u);
            })), !c && or(u) && (c = Ri("right", s, o).find(function(d) {
              return !or(d) && ka(d, o).includes(u);
            })), c || r.relatedNodes(u), l = l && c;
          }
        }), l ? !0 : void 0;
      }
      i(a_, "thHasDataCellsEvaluate");
      var n_ = a_;
      function i_(e, t, r) {
        var a = ["SCRIPT", "HEAD", "TITLE", "NOSCRIPT", "STYLE", "TEMPLATE"];
        if (!a.includes(e.nodeName.toUpperCase()) && Sr(r)) {
          var n = D.getComputedStyle(e);
          if (n.getPropertyValue("display") === "none")
            return;
          if (n.getPropertyValue("visibility") === "hidden") {
            var o = qe(e), l = o && D.getComputedStyle(o);
            if (!l || l.getPropertyValue("visibility") !== "hidden")
              return;
          }
        }
        return !0;
      }
      i(i_, "hiddenContentEvaluate");
      var o_ = i_;
      function l_(e, t) {
        var r = /^aria-/, a = t.attrNames;
        if (a.length) {
          for (var n = 0, o = a.length; n < o; n++)
            if (r.test(a[n]))
              return !0;
        }
        return !1;
      }
      i(l_, "ariaAllowedAttrMatches");
      var u_ = l_;
      function s_(e, t) {
        return be(t, {
          dpub: !0,
          fallback: !0
        }) !== null;
      }
      i(s_, "ariaAllowedRoleMatches");
      var c_ = s_;
      function d_(e, t) {
        var r = /^aria-/;
        return t.attrNames.some(function(a) {
          return r.test(a);
        });
      }
      i(d_, "ariaHasAttrMatches");
      var f_ = d_;
      function sc(e) {
        return e ? e.getAttribute("aria-hidden") === "true" ? !1 : sc(qe(e)) : !0;
      }
      i(sc, "shouldMatchElement");
      function p_(e) {
        return sc(qe(e));
      }
      i(p_, "ariaHiddenFocusMatches");
      var m_ = p_;
      function h_(e, t) {
        var r = be(t, {
          dpub: !0
        });
        return !!wi(r);
      }
      i(h_, "ariaRequiredChildrenMatches");
      var v_ = h_;
      function g_(e, t) {
        var r = be(t);
        return !!Di(r);
      }
      i(g_, "ariaRequiredParentMatches");
      var b_ = g_;
      function y_(e, t) {
        var r = t.attr("autocomplete");
        if (!r || Q(r) === "")
          return !1;
        var a = t.props.nodeName;
        if (["textarea", "input", "select"].includes(a) === !1)
          return !1;
        var n = ["submit", "reset", "button", "hidden"];
        if (a === "input" && n.includes(t.props.type))
          return !1;
        var o = t.attr("aria-disabled") || "false";
        if (t.hasAttr("disabled") || o.toLowerCase() === "true")
          return !1;
        var l = t.attr("role"), u = t.attr("tabindex");
        if (u === "-1" && l) {
          var s = de.ariaRoles[l];
          if (s === void 0 || s.type !== "widget")
            return !1;
        }
        return !(u === "-1" && t.actualNode && !Je(t) && !xe(t));
      }
      i(y_, "autocompleteMatches");
      var D_ = y_;
      function w_(e, t, r) {
        return r.initiator;
      }
      i(w_, "isInitiatorMatches");
      var cc = w_;
      function __(e, t, r) {
        return cc(e, t, r) ? !!e.querySelector("a[href]") : !0;
      }
      i(__, "bypassMatches");
      var x_ = __;
      function E_(e, t) {
        var r = t.props, a = r.nodeName, n = r.type;
        if (a === "option" || a === "select" && !e.options.length)
          return !1;
        var o = ["hidden", "range", "color", "checkbox", "radio", "image"];
        if (a === "input" && o.includes(n) || Lr(t) || la(t))
          return !1;
        var l = ["input", "select", "textarea"];
        if (l.includes(a)) {
          var u = D.getComputedStyle(e), s = parseInt(u.getPropertyValue("text-indent"), 10);
          if (s) {
            var c = e.getBoundingClientRect();
            if (c = {
              top: c.top,
              bottom: c.bottom,
              left: c.left + s,
              right: c.right + s
            }, !Yn(c, e))
              return !1;
          }
          return !0;
        }
        var d = tr(t, "label");
        if (a === "label" || d) {
          var f = d || e, p = d ? B(d) : t;
          if (f.htmlFor) {
            var m = He(f), h = m.getElementById(f.htmlFor), y = h && B(h);
            if (y && Lr(y))
              return !1;
          }
          var w = 'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea', v = et(p, w)[0];
          if (v && Lr(v))
            return !1;
        }
        for (var b = [], E = t; E; ) {
          if (E.props.id) {
            var A = gi(E).filter(function(Y) {
              return ze(Y.getAttribute("aria-labelledby") || "").includes(E.props.id);
            }).map(function(Y) {
              return B(Y);
            });
            b.push.apply(b, ae(A));
          }
          E = E.parent;
        }
        if (b.length > 0 && b.every(Lr) || !C_(t))
          return !1;
        for (var T = R.createRange(), M = t.children, L = 0; L < M.length; L++) {
          var j = M[L];
          j.actualNode.nodeType === 3 && Q(j.actualNode.nodeValue) !== "" && T.selectNodeContents(j.actualNode);
        }
        for (var ne = T.getClientRects(), te = 0; te < ne.length; te++)
          if (Yn(ne[te], e))
            return !0;
        return !1;
      }
      i(E_, "colorContrastMatches");
      var A_ = E_, F_ = {
        emoji: !0,
        nonBmp: !1,
        punctuations: !0
      };
      function C_(e) {
        var t = ft(e, !1, !0);
        return t === "" || Rr(t, F_) === "" ? !1 : e.children.some(function(r) {
          return r.props.nodeName === "#text" && !Vn(r);
        });
      }
      i(C_, "hasRealTextChildren");
      function T_(e) {
        if (Ra(e)) {
          var t = yt(e);
          return t.length >= 3 && t[0].length >= 3 && t[1].length >= 3 && t[2].length >= 3;
        }
        return !1;
      }
      i(T_, "dataTableLargeMatches");
      var k_ = T_;
      function R_(e) {
        return Ra(e);
      }
      i(R_, "dataTableMatches");
      var S_ = R_;
      function O_(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(Fe(t), '"]'), a = Array.from(He(e).querySelectorAll(r));
        return !Aa(e) && a.some(Ce);
      }
      i(O_, "duplicateIdActiveMatches");
      var I_ = O_;
      function P_(e) {
        return Aa(e);
      }
      i(P_, "duplicateIdAriaMatches");
      var M_ = P_;
      function N_(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(Fe(t), '"]'), a = Array.from(He(e).querySelectorAll(r));
        return !Aa(e) && a.every(function(n) {
          return !Ce(n);
        });
      }
      i(N_, "duplicateIdMiscMatches");
      var q_ = N_;
      function B_(e, t, r) {
        var a, n;
        return !r.initiator && !r.focusable && ((a = r.size) === null || a === void 0 ? void 0 : a.width) * ((n = r.size) === null || n === void 0 ? void 0 : n.height) > 1;
      }
      i(B_, "frameFocusableContentMatches");
      var L_ = B_;
      function V_(e) {
        var t = e.getAttribute("title");
        return !!Q(t);
      }
      i(V_, "frameTitleHasTextMatches");
      var j_ = V_;
      function H_(e, t) {
        return dt(t, {
          chromium: !0
        }) !== null;
      }
      i(H_, "hasImplicitChromiumRoleMatches");
      var z_ = H_;
      function U_(e, t) {
        return se(t) === "heading";
      }
      i(U_, "headingMatches");
      function $_(e, t) {
        try {
          var r = t.props.nodeName;
          return r === "svg" ? !0 : !!Xe(t, "svg");
        } catch {
          return !1;
        }
      }
      i($_, "svgNamespaceMatches");
      var Oi = $_;
      function W_(e, t) {
        return !Oi(e, t);
      }
      i(W_, "htmlNamespaceMatches");
      var G_ = W_;
      function Y_(e, t) {
        var r = !!Ye(t);
        if (!r)
          return !1;
        var a = se(e);
        return !(a && a !== "link");
      }
      i(Y_, "identicalLinksSamePurposeMatches");
      var K_ = Y_;
      function X_(e) {
        return du(e);
      }
      i(X_, "insertedIntoFocusOrderMatches");
      var J_ = X_;
      function Q_(e) {
        return Je(e);
      }
      i(Q_, "hasVisibleTextMatches");
      function Z_(e, t) {
        return Je(t);
      }
      i(Z_, "isVisibleOnScreenMatches");
      function ex(e, t) {
        var r = se(e);
        if (!r)
          return !1;
        var a = ur("widget"), n = a.includes(r);
        if (!n)
          return !1;
        var o = bi();
        return !(!o.includes(r) || !Q(Cr(t)) && !Q(Fr(e)) || !Q(ft(t)));
      }
      i(ex, "labelContentNameMismatchMatches");
      var tx = ex;
      function rx(e, t) {
        if (t.props.nodeName !== "input" || t.hasAttr("type") === !1)
          return !0;
        var r = t.attr("type").toLowerCase();
        return ["hidden", "image", "button", "submit", "reset"].includes(r) === !1;
      }
      i(rx, "labelMatches");
      var ax = rx;
      function nx(e, t) {
        var r = "article, aside, main, nav, section";
        return e.hasAttribute("role") || !tr(t, r);
      }
      i(nx, "landmarkHasBodyContextMatches");
      var ix = nx;
      function ox(e, t) {
        var r = ["article", "aside", "main", "nav", "section"].join(",");
        function a(o) {
          return !Xe(o, r);
        }
        i(a, "isHeaderFooterLandmark");
        function n(o) {
          var l = o.actualNode, u = ur("landmark"), s = se(l);
          if (!s)
            return !1;
          var c = l.nodeName.toUpperCase();
          if (c === "HEADER" || c === "FOOTER")
            return a(o);
          if (c === "SECTION" || c === "FORM") {
            var d = Ye(o);
            return !!d;
          }
          return u.indexOf(s) >= 0 || s === "region";
        }
        return i(n, "isLandmarkVirtual"), n(t) && xe(e);
      }
      i(ox, "landmarkUniqueMatches");
      var lx = ox;
      function ux(e) {
        return !Ra(e) && !Ce(e);
      }
      i(ux, "dataTableMatches2");
      var sx = ux;
      function cx(e) {
        var t = Q(e.innerText), r = e.getAttribute("role");
        return r && r !== "link" || !t || !Je(e) ? !1 : Wn(e);
      }
      i(cx, "linkInTextBlockMatches");
      var dx = cx;
      function fx(e, t) {
        var r = se(t);
        return r ? !!de.ariaRoles[r].childrenPresentational : !1;
      }
      i(fx, "nestedInteractiveMatches");
      var px = fx;
      function mx(e) {
        return !(!e.currentSrc || e.hasAttribute("paused") || e.hasAttribute("muted"));
      }
      i(mx, "noAutoplayAudioMatches");
      var hx = mx;
      function vx(e, t) {
        return !(!t.hasAttr("role") || !t.attr("role").trim());
      }
      i(vx, "noEmptyRoleMatches");
      var gx = vx;
      function bx(e, t) {
        var r = be(t);
        if (!r || ["none", "presentation"].includes(r))
          return !0;
        var a = Al[r] || {}, n = a.accessibleNameRequired;
        return !!(n || Ce(t));
      }
      i(bx, "noExplicitNameRequired");
      var dc = bx;
      function yx(e, t) {
        var r = Ht(t), a = r.namingMethods;
        return !(a && a.length !== 0 || be(t) === "combobox" && et(t, 'input:not([type="hidden"])').length || yi(t, {
          popupRoles: ["listbox"]
        }));
      }
      i(yx, "noNamingMethodMatches");
      var Dx = yx;
      function wx(e, t) {
        var r = parseInt(t.attr("tabindex"), 10);
        return isNaN(r) || r >= 0;
      }
      i(wx, "noNegativeTabindexMatches");
      var _x = wx;
      function xx(e, t) {
        return !t.attr("role");
      }
      i(xx, "noRoleMatches");
      var Ex = xx;
      function Ax(e, t) {
        return t.props.nodeName !== "html";
      }
      i(Ax, "notHtmlMatches");
      var Fx = Ax, Cx = /* @__PURE__ */ i(function(t, r) {
        return [dc, Tx].every(function(a) {
          return a(t, r);
        });
      }, "object_is_loaded_matches_default");
      function Tx(e) {
        var t;
        if (!(e != null && (t = e.ownerDocument) !== null && t !== void 0 && t.createRange))
          return !0;
        var r = e.ownerDocument.createRange();
        return r.setStart(e, 0), r.setEnd(e, e.childNodes.length), r.getClientRects().length === 0;
      }
      i(Tx, "objectHasLoaded");
      function kx(e) {
        var t = Array.from(e.parentNode.childNodes), r = e.textContent.trim(), a = /[.!?:;](?![.!?:;])/g;
        if (r.length === 0 || (r.match(a) || []).length >= 2)
          return !1;
        var n = t.slice(t.indexOf(e) + 1).filter(function(o) {
          return o.nodeName.toUpperCase() === "P" && o.textContent.trim() !== "";
        });
        return n.length !== 0;
      }
      i(kx, "pAsHeadingMatches");
      var Rx = kx;
      function Sx(e, t) {
        return dt(t, {
          chromiumRoles: !0
        }) !== null;
      }
      i(Sx, "presentationRoleConflictMatches");
      var Ox = Sx;
      function Ix(e, t) {
        return wt(e, 13) !== void 0 && yi(t) === !1 && Px(t);
      }
      i(Ix, "scrollableRegionFocusableMatches");
      function Px(e) {
        return et(e, "*").some(function(t) {
          return Sr(t, !0, !0);
        });
      }
      i(Px, "isNoneEmptyElement");
      function Mx(e) {
        return Gn(e) && oa(e);
      }
      i(Mx, "skipLinkMatches");
      var Nx = Mx;
      function qx(e, t) {
        var r = se(t);
        return ["treegrid", "grid", "table"].includes(r);
      }
      i(qx, "tableOrGridRoleMatches");
      function Bx(e, t) {
        return Lx.every(function(r) {
          return r(e, t);
        });
      }
      i(Bx, "widgetNotInline");
      var Lx = [function(e, t) {
        return fc(t);
      }, function(e, t) {
        return Vx(t);
      }, function(e, t) {
        return !Oi(e, t);
      }, function(e, t) {
        return Ce(t);
      }, function(e, t) {
        return pt(t) || !jx(t);
      }, function(e) {
        return !Wn(e, {
          noLengthCompare: !0
        });
      }];
      function fc(e) {
        return mt(e) === "widget";
      }
      i(fc, "isWidgetType");
      function Vx(e) {
        return e.props.nodeName !== "area";
      }
      i(Vx, "isNotAreaElement");
      var jx = Ge(/* @__PURE__ */ i(function e(t) {
        return t != null && t.parent ? fc(t.parent) && pt(t.parent) ? !0 : e(t.parent) : !1;
      }, "hasWidgetAncestorInTabOrderMemoized"));
      function Hx(e) {
        return e.ownerDocument.defaultView.self === e.ownerDocument.defaultView.top;
      }
      i(Hx, "windowIsTopMatches");
      var zx = Hx;
      function Ux(e) {
        var t = $t(e.getAttribute("lang")), r = $t(e.getAttribute("xml:lang"));
        return Ea(t) && Ea(r);
      }
      i(Ux, "xmlLangMismatchMatches");
      var $x = Ux, Wx = {
        "abstractrole-evaluate": eb,
        "accesskeys-after": eD,
        "accesskeys-evaluate": rD,
        "alt-space-value-evaluate": xD,
        "aria-allowed-attr-evaluate": tb,
        "aria-allowed-attr-matches": u_,
        "aria-allowed-role-evaluate": ab,
        "aria-allowed-role-matches": c_,
        "aria-busy-evaluate": nb,
        "aria-errormessage-evaluate": ob,
        "aria-has-attr-matches": f_,
        "aria-hidden-body-evaluate": ub,
        "aria-hidden-focus-matches": m_,
        "aria-label-evaluate": E0,
        "aria-labelledby-evaluate": F0,
        "aria-level-evaluate": cb,
        "aria-prohibited-attr-evaluate": db,
        "aria-required-attr-evaluate": pb,
        "aria-required-children-evaluate": gb,
        "aria-required-children-matches": v_,
        "aria-required-parent-evaluate": Eb,
        "aria-required-parent-matches": b_,
        "aria-roledescription-evaluate": Fb,
        "aria-unsupported-attr-evaluate": Tb,
        "aria-valid-attr-evaluate": Rb,
        "aria-valid-attr-value-evaluate": Sb,
        "attr-non-space-content-evaluate": jy,
        "autocomplete-appropriate-evaluate": qy,
        "autocomplete-matches": D_,
        "autocomplete-valid-evaluate": Ly,
        "avoid-inline-spacing-evaluate": T0,
        "bypass-matches": x_,
        "caption-evaluate": sw,
        "caption-faked-evaluate": $0,
        "color-contrast-evaluate": Cy,
        "color-contrast-matches": A_,
        "css-orientation-lock-evaluate": gw,
        "data-table-large-matches": k_,
        "data-table-matches": S_,
        "deprecatedrole-evaluate": Ib,
        "dlitem-evaluate": JD,
        "doc-has-title-evaluate": R0,
        "duplicate-id-active-matches": I_,
        "duplicate-id-after": D0,
        "duplicate-id-aria-matches": M_,
        "duplicate-id-evaluate": _0,
        "duplicate-id-misc-matches": q_,
        "duplicate-img-label-evaluate": AD,
        "exists-evaluate": O0,
        "explicit-evaluate": CD,
        "fallbackrole-evaluate": Nb,
        "focusable-content-evaluate": nD,
        "focusable-disabled-evaluate": oD,
        "focusable-element-evaluate": uD,
        "focusable-modal-open-evaluate": cD,
        "focusable-no-name-evaluate": fD,
        "focusable-not-tabbable-evaluate": mD,
        "frame-focusable-content-evaluate": hD,
        "frame-focusable-content-matches": L_,
        "frame-tested-after": dw,
        "frame-tested-evaluate": pw,
        "frame-title-has-text-matches": j_,
        "has-alt-evaluate": P0,
        "has-descendant-after": zy,
        "has-descendant-evaluate": $y,
        "has-global-aria-attribute-evaluate": Bb,
        "has-implicit-chromium-role-matches": z_,
        "has-lang-evaluate": $D,
        "has-text-content-evaluate": Wy,
        "has-widget-role-evaluate": Vb,
        "heading-matches": U_,
        "heading-order-after": Rw,
        "heading-order-evaluate": Bw,
        "help-same-as-label-evaluate": kD,
        "hidden-content-evaluate": o_,
        "hidden-explicit-label-evaluate": SD,
        "html-namespace-matches": G_,
        "html5-scope-evaluate": G0,
        "identical-links-same-purpose-after": Vw,
        "identical-links-same-purpose-evaluate": Xw,
        "identical-links-same-purpose-matches": K_,
        "implicit-evaluate": ID,
        "inline-style-property-evaluate": M0,
        "inserted-into-focus-order-matches": J_,
        "internal-link-present-evaluate": Qw,
        "invalid-children-evaluate": QD,
        "invalidrole-evaluate": Hb,
        "is-element-focusable-evaluate": Ub,
        "is-initiator-matches": cc,
        "is-on-screen-evaluate": B0,
        "is-visible-matches": Q_,
        "is-visible-on-screen-matches": Z_,
        "label-content-name-mismatch-evaluate": MD,
        "label-content-name-mismatch-matches": tx,
        "label-matches": ax,
        "landmark-has-body-context-matches": ix,
        "landmark-is-top-level-evaluate": gD,
        "landmark-is-unique-after": jD,
        "landmark-is-unique-evaluate": zD,
        "landmark-unique-matches": lx,
        "layout-table-matches": sx,
        "link-in-text-block-evaluate": Oy,
        "link-in-text-block-matches": dx,
        "link-in-text-block-style-evaluate": My,
        "listitem-evaluate": tw,
        "matches-definition-evaluate": Yy,
        "meta-refresh-evaluate": t0,
        "meta-viewport-scale-evaluate": yw,
        "multiple-label-evaluate": qD,
        "nested-interactive-matches": px,
        "no-autoplay-audio-evaluate": hw,
        "no-autoplay-audio-matches": hx,
        "no-empty-role-matches": gx,
        "no-explicit-name-required-matches": dc,
        "no-focusable-content-evaluate": bD,
        "no-implicit-explicit-label-evaluate": Wb,
        "no-naming-method-matches": Dx,
        "no-negative-tabindex-matches": _x,
        "no-role-matches": Ex,
        "non-empty-if-present-evaluate": V0,
        "not-html-matches": Fx,
        "object-is-loaded-matches": Cx,
        "only-dlitems-evaluate": aw,
        "only-listitems-evaluate": iw,
        "p-as-heading-evaluate": i0,
        "p-as-heading-matches": Rx,
        "page-no-duplicate-after": Xy,
        "page-no-duplicate-evaluate": Qy,
        "presentation-role-conflict-matches": Ox,
        "presentational-role-evaluate": j0,
        "region-after": l0,
        "region-evaluate": c0,
        "same-caption-summary-evaluate": Y0,
        "scope-value-evaluate": Q0,
        "scrollable-region-focusable-matches": Ix,
        "skip-link-evaluate": m0,
        "skip-link-matches": Nx,
        "structured-dlitems-evaluate": lw,
        "svg-namespace-matches": Oi,
        "svg-non-empty-title-evaluate": z0,
        "tabindex-evaluate": wD,
        "table-or-grid-role-matches": qx,
        "target-offset-evaluate": ww,
        "target-size-evaluate": xw,
        "td-has-header-evaluate": e_,
        "td-headers-attr-evaluate": r_,
        "th-has-data-cells-evaluate": n_,
        "title-only-evaluate": LD,
        "unique-frame-title-after": v0,
        "unique-frame-title-evaluate": b0,
        "unsupportedrole-evaluate": Yb,
        "valid-lang-evaluate": GD,
        "valid-scrollable-semantics-evaluate": ey,
        "widget-not-inline-matches": Bx,
        "window-is-top-matches": zx,
        "xml-lang-mismatch-evaluate": KD,
        "xml-lang-mismatch-matches": $x
      }, Sa = Wx;
      function Gx(e) {
        this.id = e.id, this.data = null, this.relatedNodes = [], this.result = null;
      }
      i(Gx, "CheckResult");
      var Ii = Gx;
      function Pi(e) {
        if (typeof e == "string") {
          if (Sa[e])
            return Sa[e];
          if (/^\s*function[\s\w]*\(/.test(e))
            return new Function("return " + e + ";")();
          throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e));
        }
        return e;
      }
      i(Pi, "createExecutionContext");
      function pc() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return (Array.isArray(e) || P(e) !== "object") && (e = {
          value: e
        }), e;
      }
      i(pc, "normalizeOptions");
      function cr(e) {
        e && (this.id = e.id, this.configure(e));
      }
      i(cr, "Check"), cr.prototype.enabled = !0, cr.prototype.run = /* @__PURE__ */ i(function(t, r, a, n, o) {
        r = r || {};
        var l = r.hasOwnProperty("enabled") ? r.enabled : this.enabled, u = this.getOptions(r.options);
        if (l) {
          var s = new Ii(this), c = Ga(s, r, n, o), d;
          try {
            d = this.evaluate.call(c, t.actualNode, u, t, a);
          } catch (f) {
            t && t.actualNode && (f.errorNode = new lt(t).toJSON()), o(f);
            return;
          }
          c.isAsync || (s.result = d, n(s));
        } else
          n(null);
      }, "run"), cr.prototype.runSync = /* @__PURE__ */ i(function(t, r, a) {
        r = r || {};
        var n = r, o = n.enabled, l = o === void 0 ? this.enabled : o;
        if (!l)
          return null;
        var u = this.getOptions(r.options), s = new Ii(this), c = Ga(s, r);
        c.async = /* @__PURE__ */ i(function() {
          throw new Error("Cannot run async check while in a synchronous run");
        }, "async");
        var d;
        try {
          d = this.evaluate.call(c, t.actualNode, u, t, a);
        } catch (f) {
          throw t && t.actualNode && (f.errorNode = new lt(t).toJSON()), f;
        }
        return s.result = d, s;
      }, "runSync"), cr.prototype.configure = /* @__PURE__ */ i(function(t) {
        var r = this;
        (!t.evaluate || Sa[t.evaluate]) && (this._internalCheck = !0), t.hasOwnProperty("enabled") && (this.enabled = t.enabled), t.hasOwnProperty("options") && (this._internalCheck ? this.options = pc(t.options) : this.options = t.options), ["evaluate", "after"].filter(function(a) {
          return t.hasOwnProperty(a);
        }).forEach(function(a) {
          return r[a] = Pi(t[a]);
        });
      }, "configure2"), cr.prototype.getOptions = /* @__PURE__ */ i(function(t) {
        return this._internalCheck ? cn(this.options, pc(t || {})) : t || this.options;
      }, "getOptions");
      var mc = cr;
      function Yx(e) {
        this.id = e.id, this.result = ee.NA, this.pageLevel = e.pageLevel, this.impact = null, this.nodes = [];
      }
      i(Yx, "RuleResult");
      var Oa = Yx;
      function tt(e, t) {
        this._audit = t, this.id = e.id, this.selector = e.selector || "*", e.impact && (pe(ee.impact.includes(e.impact), "Impact ".concat(e.impact, " is not a valid impact")), this.impact = e.impact), this.excludeHidden = typeof e.excludeHidden == "boolean" ? e.excludeHidden : !0, this.enabled = typeof e.enabled == "boolean" ? e.enabled : !0, this.pageLevel = typeof e.pageLevel == "boolean" ? e.pageLevel : !1, this.reviewOnFail = typeof e.reviewOnFail == "boolean" ? e.reviewOnFail : !1, this.any = e.any || [], this.all = e.all || [], this.none = e.none || [], this.tags = e.tags || [], this.preload = !!e.preload, this.actIds = e.actIds, e.matches && (this.matches = Pi(e.matches));
      }
      i(tt, "Rule"), tt.prototype.matches = /* @__PURE__ */ i(function() {
        return !0;
      }, "matches3"), tt.prototype.gather = /* @__PURE__ */ i(function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = "mark_gather_start_" + this.id, n = "mark_gather_end_" + this.id, o = "mark_isVisibleToScreenReaders_start_" + this.id, l = "mark_isVisibleToScreenReaders_end_" + this.id;
        r.performanceTimer && Se.mark(a);
        var u = pi(this.selector, t);
        return this.excludeHidden && (r.performanceTimer && Se.mark(o), u = u.filter(function(s) {
          return xe(s);
        }), r.performanceTimer && (Se.mark(l), Se.measure("rule_" + this.id + "#gather_axe.utils.isVisibleToScreenReaders", o, l))), r.performanceTimer && (Se.mark(n), Se.measure("rule_" + this.id + "#gather", a, n)), u;
      }, "gather"), tt.prototype.runChecks = /* @__PURE__ */ i(function(t, r, a, n, o, l) {
        var u = this, s = ct();
        this[t].forEach(function(c) {
          var d = u._audit.checks[c.id || c], f = Da(d, u.id, a);
          s.defer(function(p, m) {
            d.run(r, f, n, p, m);
          });
        }), s.then(function(c) {
          c = c.filter(function(d) {
            return d;
          }), o({
            type: t,
            results: c
          });
        }).catch(l);
      }, "runChecks"), tt.prototype.runChecksSync = /* @__PURE__ */ i(function(t, r, a, n) {
        var o = this, l = [];
        return this[t].forEach(function(u) {
          var s = o._audit.checks[u.id || u], c = Da(s, o.id, a);
          l.push(s.runSync(r, c, n));
        }), l = l.filter(function(u) {
          return u;
        }), {
          type: t,
          results: l
        };
      }, "runChecksSync"), tt.prototype.run = /* @__PURE__ */ i(function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0;
        a.performanceTimer && this._trackPerformance();
        var l = ct(), u = new Oa(this), s;
        try {
          s = this.gatherAndMatchNodes(t, a);
        } catch (c) {
          o(new hr({
            cause: c,
            ruleId: this.id
          }));
          return;
        }
        a.performanceTimer && this._logGatherPerformance(s), s.forEach(function(c) {
          l.defer(function(d, f) {
            var p = ct();
            ["any", "all", "none"].forEach(function(m) {
              p.defer(function(h, y) {
                r.runChecks(m, c, a, t, h, y);
              });
            }), p.then(function(m) {
              var h = hc(m);
              h && (h.node = new lt(c, a), u.nodes.push(h), r.reviewOnFail && (["any", "all"].forEach(function(y) {
                h[y].forEach(function(w) {
                  w.result === !1 && (w.result = void 0);
                });
              }), h.none.forEach(function(y) {
                y.result === !0 && (y.result = void 0);
              }))), d();
            }).catch(function(m) {
              return f(m);
            });
          });
        }), l.defer(function(c) {
          return setTimeout(c, 0);
        }), a.performanceTimer && this._logRulePerformance(), l.then(function() {
          return n(u);
        }).catch(function(c) {
          return o(c);
        });
      }, "run2"), tt.prototype.runSync = /* @__PURE__ */ i(function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        a.performanceTimer && this._trackPerformance();
        var n = new Oa(this), o;
        try {
          o = this.gatherAndMatchNodes(t, a);
        } catch (l) {
          throw new hr({
            cause: l,
            ruleId: this.id
          });
        }
        return a.performanceTimer && this._logGatherPerformance(o), o.forEach(function(l) {
          var u = [];
          ["any", "all", "none"].forEach(function(c) {
            u.push(r.runChecksSync(c, l, a, t));
          });
          var s = hc(u);
          s && (s.node = l.actualNode ? new lt(l, a) : null, n.nodes.push(s), r.reviewOnFail && (["any", "all"].forEach(function(c) {
            s[c].forEach(function(d) {
              d.result === !1 && (d.result = void 0);
            });
          }), s.none.forEach(function(c) {
            c.result === !0 && (c.result = void 0);
          })));
        }), a.performanceTimer && this._logRulePerformance(), n;
      }, "runSync2"), tt.prototype._trackPerformance = /* @__PURE__ */ i(function() {
        this._markStart = "mark_rule_start_" + this.id, this._markEnd = "mark_rule_end_" + this.id, this._markChecksStart = "mark_runchecks_start_" + this.id, this._markChecksEnd = "mark_runchecks_end_" + this.id;
      }, "_trackPerformance"), tt.prototype._logGatherPerformance = /* @__PURE__ */ i(function(t) {
        Mt("gather (", t.length, "):", Se.timeElapsed() + "ms"), Se.mark(this._markChecksStart);
      }, "_logGatherPerformance"), tt.prototype._logRulePerformance = /* @__PURE__ */ i(function() {
        Se.mark(this._markChecksEnd), Se.mark(this._markEnd), Se.measure("runchecks_" + this.id, this._markChecksStart, this._markChecksEnd), Se.measure("rule_" + this.id, this._markStart, this._markEnd);
      }, "_logRulePerformance");
      function hc(e) {
        if (e.length) {
          var t = !1, r = {};
          return e.forEach(function(a) {
            var n = a.results.filter(function(o) {
              return o;
            });
            r[a.type] = n, n.length && (t = !0);
          }), t ? r : null;
        }
      }
      i(hc, "getResult"), tt.prototype.gatherAndMatchNodes = /* @__PURE__ */ i(function(t, r) {
        var a = this, n = "mark_matches_start_" + this.id, o = "mark_matches_end_" + this.id, l = this.gather(t, r);
        return r.performanceTimer && Se.mark(n), l = l.filter(function(u) {
          return a.matches(u.actualNode, u, t);
        }), r.performanceTimer && (Se.mark(o), Se.measure("rule_" + this.id + "#matches", n, o)), l;
      }, "gatherAndMatchNodes");
      function Kx(e) {
        return ra(e).map(function(t) {
          var r = e._audit.checks[t.id || t];
          return r && typeof r.after == "function" ? r : null;
        }).filter(Boolean);
      }
      i(Kx, "findAfterChecks");
      function Xx(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = ra(a);
          n.forEach(function(o) {
            o.id === t && (o.node = a.node, r.push(o));
          });
        }), r;
      }
      i(Xx, "findCheckResults");
      function Jx(e) {
        return e.filter(function(t) {
          return t.filtered !== !0;
        });
      }
      i(Jx, "filterChecks");
      function Qx(e) {
        var t = ["any", "all", "none"], r = e.nodes.filter(function(a) {
          var n = 0;
          return t.forEach(function(o) {
            a[o] = Jx(a[o]), n += a[o].length;
          }), n > 0;
        });
        return e.pageLevel && r.length && (r = [r.reduce(function(a, n) {
          if (a)
            return t.forEach(function(o) {
              a[o].push.apply(a[o], n[o]);
            }), a;
        })]), r;
      }
      i(Qx, "sanitizeNodes"), tt.prototype.after = /* @__PURE__ */ i(function(t, r) {
        var a = this, n = Kx(this), o = this.id;
        return n.forEach(function(l) {
          var u = Xx(t.nodes, l.id), s = Da(l, o, r), c = l.after(u, s);
          a.reviewOnFail && c.forEach(function(d) {
            var f = (a.any.includes(d.id) || a.all.includes(d.id)) && d.result === !1, p = a.none.includes(d.id) && d.result === !0;
            (f || p) && (d.result = void 0);
          }), u.forEach(function(d) {
            delete d.node, c.indexOf(d) === -1 && (d.filtered = !0);
          });
        }), t.nodes = Qx(t), t;
      }, "after"), tt.prototype.configure = /* @__PURE__ */ i(function(t) {
        t.hasOwnProperty("selector") && (this.selector = t.selector), t.hasOwnProperty("excludeHidden") && (this.excludeHidden = typeof t.excludeHidden == "boolean" ? t.excludeHidden : !0), t.hasOwnProperty("enabled") && (this.enabled = typeof t.enabled == "boolean" ? t.enabled : !0), t.hasOwnProperty("pageLevel") && (this.pageLevel = typeof t.pageLevel == "boolean" ? t.pageLevel : !1), t.hasOwnProperty("reviewOnFail") && (this.reviewOnFail = typeof t.reviewOnFail == "boolean" ? t.reviewOnFail : !1), t.hasOwnProperty("any") && (this.any = t.any), t.hasOwnProperty("all") && (this.all = t.all), t.hasOwnProperty("none") && (this.none = t.none), t.hasOwnProperty("tags") && (this.tags = t.tags), t.hasOwnProperty("actIds") && (this.actIds = t.actIds), t.hasOwnProperty("matches") && (this.matches = Pi(t.matches)), t.impact && (pe(ee.impact.includes(t.impact), "Impact ".concat(t.impact, " is not a valid impact")), this.impact = t.impact);
      }, "configure3");
      var vc = tt, dr = it(oo()), fr = /\{\{.+?\}\}/g;
      function gc() {
        if (D.origin && D.origin !== "null")
          return D.origin;
        if (D.location && D.location.origin && D.location.origin !== "null")
          return D.location.origin;
      }
      i(gc, "getDefaultOrigin");
      function Zx(e) {
        var t;
        if (e ? (t = bt(e), t.commons = e.commons) : t = {}, t.reporter = t.reporter || null, t.noHtml = t.noHtml || !1, !t.allowedOrigins) {
          var r = gc();
          t.allowedOrigins = r ? [r] : [];
        }
        return t.rules = t.rules || [], t.checks = t.checks || [], t.data = ue({
          checks: {},
          rules: {}
        }, t.data), t;
      }
      i(Zx, "getDefaultConfiguration");
      function bc(e, t, r) {
        var a, n;
        for (a = 0, n = e.length; a < n; a++)
          t[r](e[a]);
      }
      i(bc, "unpackToObject");
      var eE = /* @__PURE__ */ i(function(t, r) {
        var a = r.pass, n = r.fail;
        return typeof a == "string" && fr.test(a) && (a = dr.default.compile(a)), typeof n == "string" && fr.test(n) && (n = dr.default.compile(n)), ue({}, t, {
          messages: {
            pass: a || t.messages.pass,
            fail: n || t.messages.fail,
            incomplete: P(t.messages.incomplete) === "object" ? ue({}, t.messages.incomplete, r.incomplete) : r.incomplete
          }
        });
      }, "mergeCheckLocale"), tE = /* @__PURE__ */ i(function(t, r) {
        var a = r.help, n = r.description;
        return typeof a == "string" && fr.test(a) && (a = dr.default.compile(a)), typeof n == "string" && fr.test(n) && (n = dr.default.compile(n)), ue({}, t, {
          help: a || t.help,
          description: n || t.description
        });
      }, "mergeRuleLocale"), rE = /* @__PURE__ */ i(function(t, r) {
        var a = r.failureMessage;
        return typeof a == "string" && fr.test(a) && (a = dr.default.compile(a)), ue({}, t, {
          failureMessage: a || t.failureMessage
        });
      }, "mergeFailureMessage"), aE = /* @__PURE__ */ i(function(t, r) {
        return typeof r == "string" && fr.test(r) && (r = dr.default.compile(r)), r || t;
      }, "mergeFallbackMessage"), nE = function() {
        function e(t) {
          Wt(this, e), this.lang = "en", this.defaultConfig = t, this.standards = de, this._init(), this._defaultLocale = null;
        }
        return i(e, "Audit"), Gt(e, [{
          key: "_setDefaultLocale",
          value: /* @__PURE__ */ i(function() {
            if (!this._defaultLocale) {
              for (var r = {
                checks: {},
                rules: {},
                failureSummaries: {},
                incompleteFallbackMessage: "",
                lang: this.lang
              }, a = Object.keys(this.data.checks), n = 0; n < a.length; n++) {
                var o = a[n], l = this.data.checks[o], u = l.messages, s = u.pass, c = u.fail, d = u.incomplete;
                r.checks[o] = {
                  pass: s,
                  fail: c,
                  incomplete: d
                };
              }
              for (var f = Object.keys(this.data.rules), p = 0; p < f.length; p++) {
                var m = f[p], h = this.data.rules[m], y = h.description, w = h.help;
                r.rules[m] = {
                  description: y,
                  help: w
                };
              }
              for (var v = Object.keys(this.data.failureSummaries), b = 0; b < v.length; b++) {
                var E = v[b], A = this.data.failureSummaries[E], T = A.failureMessage;
                r.failureSummaries[E] = {
                  failureMessage: T
                };
              }
              r.incompleteFallbackMessage = this.data.incompleteFallbackMessage, this._defaultLocale = r;
            }
          }, "_setDefaultLocale")
        }, {
          key: "_resetLocale",
          value: /* @__PURE__ */ i(function() {
            var r = this._defaultLocale;
            !r || this.applyLocale(r);
          }, "_resetLocale")
        }, {
          key: "_applyCheckLocale",
          value: /* @__PURE__ */ i(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var o = a[n];
              if (!this.data.checks[o])
                throw new Error('Locale provided for unknown check: "'.concat(o, '"'));
              this.data.checks[o] = eE(this.data.checks[o], r[o]);
            }
          }, "_applyCheckLocale")
        }, {
          key: "_applyRuleLocale",
          value: /* @__PURE__ */ i(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var o = a[n];
              if (!this.data.rules[o])
                throw new Error('Locale provided for unknown rule: "'.concat(o, '"'));
              this.data.rules[o] = tE(this.data.rules[o], r[o]);
            }
          }, "_applyRuleLocale")
        }, {
          key: "_applyFailureSummaries",
          value: /* @__PURE__ */ i(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var o = a[n];
              if (!this.data.failureSummaries[o])
                throw new Error('Locale provided for unknown failureMessage: "'.concat(o, '"'));
              this.data.failureSummaries[o] = rE(this.data.failureSummaries[o], r[o]);
            }
          }, "_applyFailureSummaries")
        }, {
          key: "applyLocale",
          value: /* @__PURE__ */ i(function(r) {
            this._setDefaultLocale(), r.checks && this._applyCheckLocale(r.checks), r.rules && this._applyRuleLocale(r.rules), r.failureSummaries && this._applyFailureSummaries(r.failureSummaries, "failureSummaries"), r.incompleteFallbackMessage && (this.data.incompleteFallbackMessage = aE(this.data.incompleteFallbackMessage, r.incompleteFallbackMessage)), r.lang && (this.lang = r.lang);
          }, "applyLocale")
        }, {
          key: "setAllowedOrigins",
          value: /* @__PURE__ */ i(function(r) {
            var a = gc();
            this.allowedOrigins = [];
            var n = Ke(r), o;
            try {
              for (n.s(); !(o = n.n()).done; ) {
                var l = o.value;
                if (l === ee.allOrigins) {
                  this.allowedOrigins = ["*"];
                  return;
                } else
                  l !== ee.sameOrigin ? this.allowedOrigins.push(l) : a && this.allowedOrigins.push(a);
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
          }, "setAllowedOrigins")
        }, {
          key: "_init",
          value: /* @__PURE__ */ i(function() {
            var r = Zx(this.defaultConfig);
            this.lang = r.lang || "en", this.reporter = r.reporter, this.commands = {}, this.rules = [], this.checks = {}, this.brand = "axe", this.application = "axeAPI", this.tagExclude = ["experimental"], this.noHtml = r.noHtml, this.allowedOrigins = r.allowedOrigins, bc(r.rules, this, "addRule"), bc(r.checks, this, "addCheck"), this.data = {}, this.data.checks = r.data && r.data.checks || {}, this.data.rules = r.data && r.data.rules || {}, this.data.failureSummaries = r.data && r.data.failureSummaries || {}, this.data.incompleteFallbackMessage = r.data && r.data.incompleteFallbackMessage || "", this._constructHelpUrls();
          }, "_init")
        }, {
          key: "registerCommand",
          value: /* @__PURE__ */ i(function(r) {
            this.commands[r.id] = r.callback;
          }, "registerCommand")
        }, {
          key: "addRule",
          value: /* @__PURE__ */ i(function(r) {
            r.metadata && (this.data.rules[r.id] = r.metadata);
            var a = this.getRule(r.id);
            a ? a.configure(r) : this.rules.push(new vc(r, this));
          }, "addRule")
        }, {
          key: "addCheck",
          value: /* @__PURE__ */ i(function(r) {
            var a = r.metadata;
            P(a) === "object" && (this.data.checks[r.id] = a, P(a.messages) === "object" && Object.keys(a.messages).filter(function(n) {
              return a.messages.hasOwnProperty(n) && typeof a.messages[n] == "string";
            }).forEach(function(n) {
              a.messages[n].indexOf("function") === 0 && (a.messages[n] = new Function("return " + a.messages[n] + ";")());
            })), this.checks[r.id] ? this.checks[r.id].configure(r) : this.checks[r.id] = new mc(r);
          }, "addCheck")
        }, {
          key: "run",
          value: /* @__PURE__ */ i(function(r, a, n, o) {
            this.normalizeOptions(a), g._selectCache = [];
            var l = iE(this.rules, r, a), u = l.now, s = l.later, c = ct();
            u.forEach(function(p) {
              c.defer(yc(p, r, a));
            });
            var d = ct();
            s.length && d.defer(function(p) {
              Qu(a).then(function(m) {
                return p(m);
              }).catch(function(m) {
                console.warn("Couldn't load preload assets: ", m), p(void 0);
              });
            });
            var f = ct();
            f.defer(c), f.defer(d), f.then(function(p) {
              var m = p.pop();
              if (m && m.length) {
                var h = m[0];
                h && (r = ue({}, r, h));
              }
              var y = p[0];
              if (!s.length) {
                g._selectCache = void 0, n(y.filter(function(v) {
                  return !!v;
                }));
                return;
              }
              var w = ct();
              s.forEach(function(v) {
                var b = yc(v, r, a);
                w.defer(b);
              }), w.then(function(v) {
                g._selectCache = void 0, n(y.concat(v).filter(function(b) {
                  return !!b;
                }));
              }).catch(o);
            }).catch(o);
          }, "run")
        }, {
          key: "after",
          value: /* @__PURE__ */ i(function(r, a) {
            var n = this.rules;
            return r.map(function(o) {
              var l = _r(n, "id", o.id);
              if (!l)
                throw new Error("Result for unknown rule. You may be running mismatch axe-core versions");
              return l.after(o, a);
            });
          }, "after")
        }, {
          key: "getRule",
          value: /* @__PURE__ */ i(function(r) {
            return this.rules.find(function(a) {
              return a.id === r;
            });
          }, "getRule")
        }, {
          key: "normalizeOptions",
          value: /* @__PURE__ */ i(function(r) {
            var a = this, n = [], o = [];
            if (a.rules.forEach(function(d) {
              o.push(d.id), d.tags.forEach(function(f) {
                n.includes(f) || n.push(f);
              });
            }), ["object", "string"].includes(P(r.runOnly))) {
              if (typeof r.runOnly == "string" && (r.runOnly = [r.runOnly]), Array.isArray(r.runOnly)) {
                var l = r.runOnly.find(function(d) {
                  return n.includes(d);
                }), u = r.runOnly.find(function(d) {
                  return o.includes(d);
                });
                if (l && u)
                  throw new Error("runOnly cannot be both rules and tags");
                u ? r.runOnly = {
                  type: "rule",
                  values: r.runOnly
                } : r.runOnly = {
                  type: "tag",
                  values: r.runOnly
                };
              }
              var s = r.runOnly;
              if (s.value && !s.values && (s.values = s.value, delete s.value), !Array.isArray(s.values) || s.values.length === 0)
                throw new Error("runOnly.values must be a non-empty array");
              if (["rule", "rules"].includes(s.type))
                s.type = "rule", s.values.forEach(function(d) {
                  if (!o.includes(d))
                    throw new Error("unknown rule `" + d + "` in options.runOnly");
                });
              else if (["tag", "tags", void 0].includes(s.type)) {
                s.type = "tag";
                var c = s.values.filter(function(d) {
                  return !n.includes(d) && !/wcag2[1-3]a{1,3}/.test(d);
                });
                c.length !== 0 && g.log("Could not find tags `" + c.join("`, `") + "`");
              } else
                throw new Error("Unknown runOnly type '".concat(s.type, "'"));
            }
            return P(r.rules) === "object" && Object.keys(r.rules).forEach(function(d) {
              if (!o.includes(d))
                throw new Error("unknown rule `" + d + "` in options.rules");
            }), r;
          }, "normalizeOptions")
        }, {
          key: "setBranding",
          value: /* @__PURE__ */ i(function(r) {
            var a = {
              brand: this.brand,
              application: this.application
            };
            typeof r == "string" && (this.application = r), r && r.hasOwnProperty("brand") && r.brand && typeof r.brand == "string" && (this.brand = r.brand), r && r.hasOwnProperty("application") && r.application && typeof r.application == "string" && (this.application = r.application), this._constructHelpUrls(a);
          }, "setBranding")
        }, {
          key: "_constructHelpUrls",
          value: /* @__PURE__ */ i(function() {
            var r = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = (g.version.match(/^[1-9][0-9]*\.[0-9]+/) || ["x.y"])[0];
            this.rules.forEach(function(o) {
              r.data.rules[o.id] || (r.data.rules[o.id] = {});
              var l = r.data.rules[o.id];
              (typeof l.helpUrl != "string" || a && l.helpUrl === Dc(a, o.id, n)) && (l.helpUrl = Dc(r, o.id, n));
            });
          }, "_constructHelpUrls")
        }, {
          key: "resetRulesAndChecks",
          value: /* @__PURE__ */ i(function() {
            this._init(), this._resetLocale();
          }, "resetRulesAndChecks")
        }]), e;
      }();
      function iE(e, t, r) {
        var a = {
          now: [],
          later: []
        }, n = e.reduce(function(o, l) {
          return ts(l, t, r) ? l.preload ? (o.later.push(l), o) : (o.now.push(l), o) : o;
        }, a);
        return n;
      }
      i(iE, "getRulesToRun");
      function yc(e, t, r) {
        return r.performanceTimer && Se.mark("mark_rule_start_" + e.id), function(a, n) {
          e.run(t, r, function(o) {
            a(o);
          }, function(o) {
            if (r.debug)
              n(o);
            else {
              var l = Object.assign(new Oa(e), {
                result: ee.CANTTELL,
                description: "An error occured while running this rule",
                message: o.message,
                stack: o.stack,
                error: o,
                errorNode: o.errorNode
              });
              a(l);
            }
          });
        };
      }
      i(yc, "getDefferedRule");
      function Dc(e, t, r) {
        var a = e.brand, n = e.application, o = e.lang;
        return ee.helpUrlBase + a + "/" + (r || g.version.substring(0, g.version.lastIndexOf("."))) + "/" + t + "?application=" + encodeURIComponent(n) + (o && o !== "en" ? "&lang=" + encodeURIComponent(o) : "");
      }
      i(Dc, "getHelpUrl");
      var wc = nE;
      function oE(e) {
        var t = D && "Node" in D && "NodeList" in D, r = !!R;
        if (!(t && r)) {
          if (!e || !e.ownerDocument)
            throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.');
          r || (le.set("globalDocumentSet", !0), R = e.ownerDocument), t || (le.set("globalWindowSet", !0), D = R.defaultView);
        }
      }
      i(oE, "setupGlobals");
      function Mi() {
        le.get("globalDocumentSet") && (le.set("globalDocumentSet", !1), R = null), le.get("globalWindowSet") && (le.set("globalWindowSet", !1), D = null);
      }
      i(Mi, "resetGlobals");
      function lE() {
        Mi(), g._memoizedFns.forEach(function(e) {
          return e.clear();
        }), le.clear(), g._tree = void 0, g._selectorData = void 0, g._selectCache = void 0;
      }
      i(lE, "teardown");
      var kt = lE;
      function uE(e, t, r, a) {
        try {
          e = new wa(e), g._tree = e.flatTree, g._selectorData = Kr(e.flatTree);
        } catch (l) {
          return kt(), a(l);
        }
        var n = ct(), o = g._audit;
        t.performanceTimer && Se.auditStart(), e.frames.length && t.iframes !== !1 && n.defer(function(l, u) {
          Vo(e, t, "rules", null, l, u);
        }), n.defer(function(l, u) {
          o.run(e, t, l, u);
        }), n.then(function(l) {
          try {
            t.performanceTimer && Se.auditEnd();
            var u = aa(l.map(function(s) {
              return {
                results: s
              };
            }));
            e.initiator && (u = o.after(u, t), u.forEach(_a), u = u.map(vr));
            try {
              r(u, kt);
            } catch (s) {
              kt(), Mt(s);
            }
          } catch (s) {
            kt(), a(s);
          }
        }).catch(function(l) {
          kt(), a(l);
        });
      }
      i(uE, "runRules");
      var _c = uE;
      function sE(e, t, r) {
        var a = r, n = /* @__PURE__ */ i(function(s) {
          s instanceof Error || (s = new Error(s)), r(s);
        }, "reject2"), o = e && e.context || {};
        o.hasOwnProperty("include") && !o.include.length && (o.include = [R]);
        var l = e && e.options || {};
        switch (e.command) {
          case "rules":
            return _c(o, l, function(u, s) {
              a(u), s();
            }, n);
          case "cleanup-plugin":
            return fs(a, n);
          default:
            if (g._audit && g._audit.commands && g._audit.commands[e.command])
              return g._audit.commands[e.command](e, r);
        }
      }
      i(sE, "runCommand"), D.top !== D && (ut.subscribe("axe.start", sE), ut.subscribe("axe.ping", function(e, t, r) {
        r({
          axe: !0
        });
      }));
      function cE(e) {
        g._audit = new wc(e);
      }
      i(cE, "load");
      var dE = cE;
      function Vr(e) {
        this._run = e.run, this._collect = e.collect, this._registry = {}, e.commands.forEach(function(t) {
          g._audit.registerCommand(t);
        });
      }
      i(Vr, "Plugin"), Vr.prototype.run = /* @__PURE__ */ i(function() {
        return this._run.apply(this, arguments);
      }, "run3"), Vr.prototype.collect = /* @__PURE__ */ i(function() {
        return this._collect.apply(this, arguments);
      }, "collect"), Vr.prototype.cleanup = /* @__PURE__ */ i(function(t) {
        var r = g.utils.queue(), a = this;
        Object.keys(this._registry).forEach(function(n) {
          r.defer(function(o) {
            a._registry[n].cleanup(o);
          });
        }), r.then(t);
      }, "cleanup2"), Vr.prototype.add = /* @__PURE__ */ i(function(t) {
        this._registry[t.id] = t;
      }, "add");
      function fE(e) {
        g.plugins[e.id] = new Vr(e);
      }
      i(fE, "registerPlugin");
      var pE = fE;
      function mE() {
        var e = g._audit;
        if (!e)
          throw new Error("No audit configured");
        e.resetRulesAndChecks(), Mp();
      }
      i(mE, "reset");
      var hE = mE;
      function vE(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        r.reporter = r.reporter || g._audit.reporter || "v1", g._selectorData = {}, t instanceof Z || (t = new ss(t));
        var a = qu(e);
        if (!a)
          throw new Error("unknown rule `" + e + "`");
        a = Object.create(a, {
          excludeHidden: {
            value: !1
          }
        });
        var n = {
          initiator: !0,
          include: [t],
          exclude: [],
          frames: [],
          page: !1,
          focusable: !0,
          size: {},
          flatTree: []
        }, o = a.runSync(n, r);
        _a(o), vr(o);
        var l = fo([o]);
        return l.violations.forEach(function(u) {
          return u.nodes.forEach(function(s) {
            s.failureSummary = ti(s);
          });
        }), ue({}, Ct(), l, {
          toolOptions: r
        });
      }
      i(vE, "runVirtualRule");
      function xc(e) {
        var t, r, a, n = ge(e, 3), o = n[0], l = n[1], u = n[2], s = new TypeError("axe.run arguments are invalid");
        if (!cv(o)) {
          if (u !== void 0)
            throw s;
          u = l, l = o, o = R;
        }
        if (P(l) !== "object") {
          if (u !== void 0)
            throw s;
          u = l, l = {};
        }
        if (typeof u != "function" && u !== void 0)
          throw s;
        return l = bt(l), l.reporter = (t = (r = l.reporter) !== null && r !== void 0 ? r : (a = g._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", {
          context: o,
          options: l,
          callback: u
        };
      }
      i(xc, "normalizeRunParams");
      var Ia = /* @__PURE__ */ i(function() {
      }, "noop2");
      function gE() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        oE(t[0]);
        var a = xc(t), n = a.context, o = a.options, l = a.callback, u = l === void 0 ? Ia : l, s = bE(u), c = s.thenable, d = s.resolve, f = s.reject;
        try {
          pe(g._audit, "No audit configured"), pe(!g._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        } catch (h) {
          return DE(h, u);
        }
        g._running = !0, o.performanceTimer && g.utils.performanceTimer.start();
        function p(h, y) {
          var w = /* @__PURE__ */ i(function(b) {
            g._running = !1, y();
            try {
              u(null, b);
            } catch (E) {
              g.log(E);
            }
            d(b);
          }, "respond");
          o.performanceTimer && g.utils.performanceTimer.end();
          try {
            yE(h, o, w);
          } catch (v) {
            g._running = !1, y(), u(v), f(v);
          }
        }
        i(p, "handleRunRules");
        function m(h) {
          o.performanceTimer && g.utils.performanceTimer.end(), g._running = !1, Mi(), u(h), f(h);
        }
        return i(m, "errorRunRules"), g._runRules(n, o, p, m), c;
      }
      i(gE, "run4");
      function bE(e) {
        var t, r, a;
        return typeof Promise == "function" && e === Ia ? t = new Promise(function(n, o) {
          r = o, a = n;
        }) : a = r = Ia, {
          thenable: t,
          reject: r,
          resolve: a
        };
      }
      i(bE, "getPromiseHandlers");
      function yE(e, t, r) {
        var a = vi(t.reporter), n = a(e, t, r);
        n !== void 0 && r(n);
      }
      i(yE, "createReport");
      function DE(e, t) {
        if (Mi(), typeof t == "function" && t !== Ia) {
          t(e.message);
          return;
        }
        throw e;
      }
      i(DE, "handleError");
      function wE() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var a = xc(t), n = a.options, o = a.context;
        pe(g._audit, "Axe is not configured. Audit is missing."), pe(!g._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        var l = new wa(o, g._tree);
        return g._tree = l.flatTree, g._selectorData = Kr(l.flatTree), g._running = !0, new Promise(function(u, s) {
          g._audit.run(l, n, u, s);
        }).then(function(u) {
          u = u.map(function(d) {
            var f = d.nodes, p = je(d, Oc);
            return ue({
              nodes: f.map(_E)
            }, p);
          });
          var s = l.frames.map(function(d) {
            var f = d.node;
            return new lt(f, n).toJSON();
          }), c;
          return l.initiator && (c = Ct()), g._running = !1, kt(), {
            results: u,
            frames: s,
            environmentData: c
          };
        }).catch(function(u) {
          return g._running = !1, kt(), Promise.reject(u);
        });
      }
      i(wE, "runPartial");
      function _E(e) {
        var t = e.node, r = je(e, Ic);
        r.node = t.toJSON();
        for (var a = 0, n = ["any", "all", "none"]; a < n.length; a++) {
          var o = n[a];
          r[o] = r[o].map(function(l) {
            var u = l.relatedNodes, s = je(l, Pc);
            return ue({}, s, {
              relatedNodes: u.map(function(c) {
                return c.toJSON();
              })
            });
          });
        }
        return r;
      }
      i(_E, "serializeNode");
      function xE(e) {
        var t, r, a, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n = bt(n);
        var o = e.find(function(s) {
          return s.environmentData;
        }) || {}, l = o.environmentData;
        g._audit.normalizeOptions(n), n.reporter = (t = (r = n.reporter) !== null && r !== void 0 ? r : (a = g._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", EE(e);
        var u = aa(e);
        return u = g._audit.after(u, n), u.forEach(_a), u = u.map(vr), FE(u, ue({
          environmentData: l
        }, n));
      }
      i(xE, "finishRun");
      function EE(e) {
        var t = [], r = Ke(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value, o = t.shift();
            if (!!n) {
              n.frameSpec = o ?? null;
              var l = AE(n);
              t.unshift.apply(t, ae(l));
            }
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }
      }
      i(EE, "setFrameSpec");
      function AE(e) {
        var t = e.frames, r = e.frameSpec;
        return r ? t.map(function(a) {
          return lt.mergeSpecs(a, r);
        }) : t;
      }
      i(AE, "getMergedFrameSpecs");
      function FE(e, t) {
        return new Promise(function(r) {
          var a = vi(t.reporter);
          a(e, t, r);
        });
      }
      i(FE, "createReport2");
      function CE(e) {
        if (g._tree)
          throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.");
        return g._tree = ei(e), g._selectorData = Kr(g._tree), g._tree[0];
      }
      i(CE, "setup");
      var TE = CE, kE = /* @__PURE__ */ i(function(t, r, a) {
        console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'), typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, Mc);
        a(ue({}, Ct(o), {
          toolOptions: l
        }, Ir(t, r)));
      }, "naReporter"), RE = kE, SE = /* @__PURE__ */ i(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, Nc);
        r.resultTypes = ["violations"];
        var u = Ir(t, r), s = u.violations;
        a(ue({}, Ct(o), {
          toolOptions: l,
          violations: s
        }));
      }, "noPassesReporter"), OE = SE, IE = /* @__PURE__ */ i(function(t, r, a) {
        if (typeof r == "function" && (a = r, r = {}), !t || !Array.isArray(t))
          return a(t);
        var n = t.map(function(o) {
          for (var l = ue({}, o), u = ["passes", "violations", "incomplete", "inapplicable"], s = 0, c = u; s < c.length; s++) {
            var d = c[s];
            l[d] && Array.isArray(l[d]) && (l[d] = l[d].map(function(f) {
              var p, m = f.node, h = je(f, qc);
              return m = typeof ((p = m) === null || p === void 0 ? void 0 : p.toJSON) == "function" ? m.toJSON() : m, ue({
                node: m
              }, h);
            }));
          }
          return l;
        });
        a(n);
      }, "rawReporter"), Ec = IE, PE = /* @__PURE__ */ i(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, Bc);
        Ec(t, l, function(u) {
          var s = Ct(o);
          a({
            raw: u,
            env: s
          });
        });
      }, "rawEnvReporter"), ME = PE, NE = /* @__PURE__ */ i(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, Lc), u = Ir(t, r), s = /* @__PURE__ */ i(function(d) {
          d.nodes.forEach(function(f) {
            f.failureSummary = ti(f);
          });
        }, "addFailureSummaries");
        u.incomplete.forEach(s), u.violations.forEach(s), a(ue({}, Ct(o), {
          toolOptions: l
        }, u));
      }, "v1Reporter"), qE = NE, BE = /* @__PURE__ */ i(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, Vc), u = Ir(t, r);
        a(ue({}, Ct(o), {
          toolOptions: l
        }, u));
      }, "v2Reporter"), LE = BE, VE = {
        base: {
          Audit: wc,
          CheckResult: Ii,
          Check: mc,
          Context: wa,
          RuleResult: Oa,
          Rule: vc,
          metadataFunctionMap: Sa
        },
        public: {
          reporters: Mr
        },
        helpers: {
          failureSummary: ti,
          incompleteFallbackMessage: ri,
          processAggregate: Ir
        },
        utils: {
          setDefaultFrameMessenger: Po,
          cacheNodeSelectors: Cu,
          getNodesMatchingExpression: Au,
          convertSelector: Jr
        },
        commons: {
          dom: {
            nativelyHidden: $o,
            displayHidden: Wo,
            visibilityHidden: Go,
            contentVisibiltyHidden: Yo,
            ariaHidden: Ko,
            opacityHidden: Xo,
            scrollHidden: Jo,
            overflowHidden: Qo,
            clipHidden: Zo,
            areaHidden: mn,
            detailsHidden: el
          }
        }
      }, jE = VE;
      g._thisWillBeDeletedDoNotUse = jE, g.constants = ee, g.log = Mt, g.AbstractVirtualNode = Z, g.SerialVirtualNode = ss, g.VirtualNode = Xn, g._cache = le, g.imports = cs, g.cleanup = fs, g.configure = Eg, g.frameMessenger = Ag, g.getRules = Cg, g._load = dE, g.plugins = {}, g.registerPlugin = pE, g.hasReporter = ms, g.getReporter = vi, g.addReporter = _g, g.reset = hE, g._runRules = _c, g.runVirtualRule = vE, g.run = gE, g.setup = TE, g.teardown = kt, g.runPartial = wE, g.finishRun = xE, g.commons = ec, g.utils = Va, g.addReporter("na", RE), g.addReporter("no-passes", OE), g.addReporter("rawEnv", ME), g.addReporter("raw", Ec), g.addReporter("v1", qE), g.addReporter("v2", LE, !0);
    }(), g._load({
      lang: "en",
      data: {
        rules: {
          accesskeys: {
            description: "Ensures every accesskey attribute value is unique",
            help: "accesskey attribute value should be unique"
          },
          "area-alt": {
            description: "Ensures <area> elements of image maps have alternate text",
            help: "Active <area> elements must have alternate text"
          },
          "aria-allowed-attr": {
            description: "Ensures ARIA attributes are allowed for an element's role",
            help: "Elements must only use allowed ARIA attributes"
          },
          "aria-allowed-role": {
            description: "Ensures role attribute has an appropriate value for the element",
            help: "ARIA role should be appropriate for the element"
          },
          "aria-command-name": {
            description: "Ensures every ARIA button, link and menuitem has an accessible name",
            help: "ARIA commands must have an accessible name"
          },
          "aria-dialog-name": {
            description: "Ensures every ARIA dialog and alertdialog node has an accessible name",
            help: "ARIA dialog and alertdialog nodes should have an accessible name"
          },
          "aria-hidden-body": {
            description: "Ensures aria-hidden='true' is not present on the document body.",
            help: "aria-hidden='true' must not be present on the document body"
          },
          "aria-hidden-focus": {
            description: "Ensures aria-hidden elements are not focusable nor contain focusable elements",
            help: "ARIA hidden element must not be focusable or contain focusable elements"
          },
          "aria-input-field-name": {
            description: "Ensures every ARIA input field has an accessible name",
            help: "ARIA input fields must have an accessible name"
          },
          "aria-meter-name": {
            description: "Ensures every ARIA meter node has an accessible name",
            help: "ARIA meter nodes must have an accessible name"
          },
          "aria-progressbar-name": {
            description: "Ensures every ARIA progressbar node has an accessible name",
            help: "ARIA progressbar nodes must have an accessible name"
          },
          "aria-required-attr": {
            description: "Ensures elements with ARIA roles have all required ARIA attributes",
            help: "Required ARIA attributes must be provided"
          },
          "aria-required-children": {
            description: "Ensures elements with an ARIA role that require child roles contain them",
            help: "Certain ARIA roles must contain particular children"
          },
          "aria-required-parent": {
            description: "Ensures elements with an ARIA role that require parent roles are contained by them",
            help: "Certain ARIA roles must be contained by particular parents"
          },
          "aria-roledescription": {
            description: "Ensure aria-roledescription is only used on elements with an implicit or explicit role",
            help: "aria-roledescription must be on elements with a semantic role"
          },
          "aria-roles": {
            description: "Ensures all elements with a role attribute use a valid value",
            help: "ARIA roles used must conform to valid values"
          },
          "aria-text": {
            description: 'Ensures "role=text" is used on elements with no focusable descendants',
            help: '"role=text" should have no focusable descendants'
          },
          "aria-toggle-field-name": {
            description: "Ensures every ARIA toggle field has an accessible name",
            help: "ARIA toggle fields must have an accessible name"
          },
          "aria-tooltip-name": {
            description: "Ensures every ARIA tooltip node has an accessible name",
            help: "ARIA tooltip nodes must have an accessible name"
          },
          "aria-treeitem-name": {
            description: "Ensures every ARIA treeitem node has an accessible name",
            help: "ARIA treeitem nodes should have an accessible name"
          },
          "aria-valid-attr-value": {
            description: "Ensures all ARIA attributes have valid values",
            help: "ARIA attributes must conform to valid values"
          },
          "aria-valid-attr": {
            description: "Ensures attributes that begin with aria- are valid ARIA attributes",
            help: "ARIA attributes must conform to valid names"
          },
          "audio-caption": {
            description: "Ensures <audio> elements have captions",
            help: "<audio> elements must have a captions track"
          },
          "autocomplete-valid": {
            description: "Ensure the autocomplete attribute is correct and suitable for the form field",
            help: "autocomplete attribute must be used correctly"
          },
          "avoid-inline-spacing": {
            description: "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
            help: "Inline text spacing must be adjustable with custom stylesheets"
          },
          blink: {
            description: "Ensures <blink> elements are not used",
            help: "<blink> elements are deprecated and must not be used"
          },
          "button-name": {
            description: "Ensures buttons have discernible text",
            help: "Buttons must have discernible text"
          },
          bypass: {
            description: "Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
            help: "Page must have means to bypass repeated blocks"
          },
          "color-contrast-enhanced": {
            description: "Ensures the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",
            help: "Elements must meet enhanced color contrast ratio thresholds"
          },
          "color-contrast": {
            description: "Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
            help: "Elements must meet minimum color contrast ratio thresholds"
          },
          "css-orientation-lock": {
            description: "Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",
            help: "CSS Media queries must not lock display orientation"
          },
          "definition-list": {
            description: "Ensures <dl> elements are structured correctly",
            help: "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"
          },
          dlitem: {
            description: "Ensures <dt> and <dd> elements are contained by a <dl>",
            help: "<dt> and <dd> elements must be contained by a <dl>"
          },
          "document-title": {
            description: "Ensures each HTML document contains a non-empty <title> element",
            help: "Documents must have <title> element to aid in navigation"
          },
          "duplicate-id-active": {
            description: "Ensures every id attribute value of active elements is unique",
            help: "IDs of active elements must be unique"
          },
          "duplicate-id-aria": {
            description: "Ensures every id attribute value used in ARIA and in labels is unique",
            help: "IDs used in ARIA and labels must be unique"
          },
          "duplicate-id": {
            description: "Ensures every id attribute value is unique",
            help: "id attribute value must be unique"
          },
          "empty-heading": {
            description: "Ensures headings have discernible text",
            help: "Headings should not be empty"
          },
          "empty-table-header": {
            description: "Ensures table headers have discernible text",
            help: "Table header text should not be empty"
          },
          "focus-order-semantics": {
            description: "Ensures elements in the focus order have a role appropriate for interactive content",
            help: "Elements in the focus order should have an appropriate role"
          },
          "form-field-multiple-labels": {
            description: "Ensures form field does not have multiple label elements",
            help: "Form field must not have multiple label elements"
          },
          "frame-focusable-content": {
            description: "Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",
            help: "Frames with focusable content must not have tabindex=-1"
          },
          "frame-tested": {
            description: "Ensures <iframe> and <frame> elements contain the axe-core script",
            help: "Frames should be tested with axe-core"
          },
          "frame-title-unique": {
            description: "Ensures <iframe> and <frame> elements contain a unique title attribute",
            help: "Frames must have a unique title attribute"
          },
          "frame-title": {
            description: "Ensures <iframe> and <frame> elements have an accessible name",
            help: "Frames must have an accessible name"
          },
          "heading-order": {
            description: "Ensures the order of headings is semantically correct",
            help: "Heading levels should only increase by one"
          },
          "hidden-content": {
            description: "Informs users about hidden content.",
            help: "Hidden content on the page should be analyzed"
          },
          "html-has-lang": {
            description: "Ensures every HTML document has a lang attribute",
            help: "<html> element must have a lang attribute"
          },
          "html-lang-valid": {
            description: "Ensures the lang attribute of the <html> element has a valid value",
            help: "<html> element must have a valid value for the lang attribute"
          },
          "html-xml-lang-mismatch": {
            description: "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
            help: "HTML elements with lang and xml:lang must have the same base language"
          },
          "identical-links-same-purpose": {
            description: "Ensure that links with the same accessible name serve a similar purpose",
            help: "Links with the same name must have a similar purpose"
          },
          "image-alt": {
            description: "Ensures <img> elements have alternate text or a role of none or presentation",
            help: "Images must have alternate text"
          },
          "image-redundant-alt": {
            description: "Ensure image alternative is not repeated as text",
            help: "Alternative text of images should not be repeated as text"
          },
          "input-button-name": {
            description: "Ensures input buttons have discernible text",
            help: "Input buttons must have discernible text"
          },
          "input-image-alt": {
            description: 'Ensures <input type="image"> elements have alternate text',
            help: "Image buttons must have alternate text"
          },
          "label-content-name-mismatch": {
            description: "Ensures that elements labelled through their content must have their visible text as part of their accessible name",
            help: "Elements must have their visible text as part of their accessible name"
          },
          "label-title-only": {
            description: "Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
            help: "Form elements should have a visible label"
          },
          label: {
            description: "Ensures every form element has a label",
            help: "Form elements must have labels"
          },
          "landmark-banner-is-top-level": {
            description: "Ensures the banner landmark is at top level",
            help: "Banner landmark should not be contained in another landmark"
          },
          "landmark-complementary-is-top-level": {
            description: "Ensures the complementary landmark or aside is at top level",
            help: "Aside should not be contained in another landmark"
          },
          "landmark-contentinfo-is-top-level": {
            description: "Ensures the contentinfo landmark is at top level",
            help: "Contentinfo landmark should not be contained in another landmark"
          },
          "landmark-main-is-top-level": {
            description: "Ensures the main landmark is at top level",
            help: "Main landmark should not be contained in another landmark"
          },
          "landmark-no-duplicate-banner": {
            description: "Ensures the document has at most one banner landmark",
            help: "Document should not have more than one banner landmark"
          },
          "landmark-no-duplicate-contentinfo": {
            description: "Ensures the document has at most one contentinfo landmark",
            help: "Document should not have more than one contentinfo landmark"
          },
          "landmark-no-duplicate-main": {
            description: "Ensures the document has at most one main landmark",
            help: "Document should not have more than one main landmark"
          },
          "landmark-one-main": {
            description: "Ensures the document has a main landmark",
            help: "Document should have one main landmark"
          },
          "landmark-unique": {
            help: "Ensures landmarks are unique",
            description: "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"
          },
          "link-in-text-block": {
            description: "Ensure links are distinguished from surrounding text in a way that does not rely on color",
            help: "Links must be distinguishable without relying on color"
          },
          "link-name": {
            description: "Ensures links have discernible text",
            help: "Links must have discernible text"
          },
          list: {
            description: "Ensures that lists are structured correctly",
            help: "<ul> and <ol> must only directly contain <li>, <script> or <template> elements"
          },
          listitem: {
            description: "Ensures <li> elements are used semantically",
            help: "<li> elements must be contained in a <ul> or <ol>"
          },
          marquee: {
            description: "Ensures <marquee> elements are not used",
            help: "<marquee> elements are deprecated and must not be used"
          },
          "meta-refresh-no-exceptions": {
            description: 'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
            help: "Delayed refresh must not be used"
          },
          "meta-refresh": {
            description: 'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
            help: "Delayed refresh under 20 hours must not be used"
          },
          "meta-viewport-large": {
            description: 'Ensures <meta name="viewport"> can scale a significant amount',
            help: "Users should be able to zoom and scale the text up to 500%"
          },
          "meta-viewport": {
            description: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
            help: "Zooming and scaling must not be disabled"
          },
          "nested-interactive": {
            description: "Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
            help: "Interactive controls must not be nested"
          },
          "no-autoplay-audio": {
            description: "Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
            help: "<video> or <audio> elements must not play automatically"
          },
          "object-alt": {
            description: "Ensures <object> elements have alternate text",
            help: "<object> elements must have alternate text"
          },
          "p-as-heading": {
            description: "Ensure bold, italic text and font-size is not used to style <p> elements as a heading",
            help: "Styled <p> elements must not be used as headings"
          },
          "page-has-heading-one": {
            description: "Ensure that the page, or at least one of its frames contains a level-one heading",
            help: "Page should contain a level-one heading"
          },
          "presentation-role-conflict": {
            description: "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
            help: "Ensure elements marked as presentational are consistently ignored"
          },
          region: {
            description: "Ensures all page content is contained by landmarks",
            help: "All page content should be contained by landmarks"
          },
          "role-img-alt": {
            description: "Ensures [role='img'] elements have alternate text",
            help: "[role='img'] elements must have an alternative text"
          },
          "scope-attr-valid": {
            description: "Ensures the scope attribute is used correctly on tables",
            help: "scope attribute should be used correctly"
          },
          "scrollable-region-focusable": {
            description: "Ensure elements that have scrollable content are accessible by keyboard",
            help: "Scrollable region must have keyboard access"
          },
          "select-name": {
            description: "Ensures select element has an accessible name",
            help: "Select element must have an accessible name"
          },
          "server-side-image-map": {
            description: "Ensures that server-side image maps are not used",
            help: "Server-side image maps must not be used"
          },
          "skip-link": {
            description: "Ensure all skip links have a focusable target",
            help: "The skip-link target should exist and be focusable"
          },
          "svg-img-alt": {
            description: "Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",
            help: "<svg> elements with an img role must have an alternative text"
          },
          tabindex: {
            description: "Ensures tabindex attribute values are not greater than 0",
            help: "Elements should not have tabindex greater than zero"
          },
          "table-duplicate-name": {
            description: "Ensure the <caption> element does not contain the same text as the summary attribute",
            help: "tables should not have the same summary and caption"
          },
          "table-fake-caption": {
            description: "Ensure that tables with a caption use the <caption> element.",
            help: "Data or header cells must not be used to give caption to a data table."
          },
          "target-size": {
            description: "Ensure touch target have sufficient size and space",
            help: "All touch targets must be 24px large, or leave sufficient space"
          },
          "td-has-header": {
            description: "Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",
            help: "Non-empty <td> elements in larger <table> must have an associated table header"
          },
          "td-headers-attr": {
            description: "Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",
            help: "Table cells that use the headers attribute must only refer to cells in the same table"
          },
          "th-has-data-cells": {
            description: "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
            help: "Table headers in a data table must refer to data cells"
          },
          "valid-lang": {
            description: "Ensures lang attributes have valid values",
            help: "lang attribute must have a valid value"
          },
          "video-caption": {
            description: "Ensures <video> elements have captions",
            help: "<video> elements must have captions"
          }
        },
        checks: {
          abstractrole: {
            impact: "serious",
            messages: {
              pass: "Abstract roles are not used",
              fail: {
                singular: "Abstract role cannot be directly used: ${data.values}",
                plural: "Abstract roles cannot be directly used: ${data.values}"
              }
            }
          },
          "aria-allowed-attr": {
            impact: "critical",
            messages: {
              pass: "ARIA attributes are used correctly for the defined role",
              fail: {
                singular: "ARIA attribute is not allowed: ${data.values}",
                plural: "ARIA attributes are not allowed: ${data.values}"
              },
              incomplete: "Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"
            }
          },
          "aria-allowed-role": {
            impact: "minor",
            messages: {
              pass: "ARIA role is allowed for given element",
              fail: {
                singular: "ARIA role ${data.values} is not allowed for given element",
                plural: "ARIA roles ${data.values} are not allowed for given element"
              },
              incomplete: {
                singular: "ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",
                plural: "ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"
              }
            }
          },
          "aria-busy": {
            impact: "serious",
            messages: {
              pass: "Element has an aria-busy attribute",
              fail: 'Element uses aria-busy="true" while showing a loader'
            }
          },
          "aria-errormessage": {
            impact: "critical",
            messages: {
              pass: "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",
              fail: {
                singular: "aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",
                plural: "aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",
                hidden: "aria-errormessage value `${data.values}` cannot reference a hidden element"
              },
              incomplete: {
                singular: "ensure aria-errormessage value `${data.values}` references an existing element",
                plural: "ensure aria-errormessage values `${data.values}` reference existing elements",
                idrefs: "unable to determine if aria-errormessage element exists on the page: ${data.values}"
              }
            }
          },
          "aria-hidden-body": {
            impact: "critical",
            messages: {
              pass: "No aria-hidden attribute is present on document body",
              fail: "aria-hidden=true should not be present on the document body"
            }
          },
          "aria-level": {
            impact: "serious",
            messages: {
              pass: "aria-level values are valid",
              incomplete: "aria-level values greater than 6 are not supported in all screenreader and browser combinations"
            }
          },
          "aria-prohibited-attr": {
            impact: "serious",
            messages: {
              pass: "ARIA attribute is allowed",
              fail: {
                hasRolePlural: '${data.prohibited} attributes cannot be used with role "${data.role}".',
                hasRoleSingular: '${data.prohibited} attribute cannot be used with role "${data.role}".',
                noRolePlural: "${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",
                noRoleSingular: "${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."
              },
              incomplete: {
                hasRoleSingular: '${data.prohibited} attribute is not well supported with role "${data.role}".',
                hasRolePlural: '${data.prohibited} attributes are not well supported with role "${data.role}".',
                noRoleSingular: "${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",
                noRolePlural: "${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."
              }
            }
          },
          "aria-required-attr": {
            impact: "critical",
            messages: {
              pass: "All required ARIA attributes are present",
              fail: {
                singular: "Required ARIA attribute not present: ${data.values}",
                plural: "Required ARIA attributes not present: ${data.values}"
              }
            }
          },
          "aria-required-children": {
            impact: "critical",
            messages: {
              pass: "Required ARIA children are present",
              fail: {
                singular: "Required ARIA child role not present: ${data.values}",
                plural: "Required ARIA children role not present: ${data.values}",
                unallowed: "Element has children which are not allowed: ${data.values}"
              },
              incomplete: {
                singular: "Expecting ARIA child role to be added: ${data.values}",
                plural: "Expecting ARIA children role to be added: ${data.values}"
              }
            }
          },
          "aria-required-parent": {
            impact: "critical",
            messages: {
              pass: "Required ARIA parent role present",
              fail: {
                singular: "Required ARIA parent role not present: ${data.values}",
                plural: "Required ARIA parents role not present: ${data.values}"
              }
            }
          },
          "aria-roledescription": {
            impact: "serious",
            messages: {
              pass: "aria-roledescription used on a supported semantic role",
              incomplete: "Check that the aria-roledescription is announced by supported screen readers",
              fail: "Give the element a role that supports aria-roledescription"
            }
          },
          "aria-unsupported-attr": {
            impact: "critical",
            messages: {
              pass: "ARIA attribute is supported",
              fail: "ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"
            }
          },
          "aria-valid-attr-value": {
            impact: "critical",
            messages: {
              pass: "ARIA attribute values are valid",
              fail: {
                singular: "Invalid ARIA attribute value: ${data.values}",
                plural: "Invalid ARIA attribute values: ${data.values}"
              },
              incomplete: {
                noId: "ARIA attribute element ID does not exist on the page: ${data.needsReview}",
                noIdShadow: "ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",
                ariaCurrent: 'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',
                idrefs: "Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",
                empty: "ARIA attribute value is ignored while empty: ${data.needsReview}"
              }
            }
          },
          "aria-valid-attr": {
            impact: "critical",
            messages: {
              pass: "ARIA attribute name is valid",
              fail: {
                singular: "Invalid ARIA attribute name: ${data.values}",
                plural: "Invalid ARIA attribute names: ${data.values}"
              }
            }
          },
          deprecatedrole: {
            impact: "minor",
            messages: {
              pass: "ARIA role is not deprecated",
              fail: "The role used is deprecated: ${data}"
            }
          },
          fallbackrole: {
            impact: "serious",
            messages: {
              pass: "Only one role value used",
              fail: "Use only one role value, since fallback roles are not supported in older browsers",
              incomplete: "Use only role 'presentation' or 'none' since they are synonymous."
            }
          },
          "has-global-aria-attribute": {
            impact: "minor",
            messages: {
              pass: {
                singular: "Element has global ARIA attribute: ${data.values}",
                plural: "Element has global ARIA attributes: ${data.values}"
              },
              fail: "Element does not have global ARIA attribute"
            }
          },
          "has-widget-role": {
            impact: "minor",
            messages: {
              pass: "Element has a widget role.",
              fail: "Element does not have a widget role."
            }
          },
          invalidrole: {
            impact: "critical",
            messages: {
              pass: "ARIA role is valid",
              fail: {
                singular: "Role must be one of the valid ARIA roles: ${data.values}",
                plural: "Roles must be one of the valid ARIA roles: ${data.values}"
              }
            }
          },
          "is-element-focusable": {
            impact: "minor",
            messages: {
              pass: "Element is focusable.",
              fail: "Element is not focusable."
            }
          },
          "no-implicit-explicit-label": {
            impact: "moderate",
            messages: {
              pass: "There is no mismatch between a <label> and accessible name",
              incomplete: "Check that the <label> does not need be part of the ARIA ${data} field's name"
            }
          },
          unsupportedrole: {
            impact: "critical",
            messages: {
              pass: "ARIA role is supported",
              fail: "The role used is not widely supported in screen readers and assistive technologies: ${data}"
            }
          },
          "valid-scrollable-semantics": {
            impact: "minor",
            messages: {
              pass: "Element has valid semantics for an element in the focus order.",
              fail: "Element has invalid semantics for an element in the focus order."
            }
          },
          "color-contrast-enhanced": {
            impact: "serious",
            messages: {
              pass: "Element has sufficient color contrast of ${data.contrastRatio}",
              fail: {
                default: "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                fgOnShadowColor: "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                shadowOnBgColor: "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"
              },
              incomplete: {
                default: "Unable to determine contrast ratio",
                bgImage: "Element's background color could not be determined due to a background image",
                bgGradient: "Element's background color could not be determined due to a background gradient",
                imgNode: "Element's background color could not be determined because element contains an image node",
                bgOverlap: "Element's background color could not be determined because it is overlapped by another element",
                fgAlpha: "Element's foreground color could not be determined because of alpha transparency",
                elmPartiallyObscured: "Element's background color could not be determined because it's partially obscured by another element",
                elmPartiallyObscuring: "Element's background color could not be determined because it partially overlaps other elements",
                outsideViewport: "Element's background color could not be determined because it's outside the viewport",
                equalRatio: "Element has a 1:1 contrast ratio with the background",
                shortTextContent: "Element content is too short to determine if it is actual text content",
                nonBmp: "Element content contains only non-text characters",
                pseudoContent: "Element's background color could not be determined due to a pseudo element"
              }
            }
          },
          "color-contrast": {
            impact: "serious",
            messages: {
              pass: {
                default: "Element has sufficient color contrast of ${data.contrastRatio}",
                hidden: "Element is hidden"
              },
              fail: {
                default: "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                fgOnShadowColor: "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",
                shadowOnBgColor: "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"
              },
              incomplete: {
                default: "Unable to determine contrast ratio",
                bgImage: "Element's background color could not be determined due to a background image",
                bgGradient: "Element's background color could not be determined due to a background gradient",
                imgNode: "Element's background color could not be determined because element contains an image node",
                bgOverlap: "Element's background color could not be determined because it is overlapped by another element",
                fgAlpha: "Element's foreground color could not be determined because of alpha transparency",
                elmPartiallyObscured: "Element's background color could not be determined because it's partially obscured by another element",
                elmPartiallyObscuring: "Element's background color could not be determined because it partially overlaps other elements",
                outsideViewport: "Element's background color could not be determined because it's outside the viewport",
                equalRatio: "Element has a 1:1 contrast ratio with the background",
                shortTextContent: "Element content is too short to determine if it is actual text content",
                nonBmp: "Element content contains only non-text characters",
                pseudoContent: "Element's background color could not be determined due to a pseudo element"
              }
            }
          },
          "link-in-text-block-style": {
            impact: "serious",
            messages: {
              pass: "Links can be distinguished from surrounding text by visual styling",
              fail: "The link has no styling (such as underline) to distinguish it from the surrounding text"
            }
          },
          "link-in-text-block": {
            impact: "serious",
            messages: {
              pass: "Links can be distinguished from surrounding text in some way other than by color",
              fail: {
                fgContrast: "The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",
                bgContrast: "The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"
              },
              incomplete: {
                default: "Element's foreground contrast ratio could not be determined",
                bgContrast: "Element's background contrast ratio could not be determined",
                bgImage: "Element's contrast ratio could not be determined due to a background image",
                bgGradient: "Element's contrast ratio could not be determined due to a background gradient",
                imgNode: "Element's contrast ratio could not be determined because element contains an image node",
                bgOverlap: "Element's contrast ratio could not be determined because of element overlap"
              }
            }
          },
          "autocomplete-appropriate": {
            impact: "serious",
            messages: {
              pass: "the autocomplete value is on an appropriate element",
              fail: "the autocomplete value is inappropriate for this type of input"
            }
          },
          "autocomplete-valid": {
            impact: "serious",
            messages: {
              pass: "the autocomplete attribute is correctly formatted",
              fail: "the autocomplete attribute is incorrectly formatted"
            }
          },
          accesskeys: {
            impact: "serious",
            messages: {
              pass: "Accesskey attribute value is unique",
              fail: "Document has multiple elements with the same accesskey"
            }
          },
          "focusable-content": {
            impact: "serious",
            messages: {
              pass: "Element contains focusable elements",
              fail: "Element should have focusable content"
            }
          },
          "focusable-disabled": {
            impact: "serious",
            messages: {
              pass: "No focusable elements contained within element",
              incomplete: "Check if the focusable elements immediately move the focus indicator",
              fail: "Focusable content should be disabled or be removed from the DOM"
            }
          },
          "focusable-element": {
            impact: "serious",
            messages: {
              pass: "Element is focusable",
              fail: "Element should be focusable"
            }
          },
          "focusable-modal-open": {
            impact: "serious",
            messages: {
              pass: "No focusable elements while a modal is open",
              incomplete: "Check that focusable elements are not tabbable in the current state"
            }
          },
          "focusable-no-name": {
            impact: "serious",
            messages: {
              pass: "Element is not in tab order or has accessible text",
              fail: "Element is in tab order and does not have accessible text",
              incomplete: "Unable to determine if element has an accessible name"
            }
          },
          "focusable-not-tabbable": {
            impact: "serious",
            messages: {
              pass: "No focusable elements contained within element",
              incomplete: "Check if the focusable elements immediately move the focus indicator",
              fail: "Focusable content should have tabindex='-1' or be removed from the DOM"
            }
          },
          "frame-focusable-content": {
            impact: "serious",
            messages: {
              pass: "Element does not have focusable descendants",
              fail: "Element has focusable descendants",
              incomplete: "Could not determine if element has descendants"
            }
          },
          "landmark-is-top-level": {
            impact: "moderate",
            messages: {
              pass: "The ${data.role} landmark is at the top level.",
              fail: "The ${data.role} landmark is contained in another landmark."
            }
          },
          "no-focusable-content": {
            impact: "serious",
            messages: {
              pass: "Element does not have focusable descendants",
              fail: {
                default: "Element has focusable descendants",
                notHidden: "Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with 'aria-hidden=true')"
              },
              incomplete: "Could not determine if element has descendants"
            }
          },
          "page-has-heading-one": {
            impact: "moderate",
            messages: {
              pass: "Page has at least one level-one heading",
              fail: "Page must have a level-one heading"
            }
          },
          "page-has-main": {
            impact: "moderate",
            messages: {
              pass: "Document has at least one main landmark",
              fail: "Document does not have a main landmark"
            }
          },
          "page-no-duplicate-banner": {
            impact: "moderate",
            messages: {
              pass: "Document does not have more than one banner landmark",
              fail: "Document has more than one banner landmark"
            }
          },
          "page-no-duplicate-contentinfo": {
            impact: "moderate",
            messages: {
              pass: "Document does not have more than one contentinfo landmark",
              fail: "Document has more than one contentinfo landmark"
            }
          },
          "page-no-duplicate-main": {
            impact: "moderate",
            messages: {
              pass: "Document does not have more than one main landmark",
              fail: "Document has more than one main landmark"
            }
          },
          tabindex: {
            impact: "serious",
            messages: {
              pass: "Element does not have a tabindex greater than 0",
              fail: "Element has a tabindex greater than 0"
            }
          },
          "alt-space-value": {
            impact: "critical",
            messages: {
              pass: "Element has a valid alt attribute value",
              fail: "Element has an alt attribute containing only a space character, which is not ignored by all screen readers"
            }
          },
          "duplicate-img-label": {
            impact: "minor",
            messages: {
              pass: "Element does not duplicate existing text in <img> alt text",
              fail: "Element contains <img> element with alt text that duplicates existing text"
            }
          },
          "explicit-label": {
            impact: "critical",
            messages: {
              pass: "Form element has an explicit <label>",
              fail: "Form element does not have an explicit <label>",
              incomplete: "Unable to determine if form element has an explicit <label>"
            }
          },
          "help-same-as-label": {
            impact: "minor",
            messages: {
              pass: "Help text (title or aria-describedby) does not duplicate label text",
              fail: "Help text (title or aria-describedby) text is the same as the label text"
            }
          },
          "hidden-explicit-label": {
            impact: "critical",
            messages: {
              pass: "Form element has a visible explicit <label>",
              fail: "Form element has explicit <label> that is hidden",
              incomplete: "Unable to determine if form element has explicit <label> that is hidden"
            }
          },
          "implicit-label": {
            impact: "critical",
            messages: {
              pass: "Form element has an implicit (wrapped) <label>",
              fail: "Form element does not have an implicit (wrapped) <label>",
              incomplete: "Unable to determine if form element has an implicit (wrapped} <label>"
            }
          },
          "label-content-name-mismatch": {
            impact: "serious",
            messages: {
              pass: "Element contains visible text as part of it's accessible name",
              fail: "Text inside the element is not included in the accessible name"
            }
          },
          "multiple-label": {
            impact: "moderate",
            messages: {
              pass: "Form field does not have multiple label elements",
              incomplete: "Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."
            }
          },
          "title-only": {
            impact: "serious",
            messages: {
              pass: "Form element does not solely use title attribute for its label",
              fail: "Only title used to generate label for form element"
            }
          },
          "landmark-is-unique": {
            impact: "moderate",
            messages: {
              pass: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
              fail: "The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"
            }
          },
          "has-lang": {
            impact: "serious",
            messages: {
              pass: "The <html> element has a lang attribute",
              fail: {
                noXHTML: "The xml:lang attribute is not valid on HTML pages, use the lang attribute.",
                noLang: "The <html> element does not have a lang attribute"
              }
            }
          },
          "valid-lang": {
            impact: "serious",
            messages: {
              pass: "Value of lang attribute is included in the list of valid languages",
              fail: "Value of lang attribute not included in the list of valid languages"
            }
          },
          "xml-lang-mismatch": {
            impact: "moderate",
            messages: {
              pass: "Lang and xml:lang attributes have the same base language",
              fail: "Lang and xml:lang attributes do not have the same base language"
            }
          },
          dlitem: {
            impact: "serious",
            messages: {
              pass: "Description list item has a <dl> parent element",
              fail: "Description list item does not have a <dl> parent element"
            }
          },
          listitem: {
            impact: "serious",
            messages: {
              pass: 'List item has a <ul>, <ol> or role="list" parent element',
              fail: {
                default: "List item does not have a <ul>, <ol> parent element",
                roleNotValid: 'List item does not have a <ul>, <ol> parent element without a role, or a role="list"'
              }
            }
          },
          "only-dlitems": {
            impact: "serious",
            messages: {
              pass: "dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",
              fail: "dl element has direct children that are not allowed: ${data.values}"
            }
          },
          "only-listitems": {
            impact: "serious",
            messages: {
              pass: "List element only has direct children that are allowed inside <li> elements",
              fail: "List element has direct children that are not allowed: ${data.values}"
            }
          },
          "structured-dlitems": {
            impact: "serious",
            messages: {
              pass: "When not empty, element has both <dt> and <dd> elements",
              fail: "When not empty, element does not have at least one <dt> element followed by at least one <dd> element"
            }
          },
          caption: {
            impact: "critical",
            messages: {
              pass: "The multimedia element has a captions track",
              incomplete: "Check that captions is available for the element"
            }
          },
          "frame-tested": {
            impact: "critical",
            messages: {
              pass: "The iframe was tested with axe-core",
              fail: "The iframe could not be tested with axe-core",
              incomplete: "The iframe still has to be tested with axe-core"
            }
          },
          "no-autoplay-audio": {
            impact: "moderate",
            messages: {
              pass: "<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",
              fail: "<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",
              incomplete: "Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"
            }
          },
          "css-orientation-lock": {
            impact: "serious",
            messages: {
              pass: "Display is operable, and orientation lock does not exist",
              fail: "CSS Orientation lock is applied, and makes display inoperable",
              incomplete: "CSS Orientation lock cannot be determined"
            }
          },
          "meta-viewport-large": {
            impact: "minor",
            messages: {
              pass: "<meta> tag does not prevent significant zooming on mobile devices",
              fail: "<meta> tag limits zooming on mobile devices"
            }
          },
          "meta-viewport": {
            impact: "critical",
            messages: {
              pass: "<meta> tag does not disable zooming on mobile devices",
              fail: "${data} on <meta> tag disables zooming on mobile devices"
            }
          },
          "target-offset": {
            impact: "serious",
            messages: {
              pass: "Target has sufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)",
              fail: "Target has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)",
              incomplete: {
                default: "Element with negative tabindex has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px). Is this a target?",
                nonTabbableNeighbor: "Target has insufficient offset from a neighbor with negative tabindex (${data.closestOffset}px should be at least ${data.minOffset}px). Is the neighbor a target?"
              }
            }
          },
          "target-size": {
            impact: "serious",
            messages: {
              pass: {
                default: "Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",
                obscured: "Control is ignored because it is fully obscured and thus not clickable"
              },
              fail: {
                default: "Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",
                partiallyObscured: "Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"
              },
              incomplete: {
                default: "Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",
                contentOverflow: "Element size could not be accurately determined due to overflow content",
                partiallyObscured: "Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",
                partiallyObscuredNonTabbable: "Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?"
              }
            }
          },
          "header-present": {
            impact: "serious",
            messages: {
              pass: "Page has a heading",
              fail: "Page does not have a heading"
            }
          },
          "heading-order": {
            impact: "moderate",
            messages: {
              pass: "Heading order valid",
              fail: "Heading order invalid",
              incomplete: "Unable to determine previous heading"
            }
          },
          "identical-links-same-purpose": {
            impact: "minor",
            messages: {
              pass: "There are no other links with the same name, that go to a different URL",
              incomplete: "Check that links have the same purpose, or are intentionally ambiguous."
            }
          },
          "internal-link-present": {
            impact: "serious",
            messages: {
              pass: "Valid skip link found",
              fail: "No valid skip link found"
            }
          },
          landmark: {
            impact: "serious",
            messages: {
              pass: "Page has a landmark region",
              fail: "Page does not have a landmark region"
            }
          },
          "meta-refresh-no-exceptions": {
            impact: "minor",
            messages: {
              pass: "<meta> tag does not immediately refresh the page",
              fail: "<meta> tag forces timed refresh of page"
            }
          },
          "meta-refresh": {
            impact: "critical",
            messages: {
              pass: "<meta> tag does not immediately refresh the page",
              fail: "<meta> tag forces timed refresh of page (less than 20 hours)"
            }
          },
          "p-as-heading": {
            impact: "serious",
            messages: {
              pass: "<p> elements are not styled as headings",
              fail: "Heading elements should be used instead of styled <p> elements",
              incomplete: "Unable to determine if <p> elements are styled as headings"
            }
          },
          region: {
            impact: "moderate",
            messages: {
              pass: "All page content is contained by landmarks",
              fail: "Some page content is not contained by landmarks"
            }
          },
          "skip-link": {
            impact: "moderate",
            messages: {
              pass: "Skip link target exists",
              incomplete: "Skip link target should become visible on activation",
              fail: "No skip link target"
            }
          },
          "unique-frame-title": {
            impact: "serious",
            messages: {
              pass: "Element's title attribute is unique",
              fail: "Element's title attribute is not unique"
            }
          },
          "duplicate-id-active": {
            impact: "serious",
            messages: {
              pass: "Document has no active elements that share the same id attribute",
              fail: "Document has active elements with the same id attribute: ${data}"
            }
          },
          "duplicate-id-aria": {
            impact: "critical",
            messages: {
              pass: "Document has no elements referenced with ARIA or labels that share the same id attribute",
              fail: "Document has multiple elements referenced with ARIA with the same id attribute: ${data}"
            }
          },
          "duplicate-id": {
            impact: "minor",
            messages: {
              pass: "Document has no static elements that share the same id attribute",
              fail: "Document has multiple static elements with the same id attribute: ${data}"
            }
          },
          "aria-label": {
            impact: "serious",
            messages: {
              pass: "aria-label attribute exists and is not empty",
              fail: "aria-label attribute does not exist or is empty"
            }
          },
          "aria-labelledby": {
            impact: "serious",
            messages: {
              pass: "aria-labelledby attribute exists and references elements that are visible to screen readers",
              fail: "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
              incomplete: "ensure aria-labelledby references an existing element"
            }
          },
          "avoid-inline-spacing": {
            impact: "serious",
            messages: {
              pass: "No inline styles with '!important' that affect text spacing has been specified",
              fail: {
                singular: "Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",
                plural: "Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"
              }
            }
          },
          "button-has-visible-text": {
            impact: "critical",
            messages: {
              pass: "Element has inner text that is visible to screen readers",
              fail: "Element does not have inner text that is visible to screen readers",
              incomplete: "Unable to determine if element has children"
            }
          },
          "doc-has-title": {
            impact: "serious",
            messages: {
              pass: "Document has a non-empty <title> element",
              fail: "Document does not have a non-empty <title> element"
            }
          },
          exists: {
            impact: "minor",
            messages: {
              pass: "Element does not exist",
              incomplete: "Element exists"
            }
          },
          "has-alt": {
            impact: "critical",
            messages: {
              pass: "Element has an alt attribute",
              fail: "Element does not have an alt attribute"
            }
          },
          "has-visible-text": {
            impact: "minor",
            messages: {
              pass: "Element has text that is visible to screen readers",
              fail: "Element does not have text that is visible to screen readers",
              incomplete: "Unable to determine if element has children"
            }
          },
          "important-letter-spacing": {
            impact: "serious",
            messages: {
              pass: "Letter-spacing in the style attribute is not set to !important, or meets the minimum",
              fail: "letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"
            }
          },
          "important-line-height": {
            impact: "serious",
            messages: {
              pass: "line-height in the style attribute is not set to !important, or meets the minimum",
              fail: "line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"
            }
          },
          "important-word-spacing": {
            impact: "serious",
            messages: {
              pass: "word-spacing in the style attribute is not set to !important, or meets the minimum",
              fail: "word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"
            }
          },
          "is-on-screen": {
            impact: "serious",
            messages: {
              pass: "Element is not visible",
              fail: "Element is visible"
            }
          },
          "non-empty-alt": {
            impact: "critical",
            messages: {
              pass: "Element has a non-empty alt attribute",
              fail: {
                noAttr: "Element has no alt attribute",
                emptyAttr: "Element has an empty alt attribute"
              }
            }
          },
          "non-empty-if-present": {
            impact: "critical",
            messages: {
              pass: {
                default: "Element does not have a value attribute",
                "has-label": "Element has a non-empty value attribute"
              },
              fail: "Element has a value attribute and the value attribute is empty"
            }
          },
          "non-empty-placeholder": {
            impact: "serious",
            messages: {
              pass: "Element has a placeholder attribute",
              fail: {
                noAttr: "Element has no placeholder attribute",
                emptyAttr: "Element has an empty placeholder attribute"
              }
            }
          },
          "non-empty-title": {
            impact: "serious",
            messages: {
              pass: "Element has a title attribute",
              fail: {
                noAttr: "Element has no title attribute",
                emptyAttr: "Element has an empty title attribute"
              }
            }
          },
          "non-empty-value": {
            impact: "critical",
            messages: {
              pass: "Element has a non-empty value attribute",
              fail: {
                noAttr: "Element has no value attribute",
                emptyAttr: "Element has an empty value attribute"
              }
            }
          },
          "presentational-role": {
            impact: "minor",
            messages: {
              pass: 'Element\'s default semantics were overriden with role="${data.role}"',
              fail: {
                default: `Element's default semantics were not overridden with role="none" or role="presentation"`,
                globalAria: "Element's role is not presentational because it has a global ARIA attribute",
                focusable: "Element's role is not presentational because it is focusable",
                both: "Element's role is not presentational because it has a global ARIA attribute and is focusable",
                iframe: 'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'
              }
            }
          },
          "role-none": {
            impact: "minor",
            messages: {
              pass: `Element's default semantics were overriden with role="none"`,
              fail: `Element's default semantics were not overridden with role="none"`
            }
          },
          "role-presentation": {
            impact: "minor",
            messages: {
              pass: `Element's default semantics were overriden with role="presentation"`,
              fail: `Element's default semantics were not overridden with role="presentation"`
            }
          },
          "svg-non-empty-title": {
            impact: "serious",
            messages: {
              pass: "Element has a child that is a title",
              fail: {
                noTitle: "Element has no child that is a title",
                emptyTitle: "Element child title is empty"
              },
              incomplete: "Unable to determine element has a child that is a title"
            }
          },
          "caption-faked": {
            impact: "serious",
            messages: {
              pass: "The first row of a table is not used as a caption",
              fail: "The first child of the table should be a caption instead of a table cell"
            }
          },
          "html5-scope": {
            impact: "moderate",
            messages: {
              pass: "Scope attribute is only used on table header elements (<th>)",
              fail: "In HTML 5, scope attributes may only be used on table header elements (<th>)"
            }
          },
          "same-caption-summary": {
            impact: "minor",
            messages: {
              pass: "Content of summary attribute and <caption> are not duplicated",
              fail: "Content of summary attribute and <caption> element are identical",
              incomplete: "Unable to determine if <table> element has a caption"
            }
          },
          "scope-value": {
            impact: "critical",
            messages: {
              pass: "Scope attribute is used correctly",
              fail: "The value of the scope attribute may only be 'row' or 'col'"
            }
          },
          "td-has-header": {
            impact: "critical",
            messages: {
              pass: "All non-empty data cells have table headers",
              fail: "Some non-empty data cells do not have table headers"
            }
          },
          "td-headers-attr": {
            impact: "serious",
            messages: {
              pass: "The headers attribute is exclusively used to refer to other cells in the table",
              incomplete: "The headers attribute is empty",
              fail: "The headers attribute is not exclusively used to refer to other cells in the table"
            }
          },
          "th-has-data-cells": {
            impact: "serious",
            messages: {
              pass: "All table header cells refer to data cells",
              fail: "Not all table header cells refer to data cells",
              incomplete: "Table data cells are missing or empty"
            }
          },
          "hidden-content": {
            impact: "minor",
            messages: {
              pass: "All content on the page has been analyzed.",
              fail: "There were problems analyzing the content on this page.",
              incomplete: "There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."
            }
          }
        },
        failureSummaries: {
          any: {
            failureMessage: /* @__PURE__ */ i(function(S) {
              var q = "Fix any of the following:", W = S;
              if (W)
                for (var me, De = -1, at = W.length - 1; De < at; )
                  me = W[De += 1], q += `
  ` + me.split(`
`).join(`
  `);
              return q;
            }, "anonymous")
          },
          none: {
            failureMessage: /* @__PURE__ */ i(function(S) {
              var q = "Fix all of the following:", W = S;
              if (W)
                for (var me, De = -1, at = W.length - 1; De < at; )
                  me = W[De += 1], q += `
  ` + me.split(`
`).join(`
  `);
              return q;
            }, "anonymous")
          }
        },
        incompleteFallbackMessage: "axe couldn't tell the reason. Time to break out the element inspector!"
      },
      rules: [{
        id: "accesskeys",
        selector: "[accesskey]",
        excludeHidden: !1,
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: [],
        none: ["accesskeys"]
      }, {
        id: "area-alt",
        selector: "map area[href]",
        excludeHidden: !1,
        tags: ["cat.text-alternatives", "wcag2a", "wcag244", "wcag412", "section508", "section508.22.a", "ACT", "TTv5", "TT6.a"],
        actIds: ["c487ae"],
        all: [],
        any: [{
          options: {
            attribute: "alt"
          },
          id: "non-empty-alt"
        }, "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-allowed-attr",
        matches: "aria-allowed-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        actIds: ["5c01ea"],
        all: [],
        any: [{
          options: {
            validTreeRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
          },
          id: "aria-allowed-attr"
        }],
        none: ["aria-unsupported-attr", {
          options: {
            elementsAllowedAriaLabel: ["applet", "input"]
          },
          id: "aria-prohibited-attr"
        }]
      }, {
        id: "aria-allowed-role",
        excludeHidden: !1,
        selector: "[role]",
        matches: "aria-allowed-role-matches",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: [{
          options: {
            allowImplicit: !0,
            ignoredTags: []
          },
          id: "aria-allowed-role"
        }],
        none: []
      }, {
        id: "aria-command-name",
        selector: '[role="link"], [role="button"], [role="menuitem"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "ACT", "TTv5", "TT6.a"],
        actIds: ["97a4e1"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-dialog-name",
        selector: '[role="dialog"], [role="alertdialog"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-hidden-body",
        selector: "body",
        excludeHidden: !1,
        matches: "is-initiator-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        all: [],
        any: ["aria-hidden-body"],
        none: []
      }, {
        id: "aria-hidden-focus",
        selector: '[aria-hidden="true"]',
        matches: "aria-hidden-focus-matches",
        excludeHidden: !1,
        tags: ["cat.name-role-value", "wcag2a", "wcag412"],
        actIds: ["6cfa84"],
        all: ["focusable-modal-open", "focusable-disabled", "focusable-not-tabbable"],
        any: [],
        none: []
      }, {
        id: "aria-input-field-name",
        selector: '[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "ACT", "TTv5", "TT5.c"],
        actIds: ["e086e5"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: ["no-implicit-explicit-label"]
      }, {
        id: "aria-meter-name",
        selector: '[role="meter"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag111"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-progressbar-name",
        selector: '[role="progressbar"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag111"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-required-attr",
        selector: "[role]",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        actIds: ["4e8ab6"],
        all: [],
        any: ["aria-required-attr"],
        none: []
      }, {
        id: "aria-required-children",
        selector: "[role]",
        matches: "aria-required-children-matches",
        tags: ["cat.aria", "wcag2a", "wcag131"],
        actIds: ["bc4a75", "ff89c9"],
        all: [],
        any: [{
          options: {
            reviewEmpty: ["doc-bibliography", "doc-endnotes", "grid", "list", "listbox", "menu", "menubar", "table", "tablist", "tree", "treegrid", "rowgroup"]
          },
          id: "aria-required-children"
        }, "aria-busy"],
        none: []
      }, {
        id: "aria-required-parent",
        selector: "[role]",
        matches: "aria-required-parent-matches",
        tags: ["cat.aria", "wcag2a", "wcag131"],
        actIds: ["ff89c9"],
        all: [],
        any: [{
          options: {
            ownGroupRoles: ["listitem", "treeitem"]
          },
          id: "aria-required-parent"
        }],
        none: []
      }, {
        id: "aria-roledescription",
        selector: "[aria-roledescription]",
        tags: ["cat.aria", "wcag2a", "wcag412", "deprecated"],
        enabled: !1,
        all: [],
        any: [{
          options: {
            supportedRoles: ["button", "img", "checkbox", "radio", "combobox", "menuitemcheckbox", "menuitemradio"]
          },
          id: "aria-roledescription"
        }],
        none: []
      }, {
        id: "aria-roles",
        selector: "[role]",
        matches: "no-empty-role-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        actIds: ["674b10"],
        all: [],
        any: [],
        none: ["invalidrole", "abstractrole", "unsupportedrole", "deprecatedrole"]
      }, {
        id: "aria-text",
        selector: "[role=text]",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["no-focusable-content"],
        none: []
      }, {
        id: "aria-toggle-field-name",
        selector: '[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "ACT", "TTv5", "TT5.c"],
        actIds: ["e086e5"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: ["no-implicit-explicit-label"]
      }, {
        id: "aria-tooltip-name",
        selector: '[role="tooltip"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-treeitem-name",
        selector: '[role="treeitem"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-valid-attr-value",
        matches: "aria-has-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        actIds: ["6a7281"],
        all: [{
          options: [],
          id: "aria-valid-attr-value"
        }, "aria-errormessage", "aria-level"],
        any: [],
        none: []
      }, {
        id: "aria-valid-attr",
        matches: "aria-has-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412"],
        actIds: ["5f99a7"],
        all: [],
        any: [{
          options: [],
          id: "aria-valid-attr"
        }],
        none: []
      }, {
        id: "audio-caption",
        selector: "audio",
        enabled: !1,
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag121", "section508", "section508.22.a", "deprecated"],
        actIds: ["2eb176", "afb423"],
        all: [],
        any: [],
        none: ["caption"]
      }, {
        id: "autocomplete-valid",
        matches: "autocomplete-matches",
        tags: ["cat.forms", "wcag21aa", "wcag135", "ACT"],
        actIds: ["73f2c2"],
        all: [{
          options: {
            stateTerms: ["none", "false", "true", "disabled", "enabled", "undefined", "null"]
          },
          id: "autocomplete-valid"
        }],
        any: [],
        none: []
      }, {
        id: "avoid-inline-spacing",
        selector: "[style]",
        matches: "is-visible-on-screen-matches",
        tags: ["cat.structure", "wcag21aa", "wcag1412", "ACT"],
        actIds: ["24afc2", "9e45ec", "78fd32"],
        all: [{
          options: {
            cssProperty: "letter-spacing",
            minValue: 0.12
          },
          id: "important-letter-spacing"
        }, {
          options: {
            cssProperty: "word-spacing",
            minValue: 0.16
          },
          id: "important-word-spacing"
        }, {
          options: {
            multiLineOnly: !0,
            cssProperty: "line-height",
            minValue: 1.5,
            normalValue: 1
          },
          id: "important-line-height"
        }],
        any: [],
        none: []
      }, {
        id: "blink",
        selector: "blink",
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag222", "section508", "section508.22.j", "TTv5", "TT2.b"],
        all: [],
        any: [],
        none: ["is-on-screen"]
      }, {
        id: "button-name",
        selector: "button",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "ACT", "TTv5", "TT6.a"],
        actIds: ["97a4e1", "m6b1q3"],
        all: [],
        any: ["button-has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: []
      }, {
        id: "bypass",
        selector: "html",
        pageLevel: !0,
        matches: "bypass-matches",
        reviewOnFail: !0,
        tags: ["cat.keyboard", "wcag2a", "wcag241", "section508", "section508.22.o", "TTv5", "TT9.a"],
        actIds: ["cf77f2", "047fe0", "b40fd1", "3e12e1", "ye5d6e"],
        all: [],
        any: ["internal-link-present", {
          options: {
            selector: ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"
          },
          id: "header-present"
        }, {
          options: {
            selector: "main, [role=main]"
          },
          id: "landmark"
        }],
        none: []
      }, {
        id: "color-contrast-enhanced",
        matches: "color-contrast-matches",
        excludeHidden: !1,
        enabled: !1,
        tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
        actIds: ["09o5cg"],
        all: [],
        any: [{
          options: {
            ignoreUnicode: !0,
            ignoreLength: !1,
            ignorePseudo: !1,
            boldValue: 700,
            boldTextPt: 14,
            largeTextPt: 18,
            contrastRatio: {
              normal: {
                expected: 7,
                minThreshold: 4.5
              },
              large: {
                expected: 4.5,
                minThreshold: 3
              }
            },
            pseudoSizeThreshold: 0.25,
            shadowOutlineEmMax: 0.1,
            textStrokeEmMin: 0.03
          },
          id: "color-contrast-enhanced"
        }],
        none: []
      }, {
        id: "color-contrast",
        matches: "color-contrast-matches",
        excludeHidden: !1,
        tags: ["cat.color", "wcag2aa", "wcag143", "ACT", "TTv5", "TT13.c"],
        actIds: ["afw4f7", "09o5cg"],
        all: [],
        any: [{
          options: {
            ignoreUnicode: !0,
            ignoreLength: !1,
            ignorePseudo: !1,
            boldValue: 700,
            boldTextPt: 14,
            largeTextPt: 18,
            contrastRatio: {
              normal: {
                expected: 4.5
              },
              large: {
                expected: 3
              }
            },
            pseudoSizeThreshold: 0.25,
            shadowOutlineEmMax: 0.2,
            textStrokeEmMin: 0.03
          },
          id: "color-contrast"
        }],
        none: []
      }, {
        id: "css-orientation-lock",
        selector: "html",
        tags: ["cat.structure", "wcag134", "wcag21aa", "experimental"],
        actIds: ["b33eff"],
        all: [{
          options: {
            degreeThreshold: 2
          },
          id: "css-orientation-lock"
        }],
        any: [],
        none: [],
        preload: !0
      }, {
        id: "definition-list",
        selector: "dl",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131"],
        all: [],
        any: [],
        none: ["structured-dlitems", {
          options: {
            validRoles: ["definition", "term", "listitem"],
            validNodeNames: ["dt", "dd"],
            divGroups: !0
          },
          id: "only-dlitems"
        }]
      }, {
        id: "dlitem",
        selector: "dd, dt",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131"],
        all: [],
        any: ["dlitem"],
        none: []
      }, {
        id: "document-title",
        selector: "html",
        matches: "is-initiator-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT", "TTv5", "TT12.a"],
        actIds: ["2779a5"],
        all: [],
        any: ["doc-has-title"],
        none: []
      }, {
        id: "duplicate-id-active",
        selector: "[id]",
        matches: "duplicate-id-active-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag411"],
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id-active"],
        none: []
      }, {
        id: "duplicate-id-aria",
        selector: "[id]",
        matches: "duplicate-id-aria-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag411"],
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id-aria"],
        none: []
      }, {
        id: "duplicate-id",
        selector: "[id]",
        matches: "duplicate-id-misc-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag411"],
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id"],
        none: []
      }, {
        id: "empty-heading",
        selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
        matches: "heading-matches",
        tags: ["cat.name-role-value", "best-practice"],
        actIds: ["ffd0e9"],
        impact: "minor",
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "empty-table-header",
        selector: 'th:not([role]), [role="rowheader"], [role="columnheader"]',
        tags: ["cat.name-role-value", "best-practice"],
        all: [],
        any: ["has-visible-text"],
        none: []
      }, {
        id: "focus-order-semantics",
        selector: "div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",
        matches: "inserted-into-focus-order-matches",
        tags: ["cat.keyboard", "best-practice", "experimental"],
        all: [],
        any: [{
          options: [],
          id: "has-widget-role"
        }, {
          options: {
            roles: ["tooltip"]
          },
          id: "valid-scrollable-semantics"
        }],
        none: []
      }, {
        id: "form-field-multiple-labels",
        selector: "input, select, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "wcag2a", "wcag332", "TTv5", "TT5.c"],
        all: [],
        any: [],
        none: ["multiple-label"]
      }, {
        id: "frame-focusable-content",
        selector: "html",
        matches: "frame-focusable-content-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211", "TTv5", "TT4.a"],
        actIds: ["akn7bn"],
        all: [],
        any: ["frame-focusable-content"],
        none: []
      }, {
        id: "frame-tested",
        selector: "html, frame, iframe",
        tags: ["cat.structure", "review-item", "best-practice"],
        all: [{
          options: {
            isViolation: !1
          },
          id: "frame-tested"
        }],
        any: [],
        none: []
      }, {
        id: "frame-title-unique",
        selector: "frame[title], iframe[title]",
        matches: "frame-title-has-text-matches",
        tags: ["cat.text-alternatives", "wcag412", "wcag2a", "TTv5", "TT12.c"],
        actIds: ["4b1c6c"],
        all: [],
        any: [],
        none: ["unique-frame-title"],
        reviewOnFail: !0
      }, {
        id: "frame-title",
        selector: "frame, iframe",
        matches: "no-negative-tabindex-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag412", "section508", "section508.22.i", "TTv5", "TT12.c"],
        actIds: ["cae760"],
        all: [],
        any: [{
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "aria-label", "aria-labelledby", "presentational-role"],
        none: []
      }, {
        id: "heading-order",
        selector: "h1, h2, h3, h4, h5, h6, [role=heading]",
        matches: "heading-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["heading-order"],
        none: []
      }, {
        id: "hidden-content",
        selector: "*",
        excludeHidden: !1,
        tags: ["cat.structure", "experimental", "review-item", "best-practice"],
        all: [],
        any: ["hidden-content"],
        none: []
      }, {
        id: "html-has-lang",
        selector: "html",
        matches: "is-initiator-matches",
        tags: ["cat.language", "wcag2a", "wcag311", "ACT", "TTv5", "TT11.a"],
        actIds: ["b5c3f8"],
        all: [],
        any: [{
          options: {
            attributes: ["lang", "xml:lang"]
          },
          id: "has-lang"
        }],
        none: []
      }, {
        id: "html-lang-valid",
        selector: 'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',
        tags: ["cat.language", "wcag2a", "wcag311", "ACT", "TTv5", "TT11.a"],
        actIds: ["bf051a"],
        all: [],
        any: [],
        none: [{
          options: {
            attributes: ["lang", "xml:lang"]
          },
          id: "valid-lang"
        }]
      }, {
        id: "html-xml-lang-mismatch",
        selector: "html[lang][xml\\:lang]",
        matches: "xml-lang-mismatch-matches",
        tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
        actIds: ["5b7ae0"],
        all: ["xml-lang-mismatch"],
        any: [],
        none: []
      }, {
        id: "identical-links-same-purpose",
        selector: 'a[href], area[href], [role="link"]',
        excludeHidden: !1,
        enabled: !1,
        matches: "identical-links-same-purpose-matches",
        tags: ["cat.semantics", "wcag2aaa", "wcag249"],
        actIds: ["b20e66"],
        all: ["identical-links-same-purpose"],
        any: [],
        none: []
      }, {
        id: "image-alt",
        selector: "img",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT", "TTv5", "TT7.a", "TT7.b"],
        actIds: ["23a2a8"],
        all: [],
        any: ["has-alt", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: ["alt-space-value"]
      }, {
        id: "image-redundant-alt",
        selector: "img",
        tags: ["cat.text-alternatives", "best-practice"],
        all: [],
        any: [],
        none: [{
          options: {
            parentSelector: "button, [role=button], a[href], p, li, td, th"
          },
          id: "duplicate-img-label"
        }]
      }, {
        id: "input-button-name",
        selector: 'input[type="button"], input[type="submit"], input[type="reset"]',
        matches: "no-explicit-name-required-matches",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "ACT", "TTv5", "TT5.c"],
        actIds: ["97a4e1"],
        all: [],
        any: ["non-empty-if-present", {
          options: {
            attribute: "value"
          },
          id: "non-empty-value"
        }, "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: []
      }, {
        id: "input-image-alt",
        selector: 'input[type="image"]',
        matches: "no-explicit-name-required-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "wcag412", "section508", "section508.22.a", "ACT", "TTv5", "TT7.a"],
        actIds: ["59796f"],
        all: [],
        any: [{
          options: {
            attribute: "alt"
          },
          id: "non-empty-alt"
        }, "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "label-content-name-mismatch",
        matches: "label-content-name-mismatch-matches",
        tags: ["cat.semantics", "wcag21a", "wcag253", "experimental"],
        actIds: ["2ee8b8"],
        all: [],
        any: [{
          options: {
            pixelThreshold: 0.1,
            occurrenceThreshold: 3
          },
          id: "label-content-name-mismatch"
        }],
        none: []
      }, {
        id: "label-title-only",
        selector: "input, select, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "best-practice"],
        all: [],
        any: [],
        none: ["title-only"]
      }, {
        id: "label",
        selector: "input, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "ACT", "TTv5", "TT5.c"],
        actIds: ["e086e5"],
        all: [],
        any: ["implicit-label", "explicit-label", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, {
          options: {
            attribute: "placeholder"
          },
          id: "non-empty-placeholder"
        }, "presentational-role"],
        none: ["help-same-as-label", "hidden-explicit-label"]
      }, {
        id: "landmark-banner-is-top-level",
        selector: "header:not([role]), [role=banner]",
        matches: "landmark-has-body-context-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-complementary-is-top-level",
        selector: "aside:not([role]), [role=complementary]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-contentinfo-is-top-level",
        selector: "footer:not([role]), [role=contentinfo]",
        matches: "landmark-has-body-context-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-main-is-top-level",
        selector: "main:not([role]), [role=main]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-no-duplicate-banner",
        selector: "header:not([role]), [role=banner]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "header:not([role]), [role=banner]",
            nativeScopeFilter: "article, aside, main, nav, section"
          },
          id: "page-no-duplicate-banner"
        }],
        none: []
      }, {
        id: "landmark-no-duplicate-contentinfo",
        selector: "footer:not([role]), [role=contentinfo]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "footer:not([role]), [role=contentinfo]",
            nativeScopeFilter: "article, aside, main, nav, section"
          },
          id: "page-no-duplicate-contentinfo"
        }],
        none: []
      }, {
        id: "landmark-no-duplicate-main",
        selector: "main:not([role]), [role=main]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "main:not([role]), [role='main']"
          },
          id: "page-no-duplicate-main"
        }],
        none: []
      }, {
        id: "landmark-one-main",
        selector: "html",
        tags: ["cat.semantics", "best-practice"],
        all: [{
          options: {
            selector: "main:not([role]), [role='main']",
            passForModal: !0
          },
          id: "page-has-main"
        }],
        any: [],
        none: []
      }, {
        id: "landmark-unique",
        selector: "[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",
        tags: ["cat.semantics", "best-practice"],
        matches: "landmark-unique-matches",
        all: [],
        any: ["landmark-is-unique"],
        none: []
      }, {
        id: "link-in-text-block",
        selector: "a[href], [role=link]",
        matches: "link-in-text-block-matches",
        excludeHidden: !1,
        tags: ["cat.color", "wcag2a", "wcag141", "TTv5", "TT13.a"],
        all: [],
        any: [{
          options: {
            requiredContrastRatio: 3,
            allowSameColor: !0
          },
          id: "link-in-text-block"
        }, "link-in-text-block-style"],
        none: []
      }, {
        id: "link-name",
        selector: "a[href]",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "wcag244", "section508", "section508.22.a", "ACT", "TTv5", "TT6.a"],
        actIds: ["c487ae"],
        all: [],
        any: ["has-visible-text", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: ["focusable-no-name"]
      }, {
        id: "list",
        selector: "ul, ol",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131"],
        all: [],
        any: [],
        none: [{
          options: {
            validRoles: ["listitem"],
            validNodeNames: ["li"]
          },
          id: "only-listitems"
        }]
      }, {
        id: "listitem",
        selector: "li",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131"],
        all: [],
        any: ["listitem"],
        none: []
      }, {
        id: "marquee",
        selector: "marquee",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag222", "TTv5", "TT2.b"],
        all: [],
        any: [],
        none: ["is-on-screen"]
      }, {
        id: "meta-refresh-no-exceptions",
        selector: 'meta[http-equiv="refresh"][content]',
        excludeHidden: !1,
        enabled: !1,
        tags: ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"],
        actIds: ["bisz58"],
        all: [],
        any: [{
          options: {
            minDelay: 72e3,
            maxDelay: !1
          },
          id: "meta-refresh-no-exceptions"
        }],
        none: []
      }, {
        id: "meta-refresh",
        selector: 'meta[http-equiv="refresh"][content]',
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag221", "TTv5", "TT2.c"],
        actIds: ["bc659a", "bisz58"],
        all: [],
        any: [{
          options: {
            minDelay: 0,
            maxDelay: 72e3
          },
          id: "meta-refresh"
        }],
        none: []
      }, {
        id: "meta-viewport-large",
        selector: 'meta[name="viewport"]',
        matches: "is-initiator-matches",
        excludeHidden: !1,
        tags: ["cat.sensory-and-visual-cues", "best-practice"],
        all: [],
        any: [{
          options: {
            scaleMinimum: 5,
            lowerBound: 2
          },
          id: "meta-viewport-large"
        }],
        none: []
      }, {
        id: "meta-viewport",
        selector: 'meta[name="viewport"]',
        matches: "is-initiator-matches",
        excludeHidden: !1,
        tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "ACT"],
        actIds: ["b4f0c3"],
        all: [],
        any: [{
          options: {
            scaleMinimum: 2
          },
          id: "meta-viewport"
        }],
        none: []
      }, {
        id: "nested-interactive",
        matches: "nested-interactive-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag412", "TTv5", "TT4.a"],
        actIds: ["307n5z"],
        all: [],
        any: ["no-focusable-content"],
        none: []
      }, {
        id: "no-autoplay-audio",
        excludeHidden: !1,
        selector: "audio[autoplay], video[autoplay]",
        matches: "no-autoplay-audio-matches",
        reviewOnFail: !0,
        tags: ["cat.time-and-media", "wcag2a", "wcag142", "ACT", "TTv5", "TT2.a"],
        actIds: ["80f0bf"],
        preload: !0,
        all: [{
          options: {
            allowedDuration: 3
          },
          id: "no-autoplay-audio"
        }],
        any: [],
        none: []
      }, {
        id: "object-alt",
        selector: "object[data]",
        matches: "object-is-loaded-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a"],
        actIds: ["8fc3b6"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: []
      }, {
        id: "p-as-heading",
        selector: "p",
        matches: "p-as-heading-matches",
        tags: ["cat.semantics", "wcag2a", "wcag131", "experimental"],
        all: [{
          options: {
            margins: [{
              weight: 150,
              italic: !0
            }, {
              weight: 150,
              size: 1.15
            }, {
              italic: !0,
              size: 1.15
            }, {
              size: 1.4
            }],
            passLength: 1,
            failLength: 0.5
          },
          id: "p-as-heading"
        }],
        any: [],
        none: []
      }, {
        id: "page-has-heading-one",
        selector: "html",
        tags: ["cat.semantics", "best-practice"],
        all: [{
          options: {
            selector: "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",
            passForModal: !0
          },
          id: "page-has-heading-one"
        }],
        any: [],
        none: []
      }, {
        id: "presentation-role-conflict",
        selector: `img[alt=''], [role="none"], [role="presentation"]`,
        matches: "has-implicit-chromium-role-matches",
        tags: ["cat.aria", "best-practice", "ACT"],
        actIds: ["46ca7f"],
        all: [],
        any: [],
        none: ["is-element-focusable", "has-global-aria-attribute"]
      }, {
        id: "region",
        selector: "body *",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: [{
          options: {
            regionMatcher: "dialog, [role=dialog], [role=alertdialog], svg"
          },
          id: "region"
        }],
        none: []
      }, {
        id: "role-img-alt",
        selector: "[role='img']:not(img, area, input, object)",
        matches: "html-namespace-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT", "TTv5", "TT7.a"],
        actIds: ["23a2a8"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "scope-attr-valid",
        selector: "td[scope], th[scope]",
        tags: ["cat.tables", "best-practice"],
        all: ["html5-scope", {
          options: {
            values: ["row", "col", "rowgroup", "colgroup"]
          },
          id: "scope-value"
        }],
        any: [],
        none: []
      }, {
        id: "scrollable-region-focusable",
        selector: "*:not(select,textarea)",
        matches: "scrollable-region-focusable-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211"],
        actIds: ["0ssw9k"],
        all: [],
        any: ["focusable-content", "focusable-element"],
        none: []
      }, {
        id: "select-name",
        selector: "select",
        tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "ACT", "TTv5", "TT5.c"],
        actIds: ["e086e5"],
        all: [],
        any: ["implicit-label", "explicit-label", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: ["help-same-as-label", "hidden-explicit-label"]
      }, {
        id: "server-side-image-map",
        selector: "img[ismap]",
        tags: ["cat.text-alternatives", "wcag2a", "wcag211", "section508", "section508.22.f"],
        all: [],
        any: [],
        none: ["exists"]
      }, {
        id: "skip-link",
        selector: 'a[href^="#"], a[href^="/#"]',
        matches: "skip-link-matches",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: ["skip-link"],
        none: []
      }, {
        id: "svg-img-alt",
        selector: '[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',
        matches: "svg-namespace-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT", "TTv5", "TT7.a"],
        actIds: ["7d6734"],
        all: [],
        any: ["svg-non-empty-title", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "tabindex",
        selector: "[tabindex]",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: ["tabindex"],
        none: []
      }, {
        id: "table-duplicate-name",
        selector: "table",
        tags: ["cat.tables", "best-practice"],
        all: [],
        any: [],
        none: ["same-caption-summary"]
      }, {
        id: "table-fake-caption",
        selector: "table",
        matches: "data-table-matches",
        tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g"],
        all: ["caption-faked"],
        any: [],
        none: []
      }, {
        id: "target-size",
        selector: "*",
        enabled: !1,
        matches: "widget-not-inline-matches",
        tags: ["wcag22aa", "wcag258", "cat.sensory-and-visual-cues"],
        all: [],
        any: [{
          options: {
            minSize: 24
          },
          id: "target-size"
        }, {
          options: {
            minOffset: 24
          },
          id: "target-offset"
        }],
        none: []
      }, {
        id: "td-has-header",
        selector: "table",
        matches: "data-table-large-matches",
        tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b"],
        all: ["td-has-header"],
        any: [],
        none: []
      }, {
        id: "td-headers-attr",
        selector: "table",
        matches: "table-or-grid-role-matches",
        tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
        actIds: ["a25f45"],
        all: ["td-headers-attr"],
        any: [],
        none: []
      }, {
        id: "th-has-data-cells",
        selector: "table",
        matches: "data-table-matches",
        tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "14.b"],
        actIds: ["d0f69e"],
        all: ["th-has-data-cells"],
        any: [],
        none: []
      }, {
        id: "valid-lang",
        selector: "[lang]:not(html), [xml\\:lang]:not(html)",
        tags: ["cat.language", "wcag2aa", "wcag312", "ACT", "TTv5", "TT11.b"],
        actIds: ["de46e4"],
        all: [],
        any: [],
        none: [{
          options: {
            attributes: ["lang", "xml:lang"]
          },
          id: "valid-lang"
        }]
      }, {
        id: "video-caption",
        selector: "video",
        tags: ["cat.text-alternatives", "wcag2a", "wcag122", "section508", "section508.22.a", "TTv5", "TT17.a"],
        actIds: ["eac66b"],
        all: [],
        any: [],
        none: ["caption"]
      }],
      checks: [{
        id: "abstractrole",
        evaluate: "abstractrole-evaluate"
      }, {
        id: "aria-allowed-attr",
        evaluate: "aria-allowed-attr-evaluate",
        options: {
          validTreeRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
        }
      }, {
        id: "aria-allowed-role",
        evaluate: "aria-allowed-role-evaluate",
        options: {
          allowImplicit: !0,
          ignoredTags: []
        }
      }, {
        id: "aria-busy",
        evaluate: "aria-busy-evaluate"
      }, {
        id: "aria-errormessage",
        evaluate: "aria-errormessage-evaluate"
      }, {
        id: "aria-hidden-body",
        evaluate: "aria-hidden-body-evaluate"
      }, {
        id: "aria-level",
        evaluate: "aria-level-evaluate"
      }, {
        id: "aria-prohibited-attr",
        evaluate: "aria-prohibited-attr-evaluate",
        options: {
          elementsAllowedAriaLabel: ["applet", "input"]
        }
      }, {
        id: "aria-required-attr",
        evaluate: "aria-required-attr-evaluate"
      }, {
        id: "aria-required-children",
        evaluate: "aria-required-children-evaluate",
        options: {
          reviewEmpty: ["doc-bibliography", "doc-endnotes", "grid", "list", "listbox", "menu", "menubar", "table", "tablist", "tree", "treegrid", "rowgroup"]
        }
      }, {
        id: "aria-required-parent",
        evaluate: "aria-required-parent-evaluate",
        options: {
          ownGroupRoles: ["listitem", "treeitem"]
        }
      }, {
        id: "aria-roledescription",
        evaluate: "aria-roledescription-evaluate",
        options: {
          supportedRoles: ["button", "img", "checkbox", "radio", "combobox", "menuitemcheckbox", "menuitemradio"]
        }
      }, {
        id: "aria-unsupported-attr",
        evaluate: "aria-unsupported-attr-evaluate"
      }, {
        id: "aria-valid-attr-value",
        evaluate: "aria-valid-attr-value-evaluate",
        options: []
      }, {
        id: "aria-valid-attr",
        evaluate: "aria-valid-attr-evaluate",
        options: []
      }, {
        id: "deprecatedrole",
        evaluate: "deprecatedrole-evaluate"
      }, {
        id: "fallbackrole",
        evaluate: "fallbackrole-evaluate"
      }, {
        id: "has-global-aria-attribute",
        evaluate: "has-global-aria-attribute-evaluate"
      }, {
        id: "has-widget-role",
        evaluate: "has-widget-role-evaluate",
        options: []
      }, {
        id: "invalidrole",
        evaluate: "invalidrole-evaluate"
      }, {
        id: "is-element-focusable",
        evaluate: "is-element-focusable-evaluate"
      }, {
        id: "no-implicit-explicit-label",
        evaluate: "no-implicit-explicit-label-evaluate"
      }, {
        id: "unsupportedrole",
        evaluate: "unsupportedrole-evaluate"
      }, {
        id: "valid-scrollable-semantics",
        evaluate: "valid-scrollable-semantics-evaluate",
        options: {
          roles: ["tooltip"]
        }
      }, {
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
            normal: {
              expected: 7,
              minThreshold: 4.5
            },
            large: {
              expected: 4.5,
              minThreshold: 3
            }
          },
          pseudoSizeThreshold: 0.25,
          shadowOutlineEmMax: 0.1,
          textStrokeEmMin: 0.03
        }
      }, {
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
            normal: {
              expected: 4.5
            },
            large: {
              expected: 3
            }
          },
          pseudoSizeThreshold: 0.25,
          shadowOutlineEmMax: 0.2,
          textStrokeEmMin: 0.03
        }
      }, {
        id: "link-in-text-block-style",
        evaluate: "link-in-text-block-style-evaluate"
      }, {
        id: "link-in-text-block",
        evaluate: "link-in-text-block-evaluate",
        options: {
          requiredContrastRatio: 3,
          allowSameColor: !0
        }
      }, {
        id: "autocomplete-appropriate",
        evaluate: "autocomplete-appropriate-evaluate",
        deprecated: !0
      }, {
        id: "autocomplete-valid",
        evaluate: "autocomplete-valid-evaluate",
        options: {
          stateTerms: ["none", "false", "true", "disabled", "enabled", "undefined", "null"]
        }
      }, {
        id: "accesskeys",
        evaluate: "accesskeys-evaluate",
        after: "accesskeys-after"
      }, {
        id: "focusable-content",
        evaluate: "focusable-content-evaluate"
      }, {
        id: "focusable-disabled",
        evaluate: "focusable-disabled-evaluate"
      }, {
        id: "focusable-element",
        evaluate: "focusable-element-evaluate"
      }, {
        id: "focusable-modal-open",
        evaluate: "focusable-modal-open-evaluate"
      }, {
        id: "focusable-no-name",
        evaluate: "focusable-no-name-evaluate"
      }, {
        id: "focusable-not-tabbable",
        evaluate: "focusable-not-tabbable-evaluate"
      }, {
        id: "frame-focusable-content",
        evaluate: "frame-focusable-content-evaluate"
      }, {
        id: "landmark-is-top-level",
        evaluate: "landmark-is-top-level-evaluate"
      }, {
        id: "no-focusable-content",
        evaluate: "no-focusable-content-evaluate"
      }, {
        id: "page-has-heading-one",
        evaluate: "has-descendant-evaluate",
        after: "has-descendant-after",
        options: {
          selector: "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",
          passForModal: !0
        }
      }, {
        id: "page-has-main",
        evaluate: "has-descendant-evaluate",
        after: "has-descendant-after",
        options: {
          selector: "main:not([role]), [role='main']",
          passForModal: !0
        }
      }, {
        id: "page-no-duplicate-banner",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "header:not([role]), [role=banner]",
          nativeScopeFilter: "article, aside, main, nav, section"
        }
      }, {
        id: "page-no-duplicate-contentinfo",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "footer:not([role]), [role=contentinfo]",
          nativeScopeFilter: "article, aside, main, nav, section"
        }
      }, {
        id: "page-no-duplicate-main",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "main:not([role]), [role='main']"
        }
      }, {
        id: "tabindex",
        evaluate: "tabindex-evaluate"
      }, {
        id: "alt-space-value",
        evaluate: "alt-space-value-evaluate"
      }, {
        id: "duplicate-img-label",
        evaluate: "duplicate-img-label-evaluate",
        options: {
          parentSelector: "button, [role=button], a[href], p, li, td, th"
        }
      }, {
        id: "explicit-label",
        evaluate: "explicit-evaluate"
      }, {
        id: "help-same-as-label",
        evaluate: "help-same-as-label-evaluate",
        enabled: !1
      }, {
        id: "hidden-explicit-label",
        evaluate: "hidden-explicit-label-evaluate"
      }, {
        id: "implicit-label",
        evaluate: "implicit-evaluate"
      }, {
        id: "label-content-name-mismatch",
        evaluate: "label-content-name-mismatch-evaluate",
        options: {
          pixelThreshold: 0.1,
          occurrenceThreshold: 3
        }
      }, {
        id: "multiple-label",
        evaluate: "multiple-label-evaluate"
      }, {
        id: "title-only",
        evaluate: "title-only-evaluate"
      }, {
        id: "landmark-is-unique",
        evaluate: "landmark-is-unique-evaluate",
        after: "landmark-is-unique-after"
      }, {
        id: "has-lang",
        evaluate: "has-lang-evaluate",
        options: {
          attributes: ["lang", "xml:lang"]
        }
      }, {
        id: "valid-lang",
        evaluate: "valid-lang-evaluate",
        options: {
          attributes: ["lang", "xml:lang"]
        }
      }, {
        id: "xml-lang-mismatch",
        evaluate: "xml-lang-mismatch-evaluate"
      }, {
        id: "dlitem",
        evaluate: "dlitem-evaluate"
      }, {
        id: "listitem",
        evaluate: "listitem-evaluate"
      }, {
        id: "only-dlitems",
        evaluate: "invalid-children-evaluate",
        options: {
          validRoles: ["definition", "term", "listitem"],
          validNodeNames: ["dt", "dd"],
          divGroups: !0
        }
      }, {
        id: "only-listitems",
        evaluate: "invalid-children-evaluate",
        options: {
          validRoles: ["listitem"],
          validNodeNames: ["li"]
        }
      }, {
        id: "structured-dlitems",
        evaluate: "structured-dlitems-evaluate"
      }, {
        id: "caption",
        evaluate: "caption-evaluate"
      }, {
        id: "frame-tested",
        evaluate: "frame-tested-evaluate",
        after: "frame-tested-after",
        options: {
          isViolation: !1
        }
      }, {
        id: "no-autoplay-audio",
        evaluate: "no-autoplay-audio-evaluate",
        options: {
          allowedDuration: 3
        }
      }, {
        id: "css-orientation-lock",
        evaluate: "css-orientation-lock-evaluate",
        options: {
          degreeThreshold: 2
        }
      }, {
        id: "meta-viewport-large",
        evaluate: "meta-viewport-scale-evaluate",
        options: {
          scaleMinimum: 5,
          lowerBound: 2
        }
      }, {
        id: "meta-viewport",
        evaluate: "meta-viewport-scale-evaluate",
        options: {
          scaleMinimum: 2
        }
      }, {
        id: "target-offset",
        evaluate: "target-offset-evaluate",
        options: {
          minOffset: 24
        }
      }, {
        id: "target-size",
        evaluate: "target-size-evaluate",
        options: {
          minSize: 24
        }
      }, {
        id: "header-present",
        evaluate: "has-descendant-evaluate",
        after: "has-descendant-after",
        options: {
          selector: ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"
        }
      }, {
        id: "heading-order",
        evaluate: "heading-order-evaluate",
        after: "heading-order-after"
      }, {
        id: "identical-links-same-purpose",
        evaluate: "identical-links-same-purpose-evaluate",
        after: "identical-links-same-purpose-after"
      }, {
        id: "internal-link-present",
        evaluate: "internal-link-present-evaluate"
      }, {
        id: "landmark",
        evaluate: "has-descendant-evaluate",
        options: {
          selector: "main, [role=main]"
        }
      }, {
        id: "meta-refresh-no-exceptions",
        evaluate: "meta-refresh-evaluate",
        options: {
          minDelay: 72e3,
          maxDelay: !1
        }
      }, {
        id: "meta-refresh",
        evaluate: "meta-refresh-evaluate",
        options: {
          minDelay: 0,
          maxDelay: 72e3
        }
      }, {
        id: "p-as-heading",
        evaluate: "p-as-heading-evaluate",
        options: {
          margins: [{
            weight: 150,
            italic: !0
          }, {
            weight: 150,
            size: 1.15
          }, {
            italic: !0,
            size: 1.15
          }, {
            size: 1.4
          }],
          passLength: 1,
          failLength: 0.5
        }
      }, {
        id: "region",
        evaluate: "region-evaluate",
        after: "region-after",
        options: {
          regionMatcher: "dialog, [role=dialog], [role=alertdialog], svg"
        }
      }, {
        id: "skip-link",
        evaluate: "skip-link-evaluate"
      }, {
        id: "unique-frame-title",
        evaluate: "unique-frame-title-evaluate",
        after: "unique-frame-title-after"
      }, {
        id: "duplicate-id-active",
        evaluate: "duplicate-id-evaluate",
        after: "duplicate-id-after"
      }, {
        id: "duplicate-id-aria",
        evaluate: "duplicate-id-evaluate",
        after: "duplicate-id-after"
      }, {
        id: "duplicate-id",
        evaluate: "duplicate-id-evaluate",
        after: "duplicate-id-after"
      }, {
        id: "aria-label",
        evaluate: "aria-label-evaluate"
      }, {
        id: "aria-labelledby",
        evaluate: "aria-labelledby-evaluate"
      }, {
        id: "avoid-inline-spacing",
        evaluate: "avoid-inline-spacing-evaluate",
        options: {
          cssProperties: ["line-height", "letter-spacing", "word-spacing"]
        }
      }, {
        id: "button-has-visible-text",
        evaluate: "has-text-content-evaluate"
      }, {
        id: "doc-has-title",
        evaluate: "doc-has-title-evaluate"
      }, {
        id: "exists",
        evaluate: "exists-evaluate"
      }, {
        id: "has-alt",
        evaluate: "has-alt-evaluate"
      }, {
        id: "has-visible-text",
        evaluate: "has-text-content-evaluate"
      }, {
        id: "important-letter-spacing",
        evaluate: "inline-style-property-evaluate",
        options: {
          cssProperty: "letter-spacing",
          minValue: 0.12
        }
      }, {
        id: "important-line-height",
        evaluate: "inline-style-property-evaluate",
        options: {
          multiLineOnly: !0,
          cssProperty: "line-height",
          minValue: 1.5,
          normalValue: 1
        }
      }, {
        id: "important-word-spacing",
        evaluate: "inline-style-property-evaluate",
        options: {
          cssProperty: "word-spacing",
          minValue: 0.16
        }
      }, {
        id: "is-on-screen",
        evaluate: "is-on-screen-evaluate"
      }, {
        id: "non-empty-alt",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "alt"
        }
      }, {
        id: "non-empty-if-present",
        evaluate: "non-empty-if-present-evaluate"
      }, {
        id: "non-empty-placeholder",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "placeholder"
        }
      }, {
        id: "non-empty-title",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "title"
        }
      }, {
        id: "non-empty-value",
        evaluate: "attr-non-space-content-evaluate",
        options: {
          attribute: "value"
        }
      }, {
        id: "presentational-role",
        evaluate: "presentational-role-evaluate"
      }, {
        id: "role-none",
        evaluate: "matches-definition-evaluate",
        deprecated: !0,
        options: {
          matcher: {
            attributes: {
              role: "none"
            }
          }
        }
      }, {
        id: "role-presentation",
        evaluate: "matches-definition-evaluate",
        deprecated: !0,
        options: {
          matcher: {
            attributes: {
              role: "presentation"
            }
          }
        }
      }, {
        id: "svg-non-empty-title",
        evaluate: "svg-non-empty-title-evaluate"
      }, {
        id: "caption-faked",
        evaluate: "caption-faked-evaluate"
      }, {
        id: "html5-scope",
        evaluate: "html5-scope-evaluate"
      }, {
        id: "same-caption-summary",
        evaluate: "same-caption-summary-evaluate"
      }, {
        id: "scope-value",
        evaluate: "scope-value-evaluate",
        options: {
          values: ["row", "col", "rowgroup", "colgroup"]
        }
      }, {
        id: "td-has-header",
        evaluate: "td-has-header-evaluate"
      }, {
        id: "td-headers-attr",
        evaluate: "td-headers-attr-evaluate"
      }, {
        id: "th-has-data-cells",
        evaluate: "th-has-data-cells-evaluate"
      }, {
        id: "hidden-content",
        evaluate: "hidden-content-evaluate"
      }]
    });
  }, "axeFunction"))(typeof window == "object" ? window : UE);
})(Bi);
const WE = /* @__PURE__ */ zE(Bi.exports), KE = /* @__PURE__ */ $E({
  __proto__: null,
  default: WE
}, [Bi.exports]);
export {
  KE as a
};
//# sourceMappingURL=axe.77b202bf.js.map
