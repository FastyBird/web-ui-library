var FF = Object.defineProperty;
var o = (Mt, Qt) => FF(Mt, "name", { value: Qt, configurable: !0 });
import { X as TF, Y as RF } from "./iframe.5f446e29.js";
function kF(Mt, Qt) {
  for (var D = 0; D < Qt.length; D++) {
    const Qe = Qt[D];
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
o(kF, "_mergeNamespaces");
var Du = { exports: {} };
/*! axe v4.8.3
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
  (/* @__PURE__ */ o(function Qt(D) {
    var Qe = D, N = D.document, w = w || {};
    w.version = "4.8.3", S(Mt) === "object" && Mt.exports && typeof Qt.toString == "function" && (w.source = "(" + Qt.toString() + ')(typeof window === "object" ? window : this);', Mt.exports = w), typeof D.getComputedStyle == "function" && (D.axe = w);
    function Hr(A) {
      this.name = "SupportError", this.cause = A.cause, this.message = "`".concat(A.cause, "` - feature unsupported in your environment."), A.ruleId && (this.ruleId = A.ruleId, this.message += " Skipping ".concat(this.ruleId, " rule.")), this.stack = new Error().stack;
    }
    o(Hr, "SupportError"), Hr.prototype = Object.create(Error.prototype), Hr.prototype.constructor = Hr;
    var Vf = ["node"], Hf = ["relatedNodes"], $f = ["node"], Uf = ["variant"], Gf = ["matches"], Wf = ["chromium"], Yf = ["noImplicit"], Xf = ["noPresentational"], Kf = ["precision", "format", "inGamut"], Zf = ["space"], Jf = ["algorithm"], Qf = ["method"], ep = ["maxDeltaE", "deltaEMethod", "steps", "maxSteps"], tp = ["node"], rp = ["environmentData"], ap = ["environmentData"], np = ["environmentData"], ip = ["environmentData"], op = ["environmentData"];
    function up(A) {
      return Su(A) || Ru(A) || Ra(A) || ku();
    }
    o(up, "_toArray");
    function lp(A, R, I) {
      return R = Mu(R), R in A ? Object.defineProperty(A, R, {
        value: I,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : A[R] = I, A;
    }
    o(lp, "_defineProperty");
    function Aa(A, R, I) {
      return xu() ? Aa = Reflect.construct.bind() : Aa = /* @__PURE__ */ o(function(me, be, et) {
        var ft = [null];
        ft.push.apply(ft, be);
        var tt = Function.bind.apply(me, ft), rt = new tt();
        return et && Fa(rt, et.prototype), rt;
      }, "_construct"), Aa.apply(null, arguments);
    }
    o(Aa, "_construct");
    function Zn(A, R) {
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
      }), R && Fa(A, R);
    }
    o(Zn, "_inherits");
    function Fa(A, R) {
      return Fa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : /* @__PURE__ */ o(function(Z, me) {
        return Z.__proto__ = me, Z;
      }, "_setPrototypeOf"), Fa(A, R);
    }
    o(Fa, "_setPrototypeOf");
    function Jn(A) {
      var R = xu();
      return /* @__PURE__ */ o(function() {
        var Z = Ta(A), me;
        if (R) {
          var be = Ta(this).constructor;
          me = Reflect.construct(Z, arguments, be);
        } else
          me = Z.apply(this, arguments);
        return sp(this, me);
      }, "_createSuperInternal");
    }
    o(Jn, "_createSuper");
    function sp(A, R) {
      if (R && (S(R) === "object" || typeof R == "function"))
        return R;
      if (R !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return _u(A);
    }
    o(sp, "_possibleConstructorReturn");
    function _u(A) {
      if (A === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return A;
    }
    o(_u, "_assertThisInitialized");
    function xu() {
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
    o(xu, "_isNativeReflectConstruct");
    function Ta(A) {
      return Ta = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : /* @__PURE__ */ o(function(I) {
        return I.__proto__ || Object.getPrototypeOf(I);
      }, "_getPrototypeOf"), Ta(A);
    }
    o(Ta, "_getPrototypeOf");
    function Eu(A, R, I) {
      Au(A, R), R.set(A, I);
    }
    o(Eu, "_classPrivateFieldInitSpec");
    function Cu(A, R) {
      Au(A, R), R.add(A);
    }
    o(Cu, "_classPrivateMethodInitSpec");
    function Au(A, R) {
      if (R.has(A))
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
    o(Au, "_checkPrivateRedeclaration");
    function $r(A, R) {
      var I = Tu(A, R, "get");
      return cp(A, I);
    }
    o($r, "_classPrivateFieldGet");
    function cp(A, R) {
      return R.get ? R.get.call(A) : R.value;
    }
    o(cp, "_classApplyDescriptorGet");
    function Qn(A, R, I) {
      if (!R.has(A))
        throw new TypeError("attempted to get private field on non-instance");
      return I;
    }
    o(Qn, "_classPrivateMethodGet");
    function Fu(A, R, I) {
      var Z = Tu(A, R, "set");
      return dp(A, Z, I), I;
    }
    o(Fu, "_classPrivateFieldSet");
    function Tu(A, R, I) {
      if (!R.has(A))
        throw new TypeError("attempted to " + I + " private field on non-instance");
      return R.get(A);
    }
    o(Tu, "_classExtractFieldDescriptor");
    function dp(A, R, I) {
      if (R.set)
        R.set.call(A, I);
      else {
        if (!R.writable)
          throw new TypeError("attempted to set read only private field");
        R.value = I;
      }
    }
    o(dp, "_classApplyDescriptorSet");
    function Le(A, R) {
      if (A == null)
        return {};
      var I = fp(A, R), Z, me;
      if (Object.getOwnPropertySymbols) {
        var be = Object.getOwnPropertySymbols(A);
        for (me = 0; me < be.length; me++)
          Z = be[me], !(R.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(A, Z) || (I[Z] = A[Z]));
      }
      return I;
    }
    o(Le, "_objectWithoutProperties");
    function fp(A, R) {
      if (A == null)
        return {};
      var I = {}, Z = Object.keys(A), me, be;
      for (be = 0; be < Z.length; be++)
        me = Z[be], !(R.indexOf(me) >= 0) && (I[me] = A[me]);
      return I;
    }
    o(fp, "_objectWithoutPropertiesLoose");
    function ae(A) {
      return mp(A) || Ru(A) || Ra(A) || pp();
    }
    o(ae, "_toConsumableArray");
    function pp() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    o(pp, "_nonIterableSpread");
    function Ru(A) {
      if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null)
        return Array.from(A);
    }
    o(Ru, "_iterableToArray");
    function mp(A) {
      if (Array.isArray(A))
        return ei(A);
    }
    o(mp, "_arrayWithoutHoles");
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
      return Su(A) || hp(A, R) || Ra(A, R) || ku();
    }
    o(H, "_slicedToArray");
    function ku() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    o(ku, "_nonIterableRest");
    function hp(A, R) {
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
        } catch (ti) {
          rt = !0, me = ti;
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
    o(hp, "_iterableToArrayLimit");
    function Su(A) {
      if (Array.isArray(A))
        return A;
    }
    o(Su, "_arrayWithHoles");
    function xt(A, R) {
      if (!(A instanceof R))
        throw new TypeError("Cannot call a class as a function");
    }
    o(xt, "_classCallCheck");
    function Ou(A, R) {
      for (var I = 0; I < R.length; I++) {
        var Z = R[I];
        Z.enumerable = Z.enumerable || !1, Z.configurable = !0, "value" in Z && (Z.writable = !0), Object.defineProperty(A, Mu(Z.key), Z);
      }
    }
    o(Ou, "_defineProperties");
    function Et(A, R, I) {
      return R && Ou(A.prototype, R), I && Ou(A, I), Object.defineProperty(A, "prototype", {
        writable: !1
      }), A;
    }
    o(Et, "_createClass");
    function Mu(A) {
      var R = vp(A, "string");
      return S(R) === "symbol" ? R : String(R);
    }
    o(Mu, "_toPropertyKey");
    function vp(A, R) {
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
    o(vp, "_toPrimitive");
    function Fe(A, R) {
      var I = typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
      if (!I) {
        if (Array.isArray(A) || (I = Ra(A)) || R && A && typeof A.length == "number") {
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
    function Ra(A, R) {
      if (!!A) {
        if (typeof A == "string")
          return ei(A, R);
        var I = Object.prototype.toString.call(A).slice(8, -1);
        if (I === "Object" && A.constructor && (I = A.constructor.name), I === "Map" || I === "Set")
          return Array.from(A);
        if (I === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))
          return ei(A, R);
      }
    }
    o(Ra, "_unsupportedIterableToArray");
    function ei(A, R) {
      (R == null || R > A.length) && (R = A.length);
      for (var I = 0, Z = new Array(R); I < R; I++)
        Z[I] = A[I];
      return Z;
    }
    o(ei, "_arrayLikeToArray");
    function S(A) {
      return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
        return typeof R;
      } : function(R) {
        return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
      }, S(A);
    }
    o(S, "_typeof"), function() {
      var A, R, I, Z, me = Object.create, be = Object.defineProperty, et = Object.getPrototypeOf, ft = Object.prototype.hasOwnProperty, tt = Object.getOwnPropertyNames, rt = Object.getOwnPropertyDescriptor, ti = /* @__PURE__ */ o(function(t, r, a) {
        return r in t ? be(t, r, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: a
        }) : t[r] = a;
      }, "__defNormalProp"), gp = /* @__PURE__ */ o(function(t) {
        return be(t, "__esModule", {
          value: !0
        });
      }, "__markAsModule"), E = /* @__PURE__ */ o(function(t, r) {
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
      }, "__export"), bp = /* @__PURE__ */ o(function(t, r, a) {
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
      }, "__exportStar"), bt = /* @__PURE__ */ o(function(t) {
        return bp(gp(be(t != null ? me(et(t)) : {}, "default", t && t.__esModule && "default" in t ? {
          get: /* @__PURE__ */ o(function() {
            return t.default;
          }, "get"),
          enumerable: !0
        } : {
          value: t,
          enumerable: !0
        })), t);
      }, "__toModule"), Nu = /* @__PURE__ */ o(function(t, r, a) {
        return ti(t, S(r) !== "symbol" ? r + "" : r, a), a;
      }, "__publicField"), yp = E(function(e, t) {
        t.exports = function() {
        };
      }), er = E(function(e, t) {
        var r = yp()();
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Iu = E(function(e, t) {
        var r = er(), a = Array.prototype.forEach, n = Object.create, i = /* @__PURE__ */ o(function(l, s) {
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
      }), wp = E(function(e, t) {
        t.exports = function() {
          var r = Math.sign;
          return typeof r != "function" ? !1 : r(10) === 1 && r(-20) === -1;
        };
      }), Dp = E(function(e, t) {
        t.exports = function(r) {
          return r = Number(r), isNaN(r) || r === 0 ? r : r > 0 ? 1 : -1;
        };
      }), _p = E(function(e, t) {
        t.exports = wp()() ? Math.sign : Dp();
      }), xp = E(function(e, t) {
        var r = _p(), a = Math.abs, n = Math.floor;
        t.exports = function(i) {
          return isNaN(i) ? 0 : (i = Number(i), i === 0 || !isFinite(i) ? i : r(i) * n(a(i)));
        };
      }), tr = E(function(e, t) {
        var r = xp(), a = Math.max;
        t.exports = function(n) {
          return a(0, r(n));
        };
      }), Pu = E(function(e, t) {
        var r = tr();
        t.exports = function(a, n, i) {
          var u;
          return isNaN(a) ? (u = n, u >= 0 ? i && u ? u - 1 : u : 1) : a === !1 ? !1 : r(a);
        };
      }), jt = E(function(e, t) {
        t.exports = function(r) {
          if (typeof r != "function")
            throw new TypeError(r + " is not a function");
          return r;
        };
      }), Dr = E(function(e, t) {
        var r = er();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError("Cannot use null or undefined");
          return a;
        };
      }), Ep = E(function(e, t) {
        var r = jt(), a = Dr(), n = Function.prototype.bind, i = Function.prototype.call, u = Object.keys, l = Object.prototype.propertyIsEnumerable;
        t.exports = function(s, c) {
          return function(d, f) {
            var p, m = arguments[2], h = arguments[3];
            return d = Object(a(d)), r(f), p = u(d), h && p.sort(typeof h == "function" ? n.call(h, d) : void 0), typeof s != "function" && (s = p[s]), i.call(s, p, function(v, y) {
              return l.call(d, v) ? i.call(f, m, d[v], v, d, y) : c;
            });
          };
        };
      }), ka = E(function(e, t) {
        t.exports = Ep()("forEach");
      }), rr = E(function() {
      }), Cp = E(function(e, t) {
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
      }), Ap = E(function(e, t) {
        t.exports = function() {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        };
      }), Fp = E(function(e, t) {
        var r = er(), a = Object.keys;
        t.exports = function(n) {
          return a(r(n) ? Object(n) : n);
        };
      }), Tp = E(function(e, t) {
        t.exports = Ap()() ? Object.keys : Fp();
      }), Rp = E(function(e, t) {
        var r = Tp(), a = Dr(), n = Math.max;
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
      }), Lu = E(function(e, t) {
        t.exports = Cp()() ? Object.assign : Rp();
      }), kp = E(function(e, t) {
        var r = er(), a = {
          function: !0,
          object: !0
        };
        t.exports = function(n) {
          return r(n) && a[S(n)] || !1;
        };
      }), Sp = E(function(e, t) {
        var r = Lu(), a = kp(), n = er(), i = Error.captureStackTrace;
        t.exports = function(u) {
          var l = new Error(u), s = arguments[1], c = arguments[2];
          return n(c) || a(s) && (c = s, s = null), n(c) && r(l, c), n(s) && (l.code = s), i && i(l, t.exports), l;
        };
      }), Bu = E(function(e, t) {
        var r = Dr(), a = Object.defineProperty, n = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols;
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
      }), qu = E(function(e, t) {
        var r = tr(), a = /* @__PURE__ */ o(function(c, d) {
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
        }) : (l = Bu(), u = function() {
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
      }), ju = E(function(e, t) {
        var r = void 0;
        t.exports = function(a) {
          return a !== r && a !== null;
        };
      }), Op = E(function(e, t) {
        var r = ju(), a = {
          object: !0,
          function: !0,
          undefined: !0
        };
        t.exports = function(n) {
          return r(n) ? hasOwnProperty.call(a, S(n)) : !1;
        };
      }), Mp = E(function(e, t) {
        var r = Op();
        t.exports = function(a) {
          if (!r(a))
            return !1;
          try {
            return a.constructor ? a.constructor.prototype === a : !1;
          } catch {
            return !1;
          }
        };
      }), Np = E(function(e, t) {
        var r = Mp();
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
      }), Ip = E(function(e, t) {
        var r = Np(), a = /^\s*class[\s{/}]/, n = Function.prototype.toString;
        t.exports = function(i) {
          return !(!r(i) || a.test(n.call(i)));
        };
      }), Pp = E(function(e, t) {
        var r = "razdwatrzy";
        t.exports = function() {
          return typeof r.contains != "function" ? !1 : r.contains("dwa") === !0 && r.contains("foo") === !1;
        };
      }), Lp = E(function(e, t) {
        var r = String.prototype.indexOf;
        t.exports = function(a) {
          return r.call(this, a, arguments[1]) > -1;
        };
      }), Bp = E(function(e, t) {
        t.exports = Pp()() ? String.prototype.contains : Lp();
      }), ar = E(function(e, t) {
        var r = ju(), a = Ip(), n = Lu(), i = Iu(), u = Bp(), l = t.exports = function(s, c) {
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
      }), qp = E(function(e, t) {
        var r = ar(), a = jt(), n = Function.prototype.apply, i = Function.prototype.call, u = Object.create, l = Object.defineProperty, s = Object.defineProperties, c = Object.prototype.hasOwnProperty, d = {
          configurable: !0,
          enumerable: !1,
          writable: !0
        }, f, p, m, h, v, y, g;
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
        }, y = {
          on: r(f),
          once: r(p),
          off: r(m),
          emit: r(h)
        }, g = s({}, y), t.exports = e = /* @__PURE__ */ o(function(_) {
          return _ == null ? u(g) : s(Object(_), y);
        }, "exports"), e.methods = v;
      }), jp = E(function(e, t) {
        t.exports = function() {
          var r = Array.from, a, n;
          return typeof r != "function" ? !1 : (a = ["raz", "dwa"], n = r(a), Boolean(n && n !== a && n[1] === "dwa"));
        };
      }), zp = E(function(e, t) {
        t.exports = function() {
          return (typeof globalThis > "u" ? "undefined" : S(globalThis)) !== "object" || !globalThis ? !1 : globalThis.Array === Array;
        };
      }), Vp = E(function(e, t) {
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
      }), Sa = E(function(e, t) {
        t.exports = zp()() ? globalThis : Vp();
      }), Hp = E(function(e, t) {
        var r = Sa(), a = {
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
      }), $p = E(function(e, t) {
        t.exports = function(r) {
          return r ? S(r) === "symbol" ? !0 : !r.constructor || r.constructor.name !== "Symbol" ? !1 : r[r.constructor.toStringTag] === "Symbol" : !1;
        };
      }), zu = E(function(e, t) {
        var r = $p();
        t.exports = function(a) {
          if (!r(a))
            throw new TypeError(a + " is not a symbol");
          return a;
        };
      }), Up = E(function(e, t) {
        var r = ar(), a = Object.create, n = Object.defineProperty, i = Object.prototype, u = a(null);
        t.exports = function(l) {
          for (var s = 0, c, d; u[l + (s || "")]; )
            ++s;
          return l += s || "", u[l] = !0, c = "@@" + l, n(i, c, r.gs(null, function(f) {
            d || (d = !0, n(this, c, r(f)), d = !1);
          })), c;
        };
      }), Gp = E(function(e, t) {
        var r = ar(), a = Sa().Symbol;
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
      }), Wp = E(function(e, t) {
        var r = ar(), a = zu(), n = /* @__PURE__ */ Object.create(null);
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
      }), Yp = E(function(e, t) {
        var r = ar(), a = zu(), n = Sa().Symbol, i = Up(), u = Gp(), l = Wp(), s = Object.create, c = Object.defineProperties, d = Object.defineProperty, f, p, m;
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
          var y;
          if (this instanceof h)
            throw new TypeError("Symbol is not a constructor");
          return m ? n(v) : (y = s(p.prototype), v = v === void 0 ? "" : String(v), c(y, {
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
      }), Xp = E(function(e, t) {
        t.exports = Hp()() ? Sa().Symbol : Yp();
      }), Kp = E(function(e, t) {
        var r = Object.prototype.toString, a = r.call(function() {
          return arguments;
        }());
        t.exports = function(n) {
          return r.call(n) === a;
        };
      }), Zp = E(function(e, t) {
        var r = Object.prototype.toString, a = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
        t.exports = function(n) {
          return typeof n == "function" && a(r.call(n));
        };
      }), Jp = E(function(e, t) {
        var r = Object.prototype.toString, a = r.call("");
        t.exports = function(n) {
          return typeof n == "string" || n && S(n) === "object" && (n instanceof String || r.call(n) === a) || !1;
        };
      }), Qp = E(function(e, t) {
        var r = Xp().iterator, a = Kp(), n = Zp(), i = tr(), u = jt(), l = Dr(), s = er(), c = Jp(), d = Array.isArray, f = Function.prototype.call, p = {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: null
        }, m = Object.defineProperty;
        t.exports = function(h) {
          var v = arguments[1], y = arguments[2], g, b, _, x, T, k, O, B, W, j;
          if (h = Object(l(h)), s(v) && u(v), !this || this === Array || !n(this)) {
            if (!v) {
              if (a(h))
                return T = h.length, T !== 1 ? Array.apply(null, h) : (x = new Array(1), x[0] = h[0], x);
              if (d(h)) {
                for (x = new Array(T = h.length), b = 0; b < T; ++b)
                  x[b] = h[b];
                return x;
              }
            }
            x = [];
          } else
            g = this;
          if (!d(h)) {
            if ((W = h[r]) !== void 0) {
              for (O = u(W).call(h), g && (x = new g()), B = O.next(), b = 0; !B.done; )
                j = v ? f.call(v, y, B.value, b) : B.value, g ? (p.value = j, m(x, b, p)) : x[b] = j, B = O.next(), ++b;
              T = b;
            } else if (c(h)) {
              for (T = h.length, g && (x = new g()), b = 0, _ = 0; b < T; ++b)
                j = h[b], b + 1 < T && (k = j.charCodeAt(0), k >= 55296 && k <= 56319 && (j += h[++b])), j = v ? f.call(v, y, j, _) : j, g ? (p.value = j, m(x, _, p)) : x[_] = j, ++_;
              T = _;
            }
          }
          if (T === void 0)
            for (T = i(h.length), g && (x = new g(T)), b = 0; b < T; ++b)
              j = v ? f.call(v, y, h[b], b) : h[b], g ? (p.value = j, m(x, b, p)) : x[b] = j;
          return g && (p.value = null, x.length = T), x;
        };
      }), ri = E(function(e, t) {
        t.exports = jp()() ? Array.from : Qp();
      }), em = E(function(e, t) {
        var r = ri(), a = Array.isArray;
        t.exports = function(n) {
          return a(n) ? n : r(n);
        };
      }), tm = E(function(e, t) {
        var r = em(), a = er(), n = jt(), i = Array.prototype.slice, u;
        u = /* @__PURE__ */ o(function(s) {
          return this.map(function(c, d) {
            return c ? c(s[d]) : s[d];
          }).concat(i.call(s, this.length));
        }, "resolveArgs"), t.exports = function(l) {
          return l = r(l), l.forEach(function(s) {
            a(s) && n(s);
          }), u.bind(l);
        };
      }), rm = E(function(e, t) {
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
      }), am = E(function(e, t) {
        var r = Sp(), a = qu(), n = ar(), i = qp().methods, u = tm(), l = rm(), s = Function.prototype.apply, c = Function.prototype.call, d = Object.create, f = Object.defineProperties, p = i.on, m = i.emit;
        t.exports = function(h, v, y) {
          var g = d(null), b, _, x, T, k, O, B, W, j, z, $, V, J, re, ee;
          return v !== !1 ? _ = v : isNaN(h.length) ? _ = 1 : _ = h.length, y.normalizer && (z = l(y.normalizer), x = z.get, T = z.set, k = z.delete, O = z.clear), y.resolvers != null && (ee = u(y.resolvers)), x ? re = a(function(Y) {
            var q, ie, C = arguments;
            if (ee && (C = ee(C)), q = x(C), q !== null && hasOwnProperty.call(g, q))
              return $ && b.emit("get", q, C, this), g[q];
            if (C.length === 1 ? ie = c.call(h, this, C[0]) : ie = s.call(h, this, C), q === null) {
              if (q = x(C), q !== null)
                throw r("Circular invocation", "CIRCULAR_INVOCATION");
              q = T(C);
            } else if (hasOwnProperty.call(g, q))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return g[q] = ie, V && b.emit("set", q, null, ie), ie;
          }, _) : v === 0 ? re = /* @__PURE__ */ o(function() {
            var q;
            if (hasOwnProperty.call(g, "data"))
              return $ && b.emit("get", "data", arguments, this), g.data;
            if (arguments.length ? q = s.call(h, this, arguments) : q = c.call(h, this), hasOwnProperty.call(g, "data"))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return g.data = q, V && b.emit("set", "data", null, q), q;
          }, "memoized") : re = /* @__PURE__ */ o(function(q) {
            var ie, C = arguments, G;
            if (ee && (C = ee(arguments)), G = String(C[0]), hasOwnProperty.call(g, G))
              return $ && b.emit("get", G, C, this), g[G];
            if (C.length === 1 ? ie = c.call(h, this, C[0]) : ie = s.call(h, this, C), hasOwnProperty.call(g, G))
              throw r("Circular invocation", "CIRCULAR_INVOCATION");
            return g[G] = ie, V && b.emit("set", G, null, ie), ie;
          }, "memoized"), b = {
            original: h,
            memoized: re,
            profileName: y.profileName,
            get: /* @__PURE__ */ o(function(q) {
              return ee && (q = ee(q)), x ? x(q) : String(q[0]);
            }, "get"),
            has: /* @__PURE__ */ o(function(q) {
              return hasOwnProperty.call(g, q);
            }, "has"),
            delete: /* @__PURE__ */ o(function(q) {
              var ie;
              !hasOwnProperty.call(g, q) || (k && k(q), ie = g[q], delete g[q], J && b.emit("delete", q, ie));
            }, "_delete"),
            clear: /* @__PURE__ */ o(function() {
              var q = g;
              O && O(), g = d(null), b.emit("clear", q);
            }, "clear"),
            on: /* @__PURE__ */ o(function(q, ie) {
              return q === "get" ? $ = !0 : q === "set" ? V = !0 : q === "delete" && (J = !0), p.call(this, q, ie);
            }, "on"),
            emit: m,
            updateEnv: /* @__PURE__ */ o(function() {
              h = b.original;
            }, "updateEnv")
          }, x ? B = a(function(Y) {
            var q, ie = arguments;
            ee && (ie = ee(ie)), q = x(ie), q !== null && b.delete(q);
          }, _) : v === 0 ? B = /* @__PURE__ */ o(function() {
            return b.delete("data");
          }, "extDel") : B = /* @__PURE__ */ o(function(q) {
            return ee && (q = ee(arguments)[0]), b.delete(q);
          }, "extDel"), W = a(function() {
            var Y, q = arguments;
            return v === 0 ? g.data : (ee && (q = ee(q)), x ? Y = x(q) : Y = String(q[0]), g[Y]);
          }), j = a(function() {
            var Y, q = arguments;
            return v === 0 ? b.has("data") : (ee && (q = ee(q)), x ? Y = x(q) : Y = String(q[0]), Y === null ? !1 : b.has(Y));
          }), f(re, {
            __memoized__: n(!0),
            delete: n(B),
            clear: n(b.clear),
            _get: n(W),
            _has: n(j)
          }), b;
        };
      }), nm = E(function(e, t) {
        var r = jt(), a = ka(), n = rr(), i = am(), u = Pu();
        t.exports = /* @__PURE__ */ o(function l(s) {
          var c, d, f;
          if (r(s), c = Object(arguments[1]), c.async && c.promise)
            throw new Error("Options 'async' and 'promise' cannot be used together");
          return hasOwnProperty.call(s, "__memoized__") && !c.force ? s : (d = u(c.length, s.length, c.async && n.async), f = i(s, d, c), a(n, function(p, m) {
            c[m] && p(c[m], f, c);
          }), l.__profiler__ && l.__profiler__(f), f.updateEnv(), f.memoized);
        }, "self2");
      }), im = E(function(e, t) {
        t.exports = function(r) {
          var a, n, i = r.length;
          if (!i)
            return "";
          for (a = String(r[n = 0]); --i; )
            a += "" + r[++n];
          return a;
        };
      }), om = E(function(e, t) {
        t.exports = function(r) {
          return r ? function(a) {
            for (var n = String(a[0]), i = 0, u = r; --u; )
              n += "" + a[++i];
            return n;
          } : function() {
            return "";
          };
        };
      }), um = E(function(e, t) {
        t.exports = function() {
          var r = Number.isNaN;
          return typeof r != "function" ? !1 : !r({}) && r(NaN) && !r(34);
        };
      }), lm = E(function(e, t) {
        t.exports = function(r) {
          return r !== r;
        };
      }), sm = E(function(e, t) {
        t.exports = um()() ? Number.isNaN : lm();
      }), ai = E(function(e, t) {
        var r = sm(), a = tr(), n = Dr(), i = Array.prototype.indexOf, u = Object.prototype.hasOwnProperty, l = Math.abs, s = Math.floor;
        t.exports = function(c) {
          var d, f, p, m;
          if (!r(c))
            return i.apply(this, arguments);
          for (f = a(n(this).length), p = arguments[1], isNaN(p) ? p = 0 : p >= 0 ? p = s(p) : p = a(this.length) - s(l(p)), d = p; d < f; ++d)
            if (u.call(this, d) && (m = this[d], r(m)))
              return d;
          return -1;
        };
      }), cm = E(function(e, t) {
        var r = ai(), a = Object.create;
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
      }), dm = E(function(e, t) {
        var r = ai();
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
      }), fm = E(function(e, t) {
        var r = ai(), a = Object.create;
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
      }), Vu = E(function(e, t) {
        var r = jt(), a = ka(), n = Function.prototype.call;
        t.exports = function(i, u) {
          var l = {}, s = arguments[2];
          return r(u), a(i, function(c, d, f, p) {
            l[d] = n.call(u, s, c, d, f, p);
          }), l;
        };
      }), ni = E(function(e, t) {
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
      }), pm = E(function() {
        var e = ri(), t = Vu(), r = Bu(), a = qu(), n = ni(), i = Array.prototype.slice, u = Function.prototype.apply, l = Object.create;
        rr().async = function(s, c) {
          var d = l(null), f = l(null), p = c.memoized, m = c.original, h, v, y;
          c.memoized = a(function(g) {
            var b = arguments, _ = b[b.length - 1];
            return typeof _ == "function" && (h = _, b = i.call(b, 0, -1)), p.apply(v = this, y = b);
          }, p);
          try {
            r(c.memoized, p);
          } catch {
          }
          c.on("get", function(g) {
            var b, _, x;
            if (!!h) {
              if (d[g]) {
                typeof d[g] == "function" ? d[g] = [d[g], h] : d[g].push(h), h = null;
                return;
              }
              b = h, _ = v, x = y, h = v = y = null, n(function() {
                var T;
                hasOwnProperty.call(f, g) ? (T = f[g], c.emit("getasync", g, x, _), u.call(b, T.context, T.args)) : (h = b, v = _, y = x, p.apply(_, x));
              });
            }
          }), c.original = function() {
            var g, b, _, x;
            return h ? (g = e(arguments), b = /* @__PURE__ */ o(function T(k) {
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
            }, "self2"), _ = h, h = v = y = null, g.push(b), x = u.call(m, this, g), b.cb = _, h = b, x) : u.call(m, this, arguments);
          }, c.on("set", function(g) {
            if (!h) {
              c.delete(g);
              return;
            }
            d[g] ? typeof d[g] == "function" ? d[g] = [d[g], h.cb] : d[g].push(h.cb) : d[g] = h.cb, delete h.cb, h.id = g, h = null;
          }), c.on("delete", function(g) {
            var b;
            hasOwnProperty.call(d, g) || !f[g] || (b = f[g], delete f[g], c.emit("deleteasync", g, i.call(b.args, 1)));
          }), c.on("clear", function() {
            var g = f;
            f = l(null), c.emit("clearasync", t(g, function(b) {
              return i.call(b.args, 1);
            }));
          });
        };
      }), mm = E(function(e, t) {
        var r = Array.prototype.forEach, a = Object.create;
        t.exports = function(n) {
          var i = a(null);
          return r.call(arguments, function(u) {
            i[u] = !0;
          }), i;
        };
      }), Hu = E(function(e, t) {
        t.exports = function(r) {
          return typeof r == "function";
        };
      }), hm = E(function(e, t) {
        var r = Hu();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            throw new TypeError("Passed argument cannot be stringifed");
          }
        };
      }), vm = E(function(e, t) {
        var r = Dr(), a = hm();
        t.exports = function(n) {
          return a(r(n));
        };
      }), gm = E(function(e, t) {
        var r = Hu();
        t.exports = function(a) {
          try {
            return a && r(a.toString) ? a.toString() : String(a);
          } catch {
            return "<Non-coercible to string value>";
          }
        };
      }), bm = E(function(e, t) {
        var r = gm(), a = /[\n\r\u2028\u2029]/g;
        t.exports = function(n) {
          var i = r(n);
          return i.length > 100 && (i = i.slice(0, 99) + "\u2026"), i = i.replace(a, function(u) {
            return JSON.stringify(u).slice(1, -1);
          }), i;
        };
      }), $u = E(function(e, t) {
        t.exports = r, t.exports.default = r;
        function r(a) {
          return !!a && (S(a) === "object" || typeof a == "function") && typeof a.then == "function";
        }
        o(r, "isPromise");
      }), ym = E(function() {
        var e = Vu(), t = mm(), r = vm(), a = bm(), n = $u(), i = ni(), u = Object.create, l = t("then", "then:finally", "done", "done:finally");
        rr().promise = function(s, c) {
          var d = u(null), f = u(null), p = u(null);
          if (s === !0)
            s = null;
          else if (s = r(s), !l[s])
            throw new TypeError("'" + a(s) + "' is not valid promise mode");
          c.on("set", function(m, h, v) {
            var y = !1;
            if (!n(v)) {
              f[m] = v, c.emit("setasync", m, 1);
              return;
            }
            d[m] = 1, p[m] = v;
            var g = /* @__PURE__ */ o(function(k) {
              var O = d[m];
              if (y)
                throw new Error(`Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)
Consider to rely on 'then' or 'done' mode instead.`);
              !O || (delete d[m], f[m] = k, c.emit("setasync", m, O));
            }, "onSuccess"), b = /* @__PURE__ */ o(function() {
              y = !0, d[m] && (delete d[m], delete p[m], c.delete(m));
            }, "onFailure"), _ = s;
            if (_ || (_ = "then"), _ === "then") {
              var x = /* @__PURE__ */ o(function() {
                i(b);
              }, "nextTickFailure");
              v = v.then(function(T) {
                i(g.bind(this, T));
              }, x), typeof v.finally == "function" && v.finally(x);
            } else if (_ === "done") {
              if (typeof v.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
              v.done(g, b);
            } else if (_ === "done:finally") {
              if (typeof v.done != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
              if (typeof v.finally != "function")
                throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
              v.done(g), v.finally(b);
            }
          }), c.on("get", function(m, h, v) {
            var y;
            if (d[m]) {
              ++d[m];
              return;
            }
            y = p[m];
            var g = /* @__PURE__ */ o(function() {
              c.emit("getasync", m, h, v);
            }, "emit");
            n(y) ? typeof y.done == "function" ? y.done(g) : y.then(function() {
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
      }), wm = E(function() {
        var e = jt(), t = ka(), r = rr(), a = Function.prototype.apply;
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
      }), Dm = E(function(e, t) {
        t.exports = 2147483647;
      }), _m = E(function(e, t) {
        var r = tr(), a = Dm();
        t.exports = function(n) {
          if (n = r(n), n > a)
            throw new TypeError(n + " exceeds maximum possible timeout");
          return n;
        };
      }), xm = E(function() {
        var e = ri(), t = ka(), r = ni(), a = $u(), n = _m(), i = rr(), u = Function.prototype, l = Math.max, s = Math.min, c = Object.create;
        i.maxAge = function(d, f, p) {
          var m, h, v, y;
          d = n(d), d && (m = c(null), h = p.async && i.async || p.promise && i.promise ? "async" : "", f.on("set" + h, function(g) {
            m[g] = setTimeout(function() {
              f.delete(g);
            }, d), typeof m[g].unref == "function" && m[g].unref(), y && (y[g] && y[g] !== "nextTick" && clearTimeout(y[g]), y[g] = setTimeout(function() {
              delete y[g];
            }, v), typeof y[g].unref == "function" && y[g].unref());
          }), f.on("delete" + h, function(g) {
            clearTimeout(m[g]), delete m[g], y && (y[g] !== "nextTick" && clearTimeout(y[g]), delete y[g]);
          }), p.preFetch && (p.preFetch === !0 || isNaN(p.preFetch) ? v = 0.333 : v = l(s(Number(p.preFetch), 1), 0), v && (y = {}, v = (1 - v) * d, f.on("get" + h, function(g, b, _) {
            y[g] || (y[g] = "nextTick", r(function() {
              var x;
              y[g] === "nextTick" && (delete y[g], f.delete(g), p.async && (b = e(b), b.push(u)), x = f.memoized.apply(_, b), p.promise && a(x) && (typeof x.done == "function" ? x.done(u, u) : x.then(u, u)));
            }));
          }))), f.on("clear" + h, function() {
            t(m, function(g) {
              clearTimeout(g);
            }), m = {}, y && (t(y, function(g) {
              g !== "nextTick" && clearTimeout(g);
            }), y = {});
          }));
        };
      }), Em = E(function(e, t) {
        var r = tr(), a = Object.create, n = Object.prototype.hasOwnProperty;
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
      }), Cm = E(function() {
        var e = tr(), t = Em(), r = rr();
        r.max = function(a, n, i) {
          var u, l, s;
          a = e(a), a && (l = t(a), u = i.async && r.async || i.promise && r.promise ? "async" : "", n.on("set" + u, s = /* @__PURE__ */ o(function(d) {
            d = l.hit(d), d !== void 0 && n.delete(d);
          }, "hit")), n.on("get" + u, s), n.on("delete" + u, l.delete), n.on("clear" + u, l.clear));
        };
      }), Am = E(function() {
        var e = ar(), t = rr(), r = Object.create, a = Object.defineProperties;
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
      }), Uu = E(function(e, t) {
        var r = Iu(), a = Pu(), n = nm();
        t.exports = function(i) {
          var u = r(arguments[1]), l;
          return u.normalizer || (l = u.length = a(u.length, i.length, u.async), l !== 0 && (u.primitive ? l === !1 ? u.normalizer = im() : l > 1 && (u.normalizer = om()(l)) : l === !1 ? u.normalizer = cm()() : l === 1 ? u.normalizer = dm()() : u.normalizer = fm()(l))), u.async && pm(), u.promise && ym(), u.dispose && wm(), u.maxAge && xm(), u.max && Cm(), u.refCounter && Am(), n(i, u);
        };
      }), Gu = E(function(e) {
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
      }), Fm = E(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Gu();
        function r(a, n, i, u, l, s) {
          var c = a.length, d = "";
          function f(b, _) {
            var x = "";
            for (n++, d = a.charAt(n); n < c; ) {
              if (d === b)
                return n++, x;
              if (d === "\\") {
                n++, d = a.charAt(n);
                var T = void 0;
                if (d === b)
                  x += b;
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
                  var _ = d;
                  for (n++, d = a.charAt(n); t.isHex(d); )
                    _ += d, n++, d = a.charAt(n);
                  d === " " && (n++, d = a.charAt(n)), b += String.fromCharCode(parseInt(_, 16));
                  continue;
                } else
                  b += d;
              } else
                return b;
              n++, d = a.charAt(n);
            }
            return b;
          }
          o(p, "getIdent");
          function m() {
            d = a.charAt(n);
            for (var b = !1; d === " " || d === "	" || d === `
` || d === "\r" || d === "\f"; )
              b = !0, n++, d = a.charAt(n);
            return b;
          }
          o(m, "skipWhitespace");
          function h() {
            var b = v();
            if (n < c)
              throw Error('Rule expected but "' + a.charAt(n) + '" found.');
            return b;
          }
          o(h, "parse3");
          function v() {
            var b = y();
            if (!b)
              return null;
            var _ = b;
            for (d = a.charAt(n); d === ","; ) {
              if (n++, m(), _.type !== "selectors" && (_ = {
                type: "selectors",
                selectors: [b]
              }), b = y(), !b)
                throw Error('Rule expected after ",".');
              _.selectors.push(b);
            }
            return _;
          }
          o(v, "parseSelector");
          function y() {
            m();
            var b = {
              type: "ruleSet"
            }, _ = g();
            if (!_)
              return null;
            for (var x = b; _ && (_.type = "rule", x.rule = _, x = _, m(), d = a.charAt(n), !(n >= c || d === "," || d === ")")); )
              if (l[d]) {
                var T = d;
                if (n++, m(), _ = g(), !_)
                  throw Error('Rule expected after "' + T + '".');
                _.nestingOperator = T;
              } else
                _ = g(), _ && (_.nestingOperator = null);
            return b;
          }
          o(y, "parseSingleSelector");
          function g() {
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
                b = b || {}, (b.attrs = b.attrs || []).push(_);
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
                b = b || {}, (b.pseudos = b.pseudos || []).push(O);
              } else
                break;
            return b;
          }
          return o(g, "parseRule"), h();
        }
        o(r, "parseCssSelector"), e.parseCssSelector = r;
      }), Tm = E(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Gu();
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
      }), Wu = E(function(e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var t = Fm(), r = Tm(), a = function() {
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
      }), Rm = E(function(e, t) {
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
          var p = typeof D < "u" ? D : void 0, m = p || {}, h = m.MutationObserver || m.WebKitMutationObserver, v = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", y = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
          function g() {
            return function() {
              return process.nextTick(O);
            };
          }
          o(g, "useNextTick");
          function b() {
            return typeof l < "u" ? function() {
              l(O);
            } : T();
          }
          o(b, "useVertxTimer");
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
              return l = F.runOnLoop || F.runOnContext, b();
            } catch {
              return T();
            }
          }
          o(B, "attemptVertx");
          var W = void 0;
          v ? W = g() : h ? W = _() : y ? W = x() : p === void 0 ? W = B() : W = T();
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
          function C(F, M, L) {
            c(function(X) {
              var ue = !1, fe = ie(L, M, function(Ve) {
                ue || (ue = !0, M !== Ve ? Q(X, Ve) : U(X, Ve));
              }, function(Ve) {
                ue || (ue = !0, K(X, Ve));
              }, "Settle: " + (X._label || " unknown promise"));
              !ue && fe && (ue = !0, K(X, fe));
            }, F);
          }
          o(C, "handleForeignThenable");
          function G(F, M) {
            M._state === re ? U(F, M._result) : M._state === ee ? K(F, M._result) : ge(M, void 0, function(L) {
              return Q(F, L);
            }, function(L) {
              return K(F, L);
            });
          }
          o(G, "handleOwnThenable");
          function P(F, M, L) {
            M.constructor === F.constructor && L === j && M.constructor.resolve === z ? G(F, M) : L === void 0 ? U(F, M) : a(L) ? C(F, M, L) : U(F, M);
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
            var ue = a(L), fe = void 0, Ve = void 0, Vr = !0;
            if (ue) {
              try {
                fe = L(X);
              } catch (Kn) {
                Vr = !1, Ve = Kn;
              }
              if (M === fe) {
                K(M, q());
                return;
              }
            } else
              fe = X;
            M._state !== J || (ue && Vr ? Q(M, fe) : Vr === !1 ? K(M, Ve) : F === re ? U(M, fe) : F === ee && K(M, fe));
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
          function zr() {
            return new Error("Array Methods must be provided an Array");
          }
          o(zr, "validationError");
          var We = function() {
            function F(M, L) {
              this._instanceConstructor = M, this.promise = new M(V), this.promise[$] || Ce(this.promise), i(L) ? (this.length = L.length, this._remaining = L.length, this._result = new Array(this.length), this.length === 0 ? U(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(L), this._remaining === 0 && U(this.promise, this._result))) : K(this.promise, zr());
            }
            return o(F, "Enumerator2"), F.prototype._enumerate = /* @__PURE__ */ o(function(L) {
              for (var X = 0; this._state === J && X < L.length; X++)
                this._eachEntry(L[X], X);
            }, "_enumerate"), F.prototype._eachEntry = /* @__PURE__ */ o(function(L, X) {
              var ue = this._instanceConstructor, fe = ue.resolve;
              if (fe === z) {
                var Ve = void 0, Vr = void 0, Kn = !1;
                try {
                  Ve = L.then;
                } catch (wu) {
                  Kn = !0, Vr = wu;
                }
                if (Ve === j && L._state !== J)
                  this._settledAt(L._state, X, L._result);
                else if (typeof Ve != "function")
                  this._remaining--, this._result[X] = L;
                else if (ue === Re) {
                  var yu = new ue(V);
                  Kn ? K(yu, Vr) : P(yu, L, Ve), this._willSettleAt(yu, X);
                } else
                  this._willSettleAt(new ue(function(wu) {
                    return wu(L);
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
      }), km = E(function(e) {
        var t = 1e5, r = function() {
          var C = Object.prototype.toString, G = Object.prototype.hasOwnProperty;
          return {
            Class: /* @__PURE__ */ o(function(Q) {
              return C.call(Q).replace(/^\[object *|\]$/g, "");
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
        function d(C, G, P) {
          return C < G ? G : C > P ? P : C;
        }
        o(d, "clamp3");
        var f = Object.getOwnPropertyNames || function(C) {
          if (C !== Object(C))
            throw new TypeError("Object.getOwnPropertyNames called on non-object");
          var G = [], P;
          for (P in C)
            r.HasOwnProperty(C, P) && G.push(P);
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
        function m(C) {
          if (f && p) {
            var G = f(C), P;
            for (P = 0; P < G.length; P += 1)
              p(C, G[P], {
                value: C[G[P]],
                writable: !1,
                enumerable: !1,
                configurable: !1
              });
          }
        }
        o(m, "configureProperties");
        function h(C) {
          if (!p)
            return;
          if (C.length > t)
            throw new RangeError("Array too large for polyfill");
          function G(Q) {
            p(C, Q, {
              get: /* @__PURE__ */ o(function() {
                return C._getter(Q);
              }, "get"),
              set: /* @__PURE__ */ o(function(U) {
                C._setter(Q, U);
              }, "set"),
              enumerable: !0,
              configurable: !1
            });
          }
          o(G, "makeArrayAccessor");
          var P;
          for (P = 0; P < C.length; P += 1)
            G(P);
        }
        o(h, "makeArrayAccessors");
        function v(C, G) {
          var P = 32 - G;
          return C << P >> P;
        }
        o(v, "as_signed");
        function y(C, G) {
          var P = 32 - G;
          return C << P >>> P;
        }
        o(y, "as_unsigned");
        function g(C) {
          return [C & 255];
        }
        o(g, "packI8");
        function b(C) {
          return v(C[0], 8);
        }
        o(b, "unpackI8");
        function _(C) {
          return [C & 255];
        }
        o(_, "packU8");
        function x(C) {
          return y(C[0], 8);
        }
        o(x, "unpackU8");
        function T(C) {
          return C = c(Number(C)), [C < 0 ? 0 : C > 255 ? 255 : C & 255];
        }
        o(T, "packU8Clamped");
        function k(C) {
          return [C >> 8 & 255, C & 255];
        }
        o(k, "packI16");
        function O(C) {
          return v(C[0] << 8 | C[1], 16);
        }
        o(O, "unpackI16");
        function B(C) {
          return [C >> 8 & 255, C & 255];
        }
        o(B, "packU16");
        function W(C) {
          return y(C[0] << 8 | C[1], 16);
        }
        o(W, "unpackU16");
        function j(C) {
          return [C >> 24 & 255, C >> 16 & 255, C >> 8 & 255, C & 255];
        }
        o(j, "packI32");
        function z(C) {
          return v(C[0] << 24 | C[1] << 16 | C[2] << 8 | C[3], 32);
        }
        o(z, "unpackI32");
        function $(C) {
          return [C >> 24 & 255, C >> 16 & 255, C >> 8 & 255, C & 255];
        }
        o($, "packU32");
        function V(C) {
          return y(C[0] << 24 | C[1] << 16 | C[2] << 8 | C[3], 32);
        }
        o(V, "unpackU32");
        function J(C, G, P) {
          var Q = (1 << G - 1) - 1, oe, U, K, ge, we, xe, Me;
          function je(Pe) {
            var Ce = i(Pe), zr = Pe - Ce;
            return zr < 0.5 ? Ce : zr > 0.5 || Ce % 2 ? Ce + 1 : Ce;
          }
          for (o(je, "roundToEven"), C !== C ? (U = (1 << G) - 1, K = s(2, P - 1), oe = 0) : C === 1 / 0 || C === -1 / 0 ? (U = (1 << G) - 1, K = 0, oe = C < 0 ? 1 : 0) : C === 0 ? (U = 0, K = 0, oe = 1 / C === -1 / 0 ? 1 : 0) : (oe = C < 0, C = n(C), C >= s(2, 1 - Q) ? (U = l(i(u(C) / a), 1023), K = je(C / s(2, U) * s(2, P)), K / s(2, P) >= 2 && (U = U + 1, K = 1), U > Q ? (U = (1 << G) - 1, K = 0) : (U = U + Q, K = K - s(2, P))) : (U = 0, K = je(C / s(2, 1 - Q - P)))), we = [], ge = P; ge; ge -= 1)
            we.push(K % 2 ? 1 : 0), K = i(K / 2);
          for (ge = G; ge; ge -= 1)
            we.push(U % 2 ? 1 : 0), U = i(U / 2);
          for (we.push(oe ? 1 : 0), we.reverse(), xe = we.join(""), Me = []; xe.length; )
            Me.push(parseInt(xe.substring(0, 8), 2)), xe = xe.substring(8);
          return Me;
        }
        o(J, "packIEEE754");
        function re(C, G, P) {
          var Q = [], oe, U, K, ge, we, xe, Me, je;
          for (oe = C.length; oe; oe -= 1)
            for (K = C[oe - 1], U = 8; U; U -= 1)
              Q.push(K % 2 ? 1 : 0), K = K >> 1;
          return Q.reverse(), ge = Q.join(""), we = (1 << G - 1) - 1, xe = parseInt(ge.substring(0, 1), 2) ? -1 : 1, Me = parseInt(ge.substring(1, 1 + G), 2), je = parseInt(ge.substring(1 + G), 2), Me === (1 << G) - 1 ? je === 0 ? xe * (1 / 0) : NaN : Me > 0 ? xe * s(2, Me - we) * (1 + je / s(2, P)) : je !== 0 ? xe * s(2, -(we - 1)) * (je / s(2, P)) : xe < 0 ? -0 : 0;
        }
        o(re, "unpackIEEE754");
        function ee(C) {
          return re(C, 11, 52);
        }
        o(ee, "unpackF64");
        function Y(C) {
          return J(C, 11, 52);
        }
        o(Y, "packF64");
        function q(C) {
          return re(C, 8, 23);
        }
        o(q, "unpackF32");
        function ie(C) {
          return J(C, 8, 23);
        }
        o(ie, "packF32"), function() {
          function C(Pe) {
            if (Pe = r.ToInt32(Pe), Pe < 0)
              throw new RangeError("ArrayBuffer size is not a small enough positive integer");
            this.byteLength = Pe, this._bytes = [], this._bytes.length = Pe;
            var Ce;
            for (Ce = 0; Ce < this.byteLength; Ce += 1)
              this._bytes[Ce] = 0;
            m(this);
          }
          o(C, "ArrayBuffer"), e.ArrayBuffer = e.ArrayBuffer || C;
          function G() {
          }
          o(G, "ArrayBufferView");
          function P(Pe, Ce, zr) {
            var We;
            return We = /* @__PURE__ */ o(function(ze, Ne, Ze) {
              var Je, Re, De, F;
              if (!arguments.length || typeof arguments[0] == "number") {
                if (this.length = r.ToInt32(arguments[0]), Ze < 0)
                  throw new RangeError("ArrayBufferView size is not a small enough positive integer");
                this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new C(this.byteLength), this.byteOffset = 0;
              } else if (S(arguments[0]) === "object" && arguments[0].constructor === We)
                for (Je = arguments[0], this.length = Je.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new C(this.byteLength), this.byteOffset = 0, De = 0; De < this.length; De += 1)
                  this._setter(De, Je._getter(De));
              else if (S(arguments[0]) === "object" && !(arguments[0] instanceof C || r.Class(arguments[0]) === "ArrayBuffer"))
                for (Re = arguments[0], this.length = r.ToUint32(Re.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new C(this.byteLength), this.byteOffset = 0, De = 0; De < this.length; De += 1)
                  F = Re[De], this._setter(De, Number(F));
              else if (S(arguments[0]) === "object" && (arguments[0] instanceof C || r.Class(arguments[0]) === "ArrayBuffer")) {
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
            }, "ctor"), We.prototype = new G(), We.prototype.BYTES_PER_ELEMENT = Pe, We.prototype._pack = Ce, We.prototype._unpack = zr, We.BYTES_PER_ELEMENT = Pe, We.prototype._getter = function(Ae) {
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
          var Q = P(1, g, b), oe = P(1, _, x), U = P(1, T, x), K = P(2, k, O), ge = P(2, B, W), we = P(4, j, z), xe = P(4, $, V), Me = P(4, ie, q), je = P(8, Y, ee);
          e.Int8Array = e.Int8Array || Q, e.Uint8Array = e.Uint8Array || oe, e.Uint8ClampedArray = e.Uint8ClampedArray || U, e.Int16Array = e.Int16Array || K, e.Uint16Array = e.Uint16Array || ge, e.Int32Array = e.Int32Array || we, e.Uint32Array = e.Uint32Array || xe, e.Float32Array = e.Float32Array || Me, e.Float64Array = e.Float64Array || je;
        }(), function() {
          function C(U, K) {
            return r.IsCallable(U.get) ? U.get(K) : U[K];
          }
          o(C, "r");
          var G = function() {
            var U = new e.Uint16Array([4660]), K = new e.Uint8Array(U.buffer);
            return C(K, 0) === 18;
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
                xe.push(C(we, Me));
              return Boolean(ge) === Boolean(G) && xe.reverse(), C(new U(new e.Uint8Array(xe).buffer), 0);
            };
          }
          o(Q, "makeGetter"), P.prototype.getUint8 = Q(e.Uint8Array), P.prototype.getInt8 = Q(e.Int8Array), P.prototype.getUint16 = Q(e.Uint16Array), P.prototype.getInt16 = Q(e.Int16Array), P.prototype.getUint32 = Q(e.Uint32Array), P.prototype.getInt32 = Q(e.Int32Array), P.prototype.getFloat32 = Q(e.Float32Array), P.prototype.getFloat64 = Q(e.Float64Array);
          function oe(U) {
            return function(K, ge, we) {
              if (K = r.ToUint32(K), K + U.BYTES_PER_ELEMENT > this.byteLength)
                throw new RangeError("Array index out of range");
              var xe = new U([ge]), Me = new e.Uint8Array(xe.buffer), je = [], Pe, Ce;
              for (Pe = 0; Pe < U.BYTES_PER_ELEMENT; Pe += 1)
                je.push(C(Me, Pe));
              Boolean(we) === Boolean(G) && je.reverse(), Ce = new e.Uint8Array(this.buffer, K, U.BYTES_PER_ELEMENT), Ce.set(je);
            };
          }
          o(oe, "makeSetter"), P.prototype.setUint8 = oe(e.Uint8Array), P.prototype.setInt8 = oe(e.Int8Array), P.prototype.setUint16 = oe(e.Uint16Array), P.prototype.setInt16 = oe(e.Int16Array), P.prototype.setUint32 = oe(e.Uint32Array), P.prototype.setInt32 = oe(e.Int32Array), P.prototype.setFloat32 = oe(e.Float32Array), P.prototype.setFloat64 = oe(e.Float64Array), e.DataView = e.DataView || P;
        }();
      }), Sm = E(function(e) {
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
      }), nr = E(function(e, t) {
        var r = /* @__PURE__ */ o(function(n) {
          return n && n.Math == Math && n;
        }, "check");
        t.exports = r((typeof globalThis > "u" ? "undefined" : S(globalThis)) == "object" && globalThis) || r((typeof D > "u" ? "undefined" : S(D)) == "object" && D) || r((typeof self > "u" ? "undefined" : S(self)) == "object" && self) || r((typeof Qe > "u" ? "undefined" : S(Qe)) == "object" && Qe) || function() {
          return this;
        }() || Function("return this")();
      }), ir = E(function(e, t) {
        t.exports = function(r) {
          try {
            return !!r();
          } catch {
            return !0;
          }
        };
      }), Oa = E(function(e, t) {
        var r = ir();
        t.exports = !r(function() {
          var a = function() {
          }.bind();
          return typeof a != "function" || a.hasOwnProperty("prototype");
        });
      }), Om = E(function(e, t) {
        var r = Oa(), a = Function.prototype, n = a.apply, i = a.call;
        t.exports = (typeof Reflect > "u" ? "undefined" : S(Reflect)) == "object" && Reflect.apply || (r ? i.bind(n) : function() {
          return i.apply(n, arguments);
        });
      }), zt = E(function(e, t) {
        var r = Oa(), a = Function.prototype, n = a.call, i = r && a.bind.bind(n, n);
        t.exports = r ? i : function(u) {
          return function() {
            return n.apply(u, arguments);
          };
        };
      }), Yu = E(function(e, t) {
        var r = zt(), a = r({}.toString), n = r("".slice);
        t.exports = function(i) {
          return n(a(i), 8, -1);
        };
      }), Xu = E(function(e, t) {
        var r = Yu(), a = zt();
        t.exports = function(n) {
          if (r(n) === "Function")
            return a(n);
        };
      }), Ku = E(function(e, t) {
        var r = (typeof N > "u" ? "undefined" : S(N)) == "object" && N.all, a = typeof r > "u" && r !== void 0;
        t.exports = {
          all: r,
          IS_HTMLDDA: a
        };
      }), or = E(function(e, t) {
        var r = Ku(), a = r.all;
        t.exports = r.IS_HTMLDDA ? function(n) {
          return typeof n == "function" || n === a;
        } : function(n) {
          return typeof n == "function";
        };
      }), _r = E(function(e, t) {
        var r = ir();
        t.exports = !r(function() {
          return Object.defineProperty({}, 1, {
            get: /* @__PURE__ */ o(function() {
              return 7;
            }, "get")
          })[1] != 7;
        });
      }), ii = E(function(e, t) {
        var r = Oa(), a = Function.prototype.call;
        t.exports = r ? a.bind(a) : function() {
          return a.apply(a, arguments);
        };
      }), Zu = E(function(e) {
        var t = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, a = r && !t.call({
          1: 2
        }, 1);
        e.f = a ? /* @__PURE__ */ o(function(i) {
          var u = r(this, i);
          return !!u && u.enumerable;
        }, "propertyIsEnumerable") : t;
      }), Ju = E(function(e, t) {
        t.exports = function(r, a) {
          return {
            enumerable: !(r & 1),
            configurable: !(r & 2),
            writable: !(r & 4),
            value: a
          };
        };
      }), Mm = E(function(e, t) {
        var r = zt(), a = ir(), n = Yu(), i = Object, u = r("".split);
        t.exports = a(function() {
          return !i("z").propertyIsEnumerable(0);
        }) ? function(l) {
          return n(l) == "String" ? u(l, "") : i(l);
        } : i;
      }), Qu = E(function(e, t) {
        t.exports = function(r) {
          return r == null;
        };
      }), el = E(function(e, t) {
        var r = Qu(), a = TypeError;
        t.exports = function(n) {
          if (r(n))
            throw a("Can't call method on " + n);
          return n;
        };
      }), Ma = E(function(e, t) {
        var r = Mm(), a = el();
        t.exports = function(n) {
          return r(a(n));
        };
      }), Na = E(function(e, t) {
        var r = or(), a = Ku(), n = a.all;
        t.exports = a.IS_HTMLDDA ? function(i) {
          return S(i) == "object" ? i !== null : r(i) || i === n;
        } : function(i) {
          return S(i) == "object" ? i !== null : r(i);
        };
      }), Ia = E(function(e, t) {
        t.exports = {};
      }), tl = E(function(e, t) {
        var r = Ia(), a = nr(), n = or(), i = /* @__PURE__ */ o(function(l) {
          return n(l) ? l : void 0;
        }, "aFunction");
        t.exports = function(u, l) {
          return arguments.length < 2 ? i(r[u]) || i(a[u]) : r[u] && r[u][l] || a[u] && a[u][l];
        };
      }), Nm = E(function(e, t) {
        var r = zt();
        t.exports = r({}.isPrototypeOf);
      }), Im = E(function(e, t) {
        var r = tl();
        t.exports = r("navigator", "userAgent") || "";
      }), Pm = E(function(e, t) {
        var r = nr(), a = Im(), n = r.process, i = r.Deno, u = n && n.versions || i && i.version, l = u && u.v8, s, c;
        l && (s = l.split("."), c = s[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !c && a && (s = a.match(/Edge\/(\d+)/), (!s || s[1] >= 74) && (s = a.match(/Chrome\/(\d+)/), s && (c = +s[1]))), t.exports = c;
      }), rl = E(function(e, t) {
        var r = Pm(), a = ir();
        t.exports = !!Object.getOwnPropertySymbols && !a(function() {
          var n = Symbol();
          return !String(n) || !(Object(n) instanceof Symbol) || !Symbol.sham && r && r < 41;
        });
      }), al = E(function(e, t) {
        var r = rl();
        t.exports = r && !Symbol.sham && S(Symbol.iterator) == "symbol";
      }), nl = E(function(e, t) {
        var r = tl(), a = or(), n = Nm(), i = al(), u = Object;
        t.exports = i ? function(l) {
          return S(l) == "symbol";
        } : function(l) {
          var s = r("Symbol");
          return a(s) && n(s.prototype, u(l));
        };
      }), Lm = E(function(e, t) {
        var r = String;
        t.exports = function(a) {
          try {
            return r(a);
          } catch {
            return "Object";
          }
        };
      }), il = E(function(e, t) {
        var r = or(), a = Lm(), n = TypeError;
        t.exports = function(i) {
          if (r(i))
            return i;
          throw n(a(i) + " is not a function");
        };
      }), Bm = E(function(e, t) {
        var r = il(), a = Qu();
        t.exports = function(n, i) {
          var u = n[i];
          return a(u) ? void 0 : r(u);
        };
      }), qm = E(function(e, t) {
        var r = ii(), a = or(), n = Na(), i = TypeError;
        t.exports = function(u, l) {
          var s, c;
          if (l === "string" && a(s = u.toString) && !n(c = r(s, u)) || a(s = u.valueOf) && !n(c = r(s, u)) || l !== "string" && a(s = u.toString) && !n(c = r(s, u)))
            return c;
          throw i("Can't convert object to primitive value");
        };
      }), jm = E(function(e, t) {
        t.exports = !0;
      }), zm = E(function(e, t) {
        var r = nr(), a = Object.defineProperty;
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
      }), Vm = E(function(e, t) {
        var r = nr(), a = zm(), n = "__core-js_shared__", i = r[n] || a(n, {});
        t.exports = i;
      }), Hm = E(function(e, t) {
        var r = jm(), a = Vm();
        (t.exports = function(n, i) {
          return a[n] || (a[n] = i !== void 0 ? i : {});
        })("versions", []).push({
          version: "3.26.1",
          mode: r ? "pure" : "global",
          copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
          source: "https://github.com/zloirock/core-js"
        });
      }), $m = E(function(e, t) {
        var r = el(), a = Object;
        t.exports = function(n) {
          return a(r(n));
        };
      }), Ur = E(function(e, t) {
        var r = zt(), a = $m(), n = r({}.hasOwnProperty);
        t.exports = Object.hasOwn || /* @__PURE__ */ o(function(u, l) {
          return n(a(u), l);
        }, "hasOwn2");
      }), Um = E(function(e, t) {
        var r = zt(), a = 0, n = Math.random(), i = r(1 .toString);
        t.exports = function(u) {
          return "Symbol(" + (u === void 0 ? "" : u) + ")_" + i(++a + n, 36);
        };
      }), Gm = E(function(e, t) {
        var r = nr(), a = Hm(), n = Ur(), i = Um(), u = rl(), l = al(), s = a("wks"), c = r.Symbol, d = c && c.for, f = l ? c : c && c.withoutSetter || i;
        t.exports = function(p) {
          if (!n(s, p) || !(u || typeof s[p] == "string")) {
            var m = "Symbol." + p;
            u && n(c, p) ? s[p] = c[p] : l && d ? s[p] = d(m) : s[p] = f(m);
          }
          return s[p];
        };
      }), Wm = E(function(e, t) {
        var r = ii(), a = Na(), n = nl(), i = Bm(), u = qm(), l = Gm(), s = TypeError, c = l("toPrimitive");
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
      }), ol = E(function(e, t) {
        var r = Wm(), a = nl();
        t.exports = function(n) {
          var i = r(n, "string");
          return a(i) ? i : i + "";
        };
      }), Ym = E(function(e, t) {
        var r = nr(), a = Na(), n = r.document, i = a(n) && a(n.createElement);
        t.exports = function(u) {
          return i ? n.createElement(u) : {};
        };
      }), ul = E(function(e, t) {
        var r = _r(), a = ir(), n = Ym();
        t.exports = !r && !a(function() {
          return Object.defineProperty(n("div"), "a", {
            get: /* @__PURE__ */ o(function() {
              return 7;
            }, "get")
          }).a != 7;
        });
      }), Xm = E(function(e) {
        var t = _r(), r = ii(), a = Zu(), n = Ju(), i = Ma(), u = ol(), l = Ur(), s = ul(), c = Object.getOwnPropertyDescriptor;
        e.f = t ? c : /* @__PURE__ */ o(function(f, p) {
          if (f = i(f), p = u(p), s)
            try {
              return c(f, p);
            } catch {
            }
          if (l(f, p))
            return n(!r(a.f, f, p), f[p]);
        }, "getOwnPropertyDescriptor");
      }), Km = E(function(e, t) {
        var r = ir(), a = or(), n = /#|\.prototype\./, i = /* @__PURE__ */ o(function(f, p) {
          var m = l[u(f)];
          return m == c ? !0 : m == s ? !1 : a(p) ? r(p) : !!p;
        }, "isForced"), u = i.normalize = function(d) {
          return String(d).replace(n, ".").toLowerCase();
        }, l = i.data = {}, s = i.NATIVE = "N", c = i.POLYFILL = "P";
        t.exports = i;
      }), Zm = E(function(e, t) {
        var r = Xu(), a = il(), n = Oa(), i = r(r.bind);
        t.exports = function(u, l) {
          return a(u), l === void 0 ? u : n ? i(u, l) : function() {
            return u.apply(l, arguments);
          };
        };
      }), Jm = E(function(e, t) {
        var r = _r(), a = ir();
        t.exports = r && a(function() {
          return Object.defineProperty(function() {
          }, "prototype", {
            value: 42,
            writable: !1
          }).prototype != 42;
        });
      }), Qm = E(function(e, t) {
        var r = Na(), a = String, n = TypeError;
        t.exports = function(i) {
          if (r(i))
            return i;
          throw n(a(i) + " is not an object");
        };
      }), eh = E(function(e) {
        var t = _r(), r = ul(), a = Jm(), n = Qm(), i = ol(), u = TypeError, l = Object.defineProperty, s = Object.getOwnPropertyDescriptor, c = "enumerable", d = "configurable", f = "writable";
        e.f = t ? a ? /* @__PURE__ */ o(function(m, h, v) {
          if (n(m), h = i(h), n(v), typeof m == "function" && h === "prototype" && "value" in v && f in v && !v[f]) {
            var y = s(m, h);
            y && y[f] && (m[h] = v.value, v = {
              configurable: d in v ? v[d] : y[d],
              enumerable: c in v ? v[c] : y[c],
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
      }), th = E(function(e, t) {
        var r = _r(), a = eh(), n = Ju();
        t.exports = r ? function(i, u, l) {
          return a.f(i, u, n(1, l));
        } : function(i, u, l) {
          return i[u] = l, i;
        };
      }), ll = E(function(e, t) {
        var r = nr(), a = Om(), n = Xu(), i = or(), u = Xm().f, l = Km(), s = Ia(), c = Zm(), d = th(), f = Ur(), p = /* @__PURE__ */ o(function(h) {
          var v = /* @__PURE__ */ o(function y(g, b, _) {
            if (this instanceof y) {
              switch (arguments.length) {
                case 0:
                  return new h();
                case 1:
                  return new h(g);
                case 2:
                  return new h(g, b);
              }
              return new h(g, b, _);
            }
            return a(h, this, arguments);
          }, "Wrapper");
          return v.prototype = h.prototype, v;
        }, "wrapConstructor");
        t.exports = function(m, h) {
          var v = m.target, y = m.global, g = m.stat, b = m.proto, _ = y ? r : g ? r[v] : (r[v] || {}).prototype, x = y ? s : s[v] || d(s, v, {})[v], T = x.prototype, k, O, B, W, j, z, $, V, J;
          for (W in h)
            k = l(y ? W : v + (g ? "." : "#") + W, m.forced), O = !k && _ && f(_, W), z = x[W], O && (m.dontCallGetSet ? (J = u(_, W), $ = J && J.value) : $ = _[W]), j = O && $ ? $ : h[W], !(O && S(z) == S(j)) && (m.bind && O ? V = c(j, r) : m.wrap && O ? V = p(j) : b && i(j) ? V = n(j) : V = j, (m.sham || j && j.sham || z && z.sham) && d(V, "sham", !0), d(x, W, V), b && (B = v + "Prototype", f(s, B) || d(s, B, {}), d(s[B], W, j), m.real && T && !T[W] && d(T, W, j)));
        };
      }), rh = E(function() {
        var e = ll(), t = Ur();
        e({
          target: "Object",
          stat: !0
        }, {
          hasOwn: t
        });
      }), ah = E(function(e, t) {
        rh();
        var r = Ia();
        t.exports = r.Object.hasOwn;
      }), nh = E(function(e, t) {
        var r = ah();
        t.exports = r;
      }), ih = E(function(e, t) {
        var r = nh();
        t.exports = r;
      }), oh = E(function(e, t) {
        var r = Math.ceil, a = Math.floor;
        t.exports = Math.trunc || /* @__PURE__ */ o(function(i) {
          var u = +i;
          return (u > 0 ? a : r)(u);
        }, "trunc");
      }), sl = E(function(e, t) {
        var r = oh();
        t.exports = function(a) {
          var n = +a;
          return n !== n || n === 0 ? 0 : r(n);
        };
      }), uh = E(function(e, t) {
        var r = sl(), a = Math.max, n = Math.min;
        t.exports = function(i, u) {
          var l = r(i);
          return l < 0 ? a(l + u, 0) : n(l, u);
        };
      }), lh = E(function(e, t) {
        var r = sl(), a = Math.min;
        t.exports = function(n) {
          return n > 0 ? a(r(n), 9007199254740991) : 0;
        };
      }), sh = E(function(e, t) {
        var r = lh();
        t.exports = function(a) {
          return r(a.length);
        };
      }), ch = E(function(e, t) {
        var r = Ma(), a = uh(), n = sh(), i = /* @__PURE__ */ o(function(l) {
          return function(s, c, d) {
            var f = r(s), p = n(f), m = a(d, p), h;
            if (l && c != c) {
              for (; p > m; )
                if (h = f[m++], h != h)
                  return !0;
            } else
              for (; p > m; m++)
                if ((l || m in f) && f[m] === c)
                  return l || m || 0;
            return !l && -1;
          };
        }, "createMethod");
        t.exports = {
          includes: i(!0),
          indexOf: i(!1)
        };
      }), dh = E(function(e, t) {
        t.exports = {};
      }), fh = E(function(e, t) {
        var r = zt(), a = Ur(), n = Ma(), i = ch().indexOf, u = dh(), l = r([].push);
        t.exports = function(s, c) {
          var d = n(s), f = 0, p = [], m;
          for (m in d)
            !a(u, m) && a(d, m) && l(p, m);
          for (; c.length > f; )
            a(d, m = c[f++]) && (~i(p, m) || l(p, m));
          return p;
        };
      }), ph = E(function(e, t) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      }), mh = E(function(e, t) {
        var r = fh(), a = ph();
        t.exports = Object.keys || /* @__PURE__ */ o(function(i) {
          return r(i, a);
        }, "keys");
      }), hh = E(function(e, t) {
        var r = _r(), a = zt(), n = mh(), i = Ma(), u = Zu().f, l = a(u), s = a([].push), c = /* @__PURE__ */ o(function(f) {
          return function(p) {
            for (var m = i(p), h = n(m), v = h.length, y = 0, g = [], b; v > y; )
              b = h[y++], (!r || l(m, b)) && s(g, f ? [b, m[b]] : m[b]);
            return g;
          };
        }, "createMethod");
        t.exports = {
          entries: c(!0),
          values: c(!1)
        };
      }), vh = E(function() {
        var e = ll(), t = hh().values;
        e({
          target: "Object",
          stat: !0
        }, {
          values: /* @__PURE__ */ o(function(a) {
            return t(a);
          }, "values2")
        });
      }), gh = E(function(e, t) {
        vh();
        var r = Ia();
        t.exports = r.Object.values;
      }), bh = E(function(e, t) {
        var r = gh();
        t.exports = r;
      }), yh = E(function(e, t) {
        var r = bh();
        t.exports = r;
      }), cl = E(function(e, t) {
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
              return f.indexOf("def.") === 0 && (f = f.substring(4)), f in c || (p === ":" ? (l.defineParams && m.replace(l.defineParams, function(h, v, y) {
                c[f] = {
                  arg: v,
                  text: y
                };
              }), f in c || (c[f] = m)) : new Function("def", "def['" + f + "']=" + m)(c)), "";
            }).replace(l.use || n, function(d, f) {
              l.useParams && (f = f.replace(l.useParams, function(m, h, v, y) {
                if (c[v] && c[v].arg && y) {
                  var g = (v + ":" + y).replace(/'|\\/g, "_");
                  return c.__exp = c.__exp || {}, c.__exp[g] = c[v].text.replace(new RegExp("(^|[^\\w$])" + c[v].arg + "([^\\w$])", "g"), "$1" + y + "$2"), h + "def.__exp['" + g + "']";
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
            h = ("var out='" + (s.strip ? h.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : h).replace(/'|\\/g, "\\$&").replace(s.interpolate || n, function(v, y) {
              return d.start + u(y) + d.end;
            }).replace(s.encode || n, function(v, y) {
              return f = !0, d.startencode + u(y) + d.end;
            }).replace(s.conditional || n, function(v, y, g) {
              return y ? g ? "';}else if(" + u(g) + "){out+='" : "';}else{out+='" : g ? "';if(" + u(g) + "){out+='" : "';}out+='";
            }).replace(s.iterate || n, function(v, y, g, b) {
              return y ? (p += 1, m = b || "i" + p, y = u(y), "';var arr" + p + "=" + y + ";if(arr" + p + "){var " + g + "," + m + "=-1,l" + p + "=arr" + p + ".length-1;while(" + m + "<l" + p + "){" + g + "=arr" + p + "[" + m + "+=1];out+='") : "';} } out+='";
            }).replace(s.evaluate || n, function(v, y) {
              return "';" + u(y) + "out+='";
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
      }), wh = [{
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
      }], yt = {
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
      wh.forEach(function(e) {
        var t = e.name, r = e.value, a = e.priority, n = e.group;
        yt[t] = r, yt[t + "_PRIO"] = a, yt[t + "_GROUP"] = n, yt.results[a] = r, yt.resultGroups[a] = n, yt.resultGroupMap[r] = n;
      }), Object.freeze(yt.results), Object.freeze(yt.resultGroups), Object.freeze(yt.resultGroupMap), Object.freeze(yt);
      var ce = yt;
      function Dh() {
        (typeof console > "u" ? "undefined" : S(console)) === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      o(Dh, "log");
      var ur = Dh, _h = /[\t\r\n\f]/g, xh = function() {
        function e() {
          xt(this, e), this.parent = void 0;
        }
        return o(e, "AbstractVirtualNode"), Et(e, [{
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
            return (" " + a + " ").replace(_h, " ").indexOf(n) >= 0;
          }, "hasClass")
        }]), e;
      }(), He = xh, oi = {};
      gt(oi, {
        DqElement: /* @__PURE__ */ o(function() {
          return Nt;
        }, "DqElement"),
        aggregate: /* @__PURE__ */ o(function() {
          return Pa;
        }, "aggregate"),
        aggregateChecks: /* @__PURE__ */ o(function() {
          return pl;
        }, "aggregateChecks"),
        aggregateNodeResults: /* @__PURE__ */ o(function() {
          return ml;
        }, "aggregateNodeResults"),
        aggregateResult: /* @__PURE__ */ o(function() {
          return hl;
        }, "aggregateResult"),
        areStylesSet: /* @__PURE__ */ o(function() {
          return kh;
        }, "areStylesSet"),
        assert: /* @__PURE__ */ o(function() {
          return he;
        }, "assert"),
        checkHelper: /* @__PURE__ */ o(function() {
          return fi;
        }, "checkHelper"),
        clone: /* @__PURE__ */ o(function() {
          return It;
        }, "clone"),
        closest: /* @__PURE__ */ o(function() {
          return it;
        }, "closest"),
        collectResultsFromFrames: /* @__PURE__ */ o(function() {
          return $l;
        }, "collectResultsFromFrames"),
        contains: /* @__PURE__ */ o(function() {
          return cr;
        }, "contains"),
        convertSelector: /* @__PURE__ */ o(function() {
          return Va;
        }, "convertSelector"),
        cssParser: /* @__PURE__ */ o(function() {
          return Al;
        }, "cssParser"),
        deepMerge: /* @__PURE__ */ o(function() {
          return Ti;
        }, "deepMerge"),
        escapeSelector: /* @__PURE__ */ o(function() {
          return ke;
        }, "escapeSelector"),
        extendMetaData: /* @__PURE__ */ o(function() {
          return Ri;
        }, "extendMetaData"),
        filterHtmlAttrs: /* @__PURE__ */ o(function() {
          return v1;
        }, "filterHtmlAttrs"),
        finalizeRuleResult: /* @__PURE__ */ o(function() {
          return Gr;
        }, "finalizeRuleResult"),
        findBy: /* @__PURE__ */ o(function() {
          return ea;
        }, "findBy"),
        getAllChecks: /* @__PURE__ */ o(function() {
          return Wa;
        }, "getAllChecks"),
        getAncestry: /* @__PURE__ */ o(function() {
          return za;
        }, "getAncestry"),
        getBaseLang: /* @__PURE__ */ o(function() {
          return wr;
        }, "getBaseLang"),
        getCheckMessage: /* @__PURE__ */ o(function() {
          return U2;
        }, "getCheckMessage"),
        getCheckOption: /* @__PURE__ */ o(function() {
          return In;
        }, "getCheckOption"),
        getEnvironmentData: /* @__PURE__ */ o(function() {
          return Kt;
        }, "getEnvironmentData"),
        getFlattenedTree: /* @__PURE__ */ o(function() {
          return Lo;
        }, "getFlattenedTree"),
        getFrameContexts: /* @__PURE__ */ o(function() {
          return sw;
        }, "getFrameContexts"),
        getFriendlyUriEnd: /* @__PURE__ */ o(function() {
          return bl;
        }, "getFriendlyUriEnd"),
        getNodeAttributes: /* @__PURE__ */ o(function() {
          return Ba;
        }, "getNodeAttributes"),
        getNodeFromTree: /* @__PURE__ */ o(function() {
          return se;
        }, "getNodeFromTree"),
        getPreloadConfig: /* @__PURE__ */ o(function() {
          return f1;
        }, "getPreloadConfig"),
        getRootNode: /* @__PURE__ */ o(function() {
          return ta;
        }, "getRootNode"),
        getRule: /* @__PURE__ */ o(function() {
          return Zd;
        }, "getRule"),
        getScroll: /* @__PURE__ */ o(function() {
          return Bt;
        }, "getScroll"),
        getScrollState: /* @__PURE__ */ o(function() {
          return fw;
        }, "getScrollState"),
        getSelector: /* @__PURE__ */ o(function() {
          return di;
        }, "getSelector"),
        getSelectorData: /* @__PURE__ */ o(function() {
          return ja;
        }, "getSelectorData"),
        getShadowSelector: /* @__PURE__ */ o(function() {
          return li;
        }, "getShadowSelector"),
        getStandards: /* @__PURE__ */ o(function() {
          return pw;
        }, "getStandards"),
        getStyleSheetFactory: /* @__PURE__ */ o(function() {
          return e1;
        }, "getStyleSheetFactory"),
        getXpath: /* @__PURE__ */ o(function() {
          return El;
        }, "getXpath"),
        injectStyle: /* @__PURE__ */ o(function() {
          return vw;
        }, "injectStyle"),
        isHidden: /* @__PURE__ */ o(function() {
          return gw;
        }, "isHidden"),
        isHtmlElement: /* @__PURE__ */ o(function() {
          return $o;
        }, "isHtmlElement"),
        isNodeInContext: /* @__PURE__ */ o(function() {
          return Uo;
        }, "isNodeInContext"),
        isShadowRoot: /* @__PURE__ */ o(function() {
          return Xa;
        }, "isShadowRoot"),
        isValidLang: /* @__PURE__ */ o(function() {
          return qn;
        }, "isValidLang"),
        isXHTML: /* @__PURE__ */ o(function() {
          return qa;
        }, "isXHTML"),
        matchAncestry: /* @__PURE__ */ o(function() {
          return Go;
        }, "matchAncestry"),
        matches: /* @__PURE__ */ o(function() {
          return mi;
        }, "matches"),
        matchesExpression: /* @__PURE__ */ o(function() {
          return Er;
        }, "matchesExpression"),
        matchesSelector: /* @__PURE__ */ o(function() {
          return xr;
        }, "matchesSelector"),
        memoize: /* @__PURE__ */ o(function() {
          return Be;
        }, "memoize"),
        mergeResults: /* @__PURE__ */ o(function() {
          return Ya;
        }, "mergeResults"),
        nodeLookup: /* @__PURE__ */ o(function() {
          return _e;
        }, "nodeLookup"),
        nodeSerializer: /* @__PURE__ */ o(function() {
          return pt;
        }, "nodeSerializer"),
        nodeSorter: /* @__PURE__ */ o(function() {
          return Wo;
        }, "nodeSorter"),
        parseCrossOriginStylesheet: /* @__PURE__ */ o(function() {
          return Xo;
        }, "parseCrossOriginStylesheet"),
        parseSameOriginStylesheet: /* @__PURE__ */ o(function() {
          return a1;
        }, "parseSameOriginStylesheet"),
        parseStylesheet: /* @__PURE__ */ o(function() {
          return Yo;
        }, "parseStylesheet"),
        performanceTimer: /* @__PURE__ */ o(function() {
          return qe;
        }, "performanceTimer"),
        pollyfillElementsFromPoint: /* @__PURE__ */ o(function() {
          return n1;
        }, "pollyfillElementsFromPoint"),
        preload: /* @__PURE__ */ o(function() {
          return c1;
        }, "preload"),
        preloadCssom: /* @__PURE__ */ o(function() {
          return o1;
        }, "preloadCssom"),
        preloadMedia: /* @__PURE__ */ o(function() {
          return s1;
        }, "preloadMedia"),
        processMessage: /* @__PURE__ */ o(function() {
          return zo;
        }, "processMessage"),
        publishMetaData: /* @__PURE__ */ o(function() {
          return Ln;
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
          return wt;
        }, "respondable"),
        ruleShouldRun: /* @__PURE__ */ o(function() {
          return h1;
        }, "ruleShouldRun"),
        select: /* @__PURE__ */ o(function() {
          return Ko;
        }, "select"),
        sendCommandToFrame: /* @__PURE__ */ o(function() {
          return jl;
        }, "sendCommandToFrame"),
        setScrollState: /* @__PURE__ */ o(function() {
          return Yw;
        }, "setScrollState"),
        shadowSelect: /* @__PURE__ */ o(function() {
          return Xw;
        }, "shadowSelect"),
        shadowSelectAll: /* @__PURE__ */ o(function() {
          return Zo;
        }, "shadowSelectAll"),
        shouldPreload: /* @__PURE__ */ o(function() {
          return d1;
        }, "shouldPreload"),
        toArray: /* @__PURE__ */ o(function() {
          return gl;
        }, "toArray"),
        tokenList: /* @__PURE__ */ o(function() {
          return Xe;
        }, "tokenList"),
        uniqueArray: /* @__PURE__ */ o(function() {
          return wa;
        }, "uniqueArray"),
        uuid: /* @__PURE__ */ o(function() {
          return wv;
        }, "uuid"),
        validInputTypes: /* @__PURE__ */ o(function() {
          return Bn;
        }, "validInputTypes"),
        validLangs: /* @__PURE__ */ o(function() {
          return D1;
        }, "validLangs")
      });
      function Eh(e, t, r) {
        t = t.slice(), r && t.push(r);
        var a = t.map(function(n) {
          return e.indexOf(n);
        }).sort();
        return e[a.pop()];
      }
      o(Eh, "aggregate");
      var Pa = Eh, Ch = ce.CANTTELL_PRIO, Ah = ce.FAIL_PRIO, La = [];
      La[ce.PASS_PRIO] = !0, La[ce.CANTTELL_PRIO] = null, La[ce.FAIL_PRIO] = !1;
      var dl = ["any", "all", "none"];
      function fl(e, t) {
        return dl.reduce(function(r, a) {
          return r[a] = (e[a] || []).map(function(n) {
            return t(n, a);
          }), r;
        }, {});
      }
      o(fl, "anyAllNone");
      function Fh(e) {
        var t = Object.assign({}, e);
        fl(t, function(n, i) {
          var u = typeof n.result > "u" ? -1 : La.indexOf(n.result);
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
        return dl.forEach(function(n) {
          t[n] = t[n].filter(function(i) {
            return i.priority === t.priority && i.priority === r[n];
          }), t[n].forEach(function(i) {
            return a.push(i.impact);
          });
        }), [Ch, Ah].includes(t.priority) ? t.impact = Pa(ce.impact, a) : t.impact = null, fl(t, function(n) {
          delete n.result, delete n.priority;
        }), t.result = ce.results[t.priority], delete t.priority, t;
      }
      o(Fh, "aggregateChecks");
      var pl = Fh;
      function Gr(e) {
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
        }), Object.assign(e, ml(e.nodes)), delete e.nodes, e;
      }
      o(Gr, "_finalizeRuleResult");
      function Th(e) {
        var t = {};
        if (e = e.map(function(i) {
          if (i.any && i.all && i.none)
            return pl(i);
          if (Array.isArray(i.node))
            return Gr(i);
          throw new TypeError("Invalid Result type");
        }), e && e.length) {
          var r = e.map(function(i) {
            return i.result;
          });
          t.result = Pa(ce.results, r, t.result);
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
          t.impact = Pa(ce.impact, n) || null;
        } else
          t.impact = null;
        return t;
      }
      o(Th, "aggregateNodeResults");
      var ml = Th;
      function ui(e, t, r) {
        var a = Object.assign({}, t);
        a.nodes = (a[r] || []).concat(), ce.resultGroups.forEach(function(n) {
          delete a[n];
        }), e[r].push(a);
      }
      o(ui, "copyToGroup");
      function Rh(e) {
        var t = {};
        return ce.resultGroups.forEach(function(r) {
          return t[r] = [];
        }), e.forEach(function(r) {
          r.error ? ui(t, r, ce.CANTTELL_GROUP) : r.result === ce.NA ? ui(t, r, ce.NA_GROUP) : ce.resultGroups.forEach(function(a) {
            Array.isArray(r[a]) && r[a].length > 0 && ui(t, r, a);
          });
        }), t;
      }
      o(Rh, "aggregateResult");
      var hl = Rh;
      function vl(e, t, r) {
        var a = D.getComputedStyle(e, null);
        if (!a)
          return !1;
        for (var n = 0; n < t.length; ++n) {
          var i = t[n];
          if (a.getPropertyValue(i.property) === i.value)
            return !0;
        }
        return !e.parentNode || e.nodeName.toUpperCase() === r.toUpperCase() ? !1 : vl(e.parentNode, t, r);
      }
      o(vl, "areStylesSet");
      var kh = vl;
      function Sh(e, t) {
        if (!e)
          throw new Error(t);
      }
      o(Sh, "assert");
      var he = Sh;
      function Oh(e) {
        return Array.prototype.slice.call(e);
      }
      o(Oh, "toArray");
      var gl = Oh;
      function Mh(e) {
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
      o(Mh, "escapeSelector");
      var ke = Mh;
      function Nh() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return e.length !== 0 && (e.match(/[0-9]/g) || "").length >= e.length / 2;
      }
      o(Nh, "isMostlyNumbers");
      function Wr(e, t) {
        return [e.substring(0, t), e.substring(t)];
      }
      o(Wr, "splitString");
      function Yr(e) {
        return e.replace(/\s+$/, "");
      }
      o(Yr, "trimRight");
      function Ih(e) {
        var t = e, r = "", a = "", n = "", i = "", u = "", l = "";
        if (e.includes("#")) {
          var s = Wr(e, e.indexOf("#")), c = H(s, 2);
          e = c[0], l = c[1];
        }
        if (e.includes("?")) {
          var d = Wr(e, e.indexOf("?")), f = H(d, 2);
          e = f[0], u = f[1];
        }
        if (e.includes("://")) {
          var p = e.split("://"), m = H(p, 2);
          r = m[0], e = m[1];
          var h = Wr(e, e.indexOf("/")), v = H(h, 2);
          a = v[0], e = v[1];
        } else if (e.substr(0, 2) === "//") {
          e = e.substr(2);
          var y = Wr(e, e.indexOf("/")), g = H(y, 2);
          a = g[0], e = g[1];
        }
        if (a.substr(0, 4) === "www." && (a = a.substr(4)), a && a.includes(":")) {
          var b = Wr(a, a.indexOf(":")), _ = H(b, 2);
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
      o(Ih, "uriParser");
      function Ph() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(e.length <= 1 || e.substr(0, 5) === "data:" || e.substr(0, 11) === "javascript:" || e.includes("?"))) {
          var r = t.currentDomain, a = t.maxLength, n = a === void 0 ? 25 : a, i = Ih(e), u = i.path, l = i.domain, s = i.hash, c = u.substr(u.substr(0, u.length - 2).lastIndexOf("/") + 1);
          if (s)
            return c && (c + s).length <= n ? Yr(c + s) : c.length < 2 && s.length > 2 && s.length <= n ? Yr(s) : void 0;
          if (l && l.length < n && u.length <= 1 || u === "/" + c && l && r && l !== r && (l + u).length <= n)
            return Yr(l + u);
          var d = c.lastIndexOf(".");
          if ((d === -1 || d > 1) && (d !== -1 || c.length > 2) && c.length <= n && !c.match(/index(\.[a-zA-Z]{2-4})?/) && !Nh(c))
            return Yr(c);
        }
      }
      o(Ph, "getFriendlyUriEnd");
      var bl = Ph;
      function Lh(e) {
        return e.attributes instanceof D.NamedNodeMap ? e.attributes : e.cloneNode(!1).attributes;
      }
      o(Lh, "getNodeAttributes");
      var Ba = Lh, Bh = function() {
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
      }(), xr = Bh, qh = bt(Uu());
      w._memoizedFns = [];
      function jh(e) {
        var t = (0, qh.default)(e);
        return w._memoizedFns.push(t), t;
      }
      o(jh, "memoizeImplementation");
      var Be = jh, zh = Be(function(e) {
        return e != null && e.createElement ? e.createElement("A").localName === "A" : !1;
      }), qa = zh;
      function li(e, t) {
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
      o(li, "_getShadowSelector");
      var Vh = ["class", "style", "id", "selected", "checked", "disabled", "tabindex", "aria-checked", "aria-selected", "aria-invalid", "aria-activedescendant", "aria-busy", "aria-disabled", "aria-expanded", "aria-grabbed", "aria-pressed", "aria-valuenow"], Hh = 31, $h = /([\\"])/g, Uh = /(\r\n|\r|\n)/g;
      function si(e) {
        return e.replace($h, "\\$1").replace(Uh, "\\a ");
      }
      o(si, "escapeAttribute");
      function yl(e, t) {
        var r = t.name, a;
        if (r.indexOf("href") !== -1 || r.indexOf("src") !== -1) {
          var n = bl(e.getAttribute(r));
          n ? a = ke(t.name) + '$="' + si(n) + '"' : a = ke(t.name) + '="' + si(e.getAttribute(r)) + '"';
        } else
          a = ke(r) + '="' + si(t.value) + '"';
        return a;
      }
      o(yl, "getAttributeNameValue");
      function ci(e, t) {
        return e.count < t.count ? -1 : e.count === t.count ? 0 : 1;
      }
      o(ci, "countSort");
      function wl(e) {
        return !Vh.includes(e.name) && e.name.indexOf(":") === -1 && (!e.value || e.value.length < Hh);
      }
      o(wl, "filterAttributes");
      function ja(e) {
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
            }), l.hasAttributes() && Array.from(Ba(l)).filter(wl).forEach(function(c) {
              var d = yl(l, c);
              d && (t.attributes[d] ? t.attributes[d]++ : t.attributes[d] = 1);
            });
          }
          for (u.children.length && (a.push(r), r = u.children.slice()); !r.length && a.length; )
            r = a.pop();
        }, "_loop2"); r.length; )
          n();
        return t;
      }
      o(ja, "_getSelectorData");
      function Gh(e, t) {
        var r = [], a = t.classes, n = t.tags;
        return e.classList && Array.from(e.classList).forEach(function(i) {
          var u = ke(i);
          a[u] < n[e.nodeName] && r.push({
            name: u,
            count: a[u],
            species: "class"
          });
        }), r.sort(ci);
      }
      o(Gh, "uncommonClasses");
      function Wh(e, t) {
        var r = e.parentNode && Array.from(e.parentNode.children || "") || [], a = r.find(function(i) {
          return i !== e && xr(i, t);
        });
        if (a) {
          var n = 1 + r.indexOf(e);
          return ":nth-child(" + n + ")";
        } else
          return "";
      }
      o(Wh, "getNthChildString");
      function Yh(e) {
        if (!!e.getAttribute("id")) {
          var t = e.getRootNode && e.getRootNode() || N, r = "#" + ke(e.getAttribute("id") || "");
          if (!r.match(/player_uid_/) && t.querySelectorAll(r).length === 1)
            return r;
        }
      }
      o(Yh, "getElmId");
      function Dl(e) {
        var t = qa(N);
        return ke(t ? e.localName : e.nodeName.toLowerCase());
      }
      o(Dl, "getBaseSelector");
      function Xh(e, t) {
        var r = [], a = t.attributes, n = t.tags;
        return e.hasAttributes() && Array.from(Ba(e)).filter(wl).forEach(function(i) {
          var u = yl(e, i);
          u && a[u] < n[e.nodeName] && r.push({
            name: u,
            count: a[u],
            species: "attribute"
          });
        }), r.sort(ci);
      }
      o(Xh, "uncommonAttributes");
      function Kh(e, t) {
        var r = "", a, n = Gh(e, t), i = Xh(e, t);
        return n.length && n[0].count === 1 ? a = [n[0]] : i.length && i[0].count === 1 ? (a = [i[0]], r = Dl(e)) : (a = n.concat(i), a.sort(ci), a = a.slice(0, 3), a.some(function(u) {
          return u.species === "class";
        }) ? a.sort(function(u, l) {
          return u.species !== l.species && u.species === "class" ? -1 : u.species === l.species ? 0 : 1;
        }) : r = Dl(e)), r += a.reduce(function(u, l) {
          switch (l.species) {
            case "class":
              return u + "." + l.name;
            case "attribute":
              return u + "[" + l.name + "]";
          }
          return u;
        }, "");
      }
      o(Kh, "getThreeLeastCommonFeatures");
      function Zh(e, t, r) {
        if (!w._selectorData)
          throw new Error("Expect axe._selectorData to be set up");
        var a = t.toRoot, n = a === void 0 ? !1 : a, i, u;
        do {
          var l = Yh(e);
          l || (l = Kh(e, w._selectorData), l += Wh(e, l)), i ? i = l + " > " + i : i = l, u ? u = u.filter(function(s) {
            return xr(s, i);
          }) : u = Array.from(r.querySelectorAll(i)), e = e.parentElement;
        } while ((u.length > 1 || n) && e && e.nodeType !== 11);
        return u.length === 1 ? i : i.indexOf(" > ") !== -1 ? ":root" + i.substring(i.indexOf(" > ")) : ":root";
      }
      o(Zh, "generateSelector");
      function di(e, t) {
        return li(Zh, e, t);
      }
      o(di, "_getSelector");
      function _l(e) {
        var t = e.nodeName.toLowerCase(), r = e.parentElement;
        if (!r)
          return t;
        var a = "";
        if (t !== "head" && t !== "body" && r.children.length > 1) {
          var n = Array.prototype.indexOf.call(r.children, e) + 1;
          a = ":nth-child(".concat(n, ")");
        }
        return _l(r) + " > " + t + a;
      }
      o(_l, "generateAncestry");
      function za(e, t) {
        return li(_l, e, t);
      }
      o(za, "_getAncestry");
      function xl(e, t) {
        var r, a;
        if (!e)
          return [];
        if (!t && e.nodeType === 9)
          return t = [{
            str: "html"
          }], t;
        if (t = t || [], e.parentNode && e.parentNode !== e && (t = xl(e.parentNode, t)), e.previousSibling) {
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
      o(xl, "getXPathArray");
      function Jh(e) {
        return e.reduce(function(t, r) {
          return r.id ? "/".concat(r.str, "[@id='").concat(r.id, "']") : t + "/".concat(r.str) + (r.count > 0 ? "[".concat(r.count, "]") : "");
        }, "");
      }
      o(Jh, "xpathToString");
      function Qh(e) {
        var t = xl(e);
        return Jh(t);
      }
      o(Qh, "getXpath");
      var El = Qh, Xr = {}, ev = {
        set: /* @__PURE__ */ o(function(t, r) {
          tv(t), Xr[t] = r;
        }, "set"),
        get: /* @__PURE__ */ o(function(t, r) {
          if (rv(r), t in Xr)
            return Xr[t];
          if (typeof r == "function") {
            var a = r();
            return he(a !== void 0, "Cache creator function should not return undefined"), this.set(t, a), Xr[t];
          }
        }, "get"),
        clear: /* @__PURE__ */ o(function() {
          Xr = {};
        }, "clear")
      };
      function tv(e) {
        he(typeof e == "string", "key must be a string, " + S(e) + " given"), he(e !== "", "key must not be empty");
      }
      o(tv, "validateKey");
      function rv(e) {
        he(typeof e == "function" || typeof e > "u", "creator must be a function or undefined, " + S(e) + " given");
      }
      o(rv, "validateCreator");
      var le = ev;
      function av(e, t) {
        var r = t || e;
        return le.get("nodeMap") ? le.get("nodeMap").get(r) : null;
      }
      o(av, "getNodeFromTree");
      var se = av, Cl = "DqElm.RunOptions";
      function nv(e, t) {
        if (t = t || 300, e.length > t) {
          var r = e.indexOf(">");
          e = e.substring(0, r + 1);
        }
        return e;
      }
      o(nv, "truncate");
      function iv(e) {
        if (!(e != null && e.outerHTML))
          return "";
        var t = e.outerHTML;
        return !t && typeof D.XMLSerializer == "function" && (t = new D.XMLSerializer().serializeToString(e)), nv(t || "");
      }
      o(iv, "getSource");
      function lr(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!a) {
          var i;
          a = (i = le.get(Cl)) !== null && i !== void 0 ? i : {};
        }
        if (this.spec = n, e instanceof He ? (this._virtualNode = e, this._element = e.actualNode) : (this._element = e, this._virtualNode = se(e)), this.fromFrame = ((t = this.spec.selector) === null || t === void 0 ? void 0 : t.length) > 1, this._includeElementInJson = a.elementRef, a.absolutePaths && (this._options = {
          toRoot: !0
        }), this.nodeIndexes = [], Array.isArray(this.spec.nodeIndexes) ? this.nodeIndexes = this.spec.nodeIndexes : typeof ((r = this._virtualNode) === null || r === void 0 ? void 0 : r.nodeIndex) == "number" && (this.nodeIndexes = [this._virtualNode.nodeIndex]), this.source = null, !w._audit.noHtml) {
          var u;
          this.source = (u = this.spec.source) !== null && u !== void 0 ? u : iv(this._element);
        }
      }
      o(lr, "DqElement"), lr.prototype = {
        get selector() {
          return this.spec.selector || [di(this.element, this._options)];
        },
        get ancestry() {
          return this.spec.ancestry || [za(this.element)];
        },
        get xpath() {
          return this.spec.xpath || [El(this.element)];
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
      }, lr.fromFrame = /* @__PURE__ */ o(function(t, r, a) {
        var n = lr.mergeSpecs(t, a);
        return new lr(a.element, r, n);
      }, "fromFrame"), lr.mergeSpecs = /* @__PURE__ */ o(function(t, r) {
        return pe({}, t, {
          selector: [].concat(ae(r.selector), ae(t.selector)),
          ancestry: [].concat(ae(r.ancestry), ae(t.ancestry)),
          xpath: [].concat(ae(r.xpath), ae(t.xpath)),
          nodeIndexes: [].concat(ae(r.nodeIndexes), ae(t.nodeIndexes)),
          fromFrame: !0
        });
      }, "mergeSpecs"), lr.setRunOptions = /* @__PURE__ */ o(function(t) {
        var r = t.elementRef, a = t.absolutePaths;
        le.set(Cl, {
          elementRef: r,
          absolutePaths: a
        });
      }, "setRunOptions");
      var Nt = lr;
      function ov(e, t, r, a) {
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
            !D.Node || (i instanceof D.Node || i instanceof He ? i = [i] : i = gl(i), e.relatedNodes = [], i.forEach(function(u) {
              if (u instanceof He && (u = u.actualNode), u instanceof D.Node) {
                var l = new Nt(u);
                e.relatedNodes.push(l);
              }
            }));
          }, "relatedNodes")
        };
      }
      o(ov, "checkHelper");
      var fi = ov;
      function It(e) {
        return pi(e, /* @__PURE__ */ new Map());
      }
      o(It, "_clone");
      function pi(e, t) {
        var r, a;
        if (e === null || S(e) !== "object" || (r = D) !== null && r !== void 0 && r.Node && e instanceof D.Node || (a = D) !== null && a !== void 0 && a.HTMLCollection && e instanceof D.HTMLCollection || "nodeName" in e && "nodeType" in e && "ownerDocument" in e)
          return e;
        if (t.has(e))
          return t.get(e);
        if (Array.isArray(e)) {
          var n = [];
          return t.set(e, n), e.forEach(function(l) {
            n.push(pi(l, t));
          }), n;
        }
        var i = {};
        t.set(e, i);
        for (var u in e)
          i[u] = pi(e[u], t);
        return i;
      }
      o(pi, "cloneRecused");
      var uv = bt(Wu()), Kr = new uv.CssSelectorParser();
      Kr.registerSelectorPseudos("not"), Kr.registerSelectorPseudos("is"), Kr.registerNestingOperators(">"), Kr.registerAttrEqualityMods("^", "$", "*", "~");
      var Al = Kr;
      function mi(e, t) {
        var r = Va(t);
        return r.some(function(a) {
          return Er(e, a);
        });
      }
      o(mi, "_matches");
      function lv(e, t) {
        return e.props.nodeType === 1 && (t.tag === "*" || e.props.nodeName === t.tag);
      }
      o(lv, "matchesTag");
      function sv(e, t) {
        return !t.classes || t.classes.every(function(r) {
          return e.hasClass(r.value);
        });
      }
      o(sv, "matchesClasses");
      function cv(e, t) {
        return !t.attributes || t.attributes.every(function(r) {
          var a = e.attr(r.key);
          return a !== null && r.test(a);
        });
      }
      o(cv, "matchesAttributes");
      function dv(e, t) {
        return !t.id || e.props.id === t.id;
      }
      o(dv, "matchesId");
      function fv(e, t) {
        return !!(!t.pseudos || t.pseudos.every(function(r) {
          if (r.name === "not")
            return !r.expressions.some(function(a) {
              return Er(e, a);
            });
          if (r.name === "is")
            return r.expressions.some(function(a) {
              return Er(e, a);
            });
          throw new Error("the pseudo selector " + r.name + " has not yet been implemented");
        }));
      }
      o(fv, "matchesPseudos");
      function Fl(e, t) {
        return lv(e, t) && sv(e, t) && cv(e, t) && dv(e, t) && fv(e, t);
      }
      o(Fl, "matchExpression");
      var Zr = function() {
        var e = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g, t = "\\";
        return function(r) {
          return r.replace(e, t);
        };
      }(), hi = /\\/g;
      function pv(e) {
        if (!!e)
          return e.map(function(t) {
            var r = t.name.replace(hi, ""), a = (t.value || "").replace(hi, ""), n, i;
            switch (t.operator) {
              case "^=":
                i = new RegExp("^" + Zr(a));
                break;
              case "$=":
                i = new RegExp(Zr(a) + "$");
                break;
              case "~=":
                i = new RegExp("(^|\\s)" + Zr(a) + "(\\s|$)");
                break;
              case "|=":
                i = new RegExp("^" + Zr(a) + "(-|$)");
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
      o(pv, "convertAttributes");
      function mv(e) {
        if (!!e)
          return e.map(function(t) {
            return t = t.replace(hi, ""), {
              value: t,
              regexp: new RegExp("(^|\\s)" + Zr(t) + "(\\s|$)")
            };
          });
      }
      o(mv, "convertClasses");
      function hv(e) {
        if (!!e)
          return e.map(function(t) {
            var r;
            return ["is", "not"].includes(t.name) && (r = t.value, r = r.selectors ? r.selectors : [r], r = Tl(r)), {
              name: t.name,
              expressions: r,
              value: t.value
            };
          });
      }
      o(hv, "convertPseudos");
      function Tl(e) {
        return e.map(function(t) {
          for (var r = [], a = t.rule; a; )
            r.push({
              tag: a.tagName ? a.tagName.toLowerCase() : "*",
              combinator: a.nestingOperator ? a.nestingOperator : " ",
              id: a.id,
              attributes: pv(a.attrs),
              classes: mv(a.classNames),
              pseudos: hv(a.pseudos)
            }), a = a.rule;
          return r;
        });
      }
      o(Tl, "convertExpressions");
      function Va(e) {
        var t = Al.parse(e);
        return t = t.selectors ? t.selectors : [t], Tl(t);
      }
      o(Va, "_convertSelector");
      function Rl(e, t, r, a) {
        if (!e)
          return !1;
        for (var n = Array.isArray(t), i = n ? t[r] : t, u = Fl(e, i); !u && a && e.parent; )
          e = e.parent, u = Fl(e, i);
        if (r > 0) {
          if ([" ", ">"].includes(i.combinator) === !1)
            throw new Error("axe.utils.matchesExpression does not support the combinator: " + i.combinator);
          u = u && Rl(e.parent, t, r - 1, i.combinator === " ");
        }
        return u;
      }
      o(Rl, "optimizedMatchesExpression");
      function Er(e, t, r) {
        return Rl(e, t, t.length - 1, r);
      }
      o(Er, "_matchesExpression");
      function vv(e, t) {
        for (; e; ) {
          if (mi(e, t))
            return e;
          if (typeof e.parent > "u")
            throw new TypeError("Cannot resolve parent for non-DOM nodes");
          e = e.parent;
        }
        return null;
      }
      o(vv, "closest");
      var it = vv;
      function Ha() {
      }
      o(Ha, "noop");
      function vi(e) {
        if (typeof e != "function")
          throw new TypeError("Queue methods require functions as arguments");
      }
      o(vi, "funcGuard");
      function gv() {
        var e = [], t = 0, r = 0, a = Ha, n = !1, i, u = /* @__PURE__ */ o(function(m) {
          i = m, setTimeout(function() {
            i != null && ur("Uncaught error (of queue)", i);
          }, 1);
        }, "defaultFail"), l = u;
        function s(p) {
          return function(m) {
            e[p] = m, r -= 1, !r && a !== Ha && (n = !0, a(e));
          };
        }
        o(s, "createResolve");
        function c(p) {
          return a = Ha, l(p), e;
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
              m = /* @__PURE__ */ o(function(y, g) {
                h.then(y).catch(g);
              }, "fn");
            }
            if (vi(m), i === void 0) {
              if (n)
                throw new Error("Queue already completed");
              return e.push(m), ++r, d(), f;
            }
          }, "defer"),
          then: /* @__PURE__ */ o(function(m) {
            if (vi(m), a !== Ha)
              throw new Error("queue `then` already set");
            return i || (a = m, r || (n = !0, a(e))), f;
          }, "then"),
          catch: /* @__PURE__ */ o(function(m) {
            if (vi(m), l !== u)
              throw new Error("queue `catch` already set");
            return i ? (m(i), i = null) : l = m, f;
          }, "_catch"),
          abort: c
        };
        return f;
      }
      o(gv, "queue");
      var Ct = gv, Cr, Ar, gi = D.crypto || D.msCrypto;
      !Ar && gi && gi.getRandomValues && (bi = new Uint8Array(16), Ar = /* @__PURE__ */ o(function() {
        return gi.getRandomValues(bi), bi;
      }, "whatwgRNG"));
      var bi;
      Ar || (yi = new Array(16), Ar = /* @__PURE__ */ o(function() {
        for (var t = 0, r; t < 16; t++)
          (t & 3) === 0 && (r = Math.random() * 4294967296), yi[t] = r >>> ((t & 3) << 3) & 255;
        return yi;
      }, "_rng"));
      for (var yi, kl = typeof D.Buffer == "function" ? D.Buffer : Array, wi = [], Sl = {}, Fr = 0; Fr < 256; Fr++)
        wi[Fr] = (Fr + 256).toString(16).substr(1), Sl[wi[Fr]] = Fr;
      function bv(e, t, r) {
        var a = t && r || 0, n = 0;
        for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(i) {
          n < 16 && (t[a + n++] = Sl[i]);
        }); n < 16; )
          t[a + n++] = 0;
        return t;
      }
      o(bv, "parse");
      function Di(e, t) {
        var r = t || 0, a = wi;
        return a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + "-" + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]] + a[e[r++]];
      }
      o(Di, "unparse");
      var Vt = Ar(), yv = [Vt[0] | 1, Vt[1], Vt[2], Vt[3], Vt[4], Vt[5]], Ol = (Vt[6] << 8 | Vt[7]) & 16383, _i = 0, xi = 0;
      function Ml(e, t, r) {
        var a = t && r || 0, n = t || [];
        e = e || {};
        var i = e.clockseq != null ? e.clockseq : Ol, u = e.msecs != null ? e.msecs : new Date().getTime(), l = e.nsecs != null ? e.nsecs : xi + 1, s = u - _i + (l - xi) / 1e4;
        if (s < 0 && e.clockseq == null && (i = i + 1 & 16383), (s < 0 || u > _i) && e.nsecs == null && (l = 0), l >= 1e4)
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        _i = u, xi = l, Ol = i, u += 122192928e5;
        var c = ((u & 268435455) * 1e4 + l) % 4294967296;
        n[a++] = c >>> 24 & 255, n[a++] = c >>> 16 & 255, n[a++] = c >>> 8 & 255, n[a++] = c & 255;
        var d = u / 4294967296 * 1e4 & 268435455;
        n[a++] = d >>> 8 & 255, n[a++] = d & 255, n[a++] = d >>> 24 & 15 | 16, n[a++] = d >>> 16 & 255, n[a++] = i >>> 8 | 128, n[a++] = i & 255;
        for (var f = e.node || yv, p = 0; p < 6; p++)
          n[a + p] = f[p];
        return t || Di(n);
      }
      o(Ml, "v1");
      function sr(e, t, r) {
        var a = t && r || 0;
        typeof e == "string" && (t = e == "binary" ? new kl(16) : null, e = null), e = e || {};
        var n = e.random || (e.rng || Ar)();
        if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t)
          for (var i = 0; i < 16; i++)
            t[a + i] = n[i];
        return t || Di(n);
      }
      o(sr, "v4"), Cr = sr, Cr.v1 = Ml, Cr.v4 = sr, Cr.parse = bv, Cr.unparse = Di, Cr.BufferClass = kl, w._uuid = Ml();
      var wv = sr, Dv = Object.freeze(["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
      function _v(e) {
        var t = e.topic, r = e.channelId, a = e.message, n = e.messageId, i = e.keepalive, u = {
          channelId: r,
          topic: t,
          messageId: n,
          keepalive: !!i,
          source: Nl()
        };
        return a instanceof Error ? u.error = {
          name: a.name,
          message: a.message,
          stack: a.stack
        } : u.payload = a, JSON.stringify(u);
      }
      o(_v, "stringifyMessage");
      function xv(e) {
        var t;
        try {
          t = JSON.parse(e);
        } catch {
          return;
        }
        if (!!Ev(t)) {
          var r = t, a = r.topic, n = r.channelId, i = r.messageId, u = r.keepalive, l = S(t.error) === "object" ? Cv(t.error) : t.payload;
          return {
            topic: a,
            message: l,
            messageId: i,
            channelId: n,
            keepalive: !!u
          };
        }
      }
      o(xv, "parseMessage");
      function Ev(e) {
        return e !== null && S(e) === "object" && typeof e.channelId == "string" && e.source === Nl();
      }
      o(Ev, "isRespondableMessage");
      function Cv(e) {
        var t = e.message || "Unknown error occurred", r = Dv.includes(e.name) ? e.name : "Error", a = D[r] || Error;
        return e.stack && (t += `
` + e.stack.replace(e.message, "")), new a(t);
      }
      o(Cv, "buildErrorObject");
      function Nl() {
        var e = "axeAPI", t = "";
        return typeof w < "u" && w._audit && w._audit.application && (e = w._audit.application), typeof w < "u" && (t = w.version), e + "." + t;
      }
      o(Nl, "getSource2");
      function Ei(e) {
        Pl(e), he(D.parent === e, "Source of the response must be the parent window.");
      }
      o(Ei, "assertIsParentWindow");
      function Il(e) {
        Pl(e), he(e.parent === D, "Respondable target must be a frame in the current window");
      }
      o(Il, "assertIsFrameWindow");
      function Pl(e) {
        he(D !== e, "Messages can not be sent to the same window.");
      }
      o(Pl, "assetNotGlobalWindow");
      var $a = {};
      function Av(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        he(!$a[e], "A replyHandler already exists for this message channel."), $a[e] = {
          replyHandler: t,
          sendToParent: r
        };
      }
      o(Av, "storeReplyHandler");
      function Fv(e) {
        return $a[e];
      }
      o(Fv, "getReplyHandler");
      function Tv(e) {
        delete $a[e];
      }
      o(Tv, "deleteReplyHandler");
      var Ua = [];
      function Ci() {
        var e = "".concat(sr(), ":").concat(sr());
        return Ua.includes(e) ? Ci() : (Ua.push(e), e);
      }
      o(Ci, "createMessageId");
      function Rv(e) {
        return Ua.includes(e) ? !1 : (Ua.push(e), !0);
      }
      o(Rv, "isNewMessage");
      function Ai(e, t, r, a) {
        if (r ? Ei(e) : Il(e), t.message instanceof Error && !r)
          return w.log(t.message), !1;
        var n = _v(pe({
          messageId: Ci()
        }, t)), i = w._audit.allowedOrigins;
        return !i || !i.length ? !1 : (typeof a == "function" && Av(t.channelId, a, r), i.forEach(function(u) {
          try {
            e.postMessage(n, u);
          } catch (l) {
            throw l instanceof e.DOMException ? new Error('allowedOrigins value "'.concat(u, '" is not a valid origin')) : l;
          }
        }), !0);
      }
      o(Ai, "postMessage");
      function kv(e, t, r) {
        if (!e.parent !== D)
          return w.log(t);
        try {
          Ai(e, {
            topic: null,
            channelId: r,
            message: t,
            messageId: Ci(),
            keepalive: !0
          }, !0);
        } catch (a) {
          return w.log(a);
        }
      }
      o(kv, "processError");
      function Ll(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        return /* @__PURE__ */ o(function(n, i, u) {
          var l = {
            channelId: t,
            message: n,
            keepalive: i
          };
          Ai(e, l, r, u);
        }, "respond");
      }
      o(Ll, "createResponder");
      function Sv(e) {
        var t = w._audit.allowedOrigins;
        return t && t.includes("*") || t.includes(e);
      }
      o(Sv, "originIsAllowed");
      function Ov(e, t) {
        var r = e.origin, a = e.data, n = e.source;
        try {
          var i = xv(a) || {}, u = i.channelId, l = i.message, s = i.messageId;
          if (!Sv(r) || !Rv(s))
            return;
          if (l instanceof Error && n.parent !== D)
            return w.log(l), !1;
          try {
            if (i.topic) {
              var c = Ll(n, u);
              Ei(n), t(i, c);
            } else
              Mv(n, i);
          } catch (d) {
            kv(n, d, u);
          }
        } catch (d) {
          return w.log(d), !1;
        }
      }
      o(Ov, "messageHandler");
      function Mv(e, t) {
        var r = t.channelId, a = t.message, n = t.keepalive, i = Fv(r) || {}, u = i.replyHandler, l = i.sendToParent;
        if (!!u) {
          l ? Ei(e) : Il(e);
          var s = Ll(e, r, l);
          !n && r && Tv(r);
          try {
            u(a, n, s);
          } catch (c) {
            w.log(c), s(c, n);
          }
        }
      }
      o(Mv, "callReplyHandler");
      var Nv = {
        open: /* @__PURE__ */ o(function(t) {
          if (typeof D.addEventListener == "function") {
            var r = /* @__PURE__ */ o(function(n) {
              Ov(n, t);
            }, "handler");
            return D.addEventListener("message", r, !1), function() {
              D.removeEventListener("message", r, !1);
            };
          }
        }, "open"),
        post: /* @__PURE__ */ o(function(t, r, a) {
          return typeof D.addEventListener != "function" ? !1 : Ai(t, r, !1, a);
        }, "post")
      };
      function Bl(e) {
        e.updateMessenger(Nv);
      }
      o(Bl, "setDefaultFrameMessenger");
      var Ga, ql, Fi = {};
      function wt(e, t, r, a, n) {
        var i = {
          topic: t,
          message: r,
          channelId: "".concat(sr(), ":").concat(sr()),
          keepalive: a
        };
        return ql(e, i, n);
      }
      o(wt, "_respondable");
      function Iv(e, t) {
        var r = e.topic, a = e.message, n = e.keepalive, i = Fi[r];
        if (!!i)
          try {
            i(a, n, t);
          } catch (u) {
            w.log(u), t(u, n);
          }
      }
      o(Iv, "messageListener"), wt.updateMessenger = /* @__PURE__ */ o(function(t) {
        var r = t.open, a = t.post;
        he(typeof r == "function", "open callback must be a function"), he(typeof a == "function", "post callback must be a function"), Ga && Ga();
        var n = r(Iv);
        n ? (he(typeof n == "function", "open callback must return a cleanup function"), Ga = n) : Ga = null, ql = a;
      }, "updateMessenger"), wt.subscribe = /* @__PURE__ */ o(function(t, r) {
        he(typeof r == "function", "Subscriber callback must be a function"), he(!Fi[t], "Topic ".concat(t, " is already registered to.")), Fi[t] = r;
      }, "subscribe"), wt.isInFrame = /* @__PURE__ */ o(function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D;
        return !!t.frameElement;
      }, "isInFrame"), Bl(wt);
      function jl(e, t, r, a) {
        var n, i, u = e.contentWindow, l = (n = (i = t.options) === null || i === void 0 ? void 0 : i.pingWaitTime) !== null && n !== void 0 ? n : 500;
        if (!u) {
          ur("Frame does not have a content window", e), r(null);
          return;
        }
        if (l === 0) {
          zl(e, t, r, a);
          return;
        }
        var s = setTimeout(function() {
          s = setTimeout(function() {
            t.debug ? a(Vl("No response from frame", e)) : r(null);
          }, 0);
        }, l);
        wt(u, "axe.ping", null, void 0, function() {
          clearTimeout(s), zl(e, t, r, a);
        });
      }
      o(jl, "_sendCommandToFrame");
      function zl(e, t, r, a) {
        var n, i, u = (n = (i = t.options) === null || i === void 0 ? void 0 : i.frameWaitTime) !== null && n !== void 0 ? n : 6e4, l = e.contentWindow, s = setTimeout(/* @__PURE__ */ o(function() {
          a(Vl("Axe in frame timed out", e));
        }, "collectResultFramesTimeout"), u);
        wt(l, "axe.start", t, void 0, function(c) {
          clearTimeout(s), c instanceof Error ? a(c) : r(c);
        });
      }
      o(zl, "callAxeStart");
      function Vl(e, t) {
        var r;
        return w._tree && (r = di(t)), new Error(e + ": " + (r || t));
      }
      o(Vl, "err");
      var Jr = null, Qr = {
        update: /* @__PURE__ */ o(function(t) {
          he(S(t) === "object", "serializer must be an object"), Jr = t;
        }, "update"),
        toSpec: /* @__PURE__ */ o(function(t) {
          return Qr.dqElmToSpec(new Nt(t));
        }, "toSpec"),
        dqElmToSpec: /* @__PURE__ */ o(function(t, r) {
          var a;
          return t instanceof Nt ? (r && (t = Pv(t, r)), typeof ((a = Jr) === null || a === void 0 ? void 0 : a.toSpec) == "function" ? Jr.toSpec(t) : t.toJSON()) : t;
        }, "dqElmToSpec"),
        mergeSpecs: /* @__PURE__ */ o(function(t, r) {
          var a;
          return typeof ((a = Jr) === null || a === void 0 ? void 0 : a.mergeSpecs) == "function" ? Jr.mergeSpecs(t, r) : Nt.mergeSpecs(t, r);
        }, "mergeSpecs"),
        mapRawResults: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return pe({}, r, {
              nodes: Qr.mapRawNodeResults(r.nodes)
            });
          });
        }, "mapRawResults"),
        mapRawNodeResults: /* @__PURE__ */ o(function(t) {
          return t?.map(function(r) {
            var a = r.node, n = Le(r, Vf);
            n.node = Qr.dqElmToSpec(a);
            for (var i = 0, u = ["any", "all", "none"]; i < u.length; i++) {
              var l = u[i];
              n[l] = n[l].map(function(s) {
                var c = s.relatedNodes, d = Le(s, Hf);
                return d.relatedNodes = c.map(Qr.dqElmToSpec), d;
              });
            }
            return n;
          });
        }, "mapRawNodeResults")
      }, pt = Qr;
      function Pv(e, t) {
        var r = e.fromFrame, a = t.ancestry, n = t.xpath, i = t.selectors !== !1 || r;
        return e = new Nt(e.element, t, {
          source: e.source,
          nodeIndexes: e.nodeIndexes,
          selector: i ? e.selector : [":root"],
          ancestry: a ? e.ancestry : [":root"],
          xpath: n ? e.xpath : "/"
        }), e.fromFrame = r, e;
      }
      o(Pv, "cloneLimitedDqElement");
      function Lv(e) {
        var t = [];
        return t.concat(e.any || []).concat(e.all || []).concat(e.none || []);
      }
      o(Lv, "getAllChecks");
      var Wa = Lv;
      function Bv(e, t, r) {
        if (Array.isArray(e))
          return e.find(function(a) {
            return a !== null && S(a) === "object" && Object.hasOwn(a, t) && a[t] === r;
          });
      }
      o(Bv, "findBy");
      var ea = Bv;
      function qv(e, t, r) {
        e.forEach(function(a) {
          a.node = pt.mergeSpecs(a.node, r);
          var n = Wa(a);
          n.forEach(function(i) {
            i.relatedNodes = i.relatedNodes.map(function(u) {
              return pt.mergeSpecs(u, r);
            });
          });
        });
      }
      o(qv, "pushFrame");
      function jv(e, t) {
        for (var r = t[0].node, a = 0; a < e.length; a++) {
          var n = e[a].node, i = Hl(n.nodeIndexes, r.nodeIndexes);
          if (i > 0 || i === 0 && r.selector.length < n.selector.length) {
            e.splice.apply(e, [a, 0].concat(ae(t)));
            return;
          }
        }
        e.push.apply(e, ae(t));
      }
      o(jv, "spliceNodes");
      function zv(e) {
        return !e || !e.results ? null : Array.isArray(e.results) ? e.results.length ? e.results : null : [e.results];
      }
      o(zv, "normalizeResult");
      function Vv(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = zv(a);
          if (!(!n || !n.length)) {
            var i = Hv(a);
            n.forEach(function(u) {
              u.nodes && i && qv(u.nodes, t, i);
              var l = ea(r, "id", u.id);
              l ? u.nodes.length && jv(l.nodes, u.nodes) : r.push(u);
            });
          }
        }), r.forEach(function(a) {
          a.nodes && a.nodes.sort(function(n, i) {
            return Hl(n.node.nodeIndexes, i.node.nodeIndexes);
          });
        }), r;
      }
      o(Vv, "mergeResults");
      function Hl() {
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
      o(Hl, "nodeIndexSort");
      var Ya = Vv;
      function Hv(e) {
        return e.frameElement ? pt.toSpec(e.frameElement) : e.frameSpec ? e.frameSpec : null;
      }
      o(Hv, "getFrameSpec");
      function $l(e, t, r, a, n, i) {
        t = pe({}, t, {
          elementRef: !1
        });
        var u = Ct(), l = e.frames;
        l.forEach(function(s) {
          var c = s.node, d = Le(s, $f);
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
            o(h, "callback"), jl(c, m, h, p);
          });
        }), u.then(function(s) {
          n(Ya(s, t));
        }).catch(i);
      }
      o($l, "_collectResultsFromFrames");
      function cr(e, t) {
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
      o(cr, "_contains");
      function Ul() {
        for (var e = {}, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
          r[a] = arguments[a];
        return r.forEach(function(n) {
          if (!(!n || S(n) !== "object" || Array.isArray(n)))
            for (var i = 0, u = Object.keys(n); i < u.length; i++) {
              var l = u[i];
              !e.hasOwnProperty(l) || S(n[l]) !== "object" || Array.isArray(e[l]) ? e[l] = n[l] : e[l] = Ul(e[l], n[l]);
            }
        }), e;
      }
      o(Ul, "deepMerge");
      var Ti = Ul;
      function $v(e, t) {
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
      o($v, "extendMetaData");
      var Ri = $v, Uv = ["article", "aside", "blockquote", "body", "div", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "main", "nav", "p", "section", "span"];
      function Gv(e) {
        if (e.shadowRoot) {
          var t = e.nodeName.toLowerCase();
          if (Uv.includes(t) || /^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))
            return !0;
        }
        return !1;
      }
      o(Gv, "isShadowRoot");
      var Xa = Gv, ki = {};
      gt(ki, {
        createGrid: /* @__PURE__ */ o(function() {
          return fr;
        }, "createGrid"),
        findElmsInContext: /* @__PURE__ */ o(function() {
          return Gl;
        }, "findElmsInContext"),
        findNearbyElms: /* @__PURE__ */ o(function() {
          return an;
        }, "findNearbyElms"),
        findUp: /* @__PURE__ */ o(function() {
          return Rr;
        }, "findUp"),
        findUpVirtual: /* @__PURE__ */ o(function() {
          return Tr;
        }, "findUpVirtual"),
        focusDisabled: /* @__PURE__ */ o(function() {
          return qi;
        }, "focusDisabled"),
        getComposedParent: /* @__PURE__ */ o(function() {
          return $e;
        }, "getComposedParent"),
        getElementByReference: /* @__PURE__ */ o(function() {
          return zi;
        }, "getElementByReference"),
        getElementCoordinates: /* @__PURE__ */ o(function() {
          return Oi;
        }, "getElementCoordinates"),
        getElementStack: /* @__PURE__ */ o(function() {
          return As;
        }, "getElementStack"),
        getModalDialog: /* @__PURE__ */ o(function() {
          return Ds;
        }, "getModalDialog"),
        getOverflowHiddenAncestors: /* @__PURE__ */ o(function() {
          return Ka;
        }, "getOverflowHiddenAncestors"),
        getRootNode: /* @__PURE__ */ o(function() {
          return Ye;
        }, "getRootNode"),
        getScrollOffset: /* @__PURE__ */ o(function() {
          return ls;
        }, "getScrollOffset"),
        getTabbableElements: /* @__PURE__ */ o(function() {
          return Fs;
        }, "getTabbableElements"),
        getTargetRects: /* @__PURE__ */ o(function() {
          return on;
        }, "getTargetRects"),
        getTargetSize: /* @__PURE__ */ o(function() {
          return Ts;
        }, "getTargetSize"),
        getTextElementStack: /* @__PURE__ */ o(function() {
          return io;
        }, "getTextElementStack"),
        getViewportSize: /* @__PURE__ */ o(function() {
          return Za;
        }, "getViewportSize"),
        getVisibleChildTextRects: /* @__PURE__ */ o(function() {
          return no;
        }, "getVisibleChildTextRects"),
        hasContent: /* @__PURE__ */ o(function() {
          return fn;
        }, "hasContent"),
        hasContentVirtual: /* @__PURE__ */ o(function() {
          return sa;
        }, "hasContentVirtual"),
        hasLangText: /* @__PURE__ */ o(function() {
          return uo;
        }, "hasLangText"),
        idrefs: /* @__PURE__ */ o(function() {
          return At;
        }, "idrefs"),
        insertedIntoFocusOrder: /* @__PURE__ */ o(function() {
          return gc;
        }, "insertedIntoFocusOrder"),
        isCurrentPageLink: /* @__PURE__ */ o(function() {
          return ji;
        }, "isCurrentPageLink"),
        isFocusable: /* @__PURE__ */ o(function() {
          return Se;
        }, "isFocusable"),
        isHTML5: /* @__PURE__ */ o(function() {
          return wc;
        }, "isHTML5"),
        isHiddenForEveryone: /* @__PURE__ */ o(function() {
          return Ht;
        }, "isHiddenForEveryone"),
        isHiddenWithCSS: /* @__PURE__ */ o(function() {
          return hy;
        }, "isHiddenWithCSS"),
        isInTabOrder: /* @__PURE__ */ o(function() {
          return Dt;
        }, "isInTabOrder"),
        isInTextBlock: /* @__PURE__ */ o(function() {
          return lo;
        }, "isInTextBlock"),
        isInert: /* @__PURE__ */ o(function() {
          return nn;
        }, "isInert"),
        isModalOpen: /* @__PURE__ */ o(function() {
          return ca;
        }, "isModalOpen"),
        isMultiline: /* @__PURE__ */ o(function() {
          return xc;
        }, "isMultiline"),
        isNativelyFocusable: /* @__PURE__ */ o(function() {
          return $i;
        }, "isNativelyFocusable"),
        isNode: /* @__PURE__ */ o(function() {
          return xy;
        }, "isNode"),
        isOffscreen: /* @__PURE__ */ o(function() {
          return Ja;
        }, "isOffscreen"),
        isOpaque: /* @__PURE__ */ o(function() {
          return y2;
        }, "isOpaque"),
        isSkipLink: /* @__PURE__ */ o(function() {
          return Oo;
        }, "isSkipLink"),
        isVisible: /* @__PURE__ */ o(function() {
          return C2;
        }, "isVisible"),
        isVisibleOnScreen: /* @__PURE__ */ o(function() {
          return ot;
        }, "isVisibleOnScreen"),
        isVisibleToScreenReaders: /* @__PURE__ */ o(function() {
          return Te;
        }, "isVisibleToScreenReaders"),
        isVisualContent: /* @__PURE__ */ o(function() {
          return oo;
        }, "isVisualContent"),
        reduceToElementsBelowFloating: /* @__PURE__ */ o(function() {
          return Md;
        }, "reduceToElementsBelowFloating"),
        shadowElementsFromPoint: /* @__PURE__ */ o(function() {
          return T2;
        }, "shadowElementsFromPoint"),
        urlPropsFromAttribute: /* @__PURE__ */ o(function() {
          return N2;
        }, "urlPropsFromAttribute"),
        visuallyContains: /* @__PURE__ */ o(function() {
          return Nd;
        }, "visuallyContains"),
        visuallyOverlaps: /* @__PURE__ */ o(function() {
          return Mo;
        }, "visuallyOverlaps"),
        visuallySort: /* @__PURE__ */ o(function() {
          return Vi;
        }, "visuallySort")
      });
      function Wv(e) {
        var t = e.getRootNode && e.getRootNode() || N;
        return t === e && (t = N), t;
      }
      o(Wv, "getRootNode");
      var ta = Wv, Ye = ta;
      function Yv(e) {
        var t = e.context, r = e.value, a = e.attr, n = e.elm, i = n === void 0 ? "" : n, u, l = ke(r);
        return t.nodeType === 9 || t.nodeType === 11 ? u = t : u = Ye(t), Array.from(u.querySelectorAll(i + "[" + a + "=" + l + "]"));
      }
      o(Yv, "findElmsInContext");
      var Gl = Yv;
      function Xv(e, t) {
        var r;
        if (r = e.actualNode, !e.shadowId && typeof e.actualNode.closest == "function") {
          var a = e.actualNode.closest(t);
          return a || null;
        }
        do
          r = r.assignedSlot ? r.assignedSlot : r.parentNode, r && r.nodeType === 11 && (r = r.host);
        while (r && !xr(r, t) && r !== N.documentElement);
        return !r || !xr(r, t) ? null : r;
      }
      o(Xv, "findUpVirtual");
      var Tr = Xv;
      function Kv(e, t) {
        return Tr(se(e), t);
      }
      o(Kv, "findUp");
      var Rr = Kv;
      function Wl(e, t) {
        return (e.left | 0) < (t.right | 0) && (e.right | 0) > (t.left | 0) && (e.top | 0) < (t.bottom | 0) && (e.bottom | 0) > (t.top | 0);
      }
      o(Wl, "_rectsOverlap");
      var Yl = Be(/* @__PURE__ */ o(function(t) {
        var r = [];
        if (!t)
          return r;
        var a = t.getComputedStylePropertyValue("overflow");
        return a === "hidden" && r.push(t), r.concat(Yl(t.parent));
      }, "getOverflowHiddenAncestorsMemoized")), Ka = Yl, Zv = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, Jv = /(\w+)\((\d+)/;
      function Xl(e) {
        return ["style", "script", "noscript", "template"].includes(e.props.nodeName);
      }
      o(Xl, "nativelyHidden");
      function Kl(e) {
        return e.props.nodeName === "area" ? !1 : e.getComputedStylePropertyValue("display") === "none";
      }
      o(Kl, "displayHidden");
      function Zl(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !r && ["hidden", "collapse"].includes(e.getComputedStylePropertyValue("visibility"));
      }
      o(Zl, "visibilityHidden");
      function Jl(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        return !!r && e.getComputedStylePropertyValue("content-visibility") === "hidden";
      }
      o(Jl, "contentVisibiltyHidden");
      function Ql(e) {
        return e.attr("aria-hidden") === "true";
      }
      o(Ql, "ariaHidden");
      function es(e) {
        return e.getComputedStylePropertyValue("opacity") === "0";
      }
      o(es, "opacityHidden");
      function ts(e) {
        var t = Bt(e.actualNode), r = parseInt(e.getComputedStylePropertyValue("height")), a = parseInt(e.getComputedStylePropertyValue("width"));
        return !!t && (r === 0 || a === 0);
      }
      o(ts, "scrollHidden");
      function rs(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        var a = e.boundingClientRect, n = Ka(e);
        return n.length ? n.some(function(i) {
          var u = i.boundingClientRect;
          return u.width < 2 || u.height < 2 ? !0 : !Wl(a, u);
        }) : !1;
      }
      o(rs, "overflowHidden");
      function as(e) {
        var t = e.getComputedStylePropertyValue("clip").match(Zv), r = e.getComputedStylePropertyValue("clip-path").match(Jv);
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
      o(as, "clipHidden");
      function Si(e, t) {
        var r = it(e, "map");
        if (!r)
          return !0;
        var a = r.attr("name");
        if (!a)
          return !0;
        var n = ta(e.actualNode);
        if (!n || n.nodeType !== 9)
          return !0;
        var i = dt(w._tree, 'img[usemap="#'.concat(ke(a), '"]'));
        return !i || !i.length ? !0 : i.some(function(u) {
          return !t(u);
        });
      }
      o(Si, "areaHidden");
      function ns(e) {
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
      o(ns, "detailsHidden");
      var Qv = [Kl, Zl, Jl, ns];
      function Ht(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipAncestors, a = t.isAncestor, n = a === void 0 ? !1 : a;
        return e = _e(e).vNode, r ? is(e, n) : os(e, n);
      }
      o(Ht, "_isHiddenForEveryone");
      var is = Be(/* @__PURE__ */ o(function(t, r) {
        return Xl(t) ? !0 : t.actualNode ? !!(Qv.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) || !t.actualNode.isConnected) : !1;
      }, "isHiddenSelfMemoized")), os = Be(/* @__PURE__ */ o(function(t, r) {
        return is(t, r) ? !0 : t.parent ? os(t.parent, !0) : !1;
      }, "isHiddenAncestorsMemoized"));
      function us(e) {
        if (e.assignedSlot)
          return us(e.assignedSlot);
        if (e.parentNode) {
          var t = e.parentNode;
          if (t.nodeType === 1)
            return t;
          if (t.host)
            return t.host;
        }
        return null;
      }
      o(us, "getComposedParent");
      var $e = us;
      function eg(e) {
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
      o(eg, "getScrollOffset");
      var ls = eg;
      function tg(e) {
        var t = ls(N), r = t.left, a = t.top, n = e.getBoundingClientRect();
        return {
          top: n.top + a,
          right: n.right + r,
          bottom: n.bottom + a,
          left: n.left + r,
          width: n.right - n.left,
          height: n.bottom - n.top
        };
      }
      o(tg, "getElementCoordinates");
      var Oi = tg;
      function rg(e) {
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
      o(rg, "getViewportSize");
      var Za = rg;
      function ag(e, t) {
        for (e = $e(e); e && e.nodeName.toLowerCase() !== "html"; ) {
          if (e.scrollTop && (t += e.scrollTop, t >= 0))
            return !1;
          e = $e(e);
        }
        return !0;
      }
      o(ag, "noParentScrolled");
      function ng(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.isAncestor;
        if (r)
          return !1;
        var a = _e(e), n = a.domNode;
        if (!!n) {
          var i, u = N.documentElement, l = D.getComputedStyle(n), s = D.getComputedStyle(N.body || u).getPropertyValue("direction"), c = Oi(n);
          if (c.bottom < 0 && (ag(n, c.bottom) || l.position === "absolute"))
            return !0;
          if (c.left === 0 && c.right === 0)
            return !1;
          if (s === "ltr") {
            if (c.right <= 0)
              return !0;
          } else if (i = Math.max(u.scrollWidth, Za(D).width), c.left >= i)
            return !0;
          return !1;
        }
      }
      o(ng, "isOffscreen");
      var Ja = ng, ig = [es, ts, rs, as, Ja];
      function ot(e) {
        return e = _e(e).vNode, Mi(e);
      }
      o(ot, "_isVisibleOnScreen");
      var Mi = Be(/* @__PURE__ */ o(function(t, r) {
        return t.actualNode && t.props.nodeName === "area" ? !Si(t, Mi) : Ht(t, {
          skipAncestors: !0,
          isAncestor: r
        }) || t.actualNode && ig.some(function(a) {
          return a(t, {
            isAncestor: r
          });
        }) ? !1 : t.parent ? Mi(t.parent, !0) : !0;
      }, "isVisibleOnScreenMemoized"));
      function Qa(e, t) {
        var r = Math.min(e.top, t.top), a = Math.max(e.right, t.right), n = Math.max(e.bottom, t.bottom), i = Math.min(e.left, t.left);
        return new D.DOMRect(i, r, a - i, n - r);
      }
      o(Qa, "_getBoundingRect");
      function en(e, t) {
        var r = e.x, a = e.y, n = t.top, i = t.right, u = t.bottom, l = t.left;
        return a >= n && r <= i && a <= u && r >= l;
      }
      o(en, "_isPointInRect");
      var ss = {};
      gt(ss, {
        getBoundingRect: /* @__PURE__ */ o(function() {
          return Qa;
        }, "getBoundingRect"),
        getIntersectionRect: /* @__PURE__ */ o(function() {
          return tn;
        }, "getIntersectionRect"),
        getOffset: /* @__PURE__ */ o(function() {
          return ds;
        }, "getOffset"),
        getRectCenter: /* @__PURE__ */ o(function() {
          return ra;
        }, "getRectCenter"),
        hasVisualOverlap: /* @__PURE__ */ o(function() {
          return Ni;
        }, "hasVisualOverlap"),
        isPointInRect: /* @__PURE__ */ o(function() {
          return en;
        }, "isPointInRect"),
        rectHasMinimumSize: /* @__PURE__ */ o(function() {
          return dr;
        }, "rectHasMinimumSize"),
        rectsOverlap: /* @__PURE__ */ o(function() {
          return Wl;
        }, "rectsOverlap"),
        splitRects: /* @__PURE__ */ o(function() {
          return Ii;
        }, "splitRects")
      });
      function tn(e, t) {
        var r = Math.max(e.left, t.left), a = Math.min(e.right, t.right), n = Math.max(e.top, t.top), i = Math.min(e.bottom, t.bottom);
        return r >= a || n >= i ? null : new D.DOMRect(r, n, a - r, i - n);
      }
      o(tn, "_getIntersectionRect");
      function ra(e) {
        var t = e.left, r = e.top, a = e.width, n = e.height;
        return new D.DOMPoint(t + a / 2, r + n / 2);
      }
      o(ra, "_getRectCenter");
      var cs = 0.05;
      function dr(e, t) {
        var r = t.width, a = t.height;
        return r + cs >= e && a + cs >= e;
      }
      o(dr, "_rectHasMinimumSize");
      function ds(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 12, a = on(e), n = on(t);
        if (!a.length || !n.length)
          return 0;
        var i = a.reduce(Qa), u = ra(i), l = 1 / 0, s = Fe(n), c;
        try {
          for (s.s(); !(c = s.n()).done; ) {
            var d = c.value;
            if (en(u, d))
              return 0;
            var f = og(u, d), p = fs(u, f);
            l = Math.min(l, p);
          }
        } catch (g) {
          s.e(g);
        } finally {
          s.f();
        }
        var m = Ts(t);
        if (dr(r * 2, m))
          return l;
        var h = n.reduce(Qa), v = ra(h), y = fs(u, v) - r;
        return Math.max(0, Math.min(l, y));
      }
      o(ds, "_getOffset");
      function og(e, t) {
        var r, a;
        return e.x < t.left ? r = t.left : e.x > t.right ? r = t.right : r = e.x, e.y < t.top ? a = t.top : e.y > t.bottom ? a = t.bottom : a = e.y, {
          x: r,
          y: a
        };
      }
      o(og, "getClosestPoint");
      function fs(e, t) {
        return Math.hypot(e.x - t.x, e.y - t.y);
      }
      o(fs, "pointDistance");
      function Ni(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.left >= a.right || r.right <= a.left || r.top >= a.bottom || r.bottom <= a.top ? !1 : Vi(e, t) > 0;
      }
      o(Ni, "_hasVisualOverlap");
      function Ii(e, t) {
        var r = [e], a = Fe(t), n;
        try {
          var i = /* @__PURE__ */ o(function() {
            var l = n.value;
            r = r.reduce(function(s, c) {
              return s.concat(ug(c, l));
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
      o(Ii, "_splitRects");
      function ug(e, t) {
        var r = e.top, a = e.left, n = e.bottom, i = e.right, u = r < t.bottom && n > t.top, l = a < t.right && i > t.left, s = [];
        if (rn(t.top, r, n) && l && s.push({
          top: r,
          left: a,
          bottom: t.top,
          right: i
        }), rn(t.right, a, i) && u && s.push({
          top: r,
          left: t.right,
          bottom: n,
          right: i
        }), rn(t.bottom, r, n) && l && s.push({
          top: t.bottom,
          right: i,
          bottom: n,
          left: a
        }), rn(t.left, a, i) && u && s.push({
          top: r,
          left: a,
          bottom: n,
          right: t.left
        }), s.length === 0) {
          if (sg(e, t))
            return [];
          s.push(e);
        }
        return s.map(lg);
      }
      o(ug, "splitRect");
      var rn = /* @__PURE__ */ o(function(t, r, a) {
        return t > r && t < a;
      }, "between");
      function lg(e) {
        return new D.DOMRect(e.left, e.top, e.right - e.left, e.bottom - e.top);
      }
      o(lg, "computeRect");
      function sg(e, t) {
        return e.top >= t.top && e.left >= t.left && e.bottom <= t.bottom && e.right <= t.right;
      }
      o(sg, "isEnclosedRect");
      var ps = 0, cg = 0.1, ms = 0.2, hs = 0.3, Pi = 0;
      function fr() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N.body, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (le.get("gridCreated") && !r)
          return ce.gridSize;
        if (le.set("gridCreated", !0), !r) {
          var a, n = se(N.documentElement);
          if (n || (n = new No(N.documentElement)), Pi = 0, n._stackingOrder = [bs(ps, Pi++, null)], (a = t) !== null && a !== void 0 || (t = new Li()), ys(t, n), Bt(n.actualNode)) {
            var i = new Li(n);
            n._subGrid = i;
          }
        }
        for (var u = N.createTreeWalker(e, D.NodeFilter.SHOW_ELEMENT, null, !1), l = r ? u.nextNode() : u.currentNode; l; ) {
          var s = se(l);
          s && s.parent ? r = s.parent : l.assignedSlot ? r = se(l.assignedSlot) : l.parentElement ? r = se(l.parentElement) : l.parentNode && se(l.parentNode) && (r = se(l.parentNode)), s || (s = new w.VirtualNode(l, r)), s._stackingOrder = dg(s, r, Pi++);
          var c = mg(s, r), d = c ? c._subGrid : t;
          if (Bt(s.actualNode)) {
            var f = new Li(s);
            s._subGrid = f;
          }
          var p = s.boundingClientRect;
          p.width !== 0 && p.height !== 0 && ot(l) && ys(d, s), Xa(l) && fr(l.shadowRoot, d, s), l = u.nextNode();
        }
        return ce.gridSize;
      }
      o(fr, "_createGrid");
      function vs(e, t) {
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
        return !!(["layout", "paint", "strict", "content"].includes(m) || a !== "auto" && gs(t));
      }
      o(vs, "isStackingContext");
      function gs(e) {
        if (!e)
          return !1;
        var t = e.getComputedStylePropertyValue("display");
        return ["flex", "inline-flex", "grid", "inline-grid"].includes(t);
      }
      o(gs, "isFlexOrGridContainer");
      function dg(e, t, r) {
        var a = t._stackingOrder.slice();
        if (vs(e, t)) {
          var n = a.findIndex(function(u) {
            var l = u.stackLevel;
            return [ps, ms, hs].includes(l);
          });
          n !== -1 && a.splice(n, a.length - n);
        }
        var i = fg(e, t);
        return i !== null && a.push(bs(i, r, e)), a;
      }
      o(dg, "createStackingOrder");
      function bs(e, t, r) {
        return {
          stackLevel: e,
          treeOrder: t,
          vNode: r
        };
      }
      o(bs, "createStackingContext");
      function fg(e, t) {
        var r = pg(e, t);
        return ["auto", "0"].includes(r) ? e.getComputedStylePropertyValue("position") !== "static" ? hs : e.getComputedStylePropertyValue("float") !== "none" ? ms : vs(e, t) ? cg : null : parseInt(r);
      }
      o(fg, "getStackLevel");
      function pg(e, t) {
        var r = e.getComputedStylePropertyValue("position");
        return r === "static" && !gs(t) ? "auto" : e.getComputedStylePropertyValue("z-index");
      }
      o(pg, "getRealZIndex");
      function mg(e, t) {
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
      o(mg, "findScrollRegionParent");
      function ys(e, t) {
        var r = Ka(t);
        t.clientRects.forEach(function(a) {
          var n, i = r.reduce(function(l, s) {
            return l && tn(l, s.boundingClientRect);
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
      o(ys, "addNodeToGrid");
      var Li = function() {
        function e() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
          xt(this, e), this.container = t, this.cells = [];
        }
        return o(e, "Grid"), Et(e, [{
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
            he(en({
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
            this.boundaries && (r = Qa(this.boundaries, r)), this.boundaries = r, ws(this.cells, l, s, function(c, d) {
              ws(c, i, u, function(f, p) {
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
      function ws(e, t, r, a) {
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
      o(ws, "loopNegativeIndexMatrix");
      function an(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (fr(), !((t = e._grid) !== null && t !== void 0 && (r = t.cells) !== null && r !== void 0 && r.length))
          return [];
        var n = e.boundingClientRect, i = e._grid, u = Bi(e), l = i.getGridPositionOfRect(n, a), s = [];
        return i.loopGridPosition(l, function(c) {
          var d = Fe(c), f;
          try {
            for (d.s(); !(f = d.n()).done; ) {
              var p = f.value;
              p && p !== e && !s.includes(p) && u === Bi(p) && s.push(p);
            }
          } catch (m) {
            d.e(m);
          } finally {
            d.f();
          }
        }), s;
      }
      o(an, "_findNearbyElms");
      var Bi = Be(function(e) {
        return e ? e.getComputedStylePropertyValue("position") === "fixed" ? !0 : Bi(e.parent) : !1;
      }), hg = Be(/* @__PURE__ */ o(function() {
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
          var i, u = (i = vg(n)) !== null && i !== void 0 ? i : {}, l = u.vNode, s = u.rect;
          if (!l)
            return !1;
          var c = N.elementsFromPoint(s.left + 1, s.top + 1);
          return !c.includes(l.actualNode);
        })) !== null && t !== void 0 ? t : null);
      }, "getModalDialogMemoized")), Ds = hg;
      function vg(e) {
        fr();
        var t = w._tree[0]._grid, r = new D.DOMRect(0, 0, D.innerWidth, D.innerHeight);
        if (!!t)
          for (var a = 0; a < t.cells.length; a++) {
            var n = t.cells[a];
            if (!!n)
              for (var i = 0; i < n.length; i++) {
                var u = n[i];
                if (!!u)
                  for (var l = 0; l < u.length; l++) {
                    var s = u[l], c = s.boundingClientRect, d = tn(c, r);
                    if (s.props.nodeName !== "html" && s !== e && s.getComputedStylePropertyValue("pointer-events") !== "none" && d)
                      return {
                        vNode: s,
                        rect: d
                      };
                  }
              }
          }
      }
      o(vg, "getNodeFromGrid");
      function nn(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipAncestors, a = t.isAncestor;
        return r ? _s(e, a) : xs(e, a);
      }
      o(nn, "_isInert");
      var _s = Be(/* @__PURE__ */ o(function(t, r) {
        if (t.hasAttr("inert"))
          return !0;
        if (!r && t.actualNode) {
          var a = Ds();
          if (a && !cr(a, t))
            return !0;
        }
        return !1;
      }, "isInertSelfMemoized")), xs = Be(/* @__PURE__ */ o(function(t, r) {
        return _s(t, r) ? !0 : t.parent ? xs(t.parent, !0) : !1;
      }, "isInertAncestorsMemoized")), gg = ["button", "command", "fieldset", "keygen", "optgroup", "option", "select", "textarea", "input"];
      function bg(e) {
        return gg.includes(e);
      }
      o(bg, "isDisabledAttrAllowed");
      function yg(e) {
        var t = _e(e), r = t.vNode;
        if (bg(r.props.nodeName) && r.hasAttr("disabled") || nn(r))
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
        }), i ? !0 : r.props.nodeName !== "area" && r.actualNode ? Ht(r) : !1;
      }
      o(yg, "focusDisabled");
      var qi = yg, wg = /^\/\#/, Dg = /^#[!/]/;
      function ji(e) {
        var t, r = e.getAttribute("href");
        if (!r || r === "#")
          return !1;
        if (wg.test(r))
          return !0;
        var a = e.hash, n = e.protocol, i = e.hostname, u = e.port, l = e.pathname;
        if (Dg.test(a))
          return !1;
        if (r.charAt(0) === "#")
          return !0;
        if (typeof ((t = D.location) === null || t === void 0 ? void 0 : t.origin) != "string" || D.location.origin.indexOf("://") === -1)
          return null;
        var s = D.location.origin + D.location.pathname, c;
        return i ? c = "".concat(n, "//").concat(i).concat(u ? ":".concat(u) : "") : c = D.location.origin, l ? c += (l[0] !== "/" ? "/" : "") + l : c += D.location.pathname, c === s;
      }
      o(ji, "_isCurrentPageLink");
      function _g(e, t) {
        var r = e.getAttribute(t);
        if (!r || t === "href" && !ji(e))
          return null;
        r.indexOf("#") !== -1 && (r = decodeURIComponent(r.substr(r.indexOf("#") + 1)));
        var a = N.getElementById(r);
        return a || (a = N.getElementsByName(r), a.length ? a[0] : null);
      }
      o(_g, "getElementByReference");
      var zi = _g;
      function Vi(e, t) {
        fr();
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
          for (; i && !u.find(function(y) {
            return y.root === i.getRootNode();
          }); )
            i = i.getRootNode().host;
          if (n = u.find(function(y) {
            return y.root === i.getRootNode();
          }).node, n === i)
            return e.actualNode.getRootNode() !== n.getRootNode() ? -1 : 1;
        }
        var l = D.Node, s = l.DOCUMENT_POSITION_FOLLOWING, c = l.DOCUMENT_POSITION_CONTAINS, d = l.DOCUMENT_POSITION_CONTAINED_BY, f = n.compareDocumentPosition(i), p = f & s ? 1 : -1, m = f & c || f & d, h = Es(e), v = Es(t);
        return h === v || m ? p : v - h;
      }
      o(Vi, "_visuallySort");
      function Es(e) {
        return e.getComputedStylePropertyValue("display").indexOf("inline") !== -1 ? 2 : Cs(e) ? 1 : 0;
      }
      o(Es, "getPositionOrder");
      function Cs(e) {
        if (!e)
          return !1;
        if (e._isFloated !== void 0)
          return e._isFloated;
        var t = e.getComputedStylePropertyValue("float");
        if (t !== "none")
          return e._isFloated = !0, !0;
        var r = Cs(e.parent);
        return e._isFloated = r, r;
      }
      o(Cs, "isFloated");
      function Hi(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = ra(t), n = e.getCellFromPoint(a) || [], i = Math.floor(a.x), u = Math.floor(a.y), l = n.filter(function(c) {
          return c.clientRects.some(function(d) {
            var f = d.left, p = d.top;
            return i < Math.floor(f + d.width) && i >= Math.floor(f) && u < Math.floor(p + d.height) && u >= Math.floor(p);
          });
        }), s = e.container;
        return s && (l = Hi(s._grid, s.boundingClientRect, !0).concat(l)), r || (l = l.sort(Vi).map(function(c) {
          return c.actualNode;
        }).concat(N.documentElement).filter(function(c, d, f) {
          return f.indexOf(c) === d;
        })), l;
      }
      o(Hi, "getRectStack");
      function xg(e) {
        fr();
        var t = se(e), r = t._grid;
        return r ? Hi(r, t.boundingClientRect) : [];
      }
      o(xg, "getElementStack");
      var As = xg;
      function Eg(e) {
        var t = dt(e, "*"), r = t.filter(function(a) {
          var n = a.isFocusable, i = a.actualNode.getAttribute("tabindex");
          return i = i && !isNaN(parseInt(i, 10)) ? parseInt(i) : null, i ? n && i >= 0 : n;
        });
        return r;
      }
      o(Eg, "getTabbableElements");
      var Fs = Eg;
      function Cg(e) {
        var t = _e(e), r = t.vNode;
        if (!r || qi(r))
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
      o(Cg, "isNativelyFocusable");
      var $i = Cg;
      function Se(e) {
        var t = _e(e), r = t.vNode;
        if (r.props.nodeType !== 1 || qi(r))
          return !1;
        if ($i(r))
          return !0;
        var a = r.attr("tabindex");
        return !!(a && !isNaN(parseInt(a, 10)));
      }
      o(Se, "_isFocusable");
      function Dt(e) {
        var t = _e(e), r = t.vNode;
        if (r.props.nodeType !== 1)
          return !1;
        var a = parseInt(r.attr("tabindex", 10));
        return a <= -1 ? !1 : Se(r);
      }
      o(Dt, "_isInTabOrder");
      var on = Be(Ag);
      function Ag(e) {
        var t = e.boundingClientRect, r = an(e).filter(function(n) {
          return Ni(e, n) && n.getComputedStylePropertyValue("pointer-events") !== "none" && !Fg(e, n);
        });
        if (!r.length)
          return [t];
        var a = r.map(function(n) {
          var i = n.boundingClientRect;
          return i;
        });
        return Ii(t, a);
      }
      o(Ag, "getTargetRects");
      function Fg(e, t) {
        return e.actualNode.contains(t.actualNode) && !Dt(t);
      }
      o(Fg, "isDescendantNotInTabOrder");
      var Ts = Be(Tg);
      function Tg(e, t) {
        var r = on(e);
        return Rg(r, t);
      }
      o(Tg, "getTargetSize");
      function Rg(e, t) {
        return e.reduce(function(r, a) {
          var n = dr(t, r), i = dr(t, a);
          if (n !== i)
            return n ? r : a;
          var u = r.width * r.height, l = a.width * a.height;
          return u > l ? r : a;
        });
      }
      o(Rg, "getLargestRect");
      var aa = {};
      gt(aa, {
        accessibleText: /* @__PURE__ */ o(function() {
          return pr;
        }, "accessibleText"),
        accessibleTextVirtual: /* @__PURE__ */ o(function() {
          return Ue;
        }, "accessibleTextVirtual"),
        autocomplete: /* @__PURE__ */ o(function() {
          return gr;
        }, "autocomplete"),
        formControlValue: /* @__PURE__ */ o(function() {
          return ic;
        }, "formControlValue"),
        formControlValueMethods: /* @__PURE__ */ o(function() {
          return Zi;
        }, "formControlValueMethods"),
        hasUnicode: /* @__PURE__ */ o(function() {
          return to;
        }, "hasUnicode"),
        isHumanInterpretable: /* @__PURE__ */ o(function() {
          return ao;
        }, "isHumanInterpretable"),
        isIconLigature: /* @__PURE__ */ o(function() {
          return ro;
        }, "isIconLigature"),
        isValidAutocomplete: /* @__PURE__ */ o(function() {
          return fc;
        }, "isValidAutocomplete"),
        label: /* @__PURE__ */ o(function() {
          return ty;
        }, "label"),
        labelText: /* @__PURE__ */ o(function() {
          return Ji;
        }, "labelText"),
        labelVirtual: /* @__PURE__ */ o(function() {
          return dn;
        }, "labelVirtual"),
        nativeElementType: /* @__PURE__ */ o(function() {
          return ay;
        }, "nativeElementType"),
        nativeTextAlternative: /* @__PURE__ */ o(function() {
          return uc;
        }, "nativeTextAlternative"),
        nativeTextMethods: /* @__PURE__ */ o(function() {
          return oc;
        }, "nativeTextMethods"),
        removeUnicode: /* @__PURE__ */ o(function() {
          return la;
        }, "removeUnicode"),
        sanitize: /* @__PURE__ */ o(function() {
          return ne;
        }, "sanitize"),
        subtreeText: /* @__PURE__ */ o(function() {
          return $t;
        }, "subtreeText"),
        titleText: /* @__PURE__ */ o(function() {
          return ln;
        }, "titleText"),
        unsupported: /* @__PURE__ */ o(function() {
          return Xs;
        }, "unsupported"),
        visible: /* @__PURE__ */ o(function() {
          return pc;
        }, "visible"),
        visibleTextNodes: /* @__PURE__ */ o(function() {
          return ny;
        }, "visibleTextNodes"),
        visibleVirtual: /* @__PURE__ */ o(function() {
          return Tt;
        }, "visibleVirtual")
      });
      function kg(e, t) {
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
      o(kg, "idrefs");
      var At = kg;
      function Sg(e, t) {
        var r = se(e);
        return Ue(r, t);
      }
      o(Sg, "accessibleText");
      var pr = Sg;
      function Og(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = _e(e), a = r.vNode;
        if (a?.props.nodeType !== 1 || a.props.nodeType !== 1 || t.inLabelledByContext || t.inControlContext || !a.attr("aria-labelledby"))
          return "";
        var n = At(a, "aria-labelledby").filter(function(i) {
          return i;
        });
        return n.reduce(function(i, u) {
          var l = pr(u, pe({
            inLabelledByContext: !0,
            startNode: t.startNode || a
          }, t));
          return i ? "".concat(i, " ").concat(l) : l;
        }, "");
      }
      o(Og, "arialabelledbyText");
      var na = Og;
      function ia(e) {
        var t = _e(e), r = t.vNode;
        return r?.props.nodeType !== 1 ? "" : r.attr("aria-label") || "";
      }
      o(ia, "_arialabelText");
      var Mg = {
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
      }, Rs = Mg, Ng = {
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
      }, ks = Ng, Ig = {
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
      }, Pg = Ig, Lg = {
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
      }, Bg = Lg, qg = {
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
      }, jg = qg, zg = {
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
      }, Vg = zg, Ss = {
        ariaAttrs: Rs,
        ariaRoles: pe({}, ks, Pg, Bg),
        htmlElms: jg,
        cssColors: Vg
      }, kr = pe({}, Ss);
      function Hg(e) {
        Object.keys(kr).forEach(function(t) {
          e[t] && (kr[t] = Ti(kr[t], e[t]));
        });
      }
      o(Hg, "configureStandards");
      function $g() {
        Object.keys(kr).forEach(function(e) {
          kr[e] = Ss[e];
        });
      }
      o($g, "resetStandards");
      var ve = kr;
      function Ug(e) {
        var t = ve.ariaRoles[e];
        return t ? !!t.unsupported : !1;
      }
      o(Ug, "isUnsupportedRole");
      var Ui = Ug;
      function Gg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.allowAbstract, a = t.flagUnsupported, n = a === void 0 ? !1 : a, i = ve.ariaRoles[e], u = Ui(e);
        return !i || n && u ? !1 : r ? !0 : i.type !== "abstract";
      }
      o(Gg, "isValidRole");
      var Sr = Gg;
      function Wg(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.fallback, a = t.abstracts, n = t.dpub;
        if (e = e instanceof He ? e : se(e), e.props.nodeType !== 1)
          return null;
        var i = (e.attr("role") || "").trim().toLowerCase(), u = r ? Xe(i) : [i], l = u.find(function(s) {
          return !n && s.substr(0, 4) === "doc-" ? !1 : Sr(s, {
            allowAbstract: a
          });
        });
        return l || null;
      }
      o(Wg, "getExplicitRole");
      var Ee = Wg;
      function Yg(e) {
        return Object.keys(ve.htmlElms).filter(function(t) {
          var r = ve.htmlElms[t];
          return r.contentTypes ? r.contentTypes.includes(e) : r.variant && r.variant.default && r.variant.default.contentTypes ? r.variant.default.contentTypes.includes(e) : !1;
        });
      }
      o(Yg, "getElementsByContentType");
      var Gi = Yg;
      function Xg() {
        return le.get("globalAriaAttrs", function() {
          return Object.keys(ve.ariaAttrs).filter(function(e) {
            return ve.ariaAttrs[e].global;
          });
        });
      }
      o(Xg, "getGlobalAriaAttrs");
      var mr = Xg;
      function Kg(e) {
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
      o(Kg, "toGrid");
      var Pt = Be(Kg);
      function Zg(e, t) {
        var r, a;
        for (t || (t = Pt(Rr(e, "table"))), r = 0; r < t.length; r++)
          if (t[r] && (a = t[r].indexOf(e), a !== -1))
            return {
              x: a,
              y: r
            };
      }
      o(Zg, "getCellPosition");
      var un = Be(Zg);
      function Wi(e) {
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
        var u = Pt(Rr(a, "table")), l = un(a, u), s = u[l.y].every(function(d) {
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
      o(Wi, "_getScope");
      function Jg(e) {
        return ["col", "auto"].indexOf(Wi(e)) !== -1;
      }
      o(Jg, "isColumnHeader");
      var Or = Jg;
      function Qg(e) {
        return ["row", "auto"].includes(Wi(e));
      }
      o(Qg, "isRowHeader");
      var Mr = Qg;
      function eb(e) {
        return e ? e.replace(/\r\n/g, `
`).replace(/\u00A0/g, " ").replace(/[\s]{2,}/g, " ").trim() : "";
      }
      o(eb, "sanitize");
      var ne = eb, Os = /* @__PURE__ */ o(function() {
        return le.get("sectioningElementSelector", function() {
          return Gi("sectioning").map(function(t) {
            return "".concat(t, ":not([role])");
          }).join(", ") + " , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]";
        });
      }, "getSectioningElementSelector");
      function Ms(e) {
        var t = ne(na(e)), r = ne(ia(e));
        return !!(t || r);
      }
      o(Ms, "hasAccessibleName");
      var tb = {
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
          var r = it(t, Os());
          return r ? null : "contentinfo";
        }, "footer"),
        form: /* @__PURE__ */ o(function(t) {
          return Ms(t) ? "form" : null;
        }, "form"),
        h1: "heading",
        h2: "heading",
        h3: "heading",
        h4: "heading",
        h5: "heading",
        h6: "heading",
        header: /* @__PURE__ */ o(function(t) {
          var r = it(t, Os());
          return r ? null : "banner";
        }, "header"),
        hr: "separator",
        img: /* @__PURE__ */ o(function(t) {
          var r = t.hasAttr("alt") && !t.attr("alt"), a = mr().find(function(n) {
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
          return Ms(t) ? "region" : null;
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
          if (Or(t))
            return "columnheader";
          if (Mr(t))
            return "rowheader";
        }, "th"),
        thead: "rowgroup",
        tr: "row",
        ul: "list"
      }, Yi = tb;
      function rb(e, t) {
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
      o(rb, "fromPrimative");
      var hr = rb;
      function ab(e, t) {
        return hr(!!Ue(e), t);
      }
      o(ab, "hasAccessibleName2");
      var Ns = ab;
      function nb(e, t) {
        var r = S(t);
        if (r !== "object" || Array.isArray(t) || t instanceof RegExp)
          throw new Error("Expect matcher to be an object");
        return Object.keys(t).every(function(a) {
          return hr(e(a), t[a]);
        });
      }
      o(nb, "fromFunction");
      var Xi = nb;
      function ib(e, t) {
        return e = _e(e).vNode, Xi(function(r) {
          return e.attr(r);
        }, t);
      }
      o(ib, "attributes");
      var Is = ib;
      function Ps(e, t) {
        return !!t(e);
      }
      o(Ps, "condition");
      function ob(e, t) {
        return hr(Ee(e), t);
      }
      o(ob, "explicitRole");
      var Ls = ob;
      function ub(e, t) {
        return hr(Ft(e), t);
      }
      o(ub, "implicitRole");
      var Bs = ub;
      function lb(e, t) {
        return e = _e(e).vNode, hr(e.props.nodeName, t);
      }
      o(lb, "nodeName");
      var qs = lb;
      function sb(e, t) {
        return e = _e(e).vNode, Xi(function(r) {
          return e.props[r];
        }, t);
      }
      o(sb, "properties");
      var js = sb;
      function cb(e, t) {
        return hr(de(e), t);
      }
      o(cb, "semanticRole");
      var zs = cb, Vs = {
        hasAccessibleName: Ns,
        attributes: Is,
        condition: Ps,
        explicitRole: Ls,
        implicitRole: Bs,
        nodeName: qs,
        properties: js,
        semanticRole: zs
      };
      function Hs(e, t) {
        return e = _e(e).vNode, Array.isArray(t) ? t.some(function(r) {
          return Hs(e, r);
        }) : typeof t == "string" ? mi(e, t) : Object.keys(t).every(function(r) {
          if (!Vs[r])
            throw new Error('Unknown matcher type "'.concat(r, '"'));
          var a = Vs[r], n = t[r];
          return a(e, n);
        });
      }
      o(Hs, "fromDefinition");
      var $s = Hs;
      function db(e, t) {
        return $s(e, t);
      }
      o(db, "matches2");
      var ut = db;
      ut.hasAccessibleName = Ns, ut.attributes = Is, ut.condition = Ps, ut.explicitRole = Ls, ut.fromDefinition = $s, ut.fromFunction = Xi, ut.fromPrimative = hr, ut.implicitRole = Bs, ut.nodeName = qs, ut.properties = js, ut.semanticRole = zs;
      var oa = ut;
      function fb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noMatchAccessibleName, a = r === void 0 ? !1 : r, n = ve.htmlElms[e.props.nodeName];
        if (!n)
          return {};
        if (!n.variant)
          return n;
        var i = n.variant, u = Le(n, Uf);
        for (var l in i)
          if (!(!i.hasOwnProperty(l) || l === "default")) {
            for (var s = i[l], c = s.matches, d = Le(s, Gf), f = Array.isArray(c) ? c : [c], p = 0; p < f.length && a; p++)
              if (f[p].hasOwnProperty("hasAccessibleName"))
                return n;
            if (oa(e, c))
              for (var m in d)
                d.hasOwnProperty(m) && (u[m] = d[m]);
          }
        for (var h in i.default)
          i.default.hasOwnProperty(h) && typeof u[h] > "u" && (u[h] = i.default[h]);
        return u;
      }
      o(fb, "getElementSpec");
      var vr = fb;
      function pb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.chromium, a = e instanceof He ? e : se(e);
        if (e = a.actualNode, !a)
          throw new ReferenceError("Cannot get implicit role of a node outside the current scope.");
        var n = a.props.nodeName, i = Yi[n];
        if (!i && r) {
          var u = vr(a), l = u.chromiumRole;
          return l || null;
        }
        return typeof i == "function" ? i(a) : i || null;
      }
      o(pb, "implicitRole2");
      var Ft = pb, mb = {
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
      function Us(e, t) {
        var r = mb[e.props.nodeName];
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
        return ["none", "presentation"].includes(a) && !Ws(e.parent) ? a : a ? null : Us(e.parent, t);
      }
      o(Us, "getInheritedRole");
      function Gs(e, t) {
        var r = t.chromium, a = Le(t, Wf), n = Ft(e, {
          chromium: r
        });
        if (!n)
          return null;
        var i = Us(e, a);
        return i || n;
      }
      o(Gs, "resolveImplicitRole");
      function Ws(e) {
        var t = mr().some(function(r) {
          return e.hasAttr(r);
        });
        return t || Se(e);
      }
      o(Ws, "hasConflictResolution");
      function hb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noImplicit, a = Le(t, Yf), n = _e(e), i = n.vNode;
        if (i.props.nodeType !== 1)
          return null;
        var u = Ee(i, a);
        return u ? ["presentation", "none"].includes(u) && Ws(i) ? r ? null : Gs(i, a) : u : r ? null : Gs(i, a);
      }
      o(hb, "resolveRole");
      function vb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.noPresentational, a = Le(t, Xf), n = hb(e, a);
        return r && ["presentation", "none"].includes(n) ? null : n;
      }
      o(vb, "getRole");
      var de = vb, gb = ["iframe"];
      function bb(e) {
        var t = _e(e), r = t.vNode;
        return r.props.nodeType !== 1 || !e.hasAttr("title") || !ut(r, gb) && ["none", "presentation"].includes(de(r)) ? "" : r.attr("title");
      }
      o(bb, "titleText");
      var ln = bb;
      function yb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.strict;
        if (e = e instanceof He ? e : se(e), e.props.nodeType !== 1)
          return !1;
        var a = de(e), n = ve.ariaRoles[a];
        return n && n.nameFromContent ? !0 : r ? !1 : !n || ["presentation", "none"].includes(a);
      }
      o(yb, "namedFromContents");
      var Ys = yb;
      function wb(e) {
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
      o(wb, "getOwnedVirtual");
      var ua = wb, Xs = {
        accessibleNameFromFieldValue: ["progressbar"]
      };
      function Te(e) {
        return e = _e(e).vNode, Ki(e);
      }
      o(Te, "_isVisibleToScreenReaders");
      var Ki = Be(/* @__PURE__ */ o(function(t, r) {
        return Ql(t) || nn(t, {
          skipAncestors: !0,
          isAncestor: r
        }) ? !1 : t.actualNode && t.props.nodeName === "area" ? !Si(t, Ki) : Ht(t, {
          skipAncestors: !0,
          isAncestor: r
        }) ? !1 : t.parent ? Ki(t.parent, !0) : !0;
      }, "isVisibleToScreenReadersMemoized"));
      function Ks(e, t, r) {
        var a = _e(e), n = a.vNode, i = t ? Te : ot, u = !e.actualNode || e.actualNode && i(e), l = n.children.map(function(s) {
          var c = s.props, d = c.nodeType, f = c.nodeValue;
          if (d === 3) {
            if (f && u)
              return f;
          } else if (!r)
            return Ks(s, t);
        }).join("");
        return ne(l);
      }
      o(Ks, "visibleVirtual");
      var Tt = Ks, Db = ["button", "checkbox", "color", "file", "hidden", "image", "password", "radio", "reset", "submit"];
      function _b(e) {
        e = e instanceof He ? e : se(e);
        var t = e.props.nodeName;
        return t === "textarea" || t === "input" && !Db.includes((e.attr("type") || "").toLowerCase());
      }
      o(_b, "isNativeTextbox");
      var Zs = _b;
      function xb(e) {
        e = e instanceof He ? e : se(e);
        var t = e.props.nodeName;
        return t === "select";
      }
      o(xb, "isNativeSelect");
      var Js = xb;
      function Eb(e) {
        var t = Ee(e);
        return t === "textbox";
      }
      o(Eb, "isAriaTextbox");
      var Qs = Eb;
      function Cb(e) {
        var t = Ee(e);
        return t === "listbox";
      }
      o(Cb, "isAriaListbox");
      var ec = Cb;
      function Ab(e) {
        var t = Ee(e);
        return t === "combobox";
      }
      o(Ab, "isAriaCombobox");
      var tc = Ab, Fb = ["progressbar", "scrollbar", "slider", "spinbutton"];
      function Tb(e) {
        var t = Ee(e);
        return Fb.includes(t);
      }
      o(Tb, "isAriaRange");
      var rc = Tb, ac = ["textbox", "progressbar", "scrollbar", "slider", "spinbutton", "combobox", "listbox"], Zi = {
        nativeTextboxValue: kb,
        nativeSelectValue: Sb,
        ariaTextboxValue: Ob,
        ariaListboxValue: nc,
        ariaComboboxValue: Mb,
        ariaRangeValue: Nb
      };
      function Rb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode, a = Xs.accessibleNameFromFieldValue || [], n = de(e);
        if (t.startNode === e || !ac.includes(n) || a.includes(n))
          return "";
        var i = Object.keys(Zi).map(function(l) {
          return Zi[l];
        }), u = i.reduce(function(l, s) {
          return l || s(e, t);
        }, "");
        return t.debug && ur(u || "{empty-value}", r, t), u;
      }
      o(Rb, "formControlValue");
      function kb(e) {
        var t = _e(e), r = t.vNode;
        return Zs(r) && r.props.value || "";
      }
      o(kb, "nativeTextboxValue");
      function Sb(e) {
        var t = _e(e), r = t.vNode;
        if (!Js(r))
          return "";
        var a = dt(r, "option"), n = a.filter(function(i) {
          return i.props.selected;
        });
        return n.length || n.push(a[0]), n.map(function(i) {
          return Tt(i);
        }).join(" ") || "";
      }
      o(Sb, "nativeSelectValue");
      function Ob(e) {
        var t = _e(e), r = t.vNode, a = t.domNode;
        return Qs(r) ? !a || a && !Ht(a) ? Tt(r, !0) : a.textContent : "";
      }
      o(Ob, "ariaTextboxValue");
      function nc(e, t) {
        var r = _e(e), a = r.vNode;
        if (!ec(a))
          return "";
        var n = ua(a).filter(function(i) {
          return de(i) === "option" && i.attr("aria-selected") === "true";
        });
        return n.length === 0 ? "" : Ue(n[0], t);
      }
      o(nc, "ariaListboxValue");
      function Mb(e, t) {
        var r = _e(e), a = r.vNode;
        if (!tc(a))
          return "";
        var n = ua(a).filter(function(i) {
          return de(i) === "listbox";
        })[0];
        return n ? nc(n, t) : "";
      }
      o(Mb, "ariaComboboxValue");
      function Nb(e) {
        var t = _e(e), r = t.vNode;
        if (!rc(r) || !r.hasAttr("aria-valuenow"))
          return "";
        var a = +r.attr("aria-valuenow");
        return isNaN(a) ? "0" : String(a);
      }
      o(Nb, "ariaRangeValue");
      var ic = Rb;
      function Ib(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ue.alreadyProcessed;
        t.startNode = t.startNode || e;
        var a = t, n = a.strict, i = a.inControlContext, u = a.inLabelledByContext, l = de(e), s = vr(e, {
          noMatchAccessibleName: !0
        }), c = s.contentTypes;
        if (r(e, t) || e.props.nodeType !== 1 || c != null && c.includes("embedded") || ac.includes(l) || !t.subtreeDescendant && !t.inLabelledByContext && !Ys(e, {
          strict: n
        }))
          return "";
        if (!n) {
          var d = !i && !u;
          t = pe({
            subtreeDescendant: d
          }, t);
        }
        return ua(e).reduce(function(f, p) {
          return Lb(f, p, t);
        }, "");
      }
      o(Ib, "subtreeText");
      var Pb = Gi("phrasing").concat(["#text"]);
      function Lb(e, t, r) {
        var a = t.props.nodeName, n = Ue(t, r);
        return n ? (Pb.includes(a) || (n[0] !== " " && (n += " "), e && e[e.length - 1] !== " " && (n = " " + n)), e + n) : e;
      }
      o(Lb, "appendAccessibleText");
      var $t = Ib;
      function Bb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ue.alreadyProcessed;
        if (t.inControlContext || t.inLabelledByContext || r(e, t))
          return "";
        t.startNode || (t.startNode = e);
        var a = pe({
          inControlContext: !0
        }, t), n = qb(e), i = it(e, "label"), u;
        return i ? (u = [].concat(ae(n), [i.actualNode]), u.sort(Wo)) : u = n, u.map(function(l) {
          return pr(l, a);
        }).filter(function(l) {
          return l !== "";
        }).join(" ");
      }
      o(Bb, "labelText");
      function qb(e) {
        if (!e.attr("id"))
          return [];
        if (!e.actualNode)
          throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
        return Gl({
          elm: "label",
          attr: "for",
          value: e.attr("id"),
          context: e.actualNode
        });
      }
      o(qb, "getExplicitLabels");
      var Ji = Bb, jb = {
        submit: "Submit",
        image: "Submit",
        reset: "Reset",
        button: ""
      }, zb = {
        valueText: /* @__PURE__ */ o(function(t) {
          var r = t.actualNode;
          return r.value || "";
        }, "valueText"),
        buttonDefaultText: /* @__PURE__ */ o(function(t) {
          var r = t.actualNode;
          return jb[r.type] || "";
        }, "buttonDefaultText"),
        tableCaptionText: sn.bind(null, "caption"),
        figureText: sn.bind(null, "figcaption"),
        svgTitleText: sn.bind(null, "title"),
        fieldsetLegendText: sn.bind(null, "legend"),
        altText: Qi.bind(null, "alt"),
        tableSummaryText: Qi.bind(null, "summary"),
        titleText: ln,
        subtreeText: $t,
        labelText: Ji,
        singleSpace: /* @__PURE__ */ o(function() {
          return " ";
        }, "singleSpace"),
        placeholderText: Qi.bind(null, "placeholder")
      };
      function Qi(e, t) {
        return t.attr(e) || "";
      }
      o(Qi, "attrText");
      function sn(e, t, r) {
        var a = t.actualNode;
        e = e.toLowerCase();
        var n = [e, a.nodeName.toLowerCase()].join(","), i = a.querySelector(n);
        return !i || i.nodeName.toLowerCase() !== e ? "" : pr(i, r);
      }
      o(sn, "descendantText");
      var oc = zb;
      function uc(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.actualNode;
        if (e.props.nodeType !== 1 || ["presentation", "none"].includes(de(e)))
          return "";
        var a = Vb(e), n = a.reduce(function(i, u) {
          return i || u(e, t);
        }, "");
        return t.debug && w.log(n || "{empty-value}", r, t), n;
      }
      o(uc, "_nativeTextAlternative");
      function Vb(e) {
        var t = vr(e, {
          noMatchAccessibleName: !0
        }), r = t.namingMethods || [];
        return r.map(function(a) {
          return oc[a];
        });
      }
      o(Vb, "findTextMethods");
      function lc() {
        return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
      }
      o(lc, "getUnicodeNonBmpRegExp");
      function sc() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g;
      }
      o(sc, "getPunctuationRegExp");
      function cc() {
        return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
      }
      o(cc, "getSupplementaryPrivateUseRegExp");
      function dc() {
        return /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;
      }
      o(dc, "getCategoryFormatRegExp");
      var eo = /* @__PURE__ */ o(function() {
        return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
      }, "emoji_regex_default");
      function Hb(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations, i = !1;
        return r && (i || (i = eo().test(e))), a && (i || (i = lc().test(e) || cc().test(e) || dc().test(e))), n && (i || (i = sc().test(e))), i;
      }
      o(Hb, "hasUnicode");
      var to = Hb;
      function ro(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3, a = e.actualNode.nodeValue.trim();
        if (!ne(a) || to(a, {
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
        var y = new Uint32Array(n.getImageData(0, 0, m, d).data.buffer), g = v.reduce(function(k, O, B) {
          return O === 0 && y[B] === 0 || O !== 0 && y[B] !== 0 ? k : ++k;
        }, 0), b = a.split("").reduce(function(k, O) {
          return k + n.measureText(O).width;
        }, 0), _ = n.measureText(a).width, x = g / v.length, T = 1 - _ / b;
        return x >= t && T >= t ? (c.numLigatures++, !0) : !1;
      }
      o(ro, "_isIconLigature");
      function Ue(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t = Wb(e, t), Ub(e, t) || Gb(e, t))
          return "";
        var r = [na, ia, uc, ic, $t, $b, ln], a = r.reduce(function(n, i) {
          return t.startNode === e && (n = ne(n)), n !== "" ? n : i(e, t);
        }, "");
        return t.debug && w.log(a || "{empty-value}", e.actualNode, t), a;
      }
      o(Ue, "_accessibleTextVirtual");
      function $b(e) {
        return e.props.nodeType !== 3 ? "" : e.props.nodeValue;
      }
      o($b, "textNodeValue");
      function Ub(e, t) {
        return !e || e.props.nodeType !== 1 || t.includeHidden ? !1 : !Te(e);
      }
      o(Ub, "shouldIgnoreHidden");
      function Gb(e, t) {
        var r, a = t.ignoreIconLigature, n = t.pixelThreshold, i = (r = t.occurrenceThreshold) !== null && r !== void 0 ? r : t.occuranceThreshold;
        return e.props.nodeType !== 3 || !a ? !1 : ro(e, n, i);
      }
      o(Gb, "shouldIgnoreIconLigature");
      function Wb(e, t) {
        return t.startNode || (t = pe({
          startNode: e
        }, t)), e.props.nodeType === 1 && t.inLabelledByContext && t.includeHidden === void 0 && (t = pe({
          includeHidden: !Te(e)
        }, t)), t;
      }
      o(Wb, "prepareContext"), Ue.alreadyProcessed = /* @__PURE__ */ o(function(t, r) {
        return r.processed = r.processed || [], r.processed.includes(t) ? !0 : (r.processed.push(t), !1);
      }, "alreadyProcessed");
      function Yb(e, t) {
        var r = t.emoji, a = t.nonBmp, n = t.punctuations;
        return r && (e = e.replace(eo(), "")), a && (e = e.replace(lc(), "").replace(cc(), "").replace(dc(), "")), n && (e = e.replace(sc(), "")), e;
      }
      o(Yb, "removeUnicode");
      var la = Yb;
      function Xb(e) {
        if (!e.length)
          return 0;
        var t = ["x", "i"];
        if (t.includes(e))
          return 0;
        var r = la(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return ne(r) ? 1 : 0;
      }
      o(Xb, "isHumanInterpretable");
      var ao = Xb, gr = {
        stateTerms: ["on", "off"],
        standaloneTerms: ["name", "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "nickname", "username", "new-password", "current-password", "organization-title", "organization", "street-address", "address-line1", "address-line2", "address-line3", "address-level4", "address-level3", "address-level2", "address-level1", "country", "country-name", "postal-code", "cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc", "cc-type", "transaction-currency", "transaction-amount", "language", "bday", "bday-day", "bday-month", "bday-year", "sex", "url", "photo", "one-time-code"],
        qualifiers: ["home", "work", "mobile", "fax", "pager"],
        qualifiedTerms: ["tel", "tel-country-code", "tel-national", "tel-area-code", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-extension", "email", "impp"],
        locations: ["billing", "shipping"]
      };
      function Kb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.looseTyped, a = r === void 0 ? !1 : r, n = t.stateTerms, i = n === void 0 ? [] : n, u = t.locations, l = u === void 0 ? [] : u, s = t.qualifiers, c = s === void 0 ? [] : s, d = t.standaloneTerms, f = d === void 0 ? [] : d, p = t.qualifiedTerms, m = p === void 0 ? [] : p;
        if (e = e.toLowerCase().trim(), i = i.concat(gr.stateTerms), i.includes(e) || e === "")
          return !0;
        c = c.concat(gr.qualifiers), l = l.concat(gr.locations), f = f.concat(gr.standaloneTerms), m = m.concat(gr.qualifiedTerms);
        var h = e.split(/\s+/g);
        if (h[h.length - 1] === "webauthn" && (h.pop(), h.length === 0) || !a && (h[0].length > 8 && h[0].substr(0, 8) === "section-" && h.shift(), l.includes(h[0]) && h.shift(), c.includes(h[0]) && (h.shift(), f = []), h.length !== 1))
          return !1;
        var v = h[h.length - 1];
        return f.includes(v) || m.includes(v);
      }
      o(Kb, "isValidAutocomplete");
      var fc = Kb;
      function Zb(e) {
        var t, r;
        return e.attr("aria-labelledby") && (t = At(e.actualNode, "aria-labelledby"), r = t.map(function(a) {
          var n = se(a);
          return n ? Tt(n) : "";
        }).join(" ").trim(), r) || (r = e.attr("aria-label"), r && (r = ne(r), r)) ? r : null;
      }
      o(Zb, "labelVirtual");
      var cn = Zb;
      function Jb(e, t, r) {
        return e = se(e), Tt(e, t, r);
      }
      o(Jb, "visible");
      var pc = Jb;
      function Qb(e) {
        var t, r, a;
        if (r = cn(e), r)
          return r;
        if (e.attr("id")) {
          if (!e.actualNode)
            throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
          var n = ke(e.attr("id"));
          if (a = Ye(e.actualNode), t = a.querySelector('label[for="' + n + '"]'), r = t && pc(t, !0), r)
            return r;
        }
        return t = it(e, "label"), r = t && Tt(t, !0), r || null;
      }
      o(Qb, "labelVirtual2");
      var dn = Qb;
      function ey(e) {
        return e = se(e), dn(e);
      }
      o(ey, "label");
      var ty = ey, ry = [{
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
      }], ay = ry;
      function mc(e) {
        var t = ot(e), r = [];
        return e.children.forEach(function(a) {
          a.actualNode.nodeType === 3 ? t && r.push(a) : r = r.concat(mc(a));
        }), r;
      }
      o(mc, "visibleTextNodes");
      var ny = mc, iy = Be(/* @__PURE__ */ o(function(t) {
        var r = se(t), a = r.boundingClientRect, n = [], i = Ka(r);
        return t.childNodes.forEach(function(u) {
          if (!(u.nodeType !== 3 || ne(u.nodeValue) === "")) {
            var l = oy(u);
            uy(l, a) || n.push.apply(n, ae(ly(l, i)));
          }
        }), n.length ? n : [a];
      }, "getVisibleChildTextRectsMemoized")), no = iy;
      function oy(e) {
        var t = N.createRange();
        return t.selectNodeContents(e), Array.from(t.getClientRects());
      }
      o(oy, "getContentRects");
      function uy(e, t) {
        return e.some(function(r) {
          var a = ra(r);
          return !en(a, t);
        });
      }
      o(uy, "isOutsideNodeBounds");
      function ly(e, t) {
        var r = [];
        return e.forEach(function(a) {
          if (!(a.width < 1 || a.height < 1)) {
            var n = t.reduce(function(i, u) {
              return i && tn(i, u.boundingClientRect);
            }, a);
            n && r.push(n);
          }
        }), r;
      }
      o(ly, "filterHiddenRects");
      function sy(e) {
        fr();
        var t = se(e), r = t._grid;
        if (!r)
          return [];
        var a = no(e);
        return a.map(function(n) {
          return Hi(r, n);
        });
      }
      o(sy, "getTextElementStack");
      var io = sy, cy = ["checkbox", "img", "meter", "progressbar", "scrollbar", "radio", "slider", "spinbutton", "textbox"];
      function dy(e) {
        var t = _e(e), r = t.vNode, a = w.commons.aria.getExplicitRole(r);
        if (a)
          return cy.indexOf(a) !== -1;
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
      o(dy, "isVisualContent");
      var oo = dy, fy = ["head", "title", "template", "script", "style", "iframe", "object", "video", "audio", "noscript"];
      function hc(e) {
        return fy.includes(e.props.nodeName) ? !1 : e.children.some(function(t) {
          var r = t.props;
          return r.nodeType === 3 && r.nodeValue.trim();
        });
      }
      o(hc, "hasChildTextNodes");
      function vc(e, t, r) {
        return hc(e) || oo(e.actualNode) || !r && !!cn(e) || !t && e.children.some(function(a) {
          return a.actualNode.nodeType === 1 && vc(a);
        });
      }
      o(vc, "hasContentVirtual");
      var sa = vc;
      function py(e, t, r) {
        return e = se(e), sa(e, t, r);
      }
      o(py, "hasContent");
      var fn = py;
      function uo(e) {
        return typeof e.children > "u" || hc(e) ? !0 : e.props.nodeType === 1 && oo(e) ? !!w.commons.text.accessibleTextVirtual(e) : e.children.some(function(t) {
          return !t.attr("lang") && uo(t) && !Ht(t);
        });
      }
      o(uo, "_hasLangText");
      function my(e) {
        var t = parseInt(e.getAttribute("tabindex"), 10);
        return t > -1 && Se(e) && !$i(e);
      }
      o(my, "insertedIntoFocusOrder");
      var gc = my;
      function bc(e, t) {
        var r = _e(e), a = r.vNode, n = r.domNode;
        return a ? (a._isHiddenWithCSS === void 0 && (a._isHiddenWithCSS = yc(n, t)), a._isHiddenWithCSS) : yc(n, t);
      }
      o(bc, "isHiddenWithCSS");
      function yc(e, t) {
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
        return u && !n.includes(i) ? bc(u, i) : !1;
      }
      o(yc, "_isHiddenWithCSS");
      var hy = bc;
      function vy(e) {
        var t = e.doctype;
        return t === null ? !1 : t.name === "html" && !t.publicId && !t.systemId;
      }
      o(vy, "isHTML5");
      var wc = vy;
      function gy(e) {
        var t;
        (e instanceof He || (t = D) !== null && t !== void 0 && t.Node && e instanceof D.Node) && (e = w.commons.aria.getRole(e));
        var r = ve.ariaRoles[e];
        return r?.type || null;
      }
      o(gy, "getRoleType");
      var Rt = gy;
      function Dc(e, t) {
        t(e.actualNode) !== !1 && e.children.forEach(function(r) {
          return Dc(r, t);
        });
      }
      o(Dc, "walkDomNode");
      var by = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function _c(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return by.includes(t) || t.substr(0, 6) === "table-";
      }
      o(_c, "isBlock");
      function yy(e) {
        for (var t = $e(e); t && !_c(t); )
          t = $e(t);
        return se(t);
      }
      o(yy, "getBlockParent");
      function wy(e, t) {
        if (_c(e))
          return !1;
        var r = yy(e), a = "", n = "", i = 0;
        return Dc(r, function(u) {
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
      o(wy, "isInTextBlock");
      var lo = wy;
      function Dy(e) {
        e = e || {};
        var t = e.modalPercent || 0.75;
        if (le.get("isModalOpen"))
          return le.get("isModalOpen");
        var r = St(w._tree[0], "dialog, [role=dialog], [aria-modal=true]", ot);
        if (r.length)
          return le.set("isModalOpen", !0), !0;
        for (var a = Za(D), n = a.width * t, i = a.height * t, u = (a.width - n) / 2, l = (a.height - i) / 2, s = [{
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
          var v = c[h].find(function(y) {
            var g = D.getComputedStyle(y);
            return parseInt(g.width, 10) >= n && parseInt(g.height, 10) >= i && g.getPropertyValue("pointer-events") !== "none" && (g.position === "absolute" || g.position === "fixed");
          });
          if (v && c.every(function(y) {
            return y.includes(v);
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
      o(Dy, "isModalOpen");
      var ca = Dy;
      function xc(e) {
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
      o(xc, "_isMultiline");
      function _y(e) {
        return e instanceof D.Node;
      }
      o(_y, "isNode");
      var xy = _y, so = "color.incompleteData", Ey = {
        set: /* @__PURE__ */ o(function(t, r) {
          if (typeof t != "string")
            throw new Error("Incomplete data: key must be a string");
          var a = le.get(so, function() {
            return {};
          });
          return r && (a[t] = r), a[t];
        }, "set"),
        get: /* @__PURE__ */ o(function(t) {
          var r = le.get(so);
          return r?.[t];
        }, "get"),
        clear: /* @__PURE__ */ o(function() {
          le.set(so, {});
        }, "clear")
      }, Ge = Ey;
      function Cy(e, t) {
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
      o(Cy, "elementHasImage");
      var pn = Cy, Ec = {};
      gt(Ec, {
        Colorjs: /* @__PURE__ */ o(function() {
          return st;
        }, "Colorjs"),
        CssSelectorParser: /* @__PURE__ */ o(function() {
          return ky.CssSelectorParser;
        }, "CssSelectorParser"),
        doT: /* @__PURE__ */ o(function() {
          return Cc.default;
        }, "doT"),
        emojiRegexText: /* @__PURE__ */ o(function() {
          return eo;
        }, "emojiRegexText"),
        memoize: /* @__PURE__ */ o(function() {
          return Sy.default;
        }, "memoize")
      });
      var Ay = bt(Rm()), Fy = bt(km());
      bt(Sm());
      var Ty = bt(ih()), Ry = bt(yh());
      "hasOwn" in Object || (Object.hasOwn = Ty.default), "values" in Object || (Object.values = Ry.default), "Promise" in D || Ay.default.polyfill(), "Uint32Array" in D || (D.Uint32Array = Fy.Uint32Array), D.Uint32Array && ("some" in D.Uint32Array.prototype || Object.defineProperty(D.Uint32Array.prototype, "some", {
        value: Array.prototype.some
      }), "reduce" in D.Uint32Array.prototype || Object.defineProperty(D.Uint32Array.prototype, "reduce", {
        value: Array.prototype.reduce
      })), typeof Object.assign != "function" && function() {
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
      }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
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
      var ky = bt(Wu()), Cc = bt(cl()), Sy = bt(Uu());
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
      function da(e) {
        return Ut(e) === "string";
      }
      o(da, "isString");
      function Ut(e) {
        var t = Object.prototype.toString.call(e);
        return (t.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
      }
      o(Ut, "type");
      function mn(e, t) {
        e = +e, t = +t;
        var r = (Math.floor(e) + "").length;
        if (t > r)
          return +e.toFixed(t - r);
        var a = Math.pow(10, r - t);
        return Math.round(e / a) * a;
      }
      o(mn, "toPrecision");
      function Ac(e) {
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
      o(Ac, "parseFunction");
      function Fc(e) {
        return e[e.length - 1];
      }
      o(Fc, "last");
      function hn(e, t, r) {
        return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * r;
      }
      o(hn, "interpolate");
      function Tc(e, t, r) {
        return (r - e) / (t - e);
      }
      o(Tc, "interpolateInv");
      function co(e, t, r) {
        return hn(t[0], t[1], Tc(e[0], e[1], r));
      }
      o(co, "mapRange");
      function Rc(e) {
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
      o(Rc, "parseCoordGrammar");
      var Oy = Object.freeze({
        __proto__: null,
        isString: da,
        type: Ut,
        toPrecision: mn,
        parseFunction: Ac,
        last: Fc,
        interpolate: hn,
        interpolateInv: Tc,
        mapRange: co,
        parseCoordGrammar: Rc,
        multiplyMatrices: Ie
      }), My = function() {
        function e() {
          xt(this, e);
        }
        return o(e, "Hooks"), Et(e, [{
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
      }(), Gt = new My(), kt = {
        gamut_mapping: "lch.c",
        precision: 5,
        deltaE: "76"
      }, _t = {
        D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
        D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
      };
      function fo(e) {
        return Array.isArray(e) ? e : _t[e];
      }
      o(fo, "getWhite");
      function vn(e, t, r) {
        var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        if (e = fo(e), t = fo(t), !e || !t)
          throw new TypeError("Missing white point to convert ".concat(e ? "" : "from").concat(!e && !t ? "/" : "").concat(t ? "" : "to"));
        if (e === t)
          return r;
        var n = {
          W1: e,
          W2: t,
          XYZ: r,
          options: a
        };
        if (Gt.run("chromatic-adaptation-start", n), n.M || (n.W1 === _t.D65 && n.W2 === _t.D50 ? n.M = [[1.0479298208405488, 0.022946793341019088, -0.05019222954313557], [0.029627815688159344, 0.990434484573249, -0.01707382502938514], [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]] : n.W1 === _t.D50 && n.W2 === _t.D65 && (n.M = [[0.9554734527042182, -0.023098536874261423, 0.0632593086610217], [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008], [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]])), Gt.run("chromatic-adaptation-end", n), n.M)
          return Ie(n.M, n.XYZ);
        throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
      }
      o(vn, "adapt$1");
      var Ny = 75e-6, Iy = (A = /* @__PURE__ */ new WeakSet(), R = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakSet(), function() {
        function e(t) {
          var r, a, n, i, u, l, s;
          xt(this, e), Cu(this, I), Cu(this, A), Eu(this, R, {
            writable: !0,
            value: void 0
          }), this.id = t.id, this.name = t.name, this.base = t.base ? e.get(t.base) : null, this.aliases = t.aliases, this.base && (this.fromBase = t.fromBase, this.toBase = t.toBase);
          var c = (r = t.coords) !== null && r !== void 0 ? r : this.base.coords;
          this.coords = c;
          var d = (a = (n = t.white) !== null && n !== void 0 ? n : this.base.white) !== null && a !== void 0 ? a : "D65";
          this.white = fo(d), this.formats = (i = t.formats) !== null && i !== void 0 ? i : {};
          for (var f in this.formats) {
            var p = this.formats[f];
            p.type || (p.type = "function"), p.name || (p.name = f);
          }
          t.cssId && !((u = this.formats.functions) !== null && u !== void 0 && u.color) ? (this.formats.color = {
            id: t.cssId
          }, Object.defineProperty(this, "cssId", {
            value: t.cssId
          })) : (l = this.formats) !== null && l !== void 0 && l.color && !((s = this.formats) !== null && s !== void 0 && s.color.id) && (this.formats.color.id = this.id), this.referred = t.referred, Fu(this, R, Qn(this, I, Py).call(this).reverse()), Gt.run("colorspace-init-end", this);
        }
        return o(e, "_ColorSpace"), Et(e, [{
          key: "inGamut",
          value: /* @__PURE__ */ o(function(r) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.epsilon, i = n === void 0 ? Ny : n;
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
              return r = Qn(this, A, kc).call(this, r), r;
            var a;
            return r === "default" ? a = Object.values(this.formats)[0] : a = this.formats[r], a ? (a = Qn(this, A, kc).call(this, a), a) : null;
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
            for (var i = $r(this, R), u = $r(r, R), l, s, c = 0; c < i.length && i[c] === u[c]; c++)
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
            var a = Ut(r);
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
            var n = Ut(r), i, u;
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
            if (n = Ut(u), n === "number" || n === "string" && u >= 0) {
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
      function kc(e) {
        if (e.coords && !e.coordGrammar) {
          e.type || (e.type = "function"), e.name || (e.name = "color"), e.coordGrammar = Rc(e.coords);
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
              return l && s && (n = co(l, s, n)), n = mn(n, a), c && (n += c), n;
            });
          };
        }
        return e;
      }
      o(kc, "_processFormat2");
      function Py() {
        for (var e = [this], t = this; t = t.base; )
          e.push(t);
        return e;
      }
      o(Py, "_getPath2");
      var te = Iy;
      Nu(te, "registry", {}), Nu(te, "DEFAULT_FORMAT", {
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
        Zn(r, e);
        var t = Jn(r);
        function r(a) {
          var n, i;
          if (xt(this, r), a.coords || (a.coords = {
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
              return i.white !== i.base.white && (c = vn(i.white, i.base.white, c)), c;
            }), (l = a.fromBase) !== null && l !== void 0 || (a.fromBase = function(s) {
              return s = vn(i.base.white, i.white, s), Ie(a.fromXYZ_M, s);
            });
          }
          return (n = a.referred) !== null && n !== void 0 || (a.referred = "display"), i = t.call(this, a);
        }
        return o(r, "RGBColorSpace"), Et(r);
      }(te);
      function Sc(e) {
        var t, r = {
          str: (t = String(e)) === null || t === void 0 ? void 0 : t.trim()
        };
        if (Gt.run("parse-start", r), r.color)
          return r.color;
        if (r.parsed = Ac(r.str), r.parsed) {
          var a = function() {
            var f = r.parsed.name;
            if (f === "color") {
              var p = r.parsed.args.shift(), m = r.parsed.rawArgs.indexOf("/") > 0 ? r.parsed.args.pop() : 1, h = Fe(te.all), v;
              try {
                for (h.s(); !(v = h.n()).done; ) {
                  var y = v.value, g = y.getFormat("color");
                  if (g) {
                    var b;
                    if (p === g.id || (b = g.ids) !== null && b !== void 0 && b.includes(p)) {
                      var _ = function() {
                        var V = Object.keys(y.coords).length, J = Array(V).fill(0);
                        return J.forEach(function(re, ee) {
                          return J[ee] = r.parsed.args[ee] || 0;
                        }), {
                          v: {
                            v: {
                              spaceId: y.id,
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
                    (re.lastAlpha || Fc(r.parsed.args).alpha) && (ee = r.parsed.args.pop());
                    var Y = r.parsed.args;
                    return re.coordGrammar && Object.entries(J.coords).forEach(function(q, ie) {
                      var C, G = H(q, 2), P = G[0], Q = G[1], oe = re.coordGrammar[ie], U = (C = Y[ie]) === null || C === void 0 ? void 0 : C.type;
                      if (oe = oe.find(function(xe) {
                        return xe == U;
                      }), !oe) {
                        var K = Q.name || P;
                        throw new TypeError("".concat(U, " not allowed for ").concat(K, " in ").concat(f, "()"));
                      }
                      var ge = oe.range;
                      U === "<percentage>" && (ge || (ge = [0, 1]));
                      var we = Q.range || Q.refRange;
                      ge && we && (Y[ie] = co(ge, we, Y[ie]));
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
      o(Sc, "parse2");
      function ye(e) {
        if (!e)
          throw new TypeError("Empty color reference");
        da(e) && (e = Sc(e));
        var t = e.space || e.spaceId;
        return t instanceof te || (e.space = te.get(t)), e.alpha === void 0 && (e.alpha = 1), e;
      }
      o(ye, "getColor");
      function fa(e, t) {
        return t = te.get(t), t.from(e);
      }
      o(fa, "getAll");
      function ht(e, t) {
        var r = te.resolveCoord(t, e.space), a = r.space, n = r.index, i = fa(e, a);
        return i[n];
      }
      o(ht, "get");
      function Oc(e, t, r) {
        return t = te.get(t), e.coords = t.to(e.space, r), e;
      }
      o(Oc, "setAll");
      function Wt(e, t, r) {
        if (e = ye(e), arguments.length === 2 && Ut(arguments[1]) === "object") {
          var a = arguments[1];
          for (var n in a)
            Wt(e, n, a[n]);
        } else {
          typeof r == "function" && (r = r(ht(e, t)));
          var i = te.resolveCoord(t, e.space), u = i.space, l = i.index, s = fa(e, u);
          s[l] = r, Oc(e, u, s);
        }
        return e;
      }
      o(Wt, "set");
      var po = new te({
        id: "xyz-d50",
        name: "XYZ D50",
        white: "D50",
        base: mt,
        fromBase: /* @__PURE__ */ o(function(t) {
          return vn(mt.white, "D50", t);
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          return vn("D50", mt.white, t);
        }, "toBase"),
        formats: {
          color: {}
        }
      }), Ly = 216 / 24389, Mc = 24 / 116, gn = 24389 / 27, mo = _t.D50, lt = new te({
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
        white: mo,
        base: po,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = t.map(function(n, i) {
            return n / mo[i];
          }), a = r.map(function(n) {
            return n > Ly ? Math.cbrt(n) : (gn * n + 16) / 116;
          });
          return [116 * a[1] - 16, 500 * (a[0] - a[1]), 200 * (a[1] - a[2])];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = [];
          r[1] = (t[0] + 16) / 116, r[0] = t[1] / 500 + r[1], r[2] = r[1] - t[2] / 200;
          var a = [r[0] > Mc ? Math.pow(r[0], 3) : (116 * r[0] - 16) / gn, t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / gn, r[2] > Mc ? Math.pow(r[2], 3) : (116 * r[2] - 16) / gn];
          return a.map(function(n, i) {
            return n * mo[i];
          });
        }, "toBase"),
        formats: {
          lab: {
            coords: ["<number> | <percentage>", "<number>", "<number>"]
          }
        }
      });
      function bn(e) {
        return (e % 360 + 360) % 360;
      }
      o(bn, "constrain");
      function By(e, t) {
        if (e === "raw")
          return t;
        var r = t.map(bn), a = H(r, 2), n = a[0], i = a[1], u = i - n;
        return e === "increasing" ? u < 0 && (i += 360) : e === "decreasing" ? u > 0 && (n += 360) : e === "longer" ? -180 < u && u < 180 && (u > 0 ? i += 360 : n += 360) : e === "shorter" && (u > 180 ? n += 360 : u < -180 && (i += 360)), [n, i];
      }
      o(By, "adjust");
      var pa = new te({
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
          return Math.abs(n) < l && Math.abs(i) < l ? u = NaN : u = Math.atan2(i, n) * 180 / Math.PI, [a, Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)), bn(u)];
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
      }), Nc = Math.pow(25, 7), yn = Math.PI, Ic = 180 / yn, Nr = yn / 180;
      function ho(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.kL, n = a === void 0 ? 1 : a, i = r.kC, u = i === void 0 ? 1 : i, l = r.kH, s = l === void 0 ? 1 : l, c = lt.from(e), d = H(c, 3), f = d[0], p = d[1], m = d[2], h = pa.from(lt, [f, p, m])[1], v = lt.from(t), y = H(v, 3), g = y[0], b = y[1], _ = y[2], x = pa.from(lt, [g, b, _])[1];
        h < 0 && (h = 0), x < 0 && (x = 0);
        var T = (h + x) / 2, k = Math.pow(T, 7), O = 0.5 * (1 - Math.sqrt(k / (k + Nc))), B = (1 + O) * p, W = (1 + O) * b, j = Math.sqrt(Math.pow(B, 2) + Math.pow(m, 2)), z = Math.sqrt(Math.pow(W, 2) + Math.pow(_, 2)), $ = B === 0 && m === 0 ? 0 : Math.atan2(m, B), V = W === 0 && _ === 0 ? 0 : Math.atan2(_, W);
        $ < 0 && ($ += 2 * yn), V < 0 && (V += 2 * yn), $ *= Ic, V *= Ic;
        var J = g - f, re = z - j, ee = V - $, Y = $ + V, q = Math.abs(ee), ie;
        j * z === 0 ? ie = 0 : q <= 180 ? ie = ee : ee > 180 ? ie = ee - 360 : ee < -180 ? ie = ee + 360 : console.log("the unthinkable has happened");
        var C = 2 * Math.sqrt(z * j) * Math.sin(ie * Nr / 2), G = (f + g) / 2, P = (j + z) / 2, Q = Math.pow(P, 7), oe;
        j * z === 0 ? oe = Y : q <= 180 ? oe = Y / 2 : Y < 360 ? oe = (Y + 360) / 2 : oe = (Y - 360) / 2;
        var U = Math.pow(G - 50, 2), K = 1 + 0.015 * U / Math.sqrt(20 + U), ge = 1 + 0.045 * P, we = 1;
        we -= 0.17 * Math.cos((oe - 30) * Nr), we += 0.24 * Math.cos(2 * oe * Nr), we += 0.32 * Math.cos((3 * oe + 6) * Nr), we -= 0.2 * Math.cos((4 * oe - 63) * Nr);
        var xe = 1 + 0.015 * P * we, Me = 30 * Math.exp(-1 * Math.pow((oe - 275) / 25, 2)), je = 2 * Math.sqrt(Q / (Q + Nc)), Pe = -1 * Math.sin(2 * Me * Nr) * je, Ce = Math.pow(J / (n * K), 2);
        return Ce += Math.pow(re / (u * ge), 2), Ce += Math.pow(C / (s * xe), 2), Ce += Pe * (re / (u * ge)) * (C / (s * xe)), Math.sqrt(Ce);
      }
      o(ho, "deltaE2000");
      var qy = 75e-6;
      function ma(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.space, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.epsilon, n = a === void 0 ? qy : a;
        e = ye(e), t = te.get(t);
        var i = e.coords;
        return t !== e.space && (i = t.from(e)), t.inGamut(i, {
          epsilon: n
        });
      }
      o(ma, "inGamut");
      function ha(e) {
        return {
          space: e.space,
          coords: e.coords.slice(),
          alpha: e.alpha
        };
      }
      o(ha, "clone2");
      function Yt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.method, a = r === void 0 ? kt.gamut_mapping : r, n = t.space, i = n === void 0 ? e.space : n;
        if (da(arguments[1]) && (i = arguments[1]), i = te.get(i), ma(e, i, {
          epsilon: 0
        }))
          return e;
        var u = vt(e, i);
        if (a !== "clip" && !ma(e, i)) {
          var l = Yt(ha(u), {
            method: "clip",
            space: i
          });
          if (ho(e, l) > 2) {
            for (var s = te.resolveCoord(a), c = s.space, d = s.id, f = vt(u, c), p = s.range || s.refRange, m = p[0], h = 0.01, v = m, y = ht(f, d); y - v > h; ) {
              var g = ha(f);
              g = Yt(g, {
                space: i,
                method: "clip"
              });
              var b = ho(f, g);
              b - 2 < h ? v = ht(f, d) : y = ht(f, d), Wt(f, d, (v + y) / 2);
            }
            u = vt(f, i);
          } else
            u = l;
        }
        if (a === "clip" || !ma(u, i, {
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
      o(Yt, "toGamut"), Yt.returns = "color";
      function vt(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.inGamut;
        e = ye(e), t = te.get(t);
        var n = t.from(e), i = {
          space: t,
          coords: n,
          alpha: e.alpha
        };
        return a && (i = Yt(i)), i;
      }
      o(vt, "to"), vt.returns = "color";
      function wn(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.precision, i = n === void 0 ? kt.precision : n, u = a.format, l = u === void 0 ? "default" : u, s = a.inGamut, c = s === void 0 ? !0 : s, d = Le(a, Kf), f;
        e = ye(e);
        var p = l;
        l = (t = (r = e.space.getFormat(l)) !== null && r !== void 0 ? r : e.space.getFormat("default")) !== null && t !== void 0 ? t : te.DEFAULT_FORMAT, c || (c = l.toGamut);
        var m = e.coords;
        if (m = m.map(function(x) {
          return x || 0;
        }), c && !ma(e) && (m = Yt(ha(e), c === !0 ? void 0 : c).coords), l.type === "custom")
          if (d.precision = i, l.serialize)
            f = l.serialize(m, e.alpha, d);
          else
            throw new TypeError("format ".concat(p, " can only be used to parse colors, not for serialization"));
        else {
          var h = l.name || "color";
          l.serializeCoords ? m = l.serializeCoords(m, i) : i !== null && (m = m.map(function(x) {
            return mn(x, i);
          }));
          var v = ae(m);
          if (h === "color") {
            var y, g = l.id || ((y = l.ids) === null || y === void 0 ? void 0 : y[0]) || e.space.id;
            v.unshift(g);
          }
          var b = e.alpha;
          i !== null && (b = mn(b, i));
          var _ = e.alpha < 1 && !l.noAlpha ? "".concat(l.commas ? "," : " /", " ").concat(b) : "";
          f = "".concat(h, "(").concat(v.join(l.commas ? ", " : " ")).concat(_, ")");
        }
        return f;
      }
      o(wn, "serialize");
      var jy = [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0, 0.028072693049087428, 1.060985057710791]], zy = [[1.716651187971268, -0.355670783776392, -0.25336628137366], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]], Dn = new at({
        id: "rec2020-linear",
        name: "Linear REC.2020",
        white: "D65",
        toXYZ_M: jy,
        fromXYZ_M: zy,
        formats: {
          color: {}
        }
      }), _n = 1.09929682680944, Pc = 0.018053968510807, Lc = new at({
        id: "rec2020",
        name: "REC.2020",
        base: Dn,
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r < Pc * 4.5 ? r / 4.5 : Math.pow((r + _n - 1) / _n, 1 / 0.45);
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r >= Pc ? _n * Math.pow(r, 0.45) - (_n - 1) : 4.5 * r;
          });
        }, "fromBase"),
        formats: {
          color: {}
        }
      }), Vy = [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0, 0.04511338185890264, 1.043944368900976]], Hy = [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]], Bc = new at({
        id: "p3-linear",
        name: "Linear P3",
        white: "D65",
        toXYZ_M: Vy,
        fromXYZ_M: Hy
      }), $y = [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]], Uy = [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]], qc = new at({
        id: "srgb-linear",
        name: "Linear sRGB",
        white: "D65",
        toXYZ_M: $y,
        fromXYZ_M: Uy,
        formats: {
          color: {}
        }
      }), jc = {
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
      }, zc = Array(3).fill("<percentage> | <number>[0, 255]"), Vc = Array(3).fill("<number>[0, 255]"), va = new at({
        id: "srgb",
        name: "sRGB",
        base: qc,
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
            coords: zc
          },
          rgb_number: {
            name: "rgb",
            commas: !0,
            coords: Vc,
            noAlpha: !0
          },
          color: {},
          rgba: {
            coords: zc,
            commas: !0,
            lastAlpha: !0
          },
          rgba_number: {
            name: "rgba",
            commas: !0,
            coords: Vc
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
              if (t === "transparent" ? (r.coords = jc.black, r.alpha = 0) : r.coords = jc[t], r.coords)
                return r;
            }, "parse")
          }
        }
      }), Hc = new at({
        id: "p3",
        name: "P3",
        base: Bc,
        fromBase: va.fromBase,
        toBase: va.toBase,
        formats: {
          color: {
            id: "display-p3"
          }
        }
      });
      if (kt.display_space = va, typeof CSS < "u" && CSS.supports)
        for (var vo = 0, $c = [lt, Lc, Hc]; vo < $c.length; vo++) {
          var go = $c[vo], Gy = go.getMinCoords(), Wy = {
            space: go,
            coords: Gy,
            alpha: 1
          }, Yy = wn(Wy);
          if (CSS.supports("color", Yy)) {
            kt.display_space = go;
            break;
          }
        }
      function Xy(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.space, a = r === void 0 ? kt.display_space : r, n = Le(t, Zf), i = wn(e, n);
        if (typeof CSS > "u" || CSS.supports("color", i) || !kt.display_space)
          i = new String(i), i.color = e;
        else {
          var u = vt(e, a);
          i = new String(wn(u, n)), i.color = u;
        }
        return i;
      }
      o(Xy, "_display");
      function Uc(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "lab";
        r = te.get(r);
        var a = r.from(e), n = r.from(t);
        return Math.sqrt(a.reduce(function(i, u, l) {
          var s = n[l];
          return isNaN(u) || isNaN(s) ? i : i + Math.pow(s - u, 2);
        }, 0));
      }
      o(Uc, "distance");
      function Ky(e, t) {
        return e = ye(e), t = ye(t), e.space === t.space && e.alpha === t.alpha && e.coords.every(function(r, a) {
          return r === t.coords[a];
        });
      }
      o(Ky, "equals");
      function Xt(e) {
        return ht(e, [mt, "y"]);
      }
      o(Xt, "getLuminance");
      function Gc(e, t) {
        Wt(e, [mt, "y"], t);
      }
      o(Gc, "setLuminance");
      function Zy(e) {
        Object.defineProperty(e.prototype, "luminance", {
          get: /* @__PURE__ */ o(function() {
            return Xt(this);
          }, "get"),
          set: /* @__PURE__ */ o(function(r) {
            Gc(this, r);
          }, "set")
        });
      }
      o(Zy, "register$2");
      var Jy = Object.freeze({
        __proto__: null,
        getLuminance: Xt,
        setLuminance: Gc,
        register: Zy
      });
      function Qy(e, t) {
        e = ye(e), t = ye(t);
        var r = Math.max(Xt(e), 0), a = Math.max(Xt(t), 0);
        if (a > r) {
          var n = [a, r];
          r = n[0], a = n[1];
        }
        return (r + 0.05) / (a + 0.05);
      }
      o(Qy, "contrastWCAG21");
      var e0 = 0.56, t0 = 0.57, r0 = 0.62, a0 = 0.65, Wc = 0.022, n0 = 1.414, i0 = 0.1, o0 = 5e-4, u0 = 1.14, Yc = 0.027, l0 = 1.14;
      function Xc(e) {
        return e >= Wc ? e : e + Math.pow(Wc - e, n0);
      }
      o(Xc, "fclamp");
      function Ir(e) {
        var t = e < 0 ? -1 : 1, r = Math.abs(e);
        return t * Math.pow(r, 2.4);
      }
      o(Ir, "linearize");
      function s0(e, t) {
        t = ye(t), e = ye(e);
        var r, a, n, i, u, l;
        t = vt(t, "srgb");
        var s = H(t.coords, 3);
        i = s[0], u = s[1], l = s[2];
        var c = Ir(i) * 0.2126729 + Ir(u) * 0.7151522 + Ir(l) * 0.072175;
        e = vt(e, "srgb");
        var d = H(e.coords, 3);
        i = d[0], u = d[1], l = d[2];
        var f = Ir(i) * 0.2126729 + Ir(u) * 0.7151522 + Ir(l) * 0.072175, p = Xc(c), m = Xc(f), h = m > p;
        return Math.abs(m - p) < o0 ? a = 0 : h ? (r = Math.pow(m, e0) - Math.pow(p, t0), a = r * u0) : (r = Math.pow(m, a0) - Math.pow(p, r0), a = r * l0), Math.abs(a) < i0 ? n = 0 : a > 0 ? n = a - Yc : n = a + Yc, n * 100;
      }
      o(s0, "contrastAPCA");
      function c0(e, t) {
        e = ye(e), t = ye(t);
        var r = Math.max(Xt(e), 0), a = Math.max(Xt(t), 0);
        if (a > r) {
          var n = [a, r];
          r = n[0], a = n[1];
        }
        var i = r + a;
        return i === 0 ? 0 : (r - a) / i;
      }
      o(c0, "contrastMichelson");
      var d0 = 5e4;
      function f0(e, t) {
        e = ye(e), t = ye(t);
        var r = Math.max(Xt(e), 0), a = Math.max(Xt(t), 0);
        if (a > r) {
          var n = [a, r];
          r = n[0], a = n[1];
        }
        return a === 0 ? d0 : (r - a) / a;
      }
      o(f0, "contrastWeber");
      function p0(e, t) {
        e = ye(e), t = ye(t);
        var r = ht(e, [lt, "l"]), a = ht(t, [lt, "l"]);
        return Math.abs(r - a);
      }
      o(p0, "contrastLstar");
      var m0 = 216 / 24389, Kc = 24 / 116, xn = 24389 / 27, bo = _t.D65, yo = new te({
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
        white: bo,
        base: mt,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = t.map(function(n, i) {
            return n / bo[i];
          }), a = r.map(function(n) {
            return n > m0 ? Math.cbrt(n) : (xn * n + 16) / 116;
          });
          return [116 * a[1] - 16, 500 * (a[0] - a[1]), 200 * (a[1] - a[2])];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = [];
          r[1] = (t[0] + 16) / 116, r[0] = t[1] / 500 + r[1], r[2] = r[1] - t[2] / 200;
          var a = [r[0] > Kc ? Math.pow(r[0], 3) : (116 * r[0] - 16) / xn, t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / xn, r[2] > Kc ? Math.pow(r[2], 3) : (116 * r[2] - 16) / xn];
          return a.map(function(n, i) {
            return n * bo[i];
          });
        }, "toBase"),
        formats: {
          "lab-d65": {
            coords: ["<number> | <percentage>", "<number>", "<number>"]
          }
        }
      }), wo = Math.pow(5, 0.5) * 0.5 + 0.5;
      function h0(e, t) {
        e = ye(e), t = ye(t);
        var r = ht(e, [yo, "l"]), a = ht(t, [yo, "l"]), n = Math.abs(Math.pow(r, wo) - Math.pow(a, wo)), i = Math.pow(n, 1 / wo) * Math.SQRT2 - 40;
        return i < 7.5 ? 0 : i;
      }
      o(h0, "contrastDeltaPhi");
      var En = Object.freeze({
        __proto__: null,
        contrastWCAG21: Qy,
        contrastAPCA: s0,
        contrastMichelson: c0,
        contrastWeber: f0,
        contrastLstar: p0,
        contrastDeltaPhi: h0
      });
      function v0(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        da(r) && (r = {
          algorithm: r
        });
        var a = r, n = a.algorithm, i = Le(a, Jf);
        if (!n) {
          var u = Object.keys(En).map(function(s) {
            return s.replace(/^contrast/, "");
          }).join(", ");
          throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(u));
        }
        e = ye(e), t = ye(t);
        for (var l in En)
          if ("contrast" + n.toLowerCase() === l.toLowerCase())
            return En[l](e, t, i);
        throw new TypeError("Unknown contrast algorithm: ".concat(n));
      }
      o(v0, "contrast");
      function Zc(e) {
        var t = fa(e, mt), r = H(t, 3), a = r[0], n = r[1], i = r[2], u = a + 15 * n + 3 * i;
        return [4 * a / u, 9 * n / u];
      }
      o(Zc, "uv");
      function Jc(e) {
        var t = fa(e, mt), r = H(t, 3), a = r[0], n = r[1], i = r[2], u = a + n + i;
        return [a / u, n / u];
      }
      o(Jc, "xy");
      function g0(e) {
        Object.defineProperty(e.prototype, "uv", {
          get: /* @__PURE__ */ o(function() {
            return Zc(this);
          }, "get")
        }), Object.defineProperty(e.prototype, "xy", {
          get: /* @__PURE__ */ o(function() {
            return Jc(this);
          }, "get")
        });
      }
      o(g0, "register$1");
      var b0 = Object.freeze({
        __proto__: null,
        uv: Zc,
        xy: Jc,
        register: g0
      });
      function y0(e, t) {
        return Uc(e, t, "lab");
      }
      o(y0, "deltaE76");
      var w0 = Math.PI, Qc = w0 / 180;
      function D0(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.l, n = a === void 0 ? 2 : a, i = r.c, u = i === void 0 ? 1 : i, l = lt.from(e), s = H(l, 3), c = s[0], d = s[1], f = s[2], p = pa.from(lt, [c, d, f]), m = H(p, 3), h = m[1], v = m[2], y = lt.from(t), g = H(y, 3), b = g[0], _ = g[1], x = g[2], T = pa.from(lt, [b, _, x])[1];
        h < 0 && (h = 0), T < 0 && (T = 0);
        var k = c - b, O = h - T, B = d - _, W = f - x, j = Math.pow(B, 2) + Math.pow(W, 2) - Math.pow(O, 2), z = 0.511;
        c >= 16 && (z = 0.040975 * c / (1 + 0.01765 * c));
        var $ = 0.0638 * h / (1 + 0.0131 * h) + 0.638, V;
        Number.isNaN(v) && (v = 0), v >= 164 && v <= 345 ? V = 0.56 + Math.abs(0.2 * Math.cos((v + 168) * Qc)) : V = 0.36 + Math.abs(0.4 * Math.cos((v + 35) * Qc));
        var J = Math.pow(h, 4), re = Math.sqrt(J / (J + 1900)), ee = $ * (re * V + 1 - re), Y = Math.pow(k / (n * z), 2);
        return Y += Math.pow(O / (u * $), 2), Y += j / Math.pow(ee, 2), Math.sqrt(Y);
      }
      o(D0, "deltaECMC");
      var ed = 203, Do = new te({
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
            return Math.max(r * ed, 0);
          });
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return Math.max(r / ed, 0);
          });
        }, "toBase")
      }), Cn = 1.15, An = 0.66, td = 2610 / Math.pow(2, 14), _0 = Math.pow(2, 14) / 2610, rd = 3424 / Math.pow(2, 12), ad = 2413 / Math.pow(2, 7), nd = 2392 / Math.pow(2, 7), x0 = 1.7 * 2523 / Math.pow(2, 5), id = Math.pow(2, 5) / (1.7 * 2523), Fn = -0.56, _o = 16295499532821565e-27, E0 = [[0.41478972, 0.579999, 0.014648], [-0.20151, 1.120649, 0.0531008], [-0.0166008, 0.2648, 0.6684799]], C0 = [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]], A0 = [[0.5, 0.5, 0], [3.524, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]], F0 = [[1, 0.1386050432715393, 0.05804731615611886], [0.9999999999999999, -0.1386050432715393, -0.05804731615611886], [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]], od = new te({
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
        base: Do,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u = Cn * a - (Cn - 1) * i, l = An * n - (An - 1) * a, s = Ie(E0, [u, l, i]), c = s.map(function(y) {
            var g = rd + ad * Math.pow(y / 1e4, td), b = 1 + nd * Math.pow(y / 1e4, td);
            return Math.pow(g / b, x0);
          }), d = Ie(A0, c), f = H(d, 3), p = f[0], m = f[1], h = f[2], v = (1 + Fn) * p / (1 + Fn * p) - _o;
          return [v, m, h];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u = (a + _o) / (1 + Fn - Fn * (a + _o)), l = Ie(F0, [u, n, i]), s = l.map(function(y) {
            var g = rd - Math.pow(y, id), b = nd * Math.pow(y, id) - ad, _ = 1e4 * Math.pow(g / b, _0);
            return _;
          }), c = Ie(C0, s), d = H(c, 3), f = d[0], p = d[1], m = d[2], h = (f + (Cn - 1) * m) / Cn, v = (p + (An - 1) * h) / An;
          return [h, v, m];
        }, "toBase"),
        formats: {
          color: {}
        }
      }), xo = new te({
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
        base: od,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u, l = 2e-4;
          return Math.abs(n) < l && Math.abs(i) < l ? u = NaN : u = Math.atan2(i, n) * 180 / Math.PI, [a, Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)), bn(u)];
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          return [t[0], t[1] * Math.cos(t[2] * Math.PI / 180), t[1] * Math.sin(t[2] * Math.PI / 180)];
        }, "toBase"),
        formats: {
          color: {}
        }
      });
      function T0(e, t) {
        var r = xo.from(e), a = H(r, 3), n = a[0], i = a[1], u = a[2], l = xo.from(t), s = H(l, 3), c = s[0], d = s[1], f = s[2], p = n - c, m = i - d;
        Number.isNaN(u) && Number.isNaN(f) ? (u = 0, f = 0) : Number.isNaN(u) ? u = f : Number.isNaN(f) && (f = u);
        var h = u - f, v = 2 * Math.sqrt(i * d) * Math.sin(h / 2 * (Math.PI / 180));
        return Math.sqrt(Math.pow(p, 2) + Math.pow(m, 2) + Math.pow(v, 2));
      }
      o(T0, "deltaEJz");
      var ud = 3424 / 4096, ld = 2413 / 128, sd = 2392 / 128, cd = 2610 / 16384, R0 = 2523 / 32, k0 = 16384 / 2610, dd = 32 / 2523, S0 = [[0.3592, 0.6976, -0.0358], [-0.1922, 1.1004, 0.0755], [7e-3, 0.0749, 0.8434]], O0 = [[2048 / 4096, 2048 / 4096, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]], M0 = [[0.9999888965628402, 0.008605050147287059, 0.11103437159861648], [1.00001110343716, -0.008605050147287059, -0.11103437159861648], [1.0000320633910054, 0.56004913547279, -0.3206339100541203]], N0 = [[2.0701800566956137, -1.326456876103021, 0.20661600684785517], [0.3649882500326575, 0.6804673628522352, -0.04542175307585323], [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]], Eo = new te({
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
        base: Do,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = Ie(S0, t);
          return I0(r);
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = P0(t);
          return Ie(N0, r);
        }, "toBase"),
        formats: {
          color: {}
        }
      });
      function I0(e) {
        var t = e.map(function(r) {
          var a = ud + ld * Math.pow(r / 1e4, cd), n = 1 + sd * Math.pow(r / 1e4, cd);
          return Math.pow(a / n, R0);
        });
        return Ie(O0, t);
      }
      o(I0, "LMStoICtCp");
      function P0(e) {
        var t = Ie(M0, e), r = t.map(function(a) {
          var n = Math.max(Math.pow(a, dd) - ud, 0), i = ld - sd * Math.pow(a, dd);
          return 1e4 * Math.pow(n / i, k0);
        });
        return r;
      }
      o(P0, "ICtCptoLMS");
      function L0(e, t) {
        var r = Eo.from(e), a = H(r, 3), n = a[0], i = a[1], u = a[2], l = Eo.from(t), s = H(l, 3), c = s[0], d = s[1], f = s[2];
        return 720 * Math.sqrt(Math.pow(n - c, 2) + 0.25 * Math.pow(i - d, 2) + Math.pow(u - f, 2));
      }
      o(L0, "deltaEITP");
      var B0 = [[0.8190224432164319, 0.3619062562801221, -0.12887378261216414], [0.0329836671980271, 0.9292868468965546, 0.03614466816999844], [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]], q0 = [[1.2268798733741557, -0.5578149965554813, 0.28139105017721583], [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701], [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]], j0 = [[0.2104542553, 0.793617785, -0.0040720468], [1.9779984951, -2.428592205, 0.4505937099], [0.0259040371, 0.7827717662, -0.808675766]], z0 = [[0.9999999984505198, 0.39633779217376786, 0.2158037580607588], [1.0000000088817609, -0.10556134232365635, -0.06385417477170591], [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]], Tn = new te({
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
          var r = Ie(B0, t), a = r.map(function(n) {
            return Math.cbrt(n);
          });
          return Ie(j0, a);
        }, "fromBase"),
        toBase: /* @__PURE__ */ o(function(t) {
          var r = Ie(z0, t), a = r.map(function(n) {
            return Math.pow(n, 3);
          });
          return Ie(q0, a);
        }, "toBase"),
        formats: {
          oklab: {
            coords: ["<number> | <percentage>", "<number>", "<number>"]
          }
        }
      });
      function V0(e, t) {
        var r = Tn.from(e), a = H(r, 3), n = a[0], i = a[1], u = a[2], l = Tn.from(t), s = H(l, 3), c = s[0], d = s[1], f = s[2], p = n - c, m = i - d, h = u - f;
        return Math.sqrt(Math.pow(p, 2) + Math.pow(m, 2) + Math.pow(h, 2));
      }
      o(V0, "deltaEOK");
      var Co = Object.freeze({
        __proto__: null,
        deltaE76: y0,
        deltaECMC: D0,
        deltaE2000: ho,
        deltaEJz: T0,
        deltaEITP: L0,
        deltaEOK: V0
      });
      function ga(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        da(r) && (r = {
          method: r
        });
        var a = r, n = a.method, i = n === void 0 ? kt.deltaE : n, u = Le(a, Qf);
        e = ye(e), t = ye(t);
        for (var l in Co)
          if ("deltae" + i.toLowerCase() === l.toLowerCase())
            return Co[l](e, t, u);
        throw new TypeError("Unknown deltaE method: ".concat(i));
      }
      o(ga, "deltaE");
      function H0(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.25, r = te.get("oklch", "lch"), a = [r, "l"];
        return Wt(e, a, function(n) {
          return n * (1 + t);
        });
      }
      o(H0, "lighten");
      function $0(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.25, r = te.get("oklch", "lch"), a = [r, "l"];
        return Wt(e, a, function(n) {
          return n * (1 - t);
        });
      }
      o($0, "darken");
      var U0 = Object.freeze({
        __proto__: null,
        lighten: H0,
        darken: $0
      });
      function fd(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.5, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, n = [ye(e), ye(t)];
        if (e = n[0], t = n[1], Ut(r) === "object") {
          var i = [0.5, r];
          r = i[0], a = i[1];
        }
        var u = a, l = u.space, s = u.outputSpace, c = u.premultiplied, d = ba(e, t, {
          space: l,
          outputSpace: s,
          premultiplied: c
        });
        return d(r);
      }
      o(fd, "mix");
      function pd(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a;
        if (Ao(e)) {
          a = e, r = t;
          var n = H(a.rangeArgs.colors, 2);
          e = n[0], t = n[1];
        }
        var i = r, u = i.maxDeltaE, l = i.deltaEMethod, s = i.steps, c = s === void 0 ? 2 : s, d = i.maxSteps, f = d === void 0 ? 1e3 : d, p = Le(i, ep);
        if (!a) {
          var m = [ye(e), ye(t)];
          e = m[0], t = m[1], a = ba(e, t, p);
        }
        var h = ga(e, t), v = u > 0 ? Math.max(c, Math.ceil(h / u) + 1) : c, y = [];
        if (f !== void 0 && (v = Math.min(v, f)), v === 1)
          y = [{
            p: 0.5,
            color: a(0.5)
          }];
        else {
          var g = 1 / (v - 1);
          y = Array.from({
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
          for (var b = y.reduce(function(B, W, j) {
            if (j === 0)
              return 0;
            var z = ga(W.color, y[j - 1].color, l);
            return Math.max(B, z);
          }, 0); b > u; ) {
            b = 0;
            for (var _ = 1; _ < y.length && y.length < f; _++) {
              var x = y[_ - 1], T = y[_], k = (T.p + x.p) / 2, O = a(k);
              b = Math.max(b, ga(O, x.color), ga(O, T.color)), y.splice(_, 0, {
                p: k,
                color: a(k)
              }), _++;
            }
          }
        return y = y.map(function(B) {
          return B.color;
        }), y;
      }
      o(pd, "steps");
      function ba(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (Ao(e)) {
          var a = e, n = t;
          return ba.apply(void 0, ae(a.rangeArgs.colors).concat([pe({}, a.rangeArgs.options, n)]));
        }
        var i = r.space, u = r.outputSpace, l = r.progression, s = r.premultiplied;
        e = ye(e), t = ye(t), e = ha(e), t = ha(t);
        var c = {
          colors: [e, t],
          options: r
        };
        if (i ? i = te.get(i) : i = te.registry[kt.interpolationSpace] || e.space, u = u ? te.get(u) : i, e = vt(e, i), t = vt(t, i), e = Yt(e), t = Yt(t), i.coords.h && i.coords.h.type === "angle") {
          var d = r.hue = r.hue || "shorter", f = [i, "h"], p = [ht(e, f), ht(t, f)], m = p[0], h = p[1], v = By(d, [m, h]), y = H(v, 2);
          m = y[0], h = y[1], Wt(e, f, m), Wt(t, f, h);
        }
        return s && (e.coords = e.coords.map(function(g) {
          return g * e.alpha;
        }), t.coords = t.coords.map(function(g) {
          return g * t.alpha;
        })), Object.assign(function(g) {
          g = l ? l(g) : g;
          var b = e.coords.map(function(T, k) {
            var O = t.coords[k];
            return hn(T, O, g);
          }), _ = hn(e.alpha, t.alpha, g), x = {
            space: i,
            coords: b,
            alpha: _
          };
          return s && (x.coords = x.coords.map(function(T) {
            return T / _;
          })), u !== i && (x = vt(x, u)), x;
        }, {
          rangeArgs: c
        });
      }
      o(ba, "range");
      function Ao(e) {
        return Ut(e) === "function" && !!e.rangeArgs;
      }
      o(Ao, "isRange"), kt.interpolationSpace = "lab";
      function G0(e) {
        e.defineFunction("mix", fd, {
          returns: "color"
        }), e.defineFunction("range", ba, {
          returns: "function<color>"
        }), e.defineFunction("steps", pd, {
          returns: "array<color>"
        });
      }
      o(G0, "register");
      var W0 = Object.freeze({
        __proto__: null,
        mix: fd,
        steps: pd,
        range: ba,
        isRange: Ao,
        register: G0
      }), md = new te({
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
        base: va,
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
      }), hd = new te({
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
        base: md,
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
      }), Y0 = new te({
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
        base: hd,
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
      }), X0 = [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]], K0 = [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]], vd = new at({
        id: "a98rgb-linear",
        name: "Linear Adobe\xAE 98 RGB compatible",
        white: "D65",
        toXYZ_M: X0,
        fromXYZ_M: K0
      }), Z0 = new at({
        id: "a98rgb",
        name: "Adobe\xAE 98 RGB compatible",
        base: vd,
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
      }), J0 = [[0.7977604896723027, 0.13518583717574031, 0.0313493495815248], [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20], [0, 0, 0.8251046025104601]], Q0 = [[1.3457989731028281, -0.25558010007997534, -0.05110628506753401], [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973], [0, 0, 1.2119675456389454]], gd = new at({
        id: "prophoto-linear",
        name: "Linear ProPhoto",
        white: "D50",
        base: po,
        toXYZ_M: J0,
        fromXYZ_M: Q0
      }), e2 = 1 / 512, t2 = 16 / 512, r2 = new at({
        id: "prophoto",
        name: "ProPhoto",
        base: gd,
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r < t2 ? r / 16 : Math.pow(r, 1.8);
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r >= e2 ? Math.pow(r, 1 / 1.8) : 16 * r;
          });
        }, "fromBase"),
        formats: {
          color: {
            id: "prophoto-rgb"
          }
        }
      }), a2 = new te({
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
        base: Tn,
        fromBase: /* @__PURE__ */ o(function(t) {
          var r = H(t, 3), a = r[0], n = r[1], i = r[2], u, l = 2e-4;
          return Math.abs(n) < l && Math.abs(i) < l ? u = NaN : u = Math.atan2(i, n) * 180 / Math.PI, [a, Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)), bn(u)];
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
      }), bd = 203, yd = 2610 / Math.pow(2, 14), n2 = Math.pow(2, 14) / 2610, i2 = 2523 / Math.pow(2, 5), wd = Math.pow(2, 5) / 2523, Dd = 3424 / Math.pow(2, 12), _d = 2413 / Math.pow(2, 7), xd = 2392 / Math.pow(2, 7), o2 = new at({
        id: "rec2100pq",
        name: "REC.2100-PQ",
        base: Dn,
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            var a = Math.pow(Math.max(Math.pow(r, wd) - Dd, 0) / (_d - xd * Math.pow(r, wd)), n2);
            return a * 1e4 / bd;
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            var a = Math.max(r * bd / 1e4, 0), n = Dd + _d * Math.pow(a, yd), i = 1 + xd * Math.pow(a, yd);
            return Math.pow(n / i, i2);
          });
        }, "fromBase"),
        formats: {
          color: {
            id: "rec2100-pq"
          }
        }
      }), Ed = 0.17883277, Cd = 0.28466892, Ad = 0.55991073, Fo = 3.7743, u2 = new at({
        id: "rec2100hlg",
        cssid: "rec2100-hlg",
        name: "REC.2100-HLG",
        referred: "scene",
        base: Dn,
        toBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r <= 0.5 ? Math.pow(r, 2) / 3 * Fo : Math.exp((r - Ad) / Ed + Cd) / 12 * Fo;
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r /= Fo, r <= 1 / 12 ? Math.sqrt(3 * r) : Ed * Math.log(12 * r - Cd) + Ad;
          });
        }, "fromBase"),
        formats: {
          color: {
            id: "rec2100-hlg"
          }
        }
      }), Fd = {};
      Gt.add("chromatic-adaptation-start", function(e) {
        e.options.method && (e.M = Td(e.W1, e.W2, e.options.method));
      }), Gt.add("chromatic-adaptation-end", function(e) {
        e.M || (e.M = Td(e.W1, e.W2, e.options.method));
      });
      function Rn(e) {
        var t = e.id;
        e.toCone_M, e.fromCone_M, Fd[t] = arguments[0];
      }
      o(Rn, "defineCAT");
      function Td(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Bradford", a = Fd[r], n = Ie(a.toCone_M, e), i = H(n, 3), u = i[0], l = i[1], s = i[2], c = Ie(a.toCone_M, t), d = H(c, 3), f = d[0], p = d[1], m = d[2], h = [[f / u, 0, 0], [0, p / l, 0], [0, 0, m / s]], v = Ie(h, a.toCone_M), y = Ie(a.fromCone_M, v);
        return y;
      }
      o(Td, "adapt"), Rn({
        id: "von Kries",
        toCone_M: [[0.40024, 0.7076, -0.08081], [-0.2263, 1.16532, 0.0457], [0, 0, 0.91822]],
        fromCone_M: [[1.8599364, -1.1293816, 0.2198974], [0.3611914, 0.6388125, -64e-7], [0, 0, 1.0890636]]
      }), Rn({
        id: "Bradford",
        toCone_M: [[0.8951, 0.2664, -0.1614], [-0.7502, 1.7135, 0.0367], [0.0389, -0.0685, 1.0296]],
        fromCone_M: [[0.9869929, -0.1470543, 0.1599627], [0.4323053, 0.5183603, 0.0492912], [-85287e-7, 0.0400428, 0.9684867]]
      }), Rn({
        id: "CAT02",
        toCone_M: [[0.7328, 0.4296, -0.1624], [-0.7036, 1.6975, 61e-4], [3e-3, 0.0136, 0.9834]],
        fromCone_M: [[1.0961238, -0.278869, 0.1827452], [0.454369, 0.4735332, 0.0720978], [-96276e-7, -5698e-6, 1.0153256]]
      }), Rn({
        id: "CAT16",
        toCone_M: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]],
        fromCone_M: [[1.862067855087233, -1.011254630531685, 0.1491867754444518], [0.3875265432361372, 0.6214474419314753, -0.008973985167612518], [-0.01584149884933386, -0.03412293802851557, 1.04996443687785]]
      }), Object.assign(_t, {
        A: [1.0985, 1, 0.35585],
        C: [0.98074, 1, 1.18232],
        D55: [0.95682, 1, 0.92149],
        D75: [0.94972, 1, 1.22638],
        E: [1, 1, 1],
        F2: [0.99186, 1, 0.67393],
        F7: [0.95041, 1, 1.08747],
        F11: [1.00962, 1, 0.6435]
      }), _t.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
      var l2 = [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]], s2 = [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]], Rd = new at({
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
        white: _t.ACES,
        toXYZ_M: l2,
        fromXYZ_M: s2,
        formats: {
          color: {}
        }
      }), kn = Math.pow(2, -16), To = -0.35828683, Sn = (Math.log2(65504) + 9.72) / 17.52, c2 = new at({
        id: "acescc",
        name: "ACEScc",
        coords: {
          r: {
            range: [To, Sn],
            name: "Red"
          },
          g: {
            range: [To, Sn],
            name: "Green"
          },
          b: {
            range: [To, Sn],
            name: "Blue"
          }
        },
        referred: "scene",
        base: Rd,
        toBase: /* @__PURE__ */ o(function(t) {
          var r = -0.3013698630136986;
          return t.map(function(a) {
            return a <= r ? (Math.pow(2, a * 17.52 - 9.72) - kn) * 2 : a < Sn ? Math.pow(2, a * 17.52 - 9.72) : 65504;
          });
        }, "toBase"),
        fromBase: /* @__PURE__ */ o(function(t) {
          return t.map(function(r) {
            return r <= 0 ? (Math.log2(kn) + 9.72) / 17.52 : r < kn ? (Math.log2(kn + r * 0.5) + 9.72) / 17.52 : (Math.log2(r) + 9.72) / 17.52;
          });
        }, "fromBase"),
        formats: {
          color: {}
        }
      }), kd = Object.freeze({
        __proto__: null,
        XYZ_D65: mt,
        XYZ_D50: po,
        XYZ_ABS_D65: Do,
        Lab_D65: yo,
        Lab: lt,
        LCH: pa,
        sRGB_Linear: qc,
        sRGB: va,
        HSL: md,
        HWB: Y0,
        HSV: hd,
        P3_Linear: Bc,
        P3: Hc,
        A98RGB_Linear: vd,
        A98RGB: Z0,
        ProPhoto_Linear: gd,
        ProPhoto: r2,
        REC_2020_Linear: Dn,
        REC_2020: Lc,
        OKLab: Tn,
        OKLCH: a2,
        Jzazbz: od,
        JzCzHz: xo,
        ICTCP: Eo,
        REC_2100_PQ: o2,
        REC_2100_HLG: u2,
        ACEScg: Rd,
        ACEScc: c2
      }), st = (Z = /* @__PURE__ */ new WeakMap(), function() {
        function e() {
          var t = this;
          xt(this, e), Eu(this, Z, {
            writable: !0,
            value: void 0
          });
          for (var r, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
            n[i] = arguments[i];
          n.length === 1 && (r = ye(n[0]));
          var u, l, s;
          r ? (u = r.space || r.spaceId, l = r.coords, s = r.alpha) : (u = n[0], l = n[1], s = n[2]), Fu(this, Z, te.get(u)), this.coords = l ? l.slice() : [0, 0, 0], this.alpha = s < 1 ? s : 1;
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
          for (var f in $r(this, Z).coords)
            d(f);
        }
        return o(e, "Color"), Et(e, [{
          key: "space",
          get: /* @__PURE__ */ o(function() {
            return $r(this, Z);
          }, "get")
        }, {
          key: "spaceId",
          get: /* @__PURE__ */ o(function() {
            return $r(this, Z).id;
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
            var i = Xy.apply(void 0, [this].concat(a));
            return i.color = new e(i.color), i;
          }, "display")
        }], [{
          key: "get",
          value: /* @__PURE__ */ o(function(r) {
            if (r instanceof e)
              return r;
            for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
              n[i - 1] = arguments[i];
            return Aa(e, [r].concat(n));
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
        getAll: fa,
        set: Wt,
        setAll: Oc,
        to: vt,
        equals: Ky,
        inGamut: ma,
        toGamut: Yt,
        distance: Uc,
        toString: wn
      }), Object.assign(st, {
        util: Oy,
        hooks: Gt,
        WHITES: _t,
        Space: te,
        spaces: te.registry,
        parse: Sc,
        defaults: kt
      });
      for (var Ro = 0, Sd = Object.keys(kd); Ro < Sd.length; Ro++) {
        var d2 = Sd[Ro];
        te.register(kd[d2]);
      }
      for (var Od in te.registry)
        ko(Od, te.registry[Od]);
      Gt.add("colorspace-init-end", function(e) {
        var t;
        ko(e.id, e), (t = e.aliases) === null || t === void 0 || t.forEach(function(r) {
          ko(r, e);
        });
      });
      function ko(e, t) {
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
      o(ko, "addSpaceAccessors"), st.extend(Co), st.extend({
        deltaE: ga
      }), st.extend(U0), st.extend({
        contrast: v0
      }), st.extend(b0), st.extend(Jy), st.extend(W0), st.extend(En), Cc.default.templateSettings.strip = !1;
      var f2 = /^#[0-9a-f]{3,8}$/i, p2 = /hsl\(\s*([\d.]+)(rad|turn)/, m2 = function() {
        function e(t, r, a) {
          var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
          xt(this, e), this.red = t, this.green = r, this.blue = a, this.alpha = n;
        }
        return o(e, "Color2"), Et(e, [{
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
            r = r.replace(p2, function(n, i, u) {
              var l = i + u;
              switch (u) {
                case "rad":
                  return n.replace(l, h2(i));
                case "turn":
                  return n.replace(l, v2(i));
              }
            });
            try {
              var a = new st(r).to("srgb");
              this.red = Math.round(So(a.r, 0, 1) * 255), this.green = Math.round(So(a.g, 0, 1) * 255), this.blue = Math.round(So(a.b, 0, 1) * 255), this.alpha = +a.alpha;
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
            !r.match(f2) || [6, 8].includes(r.length) || this.parseString(r);
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
      }(), Oe = m2;
      function So(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      o(So, "clamp");
      function h2(e) {
        return e * 180 / Math.PI;
      }
      o(h2, "radToDeg");
      function v2(e) {
        return e * 360;
      }
      o(v2, "turnToDeg");
      function g2(e) {
        var t = new Oe();
        if (t.parseString(e.getPropertyValue("background-color")), t.alpha !== 0) {
          var r = e.getPropertyValue("opacity");
          t.alpha = t.alpha * r;
        }
        return t;
      }
      o(g2, "getOwnBackgroundColor");
      var br = g2;
      function b2(e) {
        var t = D.getComputedStyle(e);
        return pn(e, t) || br(t).alpha === 1;
      }
      o(b2, "isOpaque");
      var y2 = b2;
      function Oo(e) {
        if (!e.href)
          return !1;
        var t = le.get("firstPageLink", w2);
        return t ? e.compareDocumentPosition(t.actualNode) === e.DOCUMENT_POSITION_FOLLOWING : !0;
      }
      o(Oo, "_isSkipLink");
      function w2() {
        var e;
        return D.location.origin ? e = dt(w._tree, 'a[href]:not([href^="javascript:"])').find(function(t) {
          return !ji(t.actualNode);
        }) : e = dt(w._tree, 'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0], e || null;
      }
      o(w2, "generateFirstPageLink");
      var D2 = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, _2 = /(\w+)\((\d+)/;
      function x2(e) {
        var t = e.getPropertyValue("clip").match(D2), r = e.getPropertyValue("clip-path").match(_2);
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
      o(x2, "isClipped");
      function E2(e, t, r) {
        var a = Rr(e, "map");
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
          return On(s, t, r);
        });
      }
      o(E2, "isAreaVisible");
      function On(e, t, r) {
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
          return p && (m = On(p, t, !0)), n && (n[i] = m), m;
        }
        var h = D.getComputedStyle(e, null);
        if (h === null)
          return !1;
        if (d === "area")
          return E2(e, t, r);
        if (h.getPropertyValue("display") === "none")
          return !1;
        var v = parseInt(h.getPropertyValue("height")), y = parseInt(h.getPropertyValue("width")), g = Bt(e), b = g && v === 0, _ = g && y === 0, x = h.getPropertyValue("position") === "absolute" && (v < 2 || y < 2) && h.getPropertyValue("overflow") === "hidden";
        if (!t && (x2(h) || h.getPropertyValue("opacity") === "0" || b || _ || x) || !r && (h.getPropertyValue("visibility") === "hidden" || !t && Ja(e)))
          return !1;
        var T = e.assignedSlot ? e.assignedSlot : e.parentNode, k = !1;
        return T && (k = On(T, t, !0)), n && (n[i] = k), k;
      }
      o(On, "isVisible");
      var C2 = On;
      function A2(e, t) {
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
      o(A2, "reduceToElementsBelowFloating");
      var Md = A2;
      function Nd(e, t) {
        var r = Id(t);
        do {
          var a = Id(e);
          if (a === r || a === t)
            return F2(e, t);
          e = a;
        } while (e);
        return !1;
      }
      o(Nd, "_visuallyContains");
      function Id(e) {
        for (var t = se(e), r = t.parent; r; ) {
          if (Bt(r.actualNode))
            return r.actualNode;
          r = r.parent;
        }
      }
      o(Id, "getScrollAncestor");
      function F2(e, t) {
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
      o(F2, "contains2");
      function Pd(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : N, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        if (a > 999)
          throw new Error("Infinite loop detected");
        return Array.from(r.elementsFromPoint(e, t) || []).filter(function(n) {
          return Ye(n) === r;
        }).reduce(function(n, i) {
          if (Xa(i)) {
            var u = Pd(e, t, i.shadowRoot, a + 1);
            n = n.concat(u), n.length && Nd(n[0], i) && n.push(i);
          } else
            n.push(i);
          return n;
        }, []);
      }
      o(Pd, "shadowElementsFromPoint");
      var T2 = Pd;
      function R2(e, t) {
        if (!!e.hasAttribute(t)) {
          var r = e.nodeName.toUpperCase(), a = e;
          (!["A", "AREA"].includes(r) || e.ownerSVGElement) && (a = N.createElement("a"), a.href = e.getAttribute(t));
          var n = ["https:", "ftps:"].includes(a.protocol) ? a.protocol.replace(/s:$/, ":") : a.protocol, i = /^\//.test(a.pathname) ? a.pathname : "/".concat(a.pathname), u = S2(i), l = u.pathname, s = u.filename;
          return {
            protocol: n,
            hostname: a.hostname,
            port: k2(a.port),
            pathname: /\/$/.test(l) ? l : "".concat(l, "/"),
            search: O2(a.search),
            hash: M2(a.hash),
            filename: s
          };
        }
      }
      o(R2, "urlPropsFromAttribute");
      function k2(e) {
        var t = ["443", "80"];
        return t.includes(e) ? "" : e;
      }
      o(k2, "getPort");
      function S2(e) {
        var t = e.split("/").pop();
        return !t || t.indexOf(".") === -1 ? {
          pathname: e,
          filename: ""
        } : {
          pathname: e.replace(t, ""),
          filename: /index./.test(t) ? "" : t
        };
      }
      o(S2, "getPathnameOrFilename");
      function O2(e) {
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
      o(O2, "getSearchPairs");
      function M2(e) {
        if (!e)
          return "";
        var t = /#!?\/?/g, r = e.match(t);
        if (!r)
          return "";
        var a = H(r, 1), n = a[0];
        return n === "#" ? "" : e;
      }
      o(M2, "getHashRoute");
      var N2 = R2;
      function I2(e, t) {
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
      o(I2, "visuallyOverlaps");
      var Mo = I2, Ld = 0, P2 = function(e) {
        Zn(r, e);
        var t = Jn(r);
        function r(a, n, i) {
          var u;
          if (xt(this, r), u = t.call(this), u.shadowId = i, u.children = [], u.actualNode = a, u.parent = n, n || (Ld = 0), u.nodeIndex = Ld++, u._isHidden = null, u._cache = {}, u._isXHTML = qa(a.ownerDocument), a.nodeName.toLowerCase() === "input") {
            var l = a.getAttribute("type");
            l = u._isXHTML ? l : (l || "").toLowerCase(), Bn().includes(l) || (l = "text"), u._type = l;
          }
          return le.get("nodeMap") && le.get("nodeMap").set(a, _u(u)), u;
        }
        return o(r, "VirtualNode"), Et(r, [{
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
            return this._cache.hasOwnProperty("tabbableElements") || (this._cache.tabbableElements = Fs(this)), this._cache.tabbableElements;
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
      }(He), No = P2;
      function L2(e) {
        return (e || "").trim().replace(/\s{2,}/g, " ").split(" ");
      }
      o(L2, "tokenList");
      var Xe = L2, yr = " [idsMap]";
      function Bd(e, t, r) {
        var a = e[0]._selectorMap;
        if (!!a) {
          for (var n = e[0].shadowId, i = 0; i < t.length; i++)
            if (t[i].length > 1 && t[i].some(function(s) {
              return qd(s);
            }))
              return;
          var u = /* @__PURE__ */ new Set();
          t.forEach(function(s) {
            var c, d = B2(s, a, n);
            d == null || (c = d.nodes) === null || c === void 0 || c.forEach(function(f) {
              d.isComplexSelector && !Er(f, s) || u.add(f);
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
      o(Bd, "getNodesMatchingExpression");
      function B2(e, t, r) {
        var a = e[e.length - 1], n = null, i = e.length > 1 || !!a.pseudos || !!a.classes;
        if (qd(a))
          n = t["*"];
        else {
          if (a.id) {
            var u;
            if (!t[yr] || !Object.hasOwn(t[yr], a.id) || !((u = t[yr][a.id]) !== null && u !== void 0 && u.length))
              return;
            n = t[yr][a.id].filter(function(v) {
              return v.shadowId === r;
            });
          }
          if (a.tag && a.tag !== "*") {
            var l;
            if (!((l = t[a.tag]) !== null && l !== void 0 && l.length))
              return;
            var s = t[a.tag];
            n = n ? Io(s, n) : s;
          }
          if (a.classes) {
            var c;
            if (!((c = t["[class]"]) !== null && c !== void 0 && c.length))
              return;
            var d = t["[class]"];
            n = n ? Io(d, n) : d;
          }
          if (a.attributes)
            for (var f = 0; f < a.attributes.length; f++) {
              var p, m = a.attributes[f];
              if (m.type === "attrValue" && (i = !0), !((p = t["[".concat(m.key, "]")]) !== null && p !== void 0 && p.length))
                return;
              var h = t["[".concat(m.key, "]")];
              n = n ? Io(h, n) : h;
            }
        }
        return {
          nodes: n,
          isComplexSelector: i
        };
      }
      o(B2, "findMatchingNodes");
      function qd(e) {
        return e.tag === "*" && !e.attributes && !e.id && !e.classes;
      }
      o(qd, "isGlobalSelector");
      function Io(e, t) {
        return e.filter(function(r) {
          return t.includes(r);
        });
      }
      o(Io, "getSharedValues");
      function Mn(e, t, r) {
        Object.hasOwn(r, e) || (r[e] = []), r[e].push(t);
      }
      o(Mn, "cacheSelector");
      function jd(e, t) {
        e.props.nodeType === 1 && (Mn(e.props.nodeName, e, t), Mn("*", e, t), e.attrNames.forEach(function(r) {
          r === "id" && (t[yr] = t[yr] || {}, Xe(e.attr(r)).forEach(function(a) {
            Mn(a, e, t[yr]);
          })), Mn("[".concat(r, "]"), e, t);
        }));
      }
      o(jd, "cacheNodeSelectors");
      var Po;
      function Lo() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N.documentElement, t = arguments.length > 1 ? arguments[1] : void 0;
        Po = !1;
        var r = {};
        le.set("nodeMap", /* @__PURE__ */ new WeakMap()), le.set("selectorMap", r);
        var a = zd(e, t, null);
        return a[0]._selectorMap = r, a[0]._hasShadowRoot = Po, a;
      }
      o(Lo, "_getFlattenedTree");
      function q2(e) {
        var t = [];
        for (e = e.firstChild; e; )
          t.push(e), e = e.nextSibling;
        return t;
      }
      o(q2, "getSlotChildren");
      function Bo(e, t, r) {
        var a = new No(e, t, r);
        return jd(a, le.get("selectorMap")), a;
      }
      o(Bo, "createNode");
      function zd(e, t, r) {
        var a, n, i;
        function u(l, s, c) {
          var d = zd(s, t, c);
          return d && (l = l.concat(d)), l;
        }
        return o(u, "reduceShadowDOM"), e.documentElement && (e = e.documentElement), i = e.nodeName.toLowerCase(), Xa(e) ? (Po = !0, a = Bo(e, r, t), t = "a" + Math.random().toString().substring(2), n = Array.from(e.shadowRoot.childNodes), a.children = n.reduce(function(l, s) {
          return u(l, s, a);
        }, []), [a]) : i === "content" && typeof e.getDistributedNodes == "function" ? (n = Array.from(e.getDistributedNodes()), n.reduce(function(l, s) {
          return u(l, s, r);
        }, [])) : i === "slot" && typeof e.assignedNodes == "function" ? (n = Array.from(e.assignedNodes()), n.length || (n = q2(e)), D.getComputedStyle(e), n.reduce(function(l, s) {
          return u(l, s, r);
        }, [])) : e.nodeType === 1 ? (a = Bo(e, r, t), n = Array.from(e.childNodes), a.children = n.reduce(function(l, s) {
          return u(l, s, a);
        }, []), [a]) : e.nodeType === 3 ? [Bo(e, r)] : void 0;
      }
      o(zd, "flattenTree");
      function j2(e) {
        return e ? e.trim().split("-")[0].toLowerCase() : "";
      }
      o(j2, "getBaseLang");
      var wr = j2;
      function z2(e) {
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
      o(z2, "failureSummary");
      var qo = z2;
      function jo() {
        var e = w._audit.data.incompleteFallbackMessage;
        return typeof e == "function" && (e = e()), typeof e != "string" ? "" : e;
      }
      o(jo, "incompleteFallbackMessage");
      var Vd = ce.resultGroups;
      function ya(e, t) {
        var r = w.utils.aggregateResult(e);
        return Vd.forEach(function(a) {
          t.resultTypes && !t.resultTypes.includes(a) && (r[a] || []).forEach(function(n) {
            Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = [n.nodes[0]]);
          }), r[a] = (r[a] || []).map(function(n) {
            return n = Object.assign({}, n), Array.isArray(n.nodes) && n.nodes.length > 0 && (n.nodes = n.nodes.map(function(i) {
              if (S(i.node) === "object") {
                var u = Hd(i.node, t);
                Object.assign(i, u);
              }
              return delete i.result, delete i.node, V2(i, t), i;
            })), Vd.forEach(function(i) {
              return delete n[i];
            }), delete n.pageLevel, delete n.result, n;
          });
        }), r;
      }
      o(ya, "processAggregate");
      function V2(e, t) {
        ["any", "all", "none"].forEach(function(r) {
          !Array.isArray(e[r]) || e[r].filter(function(a) {
            return Array.isArray(a.relatedNodes);
          }).forEach(function(a) {
            a.relatedNodes = a.relatedNodes.map(function(n) {
              return Hd(n, t);
            });
          });
        });
      }
      o(V2, "normalizeRelatedNodes");
      function Hd() {
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
      o(Hd, "trimElementSpec");
      var H2 = /\$\{\s?data\s?\}/g;
      function Nn(e, t) {
        if (typeof t == "string")
          return e.replace(H2, t);
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var a = new RegExp("\\${\\s?data\\." + r + "\\s?}", "g"), n = typeof t[r] > "u" ? "" : String(t[r]);
            e = e.replace(a, n);
          }
        return e;
      }
      o(Nn, "substitute");
      function $d(e, t) {
        if (!!e) {
          if (Array.isArray(t)) {
            if (t.values = t.join(", "), typeof e.singular == "string" && typeof e.plural == "string") {
              var r = t.length === 1 ? e.singular : e.plural;
              return Nn(r, t);
            }
            return Nn(e, t);
          }
          if (typeof e == "string")
            return Nn(e, t);
          if (typeof t == "string") {
            var a = e[t];
            return Nn(a, t);
          }
          var n = e.default || jo();
          return t && t.messageKey && e[t.messageKey] && (n = e[t.messageKey]), $d(n, t);
        }
      }
      o($d, "processMessage");
      var zo = $d;
      function $2(e, t, r) {
        var a = w._audit.data.checks[e];
        if (!a)
          throw new Error("Cannot get message for unknown check: ".concat(e, "."));
        if (!a.messages[t])
          throw new Error('Check "'.concat(e, '"" does not have a "').concat(t, '" message.'));
        return zo(a.messages[t], r);
      }
      o($2, "getCheckMessage");
      var U2 = $2;
      function G2(e, t, r) {
        var a = ((r.rules && r.rules[t] || {}).checks || {})[e.id], n = (r.checks || {})[e.id], i = e.enabled, u = e.options;
        return n && (n.hasOwnProperty("enabled") && (i = n.enabled), n.hasOwnProperty("options") && (u = n.options)), a && (a.hasOwnProperty("enabled") && (i = a.enabled), a.hasOwnProperty("options") && (u = a.options)), {
          enabled: i,
          options: u,
          absolutePaths: r.absolutePaths
        };
      }
      o(G2, "getCheckOption");
      var In = G2;
      function Kt() {
        var e, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : D;
        return t && S(t) === "object" ? t : S(r) !== "object" ? {} : {
          testEngine: {
            name: "axe-core",
            version: w.version
          },
          testRunner: {
            name: w._audit.brand
          },
          testEnvironment: W2(r),
          timestamp: new Date().toISOString(),
          url: (e = r.location) === null || e === void 0 ? void 0 : e.href
        };
      }
      o(Kt, "_getEnvironmentData");
      function W2(e) {
        if (!e.navigator || S(e.navigator) !== "object")
          return {};
        var t = e.navigator, r = e.innerHeight, a = e.innerWidth, n = Y2(e) || {}, i = n.angle, u = n.type;
        return {
          userAgent: t.userAgent,
          windowWidth: a,
          windowHeight: r,
          orientationAngle: i,
          orientationType: u
        };
      }
      o(W2, "getTestEnvironment");
      function Y2(e) {
        var t = e.screen;
        return t.orientation || t.msOrientation || t.mozOrientation;
      }
      o(Y2, "getOrientation");
      function Ud(e, t) {
        var r = t.focusable, a = t.page;
        return {
          node: e,
          include: [],
          exclude: [],
          initiator: !1,
          focusable: r && X2(e),
          size: K2(e),
          page: a
        };
      }
      o(Ud, "createFrameContext");
      function X2(e) {
        var t = e.getAttribute("tabindex");
        if (!t)
          return !0;
        var r = parseInt(t, 10);
        return isNaN(r) || r >= 0;
      }
      o(X2, "frameFocusable");
      function K2(e) {
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
      o(K2, "getBoundingSize");
      function Z2(e) {
        if (Wd(e)) {
          var t = " must be used inside include or exclude. It should not be on the same object.";
          Zt(!Lt(e, "fromFrames"), "fromFrames" + t), Zt(!Lt(e, "fromShadowDom"), "fromShadowDom" + t);
        } else if (Vo(e))
          e = {
            include: e,
            exclude: []
          };
        else
          return {
            include: [N],
            exclude: []
          };
        var r = Gd(e.include);
        r.length === 0 && r.push(N);
        var a = Gd(e.exclude);
        return {
          include: r,
          exclude: a
        };
      }
      o(Z2, "normalizeContext");
      function J2(e) {
        return Wd(e) || Vo(e);
      }
      o(J2, "isContextSpec");
      function Gd() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [];
        Xd(e) || (e = [e]);
        for (var r = 0; r < e.length; r++) {
          var a = Q2(e[r]);
          a && t.push(a);
        }
        return t;
      }
      o(Gd, "normalizeContextList");
      function Q2(e) {
        return e instanceof D.Node ? e : typeof e == "string" ? [e] : (Yd(e) ? (tw(e), e = e.fromFrames) : Ho(e) && (e = [e]), ew(e));
      }
      o(Q2, "normalizeContextSelector");
      function ew(e) {
        if (!!Array.isArray(e)) {
          var t = [], r = Fe(e), a;
          try {
            for (r.s(); !(a = r.n()).done; ) {
              var n = a.value;
              if (Ho(n) && (rw(n), n = n.fromShadowDom), typeof n != "string" && !aw(n))
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
      o(ew, "normalizeFrameSelectors");
      function Wd(e) {
        return ["include", "exclude"].some(function(t) {
          return Lt(e, t) && Vo(e[t]);
        });
      }
      o(Wd, "isContextObject");
      function Vo(e) {
        return typeof e == "string" || e instanceof D.Node || Yd(e) || Ho(e) || Xd(e);
      }
      o(Vo, "isContextProp");
      function Yd(e) {
        return Lt(e, "fromFrames");
      }
      o(Yd, "isLabelledFramesSelector");
      function Ho(e) {
        return Lt(e, "fromShadowDom");
      }
      o(Ho, "isLabelledShadowDomSelector");
      function tw(e) {
        Zt(Array.isArray(e.fromFrames), "fromFrames property must be an array"), Zt(e.fromFrames.every(function(t) {
          return !Lt(t, "fromFrames");
        }), "Invalid context; fromFrames selector must be appended, rather than nested"), Zt(!Lt(e, "fromShadowDom"), "fromFrames and fromShadowDom cannot be used on the same object");
      }
      o(tw, "assertLabelledFrameSelector");
      function rw(e) {
        Zt(Array.isArray(e.fromShadowDom), "fromShadowDom property must be an array"), Zt(e.fromShadowDom.every(function(t) {
          return !Lt(t, "fromFrames");
        }), "shadow selector must be inside fromFrame instead"), Zt(e.fromShadowDom.every(function(t) {
          return !Lt(t, "fromShadowDom");
        }), "fromShadowDom selector must be appended, rather than nested");
      }
      o(rw, "assertLabelledShadowDomSelector");
      function aw(e) {
        return Array.isArray(e) && e.every(function(t) {
          return typeof t == "string";
        });
      }
      o(aw, "isShadowSelector");
      function Xd(e) {
        return e && S(e) === "object" && typeof e.length == "number" && !(e instanceof D.Node);
      }
      o(Xd, "isArrayLike");
      function Zt(e, t) {
        he(e, "Invalid context; ".concat(t, `
See: https://github.com/dequelabs/axe-core/blob/master/doc/context.md`));
      }
      o(Zt, "assert2");
      function Lt(e, t) {
        return !e || S(e) !== "object" ? !1 : Object.prototype.hasOwnProperty.call(e, t);
      }
      o(Lt, "objectHasOwn");
      function Kd(e, t) {
        for (var r = [], a = 0, n = e[t].length; a < n; a++) {
          var i = e[t][a];
          if (i instanceof D.Node)
            i.documentElement instanceof D.Node ? r.push(e.flatTree[0]) : r.push(se(i));
          else if (i && i.length)
            if (i.length > 1)
              nw(e, t, i);
            else {
              var u = Zo(i[0]);
              r.push.apply(r, ae(u.map(function(l) {
                return se(l);
              })));
            }
        }
        return r.filter(function(l) {
          return l;
        });
      }
      o(Kd, "parseSelectorArray");
      function nw(e, t, r) {
        e.frames = e.frames || [];
        var a = r.shift(), n = Zo(a);
        n.forEach(function(i) {
          var u = e.frames.find(function(l) {
            return l.node === i;
          });
          u || (u = Ud(i, e), e.frames.push(u)), u[t].push(r);
        });
      }
      o(nw, "pushUniqueFrameSelector");
      function Pn(e, t) {
        var r, a, n, i, u = this;
        e = It(e), this.frames = [], this.page = typeof ((r = e) === null || r === void 0 ? void 0 : r.page) == "boolean" ? e.page : void 0, this.initiator = typeof ((a = e) === null || a === void 0 ? void 0 : a.initiator) == "boolean" ? e.initiator : !0, this.focusable = typeof ((n = e) === null || n === void 0 ? void 0 : n.focusable) == "boolean" ? e.focusable : !0, this.size = S((i = e) === null || i === void 0 ? void 0 : i.size) === "object" ? e.size : {}, e = Z2(e), this.flatTree = t ?? Lo(lw(e)), this.exclude = e.exclude, this.include = e.include, this.include = Kd(this, "include"), this.exclude = Kd(this, "exclude"), Ko("frame, iframe", this).forEach(function(l) {
          Uo(l, u) && iw(u, l.actualNode);
        }), typeof this.page > "u" && (this.page = ow(this), this.frames.forEach(function(l) {
          l.page = u.page;
        })), uw(this), Array.isArray(this.include) || (this.include = Array.from(this.include)), this.include.sort(Wo);
      }
      o(Pn, "Context");
      function iw(e, t) {
        !Te(t) || ea(e.frames, "node", t) || e.frames.push(Ud(t, e));
      }
      o(iw, "pushUniqueFrame");
      function ow(e) {
        var t = e.include;
        return t.length === 1 && t[0].actualNode === N.documentElement;
      }
      o(ow, "isPageContext");
      function uw(e) {
        if (e.include.length === 0 && e.frames.length === 0) {
          var t = wt.isInFrame() ? "frame" : "page";
          throw new Error("No elements found for include in " + t + " Context");
        }
      }
      o(uw, "validateContext");
      function lw(e) {
        for (var t = e.include, r = e.exclude, a = Array.from(t).concat(Array.from(r)), n = 0; n < a.length; n++) {
          var i = a[n];
          if (i instanceof D.Element)
            return i.ownerDocument.documentElement;
          if (i instanceof D.Document)
            return i.documentElement;
        }
        return N.documentElement;
      }
      o(lw, "getRootNode2");
      function sw(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t.iframes === !1)
          return [];
        var r = new Pn(e), a = r.frames;
        return a.map(function(n) {
          var i = n.node, u = Le(n, tp);
          u.initiator = !1;
          var l = za(i);
          return {
            frameSelector: l,
            frameContext: u
          };
        });
      }
      o(sw, "_getFrameContexts");
      function Zd(e) {
        var t = w._audit.rules.find(function(r) {
          var a = r.id;
          return a === e;
        });
        if (!t)
          throw new Error("Cannot find rule by id: ".concat(e));
        return t;
      }
      o(Zd, "_getRule");
      function cw(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = e.scrollWidth > e.clientWidth + t, a = e.scrollHeight > e.clientHeight + t;
        if (!!(r || a)) {
          var n = D.getComputedStyle(e), i = Jd(n, "overflow-x"), u = Jd(n, "overflow-y");
          if (r && i || a && u)
            return {
              elm: e,
              top: e.scrollTop,
              left: e.scrollLeft
            };
        }
      }
      o(cw, "getScroll");
      function Jd(e, t) {
        var r = e.getPropertyValue(t);
        return ["scroll", "auto"].includes(r);
      }
      o(Jd, "isScrollable");
      var Bt = Be(cw);
      function Qd(e) {
        return Array.from(e.children || e.childNodes || []).reduce(function(t, r) {
          var a = Bt(r);
          return a && t.push(a), t.concat(Qd(r));
        }, []);
      }
      o(Qd, "getElmScrollRecursive");
      function dw() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : D, t = e.document.documentElement, r = [e.pageXOffset !== void 0 ? {
          elm: e,
          top: e.pageYOffset,
          left: e.pageXOffset
        } : {
          elm: t,
          top: t.scrollTop,
          left: t.scrollLeft
        }];
        return r.concat(Qd(N.body));
      }
      o(dw, "getScrollState");
      var fw = dw;
      function pw() {
        return It(ve);
      }
      o(pw, "_getStandards");
      function mw(e) {
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
      o(mw, "getStyleSheetFactory");
      var e1 = mw, ct;
      function hw(e) {
        if (ct && ct.parentNode)
          return ct.styleSheet === void 0 ? ct.appendChild(N.createTextNode(e)) : ct.styleSheet.cssText += e, ct;
        if (!!e) {
          var t = N.head || N.getElementsByTagName("head")[0];
          return ct = N.createElement("style"), ct.type = "text/css", ct.styleSheet === void 0 ? ct.appendChild(N.createTextNode(e)) : ct.styleSheet.cssText = e, t.appendChild(ct), ct;
        }
      }
      o(hw, "injectStyle");
      var vw = hw;
      function t1(e, t) {
        var r = se(e);
        if (e.nodeType === 9)
          return !1;
        if (e.nodeType === 11 && (e = e.host), r && r._isHidden !== null)
          return r._isHidden;
        var a = D.getComputedStyle(e, null);
        if (!a || !e.parentNode || a.getPropertyValue("display") === "none" || !t && a.getPropertyValue("visibility") === "hidden" || e.getAttribute("aria-hidden") === "true")
          return !0;
        var n = e.assignedSlot ? e.assignedSlot : e.parentNode, i = t1(n, !0);
        return r && (r._isHidden = i), i;
      }
      o(t1, "isHidden");
      var gw = t1;
      function bw(e) {
        var t, r, a = (t = (r = e.props) === null || r === void 0 ? void 0 : r.nodeName) !== null && t !== void 0 ? t : e.nodeName.toLowerCase();
        return e.namespaceURI === "http://www.w3.org/2000/svg" ? !1 : !!ve.htmlElms[a];
      }
      o(bw, "isHtmlElement");
      var $o = bw;
      function Uo(e, t) {
        var r = t.include, a = r === void 0 ? [] : r, n = t.exclude, i = n === void 0 ? [] : n, u = a.filter(function(d) {
          return cr(d, e);
        });
        if (u.length === 0)
          return !1;
        var l = i.filter(function(d) {
          return cr(d, e);
        });
        if (l.length === 0)
          return !0;
        var s = r1(u), c = r1(l);
        return cr(c, s);
      }
      o(Uo, "_isNodeInContext");
      function r1(e) {
        var t, r = Fe(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value;
            (!t || !cr(n, t)) && (t = n);
          }
        } catch (i) {
          r.e(i);
        } finally {
          r.f();
        }
        return t;
      }
      o(r1, "getDeepest");
      function Go(e, t) {
        return e.length !== t.length ? !1 : e.every(function(r, a) {
          var n = t[a];
          return Array.isArray(r) ? r.length !== n.length ? !1 : r.every(function(i, u) {
            return n[u] === i;
          }) : r === n;
        });
      }
      o(Go, "_matchAncestry");
      function yw(e, t) {
        return e = e.actualNode || e, t = t.actualNode || t, e === t ? 0 : e.compareDocumentPosition(t) & 4 ? -1 : 1;
      }
      o(yw, "nodeSorter");
      var Wo = yw;
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
      function ww(e, t, r, a) {
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
          return Xo(d, t, p, a, m);
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
      o(ww, "parseSameOriginStylesheet");
      var a1 = ww;
      function Dw(e, t, r, a) {
        var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, i = _w(e);
        return i ? a1(e, t, r, a, n) : Xo(e.href, t, r, a, !0);
      }
      o(Dw, "parseStylesheet");
      function _w(e) {
        try {
          var t = e.cssRules;
          return !(!t && e.href);
        } catch {
          return !1;
        }
      }
      o(_w, "isSameOriginStylesheet");
      var Yo = Dw;
      function xw(e, t, r, a, n) {
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
          return Yo(u.sheet, t, r, a, u.isCrossOrigin);
        });
      }
      o(xw, "parseCrossOriginStylesheet");
      var Xo = xw, Ew = function() {
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
              ur("Measure " + d.name + " took " + d.duration + "ms");
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
      }(), qe = Ew;
      function n1() {
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
      o(n1, "_pollyfillElementsFromPoint"), typeof D.addEventListener == "function" && (N.elementsFromPoint = n1());
      function Cw(e, t) {
        return e.concat(t).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
      }
      o(Cw, "uniqueArray");
      var wa = Cw;
      function i1(e, t, r, a, n) {
        var i = n || {};
        return i.vNodes = e, i.vNodesIndex = 0, i.anyLevel = t, i.thisLevel = r, i.parentShadowId = a, i;
      }
      o(i1, "createLocalVariables");
      function Aw(e, t, r) {
        for (var a = le.get("qsa.recycledLocalVariables", function() {
          return [];
        }), n = [], i = Array.isArray(e) ? e : [e], u = i1(i, t, null, e[0].shadowId, a.pop()), l = []; u.vNodesIndex < u.vNodes.length; ) {
          for (var s, c, d = u.vNodes[u.vNodesIndex++], f = null, p = null, m = (((s = u.anyLevel) === null || s === void 0 ? void 0 : s.length) || 0) + (((c = u.thisLevel) === null || c === void 0 ? void 0 : c.length) || 0), h = !1, v = 0; v < m; v++) {
            var y, g, b, _ = v < (((y = u.anyLevel) === null || y === void 0 ? void 0 : y.length) || 0) ? u.anyLevel[v] : u.thisLevel[v - (((g = u.anyLevel) === null || g === void 0 ? void 0 : g.length) || 0)];
            if ((!_[0].id || d.shadowId === u.parentShadowId) && Er(d, _[0]))
              if (_.length === 1)
                !h && (!r || r(d)) && (l.push(d), h = !0);
              else {
                var x = _.slice(1);
                if ([" ", ">"].includes(x[0].combinator) === !1)
                  throw new Error("axe.utils.querySelectorAll does not support the combinator: " + _[1].combinator);
                x[0].combinator === ">" ? (f = f || []).push(x) : (p = p || []).push(x);
              }
            (!_[0].id || d.shadowId === u.parentShadowId) && (b = u.anyLevel) !== null && b !== void 0 && b.includes(_) && (p = p || []).push(_);
          }
          for (d.children && d.children.length && (n.push(u), u = i1(d.children, p, f, d.shadowId, a.pop())); u.vNodesIndex === u.vNodes.length && n.length; )
            a.push(u), u = n.pop();
        }
        return l;
      }
      o(Aw, "matchExpressions");
      function Fw(e, t, r) {
        e = Array.isArray(e) ? e : [e];
        var a = Va(t), n = Bd(e, a, r);
        return n || Aw(e, a, r);
      }
      o(Fw, "querySelectorAllFilter");
      var St = Fw;
      function Tw(e) {
        var t = e.treeRoot, r = t === void 0 ? w._tree[0] : t, a = Rw(r);
        if (!a.length)
          return Promise.resolve();
        var n = N.implementation.createHTMLDocument("Dynamic document for loading cssom"), i = e1(n);
        return kw(a, i).then(function(u) {
          return u1(u);
        });
      }
      o(Tw, "preloadCssom");
      var o1 = Tw;
      function Rw(e) {
        var t = [], r = St(e, "*", function(a) {
          return t.includes(a.shadowId) ? !1 : (t.push(a.shadowId), !0);
        }).map(function(a) {
          return {
            shadowId: a.shadowId,
            rootNode: ta(a.actualNode)
          };
        });
        return wa(r, []);
      }
      o(Rw, "getAllRootNodesInTree");
      function kw(e, t) {
        var r = [];
        return e.forEach(function(a, n) {
          var i = a.rootNode, u = a.shadowId, l = Sw(i, u, t);
          if (!l)
            return Promise.all(r);
          var s = n + 1, c = {
            rootNode: i,
            shadowId: u,
            convertDataToStylesheet: t,
            rootIndex: s
          }, d = [], f = Promise.all(l.map(function(p, m) {
            var h = [s, m];
            return Yo(p, c, h, d);
          }));
          r.push(f);
        }), Promise.all(r);
      }
      o(kw, "getCssomForAllRootNodes");
      function u1(e) {
        return e.reduce(function(t, r) {
          return Array.isArray(r) ? t.concat(u1(r)) : t.concat(r);
        }, []);
      }
      o(u1, "flattenAssets");
      function Sw(e, t, r) {
        var a;
        return e.nodeType === 11 && t ? a = Ow(e, r) : a = Mw(e), Iw(a);
      }
      o(Sw, "getStylesheetsOfRootNode");
      function Ow(e, t) {
        return Array.from(e.children).filter(Nw).reduce(function(r, a) {
          var n = a.nodeName.toUpperCase(), i = n === "STYLE" ? a.textContent : a, u = n === "LINK", l = t({
            data: i,
            isLink: u,
            root: e
          });
          return l.sheet && r.push(l.sheet), r;
        }, []);
      }
      o(Ow, "getStylesheetsFromDocumentFragment");
      function Mw(e) {
        return Array.from(e.styleSheets).filter(function(t) {
          return t.media ? l1(t.media.mediaText) : !1;
        });
      }
      o(Mw, "getStylesheetsFromDocument");
      function Nw(e) {
        var t = e.nodeName.toUpperCase(), r = e.getAttribute("href"), a = e.getAttribute("rel"), n = t === "LINK" && r && a && e.rel.toUpperCase().includes("STYLESHEET"), i = t === "STYLE";
        return i || n && l1(e.media);
      }
      o(Nw, "filerStyleAndLinkAttributesInDocumentFragment");
      function l1(e) {
        return e ? !e.toUpperCase().includes("PRINT") : !0;
      }
      o(l1, "filterMediaIsPrint");
      function Iw(e) {
        var t = [];
        return e.filter(function(r) {
          return r.href ? t.includes(r.href) ? !1 : (t.push(r.href), !0) : !0;
        });
      }
      o(Iw, "filterStylesheetsWithSameHref");
      function Pw(e) {
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
          return Lw(i);
        }));
      }
      o(Pw, "preloadMedia");
      var s1 = Pw;
      function Lw(e) {
        return new Promise(function(t) {
          e.readyState > 0 && t(e);
          function r() {
            e.removeEventListener("loadedmetadata", r), t(e);
          }
          o(r, "onMediaReady"), e.addEventListener("loadedmetadata", r);
        });
      }
      o(Lw, "isMediaElementReady");
      function c1(e) {
        var t = {
          cssom: o1,
          media: s1
        };
        return d1(e) ? new Promise(function(r, a) {
          var n = f1(e), i = n.assets, u = n.timeout, l = setTimeout(function() {
            return a(new Error("Preload assets timed out."));
          }, u);
          Promise.all(i.map(function(s) {
            return t[s](e).then(function(c) {
              return lp({}, s, c);
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
      o(c1, "_preload");
      function Bw(e) {
        return S(e) === "object" && Array.isArray(e.assets);
      }
      o(Bw, "isValidPreloadObject");
      function d1(e) {
        return !e || e.preload === void 0 || e.preload === null ? !0 : typeof e.preload == "boolean" ? e.preload : Bw(e.preload);
      }
      o(d1, "_shouldPreload");
      function f1(e) {
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
        return n.assets = wa(e.preload.assets.map(function(u) {
          return u.toLowerCase();
        }), []), e.preload.timeout && typeof e.preload.timeout == "number" && !isNaN(e.preload.timeout) && (n.timeout = e.preload.timeout), n;
      }
      o(f1, "_getPreloadConfig");
      function Ln(e) {
        var t = w._audit.data.checks || {}, r = w._audit.data.rules || {}, a = ea(w._audit.rules, "id", e.id) || {};
        e.tags = It(a.tags || []);
        var n = p1(t, !0, a), i = p1(t, !1, a);
        e.nodes.forEach(function(u) {
          u.any.forEach(n), u.all.forEach(n), u.none.forEach(i);
        }), Ri(e, It(r[e.id] || {}));
      }
      o(Ln, "_publishMetaData");
      function qw(e, t) {
        function r(n) {
          return n.incomplete && n.incomplete.default ? n.incomplete.default : jo();
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
      o(qw, "getIncompleteReason");
      function p1(e, t, r) {
        return function(a) {
          var n = e[a.id] || {}, i = n.messages || {}, u = Object.assign({}, n);
          delete u.messages, !r.reviewOnFail && a.result === void 0 ? (S(i.incomplete) === "object" && !Array.isArray(a.data) && (u.message = qw(a.data, i)), u.message || (u.message = i.incomplete)) : u.message = a.result === t ? i.pass : i.fail, typeof u.message != "function" && (u.message = zo(u.message, a.data)), Ri(a, u);
        };
      }
      o(p1, "extender");
      function jw(e, t) {
        return St(e, t);
      }
      o(jw, "querySelectorAll");
      var dt = jw;
      function m1(e, t) {
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
      o(m1, "matchTags");
      function zw(e, t, r) {
        var a = r.runOnly || {}, n = (r.rules || {})[e.id];
        return e.pageLevel && !t.page ? !1 : a.type === "rule" ? a.values.indexOf(e.id) !== -1 : n && typeof n.enabled == "boolean" ? n.enabled : a.type === "tag" && a.values ? m1(e, a.values) : m1(e, []);
      }
      o(zw, "ruleShouldRun");
      var h1 = zw;
      function v1(e, t) {
        if (!t)
          return e;
        var r = e.cloneNode(!1), a = Ba(r);
        if (r.nodeType === 1) {
          var n = r.outerHTML;
          r = le.get(n, function() {
            return g1(r, a, e, t);
          });
        } else
          r = g1(r, a, e, t);
        return Array.from(e.childNodes).forEach(function(i) {
          r.appendChild(v1(i, t));
        }), r;
      }
      o(v1, "_filterHtmlAttrs");
      function g1(e, t, r, a) {
        return t && (e = N.createElement(e.nodeName), Array.from(t).forEach(function(n) {
          Vw(r, n.name, a) || e.setAttribute(n.name, n.value);
        })), e;
      }
      o(g1, "setNodeAttributes");
      function Vw(e, t, r) {
        return typeof r[t] > "u" ? !1 : r[t] === !0 ? !0 : xr(e, r[t]);
      }
      o(Vw, "attributeMatches");
      function Ko(e, t) {
        var r = [], a;
        if (w._selectCache)
          for (var n = 0, i = w._selectCache.length; n < i; n++) {
            var u = w._selectCache[n];
            if (u.selector === e)
              return u.result;
          }
        for (var l = Hw(t.include), s = $w(t), c = 0; c < l.length; c++) {
          a = l[c];
          var d = St(a, e, s);
          r = Uw(r, d);
        }
        return w._selectCache && w._selectCache.push({
          selector: e,
          result: r
        }), r;
      }
      o(Ko, "_select");
      function Hw(e) {
        return e.reduce(function(t, r) {
          return (!t.length || !cr(t[t.length - 1], r)) && t.push(r), t;
        }, []);
      }
      o(Hw, "getOuterIncludes");
      function $w(e) {
        return !e.exclude || e.exclude.length === 0 ? null : function(t) {
          return Uo(t, e);
        };
      }
      o($w, "getContextFilter");
      function Uw(e, t) {
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
      o(Uw, "mergeArrayUniques");
      function Gw(e, t, r) {
        if (e === D)
          return e.scroll(r, t);
        e.scrollTop = t, e.scrollLeft = r;
      }
      o(Gw, "setScroll");
      function Ww(e) {
        e.forEach(function(t) {
          var r = t.elm, a = t.top, n = t.left;
          return Gw(r, a, n);
        });
      }
      o(Ww, "setScrollState");
      var Yw = Ww;
      function Xw(e) {
        var t = Array.isArray(e) ? ae(e) : [e];
        return b1(t, N);
      }
      o(Xw, "_shadowSelect");
      function b1(e, t) {
        var r = e.shift(), a = r ? t.querySelector(r) : null;
        return e.length === 0 ? a : a != null && a.shadowRoot ? b1(e, a.shadowRoot) : null;
      }
      o(b1, "selectRecursive");
      function Zo(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, r = Array.isArray(e) ? ae(e) : [e];
        return e.length === 0 ? [] : y1(r, t);
      }
      o(Zo, "_shadowSelectAll");
      function y1(e, t) {
        var r = up(e), a = r[0], n = r.slice(1), i = t.querySelectorAll(a);
        if (n.length === 0)
          return Array.from(i);
        var u = [], l = Fe(i), s;
        try {
          for (l.s(); !(s = l.n()).done; ) {
            var c = s.value;
            c != null && c.shadowRoot && u.push.apply(u, ae(y1(n, c.shadowRoot)));
          }
        } catch (d) {
          l.e(d);
        } finally {
          l.f();
        }
        return u;
      }
      o(y1, "selectAllRecursive");
      function Kw() {
        return ["hidden", "text", "search", "tel", "url", "email", "password", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"];
      }
      o(Kw, "validInputTypes");
      var Bn = Kw, w1 = [, [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , , , , , 1, 1, 1, 1, , , 1, 1, 1, , 1, , 1, , 1, 1], [1, 1, 1, , 1, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, 1, 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1], [1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , , 1, 1, , , , , , 1, 1], [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1], [, 1, , , 1, , , 1, , , , , , 1], [, 1, , 1, , , , 1, , , , 1], [1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [, 1, 1, , , , , , 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1], [, , , , 1, , , , , , , , , , , , , , , , , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, , 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, 1, , , , , 1], [1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , 1, , , , , , , 1], [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1], , [1, 1, 1, , , , , , , , , , , , , 1], [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1]], [, [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , 1, , , , , , , , , , , , , , , 1], [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1], [1, , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1], [, , , , , , , 1, , , , 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , 1], [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1], [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1], , [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1], [1, 1, , , 1, 1, , 1, , , , , 1, , 1]], [, [, 1], [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1], [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1], , [1, , , , , 1], [, 1, , , , 1, , , , 1], [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1], [, , , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , 1, , 1], [, 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1], [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1], [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1], [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1], [1, , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], , [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1], [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1], [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1], [1, , , , , , , , , , , , , , , , , 1], [, , , , , 1, , , 1, , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1], [, 1, , , , 1]], [, [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, 1, 1], [, , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], , [, , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1], , [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1], [1], [, , , , , , , , , , , 1, , , , , , , , , , , 1], [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , , 1], [, , 1, , , , , 1, , 1], [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1], [, , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1], [, , , , , 1, , , , , , , 1, , , , , , , 1], , [, , 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , , 1, 1, , 1, 1, 1, , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, , , , 1], , [1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, , , 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1], [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1], [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1], [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, , , , 1, 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1], [, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1], [, 1, , , , , , , , 1, , , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1], [1, 1, , , 1, , , 1, 1, 1, , , , 1], , [, , , , , , , , , , , , , 1, , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1], [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1], [, , , , , , , , , 1], [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1], [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , 1, , , , 1], , [1, 1, , 1, , 1, , , , , , 1, , 1, , 1, 1, , 1, , 1, 1, , 1, 1, , 1], [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1], [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1], [, 1, , 1, , , , , , , , , , , , 1], , [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1], [1]], [, [1, , , , , , , , , 1, , , , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1], [, 1, , , , , , , 1, , , , 1, , , , , , 1], [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1], [1], [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1], [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1], [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1], [1, , , , , , , , , , , , , , 1, , , , 1], [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1], [1, , , , , 1, , , , 1, , 1, 1, , , 1, 1, , 1, 1, 1, , 1, 1, 1, , 1], [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1], [1, , 1, 1, , 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , , , 1], [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1], [, , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1], [1, , 1, 1, 1, 1, , , , 1, , 1, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1], [1, , , , , , , , , , , , , 1], [, , 1, , , , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , , , 1, , 1, , 1, , , , 1], [, , , 1, , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1], [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1], [, , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , 1, , , , , , , , , , , , , 1], [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1], , [, , 1, , , 1, , , , , , 1, , , , 1], [, , , , , , , , , 1, , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , 1, , 1, , , 1, 1, 1, , , 1], [, , , , , 1, , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1], [, , , , , 1, , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1], [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1], [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1], [, , , , , , , , , , , , 1], , [, 1, 1, 1, 1, , , , 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1], [1, , , , 1, , , , , , , , , , 1], [1, , , , , , , , , 1], , [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , 1], [1, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, , 1, 1, , , , , 1], [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1, , 1, , 1, , , 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1], , [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1, , , , 1], [, 1, , , 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1], [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1], [1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1], [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1], , [, 1, , , , , , 1, , , , , , , 1], [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1]], [, [, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1], [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1], [1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , 1, 1, , 1, , 1, 1, 1, , 1, , 1, 1, , 1, 1, , 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , , 1, , , , , 1, , 1], [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1], [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1]], [, [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1], [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1], [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1], [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1], , [, , , , , , , , , , , , , , , 1, , , , 1, , 1], [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , , , , , , , , 1], [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1], [, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1], [1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1], [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1], [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1], , [1, 1, , 1, , 1, , 1, 1, , , , , , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1], [, 1, 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, , , 1, , , , 1, , , , 1, 1], [, , , , 1], [, , , , , , , , , 1, , , 1], , [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1], [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , , , , 1], [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1], [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], , [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1], [, , , , , , , , , , , , , 1], [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1], [, , , , , , , , , , , , , , 1]], [, [, 1], , , , , , , , , , , , , , , , , , , , [1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, , , , 1, , 1, 1], [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1], [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , , , , , , , , , , , , , , 1]], [, [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , 1, 1, , , , 1], [, , , , , , 1], [, , 1], [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1], , [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1], [, , , , , , , 1, , , , , , , , , 1], [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1], [, , , , , , , 1, , 1, , , , , , , , , , 1], [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1], , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1], [, , , , , , , , , , , , , , 1, , , , , , 1], , [, , , , , , , , , 1, , , , , , 1, , , , , 1], [, , 1, , , , , , , 1, , , 1, 1], [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1], [1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , , , 1, 1, 1, , , 1, 1, , , , 1, 1], , [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1], [, , , , 1, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , 1], [, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1], [1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1], [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1], [1, 1, 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1], [, 1, 1, 1, , 1, , 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [1, 1, , , , 1, , , 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, , 1], [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1]], [, [, , , , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1], , [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1], [, 1, , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1, , , 1], [, , , , , , , , , 1], [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1], [, , , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , , , , , 1], , [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1], [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1], [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1], [, , , , , 1, , , 1, , , , 1], [, 1], , [, 1], [1, , , , , , , , , , , , , , 1, , , , , 1]], [, [, 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , , 1], [, , 1, , , , , , , , , 1], , , [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1], , [, , , , , , , , , , , , , , , , , , 1, , 1], , [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1], , [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1], [, , , , , , , , , , , , , , , , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , 1, , , 1], [1, , , , , , , , , , , , , , , , , , 1, , 1], , , [, 1, , , , , , , , , , , , , , 1, , , , 1, 1], [, , , , , , , , , 1, , , 1, , , , , , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1, 1, , , , , , 1], , [, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1], [, 1, , , , , , , , 1], [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1], [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , , , , , 1], [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1], [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1], [, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, 1, 1, 1, , 1], [, 1, , , , , , , , 1], [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1], [, 1, , 1, , 1, , 1, 1, 1, , 1, 1, 1, , 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, , , 1, 1, , , , 1, , 1], [, , , 1], , [, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1], [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1], [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1], , [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1], [, 1, , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1]], [, [, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, , 1, , 1, 1, , , 1, 1, 1, 1, , 1, , , , , 1, 1, 1], [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1], [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1], [, 1], [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1], [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1], [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1], [, , 1, , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, , , , 1, 1], [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1], [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1], [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1], [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1], [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1], [, , , , , , , , 1, , , , , 1, , , 1]], [, [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1], [, , , , , , , , 1, , , , 1, , 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1], , [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1], [, 1, , , 1, , , , , , , , 1, , , , , , , 1], [1, 1, , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], , [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1], [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1], [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1], [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1], [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1], , [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1], [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1], [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1], [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1], [, , , , , , , 1, , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , 1], [, 1, , , , , , 1, 1, , , , , , 1], , [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1], [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1], [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1], , [, 1, 1, , 1, , , 1, 1, , , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , , 1], [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1], [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1], [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1], [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1], [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1], , [, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, , 1, , , , , 1, , , 1, , , , 1, , 1], [, 1, , , , , , , , , 1]]];
      function Zw(e) {
        for (var t = w1; e.length < 3; )
          e += "`";
        for (var r = 0; r <= e.length - 1; r++) {
          var a = e.charCodeAt(r) - 96;
          if (t = t[a], !t)
            return !1;
        }
        return !0;
      }
      o(Zw, "isValidLang");
      function D1(e) {
        e = Array.isArray(e) ? e : w1;
        var t = [];
        return e.forEach(function(r, a) {
          var n = String.fromCharCode(a + 96).replace("`", "");
          Array.isArray(r) ? t = t.concat(D1(r).map(function(i) {
            return n + i;
          })) : t.push(n);
        }), t;
      }
      o(D1, "_validLangs");
      var qn = Zw, Jw = function(e) {
        Zn(r, e);
        var t = Jn(r);
        function r(a) {
          var n;
          return xt(this, r), n = t.call(this), n._props = eD(a), n._attrs = tD(a), n;
        }
        return o(r, "SerialVirtualNode"), Et(r, [{
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
      }(He), Jo = {
        "#cdata-section": 2,
        "#text": 3,
        "#comment": 8,
        "#document": 9,
        "#document-fragment": 11
      }, _1 = {}, Qw = Object.keys(Jo);
      Qw.forEach(function(e) {
        _1[Jo[e]] = e;
      });
      function eD(e) {
        var t, r, a, n = (t = e.nodeName) !== null && t !== void 0 ? t : _1[e.nodeType], i = (r = (a = e.nodeType) !== null && a !== void 0 ? a : Jo[e.nodeName]) !== null && r !== void 0 ? r : 1;
        he(typeof i == "number", "nodeType has to be a number, got '".concat(i, "'")), he(typeof n == "string", "nodeName has to be a string, got '".concat(n, "'")), n = n.toLowerCase();
        var u = null;
        n === "input" && (u = (e.type || e.attributes && e.attributes.type || "").toLowerCase(), Bn().includes(u) || (u = "text"));
        var l = pe({}, e, {
          nodeType: i,
          nodeName: n
        });
        return u && (l.type = u), delete l.attributes, Object.freeze(l);
      }
      o(eD, "normaliseProps");
      function tD(e) {
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
      o(tD, "normaliseAttrs");
      var x1 = Jw;
      function rD(e, t) {
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
      o(rD, "cleanup");
      var E1 = rD, Da = {}, C1;
      function A1(e) {
        return Da.hasOwnProperty(e);
      }
      o(A1, "hasReporter");
      function Qo(e) {
        return typeof e == "string" && Da[e] ? Da[e] : typeof e == "function" ? e : C1;
      }
      o(Qo, "getReporter");
      function aD(e, t, r) {
        Da[e] = t, r && (C1 = t);
      }
      o(aD, "addReporter");
      function nD(e) {
        var t;
        if (t = w._audit, !t)
          throw new Error("No audit configured");
        if (e.axeVersion || e.ver) {
          var r = e.axeVersion || e.ver;
          if (!/^\d+\.\d+\.\d+(-canary)?/.test(r))
            throw new Error("Invalid configured version ".concat(r));
          var a = r.split("-"), n = H(a, 2), i = n[0], u = n[1], l = i.split(".").map(Number), s = H(l, 3), c = s[0], d = s[1], f = s[2], p = w.version.split("-"), m = H(p, 2), h = m[0], v = m[1], y = h.split(".").map(Number), g = H(y, 3), b = g[0], _ = g[1], x = g[2];
          if (c !== b || _ < d || _ === d && x < f || c === b && d === _ && f === x && u && u !== v)
            throw new Error("Configured version ".concat(r, " is not compatible with current axe version ").concat(w.version));
        }
        if (e.reporter && (typeof e.reporter == "function" || A1(e.reporter)) && (t.reporter = e.reporter), e.checks) {
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
        }), typeof e.branding < "u" ? t.setBranding(e.branding) : t._constructHelpUrls(), e.tagExclude && (t.tagExclude = e.tagExclude), e.locale && t.applyLocale(e.locale), e.standards && Hg(e.standards), e.noHtml && (t.noHtml = !0), e.allowedOrigins) {
          if (!Array.isArray(e.allowedOrigins))
            throw new TypeError("Allowed origins property must be an array");
          if (e.allowedOrigins.includes("*"))
            throw new Error('"*" is not allowed. Use "'.concat(ce.allOrigins, '" instead'));
          t.setAllowedOrigins(e.allowedOrigins);
        }
      }
      o(nD, "configure");
      var iD = nD;
      function oD(e) {
        wt.updateMessenger(e);
      }
      o(oD, "frameMessenger2");
      function uD(e) {
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
      o(uD, "getRules");
      var lD = uD, F1 = {};
      gt(F1, {
        allowedAttr: /* @__PURE__ */ o(function() {
          return T1;
        }, "allowedAttr"),
        arialabelText: /* @__PURE__ */ o(function() {
          return ia;
        }, "arialabelText"),
        arialabelledbyText: /* @__PURE__ */ o(function() {
          return na;
        }, "arialabelledbyText"),
        getAccessibleRefs: /* @__PURE__ */ o(function() {
          return eu;
        }, "getAccessibleRefs"),
        getElementUnallowedRoles: /* @__PURE__ */ o(function() {
          return S1;
        }, "getElementUnallowedRoles"),
        getExplicitRole: /* @__PURE__ */ o(function() {
          return Ee;
        }, "getExplicitRole"),
        getImplicitRole: /* @__PURE__ */ o(function() {
          return Ft;
        }, "getImplicitRole"),
        getOwnedVirtual: /* @__PURE__ */ o(function() {
          return ua;
        }, "getOwnedVirtual"),
        getRole: /* @__PURE__ */ o(function() {
          return de;
        }, "getRole"),
        getRoleType: /* @__PURE__ */ o(function() {
          return Rt;
        }, "getRoleType"),
        getRolesByType: /* @__PURE__ */ o(function() {
          return wD;
        }, "getRolesByType"),
        getRolesWithNameFromContents: /* @__PURE__ */ o(function() {
          return xD;
        }, "getRolesWithNameFromContents"),
        implicitNodes: /* @__PURE__ */ o(function() {
          return CD;
        }, "implicitNodes"),
        implicitRole: /* @__PURE__ */ o(function() {
          return Ft;
        }, "implicitRole"),
        isAccessibleRef: /* @__PURE__ */ o(function() {
          return jn;
        }, "isAccessibleRef"),
        isAriaRoleAllowedOnElement: /* @__PURE__ */ o(function() {
          return k1;
        }, "isAriaRoleAllowedOnElement"),
        isComboboxPopup: /* @__PURE__ */ o(function() {
          return ru;
        }, "isComboboxPopup"),
        isUnsupportedRole: /* @__PURE__ */ o(function() {
          return Ui;
        }, "isUnsupportedRole"),
        isValidRole: /* @__PURE__ */ o(function() {
          return Sr;
        }, "isValidRole"),
        label: /* @__PURE__ */ o(function() {
          return I1;
        }, "label"),
        labelVirtual: /* @__PURE__ */ o(function() {
          return cn;
        }, "labelVirtual"),
        lookupTable: /* @__PURE__ */ o(function() {
          return M1;
        }, "lookupTable"),
        namedFromContents: /* @__PURE__ */ o(function() {
          return Ys;
        }, "namedFromContents"),
        requiredAttr: /* @__PURE__ */ o(function() {
          return P1;
        }, "requiredAttr"),
        requiredContext: /* @__PURE__ */ o(function() {
          return au;
        }, "requiredContext"),
        requiredOwned: /* @__PURE__ */ o(function() {
          return nu;
        }, "requiredOwned"),
        validateAttr: /* @__PURE__ */ o(function() {
          return zn;
        }, "validateAttr"),
        validateAttrValue: /* @__PURE__ */ o(function() {
          return L1;
        }, "validateAttrValue")
      });
      function sD(e) {
        var t = ve.ariaRoles[e], r = ae(mr());
        return t && (t.allowedAttrs && r.push.apply(r, ae(t.allowedAttrs)), t.requiredAttrs && r.push.apply(r, ae(t.requiredAttrs))), r;
      }
      o(sD, "allowedAttr");
      var T1 = sD, cD = /^idrefs?$/;
      function R1(e, t, r) {
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
          e.childNodes[d].nodeType === 1 && R1(e.childNodes[d], t, r);
      }
      o(R1, "cacheIdRefs");
      function dD(e) {
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
            return cD.test(l);
          });
          R1(r, n, i);
        }
        return (t = n.get(e.id)) !== null && t !== void 0 ? t : [];
      }
      o(dD, "getAccessibleRefs");
      var eu = dD;
      function fD(e, t) {
        var r = e instanceof He ? e : se(e), a = Ft(r), n = vr(r);
        return Array.isArray(n.allowedRoles) ? n.allowedRoles.includes(t) : t === a ? !1 : !!n.allowedRoles;
      }
      o(fD, "isAriaRoleAllowedOnElement");
      var k1 = fD, pD = ["doc-backlink", "doc-biblioentry", "doc-biblioref", "doc-cover", "doc-endnote", "doc-glossref", "doc-noteref"], mD = {
        header: "banner",
        footer: "contentinfo"
      };
      function hD(e) {
        var t = [];
        if (!e)
          return t;
        if (e.hasAttr("role")) {
          var r = Xe(e.attr("role").toLowerCase());
          t = t.concat(r);
        }
        return t.filter(function(a) {
          return Sr(a);
        });
      }
      o(hD, "getRoleSegments");
      function vD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = _e(e), a = r.vNode;
        if (!$o(a))
          return [];
        var n = a.props.nodeName, i = Ft(a) || mD[n], u = hD(a);
        return u.filter(function(l) {
          return !gD(l, a, t, i);
        });
      }
      o(vD, "getElementUnallowedRoles");
      function gD(e, t, r, a) {
        return r && e === a ? !0 : pD.includes(e) && Rt(e) !== a ? !1 : k1(t, e);
      }
      o(gD, "roleIsAllowed");
      var S1 = vD;
      function bD(e) {
        return Object.keys(ve.ariaRoles).filter(function(t) {
          return ve.ariaRoles[t].type === e;
        });
      }
      o(bD, "getAriaRolesByType");
      var Pr = bD;
      function yD(e) {
        return Pr(e);
      }
      o(yD, "getRolesByType");
      var wD = yD;
      function DD() {
        return le.get("ariaRolesNameFromContent", function() {
          return Object.keys(ve.ariaRoles).filter(function(e) {
            return ve.ariaRoles[e].nameFromContent;
          });
        });
      }
      o(DD, "getAriaRolesSupportingNameFromContent");
      var tu = DD;
      function _D() {
        return tu();
      }
      o(_D, "getRolesWithNameFromContents");
      var xD = _D, O1 = /* @__PURE__ */ o(function(t) {
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
      }, qt.implicitHtmlRole = Yi, qt.elementsAllowedNoRole = [{
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
          href: O1
        }
      }, {
        nodeName: "img",
        attributes: {
          alt: O1
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
      var M1 = qt;
      function ED(e) {
        var t = null, r = M1.role[e];
        return r && r.implicit && (t = It(r.implicit)), t;
      }
      o(ED, "implicitNodes");
      var CD = ED;
      function AD(e) {
        return !!eu(e).length;
      }
      o(AD, "isAccessibleRef");
      var jn = AD;
      function ru(e) {
        var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.popupRoles, n = de(e);
        if ((t = a) !== null && t !== void 0 || (a = Rs["aria-haspopup"].values), !a.includes(n))
          return !1;
        var i = FD(e);
        if (N1(i))
          return !0;
        var u = e.props.id;
        if (!u)
          return !1;
        if (!e.actualNode)
          throw new Error("Unable to determine combobox popup without an actualNode");
        var l = ta(e.actualNode), s = l.querySelectorAll('[aria-owns~="'.concat(u, `"][role~="combobox"]:not(select),
     [aria-controls~="`).concat(u, '"][role~="combobox"]:not(select)'));
        return Array.from(s).some(N1);
      }
      o(ru, "_isComboboxPopup");
      var N1 = /* @__PURE__ */ o(function(t) {
        return t && de(t) === "combobox";
      }, "isCombobox");
      function FD(e) {
        for (; e = e.parent; )
          if (de(e, {
            noPresentational: !0
          }) !== null)
            return e;
        return null;
      }
      o(FD, "nearestParentWithRole");
      function TD(e) {
        return e = se(e), cn(e);
      }
      o(TD, "label2");
      var I1 = TD;
      function RD(e) {
        var t = ve.ariaRoles[e];
        return !t || !Array.isArray(t.requiredAttrs) ? [] : ae(t.requiredAttrs);
      }
      o(RD, "requiredAttr");
      var P1 = RD;
      function kD(e) {
        var t = ve.ariaRoles[e];
        return !t || !Array.isArray(t.requiredContext) ? null : ae(t.requiredContext);
      }
      o(kD, "requiredContext");
      var au = kD;
      function SD(e) {
        var t = ve.ariaRoles[e];
        return !t || !Array.isArray(t.requiredOwned) ? null : ae(t.requiredOwned);
      }
      o(SD, "requiredOwned");
      var nu = SD;
      function OD(e, t) {
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
      o(OD, "validateAttrValue");
      var L1 = OD;
      function MD(e) {
        var t = ve.ariaAttrs[e];
        return !!t;
      }
      o(MD, "validateAttr");
      var zn = MD;
      function ND(e, t, r) {
        var a = Xe(r.attr("role")).filter(function(n) {
          return Rt(n) === "abstract";
        });
        return a.length > 0 ? (this.data(a), !0) : !1;
      }
      o(ND, "abstractroleEvaluate");
      var ID = ND;
      function PD(e, t, r) {
        var a = [], n = de(r), i = T1(n);
        Array.isArray(t[n]) && (i = wa(t[n].concat(i)));
        var u = Fe(r.attrNames), l;
        try {
          for (u.s(); !(l = u.n()).done; ) {
            var s = l.value;
            zn(s) && !i.includes(s) && a.push(s);
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
        })), !(!n && !$o(r) && !Se(r)))
          return !1;
      }
      o(PD, "ariaAllowedAttrEvaluate");
      function LD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t.allowImplicit, n = a === void 0 ? !0 : a, i = t.ignoredTags, u = i === void 0 ? [] : i, l = r.props.nodeName;
        if (u.map(function(c) {
          return c.toLowerCase();
        }).includes(l))
          return !0;
        var s = S1(r, n);
        return s.length ? (this.data(s), Te(r) ? !1 : void 0) : !0;
      }
      o(LD, "ariaAllowedRoleEvaluate");
      var BD = LD;
      function qD(e, t, r) {
        return r.attr("aria-busy") === "true";
      }
      o(qD, "ariaBusyEvaluate");
      function B1(e, t, r) {
        var a = r.props, n = a.nodeName, i = a.type, u = zD(r.attr("aria-checked"));
        if (n !== "input" || i !== "checkbox" || !u)
          return !0;
        var l = jD(r);
        return u === l ? !0 : (this.data({
          messageKey: "checkbox",
          checkState: l
        }), !1);
      }
      o(B1, "ariaConditionalCheckboxAttr");
      function jD(e) {
        return e.props.indeterminate ? "mixed" : e.props.checked ? "true" : "false";
      }
      o(jD, "getCheckState");
      function zD(e) {
        return e ? (e = e.toLowerCase(), ["mixed", "true"].includes(e) ? e : "false") : "";
      }
      o(zD, "normalizeAriaChecked");
      function q1(e) {
        var t, r, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.invalidTableRowAttrs, i = arguments.length > 2 ? arguments[2] : void 0, u = (t = n == null || (r = n.filter) === null || r === void 0 ? void 0 : r.call(n, function(d) {
          return i.hasAttr(d);
        })) !== null && t !== void 0 ? t : [];
        if (u.length === 0)
          return !0;
        var l = VD(i), s = l && de(l);
        if (!s || s === "treegrid")
          return !0;
        var c = "row".concat(u.length > 1 ? "Plural" : "Singular");
        return this.data({
          messageKey: c,
          invalidAttrs: u,
          ownerRole: s
        }), !1;
      }
      o(q1, "ariaConditionalRowAttr");
      function VD(e) {
        if (!!e.parent) {
          var t = 'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]';
          return it(e, t);
        }
      }
      o(VD, "getRowOwner");
      var j1 = {
        row: q1,
        checkbox: B1
      };
      function HD(e, t, r) {
        var a = de(r);
        return j1[a] ? j1[a].call(this, e, t, r) : !0;
      }
      o(HD, "ariaConditionalAttrEvaluate");
      function $D(e, t, r) {
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
      o($D, "ariaErrormessageEvaluate");
      function UD(e, t, r) {
        return r.attr("aria-hidden") !== "true";
      }
      o(UD, "ariaHiddenBodyEvaluate");
      var GD = UD;
      function WD(e, t, r) {
        var a = r.attr("aria-level"), n = parseInt(a, 10);
        if (!(n > 6))
          return !0;
      }
      o(WD, "ariaLevelEvaluate");
      var YD = WD;
      function XD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = t?.elementsAllowedAriaLabel || [], n = r.props.nodeName, i = de(r, {
          chromium: !0
        }), u = KD(i, n, a), l = u.filter(function(d) {
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
        var c = $t(r, {
          subtreeDescendant: !0
        });
        if (ne(c) === "")
          return !0;
      }
      o(XD, "ariaProhibitedAttrEvaluate");
      function KD(e, t, r) {
        var a = ve.ariaRoles[e];
        return a ? a.prohibitedAttrs || [] : !!e || r.includes(t) ? [] : ["aria-label", "aria-labelledby"];
      }
      o(KD, "listProhibitedAttrs");
      var z1 = {};
      gt(z1, {
        getAriaRolesByType: /* @__PURE__ */ o(function() {
          return Pr;
        }, "getAriaRolesByType"),
        getAriaRolesSupportingNameFromContent: /* @__PURE__ */ o(function() {
          return tu;
        }, "getAriaRolesSupportingNameFromContent"),
        getElementSpec: /* @__PURE__ */ o(function() {
          return vr;
        }, "getElementSpec"),
        getElementsByContentType: /* @__PURE__ */ o(function() {
          return Gi;
        }, "getElementsByContentType"),
        getGlobalAriaAttrs: /* @__PURE__ */ o(function() {
          return mr;
        }, "getGlobalAriaAttrs"),
        implicitHtmlRoles: /* @__PURE__ */ o(function() {
          return Yi;
        }, "implicitHtmlRoles")
      });
      function ZD(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = Ee(r), n = r.attrNames, i = P1(a);
        if (Array.isArray(t[a]) && (i = wa(t[a], i)), !a || !n.length || !i.length || JD(r, a) || e_(r, a))
          return !0;
        var u = vr(r), l = i.filter(function(s) {
          return !r.attr(s) && !QD(u, s);
        });
        return l.length ? (this.data(l), !1) : !0;
      }
      o(ZD, "ariaRequiredAttrEvaluate");
      function JD(e, t) {
        return t === "separator" && !Se(e);
      }
      o(JD, "isStaticSeparator");
      function QD(e, t) {
        var r;
        return ((r = e.implicitAttrs) === null || r === void 0 ? void 0 : r[t]) !== void 0;
      }
      o(QD, "hasImplicitAttr");
      function e_(e, t) {
        return t === "combobox" && e.attr("aria-expanded") === "false";
      }
      o(e_, "isClosedCombobox");
      function t_(e, t, r) {
        var a = t && Array.isArray(t.reviewEmpty) ? t.reviewEmpty : [], n = Ee(r, {
          dpub: !0
        }), i = nu(n);
        if (i === null)
          return !0;
        var u = r_(r, i), l = u.filter(function(s) {
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
              return i_(c, d);
            }).filter(function(s, c, d) {
              return d.indexOf(s) === c;
            }).join(", ")
          }), !1;
        if (a_(i, u))
          return !0;
        if (this.data(i), !(a.includes(n) && !u.some(o_)))
          return !1;
      }
      o(t_, "ariaRequiredChildrenEvaluate");
      function r_(e, t) {
        for (var r, a = [], n = ua(e), i = /* @__PURE__ */ o(function() {
          if (r.props.nodeType === 3 && a.push({
            vNode: r,
            role: null
          }), r.props.nodeType !== 1 || !Te(r))
            return "continue";
          var s = de(r, {
            noPresentational: !0
          }), c = n_(r), d = !!c || Se(r);
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
      o(r_, "getOwnedRoles");
      function a_(e, t) {
        return t.some(function(r) {
          var a = r.role;
          return a && e.includes(a);
        });
      }
      o(a_, "hasRequiredChildren");
      function n_(e) {
        return mr().find(function(t) {
          return e.hasAttr(t);
        });
      }
      o(n_, "getGlobalAriaAttr");
      function i_(e, t) {
        var r = e.props, a = r.nodeName, n = r.nodeType;
        if (n === 3)
          return "#text";
        var i = Ee(e, {
          dpub: !0
        });
        return i ? "[role=".concat(i, "]") : t ? a + "[".concat(t, "]") : a;
      }
      o(i_, "getUnallowedSelector");
      function o_(e) {
        var t = e.vNode;
        return t.props.nodeType === 3 ? t.props.nodeValue.trim().length > 0 : sa(t, !1, !0);
      }
      o(o_, "isContent");
      function V1(e, t, r, a) {
        var n = Ee(e);
        if (r || (r = au(n)), !r)
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
      o(V1, "getMissingContext");
      function u_(e) {
        for (var t = [], r = null; e; ) {
          if (e.getAttribute("id")) {
            var a = ke(e.getAttribute("id")), n = Ye(e);
            r = n.querySelector("[aria-owns~=".concat(a, "]")), r && t.push(r);
          }
          e = e.parentElement;
        }
        return t.length ? t : null;
      }
      o(u_, "getAriaOwners");
      function l_(e, t, r) {
        var a = t && Array.isArray(t.ownGroupRoles) ? t.ownGroupRoles : [], n = V1(r, a);
        if (!n)
          return !0;
        var i = u_(e);
        if (i) {
          for (var u = 0, l = i.length; u < l; u++)
            if (n = V1(se(i[u]), a, n, !0), !n)
              return !0;
        }
        return this.data(n), !1;
      }
      o(l_, "ariaRequiredParentEvaluate");
      var s_ = l_;
      function c_(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = de(r), n = t.supportedRoles || [];
        if (n.includes(a))
          return !0;
        if (!(a && a !== "presentation" && a !== "none"))
          return !1;
      }
      o(c_, "ariaRoledescriptionEvaluate");
      var d_ = c_;
      function f_(e, t, r) {
        var a = r.attrNames.filter(function(n) {
          var i = ve.ariaAttrs[n];
          if (!zn(n))
            return !1;
          var u = i.unsupported;
          return S(u) !== "object" ? !!u : !oa(e, u.exceptions);
        });
        return a.length ? (this.data(a), !0) : !1;
      }
      o(f_, "ariaUnsupportedAttrEvaluate");
      var p_ = f_;
      function m_(e, t, r) {
        t = Array.isArray(t.value) ? t.value : [];
        var a = [], n = /^aria-/;
        return r.attrNames.forEach(function(i) {
          t.indexOf(i) === -1 && n.test(i) && !zn(i) && a.push(i);
        }), a.length ? (this.data(a), !1) : !0;
      }
      o(m_, "ariaValidAttrEvaluate");
      var h_ = m_;
      function v_(e, t, r) {
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
              d = L1(r, c);
            } catch {
              a = "".concat(c, '="').concat(f, '"'), n = "idrefs";
              return;
            }
            (s[c] ? s[c](d) : !0) && !d && (f === "" && !g_(c) ? (a = c, n = "empty") : i.push("".concat(c, '="').concat(f, '"')));
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
      o(v_, "ariaValidAttrValueEvaluate");
      function g_(e) {
        var t;
        return ((t = ve.ariaAttrs[e]) === null || t === void 0 ? void 0 : t.type) === "string";
      }
      o(g_, "isStringType");
      function b_(e, t, r) {
        var a, n = (a = r.attr("aria-braillelabel")) !== null && a !== void 0 ? a : "";
        if (!n.trim())
          return !0;
        try {
          return ne(Ue(r)) !== "";
        } catch {
          return;
        }
      }
      o(b_, "brailleLabelEquivalentEvaluate");
      function y_(e, t, r) {
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
      o(y_, "brailleRoleDescriptionEquivalentEvaluate");
      function w_(e, t, r) {
        var a = de(r, {
          dpub: !0,
          fallback: !0
        }), n = ve.ariaRoles[a];
        return n != null && n.deprecated ? (this.data(a), !0) : !1;
      }
      o(w_, "deprecatedroleEvaluate");
      function D_(e, t) {
        var r = Ft(e);
        return !r && t.length === 2 && t.includes("none") && t.includes("presentation");
      }
      o(D_, "nonePresentationOnElementWithNoImplicitRole");
      function __(e, t, r) {
        var a = Xe(r.attr("role"));
        return a.length <= 1 ? !1 : D_(r, a) ? void 0 : !0;
      }
      o(__, "fallbackroleEvaluate");
      var x_ = __;
      function E_(e, t, r) {
        var a = mr().filter(function(n) {
          return r.hasAttr(n);
        });
        return this.data(a), a.length > 0;
      }
      o(E_, "hasGlobalAriaAttributeEvaluate");
      var C_ = E_;
      function A_(e) {
        var t = e.getAttribute("role");
        if (t === null)
          return !1;
        var r = Rt(t);
        return r === "widget" || r === "composite";
      }
      o(A_, "hasWidgetRoleEvaluate");
      var F_ = A_;
      function T_(e, t, r) {
        var a = Xe(r.attr("role")), n = a.every(function(i) {
          return !Sr(i, {
            allowAbstract: !0
          });
        });
        return n ? (this.data(a), !0) : !1;
      }
      o(T_, "invalidroleEvaluate");
      var R_ = T_;
      function k_(e, t, r) {
        return Se(r);
      }
      o(k_, "isElementFocusableEvaluate");
      var S_ = k_;
      function O_(e, t, r) {
        var a = de(r, {
          noImplicit: !0
        });
        this.data(a);
        var n, i;
        try {
          n = ne(Ji(r)).toLowerCase(), i = ne(Ue(r)).toLowerCase();
        } catch {
          return;
        }
        if (!i && !n)
          return !1;
        if (!(!i && n) && !!i.includes(n))
          return !1;
      }
      o(O_, "noImplicitExplicitLabelEvaluate");
      var M_ = O_;
      function N_(e, t, r) {
        var a = de(r, {
          dpub: !0,
          fallback: !0
        }), n = Ui(a);
        return n && this.data(a), n;
      }
      o(N_, "unsupportedroleEvaluate");
      var I_ = N_, P_ = {
        ARTICLE: !0,
        ASIDE: !0,
        NAV: !0,
        SECTION: !0
      }, L_ = {
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
      function B_(e) {
        var t = e.nodeName.toUpperCase();
        return P_[t] || !1;
      }
      o(B_, "validScrollableTagName");
      function q_(e, t) {
        var r = Ee(e);
        return r && (L_[r] || t.roles.includes(r)) || !1;
      }
      o(q_, "validScrollableRole");
      function j_(e, t) {
        return q_(e, t) || B_(e);
      }
      o(j_, "validScrollableSemanticsEvaluate");
      var z_ = j_, H1 = {};
      gt(H1, {
        Color: /* @__PURE__ */ o(function() {
          return Oe;
        }, "Color"),
        centerPointOfRect: /* @__PURE__ */ o(function() {
          return H_;
        }, "centerPointOfRect"),
        elementHasImage: /* @__PURE__ */ o(function() {
          return pn;
        }, "elementHasImage"),
        elementIsDistinct: /* @__PURE__ */ o(function() {
          return U1;
        }, "elementIsDistinct"),
        filteredRectStack: /* @__PURE__ */ o(function() {
          return W_;
        }, "filteredRectStack"),
        flattenColors: /* @__PURE__ */ o(function() {
          return Ot;
        }, "flattenColors"),
        flattenShadowColors: /* @__PURE__ */ o(function() {
          return ou;
        }, "flattenShadowColors"),
        getBackgroundColor: /* @__PURE__ */ o(function() {
          return xa;
        }, "getBackgroundColor"),
        getBackgroundStack: /* @__PURE__ */ o(function() {
          return uu;
        }, "getBackgroundStack"),
        getContrast: /* @__PURE__ */ o(function() {
          return Lr;
        }, "getContrast"),
        getForegroundColor: /* @__PURE__ */ o(function() {
          return $n;
        }, "getForegroundColor"),
        getOwnBackgroundColor: /* @__PURE__ */ o(function() {
          return br;
        }, "getOwnBackgroundColor"),
        getRectStack: /* @__PURE__ */ o(function() {
          return G1;
        }, "getRectStack"),
        getStackingContext: /* @__PURE__ */ o(function() {
          return su;
        }, "getStackingContext"),
        getStrokeColorsFromShadows: /* @__PURE__ */ o(function() {
          return lu;
        }, "getStrokeColorsFromShadows"),
        getTextShadowColors: /* @__PURE__ */ o(function() {
          return Hn;
        }, "getTextShadowColors"),
        hasValidContrastRatio: /* @__PURE__ */ o(function() {
          return hx;
        }, "hasValidContrastRatio"),
        incompleteData: /* @__PURE__ */ o(function() {
          return Ge;
        }, "incompleteData"),
        parseTextShadows: /* @__PURE__ */ o(function() {
          return Y1;
        }, "parseTextShadows"),
        stackingContextToColor: /* @__PURE__ */ o(function() {
          return _a;
        }, "stackingContextToColor")
      });
      function V_(e) {
        if (!(e.left > D.innerWidth) && !(e.top > D.innerHeight)) {
          var t = Math.min(Math.ceil(e.left + e.width / 2), D.innerWidth - 1), r = Math.min(Math.ceil(e.top + e.height / 2), D.innerHeight - 1);
          return {
            x: t,
            y: r
          };
        }
      }
      o(V_, "centerPointOfRect");
      var H_ = V_;
      function $1(e) {
        return e.getPropertyValue("font-family").split(/[,;]/g).map(function(t) {
          return t.trim().toLowerCase();
        });
      }
      o($1, "_getFonts");
      function $_(e, t) {
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
        if ($1(r)[0] !== $1(n)[0])
          return !0;
        var i = ["text-decoration-line", "text-decoration-style", "font-weight", "font-style", "font-size"].reduce(function(l, s) {
          return l || r.getPropertyValue(s) !== n.getPropertyValue(s);
        }, !1), u = r.getPropertyValue("text-decoration");
        return u.split(" ").length < 3 && (i = i || u !== n.getPropertyValue("text-decoration")), i;
      }
      o($_, "elementIsDistinct");
      var U1 = $_;
      function U_(e) {
        var t = As(e), r = io(e);
        return !r || r.length <= 1 ? [t] : r.some(function(a) {
          return a === void 0;
        }) ? null : (r.splice(0, 0, t), r);
      }
      o(U_, "getRectStack2");
      var G1 = U_;
      function G_(e) {
        var t = G1(e);
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
      o(G_, "filteredRectStack");
      var W_ = G_;
      function Y_(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      o(Y_, "clamp2");
      var X_ = {
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
      function iu(e, t, r, a, n) {
        return t * (1 - a) * e + t * a * X_[n](r / 255, e / 255) * 255 + (1 - t) * a * r;
      }
      o(iu, "simpleAlphaCompositing");
      function K_(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "normal", a = iu(e.red, e.alpha, t.red, t.alpha, r), n = iu(e.green, e.alpha, t.green, t.alpha, r), i = iu(e.blue, e.alpha, t.blue, t.alpha, r), u = Y_(e.alpha + t.alpha * (1 - e.alpha), 0, 1);
        if (u === 0)
          return new Oe(a, n, i, u);
        var l = Math.round(a / u), s = Math.round(n / u), c = Math.round(i / u);
        return new Oe(l, s, c, u);
      }
      o(K_, "flattenColors");
      var Ot = K_;
      function ou(e, t) {
        var r = e.alpha, a = (1 - r) * t.red + r * e.red, n = (1 - r) * t.green + r * e.green, i = (1 - r) * t.blue + r * e.blue, u = e.alpha + t.alpha * (1 - e.alpha);
        return new Oe(a, n, i, u);
      }
      o(ou, "_flattenShadowColors");
      function uu(e) {
        for (var t = io(e).map(function(n) {
          return n = Md(n, e), n = Z_(n), n;
        }), r = 0; r < t.length; r++) {
          var a = t[r];
          if (a[0] !== e)
            return Ge.set("bgColor", "bgOverlap"), null;
          if (r !== 0 && !J_(a, t[0]))
            return Ge.set("bgColor", "elmPartiallyObscuring"), null;
        }
        return t[0] || null;
      }
      o(uu, "_getBackgroundStack");
      function Z_(e) {
        var t = e.indexOf(N.body), r = e, a = br(D.getComputedStyle(N.documentElement));
        if (t > 1 && a.alpha === 0 && !pn(N.documentElement)) {
          t > 1 && (r.splice(t, 1), r.push(N.body));
          var n = r.indexOf(N.documentElement);
          n > 0 && (r.splice(n, 1), r.push(N.documentElement));
        }
        return r;
      }
      o(Z_, "sortPageBackground");
      function J_(e, t) {
        if (e === t)
          return !0;
        if (e === null || t === null || e.length !== t.length)
          return !1;
        for (var r = 0; r < e.length; ++r)
          if (e[r] !== t[r])
            return !1;
        return !0;
      }
      o(J_, "shallowArraysEqual");
      var Q_ = 0.54, Vn = 0.5, ex = 1.5, W1 = ["top", "right", "bottom", "left"];
      function lu(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ignoreEdgeCount, a = r === void 0 ? !1 : r, n = tx(e), i = Object.entries(n).map(function(u) {
          var l = H(u, 2), s = l[0], c = l[1], d = W1.filter(function(f) {
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
        }) ? null : i.map(rx).filter(function(u) {
          return u !== null;
        });
      }
      o(lu, "_getStrokeColorsFromShadows");
      function tx(e) {
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
            d > Vn ? s.right.push(d) : -d > Vn && s.left.push(-d), f > Vn ? s.bottom.push(f) : -f > Vn && s.top.push(-f);
          }
        } catch (p) {
          r.e(p);
        } finally {
          r.f();
        }
        return t;
      }
      o(tx, "getShadowColorsMap");
      function rx(e) {
        var t = e.colorStr, r = e.sides, a = e.edgeCount;
        if (a !== 4)
          return null;
        var n = new Oe();
        n.parseString(t);
        var i = 0, u = !0;
        return W1.forEach(function(l) {
          i += r[l].length / 4, u && (u = r[l].every(function(s) {
            return s > ex;
          }));
        }), u || (n.alpha = 1 - Math.pow(Q_, i)), n;
      }
      o(rx, "shadowGroupToColor");
      function Y1(e) {
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
      o(Y1, "_parseTextShadows");
      function Hn(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.minRatio, a = t.maxRatio, n = t.ignoreEdgeCount, i = [], u = D.getComputedStyle(e), l = u.getPropertyValue("text-shadow");
        if (l === "none")
          return i;
        var s = u.getPropertyValue("font-size"), c = parseInt(s);
        he(isNaN(c) === !1, "Unable to determine font-size value ".concat(s));
        var d = [], f = Y1(l), p = Fe(f), m;
        try {
          for (p.s(); !(m = p.n()).done; ) {
            var h = m.value, v = h.colorStr || u.getPropertyValue("color"), y = H(h.pixels, 3), g = y[0], b = y[1], _ = y[2], x = _ === void 0 ? 0 : _;
            if (!(a && x >= c * a)) {
              if (r && x < c * r) {
                d.push({
                  colorStr: v,
                  pixels: h.pixels
                });
                continue;
              }
              if (d.length > 0) {
                var T = lu(d, {
                  ignoreEdgeCount: n
                });
                if (T === null)
                  return null;
                i.push.apply(i, ae(T)), d.splice(0, d.length);
              }
              var k = ax({
                colorStr: v,
                offsetX: g,
                offsetY: b,
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
          var O = lu(d, {
            ignoreEdgeCount: n
          });
          if (O === null)
            return null;
          i.push.apply(i, ae(O));
        }
        return i;
      }
      o(Hn, "_getTextShadowColors");
      function ax(e) {
        var t = e.colorStr, r = e.offsetX, a = e.offsetY, n = e.blurRadius, i = e.fontSize;
        if (r > n || a > n)
          return new Oe(0, 0, 0, 0);
        var u = new Oe();
        return u.parseString(t), u.alpha *= nx(n, i), u;
      }
      o(ax, "textShadowColor");
      function nx(e, t) {
        if (e === 0)
          return 1;
        var r = e / t;
        return 0.185 / (r + 0.4);
      }
      o(nx, "blurRadiusToAlpha");
      function su(e, t) {
        var r, a = se(e);
        if (a._stackingContext)
          return a._stackingContext;
        var n = [], i = /* @__PURE__ */ new Map();
        return t = (r = t) !== null && r !== void 0 ? r : uu(e), t.forEach(function(u) {
          var l, s = se(u), c = ux(s), d = s._stackingOrder.filter(function(m) {
            var h = m.vNode;
            return !!h;
          });
          d.forEach(function(m, h) {
            var v, y = m.vNode, g = (v = d[h - 1]) === null || v === void 0 ? void 0 : v.vNode, b = K1(i, y, g);
            h === 0 && !i.get(y) && n.unshift(b), i.set(y, b);
          });
          var f = (l = d[d.length - 1]) === null || l === void 0 ? void 0 : l.vNode, p = K1(i, s, f);
          d.length || n.unshift(p), p.bgColor = c;
        }), a._stackingContext = n, n;
      }
      o(su, "_getStackingContext");
      function _a(e) {
        var t;
        if (!((t = e.descendants) !== null && t !== void 0 && t.length)) {
          var r = e.bgColor;
          return r.alpha *= e.opacity, {
            color: r,
            blendMode: e.blendMode
          };
        }
        var a = e.descendants.reduce(ix, X1()), n = Ot(a, e.bgColor, e.descendants[0].blendMode);
        return n.alpha *= e.opacity, {
          color: n,
          blendMode: e.blendMode
        };
      }
      o(_a, "_stackingContextToColor");
      function ix(e, t) {
        var r;
        e instanceof Oe ? r = e : r = _a(e).color;
        var a = _a(t).color;
        return Ot(a, r, t.blendMode);
      }
      o(ix, "reduceToColor");
      function X1(e, t) {
        var r;
        return {
          vNode: e,
          ancestor: t,
          opacity: parseFloat((r = e?.getComputedStylePropertyValue("opacity")) !== null && r !== void 0 ? r : 1),
          bgColor: new Oe(0, 0, 0, 0),
          blendMode: ox(e?.getComputedStylePropertyValue("mix-blend-mode")),
          descendants: []
        };
      }
      o(X1, "createStackingContext2");
      function ox(e) {
        return e || void 0;
      }
      o(ox, "normalizeBlendMode");
      function K1(e, t, r) {
        var a, n = e.get(r), i = (a = e.get(t)) !== null && a !== void 0 ? a : X1(t, n);
        return n && r !== t && !n.descendants.includes(i) && n.descendants.unshift(i), i;
      }
      o(K1, "addToStackingContext");
      function ux(e) {
        var t = new Oe();
        return t.parseString(e.getComputedStylePropertyValue("background-color")), t;
      }
      o(ux, "getOwnBackgroundColor2");
      function xa(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.1, a = se(e), n = a._cache.getBackgroundColor;
        if (n)
          return t.push.apply(t, ae(n.bgElms)), Ge.set("bgColor", n.incompleteData), n.bgColor;
        var i = lx(e, t, r);
        return a._cache.getBackgroundColor = {
          bgColor: i,
          bgElms: t,
          incompleteData: Ge.get("bgColor")
        }, i;
      }
      o(xa, "_getBackgroundColor2");
      function lx(e, t, r) {
        var a, n, i = uu(e);
        if (!i)
          return null;
        var u = no(e), l = (a = Hn(e, {
          minRatio: r,
          ignoreEdgeCount: !0
        })) !== null && a !== void 0 ? a : [];
        l.length && (l = [{
          color: l.reduce(ou)
        }]);
        for (var s = 0; s < i.length; s++) {
          var c = i[s], d = D.getComputedStyle(c);
          if (pn(c, d))
            return t.push(c), null;
          var f = br(d);
          if (f.alpha !== 0) {
            if (d.getPropertyValue("display") !== "inline" && !Z1(c, u))
              return t.push(c), Ge.set("bgColor", "elmPartiallyObscured"), null;
            if (t.push(c), f.alpha === 1)
              break;
          }
        }
        var p = su(e, i);
        l = p.map(_a).concat(l);
        var m = sx(e, i.includes(N.body));
        if ((n = l).unshift.apply(n, ae(m)), l.length === 0)
          return new Oe(255, 255, 255, 1);
        var h = l.reduce(function(v, y) {
          return Ot(y.color, v.color instanceof Oe ? v.color : v, y.blendMode);
        });
        return Ot(h.color instanceof Oe ? h.color : h, new Oe(255, 255, 255, 1));
      }
      o(lx, "_getBackgroundColor");
      function Z1(e, t) {
        t = Array.isArray(t) ? t : [t];
        var r = e.getBoundingClientRect(), a = r.right, n = r.bottom, i = D.getComputedStyle(e), u = i.getPropertyValue("overflow");
        return (["scroll", "auto"].includes(u) || e instanceof D.HTMLHtmlElement) && (a = r.left + e.scrollWidth, n = r.top + e.scrollHeight), t.every(function(l) {
          return l.top >= r.top && l.bottom <= n && l.left >= r.left && l.right <= a;
        });
      }
      o(Z1, "fullyEncompasses");
      function J1(e) {
        return e || void 0;
      }
      o(J1, "normalizeBlendMode2");
      function sx(e, t) {
        var r = [];
        if (!t) {
          var a = N.documentElement, n = N.body, i = D.getComputedStyle(a), u = D.getComputedStyle(n), l = br(i), s = br(u), c = s.alpha !== 0 && Z1(n, e.getBoundingClientRect());
          (s.alpha !== 0 && l.alpha === 0 || c && s.alpha !== 1) && r.unshift({
            color: s,
            blendMode: J1(u.getPropertyValue("mix-blend-mode"))
          }), l.alpha !== 0 && (!c || c && s.alpha !== 1) && r.unshift({
            color: l,
            blendMode: J1(i.getPropertyValue("mix-blend-mode"))
          });
        }
        return r;
      }
      o(sx, "getPageBackgroundColors");
      function cx(e, t) {
        if (!t || !e)
          return null;
        t.alpha < 1 && (t = Ot(t, e));
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
      }
      o(cx, "getContrast");
      var Lr = cx;
      function $n(e, t, r) {
        for (var a, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = D.getComputedStyle(e), u = [function() {
          return fx(i, n);
        }, function() {
          return dx(i);
        }, function() {
          return Hn(e, {
            minRatio: 0
          });
        }], l = [], s = 0, c = u; s < c.length; s++) {
          var d = c[s], f = d();
          if (!!f && (l = l.concat(f), f.alpha === 1))
            break;
        }
        var p = l.reduce(function(y, g) {
          return Ot(y, g);
        });
        if ((a = r) !== null && a !== void 0 || (r = xa(e, [])), r === null) {
          var m = Ge.get("bgColor");
          return Ge.set("fgColor", m), null;
        }
        var h = su(e), v = Q1(h, e);
        return Ot(px(p, v, h), new Oe(255, 255, 255, 1));
      }
      o($n, "_getForegroundColor");
      function dx(e) {
        return new Oe().parseString(e.getPropertyValue("-webkit-text-fill-color") || e.getPropertyValue("color"));
      }
      o(dx, "getTextColor");
      function fx(e, t) {
        var r = t.textStrokeEmMin, a = r === void 0 ? 0 : r, n = parseFloat(e.getPropertyValue("-webkit-text-stroke-width"));
        if (n === 0)
          return null;
        var i = e.getPropertyValue("font-size"), u = n / parseFloat(i);
        if (isNaN(u) || u < a)
          return null;
        var l = e.getPropertyValue("-webkit-text-stroke-color");
        return new Oe().parseString(l);
      }
      o(fx, "getStrokeColor");
      function px(e, t, r) {
        for (; t; ) {
          var a;
          if (t.opacity === 1 && t.ancestor) {
            t = t.ancestor;
            continue;
          }
          e.alpha *= t.opacity;
          var n = ((a = t.ancestor) === null || a === void 0 ? void 0 : a.descendants) || r;
          t.opacity !== 1 && (n = n.slice(0, n.indexOf(t)));
          var i = n.map(_a);
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
      o(px, "calculateBlendedForegroundColor");
      function Q1(e, t) {
        var r = Fe(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n, i = a.value;
            if (((n = i.vNode) === null || n === void 0 ? void 0 : n.actualNode) === t)
              return i;
            var u = Q1(i.descendants, t);
            if (u)
              return u;
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      o(Q1, "findNodeInContexts");
      function mx(e, t, r, a) {
        var n = Lr(e, t), i = a && Math.ceil(r * 72) / 96 < 14 || !a && Math.ceil(r * 72) / 96 < 18, u = i ? 4.5 : 3;
        return {
          isValid: n > u,
          contrastRatio: n,
          expectedContrastRatio: u
        };
      }
      o(mx, "hasValidContrastRatio");
      var hx = mx;
      function vx(e, t, r) {
        var a = t.ignoreUnicode, n = t.ignoreLength, i = t.ignorePseudo, u = t.boldValue, l = t.boldTextPt, s = t.largeTextPt, c = t.contrastRatio, d = t.shadowOutlineEmMax, f = t.pseudoSizeThreshold;
        if (!ot(e))
          return this.data({
            messageKey: "hidden"
          }), !0;
        var p = Tt(r, !1, !0);
        if (a && bx(p)) {
          this.data({
            messageKey: "nonBmp"
          });
          return;
        }
        var m = D.getComputedStyle(e), h = parseFloat(m.getPropertyValue("font-size")), v = m.getPropertyValue("font-weight"), y = parseFloat(v) >= u || v === "bold", g = Math.ceil(h * 72) / 96, b = y && g < l || !y && g < s, _ = b ? c.normal : c.large, x = _.expected, T = _.minThreshold, k = _.maxThreshold, O = gx(r, {
          ignorePseudo: i,
          pseudoSizeThreshold: f
        });
        if (O) {
          this.data({
            fontSize: "".concat((h * 72 / 96).toFixed(1), "pt (").concat(h, "px)"),
            fontWeight: y ? "bold" : "normal",
            messageKey: "pseudoContent",
            expectedContrastRatio: x + ":1"
          }), this.relatedNodes(O.actualNode);
          return;
        }
        var B = Hn(e, {
          minRatio: 1e-3,
          maxRatio: d
        });
        if (B === null) {
          this.data({
            messageKey: "complexTextShadows"
          });
          return;
        }
        var W = [], j = xa(e, W, d), z = $n(e, !1, j, t), $ = null, V = null, J = null;
        if (B.length === 0)
          $ = Lr(j, z);
        else if (z && j) {
          J = [].concat(ae(B), [j]).reduce(ou);
          var re = Lr(j, z), ee = Lr(j, J), Y = Lr(J, z);
          $ = Math.max(re, ee, Y), $ !== re && (V = ee > Y ? "shadowOnBgColor" : "fgOnShadowColor");
        }
        var q = $ > x;
        if (typeof T == "number" && (typeof $ != "number" || $ < T) || typeof k == "number" && (typeof $ != "number" || $ > k))
          return this.data({
            contrastRatio: $
          }), !0;
        var ie = Math.floor($ * 100) / 100, C;
        j === null ? C = Ge.get("bgColor") : q || (C = V);
        var G = ie === 1, P = p.length === 1;
        if (G ? C = Ge.set("bgColor", "equalRatio") : !q && P && !n && (C = "shortTextContent"), this.data({
          fgColor: z ? z.toHexString() : void 0,
          bgColor: j ? j.toHexString() : void 0,
          contrastRatio: ie,
          fontSize: "".concat((h * 72 / 96).toFixed(1), "pt (").concat(h, "px)"),
          fontWeight: y ? "bold" : "normal",
          messageKey: C,
          expectedContrastRatio: x + ":1",
          shadowColor: J ? J.toHexString() : void 0
        }), z === null || j === null || G || P && !n && !q) {
          C = null, Ge.clear(), this.relatedNodes(W);
          return;
        }
        return q || this.relatedNodes(W), q;
      }
      o(vx, "colorContrastEvaluate");
      function gx(e, t) {
        var r = t.pseudoSizeThreshold, a = r === void 0 ? 0.25 : r, n = t.ignorePseudo, i = n === void 0 ? !1 : n;
        if (!i) {
          var u = e.boundingClientRect, l = u.width * u.height * a;
          do {
            var s = ef(e.actualNode, ":before"), c = ef(e.actualNode, ":after");
            if (s + c > l)
              return e;
          } while (e = e.parent);
        }
      }
      o(gx, "findPseudoElement");
      var ef = Be(/* @__PURE__ */ o(function(t, r) {
        var a = D.getComputedStyle(t, r), n = /* @__PURE__ */ o(function(s, c) {
          return a.getPropertyValue(s) === c;
        }, "matchPseudoStyle");
        if (n("content", "none") || n("display", "none") || n("visibility", "hidden") || n("position", "absolute") === !1 || br(a).alpha === 0 && n("background-image", "none"))
          return 0;
        var i = tf(a.getPropertyValue("width")), u = tf(a.getPropertyValue("height"));
        return i.unit !== "px" || u.unit !== "px" ? i.value === 0 || u.value === 0 ? 0 : 1 / 0 : i.value * u.value;
      }, "getPseudoElementArea2"));
      function bx(e) {
        var t = {
          nonBmp: !0
        }, r = to(e, t), a = ne(la(e, t)) === "";
        return r && a;
      }
      o(bx, "textIsEmojis");
      function tf(e) {
        var t = /^([0-9.]+)([a-z]+)$/i, r = e.match(t) || [], a = H(r, 3), n = a[1], i = n === void 0 ? "" : n, u = a[2], l = u === void 0 ? "" : u;
        return {
          value: parseFloat(i),
          unit: l.toLowerCase()
        };
      }
      o(tf, "parseUnit");
      function rf(e, t) {
        var r = e.getRelativeLuminance(), a = t.getRelativeLuminance();
        return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
      }
      o(rf, "getContrast2");
      var yx = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function af(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return yx.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      o(af, "isBlock2");
      function wx(e, t) {
        var r = t.requiredContrastRatio, a = t.allowSameColor;
        if (af(e))
          return !1;
        for (var n = $e(e); n && n.nodeType === 1 && !af(n); )
          n = $e(n);
        if (!!n) {
          this.relatedNodes([n]);
          var i = $n(e), u = $n(n), l = xa(e), s = xa(n), c = i && u ? rf(i, u) : void 0;
          if (c && (c = Math.floor(c * 100) / 100), c && c >= r)
            return !0;
          var d = l && s ? rf(l, s) : void 0;
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
      o(wx, "linkInTextBlockEvaluate");
      var Dx = wx, _x = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function xx(e) {
        if (nf(e))
          return !1;
        for (var t = $e(e); t && t.nodeType === 1 && !nf(t); )
          t = $e(t);
        if (!!t) {
          if (this.relatedNodes([t]), U1(e, t))
            return !0;
          if (Ex(e)) {
            this.data({
              messageKey: "pseudoContent"
            });
            return;
          }
          return !1;
        }
      }
      o(xx, "linkInTextBlockStyleEvaluate");
      function nf(e) {
        var t = D.getComputedStyle(e).getPropertyValue("display");
        return _x.indexOf(t) !== -1 || t.substr(0, 6) === "table-";
      }
      o(nf, "isBlock3");
      function Ex(e) {
        for (var t = 0, r = ["before", "after"]; t < r.length; t++) {
          var a = r[t], n = D.getComputedStyle(e, ":".concat(a)), i = n.getPropertyValue("content");
          if (i !== "none")
            return !0;
        }
        return !1;
      }
      o(Ex, "hasPseudoContent");
      function Cx(e, t, r) {
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
        if (gr.stateTerms.includes(s))
          return !0;
        var c = i[s], d = r.hasAttr("type") ? ne(r.attr("type")).toLowerCase() : "text";
        return d = Bn().includes(d) ? d : "text", typeof c > "u" ? d === "text" : c.includes(d);
      }
      o(Cx, "autocompleteAppropriateEvaluate");
      var Ax = Cx;
      function Fx(e, t, r) {
        var a = r.attr("autocomplete") || "";
        return fc(a, t);
      }
      o(Fx, "autocompleteValidEvaluate");
      var Tx = Fx;
      function Rx(e) {
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
      o(Rx, "attrNonSpaceContentEvaluate");
      var kx = Rx;
      function Sx(e) {
        var t = e.some(function(r) {
          return r.result === !0;
        });
        return t && e.forEach(function(r) {
          r.result = !0;
        }), e;
      }
      o(Sx, "pageHasElmAfter");
      var Ox = Sx;
      function Mx(e, t, r) {
        if (!t || !t.selector || typeof t.selector != "string")
          throw new TypeError("has-descendant requires options.selector to be a string");
        if (t.passForModal && ca())
          return !0;
        var a = St(r, t.selector, function(n) {
          return Te(n);
        });
        return this.relatedNodes(a.map(function(n) {
          return n.actualNode;
        })), a.length > 0;
      }
      o(Mx, "hasDescendant");
      var Nx = Mx;
      function Ix(e, t, r) {
        try {
          return ne($t(r)) !== "";
        } catch {
          return;
        }
      }
      o(Ix, "hasTextContentEvaluate");
      function Px(e, t, r) {
        return oa(r, t.matcher);
      }
      o(Px, "matchesDefinitionEvaluate");
      var Lx = Px;
      function Bx(e) {
        return e.filter(function(t) {
          return t.data !== "ignored";
        });
      }
      o(Bx, "pageNoDuplicateAfter");
      var qx = Bx;
      function jx(e, t, r) {
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
          return i.actualNode.hasAttribute("role") || !Tr(i, t.nativeScopeFilter);
        })), typeof t.role == "string" && (n = n.filter(function(i) {
          return de(i) === t.role;
        })), this.relatedNodes(n.filter(function(i) {
          return i !== r;
        }).map(function(i) {
          return i.actualNode;
        })), n.length <= 1;
      }
      o(jx, "pageNoDuplicateEvaluate");
      var zx = jx;
      function Vx(e) {
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
      o(Vx, "accesskeysAfter");
      var Hx = Vx;
      function $x(e, t, r) {
        return Ht(r) || (this.data(r.attr("accesskey")), this.relatedNodes([e])), !0;
      }
      o($x, "accesskeysEvaluate");
      var Ux = $x;
      function Gx(e, t, r) {
        var a = r.tabbableElements;
        if (!a)
          return !1;
        var n = a.filter(function(i) {
          return i !== r;
        });
        return n.length > 0;
      }
      o(Gx, "focusableContentEvaluate");
      var Wx = Gx;
      function Yx(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var i = n.filter(function(u) {
          return a.includes(u.props.nodeName);
        });
        return this.relatedNodes(i.map(function(u) {
          return u.actualNode;
        })), i.length === 0 || ca() ? !0 : i.every(function(u) {
          var l = u.getComputedStylePropertyValue("pointer-events"), s = parseInt(u.getComputedStylePropertyValue("width")), c = parseInt(u.getComputedStylePropertyValue("height"));
          return u.actualNode.onfocus || (s === 0 || c === 0) && l === "none";
        }) ? void 0 : !1;
      }
      o(Yx, "focusableDisabledEvaluate");
      var Xx = Yx;
      function Kx(e, t, r) {
        if (r.hasAttr("contenteditable") && a(r))
          return !0;
        return Dt(r);
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
      o(Kx, "focusableElementEvaluate");
      var Zx = Kx;
      function Jx(e, t, r) {
        var a = r.tabbableElements.map(function(n) {
          var i = n.actualNode;
          return i;
        });
        if (!a || !a.length)
          return !0;
        if (ca()) {
          this.relatedNodes(a);
          return;
        }
        return !0;
      }
      o(Jx, "focusableModalOpenEvaluate");
      var Qx = Jx;
      function e5(e, t, r) {
        var a = r.attr("tabindex"), n = Se(r) && a > -1;
        if (!n)
          return !1;
        try {
          return !Ue(r);
        } catch {
          return;
        }
      }
      o(e5, "focusableNoNameEvaluate");
      var t5 = e5;
      function r5(e, t, r) {
        var a = ["button", "fieldset", "input", "select", "textarea"], n = r.tabbableElements;
        if (!n || !n.length)
          return !0;
        var i = n.filter(function(u) {
          return !a.includes(u.props.nodeName);
        });
        return this.relatedNodes(i.map(function(u) {
          return u.actualNode;
        })), i.length === 0 || ca() ? !0 : i.every(function(u) {
          var l = u.getComputedStylePropertyValue("pointer-events"), s = parseInt(u.getComputedStylePropertyValue("width")), c = parseInt(u.getComputedStylePropertyValue("height"));
          return u.actualNode.onfocus || (s === 0 || c === 0) && l === "none";
        }) ? void 0 : !1;
      }
      o(r5, "focusableNotTabbableEvaluate");
      var a5 = r5;
      function n5(e, t, r) {
        if (!!r.children)
          try {
            return !r.children.some(function(a) {
              return of(a);
            });
          } catch {
            return;
          }
      }
      o(n5, "frameFocusableContentEvaluate");
      function of(e) {
        if (Dt(e))
          return !0;
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return !1;
        }
        return e.children.some(function(t) {
          return of(t);
        });
      }
      o(of, "focusableDescendants");
      function i5(e) {
        var t = Pr("landmark"), r = $e(e), a = de(e);
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
      o(i5, "landmarkIsTopLevelEvaluate");
      var o5 = i5;
      function u5(e, t, r) {
        if (!!r.children)
          try {
            var a = uf(r);
            if (!a.length)
              return !0;
            var n = a.filter(l5);
            return n.length > 0 ? (this.data({
              messageKey: "notHidden"
            }), this.relatedNodes(n)) : this.relatedNodes(a), !1;
          } catch {
            return;
          }
      }
      o(u5, "noFocusableContentEvaluate");
      function uf(e) {
        if (!e.children) {
          if (e.props.nodeType === 1)
            throw new Error("Cannot determine children");
          return [];
        }
        var t = [];
        return e.children.forEach(function(r) {
          Rt(r) === "widget" && Se(r) ? t.push(r) : t.push.apply(t, ae(uf(r)));
        }), t;
      }
      o(uf, "getFocusableDescendants");
      function l5(e) {
        var t = parseInt(e.attr("tabindex"), 10);
        return !isNaN(t) && t < 0;
      }
      o(l5, "usesUnreliableHidingStrategy");
      function s5(e, t, r) {
        var a = parseInt(r.attr("tabindex"), 10);
        return isNaN(a) ? !0 : a <= 0;
      }
      o(s5, "tabindexEvaluate");
      var c5 = s5;
      function d5(e, t, r) {
        var a = r.attr("alt"), n = /^\s+$/;
        return typeof a == "string" && n.test(a);
      }
      o(d5, "altSpaceValueEvaluate");
      var f5 = d5;
      function p5(e, t, r) {
        if (["none", "presentation"].includes(de(r)))
          return !1;
        var a = it(r, t.parentSelector);
        if (!a)
          return !1;
        var n = Tt(a, !0).toLowerCase();
        return n === "" ? !1 : n === Ue(r).toLowerCase();
      }
      o(p5, "duplicateImgLabelEvaluate");
      var m5 = p5;
      function h5(e, t, r) {
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
                var s = ne(pr(l, {
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
      o(h5, "explicitEvaluate");
      var v5 = h5;
      function g5(e, t, r) {
        var a = dn(r), n = e.getAttribute("title");
        if (!a)
          return !1;
        if (!n && (n = "", e.getAttribute("aria-describedby"))) {
          var i = At(e, "aria-describedby");
          n = i.map(function(u) {
            return u ? pr(u) : "";
          }).join("");
        }
        return ne(n) === ne(a);
      }
      o(g5, "helpSameAsLabelEvaluate");
      var b5 = g5;
      function y5(e, t, r) {
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
      o(y5, "hiddenExplicitLabelEvaluate");
      var w5 = y5;
      function D5(e, t, r) {
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
      o(D5, "implicitEvaluate");
      var _5 = D5;
      function lf(e, t) {
        var r = sf(t), a = sf(e);
        return !r || !a ? !1 : r.includes(a);
      }
      o(lf, "isStringContained");
      function sf(e) {
        var t = la(e, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        });
        return ne(t);
      }
      o(sf, "curateString");
      function x5(e, t, r) {
        var a, n = t?.pixelThreshold, i = (a = t?.occurrenceThreshold) !== null && a !== void 0 ? a : t?.occuranceThreshold, u = pr(e).toLowerCase();
        if (!(ao(u) < 1)) {
          var l = ne($t(r, {
            subtreeDescendant: !0,
            ignoreIconLigature: !0,
            pixelThreshold: n,
            occurrenceThreshold: i
          })).toLowerCase();
          return l ? ao(l) < 1 ? lf(l, u) ? !0 : void 0 : lf(l, u) : !0;
        }
      }
      o(x5, "labelContentNameMismatchEvaluate");
      var E5 = x5;
      function C5(e) {
        var t = ke(e.getAttribute("id")), r = e.parentNode, a = Ye(e);
        a = a.documentElement || a;
        var n = Array.from(a.querySelectorAll('label[for="'.concat(t, '"]')));
        for (n.length && (n = n.filter(function(l) {
          return !Ht(l);
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
      o(C5, "multipleLabelEvaluate");
      var A5 = C5;
      function F5(e, t, r) {
        var a = dn(r), n = ln(r), i = r.attr("aria-describedby");
        return !a && !!(n || i);
      }
      o(F5, "titleOnlyEvaluate");
      var T5 = F5;
      function R5(e) {
        var t = [];
        return e.filter(function(r) {
          var a = /* @__PURE__ */ o(function(u) {
            return r.data.role === u.data.role && r.data.accessibleText === u.data.accessibleText;
          }, "findMatch"), n = t.find(a);
          return n ? (n.result = !1, n.relatedNodes.push(r.relatedNodes[0]), !1) : (t.push(r), r.relatedNodes = [], !0);
        });
      }
      o(R5, "landmarkIsUniqueAfter");
      var k5 = R5;
      function S5(e, t, r) {
        var a = de(e), n = Ue(r);
        return n = n ? n.toLowerCase() : null, this.data({
          role: a,
          accessibleText: n
        }), this.relatedNodes([e]), !0;
      }
      o(S5, "landmarkIsUniqueEvaluate");
      var O5 = S5;
      function cu(e) {
        return (e || "").trim() !== "";
      }
      o(cu, "hasValue");
      function M5(e, t, r) {
        var a = typeof N < "u" ? qa(N) : !1;
        if (t.attributes.includes("xml:lang") && t.attributes.includes("lang") && cu(r.attr("xml:lang")) && !cu(r.attr("lang")) && !a)
          return this.data({
            messageKey: "noXHTML"
          }), !1;
        var n = t.attributes.some(function(i) {
          return cu(r.attr(i));
        });
        return n ? !0 : (this.data({
          messageKey: "noLang"
        }), !1);
      }
      o(M5, "hasLangEvaluate");
      var N5 = M5;
      function I5(e, t, r) {
        var a = [];
        return t.attributes.forEach(function(n) {
          var i = r.attr(n);
          if (typeof i == "string") {
            var u = wr(i), l = t.value ? !t.value.map(wr).includes(u) : !qn(u);
            (u !== "" && l || i !== "" && !ne(i)) && a.push(n + '="' + r.attr(n) + '"');
          }
        }), !a.length || r.props.nodeName !== "html" && !uo(r) ? !1 : (this.data(a), !0);
      }
      o(I5, "validLangEvaluate");
      var P5 = I5;
      function L5(e, t, r) {
        var a = wr(r.attr("lang")), n = wr(r.attr("xml:lang"));
        return a === n;
      }
      o(L5, "xmlLangMismatchEvaluate");
      var B5 = L5;
      function q5(e) {
        var t = $e(e), r = t.nodeName.toUpperCase(), a = Ee(t);
        return r === "DIV" && ["presentation", "none", null].includes(a) && (t = $e(t), r = t.nodeName.toUpperCase(), a = Ee(t)), r !== "DL" ? !1 : !!(!a || ["presentation", "none", "list"].includes(a));
      }
      o(q5, "dlitemEvaluate");
      var j5 = q5;
      function z5(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, a = [], n = [];
        if (!!r.children) {
          for (var i = cf(r.children); i.length; ) {
            var u, l = i.shift(), s = l.vChild, c = l.nested;
            if (t.divGroups && !c && H5(s)) {
              if (!s.children)
                return;
              var d = cf(s.children, !0);
              i.push.apply(i, ae(d));
              continue;
            }
            var f = V5(s, c, t);
            !f || (n.includes(f) || n.push(f), (s == null || (u = s.actualNode) === null || u === void 0 ? void 0 : u.nodeType) === 1 && a.push(s.actualNode));
          }
          return n.length === 0 ? !1 : (this.data({
            values: n.join(", ")
          }), this.relatedNodes(a), !0);
        }
      }
      o(z5, "invalidChildrenEvaluate");
      function V5(e, t, r) {
        var a = r.validRoles, n = a === void 0 ? [] : a, i = r.validNodeNames, u = i === void 0 ? [] : i, l = e.props, s = l.nodeName, c = l.nodeType, d = l.nodeValue, f = t ? "div > " : "";
        if (c === 3 && d.trim() !== "")
          return f + "#text";
        if (c !== 1 || !Te(e))
          return !1;
        var p = Ee(e);
        return p ? n.includes(p) ? !1 : f + "[role=".concat(p, "]") : u.includes(s) ? !1 : f + s;
      }
      o(V5, "getInvalidSelector");
      function H5(e) {
        return e.props.nodeName === "div" && Ee(e) === null;
      }
      o(H5, "isDivGroup");
      function cf(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        return e.map(function(r) {
          return {
            vChild: r,
            nested: t
          };
        });
      }
      o(cf, "mapWithNested");
      function $5(e, t, r) {
        var a = r.parent;
        if (!!a) {
          var n = a.props.nodeName, i = Ee(a);
          return ["presentation", "none", "list"].includes(i) ? !0 : i && Sr(i) ? (this.data({
            messageKey: "roleNotValid"
          }), !1) : ["ul", "ol", "menu"].includes(n);
        }
      }
      o($5, "listitemEvaluate");
      function U5(e, t, r) {
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
      o(U5, "onlyDlitemsEvaluate");
      function G5(e, t, r) {
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
      o(G5, "onlyListitemsEvaluate");
      var W5 = G5;
      function Y5(e, t, r) {
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
      o(Y5, "structuredDlitemsEvaluate");
      var X5 = Y5;
      function K5(e, t, r) {
        var a = dt(r, "track"), n = a.some(function(i) {
          return (i.attr("kind") || "").toLowerCase() === "captions";
        });
        return n ? !1 : void 0;
      }
      o(K5, "captionEvaluate");
      var Z5 = K5, df = " > ";
      function J5(e) {
        var t = {};
        return e.filter(function(r) {
          var a = r.node.ancestry[r.node.ancestry.length - 1] !== "html";
          if (a) {
            var n = r.node.ancestry.flat(1 / 0).join(df);
            return t[n] = r, !0;
          }
          var i = r.node.ancestry.slice(0, r.node.ancestry.length - 1).flat(1 / 0).join(df);
          return t[i] && (t[i].result = !0), !1;
        });
      }
      o(J5, "frameTestedAfter");
      var Q5 = J5;
      function eE(e, t) {
        return t.isViolation ? !1 : void 0;
      }
      o(eE, "frameTestedEvaluate");
      var tE = eE;
      function rE(e, t) {
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
      o(rE, "noAutoplayAudioEvaluate");
      var aE = rE;
      function nE(e, t, r, a) {
        var n = a || {}, i = n.cssom, u = i === void 0 ? void 0 : i, l = t || {}, s = l.degreeThreshold, c = s === void 0 ? 0 : s;
        if (!u || !u.length)
          return;
        for (var d = !1, f = [], p = g(u), m = /* @__PURE__ */ o(function() {
          var $ = v[h], V = p[$], J = V.root, re = V.rules, ee = re.filter(b);
          if (!ee.length)
            return "continue";
          ee.forEach(function(Y) {
            var q = Y.cssRules;
            Array.from(q).forEach(function(ie) {
              var C = _(ie);
              if (C && ie.selectorText.toUpperCase() !== "HTML") {
                var G = Array.from(J.querySelectorAll(ie.selectorText)) || [];
                f = f.concat(G);
              }
              d = d || C;
            });
          });
        }, "_loop8"), h = 0, v = Object.keys(p); h < v.length; h++)
          var y = m();
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
        function b(z) {
          var $ = z.type, V = z.cssText;
          return $ !== 4 ? !1 : /orientation:\s*landscape/i.test(V) || /orientation:\s*portrait/i.test(V);
        }
        o(b, "isMediaRuleWithOrientation");
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
          var Y = parseFloat($[8]), q = Math.asin(Y), ie = Math.cos(q), C = Math.acos(parseFloat($[0]) / ie);
          return B(C);
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
      o(nE, "cssOrientationLockEvaluate");
      var iE = nE;
      function oE(e, t, r) {
        var a = t || {}, n = a.scaleMinimum, i = n === void 0 ? 2 : n, u = a.lowerBound, l = u === void 0 ? !1 : u, s = r.attr("content") || "";
        if (!s)
          return !0;
        var c = s.split(/[;,]/).reduce(function(f, p) {
          var m = p.trim();
          if (!m)
            return f;
          var h = m.split("="), v = H(h, 2), y = v[0], g = v[1];
          if (!y || !g)
            return f;
          var b = y.toLowerCase().trim(), _ = g.toLowerCase().trim();
          return b === "maximum-scale" && _ === "yes" && (_ = 1), b === "maximum-scale" && parseFloat(_) < 0 || (f[b] = _), f;
        }, {});
        if (l && c["maximum-scale"] && parseFloat(c["maximum-scale"]) < l)
          return !0;
        if (!l && c["user-scalable"] === "no")
          return this.data("user-scalable=no"), !1;
        var d = parseFloat(c["user-scalable"]);
        return !l && c["user-scalable"] && (d || d === 0) && d > -1 && d < 1 ? (this.data("user-scalable"), !1) : c["maximum-scale"] && parseFloat(c["maximum-scale"]) < i ? (this.data("maximum-scale"), !1) : !0;
      }
      o(oE, "metaViewportScaleEvaluate");
      var uE = oE, lE = 0.05;
      function sE(e, t, r) {
        var a = t?.minOffset || 24, n = [], i = a, u = Fe(an(r, a)), l;
        try {
          for (u.s(); !(l = u.n()).done; ) {
            var s = l.value;
            if (!(Rt(s) !== "widget" || !Se(s))) {
              var c = cE(ds(r, s, a / 2)) * 2;
              c + lE >= a || (i = Math.min(i, c), n.push(s));
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
        })), !n.some(Dt)) {
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
        }), Dt(r) ? !1 : void 0;
      }
      o(sE, "targetOffsetEvaluate");
      function cE(e) {
        return Math.round(e * 10) / 10;
      }
      o(cE, "roundToSingleDecimal");
      function dE(e, t, r) {
        var a = t?.minSize || 24, n = r.boundingClientRect, i = dr.bind(null, a), u = an(r), l = fE(r, u), s = pE(r, u), c = s.fullyObscuringElms, d = s.partialObscuringElms;
        if (c.length && !l.length)
          return this.relatedNodes(Un(c)), this.data({
            messageKey: "obscured"
          }), !0;
        var f = Dt(r) ? !1 : void 0;
        if (!i(n) && !l.length)
          return this.data(pe({
            minSize: a
          }, du(n))), f;
        var p = vE(d), m = mE(r, p);
        if (l.length && (c.length || !i(m || n))) {
          this.data({
            minSize: a,
            messageKey: "contentOverflow"
          }), this.relatedNodes(Un(l));
          return;
        }
        if (p.length !== 0 && !i(m)) {
          var h = p.every(Dt), v = "partiallyObscured".concat(h ? "" : "NonTabbable");
          return this.data(pe({
            messageKey: v,
            minSize: a
          }, du(m))), this.relatedNodes(Un(p)), h ? f : void 0;
        }
        return this.data(pe({
          minSize: a
        }, du(m || n))), this.relatedNodes(Un(p)), !0;
      }
      o(dE, "targetSize");
      function fE(e, t) {
        return t.filter(function(r) {
          return !ff(r, e) && pf(e, r);
        });
      }
      o(fE, "filterOverflowingContent");
      function pE(e, t) {
        var r = [], a = [], n = Fe(t), i;
        try {
          for (n.s(); !(i = n.n()).done; ) {
            var u = i.value;
            !pf(e, u) && Ni(e, u) && gE(u) !== "none" && (ff(e, u) ? r.push(u) : a.push(u));
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
      o(pE, "filterByElmsOverlap");
      function mE(e, t) {
        var r = e.boundingClientRect;
        if (t.length === 0)
          return null;
        var a = t.map(function(i) {
          var u = i.boundingClientRect;
          return u;
        }), n = Ii(r, a);
        return hE(n);
      }
      o(mE, "getLargestUnobscuredArea");
      function hE(e, t) {
        return e.reduce(function(r, a) {
          var n = dr(t, r), i = dr(t, a);
          if (n !== i)
            return n ? r : a;
          var u = r.width * r.height, l = a.width * a.height;
          return u > l ? r : a;
        });
      }
      o(hE, "getLargestRect2");
      function vE(e) {
        return e.filter(function(t) {
          return Rt(t) === "widget" && Se(t);
        });
      }
      o(vE, "filterFocusableWidgets");
      function ff(e, t) {
        var r = e.boundingClientRect, a = t.boundingClientRect;
        return r.top >= a.top && r.left >= a.left && r.bottom <= a.bottom && r.right <= a.right;
      }
      o(ff, "isEnclosedRect2");
      function gE(e) {
        return e.getComputedStylePropertyValue("pointer-events");
      }
      o(gE, "getCssPointerEvents");
      function du(e) {
        return {
          width: Math.round(e.width * 10) / 10,
          height: Math.round(e.height * 10) / 10
        };
      }
      o(du, "toDecimalSize");
      function pf(e, t) {
        return e.actualNode.contains(t.actualNode) && !Dt(t);
      }
      o(pf, "isDescendantNotInTabOrder2");
      function Un(e) {
        return e.map(function(t) {
          var r = t.actualNode;
          return r;
        });
      }
      o(Un, "mapActualNodes");
      function bE(e) {
        var t = wE(e);
        return e.forEach(function(r) {
          r.result = yE(r, t);
        }), e;
      }
      o(bE, "headingOrderAfter");
      function yE(e, t) {
        var r, a, n, i, u = mf(t, e.node.ancestry), l = (r = (a = t[u]) === null || a === void 0 ? void 0 : a.level) !== null && r !== void 0 ? r : -1, s = (n = (i = t[u - 1]) === null || i === void 0 ? void 0 : i.level) !== null && n !== void 0 ? n : -1;
        if (u === 0)
          return !0;
        if (l !== -1)
          return l - s <= 1;
      }
      o(yE, "getHeadingOrderOutcome");
      function wE(e) {
        e = ae(e), e.sort(function(r, a) {
          var n = r.node, i = a.node;
          return n.ancestry.length - i.ancestry.length;
        });
        var t = e.reduce(DE, []);
        return t.filter(function(r) {
          var a = r.level;
          return a !== -1;
        });
      }
      o(wE, "getHeadingOrder");
      function DE(e, t) {
        var r, a = (r = t.data) === null || r === void 0 ? void 0 : r.headingOrder, n = hf(t.node.ancestry, 1);
        if (!a)
          return e;
        var i = a.map(function(l) {
          return xE(l, n);
        }), u = _E(e, n);
        return u === -1 ? e.push.apply(e, ae(i)) : e.splice.apply(e, [u, 0].concat(ae(i))), e;
      }
      o(DE, "mergeHeadingOrder");
      function _E(e, t) {
        for (; t.length; ) {
          var r = mf(e, t);
          if (r !== -1)
            return r;
          t = hf(t, 1);
        }
        return -1;
      }
      o(_E, "getFrameIndex");
      function mf(e, t) {
        return e.findIndex(function(r) {
          return Go(r.ancestry, t);
        });
      }
      o(mf, "findHeadingOrderIndex");
      function xE(e, t) {
        var r = t.concat(e.ancestry);
        return pe({}, e, {
          ancestry: r
        });
      }
      o(xE, "addFrameToHeadingAncestry");
      function hf(e, t) {
        return e.slice(0, e.length - t);
      }
      o(hf, "shortenArray");
      function EE(e) {
        var t = de(e), r = t && t.includes("heading"), a = e.attr("aria-level"), n = parseInt(a, 10), i = e.props.nodeName.match(/h(\d)/) || [], u = H(i, 2), l = u[1];
        return r ? l && !a ? parseInt(l, 10) : isNaN(n) || n < 1 ? l ? parseInt(l, 10) : 2 : n || -1 : -1;
      }
      o(EE, "getLevel");
      function CE() {
        var e = le.get("headingOrder");
        if (e)
          return !0;
        var t = "h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame", r = St(w._tree[0], t, Te);
        return e = r.map(function(a) {
          return {
            ancestry: [za(a.actualNode)],
            level: EE(a)
          };
        }), this.data({
          headingOrder: e
        }), le.set("headingOrder", r), !0;
      }
      o(CE, "headingOrderEvaluate");
      var AE = CE;
      function vf(e, t) {
        if (!e || !t)
          return !1;
        var r = Object.getOwnPropertyNames(e), a = Object.getOwnPropertyNames(t);
        if (r.length !== a.length)
          return !1;
        var n = r.every(function(i) {
          var u = e[i], l = t[i];
          return S(u) !== S(l) ? !1 : S(u) === "object" || S(l) === "object" ? vf(u, l) : u === l;
        });
        return n;
      }
      o(vf, "isIdenticalObject");
      function FE(e) {
        if (e.length < 2)
          return e;
        for (var t = e.filter(function(l) {
          var s = l.result;
          return s !== void 0;
        }), r = [], a = {}, n = /* @__PURE__ */ o(function(s) {
          var c, d = t[s], f = d.data, p = f.name, m = f.urlProps;
          if (a[p])
            return "continue";
          var h = t.filter(function(y, g) {
            var b = y.data;
            return b.name === p && g !== s;
          }), v = h.every(function(y) {
            var g = y.data;
            return vf(g.urlProps, m);
          });
          h.length && !v && (d.result = void 0), d.relatedNodes = [], (c = d.relatedNodes).push.apply(c, ae(h.map(function(y) {
            return y.relatedNodes[0];
          }))), a[p] = h, r.push(d);
        }, "_loop9"), i = 0; i < t.length; i++)
          var u = n(i);
        return r;
      }
      o(FE, "identicalLinksSamePurposeAfter");
      var TE = FE, gf = {};
      gt(gf, {
        aria: /* @__PURE__ */ o(function() {
          return F1;
        }, "aria"),
        color: /* @__PURE__ */ o(function() {
          return H1;
        }, "color"),
        dom: /* @__PURE__ */ o(function() {
          return ki;
        }, "dom"),
        forms: /* @__PURE__ */ o(function() {
          return bf;
        }, "forms"),
        matches: /* @__PURE__ */ o(function() {
          return oa;
        }, "matches"),
        math: /* @__PURE__ */ o(function() {
          return ss;
        }, "math"),
        standards: /* @__PURE__ */ o(function() {
          return z1;
        }, "standards"),
        table: /* @__PURE__ */ o(function() {
          return wf;
        }, "table"),
        text: /* @__PURE__ */ o(function() {
          return aa;
        }, "text"),
        utils: /* @__PURE__ */ o(function() {
          return oi;
        }, "utils")
      });
      var bf = {};
      gt(bf, {
        isAriaCombobox: /* @__PURE__ */ o(function() {
          return tc;
        }, "isAriaCombobox"),
        isAriaListbox: /* @__PURE__ */ o(function() {
          return ec;
        }, "isAriaListbox"),
        isAriaRange: /* @__PURE__ */ o(function() {
          return rc;
        }, "isAriaRange"),
        isAriaTextbox: /* @__PURE__ */ o(function() {
          return Qs;
        }, "isAriaTextbox"),
        isDisabled: /* @__PURE__ */ o(function() {
          return Ea;
        }, "isDisabled"),
        isNativeSelect: /* @__PURE__ */ o(function() {
          return Js;
        }, "isNativeSelect"),
        isNativeTextbox: /* @__PURE__ */ o(function() {
          return Zs;
        }, "isNativeTextbox")
      });
      var RE = ["fieldset", "button", "select", "input", "textarea"];
      function yf(e) {
        var t = e._isDisabled;
        if (typeof t == "boolean")
          return t;
        var r = e.props.nodeName, a = e.attr("aria-disabled");
        return RE.includes(r) && e.hasAttr("disabled") ? t = !0 : a ? t = a.toLowerCase() === "true" : e.parent ? t = yf(e.parent) : t = !1, e._isDisabled = t, t;
      }
      o(yf, "isDisabled");
      var Ea = yf, wf = {};
      gt(wf, {
        getAllCells: /* @__PURE__ */ o(function() {
          return fu;
        }, "getAllCells"),
        getCellPosition: /* @__PURE__ */ o(function() {
          return un;
        }, "getCellPosition"),
        getHeaders: /* @__PURE__ */ o(function() {
          return Gn;
        }, "getHeaders"),
        getScope: /* @__PURE__ */ o(function() {
          return Wi;
        }, "getScope"),
        isColumnHeader: /* @__PURE__ */ o(function() {
          return Or;
        }, "isColumnHeader"),
        isDataCell: /* @__PURE__ */ o(function() {
          return _f;
        }, "isDataCell"),
        isDataTable: /* @__PURE__ */ o(function() {
          return Wn;
        }, "isDataTable"),
        isHeader: /* @__PURE__ */ o(function() {
          return IE;
        }, "isHeader"),
        isRowHeader: /* @__PURE__ */ o(function() {
          return Mr;
        }, "isRowHeader"),
        toArray: /* @__PURE__ */ o(function() {
          return Pt;
        }, "toArray"),
        toGrid: /* @__PURE__ */ o(function() {
          return Pt;
        }, "toGrid"),
        traverse: /* @__PURE__ */ o(function() {
          return pu;
        }, "traverse")
      });
      function kE(e) {
        var t, r, a, n, i = [];
        for (t = 0, a = e.rows.length; t < a; t++)
          for (r = 0, n = e.rows[t].cells.length; r < n; r++)
            i.push(e.rows[t].cells[r]);
        return i;
      }
      o(kE, "getAllCells");
      var fu = kE;
      function Df(e, t, r) {
        for (var a = e === "row" ? "_rowHeaders" : "_colHeaders", n = e === "row" ? Mr : Or, i = r[t.y][t.x], u = i.colSpan - 1, l = i.getAttribute("rowspan"), s = parseInt(l) === 0 || i.rowspan === 0 ? r.length : i.rowSpan, c = s - 1, d = t.y + c, f = t.x + u, p = e === "row" ? t.y : 0, m = e === "row" ? 0 : t.x, h, v = [], y = d; y >= p && !h; y--)
          for (var g = f; g >= m; g--) {
            var b = r[y] ? r[y][g] : void 0;
            if (!!b) {
              var _ = w.utils.getNodeFromTree(b);
              if (_[a]) {
                h = _[a];
                break;
              }
              v.push(b);
            }
          }
        return h = (h || []).concat(v.filter(n)), v.forEach(function(x) {
          var T = w.utils.getNodeFromTree(x);
          T[a] = h;
        }), h;
      }
      o(Df, "traverseForHeaders");
      function SE(e, t) {
        if (e.getAttribute("headers")) {
          var r = At(e, "headers");
          if (r.filter(function(u) {
            return u;
          }).length)
            return r;
        }
        t || (t = Pt(Rr(e, "table")));
        var a = un(e, t), n = Df("row", a, t), i = Df("col", a, t);
        return [].concat(n, i).reverse();
      }
      o(SE, "getHeaders");
      var Gn = SE;
      function OE(e) {
        if (!e.children.length && !e.textContent.trim())
          return !1;
        var t = e.getAttribute("role");
        return Sr(t) ? ["cell", "gridcell"].includes(t) : e.nodeName.toUpperCase() === "TD";
      }
      o(OE, "isDataCell");
      var _f = OE;
      function ME(e) {
        var t = (e.getAttribute("role") || "").toLowerCase();
        if ((t === "presentation" || t === "none") && !Se(e))
          return !1;
        if (e.getAttribute("contenteditable") === "true" || Rr(e, '[contenteditable="true"]') || t === "grid" || t === "treegrid" || t === "table" || Rt(t) === "landmark")
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
        return i >= 20 ? !0 : !(Oi(e).width > Za(D).width * 0.95 || n < 10 || e.querySelector("object, embed, iframe, applet"));
      }
      o(ME, "isDataTable");
      var Wn = ME;
      function NE(e) {
        if (Or(e) || Mr(e))
          return !0;
        if (e.getAttribute("id")) {
          var t = ke(e.getAttribute("id"));
          return !!N.querySelector('[headers~="'.concat(t, '"]'));
        }
        return !1;
      }
      o(NE, "isHeader");
      var IE = NE;
      function xf(e, t, r, a) {
        var n, i = r[t.y] ? r[t.y][t.x] : void 0;
        return i ? typeof a == "function" && (n = a(i, t, r), n === !0) ? [i] : (n = xf(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a), n.unshift(i), n) : [];
      }
      o(xf, "traverseTable");
      function PE(e, t, r, a) {
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
        return xf(e, {
          x: t.x + e.x,
          y: t.y + e.y
        }, r, a);
      }
      o(PE, "traverse");
      var pu = PE;
      function LE(e, t, r) {
        var a = aa.accessibleTextVirtual(r), n = aa.sanitize(aa.removeUnicode(a, {
          emoji: !0,
          nonBmp: !0,
          punctuations: !0
        })).toLowerCase();
        if (!!n) {
          var i = {
            name: n,
            urlProps: ki.urlPropsFromAttribute(e, "href")
          };
          return this.data(i), this.relatedNodes([e]), !0;
        }
      }
      o(LE, "identicalLinksSamePurposeEvaluate");
      var BE = LE;
      function qE(e, t, r) {
        var a = dt(r, "a[href]");
        return a.some(function(n) {
          return /^#[^/!]/.test(n.attr("href"));
        });
      }
      o(qE, "internalLinkPresentEvaluate");
      var jE = qE, zE = /[;,\s]/, VE = /^[0-9.]+$/;
      function HE(e, t, r) {
        var a = t || {}, n = a.minDelay, i = a.maxDelay, u = (r.attr("content") || "").trim(), l = u.split(zE), s = H(l, 1), c = s[0];
        if (!c.match(VE))
          return !0;
        var d = parseFloat(c);
        return this.data({
          redirectDelay: d
        }), typeof n == "number" && d <= t.minDelay || typeof i == "number" && d > t.maxDelay;
      }
      o(HE, "metaRefreshEvaluate");
      function $E(e) {
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
      o($E, "normalizeFontWeight");
      function UE(e) {
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
      o(UE, "getTextContainer");
      function mu(e) {
        var t = D.getComputedStyle(UE(e));
        return {
          fontWeight: $E(t.getPropertyValue("font-weight")),
          fontSize: parseInt(t.getPropertyValue("font-size")),
          isItalic: t.getPropertyValue("font-style") === "italic"
        };
      }
      o(mu, "getStyleValues");
      function Ef(e, t, r) {
        return r.reduce(function(a, n) {
          return a || (!n.size || e.fontSize / n.size > t.fontSize) && (!n.weight || e.fontWeight - n.weight > t.fontWeight) && (!n.italic || e.isItalic && !t.isItalic);
        }, !1);
      }
      o(Ef, "isHeaderStyle");
      function GE(e, t, r) {
        var a = Array.from(e.parentNode.children), n = a.indexOf(e);
        t = t || {};
        var i = t.margins || [], u = a.slice(n + 1).find(function(y) {
          return y.nodeName.toUpperCase() === "P";
        }), l = a.slice(0, n).reverse().find(function(y) {
          return y.nodeName.toUpperCase() === "P";
        }), s = mu(e), c = u ? mu(u) : null, d = l ? mu(l) : null, f = t.passLength, p = t.failLength, m = e.textContent.trim().length, h = u?.textContent.trim().length;
        if (m > h * f || !c || !Ef(s, c, i))
          return !0;
        var v = Tr(r, "blockquote");
        if (!(v && v.nodeName.toUpperCase() === "BLOCKQUOTE") && !(d && !Ef(s, d, i)) && !(m > h * p))
          return !1;
      }
      o(GE, "pAsHeadingEvaluate");
      var WE = GE;
      function YE(e) {
        var t = e.filter(function(r) {
          return r.data.isIframe;
        });
        return e.forEach(function(r) {
          if (!(r.result || r.node.ancestry.length === 1)) {
            var a = r.node.ancestry.slice(0, -1), n = Fe(t), i;
            try {
              for (n.s(); !(i = n.n()).done; ) {
                var u = i.value;
                if (Go(a, u.node.ancestry)) {
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
      o(YE, "regionAfter");
      var XE = YE, KE = ["alert", "log", "status"];
      function ZE(e, t, r) {
        this.data({
          isIframe: ["iframe", "frame"].includes(r.props.nodeName)
        });
        var a = le.get("regionlessNodes", function() {
          return JE(t);
        });
        return !a.includes(r);
      }
      o(ZE, "regionEvaluate");
      function JE(e) {
        var t = Cf(w._tree[0], e).map(function(r) {
          for (; r.parent && !r.parent._hasRegionDescendant && r.parent.actualNode !== N.body; )
            r = r.parent;
          return r;
        }).filter(function(r, a, n) {
          return n.indexOf(r) === a;
        });
        return t;
      }
      o(JE, "getRegionlessNodes");
      function Cf(e, t) {
        var r = e.actualNode;
        if (de(e) === "button" || QE(e, t) || ["iframe", "frame"].includes(e.props.nodeName) || Oo(e.actualNode) && zi(e.actualNode, "href") || !Te(r)) {
          for (var a = e; a; )
            a._hasRegionDescendant = !0, a = a.parent;
          return ["iframe", "frame"].includes(e.props.nodeName) ? [e] : [];
        } else
          return r !== N.body && fn(r, !0) ? [e] : e.children.filter(function(n) {
            var i = n.actualNode;
            return i.nodeType === 1;
          }).map(function(n) {
            return Cf(n, t);
          }).reduce(function(n, i) {
            return n.concat(i);
          }, []);
      }
      o(Cf, "findRegionlessElms");
      function QE(e, t) {
        var r = e.actualNode, a = de(e), n = (r.getAttribute("aria-live") || "").toLowerCase().trim(), i = Pr("landmark");
        return !!(["assertive", "polite"].includes(n) || KE.includes(a) || i.includes(a) || t.regionMatcher && oa(e, t.regionMatcher));
      }
      o(QE, "isRegion");
      function eC(e) {
        var t = zi(e, "href");
        return t ? Te(t) || void 0 : !1;
      }
      o(eC, "skipLinkEvaluate");
      var tC = eC;
      function rC(e) {
        var t = {};
        return e.forEach(function(r) {
          t[r.data] = t[r.data] !== void 0 ? ++t[r.data] : 0;
        }), e.forEach(function(r) {
          r.result = !!t[r.data];
        }), e;
      }
      o(rC, "uniqueFrameTitleAfter");
      var aC = rC;
      function nC(e, t, r) {
        var a = ne(r.attr("title")).toLowerCase();
        return this.data(a), !0;
      }
      o(nC, "uniqueFrameTitleEvaluate");
      var iC = nC;
      function oC(e) {
        var t = [];
        return e.filter(function(r) {
          return t.indexOf(r.data) === -1 ? (t.push(r.data), !0) : !1;
        });
      }
      o(oC, "duplicateIdAfter");
      var uC = oC;
      function lC(e) {
        var t = e.getAttribute("id").trim();
        if (!t)
          return !0;
        var r = Ye(e), a = Array.from(r.querySelectorAll('[id="'.concat(ke(t), '"]'))).filter(function(n) {
          return n !== e;
        });
        return a.length && this.relatedNodes(a), this.data(t), a.length === 0;
      }
      o(lC, "duplicateIdEvaluate");
      var sC = lC;
      function cC(e, t, r) {
        return !!ne(ia(r));
      }
      o(cC, "ariaLabelEvaluate");
      var dC = cC;
      function fC(e, t, r) {
        try {
          return !!ne(na(r));
        } catch {
          return;
        }
      }
      o(fC, "ariaLabelledbyEvaluate");
      var pC = fC;
      function mC(e, t) {
        var r = t.cssProperties.filter(function(a) {
          if (e.style.getPropertyPriority(a) === "important")
            return a;
        });
        return r.length > 0 ? (this.data(r), !1) : !0;
      }
      o(mC, "avoidInlineSpacingEvaluate");
      var hC = mC;
      function vC() {
        var e = N.title;
        return !!ne(e);
      }
      o(vC, "docHasTitleEvaluate");
      var gC = vC;
      function bC() {
      }
      o(bC, "existsEvaluate");
      var yC = bC;
      function wC(e, t, r) {
        var a = r.props.nodeName;
        return ["img", "input", "area"].includes(a) ? r.hasAttr("alt") : !1;
      }
      o(wC, "hasAltEvaluate");
      var DC = wC;
      function _C(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.minValue, i = t.maxValue, u = t.normalValue, l = u === void 0 ? 0 : u, s = t.noImportant, c = t.multiLineOnly;
        if (!s && e.style.getPropertyPriority(r) !== "important" || c && !xc(e))
          return !0;
        var d = {};
        typeof n == "number" && (d.minValue = n), typeof i == "number" && (d.maxValue = i);
        var f = e.style.getPropertyValue(r);
        if (["inherit", "unset", "revert", "revert-layer"].includes(f))
          return this.data(pe({
            value: f
          }, d)), !0;
        var p = xC(e, {
          absoluteValues: a,
          cssProperty: r,
          normalValue: l
        });
        if (this.data(pe({
          value: p
        }, d)), typeof p == "number")
          return (typeof n != "number" || p >= n) && (typeof i != "number" || p <= i);
      }
      o(_C, "inlineStyleProperty");
      function xC(e, t) {
        var r = t.cssProperty, a = t.absoluteValues, n = t.normalValue, i = D.getComputedStyle(e), u = i.getPropertyValue(r);
        if (u === "normal")
          return n;
        var l = parseFloat(u);
        if (a)
          return l;
        var s = parseFloat(i.getPropertyValue("font-size")), c = Math.round(l / s * 100) / 100;
        return isNaN(c) ? u : c;
      }
      o(xC, "getNumberValue");
      function EC(e) {
        return ot(e);
      }
      o(EC, "isOnScreenEvaluate");
      var CC = EC;
      function AC(e, t, r) {
        var a = r.props.nodeName, n = (r.attr("type") || "").toLowerCase(), i = r.attr("value");
        return i && this.data({
          messageKey: "has-label"
        }), a === "input" && ["submit", "reset"].includes(n) ? i === null : !1;
      }
      o(AC, "nonEmptyIfPresentEvaluate");
      var FC = AC;
      function TC(e, t, r) {
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
        var i = mr().some(function(s) {
          return r.hasAttr(s);
        }), u = Se(r), l;
        return i && !u ? l = "globalAria" : !i && u ? l = "focusable" : l = "both", this.data({
          messageKey: l,
          role: n
        }), !1;
      }
      o(TC, "presentationalRoleEvaluate");
      function RC(e, t, r) {
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
            var n = $t(a, {
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
      o(RC, "svgNonEmptyTitleEvaluate");
      var kC = RC;
      function SC(e) {
        var t = Pt(e), r = t[0];
        return t.length <= 1 || r.length <= 1 || e.rows.length <= 1 ? !0 : r.reduce(function(a, n, i) {
          return a || n !== r[i + 1] && r[i + 1] !== void 0;
        }, !1);
      }
      o(SC, "captionFakedEvaluate");
      var OC = SC;
      function MC(e) {
        return wc(N) ? e.nodeName.toUpperCase() === "TH" : !0;
      }
      o(MC, "html5ScopeEvaluate");
      var NC = MC, IC = PC;
      function PC(e, t, r) {
        if (r.children !== void 0) {
          var a = r.attr("summary"), n = r.children.find(LC), i = n ? ne($t(n)) : !1;
          return !i || !a ? !1 : ne(a).toLowerCase() === ne(i).toLowerCase();
        }
      }
      o(PC, "sameCaptionSummaryEvaluate");
      function LC(e) {
        return e.props.nodeName === "caption";
      }
      o(LC, "isCaptionNode");
      function BC(e, t) {
        var r = e.getAttribute("scope").toLowerCase();
        return t.values.indexOf(r) !== -1;
      }
      o(BC, "scopeValueEvaluate");
      var qC = BC;
      function jC(e) {
        var t = [], r = fu(e), a = Pt(e);
        return r.forEach(function(n) {
          if (fn(n) && _f(n) && !I1(n)) {
            var i = Gn(n, a).some(function(u) {
              return u !== null && !!fn(u);
            });
            i || t.push(n);
          }
        }), t.length ? (this.relatedNodes(t), !1) : !0;
      }
      o(jC, "tdHasHeaderEvaluate");
      var zC = jC;
      function VC(e) {
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
      o(VC, "tdHeadersAttrEvaluate");
      function HC(e) {
        var t = fu(e), r = this, a = [];
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
            var s = un(l, i), c = !1;
            Or(l) && (c = pu("down", s, i).find(function(d) {
              return !Or(d) && Gn(d, i).includes(l);
            })), !c && Mr(l) && (c = pu("right", s, i).find(function(d) {
              return !Mr(d) && Gn(d, i).includes(l);
            })), c || r.relatedNodes(l), u = u && c;
          }
        }), u ? !0 : void 0;
      }
      o(HC, "thHasDataCellsEvaluate");
      var $C = HC;
      function UC(e, t, r) {
        var a = ["SCRIPT", "HEAD", "TITLE", "NOSCRIPT", "STYLE", "TEMPLATE"];
        if (!a.includes(e.nodeName.toUpperCase()) && sa(r)) {
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
      o(UC, "hiddenContentEvaluate");
      var GC = UC;
      function WC(e, t) {
        var r = /^aria-/, a = t.attrNames;
        if (a.length) {
          for (var n = 0, i = a.length; n < i; n++)
            if (r.test(a[n]))
              return !0;
        }
        return !1;
      }
      o(WC, "ariaAllowedAttrMatches");
      var YC = WC;
      function XC(e, t) {
        return Ee(t, {
          dpub: !0,
          fallback: !0
        }) !== null;
      }
      o(XC, "ariaAllowedRoleMatches");
      var KC = XC;
      function ZC(e, t) {
        var r = /^aria-/;
        return t.attrNames.some(function(a) {
          return r.test(a);
        });
      }
      o(ZC, "ariaHasAttrMatches");
      var JC = ZC;
      function Af(e) {
        return e ? e.getAttribute("aria-hidden") === "true" ? !1 : Af($e(e)) : !0;
      }
      o(Af, "shouldMatchElement");
      function QC(e) {
        return Af($e(e));
      }
      o(QC, "ariaHiddenFocusMatches");
      var eA = QC;
      function tA(e, t) {
        var r = Ee(t, {
          dpub: !0
        });
        return !!nu(r);
      }
      o(tA, "ariaRequiredChildrenMatches");
      var rA = tA;
      function aA(e, t) {
        var r = Ee(t);
        return !!au(r);
      }
      o(aA, "ariaRequiredParentMatches");
      var nA = aA;
      function iA(e, t) {
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
      o(iA, "autocompleteMatches");
      var oA = iA;
      function uA(e, t, r) {
        return r.initiator;
      }
      o(uA, "isInitiatorMatches");
      var Ff = uA;
      function lA(e, t, r) {
        return Ff(e, t, r) ? !!e.querySelector("a[href]") : !0;
      }
      o(lA, "bypassMatches");
      var sA = lA;
      function cA(e, t) {
        var r = t.props, a = r.nodeName, n = r.type;
        if (a === "option" || a === "select" && !e.options.length)
          return !1;
        var i = ["hidden", "range", "color", "checkbox", "radio", "image"];
        if (a === "input" && i.includes(n) || Ea(t) || nn(t))
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
            }, !Mo(c, e))
              return !1;
          }
          return !0;
        }
        var d = Tr(t, "label");
        if (a === "label" || d) {
          var f = d || e, p = d ? se(d) : t;
          if (f.htmlFor) {
            var m = Ye(f), h = m.getElementById(f.htmlFor), v = h && se(h);
            if (v && Ea(v))
              return !1;
          }
          var y = 'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea', g = dt(p, y)[0];
          if (g && Ea(g))
            return !1;
        }
        for (var b = [], _ = t; _; ) {
          if (_.props.id) {
            var x = eu(_).filter(function(z) {
              return Xe(z.getAttribute("aria-labelledby") || "").includes(_.props.id);
            }).map(function(z) {
              return se(z);
            });
            b.push.apply(b, ae(x));
          }
          _ = _.parent;
        }
        if (b.length > 0 && b.every(Ea) || !pA(t))
          return !1;
        for (var T = N.createRange(), k = t.children, O = 0; O < k.length; O++) {
          var B = k[O];
          B.actualNode.nodeType === 3 && ne(B.actualNode.nodeValue) !== "" && T.selectNodeContents(B.actualNode);
        }
        for (var W = T.getClientRects(), j = 0; j < W.length; j++)
          if (Mo(W[j], e))
            return !0;
        return !1;
      }
      o(cA, "colorContrastMatches");
      var dA = cA, fA = {
        emoji: !0,
        nonBmp: !1,
        punctuations: !0
      };
      function pA(e) {
        var t = Tt(e, !1, !0);
        return t === "" || la(t, fA) === "" ? !1 : e.children.some(function(r) {
          return r.props.nodeName === "#text" && !ro(r);
        });
      }
      o(pA, "hasRealTextChildren");
      function mA(e) {
        if (Wn(e)) {
          var t = Pt(e);
          return t.length >= 3 && t[0].length >= 3 && t[1].length >= 3 && t[2].length >= 3;
        }
        return !1;
      }
      o(mA, "dataTableLargeMatches");
      var hA = mA;
      function vA(e) {
        return Wn(e);
      }
      o(vA, "dataTableMatches");
      var gA = vA;
      function bA(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(ke(t), '"]'), a = Array.from(Ye(e).querySelectorAll(r));
        return !jn(e) && a.some(Se);
      }
      o(bA, "duplicateIdActiveMatches");
      var yA = bA;
      function wA(e) {
        return jn(e);
      }
      o(wA, "duplicateIdAriaMatches");
      var DA = wA;
      function _A(e) {
        var t = e.getAttribute("id").trim(), r = '*[id="'.concat(ke(t), '"]'), a = Array.from(Ye(e).querySelectorAll(r));
        return !jn(e) && a.every(function(n) {
          return !Se(n);
        });
      }
      o(_A, "duplicateIdMiscMatches");
      var xA = _A;
      function EA(e, t, r) {
        var a, n;
        return !r.initiator && !r.focusable && ((a = r.size) === null || a === void 0 ? void 0 : a.width) * ((n = r.size) === null || n === void 0 ? void 0 : n.height) > 1;
      }
      o(EA, "frameFocusableContentMatches");
      var CA = EA;
      function AA(e) {
        var t = e.getAttribute("title");
        return !!ne(t);
      }
      o(AA, "frameTitleHasTextMatches");
      var FA = AA;
      function TA(e, t) {
        return Ft(t, {
          chromium: !0
        }) !== null;
      }
      o(TA, "hasImplicitChromiumRoleMatches");
      var RA = TA;
      function kA(e, t) {
        return de(t) === "heading";
      }
      o(kA, "headingMatches");
      function SA(e, t) {
        try {
          var r = t.props.nodeName;
          return r === "svg" ? !0 : !!it(t, "svg");
        } catch {
          return !1;
        }
      }
      o(SA, "svgNamespaceMatches");
      var hu = SA;
      function OA(e, t) {
        return !hu(e, t);
      }
      o(OA, "htmlNamespaceMatches");
      var MA = OA;
      function NA(e, t) {
        var r = !!Ue(t);
        if (!r)
          return !1;
        var a = de(e);
        return !(a && a !== "link");
      }
      o(NA, "identicalLinksSamePurposeMatches");
      var IA = NA;
      function PA(e) {
        return gc(e);
      }
      o(PA, "insertedIntoFocusOrderMatches");
      var LA = PA;
      function BA(e) {
        return ot(e);
      }
      o(BA, "hasVisibleTextMatches");
      function qA(e, t) {
        return ot(t);
      }
      o(qA, "isVisibleOnScreenMatches");
      function jA(e, t) {
        var r = de(e);
        if (!r)
          return !1;
        var a = Pr("widget"), n = a.includes(r);
        if (!n)
          return !1;
        var i = tu();
        return !(!i.includes(r) || !ne(ia(t)) && !ne(na(e)) || !ne(Tt(t)));
      }
      o(jA, "labelContentNameMismatchMatches");
      var zA = jA;
      function VA(e, t) {
        if (t.props.nodeName !== "input" || t.hasAttr("type") === !1)
          return !0;
        var r = t.attr("type").toLowerCase();
        return ["hidden", "image", "button", "submit", "reset"].includes(r) === !1;
      }
      o(VA, "labelMatches");
      var HA = VA;
      function $A(e, t) {
        var r = "article, aside, main, nav, section";
        return e.hasAttribute("role") || !Tr(t, r);
      }
      o($A, "landmarkHasBodyContextMatches");
      var UA = $A, GA = ["article", "aside", "main", "nav", "section"].join(",");
      function WA(e, t) {
        return YA(t) && Te(t);
      }
      o(WA, "landmarkUniqueMatches");
      function YA(e) {
        var t = Pr("landmark"), r = de(e);
        if (!r)
          return !1;
        var a = e.props.nodeName;
        if (a === "header" || a === "footer")
          return XA(e);
        if (a === "section" || a === "form") {
          var n = Ue(e);
          return !!n;
        }
        return t.indexOf(r) >= 0 || r === "region";
      }
      o(YA, "isLandmarkVirtual");
      function XA(e) {
        return !it(e, GA);
      }
      o(XA, "isHeaderFooterLandmark");
      function KA(e) {
        return !Wn(e) && !Se(e);
      }
      o(KA, "dataTableMatches2");
      var ZA = KA;
      function JA(e) {
        var t = ne(e.innerText), r = e.getAttribute("role");
        return r && r !== "link" || !t || !ot(e) ? !1 : lo(e);
      }
      o(JA, "linkInTextBlockMatches");
      var QA = JA;
      function e3(e, t) {
        var r = de(t);
        return r ? !!ve.ariaRoles[r].childrenPresentational : !1;
      }
      o(e3, "nestedInteractiveMatches");
      var t3 = e3;
      function r3(e) {
        return !(!e.currentSrc || e.hasAttribute("paused") || e.hasAttribute("muted"));
      }
      o(r3, "noAutoplayAudioMatches");
      var a3 = r3;
      function n3(e, t) {
        return !(!t.hasAttr("role") || !t.attr("role").trim());
      }
      o(n3, "noEmptyRoleMatches");
      var i3 = n3;
      function o3(e, t) {
        var r = Ee(t);
        if (!r || ["none", "presentation"].includes(r))
          return !0;
        var a = ks[r] || {}, n = a.accessibleNameRequired;
        return !!(n || Se(t));
      }
      o(o3, "noExplicitNameRequired");
      var Tf = o3;
      function u3(e, t) {
        var r = vr(t), a = r.namingMethods;
        return !(a && a.length !== 0 || Ee(t) === "combobox" && dt(t, 'input:not([type="hidden"])').length || ru(t, {
          popupRoles: ["listbox"]
        }));
      }
      o(u3, "noNamingMethodMatches");
      var l3 = u3;
      function s3(e, t) {
        var r = parseInt(t.attr("tabindex"), 10);
        return isNaN(r) || r >= 0;
      }
      o(s3, "noNegativeTabindexMatches");
      var c3 = s3;
      function d3(e, t) {
        return !t.attr("role");
      }
      o(d3, "noRoleMatches");
      var f3 = d3;
      function p3(e, t) {
        return t.props.nodeName !== "html";
      }
      o(p3, "notHtmlMatches");
      var m3 = p3, h3 = /* @__PURE__ */ o(function(t, r) {
        return [Tf, v3].every(function(a) {
          return a(t, r);
        });
      }, "object_is_loaded_matches_default");
      function v3(e) {
        var t;
        if (!(e != null && (t = e.ownerDocument) !== null && t !== void 0 && t.createRange))
          return !0;
        var r = e.ownerDocument.createRange();
        return r.setStart(e, 0), r.setEnd(e, e.childNodes.length), r.getClientRects().length === 0;
      }
      o(v3, "objectHasLoaded");
      function g3(e) {
        var t = Array.from(e.parentNode.childNodes), r = e.textContent.trim(), a = /[.!?:;](?![.!?:;])/g;
        if (r.length === 0 || (r.match(a) || []).length >= 2)
          return !1;
        var n = t.slice(t.indexOf(e) + 1).filter(function(i) {
          return i.nodeName.toUpperCase() === "P" && i.textContent.trim() !== "";
        });
        return n.length !== 0;
      }
      o(g3, "pAsHeadingMatches");
      var b3 = g3;
      function y3(e, t) {
        return Ft(t, {
          chromiumRoles: !0
        }) !== null;
      }
      o(y3, "presentationRoleConflictMatches");
      var w3 = y3;
      function D3(e, t) {
        return Bt(e, 13) !== void 0 && ru(t) === !1 && _3(t);
      }
      o(D3, "scrollableRegionFocusableMatches");
      function _3(e) {
        return dt(e, "*").some(function(t) {
          return sa(t, !0, !0);
        });
      }
      o(_3, "isNoneEmptyElement");
      function x3(e) {
        return Oo(e) && Ja(e);
      }
      o(x3, "skipLinkMatches");
      var E3 = x3;
      function C3(e, t) {
        var r = de(t);
        return ["treegrid", "grid", "table"].includes(r);
      }
      o(C3, "tableOrGridRoleMatches");
      function A3(e, t) {
        return F3.every(function(r) {
          return r(e, t);
        });
      }
      o(A3, "widgetNotInline");
      var F3 = [function(e, t) {
        return Rf(t);
      }, function(e, t) {
        return T3(t);
      }, function(e, t) {
        return !hu(e, t);
      }, function(e, t) {
        return Se(t);
      }, function(e, t) {
        return Dt(t) || !R3(t);
      }, function(e) {
        return !lo(e, {
          noLengthCompare: !0
        });
      }];
      function Rf(e) {
        return Rt(e) === "widget";
      }
      o(Rf, "isWidgetType");
      function T3(e) {
        return e.props.nodeName !== "area";
      }
      o(T3, "isNotAreaElement");
      var R3 = Be(/* @__PURE__ */ o(function e(t) {
        return t != null && t.parent ? Rf(t.parent) && Dt(t.parent) ? !0 : e(t.parent) : !1;
      }, "hasWidgetAncestorInTabOrderMemoized"));
      function k3(e) {
        return e.ownerDocument.defaultView.self === e.ownerDocument.defaultView.top;
      }
      o(k3, "windowIsTopMatches");
      var S3 = k3;
      function O3(e) {
        var t = wr(e.getAttribute("lang")), r = wr(e.getAttribute("xml:lang"));
        return qn(t) && qn(r);
      }
      o(O3, "xmlLangMismatchMatches");
      var M3 = O3, N3 = {
        "abstractrole-evaluate": ID,
        "accesskeys-after": Hx,
        "accesskeys-evaluate": Ux,
        "alt-space-value-evaluate": f5,
        "aria-allowed-attr-evaluate": PD,
        "aria-allowed-attr-matches": YC,
        "aria-allowed-role-evaluate": BD,
        "aria-allowed-role-matches": KC,
        "aria-busy-evaluate": qD,
        "aria-conditional-attr-evaluate": HD,
        "aria-conditional-checkbox-attr-evaluate": B1,
        "aria-conditional-row-attr-evaluate": q1,
        "aria-errormessage-evaluate": $D,
        "aria-has-attr-matches": JC,
        "aria-hidden-body-evaluate": GD,
        "aria-hidden-focus-matches": eA,
        "aria-label-evaluate": dC,
        "aria-labelledby-evaluate": pC,
        "aria-level-evaluate": YD,
        "aria-prohibited-attr-evaluate": XD,
        "aria-required-attr-evaluate": ZD,
        "aria-required-children-evaluate": t_,
        "aria-required-children-matches": rA,
        "aria-required-parent-evaluate": s_,
        "aria-required-parent-matches": nA,
        "aria-roledescription-evaluate": d_,
        "aria-unsupported-attr-evaluate": p_,
        "aria-valid-attr-evaluate": h_,
        "aria-valid-attr-value-evaluate": v_,
        "attr-non-space-content-evaluate": kx,
        "autocomplete-appropriate-evaluate": Ax,
        "autocomplete-matches": oA,
        "autocomplete-valid-evaluate": Tx,
        "avoid-inline-spacing-evaluate": hC,
        "braille-label-equivalent-evaluate": b_,
        "braille-roledescription-equivalent-evaluate": y_,
        "bypass-matches": sA,
        "caption-evaluate": Z5,
        "caption-faked-evaluate": OC,
        "color-contrast-evaluate": vx,
        "color-contrast-matches": dA,
        "css-orientation-lock-evaluate": iE,
        "data-table-large-matches": hA,
        "data-table-matches": gA,
        "deprecatedrole-evaluate": w_,
        "dlitem-evaluate": j5,
        "doc-has-title-evaluate": gC,
        "duplicate-id-active-matches": yA,
        "duplicate-id-after": uC,
        "duplicate-id-aria-matches": DA,
        "duplicate-id-evaluate": sC,
        "duplicate-id-misc-matches": xA,
        "duplicate-img-label-evaluate": m5,
        "exists-evaluate": yC,
        "explicit-evaluate": v5,
        "fallbackrole-evaluate": x_,
        "focusable-content-evaluate": Wx,
        "focusable-disabled-evaluate": Xx,
        "focusable-element-evaluate": Zx,
        "focusable-modal-open-evaluate": Qx,
        "focusable-no-name-evaluate": t5,
        "focusable-not-tabbable-evaluate": a5,
        "frame-focusable-content-evaluate": n5,
        "frame-focusable-content-matches": CA,
        "frame-tested-after": Q5,
        "frame-tested-evaluate": tE,
        "frame-title-has-text-matches": FA,
        "has-alt-evaluate": DC,
        "has-descendant-after": Ox,
        "has-descendant-evaluate": Nx,
        "has-global-aria-attribute-evaluate": C_,
        "has-implicit-chromium-role-matches": RA,
        "has-lang-evaluate": N5,
        "has-text-content-evaluate": Ix,
        "has-widget-role-evaluate": F_,
        "heading-matches": kA,
        "heading-order-after": bE,
        "heading-order-evaluate": AE,
        "help-same-as-label-evaluate": b5,
        "hidden-content-evaluate": GC,
        "hidden-explicit-label-evaluate": w5,
        "html-namespace-matches": MA,
        "html5-scope-evaluate": NC,
        "identical-links-same-purpose-after": TE,
        "identical-links-same-purpose-evaluate": BE,
        "identical-links-same-purpose-matches": IA,
        "implicit-evaluate": _5,
        "inline-style-property-evaluate": _C,
        "inserted-into-focus-order-matches": LA,
        "internal-link-present-evaluate": jE,
        "invalid-children-evaluate": z5,
        "invalidrole-evaluate": R_,
        "is-element-focusable-evaluate": S_,
        "is-initiator-matches": Ff,
        "is-on-screen-evaluate": CC,
        "is-visible-matches": BA,
        "is-visible-on-screen-matches": qA,
        "label-content-name-mismatch-evaluate": E5,
        "label-content-name-mismatch-matches": zA,
        "label-matches": HA,
        "landmark-has-body-context-matches": UA,
        "landmark-is-top-level-evaluate": o5,
        "landmark-is-unique-after": k5,
        "landmark-is-unique-evaluate": O5,
        "landmark-unique-matches": WA,
        "layout-table-matches": ZA,
        "link-in-text-block-evaluate": Dx,
        "link-in-text-block-matches": QA,
        "link-in-text-block-style-evaluate": xx,
        "listitem-evaluate": $5,
        "matches-definition-evaluate": Lx,
        "meta-refresh-evaluate": HE,
        "meta-viewport-scale-evaluate": uE,
        "multiple-label-evaluate": A5,
        "nested-interactive-matches": t3,
        "no-autoplay-audio-evaluate": aE,
        "no-autoplay-audio-matches": a3,
        "no-empty-role-matches": i3,
        "no-explicit-name-required-matches": Tf,
        "no-focusable-content-evaluate": u5,
        "no-implicit-explicit-label-evaluate": M_,
        "no-naming-method-matches": l3,
        "no-negative-tabindex-matches": c3,
        "no-role-matches": f3,
        "non-empty-if-present-evaluate": FC,
        "not-html-matches": m3,
        "object-is-loaded-matches": h3,
        "only-dlitems-evaluate": U5,
        "only-listitems-evaluate": W5,
        "p-as-heading-evaluate": WE,
        "p-as-heading-matches": b3,
        "page-no-duplicate-after": qx,
        "page-no-duplicate-evaluate": zx,
        "presentation-role-conflict-matches": w3,
        "presentational-role-evaluate": TC,
        "region-after": XE,
        "region-evaluate": ZE,
        "same-caption-summary-evaluate": IC,
        "scope-value-evaluate": qC,
        "scrollable-region-focusable-matches": D3,
        "skip-link-evaluate": tC,
        "skip-link-matches": E3,
        "structured-dlitems-evaluate": X5,
        "svg-namespace-matches": hu,
        "svg-non-empty-title-evaluate": kC,
        "tabindex-evaluate": c5,
        "table-or-grid-role-matches": C3,
        "target-offset-evaluate": sE,
        "target-size-evaluate": dE,
        "td-has-header-evaluate": zC,
        "td-headers-attr-evaluate": VC,
        "th-has-data-cells-evaluate": $C,
        "title-only-evaluate": T5,
        "unique-frame-title-after": aC,
        "unique-frame-title-evaluate": iC,
        "unsupportedrole-evaluate": I_,
        "valid-lang-evaluate": P5,
        "valid-scrollable-semantics-evaluate": z_,
        "widget-not-inline-matches": A3,
        "window-is-top-matches": S3,
        "xml-lang-mismatch-evaluate": B5,
        "xml-lang-mismatch-matches": M3
      }, Yn = N3;
      function I3(e) {
        this.id = e.id, this.data = null, this.relatedNodes = [], this.result = null;
      }
      o(I3, "CheckResult");
      var vu = I3;
      function gu(e) {
        if (typeof e == "string") {
          if (Yn[e])
            return Yn[e];
          if (/^\s*function[\s\w]*\(/.test(e))
            return new Function("return " + e + ";")();
          throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e));
        }
        return e;
      }
      o(gu, "createExecutionContext");
      function kf() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return (Array.isArray(e) || S(e) !== "object") && (e = {
          value: e
        }), e;
      }
      o(kf, "normalizeOptions");
      function Br(e) {
        e && (this.id = e.id, this.configure(e));
      }
      o(Br, "Check"), Br.prototype.enabled = !0, Br.prototype.run = /* @__PURE__ */ o(function(t, r, a, n, i) {
        r = r || {};
        var u = r.hasOwnProperty("enabled") ? r.enabled : this.enabled, l = this.getOptions(r.options);
        if (u) {
          var s = new vu(this), c = fi(s, r, n, i), d;
          try {
            d = this.evaluate.call(c, t.actualNode, l, t, a);
          } catch (f) {
            t && t.actualNode && (f.errorNode = pt.toSpec(t)), i(f);
            return;
          }
          c.isAsync || (s.result = d, n(s));
        } else
          n(null);
      }, "run"), Br.prototype.runSync = /* @__PURE__ */ o(function(t, r, a) {
        r = r || {};
        var n = r, i = n.enabled, u = i === void 0 ? this.enabled : i;
        if (!u)
          return null;
        var l = this.getOptions(r.options), s = new vu(this), c = fi(s);
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
      }, "runSync"), Br.prototype.configure = /* @__PURE__ */ o(function(t) {
        var r = this;
        (!t.evaluate || Yn[t.evaluate]) && (this._internalCheck = !0), t.hasOwnProperty("enabled") && (this.enabled = t.enabled), t.hasOwnProperty("options") && (this._internalCheck ? this.options = kf(t.options) : this.options = t.options), ["evaluate", "after"].filter(function(a) {
          return t.hasOwnProperty(a);
        }).forEach(function(a) {
          return r[a] = gu(t[a]);
        });
      }, "configure2"), Br.prototype.getOptions = /* @__PURE__ */ o(function(t) {
        return this._internalCheck ? Ti(this.options, kf(t || {})) : t || this.options;
      }, "getOptions");
      var Sf = Br;
      function P3(e) {
        this.id = e.id, this.result = ce.NA, this.pageLevel = e.pageLevel, this.impact = null, this.nodes = [];
      }
      o(P3, "RuleResult");
      var Xn = P3;
      function nt(e, t) {
        this._audit = t, this.id = e.id, this.selector = e.selector || "*", e.impact && (he(ce.impact.includes(e.impact), "Impact ".concat(e.impact, " is not a valid impact")), this.impact = e.impact), this.excludeHidden = typeof e.excludeHidden == "boolean" ? e.excludeHidden : !0, this.enabled = typeof e.enabled == "boolean" ? e.enabled : !0, this.pageLevel = typeof e.pageLevel == "boolean" ? e.pageLevel : !1, this.reviewOnFail = typeof e.reviewOnFail == "boolean" ? e.reviewOnFail : !1, this.any = e.any || [], this.all = e.all || [], this.none = e.none || [], this.tags = e.tags || [], this.preload = !!e.preload, this.actIds = e.actIds, e.matches && (this.matches = gu(e.matches));
      }
      o(nt, "Rule"), nt.prototype.matches = /* @__PURE__ */ o(function() {
        return !0;
      }, "matches3"), nt.prototype.gather = /* @__PURE__ */ o(function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = "mark_gather_start_" + this.id, n = "mark_gather_end_" + this.id, i = "mark_isVisibleToScreenReaders_start_" + this.id, u = "mark_isVisibleToScreenReaders_end_" + this.id;
        r.performanceTimer && qe.mark(a);
        var l = Ko(this.selector, t);
        return this.excludeHidden && (r.performanceTimer && qe.mark(i), l = l.filter(function(s) {
          return Te(s);
        }), r.performanceTimer && (qe.mark(u), qe.measure("rule_" + this.id + "#gather_axe.utils.isVisibleToScreenReaders", i, u))), r.performanceTimer && (qe.mark(n), qe.measure("rule_" + this.id + "#gather", a, n)), l;
      }, "gather"), nt.prototype.runChecks = /* @__PURE__ */ o(function(t, r, a, n, i, u) {
        var l = this, s = Ct();
        this[t].forEach(function(c) {
          var d = l._audit.checks[c.id || c], f = In(d, l.id, a);
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
          var s = i._audit.checks[l.id || l], c = In(s, i.id, a);
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
        var u = Ct(), l = new Xn(this), s;
        try {
          s = this.gatherAndMatchNodes(t, a);
        } catch (c) {
          i(new Hr({
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
              var h = Of(m);
              h && (h.node = new Nt(c), l.nodes.push(h), r.reviewOnFail && (["any", "all"].forEach(function(v) {
                h[v].forEach(function(y) {
                  y.result === !1 && (y.result = void 0);
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
        var n = new Xn(this), i;
        try {
          i = this.gatherAndMatchNodes(t, a);
        } catch (u) {
          throw new Hr({
            cause: u,
            ruleId: this.id
          });
        }
        return a.performanceTimer && this._logGatherPerformance(i), i.forEach(function(u) {
          var l = [];
          ["any", "all", "none"].forEach(function(c) {
            l.push(r.runChecksSync(c, u, a, t));
          });
          var s = Of(l);
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
        ur("gather (", t.length, "):", qe.timeElapsed() + "ms"), qe.mark(this._markChecksStart);
      }, "_logGatherPerformance"), nt.prototype._logRulePerformance = /* @__PURE__ */ o(function() {
        qe.mark(this._markChecksEnd), qe.mark(this._markEnd), qe.measure("runchecks_" + this.id, this._markChecksStart, this._markChecksEnd), qe.measure("rule_" + this.id, this._markStart, this._markEnd);
      }, "_logRulePerformance");
      function Of(e) {
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
      o(Of, "getResult"), nt.prototype.gatherAndMatchNodes = /* @__PURE__ */ o(function(t, r) {
        var a = this, n = "mark_matches_start_" + this.id, i = "mark_matches_end_" + this.id, u = this.gather(t, r);
        return r.performanceTimer && qe.mark(n), u = u.filter(function(l) {
          return a.matches(l.actualNode, l, t);
        }), r.performanceTimer && (qe.mark(i), qe.measure("rule_" + this.id + "#matches", n, i)), u;
      }, "gatherAndMatchNodes");
      function L3(e) {
        return Wa(e).map(function(t) {
          var r = e._audit.checks[t.id || t];
          return r && typeof r.after == "function" ? r : null;
        }).filter(Boolean);
      }
      o(L3, "findAfterChecks");
      function B3(e, t) {
        var r = [];
        return e.forEach(function(a) {
          var n = Wa(a);
          n.forEach(function(i) {
            i.id === t && (i.node = a.node, r.push(i));
          });
        }), r;
      }
      o(B3, "findCheckResults");
      function q3(e) {
        return e.filter(function(t) {
          return t.filtered !== !0;
        });
      }
      o(q3, "filterChecks");
      function j3(e) {
        var t = ["any", "all", "none"], r = e.nodes.filter(function(a) {
          var n = 0;
          return t.forEach(function(i) {
            a[i] = q3(a[i]), n += a[i].length;
          }), n > 0;
        });
        return e.pageLevel && r.length && (r = [r.reduce(function(a, n) {
          if (a)
            return t.forEach(function(i) {
              a[i].push.apply(a[i], n[i]);
            }), a;
        })]), r;
      }
      o(j3, "sanitizeNodes"), nt.prototype.after = /* @__PURE__ */ o(function(t, r) {
        var a = this, n = L3(this), i = this.id;
        return n.forEach(function(u) {
          var l = B3(t.nodes, u.id), s = In(u, i, r), c = u.after(l, s.options);
          a.reviewOnFail && c.forEach(function(d) {
            var f = (a.any.includes(d.id) || a.all.includes(d.id)) && d.result === !1, p = a.none.includes(d.id) && d.result === !0;
            (f || p) && (d.result = void 0);
          }), l.forEach(function(d) {
            delete d.node, c.indexOf(d) === -1 && (d.filtered = !0);
          });
        }), t.nodes = j3(t), t;
      }, "after"), nt.prototype.configure = /* @__PURE__ */ o(function(t) {
        t.hasOwnProperty("selector") && (this.selector = t.selector), t.hasOwnProperty("excludeHidden") && (this.excludeHidden = typeof t.excludeHidden == "boolean" ? t.excludeHidden : !0), t.hasOwnProperty("enabled") && (this.enabled = typeof t.enabled == "boolean" ? t.enabled : !0), t.hasOwnProperty("pageLevel") && (this.pageLevel = typeof t.pageLevel == "boolean" ? t.pageLevel : !1), t.hasOwnProperty("reviewOnFail") && (this.reviewOnFail = typeof t.reviewOnFail == "boolean" ? t.reviewOnFail : !1), t.hasOwnProperty("any") && (this.any = t.any), t.hasOwnProperty("all") && (this.all = t.all), t.hasOwnProperty("none") && (this.none = t.none), t.hasOwnProperty("tags") && (this.tags = t.tags), t.hasOwnProperty("actIds") && (this.actIds = t.actIds), t.hasOwnProperty("matches") && (this.matches = gu(t.matches)), t.impact && (he(ce.impact.includes(t.impact), "Impact ".concat(t.impact, " is not a valid impact")), this.impact = t.impact);
      }, "configure3");
      var qr = bt(cl()), jr = /\{\{.+?\}\}/g, z3 = function() {
        function e(t) {
          xt(this, e), this.lang = "en", this.defaultConfig = t, this.standards = ve, this._init(), this._defaultLocale = null;
        }
        return o(e, "Audit"), Et(e, [{
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
                var m = f[p], h = this.data.rules[m], v = h.description, y = h.help;
                r.rules[m] = {
                  description: v,
                  help: y
                };
              }
              for (var g = Object.keys(this.data.failureSummaries), b = 0; b < g.length; b++) {
                var _ = g[b], x = this.data.failureSummaries[_], T = x.failureMessage;
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
              this.data.checks[i] = H3(this.data.checks[i], r[i]);
            }
          }, "_applyCheckLocale")
        }, {
          key: "_applyRuleLocale",
          value: /* @__PURE__ */ o(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.rules[i])
                throw new Error('Locale provided for unknown rule: "'.concat(i, '"'));
              this.data.rules[i] = $3(this.data.rules[i], r[i]);
            }
          }, "_applyRuleLocale")
        }, {
          key: "_applyFailureSummaries",
          value: /* @__PURE__ */ o(function(r) {
            for (var a = Object.keys(r), n = 0; n < a.length; n++) {
              var i = a[n];
              if (!this.data.failureSummaries[i])
                throw new Error('Locale provided for unknown failureMessage: "'.concat(i, '"'));
              this.data.failureSummaries[i] = U3(this.data.failureSummaries[i], r[i]);
            }
          }, "_applyFailureSummaries")
        }, {
          key: "applyLocale",
          value: /* @__PURE__ */ o(function(r) {
            this._setDefaultLocale(), r.checks && this._applyCheckLocale(r.checks), r.rules && this._applyRuleLocale(r.rules), r.failureSummaries && this._applyFailureSummaries(r.failureSummaries, "failureSummaries"), r.incompleteFallbackMessage && (this.data.incompleteFallbackMessage = G3(this.data.incompleteFallbackMessage, r.incompleteFallbackMessage)), r.lang && (this.lang = r.lang);
          }, "applyLocale")
        }, {
          key: "setAllowedOrigins",
          value: /* @__PURE__ */ o(function(r) {
            var a = Nf();
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
            var r = V3(this.defaultConfig);
            this.lang = r.lang || "en", this.reporter = r.reporter, this.commands = {}, this.rules = [], this.checks = {}, this.brand = "axe", this.application = "axeAPI", this.tagExclude = ["experimental"], this.noHtml = r.noHtml, this.allowedOrigins = r.allowedOrigins, If(r.rules, this, "addRule"), If(r.checks, this, "addCheck"), this.data = {}, this.data.checks = r.data && r.data.checks || {}, this.data.rules = r.data && r.data.rules || {}, this.data.failureSummaries = r.data && r.data.failureSummaries || {}, this.data.incompleteFallbackMessage = r.data && r.data.incompleteFallbackMessage || "", this._constructHelpUrls();
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
            })), this.checks[r.id] ? this.checks[r.id].configure(r) : this.checks[r.id] = new Sf(r);
          }, "addCheck")
        }, {
          key: "run",
          value: /* @__PURE__ */ o(function(r, a, n, i) {
            this.normalizeOptions(a), Nt.setRunOptions(a), w._selectCache = [];
            var u = W3(this.rules, r, a), l = u.now, s = u.later, c = Ct();
            l.forEach(function(p) {
              c.defer(Pf(p, r, a));
            });
            var d = Ct();
            s.length && d.defer(function(p) {
              c1(a).then(function(m) {
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
              var y = Ct();
              s.forEach(function(g) {
                var b = Pf(g, r, a);
                y.defer(b);
              }), y.then(function(g) {
                w._selectCache = void 0, n(v.concat(g).filter(function(b) {
                  return !!b;
                }));
              }).catch(i);
            }).catch(i);
          }, "run")
        }, {
          key: "after",
          value: /* @__PURE__ */ o(function(r, a) {
            var n = this.rules;
            return r.map(function(i) {
              var u = ea(n, "id", i.id);
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
              (typeof u.helpUrl != "string" || a && u.helpUrl === Lf(a, i.id, n)) && (u.helpUrl = Lf(r, i.id, n));
            });
          }, "_constructHelpUrls")
        }, {
          key: "resetRulesAndChecks",
          value: /* @__PURE__ */ o(function() {
            this._init(), this._resetLocale();
          }, "resetRulesAndChecks")
        }]), e;
      }(), Mf = z3;
      function Nf() {
        if (D.origin && D.origin !== "null")
          return D.origin;
        if (D.location && D.location.origin && D.location.origin !== "null")
          return D.location.origin;
      }
      o(Nf, "getDefaultOrigin");
      function V3(e) {
        var t;
        if (e ? (t = It(e), t.commons = e.commons) : t = {}, t.reporter = t.reporter || null, t.noHtml = t.noHtml || !1, !t.allowedOrigins) {
          var r = Nf();
          t.allowedOrigins = r ? [r] : [];
        }
        return t.rules = t.rules || [], t.checks = t.checks || [], t.data = pe({
          checks: {},
          rules: {}
        }, t.data), t;
      }
      o(V3, "getDefaultConfiguration");
      function If(e, t, r) {
        var a, n;
        for (a = 0, n = e.length; a < n; a++)
          t[r](e[a]);
      }
      o(If, "unpackToObject");
      var H3 = /* @__PURE__ */ o(function(t, r) {
        var a = r.pass, n = r.fail;
        return typeof a == "string" && jr.test(a) && (a = qr.default.compile(a)), typeof n == "string" && jr.test(n) && (n = qr.default.compile(n)), pe({}, t, {
          messages: {
            pass: a || t.messages.pass,
            fail: n || t.messages.fail,
            incomplete: S(t.messages.incomplete) === "object" ? pe({}, t.messages.incomplete, r.incomplete) : r.incomplete
          }
        });
      }, "mergeCheckLocale"), $3 = /* @__PURE__ */ o(function(t, r) {
        var a = r.help, n = r.description;
        return typeof a == "string" && jr.test(a) && (a = qr.default.compile(a)), typeof n == "string" && jr.test(n) && (n = qr.default.compile(n)), pe({}, t, {
          help: a || t.help,
          description: n || t.description
        });
      }, "mergeRuleLocale"), U3 = /* @__PURE__ */ o(function(t, r) {
        var a = r.failureMessage;
        return typeof a == "string" && jr.test(a) && (a = qr.default.compile(a)), pe({}, t, {
          failureMessage: a || t.failureMessage
        });
      }, "mergeFailureMessage"), G3 = /* @__PURE__ */ o(function(t, r) {
        return typeof r == "string" && jr.test(r) && (r = qr.default.compile(r)), r || t;
      }, "mergeFallbackMessage");
      function W3(e, t, r) {
        var a = {
          now: [],
          later: []
        }, n = e.reduce(function(i, u) {
          return h1(u, t, r) ? u.preload ? (i.later.push(u), i) : (i.now.push(u), i) : i;
        }, a);
        return n;
      }
      o(W3, "getRulesToRun");
      function Pf(e, t, r) {
        return r.performanceTimer && qe.mark("mark_rule_start_" + e.id), function(a, n) {
          e.run(t, r, function(i) {
            a(i);
          }, function(i) {
            if (r.debug)
              n(i);
            else {
              var u = Object.assign(new Xn(e), {
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
      o(Pf, "getDefferedRule");
      function Lf(e, t, r) {
        var a = e.brand, n = e.application, i = e.lang;
        return ce.helpUrlBase + a + "/" + (r || w.version.substring(0, w.version.lastIndexOf("."))) + "/" + t + "?application=" + encodeURIComponent(n) + (i && i !== "en" ? "&lang=" + encodeURIComponent(i) : "");
      }
      o(Lf, "getHelpUrl");
      function Bf(e) {
        var t = D && "Node" in D && "NodeList" in D, r = !!N;
        if (!(t && r)) {
          if (!e || !e.ownerDocument)
            throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.');
          r || (le.set("globalDocumentSet", !0), N = e.ownerDocument), t || (le.set("globalWindowSet", !0), D = N.defaultView);
        }
      }
      o(Bf, "setupGlobals");
      function Y3() {
        le.get("globalDocumentSet") && (le.set("globalDocumentSet", !1), N = null), le.get("globalWindowSet") && (le.set("globalWindowSet", !1), D = null);
      }
      o(Y3, "resetGlobals");
      function X3() {
        Y3(), w._memoizedFns.forEach(function(e) {
          return e.clear();
        }), le.clear(), w._tree = void 0, w._selectorData = void 0, w._selectCache = void 0;
      }
      o(X3, "teardown");
      var Jt = X3;
      function qf(e, t, r, a) {
        try {
          e = new Pn(e), w._tree = e.flatTree, w._selectorData = ja(e.flatTree);
        } catch (u) {
          return Jt(), a(u);
        }
        var n = Ct(), i = w._audit;
        t.performanceTimer && qe.auditStart(), e.frames.length && t.iframes !== !1 && n.defer(function(u, l) {
          $l(e, t, "rules", null, u, l);
        }), n.defer(function(u, l) {
          i.run(e, t, u, l);
        }), n.then(function(u) {
          try {
            t.performanceTimer && qe.auditEnd();
            var l = Ya(u.map(function(s) {
              return {
                results: s
              };
            }));
            e.initiator && (l = i.after(l, t), l.forEach(Ln), l = l.map(Gr));
            try {
              r(l, Jt);
            } catch (s) {
              Jt(), ur(s);
            }
          } catch (s) {
            Jt(), a(s);
          }
        }).catch(function(u) {
          Jt(), a(u);
        });
      }
      o(qf, "runRules");
      function K3(e) {
        w._audit = new Mf(e);
      }
      o(K3, "load");
      function Z3(e, t, r) {
        var a = r, n = /* @__PURE__ */ o(function(s) {
          s instanceof Error || (s = new Error(s)), r(s);
        }, "reject2"), i = e && e.context || {};
        i.hasOwnProperty("include") && !i.include.length && (i.include = [N]);
        var u = e && e.options || {};
        switch (e.command) {
          case "rules":
            return qf(i, u, function(l, s) {
              l = pt.mapRawResults(l), a(l), s();
            }, n);
          case "cleanup-plugin":
            return E1(a, n);
          default:
            if (w._audit && w._audit.commands && w._audit.commands[e.command])
              return w._audit.commands[e.command](e, r);
        }
      }
      o(Z3, "runCommand"), D.top !== D && (wt.subscribe("axe.start", Z3), wt.subscribe("axe.ping", function(e, t, r) {
        r({
          axe: !0
        });
      }));
      function Ca(e) {
        this._run = e.run, this._collect = e.collect, this._registry = {}, e.commands.forEach(function(t) {
          w._audit.registerCommand(t);
        });
      }
      o(Ca, "Plugin"), Ca.prototype.run = /* @__PURE__ */ o(function() {
        return this._run.apply(this, arguments);
      }, "run3"), Ca.prototype.collect = /* @__PURE__ */ o(function() {
        return this._collect.apply(this, arguments);
      }, "collect"), Ca.prototype.cleanup = /* @__PURE__ */ o(function(t) {
        var r = w.utils.queue(), a = this;
        Object.keys(this._registry).forEach(function(n) {
          r.defer(function(i) {
            a._registry[n].cleanup(i);
          });
        }), r.then(t);
      }, "cleanup2"), Ca.prototype.add = /* @__PURE__ */ o(function(t) {
        this._registry[t.id] = t;
      }, "add");
      function J3(e) {
        w.plugins[e.id] = new Ca(e);
      }
      o(J3, "registerPlugin");
      var Q3 = J3;
      function eF() {
        var e = w._audit;
        if (!e)
          throw new Error("No audit configured");
        e.resetRulesAndChecks(), $g();
      }
      o(eF, "reset");
      var tF = eF;
      function rF(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        r.reporter = r.reporter || w._audit.reporter || "v1", w._selectorData = {}, t instanceof He || (t = new x1(t));
        var a = Zd(e);
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
        Ln(i), Gr(i);
        var u = hl([i]);
        return u.violations.forEach(function(l) {
          return l.nodes.forEach(function(s) {
            s.failureSummary = qo(s);
          });
        }), pe({}, Kt(), u, {
          toolOptions: r
        });
      }
      o(rF, "runVirtualRule");
      function jf(e) {
        var t, r, a, n = H(e, 3), i = n[0], u = n[1], l = n[2], s = new TypeError("axe.run arguments are invalid");
        if (!J2(i)) {
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
      o(jf, "normalizeRunParams");
      var bu = /* @__PURE__ */ o(function() {
      }, "noop2");
      function aF() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        Bf(t[0]);
        var a = jf(t), n = a.context, i = a.options, u = a.callback, l = u === void 0 ? bu : u, s = nF(l), c = s.thenable, d = s.resolve, f = s.reject;
        try {
          he(w._audit, "No audit configured"), he(!w._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        } catch (h) {
          return oF(h, l);
        }
        w._running = !0, i.performanceTimer && w.utils.performanceTimer.start();
        function p(h, v) {
          var y = /* @__PURE__ */ o(function(_) {
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
            iF(h, i, y, g);
          } catch (b) {
            g(b);
          }
        }
        o(p, "handleRunRules");
        function m(h) {
          i.performanceTimer && w.utils.performanceTimer.end(), w._running = !1, l(h), f(h);
        }
        return o(m, "errorRunRules"), w._runRules(n, i, p, m), c;
      }
      o(aF, "run4");
      function nF(e) {
        var t, r, a;
        return typeof Promise == "function" && e === bu ? t = new Promise(function(n, i) {
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
      o(nF, "getPromiseHandlers");
      function iF(e, t, r, a) {
        var n = Qo(t.reporter), i = n(e, t, r, a);
        i !== void 0 && r(i);
      }
      o(iF, "createReport");
      function oF(e, t) {
        if (typeof t == "function" && t !== bu) {
          t(e.message);
          return;
        }
        throw e;
      }
      o(oF, "handleError");
      function uF() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var a = jf(t), n = a.options, i = a.context;
        he(w._audit, "Axe is not configured. Audit is missing."), he(!w._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        var u = new Pn(i, w._tree);
        return w._tree = u.flatTree, w._selectorData = ja(u.flatTree), w._running = !0, n.elementRef = !1, new Promise(function(l, s) {
          w._audit.run(u, n, l, s);
        }).then(function(l) {
          l = pt.mapRawResults(l);
          var s = u.frames.map(function(d) {
            var f = d.node;
            return pt.toSpec(f);
          }), c;
          return u.initiator && (c = Kt()), w._running = !1, Jt(), {
            results: l,
            frames: s,
            environmentData: c
          };
        }).catch(function(l) {
          return w._running = !1, Jt(), Promise.reject(l);
        });
      }
      o(uF, "runPartial");
      function lF(e) {
        var t, r, a, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n = It(n);
        var i = e.find(function(s) {
          return s.environmentData;
        }) || {}, u = i.environmentData;
        w._audit.normalizeOptions(n), n.reporter = (t = (r = n.reporter) !== null && r !== void 0 ? r : (a = w._audit) === null || a === void 0 ? void 0 : a.reporter) !== null && t !== void 0 ? t : "v1", sF(e);
        var l = Ya(e);
        return l = w._audit.after(l, n), l.forEach(Ln), l = l.map(Gr), dF(l, pe({
          environmentData: u
        }, n));
      }
      o(lF, "finishRun");
      function sF(e) {
        var t = [], r = Fe(e), a;
        try {
          for (r.s(); !(a = r.n()).done; ) {
            var n = a.value, i = t.shift();
            if (!!n) {
              n.frameSpec = i ?? null;
              var u = cF(n);
              t.unshift.apply(t, ae(u));
            }
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      o(sF, "setFrameSpec");
      function cF(e) {
        var t = e.frames, r = e.frameSpec;
        return r ? t.map(function(a) {
          return pt.mergeSpecs(a, r);
        }) : t;
      }
      o(cF, "getMergedFrameSpecs");
      function dF(e, t) {
        return new Promise(function(r, a) {
          var n = Qo(t.reporter);
          n(e, t, r, a);
        });
      }
      o(dF, "createReport2");
      function fF(e) {
        if (w._tree)
          throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.");
        return e && S(e.documentElement) === "object" && S(e.defaultView) === "object" && (e = e.documentElement), Bf(e), w._tree = Lo(e), w._selectorData = ja(w._tree), w._tree[0];
      }
      o(fF, "setup");
      var pF = fF, mF = /* @__PURE__ */ o(function(t, r, a) {
        console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'), typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, rp);
        a(pe({}, Kt(i), {
          toolOptions: u
        }, ya(t, r)));
      }, "naReporter"), hF = mF, vF = /* @__PURE__ */ o(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, ap);
        r.resultTypes = ["violations"];
        var l = ya(t, r), s = l.violations;
        a(pe({}, Kt(i), {
          toolOptions: u,
          violations: s
        }));
      }, "noPassesReporter"), gF = vF, bF = /* @__PURE__ */ o(function(t, r, a) {
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
      }, "rawReporter"), zf = bF, yF = /* @__PURE__ */ o(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, np);
        zf(t, u, function(l) {
          var s = Kt(i);
          a({
            raw: l,
            env: s
          });
        });
      }, "rawEnvReporter"), wF = yF, DF = /* @__PURE__ */ o(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, ip), l = ya(t, r), s = /* @__PURE__ */ o(function(d) {
          d.nodes.forEach(function(f) {
            f.failureSummary = qo(f);
          });
        }, "addFailureSummaries");
        l.incomplete.forEach(s), l.violations.forEach(s), a(pe({}, Kt(i), {
          toolOptions: u
        }, l));
      }, "v1Reporter"), _F = DF, xF = /* @__PURE__ */ o(function(t, r, a) {
        typeof r == "function" && (a = r, r = {});
        var n = r, i = n.environmentData, u = Le(n, op), l = ya(t, r);
        a(pe({}, Kt(i), {
          toolOptions: u
        }, l));
      }, "v2Reporter"), EF = xF, CF = {
        base: {
          Audit: Mf,
          CheckResult: vu,
          Check: Sf,
          Context: Pn,
          RuleResult: Xn,
          Rule: nt,
          metadataFunctionMap: Yn
        },
        public: {
          reporters: Da
        },
        helpers: {
          failureSummary: qo,
          incompleteFallbackMessage: jo,
          processAggregate: ya
        },
        utils: {
          setDefaultFrameMessenger: Bl,
          cacheNodeSelectors: jd,
          getNodesMatchingExpression: Bd,
          convertSelector: Va
        },
        commons: {
          dom: {
            nativelyHidden: Xl,
            displayHidden: Kl,
            visibilityHidden: Zl,
            contentVisibiltyHidden: Jl,
            ariaHidden: Ql,
            opacityHidden: es,
            scrollHidden: ts,
            overflowHidden: rs,
            clipHidden: as,
            areaHidden: Si,
            detailsHidden: ns
          }
        }
      }, AF = CF;
      w._thisWillBeDeletedDoNotUse = AF, w.constants = ce, w.log = ur, w.AbstractVirtualNode = He, w.SerialVirtualNode = x1, w.VirtualNode = No, w._cache = le, w.imports = Ec, w.cleanup = E1, w.configure = iD, w.frameMessenger = oD, w.getRules = lD, w._load = K3, w.plugins = {}, w.registerPlugin = Q3, w.hasReporter = A1, w.getReporter = Qo, w.addReporter = aD, w.reset = tF, w._runRules = qf, w.runVirtualRule = rF, w.run = aF, w.setup = pF, w.teardown = Jt, w.runPartial = uF, w.finishRun = lF, w.commons = gf, w.utils = oi, w.addReporter("na", hF), w.addReporter("no-passes", gF), w.addReporter("rawEnv", wF), w.addReporter("raw", zf), w.addReporter("v1", _F), w.addReporter("v2", EF, !0);
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
  }, "axeFunction"))(typeof window == "object" ? window : RF);
})(Du);
const SF = /* @__PURE__ */ TF(Du.exports), NF = /* @__PURE__ */ kF({
  __proto__: null,
  default: SF
}, [Du.exports]);
export {
  NF as a
};
//# sourceMappingURL=axe.e453064c.js.map
