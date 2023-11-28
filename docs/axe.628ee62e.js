var dF = Object.defineProperty;
var o = (Mt, Jt) => dF(Mt, "name", { value: Jt, configurable: !0 });
import { X as fF, Y as pF } from "./iframe.4ba987d6.js";
function mF(Mt, Jt) {
  for (var D = 0; D < Jt.length; D++) {
    const Qe = Jt[D];
    if (typeof Qe != "string" && !Array.isArray(Qe)) {
      for (const N in Qe)
        if (N !== "default" && !(N in Mt)) {
          const w = Object.getOwnPropertyDescriptor(Qe, N);
          w && Object.defineProperty(Mt, N, w.get ? w : {
            enumerable: !0,
            get: () => Qe[N]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(Mt, Symbol.toStringTag, { value: "Module" }));
}
o(mF, "_mergeNamespaces");
var wu = { exports: {} };
/*! axe v4.8.2
 * Copyright (c) 2015 - 2023 Deque Systems, Inc.
 *
 * Your use of this Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * This entire copyright notice must appear in every copy of this file you
 * distribute or in any file that contains substantial portions of this source
 * code.
 */
(function(Mt) {
  (/* @__PURE__ */ o(function Jt(D) {
    var Qe = D, N = D.document, w = w || {};
    w.version = "4.8.2", S(Mt) === "object" && Mt.exports && typeof Jt.toString == "function" && (w.source = "(" + Jt.toString() + ')(typeof window === "object" ? window : this);', Mt.exports = w), typeof D.getComputedStyle == "function" && (D.axe = w);
    function Vr(A) {
      this.name = "SupportError", this.cause = A.cause, this.message = "`".concat(A.cause, "` - feature unsupported in your environment."), A.ruleId && (this.ruleId = A.ruleId, this.message += " Skipping ".concat(this.ruleId, " rule.")), this.stack = new Error().stack;
    }
    o(Vr, "SupportError"), Vr.prototype = Object.create(Error.prototype), Vr.prototype.constructor = Vr;
    var Bf = ["node"], qf = ["relatedNodes"], jf = ["node"], zf = ["variant"], Vf = ["matches"], Hf = ["chromium"], $f = ["noImplicit"], Uf = ["noPresentational"], Gf = ["precision", "format", "inGamut"], Wf = ["space"], Yf = ["algorithm"], Xf = ["method"], Kf = ["maxDeltaE", "deltaEMethod", "steps", "maxSteps"], Zf = ["node"], Jf = ["environmentData"], Qf = ["environmentData"], ep = ["environmentData"], tp = ["environmentData"], rp = ["environmentData"];
    function ap(A) {
      return ku(A) || Tu(A) || Ta(A) || Ru();
    }
    o(ap, "_toArray");
    function np(A, R, I) {
      return R = Ou(R), R in A ? Object.defineProperty(A, R, {
        value: I,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : A[R] = I, A;
    }
    o(np, "_defineProperty");
    function Ca(A, R, I) {
      return _u() ? Ca = Reflect.construct.bind() : Ca = /* @__PURE__ */ o(function(me, be, et) {
        var ft = [null];
        ft.push.apply(ft, be);
        var tt = Function.bind.apply(me, ft), rt = new tt();
        return et && Aa(rt, et.prototype), rt;
      }, "_construct"), Ca.apply(null, arguments);
    }
    o(Ca, "_construct");
    function Xn(A, R) {
      if (typeof R != "function" && R !== null)
        throw new TypeError("Super expression must either be null or a function");
      A.prototype = Object.create(R && R.prototype, {
        constructor: {
          value: A,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(A, "prototype", {
        writable: !1
      }), R && Aa(A, R);
    }
    o(Xn, "_inherits");
    function Aa(A, R) {
      return Aa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : /* @__PURE__ */ o(function(Z, me) {
        return Z.__proto__ = me, Z;
      }, "_setPrototypeOf"), Aa(A, R);
    }
    o(Aa, "_setPrototypeOf");
    function Kn(A) {
      var R = _u();
      return /* @__PURE__ */ o(function() {
        var Z = Fa(A), me;
        if (R) {
          var be = Fa(this).constructor;
          me = Reflect.construct(Z, arguments, be);
        } else
          me = Z.apply(this, arguments);
        return ip(this, me);
      }, "_createSuperInternal");
    }
    o(Kn, "_createSuper");
    function ip(A, R) {
      if (R && (S(R) === "object" || typeof R == "function"))
        return R;
      if (R !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Du(A);
    }
    o(ip, "_possibleConstructorReturn");
    function Du(A) {
      if (A === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return A;
    }
    o(Du, "_assertThisInitialized");
    function _u() {
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
    o(_u, "_isNativeReflectConstruct");
    function Fa(A) {
      return Fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : /* @__PURE__ */ o(function(I) {
        return I.__proto__ || Object.getPrototypeOf(I);
      }, "_getPrototypeOf"), Fa(A);
    }
    o(Fa, "_getPrototypeOf");
    function xu(A, R, I) {
      Cu(A, R), R.set(A, I);
    }
    o(xu, "_classPrivateFieldInitSpec");
    function Eu(A, R) {
      Cu(A, R), R.add(A);
    }
    o(Eu, "_classPrivateMethodInitSpec");
    function Cu(A, R) {
      if (R.has(A))
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
    o(Cu, "_checkPrivateRedeclaration");
    function Hr(A, R) {
      var I = Fu(A, R, "get");
      return op(A, I);
    }
    o(Hr, "_classPrivateFieldGet");
    function op(A, R) {
      return R.get ? R.get.call(A) : R.value;
    }
    o(op, "_classApplyDescriptorGet");
    function Zn(A, R, I) {
      if (!R.has(A))
        throw new TypeError("attempted to get private field on non-instance");
      return I;
    }
    o(Zn, "_classPrivateMethodGet");
    function Au(A, R, I) {
      var Z = Fu(A, R, "set");
      return up(A, Z, I), I;
    }
    o(Au, "_classPrivateFieldSet");
    function Fu(A, R, I) {
      if (!R.has(A))
        throw new TypeError("attempted to " + I + " private field on non-instance");
      return R.get(A);
    }
    o(Fu, "_classExtractFieldDescriptor");
    function up(A, R, I) {
      if (R.set)
        R.set.call(A, I);
      else {
        if (!R.writable)
          throw new TypeError("attempted to set read only private field");
        R.value = I;
      }
    }
    o(up, "_classApplyDescriptorSet");
    function Le(A, R) {
      if (A == null)
        return {};
      var I = lp(A, R), Z, me;
      if (Object.getOwnPropertySymbols) {
        var be = Object.getOwnPropertySymbols(A);
        for (me = 0; me < be.length; me++)
          Z = be[me], !(R.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(A, Z) || (I[Z] = A[Z]));
      }
      return I;
    }
    o(Le, "_objectWithoutProperties");
    function lp(A, R) {
      if (A == null)
        return {};
      var I = {}, Z = Object.keys(A), me, be;
      for (be = 0; be < Z.length; be++)
        me = Z[be], !(R.indexOf(me) >= 0) && (I[me] = A[me]);
      return I;
    }
    o(lp, "_objectWithoutPropertiesLoose");
    function ae(A) {
      return cp(A) || Tu(A) || Ta(A) || sp();
    }
    o(ae, "_toConsumableArray");
    function sp() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    o(sp, "_nonIterableSpread");
    function Tu(A) {
      if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null)
        return Array.from(A);
    }
    o(Tu, "_iterableToArray");
    function cp(A) {
      if (Array.isArray(A))
        return Jn(A);
    }
    o(cp, "_arrayWithoutHoles");
    function pe() {
      return pe = Object.assign ? Object.assign.bind() : function(A) {
        for (var R = 1; R < arguments.length; R++) {
          var I = arguments[R];
          for (var Z in I)
            Object.prototype.hasOwnProperty.call(I, Z) && (A[Z] = I[Z]);
        }
        return A;
      }, pe.apply(this, arguments);
    }
    o(pe, "_extends");
    function H(A, R) {
      return ku(A) || dp(A, R) || Ta(A, R) || Ru();
    }
    o(H, "_slicedToArray");
    function Ru() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    o(Ru, "_nonIterableRest");
    function dp(A, R) {
      var I = A == null ? null : typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
      if (I != null) {
        var Z, me, be, et, ft = [], tt = !0, rt = !1;
        try {
          if (be = (I = I.call(A)).next, R === 0) {
            if (Object(I) !== I)
              return;
            tt = !1;
          } else
            for (; !(tt = (Z = be.call(I)).done) && (ft.push(Z.value), ft.length !== R); tt = !0)
              ;
        } catch (Qn) {
          rt = !0, me = Qn;
        } finally {
          try {
            if (!tt && I.return != null && (et = I.return(), Object(et) !== et))
              return;
          } finally {
            if (rt)
              throw me;
          }
        }
        return ft;
      }
    }
    o(dp, "_iterableToArrayLimit");
    function ku(A) {
      if (Array.isArray(A))
        return A;
    }
    o(ku, "_arrayWithHoles");
    function _t(A, R) {
      if (!(A instanceof R))
        throw new TypeError("Cannot call a class as a function");
    }
    o(_t, "_classCallCheck");
    function Su(A, R) {
      for (var I = 0; I < R.length; I++) {
        var Z = R[I];
        Z.enumerable = Z.enumerable || !1, Z.configurable = !0, "value" in Z && (Z.writable = !0), Object.defineProperty(A, Ou(Z.key), Z);
      }
    }
    o(Su, "_defineProperties");
    function xt(A, R, I) {
      return R && Su(A.prototype, R), I && Su(A, I), Object.defineProperty(A, "prototype", {
        writable: !1
      }), A;
    }
    o(xt, "_createClass");
    function Ou(A) {
      var R = fp(A, "string");
      return S(R) === "symbol" ? R : String(R);
    }
    o(Ou, "_toPropertyKey");
    function fp(A, R) {
      if (S(A) !== "object" || A === null)
        return A;
      var I = A[Symbol.toPrimitive];
      if (I !== void 0) {
        var Z = I.call(A, R || "default");
        if (S(Z) !== "object")
          return Z;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (R === "string" ? String : Number)(A);
    }
    o(fp, "_toPrimitive");
    function Fe(A, R) {
      var I = typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
      if (!I) {
        if (Array.isArray(A) || (I = Ta(A)) || R && A && typeof A.length == "number") {
          I && (A = I);
          var Z = 0, me = /* @__PURE__ */ o(function() {
          }, "F");
          return {
            s: me,
            n: /* @__PURE__ */ o(function() {
              return Z >= A.length ? {
                done: !0
              } : {
                done: !1,
                value: A[Z++]
              };
            }, "n"),
            e: /* @__PURE__ */ o(function(rt) {
              throw rt;
            }, "e"),
            f: me
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var be = !0, et = !1, ft;
      return {
        s: /* @__PURE__ */ o(function() {
          I = I.call(A);
        }, "s"),
        n: /* @__PURE__ */ o(function() {
          var rt = I.next();
          return be = rt.done, rt;
        }, "n"),
        e: /* @__PURE__ */ o(function(rt) {
          et = !0, ft = rt;
        }, "e"),
        f: /* @__PURE__ */ o(function() {
          try {
            !be && I.return != null && I.return();
          } finally {
            if (et)
              throw ft;
          }
        }, "f")
      };
    }
    o(Fe, "_createForOfIteratorHelper");
    function Ta(A, R) {
      if (!!A) {
        if (typeof A == "string")
          return Jn(A, R);
        var I = Object.prototype.toString.call(A).slice(8, -1);
        if (I === "Object" && A.constructor && (I = A.constructor.name), I === "Map" || I === "Set")
          return Array.from(A);
        if (I === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))
          return Jn(A, R);
      }
    }
    o(Ta, "_unsupportedIterableToArray");
    function Jn(A, R) {
      (R == null || R > A.length) && (R = A.length);
      for (var I = 0, Z = new Array(R); I < R; I++)
        Z[I] = A[I];
      return Z;
    }
    o(Jn, "_arrayLikeToArray");
    function S(A) {
      return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
        return typeof R;
      } : function(R) {
        return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
      }, S(A);
    }
    o(S, "_typeof"), function() {
      var A, R, I, Z, me = Object.create, be = Object.defineProperty, et = Object.getPrototypeOf, ft = Object.prototype.hasOwnProperty, tt = Object.getOwnPropertyNames, rt = Object.getOwnPropertyDescriptor, Qn = /* @__PURE__ */ o(function(t, r, a) {
        return r in t ? be(t, r, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a
        }) : t[r] = a;
      }, "__defNormalProp"), pp = /* @__PURE__ */ o(function(t) {
        return be(t, "__esModule", {
          value: !0
        });
      }, "__markAsModule"), C = /* @__PURE__ */ o(function(t, r) {
        return function() {
          return r || t((r = {
            exports: {}
          }).exports, r), r.exports;
        };
      }, "__commonJS"), gt = /* @__PURE__ */ o(function(t, r) {
        for (var a in r)
          be(t, a, {
            get: r[a],
            enumerable: !0
          });
      }, "__export"), mp = /* @__PURE__ */ o(function(t, r, a) {
        if (r && S(r) === "object" || typeof r == "function") {
          var n = Fe(tt(r)), i;
          try {
            var u = /* @__PURE__ */ o(function() {
              var s = i.value;
              !ft.call(t, s) && s !== "default" && be(t, s, {
                get: /* @__PURE__ */ o(function() {
                  return r[s];
                }, "get"),
                enumerable: !(a = rt(r, s)) || a.enumerable
              });
            }, "_loop");
            for (n.s(); !(i = n.n()).done; )
              u();
          } catch (l) {
            n.e(l);
          } finally {
            n.f();
          }
        }
        return t;
      }, "__exportStar"), Et = /* @__PURE__ */ o(function(t) {
        return mp(pp(be(t != null ? me(et(t)) : {}, "default", t && t.__esModule && "default" in t ? {
          get: /* @__PURE__ */ o(function() {
            return t.default;
          }, "get"),
          enumerable: !0
        } : {
          value: t,
          enumerable: !0
        })), t);
      }, "__toModule"), Mu = /* @__PURE__ */ o(function(t, r, a) {
        return Qn(t, S(r) !== "symbol" ? r + "" : r, a), a;
      }, "__publicField"), hp = C(function(e, t) {
        t.exports = function() {
        };
      }), Qt = C(function(e, t) {
        var r = hp()();
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Nu = C(function(e, t) {
        var r = Qt(), a = Array.prototype.forEach, n = Object.create, i = /* @__PURE__ */ o(function(l, s) {
          var c;
          for (c in l)
            s[c] = l[c];
        }, "process2");
        t.exports = function(u) {
          var l = n(null);
          return a.call(arguments, function(s) {
            !r(s) || i(Object(s), l);
          }), l;
        };
      }), vp = C(function(e, t) {
        t.exports = function() {
          var r = Math.sign;
          return typeof r != "function" ? !1 : r(10) === 1 && r(-20) === -1;
        };
      }), gp = C(function(e, t) {
        t.exports = function(r) {
          return r = Number(r), isNaN(r) || r === 0 ? r : r > 0 ? 1 : -1;
        };
      }), bp = C(function(e, t) {
        t.exports = vp()() ? Math.sign : gp();
      }), yp = C(function(e, t) {
        var r = bp(), a = Math.abs, n = Math.floor;
        t.exports = function(i) {
          return isNaN(i) ? 0 : (i = Number(i), i === 0 || !isFinite(i) ? i : r(i) * n(a(i)));
        };
      }), er = C(function(e, t) {
        var r = yp(), a = Math.max;
        t.exports = function(n) {
          return a(0, r(n));
        };
      }), Iu = C(function(e, t) {
        var r = er();
        t.exports = function(a, n, i) {
          var u;
          return isNaN(a) ? (u = n, u >= 0 ? i && u ? u - 1 : u : 1) : a === !1 ? !1 : r(a);
        };
      }), jt = C(function(e, t) {
        t.exports = function(r) {
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          return r;
        };
      }), wr = C(function(e, t) {
        var r = Qt();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError("Cannot use null or undefined");
          return a;
        };
      }), wp = C(function(e, t) {
        var r = jt(), a = wr(), n = Function.prototype.bind, i = Function.prototype.call, u = Object.keys, l = Object.prototype.propertyIsEnumerable;
        t.exports = function(s, c) {
          return function(d, f) {
            var p, m = arguments[2], h = arguments[3];
            return d = Object(a(d)), r(f), p = u(d), h && p.sort(typeof h == "function" ? n.call(h, d) : void 0), typeof s != "function" && (s = p[s]), i.call(s, p, function(v, b) {
              return l.call(d, v) ? i.call(f, m, d[v], v, d, b) : c;
            });
          };
        };
      }), Ra = C(function(e, t) {
        t.exports = wp()("forEach");
      }), tr = C(function() {
      }), Dp = C(function(e, t) {
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
      }), _p = C(function(e, t) {
        t.exports = function() {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        };
      }), xp = C(function(e, t) {
        var r = Qt(), a = Object.keys;
        t.exports = function(n) {
          return a(r(n) ? Object(n) : n);
        };
      }), Ep = C(function(e, t) {
        t.exports = _p()() ? Object.keys : xp();
      }), Cp = C(function(e, t) {
        var r = Ep(), a = wr(), n = Math.max;
        t.exports = function(i, u) {
          var l, s, c = n(arguments.length, 2), d;
          for (i = Object(a(i)), d = /* @__PURE__ */ o(function(p) {
            try {
              i[p] = u[p];
            } catch (m) {
              l || (l = m);
            }
          }, "assign"), s = 1; s < c; ++s)
            u = arguments[s], r(u).forEach(d);
          if (l !== void 0)
            throw l;
          return i;
        };
      }), Pu = C(function(e, t) {
        t.exports = Dp()() ? Object.assign : Cp();
      }), Ap = C(function(e, t) {
        var r = Qt(), a = {
          function: !0,
          object: !0
        };
        t.exports = function(n) {
          return r(n) && a[S(n)] || !1;
        };
      }), Fp = C(function(e, t) {
        var r = Pu(), a = Ap(), n = Qt(), i = Error.captureStackTrace;
        t.exports = function(u) {
          var l = new Error(u), s = arguments[1], c = arguments[2];
          return n(c) || a(s) && (c = s, s = null), n(c) && r(l, c), n(s) && (l.code = s), i && i(l, t.exports), l;
        };
      }), Lu = C(function(e, t) {
        var r = wr(), a = Object.defineProperty, n = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols;
        t.exports = function(l, s) {
          var c, d = Object(r(s));
          if (l = Object(r(l)), i(d).forEach(function(f) {
            try {
              a(l, f, n(s, f));
            } catch (p) {
              c = p;
            }
          }), typeof u == "function" && u(d).forEach(function(f) {
            try {
              a(l, f, n(s, f));
            } catch (p) {
              c = p;
            }
          }), c !== void 0)
            throw c;
          return l;
        };
      }), Bu = C(function(e, t) {
        var r = er(), a = /* @__PURE__ */ o(function(c, d) {
          return d;
        }, "test"), n, i, u, l;
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
        }, i = Object.defineProperty, t.exports = function(s, c) {
          return c = r(c), s.length === c ? s : (n.value = c, i(s, "length", n));
        }) : (l = Lu(), u = function() {
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
          d = u(c)(s);
          try {
            l(d, s);
          } catch {
          }
          return d;
        });
      }), qu = C(function(e, t) {
        var r = void 0;
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Tp = C(function(e, t) {
        var r = qu(), a = {
          object: !0,
          function: !0,
          undefined: !0
        };
        t.exports = function(n) {
          return r(n) ? hasOwnProperty.call(a, S(n)) : !1;
        };
      }), Rp = C(function(e, t) {
        var r = Tp();
        t.exports = function(a) {
          if (!r(a))
            return !1;
          try {
            return a.constructor ? a.constructor.prototype === a : !1;
          } catch {
            return !1;
          }
        };
      }), kp = C(function(e, t) {
        var r = Rp();
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
      }), Sp = C(function(e, t) {
        var r = kp(), a = /^\s*class[\s{/}]/, n = Function.prototype.toString;
        t.exports = function(i) {
          return !(!r(i) || a.test(n.call(i)));
        };
      }), Op = C(function(e, t) {
        var r = "razdwatrzy";
        t.exports = function() {
          return typeof r.contains != "function" ? !1 : r.contains("dwa") === !0 && r.contains("foo") === !1;
        };
      }), Mp = C(function(e, t) {
        var r = String.prototype.indexOf;
        t.exports = function(a) {
          return r.call(this, a, arguments[1]) > -1;
        };
      }), Np = C(function(e, t) {
        t.exports = Op()() ? String.prototype.contains : Mp();
      }), rr = C(function(e, t) {
        var r = qu(), a = Sp(), n = Pu(), i = Nu(), u = Np(), l = t.exports = function(s, c) {
          var d, f, p, m, h;
          return arguments.length < 2 || typeof s != "string" ? (m = c, c = s, s = null) : m = arguments[2], r(s) ? (d = u.call(s, "c"), f = u.call(s, "e"), p = u.call(s, "w")) : (d = p = !0, f = !1), h = {
            value: c,
            configurable: d,
            enumerable: f,
            writable: p
          }, m ? n(i(m), h) : h;
        };
        l.gs = function(s, c, d) {
          var f, p, m, h;
          return typeof s != "string" ? (m = d, d = c, c = s, s = null) : m = arguments[3], r(c) ? a(c) ? r(d) ? a(d) || (m = d, d = void 0) : d = void 0 : (m = c, c = d = void 0) : c = void 0, r(s) ? (f = u.call(s, "c"), p = u.call(s, "e")) : (f = !0, p = !1), h = {
            get: c,
            set: d,
            configurable: f,
            enumerable: p
          }, m ? n(i(m), h) : h;
        };
      }), Ip = C(function(e, t) {
        var r = rr(), a = jt(), n = Function.prototype.apply, i = Function.prototype.call, u = Object.create, l = Object.defineProperty, s = Object.defineProperties, c = Object.prototype.hasOwnProperty, d = {
          configurable: !0,
          enumerable: !1,
          writable: !0
        }, f, p, m, h, v, b, g;
        f = /* @__PURE__ */ o(function(_, x) {
          var T;
          return a(x), c.call(this, "__ee__") ? T = this.__ee__ : (T = d.value = u(null), l(this, "__ee__", d), d.value = null), T[_] ? S(T[_]) === "object" ? T[_].push(x) : T[_] = [T[_], x] : T[_] = x, this;
        }, "on"), p = /* @__PURE__ */ o(function(_, x) {
          var T, k;
          return a(x), k = this, f.call(this, _, T = /* @__PURE__ */ o(function() {
            m.call(k, _, T), n.call(x, this, arguments);
          }, "once2")), T.__eeOnceListener__ = x, this;
        }, "once"), m = /* @__PURE__ */ o(function(_, x) {
          var T, k, O, B;
          if (a(x), !c.call(this, "__ee__"))
            return this;
          if (T = this.__ee__, !T[_])
            return this;
          if (k = T[_], S(k) === "object")
            for (B = 0; O = k[B]; ++B)
              (O === x || O.__eeOnceListener__ === x) && (k.length === 2 ? T[_] = k[B ? 0 : 1] : k.splice(B, 1));
          else
            (k === x || k.__eeOnceListener__ === x) && delete T[_];
          return this;
        }, "off"), h = /* @__PURE__ */ o(function(_) {
          var x, T, k, O, B;
          if (!!c.call(this, "__ee__") && (O = this.__ee__[_], !!O))
            if (S(O) === "object") {
              for (T = arguments.length, B = new Array(T - 1), x = 1; x < T; ++x)
                B[x - 1] = arguments[x];
              for (O = O.slice(), x = 0; k = O[x]; ++x)
                n.call(k, this, B);
            } else
              switch (arguments.length) {
                case 1:
                  i.call(O, this);
                  break;
                case 2:
                  i.call(O, this, arguments[1]);
                  break;
                case 3:
                  i.call(O, this, arguments[1], arguments[2]);
                  break;
                default:
                  for (T = arguments.length, B = new Array(T - 1), x = 1; x < T; ++x)
                    B[x - 1] = arguments[x];
                  n.call(O, this, B);
              }
        }, "emit"), v = {
          on: f,
          once: p,
          off: m,
          emit: h
        }, b = {
          on: r(f),
          once: r(p),
          off: r(m),
          emit: r(h)
        }, g = s({}, b), t.exports = e = /* @__PURE__ */ o(function(_) {
          return _ == null ? u(g) : s(Object(_), b);
        }, "exports"), e.methods = v;
      }), Pp = C(function(e, t) {
        t.exports = function() {
          var r = Array.from, a, n;
          return typeof r != "function" ? !1 : (a = ["raz", "dwa"], n = r(a), Boolean(n && n !== a && n[1] === "dwa"));
        };
      }), Lp = C(function(e, t) {
        t.exports = function() {
          return (typeof globalThis > "u" ? "undefined" : S(globalThis)) !== "object" || !globalThis ? !1 : globalThis.Array === Array;
        };
      }), Bp = C(function(e, t) {
        var r = /* @__PURE__ */ o(function() {
          if ((typeof self > "u" ? "undefined" : S(self)) === "object" && self)
            return self;
          if ((typeof D > "u" ? "undefined" : S(D)) === "object" && D)
            return D;
          throw new Error("Unable to resolve global `this`");
        }, "naiveFallback");
        t.exports = function() {
          if (this)
            return this;
          try {
            Object.defineProperty(Object.prototype, "__global__", {
              get: /* @__PURE__ */ o(function() {
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
      }), ka = C(function(e, t) {
        t.exports = Lp()() ? globalThis : Bp();
      }), qp = C(function(e, t) {
        var r = ka(), a = {
          object: !0,
          symbol: !0
        };
        t.exports = function() {
          var n = r.Symbol, i;
          if (typeof n != "function")
            return !1;
          i = n("test symbol");
          try {
            String(i);
          } catch {
            return !1;
          }
          return !(!a[S(n.iterator)] || !a[S(n.toPrimitive)] || !a[S(n.toStringTag)]);
        };
      }), jp = C(function(e, t) {
        t.exports = function(r) {
          return r ? S(r) === "symbol" ? !0 : !r.constructor || r.constructor.name !== "Symbol" ? !1 : r[r.constructor.toStringTag] === "Symbol" : !1;
        };
      }), ju = C(function(e, t) {
        var r = jp();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError(a + " is not a symbol");
          return a;
        };
      }), zp = C(function(e, t) {
        var r = rr(), a = Object.create, n = Object.defineProperty, i = Object.prototype, u = a(null);
        t.exports = function(l) {
          for (var s = 0, c, d; u[l + (s || "")]; )
            ++s;
          return l += s || "", u[l] = !0, c = "@@" + l, n(i, c, r.gs(null, function(f) {
            d || (d = !0, n(this, c, r(f)), d = !1);
          })), c;
        };
      }), Vp = C(function(e, t) {
        var r = rr(), a = ka().Symbol;
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
      }), Hp = C(function(e, t) {
        var r = rr(), a = ju(), n = /* @__PURE__ */ Object.create(null);
        t.exports = function(i) {
          return Object.defineProperties(i, {
            for: r(function(u) {
              return n[u] ? n[u] : n[u] = i(String(u));
            }),
            keyFor: r(function(u) {
              var l;
              a(u);
              for (l in n)
                if (n[l] === u)
                  return l;
            })
          });
        };
      }), $p = C(function(e, t) {
        var r = rr(), a = ju(), n = ka().Symbol, i = zp(), u = Vp(), l = Hp(), s = Object.create, c = Object.defineProperties, d = Object.defineProperty, f, p, m;
        if (typeof n == "function")
          try {
            String(n()), m = !0;
          } catch {
          }
        else
          n = null;
        p = /* @__PURE__ */ o(function(v) {
          if (this instanceof p)
            throw new TypeError("Symbol is not a constructor");
          return f(v);
        }, "Symbol2"), t.exports = f = /* @__PURE__ */ o(function h(v) {
          var b;
          if (this instanceof h)
            throw new TypeError("Symbol is not a constructor");
          return m ? n(v) : (b = s(p.prototype), v = v === void 0 ? "" : String(v), c(b, {
            __description__: r("", v),
            __name__: r("", i(v))
          }));
        }, "Symbol2"), u(f), l(f), c(p.prototype, {
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
          return S(h) === "symbol" ? h : h.toString();
        })), d(f.prototype, f.toStringTag, r("c", "Symbol")), d(p.prototype, f.toStringTag, r("c", f.prototype[f.toStringTag])), d(p.prototype, f.toPrimitive, r("c", f.prototype[f.toPrimitive]));
      }), Up = C(function(e, t) {
        t.exports = qp()() ? ka().Symbol : $p();
      }), Gp = C(function(e, t) {
        var r = Object.prototype.toString, a = r.call(function() {
          return arguments;
        }());
        t.exports = function(n) {
          return r.call(n) === a;
        };
      }), Wp = C(function(e, t) {
        var r = Object.prototype.toString, a = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
        t.exports = function(n) {
          return typeof n == "function" && a(r.call(n));
        };
      }), Yp = C(function(e, t) {
        var r = Object.prototype.toString, a = r.call("");
        t.exports = function(n) {
          return typeof n == "string" || n && S(n) === "object" && (n instanceof String || r.call(n) === a) || !1;
        };
      }), Xp = C(function(e, t) {
        var r = Up().iterator, a = Gp(), n = Wp(), i = er(), u = jt(), l = wr(), s = Qt(), c = Yp(), d = Array.isArray, f = Function.prototype.call, p = {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: null
        }, m = Object.defineProperty;
        t.exports = function(h) {
          var v = arguments[1], b = arguments[2], g, y, _, x, T, k, O, B, W, j;
          if (h = Object(l(h)), s(v) && u(v), !this || this === Array || !n(this)) {
            if (!v) {
              if (a(h))
                return T = h.length, T !== 1 ? Array.apply(null, h) : (x = new Array(1), x[0] = h[0], x);
              if (d(h)) {
                for (x = new Array(T = h.length), y = 0; y < T; ++y)
                  x[y] = h[y];
                return x;
              }
            }
            x = [];
          } else
            g = this;
          if (!d(h)) {
            if ((W = h[r]) !== void 0) {
              for (O = u(W).call(h), g && (x = new g()), B = O.next(), y = 0; !B.done; )
                j = v ? f.call(v, b, B.value, y) : B.value, g ? (p.value = j, m(x, y, p)) : x[y] = j, B = O.next(), ++y;
              T = y;
            } else if (c(h)) {
              for (T = h.length, g && (x = new g()), y = 0, _ = 0; y < T; ++y)
                j = h[y], y + 1 < T && (k = j.charCodeAt(0), k >= 55296 && k <= 56319 && (j += h[++y])), j = v ? f.call(v, b, j, _) : j, g ? (p.value = j, m(x, _, p)) : x[_] = j, ++_;
              T = _;
            }
          }
          if (T === void 0)
            for (T = i(h.length), g && (x = new g(T)), y = 0; y < T; ++y)
              j = v ? f.call(v, b, h[y], y) : h[y], g ? (p.value = j, m(x, y, p)) : x[y] = j;
          return g && (p.value = null, x.length = T), x;
        };
      }), ei = C(function(e, t) {
        t.exports = Pp()() ? Array.from : Xp();
      }), Kp = C(function(e, t) {
        var r = ei(), a = Array.isArray;
        t.exports = function(n) {
          return a(n) ? n : r(n);
        };
      }), Zp = C(function(e, t) {
        var r = Kp(), a = Qt(), n = jt(), i = Array.prototype.slice, u;
        u = /* @__PURE__ */ o(function(s) {
          return this.map(function(c, d) {
            return c ? c(s[d]) : s[d];
          }).concat(i.call(s, this.length));
        }, "resolveArgs"), t.exports = function(l) {
          return l = r(l), l.forEach(function(s) {
            a(s) && n(s);
          }), u.bind(l);
        };
      }), Jp = C(function(e, t) {
        var r = jt();
        t.exports = function(a) {
          var n;
          return typeof a == "function" ? {
            set: a,
            get: a
          } : (n = {
            get: r(a.get)
          }, a.set !== void 0 ? (n.set = r(a.set), a.delete && (n.delete = r(a.delete)), a.clear && (n.clear = r(a.clear)), n) : (n.set = n.get, n));
        };
      }), Qp = C(function(e, t) {
        var r = Fp(), a = Bu(), n = rr(), i = Ip().methods, u = Zp(), l = Jp(), s = Function.prototype.apply, c = Function.prototype.call, d = Object.create, f = Object.defineProperties, p = i.on, m = i.emit;
        t.exports = function(h, v, b) {
          var g = d(null), y, _, x, T, k, O, B, W, j, z, $, V, J, re, ee;
          return v !== !1 ? _ = v : isNaN(h.length) ? _ = 1 : _ = h.length, b.normalizer && (z = l(b.normalizer), x = z.get, T = z.set, k = z.delete, O = z.clear), b.resolvers != null && (ee = u(b.resolvers)), x ? re = a(function(Y) {
            var q, ie, E = arguments;
            if (ee && (E = ee(E)), q = x(E), q !== null && hasOwnProperty.call(g, q))
              return $ && y.emit("get", q, E, this), g[q];
            if (E.length === 1 ? ie = c.call(h, this, E[0]) : ie = s.call(h, this, E), q === null) {
              if (q = x(E), q !== null)
                throw r("Circular invocation", "CIRCULAR_INVOCATION");
              q = T(E);
            } else if (hasOwnProperty.call(g, q))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return g[q] = ie, V && y.emit("set", q, null, ie), ie;
          }, _) : v === 0 ? re = /* @__PURE__ */ o(function() {
            var q;
            if (hasOwnProperty.call(g, "data"))
              return $ && y.emit("get", "data", arguments, this), g.data;
            if (arguments.length ? q = s.call(h, this, arguments) : q = c.call(h, this), hasOwnProperty.call(g, "data"))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return g.data = q, V && y.emit("set", "data", null, q), q;
          }, "memoized") : re = /* @__PURE__ */ o(function(q) {
            var ie, E = arguments, G;
            if (ee && (E = ee(arguments)), G = String(E[0]), hasOwnProperty.call(g, G))
              return $ && y.emit("get", G, E, this), g[G];
            if (E.length === 1 ? ie = c.call(h, this, E[0]) : ie = s.call(h, this, E), hasOwnProperty.call(g, G))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return g[G] = ie, V && y.emit("set", G, null, ie), ie;
          }, "memoized"), y = {
            original: h,
            memoized: re,
            profileName: b.profileName,
            get: /* @__PURE__ */ o(function(q) {
              return ee && (q = ee(q)), x ? x(q) : String(q[0]);
            }, "get"),
            has: /* @__PURE__ */ o(function(q) {
              return hasOwnProperty.call(g, q);
            }, "has"),
            delete: /* @__PURE__ */ o(function(q) {
              var ie;
              !hasOwnProperty.call(g, q) || (k && k(q), ie = g[q], delete g[q], J && y.emit("delete", q, ie));
            }, "_delete"),
            clear: /* @__PURE__ */ o(function() {
              var q = g;
              O && O(), g = d(null), y.emit("clear", q);
            }, "clear"),
            on: /* @__PURE__ */ o(function(q, ie) {
              return q === "get" ? $ = !0 : q === "set" ? V = !0 : q === "delete" && (J = !0), p.call(this, q, ie);
            }, "on"),
            emit: m,
            updateEnv: /* @__PURE__ */ o(function() {
              h = y.original;
            }, "updateEnv")
          }, x ? B = a(function(Y) {
            var q, ie = arguments;
            ee && (ie = ee(ie)), q = x(ie), q !== null && y.delete(q);
          }, _) : v === 0 ? B = /* @__PURE__ */ o(function() {
            return y.delete("data");
          }, "extDel") : B = /* @__PURE__ */ o(function(q) {
            return ee && (q = ee(arguments)[0]), y.delete(q);
          }, "extDel"), W = a(function() {
            var Y, q = arguments;
            return v === 0 ? g.data : (ee && (q = ee(q)), x ? Y = x(q) : Y = String(q[0]), g[Y]);
          }), j = a(function() {
            var Y, q = arguments;
            return v === 0 ? y.has("data") : (ee && (q = ee(q)), x ? Y = x(q) : Y = String(q[0]), Y === null ? !1 : y.has(Y));
          }), f(re, {
            __memoized__: n(!0),
            delete: n(B),
            clear: n(y.clear),
            _get: n(W),
            _has: n(j)
          }), y;
        };
      }), em = C(function(e, t) {
        var r = jt(), a = Ra(), n = tr(), i = Qp(), u = Iu();
        t.exports = /* @__PURE__ */ o(function l(s) {
          var c, d, f;
          if (r(s), c = Object(arguments[1]), c.async && c.promise)
            throw new Error("Options 'async' and 'promise' cannot be used together");
          return hasOwnProperty.call(s, "__memoized__") && !c.force ? s : (d = u(c.length, s.length, c.async && n.async), f = i(s, d, c), a(n, function(p, m) {
            c[m] && p(c[m], f, c);
          }), l.__profiler__ && l.__profiler__(f), f.updateEnv(), f.memoized);
        }, "self2");
      }), tm = C(function(e, t) {
        t.exports = function(r) {
          var a, n, i = r.length;
          if (!i)
            return "";
          for (a = String(r[n = 0]); --i; )
            a += "" + r[++n];
          return a;
        };
      }), rm = C(function(e, t) {
        t.exports = function(r) {
          return r ? function(a) {
            for (var n = String(a[0]), i = 0, u = r; --u; )
              n += "" + a[++i];
            return n;
          } : function() {
            return "";
          };
        };
      }), am = C(function(e, t) {
        t.exports = function() {
          var r = Number.isNaN;
          return typeof r != "function" ? !1 : !r({}) && r(NaN) && !r(34);
        };
      }), nm = C(function(e, t) {
        t.exports = function(r) {
          return r !== r;
        };
      }), im = C(function(e, t) {
        t.exports = am()() ? Number.isNaN : nm();
      }), ti = C(function(e, t) {
        var r = im(), a = er(), n = wr(), i = Array.prototype.indexOf, u = Object.prototype.hasOwnProperty, l = Math.abs, s = Math.floor;
        t.exports = function(c) {
          var d, f, p, m;
          if (!r(c))
            return i.apply(this, arguments);
          for (f = a(n(this).length), p = arguments[1], isNaN(p) ? p = 0 : p >= 0 ? p = s(p) : p = a(this.length) - s(l(p)), d = p; d < f; ++d)
            if (u.call(this, d) && (m = this[d], r(m)))
              return d;
          return -1;
        };
      }), om = C(function(e, t) {
        var r = ti(), a = Object.create;
        t.exports = function() {
          var n = 0, i = [], u = a(null);
          return {
            get: /* @__PURE__ */ o(function(s) {
              var c = 0, d = i, f, p = s.length;
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
            set: /* @__PURE__ */ o(function(s) {
              var c = 0, d = i, f, p = s.length;
              if (p === 0)
                d[p] = ++n;
              else {
                for (d[p] || (d[p] = [[], []]), d = d[p]; c < p - 1; )
                  f = r.call(d[0], s[c]), f === -1 && (f = d[0].push(s[c]) - 1, d[1].push([[], []])), d = d[1][f], ++c;
                f = r.call(d[0], s[c]), f === -1 && (f = d[0].push(s[c]) - 1), d[1][f] = ++n;
              }
              return u[n] = s, n;
            }, "set"),
            delete: /* @__PURE__ */ o(function(s) {
              var c = 0, d = i, f, p = u[s], m = p.length, h = [];
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
              delete u[s];
            }, "_delete"),
            clear: /* @__PURE__ */ o(function() {
              i = [], u = a(null);
            }, "clear")
          };
        };
      }), um = C(function(e, t) {
        var r = ti();
        t.exports = function() {
          var a = 0, n = [], i = [];
          return {
            get: /* @__PURE__ */ o(function(l) {
              var s = r.call(n, l[0]);
              return s === -1 ? null : i[s];
            }, "get"),
            set: /* @__PURE__ */ o(function(l) {
              return n.push(l[0]), i.push(++a), a;
            }, "set"),
            delete: /* @__PURE__ */ o(function(l) {
              var s = r.call(i, l);
              s !== -1 && (n.splice(s, 1), i.splice(s, 1));
            }, "_delete"),
            clear: /* @__PURE__ */ o(function() {
              n = [], i = [];
            }, "clear")
          };
        };
      }), lm = C(function(e, t) {
        var r = ti(), a = Object.create;
        t.exports = function(n) {
          var i = 0, u = [[], []], l = a(null);
          return {
            get: /* @__PURE__ */ o(function(c) {
              for (var d = 0, f = u, p; d < n - 1; ) {
                if (p = r.call(f[0], c[d]), p === -1)
                  return null;
                f = f[1][p], ++d;
              }
              return p = r.call(f[0], c[d]), p === -1 ? null : f[1][p] || null;
            }, "get"),
            set: /* @__PURE__ */ o(function(c) {
              for (var d = 0, f = u, p; d < n - 1; )
                p = r.call(f[0], c[d]), p === -1 && (p = f[0].push(c[d]) - 1, f[1].push([[], []])), f = f[1][p], ++d;
              return p = r.call(f[0], c[d]), p === -1 && (p = f[0].push(c[d]) - 1), f[1][p] = ++i, l[i] = c, i;
            }, "set"),
            delete: /* @__PURE__ */ o(function(c) {
              for (var d = 0, f = u, p, m = [], h = l[c]; d < n - 1; ) {
                if (p = r.call(f[0], h[d]), p === -1)
                  return;
                m.push(f, p), f = f[1][p], ++d;
              }
              if (p = r.call(f[0], h[d]), p !== -1) {
                for (c = f[1][p], f[0].splice(p, 1), f[1].splice(p, 1); !f[0].length && m.length; )
                  p = m.pop(), f = m.pop(), f[0].splice(p, 1), f[1].splice(p, 1);
                delete l[c];
              }
            }, "_delete"),
            clear: /* @__PURE__ */ o(function() {
              u = [[], []], l = a(null);
            }, "clear")
          };
        };
      }), zu = C(function(e, t) {
        var r = jt(), a = Ra(), n = Function.prototype.call;
        t.exports = function(i, u) {
          var l = {}, s = arguments[2];
          return r(u), a(i, function(c, d, f, p) {
            l[d] = n.call(u, s, c, d, f, p);
          }), l;
        };
      }), ri = C(function(e, t) {
        var r = /* @__PURE__ */ o(function(i) {
          if (typeof i != "function")
            throw new TypeError(i + " is not a function");
          return i;
        }, "ensureCallable"), a = /* @__PURE__ */ o(function(i) {
          var u = N.createTextNode(""), l, s, c = 0;
          return new i(function() {
            var d;
            if (l)
              s && (l = s.concat(l));
            else {
              if (!s)
                return;
              l = s;
            }
            if (s = l, l = null, typeof s == "function") {
              d = s, s = null, d();
              return;
            }
            for (u.data = c = ++c % 2; s; )
              d = s.shift(), s.length || (s = null), d();
          }).observe(u, {
            characterData: !0
          }), function(d) {
            if (r(d), l) {
              typeof l == "function" ? l = [l, d] : l.push(d);
              return;
            }
            l = d, u.data = c = ++c % 2;
          };
        }, "byObserver");
        t.exports = function() {
          if ((typeof process > "u" ? "undefined" : S(process)) === "object" && process && typeof process.nextTick == "function")
            return process.nextTick;
          if (typeof queueMicrotask == "function")
            return function(n) {
              queueMicrotask(r(n));
            };
          if ((typeof N > "u" ? "undefined" : S(N)) === "object" && N) {
            if (typeof MutationObserver == "function")
              return a(MutationObserver);
            if (typeof WebKitMutationObserver == "function")
              return a(WebKitMutationObserver);
          }
          return typeof setImmediate == "function" ? function(n) {
            setImmediate(r(n));
          } : typeof setTimeout == "function" || (typeof setTimeout > "u" ? "undefined" : S(setTimeout)) === "object" ? function(n) {
            setTimeout(r(n), 0);
          } : null;
        }();
      }), sm = C(function() {
        var e = ei(), t = zu(), r = Lu(), a = Bu(), n = ri(), i = Array.prototype.slice, u = Function.prototype.apply, l = Object.create;
        tr().async = function(s, c) {
          var d = l(null), f = l(null), p = c.memoized, m = c.original, h, v, b;
          c.memoized = a(function(g) {
            var y = arguments, _ = y[y.length - 1];
            return typeof _ == "function" && (h = _, y = i.call(y, 0, -1)), p.apply(v = this, b = y);
          }, p);
          try {
            r(c.memoized, p);
          } catch {
          }
          c.on("get", function(g) {
            var y, _, x;
            if (!!h) {
              if (d[g]) {
                typeof d[g] == "function" ? d[g] = [d[g], h] : d[g].push(h), h = null;
                return;
              }
              y = h, _ = v, x = b, h = v = b = null, n(function() {
                var T;
                hasOwnProperty.call(f, g) ? (T = f[g], c.emit("getasync", g, x, _), u.call(y, T.context, T.args)) : (h = y, v = _, b = x, p.apply(_, x));
              });
            }
          }), c.original = function() {
            var g, y, _, x;
            return h ? (g = e(arguments), y = /* @__PURE__ */ o(function T(k) {
              var O, B, W = T.id;
              if (W == null) {
                n(u.bind(T, this, arguments));
                return;
              }
              if (delete T.id, O = d[W], delete d[W], !!O)
                return B = e(arguments), c.has(W) && (k ? c.delete(W) : (f[W] = {
                  context: this,
                  args: B
                }, c.emit("setasync", W, typeof O == "function" ? 1 : O.length))), typeof O == "function" ? x = u.call(O, this, B) : O.forEach(function(j) {
                  x = u.call(j, this, B);
                }, this), x;
            }, "self2"), _ = h, h = v = b = null, g.push(y), x = u.call(m, this, g), y.cb = _, h = y, x) : u.call(m, this, arguments);
          }, c.on("set", function(g) {
            if (!h) {
              c.delete(g);
              return;
            }
            d[g] ? typeof d[g] == "function" ? d[g] = [d[g], h.cb] : d[g].push(h.cb) : d[g] = h.cb, delete h.cb, h.id = g, h = null;
          }), c.on("delete", function(g) {
            var y;
            hasOwnProperty.call(d, g) || !f[g] || (y = f[g], delete f[g], c.emit("deleteasync", g, i.call(y.args, 1)));
          }), c.on("clear", function() {
            var g = f;
            f = l(null), c.emit("clearasync", t(g, function(y) {
              return i.call(y.args, 1);
            }));
          });
        };
      }), cm = C(function(e, t) {
        var r = Array.prototype.forEach, a = Object.create;
        t.exports = function(n) {
          var i = a(null);
          return r.call(arguments, function(u) {
            i[u] = !0;
          }), i;
        };
      }), Vu = C(function(e, t) {
        t.exports = function(r) {
          return typeof r == "function";
        };
      }), dm = C(function(e, t) {
        var r = Vu();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            throw new TypeError("Passed argument cannot be stringifed");
          }
        };
      }), fm = C(function(e, t) {
        var r = wr(), a = dm();
        t.exports = function(n) {
          return a(r(n));
        };
      }), pm = C(function(e, t) {
        var r = Vu();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            return "<Non-coercible to string value>";
          }
        };
      }), mm = C(function(e, t) {
        var r = pm(), a = /[\n\r\u2028\u2029]/g;
        t.exports = function(n) {
          var i = r(n);
          return i.length > 100 && (i = i.slice(0, 99) + "\u2026"), i = i.replace(a, function(u) {
            return JSON.stringify(u).slice(1, -1);
          }), i;
        };
      }), Hu = C(function(e, t) {
        t.exports = r, t.exports.default = r;
        function r(a) {
          return !!a && (S(a) === "object" || typeof a == "function") && typeof a.then == "function";
        }
        o(r, "isPromise");
      }), hm = C(function() {
        var e = zu(), t = cm(), r = fm(), a = mm(), n = Hu(), i = ri(), u = Object.create, l = t("then", "then:finally", "done", "done:finally");
        tr().promise = function(s, c) {
          var d = u(null), f = u(null), p = u(null);
          if (s === !0)
            s = null;
          else if (s = r(s), !l[s])
            throw new TypeError("'" + a(s) + "' is not valid promise mode");
          c.on("set", function(m, h, v) {
            var b = !1;
            if (!n(v)) {
              f[m] = v, c.emit("setasync", m, 1);
              return;
            }
            d[m] = 1, p[m] = v;
            var g = /* @__PURE__ */ o(function(k) {
              var O = d[m];
              if (b)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              !O || (delete d[m], f[m] = k, c.emit("setasync", m, O));
            }, "onSuccess"), y = /* @__PURE__ */ o(function() {
              b = !0, d[m] && (delete d[m], delete p[m], c.delete(m));
            }, "onFailure"), _ = s;
            if (_ || (_ = "then"), _ === "then") {
              var x = /* @__PURE__ */ o(function() {
                i(y);
              }, "nextTickFailure");
              v = v.then(function(T) {
                i(g.bind(this, T));
              }, x), typeof v.finally == "function" && v.finally(x);
            } else if (_ === "done") {
              if (typeof v.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
              v.done(g, y);
            } else if (_ === "done:finally") {
              if (typeof v.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
              if (typeof v.finally != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
              v.done(g), v.finally(y);
            }
          }), c.on("get", function(m, h, v) {
            var b;
            if (d[m]) {
              ++d[m];
              return;
            }
            b = p[m];
            var g = /* @__PURE__ */ o(function() {
              c.emit("getasync", m, h, v);
            }, "emit");
            n(b) ? typeof b.done == "function" ? b.done(g) : b.then(function() {
              i(g);
            }) : g();
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
            f = u(null), d = u(null), p = u(null), c.emit("clearasync", e(m, function(h) {
              return [h];
            }));
          });
        };
      }), vm = C(function() {
        var e = jt(), t = Ra(), r = tr(), a = Function.prototype.apply;
        r.dispose = function(n, i, u) {
          var l;
          if (e(n), u.async && r.async || u.promise && r.promise) {
            i.on("deleteasync", l = /* @__PURE__ */ o(function(c, d) {
              a.call(n, null, d);
            }, "del")), i.on("clearasync", function(s) {
              t(s, function(c, d) {
                l(d, c);
              });
            });
            return;
          }
          i.on("delete", l = /* @__PURE__ */ o(function(c, d) {
            n(d);
          }, "del")), i.on("clear", function(s) {
            t(s, function(c, d) {
              l(d, c);
            });
          });
        };
      }), gm = C(function(e, t) {
        t.exports = 2147483647;
      }), bm = C(function(e, t) {
        var r = er(), a = gm();
        t.exports = function(n) {
          if (n = r(n), n > a)
            throw new TypeError(n + " exceeds maximum possible timeout");
          return n;
        };
      }), ym = C(function() {
        var e = ei(), t = Ra(), r = ri(), a = Hu(), n = bm(), i = tr(), u = Function.prototype, l = Math.max, s = Math.min, c = Object.create;
        i.maxAge = function(d, f, p) {
          var m, h, v, b;
          d = n(d), d && (m = c(null), h = p.async && i.async || p.promise && i.promise ? "async" : "", f.on("set" + h, function(g) {
            m[g] = setTimeout(function() {
              f.delete(g);
            }, d), typeof m[g].unref == "function" && m[g].unref(), b && (b[g] && b[g] !== "nextTick" && clearTimeout(b[g]), b[g] = setTimeout(function() {
              delete b[g];
            }, v), typeof b[g].unref == "function" && b[g].unref());
          }), f.on("delete" + h, function(g) {
            clearTimeout(m[g]), delete m[g], b && (b[g] !== "nextTick" && clearTimeout(b[g]), delete b[g]);
          }), p.preFetch && (p.preFetch === !0 || isNaN(p.preFetch) ? v = 0.333 : v = l(s(Number(p.preFetch), 1), 0), v && (b = {}, v = (1 - v) * d, f.on("get" + h, function(g, y, _) {
            b[g] || (b[g] = "nextTick", r(function() {
              var x;
              b[g] === "nextTick" && (delete b[g], f.delete(g), p.async && (y = e(y), y.push(u)), x = f.memoized.apply(_, y), p.promise && a(x) && (typeof x.done == "function" ? x.done(u, u) : x.then(u, u)));
            }));
          }))), f.on("clear" + h, function() {
            t(m, function(g) {
              clearTimeout(g);
            }), m = {}, b && (t(b, function(g) {
              g !== "nextTick" && clearTimeout(g);
            }), b = {});
          }));
        };
      }), wm = C(function(e, t) {
        var r = er(), a = Object.create, n = Object.prototype.hasOwnProperty;
        t.exports = function(i) {
          var u = 0, l = 1, s = a(null), c = a(null), d = 0, f;
          return i = r(i), {
            hit: /* @__PURE__ */ o(function(m) {
              var h = c[m], v = ++d;
              if (s[v] = m, c[m] = v, !h)
                return ++u, u <= i ? void 0 : (m = s[l], f(m), m);
              if (delete s[h], l === h)
                for (; !n.call(s, ++l); )
                  ;
            }, "hit"),
            delete: f = /* @__PURE__ */ o(function(m) {
              var h = c[m];
              if (!!h && (delete s[h], delete c[m], --u, l === h)) {
                if (!u) {
                  d = 0, l = 1;
                  return;
                }
                for (; !n.call(s, ++l); )
                  ;
              }
            }, "del"),
            clear: /* @__PURE__ */ o(function() {
              u = 0, l = 1, s = a(null), c = a(null), d = 0;
            }, "clear")
          };
        };
      }), Dm = C(function() {
        var e = er(), t = wm(), r = tr();
        r.max = function(a, n, i) {
          var u, l, s;
          a = e(a), a && (l = t(a), u = i.async && r.async || i.promise && r.promise ? "async" : "", n.on("set" + u, s = /* @__PURE__ */ o(function(d) {
            d = l.hit(d), d !== void 0 && n.delete(d);
          }, "hit")), n.on("get" + u, s), n.on("delete" + u, l.delete), n.on("clear" + u, l.clear));
        };
      }), _m = C(function() {
        var e = rr(), t = tr(), r = Object.create, a = Object.defineProperties;
        t.refCounter = function(n, i, u) {
          var l, s;
          l = r(null), s = u.async && t.async || u.promise && t.promise ? "async" : "", i.on("set" + s, function(c, d) {
            l[c] = d || 1;
          }), i.on("get" + s, function(c) {
            ++l[c];
          }), i.on("delete" + s, function(c) {
            delete l[c];
          }), i.on("clear" + s, function() {
            l = {};
          }), a(i.memoized, {
            deleteRef: e(function() {
              var c = i.get(arguments);
              return c === null || !l[c] ? null : --l[c] ? !1 : (i.delete(c), !0);
            }),
            getRefCount: e(function() {
              var c = i.get(arguments);
              return c === null || !l[c] ? 0 : l[c];
            })
          });
        };
      }), $u = C(function(e, t) {
        var r = Nu(), a = Iu(), n = em();
        t.exports = function(i) {
          var u = r(arguments[1]), l;
          return u.normalizer || (l = u.length = a(u.length, i.length, u.async), l !== 0 && (u.primitive ? l === !1 ? u.normalizer = tm() : l > 1 && (u.normalizer = rm()(l)) : l === !1 ? u.normalizer = om()() : l === 1 ? u.normalizer = um()() : u.normalizer = lm()(l))), u.async && sm(), u.promise && hm(), u.dispose && vm(), u.maxAge && ym(), u.max && Dm(), u.refCounter && _m(), n(i, u);
        };
      }), Uu = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        function t(u) {
          return u >= "a" && u <= "z" || u >= "A" && u <= "Z" || u === "-" || u === "_";
        }
        o(t, "isIdentStart"), e.isIdentStart = t;
        function r(u) {
          return u >= "a" && u <= "z" || u >= "A" && u <= "Z" || u >= "0" && u <= "9" || u === "-" || u === "_";
        }
        o(r, "isIdent"), e.isIdent = r;
        function a(u) {
          return u >= "a" && u <= "f" || u >= "A" && u <= "F" || u >= "0" && u <= "9";
        }
        o(a, "isHex"), e.isHex = a;
        function n(u) {
          for (var l = u.length, s = "", c = 0; c < l; ) {
            var d = u.charAt(c);
            if (e.identSpecialChars[d])
              s += "\\" + d;
            else if (d === "_" || d === "-" || d >= "A" && d <= "Z" || d >= "a" && d <= "z" || c !== 0 && d >= "0" && d <= "9")
              s += d;
            else {
              var f = d.charCodeAt(0);
              if ((f & 63488) === 55296) {
                var p = u.charCodeAt(c++);
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
        o(n, "escapeIdentifier"), e.escapeIdentifier = n;
        function i(u) {
          for (var l = u.length, s = "", c = 0, d; c < l; ) {
            var f = u.charAt(c);
            f === '"' ? f = '\\"' : f === "\\" ? f = "\\\\" : (d = e.strReplacementsRev[f]) !== void 0 && (f = d), s += f, c++;
          }
          return '"' + s + '"';
        }
        o(i, "escapeStr"), e.escapeStr = i, e.identSpecialChars = {
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
      }), xm = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Uu();
        function r(a, n, i, u, l, s) {
          var c = a.length, d = "";
          function f(y, _) {
            var x = "";
            for (n++, d = a.charAt(n); n < c; ) {
              if (d === y)
                return n++, x;
              if (d === "\\") {
                n++, d = a.charAt(n);
                var T = void 0;
                if (d === y)
                  x += y;
                else if ((T = _[d]) !== void 0)
                  x += T;
                else if (t.isHex(d)) {
                  var k = d;
                  for (n++, d = a.charAt(n); t.isHex(d); )
                    k += d, n++, d = a.charAt(n);
                  d === " " && (n++, d = a.charAt(n)), x += String.fromCharCode(parseInt(k, 16));
                  continue;
                } else
                  x += d;
              } else
                x += d;
              n++, d = a.charAt(n);
            }
            return x;
          }
          o(f, "getStr");
          function p() {
            var y = "";
            for (d = a.charAt(n); n < c; ) {
              if (t.isIdent(d))
                y += d;
              else if (d === "\\") {
                if (n++, n >= c)
                  throw Error("Expected symbol but end of file reached.");
                if (d = a.charAt(n), t.identSpecialChars[d])
                  y += d;
                else if (t.isHex(d)) {
                  var _ = d;
                  for (n++, d = a.charAt(n); t.isHex(d); )
                    _ += d, n++, d = a.charAt(n);
                  d === " " && (n++, d = a.charAt(n)), y += String.fromCharCode(parseInt(_, 16));
                  continue;
                } else
                  y += d;
              } else
                return y;
              n++, d = a.charAt(n);
            }
            return y;
          }
          o(p, "getIdent");
          function m() {
            d = a.charAt(n);
            for (var y = !1; d === " " || d === "	" || d === `
` || d === "\r" || d === "\f"; )
              y = !0, n++, d = a.charAt(n);
            return y;
          }
          o(m, "skipWhitespace");
          function h() {
            var y = v();
            if (n < c)
              throw Error('Rule expected but "' + a.charAt(n) + '" found.');
            return y;
          }
          o(h, "parse3");
          function v() {
            var y = b();
            if (!y)
              return null;
            var _ = y;
            for (d = a.charAt(n); d === ","; ) {
              if (n++, m(), _.type !== "selectors" && (_ = {
                type: "selectors",
                selectors: [y]
              }), y = b(), !y)
                throw Error('Rule expected after ",".');
              _.selectors.push(y);
            }
            return _;
          }
          o(v, "parseSelector");
          function b() {
            m();
            var y = {
              type: "ruleSet"
            }, _ = g();
            if (!_)
              return null;
            for (var x = y; _ && (_.type = "rule", x.rule = _, x = _, m(), d = a.charAt(n), !(n >= c || d === "," || d === ")")); )
              if (l[d]) {
                var T = d;
                if (n++, m(), _ = g(), !_)
                  throw Error('Rule expected after "' + T + '".');
                _.nestingOperator = T;
              } else
                _ = g(), _ && (_.nestingOperator = null);
            return y;
          }
          o(b, "parseSingleSelector");
          function g() {
            for (var y = null; n < c; )
              if (d = a.charAt(n), d === "*")
                n++, (y = y || {}).tagName = "*";
              else if (t.isIdentStart(d) || d === "\\")
                (y = y || {}).tagName = p();
              else if (d === ".")
                n++, y = y || {}, (y.classNames = y.classNames || []).push(p());
              else if (d === "#")
                n++, (y = y || {}).id = p();
              else if (d === "[") {
                n++, m();
                var _ = {
                  name: p()
                };
                if (m(), d === "]")
                  n++;
                else {
                  var x = "";
                  if (u[d] && (x = d, n++, d = a.charAt(n)), n >= c)
                    throw Error('Expected "=" but end of file reached.');
                  if (d !== "=")
                    throw Error('Expected "=" but "' + d + '" found.');
                  _.operator = x + "=", n++, m();
                  var T = "";
                  if (_.valueType = "string", d === '"')
                    T = f('"', t.doubleQuotesEscapeChars);
                  else if (d === "'")
                    T = f("'", t.singleQuoteEscapeChars);
                  else if (s && d === "$")
                    n++, T = p(), _.valueType = "substitute";
                  else {
                    for (; n < c && d !== "]"; )
                      T += d, n++, d = a.charAt(n);
                    T = T.trim();
                  }
                  if (m(), n >= c)
                    throw Error('Expected "]" but end of file reached.');
                  if (d !== "]")
                    throw Error('Expected "]" but "' + d + '" found.');
                  n++, _.value = T;
                }
                y = y || {}, (y.attrs = y.attrs || []).push(_);
              } else if (d === ":") {
                n++;
                var k = p(), O = {
                  name: k
                };
                if (d === "(") {
                  n++;
                  var B = "";
                  if (m(), i[k] === "selector")
                    O.valueType = "selector", B = v();
                  else {
                    if (O.valueType = i[k] || "string", d === '"')
                      B = f('"', t.doubleQuotesEscapeChars);
                    else if (d === "'")
                      B = f("'", t.singleQuoteEscapeChars);
                    else if (s && d === "$")
                      n++, B = p(), O.valueType = "substitute";
                    else {
                      for (; n < c && d !== ")"; )
                        B += d, n++, d = a.charAt(n);
                      B = B.trim();
                    }
                    m();
                  }
                  if (n >= c)
                    throw Error('Expected ")" but end of file reached.');
                  if (d !== ")")
                    throw Error('Expected ")" but "' + d + '" found.');
                  n++, O.value = B;
                }
                y = y || {}, (y.pseudos = y.pseudos || []).push(O);
              } else
                break;
            return y;
          }
          return o(g, "parseRule"), h();
        }
        o(r, "parseCssSelector"), e.parseCssSelector = r;
      }), Em = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Uu();
        function r(a) {
          var n = "";
          switch (a.type) {
            case "ruleSet":
              for (var i = a.rule, u = []; i; )
                i.nestingOperator && u.push(i.nestingOperator), u.push(r(i)), i = i.rule;
              n = u.join(" ");
              break;
            case "selectors":
              n = a.selectors.map(r).join(", ");
              break;
            case "rule":
              a.tagName && (a.tagName === "*" ? n = "*" : n = t.escapeIdentifier(a.tagName)), a.id && (n += "#" + t.escapeIdentifier(a.id)), a.classNames && (n += a.classNames.map(function(l) {
                return "." + t.escapeIdentifier(l);
              }).join("")), a.attrs && (n += a.attrs.map(function(l) {
                return "operator" in l ? l.valueType === "substitute" ? "[" + t.escapeIdentifier(l.name) + l.operator + "$" + l.value + "]" : "[" + t.escapeIdentifier(l.name) + l.operator + t.escapeStr(l.value) + "]" : "[" + t.escapeIdentifier(l.name) + "]";
              }).join("")), a.pseudos && (n += a.pseudos.map(function(l) {
                return l.valueType ? l.valueType === "selector" ? ":" + t.escapeIdentifier(l.name) + "(" + r(l.value) + ")" : l.valueType === "substitute" ? ":" + t.escapeIdentifier(l.name) + "($" + l.value + ")" : l.valueType === "numeric" ? ":" + t.escapeIdentifier(l.name) + "(" + l.value + ")" : ":" + t.escapeIdentifier(l.name) + "(" + t.escapeIdentifier(l.value) + ")" : ":" + t.escapeIdentifier(l.name);
              }).join(""));
              break;
            default:
              throw Error('Unknown entity type: "' + a.type + '".');
          }
          return n;
        }
        o(r, "renderEntity"), e.renderEntity = r;
      }), Gu = C(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = xm(), r = Em(), a = function() {
          function n() {
            this.pseudos = {}, this.attrEqualityMods = {}, this.ruleNestingOperators = {}, this.substitutesEnabled = !1;
          }
          return o(n, "CssSelectorParser4"), n.prototype.registerSelectorPseudos = function() {
            for (var i = [], u = 0; u < arguments.length; u++)
              i[u] = arguments[u];
            for (var l = 0, s = i; l < s.length; l++) {
              var c = s[l];
              this.pseudos[c] = "selector";
            }
            return this;
          }, n.prototype.unregisterSelectorPseudos = function() {
            for (var i = [], u = 0; u < arguments.length; u++)
              i[u] = arguments[u];
            for (var l = 0, s = i; l < s.length; l++) {
              var c = s[l];
              delete this.pseudos[c];
            }
            return this;
          }, n.prototype.registerNumericPseudos = function() {
            for (var i = [], u = 0; u < arguments.length; u++)
              i[u] = arguments[u];
            for (var l = 0, s = i; l < s.length; l++) {
              var c = s[l];
              this.pseudos[c] = "numeric";
            }
            return this;
          }, n.prototype.unregisterNumericPseudos = function() {
            for (var i = [], u = 0; u < arguments.length; u++)
              i[u] = arguments[u];
            for (var l = 0, s = i; l < s.length; l++) {
              var c = s[l];
              delete this.pseudos[c];
            }
            return this;
          }, n.prototype.registerNestingOperators = function() {
            for (var i = [], u = 0; u < arguments.length; u++)
              i[u] = arguments[u];
            for (var l = 0, s = i; l < s.length; l++) {
              var c = s[l];
              this.ruleNestingOperators[c] = !0;
            }
            return this;
          }, n.prototype.unregisterNestingOperators = function() {
            for (var i = [], u = 0; u < arguments.length; u++)
              i[u] = arguments[u];
            for (var l = 0, s = i; l < s.length; l++) {
              var c = s[l];
              delete this.ruleNestingOperators[c];
            }
            return this;
          }, n.prototype.registerAttrEqualityMods = function() {
            for (var i = [], u = 0; u < arguments.length; u++)
              i[u] = arguments[u];
            for (var l = 0, s = i; l < s.length; l++) {
              var c = s[l];
              this.attrEqualityMods[c] = !0;
            }
            return this;
          }, n.prototype.unregisterAttrEqualityMods = function() {
            for (var i = [], u = 0; u < arguments.length; u++)
              i[u] = arguments[u];
            for (var l = 0, s = i; l < s.length; l++) {
              var c = s[l];
              delete this.attrEqualityMods[c];
            }
            return this;
          }, n.prototype.enableSubstitutes = function() {
            return this.substitutesEnabled = !0, this;
          }, n.prototype.disableSubstitutes = function() {
            return this.substitutesEnabled = !1, this;
          }, n.prototype.parse = function(i) {
            return t.parseCssSelector(i, 0, this.pseudos, this.attrEqualityMods, this.ruleNestingOperators, this.substitutesEnabled);
          }, n.prototype.render = function(i) {
            return r.renderEntity(i).trim();
          }, n;
        }();
        e.CssSelectorParser = a;
      }), Wu = C(function(e, t) {
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
            if ((typeof globalThis > "u" ? "undefined" : S(globalThis)) !== "object")
              try {
                Object.defineProperty(Object.prototype, "__magic__", {
                  get: /* @__PURE__ */ o(function() {
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
          })(), r.encodeHTMLSource = function(l) {
            var s = {
              "&": "&#38;",
              "<": "&#60;",
              ">": "&#62;",
              '"': "&#34;",
              "'": "&#39;",
              "/": "&#47;"
            }, c = l ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
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
          function i(l, s, c) {
            return (typeof s == "string" ? s : s.toString()).replace(l.define || n, function(d, f, p, m) {
              return f.indexOf("def.") === 0 && (f = f.substring(4)), f in c || (p === ":" ? (l.defineParams && m.replace(l.defineParams, function(h, v, b) {
                c[f] = {
                  arg: v,
                  text: b
                };
              }), f in c || (c[f] = m)) : new Function("def", "def['" + f + "']=" + m)(c)), "";
            }).replace(l.use || n, function(d, f) {
              l.useParams && (f = f.replace(l.useParams, function(m, h, v, b) {
                if (c[v] && c[v].arg && b) {
                  var g = (v + ":" + b).replace(/'|\\/g, "_");
                  return c.__exp = c.__exp || {}, c.__exp[g] = c[v].text.replace(new RegExp("(^|[^\\w$])" + c[v].arg + "([^\\w$])", "g"), "$1" + b + "$2"), h + "def.__exp['" + g + "']";
                }
              }));
              var p = new Function("def", "return " + f)(c);
              return p && i(l, p, c);
            });
          }
          o(i, "resolveDefs");
          function u(l) {
            return l.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
          }
          o(u, "unescape"), r.template = function(l, s, c) {
            s = s || r.templateSettings;
            var d = s.append ? a.append : a.split, f, p = 0, m, h = s.use || s.define ? i(s, l, c || {}) : l;
            h = ("var out='" + (s.strip ? h.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : h).replace(/'|\\/g, "\\$&").replace(s.interpolate || n, function(v, b) {
              return d.start + u(b) + d.end;
            }).replace(s.encode || n, function(v, b) {
              return f = !0, d.startencode + u(b) + d.end;
            }).replace(s.conditional || n, function(v, b, g) {
              return b ? g ? "';}else if(" + u(g) + "){out+='" : "';}else{out+='" : g ? "';if(" + u(g) + "){out+='" : "';}out+='";
            }).replace(s.iterate || n, function(v, b, g, y) {
              return b ? (p += 1, m = y || "i" + p, b = u(b), "';var arr" + p + "=" + b + ";if(arr" + p + "){var " + g + "," + m + "=-1,l" + p + "=arr" + p + ".length-1;while(" + m + "<l" + p + "){" + g + "=arr" + p + "[" + m + "+=1];out+='") : "';} } out+='";
            }).replace(s.evaluate || n, function(v, b) {
              return "';" + u(b) + "out+='";
            }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), f && (!s.selfcontained && globalThis && !globalThis._encodeHTML && (globalThis._encodeHTML = r.encodeHTMLSource(s.doNotSkipEncoded)), h = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + r.encodeHTMLSource.toString() + "(" + (s.doNotSkipEncoded || "") + "));" + h);
            try {
              return new Function(s.varname, h);
            } catch (v) {
              throw typeof console < "u" && console.log("Could not create a template function: " + h), v;
            }
          }, r.compile = function(l, s) {
            return r.template(l, null, s);
          };
        })();
      }), Cm = C(function(e, t) {
        (function(r, a) {
          S(e) === "object" && typeof t < "u" ? t.exports = a() : r.ES6Promise = a();
        })(e, function() {
          function r(F) {
            var M = S(F);
            return F !== null && (M === "object" || M === "function");
          }
          o(r, "objectOrFunction");
          function a(F) {
            return typeof F == "function";
          }
          o(a, "isFunction");
          var n = void 0;
          Array.isArray ? n = Array.isArray : n = /* @__PURE__ */ o(function(M) {
            return Object.prototype.toString.call(M) === "[object Array]";
          }, "_isArray");
          var i = n, u = 0, l = void 0, s = void 0, c = /* @__PURE__ */ o(function(M, L) {
            k[u] = M, k[u + 1] = L, u += 2, u === 2 && (s ? s(O) : W());
          }, "asap2");
          function d(F) {
            s = F;
          }
          o(d, "setScheduler");
          function f(F) {
            c = F;
          }
          o(f, "setAsap");
          var p = typeof D < "u" ? D : void 0, m = p || {}, h = m.MutationObserver || m.WebKitMutationObserver, v = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", b = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
          function g() {
            return function() {
              return process.nextTick(O);
            };
          }
          o(g, "useNextTick");
          function y() {
            return typeof l < "u" ? function() {
              l(O);
            } : T();
          }
          o(y, "useVertxTimer");
          function _() {
            var F = 0, M = new h(O), L = N.createTextNode("");
            return M.observe(L, {
              characterData: !0
            }), function() {
              L.data = F = ++F % 2;
            };
          }
          o(_, "useMutationObserver");
          function x() {
            var F = new MessageChannel();
            return F.port1.onmessage = O, function() {
              return F.port2.postMessage(0);
            };
          }
          o(x, "useMessageChannel");
          function T() {
            var F = setTimeout;
            return function() {
              return F(O, 1);
            };
          }
          o(T, "useSetTimeout");
          var k = new Array(1e3);
          function O() {
            for (var F = 0; F < u; F += 2) {
              var M = k[F], L = k[F + 1];
              M(L), k[F] = void 0, k[F + 1] = void 0;
            }
            u = 0;
          }
          o(O, "flush");
          function B() {
            try {
              var F = Function("return this")().require("vertx");
              return l = F.runOnLoop || F.runOnContext, y();
            } catch {
              return T();
            }
          }
          o(B, "attemptVertx");
          var W = void 0;
          v ? W = g() : h ? W = _() : b ? W = x() : p === void 0 ? W = B() : W = T();
          function j(F, M) {
            var L = this, X = new this.constructor(V);
            X[$] === void 0 && Ce(X);
            var ue = L._state;
            if (ue) {
              var fe = arguments[ue - 1];
              c(function() {
                return xe(ue, X, fe, L._result);
              });
            } else
              ge(L, X, F, M);
            return X;
          }
          o(j, "then");
          function z(F) {
            var M = this;
            if (F && S(F) === "object" && F.constructor === M)
              return F;
            var L = new M(V);
            return Q(L, F), L;
          }
          o(z, "resolve$1");
          var $ = Math.random().toString(36).substring(2);
          function V() {
          }
          o(V, "noop3");
          var J = void 0, re = 1, ee = 2;
          function Y() {
            return new TypeError("You cannot resolve a promise with itself");
          }
          o(Y, "selfFulfillment");
          function q() {
            return new TypeError("A promises callback cannot return that same promise.");
          }
          o(q, "cannotReturnOwn");
          function ie(F, M, L, X) {
            try {
              F.call(M, L, X);
            } catch (ue) {
              return ue;
            }
          }
          o(ie, "tryThen");
          function E(F, M, L) {
            c(function(X) {
              var ue = !1, fe = ie(L, M, function(Ve) {
                ue || (ue = !0, M !== Ve ? Q(X, Ve) : U(X, Ve));
              }, function(Ve) {
                ue || (ue = !0, K(X, Ve));
              }, "Settle: " + (X._label || " unknown promise"));
              !ue && fe && (ue = !0, K(X, fe));
            }, F);
          }
          o(E, "handleForeignThenable");
          function G(F, M) {
            M._state === re ? U(F, M._result) : M._state === ee ? K(F, M._result) : ge(M, void 0, function(L) {
              return Q(F, L);
            }, function(L) {
              return K(F, L);
            });
          }
          o(G, "handleOwnThenable");
          function P(F, M, L) {
            M.constructor === F.constructor && L === j && M.constructor.resolve === z ? G(F, M) : L === void 0 ? U(F, M) : a(L) ? E(F, M, L) : U(F, M);
          }
          o(P, "handleMaybeThenable");
          function Q(F, M) {
            if (F === M)
              K(F, Y());
            else if (r(M)) {
              var L = void 0;
              try {
                L = M.then;
              } catch (X) {
                K(F, X);
                return;
              }
              P(F, M, L);
            } else
              U(F, M);
          }
          o(Q, "resolve");
          function oe(F) {
            F._onerror && F._onerror(F._result), we(F);
          }
          o(oe, "publishRejection");
          function U(F, M) {
            F._state === J && (F._result = M, F._state = re, F._subscribers.length !== 0 && c(we, F));
          }
          o(U, "fulfill");
          function K(F, M) {
            F._state === J && (F._state = ee, F._result = M, c(oe, F));
          }
          o(K, "reject");
          function ge(F, M, L, X) {
            var ue = F._subscribers, fe = ue.length;
            F._onerror = null, ue[fe] = M, ue[fe + re] = L, ue[fe + ee] = X, fe === 0 && F._state && c(we, F);
          }
          o(ge, "subscribe2");
          function we(F) {
            var M = F._subscribers, L = F._state;
            if (M.length !== 0) {
              for (var X = void 0, ue = void 0, fe = F._result, Ve = 0; Ve < M.length; Ve += 3)
                X = M[Ve], ue = M[Ve + L], X ? xe(L, X, ue, fe) : ue(fe);
              F._subscribers.length = 0;
            }
          }
          o(we, "publish");
          function xe(F, M, L, X) {
            var ue = a(L), fe = void 0, Ve = void 0, zr = !0;
            if (ue) {
              try {
                fe = L(X);
              } catch (Yn) {
                zr = !1, Ve = Yn;
              }
              if (M === fe) {
                K(M, q());
                return;
              }
            } else
              fe = X;
            M._state !== J || (ue && zr ? Q(M, fe) : zr === !1 ? K(M, Ve) : F === re ? U(M, fe) : F === ee && K(M, fe));
          }
          o(xe, "invokeCallback");
          function Me(F, M) {
            try {
              M(/* @__PURE__ */ o(function(X) {
                Q(F, X);
              }, "resolvePromise"), /* @__PURE__ */ o(function(X) {
                K(F, X);
              }, "rejectPromise"));
            } catch (L) {
              K(F, L);
            }
          }
          o(Me, "initializePromise");
          var je = 0;
          function Pe() {
            return je++;
          }
          o(Pe, "nextId");
          function Ce(F) {
            F[$] = je++, F._state = void 0, F._result = void 0, F._subscribers = [];
          }
          o(Ce, "makePromise");
          function jr() {
            return new Error("Array Methods must be provided an Array");
          }
          o(jr, "validationError");
          var We = function() {
            function F(M, L) {
              this._instanceConstructor = M, this.promise = new M(V), this.promise[$] || Ce(this.promise), i(L) ? (this.length = L.length, this._remaining = L.length, this._result = new Array(this.length), this.length === 0 ? U(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(L), this._remaining === 0 && U(this.promise, this._result))) : K(this.promise, jr());
            }
            return o(F, "Enumerator2"), F.prototype._enumerate = /* @__PURE__ */ o(function(L) {
              for (var X = 0; this._state === J && X < L.length; X++)
                this._eachEntry(L[X], X);
            }, "_enumerate"), F.prototype._eachEntry = /* @__PURE__ */ o(function(L, X) {
              var ue = this._instanceConstructor, fe = ue.resolve;
              if (fe === z) {
                var Ve = void 0, zr = void 0, Yn = !1;
                try {
                  Ve = L.then;
                } catch (yu) {
                  Yn = !0, zr = yu;
                }
                if (Ve === j && L._state !== J)
                  this._settledAt(L._state, X, L._result);
                else if (typeof Ve != "function")
                  this._remaining--, this._result[X] = L;
                else if (ue === Re) {
                  var bu = new ue(V);
                  Yn ? K(bu, zr) : P(bu, L, Ve), this._willSettleAt(bu, X);
                } else
                  this._willSettleAt(new ue(function(yu) {
                    return yu(L);
                  }), X);
              } else
                this._willSettleAt(fe(L), X);
            }, "_eachEntry"), F.prototype._settledAt = /* @__PURE__ */ o(function(L, X, ue) {
              var fe = this.promise;
              fe._state === J && (this._remaining--, L === ee ? K(fe, ue) : this._result[X] = ue), this._remaining === 0 && U(fe, this._result);
            }, "_settledAt"), F.prototype._willSettleAt = /* @__PURE__ */ o(function(L, X) {
              var ue = this;
              ge(L, void 0, function(fe) {
                return ue._settledAt(re, X, fe);
              }, function(fe) {
                return ue._settledAt(ee, X, fe);
              });
            }, "_willSettleAt"), F;
          }();
          function Ae(F) {
            return new We(this, F).promise;
          }
          o(Ae, "all");
          function ze(F) {
            var M = this;
            return i(F) ? new M(function(L, X) {
              for (var ue = F.length, fe = 0; fe < ue; fe++)
                M.resolve(F[fe]).then(L, X);
            }) : new M(function(L, X) {
              return X(new TypeError("You must pass an array to race."));
            });
          }
          o(ze, "race");
          function Ne(F) {
            var M = this, L = new M(V);
            return K(L, F), L;
          }
          o(Ne, "reject$1");
          function Ze() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }
          o(Ze, "needsResolver");
          function Je() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }
          o(Je, "needsNew");
          var Re = function() {
            function F(M) {
              this[$] = Pe(), this._result = this._state = void 0, this._subscribers = [], V !== M && (typeof M != "function" && Ze(), this instanceof F ? Me(this, M) : Je());
            }
            return o(F, "Promise2"), F.prototype.catch = /* @__PURE__ */ o(function(L) {
              return this.then(null, L);
            }, "_catch"), F.prototype.finally = /* @__PURE__ */ o(function(L) {
              var X = this, ue = X.constructor;
              return a(L) ? X.then(function(fe) {
                return ue.resolve(L()).then(function() {
                  return fe;
                });
              }, function(fe) {
                return ue.resolve(L()).then(function() {
                  throw fe;
                });
              }) : X.then(L, L);
            }, "_finally"), F;
          }();
          Re.prototype.then = j, Re.all = Ae, Re.race = ze, Re.resolve = z, Re.reject = Ne, Re._setScheduler = d, Re._setAsap = f, Re._asap = c;
          function De() {
            var F = void 0;
            if (typeof Qe < "u")
              F = Qe;
            else if (typeof self < "u")
              F = self;
            else
              try {
                F = Function("return this")();
              } catch {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
            var M = F.Promise;
            if (M) {
              var L = null;
              try {
                L = Object.prototype.toString.call(M.resolve());
              } catch {
              }
              if (L === "[object Promise]" && !M.cast)
                return;
            }
            F.Promise = Re;
          }
          return o(De, "polyfill"), Re.polyfill = De, Re.Promise = Re, Re;
        });
      }), Am = C(function(e) {
        var t = 1e5, r = function() {
          var E = Object.prototype.toString, G = Object.prototype.hasOwnProperty;
          return {
            Class: /* @__PURE__ */ o(function(Q) {
              return E.call(Q).replace(/^\[object *|\]$/g, "");
            }, "Class"),
            HasProperty: /* @__PURE__ */ o(function(Q, oe) {
              return oe in Q;
            }, "HasProperty"),
            HasOwnProperty: /* @__PURE__ */ o(function(Q, oe) {
              return G.call(Q, oe);
            }, "HasOwnProperty"),
            IsCallable: /* @__PURE__ */ o(function(Q) {
              return typeof Q == "function";
            }, "IsCallable"),
            ToInt32: /* @__PURE__ */ o(function(Q) {
              return Q >> 0;
            }, "ToInt32"),
            ToUint32: /* @__PURE__ */ o(function(Q) {
              return Q >>> 0;
            }, "ToUint32")
          };
        }(), a = Math.LN2, n = Math.abs, i = Math.floor, u = Math.log, l = Math.min, s = Math.pow, c = Math.round;
        function d(E, G, P) {
          return E < G ? G : E > P ? P : E;
        }
        o(d, "clamp3");
        var f = Object.getOwnPropertyNames || function(E) {
          if (E !== Object(E))
            throw new TypeError("Object.getOwnPropertyNames called on non-object");
          var G = [], P;
          for (P in E)
            r.HasOwnProperty(E, P) && G.push(P);
          return G;
        }, p;
        Object.defineProperty && function() {
          try {
            return Object.defineProperty({}, "x", {}), !0;
          } catch {
            return !1;
          }
        }() ? p = Object.defineProperty : p = /* @__PURE__ */ o(function(G, P, Q) {
          if (!G === Object(G))
            throw new TypeError("Object.defineProperty called on non-object");
          return r.HasProperty(Q, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(G, P, Q.get), r.HasProperty(Q, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(G, P, Q.set), r.HasProperty(Q, "value") && (G[P] = Q.value), G;
        }, "defineProp");
        function m(E) {
          if (f && p) {
            var G = f(E), P;
            for (P = 0; P < G.length; P += 1)
              p(E, G[P], {
                value: E[G[P]],
                writable: !1,
                enumerable: !1,
                configurable: !1
              });
          }
        }
        o(m, "configureProperties");
        function h(E) {
          if (!p)
            return;
          if (E.length > t)
            throw new RangeError("Array too large for polyfill");
          function G(Q) {
            p(E, Q, {
              get: /* @__PURE__ */ o(function() {
                return E._getter(Q);
              }, "get"),
              set: /* @__PURE__ */ o(function(U) {
                E._setter(Q, U);
              }, "set"),
              enumerable: !0,
              configurable: !1
            });
          }
          o(G, "makeArrayAccessor");
          var P;
          for (P = 0; P < E.length; P += 1)
            G(P);
        }
        o(h, "makeArrayAccessors");
        function v(E, G) {
          var P = 32 - G;
          return E << P >> P;
        }
        o(v, "as_signed");
        function b(E, G) {
          var P = 32 - G;
          return E << P >>> P;
        }
        o(b, "as_unsigned");
        function g(E) {
          return [E & 255];
        }
        o(g, "packI8");
        function y(E) {
          return v(E[0], 8);
        }
        o(y, "unpackI8");
        function _(E) {
          return [E & 255];
        }
        o(_, "packU8");
        function x(E) {
          return b(E[0], 8);
        }
        o(x, "unpackU8");
        function T(E) {
          return E = c(Number(E)), [E < 0 ? 0 : E > 255 ? 255 : E & 255];
        }
        o(T, "packU8Clamped");
        function k(E) {
          return [E >> 8 & 255, E & 255];
        }
        o(k, "packI16");
        function O(E) {
          return v(E[0] << 8 | E[1], 16);
        }
        o(O, "unpackI16");
        function B(E) {
          return [E >> 8 & 255, E & 255];
        }
        o(B, "packU16");
        function W(E) {
          return b(E[0] << 8 | E[1], 16);
        }
        o(W, "unpackU16");
        function j(E) {
          return [E >> 24 & 255, E >> 16 & 255, E >> 8 & 255, E & 255];
        }
        o(j, "packI32");
        function z(E) {
          return v(E[0] << 24 | E[1] << 16 | E[2] << 8 | E[3], 32);
        }
        o(z, "unpackI32");
        function $(E) {
          return [E >> 24 & 255, E >> 16 & 255, E >> 8 & 255, E & 255];
        }
        o($, "packU32");
        function V(E) {
          return b(E[0] << 24 | E[1] << 16 | E[2] << 8 | E[3], 32);
        }
        o(V, "unpackU32");
        function J(E, G, P) {
          var Q = (1 << G - 1) - 1, oe, U, K, ge, we, xe, Me;
          function je(Pe) {
            var Ce = i(Pe), jr = Pe - Ce;
            return jr < 0.5 ? Ce : jr > 0.5 || Ce % 2 ? Ce + 1 : Ce;
          }
          for (o(je, "roundToEven"), E !== E ? (U = (1 << G) - 1, K = s(2, P - 1), oe = 0) : E === 1 / 0 || E === -1 / 0 ? (U = (1 << G) - 1, K = 0, oe = E < 0 ? 1 : 0) : E === 0 ? (U = 0, K = 0, oe = 1 / E === -1 / 0 ? 1 : 0) : (oe = E < 0, E = n(E), E >= s(2, 1 - Q) ? (U = l(i(u(E) / a), 1023), K = je(E / s(2, U) * s(2, P)), K / s(2, P) >= 2 && (U = U + 1, K = 1), U > Q ? (U = (1 << G) - 1, K = 0) : (U = U + Q, K = K - s(2, P))) : (U = 0, K = je(E / s(2, 1 - Q - P)))), we = [], ge = P; ge; ge -= 1)
            we.push(K % 2 ? 1 : 0), K = i(K / 2);
          for (ge = G; ge; ge -= 1)
            we.push(U % 2 ? 1 : 0), U = i(U / 2);
          for (we.push(oe ? 1 : 0), we.reverse(), xe = we.join(""), Me = []; xe.length; )
            Me.push(parseInt(xe.substring(0, 8), 2)), xe = xe.substring(8);
          return Me;
        }
        o(J, "packIEEE754");
        function re(E, G, P) {
          var Q = [], oe, U, K, ge, we, xe, Me, je;
          for (oe = E.length; oe; oe -= 1)
            for (K = E[oe - 1], U = 8; U; U -= 1)
              Q.push(K % 2 ? 1 : 0), K = K >> 1;
          return Q.reverse(), ge = Q.join(""), we = (1 << G - 1) - 1, xe = parseInt(ge.substring(0, 1), 2) ? -1 : 1, Me = parseInt(ge.substring(1, 1 + G), 2), je = parseInt(ge.substring(1 + G), 2), Me === (1 << G) - 1 ? je === 0 ? xe * (1 / 0) : NaN : Me > 0 ? xe * s(2, Me - we) * (1 + je / s(2, P)) : je !== 0 ? xe * s(2, -(we - 1)) * (je / s(2, P)) : xe < 0 ? -0 : 0;
        }
        o(re, "unpackIEEE754");
        function ee(E) {
          return re(E, 11, 52);
        }
        o(ee, "unpackF64");
        function Y(E) {
          return J(E, 11, 52);
        }
        o(Y, "packF64");
        function q(E) {
          return re(E, 8, 23);
        }
        o(q, "unpackF32");
        function ie(E) {
          return J(E, 8, 23);
        }
        o(ie, "packF32"), function() {
          function E(Pe) {
            if (Pe = r.ToInt32(Pe), Pe < 0)
              throw new RangeError("ArrayBuffer size is not a small enough positive integer");
            this.byteLength = Pe, this._bytes = [], this._bytes.length = Pe;
            var Ce;
            for (Ce = 0; Ce < this.byteLength; Ce += 1)
              this._bytes[Ce] = 0;
            m(this);
          }
          o(E, "ArrayBuffer"), e.ArrayBuffer = e.ArrayBuffer || E;
          function G() {
          }
          o(G, "ArrayBufferView");
          function P(Pe, Ce, jr) {
            var We;
            return We = /* @__PURE__ */ o(function(ze, Ne, Ze) {
              var Je, Re, De, F;
              if (!arguments.length || typeof arguments[0] == "number") {
                if (this.length = r.ToInt32(arguments[0]), Ze < 0)
                  throw new RangeError("ArrayBufferView size is not a small enough positive integer");
                this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new E(this.byteLength), this.byteOffset = 0;
              } else if (S(arguments[0]) === "object" && arguments[0].constructor === We)
                for (Je = arguments[0], this.length = Je.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new E(this.byteLength), this.byteOffset = 0, De = 0; De < this.length; De += 1)
                  this._setter(De, Je._getter(De));
              else if (S(arguments[0]) === "object" && !(arguments[0] instanceof E || r.Class(arguments[0]) === "ArrayBuffer"))
                for (Re = arguments[0], this.length = r.ToUint32(Re.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new E(this.byteLength), this.byteOffset = 0, De = 0; De < this.length; De += 1)
                  F = Re[De], this._setter(De, Number(F));
              else if (S(arguments[0]) === "object" && (arguments[0] instanceof E || r.Class(arguments[0]) === "ArrayBuffer")) {
                if (this.buffer = ze, this.byteOffset = r.ToUint32(Ne), this.byteOffset > this.buffer.byteLength)
                  throw new RangeError("byteOffset out of range");
                if (this.byteOffset % this.BYTES_PER_ELEMENT)
                  throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
                if (arguments.length < 3) {
                  if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT)
                    throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
                  this.length = this.byteLength / this.BYTES_PER_ELEMENT;
                } else
                  this.length = r.ToUint32(Ze), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
                if (this.byteOffset + this.byteLength > this.buffer.byteLength)
                  throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
              } else
                throw new TypeError("Unexpected argument type(s)");
              this.constructor = We, m(this), h(this);
            }, "ctor"), We.prototype = new G(), We.prototype.BYTES_PER_ELEMENT = Pe, We.prototype._pack = Ce, We.prototype._unpack = jr, We.BYTES_PER_ELEMENT = Pe, We.prototype._getter = function(Ae) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              if (Ae = r.ToUint32(Ae), !(Ae >= this.length)) {
                for (var ze = [], Ne = 0, Ze = this.byteOffset + Ae * this.BYTES_PER_ELEMENT; Ne < this.BYTES_PER_ELEMENT; Ne += 1, Ze += 1)
                  ze.push(this.buffer._bytes[Ze]);
                return this._unpack(ze);
              }
            }, We.prototype.get = We.prototype._getter, We.prototype._setter = function(Ae, ze) {
              if (arguments.length < 2)
                throw new SyntaxError("Not enough arguments");
              if (Ae = r.ToUint32(Ae), Ae < this.length) {
                var Ne = this._pack(ze), Ze, Je;
                for (Ze = 0, Je = this.byteOffset + Ae * this.BYTES_PER_ELEMENT; Ze < this.BYTES_PER_ELEMENT; Ze += 1, Je += 1)
                  this.buffer._bytes[Je] = Ne[Ze];
              }
            }, We.prototype.set = function(Ae, ze) {
              if (arguments.length < 1)
                throw new SyntaxError("Not enough arguments");
              var Ne, Ze, Je, Re, De, F, M, L, X, ue;
              if (S(arguments[0]) === "object" && arguments[0].constructor === this.constructor) {
                if (Ne = arguments[0], Je = r.ToUint32(arguments[1]), Je + Ne.length > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                if (L = this.byteOffset + Je * this.BYTES_PER_ELEMENT, X = Ne.length * this.BYTES_PER_ELEMENT, Ne.buffer === this.buffer) {
                  for (ue = [], De = 0, F = Ne.byteOffset; De < X; De += 1, F += 1)
                    ue[De] = Ne.buffer._bytes[F];
                  for (De = 0, M = L; De < X; De += 1, M += 1)
                    this.buffer._bytes[M] = ue[De];
                } else
                  for (De = 0, F = Ne.byteOffset, M = L; De < X; De += 1, F += 1, M += 1)
                    this.buffer._bytes[M] = Ne.buffer._bytes[F];
              } else if (S(arguments[0]) === "object" && typeof arguments[0].length < "u") {
                if (Ze = arguments[0], Re = r.ToUint32(Ze.length), Je = r.ToUint32(arguments[1]), Je + Re > this.length)
                  throw new RangeError("Offset plus length of array is out of range");
                for (De = 0; De < Re; De += 1)
                  F = Ze[De], this._setter(Je + De, Number(F));
              } else
                throw new TypeError("Unexpected argument type(s)");
            }, We.prototype.subarray = function(Ae, ze) {
              Ae = r.ToInt32(Ae), ze = r.ToInt32(ze), arguments.length < 1 && (Ae = 0), arguments.length < 2 && (ze = this.length), Ae < 0 && (Ae = this.length + Ae), ze < 0 && (ze = this.length + ze), Ae = d(Ae, 0, this.length), ze = d(ze, 0, this.length);
              var Ne = ze - Ae;
              return Ne < 0 && (Ne = 0), new this.constructor(this.buffer, this.byteOffset + Ae * this.BYTES_PER_ELEMENT, Ne);
            }, We;
          }
          o(P, "makeConstructor");
          var Q = P(1, g, y), oe = P(1, _, x), U = P(1, T, x), K = P(2, k, O), ge = P(2, B, W), we = P(4, j, z), xe = P(4, $, V), Me = P(4, ie, q), je = P(8, Y, ee);
          e.Int8Array = e.Int8Array || Q, e.Uint8Array = e.Uint8Array || oe, e.Uint8ClampedArray = e.Uint8ClampedArray || U, e.Int16Array = e.Int16Array || K, e.Uint16Array = e.Uint16Array || ge, e.Int32Array = e.Int32Array || we, e.Uint32Array = e.Uint32Array || xe, e.Float32Array = e.Float32Array || Me, e.Float64Array = e.Float64Array || je;
        }(), function() {
          function E(U, K) {
            return r.IsCallable(U.get) ? U.get(K) : U[K];
          }
          o(E, "r");
          var G = function() {
            var U = new e.Uint16Array([4660]), K = new e.Uint8Array(U.buffer);
            return E(K, 0) === 18;
          }();
          function P(U, K, ge) {
            if (arguments.length === 0)
              U = new e.ArrayBuffer(0);
            else if (!(U instanceof e.ArrayBuffer || r.Class(U) === "ArrayBuffer"))
              throw new TypeError("TypeError");
            if (this.buffer = U || new e.ArrayBuffer(0), this.byteOffset = r.ToUint32(K), this.byteOffset > this.buffer.byteLength)
              throw new RangeError("byteOffset out of range");
            if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = r.ToUint32(ge), this.byteOffset + this.byteLength > this.buffer.byteLength)
              throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
            m(this);
          }
          o(P, "DataView");
          function Q(U) {
            return function(K, ge) {
              if (K = r.ToUint32(K), K + U.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              K += this.byteOffset;
              var we = new e.Uint8Array(this.buffer, K, U.BYTES_PER_ELEMENT), xe = [], Me;
              for (Me = 0; Me < U.BYTES_PER_ELEMENT; Me += 1)
                xe.push(E(we, Me));
              return Boolean(ge) === Boolean(G) && xe.reverse(), E(new U(new e.Uint8Array(xe).buffer), 0);
            };
          }
          o(Q, "makeGetter"), P.prototype.getUint8 = Q(e.Uint8Array), P.prototype.getInt8 = Q(e.Int8Array), P.prototype.getUint16 = Q(e.Uint16Array), P.prototype.getInt16 = Q(e.Int16Array), P.prototype.getUint32 = Q(e.Uint32Array), P.prototype.getInt32 = Q(e.Int32Array), P.prototype.getFloat32 = Q(e.Float32Array), P.prototype.getFloat64 = Q(e.Float64Array);
          function oe(U) {
            return function(K, ge, we) {
              if (K = r.ToUint32(K), K + U.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              var xe = new U([ge]), Me = new e.Uint8Array(xe.buffer), je = [], Pe, Ce;
              for (Pe = 0; Pe < U.BYTES_PER_ELEMENT; Pe += 1)
                je.push(E(Me, Pe));
              Boolean(we) === Boolean(G) && je.reverse(), Ce = new e.Uint8Array(this.buffer, K, U.BYTES_PER_ELEMENT), Ce.set(je);
            };
          }
          o(oe, "makeSetter"), P.prototype.setUint8 = oe(e.Uint8Array), P.prototype.setInt8 = oe(e.Int8Array), P.prototype.setUint16 = oe(e.Uint16Array), P.prototype.setInt16 = oe(e.Int16Array), P.prototype.setUint32 = oe(e.Uint32Array), P.prototype.setInt32 = oe(e.Int32Array), P.prototype.setFloat32 = oe(e.Float32Array), P.prototype.setFloat64 = oe(e.Float64Array), e.DataView = e.DataView || P;
        }();
      }), Fm = C(function(e) {
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
          }(), n = /* @__PURE__ */ o(function(l, s, c) {
            a ? Object.defineProperty(l, s, {
              configurable: !0,
              writable: !0,
              value: c
            }) : l[s] = c;
          }, "defineProperty");
          t.WeakMap = function() {
            function u() {
              if (this === void 0)
                throw new TypeError("Constructor WeakMap requires 'new'");
              if (n(this, "_id", s("_WeakMap")), arguments.length > 0)
                throw new TypeError("WeakMap iterable is not supported");
            }
            o(u, "WeakMap2"), n(u.prototype, "delete", function(d) {
              if (l(this, "delete"), !i(d))
                return !1;
              var f = d[this._id];
              return f && f[0] === d ? (delete d[this._id], !0) : !1;
            }), n(u.prototype, "get", function(d) {
              if (l(this, "get"), !!i(d)) {
                var f = d[this._id];
                if (f && f[0] === d)
                  return f[1];
              }
            }), n(u.prototype, "has", function(d) {
              if (l(this, "has"), !i(d))
                return !1;
              var f = d[this._id];
              return !!(f && f[0] === d);
            }), n(u.prototype, "set", function(d, f) {
              if (l(this, "set"), !i(d))
                throw new TypeError("Invalid value used as weak map key");
              var p = d[this._id];
              return p && p[0] === d ? (p[1] = f, this) : (n(d, this._id, [d, f]), this);
            });
            function l(d, f) {
              if (!i(d) || !r.call(d, "_id"))
                throw new TypeError(f + " method called on incompatible receiver " + S(d));
            }
            o(l, "checkInstance");
            function s(d) {
              return d + "_" + c() + "." + c();
            }
            o(s, "genId");
            function c() {
              return Math.random().toString().substring(2);
            }
            return o(c, "rand"), n(u, "_polyfill", !0), u;
          }();
          function i(u) {
            return Object(u) === u;
          }
          o(i, "isObject");
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof D < "u" ? D : typeof Qe < "u" ? Qe : e);
      }), ar = C(function(e, t) {
        var r = /* @__PURE__ */ o(function(n) {
          return n && n.Math == Math && n;
        }, "check");
        t.exports = r((typeof globalThis > "u" ? "undefined" : S(globalThis)) == "object" && globalThis) || r((typeof D > "u" ? "undefined" : S(D)) == "object" && D) || r((typeof self > "u" ? "undefined" : S(self)) == "object" && self) || r((typeof Qe > "u" ? "undefined" : S(Qe)) == "object" && Qe) || function() {
          return this;
        }() || Function("return this")();
      }), nr = C(function(e, t) {
        t.exports = function(r) {
          try {
            return !!r();
          } catch {
            return !0;
          }
        };
      }), Sa = C(function(e, t) {
        var r = nr();
        t.exports = !r(function() {
          var a = function() {
          }.bind();
          return typeof a != "function" || a.hasOwnProperty("prototype");
        });
      }), Tm = C(function(e, t) {
        var r = Sa(), a = Function.prototype, n = a.apply, i = a.call;
        t.exports = (typeof Reflect > "u" ? "undefined" : S(Reflect)) == "object" && Reflect.apply || (r ? i.bind(n) : function() {
          return i.apply(n, arguments);
        });
      }), Dr = C(function(e, t) {
        var r = Sa(), a = Function.prototype, n = a.call, i = r && a.bind.bind(n, n);
        t.exports = r ? i : function(u) {
          return function() {
            return n.apply(u, arguments);
          };
        };
      }), Yu = C(function(e, t) {
        var r = Dr(), a = r({}.toString), n = r("".slice);
        t.exports = function(i) {
          return n(a(i), 8, -1);
        };
      }), Xu = C(function(e, t) {
        var r = Yu(), a = Dr();
        t.exports = function(n) {
          if (r(n) === "Function")
            return a(n);
        };
      }), Ku = C(function(e, t) {
        var r = (typeof N > "u" ? "undefined" : S(N)) == "object" && N.all, a = typeof r > "u" && r !== void 0;
        t.exports = {
          all: r,
          IS_HTMLDDA: a
        };
      }), ir = C(function(e, t) {
        var r = Ku(), a = r.all;
        t.exports = r.IS_HTMLDDA ? function(n) {
          return typeof n == "function" || n === a;
        } : function(n) {
          return typeof n == "function";
        };
      }), $r = C(function(e, t) {
        var r = nr();
        t.exports = !r(function() {
          return Object.defineProperty({}, 1, {
            get: /* @__PURE__ */ o(function() {
              return 7;
            }, "get")
          })[1] != 7;
        });
      }), ai = C(function(e, t) {
        var r = Sa(), a = Function.prototype.call;
        t.exports = r ? a.bind(a) : function() {
          return a.apply(a, arguments);
        };
      }), Rm = C(function(e) {
        var t = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, a = r && !t.call({
          1: 2
        }, 1);
        e.f = a ? /* @__PURE__ */ o(function(i) {
          var u = r(this, i);
          return !!u && u.enumerable;
        }, "propertyIsEnumerable") : t;
      }), Zu = C(function(e, t) {
        t.exports = function(r, a) {
          return {
            enumerable: !(r & 1),
            configurable: !(r & 2),
            writable: !(r & 4),
            value: a
          };
        };
      }), km = C(function(e, t) {
        var r = Dr(), a = nr(), n = Yu(), i = Object, u = r("".split);
        t.exports = a(function() {
          return !i("z").propertyIsEnumerable(0);
        }) ? function(l) {
          return n(l) == "String" ? u(l, "") : i(l);
        } : i;
      }), Ju = C(function(e, t) {
        t.exports = function(r) {
          return r == null;
        };
      }), Qu = C(function(e, t) {
        var r = Ju(), a = TypeError;
        t.exports = function(n) {
          if (r(n))
            throw a("Can't call method on " + n);
          return n;
        };
      }), Sm = C(function(e, t) {
        var r = km(), a = Qu();
        t.exports = function(n) {
          return r(a(n));
        };
      }), Oa = C(function(e, t) {
        var r = ir(), a = Ku(), n = a.all;
        t.exports = a.IS_HTMLDDA ? function(i) {
          return S(i) == "object" ? i !== null : r(i) || i === n;
        } : function(i) {
          return S(i) == "object" ? i !== null : r(i);
        };
      }), ni = C(function(e, t) {
        t.exports = {};
      }), el = C(function(e, t) {
        var r = ni(), a = ar(), n = ir(), i = /* @__PURE__ */ o(function(l) {
          return n(l) ? l : void 0;
        }, "aFunction");
        t.exports = function(u, l) {
          return arguments.length < 2 ? i(r[u]) || i(a[u]) : r[u] && r[u][l] || a[u] && a[u][l];
        };
      }), Om = C(function(e, t) {
        var r = Dr();
        t.exports = r({}.isPrototypeOf);
      }), Mm = C(function(e, t) {
        var r = el();
        t.exports = r("navigator", "userAgent") || "";
      }), Nm = C(function(e, t) {
        var r = ar(), a = Mm(), n = r.process, i = r.Deno, u = n && n.versions || i && i.version, l = u && u.v8, s, c;
        l && (s = l.split("."), c = s[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !c && a && (s = a.match(/Edge\/(\d+)/), (!s || s[1] >= 74) && (s = a.match(/Chrome\/(\d+)/), s && (c = +s[1]))), t.exports = c;
      }), tl = C(function(e, t) {
        var r = Nm(), a = nr();
        t.exports = !!Object.getOwnPropertySymbols && !a(function() {
          var n = Symbol();
          return !String(n) || !(Object(n) instanceof Symbol) || !Symbol.sham && r && r < 41;
        });
      }), rl = C(function(e, t) {
        var r = tl();
        t.exports = r && !Symbol.sham && S(Symbol.iterator) == "symbol";
      }), al = C(function(e, t) {
        var r = el(), a = ir(), n = Om(), i = rl(), u = Object;
        t.exports = i ? function(l) {
          return S(l) == "symbol";
        } : function(l) {
          var s = r("Symbol");
          return a(s) && n(s.prototype, u(l));
        };
      }), Im = C(function(e, t) {
        var r = String;
        t.exports = function(a) {
          try {
            return r(a);
          } catch {
            return "Object";
          }
        };
      }), nl = C(function(e, t) {
        var r = ir(), a = Im(), n = TypeError;
        t.exports = function(i) {
          if (r(i))
            return i;
          throw n(a(i) + " is not a function");
        };
      }), Pm = C(function(e, t) {
        var r = nl(), a = Ju();
        t.exports = function(n, i) {
          var u = n[i];
          return a(u) ? void 0 : r(u);
        };
      }), Lm = C(function(e, t) {
        var r = ai(), a = ir(), n = Oa(), i = TypeError;
        t.exports = function(u, l) {
          var s, c;
          if (l === "string" && a(s = u.toString) && !n(c = r(s, u)) || a(s = u.valueOf) && !n(c = r(s, u)) || l !== "string" && a(s = u.toString) && !n(c = r(s, u)))
            return c;
          throw i("Can't convert object to primitive value");
        };
      }), Bm = C(function(e, t) {
        t.exports = !0;
      }), qm = C(function(e, t) {
        var r = ar(), a = Object.defineProperty;
        t.exports = function(n, i) {
          try {
            a(r, n, {
              value: i,
              configurable: !0,
              writable: !0
            });
          } catch {
            r[n] = i;
          }
          return i;
        };
      }), jm = C(function(e, t) {
        var r = ar(), a = qm(), n = "__core-js_shared__", i = r[n] || a(n, {});
        t.exports = i;
      }), zm = C(function(e, t) {
        var r = Bm(), a = jm();
        (t.exports = function(n, i) {
          return a[n] || (a[n] = i !== void 0 ? i : {});
        })("versions", []).push({
          version: "3.26.1",
          mode: r ? "pure" : "global",
          copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
      }), Vm = C(function(e, t) {
        var r = Qu(), a = Object;
        t.exports = function(n) {
          return a(r(n));
        };
      }), Ma = C(function(e, t) {
        var r = Dr(), a = Vm(), n = r({}.hasOwnProperty);
        t.exports = Object.hasOwn || /* @__PURE__ */ o(function(u, l) {
          return n(a(u), l);
        }, "hasOwn2");
      }), Hm = C(function(e, t) {
        var r = Dr(), a = 0, n = Math.random(), i = r(1 .toString);
        t.exports = function(u) {
          return "Symbol(" + (u === void 0 ? "" : u) + ")_" + i(++a + n, 36);
        };
      }), $m = C(function(e, t) {
        var r = ar(), a = zm(), n = Ma(), i = Hm(), u = tl(), l = rl(), s = a("wks"), c = r.Symbol, d = c && c.for, f = l ? c : c && c.withoutSetter || i;
        t.exports = function(p) {
          if (!n(s, p) || !(u || typeof s[p] == "string")) {
            var m = "Symbol." + p;
            u && n(c, p) ? s[p] = c[p] : l && d ? s[p] = d(m) : s[p] = f(m);
          }
          return s[p];
        };
      }), Um = C(function(e, t) {
        var r = ai(), a = Oa(), n = al(), i = Pm(), u = Lm(), l = $m(), s = TypeError, c = l("toPrimitive");
        t.exports = function(d, f) {
          if (!a(d) || n(d))
            return d;
          var p = i(d, c), m;
          if (p) {
            if (f === void 0 && (f = "default"), m = r(p, d, f), !a(m) || n(m))
              return m;
            throw s("Can't convert object to primitive value");
          }
          return f === void 0 && (f = "number"), u(d, f);
        };
      }), il = C(function(e, t) {
        var r = Um(), a = al();
        t.exports = function(n) {
          var i = r(n, "string");
          return a(i) ? i : i + "";
        };
      }), Gm = C(function(e, t) {
        var r = ar(), a = Oa(), n = r.document, i = a(n) && a(n.createElement);
        t.exports = function(u) {
          return i ? n.createElement(u) : {};
        };
      }), ol = C(function(e, t) {
        var r = $r(), a = nr(), n = Gm();
        t.exports = !r && !a(function() {
          return Object.defineProperty(n("div"), "a", {
            get: /* @__PURE__ */ o(function() {
              return 7;
            }, "get")
          }).a != 7;
        });
      }), Wm = C(function(e) {
        var t = $r(), r = ai(), a = Rm(), n = Zu(), i = Sm(), u = il(), l = Ma(), s = ol(), c = Object.getOwnPropertyDescriptor;
        e.f = t ? c : /* @__PURE__ */ o(function(f, p) {
          if (f = i(f), p = u(p), s)
            try {
              return c(f, p);
            } catch {
            }
          if (l(f, p))
            return n(!r(a.f, f, p), f[p]);
        }, "getOwnPropertyDescriptor");
      }), Ym = C(function(e, t) {
        var r = nr(), a = ir(), n = /#|\.prototype\./, i = /* @__PURE__ */ o(function(f, p) {
          var m = l[u(f)];
          return m == c ? !0 : m == s ? !1 : a(p) ? r(p) : !!p;
        }, "isForced"), u = i.normalize = function(d) {
          return String(d).replace(n, ".").toLowerCase();
        }, l = i.data = {}, s = i.NATIVE = "N", c = i.POLYFILL = "P";
        t.exports = i;
      }), Xm = C(function(e, t) {
        var r = Xu(), a = nl(), n = Sa(), i = r(r.bind);
        t.exports = function(u, l) {
          return a(u), l === void 0 ? u : n ? i(u, l) : function() {
            return u.apply(l, arguments);
          };
        };
      }), Km = C(function(e, t) {
        var r = $r(), a = nr();
        t.exports = r && a(function() {
          return Object.defineProperty(function() {
          }, "prototype", {
            value: 42,
            writable: !1
          }).prototype != 42;
        });
      }), Zm = C(function(e, t) {
        var r = Oa(), a = String, n = TypeError;
        t.exports = function(i) {
          if (r(i))
            return i;
          throw n(a(i) + " is not an object");
        };
      }), Jm = C(function(e) {
        var t = $r(), r = ol(), a = Km(), n = Zm(), i = il(), u = TypeError, l = Object.defineProperty, s = Object.getOwnPropertyDescriptor, c = "enumerable", d = "configurable", f = "writable";
        e.f = t ? a ? /* @__PURE__ */ o(function(m, h, v) {
          if (n(m), h = i(h), n(v), typeof m == "function" && h === "prototype" && "value" in v && f in v && !v[f]) {
            var b = s(m, h);
            b && b[f] && (m[h] = v.value, v = {
              configurable: d in v ? v[d] : b[d],
              enumerable: c in v ? v[c] : b[c],
              writable: !1
            });
          }
          return l(m, h, v);
        }, "defineProperty") : l : /* @__PURE__ */ o(function(m, h, v) {
          if (n(m), h = i(h), n(v), r)
            try {
              return l(m, h, v);
            } catch {
            }
          if ("get" in v || "set" in v)
            throw u("Accessors not supported");
          return "value" in v && (m[h] = v.value), m;
        }, "defineProperty");
      }), Qm = C(function(e, t) {
        var r = $r(), a = Jm(), n = Zu();
        t.exports = r ? function(i, u, l) {
          return a.f(i, u, n(1, l));
        } : function(i, u, l) {
          return i[u] = l, i;
        };
      }), eh = C(function(e, t) {
        var r = ar(), a = Tm(), n = Xu(), i = ir(), u = Wm().f, l = Ym(), s = ni(), c = Xm(), d = Qm(), f = Ma(), p = /* @__PURE__ */ o(function(h) {
          var v = /* @__PURE__ */ o(function b(g, y, _) {
            if (this instanceof b) {
              switch (arguments.length) {
                case 0:
                  return new h();
                case 1:
                  return new h(g);
                case 2:
                  return new h(g, y);
              }
              return new h(g, y, _);
            }
            return a(h, this, arguments);
          }, "Wrapper");
          return v.prototype = h.prototype, v;
        }, "wrapConstructor");
        t.exports = function(m, h) {
          var v = m.target, b = m.global, g = m.stat, y = m.proto, _ = b ? r : g ? r[v] : (r[v] || {}).prototype, x = b ? s : s[v] || d(s, v, {})[v], T = x.prototype, k, O, B, W, j, z, $, V, J;
          for (W in h)
            k = l(b ? W : v + (g ? "." : "#") + W, m.forced), O = !k && _ && f(_, W), z = x[W], O && (m.dontCallGetSet ? (J = u(_, W), $ = J && J.value) : $ = _[W]), j = O && $ ? $ : h[W], !(O && S(z) == S(j)) && (m.bind && O ? V = c(j, r) : m.wrap && O ? V = p(j) : y && i(j) ? V = n(j) : V = j, (m.sham || j && j.sham || z && z.sham) && d(V, "sham", !0), d(x, W, V), y && (B = v + "Prototype", f(s, B) || d(s, B, {}), d(s[B], W, j), m.real && T && !T[W] && d(T, W, j)));
        };
      }), th = C(function() {
        var e = eh(), t = Ma();
        e({
          target: "Object",
          stat: !0
        }, {
          hasOwn: t
        });
      }), rh = C(function(e, t) {
        th();
        var r = ni();
        t.exports = r.Object.hasOwn;
      }), ah = C(function(e, t) {
        var r = rh();
        t.exports = r;
      }), nh = C(function(e, t) {
        var r = ah();
        t.exports = r;
      }), ih = [{
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
      }], bt = {
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
      ih.forEach(function(e) {
        var t = e.name, r = e.value, a = e.priority, n = e.group;
        bt[t] = r, bt[t + "_PRIO"] = a, bt[t + "_GROUP"] = n, bt.results[a] = r, bt.resultGroups[a] = n, bt.resultGroupMap[r] = n;
      }), Object.freeze(bt.results), Object.freeze(bt.resultGroups), Object.freeze(bt.resultGroupMap), Object.freeze(bt);
      var ce = bt;
      function oh() {
        (typeof console > "u" ? "undefined" : S(console)) === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      o(oh, "log");
      var or = oh, uh = /[\t\r\n\f]/g, lh = function() {
        function e() {
          _t(this, e), this.parent = void 0;
        }
        return o(e, "AbstractVirtualNode"), xt(e, [{
          key: "props",
          get: /* @__PURE__ */ o(function() {
            throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties');
          }, "get")
        }, {
          key: "attrNames",
          get: /* @__PURE__ */ o(function() {
            throw new Error('VirtualNode class must have an "attrNames" property');
          }, "get")
        }, {
          key: "attr",
          value: /* @__PURE__ */ o(function() {
            throw new Error('VirtualNode class must have an "attr" function');
          }, "attr")
        }, {
          key: "hasAttr",
          value: /* @__PURE__ */ o(function() {
            throw new Error('VirtualNode class must have a "hasAttr" function');
          }, "hasAttr")
        }, {
          key: "hasClass",
          value: /* @__PURE__ */ o(function(r) {
            var a = this.attr("class");
            if (!a)
              return !1;
            var n = " " + r + " ";
            return (" " + a + " ").replace(uh, " ").indexOf(n) >= 0;
          }, "hasClass")
        }]), e;
      }(), He = lh, ii = {};
      gt(ii, {
        DqElement: /* @__PURE__ */ o(function() {
          return Nt;
        }, "DqElement"),
        aggregate: /* @__PURE__ */ o(function() {
          return Na;
        }, "aggregate"),
        aggregateChecks: /* @__PURE__ */ o(function() {
          return sl;
        }, "aggregateChecks"),
        aggregateNodeResults: /* @__PURE__ */ o(function() {
          return cl;
        }, "aggregateNodeResults"),
        aggregateResult: /* @__PURE__ */ o(function() {
          return dl;
        }, "aggregateResult"),
        areStylesSet: /* @__PURE__ */ o(function() {
          return hh;
        }, "areStylesSet"),
        assert: /* @__PURE__ */ o(function() {
          return he;
        }, "assert"),
        checkHelper: /* @__PURE__ */ o(function() {
          return di;
        }, "checkHelper"),
        clone: /* @__PURE__ */ o(function() {
          return It;
        }, "clone"),
        closest: /* @__PURE__ */ o(function() {
          return it;
        }, "closest"),
        collectResultsFromFrames: /* @__PURE__ */ o(function() {
          return jl;
        }, "collectResultsFromFrames"),
        contains: /* @__PURE__ */ o(function() {
          return sr;
        }, "contains"),
        convertSelector: /* @__PURE__ */ o(function() {
          return ja;
        }, "convertSelector"),
        cssParser: /* @__PURE__ */ o(function() {
          return _l;
        }, "cssParser"),
        deepMerge: /* @__PURE__ */ o(function() {
          return Fi;
        }, "deepMerge"),
        escapeSelector: /* @__PURE__ */ o(function() {
          return ke;
        }, "escapeSelector"),
        extendMetaData: /* @__PURE__ */ o(function() {
          return Ti;
        }, "extendMetaData"),
        filterHtmlAttrs: /* @__PURE__ */ o(function() {
          return f1;
        }, "filterHtmlAttrs"),
        finalizeRuleResult: /* @__PURE__ */ o(function() {
          return Ur;
        }, "finalizeRuleResult"),
        findBy: /* @__PURE__ */ o(function() {
          return Qr;
        }, "findBy"),
        getAllChecks: /* @__PURE__ */ o(function() {
          return Ua;
        }, "getAllChecks"),
        getAncestry: /* @__PURE__ */ o(function() {
          return qa;
        }, "getAncestry"),
        getBaseLang: /* @__PURE__ */ o(function() {
          return yr;
        }, "getBaseLang"),
        getCheckMessage: /* @__PURE__ */ o(function() {
          return R2;
        }, "getCheckMessage"),
        getCheckOption: /* @__PURE__ */ o(function() {
          return Mn;
        }, "getCheckOption"),
        getEnvironmentData: /* @__PURE__ */ o(function() {
          return Xt;
        }, "getEnvironmentData"),
        getFlattenedTree: /* @__PURE__ */ o(function() {
          return Po;
        }, "getFlattenedTree"),
        getFrameContexts: /* @__PURE__ */ o(function() {
          return W2;
        }, "getFrameContexts"),
        getFriendlyUriEnd: /* @__PURE__ */ o(function() {
          return ml;
        }, "getFriendlyUriEnd"),
        getNodeAttributes: /* @__PURE__ */ o(function() {
          return Pa;
        }, "getNodeAttributes"),
        getNodeFromTree: /* @__PURE__ */ o(function() {
          return se;
        }, "getNodeFromTree"),
        getPreloadConfig: /* @__PURE__ */ o(function() {
          return l1;
        }, "getPreloadConfig"),
        getRootNode: /* @__PURE__ */ o(function() {
          return ea;
        }, "getRootNode"),
        getRule: /* @__PURE__ */ o(function() {
          return Wd;
        }, "getRule"),
        getScroll: /* @__PURE__ */ o(function() {
          return Bt;
        }, "getScroll"),
        getScrollState: /* @__PURE__ */ o(function() {
          return K2;
        }, "getScrollState"),
        getSelector: /* @__PURE__ */ o(function() {
          return ci;
        }, "getSelector"),
        getSelectorData: /* @__PURE__ */ o(function() {
          return Ba;
        }, "getSelectorData"),
        getShadowSelector: /* @__PURE__ */ o(function() {
          return ui;
        }, "getShadowSelector"),
        getStandards: /* @__PURE__ */ o(function() {
          return Z2;
        }, "getStandards"),
        getStyleSheetFactory: /* @__PURE__ */ o(function() {
          return Kd;
        }, "getStyleSheetFactory"),
        getXpath: /* @__PURE__ */ o(function() {
          return wl;
        }, "getXpath"),
        injectStyle: /* @__PURE__ */ o(function() {
          return ew;
        }, "injectStyle"),
        isHidden: /* @__PURE__ */ o(function() {
          return tw;
        }, "isHidden"),
        isHtmlElement: /* @__PURE__ */ o(function() {
          return Ho;
        }, "isHtmlElement"),
        isNodeInContext: /* @__PURE__ */ o(function() {
          return $o;
        }, "isNodeInContext"),
        isShadowRoot: /* @__PURE__ */ o(function() {
          return Wa;
        }, "isShadowRoot"),
        isValidLang: /* @__PURE__ */ o(function() {
          return Ln;
        }, "isValidLang"),
        isXHTML: /* @__PURE__ */ o(function() {
          return La;
        }, "isXHTML"),
        matchAncestry: /* @__PURE__ */ o(function() {
          return Uo;
        }, "matchAncestry"),
        matches: /* @__PURE__ */ o(function() {
          return pi;
        }, "matches"),
        matchesExpression: /* @__PURE__ */ o(function() {
          return xr;
        }, "matchesExpression"),
        matchesSelector: /* @__PURE__ */ o(function() {
          return _r;
        }, "matchesSelector"),
        memoize: /* @__PURE__ */ o(function() {
          return Be;
        }, "memoize"),
        mergeResults: /* @__PURE__ */ o(function() {
          return Ga;
        }, "mergeResults"),
        nodeLookup: /* @__PURE__ */ o(function() {
          return _e;
        }, "nodeLookup"),
        nodeSerializer: /* @__PURE__ */ o(function() {
          return pt;
        }, "nodeSerializer"),
        nodeSorter: /* @__PURE__ */ o(function() {
          return Go;
        }, "nodeSorter"),
        parseCrossOriginStylesheet: /* @__PURE__ */ o(function() {
          return Yo;
        }, "parseCrossOriginStylesheet"),
        parseSameOriginStylesheet: /* @__PURE__ */ o(function() {
          return Qd;
        }, "parseSameOriginStylesheet"),
        parseStylesheet: /* @__PURE__ */ o(function() {
          return Wo;
        }, "parseStylesheet"),
        performanceTimer: /* @__PURE__ */ o(function() {
          return qe;
        }, "performanceTimer"),
        pollyfillElementsFromPoint: /* @__PURE__ */ o(function() {
          return e1;
        }, "pollyfillElementsFromPoint"),
        preload: /* @__PURE__ */ o(function() {
          return o1;
        }, "preload"),
        preloadCssom: /* @__PURE__ */ o(function() {
          return r1;
        }, "preloadCssom"),
        preloadMedia: /* @__PURE__ */ o(function() {
          return i1;
        }, "preloadMedia"),
        processMessage: /* @__PURE__ */ o(function() {
          return jo;
        }, "processMessage"),
        publishMetaData: /* @__PURE__ */ o(function() {
          return In;
        }, "publishMetaData"),
        querySelectorAll: /* @__PURE__ */ o(function() {
          return dt;
        }, "querySelectorAll"),
        querySelectorAllFilter: /* @__PURE__ */ o(function() {
          return St;
        }, "querySelectorAllFilter"),
        queue: /* @__PURE__ */ o(function() {
          return Ct;
        }, "queue"),
        respondable: /* @__PURE__ */ o(function() {
          return yt;
        }, "respondable"),
        ruleShouldRun: /* @__PURE__ */ o(function() {
          return d1;
        }, "ruleShouldRun"),
        select: /* @__PURE__ */ o(function() {
          return Xo;
        }, "select"),
        sendCommandToFrame: /* @__PURE__ */ o(function() {
          return Pl;
        }, "sendCommandToFrame"),
        setScrollState: /* @__PURE__ */ o(function() {
          return Ow;
        }, "setScrollState"),
        shadowSelect: /* @__PURE__ */ o(function() {
          return Mw;
        }, "shadowSelect"),
        shadowSelectAll: /* @__PURE__ */ o(function() {
          return Ko;
        }, "shadowSelectAll"),
        shouldPreload: /* @__PURE__ */ o(function() {
          return u1;
        }, "shouldPreload"),
        toArray: /* @__PURE__ */ o(function() {
          return pl;
        }, "toArray"),
        tokenList: /* @__PURE__ */ o(function() {
          return Xe;
        }, "tokenList"),
        uniqueArray: /* @__PURE__ */ o(function() {
          return ya;
        }, "uniqueArray"),
        uuid: /* @__PURE__ */ o(function() {
          return iv;
        }, "uuid"),
        validInputTypes: /* @__PURE__ */ o(function() {
          return Pn;
        }, "validInputTypes"),
        validLangs: /* @__PURE__ */ o(function() {
          return g1;
        }, "validLangs")
      });
      function sh(e, t, r) {
        t = t.slice(), r && t.push(r);
        var a = t.map(function(n) {
          return e.indexOf(n);
        }).sort();
        return e[a.pop()];
      }
      o(sh, "aggregate");
      var Na = sh, ch = ce.CANTTELL_PRIO, dh = ce.FAIL_PRIO, Ia = [];
      Ia[ce.PASS_PRIO] = !0, Ia[ce.CANTTELL_PRIO] = null, Ia[ce.FAIL_PRIO] = !1;
      var ul = ["any", "all", "none"];
      function ll(e, t) {
        return ul.reduce(function(r, a) {
          return r[a] = (e[a] || []).map(function(n) {
            return t(n, a);
          }), r;
        }, {});
      }
      o(ll, "anyAllNone");
      function fh(e) {
        var t = Object.assign({}, e);
        ll(t, function(n, i) {
          var u = typeof n.result > "u" ? -1 : Ia.indexOf(n.result);
          n.priority = u !== -1 ? u : ce.CANTTELL_PRIO, i === "none" && (n.priority === ce.PASS_PRIO ? n.priority = ce.FAIL_PRIO : n.priority === ce.FAIL_PRIO && (n.priority = ce.PASS_PRIO));
        });
        var r = {
          all: t.all.reduce(function(n, i) {
            return Math.max(n, i.priority);
          }, 0),
          none: t.none.reduce(function(n, i) {
            return Math.max(n, i.priority);
          }, 0),
          any: t.any.reduce(function(n, i) {
            return Math.min(n, i.priority);
          }, 4) % 4
        };
        t.priority = Math.max(r.all, r.none, r.any);
        var a = [];
        return ul.forEach(function(n) {
          t[n] = t[n].filter(function(i) {
            return i.priority === t.priority && i.priority === r[n];
          }), t[n].forEach(function(i) {
            return a.push(i.impact);
          });
        }), [ch, dh].includes(t.priority) ? t.impact = Na(ce.impact, a) : t.impact = null, ll(t, function(n) {
          delete n.result, delete n.priority;
        }), t.result = ce.results[t.priority], delete t.priority, t;
      }
      o(fh, "aggregateChecks");
      var sl = fh;
      function Ur(e) {
        var t = w._audit.rules.find(function(r) {
          var a = r.id;
          return a === e.id;
        });
        return t && t.impact && e.nodes.forEach(function(r) {
          ["any", "all", "none"].forEach(function(a) {
            (r[a] || []).forEach(function(n) {
              n.impact = t.impact;
            });
          });
        }), Object.assign(e, cl(e.nodes)), delete e.nodes, e;
      }
      o(Ur, "_finalizeRuleResult");
      function ph(e) {
        var t = {};
        if (e = e.map(function(i) {
          if (i.any && i.all && i.none)
            return sl(i);
          if (Array.isArray(i.node))
            return Ur(i);
          throw new TypeError("Invalid Result type");
        }), e && e.length) {
          var r = e.map(function(i) {
            return i.result;
          });
          t.result = Na(ce.results, r, t.result);
        } else
          t.result = "inapplicable";
        ce.resultGroups.forEach(function(i) {
          return t[i] = [];
        }), e.forEach(function(i) {
          var u = ce.resultGroupMap[i.result];
          t[u].push(i);
        });
        var a = ce.FAIL_GROUP;
        if (t[a].length === 0 && (a = ce.CANTTELL_GROUP), t[a].length > 0) {
          var n = t[a].map(function(i) {
            return i.impact;
          });
          t.impact = Na(ce.impact, n) || null;
        } else
          t.impact = null;
        return t;
      }
      o(ph, "aggregateNodeResults");
      var cl = ph;
      function oi(e, t, r) {
        var a = Object.assign({}, t);
        a.nodes = (a[r] || []).concat(), ce.resultGroups.forEach(function(n) {
          delete a[n];
        }), e[r].push(a);
      }
      o(oi, "copyToGroup");
      function mh(e) {
        var t = {};
        return ce.resultGroups.forEach(function(r) {
          return t[r] = [];
        }), e.forEach(function(r) {
          r.error ? oi(t, r, ce.CANTTELL_GROUP) : r.result === ce.NA ? oi(t, r, ce.NA_GROUP) : ce.resultGroups.forEach(function(a) {
            Array.isArray(r[a]) && r[a].length > 0 && oi(t, r, a);
          });
        }), t;
      }
      o(mh, "aggregateResult");
      var dl = mh;
      function fl(e, t, r) {
        var a = D.getComputedStyle(e, null);
        if (!a)
          return !1;
        for (var n = 0; n < t.length; ++n) {
          var i = t[n];
          if (a.getPropertyValue(i.property) === i.value)
            return !0;
        }
        return !e.parentNode || e.nodeName.toUpperCase() === r.toUpperCase() ? !1 : fl(e.parentNode, t, r);
      }
      o(fl, "areStylesSet");
      var hh = fl;
      function vh(e, t) {
        if (!e)
          throw new Error(t);
      }
      o(vh, "assert");
      var he = vh;
      function gh(e) {
        return Array.prototype.slice.call(e);
      }
      o(gh, "toArray");
      var pl = gh;
      function bh(e) {
        for (var t = String(e), r = t.length, a = -1, n, i = "", u = t.charCodeAt(0); ++a < r; ) {
          if (n = t.charCodeAt(a), n == 0) {
            i += "\uFFFD";
            continue;
          }
          if (n >= 1 && n <= 31 || n == 127 || a == 0 && n >= 48 && n <= 57 || a == 1 && n >= 48 && n <= 57 && u == 45) {
            i += "\\" + n.toString(16) + " ";
            continue;
          }
          if (a == 0 && r == 1 && n == 45) {
            i += "\\" + t.charAt(a);
            continue;
          }
          if (n >= 128 || n == 45 || n == 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
            i += t.charAt(a);
            continue;
          }
          i += "\\" + t.charAt(a);
        }
        return i;
      }
      o(bh, "escapeSelector");
      var ke = bh;
      function yh() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return e.length !== 0 && (e.match(/[0-9]/g) || "").length >= e.length / 2;
      }
      o(yh, "isMostlyNumbers");
      function Gr(e, t) {
        return [e.substring(0, t), e.substring(t)];
      }
      o(Gr, "splitString");
      function Wr(e) {
        return e.replace(/\s+$/, "");
      }
      o(Wr, "trimRight");
      function wh(e) {
        var t = e, r = "", a = "", n = "", i = "", u = "", l = "";
        if (e.includes("#")) {
          var s = Gr(e, e.indexOf("#")), c = H(s, 2);
          e = c[0], l = c[1];
        }
        if (e.includes("?")) {
          var d = Gr(e, e.indexOf("?")), f = H(d, 2);
          e = f[0], u = f[1];
        }
        if (e.includes("://")) {
          var p = e.split("://"), m = H(p, 2);
          r = m[0], e = m[1];
          var h = Gr(e, e.indexOf("/")), v = H(h, 2);
          a = v[0], e = v[1];
        } else if (e.substr(0, 2) === "//") {
          e = e.substr(2);
          var b = Gr(e, e.indexOf("/")), g = H(b, 2);
          a = g[0], e = g[1];
        }
        if (a.substr(0, 4) === "www." && (a = a.substr(4)), a && a.includes(":")) {
          var y = Gr(a, a.indexOf(":")), _ = H(y, 2);
          a = _[0], n = _[1];
        }
        return i = e, {
          original: t,
          protocol: r,
          domain: a,
          port: n,
          path: i,
          query: u,
          hash: l
        };
      }
      o(wh, "uriParser");
      function Dh() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e.length <= 1 || e.substr(0, 5) === "data:" || e.substr(0, 11) === "javascript:" || e.includes("?"))) {
          var r = t.currentDomain, a = t.maxLength, n = a === void 0 ? 25 : a, i = wh(e), u = i.path, l = i.domain, s = i.hash, c = u.substr(u.substr(0, u.length - 2).lastIndexOf("/") + 1);
          if (s)
            return c && (c + s).length <= n ? Wr(c + s) : c.length < 2 && s.length > 2 && s.length <= n ? Wr(s) : void 0;
          if (l && l.length < n && u.length <= 1 || u === "/" + c && l && r && l !== r && (l + u).length <= n)
            return Wr(l + u);
          var d = c.lastIndexOf(".");
          if ((d === -1 || d > 1) && (d !== -1 || c.length > 2) && c.length <= n && !c.match(/index(\.[a-zA-Z]{2-4})?/) && !yh(c))
            return Wr(c);
        }
      }
      o(Dh, "getFriendlyUriEnd");
      var ml = Dh;
      function _h(e) {
        return e.attributes instanceof D.NamedNodeMap ? e.attributes : e.cloneNode(!1).attributes;
      }
      o(_h, "getNodeAttributes");
      var Pa = _h, xh = function() {
        var e;
        function t(r) {
          var a, n, i = ["matches", "matchesSelector", "mozMatchesSelector", "webkitMatchesSelector", "msMatchesSelector"], u = i.length;
          for (a = 0; a < u; a++)
            if (n = i[a], r[n])
              return n;
        }
        return o(t, "getMethod"), function(r, a) {
          return (!e || !r[e]) && (e = t(r)), r[e] ? r[e](a) : !1;
        };
      }(), _r = xh, Eh = Et($u());
      w._memoizedFns = [];
      function Ch(e) {
        var t = (0, Eh.default)(e);
        return w._memoizedFns.push(t), t;
      }
      o(Ch, "memoizeImplementation");
      var Be = Ch, Ah = Be(function(e) {
        return e != null && e.createElement ? e.createElement("A").localName === "A" : !1;
      }), La = Ah;
      function ui(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!t)
          return "";
        var a = t.getRootNode && t.getRootNode() || N;
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
        }), n.map(function(i) {
          return e(i.elm, r, i.doc);
        });
      }
      o(ui, "_getShadowSelector");
      var Fh = ["class", "style", "id", "selected", "checked", "disabled", "tabindex", "aria-checked", "aria-selected", "aria-invalid", "aria-activedescendant", "aria-busy", "aria-disabled", "aria-expanded", "aria-grabbed", "aria-pressed", "aria-valuenow"], Th = 31, Rh = /([\\"])/g, kh = /(\r\n|\r|\n)/g;
      function li(e) {
        return e.replace(Rh, "\\$1").replace(kh, "\\a ");
      }
      o(li, "escapeAttribute");
      function hl(e, t) {
        var r = t.name, a;
        if (r.indexOf("href") !== -1 || r.indexOf("src") !== -1) {
          var n = ml(e.getAttribute(r));
          n ? a = ke(t.name) + '$="' + li(n) + '"' : a = ke(t.name) + '="' + li(e.getAttribute(r)) + '"';
        } else
          a = ke(r) + '="' + li(t.value) + '"';
        return a;
      }
      o(hl, "getAttributeNameValue");
      function si(e, t) {
        return e.count < t.count ? -1 : e.count === t.count ? 0 : 1;
      }
      o(si, "countSort");
      function vl(e) {
        return !Fh.includes(e.name) && e.name.indexOf(":") === -1 && (!e.value || e.value.length < Th);
      }
      o(vl, "filterAttributes");
      function Ba(e) {
        var t = {
          classes: {},
          tags: {},
          attributes: {}
        };
        e = Array.isArray(e) ? e : [e];
        for (var r = e.slice(), a = [], n = /* @__PURE__ */ o(function() {
          var u = r.pop(), l = u.actualNode;
          if (l.querySelectorAll) {
            var s = l.nodeName;
            t.tags[s] ? t.tags[s]++ : t.tags[s] = 1, l.classList && Array.from(l.classList).forEach(function(c) {
              var d = ke(c);
              t.classes[d] ? t.classes[d]++ : t.classes[d] = 1;
            }), l.hasAttributes() && Array.from(Pa(l)).filter(vl).forEach(function(c) {
              var d = hl(l, c);
              d && (t.attributes[d] ? t.attributes[d]++ : t.attributes[d] = 1);
            });
          }
          for (u.children.length && (a.push(r), r = u.children.slice()); !r.length && a.length; )
            r = a.pop();
        }, "_loop2"); r.length; )
          n();
        return t;
      }
      o(Ba, "_getSelectorData");
      function Sh(e, t) {
        var r = [], a = t.classes, n = t.tags;
        return e.classList && Array.from(e.classList).forEach(function(i) {
          var u = ke(i);
          a[u] < n[e.nodeName] && r.push({
            name: u,
            count: a[u],
            species: "class"
          });
        }), r.sort(si);
      }
      o(Sh, "uncommonClasses");
      function Oh(e, t) {
        var r = e.parentNode && Array.from(e.parentNode.children || "") || [], a = r.find(function(i) {
          return i !== e && _r(i, t);
        });
        if (a) {
          var n = 1 + r.indexOf(e);
          return ":nth-child(" + n + ")";
        } else
          return "";
      }
      o(Oh, "getNthChildString");
      function Mh(e) {
        if (!!e.getAttribute("id")) {
          var t = e.getRootNode && e.getRootNode() || N, r = "#" + ke(e.getAttribute("id") || "");
          if (!r.match(/player_uid_/) && t.querySelectorAll(r).length === 1)
            return r;
        }
      }
      o(Mh, "getElmId");
      function gl(e) {
        var t = La(N);
        return ke(t ? e.localName : e.nodeName.toLowerCase());
      }
      o(gl, "getBaseSelector");
      function Nh(e, t) {
        var r = [], a = t.attributes, n = t.tags;
        return e.hasAttributes() && Array.from(Pa(e)).filter(vl).forEach(function(i) {
          var u = hl(e, i);
          u && a[u] < n[e.nodeName] && r.push({
            name: u,
            count: a[u],
            species: "attribute"
          });
        }), r.sort(si);
      }
      o(Nh, "uncommonAttributes");
      function Ih(e, t) {
        var r = "", a, n = Sh(e, t), i = Nh(e, t);
        return n.length && n[0].count === 1 ? a = [n[0]] : i.length && i[0].count === 1 ? (a = [i[0]], r = gl(e)) : (a = n.concat(i), a.sort(si), a = a.slice(0, 3), a.some(function(u) {
          return u.species === "class";
        }) ? a.sort(function(u, l) {
          return u.species !== l.species && u.species === "class" ? -1 : u.species === l.species ? 0 : 1;
        }) : r = gl(e)), r += a.reduce(function(u, l) {
          switch (l.species) {
            case "class":
              return u + "." + l.name;
            case "attribute":
              return u + "[" + l.name + "]";
          }
          return u;
        }, "");
      }
      o(Ih, "getThreeLeastCommonFeatures");
      function Ph(e, t, r) {
        if (!w._selectorData)
          throw new Error("Expect axe._selectorData to be set up");
        var a = t.toRoot, n = a === void 0 ? !1 : a, i, u;
        do {
          var l = Mh(e);
          l || (l = Ih(e, w._selectorData), l += Oh(e, l)), i ? i = l + " > " + i : i = l, u ? u = u.filter(function(s) {
            return _r(s, i);
          }) : u = Array.from(r.querySelectorAll(i)), e = e.parentElement;
        } while ((u.length > 1 || n) && e && e.nodeType !== 11);
        return u.length === 1 ? i : i.indexOf(" > ") !== -1 ? ":root" + i.substring(i.indexOf(" > ")) : ":root";
      }
      o(Ph, "generateSelector");
      function ci(e, t) {
        return ui(Ph, e, t);
      }
      o(ci, "_getSelector");
      function bl(e) {
        var t = e.nodeName.toLowerCase(), r = e.parentElement;
        if (!r)
          return t;
        var a = "";
        if (t !== "head" && t !== "body" && r.children.length > 1) {
          var n = Array.prototype.indexOf.call(r.children, e) + 1;
          a = ":nth-child(".concat(n, ")");
        }
        return bl(r) + " > " + t + a;
      }
      o(bl, "generateAncestry");
      function qa(e, t) {
        return ui(bl, e, t);
      }
      o(qa, "_getAncestry");
      function yl(e, t) {
        var r, a;
        if (!e)
          return [];
        if (!t && e.nodeType === 9)
          return t = [{
            str: "html"
          }], t;
        if (t = t || [], e.parentNode && e.parentNode !== e && (t = yl(e.parentNode, t)), e.previousSibling) {
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
          var i = e.getAttribute && ke(e.getAttribute("id"));
          i && e.ownerDocument.querySelectorAll("#" + i).length === 1 && (n.id = e.getAttribute("id")), a > 1 && (n.count = a), t.push(n);
        }
        return t;
      }
      o(yl, "getXPathArray");
      function Lh(e) {
        return e.reduce(function(t, r) {
          return r.id ? "/".concat(r.str, "[@id='").concat(r.id, "']") : t + "/".concat(r.str) + (r.count > 0 ? "[".concat(r.count, "]") : "");
        }, "");
      }
      o(Lh, "xpathToString");
      function Bh(e) {
        var t = yl(e);
        return Lh(t);
      }
      o(Bh, "getXpath");
      var wl = Bh, Yr = {}, qh = {
        set: /* @__PURE__ */ o(function(t, r) {
          jh(t), Yr[t] = r;
        }, "set"),
        get: /* @__PURE__ */ o(function(t, r) {
          if (zh(r), t in Yr)
            return Yr[t];
          if (typeof r == "function") {
            var a = r();
            return he(a !== void 0, "Cache creator function should not return undefined"), this.set(t, a), Yr[t];
          }
        }, "get"),
        clear: /* @__PURE__ */ o(function() {
          Yr = {};
        }, "clear")
      };
      function jh(e) {
        he(typeof e == "string", "key must be a string, " + S(e) + " given"), he(e !== "", "key must not be empty");
      }
      o(jh, "validateKey");
      function zh(e) {
        he(typeof e == "function" || typeof e > "u", "creator must be a function or undefined, " + S(e) + " given");
      }
      o(zh, "validateCreator");
      var le = qh;
      function Vh(e, t) {
        var r = t || e;
        return le.get("nodeMap") ? le.get("nodeMap").get(r) : null;
      }
      o(Vh, "getNodeFromTree");
      var se = Vh, Dl = "DqElm.RunOptions";
      function Hh(e, t) {
        if (t = t || 300, e.length > t) {
          var r = e.indexOf(">");
          e = e.substring(0, r + 1);
        }
        return e;
      }
      o(Hh, "truncate");
      function $h(e) {
        if (!(e != null && e.outerHTML))
          return "";
        var t = e.outerHTML;
        return !t && typeof D.XMLSerializer == "function" && (t = new D.XMLSerializer().serializeToString(e)), Hh(t || "");
      }
      o($h, "getSource");
      function ur(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!a) {
          var i;
          a = (i = le.get(Dl)) !== null && i !== void 0 ? i : {};
        }
        if (this.spec = n, e instanceof He ? (this._virtualNode = e, this._element = e.actualNode) : (this._element = e, this._virtualNode = se(e)), this.fromFrame = ((t = this.spec.selector) === null || t === void 0 ? void 0 : t.length) > 1, this._includeElementInJson = a.elementRef, a.absolutePaths && (this._options = {
          toRoot: !0
        }), this.nodeIndexes = [], Array.isArray(this.spec.nodeIndexes) ? this.nodeIndexes = this.spec.nodeIndexes : typeof ((r = this._virtualNode) === null || r === void 0 ? void 0 : r.nodeIndex) == "number" && (this.nodeIndexes = [this._virtualNode.nodeIndex]), this.source = null, !w._audit.noHtml) {
          var u;
          this.source = (u = this.spec.source) !== null && u !== void 0 ? u : $h(this._element);
        }
      }
      o(ur, "DqElement"), ur.prototype = {
        get selector() {
          return this.spec.selector || [ci(this.element, this._options)];
        },
        get ancestry() {
          return this.spec.ancestry || [qa(this.element)];
        },
        get xpath() {
          return this.spec.xpath || [wl(this.element)];
        },
        get element() {
          return this._element;
        },
        toJSON: /* @__PURE__ */ o(function() {
          var t = {
            selector: this.selector,
            source: this.source,
            xpath: this.xpath,
            ancestry: this.ancestry,
            nodeIndexes: this.nodeIndexes,
            fromFrame: this.fromFrame
          };
          return this._includeElementInJson && (t.element = this._element), t;
        }, "toJSON")
      }, ur.fromFrame = /* @__PURE__ */ o(function(t, r, a) {
        var n = ur.mergeSpecs(t, a);
        return new ur(a.element, r, n);
      }, "fromFrame"), ur.mergeSpecs = /* @__PURE__ */ o(function(t, r) {
        return pe({}, t, {
          selector: [].concat(ae(r.selector), ae(t.selector)),
          ancestry: [].concat(ae(r.ancestry), ae(t.ancestry)),
          xpath: [].concat(ae(r.xpath), ae(t.xpath)),
          nodeIndexes: [].concat(ae(r.nodeIndexes), ae(t.nodeIndexes)),
          fromFrame: !0
        });
      }, "mergeSpecs"), ur.setRunOptions = /* @__PURE__ */ o(function(t) {
        var r = t.elementRef, a = t.absolutePaths;
        le.set(Dl, {
          elementRef: r,
          absolutePaths: a
        });
      }, "setRunOptions");
      var Nt = ur;
      function Uh(e, t, r, a) {
        return {
          isAsync: !1,
          async: /* @__PURE__ */ o(function() {
            return this.isAsync = !0, function(i) {
              i instanceof Error ? a(i) : (e.result = i, r(e));
            };
          }, "async"),
          data: /* @__PURE__ */ o(function(i) {
            e.data = i;
          }, "data"),
          relatedNodes: /* @__PURE__ */ o(function(i) {
            !D.Node || (i instanceof D.Node || i instanceof He ? i = [i] : i = pl(i), e.relatedNodes = [], i.forEach(function(u) {
              if (u instanceof He && (u = u.actualNode), u instanceof D.Node) {
                var l = new Nt(u);
                e.relatedNodes.push(l);
              }
            }));
          }, "relatedNodes")
        };
      }
      o(Uh, "checkHelper");
      var di = Uh;
      function It(e) {
        return fi(e, /* @__PURE__ */ new Map());
      }
      o(It, "_clone");
      function fi(e, t) {
        var r, a;
        if (e === null || S(e) !== "object" || (r = D) !== null && r !== void 0 && r.Node && e instanceof D.Node || (a = D) !== null && a !== void 0 && a.HTMLCollection && e instanceof D.HTMLCollection || "nodeName" in e && "nodeType" in e && "ownerDocument" in e)
          return e;
        if (t.has(e))
          return t.get(e);
        if (Array.isArray(e)) {
          var n = [];
          return t.set(e, n), e.forEach(function(l) {
            n.push(fi(l, t));
          }), n;
        }
        var i = {};
        t.set(e, i);
        for (var u in e)
          i[u] = fi(e[u], t);
        return i;
      }
      o(fi, "cloneRecused");
      var Gh = Et(Gu()), Xr = new Gh.CssSelectorParser();
      Xr.registerSelectorPseudos("not"), Xr.registerSelectorPseudos("is"), Xr.registerNestingOperators(">"), Xr.registerAttrEqualityMods("^", "$", "*", "~");
      var _l = Xr;
      function pi(e, t) {
        var r = ja(t);
        return r.some(function(a) {
          return xr(e, a);
        });
      }
      o(pi, "_matches");
      function Wh(e, t) {
        return e.props.nodeType === 1 && (t.tag === "*" || e.props.nodeName === t.tag);
      }
      o(Wh, "matchesTag");
      function Yh(e, t) {
        return !t.classes || t.classes.every(function(r) {
          return e.hasClass(r.value);
        });
      }
      o(Yh, "matchesClasses");
      function Xh(e, t) {
        return !t.attributes || t.attributes.every(function(r) {
          var a = e.attr(r.key);
          return a !== null && r.test(a);
        });
      }
      o(Xh, "matchesAttributes");
      function Kh(e, t) {
        return !t.id || e.props.id === t.id;
      }
      o(Kh, "matchesId");
      function Zh(e, t) {
        return !!(!t.pseudos || t.pseudos.every(function(r) {
          if (r.name === "not")
            return !r.expressions.some(function(a) {
              return xr(e, a);
            });
          if (r.name === "is")
            return r.expressions.some(function(a) {
              return xr(e, a);
            });
          throw new Error("the pseudo selector " + r.name + " has not yet been implemented");
        }));
      }
      o(Zh, "matchesPseudos");
      function xl(e, t) {
        return Wh(e, t) && Yh(e, t) && Xh(e, t) && Kh(e, t) && Zh(e, t);
      }
      o(xl, "matchExpression");
      var Kr = function() {
        var e = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g, t = "\\";
        return function(r) {
          return r.replace(e, t);
        };
      }(), mi = /\\/g;
      function Jh(e) {
        if (!!e)
          return e.map(function(t) {
            var r = t.name.replace(mi, ""), a = (t.value || "").replace(mi, ""), n, i;
            switch (t.operator) {
              case "^=":
                i = new RegExp("^" + Kr(a));
                break;
              case "$=":
                i = new RegExp(Kr(a) + "$");
                break;
              case "~=":
                i = new RegExp("(^|\\s)" + Kr(a) + "(\\s|$)");
                break;
              case "|=":
                i = new RegExp("^" + Kr(a) + "(-|$)");
                break;
              case "=":
                n = /* @__PURE__ */ o(function(l) {
                  return a === l;
                }, "test");
                break;
              case "*=":
                n = /* @__PURE__ */ o(function(l) {
                  return l && l.includes(a);
                }, "test");
                break;
              case "!=":
                n = /* @__PURE__ */ o(function(l) {
                  return a !== l;
                }, "test");
                break;
              default:
                n = /* @__PURE__ */ o(function(l) {
                  return l !== null;
                }, "test");
            }
            return a === "" && /^[*$^]=$/.test(t.operator) && (n = /* @__PURE__ */ o(function() {
              return !1;
            }, "test")), n || (n = /* @__PURE__ */ o(function(l) {
              return l && i.test(l);
            }, "test")), {
              key: r,
              value: a,
              type: typeof t.value > "u" ? "attrExist" : "attrValue",
              test: n
            };
          });
      }
      o(Jh, "convertAttributes");
      function Qh(e) {
        if (!!e)
          return e.map(function(t) {
            return t = t.replace(mi, ""), {
              value: t,
              regexp: new RegExp("(^|\\s)" + Kr(t) + "(\\s|$)")
            };
          });
      }
      o(Qh, "convertClasses");
      function ev(e) {
        if (!!e)
          return e.map(function(t) {
            var r;
            return ["is", "not"].includes(t.name) && (r = t.value, r = r.selectors ? r.selectors : [r], r = El(r)), {
              name: t.name,
              expressions: r,
              value: t.value
            };
          });
      }
      o(ev, "convertPseudos");
      function El(e) {
        return e.map(function(t) {
          for (var r = [], a = t.rule; a; )
            r.push({
              tag: a.tagName ? a.tagName.toLowerCase() : "*",
              combinator: a.nestingOperator ? a.nestingOperator : " ",
              id: a.id,
              attributes: Jh(a.attrs),
              classes: Qh(a.classNames),
              pseudos: ev(a.pseudos)
            }), a = a.rule;
          return r;
        });
      }
      o(El, "convertExpressions");
      function ja(e) {
        var t = _l.parse(e);
        return t = t.selectors ? t.selectors : [t], El(t);
      }
      o(ja, "_convertSelector");
      function Cl(e, t, r, a) {
        if (!e)
          return !1;
        for (var n = Array.isArray(t), i = n ? t[r] : t, u = xl(e, i); !u && a && e.parent; )
          e = e.parent, u = xl(e, i);
        if (r > 0) {
          if ([" ", ">"].includes(i.combinator) === !1)
            throw new Error("axe.utils.matchesExpression does not support the combinator: " + i.combinator);
          u = u && Cl(e.parent, t, r - 1, i.combinator === " ");
        }
        return u;
      }
      o(Cl, "optimizedMatchesExpression");
      function xr(e, t, r) {
        return Cl(e, t, t.length - 1, r);
      }
      o(xr, "_matchesExpression");
      function tv(e, t) {
        for (; e; ) {
          if (pi(e, t))
            return e;
          if (typeof e.parent > "u")
            throw new TypeError("Cannot resolve parent for non-DOM nodes");
          e = e.parent;
        }
        return null;
      }
      o(tv, "closest");
      var it = tv;
      function za() {
      }
      o(za, "noop");
      function hi(e) {
        if (typeof e != "function")
          throw new TypeError("Queue methods require functions as arguments");
      }
      o(hi, "funcGuard");
      function rv() {
        var e = [], t = 0, r = 0, a = za, n = !1, i, u = /* @__PURE__ */ o(function(m) {
          i = m, setTimeout(function() {
            i != null && or("Uncaught error (of queue)", i);
          }, 1);
        }, "defaultFail"), l = u;
        function s(p) {
          return function(m) {
            e[p] = m, r -= 1, !r && a !== za && (n = !0, a(e));
          };
        }
        o(s, "createResolve");
        function c(p) {
          return a = za, l(p), e;
        }
        o(c, "abort");
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
        o(d, "pop");
        var f = {
          defer: /* @__PURE__ */ o(function(m) {
            if (S(m) === "object" && m.then && m.catch) {
              var h = m;
              m = /* @__PURE__ */ o(function(b, g) {
                h.then(b).catch(g);
              }, "fn");
            }
            if (hi(m), i === void 0) {
              if (n)
                throw new Error("Queue already completed");
              return e.push(m), ++r, d(), f;
            }
          }, "defer"),
          then: /* @__PURE__ */ o(function(m) {
            if (hi(m), a !== za)
              throw new Error("queue `then` already set");
            return i || (a = m, r || (n = !0, a(e))), f;
          }, "then"),
          catch: /* @__PURE__ */ o(function(m) {
            if (hi(m), l !== u)
              throw new Error("queue `catch` already set");
            return i ? (m(i), i = null) : l = m, f;
          }, "_catch"),
          abort: c
        };
        return f;
      }
      o(rv, "queue");
      var Ct = rv, Er, Cr, vi = D.crypto || D.msCrypto;
      !Cr && vi && vi.getRandomValues && (gi = new Uint8Array(16), Cr = /* @__PURE__ */ o(function() {
        return vi.getRandomValues(gi), gi;
      }, "whatwgRNG"));
      var gi;
      Cr || (bi = new Array(16), Cr = /* @__PURE__ */ o(function() {
        for (var t = 0, r; t < 16; t++)
          (t & 3) === 0 && (r = Math.random() * 4294967296), bi[t] = r >>> ((t & 3) << 3) & 255;
        return bi;
      }, "_rng"));
      for (var bi, Al = typeof D.Buffer == "function" ? D.Buffer : Array, yi = [], Fl = {}, Ar = 0; Ar < 256; Ar++)
        yi[Ar] = (Ar + 256).toString(16).substr(1), Fl[yi[Ar]] = Ar;
      function av(e, t, r) {
        var a = t && r || 0, n = 0;
        for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(i) {
          n < 16 && (t[a + n++] = Fl[i]);
        }); n < 16; )
          t[a + n++] = 0;
        return t;
      }
      o(av, "parse");
      function wi(e, t) {
        var r = t || 0, a = yi;
        return a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]];
      }
      o(wi, "unparse");
      var zt = Cr(), nv = [zt[0] | 1, zt[1], zt[2], zt[3], zt[4], zt[5]], Tl = (zt[6] << 8 | zt[7]) & 16383, Di = 0, _i = 0;
      function Rl(e, t, r) {
        var a = t && r || 0, n = t || [];
        e = e || {};
        var i = e.clockseq != null ? e.clockseq : Tl, u = e.msecs != null ? e.msecs : new Date().getTime(), l = e.nsecs != null ? e.nsecs : _i + 1, s = u - Di + (l - _i) / 1e4;
        if (s < 0 && e.clockseq == null && (i = i + 1 & 16383), (s < 0 || u > Di) && e.nsecs == null && (l = 0), l >= 1e4)
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        Di = u, _i = l, Tl = i, u += 122192928e5;
        var c = ((u & 268435455) * 1e4 + l) % 4294967296;
        n[a++] = c >>> 24 & 255, n[a++] = c >>> 16 & 255, n[a++] = c >>> 8 & 255, n[a++] = c & 255;
        var d = u / 4294967296 * 1e4 & 268435455;
        n[a++] = d >>> 8 & 255, n[a++] = d & 255, n[a++] = d >>> 24 & 15 | 16, n[a++] = d >>> 16 & 255, n[a++] = i >>> 8 | 128, n[a++] = i & 255;
        for (var f = e.node || nv, p = 0; p < 6; p++)
          n[a + p] = f[p];
        return t || wi(n);
      }
      o(Rl, "v1");
      function lr(e, t, r) {
        var a = t && r || 0;
        typeof e == "string" && (t = e == "binary" ? new Al(16) : null, e = null), e = e || {};
        var n = e.random || (e.rng || Cr)();
        if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t)
          for (var i = 0; i < 16; i++)
            t[a + i] = n[i];
        return t || wi(n);
      }
      o(lr, "v4"), Er = lr, Er.v1 = Rl, Er.v4 = lr, Er.parse = av, Er.unparse = wi, Er.BufferClass = Al, w._uuid = Rl();
      var iv = lr, ov = Object.freeze(["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
      function uv(e) {
        var t = e.topic, r = e.channelId, a = e.message, n = e.messageId, i = e.keepalive, u = {
          channelId: r,
          topic: t,
          messageId: n,
          keepalive: !!i,
          source: kl()
        };
        return a instanceof Error ? u.error = {
          name: a.name,
          message: a.message,
          stack: a.stack
        } : u.payload = a, JSON.stringify(u);
      }
      o(uv, "stringifyMessage");
      function lv(e) {
        var t;
        try {
          t = JSON.parse(e);
        } catch {
          return;
        }
        if (!!sv(t)) {
          var r = t, a = r.topic, n = r.channelId, i = r.messageId, u = r.keepalive, l = S(t.error) === "object" ? cv(t.error) : t.payload;
          return {
            topic: a,
            message: l,
            messageId: i,
            channelId: n,
            keepalive: !!u
          };
        }
      }
      o(lv, "parseMessage");
      function sv(e) {
        return e !== null && S(e) === "object" && typeof e.channelId == "string" && e.source === kl();
      }
      o(sv, "isRespondableMessage");
      function cv(e) {
        var t = e.message || "Unknown error occurred", r = ov.includes(e.name) ? e.name : "Error", a = D[r] || Error;
        return e.stack && (t += `
` + e.stack.replace(e.message, "")), new a(t);
      }
      o(cv, "buildErrorObject");
      function kl() {
        var e = "axeAPI", t = "";
        return typeof w < "u" && w._audit && w._audit.application && (e = w._audit.application), typeof w < "u" && (t = w.version), e + "." + t;
      }
      o(kl, "getSource2");
      function xi(e) {
        Ol(e), he(D.parent === e, "Source of the response must be the parent window.");
      }
      o(xi, "assertIsParentWindow");
      function Sl(e) {
        Ol(e), he(e.parent === D, "Respondable target must be a frame in the current window");
      }
      o(Sl, "assertIsFrameWindow");
      function Ol(e) {
        he(D !== e, "Messages can not be sent to the same window.");
      }
      o(Ol, "assetNotGlobalWindow");
      var Va = {};
      function dv(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        he(!Va[e], "A replyHandler already exists for this message channel."), Va[e] = {
          replyHandler: t,
          sendToParent: r
        };
      }
      o(dv, "storeReplyHandler");
      function fv(e) {
        return Va[e];
      }
      o(fv, "getReplyHandler");
      function pv(e) {
        delete Va[e];
      }
      o(pv, "deleteReplyHandler");
      var Ha = [];
      function Ei() {
        var e = "".concat(lr(), ":").concat(lr());
        return Ha.includes(e) ? Ei() : (Ha.push(e), e);
      }
      o(Ei, "createMessageId");
      function mv(e) {
        return Ha.includes(e) ? !1 : (Ha.push(e), !0);
      }
      o(mv, "isNewMessage");
      function Ci(e, t, r, a) {
        if (r ? xi(e) : Sl(e), t.message instanceof Error && !r)
          return w.log(t.message), !1;
        var n = uv(pe({
          messageId: Ei()
        }, t)), i = w._audit.allowedOrigins;
        return !i || !i.length ? !1 : (typeof a == "function" && dv(t.channelId, a, r), i.forEach(function(u) {
          try {
            e.postMessage(n, u);
          } catch (l) {
            throw l instanceof e.DOMException ? new Error('allowedOrigins value "'.concat(u, '" is not a valid origin')) : l;
          }
        }), !0);
      }
      o(Ci, "postMessage");
      function hv(e, t, r) {
        if (!e.parent !== D)
          return w.log(t);
        try {
          Ci(e, {
            topic: null,
            channelId: r,
            message: t,
            messageId: Ei(),
            keepalive: !0
          }, !0);
        } catch (a) {
          return w.log(a);
        }
      }
      o(hv, "processError");
      function Ml(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        return /* @__PURE__ */ o(function(n, i, u) {
          var l = {
            channelId: t,
            message: n,
            keepalive: i
          };
          Ci(e, l, r, u);
        }, "respond");
      }
      o(Ml, "createResponder");
      function vv(e) {
        var t = w._audit.allowedOrigins;
        return t && t.includes("*") || t.includes(e);
      }
      o(vv, "originIsAllowed");
      function gv(e, t) {
        var r = e.origin, a = e.data, n = e.source;
        try {
          var i = lv(a) || {}, u = i.channelId, l = i.message, s = i.messageId;
          if (!vv(r) || !mv(s))
            return;
          if (l instanceof Error && n.parent !== D)
            return w.log(l), !1;
          try {
            if (i.topic) {
              var c = Ml(n, u);
              xi(n), t(i, c);
            } else
              bv(n, i);
          } catch (d) {
            hv(n, d, u);
          }
        } catch (d) {
          return w.log(d), !1;
        }
      }
      o(gv, "messageHandler");
      function bv(e, t) {
        var r = t.channelId, a = t.message, n = t.keepalive, i = fv(r) || {}, u = i.replyHandler, l = i.sendToParent;
        if (!!u) {
          l ? xi(e) : Sl(e);
          var s = Ml(e, r, l);
          !n && r && pv(r);
          try {
            u(a, n, s);
          } catch (c) {
            w.log(c), s(c, n);
          }
        }
      }
      o(bv, "callReplyHandler");
      var yv = {
        open: /* @__PURE__ */ o(function(t) {
          if (typeof D.addEventListener == "function") {
            var r = /* @__PURE__ */ o(function(n) {
              gv(n, t);
            }, "handler");
            return D.addEventListener("message", r, !1), function() {
              D.removeEventListener("message", r, !1);
            };
          }
        }, "open"),
        post: /* @__PURE__ */ o(function(t, r, a) {
          return typeof D.addEventListener != "function" ? !1 : Ci(t, r, !1, a);
        }, "post")
      };
      function Nl(e) {
        e.updateMessenger(yv);
      }
      o(Nl, "setDefaultFrameMessenger");
      var $a, Il, Ai = {};
      function yt(e, t, r, a, n) {
        var i = {
          topic: t,
          message: r,
          channelId: "".concat(lr(), ":").concat(lr()),
          keepalive: a
        };
        return Il(e, i, n);
      }
      o(yt, "_respondable");
      function wv(e, t) {
        var r = e.topic, a = e.message, n = e.keepalive, i = Ai[r];
        if (!!i)
          try {
            i(a, n, t);
          } catch (u) {
            w.log(u), t(u, n);
          }
      }
      o(wv, "messageListener"), yt.updateMessenger = /* @__PURE__ */ o(function(t) {
        var r = t.open, a = t.post;
        he(typeof r == "function", "open callback must be a function"), he(typeof a == "function", "post callback must be a function"), $a && $a();
        var n = r(wv);
        n ? (he(typeof n == "function", "open callback must return a cleanup function"), $a = n) : $a = null, Il = a;
      }, "updateMessenger"), yt.subscribe = /* @__PURE__ */ o(function(t, r) {
        he(typeof r == "function", "Subscriber callback must be a function"), he(!Ai[t], "Topic ".concat(t, " is already registered to.")), Ai[t] = r;
      }, "subscribe"), yt.isInFrame = /* @__PURE__ */ o(function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D;
        return !!t.frameElement;
      }, "isInFrame"), Nl(yt);
      function Pl(e, t, r, a) {
        var n, i, u = e.contentWindow, l = (n = (i = t.options) === null || i === void 0 ? void 0 : i.pingWaitTime) !== null && n !== void 0 ? n : 500;
        if (!u) {
          or("Frame does not have a content window", e), r(null);
          return;
        }
        if (l === 0) {
          Ll(e, t, r, a);
          return;
        }
        var s = setTimeout(function() {
          s = setTimeout(function() {
            t.debug ? a(Bl("No response from frame", e)) : r(null);
          }, 0);
        }, l);
        yt(u, "axe.ping", null, void 0, function() {
          clearTimeout(s), Ll(e, t, r, a);
        });
      }
      o(Pl, "_sendCommandToFrame");
      function Ll(e, t, r, a) {
        var n, i, u = (n = (i = t.options) === null || i === void 0 ? void 0 : i.frameWaitTime) !== null && n !== void 0 ? n : 6e4, l = e.contentWindow, s = setTimeout(/* @__PURE__ */ o(function() {
          a(Bl("Axe in frame timed out", e));
        }, "collectResultFramesTimeout"), u);
        yt(l, "axe.start", t, void 0, function(c) {
          clearTimeout(s), c instanceof Error ? a(c) : r(c);
        });
      }
      o(Ll, "callAxeStart");
      function Bl(e, t) {
        var r;
        return w._tree && (r = ci(t)), new Error(e + ": " + (r || t));
      }
      o(Bl, "err");
      var Zr = null, Jr = {
        update: /* @__PURE__ */ o(function(t) {
          he(S(t) === "object", "serializer must be an object"), Zr = t;
        }, "update"),
        toSpec: /* @__PURE__ */ o(function(t) {
          return Jr.dqElmToSpec(new Nt(t));
        }, "toSpec"),
        dqElmToSpec: /* @__PURE__ */ o(function(t, r) {
          var a;
          return t instanceof Nt ? (r && (t = Dv(t, r)), typeof ((a = Zr) === null || a === void 0 ? void 0 : a.toSpec) == "function" ? Zr.toSpec(t) : t.toJSON()) : t;
        }, "dqElmToSpec"),
        mergeSpecs: /* @__PURE__ */ o(function(t, r) {
          var a;
          return typeof ((a = Zr) === null || a === void 0 ? void 0 : a.mergeSpecs) == "function" ? Zr.mergeSpecs(t, r) : Nt.mergeSpecs(t, r);
        }, "mergeSpecs"),
        mapRawResults: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return pe({}, r, {
              nodes: Jr.mapRawNodeResults(r.nodes)
            });
          });
        }, "mapRawResults"),
        mapRawNodeResults: /* @__PURE__ */ o(function(t) {
          return t?.map(function(r) {
            var a = r.node, n = Le(r, Bf);
            n.node = Jr.dqElmToSpec(a);
            for (var i = 0, u = ["any", "all", "none"]; i < u.length; i++) {
              var l = u[i];
              n[l] = n[l].map(function(s) {
                var c = s.relatedNodes, d = Le(s, qf);
                return d.relatedNodes = c.map(Jr.dqElmToSpec), d;
              });
            }
            return n;
          });
        }, "mapRawNodeResults")
      }, pt = Jr;
      function Dv(e, t) {
        var r = e.fromFrame, a = t.ancestry, n = t.xpath, i = t.selectors !== !1 || r;
        return e = new Nt(e.element, t, {
          source: e.source,
          nodeIndexes: e.nodeIndexes,
          selector: i ? e.selector : [":root"],
          ancestry: a ? e.ancestry : [":root"],
          xpath: n ? e.xpath : "/"
        }), e.fromFrame = r, e;
      }
      o(Dv, "cloneLimitedDqElement");
      function _v(e) {
        var t = [];
        return t.concat(e.any || []).concat(e.all || []).concat(e.none || []);
      }
      o(_v, "getAllChecks");
      var Ua = _v;
      function xv(e, t, r) {
        if (Array.isArray(e))
          return e.find(function(a) {
            return a !== null && S(a) === "object" && Object.hasOwn(a, t) && a[t] === r;
          });
      }
      o(xv, "findBy");
      var Qr = xv;
      function Ev(e, t, r) {
        e.forEach(function(a) {
          a.node = pt.mergeSpecs(a.node, r);
          var n = Ua(a);
          n.forEach(function(i) {
            i.relatedNodes = i.relatedNodes.map(function(u) {
              return pt.mergeSpecs(u, r);
            });
          });
        });
      }
      o(Ev, "pushFrame");
      function Cv(e, t) {
        for (var r = t[0].node, a = 0; a < e.length; a++) {
          var n = e[a].node, i = ql(n.nodeIndexes, r.nodeIndexes);
          if (i > 0 || i === 0 && r.selector.length < n.selector.length) {
            e.splice.apply(e, [a, 0].concat(ae(t)));
            return;
          }
        }
        e.push.apply(e, ae(t));
      }
      o(Cv, "spliceNodes");
      function Av(e) {
        return !e || !e.results ? null : Array.isArray(e.results) ? e.results.length ? e.results : null : [e.results];
      }
      o(Av, "normalizeResult");
      function Fv(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = Av(a);
          if (!(!n || !n.length)) {
            var i = Tv(a);
            n.forEach(function(u) {
              u.nodes && i && Ev(u.nodes, t, i);
              var l = Qr(r, "id", u.id);
              l ? u.nodes.length && Cv(l.nodes, u.nodes) : r.push(u);
            });
          }
        }), r.forEach(function(a) {
          a.nodes && a.nodes.sort(function(n, i) {
            return ql(n.node.nodeIndexes, i.node.nodeIndexes);
          });
        }), r;
      }
      o(Fv, "mergeResults");
      function ql() {
        for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = Math.max(e?.length, t?.length), a = 0; a < r; a++) {
          var n = e?.[a], i = t?.[a];
          if (typeof n != "number" || isNaN(n))
            return a === 0 ? 1 : -1;
          if (typeof i != "number" || isNaN(i))
            return a === 0 ? -1 : 1;
          if (n !== i)
            return n - i;
        }
        return 0;
      }
      o(ql, "nodeIndexSort");
      var Ga = Fv;
      function Tv(e) {
        return e.frameElement ? pt.toSpec(e.frameElement) : e.frameSpec ? e.frameSpec : null;
      }
      o(Tv, "getFrameSpec");
      function jl(e, t, r, a, n, i) {
        t = pe({}, t, {
          elementRef: !1
        });
        var u = Ct(), l = e.frames;
        l.forEach(function(s) {
          var c = s.node, d = Le(s, jf);
          u.defer(function(f, p) {
            var m = {
              options: t,
              command: r,
              parameter: a,
              context: d
            };
            function h(v) {
              return f(v ? {
                results: v,
                frameElement: c
              } : null);
            }
            o(h, "callback"), Pl(c, m, h, p);
          });
        }), u.then(function(s) {
          n(Ga(s, t));
        }).catch(i);
      }
      o(jl, "_collectResultsFromFrames");
      function sr(e, t) {
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
      o(sr, "_contains");
      function zl() {
        for (var e = {}, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
          r[a] = arguments[a];
        return r.forEach(function(n) {
          if (!(!n || S(n) !== "object" || Array.isArray(n)))
            for (var i = 0, u = Object.keys(n); i < u.length; i++) {
              var l = u[i];
              !e.hasOwnProperty(l) || S(n[l]) !== "object" || Array.isArray(e[l]) ? e[l] = n[l] : e[l] = zl(e[l], n[l]);
            }
        }), e;
      }
      o(zl, "deepMerge");
      var Fi = zl;
      function Rv(e, t) {
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
      o(Rv, "extendMetaData");
      var Ti = Rv, kv = ["article", "aside", "blockquote", "body", "div", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "main", "nav", "p", "section", "span"];
      function Sv(e) {
        if (e.shadowRoot) {
          var t = e.nodeName.toLowerCase();
          if (kv.includes(t) || /^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))
            return !0;
        }
        return !1;
      }
      o(Sv, "isShadowRoot");
      var Wa = Sv, Ri = {};
      gt(Ri, {
        createGrid: /* @__PURE__ */ o(function() {
          return dr;
        }, "createGrid"),
        findElmsInContext: /* @__PURE__ */ o(function() {
          return Vl;
        }, "findElmsInContext"),
        findNearbyElms: /* @__PURE__ */ o(function() {
          return tn;
        }, "findNearbyElms"),
        findUp: /* @__PURE__ */ o(function() {
          return Tr;
        }, "findUp"),
        findUpVirtual: /* @__PURE__ */ o(function() {
          return Fr;
        }, "findUpVirtual"),
        focusDisabled: /* @__PURE__ */ o(function() {
          return Bi;
        }, "focusDisabled"),
        getComposedParent: /* @__PURE__ */ o(function() {
          return $e;
        }, "getComposedParent"),
        getElementByReference: /* @__PURE__ */ o(function() {
          return ji;
        }, "getElementByReference"),
        getElementCoordinates: /* @__PURE__ */ o(function() {
          return Si;
        }, "getElementCoordinates"),
        getElementStack: /* @__PURE__ */ o(function() {
          return _s;
        }, "getElementStack"),
        getModalDialog: /* @__PURE__ */ o(function() {
          return gs;
        }, "getModalDialog"),
        getOverflowHiddenAncestors: /* @__PURE__ */ o(function() {
          return Ya;
        }, "getOverflowHiddenAncestors"),
        getRootNode: /* @__PURE__ */ o(function() {
          return Ye;
        }, "getRootNode"),
        getScrollOffset: /* @__PURE__ */ o(function() {
          return ns;
        }, "getScrollOffset"),
        getTabbableElements: /* @__PURE__ */ o(function() {
          return xs;
        }, "getTabbableElements"),
        getTargetRects: /* @__PURE__ */ o(function() {
          return an;
        }, "getTargetRects"),
        getTargetSize: /* @__PURE__ */ o(function() {
          return Es;
        }, "getTargetSize"),
        getTextElementStack: /* @__PURE__ */ o(function() {
          return no;
        }, "getTextElementStack"),
        getViewportSize: /* @__PURE__ */ o(function() {
          return Xa;
        }, "getViewportSize"),
        getVisibleChildTextRects: /* @__PURE__ */ o(function() {
          return ao;
        }, "getVisibleChildTextRects"),
        hasContent: /* @__PURE__ */ o(function() {
          return cn;
        }, "hasContent"),
        hasContentVirtual: /* @__PURE__ */ o(function() {
          return la;
        }, "hasContentVirtual"),
        hasLangText: /* @__PURE__ */ o(function() {
          return oo;
        }, "hasLangText"),
        idrefs: /* @__PURE__ */ o(function() {
          return At;
        }, "idrefs"),
        insertedIntoFocusOrder: /* @__PURE__ */ o(function() {
          return pc;
        }, "insertedIntoFocusOrder"),
        isCurrentPageLink: /* @__PURE__ */ o(function() {
          return qi;
        }, "isCurrentPageLink"),
        isFocusable: /* @__PURE__ */ o(function() {
          return Se;
        }, "isFocusable"),
        isHTML5: /* @__PURE__ */ o(function() {
          return vc;
        }, "isHTML5"),
        isHiddenForEveryone: /* @__PURE__ */ o(function() {
          return Vt;
        }, "isHiddenForEveryone"),
        isHiddenWithCSS: /* @__PURE__ */ o(function() {
          return ey;
        }, "isHiddenWithCSS"),
        isInTabOrder: /* @__PURE__ */ o(function() {
          return wt;
        }, "isInTabOrder"),
        isInTextBlock: /* @__PURE__ */ o(function() {
          return uo;
        }, "isInTextBlock"),
        isInert: /* @__PURE__ */ o(function() {
          return rn;
        }, "isInert"),
        isModalOpen: /* @__PURE__ */ o(function() {
          return sa;
        }, "isModalOpen"),
        isMultiline: /* @__PURE__ */ o(function() {
          return yc;
        }, "isMultiline"),
        isNativelyFocusable: /* @__PURE__ */ o(function() {
          return Hi;
        }, "isNativelyFocusable"),
        isNode: /* @__PURE__ */ o(function() {
          return ly;
        }, "isNode"),
        isOffscreen: /* @__PURE__ */ o(function() {
          return Ka;
        }, "isOffscreen"),
        isOpaque: /* @__PURE__ */ o(function() {
          return a2;
        }, "isOpaque"),
        isSkipLink: /* @__PURE__ */ o(function() {
          return So;
        }, "isSkipLink"),
        isVisible: /* @__PURE__ */ o(function() {
          return s2;
        }, "isVisible"),
        isVisibleOnScreen: /* @__PURE__ */ o(function() {
          return ot;
        }, "isVisibleOnScreen"),
        isVisibleToScreenReaders: /* @__PURE__ */ o(function() {
          return Te;
        }, "isVisibleToScreenReaders"),
        isVisualContent: /* @__PURE__ */ o(function() {
          return io;
        }, "isVisualContent"),
        reduceToElementsBelowFloating: /* @__PURE__ */ o(function() {
          return Rd;
        }, "reduceToElementsBelowFloating"),
        shadowElementsFromPoint: /* @__PURE__ */ o(function() {
          return f2;
        }, "shadowElementsFromPoint"),
        urlPropsFromAttribute: /* @__PURE__ */ o(function() {
          return b2;
        }, "urlPropsFromAttribute"),
        visuallyContains: /* @__PURE__ */ o(function() {
          return kd;
        }, "visuallyContains"),
        visuallyOverlaps: /* @__PURE__ */ o(function() {
          return Oo;
        }, "visuallyOverlaps"),
        visuallySort: /* @__PURE__ */ o(function() {
          return zi;
        }, "visuallySort")
      });
      function Ov(e) {
        var t = e.getRootNode && e.getRootNode() || N;
        return t === e && (t = N), t;
      }
      o(Ov, "getRootNode");
      var ea = Ov, Ye = ea;
      function Mv(e) {
        var t = e.context, r = e.value, a = e.attr, n = e.elm, i = n === void 0 ? "" : n, u, l = ke(r);
        return t.nodeType === 9 || t.nodeType === 11 ? u = t : u = Ye(t), Array.from(u.querySelectorAll(i + "[" + a + "=" + l + "]"));
      }
      o(Mv, "findElmsInContext");
      var Vl = Mv;
      function Nv(e, t) {
        var r;
        if (r = e.actualNode, !e.shadowId && typeof e.actualNode.closest == "function") {
          var a = e.actualNode.closest(t);
          return a || null;
        }
        do
          r = r.assignedSlot ? r.assignedSlot : r.parentNode, r && r.nodeType === 11 && (r = r.host);
        while (r && !_r(r, t) && r !== N.documentElement);
        return !r || !_r(r, t) ? null : r;
      }
      o(Nv, "findUpVirtual");
      var Fr = Nv;
      function Iv(e, t) {
        return Fr(se(e), t);
      }
      o(Iv, "findUp");
      var Tr = Iv;
      function Hl(e, t) {
        return (e.left | 0) < (t.right | 0) && (e.right | 0) > (t.left | 0) && (e.top | 0) < (t.bottom | 0) && (e.bottom | 0) > (t.top | 0);
      }
      o(Hl, "_rectsOverlap");
      var $l = Be(/* @__PURE__ */ o(function(t) {
        var r = [];
        if (!t)
          return r;
        var a = t.getComputedStylePropertyValue("overflow");
        return a === "hidden" && r.push(t), r.concat($l(t.parent));
      }, "getOverflowHiddenAncestorsMemoized")), Ya = $l, Pv = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, Lv = /(\w+)\((\d+)/;
      function Ul(e) {
        return ["style", "script", "noscript", "template"].includes(e.props.nodeName);
      }
      o(Ul, "nativelyHidden");
      function Gl(e) {
        return e.props.nodeName === "area" ? !1 : e.getComputedStylePropertyValue("display") === "none";
      }
      o(Gl, "displayHidden");
      function Wl(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !r && ["hidden", "collapse"].includes(e.getComputedStylePropertyValue("visibility"));
      }
      o(Wl, "visibilityHidden");
      function Yl(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !!r && e.getComputedStylePropertyValue("content-visibility") === "hidden";
      }
      o(Yl, "contentVisibiltyHidden");
      function Xl(e) {
        return e.attr("aria-hidden") === "true";
      }
      o(Xl, "ariaHidden");
      function Kl(e) {
        return e.getComputedStylePropertyValue("opacity") === "0";
      }
      o(Kl, "opacityHidden");
      function Zl(e) {
        var t = Bt(e.actualNode), r = parseInt(e.getComputedStylePropertyValue("height")), a = parseInt(e.getComputedStylePropertyValue("width"));
        return !!t && (r === 0 || a === 0);
      }
      o(Zl, "scrollHidden");
      function Jl(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        var a = e.boundingClientRect, n = Ya(e);
        return n.length ? n.some(function(i) {
          var u = i.boundingClientRect;
          return u.width < 2 || u.height < 2 ? !0 : !Hl(a, u);
        }) : !1;
      }
      o(Jl, "overflowHidden");
      function Ql(e) {
        var t = e.getComputedStylePropertyValue("clip").match(Pv), r = e.getComputedStylePropertyValue("clip-path").match(Lv);
        if (t && t.length === 5) {
          var a = e.getComputedStylePropertyValue("position");
          if (["fixed", "absolute"].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1], i = parseInt(r[2], 10);
          switch (n) {
            case "inset":
              return i >= 50;
            case "circle":
              return i === 0;
          }
        }
        return !1;
      }
      o(Ql, "clipHidden");
      function ki(e, t) {
        var r = it(e, "map");
        if (!r)
          return !0;
        var a = r.attr("name");
        if (!a)
          return !0;
        var n = ea(e.actualNode);
        if (!n || n.nodeType !== 9)
          return !0;
        var i = dt(w._tree, 'img[usemap="#'.concat(ke(a), '"]'));
        return !i || !i.length ? !0 : i.some(function(u) {
          return !t(u);
        });
      }
      o(ki, "areaHidden");
      function es(e) {
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
      o(es, "detailsHidden");
      var Bv = [Gl, Wl, Yl, es];
      function Vt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipAncestors, a = t.isAncestor, n = a === void 0 ? !1 : a;
        return e = _e(e).vNode, r ? ts(e, n) : rs(e, n);
      }
      o(Vt, "_isHiddenForEveryone");
      var ts = Be(/* @__PURE__ */ o(function(t, r) {
        return Ul(t) ? !0 : t.actualNode ? !!(Bv.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) || !t.actualNode.isConnected) : !1;
      }, "isHiddenSelfMemoized")), rs = Be(/* @__PURE__ */ o(function(t, r) {
        return ts(t, r) ? !0 : t.parent ? rs(t.parent, !0) : !1;
      }, "isHiddenAncestorsMemoized"));
      function as(e) {
        if (e.assignedSlot)
          return as(e.assignedSlot);
        if (e.parentNode) {
          var t = e.parentNode;
          if (t.nodeType === 1)
            return t;
          if (t.host)
            return t.host;
        }
        return null;
      }
      o(as, "getComposedParent");
      var $e = as;
      function qv(e) {
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
      o(qv, "getScrollOffset");
      var ns = qv;
      function jv(e) {
        var t = ns(N), r = t.left, a = t.top, n = e.getBoundingClientRect();
        return {
          top: n.top + a,
          right: n.right + r,
          bottom: n.bottom + a,
          left: n.left + r,
          width: n.right - n.left,
          height: n.bottom - n.top
        };
      }
      o(jv, "getElementCoordinates");
      var Si = jv;
      function zv(e) {
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
      o(zv, "getViewportSize");
      var Xa = zv;
      function Vv(e, t) {
        for (e = $e(e); e && e.nodeName.toLowerCase() !== "html"; ) {
          if (e.scrollTop && (t += e.scrollTop, t >= 0))
            return !1;
          e = $e(e);
        }
        return !0;
      }
      o(Vv, "noParentScrolled");
      function Hv(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        var a = _e(e), n = a.domNode;
        if (!!n) {
          var i, u = N.documentElement, l = D.getComputedStyle(n), s = D.getComputedStyle(N.body || u).getPropertyValue("direction"), c = Si(n);
          if (c.bottom < 0 && (Vv(n, c.bottom) || l.position === "absolute"))
            return !0;
          if (c.left === 0 && c.right === 0)
            return !1;
          if (s === "ltr") {
            if (c.right <= 0)
              return !0;
          } else if (i = Math.max(u.scrollWidth, Xa(D).width), c.left >= i)
            return !0;
          return !1;
        }
      }
      o(Hv, "isOffscreen");
      var Ka = Hv, $v = [Kl, Zl, Jl, Ql, Ka];
      function ot(e) {
        return e = _e(e).vNode, Oi(e);
      }
      o(ot, "_isVisibleOnScreen");
      var Oi = Be(/* @__PURE__ */ o(function(t, r) {
        return t.actualNode && t.props.nodeName === "area" ? !ki(t, Oi) : Vt(t, {
          skipAncestors: !0,
          isAncestor: r
        }) || t.actualNode && $v.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) ? !1 : t.parent ? Oi(t.parent, !0) : !0;
      }, "isVisibleOnScreenMemoized"));
      function Za(e, t) {
        var r = Math.min(e.top, t.top), a = Math.max(e.right, t.right), n = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left);
        return new D.DOMRect(i, r, a - i, n - r);
      }
      o(Za, "_getBoundingRect");
      function Ja(e, t) {
        var r = e.x, a = e.y, n = t.top, i = t.right, u = t.bottom, l = t.left;
        return a >= n && r <= i && a <= u && r >= l;
      }
      o(Ja, "_isPointInRect");
      var is = {};
      gt(is, {
        getBoundingRect: /* @__PURE__ */ o(function() {
          return Za;
        }, "getBoundingRect"),
        getIntersectionRect: /* @__PURE__ */ o(function() {
          return Qa;
        }, "getIntersectionRect"),
        getOffset: /* @__PURE__ */ o(function() {
          return us;
        }, "getOffset"),
        getRectCenter: /* @__PURE__ */ o(function() {
          return ta;
        }, "getRectCenter"),
        hasVisualOverlap: /* @__PURE__ */ o(function() {
          return Mi;
        }, "hasVisualOverlap"),
        isPointInRect: /* @__PURE__ */ o(function() {
          return Ja;
        }, "isPointInRect"),
        rectHasMinimumSize: /* @__PURE__ */ o(function() {
          return cr;
        }, "rectHasMinimumSize"),
        rectsOverlap: /* @__PURE__ */ o(function() {
          return Hl;
        }, "rectsOverlap"),
        splitRects: /* @__PURE__ */ o(function() {
          return Ni;
        }, "splitRects")
      });
      function Qa(e, t) {
        var r = Math.max(e.left, t.left), a = Math.min(e.right, t.right), n = Math.max(e.top, t.top), i = Math.min(e.bottom, t.bottom);
        return r >= a || n >= i ? null : new D.DOMRect(r, n, a - r, i - n);
      }
      o(Qa, "_getIntersectionRect");
      function ta(e) {
        var t = e.left, r = e.top, a = e.width, n = e.height;
        return new D.DOMPoint(t + a / 2, r + n / 2);
      }
      o(ta, "_getRectCenter");
      var os = 0.05;
      function cr(e, t) {
        var r = t.width, a = t.height;
        return r + os >= e && a + os >= e;
      }
      o(cr, "_rectHasMinimumSize");
      function us(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 12, a = an(e), n = an(t);
        if (!a.length || !n.length)
          return 0;
        var i = a.reduce(Za), u = ta(i), l = 1 / 0, s = Fe(n), c;
        try {
          for (s.s(); !(c = s.n()).done; ) {
            var d = c.value;
            if (Ja(u, d))
              return 0;
            var f = Uv(u, d), p = ls(u, f);
            l = Math.min(l, p);
          }
        } catch (g) {
          s.e(g);
        } finally {
          s.f();
        }
        var m = Es(t);
        if (cr(r * 2, m))
          return l;
        var h = n.reduce(Za), v = ta(h), b = ls(u, v) - r;
        return Math.max(0, Math.min(l, b));
      }
      o(us, "_getOffset");
      function Uv(e, t) {
        var r, a;
        return e.x < t.left ? r = t.left : e.x > t.right ? r = t.right : r = e.x, e.y < t.top ? a = t.top : e.y > t.bottom ? a = t.bottom : a = e.y, {
          x: r,
          y: a
        };
      }
      o(Uv, "getClosestPoint");
      function ls(e, t) {
        return Math.hypot(e.x - t.x, e.y - t.y);
      }
      o(ls, "pointDistance");
      function Mi(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.left >= a.right || r.right <= a.left || r.top >= a.bottom || r.bottom <= a.top ? !1 : zi(e, t) > 0;
      }
      o(Mi, "_hasVisualOverlap");
      function Ni(e, t) {
        var r = [e], a = Fe(t), n;
        try {
          var i = /* @__PURE__ */ o(function() {
            var l = n.value;
            r = r.reduce(function(s, c) {
              return s.concat(Gv(c, l));
            }, []);
          }, "_loop3");
          for (a.s(); !(n = a.n()).done; )
            i();
        } catch (u) {
          a.e(u);
        } finally {
          a.f();
        }
        return r;
      }
      o(Ni, "_splitRects");
      function Gv(e, t) {
        var r = e.top, a = e.left, n = e.bottom, i = e.right, u = r < t.bottom && n > t.top, l = a < t.right && i > t.left, s = [];
        if (en(t.top, r, n) && l && s.push({
          top: r,
          left: a,
          bottom: t.top,
          right: i
        }), en(t.right, a, i) && u && s.push({
          top: r,
          left: t.right,
          bottom: n,
          right: i
        }), en(t.bottom, r, n) && l && s.push({
          top: t.bottom,
          right: i,
          bottom: n,
          left: a
        }), en(t.left, a, i) && u && s.push({
          top: r,
          left: a,
          bottom: n,
          right: t.left
        }), s.length === 0) {
          if (Yv(e, t))
            return [];
          s.push(e);
        }
        return s.map(Wv);
      }
      o(Gv, "splitRect");
      var en = /* @__PURE__ */ o(function(t, r, a) {
        return t > r && t < a;
      }, "between");
      function Wv(e) {
        return new D.DOMRect(e.left, e.top, e.right - e.left, e.bottom - e.top);
      }
      o(Wv, "computeRect");
      function Yv(e, t) {
        return e.top >= t.top && e.left >= t.left && e.bottom <= t.bottom && e.right <= t.right;
      }
      o(Yv, "isEnclosedRect");
      var ss = 0, Xv = 0.1, cs = 0.2, ds = 0.3, Ii = 0;
      function dr() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N.body, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (le.get("gridCreated") && !r)
          return ce.gridSize;
        if (le.set("gridCreated", !0), !r) {
          var a, n = se(N.documentElement);
          if (n || (n = new Mo(N.documentElement)), Ii = 0, n._stackingOrder = [ms(ss, Ii++, null)], (a = t) !== null && a !== void 0 || (t = new Pi()), hs(t, n), Bt(n.actualNode)) {
            var i = new Pi(n);
            n._subGrid = i;
          }
        }
        for (var u = N.createTreeWalker(e, D.NodeFilter.SHOW_ELEMENT, null, !1), l = r ? u.nextNode() : u.currentNode; l; ) {
          var s = se(l);
          s && s.parent ? r = s.parent : l.assignedSlot ? r = se(l.assignedSlot) : l.parentElement ? r = se(l.parentElement) : l.parentNode && se(l.parentNode) && (r = se(l.parentNode)), s || (s = new w.VirtualNode(l, r)), s._stackingOrder = Kv(s, r, Ii++);
          var c = Qv(s, r), d = c ? c._subGrid : t;
          if (Bt(s.actualNode)) {
            var f = new Pi(s);
            s._subGrid = f;
          }
          var p = s.boundingClientRect;
          p.width !== 0 && p.height !== 0 && ot(l) && hs(d, s), Wa(l) && dr(l.shadowRoot, d, s), l = u.nextNode();
        }
        return ce.gridSize;
      }
      o(dr, "_createGrid");
      function fs(e, t) {
        var r = e.getComputedStylePropertyValue("position"), a = e.getComputedStylePropertyValue("z-index");
        if (r === "fixed" || r === "sticky" || a !== "auto" && r !== "static" || e.getComputedStylePropertyValue("opacity") !== "1")
          return !0;
        var n = e.getComputedStylePropertyValue("-webkit-transform") || e.getComputedStylePropertyValue("-ms-transform") || e.getComputedStylePropertyValue("transform") || "none";
        if (n !== "none")
          return !0;
        var i = e.getComputedStylePropertyValue("mix-blend-mode");
        if (i && i !== "normal")
          return !0;
        var u = e.getComputedStylePropertyValue("filter");
        if (u && u !== "none")
          return !0;
        var l = e.getComputedStylePropertyValue("perspective");
        if (l && l !== "none")
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
        return !!(["layout", "paint", "strict", "content"].includes(m) || a !== "auto" && ps(t));
      }
      o(fs, "isStackingContext");
      function ps(e) {
        if (!e)
          return !1;
        var t = e.getComputedStylePropertyValue("display");
        return ["flex", "inline-flex", "grid", "inline-grid"].includes(t);
      }
      o(ps, "isFlexOrGridContainer");
      function Kv(e, t, r) {
        var a = t._stackingOrder.slice();
        if (fs(e, t)) {
          var n = a.findIndex(function(u) {
            var l = u.stackLevel;
            return [ss, cs, ds].includes(l);
          });
          n !== -1 && a.splice(n, a.length - n);
        }
        var i = Zv(e, t);
        return i !== null && a.push(ms(i, r, e)), a;
      }
      o(Kv, "createStackingOrder");
      function ms(e, t, r) {
        return {
          stackLevel: e,
          treeOrder: t,
          vNode: r
        };
      }
      o(ms, "createStackingContext");
      function Zv(e, t) {
        var r = Jv(e, t);
        return ["auto", "0"].includes(r) ? e.getComputedStylePropertyValue("position") !== "static" ? ds : e.getComputedStylePropertyValue("float") !== "none" ? cs : fs(e, t) ? Xv : null : parseInt(r);
      }
      o(Zv, "getStackLevel");
      function Jv(e, t) {
        var r = e.getComputedStylePropertyValue("position");
        return r === "static" && !ps(t) ? "auto" : e.getComputedStylePropertyValue("z-index");
      }
      o(Jv, "getRealZIndex");
      function Qv(e, t) {
        for (var r = null, a = [e]; t; ) {
          if (Bt(t.actualNode)) {
            r = t;
            break;
          }
          if (t._scrollRegionParent) {
            r = t._scrollRegionParent;
            break;
          }
          a.push(t), t = se(t.actualNode.parentElement || t.actualNode.parentNode);
        }
        return a.forEach(function(n) {
          return n._scrollRegionParent = r;
        }), r;
      }
      o(Qv, "findScrollRegionParent");
      function hs(e, t) {
        var r = Ya(t);
        t.clientRects.forEach(function(a) {
          var n, i = r.reduce(function(l, s) {
            return l && Qa(l, s.boundingClientRect);
          }, a);
          if (!!i) {
            (n = t._grid) !== null && n !== void 0 || (t._grid = e);
            var u = e.getGridPositionOfRect(i);
            e.loopGridPosition(u, function(l) {
              l.includes(t) || l.push(t);
            });
          }
        });
      }
      o(hs, "addNodeToGrid");
      var Pi = function() {
        function e() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          _t(this, e), this.container = t, this.cells = [];
        }
        return o(e, "Grid"), xt(e, [{
          key: "toGridIndex",
          value: /* @__PURE__ */ o(function(r) {
            return Math.floor(r / ce.gridSize);
          }, "toGridIndex")
        }, {
          key: "getCellFromPoint",
          value: /* @__PURE__ */ o(function(r) {
            var a, n, i = r.x, u = r.y;
            he(this.boundaries, "Grid does not have cells added");
            var l = this.toGridIndex(u), s = this.toGridIndex(i);
            he(Ja({
              y: l,
              x: s
            }, this.boundaries), "Element midpoint exceeds the grid bounds");
            var c = (a = this.cells[l - this.cells._negativeIndex]) !== null && a !== void 0 ? a : [];
            return (n = c[s - c._negativeIndex]) !== null && n !== void 0 ? n : [];
          }, "getCellFromPoint")
        }, {
          key: "loopGridPosition",
          value: /* @__PURE__ */ o(function(r, a) {
            var n = r, i = n.left, u = n.right, l = n.top, s = n.bottom;
            this.boundaries && (r = Za(this.boundaries, r)), this.boundaries = r, vs(this.cells, l, s, function(c, d) {
              vs(c, i, u, function(f, p) {
                a(f, {
                  row: d,
                  col: p
                });
              });
            });
          }, "loopGridPosition")
        }, {
          key: "getGridPositionOfRect",
          value: /* @__PURE__ */ o(function(r) {
            var a = r.top, n = r.right, i = r.bottom, u = r.left, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return a = this.toGridIndex(a - l), n = this.toGridIndex(n + l - 1), i = this.toGridIndex(i + l - 1), u = this.toGridIndex(u - l), new D.DOMRect(u, a, n - u, i - a);
          }, "getGridPositionOfRect")
        }]), e;
      }();
      function vs(e, t, r, a) {
        var n;
        if ((n = e._negativeIndex) !== null && n !== void 0 || (e._negativeIndex = 0), t < e._negativeIndex) {
          for (var i = 0; i < e._negativeIndex - t; i++)
            e.splice(0, 0, []);
          e._negativeIndex = t;
        }
        for (var u = t - e._negativeIndex, l = r - e._negativeIndex, s = u; s <= l; s++) {
          var c, d;
          (d = e[c = s]) !== null && d !== void 0 || (e[c] = []), a(e[s], s + e._negativeIndex);
        }
      }
      o(vs, "loopNegativeIndexMatrix");
      function tn(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (dr(), !((t = e._grid) !== null && t !== void 0 && (r = t.cells) !== null && r !== void 0 && r.length))
          return [];
        var n = e.boundingClientRect, i = e._grid, u = Li(e), l = i.getGridPositionOfRect(n, a), s = [];
        return i.loopGridPosition(l, function(c) {
          var d = Fe(c), f;
          try {
            for (d.s(); !(f = d.n()).done; ) {
              var p = f.value;
              p && p !== e && !s.includes(p) && u === Li(p) && s.push(p);
            }
          } catch (m) {
            d.e(m);
          } finally {
            d.f();
          }
        }), s;
      }
      o(tn, "_findNearbyElms");
      var Li = Be(function(e) {
        return e ? e.getComputedStylePropertyValue("position") === "fixed" ? !0 : Li(e.parent) : !1;
      }), eg = Be(/* @__PURE__ */ o(function() {
        var t;
        if (!w._tree)
          return null;
        var r = St(w._tree[0], "dialog[open]", function(n) {
          var i = n.boundingClientRect, u = N.elementsFromPoint(i.left + 1, i.top + 1);
          return u.includes(n.actualNode) && ot(n);
        });
        if (!r.length)
          return null;
        var a = r.find(function(n) {
          var i = n.boundingClientRect, u = N.elementsFromPoint(i.left - 10, i.top - 10);
          return u.includes(n.actualNode);
        });
        return a || ((t = r.find(function(n) {
          var i, u = (i = tg(n)) !== null && i !== void 0 ? i : {}, l = u.vNode, s = u.rect;
          if (!l)
            return !1;
          var c = N.elementsFromPoint(s.left + 1, s.top + 1);
          return !c.includes(l.actualNode);
        })) !== null && t !== void 0 ? t : null);
      }, "getModalDialogMemoized")), gs = eg;
      function tg(e) {
        dr();
        var t = w._tree[0]._grid, r = new D.DOMRect(0, 0, D.innerWidth, D.innerHeight);
        if (!!t)
          for (var a = 0; a < t.cells.length; a++) {
            var n = t.cells[a];
            if (!!n)
              for (var i = 0; i < n.length; i++) {
                var u = n[i];
                if (!!u)
                  for (var l = 0; l < u.length; l++) {
                    var s = u[l], c = s.boundingClientRect, d = Qa(c, r);
                    if (s.props.nodeName !== "html" && s !== e && s.getComputedStylePropertyValue("pointer-events") !== "none" && d)
                      return {
                        vNode: s,
                        rect: d
                      };
                  }
              }
          }
      }
      o(tg, "getNodeFromGrid");
      function rn(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipAncestors, a = t.isAncestor;
        return r ? bs(e, a) : ys(e, a);
      }
      o(rn, "_isInert");
      var bs = Be(/* @__PURE__ */ o(function(t, r) {
        if (t.hasAttr("inert"))
          return !0;
        if (!r && t.actualNode) {
          var a = gs();
          if (a && !sr(a, t))
            return !0;
        }
        return !1;
      }, "isInertSelfMemoized")), ys = Be(/* @__PURE__ */ o(function(t, r) {
        return bs(t, r) ? !0 : t.parent ? ys(t.parent, !0) : !1;
      }, "isInertAncestorsMemoized")), rg = ["button", "command", "fieldset", "keygen", "optgroup", "option", "select", "textarea", "input"];
      function ag(e) {
        return rg.includes(e);
      }
      o(ag, "isDisabledAttrAllowed");
      function ng(e) {
        var t = _e(e), r = t.vNode;
        if (ag(r.props.nodeName) && r.hasAttr("disabled") || rn(r))
          return !0;
        for (var a = r.parent, n = [], i = !1; a && a.shadowId === r.shadowId && !i && (n.push(a), a.props.nodeName !== "legend"); ) {
          if (a._inDisabledFieldset !== void 0) {
            i = a._inDisabledFieldset;
            break;
          }
          a.props.nodeName === "fieldset" && a.hasAttr("disabled") && (i = !0), a = a.parent;
        }
        return n.forEach(function(u) {
          return u._inDisabledFieldset = i;
        }), i ? !0 : r.props.nodeName !== "area" && r.actualNode ? Vt(r) : !1;
      }
      o(ng, "focusDisabled");
      var Bi = ng, ig = /^\/\#/, og = /^#[!/]/;
      function qi(e) {
        var t, r = e.getAttribute("href");
        if (!r || r === "#")
          return !1;
        if (ig.test(r))
          return !0;
        var a = e.hash, n = e.protocol, i = e.hostname, u = e.port, l = e.pathname;
        if (og.test(a))
          return !1;
        if (r.charAt(0) === "#")
          return !0;
        if (typeof ((t = D.location) === null || t === void 0 ? void 0 : t.origin) != "string" || D.location.origin.indexOf("://") === -1)
          return null;
        var s = D.location.origin + D.location.pathname, c;
        return i ? c = "".concat(n, "//").concat(i).concat(u ? ":".concat(u) : "") : c = D.location.origin, l ? c += (l[0] !== "/" ? "/" : "") + l : c += D.location.pathname, c === s;
      }
      o(qi, "_isCurrentPageLink");
      function ug(e, t) {
        var r = e.getAttribute(t);
        if (!r || t === "href" && !qi(e))
          return null;
        r.indexOf("#") !== -1 && (r = decodeURIComponent(r.substr(r.indexOf("#") + 1)));
        var a = N.getElementById(r);
        return a || (a = N.getElementsByName(r), a.length ? a[0] : null);
      }
      o(ug, "getElementByReference");
      var ji = ug;
      function zi(e, t) {
        dr();
        for (var r = Math.max(e._stackingOrder.length, t._stackingOrder.length), a = 0; a < r; a++) {
          if (typeof t._stackingOrder[a] > "u")
            return -1;
          if (typeof e._stackingOrder[a] > "u" || t._stackingOrder[a].stackLevel > e._stackingOrder[a].stackLevel)
            return 1;
          if (t._stackingOrder[a].stackLevel < e._stackingOrder[a].stackLevel)
            return -1;
          if (t._stackingOrder[a].treeOrder !== e._stackingOrder[a].treeOrder)
            return t._stackingOrder[a].treeOrder - e._stackingOrder[a].treeOrder;
        }
        var n = e.actualNode, i = t.actualNode;
        if (n.getRootNode && n.getRootNode() !== i.getRootNode()) {
          for (var u = []; n; )
            u.push({
              root: n.getRootNode(),
              node: n
            }), n = n.getRootNode().host;
          for (; i && !u.find(function(b) {
            return b.root === i.getRootNode();
          }); )
            i = i.getRootNode().host;
          if (n = u.find(function(b) {
            return b.root === i.getRootNode();
          }).node, n === i)
            return e.actualNode.getRootNode() !== n.getRootNode() ? -1 : 1;
        }
        var l = D.Node, s = l.DOCUMENT_POSITION_FOLLOWING, c = l.DOCUMENT_POSITION_CONTAINS, d = l.DOCUMENT_POSITION_CONTAINED_BY, f = n.compareDocumentPosition(i), p = f & s ? 1 : -1, m = f & c || f & d, h = ws(e), v = ws(t);
        return h === v || m ? p : v - h;
      }
      o(zi, "_visuallySort");
      function ws(e) {
        return e.getComputedStylePropertyValue("display").indexOf("inline") !== -1 ? 2 : Ds(e) ? 1 : 0;
      }
      o(ws, "getPositionOrder");
      function Ds(e) {
        if (!e)
          return !1;
        if (e._isFloated !== void 0)
          return e._isFloated;
        var t = e.getComputedStylePropertyValue("float");
        if (t !== "none")
          return e._isFloated = !0, !0;
        var r = Ds(e.parent);
        return e._isFloated = r, r;
      }
      o(Ds, "isFloated");
      function Vi(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = ta(t), n = e.getCellFromPoint(a) || [], i = Math.floor(a.x), u = Math.floor(a.y), l = n.filter(function(c) {
          return c.clientRects.some(function(d) {
            var f = d.left, p = d.top;
            return i < Math.floor(f + d.width) && i >= Math.floor(f) && u < Math.floor(p + d.height) && u >= Math.floor(p);
          });
        }), s = e.container;
        return s && (l = Vi(s._grid, s.boundingClientRect, !0).concat(l)), r || (l = l.sort(zi).map(function(c) {
          return c.actualNode;
        }).concat(N.documentElement).filter(function(c, d, f) {
          return f.indexOf(c) === d;
        })), l;
      }
      o(Vi, "getRectStack");
      function lg(e) {
        dr();
        var t = se(e), r = t._grid;
        return r ? Vi(r, t.boundingClientRect) : [];
      }
      o(lg, "getElementStack");
      var _s = lg;
      function sg(e) {
        var t = dt(e, "*"), r = t.filter(function(a) {
          var n = a.isFocusable, i = a.actualNode.getAttribute("tabindex");
          return i = i && !isNaN(parseInt(i, 10)) ? parseInt(i) : null, i ? n && i >= 0 : n;
        });
        return r;
      }
      o(sg, "getTabbableElements");
      var xs = sg;
      function cg(e) {
        var t = _e(e), r = t.vNode;
        if (!r || Bi(r))
          return !1;
        switch (r.props.nodeName) {
          case "a":
          case "area":
            if (r.hasAttr("href"))
              return !0;
            break;
          case "input":
            return r.props.type !== "hidden";
          case "textarea":
          case "select":
          case "summary":
          case "button":
            return !0;
          case "details":
            return !dt(r, "summary").length;
        }
        return !1;
      }
      o(cg, "isNativelyFocusable");
      var Hi = cg;
      function Se(e) {
        var t = _e(e), r = t.vNode;
        if (r.props.nodeType !== 1 || Bi(r))
          return !1;
        if (Hi(r))
          return !0;
        var a = r.attr("tabindex");
        return !!(a && !isNaN(parseInt(a, 10)));
      }
      o(Se, "_isFocusable");
      function wt(e) {
        var t = _e(e), r = t.vNode;
        if (r.props.nodeType !== 1)
          return !1;
        var a = parseInt(r.attr("tabindex", 10));
        return a <= -1 ? !1 : Se(r);
      }
      o(wt, "_isInTabOrder");
      var an = Be(dg);
      function dg(e) {
        var t = e.boundingClientRect, r = tn(e).filter(function(n) {
          return Mi(e, n) && n.getComputedStylePropertyValue("pointer-events") !== "none" && !fg(e, n);
        });
        if (!r.length)
          return [t];
        var a = r.map(function(n) {
          var i = n.boundingClientRect;
          return i;
        });
        return Ni(t, a);
      }
      o(dg, "getTargetRects");
      function fg(e, t) {
        return e.actualNode.contains(t.actualNode) && !wt(t);
      }
      o(fg, "isDescendantNotInTabOrder");
      var Es = Be(pg);
      function pg(e, t) {
        var r = an(e);
        return mg(r, t);
      }
      o(pg, "getTargetSize");
      function mg(e, t) {
        return e.reduce(function(r, a) {
          var n = cr(t, r), i = cr(t, a);
          if (n !== i)
            return n ? r : a;
          var u = r.width * r.height, l = a.width * a.height;
          return u > l ? r : a;
        });
      }
      o(mg, "getLargestRect");
      var ra = {};
      gt(ra, {
        accessibleText: /* @__PURE__ */ o(function() {
          return fr;
        }, "accessibleText"),
        accessibleTextVirtual: /* @__PURE__ */ o(function() {
          return Ue;
        }, "accessibleTextVirtual"),
        autocomplete: /* @__PURE__ */ o(function() {
          return vr;
        }, "autocomplete"),
        formControlValue: /* @__PURE__ */ o(function() {
          return tc;
        }, "formControlValue"),
        formControlValueMethods: /* @__PURE__ */ o(function() {
          return Ki;
        }, "formControlValueMethods"),
        hasUnicode: /* @__PURE__ */ o(function() {
          return eo;
        }, "hasUnicode"),
        isHumanInterpretable: /* @__PURE__ */ o(function() {
          return ro;
        }, "isHumanInterpretable"),
        isIconLigature: /* @__PURE__ */ o(function() {
          return to;
        }, "isIconLigature"),
        isValidAutocomplete: /* @__PURE__ */ o(function() {
          return lc;
        }, "isValidAutocomplete"),
        label: /* @__PURE__ */ o(function() {
          return jb;
        }, "label"),
        labelText: /* @__PURE__ */ o(function() {
          return Zi;
        }, "labelText"),
        labelVirtual: /* @__PURE__ */ o(function() {
          return sn;
        }, "labelVirtual"),
        nativeElementType: /* @__PURE__ */ o(function() {
          return Vb;
        }, "nativeElementType"),
        nativeTextAlternative: /* @__PURE__ */ o(function() {
          return ac;
        }, "nativeTextAlternative"),
        nativeTextMethods: /* @__PURE__ */ o(function() {
          return rc;
        }, "nativeTextMethods"),
        removeUnicode: /* @__PURE__ */ o(function() {
          return ua;
        }, "removeUnicode"),
        sanitize: /* @__PURE__ */ o(function() {
          return ne;
        }, "sanitize"),
        subtreeText: /* @__PURE__ */ o(function() {
          return Ht;
        }, "subtreeText"),
        titleText: /* @__PURE__ */ o(function() {
          return on;
        }, "titleText"),
        unsupported: /* @__PURE__ */ o(function() {
          return Us;
        }, "unsupported"),
        visible: /* @__PURE__ */ o(function() {
          return sc;
        }, "visible"),
        visibleTextNodes: /* @__PURE__ */ o(function() {
          return Hb;
        }, "visibleTextNodes"),
        visibleVirtual: /* @__PURE__ */ o(function() {
          return Tt;
        }, "visibleVirtual")
      });
      function hg(e, t) {
        e = e.actualNode || e;
        try {
          var r = Ye(e), a = [], n = e.getAttribute(t);
          if (n) {
            n = Xe(n);
            for (var i = 0; i < n.length; i++)
              a.push(r.getElementById(n[i]));
          }
          return a;
        } catch {
          throw new TypeError("Cannot resolve id references for non-DOM nodes");
        }
      }
      o(hg, "idrefs");
      var At = hg;
      function vg(e, t) {
        var r = se(e);
        return Ue(r, t);
      }
      o(vg, "accessibleText");
      var fr = vg;
      function gg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _e(e), a = r.vNode;
        if (a?.props.nodeType !== 1 || a.props.nodeType !== 1 || t.inLabelledByContext || t.inControlContext || !a.attr("aria-labelledby"))
          return "";
        var n = At(a, "aria-labelledby").filter(function(i) {
          return i;
        });
        return n.reduce(function(i, u) {
          var l = fr(u, pe({
            inLabelledByContext: !0,
            startNode: t.startNode || a
          }, t));
          return i ? "".concat(i, " ").concat(l) : l;
        }, "");
      }
      o(gg, "arialabelledbyText");
      var aa = gg;
      function na(e) {
        var t = _e(e), r = t.vNode;
        return r?.props.nodeType !== 1 ? "" : r.attr("aria-label") || "";
      }
      o(na, "_arialabelText");
      var bg = {
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
          allowEmpty: !0,
          global: !0
        },
        "aria-brailleroledescription": {
          type: "string",
          allowEmpty: !0,
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
          type: "string",
          allowEmpty: !0
        }
      }, Cs = bg, yg = {
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
          allowedAttrs: ["aria-readonly", "aria-expanded", "aria-required"],
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
          allowedAttrs: ["aria-expanded", "aria-posinset", "aria-readonly", "aria-setsize"],
          superclassRole: ["checkbox", "menuitem"],
          accessibleNameRequired: !0,
          nameFromContent: !0,
          childrenPresentational: !0
        },
        menuitemradio: {
          type: "widget",
          requiredContext: ["menu", "menubar", "group"],
          requiredAttrs: ["aria-checked"],
          allowedAttrs: ["aria-expanded", "aria-posinset", "aria-readonly", "aria-setsize"],
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
          allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-orientation", "aria-readonly", "aria-required", "aria-valuetext"],
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
          allowedAttrs: ["aria-expanded", "aria-readonly", "aria-required"],
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
      }, As = yg, wg = {
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
      }, Dg = wg, _g = {
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
      }, xg = _g, Eg = {
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
          allowedRoles: ["feed", "note", "presentation", "none", "region", "search", "doc-dedication", "doc-example", "doc-footnote", "doc-glossary", "doc-pullquote", "doc-tip"]
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
              allowedRoles: ["button", "checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "meter", "option", "progressbar", "radio", "scrollbar", "separator", "slider", "switch", "tab", "treeitem", "doc-cover"]
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
        search: {
          contentTypes: ["flow"],
          allowedRoles: ["form", "group", "none", "presentation", "region", "search"]
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
      }, Cg = Eg, Ag = {
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
      }, Fg = Ag, Fs = {
        ariaAttrs: Cs,
        ariaRoles: pe({}, As, Dg, xg),
        htmlElms: Cg,
        cssColors: Fg
      }, Rr = pe({}, Fs);
      function Tg(e) {
        Object.keys(Rr).forEach(function(t) {
          e[t] && (Rr[t] = Fi(Rr[t], e[t]));
        });
      }
      o(Tg, "configureStandards");
      function Rg() {
        Object.keys(Rr).forEach(function(e) {
          Rr[e] = Fs[e];
        });
      }
      o(Rg, "resetStandards");
      var ve = Rr;
      function kg(e) {
        var t = ve.ariaRoles[e];
        return t ? !!t.unsupported : !1;
      }
      o(kg, "isUnsupportedRole");
      var $i = kg;
      function Sg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.allowAbstract, a = t.flagUnsupported, n = a === void 0 ? !1 : a, i = ve.ariaRoles[e], u = $i(e);
        return !i || n && u ? !1 : r ? !0 : i.type !== "abstract";
      }
      o(Sg, "isValidRole");
      var kr = Sg;
      function Og(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fallback, a = t.abstracts, n = t.dpub;
        if (e = e instanceof He ? e : se(e), e.props.nodeType !== 1)
          return null;
        var i = (e.attr("role") || "").trim().toLowerCase(), u = r ? Xe(i) : [i], l = u.find(function(s) {
          return !n && s.substr(0, 4) === "doc-" ? !1 : kr(s, {
            allowAbstract: a
          });
        });
        return l || null;
      }
      o(Og, "getExplicitRole");
      var Ee = Og;
      function Mg(e) {
        return Object.keys(ve.htmlElms).filter(function(t) {
          var r = ve.htmlElms[t];
          return r.contentTypes ? r.contentTypes.includes(e) : r.variant && r.variant.default && r.variant.default.contentTypes ? r.variant.default.contentTypes.includes(e) : !1;
        });
      }
      o(Mg, "getElementsByContentType");
      var Ui = Mg;
      function Ng() {
        return le.get("globalAriaAttrs", function() {
          return Object.keys(ve.ariaAttrs).filter(function(e) {
            return ve.ariaAttrs[e].global;
          });
        });
      }
      o(Ng, "getGlobalAriaAttrs");
      var pr = Ng;
      function Ig(e) {
        for (var t = [], r = e.rows, a = 0, n = r.length; a < n; a++) {
          var i = r[a].cells;
          t[a] = t[a] || [];
          for (var u = 0, l = 0, s = i.length; l < s; l++)
            for (var c = 0; c < i[l].colSpan; c++) {
              for (var d = i[l].getAttribute("rowspan"), f = parseInt(d) === 0 || i[l].rowspan === 0 ? r.length : i[l].rowSpan, p = 0; p < f; p++) {
                for (t[a + p] = t[a + p] || []; t[a + p][u]; )
                  u++;
                t[a + p][u] = i[l];
              }
              u++;
            }
        }
        return t;
      }
      o(Ig, "toGrid");
      var Pt = Be(Ig);
      function Pg(e, t) {
        var r, a;
        for (t || (t = Pt(Tr(e, "table"))), r = 0; r < t.length; r++)
          if (t[r] && (a = t[r].indexOf(e), a !== -1))
            return {
              x: a,
              y: r
            };
      }
      o(Pg, "getCellPosition");
      var nn = Be(Pg);
      function Gi(e) {
        var t = _e(e), r = t.vNode, a = t.domNode, n = r.attr("scope"), i = r.attr("role");
        if (!["td", "th"].includes(r.props.nodeName))
          throw new TypeError("Expected TD or TH element");
        if (i === "columnheader")
          return "col";
        if (i === "rowheader")
          return "row";
        if (n === "col" || n === "row")
          return n;
        if (r.props.nodeName !== "th")
          return !1;
        if (!r.actualNode)
          return "auto";
        var u = Pt(Tr(a, "table")), l = nn(a, u), s = u[l.y].every(function(d) {
          return d.nodeName.toUpperCase() === "TH";
        });
        if (s)
          return "col";
        var c = u.map(function(d) {
          return d[l.x];
        }).every(function(d) {
          return d && d.nodeName.toUpperCase() === "TH";
        });
        return c ? "row" : "auto";
      }
      o(Gi, "_getScope");
      function Lg(e) {
        return ["col", "auto"].indexOf(Gi(e)) !== -1;
      }
      o(Lg, "isColumnHeader");
      var Sr = Lg;
      function Bg(e) {
        return ["row", "auto"].includes(Gi(e));
      }
      o(Bg, "isRowHeader");
      var Or = Bg;
      function qg(e) {
        return e ? e.replace(/\r\n/g, `
`).replace(/\u00A0/g, " ").replace(/[\s]{2,}/g, " ").trim() : "";
      }
      o(qg, "sanitize");
      var ne = qg, Ts = /* @__PURE__ */ o(function() {
        return le.get("sectioningElementSelector", function() {
          return Ui("sectioning").map(function(t) {
            return "".concat(t, ":not([role])");
          }).join(", ") + " , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]";
        });
      }, "getSectioningElementSelector");
      function Rs(e) {
        var t = ne(aa(e)), r = ne(na(e));
        return !!(t || r);
      }
      o(Rs, "hasAccessibleName");
      var jg = {
        a: /* @__PURE__ */ o(function(t) {
          return t.hasAttr("href") ? "link" : null;
        }, "a"),
        area: /* @__PURE__ */ o(function(t) {
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
        footer: /* @__PURE__ */ o(function(t) {
          var r = it(t, Ts());
          return r ? null : "contentinfo";
        }, "footer"),
        form: /* @__PURE__ */ o(function(t) {
          return Rs(t) ? "form" : null;
        }, "form"),
        h1: "heading",
        h2: "heading",
        h3: "heading",
        h4: "heading",
        h5: "heading",
        h6: "heading",
        header: /* @__PURE__ */ o(function(t) {
          var r = it(t, Ts());
          return r ? null : "banner";
        }, "header"),
        hr: "separator",
        img: /* @__PURE__ */ o(function(t) {
          var r = t.hasAttr("alt") && !t.attr("alt"), a = pr().find(function(n) {
            return t.hasAttr(n);
          });
          return r && !a && !Se(t) ? "presentation" : "img";
        }, "img"),
        input: /* @__PURE__ */ o(function(t) {
          var r;
          if (t.hasAttr("list")) {
            var a = At(t.actualNode, "list").filter(function(n) {
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
        search: "search",
        section: /* @__PURE__ */ o(function(t) {
          return Rs(t) ? "region" : null;
        }, "section"),
        select: /* @__PURE__ */ o(function(t) {
          return t.hasAttr("multiple") || parseInt(t.attr("size")) > 1 ? "listbox" : "combobox";
        }, "select"),
        summary: "button",
        table: "table",
        tbody: "rowgroup",
        td: /* @__PURE__ */ o(function(t) {
          var r = it(t, "table"), a = Ee(r);
          return ["grid", "treegrid"].includes(a) ? "gridcell" : "cell";
        }, "td"),
        textarea: "textbox",
        tfoot: "rowgroup",
        th: /* @__PURE__ */ o(function(t) {
          if (Sr(t))
            return "columnheader";
          if (Or(t))
            return "rowheader";
        }, "th"),
        thead: "rowgroup",
        tr: "row",
        ul: "list"
      }, Wi = jg;
      function zg(e, t) {
        var r = S(t);
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
      o(zg, "fromPrimative");
      var mr = zg;
      function Vg(e, t) {
        return mr(!!Ue(e), t);
      }
      o(Vg, "hasAccessibleName2");
      var ks = Vg;
      function Hg(e, t) {
        var r = S(t);
        if (r !== "object" || Array.isArray(t) || t instanceof RegExp)
          throw new Error("Expect matcher to be an object");
        return Object.keys(t).every(function(a) {
          return mr(e(a), t[a]);
        });
      }
      o(Hg, "fromFunction");
      var Yi = Hg;
      function $g(e, t) {
        return e = _e(e).vNode, Yi(function(r) {
          return e.attr(r);
        }, t);
      }
      o($g, "attributes");
      var Ss = $g;
      function Os(e, t) {
        return !!t(e);
      }
      o(Os, "condition");
      function Ug(e, t) {
        return mr(Ee(e), t);
      }
      o(Ug, "explicitRole");
      var Ms = Ug;
      function Gg(e, t) {
        return mr(Ft(e), t);
      }
      o(Gg, "implicitRole");
      var Ns = Gg;
      function Wg(e, t) {
        return e = _e(e).vNode, mr(e.props.nodeName, t);
      }
      o(Wg, "nodeName");
      var Is = Wg;
      function Yg(e, t) {
        return e = _e(e).vNode, Yi(function(r) {
          return e.props[r];
        }, t);
      }
      o(Yg, "properties");
      var Ps = Yg;
      function Xg(e, t) {
        return mr(de(e), t);
      }
      o(Xg, "semanticRole");
      var Ls = Xg, Bs = {
        hasAccessibleName: ks,
        attributes: Ss,
        condition: Os,
        explicitRole: Ms,
        implicitRole: Ns,
        nodeName: Is,
        properties: Ps,
        semanticRole: Ls
      };
      function qs(e, t) {
        return e = _e(e).vNode, Array.isArray(t) ? t.some(function(r) {
          return qs(e, r);
        }) : typeof t == "string" ? pi(e, t) : Object.keys(t).every(function(r) {
          if (!Bs[r])
            throw new Error('Unknown matcher type "'.concat(r, '"'));
          var a = Bs[r], n = t[r];
          return a(e, n);
        });
      }
      o(qs, "fromDefinition");
      var js = qs;
      function Kg(e, t) {
        return js(e, t);
      }
      o(Kg, "matches2");
      var ut = Kg;
      ut.hasAccessibleName = ks, ut.attributes = Ss, ut.condition = Os, ut.explicitRole = Ms, ut.fromDefinition = js, ut.fromFunction = Yi, ut.fromPrimative = mr, ut.implicitRole = Ns, ut.nodeName = Is, ut.properties = Ps, ut.semanticRole = Ls;
      var ia = ut;
      function Zg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noMatchAccessibleName, a = r === void 0 ? !1 : r, n = ve.htmlElms[e.props.nodeName];
        if (!n)
          return {};
        if (!n.variant)
          return n;
        var i = n.variant, u = Le(n, zf);
        for (var l in i)
          if (!(!i.hasOwnProperty(l) || l === "default")) {
            for (var s = i[l], c = s.matches, d = Le(s, Vf), f = Array.isArray(c) ? c : [c], p = 0; p < f.length && a; p++)
              if (f[p].hasOwnProperty("hasAccessibleName"))
                return n;
            if (ia(e, c))
              for (var m in d)
                d.hasOwnProperty(m) && (u[m] = d[m]);
          }
        for (var h in i.default)
          i.default.hasOwnProperty(h) && typeof u[h] > "u" && (u[h] = i.default[h]);
        return u;
      }
      o(Zg, "getElementSpec");
      var hr = Zg;
      function Jg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.chromium, a = e instanceof He ? e : se(e);
        if (e = a.actualNode, !a)
          throw new ReferenceError("Cannot get implicit role of a node outside the current scope.");
        var n = a.props.nodeName, i = Wi[n];
        if (!i && r) {
          var u = hr(a), l = u.chromiumRole;
          return l || null;
        }
        return typeof i == "function" ? i(a) : i || null;
      }
      o(Jg, "implicitRole2");
      var Ft = Jg, Qg = {
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
      function zs(e, t) {
        var r = Qg[e.props.nodeName];
        if (!r)
          return null;
        if (!e.parent) {
          if (!e.actualNode)
            return null;
          throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.");
        }
        if (!r.includes(e.parent.props.nodeName))
          return null;
        var a = Ee(e.parent, t);
        return ["none", "presentation"].includes(a) && !Hs(e.parent) ? a : a ? null : zs(e.parent, t);
      }
      o(zs, "getInheritedRole");
      function Vs(e, t) {
        var r = t.chromium, a = Le(t, Hf), n = Ft(e, {
          chromium: r
        });
        if (!n)
          return null;
        var i = zs(e, a);
        return i || n;
      }
      o(Vs, "resolveImplicitRole");
      function Hs(e) {
        var t = pr().some(function(r) {
          return e.hasAttr(r);
        });
        return t || Se(e);
      }
      o(Hs, "hasConflictResolution");
      function eb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noImplicit, a = Le(t, $f), n = _e(e), i = n.vNode;
        if (i.props.nodeType !== 1)
          return null;
        var u = Ee(i, a);
        return u ? ["presentation", "none"].includes(u) && Hs(i) ? r ? null : Vs(i, a) : u : r ? null : Vs(i, a);
      }
      o(eb, "resolveRole");
      function tb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noPresentational, a = Le(t, Uf), n = eb(e, a);
        return r && ["presentation", "none"].includes(n) ? null : n;
      }
      o(tb, "getRole");
      var de = tb, rb = ["iframe"];
      function ab(e) {
        var t = _e(e), r = t.vNode;
        return r.props.nodeType !== 1 || !e.hasAttr("title") || !ut(r, rb) && ["none", "presentation"].includes(de(r)) ? "" : r.attr("title");
      }
      o(ab, "titleText");
      var on = ab;
      function nb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.strict;
        if (e = e instanceof He ? e : se(e), e.props.nodeType !== 1)
          return !1;
        var a = de(e), n = ve.ariaRoles[a];
        return n && n.nameFromContent ? !0 : r ? !1 : !n || ["presentation", "none"].includes(a);
      }
      o(nb, "namedFromContents");
      var $s = nb;
      function ib(e) {
        var t = e.actualNode, r = e.children;
        if (!r)
          throw new Error("getOwnedVirtual requires a virtual node");
        if (e.hasAttr("aria-owns")) {
          var a = At(t, "aria-owns").filter(function(n) {
            return !!n;
          }).map(function(n) {
            return w.utils.getNodeFromTree(n);
          });
          return [].concat(ae(r), ae(a));
        }
        return ae(r);
      }
      o(ib, "getOwnedVirtual");
      var oa = ib, Us = {
        accessibleNameFromFieldValue: ["progressbar"]
      };
      function Te(e) {
        return e = _e(e).vNode, Xi(e);
      }
      o(Te, "_isVisibleToScreenReaders");
      var Xi = Be(/* @__PURE__ */ o(function(t, r) {
        return Xl(t) || rn(t, {
          skipAncestors: !0,
          isAncestor: r
        }) ? !1 : t.actualNode && t.props.nodeName === "area" ? !ki(t, Xi) : Vt(t, {
          skipAncestors: !0,
          isAncestor: r
        }) ? !1 : t.parent ? Xi(t.parent, !0) : !0;
      }, "isVisibleToScreenReadersMemoized"));
      function Gs(e, t, r) {
        var a = _e(e), n = a.vNode, i = t ? Te : ot, u = !e.actualNode || e.actualNode && i(e), l = n.children.map(function(s) {
          var c = s.props, d = c.nodeType, f = c.nodeValue;
          if (d === 3) {
            if (f && u)
              return f;
          } else if (!r)
            return Gs(s, t);
        }).join("");
        return ne(l);
      }
      o(Gs, "visibleVirtual");
      var Tt = Gs, ob = ["button", "checkbox", "color", "file", "hidden", "image", "password", "radio", "reset", "submit"];
      function ub(e) {
        e = e instanceof He ? e : se(e);
        var t = e.props.nodeName;
        return t === "textarea" || t === "input" && !ob.includes((e.attr("type") || "").toLowerCase());
      }
      o(ub, "isNativeTextbox");
      var Ws = ub;
      function lb(e) {
        e = e instanceof He ? e : se(e);
        var t = e.props.nodeName;
        return t === "select";
      }
      o(lb, "isNativeSelect");
      var Ys = lb;
      function sb(e) {
        var t = Ee(e);
        return t === "textbox";
      }
      o(sb, "isAriaTextbox");
      var Xs = sb;
      function cb(e) {
        var t = Ee(e);
        return t === "listbox";
      }
      o(cb, "isAriaListbox");
      var Ks = cb;
      function db(e) {
        var t = Ee(e);
        return t === "combobox";
      }
      o(db, "isAriaCombobox");
      var Zs = db, fb = ["progressbar", "scrollbar", "slider", "spinbutton"];
      function pb(e) {
        var t = Ee(e);
        return fb.includes(t);
      }
      o(pb, "isAriaRange");
      var Js = pb, Qs = ["textbox", "progressbar", "scrollbar", "slider", "spinbutton", "combobox", "listbox"], Ki = {
        nativeTextboxValue: hb,
        nativeSelectValue: vb,
        ariaTextboxValue: gb,
        ariaListboxValue: ec,
        ariaComboboxValue: bb,
        ariaRangeValue: yb
      };
      function mb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode, a = Us.accessibleNameFromFieldValue || [], n = de(e);
        if (t.startNode === e || !Qs.includes(n) || a.includes(n))
          return "";
        var i = Object.keys(Ki).map(function(l) {
          return Ki[l];
        }), u = i.reduce(function(l, s) {
          return l || s(e, t);
        }, "");
        return t.debug && or(u || "{empty-value}", r, t), u;
      }
      o(mb, "formControlValue");
      function hb(e) {
        var t = _e(e), r = t.vNode;
        return Ws(r) && r.props.value || "";
      }
      o(hb, "nativeTextboxValue");
      function vb(e) {
        var t = _e(e), r = t.vNode;
        if (!Ys(r))
          return "";
        var a = dt(r, "option"), n = a.filter(function(i) {
          return i.props.selected;
        });
        return n.length || n.push(a[0]), n.map(function(i) {
          return Tt(i);
        }).join(" ") || "";
      }
      o(vb, "nativeSelectValue");
      function gb(e) {
        var t = _e(e), r = t.vNode, a = t.domNode;
        return Xs(r) ? !a || a && !Vt(a) ? Tt(r, !0) : a.textContent : "";
      }
      o(gb, "ariaTextboxValue");
      function ec(e, t) {
        var r = _e(e), a = r.vNode;
        if (!Ks(a))
          return "";
        var n = oa(a).filter(function(i) {
          return de(i) === "option" && i.attr("aria-selected") === "true";
        });
        return n.length === 0 ? "" : Ue(n[0], t);
      }
      o(ec, "ariaListboxValue");
      function bb(e, t) {
        var r = _e(e), a = r.vNode;
        if (!Zs(a))
          return "";
        var n = oa(a).filter(function(i) {
          return de(i) === "listbox";
        })[0];
        return n ? ec(n, t) : "";
      }
      o(bb, "ariaComboboxValue");
      function yb(e) {
        var t = _e(e), r = t.vNode;
        if (!Js(r) || !r.hasAttr("aria-valuenow"))
          return "";
        var a = +r.attr("aria-valuenow");
        return isNaN(a) ? "0" : String(a);
      }
      o(yb, "ariaRangeValue");
      var tc = mb;
      function wb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ue.alreadyProcessed;
        t.startNode = t.startNode || e;
        var a = t, n = a.strict, i = a.inControlContext, u = a.inLabelledByContext, l = de(e), s = hr(e, {
          noMatchAccessibleName: !0
        }), c = s.contentTypes;
        if (r(e, t) || e.props.nodeType !== 1 || c != null && c.includes("embedded") || Qs.includes(l) || !t.subtreeDescendant && !t.inLabelledByContext && !$s(e, {
          strict: n
        }))
          return "";
        if (!n) {
          var d = !i && !u;
          t = pe({
            subtreeDescendant: d
          }, t);
        }
        return oa(e).reduce(function(f, p) {
          return _b(f, p, t);
        }, "");
      }
      o(wb, "subtreeText");
      var Db = Ui("phrasing").concat(["#text"]);
      function _b(e, t, r) {
        var a = t.props.nodeName, n = Ue(t, r);
        return n ? (Db.includes(a) || (n[0] !== " " && (n += " "), e && e[e.length - 1] !== " " && (n = " " + n)), e + n) : e;
      }
      o(_b, "appendAccessibleText");
      var Ht = wb;
      function xb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ue.alreadyProcessed;
        if (t.inControlContext || t.inLabelledByContext || r(e, t))
          return "";
        t.startNode || (t.startNode = e);
        var a = pe({
          inControlContext: !0
        }, t), n = Eb(e), i = it(e, "label"), u;
        return i ? (u = [].concat(ae(n), [i.actualNode]), u.sort(Go)) : u = n, u.map(function(l) {
          return fr(l, a);
        }).filter(function(l) {
          return l !== "";
        }).join(" ");
      }
      o(xb, "labelText");
      function Eb(e) {
        if (!e.attr("id"))
          return [];
        if (!e.actualNode)
          throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
        return Vl({
          elm: "label",
          attr: "for",
          value: e.attr("id"),
          context: e.actualNode
        });
      }
      o(Eb, "getExplicitLabels");
      var Zi = xb, Cb = {
        submit: "Submit",
        image: "Submit",
        reset: "Reset",
        button: ""
      }, Ab = {
        valueText: /* @__PURE__ */ o(function(t) {
          var r = t.actualNode;
          return r.value || "";
        }, "valueText"),
        buttonDefaultText: /* @__PURE__ */ o(function(t) {
          var r = t.actualNode;
          return Cb[r.type] || "";
        }, "buttonDefaultText"),
        tableCaptionText: un.bind(null, "caption"),
        figureText: un.bind(null, "figcaption"),
        svgTitleText: un.bind(null, "title"),
        fieldsetLegendText: un.bind(null, "legend"),
        altText: Ji.bind(null, "alt"),
        tableSummaryText: Ji.bind(null, "summary"),
        titleText: on,
        subtreeText: Ht,
        labelText: Zi,
        singleSpace: /* @__PURE__ */ o(function() {
          return " ";
        }, "singleSpace"),
        placeholderText: Ji.bind(null, "placeholder")
      };
      function Ji(e, t) {
        return t.attr(e) || "";
      }
      o(Ji, "attrText");
      function un(e, t, r) {
        var a = t.actualNode;
        e = e.toLowerCase();
        var n = [e, a.nodeName.toLowerCase()].join(","), i = a.querySelector(n);
        return !i || i.nodeName.toLowerCase() !== e ? "" : fr(i, r);
      }
      o(un, "descendantText");
      var rc = Ab;
      function ac(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode;
        if (e.props.nodeType !== 1 || ["presentation", "none"].includes(de(e)))
          return "";
        var a = Fb(e), n = a.reduce(function(i, u) {
          return i || u(e, t);
        }, "");
        return t.debug && w.log(n || "{empty-value}", r, t), n;
      }
      o(ac, "_nativeTextAlternative");
      function Fb(e) {
        var t = hr(e, {
          noMatchAccessibleName: !0
        }), r = t.namingMethods || [];
        return r.map(function(a) {
          return rc[a];
        });
      }
      o(Fb, "findTextMethods");
      function nc() {
        return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
      }
      o(nc, "getUnicodeNonBmpRegExp");
      function ic() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g;
      }
      o(ic, "getPunctuationRegExp");
      function oc() {
        return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
      }
      o(oc, "getSupplementaryPrivateUseRegExp");
      function uc() {
        return /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;
      }
      o(uc, "getCategoryFormatRegExp");
      var Qi = /* @__PURE__ */ o(function() {
        return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
      }, "emoji_regex_default");
      function Tb(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations, i = !1;
        return r && (i || (i = Qi().test(e))), a && (i || (i = nc().test(e) || oc().test(e) || uc().test(e))), n && (i || (i = ic().test(e))), i;
      }
      o(Tb, "hasUnicode");
      var eo = Tb;
      function to(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, a = e.actualNode.nodeValue.trim();
        if (!ne(a) || eo(a, {
          emoji: !0,
          nonBmp: !0
        }))
          return !1;
        var n = le.get("canvasContext", function() {
          return N.createElement("canvas").getContext("2d", {
            willReadFrequently: !0
          });
        }), i = n.canvas, u = le.get("fonts", function() {
          return {};
        }), l = D.getComputedStyle(e.parent.actualNode), s = l.getPropertyValue("font-family");
        u[s] || (u[s] = {
          occurrences: 0,
          numLigatures: 0
        });
        var c = u[s];
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
        if (m === 0)
          return c.numLigatures++, !0;
        if (m < 30) {
          var h = 30 / m;
          m *= h, d *= h, f = "".concat(d, "px ").concat(s);
        }
        i.width = m, i.height = d, n.font = f, n.textAlign = "left", n.textBaseline = "top", n.fillText(p, 0, 0);
        var v = new Uint32Array(n.getImageData(0, 0, m, d).data.buffer);
        if (!v.some(function(k) {
          return k;
        }))
          return c.numLigatures++, !0;
        n.clearRect(0, 0, m, d), n.fillText(a, 0, 0);
        var b = new Uint32Array(n.getImageData(0, 0, m, d).data.buffer), g = v.reduce(function(k, O, B) {
          return O === 0 && b[B] === 0 || O !== 0 && b[B] !== 0 ? k : ++k;
        }, 0), y = a.split("").reduce(function(k, O) {
          return k + n.measureText(O).width;
        }, 0), _ = n.measureText(a).width, x = g / v.length, T = 1 - _ / y;
        return x >= t && T >= t ? (c.numLigatures++, !0) : !1;
      }
      o(to, "_isIconLigature");
      function Ue(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t = Ob(e, t), kb(e, t) || Sb(e, t))
          return "";
        var r = [aa, na, ac, tc, Ht, Rb, on], a = r.reduce(function(n, i) {
          return t.startNode === e && (n = ne(n)), n !== "" ? n : i(e, t);
        }, "");
        return t.debug && w.log(a || "{empty-value}", e.actualNode, t), a;
      }
      o(Ue, "_accessibleTextVirtual");
      function Rb(e) {
        return e.props.nodeType !== 3 ? "" : e.props.nodeValue;
      }
      o(Rb, "textNodeValue");
      function kb(e, t) {
        return !e || e.props.nodeType !== 1 || t.includeHidden ? !1 : !Te(e);
      }
      o(kb, "shouldIgnoreHidden");
      function Sb(e, t) {
        var r, a = t.ignoreIconLigature, n = t.pixelThreshold, i = (r = t.occurrenceThreshold) !== null && r !== void 0 ? r : t.occuranceThreshold;
        return e.props.nodeType !== 3 || !a ? !1 : to(e, n, i);
      }
      o(Sb, "shouldIgnoreIconLigature");
      function Ob(e, t) {
        return t.startNode || (t = pe({
          startNode: e
        }, t)), e.props.nodeType === 1 && t.inLabelledByContext && t.includeHidden === void 0 && (t = pe({
          includeHidden: !Te(e)
        }, t)), t;
      }
      o(Ob, "prepareContext"), Ue.alreadyProcessed = /* @__PURE__ */ o(function(t, r) {
        return r.processed = r.processed || [], r.processed.includes(t) ? !0 : (r.processed.push(t), !1);
      }, "alreadyProcessed");
      function Mb(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations;
        return r && (e = e.replace(Qi(), "")), a && (e = e.replace(nc(), "").replace(oc(), "").replace(uc(), "")), n && (e = e.replace(ic(), "")), e;
      }
      o(Mb, "removeUnicode");
      var ua = Mb;
      function Nb(e) {
        if (!e.length)
          return 0;
        var t = ["x", "i"];
        if (t.includes(e))
          return 0;
        var r = ua(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return ne(r) ? 1 : 0;
      }
      o(Nb, "isHumanInterpretable");
      var ro = Nb, vr = {
        stateTerms: ["on", "off"],
        standaloneTerms: ["name", "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "nickname", "username", "new-password", "current-password", "organization-title", "organization", "street-address", "address-line1", "address-line2", "address-line3", "address-level4", "address-level3", "address-level2", "address-level1", "country", "country-name", "postal-code", "cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc", "cc-type", "transaction-currency", "transaction-amount", "language", "bday", "bday-day", "bday-month", "bday-year", "sex", "url", "photo", "one-time-code"],
        qualifiers: ["home", "work", "mobile", "fax", "pager"],
        qualifiedTerms: ["tel", "tel-country-code", "tel-national", "tel-area-code", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-extension", "email", "impp"],
        locations: ["billing", "shipping"]
      };
      function Ib(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.looseTyped, a = r === void 0 ? !1 : r, n = t.stateTerms, i = n === void 0 ? [] : n, u = t.locations, l = u === void 0 ? [] : u, s = t.qualifiers, c = s === void 0 ? [] : s, d = t.standaloneTerms, f = d === void 0 ? [] : d, p = t.qualifiedTerms, m = p === void 0 ? [] : p;
        if (e = e.toLowerCase().trim(), i = i.concat(vr.stateTerms), i.includes(e) || e === "")
          return !0;
        c = c.concat(vr.qualifiers), l = l.concat(vr.locations), f = f.concat(vr.standaloneTerms), m = m.concat(vr.qualifiedTerms);
        var h = e.split(/\s+/g);
        if (h[h.length - 1] === "webauthn" && (h.pop(), h.length === 0) || !a && (h[0].length > 8 && h[0].substr(0, 8) === "section-" && h.shift(), l.includes(h[0]) && h.shift(), c.includes(h[0]) && (h.shift(), f = []), h.length !== 1))
          return !1;
        var v = h[h.length - 1];
        return f.includes(v) || m.includes(v);
      }
      o(Ib, "isValidAutocomplete");
      var lc = Ib;
      function Pb(e) {
        var t, r;
        return e.attr("aria-labelledby") && (t = At(e.actualNode, "aria-labelledby"), r = t.map(function(a) {
          var n = se(a);
          return n ? Tt(n) : "";
        }).join(" ").trim(), r) || (r = e.attr("aria-label"), r && (r = ne(r), r)) ? r : null;
      }
      o(Pb, "labelVirtual");
      var ln = Pb;
      function Lb(e, t, r) {
        return e = se(e), Tt(e, t, r);
      }
      o(Lb, "visible");
      var sc = Lb;
      function Bb(e) {
        var t, r, a;
        if (r = ln(e), r)
          return r;
        if (e.attr("id")) {
          if (!e.actualNode)
            throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
          var n = ke(e.attr("id"));
          if (a = Ye(e.actualNode), t = a.querySelector('label[for="' + n + '"]'), r = t && sc(t, !0), r)
            return r;
        }
        return t = it(e, "label"), r = t && Tt(t, !0), r || null;
      }
      o(Bb, "labelVirtual2");
      var sn = Bb;
      function qb(e) {
        return e = se(e), sn(e);
      }
      o(qb, "label");
      var jb = qb, zb = [{
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
      }], Vb = zb;
      function cc(e) {
        var t = ot(e), r = [];
        return e.children.forEach(function(a) {
          a.actualNode.nodeType === 3 ? t && r.push(a) : r = r.concat(cc(a));
        }), r;
      }
      o(cc, "visibleTextNodes");
      var Hb = cc, $b = Be(/* @__PURE__ */ o(function(t) {
        var r = se(t), a = r.boundingClientRect, n = [], i = Ya(r);
        return t.childNodes.forEach(function(u) {
          if (!(u.nodeType !== 3 || ne(u.nodeValue) === "")) {
            var l = Ub(u);
            Gb(l, a) || n.push.apply(n, ae(Wb(l, i)));
          }
        }), n.length ? n : [a];
      }, "getVisibleChildTextRectsMemoized")), ao = $b;
      function Ub(e) {
        var t = N.createRange();
        return t.selectNodeContents(e), Array.from(t.getClientRects());
      }
      o(Ub, "getContentRects");
      function Gb(e, t) {
        return e.some(function(r) {
          var a = ta(r);
          return !Ja(a, t);
        });
      }
      o(Gb, "isOutsideNodeBounds");
      function Wb(e, t) {
        var r = [];
        return e.forEach(function(a) {
          if (!(a.width < 1 || a.height < 1)) {
            var n = t.reduce(function(i, u) {
              return i && Qa(i, u.boundingClientRect);
            }, a);
            n && r.push(n);
          }
        }), r;
      }
      o(Wb, "filterHiddenRects");
      function Yb(e) {
        dr();
        var t = se(e), r = t._grid;
        if (!r)
          return [];
        var a = ao(e);
        return a.map(function(n) {
          return Vi(r, n);
        });
      }
      o(Yb, "getTextElementStack");
      var no = Yb, Xb = ["checkbox", "img", "meter", "progressbar", "scrollbar", "radio", "slider", "spinbutton", "textbox"];
      function Kb(e) {
        var t = _e(e), r = t.vNode, a = w.commons.aria.getExplicitRole(r);
        if (a)
          return Xb.indexOf(a) !== -1;
        switch (r.props.nodeName) {
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
            return r.props.type !== "hidden";
          default:
            return !1;
        }
      }
      o(Kb, "isVisualContent");
      var io = Kb, Zb = ["head", "title", "template", "script", "style", "iframe", "object", "video", "audio", "noscript"];
      function dc(e) {
        return Zb.includes(e.props.nodeName) ? !1 : e.children.some(function(t) {
          var r = t.props;
          return r.nodeType === 3 && r.nodeValue.trim();
        });
      }
      o(dc, "hasChildTextNodes");
      function fc(e, t, r) {
        return dc(e) || io(e.actualNode) || !r && !!ln(e) || !t && e.children.some(function(a) {
          return a.actualNode.nodeType === 1 && fc(a);
        });
      }
      o(fc, "hasContentVirtual");
      var la = fc;
      function Jb(e, t, r) {
        return e = se(e), la(e, t, r);
      }
      o(Jb, "hasContent");
      var cn = Jb;
      function oo(e) {
        return typeof e.children > "u" || dc(e) ? !0 : e.props.nodeType === 1 && io(e) ? !!w.commons.text.accessibleTextVirtual(e) : e.children.some(function(t) {
          return !t.attr("lang") && oo(t) && !Vt(t);
        });
      }
      o(oo, "_hasLangText");
      function Qb(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return t > -1 && Se(e) && !Hi(e);
      }
      o(Qb, "insertedIntoFocusOrder");
      var pc = Qb;
      function mc(e, t) {
        var r = _e(e), a = r.vNode, n = r.domNode;
        return a ? (a._isHiddenWithCSS === void 0 && (a._isHiddenWithCSS = hc(n, t)), a._isHiddenWithCSS) : hc(n, t);
      }
      o(mc, "isHiddenWithCSS");
      function hc(e, t) {
        if (e.nodeType === 9 || (e.nodeType === 11 && (e = e.host), ["STYLE", "SCRIPT"].includes(e.nodeName.toUpperCase())))
          return !1;
        var r = D.getComputedStyle(e, null);
        if (!r)
          throw new Error("Style does not exist for the given element.");
        var a = r.getPropertyValue("display");
        if (a === "none")
          return !0;
        var n = ["hidden", "collapse"], i = r.getPropertyValue("visibility");
        if (n.includes(i) && !t || n.includes(i) && t && n.includes(t))
          return !0;
        var u = $e(e);
        return u && !n.includes(i) ? mc(u, i) : !1;
      }
      o(hc, "_isHiddenWithCSS");
      var ey = mc;
      function ty(e) {
        var t = e.doctype;
        return t === null ? !1 : t.name === "html" && !t.publicId && !t.systemId;
      }
      o(ty, "isHTML5");
      var vc = ty;
      function ry(e) {
        var t;
        (e instanceof He || (t = D) !== null && t !== void 0 && t.Node && e instanceof D.Node) && (e = w.commons.aria.getRole(e));
        var r = ve.ariaRoles[e];
        return r?.type || null;
      }
      o(ry, "getRoleType");
      var Rt = ry;
      function gc(e, t) {
        t(e.actualNode) !== !1 && e.children.forEach(function(r) {
          return gc(r, t);
        });
      }
      o(gc, "walkDomNode");
      var ay = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function bc(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return ay.includes(t) || t.substr(0, 6) === "table-";
      }
      o(bc, "isBlock");
      function ny(e) {
        for (var t = $e(e); t && !bc(t); )
          t = $e(t);
        return se(t);
      }
      o(ny, "getBlockParent");
      function iy(e, t) {
        if (bc(e))
          return !1;
        var r = ny(e), a = "", n = "", i = 0;
        return gc(r, function(u) {
          if (i === 2)
            return !1;
          if (u.nodeType === 3 && (a += u.nodeValue), u.nodeType === 1) {
            var l = (u.nodeName || "").toUpperCase();
            if (u === e && (i = 1), ["BR", "HR"].includes(l))
              i === 0 ? (a = "", n = "") : i = 2;
            else {
              if (u.style.display === "none" || u.style.overflow === "hidden" || !["", null, "none"].includes(u.style.float) || !["", null, "relative"].includes(u.style.position))
                return !1;
              if (Rt(u) === "widget")
                return n += u.textContent, !1;
            }
          }
        }), a = ne(a), t != null && t.noLengthCompare ? a.length !== 0 : (n = ne(n), a.length > n.length);
      }
      o(iy, "isInTextBlock");
      var uo = iy;
      function oy(e) {
        e = e || {};
        var t = e.modalPercent || 0.75;
        if (le.get("isModalOpen"))
          return le.get("isModalOpen");
        var r = St(w._tree[0], "dialog, [role=dialog], [aria-modal=true]", ot);
        if (r.length)
          return le.set("isModalOpen", !0), !0;
        for (var a = Xa(D), n = a.width * t, i = a.height * t, u = (a.width - n) / 2, l = (a.height - i) / 2, s = [{
          x: u,
          y: l
        }, {
          x: a.width - u,
          y: l
        }, {
          x: a.width / 2,
          y: a.height / 2
        }, {
          x: u,
          y: a.height - l
        }, {
          x: a.width - u,
          y: a.height - l
        }], c = s.map(function(m) {
          return Array.from(N.elementsFromPoint(m.x, m.y));
        }), d = /* @__PURE__ */ o(function(h) {
          var v = c[h].find(function(b) {
            var g = D.getComputedStyle(b);
            return parseInt(g.width, 10) >= n && parseInt(g.height, 10) >= i && g.getPropertyValue("pointer-events") !== "none" && (g.position === "absolute" || g.position === "fixed");
          });
          if (v && c.every(function(b) {
            return b.includes(v);
          }))
            return le.set("isModalOpen", !0), {
              v: !0
            };
        }, "_loop4"), f = 0; f < c.length; f++) {
          var p = d(f);
          if (S(p) === "object")
            return p.v;
        }
        le.set("isModalOpen", void 0);
      }
      o(oy, "isModalOpen");
      var sa = oy;
      function yc(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, r = e.ownerDocument.createRange();
        r.setStart(e, 0), r.setEnd(e, e.childNodes.length);
        var a = 0, n = 0, i = Fe(r.getClientRects()), u;
        try {
          for (i.s(); !(u = i.n()).done; ) {
            var l = u.value;
            if (!(l.height <= t))
              if (a > l.top + t)
                a = Math.max(a, l.bottom);
              else if (n === 0)
                a = l.bottom, n++;
              else
                return !0;
          }
        } catch (s) {
          i.e(s);
        } finally {
          i.f();
        }
        return !1;
      }
      o(yc, "_isMultiline");
      function uy(e) {
        return e instanceof D.Node;
      }
      o(uy, "isNode");
      var ly = uy, lo = "color.incompleteData", sy = {
        set: /* @__PURE__ */ o(function(t, r) {
          if (typeof t != "string")
            throw new Error("Incomplete data: key must be a string");
          var a = le.get(lo, function() {
            return {};
          });
          return r && (a[t] = r), a[t];
        }, "set"),
        get: /* @__PURE__ */ o(function(t) {
          var r = le.get(lo);
          return r?.[t];
        }, "get"),
        clear: /* @__PURE__ */ o(function() {
          le.set(lo, {});
        }, "clear")
      }, Ge = sy;
      function cy(e, t) {
        var r = ["IMG", "CANVAS", "OBJECT", "IFRAME", "VIDEO", "SVG"], a = e.nodeName.toUpperCase();
        if (r.includes(a))
          return Ge.set("bgColor", "imgNode"), !0;
        t = t || D.getComputedStyle(e);
        var n = t.getPropertyValue("background-image"), i = n !== "none";
        if (i) {
          var u = /gradient/.test(n);
          Ge.set("bgColor", u ? "bgGradient" : "bgImage");
        }
        return i;
      }
      o(cy, "elementHasImage");
      var dn = cy, wc = {};
      gt(wc, {
        Colorjs: /* @__PURE__ */ o(function() {
          return st;
        }, "Colorjs"),
        CssSelectorParser: /* @__PURE__ */ o(function() {
          return dy.CssSelectorParser;
        }, "CssSelectorParser"),
        doT: /* @__PURE__ */ o(function() {
          return Dc.default;
        }, "doT"),
        emojiRegexText: /* @__PURE__ */ o(function() {
          return Qi;
        }, "emojiRegexText"),
        memoize: /* @__PURE__ */ o(function() {
          return fy.default;
        }, "memoize")
      });
      var dy = Et(Gu()), Dc = Et(Wu()), fy = Et($u());
      function Ie(e, t) {
        var r = e.length;
        Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map(function(u) {
          return [u];
        }));
        var a = t[0].length, n = t[0].map(function(u, l) {
          return t.map(function(s) {
            return s[l];
          });
        }), i = e.map(function(u) {
          return n.map(function(l) {
            var s = 0;
            if (!Array.isArray(u)) {
              var c = Fe(l), d;
              try {
                for (c.s(); !(d = c.n()).done; ) {
                  var f = d.value;
                  s += u * f;
                }
              } catch (m) {
                c.e(m);
              } finally {
                c.f();
              }
              return s;
            }
            for (var p = 0; p < u.length; p++)
              s += u[p] * (l[p] || 0);
            return s;
          });
        });
        return r === 1 && (i = i[0]), a === 1 ? i.map(function(u) {
          return u[0];
        }) : i;
      }
      o(Ie, "multiplyMatrices");
      function ca(e) {
        return $t(e) === "string";
      }
      o(ca, "isString");
      function $t(e) {
        var t = Object.prototype.toString.call(e);
        return (t.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
      }
      o($t, "type");
      function fn(e, t) {
        e = +e, t = +t;
        var r = (Math.floor(e) + "").length;
        if (t > r)
          return +e.toFixed(t - r);
        var a = Math.pow(10, r - t);
        return Math.round(e / a) * a;
      }
      o(fn, "toPrecision");
      function _c(e) {
        if (!!e) {
          e = e.trim();
          var t = /^([a-z]+)\((.+?)\)$/i, r = /^-?[\d.]+$/, a = e.match(t);
          if (a) {
            var n = [];
            return a[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g, function(i, u) {
              /%$/.test(u) ? (u = new Number(u.slice(0, -1) / 100), u.type = "<percentage>") : /deg$/.test(u) ? (u = new Number(+u.slice(0, -3)), u.type = "<angle>", u.unit = "deg") : r.test(u) && (u = new Number(u), u.type = "<number>"), i.startsWith("/") && (u = u instanceof Number ? u : new Number(u), u.alpha = !0), n.push(u);
            }), {
              name: a[1].toLowerCase(),
              rawName: a[1],
              rawArgs: a[2],
              args: n
            };
          }
        }
      }
      o(_c, "parseFunction");
      function xc(e) {
        return e[e.length - 1];
      }
      o(xc, "last");
      function pn(e, t, r) {
        return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
      }
      o(pn, "interpolate");
      function Ec(e, t, r) {
        return (r - e) / (t - e);
      }
      o(Ec, "interpolateInv");
      function so(e, t, r) {
        return pn(t[0], t[1], Ec(e[0], e[1], r));
      }
      o(so, "mapRange");
      function Cc(e) {
        return e.map(function(t) {
          return t.split("|").map(function(r) {
            r = r.trim();
            var a = r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
            if (a) {
              var n = new String(a[1]);
              return n.range = [+a[2], +a[3]], n;
            }
            return r;
          });
        });
      }
      o(Cc, "parseCoordGrammar");
      var py = Object.freeze({
        __proto__: null,
        isString: ca,
        type: $t,
        toPrecision: fn,
        parseFunction: _c,
        last: xc,
        interpolate: pn,
        interpolateInv: Ec,
        mapRange: so,
        parseCoordGrammar: Cc,
        multiplyMatrices: Ie
      }), my = function() {
        function e() {
          _t(this, e);
        }
        return o(e, "Hooks"), xt(e, [{
          key: "add",
          value: /* @__PURE__ */ o(function(r, a, n) {
            if (typeof arguments[0] != "string") {
              for (var r in arguments[0])
                this.add(r, arguments[0][r], arguments[1]);
              return;
            }
            (Array.isArray(r) ? r : [r]).forEach(function(i) {
              this[i] = this[i] || [], a && this[i][n ? "unshift" : "push"](a);
            }, this);
          }, "add")
        }, {
          key: "run",
          value: /* @__PURE__ */ o(function(r, a) {
            this[r] = this[r] || [], this[r].forEach(function(n) {
              n.call(a && a.context ? a.context : a, a);
            });
          }, "run")
        }]), e;
      }(), Ut = new my(), kt = {
        gamut_mapping: "lch.c",
        precision: 5,
        deltaE: "76"
      }, Dt = {
        D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
        D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
      };
      function co(e) {
        return Array.isArray(e) ? e : Dt[e];
      }
      o(co, "getWhite");
      function mn(e, t, r) {
        var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        if (e = co(e), t = co(t), !e || !t)
          throw new TypeError("Missing white point to convert ".concat(e ? "" : "from").concat(!e && !t ? "/" : "").concat(t ? "" : "to"));
        if (e === t)
          return r;
        var n = {
          W1: e,
          W2: t,
          XYZ: r,
          options: a
        };
        if (Ut.run("chromatic-adaptation-start", n), n.M || (n.W1 === Dt.D65 && n.W2 === Dt.D50 ? n.M = [[1.0479298208405488, 0.022946793341019088, -0.05019222954313557], [0.029627815688159344, 0.990434484573249, -0.01707382502938514], [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]] : n.W1 === Dt.D50 && n.W2 === Dt.D65 && (n.M = [[0.9554734527042182, -0.023098536874261423, 0.0632593086610217], [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008], [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]])), Ut.run("chromatic-adaptation-end", n), n.M)
          return Ie(n.M, n.XYZ);
        throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
      }
      o(mn, "adapt$1");
      var hy = 75e-6, vy = (A = /* @__PURE__ */ new WeakSet(), R = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakSet(), function() {
        function e(t) {
          var r, a, n, i, u, l, s;
          _t(this, e), Eu(this, I), Eu(this, A), xu(this, R, {
            writable: !0,
            value: void 0
          }), this.id = t.id, this.name = t.name, this.base = t.base ? e.get(t.base) : null, this.aliases = t.aliases, this.base && (this.fromBase = t.fromBase, this.toBase = t.toBase);
          var c = (r = t.coords) !== null && r !== void 0 ? r : this.base.coords;
          this.coords = c;
          var d = (a = (n = t.white) !== null && n !== void 0 ? n : this.base.white) !== null && a !== void 0 ? a : "D65";
          this.white = co(d), this.formats = (i = t.formats) !== null && i !== void 0 ? i : {};
          for (var f in this.formats) {
            var p = this.formats[f];
            p.type || (p.type = "function"), p.name || (p.name = f);
          }
          t.cssId && !((u = this.formats.functions) !== null && u !== void 0 && u.color) ? (this.formats.color = {
            id: t.cssId
          }, Object.defineProperty(this, "cssId", {
            value: t.cssId
          })) : (l = this.formats) !== null && l !== void 0 && l.color && !((s = this.formats) !== null && s !== void 0 && s.color.id) && (this.formats.color.id = this.id), this.referred = t.referred, Au(this, R, Zn(this, I, gy).call(this).reverse()), Ut.run("colorspace-init-end", this);
        }
        return o(e, "_ColorSpace"), xt(e, [{
          key: "inGamut",
          value: /* @__PURE__ */ o(function(r) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.epsilon, i = n === void 0 ? hy : n;
            if (this.isPolar)
              return r = this.toBase(r), this.base.inGamut(r, {
                epsilon: i
              });
            var u = Object.values(this.coords);
            return r.every(function(l, s) {
              var c = u[s];
              if (c.type !== "angle" && c.range) {
                if (Number.isNaN(l))
                  return !0;
                var d = H(c.range, 2), f = d[0], p = d[1];
                return (f === void 0 || l >= f - i) && (p === void 0 || l <= p + i);
              }
              return !0;
            });
          }, "inGamut")
        }, {
          key: "cssId",
          get: /* @__PURE__ */ o(function() {
            var r, a;
            return ((r = this.formats.functions) === null || r === void 0 || (a = r.color) === null || a === void 0 ? void 0 : a.id) || this.id;
          }, "get")
        }, {
          key: "isPolar",
          get: /* @__PURE__ */ o(function() {
            for (var r in this.coords)
              if (this.coords[r].type === "angle")
                return !0;
            return !1;
          }, "get")
        }, {
          key: "getFormat",
          value: /* @__PURE__ */ o(function(r) {
            if (S(r) === "object")
              return r = Zn(this, A, Ac).call(this, r), r;
            var a;
            return r === "default" ? a = Object.values(this.formats)[0] : a = this.formats[r], a ? (a = Zn(this, A, Ac).call(this, a), a) : null;
          }, "getFormat")
        }, {
          key: "to",
          value: /* @__PURE__ */ o(function(r, a) {
            if (arguments.length === 1) {
              var n = [r.space, r.coords];
              r = n[0], a = n[1];
            }
            if (r = e.get(r), this === r)
              return a;
            a = a.map(function(p) {
              return Number.isNaN(p) ? 0 : p;
            });
            for (var i = Hr(this, R), u = Hr(r, R), l, s, c = 0; c < i.length && i[c] === u[c]; c++)
              l = i[c], s = c;
            if (!l)
              throw new Error("Cannot convert between color spaces ".concat(this, " and ").concat(r, ": no connection space was found"));
            for (var d = i.length - 1; d > s; d--)
              a = i[d].toBase(a);
            for (var f = s + 1; f < u.length; f++)
              a = u[f].fromBase(a);
            return a;
          }, "to")
        }, {
          key: "from",
          value: /* @__PURE__ */ o(function(r, a) {
            if (arguments.length === 1) {
              var n = [r.space, r.coords];
              r = n[0], a = n[1];
            }
            return r = e.get(r), r.to(this, a);
          }, "from")
        }, {
          key: "toString",
          value: /* @__PURE__ */ o(function() {
            return "".concat(this.name, " (").concat(this.id, ")");
          }, "toString")
        }, {
          key: "getMinCoords",
          value: /* @__PURE__ */ o(function() {
            var r = [];
            for (var a in this.coords) {
              var n, i = this.coords[a], u = i.range || i.refRange;
              r.push((n = u?.min) !== null && n !== void 0 ? n : 0);
            }
            return r;
          }, "getMinCoords")
        }], [{
          key: "all",
          get: /* @__PURE__ */ o(function() {
            return ae(new Set(Object.values(e.registry)));
          }, "get")
        }, {
          key: "register",
          value: /* @__PURE__ */ o(function(r, a) {
            if (arguments.length === 1 && (a = arguments[0], r = a.id), a = this.get(a), this.registry[r] && this.registry[r] !== a)
              throw new Error("Duplicate color space registration: '".concat(r, "'"));
            if (this.registry[r] = a, arguments.length === 1 && a.aliases) {
              var n = Fe(a.aliases), i;
              try {
                for (n.s(); !(i = n.n()).done; ) {
                  var u = i.value;
                  this.register(u, a);
                }
              } catch (l) {
                n.e(l);
              } finally {
                n.f();
              }
            }
            return a;
          }, "register")
        }, {
          key: "get",
          value: /* @__PURE__ */ o(function(r) {
            if (!r || r instanceof e)
              return r;
            var a = $t(r);
            if (a === "string") {
              var n = e.registry[r.toLowerCase()];
              if (!n)
                throw new TypeError('No color space found with id = "'.concat(r, '"'));
              return n;
            }
            for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
              u[l - 1] = arguments[l];
            if (u.length)
              return e.get.apply(e, u);
            throw new TypeError("".concat(r, " is not a valid color space"));
          }, "get")
        }, {
          key: "resolveCoord",
          value: /* @__PURE__ */ o(function(r, a) {
            var n = $t(r), i, u;
            if (n === "string")
              if (r.includes(".")) {
                var l = r.split("."), s = H(l, 2);
                i = s[0], u = s[1];
              } else
                i = void 0, u = r;
            else if (Array.isArray(r)) {
              var c = H(r, 2);
              i = c[0], u = c[1];
            } else
              i = r.space, u = r.coordId;
            if (i = e.get(i), i || (i = a), !i)
              throw new TypeError("Cannot resolve coordinate reference ".concat(r, ": No color space specified and relative references are not allowed here"));
            if (n = $t(u), n === "number" || n === "string" && u >= 0) {
              var d = Object.entries(i.coords)[u];
              if (d)
                return pe({
                  space: i,
                  id: d[0],
                  index: u
                }, d[1]);
            }
            i = e.get(i);
            var f = u.toLowerCase(), p = 0;
            for (var m in i.coords) {
              var h, v = i.coords[m];
              if (m.toLowerCase() === f || ((h = v.name) === null || h === void 0 ? void 0 : h.toLowerCase()) === f)
                return pe({
                  space: i,
                  id: m,
                  index: p
                }, v);
              p++;
            }
            throw new TypeError('No "'.concat(u, '" coordinate found in ').concat(i.name, ". Its coordinates are: ").concat(Object.keys(i.coords).join(", ")));
          }, "resolveCoord")
        }]), e;
      }());
      function Ac(e) {
        if (e.coords && !e.coordGrammar) {
          e.type || (e.type = "function"), e.name || (e.name = "color"), e.coordGrammar = Cc(e.coords);
          var t = Object.entries(this.coords).map(function(r, a) {
            var n = H(r, 2);
            n[0];
            var i = n[1], u = e.coordGrammar[a][0], l = i.range || i.refRange, s = u.range, c = "";
            return u == "<percentage>" ? (s = [0, 100], c = "%") : u == "<angle>" && (c = "deg"), {
              fromRange: l,
              toRange: s,
              suffix: c
            };
          });
          e.serializeCoords = function(r, a) {
            return r.map(function(n, i) {
              var u = t[i], l = u.fromRange, s = u.toRange, c = u.suffix;
              return l && s && (n = so(l, s, n)), n = fn(n, a), c && (n += c), n;
            });
          };
        }
        return e;
      }
      o(Ac, "_processFormat2");
      function gy() {
        for (var e = [this], t = this; t = t.base; )
          e.push(t);
        return e;
      }
      o(gy, "_getPath2");
      var te = vy;
      Mu(te, "registry", {}), Mu(te, "DEFAULT_FORMAT", {
        type: "functions",
        name: "color"
      });
      var mt = new te({
        id: "xyz-d65",
        name: "XYZ D65",
        coords: {
          x: {
            name: "X"
          },
          y: {
            name: "Y"
          },
          z: {
            name: "Z"
          }
        },
        white: "D65",
        formats: {
          color: {
            ids: ["xyz-d65", "xyz"]
          }
        },
        aliases: ["xyz"]
      }), at = function(e) {
        Xn(r, e);
        var t = Kn(r);
        function r(a) {
          var n, i;
          if (_t(this, r), a.coords || (a.coords = {
            r: {
              range: [0, 1],
              name: "Red"
            },
            g: {
              range: [0, 1],
              name: "Green"
            },
            b: {
              range: [0, 1],
              name: "Blue"
            }
          }), a.base || (a.base = mt), a.toXYZ_M && a.fromXYZ_M) {
            var u, l;
            (u = a.toBase) !== null && u !== void 0 || (a.toBase = function(s) {
              var c = Ie(a.toXYZ_M, s);
              return i.white !== i.base.white && (c = mn(i.white, i.base.white, c)), c;
            }), (l = a.fromBase) !== null && l !== void 0 || (a.fromBase = function(s) {
              return s = mn(i.base.white, i.white, s), Ie(a.fromXYZ_M, s);
            });
          }
          return (n = a.referred) !== null && n !== void 0 || (a.referred = "display"), i = t.call(this, a);
        }
        return o(r, "RGBColorSpace"), xt(r);
      }(te);
      function Fc(e) {
        var t, r = {
          str: (t = String(e)) === null || t === void 0 ? void 0 : t.trim()
        };
        if (Ut.run("parse-start", r), r.color)
          return r.color;
        if (r.parsed = _c(r.str), r.parsed) {
          var a = function() {
            var f = r.parsed.name;
            if (f === "color") {
              var p = r.parsed.args.shift(), m = r.parsed.rawArgs.indexOf("/") > 0 ? r.parsed.args.pop() : 1, h = Fe(te.all), v;
              try {
                for (h.s(); !(v = h.n()).done; ) {
                  var b = v.value, g = b.getFormat("color");
                  if (g) {
                    var y;
                    if (p === g.id || (y = g.ids) !== null && y !== void 0 && y.includes(p)) {
                      var _ = function() {
                        var V = Object.keys(b.coords).length, J = Array(V).fill(0);
                        return J.forEach(function(re, ee) {
                          return J[ee] = r.parsed.args[ee] || 0;
                        }), {
                          v: {
                            v: {
                              spaceId: b.id,
                              coords: J,
                              alpha: m
                            }
                          }
                        };
                      }();
                      if (S(_) === "object")
                        return _.v;
                    }
                  }
                }
              } catch (V) {
                h.e(V);
              } finally {
                h.f();
              }
              var x = "";
              if (p in te.registry) {
                var T, k, O, B = (T = te.registry[p].formats) === null || T === void 0 || (k = T.functions) === null || k === void 0 || (O = k.color) === null || O === void 0 ? void 0 : O.id;
                B && (x = "Did you mean color(".concat(B, ")?"));
              }
              throw new TypeError("Cannot parse color(".concat(p, "). ") + (x || "Missing a plugin?"));
            } else {
              var W = Fe(te.all), j;
              try {
                var z = /* @__PURE__ */ o(function() {
                  var J = j.value, re = J.getFormat(f);
                  if (re && re.type === "function") {
                    var ee = 1;
                    (re.lastAlpha || xc(r.parsed.args).alpha) && (ee = r.parsed.args.pop());
                    var Y = r.parsed.args;
                    return re.coordGrammar && Object.entries(J.coords).forEach(function(q, ie) {
                      var E, G = H(q, 2), P = G[0], Q = G[1], oe = re.coordGrammar[ie], U = (E = Y[ie]) === null || E === void 0 ? void 0 : E.type;
                      if (oe = oe.find(function(xe) {
                        return xe == U;
                      }), !oe) {
                        var K = Q.name || P;
                        throw new TypeError("".concat(U, " not allowed for ").concat(K, " in ").concat(f, "()"));
                      }
                      var ge = oe.range;
                      U === "<percentage>" && (ge || (ge = [0, 1]));
                      var we = Q.range || Q.refRange;
                      ge && we && (Y[ie] = so(ge, we, Y[ie]));
                    }), {
                      v: {
                        v: {
                          spaceId: J.id,
                          coords: Y,
                          alpha: ee
                        }
                      }
                    };
                  }
                }, "_loop5");
                for (W.s(); !(j = W.n()).done; ) {
                  var $ = z();
                  if (S($) === "object")
                    return $.v;
                }
              } catch (V) {
                W.e(V);
              } finally {
                W.f();
              }
            }
          }();
          if (S(a) === "object")
            return a.v;
        } else {
          var n = Fe(te.all), i;
          try {
            for (n.s(); !(i = n.n()).done; ) {
              var u = i.value;
              for (var l in u.formats) {
                var s = u.formats[l];
                if (s.type === "custom" && !(s.test && !s.test(r.str))) {
                  var c = s.parse(r.str);
                  if (c) {
                    var d;
                    return (d = c.alpha) !== null && d !== void 0 || (c.alpha = 1), c;
                  }
                }
              }
            }
          } catch (f) {
            n.e(f);
          } finally {
            n.f();
          }
        }
        throw new TypeError("Could not parse ".concat(e, " as a color. Missing a plugin?"));
      }
      o(Fc, "parse2");
      function ye(e) {
        if (!e)
          throw new TypeError("Empty color reference");
        ca(e) && (e = Fc(e));
        var t = e.space || e.spaceId;
        return t instanceof te || (e.space = te.get(t)), e.alpha === void 0 && (e.alpha = 1), e;
      }
      o(ye, "getColor");
      function da(e, t) {
        return t = te.get(t), t.from(e);
      }
      o(da, "getAll");
      function ht(e, t) {
        var r = te.resolveCoord(t, e.space), a = r.space, n = r.index, i = da(e, a);
        return i[n];
      }
      o(ht, "get");
      function Tc(e, t, r) {
        return t = te.get(t), e.coords = t.to(e.space, r), e;
      }
      o(Tc, "setAll");
      function Gt(e, t, r) {
        if (e = ye(e), arguments.length === 2 && $t(arguments[1]) === "object") {
          var a = arguments[1];
          for (var n in a)
            Gt(e, n, a[n]);
        } else {
          typeof r == "function" && (r = r(ht(e, t)));
          var i = te.resolveCoord(t, e.space), u = i.space, l = i.index, s = da(e, u);
          s[l] = r, Tc(e, u, s);
        }
        return e;
      }
      o(Gt, "set");
      var fo = new te({
        id: "xyz-d50",
        name: "XYZ D50",
        white: "D50",
        base: mt,
        fromBase: /* @__PURE__ */ o(function(t) {
          return mn(mt.white, "D50", t);
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          return mn("D50", mt.white, t);
        }, "toBase"),
        formats: {
          color: {}
        }
      }), by = 216 / 24389, Rc = 24 / 116, hn = 24389 / 27, po = Dt.D50, lt = new te({
        id: "lab",
        name: "Lab",
        coords: {
          l: {
            refRange: [0, 100],
            name: "L"
          },
          a: {
            refRange: [-125, 125]
          },
          b: {
            refRange: [-125, 125]
          }
        },
        white: po,
        base: fo,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = t.map(function(n, i) {
            return n / po[i];
          }), a = r.map(function(n) {
            return n > by ? Math.cbrt(n) : (hn * n + 16) / 116;
          });
          return [116 * a[1] - 16, 500 * (a[0] - a[1]), 200 * (a[1] - a[2])];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = [];
          r[1] = (t[0] + 16) / 116, r[0] = t[1] / 500 + r[1], r[2] = r[1] - t[2] / 200;
          var a = [r[0] > Rc ? Math.pow(r[0], 3) : (116 * r[0] - 16) / hn, t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / hn, r[2] > Rc ? Math.pow(r[2], 3) : (116 * r[2] - 16) / hn];
          return a.map(function(n, i) {
            return n * po[i];
          });
        }, "toBase"),
        formats: {
          lab: {
            coords: ["<number> | <percentage>", "<number>", "<number>"]
          }
        }
      });
      function vn(e) {
        return (e % 360 + 360) % 360;
      }
      o(vn, "constrain");
      function yy(e, t) {
        if (e === "raw")
          return t;
        var r = t.map(vn), a = H(r, 2), n = a[0], i = a[1], u = i - n;
        return e === "increasing" ? u < 0 && (i += 360) : e === "decreasing" ? u > 0 && (n += 360) : e === "longer" ? -180 < u && u < 180 && (u > 0 ? i += 360 : n += 360) : e === "shorter" && (u > 180 ? n += 360 : u < -180 && (i += 360)), [n, i];
      }
      o(yy, "adjust");
      var fa = new te({
        id: "lch",
        name: "LCH",
        coords: {
          l: {
            refRange: [0, 100],
            name: "Lightness"
          },
          c: {
            refRange: [0, 150],
            name: "Chroma"
          },
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          }
        },
        base: lt,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u, l = 0.02;
          return Math.abs(n) < l && Math.abs(i) < l ? u = NaN : u = Math.atan2(i, n) * 180 / Math.PI, [a, Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)), vn(u)];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2];
          return n < 0 && (n = 0), isNaN(i) && (i = 0), [a, n * Math.cos(i * Math.PI / 180), n * Math.sin(i * Math.PI / 180)];
        }, "toBase"),
        formats: {
          lch: {
            coords: ["<number> | <percentage>", "<number>", "<number> | <angle>"]
          }
        }
      }), kc = Math.pow(25, 7), gn = Math.PI, Sc = 180 / gn, Mr = gn / 180;
      function mo(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.kL, n = a === void 0 ? 1 : a, i = r.kC, u = i === void 0 ? 1 : i, l = r.kH, s = l === void 0 ? 1 : l, c = lt.from(e), d = H(c, 3), f = d[0], p = d[1], m = d[2], h = fa.from(lt, [f, p, m])[1], v = lt.from(t), b = H(v, 3), g = b[0], y = b[1], _ = b[2], x = fa.from(lt, [g, y, _])[1];
        h < 0 && (h = 0), x < 0 && (x = 0);
        var T = (h + x) / 2, k = Math.pow(T, 7), O = 0.5 * (1 - Math.sqrt(k / (k + kc))), B = (1 + O) * p, W = (1 + O) * y, j = Math.sqrt(Math.pow(B, 2) + Math.pow(m, 2)), z = Math.sqrt(Math.pow(W, 2) + Math.pow(_, 2)), $ = B === 0 && m === 0 ? 0 : Math.atan2(m, B), V = W === 0 && _ === 0 ? 0 : Math.atan2(_, W);
        $ < 0 && ($ += 2 * gn), V < 0 && (V += 2 * gn), $ *= Sc, V *= Sc;
        var J = g - f, re = z - j, ee = V - $, Y = $ + V, q = Math.abs(ee), ie;
        j * z === 0 ? ie = 0 : q <= 180 ? ie = ee : ee > 180 ? ie = ee - 360 : ee < -180 ? ie = ee + 360 : console.log("the unthinkable has happened");
        var E = 2 * Math.sqrt(z * j) * Math.sin(ie * Mr / 2), G = (f + g) / 2, P = (j + z) / 2, Q = Math.pow(P, 7), oe;
        j * z === 0 ? oe = Y : q <= 180 ? oe = Y / 2 : Y < 360 ? oe = (Y + 360) / 2 : oe = (Y - 360) / 2;
        var U = Math.pow(G - 50, 2), K = 1 + 0.015 * U / Math.sqrt(20 + U), ge = 1 + 0.045 * P, we = 1;
        we -= 0.17 * Math.cos((oe - 30) * Mr), we += 0.24 * Math.cos(2 * oe * Mr), we += 0.32 * Math.cos((3 * oe + 6) * Mr), we -= 0.2 * Math.cos((4 * oe - 63) * Mr);
        var xe = 1 + 0.015 * P * we, Me = 30 * Math.exp(-1 * Math.pow((oe - 275) / 25, 2)), je = 2 * Math.sqrt(Q / (Q + kc)), Pe = -1 * Math.sin(2 * Me * Mr) * je, Ce = Math.pow(J / (n * K), 2);
        return Ce += Math.pow(re / (u * ge), 2), Ce += Math.pow(E / (s * xe), 2), Ce += Pe * (re / (u * ge)) * (E / (s * xe)), Math.sqrt(Ce);
      }
      o(mo, "deltaE2000");
      var wy = 75e-6;
      function pa(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.space, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.epsilon, n = a === void 0 ? wy : a;
        e = ye(e), t = te.get(t);
        var i = e.coords;
        return t !== e.space && (i = t.from(e)), t.inGamut(i, {
          epsilon: n
        });
      }
      o(pa, "inGamut");
      function ma(e) {
        return {
          space: e.space,
          coords: e.coords.slice(),
          alpha: e.alpha
        };
      }
      o(ma, "clone2");
      function Wt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.method, a = r === void 0 ? kt.gamut_mapping : r, n = t.space, i = n === void 0 ? e.space : n;
        if (ca(arguments[1]) && (i = arguments[1]), i = te.get(i), pa(e, i, {
          epsilon: 0
        }))
          return e;
        var u = vt(e, i);
        if (a !== "clip" && !pa(e, i)) {
          var l = Wt(ma(u), {
            method: "clip",
            space: i
          });
          if (mo(e, l) > 2) {
            for (var s = te.resolveCoord(a), c = s.space, d = s.id, f = vt(u, c), p = s.range || s.refRange, m = p[0], h = 0.01, v = m, b = ht(f, d); b - v > h; ) {
              var g = ma(f);
              g = Wt(g, {
                space: i,
                method: "clip"
              });
              var y = mo(f, g);
              y - 2 < h ? v = ht(f, d) : b = ht(f, d), Gt(f, d, (v + b) / 2);
            }
            u = vt(f, i);
          } else
            u = l;
        }
        if (a === "clip" || !pa(u, i, {
          epsilon: 0
        })) {
          var _ = Object.values(i.coords).map(function(x) {
            return x.range || [];
          });
          u.coords = u.coords.map(function(x, T) {
            var k = H(_[T], 2), O = k[0], B = k[1];
            return O !== void 0 && (x = Math.max(O, x)), B !== void 0 && (x = Math.min(x, B)), x;
          });
        }
        return i !== e.space && (u = vt(u, e.space)), e.coords = u.coords, e;
      }
      o(Wt, "toGamut"), Wt.returns = "color";
      function vt(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.inGamut;
        e = ye(e), t = te.get(t);
        var n = t.from(e), i = {
          space: t,
          coords: n,
          alpha: e.alpha
        };
        return a && (i = Wt(i)), i;
      }
      o(vt, "to"), vt.returns = "color";
      function bn(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.precision, i = n === void 0 ? kt.precision : n, u = a.format, l = u === void 0 ? "default" : u, s = a.inGamut, c = s === void 0 ? !0 : s, d = Le(a, Gf), f;
        e = ye(e);
        var p = l;
        l = (t = (r = e.space.getFormat(l)) !== null && r !== void 0 ? r : e.space.getFormat("default")) !== null && t !== void 0 ? t : te.DEFAULT_FORMAT, c || (c = l.toGamut);
        var m = e.coords;
        if (m = m.map(function(x) {
          return x || 0;
        }), c && !pa(e) && (m = Wt(ma(e), c === !0 ? void 0 : c).coords), l.type === "custom")
          if (d.precision = i, l.serialize)
            f = l.serialize(m, e.alpha, d);
          else
            throw new TypeError("format ".concat(p, " can only be used to parse colors, not for serialization"));
        else {
          var h = l.name || "color";
          l.serializeCoords ? m = l.serializeCoords(m, i) : i !== null && (m = m.map(function(x) {
            return fn(x, i);
          }));
          var v = ae(m);
          if (h === "color") {
            var b, g = l.id || ((b = l.ids) === null || b === void 0 ? void 0 : b[0]) || e.space.id;
            v.unshift(g);
          }
          var y = e.alpha;
          i !== null && (y = fn(y, i));
          var _ = e.alpha < 1 && !l.noAlpha ? "".concat(l.commas ? "," : " /", " ").concat(y) : "";
          f = "".concat(h, "(").concat(v.join(l.commas ? ", " : " ")).concat(_, ")");
        }
        return f;
      }
      o(bn, "serialize");
      var Dy = [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0, 0.028072693049087428, 1.060985057710791]], _y = [[1.716651187971268, -0.355670783776392, -0.25336628137366], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]], yn = new at({
        id: "rec2020-linear",
        name: "Linear REC.2020",
        white: "D65",
        toXYZ_M: Dy,
        fromXYZ_M: _y,
        formats: {
          color: {}
        }
      }), wn = 1.09929682680944, Oc = 0.018053968510807, Mc = new at({
        id: "rec2020",
        name: "REC.2020",
        base: yn,
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r < Oc * 4.5 ? r / 4.5 : Math.pow((r + wn - 1) / wn, 1 / 0.45);
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r >= Oc ? wn * Math.pow(r, 0.45) - (wn - 1) : 4.5 * r;
          });
        }, "fromBase"),
        formats: {
          color: {}
        }
      }), xy = [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0, 0.04511338185890264, 1.043944368900976]], Ey = [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]], Nc = new at({
        id: "p3-linear",
        name: "Linear P3",
        white: "D65",
        toXYZ_M: xy,
        fromXYZ_M: Ey
      }), Cy = [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]], Ay = [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]], Ic = new at({
        id: "srgb-linear",
        name: "Linear sRGB",
        white: "D65",
        toXYZ_M: Cy,
        fromXYZ_M: Ay,
        formats: {
          color: {}
        }
      }), Pc = {
        aliceblue: [240 / 255, 248 / 255, 1],
        antiquewhite: [250 / 255, 235 / 255, 215 / 255],
        aqua: [0, 1, 1],
        aquamarine: [127 / 255, 1, 212 / 255],
        azure: [240 / 255, 1, 1],
        beige: [245 / 255, 245 / 255, 220 / 255],
        bisque: [1, 228 / 255, 196 / 255],
        black: [0, 0, 0],
        blanchedalmond: [1, 235 / 255, 205 / 255],
        blue: [0, 0, 1],
        blueviolet: [138 / 255, 43 / 255, 226 / 255],
        brown: [165 / 255, 42 / 255, 42 / 255],
        burlywood: [222 / 255, 184 / 255, 135 / 255],
        cadetblue: [95 / 255, 158 / 255, 160 / 255],
        chartreuse: [127 / 255, 1, 0],
        chocolate: [210 / 255, 105 / 255, 30 / 255],
        coral: [1, 127 / 255, 80 / 255],
        cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
        cornsilk: [1, 248 / 255, 220 / 255],
        crimson: [220 / 255, 20 / 255, 60 / 255],
        cyan: [0, 1, 1],
        darkblue: [0, 0, 139 / 255],
        darkcyan: [0, 139 / 255, 139 / 255],
        darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
        darkgray: [169 / 255, 169 / 255, 169 / 255],
        darkgreen: [0, 100 / 255, 0],
        darkgrey: [169 / 255, 169 / 255, 169 / 255],
        darkkhaki: [189 / 255, 183 / 255, 107 / 255],
        darkmagenta: [139 / 255, 0, 139 / 255],
        darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
        darkorange: [1, 140 / 255, 0],
        darkorchid: [153 / 255, 50 / 255, 204 / 255],
        darkred: [139 / 255, 0, 0],
        darksalmon: [233 / 255, 150 / 255, 122 / 255],
        darkseagreen: [143 / 255, 188 / 255, 143 / 255],
        darkslateblue: [72 / 255, 61 / 255, 139 / 255],
        darkslategray: [47 / 255, 79 / 255, 79 / 255],
        darkslategrey: [47 / 255, 79 / 255, 79 / 255],
        darkturquoise: [0, 206 / 255, 209 / 255],
        darkviolet: [148 / 255, 0, 211 / 255],
        deeppink: [1, 20 / 255, 147 / 255],
        deepskyblue: [0, 191 / 255, 1],
        dimgray: [105 / 255, 105 / 255, 105 / 255],
        dimgrey: [105 / 255, 105 / 255, 105 / 255],
        dodgerblue: [30 / 255, 144 / 255, 1],
        firebrick: [178 / 255, 34 / 255, 34 / 255],
        floralwhite: [1, 250 / 255, 240 / 255],
        forestgreen: [34 / 255, 139 / 255, 34 / 255],
        fuchsia: [1, 0, 1],
        gainsboro: [220 / 255, 220 / 255, 220 / 255],
        ghostwhite: [248 / 255, 248 / 255, 1],
        gold: [1, 215 / 255, 0],
        goldenrod: [218 / 255, 165 / 255, 32 / 255],
        gray: [128 / 255, 128 / 255, 128 / 255],
        green: [0, 128 / 255, 0],
        greenyellow: [173 / 255, 1, 47 / 255],
        grey: [128 / 255, 128 / 255, 128 / 255],
        honeydew: [240 / 255, 1, 240 / 255],
        hotpink: [1, 105 / 255, 180 / 255],
        indianred: [205 / 255, 92 / 255, 92 / 255],
        indigo: [75 / 255, 0, 130 / 255],
        ivory: [1, 1, 240 / 255],
        khaki: [240 / 255, 230 / 255, 140 / 255],
        lavender: [230 / 255, 230 / 255, 250 / 255],
        lavenderblush: [1, 240 / 255, 245 / 255],
        lawngreen: [124 / 255, 252 / 255, 0],
        lemonchiffon: [1, 250 / 255, 205 / 255],
        lightblue: [173 / 255, 216 / 255, 230 / 255],
        lightcoral: [240 / 255, 128 / 255, 128 / 255],
        lightcyan: [224 / 255, 1, 1],
        lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
        lightgray: [211 / 255, 211 / 255, 211 / 255],
        lightgreen: [144 / 255, 238 / 255, 144 / 255],
        lightgrey: [211 / 255, 211 / 255, 211 / 255],
        lightpink: [1, 182 / 255, 193 / 255],
        lightsalmon: [1, 160 / 255, 122 / 255],
        lightseagreen: [32 / 255, 178 / 255, 170 / 255],
        lightskyblue: [135 / 255, 206 / 255, 250 / 255],
        lightslategray: [119 / 255, 136 / 255, 153 / 255],
        lightslategrey: [119 / 255, 136 / 255, 153 / 255],
        lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
        lightyellow: [1, 1, 224 / 255],
        lime: [0, 1, 0],
        limegreen: [50 / 255, 205 / 255, 50 / 255],
        linen: [250 / 255, 240 / 255, 230 / 255],
        magenta: [1, 0, 1],
        maroon: [128 / 255, 0, 0],
        mediumaquamarine: [102 / 255, 205 / 255, 170 / 255],
        mediumblue: [0, 0, 205 / 255],
        mediumorchid: [186 / 255, 85 / 255, 211 / 255],
        mediumpurple: [147 / 255, 112 / 255, 219 / 255],
        mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
        mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
        mediumspringgreen: [0, 250 / 255, 154 / 255],
        mediumturquoise: [72 / 255, 209 / 255, 204 / 255],
        mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
        midnightblue: [25 / 255, 25 / 255, 112 / 255],
        mintcream: [245 / 255, 1, 250 / 255],
        mistyrose: [1, 228 / 255, 225 / 255],
        moccasin: [1, 228 / 255, 181 / 255],
        navajowhite: [1, 222 / 255, 173 / 255],
        navy: [0, 0, 128 / 255],
        oldlace: [253 / 255, 245 / 255, 230 / 255],
        olive: [128 / 255, 128 / 255, 0],
        olivedrab: [107 / 255, 142 / 255, 35 / 255],
        orange: [1, 165 / 255, 0],
        orangered: [1, 69 / 255, 0],
        orchid: [218 / 255, 112 / 255, 214 / 255],
        palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
        palegreen: [152 / 255, 251 / 255, 152 / 255],
        paleturquoise: [175 / 255, 238 / 255, 238 / 255],
        palevioletred: [219 / 255, 112 / 255, 147 / 255],
        papayawhip: [1, 239 / 255, 213 / 255],
        peachpuff: [1, 218 / 255, 185 / 255],
        peru: [205 / 255, 133 / 255, 63 / 255],
        pink: [1, 192 / 255, 203 / 255],
        plum: [221 / 255, 160 / 255, 221 / 255],
        powderblue: [176 / 255, 224 / 255, 230 / 255],
        purple: [128 / 255, 0, 128 / 255],
        rebeccapurple: [102 / 255, 51 / 255, 153 / 255],
        red: [1, 0, 0],
        rosybrown: [188 / 255, 143 / 255, 143 / 255],
        royalblue: [65 / 255, 105 / 255, 225 / 255],
        saddlebrown: [139 / 255, 69 / 255, 19 / 255],
        salmon: [250 / 255, 128 / 255, 114 / 255],
        sandybrown: [244 / 255, 164 / 255, 96 / 255],
        seagreen: [46 / 255, 139 / 255, 87 / 255],
        seashell: [1, 245 / 255, 238 / 255],
        sienna: [160 / 255, 82 / 255, 45 / 255],
        silver: [192 / 255, 192 / 255, 192 / 255],
        skyblue: [135 / 255, 206 / 255, 235 / 255],
        slateblue: [106 / 255, 90 / 255, 205 / 255],
        slategray: [112 / 255, 128 / 255, 144 / 255],
        slategrey: [112 / 255, 128 / 255, 144 / 255],
        snow: [1, 250 / 255, 250 / 255],
        springgreen: [0, 1, 127 / 255],
        steelblue: [70 / 255, 130 / 255, 180 / 255],
        tan: [210 / 255, 180 / 255, 140 / 255],
        teal: [0, 128 / 255, 128 / 255],
        thistle: [216 / 255, 191 / 255, 216 / 255],
        tomato: [1, 99 / 255, 71 / 255],
        turquoise: [64 / 255, 224 / 255, 208 / 255],
        violet: [238 / 255, 130 / 255, 238 / 255],
        wheat: [245 / 255, 222 / 255, 179 / 255],
        white: [1, 1, 1],
        whitesmoke: [245 / 255, 245 / 255, 245 / 255],
        yellow: [1, 1, 0],
        yellowgreen: [154 / 255, 205 / 255, 50 / 255]
      }, Lc = Array(3).fill("<percentage> | <number>[0, 255]"), Bc = Array(3).fill("<number>[0, 255]"), ha = new at({
        id: "srgb",
        name: "sRGB",
        base: Ic,
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            var a = r < 0 ? -1 : 1, n = r * a;
            return n > 31308e-7 ? a * (1.055 * Math.pow(n, 1 / 2.4) - 0.055) : 12.92 * r;
          });
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            var a = r < 0 ? -1 : 1, n = r * a;
            return n < 0.04045 ? r / 12.92 : a * Math.pow((n + 0.055) / 1.055, 2.4);
          });
        }, "toBase"),
        formats: {
          rgb: {
            coords: Lc
          },
          rgb_number: {
            name: "rgb",
            commas: !0,
            coords: Bc,
            noAlpha: !0
          },
          color: {},
          rgba: {
            coords: Lc,
            commas: !0,
            lastAlpha: !0
          },
          rgba_number: {
            name: "rgba",
            commas: !0,
            coords: Bc
          },
          hex: {
            type: "custom",
            toGamut: !0,
            test: /* @__PURE__ */ o(function(t) {
              return /^#([a-f0-9]{3,4}){1,2}$/i.test(t);
            }, "test"),
            parse: /* @__PURE__ */ o(function(t) {
              t.length <= 5 && (t = t.replace(/[a-f0-9]/gi, "$&$&"));
              var r = [];
              return t.replace(/[a-f0-9]{2}/gi, function(a) {
                r.push(parseInt(a, 16) / 255);
              }), {
                spaceId: "srgb",
                coords: r.slice(0, 3),
                alpha: r.slice(3)[0]
              };
            }, "parse"),
            serialize: /* @__PURE__ */ o(function(t, r) {
              var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.collapse, i = n === void 0 ? !0 : n;
              r < 1 && t.push(r), t = t.map(function(s) {
                return Math.round(s * 255);
              });
              var u = i && t.every(function(s) {
                return s % 17 === 0;
              }), l = t.map(function(s) {
                return u ? (s / 17).toString(16) : s.toString(16).padStart(2, "0");
              }).join("");
              return "#" + l;
            }, "serialize")
          },
          keyword: {
            type: "custom",
            test: /* @__PURE__ */ o(function(t) {
              return /^[a-z]+$/i.test(t);
            }, "test"),
            parse: /* @__PURE__ */ o(function(t) {
              t = t.toLowerCase();
              var r = {
                spaceId: "srgb",
                coords: null,
                alpha: 1
              };
              if (t === "transparent" ? (r.coords = Pc.black, r.alpha = 0) : r.coords = Pc[t], r.coords)
                return r;
            }, "parse")
          }
        }
      }), qc = new at({
        id: "p3",
        name: "P3",
        base: Nc,
        fromBase: ha.fromBase,
        toBase: ha.toBase,
        formats: {
          color: {
            id: "display-p3"
          }
        }
      });
      if (kt.display_space = ha, typeof CSS < "u" && CSS.supports)
        for (var ho = 0, jc = [lt, Mc, qc]; ho < jc.length; ho++) {
          var vo = jc[ho], Fy = vo.getMinCoords(), Ty = {
            space: vo,
            coords: Fy,
            alpha: 1
          }, Ry = bn(Ty);
          if (CSS.supports("color", Ry)) {
            kt.display_space = vo;
            break;
          }
        }
      function ky(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.space, a = r === void 0 ? kt.display_space : r, n = Le(t, Wf), i = bn(e, n);
        if (typeof CSS > "u" || CSS.supports("color", i) || !kt.display_space)
          i = new String(i), i.color = e;
        else {
          var u = vt(e, a);
          i = new String(bn(u, n)), i.color = u;
        }
        return i;
      }
      o(ky, "_display");
      function zc(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "lab";
        r = te.get(r);
        var a = r.from(e), n = r.from(t);
        return Math.sqrt(a.reduce(function(i, u, l) {
          var s = n[l];
          return isNaN(u) || isNaN(s) ? i : i + Math.pow(s - u, 2);
        }, 0));
      }
      o(zc, "distance");
      function Sy(e, t) {
        return e = ye(e), t = ye(t), e.space === t.space && e.alpha === t.alpha && e.coords.every(function(r, a) {
          return r === t.coords[a];
        });
      }
      o(Sy, "equals");
      function Yt(e) {
        return ht(e, [mt, "y"]);
      }
      o(Yt, "getLuminance");
      function Vc(e, t) {
        Gt(e, [mt, "y"], t);
      }
      o(Vc, "setLuminance");
      function Oy(e) {
        Object.defineProperty(e.prototype, "luminance", {
          get: /* @__PURE__ */ o(function() {
            return Yt(this);
          }, "get"),
          set: /* @__PURE__ */ o(function(r) {
            Vc(this, r);
          }, "set")
        });
      }
      o(Oy, "register$2");
      var My = Object.freeze({
        __proto__: null,
        getLuminance: Yt,
        setLuminance: Vc,
        register: Oy
      });
      function Ny(e, t) {
        e = ye(e), t = ye(t);
        var r = Math.max(Yt(e), 0), a = Math.max(Yt(t), 0);
        if (a > r) {
          var n = [a, r];
          r = n[0], a = n[1];
        }
        return (r + 0.05) / (a + 0.05);
      }
      o(Ny, "contrastWCAG21");
      var Iy = 0.56, Py = 0.57, Ly = 0.62, By = 0.65, Hc = 0.022, qy = 1.414, jy = 0.1, zy = 5e-4, Vy = 1.14, $c = 0.027, Hy = 1.14;
      function Uc(e) {
        return e >= Hc ? e : e + Math.pow(Hc - e, qy);
      }
      o(Uc, "fclamp");
      function Nr(e) {
        var t = e < 0 ? -1 : 1, r = Math.abs(e);
        return t * Math.pow(r, 2.4);
      }
      o(Nr, "linearize");
      function $y(e, t) {
        t = ye(t), e = ye(e);
        var r, a, n, i, u, l;
        t = vt(t, "srgb");
        var s = H(t.coords, 3);
        i = s[0], u = s[1], l = s[2];
        var c = Nr(i) * 0.2126729 + Nr(u) * 0.7151522 + Nr(l) * 0.072175;
        e = vt(e, "srgb");
        var d = H(e.coords, 3);
        i = d[0], u = d[1], l = d[2];
        var f = Nr(i) * 0.2126729 + Nr(u) * 0.7151522 + Nr(l) * 0.072175, p = Uc(c), m = Uc(f), h = m > p;
        return Math.abs(m - p) < zy ? a = 0 : h ? (r = Math.pow(m, Iy) - Math.pow(p, Py), a = r * Vy) : (r = Math.pow(m, By) - Math.pow(p, Ly), a = r * Hy), Math.abs(a) < jy ? n = 0 : a > 0 ? n = a - $c : n = a + $c, n * 100;
      }
      o($y, "contrastAPCA");
      function Uy(e, t) {
        e = ye(e), t = ye(t);
        var r = Math.max(Yt(e), 0), a = Math.max(Yt(t), 0);
        if (a > r) {
          var n = [a, r];
          r = n[0], a = n[1];
        }
        var i = r + a;
        return i === 0 ? 0 : (r - a) / i;
      }
      o(Uy, "contrastMichelson");
      var Gy = 5e4;
      function Wy(e, t) {
        e = ye(e), t = ye(t);
        var r = Math.max(Yt(e), 0), a = Math.max(Yt(t), 0);
        if (a > r) {
          var n = [a, r];
          r = n[0], a = n[1];
        }
        return a === 0 ? Gy : (r - a) / a;
      }
      o(Wy, "contrastWeber");
      function Yy(e, t) {
        e = ye(e), t = ye(t);
        var r = ht(e, [lt, "l"]), a = ht(t, [lt, "l"]);
        return Math.abs(r - a);
      }
      o(Yy, "contrastLstar");
      var Xy = 216 / 24389, Gc = 24 / 116, Dn = 24389 / 27, go = Dt.D65, bo = new te({
        id: "lab-d65",
        name: "Lab D65",
        coords: {
          l: {
            refRange: [0, 100],
            name: "L"
          },
          a: {
            refRange: [-125, 125]
          },
          b: {
            refRange: [-125, 125]
          }
        },
        white: go,
        base: mt,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = t.map(function(n, i) {
            return n / go[i];
          }), a = r.map(function(n) {
            return n > Xy ? Math.cbrt(n) : (Dn * n + 16) / 116;
          });
          return [116 * a[1] - 16, 500 * (a[0] - a[1]), 200 * (a[1] - a[2])];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = [];
          r[1] = (t[0] + 16) / 116, r[0] = t[1] / 500 + r[1], r[2] = r[1] - t[2] / 200;
          var a = [r[0] > Gc ? Math.pow(r[0], 3) : (116 * r[0] - 16) / Dn, t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / Dn, r[2] > Gc ? Math.pow(r[2], 3) : (116 * r[2] - 16) / Dn];
          return a.map(function(n, i) {
            return n * go[i];
          });
        }, "toBase"),
        formats: {
          "lab-d65": {
            coords: ["<number> | <percentage>", "<number>", "<number>"]
          }
        }
      }), yo = Math.pow(5, 0.5) * 0.5 + 0.5;
      function Ky(e, t) {
        e = ye(e), t = ye(t);
        var r = ht(e, [bo, "l"]), a = ht(t, [bo, "l"]), n = Math.abs(Math.pow(r, yo) - Math.pow(a, yo)), i = Math.pow(n, 1 / yo) * Math.SQRT2 - 40;
        return i < 7.5 ? 0 : i;
      }
      o(Ky, "contrastDeltaPhi");
      var _n = Object.freeze({
        __proto__: null,
        contrastWCAG21: Ny,
        contrastAPCA: $y,
        contrastMichelson: Uy,
        contrastWeber: Wy,
        contrastLstar: Yy,
        contrastDeltaPhi: Ky
      });
      function Zy(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        ca(r) && (r = {
          algorithm: r
        });
        var a = r, n = a.algorithm, i = Le(a, Yf);
        if (!n) {
          var u = Object.keys(_n).map(function(s) {
            return s.replace(/^contrast/, "");
          }).join(", ");
          throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(u));
        }
        e = ye(e), t = ye(t);
        for (var l in _n)
          if ("contrast" + n.toLowerCase() === l.toLowerCase())
            return _n[l](e, t, i);
        throw new TypeError("Unknown contrast algorithm: ".concat(n));
      }
      o(Zy, "contrast");
      function Wc(e) {
        var t = da(e, mt), r = H(t, 3), a = r[0], n = r[1], i = r[2], u = a + 15 * n + 3 * i;
        return [4 * a / u, 9 * n / u];
      }
      o(Wc, "uv");
      function Yc(e) {
        var t = da(e, mt), r = H(t, 3), a = r[0], n = r[1], i = r[2], u = a + n + i;
        return [a / u, n / u];
      }
      o(Yc, "xy");
      function Jy(e) {
        Object.defineProperty(e.prototype, "uv", {
          get: /* @__PURE__ */ o(function() {
            return Wc(this);
          }, "get")
        }), Object.defineProperty(e.prototype, "xy", {
          get: /* @__PURE__ */ o(function() {
            return Yc(this);
          }, "get")
        });
      }
      o(Jy, "register$1");
      var Qy = Object.freeze({
        __proto__: null,
        uv: Wc,
        xy: Yc,
        register: Jy
      });
      function e0(e, t) {
        return zc(e, t, "lab");
      }
      o(e0, "deltaE76");
      var t0 = Math.PI, Xc = t0 / 180;
      function r0(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.l, n = a === void 0 ? 2 : a, i = r.c, u = i === void 0 ? 1 : i, l = lt.from(e), s = H(l, 3), c = s[0], d = s[1], f = s[2], p = fa.from(lt, [c, d, f]), m = H(p, 3), h = m[1], v = m[2], b = lt.from(t), g = H(b, 3), y = g[0], _ = g[1], x = g[2], T = fa.from(lt, [y, _, x])[1];
        h < 0 && (h = 0), T < 0 && (T = 0);
        var k = c - y, O = h - T, B = d - _, W = f - x, j = Math.pow(B, 2) + Math.pow(W, 2) - Math.pow(O, 2), z = 0.511;
        c >= 16 && (z = 0.040975 * c / (1 + 0.01765 * c));
        var $ = 0.0638 * h / (1 + 0.0131 * h) + 0.638, V;
        Number.isNaN(v) && (v = 0), v >= 164 && v <= 345 ? V = 0.56 + Math.abs(0.2 * Math.cos((v + 168) * Xc)) : V = 0.36 + Math.abs(0.4 * Math.cos((v + 35) * Xc));
        var J = Math.pow(h, 4), re = Math.sqrt(J / (J + 1900)), ee = $ * (re * V + 1 - re), Y = Math.pow(k / (n * z), 2);
        return Y += Math.pow(O / (u * $), 2), Y += j / Math.pow(ee, 2), Math.sqrt(Y);
      }
      o(r0, "deltaECMC");
      var Kc = 203, wo = new te({
        id: "xyz-abs-d65",
        name: "Absolute XYZ D65",
        coords: {
          x: {
            refRange: [0, 9504.7],
            name: "Xa"
          },
          y: {
            refRange: [0, 1e4],
            name: "Ya"
          },
          z: {
            refRange: [0, 10888.3],
            name: "Za"
          }
        },
        base: mt,
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return Math.max(r * Kc, 0);
          });
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return Math.max(r / Kc, 0);
          });
        }, "toBase")
      }), xn = 1.15, En = 0.66, Zc = 2610 / Math.pow(2, 14), a0 = Math.pow(2, 14) / 2610, Jc = 3424 / Math.pow(2, 12), Qc = 2413 / Math.pow(2, 7), ed = 2392 / Math.pow(2, 7), n0 = 1.7 * 2523 / Math.pow(2, 5), td = Math.pow(2, 5) / (1.7 * 2523), Cn = -0.56, Do = 16295499532821565e-27, i0 = [[0.41478972, 0.579999, 0.014648], [-0.20151, 1.120649, 0.0531008], [-0.0166008, 0.2648, 0.6684799]], o0 = [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]], u0 = [[0.5, 0.5, 0], [3.524, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]], l0 = [[1, 0.1386050432715393, 0.05804731615611886], [0.9999999999999999, -0.1386050432715393, -0.05804731615611886], [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]], rd = new te({
        id: "jzazbz",
        name: "Jzazbz",
        coords: {
          jz: {
            refRange: [0, 1],
            name: "Jz"
          },
          az: {
            refRange: [-0.5, 0.5]
          },
          bz: {
            refRange: [-0.5, 0.5]
          }
        },
        base: wo,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u = xn * a - (xn - 1) * i, l = En * n - (En - 1) * a, s = Ie(i0, [u, l, i]), c = s.map(function(b) {
            var g = Jc + Qc * Math.pow(b / 1e4, Zc), y = 1 + ed * Math.pow(b / 1e4, Zc);
            return Math.pow(g / y, n0);
          }), d = Ie(u0, c), f = H(d, 3), p = f[0], m = f[1], h = f[2], v = (1 + Cn) * p / (1 + Cn * p) - Do;
          return [v, m, h];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u = (a + Do) / (1 + Cn - Cn * (a + Do)), l = Ie(l0, [u, n, i]), s = l.map(function(b) {
            var g = Jc - Math.pow(b, td), y = ed * Math.pow(b, td) - Qc, _ = 1e4 * Math.pow(g / y, a0);
            return _;
          }), c = Ie(o0, s), d = H(c, 3), f = d[0], p = d[1], m = d[2], h = (f + (xn - 1) * m) / xn, v = (p + (En - 1) * h) / En;
          return [h, v, m];
        }, "toBase"),
        formats: {
          color: {}
        }
      }), _o = new te({
        id: "jzczhz",
        name: "JzCzHz",
        coords: {
          jz: {
            refRange: [0, 1],
            name: "Jz"
          },
          cz: {
            refRange: [0, 1],
            name: "Chroma"
          },
          hz: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          }
        },
        base: rd,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u, l = 2e-4;
          return Math.abs(n) < l && Math.abs(i) < l ? u = NaN : u = Math.atan2(i, n) * 180 / Math.PI, [a, Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)), vn(u)];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          return [t[0], t[1] * Math.cos(t[2] * Math.PI / 180), t[1] * Math.sin(t[2] * Math.PI / 180)];
        }, "toBase"),
        formats: {
          color: {}
        }
      });
      function s0(e, t) {
        var r = _o.from(e), a = H(r, 3), n = a[0], i = a[1], u = a[2], l = _o.from(t), s = H(l, 3), c = s[0], d = s[1], f = s[2], p = n - c, m = i - d;
        Number.isNaN(u) && Number.isNaN(f) ? (u = 0, f = 0) : Number.isNaN(u) ? u = f : Number.isNaN(f) && (f = u);
        var h = u - f, v = 2 * Math.sqrt(i * d) * Math.sin(h / 2 * (Math.PI / 180));
        return Math.sqrt(Math.pow(p, 2) + Math.pow(m, 2) + Math.pow(v, 2));
      }
      o(s0, "deltaEJz");
      var ad = 3424 / 4096, nd = 2413 / 128, id = 2392 / 128, od = 2610 / 16384, c0 = 2523 / 32, d0 = 16384 / 2610, ud = 32 / 2523, f0 = [[0.3592, 0.6976, -0.0358], [-0.1922, 1.1004, 0.0755], [7e-3, 0.0749, 0.8434]], p0 = [[2048 / 4096, 2048 / 4096, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]], m0 = [[0.9999888965628402, 0.008605050147287059, 0.11103437159861648], [1.00001110343716, -0.008605050147287059, -0.11103437159861648], [1.0000320633910054, 0.56004913547279, -0.3206339100541203]], h0 = [[2.0701800566956137, -1.326456876103021, 0.20661600684785517], [0.3649882500326575, 0.6804673628522352, -0.04542175307585323], [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]], xo = new te({
        id: "ictcp",
        name: "ICTCP",
        coords: {
          i: {
            refRange: [0, 1],
            name: "I"
          },
          ct: {
            refRange: [-0.5, 0.5],
            name: "CT"
          },
          cp: {
            refRange: [-0.5, 0.5],
            name: "CP"
          }
        },
        base: wo,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = Ie(f0, t);
          return v0(r);
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = g0(t);
          return Ie(h0, r);
        }, "toBase"),
        formats: {
          color: {}
        }
      });
      function v0(e) {
        var t = e.map(function(r) {
          var a = ad + nd * Math.pow(r / 1e4, od), n = 1 + id * Math.pow(r / 1e4, od);
          return Math.pow(a / n, c0);
        });
        return Ie(p0, t);
      }
      o(v0, "LMStoICtCp");
      function g0(e) {
        var t = Ie(m0, e), r = t.map(function(a) {
          var n = Math.max(Math.pow(a, ud) - ad, 0), i = nd - id * Math.pow(a, ud);
          return 1e4 * Math.pow(n / i, d0);
        });
        return r;
      }
      o(g0, "ICtCptoLMS");
      function b0(e, t) {
        var r = xo.from(e), a = H(r, 3), n = a[0], i = a[1], u = a[2], l = xo.from(t), s = H(l, 3), c = s[0], d = s[1], f = s[2];
        return 720 * Math.sqrt(Math.pow(n - c, 2) + 0.25 * Math.pow(i - d, 2) + Math.pow(u - f, 2));
      }
      o(b0, "deltaEITP");
      var y0 = [[0.8190224432164319, 0.3619062562801221, -0.12887378261216414], [0.0329836671980271, 0.9292868468965546, 0.03614466816999844], [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]], w0 = [[1.2268798733741557, -0.5578149965554813, 0.28139105017721583], [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701], [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]], D0 = [[0.2104542553, 0.793617785, -0.0040720468], [1.9779984951, -2.428592205, 0.4505937099], [0.0259040371, 0.7827717662, -0.808675766]], _0 = [[0.9999999984505198, 0.39633779217376786, 0.2158037580607588], [1.0000000088817609, -0.10556134232365635, -0.06385417477170591], [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]], An = new te({
        id: "oklab",
        name: "OKLab",
        coords: {
          l: {
            refRange: [0, 1],
            name: "L"
          },
          a: {
            refRange: [-0.4, 0.4]
          },
          b: {
            refRange: [-0.4, 0.4]
          }
        },
        white: "D65",
        base: mt,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = Ie(y0, t), a = r.map(function(n) {
            return Math.cbrt(n);
          });
          return Ie(D0, a);
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = Ie(_0, t), a = r.map(function(n) {
            return Math.pow(n, 3);
          });
          return Ie(w0, a);
        }, "toBase"),
        formats: {
          oklab: {
            coords: ["<number> | <percentage>", "<number>", "<number>"]
          }
        }
      });
      function x0(e, t) {
        var r = An.from(e), a = H(r, 3), n = a[0], i = a[1], u = a[2], l = An.from(t), s = H(l, 3), c = s[0], d = s[1], f = s[2], p = n - c, m = i - d, h = u - f;
        return Math.sqrt(Math.pow(p, 2) + Math.pow(m, 2) + Math.pow(h, 2));
      }
      o(x0, "deltaEOK");
      var Eo = Object.freeze({
        __proto__: null,
        deltaE76: e0,
        deltaECMC: r0,
        deltaE2000: mo,
        deltaEJz: s0,
        deltaEITP: b0,
        deltaEOK: x0
      });
      function va(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        ca(r) && (r = {
          method: r
        });
        var a = r, n = a.method, i = n === void 0 ? kt.deltaE : n, u = Le(a, Xf);
        e = ye(e), t = ye(t);
        for (var l in Eo)
          if ("deltae" + i.toLowerCase() === l.toLowerCase())
            return Eo[l](e, t, u);
        throw new TypeError("Unknown deltaE method: ".concat(i));
      }
      o(va, "deltaE");
      function E0(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.25, r = te.get("oklch", "lch"), a = [r, "l"];
        return Gt(e, a, function(n) {
          return n * (1 + t);
        });
      }
      o(E0, "lighten");
      function C0(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.25, r = te.get("oklch", "lch"), a = [r, "l"];
        return Gt(e, a, function(n) {
          return n * (1 - t);
        });
      }
      o(C0, "darken");
      var A0 = Object.freeze({
        __proto__: null,
        lighten: E0,
        darken: C0
      });
      function ld(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.5, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = [ye(e), ye(t)];
        if (e = n[0], t = n[1], $t(r) === "object") {
          var i = [0.5, r];
          r = i[0], a = i[1];
        }
        var u = a, l = u.space, s = u.outputSpace, c = u.premultiplied, d = ga(e, t, {
          space: l,
          outputSpace: s,
          premultiplied: c
        });
        return d(r);
      }
      o(ld, "mix");
      function sd(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a;
        if (Co(e)) {
          a = e, r = t;
          var n = H(a.rangeArgs.colors, 2);
          e = n[0], t = n[1];
        }
        var i = r, u = i.maxDeltaE, l = i.deltaEMethod, s = i.steps, c = s === void 0 ? 2 : s, d = i.maxSteps, f = d === void 0 ? 1e3 : d, p = Le(i, Kf);
        if (!a) {
          var m = [ye(e), ye(t)];
          e = m[0], t = m[1], a = ga(e, t, p);
        }
        var h = va(e, t), v = u > 0 ? Math.max(c, Math.ceil(h / u) + 1) : c, b = [];
        if (f !== void 0 && (v = Math.min(v, f)), v === 1)
          b = [{
            p: 0.5,
            color: a(0.5)
          }];
        else {
          var g = 1 / (v - 1);
          b = Array.from({
            length: v
          }, function(B, W) {
            var j = W * g;
            return {
              p: j,
              color: a(j)
            };
          });
        }
        if (u > 0)
          for (var y = b.reduce(function(B, W, j) {
            if (j === 0)
              return 0;
            var z = va(W.color, b[j - 1].color, l);
            return Math.max(B, z);
          }, 0); y > u; ) {
            y = 0;
            for (var _ = 1; _ < b.length && b.length < f; _++) {
              var x = b[_ - 1], T = b[_], k = (T.p + x.p) / 2, O = a(k);
              y = Math.max(y, va(O, x.color), va(O, T.color)), b.splice(_, 0, {
                p: k,
                color: a(k)
              }), _++;
            }
          }
        return b = b.map(function(B) {
          return B.color;
        }), b;
      }
      o(sd, "steps");
      function ga(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (Co(e)) {
          var a = e, n = t;
          return ga.apply(void 0, ae(a.rangeArgs.colors).concat([pe({}, a.rangeArgs.options, n)]));
        }
        var i = r.space, u = r.outputSpace, l = r.progression, s = r.premultiplied;
        e = ye(e), t = ye(t), e = ma(e), t = ma(t);
        var c = {
          colors: [e, t],
          options: r
        };
        if (i ? i = te.get(i) : i = te.registry[kt.interpolationSpace] || e.space, u = u ? te.get(u) : i, e = vt(e, i), t = vt(t, i), e = Wt(e), t = Wt(t), i.coords.h && i.coords.h.type === "angle") {
          var d = r.hue = r.hue || "shorter", f = [i, "h"], p = [ht(e, f), ht(t, f)], m = p[0], h = p[1], v = yy(d, [m, h]), b = H(v, 2);
          m = b[0], h = b[1], Gt(e, f, m), Gt(t, f, h);
        }
        return s && (e.coords = e.coords.map(function(g) {
          return g * e.alpha;
        }), t.coords = t.coords.map(function(g) {
          return g * t.alpha;
        })), Object.assign(function(g) {
          g = l ? l(g) : g;
          var y = e.coords.map(function(T, k) {
            var O = t.coords[k];
            return pn(T, O, g);
          }), _ = pn(e.alpha, t.alpha, g), x = {
            space: i,
            coords: y,
            alpha: _
          };
          return s && (x.coords = x.coords.map(function(T) {
            return T / _;
          })), u !== i && (x = vt(x, u)), x;
        }, {
          rangeArgs: c
        });
      }
      o(ga, "range");
      function Co(e) {
        return $t(e) === "function" && !!e.rangeArgs;
      }
      o(Co, "isRange"), kt.interpolationSpace = "lab";
      function F0(e) {
        e.defineFunction("mix", ld, {
          returns: "color"
        }), e.defineFunction("range", ga, {
          returns: "function<color>"
        }), e.defineFunction("steps", sd, {
          returns: "array<color>"
        });
      }
      o(F0, "register");
      var T0 = Object.freeze({
        __proto__: null,
        mix: ld,
        steps: sd,
        range: ga,
        isRange: Co,
        register: F0
      }), cd = new te({
        id: "hsl",
        name: "HSL",
        coords: {
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          },
          s: {
            range: [0, 100],
            name: "Saturation"
          },
          l: {
            range: [0, 100],
            name: "Lightness"
          }
        },
        base: ha,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = Math.max.apply(Math, ae(t)), a = Math.min.apply(Math, ae(t)), n = H(t, 3), i = n[0], u = n[1], l = n[2], s = NaN, c = 0, d = (a + r) / 2, f = r - a;
          if (f !== 0) {
            switch (c = d === 0 || d === 1 ? 0 : (r - d) / Math.min(d, 1 - d), r) {
              case i:
                s = (u - l) / f + (u < l ? 6 : 0);
                break;
              case u:
                s = (l - i) / f + 2;
                break;
              case l:
                s = (i - u) / f + 4;
            }
            s = s * 60;
          }
          return [s, c * 100, d * 100];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2];
          a = a % 360, a < 0 && (a += 360), n /= 100, i /= 100;
          function u(l) {
            var s = (l + a / 30) % 12, c = n * Math.min(i, 1 - i);
            return i - c * Math.max(-1, Math.min(s - 3, 9 - s, 1));
          }
          return o(u, "f"), [u(0), u(8), u(4)];
        }, "toBase"),
        formats: {
          hsl: {
            toGamut: !0,
            coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
          },
          hsla: {
            coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
            commas: !0,
            lastAlpha: !0
          }
        }
      }), dd = new te({
        id: "hsv",
        name: "HSV",
        coords: {
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          },
          s: {
            range: [0, 100],
            name: "Saturation"
          },
          v: {
            range: [0, 100],
            name: "Value"
          }
        },
        base: cd,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2];
          n /= 100, i /= 100;
          var u = i + n * Math.min(i, 1 - i);
          return [a, u === 0 ? 0 : 200 * (1 - i / u), 100 * u];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2];
          n /= 100, i /= 100;
          var u = i * (1 - n / 2);
          return [a, u === 0 || u === 1 ? 0 : (i - u) / Math.min(u, 1 - u) * 100, u * 100];
        }, "toBase"),
        formats: {
          color: {
            toGamut: !0
          }
        }
      }), R0 = new te({
        id: "hwb",
        name: "HWB",
        coords: {
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          },
          w: {
            range: [0, 100],
            name: "Whiteness"
          },
          b: {
            range: [0, 100],
            name: "Blackness"
          }
        },
        base: dd,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2];
          return [a, i * (100 - n) / 100, 100 - i];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2];
          n /= 100, i /= 100;
          var u = n + i;
          if (u >= 1) {
            var l = n / u;
            return [a, 0, l * 100];
          }
          var s = 1 - i, c = s === 0 ? 0 : 1 - n / s;
          return [a, c * 100, s * 100];
        }, "toBase"),
        formats: {
          hwb: {
            toGamut: !0,
            coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
          }
        }
      }), k0 = [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]], S0 = [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]], fd = new at({
        id: "a98rgb-linear",
        name: "Linear Adobe\xAE 98 RGB compatible",
        white: "D65",
        toXYZ_M: k0,
        fromXYZ_M: S0
      }), O0 = new at({
        id: "a98rgb",
        name: "Adobe\xAE 98 RGB compatible",
        base: fd,
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return Math.pow(Math.abs(r), 563 / 256) * Math.sign(r);
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return Math.pow(Math.abs(r), 256 / 563) * Math.sign(r);
          });
        }, "fromBase"),
        formats: {
          color: {
            id: "a98-rgb"
          }
        }
      }), M0 = [[0.7977604896723027, 0.13518583717574031, 0.0313493495815248], [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20], [0, 0, 0.8251046025104601]], N0 = [[1.3457989731028281, -0.25558010007997534, -0.05110628506753401], [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973], [0, 0, 1.2119675456389454]], pd = new at({
        id: "prophoto-linear",
        name: "Linear ProPhoto",
        white: "D50",
        base: fo,
        toXYZ_M: M0,
        fromXYZ_M: N0
      }), I0 = 1 / 512, P0 = 16 / 512, L0 = new at({
        id: "prophoto",
        name: "ProPhoto",
        base: pd,
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r < P0 ? r / 16 : Math.pow(r, 1.8);
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r >= I0 ? Math.pow(r, 1 / 1.8) : 16 * r;
          });
        }, "fromBase"),
        formats: {
          color: {
            id: "prophoto-rgb"
          }
        }
      }), B0 = new te({
        id: "oklch",
        name: "OKLCh",
        coords: {
          l: {
            refRange: [0, 1],
            name: "Lightness"
          },
          c: {
            refRange: [0, 0.4],
            name: "Chroma"
          },
          h: {
            refRange: [0, 360],
            type: "angle",
            name: "Hue"
          }
        },
        white: "D65",
        base: An,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u, l = 2e-4;
          return Math.abs(n) < l && Math.abs(i) < l ? u = NaN : u = Math.atan2(i, n) * 180 / Math.PI, [a, Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)), vn(u)];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u, l;
          return isNaN(i) ? (u = 0, l = 0) : (u = n * Math.cos(i * Math.PI / 180), l = n * Math.sin(i * Math.PI / 180)), [a, u, l];
        }, "toBase"),
        formats: {
          oklch: {
            coords: ["<number> | <percentage>", "<number>", "<number> | <angle>"]
          }
        }
      }), md = 203, hd = 2610 / Math.pow(2, 14), q0 = Math.pow(2, 14) / 2610, j0 = 2523 / Math.pow(2, 5), vd = Math.pow(2, 5) / 2523, gd = 3424 / Math.pow(2, 12), bd = 2413 / Math.pow(2, 7), yd = 2392 / Math.pow(2, 7), z0 = new at({
        id: "rec2100pq",
        name: "REC.2100-PQ",
        base: yn,
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            var a = Math.pow(Math.max(Math.pow(r, vd) - gd, 0) / (bd - yd * Math.pow(r, vd)), q0);
            return a * 1e4 / md;
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            var a = Math.max(r * md / 1e4, 0), n = gd + bd * Math.pow(a, hd), i = 1 + yd * Math.pow(a, hd);
            return Math.pow(n / i, j0);
          });
        }, "fromBase"),
        formats: {
          color: {
            id: "rec2100-pq"
          }
        }
      }), wd = 0.17883277, Dd = 0.28466892, _d = 0.55991073, Ao = 3.7743, V0 = new at({
        id: "rec2100hlg",
        cssid: "rec2100-hlg",
        name: "REC.2100-HLG",
        referred: "scene",
        base: yn,
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r <= 0.5 ? Math.pow(r, 2) / 3 * Ao : Math.exp((r - _d) / wd + Dd) / 12 * Ao;
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r /= Ao, r <= 1 / 12 ? Math.sqrt(3 * r) : wd * Math.log(12 * r - Dd) + _d;
          });
        }, "fromBase"),
        formats: {
          color: {
            id: "rec2100-hlg"
          }
        }
      }), xd = {};
      Ut.add("chromatic-adaptation-start", function(e) {
        e.options.method && (e.M = Ed(e.W1, e.W2, e.options.method));
      }), Ut.add("chromatic-adaptation-end", function(e) {
        e.M || (e.M = Ed(e.W1, e.W2, e.options.method));
      });
      function Fn(e) {
        var t = e.id;
        e.toCone_M, e.fromCone_M, xd[t] = arguments[0];
      }
      o(Fn, "defineCAT");
      function Ed(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Bradford", a = xd[r], n = Ie(a.toCone_M, e), i = H(n, 3), u = i[0], l = i[1], s = i[2], c = Ie(a.toCone_M, t), d = H(c, 3), f = d[0], p = d[1], m = d[2], h = [[f / u, 0, 0], [0, p / l, 0], [0, 0, m / s]], v = Ie(h, a.toCone_M), b = Ie(a.fromCone_M, v);
        return b;
      }
      o(Ed, "adapt"), Fn({
        id: "von Kries",
        toCone_M: [[0.40024, 0.7076, -0.08081], [-0.2263, 1.16532, 0.0457], [0, 0, 0.91822]],
        fromCone_M: [[1.8599364, -1.1293816, 0.2198974], [0.3611914, 0.6388125, -64e-7], [0, 0, 1.0890636]]
      }), Fn({
        id: "Bradford",
        toCone_M: [[0.8951, 0.2664, -0.1614], [-0.7502, 1.7135, 0.0367], [0.0389, -0.0685, 1.0296]],
        fromCone_M: [[0.9869929, -0.1470543, 0.1599627], [0.4323053, 0.5183603, 0.0492912], [-85287e-7, 0.0400428, 0.9684867]]
      }), Fn({
        id: "CAT02",
        toCone_M: [[0.7328, 0.4296, -0.1624], [-0.7036, 1.6975, 61e-4], [3e-3, 0.0136, 0.9834]],
        fromCone_M: [[1.0961238, -0.278869, 0.1827452], [0.454369, 0.4735332, 0.0720978], [-96276e-7, -5698e-6, 1.0153256]]
      }), Fn({
        id: "CAT16",
        toCone_M: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]],
        fromCone_M: [[1.862067855087233, -1.011254630531685, 0.1491867754444518], [0.3875265432361372, 0.6214474419314753, -0.008973985167612518], [-0.01584149884933386, -0.03412293802851557, 1.04996443687785]]
      }), Object.assign(Dt, {
        A: [1.0985, 1, 0.35585],
        C: [0.98074, 1, 1.18232],
        D55: [0.95682, 1, 0.92149],
        D75: [0.94972, 1, 1.22638],
        E: [1, 1, 1],
        F2: [0.99186, 1, 0.67393],
        F7: [0.95041, 1, 1.08747],
        F11: [1.00962, 1, 0.6435]
      }), Dt.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
      var H0 = [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]], $0 = [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]], Cd = new at({
        id: "acescg",
        name: "ACEScg",
        coords: {
          r: {
            range: [0, 65504],
            name: "Red"
          },
          g: {
            range: [0, 65504],
            name: "Green"
          },
          b: {
            range: [0, 65504],
            name: "Blue"
          }
        },
        referred: "scene",
        white: Dt.ACES,
        toXYZ_M: H0,
        fromXYZ_M: $0,
        formats: {
          color: {}
        }
      }), Tn = Math.pow(2, -16), Fo = -0.35828683, Rn = (Math.log2(65504) + 9.72) / 17.52, U0 = new at({
        id: "acescc",
        name: "ACEScc",
        coords: {
          r: {
            range: [Fo, Rn],
            name: "Red"
          },
          g: {
            range: [Fo, Rn],
            name: "Green"
          },
          b: {
            range: [Fo, Rn],
            name: "Blue"
          }
        },
        referred: "scene",
        base: Cd,
        toBase: /* @__PURE__ */ o(function(t) {
          var r = -0.3013698630136986;
          return t.map(function(a) {
            return a <= r ? (Math.pow(2, a * 17.52 - 9.72) - Tn) * 2 : a < Rn ? Math.pow(2, a * 17.52 - 9.72) : 65504;
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r <= 0 ? (Math.log2(Tn) + 9.72) / 17.52 : r < Tn ? (Math.log2(Tn + r * 0.5) + 9.72) / 17.52 : (Math.log2(r) + 9.72) / 17.52;
          });
        }, "fromBase"),
        formats: {
          color: {}
        }
      }), Ad = Object.freeze({
        __proto__: null,
        XYZ_D65: mt,
        XYZ_D50: fo,
        XYZ_ABS_D65: wo,
        Lab_D65: bo,
        Lab: lt,
        LCH: fa,
        sRGB_Linear: Ic,
        sRGB: ha,
        HSL: cd,
        HWB: R0,
        HSV: dd,
        P3_Linear: Nc,
        P3: qc,
        A98RGB_Linear: fd,
        A98RGB: O0,
        ProPhoto_Linear: pd,
        ProPhoto: L0,
        REC_2020_Linear: yn,
        REC_2020: Mc,
        OKLab: An,
        OKLCH: B0,
        Jzazbz: rd,
        JzCzHz: _o,
        ICTCP: xo,
        REC_2100_PQ: z0,
        REC_2100_HLG: V0,
        ACEScg: Cd,
        ACEScc: U0
      }), st = (Z = /* @__PURE__ */ new WeakMap(), function() {
        function e() {
          var t = this;
          _t(this, e), xu(this, Z, {
            writable: !0,
            value: void 0
          });
          for (var r, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
            n[i] = arguments[i];
          n.length === 1 && (r = ye(n[0]));
          var u, l, s;
          r ? (u = r.space || r.spaceId, l = r.coords, s = r.alpha) : (u = n[0], l = n[1], s = n[2]), Au(this, Z, te.get(u)), this.coords = l ? l.slice() : [0, 0, 0], this.alpha = s < 1 ? s : 1;
          for (var c = 0; c < this.coords.length; c++)
            this.coords[c] === "NaN" && (this.coords[c] = NaN);
          var d = /* @__PURE__ */ o(function(m) {
            Object.defineProperty(t, m, {
              get: /* @__PURE__ */ o(function() {
                return t.get(m);
              }, "get"),
              set: /* @__PURE__ */ o(function(v) {
                return t.set(m, v);
              }, "set")
            });
          }, "_loop6");
          for (var f in Hr(this, Z).coords)
            d(f);
        }
        return o(e, "Color"), xt(e, [{
          key: "space",
          get: /* @__PURE__ */ o(function() {
            return Hr(this, Z);
          }, "get")
        }, {
          key: "spaceId",
          get: /* @__PURE__ */ o(function() {
            return Hr(this, Z).id;
          }, "get")
        }, {
          key: "clone",
          value: /* @__PURE__ */ o(function() {
            return new e(this.space, this.coords, this.alpha);
          }, "clone")
        }, {
          key: "toJSON",
          value: /* @__PURE__ */ o(function() {
            return {
              spaceId: this.spaceId,
              coords: this.coords,
              alpha: this.alpha
            };
          }, "toJSON")
        }, {
          key: "display",
          value: /* @__PURE__ */ o(function() {
            for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++)
              a[n] = arguments[n];
            var i = ky.apply(void 0, [this].concat(a));
            return i.color = new e(i.color), i;
          }, "display")
        }], [{
          key: "get",
          value: /* @__PURE__ */ o(function(r) {
            if (r instanceof e)
              return r;
            for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
              n[i - 1] = arguments[i];
            return Ca(e, [r].concat(n));
          }, "get")
        }, {
          key: "defineFunction",
          value: /* @__PURE__ */ o(function(r, a) {
            var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a, i = n.instance, u = i === void 0 ? !0 : i, l = n.returns, s = /* @__PURE__ */ o(function() {
              var d = a.apply(void 0, arguments);
              if (l === "color")
                d = e.get(d);
              else if (l === "function<color>") {
                var f = d;
                d = /* @__PURE__ */ o(function() {
                  var m = f.apply(void 0, arguments);
                  return e.get(m);
                }, "ret"), Object.assign(d, f);
              } else
                l === "array<color>" && (d = d.map(function(p) {
                  return e.get(p);
                }));
              return d;
            }, "func");
            r in e || (e[r] = s), u && (e.prototype[r] = function() {
              for (var c = arguments.length, d = new Array(c), f = 0; f < c; f++)
                d[f] = arguments[f];
              return s.apply(void 0, [this].concat(d));
            });
          }, "defineFunction")
        }, {
          key: "defineFunctions",
          value: /* @__PURE__ */ o(function(r) {
            for (var a in r)
              e.defineFunction(a, r[a], r[a]);
          }, "defineFunctions")
        }, {
          key: "extend",
          value: /* @__PURE__ */ o(function(r) {
            if (r.register)
              r.register(e);
            else
              for (var a in r)
                e.defineFunction(a, r[a]);
          }, "extend")
        }]), e;
      }());
      st.defineFunctions({
        get: ht,
        getAll: da,
        set: Gt,
        setAll: Tc,
        to: vt,
        equals: Sy,
        inGamut: pa,
        toGamut: Wt,
        distance: zc,
        toString: bn
      }), Object.assign(st, {
        util: py,
        hooks: Ut,
        WHITES: Dt,
        Space: te,
        spaces: te.registry,
        parse: Fc,
        defaults: kt
      });
      for (var To = 0, Fd = Object.keys(Ad); To < Fd.length; To++) {
        var G0 = Fd[To];
        te.register(Ad[G0]);
      }
      for (var Td in te.registry)
        Ro(Td, te.registry[Td]);
      Ut.add("colorspace-init-end", function(e) {
        var t;
        Ro(e.id, e), (t = e.aliases) === null || t === void 0 || t.forEach(function(r) {
          Ro(r, e);
        });
      });
      function Ro(e, t) {
        Object.keys(t.coords), Object.values(t.coords).map(function(a) {
          return a.name;
        });
        var r = e.replace(/-/g, "_");
        Object.defineProperty(st.prototype, r, {
          get: /* @__PURE__ */ o(function() {
            var n = this, i = this.getAll(e);
            return typeof Proxy > "u" ? i : new Proxy(i, {
              has: /* @__PURE__ */ o(function(l, s) {
                try {
                  return te.resolveCoord([t, s]), !0;
                } catch {
                }
                return Reflect.has(l, s);
              }, "has"),
              get: /* @__PURE__ */ o(function(l, s, c) {
                if (s && S(s) !== "symbol" && !(s in l)) {
                  var d = te.resolveCoord([t, s]), f = d.index;
                  if (f >= 0)
                    return l[f];
                }
                return Reflect.get(l, s, c);
              }, "get"),
              set: /* @__PURE__ */ o(function(l, s, c, d) {
                if (s && S(s) !== "symbol" && !(s in l) || s >= 0) {
                  var f = te.resolveCoord([t, s]), p = f.index;
                  if (p >= 0)
                    return l[p] = c, n.setAll(e, l), !0;
                }
                return Reflect.set(l, s, c, d);
              }, "set")
            });
          }, "get"),
          set: /* @__PURE__ */ o(function(n) {
            this.setAll(e, n);
          }, "set"),
          configurable: !0,
          enumerable: !0
        });
      }
      o(Ro, "addSpaceAccessors"), st.extend(Eo), st.extend({
        deltaE: va
      }), st.extend(A0), st.extend({
        contrast: Zy
      }), st.extend(Qy), st.extend(My), st.extend(T0), st.extend(_n);
      var W0 = Et(Cm()), Y0 = Et(Am());
      Et(Fm());
      var X0 = Et(nh());
      "hasOwn" in Object || (Object.hasOwn = X0.default), Dc.default.templateSettings.strip = !1, "Promise" in D || W0.default.polyfill(), "Uint32Array" in D || (D.Uint32Array = Y0.Uint32Array), D.Uint32Array && ("some" in D.Uint32Array.prototype || Object.defineProperty(D.Uint32Array.prototype, "some", {
        value: Array.prototype.some
      }), "reduce" in D.Uint32Array.prototype || Object.defineProperty(D.Uint32Array.prototype, "reduce", {
        value: Array.prototype.reduce
      }));
      var K0 = /^#[0-9a-f]{3,8}$/i, Z0 = /hsl\(\s*([\d.]+)(rad|turn)/, J0 = function() {
        function e(t, r, a) {
          var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
          _t(this, e), this.red = t, this.green = r, this.blue = a, this.alpha = n;
        }
        return o(e, "Color2"), xt(e, [{
          key: "toHexString",
          value: /* @__PURE__ */ o(function() {
            var r = Math.round(this.red).toString(16), a = Math.round(this.green).toString(16), n = Math.round(this.blue).toString(16);
            return "#" + (this.red > 15.5 ? r : "0" + r) + (this.green > 15.5 ? a : "0" + a) + (this.blue > 15.5 ? n : "0" + n);
          }, "toHexString")
        }, {
          key: "toJSON",
          value: /* @__PURE__ */ o(function() {
            var r = this.red, a = this.green, n = this.blue, i = this.alpha;
            return {
              red: r,
              green: a,
              blue: n,
              alpha: i
            };
          }, "toJSON")
        }, {
          key: "parseString",
          value: /* @__PURE__ */ o(function(r) {
            r = r.replace(Z0, function(n, i, u) {
              var l = i + u;
              switch (u) {
                case "rad":
                  return n.replace(l, Q0(i));
                case "turn":
                  return n.replace(l, e2(i));
              }
            });
            try {
              var a = new st(r).to("srgb");
              this.red = Math.round(ko(a.r, 0, 1) * 255), this.green = Math.round(ko(a.g, 0, 1) * 255), this.blue = Math.round(ko(a.b, 0, 1) * 255), this.alpha = +a.alpha;
            } catch {
              throw new Error('Unable to parse color "'.concat(r, '"'));
            }
            return this;
          }, "parseString")
        }, {
          key: "parseRgbString",
          value: /* @__PURE__ */ o(function(r) {
            this.parseString(r);
          }, "parseRgbString")
        }, {
          key: "parseHexString",
          value: /* @__PURE__ */ o(function(r) {
            !r.match(K0) || [6, 8].includes(r.length) || this.parseString(r);
          }, "parseHexString")
        }, {
          key: "parseColorFnString",
          value: /* @__PURE__ */ o(function(r) {
            this.parseString(r);
          }, "parseColorFnString")
        }, {
          key: "getRelativeLuminance",
          value: /* @__PURE__ */ o(function() {
            var r = this.red / 255, a = this.green / 255, n = this.blue / 255, i = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), u = a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4), l = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
            return 0.2126 * i + 0.7152 * u + 0.0722 * l;
          }, "getRelativeLuminance")
        }]), e;
      }(), Oe = J0;
      function ko(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      o(ko, "clamp");
      function Q0(e) {
        return e * 180 / Math.PI;
      }
      o(Q0, "radToDeg");
      function e2(e) {
        return e * 360;
      }
      o(e2, "turnToDeg");
      function t2(e) {
        var t = new Oe();
        if (t.parseString(e.getPropertyValue("background-color")), t.alpha !== 0) {
          var r = e.getPropertyValue("opacity");
          t.alpha = t.alpha * r;
        }
        return t;
      }
      o(t2, "getOwnBackgroundColor");
      var gr = t2;
      function r2(e) {
        var t = D.getComputedStyle(e);
        return dn(e, t) || gr(t).alpha === 1;
      }
      o(r2, "isOpaque");
      var a2 = r2;
      function So(e) {
        if (!e.href)
          return !1;
        var t = le.get("firstPageLink", n2);
        return t ? e.compareDocumentPosition(t.actualNode) === e.DOCUMENT_POSITION_FOLLOWING : !0;
      }
      o(So, "_isSkipLink");
      function n2() {
        var e;
        return D.location.origin ? e = dt(w._tree, 'a[href]:not([href^="javascript:"])').find(function(t) {
          return !qi(t.actualNode);
        }) : e = dt(w._tree, 'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0], e || null;
      }
      o(n2, "generateFirstPageLink");
      var i2 = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, o2 = /(\w+)\((\d+)/;
      function u2(e) {
        var t = e.getPropertyValue("clip").match(i2), r = e.getPropertyValue("clip-path").match(o2);
        if (t && t.length === 5) {
          var a = e.getPropertyValue("position");
          if (["fixed", "absolute"].includes(a))
            return t[3] - t[1] <= 0 && t[2] - t[4] <= 0;
        }
        if (r) {
          var n = r[1], i = parseInt(r[2], 10);
          switch (n) {
            case "inset":
              return i >= 50;
            case "circle":
              return i === 0;
          }
        }
        return !1;
      }
      o(u2, "isClipped");
      function l2(e, t, r) {
        var a = Tr(e, "map");
        if (!a)
          return !1;
        var n = a.getAttribute("name");
        if (!n)
          return !1;
        var i = Ye(e);
        if (!i || i.nodeType !== 9)
          return !1;
        var u = dt(w._tree, 'img[usemap="#'.concat(ke(n), '"]'));
        return !u || !u.length ? !1 : u.some(function(l) {
          var s = l.actualNode;
          return kn(s, t, r);
        });
      }
      o(l2, "isAreaVisible");
      function kn(e, t, r) {
        var a;
        if (!e)
          throw new TypeError("Cannot determine if element is visible for non-DOM nodes");
        var n = e instanceof He ? e : se(e);
        e = n ? n.actualNode : e;
        var i = "_isVisible" + (t ? "ScreenReader" : ""), u = (a = D.Node) !== null && a !== void 0 ? a : {}, l = u.DOCUMENT_NODE, s = u.DOCUMENT_FRAGMENT_NODE, c = n ? n.props.nodeType : e.nodeType, d = n ? n.props.nodeName : e.nodeName.toLowerCase();
        if (n && typeof n[i] < "u")
          return n[i];
        if (c === l)
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
          return p && (m = kn(p, t, !0)), n && (n[i] = m), m;
        }
        var h = D.getComputedStyle(e, null);
        if (h === null)
          return !1;
        if (d === "area")
          return l2(e, t, r);
        if (h.getPropertyValue("display") === "none")
          return !1;
        var v = parseInt(h.getPropertyValue("height")), b = parseInt(h.getPropertyValue("width")), g = Bt(e), y = g && v === 0, _ = g && b === 0, x = h.getPropertyValue("position") === "absolute" && (v < 2 || b < 2) && h.getPropertyValue("overflow") === "hidden";
        if (!t && (u2(h) || h.getPropertyValue("opacity") === "0" || y || _ || x) || !r && (h.getPropertyValue("visibility") === "hidden" || !t && Ka(e)))
          return !1;
        var T = e.assignedSlot ? e.assignedSlot : e.parentNode, k = !1;
        return T && (k = kn(T, t, !0)), n && (n[i] = k), k;
      }
      o(kn, "isVisible");
      var s2 = kn;
      function c2(e, t) {
        for (var r = ["fixed", "sticky"], a = [], n = !1, i = 0; i < e.length; ++i) {
          var u = e[i];
          u === t && (n = !0);
          var l = D.getComputedStyle(u);
          if (!n && r.indexOf(l.position) !== -1) {
            a = [];
            continue;
          }
          a.push(u);
        }
        return a;
      }
      o(c2, "reduceToElementsBelowFloating");
      var Rd = c2;
      function kd(e, t) {
        var r = Sd(t);
        do {
          var a = Sd(e);
          if (a === r || a === t)
            return d2(e, t);
          e = a;
        } while (e);
        return !1;
      }
      o(kd, "_visuallyContains");
      function Sd(e) {
        for (var t = se(e), r = t.parent; r; ) {
          if (Bt(r.actualNode))
            return r.actualNode;
          r = r.parent;
        }
      }
      o(Sd, "getScrollAncestor");
      function d2(e, t) {
        var r = D.getComputedStyle(t), a = r.getPropertyValue("overflow");
        if (r.getPropertyValue("display") === "inline")
          return !0;
        var n = Array.from(e.getClientRects()), i = t.getBoundingClientRect(), u = {
          left: i.left,
          top: i.top,
          width: i.width,
          height: i.height
        };
        return (["scroll", "auto"].includes(a) || t instanceof D.HTMLHtmlElement) && (u.width = t.scrollWidth, u.height = t.scrollHeight), n.length === 1 && a === "hidden" && r.getPropertyValue("white-space") === "nowrap" && (n[0] = u), n.some(function(l) {
          return !(Math.ceil(l.left) < Math.floor(u.left) || Math.ceil(l.top) < Math.floor(u.top) || Math.floor(l.left + l.width) > Math.ceil(u.left + u.width) || Math.floor(l.top + l.height) > Math.ceil(u.top + u.height));
        });
      }
      o(d2, "contains2");
      function Od(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        if (a > 999)
          throw new Error("Infinite loop detected");
        return Array.from(r.elementsFromPoint(e, t) || []).filter(function(n) {
          return Ye(n) === r;
        }).reduce(function(n, i) {
          if (Wa(i)) {
            var u = Od(e, t, i.shadowRoot, a + 1);
            n = n.concat(u), n.length && kd(n[0], i) && n.push(i);
          } else
            n.push(i);
          return n;
        }, []);
      }
      o(Od, "shadowElementsFromPoint");
      var f2 = Od;
      function p2(e, t) {
        if (!!e.hasAttribute(t)) {
          var r = e.nodeName.toUpperCase(), a = e;
          (!["A", "AREA"].includes(r) || e.ownerSVGElement) && (a = N.createElement("a"), a.href = e.getAttribute(t));
          var n = ["https:", "ftps:"].includes(a.protocol) ? a.protocol.replace(/s:$/, ":") : a.protocol, i = /^\//.test(a.pathname) ? a.pathname : "/".concat(a.pathname), u = h2(i), l = u.pathname, s = u.filename;
          return {
            protocol: n,
            hostname: a.hostname,
            port: m2(a.port),
            pathname: /\/$/.test(l) ? l : "".concat(l, "/"),
            search: v2(a.search),
            hash: g2(a.hash),
            filename: s
          };
        }
      }
      o(p2, "urlPropsFromAttribute");
      function m2(e) {
        var t = ["443", "80"];
        return t.includes(e) ? "" : e;
      }
      o(m2, "getPort");
      function h2(e) {
        var t = e.split("/").pop();
        return !t || t.indexOf(".") === -1 ? {
          pathname: e,
          filename: ""
        } : {
          pathname: e.replace(t, ""),
          filename: /index./.test(t) ? "" : t
        };
      }
      o(h2, "getPathnameOrFilename");
      function v2(e) {
        var t = {};
        if (!e || !e.length)
          return t;
        var r = e.substring(1).split("&");
        if (!r || !r.length)
          return t;
        for (var a = 0; a < r.length; a++) {
          var n = r[a], i = n.split("="), u = H(i, 2), l = u[0], s = u[1], c = s === void 0 ? "" : s;
          t[decodeURIComponent(l)] = decodeURIComponent(c);
        }
        return t;
      }
      o(v2, "getSearchPairs");
      function g2(e) {
        if (!e)
          return "";
        var t = /#!?\/?/g, r = e.match(t);
        if (!r)
          return "";
        var a = H(r, 1), n = a[0];
        return n === "#" ? "" : e;
      }
      o(g2, "getHashRoute");
      var b2 = p2;
      function y2(e, t) {
        var r = t.getBoundingClientRect(), a = r.top, n = r.left, i = {
          top: a - t.scrollTop,
          bottom: a - t.scrollTop + t.scrollHeight,
          left: n - t.scrollLeft,
          right: n - t.scrollLeft + t.scrollWidth
        };
        if (e.left > i.right && e.left > r.right || e.top > i.bottom && e.top > r.bottom || e.right < i.left && e.right < r.left || e.bottom < i.top && e.bottom < r.top)
          return !1;
        var u = D.getComputedStyle(t);
        return e.left > r.right || e.top > r.bottom ? u.overflow === "scroll" || u.overflow === "auto" || t instanceof D.HTMLBodyElement || t instanceof D.HTMLHtmlElement : !0;
      }
      o(y2, "visuallyOverlaps");
      var Oo = y2, Md = 0, w2 = function(e) {
        Xn(r, e);
        var t = Kn(r);
        function r(a, n, i) {
          var u;
          if (_t(this, r), u = t.call(this), u.shadowId = i, u.children = [], u.actualNode = a, u.parent = n, n || (Md = 0), u.nodeIndex = Md++, u._isHidden = null, u._cache = {}, u._isXHTML = La(a.ownerDocument), a.nodeName.toLowerCase() === "input") {
            var l = a.getAttribute("type");
            l = u._isXHTML ? l : (l || "").toLowerCase(), Pn().includes(l) || (l = "text"), u._type = l;
          }
          return le.get("nodeMap") && le.get("nodeMap").set(a, Du(u)), u;
        }
        return o(r, "VirtualNode"), xt(r, [{
          key: "props",
          get: /* @__PURE__ */ o(function() {
            if (!this._cache.hasOwnProperty("props")) {
              var n = this.actualNode, i = n.nodeType, u = n.nodeName, l = n.id, s = n.multiple, c = n.nodeValue, d = n.value, f = n.selected, p = n.checked, m = n.indeterminate;
              this._cache.props = {
                nodeType: i,
                nodeName: this._isXHTML ? u : u.toLowerCase(),
                id: l,
                type: this._type,
                multiple: s,
                nodeValue: c,
                value: d,
                selected: f,
                checked: p,
                indeterminate: m
              };
            }
            return this._cache.props;
          }, "get")
        }, {
          key: "attr",
          value: /* @__PURE__ */ o(function(n) {
            return typeof this.actualNode.getAttribute != "function" ? null : this.actualNode.getAttribute(n);
          }, "attr")
        }, {
          key: "hasAttr",
          value: /* @__PURE__ */ o(function(n) {
            return typeof this.actualNode.hasAttribute != "function" ? !1 : this.actualNode.hasAttribute(n);
          }, "hasAttr")
        }, {
          key: "attrNames",
          get: /* @__PURE__ */ o(function() {
            if (!this._cache.hasOwnProperty("attrNames")) {
              var n;
              this.actualNode.attributes instanceof D.NamedNodeMap ? n = this.actualNode.attributes : n = this.actualNode.cloneNode(!1).attributes, this._cache.attrNames = Array.from(n).map(function(i) {
                return i.name;
              });
            }
            return this._cache.attrNames;
          }, "get")
        }, {
          key: "getComputedStylePropertyValue",
          value: /* @__PURE__ */ o(function(n) {
            var i = "computedStyle_" + n;
            return this._cache.hasOwnProperty(i) || (this._cache.hasOwnProperty("computedStyle") || (this._cache.computedStyle = D.getComputedStyle(this.actualNode)), this._cache[i] = this._cache.computedStyle.getPropertyValue(n)), this._cache[i];
          }, "getComputedStylePropertyValue")
        }, {
          key: "isFocusable",
          get: /* @__PURE__ */ o(function() {
            return this._cache.hasOwnProperty("isFocusable") || (this._cache.isFocusable = Se(this.actualNode)), this._cache.isFocusable;
          }, "get")
        }, {
          key: "tabbableElements",
          get: /* @__PURE__ */ o(function() {
            return this._cache.hasOwnProperty("tabbableElements") || (this._cache.tabbableElements = xs(this)), this._cache.tabbableElements;
          }, "get")
        }, {
          key: "clientRects",
          get: /* @__PURE__ */ o(function() {
            return this._cache.hasOwnProperty("clientRects") || (this._cache.clientRects = Array.from(this.actualNode.getClientRects()).filter(function(n) {
              return n.width > 0;
            })), this._cache.clientRects;
          }, "get")
        }, {
          key: "boundingClientRect",
          get: /* @__PURE__ */ o(function() {
            return this._cache.hasOwnProperty("boundingClientRect") || (this._cache.boundingClientRect = this.actualNode.getBoundingClientRect()), this._cache.boundingClientRect;
          }, "get")
        }]), r;
      }(He), Mo = w2;
      function D2(e) {
        return (e || "").trim().replace(/\s{2,}/g, " ").split(" ");
      }
      o(D2, "tokenList");
      var Xe = D2, br = " [idsMap]";
      function Nd(e, t, r) {
        var a = e[0]._selectorMap;
        if (!!a) {
          for (var n = e[0].shadowId, i = 0; i < t.length; i++)
            if (t[i].length > 1 && t[i].some(function(s) {
              return Id(s);
            }))
              return;
          var u = /* @__PURE__ */ new Set();
          t.forEach(function(s) {
            var c, d = _2(s, a, n);
            d == null || (c = d.nodes) === null || c === void 0 || c.forEach(function(f) {
              d.isComplexSelector && !xr(f, s) || u.add(f);
            });
          });
          var l = [];
          return u.forEach(function(s) {
            return l.push(s);
          }), r && (l = l.filter(r)), l.sort(function(s, c) {
            return s.nodeIndex - c.nodeIndex;
          });
        }
      }
      o(Nd, "getNodesMatchingExpression");
      function _2(e, t, r) {
        var a = e[e.length - 1], n = null, i = e.length > 1 || !!a.pseudos || !!a.classes;
        if (Id(a))
          n = t["*"];
        else {
          if (a.id) {
            var u;
            if (!t[br] || !Object.hasOwn(t[br], a.id) || !((u = t[br][a.id]) !== null && u !== void 0 && u.length))
              return;
            n = t[br][a.id].filter(function(v) {
              return v.shadowId === r;
            });
          }
          if (a.tag && a.tag !== "*") {
            var l;
            if (!((l = t[a.tag]) !== null && l !== void 0 && l.length))
              return;
            var s = t[a.tag];
            n = n ? No(s, n) : s;
          }
          if (a.classes) {
            var c;
            if (!((c = t["[class]"]) !== null && c !== void 0 && c.length))
              return;
            var d = t["[class]"];
            n = n ? No(d, n) : d;
          }
          if (a.attributes)
            for (var f = 0; f < a.attributes.length; f++) {
              var p, m = a.attributes[f];
              if (m.type === "attrValue" && (i = !0), !((p = t["[".concat(m.key, "]")]) !== null && p !== void 0 && p.length))
                return;
              var h = t["[".concat(m.key, "]")];
              n = n ? No(h, n) : h;
            }
        }
        return {
          nodes: n,
          isComplexSelector: i
        };
      }
      o(_2, "findMatchingNodes");
      function Id(e) {
        return e.tag === "*" && !e.attributes && !e.id && !e.classes;
      }
      o(Id, "isGlobalSelector");
      function No(e, t) {
        return e.filter(function(r) {
          return t.includes(r);
        });
      }
      o(No, "getSharedValues");
      function Sn(e, t, r) {
        Object.hasOwn(r, e) || (r[e] = []), r[e].push(t);
      }
      o(Sn, "cacheSelector");
      function Pd(e, t) {
        e.props.nodeType === 1 && (Sn(e.props.nodeName, e, t), Sn("*", e, t), e.attrNames.forEach(function(r) {
          r === "id" && (t[br] = t[br] || {}, Xe(e.attr(r)).forEach(function(a) {
            Sn(a, e, t[br]);
          })), Sn("[".concat(r, "]"), e, t);
        }));
      }
      o(Pd, "cacheNodeSelectors");
      var Io;
      function Po() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N.documentElement, t = arguments.length > 1 ? arguments[1] : void 0;
        Io = !1;
        var r = {};
        le.set("nodeMap", /* @__PURE__ */ new WeakMap()), le.set("selectorMap", r);
        var a = Ld(e, t, null);
        return a[0]._selectorMap = r, a[0]._hasShadowRoot = Io, a;
      }
      o(Po, "_getFlattenedTree");
      function x2(e) {
        var t = [];
        for (e = e.firstChild; e; )
          t.push(e), e = e.nextSibling;
        return t;
      }
      o(x2, "getSlotChildren");
      function Lo(e, t, r) {
        var a = new Mo(e, t, r);
        return Pd(a, le.get("selectorMap")), a;
      }
      o(Lo, "createNode");
      function Ld(e, t, r) {
        var a, n, i;
        function u(l, s, c) {
          var d = Ld(s, t, c);
          return d && (l = l.concat(d)), l;
        }
        return o(u, "reduceShadowDOM"), e.documentElement && (e = e.documentElement), i = e.nodeName.toLowerCase(), Wa(e) ? (Io = !0, a = Lo(e, r, t), t = "a" + Math.random().toString().substring(2), n = Array.from(e.shadowRoot.childNodes), a.children = n.reduce(function(l, s) {
          return u(l, s, a);
        }, []), [a]) : i === "content" && typeof e.getDistributedNodes == "function" ? (n = Array.from(e.getDistributedNodes()), n.reduce(function(l, s) {
          return u(l, s, r);
        }, [])) : i === "slot" && typeof e.assignedNodes == "function" ? (n = Array.from(e.assignedNodes()), n.length || (n = x2(e)), D.getComputedStyle(e), n.reduce(function(l, s) {
          return u(l, s, r);
        }, [])) : e.nodeType === 1 ? (a = Lo(e, r, t), n = Array.from(e.childNodes), a.children = n.reduce(function(l, s) {
          return u(l, s, a);
        }, []), [a]) : e.nodeType === 3 ? [Lo(e, r)] : void 0;
      }
      o(Ld, "flattenTree");
      function E2(e) {
        return e ? e.trim().split("-")[0].toLowerCase() : "";
      }
      o(E2, "getBaseLang");
      var yr = E2;
      function C2(e) {
        var t = {};
        return t.none = e.none.concat(e.all), t.any = e.any, Object.keys(t).map(function(r) {
          if (!!t[r].length) {
            var a = w._audit.data.failureSummaries[r];
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
      o(C2, "failureSummary");
      var Bo = C2;
      function qo() {
        var e = w._audit.data.incompleteFallbackMessage;
        return typeof e == "function" && (e = e()), typeof e != "string" ? "" : e;
      }
      o(qo, "incompleteFallbackMessage");
      var Bd = ce.resultGroups;
      function ba(e, t) {
        var r = w.utils.aggregateResult(e);
        return Bd.forEach(function(a) {
          t.resultTypes && !t.resultTypes.includes(a) && (r[a] || []).forEach(function(n) {
            Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = [n.nodes[0]]);
          }), r[a] = (r[a] || []).map(function(n) {
            return n = Object.assign({}, n), Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = n.nodes.map(function(i) {
              if (S(i.node) === "object") {
                var u = qd(i.node, t);
                Object.assign(i, u);
              }
              return delete i.result, delete i.node, A2(i, t), i;
            })), Bd.forEach(function(i) {
              return delete n[i];
            }), delete n.pageLevel, delete n.result, n;
          });
        }), r;
      }
      o(ba, "processAggregate");
      function A2(e, t) {
        ["any", "all", "none"].forEach(function(r) {
          !Array.isArray(e[r]) || e[r].filter(function(a) {
            return Array.isArray(a.relatedNodes);
          }).forEach(function(a) {
            a.relatedNodes = a.relatedNodes.map(function(n) {
              return qd(n, t);
            });
          });
        });
      }
      o(A2, "normalizeRelatedNodes");
      function qd() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
        e = pt.dqElmToSpec(e, t);
        var r = {};
        if (w._audit.noHtml)
          r.html = null;
        else {
          var a;
          r.html = (a = e.source) !== null && a !== void 0 ? a : "Undefined";
        }
        if (t.elementRef && !e.fromFrame) {
          var n;
          r.element = (n = e.element) !== null && n !== void 0 ? n : null;
        }
        if (t.selectors !== !1 || e.fromFrame) {
          var i;
          r.target = (i = e.selector) !== null && i !== void 0 ? i : [":root"];
        }
        if (t.ancestry) {
          var u;
          r.ancestry = (u = e.ancestry) !== null && u !== void 0 ? u : [":root"];
        }
        if (t.xpath) {
          var l;
          r.xpath = (l = e.xpath) !== null && l !== void 0 ? l : ["/"];
        }
        return r;
      }
      o(qd, "trimElementSpec");
      var F2 = /\$\{\s?data\s?\}/g;
      function On(e, t) {
        if (typeof t == "string")
          return e.replace(F2, t);
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var a = new RegExp("\\${\\s?data\\." + r + "\\s?}", "g"), n = typeof t[r] > "u" ? "" : String(t[r]);
            e = e.replace(a, n);
          }
        return e;
      }
      o(On, "substitute");
      function jd(e, t) {
        if (!!e) {
          if (Array.isArray(t)) {
            if (t.values = t.join(", "), typeof e.singular == "string" && typeof e.plural == "string") {
              var r = t.length === 1 ? e.singular : e.plural;
              return On(r, t);
            }
            return On(e, t);
          }
          if (typeof e == "string")
            return On(e, t);
          if (typeof t == "string") {
            var a = e[t];
            return On(a, t);
          }
          var n = e.default || qo();
          return t && t.messageKey && e[t.messageKey] && (n = e[t.messageKey]), jd(n, t);
        }
      }
      o(jd, "processMessage");
      var jo = jd;
      function T2(e, t, r) {
        var a = w._audit.data.checks[e];
        if (!a)
          throw new Error("Cannot get message for unknown check: ".concat(e, "."));
        if (!a.messages[t])
          throw new Error('Check "'.concat(e, '"" does not have a "').concat(t, '" message.'));
        return jo(a.messages[t], r);
      }
      o(T2, "getCheckMessage");
      var R2 = T2;
      function k2(e, t, r) {
        var a = ((r.rules && r.rules[t] || {}).checks || {})[e.id], n = (r.checks || {})[e.id], i = e.enabled, u = e.options;
        return n && (n.hasOwnProperty("enabled") && (i = n.enabled), n.hasOwnProperty("options") && (u = n.options)), a && (a.hasOwnProperty("enabled") && (i = a.enabled), a.hasOwnProperty("options") && (u = a.options)), {
          enabled: i,
          options: u,
          absolutePaths: r.absolutePaths
        };
      }
      o(k2, "getCheckOption");
      var Mn = k2;
      function Xt() {
        var e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : D;
        return t && S(t) === "object" ? t : S(r) !== "object" ? {} : {
          testEngine: {
            name: "axe-core",
            version: w.version
          },
          testRunner: {
            name: w._audit.brand
          },
          testEnvironment: S2(r),
          timestamp: new Date().toISOString(),
          url: (e = r.location) === null || e === void 0 ? void 0 : e.href
        };
      }
      o(Xt, "_getEnvironmentData");
      function S2(e) {
        if (!e.navigator || S(e.navigator) !== "object")
          return {};
        var t = e.navigator, r = e.innerHeight, a = e.innerWidth, n = O2(e) || {}, i = n.angle, u = n.type;
        return {
          userAgent: t.userAgent,
          windowWidth: a,
          windowHeight: r,
          orientationAngle: i,
          orientationType: u
        };
      }
      o(S2, "getTestEnvironment");
      function O2(e) {
        var t = e.screen;
        return t.orientation || t.msOrientation || t.mozOrientation;
      }
      o(O2, "getOrientation");
      function zd(e, t) {
        var r = t.focusable, a = t.page;
        return {
          node: e,
          include: [],
          exclude: [],
          initiator: !1,
          focusable: r && M2(e),
          size: N2(e),
          page: a
        };
      }
      o(zd, "createFrameContext");
      function M2(e) {
        var t = e.getAttribute("tabindex");
        if (!t)
          return !0;
        var r = parseInt(t, 10);
        return isNaN(r) || r >= 0;
      }
      o(M2, "frameFocusable");
      function N2(e) {
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
      o(N2, "getBoundingSize");
      function I2(e) {
        if (Hd(e)) {
          var t = " must be used inside include or exclude. It should not be on the same object.";
          Kt(!Lt(e, "fromFrames"), "fromFrames" + t), Kt(!Lt(e, "fromShadowDom"), "fromShadowDom" + t);
        } else if (zo(e))
          e = {
            include: e,
            exclude: []
          };
        else
          return {
            include: [N],
            exclude: []
          };
        var r = Vd(e.include);
        r.length === 0 && r.push(N);
        var a = Vd(e.exclude);
        return {
          include: r,
          exclude: a
        };
      }
      o(I2, "normalizeContext");
      function P2(e) {
        return Hd(e) || zo(e);
      }
      o(P2, "isContextSpec");
      function Vd() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [];
        Ud(e) || (e = [e]);
        for (var r = 0; r < e.length; r++) {
          var a = L2(e[r]);
          a && t.push(a);
        }
        return t;
      }
      o(Vd, "normalizeContextList");
      function L2(e) {
        return e instanceof D.Node ? e : typeof e == "string" ? [e] : ($d(e) ? (q2(e), e = e.fromFrames) : Vo(e) && (e = [e]), B2(e));
      }
      o(L2, "normalizeContextSelector");
      function B2(e) {
        if (!!Array.isArray(e)) {
          var t = [], r = Fe(e), a;
          try {
            for (r.s(); !(a = r.n()).done; ) {
              var n = a.value;
              if (Vo(n) && (j2(n), n = n.fromShadowDom), typeof n != "string" && !z2(n))
                return;
              t.push(n);
            }
          } catch (i) {
            r.e(i);
          } finally {
            r.f();
          }
          return t;
        }
      }
      o(B2, "normalizeFrameSelectors");
      function Hd(e) {
        return ["include", "exclude"].some(function(t) {
          return Lt(e, t) && zo(e[t]);
        });
      }
      o(Hd, "isContextObject");
      function zo(e) {
        return typeof e == "string" || e instanceof D.Node || $d(e) || Vo(e) || Ud(e);
      }
      o(zo, "isContextProp");
      function $d(e) {
        return Lt(e, "fromFrames");
      }
      o($d, "isLabelledFramesSelector");
      function Vo(e) {
        return Lt(e, "fromShadowDom");
      }
      o(Vo, "isLabelledShadowDomSelector");
      function q2(e) {
        Kt(Array.isArray(e.fromFrames), "fromFrames property must be an array"), Kt(e.fromFrames.every(function(t) {
          return !Lt(t, "fromFrames");
        }), "Invalid context; fromFrames selector must be appended, rather than nested"), Kt(!Lt(e, "fromShadowDom"), "fromFrames and fromShadowDom cannot be used on the same object");
      }
      o(q2, "assertLabelledFrameSelector");
      function j2(e) {
        Kt(Array.isArray(e.fromShadowDom), "fromShadowDom property must be an array"), Kt(e.fromShadowDom.every(function(t) {
          return !Lt(t, "fromFrames");
        }), "shadow selector must be inside fromFrame instead"), Kt(e.fromShadowDom.every(function(t) {
          return !Lt(t, "fromShadowDom");
        }), "fromShadowDom selector must be appended, rather than nested");
      }
      o(j2, "assertLabelledShadowDomSelector");
      function z2(e) {
        return Array.isArray(e) && e.every(function(t) {
          return typeof t == "string";
        });
      }
      o(z2, "isShadowSelector");
      function Ud(e) {
        return e && S(e) === "object" && typeof e.length == "number" && !(e instanceof D.Node);
      }
      o(Ud, "isArrayLike");
      function Kt(e, t) {
        he(e, "Invalid context; ".concat(t, `
See: https://github.com/dequelabs/axe-core/blob/master/doc/context.md`));
      }
      o(Kt, "assert2");
      function Lt(e, t) {
        return !e || S(e) !== "object" ? !1 : Object.prototype.hasOwnProperty.call(e, t);
      }
      o(Lt, "objectHasOwn");
      function Gd(e, t) {
        for (var r = [], a = 0, n = e[t].length; a < n; a++) {
          var i = e[t][a];
          if (i instanceof D.Node)
            i.documentElement instanceof D.Node ? r.push(e.flatTree[0]) : r.push(se(i));
          else if (i && i.length)
            if (i.length > 1)
              V2(e, t, i);
            else {
              var u = Ko(i[0]);
              r.push.apply(r, ae(u.map(function(l) {
                return se(l);
              })));
            }
        }
        return r.filter(function(l) {
          return l;
        });
      }
      o(Gd, "parseSelectorArray");
      function V2(e, t, r) {
        e.frames = e.frames || [];
        var a = r.shift(), n = Ko(a);
        n.forEach(function(i) {
          var u = e.frames.find(function(l) {
            return l.node === i;
          });
          u || (u = zd(i, e), e.frames.push(u)), u[t].push(r);
        });
      }
      o(V2, "pushUniqueFrameSelector");
      function Nn(e, t) {
        var r, a, n, i, u = this;
        e = It(e), this.frames = [], this.page = typeof ((r = e) === null || r === void 0 ? void 0 : r.page) == "boolean" ? e.page : void 0, this.initiator = typeof ((a = e) === null || a === void 0 ? void 0 : a.initiator) == "boolean" ? e.initiator : !0, this.focusable = typeof ((n = e) === null || n === void 0 ? void 0 : n.focusable) == "boolean" ? e.focusable : !0, this.size = S((i = e) === null || i === void 0 ? void 0 : i.size) === "object" ? e.size : {}, e = I2(e), this.flatTree = t ?? Po(G2(e)), this.exclude = e.exclude, this.include = e.include, this.include = Gd(this, "include"), this.exclude = Gd(this, "exclude"), Xo("frame, iframe", this).forEach(function(l) {
          $o(l, u) && H2(u, l.actualNode);
        }), typeof this.page > "u" && (this.page = $2(this), this.frames.forEach(function(l) {
          l.page = u.page;
        })), U2(this), Array.isArray(this.include) || (this.include = Array.from(this.include)), this.include.sort(Go);
      }
      o(Nn, "Context");
      function H2(e, t) {
        !Te(t) || Qr(e.frames, "node", t) || e.frames.push(zd(t, e));
      }
      o(H2, "pushUniqueFrame");
      function $2(e) {
        var t = e.include;
        return t.length === 1 && t[0].actualNode === N.documentElement;
      }
      o($2, "isPageContext");
      function U2(e) {
        if (e.include.length === 0 && e.frames.length === 0) {
          var t = yt.isInFrame() ? "frame" : "page";
          throw new Error("No elements found for include in " + t + " Context");
        }
      }
      o(U2, "validateContext");
      function G2(e) {
        for (var t = e.include, r = e.exclude, a = Array.from(t).concat(Array.from(r)), n = 0; n < a.length; n++) {
          var i = a[n];
          if (i instanceof D.Element)
            return i.ownerDocument.documentElement;
          if (i instanceof D.Document)
            return i.documentElement;
        }
        return N.documentElement;
      }
      o(G2, "getRootNode2");
      function W2(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t.iframes === !1)
          return [];
        var r = new Nn(e), a = r.frames;
        return a.map(function(n) {
          var i = n.node, u = Le(n, Zf);
          u.initiator = !1;
          var l = qa(i);
          return {
            frameSelector: l,
            frameContext: u
          };
        });
      }
      o(W2, "_getFrameContexts");
      function Wd(e) {
        var t = w._audit.rules.find(function(r) {
          var a = r.id;
          return a === e;
        });
        if (!t)
          throw new Error("Cannot find rule by id: ".concat(e));
        return t;
      }
      o(Wd, "_getRule");
      function Y2(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = e.scrollWidth > e.clientWidth + t, a = e.scrollHeight > e.clientHeight + t;
        if (!!(r || a)) {
          var n = D.getComputedStyle(e), i = Yd(n, "overflow-x"), u = Yd(n, "overflow-y");
          if (r && i || a && u)
            return {
              elm: e,
              top: e.scrollTop,
              left: e.scrollLeft
            };
        }
      }
      o(Y2, "getScroll");
      function Yd(e, t) {
        var r = e.getPropertyValue(t);
        return ["scroll", "auto"].includes(r);
      }
      o(Yd, "isScrollable");
      var Bt = Be(Y2);
      function Xd(e) {
        return Array.from(e.children || e.childNodes || []).reduce(function(t, r) {
          var a = Bt(r);
          return a && t.push(a), t.concat(Xd(r));
        }, []);
      }
      o(Xd, "getElmScrollRecursive");
      function X2() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D, t = e.document.documentElement, r = [e.pageXOffset !== void 0 ? {
          elm: e,
          top: e.pageYOffset,
          left: e.pageXOffset
        } : {
          elm: t,
          top: t.scrollTop,
          left: t.scrollLeft
        }];
        return r.concat(Xd(N.body));
      }
      o(X2, "getScrollState");
      var K2 = X2;
      function Z2() {
        return It(ve);
      }
      o(Z2, "_getStandards");
      function J2(e) {
        if (!e)
          throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument");
        return function(t) {
          var r = t.data, a = t.isCrossOrigin, n = a === void 0 ? !1 : a, i = t.shadowId, u = t.root, l = t.priority, s = t.isLink, c = s === void 0 ? !1 : s, d = e.createElement("style");
          if (c) {
            var f = e.createTextNode('@import "'.concat(r.href, '"'));
            d.appendChild(f);
          } else
            d.appendChild(e.createTextNode(r));
          return e.head.appendChild(d), {
            sheet: d.sheet,
            isCrossOrigin: n,
            shadowId: i,
            root: u,
            priority: l
          };
        };
      }
      o(J2, "getStyleSheetFactory");
      var Kd = J2, ct;
      function Q2(e) {
        if (ct && ct.parentNode)
          return ct.styleSheet === void 0 ? ct.appendChild(N.createTextNode(e)) : ct.styleSheet.cssText += e, ct;
        if (!!e) {
          var t = N.head || N.getElementsByTagName("head")[0];
          return ct = N.createElement("style"), ct.type = "text/css", ct.styleSheet === void 0 ? ct.appendChild(N.createTextNode(e)) : ct.styleSheet.cssText = e, t.appendChild(ct), ct;
        }
      }
      o(Q2, "injectStyle");
      var ew = Q2;
      function Zd(e, t) {
        var r = se(e);
        if (e.nodeType === 9)
          return !1;
        if (e.nodeType === 11 && (e = e.host), r && r._isHidden !== null)
          return r._isHidden;
        var a = D.getComputedStyle(e, null);
        if (!a || !e.parentNode || a.getPropertyValue("display") === "none" || !t && a.getPropertyValue("visibility") === "hidden" || e.getAttribute("aria-hidden") === "true")
          return !0;
        var n = e.assignedSlot ? e.assignedSlot : e.parentNode, i = Zd(n, !0);
        return r && (r._isHidden = i), i;
      }
      o(Zd, "isHidden");
      var tw = Zd;
      function rw(e) {
        var t, r, a = (t = (r = e.props) === null || r === void 0 ? void 0 : r.nodeName) !== null && t !== void 0 ? t : e.nodeName.toLowerCase();
        return e.namespaceURI === "http://www.w3.org/2000/svg" ? !1 : !!ve.htmlElms[a];
      }
      o(rw, "isHtmlElement");
      var Ho = rw;
      function $o(e, t) {
        var r = t.include, a = r === void 0 ? [] : r, n = t.exclude, i = n === void 0 ? [] : n, u = a.filter(function(d) {
          return sr(d, e);
        });
        if (u.length === 0)
          return !1;
        var l = i.filter(function(d) {
          return sr(d, e);
        });
        if (l.length === 0)
          return !0;
        var s = Jd(u), c = Jd(l);
        return sr(c, s);
      }
      o($o, "_isNodeInContext");
      function Jd(e) {
        var t, r = Fe(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value;
            (!t || !sr(n, t)) && (t = n);
          }
        } catch (i) {
          r.e(i);
        } finally {
          r.f();
        }
        return t;
      }
      o(Jd, "getDeepest");
      function Uo(e, t) {
        return e.length !== t.length ? !1 : e.every(function(r, a) {
          var n = t[a];
          return Array.isArray(r) ? r.length !== n.length ? !1 : r.every(function(i, u) {
            return n[u] === i;
          }) : r === n;
        });
      }
      o(Uo, "_matchAncestry");
      function aw(e, t) {
        return e = e.actualNode || e, t = t.actualNode || t, e === t ? 0 : e.compareDocumentPosition(t) & 4 ? -1 : 1;
      }
      o(aw, "nodeSorter");
      var Go = aw;
      function _e(e) {
        return e instanceof He ? {
          vNode: e,
          domNode: e.actualNode
        } : {
          vNode: se(e),
          domNode: e
        };
      }
      o(_e, "_nodeLookup");
      function nw(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = Array.from(e.cssRules);
        if (!i)
          return Promise.resolve();
        var u = i.filter(function(d) {
          return d.type === 3;
        });
        if (!u.length)
          return Promise.resolve({
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId,
            sheet: e
          });
        var l = u.filter(function(d) {
          return d.href;
        }).map(function(d) {
          return d.href;
        }).filter(function(d) {
          return !a.includes(d);
        }), s = l.map(function(d, f) {
          var p = [].concat(ae(r), [f]), m = /^https?:\/\/|^\/\//i.test(d);
          return Yo(d, t, p, a, m);
        }), c = i.filter(function(d) {
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
      o(nw, "parseSameOriginStylesheet");
      var Qd = nw;
      function iw(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = ow(e);
        return i ? Qd(e, t, r, a, n) : Yo(e.href, t, r, a, !0);
      }
      o(iw, "parseStylesheet");
      function ow(e) {
        try {
          var t = e.cssRules;
          return !(!t && e.href);
        } catch {
          return !1;
        }
      }
      o(ow, "isSameOriginStylesheet");
      var Wo = iw;
      function uw(e, t, r, a, n) {
        return a.push(e), new Promise(function(i, u) {
          var l = new D.XMLHttpRequest();
          l.open("GET", e), l.timeout = ce.preload.timeout, l.addEventListener("error", u), l.addEventListener("timeout", u), l.addEventListener("loadend", function(s) {
            if (s.loaded && l.responseText)
              return i(l.responseText);
            u(l.responseText);
          }), l.send();
        }).then(function(i) {
          var u = t.convertDataToStylesheet({
            data: i,
            isCrossOrigin: n,
            priority: r,
            root: t.rootNode,
            shadowId: t.shadowId
          });
          return Wo(u.sheet, t, r, a, u.isCrossOrigin);
        });
      }
      o(uw, "parseCrossOriginStylesheet");
      var Yo = uw, lw = function() {
        function e() {
          if (D.performance && D.performance)
            return D.performance.now();
        }
        o(e, "now");
        var t = null, r = e();
        return {
          start: /* @__PURE__ */ o(function() {
            this.mark("mark_axe_start");
          }, "start"),
          end: /* @__PURE__ */ o(function() {
            this.mark("mark_axe_end"), this.measure("axe", "mark_axe_start", "mark_axe_end"), this.logMeasures("axe");
          }, "end"),
          auditStart: /* @__PURE__ */ o(function() {
            this.mark("mark_audit_start");
          }, "auditStart"),
          auditEnd: /* @__PURE__ */ o(function() {
            this.mark("mark_audit_end"), this.measure("audit_start_to_end", "mark_audit_start", "mark_audit_end"), this.logMeasures();
          }, "auditEnd"),
          mark: /* @__PURE__ */ o(function(n) {
            D.performance && D.performance.mark !== void 0 && D.performance.mark(n);
          }, "mark"),
          measure: /* @__PURE__ */ o(function(n, i, u) {
            D.performance && D.performance.measure !== void 0 && D.performance.measure(n, i, u);
          }, "measure"),
          logMeasures: /* @__PURE__ */ o(function(n) {
            function i(d) {
              or("Measure " + d.name + " took " + d.duration + "ms");
            }
            if (o(i, "logMeasure"), D.performance && D.performance.getEntriesByType !== void 0)
              for (var u = D.performance.getEntriesByName("mark_axe_start")[0], l = D.performance.getEntriesByType("measure").filter(function(d) {
                return d.startTime >= u.startTime;
              }), s = 0; s < l.length; ++s) {
                var c = l[s];
                if (c.name === n) {
                  i(c);
                  return;
                }
                i(c);
              }
          }, "logMeasures"),
          timeElapsed: /* @__PURE__ */ o(function() {
            return e() - r;
          }, "timeElapsed"),
          reset: /* @__PURE__ */ o(function() {
            t || (t = e()), r = e();
          }, "reset")
        };
      }(), qe = lw;
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
        value: /* @__PURE__ */ o(function(t) {
          if (this === null)
            throw new TypeError("Array.prototype.find called on null or undefined");
          if (typeof t != "function")
            throw new TypeError("predicate must be a function");
          for (var r = Object(this), a = r.length >>> 0, n = arguments[1], i, u = 0; u < a; u++)
            if (i = r[u], t.call(n, i, u, r))
              return i;
        }, "value")
      }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: /* @__PURE__ */ o(function(t, r) {
          if (this === null)
            throw new TypeError("Array.prototype.find called on null or undefined");
          if (typeof t != "function")
            throw new TypeError("predicate must be a function");
          for (var a = Object(this), n = a.length >>> 0, i, u = 0; u < n; u++)
            if (i = a[u], t.call(r, i, u, a))
              return u;
          return -1;
        }, "value")
      });
      function e1() {
        if (N.elementsFromPoint)
          return N.elementsFromPoint;
        if (N.msElementsFromPoint)
          return N.msElementsFromPoint;
        var e = function() {
          var n = N.createElement("x");
          return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
        }(), t = e ? "pointer-events" : "visibility", r = e ? "none" : "hidden", a = N.createElement("style");
        return a.innerHTML = e ? "* { pointer-events: all }" : "* { visibility: visible }", function(n, i) {
          var u, l, s, c = [], d = [];
          for (N.head.appendChild(a); (u = N.elementFromPoint(n, i)) && c.indexOf(u) === -1; )
            c.push(u), d.push({
              value: u.style.getPropertyValue(t),
              priority: u.style.getPropertyPriority(t)
            }), u.style.setProperty(t, r, "important");
          for (c.indexOf(N.documentElement) < c.length - 1 && (c.splice(c.indexOf(N.documentElement), 1), c.push(N.documentElement)), l = d.length; s = d[--l]; )
            c[l].style.setProperty(t, s.value ? s.value : "", s.priority);
          return N.head.removeChild(a), c;
        };
      }
      o(e1, "_pollyfillElementsFromPoint"), typeof D.addEventListener == "function" && (N.elementsFromPoint = e1()), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: /* @__PURE__ */ o(function(t) {
          var r = Object(this), a = parseInt(r.length, 10) || 0;
          if (a === 0)
            return !1;
          var n = parseInt(arguments[1], 10) || 0, i;
          n >= 0 ? i = n : (i = a + n, i < 0 && (i = 0));
          for (var u; i < a; ) {
            if (u = r[i], t === u || t !== t && u !== u)
              return !0;
            i++;
          }
          return !1;
        }, "value")
      }), Array.prototype.some || Object.defineProperty(Array.prototype, "some", {
        value: /* @__PURE__ */ o(function(t) {
          if (this == null)
            throw new TypeError("Array.prototype.some called on null or undefined");
          if (typeof t != "function")
            throw new TypeError();
          for (var r = Object(this), a = r.length >>> 0, n = arguments.length >= 2 ? arguments[1] : void 0, i = 0; i < a; i++)
            if (i in r && t.call(n, r[i], i, r))
              return !0;
          return !1;
        }, "value")
      }), Array.from || Object.defineProperty(Array, "from", {
        value: function() {
          var e = Object.prototype.toString, t = /* @__PURE__ */ o(function(u) {
            return typeof u == "function" || e.call(u) === "[object Function]";
          }, "isCallable"), r = /* @__PURE__ */ o(function(u) {
            var l = Number(u);
            return isNaN(l) ? 0 : l === 0 || !isFinite(l) ? l : (l > 0 ? 1 : -1) * Math.floor(Math.abs(l));
          }, "toInteger"), a = Math.pow(2, 53) - 1, n = /* @__PURE__ */ o(function(u) {
            var l = r(u);
            return Math.min(Math.max(l, 0), a);
          }, "toLength");
          return /* @__PURE__ */ o(function(u) {
            var l = this, s = Object(u);
            if (u == null)
              throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var c = arguments.length > 1 ? arguments[1] : void 0, d;
            if (typeof c < "u") {
              if (!t(c))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
              arguments.length > 2 && (d = arguments[2]);
            }
            for (var f = n(s.length), p = t(l) ? Object(new l(f)) : new Array(f), m = 0, h; m < f; )
              h = s[m], c ? p[m] = typeof d > "u" ? c(h, m) : c.call(d, h, m) : p[m] = h, m += 1;
            return p.length = f, p;
          }, "from");
        }()
      }), String.prototype.includes || (String.prototype.includes = function(e, t) {
        return typeof t != "number" && (t = 0), t + e.length > this.length ? !1 : this.indexOf(e, t) !== -1;
      }), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: /* @__PURE__ */ o(function e() {
          var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
          return t ? Array.prototype.reduce.call(this, function(r, a) {
            return Array.isArray(a) ? r.push.apply(r, e.call(a, t - 1)) : r.push(a), r;
          }, []) : Array.prototype.slice.call(this);
        }, "flat"),
        writable: !0
      }), D.Node && !("isConnected" in D.Node.prototype) && Object.defineProperty(D.Node.prototype, "isConnected", {
        get: /* @__PURE__ */ o(function() {
          return !this.ownerDocument || !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED);
        }, "get")
      });
      function sw(e, t) {
        return e.concat(t).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
      }
      o(sw, "uniqueArray");
      var ya = sw;
      function t1(e, t, r, a, n) {
        var i = n || {};
        return i.vNodes = e, i.vNodesIndex = 0, i.anyLevel = t, i.thisLevel = r, i.parentShadowId = a, i;
      }
      o(t1, "createLocalVariables");
      function cw(e, t, r) {
        for (var a = le.get("qsa.recycledLocalVariables", function() {
          return [];
        }), n = [], i = Array.isArray(e) ? e : [e], u = t1(i, t, null, e[0].shadowId, a.pop()), l = []; u.vNodesIndex < u.vNodes.length; ) {
          for (var s, c, d = u.vNodes[u.vNodesIndex++], f = null, p = null, m = (((s = u.anyLevel) === null || s === void 0 ? void 0 : s.length) || 0) + (((c = u.thisLevel) === null || c === void 0 ? void 0 : c.length) || 0), h = !1, v = 0; v < m; v++) {
            var b, g, y, _ = v < (((b = u.anyLevel) === null || b === void 0 ? void 0 : b.length) || 0) ? u.anyLevel[v] : u.thisLevel[v - (((g = u.anyLevel) === null || g === void 0 ? void 0 : g.length) || 0)];
            if ((!_[0].id || d.shadowId === u.parentShadowId) && xr(d, _[0]))
              if (_.length === 1)
                !h && (!r || r(d)) && (l.push(d), h = !0);
              else {
                var x = _.slice(1);
                if ([" ", ">"].includes(x[0].combinator) === !1)
                  throw new Error("axe.utils.querySelectorAll does not support the combinator: " + _[1].combinator);
                x[0].combinator === ">" ? (f = f || []).push(x) : (p = p || []).push(x);
              }
            (!_[0].id || d.shadowId === u.parentShadowId) && (y = u.anyLevel) !== null && y !== void 0 && y.includes(_) && (p = p || []).push(_);
          }
          for (d.children && d.children.length && (n.push(u), u = t1(d.children, p, f, d.shadowId, a.pop())); u.vNodesIndex === u.vNodes.length && n.length; )
            a.push(u), u = n.pop();
        }
        return l;
      }
      o(cw, "matchExpressions");
      function dw(e, t, r) {
        e = Array.isArray(e) ? e : [e];
        var a = ja(t), n = Nd(e, a, r);
        return n || cw(e, a, r);
      }
      o(dw, "querySelectorAllFilter");
      var St = dw;
      function fw(e) {
        var t = e.treeRoot, r = t === void 0 ? w._tree[0] : t, a = pw(r);
        if (!a.length)
          return Promise.resolve();
        var n = N.implementation.createHTMLDocument("Dynamic document for loading cssom"), i = Kd(n);
        return mw(a, i).then(function(u) {
          return a1(u);
        });
      }
      o(fw, "preloadCssom");
      var r1 = fw;
      function pw(e) {
        var t = [], r = St(e, "*", function(a) {
          return t.includes(a.shadowId) ? !1 : (t.push(a.shadowId), !0);
        }).map(function(a) {
          return {
            shadowId: a.shadowId,
            rootNode: ea(a.actualNode)
          };
        });
        return ya(r, []);
      }
      o(pw, "getAllRootNodesInTree");
      function mw(e, t) {
        var r = [];
        return e.forEach(function(a, n) {
          var i = a.rootNode, u = a.shadowId, l = hw(i, u, t);
          if (!l)
            return Promise.all(r);
          var s = n + 1, c = {
            rootNode: i,
            shadowId: u,
            convertDataToStylesheet: t,
            rootIndex: s
          }, d = [], f = Promise.all(l.map(function(p, m) {
            var h = [s, m];
            return Wo(p, c, h, d);
          }));
          r.push(f);
        }), Promise.all(r);
      }
      o(mw, "getCssomForAllRootNodes");
      function a1(e) {
        return e.reduce(function(t, r) {
          return Array.isArray(r) ? t.concat(a1(r)) : t.concat(r);
        }, []);
      }
      o(a1, "flattenAssets");
      function hw(e, t, r) {
        var a;
        return e.nodeType === 11 && t ? a = vw(e, r) : a = gw(e), yw(a);
      }
      o(hw, "getStylesheetsOfRootNode");
      function vw(e, t) {
        return Array.from(e.children).filter(bw).reduce(function(r, a) {
          var n = a.nodeName.toUpperCase(), i = n === "STYLE" ? a.textContent : a, u = n === "LINK", l = t({
            data: i,
            isLink: u,
            root: e
          });
          return l.sheet && r.push(l.sheet), r;
        }, []);
      }
      o(vw, "getStylesheetsFromDocumentFragment");
      function gw(e) {
        return Array.from(e.styleSheets).filter(function(t) {
          return t.media ? n1(t.media.mediaText) : !1;
        });
      }
      o(gw, "getStylesheetsFromDocument");
      function bw(e) {
        var t = e.nodeName.toUpperCase(), r = e.getAttribute("href"), a = e.getAttribute("rel"), n = t === "LINK" && r && a && e.rel.toUpperCase().includes("STYLESHEET"), i = t === "STYLE";
        return i || n && n1(e.media);
      }
      o(bw, "filerStyleAndLinkAttributesInDocumentFragment");
      function n1(e) {
        return e ? !e.toUpperCase().includes("PRINT") : !0;
      }
      o(n1, "filterMediaIsPrint");
      function yw(e) {
        var t = [];
        return e.filter(function(r) {
          return r.href ? t.includes(r.href) ? !1 : (t.push(r.href), !0) : !0;
        });
      }
      o(yw, "filterStylesheetsWithSameHref");
      function ww(e) {
        var t = e.treeRoot, r = t === void 0 ? w._tree[0] : t, a = St(r, "video, audio", function(n) {
          var i = n.actualNode;
          if (i.hasAttribute("src"))
            return !!i.getAttribute("src");
          var u = Array.from(i.getElementsByTagName("source")).filter(function(l) {
            return !!l.getAttribute("src");
          });
          return !(u.length <= 0);
        });
        return Promise.all(a.map(function(n) {
          var i = n.actualNode;
          return Dw(i);
        }));
      }
      o(ww, "preloadMedia");
      var i1 = ww;
      function Dw(e) {
        return new Promise(function(t) {
          e.readyState > 0 && t(e);
          function r() {
            e.removeEventListener("loadedmetadata", r), t(e);
          }
          o(r, "onMediaReady"), e.addEventListener("loadedmetadata", r);
        });
      }
      o(Dw, "isMediaElementReady");
      function o1(e) {
        var t = {
          cssom: r1,
          media: i1
        };
        return u1(e) ? new Promise(function(r, a) {
          var n = l1(e), i = n.assets, u = n.timeout, l = setTimeout(function() {
            return a(new Error("Preload assets timed out."));
          }, u);
          Promise.all(i.map(function(s) {
            return t[s](e).then(function(c) {
              return np({}, s, c);
            });
          })).then(function(s) {
            var c = s.reduce(function(d, f) {
              return pe({}, d, f);
            }, {});
            clearTimeout(l), r(c);
          }).catch(function(s) {
            clearTimeout(l), a(s);
          });
        }) : Promise.resolve();
      }
      o(o1, "_preload");
      function _w(e) {
        return S(e) === "object" && Array.isArray(e.assets);
      }
      o(_w, "isValidPreloadObject");
      function u1(e) {
        return !e || e.preload === void 0 || e.preload === null ? !0 : typeof e.preload == "boolean" ? e.preload : _w(e.preload);
      }
      o(u1, "_shouldPreload");
      function l1(e) {
        var t = ce.preload, r = t.assets, a = t.timeout, n = {
          assets: r,
          timeout: a
        };
        if (!e.preload || typeof e.preload == "boolean")
          return n;
        var i = e.preload.assets.every(function(u) {
          return r.includes(u.toLowerCase());
        });
        if (!i)
          throw new Error("Requested assets, not supported. Supported assets are: ".concat(r.join(", "), "."));
        return n.assets = ya(e.preload.assets.map(function(u) {
          return u.toLowerCase();
        }), []), e.preload.timeout && typeof e.preload.timeout == "number" && !isNaN(e.preload.timeout) && (n.timeout = e.preload.timeout), n;
      }
      o(l1, "_getPreloadConfig");
      function In(e) {
        var t = w._audit.data.checks || {}, r = w._audit.data.rules || {}, a = Qr(w._audit.rules, "id", e.id) || {};
        e.tags = It(a.tags || []);
        var n = s1(t, !0, a), i = s1(t, !1, a);
        e.nodes.forEach(function(u) {
          u.any.forEach(n), u.all.forEach(n), u.none.forEach(i);
        }), Ti(e, It(r[e.id] || {}));
      }
      o(In, "_publishMetaData");
      function xw(e, t) {
        function r(n) {
          return n.incomplete && n.incomplete.default ? n.incomplete.default : qo();
        }
        if (o(r, "getDefaultMsg"), e && e.missingData)
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
      o(xw, "getIncompleteReason");
      function s1(e, t, r) {
        return function(a) {
          var n = e[a.id] || {}, i = n.messages || {}, u = Object.assign({}, n);
          delete u.messages, !r.reviewOnFail && a.result === void 0 ? (S(i.incomplete) === "object" && !Array.isArray(a.data) && (u.message = xw(a.data, i)), u.message || (u.message = i.incomplete)) : u.message = a.result === t ? i.pass : i.fail, typeof u.message != "function" && (u.message = jo(u.message, a.data)), Ti(a, u);
        };
      }
      o(s1, "extender");
      function Ew(e, t) {
        return St(e, t);
      }
      o(Ew, "querySelectorAll");
      var dt = Ew;
      function c1(e, t) {
        var r, a, n, i = w._audit && w._audit.tagExclude ? w._audit.tagExclude : [];
        return t.hasOwnProperty("include") || t.hasOwnProperty("exclude") ? (r = t.include || [], r = Array.isArray(r) ? r : [r], a = t.exclude || [], a = Array.isArray(a) ? a : [a], a = a.concat(i.filter(function(u) {
          return r.indexOf(u) === -1;
        }))) : (r = Array.isArray(t) ? t : [t], a = i.filter(function(u) {
          return r.indexOf(u) === -1;
        })), n = r.some(function(u) {
          return e.tags.indexOf(u) !== -1;
        }), n || r.length === 0 && e.enabled !== !1 ? a.every(function(u) {
          return e.tags.indexOf(u) === -1;
        }) : !1;
      }
      o(c1, "matchTags");
      function Cw(e, t, r) {
        var a = r.runOnly || {}, n = (r.rules || {})[e.id];
        return e.pageLevel && !t.page ? !1 : a.type === "rule" ? a.values.indexOf(e.id) !== -1 : n && typeof n.enabled == "boolean" ? n.enabled : a.type === "tag" && a.values ? c1(e, a.values) : c1(e, []);
      }
      o(Cw, "ruleShouldRun");
      var d1 = Cw;
      function f1(e, t) {
        if (!t)
          return e;
        var r = e.cloneNode(!1), a = Pa(r);
        if (r.nodeType === 1) {
          var n = r.outerHTML;
          r = le.get(n, function() {
            return p1(r, a, e, t);
          });
        } else
          r = p1(r, a, e, t);
        return Array.from(e.childNodes).forEach(function(i) {
          r.appendChild(f1(i, t));
        }), r;
      }
      o(f1, "_filterHtmlAttrs");
      function p1(e, t, r, a) {
        return t && (e = N.createElement(e.nodeName), Array.from(t).forEach(function(n) {
          Aw(r, n.name, a) || e.setAttribute(n.name, n.value);
        })), e;
      }
      o(p1, "setNodeAttributes");
      function Aw(e, t, r) {
        return typeof r[t] > "u" ? !1 : r[t] === !0 ? !0 : _r(e, r[t]);
      }
      o(Aw, "attributeMatches");
      function Xo(e, t) {
        var r = [], a;
        if (w._selectCache)
          for (var n = 0, i = w._selectCache.length; n < i; n++) {
            var u = w._selectCache[n];
            if (u.selector === e)
              return u.result;
          }
        for (var l = Fw(t.include), s = Tw(t), c = 0; c < l.length; c++) {
          a = l[c];
          var d = St(a, e, s);
          r = Rw(r, d);
        }
        return w._selectCache && w._selectCache.push({
          selector: e,
          result: r
        }), r;
      }
      o(Xo, "_select");
      function Fw(e) {
        return e.reduce(function(t, r) {
          return (!t.length || !sr(t[t.length - 1], r)) && t.push(r), t;
        }, []);
      }
      o(Fw, "getOuterIncludes");
      function Tw(e) {
        return !e.exclude || e.exclude.length === 0 ? null : function(t) {
          return $o(t, e);
        };
      }
      o(Tw, "getContextFilter");
      function Rw(e, t) {
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
      o(Rw, "mergeArrayUniques");
      function kw(e, t, r) {
        if (e === D)
          return e.scroll(r, t);
        e.scrollTop = t, e.scrollLeft = r;
      }
      o(kw, "setScroll");
      function Sw(e) {
        e.forEach(function(t) {
          var r = t.elm, a = t.top, n = t.left;
          return kw(r, a, n);
        });
      }
      o(Sw, "setScrollState");
      var Ow = Sw;
      function Mw(e) {
        var t = Array.isArray(e) ? ae(e) : [e];
        return m1(t, N);
      }
      o(Mw, "_shadowSelect");
      function m1(e, t) {
        var r = e.shift(), a = r ? t.querySelector(r) : null;
        return e.length === 0 ? a : a != null && a.shadowRoot ? m1(e, a.shadowRoot) : null;
      }
      o(m1, "selectRecursive");
      function Ko(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, r = Array.isArray(e) ? ae(e) : [e];
        return e.length === 0 ? [] : h1(r, t);
      }
      o(Ko, "_shadowSelectAll");
      function h1(e, t) {
        var r = ap(e), a = r[0], n = r.slice(1), i = t.querySelectorAll(a);
        if (n.length === 0)
          return Array.from(i);
        var u = [], l = Fe(i), s;
        try {
          for (l.s(); !(s = l.n()).done; ) {
            var c = s.value;
            c != null && c.shadowRoot && u.push.apply(u, ae(h1(n, c.shadowRoot)));
          }
        } catch (d) {
          l.e(d);
        } finally {
          l.f();
        }
        return u;
      }
      o(h1, "selectAllRecursive");
      function Nw() {
        return ["hidden", "text", "search", "tel", "url", "email", "password", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"];
      }
      o(Nw, "validInputTypes");
      var Pn = Nw, v1 = [, [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , , , , , 1, 1, 1, 1, , , 1, 1, 1, , 1, , 1, , 1, 1], [1, 1, 1, , 1, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, 1, 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1], [1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , , 1, 1, , , , , , 1, 1], [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1], [, 1, , , 1, , , 1, , , , , , 1], [, 1, , 1, , , , 1, , , , 1], [1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [, 1, 1, , , , , , 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1], [, , , , 1, , , , , , , , , , , , , , , , , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, , 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, 1, , , , , 1], [1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , 1, , , , , , , 1], [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1], , [1, 1, 1, , , , , , , , , , , , , 1], [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1]], [, [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , 1, , , , , , , , , , , , , , , 1], [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1], [1, , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1], [, , , , , , , 1, , , , 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , 1], [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1], [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1], , [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1], [1, 1, , , 1, 1, , 1, , , , , 1, , 1]], [, [, 1], [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1], [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1], , [1, , , , , 1], [, 1, , , , 1, , , , 1], [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1], [, , , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , 1, , 1], [, 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1], [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1], [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1], [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1], [1, , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], , [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1], [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1], [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1], [1, , , , , , , , , , , , , , , , , 1], [, , , , , 1, , , 1, , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1], [, 1, , , , 1]], [, [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, 1, 1], [, , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], , [, , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1], , [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1], [1], [, , , , , , , , , , , 1, , , , , , , , , , , 1], [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , , 1], [, , 1, , , , , 1, , 1], [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1], [, , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1], [, , , , , 1, , , , , , , 1, , , , , , , 1], , [, , 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , , 1, 1, , 1, 1, 1, , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, , , , 1], , [1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, , , 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1], [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1], [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1], [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, , , , 1, 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1], [, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1], [, 1, , , , , , , , 1, , , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1], [1, 1, , , 1, , , 1, 1, 1, , , , 1], , [, , , , , , , , , , , , , 1, , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1], [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1], [, , , , , , , , , 1], [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1], [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , 1, , , , 1], , [1, 1, , 1, , 1, , , , , , 1, , 1, , 1, 1, , 1, , 1, 1, , 1, 1, , 1], [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1], [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1], [, 1, , 1, , , , , , , , , , , , 1], , [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1], [1]], [, [1, , , , , , , , , 1, , , , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1], [, 1, , , , , , , 1, , , , 1, , , , , , 1], [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1], [1], [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1], [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1], [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1], [1, , , , , , , , , , , , , , 1, , , , 1], [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1], [1, , , , , 1, , , , 1, , 1, 1, , , 1, 1, , 1, 1, 1, , 1, 1, 1, , 1], [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1], [1, , 1, 1, , 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , , , 1], [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1], [, , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1], [1, , 1, 1, 1, 1, , , , 1, , 1, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1], [1, , , , , , , , , , , , , 1], [, , 1, , , , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , , , 1, , 1, , 1, , , , 1], [, , , 1, , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1], [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1], [, , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , 1, , , , , , , , , , , , , 1], [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1], , [, , 1, , , 1, , , , , , 1, , , , 1], [, , , , , , , , , 1, , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , 1, , 1, , , 1, 1, 1, , , 1], [, , , , , 1, , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1], [, , , , , 1, , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1], [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1], [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1], [, , , , , , , , , , , , 1], , [, 1, 1, 1, 1, , , , 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1], [1, , , , 1, , , , , , , , , , 1], [1, , , , , , , , , 1], , [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , 1], [1, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, , 1, 1, , , , , 1], [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1, , 1, , 1, , , 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1], , [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1, , , , 1], [, 1, , , 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1], [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1], [1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1], [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1], , [, 1, , , , , , 1, , , , , , , 1], [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1]], [, [, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1], [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1], [1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , 1, 1, , 1, , 1, 1, 1, , 1, , 1, 1, , 1, 1, , 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , , 1, , , , , 1, , 1], [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1], [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1]], [, [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1], [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1], [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1], [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1], , [, , , , , , , , , , , , , , , 1, , , , 1, , 1], [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , , , , , , , , 1], [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1], [, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1], [1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1], [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1], [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1], , [1, 1, , 1, , 1, , 1, 1, , , , , , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1], [, 1, 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, , , 1, , , , 1, , , , 1, 1], [, , , , 1], [, , , , , , , , , 1, , , 1], , [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1], [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , , , , 1], [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1], [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], , [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1], [, , , , , , , , , , , , , 1], [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1], [, , , , , , , , , , , , , , 1]], [, [, 1], , , , , , , , , , , , , , , , , , , , [1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, , , , 1, , 1, 1], [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1], [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , , , , , , , , , , , , , , 1]], [, [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , 1, 1, , , , 1], [, , , , , , 1], [, , 1], [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1], , [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1], [, , , , , , , 1, , , , , , , , , 1], [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1], [, , , , , , , 1, , 1, , , , , , , , , , 1], [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1], , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1], [, , , , , , , , , , , , , , 1, , , , , , 1], , [, , , , , , , , , 1, , , , , , 1, , , , , 1], [, , 1, , , , , , , 1, , , 1, 1], [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1], [1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , , , 1, 1, 1, , , 1, 1, , , , 1, 1], , [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1], [, , , , 1, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , 1], [, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1], [1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1], [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1], [1, 1, 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1], [, 1, 1, 1, , 1, , 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [1, 1, , , , 1, , , 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, , 1], [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1]], [, [, , , , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1], , [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1], [, 1, , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1, , , 1], [, , , , , , , , , 1], [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1], [, , , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , , , , , 1], , [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1], [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1], [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1], [, , , , , 1, , , 1, , , , 1], [, 1], , [, 1], [1, , , , , , , , , , , , , , 1, , , , , 1]], [, [, 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , , 1], [, , 1, , , , , , , , , 1], , , [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1], , [, , , , , , , , , , , , , , , , , , 1, , 1], , [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1], , [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1], [, , , , , , , , , , , , , , , , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , 1, , , 1], [1, , , , , , , , , , , , , , , , , , 1, , 1], , , [, 1, , , , , , , , , , , , , , 1, , , , 1, 1], [, , , , , , , , , 1, , , 1, , , , , , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1, 1, , , , , , 1], , [, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1], [, 1, , , , , , , , 1], [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1], [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , , , , , 1], [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1], [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1], [, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, 1, 1, 1, , 1], [, 1, , , , , , , , 1], [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1], [, 1, , 1, , 1, , 1, 1, 1, , 1, 1, 1, , 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, , , 1, 1, , , , 1, , 1], [, , , 1], , [, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1], [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1], [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1], , [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1], [, 1, , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1]], [, [, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, , 1, , 1, 1, , , 1, 1, 1, 1, , 1, , , , , 1, 1, 1], [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1], [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1], [, 1], [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1], [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1], [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1], [, , 1, , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, , , , 1, 1], [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1], [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1], [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1], [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1], [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1], [, , , , , , , , 1, , , , , 1, , , 1]], [, [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1], [, , , , , , , , 1, , , , 1, , 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1], , [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1], [, 1, , , 1, , , , , , , , 1, , , , , , , 1], [1, 1, , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], , [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1], [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1], [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1], [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1], [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1], , [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1], [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1], [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1], [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1], [, , , , , , , 1, , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , 1], [, 1, , , , , , 1, 1, , , , , , 1], , [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1], [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1], [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1], , [, 1, 1, , 1, , , 1, 1, , , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , , 1], [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1], [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1], [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1], [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1], [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1], , [, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, , 1, , , , , 1, , , 1, , , , 1, , 1], [, 1, , , , , , , , , 1]]];
      function Iw(e) {
        for (var t = v1; e.length < 3; )
          e += "`";
        for (var r = 0; r <= e.length - 1; r++) {
          var a = e.charCodeAt(r) - 96;
          if (t = t[a], !t)
            return !1;
        }
        return !0;
      }
      o(Iw, "isValidLang");
      function g1(e) {
        e = Array.isArray(e) ? e : v1;
        var t = [];
        return e.forEach(function(r, a) {
          var n = String.fromCharCode(a + 96).replace("`", "");
          Array.isArray(r) ? t = t.concat(g1(r).map(function(i) {
            return n + i;
          })) : t.push(n);
        }), t;
      }
      o(g1, "_validLangs");
      var Ln = Iw, Pw = function(e) {
        Xn(r, e);
        var t = Kn(r);
        function r(a) {
          var n;
          return _t(this, r), n = t.call(this), n._props = Bw(a), n._attrs = qw(a), n;
        }
        return o(r, "SerialVirtualNode"), xt(r, [{
          key: "props",
          get: /* @__PURE__ */ o(function() {
            return this._props;
          }, "get")
        }, {
          key: "attr",
          value: /* @__PURE__ */ o(function(n) {
            var i;
            return (i = this._attrs[n]) !== null && i !== void 0 ? i : null;
          }, "attr")
        }, {
          key: "hasAttr",
          value: /* @__PURE__ */ o(function(n) {
            return this._attrs[n] !== void 0;
          }, "hasAttr")
        }, {
          key: "attrNames",
          get: /* @__PURE__ */ o(function() {
            return Object.keys(this._attrs);
          }, "get")
        }]), r;
      }(He), Zo = {
        "#cdata-section": 2,
        "#text": 3,
        "#comment": 8,
        "#document": 9,
        "#document-fragment": 11
      }, b1 = {}, Lw = Object.keys(Zo);
      Lw.forEach(function(e) {
        b1[Zo[e]] = e;
      });
      function Bw(e) {
        var t, r, a, n = (t = e.nodeName) !== null && t !== void 0 ? t : b1[e.nodeType], i = (r = (a = e.nodeType) !== null && a !== void 0 ? a : Zo[e.nodeName]) !== null && r !== void 0 ? r : 1;
        he(typeof i == "number", "nodeType has to be a number, got '".concat(i, "'")), he(typeof n == "string", "nodeName has to be a string, got '".concat(n, "'")), n = n.toLowerCase();
        var u = null;
        n === "input" && (u = (e.type || e.attributes && e.attributes.type || "").toLowerCase(), Pn().includes(u) || (u = "text"));
        var l = pe({}, e, {
          nodeType: i,
          nodeName: n
        });
        return u && (l.type = u), delete l.attributes, Object.freeze(l);
      }
      o(Bw, "normaliseProps");
      function qw(e) {
        var t = e.attributes, r = t === void 0 ? {} : t, a = {
          htmlFor: "for",
          className: "class"
        };
        return Object.keys(r).reduce(function(n, i) {
          var u = r[i];
          if (he(S(u) !== "object" || u === null, "expects attributes not to be an object, '".concat(i, "' was")), u !== void 0) {
            var l = a[i] || i;
            n[l] = u !== null ? String(u) : null;
          }
          return n;
        }, {});
      }
      o(qw, "normaliseAttrs");
      var y1 = Pw;
      function jw(e, t) {
        if (e = e || /* @__PURE__ */ o(function() {
        }, "res"), t = t || w.log, !w._audit)
          throw new Error("No audit configured");
        var r = w.utils.queue(), a = [];
        Object.keys(w.plugins).forEach(function(i) {
          r.defer(function(u) {
            var l = /* @__PURE__ */ o(function(c) {
              a.push(c), u();
            }, "rej2");
            try {
              w.plugins[i].cleanup(u, l);
            } catch (s) {
              l(s);
            }
          });
        });
        var n = w.utils.getFlattenedTree(N.body);
        w.utils.querySelectorAll(n, "iframe, frame").forEach(function(i) {
          r.defer(function(u, l) {
            return w.utils.sendCommandToFrame(i.actualNode, {
              command: "cleanup-plugin"
            }, u, l);
          });
        }), r.then(function(i) {
          a.length === 0 ? e(i) : t(a);
        }).catch(t);
      }
      o(jw, "cleanup");
      var w1 = jw, wa = {}, D1;
      function _1(e) {
        return wa.hasOwnProperty(e);
      }
      o(_1, "hasReporter");
      function Jo(e) {
        return typeof e == "string" && wa[e] ? wa[e] : typeof e == "function" ? e : D1;
      }
      o(Jo, "getReporter");
      function zw(e, t, r) {
        wa[e] = t, r && (D1 = t);
      }
      o(zw, "addReporter");
      function Vw(e) {
        var t;
        if (t = w._audit, !t)
          throw new Error("No audit configured");
        if (e.axeVersion || e.ver) {
          var r = e.axeVersion || e.ver;
          if (!/^\d+\.\d+\.\d+(-canary)?/.test(r))
            throw new Error("Invalid configured version ".concat(r));
          var a = r.split("-"), n = H(a, 2), i = n[0], u = n[1], l = i.split(".").map(Number), s = H(l, 3), c = s[0], d = s[1], f = s[2], p = w.version.split("-"), m = H(p, 2), h = m[0], v = m[1], b = h.split(".").map(Number), g = H(b, 3), y = g[0], _ = g[1], x = g[2];
          if (c !== y || _ < d || _ === d && x < f || c === y && d === _ && f === x && u && u !== v)
            throw new Error("Configured version ".concat(r, " is not compatible with current axe version ").concat(w.version));
        }
        if (e.reporter && (typeof e.reporter == "function" || _1(e.reporter)) && (t.reporter = e.reporter), e.checks) {
          if (!Array.isArray(e.checks))
            throw new TypeError("Checks property must be an array");
          e.checks.forEach(function(k) {
            if (!k.id)
              throw new TypeError("Configured check ".concat(JSON.stringify(k), " is invalid. Checks must be an object with at least an id property"));
            t.addCheck(k);
          });
        }
        var T = [];
        if (e.rules) {
          if (!Array.isArray(e.rules))
            throw new TypeError("Rules property must be an array");
          e.rules.forEach(function(k) {
            if (!k.id)
              throw new TypeError("Configured rule ".concat(JSON.stringify(k), " is invalid. Rules must be an object with at least an id property"));
            T.push(k.id), t.addRule(k);
          });
        }
        if (e.disableOtherRules && t.rules.forEach(function(k) {
          T.includes(k.id) === !1 && (k.enabled = !1);
        }), typeof e.branding < "u" ? t.setBranding(e.branding) : t._constructHelpUrls(), e.tagExclude && (t.tagExclude = e.tagExclude), e.locale && t.applyLocale(e.locale), e.standards && Tg(e.standards), e.noHtml && (t.noHtml = !0), e.allowedOrigins) {
          if (!Array.isArray(e.allowedOrigins))
            throw new TypeError("Allowed origins property must be an array");
          if (e.allowedOrigins.includes("*"))
            throw new Error('"*" is not allowed. Use "'.concat(ce.allOrigins, '" instead'));
          t.setAllowedOrigins(e.allowedOrigins);
        }
      }
      o(Vw, "configure");
      var Hw = Vw;
      function $w(e) {
        yt.updateMessenger(e);
      }
      o($w, "frameMessenger2");
      function Uw(e) {
        e = e || [];
        var t = e.length ? w._audit.rules.filter(function(a) {
          return !!e.filter(function(n) {
            return a.tags.indexOf(n) !== -1;
          }).length;
        }) : w._audit.rules, r = w._audit.data.rules || {};
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
      o(Uw, "getRules");
      var Gw = Uw, x1 = {};
      gt(x1, {
        allowedAttr: /* @__PURE__ */ o(function() {
          return E1;
        }, "allowedAttr"),
        arialabelText: /* @__PURE__ */ o(function() {
          return na;
        }, "arialabelText"),
        arialabelledbyText: /* @__PURE__ */ o(function() {
          return aa;
        }, "arialabelledbyText"),
        getAccessibleRefs: /* @__PURE__ */ o(function() {
          return Qo;
        }, "getAccessibleRefs"),
        getElementUnallowedRoles: /* @__PURE__ */ o(function() {
          return F1;
        }, "getElementUnallowedRoles"),
        getExplicitRole: /* @__PURE__ */ o(function() {
          return Ee;
        }, "getExplicitRole"),
        getImplicitRole: /* @__PURE__ */ o(function() {
          return Ft;
        }, "getImplicitRole"),
        getOwnedVirtual: /* @__PURE__ */ o(function() {
          return oa;
        }, "getOwnedVirtual"),
        getRole: /* @__PURE__ */ o(function() {
          return de;
        }, "getRole"),
        getRoleType: /* @__PURE__ */ o(function() {
          return Rt;
        }, "getRoleType"),
        getRolesByType: /* @__PURE__ */ o(function() {
          return nD;
        }, "getRolesByType"),
        getRolesWithNameFromContents: /* @__PURE__ */ o(function() {
          return uD;
        }, "getRolesWithNameFromContents"),
        implicitNodes: /* @__PURE__ */ o(function() {
          return sD;
        }, "implicitNodes"),
        implicitRole: /* @__PURE__ */ o(function() {
          return Ft;
        }, "implicitRole"),
        isAccessibleRef: /* @__PURE__ */ o(function() {
          return Bn;
        }, "isAccessibleRef"),
        isAriaRoleAllowedOnElement: /* @__PURE__ */ o(function() {
          return A1;
        }, "isAriaRoleAllowedOnElement"),
        isComboboxPopup: /* @__PURE__ */ o(function() {
          return tu;
        }, "isComboboxPopup"),
        isUnsupportedRole: /* @__PURE__ */ o(function() {
          return $i;
        }, "isUnsupportedRole"),
        isValidRole: /* @__PURE__ */ o(function() {
          return kr;
        }, "isValidRole"),
        label: /* @__PURE__ */ o(function() {
          return S1;
        }, "label"),
        labelVirtual: /* @__PURE__ */ o(function() {
          return ln;
        }, "labelVirtual"),
        lookupTable: /* @__PURE__ */ o(function() {
          return R1;
        }, "lookupTable"),
        namedFromContents: /* @__PURE__ */ o(function() {
          return $s;
        }, "namedFromContents"),
        requiredAttr: /* @__PURE__ */ o(function() {
          return O1;
        }, "requiredAttr"),
        requiredContext: /* @__PURE__ */ o(function() {
          return ru;
        }, "requiredContext"),
        requiredOwned: /* @__PURE__ */ o(function() {
          return au;
        }, "requiredOwned"),
        validateAttr: /* @__PURE__ */ o(function() {
          return qn;
        }, "validateAttr"),
        validateAttrValue: /* @__PURE__ */ o(function() {
          return M1;
        }, "validateAttrValue")
      });
      function Ww(e) {
        var t = ve.ariaRoles[e], r = ae(pr());
        return t && (t.allowedAttrs && r.push.apply(r, ae(t.allowedAttrs)), t.requiredAttrs && r.push.apply(r, ae(t.requiredAttrs))), r;
      }
      o(Ww, "allowedAttr");
      var E1 = Ww, Yw = /^idrefs?$/;
      function C1(e, t, r) {
        if (e.hasAttribute) {
          if (e.nodeName.toUpperCase() === "LABEL" && e.hasAttribute("for")) {
            var a = e.getAttribute("for");
            t.has(a) ? t.get(a).push(e) : t.set(a, [e]);
          }
          for (var n = 0; n < r.length; ++n) {
            var i = r[n], u = ne(e.getAttribute(i) || "");
            if (!!u) {
              var l = Fe(Xe(u)), s;
              try {
                for (l.s(); !(s = l.n()).done; ) {
                  var c = s.value;
                  t.has(c) ? t.get(c).push(e) : t.set(c, [e]);
                }
              } catch (f) {
                l.e(f);
              } finally {
                l.f();
              }
            }
          }
        }
        for (var d = 0; d < e.childNodes.length; d++)
          e.childNodes[d].nodeType === 1 && C1(e.childNodes[d], t, r);
      }
      o(C1, "cacheIdRefs");
      function Xw(e) {
        var t;
        e = e.actualNode || e;
        var r = Ye(e);
        r = r.documentElement || r;
        var a = le.get("idRefsByRoot", function() {
          return /* @__PURE__ */ new Map();
        }), n = a.get(r);
        if (!n) {
          n = /* @__PURE__ */ new Map(), a.set(r, n);
          var i = Object.keys(ve.ariaAttrs).filter(function(u) {
            var l = ve.ariaAttrs[u].type;
            return Yw.test(l);
          });
          C1(r, n, i);
        }
        return (t = n.get(e.id)) !== null && t !== void 0 ? t : [];
      }
      o(Xw, "getAccessibleRefs");
      var Qo = Xw;
      function Kw(e, t) {
        var r = e instanceof He ? e : se(e), a = Ft(r), n = hr(r);
        return Array.isArray(n.allowedRoles) ? n.allowedRoles.includes(t) : t === a ? !1 : !!n.allowedRoles;
      }
      o(Kw, "isAriaRoleAllowedOnElement");
      var A1 = Kw, Zw = ["doc-backlink", "doc-biblioentry", "doc-biblioref", "doc-cover", "doc-endnote", "doc-glossref", "doc-noteref"], Jw = {
        header: "banner",
        footer: "contentinfo"
      };
      function Qw(e) {
        var t = [];
        if (!e)
          return t;
        if (e.hasAttr("role")) {
          var r = Xe(e.attr("role").toLowerCase());
          t = t.concat(r);
        }
        return t.filter(function(a) {
          return kr(a);
        });
      }
      o(Qw, "getRoleSegments");
      function eD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = _e(e), a = r.vNode;
        if (!Ho(a))
          return [];
        var n = a.props.nodeName, i = Ft(a) || Jw[n], u = Qw(a);
        return u.filter(function(l) {
          return !tD(l, a, t, i);
        });
      }
      o(eD, "getElementUnallowedRoles");
      function tD(e, t, r, a) {
        return r && e === a ? !0 : Zw.includes(e) && Rt(e) !== a ? !1 : A1(t, e);
      }
      o(tD, "roleIsAllowed");
      var F1 = eD;
      function rD(e) {
        return Object.keys(ve.ariaRoles).filter(function(t) {
          return ve.ariaRoles[t].type === e;
        });
      }
      o(rD, "getAriaRolesByType");
      var Ir = rD;
      function aD(e) {
        return Ir(e);
      }
      o(aD, "getRolesByType");
      var nD = aD;
      function iD() {
        return le.get("ariaRolesNameFromContent", function() {
          return Object.keys(ve.ariaRoles).filter(function(e) {
            return ve.ariaRoles[e].nameFromContent;
          });
        });
      }
      o(iD, "getAriaRolesSupportingNameFromContent");
      var eu = iD;
      function oD() {
        return eu();
      }
      o(oD, "getRolesWithNameFromContents");
      var uD = oD, T1 = /* @__PURE__ */ o(function(t) {
        return t === null;
      }, "isNull"), Ke = /* @__PURE__ */ o(function(t) {
        return t !== null;
      }, "isNotNull"), qt = {};
      qt.attributes = {
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
      }, qt.globalAttributes = ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"], qt.role = {
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
              href: Ke
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
              href: Ke
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
              href: Ke
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
              href: Ke
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
              href: Ke
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
              href: Ke
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
              href: Ke
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
              href: Ke
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
              alt: Ke
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
              href: Ke
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
              alt: Ke
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
              href: Ke
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
              href: Ke
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
              href: Ke
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
      }, qt.implicitHtmlRole = Wi, qt.elementsAllowedNoRole = [{
        nodeName: ["base", "body", "caption", "col", "colgroup", "datalist", "dd", "details", "dt", "head", "html", "keygen", "label", "legend", "main", "map", "math", "meta", "meter", "noscript", "optgroup", "param", "picture", "progress", "script", "source", "style", "template", "textarea", "title", "track"]
      }, {
        nodeName: "area",
        attributes: {
          href: Ke
        }
      }, {
        nodeName: "input",
        properties: {
          type: ["color", "data", "datatime", "file", "hidden", "month", "number", "password", "range", "reset", "submit", "time", "week"]
        }
      }, {
        nodeName: "link",
        attributes: {
          href: Ke
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
        condition: /* @__PURE__ */ o(function(t) {
          return t instanceof w.AbstractVirtualNode || (t = w.utils.getNodeFromTree(t)), Number(t.attr("size")) > 1;
        }, "condition"),
        properties: {
          multiple: !0
        }
      }, {
        nodeName: ["clippath", "cursor", "defs", "desc", "feblend", "fecolormatrix", "fecomponenttransfer", "fecomposite", "feconvolvematrix", "fediffuselighting", "fedisplacementmap", "fedistantlight", "fedropshadow", "feflood", "fefunca", "fefuncb", "fefuncg", "fefuncr", "fegaussianblur", "feimage", "femerge", "femergenode", "femorphology", "feoffset", "fepointlight", "fespecularlighting", "fespotlight", "fetile", "feturbulence", "filter", "hatch", "hatchpath", "lineargradient", "marker", "mask", "meshgradient", "meshpatch", "meshrow", "metadata", "mpath", "pattern", "radialgradient", "solidcolor", "stop", "switch", "view"]
      }], qt.elementsAllowedAnyRole = [{
        nodeName: "a",
        attributes: {
          href: T1
        }
      }, {
        nodeName: "img",
        attributes: {
          alt: T1
        }
      }, {
        nodeName: ["abbr", "address", "canvas", "div", "p", "pre", "blockquote", "ins", "del", "output", "span", "table", "tbody", "thead", "tfoot", "td", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "ruby", "rt", "rp", "bdi", "bdo", "br", "wbr", "th", "tr"]
      }], qt.evaluateRoleForElement = {
        A: /* @__PURE__ */ o(function(t) {
          var r = t.node, a = t.out;
          return r.namespaceURI === "http://www.w3.org/2000/svg" ? !0 : r.href.length ? a : !0;
        }, "A"),
        AREA: /* @__PURE__ */ o(function(t) {
          var r = t.node;
          return !r.href;
        }, "AREA"),
        BUTTON: /* @__PURE__ */ o(function(t) {
          var r = t.node, a = t.role, n = t.out;
          return r.getAttribute("type") === "menu" ? a === "menuitem" : n;
        }, "BUTTON"),
        IMG: /* @__PURE__ */ o(function(t) {
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
        INPUT: /* @__PURE__ */ o(function(t) {
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
        LI: /* @__PURE__ */ o(function(t) {
          var r = t.node, a = t.out, n = w.utils.matchesSelector(r, "ol li, ul li");
          return n ? a : !0;
        }, "LI"),
        MENU: /* @__PURE__ */ o(function(t) {
          var r = t.node;
          return r.getAttribute("type") !== "context";
        }, "MENU"),
        OPTION: /* @__PURE__ */ o(function(t) {
          var r = t.node, a = w.utils.matchesSelector(r, "select > option, datalist > option, optgroup > option");
          return !a;
        }, "OPTION"),
        SELECT: /* @__PURE__ */ o(function(t) {
          var r = t.node, a = t.role;
          return !r.multiple && r.size <= 1 && a === "menu";
        }, "SELECT"),
        SVG: /* @__PURE__ */ o(function(t) {
          var r = t.node, a = t.out;
          return r.parentNode && r.parentNode.namespaceURI === "http://www.w3.org/2000/svg" ? !0 : a;
        }, "SVG")
      }, qt.rolesOfType = {
        widget: ["button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "tree", "treeitem"]
      };
      var R1 = qt;
      function lD(e) {
        var t = null, r = R1.role[e];
        return r && r.implicit && (t = It(r.implicit)), t;
      }
      o(lD, "implicitNodes");
      var sD = lD;
      function cD(e) {
        return !!Qo(e).length;
      }
      o(cD, "isAccessibleRef");
      var Bn = cD;
      function tu(e) {
        var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.popupRoles, n = de(e);
        if ((t = a) !== null && t !== void 0 || (a = Cs["aria-haspopup"].values), !a.includes(n))
          return !1;
        var i = dD(e);
        if (k1(i))
          return !0;
        var u = e.props.id;
        if (!u)
          return !1;
        if (!e.actualNode)
          throw new Error("Unable to determine combobox popup without an actualNode");
        var l = ea(e.actualNode), s = l.querySelectorAll('[aria-owns~="'.concat(u, `"][role~="combobox"]:not(select),
     [aria-controls~="`).concat(u, '"][role~="combobox"]:not(select)'));
        return Array.from(s).some(k1);
      }
      o(tu, "_isComboboxPopup");
      var k1 = /* @__PURE__ */ o(function(t) {
        return t && de(t) === "combobox";
      }, "isCombobox");
      function dD(e) {
        for (; e = e.parent; )
          if (de(e, {
            noPresentational: !0
          }) !== null)
            return e;
        return null;
      }
      o(dD, "nearestParentWithRole");
      function fD(e) {
        return e = se(e), ln(e);
      }
      o(fD, "label2");
      var S1 = fD;
      function pD(e) {
        var t = ve.ariaRoles[e];
        return !t || !Array.isArray(t.requiredAttrs) ? [] : ae(t.requiredAttrs);
      }
      o(pD, "requiredAttr");
      var O1 = pD;
      function mD(e) {
        var t = ve.ariaRoles[e];
        return !t || !Array.isArray(t.requiredContext) ? null : ae(t.requiredContext);
      }
      o(mD, "requiredContext");
      var ru = mD;
      function hD(e) {
        var t = ve.ariaRoles[e];
        return !t || !Array.isArray(t.requiredOwned) ? null : ae(t.requiredOwned);
      }
      o(hD, "requiredOwned");
      var au = hD;
      function vD(e, t) {
        e = e instanceof He ? e : se(e);
        var r, a, n = e.attr(t), i = ve.ariaAttrs[t];
        if (!i || i.allowEmpty && (!n || n.trim() === ""))
          return !0;
        switch (i.type) {
          case "boolean":
            return ["true", "false"].includes(n.toLowerCase());
          case "nmtoken":
            return typeof n == "string" && i.values.includes(n.toLowerCase());
          case "nmtokens":
            return a = Xe(n), a.reduce(function(s, c) {
              return s && i.values.includes(c);
            }, a.length !== 0);
          case "idref":
            try {
              var u = Ye(e.actualNode);
              return !!(n && u.getElementById(n));
            } catch {
              throw new TypeError("Cannot resolve id references for partial DOM");
            }
          case "idrefs":
            return At(e, t).some(function(s) {
              return !!s;
            });
          case "string":
            return n.trim() !== "";
          case "decimal":
            return r = n.match(/^[-+]?([0-9]*)\.?([0-9]*)$/), !!(r && (r[1] || r[2]));
          case "int":
            var l = typeof i.minValue < "u" ? i.minValue : -1 / 0;
            return /^[-+]?[0-9]+$/.test(n) && parseInt(n) >= l;
        }
      }
      o(vD, "validateAttrValue");
      var M1 = vD;
      function gD(e) {
        var t = ve.ariaAttrs[e];
        return !!t;
      }
      o(gD, "validateAttr");
      var qn = gD;
      function bD(e, t, r) {
        var a = Xe(r.attr("role")).filter(function(n) {
          return Rt(n) === "abstract";
        });
        return a.length > 0 ? (this.data(a), !0) : !1;
      }
      o(bD, "abstractroleEvaluate");
      var yD = bD;
      function wD(e, t, r) {
        var a = [], n = de(r), i = E1(n);
        Array.isArray(t[n]) && (i = ya(t[n].concat(i)));
        var u = Fe(r.attrNames), l;
        try {
          for (u.s(); !(l = u.n()).done; ) {
            var s = l.value;
            qn(s) && !i.includes(s) && a.push(s);
          }
        } catch (c) {
          u.e(c);
        } finally {
          u.f();
        }
        if (!a.length)
          return !0;
        if (this.data(a.map(function(c) {
          return c + '="' + r.attr(c) + '"';
        })), !(!n && !Ho(r) && !Se(r)))
          return !1;
      }
      o(wD, "ariaAllowedAttrEvaluate");
      function DD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t.allowImplicit, n = a === void 0 ? !0 : a, i = t.ignoredTags, u = i === void 0 ? [] : i, l = r.props.nodeName;
        if (u.map(function(c) {
          return c.toLowerCase();
        }).includes(l))
          return !0;
        var s = F1(r, n);
        return s.length ? (this.data(s), Te(r) ? !1 : void 0) : !0;
      }
      o(DD, "ariaAllowedRoleEvaluate");
      var _D = DD;
      function xD(e, t, r) {
        return r.attr("aria-busy") === "true";
      }
      o(xD, "ariaBusyEvaluate");
      function N1(e, t, r) {
        var a = r.props, n = a.nodeName, i = a.type, u = CD(r.attr("aria-checked"));
        if (n !== "input" || i !== "checkbox" || !u)
          return !0;
        var l = ED(r);
        return u === l ? !0 : (this.data({
          messageKey: "checkbox",
          checkState: l
        }), !1);
      }
      o(N1, "ariaConditionalCheckboxAttr");
      function ED(e) {
        return e.props.indeterminate ? "mixed" : e.props.checked ? "true" : "false";
      }
      o(ED, "getCheckState");
      function CD(e) {
        return e ? (e = e.toLowerCase(), ["mixed", "true"].includes(e) ? e : "false") : "";
      }
      o(CD, "normalizeAriaChecked");
      function I1(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.invalidTableRowAttrs, i = arguments.length > 2 ? arguments[2] : void 0, u = (t = n == null || (r = n.filter) === null || r === void 0 ? void 0 : r.call(n, function(d) {
          return i.hasAttr(d);
        })) !== null && t !== void 0 ? t : [];
        if (u.length === 0)
          return !0;
        var l = AD(i), s = l && de(l);
        if (!s || s === "treegrid")
          return !0;
        var c = "row".concat(u.length > 1 ? "Plural" : "Singular");
        return this.data({
          messageKey: c,
          invalidAttrs: u,
          ownerRole: s
        }), !1;
      }
      o(I1, "ariaConditionalRowAttr");
      function AD(e) {
        if (!!e.parent) {
          var t = 'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]';
          return it(e, t);
        }
      }
      o(AD, "getRowOwner");
      var P1 = {
        row: I1,
        checkbox: N1
      };
      function FD(e, t, r) {
        var a = de(r);
        return P1[a] ? P1[a].call(this, e, t, r) : !0;
      }
      o(FD, "ariaConditionalAttrEvaluate");
      function TD(e, t, r) {
        t = Array.isArray(t) ? t : [];
        var a = r.attr("aria-errormessage"), n = r.hasAttr("aria-errormessage"), i = r.attr("aria-invalid"), u = r.hasAttr("aria-invalid");
        if (!u || i === "false")
          return !0;
        function l(s) {
          if (s.trim() === "")
            return ve.ariaAttrs["aria-errormessage"].allowEmpty;
          var c;
          try {
            c = s && At(r, "aria-errormessage")[0];
          } catch {
            this.data({
              messageKey: "idrefs",
              values: Xe(s)
            });
            return;
          }
          if (c)
            return Te(c) ? c.getAttribute("role") === "alert" || c.getAttribute("aria-live") === "assertive" || c.getAttribute("aria-live") === "polite" || Xe(r.attr("aria-describedby")).indexOf(s) > -1 : (this.data({
              messageKey: "hidden",
              values: Xe(s)
            }), !1);
        }
        return o(l, "validateAttrValue2"), t.indexOf(a) === -1 && n ? (this.data(Xe(a)), l.call(this, a)) : !0;
      }
      o(TD, "ariaErrormessageEvaluate");
      function RD(e, t, r) {
        return r.attr("aria-hidden") !== "true";
      }
      o(RD, "ariaHiddenBodyEvaluate");
      var kD = RD;
      function SD(e, t, r) {
        var a = r.attr("aria-level"), n = parseInt(a, 10);
        if (!(n > 6))
          return !0;
      }
      o(SD, "ariaLevelEvaluate");
      var OD = SD;
      function MD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t?.elementsAllowedAriaLabel || [], n = r.props.nodeName, i = de(r, {
          chromium: !0
        }), u = ND(i, n, a), l = u.filter(function(d) {
          return r.attrNames.includes(d) ? ne(r.attr(d)) !== "" : !1;
        });
        if (l.length === 0)
          return !1;
        var s = r.hasAttr("role") ? "hasRole" : "noRole";
        s += l.length > 1 ? "Plural" : "Singular", this.data({
          role: i,
          nodeName: n,
          messageKey: s,
          prohibited: l
        });
        var c = Ht(r, {
          subtreeDescendant: !0
        });
        if (ne(c) === "")
          return !0;
      }
      o(MD, "ariaProhibitedAttrEvaluate");
      function ND(e, t, r) {
        var a = ve.ariaRoles[e];
        return a ? a.prohibitedAttrs || [] : !!e || r.includes(t) ? [] : ["aria-label", "aria-labelledby"];
      }
      o(ND, "listProhibitedAttrs");
      var L1 = {};
      gt(L1, {
        getAriaRolesByType: /* @__PURE__ */ o(function() {
          return Ir;
        }, "getAriaRolesByType"),
        getAriaRolesSupportingNameFromContent: /* @__PURE__ */ o(function() {
          return eu;
        }, "getAriaRolesSupportingNameFromContent"),
        getElementSpec: /* @__PURE__ */ o(function() {
          return hr;
        }, "getElementSpec"),
        getElementsByContentType: /* @__PURE__ */ o(function() {
          return Ui;
        }, "getElementsByContentType"),
        getGlobalAriaAttrs: /* @__PURE__ */ o(function() {
          return pr;
        }, "getGlobalAriaAttrs"),
        implicitHtmlRoles: /* @__PURE__ */ o(function() {
          return Wi;
        }, "implicitHtmlRoles")
      });
      function ID(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = Ee(r), n = r.attrNames, i = O1(a);
        if (Array.isArray(t[a]) && (i = ya(t[a], i)), !a || !n.length || !i.length || PD(r, a) || BD(r, a))
          return !0;
        var u = hr(r), l = i.filter(function(s) {
          return !r.attr(s) && !LD(u, s);
        });
        return l.length ? (this.data(l), !1) : !0;
      }
      o(ID, "ariaRequiredAttrEvaluate");
      function PD(e, t) {
        return t === "separator" && !Se(e);
      }
      o(PD, "isStaticSeparator");
      function LD(e, t) {
        var r;
        return ((r = e.implicitAttrs) === null || r === void 0 ? void 0 : r[t]) !== void 0;
      }
      o(LD, "hasImplicitAttr");
      function BD(e, t) {
        return t === "combobox" && e.attr("aria-expanded") === "false";
      }
      o(BD, "isClosedCombobox");
      function qD(e, t, r) {
        var a = t && Array.isArray(t.reviewEmpty) ? t.reviewEmpty : [], n = Ee(r, {
          dpub: !0
        }), i = au(n);
        if (i === null)
          return !0;
        var u = jD(r, i), l = u.filter(function(s) {
          var c = s.role, d = s.vNode;
          return d.props.nodeType === 1 && !i.includes(c);
        });
        if (l.length)
          return this.relatedNodes(l.map(function(s) {
            var c = s.vNode;
            return c;
          })), this.data({
            messageKey: "unallowed",
            values: l.map(function(s) {
              var c = s.vNode, d = s.attr;
              return HD(c, d);
            }).filter(function(s, c, d) {
              return d.indexOf(s) === c;
            }).join(", ")
          }), !1;
        if (zD(i, u))
          return !0;
        if (this.data(i), !(a.includes(n) && !u.some($D)))
          return !1;
      }
      o(qD, "ariaRequiredChildrenEvaluate");
      function jD(e, t) {
        for (var r, a = [], n = oa(e), i = /* @__PURE__ */ o(function() {
          if (r.props.nodeType === 3 && a.push({
            vNode: r,
            role: null
          }), r.props.nodeType !== 1 || !Te(r))
            return "continue";
          var s = de(r, {
            noPresentational: !0
          }), c = VD(r), d = !!c || Se(r);
          if (!s && !d || ["group", "rowgroup"].includes(s) && t.some(function(p) {
            return p === s;
          }))
            n.push.apply(n, ae(r.children));
          else if (s || d) {
            var f = c || "tabindex";
            a.push({
              role: s,
              attr: f,
              vNode: r
            });
          }
        }, "_loop7"); r = n.shift(); )
          var u = i();
        return a;
      }
      o(jD, "getOwnedRoles");
      function zD(e, t) {
        return t.some(function(r) {
          var a = r.role;
          return a && e.includes(a);
        });
      }
      o(zD, "hasRequiredChildren");
      function VD(e) {
        return pr().find(function(t) {
          return e.hasAttr(t);
        });
      }
      o(VD, "getGlobalAriaAttr");
      function HD(e, t) {
        var r = e.props, a = r.nodeName, n = r.nodeType;
        if (n === 3)
          return "#text";
        var i = Ee(e, {
          dpub: !0
        });
        return i ? "[role=".concat(i, "]") : t ? a + "[".concat(t, "]") : a;
      }
      o(HD, "getUnallowedSelector");
      function $D(e) {
        var t = e.vNode;
        return t.props.nodeType === 3 ? t.props.nodeValue.trim().length > 0 : la(t, !1, !0);
      }
      o($D, "isContent");
      function B1(e, t, r, a) {
        var n = Ee(e);
        if (r || (r = ru(n)), !r)
          return null;
        for (var i = r.includes("group"), u = a ? e : e.parent; u; ) {
          var l = de(u, {
            noPresentational: !0
          });
          if (!l)
            u = u.parent;
          else if (l === "group" && i)
            t.includes(n) && r.push(n), r = r.filter(function(s) {
              return s !== "group";
            }), u = u.parent;
          else
            return r.includes(l) ? null : r;
        }
        return r;
      }
      o(B1, "getMissingContext");
      function UD(e) {
        for (var t = [], r = null; e; ) {
          if (e.getAttribute("id")) {
            var a = ke(e.getAttribute("id")), n = Ye(e);
            r = n.querySelector("[aria-owns~=".concat(a, "]")), r && t.push(r);
          }
          e = e.parentElement;
        }
        return t.length ? t : null;
      }
      o(UD, "getAriaOwners");
      function GD(e, t, r) {
        var a = t && Array.isArray(t.ownGroupRoles) ? t.ownGroupRoles : [], n = B1(r, a);
        if (!n)
          return !0;
        var i = UD(e);
        if (i) {
          for (var u = 0, l = i.length; u < l; u++)
            if (n = B1(se(i[u]), a, n, !0), !n)
              return !0;
        }
        return this.data(n), !1;
      }
      o(GD, "ariaRequiredParentEvaluate");
      var WD = GD;
      function YD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = de(r), n = t.supportedRoles || [];
        if (n.includes(a))
          return !0;
        if (!(a && a !== "presentation" && a !== "none"))
          return !1;
      }
      o(YD, "ariaRoledescriptionEvaluate");
      var XD = YD;
      function KD(e, t, r) {
        var a = r.attrNames.filter(function(n) {
          var i = ve.ariaAttrs[n];
          if (!qn(n))
            return !1;
          var u = i.unsupported;
          return S(u) !== "object" ? !!u : !ia(e, u.exceptions);
        });
        return a.length ? (this.data(a), !0) : !1;
      }
      o(KD, "ariaUnsupportedAttrEvaluate");
      var ZD = KD;
      function JD(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = [], n = /^aria-/;
        return r.attrNames.forEach(function(i) {
          t.indexOf(i) === -1 && n.test(i) && !qn(i) && a.push(i);
        }), a.length ? (this.data(a), !1) : !0;
      }
      o(JD, "ariaValidAttrEvaluate");
      var QD = JD;
      function e_(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = "", n = "", i = [], u = /^aria-/, l = ["aria-errormessage"], s = {
          "aria-controls": /* @__PURE__ */ o(function() {
            return r.attr("aria-expanded") !== "false" && r.attr("aria-selected") !== "false";
          }, "ariaControls"),
          "aria-current": /* @__PURE__ */ o(function(d) {
            d || (a = 'aria-current="'.concat(r.attr("aria-current"), '"'), n = "ariaCurrent");
          }, "ariaCurrent"),
          "aria-owns": /* @__PURE__ */ o(function() {
            return r.attr("aria-expanded") !== "false";
          }, "ariaOwns"),
          "aria-describedby": /* @__PURE__ */ o(function(d) {
            d || (a = 'aria-describedby="'.concat(r.attr("aria-describedby"), '"'), n = w._tree && w._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
          }, "ariaDescribedby"),
          "aria-labelledby": /* @__PURE__ */ o(function(d) {
            d || (a = 'aria-labelledby="'.concat(r.attr("aria-labelledby"), '"'), n = w._tree && w._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
          }, "ariaLabelledby")
        };
        if (r.attrNames.forEach(function(c) {
          if (!(l.includes(c) || t.includes(c) || !u.test(c))) {
            var d, f = r.attr(c);
            try {
              d = M1(r, c);
            } catch {
              a = "".concat(c, '="').concat(f, '"'), n = "idrefs";
              return;
            }
            (s[c] ? s[c](d) : !0) && !d && (f === "" && !t_(c) ? (a = c, n = "empty") : i.push("".concat(c, '="').concat(f, '"')));
          }
        }), i.length)
          return this.data(i), !1;
        if (a) {
          this.data({
            messageKey: n,
            needsReview: a
          });
          return;
        }
        return !0;
      }
      o(e_, "ariaValidAttrValueEvaluate");
      function t_(e) {
        var t;
        return ((t = ve.ariaAttrs[e]) === null || t === void 0 ? void 0 : t.type) === "string";
      }
      o(t_, "isStringType");
      function r_(e, t, r) {
        var a, n = (a = r.attr("aria-braillelabel")) !== null && a !== void 0 ? a : "";
        if (!n.trim())
          return !0;
        try {
          return ne(Ue(r)) !== "";
        } catch {
          return;
        }
      }
      o(r_, "brailleLabelEquivalentEvaluate");
      function a_(e, t, r) {
        var a, n = (a = r.attr("aria-brailleroledescription")) !== null && a !== void 0 ? a : "";
        if (ne(n) === "")
          return !0;
        var i = r.attr("aria-roledescription");
        return typeof i != "string" ? (this.data({
          messageKey: "noRoleDescription"
        }), !1) : ne(i) === "" ? (this.data({
          messageKey: "emptyRoleDescription"
        }), !1) : !0;
      }
      o(a_, "brailleRoleDescriptionEquivalentEvaluate");
      function n_(e, t, r) {
        var a = de(r, {
          dpub: !0,
          fallback: !0
        }), n = ve.ariaRoles[a];
        return n != null && n.deprecated ? (this.data(a), !0) : !1;
      }
      o(n_, "deprecatedroleEvaluate");
      function i_(e, t) {
        var r = Ft(e);
        return !r && t.length === 2 && t.includes("none") && t.includes("presentation");
      }
      o(i_, "nonePresentationOnElementWithNoImplicitRole");
      function o_(e, t, r) {
        var a = Xe(r.attr("role"));
        return a.length <= 1 ? !1 : i_(r, a) ? void 0 : !0;
      }
      o(o_, "fallbackroleEvaluate");
      var u_ = o_;
      function l_(e, t, r) {
        var a = pr().filter(function(n) {
          return r.hasAttr(n);
        });
        return this.data(a), a.length > 0;
      }
      o(l_, "hasGlobalAriaAttributeEvaluate");
      var s_ = l_;
      function c_(e) {
        var t = e.getAttribute("role");
        if (t === null)
          return !1;
        var r = Rt(t);
        return r === "widget" || r === "composite";
      }
      o(c_, "hasWidgetRoleEvaluate");
      var d_ = c_;
      function f_(e, t, r) {
        var a = Xe(r.attr("role")), n = a.every(function(i) {
          return !kr(i, {
            allowAbstract: !0
          });
        });
        return n ? (this.data(a), !0) : !1;
      }
      o(f_, "invalidroleEvaluate");
      var p_ = f_;
      function m_(e, t, r) {
        return Se(r);
      }
      o(m_, "isElementFocusableEvaluate");
      var h_ = m_;
      function v_(e, t, r) {
        var a = de(r, {
          noImplicit: !0
        });
        this.data(a);
        var n, i;
        try {
          n = ne(Zi(r)).toLowerCase(), i = ne(Ue(r)).toLowerCase();
        } catch {
          return;
        }
        if (!i && !n)
          return !1;
        if (!(!i && n) && !!i.includes(n))
          return !1;
      }
      o(v_, "noImplicitExplicitLabelEvaluate");
      var g_ = v_;
      function b_(e, t, r) {
        var a = de(r, {
          dpub: !0,
          fallback: !0
        }), n = $i(a);
        return n && this.data(a), n;
      }
      o(b_, "unsupportedroleEvaluate");
      var y_ = b_, w_ = {
        ARTICLE: !0,
        ASIDE: !0,
        NAV: !0,
        SECTION: !0
      }, D_ = {
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
      function __(e) {
        var t = e.nodeName.toUpperCase();
        return w_[t] || !1;
      }
      o(__, "validScrollableTagName");
      function x_(e, t) {
        var r = Ee(e);
        return r && (D_[r] || t.roles.includes(r)) || !1;
      }
      o(x_, "validScrollableRole");
      function E_(e, t) {
        return x_(e, t) || __(e);
      }
      o(E_, "validScrollableSemanticsEvaluate");
      var C_ = E_, q1 = {};
      gt(q1, {
        Color: /* @__PURE__ */ o(function() {
          return Oe;
        }, "Color"),
        centerPointOfRect: /* @__PURE__ */ o(function() {
          return F_;
        }, "centerPointOfRect"),
        elementHasImage: /* @__PURE__ */ o(function() {
          return dn;
        }, "elementHasImage"),
        elementIsDistinct: /* @__PURE__ */ o(function() {
          return z1;
        }, "elementIsDistinct"),
        filteredRectStack: /* @__PURE__ */ o(function() {
          return S_;
        }, "filteredRectStack"),
        flattenColors: /* @__PURE__ */ o(function() {
          return Ot;
        }, "flattenColors"),
        flattenShadowColors: /* @__PURE__ */ o(function() {
          return iu;
        }, "flattenShadowColors"),
        getBackgroundColor: /* @__PURE__ */ o(function() {
          return _a;
        }, "getBackgroundColor"),
        getBackgroundStack: /* @__PURE__ */ o(function() {
          return ou;
        }, "getBackgroundStack"),
        getContrast: /* @__PURE__ */ o(function() {
          return Pr;
        }, "getContrast"),
        getForegroundColor: /* @__PURE__ */ o(function() {
          return Vn;
        }, "getForegroundColor"),
        getOwnBackgroundColor: /* @__PURE__ */ o(function() {
          return gr;
        }, "getOwnBackgroundColor"),
        getRectStack: /* @__PURE__ */ o(function() {
          return V1;
        }, "getRectStack"),
        getStackingContext: /* @__PURE__ */ o(function() {
          return lu;
        }, "getStackingContext"),
        getStrokeColorsFromShadows: /* @__PURE__ */ o(function() {
          return uu;
        }, "getStrokeColorsFromShadows"),
        getTextShadowColors: /* @__PURE__ */ o(function() {
          return zn;
        }, "getTextShadowColors"),
        hasValidContrastRatio: /* @__PURE__ */ o(function() {
          return Q_;
        }, "hasValidContrastRatio"),
        incompleteData: /* @__PURE__ */ o(function() {
          return Ge;
        }, "incompleteData"),
        parseTextShadows: /* @__PURE__ */ o(function() {
          return $1;
        }, "parseTextShadows"),
        stackingContextToColor: /* @__PURE__ */ o(function() {
          return Da;
        }, "stackingContextToColor")
      });
      function A_(e) {
        if (!(e.left > D.innerWidth) && !(e.top > D.innerHeight)) {
          var t = Math.min(Math.ceil(e.left + e.width / 2), D.innerWidth - 1), r = Math.min(Math.ceil(e.top + e.height / 2), D.innerHeight - 1);
          return {
            x: t,
            y: r
          };
        }
      }
      o(A_, "centerPointOfRect");
      var F_ = A_;
      function j1(e) {
        return e.getPropertyValue("font-family").split(/[,;]/g).map(function(t) {
          return t.trim().toLowerCase();
        });
      }
      o(j1, "_getFonts");
      function T_(e, t) {
        var r = D.getComputedStyle(e);
        if (r.getPropertyValue("background-image") !== "none")
          return !0;
        var a = ["border-bottom", "border-top", "outline"].reduce(function(l, s) {
          var c = new Oe();
          return c.parseString(r.getPropertyValue(s + "-color")), l || r.getPropertyValue(s + "-style") !== "none" && parseFloat(r.getPropertyValue(s + "-width")) > 0 && c.alpha !== 0;
        }, !1);
        if (a)
          return !0;
        var n = D.getComputedStyle(t);
        if (j1(r)[0] !== j1(n)[0])
          return !0;
        var i = ["text-decoration-line", "text-decoration-style", "font-weight", "font-style", "font-size"].reduce(function(l, s) {
          return l || r.getPropertyValue(s) !== n.getPropertyValue(s);
        }, !1), u = r.getPropertyValue("text-decoration");
        return u.split(" ").length < 3 && (i = i || u !== n.getPropertyValue("text-decoration")), i;
      }
      o(T_, "elementIsDistinct");
      var z1 = T_;
      function R_(e) {
        var t = _s(e), r = no(e);
        return !r || r.length <= 1 ? [t] : r.some(function(a) {
          return a === void 0;
        }) ? null : (r.splice(0, 0, t), r);
      }
      o(R_, "getRectStack2");
      var V1 = R_;
      function k_(e) {
        var t = V1(e);
        if (t && t.length === 1)
          return t[0];
        if (t && t.length > 1) {
          var r = t.shift(), a;
          return t.forEach(function(n, i) {
            if (i !== 0) {
              var u = t[i - 1], l = t[i];
              a = u.every(function(s, c) {
                return s === l[c];
              }) || r.includes(e);
            }
          }), a ? t[0] : (Ge.set("bgColor", "elmPartiallyObscuring"), null);
        }
        return Ge.set("bgColor", "outsideViewport"), null;
      }
      o(k_, "filteredRectStack");
      var S_ = k_;
      function O_(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      o(O_, "clamp2");
      var M_ = {
        normal: /* @__PURE__ */ o(function(t, r) {
          return r;
        }, "normal"),
        multiply: /* @__PURE__ */ o(function(t, r) {
          return r * t;
        }, "multiply"),
        screen: /* @__PURE__ */ o(function(t, r) {
          return t + r - t * r;
        }, "screen"),
        overlay: /* @__PURE__ */ o(function(t, r) {
          return this["hard-light"](r, t);
        }, "overlay"),
        darken: /* @__PURE__ */ o(function(t, r) {
          return Math.min(t, r);
        }, "darken"),
        lighten: /* @__PURE__ */ o(function(t, r) {
          return Math.max(t, r);
        }, "lighten"),
        "color-dodge": /* @__PURE__ */ o(function(t, r) {
          return t === 0 ? 0 : r === 1 ? 1 : Math.min(1, t / (1 - r));
        }, "colorDodge"),
        "color-burn": /* @__PURE__ */ o(function(t, r) {
          return t === 1 ? 1 : r === 0 ? 0 : 1 - Math.min(1, (1 - t) / r);
        }, "colorBurn"),
        "hard-light": /* @__PURE__ */ o(function(t, r) {
          return r <= 0.5 ? this.multiply(t, 2 * r) : this.screen(t, 2 * r - 1);
        }, "hardLight"),
        "soft-light": /* @__PURE__ */ o(function(t, r) {
          if (r <= 0.5)
            return t - (1 - 2 * r) * t * (1 - t);
          var a = t <= 0.25 ? ((16 * t - 12) * t + 4) * t : Math.sqrt(t);
          return t + (2 * r - 1) * (a - t);
        }, "softLight"),
        difference: /* @__PURE__ */ o(function(t, r) {
          return Math.abs(t - r);
        }, "difference"),
        exclusion: /* @__PURE__ */ o(function(t, r) {
          return t + r - 2 * t * r;
        }, "exclusion")
      };
      function nu(e, t, r, a, n) {
        return t * (1 - a) * e + t * a * M_[n](r / 255, e / 255) * 255 + (1 - t) * a * r;
      }
      o(nu, "simpleAlphaCompositing");
      function N_(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "normal", a = nu(e.red, e.alpha, t.red, t.alpha, r), n = nu(e.green, e.alpha, t.green, t.alpha, r), i = nu(e.blue, e.alpha, t.blue, t.alpha, r), u = O_(e.alpha + t.alpha * (1 - e.alpha), 0, 1);
        if (u === 0)
          return new Oe(a, n, i, u);
        var l = Math.round(a / u), s = Math.round(n / u), c = Math.round(i / u);
        return new Oe(l, s, c, u);
      }
      o(N_, "flattenColors");
      var Ot = N_;
      function iu(e, t) {
        var r = e.alpha, a = (1 - r) * t.red + r * e.red, n = (1 - r) * t.green + r * e.green, i = (1 - r) * t.blue + r * e.blue, u = e.alpha + t.alpha * (1 - e.alpha);
        return new Oe(a, n, i, u);
      }
      o(iu, "_flattenShadowColors");
      function ou(e) {
        for (var t = no(e).map(function(n) {
          return n = Rd(n, e), n = I_(n), n;
        }), r = 0; r < t.length; r++) {
          var a = t[r];
          if (a[0] !== e)
            return Ge.set("bgColor", "bgOverlap"), null;
          if (r !== 0 && !P_(a, t[0]))
            return Ge.set("bgColor", "elmPartiallyObscuring"), null;
        }
        return t[0] || null;
      }
      o(ou, "_getBackgroundStack");
      function I_(e) {
        var t = e.indexOf(N.body), r = e, a = gr(D.getComputedStyle(N.documentElement));
        if (t > 1 && a.alpha === 0 && !dn(N.documentElement)) {
          t > 1 && (r.splice(t, 1), r.push(N.body));
          var n = r.indexOf(N.documentElement);
          n > 0 && (r.splice(n, 1), r.push(N.documentElement));
        }
        return r;
      }
      o(I_, "sortPageBackground");
      function P_(e, t) {
        if (e === t)
          return !0;
        if (e === null || t === null || e.length !== t.length)
          return !1;
        for (var r = 0; r < e.length; ++r)
          if (e[r] !== t[r])
            return !1;
        return !0;
      }
      o(P_, "shallowArraysEqual");
      var L_ = 0.54, jn = 0.5, B_ = 1.5, H1 = ["top", "right", "bottom", "left"];
      function uu(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ignoreEdgeCount, a = r === void 0 ? !1 : r, n = q_(e), i = Object.entries(n).map(function(u) {
          var l = H(u, 2), s = l[0], c = l[1], d = H1.filter(function(f) {
            return c[f].length !== 0;
          }).length;
          return {
            colorStr: s,
            sides: c,
            edgeCount: d
          };
        });
        return !a && i.some(function(u) {
          var l = u.edgeCount;
          return l > 1 && l < 4;
        }) ? null : i.map(j_).filter(function(u) {
          return u !== null;
        });
      }
      o(uu, "_getStrokeColorsFromShadows");
      function q_(e) {
        var t = {}, r = Fe(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n, i = a.value, u = i.colorStr, l = i.pixels;
            (n = t[u]) !== null && n !== void 0 || (t[u] = {
              top: [],
              right: [],
              bottom: [],
              left: []
            });
            var s = t[u], c = H(l, 2), d = c[0], f = c[1];
            d > jn ? s.right.push(d) : -d > jn && s.left.push(-d), f > jn ? s.bottom.push(f) : -f > jn && s.top.push(-f);
          }
        } catch (p) {
          r.e(p);
        } finally {
          r.f();
        }
        return t;
      }
      o(q_, "getShadowColorsMap");
      function j_(e) {
        var t = e.colorStr, r = e.sides, a = e.edgeCount;
        if (a !== 4)
          return null;
        var n = new Oe();
        n.parseString(t);
        var i = 0, u = !0;
        return H1.forEach(function(l) {
          i += r[l].length / 4, u && (u = r[l].every(function(s) {
            return s > B_;
          }));
        }), u || (n.alpha = 1 - Math.pow(L_, i)), n;
      }
      o(j_, "shadowGroupToColor");
      function $1(e) {
        var t = {
          pixels: []
        }, r = e.trim(), a = [t];
        if (!r)
          return [];
        for (; r; ) {
          var n = r.match(/^[a-z]+(\([^)]+\))?/i) || r.match(/^#[0-9a-f]+/i), i = r.match(/^([0-9.-]+)px/i) || r.match(/^(0)/);
          if (n)
            he(!t.colorStr, "Multiple colors identified in text-shadow: ".concat(e)), r = r.replace(n[0], "").trim(), t.colorStr = n[0];
          else if (i) {
            he(t.pixels.length < 3, "Too many pixel units in text-shadow: ".concat(e)), r = r.replace(i[0], "").trim();
            var u = parseFloat((i[1][0] === "." ? "0" : "") + i[1]);
            t.pixels.push(u);
          } else if (r[0] === ",")
            he(t.pixels.length >= 2, "Missing pixel value in text-shadow: ".concat(e)), t = {
              pixels: []
            }, a.push(t), r = r.substr(1).trim();
          else
            throw new Error("Unable to process text-shadows: ".concat(r));
        }
        return a.forEach(function(l) {
          var s = l.pixels;
          s.length === 2 && s.push(0);
        }), a;
      }
      o($1, "_parseTextShadows");
      function zn(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.minRatio, a = t.maxRatio, n = t.ignoreEdgeCount, i = [], u = D.getComputedStyle(e), l = u.getPropertyValue("text-shadow");
        if (l === "none")
          return i;
        var s = u.getPropertyValue("font-size"), c = parseInt(s);
        he(isNaN(c) === !1, "Unable to determine font-size value ".concat(s));
        var d = [], f = $1(l), p = Fe(f), m;
        try {
          for (p.s(); !(m = p.n()).done; ) {
            var h = m.value, v = h.colorStr || u.getPropertyValue("color"), b = H(h.pixels, 3), g = b[0], y = b[1], _ = b[2], x = _ === void 0 ? 0 : _;
            if (!(a && x >= c * a)) {
              if (r && x < c * r) {
                d.push({
                  colorStr: v,
                  pixels: h.pixels
                });
                continue;
              }
              if (d.length > 0) {
                var T = uu(d, {
                  ignoreEdgeCount: n
                });
                if (T === null)
                  return null;
                i.push.apply(i, ae(T)), d.splice(0, d.length);
              }
              var k = z_({
                colorStr: v,
                offsetX: g,
                offsetY: y,
                blurRadius: x,
                fontSize: c
              });
              i.push(k);
            }
          }
        } catch (B) {
          p.e(B);
        } finally {
          p.f();
        }
        if (d.length > 0) {
          var O = uu(d, {
            ignoreEdgeCount: n
          });
          if (O === null)
            return null;
          i.push.apply(i, ae(O));
        }
        return i;
      }
      o(zn, "_getTextShadowColors");
      function z_(e) {
        var t = e.colorStr, r = e.offsetX, a = e.offsetY, n = e.blurRadius, i = e.fontSize;
        if (r > n || a > n)
          return new Oe(0, 0, 0, 0);
        var u = new Oe();
        return u.parseString(t), u.alpha *= V_(n, i), u;
      }
      o(z_, "textShadowColor");
      function V_(e, t) {
        if (e === 0)
          return 1;
        var r = e / t;
        return 0.185 / (r + 0.4);
      }
      o(V_, "blurRadiusToAlpha");
      function lu(e, t) {
        var r, a = se(e);
        if (a._stackingContext)
          return a._stackingContext;
        var n = [], i = /* @__PURE__ */ new Map();
        return t = (r = t) !== null && r !== void 0 ? r : ou(e), t.forEach(function(u) {
          var l, s = se(u), c = U_(s), d = s._stackingOrder.filter(function(m) {
            var h = m.vNode;
            return !!h;
          });
          d.forEach(function(m, h) {
            var v, b = m.vNode, g = (v = d[h - 1]) === null || v === void 0 ? void 0 : v.vNode, y = G1(i, b, g);
            h === 0 && !i.get(b) && n.unshift(y), i.set(b, y);
          });
          var f = (l = d[d.length - 1]) === null || l === void 0 ? void 0 : l.vNode, p = G1(i, s, f);
          d.length || n.unshift(p), p.bgColor = c;
        }), a._stackingContext = n, n;
      }
      o(lu, "_getStackingContext");
      function Da(e) {
        var t;
        if (!((t = e.descendants) !== null && t !== void 0 && t.length)) {
          var r = e.bgColor;
          return r.alpha *= e.opacity, {
            color: r,
            blendMode: e.blendMode
          };
        }
        var a = e.descendants.reduce(H_, U1()), n = Ot(a, e.bgColor, e.descendants[0].blendMode);
        return n.alpha *= e.opacity, {
          color: n,
          blendMode: e.blendMode
        };
      }
      o(Da, "_stackingContextToColor");
      function H_(e, t) {
        var r;
        e instanceof Oe ? r = e : r = Da(e).color;
        var a = Da(t).color;
        return Ot(a, r, t.blendMode);
      }
      o(H_, "reduceToColor");
      function U1(e, t) {
        var r;
        return {
          vNode: e,
          ancestor: t,
          opacity: parseFloat((r = e?.getComputedStylePropertyValue("opacity")) !== null && r !== void 0 ? r : 1),
          bgColor: new Oe(0, 0, 0, 0),
          blendMode: $_(e?.getComputedStylePropertyValue("mix-blend-mode")),
          descendants: []
        };
      }
      o(U1, "createStackingContext2");
      function $_(e) {
        return e || void 0;
      }
      o($_, "normalizeBlendMode");
      function G1(e, t, r) {
        var a, n = e.get(r), i = (a = e.get(t)) !== null && a !== void 0 ? a : U1(t, n);
        return n && r !== t && !n.descendants.includes(i) && n.descendants.unshift(i), i;
      }
      o(G1, "addToStackingContext");
      function U_(e) {
        var t = new Oe();
        return t.parseString(e.getComputedStylePropertyValue("background-color")), t;
      }
      o(U_, "getOwnBackgroundColor2");
      function _a(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.1, a = se(e), n = a._cache.getBackgroundColor;
        if (n)
          return t.push.apply(t, ae(n.bgElms)), Ge.set("bgColor", n.incompleteData), n.bgColor;
        var i = G_(e, t, r);
        return a._cache.getBackgroundColor = {
          bgColor: i,
          bgElms: t,
          incompleteData: Ge.get("bgColor")
        }, i;
      }
      o(_a, "_getBackgroundColor2");
      function G_(e, t, r) {
        var a, n, i = ou(e);
        if (!i)
          return null;
        var u = ao(e), l = (a = zn(e, {
          minRatio: r,
          ignoreEdgeCount: !0
        })) !== null && a !== void 0 ? a : [];
        l.length && (l = [{
          color: l.reduce(iu)
        }]);
        for (var s = 0; s < i.length; s++) {
          var c = i[s], d = D.getComputedStyle(c);
          if (dn(c, d))
            return t.push(c), null;
          var f = gr(d);
          if (f.alpha !== 0) {
            if (d.getPropertyValue("display") !== "inline" && !W1(c, u))
              return t.push(c), Ge.set("bgColor", "elmPartiallyObscured"), null;
            if (t.push(c), f.alpha === 1)
              break;
          }
        }
        var p = lu(e, i);
        l = p.map(Da).concat(l);
        var m = W_(e, i.includes(N.body));
        if ((n = l).unshift.apply(n, ae(m)), l.length === 0)
          return new Oe(255, 255, 255, 1);
        var h = l.reduce(function(v, b) {
          return Ot(b.color, v.color instanceof Oe ? v.color : v, b.blendMode);
        });
        return Ot(h.color instanceof Oe ? h.color : h, new Oe(255, 255, 255, 1));
      }
      o(G_, "_getBackgroundColor");
      function W1(e, t) {
        t = Array.isArray(t) ? t : [t];
        var r = e.getBoundingClientRect(), a = r.right, n = r.bottom, i = D.getComputedStyle(e), u = i.getPropertyValue("overflow");
        return (["scroll", "auto"].includes(u) || e instanceof D.HTMLHtmlElement) && (a = r.left + e.scrollWidth, n = r.top + e.scrollHeight), t.every(function(l) {
          return l.top >= r.top && l.bottom <= n && l.left >= r.left && l.right <= a;
        });
      }
      o(W1, "fullyEncompasses");
      function Y1(e) {
        return e || void 0;
      }
      o(Y1, "normalizeBlendMode2");
      function W_(e, t) {
        var r = [];
        if (!t) {
          var a = N.documentElement, n = N.body, i = D.getComputedStyle(a), u = D.getComputedStyle(n), l = gr(i), s = gr(u), c = s.alpha !== 0 && W1(n, e.getBoundingClientRect());
          (s.alpha !== 0 && l.alpha === 0 || c && s.alpha !== 1) && r.unshift({
            color: s,
            blendMode: Y1(u.getPropertyValue("mix-blend-mode"))
          }), l.alpha !== 0 && (!c || c && s.alpha !== 1) && r.unshift({
            color: l,
            blendMode: Y1(i.getPropertyValue("mix-blend-mode"))
          });
        }
        return r;
      }
      o(W_, "getPageBackgroundColors");
      function Y_(e, t) {
        if (!t || !e)
          return null;
        t.alpha < 1 && (t = Ot(t, e));
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
      }
      o(Y_, "getContrast");
      var Pr = Y_;
      function Vn(e, t, r) {
        for (var a, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = D.getComputedStyle(e), u = [function() {
          return K_(i, n);
        }, function() {
          return X_(i);
        }, function() {
          return zn(e, {
            minRatio: 0
          });
        }], l = [], s = 0, c = u; s < c.length; s++) {
          var d = c[s], f = d();
          if (!!f && (l = l.concat(f), f.alpha === 1))
            break;
        }
        var p = l.reduce(function(b, g) {
          return Ot(b, g);
        });
        if ((a = r) !== null && a !== void 0 || (r = _a(e, [])), r === null) {
          var m = Ge.get("bgColor");
          return Ge.set("fgColor", m), null;
        }
        var h = lu(e), v = X1(h, e);
        return Ot(Z_(p, v, h), new Oe(255, 255, 255, 1));
      }
      o(Vn, "_getForegroundColor");
      function X_(e) {
        return new Oe().parseString(e.getPropertyValue("-webkit-text-fill-color") || e.getPropertyValue("color"));
      }
      o(X_, "getTextColor");
      function K_(e, t) {
        var r = t.textStrokeEmMin, a = r === void 0 ? 0 : r, n = parseFloat(e.getPropertyValue("-webkit-text-stroke-width"));
        if (n === 0)
          return null;
        var i = e.getPropertyValue("font-size"), u = n / parseFloat(i);
        if (isNaN(u) || u < a)
          return null;
        var l = e.getPropertyValue("-webkit-text-stroke-color");
        return new Oe().parseString(l);
      }
      o(K_, "getStrokeColor");
      function Z_(e, t, r) {
        for (; t; ) {
          var a;
          if (t.opacity === 1 && t.ancestor) {
            t = t.ancestor;
            continue;
          }
          e.alpha *= t.opacity;
          var n = ((a = t.ancestor) === null || a === void 0 ? void 0 : a.descendants) || r;
          t.opacity !== 1 && (n = n.slice(0, n.indexOf(t)));
          var i = n.map(Da);
          if (!i.length) {
            t = t.ancestor;
            continue;
          }
          var u = i.reduce(function(l, s) {
            return Ot(s.color, l.color instanceof Oe ? l.color : l);
          }, {
            color: new Oe(0, 0, 0, 0),
            blendMode: "normal"
          });
          e = Ot(e, u), t = t.ancestor;
        }
        return e;
      }
      o(Z_, "calculateBlendedForegroundColor");
      function X1(e, t) {
        var r = Fe(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n, i = a.value;
            if (((n = i.vNode) === null || n === void 0 ? void 0 : n.actualNode) === t)
              return i;
            var u = X1(i.descendants, t);
            if (u)
              return u;
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      o(X1, "findNodeInContexts");
      function J_(e, t, r, a) {
        var n = Pr(e, t), i = a && Math.ceil(r * 72) / 96 < 14 || !a && Math.ceil(r * 72) / 96 < 18, u = i ? 4.5 : 3;
        return {
          isValid: n > u,
          contrastRatio: n,
          expectedContrastRatio: u
        };
      }
      o(J_, "hasValidContrastRatio");
      var Q_ = J_;
      function ex(e, t, r) {
        var a = t.ignoreUnicode, n = t.ignoreLength, i = t.ignorePseudo, u = t.boldValue, l = t.boldTextPt, s = t.largeTextPt, c = t.contrastRatio, d = t.shadowOutlineEmMax, f = t.pseudoSizeThreshold;
        if (!ot(e))
          return this.data({
            messageKey: "hidden"
          }), !0;
        var p = Tt(r, !1, !0);
        if (a && rx(p)) {
          this.data({
            messageKey: "nonBmp"
          });
          return;
        }
        var m = D.getComputedStyle(e), h = parseFloat(m.getPropertyValue("font-size")), v = m.getPropertyValue("font-weight"), b = parseFloat(v) >= u || v === "bold", g = Math.ceil(h * 72) / 96, y = b && g < l || !b && g < s, _ = y ? c.normal : c.large, x = _.expected, T = _.minThreshold, k = _.maxThreshold, O = tx(r, {
          ignorePseudo: i,
          pseudoSizeThreshold: f
        });
        if (O) {
          this.data({
            fontSize: "".concat((h * 72 / 96).toFixed(1), "pt (").concat(h, "px)"),
            fontWeight: b ? "bold" : "normal",
            messageKey: "pseudoContent",
            expectedContrastRatio: x + ":1"
          }), this.relatedNodes(O.actualNode);
          return;
        }
        var B = zn(e, {
          minRatio: 1e-3,
          maxRatio: d
        });
        if (B === null) {
          this.data({
            messageKey: "complexTextShadows"
          });
          return;
        }
        var W = [], j = _a(e, W, d), z = Vn(e, !1, j, t), $ = null, V = null, J = null;
        if (B.length === 0)
          $ = Pr(j, z);
        else if (z && j) {
          J = [].concat(ae(B), [j]).reduce(iu);
          var re = Pr(j, z), ee = Pr(j, J), Y = Pr(J, z);
          $ = Math.max(re, ee, Y), $ !== re && (V = ee > Y ? "shadowOnBgColor" : "fgOnShadowColor");
        }
        var q = $ > x;
        if (typeof T == "number" && (typeof $ != "number" || $ < T) || typeof k == "number" && (typeof $ != "number" || $ > k))
          return this.data({
            contrastRatio: $
          }), !0;
        var ie = Math.floor($ * 100) / 100, E;
        j === null ? E = Ge.get("bgColor") : q || (E = V);
        var G = ie === 1, P = p.length === 1;
        if (G ? E = Ge.set("bgColor", "equalRatio") : !q && P && !n && (E = "shortTextContent"), this.data({
          fgColor: z ? z.toHexString() : void 0,
          bgColor: j ? j.toHexString() : void 0,
          contrastRatio: ie,
          fontSize: "".concat((h * 72 / 96).toFixed(1), "pt (").concat(h, "px)"),
          fontWeight: b ? "bold" : "normal",
          messageKey: E,
          expectedContrastRatio: x + ":1",
          shadowColor: J ? J.toHexString() : void 0
        }), z === null || j === null || G || P && !n && !q) {
          E = null, Ge.clear(), this.relatedNodes(W);
          return;
        }
        return q || this.relatedNodes(W), q;
      }
      o(ex, "colorContrastEvaluate");
      function tx(e, t) {
        var r = t.pseudoSizeThreshold, a = r === void 0 ? 0.25 : r, n = t.ignorePseudo, i = n === void 0 ? !1 : n;
        if (!i) {
          var u = e.boundingClientRect, l = u.width * u.height * a;
          do {
            var s = K1(e.actualNode, ":before"), c = K1(e.actualNode, ":after");
            if (s + c > l)
              return e;
          } while (e = e.parent);
        }
      }
      o(tx, "findPseudoElement");
      var K1 = Be(/* @__PURE__ */ o(function(t, r) {
        var a = D.getComputedStyle(t, r), n = /* @__PURE__ */ o(function(s, c) {
          return a.getPropertyValue(s) === c;
        }, "matchPseudoStyle");
        if (n("content", "none") || n("display", "none") || n("visibility", "hidden") || n("position", "absolute") === !1 || gr(a).alpha === 0 && n("background-image", "none"))
          return 0;
        var i = Z1(a.getPropertyValue("width")), u = Z1(a.getPropertyValue("height"));
        return i.unit !== "px" || u.unit !== "px" ? i.value === 0 || u.value === 0 ? 0 : 1 / 0 : i.value * u.value;
      }, "getPseudoElementArea2"));
      function rx(e) {
        var t = {
          nonBmp: !0
        }, r = eo(e, t), a = ne(ua(e, t)) === "";
        return r && a;
      }
      o(rx, "textIsEmojis");
      function Z1(e) {
        var t = /^([0-9.]+)([a-z]+)$/i, r = e.match(t) || [], a = H(r, 3), n = a[1], i = n === void 0 ? "" : n, u = a[2], l = u === void 0 ? "" : u;
        return {
          value: parseFloat(i),
          unit: l.toLowerCase()
        };
      }
      o(Z1, "parseUnit");
      function J1(e, t) {
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
      }
      o(J1, "getContrast2");
      var ax = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function Q1(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return ax.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      o(Q1, "isBlock2");
      function nx(e, t) {
        var r = t.requiredContrastRatio, a = t.allowSameColor;
        if (Q1(e))
          return !1;
        for (var n = $e(e); n && n.nodeType === 1 && !Q1(n); )
          n = $e(n);
        if (!!n) {
          this.relatedNodes([n]);
          var i = Vn(e), u = Vn(n), l = _a(e), s = _a(n), c = i && u ? J1(i, u) : void 0;
          if (c && (c = Math.floor(c * 100) / 100), c && c >= r)
            return !0;
          var d = l && s ? J1(l, s) : void 0;
          if (d && (d = Math.floor(d * 100) / 100), d && d >= r)
            return !0;
          if (!d) {
            var f, p = (f = Ge.get("bgColor")) !== null && f !== void 0 ? f : "bgContrast";
            this.data({
              messageKey: p
            }), Ge.clear();
            return;
          }
          if (!!c)
            return a && c === 1 && d === 1 ? !0 : c === 1 && d > 1 ? (this.data({
              messageKey: "bgContrast",
              contrastRatio: d,
              requiredContrastRatio: r,
              nodeBackgroundColor: l ? l.toHexString() : void 0,
              parentBackgroundColor: s ? s.toHexString() : void 0
            }), !1) : (this.data({
              messageKey: "fgContrast",
              contrastRatio: c,
              requiredContrastRatio: r,
              nodeColor: i ? i.toHexString() : void 0,
              parentColor: u ? u.toHexString() : void 0
            }), !1);
        }
      }
      o(nx, "linkInTextBlockEvaluate");
      var ix = nx, ox = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function ux(e) {
        if (ef(e))
          return !1;
        for (var t = $e(e); t && t.nodeType === 1 && !ef(t); )
          t = $e(t);
        if (!!t) {
          if (this.relatedNodes([t]), z1(e, t))
            return !0;
          if (lx(e)) {
            this.data({
              messageKey: "pseudoContent"
            });
            return;
          }
          return !1;
        }
      }
      o(ux, "linkInTextBlockStyleEvaluate");
      function ef(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return ox.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      o(ef, "isBlock3");
      function lx(e) {
        for (var t = 0, r = ["before", "after"]; t < r.length; t++) {
          var a = r[t], n = D.getComputedStyle(e, ":".concat(a)), i = n.getPropertyValue("content");
          if (i !== "none")
            return !0;
        }
        return !1;
      }
      o(lx, "hasPseudoContent");
      function sx(e, t, r) {
        if (r.props.nodeName !== "input")
          return !0;
        var a = ["text", "search", "number", "tel"], n = ["text", "search", "url"], i = {
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
        S(t) === "object" && Object.keys(t).forEach(function(f) {
          i[f] || (i[f] = []), i[f] = i[f].concat(t[f]);
        });
        var u = r.attr("autocomplete"), l = u.split(/\s+/g).map(function(f) {
          return f.toLowerCase();
        }), s = l[l.length - 1];
        if (vr.stateTerms.includes(s))
          return !0;
        var c = i[s], d = r.hasAttr("type") ? ne(r.attr("type")).toLowerCase() : "text";
        return d = Pn().includes(d) ? d : "text", typeof c > "u" ? d === "text" : c.includes(d);
      }
      o(sx, "autocompleteAppropriateEvaluate");
      var cx = sx;
      function dx(e, t, r) {
        var a = r.attr("autocomplete") || "";
        return lc(a, t);
      }
      o(dx, "autocompleteValidEvaluate");
      var fx = dx;
      function px(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
        if (!t.attribute || typeof t.attribute != "string")
          throw new TypeError("attr-non-space-content requires options.attribute to be a string");
        if (!r.hasAttr(t.attribute))
          return this.data({
            messageKey: "noAttr"
          }), !1;
        var a = r.attr(t.attribute), n = !ne(a);
        return n ? (this.data({
          messageKey: "emptyAttr"
        }), !1) : !0;
      }
      o(px, "attrNonSpaceContentEvaluate");
      var mx = px;
      function hx(e) {
        var t = e.some(function(r) {
          return r.result === !0;
        });
        return t && e.forEach(function(r) {
          r.result = !0;
        }), e;
      }
      o(hx, "pageHasElmAfter");
      var vx = hx;
      function gx(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("has-descendant requires options.selector to be a string");
        if (t.passForModal && sa())
          return !0;
        var a = St(r, t.selector, function(n) {
          return Te(n);
        });
        return this.relatedNodes(a.map(function(n) {
          return n.actualNode;
        })), a.length > 0;
      }
      o(gx, "hasDescendant");
      var bx = gx;
      function yx(e, t, r) {
        try {
          return ne(Ht(r)) !== "";
        } catch {
          return;
        }
      }
      o(yx, "hasTextContentEvaluate");
      function wx(e, t, r) {
        return ia(r, t.matcher);
      }
      o(wx, "matchesDefinitionEvaluate");
      var Dx = wx;
      function _x(e) {
        return e.filter(function(t) {
          return t.data !== "ignored";
        });
      }
      o(_x, "pageNoDuplicateAfter");
      var xx = _x;
      function Ex(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("page-no-duplicate requires options.selector to be a string");
        var a = "page-no-duplicate;" + t.selector;
        if (le.get(a)) {
          this.data("ignored");
          return;
        }
        le.set(a, !0);
        var n = St(w._tree[0], t.selector, function(i) {
          return Te(i);
        });
        return typeof t.nativeScopeFilter == "string" && (n = n.filter(function(i) {
          return i.actualNode.hasAttribute("role") || !Fr(i, t.nativeScopeFilter);
        })), typeof t.role == "string" && (n = n.filter(function(i) {
          return de(i) === t.role;
        })), this.relatedNodes(n.filter(function(i) {
          return i !== r;
        }).map(function(i) {
          return i.actualNode;
        })), n.length <= 1;
      }
      o(Ex, "pageNoDuplicateEvaluate");
      var Cx = Ex;
      function Ax(e) {
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
      o(Ax, "accesskeysAfter");
      var Fx = Ax;
      function Tx(e, t, r) {
        return Vt(r) || (this.data(r.attr("accesskey")), this.relatedNodes([e])), !0;
      }
      o(Tx, "accesskeysEvaluate");
      var Rx = Tx;
      function kx(e, t, r) {
        var a = r.tabbableElements;
        if (!a)
          return !1;
        var n = a.filter(function(i) {
          return i !== r;
        });
        return n.length > 0;
      }
      o(kx, "focusableContentEvaluate");
      var Sx = kx;
      function Ox(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var i = n.filter(function(u) {
          return a.includes(u.props.nodeName);
        });
        return this.relatedNodes(i.map(function(u) {
          return u.actualNode;
        })), i.length === 0 || sa() ? !0 : i.every(function(u) {
          var l = u.getComputedStylePropertyValue("pointer-events"), s = parseInt(u.getComputedStylePropertyValue("width")), c = parseInt(u.getComputedStylePropertyValue("height"));
          return u.actualNode.onfocus || (s === 0 || c === 0) && l === "none";
        }) ? void 0 : !1;
      }
      o(Ox, "focusableDisabledEvaluate");
      var Mx = Ox;
      function Nx(e, t, r) {
        if (r.hasAttr("contenteditable") && a(r))
          return !0;
        return wt(r);
        function a(n) {
          var i = n.attr("contenteditable");
          if (i === "true" || i === "")
            return !0;
          if (i === "false")
            return !1;
          var u = it(r.parent, "[contenteditable]");
          return u ? a(u) : !1;
        }
      }
      o(Nx, "focusableElementEvaluate");
      var Ix = Nx;
      function Px(e, t, r) {
        var a = r.tabbableElements.map(function(n) {
          var i = n.actualNode;
          return i;
        });
        if (!a || !a.length)
          return !0;
        if (sa()) {
          this.relatedNodes(a);
          return;
        }
        return !0;
      }
      o(Px, "focusableModalOpenEvaluate");
      var Lx = Px;
      function Bx(e, t, r) {
        var a = r.attr("tabindex"), n = Se(r) && a > -1;
        if (!n)
          return !1;
        try {
          return !Ue(r);
        } catch {
          return;
        }
      }
      o(Bx, "focusableNoNameEvaluate");
      var qx = Bx;
      function jx(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var i = n.filter(function(u) {
          return !a.includes(u.props.nodeName);
        });
        return this.relatedNodes(i.map(function(u) {
          return u.actualNode;
        })), i.length === 0 || sa() ? !0 : i.every(function(u) {
          var l = u.getComputedStylePropertyValue("pointer-events"), s = parseInt(u.getComputedStylePropertyValue("width")), c = parseInt(u.getComputedStylePropertyValue("height"));
          return u.actualNode.onfocus || (s === 0 || c === 0) && l === "none";
        }) ? void 0 : !1;
      }
      o(jx, "focusableNotTabbableEvaluate");
      var zx = jx;
      function Vx(e, t, r) {
        if (!!r.children)
          try {
            return !r.children.some(function(a) {
              return tf(a);
            });
          } catch {
            return;
          }
      }
      o(Vx, "frameFocusableContentEvaluate");
      function tf(e) {
        if (wt(e))
          return !0;
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return !1;
        }
        return e.children.some(function(t) {
          return tf(t);
        });
      }
      o(tf, "focusableDescendants");
      function Hx(e) {
        var t = Ir("landmark"), r = $e(e), a = de(e);
        for (this.data({
          role: a
        }); r; ) {
          var n = r.getAttribute("role");
          if (!n && r.nodeName.toUpperCase() !== "FORM" && (n = Ft(r)), n && t.includes(n) && !(n === "main" && a === "complementary"))
            return !1;
          r = $e(r);
        }
        return !0;
      }
      o(Hx, "landmarkIsTopLevelEvaluate");
      var $x = Hx;
      function Ux(e, t, r) {
        if (!!r.children)
          try {
            var a = rf(r);
            if (!a.length)
              return !0;
            var n = a.filter(Gx);
            return n.length > 0 ? (this.data({
              messageKey: "notHidden"
            }), this.relatedNodes(n)) : this.relatedNodes(a), !1;
          } catch {
            return;
          }
      }
      o(Ux, "noFocusableContentEvaluate");
      function rf(e) {
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return [];
        }
        var t = [];
        return e.children.forEach(function(r) {
          Rt(r) === "widget" && Se(r) ? t.push(r) : t.push.apply(t, ae(rf(r)));
        }), t;
      }
      o(rf, "getFocusableDescendants");
      function Gx(e) {
        var t = parseInt(e.attr("tabindex"), 10);
        return !isNaN(t) && t < 0;
      }
      o(Gx, "usesUnreliableHidingStrategy");
      function Wx(e, t, r) {
        var a = parseInt(r.attr("tabindex"), 10);
        return isNaN(a) ? !0 : a <= 0;
      }
      o(Wx, "tabindexEvaluate");
      var Yx = Wx;
      function Xx(e, t, r) {
        var a = r.attr("alt"), n = /^\s+$/;
        return typeof a == "string" && n.test(a);
      }
      o(Xx, "altSpaceValueEvaluate");
      var Kx = Xx;
      function Zx(e, t, r) {
        if (["none", "presentation"].includes(de(r)))
          return !1;
        var a = it(r, t.parentSelector);
        if (!a)
          return !1;
        var n = Tt(a, !0).toLowerCase();
        return n === "" ? !1 : n === Ue(r).toLowerCase();
      }
      o(Zx, "duplicateImgLabelEvaluate");
      var Jx = Zx;
      function Qx(e, t, r) {
        var a = this;
        if (!r.attr("id"))
          return !1;
        if (!!r.actualNode) {
          var n = Ye(r.actualNode), i = ke(r.attr("id")), u = Array.from(n.querySelectorAll('label[for="'.concat(i, '"]')));
          if (this.relatedNodes(u), !u.length)
            return !1;
          try {
            return u.some(function(l) {
              if (ot(l)) {
                var s = ne(fr(l, {
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
      o(Qx, "explicitEvaluate");
      var e5 = Qx;
      function t5(e, t, r) {
        var a = sn(r), n = e.getAttribute("title");
        if (!a)
          return !1;
        if (!n && (n = "", e.getAttribute("aria-describedby"))) {
          var i = At(e, "aria-describedby");
          n = i.map(function(u) {
            return u ? fr(u) : "";
          }).join("");
        }
        return ne(n) === ne(a);
      }
      o(t5, "helpSameAsLabelEvaluate");
      var r5 = t5;
      function a5(e, t, r) {
        if (r.hasAttr("id")) {
          if (!r.actualNode)
            return;
          var a = Ye(e), n = ke(e.getAttribute("id")), i = a.querySelector('label[for="'.concat(n, '"]'));
          if (i && !Te(i)) {
            var u;
            try {
              u = Ue(r).trim();
            } catch {
              return;
            }
            var l = u === "";
            return l;
          }
        }
        return !1;
      }
      o(a5, "hiddenExplicitLabelEvaluate");
      var n5 = a5;
      function i5(e, t, r) {
        try {
          var a = it(r, "label");
          if (a) {
            var n = ne(Ue(a, {
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
      o(i5, "implicitEvaluate");
      var o5 = i5;
      function af(e, t) {
        var r = nf(t), a = nf(e);
        return !r || !a ? !1 : r.includes(a);
      }
      o(af, "isStringContained");
      function nf(e) {
        var t = ua(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return ne(t);
      }
      o(nf, "curateString");
      function u5(e, t, r) {
        var a, n = t?.pixelThreshold, i = (a = t?.occurrenceThreshold) !== null && a !== void 0 ? a : t?.occuranceThreshold, u = fr(e).toLowerCase();
        if (!(ro(u) < 1)) {
          var l = ne(Ht(r, {
            subtreeDescendant: !0,
            ignoreIconLigature: !0,
            pixelThreshold: n,
            occurrenceThreshold: i
          })).toLowerCase();
          return l ? ro(l) < 1 ? af(l, u) ? !0 : void 0 : af(l, u) : !0;
        }
      }
      o(u5, "labelContentNameMismatchEvaluate");
      var l5 = u5;
      function s5(e) {
        var t = ke(e.getAttribute("id")), r = e.parentNode, a = Ye(e);
        a = a.documentElement || a;
        var n = Array.from(a.querySelectorAll('label[for="'.concat(t, '"]')));
        for (n.length && (n = n.filter(function(l) {
          return !Vt(l);
        })); r; )
          r.nodeName.toUpperCase() === "LABEL" && n.indexOf(r) === -1 && n.push(r), r = r.parentNode;
        if (this.relatedNodes(n), n.length > 1) {
          var i = n.filter(function(l) {
            return Te(l);
          });
          if (i.length > 1)
            return;
          var u = At(e, "aria-labelledby");
          return u.includes(i[0]) ? !1 : void 0;
        }
        return !1;
      }
      o(s5, "multipleLabelEvaluate");
      var c5 = s5;
      function d5(e, t, r) {
        var a = sn(r), n = on(r), i = r.attr("aria-describedby");
        return !a && !!(n || i);
      }
      o(d5, "titleOnlyEvaluate");
      var f5 = d5;
      function p5(e) {
        var t = [];
        return e.filter(function(r) {
          var a = /* @__PURE__ */ o(function(u) {
            return r.data.role === u.data.role && r.data.accessibleText === u.data.accessibleText;
          }, "findMatch"), n = t.find(a);
          return n ? (n.result = !1, n.relatedNodes.push(r.relatedNodes[0]), !1) : (t.push(r), r.relatedNodes = [], !0);
        });
      }
      o(p5, "landmarkIsUniqueAfter");
      var m5 = p5;
      function h5(e, t, r) {
        var a = de(e), n = Ue(r);
        return n = n ? n.toLowerCase() : null, this.data({
          role: a,
          accessibleText: n
        }), this.relatedNodes([e]), !0;
      }
      o(h5, "landmarkIsUniqueEvaluate");
      var v5 = h5;
      function su(e) {
        return (e || "").trim() !== "";
      }
      o(su, "hasValue");
      function g5(e, t, r) {
        var a = typeof N < "u" ? La(N) : !1;
        if (t.attributes.includes("xml:lang") && t.attributes.includes("lang") && su(r.attr("xml:lang")) && !su(r.attr("lang")) && !a)
          return this.data({
            messageKey: "noXHTML"
          }), !1;
        var n = t.attributes.some(function(i) {
          return su(r.attr(i));
        });
        return n ? !0 : (this.data({
          messageKey: "noLang"
        }), !1);
      }
      o(g5, "hasLangEvaluate");
      var b5 = g5;
      function y5(e, t, r) {
        var a = [];
        return t.attributes.forEach(function(n) {
          var i = r.attr(n);
          if (typeof i == "string") {
            var u = yr(i), l = t.value ? !t.value.map(yr).includes(u) : !Ln(u);
            (u !== "" && l || i !== "" && !ne(i)) && a.push(n + '="' + r.attr(n) + '"');
          }
        }), !a.length || r.props.nodeName !== "html" && !oo(r) ? !1 : (this.data(a), !0);
      }
      o(y5, "validLangEvaluate");
      var w5 = y5;
      function D5(e, t, r) {
        var a = yr(r.attr("lang")), n = yr(r.attr("xml:lang"));
        return a === n;
      }
      o(D5, "xmlLangMismatchEvaluate");
      var _5 = D5;
      function x5(e) {
        var t = $e(e), r = t.nodeName.toUpperCase(), a = Ee(t);
        return r === "DIV" && ["presentation", "none", null].includes(a) && (t = $e(t), r = t.nodeName.toUpperCase(), a = Ee(t)), r !== "DL" ? !1 : !!(!a || ["presentation", "none", "list"].includes(a));
      }
      o(x5, "dlitemEvaluate");
      var E5 = x5;
      function C5(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = [], n = [];
        if (!!r.children) {
          for (var i = of(r.children); i.length; ) {
            var u, l = i.shift(), s = l.vChild, c = l.nested;
            if (t.divGroups && !c && F5(s)) {
              if (!s.children)
                return;
              var d = of(s.children, !0);
              i.push.apply(i, ae(d));
              continue;
            }
            var f = A5(s, c, t);
            !f || (n.includes(f) || n.push(f), (s == null || (u = s.actualNode) === null || u === void 0 ? void 0 : u.nodeType) === 1 && a.push(s.actualNode));
          }
          return n.length === 0 ? !1 : (this.data({
            values: n.join(", ")
          }), this.relatedNodes(a), !0);
        }
      }
      o(C5, "invalidChildrenEvaluate");
      function A5(e, t, r) {
        var a = r.validRoles, n = a === void 0 ? [] : a, i = r.validNodeNames, u = i === void 0 ? [] : i, l = e.props, s = l.nodeName, c = l.nodeType, d = l.nodeValue, f = t ? "div > " : "";
        if (c === 3 && d.trim() !== "")
          return f + "#text";
        if (c !== 1 || !Te(e))
          return !1;
        var p = Ee(e);
        return p ? n.includes(p) ? !1 : f + "[role=".concat(p, "]") : u.includes(s) ? !1 : f + s;
      }
      o(A5, "getInvalidSelector");
      function F5(e) {
        return e.props.nodeName === "div" && Ee(e) === null;
      }
      o(F5, "isDivGroup");
      function of(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return e.map(function(r) {
          return {
            vChild: r,
            nested: t
          };
        });
      }
      o(of, "mapWithNested");
      function T5(e, t, r) {
        var a = r.parent;
        if (!!a) {
          var n = a.props.nodeName, i = Ee(a);
          return ["presentation", "none", "list"].includes(i) ? !0 : i && kr(i) ? (this.data({
            messageKey: "roleNotValid"
          }), !1) : ["ul", "ol", "menu"].includes(n);
        }
      }
      o(T5, "listitemEvaluate");
      function R5(e, t, r) {
        var a = ["definition", "term", "list"], n = {
          badNodes: [],
          hasNonEmptyTextNode: !1
        }, i = r.children.reduce(function(l, s) {
          var c = s.actualNode;
          return c.nodeName.toUpperCase() === "DIV" && de(c) === null ? l.concat(s.children) : l.concat(s);
        }, []), u = i.reduce(function(l, s) {
          var c = s.actualNode, d = c.nodeName.toUpperCase();
          if (c.nodeType === 1 && Te(c)) {
            var f = Ee(c);
            (d !== "DT" && d !== "DD" || f) && (a.includes(f) || l.badNodes.push(c));
          } else
            c.nodeType === 3 && c.nodeValue.trim() !== "" && (l.hasNonEmptyTextNode = !0);
          return l;
        }, n);
        return u.badNodes.length && this.relatedNodes(u.badNodes), !!u.badNodes.length || u.hasNonEmptyTextNode;
      }
      o(R5, "onlyDlitemsEvaluate");
      function k5(e, t, r) {
        var a = !1, n = !1, i = !0, u = [], l = [], s = [];
        return r.children.forEach(function(c) {
          var d = c.actualNode;
          if (d.nodeType === 3 && d.nodeValue.trim() !== "") {
            a = !0;
            return;
          }
          if (!(d.nodeType !== 1 || !Te(d))) {
            i = !1;
            var f = d.nodeName.toUpperCase() === "LI", p = de(c), m = p === "listitem";
            !f && !m && u.push(d), f && !m && (l.push(d), s.includes(p) || s.push(p)), m && (n = !0);
          }
        }), a || u.length ? (this.relatedNodes(u), !0) : i || n ? !1 : (this.relatedNodes(l), this.data({
          messageKey: "roleNotValid",
          roles: s.join(", ")
        }), !0);
      }
      o(k5, "onlyListitemsEvaluate");
      var S5 = k5;
      function O5(e, t, r) {
        var a = r.children;
        if (!a || !a.length)
          return !1;
        for (var n = !1, i = !1, u, l = 0; l < a.length; l++) {
          if (u = a[l].props.nodeName.toUpperCase(), u === "DT" && (n = !0), n && u === "DD")
            return !1;
          u === "DD" && (i = !0);
        }
        return n || i;
      }
      o(O5, "structuredDlitemsEvaluate");
      var M5 = O5;
      function N5(e, t, r) {
        var a = dt(r, "track"), n = a.some(function(i) {
          return (i.attr("kind") || "").toLowerCase() === "captions";
        });
        return n ? !1 : void 0;
      }
      o(N5, "captionEvaluate");
      var I5 = N5, uf = " > ";
      function P5(e) {
        var t = {};
        return e.filter(function(r) {
          var a = r.node.ancestry[r.node.ancestry.length - 1] !== "html";
          if (a) {
            var n = r.node.ancestry.flat(1 / 0).join(uf);
            return t[n] = r, !0;
          }
          var i = r.node.ancestry.slice(0, r.node.ancestry.length - 1).flat(1 / 0).join(uf);
          return t[i] && (t[i].result = !0), !1;
        });
      }
      o(P5, "frameTestedAfter");
      var L5 = P5;
      function B5(e, t) {
        return t.isViolation ? !1 : void 0;
      }
      o(B5, "frameTestedEvaluate");
      var q5 = B5;
      function j5(e, t) {
        if (!e.duration) {
          console.warn("axe.utils.preloadMedia did not load metadata");
          return;
        }
        var r = t.allowedDuration, a = r === void 0 ? 3 : r, n = i(e);
        if (n <= a && !e.hasAttribute("loop"))
          return !0;
        if (!e.hasAttribute("controls"))
          return !1;
        return !0;
        function i(s) {
          if (!s.currentSrc)
            return 0;
          var c = u(s.currentSrc);
          return c ? c.length === 1 ? Math.abs(s.duration - c[0]) : Math.abs(c[1] - c[0]) : Math.abs(s.duration - (s.currentTime || 0));
        }
        function u(s) {
          var c = s.match(/#t=(.*)/);
          if (!!c) {
            var d = H(c, 2), f = d[1], p = f.split(",");
            return p.map(function(m) {
              return /:/.test(m) ? l(m) : parseFloat(m);
            });
          }
        }
        function l(s) {
          for (var c = s.split(":"), d = 0, f = 1; c.length > 0; )
            d += f * parseInt(c.pop(), 10), f *= 60;
          return parseFloat(d);
        }
      }
      o(j5, "noAutoplayAudioEvaluate");
      var z5 = j5;
      function V5(e, t, r, a) {
        var n = a || {}, i = n.cssom, u = i === void 0 ? void 0 : i, l = t || {}, s = l.degreeThreshold, c = s === void 0 ? 0 : s;
        if (!u || !u.length)
          return;
        for (var d = !1, f = [], p = g(u), m = /* @__PURE__ */ o(function() {
          var $ = v[h], V = p[$], J = V.root, re = V.rules, ee = re.filter(y);
          if (!ee.length)
            return "continue";
          ee.forEach(function(Y) {
            var q = Y.cssRules;
            Array.from(q).forEach(function(ie) {
              var E = _(ie);
              if (E && ie.selectorText.toUpperCase() !== "HTML") {
                var G = Array.from(J.querySelectorAll(ie.selectorText)) || [];
                f = f.concat(G);
              }
              d = d || E;
            });
          });
        }, "_loop8"), h = 0, v = Object.keys(p); h < v.length; h++)
          var b = m();
        if (!d)
          return !0;
        return f.length && this.relatedNodes(f), !1;
        function g(z) {
          return z.reduce(function($, V) {
            var J = V.sheet, re = V.root, ee = V.shadowId, Y = ee || "topDocument";
            if ($[Y] || ($[Y] = {
              root: re,
              rules: []
            }), !J || !J.cssRules)
              return $;
            var q = Array.from(J.cssRules);
            return $[Y].rules = $[Y].rules.concat(q), $;
          }, {});
        }
        o(g, "groupCssomByDocument");
        function y(z) {
          var $ = z.type, V = z.cssText;
          return $ !== 4 ? !1 : /orientation:\s*landscape/i.test(V) || /orientation:\s*portrait/i.test(V);
        }
        o(y, "isMediaRuleWithOrientation");
        function _(z) {
          var $ = z.selectorText, V = z.style;
          if (!$ || V.length <= 0)
            return !1;
          var J = V.transform || V.webkitTransform || V.msTransform || !1;
          if (!J && !V.rotate)
            return !1;
          var re = x(J), ee = T("rotate", V.rotate), Y = re + ee;
          return !Y || (Y = Math.abs(Y), Math.abs(Y - 180) % 180 <= c) ? !1 : Math.abs(Y - 90) % 90 <= c;
        }
        o(_, "getIsOrientationLocked");
        function x(z) {
          if (!z)
            return 0;
          var $ = z.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/);
          if (!$)
            return 0;
          var V = H($, 3), J = V[1], re = V[2];
          return T(J, re);
        }
        o(x, "getTransformDegrees");
        function T(z, $) {
          switch (z) {
            case "rotate":
            case "rotateZ":
              return k($);
            case "rotate3d":
              var V = $.split(",").map(function(Y) {
                return Y.trim();
              }), J = H(V, 4), re = J[2], ee = J[3];
              return parseInt(re) === 0 ? void 0 : k(ee);
            case "matrix":
            case "matrix3d":
              return O($);
            default:
              return 0;
          }
        }
        o(T, "getRotationInDegrees");
        function k(z) {
          var $ = z.match(/(deg|grad|rad|turn)/) || [], V = H($, 1), J = V[0];
          if (!J)
            return 0;
          var re = parseFloat(z.replace(J, ""));
          switch (J) {
            case "rad":
              return B(re);
            case "grad":
              return W(re);
            case "turn":
              return j(re);
            case "deg":
            default:
              return parseInt(re);
          }
        }
        o(k, "getAngleInDegrees");
        function O(z) {
          var $ = z.split(",");
          if ($.length <= 6) {
            var V = H($, 2), J = V[0], re = V[1], ee = Math.atan2(parseFloat(re), parseFloat(J));
            return B(ee);
          }
          var Y = parseFloat($[8]), q = Math.asin(Y), ie = Math.cos(q), E = Math.acos(parseFloat($[0]) / ie);
          return B(E);
        }
        o(O, "getAngleInDegreesFromMatrixTransform");
        function B(z) {
          return Math.round(z * (180 / Math.PI));
        }
        o(B, "convertRadToDeg");
        function W(z) {
          return z = z % 400, z < 0 && (z += 400), Math.round(z / 400 * 360);
        }
        o(W, "convertGradToDeg");
        function j(z) {
          return Math.round(360 / (1 / z));
        }
        o(j, "convertTurnToDeg");
      }
      o(V5, "cssOrientationLockEvaluate");
      var H5 = V5;
      function $5(e, t, r) {
        var a = t || {}, n = a.scaleMinimum, i = n === void 0 ? 2 : n, u = a.lowerBound, l = u === void 0 ? !1 : u, s = r.attr("content") || "";
        if (!s)
          return !0;
        var c = s.split(/[;,]/).reduce(function(f, p) {
          var m = p.trim();
          if (!m)
            return f;
          var h = m.split("="), v = H(h, 2), b = v[0], g = v[1];
          if (!b || !g)
            return f;
          var y = b.toLowerCase().trim(), _ = g.toLowerCase().trim();
          return y === "maximum-scale" && _ === "yes" && (_ = 1), y === "maximum-scale" && parseFloat(_) < 0 || (f[y] = _), f;
        }, {});
        if (l && c["maximum-scale"] && parseFloat(c["maximum-scale"]) < l)
          return !0;
        if (!l && c["user-scalable"] === "no")
          return this.data("user-scalable=no"), !1;
        var d = parseFloat(c["user-scalable"]);
        return !l && c["user-scalable"] && (d || d === 0) && d > -1 && d < 1 ? (this.data("user-scalable"), !1) : c["maximum-scale"] && parseFloat(c["maximum-scale"]) < i ? (this.data("maximum-scale"), !1) : !0;
      }
      o($5, "metaViewportScaleEvaluate");
      var U5 = $5, G5 = 0.05;
      function W5(e, t, r) {
        var a = t?.minOffset || 24, n = [], i = a, u = Fe(tn(r, a)), l;
        try {
          for (u.s(); !(l = u.n()).done; ) {
            var s = l.value;
            if (!(Rt(s) !== "widget" || !Se(s))) {
              var c = Y5(us(r, s, a / 2)) * 2;
              c + G5 >= a || (i = Math.min(i, c), n.push(s));
            }
          }
        } catch (d) {
          u.e(d);
        } finally {
          u.f();
        }
        if (n.length === 0)
          return this.data({
            closestOffset: i,
            minOffset: a
          }), !0;
        if (this.relatedNodes(n.map(function(d) {
          var f = d.actualNode;
          return f;
        })), !n.some(wt)) {
          this.data({
            messageKey: "nonTabbableNeighbor",
            closestOffset: i,
            minOffset: a
          });
          return;
        }
        return this.data({
          closestOffset: i,
          minOffset: a
        }), wt(r) ? !1 : void 0;
      }
      o(W5, "targetOffsetEvaluate");
      function Y5(e) {
        return Math.round(e * 10) / 10;
      }
      o(Y5, "roundToSingleDecimal");
      function X5(e, t, r) {
        var a = t?.minSize || 24, n = r.boundingClientRect, i = cr.bind(null, a), u = tn(r), l = K5(r, u), s = Z5(r, u), c = s.fullyObscuringElms, d = s.partialObscuringElms;
        if (c.length && !l.length)
          return this.relatedNodes(Hn(c)), this.data({
            messageKey: "obscured"
          }), !0;
        var f = wt(r) ? !1 : void 0;
        if (!i(n) && !l.length)
          return this.data(pe({
            minSize: a
          }, cu(n))), f;
        var p = eE(d), m = J5(r, p);
        if (l.length && (c.length || !i(m || n))) {
          this.data({
            minSize: a,
            messageKey: "contentOverflow"
          }), this.relatedNodes(Hn(l));
          return;
        }
        if (p.length !== 0 && !i(m)) {
          var h = p.every(wt), v = "partiallyObscured".concat(h ? "" : "NonTabbable");
          return this.data(pe({
            messageKey: v,
            minSize: a
          }, cu(m))), this.relatedNodes(Hn(p)), h ? f : void 0;
        }
        return this.data(pe({
          minSize: a
        }, cu(m || n))), this.relatedNodes(Hn(p)), !0;
      }
      o(X5, "targetSize");
      function K5(e, t) {
        return t.filter(function(r) {
          return !lf(r, e) && sf(e, r);
        });
      }
      o(K5, "filterOverflowingContent");
      function Z5(e, t) {
        var r = [], a = [], n = Fe(t), i;
        try {
          for (n.s(); !(i = n.n()).done; ) {
            var u = i.value;
            !sf(e, u) && Mi(e, u) && tE(u) !== "none" && (lf(e, u) ? r.push(u) : a.push(u));
          }
        } catch (l) {
          n.e(l);
        } finally {
          n.f();
        }
        return {
          fullyObscuringElms: r,
          partialObscuringElms: a
        };
      }
      o(Z5, "filterByElmsOverlap");
      function J5(e, t) {
        var r = e.boundingClientRect;
        if (t.length === 0)
          return null;
        var a = t.map(function(i) {
          var u = i.boundingClientRect;
          return u;
        }), n = Ni(r, a);
        return Q5(n);
      }
      o(J5, "getLargestUnobscuredArea");
      function Q5(e, t) {
        return e.reduce(function(r, a) {
          var n = cr(t, r), i = cr(t, a);
          if (n !== i)
            return n ? r : a;
          var u = r.width * r.height, l = a.width * a.height;
          return u > l ? r : a;
        });
      }
      o(Q5, "getLargestRect2");
      function eE(e) {
        return e.filter(function(t) {
          return Rt(t) === "widget" && Se(t);
        });
      }
      o(eE, "filterFocusableWidgets");
      function lf(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.top >= a.top && r.left >= a.left && r.bottom <= a.bottom && r.right <= a.right;
      }
      o(lf, "isEnclosedRect2");
      function tE(e) {
        return e.getComputedStylePropertyValue("pointer-events");
      }
      o(tE, "getCssPointerEvents");
      function cu(e) {
        return {
          width: Math.round(e.width * 10) / 10,
          height: Math.round(e.height * 10) / 10
        };
      }
      o(cu, "toDecimalSize");
      function sf(e, t) {
        return e.actualNode.contains(t.actualNode) && !wt(t);
      }
      o(sf, "isDescendantNotInTabOrder2");
      function Hn(e) {
        return e.map(function(t) {
          var r = t.actualNode;
          return r;
        });
      }
      o(Hn, "mapActualNodes");
      function rE(e) {
        var t = nE(e);
        return e.forEach(function(r) {
          r.result = aE(r, t);
        }), e;
      }
      o(rE, "headingOrderAfter");
      function aE(e, t) {
        var r, a, n, i, u = cf(t, e.node.ancestry), l = (r = (a = t[u]) === null || a === void 0 ? void 0 : a.level) !== null && r !== void 0 ? r : -1, s = (n = (i = t[u - 1]) === null || i === void 0 ? void 0 : i.level) !== null && n !== void 0 ? n : -1;
        if (u === 0)
          return !0;
        if (l !== -1)
          return l - s <= 1;
      }
      o(aE, "getHeadingOrderOutcome");
      function nE(e) {
        e = ae(e), e.sort(function(r, a) {
          var n = r.node, i = a.node;
          return n.ancestry.length - i.ancestry.length;
        });
        var t = e.reduce(iE, []);
        return t.filter(function(r) {
          var a = r.level;
          return a !== -1;
        });
      }
      o(nE, "getHeadingOrder");
      function iE(e, t) {
        var r, a = (r = t.data) === null || r === void 0 ? void 0 : r.headingOrder, n = df(t.node.ancestry, 1);
        if (!a)
          return e;
        var i = a.map(function(l) {
          return uE(l, n);
        }), u = oE(e, n);
        return u === -1 ? e.push.apply(e, ae(i)) : e.splice.apply(e, [u, 0].concat(ae(i))), e;
      }
      o(iE, "mergeHeadingOrder");
      function oE(e, t) {
        for (; t.length; ) {
          var r = cf(e, t);
          if (r !== -1)
            return r;
          t = df(t, 1);
        }
        return -1;
      }
      o(oE, "getFrameIndex");
      function cf(e, t) {
        return e.findIndex(function(r) {
          return Uo(r.ancestry, t);
        });
      }
      o(cf, "findHeadingOrderIndex");
      function uE(e, t) {
        var r = t.concat(e.ancestry);
        return pe({}, e, {
          ancestry: r
        });
      }
      o(uE, "addFrameToHeadingAncestry");
      function df(e, t) {
        return e.slice(0, e.length - t);
      }
      o(df, "shortenArray");
      function lE(e) {
        var t = de(e), r = t && t.includes("heading"), a = e.attr("aria-level"), n = parseInt(a, 10), i = e.props.nodeName.match(/h(\d)/) || [], u = H(i, 2), l = u[1];
        return r ? l && !a ? parseInt(l, 10) : isNaN(n) || n < 1 ? l ? parseInt(l, 10) : 2 : n || -1 : -1;
      }
      o(lE, "getLevel");
      function sE() {
        var e = le.get("headingOrder");
        if (e)
          return !0;
        var t = "h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame", r = St(w._tree[0], t, Te);
        return e = r.map(function(a) {
          return {
            ancestry: [qa(a.actualNode)],
            level: lE(a)
          };
        }), this.data({
          headingOrder: e
        }), le.set("headingOrder", r), !0;
      }
      o(sE, "headingOrderEvaluate");
      var cE = sE;
      function ff(e, t) {
        if (!e || !t)
          return !1;
        var r = Object.getOwnPropertyNames(e), a = Object.getOwnPropertyNames(t);
        if (r.length !== a.length)
          return !1;
        var n = r.every(function(i) {
          var u = e[i], l = t[i];
          return S(u) !== S(l) ? !1 : S(u) === "object" || S(l) === "object" ? ff(u, l) : u === l;
        });
        return n;
      }
      o(ff, "isIdenticalObject");
      function dE(e) {
        if (e.length < 2)
          return e;
        for (var t = e.filter(function(l) {
          var s = l.result;
          return s !== void 0;
        }), r = [], a = {}, n = /* @__PURE__ */ o(function(s) {
          var c, d = t[s], f = d.data, p = f.name, m = f.urlProps;
          if (a[p])
            return "continue";
          var h = t.filter(function(b, g) {
            var y = b.data;
            return y.name === p && g !== s;
          }), v = h.every(function(b) {
            var g = b.data;
            return ff(g.urlProps, m);
          });
          h.length && !v && (d.result = void 0), d.relatedNodes = [], (c = d.relatedNodes).push.apply(c, ae(h.map(function(b) {
            return b.relatedNodes[0];
          }))), a[p] = h, r.push(d);
        }, "_loop9"), i = 0; i < t.length; i++)
          var u = n(i);
        return r;
      }
      o(dE, "identicalLinksSamePurposeAfter");
      var fE = dE, pf = {};
      gt(pf, {
        aria: /* @__PURE__ */ o(function() {
          return x1;
        }, "aria"),
        color: /* @__PURE__ */ o(function() {
          return q1;
        }, "color"),
        dom: /* @__PURE__ */ o(function() {
          return Ri;
        }, "dom"),
        forms: /* @__PURE__ */ o(function() {
          return mf;
        }, "forms"),
        matches: /* @__PURE__ */ o(function() {
          return ia;
        }, "matches"),
        math: /* @__PURE__ */ o(function() {
          return is;
        }, "math"),
        standards: /* @__PURE__ */ o(function() {
          return L1;
        }, "standards"),
        table: /* @__PURE__ */ o(function() {
          return vf;
        }, "table"),
        text: /* @__PURE__ */ o(function() {
          return ra;
        }, "text"),
        utils: /* @__PURE__ */ o(function() {
          return ii;
        }, "utils")
      });
      var mf = {};
      gt(mf, {
        isAriaCombobox: /* @__PURE__ */ o(function() {
          return Zs;
        }, "isAriaCombobox"),
        isAriaListbox: /* @__PURE__ */ o(function() {
          return Ks;
        }, "isAriaListbox"),
        isAriaRange: /* @__PURE__ */ o(function() {
          return Js;
        }, "isAriaRange"),
        isAriaTextbox: /* @__PURE__ */ o(function() {
          return Xs;
        }, "isAriaTextbox"),
        isDisabled: /* @__PURE__ */ o(function() {
          return xa;
        }, "isDisabled"),
        isNativeSelect: /* @__PURE__ */ o(function() {
          return Ys;
        }, "isNativeSelect"),
        isNativeTextbox: /* @__PURE__ */ o(function() {
          return Ws;
        }, "isNativeTextbox")
      });
      var pE = ["fieldset", "button", "select", "input", "textarea"];
      function hf(e) {
        var t = e._isDisabled;
        if (typeof t == "boolean")
          return t;
        var r = e.props.nodeName, a = e.attr("aria-disabled");
        return pE.includes(r) && e.hasAttr("disabled") ? t = !0 : a ? t = a.toLowerCase() === "true" : e.parent ? t = hf(e.parent) : t = !1, e._isDisabled = t, t;
      }
      o(hf, "isDisabled");
      var xa = hf, vf = {};
      gt(vf, {
        getAllCells: /* @__PURE__ */ o(function() {
          return du;
        }, "getAllCells"),
        getCellPosition: /* @__PURE__ */ o(function() {
          return nn;
        }, "getCellPosition"),
        getHeaders: /* @__PURE__ */ o(function() {
          return $n;
        }, "getHeaders"),
        getScope: /* @__PURE__ */ o(function() {
          return Gi;
        }, "getScope"),
        isColumnHeader: /* @__PURE__ */ o(function() {
          return Sr;
        }, "isColumnHeader"),
        isDataCell: /* @__PURE__ */ o(function() {
          return bf;
        }, "isDataCell"),
        isDataTable: /* @__PURE__ */ o(function() {
          return Un;
        }, "isDataTable"),
        isHeader: /* @__PURE__ */ o(function() {
          return yE;
        }, "isHeader"),
        isRowHeader: /* @__PURE__ */ o(function() {
          return Or;
        }, "isRowHeader"),
        toArray: /* @__PURE__ */ o(function() {
          return Pt;
        }, "toArray"),
        toGrid: /* @__PURE__ */ o(function() {
          return Pt;
        }, "toGrid"),
        traverse: /* @__PURE__ */ o(function() {
          return fu;
        }, "traverse")
      });
      function mE(e) {
        var t, r, a, n, i = [];
        for (t = 0, a = e.rows.length; t < a; t++)
          for (r = 0, n = e.rows[t].cells.length; r < n; r++)
            i.push(e.rows[t].cells[r]);
        return i;
      }
      o(mE, "getAllCells");
      var du = mE;
      function gf(e, t, r) {
        for (var a = e === "row" ? "_rowHeaders" : "_colHeaders", n = e === "row" ? Or : Sr, i = r[t.y][t.x], u = i.colSpan - 1, l = i.getAttribute("rowspan"), s = parseInt(l) === 0 || i.rowspan === 0 ? r.length : i.rowSpan, c = s - 1, d = t.y + c, f = t.x + u, p = e === "row" ? t.y : 0, m = e === "row" ? 0 : t.x, h, v = [], b = d; b >= p && !h; b--)
          for (var g = f; g >= m; g--) {
            var y = r[b] ? r[b][g] : void 0;
            if (!!y) {
              var _ = w.utils.getNodeFromTree(y);
              if (_[a]) {
                h = _[a];
                break;
              }
              v.push(y);
            }
          }
        return h = (h || []).concat(v.filter(n)), v.forEach(function(x) {
          var T = w.utils.getNodeFromTree(x);
          T[a] = h;
        }), h;
      }
      o(gf, "traverseForHeaders");
      function hE(e, t) {
        if (e.getAttribute("headers")) {
          var r = At(e, "headers");
          if (r.filter(function(u) {
            return u;
          }).length)
            return r;
        }
        t || (t = Pt(Tr(e, "table")));
        var a = nn(e, t), n = gf("row", a, t), i = gf("col", a, t);
        return [].concat(n, i).reverse();
      }
      o(hE, "getHeaders");
      var $n = hE;
      function vE(e) {
        if (!e.children.length && !e.textContent.trim())
          return !1;
        var t = e.getAttribute("role");
        return kr(t) ? ["cell", "gridcell"].includes(t) : e.nodeName.toUpperCase() === "TD";
      }
      o(vE, "isDataCell");
      var bf = vE;
      function gE(e) {
        var t = (e.getAttribute("role") || "").toLowerCase();
        if ((t === "presentation" || t === "none") && !Se(e))
          return !1;
        if (e.getAttribute("contenteditable") === "true" || Tr(e, '[contenteditable="true"]') || t === "grid" || t === "treegrid" || t === "table" || Rt(t) === "landmark")
          return !0;
        if (e.getAttribute("datatable") === "0")
          return !1;
        if (e.getAttribute("summary") || e.tHead || e.tFoot || e.caption)
          return !0;
        for (var r = 0, a = e.children.length; r < a; r++)
          if (e.children[r].nodeName.toUpperCase() === "COLGROUP")
            return !0;
        for (var n = 0, i = e.rows.length, u, l, s = !1, c = 0; c < i; c++) {
          u = e.rows[c];
          for (var d = 0, f = u.cells.length; d < f; d++) {
            if (l = u.cells[d], l.nodeName.toUpperCase() === "TH" || (!s && (l.offsetWidth !== l.clientWidth || l.offsetHeight !== l.clientHeight) && (s = !0), l.getAttribute("scope") || l.getAttribute("headers") || l.getAttribute("abbr")) || ["columnheader", "rowheader"].includes((l.getAttribute("role") || "").toLowerCase()) || l.children.length === 1 && l.children[0].nodeName.toUpperCase() === "ABBR")
              return !0;
            n++;
          }
        }
        if (e.getElementsByTagName("table").length || i < 2)
          return !1;
        var p = e.rows[Math.ceil(i / 2)];
        if (p.cells.length === 1 && p.cells[0].colSpan === 1)
          return !1;
        if (p.cells.length >= 5 || s)
          return !0;
        var m, h;
        for (c = 0; c < i; c++) {
          if (u = e.rows[c], m && m !== D.getComputedStyle(u).getPropertyValue("background-color") || (m = D.getComputedStyle(u).getPropertyValue("background-color"), h && h !== D.getComputedStyle(u).getPropertyValue("background-image")))
            return !0;
          h = D.getComputedStyle(u).getPropertyValue("background-image");
        }
        return i >= 20 ? !0 : !(Si(e).width > Xa(D).width * 0.95 || n < 10 || e.querySelector("object, embed, iframe, applet"));
      }
      o(gE, "isDataTable");
      var Un = gE;
      function bE(e) {
        if (Sr(e) || Or(e))
          return !0;
        if (e.getAttribute("id")) {
          var t = ke(e.getAttribute("id"));
          return !!N.querySelector('[headers~="'.concat(t, '"]'));
        }
        return !1;
      }
      o(bE, "isHeader");
      var yE = bE;
      function yf(e, t, r, a) {
        var n, i = r[t.y] ? r[t.y][t.x] : void 0;
        return i ? typeof a == "function" && (n = a(i, t, r), n === !0) ? [i] : (n = yf(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a), n.unshift(i), n) : [];
      }
      o(yf, "traverseTable");
      function wE(e, t, r, a) {
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
        return yf(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a);
      }
      o(wE, "traverse");
      var fu = wE;
      function DE(e, t, r) {
        var a = ra.accessibleTextVirtual(r), n = ra.sanitize(ra.removeUnicode(a, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        })).toLowerCase();
        if (!!n) {
          var i = {
            name: n,
            urlProps: Ri.urlPropsFromAttribute(e, "href")
          };
          return this.data(i), this.relatedNodes([e]), !0;
        }
      }
      o(DE, "identicalLinksSamePurposeEvaluate");
      var _E = DE;
      function xE(e, t, r) {
        var a = dt(r, "a[href]");
        return a.some(function(n) {
          return /^#[^/!]/.test(n.attr("href"));
        });
      }
      o(xE, "internalLinkPresentEvaluate");
      var EE = xE, CE = /[;,\s]/, AE = /^[0-9.]+$/;
      function FE(e, t, r) {
        var a = t || {}, n = a.minDelay, i = a.maxDelay, u = (r.attr("content") || "").trim(), l = u.split(CE), s = H(l, 1), c = s[0];
        if (!c.match(AE))
          return !0;
        var d = parseFloat(c);
        return this.data({
          redirectDelay: d
        }), typeof n == "number" && d <= t.minDelay || typeof i == "number" && d > t.maxDelay;
      }
      o(FE, "metaRefreshEvaluate");
      function TE(e) {
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
      o(TE, "normalizeFontWeight");
      function RE(e) {
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
      o(RE, "getTextContainer");
      function pu(e) {
        var t = D.getComputedStyle(RE(e));
        return {
          fontWeight: TE(t.getPropertyValue("font-weight")),
          fontSize: parseInt(t.getPropertyValue("font-size")),
          isItalic: t.getPropertyValue("font-style") === "italic"
        };
      }
      o(pu, "getStyleValues");
      function wf(e, t, r) {
        return r.reduce(function(a, n) {
          return a || (!n.size || e.fontSize / n.size > t.fontSize) && (!n.weight || e.fontWeight - n.weight > t.fontWeight) && (!n.italic || e.isItalic && !t.isItalic);
        }, !1);
      }
      o(wf, "isHeaderStyle");
      function kE(e, t, r) {
        var a = Array.from(e.parentNode.children), n = a.indexOf(e);
        t = t || {};
        var i = t.margins || [], u = a.slice(n + 1).find(function(b) {
          return b.nodeName.toUpperCase() === "P";
        }), l = a.slice(0, n).reverse().find(function(b) {
          return b.nodeName.toUpperCase() === "P";
        }), s = pu(e), c = u ? pu(u) : null, d = l ? pu(l) : null, f = t.passLength, p = t.failLength, m = e.textContent.trim().length, h = u?.textContent.trim().length;
        if (m > h * f || !c || !wf(s, c, i))
          return !0;
        var v = Fr(r, "blockquote");
        if (!(v && v.nodeName.toUpperCase() === "BLOCKQUOTE") && !(d && !wf(s, d, i)) && !(m > h * p))
          return !1;
      }
      o(kE, "pAsHeadingEvaluate");
      var SE = kE;
      function OE(e) {
        var t = e.filter(function(r) {
          return r.data.isIframe;
        });
        return e.forEach(function(r) {
          if (!(r.result || r.node.ancestry.length === 1)) {
            var a = r.node.ancestry.slice(0, -1), n = Fe(t), i;
            try {
              for (n.s(); !(i = n.n()).done; ) {
                var u = i.value;
                if (Uo(a, u.node.ancestry)) {
                  r.result = u.result;
                  break;
                }
              }
            } catch (l) {
              n.e(l);
            } finally {
              n.f();
            }
          }
        }), t.forEach(function(r) {
          r.result || (r.result = !0);
        }), e;
      }
      o(OE, "regionAfter");
      var ME = OE, NE = ["alert", "log", "status"];
      function IE(e, t, r) {
        this.data({
          isIframe: ["iframe", "frame"].includes(r.props.nodeName)
        });
        var a = le.get("regionlessNodes", function() {
          return PE(t);
        });
        return !a.includes(r);
      }
      o(IE, "regionEvaluate");
      function PE(e) {
        var t = Df(w._tree[0], e).map(function(r) {
          for (; r.parent && !r.parent._hasRegionDescendant && r.parent.actualNode !== N.body; )
            r = r.parent;
          return r;
        }).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
        return t;
      }
      o(PE, "getRegionlessNodes");
      function Df(e, t) {
        var r = e.actualNode;
        if (de(e) === "button" || LE(e, t) || ["iframe", "frame"].includes(e.props.nodeName) || So(e.actualNode) && ji(e.actualNode, "href") || !Te(r)) {
          for (var a = e; a; )
            a._hasRegionDescendant = !0, a = a.parent;
          return ["iframe", "frame"].includes(e.props.nodeName) ? [e] : [];
        } else
          return r !== N.body && cn(r, !0) ? [e] : e.children.filter(function(n) {
            var i = n.actualNode;
            return i.nodeType === 1;
          }).map(function(n) {
            return Df(n, t);
          }).reduce(function(n, i) {
            return n.concat(i);
          }, []);
      }
      o(Df, "findRegionlessElms");
      function LE(e, t) {
        var r = e.actualNode, a = de(e), n = (r.getAttribute("aria-live") || "").toLowerCase().trim(), i = Ir("landmark");
        return !!(["assertive", "polite"].includes(n) || NE.includes(a) || i.includes(a) || t.regionMatcher && ia(e, t.regionMatcher));
      }
      o(LE, "isRegion");
      function BE(e) {
        var t = ji(e, "href");
        return t ? Te(t) || void 0 : !1;
      }
      o(BE, "skipLinkEvaluate");
      var qE = BE;
      function jE(e) {
        var t = {};
        return e.forEach(function(r) {
          t[r.data] = t[r.data] !== void 0 ? ++t[r.data] : 0;
        }), e.forEach(function(r) {
          r.result = !!t[r.data];
        }), e;
      }
      o(jE, "uniqueFrameTitleAfter");
      var zE = jE;
      function VE(e, t, r) {
        var a = ne(r.attr("title")).toLowerCase();
        return this.data(a), !0;
      }
      o(VE, "uniqueFrameTitleEvaluate");
      var HE = VE;
      function $E(e) {
        var t = [];
        return e.filter(function(r) {
          return t.indexOf(r.data) === -1 ? (t.push(r.data), !0) : !1;
        });
      }
      o($E, "duplicateIdAfter");
      var UE = $E;
      function GE(e) {
        var t = e.getAttribute("id").trim();
        if (!t)
          return !0;
        var r = Ye(e), a = Array.from(r.querySelectorAll('[id="'.concat(ke(t), '"]'))).filter(function(n) {
          return n !== e;
        });
        return a.length && this.relatedNodes(a), this.data(t), a.length === 0;
      }
      o(GE, "duplicateIdEvaluate");
      var WE = GE;
      function YE(e, t, r) {
        return !!ne(na(r));
      }
      o(YE, "ariaLabelEvaluate");
      var XE = YE;
      function KE(e, t, r) {
        try {
          return !!ne(aa(r));
        } catch {
          return;
        }
      }
      o(KE, "ariaLabelledbyEvaluate");
      var ZE = KE;
      function JE(e, t) {
        var r = t.cssProperties.filter(function(a) {
          if (e.style.getPropertyPriority(a) === "important")
            return a;
        });
        return r.length > 0 ? (this.data(r), !1) : !0;
      }
      o(JE, "avoidInlineSpacingEvaluate");
      var QE = JE;
      function eC() {
        var e = N.title;
        return !!ne(e);
      }
      o(eC, "docHasTitleEvaluate");
      var tC = eC;
      function rC() {
      }
      o(rC, "existsEvaluate");
      var aC = rC;
      function nC(e, t, r) {
        var a = r.props.nodeName;
        return ["img", "input", "area"].includes(a) ? r.hasAttr("alt") : !1;
      }
      o(nC, "hasAltEvaluate");
      var iC = nC;
      function oC(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.minValue, i = t.maxValue, u = t.normalValue, l = u === void 0 ? 0 : u, s = t.noImportant, c = t.multiLineOnly;
        if (!s && e.style.getPropertyPriority(r) !== "important" || c && !yc(e))
          return !0;
        var d = {};
        typeof n == "number" && (d.minValue = n), typeof i == "number" && (d.maxValue = i);
        var f = e.style.getPropertyValue(r);
        if (["inherit", "unset", "revert", "revert-layer"].includes(f))
          return this.data(pe({
            value: f
          }, d)), !0;
        var p = uC(e, {
          absoluteValues: a,
          cssProperty: r,
          normalValue: l
        });
        if (this.data(pe({
          value: p
        }, d)), typeof p == "number")
          return (typeof n != "number" || p >= n) && (typeof i != "number" || p <= i);
      }
      o(oC, "inlineStyleProperty");
      function uC(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.normalValue, i = D.getComputedStyle(e), u = i.getPropertyValue(r);
        if (u === "normal")
          return n;
        var l = parseFloat(u);
        if (a)
          return l;
        var s = parseFloat(i.getPropertyValue("font-size")), c = Math.round(l / s * 100) / 100;
        return isNaN(c) ? u : c;
      }
      o(uC, "getNumberValue");
      function lC(e) {
        return ot(e);
      }
      o(lC, "isOnScreenEvaluate");
      var sC = lC;
      function cC(e, t, r) {
        var a = r.props.nodeName, n = (r.attr("type") || "").toLowerCase(), i = r.attr("value");
        return i && this.data({
          messageKey: "has-label"
        }), a === "input" && ["submit", "reset"].includes(n) ? i === null : !1;
      }
      o(cC, "nonEmptyIfPresentEvaluate");
      var dC = cC;
      function fC(e, t, r) {
        var a = Ee(r);
        if (["presentation", "none"].includes(a) && ["iframe", "frame"].includes(r.props.nodeName) && r.hasAttr("title"))
          return this.data({
            messageKey: "iframe",
            nodeName: r.props.nodeName
          }), !1;
        var n = de(r);
        if (["presentation", "none"].includes(n))
          return this.data({
            role: n
          }), !0;
        if (!["presentation", "none"].includes(a))
          return !1;
        var i = pr().some(function(s) {
          return r.hasAttr(s);
        }), u = Se(r), l;
        return i && !u ? l = "globalAria" : !i && u ? l = "focusable" : l = "both", this.data({
          messageKey: l,
          role: n
        }), !1;
      }
      o(fC, "presentationalRoleEvaluate");
      function pC(e, t, r) {
        if (!!r.children) {
          var a = r.children.find(function(i) {
            var u = i.props;
            return u.nodeName === "title";
          });
          if (!a)
            return this.data({
              messageKey: "noTitle"
            }), !1;
          try {
            var n = Ht(a, {
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
      o(pC, "svgNonEmptyTitleEvaluate");
      var mC = pC;
      function hC(e) {
        var t = Pt(e), r = t[0];
        return t.length <= 1 || r.length <= 1 || e.rows.length <= 1 ? !0 : r.reduce(function(a, n, i) {
          return a || n !== r[i + 1] && r[i + 1] !== void 0;
        }, !1);
      }
      o(hC, "captionFakedEvaluate");
      var vC = hC;
      function gC(e) {
        return vc(N) ? e.nodeName.toUpperCase() === "TH" : !0;
      }
      o(gC, "html5ScopeEvaluate");
      var bC = gC, yC = wC;
      function wC(e, t, r) {
        if (r.children !== void 0) {
          var a = r.attr("summary"), n = r.children.find(DC), i = n ? ne(Ht(n)) : !1;
          return !i || !a ? !1 : ne(a).toLowerCase() === ne(i).toLowerCase();
        }
      }
      o(wC, "sameCaptionSummaryEvaluate");
      function DC(e) {
        return e.props.nodeName === "caption";
      }
      o(DC, "isCaptionNode");
      function _C(e, t) {
        var r = e.getAttribute("scope").toLowerCase();
        return t.values.indexOf(r) !== -1;
      }
      o(_C, "scopeValueEvaluate");
      var xC = _C;
      function EC(e) {
        var t = [], r = du(e), a = Pt(e);
        return r.forEach(function(n) {
          if (cn(n) && bf(n) && !S1(n)) {
            var i = $n(n, a).some(function(u) {
              return u !== null && !!cn(u);
            });
            i || t.push(n);
          }
        }), t.length ? (this.relatedNodes(t), !1) : !0;
      }
      o(EC, "tdHasHeaderEvaluate");
      var CC = EC;
      function AC(e) {
        for (var t = [], r = [], a = [], n = 0; n < e.rows.length; n++)
          for (var i = e.rows[n], u = 0; u < i.cells.length; u++)
            t.push(i.cells[u]);
        var l = t.filter(function(s) {
          return s.getAttribute("id");
        }).map(function(s) {
          return s.getAttribute("id");
        });
        if (t.forEach(function(s) {
          var c = !1, d = !1;
          if (!(!s.hasAttribute("headers") || !Te(s))) {
            var f = s.getAttribute("headers").trim();
            if (!f)
              return r.push(s);
            var p = Xe(f);
            p.length !== 0 && (s.getAttribute("id") && (c = p.indexOf(s.getAttribute("id").trim()) !== -1), d = p.some(function(m) {
              return !l.includes(m);
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
      o(AC, "tdHeadersAttrEvaluate");
      function FC(e) {
        var t = du(e), r = this, a = [];
        t.forEach(function(l) {
          var s = l.getAttribute("headers");
          s && (a = a.concat(s.split(/\s+/)));
          var c = l.getAttribute("aria-labelledby");
          c && (a = a.concat(c.split(/\s+/)));
        });
        var n = t.filter(function(l) {
          return ne(l.textContent) === "" ? !1 : l.nodeName.toUpperCase() === "TH" || ["rowheader", "columnheader"].indexOf(l.getAttribute("role")) !== -1;
        }), i = Pt(e), u = !0;
        return n.forEach(function(l) {
          if (!(l.getAttribute("id") && a.includes(l.getAttribute("id")))) {
            var s = nn(l, i), c = !1;
            Sr(l) && (c = fu("down", s, i).find(function(d) {
              return !Sr(d) && $n(d, i).includes(l);
            })), !c && Or(l) && (c = fu("right", s, i).find(function(d) {
              return !Or(d) && $n(d, i).includes(l);
            })), c || r.relatedNodes(l), u = u && c;
          }
        }), u ? !0 : void 0;
      }
      o(FC, "thHasDataCellsEvaluate");
      var TC = FC;
      function RC(e, t, r) {
        var a = ["SCRIPT", "HEAD", "TITLE", "NOSCRIPT", "STYLE", "TEMPLATE"];
        if (!a.includes(e.nodeName.toUpperCase()) && la(r)) {
          var n = D.getComputedStyle(e);
          if (n.getPropertyValue("display") === "none")
            return;
          if (n.getPropertyValue("visibility") === "hidden") {
            var i = $e(e), u = i && D.getComputedStyle(i);
            if (!u || u.getPropertyValue("visibility") !== "hidden")
              return;
          }
        }
        return !0;
      }
      o(RC, "hiddenContentEvaluate");
      var kC = RC;
      function SC(e, t) {
        var r = /^aria-/, a = t.attrNames;
        if (a.length) {
          for (var n = 0, i = a.length; n < i; n++)
            if (r.test(a[n]))
              return !0;
        }
        return !1;
      }
      o(SC, "ariaAllowedAttrMatches");
      var OC = SC;
      function MC(e, t) {
        return Ee(t, {
          dpub: !0,
          fallback: !0
        }) !== null;
      }
      o(MC, "ariaAllowedRoleMatches");
      var NC = MC;
      function IC(e, t) {
        var r = /^aria-/;
        return t.attrNames.some(function(a) {
          return r.test(a);
        });
      }
      o(IC, "ariaHasAttrMatches");
      var PC = IC;
      function _f(e) {
        return e ? e.getAttribute("aria-hidden") === "true" ? !1 : _f($e(e)) : !0;
      }
      o(_f, "shouldMatchElement");
      function LC(e) {
        return _f($e(e));
      }
      o(LC, "ariaHiddenFocusMatches");
      var BC = LC;
      function qC(e, t) {
        var r = Ee(t, {
          dpub: !0
        });
        return !!au(r);
      }
      o(qC, "ariaRequiredChildrenMatches");
      var jC = qC;
      function zC(e, t) {
        var r = Ee(t);
        return !!ru(r);
      }
      o(zC, "ariaRequiredParentMatches");
      var VC = zC;
      function HC(e, t) {
        var r = t.attr("autocomplete");
        if (!r || ne(r) === "")
          return !1;
        var a = t.props.nodeName;
        if (["textarea", "input", "select"].includes(a) === !1)
          return !1;
        var n = ["submit", "reset", "button", "hidden"];
        if (a === "input" && n.includes(t.props.type))
          return !1;
        var i = t.attr("aria-disabled") || "false";
        if (t.hasAttr("disabled") || i.toLowerCase() === "true")
          return !1;
        var u = t.attr("role"), l = t.attr("tabindex");
        if (l === "-1" && u) {
          var s = ve.ariaRoles[u];
          if (s === void 0 || s.type !== "widget")
            return !1;
        }
        return !(l === "-1" && t.actualNode && !ot(t) && !Te(t));
      }
      o(HC, "autocompleteMatches");
      var $C = HC;
      function UC(e, t, r) {
        return r.initiator;
      }
      o(UC, "isInitiatorMatches");
      var xf = UC;
      function GC(e, t, r) {
        return xf(e, t, r) ? !!e.querySelector("a[href]") : !0;
      }
      o(GC, "bypassMatches");
      var WC = GC;
      function YC(e, t) {
        var r = t.props, a = r.nodeName, n = r.type;
        if (a === "option" || a === "select" && !e.options.length)
          return !1;
        var i = ["hidden", "range", "color", "checkbox", "radio", "image"];
        if (a === "input" && i.includes(n) || xa(t) || rn(t))
          return !1;
        var u = ["input", "select", "textarea"];
        if (u.includes(a)) {
          var l = D.getComputedStyle(e), s = parseInt(l.getPropertyValue("text-indent"), 10);
          if (s) {
            var c = e.getBoundingClientRect();
            if (c = {
              top: c.top,
              bottom: c.bottom,
              left: c.left + s,
              right: c.right + s
            }, !Oo(c, e))
              return !1;
          }
          return !0;
        }
        var d = Fr(t, "label");
        if (a === "label" || d) {
          var f = d || e, p = d ? se(d) : t;
          if (f.htmlFor) {
            var m = Ye(f), h = m.getElementById(f.htmlFor), v = h && se(h);
            if (v && xa(v))
              return !1;
          }
          var b = 'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea', g = dt(p, b)[0];
          if (g && xa(g))
            return !1;
        }
        for (var y = [], _ = t; _; ) {
          if (_.props.id) {
            var x = Qo(_).filter(function(z) {
              return Xe(z.getAttribute("aria-labelledby") || "").includes(_.props.id);
            }).map(function(z) {
              return se(z);
            });
            y.push.apply(y, ae(x));
          }
          _ = _.parent;
        }
        if (y.length > 0 && y.every(xa) || !ZC(t))
          return !1;
        for (var T = N.createRange(), k = t.children, O = 0; O < k.length; O++) {
          var B = k[O];
          B.actualNode.nodeType === 3 && ne(B.actualNode.nodeValue) !== "" && T.selectNodeContents(B.actualNode);
        }
        for (var W = T.getClientRects(), j = 0; j < W.length; j++)
          if (Oo(W[j], e))
            return !0;
        return !1;
      }
      o(YC, "colorContrastMatches");
      var XC = YC, KC = {
        emoji: !0,
        nonBmp: !1,
        punctuations: !0
      };
      function ZC(e) {
        var t = Tt(e, !1, !0);
        return t === "" || ua(t, KC) === "" ? !1 : e.children.some(function(r) {
          return r.props.nodeName === "#text" && !to(r);
        });
      }
      o(ZC, "hasRealTextChildren");
      function JC(e) {
        if (Un(e)) {
          var t = Pt(e);
          return t.length >= 3 && t[0].length >= 3 && t[1].length >= 3 && t[2].length >= 3;
        }
        return !1;
      }
      o(JC, "dataTableLargeMatches");
      var QC = JC;
      function eA(e) {
        return Un(e);
      }
      o(eA, "dataTableMatches");
      var tA = eA;
      function rA(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(ke(t), '"]'), a = Array.from(Ye(e).querySelectorAll(r));
        return !Bn(e) && a.some(Se);
      }
      o(rA, "duplicateIdActiveMatches");
      var aA = rA;
      function nA(e) {
        return Bn(e);
      }
      o(nA, "duplicateIdAriaMatches");
      var iA = nA;
      function oA(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(ke(t), '"]'), a = Array.from(Ye(e).querySelectorAll(r));
        return !Bn(e) && a.every(function(n) {
          return !Se(n);
        });
      }
      o(oA, "duplicateIdMiscMatches");
      var uA = oA;
      function lA(e, t, r) {
        var a, n;
        return !r.initiator && !r.focusable && ((a = r.size) === null || a === void 0 ? void 0 : a.width) * ((n = r.size) === null || n === void 0 ? void 0 : n.height) > 1;
      }
      o(lA, "frameFocusableContentMatches");
      var sA = lA;
      function cA(e) {
        var t = e.getAttribute("title");
        return !!ne(t);
      }
      o(cA, "frameTitleHasTextMatches");
      var dA = cA;
      function fA(e, t) {
        return Ft(t, {
          chromium: !0
        }) !== null;
      }
      o(fA, "hasImplicitChromiumRoleMatches");
      var pA = fA;
      function mA(e, t) {
        return de(t) === "heading";
      }
      o(mA, "headingMatches");
      function hA(e, t) {
        try {
          var r = t.props.nodeName;
          return r === "svg" ? !0 : !!it(t, "svg");
        } catch {
          return !1;
        }
      }
      o(hA, "svgNamespaceMatches");
      var mu = hA;
      function vA(e, t) {
        return !mu(e, t);
      }
      o(vA, "htmlNamespaceMatches");
      var gA = vA;
      function bA(e, t) {
        var r = !!Ue(t);
        if (!r)
          return !1;
        var a = de(e);
        return !(a && a !== "link");
      }
      o(bA, "identicalLinksSamePurposeMatches");
      var yA = bA;
      function wA(e) {
        return pc(e);
      }
      o(wA, "insertedIntoFocusOrderMatches");
      var DA = wA;
      function _A(e) {
        return ot(e);
      }
      o(_A, "hasVisibleTextMatches");
      function xA(e, t) {
        return ot(t);
      }
      o(xA, "isVisibleOnScreenMatches");
      function EA(e, t) {
        var r = de(e);
        if (!r)
          return !1;
        var a = Ir("widget"), n = a.includes(r);
        if (!n)
          return !1;
        var i = eu();
        return !(!i.includes(r) || !ne(na(t)) && !ne(aa(e)) || !ne(Tt(t)));
      }
      o(EA, "labelContentNameMismatchMatches");
      var CA = EA;
      function AA(e, t) {
        if (t.props.nodeName !== "input" || t.hasAttr("type") === !1)
          return !0;
        var r = t.attr("type").toLowerCase();
        return ["hidden", "image", "button", "submit", "reset"].includes(r) === !1;
      }
      o(AA, "labelMatches");
      var FA = AA;
      function TA(e, t) {
        var r = "article, aside, main, nav, section";
        return e.hasAttribute("role") || !Fr(t, r);
      }
      o(TA, "landmarkHasBodyContextMatches");
      var RA = TA, kA = ["article", "aside", "main", "nav", "section"].join(",");
      function SA(e, t) {
        return OA(t) && Te(t);
      }
      o(SA, "landmarkUniqueMatches");
      function OA(e) {
        var t = Ir("landmark"), r = de(e);
        if (!r)
          return !1;
        var a = e.props.nodeName;
        if (a === "header" || a === "footer")
          return MA(e);
        if (a === "section" || a === "form") {
          var n = Ue(e);
          return !!n;
        }
        return t.indexOf(r) >= 0 || r === "region";
      }
      o(OA, "isLandmarkVirtual");
      function MA(e) {
        return !it(e, kA);
      }
      o(MA, "isHeaderFooterLandmark");
      function NA(e) {
        return !Un(e) && !Se(e);
      }
      o(NA, "dataTableMatches2");
      var IA = NA;
      function PA(e) {
        var t = ne(e.innerText), r = e.getAttribute("role");
        return r && r !== "link" || !t || !ot(e) ? !1 : uo(e);
      }
      o(PA, "linkInTextBlockMatches");
      var LA = PA;
      function BA(e, t) {
        var r = de(t);
        return r ? !!ve.ariaRoles[r].childrenPresentational : !1;
      }
      o(BA, "nestedInteractiveMatches");
      var qA = BA;
      function jA(e) {
        return !(!e.currentSrc || e.hasAttribute("paused") || e.hasAttribute("muted"));
      }
      o(jA, "noAutoplayAudioMatches");
      var zA = jA;
      function VA(e, t) {
        return !(!t.hasAttr("role") || !t.attr("role").trim());
      }
      o(VA, "noEmptyRoleMatches");
      var HA = VA;
      function $A(e, t) {
        var r = Ee(t);
        if (!r || ["none", "presentation"].includes(r))
          return !0;
        var a = As[r] || {}, n = a.accessibleNameRequired;
        return !!(n || Se(t));
      }
      o($A, "noExplicitNameRequired");
      var Ef = $A;
      function UA(e, t) {
        var r = hr(t), a = r.namingMethods;
        return !(a && a.length !== 0 || Ee(t) === "combobox" && dt(t, 'input:not([type="hidden"])').length || tu(t, {
          popupRoles: ["listbox"]
        }));
      }
      o(UA, "noNamingMethodMatches");
      var GA = UA;
      function WA(e, t) {
        var r = parseInt(t.attr("tabindex"), 10);
        return isNaN(r) || r >= 0;
      }
      o(WA, "noNegativeTabindexMatches");
      var YA = WA;
      function XA(e, t) {
        return !t.attr("role");
      }
      o(XA, "noRoleMatches");
      var KA = XA;
      function ZA(e, t) {
        return t.props.nodeName !== "html";
      }
      o(ZA, "notHtmlMatches");
      var JA = ZA, QA = /* @__PURE__ */ o(function(t, r) {
        return [Ef, e3].every(function(a) {
          return a(t, r);
        });
      }, "object_is_loaded_matches_default");
      function e3(e) {
        var t;
        if (!(e != null && (t = e.ownerDocument) !== null && t !== void 0 && t.createRange))
          return !0;
        var r = e.ownerDocument.createRange();
        return r.setStart(e, 0), r.setEnd(e, e.childNodes.length), r.getClientRects().length === 0;
      }
      o(e3, "objectHasLoaded");
      function t3(e) {
        var t = Array.from(e.parentNode.childNodes), r = e.textContent.trim(), a = /[.!?:;](?![.!?:;])/g;
        if (r.length === 0 || (r.match(a) || []).length >= 2)
          return !1;
        var n = t.slice(t.indexOf(e) + 1).filter(function(i) {
          return i.nodeName.toUpperCase() === "P" && i.textContent.trim() !== "";
        });
        return n.length !== 0;
      }
      o(t3, "pAsHeadingMatches");
      var r3 = t3;
      function a3(e, t) {
        return Ft(t, {
          chromiumRoles: !0
        }) !== null;
      }
      o(a3, "presentationRoleConflictMatches");
      var n3 = a3;
      function i3(e, t) {
        return Bt(e, 13) !== void 0 && tu(t) === !1 && o3(t);
      }
      o(i3, "scrollableRegionFocusableMatches");
      function o3(e) {
        return dt(e, "*").some(function(t) {
          return la(t, !0, !0);
        });
      }
      o(o3, "isNoneEmptyElement");
      function u3(e) {
        return So(e) && Ka(e);
      }
      o(u3, "skipLinkMatches");
      var l3 = u3;
      function s3(e, t) {
        var r = de(t);
        return ["treegrid", "grid", "table"].includes(r);
      }
      o(s3, "tableOrGridRoleMatches");
      function c3(e, t) {
        return d3.every(function(r) {
          return r(e, t);
        });
      }
      o(c3, "widgetNotInline");
      var d3 = [function(e, t) {
        return Cf(t);
      }, function(e, t) {
        return f3(t);
      }, function(e, t) {
        return !mu(e, t);
      }, function(e, t) {
        return Se(t);
      }, function(e, t) {
        return wt(t) || !p3(t);
      }, function(e) {
        return !uo(e, {
          noLengthCompare: !0
        });
      }];
      function Cf(e) {
        return Rt(e) === "widget";
      }
      o(Cf, "isWidgetType");
      function f3(e) {
        return e.props.nodeName !== "area";
      }
      o(f3, "isNotAreaElement");
      var p3 = Be(/* @__PURE__ */ o(function e(t) {
        return t != null && t.parent ? Cf(t.parent) && wt(t.parent) ? !0 : e(t.parent) : !1;
      }, "hasWidgetAncestorInTabOrderMemoized"));
      function m3(e) {
        return e.ownerDocument.defaultView.self === e.ownerDocument.defaultView.top;
      }
      o(m3, "windowIsTopMatches");
      var h3 = m3;
      function v3(e) {
        var t = yr(e.getAttribute("lang")), r = yr(e.getAttribute("xml:lang"));
        return Ln(t) && Ln(r);
      }
      o(v3, "xmlLangMismatchMatches");
      var g3 = v3, b3 = {
        "abstractrole-evaluate": yD,
        "accesskeys-after": Fx,
        "accesskeys-evaluate": Rx,
        "alt-space-value-evaluate": Kx,
        "aria-allowed-attr-evaluate": wD,
        "aria-allowed-attr-matches": OC,
        "aria-allowed-role-evaluate": _D,
        "aria-allowed-role-matches": NC,
        "aria-busy-evaluate": xD,
        "aria-conditional-attr-evaluate": FD,
        "aria-conditional-checkbox-attr-evaluate": N1,
        "aria-conditional-row-attr-evaluate": I1,
        "aria-errormessage-evaluate": TD,
        "aria-has-attr-matches": PC,
        "aria-hidden-body-evaluate": kD,
        "aria-hidden-focus-matches": BC,
        "aria-label-evaluate": XE,
        "aria-labelledby-evaluate": ZE,
        "aria-level-evaluate": OD,
        "aria-prohibited-attr-evaluate": MD,
        "aria-required-attr-evaluate": ID,
        "aria-required-children-evaluate": qD,
        "aria-required-children-matches": jC,
        "aria-required-parent-evaluate": WD,
        "aria-required-parent-matches": VC,
        "aria-roledescription-evaluate": XD,
        "aria-unsupported-attr-evaluate": ZD,
        "aria-valid-attr-evaluate": QD,
        "aria-valid-attr-value-evaluate": e_,
        "attr-non-space-content-evaluate": mx,
        "autocomplete-appropriate-evaluate": cx,
        "autocomplete-matches": $C,
        "autocomplete-valid-evaluate": fx,
        "avoid-inline-spacing-evaluate": QE,
        "braille-label-equivalent-evaluate": r_,
        "braille-roledescription-equivalent-evaluate": a_,
        "bypass-matches": WC,
        "caption-evaluate": I5,
        "caption-faked-evaluate": vC,
        "color-contrast-evaluate": ex,
        "color-contrast-matches": XC,
        "css-orientation-lock-evaluate": H5,
        "data-table-large-matches": QC,
        "data-table-matches": tA,
        "deprecatedrole-evaluate": n_,
        "dlitem-evaluate": E5,
        "doc-has-title-evaluate": tC,
        "duplicate-id-active-matches": aA,
        "duplicate-id-after": UE,
        "duplicate-id-aria-matches": iA,
        "duplicate-id-evaluate": WE,
        "duplicate-id-misc-matches": uA,
        "duplicate-img-label-evaluate": Jx,
        "exists-evaluate": aC,
        "explicit-evaluate": e5,
        "fallbackrole-evaluate": u_,
        "focusable-content-evaluate": Sx,
        "focusable-disabled-evaluate": Mx,
        "focusable-element-evaluate": Ix,
        "focusable-modal-open-evaluate": Lx,
        "focusable-no-name-evaluate": qx,
        "focusable-not-tabbable-evaluate": zx,
        "frame-focusable-content-evaluate": Vx,
        "frame-focusable-content-matches": sA,
        "frame-tested-after": L5,
        "frame-tested-evaluate": q5,
        "frame-title-has-text-matches": dA,
        "has-alt-evaluate": iC,
        "has-descendant-after": vx,
        "has-descendant-evaluate": bx,
        "has-global-aria-attribute-evaluate": s_,
        "has-implicit-chromium-role-matches": pA,
        "has-lang-evaluate": b5,
        "has-text-content-evaluate": yx,
        "has-widget-role-evaluate": d_,
        "heading-matches": mA,
        "heading-order-after": rE,
        "heading-order-evaluate": cE,
        "help-same-as-label-evaluate": r5,
        "hidden-content-evaluate": kC,
        "hidden-explicit-label-evaluate": n5,
        "html-namespace-matches": gA,
        "html5-scope-evaluate": bC,
        "identical-links-same-purpose-after": fE,
        "identical-links-same-purpose-evaluate": _E,
        "identical-links-same-purpose-matches": yA,
        "implicit-evaluate": o5,
        "inline-style-property-evaluate": oC,
        "inserted-into-focus-order-matches": DA,
        "internal-link-present-evaluate": EE,
        "invalid-children-evaluate": C5,
        "invalidrole-evaluate": p_,
        "is-element-focusable-evaluate": h_,
        "is-initiator-matches": xf,
        "is-on-screen-evaluate": sC,
        "is-visible-matches": _A,
        "is-visible-on-screen-matches": xA,
        "label-content-name-mismatch-evaluate": l5,
        "label-content-name-mismatch-matches": CA,
        "label-matches": FA,
        "landmark-has-body-context-matches": RA,
        "landmark-is-top-level-evaluate": $x,
        "landmark-is-unique-after": m5,
        "landmark-is-unique-evaluate": v5,
        "landmark-unique-matches": SA,
        "layout-table-matches": IA,
        "link-in-text-block-evaluate": ix,
        "link-in-text-block-matches": LA,
        "link-in-text-block-style-evaluate": ux,
        "listitem-evaluate": T5,
        "matches-definition-evaluate": Dx,
        "meta-refresh-evaluate": FE,
        "meta-viewport-scale-evaluate": U5,
        "multiple-label-evaluate": c5,
        "nested-interactive-matches": qA,
        "no-autoplay-audio-evaluate": z5,
        "no-autoplay-audio-matches": zA,
        "no-empty-role-matches": HA,
        "no-explicit-name-required-matches": Ef,
        "no-focusable-content-evaluate": Ux,
        "no-implicit-explicit-label-evaluate": g_,
        "no-naming-method-matches": GA,
        "no-negative-tabindex-matches": YA,
        "no-role-matches": KA,
        "non-empty-if-present-evaluate": dC,
        "not-html-matches": JA,
        "object-is-loaded-matches": QA,
        "only-dlitems-evaluate": R5,
        "only-listitems-evaluate": S5,
        "p-as-heading-evaluate": SE,
        "p-as-heading-matches": r3,
        "page-no-duplicate-after": xx,
        "page-no-duplicate-evaluate": Cx,
        "presentation-role-conflict-matches": n3,
        "presentational-role-evaluate": fC,
        "region-after": ME,
        "region-evaluate": IE,
        "same-caption-summary-evaluate": yC,
        "scope-value-evaluate": xC,
        "scrollable-region-focusable-matches": i3,
        "skip-link-evaluate": qE,
        "skip-link-matches": l3,
        "structured-dlitems-evaluate": M5,
        "svg-namespace-matches": mu,
        "svg-non-empty-title-evaluate": mC,
        "tabindex-evaluate": Yx,
        "table-or-grid-role-matches": s3,
        "target-offset-evaluate": W5,
        "target-size-evaluate": X5,
        "td-has-header-evaluate": CC,
        "td-headers-attr-evaluate": AC,
        "th-has-data-cells-evaluate": TC,
        "title-only-evaluate": f5,
        "unique-frame-title-after": zE,
        "unique-frame-title-evaluate": HE,
        "unsupportedrole-evaluate": y_,
        "valid-lang-evaluate": w5,
        "valid-scrollable-semantics-evaluate": C_,
        "widget-not-inline-matches": c3,
        "window-is-top-matches": h3,
        "xml-lang-mismatch-evaluate": _5,
        "xml-lang-mismatch-matches": g3
      }, Gn = b3;
      function y3(e) {
        this.id = e.id, this.data = null, this.relatedNodes = [], this.result = null;
      }
      o(y3, "CheckResult");
      var hu = y3;
      function vu(e) {
        if (typeof e == "string") {
          if (Gn[e])
            return Gn[e];
          if (/^\s*function[\s\w]*\(/.test(e))
            return new Function("return " + e + ";")();
          throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e));
        }
        return e;
      }
      o(vu, "createExecutionContext");
      function Af() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return (Array.isArray(e) || S(e) !== "object") && (e = {
          value: e
        }), e;
      }
      o(Af, "normalizeOptions");
      function Lr(e) {
        e && (this.id = e.id, this.configure(e));
      }
      o(Lr, "Check"), Lr.prototype.enabled = !0, Lr.prototype.run = /* @__PURE__ */ o(function(t, r, a, n, i) {
        r = r || {};
        var u = r.hasOwnProperty("enabled") ? r.enabled : this.enabled, l = this.getOptions(r.options);
        if (u) {
          var s = new hu(this), c = di(s, r, n, i), d;
          try {
            d = this.evaluate.call(c, t.actualNode, l, t, a);
          } catch (f) {
            t && t.actualNode && (f.errorNode = pt.toSpec(t)), i(f);
            return;
          }
          c.isAsync || (s.result = d, n(s));
        } else
          n(null);
      }, "run"), Lr.prototype.runSync = /* @__PURE__ */ o(function(t, r, a) {
        r = r || {};
        var n = r, i = n.enabled, u = i === void 0 ? this.enabled : i;
        if (!u)
          return null;
        var l = this.getOptions(r.options), s = new hu(this), c = di(s);
        c.async = /* @__PURE__ */ o(function() {
          throw new Error("Cannot run async check while in a synchronous run");
        }, "async");
        var d;
        try {
          d = this.evaluate.call(c, t.actualNode, l, t, a);
        } catch (f) {
          throw t && t.actualNode && (f.errorNode = pt.toSpec(t)), f;
        }
        return s.result = d, s;
      }, "runSync"), Lr.prototype.configure = /* @__PURE__ */ o(function(t) {
        var r = this;
        (!t.evaluate || Gn[t.evaluate]) && (this._internalCheck = !0), t.hasOwnProperty("enabled") && (this.enabled = t.enabled), t.hasOwnProperty("options") && (this._internalCheck ? this.options = Af(t.options) : this.options = t.options), ["evaluate", "after"].filter(function(a) {
          return t.hasOwnProperty(a);
        }).forEach(function(a) {
          return r[a] = vu(t[a]);
        });
      }, "configure2"), Lr.prototype.getOptions = /* @__PURE__ */ o(function(t) {
        return this._internalCheck ? Fi(this.options, Af(t || {})) : t || this.options;
      }, "getOptions");
      var Ff = Lr;
      function w3(e) {
        this.id = e.id, this.result = ce.NA, this.pageLevel = e.pageLevel, this.impact = null, this.nodes = [];
      }
      o(w3, "RuleResult");
      var Wn = w3;
      function nt(e, t) {
        this._audit = t, this.id = e.id, this.selector = e.selector || "*", e.impact && (he(ce.impact.includes(e.impact), "Impact ".concat(e.impact, " is not a valid impact")), this.impact = e.impact), this.excludeHidden = typeof e.excludeHidden == "boolean" ? e.excludeHidden : !0, this.enabled = typeof e.enabled == "boolean" ? e.enabled : !0, this.pageLevel = typeof e.pageLevel == "boolean" ? e.pageLevel : !1, this.reviewOnFail = typeof e.reviewOnFail == "boolean" ? e.reviewOnFail : !1, this.any = e.any || [], this.all = e.all || [], this.none = e.none || [], this.tags = e.tags || [], this.preload = !!e.preload, this.actIds = e.actIds, e.matches && (this.matches = vu(e.matches));
      }
      o(nt, "Rule"), nt.prototype.matches = /* @__PURE__ */ o(function() {
        return !0;
      }, "matches3"), nt.prototype.gather = /* @__PURE__ */ o(function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = "mark_gather_start_" + this.id, n = "mark_gather_end_" + this.id, i = "mark_isVisibleToScreenReaders_start_" + this.id, u = "mark_isVisibleToScreenReaders_end_" + this.id;
        r.performanceTimer && qe.mark(a);
        var l = Xo(this.selector, t);
        return this.excludeHidden && (r.performanceTimer && qe.mark(i), l = l.filter(function(s) {
          return Te(s);
        }), r.performanceTimer && (qe.mark(u), qe.measure("rule_" + this.id + "#gather_axe.utils.isVisibleToScreenReaders", i, u))), r.performanceTimer && (qe.mark(n), qe.measure("rule_" + this.id + "#gather", a, n)), l;
      }, "gather"), nt.prototype.runChecks = /* @__PURE__ */ o(function(t, r, a, n, i, u) {
        var l = this, s = Ct();
        this[t].forEach(function(c) {
          var d = l._audit.checks[c.id || c], f = Mn(d, l.id, a);
          s.defer(function(p, m) {
            d.run(r, f, n, p, m);
          });
        }), s.then(function(c) {
          c = c.filter(function(d) {
            return d;
          }), i({
            type: t,
            results: c
          });
        }).catch(u);
      }, "runChecks"), nt.prototype.runChecksSync = /* @__PURE__ */ o(function(t, r, a, n) {
        var i = this, u = [];
        return this[t].forEach(function(l) {
          var s = i._audit.checks[l.id || l], c = Mn(s, i.id, a);
          u.push(s.runSync(r, c, n));
        }), u = u.filter(function(l) {
          return l;
        }), {
          type: t,
          results: u
        };
      }, "runChecksSync"), nt.prototype.run = /* @__PURE__ */ o(function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0;
        a.performanceTimer && this._trackPerformance();
        var u = Ct(), l = new Wn(this), s;
        try {
          s = this.gatherAndMatchNodes(t, a);
        } catch (c) {
          i(new Vr({
            cause: c,
            ruleId: this.id
          }));
          return;
        }
        a.performanceTimer && this._logGatherPerformance(s), s.forEach(function(c) {
          u.defer(function(d, f) {
            var p = Ct();
            ["any", "all", "none"].forEach(function(m) {
              p.defer(function(h, v) {
                r.runChecks(m, c, a, t, h, v);
              });
            }), p.then(function(m) {
              var h = Tf(m);
              h && (h.node = new Nt(c), l.nodes.push(h), r.reviewOnFail && (["any", "all"].forEach(function(v) {
                h[v].forEach(function(b) {
                  b.result === !1 && (b.result = void 0);
                });
              }), h.none.forEach(function(v) {
                v.result === !0 && (v.result = void 0);
              }))), d();
            }).catch(function(m) {
              return f(m);
            });
          });
        }), u.defer(function(c) {
          return setTimeout(c, 0);
        }), a.performanceTimer && this._logRulePerformance(), u.then(function() {
          return n(l);
        }).catch(function(c) {
          return i(c);
        });
      }, "run2"), nt.prototype.runSync = /* @__PURE__ */ o(function(t) {
        var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        a.performanceTimer && this._trackPerformance();
        var n = new Wn(this), i;
        try {
          i = this.gatherAndMatchNodes(t, a);
        } catch (u) {
          throw new Vr({
            cause: u,
            ruleId: this.id
          });
        }
        return a.performanceTimer && this._logGatherPerformance(i), i.forEach(function(u) {
          var l = [];
          ["any", "all", "none"].forEach(function(c) {
            l.push(r.runChecksSync(c, u, a, t));
          });
          var s = Tf(l);
          s && (s.node = u.actualNode ? new Nt(u) : null, n.nodes.push(s), r.reviewOnFail && (["any", "all"].forEach(function(c) {
            s[c].forEach(function(d) {
              d.result === !1 && (d.result = void 0);
            });
          }), s.none.forEach(function(c) {
            c.result === !0 && (c.result = void 0);
          })));
        }), a.performanceTimer && this._logRulePerformance(), n;
      }, "runSync2"), nt.prototype._trackPerformance = /* @__PURE__ */ o(function() {
        this._markStart = "mark_rule_start_" + this.id, this._markEnd = "mark_rule_end_" + this.id, this._markChecksStart = "mark_runchecks_start_" + this.id, this._markChecksEnd = "mark_runchecks_end_" + this.id;
      }, "_trackPerformance"), nt.prototype._logGatherPerformance = /* @__PURE__ */ o(function(t) {
        or("gather (", t.length, "):", qe.timeElapsed() + "ms"), qe.mark(this._markChecksStart);
      }, "_logGatherPerformance"), nt.prototype._logRulePerformance = /* @__PURE__ */ o(function() {
        qe.mark(this._markChecksEnd), qe.mark(this._markEnd), qe.measure("runchecks_" + this.id, this._markChecksStart, this._markChecksEnd), qe.measure("rule_" + this.id, this._markStart, this._markEnd);
      }, "_logRulePerformance");
      function Tf(e) {
        if (e.length) {
          var t = !1, r = {};
          return e.forEach(function(a) {
            var n = a.results.filter(function(i) {
              return i;
            });
            r[a.type] = n, n.length && (t = !0);
          }), t ? r : null;
        }
      }
      o(Tf, "getResult"), nt.prototype.gatherAndMatchNodes = /* @__PURE__ */ o(function(t, r) {
        var a = this, n = "mark_matches_start_" + this.id, i = "mark_matches_end_" + this.id, u = this.gather(t, r);
        return r.performanceTimer && qe.mark(n), u = u.filter(function(l) {
          return a.matches(l.actualNode, l, t);
        }), r.performanceTimer && (qe.mark(i), qe.measure("rule_" + this.id + "#matches", n, i)), u;
      }, "gatherAndMatchNodes");
      function D3(e) {
        return Ua(e).map(function(t) {
          var r = e._audit.checks[t.id || t];
          return r && typeof r.after == "function" ? r : null;
        }).filter(Boolean);
      }
      o(D3, "findAfterChecks");
      function _3(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = Ua(a);
          n.forEach(function(i) {
            i.id === t && (i.node = a.node, r.push(i));
          });
        }), r;
      }
      o(_3, "findCheckResults");
      function x3(e) {
        return e.filter(function(t) {
          return t.filtered !== !0;
        });
      }
      o(x3, "filterChecks");
      function E3(e) {
        var t = ["any", "all", "none"], r = e.nodes.filter(function(a) {
          var n = 0;
          return t.forEach(function(i) {
            a[i] = x3(a[i]), n += a[i].length;
          }), n > 0;
        });
        return e.pageLevel && r.length && (r = [r.reduce(function(a, n) {
          if (a)
            return t.forEach(function(i) {
              a[i].push.apply(a[i], n[i]);
            }), a;
        })]), r;
      }
      o(E3, "sanitizeNodes"), nt.prototype.after = /* @__PURE__ */ o(function(t, r) {
        var a = this, n = D3(this), i = this.id;
        return n.forEach(function(u) {
          var l = _3(t.nodes, u.id), s = Mn(u, i, r), c = u.after(l, s.options);
          a.reviewOnFail && c.forEach(function(d) {
            var f = (a.any.includes(d.id) || a.all.includes(d.id)) && d.result === !1, p = a.none.includes(d.id) && d.result === !0;
            (f || p) && (d.result = void 0);
          }), l.forEach(function(d) {
            delete d.node, c.indexOf(d) === -1 && (d.filtered = !0);
          });
        }), t.nodes = E3(t), t;
      }, "after"), nt.prototype.configure = /* @__PURE__ */ o(function(t) {
        t.hasOwnProperty("selector") && (this.selector = t.selector), t.hasOwnProperty("excludeHidden") && (this.excludeHidden = typeof t.excludeHidden == "boolean" ? t.excludeHidden : !0), t.hasOwnProperty("enabled") && (this.enabled = typeof t.enabled == "boolean" ? t.enabled : !0), t.hasOwnProperty("pageLevel") && (this.pageLevel = typeof t.pageLevel == "boolean" ? t.pageLevel : !1), t.hasOwnProperty("reviewOnFail") && (this.reviewOnFail = typeof t.reviewOnFail == "boolean" ? t.reviewOnFail : !1), t.hasOwnProperty("any") && (this.any = t.any), t.hasOwnProperty("all") && (this.all = t.all), t.hasOwnProperty("none") && (this.none = t.none), t.hasOwnProperty("tags") && (this.tags = t.tags), t.hasOwnProperty("actIds") && (this.actIds = t.actIds), t.hasOwnProperty("matches") && (this.matches = vu(t.matches)), t.impact && (he(ce.impact.includes(t.impact), "Impact ".concat(t.impact, " is not a valid impact")), this.impact = t.impact);
      }, "configure3");
      var Br = Et(Wu()), qr = /\{\{.+?\}\}/g, C3 = function() {
        function e(t) {
          _t(this, e), this.lang = "en", this.defaultConfig = t, this.standards = ve, this._init(), this._defaultLocale = null;
        }
        return o(e, "Audit"), xt(e, [{
          key: "_setDefaultLocale",
          value: /* @__PURE__ */ o(function() {
            if (!this._defaultLocale) {
              for (var r = {
                checks: {},
                rules: {},
                failureSummaries: {},
                incompleteFallbackMessage: "",
                lang: this.lang
              }, a = Object.keys(this.data.checks), n = 0; n < a.length; n++) {
                var i = a[n], u = this.data.checks[i], l = u.messages, s = l.pass, c = l.fail, d = l.incomplete;
                r.checks[i] = {
                  pass: s,
                  fail: c,
                  incomplete: d
                };
              }
              for (var f = Object.keys(this.data.rules), p = 0; p < f.length; p++) {
                var m = f[p], h = this.data.rules[m], v = h.description, b = h.help;
                r.rules[m] = {
                  description: v,
                  help: b
                };
              }
              for (var g = Object.keys(this.data.failureSummaries), y = 0; y < g.length; y++) {
                var _ = g[y], x = this.data.failureSummaries[_], T = x.failureMessage;
                r.failureSummaries[_] = {
                  failureMessage: T
                };
              }
              r.incompleteFallbackMessage = this.data.incompleteFallbackMessage, this._defaultLocale = r;
            }
          }, "_setDefaultLocale")
        }, {
          key: "_resetLocale",
          value: /* @__PURE__ */ o(function() {
            var r = this._defaultLocale;
            !r || this.applyLocale(r);
          }, "_resetLocale")
        }, {
          key: "_applyCheckLocale",
          value: /* @__PURE__ */ o(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.checks[i])
                throw new Error('Locale provided for unknown check: "'.concat(i, '"'));
              this.data.checks[i] = F3(this.data.checks[i], r[i]);
            }
          }, "_applyCheckLocale")
        }, {
          key: "_applyRuleLocale",
          value: /* @__PURE__ */ o(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.rules[i])
                throw new Error('Locale provided for unknown rule: "'.concat(i, '"'));
              this.data.rules[i] = T3(this.data.rules[i], r[i]);
            }
          }, "_applyRuleLocale")
        }, {
          key: "_applyFailureSummaries",
          value: /* @__PURE__ */ o(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.failureSummaries[i])
                throw new Error('Locale provided for unknown failureMessage: "'.concat(i, '"'));
              this.data.failureSummaries[i] = R3(this.data.failureSummaries[i], r[i]);
            }
          }, "_applyFailureSummaries")
        }, {
          key: "applyLocale",
          value: /* @__PURE__ */ o(function(r) {
            this._setDefaultLocale(), r.checks && this._applyCheckLocale(r.checks), r.rules && this._applyRuleLocale(r.rules), r.failureSummaries && this._applyFailureSummaries(r.failureSummaries, "failureSummaries"), r.incompleteFallbackMessage && (this.data.incompleteFallbackMessage = k3(this.data.incompleteFallbackMessage, r.incompleteFallbackMessage)), r.lang && (this.lang = r.lang);
          }, "applyLocale")
        }, {
          key: "setAllowedOrigins",
          value: /* @__PURE__ */ o(function(r) {
            var a = kf();
            this.allowedOrigins = [];
            var n = Fe(r), i;
            try {
              for (n.s(); !(i = n.n()).done; ) {
                var u = i.value;
                if (u === ce.allOrigins) {
                  this.allowedOrigins = ["*"];
                  return;
                } else
                  u !== ce.sameOrigin ? this.allowedOrigins.push(u) : a && this.allowedOrigins.push(a);
              }
            } catch (l) {
              n.e(l);
            } finally {
              n.f();
            }
          }, "setAllowedOrigins")
        }, {
          key: "_init",
          value: /* @__PURE__ */ o(function() {
            var r = A3(this.defaultConfig);
            this.lang = r.lang || "en", this.reporter = r.reporter, this.commands = {}, this.rules = [], this.checks = {}, this.brand = "axe", this.application = "axeAPI", this.tagExclude = ["experimental"], this.noHtml = r.noHtml, this.allowedOrigins = r.allowedOrigins, Sf(r.rules, this, "addRule"), Sf(r.checks, this, "addCheck"), this.data = {}, this.data.checks = r.data && r.data.checks || {}, this.data.rules = r.data && r.data.rules || {}, this.data.failureSummaries = r.data && r.data.failureSummaries || {}, this.data.incompleteFallbackMessage = r.data && r.data.incompleteFallbackMessage || "", this._constructHelpUrls();
          }, "_init")
        }, {
          key: "registerCommand",
          value: /* @__PURE__ */ o(function(r) {
            this.commands[r.id] = r.callback;
          }, "registerCommand")
        }, {
          key: "addRule",
          value: /* @__PURE__ */ o(function(r) {
            r.metadata && (this.data.rules[r.id] = r.metadata);
            var a = this.getRule(r.id);
            a ? a.configure(r) : this.rules.push(new nt(r, this));
          }, "addRule")
        }, {
          key: "addCheck",
          value: /* @__PURE__ */ o(function(r) {
            var a = r.metadata;
            S(a) === "object" && (this.data.checks[r.id] = a, S(a.messages) === "object" && Object.keys(a.messages).filter(function(n) {
              return a.messages.hasOwnProperty(n) && typeof a.messages[n] == "string";
            }).forEach(function(n) {
              a.messages[n].indexOf("function") === 0 && (a.messages[n] = new Function("return " + a.messages[n] + ";")());
            })), this.checks[r.id] ? this.checks[r.id].configure(r) : this.checks[r.id] = new Ff(r);
          }, "addCheck")
        }, {
          key: "run",
          value: /* @__PURE__ */ o(function(r, a, n, i) {
            this.normalizeOptions(a), Nt.setRunOptions(a), w._selectCache = [];
            var u = S3(this.rules, r, a), l = u.now, s = u.later, c = Ct();
            l.forEach(function(p) {
              c.defer(Of(p, r, a));
            });
            var d = Ct();
            s.length && d.defer(function(p) {
              o1(a).then(function(m) {
                return p(m);
              }).catch(function(m) {
                console.warn("Couldn't load preload assets: ", m), p(void 0);
              });
            });
            var f = Ct();
            f.defer(c), f.defer(d), f.then(function(p) {
              var m = p.pop();
              if (m && m.length) {
                var h = m[0];
                h && (r = pe({}, r, h));
              }
              var v = p[0];
              if (!s.length) {
                w._selectCache = void 0, n(v.filter(function(g) {
                  return !!g;
                }));
                return;
              }
              var b = Ct();
              s.forEach(function(g) {
                var y = Of(g, r, a);
                b.defer(y);
              }), b.then(function(g) {
                w._selectCache = void 0, n(v.concat(g).filter(function(y) {
                  return !!y;
                }));
              }).catch(i);
            }).catch(i);
          }, "run")
        }, {
          key: "after",
          value: /* @__PURE__ */ o(function(r, a) {
            var n = this.rules;
            return r.map(function(i) {
              var u = Qr(n, "id", i.id);
              if (!u)
                throw new Error("Result for unknown rule. You may be running mismatch axe-core versions");
              return u.after(i, a);
            });
          }, "after")
        }, {
          key: "getRule",
          value: /* @__PURE__ */ o(function(r) {
            return this.rules.find(function(a) {
              return a.id === r;
            });
          }, "getRule")
        }, {
          key: "normalizeOptions",
          value: /* @__PURE__ */ o(function(r) {
            var a = this, n = [], i = [];
            if (a.rules.forEach(function(d) {
              i.push(d.id), d.tags.forEach(function(f) {
                n.includes(f) || n.push(f);
              });
            }), ["object", "string"].includes(S(r.runOnly))) {
              if (typeof r.runOnly == "string" && (r.runOnly = [r.runOnly]), Array.isArray(r.runOnly)) {
                var u = r.runOnly.find(function(d) {
                  return n.includes(d);
                }), l = r.runOnly.find(function(d) {
                  return i.includes(d);
                });
                if (u && l)
                  throw new Error("runOnly cannot be both rules and tags");
                l ? r.runOnly = {
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
                  if (!i.includes(d))
                    throw new Error("unknown rule `" + d + "` in options.runOnly");
                });
              else if (["tag", "tags", void 0].includes(s.type)) {
                s.type = "tag";
                var c = s.values.filter(function(d) {
                  return !n.includes(d) && !/wcag2[1-3]a{1,3}/.test(d);
                });
                c.length !== 0 && w.log("Could not find tags `" + c.join("`, `") + "`");
              } else
                throw new Error("Unknown runOnly type '".concat(s.type, "'"));
            }
            return S(r.rules) === "object" && Object.keys(r.rules).forEach(function(d) {
              if (!i.includes(d))
                throw new Error("unknown rule `" + d + "` in options.rules");
            }), r;
          }, "normalizeOptions")
        }, {
          key: "setBranding",
          value: /* @__PURE__ */ o(function(r) {
            var a = {
              brand: this.brand,
              application: this.application
            };
            typeof r == "string" && (this.application = r), r && r.hasOwnProperty("brand") && r.brand && typeof r.brand == "string" && (this.brand = r.brand), r && r.hasOwnProperty("application") && r.application && typeof r.application == "string" && (this.application = r.application), this._constructHelpUrls(a);
          }, "setBranding")
        }, {
          key: "_constructHelpUrls",
          value: /* @__PURE__ */ o(function() {
            var r = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = (w.version.match(/^[1-9][0-9]*\.[0-9]+/) || ["x.y"])[0];
            this.rules.forEach(function(i) {
              r.data.rules[i.id] || (r.data.rules[i.id] = {});
              var u = r.data.rules[i.id];
              (typeof u.helpUrl != "string" || a && u.helpUrl === Mf(a, i.id, n)) && (u.helpUrl = Mf(r, i.id, n));
            });
          }, "_constructHelpUrls")
        }, {
          key: "resetRulesAndChecks",
          value: /* @__PURE__ */ o(function() {
            this._init(), this._resetLocale();
          }, "resetRulesAndChecks")
        }]), e;
      }(), Rf = C3;
      function kf() {
        if (D.origin && D.origin !== "null")
          return D.origin;
        if (D.location && D.location.origin && D.location.origin !== "null")
          return D.location.origin;
      }
      o(kf, "getDefaultOrigin");
      function A3(e) {
        var t;
        if (e ? (t = It(e), t.commons = e.commons) : t = {}, t.reporter = t.reporter || null, t.noHtml = t.noHtml || !1, !t.allowedOrigins) {
          var r = kf();
          t.allowedOrigins = r ? [r] : [];
        }
        return t.rules = t.rules || [], t.checks = t.checks || [], t.data = pe({
          checks: {},
          rules: {}
        }, t.data), t;
      }
      o(A3, "getDefaultConfiguration");
      function Sf(e, t, r) {
        var a, n;
        for (a = 0, n = e.length; a < n; a++)
          t[r](e[a]);
      }
      o(Sf, "unpackToObject");
      var F3 = /* @__PURE__ */ o(function(t, r) {
        var a = r.pass, n = r.fail;
        return typeof a == "string" && qr.test(a) && (a = Br.default.compile(a)), typeof n == "string" && qr.test(n) && (n = Br.default.compile(n)), pe({}, t, {
          messages: {
            pass: a || t.messages.pass,
            fail: n || t.messages.fail,
            incomplete: S(t.messages.incomplete) === "object" ? pe({}, t.messages.incomplete, r.incomplete) : r.incomplete
          }
        });
      }, "mergeCheckLocale"), T3 = /* @__PURE__ */ o(function(t, r) {
        var a = r.help, n = r.description;
        return typeof a == "string" && qr.test(a) && (a = Br.default.compile(a)), typeof n == "string" && qr.test(n) && (n = Br.default.compile(n)), pe({}, t, {
          help: a || t.help,
          description: n || t.description
        });
      }, "mergeRuleLocale"), R3 = /* @__PURE__ */ o(function(t, r) {
        var a = r.failureMessage;
        return typeof a == "string" && qr.test(a) && (a = Br.default.compile(a)), pe({}, t, {
          failureMessage: a || t.failureMessage
        });
      }, "mergeFailureMessage"), k3 = /* @__PURE__ */ o(function(t, r) {
        return typeof r == "string" && qr.test(r) && (r = Br.default.compile(r)), r || t;
      }, "mergeFallbackMessage");
      function S3(e, t, r) {
        var a = {
          now: [],
          later: []
        }, n = e.reduce(function(i, u) {
          return d1(u, t, r) ? u.preload ? (i.later.push(u), i) : (i.now.push(u), i) : i;
        }, a);
        return n;
      }
      o(S3, "getRulesToRun");
      function Of(e, t, r) {
        return r.performanceTimer && qe.mark("mark_rule_start_" + e.id), function(a, n) {
          e.run(t, r, function(i) {
            a(i);
          }, function(i) {
            if (r.debug)
              n(i);
            else {
              var u = Object.assign(new Wn(e), {
                result: ce.CANTTELL,
                description: "An error occured while running this rule",
                message: i.message,
                stack: i.stack,
                error: i,
                errorNode: i.errorNode
              });
              a(u);
            }
          });
        };
      }
      o(Of, "getDefferedRule");
      function Mf(e, t, r) {
        var a = e.brand, n = e.application, i = e.lang;
        return ce.helpUrlBase + a + "/" + (r || w.version.substring(0, w.version.lastIndexOf("."))) + "/" + t + "?application=" + encodeURIComponent(n) + (i && i !== "en" ? "&lang=" + encodeURIComponent(i) : "");
      }
      o(Mf, "getHelpUrl");
      function Nf(e) {
        var t = D && "Node" in D && "NodeList" in D, r = !!N;
        if (!(t && r)) {
          if (!e || !e.ownerDocument)
            throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.');
          r || (le.set("globalDocumentSet", !0), N = e.ownerDocument), t || (le.set("globalWindowSet", !0), D = N.defaultView);
        }
      }
      o(Nf, "setupGlobals");
      function O3() {
        le.get("globalDocumentSet") && (le.set("globalDocumentSet", !1), N = null), le.get("globalWindowSet") && (le.set("globalWindowSet", !1), D = null);
      }
      o(O3, "resetGlobals");
      function M3() {
        O3(), w._memoizedFns.forEach(function(e) {
          return e.clear();
        }), le.clear(), w._tree = void 0, w._selectorData = void 0, w._selectCache = void 0;
      }
      o(M3, "teardown");
      var Zt = M3;
      function If(e, t, r, a) {
        try {
          e = new Nn(e), w._tree = e.flatTree, w._selectorData = Ba(e.flatTree);
        } catch (u) {
          return Zt(), a(u);
        }
        var n = Ct(), i = w._audit;
        t.performanceTimer && qe.auditStart(), e.frames.length && t.iframes !== !1 && n.defer(function(u, l) {
          jl(e, t, "rules", null, u, l);
        }), n.defer(function(u, l) {
          i.run(e, t, u, l);
        }), n.then(function(u) {
          try {
            t.performanceTimer && qe.auditEnd();
            var l = Ga(u.map(function(s) {
              return {
                results: s
              };
            }));
            e.initiator && (l = i.after(l, t), l.forEach(In), l = l.map(Ur));
            try {
              r(l, Zt);
            } catch (s) {
              Zt(), or(s);
            }
          } catch (s) {
            Zt(), a(s);
          }
        }).catch(function(u) {
          Zt(), a(u);
        });
      }
      o(If, "runRules");
      function N3(e) {
        w._audit = new Rf(e);
      }
      o(N3, "load");
      function I3(e, t, r) {
        var a = r, n = /* @__PURE__ */ o(function(s) {
          s instanceof Error || (s = new Error(s)), r(s);
        }, "reject2"), i = e && e.context || {};
        i.hasOwnProperty("include") && !i.include.length && (i.include = [N]);
        var u = e && e.options || {};
        switch (e.command) {
          case "rules":
            return If(i, u, function(l, s) {
              l = pt.mapRawResults(l), a(l), s();
            }, n);
          case "cleanup-plugin":
            return w1(a, n);
          default:
            if (w._audit && w._audit.commands && w._audit.commands[e.command])
              return w._audit.commands[e.command](e, r);
        }
      }
      o(I3, "runCommand"), D.top !== D && (yt.subscribe("axe.start", I3), yt.subscribe("axe.ping", function(e, t, r) {
        r({
          axe: !0
        });
      }));
      function Ea(e) {
        this._run = e.run, this._collect = e.collect, this._registry = {}, e.commands.forEach(function(t) {
          w._audit.registerCommand(t);
        });
      }
      o(Ea, "Plugin"), Ea.prototype.run = /* @__PURE__ */ o(function() {
        return this._run.apply(this, arguments);
      }, "run3"), Ea.prototype.collect = /* @__PURE__ */ o(function() {
        return this._collect.apply(this, arguments);
      }, "collect"), Ea.prototype.cleanup = /* @__PURE__ */ o(function(t) {
        var r = w.utils.queue(), a = this;
        Object.keys(this._registry).forEach(function(n) {
          r.defer(function(i) {
            a._registry[n].cleanup(i);
          });
        }), r.then(t);
      }, "cleanup2"), Ea.prototype.add = /* @__PURE__ */ o(function(t) {
        this._registry[t.id] = t;
      }, "add");
      function P3(e) {
        w.plugins[e.id] = new Ea(e);
      }
      o(P3, "registerPlugin");
      var L3 = P3;
      function B3() {
        var e = w._audit;
        if (!e)
          throw new Error("No audit configured");
        e.resetRulesAndChecks(), Rg();
      }
      o(B3, "reset");
      var q3 = B3;
      function j3(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        r.reporter = r.reporter || w._audit.reporter || "v1", w._selectorData = {}, t instanceof He || (t = new y1(t));
        var a = Wd(e);
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
        }, i = a.runSync(n, r);
        In(i), Ur(i);
        var u = dl([i]);
        return u.violations.forEach(function(l) {
          return l.nodes.forEach(function(s) {
            s.failureSummary = Bo(s);
          });
        }), pe({}, Xt(), u, {
          toolOptions: r
        });
      }
      o(j3, "runVirtualRule");
      function Pf(e) {
        var t, r, a, n = H(e, 3), i = n[0], u = n[1], l = n[2], s = new TypeError("axe.run arguments are invalid");
        if (!P2(i)) {
          if (l !== void 0)
            throw s;
          l = u, u = i, i = N;
        }
        if (S(u) !== "object") {
          if (l !== void 0)
            throw s;
          l = u, u = {};
        }
        if (typeof l != "function" && l !== void 0)
          throw s;
        return u = It(u), u.reporter = (t = (r = u.reporter) !== null && r !== void 0 ? r : (a = w._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", {
          context: i,
          options: u,
          callback: l
        };
      }
      o(Pf, "normalizeRunParams");
      var gu = /* @__PURE__ */ o(function() {
      }, "noop2");
      function z3() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        Nf(t[0]);
        var a = Pf(t), n = a.context, i = a.options, u = a.callback, l = u === void 0 ? gu : u, s = V3(l), c = s.thenable, d = s.resolve, f = s.reject;
        try {
          he(w._audit, "No audit configured"), he(!w._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        } catch (h) {
          return $3(h, l);
        }
        w._running = !0, i.performanceTimer && w.utils.performanceTimer.start();
        function p(h, v) {
          var b = /* @__PURE__ */ o(function(_) {
            w._running = !1, v();
            try {
              d(_);
            } catch (x) {
              w.log(x);
            }
          }, "respond"), g = /* @__PURE__ */ o(function(_) {
            w._running = !1, v();
            try {
              f(_);
            } catch (x) {
              w.log(x);
            }
          }, "wrappedReject");
          i.performanceTimer && w.utils.performanceTimer.end();
          try {
            H3(h, i, b, g);
          } catch (y) {
            g(y);
          }
        }
        o(p, "handleRunRules");
        function m(h) {
          i.performanceTimer && w.utils.performanceTimer.end(), w._running = !1, l(h), f(h);
        }
        return o(m, "errorRunRules"), w._runRules(n, i, p, m), c;
      }
      o(z3, "run4");
      function V3(e) {
        var t, r, a;
        return typeof Promise == "function" && e === gu ? t = new Promise(function(n, i) {
          r = i, a = n;
        }) : (a = /* @__PURE__ */ o(function(i) {
          return e(null, i);
        }, "resolve"), r = /* @__PURE__ */ o(function(i) {
          return e(i);
        }, "reject")), {
          thenable: t,
          reject: r,
          resolve: a
        };
      }
      o(V3, "getPromiseHandlers");
      function H3(e, t, r, a) {
        var n = Jo(t.reporter), i = n(e, t, r, a);
        i !== void 0 && r(i);
      }
      o(H3, "createReport");
      function $3(e, t) {
        if (typeof t == "function" && t !== gu) {
          t(e.message);
          return;
        }
        throw e;
      }
      o($3, "handleError");
      function U3() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var a = Pf(t), n = a.options, i = a.context;
        he(w._audit, "Axe is not configured. Audit is missing."), he(!w._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        var u = new Nn(i, w._tree);
        return w._tree = u.flatTree, w._selectorData = Ba(u.flatTree), w._running = !0, n.elementRef = !1, new Promise(function(l, s) {
          w._audit.run(u, n, l, s);
        }).then(function(l) {
          l = pt.mapRawResults(l);
          var s = u.frames.map(function(d) {
            var f = d.node;
            return pt.toSpec(f);
          }), c;
          return u.initiator && (c = Xt()), w._running = !1, Zt(), {
            results: l,
            frames: s,
            environmentData: c
          };
        }).catch(function(l) {
          return w._running = !1, Zt(), Promise.reject(l);
        });
      }
      o(U3, "runPartial");
      function G3(e) {
        var t, r, a, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n = It(n);
        var i = e.find(function(s) {
          return s.environmentData;
        }) || {}, u = i.environmentData;
        w._audit.normalizeOptions(n), n.reporter = (t = (r = n.reporter) !== null && r !== void 0 ? r : (a = w._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", W3(e);
        var l = Ga(e);
        return l = w._audit.after(l, n), l.forEach(In), l = l.map(Ur), X3(l, pe({
          environmentData: u
        }, n));
      }
      o(G3, "finishRun");
      function W3(e) {
        var t = [], r = Fe(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value, i = t.shift();
            if (!!n) {
              n.frameSpec = i ?? null;
              var u = Y3(n);
              t.unshift.apply(t, ae(u));
            }
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      o(W3, "setFrameSpec");
      function Y3(e) {
        var t = e.frames, r = e.frameSpec;
        return r ? t.map(function(a) {
          return pt.mergeSpecs(a, r);
        }) : t;
      }
      o(Y3, "getMergedFrameSpecs");
      function X3(e, t) {
        return new Promise(function(r, a) {
          var n = Jo(t.reporter);
          n(e, t, r, a);
        });
      }
      o(X3, "createReport2");
      function K3(e) {
        if (w._tree)
          throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.");
        return e && S(e.documentElement) === "object" && S(e.defaultView) === "object" && (e = e.documentElement), Nf(e), w._tree = Po(e), w._selectorData = Ba(w._tree), w._tree[0];
      }
      o(K3, "setup");
      var Z3 = K3, J3 = /* @__PURE__ */ o(function(t, r, a) {
        console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'), typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, Jf);
        a(pe({}, Xt(i), {
          toolOptions: u
        }, ba(t, r)));
      }, "naReporter"), Q3 = J3, eF = /* @__PURE__ */ o(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, Qf);
        r.resultTypes = ["violations"];
        var l = ba(t, r), s = l.violations;
        a(pe({}, Xt(i), {
          toolOptions: u,
          violations: s
        }));
      }, "noPassesReporter"), tF = eF, rF = /* @__PURE__ */ o(function(t, r, a) {
        if (typeof r == "function" && (a = r, r = {}), !t || !Array.isArray(t))
          return a(t);
        var n = t.map(function(i) {
          for (var u = pe({}, i), l = ["passes", "violations", "incomplete", "inapplicable"], s = 0, c = l; s < c.length; s++) {
            var d = c[s];
            u[d] = pt.mapRawNodeResults(u[d]);
          }
          return u;
        });
        a(n);
      }, "rawReporter"), Lf = rF, aF = /* @__PURE__ */ o(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, ep);
        Lf(t, u, function(l) {
          var s = Xt(i);
          a({
            raw: l,
            env: s
          });
        });
      }, "rawEnvReporter"), nF = aF, iF = /* @__PURE__ */ o(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, tp), l = ba(t, r), s = /* @__PURE__ */ o(function(d) {
          d.nodes.forEach(function(f) {
            f.failureSummary = Bo(f);
          });
        }, "addFailureSummaries");
        l.incomplete.forEach(s), l.violations.forEach(s), a(pe({}, Xt(i), {
          toolOptions: u
        }, l));
      }, "v1Reporter"), oF = iF, uF = /* @__PURE__ */ o(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, rp), l = ba(t, r);
        a(pe({}, Xt(i), {
          toolOptions: u
        }, l));
      }, "v2Reporter"), lF = uF, sF = {
        base: {
          Audit: Rf,
          CheckResult: hu,
          Check: Ff,
          Context: Nn,
          RuleResult: Wn,
          Rule: nt,
          metadataFunctionMap: Gn
        },
        public: {
          reporters: wa
        },
        helpers: {
          failureSummary: Bo,
          incompleteFallbackMessage: qo,
          processAggregate: ba
        },
        utils: {
          setDefaultFrameMessenger: Nl,
          cacheNodeSelectors: Pd,
          getNodesMatchingExpression: Nd,
          convertSelector: ja
        },
        commons: {
          dom: {
            nativelyHidden: Ul,
            displayHidden: Gl,
            visibilityHidden: Wl,
            contentVisibiltyHidden: Yl,
            ariaHidden: Xl,
            opacityHidden: Kl,
            scrollHidden: Zl,
            overflowHidden: Jl,
            clipHidden: Ql,
            areaHidden: ki,
            detailsHidden: es
          }
        }
      }, cF = sF;
      w._thisWillBeDeletedDoNotUse = cF, w.constants = ce, w.log = or, w.AbstractVirtualNode = He, w.SerialVirtualNode = y1, w.VirtualNode = Mo, w._cache = le, w.imports = wc, w.cleanup = w1, w.configure = Hw, w.frameMessenger = $w, w.getRules = Gw, w._load = N3, w.plugins = {}, w.registerPlugin = L3, w.hasReporter = _1, w.getReporter = Jo, w.addReporter = zw, w.reset = q3, w._runRules = If, w.runVirtualRule = j3, w.run = z3, w.setup = Z3, w.teardown = Zt, w.runPartial = U3, w.finishRun = G3, w.commons = pf, w.utils = ii, w.addReporter("na", Q3), w.addReporter("no-passes", tF), w.addReporter("rawEnv", nF), w.addReporter("raw", Lf), w.addReporter("v1", oF), w.addReporter("v2", lF, !0);
    }(), w._load({
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
            description: "Ensures an element's role supports its ARIA attributes",
            help: "Elements must only use supported ARIA attributes"
          },
          "aria-allowed-role": {
            description: "Ensures role attribute has an appropriate value for the element",
            help: "ARIA role should be appropriate for the element"
          },
          "aria-braille-equivalent": {
            description: "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
            help: "aria-braille attributes must have a non-braille equivalent"
          },
          "aria-command-name": {
            description: "Ensures every ARIA button, link and menuitem has an accessible name",
            help: "ARIA commands must have an accessible name"
          },
          "aria-conditional-attr": {
            description: "Ensures ARIA attributes are used as described in the specification of the element's role",
            help: "ARIA attributes must be used as specified for the element's role"
          },
          "aria-deprecated-role": {
            description: "Ensures elements do not use deprecated roles",
            help: "Deprecated ARIA roles must not be used"
          },
          "aria-dialog-name": {
            description: "Ensures every ARIA dialog and alertdialog node has an accessible name",
            help: "ARIA dialog and alertdialog nodes should have an accessible name"
          },
          "aria-hidden-body": {
            description: 'Ensures aria-hidden="true" is not present on the document body.',
            help: 'aria-hidden="true" must not be present on the document body'
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
          "aria-prohibited-attr": {
            description: "Ensures ARIA attributes are not prohibited for an element's role",
            help: "Elements must only use permitted ARIA attributes"
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
            description: 'Ensures role="text" is used on elements with no focusable descendants',
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
            description: 'Ensures [role="img"] elements have alternate text',
            help: '[role="img"] elements must have an alternative text'
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
          "aria-conditional-attr": {
            impact: "serious",
            messages: {
              pass: "ARIA attribute is allowed",
              fail: {
                checkbox: 'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state',
                rowSingular: "This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}",
                rowPlural: "These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}"
              }
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
          "braille-label-equivalent": {
            impact: "serious",
            messages: {
              pass: "aria-braillelabel is used on an element with accessible text",
              fail: "aria-braillelabel is used on an element with no accessible text",
              incomplete: "Unable to compute accessible text"
            }
          },
          "braille-roledescription-equivalent": {
            impact: "serious",
            messages: {
              pass: "aria-brailleroledescription is used on an element with aria-roledescription",
              fail: {
                noRoleDescription: "aria-brailleroledescription is used on an element with no aria-roledescription",
                emptyRoleDescription: "aria-brailleroledescription is used on an element with an empty aria-roledescription"
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
            impact: "serious",
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
                complexTextShadows: "Element's contrast could not be determined because it uses complex text shadows",
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
              incomplete: {
                default: "Check if the link needs styling to distinguish it from nearby text",
                pseudoContent: "Check if the link's pseudo style is sufficient to distinguish it from the surrounding text"
              },
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
              fail: 'Focusable content should have tabindex="-1" or be removed from the DOM'
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
                notHidden: 'Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")'
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
              pass: "Target has sufficient space from its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px which is at least ${data.minOffset}px.",
              fail: "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px.",
              incomplete: {
                default: "Element with negative tabindex has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is this a target?",
                nonTabbableNeighbor: "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is the neighbor a target?"
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
            failureMessage: /* @__PURE__ */ o(function(R) {
              var I = "Fix any of the following:", Z = R;
              if (Z)
                for (var me, be = -1, et = Z.length - 1; be < et; )
                  me = Z[be += 1], I += `
  ` + me.split(`
`).join(`
  `);
              return I;
            }, "anonymous")
          },
          none: {
            failureMessage: /* @__PURE__ */ o(function(R) {
              var I = "Fix all of the following:", Z = R;
              if (Z)
                for (var me, be = -1, et = Z.length - 1; be < et; )
                  me = Z[be += 1], I += `
  ` + me.split(`
`).join(`
  `);
              return I;
            }, "anonymous")
          }
        },
        incompleteFallbackMessage: "axe couldn't tell the reason. Time to break out the element inspector!"
      },
      rules: [{
        id: "accesskeys",
        impact: "serious",
        selector: "[accesskey]",
        excludeHidden: !1,
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: [],
        none: ["accesskeys"]
      }, {
        id: "area-alt",
        impact: "critical",
        selector: "map area[href]",
        excludeHidden: !1,
        tags: ["cat.text-alternatives", "wcag2a", "wcag244", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.2.4.4", "EN-9.4.1.2", "ACT"],
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
        impact: "critical",
        matches: "aria-allowed-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["5c01ea"],
        all: [{
          options: {
            validTreeRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
          },
          id: "aria-allowed-attr"
        }],
        any: [],
        none: ["aria-unsupported-attr"]
      }, {
        id: "aria-allowed-role",
        impact: "minor",
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
        id: "aria-braille-equivalent",
        reviewOnFail: !0,
        impact: "serious",
        selector: "[aria-brailleroledescription], [aria-braillelabel]",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        all: ["braille-roledescription-equivalent", "braille-label-equivalent"],
        any: [],
        none: []
      }, {
        id: "aria-command-name",
        impact: "serious",
        selector: '[role="link"], [role="button"], [role="menuitem"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2", "ACT"],
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
        id: "aria-conditional-attr",
        impact: "serious",
        matches: "aria-allowed-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["5c01ea"],
        all: [{
          options: {
            invalidTableRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
          },
          id: "aria-conditional-attr"
        }],
        any: [],
        none: []
      }, {
        id: "aria-deprecated-role",
        impact: "minor",
        selector: "[role]",
        matches: "no-empty-role-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["674b10"],
        all: [],
        any: [],
        none: ["deprecatedrole"]
      }, {
        id: "aria-dialog-name",
        impact: "serious",
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
        impact: "critical",
        selector: "body",
        excludeHidden: !1,
        matches: "is-initiator-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        all: [],
        any: ["aria-hidden-body"],
        none: []
      }, {
        id: "aria-hidden-focus",
        impact: "serious",
        selector: '[aria-hidden="true"]',
        matches: "aria-hidden-focus-matches",
        excludeHidden: !1,
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["6cfa84"],
        all: ["focusable-modal-open", "focusable-disabled", "focusable-not-tabbable"],
        any: [],
        none: []
      }, {
        id: "aria-input-field-name",
        impact: "serious",
        selector: '[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
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
        impact: "serious",
        selector: '[role="meter"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag111", "EN-301-549", "EN-9.1.1.1"],
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
        impact: "serious",
        selector: '[role="progressbar"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag111", "EN-301-549", "EN-9.1.1.1"],
        all: [],
        any: ["aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }],
        none: []
      }, {
        id: "aria-prohibited-attr",
        impact: "serious",
        matches: "aria-allowed-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["5c01ea"],
        all: [],
        any: [],
        none: [{
          options: {
            elementsAllowedAriaLabel: ["applet", "input"]
          },
          id: "aria-prohibited-attr"
        }]
      }, {
        id: "aria-required-attr",
        impact: "critical",
        selector: "[role]",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["4e8ab6"],
        all: [],
        any: ["aria-required-attr"],
        none: []
      }, {
        id: "aria-required-children",
        impact: "critical",
        selector: "[role]",
        matches: "aria-required-children-matches",
        tags: ["cat.aria", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
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
        impact: "critical",
        selector: "[role]",
        matches: "aria-required-parent-matches",
        tags: ["cat.aria", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
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
        impact: "serious",
        selector: "[aria-roledescription]",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2", "deprecated"],
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
        impact: "critical",
        selector: "[role]",
        matches: "no-empty-role-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["674b10"],
        all: [],
        any: [],
        none: ["invalidrole", "abstractrole", "unsupportedrole"]
      }, {
        id: "aria-text",
        impact: "serious",
        selector: "[role=text]",
        tags: ["cat.aria", "best-practice"],
        all: [],
        any: ["no-focusable-content"],
        none: []
      }, {
        id: "aria-toggle-field-name",
        impact: "serious",
        selector: '[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
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
        impact: "serious",
        selector: '[role="tooltip"]',
        matches: "no-naming-method-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
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
        impact: "serious",
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
        impact: "critical",
        matches: "aria-has-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["6a7281"],
        all: [{
          options: [],
          id: "aria-valid-attr-value"
        }, "aria-errormessage", "aria-level"],
        any: [],
        none: []
      }, {
        id: "aria-valid-attr",
        impact: "critical",
        matches: "aria-has-attr-matches",
        tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["5f99a7"],
        all: [],
        any: [{
          options: [],
          id: "aria-valid-attr"
        }],
        none: []
      }, {
        id: "audio-caption",
        impact: "critical",
        selector: "audio",
        enabled: !1,
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag121", "EN-301-549", "EN-9.1.2.1", "section508", "section508.22.a", "deprecated"],
        actIds: ["2eb176", "afb423"],
        all: [],
        any: [],
        none: ["caption"]
      }, {
        id: "autocomplete-valid",
        impact: "serious",
        matches: "autocomplete-matches",
        tags: ["cat.forms", "wcag21aa", "wcag135", "EN-301-549", "EN-9.1.3.5", "ACT"],
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
        impact: "serious",
        selector: "[style]",
        matches: "is-visible-on-screen-matches",
        tags: ["cat.structure", "wcag21aa", "wcag1412", "EN-301-549", "EN-9.1.4.12", "ACT"],
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
        impact: "serious",
        selector: "blink",
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag222", "section508", "section508.22.j", "TTv5", "TT2.b", "EN-301-549", "EN-9.2.2.2"],
        all: [],
        any: [],
        none: ["is-on-screen"]
      }, {
        id: "button-name",
        impact: "critical",
        selector: "button",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2", "ACT"],
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
        impact: "serious",
        selector: "html",
        pageLevel: !0,
        matches: "bypass-matches",
        reviewOnFail: !0,
        tags: ["cat.keyboard", "wcag2a", "wcag241", "section508", "section508.22.o", "TTv5", "TT9.a", "EN-301-549", "EN-9.2.4.1"],
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
        impact: "serious",
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
        impact: "serious",
        matches: "color-contrast-matches",
        excludeHidden: !1,
        tags: ["cat.color", "wcag2aa", "wcag143", "TTv5", "TT13.c", "EN-301-549", "EN-9.1.4.3", "ACT"],
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
        impact: "serious",
        selector: "html",
        tags: ["cat.structure", "wcag134", "wcag21aa", "EN-301-549", "EN-9.1.3.4", "experimental"],
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
        impact: "serious",
        selector: "dl",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
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
        impact: "serious",
        selector: "dd, dt",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
        all: [],
        any: ["dlitem"],
        none: []
      }, {
        id: "document-title",
        impact: "serious",
        selector: "html",
        matches: "is-initiator-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag242", "TTv5", "TT12.a", "EN-301-549", "EN-9.2.4.2", "ACT"],
        actIds: ["2779a5"],
        all: [],
        any: ["doc-has-title"],
        none: []
      }, {
        id: "duplicate-id-active",
        impact: "serious",
        selector: "[id]",
        matches: "duplicate-id-active-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a-obsolete", "wcag411", "deprecated"],
        enabled: !1,
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id-active"],
        none: []
      }, {
        id: "duplicate-id-aria",
        impact: "critical",
        selector: "[id]",
        matches: "duplicate-id-aria-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"],
        reviewOnFail: !0,
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id-aria"],
        none: []
      }, {
        id: "duplicate-id",
        impact: "minor",
        selector: "[id]",
        matches: "duplicate-id-misc-matches",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a-obsolete", "wcag411", "deprecated"],
        enabled: !1,
        actIds: ["3ea0c8"],
        all: [],
        any: ["duplicate-id"],
        none: []
      }, {
        id: "empty-heading",
        impact: "minor",
        selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
        matches: "heading-matches",
        tags: ["cat.name-role-value", "best-practice"],
        actIds: ["ffd0e9"],
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
        impact: "minor",
        selector: 'th:not([role]), [role="rowheader"], [role="columnheader"]',
        tags: ["cat.name-role-value", "best-practice"],
        all: [],
        any: ["has-visible-text"],
        none: []
      }, {
        id: "focus-order-semantics",
        impact: "minor",
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
        impact: "moderate",
        selector: "input, select, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "wcag2a", "wcag332", "TTv5", "TT5.c", "EN-301-549", "EN-9.3.3.2"],
        all: [],
        any: [],
        none: ["multiple-label"]
      }, {
        id: "frame-focusable-content",
        impact: "serious",
        selector: "html",
        matches: "frame-focusable-content-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1"],
        actIds: ["akn7bn"],
        all: [],
        any: ["frame-focusable-content"],
        none: []
      }, {
        id: "frame-tested",
        impact: "critical",
        selector: "html, frame, iframe",
        tags: ["cat.structure", "best-practice", "review-item"],
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
        impact: "serious",
        selector: "frame[title], iframe[title]",
        matches: "frame-title-has-text-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag412", "TTv5", "TT12.d", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["4b1c6c"],
        all: [],
        any: [],
        none: ["unique-frame-title"],
        reviewOnFail: !0
      }, {
        id: "frame-title",
        impact: "serious",
        selector: "frame, iframe",
        matches: "no-negative-tabindex-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag412", "section508", "section508.22.i", "TTv5", "TT12.d", "EN-301-549", "EN-9.4.1.2"],
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
        impact: "moderate",
        selector: "h1, h2, h3, h4, h5, h6, [role=heading]",
        matches: "heading-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["heading-order"],
        none: []
      }, {
        id: "hidden-content",
        impact: "minor",
        selector: "*",
        excludeHidden: !1,
        tags: ["cat.structure", "best-practice", "experimental", "review-item"],
        all: [],
        any: ["hidden-content"],
        none: []
      }, {
        id: "html-has-lang",
        impact: "serious",
        selector: "html",
        matches: "is-initiator-matches",
        tags: ["cat.language", "wcag2a", "wcag311", "TTv5", "TT11.a", "EN-301-549", "EN-9.3.1.1", "ACT"],
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
        impact: "serious",
        selector: 'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',
        tags: ["cat.language", "wcag2a", "wcag311", "TTv5", "TT11.a", "EN-301-549", "EN-9.3.1.1", "ACT"],
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
        impact: "moderate",
        selector: "html[lang][xml\\:lang]",
        matches: "xml-lang-mismatch-matches",
        tags: ["cat.language", "wcag2a", "wcag311", "EN-301-549", "EN-9.3.1.1", "ACT"],
        actIds: ["5b7ae0"],
        all: ["xml-lang-mismatch"],
        any: [],
        none: []
      }, {
        id: "identical-links-same-purpose",
        impact: "minor",
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
        impact: "critical",
        selector: "img",
        matches: "no-explicit-name-required-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "TTv5", "TT7.a", "TT7.b", "EN-301-549", "EN-9.1.1.1", "ACT"],
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
        impact: "minor",
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
        impact: "critical",
        selector: 'input[type="button"], input[type="submit"], input[type="reset"]',
        matches: "no-explicit-name-required-matches",
        tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
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
        impact: "critical",
        selector: 'input[type="image"]',
        matches: "no-explicit-name-required-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "wcag412", "section508", "section508.22.a", "TTv5", "TT7.a", "EN-301-549", "EN-9.1.1.1", "EN-9.4.1.2", "ACT"],
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
        impact: "serious",
        matches: "label-content-name-mismatch-matches",
        tags: ["cat.semantics", "wcag21a", "wcag253", "EN-301-549", "EN-9.2.5.3", "experimental"],
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
        impact: "serious",
        selector: "input, select, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "best-practice"],
        all: [],
        any: [],
        none: ["title-only"]
      }, {
        id: "label",
        impact: "critical",
        selector: "input, textarea",
        matches: "label-matches",
        tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
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
        none: ["hidden-explicit-label"]
      }, {
        id: "landmark-banner-is-top-level",
        impact: "moderate",
        selector: "header:not([role]), [role=banner]",
        matches: "landmark-has-body-context-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-complementary-is-top-level",
        impact: "moderate",
        selector: "aside:not([role]), [role=complementary]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-contentinfo-is-top-level",
        impact: "moderate",
        selector: "footer:not([role]), [role=contentinfo]",
        matches: "landmark-has-body-context-matches",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-main-is-top-level",
        impact: "moderate",
        selector: "main:not([role]), [role=main]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: ["landmark-is-top-level"],
        none: []
      }, {
        id: "landmark-no-duplicate-banner",
        impact: "moderate",
        selector: "header:not([role]), [role=banner]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "header:not([role]), [role=banner]",
            role: "banner"
          },
          id: "page-no-duplicate-banner"
        }],
        none: []
      }, {
        id: "landmark-no-duplicate-contentinfo",
        impact: "moderate",
        selector: "footer:not([role]), [role=contentinfo]",
        tags: ["cat.semantics", "best-practice"],
        all: [],
        any: [{
          options: {
            selector: "footer:not([role]), [role=contentinfo]",
            role: "contentinfo"
          },
          id: "page-no-duplicate-contentinfo"
        }],
        none: []
      }, {
        id: "landmark-no-duplicate-main",
        impact: "moderate",
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
        impact: "moderate",
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
        impact: "moderate",
        selector: "[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",
        tags: ["cat.semantics", "best-practice"],
        matches: "landmark-unique-matches",
        all: [],
        any: ["landmark-is-unique"],
        none: []
      }, {
        id: "link-in-text-block",
        impact: "serious",
        selector: "a[href], [role=link]",
        matches: "link-in-text-block-matches",
        excludeHidden: !1,
        tags: ["cat.color", "wcag2a", "wcag141", "TTv5", "TT13.a", "EN-301-549", "EN-9.1.4.1"],
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
        impact: "serious",
        selector: "a[href]",
        tags: ["cat.name-role-value", "wcag2a", "wcag244", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.2.4.4", "EN-9.4.1.2", "ACT"],
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
        impact: "serious",
        selector: "ul, ol",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
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
        impact: "serious",
        selector: "li",
        matches: "no-role-matches",
        tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"],
        all: [],
        any: ["listitem"],
        none: []
      }, {
        id: "marquee",
        impact: "serious",
        selector: "marquee",
        excludeHidden: !1,
        tags: ["cat.parsing", "wcag2a", "wcag222", "TTv5", "TT2.b", "EN-301-549", "EN-9.2.2.2"],
        all: [],
        any: [],
        none: ["is-on-screen"]
      }, {
        id: "meta-refresh-no-exceptions",
        impact: "minor",
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
        impact: "critical",
        selector: 'meta[http-equiv="refresh"][content]',
        excludeHidden: !1,
        tags: ["cat.time-and-media", "wcag2a", "wcag221", "TTv5", "TT8.a", "EN-301-549", "EN-9.2.2.1"],
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
        impact: "minor",
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
        impact: "critical",
        selector: 'meta[name="viewport"]',
        matches: "is-initiator-matches",
        excludeHidden: !1,
        tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "EN-301-549", "EN-9.1.4.4", "ACT"],
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
        impact: "serious",
        matches: "nested-interactive-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag412", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2"],
        actIds: ["307n5z"],
        all: [],
        any: ["no-focusable-content"],
        none: []
      }, {
        id: "no-autoplay-audio",
        impact: "moderate",
        excludeHidden: !1,
        selector: "audio[autoplay], video[autoplay]",
        matches: "no-autoplay-audio-matches",
        reviewOnFail: !0,
        tags: ["cat.time-and-media", "wcag2a", "wcag142", "TTv5", "TT2.a", "EN-301-549", "EN-9.1.4.2", "ACT"],
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
        impact: "serious",
        selector: "object[data]",
        matches: "object-is-loaded-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "EN-301-549", "EN-9.1.1.1"],
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
        impact: "serious",
        selector: "p",
        matches: "p-as-heading-matches",
        tags: ["cat.semantics", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1", "experimental"],
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
        impact: "moderate",
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
        impact: "minor",
        selector: `img[alt=''], [role="none"], [role="presentation"]`,
        matches: "has-implicit-chromium-role-matches",
        tags: ["cat.aria", "best-practice", "ACT"],
        actIds: ["46ca7f"],
        all: [],
        any: [],
        none: ["is-element-focusable", "has-global-aria-attribute"]
      }, {
        id: "region",
        impact: "moderate",
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
        impact: "serious",
        selector: "[role='img']:not(img, area, input, object)",
        matches: "html-namespace-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "TTv5", "TT7.a", "EN-301-549", "EN-9.1.1.1", "ACT"],
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
        impact: "moderate",
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
        impact: "serious",
        selector: "*:not(select,textarea)",
        matches: "scrollable-region-focusable-matches",
        tags: ["cat.keyboard", "wcag2a", "wcag211", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1"],
        actIds: ["0ssw9k"],
        all: [],
        any: ["focusable-content", "focusable-element"],
        none: []
      }, {
        id: "select-name",
        impact: "critical",
        selector: "select",
        tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"],
        actIds: ["e086e5"],
        all: [],
        any: ["implicit-label", "explicit-label", "aria-label", "aria-labelledby", {
          options: {
            attribute: "title"
          },
          id: "non-empty-title"
        }, "presentational-role"],
        none: ["hidden-explicit-label"]
      }, {
        id: "server-side-image-map",
        impact: "minor",
        selector: "img[ismap]",
        tags: ["cat.text-alternatives", "wcag2a", "wcag211", "section508", "section508.22.f", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1"],
        all: [],
        any: [],
        none: ["exists"]
      }, {
        id: "skip-link",
        impact: "moderate",
        selector: 'a[href^="#"], a[href^="/#"]',
        matches: "skip-link-matches",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: ["skip-link"],
        none: []
      }, {
        id: "svg-img-alt",
        impact: "serious",
        selector: '[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',
        matches: "svg-namespace-matches",
        tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "TTv5", "TT7.a", "EN-301-549", "EN-9.1.1.1", "ACT"],
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
        impact: "serious",
        selector: "[tabindex]",
        tags: ["cat.keyboard", "best-practice"],
        all: [],
        any: ["tabindex"],
        none: []
      }, {
        id: "table-duplicate-name",
        impact: "minor",
        selector: "table",
        tags: ["cat.tables", "best-practice"],
        all: [],
        any: [],
        none: ["same-caption-summary"]
      }, {
        id: "table-fake-caption",
        impact: "serious",
        selector: "table",
        matches: "data-table-matches",
        tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g", "EN-301-549", "EN-9.1.3.1"],
        all: ["caption-faked"],
        any: [],
        none: []
      }, {
        id: "target-size",
        impact: "serious",
        selector: "*",
        enabled: !1,
        matches: "widget-not-inline-matches",
        tags: ["cat.sensory-and-visual-cues", "wcag22aa", "wcag258"],
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
        impact: "critical",
        selector: "table",
        matches: "data-table-large-matches",
        tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b", "EN-301-549", "EN-9.1.3.1"],
        all: ["td-has-header"],
        any: [],
        none: []
      }, {
        id: "td-headers-attr",
        impact: "serious",
        selector: "table",
        matches: "table-or-grid-role-matches",
        tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b", "EN-301-549", "EN-9.1.3.1"],
        actIds: ["a25f45"],
        all: ["td-headers-attr"],
        any: [],
        none: []
      }, {
        id: "th-has-data-cells",
        impact: "serious",
        selector: "table",
        matches: "data-table-matches",
        tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b", "EN-301-549", "EN-9.1.3.1"],
        actIds: ["d0f69e"],
        all: ["th-has-data-cells"],
        any: [],
        none: []
      }, {
        id: "valid-lang",
        impact: "serious",
        selector: "[lang]:not(html), [xml\\:lang]:not(html)",
        tags: ["cat.language", "wcag2aa", "wcag312", "TTv5", "TT11.b", "EN-301-549", "EN-9.3.1.2", "ACT"],
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
        impact: "critical",
        selector: "video",
        tags: ["cat.text-alternatives", "wcag2a", "wcag122", "section508", "section508.22.a", "TTv5", "TT17.a", "EN-301-549", "EN-9.1.2.2"],
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
        id: "aria-conditional-attr",
        evaluate: "aria-conditional-attr-evaluate",
        options: {
          invalidTableRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"]
        }
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
        id: "braille-label-equivalent",
        evaluate: "braille-label-equivalent-evaluate"
      }, {
        id: "braille-roledescription-equivalent",
        evaluate: "braille-roledescription-equivalent-evaluate"
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
          role: "banner"
        }
      }, {
        id: "page-no-duplicate-contentinfo",
        evaluate: "page-no-duplicate-evaluate",
        after: "page-no-duplicate-after",
        options: {
          selector: "footer:not([role]), [role=contentinfo]",
          role: "contentinfo"
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
        evaluate: "help-same-as-label-evaluate"
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
  }, "axeFunction"))(typeof window == "object" ? window : pF);
})(wu);
const hF = /* @__PURE__ */ fF(wu.exports), bF = /* @__PURE__ */ mF({
  __proto__: null,
  default: hF
}, [wu.exports]);
export {
  bF as a
};
//# sourceMappingURL=axe.628ee62e.js.map
