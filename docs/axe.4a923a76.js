var Ux = Object.defineProperty;
var i = (pt, kt) => Ux(pt, "name", { value: kt, configurable: !0 });
import { X as $x, Y as Wx } from "./iframe.f8011b09.js";
function Gx(pt, kt) {
  for (var D = 0; D < kt.length; D++) {
    const Qe = kt[D];
    if (typeof Qe != "string" && !Array.isArray(Qe)) {
      for (const T in Qe)
        if (T !== "default" && !(T in pt)) {
          const g = Object.getOwnPropertyDescriptor(Qe, T);
          g && Object.defineProperty(pt, T, g.get ? g : {
            enumerable: !0,
            get: () => Qe[T]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(pt, Symbol.toStringTag, { value: "Module" }));
}
i(Gx, "_mergeNamespaces");
var Ei = { exports: {} };
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
 */
(function(pt) {
  (/* @__PURE__ */ i(function kt(D) {
    var Qe = D, T = D.document, g = g || {};
    g.version = "4.5.2", N(pt) === "object" && pt.exports && typeof kt.toString == "function" && (g.source = "(" + kt.toString() + ')(typeof window === "object" ? window : this);', pt.exports = g), typeof D.getComputedStyle == "function" && (D.axe = g);
    function cr(F) {
      this.name = "SupportError", this.cause = F.cause, this.message = "`".concat(F.cause, "` - feature unsupported in your environment."), F.ruleId && (this.ruleId = F.ruleId, this.message += " Skipping ".concat(this.ruleId, " rule.")), this.stack = new Error().stack;
    }
    i(cr, "SupportError"), cr.prototype = Object.create(Error.prototype), cr.prototype.constructor = cr;
    var Us = ["node"], $s = ["node"], Ws = ["variant"], Gs = ["matches"], Ys = ["chromium"], Ks = ["noImplicit"], Xs = ["noPresentational"], Js = ["nodes"], Qs = ["node"], Zs = ["relatedNodes"], ec = ["environmentData"], tc = ["environmentData"], rc = ["node"], ac = ["environmentData"], nc = ["environmentData"], ic = ["environmentData"];
    function oc(F, O, V) {
      return O in F ? Object.defineProperty(F, O, {
        value: V,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : F[O] = V, F;
    }
    i(oc, "_defineProperty");
    function Ai(F, O) {
      if (typeof O != "function" && O !== null)
        throw new TypeError("Super expression must either be null or a function");
      F.prototype = Object.create(O && O.prototype, {
        constructor: {
          value: F,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(F, "prototype", {
        writable: !1
      }), O && Sa(F, O);
    }
    i(Ai, "_inherits");
    function Sa(F, O) {
      return Sa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : /* @__PURE__ */ i(function(Y, pe) {
        return Y.__proto__ = pe, Y;
      }, "_setPrototypeOf"), Sa(F, O);
    }
    i(Sa, "_setPrototypeOf");
    function Fi(F) {
      var O = uc();
      return /* @__PURE__ */ i(function() {
        var Y = Br(F), pe;
        if (O) {
          var we = Br(this).constructor;
          pe = Reflect.construct(Y, arguments, we);
        } else
          pe = Y.apply(this, arguments);
        return lc(this, pe);
      }, "_createSuperInternal");
    }
    i(Fi, "_createSuper");
    function lc(F, O) {
      if (O && (N(O) === "object" || typeof O == "function"))
        return O;
      if (O !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ci(F);
    }
    i(lc, "_possibleConstructorReturn");
    function Ci(F) {
      if (F === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return F;
    }
    i(Ci, "_assertThisInitialized");
    function uc() {
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
    i(uc, "_isNativeReflectConstruct");
    function Br(F) {
      return Br = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : /* @__PURE__ */ i(function(V) {
        return V.__proto__ || Object.getPrototypeOf(V);
      }, "_getPrototypeOf"), Br(F);
    }
    i(Br, "_getPrototypeOf");
    function je(F, O) {
      if (F == null)
        return {};
      var V = sc(F, O), Y, pe;
      if (Object.getOwnPropertySymbols) {
        var we = Object.getOwnPropertySymbols(F);
        for (pe = 0; pe < we.length; pe++)
          Y = we[pe], !(O.indexOf(Y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(F, Y) || (V[Y] = F[Y]));
      }
      return V;
    }
    i(je, "_objectWithoutProperties");
    function sc(F, O) {
      if (F == null)
        return {};
      var V = {}, Y = Object.keys(F), pe, we;
      for (we = 0; we < Y.length; we++)
        pe = Y[we], !(O.indexOf(pe) >= 0) && (V[pe] = F[pe]);
      return V;
    }
    i(sc, "_objectWithoutPropertiesLoose");
    function oe(F) {
      return fc(F) || dc(F) || Oa(F) || cc();
    }
    i(oe, "_toConsumableArray");
    function cc() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    i(cc, "_nonIterableSpread");
    function dc(F) {
      if (typeof Symbol < "u" && F[Symbol.iterator] != null || F["@@iterator"] != null)
        return Array.from(F);
    }
    i(dc, "_iterableToArray");
    function fc(F) {
      if (Array.isArray(F))
        return Ia(F);
    }
    i(fc, "_arrayWithoutHoles");
    function ie() {
      return ie = Object.assign ? Object.assign.bind() : function(F) {
        for (var O = 1; O < arguments.length; O++) {
          var V = arguments[O];
          for (var Y in V)
            Object.prototype.hasOwnProperty.call(V, Y) && (F[Y] = V[Y]);
        }
        return F;
      }, ie.apply(this, arguments);
    }
    i(ie, "_extends");
    function ge(F, O) {
      return hc(F) || mc(F, O) || Oa(F, O) || pc();
    }
    i(ge, "_slicedToArray");
    function pc() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    i(pc, "_nonIterableRest");
    function mc(F, O) {
      var V = F == null ? null : typeof Symbol < "u" && F[Symbol.iterator] || F["@@iterator"];
      if (V != null) {
        var Y = [], pe = !0, we = !1, tt, C;
        try {
          for (V = V.call(F); !(pe = (tt = V.next()).done) && (Y.push(tt.value), !(O && Y.length === O)); pe = !0)
            ;
        } catch (Re) {
          we = !0, C = Re;
        } finally {
          try {
            !pe && V.return != null && V.return();
          } finally {
            if (we)
              throw C;
          }
        }
        return Y;
      }
    }
    i(mc, "_iterableToArrayLimit");
    function hc(F) {
      if (Array.isArray(F))
        return F;
    }
    i(hc, "_arrayWithHoles");
    function dr(F, O) {
      if (!(F instanceof O))
        throw new TypeError("Cannot call a class as a function");
    }
    i(dr, "_classCallCheck");
    function ki(F, O) {
      for (var V = 0; V < O.length; V++) {
        var Y = O[V];
        Y.enumerable = Y.enumerable || !1, Y.configurable = !0, "value" in Y && (Y.writable = !0), Object.defineProperty(F, Y.key, Y);
      }
    }
    i(ki, "_defineProperties");
    function fr(F, O, V) {
      return O && ki(F.prototype, O), V && ki(F, V), Object.defineProperty(F, "prototype", {
        writable: !1
      }), F;
    }
    i(fr, "_createClass");
    function mt(F, O) {
      var V = typeof Symbol < "u" && F[Symbol.iterator] || F["@@iterator"];
      if (!V) {
        if (Array.isArray(F) || (V = Oa(F)) || O && F && typeof F.length == "number") {
          V && (F = V);
          var Y = 0, pe = /* @__PURE__ */ i(function() {
          }, "F");
          return {
            s: pe,
            n: /* @__PURE__ */ i(function() {
              return Y >= F.length ? {
                done: !0
              } : {
                done: !1,
                value: F[Y++]
              };
            }, "n"),
            e: /* @__PURE__ */ i(function(wt) {
              throw wt;
            }, "e"),
            f: pe
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var we = !0, tt = !1, C;
      return {
        s: /* @__PURE__ */ i(function() {
          V = V.call(F);
        }, "s"),
        n: /* @__PURE__ */ i(function() {
          var wt = V.next();
          return we = wt.done, wt;
        }, "n"),
        e: /* @__PURE__ */ i(function(wt) {
          tt = !0, C = wt;
        }, "e"),
        f: /* @__PURE__ */ i(function() {
          try {
            !we && V.return != null && V.return();
          } finally {
            if (tt)
              throw C;
          }
        }, "f")
      };
    }
    i(mt, "_createForOfIteratorHelper");
    function Oa(F, O) {
      if (!!F) {
        if (typeof F == "string")
          return Ia(F, O);
        var V = Object.prototype.toString.call(F).slice(8, -1);
        if (V === "Object" && F.constructor && (V = F.constructor.name), V === "Map" || V === "Set")
          return Array.from(F);
        if (V === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))
          return Ia(F, O);
      }
    }
    i(Oa, "_unsupportedIterableToArray");
    function Ia(F, O) {
      (O == null || O > F.length) && (O = F.length);
      for (var V = 0, Y = new Array(O); V < O; V++)
        Y[V] = F[V];
      return Y;
    }
    i(Ia, "_arrayLikeToArray");
    function N(F) {
      return N = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(O) {
        return typeof O;
      } : function(O) {
        return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
      }, N(F);
    }
    i(N, "_typeof"), function() {
      var F = Object.create, O = Object.defineProperty, V = Object.getPrototypeOf, Y = Object.prototype.hasOwnProperty, pe = Object.getOwnPropertyNames, we = Object.getOwnPropertyDescriptor, tt = /* @__PURE__ */ i(function(t) {
        return O(t, "__esModule", {
          value: !0
        });
      }, "__markAsModule"), C = /* @__PURE__ */ i(function(t, r) {
        return function() {
          return r || t((r = {
            exports: {}
          }).exports, r), r.exports;
        };
      }, "__commonJS"), Re = /* @__PURE__ */ i(function(t, r) {
        for (var a in r)
          O(t, a, {
            get: r[a],
            enumerable: !0
          });
      }, "__export"), wt = /* @__PURE__ */ i(function(t, r, a) {
        if (r && N(r) === "object" || typeof r == "function") {
          var n = mt(pe(r)), o;
          try {
            var l = /* @__PURE__ */ i(function() {
              var s = o.value;
              !Y.call(t, s) && s !== "default" && O(t, s, {
                get: /* @__PURE__ */ i(function() {
                  return r[s];
                }, "get"),
                enumerable: !(a = we(r, s)) || a.enumerable
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
      }, "__exportStar"), ht = /* @__PURE__ */ i(function(t) {
        return wt(tt(O(t != null ? F(V(t)) : {}, "default", t && t.__esModule && "default" in t ? {
          get: /* @__PURE__ */ i(function() {
            return t.default;
          }, "get"),
          enumerable: !0
        } : {
          value: t,
          enumerable: !0
        })), t);
      }, "__toModule"), Ri = C(function(e) {
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
      }), vc = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Ri();
        function r(a, n, o, l, u, s) {
          var c = a.length, d = "";
          function f(b, E) {
            var A = "";
            for (n++, d = a.charAt(n); n < c; ) {
              if (d === b)
                return n++, A;
              if (d === "\\") {
                n++, d = a.charAt(n);
                var k = void 0;
                if (d === b)
                  A += b;
                else if ((k = E[d]) !== void 0)
                  A += k;
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
                var k = d;
                if (n++, m(), E = v(), !E)
                  throw Error('Rule expected after "' + k + '".');
                E.nestingOperator = k;
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
                  var k = "";
                  if (E.valueType = "string", d === '"')
                    k = f('"', t.doubleQuotesEscapeChars);
                  else if (d === "'")
                    k = f("'", t.singleQuoteEscapeChars);
                  else if (s && d === "$")
                    n++, k = p(), E.valueType = "substitute";
                  else {
                    for (; n < c && d !== "]"; )
                      k += d, n++, d = a.charAt(n);
                    k = k.trim();
                  }
                  if (m(), n >= c)
                    throw Error('Expected "]" but end of file reached.');
                  if (d !== "]")
                    throw Error('Expected "]" but "' + d + '" found.');
                  n++, E.value = k;
                }
                b = b || {}, (b.attrs = b.attrs || []).push(E);
              } else if (d === ":") {
                n++;
                var M = p(), B = {
                  name: M
                };
                if (d === "(") {
                  n++;
                  var z = "";
                  if (m(), o[M] === "selector")
                    B.valueType = "selector", z = y();
                  else {
                    if (B.valueType = o[M] || "string", d === '"')
                      z = f('"', t.doubleQuotesEscapeChars);
                    else if (d === "'")
                      z = f("'", t.singleQuoteEscapeChars);
                    else if (s && d === "$")
                      n++, z = p(), B.valueType = "substitute";
                    else {
                      for (; n < c && d !== ")"; )
                        z += d, n++, d = a.charAt(n);
                      z = z.trim();
                    }
                    m();
                  }
                  if (n >= c)
                    throw Error('Expected ")" but end of file reached.');
                  if (d !== ")")
                    throw Error('Expected ")" but "' + d + '" found.');
                  n++, B.value = z;
                }
                b = b || {}, (b.pseudos = b.pseudos || []).push(B);
              } else
                break;
            return b;
          }
          return i(v, "parseRule"), h();
        }
        i(r, "parseCssSelector"), e.parseCssSelector = r;
      }), gc = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Ri();
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
      }), Ti = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = vc(), r = gc(), a = function() {
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
      }), bc = C(function(e, t) {
        t.exports = function() {
        };
      }), Rt = C(function(e, t) {
        var r = bc()();
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Si = C(function(e, t) {
        var r = Rt(), a = Array.prototype.forEach, n = Object.create, o = /* @__PURE__ */ i(function(u, s) {
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
      }), yc = C(function(e, t) {
        t.exports = function() {
          var r = Math.sign;
          return typeof r != "function" ? !1 : r(10) === 1 && r(-20) === -1;
        };
      }), Dc = C(function(e, t) {
        t.exports = function(r) {
          return r = Number(r), isNaN(r) || r === 0 ? r : r > 0 ? 1 : -1;
        };
      }), wc = C(function(e, t) {
        t.exports = yc()() ? Math.sign : Dc();
      }), _c = C(function(e, t) {
        var r = wc(), a = Math.abs, n = Math.floor;
        t.exports = function(o) {
          return isNaN(o) ? 0 : (o = Number(o), o === 0 || !isFinite(o) ? o : r(o) * n(a(o)));
        };
      }), Tt = C(function(e, t) {
        var r = _c(), a = Math.max;
        t.exports = function(n) {
          return a(0, r(n));
        };
      }), Oi = C(function(e, t) {
        var r = Tt();
        t.exports = function(a, n, o) {
          var l;
          return isNaN(a) ? (l = n, l >= 0 ? o && l ? l - 1 : l : 1) : a === !1 ? !1 : r(a);
        };
      }), _t = C(function(e, t) {
        t.exports = function(r) {
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          return r;
        };
      }), Ht = C(function(e, t) {
        var r = Rt();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError("Cannot use null or undefined");
          return a;
        };
      }), xc = C(function(e, t) {
        var r = _t(), a = Ht(), n = Function.prototype.bind, o = Function.prototype.call, l = Object.keys, u = Object.prototype.propertyIsEnumerable;
        t.exports = function(s, c) {
          return function(d, f) {
            var p, m = arguments[2], h = arguments[3];
            return d = Object(a(d)), r(f), p = l(d), h && p.sort(typeof h == "function" ? n.call(h, d) : void 0), typeof s != "function" && (s = p[s]), o.call(s, p, function(y, w) {
              return u.call(d, y) ? o.call(f, m, d[y], y, d, w) : c;
            });
          };
        };
      }), qr = C(function(e, t) {
        t.exports = xc()("forEach");
      }), St = C(function() {
      }), Ec = C(function(e, t) {
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
      }), Ac = C(function(e, t) {
        t.exports = function() {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        };
      }), Fc = C(function(e, t) {
        var r = Rt(), a = Object.keys;
        t.exports = function(n) {
          return a(r(n) ? Object(n) : n);
        };
      }), Cc = C(function(e, t) {
        t.exports = Ac()() ? Object.keys : Fc();
      }), kc = C(function(e, t) {
        var r = Cc(), a = Ht(), n = Math.max;
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
      }), Ii = C(function(e, t) {
        t.exports = Ec()() ? Object.assign : kc();
      }), Rc = C(function(e, t) {
        var r = Rt(), a = {
          function: !0,
          object: !0
        };
        t.exports = function(n) {
          return r(n) && a[N(n)] || !1;
        };
      }), Tc = C(function(e, t) {
        var r = Ii(), a = Rc(), n = Rt(), o = Error.captureStackTrace;
        t.exports = function(l) {
          var u = new Error(l), s = arguments[1], c = arguments[2];
          return n(c) || a(s) && (c = s, s = null), n(c) && r(u, c), n(s) && (u.code = s), o && o(u, t.exports), u;
        };
      }), Pi = C(function(e, t) {
        var r = Ht(), a = Object.defineProperty, n = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, l = Object.getOwnPropertySymbols;
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
      }), Ni = C(function(e, t) {
        var r = Tt(), a = /* @__PURE__ */ i(function(c, d) {
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
        }) : (u = Pi(), l = function() {
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
      }), Mi = C(function(e, t) {
        var r = void 0;
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Sc = C(function(e, t) {
        var r = Mi(), a = {
          object: !0,
          function: !0,
          undefined: !0
        };
        t.exports = function(n) {
          return r(n) ? hasOwnProperty.call(a, N(n)) : !1;
        };
      }), Oc = C(function(e, t) {
        var r = Sc();
        t.exports = function(a) {
          if (!r(a))
            return !1;
          try {
            return a.constructor ? a.constructor.prototype === a : !1;
          } catch {
            return !1;
          }
        };
      }), Ic = C(function(e, t) {
        var r = Oc();
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
      }), Pc = C(function(e, t) {
        var r = Ic(), a = /^\s*class[\s{/}]/, n = Function.prototype.toString;
        t.exports = function(o) {
          return !(!r(o) || a.test(n.call(o)));
        };
      }), Nc = C(function(e, t) {
        var r = "razdwatrzy";
        t.exports = function() {
          return typeof r.contains != "function" ? !1 : r.contains("dwa") === !0 && r.contains("foo") === !1;
        };
      }), Mc = C(function(e, t) {
        var r = String.prototype.indexOf;
        t.exports = function(a) {
          return r.call(this, a, arguments[1]) > -1;
        };
      }), Bc = C(function(e, t) {
        t.exports = Nc()() ? String.prototype.contains : Mc();
      }), Ot = C(function(e, t) {
        var r = Mi(), a = Pc(), n = Ii(), o = Si(), l = Bc(), u = t.exports = function(s, c) {
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
      }), qc = C(function(e, t) {
        var r = Ot(), a = _t(), n = Function.prototype.apply, o = Function.prototype.call, l = Object.create, u = Object.defineProperty, s = Object.defineProperties, c = Object.prototype.hasOwnProperty, d = {
          configurable: !0,
          enumerable: !1,
          writable: !0
        }, f, p, m, h, y, w, v;
        f = /* @__PURE__ */ i(function(E, A) {
          var k;
          return a(A), c.call(this, "__ee__") ? k = this.__ee__ : (k = d.value = l(null), u(this, "__ee__", d), d.value = null), k[E] ? N(k[E]) === "object" ? k[E].push(A) : k[E] = [k[E], A] : k[E] = A, this;
        }, "on"), p = /* @__PURE__ */ i(function(E, A) {
          var k, M;
          return a(A), M = this, f.call(this, E, k = /* @__PURE__ */ i(function() {
            m.call(M, E, k), n.call(A, this, arguments);
          }, "once2")), k.__eeOnceListener__ = A, this;
        }, "once"), m = /* @__PURE__ */ i(function(E, A) {
          var k, M, B, z;
          if (a(A), !c.call(this, "__ee__"))
            return this;
          if (k = this.__ee__, !k[E])
            return this;
          if (M = k[E], N(M) === "object")
            for (z = 0; B = M[z]; ++z)
              (B === A || B.__eeOnceListener__ === A) && (M.length === 2 ? k[E] = M[z ? 0 : 1] : M.splice(z, 1));
          else
            (M === A || M.__eeOnceListener__ === A) && delete k[E];
          return this;
        }, "off"), h = /* @__PURE__ */ i(function(E) {
          var A, k, M, B, z;
          if (!!c.call(this, "__ee__") && (B = this.__ee__[E], !!B))
            if (N(B) === "object") {
              for (k = arguments.length, z = new Array(k - 1), A = 1; A < k; ++A)
                z[A - 1] = arguments[A];
              for (B = B.slice(), A = 0; M = B[A]; ++A)
                n.call(M, this, z);
            } else
              switch (arguments.length) {
                case 1:
                  o.call(B, this);
                  break;
                case 2:
                  o.call(B, this, arguments[1]);
                  break;
                case 3:
                  o.call(B, this, arguments[1], arguments[2]);
                  break;
                default:
                  for (k = arguments.length, z = new Array(k - 1), A = 1; A < k; ++A)
                    z[A - 1] = arguments[A];
                  n.call(B, this, z);
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
      }), Lc = C(function(e, t) {
        t.exports = function() {
          var r = Array.from, a, n;
          return typeof r != "function" ? !1 : (a = ["raz", "dwa"], n = r(a), Boolean(n && n !== a && n[1] === "dwa"));
        };
      }), Vc = C(function(e, t) {
        t.exports = function() {
          return (typeof globalThis > "u" ? "undefined" : N(globalThis)) !== "object" || !globalThis ? !1 : globalThis.Array === Array;
        };
      }), jc = C(function(e, t) {
        var r = /* @__PURE__ */ i(function() {
          if ((typeof self > "u" ? "undefined" : N(self)) === "object" && self)
            return self;
          if ((typeof D > "u" ? "undefined" : N(D)) === "object" && D)
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
      }), Lr = C(function(e, t) {
        t.exports = Vc()() ? globalThis : jc();
      }), Hc = C(function(e, t) {
        var r = Lr(), a = {
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
          return !(!a[N(n.iterator)] || !a[N(n.toPrimitive)] || !a[N(n.toStringTag)]);
        };
      }), zc = C(function(e, t) {
        t.exports = function(r) {
          return r ? N(r) === "symbol" ? !0 : !r.constructor || r.constructor.name !== "Symbol" ? !1 : r[r.constructor.toStringTag] === "Symbol" : !1;
        };
      }), Bi = C(function(e, t) {
        var r = zc();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError(a + " is not a symbol");
          return a;
        };
      }), Uc = C(function(e, t) {
        var r = Ot(), a = Object.create, n = Object.defineProperty, o = Object.prototype, l = a(null);
        t.exports = function(u) {
          for (var s = 0, c, d; l[u + (s || "")]; )
            ++s;
          return u += s || "", l[u] = !0, c = "@@" + u, n(o, c, r.gs(null, function(f) {
            d || (d = !0, n(this, c, r(f)), d = !1);
          })), c;
        };
      }), $c = C(function(e, t) {
        var r = Ot(), a = Lr().Symbol;
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
      }), Wc = C(function(e, t) {
        var r = Ot(), a = Bi(), n = /* @__PURE__ */ Object.create(null);
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
      }), Gc = C(function(e, t) {
        var r = Ot(), a = Bi(), n = Lr().Symbol, o = Uc(), l = $c(), u = Wc(), s = Object.create, c = Object.defineProperties, d = Object.defineProperty, f, p, m;
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
          return N(h) === "symbol" ? h : h.toString();
        })), d(f.prototype, f.toStringTag, r("c", "Symbol")), d(p.prototype, f.toStringTag, r("c", f.prototype[f.toStringTag])), d(p.prototype, f.toPrimitive, r("c", f.prototype[f.toPrimitive]));
      }), Yc = C(function(e, t) {
        t.exports = Hc()() ? Lr().Symbol : Gc();
      }), Kc = C(function(e, t) {
        var r = Object.prototype.toString, a = r.call(function() {
          return arguments;
        }());
        t.exports = function(n) {
          return r.call(n) === a;
        };
      }), Xc = C(function(e, t) {
        var r = Object.prototype.toString, a = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
        t.exports = function(n) {
          return typeof n == "function" && a(r.call(n));
        };
      }), Jc = C(function(e, t) {
        var r = Object.prototype.toString, a = r.call("");
        t.exports = function(n) {
          return typeof n == "string" || n && N(n) === "object" && (n instanceof String || r.call(n) === a) || !1;
        };
      }), Qc = C(function(e, t) {
        var r = Yc().iterator, a = Kc(), n = Xc(), o = Tt(), l = _t(), u = Ht(), s = Rt(), c = Jc(), d = Array.isArray, f = Function.prototype.call, p = {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: null
        }, m = Object.defineProperty;
        t.exports = function(h) {
          var y = arguments[1], w = arguments[2], v, b, E, A, k, M, B, z, te, L;
          if (h = Object(u(h)), s(y) && l(y), !this || this === Array || !n(this)) {
            if (!y) {
              if (a(h))
                return k = h.length, k !== 1 ? Array.apply(null, h) : (A = new Array(1), A[0] = h[0], A);
              if (d(h)) {
                for (A = new Array(k = h.length), b = 0; b < k; ++b)
                  A[b] = h[b];
                return A;
              }
            }
            A = [];
          } else
            v = this;
          if (!d(h)) {
            if ((te = h[r]) !== void 0) {
              for (B = l(te).call(h), v && (A = new v()), z = B.next(), b = 0; !z.done; )
                L = y ? f.call(y, w, z.value, b) : z.value, v ? (p.value = L, m(A, b, p)) : A[b] = L, z = B.next(), ++b;
              k = b;
            } else if (c(h)) {
              for (k = h.length, v && (A = new v()), b = 0, E = 0; b < k; ++b)
                L = h[b], b + 1 < k && (M = L.charCodeAt(0), M >= 55296 && M <= 56319 && (L += h[++b])), L = y ? f.call(y, w, L, E) : L, v ? (p.value = L, m(A, E, p)) : A[E] = L, ++E;
              k = E;
            }
          }
          if (k === void 0)
            for (k = o(h.length), v && (A = new v(k)), b = 0; b < k; ++b)
              L = y ? f.call(y, w, h[b], b) : h[b], v ? (p.value = L, m(A, b, p)) : A[b] = L;
          return v && (p.value = null, A.length = k), A;
        };
      }), Pa = C(function(e, t) {
        t.exports = Lc()() ? Array.from : Qc();
      }), Zc = C(function(e, t) {
        var r = Pa(), a = Array.isArray;
        t.exports = function(n) {
          return a(n) ? n : r(n);
        };
      }), ed = C(function(e, t) {
        var r = Zc(), a = Rt(), n = _t(), o = Array.prototype.slice, l;
        l = /* @__PURE__ */ i(function(s) {
          return this.map(function(c, d) {
            return c ? c(s[d]) : s[d];
          }).concat(o.call(s, this.length));
        }, "resolveArgs"), t.exports = function(u) {
          return u = r(u), u.forEach(function(s) {
            a(s) && n(s);
          }), l.bind(u);
        };
      }), td = C(function(e, t) {
        var r = _t();
        t.exports = function(a) {
          var n;
          return typeof a == "function" ? {
            set: a,
            get: a
          } : (n = {
            get: r(a.get)
          }, a.set !== void 0 ? (n.set = r(a.set), a.delete && (n.delete = r(a.delete)), a.clear && (n.clear = r(a.clear)), n) : (n.set = n.get, n));
        };
      }), rd = C(function(e, t) {
        var r = Tc(), a = Ni(), n = Ot(), o = qc().methods, l = ed(), u = td(), s = Function.prototype.apply, c = Function.prototype.call, d = Object.create, f = Object.defineProperties, p = o.on, m = o.emit;
        t.exports = function(h, y, w) {
          var v = d(null), b, E, A, k, M, B, z, te, L, Q, W, re, ue, me, Z;
          return y !== !1 ? E = y : isNaN(h.length) ? E = 1 : E = h.length, w.normalizer && (Q = u(w.normalizer), A = Q.get, k = Q.set, M = Q.delete, B = Q.clear), w.resolvers != null && (Z = l(w.resolvers)), A ? me = a(function(le) {
            var I, de, _ = arguments;
            if (Z && (_ = Z(_)), I = A(_), I !== null && hasOwnProperty.call(v, I))
              return W && b.emit("get", I, _, this), v[I];
            if (_.length === 1 ? de = c.call(h, this, _[0]) : de = s.call(h, this, _), I === null) {
              if (I = A(_), I !== null)
                throw r("Circular invocation", "CIRCULAR_INVOCATION");
              I = k(_);
            } else if (hasOwnProperty.call(v, I))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v[I] = de, re && b.emit("set", I, null, de), de;
          }, E) : y === 0 ? me = /* @__PURE__ */ i(function() {
            var I;
            if (hasOwnProperty.call(v, "data"))
              return W && b.emit("get", "data", arguments, this), v.data;
            if (arguments.length ? I = s.call(h, this, arguments) : I = c.call(h, this), hasOwnProperty.call(v, "data"))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v.data = I, re && b.emit("set", "data", null, I), I;
          }, "memoized") : me = /* @__PURE__ */ i(function(I) {
            var de, _ = arguments, U;
            if (Z && (_ = Z(arguments)), U = String(_[0]), hasOwnProperty.call(v, U))
              return W && b.emit("get", U, _, this), v[U];
            if (_.length === 1 ? de = c.call(h, this, _[0]) : de = s.call(h, this, _), hasOwnProperty.call(v, U))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return v[U] = de, re && b.emit("set", U, null, de), de;
          }, "memoized"), b = {
            original: h,
            memoized: me,
            profileName: w.profileName,
            get: /* @__PURE__ */ i(function(I) {
              return Z && (I = Z(I)), A ? A(I) : String(I[0]);
            }, "get"),
            has: /* @__PURE__ */ i(function(I) {
              return hasOwnProperty.call(v, I);
            }, "has"),
            delete: /* @__PURE__ */ i(function(I) {
              var de;
              !hasOwnProperty.call(v, I) || (M && M(I), de = v[I], delete v[I], ue && b.emit("delete", I, de));
            }, "_delete"),
            clear: /* @__PURE__ */ i(function() {
              var I = v;
              B && B(), v = d(null), b.emit("clear", I);
            }, "clear"),
            on: /* @__PURE__ */ i(function(I, de) {
              return I === "get" ? W = !0 : I === "set" ? re = !0 : I === "delete" && (ue = !0), p.call(this, I, de);
            }, "on"),
            emit: m,
            updateEnv: /* @__PURE__ */ i(function() {
              h = b.original;
            }, "updateEnv")
          }, A ? z = a(function(le) {
            var I, de = arguments;
            Z && (de = Z(de)), I = A(de), I !== null && b.delete(I);
          }, E) : y === 0 ? z = /* @__PURE__ */ i(function() {
            return b.delete("data");
          }, "extDel") : z = /* @__PURE__ */ i(function(I) {
            return Z && (I = Z(arguments)[0]), b.delete(I);
          }, "extDel"), te = a(function() {
            var le, I = arguments;
            return y === 0 ? v.data : (Z && (I = Z(I)), A ? le = A(I) : le = String(I[0]), v[le]);
          }), L = a(function() {
            var le, I = arguments;
            return y === 0 ? b.has("data") : (Z && (I = Z(I)), A ? le = A(I) : le = String(I[0]), le === null ? !1 : b.has(le));
          }), f(me, {
            __memoized__: n(!0),
            delete: n(z),
            clear: n(b.clear),
            _get: n(te),
            _has: n(L)
          }), b;
        };
      }), ad = C(function(e, t) {
        var r = _t(), a = qr(), n = St(), o = rd(), l = Oi();
        t.exports = /* @__PURE__ */ i(function u(s) {
          var c, d, f;
          if (r(s), c = Object(arguments[1]), c.async && c.promise)
            throw new Error("Options 'async' and 'promise' cannot be used together");
          return hasOwnProperty.call(s, "__memoized__") && !c.force ? s : (d = l(c.length, s.length, c.async && n.async), f = o(s, d, c), a(n, function(p, m) {
            c[m] && p(c[m], f, c);
          }), u.__profiler__ && u.__profiler__(f), f.updateEnv(), f.memoized);
        }, "self2");
      }), nd = C(function(e, t) {
        t.exports = function(r) {
          var a, n, o = r.length;
          if (!o)
            return "";
          for (a = String(r[n = 0]); --o; )
            a += "" + r[++n];
          return a;
        };
      }), id = C(function(e, t) {
        t.exports = function(r) {
          return r ? function(a) {
            for (var n = String(a[0]), o = 0, l = r; --l; )
              n += "" + a[++o];
            return n;
          } : function() {
            return "";
          };
        };
      }), od = C(function(e, t) {
        t.exports = function() {
          var r = Number.isNaN;
          return typeof r != "function" ? !1 : !r({}) && r(NaN) && !r(34);
        };
      }), ld = C(function(e, t) {
        t.exports = function(r) {
          return r !== r;
        };
      }), ud = C(function(e, t) {
        t.exports = od()() ? Number.isNaN : ld();
      }), Na = C(function(e, t) {
        var r = ud(), a = Tt(), n = Ht(), o = Array.prototype.indexOf, l = Object.prototype.hasOwnProperty, u = Math.abs, s = Math.floor;
        t.exports = function(c) {
          var d, f, p, m;
          if (!r(c))
            return o.apply(this, arguments);
          for (f = a(n(this).length), p = arguments[1], isNaN(p) ? p = 0 : p >= 0 ? p = s(p) : p = a(this.length) - s(u(p)), d = p; d < f; ++d)
            if (l.call(this, d) && (m = this[d], r(m)))
              return d;
          return -1;
        };
      }), sd = C(function(e, t) {
        var r = Na(), a = Object.create;
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
      }), cd = C(function(e, t) {
        var r = Na();
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
      }), dd = C(function(e, t) {
        var r = Na(), a = Object.create;
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
      }), qi = C(function(e, t) {
        var r = _t(), a = qr(), n = Function.prototype.call;
        t.exports = function(o, l) {
          var u = {}, s = arguments[2];
          return r(l), a(o, function(c, d, f, p) {
            u[d] = n.call(l, s, c, d, f, p);
          }), u;
        };
      }), Ma = C(function(e, t) {
        var r = /* @__PURE__ */ i(function(o) {
          if (typeof o != "function")
            throw new TypeError(o + " is not a function");
          return o;
        }, "ensureCallable"), a = /* @__PURE__ */ i(function(o) {
          var l = T.createTextNode(""), u, s, c = 0;
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
          if ((typeof process > "u" ? "undefined" : N(process)) === "object" && process && typeof process.nextTick == "function")
            return process.nextTick;
          if (typeof queueMicrotask == "function")
            return function(n) {
              queueMicrotask(r(n));
            };
          if ((typeof T > "u" ? "undefined" : N(T)) === "object" && T) {
            if (typeof MutationObserver == "function")
              return a(MutationObserver);
            if (typeof WebKitMutationObserver == "function")
              return a(WebKitMutationObserver);
          }
          return typeof setImmediate == "function" ? function(n) {
            setImmediate(r(n));
          } : typeof setTimeout == "function" || (typeof setTimeout > "u" ? "undefined" : N(setTimeout)) === "object" ? function(n) {
            setTimeout(r(n), 0);
          } : null;
        }();
      }), fd = C(function() {
        var e = Pa(), t = qi(), r = Pi(), a = Ni(), n = Ma(), o = Array.prototype.slice, l = Function.prototype.apply, u = Object.create;
        St().async = function(s, c) {
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
                var k;
                hasOwnProperty.call(f, v) ? (k = f[v], c.emit("getasync", v, A, E), l.call(b, k.context, k.args)) : (h = b, y = E, w = A, p.apply(E, A));
              });
            }
          }), c.original = function() {
            var v, b, E, A;
            return h ? (v = e(arguments), b = /* @__PURE__ */ i(function k(M) {
              var B, z, te = k.id;
              if (te == null) {
                n(l.bind(k, this, arguments));
                return;
              }
              if (delete k.id, B = d[te], delete d[te], !!B)
                return z = e(arguments), c.has(te) && (M ? c.delete(te) : (f[te] = {
                  context: this,
                  args: z
                }, c.emit("setasync", te, typeof B == "function" ? 1 : B.length))), typeof B == "function" ? A = l.call(B, this, z) : B.forEach(function(L) {
                  A = l.call(L, this, z);
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
      }), pd = C(function(e, t) {
        var r = Array.prototype.forEach, a = Object.create;
        t.exports = function(n) {
          var o = a(null);
          return r.call(arguments, function(l) {
            o[l] = !0;
          }), o;
        };
      }), Li = C(function(e, t) {
        t.exports = function(r) {
          return typeof r == "function";
        };
      }), md = C(function(e, t) {
        var r = Li();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            throw new TypeError("Passed argument cannot be stringifed");
          }
        };
      }), hd = C(function(e, t) {
        var r = Ht(), a = md();
        t.exports = function(n) {
          return a(r(n));
        };
      }), vd = C(function(e, t) {
        var r = Li();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            return "<Non-coercible to string value>";
          }
        };
      }), gd = C(function(e, t) {
        var r = vd(), a = /[\n\r\u2028\u2029]/g;
        t.exports = function(n) {
          var o = r(n);
          return o.length > 100 && (o = o.slice(0, 99) + "\u2026"), o = o.replace(a, function(l) {
            return JSON.stringify(l).slice(1, -1);
          }), o;
        };
      }), Vi = C(function(e, t) {
        t.exports = r, t.exports.default = r;
        function r(a) {
          return !!a && (N(a) === "object" || typeof a == "function") && typeof a.then == "function";
        }
        i(r, "isPromise");
      }), bd = C(function() {
        var e = qi(), t = pd(), r = hd(), a = gd(), n = Vi(), o = Ma(), l = Object.create, u = t("then", "then:finally", "done", "done:finally");
        St().promise = function(s, c) {
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
              var B = d[m];
              if (w)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              !B || (delete d[m], f[m] = M, c.emit("setasync", m, B));
            }, "onSuccess"), b = /* @__PURE__ */ i(function() {
              w = !0, d[m] && (delete d[m], delete p[m], c.delete(m));
            }, "onFailure"), E = s;
            if (E || (E = "then"), E === "then") {
              var A = /* @__PURE__ */ i(function() {
                o(b);
              }, "nextTickFailure");
              y = y.then(function(k) {
                o(v.bind(this, k));
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
      }), yd = C(function() {
        var e = _t(), t = qr(), r = St(), a = Function.prototype.apply;
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
      }), Dd = C(function(e, t) {
        t.exports = 2147483647;
      }), wd = C(function(e, t) {
        var r = Tt(), a = Dd();
        t.exports = function(n) {
          if (n = r(n), n > a)
            throw new TypeError(n + " exceeds maximum possible timeout");
          return n;
        };
      }), _d = C(function() {
        var e = Pa(), t = qr(), r = Ma(), a = Vi(), n = wd(), o = St(), l = Function.prototype, u = Math.max, s = Math.min, c = Object.create;
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
      }), xd = C(function(e, t) {
        var r = Tt(), a = Object.create, n = Object.prototype.hasOwnProperty;
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
      }), Ed = C(function() {
        var e = Tt(), t = xd(), r = St();
        r.max = function(a, n, o) {
          var l, u, s;
          a = e(a), a && (u = t(a), l = o.async && r.async || o.promise && r.promise ? "async" : "", n.on("set" + l, s = /* @__PURE__ */ i(function(d) {
            d = u.hit(d), d !== void 0 && n.delete(d);
          }, "hit")), n.on("get" + l, s), n.on("delete" + l, u.delete), n.on("clear" + l, u.clear));
        };
      }), Ad = C(function() {
        var e = Ot(), t = St(), r = Object.create, a = Object.defineProperties;
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
      }), ji = C(function(e, t) {
        var r = Si(), a = Oi(), n = ad();
        t.exports = function(o) {
          var l = r(arguments[1]), u;
          return l.normalizer || (u = l.length = a(l.length, o.length, l.async), u !== 0 && (l.primitive ? u === !1 ? l.normalizer = nd() : u > 1 && (l.normalizer = id()(u)) : u === !1 ? l.normalizer = sd()() : u === 1 ? l.normalizer = cd()() : l.normalizer = dd()(u))), l.async && fd(), l.promise && bd(), l.dispose && yd(), l.maxAge && _d(), l.max && Ed(), l.refCounter && Ad(), n(o, l);
        };
      }), Hi = C(function(e, t) {
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
            if ((typeof globalThis > "u" ? "undefined" : N(globalThis)) !== "object")
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
                  if (typeof Qe < "u")
                    return Qe;
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
      }), Fd = C(function(e, t) {
        (function(r, a) {
          N(e) === "object" && typeof t < "u" ? t.exports = a() : r.ES6Promise = a();
        })(e, function() {
          function r(x) {
            var R = N(x);
            return x !== null && (R === "object" || R === "function");
          }
          i(r, "objectOrFunction");
          function a(x) {
            return typeof x == "function";
          }
          i(a, "isFunction");
          var n = void 0;
          Array.isArray ? n = Array.isArray : n = /* @__PURE__ */ i(function(R) {
            return Object.prototype.toString.call(R) === "[object Array]";
          }, "_isArray");
          var o = n, l = 0, u = void 0, s = void 0, c = /* @__PURE__ */ i(function(R, S) {
            M[l] = R, M[l + 1] = S, l += 2, l === 2 && (s ? s(B) : te());
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
              return process.nextTick(B);
            };
          }
          i(v, "useNextTick");
          function b() {
            return typeof u < "u" ? function() {
              u(B);
            } : k();
          }
          i(b, "useVertxTimer");
          function E() {
            var x = 0, R = new h(B), S = T.createTextNode("");
            return R.observe(S, {
              characterData: !0
            }), function() {
              S.data = x = ++x % 2;
            };
          }
          i(E, "useMutationObserver");
          function A() {
            var x = new MessageChannel();
            return x.port1.onmessage = B, function() {
              return x.port2.postMessage(0);
            };
          }
          i(A, "useMessageChannel");
          function k() {
            var x = setTimeout;
            return function() {
              return x(B, 1);
            };
          }
          i(k, "useSetTimeout");
          var M = new Array(1e3);
          function B() {
            for (var x = 0; x < l; x += 2) {
              var R = M[x], S = M[x + 1];
              R(S), M[x] = void 0, M[x + 1] = void 0;
            }
            l = 0;
          }
          i(B, "flush");
          function z() {
            try {
              var x = Function("return this")().require("vertx");
              return u = x.runOnLoop || x.runOnContext, b();
            } catch {
              return k();
            }
          }
          i(z, "attemptVertx");
          var te = void 0;
          y ? te = v() : h ? te = E() : w ? te = A() : p === void 0 ? te = z() : te = k();
          function L(x, R) {
            var S = this, j = new this.constructor(re);
            j[W] === void 0 && Se(j);
            var K = S._state;
            if (K) {
              var ae = arguments[K - 1];
              c(function() {
                return Ee(K, j, ae, S._result);
              });
            } else
              _e(S, j, x, R);
            return j;
          }
          i(L, "then");
          function Q(x) {
            var R = this;
            if (x && N(x) === "object" && x.constructor === R)
              return x;
            var S = new R(re);
            return G(S, x), S;
          }
          i(Q, "resolve$1");
          var W = Math.random().toString(36).substring(2);
          function re() {
          }
          i(re, "noop3");
          var ue = void 0, me = 1, Z = 2;
          function le() {
            return new TypeError("You cannot resolve a promise with itself");
          }
          i(le, "selfFulfillment");
          function I() {
            return new TypeError("A promises callback cannot return that same promise.");
          }
          i(I, "cannotReturnOwn");
          function de(x, R, S, j) {
            try {
              x.call(R, S, j);
            } catch (K) {
              return K;
            }
          }
          i(de, "tryThen");
          function _(x, R, S) {
            c(function(j) {
              var K = !1, ae = de(S, R, function(Me) {
                K || (K = !0, R !== Me ? G(j, Me) : $(j, Me));
              }, function(Me) {
                K || (K = !0, H(j, Me));
              }, "Settle: " + (j._label || " unknown promise"));
              !K && ae && (K = !0, H(j, ae));
            }, x);
          }
          i(_, "handleForeignThenable");
          function U(x, R) {
            R._state === me ? $(x, R._result) : R._state === Z ? H(x, R._result) : _e(R, void 0, function(S) {
              return G(x, S);
            }, function(S) {
              return H(x, S);
            });
          }
          i(U, "handleOwnThenable");
          function P(x, R, S) {
            R.constructor === x.constructor && S === L && R.constructor.resolve === Q ? U(x, R) : S === void 0 ? $(x, R) : a(S) ? _(x, R, S) : $(x, R);
          }
          i(P, "handleMaybeThenable");
          function G(x, R) {
            if (x === R)
              H(x, le());
            else if (r(R)) {
              var S = void 0;
              try {
                S = R.then;
              } catch (j) {
                H(x, j);
                return;
              }
              P(x, R, S);
            } else
              $(x, R);
          }
          i(G, "resolve");
          function ve(x) {
            x._onerror && x._onerror(x._result), xe(x);
          }
          i(ve, "publishRejection");
          function $(x, R) {
            x._state === ue && (x._result = R, x._state = me, x._subscribers.length !== 0 && c(xe, x));
          }
          i($, "fulfill");
          function H(x, R) {
            x._state === ue && (x._state = Z, x._result = R, c(ve, x));
          }
          i(H, "reject");
          function _e(x, R, S, j) {
            var K = x._subscribers, ae = K.length;
            x._onerror = null, K[ae] = R, K[ae + me] = S, K[ae + Z] = j, ae === 0 && x._state && c(xe, x);
          }
          i(_e, "subscribe2");
          function xe(x) {
            var R = x._subscribers, S = x._state;
            if (R.length !== 0) {
              for (var j = void 0, K = void 0, ae = x._result, Me = 0; Me < R.length; Me += 3)
                j = R[Me], K = R[Me + S], j ? Ee(S, j, K, ae) : K(ae);
              x._subscribers.length = 0;
            }
          }
          i(xe, "publish");
          function Ee(x, R, S, j) {
            var K = a(S), ae = void 0, Me = void 0, sr = !0;
            if (K) {
              try {
                ae = S(j);
              } catch (Ta) {
                sr = !1, Me = Ta;
              }
              if (R === ae) {
                H(R, I());
                return;
              }
            } else
              ae = j;
            R._state !== ue || (K && sr ? G(R, ae) : sr === !1 ? H(R, Me) : x === me ? $(R, ae) : x === Z && H(R, ae));
          }
          i(Ee, "invokeCallback");
          function Pe(x, R) {
            try {
              R(/* @__PURE__ */ i(function(j) {
                G(x, j);
              }, "resolvePromise"), /* @__PURE__ */ i(function(j) {
                H(x, j);
              }, "rejectPromise"));
            } catch (S) {
              H(x, S);
            }
          }
          i(Pe, "initializePromise");
          var Le = 0;
          function Ge() {
            return Le++;
          }
          i(Ge, "nextId");
          function Se(x) {
            x[W] = Le++, x._state = void 0, x._result = void 0, x._subscribers = [];
          }
          i(Se, "makePromise");
          function lt() {
            return new Error("Array Methods must be provided an Array");
          }
          i(lt, "validationError");
          var Ve = function() {
            function x(R, S) {
              this._instanceConstructor = R, this.promise = new R(re), this.promise[W] || Se(this.promise), o(S) ? (this.length = S.length, this._remaining = S.length, this._result = new Array(this.length), this.length === 0 ? $(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(S), this._remaining === 0 && $(this.promise, this._result))) : H(this.promise, lt());
            }
            return i(x, "Enumerator2"), x.prototype._enumerate = /* @__PURE__ */ i(function(S) {
              for (var j = 0; this._state === ue && j < S.length; j++)
                this._eachEntry(S[j], j);
            }, "_enumerate"), x.prototype._eachEntry = /* @__PURE__ */ i(function(S, j) {
              var K = this._instanceConstructor, ae = K.resolve;
              if (ae === Q) {
                var Me = void 0, sr = void 0, Ta = !1;
                try {
                  Me = S.then;
                } catch (xi) {
                  Ta = !0, sr = xi;
                }
                if (Me === L && S._state !== ue)
                  this._settledAt(S._state, j, S._result);
                else if (typeof Me != "function")
                  this._remaining--, this._result[j] = S;
                else if (K === ye) {
                  var _i = new K(re);
                  Ta ? H(_i, sr) : P(_i, S, Me), this._willSettleAt(_i, j);
                } else
                  this._willSettleAt(new K(function(xi) {
                    return xi(S);
                  }), j);
              } else
                this._willSettleAt(ae(S), j);
            }, "_eachEntry"), x.prototype._settledAt = /* @__PURE__ */ i(function(S, j, K) {
              var ae = this.promise;
              ae._state === ue && (this._remaining--, S === Z ? H(ae, K) : this._result[j] = K), this._remaining === 0 && $(ae, this._result);
            }, "_settledAt"), x.prototype._willSettleAt = /* @__PURE__ */ i(function(S, j) {
              var K = this;
              _e(S, void 0, function(ae) {
                return K._settledAt(me, j, ae);
              }, function(ae) {
                return K._settledAt(Z, j, ae);
              });
            }, "_willSettleAt"), x;
          }();
          function De(x) {
            return new Ve(this, x).promise;
          }
          i(De, "all");
          function Ne(x) {
            var R = this;
            return o(x) ? new R(function(S, j) {
              for (var K = x.length, ae = 0; ae < K; ae++)
                R.resolve(x[ae]).then(S, j);
            }) : new R(function(S, j) {
              return j(new TypeError("You must pass an array to race."));
            });
          }
          i(Ne, "race");
          function Ce(x) {
            var R = this, S = new R(re);
            return H(S, x), S;
          }
          i(Ce, "reject$1");
          function ke() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }
          i(ke, "needsResolver");
          function Oe() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }
          i(Oe, "needsNew");
          var ye = function() {
            function x(R) {
              this[W] = Ge(), this._result = this._state = void 0, this._subscribers = [], re !== R && (typeof R != "function" && ke(), this instanceof x ? Pe(this, R) : Oe());
            }
            return i(x, "Promise2"), x.prototype.catch = /* @__PURE__ */ i(function(S) {
              return this.then(null, S);
            }, "_catch"), x.prototype.finally = /* @__PURE__ */ i(function(S) {
              var j = this, K = j.constructor;
              return a(S) ? j.then(function(ae) {
                return K.resolve(S()).then(function() {
                  return ae;
                });
              }, function(ae) {
                return K.resolve(S()).then(function() {
                  throw ae;
                });
              }) : j.then(S, S);
            }, "_finally"), x;
          }();
          ye.prototype.then = L, ye.all = De, ye.race = Ne, ye.resolve = Q, ye.reject = Ce, ye._setScheduler = d, ye._setAsap = f, ye._asap = c;
          function fe() {
            var x = void 0;
            if (typeof Qe < "u")
              x = Qe;
            else if (typeof self < "u")
              x = self;
            else
              try {
                x = Function("return this")();
              } catch {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
            var R = x.Promise;
            if (R) {
              var S = null;
              try {
                S = Object.prototype.toString.call(R.resolve());
              } catch {
              }
              if (S === "[object Promise]" && !R.cast)
                return;
            }
            x.Promise = ye;
          }
          return i(fe, "polyfill"), ye.polyfill = fe, ye.Promise = ye, ye;
        });
      }), Cd = C(function(e) {
        var t = void 0, r = 1e5, a = function() {
          var _ = Object.prototype.toString, U = Object.prototype.hasOwnProperty;
          return {
            Class: /* @__PURE__ */ i(function(G) {
              return _.call(G).replace(/^\[object *|\]$/g, "");
            }, "Class"),
            HasProperty: /* @__PURE__ */ i(function(G, ve) {
              return ve in G;
            }, "HasProperty"),
            HasOwnProperty: /* @__PURE__ */ i(function(G, ve) {
              return U.call(G, ve);
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
        }(), n = Math.LN2, o = Math.abs, l = Math.floor, u = Math.log, s = Math.min, c = Math.pow, d = Math.round;
        function f(_) {
          if (m && p) {
            var U = m(_), P;
            for (P = 0; P < U.length; P += 1)
              p(_, U[P], {
                value: _[U[P]],
                writable: !1,
                enumerable: !1,
                configurable: !1
              });
          }
        }
        i(f, "configureProperties");
        var p;
        Object.defineProperty && function() {
          try {
            return Object.defineProperty({}, "x", {}), !0;
          } catch {
            return !1;
          }
        }() ? p = Object.defineProperty : p = /* @__PURE__ */ i(function(U, P, G) {
          if (!U === Object(U))
            throw new TypeError("Object.defineProperty called on non-object");
          return a.HasProperty(G, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(U, P, G.get), a.HasProperty(G, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(U, P, G.set), a.HasProperty(G, "value") && (U[P] = G.value), U;
        }, "defineProp");
        var m = Object.getOwnPropertyNames || function(_) {
          if (_ !== Object(_))
            throw new TypeError("Object.getOwnPropertyNames called on non-object");
          var U = [], P;
          for (P in _)
            a.HasOwnProperty(_, P) && U.push(P);
          return U;
        };
        function h(_) {
          if (!p)
            return;
          if (_.length > r)
            throw new RangeError("Array too large for polyfill");
          function U(G) {
            p(_, G, {
              get: /* @__PURE__ */ i(function() {
                return _._getter(G);
              }, "get"),
              set: /* @__PURE__ */ i(function($) {
                _._setter(G, $);
              }, "set"),
              enumerable: !0,
              configurable: !1
            });
          }
          i(U, "makeArrayAccessor");
          var P;
          for (P = 0; P < _.length; P += 1)
            U(P);
        }
        i(h, "makeArrayAccessors");
        function y(_, U) {
          var P = 32 - U;
          return _ << P >> P;
        }
        i(y, "as_signed");
        function w(_, U) {
          var P = 32 - U;
          return _ << P >>> P;
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
        function k(_) {
          return _ = d(Number(_)), [_ < 0 ? 0 : _ > 255 ? 255 : _ & 255];
        }
        i(k, "packU8Clamped");
        function M(_) {
          return [_ >> 8 & 255, _ & 255];
        }
        i(M, "packI16");
        function B(_) {
          return y(_[0] << 8 | _[1], 16);
        }
        i(B, "unpackI16");
        function z(_) {
          return [_ >> 8 & 255, _ & 255];
        }
        i(z, "packU16");
        function te(_) {
          return w(_[0] << 8 | _[1], 16);
        }
        i(te, "unpackU16");
        function L(_) {
          return [_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255, _ & 255];
        }
        i(L, "packI32");
        function Q(_) {
          return y(_[0] << 24 | _[1] << 16 | _[2] << 8 | _[3], 32);
        }
        i(Q, "unpackI32");
        function W(_) {
          return [_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255, _ & 255];
        }
        i(W, "packU32");
        function re(_) {
          return w(_[0] << 24 | _[1] << 16 | _[2] << 8 | _[3], 32);
        }
        i(re, "unpackU32");
        function ue(_, U, P) {
          var G = (1 << U - 1) - 1, ve, $, H, _e, xe, Ee, Pe;
          function Le(Ge) {
            var Se = l(Ge), lt = Ge - Se;
            return lt < 0.5 ? Se : lt > 0.5 || Se % 2 ? Se + 1 : Se;
          }
          for (i(Le, "roundToEven"), _ !== _ ? ($ = (1 << U) - 1, H = c(2, P - 1), ve = 0) : _ === 1 / 0 || _ === -1 / 0 ? ($ = (1 << U) - 1, H = 0, ve = _ < 0 ? 1 : 0) : _ === 0 ? ($ = 0, H = 0, ve = 1 / _ === -1 / 0 ? 1 : 0) : (ve = _ < 0, _ = o(_), _ >= c(2, 1 - G) ? ($ = s(l(u(_) / n), 1023), H = Le(_ / c(2, $) * c(2, P)), H / c(2, P) >= 2 && ($ = $ + 1, H = 1), $ > G ? ($ = (1 << U) - 1, H = 0) : ($ = $ + G, H = H - c(2, P))) : ($ = 0, H = Le(_ / c(2, 1 - G - P)))), xe = [], _e = P; _e; _e -= 1)
            xe.push(H % 2 ? 1 : 0), H = l(H / 2);
          for (_e = U; _e; _e -= 1)
            xe.push($ % 2 ? 1 : 0), $ = l($ / 2);
          for (xe.push(ve ? 1 : 0), xe.reverse(), Ee = xe.join(""), Pe = []; Ee.length; )
            Pe.push(parseInt(Ee.substring(0, 8), 2)), Ee = Ee.substring(8);
          return Pe;
        }
        i(ue, "packIEEE754");
        function me(_, U, P) {
          var G = [], ve, $, H, _e, xe, Ee, Pe, Le;
          for (ve = _.length; ve; ve -= 1)
            for (H = _[ve - 1], $ = 8; $; $ -= 1)
              G.push(H % 2 ? 1 : 0), H = H >> 1;
          return G.reverse(), _e = G.join(""), xe = (1 << U - 1) - 1, Ee = parseInt(_e.substring(0, 1), 2) ? -1 : 1, Pe = parseInt(_e.substring(1, 1 + U), 2), Le = parseInt(_e.substring(1 + U), 2), Pe === (1 << U) - 1 ? Le !== 0 ? NaN : Ee * (1 / 0) : Pe > 0 ? Ee * c(2, Pe - xe) * (1 + Le / c(2, P)) : Le !== 0 ? Ee * c(2, -(xe - 1)) * (Le / c(2, P)) : Ee < 0 ? -0 : 0;
        }
        i(me, "unpackIEEE754");
        function Z(_) {
          return me(_, 11, 52);
        }
        i(Z, "unpackF64");
        function le(_) {
          return ue(_, 11, 52);
        }
        i(le, "packF64");
        function I(_) {
          return me(_, 8, 23);
        }
        i(I, "unpackF32");
        function de(_) {
          return ue(_, 8, 23);
        }
        i(de, "packF32"), function() {
          var _ = /* @__PURE__ */ i(function(Se) {
            if (Se = a.ToInt32(Se), Se < 0)
              throw new RangeError("ArrayBuffer size is not a small enough positive integer");
            this.byteLength = Se, this._bytes = [], this._bytes.length = Se;
            var lt;
            for (lt = 0; lt < this.byteLength; lt += 1)
              this._bytes[lt] = 0;
            f(this);
          }, "ArrayBuffer2");
          e.ArrayBuffer = e.ArrayBuffer || _;
          var U = /* @__PURE__ */ i(function() {
          }, "ArrayBufferView2");
          function P(Ge, Se, lt) {
            var Ve;
            return Ve = /* @__PURE__ */ i(function(Ne, Ce, ke) {
              var Oe, ye, fe, x;
              if (!arguments.length || typeof arguments[0] == "number") {
                if (this.length = a.ToInt32(arguments[0]), ke < 0)
                  throw new RangeError("ArrayBufferView size is not a small enough positive integer");
                this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new _(this.byteLength), this.byteOffset = 0;
              } else if (N(arguments[0]) === "object" && arguments[0].constructor === Ve)
                for (Oe = arguments[0], this.length = Oe.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new _(this.byteLength), this.byteOffset = 0, fe = 0; fe < this.length; fe += 1)
                  this._setter(fe, Oe._getter(fe));
              else if (N(arguments[0]) === "object" && !(arguments[0] instanceof _ || a.Class(arguments[0]) === "ArrayBuffer"))
                for (ye = arguments[0], this.length = a.ToUint32(ye.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new _(this.byteLength), this.byteOffset = 0, fe = 0; fe < this.length; fe += 1)
                  x = ye[fe], this._setter(fe, Number(x));
              else if (N(arguments[0]) === "object" && (arguments[0] instanceof _ || a.Class(arguments[0]) === "ArrayBuffer")) {
                if (this.buffer = Ne, this.byteOffset = a.ToUint32(Ce), this.byteOffset > this.buffer.byteLength)
                  throw new RangeError("byteOffset out of range");
                if (this.byteOffset % this.BYTES_PER_ELEMENT)
                  throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
                if (arguments.length < 3) {
                  if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT)
                    throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
                  this.length = this.byteLength / this.BYTES_PER_ELEMENT;
                } else
                  this.length = a.ToUint32(ke), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
                if (this.byteOffset + this.byteLength > this.buffer.byteLength)
                  throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
              } else
                throw new TypeError("Unexpected argument type(s)");
              this.constructor = Ve, f(this), h(this);
            }, "ctor"), Ve.prototype = new U(), Ve.prototype.BYTES_PER_ELEMENT = Ge, Ve.prototype._pack = Se, Ve.prototype._unpack = lt, Ve.BYTES_PER_ELEMENT = Ge, Ve.prototype._getter = function(De) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              if (De = a.ToUint32(De), De >= this.length)
                return t;
              var Ne = [], Ce, ke;
              for (Ce = 0, ke = this.byteOffset + De * this.BYTES_PER_ELEMENT; Ce < this.BYTES_PER_ELEMENT; Ce += 1, ke += 1)
                Ne.push(this.buffer._bytes[ke]);
              return this._unpack(Ne);
            }, Ve.prototype.get = Ve.prototype._getter, Ve.prototype._setter = function(De, Ne) {
              if (arguments.length < 2)
                throw new SyntaxError("Not enough arguments");
              if (De = a.ToUint32(De), De >= this.length)
                return t;
              var Ce = this._pack(Ne), ke, Oe;
              for (ke = 0, Oe = this.byteOffset + De * this.BYTES_PER_ELEMENT; ke < this.BYTES_PER_ELEMENT; ke += 1, Oe += 1)
                this.buffer._bytes[Oe] = Ce[ke];
            }, Ve.prototype.set = function(De, Ne) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              var Ce, ke, Oe, ye, fe, x, R, S, j, K;
              if (N(arguments[0]) === "object" && arguments[0].constructor === this.constructor) {
                if (Ce = arguments[0], Oe = a.ToUint32(arguments[1]), Oe + Ce.length > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                if (S = this.byteOffset + Oe * this.BYTES_PER_ELEMENT, j = Ce.length * this.BYTES_PER_ELEMENT, Ce.buffer === this.buffer) {
                  for (K = [], fe = 0, x = Ce.byteOffset; fe < j; fe += 1, x += 1)
                    K[fe] = Ce.buffer._bytes[x];
                  for (fe = 0, R = S; fe < j; fe += 1, R += 1)
                    this.buffer._bytes[R] = K[fe];
                } else
                  for (fe = 0, x = Ce.byteOffset, R = S; fe < j; fe += 1, x += 1, R += 1)
                    this.buffer._bytes[R] = Ce.buffer._bytes[x];
              } else if (N(arguments[0]) === "object" && typeof arguments[0].length < "u") {
                if (ke = arguments[0], ye = a.ToUint32(ke.length), Oe = a.ToUint32(arguments[1]), Oe + ye > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                for (fe = 0; fe < ye; fe += 1)
                  x = ke[fe], this._setter(Oe + fe, Number(x));
              } else
                throw new TypeError("Unexpected argument type(s)");
            }, Ve.prototype.subarray = function(De, Ne) {
              function Ce(Oe, ye, fe) {
                return Oe < ye ? ye : Oe > fe ? fe : Oe;
              }
              i(Ce, "clamp2"), De = a.ToInt32(De), Ne = a.ToInt32(Ne), arguments.length < 1 && (De = 0), arguments.length < 2 && (Ne = this.length), De < 0 && (De = this.length + De), Ne < 0 && (Ne = this.length + Ne), De = Ce(De, 0, this.length), Ne = Ce(Ne, 0, this.length);
              var ke = Ne - De;
              return ke < 0 && (ke = 0), new this.constructor(this.buffer, this.byteOffset + De * this.BYTES_PER_ELEMENT, ke);
            }, Ve;
          }
          i(P, "makeConstructor");
          var G = P(1, v, b), ve = P(1, E, A), $ = P(1, k, A), H = P(2, M, B), _e = P(2, z, te), xe = P(4, L, Q), Ee = P(4, W, re), Pe = P(4, de, I), Le = P(8, le, Z);
          e.Int8Array = e.Int8Array || G, e.Uint8Array = e.Uint8Array || ve, e.Uint8ClampedArray = e.Uint8ClampedArray || $, e.Int16Array = e.Int16Array || H, e.Uint16Array = e.Uint16Array || _e, e.Int32Array = e.Int32Array || xe, e.Uint32Array = e.Uint32Array || Ee, e.Float32Array = e.Float32Array || Pe, e.Float64Array = e.Float64Array || Le;
        }(), function() {
          function _($, H) {
            return a.IsCallable($.get) ? $.get(H) : $[H];
          }
          i(_, "r");
          var U = function() {
            var $ = new e.Uint16Array([4660]), H = new e.Uint8Array($.buffer);
            return _(H, 0) === 18;
          }(), P = /* @__PURE__ */ i(function(H, _e, xe) {
            if (arguments.length === 0)
              H = new e.ArrayBuffer(0);
            else if (!(H instanceof e.ArrayBuffer || a.Class(H) === "ArrayBuffer"))
              throw new TypeError("TypeError");
            if (this.buffer = H || new e.ArrayBuffer(0), this.byteOffset = a.ToUint32(_e), this.byteOffset > this.buffer.byteLength)
              throw new RangeError("byteOffset out of range");
            if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = a.ToUint32(xe), this.byteOffset + this.byteLength > this.buffer.byteLength)
              throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
            f(this);
          }, "DataView2");
          function G($) {
            return function(H, _e) {
              if (H = a.ToUint32(H), H + $.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              H += this.byteOffset;
              var xe = new e.Uint8Array(this.buffer, H, $.BYTES_PER_ELEMENT), Ee = [], Pe;
              for (Pe = 0; Pe < $.BYTES_PER_ELEMENT; Pe += 1)
                Ee.push(_(xe, Pe));
              return Boolean(_e) === Boolean(U) && Ee.reverse(), _(new $(new e.Uint8Array(Ee).buffer), 0);
            };
          }
          i(G, "makeGetter"), P.prototype.getUint8 = G(e.Uint8Array), P.prototype.getInt8 = G(e.Int8Array), P.prototype.getUint16 = G(e.Uint16Array), P.prototype.getInt16 = G(e.Int16Array), P.prototype.getUint32 = G(e.Uint32Array), P.prototype.getInt32 = G(e.Int32Array), P.prototype.getFloat32 = G(e.Float32Array), P.prototype.getFloat64 = G(e.Float64Array);
          function ve($) {
            return function(H, _e, xe) {
              if (H = a.ToUint32(H), H + $.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              var Ee = new $([_e]), Pe = new e.Uint8Array(Ee.buffer), Le = [], Ge, Se;
              for (Ge = 0; Ge < $.BYTES_PER_ELEMENT; Ge += 1)
                Le.push(_(Pe, Ge));
              Boolean(xe) === Boolean(U) && Le.reverse(), Se = new e.Uint8Array(this.buffer, H, $.BYTES_PER_ELEMENT), Se.set(Le);
            };
          }
          i(ve, "makeSetter"), P.prototype.setUint8 = ve(e.Uint8Array), P.prototype.setInt8 = ve(e.Int8Array), P.prototype.setUint16 = ve(e.Uint16Array), P.prototype.setInt16 = ve(e.Int16Array), P.prototype.setUint32 = ve(e.Uint32Array), P.prototype.setInt32 = ve(e.Int32Array), P.prototype.setFloat32 = ve(e.Float32Array), P.prototype.setFloat64 = ve(e.Float64Array), e.DataView = e.DataView || P;
        }();
      }), kd = C(function(e) {
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
                throw new TypeError(f + " method called on incompatible receiver " + N(d));
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
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof D < "u" ? D : typeof Qe < "u" ? Qe : e);
      }), Rd = [{
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
      }], rt = {
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
      Rd.forEach(function(e) {
        var t = e.name, r = e.value, a = e.priority, n = e.group;
        rt[t] = r, rt[t + "_PRIO"] = a, rt[t + "_GROUP"] = n, rt.results[a] = r, rt.resultGroups[a] = n, rt.resultGroupMap[r] = n;
      }), Object.freeze(rt.results), Object.freeze(rt.resultGroups), Object.freeze(rt.resultGroupMap), Object.freeze(rt);
      var ee = rt;
      function Td() {
        (typeof console > "u" ? "undefined" : N(console)) === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      i(Td, "log");
      var It = Td, Sd = /[\t\r\n\f]/g, Od = function() {
        function e() {
          dr(this, e), this.parent = void 0;
        }
        return i(e, "AbstractVirtualNode"), fr(e, [{
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
            return (" " + a + " ").replace(Sd, " ").indexOf(n) >= 0;
          }, "hasClass")
        }]), e;
      }(), J = Od, Ba = {};
      Re(Ba, {
        DqElement: /* @__PURE__ */ i(function() {
          return at;
        }, "DqElement"),
        aggregate: /* @__PURE__ */ i(function() {
          return Vr;
        }, "aggregate"),
        aggregateChecks: /* @__PURE__ */ i(function() {
          return $i;
        }, "aggregateChecks"),
        aggregateNodeResults: /* @__PURE__ */ i(function() {
          return Wi;
        }, "aggregateNodeResults"),
        aggregateResult: /* @__PURE__ */ i(function() {
          return Gi;
        }, "aggregateResult"),
        areStylesSet: /* @__PURE__ */ i(function() {
          return Vd;
        }, "areStylesSet"),
        assert: /* @__PURE__ */ i(function() {
          return he;
        }, "assert"),
        checkHelper: /* @__PURE__ */ i(function() {
          return Ua;
        }, "checkHelper"),
        clone: /* @__PURE__ */ i(function() {
          return vt;
        }, "clone"),
        closest: /* @__PURE__ */ i(function() {
          return We;
        }, "closest"),
        collectResultsFromFrames: /* @__PURE__ */ i(function() {
          return _o;
        }, "collectResultsFromFrames"),
        contains: /* @__PURE__ */ i(function() {
          return Kt;
        }, "contains"),
        convertSelector: /* @__PURE__ */ i(function() {
          return Wr;
        }, "convertSelector"),
        cssParser: /* @__PURE__ */ i(function() {
          return ao;
        }, "cssParser"),
        deepMerge: /* @__PURE__ */ i(function() {
          return ln;
        }, "deepMerge"),
        escapeSelector: /* @__PURE__ */ i(function() {
          return Ae;
        }, "escapeSelector"),
        extendMetaData: /* @__PURE__ */ i(function() {
          return un;
        }, "extendMetaData"),
        filterHtmlAttrs: /* @__PURE__ */ i(function() {
          return zl;
        }, "filterHtmlAttrs"),
        finalizeRuleResult: /* @__PURE__ */ i(function() {
          return pr;
        }, "finalizeRuleResult"),
        findBy: /* @__PURE__ */ i(function() {
          return yr;
        }, "findBy"),
        getAllChecks: /* @__PURE__ */ i(function() {
          return Jr;
        }, "getAllChecks"),
        getAncestry: /* @__PURE__ */ i(function() {
          return $r;
        }, "getAncestry"),
        getBaseLang: /* @__PURE__ */ i(function() {
          return Mt;
        }, "getBaseLang"),
        getCheckMessage: /* @__PURE__ */ i(function() {
          return Yp;
        }, "getCheckMessage"),
        getCheckOption: /* @__PURE__ */ i(function() {
          return da;
        }, "getCheckOption"),
        getEnvironmentData: /* @__PURE__ */ i(function() {
          return At;
        }, "getEnvironmentData"),
        getFlattenedTree: /* @__PURE__ */ i(function() {
          return Nn;
        }, "getFlattenedTree"),
        getFrameContexts: /* @__PURE__ */ i(function() {
          return om;
        }, "getFrameContexts"),
        getFriendlyUriEnd: /* @__PURE__ */ i(function() {
          return Xi;
        }, "getFriendlyUriEnd"),
        getNodeAttributes: /* @__PURE__ */ i(function() {
          return Hr;
        }, "getNodeAttributes"),
        getNodeFromTree: /* @__PURE__ */ i(function() {
          return q;
        }, "getNodeFromTree"),
        getPreloadConfig: /* @__PURE__ */ i(function() {
          return ql;
        }, "getPreloadConfig"),
        getRootNode: /* @__PURE__ */ i(function() {
          return Dr;
        }, "getRootNode"),
        getRule: /* @__PURE__ */ i(function() {
          return El;
        }, "getRule"),
        getScroll: /* @__PURE__ */ i(function() {
          return gt;
        }, "getScroll"),
        getScrollState: /* @__PURE__ */ i(function() {
          return sm;
        }, "getScrollState"),
        getSelector: /* @__PURE__ */ i(function() {
          return za;
        }, "getSelector"),
        getSelectorData: /* @__PURE__ */ i(function() {
          return Ur;
        }, "getSelectorData"),
        getShadowSelector: /* @__PURE__ */ i(function() {
          return La;
        }, "getShadowSelector"),
        getStandards: /* @__PURE__ */ i(function() {
          return cm;
        }, "getStandards"),
        getStyleSheetFactory: /* @__PURE__ */ i(function() {
          return Cl;
        }, "getStyleSheetFactory"),
        getXpath: /* @__PURE__ */ i(function() {
          return ro;
        }, "getXpath"),
        injectStyle: /* @__PURE__ */ i(function() {
          return pm;
        }, "injectStyle"),
        isHidden: /* @__PURE__ */ i(function() {
          return mm;
        }, "isHidden"),
        isHtmlElement: /* @__PURE__ */ i(function() {
          return Ln;
        }, "isHtmlElement"),
        isNodeInContext: /* @__PURE__ */ i(function() {
          return Vn;
        }, "isNodeInContext"),
        isShadowRoot: /* @__PURE__ */ i(function() {
          return Zr;
        }, "isShadowRoot"),
        isValidLang: /* @__PURE__ */ i(function() {
          return ha;
        }, "isValidLang"),
        isXHTML: /* @__PURE__ */ i(function() {
          return zr;
        }, "isXHTML"),
        matchAncestry: /* @__PURE__ */ i(function() {
          return jn;
        }, "matchAncestry"),
        matches: /* @__PURE__ */ i(function() {
          return Ga;
        }, "matches"),
        matchesExpression: /* @__PURE__ */ i(function() {
          return $t;
        }, "matchesExpression"),
        matchesSelector: /* @__PURE__ */ i(function() {
          return zt;
        }, "matchesSelector"),
        memoize: /* @__PURE__ */ i(function() {
          return it;
        }, "memoize"),
        mergeResults: /* @__PURE__ */ i(function() {
          return Qr;
        }, "mergeResults"),
        nodeSorter: /* @__PURE__ */ i(function() {
          return Hn;
        }, "nodeSorter"),
        parseCrossOriginStylesheet: /* @__PURE__ */ i(function() {
          return Un;
        }, "parseCrossOriginStylesheet"),
        parseSameOriginStylesheet: /* @__PURE__ */ i(function() {
          return Tl;
        }, "parseSameOriginStylesheet"),
        parseStylesheet: /* @__PURE__ */ i(function() {
          return zn;
        }, "parseStylesheet"),
        performanceTimer: /* @__PURE__ */ i(function() {
          return Ie;
        }, "performanceTimer"),
        pollyfillElementsFromPoint: /* @__PURE__ */ i(function() {
          return Sl;
        }, "pollyfillElementsFromPoint"),
        preload: /* @__PURE__ */ i(function() {
          return Ll;
        }, "preload"),
        preloadCssom: /* @__PURE__ */ i(function() {
          return Il;
        }, "preloadCssom"),
        preloadMedia: /* @__PURE__ */ i(function() {
          return Ml;
        }, "preloadMedia"),
        processMessage: /* @__PURE__ */ i(function() {
          return qn;
        }, "processMessage"),
        publishMetaData: /* @__PURE__ */ i(function() {
          return pa;
        }, "publishMetaData"),
        querySelectorAll: /* @__PURE__ */ i(function() {
          return Ke;
        }, "querySelectorAll"),
        querySelectorAllFilter: /* @__PURE__ */ i(function() {
          return bt;
        }, "querySelectorAllFilter"),
        queue: /* @__PURE__ */ i(function() {
          return ut;
        }, "queue"),
        respondable: /* @__PURE__ */ i(function() {
          return nt;
        }, "respondable"),
        ruleShouldRun: /* @__PURE__ */ i(function() {
          return Hl;
        }, "ruleShouldRun"),
        select: /* @__PURE__ */ i(function() {
          return Wn;
        }, "select"),
        sendCommandToFrame: /* @__PURE__ */ i(function() {
          return bo;
        }, "sendCommandToFrame"),
        setScrollState: /* @__PURE__ */ i(function() {
          return Xm;
        }, "setScrollState"),
        shadowSelect: /* @__PURE__ */ i(function() {
          return Jm;
        }, "shadowSelect"),
        shouldPreload: /* @__PURE__ */ i(function() {
          return Bl;
        }, "shouldPreload"),
        toArray: /* @__PURE__ */ i(function() {
          return Ki;
        }, "toArray"),
        tokenList: /* @__PURE__ */ i(function() {
          return qe;
        }, "tokenList"),
        uniqueArray: /* @__PURE__ */ i(function() {
          return Er;
        }, "uniqueArray"),
        uuid: /* @__PURE__ */ i(function() {
          return T1;
        }, "uuid"),
        validInputTypes: /* @__PURE__ */ i(function() {
          return ma;
        }, "validInputTypes"),
        validLangs: /* @__PURE__ */ i(function() {
          return Gl;
        }, "validLangs")
      });
      function Id(e, t, r) {
        t = t.slice(), r && t.push(r);
        var a = t.map(function(n) {
          return e.indexOf(n);
        }).sort();
        return e[a.pop()];
      }
      i(Id, "aggregate");
      var Vr = Id, Pd = ee.CANTTELL_PRIO, Nd = ee.FAIL_PRIO, jr = [];
      jr[ee.PASS_PRIO] = !0, jr[ee.CANTTELL_PRIO] = null, jr[ee.FAIL_PRIO] = !1;
      var zi = ["any", "all", "none"];
      function Ui(e, t) {
        return zi.reduce(function(r, a) {
          return r[a] = (e[a] || []).map(function(n) {
            return t(n, a);
          }), r;
        }, {});
      }
      i(Ui, "anyAllNone");
      function Md(e) {
        var t = Object.assign({}, e);
        Ui(t, function(n, o) {
          var l = typeof n.result > "u" ? -1 : jr.indexOf(n.result);
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
        return zi.forEach(function(n) {
          t[n] = t[n].filter(function(o) {
            return o.priority === t.priority && o.priority === r[n];
          }), t[n].forEach(function(o) {
            return a.push(o.impact);
          });
        }), [Pd, Nd].includes(t.priority) ? t.impact = Vr(ee.impact, a) : t.impact = null, Ui(t, function(n) {
          delete n.result, delete n.priority;
        }), t.result = ee.results[t.priority], delete t.priority, t;
      }
      i(Md, "aggregateChecks");
      var $i = Md;
      function Bd(e) {
        var t = g._audit.rules.find(function(r) {
          return r.id === e.id;
        });
        return t && t.impact && e.nodes.forEach(function(r) {
          ["any", "all", "none"].forEach(function(a) {
            (r[a] || []).forEach(function(n) {
              n.impact = t.impact;
            });
          });
        }), Object.assign(e, Wi(e.nodes)), delete e.nodes, e;
      }
      i(Bd, "finalizeRuleResult");
      var pr = Bd;
      function qd(e) {
        var t = {};
        if (e = e.map(function(o) {
          if (o.any && o.all && o.none)
            return $i(o);
          if (Array.isArray(o.node))
            return pr(o);
          throw new TypeError("Invalid Result type");
        }), e && e.length) {
          var r = e.map(function(o) {
            return o.result;
          });
          t.result = Vr(ee.results, r, t.result);
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
          t.impact = Vr(ee.impact, n) || null;
        } else
          t.impact = null;
        return t;
      }
      i(qd, "aggregateNodeResults");
      var Wi = qd;
      function qa(e, t, r) {
        var a = Object.assign({}, t);
        a.nodes = (a[r] || []).concat(), ee.resultGroups.forEach(function(n) {
          delete a[n];
        }), e[r].push(a);
      }
      i(qa, "copyToGroup");
      function Ld(e) {
        var t = {};
        return ee.resultGroups.forEach(function(r) {
          return t[r] = [];
        }), e.forEach(function(r) {
          r.error ? qa(t, r, ee.CANTTELL_GROUP) : r.result === ee.NA ? qa(t, r, ee.NA_GROUP) : ee.resultGroups.forEach(function(a) {
            Array.isArray(r[a]) && r[a].length > 0 && qa(t, r, a);
          });
        }), t;
      }
      i(Ld, "aggregateResult");
      var Gi = Ld;
      function Yi(e, t, r) {
        var a = D.getComputedStyle(e, null);
        if (!a)
          return !1;
        for (var n = 0; n < t.length; ++n) {
          var o = t[n];
          if (a.getPropertyValue(o.property) === o.value)
            return !0;
        }
        return !e.parentNode || e.nodeName.toUpperCase() === r.toUpperCase() ? !1 : Yi(e.parentNode, t, r);
      }
      i(Yi, "areStylesSet");
      var Vd = Yi;
      function jd(e, t) {
        if (!e)
          throw new Error(t);
      }
      i(jd, "assert");
      var he = jd;
      function Hd(e) {
        return Array.prototype.slice.call(e);
      }
      i(Hd, "toArray");
      var Ki = Hd;
      function zd(e) {
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
      i(zd, "escapeSelector");
      var Ae = zd;
      function Ud() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return e.length !== 0 && (e.match(/[0-9]/g) || "").length >= e.length / 2;
      }
      i(Ud, "isMostlyNumbers");
      function mr(e, t) {
        return [e.substring(0, t), e.substring(t)];
      }
      i(mr, "splitString");
      function hr(e) {
        return e.replace(/\s+$/, "");
      }
      i(hr, "trimRight");
      function $d(e) {
        var t = e, r = "", a = "", n = "", o = "", l = "", u = "";
        if (e.includes("#")) {
          var s = mr(e, e.indexOf("#")), c = ge(s, 2);
          e = c[0], u = c[1];
        }
        if (e.includes("?")) {
          var d = mr(e, e.indexOf("?")), f = ge(d, 2);
          e = f[0], l = f[1];
        }
        if (e.includes("://")) {
          var p = e.split("://"), m = ge(p, 2);
          r = m[0], e = m[1];
          var h = mr(e, e.indexOf("/")), y = ge(h, 2);
          a = y[0], e = y[1];
        } else if (e.substr(0, 2) === "//") {
          e = e.substr(2);
          var w = mr(e, e.indexOf("/")), v = ge(w, 2);
          a = v[0], e = v[1];
        }
        if (a.substr(0, 4) === "www." && (a = a.substr(4)), a && a.includes(":")) {
          var b = mr(a, a.indexOf(":")), E = ge(b, 2);
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
      i($d, "uriParser");
      function Wd() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e.length <= 1 || e.substr(0, 5) === "data:" || e.substr(0, 11) === "javascript:" || e.includes("?"))) {
          var r = t.currentDomain, a = t.maxLength, n = a === void 0 ? 25 : a, o = $d(e), l = o.path, u = o.domain, s = o.hash, c = l.substr(l.substr(0, l.length - 2).lastIndexOf("/") + 1);
          if (s)
            return c && (c + s).length <= n ? hr(c + s) : c.length < 2 && s.length > 2 && s.length <= n ? hr(s) : void 0;
          if (u && u.length < n && l.length <= 1 || l === "/" + c && u && r && u !== r && (u + l).length <= n)
            return hr(u + l);
          var d = c.lastIndexOf(".");
          if ((d === -1 || d > 1) && (d !== -1 || c.length > 2) && c.length <= n && !c.match(/index(\.[a-zA-Z]{2-4})?/) && !Ud(c))
            return hr(c);
        }
      }
      i(Wd, "getFriendlyUriEnd");
      var Xi = Wd;
      function Gd(e) {
        return e.attributes instanceof D.NamedNodeMap ? e.attributes : e.cloneNode(!1).attributes;
      }
      i(Gd, "getNodeAttributes");
      var Hr = Gd, Yd = function() {
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
      }(), zt = Yd;
      function Kd(e) {
        return e.createElement ? e.createElement("A").localName === "A" : !1;
      }
      i(Kd, "isXHTML");
      var zr = Kd;
      function Xd(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t)
          return "";
        var a = t.getRootNode && t.getRootNode() || T;
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
      i(Xd, "getShadowSelector");
      var La = Xd, Va, Jd = ["class", "style", "id", "selected", "checked", "disabled", "tabindex", "aria-checked", "aria-selected", "aria-invalid", "aria-activedescendant", "aria-busy", "aria-disabled", "aria-expanded", "aria-grabbed", "aria-pressed", "aria-valuenow"], Qd = 31, Zd = /([\\"])/g, e1 = /(\r\n|\r|\n)/g;
      function ja(e) {
        return e.replace(Zd, "\\$1").replace(e1, "\\a ");
      }
      i(ja, "escapeAttribute");
      function Ji(e, t) {
        var r = t.name, a;
        if (r.indexOf("href") !== -1 || r.indexOf("src") !== -1) {
          var n = Xi(e.getAttribute(r));
          n ? a = Ae(t.name) + '$="' + ja(n) + '"' : a = Ae(t.name) + '="' + ja(e.getAttribute(r)) + '"';
        } else
          a = Ae(r) + '="' + ja(t.value) + '"';
        return a;
      }
      i(Ji, "getAttributeNameValue");
      function Ha(e, t) {
        return e.count < t.count ? -1 : e.count === t.count ? 0 : 1;
      }
      i(Ha, "countSort");
      function Qi(e) {
        return !Jd.includes(e.name) && e.name.indexOf(":") === -1 && (!e.value || e.value.length < Qd);
      }
      i(Qi, "filterAttributes");
      function Ur(e) {
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
              var d = Ae(c);
              t.classes[d] ? t.classes[d]++ : t.classes[d] = 1;
            }), u.hasAttributes() && Array.from(Hr(u)).filter(Qi).forEach(function(c) {
              var d = Ji(u, c);
              d && (t.attributes[d] ? t.attributes[d]++ : t.attributes[d] = 1);
            });
          }
          for (l.children.length && (a.push(r), r = l.children.slice()); !r.length && a.length; )
            r = a.pop();
        }, "_loop2"); r.length; )
          n();
        return t;
      }
      i(Ur, "_getSelectorData");
      function t1(e, t) {
        var r = [], a = t.classes, n = t.tags;
        return e.classList && Array.from(e.classList).forEach(function(o) {
          var l = Ae(o);
          a[l] < n[e.nodeName] && r.push({
            name: l,
            count: a[l],
            species: "class"
          });
        }), r.sort(Ha);
      }
      i(t1, "uncommonClasses");
      function r1(e, t) {
        var r = e.parentNode && Array.from(e.parentNode.children || "") || [], a = r.find(function(o) {
          return o !== e && zt(o, t);
        });
        if (a) {
          var n = 1 + r.indexOf(e);
          return ":nth-child(" + n + ")";
        } else
          return "";
      }
      i(r1, "getNthChildString");
      function a1(e) {
        if (!!e.getAttribute("id")) {
          var t = e.getRootNode && e.getRootNode() || T, r = "#" + Ae(e.getAttribute("id") || "");
          if (!r.match(/player_uid_/) && t.querySelectorAll(r).length === 1)
            return r;
        }
      }
      i(a1, "getElmId");
      function Zi(e) {
        return typeof Va > "u" && (Va = zr(T)), Ae(Va ? e.localName : e.nodeName.toLowerCase());
      }
      i(Zi, "getBaseSelector");
      function n1(e, t) {
        var r = [], a = t.attributes, n = t.tags;
        return e.hasAttributes() && Array.from(Hr(e)).filter(Qi).forEach(function(o) {
          var l = Ji(e, o);
          l && a[l] < n[e.nodeName] && r.push({
            name: l,
            count: a[l],
            species: "attribute"
          });
        }), r.sort(Ha);
      }
      i(n1, "uncommonAttributes");
      function i1(e, t) {
        var r = "", a, n = t1(e, t), o = n1(e, t);
        return n.length && n[0].count === 1 ? a = [n[0]] : o.length && o[0].count === 1 ? (a = [o[0]], r = Zi(e)) : (a = n.concat(o), a.sort(Ha), a = a.slice(0, 3), a.some(function(l) {
          return l.species === "class";
        }) ? a.sort(function(l, u) {
          return l.species !== u.species && l.species === "class" ? -1 : l.species === u.species ? 0 : 1;
        }) : r = Zi(e)), r += a.reduce(function(l, u) {
          switch (u.species) {
            case "class":
              return l + "." + u.name;
            case "attribute":
              return l + "[" + u.name + "]";
          }
          return l;
        }, "");
      }
      i(i1, "getThreeLeastCommonFeatures");
      function o1(e, t, r) {
        if (!g._selectorData)
          throw new Error("Expect axe._selectorData to be set up");
        var a = t.toRoot, n = a === void 0 ? !1 : a, o, l;
        do {
          var u = a1(e);
          u || (u = i1(e, g._selectorData), u += r1(e, u)), o ? o = u + " > " + o : o = u, l ? l = l.filter(function(s) {
            return zt(s, o);
          }) : l = Array.from(r.querySelectorAll(o)), e = e.parentElement;
        } while ((l.length > 1 || n) && e && e.nodeType !== 11);
        return l.length === 1 ? o : o.indexOf(" > ") !== -1 ? ":root" + o.substring(o.indexOf(" > ")) : ":root";
      }
      i(o1, "generateSelector");
      function za(e, t) {
        return La(o1, e, t);
      }
      i(za, "_getSelector");
      function eo(e) {
        var t = e.nodeName.toLowerCase(), r = e.parentElement;
        if (!r)
          return t;
        var a = "";
        if (t !== "head" && t !== "body" && r.children.length > 1) {
          var n = Array.prototype.indexOf.call(r.children, e) + 1;
          a = ":nth-child(".concat(n, ")");
        }
        return eo(r) + " > " + t + a;
      }
      i(eo, "generateAncestry");
      function $r(e, t) {
        return La(eo, e, t);
      }
      i($r, "_getAncestry");
      function to(e, t) {
        var r, a;
        if (!e)
          return [];
        if (!t && e.nodeType === 9)
          return t = [{
            str: "html"
          }], t;
        if (t = t || [], e.parentNode && e.parentNode !== e && (t = to(e.parentNode, t)), e.previousSibling) {
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
          var o = e.getAttribute && Ae(e.getAttribute("id"));
          o && e.ownerDocument.querySelectorAll("#" + o).length === 1 && (n.id = e.getAttribute("id")), a > 1 && (n.count = a), t.push(n);
        }
        return t;
      }
      i(to, "getXPathArray");
      function l1(e) {
        return e.reduce(function(t, r) {
          return r.id ? "/".concat(r.str, "[@id='").concat(r.id, "']") : t + "/".concat(r.str) + (r.count > 0 ? "[".concat(r.count, "]") : "");
        }, "");
      }
      i(l1, "xpathToString");
      function u1(e) {
        var t = to(e);
        return l1(t);
      }
      i(u1, "getXpath");
      var ro = u1, vr = {}, s1 = {
        set: /* @__PURE__ */ i(function(t, r) {
          c1(t), vr[t] = r;
        }, "set"),
        get: /* @__PURE__ */ i(function(t, r) {
          if (d1(r), t in vr)
            return vr[t];
          if (typeof r == "function") {
            var a = r();
            return he(a !== void 0, "Cache creator function should not return undefined"), this.set(t, a), vr[t];
          }
        }, "get"),
        clear: /* @__PURE__ */ i(function() {
          vr = {};
        }, "clear")
      };
      function c1(e) {
        he(typeof e == "string", "key must be a string, " + N(e) + " given"), he(e !== "", "key must not be empty");
      }
      i(c1, "validateKey");
      function d1(e) {
        he(typeof e == "function" || typeof e > "u", "creator must be a function or undefined, " + N(e) + " given");
      }
      i(d1, "validateCreator");
      var ne = s1;
      function f1(e, t) {
        var r = t || e;
        return ne.get("nodeMap") ? ne.get("nodeMap").get(r) : null;
      }
      i(f1, "getNodeFromTree");
      var q = f1;
      function p1(e, t) {
        if (t = t || 300, e.length > t) {
          var r = e.indexOf(">");
          e = e.substring(0, r + 1);
        }
        return e;
      }
      i(p1, "truncate");
      function m1(e) {
        if (!(e != null && e.outerHTML))
          return "";
        var t = e.outerHTML;
        return !t && typeof D.XMLSerializer == "function" && (t = new D.XMLSerializer().serializeToString(e)), p1(t || "");
      }
      i(m1, "getSource");
      function Ut(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (this.spec = n, e instanceof J ? (this._virtualNode = e, this._element = e.actualNode) : (this._element = e, this._virtualNode = q(e)), this.fromFrame = ((t = this.spec.selector) === null || t === void 0 ? void 0 : t.length) > 1, a.absolutePaths && (this._options = {
          toRoot: !0
        }), this.nodeIndexes = [], Array.isArray(this.spec.nodeIndexes) ? this.nodeIndexes = this.spec.nodeIndexes : typeof ((r = this._virtualNode) === null || r === void 0 ? void 0 : r.nodeIndex) == "number" && (this.nodeIndexes = [this._virtualNode.nodeIndex]), this.source = null, !g._audit.noHtml) {
          var o;
          this.source = (o = this.spec.source) !== null && o !== void 0 ? o : m1(this._element);
        }
      }
      i(Ut, "DqElement"), Ut.prototype = {
        get selector() {
          return this.spec.selector || [za(this.element, this._options)];
        },
        get ancestry() {
          return this.spec.ancestry || [$r(this.element)];
        },
        get xpath() {
          return this.spec.xpath || [ro(this.element)];
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
      }, Ut.fromFrame = /* @__PURE__ */ i(function(t, r, a) {
        var n = Ut.mergeSpecs(t, a);
        return new Ut(a.element, r, n);
      }, "fromFrame"), Ut.mergeSpecs = /* @__PURE__ */ i(function(t, r) {
        return ie({}, t, {
          selector: [].concat(oe(r.selector), oe(t.selector)),
          ancestry: [].concat(oe(r.ancestry), oe(t.ancestry)),
          xpath: [].concat(oe(r.xpath), oe(t.xpath)),
          nodeIndexes: [].concat(oe(r.nodeIndexes), oe(t.nodeIndexes))
        });
      }, "mergeSpec");
      var at = Ut;
      function h1(e, t, r, a) {
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
            !D.Node || (o = o instanceof D.Node ? [o] : Ki(o), o.every(function(l) {
              return l instanceof D.Node || l.actualNode;
            }) && (e.relatedNodes = o.map(function(l) {
              return new at(l, t);
            })));
          }, "relatedNodes")
        };
      }
      i(h1, "checkHelper");
      var Ua = h1;
      function $a(e) {
        var t, r, a, n, o = e;
        if ((t = D) !== null && t !== void 0 && t.Node && e instanceof D.Node || (r = D) !== null && r !== void 0 && r.HTMLCollection && e instanceof D.HTMLCollection)
          return e;
        if (e !== null && N(e) === "object")
          if (Array.isArray(e))
            for (o = [], a = 0, n = e.length; a < n; a++)
              o[a] = $a(e[a]);
          else {
            o = {};
            for (a in e)
              o[a] = $a(e[a]);
          }
        return o;
      }
      i($a, "clone");
      var vt = $a, v1 = ht(Ti()), gr = new v1.CssSelectorParser();
      gr.registerSelectorPseudos("not"), gr.registerSelectorPseudos("is"), gr.registerNestingOperators(">"), gr.registerAttrEqualityMods("^", "$", "*", "~");
      var ao = gr;
      function g1(e, t) {
        return e.props.nodeType === 1 && (t.tag === "*" || e.props.nodeName === t.tag);
      }
      i(g1, "matchesTag");
      function b1(e, t) {
        return !t.classes || t.classes.every(function(r) {
          return e.hasClass(r.value);
        });
      }
      i(b1, "matchesClasses");
      function y1(e, t) {
        return !t.attributes || t.attributes.every(function(r) {
          var a = e.attr(r.key);
          return a !== null && r.test(a);
        });
      }
      i(y1, "matchesAttributes");
      function D1(e, t) {
        return !t.id || e.props.id === t.id;
      }
      i(D1, "matchesId");
      function w1(e, t) {
        return !!(!t.pseudos || t.pseudos.every(function(r) {
          if (r.name === "not")
            return !r.expressions.some(function(a) {
              return $t(e, a);
            });
          if (r.name === "is")
            return r.expressions.some(function(a) {
              return $t(e, a);
            });
          throw new Error("the pseudo selector " + r.name + " has not yet been implemented");
        }));
      }
      i(w1, "matchesPseudos");
      function no(e, t) {
        return g1(e, t) && b1(e, t) && y1(e, t) && D1(e, t) && w1(e, t);
      }
      i(no, "matchExpression");
      var br = function() {
        var e = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g, t = "\\";
        return function(r) {
          return r.replace(e, t);
        };
      }(), Wa = /\\/g;
      function _1(e) {
        if (!!e)
          return e.map(function(t) {
            var r = t.name.replace(Wa, ""), a = (t.value || "").replace(Wa, ""), n, o;
            switch (t.operator) {
              case "^=":
                o = new RegExp("^" + br(a));
                break;
              case "$=":
                o = new RegExp(br(a) + "$");
                break;
              case "~=":
                o = new RegExp("(^|\\s)" + br(a) + "(\\s|$)");
                break;
              case "|=":
                o = new RegExp("^" + br(a) + "(-|$)");
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
      i(_1, "convertAttributes");
      function x1(e) {
        if (!!e)
          return e.map(function(t) {
            return t = t.replace(Wa, ""), {
              value: t,
              regexp: new RegExp("(^|\\s)" + br(t) + "(\\s|$)")
            };
          });
      }
      i(x1, "convertClasses");
      function E1(e) {
        if (!!e)
          return e.map(function(t) {
            var r;
            return ["is", "not"].includes(t.name) && (r = t.value, r = r.selectors ? r.selectors : [r], r = io(r)), {
              name: t.name,
              expressions: r,
              value: t.value
            };
          });
      }
      i(E1, "convertPseudos");
      function io(e) {
        return e.map(function(t) {
          for (var r = [], a = t.rule; a; )
            r.push({
              tag: a.tagName ? a.tagName.toLowerCase() : "*",
              combinator: a.nestingOperator ? a.nestingOperator : " ",
              id: a.id,
              attributes: _1(a.attrs),
              classes: x1(a.classNames),
              pseudos: E1(a.pseudos)
            }), a = a.rule;
          return r;
        });
      }
      i(io, "convertExpressions");
      function Wr(e) {
        var t = ao.parse(e);
        return t = t.selectors ? t.selectors : [t], io(t);
      }
      i(Wr, "_convertSelector");
      function oo(e, t, r, a) {
        if (!e)
          return !1;
        for (var n = Array.isArray(t), o = n ? t[r] : t, l = no(e, o); !l && a && e.parent; )
          e = e.parent, l = no(e, o);
        if (r > 0) {
          if ([" ", ">"].includes(o.combinator) === !1)
            throw new Error("axe.utils.matchesExpression does not support the combinator: " + o.combinator);
          l = l && oo(e.parent, t, r - 1, o.combinator === " ");
        }
        return l;
      }
      i(oo, "optimizedMatchesExpression");
      function $t(e, t, r) {
        return oo(e, t, t.length - 1, r);
      }
      i($t, "_matchesExpression");
      function A1(e, t) {
        var r = Wr(t);
        return r.some(function(a) {
          return $t(e, a);
        });
      }
      i(A1, "matches");
      var Ga = A1;
      function F1(e, t) {
        for (; e; ) {
          if (Ga(e, t))
            return e;
          if (typeof e.parent > "u")
            throw new TypeError("Cannot resolve parent for non-DOM nodes");
          e = e.parent;
        }
        return null;
      }
      i(F1, "closest");
      var We = F1;
      function Gr() {
      }
      i(Gr, "noop");
      function Ya(e) {
        if (typeof e != "function")
          throw new TypeError("Queue methods require functions as arguments");
      }
      i(Ya, "funcGuard");
      function C1() {
        var e = [], t = 0, r = 0, a = Gr, n = !1, o, l = /* @__PURE__ */ i(function(m) {
          o = m, setTimeout(function() {
            o != null && It("Uncaught error (of queue)", o);
          }, 1);
        }, "defaultFail"), u = l;
        function s(p) {
          return function(m) {
            e[p] = m, r -= 1, !r && a !== Gr && (n = !0, a(e));
          };
        }
        i(s, "createResolve");
        function c(p) {
          return a = Gr, u(p), e;
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
            if (N(m) === "object" && m.then && m.catch) {
              var h = m;
              m = /* @__PURE__ */ i(function(w, v) {
                h.then(w).catch(v);
              }, "fn");
            }
            if (Ya(m), o === void 0) {
              if (n)
                throw new Error("Queue already completed");
              return e.push(m), ++r, d(), f;
            }
          }, "defer"),
          then: /* @__PURE__ */ i(function(m) {
            if (Ya(m), a !== Gr)
              throw new Error("queue `then` already set");
            return o || (a = m, r || (n = !0, a(e))), f;
          }, "then"),
          catch: /* @__PURE__ */ i(function(m) {
            if (Ya(m), u !== l)
              throw new Error("queue `catch` already set");
            return o ? (m(o), o = null) : u = m, f;
          }, "_catch"),
          abort: c
        };
        return f;
      }
      i(C1, "queue");
      var ut = C1, Wt, Gt, Ka = D.crypto || D.msCrypto;
      !Gt && Ka && Ka.getRandomValues && (Xa = new Uint8Array(16), Gt = /* @__PURE__ */ i(function() {
        return Ka.getRandomValues(Xa), Xa;
      }, "whatwgRNG"));
      var Xa;
      Gt || (Ja = new Array(16), Gt = /* @__PURE__ */ i(function() {
        for (var t = 0, r; t < 16; t++)
          (t & 3) === 0 && (r = Math.random() * 4294967296), Ja[t] = r >>> ((t & 3) << 3) & 255;
        return Ja;
      }, "_rng"));
      for (var Ja, lo = typeof D.Buffer == "function" ? D.Buffer : Array, Qa = [], uo = {}, Yt = 0; Yt < 256; Yt++)
        Qa[Yt] = (Yt + 256).toString(16).substr(1), uo[Qa[Yt]] = Yt;
      function k1(e, t, r) {
        var a = t && r || 0, n = 0;
        for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(o) {
          n < 16 && (t[a + n++] = uo[o]);
        }); n < 16; )
          t[a + n++] = 0;
        return t;
      }
      i(k1, "parse");
      function Za(e, t) {
        var r = t || 0, a = Qa;
        return a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]];
      }
      i(Za, "unparse");
      var xt = Gt(), R1 = [xt[0] | 1, xt[1], xt[2], xt[3], xt[4], xt[5]], so = (xt[6] << 8 | xt[7]) & 16383, en = 0, tn = 0;
      function co(e, t, r) {
        var a = t && r || 0, n = t || [];
        e = e || {};
        var o = e.clockseq != null ? e.clockseq : so, l = e.msecs != null ? e.msecs : new Date().getTime(), u = e.nsecs != null ? e.nsecs : tn + 1, s = l - en + (u - tn) / 1e4;
        if (s < 0 && e.clockseq == null && (o = o + 1 & 16383), (s < 0 || l > en) && e.nsecs == null && (u = 0), u >= 1e4)
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        en = l, tn = u, so = o, l += 122192928e5;
        var c = ((l & 268435455) * 1e4 + u) % 4294967296;
        n[a++] = c >>> 24 & 255, n[a++] = c >>> 16 & 255, n[a++] = c >>> 8 & 255, n[a++] = c & 255;
        var d = l / 4294967296 * 1e4 & 268435455;
        n[a++] = d >>> 8 & 255, n[a++] = d & 255, n[a++] = d >>> 24 & 15 | 16, n[a++] = d >>> 16 & 255, n[a++] = o >>> 8 | 128, n[a++] = o & 255;
        for (var f = e.node || R1, p = 0; p < 6; p++)
          n[a + p] = f[p];
        return t || Za(n);
      }
      i(co, "v1");
      function Pt(e, t, r) {
        var a = t && r || 0;
        typeof e == "string" && (t = e == "binary" ? new lo(16) : null, e = null), e = e || {};
        var n = e.random || (e.rng || Gt)();
        if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t)
          for (var o = 0; o < 16; o++)
            t[a + o] = n[o];
        return t || Za(n);
      }
      i(Pt, "v4"), Wt = Pt, Wt.v1 = co, Wt.v4 = Pt, Wt.parse = k1, Wt.unparse = Za, Wt.BufferClass = lo, g._uuid = co();
      var T1 = Pt, S1 = Object.freeze(["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
      function O1(e) {
        var t = e.topic, r = e.channelId, a = e.message, n = e.messageId, o = e.keepalive, l = {
          channelId: r,
          topic: t,
          messageId: n,
          keepalive: !!o,
          source: fo()
        };
        return a instanceof Error ? l.error = {
          name: a.name,
          message: a.message,
          stack: a.stack
        } : l.payload = a, JSON.stringify(l);
      }
      i(O1, "stringifyMessage");
      function I1(e) {
        var t;
        try {
          t = JSON.parse(e);
        } catch {
          return;
        }
        if (!!P1(t)) {
          var r = t, a = r.topic, n = r.channelId, o = r.messageId, l = r.keepalive, u = N(t.error) === "object" ? N1(t.error) : t.payload;
          return {
            topic: a,
            message: u,
            messageId: o,
            channelId: n,
            keepalive: !!l
          };
        }
      }
      i(I1, "parseMessage");
      function P1(e) {
        return e !== null && N(e) === "object" && typeof e.channelId == "string" && e.source === fo();
      }
      i(P1, "isRespondableMessage");
      function N1(e) {
        var t = e.message || "Unknown error occurred", r = S1.includes(e.name) ? e.name : "Error", a = D[r] || Error;
        return e.stack && (t += `
` + e.stack.replace(e.message, "")), new a(t);
      }
      i(N1, "buildErrorObject");
      function fo() {
        var e = "axeAPI", t = "";
        return typeof g < "u" && g._audit && g._audit.application && (e = g._audit.application), typeof g < "u" && (t = g.version), e + "." + t;
      }
      i(fo, "getSource2");
      function rn(e) {
        mo(e), he(D.parent === e, "Source of the response must be the parent window.");
      }
      i(rn, "assertIsParentWindow");
      function po(e) {
        mo(e), he(e.parent === D, "Respondable target must be a frame in the current window");
      }
      i(po, "assertIsFrameWindow");
      function mo(e) {
        he(D !== e, "Messages can not be sent to the same window.");
      }
      i(mo, "assetNotGlobalWindow");
      var Yr = {};
      function M1(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        he(!Yr[e], "A replyHandler already exists for this message channel."), Yr[e] = {
          replyHandler: t,
          sendToParent: r
        };
      }
      i(M1, "storeReplyHandler");
      function B1(e) {
        return Yr[e];
      }
      i(B1, "getReplyHandler");
      function q1(e) {
        delete Yr[e];
      }
      i(q1, "deleteReplyHandler");
      var Kr = [];
      function an() {
        var e = "".concat(Pt(), ":").concat(Pt());
        return Kr.includes(e) ? an() : (Kr.push(e), e);
      }
      i(an, "createMessageId");
      function L1(e) {
        return Kr.includes(e) ? !1 : (Kr.push(e), !0);
      }
      i(L1, "isNewMessage");
      function nn(e, t, r, a) {
        if (typeof a == "function" && M1(t.channelId, a, r), r ? rn(e) : po(e), t.message instanceof Error && !r)
          return g.log(t.message), !1;
        var n = O1(ie({
          messageId: an()
        }, t)), o = g._audit.allowedOrigins;
        return !o || !o.length ? !1 : (o.forEach(function(l) {
          try {
            e.postMessage(n, l);
          } catch (u) {
            throw u instanceof e.DOMException ? new Error('allowedOrigins value "'.concat(l, '" is not a valid origin')) : u;
          }
        }), !0);
      }
      i(nn, "postMessage");
      function V1(e, t, r) {
        if (!e.parent !== D)
          return g.log(t);
        try {
          nn(e, {
            topic: null,
            channelId: r,
            message: t,
            messageId: an(),
            keepalive: !0
          }, !0);
        } catch (a) {
          return g.log(a);
        }
      }
      i(V1, "processError");
      function ho(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        return /* @__PURE__ */ i(function(n, o, l) {
          var u = {
            channelId: t,
            message: n,
            keepalive: o
          };
          nn(e, u, r, l);
        }, "respond");
      }
      i(ho, "createResponder");
      function j1(e) {
        var t = g._audit.allowedOrigins;
        return t && t.includes("*") || t.includes(e);
      }
      i(j1, "originIsAllowed");
      function H1(e, t) {
        var r = e.origin, a = e.data, n = e.source;
        try {
          var o = I1(a) || {}, l = o.channelId, u = o.message, s = o.messageId;
          if (!j1(r) || !L1(s))
            return;
          if (u instanceof Error && n.parent !== D)
            return g.log(u), !1;
          try {
            if (o.topic) {
              var c = ho(n, l);
              rn(n), t(o, c);
            } else
              z1(n, o);
          } catch (d) {
            V1(n, d, l);
          }
        } catch (d) {
          return g.log(d), !1;
        }
      }
      i(H1, "messageHandler");
      function z1(e, t) {
        var r = t.channelId, a = t.message, n = t.keepalive, o = B1(r) || {}, l = o.replyHandler, u = o.sendToParent;
        if (!!l) {
          u ? rn(e) : po(e);
          var s = ho(e, r, u);
          !n && r && q1(r);
          try {
            l(a, n, s);
          } catch (c) {
            g.log(c), s(c, n);
          }
        }
      }
      i(z1, "callReplyHandler");
      var U1 = {
        open: /* @__PURE__ */ i(function(t) {
          if (typeof D.addEventListener == "function") {
            var r = /* @__PURE__ */ i(function(n) {
              H1(n, t);
            }, "handler");
            return D.addEventListener("message", r, !1), function() {
              D.removeEventListener("message", r, !1);
            };
          }
        }, "open"),
        post: /* @__PURE__ */ i(function(t, r, a) {
          return typeof D.addEventListener != "function" ? !1 : nn(t, r, !1, a);
        }, "post")
      };
      function vo(e) {
        e.updateMessenger(U1);
      }
      i(vo, "setDefaultFrameMessenger");
      var Xr, go, on = {};
      function nt(e, t, r, a, n) {
        var o = {
          topic: t,
          message: r,
          channelId: "".concat(Pt(), ":").concat(Pt()),
          keepalive: a
        };
        return go(e, o, n);
      }
      i(nt, "_respondable");
      function $1(e, t) {
        var r = e.topic, a = e.message, n = e.keepalive, o = on[r];
        if (!!o)
          try {
            o(a, n, t);
          } catch (l) {
            g.log(l), t(l, n);
          }
      }
      i($1, "messageListener"), nt.updateMessenger = /* @__PURE__ */ i(function(t) {
        var r = t.open, a = t.post;
        he(typeof r == "function", "open callback must be a function"), he(typeof a == "function", "post callback must be a function"), Xr && Xr();
        var n = r($1);
        n ? (he(typeof n == "function", "open callback must return a cleanup function"), Xr = n) : Xr = null, go = a;
      }, "updateMessenger"), nt.subscribe = /* @__PURE__ */ i(function(t, r) {
        he(typeof r == "function", "Subscriber callback must be a function"), he(!on[t], "Topic ".concat(t, " is already registered to.")), on[t] = r;
      }, "subscribe"), nt.isInFrame = /* @__PURE__ */ i(function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D;
        return !!t.frameElement;
      }, "isInFrame"), vo(nt);
      function bo(e, t, r, a) {
        var n, o, l = e.contentWindow, u = (n = (o = t.options) === null || o === void 0 ? void 0 : o.pingWaitTime) !== null && n !== void 0 ? n : 500;
        if (!l) {
          It("Frame does not have a content window", e), r(null);
          return;
        }
        if (u === 0) {
          yo(e, t, r, a);
          return;
        }
        var s = setTimeout(function() {
          s = setTimeout(function() {
            t.debug ? a(Do("No response from frame", e)) : r(null);
          }, 0);
        }, u);
        nt(l, "axe.ping", null, void 0, function() {
          clearTimeout(s), yo(e, t, r, a);
        });
      }
      i(bo, "_sendCommandToFrame");
      function yo(e, t, r, a) {
        var n, o, l = (n = (o = t.options) === null || o === void 0 ? void 0 : o.frameWaitTime) !== null && n !== void 0 ? n : 6e4, u = e.contentWindow, s = setTimeout(/* @__PURE__ */ i(function() {
          a(Do("Axe in frame timed out", e));
        }, "collectResultFramesTimeout"), l);
        nt(u, "axe.start", t, void 0, function(c) {
          clearTimeout(s), c instanceof Error ? a(c) : r(c);
        });
      }
      i(yo, "callAxeStart");
      function Do(e, t) {
        var r;
        return g._tree && (r = za(t)), new Error(e + ": " + (r || t));
      }
      i(Do, "err");
      function W1(e) {
        var t = [];
        return t.concat(e.any || []).concat(e.all || []).concat(e.none || []);
      }
      i(W1, "getAllChecks");
      var Jr = W1;
      function G1(e, t, r) {
        if (Array.isArray(e))
          return e.find(function(a) {
            return N(a) === "object" && a[t] === r;
          });
      }
      i(G1, "findBy");
      var yr = G1;
      function Y1(e, t, r) {
        e.forEach(function(a) {
          a.node = at.fromFrame(a.node, t, r);
          var n = Jr(a);
          n.forEach(function(o) {
            o.relatedNodes = o.relatedNodes.map(function(l) {
              return at.fromFrame(l, t, r);
            });
          });
        });
      }
      i(Y1, "pushFrame");
      function K1(e, t) {
        for (var r = t[0].node, a = 0; a < e.length; a++) {
          var n = e[a].node, o = wo(n.nodeIndexes, r.nodeIndexes);
          if (o > 0 || o === 0 && r.selector.length < n.selector.length) {
            e.splice.apply(e, [a, 0].concat(oe(t)));
            return;
          }
        }
        e.push.apply(e, oe(t));
      }
      i(K1, "spliceNodes");
      function X1(e) {
        return !e || !e.results ? null : Array.isArray(e.results) ? e.results.length ? e.results : null : [e.results];
      }
      i(X1, "normalizeResult");
      function J1(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = X1(a);
          if (!(!n || !n.length)) {
            var o = Q1(a, t);
            n.forEach(function(l) {
              l.nodes && o && Y1(l.nodes, t, o);
              var u = yr(r, "id", l.id);
              u ? l.nodes.length && K1(u.nodes, l.nodes) : r.push(l);
            });
          }
        }), r.forEach(function(a) {
          a.nodes && a.nodes.sort(function(n, o) {
            return wo(n.node.nodeIndexes, o.node.nodeIndexes);
          });
        }), r;
      }
      i(J1, "mergeResults");
      function wo() {
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
      i(wo, "nodeIndexSort");
      var Qr = J1;
      function Q1(e, t) {
        return e.frameElement ? new at(e.frameElement, t) : e.frameSpec ? e.frameSpec : null;
      }
      i(Q1, "getFrameSpec");
      function _o(e, t, r, a, n, o) {
        var l = ut(), u = e.frames;
        u.forEach(function(s) {
          var c = s.node, d = je(s, Us);
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
            i(h, "callback"), bo(c, m, h, p);
          });
        }), l.then(function(s) {
          n(Qr(s, t));
        }).catch(o);
      }
      i(_o, "_collectResultsFromFrames");
      function Kt(e, t) {
        if (e.shadowId || t.shadowId) {
          do {
            if (e.shadowId === t.shadowId)
              return !0;
            t = t.parent;
          } while (t);
          return !1;
        }
        if (!e.actualNode)
          do {
            if (t === e)
              return !0;
            t = t.parent;
          } while (t);
        if (typeof e.actualNode.contains != "function") {
          var r = e.actualNode.compareDocumentPosition(t.actualNode);
          return !!(r & 16);
        }
        return e.actualNode.contains(t.actualNode);
      }
      i(Kt, "_contains");
      function xo() {
        for (var e = {}, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
          r[a] = arguments[a];
        return r.forEach(function(n) {
          if (!(!n || N(n) !== "object" || Array.isArray(n)))
            for (var o = 0, l = Object.keys(n); o < l.length; o++) {
              var u = l[o];
              !e.hasOwnProperty(u) || N(n[u]) !== "object" || Array.isArray(e[u]) ? e[u] = n[u] : e[u] = xo(e[u], n[u]);
            }
        }), e;
      }
      i(xo, "deepMerge");
      var ln = xo;
      function Z1(e, t) {
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
      i(Z1, "extendMetaData");
      var un = Z1, ef = ["article", "aside", "blockquote", "body", "div", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "main", "nav", "p", "section", "span"];
      function tf(e) {
        if (e.shadowRoot) {
          var t = e.nodeName.toLowerCase();
          if (ef.includes(t) || /^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))
            return !0;
        }
        return !1;
      }
      i(tf, "isShadowRoot");
      var Zr = tf, sn = {};
      Re(sn, {
        createGrid: /* @__PURE__ */ i(function() {
          return Qt;
        }, "createGrid"),
        findElmsInContext: /* @__PURE__ */ i(function() {
          return Eo;
        }, "findElmsInContext"),
        findNearbyElms: /* @__PURE__ */ i(function() {
          return hn;
        }, "findNearbyElms"),
        findUp: /* @__PURE__ */ i(function() {
          return Jt;
        }, "findUp"),
        findUpVirtual: /* @__PURE__ */ i(function() {
          return Xt;
        }, "findUpVirtual"),
        getComposedParent: /* @__PURE__ */ i(function() {
          return Be;
        }, "getComposedParent"),
        getElementByReference: /* @__PURE__ */ i(function() {
          return bn;
        }, "getElementByReference"),
        getElementCoordinates: /* @__PURE__ */ i(function() {
          return dn;
        }, "getElementCoordinates"),
        getElementStack: /* @__PURE__ */ i(function() {
          return _n;
        }, "getElementStack"),
        getRootNode: /* @__PURE__ */ i(function() {
          return He;
        }, "getRootNode"),
        getScrollOffset: /* @__PURE__ */ i(function() {
          return Vo;
        }, "getScrollOffset"),
        getTabbableElements: /* @__PURE__ */ i(function() {
          return Xo;
        }, "getTabbableElements"),
        getTextElementStack: /* @__PURE__ */ i(function() {
          return Jo;
        }, "getTextElementStack"),
        getViewportSize: /* @__PURE__ */ i(function() {
          return ea;
        }, "getViewportSize"),
        hasContent: /* @__PURE__ */ i(function() {
          return na;
        }, "hasContent"),
        hasContentVirtual: /* @__PURE__ */ i(function() {
          return wr;
        }, "hasContentVirtual"),
        hasLangText: /* @__PURE__ */ i(function() {
          return An;
        }, "hasLangText"),
        idrefs: /* @__PURE__ */ i(function() {
          return ot;
        }, "idrefs"),
        insertedIntoFocusOrder: /* @__PURE__ */ i(function() {
          return rl;
        }, "insertedIntoFocusOrder"),
        isCurrentPageLink: /* @__PURE__ */ i(function() {
          return gn;
        }, "isCurrentPageLink"),
        isFocusable: /* @__PURE__ */ i(function() {
          return Te;
        }, "isFocusable"),
        isHTML5: /* @__PURE__ */ i(function() {
          return il;
        }, "isHTML5"),
        isHiddenForEveryone: /* @__PURE__ */ i(function() {
          return Et;
        }, "isHiddenForEveryone"),
        isHiddenWithCSS: /* @__PURE__ */ i(function() {
          return Wf;
        }, "isHiddenWithCSS"),
        isInTabOrder: /* @__PURE__ */ i(function() {
          return ct;
        }, "isInTabOrder"),
        isInTextBlock: /* @__PURE__ */ i(function() {
          return Cn;
        }, "isInTextBlock"),
        isModalOpen: /* @__PURE__ */ i(function() {
          return _r;
        }, "isModalOpen"),
        isMultiline: /* @__PURE__ */ i(function() {
          return dl;
        }, "isMultiline"),
        isNativelyFocusable: /* @__PURE__ */ i(function() {
          return Fn;
        }, "isNativelyFocusable"),
        isNode: /* @__PURE__ */ i(function() {
          return fp;
        }, "isNode"),
        isOffscreen: /* @__PURE__ */ i(function() {
          return ta;
        }, "isOffscreen"),
        isOpaque: /* @__PURE__ */ i(function() {
          return Dp;
        }, "isOpaque"),
        isSkipLink: /* @__PURE__ */ i(function() {
          return kn;
        }, "isSkipLink"),
        isVisible: /* @__PURE__ */ i(function() {
          return Fp;
        }, "isVisible"),
        isVisibleOnScreen: /* @__PURE__ */ i(function() {
          return Ze;
        }, "isVisibleOnScreen"),
        isVisibleToScreenReaders: /* @__PURE__ */ i(function() {
          return Fe;
        }, "isVisibleToScreenReaders"),
        isVisualContent: /* @__PURE__ */ i(function() {
          return xn;
        }, "isVisualContent"),
        reduceToElementsBelowFloating: /* @__PURE__ */ i(function() {
          return fl;
        }, "reduceToElementsBelowFloating"),
        shadowElementsFromPoint: /* @__PURE__ */ i(function() {
          return Rp;
        }, "shadowElementsFromPoint"),
        urlPropsFromAttribute: /* @__PURE__ */ i(function() {
          return Np;
        }, "urlPropsFromAttribute"),
        visuallyContains: /* @__PURE__ */ i(function() {
          return ua;
        }, "visuallyContains"),
        visuallyOverlaps: /* @__PURE__ */ i(function() {
          return Rn;
        }, "visuallyOverlaps"),
        visuallySort: /* @__PURE__ */ i(function() {
          return yn;
        }, "visuallySort")
      });
      function rf(e) {
        var t = e.getRootNode && e.getRootNode() || T;
        return t === e && (t = T), t;
      }
      i(rf, "getRootNode");
      var Dr = rf, He = Dr;
      function af(e) {
        var t = e.context, r = e.value, a = e.attr, n = e.elm, o = n === void 0 ? "" : n, l, u = Ae(r);
        return t.nodeType === 9 || t.nodeType === 11 ? l = t : l = He(t), Array.from(l.querySelectorAll(o + "[" + a + "=" + u + "]"));
      }
      i(af, "findElmsInContext");
      var Eo = af;
      function nf(e, t) {
        var r;
        if (r = e.actualNode, !e.shadowId && typeof e.actualNode.closest == "function") {
          var a = e.actualNode.closest(t);
          return a || null;
        }
        do
          r = r.assignedSlot ? r.assignedSlot : r.parentNode, r && r.nodeType === 11 && (r = r.host);
        while (r && !zt(r, t) && r !== T.documentElement);
        return !r || !zt(r, t) ? null : r;
      }
      i(nf, "findUpVirtual");
      var Xt = nf;
      function of(e, t) {
        return Xt(q(e), t);
      }
      i(of, "findUp");
      var Jt = of, lf = ht(ji());
      g._memoizedFns = [];
      function uf(e) {
        var t = (0, lf.default)(e);
        return g._memoizedFns.push(t), t;
      }
      i(uf, "memoizeImplementation");
      var it = uf;
      function Ao(e, t) {
        return (e.left | 0) < (t.right | 0) && (e.right | 0) > (t.left | 0) && (e.top | 0) < (t.bottom | 0) && (e.bottom | 0) > (t.top | 0);
      }
      i(Ao, "_rectsOverlap");
      var sf = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, cf = /(\w+)\((\d+)/;
      function Fo(e) {
        return ["style", "script", "noscript", "template"].includes(e.props.nodeName);
      }
      i(Fo, "nativelyHidden");
      function Co(e) {
        return e.props.nodeName === "area" ? !1 : e.getComputedStylePropertyValue("display") === "none";
      }
      i(Co, "displayHidden");
      function ko(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !r && ["hidden", "collapse"].includes(e.getComputedStylePropertyValue("visibility"));
      }
      i(ko, "visibilityHidden");
      function Ro(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !!r && e.getComputedStylePropertyValue("content-visibility") === "hidden";
      }
      i(Ro, "contentVisibiltyHidden");
      function To(e) {
        return e.attr("aria-hidden") === "true";
      }
      i(To, "ariaHidden");
      function So(e) {
        return e.getComputedStylePropertyValue("opacity") === "0";
      }
      i(So, "opacityHidden");
      function Oo(e) {
        var t = gt(e.actualNode), r = parseInt(e.getComputedStylePropertyValue("height")), a = parseInt(e.getComputedStylePropertyValue("width"));
        return !!t && (r === 0 || a === 0);
      }
      i(Oo, "scrollHidden");
      function Io(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        var a = e.boundingClientRect, n = Po(e);
        return n.length ? n.some(function(o) {
          var l = o.boundingClientRect;
          return l.width < 2 || l.height < 2 ? !0 : !Ao(a, l);
        }) : !1;
      }
      i(Io, "overflowHidden");
      var Po = it(/* @__PURE__ */ i(function(t) {
        var r = [];
        if (!t)
          return r;
        var a = t.getComputedStylePropertyValue("overflow");
        return a === "hidden" && r.push(t), r.concat(Po(t.parent));
      }, "getOverflowHiddenAncestorsMemoized"));
      function No(e) {
        var t = e.getComputedStylePropertyValue("clip").match(sf), r = e.getComputedStylePropertyValue("clip-path").match(cf);
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
      i(No, "clipHidden");
      function cn(e, t) {
        var r = We(e, "map");
        if (!r)
          return !0;
        var a = r.attr("name");
        if (!a)
          return !0;
        var n = Dr(e.actualNode);
        if (!n || n.nodeType !== 9)
          return !0;
        var o = Ke(g._tree, 'img[usemap="#'.concat(Ae(a), '"]'));
        return !o || !o.length ? !0 : o.some(function(l) {
          return !t(l);
        });
      }
      i(cn, "areaHidden");
      function Mo(e) {
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
      i(Mo, "detailsHidden");
      var df = [Co, ko, Ro, Mo];
      function Et(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipAncestors, a = t.isAncestor, n = a === void 0 ? !1 : a;
        return e = e instanceof J ? e : q(e), r ? Bo(e, n) : qo(e, n);
      }
      i(Et, "_isHiddenForEveryone");
      var Bo = it(/* @__PURE__ */ i(function(t, r) {
        return Fo(t) ? !0 : t.actualNode ? !!(df.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) || !t.actualNode.isConnected) : !1;
      }, "isHiddenSelfMemoized")), qo = it(/* @__PURE__ */ i(function(t, r) {
        return Bo(t, r) ? !0 : t.parent ? qo(t.parent, !0) : !1;
      }, "isHiddenAncestorsMemoized"));
      function Lo(e) {
        if (e.assignedSlot)
          return Lo(e.assignedSlot);
        if (e.parentNode) {
          var t = e.parentNode;
          if (t.nodeType === 1)
            return t;
          if (t.host)
            return t.host;
        }
        return null;
      }
      i(Lo, "getComposedParent");
      var Be = Lo;
      function ff(e) {
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
      i(ff, "getScrollOffset");
      var Vo = ff;
      function pf(e) {
        var t = Vo(T), r = t.left, a = t.top, n = e.getBoundingClientRect();
        return {
          top: n.top + a,
          right: n.right + r,
          bottom: n.bottom + a,
          left: n.left + r,
          width: n.right - n.left,
          height: n.bottom - n.top
        };
      }
      i(pf, "getElementCoordinates");
      var dn = pf;
      function mf(e) {
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
      i(mf, "getViewportSize");
      var ea = mf;
      function hf(e, t) {
        for (e = Be(e); e && e.nodeName.toLowerCase() !== "html"; ) {
          if (e.scrollTop && (t += e.scrollTop, t >= 0))
            return !1;
          e = Be(e);
        }
        return !0;
      }
      i(hf, "noParentScrolled");
      function vf(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        if (e = e instanceof J ? e.actualNode : e, !!e) {
          var a, n = T.documentElement, o = D.getComputedStyle(e), l = D.getComputedStyle(T.body || n).getPropertyValue("direction"), u = dn(e);
          if (u.bottom < 0 && (hf(e, u.bottom) || o.position === "absolute"))
            return !0;
          if (u.left === 0 && u.right === 0)
            return !1;
          if (l === "ltr") {
            if (u.right <= 0)
              return !0;
          } else if (a = Math.max(n.scrollWidth, ea(D).width), u.left >= a)
            return !0;
          return !1;
        }
      }
      i(vf, "isOffscreen");
      var ta = vf, gf = [So, Oo, Io, No, ta];
      function Ze(e) {
        return e = e instanceof J ? e : q(e), fn(e);
      }
      i(Ze, "_isVisibleOnScreen");
      var fn = it(/* @__PURE__ */ i(function(t, r) {
        return t.actualNode && t.props.nodeName === "area" ? !cn(t, fn) : Et(t, {
          skipAncestors: !0,
          isAncestor: r
        }) || t.actualNode && gf.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) ? !1 : t.parent ? fn(t.parent, !0) : !0;
      }, "isVisibleOnScreenMemoized"));
      function jo(e, t) {
        var r = Math.min(e.top, t.top), a = Math.max(e.right, t.right), n = Math.max(e.bottom, t.bottom), o = Math.min(e.left, t.left);
        return new D.DOMRect(o, r, a - o, n - r);
      }
      i(jo, "_getBoundingRect");
      function pn(e, t) {
        var r = e.x, a = e.y, n = t.top, o = t.right, l = t.bottom, u = t.left;
        return a >= n && r <= o && a <= l && r >= u;
      }
      i(pn, "_isPointInRect");
      function Qt() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : T.body, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (ne.get("gridCreated") && !r)
          return ee.gridSize;
        if (ne.set("gridCreated", !0), !r) {
          var a, n = q(T.documentElement);
          if (n || (n = new Sn(T.documentElement)), n._stackingOrder = [0], (a = t) !== null && a !== void 0 || (t = new mn()), Ho(t, n), gt(n.actualNode)) {
            var o = new mn(n);
            n._subGrid = o;
          }
        }
        for (var l = T.createTreeWalker(e, D.NodeFilter.SHOW_ELEMENT, null, !1), u = r ? l.nextNode() : l.currentNode; u; ) {
          var s = q(u);
          u.parentElement ? r = q(u.parentElement) : u.parentNode && q(u.parentNode) && (r = q(u.parentNode)), s || (s = new g.VirtualNode(u, r)), s._stackingOrder = yf(s, r);
          var c = Df(s, r), d = c ? c._subGrid : t;
          if (gt(s.actualNode)) {
            var f = new mn(s);
            s._subGrid = f;
          }
          var p = s.boundingClientRect;
          p.width !== 0 && p.height !== 0 && Ze(u) && Ho(d, s), Zr(u) && Qt(u.shadowRoot, d, s), u = l.nextNode();
        }
        return ee.gridSize;
      }
      i(Qt, "_createGrid");
      function bf(e, t) {
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
        if (["layout", "paint", "strict", "content"].includes(m))
          return !0;
        if (a !== "auto" && t) {
          var h = t.getComputedStylePropertyValue("display");
          if (["flex", "inline-flex", "inline flex", "grid", "inline-grid", "inline grid"].includes(h))
            return !0;
        }
        return !1;
      }
      i(bf, "isStackingContext");
      function yf(e, t) {
        var r = t._stackingOrder.slice(), a = e.getComputedStylePropertyValue("z-index"), n = e.getComputedStylePropertyValue("position") !== "static", o = e.getComputedStylePropertyValue("float") !== "none";
        if (n && !["auto", "0"].includes(a)) {
          for (; r.find(function(u) {
            return u % 1 !== 0;
          }); ) {
            var l = r.findIndex(function(u) {
              return u % 1 !== 0;
            });
            r.splice(l, 1);
          }
          r[r.length - 1] = parseInt(a);
        }
        return bf(e, t) ? r.push(0) : n ? r.push(0.5) : o && r.push(0.25), r;
      }
      i(yf, "getStackingOrder");
      function Df(e, t) {
        for (var r = null, a = [e]; t; ) {
          if (gt(t.actualNode)) {
            r = t;
            break;
          }
          if (t._scrollRegionParent) {
            r = t._scrollRegionParent;
            break;
          }
          a.push(t), t = q(t.actualNode.parentElement || t.actualNode.parentNode);
        }
        return a.forEach(function(n) {
          return n._scrollRegionParent = r;
        }), r;
      }
      i(Df, "findScrollRegionParent");
      function Ho(e, t) {
        t.clientRects.forEach(function(r) {
          var a;
          (a = t._grid) !== null && a !== void 0 || (t._grid = e);
          var n = e.getGridPositionOfRect(r);
          e.loopGridPosition(n, function(o) {
            o.includes(t) || o.push(t);
          });
        });
      }
      i(Ho, "addNodeToGrid");
      var mn = function() {
        function e() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          dr(this, e), this.container = t, this.cells = [];
        }
        return i(e, "Grid"), fr(e, [{
          key: "toGridIndex",
          value: /* @__PURE__ */ i(function(r) {
            return Math.floor(r / ee.gridSize);
          }, "toGridIndex")
        }, {
          key: "getCellFromPoint",
          value: /* @__PURE__ */ i(function(r) {
            var a, n, o = r.x, l = r.y;
            he(this.boundaries, "Grid does not have cells added");
            var u = this.toGridIndex(l), s = this.toGridIndex(o);
            he(pn({
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
            this.boundaries && (r = jo(this.boundaries, r)), this.boundaries = r, zo(this.cells, u, s, function(c, d) {
              zo(c, o, l, function(f, p) {
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
      function zo(e, t, r, a) {
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
      i(zo, "loopNegativeIndexMatrix");
      function hn(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (Qt(), !((t = e._grid) !== null && t !== void 0 && (r = t.cells) !== null && r !== void 0 && r.length))
          return [];
        var n = e.boundingClientRect, o = e._grid, l = vn(e), u = o.getGridPositionOfRect(n, a), s = [];
        return o.loopGridPosition(u, function(c) {
          var d = mt(c), f;
          try {
            for (d.s(); !(f = d.n()).done; ) {
              var p = f.value;
              p && p !== e && !s.includes(p) && l === vn(p) && s.push(p);
            }
          } catch (m) {
            d.e(m);
          } finally {
            d.f();
          }
        }), s;
      }
      i(hn, "_findNearbyElms");
      var vn = it(function(e) {
        return e ? e.getComputedStylePropertyValue("position") === "fixed" ? !0 : vn(e.parent) : !1;
      }), wf = /^\/\#/, _f = /^#[!/]/;
      function gn(e) {
        var t, r = e.getAttribute("href");
        if (!r || r === "#")
          return !1;
        if (wf.test(r))
          return !0;
        var a = e.hash, n = e.protocol, o = e.hostname, l = e.port, u = e.pathname;
        if (_f.test(a))
          return !1;
        if (r.charAt(0) === "#")
          return !0;
        if (typeof ((t = D.location) === null || t === void 0 ? void 0 : t.origin) != "string" || D.location.origin.indexOf("://") === -1)
          return null;
        var s = D.location.origin + D.location.pathname, c;
        return o ? c = "".concat(n, "//").concat(o).concat(l ? ":".concat(l) : "") : c = D.location.origin, u ? c += (u[0] !== "/" ? "/" : "") + u : c += D.location.pathname, c === s;
      }
      i(gn, "_isCurrentPageLink");
      function xf(e, t) {
        var r = e.getAttribute(t);
        if (!r || t === "href" && !gn(e))
          return null;
        r.indexOf("#") !== -1 && (r = decodeURIComponent(r.substr(r.indexOf("#") + 1)));
        var a = T.getElementById(r);
        return a || (a = T.getElementsByName(r), a.length ? a[0] : null);
      }
      i(xf, "getElementByReference");
      var bn = xf;
      function yn(e, t) {
        Qt();
        for (var r = Math.max(e._stackingOrder.length, t._stackingOrder.length), a = 0; a < r; a++) {
          if (typeof t._stackingOrder[a] > "u")
            return -1;
          if (typeof e._stackingOrder[a] > "u" || t._stackingOrder[a] > e._stackingOrder[a])
            return 1;
          if (t._stackingOrder[a] < e._stackingOrder[a])
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
        var u = D.Node, s = u.DOCUMENT_POSITION_FOLLOWING, c = u.DOCUMENT_POSITION_CONTAINS, d = u.DOCUMENT_POSITION_CONTAINED_BY, f = n.compareDocumentPosition(o), p = f & s ? 1 : -1, m = f & c || f & d, h = Uo(e), y = Uo(t);
        return h === y || m ? p : y - h;
      }
      i(yn, "_visuallySort");
      function Uo(e) {
        return e.getComputedStylePropertyValue("display").indexOf("inline") !== -1 ? 2 : $o(e) ? 1 : 0;
      }
      i(Uo, "getPositionOrder");
      function $o(e) {
        if (!e)
          return !1;
        if (e._isFloated !== void 0)
          return e._isFloated;
        var t = e.getComputedStylePropertyValue("float");
        if (t !== "none")
          return e._isFloated = !0, !0;
        var r = $o(e.parent);
        return e._isFloated = r, r;
      }
      i($o, "isFloated");
      var Wo = {};
      Re(Wo, {
        getBoundingRect: /* @__PURE__ */ i(function() {
          return jo;
        }, "getBoundingRect"),
        getOffset: /* @__PURE__ */ i(function() {
          return Go;
        }, "getOffset"),
        getRectCenter: /* @__PURE__ */ i(function() {
          return Dn;
        }, "getRectCenter"),
        hasVisualOverlap: /* @__PURE__ */ i(function() {
          return Yo;
        }, "hasVisualOverlap"),
        isPointInRect: /* @__PURE__ */ i(function() {
          return pn;
        }, "isPointInRect"),
        rectsOverlap: /* @__PURE__ */ i(function() {
          return Ao;
        }, "rectsOverlap"),
        splitRects: /* @__PURE__ */ i(function() {
          return Ko;
        }, "splitRects")
      });
      function Go(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect, n = Ef(r, a), o = Af(n, r, a);
        return Ff(n, o);
      }
      i(Go, "_getOffset");
      function Ef(e, t) {
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
      i(Ef, "getFarthestPoint");
      function Af(e, t, r) {
        var a = e.x, n = e.y;
        if (Cf({
          x: a,
          y: n
        }, r)) {
          var o = kf({
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
      i(Af, "getClosestPoint");
      function Ff(e, t) {
        var r = Math.abs(e.x - t.x), a = Math.abs(e.y - t.y);
        return !r || !a ? r || a : Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
      }
      i(Ff, "pointDistance");
      function Cf(e, t) {
        var r = e.x, a = e.y;
        return a >= t.top && r <= t.right && a <= t.bottom && r >= t.left;
      }
      i(Cf, "pointInRect");
      function kf(e, t, r) {
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
      i(kf, "getCornerInAdjacentRect");
      function Dn(e) {
        var t = e.left, r = e.top, a = e.width, n = e.height;
        return new D.DOMPoint(t + a / 2, r + n / 2);
      }
      i(Dn, "_getRectCenter");
      function Yo(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.left >= a.right || r.right <= a.left || r.top >= a.bottom || r.bottom <= a.top ? !1 : yn(e, t) > 0;
      }
      i(Yo, "_hasVisualOverlap");
      function Ko(e, t) {
        var r = [e], a = mt(t), n;
        try {
          var o = /* @__PURE__ */ i(function() {
            var u = n.value;
            r = r.reduce(function(s, c) {
              return s.concat(Rf(c, u));
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
      i(Ko, "_splitRects");
      function Rf(e, t) {
        var r = e.top, a = e.left, n = e.bottom, o = e.right, l = r < t.bottom && n > t.top, u = a < t.right && o > t.left, s = [];
        return ra(t.top, r, n) && u && s.push({
          top: r,
          left: a,
          bottom: t.top,
          right: o
        }), ra(t.right, a, o) && l && s.push({
          top: r,
          left: t.right,
          bottom: n,
          right: o
        }), ra(t.bottom, r, n) && u && s.push({
          top: t.bottom,
          right: o,
          bottom: n,
          left: a
        }), ra(t.left, a, o) && l && s.push({
          top: r,
          left: a,
          bottom: n,
          right: t.left
        }), s.length === 0 && s.push(e), s.map(Tf);
      }
      i(Rf, "splitRect");
      var ra = /* @__PURE__ */ i(function(t, r, a) {
        return t > r && t < a;
      }, "between");
      function Tf(e) {
        return ie({}, e, {
          x: e.left,
          y: e.top,
          height: e.bottom - e.top,
          width: e.right - e.left
        });
      }
      i(Tf, "computeRect");
      function wn(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = Dn(t), n = e.getCellFromPoint(a) || [], o = Math.floor(a.x), l = Math.floor(a.y), u = n.filter(function(c) {
          return c.clientRects.some(function(d) {
            var f = d.left, p = d.top;
            return o < Math.floor(f + d.width) && o >= Math.floor(f) && l < Math.floor(p + d.height) && l >= Math.floor(p);
          });
        }), s = e.container;
        return s && (u = wn(s._grid, s.boundingClientRect, !0).concat(u)), r || (u = u.sort(yn).map(function(c) {
          return c.actualNode;
        }).concat(T.documentElement).filter(function(c, d, f) {
          return f.indexOf(c) === d;
        })), u;
      }
      i(wn, "getRectStack");
      function Sf(e) {
        Qt();
        var t = q(e), r = t._grid;
        return r ? wn(r, t.boundingClientRect) : [];
      }
      i(Sf, "getElementStack");
      var _n = Sf;
      function Of(e) {
        var t = Ke(e, "*"), r = t.filter(function(a) {
          var n = a.isFocusable, o = a.actualNode.getAttribute("tabindex");
          return o = o && !isNaN(parseInt(o, 10)) ? parseInt(o) : null, o ? n && o >= 0 : n;
        });
        return r;
      }
      i(Of, "getTabbableElements");
      var Xo = Of;
      function If(e) {
        return e ? e.replace(/\r\n/g, `
`).replace(/\u00A0/g, " ").replace(/[\s]{2,}/g, " ").trim() : "";
      }
      i(If, "sanitize");
      var X = If;
      function Pf(e) {
        Qt();
        var t = q(e), r = t._grid;
        if (!r)
          return [];
        var a = t.boundingClientRect, n = [];
        return Array.from(e.childNodes).forEach(function(o) {
          if (o.nodeType === 3 && X(o.textContent) !== "") {
            var l = T.createRange();
            l.selectNodeContents(o);
            var u = Array.from(l.getClientRects()), s = u.some(function(p) {
              var m = Dn(p);
              return !pn(m, a);
            });
            if (s)
              return;
            for (var c = 0, d = u; c < d.length; c++) {
              var f = d[c];
              f.width >= 1 && f.height >= 1 && n.push(f);
            }
          }
        }), n.length ? n.map(function(o) {
          return wn(r, o);
        }) : [_n(e)];
      }
      i(Pf, "getTextElementStack");
      var Jo = Pf, Nf = ["checkbox", "img", "meter", "progressbar", "scrollbar", "radio", "slider", "spinbutton", "textbox"];
      function Mf(e) {
        var t = e instanceof J ? e : q(e), r = g.commons.aria.getExplicitRole(t);
        if (r)
          return Nf.indexOf(r) !== -1;
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
      i(Mf, "isVisualContent");
      var xn = Mf;
      function Bf(e, t) {
        e = e.actualNode || e;
        try {
          var r = He(e), a = [], n = e.getAttribute(t);
          if (n) {
            n = qe(n);
            for (var o = 0; o < n.length; o++)
              a.push(r.getElementById(n[o]));
          }
          return a;
        } catch {
          throw new TypeError("Cannot resolve id references for non-DOM nodes");
        }
      }
      i(Bf, "idrefs");
      var ot = Bf;
      function Fe(e) {
        return e = e instanceof J ? e : q(e), En(e);
      }
      i(Fe, "_isVisibleToScreenReaders");
      var En = it(/* @__PURE__ */ i(function(t, r) {
        return To(t) ? !1 : t.actualNode && t.props.nodeName === "area" ? !cn(t, En) : Et(t, {
          skipAncestors: !0,
          isAncestor: r
        }) ? !1 : t.parent ? En(t.parent, !0) : !0;
      }, "isVisibleToScreenReadersMemoized"));
      function Qo(e, t, r) {
        var a = e instanceof J ? e : q(e), n = t ? Fe : Ze, o = !e.actualNode || e.actualNode && n(e), l = a.children.map(function(u) {
          var s = u.props, c = s.nodeType, d = s.nodeValue;
          if (c === 3) {
            if (d && o)
              return d;
          } else if (!r)
            return Qo(u, t);
        }).join("");
        return X(l);
      }
      i(Qo, "visibleVirtual");
      var st = Qo;
      function qf(e) {
        var t, r;
        return e.attr("aria-labelledby") && (t = ot(e.actualNode, "aria-labelledby"), r = t.map(function(a) {
          var n = q(a);
          return n ? st(n) : "";
        }).join(" ").trim(), r) || (r = e.attr("aria-label"), r && (r = X(r), r)) ? r : null;
      }
      i(qf, "labelVirtual");
      var aa = qf, Lf = ["head", "title", "template", "script", "style", "iframe", "object", "video", "audio", "noscript"];
      function Zo(e) {
        return Lf.includes(e.props.nodeName) ? !1 : e.children.some(function(t) {
          var r = t.props;
          return r.nodeType === 3 && r.nodeValue.trim();
        });
      }
      i(Zo, "hasChildTextNodes");
      function el(e, t, r) {
        return Zo(e) || xn(e.actualNode) || !r && !!aa(e) || !t && e.children.some(function(a) {
          return a.actualNode.nodeType === 1 && el(a);
        });
      }
      i(el, "hasContentVirtual");
      var wr = el;
      function Vf(e, t, r) {
        return e = q(e), wr(e, t, r);
      }
      i(Vf, "hasContent");
      var na = Vf;
      function An(e) {
        return typeof e.children > "u" || Zo(e) ? !0 : e.props.nodeType === 1 && xn(e) ? !!g.commons.text.accessibleTextVirtual(e) : e.children.some(function(t) {
          return !t.attr("lang") && An(t) && !Et(t);
        });
      }
      i(An, "_hasLangText");
      var jf = ["button", "command", "fieldset", "keygen", "optgroup", "option", "select", "textarea", "input"];
      function Hf(e) {
        return jf.includes(e);
      }
      i(Hf, "isDisabledAttrAllowed");
      function zf(e) {
        var t = e instanceof J ? e : q(e);
        if (Hf(t.props.nodeName) && t.hasAttr("disabled"))
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
        }), n ? !0 : t.props.nodeName !== "area" && t.actualNode ? Et(t) : !1;
      }
      i(zf, "focusDisabled");
      var tl = zf;
      function Uf(e) {
        var t = e instanceof J ? e : q(e);
        if (!t || tl(t))
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
            return !Ke(t, "summary").length;
        }
        return !1;
      }
      i(Uf, "isNativelyFocusable");
      var Fn = Uf;
      function Te(e) {
        var t = e instanceof J ? e : q(e);
        if (t.props.nodeType !== 1 || tl(t))
          return !1;
        if (Fn(t))
          return !0;
        var r = t.attr("tabindex");
        return !!(r && !isNaN(parseInt(r, 10)));
      }
      i(Te, "_isFocusable");
      function $f(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return t > -1 && Te(e) && !Fn(e);
      }
      i($f, "insertedIntoFocusOrder");
      var rl = $f;
      function al(e, t) {
        var r = e instanceof J ? e : q(e), a = e instanceof D.Node ? e : r?.actualNode;
        return r ? (r._isHiddenWithCSS === void 0 && (r._isHiddenWithCSS = nl(a, t)), r._isHiddenWithCSS) : nl(a, t);
      }
      i(al, "isHiddenWithCSS");
      function nl(e, t) {
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
        var l = Be(e);
        return l && !n.includes(o) ? al(l, o) : !1;
      }
      i(nl, "_isHiddenWithCSS");
      var Wf = al;
      function Gf(e) {
        var t = e.doctype;
        return t === null ? !1 : t.name === "html" && !t.publicId && !t.systemId;
      }
      i(Gf, "isHTML5");
      var il = Gf;
      function ct(e) {
        var t = e instanceof J ? e : q(e);
        if (t.props.nodeType !== 1)
          return !1;
        var r = parseInt(t.attr("tabindex", 10));
        return r <= -1 ? !1 : Te(t);
      }
      i(ct, "_isInTabOrder");
      var Yf = {
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
      }, ol = Yf, Kf = {
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
          allowedAttrs: ["aria-checked", "aria-readonly", "aria-required"],
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
          requiredOwned: ["group", "listitem"],
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
          requiredContext: ["list", "group"],
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
          requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox"],
          allowedAttrs: ["aria-activedescendant", "aria-expanded", "aria-orientation"],
          superclassRole: ["select"]
        },
        menubar: {
          type: "composite",
          requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox", "menu"],
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
          allowedAttrs: ["aria-checked", "aria-posinset", "aria-readonly", "aria-setsize"],
          superclassRole: ["checkbox", "menuitem"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        menuitemradio: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          allowedAttrs: ["aria-checked", "aria-posinset", "aria-readonly", "aria-setsize"],
          superclassRole: ["menuitemcheckbox", "radio"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        meter: {
          type: "structure",
          allowedAttrs: ["aria-valuetext"],
          requiredAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
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
          allowedAttrs: ["aria-checked", "aria-posinset", "aria-setsize", "aria-required"],
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
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-orientation", "aria-valuetext"],
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
      }, ll = Kf, Xf = {
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
      }, Jf = Xf, Qf = {
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
      }, Zf = Qf, ep = {
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
          allowedRoles: ["checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"],
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
              allowedRoles: ["link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"]
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
      }, tp = ep, rp = {
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
      }, ap = rp, ul = {
        ariaAttrs: ol,
        ariaRoles: ie({}, ll, Jf, Zf),
        htmlElms: tp,
        cssColors: ap
      }, Zt = ie({}, ul);
      function np(e) {
        Object.keys(Zt).forEach(function(t) {
          e[t] && (Zt[t] = ln(Zt[t], e[t]));
        });
      }
      i(np, "configureStandards");
      function ip() {
        Object.keys(Zt).forEach(function(e) {
          Zt[e] = ul[e];
        });
      }
      i(ip, "resetStandards");
      var se = Zt;
      function op(e) {
        var t;
        (e instanceof J || (t = D) !== null && t !== void 0 && t.Node && e instanceof D.Node) && (e = g.commons.aria.getRole(e));
        var r = se.ariaRoles[e];
        return r?.type || null;
      }
      i(op, "getRoleType");
      var dt = op;
      function sl(e, t) {
        t(e.actualNode) !== !1 && e.children.forEach(function(r) {
          return sl(r, t);
        });
      }
      i(sl, "walkDomNode");
      var lp = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function cl(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return lp.includes(t) || t.substr(0, 6) === "table-";
      }
      i(cl, "isBlock");
      function up(e) {
        for (var t = Be(e); t && !cl(t); )
          t = Be(t);
        return q(t);
      }
      i(up, "getBlockParent");
      function sp(e, t) {
        if (cl(e))
          return !1;
        var r = up(e), a = "", n = "", o = 0;
        return sl(r, function(l) {
          if (o === 2)
            return !1;
          if (l.nodeType === 3 && (a += l.nodeValue), l.nodeType === 1) {
            var u = (l.nodeName || "").toUpperCase();
            if (l === e && (o = 1), ["BR", "HR"].includes(u))
              o === 0 ? (a = "", n = "") : o = 2;
            else {
              if (l.style.display === "none" || l.style.overflow === "hidden" || !["", null, "none"].includes(l.style.float) || !["", null, "relative"].includes(l.style.position))
                return !1;
              if (dt(l) === "widget")
                return n += l.textContent, !1;
            }
          }
        }), a = X(a), t != null && t.noLengthCompare ? a.length !== 0 : (n = X(n), a.length > n.length);
      }
      i(sp, "isInTextBlock");
      var Cn = sp;
      function cp(e) {
        e = e || {};
        var t = e.modalPercent || 0.75;
        if (ne.get("isModalOpen"))
          return ne.get("isModalOpen");
        var r = bt(g._tree[0], "dialog, [role=dialog], [aria-modal=true]", Ze);
        if (r.length)
          return ne.set("isModalOpen", !0), !0;
        for (var a = ea(D), n = a.width * t, o = a.height * t, l = (a.width - n) / 2, u = (a.height - o) / 2, s = [{
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
          return Array.from(T.elementsFromPoint(m.x, m.y));
        }), d = /* @__PURE__ */ i(function(h) {
          var y = c[h].find(function(w) {
            var v = D.getComputedStyle(w);
            return parseInt(v.width, 10) >= n && parseInt(v.height, 10) >= o && v.getPropertyValue("pointer-events") !== "none" && (v.position === "absolute" || v.position === "fixed");
          });
          if (y && c.every(function(w) {
            return w.includes(y);
          }))
            return ne.set("isModalOpen", !0), {
              v: !0
            };
        }, "_loop4"), f = 0; f < c.length; f++) {
          var p = d(f);
          if (N(p) === "object")
            return p.v;
        }
        ne.set("isModalOpen", void 0);
      }
      i(cp, "isModalOpen");
      var _r = cp;
      function dl(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, r = e.ownerDocument.createRange();
        r.setStart(e, 0), r.setEnd(e, e.childNodes.length);
        var a = 0, n = 0, o = mt(r.getClientRects()), l;
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
      i(dl, "_isMultiline");
      function dp(e) {
        return e instanceof D.Node;
      }
      i(dp, "isNode");
      var fp = dp, ia = {}, pp = {
        set: /* @__PURE__ */ i(function(t, r) {
          if (typeof t != "string")
            throw new Error("Incomplete data: key must be a string");
          return r && (ia[t] = r), ia[t];
        }, "set"),
        get: /* @__PURE__ */ i(function(t) {
          return ia[t];
        }, "get"),
        clear: /* @__PURE__ */ i(function() {
          ia = {};
        }, "clear")
      }, ze = pp;
      function mp(e, t) {
        var r = ["IMG", "CANVAS", "OBJECT", "IFRAME", "VIDEO", "SVG"], a = e.nodeName.toUpperCase();
        if (r.includes(a))
          return ze.set("bgColor", "imgNode"), !0;
        t = t || D.getComputedStyle(e);
        var n = t.getPropertyValue("background-image"), o = n !== "none";
        if (o) {
          var l = /gradient/.test(n);
          ze.set("bgColor", l ? "bgGradient" : "bgImage");
        }
        return o;
      }
      i(mp, "elementHasImage");
      var oa = mp;
      function hp(e, t, r) {
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
      i(hp, "convertColorVal");
      function vp(e) {
        var t = ge(e, 4), r = t[0], a = t[1], n = t[2], o = t[3];
        a /= 255, n /= 255;
        var l = (1 - Math.abs(2 * n - 1)) * a, u = l * (1 - Math.abs(r / 60 % 2 - 1)), s = n - l / 2, c;
        return r < 60 ? c = [l, u, 0] : r < 120 ? c = [u, l, 0] : r < 180 ? c = [0, l, u] : r < 240 ? c = [0, u, l] : r < 300 ? c = [u, 0, l] : c = [l, 0, u], c.map(function(d) {
          return Math.round((d + s) * 255);
        }).concat(o);
      }
      i(vp, "hslToRgb");
      function gp(e, t, r, a) {
        this.red = e, this.green = t, this.blue = r, this.alpha = a, this.toHexString = /* @__PURE__ */ i(function() {
          var u = Math.round(this.red).toString(16), s = Math.round(this.green).toString(16), c = Math.round(this.blue).toString(16);
          return "#" + (this.red > 15.5 ? u : "0" + u) + (this.green > 15.5 ? s : "0" + s) + (this.blue > 15.5 ? c : "0" + c);
        }, "toHexString");
        var n = /^#[0-9a-f]{3,8}$/i, o = /^((?:rgb|hsl)a?)\s*\(([^\)]*)\)/i;
        this.parseString = /* @__PURE__ */ i(function(u) {
          if (se.cssColors[u] || u === "transparent") {
            var s = se.cssColors[u] || [0, 0, 0], c = ge(s, 3), d = c[0], f = c[1], p = c[2];
            this.red = d, this.green = f, this.blue = p, this.alpha = u === "transparent" ? 0 : 1;
            return;
          }
          if (u.match(o)) {
            this.parseColorFnString(u);
            return;
          }
          if (u.match(n)) {
            this.parseHexString(u);
            return;
          }
          throw new Error('Unable to parse color "'.concat(u, '"'));
        }, "parseString"), this.parseRgbString = /* @__PURE__ */ i(function(u) {
          if (u === "transparent") {
            this.red = 0, this.green = 0, this.blue = 0, this.alpha = 0;
            return;
          }
          this.parseColorFnString(u);
        }, "parseRgbString"), this.parseHexString = /* @__PURE__ */ i(function(u) {
          if (!(!u.match(n) || [6, 8].includes(u.length))) {
            if (u = u.replace("#", ""), u.length < 6) {
              var s = u, c = ge(s, 4), d = c[0], f = c[1], p = c[2], m = c[3];
              u = d + d + f + f + p + p, m && (u += m + m);
            }
            var h = u.match(/.{1,2}/g);
            this.red = parseInt(h[0], 16), this.green = parseInt(h[1], 16), this.blue = parseInt(h[2], 16), h[3] ? this.alpha = parseInt(h[3], 16) / 255 : this.alpha = 1;
          }
        }, "parseHexString"), this.parseColorFnString = /* @__PURE__ */ i(function(u) {
          var s = u.match(o) || [], c = ge(s, 3), d = c[1], f = c[2];
          if (!(!d || !f)) {
            var p = f.split(/\s*[,\/\s]\s*/).map(function(h) {
              return h.replace(",", "").trim();
            }).filter(function(h) {
              return h !== "";
            }), m = p.map(function(h, y) {
              return hp(d, h, y);
            });
            d.substr(0, 3) === "hsl" && (m = vp(m)), this.red = m[0], this.green = m[1], this.blue = m[2], this.alpha = typeof m[3] == "number" ? m[3] : 1;
          }
        }, "parseColorFnString"), this.getRelativeLuminance = /* @__PURE__ */ i(function() {
          var u = this.red / 255, s = this.green / 255, c = this.blue / 255, d = u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4), f = s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4), p = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
          return 0.2126 * d + 0.7152 * f + 0.0722 * p;
        }, "getRelativeLuminance");
      }
      i(gp, "Color");
      var et = gp;
      function bp(e) {
        var t = new et();
        if (t.parseString(e.getPropertyValue("background-color")), t.alpha !== 0) {
          var r = e.getPropertyValue("opacity");
          t.alpha = t.alpha * r;
        }
        return t;
      }
      i(bp, "getOwnBackgroundColor");
      var Nt = bp;
      function yp(e) {
        var t = D.getComputedStyle(e);
        return oa(e, t) || Nt(t).alpha === 1;
      }
      i(yp, "isOpaque");
      var Dp = yp;
      function kn(e) {
        if (!e.href)
          return !1;
        var t = ne.get("firstPageLink", wp);
        return t ? e.compareDocumentPosition(t.actualNode) === e.DOCUMENT_POSITION_FOLLOWING : !0;
      }
      i(kn, "_isSkipLink");
      function wp() {
        var e;
        return D.location.origin ? e = Ke(g._tree, 'a[href]:not([href^="javascript:"])').find(function(t) {
          return !gn(t.actualNode);
        }) : e = Ke(g._tree, 'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0], e || null;
      }
      i(wp, "generateFirstPageLink");
      var _p = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, xp = /(\w+)\((\d+)/;
      function Ep(e) {
        var t = e.getPropertyValue("clip").match(_p), r = e.getPropertyValue("clip-path").match(xp);
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
      i(Ep, "isClipped");
      function Ap(e, t, r) {
        var a = Jt(e, "map");
        if (!a)
          return !1;
        var n = a.getAttribute("name");
        if (!n)
          return !1;
        var o = He(e);
        if (!o || o.nodeType !== 9)
          return !1;
        var l = Ke(g._tree, 'img[usemap="#'.concat(Ae(n), '"]'));
        return !l || !l.length ? !1 : l.some(function(u) {
          var s = u.actualNode;
          return la(s, t, r);
        });
      }
      i(Ap, "isAreaVisible");
      function la(e, t, r) {
        var a;
        if (!e)
          throw new TypeError("Cannot determine if element is visible for non-DOM nodes");
        var n = e instanceof J ? e : q(e);
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
          return p && (m = la(p, t, !0)), n && (n[o] = m), m;
        }
        var h = D.getComputedStyle(e, null);
        if (h === null)
          return !1;
        if (d === "area")
          return Ap(e, t, r);
        if (h.getPropertyValue("display") === "none")
          return !1;
        var y = parseInt(h.getPropertyValue("height")), w = parseInt(h.getPropertyValue("width")), v = gt(e), b = v && y === 0, E = v && w === 0, A = h.getPropertyValue("position") === "absolute" && (y < 2 || w < 2) && h.getPropertyValue("overflow") === "hidden";
        if (!t && (Ep(h) || h.getPropertyValue("opacity") === "0" || b || E || A) || !r && (h.getPropertyValue("visibility") === "hidden" || !t && ta(e)))
          return !1;
        var k = e.assignedSlot ? e.assignedSlot : e.parentNode, M = !1;
        return k && (M = la(k, t, !0)), n && (n[o] = M), M;
      }
      i(la, "isVisible");
      var Fp = la;
      function Cp(e, t) {
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
      i(Cp, "reduceToElementsBelowFloating");
      var fl = Cp;
      function ua(e, t) {
        var r = pl(t);
        do {
          var a = pl(e);
          if (a === r || a === t)
            return kp(e, t);
          e = a;
        } while (e);
        return !1;
      }
      i(ua, "_visuallyContains");
      function pl(e) {
        for (var t = q(e), r = t.parent; r; ) {
          if (gt(r.actualNode))
            return r.actualNode;
          r = r.parent;
        }
      }
      i(pl, "getScrollAncestor");
      function kp(e, t) {
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
      i(kp, "contains2");
      function ml(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : T, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        if (a > 999)
          throw new Error("Infinite loop detected");
        return Array.from(r.elementsFromPoint(e, t) || []).filter(function(n) {
          return He(n) === r;
        }).reduce(function(n, o) {
          if (Zr(o)) {
            var l = ml(e, t, o.shadowRoot, a + 1);
            n = n.concat(l), n.length && ua(n[0], o) && n.push(o);
          } else
            n.push(o);
          return n;
        }, []);
      }
      i(ml, "shadowElementsFromPoint");
      var Rp = ml;
      function Tp(e, t) {
        if (!!e.hasAttribute(t)) {
          var r = e.nodeName.toUpperCase(), a = e;
          (!["A", "AREA"].includes(r) || e.ownerSVGElement) && (a = T.createElement("a"), a.href = e.getAttribute(t));
          var n = ["https:", "ftps:"].includes(a.protocol) ? a.protocol.replace(/s:$/, ":") : a.protocol, o = /^\//.test(a.pathname) ? a.pathname : "/".concat(a.pathname), l = Op(o), u = l.pathname, s = l.filename;
          return {
            protocol: n,
            hostname: a.hostname,
            port: Sp(a.port),
            pathname: /\/$/.test(u) ? u : "".concat(u, "/"),
            search: Ip(a.search),
            hash: Pp(a.hash),
            filename: s
          };
        }
      }
      i(Tp, "urlPropsFromAttribute");
      function Sp(e) {
        var t = ["443", "80"];
        return t.includes(e) ? "" : e;
      }
      i(Sp, "getPort");
      function Op(e) {
        var t = e.split("/").pop();
        return !t || t.indexOf(".") === -1 ? {
          pathname: e,
          filename: ""
        } : {
          pathname: e.replace(t, ""),
          filename: /index./.test(t) ? "" : t
        };
      }
      i(Op, "getPathnameOrFilename");
      function Ip(e) {
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
      i(Ip, "getSearchPairs");
      function Pp(e) {
        if (!e)
          return "";
        var t = /#!?\/?/g, r = e.match(t);
        if (!r)
          return "";
        var a = ge(r, 1), n = a[0];
        return n === "#" ? "" : e;
      }
      i(Pp, "getHashRoute");
      var Np = Tp;
      function Mp(e, t) {
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
      i(Mp, "visuallyOverlaps");
      var Rn = Mp, Tn, hl = 0, Bp = function(e) {
        Ai(r, e);
        var t = Fi(r);
        function r(a, n, o) {
          var l;
          if (dr(this, r), l = t.call(this), l.shadowId = o, l.children = [], l.actualNode = a, l.parent = n, n || (hl = 0), l.nodeIndex = hl++, l._isHidden = null, l._cache = {}, typeof Tn > "u" && (Tn = zr(a.ownerDocument)), l._isXHTML = Tn, a.nodeName.toLowerCase() === "input") {
            var u = a.getAttribute("type");
            u = l._isXHTML ? u : (u || "").toLowerCase(), ma().includes(u) || (u = "text"), l._type = u;
          }
          return ne.get("nodeMap") && ne.get("nodeMap").set(a, Ci(l)), l;
        }
        return i(r, "VirtualNode"), fr(r, [{
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
            return this._cache.hasOwnProperty("isFocusable") || (this._cache.isFocusable = Te(this.actualNode)), this._cache.isFocusable;
          }, "get")
        }, {
          key: "tabbableElements",
          get: /* @__PURE__ */ i(function() {
            return this._cache.hasOwnProperty("tabbableElements") || (this._cache.tabbableElements = Xo(this)), this._cache.tabbableElements;
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
      }(J), Sn = Bp;
      function qp(e) {
        return (e || "").trim().replace(/\s{2,}/g, " ").split(" ");
      }
      i(qp, "tokenList");
      var qe = qp, er = " [idsMap]";
      function vl(e, t, r) {
        var a = e[0]._selectorMap;
        if (!!a) {
          for (var n = e[0].shadowId, o = 0; o < t.length; o++)
            if (t[o].length > 1 && t[o].some(function(s) {
              return gl(s);
            }))
              return;
          var l = /* @__PURE__ */ new Set();
          t.forEach(function(s) {
            var c, d = Lp(s, a, n);
            d == null || (c = d.nodes) === null || c === void 0 || c.forEach(function(f) {
              d.isComplexSelector && !$t(f, s) || l.add(f);
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
      i(vl, "getNodesMatchingExpression");
      function Lp(e, t, r) {
        var a = e[e.length - 1], n = null, o = e.length > 1 || !!a.pseudos || !!a.classes;
        if (gl(a))
          n = t["*"];
        else {
          if (a.id) {
            var l;
            if (!t[er] || !((l = t[er][a.id]) !== null && l !== void 0 && l.length))
              return;
            n = t[er][a.id].filter(function(y) {
              return y.shadowId === r;
            });
          }
          if (a.tag && a.tag !== "*") {
            var u;
            if (!((u = t[a.tag]) !== null && u !== void 0 && u.length))
              return;
            var s = t[a.tag];
            n = n ? On(s, n) : s;
          }
          if (a.classes) {
            var c;
            if (!((c = t["[class]"]) !== null && c !== void 0 && c.length))
              return;
            var d = t["[class]"];
            n = n ? On(d, n) : d;
          }
          if (a.attributes)
            for (var f = 0; f < a.attributes.length; f++) {
              var p, m = a.attributes[f];
              if (m.type === "attrValue" && (o = !0), !((p = t["[".concat(m.key, "]")]) !== null && p !== void 0 && p.length))
                return;
              var h = t["[".concat(m.key, "]")];
              n = n ? On(h, n) : h;
            }
        }
        return {
          nodes: n,
          isComplexSelector: o
        };
      }
      i(Lp, "findMatchingNodes");
      function gl(e) {
        return e.tag === "*" && !e.attributes && !e.id && !e.classes;
      }
      i(gl, "isGlobalSelector");
      function On(e, t) {
        return e.filter(function(r) {
          return t.includes(r);
        });
      }
      i(On, "getSharedValues");
      function sa(e, t, r) {
        r[e] = r[e] || [], r[e].push(t);
      }
      i(sa, "cacheSelector");
      function bl(e, t) {
        e.props.nodeType === 1 && (sa(e.props.nodeName, e, t), sa("*", e, t), e.attrNames.forEach(function(r) {
          r === "id" && (t[er] = t[er] || {}, qe(e.attr(r)).forEach(function(a) {
            sa(a, e, t[er]);
          })), sa("[".concat(r, "]"), e, t);
        }));
      }
      i(bl, "cacheNodeSelectors");
      var In;
      function Vp(e) {
        var t = [];
        for (e = e.firstChild; e; )
          t.push(e), e = e.nextSibling;
        return t;
      }
      i(Vp, "getSlotChildren");
      function Pn(e, t, r) {
        var a = new Sn(e, t, r);
        return bl(a, ne.get("selectorMap")), a;
      }
      i(Pn, "createNode");
      function yl(e, t, r) {
        var a, n, o;
        function l(u, s, c) {
          var d = yl(s, t, c);
          return d && (u = u.concat(d)), u;
        }
        return i(l, "reduceShadowDOM"), e.documentElement && (e = e.documentElement), o = e.nodeName.toLowerCase(), Zr(e) ? (In = !0, a = Pn(e, r, t), t = "a" + Math.random().toString().substring(2), n = Array.from(e.shadowRoot.childNodes), a.children = n.reduce(function(u, s) {
          return l(u, s, a);
        }, []), [a]) : o === "content" && typeof e.getDistributedNodes == "function" ? (n = Array.from(e.getDistributedNodes()), n.reduce(function(u, s) {
          return l(u, s, r);
        }, [])) : o === "slot" && typeof e.assignedNodes == "function" ? (n = Array.from(e.assignedNodes()), n.length || (n = Vp(e)), D.getComputedStyle(e), n.reduce(function(u, s) {
          return l(u, s, r);
        }, [])) : e.nodeType === 1 ? (a = Pn(e, r, t), n = Array.from(e.childNodes), a.children = n.reduce(function(u, s) {
          return l(u, s, a);
        }, []), [a]) : e.nodeType === 3 ? [Pn(e, r)] : void 0;
      }
      i(yl, "flattenTree");
      function jp() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : T.documentElement, t = arguments.length > 1 ? arguments[1] : void 0;
        In = !1;
        var r = {};
        ne.set("nodeMap", /* @__PURE__ */ new WeakMap()), ne.set("selectorMap", r);
        var a = yl(e, t, null);
        return a[0]._selectorMap = r, a[0]._hasShadowRoot = In, a;
      }
      i(jp, "getFlattenedTree");
      var Nn = jp;
      function Hp(e) {
        return e ? e.trim().split("-")[0].toLowerCase() : "";
      }
      i(Hp, "getBaseLang");
      var Mt = Hp;
      function zp(e) {
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
      i(zp, "failureSummary");
      var Mn = zp;
      function Bn() {
        var e = g._audit.data.incompleteFallbackMessage;
        return typeof e == "function" && (e = e()), typeof e != "string" ? "" : e;
      }
      i(Bn, "incompleteFallbackMessage");
      function Up(e, t) {
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
      i(Up, "normalizeRelatedNodes");
      var Dl = ee.resultGroups;
      function $p(e, t) {
        var r = g.utils.aggregateResult(e);
        return Dl.forEach(function(a) {
          t.resultTypes && !t.resultTypes.includes(a) && (r[a] || []).forEach(function(n) {
            Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = [n.nodes[0]]);
          }), r[a] = (r[a] || []).map(function(n) {
            return n = Object.assign({}, n), Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = n.nodes.map(function(o) {
              return N(o.node) === "object" && (o.html = o.node.source, t.elementRef && !o.node.fromFrame && (o.element = o.node.element), (t.selectors !== !1 || o.node.fromFrame) && (o.target = o.node.selector), t.ancestry && (o.ancestry = o.node.ancestry), t.xpath && (o.xpath = o.node.xpath)), delete o.result, delete o.node, Up(o, t), o;
            })), Dl.forEach(function(o) {
              return delete n[o];
            }), delete n.pageLevel, delete n.result, n;
          });
        }), r;
      }
      i($p, "processAggregate");
      var xr = $p, Wp = /\$\{\s?data\s?\}/g;
      function ca(e, t) {
        if (typeof t == "string")
          return e.replace(Wp, t);
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var a = new RegExp("\\${\\s?data\\." + r + "\\s?}", "g"), n = typeof t[r] > "u" ? "" : String(t[r]);
            e = e.replace(a, n);
          }
        return e;
      }
      i(ca, "substitute");
      function wl(e, t) {
        if (!!e) {
          if (Array.isArray(t)) {
            if (t.values = t.join(", "), typeof e.singular == "string" && typeof e.plural == "string") {
              var r = t.length === 1 ? e.singular : e.plural;
              return ca(r, t);
            }
            return ca(e, t);
          }
          if (typeof e == "string")
            return ca(e, t);
          if (typeof t == "string") {
            var a = e[t];
            return ca(a, t);
          }
          var n = e.default || Bn();
          return t && t.messageKey && e[t.messageKey] && (n = e[t.messageKey]), wl(n, t);
        }
      }
      i(wl, "processMessage");
      var qn = wl;
      function Gp(e, t, r) {
        var a = g._audit.data.checks[e];
        if (!a)
          throw new Error("Cannot get message for unknown check: ".concat(e, "."));
        if (!a.messages[t])
          throw new Error('Check "'.concat(e, '"" does not have a "').concat(t, '" message.'));
        return qn(a.messages[t], r);
      }
      i(Gp, "getCheckMessage");
      var Yp = Gp;
      function Kp(e, t, r) {
        var a = ((r.rules && r.rules[t] || {}).checks || {})[e.id], n = (r.checks || {})[e.id], o = e.enabled, l = e.options;
        return n && (n.hasOwnProperty("enabled") && (o = n.enabled), n.hasOwnProperty("options") && (l = n.options)), a && (a.hasOwnProperty("enabled") && (o = a.enabled), a.hasOwnProperty("options") && (l = a.options)), {
          enabled: o,
          options: l,
          absolutePaths: r.absolutePaths
        };
      }
      i(Kp, "getCheckOption");
      var da = Kp;
      function At() {
        var e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : D;
        return t && N(t) === "object" ? t : N(r) !== "object" ? {} : {
          testEngine: {
            name: "axe-core",
            version: g.version
          },
          testRunner: {
            name: g._audit.brand
          },
          testEnvironment: Xp(r),
          timestamp: new Date().toISOString(),
          url: (e = r.location) === null || e === void 0 ? void 0 : e.href
        };
      }
      i(At, "_getEnvironmentData");
      function Xp(e) {
        if (!e.navigator || N(e.navigator) !== "object")
          return {};
        var t = e.navigator, r = e.innerHeight, a = e.innerWidth, n = Jp(e) || {}, o = n.angle, l = n.type;
        return {
          userAgent: t.userAgent,
          windowWidth: a,
          windowHeight: r,
          orientationAngle: o,
          orientationType: l
        };
      }
      i(Xp, "getTestEnvironment");
      function Jp(e) {
        var t = e.screen;
        return t.orientation || t.msOrientation || t.mozOrientation;
      }
      i(Jp, "getOrientation");
      function _l(e, t) {
        var r = t.focusable, a = t.page;
        return {
          node: e,
          include: [],
          exclude: [],
          initiator: !1,
          focusable: r && Qp(e),
          size: Zp(e),
          page: a
        };
      }
      i(_l, "createFrameContext");
      function Qp(e) {
        var t = e.getAttribute("tabindex");
        if (!t)
          return !0;
        var r = parseInt(t, 10);
        return isNaN(r) || r >= 0;
      }
      i(Qp, "frameFocusable");
      function Zp(e) {
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
      i(Zp, "getBoundingSize");
      function em(e, t) {
        !Fe(t) || yr(e.frames, "node", t) || e.frames.push(_l(t, e));
      }
      i(em, "pushUniqueFrame");
      function tm(e) {
        var t = e.include;
        return t.length === 1 && t[0].actualNode === T.documentElement;
      }
      i(tm, "isPageContext");
      function rm(e, t, r) {
        e.frames = e.frames || [];
        var a = r.shift(), n = T.querySelectorAll(a);
        Array.from(n).forEach(function(o) {
          if (e.frames.forEach(function(u) {
            u.node === o && u[t].push(r);
          }), !e.frames.find(function(u) {
            return u.node === o;
          })) {
            var l = _l(o, e);
            r && l[t].push(r), e.frames.push(l);
          }
        });
      }
      i(rm, "pushUniqueFrameSelector");
      function am(e) {
        if (e && N(e) === "object" || e instanceof D.NodeList) {
          if (e instanceof D.Node)
            return {
              include: [e],
              exclude: []
            };
          if (e.hasOwnProperty("include") || e.hasOwnProperty("exclude"))
            return {
              include: e.include && +e.include.length ? e.include : [T],
              exclude: e.exclude || []
            };
          if (e.length === +e.length)
            return {
              include: e,
              exclude: []
            };
        }
        return typeof e == "string" ? {
          include: [e],
          exclude: []
        } : {
          include: [T],
          exclude: []
        };
      }
      i(am, "normalizeContext");
      function xl(e, t) {
        for (var r, a = [], n, o = 0, l = e[t].length; o < l; o++)
          if (r = e[t][o], typeof r == "string") {
            n = Array.from(T.querySelectorAll(r)), a = a.concat(n.map(function(u) {
              return q(u);
            }));
            break;
          } else
            r && r.length && !(r instanceof D.Node) ? r.length > 1 ? rm(e, t, r) : (n = Array.from(T.querySelectorAll(r[0])), a = a.concat(n.map(function(u) {
              return q(u);
            }))) : r instanceof D.Node && (r.documentElement instanceof D.Node ? a.push(e.flatTree[0]) : a.push(q(r)));
        return a.filter(function(u) {
          return u;
        });
      }
      i(xl, "parseSelectorArray");
      function nm(e) {
        if (e.include.length === 0) {
          if (e.frames.length === 0) {
            var t = nt.isInFrame() ? "frame" : "page";
            return new Error("No elements found for include in " + t + " Context");
          }
          e.frames.forEach(function(r, a) {
            if (r.include.length === 0)
              return new Error("No elements found for include in Context of frame " + a);
          });
        }
      }
      i(nm, "validateContext");
      function im(e) {
        for (var t = e.include, r = e.exclude, a = Array.from(t).concat(Array.from(r)), n = 0; n < a.length; ++n) {
          var o = a[n];
          if (o instanceof D.Element)
            return o.ownerDocument.documentElement;
          if (o instanceof D.Document)
            return o.documentElement;
        }
        return T.documentElement;
      }
      i(im, "getRootNode2");
      function fa(e, t) {
        var r, a, n, o, l = this;
        e = vt(e), this.frames = [], this.page = typeof ((r = e) === null || r === void 0 ? void 0 : r.page) == "boolean" ? e.page : void 0, this.initiator = typeof ((a = e) === null || a === void 0 ? void 0 : a.initiator) == "boolean" ? e.initiator : !0, this.focusable = typeof ((n = e) === null || n === void 0 ? void 0 : n.focusable) == "boolean" ? e.focusable : !0, this.size = N((o = e) === null || o === void 0 ? void 0 : o.size) === "object" ? e.size : {}, e = am(e), this.flatTree = t ?? Nn(im(e)), this.exclude = e.exclude, this.include = e.include, this.include = xl(this, "include"), this.exclude = xl(this, "exclude"), Wn("frame, iframe", this).forEach(function(s) {
          Vn(s, l) && em(l, s.actualNode);
        }), typeof this.page > "u" && (this.page = tm(this), this.frames.forEach(function(s) {
          s.page = l.page;
        }));
        var u = nm(this);
        if (u instanceof Error)
          throw u;
        Array.isArray(this.include) || (this.include = Array.from(this.include)), this.include.sort(Hn);
      }
      i(fa, "Context");
      function om(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t.iframes === !1)
          return [];
        var r = new fa(e), a = r.frames;
        return a.map(function(n) {
          var o = n.node, l = je(n, $s);
          l.initiator = !1;
          var u = $r(o);
          return {
            frameSelector: u,
            frameContext: l
          };
        });
      }
      i(om, "_getFrameContexts");
      function lm(e) {
        var t = g._audit.rules.find(function(r) {
          return r.id === e;
        });
        if (!t)
          throw new Error("Cannot find rule by id: ".concat(e));
        return t;
      }
      i(lm, "getRule");
      var El = lm;
      function gt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = e.scrollWidth > e.clientWidth + t, a = e.scrollHeight > e.clientHeight + t;
        if (!!(r || a)) {
          var n = D.getComputedStyle(e), o = Al(n, "overflow-x"), l = Al(n, "overflow-y");
          if (r && o || a && l)
            return {
              elm: e,
              top: e.scrollTop,
              left: e.scrollLeft
            };
        }
      }
      i(gt, "_getScroll");
      function Al(e, t) {
        var r = e.getPropertyValue(t);
        return ["scroll", "auto"].includes(r);
      }
      i(Al, "isScrollable");
      function Fl(e) {
        return Array.from(e.children || e.childNodes || []).reduce(function(t, r) {
          var a = gt(r);
          return a && t.push(a), t.concat(Fl(r));
        }, []);
      }
      i(Fl, "getElmScrollRecursive");
      function um() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D, t = e.document.documentElement, r = [e.pageXOffset !== void 0 ? {
          elm: e,
          top: e.pageYOffset,
          left: e.pageXOffset
        } : {
          elm: t,
          top: t.scrollTop,
          left: t.scrollLeft
        }];
        return r.concat(Fl(T.body));
      }
      i(um, "getScrollState");
      var sm = um;
      function cm() {
        return vt(se);
      }
      i(cm, "_getStandards");
      function dm(e) {
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
      i(dm, "getStyleSheetFactory");
      var Cl = dm, Ye;
      function fm(e) {
        if (Ye && Ye.parentNode)
          return Ye.styleSheet === void 0 ? Ye.appendChild(T.createTextNode(e)) : Ye.styleSheet.cssText += e, Ye;
        if (!!e) {
          var t = T.head || T.getElementsByTagName("head")[0];
          return Ye = T.createElement("style"), Ye.type = "text/css", Ye.styleSheet === void 0 ? Ye.appendChild(T.createTextNode(e)) : Ye.styleSheet.cssText = e, t.appendChild(Ye), Ye;
        }
      }
      i(fm, "injectStyle");
      var pm = fm;
      function kl(e, t) {
        var r = q(e);
        if (e.nodeType === 9)
          return !1;
        if (e.nodeType === 11 && (e = e.host), r && r._isHidden !== null)
          return r._isHidden;
        var a = D.getComputedStyle(e, null);
        if (!a || !e.parentNode || a.getPropertyValue("display") === "none" || !t && a.getPropertyValue("visibility") === "hidden" || e.getAttribute("aria-hidden") === "true")
          return !0;
        var n = e.assignedSlot ? e.assignedSlot : e.parentNode, o = kl(n, !0);
        return r && (r._isHidden = o), o;
      }
      i(kl, "isHidden");
      var mm = kl;
      function hm(e) {
        var t, r, a = (t = (r = e.props) === null || r === void 0 ? void 0 : r.nodeName) !== null && t !== void 0 ? t : e.nodeName.toLowerCase();
        return e.namespaceURI === "http://www.w3.org/2000/svg" ? !1 : !!se.htmlElms[a];
      }
      i(hm, "isHtmlElement");
      var Ln = hm;
      function Rl(e) {
        return e.sort(function(t, r) {
          return Kt(t, r) ? 1 : -1;
        })[0];
      }
      i(Rl, "getDeepest");
      function vm(e, t) {
        var r = t.include && Rl(t.include.filter(function(n) {
          return Kt(n, e);
        })), a = t.exclude && Rl(t.exclude.filter(function(n) {
          return Kt(n, e);
        }));
        return !!(!a && r || a && Kt(a, r));
      }
      i(vm, "isNodeInContext");
      var Vn = vm;
      function gm(e, t) {
        return e.length !== t.length ? !1 : e.every(function(r, a) {
          var n = t[a];
          return Array.isArray(r) ? r.length !== n.length ? !1 : r.every(function(o, l) {
            return n[l] === o;
          }) : r === n;
        });
      }
      i(gm, "matchAncestry");
      var jn = gm;
      function bm(e, t) {
        return e = e.actualNode || e, t = t.actualNode || t, e === t ? 0 : e.compareDocumentPosition(t) & 4 ? -1 : 1;
      }
      i(bm, "nodeSorter");
      var Hn = bm;
      function ym(e, t, r, a) {
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
          var p = [].concat(oe(r), [f]), m = /^https?:\/\/|^\/\//i.test(d);
          return Un(d, t, p, a, m);
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
      i(ym, "parseSameOriginStylesheet");
      var Tl = ym;
      function Dm(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, o = wm(e);
        return o ? Tl(e, t, r, a, n) : Un(e.href, t, r, a, !0);
      }
      i(Dm, "parseStylesheet");
      function wm(e) {
        try {
          var t = e.cssRules;
          return !(!t && e.href);
        } catch {
          return !1;
        }
      }
      i(wm, "isSameOriginStylesheet");
      var zn = Dm;
      function _m(e, t, r, a, n) {
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
          return zn(l.sheet, t, r, a, l.isCrossOrigin);
        });
      }
      i(_m, "parseCrossOriginStylesheet");
      var Un = _m, xm = function() {
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
              It("Measure " + d.name + " took " + d.duration + "ms");
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
      }(), Ie = xm;
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
      function Sl() {
        if (T.elementsFromPoint)
          return T.elementsFromPoint;
        if (T.msElementsFromPoint)
          return T.msElementsFromPoint;
        var e = function() {
          var n = T.createElement("x");
          return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
        }(), t = e ? "pointer-events" : "visibility", r = e ? "none" : "hidden", a = T.createElement("style");
        return a.innerHTML = e ? "* { pointer-events: all }" : "* { visibility: visible }", function(n, o) {
          var l, u, s, c = [], d = [];
          for (T.head.appendChild(a); (l = T.elementFromPoint(n, o)) && c.indexOf(l) === -1; )
            c.push(l), d.push({
              value: l.style.getPropertyValue(t),
              priority: l.style.getPropertyPriority(t)
            }), l.style.setProperty(t, r, "important");
          for (c.indexOf(T.documentElement) < c.length - 1 && (c.splice(c.indexOf(T.documentElement), 1), c.push(T.documentElement)), u = d.length; s = d[--u]; )
            c[u].style.setProperty(t, s.value ? s.value : "", s.priority);
          return T.head.removeChild(a), c;
        };
      }
      i(Sl, "_pollyfillElementsFromPoint"), typeof D.addEventListener == "function" && (T.elementsFromPoint = Sl()), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
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
      function Em(e, t) {
        return e.concat(t).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
      }
      i(Em, "uniqueArray");
      var Er = Em;
      function Ol(e, t, r, a, n) {
        var o = n || {};
        return o.vNodes = e, o.vNodesIndex = 0, o.anyLevel = t, o.thisLevel = r, o.parentShadowId = a, o;
      }
      i(Ol, "createLocalVariables");
      var $n = [];
      function Am(e, t, r) {
        for (var a = [], n = Array.isArray(e) ? e : [e], o = Ol(n, t, null, e[0].shadowId, $n.pop()), l = []; o.vNodesIndex < o.vNodes.length; ) {
          for (var u, s, c = o.vNodes[o.vNodesIndex++], d = null, f = null, p = (((u = o.anyLevel) === null || u === void 0 ? void 0 : u.length) || 0) + (((s = o.thisLevel) === null || s === void 0 ? void 0 : s.length) || 0), m = !1, h = 0; h < p; h++) {
            var y, w, v, b = h < (((y = o.anyLevel) === null || y === void 0 ? void 0 : y.length) || 0) ? o.anyLevel[h] : o.thisLevel[h - (((w = o.anyLevel) === null || w === void 0 ? void 0 : w.length) || 0)];
            if ((!b[0].id || c.shadowId === o.parentShadowId) && $t(c, b[0]))
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
          for (c.children && c.children.length && (a.push(o), o = Ol(c.children, f, d, c.shadowId, $n.pop())); o.vNodesIndex === o.vNodes.length && a.length; )
            $n.push(o), o = a.pop();
        }
        return l;
      }
      i(Am, "matchExpressions");
      function Fm(e, t, r) {
        e = Array.isArray(e) ? e : [e];
        var a = Wr(t), n = vl(e, a, r);
        return n || Am(e, a, r);
      }
      i(Fm, "querySelectorAllFilter");
      var bt = Fm;
      function Cm(e) {
        var t = e.treeRoot, r = t === void 0 ? g._tree[0] : t, a = km(r);
        if (!a.length)
          return Promise.resolve();
        var n = T.implementation.createHTMLDocument("Dynamic document for loading cssom"), o = Cl(n);
        return Rm(a, o).then(function(l) {
          return Pl(l);
        });
      }
      i(Cm, "preloadCssom");
      var Il = Cm;
      function km(e) {
        var t = [], r = bt(e, "*", function(a) {
          return t.includes(a.shadowId) ? !1 : (t.push(a.shadowId), !0);
        }).map(function(a) {
          return {
            shadowId: a.shadowId,
            rootNode: Dr(a.actualNode)
          };
        });
        return Er(r, []);
      }
      i(km, "getAllRootNodesInTree");
      function Rm(e, t) {
        var r = [];
        return e.forEach(function(a, n) {
          var o = a.rootNode, l = a.shadowId, u = Tm(o, l, t);
          if (!u)
            return Promise.all(r);
          var s = n + 1, c = {
            rootNode: o,
            shadowId: l,
            convertDataToStylesheet: t,
            rootIndex: s
          }, d = [], f = Promise.all(u.map(function(p, m) {
            var h = [s, m];
            return zn(p, c, h, d);
          }));
          r.push(f);
        }), Promise.all(r);
      }
      i(Rm, "getCssomForAllRootNodes");
      function Pl(e) {
        return e.reduce(function(t, r) {
          return Array.isArray(r) ? t.concat(Pl(r)) : t.concat(r);
        }, []);
      }
      i(Pl, "flattenAssets");
      function Tm(e, t, r) {
        var a;
        return e.nodeType === 11 && t ? a = Sm(e, r) : a = Om(e), Pm(a);
      }
      i(Tm, "getStylesheetsOfRootNode");
      function Sm(e, t) {
        return Array.from(e.children).filter(Im).reduce(function(r, a) {
          var n = a.nodeName.toUpperCase(), o = n === "STYLE" ? a.textContent : a, l = n === "LINK", u = t({
            data: o,
            isLink: l,
            root: e
          });
          return r.push(u.sheet), r;
        }, []);
      }
      i(Sm, "getStylesheetsFromDocumentFragment");
      function Om(e) {
        return Array.from(e.styleSheets).filter(function(t) {
          return t.media ? Nl(t.media.mediaText) : !1;
        });
      }
      i(Om, "getStylesheetsFromDocument");
      function Im(e) {
        var t = e.nodeName.toUpperCase(), r = e.getAttribute("href"), a = e.getAttribute("rel"), n = t === "LINK" && r && a && e.rel.toUpperCase().includes("STYLESHEET"), o = t === "STYLE";
        return o || n && Nl(e.media);
      }
      i(Im, "filerStyleAndLinkAttributesInDocumentFragment");
      function Nl(e) {
        return e ? !e.toUpperCase().includes("PRINT") : !0;
      }
      i(Nl, "filterMediaIsPrint");
      function Pm(e) {
        var t = [];
        return e.filter(function(r) {
          return r.href ? t.includes(r.href) ? !1 : (t.push(r.href), !0) : !0;
        });
      }
      i(Pm, "filterStylesheetsWithSameHref");
      function Nm(e) {
        var t = e.treeRoot, r = t === void 0 ? g._tree[0] : t, a = bt(r, "video, audio", function(n) {
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
          return Mm(o);
        }));
      }
      i(Nm, "preloadMedia");
      var Ml = Nm;
      function Mm(e) {
        return new Promise(function(t) {
          e.readyState > 0 && t(e);
          function r() {
            e.removeEventListener("loadedmetadata", r), t(e);
          }
          i(r, "onMediaReady"), e.addEventListener("loadedmetadata", r);
        });
      }
      i(Mm, "isMediaElementReady");
      function Bm(e) {
        return N(e) === "object" && Array.isArray(e.assets);
      }
      i(Bm, "isValidPreloadObject");
      function Bl(e) {
        return !e || e.preload === void 0 || e.preload === null ? !0 : typeof e.preload == "boolean" ? e.preload : Bm(e.preload);
      }
      i(Bl, "_shouldPreload");
      function ql(e) {
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
        return n.assets = Er(e.preload.assets.map(function(l) {
          return l.toLowerCase();
        }), []), e.preload.timeout && typeof e.preload.timeout == "number" && !isNaN(e.preload.timeout) && (n.timeout = e.preload.timeout), n;
      }
      i(ql, "_getPreloadConfig");
      function qm(e) {
        var t = {
          cssom: Il,
          media: Ml
        };
        return Bl(e) ? new Promise(function(r, a) {
          var n = ql(e), o = n.assets, l = n.timeout, u = setTimeout(function() {
            return a(new Error("Preload assets timed out."));
          }, l);
          Promise.all(o.map(function(s) {
            return t[s](e).then(function(c) {
              return oc({}, s, c);
            });
          })).then(function(s) {
            var c = s.reduce(function(d, f) {
              return ie({}, d, f);
            }, {});
            clearTimeout(u), r(c);
          }).catch(function(s) {
            clearTimeout(u), a(s);
          });
        }) : Promise.resolve();
      }
      i(qm, "preload");
      var Ll = qm;
      function Lm(e, t) {
        function r(n) {
          return n.incomplete && n.incomplete.default ? n.incomplete.default : Bn();
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
      i(Lm, "getIncompleteReason");
      function Vl(e, t, r) {
        return function(a) {
          var n = e[a.id] || {}, o = n.messages || {}, l = Object.assign({}, n);
          delete l.messages, !r.reviewOnFail && a.result === void 0 ? (N(o.incomplete) === "object" && !Array.isArray(a.data) && (l.message = Lm(a.data, o)), l.message || (l.message = o.incomplete)) : l.message = a.result === t ? o.pass : o.fail, typeof l.message != "function" && (l.message = qn(l.message, a.data)), un(a, l);
        };
      }
      i(Vl, "extender");
      function Vm(e) {
        var t = g._audit.data.checks || {}, r = g._audit.data.rules || {}, a = yr(g._audit.rules, "id", e.id) || {};
        e.tags = vt(a.tags || []);
        var n = Vl(t, !0, a), o = Vl(t, !1, a);
        e.nodes.forEach(function(l) {
          l.any.forEach(n), l.all.forEach(n), l.none.forEach(o);
        }), un(e, vt(r[e.id] || {}));
      }
      i(Vm, "publishMetaData");
      var pa = Vm;
      function jm(e, t) {
        return bt(e, t);
      }
      i(jm, "querySelectorAll");
      var Ke = jm;
      function jl(e, t) {
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
      i(jl, "matchTags");
      function Hm(e, t, r) {
        var a = r.runOnly || {}, n = (r.rules || {})[e.id];
        return e.pageLevel && !t.page ? !1 : a.type === "rule" ? a.values.indexOf(e.id) !== -1 : n && typeof n.enabled == "boolean" ? n.enabled : a.type === "tag" && a.values ? jl(e, a.values) : jl(e, []);
      }
      i(Hm, "ruleShouldRun");
      var Hl = Hm;
      function zl(e, t) {
        if (!t)
          return e;
        var r = e.cloneNode(!1), a = Hr(r);
        if (r.nodeType === 1) {
          var n = r.outerHTML;
          r = ne.get(n, function() {
            return Ul(r, a, e, t);
          });
        } else
          r = Ul(r, a, e, t);
        return Array.from(e.childNodes).forEach(function(o) {
          r.appendChild(zl(o, t));
        }), r;
      }
      i(zl, "_filterHtmlAttrs");
      function Ul(e, t, r, a) {
        return t && (e = T.createElement(e.nodeName), Array.from(t).forEach(function(n) {
          zm(r, n.name, a) || e.setAttribute(n.name, n.value);
        })), e;
      }
      i(Ul, "setNodeAttributes");
      function zm(e, t, r) {
        return typeof r[t] > "u" ? !1 : r[t] === !0 ? !0 : zt(e, r[t]);
      }
      i(zm, "attributeMatches");
      function Um(e, t) {
        var r;
        if (e.length === 0)
          return t;
        e.length < t.length && (r = e, e = t, t = r);
        for (var a = 0, n = t.length; a < n; a++)
          e.includes(t[a]) || e.push(t[a]);
        return e;
      }
      i(Um, "pushNode");
      function $m(e) {
        return e.reduce(function(t, r) {
          return (!t.length || !Kt(t[t.length - 1], r)) && t.push(r), t;
        }, []);
      }
      i($m, "getOuterIncludes");
      function Wm(e, t) {
        var r = [], a;
        if (g._selectCache)
          for (var n = 0, o = g._selectCache.length; n < o; n++) {
            var l = g._selectCache[n];
            if (l.selector === e)
              return l.result;
          }
        for (var u = $m(t.include), s = Gm(t), c = 0; c < u.length; c++) {
          a = u[c];
          var d = bt(a, e, s);
          r = Um(r, d);
        }
        return g._selectCache && g._selectCache.push({
          selector: e,
          result: r
        }), r;
      }
      i(Wm, "select");
      var Wn = Wm;
      function Gm(e) {
        return !e.exclude || e.exclude.length === 0 ? null : function(t) {
          return Vn(t, e);
        };
      }
      i(Gm, "getContextFilter");
      function Ym(e, t, r) {
        if (e === D)
          return e.scroll(r, t);
        e.scrollTop = t, e.scrollLeft = r;
      }
      i(Ym, "setScroll");
      function Km(e) {
        e.forEach(function(t) {
          var r = t.elm, a = t.top, n = t.left;
          return Ym(r, a, n);
        });
      }
      i(Km, "setScrollState");
      var Xm = Km;
      function Jm(e) {
        var t = Array.isArray(e) ? oe(e) : [e];
        return $l(t, T);
      }
      i(Jm, "_shadowSelect");
      function $l(e, t) {
        var r = e.shift(), a = r ? t.querySelector(r) : null;
        return e.length === 0 ? a : a != null && a.shadowRoot ? $l(e, a.shadowRoot) : null;
      }
      i($l, "selectRecursive");
      function Qm() {
        return ["hidden", "text", "search", "tel", "url", "email", "password", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"];
      }
      i(Qm, "validInputTypes");
      var ma = Qm, Wl = [, [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , , , , , 1, 1, 1, 1, , , 1, 1, 1, , 1, , 1, , 1, 1], [1, 1, 1, , 1, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, 1, 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1], [1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , , 1, 1, , , , , , 1, 1], [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1], [, 1, , , 1, , , 1, , , , , , 1], [, 1, , 1, , , , 1, , , , 1], [1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [, 1, 1, , , , , , 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1], [, , , , 1, , , , , , , , , , , , , , , , , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, , 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, 1, , , , , 1], [1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , 1, , , , , , , 1], [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1], , [1, 1, 1, , , , , , , , , , , , , 1], [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1]], [, [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , 1, , , , , , , , , , , , , , , 1], [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1], [1, , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1], [, , , , , , , 1, , , , 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , 1], [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1], [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1], , [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1], [1, 1, , , 1, 1, , 1, , , , , 1, , 1]], [, [, 1], [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1], [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1], , [1, , , , , 1], [, 1, , , , 1, , , , 1], [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1], [, , , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , 1, , 1], [, 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1], [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1], [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1], [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1], [1, , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], , [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1], [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1], [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1], [1, , , , , , , , , , , , , , , , , 1], [, , , , , 1, , , 1, , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1], [, 1, , , , 1]], [, [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, 1, 1], [, , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], , [, , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1], , [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1], [1], [, , , , , , , , , , , 1, , , , , , , , , , , 1], [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , , 1], [, , 1, , , , , 1, , 1], [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1], [, , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1], [, , , , , 1, , , , , , , 1, , , , , , , 1], , [, , 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , , 1, 1, , 1, 1, 1, , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, , , , 1], , [1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, , , 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1], [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1], [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1], [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, , , , 1, 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1], [, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1], [, 1, , , , , , , , 1, , , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1], [1, 1, , , 1, , , 1, 1, 1, , , , 1], , [, , , , , , , , , , , , , 1, , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1], [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1], [, , , , , , , , , 1], [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1], [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , 1, , , , 1], , [1, 1, , 1, , 1, , , , , , 1, , 1, , 1, 1, , 1, , 1, 1, , 1, 1, , 1], [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1], [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1], [, 1, , 1, , , , , , , , , , , , 1], , [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1], [1]], [, [1, , , , , , , , , 1, , , , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1], [, 1, , , , , , , 1, , , , 1, , , , , , 1], [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1], [1], [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1], [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1], [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1], [1, , , , , , , , , , , , , , 1, , , , 1], [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1], [1, , , , , 1, , , , 1, , 1, 1, , , 1, 1, , 1, 1, 1, , 1, 1, 1, , 1], [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1], [1, , 1, 1, , 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , , , 1], [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1], [, , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1], [1, , 1, 1, 1, 1, , , , 1, , 1, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1], [1, , , , , , , , , , , , , 1], [, , 1, , , , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , , , 1, , 1, , 1, , , , 1], [, , , 1, , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1], [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1], [, , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , 1, , , , , , , , , , , , , 1], [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1], , [, , 1, , , 1, , , , , , 1, , , , 1], [, , , , , , , , , 1, , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , 1, , 1, , , 1, 1, 1, , , 1], [, , , , , 1, , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1], [, , , , , 1, , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1], [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1], [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1], [, , , , , , , , , , , , 1], , [, 1, 1, 1, 1, , , , 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1], [1, , , , 1, , , , , , , , , , 1], [1, , , , , , , , , 1], , [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , 1], [1, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, , 1, 1, , , , , 1], [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1, , 1, , 1, , , 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1], , [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1, , , , 1], [, 1, , , 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1], [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1], [1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1], [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1], , [, 1, , , , , , 1, , , , , , , 1], [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1]], [, [, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1], [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1], [1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , 1, 1, , 1, , 1, 1, 1, , 1, , 1, 1, , 1, 1, , 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , , 1, , , , , 1, , 1], [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1], [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1]], [, [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1], [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1], [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1], [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1], , [, , , , , , , , , , , , , , , 1, , , , 1, , 1], [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , , , , , , , , 1], [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1], [, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1], [1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1], [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1], [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1], , [1, 1, , 1, , 1, , 1, 1, , , , , , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1], [, 1, 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, , , 1, , , , 1, , , , 1, 1], [, , , , 1], [, , , , , , , , , 1, , , 1], , [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1], [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , , , , 1], [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1], [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], , [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1], [, , , , , , , , , , , , , 1], [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1], [, , , , , , , , , , , , , , 1]], [, [, 1], , , , , , , , , , , , , , , , , , , , [1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, , , , 1, , 1, 1], [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1], [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , , , , , , , , , , , , , , 1]], [, [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , 1, 1, , , , 1], [, , , , , , 1], [, , 1], [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1], , [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1], [, , , , , , , 1, , , , , , , , , 1], [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1], [, , , , , , , 1, , 1, , , , , , , , , , 1], [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1], , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1], [, , , , , , , , , , , , , , 1, , , , , , 1], , [, , , , , , , , , 1, , , , , , 1, , , , , 1], [, , 1, , , , , , , 1, , , 1, 1], [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1], [1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , , , 1, 1, 1, , , 1, 1, , , , 1, 1], , [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1], [, , , , 1, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , 1], [, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1], [1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1], [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1], [1, 1, 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1], [, 1, 1, 1, , 1, , 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [1, 1, , , , 1, , , 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, , 1], [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1]], [, [, , , , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1], , [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1], [, 1, , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1, , , 1], [, , , , , , , , , 1], [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1], [, , , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , , , , , 1], , [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1], [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1], [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1], [, , , , , 1, , , 1, , , , 1], [, 1], , [, 1], [1, , , , , , , , , , , , , , 1, , , , , 1]], [, [, 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , , 1], [, , 1, , , , , , , , , 1], , , [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1], , [, , , , , , , , , , , , , , , , , , 1, , 1], , [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1], , [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1], [, , , , , , , , , , , , , , , , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , 1, , , 1], [1, , , , , , , , , , , , , , , , , , 1, , 1], , , [, 1, , , , , , , , , , , , , , 1, , , , 1, 1], [, , , , , , , , , 1, , , 1, , , , , , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1, 1, , , , , , 1], , [, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1], [, 1, , , , , , , , 1], [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1], [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , , , , , 1], [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1], [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1], [, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, 1, 1, 1, , 1], [, 1, , , , , , , , 1], [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1], [, 1, , 1, , 1, , 1, 1, 1, , 1, 1, 1, , 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, , , 1, 1, , , , 1, , 1], [, , , 1], , [, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1], [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1], [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1], , [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1], [, 1, , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1]], [, [, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, , 1, , 1, 1, , , 1, 1, 1, 1, , 1, , , , , 1, 1, 1], [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1], [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1], [, 1], [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1], [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1], [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1], [, , 1, , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, , , , 1, 1], [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1], [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1], [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1], [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1], [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1], [, , , , , , , , 1, , , , , 1, , , 1]], [, [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1], [, , , , , , , , 1, , , , 1, , 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1], , [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1], [, 1, , , 1, , , , , , , , 1, , , , , , , 1], [1, 1, , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], , [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1], [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1], [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1], [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1], [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1], , [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1], [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1], [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1], [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1], [, , , , , , , 1, , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , 1], [, 1, , , , , , 1, 1, , , , , , 1], , [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1], [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1], [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1], , [, 1, 1, , 1, , , 1, 1, , , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , , 1], [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1], [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1], [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1], [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1], [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1], , [, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, , 1, , , , , 1, , , 1, , , , 1, , 1], [, 1, , , , , , , , , 1]]];
      function Zm(e) {
        for (var t = Wl; e.length < 3; )
          e += "`";
        for (var r = 0; r <= e.length - 1; r++) {
          var a = e.charCodeAt(r) - 96;
          if (t = t[a], !t)
            return !1;
        }
        return !0;
      }
      i(Zm, "isValidLang");
      function Gl(e) {
        e = Array.isArray(e) ? e : Wl;
        var t = [];
        return e.forEach(function(r, a) {
          var n = String.fromCharCode(a + 96).replace("`", "");
          Array.isArray(r) ? t = t.concat(Gl(r).map(function(o) {
            return n + o;
          })) : t.push(n);
        }), t;
      }
      i(Gl, "_validLangs");
      var ha = Zm, eh = function(e) {
        Ai(r, e);
        var t = Fi(r);
        function r(a) {
          var n;
          return dr(this, r), n = t.call(this), n._props = rh(a), n._attrs = ah(a), n;
        }
        return i(r, "SerialVirtualNode"), fr(r, [{
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
      }(J), Gn = {
        "#cdata-section": 2,
        "#text": 3,
        "#comment": 8,
        "#document": 9,
        "#document-fragment": 11
      }, Yl = {}, th = Object.keys(Gn);
      th.forEach(function(e) {
        Yl[Gn[e]] = e;
      });
      function rh(e) {
        var t, r, a, n = (t = e.nodeName) !== null && t !== void 0 ? t : Yl[e.nodeType], o = (r = (a = e.nodeType) !== null && a !== void 0 ? a : Gn[e.nodeName]) !== null && r !== void 0 ? r : 1;
        he(typeof o == "number", "nodeType has to be a number, got '".concat(o, "'")), he(typeof n == "string", "nodeName has to be a string, got '".concat(n, "'")), n = n.toLowerCase();
        var l = null;
        n === "input" && (l = (e.type || e.attributes && e.attributes.type || "").toLowerCase(), ma().includes(l) || (l = "text"));
        var u = ie({}, e, {
          nodeType: o,
          nodeName: n
        });
        return l && (u.type = l), delete u.attributes, Object.freeze(u);
      }
      i(rh, "normaliseProps");
      function ah(e) {
        var t = e.attributes, r = t === void 0 ? {} : t, a = {
          htmlFor: "for",
          className: "class"
        };
        return Object.keys(r).reduce(function(n, o) {
          var l = r[o];
          if (he(N(l) !== "object" || l === null, "expects attributes not to be an object, '".concat(o, "' was")), l !== void 0) {
            var u = a[o] || o;
            n[u] = l !== null ? String(l) : null;
          }
          return n;
        }, {});
      }
      i(ah, "normaliseAttrs");
      var Kl = eh, Xl = {};
      Re(Xl, {
        CssSelectorParser: /* @__PURE__ */ i(function() {
          return nh.CssSelectorParser;
        }, "CssSelectorParser"),
        doT: /* @__PURE__ */ i(function() {
          return Jl.default;
        }, "doT"),
        emojiRegexText: /* @__PURE__ */ i(function() {
          return Yn;
        }, "emojiRegexText"),
        memoize: /* @__PURE__ */ i(function() {
          return ih.default;
        }, "memoize")
      });
      var nh = ht(Ti()), Jl = ht(Hi()), Yn = /* @__PURE__ */ i(function() {
        return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
      }, "emoji_regex_default"), ih = ht(ji()), oh = ht(Fd()), lh = ht(Cd());
      ht(kd()), Jl.default.templateSettings.strip = !1, "Promise" in D || oh.default.polyfill(), "Uint32Array" in D || (D.Uint32Array = lh.Uint32Array), D.Uint32Array && ("some" in D.Uint32Array.prototype || Object.defineProperty(D.Uint32Array.prototype, "some", {
        value: Array.prototype.some
      }), "reduce" in D.Uint32Array.prototype || Object.defineProperty(D.Uint32Array.prototype, "reduce", {
        value: Array.prototype.reduce
      }));
      function uh(e, t) {
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
        var n = g.utils.getFlattenedTree(T.body);
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
      i(uh, "cleanup");
      var Ql = uh, Ar = {}, Zl;
      function eu(e) {
        return Ar.hasOwnProperty(e);
      }
      i(eu, "hasReporter");
      function Kn(e) {
        return typeof e == "string" && Ar[e] ? Ar[e] : typeof e == "function" ? e : Zl;
      }
      i(Kn, "getReporter");
      function sh(e, t, r) {
        Ar[e] = t, r && (Zl = t);
      }
      i(sh, "addReporter");
      function ch(e) {
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
        if (e.reporter && (typeof e.reporter == "function" || eu(e.reporter)) && (t.reporter = e.reporter), e.checks) {
          if (!Array.isArray(e.checks))
            throw new TypeError("Checks property must be an array");
          e.checks.forEach(function(M) {
            if (!M.id)
              throw new TypeError("Configured check ".concat(JSON.stringify(M), " is invalid. Checks must be an object with at least an id property"));
            t.addCheck(M);
          });
        }
        var k = [];
        if (e.rules) {
          if (!Array.isArray(e.rules))
            throw new TypeError("Rules property must be an array");
          e.rules.forEach(function(M) {
            if (!M.id)
              throw new TypeError("Configured rule ".concat(JSON.stringify(M), " is invalid. Rules must be an object with at least an id property"));
            k.push(M.id), t.addRule(M);
          });
        }
        if (e.disableOtherRules && t.rules.forEach(function(M) {
          k.includes(M.id) === !1 && (M.enabled = !1);
        }), typeof e.branding < "u" ? t.setBranding(e.branding) : t._constructHelpUrls(), e.tagExclude && (t.tagExclude = e.tagExclude), e.locale && t.applyLocale(e.locale), e.standards && np(e.standards), e.noHtml && (t.noHtml = !0), e.allowedOrigins) {
          if (!Array.isArray(e.allowedOrigins))
            throw new TypeError("Allowed origins property must be an array");
          if (e.allowedOrigins.includes("*"))
            throw new Error('"*" is not allowed. Use "'.concat(ee.allOrigins, '" instead'));
          t.setAllowedOrigins(e.allowedOrigins);
        }
      }
      i(ch, "configure");
      var dh = ch;
      function fh(e) {
        nt.updateMessenger(e);
      }
      i(fh, "frameMessenger2");
      function ph(e) {
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
      i(ph, "getRules");
      var mh = ph, tu = {};
      Re(tu, {
        allowedAttr: /* @__PURE__ */ i(function() {
          return ru;
        }, "allowedAttr"),
        arialabelText: /* @__PURE__ */ i(function() {
          return Fr;
        }, "arialabelText"),
        arialabelledbyText: /* @__PURE__ */ i(function() {
          return Rr;
        }, "arialabelledbyText"),
        getAccessibleRefs: /* @__PURE__ */ i(function() {
          return oi;
        }, "getAccessibleRefs"),
        getElementUnallowedRoles: /* @__PURE__ */ i(function() {
          return ju;
        }, "getElementUnallowedRoles"),
        getExplicitRole: /* @__PURE__ */ i(function() {
          return be;
        }, "getExplicitRole"),
        getImplicitRole: /* @__PURE__ */ i(function() {
          return ft;
        }, "getImplicitRole"),
        getOwnedVirtual: /* @__PURE__ */ i(function() {
          return kr;
        }, "getOwnedVirtual"),
        getRole: /* @__PURE__ */ i(function() {
          return ce;
        }, "getRole"),
        getRoleType: /* @__PURE__ */ i(function() {
          return dt;
        }, "getRoleType"),
        getRolesByType: /* @__PURE__ */ i(function() {
          return Gv;
        }, "getRolesByType"),
        getRolesWithNameFromContents: /* @__PURE__ */ i(function() {
          return Xv;
        }, "getRolesWithNameFromContents"),
        implicitNodes: /* @__PURE__ */ i(function() {
          return Qv;
        }, "implicitNodes"),
        implicitRole: /* @__PURE__ */ i(function() {
          return ft;
        }, "implicitRole"),
        isAccessibleRef: /* @__PURE__ */ i(function() {
          return Da;
        }, "isAccessibleRef"),
        isAriaRoleAllowedOnElement: /* @__PURE__ */ i(function() {
          return Vu;
        }, "isAriaRoleAllowedOnElement"),
        isUnsupportedRole: /* @__PURE__ */ i(function() {
          return Xn;
        }, "isUnsupportedRole"),
        isValidRole: /* @__PURE__ */ i(function() {
          return tr;
        }, "isValidRole"),
        label: /* @__PURE__ */ i(function() {
          return Uu;
        }, "label"),
        labelVirtual: /* @__PURE__ */ i(function() {
          return aa;
        }, "labelVirtual"),
        lookupTable: /* @__PURE__ */ i(function() {
          return zu;
        }, "lookupTable"),
        namedFromContents: /* @__PURE__ */ i(function() {
          return yu;
        }, "namedFromContents"),
        requiredAttr: /* @__PURE__ */ i(function() {
          return $u;
        }, "requiredAttr"),
        requiredContext: /* @__PURE__ */ i(function() {
          return ui;
        }, "requiredContext"),
        requiredOwned: /* @__PURE__ */ i(function() {
          return si;
        }, "requiredOwned"),
        validateAttr: /* @__PURE__ */ i(function() {
          return Or;
        }, "validateAttr"),
        validateAttrValue: /* @__PURE__ */ i(function() {
          return Wu;
        }, "validateAttrValue")
      });
      function hh() {
        return ne.get("globalAriaAttrs", function() {
          return Object.keys(se.ariaAttrs).filter(function(e) {
            return se.ariaAttrs[e].global;
          });
        });
      }
      i(hh, "getGlobalAriaAttrs");
      var Bt = hh;
      function vh(e) {
        var t = se.ariaRoles[e], r = oe(Bt());
        return t && (t.allowedAttrs && r.push.apply(r, oe(t.allowedAttrs)), t.requiredAttrs && r.push.apply(r, oe(t.requiredAttrs))), r;
      }
      i(vh, "allowedAttr");
      var ru = vh;
      function gh(e) {
        if (!(e instanceof J)) {
          if (e.nodeType !== 1)
            return "";
          e = q(e);
        }
        return e.attr("aria-label") || "";
      }
      i(gh, "arialabelText");
      var Fr = gh;
      function bh(e) {
        var t = se.ariaRoles[e];
        return t ? !!t.unsupported : !1;
      }
      i(bh, "isUnsupportedRole");
      var Xn = bh;
      function yh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.allowAbstract, a = t.flagUnsupported, n = a === void 0 ? !1 : a, o = se.ariaRoles[e], l = Xn(e);
        return !o || n && l ? !1 : r ? !0 : o.type !== "abstract";
      }
      i(yh, "isValidRole");
      var tr = yh;
      function Dh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fallback, a = t.abstracts, n = t.dpub;
        if (e = e instanceof J ? e : q(e), e.props.nodeType !== 1)
          return null;
        var o = (e.attr("role") || "").trim().toLowerCase(), l = r ? qe(o) : [o], u = l.find(function(s) {
          return !n && s.substr(0, 4) === "doc-" ? !1 : tr(s, {
            allowAbstract: a
          });
        });
        return u || null;
      }
      i(Dh, "getExplicitRole");
      var be = Dh;
      function wh(e) {
        return Object.keys(se.htmlElms).filter(function(t) {
          var r = se.htmlElms[t];
          return r.contentTypes ? r.contentTypes.includes(e) : r.variant && r.variant.default && r.variant.default.contentTypes ? r.variant.default.contentTypes.includes(e) : !1;
        });
      }
      i(wh, "getElementsByContentType");
      var Jn = wh;
      function _h(e) {
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
      i(_h, "toGrid");
      var yt = it(_h);
      function xh(e, t) {
        var r, a;
        for (t || (t = yt(Jt(e, "table"))), r = 0; r < t.length; r++)
          if (t[r] && (a = t[r].indexOf(e), a !== -1))
            return {
              x: a,
              y: r
            };
      }
      i(xh, "getCellPosition");
      var va = it(xh);
      function Eh(e) {
        var t = e instanceof J ? e : q(e);
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
        var n = yt(Jt(e, "table")), o = va(e, n), l = n[o.y].reduce(function(s, c) {
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
      i(Eh, "getScope");
      var Qn = Eh;
      function Ah(e) {
        return ["col", "auto"].indexOf(Qn(e)) !== -1;
      }
      i(Ah, "isColumnHeader");
      var rr = Ah;
      function Fh(e) {
        return ["row", "auto"].includes(Qn(e));
      }
      i(Fh, "isRowHeader");
      var ar = Fh, au = Jn("sectioning").map(function(e) {
        return "".concat(e, ":not([role])");
      }).join(", ") + " , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]";
      function nu(e) {
        var t = X(Rr(e)), r = X(Fr(e));
        return !!(t || r);
      }
      i(nu, "hasAccessibleName");
      var Ch = {
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
          var r = We(t, au);
          return r ? null : "contentinfo";
        }, "footer"),
        form: /* @__PURE__ */ i(function(t) {
          return nu(t) ? "form" : null;
        }, "form"),
        h1: "heading",
        h2: "heading",
        h3: "heading",
        h4: "heading",
        h5: "heading",
        h6: "heading",
        header: /* @__PURE__ */ i(function(t) {
          var r = We(t, au);
          return r ? null : "banner";
        }, "header"),
        hr: "separator",
        img: /* @__PURE__ */ i(function(t) {
          var r = t.hasAttr("alt") && !t.attr("alt"), a = Bt().find(function(n) {
            return t.hasAttr(n);
          });
          return r && !a && !Te(t) ? "presentation" : "img";
        }, "img"),
        input: /* @__PURE__ */ i(function(t) {
          var r;
          if (t.hasAttr("list")) {
            var a = ot(t.actualNode, "list").filter(function(n) {
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
          return nu(t) ? "region" : null;
        }, "section"),
        select: /* @__PURE__ */ i(function(t) {
          return t.hasAttr("multiple") || parseInt(t.attr("size")) > 1 ? "listbox" : "combobox";
        }, "select"),
        summary: "button",
        table: "table",
        tbody: "rowgroup",
        td: /* @__PURE__ */ i(function(t) {
          var r = We(t, "table"), a = be(r);
          return ["grid", "treegrid"].includes(a) ? "gridcell" : "cell";
        }, "td"),
        textarea: "textbox",
        tfoot: "rowgroup",
        th: /* @__PURE__ */ i(function(t) {
          if (rr(t))
            return "columnheader";
          if (ar(t))
            return "rowheader";
        }, "th"),
        thead: "rowgroup",
        tr: "row",
        ul: "list"
      }, Zn = Ch;
      function kh(e, t) {
        var r = N(t);
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
      i(kh, "fromPrimative");
      var qt = kh;
      function Rh(e, t) {
        return qt(!!$e(e), t);
      }
      i(Rh, "hasAccessibleName2");
      var iu = Rh;
      function Th(e, t) {
        var r = N(t);
        if (r !== "object" || Array.isArray(t) || t instanceof RegExp)
          throw new Error("Expect matcher to be an object");
        return Object.keys(t).every(function(a) {
          return qt(e(a), t[a]);
        });
      }
      i(Th, "fromFunction");
      var ei = Th;
      function Sh(e, t) {
        return e instanceof J || (e = q(e)), ei(function(r) {
          return e.attr(r);
        }, t);
      }
      i(Sh, "attributes");
      var ou = Sh;
      function Oh(e, t) {
        return !!t(e);
      }
      i(Oh, "condition");
      var lu = Oh;
      function Ih(e, t) {
        return qt(be(e), t);
      }
      i(Ih, "explicitRole");
      var uu = Ih;
      function Ph(e, t) {
        return qt(ft(e), t);
      }
      i(Ph, "implicitRole");
      var su = Ph;
      function Nh(e, t) {
        return e instanceof J || (e = q(e)), qt(e.props.nodeName, t);
      }
      i(Nh, "nodeName");
      var cu = Nh;
      function Mh(e, t) {
        return e instanceof J || (e = q(e)), ei(function(r) {
          return e.props[r];
        }, t);
      }
      i(Mh, "properties");
      var du = Mh;
      function Bh(e, t) {
        return qt(ce(e), t);
      }
      i(Bh, "semanticRole");
      var fu = Bh, pu = {
        hasAccessibleName: iu,
        attributes: ou,
        condition: lu,
        explicitRole: uu,
        implicitRole: su,
        nodeName: cu,
        properties: du,
        semanticRole: fu
      };
      function mu(e, t) {
        return e instanceof J || (e = q(e)), Array.isArray(t) ? t.some(function(r) {
          return mu(e, r);
        }) : typeof t == "string" ? Ga(e, t) : Object.keys(t).every(function(r) {
          if (!pu[r])
            throw new Error('Unknown matcher type "'.concat(r, '"'));
          var a = pu[r], n = t[r];
          return a(e, n);
        });
      }
      i(mu, "fromDefinition");
      var hu = mu;
      function qh(e, t) {
        return hu(e, t);
      }
      i(qh, "matches2");
      var Xe = qh;
      Xe.hasAccessibleName = iu, Xe.attributes = ou, Xe.condition = lu, Xe.explicitRole = uu, Xe.fromDefinition = hu, Xe.fromFunction = ei, Xe.fromPrimative = qt, Xe.implicitRole = su, Xe.nodeName = cu, Xe.properties = du, Xe.semanticRole = fu;
      var Cr = Xe;
      function Lh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noMatchAccessibleName, a = r === void 0 ? !1 : r, n = se.htmlElms[e.props.nodeName];
        if (!n)
          return {};
        if (!n.variant)
          return n;
        var o = n.variant, l = je(n, Ws);
        for (var u in o)
          if (!(!o.hasOwnProperty(u) || u === "default")) {
            for (var s = o[u], c = s.matches, d = je(s, Gs), f = Array.isArray(c) ? c : [c], p = 0; p < f.length && a; p++)
              if (f[p].hasOwnProperty("hasAccessibleName"))
                return n;
            if (Cr(e, c))
              for (var m in d)
                d.hasOwnProperty(m) && (l[m] = d[m]);
          }
        for (var h in o.default)
          o.default.hasOwnProperty(h) && typeof l[h] > "u" && (l[h] = o.default[h]);
        return l;
      }
      i(Lh, "getElementSpec");
      var Lt = Lh;
      function Vh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.chromium, a = e instanceof J ? e : q(e);
        if (e = a.actualNode, !a)
          throw new ReferenceError("Cannot get implicit role of a node outside the current scope.");
        var n = a.props.nodeName, o = Zn[n];
        if (!o && r) {
          var l = Lt(a), u = l.chromiumRole;
          return u || null;
        }
        return typeof o == "function" ? o(a) : o || null;
      }
      i(Vh, "implicitRole2");
      var ft = Vh, jh = {
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
      function vu(e, t) {
        var r = jh[e.props.nodeName];
        if (!r)
          return null;
        if (!e.parent)
          throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.");
        if (!r.includes(e.parent.props.nodeName))
          return null;
        var a = be(e.parent, t);
        return ["none", "presentation"].includes(a) && !bu(e.parent) ? a : a ? null : vu(e.parent, t);
      }
      i(vu, "getInheritedRole");
      function gu(e, t) {
        var r = t.chromium, a = je(t, Ys), n = ft(e, {
          chromium: r
        });
        if (!n)
          return null;
        var o = vu(e, a);
        return o || n;
      }
      i(gu, "resolveImplicitRole");
      function bu(e) {
        var t = Bt().some(function(r) {
          return e.hasAttr(r);
        });
        return t || Te(e);
      }
      i(bu, "hasConflictResolution");
      function Hh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noImplicit, a = je(t, Ks), n = e instanceof J ? e : q(e);
        if (n.props.nodeType !== 1)
          return null;
        var o = be(n, a);
        return o ? ["presentation", "none"].includes(o) && bu(n) ? r ? null : gu(n, a) : o : r ? null : gu(n, a);
      }
      i(Hh, "resolveRole");
      function zh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noPresentational, a = je(t, Xs), n = Hh(e, a);
        return r && ["presentation", "none"].includes(n) ? null : n;
      }
      i(zh, "getRole");
      var ce = zh, Uh = ["iframe"];
      function $h(e) {
        var t = e instanceof J ? e : q(e);
        return t.props.nodeType !== 1 || !e.hasAttr("title") || !Xe(t, Uh) && ["none", "presentation"].includes(ce(t)) ? "" : t.attr("title");
      }
      i($h, "titleText");
      var ga = $h;
      function Wh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.strict;
        if (e = e instanceof J ? e : q(e), e.props.nodeType !== 1)
          return !1;
        var a = ce(e), n = se.ariaRoles[a];
        return n && n.nameFromContent ? !0 : r ? !1 : !n || ["presentation", "none"].includes(a);
      }
      i(Wh, "namedFromContents");
      var yu = Wh;
      function Gh(e) {
        var t = e.actualNode, r = e.children;
        if (!r)
          throw new Error("getOwnedVirtual requires a virtual node");
        if (e.hasAttr("aria-owns")) {
          var a = ot(t, "aria-owns").filter(function(n) {
            return !!n;
          }).map(function(n) {
            return g.utils.getNodeFromTree(n);
          });
          return [].concat(oe(r), oe(a));
        }
        return oe(r);
      }
      i(Gh, "getOwnedVirtual");
      var kr = Gh;
      function Yh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = $e.alreadyProcessed;
        t.startNode = t.startNode || e;
        var a = t, n = a.strict, o = a.inControlContext, l = a.inLabelledByContext, u = Lt(e, {
          noMatchAccessibleName: !0
        }), s = u.contentTypes;
        if (r(e, t) || e.props.nodeType !== 1 || s != null && s.includes("embedded") || !yu(e, {
          strict: n
        }) && !t.subtreeDescendant)
          return "";
        if (!n) {
          var c = !o && !l;
          t = ie({
            subtreeDescendant: c
          }, t);
        }
        return kr(e).reduce(function(d, f) {
          return Xh(d, f, t);
        }, "");
      }
      i(Yh, "subtreeText");
      var Kh = Jn("phrasing").concat(["#text"]);
      function Xh(e, t, r) {
        var a = t.props.nodeName, n = $e(t, r);
        return n ? (Kh.includes(a) || (n[0] !== " " && (n += " "), e && e[e.length - 1] !== " " && (n = " " + n)), e + n) : e;
      }
      i(Xh, "appendAccessibleText");
      var Ft = Yh;
      function Jh(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = $e.alreadyProcessed;
        if (t.inControlContext || t.inLabelledByContext || r(e, t))
          return "";
        t.startNode || (t.startNode = e);
        var a = ie({
          inControlContext: !0
        }, t), n = Qh(e), o = We(e, "label"), l;
        return o ? (l = [].concat(oe(n), [o.actualNode]), l.sort(Hn)) : l = n, l.map(function(u) {
          return Vt(u, a);
        }).filter(function(u) {
          return u !== "";
        }).join(" ");
      }
      i(Jh, "labelText");
      function Qh(e) {
        if (!e.attr("id"))
          return [];
        if (!e.actualNode)
          throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
        return Eo({
          elm: "label",
          attr: "for",
          value: e.attr("id"),
          context: e.actualNode
        });
      }
      i(Qh, "getExplicitLabels");
      var ti = Jh, Zh = {
        submit: "Submit",
        image: "Submit",
        reset: "Reset",
        button: ""
      }, ev = {
        valueText: /* @__PURE__ */ i(function(t) {
          var r = t.actualNode;
          return r.value || "";
        }, "valueText"),
        buttonDefaultText: /* @__PURE__ */ i(function(t) {
          var r = t.actualNode;
          return Zh[r.type] || "";
        }, "buttonDefaultText"),
        tableCaptionText: ba.bind(null, "caption"),
        figureText: ba.bind(null, "figcaption"),
        svgTitleText: ba.bind(null, "title"),
        fieldsetLegendText: ba.bind(null, "legend"),
        altText: ri.bind(null, "alt"),
        tableSummaryText: ri.bind(null, "summary"),
        titleText: ga,
        subtreeText: Ft,
        labelText: ti,
        singleSpace: /* @__PURE__ */ i(function() {
          return " ";
        }, "singleSpace"),
        placeholderText: ri.bind(null, "placeholder")
      };
      function ri(e, t) {
        return t.attr(e) || "";
      }
      i(ri, "attrText");
      function ba(e, t, r) {
        var a = t.actualNode;
        e = e.toLowerCase();
        var n = [e, a.nodeName.toLowerCase()].join(","), o = a.querySelector(n);
        return !o || o.nodeName.toLowerCase() !== e ? "" : Vt(o, r);
      }
      i(ba, "descendantText");
      var Du = ev;
      function tv(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode;
        if (e.props.nodeType !== 1 || ["presentation", "none"].includes(ce(e)))
          return "";
        var a = rv(e), n = a.reduce(function(o, l) {
          return o || l(e, t);
        }, "");
        return t.debug && g.log(n || "{empty-value}", r, t), n;
      }
      i(tv, "nativeTextAlternative");
      function rv(e) {
        var t = Lt(e, {
          noMatchAccessibleName: !0
        }), r = t.namingMethods || [];
        return r.map(function(a) {
          return Du[a];
        });
      }
      i(rv, "findTextMethods");
      var wu = tv, av = {
        accessibleNameFromFieldValue: ["combobox", "listbox", "progressbar"]
      }, _u = av, nv = ["button", "checkbox", "color", "file", "hidden", "image", "password", "radio", "reset", "submit"];
      function iv(e) {
        e = e instanceof J ? e : q(e);
        var t = e.props.nodeName;
        return t === "textarea" || t === "input" && !nv.includes((e.attr("type") || "").toLowerCase());
      }
      i(iv, "isNativeTextbox");
      var xu = iv;
      function ov(e) {
        e = e instanceof J ? e : q(e);
        var t = e.props.nodeName;
        return t === "select";
      }
      i(ov, "isNativeSelect");
      var Eu = ov;
      function lv(e) {
        var t = be(e);
        return t === "textbox";
      }
      i(lv, "isAriaTextbox");
      var Au = lv;
      function uv(e) {
        var t = be(e);
        return t === "listbox";
      }
      i(uv, "isAriaListbox");
      var Fu = uv;
      function sv(e) {
        var t = be(e);
        return t === "combobox";
      }
      i(sv, "isAriaCombobox");
      var Cu = sv, cv = ["progressbar", "scrollbar", "slider", "spinbutton"];
      function dv(e) {
        var t = be(e);
        return cv.includes(t);
      }
      i(dv, "isAriaRange");
      var ku = dv, fv = ["textbox", "progressbar", "scrollbar", "slider", "spinbutton", "combobox", "listbox"], ai = {
        nativeTextboxValue: mv,
        nativeSelectValue: hv,
        ariaTextboxValue: vv,
        ariaListboxValue: Ru,
        ariaComboboxValue: gv,
        ariaRangeValue: bv
      };
      function pv(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode, a = _u.accessibleNameFromFieldValue || [], n = ce(e);
        if (t.startNode === e || !fv.includes(n) || a.includes(n))
          return "";
        var o = Object.keys(ai).map(function(u) {
          return ai[u];
        }), l = o.reduce(function(u, s) {
          return u || s(e, t);
        }, "");
        return t.debug && It(l || "{empty-value}", r, t), l;
      }
      i(pv, "formControlValue");
      function mv(e) {
        var t = e instanceof J ? e : q(e);
        return xu(t) && t.props.value || "";
      }
      i(mv, "nativeTextboxValue");
      function hv(e) {
        var t = e instanceof J ? e : q(e);
        if (!Eu(t))
          return "";
        var r = Ke(t, "option"), a = r.filter(function(n) {
          return n.props.selected;
        });
        return a.length || a.push(r[0]), a.map(function(n) {
          return st(n);
        }).join(" ") || "";
      }
      i(hv, "nativeSelectValue");
      function vv(e) {
        var t = e instanceof J ? e : q(e), r = t.actualNode;
        return Au(t) ? !r || r && !Et(r) ? st(t, !0) : r.textContent : "";
      }
      i(vv, "ariaTextboxValue");
      function Ru(e, t) {
        var r = e instanceof J ? e : q(e);
        if (!Fu(r))
          return "";
        var a = kr(r).filter(function(n) {
          return ce(n) === "option" && n.attr("aria-selected") === "true";
        });
        return a.length === 0 ? "" : $e(a[0], t);
      }
      i(Ru, "ariaListboxValue");
      function gv(e, t) {
        var r = e instanceof J ? e : q(e);
        if (!Cu(r))
          return "";
        var a = kr(r).filter(function(n) {
          return ce(n) === "listbox";
        })[0];
        return a ? Ru(a, t) : "";
      }
      i(gv, "ariaComboboxValue");
      function bv(e) {
        var t = e instanceof J ? e : q(e);
        if (!ku(t) || !t.hasAttr("aria-valuenow"))
          return "";
        var r = +t.attr("aria-valuenow");
        return isNaN(r) ? "0" : String(r);
      }
      i(bv, "ariaRangeValue");
      var Tu = pv;
      function Su() {
        return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
      }
      i(Su, "getUnicodeNonBmpRegExp");
      function Ou() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g;
      }
      i(Ou, "getPunctuationRegExp");
      function Iu() {
        return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
      }
      i(Iu, "getSupplementaryPrivateUseRegExp");
      function yv(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations;
        return r ? Yn().test(e) : a ? Su().test(e) || Iu().test(e) : n ? Ou().test(e) : !1;
      }
      i(yv, "hasUnicode");
      var ni = yv;
      function Dv(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, a = e.actualNode.nodeValue.trim();
        if (!X(a) || ni(a, {
          emoji: !0,
          nonBmp: !0
        }))
          return !1;
        var n = ne.get("canvasContext", function() {
          return T.createElement("canvas").getContext("2d");
        }), o = n.canvas;
        ne.get("fonts") || ne.set("fonts", {});
        var l = ne.get("fonts"), u = D.getComputedStyle(e.parent.actualNode), s = u.getPropertyValue("font-family");
        l[s] || (l[s] = {
          occurances: 0,
          numLigatures: 0
        });
        var c = l[s];
        if (c.occurances >= r) {
          if (c.numLigatures / c.occurances === 1)
            return !0;
          if (c.numLigatures === 0)
            return !1;
        }
        c.occurances++;
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
        var w = new Uint32Array(n.getImageData(0, 0, m, d).data.buffer), v = y.reduce(function(M, B, z) {
          return B === 0 && w[z] === 0 || B !== 0 && w[z] !== 0 ? M : ++M;
        }, 0), b = a.split("").reduce(function(M, B) {
          return M + n.measureText(B).width;
        }, 0), E = n.measureText(a).width, A = v / y.length, k = 1 - E / b;
        return A >= t && k >= t ? (c.numLigatures++, !0) : !1;
      }
      i(Dv, "isIconLigature");
      var Pu = Dv;
      function Nu(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t = Ev(e, t), _v(e, t) || xv(e, t))
          return "";
        var r = [Rr, Fr, wu, Tu, Ft, wv, ga], a = r.reduce(function(n, o) {
          return t.startNode === e && (n = X(n)), n !== "" ? n : o(e, t);
        }, "");
        return t.debug && g.log(a || "{empty-value}", e.actualNode, t), a;
      }
      i(Nu, "accessibleTextVirtual");
      function wv(e) {
        return e.props.nodeType !== 3 ? "" : e.props.nodeValue;
      }
      i(wv, "textNodeValue");
      function _v(e, t) {
        return !e || e.props.nodeType !== 1 || t.includeHidden ? !1 : !Fe(e);
      }
      i(_v, "shouldIgnoreHidden");
      function xv(e, t) {
        var r = t.ignoreIconLigature, a = t.pixelThreshold, n = t.occuranceThreshold;
        return e.props.nodeType !== 3 || !r ? !1 : Pu(e, a, n);
      }
      i(xv, "shouldIgnoreIconLigature");
      function Ev(e, t) {
        return t.startNode || (t = ie({
          startNode: e
        }, t)), e.props.nodeType === 1 && t.inLabelledByContext && t.includeHidden === void 0 && (t = ie({
          includeHidden: !Fe(e)
        }, t)), t;
      }
      i(Ev, "prepareContext"), Nu.alreadyProcessed = /* @__PURE__ */ i(function(t, r) {
        return r.processed = r.processed || [], r.processed.includes(t) ? !0 : (r.processed.push(t), !1);
      }, "alreadyProcessed");
      var $e = Nu;
      function Av(e, t) {
        var r = q(e);
        return $e(r, t);
      }
      i(Av, "accessibleText");
      var Vt = Av;
      function Fv(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e instanceof J)) {
          if (e.nodeType !== 1)
            return "";
          e = q(e);
        }
        if (e.props.nodeType !== 1 || t.inLabelledByContext || t.inControlContext || !e.attr("aria-labelledby"))
          return "";
        var r = ot(e, "aria-labelledby").filter(function(a) {
          return a;
        });
        return r.reduce(function(a, n) {
          var o = Vt(n, ie({
            inLabelledByContext: !0,
            startNode: t.startNode || e
          }, t));
          return a ? "".concat(a, " ").concat(o) : o;
        }, "");
      }
      i(Fv, "arialabelledbyText");
      var Rr = Fv, Tr = {};
      Re(Tr, {
        accessibleText: /* @__PURE__ */ i(function() {
          return Vt;
        }, "accessibleText"),
        accessibleTextVirtual: /* @__PURE__ */ i(function() {
          return $e;
        }, "accessibleTextVirtual"),
        autocomplete: /* @__PURE__ */ i(function() {
          return jt;
        }, "autocomplete"),
        formControlValue: /* @__PURE__ */ i(function() {
          return Tu;
        }, "formControlValue"),
        formControlValueMethods: /* @__PURE__ */ i(function() {
          return ai;
        }, "formControlValueMethods"),
        hasUnicode: /* @__PURE__ */ i(function() {
          return ni;
        }, "hasUnicode"),
        isHumanInterpretable: /* @__PURE__ */ i(function() {
          return ii;
        }, "isHumanInterpretable"),
        isIconLigature: /* @__PURE__ */ i(function() {
          return Pu;
        }, "isIconLigature"),
        isValidAutocomplete: /* @__PURE__ */ i(function() {
          return Mu;
        }, "isValidAutocomplete"),
        label: /* @__PURE__ */ i(function() {
          return Iv;
        }, "label"),
        labelText: /* @__PURE__ */ i(function() {
          return ti;
        }, "labelText"),
        labelVirtual: /* @__PURE__ */ i(function() {
          return ya;
        }, "labelVirtual"),
        nativeElementType: /* @__PURE__ */ i(function() {
          return Nv;
        }, "nativeElementType"),
        nativeTextAlternative: /* @__PURE__ */ i(function() {
          return wu;
        }, "nativeTextAlternative"),
        nativeTextMethods: /* @__PURE__ */ i(function() {
          return Du;
        }, "nativeTextMethods"),
        removeUnicode: /* @__PURE__ */ i(function() {
          return Sr;
        }, "removeUnicode"),
        sanitize: /* @__PURE__ */ i(function() {
          return X;
        }, "sanitize"),
        subtreeText: /* @__PURE__ */ i(function() {
          return Ft;
        }, "subtreeText"),
        titleText: /* @__PURE__ */ i(function() {
          return ga;
        }, "titleText"),
        unsupported: /* @__PURE__ */ i(function() {
          return _u;
        }, "unsupported"),
        visible: /* @__PURE__ */ i(function() {
          return Bu;
        }, "visible"),
        visibleTextNodes: /* @__PURE__ */ i(function() {
          return Mv;
        }, "visibleTextNodes"),
        visibleVirtual: /* @__PURE__ */ i(function() {
          return st;
        }, "visibleVirtual")
      });
      function Cv(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations;
        return r && (e = e.replace(Yn(), "")), a && (e = e.replace(Su(), ""), e = e.replace(Iu(), "")), n && (e = e.replace(Ou(), "")), e;
      }
      i(Cv, "removeUnicode");
      var Sr = Cv;
      function kv(e) {
        if (!e.length)
          return 0;
        var t = ["x", "i"];
        if (t.includes(e))
          return 0;
        var r = Sr(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return X(r) ? 1 : 0;
      }
      i(kv, "isHumanInterpretable");
      var ii = kv, jt = {
        stateTerms: ["on", "off"],
        standaloneTerms: ["name", "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "nickname", "username", "new-password", "current-password", "organization-title", "organization", "street-address", "address-line1", "address-line2", "address-line3", "address-level4", "address-level3", "address-level2", "address-level1", "country", "country-name", "postal-code", "cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc", "cc-type", "transaction-currency", "transaction-amount", "language", "bday", "bday-day", "bday-month", "bday-year", "sex", "url", "photo", "one-time-code"],
        qualifiers: ["home", "work", "mobile", "fax", "pager"],
        qualifiedTerms: ["tel", "tel-country-code", "tel-national", "tel-area-code", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-extension", "email", "impp"],
        locations: ["billing", "shipping"]
      };
      function Rv(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.looseTyped, a = r === void 0 ? !1 : r, n = t.stateTerms, o = n === void 0 ? [] : n, l = t.locations, u = l === void 0 ? [] : l, s = t.qualifiers, c = s === void 0 ? [] : s, d = t.standaloneTerms, f = d === void 0 ? [] : d, p = t.qualifiedTerms, m = p === void 0 ? [] : p;
        if (e = e.toLowerCase().trim(), o = o.concat(jt.stateTerms), o.includes(e) || e === "")
          return !0;
        c = c.concat(jt.qualifiers), u = u.concat(jt.locations), f = f.concat(jt.standaloneTerms), m = m.concat(jt.qualifiedTerms);
        var h = e.split(/\s+/g);
        if (!a && (h[0].length > 8 && h[0].substr(0, 8) === "section-" && h.shift(), u.includes(h[0]) && h.shift(), c.includes(h[0]) && (h.shift(), f = []), h.length !== 1))
          return !1;
        var y = h[h.length - 1];
        return f.includes(y) || m.includes(y);
      }
      i(Rv, "isValidAutocomplete");
      var Mu = Rv;
      function Tv(e, t, r) {
        return e = q(e), st(e, t, r);
      }
      i(Tv, "visible");
      var Bu = Tv;
      function Sv(e) {
        var t, r, a;
        if (r = aa(e), r)
          return r;
        if (e.attr("id")) {
          if (!e.actualNode)
            throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
          var n = Ae(e.attr("id"));
          if (a = He(e.actualNode), t = a.querySelector('label[for="' + n + '"]'), r = t && Bu(t, !0), r)
            return r;
        }
        return t = We(e, "label"), r = t && st(t, !0), r || null;
      }
      i(Sv, "labelVirtual2");
      var ya = Sv;
      function Ov(e) {
        return e = q(e), ya(e);
      }
      i(Ov, "label");
      var Iv = Ov, Pv = [{
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
      }], Nv = Pv;
      function qu(e) {
        var t = Ze(e), r = [];
        return e.children.forEach(function(a) {
          a.actualNode.nodeType === 3 ? t && r.push(a) : r = r.concat(qu(a));
        }), r;
      }
      i(qu, "visibleTextNodes");
      var Mv = qu, Bv = /^idrefs?$/;
      function Lu(e, t, r) {
        if (e.hasAttribute) {
          if (e.nodeName.toUpperCase() === "LABEL" && e.hasAttribute("for")) {
            var a = e.getAttribute("for");
            t[a] = t[a] || [], t[a].push(e);
          }
          for (var n = 0; n < r.length; ++n) {
            var o = r[n], l = X(e.getAttribute(o) || "");
            if (!!l)
              for (var u = qe(l), s = 0; s < u.length; ++s)
                t[u[s]] = t[u[s]] || [], t[u[s]].push(e);
          }
        }
        for (var c = 0; c < e.childNodes.length; c++)
          e.childNodes[c].nodeType === 1 && Lu(e.childNodes[c], t, r);
      }
      i(Lu, "cacheIdRefs");
      function qv(e) {
        e = e.actualNode || e;
        var t = He(e);
        t = t.documentElement || t;
        var r = ne.get("idRefsByRoot", function() {
          return /* @__PURE__ */ new WeakMap();
        }), a = r.get(t);
        if (!a) {
          a = {}, r.set(t, a);
          var n = Object.keys(se.ariaAttrs).filter(function(o) {
            var l = se.ariaAttrs[o].type;
            return Bv.test(l);
          });
          Lu(t, a, n);
        }
        return a[e.id] || [];
      }
      i(qv, "getAccessibleRefs");
      var oi = qv;
      function Lv(e, t) {
        var r = e instanceof J ? e : q(e), a = ft(r), n = Lt(r);
        return Array.isArray(n.allowedRoles) ? n.allowedRoles.includes(t) : t === a ? !1 : !!n.allowedRoles;
      }
      i(Lv, "isAriaRoleAllowedOnElement");
      var Vu = Lv, Vv = ["doc-backlink", "doc-biblioentry", "doc-biblioref", "doc-cover", "doc-endnote", "doc-glossref", "doc-noteref"], jv = {
        header: "banner",
        footer: "contentinfo"
      };
      function Hv(e) {
        var t = [];
        if (!e)
          return t;
        if (e.hasAttr("role")) {
          var r = qe(e.attr("role").toLowerCase());
          t = t.concat(r);
        }
        return t.filter(function(a) {
          return tr(a);
        });
      }
      i(Hv, "getRoleSegments");
      function zv(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = e instanceof J ? e : q(e);
        if (!Ln(r))
          return [];
        var a = r.props.nodeName, n = ft(r) || jv[a], o = Hv(r);
        return o.filter(function(l) {
          return !Uv(l, r, t, n);
        });
      }
      i(zv, "getElementUnallowedRoles");
      function Uv(e, t, r, a) {
        return r && e === a ? !0 : Vv.includes(e) && dt(e) !== a ? !1 : Vu(t, e);
      }
      i(Uv, "roleIsAllowed");
      var ju = zv;
      function $v(e) {
        return Object.keys(se.ariaRoles).filter(function(t) {
          return se.ariaRoles[t].type === e;
        });
      }
      i($v, "getAriaRolesByType");
      var nr = $v;
      function Wv(e) {
        return nr(e);
      }
      i(Wv, "getRolesByType");
      var Gv = Wv;
      function Yv() {
        return ne.get("ariaRolesNameFromContent", function() {
          return Object.keys(se.ariaRoles).filter(function(e) {
            return se.ariaRoles[e].nameFromContent;
          });
        });
      }
      i(Yv, "getAriaRolesSupportingNameFromContent");
      var li = Yv;
      function Kv() {
        return li();
      }
      i(Kv, "getRolesWithNameFromContents");
      var Xv = Kv, Hu = /* @__PURE__ */ i(function(t) {
        return t === null;
      }, "isNull"), Ue = /* @__PURE__ */ i(function(t) {
        return t !== null;
      }, "isNotNull"), Dt = {};
      Dt.attributes = {
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
      }, Dt.globalAttributes = ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"], Dt.role = {
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
      }, Dt.implicitHtmlRole = Zn, Dt.elementsAllowedNoRole = [{
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
      }], Dt.elementsAllowedAnyRole = [{
        nodeName: "a",
        attributes: {
          href: Hu
        }
      }, {
        nodeName: "img",
        attributes: {
          alt: Hu
        }
      }, {
        nodeName: ["abbr", "address", "canvas", "div", "p", "pre", "blockquote", "ins", "del", "output", "span", "table", "tbody", "thead", "tfoot", "td", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "ruby", "rt", "rp", "bdi", "bdo", "br", "wbr", "th", "tr"]
      }], Dt.evaluateRoleForElement = {
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
      }, Dt.rolesOfType = {
        widget: ["button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "tree", "treeitem"]
      };
      var zu = Dt;
      function Jv(e) {
        var t = null, r = zu.role[e];
        return r && r.implicit && (t = vt(r.implicit)), t;
      }
      i(Jv, "implicitNodes");
      var Qv = Jv;
      function Zv(e) {
        return !!oi(e).length;
      }
      i(Zv, "isAccessibleRef");
      var Da = Zv;
      function eg(e) {
        return e = q(e), aa(e);
      }
      i(eg, "label2");
      var Uu = eg;
      function tg(e) {
        var t = se.ariaRoles[e];
        return !t || !Array.isArray(t.requiredAttrs) ? [] : oe(t.requiredAttrs);
      }
      i(tg, "requiredAttr");
      var $u = tg;
      function rg(e) {
        var t = se.ariaRoles[e];
        return !t || !Array.isArray(t.requiredContext) ? null : oe(t.requiredContext);
      }
      i(rg, "requiredContext");
      var ui = rg;
      function ag(e) {
        var t = se.ariaRoles[e];
        return !t || !Array.isArray(t.requiredOwned) ? null : oe(t.requiredOwned);
      }
      i(ag, "requiredOwned");
      var si = ag;
      function ng(e, t) {
        e = e instanceof J ? e : q(e);
        var r, a, n = e.attr(t), o = se.ariaAttrs[t];
        if (!o || o.allowEmpty && (!n || n.trim() === ""))
          return !0;
        switch (o.type) {
          case "boolean":
            return ["true", "false"].includes(n.toLowerCase());
          case "nmtoken":
            return typeof n == "string" && o.values.includes(n.toLowerCase());
          case "nmtokens":
            return a = qe(n), a.reduce(function(s, c) {
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
            return ot(e, t).some(function(s) {
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
      i(ng, "validateAttrValue");
      var Wu = ng;
      function ig(e) {
        var t = se.ariaAttrs[e];
        return !!t;
      }
      i(ig, "validateAttr");
      var Or = ig;
      function og(e, t, r) {
        var a = qe(r.attr("role")).filter(function(n) {
          return dt(n) === "abstract";
        });
        return a.length > 0 ? (this.data(a), !0) : !1;
      }
      i(og, "abstractroleEvaluate");
      var lg = og;
      function ug(e, t, r) {
        var a = [], n = ce(r), o = r.attrNames, l = ru(n);
        Array.isArray(t[n]) && (l = Er(t[n].concat(l)));
        var u = ne.get("aria-allowed-attr-table", function() {
          return /* @__PURE__ */ new WeakMap();
        });
        function s() {
          if (r.parent && n === "row") {
            var h = We(r, 'table, [role="treegrid"], [role="table"], [role="grid"]'), y = u.get(h);
            if (h && !y && (y = ce(h), u.set(h, y)), ["table", "grid"].includes(y) && n === "row")
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
            (Or(m) && (p = d[m]) !== null && p !== void 0 && p.call(d) || Or(m) && !l.includes(m)) && a.push(m + '="' + r.attr(m) + '"');
          }
        return a.length ? (this.data(a), !Ln(r) && !n && !Te(r) ? void 0 : !1) : !0;
      }
      i(ug, "ariaAllowedAttrEvaluate");
      function sg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t.allowImplicit, n = a === void 0 ? !0 : a, o = t.ignoredTags, l = o === void 0 ? [] : o, u = r.props.nodeName;
        if (l.map(function(c) {
          return c.toLowerCase();
        }).includes(u))
          return !0;
        var s = ju(r, n);
        return s.length ? (this.data(s), Fe(r) ? !1 : void 0) : !0;
      }
      i(sg, "ariaAllowedRoleEvaluate");
      var cg = sg;
      function dg(e, t, r) {
        return r.attr("aria-busy") === "true";
      }
      i(dg, "ariaBusyEvaluate");
      function fg(e, t, r) {
        t = Array.isArray(t) ? t : [];
        var a = r.attr("aria-errormessage"), n = r.hasAttr("aria-errormessage"), o = r.attr("aria-invalid"), l = r.hasAttr("aria-invalid");
        if (!l || o === "false")
          return !0;
        function u(s) {
          if (s.trim() === "")
            return se.ariaAttrs["aria-errormessage"].allowEmpty;
          var c;
          try {
            c = s && ot(r, "aria-errormessage")[0];
          } catch {
            this.data({
              messageKey: "idrefs",
              values: qe(s)
            });
            return;
          }
          if (c)
            return Fe(c) ? c.getAttribute("role") === "alert" || c.getAttribute("aria-live") === "assertive" || c.getAttribute("aria-live") === "polite" || qe(r.attr("aria-describedby")).indexOf(s) > -1 : (this.data({
              messageKey: "hidden",
              values: qe(s)
            }), !1);
        }
        return i(u, "validateAttrValue2"), t.indexOf(a) === -1 && n ? (this.data(qe(a)), u.call(this, a)) : !0;
      }
      i(fg, "ariaErrormessageEvaluate");
      var pg = fg;
      function mg(e, t, r) {
        return r.attr("aria-hidden") !== "true";
      }
      i(mg, "ariaHiddenBodyEvaluate");
      var hg = mg;
      function vg(e, t, r) {
        var a = r.attr("aria-level"), n = parseInt(a, 10);
        if (!(n > 6))
          return !0;
      }
      i(vg, "ariaLevelEvaluate");
      var gg = vg;
      function bg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t?.elementsAllowedAriaLabel || [], n = r.props.nodeName, o = ce(r, {
          chromium: !0
        }), l = yg(o, n, a), u = l.filter(function(d) {
          return r.attrNames.includes(d) ? X(r.attr(d)) !== "" : !1;
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
        if (X(c) === "")
          return !0;
      }
      i(bg, "ariaProhibitedAttrEvaluate");
      function yg(e, t, r) {
        var a = se.ariaRoles[e];
        return a ? a.prohibitedAttrs || [] : !!e || r.includes(t) ? [] : ["aria-label", "aria-labelledby"];
      }
      i(yg, "listProhibitedAttrs");
      var Gu = {};
      Re(Gu, {
        getAriaRolesByType: /* @__PURE__ */ i(function() {
          return nr;
        }, "getAriaRolesByType"),
        getAriaRolesSupportingNameFromContent: /* @__PURE__ */ i(function() {
          return li;
        }, "getAriaRolesSupportingNameFromContent"),
        getElementSpec: /* @__PURE__ */ i(function() {
          return Lt;
        }, "getElementSpec"),
        getElementsByContentType: /* @__PURE__ */ i(function() {
          return Jn;
        }, "getElementsByContentType"),
        getGlobalAriaAttrs: /* @__PURE__ */ i(function() {
          return Bt;
        }, "getGlobalAriaAttrs"),
        implicitHtmlRoles: /* @__PURE__ */ i(function() {
          return Zn;
        }, "implicitHtmlRoles")
      });
      function Dg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = [], n = r.attrNames, o = be(r);
        if (n.length) {
          var l = $u(o), u = Lt(r);
          if (Array.isArray(t[o]) && (l = Er(t[o], l)), o && l)
            for (var s = 0, c = l.length; s < c; s++) {
              var d = l[s];
              !r.attr(d) && !(u.implicitAttrs && typeof u.implicitAttrs[d] < "u") && a.push(d);
            }
        }
        var f = o === "combobox" && a.includes("aria-controls");
        return f && (r.hasAttr("aria-owns") || r.attr("aria-expanded") !== "true") && a.splice(a.indexOf("aria-controls", 1)), a.length ? (this.data(a), !1) : !0;
      }
      i(Dg, "ariaRequiredAttrEvaluate");
      var wg = Dg;
      function _g(e, t) {
        for (var r = [], a = kr(e), n = /* @__PURE__ */ i(function(u) {
          var s = a[u], c = ce(s, {
            noPresentational: !0
          }), d = Bt().some(function(p) {
            return s.hasAttr(p);
          }), f = d || Te(s);
          !c && !f || ["group", "rowgroup"].includes(c) && t.some(function(p) {
            return p === c;
          }) ? a.push.apply(a, oe(s.children)) : (c || f) && r.push({
            role: c,
            ownedElement: s
          });
        }, "_loop5"), o = 0; o < a.length; o++)
          n(o);
        return r;
      }
      i(_g, "getOwnedRoles");
      function xg(e, t, r, a) {
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
          if (N(l) === "object")
            return l.v;
        }
        return r.length ? r : null;
      }
      i(xg, "missingRequiredChildren");
      function Eg(e, t, r) {
        var a = t && Array.isArray(t.reviewEmpty) ? t.reviewEmpty : [], n = be(r, {
          dpub: !0
        }), o = si(n);
        if (o === null)
          return !0;
        var l = _g(r, o), u = l.filter(function(c) {
          var d = c.role;
          return !o.includes(d);
        });
        if (u.length)
          return this.relatedNodes(u.map(function(c) {
            var d = c.ownedElement;
            return d;
          })), this.data({
            messageKey: "unallowed"
          }), !1;
        var s = xg(r, n, o, l);
        if (!s)
          return !0;
        if (this.data(s), !(a.includes(n) && !wr(r, !1, !0) && !l.length && (!r.hasAttr("aria-owns") || !ot(e, "aria-owns").length)))
          return !1;
      }
      i(Eg, "ariaRequiredChildrenEvaluate");
      var Ag = Eg;
      function Yu(e, t, r, a) {
        var n = be(e);
        if (r || (r = ui(n)), !r)
          return null;
        for (var o = r.includes("group"), l = a ? e : e.parent; l; ) {
          var u = ce(l, {
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
      i(Yu, "getMissingContext");
      function Fg(e) {
        for (var t = [], r = null; e; ) {
          if (e.getAttribute("id")) {
            var a = Ae(e.getAttribute("id")), n = He(e);
            r = n.querySelector("[aria-owns~=".concat(a, "]")), r && t.push(r);
          }
          e = e.parentElement;
        }
        return t.length ? t : null;
      }
      i(Fg, "getAriaOwners");
      function Cg(e, t, r) {
        var a = t && Array.isArray(t.ownGroupRoles) ? t.ownGroupRoles : [], n = Yu(r, a);
        if (!n)
          return !0;
        var o = Fg(e);
        if (o) {
          for (var l = 0, u = o.length; l < u; l++)
            if (n = Yu(q(o[l]), a, n, !0), !n)
              return !0;
        }
        return this.data(n), !1;
      }
      i(Cg, "ariaRequiredParentEvaluate");
      var kg = Cg;
      function Rg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = ce(r), n = t.supportedRoles || [];
        if (n.includes(a))
          return !0;
        if (!(a && a !== "presentation" && a !== "none"))
          return !1;
      }
      i(Rg, "ariaRoledescriptionEvaluate");
      var Tg = Rg;
      function Sg(e, t, r) {
        var a = r.attrNames.filter(function(n) {
          var o = se.ariaAttrs[n];
          if (!Or(n))
            return !1;
          var l = o.unsupported;
          return N(l) !== "object" ? !!l : !Cr(e, l.exceptions);
        });
        return a.length ? (this.data(a), !0) : !1;
      }
      i(Sg, "ariaUnsupportedAttrEvaluate");
      var Og = Sg;
      function Ig(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = [], n = /^aria-/;
        return r.attrNames.forEach(function(o) {
          t.indexOf(o) === -1 && n.test(o) && !Or(o) && a.push(o);
        }), a.length ? (this.data(a), !1) : !0;
      }
      i(Ig, "ariaValidAttrEvaluate");
      var Pg = Ig;
      function Ng(e, t, r) {
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
              d = Wu(r, c);
            } catch {
              a = "".concat(c, '="').concat(f, '"'), n = "idrefs";
              return;
            }
            (s[c] ? s[c](d) : !0) && !d && (f === "" && !Mg(c) ? (a = c, n = "empty") : o.push("".concat(c, '="').concat(f, '"')));
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
      i(Ng, "ariaValidAttrValueEvaluate");
      function Mg(e) {
        var t;
        return ((t = se.ariaAttrs[e]) === null || t === void 0 ? void 0 : t.type) === "string";
      }
      i(Mg, "isStringType");
      function Bg(e, t, r) {
        var a = ce(r, {
          dpub: !0,
          fallback: !0
        }), n = se.ariaRoles[a];
        return n != null && n.deprecated ? (this.data(a), !0) : !1;
      }
      i(Bg, "deprecatedroleEvaluate");
      function qg(e, t) {
        var r = ft(e);
        return !r && t.length === 2 && t.includes("none") && t.includes("presentation");
      }
      i(qg, "nonePresentationOnElementWithNoImplicitRole");
      function Lg(e, t, r) {
        var a = qe(r.attr("role"));
        return a.length <= 1 ? !1 : qg(r, a) ? void 0 : !0;
      }
      i(Lg, "fallbackroleEvaluate");
      var Vg = Lg;
      function jg(e, t, r) {
        var a = Bt().filter(function(n) {
          return r.hasAttr(n);
        });
        return this.data(a), a.length > 0;
      }
      i(jg, "hasGlobalAriaAttributeEvaluate");
      var Hg = jg;
      function zg(e) {
        var t = e.getAttribute("role");
        if (t === null)
          return !1;
        var r = dt(t);
        return r === "widget" || r === "composite";
      }
      i(zg, "hasWidgetRoleEvaluate");
      var Ug = zg;
      function $g(e, t, r) {
        var a = qe(r.attr("role")), n = a.every(function(o) {
          return !tr(o, {
            allowAbstract: !0
          });
        });
        return n ? (this.data(a), !0) : !1;
      }
      i($g, "invalidroleEvaluate");
      var Wg = $g;
      function Gg(e, t, r) {
        return Te(r);
      }
      i(Gg, "isElementFocusableEvaluate");
      var Yg = Gg;
      function Kg(e, t, r) {
        var a = ce(r, {
          noImplicit: !0
        });
        this.data(a);
        var n, o;
        try {
          n = X(ti(r)).toLowerCase(), o = X($e(r)).toLowerCase();
        } catch {
          return;
        }
        if (!o && !n)
          return !1;
        if (!(!o && n) && !!o.includes(n))
          return !1;
      }
      i(Kg, "noImplicitExplicitLabelEvaluate");
      var Xg = Kg;
      function Jg(e, t, r) {
        var a = ce(r, {
          dpub: !0,
          fallback: !0
        }), n = Xn(a);
        return n && this.data(a), n;
      }
      i(Jg, "unsupportedroleEvaluate");
      var Qg = Jg, Zg = {
        ARTICLE: !0,
        ASIDE: !0,
        NAV: !0,
        SECTION: !0
      }, eb = {
        application: !0,
        banner: !1,
        complementary: !0,
        contentinfo: !0,
        form: !0,
        main: !0,
        navigation: !0,
        region: !0,
        search: !1
      };
      function tb(e) {
        var t = e.nodeName.toUpperCase();
        return Zg[t] || !1;
      }
      i(tb, "validScrollableTagName");
      function rb(e, t) {
        var r = be(e);
        return r && (eb[r] || t.roles.includes(r)) || !1;
      }
      i(rb, "validScrollableRole");
      function ab(e, t) {
        return rb(e, t) || tb(e);
      }
      i(ab, "validScrollableSemanticsEvaluate");
      var nb = ab, Ku = {};
      Re(Ku, {
        Color: /* @__PURE__ */ i(function() {
          return et;
        }, "Color"),
        centerPointOfRect: /* @__PURE__ */ i(function() {
          return ob;
        }, "centerPointOfRect"),
        elementHasImage: /* @__PURE__ */ i(function() {
          return oa;
        }, "elementHasImage"),
        elementIsDistinct: /* @__PURE__ */ i(function() {
          return Ju;
        }, "elementIsDistinct"),
        filteredRectStack: /* @__PURE__ */ i(function() {
          return Zu;
        }, "filteredRectStack"),
        flattenColors: /* @__PURE__ */ i(function() {
          return Ir;
        }, "flattenColors"),
        flattenShadowColors: /* @__PURE__ */ i(function() {
          return wa;
        }, "flattenShadowColors"),
        getBackgroundColor: /* @__PURE__ */ i(function() {
          return Pr;
        }, "getBackgroundColor"),
        getBackgroundStack: /* @__PURE__ */ i(function() {
          return es;
        }, "getBackgroundStack"),
        getContrast: /* @__PURE__ */ i(function() {
          return ir;
        }, "getContrast"),
        getForegroundColor: /* @__PURE__ */ i(function() {
          return xa;
        }, "getForegroundColor"),
        getOwnBackgroundColor: /* @__PURE__ */ i(function() {
          return Nt;
        }, "getOwnBackgroundColor"),
        getRectStack: /* @__PURE__ */ i(function() {
          return Qu;
        }, "getRectStack"),
        getTextShadowColors: /* @__PURE__ */ i(function() {
          return _a;
        }, "getTextShadowColors"),
        hasValidContrastRatio: /* @__PURE__ */ i(function() {
          return kb;
        }, "hasValidContrastRatio"),
        incompleteData: /* @__PURE__ */ i(function() {
          return ze;
        }, "incompleteData")
      });
      function ib(e) {
        if (!(e.left > D.innerWidth) && !(e.top > D.innerHeight)) {
          var t = Math.min(Math.ceil(e.left + e.width / 2), D.innerWidth - 1), r = Math.min(Math.ceil(e.top + e.height / 2), D.innerHeight - 1);
          return {
            x: t,
            y: r
          };
        }
      }
      i(ib, "centerPointOfRect");
      var ob = ib;
      function Xu(e) {
        return e.getPropertyValue("font-family").split(/[,;]/g).map(function(t) {
          return t.trim().toLowerCase();
        });
      }
      i(Xu, "_getFonts");
      function lb(e, t) {
        var r = D.getComputedStyle(e);
        if (r.getPropertyValue("background-image") !== "none")
          return !0;
        var a = ["border-bottom", "border-top", "outline"].reduce(function(u, s) {
          var c = new et();
          return c.parseString(r.getPropertyValue(s + "-color")), u || r.getPropertyValue(s + "-style") !== "none" && parseFloat(r.getPropertyValue(s + "-width")) > 0 && c.alpha !== 0;
        }, !1);
        if (a)
          return !0;
        var n = D.getComputedStyle(t);
        if (Xu(r)[0] !== Xu(n)[0])
          return !0;
        var o = ["text-decoration-line", "text-decoration-style", "font-weight", "font-style", "font-size"].reduce(function(u, s) {
          return u || r.getPropertyValue(s) !== n.getPropertyValue(s);
        }, !1), l = r.getPropertyValue("text-decoration");
        return l.split(" ").length < 3 && (o = o || l !== n.getPropertyValue("text-decoration")), o;
      }
      i(lb, "elementIsDistinct");
      var Ju = lb;
      function ub(e) {
        var t = _n(e), r = Jo(e);
        return !r || r.length <= 1 ? [t] : r.some(function(a) {
          return a === void 0;
        }) ? null : (r.splice(0, 0, t), r);
      }
      i(ub, "getRectStack2");
      var Qu = ub;
      function sb(e) {
        var t = Qu(e);
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
          }), a ? t[0] : (ze.set("bgColor", "elmPartiallyObscuring"), null);
        }
        return ze.set("bgColor", "outsideViewport"), null;
      }
      i(sb, "filteredRectStack");
      var Zu = sb;
      function cb(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      i(cb, "clamp");
      var db = {
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
      function ci(e, t, r, a, n) {
        return t * (1 - a) * e + t * a * db[n](r / 255, e / 255) * 255 + (1 - t) * a * r;
      }
      i(ci, "simpleAlphaCompositing");
      function fb(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "normal", a = ci(e.red, e.alpha, t.red, t.alpha, r), n = ci(e.green, e.alpha, t.green, t.alpha, r), o = ci(e.blue, e.alpha, t.blue, t.alpha, r), l = cb(e.alpha + t.alpha * (1 - e.alpha), 0, 1), u = Math.round(a / l), s = Math.round(n / l), c = Math.round(o / l);
        return new et(u, s, c, l);
      }
      i(fb, "flattenColors");
      var Ir = fb;
      function pb(e, t) {
        var r = e.alpha, a = (1 - r) * t.red + r * e.red, n = (1 - r) * t.green + r * e.green, o = (1 - r) * t.blue + r * e.blue, l = e.alpha + t.alpha * (1 - e.alpha);
        return new et(a, n, o, l);
      }
      i(pb, "flattenColors2");
      var wa = pb;
      function mb(e, t) {
        var r = D.Node.DOCUMENT_POSITION_CONTAINED_BY;
        if (!(e.compareDocumentPosition(t) & r))
          return !1;
        var a = D.getComputedStyle(t), n = a.getPropertyValue("display");
        if (!n.includes("inline"))
          return !1;
        var o = a.getPropertyValue("position");
        return o === "static";
      }
      i(mb, "isInlineDescendant");
      function hb(e, t, r) {
        for (var a = e - 1; a >= 0; a--) {
          if (!mb(r, t[a]))
            return !0;
          t.splice(a, 1);
        }
        return !1;
      }
      i(hb, "calculateObscuringElement");
      function vb(e) {
        var t = e.indexOf(T.body), r = e, a = Nt(D.getComputedStyle(T.documentElement));
        if (t > 1 && a.alpha === 0 && !oa(T.documentElement)) {
          t > 1 && (r.splice(t, 1), r.push(T.body));
          var n = r.indexOf(T.documentElement);
          n > 0 && (r.splice(n, 1), r.push(T.documentElement));
        }
        return r;
      }
      i(vb, "sortPageBackground");
      function gb(e) {
        var t = Zu(e);
        if (t === null)
          return null;
        t = fl(t, e), t = vb(t);
        var r = t.indexOf(e);
        return hb(r, t, e) ? (ze.set("bgColor", "bgOverlap"), null) : r !== -1 ? t : null;
      }
      i(gb, "getBackgroundStack");
      var es = gb;
      function bb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.minRatio, a = t.maxRatio, n = D.getComputedStyle(e), o = n.getPropertyValue("text-shadow");
        if (o === "none")
          return [];
        var l = n.getPropertyValue("font-size"), u = parseInt(l);
        he(isNaN(u) === !1, "Unable to determine font-size value ".concat(l));
        var s = [], c = yb(o);
        return c.forEach(function(d) {
          var f = d.colorStr, p = d.pixels;
          f = f || n.getPropertyValue("color");
          var m = ge(p, 3), h = m[0], y = m[1], w = m[2], v = w === void 0 ? 0 : w;
          if ((!r || v >= u * r) && (!a || v < u * a)) {
            var b = Db({
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
      i(bb, "getTextShadowColors");
      function yb(e) {
        var t = {
          pixels: []
        }, r = e.trim(), a = [t];
        if (!r)
          return [];
        for (; r; ) {
          var n = r.match(/^rgba?\([0-9,.\s]+\)/i) || r.match(/^[a-z]+/i) || r.match(/^#[0-9a-f]+/i), o = r.match(/^([0-9.-]+)px/i) || r.match(/^(0)/);
          if (n)
            he(!t.colorStr, "Multiple colors identified in text-shadow: ".concat(e)), r = r.replace(n[0], "").trim(), t.colorStr = n[0];
          else if (o) {
            he(t.pixels.length < 3, "Too many pixel units in text-shadow: ".concat(e)), r = r.replace(o[0], "").trim();
            var l = parseFloat((o[1][0] === "." ? "0" : "") + o[1]);
            t.pixels.push(l);
          } else if (r[0] === ",")
            he(t.pixels.length >= 2, "Missing pixel value in text-shadow: ".concat(e)), t = {
              pixels: []
            }, a.push(t), r = r.substr(1).trim();
          else
            throw new Error("Unable to process text-shadows: ".concat(e));
        }
        return a;
      }
      i(yb, "parseTextShadows");
      function Db(e) {
        var t = e.colorStr, r = e.offsetX, a = e.offsetY, n = e.blurRadius, o = e.fontSize;
        if (r > n || a > n)
          return new et(0, 0, 0, 0);
        var l = new et();
        return l.parseString(t), l.alpha *= wb(n, o), l;
      }
      i(Db, "textShadowColor");
      function wb(e, t) {
        if (e === 0)
          return 1;
        var r = e / t;
        return 0.185 / (r + 0.4);
      }
      i(wb, "blurRadiusToAlpha");
      var _a = bb;
      function Pr(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.1, a = q(e), n = a._cache.getBackgroundColor;
        if (n)
          return t.push.apply(t, oe(n.bgElms)), ze.set("bgColor", n.incompleteData), n.bgColor;
        var o = _b(e, t, r);
        return a._cache.getBackgroundColor = {
          bgColor: o,
          bgElms: t,
          incompleteData: ze.get("bgColor")
        }, o;
      }
      i(Pr, "_getBackgroundColor2");
      function _b(e, t, r) {
        var a, n = _a(e, {
          minRatio: r
        });
        n.length && (n = [{
          color: n.reduce(wa)
        }]);
        var o = es(e);
        if ((o || []).some(function(s) {
          var c = D.getComputedStyle(s), d = Nt(c);
          if (xb(e, s, d) || oa(s, c))
            return n = null, t.push(s), !0;
          if (d.alpha !== 0) {
            t.push(s);
            var f = c.getPropertyValue("mix-blend-mode");
            return n.unshift({
              color: d,
              blendMode: di(f)
            }), d.alpha === 1;
          } else
            return !1;
        }), n === null || o === null)
          return null;
        var l = Eb(e, o.includes(T.body));
        if ((a = n).unshift.apply(a, oe(l)), n.length === 0)
          return new et(255, 255, 255, 1);
        var u = n.reduce(function(s, c) {
          return Ir(c.color, s.color instanceof et ? s.color : s, c.blendMode);
        });
        return Ir(u.color instanceof et ? u.color : u, new et(255, 255, 255, 1));
      }
      i(_b, "_getBackgroundColor");
      function xb(e, t, r) {
        var a = e !== t && !ua(e, t) && r.alpha !== 0;
        return a && ze.set("bgColor", "elmPartiallyObscured"), a;
      }
      i(xb, "elmPartiallyObscured");
      function di(e) {
        return e || void 0;
      }
      i(di, "normalizeBlendMode");
      function Eb(e, t) {
        var r = [];
        if (!t) {
          var a = T.documentElement, n = T.body, o = D.getComputedStyle(a), l = D.getComputedStyle(n), u = Nt(o), s = Nt(l), c = s.alpha !== 0 && ua(e, n);
          (s.alpha !== 0 && u.alpha === 0 || c && s.alpha !== 1) && r.unshift({
            color: s,
            blendMode: di(l.getPropertyValue("mix-blend-mode"))
          }), u.alpha !== 0 && (!c || c && s.alpha !== 1) && r.unshift({
            color: u,
            blendMode: di(o.getPropertyValue("mix-blend-mode"))
          });
        }
        return r;
      }
      i(Eb, "getPageBackgroundColors");
      function Ab(e, t) {
        if (!t || !e)
          return null;
        t.alpha < 1 && (t = Ir(t, e));
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
      }
      i(Ab, "getContrast");
      var ir = Ab;
      function ts(e) {
        if (!e)
          return 1;
        var t = q(e);
        if (t && t._opacity !== void 0 && t._opacity !== null)
          return t._opacity;
        var r = D.getComputedStyle(e), a = r.getPropertyValue("opacity"), n = a * ts(e.parentElement);
        return t && (t._opacity = n), n;
      }
      i(ts, "getOpacity");
      function Fb(e, t, r) {
        var a = D.getComputedStyle(e), n = new et();
        n.parseString(a.getPropertyValue("color"));
        var o = ts(e);
        if (n.alpha = n.alpha * o, n.alpha === 1)
          return n;
        if (r || (r = Pr(e, [])), r === null) {
          var l = ze.get("bgColor");
          return ze.set("fgColor", l), null;
        }
        if (n.alpha < 1) {
          var u = _a(e, {
            minRatio: 0
          });
          return [n].concat(oe(u), [r]).reduce(wa);
        }
        return Ir(n, r);
      }
      i(Fb, "getForegroundColor");
      var xa = Fb;
      function Cb(e, t, r, a) {
        var n = ir(e, t), o = a && Math.ceil(r * 72) / 96 < 14 || !a && Math.ceil(r * 72) / 96 < 18, l = o ? 4.5 : 3;
        return {
          isValid: n > l,
          contrastRatio: n,
          expectedContrastRatio: l
        };
      }
      i(Cb, "hasValidContrastRatio");
      var kb = Cb;
      function Rb(e, t, r) {
        var a = t.ignoreUnicode, n = t.ignoreLength, o = t.ignorePseudo, l = t.boldValue, u = t.boldTextPt, s = t.largeTextPt, c = t.contrastRatio, d = t.shadowOutlineEmMax, f = t.pseudoSizeThreshold;
        if (!Ze(e))
          return this.data({
            messageKey: "hidden"
          }), !0;
        var p = st(r, !1, !0);
        if (a && Sb(p)) {
          this.data({
            messageKey: "nonBmp"
          });
          return;
        }
        var m = D.getComputedStyle(e), h = parseFloat(m.getPropertyValue("font-size")), y = m.getPropertyValue("font-weight"), w = parseFloat(y) >= l || y === "bold", v = Math.ceil(h * 72) / 96, b = w && v < u || !w && v < s, E = b ? c.normal : c.large, A = E.expected, k = E.minThreshold, M = E.maxThreshold, B = Tb(r, {
          ignorePseudo: o,
          pseudoSizeThreshold: f
        });
        if (B) {
          this.data({
            fontSize: "".concat((h * 72 / 96).toFixed(1), "pt (").concat(h, "px)"),
            fontWeight: w ? "bold" : "normal",
            messageKey: "pseudoContent",
            expectedContrastRatio: A + ":1"
          }), this.relatedNodes(B.actualNode);
          return;
        }
        var z = [], te = Pr(e, z, d), L = xa(e, !1, te), Q = _a(e, {
          minRatio: 1e-3,
          maxRatio: d
        }), W = null, re = null, ue = null;
        if (Q.length === 0)
          W = ir(te, L);
        else if (L && te) {
          ue = [].concat(oe(Q), [te]).reduce(wa);
          var me = ir(te, L), Z = ir(te, ue), le = ir(ue, L);
          W = Math.max(me, Z, le), W !== me && (re = Z > le ? "shadowOnBgColor" : "fgOnShadowColor");
        }
        var I = W > A;
        if (typeof k == "number" && (typeof W != "number" || W < k) || typeof M == "number" && (typeof W != "number" || W > M))
          return this.data({
            contrastRatio: W
          }), !0;
        var de = Math.floor(W * 100) / 100, _;
        te === null ? _ = ze.get("bgColor") : I || (_ = re);
        var U = de === 1, P = p.length === 1;
        if (U ? _ = ze.set("bgColor", "equalRatio") : !I && P && !n && (_ = "shortTextContent"), this.data({
          fgColor: L ? L.toHexString() : void 0,
          bgColor: te ? te.toHexString() : void 0,
          contrastRatio: de,
          fontSize: "".concat((h * 72 / 96).toFixed(1), "pt (").concat(h, "px)"),
          fontWeight: w ? "bold" : "normal",
          messageKey: _,
          expectedContrastRatio: A + ":1",
          shadowColor: ue ? ue.toHexString() : void 0
        }), L === null || te === null || U || P && !n && !I) {
          _ = null, ze.clear(), this.relatedNodes(z);
          return;
        }
        return I || this.relatedNodes(z), I;
      }
      i(Rb, "colorContrastEvaluate");
      function Tb(e, t) {
        var r = t.pseudoSizeThreshold, a = r === void 0 ? 0.25 : r, n = t.ignorePseudo, o = n === void 0 ? !1 : n;
        if (!o) {
          var l = e.boundingClientRect, u = l.width * l.height * a;
          do {
            var s = rs(e.actualNode, ":before"), c = rs(e.actualNode, ":after");
            if (s + c > u)
              return e;
          } while (e = e.parent);
        }
      }
      i(Tb, "findPseudoElement");
      var rs = it(/* @__PURE__ */ i(function(t, r) {
        var a = D.getComputedStyle(t, r), n = /* @__PURE__ */ i(function(s, c) {
          return a.getPropertyValue(s) === c;
        }, "matchPseudoStyle");
        if (n("content", "none") || n("display", "none") || n("visibility", "hidden") || n("position", "absolute") === !1 || Nt(a).alpha === 0 && n("background-image", "none"))
          return 0;
        var o = as(a.getPropertyValue("width")), l = as(a.getPropertyValue("height"));
        return o.unit !== "px" || l.unit !== "px" ? o.value === 0 || l.value === 0 ? 0 : 1 / 0 : o.value * l.value;
      }, "getPseudoElementArea2"));
      function Sb(e) {
        var t = {
          nonBmp: !0
        }, r = ni(e, t), a = X(Sr(e, t)) === "";
        return r && a;
      }
      i(Sb, "textIsEmojis");
      function as(e) {
        var t = /^([0-9.]+)([a-z]+)$/i, r = e.match(t) || [], a = ge(r, 3), n = a[1], o = n === void 0 ? "" : n, l = a[2], u = l === void 0 ? "" : l;
        return {
          value: parseFloat(o),
          unit: u.toLowerCase()
        };
      }
      i(as, "parseUnit");
      function ns(e, t) {
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
      }
      i(ns, "getContrast2");
      var Ob = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function is(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return Ob.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      i(is, "isBlock2");
      function Ib(e, t) {
        var r = t.requiredContrastRatio;
        if (is(e))
          return !1;
        for (var a = Be(e); a && a.nodeType === 1 && !is(a); )
          a = Be(a);
        if (!!a) {
          this.relatedNodes([a]);
          var n = xa(e), o = xa(a), l = Pr(e), u = Pr(a), s = n && o ? ns(n, o) : void 0;
          if (s && (s = Math.floor(s * 100) / 100), s && s >= r)
            return !0;
          var c = l && u ? ns(l, u) : void 0;
          if (c && (c = Math.floor(c * 100) / 100), c && c >= r)
            return !0;
          if (!c) {
            var d, f = (d = ze.get("bgColor")) !== null && d !== void 0 ? d : "bgContrast";
            this.data({
              messageKey: f
            }), ze.clear();
            return;
          }
          if (!!s)
            return s === 1 && c > 1 ? (this.data({
              messageKey: "bgContrast",
              contrastRatio: c,
              requiredContrastRatio: r,
              nodeBackgroundColor: l ? l.toHexString() : void 0,
              parentBackgroundColor: u ? u.toHexString() : void 0
            }), !1) : (this.data({
              messageKey: "fgContrast",
              contrastRatio: s,
              requiredContrastRatio: r,
              nodeColor: n ? n.toHexString() : void 0,
              parentColor: o ? o.toHexString() : void 0
            }), !1);
        }
      }
      i(Ib, "linkInTextBlockEvaluate");
      var Pb = Ib, Nb = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function os(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return Nb.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      i(os, "isBlock3");
      function Mb(e) {
        if (os(e))
          return !1;
        for (var t = Be(e); t && t.nodeType === 1 && !os(t); )
          t = Be(t);
        if (!!t)
          return this.relatedNodes([t]), Ju(e, t);
      }
      i(Mb, "linkInTextBlockStyleEvaluate");
      var Bb = Mb;
      function qb(e, t, r) {
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
        N(t) === "object" && Object.keys(t).forEach(function(f) {
          o[f] || (o[f] = []), o[f] = o[f].concat(t[f]);
        });
        var l = r.attr("autocomplete"), u = l.split(/\s+/g).map(function(f) {
          return f.toLowerCase();
        }), s = u[u.length - 1];
        if (jt.stateTerms.includes(s))
          return !0;
        var c = o[s], d = r.hasAttr("type") ? X(r.attr("type")).toLowerCase() : "text";
        return d = ma().includes(d) ? d : "text", typeof c > "u" ? d === "text" : c.includes(d);
      }
      i(qb, "autocompleteAppropriateEvaluate");
      var Lb = qb;
      function Vb(e, t, r) {
        var a = r.attr("autocomplete") || "";
        return Mu(a, t);
      }
      i(Vb, "autocompleteValidEvaluate");
      var jb = Vb;
      function Hb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
        if (!t.attribute || typeof t.attribute != "string")
          throw new TypeError("attr-non-space-content requires options.attribute to be a string");
        if (!r.hasAttr(t.attribute))
          return this.data({
            messageKey: "noAttr"
          }), !1;
        var a = r.attr(t.attribute), n = !X(a);
        return n ? (this.data({
          messageKey: "emptyAttr"
        }), !1) : !0;
      }
      i(Hb, "attrNonSpaceContentEvaluate");
      var zb = Hb;
      function Ub(e) {
        var t = e.some(function(r) {
          return r.result === !0;
        });
        return t && e.forEach(function(r) {
          r.result = !0;
        }), e;
      }
      i(Ub, "pageHasElmAfter");
      var $b = Ub;
      function Wb(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("has-descendant requires options.selector to be a string");
        if (t.passForModal && _r())
          return !0;
        var a = bt(r, t.selector, function(n) {
          return Fe(n);
        });
        return this.relatedNodes(a.map(function(n) {
          return n.actualNode;
        })), a.length > 0;
      }
      i(Wb, "hasDescendant");
      var Gb = Wb;
      function Yb(e, t, r) {
        try {
          return X(Ft(r)) !== "";
        } catch {
          return;
        }
      }
      i(Yb, "hasTextContentEvaluate");
      function Kb(e, t, r) {
        return Cr(r, t.matcher);
      }
      i(Kb, "matchesDefinitionEvaluate");
      var Xb = Kb;
      function Jb(e) {
        return e.filter(function(t) {
          return t.data !== "ignored";
        });
      }
      i(Jb, "pageNoDuplicateAfter");
      var Qb = Jb;
      function Zb(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("page-no-duplicate requires options.selector to be a string");
        var a = "page-no-duplicate;" + t.selector;
        if (ne.get(a)) {
          this.data("ignored");
          return;
        }
        ne.set(a, !0);
        var n = bt(g._tree[0], t.selector, function(o) {
          return Fe(o);
        });
        return typeof t.nativeScopeFilter == "string" && (n = n.filter(function(o) {
          return o.actualNode.hasAttribute("role") || !Xt(o, t.nativeScopeFilter);
        })), this.relatedNodes(n.filter(function(o) {
          return o !== r;
        }).map(function(o) {
          return o.actualNode;
        })), n.length <= 1;
      }
      i(Zb, "pageNoDuplicateEvaluate");
      var ey = Zb;
      function ty(e) {
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
      i(ty, "accesskeysAfter");
      var ry = ty;
      function ay(e, t, r) {
        return Et(r) || (this.data(r.attr("accesskey")), this.relatedNodes([e])), !0;
      }
      i(ay, "accesskeysEvaluate");
      var ny = ay;
      function iy(e, t, r) {
        var a = r.tabbableElements;
        if (!a)
          return !1;
        var n = a.filter(function(o) {
          return o !== r;
        });
        return n.length > 0;
      }
      i(iy, "focusableContentEvaluate");
      var oy = iy;
      function ly(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var o = n.filter(function(l) {
          return a.includes(l.props.nodeName);
        });
        return this.relatedNodes(o.map(function(l) {
          return l.actualNode;
        })), o.length === 0 || _r() ? !0 : o.every(function(l) {
          var u = l.getComputedStylePropertyValue("pointer-events"), s = parseInt(l.getComputedStylePropertyValue("width")), c = parseInt(l.getComputedStylePropertyValue("height"));
          return l.actualNode.onfocus || (s === 0 || c === 0) && u === "none";
        }) ? void 0 : !1;
      }
      i(ly, "focusableDisabledEvaluate");
      var uy = ly;
      function sy(e, t, r) {
        if (r.hasAttr("contenteditable") && a(r))
          return !0;
        return ct(r);
        function a(n) {
          var o = n.attr("contenteditable");
          if (o === "true" || o === "")
            return !0;
          if (o === "false")
            return !1;
          var l = We(r.parent, "[contenteditable]");
          return l ? a(l) : !1;
        }
      }
      i(sy, "focusableElementEvaluate");
      var cy = sy;
      function dy(e, t, r) {
        var a = r.tabbableElements.map(function(n) {
          var o = n.actualNode;
          return o;
        });
        if (!a || !a.length)
          return !0;
        if (_r()) {
          this.relatedNodes(a);
          return;
        }
        return !0;
      }
      i(dy, "focusableModalOpenEvaluate");
      var fy = dy;
      function py(e, t, r) {
        var a = r.attr("tabindex"), n = Te(r) && a > -1;
        if (!n)
          return !1;
        try {
          return !$e(r);
        } catch {
          return;
        }
      }
      i(py, "focusableNoNameEvaluate");
      var my = py;
      function hy(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var o = n.filter(function(l) {
          return !a.includes(l.props.nodeName);
        });
        return this.relatedNodes(o.map(function(l) {
          return l.actualNode;
        })), o.length === 0 || _r() ? !0 : o.every(function(l) {
          var u = l.getComputedStylePropertyValue("pointer-events"), s = parseInt(l.getComputedStylePropertyValue("width")), c = parseInt(l.getComputedStylePropertyValue("height"));
          return l.actualNode.onfocus || (s === 0 || c === 0) && u === "none";
        }) ? void 0 : !1;
      }
      i(hy, "focusableNotTabbableEvaluate");
      var vy = hy;
      function gy(e, t, r) {
        if (!!r.children)
          try {
            return !r.children.some(function(a) {
              return ls(a);
            });
          } catch {
            return;
          }
      }
      i(gy, "frameFocusableContentEvaluate");
      function ls(e) {
        if (ct(e))
          return !0;
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return !1;
        }
        return e.children.some(function(t) {
          return ls(t);
        });
      }
      i(ls, "focusableDescendants");
      function by(e) {
        var t = nr("landmark"), r = Be(e), a = ce(e);
        for (this.data({
          role: a
        }); r; ) {
          var n = r.getAttribute("role");
          if (!n && r.nodeName.toUpperCase() !== "FORM" && (n = ft(r)), n && t.includes(n) && !(n === "main" && a === "complementary"))
            return !1;
          r = Be(r);
        }
        return !0;
      }
      i(by, "landmarkIsTopLevelEvaluate");
      var yy = by;
      function Dy(e, t, r) {
        if (!!r.children)
          try {
            var a = us(r);
            if (!a.length)
              return !0;
            var n = a.filter(wy);
            return n.length > 0 ? (this.data({
              messageKey: "notHidden"
            }), this.relatedNodes(n)) : this.relatedNodes(a), !1;
          } catch {
            return;
          }
      }
      i(Dy, "noFocusableContentEvaluate");
      function us(e) {
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return [];
        }
        var t = [];
        return e.children.forEach(function(r) {
          dt(r) === "widget" && Te(r) ? t.push(r) : t.push.apply(t, oe(us(r)));
        }), t;
      }
      i(us, "getFocusableDescendants");
      function wy(e) {
        var t = parseInt(e.attr("tabindex"), 10);
        return !isNaN(t) && t < 0;
      }
      i(wy, "usesUnreliableHidingStrategy");
      function _y(e, t, r) {
        var a = parseInt(r.attr("tabindex"), 10);
        return isNaN(a) ? !0 : a <= 0;
      }
      i(_y, "tabindexEvaluate");
      var xy = _y;
      function Ey(e, t, r) {
        var a = r.attr("alt"), n = /^\s+$/;
        return typeof a == "string" && n.test(a);
      }
      i(Ey, "altSpaceValueEvaluate");
      var Ay = Ey;
      function Fy(e, t, r) {
        if (["none", "presentation"].includes(ce(r)))
          return !1;
        var a = We(r, t.parentSelector);
        if (!a)
          return !1;
        var n = st(a, !0).toLowerCase();
        return n === "" ? !1 : n === $e(r).toLowerCase();
      }
      i(Fy, "duplicateImgLabelEvaluate");
      var Cy = Fy;
      function ky(e, t, r) {
        var a = this;
        if (!r.attr("id"))
          return !1;
        if (!!r.actualNode) {
          var n = He(r.actualNode), o = Ae(r.attr("id")), l = Array.from(n.querySelectorAll('label[for="'.concat(o, '"]')));
          if (this.relatedNodes(l), !l.length)
            return !1;
          try {
            return l.some(function(u) {
              if (Ze(u)) {
                var s = X(Vt(u, {
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
      i(ky, "explicitEvaluate");
      var Ry = ky;
      function Ty(e, t, r) {
        var a = ya(r), n = e.getAttribute("title");
        if (!a)
          return !1;
        if (!n && (n = "", e.getAttribute("aria-describedby"))) {
          var o = ot(e, "aria-describedby");
          n = o.map(function(l) {
            return l ? Vt(l) : "";
          }).join("");
        }
        return X(n) === X(a);
      }
      i(Ty, "helpSameAsLabelEvaluate");
      var Sy = Ty;
      function Oy(e, t, r) {
        if (r.hasAttr("id")) {
          if (!r.actualNode)
            return;
          var a = He(e), n = Ae(e.getAttribute("id")), o = a.querySelector('label[for="'.concat(n, '"]'));
          if (o && !Fe(o)) {
            var l;
            try {
              l = $e(r).trim();
            } catch {
              return;
            }
            var u = l === "";
            return u;
          }
        }
        return !1;
      }
      i(Oy, "hiddenExplicitLabelEvaluate");
      var Iy = Oy;
      function Py(e, t, r) {
        try {
          var a = We(r, "label");
          if (a) {
            var n = X($e(a, {
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
      i(Py, "implicitEvaluate");
      var Ny = Py;
      function ss(e, t) {
        var r = cs(t), a = cs(e);
        return !r || !a ? !1 : r.includes(a);
      }
      i(ss, "isStringContained");
      function cs(e) {
        var t = Sr(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return X(t);
      }
      i(cs, "curateString");
      function My(e, t, r) {
        var a = t || {}, n = a.pixelThreshold, o = a.occuranceThreshold, l = Vt(e).toLowerCase();
        if (!(ii(l) < 1)) {
          var u = X(Ft(r, {
            subtreeDescendant: !0,
            ignoreIconLigature: !0,
            pixelThreshold: n,
            occuranceThreshold: o
          })).toLowerCase();
          return u ? ii(u) < 1 ? ss(u, l) ? !0 : void 0 : ss(u, l) : !0;
        }
      }
      i(My, "labelContentNameMismatchEvaluate");
      var By = My;
      function qy(e) {
        var t = Ae(e.getAttribute("id")), r = e.parentNode, a = He(e);
        a = a.documentElement || a;
        var n = Array.from(a.querySelectorAll('label[for="'.concat(t, '"]')));
        for (n.length && (n = n.filter(function(u) {
          return !Et(u);
        })); r; )
          r.nodeName.toUpperCase() === "LABEL" && n.indexOf(r) === -1 && n.push(r), r = r.parentNode;
        if (this.relatedNodes(n), n.length > 1) {
          var o = n.filter(function(u) {
            return Fe(u);
          });
          if (o.length > 1)
            return;
          var l = ot(e, "aria-labelledby");
          return l.includes(o[0]) ? !1 : void 0;
        }
        return !1;
      }
      i(qy, "multipleLabelEvaluate");
      var Ly = qy;
      function Vy(e, t, r) {
        var a = ya(r), n = ga(r), o = r.attr("aria-describedby");
        return !a && !!(n || o);
      }
      i(Vy, "titleOnlyEvaluate");
      var jy = Vy;
      function Hy(e) {
        var t = [];
        return e.filter(function(r) {
          var a = /* @__PURE__ */ i(function(l) {
            return r.data.role === l.data.role && r.data.accessibleText === l.data.accessibleText;
          }, "findMatch"), n = t.find(a);
          return n ? (n.result = !1, n.relatedNodes.push(r.relatedNodes[0]), !1) : (t.push(r), r.relatedNodes = [], !0);
        });
      }
      i(Hy, "landmarkIsUniqueAfter");
      var zy = Hy;
      function Uy(e, t, r) {
        var a = ce(e), n = $e(r);
        return n = n ? n.toLowerCase() : null, this.data({
          role: a,
          accessibleText: n
        }), this.relatedNodes([e]), !0;
      }
      i(Uy, "landmarkIsUniqueEvaluate");
      var $y = Uy;
      function fi(e) {
        return (e || "").trim() !== "";
      }
      i(fi, "hasValue");
      function Wy(e, t, r) {
        var a = typeof T < "u" ? zr(T) : !1;
        if (t.attributes.includes("xml:lang") && t.attributes.includes("lang") && fi(r.attr("xml:lang")) && !fi(r.attr("lang")) && !a)
          return this.data({
            messageKey: "noXHTML"
          }), !1;
        var n = t.attributes.some(function(o) {
          return fi(r.attr(o));
        });
        return n ? !0 : (this.data({
          messageKey: "noLang"
        }), !1);
      }
      i(Wy, "hasLangEvaluate");
      var Gy = Wy;
      function Yy(e, t, r) {
        var a = [];
        return t.attributes.forEach(function(n) {
          var o = r.attr(n);
          if (typeof o == "string") {
            var l = Mt(o), u = t.value ? !t.value.map(Mt).includes(l) : !ha(l);
            (l !== "" && u || o !== "" && !X(o)) && a.push(n + '="' + r.attr(n) + '"');
          }
        }), !a.length || r.props.nodeName !== "html" && !An(r) ? !1 : (this.data(a), !0);
      }
      i(Yy, "validLangEvaluate");
      var Ky = Yy;
      function Xy(e, t, r) {
        var a = Mt(r.attr("lang")), n = Mt(r.attr("xml:lang"));
        return a === n;
      }
      i(Xy, "xmlLangMismatchEvaluate");
      var Jy = Xy;
      function Qy(e) {
        var t = Be(e), r = t.nodeName.toUpperCase(), a = be(t);
        return r === "DIV" && ["presentation", "none", null].includes(a) && (t = Be(t), r = t.nodeName.toUpperCase(), a = be(t)), r !== "DL" ? !1 : !!(!a || ["presentation", "none", "list"].includes(a));
      }
      i(Qy, "dlitemEvaluate");
      var Zy = Qy;
      function eD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = [], n = [];
        if (!!r.children) {
          for (var o = ds(r.children); o.length; ) {
            var l, u = o.shift(), s = u.vChild, c = u.nested;
            if (t.divGroups && !c && rD(s)) {
              if (!s.children)
                return;
              var d = ds(s.children, !0);
              o.push.apply(o, oe(d));
              continue;
            }
            var f = tD(s, c, t);
            !f || (n.includes(f) || n.push(f), (s == null || (l = s.actualNode) === null || l === void 0 ? void 0 : l.nodeType) === 1 && a.push(s.actualNode));
          }
          return n.length === 0 ? !1 : (this.data({
            values: n.join(", ")
          }), this.relatedNodes(a), !0);
        }
      }
      i(eD, "invalidChildrenEvaluate");
      function tD(e, t, r) {
        var a = r.validRoles, n = a === void 0 ? [] : a, o = r.validNodeNames, l = o === void 0 ? [] : o, u = e.props, s = u.nodeName, c = u.nodeType, d = u.nodeValue, f = t ? "div > " : "";
        if (c === 3 && d.trim() !== "")
          return f + "#text";
        if (c !== 1 || !Fe(e))
          return !1;
        var p = be(e);
        return p ? n.includes(p) ? !1 : f + "[role=".concat(p, "]") : l.includes(s) ? !1 : f + s;
      }
      i(tD, "getInvalidSelector");
      function rD(e) {
        return e.props.nodeName === "div" && be(e) === null;
      }
      i(rD, "isDivGroup");
      function ds(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return e.map(function(r) {
          return {
            vChild: r,
            nested: t
          };
        });
      }
      i(ds, "mapWithNested");
      function aD(e, t, r) {
        var a = r.parent;
        if (!!a) {
          var n = a.props.nodeName, o = be(a);
          return ["presentation", "none", "list"].includes(o) ? !0 : o && tr(o) ? (this.data({
            messageKey: "roleNotValid"
          }), !1) : ["ul", "ol", "menu"].includes(n);
        }
      }
      i(aD, "listitemEvaluate");
      function nD(e, t, r) {
        var a = ["definition", "term", "list"], n = {
          badNodes: [],
          hasNonEmptyTextNode: !1
        }, o = r.children.reduce(function(u, s) {
          var c = s.actualNode;
          return c.nodeName.toUpperCase() === "DIV" && ce(c) === null ? u.concat(s.children) : u.concat(s);
        }, []), l = o.reduce(function(u, s) {
          var c = s.actualNode, d = c.nodeName.toUpperCase();
          if (c.nodeType === 1 && Fe(c)) {
            var f = be(c);
            (d !== "DT" && d !== "DD" || f) && (a.includes(f) || u.badNodes.push(c));
          } else
            c.nodeType === 3 && c.nodeValue.trim() !== "" && (u.hasNonEmptyTextNode = !0);
          return u;
        }, n);
        return l.badNodes.length && this.relatedNodes(l.badNodes), !!l.badNodes.length || l.hasNonEmptyTextNode;
      }
      i(nD, "onlyDlitemsEvaluate");
      var iD = nD;
      function oD(e, t, r) {
        var a = !1, n = !1, o = !0, l = [], u = [], s = [];
        return r.children.forEach(function(c) {
          var d = c.actualNode;
          if (d.nodeType === 3 && d.nodeValue.trim() !== "") {
            a = !0;
            return;
          }
          if (!(d.nodeType !== 1 || !Fe(d))) {
            o = !1;
            var f = d.nodeName.toUpperCase() === "LI", p = ce(c), m = p === "listitem";
            !f && !m && l.push(d), f && !m && (u.push(d), s.includes(p) || s.push(p)), m && (n = !0);
          }
        }), a || l.length ? (this.relatedNodes(l), !0) : o || n ? !1 : (this.relatedNodes(u), this.data({
          messageKey: "roleNotValid",
          roles: s.join(", ")
        }), !0);
      }
      i(oD, "onlyListitemsEvaluate");
      var lD = oD;
      function uD(e, t, r) {
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
      i(uD, "structuredDlitemsEvaluate");
      var sD = uD;
      function cD(e, t, r) {
        var a = Ke(r, "track"), n = a.some(function(o) {
          return (o.attr("kind") || "").toLowerCase() === "captions";
        });
        return n ? !1 : void 0;
      }
      i(cD, "captionEvaluate");
      var dD = cD, fs = " > ";
      function fD(e) {
        var t = {};
        return e.filter(function(r) {
          var a = r.node.ancestry[r.node.ancestry.length - 1] !== "html";
          if (a) {
            var n = r.node.ancestry.flat(1 / 0).join(fs);
            return t[n] = r, !0;
          }
          var o = r.node.ancestry.slice(0, r.node.ancestry.length - 1).flat(1 / 0).join(fs);
          return t[o] && (t[o].result = !0), !1;
        });
      }
      i(fD, "frameTestedAfter");
      var pD = fD;
      function mD(e, t) {
        return t.isViolation ? !1 : void 0;
      }
      i(mD, "frameTestedEvaluate");
      var hD = mD;
      function vD(e, t) {
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
      i(vD, "noAutoplayAudioEvaluate");
      var gD = vD;
      function bD(e, t, r, a) {
        var n = a || {}, o = n.cssom, l = o === void 0 ? void 0 : o, u = t || {}, s = u.degreeThreshold, c = s === void 0 ? 0 : s;
        if (!l || !l.length)
          return;
        for (var d = !1, f = [], p = v(l), m = /* @__PURE__ */ i(function() {
          var Q = y[h], W = p[Q], re = W.root, ue = W.rules, me = ue.filter(b);
          if (!me.length)
            return "continue";
          me.forEach(function(Z) {
            var le = Z.cssRules;
            Array.from(le).forEach(function(I) {
              var de = E(I);
              if (de && I.selectorText.toUpperCase() !== "HTML") {
                var _ = Array.from(re.querySelectorAll(I.selectorText)) || [];
                f = f.concat(_);
              }
              d = d || de;
            });
          });
        }, "_loop7"), h = 0, y = Object.keys(p); h < y.length; h++)
          var w = m();
        if (!d)
          return !0;
        return f.length && this.relatedNodes(f), !1;
        function v(L) {
          return L.reduce(function(Q, W) {
            var re = W.sheet, ue = W.root, me = W.shadowId, Z = me || "topDocument";
            if (Q[Z] || (Q[Z] = {
              root: ue,
              rules: []
            }), !re || !re.cssRules)
              return Q;
            var le = Array.from(re.cssRules);
            return Q[Z].rules = Q[Z].rules.concat(le), Q;
          }, {});
        }
        i(v, "groupCssomByDocument");
        function b(L) {
          var Q = L.type, W = L.cssText;
          return Q !== 4 ? !1 : /orientation:\s*landscape/i.test(W) || /orientation:\s*portrait/i.test(W);
        }
        i(b, "isMediaRuleWithOrientation");
        function E(L) {
          var Q = L.selectorText, W = L.style;
          if (!Q || W.length <= 0)
            return !1;
          var re = W.transform || W.webkitTransform || W.msTransform || !1;
          if (!re)
            return !1;
          var ue = re.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/);
          if (!ue)
            return !1;
          var me = ge(ue, 3), Z = me[1], le = me[2], I = A(Z, le);
          return !I || (I = Math.abs(I), Math.abs(I - 180) % 180 <= c) ? !1 : Math.abs(I - 90) % 90 <= c;
        }
        i(E, "getIsOrientationLocked");
        function A(L, Q) {
          switch (L) {
            case "rotate":
            case "rotateZ":
              return k(Q);
            case "rotate3d":
              var W = Q.split(",").map(function(Z) {
                return Z.trim();
              }), re = ge(W, 4), ue = re[2], me = re[3];
              return parseInt(ue) === 0 ? void 0 : k(me);
            case "matrix":
            case "matrix3d":
              return M(Q);
            default:
              return;
          }
        }
        i(A, "getRotationInDegrees");
        function k(L) {
          var Q = L.match(/(deg|grad|rad|turn)/) || [], W = ge(Q, 1), re = W[0];
          if (!!re) {
            var ue = parseFloat(L.replace(re, ""));
            switch (re) {
              case "rad":
                return B(ue);
              case "grad":
                return z(ue);
              case "turn":
                return te(ue);
              case "deg":
              default:
                return parseInt(ue);
            }
          }
        }
        i(k, "getAngleInDegrees");
        function M(L) {
          var Q = L.split(",");
          if (Q.length <= 6) {
            var W = ge(Q, 2), re = W[0], ue = W[1], me = Math.atan2(parseFloat(ue), parseFloat(re));
            return B(me);
          }
          var Z = parseFloat(Q[8]), le = Math.asin(Z), I = Math.cos(le), de = Math.acos(parseFloat(Q[0]) / I);
          return B(de);
        }
        i(M, "getAngleInDegreesFromMatrixTransform");
        function B(L) {
          return Math.round(L * (180 / Math.PI));
        }
        i(B, "convertRadToDeg");
        function z(L) {
          return L = L % 400, L < 0 && (L += 400), Math.round(L / 400 * 360);
        }
        i(z, "convertGradToDeg");
        function te(L) {
          return Math.round(360 / (1 / L));
        }
        i(te, "convertTurnToDeg");
      }
      i(bD, "cssOrientationLockEvaluate");
      var yD = bD;
      function DD(e, t, r) {
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
      i(DD, "metaViewportScaleEvaluate");
      var wD = DD, _D = 0.05;
      function xD(e, t, r) {
        var a = t?.minOffset || 24, n = [], o = a, l = mt(hn(r, a)), u;
        try {
          for (l.s(); !(u = l.n()).done; ) {
            var s = u.value;
            if (!(dt(s) !== "widget" || !Te(s))) {
              var c = ED(Go(r, s));
              c + _D >= a || (o = Math.min(o, c), n.push(s));
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
        })), !n.some(ct)) {
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
        }), ct(r) ? !1 : void 0;
      }
      i(xD, "targetOffsetEvaluate");
      function ED(e) {
        return Math.round(e * 10) / 10;
      }
      i(ED, "roundToSingleDecimal");
      var ps = 0.05;
      function AD(e, t, r) {
        var a = t?.minSize || 24, n = r.boundingClientRect, o = mi.bind(null, a), l = hn(r), u = FD(r, l), s = CD(r, l), c = s.fullyObscuringElms, d = s.partialObscuringElms;
        if (c.length && !u.length)
          return this.relatedNodes(Ea(c)), this.data({
            messageKey: "obscured"
          }), !0;
        var f = ct(r) ? !1 : void 0;
        if (!o(n) && !u.length)
          return this.data(ie({
            minSize: a
          }, pi(n))), f;
        var p = TD(d), m = kD(r, p);
        if (u.length && (c.length || !o(m || n))) {
          this.data({
            minSize: a,
            messageKey: "contentOverflow"
          }), this.relatedNodes(Ea(u));
          return;
        }
        if (p.length !== 0 && !o(m)) {
          var h = p.every(ct), y = "partiallyObscured".concat(h ? "" : "NonTabbable");
          return this.data(ie({
            messageKey: y,
            minSize: a
          }, pi(m))), this.relatedNodes(Ea(p)), h ? f : void 0;
        }
        return this.data(ie({
          minSize: a
        }, pi(m || n))), this.relatedNodes(Ea(p)), !0;
      }
      i(AD, "targetSize");
      function FD(e, t) {
        return t.filter(function(r) {
          return !ms(r, e) && hs(e, r);
        });
      }
      i(FD, "filterOverflowingContent");
      function CD(e, t) {
        var r = [], a = [], n = mt(t), o;
        try {
          for (n.s(); !(o = n.n()).done; ) {
            var l = o.value;
            !hs(e, l) && Yo(e, l) && SD(l) !== "none" && (ms(e, l) ? r.push(l) : a.push(l));
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
      i(CD, "filterByElmsOverlap");
      function kD(e, t) {
        var r = e.boundingClientRect;
        if (t.length === 0)
          return null;
        var a = t.map(function(o) {
          var l = o.boundingClientRect;
          return l;
        }), n = Ko(r, a);
        return RD(n);
      }
      i(kD, "getLargestUnobscuredArea");
      function RD(e, t) {
        return e.reduce(function(r, a) {
          var n = mi(t, r), o = mi(t, a);
          if (n !== o)
            return n ? r : a;
          var l = r.width * r.height, u = a.width * a.height;
          return l > u ? r : a;
        });
      }
      i(RD, "getLargestRect");
      function TD(e) {
        return e.filter(function(t) {
          return dt(t) === "widget" && Te(t);
        });
      }
      i(TD, "filterFocusableWidgets");
      function ms(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.top >= a.top && r.left >= a.left && r.bottom <= a.bottom && r.right <= a.right;
      }
      i(ms, "isEnclosedRect");
      function SD(e) {
        return e.getComputedStylePropertyValue("pointer-events");
      }
      i(SD, "getCssPointerEvents");
      function pi(e) {
        return {
          width: Math.round(e.width * 10) / 10,
          height: Math.round(e.height * 10) / 10
        };
      }
      i(pi, "toDecimalSize");
      function hs(e, t) {
        return e.actualNode.contains(t.actualNode) && !ct(t);
      }
      i(hs, "isDescendantNotInTabOrder");
      function mi(e, t) {
        var r = t.width, a = t.height;
        return r + ps >= e && a + ps >= e;
      }
      i(mi, "rectHasMinimumSize");
      function Ea(e) {
        return e.map(function(t) {
          var r = t.actualNode;
          return r;
        });
      }
      i(Ea, "mapActualNodes");
      function OD(e) {
        var t = PD(e);
        return e.forEach(function(r) {
          r.result = ID(r, t);
        }), e;
      }
      i(OD, "headingOrderAfter");
      function ID(e, t) {
        var r, a, n, o, l = vs(t, e.node.ancestry), u = (r = (a = t[l]) === null || a === void 0 ? void 0 : a.level) !== null && r !== void 0 ? r : -1, s = (n = (o = t[l - 1]) === null || o === void 0 ? void 0 : o.level) !== null && n !== void 0 ? n : -1;
        if (l === 0)
          return !0;
        if (u !== -1)
          return u - s <= 1;
      }
      i(ID, "getHeadingOrderOutcome");
      function PD(e) {
        e = oe(e), e.sort(function(r, a) {
          var n = r.node, o = a.node;
          return n.ancestry.length - o.ancestry.length;
        });
        var t = e.reduce(ND, []);
        return t.filter(function(r) {
          var a = r.level;
          return a !== -1;
        });
      }
      i(PD, "getHeadingOrder");
      function ND(e, t) {
        var r, a = (r = t.data) === null || r === void 0 ? void 0 : r.headingOrder, n = gs(t.node.ancestry, 1);
        if (!a)
          return e;
        var o = a.map(function(u) {
          return BD(u, n);
        }), l = MD(e, n);
        return l === -1 ? e.push.apply(e, oe(o)) : e.splice.apply(e, [l, 0].concat(oe(o))), e;
      }
      i(ND, "mergeHeadingOrder");
      function MD(e, t) {
        for (; t.length; ) {
          var r = vs(e, t);
          if (r !== -1)
            return r;
          t = gs(t, 1);
        }
        return -1;
      }
      i(MD, "getFrameIndex");
      function vs(e, t) {
        return e.findIndex(function(r) {
          return jn(r.ancestry, t);
        });
      }
      i(vs, "findHeadingOrderIndex");
      function BD(e, t) {
        var r = t.concat(e.ancestry);
        return ie({}, e, {
          ancestry: r
        });
      }
      i(BD, "addFrameToHeadingAncestry");
      function gs(e, t) {
        return e.slice(0, e.length - t);
      }
      i(gs, "shortenArray");
      function qD(e) {
        var t = ce(e), r = t && t.includes("heading"), a = e.attr("aria-level"), n = parseInt(a, 10), o = e.props.nodeName.match(/h(\d)/) || [], l = ge(o, 2), u = l[1];
        return r ? u && !a ? parseInt(u, 10) : isNaN(n) || n < 1 ? u ? parseInt(u, 10) : 2 : n || -1 : -1;
      }
      i(qD, "getLevel");
      function LD() {
        var e = ne.get("headingOrder");
        if (e)
          return !0;
        var t = "h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame", r = bt(g._tree[0], t, Fe);
        return e = r.map(function(a) {
          return {
            ancestry: [$r(a.actualNode)],
            level: qD(a)
          };
        }), this.data({
          headingOrder: e
        }), ne.set("headingOrder", r), !0;
      }
      i(LD, "headingOrderEvaluate");
      var VD = LD;
      function bs(e, t) {
        if (!e || !t)
          return !1;
        var r = Object.getOwnPropertyNames(e), a = Object.getOwnPropertyNames(t);
        if (r.length !== a.length)
          return !1;
        var n = r.every(function(o) {
          var l = e[o], u = t[o];
          return N(l) !== N(u) ? !1 : N(l) === "object" || N(u) === "object" ? bs(l, u) : l === u;
        });
        return n;
      }
      i(bs, "isIdenticalObject");
      function jD(e) {
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
            return bs(v.urlProps, m);
          });
          h.length && !y && (d.result = void 0), d.relatedNodes = [], (c = d.relatedNodes).push.apply(c, oe(h.map(function(w) {
            return w.relatedNodes[0];
          }))), a[p] = h, r.push(d);
        }, "_loop8"), o = 0; o < t.length; o++)
          var l = n(o);
        return r;
      }
      i(jD, "identicalLinksSamePurposeAfter");
      var HD = jD, ys = {};
      Re(ys, {
        aria: /* @__PURE__ */ i(function() {
          return tu;
        }, "aria"),
        color: /* @__PURE__ */ i(function() {
          return Ku;
        }, "color"),
        dom: /* @__PURE__ */ i(function() {
          return sn;
        }, "dom"),
        forms: /* @__PURE__ */ i(function() {
          return Ds;
        }, "forms"),
        matches: /* @__PURE__ */ i(function() {
          return Cr;
        }, "matches"),
        math: /* @__PURE__ */ i(function() {
          return Wo;
        }, "math"),
        standards: /* @__PURE__ */ i(function() {
          return Gu;
        }, "standards"),
        table: /* @__PURE__ */ i(function() {
          return _s;
        }, "table"),
        text: /* @__PURE__ */ i(function() {
          return Tr;
        }, "text"),
        utils: /* @__PURE__ */ i(function() {
          return Ba;
        }, "utils")
      });
      var Ds = {};
      Re(Ds, {
        isAriaCombobox: /* @__PURE__ */ i(function() {
          return Cu;
        }, "isAriaCombobox"),
        isAriaListbox: /* @__PURE__ */ i(function() {
          return Fu;
        }, "isAriaListbox"),
        isAriaRange: /* @__PURE__ */ i(function() {
          return ku;
        }, "isAriaRange"),
        isAriaTextbox: /* @__PURE__ */ i(function() {
          return Au;
        }, "isAriaTextbox"),
        isDisabled: /* @__PURE__ */ i(function() {
          return Nr;
        }, "isDisabled"),
        isNativeSelect: /* @__PURE__ */ i(function() {
          return Eu;
        }, "isNativeSelect"),
        isNativeTextbox: /* @__PURE__ */ i(function() {
          return xu;
        }, "isNativeTextbox")
      });
      var zD = ["fieldset", "button", "select", "input", "textarea"];
      function ws(e) {
        var t = e._isDisabled;
        if (typeof t == "boolean")
          return t;
        var r = e.props.nodeName, a = e.attr("aria-disabled");
        return zD.includes(r) && e.hasAttr("disabled") ? t = !0 : a ? t = a.toLowerCase() === "true" : e.parent ? t = ws(e.parent) : t = !1, e._isDisabled = t, t;
      }
      i(ws, "isDisabled");
      var Nr = ws, _s = {};
      Re(_s, {
        getAllCells: /* @__PURE__ */ i(function() {
          return hi;
        }, "getAllCells"),
        getCellPosition: /* @__PURE__ */ i(function() {
          return va;
        }, "getCellPosition"),
        getHeaders: /* @__PURE__ */ i(function() {
          return Aa;
        }, "getHeaders"),
        getScope: /* @__PURE__ */ i(function() {
          return Qn;
        }, "getScope"),
        isColumnHeader: /* @__PURE__ */ i(function() {
          return rr;
        }, "isColumnHeader"),
        isDataCell: /* @__PURE__ */ i(function() {
          return Es;
        }, "isDataCell"),
        isDataTable: /* @__PURE__ */ i(function() {
          return Fa;
        }, "isDataTable"),
        isHeader: /* @__PURE__ */ i(function() {
          return KD;
        }, "isHeader"),
        isRowHeader: /* @__PURE__ */ i(function() {
          return ar;
        }, "isRowHeader"),
        toArray: /* @__PURE__ */ i(function() {
          return yt;
        }, "toArray"),
        toGrid: /* @__PURE__ */ i(function() {
          return yt;
        }, "toGrid"),
        traverse: /* @__PURE__ */ i(function() {
          return vi;
        }, "traverse")
      });
      function UD(e) {
        var t, r, a, n, o = [];
        for (t = 0, a = e.rows.length; t < a; t++)
          for (r = 0, n = e.rows[t].cells.length; r < n; r++)
            o.push(e.rows[t].cells[r]);
        return o;
      }
      i(UD, "getAllCells");
      var hi = UD;
      function xs(e, t, r) {
        for (var a = e === "row" ? "_rowHeaders" : "_colHeaders", n = e === "row" ? ar : rr, o = r[t.y][t.x], l = o.colSpan - 1, u = o.getAttribute("rowspan"), s = parseInt(u) === 0 || o.rowspan === 0 ? r.length : o.rowSpan, c = s - 1, d = t.y + c, f = t.x + l, p = e === "row" ? t.y : 0, m = e === "row" ? 0 : t.x, h, y = [], w = d; w >= p && !h; w--)
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
          var k = g.utils.getNodeFromTree(A);
          k[a] = h;
        }), h;
      }
      i(xs, "traverseForHeaders");
      function $D(e, t) {
        if (e.getAttribute("headers")) {
          var r = ot(e, "headers");
          if (r.filter(function(l) {
            return l;
          }).length)
            return r;
        }
        t || (t = yt(Jt(e, "table")));
        var a = va(e, t), n = xs("row", a, t), o = xs("col", a, t);
        return [].concat(n, o).reverse();
      }
      i($D, "getHeaders");
      var Aa = $D;
      function WD(e) {
        if (!e.children.length && !e.textContent.trim())
          return !1;
        var t = e.getAttribute("role");
        return tr(t) ? ["cell", "gridcell"].includes(t) : e.nodeName.toUpperCase() === "TD";
      }
      i(WD, "isDataCell");
      var Es = WD;
      function GD(e) {
        var t = (e.getAttribute("role") || "").toLowerCase();
        if ((t === "presentation" || t === "none") && !Te(e))
          return !1;
        if (e.getAttribute("contenteditable") === "true" || Jt(e, '[contenteditable="true"]') || t === "grid" || t === "treegrid" || t === "table" || dt(t) === "landmark")
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
        return o >= 20 ? !0 : !(dn(e).width > ea(D).width * 0.95 || n < 10 || e.querySelector("object, embed, iframe, applet"));
      }
      i(GD, "isDataTable");
      var Fa = GD;
      function YD(e) {
        if (rr(e) || ar(e))
          return !0;
        if (e.getAttribute("id")) {
          var t = Ae(e.getAttribute("id"));
          return !!T.querySelector('[headers~="'.concat(t, '"]'));
        }
        return !1;
      }
      i(YD, "isHeader");
      var KD = YD;
      function As(e, t, r, a) {
        var n, o = r[t.y] ? r[t.y][t.x] : void 0;
        return o ? typeof a == "function" && (n = a(o, t, r), n === !0) ? [o] : (n = As(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a), n.unshift(o), n) : [];
      }
      i(As, "traverseTable");
      function XD(e, t, r, a) {
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
        return As(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a);
      }
      i(XD, "traverse");
      var vi = XD;
      function JD(e, t, r) {
        var a = Tr.accessibleTextVirtual(r), n = Tr.sanitize(Tr.removeUnicode(a, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        })).toLowerCase();
        if (!!n) {
          var o = {
            name: n,
            urlProps: sn.urlPropsFromAttribute(e, "href")
          };
          return this.data(o), this.relatedNodes([e]), !0;
        }
      }
      i(JD, "identicalLinksSamePurposeEvaluate");
      var QD = JD;
      function ZD(e, t, r) {
        var a = Ke(r, "a[href]");
        return a.some(function(n) {
          return /^#[^/!]/.test(n.attr("href"));
        });
      }
      i(ZD, "internalLinkPresentEvaluate");
      var ew = ZD, tw = /[;,\s]/, rw = /^[0-9.]+$/;
      function aw(e, t, r) {
        var a = t || {}, n = a.minDelay, o = a.maxDelay, l = (r.attr("content") || "").trim(), u = l.split(tw), s = ge(u, 1), c = s[0];
        if (!c.match(rw))
          return !0;
        var d = parseFloat(c);
        return this.data({
          redirectDelay: d
        }), typeof n == "number" && d <= t.minDelay || typeof o == "number" && d > t.maxDelay;
      }
      i(aw, "metaRefreshEvaluate");
      function nw(e) {
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
      i(nw, "normalizeFontWeight");
      function iw(e) {
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
      i(iw, "getTextContainer");
      function gi(e) {
        var t = D.getComputedStyle(iw(e));
        return {
          fontWeight: nw(t.getPropertyValue("font-weight")),
          fontSize: parseInt(t.getPropertyValue("font-size")),
          isItalic: t.getPropertyValue("font-style") === "italic"
        };
      }
      i(gi, "getStyleValues");
      function Fs(e, t, r) {
        return r.reduce(function(a, n) {
          return a || (!n.size || e.fontSize / n.size > t.fontSize) && (!n.weight || e.fontWeight - n.weight > t.fontWeight) && (!n.italic || e.isItalic && !t.isItalic);
        }, !1);
      }
      i(Fs, "isHeaderStyle");
      function ow(e, t, r) {
        var a = Array.from(e.parentNode.children), n = a.indexOf(e);
        t = t || {};
        var o = t.margins || [], l = a.slice(n + 1).find(function(w) {
          return w.nodeName.toUpperCase() === "P";
        }), u = a.slice(0, n).reverse().find(function(w) {
          return w.nodeName.toUpperCase() === "P";
        }), s = gi(e), c = l ? gi(l) : null, d = u ? gi(u) : null, f = t.passLength, p = t.failLength, m = e.textContent.trim().length, h = l?.textContent.trim().length;
        if (m > h * f || !c || !Fs(s, c, o))
          return !0;
        var y = Xt(r, "blockquote");
        if (!(y && y.nodeName.toUpperCase() === "BLOCKQUOTE") && !(d && !Fs(s, d, o)) && !(m > h * p))
          return !1;
      }
      i(ow, "pAsHeadingEvaluate");
      var lw = ow;
      function uw(e) {
        var t = e.filter(function(r) {
          return r.data.isIframe;
        });
        return e.forEach(function(r) {
          if (!(r.result || r.node.ancestry.length === 1)) {
            var a = r.node.ancestry.slice(0, -1), n = mt(t), o;
            try {
              for (n.s(); !(o = n.n()).done; ) {
                var l = o.value;
                if (jn(a, l.node.ancestry)) {
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
      i(uw, "regionAfter");
      var sw = uw, cw = nr("landmark"), dw = ["alert", "log", "status"];
      function fw(e, t, r) {
        this.data({
          isIframe: ["iframe", "frame"].includes(r.props.nodeName)
        });
        var a = ne.get("regionlessNodes", function() {
          return pw(t);
        });
        return !a.includes(r);
      }
      i(fw, "regionEvaluate");
      function pw(e) {
        var t = Cs(g._tree[0], e).map(function(r) {
          for (; r.parent && !r.parent._hasRegionDescendant && r.parent.actualNode !== T.body; )
            r = r.parent;
          return r;
        }).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
        return t;
      }
      i(pw, "getRegionlessNodes");
      function Cs(e, t) {
        var r = e.actualNode;
        if (ce(e) === "button" || mw(e, t) || ["iframe", "frame"].includes(e.props.nodeName) || kn(e.actualNode) && bn(e.actualNode, "href") || !Fe(r)) {
          for (var a = e; a; )
            a._hasRegionDescendant = !0, a = a.parent;
          return ["iframe", "frame"].includes(e.props.nodeName) ? [e] : [];
        } else
          return r !== T.body && na(r, !0) ? [e] : e.children.filter(function(n) {
            var o = n.actualNode;
            return o.nodeType === 1;
          }).map(function(n) {
            return Cs(n, t);
          }).reduce(function(n, o) {
            return n.concat(o);
          }, []);
      }
      i(Cs, "findRegionlessElms");
      function mw(e, t) {
        var r = e.actualNode, a = ce(e), n = (r.getAttribute("aria-live") || "").toLowerCase().trim();
        return !!(["assertive", "polite"].includes(n) || dw.includes(a) || cw.includes(a) || t.regionMatcher && Cr(e, t.regionMatcher));
      }
      i(mw, "isRegion");
      function hw(e) {
        var t = bn(e, "href");
        return t ? Fe(t) || void 0 : !1;
      }
      i(hw, "skipLinkEvaluate");
      var vw = hw;
      function gw(e) {
        var t = {};
        return e.forEach(function(r) {
          t[r.data] = t[r.data] !== void 0 ? ++t[r.data] : 0;
        }), e.forEach(function(r) {
          r.result = !!t[r.data];
        }), e;
      }
      i(gw, "uniqueFrameTitleAfter");
      var bw = gw;
      function yw(e, t, r) {
        var a = X(r.attr("title")).toLowerCase();
        return this.data(a), !0;
      }
      i(yw, "uniqueFrameTitleEvaluate");
      var Dw = yw;
      function ww(e) {
        var t = [];
        return e.filter(function(r) {
          return t.indexOf(r.data) === -1 ? (t.push(r.data), !0) : !1;
        });
      }
      i(ww, "duplicateIdAfter");
      var _w = ww;
      function xw(e) {
        var t = e.getAttribute("id").trim();
        if (!t)
          return !0;
        var r = He(e), a = Array.from(r.querySelectorAll('[id="'.concat(Ae(t), '"]'))).filter(function(n) {
          return n !== e;
        });
        return a.length && this.relatedNodes(a), this.data(t), a.length === 0;
      }
      i(xw, "duplicateIdEvaluate");
      var Ew = xw;
      function Aw(e, t, r) {
        return !!X(Fr(r));
      }
      i(Aw, "ariaLabelEvaluate");
      var Fw = Aw;
      function Cw(e, t, r) {
        try {
          return !!X(Rr(r));
        } catch {
          return;
        }
      }
      i(Cw, "ariaLabelledbyEvaluate");
      var kw = Cw;
      function Rw(e, t) {
        var r = t.cssProperties.filter(function(a) {
          if (e.style.getPropertyPriority(a) === "important")
            return a;
        });
        return r.length > 0 ? (this.data(r), !1) : !0;
      }
      i(Rw, "avoidInlineSpacingEvaluate");
      var Tw = Rw;
      function Sw() {
        var e = T.title;
        return !!X(e);
      }
      i(Sw, "docHasTitleEvaluate");
      var Ow = Sw;
      function Iw() {
      }
      i(Iw, "existsEvaluate");
      var Pw = Iw;
      function Nw(e, t, r) {
        var a = r.props.nodeName;
        return ["img", "input", "area"].includes(a) ? r.hasAttr("alt") : !1;
      }
      i(Nw, "hasAltEvaluate");
      var Mw = Nw;
      function Bw(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.minValue, o = t.maxValue, l = t.normalValue, u = l === void 0 ? 0 : l, s = t.noImportant, c = t.multiLineOnly;
        if (!s && e.style.getPropertyPriority(r) !== "important" || c && !dl(e))
          return !0;
        var d = {};
        typeof n == "number" && (d.minValue = n), typeof o == "number" && (d.maxValue = o);
        var f = e.style.getPropertyValue(r);
        if (["inherit", "unset", "revert", "revert-layer"].includes(f))
          return this.data(ie({
            value: f
          }, d)), !0;
        var p = qw(e, {
          absoluteValues: a,
          cssProperty: r,
          normalValue: u
        });
        if (this.data(ie({
          value: p
        }, d)), typeof p == "number")
          return (typeof n != "number" || p >= n) && (typeof o != "number" || p <= o);
      }
      i(Bw, "inlineStyleProperty");
      function qw(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.normalValue, o = D.getComputedStyle(e), l = o.getPropertyValue(r);
        if (l === "normal")
          return n;
        var u = parseFloat(l);
        if (a)
          return u;
        var s = parseFloat(o.getPropertyValue("font-size")), c = Math.round(u / s * 100) / 100;
        return isNaN(c) ? l : c;
      }
      i(qw, "getNumberValue");
      function Lw(e) {
        return Ze(e);
      }
      i(Lw, "isOnScreenEvaluate");
      var Vw = Lw;
      function jw(e, t, r) {
        var a = r.props.nodeName, n = (r.attr("type") || "").toLowerCase(), o = r.attr("value");
        return o && this.data({
          messageKey: "has-label"
        }), a === "input" && ["submit", "reset"].includes(n) ? o === null : !1;
      }
      i(jw, "nonEmptyIfPresentEvaluate");
      var Hw = jw;
      function zw(e, t, r) {
        var a = be(r);
        if (["presentation", "none"].includes(a) && ["iframe", "frame"].includes(r.props.nodeName) && r.hasAttr("title"))
          return this.data({
            messageKey: "iframe",
            nodeName: r.props.nodeName
          }), !1;
        var n = ce(r);
        if (["presentation", "none"].includes(n))
          return this.data({
            role: n
          }), !0;
        if (!["presentation", "none"].includes(a))
          return !1;
        var o = Bt().some(function(s) {
          return r.hasAttr(s);
        }), l = Te(r), u;
        return o && !l ? u = "globalAria" : !o && l ? u = "focusable" : u = "both", this.data({
          messageKey: u,
          role: n
        }), !1;
      }
      i(zw, "presentationalRoleEvaluate");
      function Uw(e, t, r) {
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
      i(Uw, "svgNonEmptyTitleEvaluate");
      var $w = Uw;
      function Ww(e) {
        var t = yt(e), r = t[0];
        return t.length <= 1 || r.length <= 1 || e.rows.length <= 1 ? !0 : r.reduce(function(a, n, o) {
          return a || n !== r[o + 1] && r[o + 1] !== void 0;
        }, !1);
      }
      i(Ww, "captionFakedEvaluate");
      var Gw = Ww;
      function Yw(e) {
        return il(T) ? e.nodeName.toUpperCase() === "TH" : !0;
      }
      i(Yw, "html5ScopeEvaluate");
      var Kw = Yw, Xw = Jw;
      function Jw(e, t, r) {
        if (r.children !== void 0) {
          var a = r.attr("summary"), n = r.children.find(Qw), o = n ? X(Ft(n)) : !1;
          return !o || !a ? !1 : X(a).toLowerCase() === X(o).toLowerCase();
        }
      }
      i(Jw, "sameCaptionSummaryEvaluate");
      function Qw(e) {
        return e.props.nodeName === "caption";
      }
      i(Qw, "isCaptionNode");
      function Zw(e, t) {
        var r = e.getAttribute("scope").toLowerCase();
        return t.values.indexOf(r) !== -1;
      }
      i(Zw, "scopeValueEvaluate");
      var e_ = Zw;
      function t_(e) {
        var t = [], r = hi(e), a = yt(e);
        return r.forEach(function(n) {
          if (na(n) && Es(n) && !Uu(n)) {
            var o = Aa(n, a).some(function(l) {
              return l !== null && !!na(l);
            });
            o || t.push(n);
          }
        }), t.length ? (this.relatedNodes(t), !1) : !0;
      }
      i(t_, "tdHasHeaderEvaluate");
      var r_ = t_;
      function a_(e) {
        for (var t = [], r = [], a = [], n = 0; n < e.rows.length; n++)
          for (var o = e.rows[n], l = 0; l < o.cells.length; l++)
            t.push(o.cells[l]);
        var u = t.reduce(function(s, c) {
          return c.getAttribute("id") && s.push(c.getAttribute("id")), s;
        }, []);
        if (t.forEach(function(s) {
          var c = !1, d = !1;
          if (!(!s.hasAttribute("headers") || !Fe(s))) {
            var f = s.getAttribute("headers").trim();
            if (!f)
              return r.push(s);
            var p = qe(f);
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
      i(a_, "tdHeadersAttrEvaluate");
      var n_ = a_;
      function i_(e) {
        var t = hi(e), r = this, a = [];
        t.forEach(function(u) {
          var s = u.getAttribute("headers");
          s && (a = a.concat(s.split(/\s+/)));
          var c = u.getAttribute("aria-labelledby");
          c && (a = a.concat(c.split(/\s+/)));
        });
        var n = t.filter(function(u) {
          return X(u.textContent) === "" ? !1 : u.nodeName.toUpperCase() === "TH" || ["rowheader", "columnheader"].indexOf(u.getAttribute("role")) !== -1;
        }), o = yt(e), l = !0;
        return n.forEach(function(u) {
          if (!(u.getAttribute("id") && a.includes(u.getAttribute("id")))) {
            var s = va(u, o), c = !1;
            rr(u) && (c = vi("down", s, o).find(function(d) {
              return !rr(d) && Aa(d, o).includes(u);
            })), !c && ar(u) && (c = vi("right", s, o).find(function(d) {
              return !ar(d) && Aa(d, o).includes(u);
            })), c || r.relatedNodes(u), l = l && c;
          }
        }), l ? !0 : void 0;
      }
      i(i_, "thHasDataCellsEvaluate");
      var o_ = i_;
      function l_(e, t, r) {
        var a = ["SCRIPT", "HEAD", "TITLE", "NOSCRIPT", "STYLE", "TEMPLATE"];
        if (!a.includes(e.nodeName.toUpperCase()) && wr(r)) {
          var n = D.getComputedStyle(e);
          if (n.getPropertyValue("display") === "none")
            return;
          if (n.getPropertyValue("visibility") === "hidden") {
            var o = Be(e), l = o && D.getComputedStyle(o);
            if (!l || l.getPropertyValue("visibility") !== "hidden")
              return;
          }
        }
        return !0;
      }
      i(l_, "hiddenContentEvaluate");
      var u_ = l_;
      function s_(e, t) {
        var r = /^aria-/, a = t.attrNames;
        if (a.length) {
          for (var n = 0, o = a.length; n < o; n++)
            if (r.test(a[n]))
              return !0;
        }
        return !1;
      }
      i(s_, "ariaAllowedAttrMatches");
      var c_ = s_;
      function d_(e, t) {
        return be(t, {
          dpub: !0,
          fallback: !0
        }) !== null;
      }
      i(d_, "ariaAllowedRoleMatches");
      var f_ = d_;
      function p_(e, t) {
        var r = /^aria-/;
        return t.attrNames.some(function(a) {
          return r.test(a);
        });
      }
      i(p_, "ariaHasAttrMatches");
      var m_ = p_;
      function ks(e) {
        return e ? e.getAttribute("aria-hidden") === "true" ? !1 : ks(Be(e)) : !0;
      }
      i(ks, "shouldMatchElement");
      function h_(e) {
        return ks(Be(e));
      }
      i(h_, "ariaHiddenFocusMatches");
      var v_ = h_;
      function g_(e, t) {
        var r = be(t, {
          dpub: !0
        });
        return !!si(r);
      }
      i(g_, "ariaRequiredChildrenMatches");
      var b_ = g_;
      function y_(e, t) {
        var r = be(t);
        return !!ui(r);
      }
      i(y_, "ariaRequiredParentMatches");
      var D_ = y_;
      function w_(e, t) {
        var r = t.attr("autocomplete");
        if (!r || X(r) === "")
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
          var s = se.ariaRoles[l];
          if (s === void 0 || s.type !== "widget")
            return !1;
        }
        return !(u === "-1" && t.actualNode && !Ze(t) && !Fe(t));
      }
      i(w_, "autocompleteMatches");
      var __ = w_;
      function x_(e, t, r) {
        return r.initiator;
      }
      i(x_, "isInitiatorMatches");
      var Rs = x_;
      function E_(e, t, r) {
        return Rs(e, t, r) ? !!e.querySelector("a[href]") : !0;
      }
      i(E_, "bypassMatches");
      var A_ = E_;
      function F_(e, t) {
        var r = t.props, a = r.nodeName, n = r.type;
        if (a === "option" || a === "select" && !e.options.length)
          return !1;
        var o = ["hidden", "range", "color", "checkbox", "radio", "image"];
        if (a === "input" && o.includes(n) || Nr(t))
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
            }, !Rn(c, e))
              return !1;
          }
          return !0;
        }
        var d = Xt(t, "label");
        if (a === "label" || d) {
          var f = d || e, p = d ? q(d) : t;
          if (f.htmlFor) {
            var m = He(f), h = m.getElementById(f.htmlFor), y = h && q(h);
            if (y && Nr(y))
              return !1;
          }
          var w = 'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea', v = Ke(p, w)[0];
          if (v && Nr(v))
            return !1;
        }
        for (var b = [], E = t; E; ) {
          if (E.props.id) {
            var A = oi(E).filter(function(re) {
              return qe(re.getAttribute("aria-labelledby") || "").includes(E.props.id);
            }).map(function(re) {
              return q(re);
            });
            b.push.apply(b, oe(A));
          }
          E = E.parent;
        }
        if (b.length > 0 && b.every(Nr))
          return !1;
        var k = st(t, !1, !0), M = {
          emoji: !0,
          nonBmp: !1,
          punctuations: !0
        };
        if (!k || !Sr(k, M))
          return !1;
        for (var B = T.createRange(), z = t.children, te = 0; te < z.length; te++) {
          var L = z[te];
          L.actualNode.nodeType === 3 && X(L.actualNode.nodeValue) !== "" && B.selectNodeContents(L.actualNode);
        }
        for (var Q = B.getClientRects(), W = 0; W < Q.length; W++)
          if (Rn(Q[W], e))
            return !0;
        return !1;
      }
      i(F_, "colorContrastMatches");
      var C_ = F_;
      function k_(e) {
        if (Fa(e)) {
          var t = yt(e);
          return t.length >= 3 && t[0].length >= 3 && t[1].length >= 3 && t[2].length >= 3;
        }
        return !1;
      }
      i(k_, "dataTableLargeMatches");
      var R_ = k_;
      function T_(e) {
        return Fa(e);
      }
      i(T_, "dataTableMatches");
      var S_ = T_;
      function O_(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(Ae(t), '"]'), a = Array.from(He(e).querySelectorAll(r));
        return !Da(e) && a.some(Te);
      }
      i(O_, "duplicateIdActiveMatches");
      var I_ = O_;
      function P_(e) {
        return Da(e);
      }
      i(P_, "duplicateIdAriaMatches");
      var N_ = P_;
      function M_(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(Ae(t), '"]'), a = Array.from(He(e).querySelectorAll(r));
        return !Da(e) && a.every(function(n) {
          return !Te(n);
        });
      }
      i(M_, "duplicateIdMiscMatches");
      var B_ = M_;
      function q_(e, t, r) {
        var a, n;
        return !r.initiator && !r.focusable && ((a = r.size) === null || a === void 0 ? void 0 : a.width) * ((n = r.size) === null || n === void 0 ? void 0 : n.height) > 1;
      }
      i(q_, "frameFocusableContentMatches");
      var L_ = q_;
      function V_(e) {
        var t = e.getAttribute("title");
        return !!X(t);
      }
      i(V_, "frameTitleHasTextMatches");
      var j_ = V_;
      function H_(e, t) {
        return ft(t, {
          chromium: !0
        }) !== null;
      }
      i(H_, "hasImplicitChromiumRoleMatches");
      var z_ = H_;
      function U_(e, t) {
        return ce(t) === "heading";
      }
      i(U_, "headingMatches");
      function $_(e, t) {
        try {
          var r = t.props.nodeName;
          return r === "svg" ? !0 : !!We(t, "svg");
        } catch {
          return !1;
        }
      }
      i($_, "svgNamespaceMatches");
      var bi = $_;
      function W_(e, t) {
        return !bi(e, t);
      }
      i(W_, "htmlNamespaceMatches");
      var G_ = W_;
      function Y_(e, t) {
        var r = !!$e(t);
        if (!r)
          return !1;
        var a = ce(e);
        return !(a && a !== "link");
      }
      i(Y_, "identicalLinksSamePurposeMatches");
      var K_ = Y_;
      function X_(e) {
        return rl(e);
      }
      i(X_, "insertedIntoFocusOrderMatches");
      var J_ = X_;
      function Q_(e) {
        return Ze(e);
      }
      i(Q_, "hasVisibleTextMatches");
      function Z_(e, t) {
        return Ze(t);
      }
      i(Z_, "isVisibleOnScreenMatches");
      function e0(e, t) {
        var r = ce(e);
        if (!r)
          return !1;
        var a = nr("widget"), n = a.includes(r);
        if (!n)
          return !1;
        var o = li();
        return !(!o.includes(r) || !X(Fr(t)) && !X(Rr(e)) || !X(st(t)));
      }
      i(e0, "labelContentNameMismatchMatches");
      var t0 = e0;
      function r0(e, t) {
        if (t.props.nodeName !== "input" || t.hasAttr("type") === !1)
          return !0;
        var r = t.attr("type").toLowerCase();
        return ["hidden", "image", "button", "submit", "reset"].includes(r) === !1;
      }
      i(r0, "labelMatches");
      var a0 = r0;
      function n0(e, t) {
        var r = "article, aside, main, nav, section";
        return e.hasAttribute("role") || !Xt(t, r);
      }
      i(n0, "landmarkHasBodyContextMatches");
      var i0 = n0;
      function o0(e, t) {
        var r = ["article", "aside", "main", "nav", "section"].join(",");
        function a(o) {
          return !We(o, r);
        }
        i(a, "isHeaderFooterLandmark");
        function n(o) {
          var l = o.actualNode, u = nr("landmark"), s = ce(l);
          if (!s)
            return !1;
          var c = l.nodeName.toUpperCase();
          if (c === "HEADER" || c === "FOOTER")
            return a(o);
          if (c === "SECTION" || c === "FORM") {
            var d = $e(o);
            return !!d;
          }
          return u.indexOf(s) >= 0 || s === "region";
        }
        return i(n, "isLandmarkVirtual"), n(t) && Fe(e);
      }
      i(o0, "landmarkUniqueMatches");
      var l0 = o0;
      function u0(e) {
        return !Fa(e) && !Te(e);
      }
      i(u0, "dataTableMatches2");
      var s0 = u0;
      function c0(e) {
        var t = X(e.innerText), r = e.getAttribute("role");
        return r && r !== "link" || !t || !Ze(e) ? !1 : Cn(e);
      }
      i(c0, "linkInTextBlockMatches");
      var d0 = c0;
      function f0(e, t) {
        var r = ce(t);
        return r ? !!se.ariaRoles[r].childrenPresentational : !1;
      }
      i(f0, "nestedInteractiveMatches");
      var p0 = f0;
      function m0(e) {
        return !(!e.currentSrc || e.hasAttribute("paused") || e.hasAttribute("muted"));
      }
      i(m0, "noAutoplayAudioMatches");
      var h0 = m0;
      function v0(e, t) {
        return !(!t.hasAttr("role") || !t.attr("role").trim());
      }
      i(v0, "noEmptyRoleMatches");
      var g0 = v0;
      function b0(e, t) {
        var r = be(t);
        if (!r || ["none", "presentation"].includes(r))
          return !0;
        var a = ll[r] || {}, n = a.accessibleNameRequired;
        return !!(n || Te(t));
      }
      i(b0, "noExplicitNameRequired");
      var Ts = b0;
      function y0(e, t) {
        var r = Lt(t), a = r.namingMethods;
        return !(a && a.length !== 0 || be(t) === "combobox" && Ke(t, 'input:not([type="hidden"])').length);
      }
      i(y0, "noNamingMethodMatches");
      var D0 = y0;
      function w0(e, t) {
        var r = parseInt(t.attr("tabindex"), 10);
        return isNaN(r) || r >= 0;
      }
      i(w0, "noNegativeTabindexMatches");
      var _0 = w0;
      function x0(e, t) {
        return !t.attr("role");
      }
      i(x0, "noRoleMatches");
      var E0 = x0;
      function A0(e, t) {
        return t.props.nodeName !== "html";
      }
      i(A0, "notHtmlMatches");
      var F0 = A0, C0 = /* @__PURE__ */ i(function(t, r) {
        return [Ts, k0].every(function(a) {
          return a(t, r);
        });
      }, "object_is_loaded_matches_default");
      function k0(e) {
        var t;
        if (!(e != null && (t = e.ownerDocument) !== null && t !== void 0 && t.createRange))
          return !0;
        var r = e.ownerDocument.createRange();
        return r.setStart(e, 0), r.setEnd(e, e.childNodes.length), r.getClientRects().length === 0;
      }
      i(k0, "objectHasLoaded");
      function R0(e) {
        var t = Array.from(e.parentNode.childNodes), r = e.textContent.trim(), a = /[.!?:;](?![.!?:;])/g;
        if (r.length === 0 || (r.match(a) || []).length >= 2)
          return !1;
        var n = t.slice(t.indexOf(e) + 1).filter(function(o) {
          return o.nodeName.toUpperCase() === "P" && o.textContent.trim() !== "";
        });
        return n.length !== 0;
      }
      i(R0, "pAsHeadingMatches");
      var T0 = R0;
      function S0(e, t) {
        return ft(t, {
          chromiumRoles: !0
        }) !== null;
      }
      i(S0, "presentationRoleConflictMatches");
      var O0 = S0;
      function I0(e, t) {
        if (!gt(e, 13))
          return !1;
        var r = be(t);
        if (ol["aria-haspopup"].values.includes(r)) {
          if (We(t, '[role~="combobox"]'))
            return !1;
          var a = t.attr("id");
          if (a) {
            var n = Dr(e), o = Array.from(n.querySelectorAll('[aria-owns~="'.concat(a, '"], [aria-controls~="').concat(a, '"]'))), l = o.some(function(c) {
              var d = qe(c.getAttribute("role"));
              return d.includes("combobox");
            });
            if (l)
              return !1;
          }
        }
        var u = Ke(t, "*"), s = u.some(function(c) {
          return wr(c, !0, !0);
        });
        return !!s;
      }
      i(I0, "scrollableRegionFocusableMatches");
      var P0 = I0;
      function N0(e) {
        return kn(e) && ta(e);
      }
      i(N0, "skipLinkMatches");
      var M0 = N0;
      function B0(e, t) {
        var r = ce(t);
        return ["treegrid", "grid", "table"].includes(r);
      }
      i(B0, "tableOrGridRoleMatches");
      function q0(e, t) {
        return L0.every(function(r) {
          return r(e, t);
        });
      }
      i(q0, "widgetNotInline");
      var L0 = [function(e, t) {
        return Ss(t);
      }, function(e, t) {
        return V0(t);
      }, function(e, t) {
        return !bi(e, t);
      }, function(e, t) {
        return Te(t);
      }, function(e, t) {
        return ct(t) || !j0(t);
      }, function(e) {
        return !Cn(e, {
          noLengthCompare: !0
        });
      }];
      function Ss(e) {
        return dt(e) === "widget";
      }
      i(Ss, "isWidgetType");
      function V0(e) {
        return e.props.nodeName !== "area";
      }
      i(V0, "isNotAreaElement");
      var j0 = it(/* @__PURE__ */ i(function e(t) {
        return t != null && t.parent ? Ss(t.parent) && ct(t.parent) ? !0 : e(t.parent) : !1;
      }, "hasWidgetAncestorInTabOrderMemoized"));
      function H0(e) {
        return e.ownerDocument.defaultView.self === e.ownerDocument.defaultView.top;
      }
      i(H0, "windowIsTopMatches");
      var z0 = H0;
      function U0(e) {
        var t = Mt(e.getAttribute("lang")), r = Mt(e.getAttribute("xml:lang"));
        return ha(t) && ha(r);
      }
      i(U0, "xmlLangMismatchMatches");
      var $0 = U0, W0 = {
        "abstractrole-evaluate": lg,
        "accesskeys-after": ry,
        "accesskeys-evaluate": ny,
        "alt-space-value-evaluate": Ay,
        "aria-allowed-attr-evaluate": ug,
        "aria-allowed-attr-matches": c_,
        "aria-allowed-role-evaluate": cg,
        "aria-allowed-role-matches": f_,
        "aria-busy-evaluate": dg,
        "aria-errormessage-evaluate": pg,
        "aria-has-attr-matches": m_,
        "aria-hidden-body-evaluate": hg,
        "aria-hidden-focus-matches": v_,
        "aria-label-evaluate": Fw,
        "aria-labelledby-evaluate": kw,
        "aria-level-evaluate": gg,
        "aria-prohibited-attr-evaluate": bg,
        "aria-required-attr-evaluate": wg,
        "aria-required-children-evaluate": Ag,
        "aria-required-children-matches": b_,
        "aria-required-parent-evaluate": kg,
        "aria-required-parent-matches": D_,
        "aria-roledescription-evaluate": Tg,
        "aria-unsupported-attr-evaluate": Og,
        "aria-valid-attr-evaluate": Pg,
        "aria-valid-attr-value-evaluate": Ng,
        "attr-non-space-content-evaluate": zb,
        "autocomplete-appropriate-evaluate": Lb,
        "autocomplete-matches": __,
        "autocomplete-valid-evaluate": jb,
        "avoid-inline-spacing-evaluate": Tw,
        "bypass-matches": A_,
        "caption-evaluate": dD,
        "caption-faked-evaluate": Gw,
        "color-contrast-evaluate": Rb,
        "color-contrast-matches": C_,
        "css-orientation-lock-evaluate": yD,
        "data-table-large-matches": R_,
        "data-table-matches": S_,
        "deprecatedrole-evaluate": Bg,
        "dlitem-evaluate": Zy,
        "doc-has-title-evaluate": Ow,
        "duplicate-id-active-matches": I_,
        "duplicate-id-after": _w,
        "duplicate-id-aria-matches": N_,
        "duplicate-id-evaluate": Ew,
        "duplicate-id-misc-matches": B_,
        "duplicate-img-label-evaluate": Cy,
        "exists-evaluate": Pw,
        "explicit-evaluate": Ry,
        "fallbackrole-evaluate": Vg,
        "focusable-content-evaluate": oy,
        "focusable-disabled-evaluate": uy,
        "focusable-element-evaluate": cy,
        "focusable-modal-open-evaluate": fy,
        "focusable-no-name-evaluate": my,
        "focusable-not-tabbable-evaluate": vy,
        "frame-focusable-content-evaluate": gy,
        "frame-focusable-content-matches": L_,
        "frame-tested-after": pD,
        "frame-tested-evaluate": hD,
        "frame-title-has-text-matches": j_,
        "has-alt-evaluate": Mw,
        "has-descendant-after": $b,
        "has-descendant-evaluate": Gb,
        "has-global-aria-attribute-evaluate": Hg,
        "has-implicit-chromium-role-matches": z_,
        "has-lang-evaluate": Gy,
        "has-text-content-evaluate": Yb,
        "has-widget-role-evaluate": Ug,
        "heading-matches": U_,
        "heading-order-after": OD,
        "heading-order-evaluate": VD,
        "help-same-as-label-evaluate": Sy,
        "hidden-content-evaluate": u_,
        "hidden-explicit-label-evaluate": Iy,
        "html-namespace-matches": G_,
        "html5-scope-evaluate": Kw,
        "identical-links-same-purpose-after": HD,
        "identical-links-same-purpose-evaluate": QD,
        "identical-links-same-purpose-matches": K_,
        "implicit-evaluate": Ny,
        "inline-style-property-evaluate": Bw,
        "inserted-into-focus-order-matches": J_,
        "internal-link-present-evaluate": ew,
        "invalid-children-evaluate": eD,
        "invalidrole-evaluate": Wg,
        "is-element-focusable-evaluate": Yg,
        "is-initiator-matches": Rs,
        "is-on-screen-evaluate": Vw,
        "is-visible-matches": Q_,
        "is-visible-on-screen-matches": Z_,
        "label-content-name-mismatch-evaluate": By,
        "label-content-name-mismatch-matches": t0,
        "label-matches": a0,
        "landmark-has-body-context-matches": i0,
        "landmark-is-top-level-evaluate": yy,
        "landmark-is-unique-after": zy,
        "landmark-is-unique-evaluate": $y,
        "landmark-unique-matches": l0,
        "layout-table-matches": s0,
        "link-in-text-block-evaluate": Pb,
        "link-in-text-block-matches": d0,
        "link-in-text-block-style-evaluate": Bb,
        "listitem-evaluate": aD,
        "matches-definition-evaluate": Xb,
        "meta-refresh-evaluate": aw,
        "meta-viewport-scale-evaluate": wD,
        "multiple-label-evaluate": Ly,
        "nested-interactive-matches": p0,
        "no-autoplay-audio-evaluate": gD,
        "no-autoplay-audio-matches": h0,
        "no-empty-role-matches": g0,
        "no-explicit-name-required-matches": Ts,
        "no-focusable-content-evaluate": Dy,
        "no-implicit-explicit-label-evaluate": Xg,
        "no-naming-method-matches": D0,
        "no-negative-tabindex-matches": _0,
        "no-role-matches": E0,
        "non-empty-if-present-evaluate": Hw,
        "not-html-matches": F0,
        "object-is-loaded-matches": C0,
        "only-dlitems-evaluate": iD,
        "only-listitems-evaluate": lD,
        "p-as-heading-evaluate": lw,
        "p-as-heading-matches": T0,
        "page-no-duplicate-after": Qb,
        "page-no-duplicate-evaluate": ey,
        "presentation-role-conflict-matches": O0,
        "presentational-role-evaluate": zw,
        "region-after": sw,
        "region-evaluate": fw,
        "same-caption-summary-evaluate": Xw,
        "scope-value-evaluate": e_,
        "scrollable-region-focusable-matches": P0,
        "skip-link-evaluate": vw,
        "skip-link-matches": M0,
        "structured-dlitems-evaluate": sD,
        "svg-namespace-matches": bi,
        "svg-non-empty-title-evaluate": $w,
        "tabindex-evaluate": xy,
        "table-or-grid-role-matches": B0,
        "target-offset-evaluate": xD,
        "target-size-evaluate": AD,
        "td-has-header-evaluate": r_,
        "td-headers-attr-evaluate": n_,
        "th-has-data-cells-evaluate": o_,
        "title-only-evaluate": jy,
        "unique-frame-title-after": bw,
        "unique-frame-title-evaluate": Dw,
        "unsupportedrole-evaluate": Qg,
        "valid-lang-evaluate": Ky,
        "valid-scrollable-semantics-evaluate": nb,
        "widget-not-inline-matches": q0,
        "window-is-top-matches": z0,
        "xml-lang-mismatch-evaluate": Jy,
        "xml-lang-mismatch-matches": $0
      }, Ca = W0;
      function G0(e) {
        this.id = e.id, this.data = null, this.relatedNodes = [], this.result = null;
      }
      i(G0, "CheckResult");
      var yi = G0;
      function Di(e) {
        if (typeof e == "string") {
          if (Ca[e])
            return Ca[e];
          if (/^\s*function[\s\w]*\(/.test(e))
            return new Function("return " + e + ";")();
          throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e));
        }
        return e;
      }
      i(Di, "createExecutionContext");
      function Os() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return (Array.isArray(e) || N(e) !== "object") && (e = {
          value: e
        }), e;
      }
      i(Os, "normalizeOptions");
      function or(e) {
        e && (this.id = e.id, this.configure(e));
      }
      i(or, "Check"), or.prototype.enabled = !0, or.prototype.run = /* @__PURE__ */ i(function(t, r, a, n, o) {
        r = r || {};
        var l = r.hasOwnProperty("enabled") ? r.enabled : this.enabled, u = this.getOptions(r.options);
        if (l) {
          var s = new yi(this), c = Ua(s, r, n, o), d;
          try {
            d = this.evaluate.call(c, t.actualNode, u, t, a);
          } catch (f) {
            t && t.actualNode && (f.errorNode = new at(t).toJSON()), o(f);
            return;
          }
          c.isAsync || (s.result = d, n(s));
        } else
          n(null);
      }, "run"), or.prototype.runSync = /* @__PURE__ */ i(function(t, r, a) {
        r = r || {};
        var n = r, o = n.enabled, l = o === void 0 ? this.enabled : o;
        if (!l)
          return null;
        var u = this.getOptions(r.options), s = new yi(this), c = Ua(s, r);
        c.async = /* @__PURE__ */ i(function() {
          throw new Error("Cannot run async check while in a synchronous run");
        }, "async");
        var d;
        try {
          d = this.evaluate.call(c, t.actualNode, u, t, a);
        } catch (f) {
          throw t && t.actualNode && (f.errorNode = new at(t).toJSON()), f;
        }
        return s.result = d, s;
      }, "runSync"), or.prototype.configure = /* @__PURE__ */ i(function(t) {
        var r = this;
        (!t.evaluate || Ca[t.evaluate]) && (this._internalCheck = !0), t.hasOwnProperty("enabled") && (this.enabled = t.enabled), t.hasOwnProperty("options") && (this._internalCheck ? this.options = Os(t.options) : this.options = t.options), ["evaluate", "after"].filter(function(a) {
          return t.hasOwnProperty(a);
        }).forEach(function(a) {
          return r[a] = Di(t[a]);
        });
      }, "configure2"), or.prototype.getOptions = /* @__PURE__ */ i(function(t) {
        return this._internalCheck ? ln(this.options, Os(t || {})) : t || this.options;
      }, "getOptions");
      var Is = or;
      function Y0(e) {
        this.id = e.id, this.result = ee.NA, this.pageLevel = e.pageLevel, this.impact = null, this.nodes = [];
      }
      i(Y0, "RuleResult");
      var ka = Y0;
      function Je(e, t) {
        this._audit = t, this.id = e.id, this.selector = e.selector || "*", e.impact && (he(ee.impact.includes(e.impact), "Impact ".concat(e.impact, " is not a valid impact")), this.impact = e.impact), this.excludeHidden = typeof e.excludeHidden == "boolean" ? e.excludeHidden : !0, this.enabled = typeof e.enabled == "boolean" ? e.enabled : !0, this.pageLevel = typeof e.pageLevel == "boolean" ? e.pageLevel : !1, this.reviewOnFail = typeof e.reviewOnFail == "boolean" ? e.reviewOnFail : !1, this.any = e.any || [], this.all = e.all || [], this.none = e.none || [], this.tags = e.tags || [], this.preload = !!e.preload, this.actIds = e.actIds, e.matches && (this.matches = Di(e.matches));
      }
      i(Je, "Rule"), Je.prototype.matches = /* @__PURE__ */ i(function() {
        return !0;
      }, "matches3"), Je.prototype.gather = /* @__PURE__ */ i(function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = "mark_gather_start_" + this.id, n = "mark_gather_end_" + this.id, o = "mark_isVisibleToScreenReaders_start_" + this.id, l = "mark_isVisibleToScreenReaders_end_" + this.id;
        r.performanceTimer && Ie.mark(a);
        var u = Wn(this.selector, t);
        return this.excludeHidden && (r.performanceTimer && Ie.mark(o), u = u.filter(function(s) {
          return Fe(s);
        }), r.performanceTimer && (Ie.mark(l), Ie.measure("rule_" + this.id + "#gather_axe.utils.isVisibleToScreenReaders", o, l))), r.performanceTimer && (Ie.mark(n), Ie.measure("rule_" + this.id + "#gather", a, n)), u;
      }, "gather"), Je.prototype.runChecks = /* @__PURE__ */ i(function(t, r, a, n, o, l) {
        var u = this, s = ut();
        this[t].forEach(function(c) {
          var d = u._audit.checks[c.id || c], f = da(d, u.id, a);
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
      }, "runChecks"), Je.prototype.runChecksSync = /* @__PURE__ */ i(function(t, r, a, n) {
        var o = this, l = [];
        return this[t].forEach(function(u) {
          var s = o._audit.checks[u.id || u], c = da(s, o.id, a);
          l.push(s.runSync(r, c, n));
        }), l = l.filter(function(u) {
          return u;
        }), {
          type: t,
          results: l
        };
      }, "runChecksSync"), Je.prototype.run = /* @__PURE__ */ i(function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0;
        a.performanceTimer && this._trackPerformance();
        var l = ut(), u = new ka(this), s;
        try {
          s = this.gatherAndMatchNodes(t, a);
        } catch (c) {
          o(new cr({
            cause: c,
            ruleId: this.id
          }));
          return;
        }
        a.performanceTimer && this._logGatherPerformance(s), s.forEach(function(c) {
          l.defer(function(d, f) {
            var p = ut();
            ["any", "all", "none"].forEach(function(m) {
              p.defer(function(h, y) {
                r.runChecks(m, c, a, t, h, y);
              });
            }), p.then(function(m) {
              var h = Ps(m);
              h && (h.node = new at(c, a), u.nodes.push(h), r.reviewOnFail && (["any", "all"].forEach(function(y) {
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
      }, "run2"), Je.prototype.runSync = /* @__PURE__ */ i(function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        a.performanceTimer && this._trackPerformance();
        var n = new ka(this), o;
        try {
          o = this.gatherAndMatchNodes(t, a);
        } catch (l) {
          throw new cr({
            cause: l,
            ruleId: this.id
          });
        }
        return a.performanceTimer && this._logGatherPerformance(o), o.forEach(function(l) {
          var u = [];
          ["any", "all", "none"].forEach(function(c) {
            u.push(r.runChecksSync(c, l, a, t));
          });
          var s = Ps(u);
          s && (s.node = l.actualNode ? new at(l, a) : null, n.nodes.push(s), r.reviewOnFail && (["any", "all"].forEach(function(c) {
            s[c].forEach(function(d) {
              d.result === !1 && (d.result = void 0);
            });
          }), s.none.forEach(function(c) {
            c.result === !0 && (c.result = void 0);
          })));
        }), a.performanceTimer && this._logRulePerformance(), n;
      }, "runSync2"), Je.prototype._trackPerformance = /* @__PURE__ */ i(function() {
        this._markStart = "mark_rule_start_" + this.id, this._markEnd = "mark_rule_end_" + this.id, this._markChecksStart = "mark_runchecks_start_" + this.id, this._markChecksEnd = "mark_runchecks_end_" + this.id;
      }, "_trackPerformance"), Je.prototype._logGatherPerformance = /* @__PURE__ */ i(function(t) {
        It("gather (", t.length, "):", Ie.timeElapsed() + "ms"), Ie.mark(this._markChecksStart);
      }, "_logGatherPerformance"), Je.prototype._logRulePerformance = /* @__PURE__ */ i(function() {
        Ie.mark(this._markChecksEnd), Ie.mark(this._markEnd), Ie.measure("runchecks_" + this.id, this._markChecksStart, this._markChecksEnd), Ie.measure("rule_" + this.id, this._markStart, this._markEnd);
      }, "_logRulePerformance");
      function Ps(e) {
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
      i(Ps, "getResult"), Je.prototype.gatherAndMatchNodes = /* @__PURE__ */ i(function(t, r) {
        var a = this, n = "mark_matches_start_" + this.id, o = "mark_matches_end_" + this.id, l = this.gather(t, r);
        return r.performanceTimer && Ie.mark(n), l = l.filter(function(u) {
          return a.matches(u.actualNode, u, t);
        }), r.performanceTimer && (Ie.mark(o), Ie.measure("rule_" + this.id + "#matches", n, o)), l;
      }, "gatherAndMatchNodes");
      function K0(e) {
        return Jr(e).map(function(t) {
          var r = e._audit.checks[t.id || t];
          return r && typeof r.after == "function" ? r : null;
        }).filter(Boolean);
      }
      i(K0, "findAfterChecks");
      function X0(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = Jr(a);
          n.forEach(function(o) {
            o.id === t && (o.node = a.node, r.push(o));
          });
        }), r;
      }
      i(X0, "findCheckResults");
      function J0(e) {
        return e.filter(function(t) {
          return t.filtered !== !0;
        });
      }
      i(J0, "filterChecks");
      function Q0(e) {
        var t = ["any", "all", "none"], r = e.nodes.filter(function(a) {
          var n = 0;
          return t.forEach(function(o) {
            a[o] = J0(a[o]), n += a[o].length;
          }), n > 0;
        });
        return e.pageLevel && r.length && (r = [r.reduce(function(a, n) {
          if (a)
            return t.forEach(function(o) {
              a[o].push.apply(a[o], n[o]);
            }), a;
        })]), r;
      }
      i(Q0, "sanitizeNodes"), Je.prototype.after = /* @__PURE__ */ i(function(t, r) {
        var a = this, n = K0(this), o = this.id;
        return n.forEach(function(l) {
          var u = X0(t.nodes, l.id), s = da(l, o, r), c = l.after(u, s);
          a.reviewOnFail && c.forEach(function(d) {
            var f = (a.any.includes(d.id) || a.all.includes(d.id)) && d.result === !1, p = a.none.includes(d.id) && d.result === !0;
            (f || p) && (d.result = void 0);
          }), u.forEach(function(d) {
            delete d.node, c.indexOf(d) === -1 && (d.filtered = !0);
          });
        }), t.nodes = Q0(t), t;
      }, "after"), Je.prototype.configure = /* @__PURE__ */ i(function(t) {
        t.hasOwnProperty("selector") && (this.selector = t.selector), t.hasOwnProperty("excludeHidden") && (this.excludeHidden = typeof t.excludeHidden == "boolean" ? t.excludeHidden : !0), t.hasOwnProperty("enabled") && (this.enabled = typeof t.enabled == "boolean" ? t.enabled : !0), t.hasOwnProperty("pageLevel") && (this.pageLevel = typeof t.pageLevel == "boolean" ? t.pageLevel : !1), t.hasOwnProperty("reviewOnFail") && (this.reviewOnFail = typeof t.reviewOnFail == "boolean" ? t.reviewOnFail : !1), t.hasOwnProperty("any") && (this.any = t.any), t.hasOwnProperty("all") && (this.all = t.all), t.hasOwnProperty("none") && (this.none = t.none), t.hasOwnProperty("tags") && (this.tags = t.tags), t.hasOwnProperty("actIds") && (this.actIds = t.actIds), t.hasOwnProperty("matches") && (this.matches = Di(t.matches)), t.impact && (he(ee.impact.includes(t.impact), "Impact ".concat(t.impact, " is not a valid impact")), this.impact = t.impact);
      }, "configure3");
      var Ns = Je, lr = ht(Hi()), ur = /\{\{.+?\}\}/g;
      function Ms() {
        if (D.origin)
          return D.origin;
        if (D.location && D.location.origin)
          return D.location.origin;
      }
      i(Ms, "getDefaultOrigin");
      function Z0(e) {
        var t;
        if (e ? (t = vt(e), t.commons = e.commons) : t = {}, t.reporter = t.reporter || null, t.noHtml = t.noHtml || !1, !t.allowedOrigins) {
          var r = Ms();
          t.allowedOrigins = r ? [r] : [];
        }
        return t.rules = t.rules || [], t.checks = t.checks || [], t.data = ie({
          checks: {},
          rules: {}
        }, t.data), t;
      }
      i(Z0, "getDefaultConfiguration");
      function Bs(e, t, r) {
        var a, n;
        for (a = 0, n = e.length; a < n; a++)
          t[r](e[a]);
      }
      i(Bs, "unpackToObject");
      var ex = /* @__PURE__ */ i(function(t, r) {
        var a = r.pass, n = r.fail;
        return typeof a == "string" && ur.test(a) && (a = lr.default.compile(a)), typeof n == "string" && ur.test(n) && (n = lr.default.compile(n)), ie({}, t, {
          messages: {
            pass: a || t.messages.pass,
            fail: n || t.messages.fail,
            incomplete: N(t.messages.incomplete) === "object" ? ie({}, t.messages.incomplete, r.incomplete) : r.incomplete
          }
        });
      }, "mergeCheckLocale"), tx = /* @__PURE__ */ i(function(t, r) {
        var a = r.help, n = r.description;
        return typeof a == "string" && ur.test(a) && (a = lr.default.compile(a)), typeof n == "string" && ur.test(n) && (n = lr.default.compile(n)), ie({}, t, {
          help: a || t.help,
          description: n || t.description
        });
      }, "mergeRuleLocale"), rx = /* @__PURE__ */ i(function(t, r) {
        var a = r.failureMessage;
        return typeof a == "string" && ur.test(a) && (a = lr.default.compile(a)), ie({}, t, {
          failureMessage: a || t.failureMessage
        });
      }, "mergeFailureMessage"), ax = /* @__PURE__ */ i(function(t, r) {
        return typeof r == "string" && ur.test(r) && (r = lr.default.compile(r)), r || t;
      }, "mergeFallbackMessage"), nx = function() {
        function e(t) {
          dr(this, e), this.lang = "en", this.defaultConfig = t, this.standards = se, this._init(), this._defaultLocale = null;
        }
        return i(e, "Audit"), fr(e, [{
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
                var E = v[b], A = this.data.failureSummaries[E], k = A.failureMessage;
                r.failureSummaries[E] = {
                  failureMessage: k
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
              this.data.checks[o] = ex(this.data.checks[o], r[o]);
            }
          }, "_applyCheckLocale")
        }, {
          key: "_applyRuleLocale",
          value: /* @__PURE__ */ i(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var o = a[n];
              if (!this.data.rules[o])
                throw new Error('Locale provided for unknown rule: "'.concat(o, '"'));
              this.data.rules[o] = tx(this.data.rules[o], r[o]);
            }
          }, "_applyRuleLocale")
        }, {
          key: "_applyFailureSummaries",
          value: /* @__PURE__ */ i(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var o = a[n];
              if (!this.data.failureSummaries[o])
                throw new Error('Locale provided for unknown failureMessage: "'.concat(o, '"'));
              this.data.failureSummaries[o] = rx(this.data.failureSummaries[o], r[o]);
            }
          }, "_applyFailureSummaries")
        }, {
          key: "applyLocale",
          value: /* @__PURE__ */ i(function(r) {
            this._setDefaultLocale(), r.checks && this._applyCheckLocale(r.checks), r.rules && this._applyRuleLocale(r.rules), r.failureSummaries && this._applyFailureSummaries(r.failureSummaries, "failureSummaries"), r.incompleteFallbackMessage && (this.data.incompleteFallbackMessage = ax(this.data.incompleteFallbackMessage, r.incompleteFallbackMessage)), r.lang && (this.lang = r.lang);
          }, "applyLocale")
        }, {
          key: "setAllowedOrigins",
          value: /* @__PURE__ */ i(function(r) {
            var a = Ms();
            this.allowedOrigins = [];
            var n = mt(r), o;
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
            var r = Z0(this.defaultConfig);
            this.lang = r.lang || "en", this.reporter = r.reporter, this.commands = {}, this.rules = [], this.checks = {}, this.brand = "axe", this.application = "axeAPI", this.tagExclude = ["experimental"], this.noHtml = r.noHtml, this.allowedOrigins = r.allowedOrigins, Bs(r.rules, this, "addRule"), Bs(r.checks, this, "addCheck"), this.data = {}, this.data.checks = r.data && r.data.checks || {}, this.data.rules = r.data && r.data.rules || {}, this.data.failureSummaries = r.data && r.data.failureSummaries || {}, this.data.incompleteFallbackMessage = r.data && r.data.incompleteFallbackMessage || "", this._constructHelpUrls();
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
            a ? a.configure(r) : this.rules.push(new Ns(r, this));
          }, "addRule")
        }, {
          key: "addCheck",
          value: /* @__PURE__ */ i(function(r) {
            var a = r.metadata;
            N(a) === "object" && (this.data.checks[r.id] = a, N(a.messages) === "object" && Object.keys(a.messages).filter(function(n) {
              return a.messages.hasOwnProperty(n) && typeof a.messages[n] == "string";
            }).forEach(function(n) {
              a.messages[n].indexOf("function") === 0 && (a.messages[n] = new Function("return " + a.messages[n] + ";")());
            })), this.checks[r.id] ? this.checks[r.id].configure(r) : this.checks[r.id] = new Is(r);
          }, "addCheck")
        }, {
          key: "run",
          value: /* @__PURE__ */ i(function(r, a, n, o) {
            this.normalizeOptions(a), g._selectCache = [];
            var l = ix(this.rules, r, a), u = l.now, s = l.later, c = ut();
            u.forEach(function(p) {
              c.defer(qs(p, r, a));
            });
            var d = ut();
            s.length && d.defer(function(p) {
              Ll(a).then(function(m) {
                return p(m);
              }).catch(function(m) {
                console.warn("Couldn't load preload assets: ", m), p(void 0);
              });
            });
            var f = ut();
            f.defer(c), f.defer(d), f.then(function(p) {
              var m = p.pop();
              if (m && m.length) {
                var h = m[0];
                h && (r = ie({}, r, h));
              }
              var y = p[0];
              if (!s.length) {
                g._selectCache = void 0, n(y.filter(function(v) {
                  return !!v;
                }));
                return;
              }
              var w = ut();
              s.forEach(function(v) {
                var b = qs(v, r, a);
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
              var l = yr(n, "id", o.id);
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
            }), ["object", "string"].includes(N(r.runOnly))) {
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
            return N(r.rules) === "object" && Object.keys(r.rules).forEach(function(d) {
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
              (typeof l.helpUrl != "string" || a && l.helpUrl === Ls(a, o.id, n)) && (l.helpUrl = Ls(r, o.id, n));
            });
          }, "_constructHelpUrls")
        }, {
          key: "resetRulesAndChecks",
          value: /* @__PURE__ */ i(function() {
            this._init(), this._resetLocale();
          }, "resetRulesAndChecks")
        }]), e;
      }();
      function ix(e, t, r) {
        var a = {
          now: [],
          later: []
        }, n = e.reduce(function(o, l) {
          return Hl(l, t, r) ? l.preload ? (o.later.push(l), o) : (o.now.push(l), o) : o;
        }, a);
        return n;
      }
      i(ix, "getRulesToRun");
      function qs(e, t, r) {
        return r.performanceTimer && Ie.mark("mark_rule_start_" + e.id), function(a, n) {
          e.run(t, r, function(o) {
            a(o);
          }, function(o) {
            if (r.debug)
              n(o);
            else {
              var l = Object.assign(new ka(e), {
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
      i(qs, "getDefferedRule");
      function Ls(e, t, r) {
        var a = e.brand, n = e.application, o = e.lang;
        return ee.helpUrlBase + a + "/" + (r || g.version.substring(0, g.version.lastIndexOf("."))) + "/" + t + "?application=" + encodeURIComponent(n) + (o && o !== "en" ? "&lang=" + encodeURIComponent(o) : "");
      }
      i(Ls, "getHelpUrl");
      var Vs = nx;
      function ox(e) {
        var t = D && "Node" in D && "NodeList" in D, r = !!T;
        if (!(t && r)) {
          if (!e || !e.ownerDocument)
            throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.');
          r || (ne.set("globalDocumentSet", !0), T = e.ownerDocument), t || (ne.set("globalWindowSet", !0), D = T.defaultView);
        }
      }
      i(ox, "setupGlobals");
      function wi() {
        ne.get("globalDocumentSet") && (ne.set("globalDocumentSet", !1), T = null), ne.get("globalWindowSet") && (ne.set("globalWindowSet", !1), D = null);
      }
      i(wi, "resetGlobals");
      function lx() {
        wi(), g._memoizedFns.forEach(function(e) {
          return e.clear();
        }), ne.clear(), g._tree = void 0, g._selectorData = void 0, g._selectCache = void 0;
      }
      i(lx, "teardown");
      var Ct = lx;
      function ux(e, t, r, a) {
        try {
          e = new fa(e), g._tree = e.flatTree, g._selectorData = Ur(e.flatTree);
        } catch (l) {
          return Ct(), a(l);
        }
        var n = ut(), o = g._audit;
        t.performanceTimer && Ie.auditStart(), e.frames.length && t.iframes !== !1 && n.defer(function(l, u) {
          _o(e, t, "rules", null, l, u);
        }), n.defer(function(l, u) {
          o.run(e, t, l, u);
        }), n.then(function(l) {
          try {
            t.performanceTimer && Ie.auditEnd();
            var u = Qr(l.map(function(s) {
              return {
                results: s
              };
            }));
            e.initiator && (u = o.after(u, t), u.forEach(pa), u = u.map(pr));
            try {
              r(u, Ct);
            } catch (s) {
              Ct(), It(s);
            }
          } catch (s) {
            Ct(), a(s);
          }
        }).catch(function(l) {
          Ct(), a(l);
        });
      }
      i(ux, "runRules");
      var js = ux;
      function sx(e, t, r) {
        var a = r, n = /* @__PURE__ */ i(function(s) {
          s instanceof Error || (s = new Error(s)), r(s);
        }, "reject2"), o = e && e.context || {};
        o.hasOwnProperty("include") && !o.include.length && (o.include = [T]);
        var l = e && e.options || {};
        switch (e.command) {
          case "rules":
            return js(o, l, function(u, s) {
              a(u), s();
            }, n);
          case "cleanup-plugin":
            return Ql(a, n);
          default:
            if (g._audit && g._audit.commands && g._audit.commands[e.command])
              return g._audit.commands[e.command](e, r);
        }
      }
      i(sx, "runCommand"), D.top !== D && (nt.subscribe("axe.start", sx), nt.subscribe("axe.ping", function(e, t, r) {
        r({
          axe: !0
        });
      }));
      function cx(e) {
        g._audit = new Vs(e);
      }
      i(cx, "load");
      var dx = cx;
      function Mr(e) {
        this._run = e.run, this._collect = e.collect, this._registry = {}, e.commands.forEach(function(t) {
          g._audit.registerCommand(t);
        });
      }
      i(Mr, "Plugin"), Mr.prototype.run = /* @__PURE__ */ i(function() {
        return this._run.apply(this, arguments);
      }, "run3"), Mr.prototype.collect = /* @__PURE__ */ i(function() {
        return this._collect.apply(this, arguments);
      }, "collect"), Mr.prototype.cleanup = /* @__PURE__ */ i(function(t) {
        var r = g.utils.queue(), a = this;
        Object.keys(this._registry).forEach(function(n) {
          r.defer(function(o) {
            a._registry[n].cleanup(o);
          });
        }), r.then(t);
      }, "cleanup2"), Mr.prototype.add = /* @__PURE__ */ i(function(t) {
        this._registry[t.id] = t;
      }, "add");
      function fx(e) {
        g.plugins[e.id] = new Mr(e);
      }
      i(fx, "registerPlugin");
      var px = fx;
      function mx() {
        var e = g._audit;
        if (!e)
          throw new Error("No audit configured");
        e.resetRulesAndChecks(), ip();
      }
      i(mx, "reset");
      var hx = mx;
      function vx(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        r.reporter = r.reporter || g._audit.reporter || "v1", g._selectorData = {}, t instanceof J || (t = new Kl(t));
        var a = El(e);
        if (!a)
          throw new Error("unknown rule `" + e + "`");
        a = Object.create(a, {
          excludeHidden: {
            value: !1
          }
        });
        var n = {
          initiator: !0,
          include: [t]
        }, o = a.runSync(n, r);
        pa(o), pr(o);
        var l = Gi([o]);
        return l.violations.forEach(function(u) {
          return u.nodes.forEach(function(s) {
            s.failureSummary = Mn(s);
          });
        }), ie({}, At(), l, {
          toolOptions: r
        });
      }
      i(vx, "runVirtualRule");
      var gx = vx;
      function Hs(e) {
        var t, r, a, n = ge(e, 3), o = n[0], l = n[1], u = n[2], s = new TypeError("axe.run arguments are invalid");
        if (!bx(o)) {
          if (u !== void 0)
            throw s;
          u = l, l = o, o = T;
        }
        if (N(l) !== "object") {
          if (u !== void 0)
            throw s;
          u = l, l = {};
        }
        if (typeof u != "function" && u !== void 0)
          throw s;
        return l = vt(l), l.reporter = (t = (r = l.reporter) !== null && r !== void 0 ? r : (a = g._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", {
          context: o,
          options: l,
          callback: u
        };
      }
      i(Hs, "normalizeRunParams");
      function bx(e) {
        switch (!0) {
          case typeof e == "string":
          case Array.isArray(e):
          case (D.Node && e instanceof D.Node):
          case (D.NodeList && e instanceof D.NodeList):
            return !0;
          case N(e) !== "object":
            return !1;
          case e.include !== void 0:
          case e.exclude !== void 0:
          case typeof e.length == "number":
            return !0;
          default:
            return !1;
        }
      }
      i(bx, "isContext");
      var Ra = /* @__PURE__ */ i(function() {
      }, "noop2");
      function yx() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        ox(t[0]);
        var a = Hs(t), n = a.context, o = a.options, l = a.callback, u = l === void 0 ? Ra : l, s = Dx(u), c = s.thenable, d = s.resolve, f = s.reject;
        try {
          he(g._audit, "No audit configured"), he(!g._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        } catch (h) {
          return _x(h, u);
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
            wx(h, o, w);
          } catch (v) {
            g._running = !1, y(), u(v), f(v);
          }
        }
        i(p, "handleRunRules");
        function m(h) {
          o.performanceTimer && g.utils.performanceTimer.end(), g._running = !1, wi(), u(h), f(h);
        }
        return i(m, "errorRunRules"), g._runRules(n, o, p, m), c;
      }
      i(yx, "run4");
      function Dx(e) {
        var t, r, a;
        return typeof Promise == "function" && e === Ra ? t = new Promise(function(n, o) {
          r = o, a = n;
        }) : a = r = Ra, {
          thenable: t,
          reject: r,
          resolve: a
        };
      }
      i(Dx, "getPromiseHandlers");
      function wx(e, t, r) {
        var a = Kn(t.reporter), n = a(e, t, r);
        n !== void 0 && r(n);
      }
      i(wx, "createReport");
      function _x(e, t) {
        if (wi(), typeof t == "function" && t !== Ra) {
          t(e.message);
          return;
        }
        throw e;
      }
      i(_x, "handleError");
      function xx() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var a = Hs(t), n = a.options, o = a.context;
        he(g._audit, "Axe is not configured. Audit is missing."), he(!g._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        var l = new fa(o, g._tree);
        return g._tree = l.flatTree, g._selectorData = Ur(l.flatTree), g._running = !0, new Promise(function(u, s) {
          g._audit.run(l, n, u, s);
        }).then(function(u) {
          u = u.map(function(d) {
            var f = d.nodes, p = je(d, Js);
            return ie({
              nodes: f.map(Ex)
            }, p);
          });
          var s = l.frames.map(function(d) {
            var f = d.node;
            return new at(f, n).toJSON();
          }), c;
          return l.initiator && (c = At()), g._running = !1, Ct(), {
            results: u,
            frames: s,
            environmentData: c
          };
        }).catch(function(u) {
          return g._running = !1, Ct(), Promise.reject(u);
        });
      }
      i(xx, "runPartial");
      function Ex(e) {
        var t = e.node, r = je(e, Qs);
        r.node = t.toJSON();
        for (var a = 0, n = ["any", "all", "none"]; a < n.length; a++) {
          var o = n[a];
          r[o] = r[o].map(function(l) {
            var u = l.relatedNodes, s = je(l, Zs);
            return ie({}, s, {
              relatedNodes: u.map(function(c) {
                return c.toJSON();
              })
            });
          });
        }
        return r;
      }
      i(Ex, "serializeNode");
      function Ax(e) {
        var t, r, a, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n = vt(n);
        var o = e.find(function(s) {
          return s.environmentData;
        }) || {}, l = o.environmentData;
        g._audit.normalizeOptions(n), n.reporter = (t = (r = n.reporter) !== null && r !== void 0 ? r : (a = g._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", Fx(e);
        var u = Qr(e);
        return u = g._audit.after(u, n), u.forEach(pa), u = u.map(pr), kx(u, ie({
          environmentData: l
        }, n));
      }
      i(Ax, "finishRun");
      function Fx(e) {
        var t = [], r = mt(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value, o = t.shift();
            if (!!n) {
              n.frameSpec = o ?? null;
              var l = Cx(n);
              t.unshift.apply(t, oe(l));
            }
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }
      }
      i(Fx, "setFrameSpec");
      function Cx(e) {
        var t = e.frames, r = e.frameSpec;
        return r ? t.map(function(a) {
          return at.mergeSpecs(a, r);
        }) : t;
      }
      i(Cx, "getMergedFrameSpecs");
      function kx(e, t) {
        return new Promise(function(r) {
          var a = Kn(t.reporter);
          a(e, t, r);
        });
      }
      i(kx, "createReport2");
      function Rx(e) {
        if (g._tree)
          throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.");
        return g._tree = Nn(e), g._selectorData = Ur(g._tree), g._tree[0];
      }
      i(Rx, "setup");
      var Tx = Rx, Sx = /* @__PURE__ */ i(function(t, r, a) {
        console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'), typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, ec);
        a(ie({}, At(o), {
          toolOptions: l
        }, xr(t, r)));
      }, "naReporter"), Ox = Sx, Ix = /* @__PURE__ */ i(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, tc);
        r.resultTypes = ["violations"];
        var u = xr(t, r), s = u.violations;
        a(ie({}, At(o), {
          toolOptions: l,
          violations: s
        }));
      }, "noPassesReporter"), Px = Ix, Nx = /* @__PURE__ */ i(function(t, r, a) {
        if (typeof r == "function" && (a = r, r = {}), !t || !Array.isArray(t))
          return a(t);
        var n = t.map(function(o) {
          for (var l = ie({}, o), u = ["passes", "violations", "incomplete", "inapplicable"], s = 0, c = u; s < c.length; s++) {
            var d = c[s];
            l[d] && Array.isArray(l[d]) && (l[d] = l[d].map(function(f) {
              var p, m = f.node, h = je(f, rc);
              return m = typeof ((p = m) === null || p === void 0 ? void 0 : p.toJSON) == "function" ? m.toJSON() : m, ie({
                node: m
              }, h);
            }));
          }
          return l;
        });
        a(n);
      }, "rawReporter"), zs = Nx, Mx = /* @__PURE__ */ i(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, ac);
        zs(t, l, function(u) {
          var s = At(o);
          a({
            raw: u,
            env: s
          });
        });
      }, "rawEnvReporter"), Bx = Mx, qx = /* @__PURE__ */ i(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, nc), u = xr(t, r), s = /* @__PURE__ */ i(function(d) {
          d.nodes.forEach(function(f) {
            f.failureSummary = Mn(f);
          });
        }, "addFailureSummaries");
        u.incomplete.forEach(s), u.violations.forEach(s), a(ie({}, At(o), {
          toolOptions: l
        }, u));
      }, "v1Reporter"), Lx = qx, Vx = /* @__PURE__ */ i(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, o = n.environmentData, l = je(n, ic), u = xr(t, r);
        a(ie({}, At(o), {
          toolOptions: l
        }, u));
      }, "v2Reporter"), jx = Vx, Hx = {
        base: {
          Audit: Vs,
          CheckResult: yi,
          Check: Is,
          Context: fa,
          RuleResult: ka,
          Rule: Ns,
          metadataFunctionMap: Ca
        },
        public: {
          reporters: Ar
        },
        helpers: {
          failureSummary: Mn,
          incompleteFallbackMessage: Bn,
          processAggregate: xr
        },
        utils: {
          setDefaultFrameMessenger: vo,
          cacheNodeSelectors: bl,
          getNodesMatchingExpression: vl,
          convertSelector: Wr
        },
        commons: {
          dom: {
            nativelyHidden: Fo,
            displayHidden: Co,
            visibilityHidden: ko,
            contentVisibiltyHidden: Ro,
            ariaHidden: To,
            opacityHidden: So,
            scrollHidden: Oo,
            overflowHidden: Io,
            clipHidden: No,
            areaHidden: cn,
            detailsHidden: Mo
          }
        }
      }, zx = Hx;
      g._thisWillBeDeletedDoNotUse = zx, g.constants = ee, g.log = It, g.AbstractVirtualNode = J, g.SerialVirtualNode = Kl, g.VirtualNode = Sn, g._cache = ne, g.imports = Xl, g.cleanup = Ql, g.configure = dh, g.frameMessenger = fh, g.getRules = mh, g._load = dx, g.plugins = {}, g.registerPlugin = px, g.hasReporter = eu, g.getReporter = Kn, g.addReporter = sh, g.reset = hx, g._runRules = js, g.runVirtualRule = gx, g.run = yx, g.setup = Tx, g.teardown = Ct, g.runPartial = xx, g.finishRun = Ax, g.commons = ys, g.utils = Ba, g.addReporter("na", Ox), g.addReporter("no-passes", Px), g.addReporter("rawEnv", Bx), g.addReporter("raw", zs), g.addReporter("v1", Lx), g.addReporter("v2", jx, !0);
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
            description: "Ensures the contrast between foreground and background colors meets WCAG 2 AAA contrast ratio thresholds",
            help: "Elements must have sufficient color contrast"
          },
          "color-contrast": {
            description: "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
            help: "Elements must have sufficient color contrast"
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
              fail: 'Element has no aria-busy="true" attribute'
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
                unallowed: "Element has children which are not allowed (see related nodes)"
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
            impact: "moderate",
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
            impact: "moderate",
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
            failureMessage: /* @__PURE__ */ i(function(O) {
              var V = "Fix any of the following:", Y = O;
              if (Y)
                for (var pe, we = -1, tt = Y.length - 1; we < tt; )
                  pe = Y[we += 1], V += `
  ` + pe.split(`
`).join(`
  `);
              return V;
            }, "anonymous")
          },
          none: {
            failureMessage: /* @__PURE__ */ i(function(O) {
              var V = "Fix all of the following:", Y = O;
              if (Y)
                for (var pe, we = -1, tt = Y.length - 1; we < tt; )
                  pe = Y[we += 1], V += `
  ` + pe.split(`
`).join(`
  `);
              return V;
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
        tags: ["cat.text-alternatives", "wcag2a", "wcag244", "wcag412", "section508", "section508.22.a", "ACT"],
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
        tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
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
        tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
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
        actIds: ["bc4a75"],
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
        tags: ["cat.aria", "wcag2a", "wcag412"],
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
        tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
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
        tags: ["cat.time-and-media", "wcag2a", "wcag121", "section508", "section508.22.a"],
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
        tags: ["cat.time-and-media", "wcag2a", "wcag222", "section508", "section508.22.j"],
        all: [],
        any: [],
        none: ["is-on-screen"]
      }, {
        id: "button-name",
        selector: "button",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
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
        tags: ["cat.keyboard", "wcag2a", "wcag241", "section508", "section508.22.o"],
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
            shadowOutlineEmMax: 0.1
          },
          id: "color-contrast-enhanced"
        }],
        none: []
      }, {
        id: "color-contrast",
        matches: "color-contrast-matches",
        excludeHidden: !1,
        tags: ["cat.color", "wcag2aa", "wcag143", "ACT"],
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
            shadowOutlineEmMax: 0.2
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
        tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT"],
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
        selector: 'th, [role="rowheader"], [role="columnheader"]',
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
        tags: ["cat.forms", "wcag2a", "wcag332"],
        all: [],
        any: [],
        none: ["multiple-label"]
      }, {
        id: "frame-focusable-content",
        selector: "html",
        matches: "frame-focusable-content-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211"],
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
        tags: ["cat.text-alternatives", "wcag412", "wcag2a"],
        actIds: ["4b1c6c"],
        all: [],
        any: [],
        none: ["unique-frame-title"],
        reviewOnFail: !0
      }, {
        id: "frame-title",
        selector: "frame, iframe",
        matches: "no-negative-tabindex-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag412", "section508", "section508.22.i"],
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
        tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
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
        selector: "html[lang], html[xml\\:lang]",
        tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
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
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
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
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
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
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "wcag412", "section508", "section508.22.a", "ACT"],
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
            occuranceThreshold: 3
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
        tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "ACT"],
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
        tags: ["cat.color", "wcag2a", "wcag141"],
        all: [],
        any: [{
          options: {
            requiredContrastRatio: 3
          },
          id: "link-in-text-block"
        }, "link-in-text-block-style"],
        none: []
      }, {
        id: "link-name",
        selector: "a[href]",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "wcag244", "section508", "section508.22.a", "ACT"],
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
        tags: ["cat.parsing", "wcag2a", "wcag222"],
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
        tags: ["cat.time-and-media", "wcag2a", "wcag221"],
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
        tags: ["cat.keyboard", "wcag2a", "wcag412"],
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
        tags: ["cat.time-and-media", "wcag2a", "wcag142", "ACT"],
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
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
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
        matches: "scrollable-region-focusable-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211"],
        actIds: ["0ssw9k"],
        all: [],
        any: ["focusable-content", "focusable-element"],
        none: []
      }, {
        id: "select-name",
        selector: "select",
        tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "ACT"],
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
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
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
        tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g"],
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
        tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
        actIds: ["d0f69e"],
        all: ["th-has-data-cells"],
        any: [],
        none: []
      }, {
        id: "valid-lang",
        selector: "[lang]:not(html), [xml\\:lang]:not(html)",
        tags: ["cat.language", "wcag2aa", "wcag312", "ACT"],
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
        tags: ["cat.text-alternatives", "wcag2a", "wcag122", "section508", "section508.22.a"],
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
          shadowOutlineEmMax: 0.1
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
          shadowOutlineEmMax: 0.2
        }
      }, {
        id: "link-in-text-block-style",
        evaluate: "link-in-text-block-style-evaluate"
      }, {
        id: "link-in-text-block",
        evaluate: "link-in-text-block-evaluate",
        options: {
          requiredContrastRatio: 3
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
          occuranceThreshold: 3
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
  }, "axeFunction"))(typeof window == "object" ? window : Wx);
})(Ei);
const Yx = /* @__PURE__ */ $x(Ei.exports), Jx = /* @__PURE__ */ Gx({
  __proto__: null,
  default: Yx
}, [Ei.exports]);
export {
  Jx as a
};
//# sourceMappingURL=axe.4a923a76.js.map
