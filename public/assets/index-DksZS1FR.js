(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) f(d);
  new MutationObserver((d) => {
    for (const m of d)
      if (m.type === 'childList')
        for (const S of m.addedNodes)
          S.tagName === 'LINK' && S.rel === 'modulepreload' && f(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(d) {
    const m = {};
    return (
      d.integrity && (m.integrity = d.integrity),
      d.referrerPolicy && (m.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === 'use-credentials'
        ? (m.credentials = 'include')
        : d.crossOrigin === 'anonymous'
          ? (m.credentials = 'omit')
          : (m.credentials = 'same-origin'),
      m
    );
  }
  function f(d) {
    if (d.ep) return;
    d.ep = !0;
    const m = o(d);
    fetch(d.href, m);
  }
})();
function rv(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default')
    ? c.default
    : c;
}
var Df = { exports: {} },
  Nn = {};
var th;
function ov() {
  if (th) return Nn;
  th = 1;
  var c = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment');
  function o(f, d, m) {
    var S = null;
    if (
      (m !== void 0 && (S = '' + m),
      d.key !== void 0 && (S = '' + d.key),
      'key' in d)
    ) {
      m = {};
      for (var x in d) x !== 'key' && (m[x] = d[x]);
    } else m = d;
    return (
      (d = m.ref),
      { $$typeof: c, type: f, key: S, ref: d !== void 0 ? d : null, props: m }
    );
  }
  return ((Nn.Fragment = r), (Nn.jsx = o), (Nn.jsxs = o), Nn);
}
var eh;
function dv() {
  return (eh || ((eh = 1), (Df.exports = ov())), Df.exports);
}
var O = dv(),
  xf = { exports: {} },
  I = {};
var lh;
function hv() {
  if (lh) return I;
  lh = 1;
  var c = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    m = Symbol.for('react.consumer'),
    S = Symbol.for('react.context'),
    x = Symbol.for('react.forward_ref'),
    b = Symbol.for('react.suspense'),
    v = Symbol.for('react.memo'),
    M = Symbol.for('react.lazy'),
    T = Symbol.for('react.activity'),
    q = Symbol.iterator;
  function K(g) {
    return g === null || typeof g != 'object'
      ? null
      : ((g = (q && g[q]) || g['@@iterator']),
        typeof g == 'function' ? g : null);
  }
  var L = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    B = Object.assign,
    H = {};
  function V(g, j, G) {
    ((this.props = g),
      (this.context = j),
      (this.refs = H),
      (this.updater = G || L));
  }
  ((V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (g, j) {
      if (typeof g != 'object' && typeof g != 'function' && g != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, g, j, 'setState');
    }),
    (V.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, 'forceUpdate');
    }));
  function k() {}
  k.prototype = V.prototype;
  function J(g, j, G) {
    ((this.props = g),
      (this.context = j),
      (this.refs = H),
      (this.updater = G || L));
  }
  var dt = (J.prototype = new k());
  ((dt.constructor = J), B(dt, V.prototype), (dt.isPureReactComponent = !0));
  var rt = Array.isArray;
  function bt() {}
  var F = { H: null, A: null, T: null, S: null },
    Dt = Object.prototype.hasOwnProperty;
  function Kt(g, j, G) {
    var Q = G.ref;
    return {
      $$typeof: c,
      type: g,
      key: j,
      ref: Q !== void 0 ? Q : null,
      props: G,
    };
  }
  function Ce(g, j) {
    return Kt(g.type, j, g.props);
  }
  function ye(g) {
    return typeof g == 'object' && g !== null && g.$$typeof === c;
  }
  function Jt(g) {
    var j = { '=': '=0', ':': '=2' };
    return (
      '$' +
      g.replace(/[=:]/g, function (G) {
        return j[G];
      })
    );
  }
  var Ne = /\/+/g;
  function ve(g, j) {
    return typeof g == 'object' && g !== null && g.key != null
      ? Jt('' + g.key)
      : j.toString(36);
  }
  function Ut(g) {
    switch (g.status) {
      case 'fulfilled':
        return g.value;
      case 'rejected':
        throw g.reason;
      default:
        switch (
          (typeof g.status == 'string'
            ? g.then(bt, bt)
            : ((g.status = 'pending'),
              g.then(
                function (j) {
                  g.status === 'pending' &&
                    ((g.status = 'fulfilled'), (g.value = j));
                },
                function (j) {
                  g.status === 'pending' &&
                    ((g.status = 'rejected'), (g.reason = j));
                },
              )),
          g.status)
        ) {
          case 'fulfilled':
            return g.value;
          case 'rejected':
            throw g.reason;
        }
    }
    throw g;
  }
  function C(g, j, G, Q, P) {
    var lt = typeof g;
    (lt === 'undefined' || lt === 'boolean') && (g = null);
    var ht = !1;
    if (g === null) ht = !0;
    else
      switch (lt) {
        case 'bigint':
        case 'string':
        case 'number':
          ht = !0;
          break;
        case 'object':
          switch (g.$$typeof) {
            case c:
            case r:
              ht = !0;
              break;
            case M:
              return ((ht = g._init), C(ht(g._payload), j, G, Q, P));
          }
      }
    if (ht)
      return (
        (P = P(g)),
        (ht = Q === '' ? '.' + ve(g, 0) : Q),
        rt(P)
          ? ((G = ''),
            ht != null && (G = ht.replace(Ne, '$&/') + '/'),
            C(P, j, G, '', function (La) {
              return La;
            }))
          : P != null &&
            (ye(P) &&
              (P = Ce(
                P,
                G +
                  (P.key == null || (g && g.key === P.key)
                    ? ''
                    : ('' + P.key).replace(Ne, '$&/') + '/') +
                  ht,
              )),
            j.push(P)),
        1
      );
    ht = 0;
    var kt = Q === '' ? '.' : Q + ':';
    if (rt(g))
      for (var xt = 0; xt < g.length; xt++)
        ((Q = g[xt]), (lt = kt + ve(Q, xt)), (ht += C(Q, j, G, lt, P)));
    else if (((xt = K(g)), typeof xt == 'function'))
      for (g = xt.call(g), xt = 0; !(Q = g.next()).done; )
        ((Q = Q.value), (lt = kt + ve(Q, xt++)), (ht += C(Q, j, G, lt, P)));
    else if (lt === 'object') {
      if (typeof g.then == 'function') return C(Ut(g), j, G, Q, P);
      throw (
        (j = String(g)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (j === '[object Object]'
              ? 'object with keys {' + Object.keys(g).join(', ') + '}'
              : j) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return ht;
  }
  function Y(g, j, G) {
    if (g == null) return g;
    var Q = [],
      P = 0;
    return (
      C(g, Q, '', '', function (lt) {
        return j.call(G, lt, P++);
      }),
      Q
    );
  }
  function W(g) {
    if (g._status === -1) {
      var j = g._result;
      ((j = j()),
        j.then(
          function (G) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = G));
          },
          function (G) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = G));
          },
        ),
        g._status === -1 && ((g._status = 0), (g._result = j)));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var vt =
      typeof reportError == 'function'
        ? reportError
        : function (g) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var j = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof g == 'object' &&
                  g !== null &&
                  typeof g.message == 'string'
                    ? String(g.message)
                    : String(g),
                error: g,
              });
              if (!window.dispatchEvent(j)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', g);
              return;
            }
            console.error(g);
          },
    Et = {
      map: Y,
      forEach: function (g, j, G) {
        Y(
          g,
          function () {
            j.apply(this, arguments);
          },
          G,
        );
      },
      count: function (g) {
        var j = 0;
        return (
          Y(g, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (g) {
        return (
          Y(g, function (j) {
            return j;
          }) || []
        );
      },
      only: function (g) {
        if (!ye(g))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return g;
      },
    };
  return (
    (I.Activity = T),
    (I.Children = Et),
    (I.Component = V),
    (I.Fragment = o),
    (I.Profiler = d),
    (I.PureComponent = J),
    (I.StrictMode = f),
    (I.Suspense = b),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (g) {
        return F.H.useMemoCache(g);
      },
    }),
    (I.cache = function (g) {
      return function () {
        return g.apply(null, arguments);
      };
    }),
    (I.cacheSignal = function () {
      return null;
    }),
    (I.cloneElement = function (g, j, G) {
      if (g == null)
        throw Error(
          'The argument must be a React element, but you passed ' + g + '.',
        );
      var Q = B({}, g.props),
        P = g.key;
      if (j != null)
        for (lt in (j.key !== void 0 && (P = '' + j.key), j))
          !Dt.call(j, lt) ||
            lt === 'key' ||
            lt === '__self' ||
            lt === '__source' ||
            (lt === 'ref' && j.ref === void 0) ||
            (Q[lt] = j[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) Q.children = G;
      else if (1 < lt) {
        for (var ht = Array(lt), kt = 0; kt < lt; kt++)
          ht[kt] = arguments[kt + 2];
        Q.children = ht;
      }
      return Kt(g.type, P, Q);
    }),
    (I.createContext = function (g) {
      return (
        (g = {
          $$typeof: S,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (g.Provider = g),
        (g.Consumer = { $$typeof: m, _context: g }),
        g
      );
    }),
    (I.createElement = function (g, j, G) {
      var Q,
        P = {},
        lt = null;
      if (j != null)
        for (Q in (j.key !== void 0 && (lt = '' + j.key), j))
          Dt.call(j, Q) &&
            Q !== 'key' &&
            Q !== '__self' &&
            Q !== '__source' &&
            (P[Q] = j[Q]);
      var ht = arguments.length - 2;
      if (ht === 1) P.children = G;
      else if (1 < ht) {
        for (var kt = Array(ht), xt = 0; xt < ht; xt++)
          kt[xt] = arguments[xt + 2];
        P.children = kt;
      }
      if (g && g.defaultProps)
        for (Q in ((ht = g.defaultProps), ht))
          P[Q] === void 0 && (P[Q] = ht[Q]);
      return Kt(g, lt, P);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (g) {
      return { $$typeof: x, render: g };
    }),
    (I.isValidElement = ye),
    (I.lazy = function (g) {
      return { $$typeof: M, _payload: { _status: -1, _result: g }, _init: W };
    }),
    (I.memo = function (g, j) {
      return { $$typeof: v, type: g, compare: j === void 0 ? null : j };
    }),
    (I.startTransition = function (g) {
      var j = F.T,
        G = {};
      F.T = G;
      try {
        var Q = g(),
          P = F.S;
        (P !== null && P(G, Q),
          typeof Q == 'object' &&
            Q !== null &&
            typeof Q.then == 'function' &&
            Q.then(bt, vt));
      } catch (lt) {
        vt(lt);
      } finally {
        (j !== null && G.types !== null && (j.types = G.types), (F.T = j));
      }
    }),
    (I.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (I.use = function (g) {
      return F.H.use(g);
    }),
    (I.useActionState = function (g, j, G) {
      return F.H.useActionState(g, j, G);
    }),
    (I.useCallback = function (g, j) {
      return F.H.useCallback(g, j);
    }),
    (I.useContext = function (g) {
      return F.H.useContext(g);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (g, j) {
      return F.H.useDeferredValue(g, j);
    }),
    (I.useEffect = function (g, j) {
      return F.H.useEffect(g, j);
    }),
    (I.useEffectEvent = function (g) {
      return F.H.useEffectEvent(g);
    }),
    (I.useId = function () {
      return F.H.useId();
    }),
    (I.useImperativeHandle = function (g, j, G) {
      return F.H.useImperativeHandle(g, j, G);
    }),
    (I.useInsertionEffect = function (g, j) {
      return F.H.useInsertionEffect(g, j);
    }),
    (I.useLayoutEffect = function (g, j) {
      return F.H.useLayoutEffect(g, j);
    }),
    (I.useMemo = function (g, j) {
      return F.H.useMemo(g, j);
    }),
    (I.useOptimistic = function (g, j) {
      return F.H.useOptimistic(g, j);
    }),
    (I.useReducer = function (g, j, G) {
      return F.H.useReducer(g, j, G);
    }),
    (I.useRef = function (g) {
      return F.H.useRef(g);
    }),
    (I.useState = function (g) {
      return F.H.useState(g);
    }),
    (I.useSyncExternalStore = function (g, j, G) {
      return F.H.useSyncExternalStore(g, j, G);
    }),
    (I.useTransition = function () {
      return F.H.useTransition();
    }),
    (I.version = '19.2.4'),
    I
  );
}
var ah;
function Zf() {
  return (ah || ((ah = 1), (xf.exports = hv())), xf.exports);
}
var R = Zf(),
  Cf = { exports: {} },
  Un = {},
  Nf = { exports: {} },
  Uf = {};
var nh;
function mv() {
  return (
    nh ||
      ((nh = 1),
      (function (c) {
        function r(C, Y) {
          var W = C.length;
          C.push(Y);
          t: for (; 0 < W; ) {
            var vt = (W - 1) >>> 1,
              Et = C[vt];
            if (0 < d(Et, Y)) ((C[vt] = Y), (C[W] = Et), (W = vt));
            else break t;
          }
        }
        function o(C) {
          return C.length === 0 ? null : C[0];
        }
        function f(C) {
          if (C.length === 0) return null;
          var Y = C[0],
            W = C.pop();
          if (W !== Y) {
            C[0] = W;
            t: for (var vt = 0, Et = C.length, g = Et >>> 1; vt < g; ) {
              var j = 2 * (vt + 1) - 1,
                G = C[j],
                Q = j + 1,
                P = C[Q];
              if (0 > d(G, W))
                Q < Et && 0 > d(P, G)
                  ? ((C[vt] = P), (C[Q] = W), (vt = Q))
                  : ((C[vt] = G), (C[j] = W), (vt = j));
              else if (Q < Et && 0 > d(P, W))
                ((C[vt] = P), (C[Q] = W), (vt = Q));
              else break t;
            }
          }
          return Y;
        }
        function d(C, Y) {
          var W = C.sortIndex - Y.sortIndex;
          return W !== 0 ? W : C.id - Y.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var m = performance;
          c.unstable_now = function () {
            return m.now();
          };
        } else {
          var S = Date,
            x = S.now();
          c.unstable_now = function () {
            return S.now() - x;
          };
        }
        var b = [],
          v = [],
          M = 1,
          T = null,
          q = 3,
          K = !1,
          L = !1,
          B = !1,
          H = !1,
          V = typeof setTimeout == 'function' ? setTimeout : null,
          k = typeof clearTimeout == 'function' ? clearTimeout : null,
          J = typeof setImmediate < 'u' ? setImmediate : null;
        function dt(C) {
          for (var Y = o(v); Y !== null; ) {
            if (Y.callback === null) f(v);
            else if (Y.startTime <= C)
              (f(v), (Y.sortIndex = Y.expirationTime), r(b, Y));
            else break;
            Y = o(v);
          }
        }
        function rt(C) {
          if (((B = !1), dt(C), !L))
            if (o(b) !== null) ((L = !0), bt || ((bt = !0), Jt()));
            else {
              var Y = o(v);
              Y !== null && Ut(rt, Y.startTime - C);
            }
        }
        var bt = !1,
          F = -1,
          Dt = 5,
          Kt = -1;
        function Ce() {
          return H ? !0 : !(c.unstable_now() - Kt < Dt);
        }
        function ye() {
          if (((H = !1), bt)) {
            var C = c.unstable_now();
            Kt = C;
            var Y = !0;
            try {
              t: {
                ((L = !1), B && ((B = !1), k(F), (F = -1)), (K = !0));
                var W = q;
                try {
                  e: {
                    for (
                      dt(C), T = o(b);
                      T !== null && !(T.expirationTime > C && Ce());
                    ) {
                      var vt = T.callback;
                      if (typeof vt == 'function') {
                        ((T.callback = null), (q = T.priorityLevel));
                        var Et = vt(T.expirationTime <= C);
                        if (((C = c.unstable_now()), typeof Et == 'function')) {
                          ((T.callback = Et), dt(C), (Y = !0));
                          break e;
                        }
                        (T === o(b) && f(b), dt(C));
                      } else f(b);
                      T = o(b);
                    }
                    if (T !== null) Y = !0;
                    else {
                      var g = o(v);
                      (g !== null && Ut(rt, g.startTime - C), (Y = !1));
                    }
                  }
                  break t;
                } finally {
                  ((T = null), (q = W), (K = !1));
                }
                Y = void 0;
              }
            } finally {
              Y ? Jt() : (bt = !1);
            }
          }
        }
        var Jt;
        if (typeof J == 'function')
          Jt = function () {
            J(ye);
          };
        else if (typeof MessageChannel < 'u') {
          var Ne = new MessageChannel(),
            ve = Ne.port2;
          ((Ne.port1.onmessage = ye),
            (Jt = function () {
              ve.postMessage(null);
            }));
        } else
          Jt = function () {
            V(ye, 0);
          };
        function Ut(C, Y) {
          F = V(function () {
            C(c.unstable_now());
          }, Y);
        }
        ((c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (c.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Dt = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (c.unstable_next = function (C) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = q;
            }
            var W = q;
            q = Y;
            try {
              return C();
            } finally {
              q = W;
            }
          }),
          (c.unstable_requestPaint = function () {
            H = !0;
          }),
          (c.unstable_runWithPriority = function (C, Y) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var W = q;
            q = C;
            try {
              return Y();
            } finally {
              q = W;
            }
          }),
          (c.unstable_scheduleCallback = function (C, Y, W) {
            var vt = c.unstable_now();
            switch (
              (typeof W == 'object' && W !== null
                ? ((W = W.delay),
                  (W = typeof W == 'number' && 0 < W ? vt + W : vt))
                : (W = vt),
              C)
            ) {
              case 1:
                var Et = -1;
                break;
              case 2:
                Et = 250;
                break;
              case 5:
                Et = 1073741823;
                break;
              case 4:
                Et = 1e4;
                break;
              default:
                Et = 5e3;
            }
            return (
              (Et = W + Et),
              (C = {
                id: M++,
                callback: Y,
                priorityLevel: C,
                startTime: W,
                expirationTime: Et,
                sortIndex: -1,
              }),
              W > vt
                ? ((C.sortIndex = W),
                  r(v, C),
                  o(b) === null &&
                    C === o(v) &&
                    (B ? (k(F), (F = -1)) : (B = !0), Ut(rt, W - vt)))
                : ((C.sortIndex = Et),
                  r(b, C),
                  L || K || ((L = !0), bt || ((bt = !0), Jt()))),
              C
            );
          }),
          (c.unstable_shouldYield = Ce),
          (c.unstable_wrapCallback = function (C) {
            var Y = q;
            return function () {
              var W = q;
              q = Y;
              try {
                return C.apply(this, arguments);
              } finally {
                q = W;
              }
            };
          }));
      })(Uf)),
    Uf
  );
}
var uh;
function yv() {
  return (uh || ((uh = 1), (Nf.exports = mv())), Nf.exports);
}
var jf = { exports: {} },
  $t = {};
var ih;
function vv() {
  if (ih) return $t;
  ih = 1;
  var c = Zf();
  function r(b) {
    var v = 'https://react.dev/errors/' + b;
    if (1 < arguments.length) {
      v += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++)
        v += '&args[]=' + encodeURIComponent(arguments[M]);
    }
    return (
      'Minified React error #' +
      b +
      '; visit ' +
      v +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o() {}
  var f = {
      d: {
        f: o,
        r: function () {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for('react.portal');
  function m(b, v, M) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: T == null ? null : '' + T,
      children: b,
      containerInfo: v,
      implementation: M,
    };
  }
  var S = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(b, v) {
    if (b === 'font') return '';
    if (typeof v == 'string') return v === 'use-credentials' ? v : '';
  }
  return (
    ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    ($t.createPortal = function (b, v) {
      var M =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11))
        throw Error(r(299));
      return m(b, v, null, M);
    }),
    ($t.flushSync = function (b) {
      var v = S.T,
        M = f.p;
      try {
        if (((S.T = null), (f.p = 2), b)) return b();
      } finally {
        ((S.T = v), (f.p = M), f.d.f());
      }
    }),
    ($t.preconnect = function (b, v) {
      typeof b == 'string' &&
        (v
          ? ((v = v.crossOrigin),
            (v =
              typeof v == 'string'
                ? v === 'use-credentials'
                  ? v
                  : ''
                : void 0))
          : (v = null),
        f.d.C(b, v));
    }),
    ($t.prefetchDNS = function (b) {
      typeof b == 'string' && f.d.D(b);
    }),
    ($t.preinit = function (b, v) {
      if (typeof b == 'string' && v && typeof v.as == 'string') {
        var M = v.as,
          T = x(M, v.crossOrigin),
          q = typeof v.integrity == 'string' ? v.integrity : void 0,
          K = typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0;
        M === 'style'
          ? f.d.S(b, typeof v.precedence == 'string' ? v.precedence : void 0, {
              crossOrigin: T,
              integrity: q,
              fetchPriority: K,
            })
          : M === 'script' &&
            f.d.X(b, {
              crossOrigin: T,
              integrity: q,
              fetchPriority: K,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            });
      }
    }),
    ($t.preinitModule = function (b, v) {
      if (typeof b == 'string')
        if (typeof v == 'object' && v !== null) {
          if (v.as == null || v.as === 'script') {
            var M = x(v.as, v.crossOrigin);
            f.d.M(b, {
              crossOrigin: M,
              integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
              nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
            });
          }
        } else v == null && f.d.M(b);
    }),
    ($t.preload = function (b, v) {
      if (
        typeof b == 'string' &&
        typeof v == 'object' &&
        v !== null &&
        typeof v.as == 'string'
      ) {
        var M = v.as,
          T = x(M, v.crossOrigin);
        f.d.L(b, M, {
          crossOrigin: T,
          integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
          type: typeof v.type == 'string' ? v.type : void 0,
          fetchPriority:
            typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0,
          referrerPolicy:
            typeof v.referrerPolicy == 'string' ? v.referrerPolicy : void 0,
          imageSrcSet:
            typeof v.imageSrcSet == 'string' ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == 'string' ? v.imageSizes : void 0,
          media: typeof v.media == 'string' ? v.media : void 0,
        });
      }
    }),
    ($t.preloadModule = function (b, v) {
      if (typeof b == 'string')
        if (v) {
          var M = x(v.as, v.crossOrigin);
          f.d.m(b, {
            as: typeof v.as == 'string' && v.as !== 'script' ? v.as : void 0,
            crossOrigin: M,
            integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
          });
        } else f.d.m(b);
    }),
    ($t.requestFormReset = function (b) {
      f.d.r(b);
    }),
    ($t.unstable_batchedUpdates = function (b, v) {
      return b(v);
    }),
    ($t.useFormState = function (b, v, M) {
      return S.H.useFormState(b, v, M);
    }),
    ($t.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    ($t.version = '19.2.4'),
    $t
  );
}
var ch;
function gv() {
  if (ch) return jf.exports;
  ch = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return (c(), (jf.exports = vv()), jf.exports);
}
var fh;
function pv() {
  if (fh) return Un;
  fh = 1;
  var c = yv(),
    r = Zf(),
    o = gv();
  function f(t) {
    var e = 'https://react.dev/errors/' + t;
    if (1 < arguments.length) {
      e += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      e +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function m(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function S(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function x(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function b(t) {
    if (m(t) !== t) throw Error(f(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = m(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return (b(n), t);
          if (u === a) return (b(n), e);
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === l) {
            ((i = !0), (l = n), (a = u));
            break;
          }
          if (s === a) {
            ((i = !0), (a = n), (l = u));
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === l) {
              ((i = !0), (l = u), (a = n));
              break;
            }
            if (s === a) {
              ((i = !0), (a = u), (l = n));
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function M(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = M(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var T = Object.assign,
    q = Symbol.for('react.element'),
    K = Symbol.for('react.transitional.element'),
    L = Symbol.for('react.portal'),
    B = Symbol.for('react.fragment'),
    H = Symbol.for('react.strict_mode'),
    V = Symbol.for('react.profiler'),
    k = Symbol.for('react.consumer'),
    J = Symbol.for('react.context'),
    dt = Symbol.for('react.forward_ref'),
    rt = Symbol.for('react.suspense'),
    bt = Symbol.for('react.suspense_list'),
    F = Symbol.for('react.memo'),
    Dt = Symbol.for('react.lazy'),
    Kt = Symbol.for('react.activity'),
    Ce = Symbol.for('react.memo_cache_sentinel'),
    ye = Symbol.iterator;
  function Jt(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (ye && t[ye]) || t['@@iterator']),
        typeof t == 'function' ? t : null);
  }
  var Ne = Symbol.for('react.client.reference');
  function ve(t) {
    if (t == null) return null;
    if (typeof t == 'function')
      return t.$$typeof === Ne ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case B:
        return 'Fragment';
      case V:
        return 'Profiler';
      case H:
        return 'StrictMode';
      case rt:
        return 'Suspense';
      case bt:
        return 'SuspenseList';
      case Kt:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case L:
          return 'Portal';
        case J:
          return t.displayName || 'Context';
        case k:
          return (t._context.displayName || 'Context') + '.Consumer';
        case dt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case F:
          return (
            (e = t.displayName || null),
            e !== null ? e : ve(t.type) || 'Memo'
          );
        case Dt:
          ((e = t._payload), (t = t._init));
          try {
            return ve(t(e));
          } catch {}
      }
    return null;
  }
  var Ut = Array.isArray,
    C = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    vt = [],
    Et = -1;
  function g(t) {
    return { current: t };
  }
  function j(t) {
    0 > Et || ((t.current = vt[Et]), (vt[Et] = null), Et--);
  }
  function G(t, e) {
    (Et++, (vt[Et] = t.current), (t.current = e));
  }
  var Q = g(null),
    P = g(null),
    lt = g(null),
    ht = g(null);
  function kt(t, e) {
    switch ((G(lt, e), G(P, t), G(Q, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? zd(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = zd(e)), (t = _d(e, t)));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (j(Q), G(Q, t));
  }
  function xt() {
    (j(Q), j(P), j(lt));
  }
  function La(t) {
    t.memoizedState !== null && G(ht, t);
    var e = Q.current,
      l = _d(e, t.type);
    e !== l && (G(P, t), G(Q, l));
  }
  function Yn(t) {
    (P.current === t && (j(Q), j(P)),
      ht.current === t && (j(ht), (Mn._currentValue = W)));
  }
  var ri, If;
  function Cl(t) {
    if (ri === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((ri = (e && e[1]) || ''),
          (If =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      ri +
      t +
      If
    );
  }
  var oi = !1;
  function di(t, e) {
    if (!t || oi) return '';
    oi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (A) {
                  var _ = A;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (A) {
                  _ = A;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                _ = A;
              }
              (U = t()) &&
                typeof U.catch == 'function' &&
                U.catch(function () {});
            }
          } catch (A) {
            if (A && _ && typeof A.stack == 'string') return [A.stack, _.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        'name',
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        s = u[1];
      if (i && s) {
        var h = i.split(`
`),
          z = s.split(`
`);
        for (
          n = a = 0;
          a < h.length && !h[a].includes('DetermineComponentFrameRoot');
        )
          a++;
        for (; n < z.length && !z[n].includes('DetermineComponentFrameRoot'); )
          n++;
        if (a === h.length || n === z.length)
          for (
            a = h.length - 1, n = z.length - 1;
            1 <= a && 0 <= n && h[a] !== z[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== z[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || h[a] !== z[n])) {
                  var D =
                    `
` + h[a].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      D.includes('<anonymous>') &&
                      (D = D.replace('<anonymous>', t.displayName)),
                    D
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((oi = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : '') ? Cl(l) : '';
  }
  function Xh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Cl(t.type);
      case 16:
        return Cl('Lazy');
      case 13:
        return t.child !== e && e !== null
          ? Cl('Suspense Fallback')
          : Cl('Suspense');
      case 19:
        return Cl('SuspenseList');
      case 0:
      case 15:
        return di(t.type, !1);
      case 11:
        return di(t.type.render, !1);
      case 1:
        return di(t.type, !0);
      case 31:
        return Cl('Activity');
      default:
        return '';
    }
  }
  function Pf(t) {
    try {
      var e = '',
        l = null;
      do ((e += Xh(t, l)), (l = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var hi = Object.prototype.hasOwnProperty,
    mi = c.unstable_scheduleCallback,
    yi = c.unstable_cancelCallback,
    Qh = c.unstable_shouldYield,
    Zh = c.unstable_requestPaint,
    ue = c.unstable_now,
    Vh = c.unstable_getCurrentPriorityLevel,
    ts = c.unstable_ImmediatePriority,
    es = c.unstable_UserBlockingPriority,
    Gn = c.unstable_NormalPriority,
    wh = c.unstable_LowPriority,
    ls = c.unstable_IdlePriority,
    Kh = c.log,
    Jh = c.unstable_setDisableYieldValue,
    Ya = null,
    ie = null;
  function ul(t) {
    if (
      (typeof Kh == 'function' && Jh(t),
      ie && typeof ie.setStrictMode == 'function')
    )
      try {
        ie.setStrictMode(Ya, t);
      } catch {}
  }
  var ce = Math.clz32 ? Math.clz32 : kh,
    $h = Math.log,
    Wh = Math.LN2;
  function kh(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - (($h(t) / Wh) | 0)) | 0);
  }
  var Xn = 256,
    Qn = 262144,
    Zn = 4194304;
  function Nl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Vn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = Nl(a))
            : ((i &= s),
              i !== 0
                ? (n = Nl(i))
                : l || ((l = s & ~t), l !== 0 && (n = Nl(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = Nl(s))
            : i !== 0
              ? (n = Nl(i))
              : l || ((l = a & ~t), l !== 0 && (n = Nl(l)))),
      n === 0
        ? 0
        : e !== 0 &&
            e !== n &&
            (e & u) === 0 &&
            ((u = n & -n),
            (l = e & -e),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? e
          : n
    );
  }
  function Ga(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Fh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function as() {
    var t = Zn;
    return ((Zn <<= 1), (Zn & 62914560) === 0 && (Zn = 4194304), t);
  }
  function vi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Xa(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Ih(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var s = t.entanglements,
      h = t.expirationTimes,
      z = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var D = 31 - ce(l),
        U = 1 << D;
      ((s[D] = 0), (h[D] = -1));
      var _ = z[D];
      if (_ !== null)
        for (z[D] = null, D = 0; D < _.length; D++) {
          var A = _[D];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~U;
    }
    (a !== 0 && ns(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e)));
  }
  function ns(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - ce(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function us(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ce(l),
        n = 1 << a;
      ((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n));
    }
  }
  function is(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : gi(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function gi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function pi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function cs() {
    var t = Y.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Jd(t.type));
  }
  function fs(t, e) {
    var l = Y.p;
    try {
      return ((Y.p = t), e());
    } finally {
      Y.p = l;
    }
  }
  var il = Math.random().toString(36).slice(2),
    Xt = '__reactFiber$' + il,
    It = '__reactProps$' + il,
    Fl = '__reactContainer$' + il,
    Si = '__reactEvents$' + il,
    Ph = '__reactListeners$' + il,
    tm = '__reactHandles$' + il,
    ss = '__reactResources$' + il,
    Qa = '__reactMarker$' + il;
  function bi(t) {
    (delete t[Xt], delete t[It], delete t[Si], delete t[Ph], delete t[tm]);
  }
  function Il(t) {
    var e = t[Xt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Fl] || l[Xt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Cd(t); t !== null; ) {
            if ((l = t[Xt])) return l;
            t = Cd(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function Pl(t) {
    if ((t = t[Xt] || t[Fl])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Za(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function ta(t) {
    var e = t[ss];
    return (
      e ||
        (e = t[ss] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Yt(t) {
    t[Qa] = !0;
  }
  var rs = new Set(),
    os = {};
  function Ul(t, e) {
    (ea(t, e), ea(t + 'Capture', e));
  }
  function ea(t, e) {
    for (os[t] = e, t = 0; t < e.length; t++) rs.add(e[t]);
  }
  var em = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    ds = {},
    hs = {};
  function lm(t) {
    return hi.call(hs, t)
      ? !0
      : hi.call(ds, t)
        ? !1
        : em.test(t)
          ? (hs[t] = !0)
          : ((ds[t] = !0), !1);
  }
  function wn(t, e, l) {
    if (lm(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(e);
            return;
          case 'boolean':
            var a = e.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, '' + l);
      }
  }
  function Kn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, '' + l);
    }
  }
  function Ge(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, '' + a);
    }
  }
  function ge(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t;
      case 'object':
        return t;
      default:
        return '';
    }
  }
  function ms(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === 'input' &&
      (e === 'checkbox' || e === 'radio')
    );
  }
  function am(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((l = '' + i), u.call(this, i));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = '' + i;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Ei(t) {
    if (!t._valueTracker) {
      var e = ms(t) ? 'checked' : 'value';
      t._valueTracker = am(t, e, '' + t[e]);
    }
  }
  function ys(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = '';
    return (
      t && (a = ms(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Jn(t) {
    if (
      ((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var nm = /[\n"\\]/g;
  function pe(t) {
    return t.replace(nm, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Ti(t, e, l, a, n, u, i, s) {
    ((t.name = ''),
      i != null &&
      typeof i != 'function' &&
      typeof i != 'symbol' &&
      typeof i != 'boolean'
        ? (t.type = i)
        : t.removeAttribute('type'),
      e != null
        ? i === 'number'
          ? ((e === 0 && t.value === '') || t.value != e) &&
            (t.value = '' + ge(e))
          : t.value !== '' + ge(e) && (t.value = '' + ge(e))
        : (i !== 'submit' && i !== 'reset') || t.removeAttribute('value'),
      e != null
        ? zi(t, i, ge(e))
        : l != null
          ? zi(t, i, ge(l))
          : a != null && t.removeAttribute('value'),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      s != null &&
      typeof s != 'function' &&
      typeof s != 'symbol' &&
      typeof s != 'boolean'
        ? (t.name = '' + ge(s))
        : t.removeAttribute('name'));
  }
  function vs(t, e, l, a, n, u, i, s) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || e != null)) {
        Ei(t);
        return;
      }
      ((l = l != null ? '' + ge(l) : ''),
        (e = e != null ? '' + ge(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (t.checked = s ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (t.name = i),
      Ei(t));
  }
  function zi(t, e, l) {
    (e === 'number' && Jn(t.ownerDocument) === t) ||
      t.defaultValue === '' + l ||
      (t.defaultValue = '' + l);
  }
  function la(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e['$' + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        ((n = e.hasOwnProperty('$' + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0));
    } else {
      for (l = '' + ge(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          ((t[n].selected = !0), a && (t[n].defaultSelected = !0));
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function gs(t, e, l) {
    if (
      e != null &&
      ((e = '' + ge(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? '' + ge(l) : '';
  }
  function ps(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Ut(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ''), (e = l));
    }
    ((l = ge(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== '' && a !== null && (t.value = a),
      Ei(t));
  }
  function aa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var um = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Ss(t, e, l) {
    var a = e.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? t.setProperty(e, '')
        : e === 'float'
          ? (t.cssFloat = '')
          : (t[e] = '')
      : a
        ? t.setProperty(e, l)
        : typeof l != 'number' || l === 0 || um.has(e)
          ? e === 'float'
            ? (t.cssFloat = l)
            : (t[e] = ('' + l).trim())
          : (t[e] = l + 'px');
  }
  function bs(t, e, l) {
    if (e != null && typeof e != 'object') throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? t.setProperty(a, '')
            : a === 'float'
              ? (t.cssFloat = '')
              : (t[a] = ''));
      for (var n in e)
        ((a = e[n]), e.hasOwnProperty(n) && l[n] !== a && Ss(t, n, a));
    } else for (var u in e) e.hasOwnProperty(u) && Ss(t, u, e[u]);
  }
  function _i(t) {
    if (t.indexOf('-') === -1) return !1;
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var im = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    cm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $n(t) {
    return cm.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Xe() {}
  var Ai = null;
  function Ri(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var na = null,
    ua = null;
  function Es(t) {
    var e = Pl(t);
    if (e && (t = e.stateNode)) {
      var l = t[It] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if (
            (Ti(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === 'radio' && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + pe('' + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[It] || null;
                if (!n) throw Error(f(90));
                Ti(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((a = l[e]), a.form === t.form && ys(a));
          }
          break t;
        case 'textarea':
          gs(t, l.value, l.defaultValue);
          break t;
        case 'select':
          ((e = l.value), e != null && la(t, !!l.multiple, e, !1));
      }
    }
  }
  var Oi = !1;
  function Ts(t, e, l) {
    if (Oi) return t(e, l);
    Oi = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Oi = !1),
        (na !== null || ua !== null) &&
          (Hu(), na && ((e = na), (t = ua), (ua = na = null), Es(e), t)))
      )
        for (e = 0; e < t.length; e++) Es(t[e]);
    }
  }
  function Va(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[It] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === 'button' ||
            t === 'input' ||
            t === 'select' ||
            t === 'textarea'
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != 'function') throw Error(f(231, e, typeof l));
    return l;
  }
  var Qe = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Mi = !1;
  if (Qe)
    try {
      var wa = {};
      (Object.defineProperty(wa, 'passive', {
        get: function () {
          Mi = !0;
        },
      }),
        window.addEventListener('test', wa, wa),
        window.removeEventListener('test', wa, wa));
    } catch {
      Mi = !1;
    }
  var cl = null,
    Di = null,
    Wn = null;
  function zs() {
    if (Wn) return Wn;
    var t,
      e = Di,
      l = e.length,
      a,
      n = 'value' in cl ? cl.value : cl.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
    return (Wn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function kn(t) {
    var e = t.keyCode;
    return (
      'charCode' in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Fn() {
    return !0;
  }
  function _s() {
    return !1;
  }
  function Pt(t) {
    function e(l, a, n, u, i) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Fn
          : _s),
        (this.isPropagationStopped = _s),
        this
      );
    }
    return (
      T(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = Fn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = Fn));
        },
        persist: function () {},
        isPersistent: Fn,
      }),
      e
    );
  }
  var jl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    In = Pt(jl),
    Ka = T({}, jl, { view: 0, detail: 0 }),
    fm = Pt(Ka),
    xi,
    Ci,
    Ja,
    Pn = T({}, Ka, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ui,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== Ja &&
              (Ja && t.type === 'mousemove'
                ? ((xi = t.screenX - Ja.screenX), (Ci = t.screenY - Ja.screenY))
                : (Ci = xi = 0),
              (Ja = t)),
            xi);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Ci;
      },
    }),
    As = Pt(Pn),
    sm = T({}, Pn, { dataTransfer: 0 }),
    rm = Pt(sm),
    om = T({}, Ka, { relatedTarget: 0 }),
    Ni = Pt(om),
    dm = T({}, jl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hm = Pt(dm),
    mm = T({}, jl, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ym = Pt(mm),
    vm = T({}, jl, { data: 0 }),
    Rs = Pt(vm),
    gm = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    pm = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Sm = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function bm(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Sm[t])
        ? !!e[t]
        : !1;
  }
  function Ui() {
    return bm;
  }
  var Em = T({}, Ka, {
      key: function (t) {
        if (t.key) {
          var e = gm[t.key] || t.key;
          if (e !== 'Unidentified') return e;
        }
        return t.type === 'keypress'
          ? ((t = kn(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? pm[t.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ui,
      charCode: function (t) {
        return t.type === 'keypress' ? kn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress'
          ? kn(t)
          : t.type === 'keydown' || t.type === 'keyup'
            ? t.keyCode
            : 0;
      },
    }),
    Tm = Pt(Em),
    zm = T({}, Pn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Os = Pt(zm),
    _m = T({}, Ka, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ui,
    }),
    Am = Pt(_m),
    Rm = T({}, jl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Om = Pt(Rm),
    Mm = T({}, Pn, {
      deltaX: function (t) {
        return 'deltaX' in t
          ? t.deltaX
          : 'wheelDeltaX' in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
            ? -t.wheelDeltaY
            : 'wheelDelta' in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Dm = Pt(Mm),
    xm = T({}, jl, { newState: 0, oldState: 0 }),
    Cm = Pt(xm),
    Nm = [9, 13, 27, 32],
    ji = Qe && 'CompositionEvent' in window,
    $a = null;
  Qe && 'documentMode' in document && ($a = document.documentMode);
  var Um = Qe && 'TextEvent' in window && !$a,
    Ms = Qe && (!ji || ($a && 8 < $a && 11 >= $a)),
    Ds = ' ',
    xs = !1;
  function Cs(t, e) {
    switch (t) {
      case 'keyup':
        return Nm.indexOf(e.keyCode) !== -1;
      case 'keydown':
        return e.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ns(t) {
    return (
      (t = t.detail),
      typeof t == 'object' && 'data' in t ? t.data : null
    );
  }
  var ia = !1;
  function jm(t, e) {
    switch (t) {
      case 'compositionend':
        return Ns(e);
      case 'keypress':
        return e.which !== 32 ? null : ((xs = !0), Ds);
      case 'textInput':
        return ((t = e.data), t === Ds && xs ? null : t);
      default:
        return null;
    }
  }
  function Hm(t, e) {
    if (ia)
      return t === 'compositionend' || (!ji && Cs(t, e))
        ? ((t = zs()), (Wn = Di = cl = null), (ia = !1), t)
        : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case 'compositionend':
        return Ms && e.locale !== 'ko' ? null : e.data;
      default:
        return null;
    }
  }
  var Bm = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Us(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === 'input' ? !!Bm[t.type] : e === 'textarea';
  }
  function js(t, e, l, a) {
    (na ? (ua ? ua.push(a) : (ua = [a])) : (na = a),
      (e = Qu(e, 'onChange')),
      0 < e.length &&
        ((l = new In('onChange', 'change', null, l, a)),
        t.push({ event: l, listeners: e })));
  }
  var Wa = null,
    ka = null;
  function qm(t) {
    gd(t, 0);
  }
  function tu(t) {
    var e = Za(t);
    if (ys(e)) return t;
  }
  function Hs(t, e) {
    if (t === 'change') return e;
  }
  var Bs = !1;
  if (Qe) {
    var Hi;
    if (Qe) {
      var Bi = 'oninput' in document;
      if (!Bi) {
        var qs = document.createElement('div');
        (qs.setAttribute('oninput', 'return;'),
          (Bi = typeof qs.oninput == 'function'));
      }
      Hi = Bi;
    } else Hi = !1;
    Bs = Hi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ls() {
    Wa && (Wa.detachEvent('onpropertychange', Ys), (ka = Wa = null));
  }
  function Ys(t) {
    if (t.propertyName === 'value' && tu(ka)) {
      var e = [];
      (js(e, ka, t, Ri(t)), Ts(qm, e));
    }
  }
  function Lm(t, e, l) {
    t === 'focusin'
      ? (Ls(), (Wa = e), (ka = l), Wa.attachEvent('onpropertychange', Ys))
      : t === 'focusout' && Ls();
  }
  function Ym(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
      return tu(ka);
  }
  function Gm(t, e) {
    if (t === 'click') return tu(e);
  }
  function Xm(t, e) {
    if (t === 'input' || t === 'change') return tu(e);
  }
  function Qm(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var fe = typeof Object.is == 'function' ? Object.is : Qm;
  function Fa(t, e) {
    if (fe(t, e)) return !0;
    if (
      typeof t != 'object' ||
      t === null ||
      typeof e != 'object' ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!hi.call(e, n) || !fe(t[n], e[n])) return !1;
    }
    return !0;
  }
  function Gs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Xs(t, e) {
    var l = Gs(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Gs(l);
    }
  }
  function Qs(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Qs(t, e.parentNode)
            : 'contains' in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Zs(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Jn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Jn(t.document);
    }
    return e;
  }
  function qi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        e === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var Zm = Qe && 'documentMode' in document && 11 >= document.documentMode,
    ca = null,
    Li = null,
    Ia = null,
    Yi = !1;
  function Vs(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Yi ||
      ca == null ||
      ca !== Jn(a) ||
      ((a = ca),
      'selectionStart' in a && qi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ia && Fa(Ia, a)) ||
        ((Ia = a),
        (a = Qu(Li, 'onSelect')),
        0 < a.length &&
          ((e = new In('onSelect', 'select', null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = ca))));
  }
  function Hl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l['Webkit' + t] = 'webkit' + e),
      (l['Moz' + t] = 'moz' + e),
      l
    );
  }
  var fa = {
      animationend: Hl('Animation', 'AnimationEnd'),
      animationiteration: Hl('Animation', 'AnimationIteration'),
      animationstart: Hl('Animation', 'AnimationStart'),
      transitionrun: Hl('Transition', 'TransitionRun'),
      transitionstart: Hl('Transition', 'TransitionStart'),
      transitioncancel: Hl('Transition', 'TransitionCancel'),
      transitionend: Hl('Transition', 'TransitionEnd'),
    },
    Gi = {},
    ws = {};
  Qe &&
    ((ws = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete fa.animationend.animation,
      delete fa.animationiteration.animation,
      delete fa.animationstart.animation),
    'TransitionEvent' in window || delete fa.transitionend.transition);
  function Bl(t) {
    if (Gi[t]) return Gi[t];
    if (!fa[t]) return t;
    var e = fa[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in ws) return (Gi[t] = e[l]);
    return t;
  }
  var Ks = Bl('animationend'),
    Js = Bl('animationiteration'),
    $s = Bl('animationstart'),
    Vm = Bl('transitionrun'),
    wm = Bl('transitionstart'),
    Km = Bl('transitioncancel'),
    Ws = Bl('transitionend'),
    ks = new Map(),
    Xi =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Xi.push('scrollEnd');
  function Me(t, e) {
    (ks.set(t, e), Ul(e, [t]));
  }
  var eu =
      typeof reportError == 'function'
        ? reportError
        : function (t) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var e = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == 'object' &&
                  t !== null &&
                  typeof t.message == 'string'
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', t);
              return;
            }
            console.error(t);
          },
    Se = [],
    sa = 0,
    Qi = 0;
  function lu() {
    for (var t = sa, e = (Qi = sa = 0); e < t; ) {
      var l = Se[e];
      Se[e++] = null;
      var a = Se[e];
      Se[e++] = null;
      var n = Se[e];
      Se[e++] = null;
      var u = Se[e];
      if (((Se[e++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && Fs(l, n, u);
    }
  }
  function au(t, e, l, a) {
    ((Se[sa++] = t),
      (Se[sa++] = e),
      (Se[sa++] = l),
      (Se[sa++] = a),
      (Qi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Zi(t, e, l, a) {
    return (au(t, e, l, a), nu(t));
  }
  function ql(t, e) {
    return (au(t, null, null, e), nu(t));
  }
  function Fs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ce(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function nu(t) {
    if (50 < En) throw ((En = 0), (Ic = null), Error(f(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var ra = {};
  function Jm(t, e, l, a) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function se(t, e, l, a) {
    return new Jm(t, e, l, a);
  }
  function Vi(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ze(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = se(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Is(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function uu(t, e, l, a, n, u) {
    var i = 0;
    if (((a = t), typeof t == 'function')) Vi(t) && (i = 1);
    else if (typeof t == 'string')
      i = Iy(t, l, Q.current)
        ? 26
        : t === 'html' || t === 'head' || t === 'body'
          ? 27
          : 5;
    else
      t: switch (t) {
        case Kt:
          return (
            (t = se(31, l, e, n)),
            (t.elementType = Kt),
            (t.lanes = u),
            t
          );
        case B:
          return Ll(l.children, n, u, e);
        case H:
          ((i = 8), (n |= 24));
          break;
        case V:
          return (
            (t = se(12, l, e, n | 2)),
            (t.elementType = V),
            (t.lanes = u),
            t
          );
        case rt:
          return (
            (t = se(13, l, e, n)),
            (t.elementType = rt),
            (t.lanes = u),
            t
          );
        case bt:
          return (
            (t = se(19, l, e, n)),
            (t.elementType = bt),
            (t.lanes = u),
            t
          );
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case J:
                i = 10;
                break t;
              case k:
                i = 9;
                break t;
              case dt:
                i = 11;
                break t;
              case F:
                i = 14;
                break t;
              case Dt:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (l = Error(f(130, t === null ? 'null' : typeof t, ''))),
            (a = null));
      }
    return (
      (e = se(i, l, e, n)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = u),
      e
    );
  }
  function Ll(t, e, l, a) {
    return ((t = se(7, t, a, e)), (t.lanes = l), t);
  }
  function wi(t, e, l) {
    return ((t = se(6, t, null, e)), (t.lanes = l), t);
  }
  function Ps(t) {
    var e = se(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Ki(t, e, l) {
    return (
      (e = se(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var tr = new WeakMap();
  function be(t, e) {
    if (typeof t == 'object' && t !== null) {
      var l = tr.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Pf(e) }), tr.set(t, e), e);
    }
    return { value: t, source: e, stack: Pf(e) };
  }
  var oa = [],
    da = 0,
    iu = null,
    Pa = 0,
    Ee = [],
    Te = 0,
    fl = null,
    Ue = 1,
    je = '';
  function Ve(t, e) {
    ((oa[da++] = Pa), (oa[da++] = iu), (iu = t), (Pa = e));
  }
  function er(t, e, l) {
    ((Ee[Te++] = Ue), (Ee[Te++] = je), (Ee[Te++] = fl), (fl = t));
    var a = Ue;
    t = je;
    var n = 32 - ce(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - ce(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Ue = (1 << (32 - ce(e) + n)) | (l << n) | a),
        (je = u + t));
    } else ((Ue = (1 << u) | (l << n) | a), (je = t));
  }
  function Ji(t) {
    t.return !== null && (Ve(t, 1), er(t, 1, 0));
  }
  function $i(t) {
    for (; t === iu; )
      ((iu = oa[--da]), (oa[da] = null), (Pa = oa[--da]), (oa[da] = null));
    for (; t === fl; )
      ((fl = Ee[--Te]),
        (Ee[Te] = null),
        (je = Ee[--Te]),
        (Ee[Te] = null),
        (Ue = Ee[--Te]),
        (Ee[Te] = null));
  }
  function lr(t, e) {
    ((Ee[Te++] = Ue),
      (Ee[Te++] = je),
      (Ee[Te++] = fl),
      (Ue = e.id),
      (je = e.overflow),
      (fl = t));
  }
  var Qt = null,
    zt = null,
    ct = !1,
    sl = null,
    ze = !1,
    Wi = Error(f(519));
  function rl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? 'text'
          : 'HTML',
        '',
      ),
    );
    throw (tn(be(e, t)), Wi);
  }
  function ar(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Xt] = t), (e[It] = a), l)) {
      case 'dialog':
        (nt('cancel', e), nt('close', e));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        nt('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < zn.length; l++) nt(zn[l], e);
        break;
      case 'source':
        nt('error', e);
        break;
      case 'img':
      case 'image':
      case 'link':
        (nt('error', e), nt('load', e));
        break;
      case 'details':
        nt('toggle', e);
        break;
      case 'input':
        (nt('invalid', e),
          vs(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case 'select':
        nt('invalid', e);
        break;
      case 'textarea':
        (nt('invalid', e), ps(e, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      e.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      Ed(e.textContent, l)
        ? (a.popover != null && (nt('beforetoggle', e), nt('toggle', e)),
          a.onScroll != null && nt('scroll', e),
          a.onScrollEnd != null && nt('scrollend', e),
          a.onClick != null && (e.onclick = Xe),
          (e = !0))
        : (e = !1),
      e || rl(t, !0));
  }
  function nr(t) {
    for (Qt = t.return; Qt; )
      switch (Qt.tag) {
        case 5:
        case 31:
        case 13:
          ze = !1;
          return;
        case 27:
        case 3:
          ze = !0;
          return;
        default:
          Qt = Qt.return;
      }
  }
  function ha(t) {
    if (t !== Qt) return !1;
    if (!ct) return (nr(t), (ct = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== 'form' && l !== 'button') || mf(t.type, t.memoizedProps))),
        (l = !l)),
      l && zt && rl(t),
      nr(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      zt = xd(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      zt = xd(t);
    } else
      e === 27
        ? ((e = zt), _l(t.type) ? ((t = Sf), (Sf = null), (zt = t)) : (zt = e))
        : (zt = Qt ? Ae(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Yl() {
    ((zt = Qt = null), (ct = !1));
  }
  function ki() {
    var t = sl;
    return (
      t !== null &&
        (ae === null ? (ae = t) : ae.push.apply(ae, t), (sl = null)),
      t
    );
  }
  function tn(t) {
    sl === null ? (sl = [t]) : sl.push(t);
  }
  var Fi = g(null),
    Gl = null,
    we = null;
  function ol(t, e, l) {
    (G(Fi, e._currentValue), (e._currentValue = l));
  }
  function Ke(t) {
    ((t._currentValue = Fi.current), j(Fi));
  }
  function Ii(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Pi(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var h = 0; h < e.length; h++)
            if (s.context === e[h]) {
              ((u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                Ii(u.return, l, t),
                a || (i = null));
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(f(341));
        ((i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Ii(i, l, t),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ma(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var s = n.type;
          fe(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === ht.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(Mn) : (t = [Mn]));
      }
      n = n.return;
    }
    (t !== null && Pi(e, t, l, a), (e.flags |= 262144));
  }
  function cu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!fe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Xl(t) {
    ((Gl = t),
      (we = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Zt(t) {
    return ur(Gl, t);
  }
  function fu(t, e) {
    return (Gl === null && Xl(t), ur(t, e));
  }
  function ur(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), we === null)) {
      if (t === null) throw Error(f(308));
      ((we = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else we = we.next = e;
    return l;
  }
  var $m =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    Wm = c.unstable_scheduleCallback,
    km = c.unstable_NormalPriority,
    jt = {
      $$typeof: J,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function tc() {
    return { controller: new $m(), data: new Map(), refCount: 0 };
  }
  function en(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Wm(km, function () {
          t.controller.abort();
        }));
  }
  var ln = null,
    ec = 0,
    ya = 0,
    va = null;
  function Fm(t, e) {
    if (ln === null) {
      var l = (ln = []);
      ((ec = 0),
        (ya = nf()),
        (va = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (ec++, e.then(ir, ir), e);
  }
  function ir() {
    if (--ec === 0 && ln !== null) {
      va !== null && (va.status = 'fulfilled');
      var t = ln;
      ((ln = null), (ya = 0), (va = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Im(t, e) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = 'fulfilled'), (a.value = e));
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var cr = C.S;
  C.S = function (t, e) {
    ((wo = ue()),
      typeof e == 'object' &&
        e !== null &&
        typeof e.then == 'function' &&
        Fm(t, e),
      cr !== null && cr(t, e));
  };
  var Ql = g(null);
  function lc() {
    var t = Ql.current;
    return t !== null ? t : Tt.pooledCache;
  }
  function su(t, e) {
    e === null ? G(Ql, Ql.current) : G(Ql, e.pool);
  }
  function fr() {
    var t = lc();
    return t === null ? null : { parent: jt._currentValue, pool: t };
  }
  var ga = Error(f(460)),
    ac = Error(f(474)),
    ru = Error(f(542)),
    ou = { then: function () {} };
  function sr(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function rr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Xe, Xe), (e = l)),
      e.status)
    ) {
      case 'fulfilled':
        return e.value;
      case 'rejected':
        throw ((t = e.reason), dr(t), t);
      default:
        if (typeof e.status == 'string') e.then(Xe, Xe);
        else {
          if (((t = Tt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          ((t = e),
            (t.status = 'pending'),
            t.then(
              function (a) {
                if (e.status === 'pending') {
                  var n = e;
                  ((n.status = 'fulfilled'), (n.value = a));
                }
              },
              function (a) {
                if (e.status === 'pending') {
                  var n = e;
                  ((n.status = 'rejected'), (n.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case 'fulfilled':
            return e.value;
          case 'rejected':
            throw ((t = e.reason), dr(t), t);
        }
        throw ((Vl = e), ga);
    }
  }
  function Zl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function'
        ? ((Vl = l), ga)
        : l;
    }
  }
  var Vl = null;
  function or() {
    if (Vl === null) throw Error(f(459));
    var t = Vl;
    return ((Vl = null), t);
  }
  function dr(t) {
    if (t === ga || t === ru) throw Error(f(483));
  }
  var pa = null,
    an = 0;
  function du(t) {
    var e = an;
    return ((an += 1), pa === null && (pa = []), rr(pa, t, e));
  }
  function nn(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function hu(t, e) {
    throw e.$$typeof === q
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === '[object Object]'
              ? 'object with keys {' + Object.keys(e).join(', ') + '}'
              : t,
          ),
        ));
  }
  function hr(t) {
    function e(p, y) {
      if (t) {
        var E = p.deletions;
        E === null ? ((p.deletions = [y]), (p.flags |= 16)) : E.push(y);
      }
    }
    function l(p, y) {
      if (!t) return null;
      for (; y !== null; ) (e(p, y), (y = y.sibling));
      return null;
    }
    function a(p) {
      for (var y = new Map(); p !== null; )
        (p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling));
      return y;
    }
    function n(p, y) {
      return ((p = Ze(p, y)), (p.index = 0), (p.sibling = null), p);
    }
    function u(p, y, E) {
      return (
        (p.index = E),
        t
          ? ((E = p.alternate),
            E !== null
              ? ((E = E.index), E < y ? ((p.flags |= 67108866), y) : E)
              : ((p.flags |= 67108866), y))
          : ((p.flags |= 1048576), y)
      );
    }
    function i(p) {
      return (t && p.alternate === null && (p.flags |= 67108866), p);
    }
    function s(p, y, E, N) {
      return y === null || y.tag !== 6
        ? ((y = wi(E, p.mode, N)), (y.return = p), y)
        : ((y = n(y, E)), (y.return = p), y);
    }
    function h(p, y, E, N) {
      var w = E.type;
      return w === B
        ? D(p, y, E.props.children, N, E.key)
        : y !== null &&
            (y.elementType === w ||
              (typeof w == 'object' &&
                w !== null &&
                w.$$typeof === Dt &&
                Zl(w) === y.type))
          ? ((y = n(y, E.props)), nn(y, E), (y.return = p), y)
          : ((y = uu(E.type, E.key, E.props, null, p.mode, N)),
            nn(y, E),
            (y.return = p),
            y);
    }
    function z(p, y, E, N) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== E.containerInfo ||
        y.stateNode.implementation !== E.implementation
        ? ((y = Ki(E, p.mode, N)), (y.return = p), y)
        : ((y = n(y, E.children || [])), (y.return = p), y);
    }
    function D(p, y, E, N, w) {
      return y === null || y.tag !== 7
        ? ((y = Ll(E, p.mode, N, w)), (y.return = p), y)
        : ((y = n(y, E)), (y.return = p), y);
    }
    function U(p, y, E) {
      if (
        (typeof y == 'string' && y !== '') ||
        typeof y == 'number' ||
        typeof y == 'bigint'
      )
        return ((y = wi('' + y, p.mode, E)), (y.return = p), y);
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case K:
            return (
              (E = uu(y.type, y.key, y.props, null, p.mode, E)),
              nn(E, y),
              (E.return = p),
              E
            );
          case L:
            return ((y = Ki(y, p.mode, E)), (y.return = p), y);
          case Dt:
            return ((y = Zl(y)), U(p, y, E));
        }
        if (Ut(y) || Jt(y))
          return ((y = Ll(y, p.mode, E, null)), (y.return = p), y);
        if (typeof y.then == 'function') return U(p, du(y), E);
        if (y.$$typeof === J) return U(p, fu(p, y), E);
        hu(p, y);
      }
      return null;
    }
    function _(p, y, E, N) {
      var w = y !== null ? y.key : null;
      if (
        (typeof E == 'string' && E !== '') ||
        typeof E == 'number' ||
        typeof E == 'bigint'
      )
        return w !== null ? null : s(p, y, '' + E, N);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case K:
            return E.key === w ? h(p, y, E, N) : null;
          case L:
            return E.key === w ? z(p, y, E, N) : null;
          case Dt:
            return ((E = Zl(E)), _(p, y, E, N));
        }
        if (Ut(E) || Jt(E)) return w !== null ? null : D(p, y, E, N, null);
        if (typeof E.then == 'function') return _(p, y, du(E), N);
        if (E.$$typeof === J) return _(p, y, fu(p, E), N);
        hu(p, E);
      }
      return null;
    }
    function A(p, y, E, N, w) {
      if (
        (typeof N == 'string' && N !== '') ||
        typeof N == 'number' ||
        typeof N == 'bigint'
      )
        return ((p = p.get(E) || null), s(y, p, '' + N, w));
      if (typeof N == 'object' && N !== null) {
        switch (N.$$typeof) {
          case K:
            return (
              (p = p.get(N.key === null ? E : N.key) || null),
              h(y, p, N, w)
            );
          case L:
            return (
              (p = p.get(N.key === null ? E : N.key) || null),
              z(y, p, N, w)
            );
          case Dt:
            return ((N = Zl(N)), A(p, y, E, N, w));
        }
        if (Ut(N) || Jt(N))
          return ((p = p.get(E) || null), D(y, p, N, w, null));
        if (typeof N.then == 'function') return A(p, y, E, du(N), w);
        if (N.$$typeof === J) return A(p, y, E, fu(y, N), w);
        hu(y, N);
      }
      return null;
    }
    function X(p, y, E, N) {
      for (
        var w = null, ft = null, Z = y, et = (y = 0), it = null;
        Z !== null && et < E.length;
        et++
      ) {
        Z.index > et ? ((it = Z), (Z = null)) : (it = Z.sibling);
        var st = _(p, Z, E[et], N);
        if (st === null) {
          Z === null && (Z = it);
          break;
        }
        (t && Z && st.alternate === null && e(p, Z),
          (y = u(st, y, et)),
          ft === null ? (w = st) : (ft.sibling = st),
          (ft = st),
          (Z = it));
      }
      if (et === E.length) return (l(p, Z), ct && Ve(p, et), w);
      if (Z === null) {
        for (; et < E.length; et++)
          ((Z = U(p, E[et], N)),
            Z !== null &&
              ((y = u(Z, y, et)),
              ft === null ? (w = Z) : (ft.sibling = Z),
              (ft = Z)));
        return (ct && Ve(p, et), w);
      }
      for (Z = a(Z); et < E.length; et++)
        ((it = A(Z, p, et, E[et], N)),
          it !== null &&
            (t &&
              it.alternate !== null &&
              Z.delete(it.key === null ? et : it.key),
            (y = u(it, y, et)),
            ft === null ? (w = it) : (ft.sibling = it),
            (ft = it)));
      return (
        t &&
          Z.forEach(function (Dl) {
            return e(p, Dl);
          }),
        ct && Ve(p, et),
        w
      );
    }
    function $(p, y, E, N) {
      if (E == null) throw Error(f(151));
      for (
        var w = null, ft = null, Z = y, et = (y = 0), it = null, st = E.next();
        Z !== null && !st.done;
        et++, st = E.next()
      ) {
        Z.index > et ? ((it = Z), (Z = null)) : (it = Z.sibling);
        var Dl = _(p, Z, st.value, N);
        if (Dl === null) {
          Z === null && (Z = it);
          break;
        }
        (t && Z && Dl.alternate === null && e(p, Z),
          (y = u(Dl, y, et)),
          ft === null ? (w = Dl) : (ft.sibling = Dl),
          (ft = Dl),
          (Z = it));
      }
      if (st.done) return (l(p, Z), ct && Ve(p, et), w);
      if (Z === null) {
        for (; !st.done; et++, st = E.next())
          ((st = U(p, st.value, N)),
            st !== null &&
              ((y = u(st, y, et)),
              ft === null ? (w = st) : (ft.sibling = st),
              (ft = st)));
        return (ct && Ve(p, et), w);
      }
      for (Z = a(Z); !st.done; et++, st = E.next())
        ((st = A(Z, p, et, st.value, N)),
          st !== null &&
            (t &&
              st.alternate !== null &&
              Z.delete(st.key === null ? et : st.key),
            (y = u(st, y, et)),
            ft === null ? (w = st) : (ft.sibling = st),
            (ft = st)));
      return (
        t &&
          Z.forEach(function (sv) {
            return e(p, sv);
          }),
        ct && Ve(p, et),
        w
      );
    }
    function St(p, y, E, N) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === B &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case K:
            t: {
              for (var w = E.key; y !== null; ) {
                if (y.key === w) {
                  if (((w = E.type), w === B)) {
                    if (y.tag === 7) {
                      (l(p, y.sibling),
                        (N = n(y, E.props.children)),
                        (N.return = p),
                        (p = N));
                      break t;
                    }
                  } else if (
                    y.elementType === w ||
                    (typeof w == 'object' &&
                      w !== null &&
                      w.$$typeof === Dt &&
                      Zl(w) === y.type)
                  ) {
                    (l(p, y.sibling),
                      (N = n(y, E.props)),
                      nn(N, E),
                      (N.return = p),
                      (p = N));
                    break t;
                  }
                  l(p, y);
                  break;
                } else e(p, y);
                y = y.sibling;
              }
              E.type === B
                ? ((N = Ll(E.props.children, p.mode, N, E.key)),
                  (N.return = p),
                  (p = N))
                : ((N = uu(E.type, E.key, E.props, null, p.mode, N)),
                  nn(N, E),
                  (N.return = p),
                  (p = N));
            }
            return i(p);
          case L:
            t: {
              for (w = E.key; y !== null; ) {
                if (y.key === w)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === E.containerInfo &&
                    y.stateNode.implementation === E.implementation
                  ) {
                    (l(p, y.sibling),
                      (N = n(y, E.children || [])),
                      (N.return = p),
                      (p = N));
                    break t;
                  } else {
                    l(p, y);
                    break;
                  }
                else e(p, y);
                y = y.sibling;
              }
              ((N = Ki(E, p.mode, N)), (N.return = p), (p = N));
            }
            return i(p);
          case Dt:
            return ((E = Zl(E)), St(p, y, E, N));
        }
        if (Ut(E)) return X(p, y, E, N);
        if (Jt(E)) {
          if (((w = Jt(E)), typeof w != 'function')) throw Error(f(150));
          return ((E = w.call(E)), $(p, y, E, N));
        }
        if (typeof E.then == 'function') return St(p, y, du(E), N);
        if (E.$$typeof === J) return St(p, y, fu(p, E), N);
        hu(p, E);
      }
      return (typeof E == 'string' && E !== '') ||
        typeof E == 'number' ||
        typeof E == 'bigint'
        ? ((E = '' + E),
          y !== null && y.tag === 6
            ? (l(p, y.sibling), (N = n(y, E)), (N.return = p), (p = N))
            : (l(p, y), (N = wi(E, p.mode, N)), (N.return = p), (p = N)),
          i(p))
        : l(p, y);
    }
    return function (p, y, E, N) {
      try {
        an = 0;
        var w = St(p, y, E, N);
        return ((pa = null), w);
      } catch (Z) {
        if (Z === ga || Z === ru) throw Z;
        var ft = se(29, Z, null, p.mode);
        return ((ft.lanes = N), (ft.return = p), ft);
      }
    };
  }
  var wl = hr(!0),
    mr = hr(!1),
    dl = !1;
  function nc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uc(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function hl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ml(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ot & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = nu(t)),
        Fs(t, null, l),
        e
      );
    }
    return (au(t, a, e, l), nu(t));
  }
  function un(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), us(t, l));
    }
  }
  function ic(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var cc = !1;
  function cn() {
    if (cc) {
      var t = va;
      if (t !== null) throw t;
    }
  }
  function fn(t, e, l, a) {
    cc = !1;
    var n = t.updateQueue;
    dl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var h = s,
        z = h.next;
      ((h.next = null), i === null ? (u = z) : (i.next = z), (i = h));
      var D = t.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (s = D.lastBaseUpdate),
        s !== i &&
          (s === null ? (D.firstBaseUpdate = z) : (s.next = z),
          (D.lastBaseUpdate = h)));
    }
    if (u !== null) {
      var U = n.baseState;
      ((i = 0), (D = z = h = null), (s = u));
      do {
        var _ = s.lane & -536870913,
          A = _ !== s.lane;
        if (A ? (ut & _) === _ : (a & _) === _) {
          (_ !== 0 && _ === ya && (cc = !0),
            D !== null &&
              (D = D.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var X = t,
              $ = s;
            _ = e;
            var St = l;
            switch ($.tag) {
              case 1:
                if (((X = $.payload), typeof X == 'function')) {
                  U = X.call(St, U, _);
                  break t;
                }
                U = X;
                break t;
              case 3:
                X.flags = (X.flags & -65537) | 128;
              case 0:
                if (
                  ((X = $.payload),
                  (_ = typeof X == 'function' ? X.call(St, U, _) : X),
                  _ == null)
                )
                  break t;
                U = T({}, U, _);
                break t;
              case 2:
                dl = !0;
            }
          }
          ((_ = s.callback),
            _ !== null &&
              ((t.flags |= 64),
              A && (t.flags |= 8192),
              (A = n.callbacks),
              A === null ? (n.callbacks = [_]) : A.push(_)));
        } else
          ((A = {
            lane: _,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            D === null ? ((z = D = A), (h = U)) : (D = D.next = A),
            (i |= _));
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          ((A = s),
            (s = A.next),
            (A.next = null),
            (n.lastBaseUpdate = A),
            (n.shared.pending = null));
        }
      } while (!0);
      (D === null && (h = U),
        (n.baseState = h),
        (n.firstBaseUpdate = z),
        (n.lastBaseUpdate = D),
        u === null && (n.shared.lanes = 0),
        (Sl |= i),
        (t.lanes = i),
        (t.memoizedState = U));
    }
  }
  function yr(t, e) {
    if (typeof t != 'function') throw Error(f(191, t));
    t.call(e);
  }
  function vr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) yr(l[t], e);
  }
  var Sa = g(null),
    mu = g(0);
  function gr(t, e) {
    ((t = el), G(mu, t), G(Sa, e), (el = t | e.baseLanes));
  }
  function fc() {
    (G(mu, el), G(Sa, Sa.current));
  }
  function sc() {
    ((el = mu.current), j(Sa), j(mu));
  }
  var re = g(null),
    _e = null;
  function yl(t) {
    var e = t.alternate;
    (G(Ct, Ct.current & 1),
      G(re, t),
      _e === null &&
        (e === null || Sa.current !== null || e.memoizedState !== null) &&
        (_e = t));
  }
  function rc(t) {
    (G(Ct, Ct.current), G(re, t), _e === null && (_e = t));
  }
  function pr(t) {
    t.tag === 22
      ? (G(Ct, Ct.current), G(re, t), _e === null && (_e = t))
      : vl();
  }
  function vl() {
    (G(Ct, Ct.current), G(re, re.current));
  }
  function oe(t) {
    (j(re), _e === t && (_e = null), j(Ct));
  }
  var Ct = g(0);
  function yu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || gf(l) || pf(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === 'forwards' ||
          e.memoizedProps.revealOrder === 'backwards' ||
          e.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          e.memoizedProps.revealOrder === 'together')
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Je = 0,
    tt = null,
    gt = null,
    Ht = null,
    vu = !1,
    ba = !1,
    Kl = !1,
    gu = 0,
    sn = 0,
    Ea = null,
    Pm = 0;
  function Ot() {
    throw Error(f(321));
  }
  function oc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!fe(t[l], e[l])) return !1;
    return !0;
  }
  function dc(t, e, l, a, n, u) {
    return (
      (Je = u),
      (tt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (C.H = t === null || t.memoizedState === null ? eo : Oc),
      (Kl = !1),
      (u = l(a, n)),
      (Kl = !1),
      ba && (u = br(e, l, a, n)),
      Sr(t),
      u
    );
  }
  function Sr(t) {
    C.H = dn;
    var e = gt !== null && gt.next !== null;
    if (((Je = 0), (Ht = gt = tt = null), (vu = !1), (sn = 0), (Ea = null), e))
      throw Error(f(300));
    t === null ||
      Bt ||
      ((t = t.dependencies), t !== null && cu(t) && (Bt = !0));
  }
  function br(t, e, l, a) {
    tt = t;
    var n = 0;
    do {
      if ((ba && (Ea = null), (sn = 0), (ba = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Ht = gt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((C.H = lo), (u = e(l, a)));
    } while (ba);
    return u;
  }
  function ty() {
    var t = C.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == 'function' ? rn(e) : e),
      (t = t.useState()[0]),
      (gt !== null ? gt.memoizedState : null) !== t && (tt.flags |= 1024),
      e
    );
  }
  function hc() {
    var t = gu !== 0;
    return ((gu = 0), t);
  }
  function mc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function yc(t) {
    if (vu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      vu = !1;
    }
    ((Je = 0), (Ht = gt = tt = null), (ba = !1), (sn = gu = 0), (Ea = null));
  }
  function Ft() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ht === null ? (tt.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht);
  }
  function Nt() {
    if (gt === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = gt.next;
    var e = Ht === null ? tt.memoizedState : Ht.next;
    if (e !== null) ((Ht = e), (gt = t));
    else {
      if (t === null)
        throw tt.alternate === null ? Error(f(467)) : Error(f(310));
      ((gt = t),
        (t = {
          memoizedState: gt.memoizedState,
          baseState: gt.baseState,
          baseQueue: gt.baseQueue,
          queue: gt.queue,
          next: null,
        }),
        Ht === null ? (tt.memoizedState = Ht = t) : (Ht = Ht.next = t));
    }
    return Ht;
  }
  function pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function rn(t) {
    var e = sn;
    return (
      (sn += 1),
      Ea === null && (Ea = []),
      (t = rr(Ea, t, e)),
      (e = tt),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (C.H = e === null || e.memoizedState === null ? eo : Oc)),
      t
    );
  }
  function Su(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return rn(t);
      if (t.$$typeof === J) return Zt(t);
    }
    throw Error(f(438, String(t)));
  }
  function vc(t) {
    var e = null,
      l = tt.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = tt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = pu()), (tt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Ce;
    return (e.index++, l);
  }
  function $e(t, e) {
    return typeof e == 'function' ? e(t) : e;
  }
  function bu(t) {
    var e = Nt();
    return gc(e, gt, t);
  }
  function gc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((e.baseQueue = n = u), (a.pending = null));
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var s = (i = null),
        h = null,
        z = e,
        D = !1;
      do {
        var U = z.lane & -536870913;
        if (U !== z.lane ? (ut & U) === U : (Je & U) === U) {
          var _ = z.revertLane;
          if (_ === 0)
            (h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              U === ya && (D = !0));
          else if ((Je & _) === _) {
            ((z = z.next), _ === ya && (D = !0));
            continue;
          } else
            ((U = {
              lane: 0,
              revertLane: z.revertLane,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              h === null ? ((s = h = U), (i = u)) : (h = h.next = U),
              (tt.lanes |= _),
              (Sl |= _));
          ((U = z.action),
            Kl && l(u, U),
            (u = z.hasEagerState ? z.eagerState : l(u, U)));
        } else
          ((_ = {
            lane: U,
            revertLane: z.revertLane,
            gesture: z.gesture,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            h === null ? ((s = h = _), (i = u)) : (h = h.next = _),
            (tt.lanes |= U),
            (Sl |= U));
        z = z.next;
      } while (z !== null && z !== e);
      if (
        (h === null ? (i = u) : (h.next = s),
        !fe(u, t.memoizedState) && ((Bt = !0), D && ((l = va), l !== null)))
      )
        throw l;
      ((t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = h),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function pc(t) {
    var e = Nt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do ((u = t(u, i.action)), (i = i.next));
      while (i !== n);
      (fe(u, e.memoizedState) || (Bt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function Er(t, e, l) {
    var a = tt,
      n = Nt(),
      u = ct;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !fe((gt || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (Bt = !0)),
      (n = n.queue),
      Ec(_r.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || i || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ta(9, { destroy: void 0 }, zr.bind(null, a, n, l, e), null),
        Tt === null)
      )
        throw Error(f(349));
      u || (Je & 127) !== 0 || Tr(a, e, l);
    }
    return l;
  }
  function Tr(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = tt.updateQueue),
      e === null
        ? ((e = pu()), (tt.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function zr(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), Ar(e) && Rr(t));
  }
  function _r(t, e, l) {
    return l(function () {
      Ar(e) && Rr(t);
    });
  }
  function Ar(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !fe(t, l);
    } catch {
      return !0;
    }
  }
  function Rr(t) {
    var e = ql(t, 2);
    e !== null && ne(e, t, 2);
  }
  function Sc(t) {
    var e = Ft();
    if (typeof t == 'function') {
      var l = t;
      if (((t = l()), Kl)) {
        ul(!0);
        try {
          l();
        } finally {
          ul(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $e,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Or(t, e, l, a) {
    return ((t.baseState = l), gc(t, gt, typeof a == 'function' ? a : $e));
  }
  function ey(t, e, l, a, n) {
    if (zu(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (C.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), Mr(e, u))
          : ((u.next = l.next), (e.pending = l.next = u)));
    }
  }
  function Mr(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = C.T,
        i = {};
      C.T = i;
      try {
        var s = l(n, a),
          h = C.S;
        (h !== null && h(i, s), Dr(t, e, s));
      } catch (z) {
        bc(t, e, z);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (C.T = u));
      }
    } else
      try {
        ((u = l(n, a)), Dr(t, e, u));
      } catch (z) {
        bc(t, e, z);
      }
  }
  function Dr(t, e, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (a) {
            xr(t, e, a);
          },
          function (a) {
            return bc(t, e, a);
          },
        )
      : xr(t, e, l);
  }
  function xr(t, e, l) {
    ((e.status = 'fulfilled'),
      (e.value = l),
      Cr(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Mr(t, l))));
  }
  function bc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = 'rejected'), (e.reason = l), Cr(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function Cr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Nr(t, e) {
    return e;
  }
  function Ur(t, e) {
    if (ct) {
      var l = Tt.formState;
      if (l !== null) {
        t: {
          var a = tt;
          if (ct) {
            if (zt) {
              e: {
                for (var n = zt, u = ze; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = Ae(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
              }
              if (n) {
                ((zt = Ae(n.nextSibling)), (a = n.data === 'F!'));
                break t;
              }
            }
            rl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Ft()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nr,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Ir.bind(null, tt, a)),
      (a.dispatch = l),
      (a = Sc(!1)),
      (u = Rc.bind(null, tt, !1, a.queue)),
      (a = Ft()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = ey.bind(null, tt, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function jr(t) {
    var e = Nt();
    return Hr(e, gt, t);
  }
  function Hr(t, e, l) {
    if (
      ((e = gc(t, e, Nr)[0]),
      (t = bu($e)[0]),
      typeof e == 'object' && e !== null && typeof e.then == 'function')
    )
      try {
        var a = rn(e);
      } catch (i) {
        throw i === ga ? ru : i;
      }
    else a = e;
    e = Nt();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((tt.flags |= 2048),
        Ta(9, { destroy: void 0 }, ly.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function ly(t, e) {
    t.action = e;
  }
  function Br(t) {
    var e = Nt(),
      l = gt;
    if (l !== null) return Hr(e, l, t);
    (Nt(), (e = e.memoizedState), (l = Nt()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = t), [e, a, !1]);
  }
  function Ta(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = tt.updateQueue),
      e === null && ((e = pu()), (tt.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function qr() {
    return Nt().memoizedState;
  }
  function Eu(t, e, l, a) {
    var n = Ft();
    ((tt.flags |= t),
      (n.memoizedState = Ta(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Tu(t, e, l, a) {
    var n = Nt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    gt !== null && a !== null && oc(a, gt.memoizedState.deps)
      ? (n.memoizedState = Ta(e, u, l, a))
      : ((tt.flags |= t), (n.memoizedState = Ta(1 | e, u, l, a)));
  }
  function Lr(t, e) {
    Eu(8390656, 8, t, e);
  }
  function Ec(t, e) {
    Tu(2048, 8, t, e);
  }
  function ay(t) {
    tt.flags |= 4;
    var e = tt.updateQueue;
    if (e === null) ((e = pu()), (tt.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Yr(t) {
    var e = Nt().memoizedState;
    return (
      ay({ ref: e, nextImpl: t }),
      function () {
        if ((ot & 2) !== 0) throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Gr(t, e) {
    return Tu(4, 2, t, e);
  }
  function Xr(t, e) {
    return Tu(4, 4, t, e);
  }
  function Qr(t, e) {
    if (typeof e == 'function') {
      t = t();
      var l = e(t);
      return function () {
        typeof l == 'function' ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Zr(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Tu(4, 4, Qr.bind(null, e, t), l));
  }
  function Tc() {}
  function Vr(t, e) {
    var l = Nt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && oc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function wr(t, e) {
    var l = Nt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && oc(e, a[1])) return a[0];
    if (((a = t()), Kl)) {
      ul(!0);
      try {
        t();
      } finally {
        ul(!1);
      }
    }
    return ((l.memoizedState = [a, e]), a);
  }
  function zc(t, e, l) {
    return l === void 0 || ((Je & 1073741824) !== 0 && (ut & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Jo()), (tt.lanes |= t), (Sl |= t), l);
  }
  function Kr(t, e, l, a) {
    return fe(l, e)
      ? l
      : Sa.current !== null
        ? ((t = zc(t, l, a)), fe(t, e) || (Bt = !0), t)
        : (Je & 42) === 0 || ((Je & 1073741824) !== 0 && (ut & 261930) === 0)
          ? ((Bt = !0), (t.memoizedState = l))
          : ((t = Jo()), (tt.lanes |= t), (Sl |= t), e);
  }
  function Jr(t, e, l, a, n) {
    var u = Y.p;
    Y.p = u !== 0 && 8 > u ? u : 8;
    var i = C.T,
      s = {};
    ((C.T = s), Rc(t, !1, e, l));
    try {
      var h = n(),
        z = C.S;
      if (
        (z !== null && z(s, h),
        h !== null && typeof h == 'object' && typeof h.then == 'function')
      ) {
        var D = Im(h, a);
        on(t, e, D, me(t));
      } else on(t, e, a, me(t));
    } catch (U) {
      on(t, e, { then: function () {}, status: 'rejected', reason: U }, me());
    } finally {
      ((Y.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (C.T = i));
    }
  }
  function ny() {}
  function _c(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = $r(t).queue;
    Jr(
      t,
      n,
      e,
      W,
      l === null
        ? ny
        : function () {
            return (Wr(t), l(a));
          },
    );
  }
  function $r(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $e,
        lastRenderedState: W,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $e,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Wr(t) {
    var e = $r(t);
    (e.next === null && (e = t.alternate.memoizedState),
      on(t, e.next.queue, {}, me()));
  }
  function Ac() {
    return Zt(Mn);
  }
  function kr() {
    return Nt().memoizedState;
  }
  function Fr() {
    return Nt().memoizedState;
  }
  function uy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = me();
          t = hl(l);
          var a = ml(e, t, l);
          (a !== null && (ne(a, e, l), un(a, e, l)),
            (e = { cache: tc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function iy(t, e, l) {
    var a = me();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      zu(t)
        ? Pr(e, l)
        : ((l = Zi(t, e, l, a)), l !== null && (ne(l, t, a), to(l, e, a))));
  }
  function Ir(t, e, l) {
    var a = me();
    on(t, e, l, a);
  }
  function on(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (zu(t)) Pr(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var i = e.lastRenderedState,
            s = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), fe(s, i)))
            return (au(t, e, n, 0), Tt === null && lu(), !1);
        } catch {}
      if (((l = Zi(t, e, n, a)), l !== null))
        return (ne(l, t, a), to(l, e, a), !0);
    }
    return !1;
  }
  function Rc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: nf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zu(t))
    ) {
      if (e) throw Error(f(479));
    } else ((e = Zi(t, l, a, 2)), e !== null && ne(e, t, 2));
  }
  function zu(t) {
    var e = t.alternate;
    return t === tt || (e !== null && e === tt);
  }
  function Pr(t, e) {
    ba = vu = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function to(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), us(t, l));
    }
  }
  var dn = {
    readContext: Zt,
    use: Su,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useLayoutEffect: Ot,
    useInsertionEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    useHostTransitionStatus: Ot,
    useFormState: Ot,
    useActionState: Ot,
    useOptimistic: Ot,
    useMemoCache: Ot,
    useCacheRefresh: Ot,
  };
  dn.useEffectEvent = Ot;
  var eo = {
      readContext: Zt,
      use: Su,
      useCallback: function (t, e) {
        return ((Ft().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Zt,
      useEffect: Lr,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          Eu(4194308, 4, Qr.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return Eu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Eu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Ft();
        e = e === void 0 ? null : e;
        var a = t();
        if (Kl) {
          ul(!0);
          try {
            t();
          } finally {
            ul(!1);
          }
        }
        return ((l.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, l) {
        var a = Ft();
        if (l !== void 0) {
          var n = l(e);
          if (Kl) {
            ul(!0);
            try {
              l(e);
            } finally {
              ul(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = iy.bind(null, tt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ft();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Sc(t);
        var e = t.queue,
          l = Ir.bind(null, tt, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Tc,
      useDeferredValue: function (t, e) {
        var l = Ft();
        return zc(l, t, e);
      },
      useTransition: function () {
        var t = Sc(!1);
        return (
          (t = Jr.bind(null, tt, t.queue, !0, !1)),
          (Ft().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = tt,
          n = Ft();
        if (ct) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), Tt === null)) throw Error(f(349));
          (ut & 127) !== 0 || Tr(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          Lr(_r.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          Ta(9, { destroy: void 0 }, zr.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Ft(),
          e = Tt.identifierPrefix;
        if (ct) {
          var l = je,
            a = Ue;
          ((l = (a & ~(1 << (32 - ce(a) - 1))).toString(32) + l),
            (e = '_' + e + 'R_' + l),
            (l = gu++),
            0 < l && (e += 'H' + l.toString(32)),
            (e += '_'));
        } else ((l = Pm++), (e = '_' + e + 'r_' + l.toString(32) + '_'));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ac,
      useFormState: Ur,
      useActionState: Ur,
      useOptimistic: function (t) {
        var e = Ft();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Rc.bind(null, tt, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: vc,
      useCacheRefresh: function () {
        return (Ft().memoizedState = uy.bind(null, tt));
      },
      useEffectEvent: function (t) {
        var e = Ft(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((ot & 2) !== 0) throw Error(f(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Oc = {
      readContext: Zt,
      use: Su,
      useCallback: Vr,
      useContext: Zt,
      useEffect: Ec,
      useImperativeHandle: Zr,
      useInsertionEffect: Gr,
      useLayoutEffect: Xr,
      useMemo: wr,
      useReducer: bu,
      useRef: qr,
      useState: function () {
        return bu($e);
      },
      useDebugValue: Tc,
      useDeferredValue: function (t, e) {
        var l = Nt();
        return Kr(l, gt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = bu($e)[0],
          e = Nt().memoizedState;
        return [typeof t == 'boolean' ? t : rn(t), e];
      },
      useSyncExternalStore: Er,
      useId: kr,
      useHostTransitionStatus: Ac,
      useFormState: jr,
      useActionState: jr,
      useOptimistic: function (t, e) {
        var l = Nt();
        return Or(l, gt, t, e);
      },
      useMemoCache: vc,
      useCacheRefresh: Fr,
    };
  Oc.useEffectEvent = Yr;
  var lo = {
    readContext: Zt,
    use: Su,
    useCallback: Vr,
    useContext: Zt,
    useEffect: Ec,
    useImperativeHandle: Zr,
    useInsertionEffect: Gr,
    useLayoutEffect: Xr,
    useMemo: wr,
    useReducer: pc,
    useRef: qr,
    useState: function () {
      return pc($e);
    },
    useDebugValue: Tc,
    useDeferredValue: function (t, e) {
      var l = Nt();
      return gt === null ? zc(l, t, e) : Kr(l, gt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = pc($e)[0],
        e = Nt().memoizedState;
      return [typeof t == 'boolean' ? t : rn(t), e];
    },
    useSyncExternalStore: Er,
    useId: kr,
    useHostTransitionStatus: Ac,
    useFormState: Br,
    useActionState: Br,
    useOptimistic: function (t, e) {
      var l = Nt();
      return gt !== null
        ? Or(l, gt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: vc,
    useCacheRefresh: Fr,
  };
  lo.useEffectEvent = Yr;
  function Mc(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : T({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Dc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = me(),
        n = hl(a);
      ((n.payload = e),
        l != null && (n.callback = l),
        (e = ml(t, n, a)),
        e !== null && (ne(e, t, a), un(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = me(),
        n = hl(a);
      ((n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = ml(t, n, a)),
        e !== null && (ne(e, t, a), un(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = me(),
        a = hl(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = ml(t, a, l)),
        e !== null && (ne(e, t, l), un(e, t, l)));
    },
  };
  function ao(t, e, l, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(a, u, i)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Fa(l, a) || !Fa(n, u)
          : !0
    );
  }
  function no(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == 'function' &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Dc.enqueueReplaceState(e, e.state, null));
  }
  function Jl(t, e) {
    var l = e;
    if ('ref' in e) {
      l = {};
      for (var a in e) a !== 'ref' && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = T({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function uo(t) {
    eu(t);
  }
  function io(t) {
    console.error(t);
  }
  function co(t) {
    eu(t);
  }
  function _u(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function fo(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function xc(t, e, l) {
    return (
      (l = hl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        _u(t, e);
      }),
      l
    );
  }
  function so(t) {
    return ((t = hl(t)), (t.tag = 3), t);
  }
  function ro(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var u = a.value;
      ((t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          fo(e, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        (fo(e, l, a),
          typeof n != 'function' &&
            (bl === null ? (bl = new Set([this])) : bl.add(this)));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : '',
        });
      });
  }
  function cy(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((e = l.alternate),
        e !== null && ma(e, l, n, !0),
        (l = re.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              _e === null ? Bu() : l.alternate === null && Mt === 0 && (Mt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === ou
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  ef(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === ou
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  ef(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return (ef(t, a, n), Bu(), !1);
    }
    if (ct)
      return (
        (e = re.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Wi && ((t = Error(f(422), { cause: a })), tn(be(t, l))))
          : (a !== Wi && ((e = Error(f(423), { cause: a })), tn(be(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = be(a, l)),
            (n = xc(t.stateNode, a, n)),
            ic(t, n),
            Mt !== 4 && (Mt = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = be(u, l)),
      bn === null ? (bn = [u]) : bn.push(u),
      Mt !== 4 && (Mt = 2),
      e === null)
    )
      return !0;
    ((a = be(a, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = xc(l.stateNode, a, t)),
            ic(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (bl === null || !bl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = so(n)),
              ro(n, t, l, a),
              ic(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Cc = Error(f(461)),
    Bt = !1;
  function Vt(t, e, l, a) {
    e.child = t === null ? mr(e, null, l, a) : wl(e, t.child, l, a);
  }
  function oo(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ('ref' in a) {
      var i = {};
      for (var s in a) s !== 'ref' && (i[s] = a[s]);
    } else i = a;
    return (
      Xl(e),
      (a = dc(t, e, l, i, u, n)),
      (s = hc()),
      t !== null && !Bt
        ? (mc(t, e, n), We(t, e, n))
        : (ct && s && Ji(e), (e.flags |= 1), Vt(t, e, a, n), e.child)
    );
  }
  function ho(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == 'function' &&
        !Vi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = u), mo(t, e, u, a, n))
        : ((t = uu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Yc(t, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Fa), l(i, a) && t.ref === e.ref)
      )
        return We(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = Ze(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function mo(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Fa(u, a) && t.ref === e.ref)
        if (((Bt = !1), (e.pendingProps = a = u), Yc(t, n)))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else return ((e.lanes = t.lanes), We(t, e, n));
    }
    return Nc(t, e, l, a, n);
  }
  function yo(t, e, l, a) {
    var n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === 'hidden')
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (e.child = null));
        return vo(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && su(e, u !== null ? u.cachePool : null),
          u !== null ? gr(e, u) : fc(),
          pr(e));
      else
        return (
          (a = e.lanes = 536870912),
          vo(t, e, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (su(e, u.cachePool), gr(e, u), vl(), (e.memoizedState = null))
        : (t !== null && su(e, null), fc(), vl());
    return (Vt(t, e, n, l), e.child);
  }
  function hn(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function vo(t, e, l, a, n) {
    var u = lc();
    return (
      (u = u === null ? null : { parent: jt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && su(e, null),
      fc(),
      pr(e),
      t !== null && ma(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function Au(t, e) {
    return (
      (e = Ou({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function go(t, e, l) {
    return (
      wl(e, t.child, null, l),
      (t = Au(e, e.pendingProps)),
      (t.flags |= 2),
      oe(e),
      (e.memoizedState = null),
      t
    );
  }
  function fy(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ct) {
        if (a.mode === 'hidden')
          return ((t = Au(e, a)), (e.lanes = 536870912), hn(null, t));
        if (
          (rc(e),
          (t = zt)
            ? ((t = Dd(t, ze)),
              (t = t !== null && t.data === '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: fl !== null ? { id: Ue, overflow: je } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ps(t)),
                (l.return = e),
                (e.child = l),
                (Qt = e),
                (zt = null)))
            : (t = null),
          t === null)
        )
          throw rl(e);
        return ((e.lanes = 536870912), null);
      }
      return Au(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((rc(e), n))
        if (e.flags & 256) ((e.flags &= -257), (e = go(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(f(558));
      else if (
        (Bt || ma(t, e, l, !1), (n = (l & t.childLanes) !== 0), Bt || n)
      ) {
        if (
          ((a = Tt),
          a !== null && ((i = is(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), ql(t, i), ne(a, t, i), Cc);
        (Bu(), (e = go(t, e, l)));
      } else
        ((t = u.treeContext),
          (zt = Ae(i.nextSibling)),
          (Qt = e),
          (ct = !0),
          (sl = null),
          (ze = !1),
          t !== null && lr(e, t),
          (e = Au(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Ze(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ru(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Nc(t, e, l, a, n) {
    return (
      Xl(e),
      (l = dc(t, e, l, a, void 0, n)),
      (a = hc()),
      t !== null && !Bt
        ? (mc(t, e, n), We(t, e, n))
        : (ct && a && Ji(e), (e.flags |= 1), Vt(t, e, l, n), e.child)
    );
  }
  function po(t, e, l, a, n, u) {
    return (
      Xl(e),
      (e.updateQueue = null),
      (l = br(e, a, l, n)),
      Sr(t),
      (a = hc()),
      t !== null && !Bt
        ? (mc(t, e, u), We(t, e, u))
        : (ct && a && Ji(e), (e.flags |= 1), Vt(t, e, l, u), e.child)
    );
  }
  function So(t, e, l, a, n) {
    if ((Xl(e), e.stateNode === null)) {
      var u = ra,
        i = l.contextType;
      (typeof i == 'object' && i !== null && (u = Zt(i)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Dc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        nc(e),
        (i = l.contextType),
        (u.context = typeof i == 'object' && i !== null ? Zt(i) : ra),
        (u.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == 'function' && (Mc(e, l, i, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((i = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Dc.enqueueReplaceState(u, u.state, null),
          fn(e, a, u, n),
          cn(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps,
        h = Jl(l, s);
      u.props = h;
      var z = u.context,
        D = l.contextType;
      ((i = ra), typeof D == 'object' && D !== null && (i = Zt(D)));
      var U = l.getDerivedStateFromProps;
      ((D =
        typeof U == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function'),
        (s = e.pendingProps !== s),
        D ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((s || z !== i) && no(e, u, a, i)),
        (dl = !1));
      var _ = e.memoizedState;
      ((u.state = _),
        fn(e, a, u, n),
        cn(),
        (z = e.memoizedState),
        s || _ !== z || dl
          ? (typeof U == 'function' && (Mc(e, l, U, a), (z = e.memoizedState)),
            (h = dl || ao(e, l, h, a, _, z, i))
              ? (D ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = z)),
            (u.props = a),
            (u.state = z),
            (u.context = i),
            (a = h))
          : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = e.stateNode),
        uc(t, e),
        (i = e.memoizedProps),
        (D = Jl(l, i)),
        (u.props = D),
        (U = e.pendingProps),
        (_ = u.context),
        (z = l.contextType),
        (h = ra),
        typeof z == 'object' && z !== null && (h = Zt(z)),
        (s = l.getDerivedStateFromProps),
        (z =
          typeof s == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((i !== U || _ !== h) && no(e, u, a, h)),
        (dl = !1),
        (_ = e.memoizedState),
        (u.state = _),
        fn(e, a, u, n),
        cn());
      var A = e.memoizedState;
      i !== U ||
      _ !== A ||
      dl ||
      (t !== null && t.dependencies !== null && cu(t.dependencies))
        ? (typeof s == 'function' && (Mc(e, l, s, a), (A = e.memoizedState)),
          (D =
            dl ||
            ao(e, l, D, a, _, A, h) ||
            (t !== null && t.dependencies !== null && cu(t.dependencies)))
            ? (z ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' &&
                  u.componentWillUpdate(a, A, h),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, A, h)),
              typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (i === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (i === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = A)),
          (u.props = a),
          (u.state = A),
          (u.context = h),
          (a = D))
        : (typeof u.componentDidUpdate != 'function' ||
            (i === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (i === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Ru(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != 'function'
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = wl(e, t.child, null, n)),
              (e.child = wl(e, null, l, n)))
            : Vt(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = We(t, e, n)),
      t
    );
  }
  function bo(t, e, l, a) {
    return (Yl(), (e.flags |= 256), Vt(t, e, l, a), e.child);
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function jc(t) {
    return { baseLanes: t, cachePool: fr() };
  }
  function Hc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= he), t);
  }
  function Eo(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      i && ((n = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ct) {
        if (
          (n ? yl(e) : vl(),
          (t = zt)
            ? ((t = Dd(t, ze)),
              (t = t !== null && t.data !== '&' ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: fl !== null ? { id: Ue, overflow: je } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ps(t)),
                (l.return = e),
                (e.child = l),
                (Qt = e),
                (zt = null)))
            : (t = null),
          t === null)
        )
          throw rl(e);
        return (pf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n
          ? (vl(),
            (n = e.mode),
            (s = Ou({ mode: 'hidden', children: s }, n)),
            (a = Ll(a, n, l, null)),
            (s.return = e),
            (a.return = e),
            (s.sibling = a),
            (e.child = s),
            (a = e.child),
            (a.memoizedState = jc(l)),
            (a.childLanes = Hc(t, i, l)),
            (e.memoizedState = Uc),
            hn(null, a))
          : (yl(e), Bc(e, s))
      );
    }
    var h = t.memoizedState;
    if (h !== null && ((s = h.dehydrated), s !== null)) {
      if (u)
        e.flags & 256
          ? (yl(e), (e.flags &= -257), (e = qc(t, e, l)))
          : e.memoizedState !== null
            ? (vl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (vl(),
              (s = a.fallback),
              (n = e.mode),
              (a = Ou({ mode: 'visible', children: a.children }, n)),
              (s = Ll(s, n, l, null)),
              (s.flags |= 2),
              (a.return = e),
              (s.return = e),
              (a.sibling = s),
              (e.child = a),
              wl(e, t.child, null, l),
              (a = e.child),
              (a.memoizedState = jc(l)),
              (a.childLanes = Hc(t, i, l)),
              (e.memoizedState = Uc),
              (e = hn(null, a)));
      else if ((yl(e), pf(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var z = i.dgst;
        ((i = z),
          (a = Error(f(419))),
          (a.stack = ''),
          (a.digest = i),
          tn({ value: a, source: null, stack: null }),
          (e = qc(t, e, l)));
      } else if (
        (Bt || ma(t, e, l, !1), (i = (l & t.childLanes) !== 0), Bt || i)
      ) {
        if (
          ((i = Tt),
          i !== null && ((a = is(i, l)), a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), ql(t, a), ne(i, t, a), Cc);
        (gf(s) || Bu(), (e = qc(t, e, l)));
      } else
        gf(s)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = h.treeContext),
            (zt = Ae(s.nextSibling)),
            (Qt = e),
            (ct = !0),
            (sl = null),
            (ze = !1),
            t !== null && lr(e, t),
            (e = Bc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (vl(),
        (s = a.fallback),
        (n = e.mode),
        (h = t.child),
        (z = h.sibling),
        (a = Ze(h, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        z !== null ? (s = Ze(z, s)) : ((s = Ll(s, n, l, null)), (s.flags |= 2)),
        (s.return = e),
        (a.return = e),
        (a.sibling = s),
        (e.child = a),
        hn(null, a),
        (a = e.child),
        (s = t.child.memoizedState),
        s === null
          ? (s = jc(l))
          : ((n = s.cachePool),
            n !== null
              ? ((h = jt._currentValue),
                (n = n.parent !== h ? { parent: h, pool: h } : n))
              : (n = fr()),
            (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Hc(t, i, l)),
        (e.memoizedState = Uc),
        hn(t.child, a))
      : (yl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Ze(l, { mode: 'visible', children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Bc(t, e) {
    return (
      (e = Ou({ mode: 'visible', children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ou(t, e) {
    return ((t = se(22, t, null, e)), (t.lanes = 0), t);
  }
  function qc(t, e, l) {
    return (
      wl(e, t.child, null, l),
      (t = Bc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function To(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), Ii(t.return, e, l));
  }
  function Lc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function zo(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Ct.current,
      s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      G(Ct, i),
      Vt(t, e, a, l),
      (a = ct ? Pa : 0),
      !s && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && To(t, l, e);
        else if (t.tag === 19) To(t, l, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (n) {
      case 'forwards':
        for (l = e.child, n = null; l !== null; )
          ((t = l.alternate),
            t !== null && yu(t) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Lc(e, !1, n, l, u, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && yu(t) === null)) {
            e.child = n;
            break;
          }
          ((t = n.sibling), (n.sibling = l), (l = n), (n = t));
        }
        Lc(e, !0, l, null, u, a);
        break;
      case 'together':
        Lc(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function We(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Sl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ma(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Ze(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = Ze(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function Yc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && cu(t)));
  }
  function sy(t, e, l) {
    switch (e.tag) {
      case 3:
        (kt(e, e.stateNode.containerInfo),
          ol(e, jt, t.memoizedState.cache),
          Yl());
        break;
      case 27:
      case 5:
        La(e);
        break;
      case 4:
        kt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ol(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), rc(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (yl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? Eo(t, e, l)
              : (yl(e), (t = We(t, e, l)), t !== null ? t.sibling : null);
        yl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (ma(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return zo(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          G(Ct, Ct.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), yo(t, e, l, e.pendingProps));
      case 24:
        ol(e, jt, t.memoizedState.cache);
    }
    return We(t, e, l);
  }
  function _o(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Bt = !0;
      else {
        if (!Yc(t, l) && (e.flags & 128) === 0) return ((Bt = !1), sy(t, e, l));
        Bt = (t.flags & 131072) !== 0;
      }
    else ((Bt = !1), ct && (e.flags & 1048576) !== 0 && er(e, Pa, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Zl(e.elementType)), (e.type = t), typeof t == 'function'))
            Vi(t)
              ? ((a = Jl(t, a)), (e.tag = 1), (e = So(null, e, t, a, l)))
              : ((e.tag = 0), (e = Nc(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === dt) {
                ((e.tag = 11), (e = oo(null, e, t, a, l)));
                break t;
              } else if (n === F) {
                ((e.tag = 14), (e = ho(null, e, t, a, l)));
                break t;
              }
            }
            throw ((e = ve(t) || t), Error(f(306, e, '')));
          }
        }
        return e;
      case 0:
        return Nc(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (n = Jl(a, e.pendingProps)), So(t, e, a, n, l));
      case 3:
        t: {
          if ((kt(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          ((n = u.element), uc(t, e), fn(e, a, null, l));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            ol(e, jt, a),
            a !== u.cache && Pi(e, [jt], l, !0),
            cn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = bo(t, e, a, l);
              break t;
            } else if (a !== n) {
              ((n = be(Error(f(424)), e)), tn(n), (e = bo(t, e, a, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === 'HTML' ? t.ownerDocument.body : t),
                  zt = Ae(t.firstChild),
                  Qt = e,
                  ct = !0,
                  sl = null,
                  ze = !0,
                  l = mr(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Yl(), a === n)) {
              e = We(t, e, l);
              break t;
            }
            Vt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ru(t, e),
          t === null
            ? (l = Hd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ct ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Zu(lt.current).createElement(l)),
                (a[Xt] = e),
                (a[It] = t),
                wt(a, l, t),
                Yt(a),
                (e.stateNode = a))
            : (e.memoizedState = Hd(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          La(e),
          t === null &&
            ct &&
            ((a = e.stateNode = Nd(e.type, e.pendingProps, lt.current)),
            (Qt = e),
            (ze = !0),
            (n = zt),
            _l(e.type) ? ((Sf = n), (zt = Ae(a.firstChild))) : (zt = n)),
          Vt(t, e, e.pendingProps.children, l),
          Ru(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ct &&
            ((n = a = zt) &&
              ((a = Yy(a, e.type, e.pendingProps, ze)),
              a !== null
                ? ((e.stateNode = a),
                  (Qt = e),
                  (zt = Ae(a.firstChild)),
                  (ze = !1),
                  (n = !0))
                : (n = !1)),
            n || rl(e)),
          La(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          mf(n, u) ? (a = null) : i !== null && mf(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = dc(t, e, ty, null, null, l)), (Mn._currentValue = n)),
          Ru(t, e),
          Vt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ct &&
            ((t = l = zt) &&
              ((l = Gy(l, e.pendingProps, ze)),
              l !== null
                ? ((e.stateNode = l), (Qt = e), (zt = null), (t = !0))
                : (t = !1)),
            t || rl(e)),
          null
        );
      case 13:
        return Eo(t, e, l);
      case 4:
        return (
          kt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = wl(e, null, a, l)) : Vt(t, e, a, l),
          e.child
        );
      case 11:
        return oo(t, e, e.type, e.pendingProps, l);
      case 7:
        return (Vt(t, e, e.pendingProps, l), e.child);
      case 8:
        return (Vt(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (Vt(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          ol(e, e.type, a.value),
          Vt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Xl(e),
          (n = Zt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Vt(t, e, a, l),
          e.child
        );
      case 14:
        return ho(t, e, e.type, e.pendingProps, l);
      case 15:
        return mo(t, e, e.type, e.pendingProps, l);
      case 19:
        return zo(t, e, l);
      case 31:
        return fy(t, e, l);
      case 22:
        return yo(t, e, l, e.pendingProps);
      case 24:
        return (
          Xl(e),
          (a = Zt(jt)),
          t === null
            ? ((n = lc()),
              n === null &&
                ((n = Tt),
                (u = tc()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              nc(e),
              ol(e, jt, n))
            : ((t.lanes & l) !== 0 && (uc(t, e), fn(e, null, null, l), cn()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  ol(e, jt, a))
                : ((a = u.cache),
                  ol(e, jt, a),
                  a !== n.cache && Pi(e, [jt], l, !0))),
          Vt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function ke(t) {
    t.flags |= 4;
  }
  function Gc(t, e, l, a, n) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Fo()) t.flags |= 8192;
        else throw ((Vl = ou), ac);
    } else t.flags &= -16777217;
  }
  function Ao(t, e) {
    if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Gd(e)))
      if (Fo()) t.flags |= 8192;
      else throw ((Vl = ou), ac);
  }
  function Mu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? as() : 536870912), (t.lanes |= e), (Ra |= e)));
  }
  function mn(t, e) {
    if (!ct)
      switch (t.tailMode) {
        case 'hidden':
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = t.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function _t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling));
    else
      for (n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = l), e);
  }
  function ry(t, e, l) {
    var a = e.pendingProps;
    switch (($i(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (_t(e), null);
      case 1:
        return (_t(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ke(jt),
          xt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (ha(e)
              ? ke(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), ki())),
          _t(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? (ke(e),
              u !== null ? (_t(e), Ao(e, u)) : (_t(e), Gc(e, n, null, a, l)))
            : u
              ? u !== t.memoizedState
                ? (ke(e), _t(e), Ao(e, u))
                : (_t(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && ke(e),
                _t(e),
                Gc(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (Yn(e),
          (l = lt.current),
          (n = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && ke(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (_t(e), null);
          }
          ((t = Q.current),
            ha(e) ? ar(e) : ((t = Nd(n, a, l)), (e.stateNode = t), ke(e)));
        }
        return (_t(e), null);
      case 5:
        if ((Yn(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && ke(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return (_t(e), null);
          }
          if (((u = Q.current), ha(e))) ar(e);
          else {
            var i = Zu(lt.current);
            switch (u) {
              case 1:
                u = i.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                u = i.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    u = i.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    u = i.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      n,
                    );
                    break;
                  case 'script':
                    ((u = i.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof a.is == 'string'
                        ? i.createElement('select', { is: a.is })
                        : i.createElement('select')),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == 'string'
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[Xt] = e), (u[It] = a));
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            e.stateNode = u;
            t: switch ((wt(u, n, a), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                a = !!a.autoFocus;
                break t;
              case 'img':
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && ke(e);
          }
        }
        return (
          _t(e),
          Gc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && ke(e);
        else {
          if (typeof a != 'string' && e.stateNode === null) throw Error(f(166));
          if (((t = lt.current), ha(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Qt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((t[Xt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Ed(t.nodeValue, l)
              )),
              t || rl(e, !0));
          } else
            ((t = Zu(t).createTextNode(a)), (t[Xt] = e), (e.stateNode = t));
        }
        return (_t(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = ha(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(f(557));
              t[Xt] = e;
            } else
              (Yl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (_t(e), (t = !1));
          } else
            ((l = ki()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (oe(e), e) : (oe(e), null);
          if ((e.flags & 128) !== 0) throw Error(f(558));
        }
        return (_t(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = ha(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Xt] = e;
            } else
              (Yl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (_t(e), (n = !1));
          } else
            ((n = ki()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return e.flags & 256 ? (oe(e), e) : (oe(e), null);
        }
        return (
          oe(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              Mu(e, e.updateQueue),
              _t(e),
              null)
        );
      case 4:
        return (xt(), t === null && sf(e.stateNode.containerInfo), _t(e), null);
      case 10:
        return (Ke(e.type), _t(e), null);
      case 19:
        if ((j(Ct), (a = e.memoizedState), a === null)) return (_t(e), null);
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) mn(a, !1);
          else {
            if (Mt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = yu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      mn(a, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Mu(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (Is(l, t), (l = l.sibling));
                  return (
                    G(Ct, (Ct.current & 1) | 2),
                    ct && Ve(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ue() > Uu &&
              ((e.flags |= 128), (n = !0), mn(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = yu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Mu(e, t),
                mn(a, !0),
                a.tail === null &&
                  a.tailMode === 'hidden' &&
                  !u.alternate &&
                  !ct)
              )
                return (_t(e), null);
            } else
              2 * ue() - a.renderingStartTime > Uu &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), mn(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = a.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ue()),
            (t.sibling = null),
            (l = Ct.current),
            G(Ct, n ? (l & 1) | 2 : l & 1),
            ct && Ve(e, a.treeForkCount),
            t)
          : (_t(e), null);
      case 22:
      case 23:
        return (
          oe(e),
          sc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : _t(e),
          (l = e.updateQueue),
          l !== null && Mu(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && j(Ql),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ke(jt),
          _t(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function oy(t, e) {
    switch (($i(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ke(jt),
          xt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Yn(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((oe(e), e.alternate === null)) throw Error(f(340));
          Yl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (oe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          Yl();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (j(Ct), null);
      case 4:
        return (xt(), null);
      case 10:
        return (Ke(e.type), null);
      case 22:
      case 23:
        return (
          oe(e),
          sc(),
          t !== null && j(Ql),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Ke(jt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ro(t, e) {
    switch (($i(e), e.tag)) {
      case 3:
        (Ke(jt), xt());
        break;
      case 26:
      case 27:
      case 5:
        Yn(e);
        break;
      case 4:
        xt();
        break;
      case 31:
        e.memoizedState !== null && oe(e);
        break;
      case 13:
        oe(e);
        break;
      case 19:
        j(Ct);
        break;
      case 10:
        Ke(e.type);
        break;
      case 22:
      case 23:
        (oe(e), sc(), t !== null && j(Ql));
        break;
      case 24:
        Ke(jt);
    }
  }
  function yn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            ((a = u()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      yt(e, e.return, s);
    }
  }
  function gl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              s = i.destroy;
            if (s !== void 0) {
              ((i.destroy = void 0), (n = e));
              var h = l,
                z = s;
              try {
                z();
              } catch (D) {
                yt(n, h, D);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (D) {
      yt(e, e.return, D);
    }
  }
  function Oo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        vr(e, l);
      } catch (a) {
        yt(t, t.return, a);
      }
    }
  }
  function Mo(t, e, l) {
    ((l.props = Jl(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      yt(t, e, a);
    }
  }
  function vn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == 'function' ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      yt(t, e, n);
    }
  }
  function He(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (n) {
          yt(t, e, n);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (n) {
          yt(t, e, n);
        }
      else l.current = null;
  }
  function Do(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus();
          break t;
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      yt(t, t.return, n);
    }
  }
  function Xc(t, e, l) {
    try {
      var a = t.stateNode;
      (Uy(a, t.type, l, e), (a[It] = e));
    } catch (n) {
      yt(t, t.return, n);
    }
  }
  function xo(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && _l(t.type)) ||
      t.tag === 4
    );
  }
  function Qc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || xo(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && _l(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Zc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === 'HTML'
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Xe)));
    else if (
      a !== 4 &&
      (a === 27 && _l(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Zc(t, e, l), t = t.sibling; t !== null; )
        (Zc(t, e, l), (t = t.sibling));
  }
  function Du(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && _l(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Du(t, e, l), t = t.sibling; t !== null; )
        (Du(t, e, l), (t = t.sibling));
  }
  function Co(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      (wt(e, a, l), (e[Xt] = t), (e[It] = l));
    } catch (u) {
      yt(t, t.return, u);
    }
  }
  var Fe = !1,
    qt = !1,
    Vc = !1,
    No = typeof WeakSet == 'function' ? WeakSet : Set,
    Gt = null;
  function dy(t, e) {
    if (((t = t.containerInfo), (df = ku), (t = Zs(t)), qi(t))) {
      if ('selectionStart' in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, u.nodeType);
            } catch {
              l = null;
              break t;
            }
            var i = 0,
              s = -1,
              h = -1,
              z = 0,
              D = 0,
              U = t,
              _ = null;
            e: for (;;) {
              for (
                var A;
                U !== l || (n !== 0 && U.nodeType !== 3) || (s = i + n),
                  U !== u || (a !== 0 && U.nodeType !== 3) || (h = i + a),
                  U.nodeType === 3 && (i += U.nodeValue.length),
                  (A = U.firstChild) !== null;
              )
                ((_ = U), (U = A));
              for (;;) {
                if (U === t) break e;
                if (
                  (_ === l && ++z === n && (s = i),
                  _ === u && ++D === a && (h = i),
                  (A = U.nextSibling) !== null)
                )
                  break;
                ((U = _), (_ = U.parentNode));
              }
              U = A;
            }
            l = s === -1 || h === -1 ? null : { start: s, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      hf = { focusedElem: t, selectionRange: l }, ku = !1, Gt = e;
      Gt !== null;
    )
      if (
        ((e = Gt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Gt = t));
      else
        for (; Gt !== null; ) {
          switch (((e = Gt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  ((n = t[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode));
                try {
                  var X = Jl(l.type, n);
                  ((t = a.getSnapshotBeforeUpdate(X, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch ($) {
                  yt(l, l.return, $);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  vf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      vf(t);
                      break;
                    default:
                      t.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Gt = t));
            break;
          }
          Gt = e.return;
        }
  }
  function Uo(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Pe(t, l), a & 4 && yn(5, l));
        break;
      case 1:
        if ((Pe(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              yt(l, l.return, i);
            }
          else {
            var n = Jl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              yt(l, l.return, i);
            }
          }
        (a & 64 && Oo(l), a & 512 && vn(l, l.return));
        break;
      case 3:
        if ((Pe(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            vr(t, e);
          } catch (i) {
            yt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Co(l);
      case 26:
      case 5:
        (Pe(t, l), e === null && a & 4 && Do(l), a & 512 && vn(l, l.return));
        break;
      case 12:
        Pe(t, l);
        break;
      case 31:
        (Pe(t, l), a & 4 && Bo(t, l));
        break;
      case 13:
        (Pe(t, l),
          a & 4 && qo(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = Ey.bind(null, l)), Xy(t, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Fe), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || qt), (n = Fe));
          var u = qt;
          ((Fe = a),
            (qt = e) && !u ? tl(t, l, (l.subtreeFlags & 8772) !== 0) : Pe(t, l),
            (Fe = n),
            (qt = u));
        }
        break;
      case 30:
        break;
      default:
        Pe(t, l);
    }
  }
  function jo(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), jo(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && bi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var At = null,
    te = !1;
  function Ie(t, e, l) {
    for (l = l.child; l !== null; ) (Ho(t, e, l), (l = l.sibling));
  }
  function Ho(t, e, l) {
    if (ie && typeof ie.onCommitFiberUnmount == 'function')
      try {
        ie.onCommitFiberUnmount(Ya, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (qt || He(l, e),
          Ie(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        qt || He(l, e);
        var a = At,
          n = te;
        (_l(l.type) && ((At = l.stateNode), (te = !1)),
          Ie(t, e, l),
          An(l.stateNode),
          (At = a),
          (te = n));
        break;
      case 5:
        qt || He(l, e);
      case 6:
        if (
          ((a = At),
          (n = te),
          (At = null),
          Ie(t, e, l),
          (At = a),
          (te = n),
          At !== null)
        )
          if (te)
            try {
              (At.nodeType === 9
                ? At.body
                : At.nodeName === 'HTML'
                  ? At.ownerDocument.body
                  : At
              ).removeChild(l.stateNode);
            } catch (u) {
              yt(l, e, u);
            }
          else
            try {
              At.removeChild(l.stateNode);
            } catch (u) {
              yt(l, e, u);
            }
        break;
      case 18:
        At !== null &&
          (te
            ? ((t = At),
              Od(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === 'HTML'
                    ? t.ownerDocument.body
                    : t,
                l.stateNode,
              ),
              ja(t))
            : Od(At, l.stateNode));
        break;
      case 4:
        ((a = At),
          (n = te),
          (At = l.stateNode.containerInfo),
          (te = !0),
          Ie(t, e, l),
          (At = a),
          (te = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (gl(2, l, e), qt || gl(4, l, e), Ie(t, e, l));
        break;
      case 1:
        (qt ||
          (He(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == 'function' && Mo(l, e, a)),
          Ie(t, e, l));
        break;
      case 21:
        Ie(t, e, l);
        break;
      case 22:
        ((qt = (a = qt) || l.memoizedState !== null), Ie(t, e, l), (qt = a));
        break;
      default:
        Ie(t, e, l);
    }
  }
  function Bo(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ja(t);
      } catch (l) {
        yt(e, e.return, l);
      }
    }
  }
  function qo(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ja(t);
      } catch (l) {
        yt(e, e.return, l);
      }
  }
  function hy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new No()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new No()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function xu(t, e) {
    var l = hy(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Ty.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function ee(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          i = e,
          s = i;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (_l(s.type)) {
                ((At = s.stateNode), (te = !1));
                break t;
              }
              break;
            case 5:
              ((At = s.stateNode), (te = !1));
              break t;
            case 3:
            case 4:
              ((At = s.stateNode.containerInfo), (te = !0));
              break t;
          }
          s = s.return;
        }
        if (At === null) throw Error(f(160));
        (Ho(u, i, n),
          (At = null),
          (te = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Lo(e, t), (e = e.sibling));
  }
  var De = null;
  function Lo(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ee(e, t),
          le(t),
          a & 4 && (gl(3, t, t.return), yn(3, t), gl(5, t, t.return)));
        break;
      case 1:
        (ee(e, t),
          le(t),
          a & 512 && (qt || l === null || He(l, l.return)),
          a & 64 &&
            Fe &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = De;
        if (
          (ee(e, t),
          le(t),
          a & 512 && (qt || l === null || He(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n));
                  e: switch (a) {
                    case 'title':
                      ((u = n.getElementsByTagName('title')[0]),
                        (!u ||
                          u[Qa] ||
                          u[Xt] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector('head > title'),
                          )),
                        wt(u, a, l),
                        (u[Xt] = t),
                        Yt(u),
                        (a = u));
                      break t;
                    case 'link':
                      var i = Ld('link', 'href', n).get(a + (l.href || ''));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute('href') ===
                              (l.href == null || l.href === ''
                                ? null
                                : l.href) &&
                              u.getAttribute('rel') ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute('title') ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        wt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    case 'meta':
                      if (
                        (i = Ld('meta', 'content', n).get(
                          a + (l.content || ''),
                        ))
                      ) {
                        for (s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              u.getAttribute('name') ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute('charset') ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        wt(u, a, l),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  ((u[Xt] = t), Yt(u), (a = u));
                }
                t.stateNode = a;
              } else Yd(n, t.type, t.stateNode);
            else t.stateNode = qd(n, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? Yd(n, t.type, t.stateNode)
                  : qd(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Xc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ee(e, t),
          le(t),
          a & 512 && (qt || l === null || He(l, l.return)),
          l !== null && a & 4 && Xc(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (ee(e, t),
          le(t),
          a & 512 && (qt || l === null || He(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            aa(n, '');
          } catch (X) {
            yt(t, t.return, X);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Xc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Vc = !0));
        break;
      case 6:
        if ((ee(e, t), le(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          ((a = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = a;
          } catch (X) {
            yt(t, t.return, X);
          }
        }
        break;
      case 3:
        if (
          ((Ku = null),
          (n = De),
          (De = Vu(e.containerInfo)),
          ee(e, t),
          (De = n),
          le(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            ja(e.containerInfo);
          } catch (X) {
            yt(t, t.return, X);
          }
        Vc && ((Vc = !1), Yo(t));
        break;
      case 4:
        ((a = De),
          (De = Vu(t.stateNode.containerInfo)),
          ee(e, t),
          le(t),
          (De = a));
        break;
      case 12:
        (ee(e, t), le(t));
        break;
      case 31:
        (ee(e, t),
          le(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), xu(t, a))));
        break;
      case 13:
        (ee(e, t),
          le(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Nu = ue()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), xu(t, a))));
        break;
      case 22:
        n = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          z = Fe,
          D = qt;
        if (
          ((Fe = z || n),
          (qt = D || h),
          ee(e, t),
          (qt = D),
          (Fe = z),
          le(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || h || Fe || qt || $l(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (((u = h.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'));
                  else {
                    s = h.stateNode;
                    var U = h.memoizedProps.style,
                      _ =
                        U != null && U.hasOwnProperty('display')
                          ? U.display
                          : null;
                    s.style.display =
                      _ == null || typeof _ == 'boolean' ? '' : ('' + _).trim();
                  }
                } catch (X) {
                  yt(h, h.return, X);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = n ? '' : h.memoizedProps;
                } catch (X) {
                  yt(h, h.return, X);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var A = h.stateNode;
                  n ? Md(A, !0) : Md(h.stateNode, !1);
                } catch (X) {
                  yt(h, h.return, X);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), xu(t, l))));
        break;
      case 19:
        (ee(e, t),
          le(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), xu(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ee(e, t), le(t));
    }
  }
  function le(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (xo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Qc(t);
            Du(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (aa(i, ''), (l.flags &= -33));
            var s = Qc(t);
            Du(t, s, i);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              z = Qc(t);
            Zc(t, z, h);
            break;
          default:
            throw Error(f(161));
        }
      } catch (D) {
        yt(t, t.return, D);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Yo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Yo(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Pe(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Uo(t, e.alternate, e), (e = e.sibling));
  }
  function $l(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (gl(4, e, e.return), $l(e));
          break;
        case 1:
          He(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == 'function' && Mo(e, e.return, l),
            $l(e));
          break;
        case 27:
          An(e.stateNode);
        case 26:
        case 5:
          (He(e, e.return), $l(e));
          break;
        case 22:
          e.memoizedState === null && $l(e);
          break;
        case 30:
          $l(e);
          break;
        default:
          $l(e);
      }
      t = t.sibling;
    }
  }
  function tl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (tl(n, u, l), yn(4, u));
          break;
        case 1:
          if (
            (tl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == 'function')
          )
            try {
              n.componentDidMount();
            } catch (z) {
              yt(a, a.return, z);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  yr(h[n], s);
            } catch (z) {
              yt(a, a.return, z);
            }
          }
          (l && i & 64 && Oo(u), vn(u, u.return));
          break;
        case 27:
          Co(u);
        case 26:
        case 5:
          (tl(n, u, l), l && a === null && i & 4 && Do(u), vn(u, u.return));
          break;
        case 12:
          tl(n, u, l);
          break;
        case 31:
          (tl(n, u, l), l && i & 4 && Bo(n, u));
          break;
        case 13:
          (tl(n, u, l), l && i & 4 && qo(n, u));
          break;
        case 22:
          (u.memoizedState === null && tl(n, u, l), vn(u, u.return));
          break;
        case 30:
          break;
        default:
          tl(n, u, l);
      }
      e = e.sibling;
    }
  }
  function wc(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && en(l)));
  }
  function Kc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && en(t)));
  }
  function xe(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Go(t, e, l, a), (e = e.sibling));
  }
  function Go(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (xe(t, e, l, a), n & 2048 && yn(9, e));
        break;
      case 1:
        xe(t, e, l, a);
        break;
      case 3:
        (xe(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && en(t))));
        break;
      case 12:
        if (n & 2048) {
          (xe(t, e, l, a), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              i = u.id,
              s = u.onPostCommit;
            typeof s == 'function' &&
              s(
                i,
                e.alternate === null ? 'mount' : 'update',
                t.passiveEffectDuration,
                -0,
              );
          } catch (h) {
            yt(e, e.return, h);
          }
        } else xe(t, e, l, a);
        break;
      case 31:
        xe(t, e, l, a);
        break;
      case 13:
        xe(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? xe(t, e, l, a)
              : gn(t, e)
            : u._visibility & 2
              ? xe(t, e, l, a)
              : ((u._visibility |= 2),
                za(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && wc(i, e));
        break;
      case 24:
        (xe(t, e, l, a), n & 2048 && Kc(e.alternate, e));
        break;
      default:
        xe(t, e, l, a);
    }
  }
  function za(t, e, l, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = t,
        i = e,
        s = l,
        h = a,
        z = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (za(u, i, s, h, n), yn(8, i));
          break;
        case 23:
          break;
        case 22:
          var D = i.stateNode;
          (i.memoizedState !== null
            ? D._visibility & 2
              ? za(u, i, s, h, n)
              : gn(u, i)
            : ((D._visibility |= 2), za(u, i, s, h, n)),
            n && z & 2048 && wc(i.alternate, i));
          break;
        case 24:
          (za(u, i, s, h, n), n && z & 2048 && Kc(i.alternate, i));
          break;
        default:
          za(u, i, s, h, n);
      }
      e = e.sibling;
    }
  }
  function gn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (gn(l, a), n & 2048 && wc(a.alternate, a));
            break;
          case 24:
            (gn(l, a), n & 2048 && Kc(a.alternate, a));
            break;
          default:
            gn(l, a);
        }
        e = e.sibling;
      }
  }
  var pn = 8192;
  function _a(t, e, l) {
    if (t.subtreeFlags & pn)
      for (t = t.child; t !== null; ) (Xo(t, e, l), (t = t.sibling));
  }
  function Xo(t, e, l) {
    switch (t.tag) {
      case 26:
        (_a(t, e, l),
          t.flags & pn &&
            t.memoizedState !== null &&
            Py(l, De, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        _a(t, e, l);
        break;
      case 3:
      case 4:
        var a = De;
        ((De = Vu(t.stateNode.containerInfo)), _a(t, e, l), (De = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = pn), (pn = 16777216), _a(t, e, l), (pn = a))
            : _a(t, e, l));
        break;
      default:
        _a(t, e, l);
    }
  }
  function Qo(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Sn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Gt = a), Vo(a, t));
        }
      Qo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Zo(t), (t = t.sibling));
  }
  function Zo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Sn(t), t.flags & 2048 && gl(9, t, t.return));
        break;
      case 3:
        Sn(t);
        break;
      case 12:
        Sn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Cu(t))
          : Sn(t);
        break;
      default:
        Sn(t);
    }
  }
  function Cu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((Gt = a), Vo(a, t));
        }
      Qo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (gl(8, e, e.return), Cu(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Cu(e)));
          break;
        default:
          Cu(e);
      }
      t = t.sibling;
    }
  }
  function Vo(t, e) {
    for (; Gt !== null; ) {
      var l = Gt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          gl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          en(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Gt = a));
      else
        t: for (l = t; Gt !== null; ) {
          a = Gt;
          var n = a.sibling,
            u = a.return;
          if ((jo(a), a === l)) {
            Gt = null;
            break t;
          }
          if (n !== null) {
            ((n.return = u), (Gt = n));
            break t;
          }
          Gt = u;
        }
    }
  }
  var my = {
      getCacheForType: function (t) {
        var e = Zt(jt),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return Zt(jt).controller.signal;
      },
    },
    yy = typeof WeakMap == 'function' ? WeakMap : Map,
    ot = 0,
    Tt = null,
    at = null,
    ut = 0,
    mt = 0,
    de = null,
    pl = !1,
    Aa = !1,
    Jc = !1,
    el = 0,
    Mt = 0,
    Sl = 0,
    Wl = 0,
    $c = 0,
    he = 0,
    Ra = 0,
    bn = null,
    ae = null,
    Wc = !1,
    Nu = 0,
    wo = 0,
    Uu = 1 / 0,
    ju = null,
    bl = null,
    Lt = 0,
    El = null,
    Oa = null,
    ll = 0,
    kc = 0,
    Fc = null,
    Ko = null,
    En = 0,
    Ic = null;
  function me() {
    return (ot & 2) !== 0 && ut !== 0 ? ut & -ut : C.T !== null ? nf() : cs();
  }
  function Jo() {
    if (he === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = Qn;
        ((Qn <<= 1), (Qn & 3932160) === 0 && (Qn = 262144), (he = t));
      } else he = 536870912;
    return ((t = re.current), t !== null && (t.flags |= 32), he);
  }
  function ne(t, e, l) {
    (((t === Tt && (mt === 2 || mt === 9)) || t.cancelPendingCommit !== null) &&
      (Ma(t, 0), Tl(t, ut, he, !1)),
      Xa(t, l),
      ((ot & 2) === 0 || t !== Tt) &&
        (t === Tt &&
          ((ot & 2) === 0 && (Wl |= l), Mt === 4 && Tl(t, ut, he, !1)),
        Be(t)));
  }
  function $o(t, e, l) {
    if ((ot & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Ga(t, e),
      n = a ? py(t, e) : tf(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Aa && !a && Tl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !vy(l))) {
          ((n = tf(t, e, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            e = i;
            t: {
              var s = t;
              n = bn;
              var h = s.current.memoizedState.isDehydrated;
              if ((h && (Ma(s, i).flags |= 256), (i = tf(s, i, !1)), i !== 2)) {
                if (Jc && !h) {
                  ((s.errorRecoveryDisabledLanes |= u), (Wl |= u), (n = 4));
                  break t;
                }
                ((u = ae),
                  (ae = n),
                  u !== null &&
                    (ae === null ? (ae = u) : ae.push.apply(ae, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Ma(t, 0), Tl(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Tl(a, e, he, !pl);
              break t;
            case 2:
              ae = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = Nu + 300 - ue()), 10 < n)) {
            if ((Tl(a, e, he, !pl), Vn(a, 0, !0) !== 0)) break t;
            ((ll = e),
              (a.timeoutHandle = Ad(
                Wo.bind(
                  null,
                  a,
                  l,
                  ae,
                  ju,
                  Wc,
                  e,
                  he,
                  Wl,
                  Ra,
                  pl,
                  u,
                  'Throttled',
                  -0,
                  0,
                ),
                n,
              )));
            break t;
          }
          Wo(a, l, ae, ju, Wc, e, he, Wl, Ra, pl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Be(t);
  }
  function Wo(t, e, l, a, n, u, i, s, h, z, D, U, _, A) {
    if (
      ((t.timeoutHandle = -1),
      (U = e.subtreeFlags),
      U & 8192 || (U & 16785408) === 16785408)
    ) {
      ((U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xe,
      }),
        Xo(e, u, U));
      var X =
        (u & 62914560) === u ? Nu - ue() : (u & 4194048) === u ? wo - ue() : 0;
      if (((X = tv(U, X)), X !== null)) {
        ((ll = u),
          (t.cancelPendingCommit = X(
            ad.bind(null, t, e, u, l, a, n, i, s, h, D, U, null, _, A),
          )),
          Tl(t, u, i, !z));
        return;
      }
    }
    ad(t, e, u, l, a, n, i, s, h);
  }
  function vy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!fe(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Tl(t, e, l, a) {
    ((e &= ~$c),
      (e &= ~Wl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var n = e; 0 < n; ) {
      var u = 31 - ce(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && ns(t, l, e);
  }
  function Hu() {
    return (ot & 6) === 0 ? (Tn(0), !1) : !0;
  }
  function Pc() {
    if (at !== null) {
      if (mt === 0) var t = at.return;
      else ((t = at), (we = Gl = null), yc(t), (pa = null), (an = 0), (t = at));
      for (; t !== null; ) (Ro(t.alternate, t), (t = t.return));
      at = null;
    }
  }
  function Ma(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), By(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (ll = 0),
      Pc(),
      (Tt = t),
      (at = l = Ze(t.current, null)),
      (ut = e),
      (mt = 0),
      (de = null),
      (pl = !1),
      (Aa = Ga(t, e)),
      (Jc = !1),
      (Ra = he = $c = Wl = Sl = Mt = 0),
      (ae = bn = null),
      (Wc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ce(a),
          u = 1 << n;
        ((e |= t[n]), (a &= ~u));
      }
    return ((el = e), lu(), l);
  }
  function ko(t, e) {
    ((tt = null),
      (C.H = dn),
      e === ga || e === ru
        ? ((e = or()), (mt = 3))
        : e === ac
          ? ((e = or()), (mt = 4))
          : (mt =
              e === Cc
                ? 8
                : e !== null &&
                    typeof e == 'object' &&
                    typeof e.then == 'function'
                  ? 6
                  : 1),
      (de = e),
      at === null && ((Mt = 1), _u(t, be(e, t.current))));
  }
  function Fo() {
    var t = re.current;
    return t === null
      ? !0
      : (ut & 4194048) === ut
        ? _e === null
        : (ut & 62914560) === ut || (ut & 536870912) !== 0
          ? t === _e
          : !1;
  }
  function Io() {
    var t = C.H;
    return ((C.H = dn), t === null ? dn : t);
  }
  function Po() {
    var t = C.A;
    return ((C.A = my), t);
  }
  function Bu() {
    ((Mt = 4),
      pl || ((ut & 4194048) !== ut && re.current !== null) || (Aa = !0),
      ((Sl & 134217727) === 0 && (Wl & 134217727) === 0) ||
        Tt === null ||
        Tl(Tt, ut, he, !1));
  }
  function tf(t, e, l) {
    var a = ot;
    ot |= 2;
    var n = Io(),
      u = Po();
    ((Tt !== t || ut !== e) && ((ju = null), Ma(t, e)), (e = !1));
    var i = Mt;
    t: do
      try {
        if (mt !== 0 && at !== null) {
          var s = at,
            h = de;
          switch (mt) {
            case 8:
              (Pc(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              re.current === null && (e = !0);
              var z = mt;
              if (((mt = 0), (de = null), Da(t, s, h, z), l && Aa)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((z = mt), (mt = 0), (de = null), Da(t, s, h, z));
          }
        }
        (gy(), (i = Mt));
        break;
      } catch (D) {
        ko(t, D);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (we = Gl = null),
      (ot = a),
      (C.H = n),
      (C.A = u),
      at === null && ((Tt = null), (ut = 0), lu()),
      i
    );
  }
  function gy() {
    for (; at !== null; ) td(at);
  }
  function py(t, e) {
    var l = ot;
    ot |= 2;
    var a = Io(),
      n = Po();
    Tt !== t || ut !== e
      ? ((ju = null), (Uu = ue() + 500), Ma(t, e))
      : (Aa = Ga(t, e));
    t: do
      try {
        if (mt !== 0 && at !== null) {
          e = at;
          var u = de;
          e: switch (mt) {
            case 1:
              ((mt = 0), (de = null), Da(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (sr(u)) {
                ((mt = 0), (de = null), ed(e));
                break;
              }
              ((e = function () {
                ((mt !== 2 && mt !== 9) || Tt !== t || (mt = 7), Be(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              sr(u)
                ? ((mt = 0), (de = null), ed(e))
                : ((mt = 0), (de = null), Da(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var s = at;
                  if (i ? Gd(i) : s.stateNode.complete) {
                    ((mt = 0), (de = null));
                    var h = s.sibling;
                    if (h !== null) at = h;
                    else {
                      var z = s.return;
                      z !== null ? ((at = z), qu(z)) : (at = null);
                    }
                    break e;
                  }
              }
              ((mt = 0), (de = null), Da(t, e, u, 5));
              break;
            case 6:
              ((mt = 0), (de = null), Da(t, e, u, 6));
              break;
            case 8:
              (Pc(), (Mt = 6));
              break t;
            default:
              throw Error(f(462));
          }
        }
        Sy();
        break;
      } catch (D) {
        ko(t, D);
      }
    while (!0);
    return (
      (we = Gl = null),
      (C.H = a),
      (C.A = n),
      (ot = l),
      at !== null ? 0 : ((Tt = null), (ut = 0), lu(), Mt)
    );
  }
  function Sy() {
    for (; at !== null && !Qh(); ) td(at);
  }
  function td(t) {
    var e = _o(t.alternate, t, el);
    ((t.memoizedProps = t.pendingProps), e === null ? qu(t) : (at = e));
  }
  function ed(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = po(l, e, e.pendingProps, e.type, void 0, ut);
        break;
      case 11:
        e = po(l, e, e.pendingProps, e.type.render, e.ref, ut);
        break;
      case 5:
        yc(e);
      default:
        (Ro(l, e), (e = at = Is(e, el)), (e = _o(l, e, el)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? qu(t) : (at = e));
  }
  function Da(t, e, l, a) {
    ((we = Gl = null), yc(e), (pa = null), (an = 0));
    var n = e.return;
    try {
      if (cy(t, n, e, l, ut)) {
        ((Mt = 1), _u(t, be(l, t.current)), (at = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((at = n), u);
      ((Mt = 1), _u(t, be(l, t.current)), (at = null));
      return;
    }
    e.flags & 32768
      ? (ct || a === 1
          ? (t = !0)
          : Aa || (ut & 536870912) !== 0
            ? (t = !1)
            : ((pl = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = re.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        ld(e, t))
      : qu(e);
  }
  function qu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ld(e, pl);
        return;
      }
      t = e.return;
      var l = ry(e.alternate, e, el);
      if (l !== null) {
        at = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    Mt === 0 && (Mt = 5);
  }
  function ld(t, e) {
    do {
      var l = oy(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (at = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    ((Mt = 6), (at = null));
  }
  function ad(t, e, l, a, n, u, i, s, h) {
    t.cancelPendingCommit = null;
    do Lu();
    while (Lt !== 0);
    if ((ot & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Qi),
        Ih(t, l, u, i, s, h),
        t === Tt && ((at = Tt = null), (ut = 0)),
        (Oa = e),
        (El = t),
        (ll = l),
        (kc = u),
        (Fc = n),
        (Ko = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            zy(Gn, function () {
              return (fd(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = C.T), (C.T = null), (n = Y.p), (Y.p = 2), (i = ot), (ot |= 4));
        try {
          dy(t, e, l);
        } finally {
          ((ot = i), (Y.p = n), (C.T = a));
        }
      }
      ((Lt = 1), nd(), ud(), id());
    }
  }
  function nd() {
    if (Lt === 1) {
      Lt = 0;
      var t = El,
        e = Oa,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = C.T), (C.T = null));
        var a = Y.p;
        Y.p = 2;
        var n = ot;
        ot |= 4;
        try {
          Lo(e, t);
          var u = hf,
            i = Zs(t.containerInfo),
            s = u.focusedElem,
            h = u.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            Qs(s.ownerDocument.documentElement, s)
          ) {
            if (h !== null && qi(s)) {
              var z = h.start,
                D = h.end;
              if ((D === void 0 && (D = z), 'selectionStart' in s))
                ((s.selectionStart = z),
                  (s.selectionEnd = Math.min(D, s.value.length)));
              else {
                var U = s.ownerDocument || document,
                  _ = (U && U.defaultView) || window;
                if (_.getSelection) {
                  var A = _.getSelection(),
                    X = s.textContent.length,
                    $ = Math.min(h.start, X),
                    St = h.end === void 0 ? $ : Math.min(h.end, X);
                  !A.extend && $ > St && ((i = St), (St = $), ($ = i));
                  var p = Xs(s, $),
                    y = Xs(s, St);
                  if (
                    p &&
                    y &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== p.node ||
                      A.anchorOffset !== p.offset ||
                      A.focusNode !== y.node ||
                      A.focusOffset !== y.offset)
                  ) {
                    var E = U.createRange();
                    (E.setStart(p.node, p.offset),
                      A.removeAllRanges(),
                      $ > St
                        ? (A.addRange(E), A.extend(y.node, y.offset))
                        : (E.setEnd(y.node, y.offset), A.addRange(E)));
                  }
                }
              }
            }
            for (U = [], A = s; (A = A.parentNode); )
              A.nodeType === 1 &&
                U.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof s.focus == 'function' && s.focus(), s = 0;
              s < U.length;
              s++
            ) {
              var N = U[s];
              ((N.element.scrollLeft = N.left), (N.element.scrollTop = N.top));
            }
          }
          ((ku = !!df), (hf = df = null));
        } finally {
          ((ot = n), (Y.p = a), (C.T = l));
        }
      }
      ((t.current = e), (Lt = 2));
    }
  }
  function ud() {
    if (Lt === 2) {
      Lt = 0;
      var t = El,
        e = Oa,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = C.T), (C.T = null));
        var a = Y.p;
        Y.p = 2;
        var n = ot;
        ot |= 4;
        try {
          Uo(t, e.alternate, e);
        } finally {
          ((ot = n), (Y.p = a), (C.T = l));
        }
      }
      Lt = 3;
    }
  }
  function id() {
    if (Lt === 4 || Lt === 3) {
      ((Lt = 0), Zh());
      var t = El,
        e = Oa,
        l = ll,
        a = Ko;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Lt = 5)
        : ((Lt = 0), (Oa = El = null), cd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (bl = null),
        pi(l),
        (e = e.stateNode),
        ie && typeof ie.onCommitFiberRoot == 'function')
      )
        try {
          ie.onCommitFiberRoot(Ya, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = C.T), (n = Y.p), (Y.p = 2), (C.T = null));
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          ((C.T = e), (Y.p = n));
        }
      }
      ((ll & 3) !== 0 && Lu(),
        Be(t),
        (n = t.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? t === Ic
            ? En++
            : ((En = 0), (Ic = t))
          : (En = 0),
        Tn(0));
    }
  }
  function cd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), en(e)));
  }
  function Lu() {
    return (nd(), ud(), id(), fd());
  }
  function fd() {
    if (Lt !== 5) return !1;
    var t = El,
      e = kc;
    kc = 0;
    var l = pi(ll),
      a = C.T,
      n = Y.p;
    try {
      ((Y.p = 32 > l ? 32 : l), (C.T = null), (l = Fc), (Fc = null));
      var u = El,
        i = ll;
      if (((Lt = 0), (Oa = El = null), (ll = 0), (ot & 6) !== 0))
        throw Error(f(331));
      var s = ot;
      if (
        ((ot |= 4),
        Zo(u.current),
        Go(u, u.current, i, l),
        (ot = s),
        Tn(0, !1),
        ie && typeof ie.onPostCommitFiberRoot == 'function')
      )
        try {
          ie.onPostCommitFiberRoot(Ya, u);
        } catch {}
      return !0;
    } finally {
      ((Y.p = n), (C.T = a), cd(t, e));
    }
  }
  function sd(t, e, l) {
    ((e = be(l, e)),
      (e = xc(t.stateNode, e, 2)),
      (t = ml(t, e, 2)),
      t !== null && (Xa(t, 2), Be(t)));
  }
  function yt(t, e, l) {
    if (t.tag === 3) sd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          sd(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (bl === null || !bl.has(a)))
          ) {
            ((t = be(l, t)),
              (l = so(2)),
              (a = ml(e, l, 2)),
              a !== null && (ro(l, a, e, t), Xa(a, 2), Be(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function ef(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new yy();
      var n = new Set();
      a.set(e, n);
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)));
    n.has(l) ||
      ((Jc = !0), n.add(l), (t = by.bind(null, t, e, l)), e.then(t, t));
  }
  function by(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Tt === t &&
        (ut & l) === l &&
        (Mt === 4 || (Mt === 3 && (ut & 62914560) === ut && 300 > ue() - Nu)
          ? (ot & 2) === 0 && Ma(t, 0)
          : ($c |= l),
        Ra === ut && (Ra = 0)),
      Be(t));
  }
  function rd(t, e) {
    (e === 0 && (e = as()), (t = ql(t, e)), t !== null && (Xa(t, e), Be(t)));
  }
  function Ey(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), rd(t, l));
  }
  function Ty(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    (a !== null && a.delete(e), rd(t, l));
  }
  function zy(t, e) {
    return mi(t, e);
  }
  var Yu = null,
    xa = null,
    lf = !1,
    Gu = !1,
    af = !1,
    zl = 0;
  function Be(t) {
    (t !== xa &&
      t.next === null &&
      (xa === null ? (Yu = xa = t) : (xa = xa.next = t)),
      (Gu = !0),
      lf || ((lf = !0), Ay()));
  }
  function Tn(t, e) {
    if (!af && Gu) {
      af = !0;
      do
        for (var l = !1, a = Yu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                s = a.pingedLanes;
              ((u = (1 << (31 - ce(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), md(a, u));
          } else
            ((u = ut),
              (u = Vn(
                a,
                a === Tt ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Ga(a, u) || ((l = !0), md(a, u)));
          a = a.next;
        }
      while (l);
      af = !1;
    }
  }
  function _y() {
    od();
  }
  function od() {
    Gu = lf = !1;
    var t = 0;
    zl !== 0 && Hy() && (t = zl);
    for (var e = ue(), l = null, a = Yu; a !== null; ) {
      var n = a.next,
        u = dd(a, e);
      (u === 0
        ? ((a.next = null),
          l === null ? (Yu = n) : (l.next = n),
          n === null && (xa = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (Gu = !0)),
        (a = n));
    }
    ((Lt !== 0 && Lt !== 5) || Tn(t), zl !== 0 && (zl = 0));
  }
  function dd(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - ce(u),
        s = 1 << i,
        h = n[i];
      (h === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = Fh(s, e))
        : h <= e && (t.expiredLanes |= s),
        (u &= ~s));
    }
    if (
      ((e = Tt),
      (l = ut),
      (l = Vn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (mt === 2 || mt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && yi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ga(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && yi(a), pi(l))) {
        case 2:
        case 8:
          l = es;
          break;
        case 32:
          l = Gn;
          break;
        case 268435456:
          l = ls;
          break;
        default:
          l = Gn;
      }
      return (
        (a = hd.bind(null, t)),
        (l = mi(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && yi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function hd(t, e) {
    if (Lt !== 0 && Lt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (Lu() && t.callbackNode !== l) return null;
    var a = ut;
    return (
      (a = Vn(
        t,
        t === Tt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : ($o(t, a, e),
          dd(t, ue()),
          t.callbackNode != null && t.callbackNode === l
            ? hd.bind(null, t)
            : null)
    );
  }
  function md(t, e) {
    if (Lu()) return null;
    $o(t, e, !0);
  }
  function Ay() {
    qy(function () {
      (ot & 6) !== 0 ? mi(ts, _y) : od();
    });
  }
  function nf() {
    if (zl === 0) {
      var t = ya;
      (t === 0 && ((t = Xn), (Xn <<= 1), (Xn & 261888) === 0 && (Xn = 256)),
        (zl = t));
    }
    return zl;
  }
  function yd(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean'
      ? null
      : typeof t == 'function'
        ? t
        : $n('' + t);
  }
  function vd(t, e) {
    var l = e.ownerDocument.createElement('input');
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute('form', t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Ry(t, e, l, a, n) {
    if (e === 'submit' && l && l.stateNode === n) {
      var u = yd((n[It] || null).action),
        i = a.submitter;
      i &&
        ((e = (e = i[It] || null)
          ? yd(e.formAction)
          : i.getAttribute('formAction')),
        e !== null && ((u = e), (i = null)));
      var s = new In('action', 'action', null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (zl !== 0) {
                  var h = i ? vd(n, i) : new FormData(n);
                  _c(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    null,
                    h,
                  );
                }
              } else
                typeof u == 'function' &&
                  (s.preventDefault(),
                  (h = i ? vd(n, i) : new FormData(n)),
                  _c(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    u,
                    h,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var uf = 0; uf < Xi.length; uf++) {
    var cf = Xi[uf],
      Oy = cf.toLowerCase(),
      My = cf[0].toUpperCase() + cf.slice(1);
    Me(Oy, 'on' + My);
  }
  (Me(Ks, 'onAnimationEnd'),
    Me(Js, 'onAnimationIteration'),
    Me($s, 'onAnimationStart'),
    Me('dblclick', 'onDoubleClick'),
    Me('focusin', 'onFocus'),
    Me('focusout', 'onBlur'),
    Me(Vm, 'onTransitionRun'),
    Me(wm, 'onTransitionStart'),
    Me(Km, 'onTransitionCancel'),
    Me(Ws, 'onTransitionEnd'),
    ea('onMouseEnter', ['mouseout', 'mouseover']),
    ea('onMouseLeave', ['mouseout', 'mouseover']),
    ea('onPointerEnter', ['pointerout', 'pointerover']),
    ea('onPointerLeave', ['pointerout', 'pointerover']),
    Ul(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Ul(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Ul('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ul(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ul(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ul(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var zn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Dy = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(zn),
    );
  function gd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i],
              h = s.instance,
              z = s.currentTarget;
            if (((s = s.listener), h !== u && n.isPropagationStopped()))
              break t;
            ((u = s), (n.currentTarget = z));
            try {
              u(n);
            } catch (D) {
              eu(D);
            }
            ((n.currentTarget = null), (u = h));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((s = a[i]),
              (h = s.instance),
              (z = s.currentTarget),
              (s = s.listener),
              h !== u && n.isPropagationStopped())
            )
              break t;
            ((u = s), (n.currentTarget = z));
            try {
              u(n);
            } catch (D) {
              eu(D);
            }
            ((n.currentTarget = null), (u = h));
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[Si];
    l === void 0 && (l = e[Si] = new Set());
    var a = t + '__bubble';
    l.has(a) || (pd(e, t, 2, !1), l.add(a));
  }
  function ff(t, e, l) {
    var a = 0;
    (e && (a |= 4), pd(l, t, a, e));
  }
  var Xu = '_reactListening' + Math.random().toString(36).slice(2);
  function sf(t) {
    if (!t[Xu]) {
      ((t[Xu] = !0),
        rs.forEach(function (l) {
          l !== 'selectionchange' && (Dy.has(l) || ff(l, !1, t), ff(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Xu] || ((e[Xu] = !0), ff('selectionchange', !1, e));
    }
  }
  function pd(t, e, l, a) {
    switch (Jd(e)) {
      case 2:
        var n = av;
        break;
      case 8:
        n = nv;
        break;
      default:
        n = _f;
    }
    ((l = n.bind(null, e, l, t)),
      (n = void 0),
      !Mi ||
        (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
          ? t.addEventListener(e, l, { passive: n })
          : t.addEventListener(e, l, !1));
  }
  function rf(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var h = i.tag;
              if ((h === 3 || h === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = Il(s)), i === null)) return;
            if (((h = i.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Ts(function () {
      var z = u,
        D = Ri(l),
        U = [];
      t: {
        var _ = ks.get(t);
        if (_ !== void 0) {
          var A = In,
            X = t;
          switch (t) {
            case 'keypress':
              if (kn(l) === 0) break t;
            case 'keydown':
            case 'keyup':
              A = Tm;
              break;
            case 'focusin':
              ((X = 'focus'), (A = Ni));
              break;
            case 'focusout':
              ((X = 'blur'), (A = Ni));
              break;
            case 'beforeblur':
            case 'afterblur':
              A = Ni;
              break;
            case 'click':
              if (l.button === 2) break t;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              A = As;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              A = rm;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              A = Am;
              break;
            case Ks:
            case Js:
            case $s:
              A = hm;
              break;
            case Ws:
              A = Om;
              break;
            case 'scroll':
            case 'scrollend':
              A = fm;
              break;
            case 'wheel':
              A = Dm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              A = ym;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              A = Os;
              break;
            case 'toggle':
            case 'beforetoggle':
              A = Cm;
          }
          var $ = (e & 4) !== 0,
            St = !$ && (t === 'scroll' || t === 'scrollend'),
            p = $ ? (_ !== null ? _ + 'Capture' : null) : _;
          $ = [];
          for (var y = z, E; y !== null; ) {
            var N = y;
            if (
              ((E = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                E === null ||
                p === null ||
                ((N = Va(y, p)), N != null && $.push(_n(y, N, E))),
              St)
            )
              break;
            y = y.return;
          }
          0 < $.length &&
            ((_ = new A(_, X, null, l, D)), U.push({ event: _, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((_ = t === 'mouseover' || t === 'pointerover'),
            (A = t === 'mouseout' || t === 'pointerout'),
            _ &&
              l !== Ai &&
              (X = l.relatedTarget || l.fromElement) &&
              (Il(X) || X[Fl]))
          )
            break t;
          if (
            (A || _) &&
            ((_ =
              D.window === D
                ? D
                : (_ = D.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            A
              ? ((X = l.relatedTarget || l.toElement),
                (A = z),
                (X = X ? Il(X) : null),
                X !== null &&
                  ((St = m(X)),
                  ($ = X.tag),
                  X !== St || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                  (X = null))
              : ((A = null), (X = z)),
            A !== X)
          ) {
            if (
              (($ = As),
              (N = 'onMouseLeave'),
              (p = 'onMouseEnter'),
              (y = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                (($ = Os),
                (N = 'onPointerLeave'),
                (p = 'onPointerEnter'),
                (y = 'pointer')),
              (St = A == null ? _ : Za(A)),
              (E = X == null ? _ : Za(X)),
              (_ = new $(N, y + 'leave', A, l, D)),
              (_.target = St),
              (_.relatedTarget = E),
              (N = null),
              Il(D) === z &&
                (($ = new $(p, y + 'enter', X, l, D)),
                ($.target = E),
                ($.relatedTarget = St),
                (N = $)),
              (St = N),
              A && X)
            )
              e: {
                for ($ = xy, p = A, y = X, E = 0, N = p; N; N = $(N)) E++;
                N = 0;
                for (var w = y; w; w = $(w)) N++;
                for (; 0 < E - N; ) ((p = $(p)), E--);
                for (; 0 < N - E; ) ((y = $(y)), N--);
                for (; E--; ) {
                  if (p === y || (y !== null && p === y.alternate)) {
                    $ = p;
                    break e;
                  }
                  ((p = $(p)), (y = $(y)));
                }
                $ = null;
              }
            else $ = null;
            (A !== null && Sd(U, _, A, $, !1),
              X !== null && St !== null && Sd(U, St, X, $, !0));
          }
        }
        t: {
          if (
            ((_ = z ? Za(z) : window),
            (A = _.nodeName && _.nodeName.toLowerCase()),
            A === 'select' || (A === 'input' && _.type === 'file'))
          )
            var ft = Hs;
          else if (Us(_))
            if (Bs) ft = Xm;
            else {
              ft = Ym;
              var Z = Lm;
            }
          else
            ((A = _.nodeName),
              !A ||
              A.toLowerCase() !== 'input' ||
              (_.type !== 'checkbox' && _.type !== 'radio')
                ? z && _i(z.elementType) && (ft = Hs)
                : (ft = Gm));
          if (ft && (ft = ft(t, z))) {
            js(U, ft, l, D);
            break t;
          }
          (Z && Z(t, _, z),
            t === 'focusout' &&
              z &&
              _.type === 'number' &&
              z.memoizedProps.value != null &&
              zi(_, 'number', _.value));
        }
        switch (((Z = z ? Za(z) : window), t)) {
          case 'focusin':
            (Us(Z) || Z.contentEditable === 'true') &&
              ((ca = Z), (Li = z), (Ia = null));
            break;
          case 'focusout':
            Ia = Li = ca = null;
            break;
          case 'mousedown':
            Yi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Yi = !1), Vs(U, l, D));
            break;
          case 'selectionchange':
            if (Zm) break;
          case 'keydown':
          case 'keyup':
            Vs(U, l, D);
        }
        var et;
        if (ji)
          t: {
            switch (t) {
              case 'compositionstart':
                var it = 'onCompositionStart';
                break t;
              case 'compositionend':
                it = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                it = 'onCompositionUpdate';
                break t;
            }
            it = void 0;
          }
        else
          ia
            ? Cs(t, l) && (it = 'onCompositionEnd')
            : t === 'keydown' &&
              l.keyCode === 229 &&
              (it = 'onCompositionStart');
        (it &&
          (Ms &&
            l.locale !== 'ko' &&
            (ia || it !== 'onCompositionStart'
              ? it === 'onCompositionEnd' && ia && (et = zs())
              : ((cl = D),
                (Di = 'value' in cl ? cl.value : cl.textContent),
                (ia = !0))),
          (Z = Qu(z, it)),
          0 < Z.length &&
            ((it = new Rs(it, t, null, l, D)),
            U.push({ event: it, listeners: Z }),
            et
              ? (it.data = et)
              : ((et = Ns(l)), et !== null && (it.data = et)))),
          (et = Um ? jm(t, l) : Hm(t, l)) &&
            ((it = Qu(z, 'onBeforeInput')),
            0 < it.length &&
              ((Z = new Rs('onBeforeInput', 'beforeinput', null, l, D)),
              U.push({ event: Z, listeners: it }),
              (Z.data = et))),
          Ry(U, t, z, l, D));
      }
      gd(U, e);
    });
  }
  function _n(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Qu(t, e) {
    for (var l = e + 'Capture', a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Va(t, l)),
          n != null && a.unshift(_n(t, n, u)),
          (n = Va(t, e)),
          n != null && a.push(_n(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function xy(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Sd(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var s = l,
        h = s.alternate,
        z = s.stateNode;
      if (((s = s.tag), h !== null && h === a)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        z === null ||
        ((h = z),
        n
          ? ((z = Va(l, u)), z != null && i.unshift(_n(l, z, h)))
          : n || ((z = Va(l, u)), z != null && i.push(_n(l, z, h)))),
        (l = l.return));
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var Cy = /\r\n?/g,
    Ny = /\u0000|\uFFFD/g;
  function bd(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Cy,
        `
`,
      )
      .replace(Ny, '');
  }
  function Ed(t, e) {
    return ((e = bd(e)), bd(t) === e);
  }
  function pt(t, e, l, a, n, u) {
    switch (l) {
      case 'children':
        typeof a == 'string'
          ? e === 'body' || (e === 'textarea' && a === '') || aa(t, a)
          : (typeof a == 'number' || typeof a == 'bigint') &&
            e !== 'body' &&
            aa(t, '' + a);
        break;
      case 'className':
        Kn(t, 'class', a);
        break;
      case 'tabIndex':
        Kn(t, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Kn(t, l, a);
        break;
      case 'style':
        bs(t, a, u);
        break;
      case 'data':
        if (e !== 'object') {
          Kn(t, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (e !== 'a' || l !== 'href')) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          typeof a == 'boolean'
        ) {
          t.removeAttribute(l);
          break;
        }
        ((a = $n('' + a)), t.setAttribute(l, a));
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == 'function' &&
            (l === 'formAction'
              ? (e !== 'input' && pt(t, e, 'name', n.name, n, null),
                pt(t, e, 'formEncType', n.formEncType, n, null),
                pt(t, e, 'formMethod', n.formMethod, n, null),
                pt(t, e, 'formTarget', n.formTarget, n, null))
              : (pt(t, e, 'encType', n.encType, n, null),
                pt(t, e, 'method', n.method, n, null),
                pt(t, e, 'target', n.target, n, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l);
          break;
        }
        ((a = $n('' + a)), t.setAttribute(l, a));
        break;
      case 'onClick':
        a != null && (t.onclick = Xe);
        break;
      case 'onScroll':
        a != null && nt('scroll', t);
        break;
      case 'onScrollEnd':
        a != null && nt('scrollend', t);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        t.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        t.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'boolean' ||
          typeof a == 'symbol'
        ) {
          t.removeAttribute('xlink:href');
          break;
        }
        ((l = $n('' + a)),
          t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? t.setAttribute(l, '' + a)
          : t.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? t.setAttribute(l, '')
          : t.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        a === !0
          ? t.setAttribute(l, '')
          : a !== !1 &&
              a != null &&
              typeof a != 'function' &&
              typeof a != 'symbol'
            ? t.setAttribute(l, a)
            : t.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null &&
        typeof a != 'function' &&
        typeof a != 'symbol' &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case 'popover':
        (nt('beforetoggle', t), nt('toggle', t), wn(t, 'popover', a));
        break;
      case 'xlinkActuate':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        Ge(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        Ge(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        Ge(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        Ge(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        wn(t, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = im.get(l) || l), wn(t, l, a));
    }
  }
  function of(t, e, l, a, n, u) {
    switch (l) {
      case 'style':
        bs(t, a, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? aa(t, a)
          : (typeof a == 'number' || typeof a == 'bigint') && aa(t, '' + a);
        break;
      case 'onScroll':
        a != null && nt('scroll', t);
        break;
      case 'onScrollEnd':
        a != null && nt('scrollend', t);
        break;
      case 'onClick':
        a != null && (t.onclick = Xe);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!os.hasOwnProperty(l))
          t: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[It] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && t.removeEventListener(e, u, n),
              typeof a == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n));
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
                ? t.setAttribute(l, '')
                : wn(t, l, a);
          }
    }
  }
  function wt(t, e, l) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (nt('error', t), nt('load', t));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  n = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(f(137, e));
                default:
                  pt(t, e, u, i, l, null);
              }
          }
        (n && pt(t, e, 'srcSet', l.srcSet, l, null),
          a && pt(t, e, 'src', l.src, l, null));
        return;
      case 'input':
        nt('invalid', t);
        var s = (u = i = n = null),
          h = null,
          z = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var D = l[a];
            if (D != null)
              switch (a) {
                case 'name':
                  n = D;
                  break;
                case 'type':
                  i = D;
                  break;
                case 'checked':
                  h = D;
                  break;
                case 'defaultChecked':
                  z = D;
                  break;
                case 'value':
                  u = D;
                  break;
                case 'defaultValue':
                  s = D;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (D != null) throw Error(f(137, e));
                  break;
                default:
                  pt(t, e, a, D, l, null);
              }
          }
        vs(t, u, s, h, z, i, n, !1);
        return;
      case 'select':
        (nt('invalid', t), (a = i = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case 'value':
                u = s;
                break;
              case 'defaultValue':
                i = s;
                break;
              case 'multiple':
                a = s;
              default:
                pt(t, e, n, s, l, null);
            }
        ((e = u),
          (l = i),
          (t.multiple = !!a),
          e != null ? la(t, !!a, e, !1) : l != null && la(t, !!a, l, !0));
        return;
      case 'textarea':
        (nt('invalid', t), (u = n = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
            switch (i) {
              case 'value':
                a = s;
                break;
              case 'defaultValue':
                n = s;
                break;
              case 'children':
                u = s;
                break;
              case 'dangerouslySetInnerHTML':
                if (s != null) throw Error(f(91));
                break;
              default:
                pt(t, e, i, s, l, null);
            }
        ps(t, a, n, u);
        return;
      case 'option':
        for (h in l)
          l.hasOwnProperty(h) &&
            ((a = l[h]), a != null) &&
            (h === 'selected'
              ? (t.selected =
                  a && typeof a != 'function' && typeof a != 'symbol')
              : pt(t, e, h, a, l, null));
        return;
      case 'dialog':
        (nt('beforetoggle', t),
          nt('toggle', t),
          nt('cancel', t),
          nt('close', t));
        break;
      case 'iframe':
      case 'object':
        nt('load', t);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < zn.length; a++) nt(zn[a], t);
        break;
      case 'image':
        (nt('error', t), nt('load', t));
        break;
      case 'details':
        nt('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (nt('error', t), nt('load', t));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (z in l)
          if (l.hasOwnProperty(z) && ((a = l[z]), a != null))
            switch (z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(f(137, e));
              default:
                pt(t, e, z, a, l, null);
            }
        return;
      default:
        if (_i(e)) {
          for (D in l)
            l.hasOwnProperty(D) &&
              ((a = l[D]), a !== void 0 && of(t, e, D, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && pt(t, e, s, a, l, null));
  }
  function Uy(t, e, l, a) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var n = null,
          u = null,
          i = null,
          s = null,
          h = null,
          z = null,
          D = null;
        for (A in l) {
          var U = l[A];
          if (l.hasOwnProperty(A) && U != null)
            switch (A) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                h = U;
              default:
                a.hasOwnProperty(A) || pt(t, e, A, null, a, U);
            }
        }
        for (var _ in a) {
          var A = a[_];
          if (((U = l[_]), a.hasOwnProperty(_) && (A != null || U != null)))
            switch (_) {
              case 'type':
                u = A;
                break;
              case 'name':
                n = A;
                break;
              case 'checked':
                z = A;
                break;
              case 'defaultChecked':
                D = A;
                break;
              case 'value':
                i = A;
                break;
              case 'defaultValue':
                s = A;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(f(137, e));
                break;
              default:
                A !== U && pt(t, e, _, A, a, U);
            }
        }
        Ti(t, i, s, h, z, D, u, n);
        return;
      case 'select':
        A = i = s = _ = null;
        for (u in l)
          if (((h = l[u]), l.hasOwnProperty(u) && h != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                A = h;
              default:
                a.hasOwnProperty(u) || pt(t, e, u, null, a, h);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (h = l[n]),
            a.hasOwnProperty(n) && (u != null || h != null))
          )
            switch (n) {
              case 'value':
                _ = u;
                break;
              case 'defaultValue':
                s = u;
                break;
              case 'multiple':
                i = u;
              default:
                u !== h && pt(t, e, n, u, a, h);
            }
        ((e = s),
          (l = i),
          (a = A),
          _ != null
            ? la(t, !!l, _, !1)
            : !!a != !!l &&
              (e != null ? la(t, !!l, e, !0) : la(t, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        A = _ = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                pt(t, e, s, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case 'value':
                _ = n;
                break;
              case 'defaultValue':
                A = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && pt(t, e, i, n, a, u);
            }
        gs(t, _, A);
        return;
      case 'option':
        for (var X in l)
          ((_ = l[X]),
            l.hasOwnProperty(X) &&
              _ != null &&
              !a.hasOwnProperty(X) &&
              (X === 'selected' ? (t.selected = !1) : pt(t, e, X, null, a, _)));
        for (h in a)
          ((_ = a[h]),
            (A = l[h]),
            a.hasOwnProperty(h) &&
              _ !== A &&
              (_ != null || A != null) &&
              (h === 'selected'
                ? (t.selected =
                    _ && typeof _ != 'function' && typeof _ != 'symbol')
                : pt(t, e, h, _, a, A)));
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var $ in l)
          ((_ = l[$]),
            l.hasOwnProperty($) &&
              _ != null &&
              !a.hasOwnProperty($) &&
              pt(t, e, $, null, a, _));
        for (z in a)
          if (
            ((_ = a[z]),
            (A = l[z]),
            a.hasOwnProperty(z) && _ !== A && (_ != null || A != null))
          )
            switch (z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (_ != null) throw Error(f(137, e));
                break;
              default:
                pt(t, e, z, _, a, A);
            }
        return;
      default:
        if (_i(e)) {
          for (var St in l)
            ((_ = l[St]),
              l.hasOwnProperty(St) &&
                _ !== void 0 &&
                !a.hasOwnProperty(St) &&
                of(t, e, St, void 0, a, _));
          for (D in a)
            ((_ = a[D]),
              (A = l[D]),
              !a.hasOwnProperty(D) ||
                _ === A ||
                (_ === void 0 && A === void 0) ||
                of(t, e, D, _, a, A));
          return;
        }
    }
    for (var p in l)
      ((_ = l[p]),
        l.hasOwnProperty(p) &&
          _ != null &&
          !a.hasOwnProperty(p) &&
          pt(t, e, p, null, a, _));
    for (U in a)
      ((_ = a[U]),
        (A = l[U]),
        !a.hasOwnProperty(U) ||
          _ === A ||
          (_ == null && A == null) ||
          pt(t, e, U, _, a, A));
  }
  function Td(t) {
    switch (t) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0;
      default:
        return !1;
    }
  }
  function jy() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType('resource'), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          s = n.duration;
        if (u && s && Td(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a],
              z = h.startTime;
            if (z > s) break;
            var D = h.transferSize,
              U = h.initiatorType;
            D &&
              Td(U) &&
              ((h = h.responseEnd), (i += D * (h < s ? 1 : (s - z) / (h - z))));
          }
          if ((--a, (e += (8 * (u + i)) / (n.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == 'number')
      ? t
      : 5;
  }
  var df = null,
    hf = null;
  function Zu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function zd(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function _d(t, e) {
    if (t === 0)
      switch (e) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === 'foreignObject' ? 0 : t;
  }
  function mf(t, e) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof e.children == 'string' ||
      typeof e.children == 'number' ||
      typeof e.children == 'bigint' ||
      (typeof e.dangerouslySetInnerHTML == 'object' &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yf = null;
  function Hy() {
    var t = window.event;
    return t && t.type === 'popstate'
      ? t === yf
        ? !1
        : ((yf = t), !0)
      : ((yf = null), !1);
  }
  var Ad = typeof setTimeout == 'function' ? setTimeout : void 0,
    By = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Rd = typeof Promise == 'function' ? Promise : void 0,
    qy =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Rd < 'u'
          ? function (t) {
              return Rd.resolve(null).then(t).catch(Ly);
            }
          : Ad;
  function Ly(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function _l(t) {
    return t === 'head';
  }
  function Od(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === '/$' || l === '/&')) {
          if (a === 0) {
            (t.removeChild(n), ja(e));
            return;
          }
          a--;
        } else if (
          l === '$' ||
          l === '$?' ||
          l === '$~' ||
          l === '$!' ||
          l === '&'
        )
          a++;
        else if (l === 'html') An(t.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = t.ownerDocument.head), An(l));
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              s = u.nodeName;
            (u[Qa] ||
              s === 'SCRIPT' ||
              s === 'STYLE' ||
              (s === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(u),
              (u = i));
          }
        } else l === 'body' && An(t.ownerDocument.body);
      l = n;
    } while (l);
    ja(e);
  }
  function Md(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = 'none'))
            : ((l.style.display = l._stashedDisplay || ''),
              l.getAttribute('style') === '' && l.removeAttribute('style'))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ''))
              : (l.nodeValue = l._stashedText || '')),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === '/$')) {
          if (t === 0) break;
          t--;
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || t++;
      l = a;
    } while (l);
  }
  function vf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (vf(l), bi(l));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      t.removeChild(l);
    }
  }
  function Yy(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (a) {
        if (!t[Qa])
          switch (e) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break;
              return t;
            case 'link':
              if (
                ((u = t.getAttribute('rel')),
                u === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute('href') !==
                  (n.href == null || n.href === '' ? null : n.href) ||
                t.getAttribute('crossorigin') !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case 'style':
              if (t.hasAttribute('data-precedence')) break;
              return t;
            case 'script':
              if (
                ((u = t.getAttribute('src')),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  t.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === 'input' && t.type === 'hidden') {
        var u = n.name == null ? null : '' + n.name;
        if (n.type === 'hidden' && t.getAttribute('name') === u) return t;
      } else return t;
      if (((t = Ae(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Gy(t, e, l) {
    if (e === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !l) ||
        ((t = Ae(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Dd(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !e) ||
        ((t = Ae(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function gf(t) {
    return t.data === '$?' || t.data === '$~';
  }
  function pf(t) {
    return (
      t.data === '$!' ||
      (t.data === '$?' && t.ownerDocument.readyState !== 'loading')
    );
  }
  function Xy(t, e) {
    var l = t.ownerDocument;
    if (t.data === '$~') t._reactRetry = e;
    else if (t.data !== '$?' || l.readyState !== 'loading') e();
    else {
      var a = function () {
        (e(), l.removeEventListener('DOMContentLoaded', a));
      };
      (l.addEventListener('DOMContentLoaded', a), (t._reactRetry = a));
    }
  }
  function Ae(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === '$' ||
            e === '$!' ||
            e === '$?' ||
            e === '$~' ||
            e === '&' ||
            e === 'F!' ||
            e === 'F')
        )
          break;
        if (e === '/$' || e === '/&') return null;
      }
    }
    return t;
  }
  var Sf = null;
  function xd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '/$' || l === '/&') {
          if (e === 0) return Ae(t.nextSibling);
          e--;
        } else
          (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Cd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
          if (e === 0) return t;
          e--;
        } else (l !== '/$' && l !== '/&') || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Nd(t, e, l) {
    switch (((e = Zu(l)), t)) {
      case 'html':
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case 'head':
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case 'body':
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function An(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    bi(t);
  }
  var Re = new Map(),
    Ud = new Set();
  function Vu(t) {
    return typeof t.getRootNode == 'function'
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var al = Y.d;
  Y.d = { f: Qy, r: Zy, D: Vy, C: wy, L: Ky, m: Jy, X: Wy, S: $y, M: ky };
  function Qy() {
    var t = al.f(),
      e = Hu();
    return t || e;
  }
  function Zy(t) {
    var e = Pl(t);
    e !== null && e.tag === 5 && e.type === 'form' ? Wr(e) : al.r(t);
  }
  var Ca = typeof document > 'u' ? null : document;
  function jd(t, e, l) {
    var a = Ca;
    if (a && typeof e == 'string' && e) {
      var n = pe(e);
      ((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        Ud.has(n) ||
          (Ud.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement('link')),
            wt(e, 'link', t),
            Yt(e),
            a.head.appendChild(e))));
    }
  }
  function Vy(t) {
    (al.D(t), jd('dns-prefetch', t, null));
  }
  function wy(t, e) {
    (al.C(t, e), jd('preconnect', t, e));
  }
  function Ky(t, e, l) {
    al.L(t, e, l);
    var a = Ca;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + pe(e) + '"]';
      e === 'image' && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + pe(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' &&
            (n += '[imagesizes="' + pe(l.imageSizes) + '"]'))
        : (n += '[href="' + pe(t) + '"]');
      var u = n;
      switch (e) {
        case 'style':
          u = Na(t);
          break;
        case 'script':
          u = Ua(t);
      }
      Re.has(u) ||
        ((t = T(
          {
            rel: 'preload',
            href: e === 'image' && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        Re.set(u, t),
        a.querySelector(n) !== null ||
          (e === 'style' && a.querySelector(Rn(u))) ||
          (e === 'script' && a.querySelector(On(u))) ||
          ((e = a.createElement('link')),
          wt(e, 'link', t),
          Yt(e),
          a.head.appendChild(e)));
    }
  }
  function Jy(t, e) {
    al.m(t, e);
    var l = Ca;
    if (l && t) {
      var a = e && typeof e.as == 'string' ? e.as : 'script',
        n =
          'link[rel="modulepreload"][as="' + pe(a) + '"][href="' + pe(t) + '"]',
        u = n;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = Ua(t);
      }
      if (
        !Re.has(u) &&
        ((t = T({ rel: 'modulepreload', href: t }, e)),
        Re.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(On(u))) return;
        }
        ((a = l.createElement('link')),
          wt(a, 'link', t),
          Yt(a),
          l.head.appendChild(a));
      }
    }
  }
  function $y(t, e, l) {
    al.S(t, e, l);
    var a = Ca;
    if (a && t) {
      var n = ta(a).hoistableStyles,
        u = Na(t);
      e = e || 'default';
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = a.querySelector(Rn(u)))) s.loading = 5;
        else {
          ((t = T({ rel: 'stylesheet', href: t, 'data-precedence': e }, l)),
            (l = Re.get(u)) && bf(t, l));
          var h = (i = a.createElement('link'));
          (Yt(h),
            wt(h, 'link', t),
            (h._p = new Promise(function (z, D) {
              ((h.onload = z), (h.onerror = D));
            })),
            h.addEventListener('load', function () {
              s.loading |= 1;
            }),
            h.addEventListener('error', function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            wu(i, e, a));
        }
        ((i = { type: 'stylesheet', instance: i, count: 1, state: s }),
          n.set(u, i));
      }
    }
  }
  function Wy(t, e) {
    al.X(t, e);
    var l = Ca;
    if (l && t) {
      var a = ta(l).hoistableScripts,
        n = Ua(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(On(n))),
        u ||
          ((t = T({ src: t, async: !0 }, e)),
          (e = Re.get(n)) && Ef(t, e),
          (u = l.createElement('script')),
          Yt(u),
          wt(u, 'link', t),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function ky(t, e) {
    al.M(t, e);
    var l = Ca;
    if (l && t) {
      var a = ta(l).hoistableScripts,
        n = Ua(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(On(n))),
        u ||
          ((t = T({ src: t, async: !0, type: 'module' }, e)),
          (e = Re.get(n)) && Ef(t, e),
          (u = l.createElement('script')),
          Yt(u),
          wt(u, 'link', t),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Hd(t, e, l, a) {
    var n = (n = lt.current) ? Vu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((e = Na(l.href)),
            (l = ta(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: 'style', instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          t = Na(l.href);
          var u = ta(n).hoistableStyles,
            i = u.get(t);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, i),
              (u = n.querySelector(Rn(t))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Re.has(t) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Re.set(t, l),
                u || Fy(n, t, l, i.state))),
            e && a === null)
          )
            throw Error(f(528, ''));
          return i;
        }
        if (e && a !== null) throw Error(f(529, ''));
        return null;
      case 'script':
        return (
          (e = l.async),
          (l = l.src),
          typeof l == 'string' &&
          e &&
          typeof e != 'function' &&
          typeof e != 'symbol'
            ? ((e = Ua(l)),
              (l = ta(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Na(t) {
    return 'href="' + pe(t) + '"';
  }
  function Rn(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function Bd(t) {
    return T({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function Fy(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + ']')
      ? (a.loading = 1)
      : ((e = t.createElement('link')),
        (a.preload = e),
        e.addEventListener('load', function () {
          return (a.loading |= 1);
        }),
        e.addEventListener('error', function () {
          return (a.loading |= 2);
        }),
        wt(e, 'link', l),
        Yt(e),
        t.head.appendChild(e));
  }
  function Ua(t) {
    return '[src="' + pe(t) + '"]';
  }
  function On(t) {
    return 'script[async]' + t;
  }
  function qd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var a = t.querySelector('style[data-href~="' + pe(l.href) + '"]');
          if (a) return ((e.instance = a), Yt(a), a);
          var n = T({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement('style')),
            Yt(a),
            wt(a, 'style', n),
            wu(a, l.precedence, t),
            (e.instance = a)
          );
        case 'stylesheet':
          n = Na(l.href);
          var u = t.querySelector(Rn(n));
          if (u) return ((e.state.loading |= 4), (e.instance = u), Yt(u), u);
          ((a = Bd(l)),
            (n = Re.get(n)) && bf(a, n),
            (u = (t.ownerDocument || t).createElement('link')),
            Yt(u));
          var i = u;
          return (
            (i._p = new Promise(function (s, h) {
              ((i.onload = s), (i.onerror = h));
            })),
            wt(u, 'link', a),
            (e.state.loading |= 4),
            wu(u, l.precedence, t),
            (e.instance = u)
          );
        case 'script':
          return (
            (u = Ua(l.src)),
            (n = t.querySelector(On(u)))
              ? ((e.instance = n), Yt(n), n)
              : ((a = l),
                (n = Re.get(u)) && ((a = T({}, l)), Ef(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement('script')),
                Yt(n),
                wt(n, 'link', a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case 'void':
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === 'stylesheet' &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), wu(a, l.precedence, t));
    return e.instance;
  }
  function wu(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function bf(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Ef(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Ku = null;
  function Ld(t, e, l) {
    if (Ku === null) {
      var a = new Map(),
        n = (Ku = new Map());
      n.set(l, a);
    } else ((n = Ku), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Qa] ||
          u[Xt] ||
          (t === 'link' && u.getAttribute('rel') === 'stylesheet')
        ) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var i = u.getAttribute(e) || '';
        i = t + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Yd(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === 'title' ? t.querySelector('head > title') : null,
      ));
  }
  function Iy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof e.precedence != 'string' ||
          typeof e.href != 'string' ||
          e.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof e.rel != 'string' ||
          typeof e.href != 'string' ||
          e.href === '' ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === 'stylesheet'
          ? ((t = e.disabled), typeof e.precedence == 'string' && t == null)
          : !0;
      case 'script':
        if (
          e.async &&
          typeof e.async != 'function' &&
          typeof e.async != 'symbol' &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Gd(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  function Py(t, e, l, a) {
    if (
      l.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Na(a.href),
          u = e.querySelector(Rn(n));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (t.count++, (t = Ju.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = u),
            Yt(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (a = Bd(a)),
          (n = Re.get(n)) && bf(a, n),
          (u = u.createElement('link')),
          Yt(u));
        var i = u;
        ((i._p = new Promise(function (s, h) {
          ((i.onload = s), (i.onerror = h));
        })),
          wt(u, 'link', a),
          (l.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = Ju.bind(t)),
          e.addEventListener('load', l),
          e.addEventListener('error', l)));
    }
  }
  var Tf = 0;
  function tv(t, e) {
    return (
      t.stylesheets && t.count === 0 && Wu(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Wu(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Tf === 0 && (Tf = 62500 * jy());
            var n = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Wu(t, t.stylesheets), t.unsuspend))
                ) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              },
              (t.imgBytes > Tf ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = l),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Ju() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Wu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var $u = null;
  function Wu(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        ($u = new Map()),
        e.forEach(ev, t),
        ($u = null),
        Ju.call(t)));
  }
  function ev(t, e) {
    if (!(e.state.loading & 4)) {
      var l = $u.get(t);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), $u.set(t, l));
        for (
          var n = t.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((n = e.instance),
        (i = n.getAttribute('data-precedence')),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = Ju.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Mn = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function lv(t, e, l, a, n, u, i, s, h) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = vi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vi(0)),
      (this.hiddenUpdates = vi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map()));
  }
  function Xd(t, e, l, a, n, u, i, s, h, z, D, U) {
    return (
      (t = new lv(t, e, l, i, h, z, D, U, s)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = se(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = tc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      nc(u),
      t
    );
  }
  function Qd(t) {
    return t ? ((t = ra), t) : ra;
  }
  function Zd(t, e, l, a, n, u) {
    ((n = Qd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = hl(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = ml(t, a, e)),
      l !== null && (ne(l, t, e), un(l, t, e)));
  }
  function Vd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function zf(t, e) {
    (Vd(t, e), (t = t.alternate) && Vd(t, e));
  }
  function wd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ql(t, 67108864);
      (e !== null && ne(e, t, 67108864), zf(t, 67108864));
    }
  }
  function Kd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = me();
      e = gi(e);
      var l = ql(t, e);
      (l !== null && ne(l, t, e), zf(t, e));
    }
  }
  var ku = !0;
  function av(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var u = Y.p;
    try {
      ((Y.p = 2), _f(t, e, l, a));
    } finally {
      ((Y.p = u), (C.T = n));
    }
  }
  function nv(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var u = Y.p;
    try {
      ((Y.p = 8), _f(t, e, l, a));
    } finally {
      ((Y.p = u), (C.T = n));
    }
  }
  function _f(t, e, l, a) {
    if (ku) {
      var n = Af(a);
      if (n === null) (rf(t, e, a, Fu, l), $d(t, a));
      else if (iv(n, t, e, l, a)) a.stopPropagation();
      else if (($d(t, a), e & 4 && -1 < uv.indexOf(t))) {
        for (; n !== null; ) {
          var u = Pl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Nl(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var h = 1 << (31 - ce(i));
                      ((s.entanglements[1] |= h), (i &= ~h));
                    }
                    (Be(u), (ot & 6) === 0 && ((Uu = ue() + 500), Tn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = ql(u, 2)), s !== null && ne(s, u, 2), Hu(), zf(u, 2));
            }
          if (((u = Af(a)), u === null && rf(t, e, a, Fu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else rf(t, e, a, null, l);
    }
  }
  function Af(t) {
    return ((t = Ri(t)), Rf(t));
  }
  var Fu = null;
  function Rf(t) {
    if (((Fu = null), (t = Il(t)), t !== null)) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = S(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = x(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Fu = t), null);
  }
  function Jd(t) {
    switch (t) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (Vh()) {
          case ts:
            return 2;
          case es:
            return 8;
          case Gn:
          case wh:
            return 32;
          case ls:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Of = !1,
    Al = null,
    Rl = null,
    Ol = null,
    Dn = new Map(),
    xn = new Map(),
    Ml = [],
    uv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function $d(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        Al = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Rl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ol = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Dn.delete(e.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        xn.delete(e.pointerId);
    }
  }
  function Cn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Pl(e)), e !== null && wd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function iv(t, e, l, a, n) {
    switch (e) {
      case 'focusin':
        return ((Al = Cn(Al, t, e, l, a, n)), !0);
      case 'dragenter':
        return ((Rl = Cn(Rl, t, e, l, a, n)), !0);
      case 'mouseover':
        return ((Ol = Cn(Ol, t, e, l, a, n)), !0);
      case 'pointerover':
        var u = n.pointerId;
        return (Dn.set(u, Cn(Dn.get(u) || null, t, e, l, a, n)), !0);
      case 'gotpointercapture':
        return (
          (u = n.pointerId),
          xn.set(u, Cn(xn.get(u) || null, t, e, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Wd(t) {
    var e = Il(t.target);
    if (e !== null) {
      var l = m(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = S(l)), e !== null)) {
            ((t.blockedOn = e),
              fs(t.priority, function () {
                Kd(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = x(l)), e !== null)) {
            ((t.blockedOn = e),
              fs(t.priority, function () {
                Kd(l);
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Iu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Af(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Ai = a), l.target.dispatchEvent(a), (Ai = null));
      } else return ((e = Pl(l)), e !== null && wd(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function kd(t, e, l) {
    Iu(t) && l.delete(e);
  }
  function cv() {
    ((Of = !1),
      Al !== null && Iu(Al) && (Al = null),
      Rl !== null && Iu(Rl) && (Rl = null),
      Ol !== null && Iu(Ol) && (Ol = null),
      Dn.forEach(kd),
      xn.forEach(kd));
  }
  function Pu(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Of ||
        ((Of = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, cv)));
  }
  var ti = null;
  function Fd(t) {
    ti !== t &&
      ((ti = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        ti === t && (ti = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != 'function') {
            if (Rf(a || l) === null) continue;
            break;
          }
          var u = Pl(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            _c(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function ja(t) {
    function e(h) {
      return Pu(h, t);
    }
    (Al !== null && Pu(Al, t),
      Rl !== null && Pu(Rl, t),
      Ol !== null && Pu(Ol, t),
      Dn.forEach(e),
      xn.forEach(e));
    for (var l = 0; l < Ml.length; l++) {
      var a = Ml[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ml.length && ((l = Ml[0]), l.blockedOn === null); )
      (Wd(l), l.blockedOn === null && Ml.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[It] || null;
        if (typeof u == 'function') i || Fd(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (i = u[It] || null))) s = i.formAction;
            else if (Rf(n) !== null) continue;
          } else s = i.action;
          (typeof s == 'function' ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            Fd(l));
        }
      }
  }
  function Id() {
    function t(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function e() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener('navigate', t),
        navigation.addEventListener('navigatesuccess', e),
        navigation.addEventListener('navigateerror', e),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener('navigate', t),
            navigation.removeEventListener('navigatesuccess', e),
            navigation.removeEventListener('navigateerror', e),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function Mf(t) {
    this._internalRoot = t;
  }
  ((ei.prototype.render = Mf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = me();
      Zd(l, a, t, e, null, null);
    }),
    (ei.prototype.unmount = Mf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Zd(t.current, 2, null, t, null, null), Hu(), (e[Fl] = null));
        }
      }));
  function ei(t) {
    this._internalRoot = t;
  }
  ei.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = cs();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ml.length && e !== 0 && e < Ml[l].priority; l++);
      (Ml.splice(l, 0, t), l === 0 && Wd(t));
    }
  };
  var Pd = r.version;
  if (Pd !== '19.2.4') throw Error(f(527, Pd, '19.2.4'));
  Y.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == 'function'
        ? Error(f(188))
        : ((t = Object.keys(t).join(',')), Error(f(268, t)));
    return (
      (t = v(e)),
      (t = t !== null ? M(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var fv = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: C,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!li.isDisabled && li.supportsFiber)
      try {
        ((Ya = li.inject(fv)), (ie = li));
      } catch {}
  }
  return (
    (Un.createRoot = function (t, e) {
      if (!d(t)) throw Error(f(299));
      var l = !1,
        a = '',
        n = uo,
        u = io,
        i = co;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = Xd(t, 1, !1, null, null, l, a, null, n, u, i, Id)),
        (t[Fl] = e.current),
        sf(t),
        new Mf(e)
      );
    }),
    (Un.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(f(299));
      var a = !1,
        n = '',
        u = uo,
        i = io,
        s = co,
        h = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (h = l.formState)),
        (e = Xd(t, 1, !0, e, l ?? null, a, n, h, u, i, s, Id)),
        (e.context = Qd(null)),
        (l = e.current),
        (a = me()),
        (a = gi(a)),
        (n = hl(a)),
        (n.callback = null),
        ml(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Xa(e, l),
        Be(e),
        (t[Fl] = e.current),
        sf(t),
        new ei(e)
      );
    }),
    (Un.version = '19.2.4'),
    Un
  );
}
var sh;
function Sv() {
  if (sh) return Cf.exports;
  sh = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return (c(), (Cf.exports = pv()), Cf.exports);
}
var bv = Sv();
var rh = 'popstate';
function oh(c) {
  return (
    typeof c == 'object' &&
    c != null &&
    'pathname' in c &&
    'search' in c &&
    'hash' in c &&
    'state' in c &&
    'key' in c
  );
}
function Ev(c = {}) {
  function r(f, d) {
    let m = d.state?.masked,
      { pathname: S, search: x, hash: b } = m || f.location;
    return Xf(
      '',
      { pathname: S, search: x, hash: b },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || 'default',
      m
        ? {
            pathname: f.location.pathname,
            search: f.location.search,
            hash: f.location.hash,
          }
        : void 0,
    );
  }
  function o(f, d) {
    return typeof d == 'string' ? d : Hn(d);
  }
  return zv(r, o, null, c);
}
function Rt(c, r) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(r);
}
function Le(c, r) {
  if (!c) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function Tv() {
  return Math.random().toString(36).substring(2, 10);
}
function dh(c, r) {
  return {
    usr: c.state,
    key: c.key,
    idx: r,
    masked: c.unstable_mask
      ? { pathname: c.pathname, search: c.search, hash: c.hash }
      : void 0,
  };
}
function Xf(c, r, o = null, f, d) {
  return {
    pathname: typeof c == 'string' ? c : c.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? Ba(r) : r),
    state: o,
    key: (r && r.key) || f || Tv(),
    unstable_mask: d,
  };
}
function Hn({ pathname: c = '/', search: r = '', hash: o = '' }) {
  return (
    r && r !== '?' && (c += r.charAt(0) === '?' ? r : '?' + r),
    o && o !== '#' && (c += o.charAt(0) === '#' ? o : '#' + o),
    c
  );
}
function Ba(c) {
  let r = {};
  if (c) {
    let o = c.indexOf('#');
    o >= 0 && ((r.hash = c.substring(o)), (c = c.substring(0, o)));
    let f = c.indexOf('?');
    (f >= 0 && ((r.search = c.substring(f)), (c = c.substring(0, f))),
      c && (r.pathname = c));
  }
  return r;
}
function zv(c, r, o, f = {}) {
  let { window: d = document.defaultView, v5Compat: m = !1 } = f,
    S = d.history,
    x = 'POP',
    b = null,
    v = M();
  v == null && ((v = 0), S.replaceState({ ...S.state, idx: v }, ''));
  function M() {
    return (S.state || { idx: null }).idx;
  }
  function T() {
    x = 'POP';
    let H = M(),
      V = H == null ? null : H - v;
    ((v = H), b && b({ action: x, location: B.location, delta: V }));
  }
  function q(H, V) {
    x = 'PUSH';
    let k = oh(H) ? H : Xf(B.location, H, V);
    v = M() + 1;
    let J = dh(k, v),
      dt = B.createHref(k.unstable_mask || k);
    try {
      S.pushState(J, '', dt);
    } catch (rt) {
      if (rt instanceof DOMException && rt.name === 'DataCloneError') throw rt;
      d.location.assign(dt);
    }
    m && b && b({ action: x, location: B.location, delta: 1 });
  }
  function K(H, V) {
    x = 'REPLACE';
    let k = oh(H) ? H : Xf(B.location, H, V);
    v = M();
    let J = dh(k, v),
      dt = B.createHref(k.unstable_mask || k);
    (S.replaceState(J, '', dt),
      m && b && b({ action: x, location: B.location, delta: 0 }));
  }
  function L(H) {
    return _v(H);
  }
  let B = {
    get action() {
      return x;
    },
    get location() {
      return c(d, S);
    },
    listen(H) {
      if (b) throw new Error('A history only accepts one active listener');
      return (
        d.addEventListener(rh, T),
        (b = H),
        () => {
          (d.removeEventListener(rh, T), (b = null));
        }
      );
    },
    createHref(H) {
      return r(d, H);
    },
    createURL: L,
    encodeLocation(H) {
      let V = L(H);
      return { pathname: V.pathname, search: V.search, hash: V.hash };
    },
    push: q,
    replace: K,
    go(H) {
      return S.go(H);
    },
  };
  return B;
}
function _v(c, r = !1) {
  let o = 'http://localhost';
  (typeof window < 'u' &&
    (o =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    Rt(o, 'No window.location.(origin|href) available to create URL'));
  let f = typeof c == 'string' ? c : Hn(c);
  return (
    (f = f.replace(/ $/, '%20')),
    !r && f.startsWith('//') && (f = o + f),
    new URL(f, o)
  );
}
function Th(c, r, o = '/') {
  return Av(c, r, o, !1);
}
function Av(c, r, o, f) {
  let d = typeof r == 'string' ? Ba(r) : r,
    m = nl(d.pathname || '/', o);
  if (m == null) return null;
  let S = zh(c);
  Rv(S);
  let x = null;
  for (let b = 0; x == null && b < S.length; ++b) {
    let v = qv(m);
    x = Hv(S[b], v, f);
  }
  return x;
}
function zh(c, r = [], o = [], f = '', d = !1) {
  let m = (S, x, b = d, v) => {
    let M = {
      relativePath: v === void 0 ? S.path || '' : v,
      caseSensitive: S.caseSensitive === !0,
      childrenIndex: x,
      route: S,
    };
    if (M.relativePath.startsWith('/')) {
      if (!M.relativePath.startsWith(f) && b) return;
      (Rt(
        M.relativePath.startsWith(f),
        `Absolute route path "${M.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (M.relativePath = M.relativePath.slice(f.length)));
    }
    let T = qe([f, M.relativePath]),
      q = o.concat(M);
    (S.children &&
      S.children.length > 0 &&
      (Rt(
        S.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${T}".`,
      ),
      zh(S.children, r, q, T, b)),
      !(S.path == null && !S.index) &&
        r.push({ path: T, score: Uv(T, S.index), routesMeta: q }));
  };
  return (
    c.forEach((S, x) => {
      if (S.path === '' || !S.path?.includes('?')) m(S, x);
      else for (let b of _h(S.path)) m(S, x, !0, b);
    }),
    r
  );
}
function _h(c) {
  let r = c.split('/');
  if (r.length === 0) return [];
  let [o, ...f] = r,
    d = o.endsWith('?'),
    m = o.replace(/\?$/, '');
  if (f.length === 0) return d ? [m, ''] : [m];
  let S = _h(f.join('/')),
    x = [];
  return (
    x.push(...S.map((b) => (b === '' ? m : [m, b].join('/')))),
    d && x.push(...S),
    x.map((b) => (c.startsWith('/') && b === '' ? '/' : b))
  );
}
function Rv(c) {
  c.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : jv(
          r.routesMeta.map((f) => f.childrenIndex),
          o.routesMeta.map((f) => f.childrenIndex),
        ),
  );
}
var Ov = /^:[\w-]+$/,
  Mv = 3,
  Dv = 2,
  xv = 1,
  Cv = 10,
  Nv = -2,
  hh = (c) => c === '*';
function Uv(c, r) {
  let o = c.split('/'),
    f = o.length;
  return (
    o.some(hh) && (f += Nv),
    r && (f += Dv),
    o
      .filter((d) => !hh(d))
      .reduce((d, m) => d + (Ov.test(m) ? Mv : m === '' ? xv : Cv), f)
  );
}
function jv(c, r) {
  return c.length === r.length && c.slice(0, -1).every((f, d) => f === r[d])
    ? c[c.length - 1] - r[r.length - 1]
    : 0;
}
function Hv(c, r, o = !1) {
  let { routesMeta: f } = c,
    d = {},
    m = '/',
    S = [];
  for (let x = 0; x < f.length; ++x) {
    let b = f[x],
      v = x === f.length - 1,
      M = m === '/' ? r : r.slice(m.length) || '/',
      T = ii(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: v },
        M,
      ),
      q = b.route;
    if (
      (!T &&
        v &&
        o &&
        !f[f.length - 1].route.index &&
        (T = ii(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          M,
        )),
      !T)
    )
      return null;
    (Object.assign(d, T.params),
      S.push({
        params: d,
        pathname: qe([m, T.pathname]),
        pathnameBase: Xv(qe([m, T.pathnameBase])),
        route: q,
      }),
      T.pathnameBase !== '/' && (m = qe([m, T.pathnameBase])));
  }
  return S;
}
function ii(c, r) {
  typeof c == 'string' && (c = { path: c, caseSensitive: !1, end: !0 });
  let [o, f] = Bv(c.path, c.caseSensitive, c.end),
    d = r.match(o);
  if (!d) return null;
  let m = d[0],
    S = m.replace(/(.)\/+$/, '$1'),
    x = d.slice(1);
  return {
    params: f.reduce((v, { paramName: M, isOptional: T }, q) => {
      if (M === '*') {
        let L = x[q] || '';
        S = m.slice(0, m.length - L.length).replace(/(.)\/+$/, '$1');
      }
      const K = x[q];
      return (
        T && !K ? (v[M] = void 0) : (v[M] = (K || '').replace(/%2F/g, '/')),
        v
      );
    }, {}),
    pathname: m,
    pathnameBase: S,
    pattern: c,
  };
}
function Bv(c, r = !1, o = !0) {
  Le(
    c === '*' || !c.endsWith('*') || c.endsWith('/*'),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, '/*')}".`,
  );
  let f = [],
    d =
      '^' +
      c
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (S, x, b, v, M) => {
          if ((f.push({ paramName: x, isOptional: b != null }), b)) {
            let T = M.charAt(v + S.length);
            return T && T !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?';
          }
          return '/([^\\/]+)';
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    c.endsWith('*')
      ? (f.push({ paramName: '*' }),
        (d += c === '*' || c === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : o
        ? (d += '\\/*$')
        : c !== '' && c !== '/' && (d += '(?:(?=\\/|$))'),
    [new RegExp(d, r ? void 0 : 'i'), f]
  );
}
function qv(c) {
  try {
    return c
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      Le(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      c
    );
  }
}
function nl(c, r) {
  if (r === '/') return c;
  if (!c.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith('/') ? r.length - 1 : r.length,
    f = c.charAt(o);
  return f && f !== '/' ? null : c.slice(o) || '/';
}
var Lv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Yv(c, r = '/') {
  let {
      pathname: o,
      search: f = '',
      hash: d = '',
    } = typeof c == 'string' ? Ba(c) : c,
    m;
  return (
    o
      ? ((o = o.replace(/\/\/+/g, '/')),
        o.startsWith('/') ? (m = mh(o.substring(1), '/')) : (m = mh(o, r)))
      : (m = r),
    { pathname: m, search: Qv(f), hash: Zv(d) }
  );
}
function mh(c, r) {
  let o = r.replace(/\/+$/, '').split('/');
  return (
    c.split('/').forEach((d) => {
      d === '..' ? o.length > 1 && o.pop() : d !== '.' && o.push(d);
    }),
    o.length > 1 ? o.join('/') : '/'
  );
}
function Hf(c, r, o, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Gv(c) {
  return c.filter(
    (r, o) => o === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function Ah(c) {
  let r = Gv(c);
  return r.map((o, f) => (f === r.length - 1 ? o.pathname : o.pathnameBase));
}
function Vf(c, r, o, f = !1) {
  let d;
  typeof c == 'string'
    ? (d = Ba(c))
    : ((d = { ...c }),
      Rt(
        !d.pathname || !d.pathname.includes('?'),
        Hf('?', 'pathname', 'search', d),
      ),
      Rt(
        !d.pathname || !d.pathname.includes('#'),
        Hf('#', 'pathname', 'hash', d),
      ),
      Rt(!d.search || !d.search.includes('#'), Hf('#', 'search', 'hash', d)));
  let m = c === '' || d.pathname === '',
    S = m ? '/' : d.pathname,
    x;
  if (S == null) x = o;
  else {
    let T = r.length - 1;
    if (!f && S.startsWith('..')) {
      let q = S.split('/');
      for (; q[0] === '..'; ) (q.shift(), (T -= 1));
      d.pathname = q.join('/');
    }
    x = T >= 0 ? r[T] : '/';
  }
  let b = Yv(d, x),
    v = S && S !== '/' && S.endsWith('/'),
    M = (m || S === '.') && o.endsWith('/');
  return (!b.pathname.endsWith('/') && (v || M) && (b.pathname += '/'), b);
}
var qe = (c) => c.join('/').replace(/\/\/+/g, '/'),
  Xv = (c) => c.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Qv = (c) => (!c || c === '?' ? '' : c.startsWith('?') ? c : '?' + c),
  Zv = (c) => (!c || c === '#' ? '' : c.startsWith('#') ? c : '#' + c),
  Vv = class {
    constructor(c, r, o, f = !1) {
      ((this.status = c),
        (this.statusText = r || ''),
        (this.internal = f),
        o instanceof Error
          ? ((this.data = o.toString()), (this.error = o))
          : (this.data = o));
    }
  };
function wv(c) {
  return (
    c != null &&
    typeof c.status == 'number' &&
    typeof c.statusText == 'string' &&
    typeof c.internal == 'boolean' &&
    'data' in c
  );
}
function Kv(c) {
  return (
    c
      .map((r) => r.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Rh =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function Oh(c, r) {
  let o = c;
  if (typeof o != 'string' || !Lv.test(o))
    return { absoluteURL: void 0, isExternal: !1, to: o };
  let f = o,
    d = !1;
  if (Rh)
    try {
      let m = new URL(window.location.href),
        S = o.startsWith('//') ? new URL(m.protocol + o) : new URL(o),
        x = nl(S.pathname, r);
      S.origin === m.origin && x != null
        ? (o = x + S.search + S.hash)
        : (d = !0);
    } catch {
      Le(
        !1,
        `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: f, isExternal: d, to: o };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var Mh = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Mh);
var Jv = ['GET', ...Mh];
new Set(Jv);
var qa = R.createContext(null);
qa.displayName = 'DataRouter';
var ci = R.createContext(null);
ci.displayName = 'DataRouterState';
var $v = R.createContext(!1),
  Dh = R.createContext({ isTransitioning: !1 });
Dh.displayName = 'ViewTransition';
var Wv = R.createContext(new Map());
Wv.displayName = 'Fetchers';
var kv = R.createContext(null);
kv.displayName = 'Await';
var Oe = R.createContext(null);
Oe.displayName = 'Navigation';
var Bn = R.createContext(null);
Bn.displayName = 'Location';
var Ye = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ye.displayName = 'Route';
var wf = R.createContext(null);
wf.displayName = 'RouteError';
var xh = 'REACT_ROUTER_ERROR',
  Fv = 'REDIRECT',
  Iv = 'ROUTE_ERROR_RESPONSE';
function Pv(c) {
  if (c.startsWith(`${xh}:${Fv}:{`))
    try {
      let r = JSON.parse(c.slice(28));
      if (
        typeof r == 'object' &&
        r &&
        typeof r.status == 'number' &&
        typeof r.statusText == 'string' &&
        typeof r.location == 'string' &&
        typeof r.reloadDocument == 'boolean' &&
        typeof r.replace == 'boolean'
      )
        return r;
    } catch {}
}
function t0(c) {
  if (c.startsWith(`${xh}:${Iv}:{`))
    try {
      let r = JSON.parse(c.slice(40));
      if (
        typeof r == 'object' &&
        r &&
        typeof r.status == 'number' &&
        typeof r.statusText == 'string'
      )
        return new Vv(r.status, r.statusText, r.data);
    } catch {}
}
function e0(c, { relative: r } = {}) {
  Rt(
    qn(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: o, navigator: f } = R.useContext(Oe),
    { hash: d, pathname: m, search: S } = Ln(c, { relative: r }),
    x = m;
  return (
    o !== '/' && (x = m === '/' ? o : qe([o, m])),
    f.createHref({ pathname: x, search: S, hash: d })
  );
}
function qn() {
  return R.useContext(Bn) != null;
}
function xl() {
  return (
    Rt(
      qn(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    R.useContext(Bn).location
  );
}
var Ch =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Nh(c) {
  R.useContext(Oe).static || R.useLayoutEffect(c);
}
function Kf() {
  let { isDataRoute: c } = R.useContext(Ye);
  return c ? m0() : l0();
}
function l0() {
  Rt(
    qn(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let c = R.useContext(qa),
    { basename: r, navigator: o } = R.useContext(Oe),
    { matches: f } = R.useContext(Ye),
    { pathname: d } = xl(),
    m = JSON.stringify(Ah(f)),
    S = R.useRef(!1);
  return (
    Nh(() => {
      S.current = !0;
    }),
    R.useCallback(
      (b, v = {}) => {
        if ((Le(S.current, Ch), !S.current)) return;
        if (typeof b == 'number') {
          o.go(b);
          return;
        }
        let M = Vf(b, JSON.parse(m), d, v.relative === 'path');
        (c == null &&
          r !== '/' &&
          (M.pathname = M.pathname === '/' ? r : qe([r, M.pathname])),
          (v.replace ? o.replace : o.push)(M, v.state, v));
      },
      [r, o, m, d, c],
    )
  );
}
R.createContext(null);
function Uh() {
  let { matches: c } = R.useContext(Ye),
    r = c[c.length - 1];
  return r ? r.params : {};
}
function Ln(c, { relative: r } = {}) {
  let { matches: o } = R.useContext(Ye),
    { pathname: f } = xl(),
    d = JSON.stringify(Ah(o));
  return R.useMemo(() => Vf(c, JSON.parse(d), f, r === 'path'), [c, d, f, r]);
}
function a0(c, r) {
  return jh(c, r);
}
function jh(c, r, o) {
  Rt(
    qn(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: f } = R.useContext(Oe),
    { matches: d } = R.useContext(Ye),
    m = d[d.length - 1],
    S = m ? m.params : {},
    x = m ? m.pathname : '/',
    b = m ? m.pathnameBase : '/',
    v = m && m.route;
  {
    let H = (v && v.path) || '';
    Bh(
      x,
      !v || H.endsWith('*') || H.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H === '/' ? '*' : `${H}/*`}">.`,
    );
  }
  let M = xl(),
    T;
  if (r) {
    let H = typeof r == 'string' ? Ba(r) : r;
    (Rt(
      b === '/' || H.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`,
    ),
      (T = H));
  } else T = M;
  let q = T.pathname || '/',
    K = q;
  if (b !== '/') {
    let H = b.replace(/^\//, '').split('/');
    K = '/' + q.replace(/^\//, '').split('/').slice(H.length).join('/');
  }
  let L = Th(c, { pathname: K });
  (Le(
    v || L != null,
    `No routes matched location "${T.pathname}${T.search}${T.hash}" `,
  ),
    Le(
      L == null ||
        L[L.length - 1].route.element !== void 0 ||
        L[L.length - 1].route.Component !== void 0 ||
        L[L.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let B = f0(
    L &&
      L.map((H) =>
        Object.assign({}, H, {
          params: Object.assign({}, S, H.params),
          pathname: qe([
            b,
            f.encodeLocation
              ? f.encodeLocation(
                  H.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23'),
                ).pathname
              : H.pathname,
          ]),
          pathnameBase:
            H.pathnameBase === '/'
              ? b
              : qe([
                  b,
                  f.encodeLocation
                    ? f.encodeLocation(
                        H.pathnameBase
                          .replace(/\?/g, '%3F')
                          .replace(/#/g, '%23'),
                      ).pathname
                    : H.pathnameBase,
                ]),
        }),
      ),
    d,
    o,
  );
  return r && B
    ? R.createElement(
        Bn.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              unstable_mask: void 0,
              ...T,
            },
            navigationType: 'POP',
          },
        },
        B,
      )
    : B;
}
function n0() {
  let c = h0(),
    r = wv(c)
      ? `${c.status} ${c.statusText}`
      : c instanceof Error
        ? c.message
        : JSON.stringify(c),
    o = c instanceof Error ? c.stack : null,
    f = 'rgba(200,200,200, 0.5)',
    d = { padding: '0.5rem', backgroundColor: f },
    m = { padding: '2px 4px', backgroundColor: f },
    S = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', c),
    (S = R.createElement(
      R.Fragment,
      null,
      R.createElement('p', null, '💿 Hey developer 👋'),
      R.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        R.createElement('code', { style: m }, 'ErrorBoundary'),
        ' or',
        ' ',
        R.createElement('code', { style: m }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement('h2', null, 'Unexpected Application Error!'),
      R.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      o ? R.createElement('pre', { style: d }, o) : null,
      S,
    )
  );
}
var u0 = R.createElement(n0, null),
  Hh = class extends R.Component {
    constructor(c) {
      (super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        }));
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, r) {
      return r.location !== c.location ||
        (r.revalidation !== 'idle' && c.revalidation === 'idle')
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : r.error,
            location: r.location,
            revalidation: c.revalidation || r.revalidation,
          };
    }
    componentDidCatch(c, r) {
      this.props.onError
        ? this.props.onError(c, r)
        : console.error(
            'React Router caught the following error during render',
            c,
          );
    }
    render() {
      let c = this.state.error;
      if (
        this.context &&
        typeof c == 'object' &&
        c &&
        'digest' in c &&
        typeof c.digest == 'string'
      ) {
        const o = t0(c.digest);
        o && (c = o);
      }
      let r =
        c !== void 0
          ? R.createElement(
              Ye.Provider,
              { value: this.props.routeContext },
              R.createElement(wf.Provider, {
                value: c,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? R.createElement(i0, { error: c }, r) : r;
    }
  };
Hh.contextType = $v;
var Bf = new WeakMap();
function i0({ children: c, error: r }) {
  let { basename: o } = R.useContext(Oe);
  if (
    typeof r == 'object' &&
    r &&
    'digest' in r &&
    typeof r.digest == 'string'
  ) {
    let f = Pv(r.digest);
    if (f) {
      let d = Bf.get(r);
      if (d) throw d;
      let m = Oh(f.location, o);
      if (Rh && !Bf.get(r))
        if (m.isExternal || f.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const S = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(m.to, {
              replace: f.replace,
            }),
          );
          throw (Bf.set(r, S), S);
        }
      return R.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${m.absoluteURL || m.to}`,
      });
    }
  }
  return c;
}
function c0({ routeContext: c, match: r, children: o }) {
  let f = R.useContext(qa);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = r.route.id),
    R.createElement(Ye.Provider, { value: c }, o)
  );
}
function f0(c, r = [], o) {
  let f = o?.state;
  if (c == null) {
    if (!f) return null;
    if (f.errors) c = f.matches;
    else if (r.length === 0 && !f.initialized && f.matches.length > 0)
      c = f.matches;
    else return null;
  }
  let d = c,
    m = f?.errors;
  if (m != null) {
    let M = d.findIndex((T) => T.route.id && m?.[T.route.id] !== void 0);
    (Rt(
      M >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(m).join(',')}`,
    ),
      (d = d.slice(0, Math.min(d.length, M + 1))));
  }
  let S = !1,
    x = -1;
  if (o && f) {
    S = f.renderFallback;
    for (let M = 0; M < d.length; M++) {
      let T = d[M];
      if (
        ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (x = M),
        T.route.id)
      ) {
        let { loaderData: q, errors: K } = f,
          L =
            T.route.loader &&
            !q.hasOwnProperty(T.route.id) &&
            (!K || K[T.route.id] === void 0);
        if (T.route.lazy || L) {
          (o.isStatic && (S = !0),
            x >= 0 ? (d = d.slice(0, x + 1)) : (d = [d[0]]));
          break;
        }
      }
    }
  }
  let b = o?.onError,
    v =
      f && b
        ? (M, T) => {
            b(M, {
              location: f.location,
              params: f.matches?.[0]?.params ?? {},
              unstable_pattern: Kv(f.matches),
              errorInfo: T,
            });
          }
        : void 0;
  return d.reduceRight((M, T, q) => {
    let K,
      L = !1,
      B = null,
      H = null;
    f &&
      ((K = m && T.route.id ? m[T.route.id] : void 0),
      (B = T.route.errorElement || u0),
      S &&
        (x < 0 && q === 0
          ? (Bh(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration',
            ),
            (L = !0),
            (H = null))
          : x === q &&
            ((L = !0), (H = T.route.hydrateFallbackElement || null))));
    let V = r.concat(d.slice(0, q + 1)),
      k = () => {
        let J;
        return (
          K
            ? (J = B)
            : L
              ? (J = H)
              : T.route.Component
                ? (J = R.createElement(T.route.Component, null))
                : T.route.element
                  ? (J = T.route.element)
                  : (J = M),
          R.createElement(c0, {
            match: T,
            routeContext: { outlet: M, matches: V, isDataRoute: f != null },
            children: J,
          })
        );
      };
    return f && (T.route.ErrorBoundary || T.route.errorElement || q === 0)
      ? R.createElement(Hh, {
          location: f.location,
          revalidation: f.revalidation,
          component: B,
          error: K,
          children: k(),
          routeContext: { outlet: null, matches: V, isDataRoute: !0 },
          onError: v,
        })
      : k();
  }, null);
}
function Jf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function s0(c) {
  let r = R.useContext(qa);
  return (Rt(r, Jf(c)), r);
}
function r0(c) {
  let r = R.useContext(ci);
  return (Rt(r, Jf(c)), r);
}
function o0(c) {
  let r = R.useContext(Ye);
  return (Rt(r, Jf(c)), r);
}
function $f(c) {
  let r = o0(c),
    o = r.matches[r.matches.length - 1];
  return (
    Rt(
      o.route.id,
      `${c} can only be used on routes that contain a unique "id"`,
    ),
    o.route.id
  );
}
function d0() {
  return $f('useRouteId');
}
function h0() {
  let c = R.useContext(wf),
    r = r0('useRouteError'),
    o = $f('useRouteError');
  return c !== void 0 ? c : r.errors?.[o];
}
function m0() {
  let { router: c } = s0('useNavigate'),
    r = $f('useNavigate'),
    o = R.useRef(!1);
  return (
    Nh(() => {
      o.current = !0;
    }),
    R.useCallback(
      async (d, m = {}) => {
        (Le(o.current, Ch),
          o.current &&
            (typeof d == 'number'
              ? await c.navigate(d)
              : await c.navigate(d, { fromRouteId: r, ...m })));
      },
      [c, r],
    )
  );
}
var yh = {};
function Bh(c, r, o) {
  !r && !yh[c] && ((yh[c] = !0), Le(!1, o));
}
R.memo(y0);
function y0({ routes: c, future: r, state: o, isStatic: f, onError: d }) {
  return jh(c, void 0, { state: o, isStatic: f, onError: d });
}
function Ha(c) {
  Rt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function v0({
  basename: c = '/',
  children: r = null,
  location: o,
  navigationType: f = 'POP',
  navigator: d,
  static: m = !1,
  unstable_useTransitions: S,
}) {
  Rt(
    !qn(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let x = c.replace(/^\/*/, '/'),
    b = R.useMemo(
      () => ({
        basename: x,
        navigator: d,
        static: m,
        unstable_useTransitions: S,
        future: {},
      }),
      [x, d, m, S],
    );
  typeof o == 'string' && (o = Ba(o));
  let {
      pathname: v = '/',
      search: M = '',
      hash: T = '',
      state: q = null,
      key: K = 'default',
      unstable_mask: L,
    } = o,
    B = R.useMemo(() => {
      let H = nl(v, x);
      return H == null
        ? null
        : {
            location: {
              pathname: H,
              search: M,
              hash: T,
              state: q,
              key: K,
              unstable_mask: L,
            },
            navigationType: f,
          };
    }, [x, v, M, T, q, K, f, L]);
  return (
    Le(
      B != null,
      `<Router basename="${x}"> is not able to match the URL "${v}${M}${T}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    B == null
      ? null
      : R.createElement(
          Oe.Provider,
          { value: b },
          R.createElement(Bn.Provider, { children: r, value: B }),
        )
  );
}
function g0({ children: c, location: r }) {
  return a0(Qf(c), r);
}
function Qf(c, r = []) {
  let o = [];
  return (
    R.Children.forEach(c, (f, d) => {
      if (!R.isValidElement(f)) return;
      let m = [...r, d];
      if (f.type === R.Fragment) {
        o.push.apply(o, Qf(f.props.children, m));
        return;
      }
      (Rt(
        f.type === Ha,
        `[${typeof f.type == 'string' ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Rt(
          !f.props.index || !f.props.children,
          'An index route cannot have child routes.',
        ));
      let S = {
        id: f.props.id || m.join('-'),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        middleware: f.props.middleware,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      (f.props.children && (S.children = Qf(f.props.children, m)), o.push(S));
    }),
    o
  );
}
var ni = 'get',
  ui = 'application/x-www-form-urlencoded';
function fi(c) {
  return typeof HTMLElement < 'u' && c instanceof HTMLElement;
}
function p0(c) {
  return fi(c) && c.tagName.toLowerCase() === 'button';
}
function S0(c) {
  return fi(c) && c.tagName.toLowerCase() === 'form';
}
function b0(c) {
  return fi(c) && c.tagName.toLowerCase() === 'input';
}
function E0(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function T0(c, r) {
  return c.button === 0 && (!r || r === '_self') && !E0(c);
}
var ai = null;
function z0() {
  if (ai === null)
    try {
      (new FormData(document.createElement('form'), 0), (ai = !1));
    } catch {
      ai = !0;
    }
  return ai;
}
var _0 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function qf(c) {
  return c != null && !_0.has(c)
    ? (Le(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ui}"`,
      ),
      null)
    : c;
}
function A0(c, r) {
  let o, f, d, m, S;
  if (S0(c)) {
    let x = c.getAttribute('action');
    ((f = x ? nl(x, r) : null),
      (o = c.getAttribute('method') || ni),
      (d = qf(c.getAttribute('enctype')) || ui),
      (m = new FormData(c)));
  } else if (p0(c) || (b0(c) && (c.type === 'submit' || c.type === 'image'))) {
    let x = c.form;
    if (x == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let b = c.getAttribute('formaction') || x.getAttribute('action');
    if (
      ((f = b ? nl(b, r) : null),
      (o = c.getAttribute('formmethod') || x.getAttribute('method') || ni),
      (d =
        qf(c.getAttribute('formenctype')) ||
        qf(x.getAttribute('enctype')) ||
        ui),
      (m = new FormData(x, c)),
      !z0())
    ) {
      let { name: v, type: M, value: T } = c;
      if (M === 'image') {
        let q = v ? `${v}.` : '';
        (m.append(`${q}x`, '0'), m.append(`${q}y`, '0'));
      } else v && m.append(v, T);
    }
  } else {
    if (fi(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((o = ni), (f = null), (d = ui), (S = c));
  }
  return (
    m && d === 'text/plain' && ((S = m), (m = void 0)),
    { action: f, method: o.toLowerCase(), encType: d, formData: m, body: S }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Wf(c, r) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(r);
}
function R0(c, r, o, f) {
  let d =
    typeof c == 'string'
      ? new URL(
          c,
          typeof window > 'u'
            ? 'server://singlefetch/'
            : window.location.origin,
        )
      : c;
  return (
    o
      ? d.pathname.endsWith('/')
        ? (d.pathname = `${d.pathname}_.${f}`)
        : (d.pathname = `${d.pathname}.${f}`)
      : d.pathname === '/'
        ? (d.pathname = `_root.${f}`)
        : r && nl(d.pathname, r) === '/'
          ? (d.pathname = `${r.replace(/\/$/, '')}/_root.${f}`)
          : (d.pathname = `${d.pathname.replace(/\/$/, '')}.${f}`),
    d
  );
}
async function O0(c, r) {
  if (c.id in r) return r[c.id];
  try {
    let o = await import(c.module);
    return ((r[c.id] = o), o);
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`,
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function M0(c) {
  return c == null
    ? !1
    : c.href == null
      ? c.rel === 'preload' &&
        typeof c.imageSrcSet == 'string' &&
        typeof c.imageSizes == 'string'
      : typeof c.rel == 'string' && typeof c.href == 'string';
}
async function D0(c, r, o) {
  let f = await Promise.all(
    c.map(async (d) => {
      let m = r.routes[d.route.id];
      if (m) {
        let S = await O0(m, o);
        return S.links ? S.links() : [];
      }
      return [];
    }),
  );
  return U0(
    f
      .flat(1)
      .filter(M0)
      .filter((d) => d.rel === 'stylesheet' || d.rel === 'preload')
      .map((d) =>
        d.rel === 'stylesheet'
          ? { ...d, rel: 'prefetch', as: 'style' }
          : { ...d, rel: 'prefetch' },
      ),
  );
}
function vh(c, r, o, f, d, m) {
  let S = (b, v) => (o[v] ? b.route.id !== o[v].route.id : !0),
    x = (b, v) =>
      o[v].pathname !== b.pathname ||
      (o[v].route.path?.endsWith('*') && o[v].params['*'] !== b.params['*']);
  return m === 'assets'
    ? r.filter((b, v) => S(b, v) || x(b, v))
    : m === 'data'
      ? r.filter((b, v) => {
          let M = f.routes[b.route.id];
          if (!M || !M.hasLoader) return !1;
          if (S(b, v) || x(b, v)) return !0;
          if (b.route.shouldRevalidate) {
            let T = b.route.shouldRevalidate({
              currentUrl: new URL(
                d.pathname + d.search + d.hash,
                window.origin,
              ),
              currentParams: o[0]?.params || {},
              nextUrl: new URL(c, window.origin),
              nextParams: b.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof T == 'boolean') return T;
          }
          return !0;
        })
      : [];
}
function x0(c, r, { includeHydrateFallback: o } = {}) {
  return C0(
    c
      .map((f) => {
        let d = r.routes[f.route.id];
        if (!d) return [];
        let m = [d.module];
        return (
          d.clientActionModule && (m = m.concat(d.clientActionModule)),
          d.clientLoaderModule && (m = m.concat(d.clientLoaderModule)),
          o &&
            d.hydrateFallbackModule &&
            (m = m.concat(d.hydrateFallbackModule)),
          d.imports && (m = m.concat(d.imports)),
          m
        );
      })
      .flat(1),
  );
}
function C0(c) {
  return [...new Set(c)];
}
function N0(c) {
  let r = {},
    o = Object.keys(c).sort();
  for (let f of o) r[f] = c[f];
  return r;
}
function U0(c, r) {
  let o = new Set();
  return (
    new Set(r),
    c.reduce((f, d) => {
      let m = JSON.stringify(N0(d));
      return (o.has(m) || (o.add(m), f.push({ key: m, link: d })), f);
    }, [])
  );
}
function qh() {
  let c = R.useContext(qa);
  return (
    Wf(
      c,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    c
  );
}
function j0() {
  let c = R.useContext(ci);
  return (
    Wf(
      c,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    c
  );
}
var kf = R.createContext(void 0);
kf.displayName = 'FrameworkContext';
function Lh() {
  let c = R.useContext(kf);
  return (
    Wf(c, 'You must render this element inside a <HydratedRouter> element'),
    c
  );
}
function H0(c, r) {
  let o = R.useContext(kf),
    [f, d] = R.useState(!1),
    [m, S] = R.useState(!1),
    {
      onFocus: x,
      onBlur: b,
      onMouseEnter: v,
      onMouseLeave: M,
      onTouchStart: T,
    } = r,
    q = R.useRef(null);
  (R.useEffect(() => {
    if ((c === 'render' && S(!0), c === 'viewport')) {
      let B = (V) => {
          V.forEach((k) => {
            S(k.isIntersecting);
          });
        },
        H = new IntersectionObserver(B, { threshold: 0.5 });
      return (
        q.current && H.observe(q.current),
        () => {
          H.disconnect();
        }
      );
    }
  }, [c]),
    R.useEffect(() => {
      if (f) {
        let B = setTimeout(() => {
          S(!0);
        }, 100);
        return () => {
          clearTimeout(B);
        };
      }
    }, [f]));
  let K = () => {
      d(!0);
    },
    L = () => {
      (d(!1), S(!1));
    };
  return o
    ? c !== 'intent'
      ? [m, q, {}]
      : [
          m,
          q,
          {
            onFocus: jn(x, K),
            onBlur: jn(b, L),
            onMouseEnter: jn(v, K),
            onMouseLeave: jn(M, L),
            onTouchStart: jn(T, K),
          },
        ]
    : [!1, q, {}];
}
function jn(c, r) {
  return (o) => {
    (c && c(o), o.defaultPrevented || r(o));
  };
}
function B0({ page: c, ...r }) {
  let { router: o } = qh(),
    f = R.useMemo(() => Th(o.routes, c, o.basename), [o.routes, c, o.basename]);
  return f ? R.createElement(L0, { page: c, matches: f, ...r }) : null;
}
function q0(c) {
  let { manifest: r, routeModules: o } = Lh(),
    [f, d] = R.useState([]);
  return (
    R.useEffect(() => {
      let m = !1;
      return (
        D0(c, r, o).then((S) => {
          m || d(S);
        }),
        () => {
          m = !0;
        }
      );
    }, [c, r, o]),
    f
  );
}
function L0({ page: c, matches: r, ...o }) {
  let f = xl(),
    { future: d, manifest: m, routeModules: S } = Lh(),
    { basename: x } = qh(),
    { loaderData: b, matches: v } = j0(),
    M = R.useMemo(() => vh(c, r, v, m, f, 'data'), [c, r, v, m, f]),
    T = R.useMemo(() => vh(c, r, v, m, f, 'assets'), [c, r, v, m, f]),
    q = R.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let B = new Set(),
        H = !1;
      if (
        (r.forEach((k) => {
          let J = m.routes[k.route.id];
          !J ||
            !J.hasLoader ||
            ((!M.some((dt) => dt.route.id === k.route.id) &&
              k.route.id in b &&
              S[k.route.id]?.shouldRevalidate) ||
            J.hasClientLoader
              ? (H = !0)
              : B.add(k.route.id));
        }),
        B.size === 0)
      )
        return [];
      let V = R0(c, x, d.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        H &&
          B.size > 0 &&
          V.searchParams.set(
            '_routes',
            r
              .filter((k) => B.has(k.route.id))
              .map((k) => k.route.id)
              .join(','),
          ),
        [V.pathname + V.search]
      );
    }, [x, d.unstable_trailingSlashAwareDataRequests, b, f, m, M, r, c, S]),
    K = R.useMemo(() => x0(T, m), [T, m]),
    L = q0(T);
  return R.createElement(
    R.Fragment,
    null,
    q.map((B) =>
      R.createElement('link', {
        key: B,
        rel: 'prefetch',
        as: 'fetch',
        href: B,
        ...o,
      }),
    ),
    K.map((B) =>
      R.createElement('link', { key: B, rel: 'modulepreload', href: B, ...o }),
    ),
    L.map(({ key: B, link: H }) =>
      R.createElement('link', {
        key: B,
        nonce: o.nonce,
        ...H,
        crossOrigin: H.crossOrigin ?? o.crossOrigin,
      }),
    ),
  );
}
function Y0(...c) {
  return (r) => {
    c.forEach((o) => {
      typeof o == 'function' ? o(r) : o != null && (o.current = r);
    });
  };
}
var G0 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  G0 && (window.__reactRouterVersion = '7.13.1');
} catch {}
function X0({
  basename: c,
  children: r,
  unstable_useTransitions: o,
  window: f,
}) {
  let d = R.useRef();
  d.current == null && (d.current = Ev({ window: f, v5Compat: !0 }));
  let m = d.current,
    [S, x] = R.useState({ action: m.action, location: m.location }),
    b = R.useCallback(
      (v) => {
        o === !1 ? x(v) : R.startTransition(() => x(v));
      },
      [o],
    );
  return (
    R.useLayoutEffect(() => m.listen(b), [m, b]),
    R.createElement(v0, {
      basename: c,
      children: r,
      location: S.location,
      navigationType: S.action,
      navigator: m,
      unstable_useTransitions: o,
    })
  );
}
var Yh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  kl = R.forwardRef(function (
    {
      onClick: r,
      discover: o = 'render',
      prefetch: f = 'none',
      relative: d,
      reloadDocument: m,
      replace: S,
      unstable_mask: x,
      state: b,
      target: v,
      to: M,
      preventScrollReset: T,
      viewTransition: q,
      unstable_defaultShouldRevalidate: K,
      ...L
    },
    B,
  ) {
    let {
        basename: H,
        navigator: V,
        unstable_useTransitions: k,
      } = R.useContext(Oe),
      J = typeof M == 'string' && Yh.test(M),
      dt = Oh(M, H);
    M = dt.to;
    let rt = e0(M, { relative: d }),
      bt = xl(),
      F = null;
    if (x) {
      let Ut = Vf(
        x,
        [],
        bt.unstable_mask ? bt.unstable_mask.pathname : '/',
        !0,
      );
      (H !== '/' &&
        (Ut.pathname = Ut.pathname === '/' ? H : qe([H, Ut.pathname])),
        (F = V.createHref(Ut)));
    }
    let [Dt, Kt, Ce] = H0(f, L),
      ye = w0(M, {
        replace: S,
        unstable_mask: x,
        state: b,
        target: v,
        preventScrollReset: T,
        relative: d,
        viewTransition: q,
        unstable_defaultShouldRevalidate: K,
        unstable_useTransitions: k,
      });
    function Jt(Ut) {
      (r && r(Ut), Ut.defaultPrevented || ye(Ut));
    }
    let Ne = !(dt.isExternal || m),
      ve = R.createElement('a', {
        ...L,
        ...Ce,
        href: (Ne ? F : void 0) || dt.absoluteURL || rt,
        onClick: Ne ? Jt : r,
        ref: Y0(B, Kt),
        target: v,
        'data-discover': !J && o === 'render' ? 'true' : void 0,
      });
    return Dt && !J
      ? R.createElement(R.Fragment, null, ve, R.createElement(B0, { page: rt }))
      : ve;
  });
kl.displayName = 'Link';
var Q0 = R.forwardRef(function (
  {
    'aria-current': r = 'page',
    caseSensitive: o = !1,
    className: f = '',
    end: d = !1,
    style: m,
    to: S,
    viewTransition: x,
    children: b,
    ...v
  },
  M,
) {
  let T = Ln(S, { relative: v.relative }),
    q = xl(),
    K = R.useContext(ci),
    { navigator: L, basename: B } = R.useContext(Oe),
    H = K != null && k0(T) && x === !0,
    V = L.encodeLocation ? L.encodeLocation(T).pathname : T.pathname,
    k = q.pathname,
    J =
      K && K.navigation && K.navigation.location
        ? K.navigation.location.pathname
        : null;
  (o ||
    ((k = k.toLowerCase()),
    (J = J ? J.toLowerCase() : null),
    (V = V.toLowerCase())),
    J && B && (J = nl(J, B) || J));
  const dt = V !== '/' && V.endsWith('/') ? V.length - 1 : V.length;
  let rt = k === V || (!d && k.startsWith(V) && k.charAt(dt) === '/'),
    bt =
      J != null &&
      (J === V || (!d && J.startsWith(V) && J.charAt(V.length) === '/')),
    F = { isActive: rt, isPending: bt, isTransitioning: H },
    Dt = rt ? r : void 0,
    Kt;
  typeof f == 'function'
    ? (Kt = f(F))
    : (Kt = [
        f,
        rt ? 'active' : null,
        bt ? 'pending' : null,
        H ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let Ce = typeof m == 'function' ? m(F) : m;
  return R.createElement(
    kl,
    {
      ...v,
      'aria-current': Dt,
      className: Kt,
      ref: M,
      style: Ce,
      to: S,
      viewTransition: x,
    },
    typeof b == 'function' ? b(F) : b,
  );
});
Q0.displayName = 'NavLink';
var Z0 = R.forwardRef(
  (
    {
      discover: c = 'render',
      fetcherKey: r,
      navigate: o,
      reloadDocument: f,
      replace: d,
      state: m,
      method: S = ni,
      action: x,
      onSubmit: b,
      relative: v,
      preventScrollReset: M,
      viewTransition: T,
      unstable_defaultShouldRevalidate: q,
      ...K
    },
    L,
  ) => {
    let { unstable_useTransitions: B } = R.useContext(Oe),
      H = $0(),
      V = W0(x, { relative: v }),
      k = S.toLowerCase() === 'get' ? 'get' : 'post',
      J = typeof x == 'string' && Yh.test(x),
      dt = (rt) => {
        if ((b && b(rt), rt.defaultPrevented)) return;
        rt.preventDefault();
        let bt = rt.nativeEvent.submitter,
          F = bt?.getAttribute('formmethod') || S,
          Dt = () =>
            H(bt || rt.currentTarget, {
              fetcherKey: r,
              method: F,
              navigate: o,
              replace: d,
              state: m,
              relative: v,
              preventScrollReset: M,
              viewTransition: T,
              unstable_defaultShouldRevalidate: q,
            });
        B && o !== !1 ? R.startTransition(() => Dt()) : Dt();
      };
    return R.createElement('form', {
      ref: L,
      method: k,
      action: V,
      onSubmit: f ? b : dt,
      ...K,
      'data-discover': !J && c === 'render' ? 'true' : void 0,
    });
  },
);
Z0.displayName = 'Form';
function V0(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gh(c) {
  let r = R.useContext(qa);
  return (Rt(r, V0(c)), r);
}
function w0(
  c,
  {
    target: r,
    replace: o,
    unstable_mask: f,
    state: d,
    preventScrollReset: m,
    relative: S,
    viewTransition: x,
    unstable_defaultShouldRevalidate: b,
    unstable_useTransitions: v,
  } = {},
) {
  let M = Kf(),
    T = xl(),
    q = Ln(c, { relative: S });
  return R.useCallback(
    (K) => {
      if (T0(K, r)) {
        K.preventDefault();
        let L = o !== void 0 ? o : Hn(T) === Hn(q),
          B = () =>
            M(c, {
              replace: L,
              unstable_mask: f,
              state: d,
              preventScrollReset: m,
              relative: S,
              viewTransition: x,
              unstable_defaultShouldRevalidate: b,
            });
        v ? R.startTransition(() => B()) : B();
      }
    },
    [T, M, q, o, f, d, r, c, m, S, x, b, v],
  );
}
var K0 = 0,
  J0 = () => `__${String(++K0)}__`;
function $0() {
  let { router: c } = Gh('useSubmit'),
    { basename: r } = R.useContext(Oe),
    o = d0(),
    f = c.fetch,
    d = c.navigate;
  return R.useCallback(
    async (m, S = {}) => {
      let { action: x, method: b, encType: v, formData: M, body: T } = A0(m, r);
      if (S.navigate === !1) {
        let q = S.fetcherKey || J0();
        await f(q, o, S.action || x, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: M,
          body: T,
          formMethod: S.method || b,
          formEncType: S.encType || v,
          flushSync: S.flushSync,
        });
      } else
        await d(S.action || x, {
          unstable_defaultShouldRevalidate: S.unstable_defaultShouldRevalidate,
          preventScrollReset: S.preventScrollReset,
          formData: M,
          body: T,
          formMethod: S.method || b,
          formEncType: S.encType || v,
          replace: S.replace,
          state: S.state,
          fromRouteId: o,
          flushSync: S.flushSync,
          viewTransition: S.viewTransition,
        });
    },
    [f, d, r, o],
  );
}
function W0(c, { relative: r } = {}) {
  let { basename: o } = R.useContext(Oe),
    f = R.useContext(Ye);
  Rt(f, 'useFormAction must be used inside a RouteContext');
  let [d] = f.matches.slice(-1),
    m = { ...Ln(c || '.', { relative: r }) },
    S = xl();
  if (c == null) {
    m.search = S.search;
    let x = new URLSearchParams(m.search),
      b = x.getAll('index');
    if (b.some((M) => M === '')) {
      (x.delete('index'),
        b.filter((T) => T).forEach((T) => x.append('index', T)));
      let M = x.toString();
      m.search = M ? `?${M}` : '';
    }
  }
  return (
    (!c || c === '.') &&
      d.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, '?index&') : '?index'),
    o !== '/' && (m.pathname = m.pathname === '/' ? o : qe([o, m.pathname])),
    Hn(m)
  );
}
function k0(c, { relative: r } = {}) {
  let o = R.useContext(Dh);
  Rt(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: f } = Gh('useViewTransitionState'),
    d = Ln(c, { relative: r });
  if (!o.isTransitioning) return !1;
  let m = nl(o.currentLocation.pathname, f) || o.currentLocation.pathname,
    S = nl(o.nextLocation.pathname, f) || o.nextLocation.pathname;
  return ii(d.pathname, S) != null || ii(d.pathname, m) != null;
}
function F0() {
  return O.jsx('header', {
    className: 'navbar',
    children: O.jsxs('nav', {
      className: 'navbar-inner',
      children: [
        O.jsx(kl, {
          to: '/',
          className: 'navbar-brand',
          children: '🔬 LabConnect',
        }),
        O.jsxs('ul', {
          className: 'navbar-links',
          children: [
            O.jsx('li', {
              children: O.jsx(kl, { to: '/labs', children: 'Browse Labs' }),
            }),
            O.jsx('li', {
              children: O.jsx(kl, { to: '/labs/new', children: 'Post a Lab' }),
            }),
          ],
        }),
      ],
    }),
  });
}
var Lf = { exports: {} },
  Yf,
  gh;
function I0() {
  if (gh) return Yf;
  gh = 1;
  var c = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return ((Yf = c), Yf);
}
var Gf, ph;
function P0() {
  if (ph) return Gf;
  ph = 1;
  var c = I0();
  function r() {}
  function o() {}
  return (
    (o.resetWarningCache = r),
    (Gf = function () {
      function f(S, x, b, v, M, T) {
        if (T !== c) {
          var q = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          );
          throw ((q.name = 'Invariant Violation'), q);
        }
      }
      f.isRequired = f;
      function d() {
        return f;
      }
      var m = {
        array: f,
        bigint: f,
        bool: f,
        func: f,
        number: f,
        object: f,
        string: f,
        symbol: f,
        any: f,
        arrayOf: d,
        element: f,
        elementType: f,
        instanceOf: d,
        node: f,
        objectOf: d,
        oneOf: d,
        oneOfType: d,
        shape: d,
        exact: d,
        checkPropTypes: o,
        resetWarningCache: r,
      };
      return ((m.PropTypes = m), m);
    }),
    Gf
  );
}
var Sh;
function tg() {
  return (Sh || ((Sh = 1), (Lf.exports = P0()())), Lf.exports);
}
var eg = tg();
const Wt = rv(eg);
function si({ userSkills: c, labSkills: r }) {
  if (!c || !r || r.length === 0) return null;
  const o = r.filter((m) => c.some((S) => S.toLowerCase() === m.toLowerCase())),
    f = Math.round((o.length / r.length) * 100);
  let d = 'match-low';
  return (
    f >= 70 ? (d = 'match-high') : f >= 40 && (d = 'match-medium'),
    O.jsxs('div', {
      className: `match-badge ${d}`,
      children: [
        O.jsxs('span', { className: 'match-percentage', children: [f, '%'] }),
        O.jsx('span', { className: 'match-label', children: 'match' }),
      ],
    })
  );
}
si.propTypes = {
  userSkills: Wt.arrayOf(Wt.string),
  labSkills: Wt.arrayOf(Wt.string),
};
si.defaultProps = { userSkills: [], labSkills: [] };
function Ff({ lab: c, userSkills: r }) {
  const o = {
    funded: 'Funded',
    unfunded: 'Unfunded',
    partially_funded: 'Partial',
  };
  return O.jsxs('div', {
    className: 'lab-card',
    children: [
      O.jsxs('div', {
        className: 'lab-card-header',
        children: [
          O.jsxs('div', {
            children: [
              O.jsx('h3', { className: 'lab-card-title', children: c.name }),
              O.jsx('p', {
                className: 'lab-card-professor',
                children: c.professor,
              }),
              O.jsx('span', {
                className: 'lab-card-department',
                children: c.department,
              }),
            ],
          }),
          O.jsx(si, { userSkills: r, labSkills: c.skills_needed }),
        ],
      }),
      O.jsx('p', {
        className: 'lab-card-description',
        children:
          c.description.length > 150
            ? c.description.substring(0, 150) + '...'
            : c.description,
      }),
      O.jsx('div', {
        className: 'lab-card-skills',
        children: c.skills_needed.map((f) =>
          O.jsx(
            'span',
            {
              className: `skill-tag ${r.some((d) => d.toLowerCase() === f.toLowerCase()) ? 'skill-match' : ''}`,
              children: f,
            },
            f,
          ),
        ),
      }),
      O.jsxs('div', {
        className: 'lab-card-footer',
        children: [
          O.jsxs('div', {
            className: 'lab-card-meta',
            children: [
              O.jsx('span', {
                className: `funding-badge funding-${c.funding_status}`,
                children: o[c.funding_status] || c.funding_status,
              }),
              O.jsxs('span', {
                className: 'openings-badge',
                children: [
                  c.openings,
                  ' ',
                  c.openings === 1 ? 'opening' : 'openings',
                ],
              }),
            ],
          }),
          O.jsx(kl, {
            to: `/labs/${c._id}`,
            className: 'btn btn-primary btn-sm',
            children: 'View Details',
          }),
        ],
      }),
    ],
  });
}
Ff.propTypes = {
  lab: Wt.shape({
    _id: Wt.string.isRequired,
    name: Wt.string.isRequired,
    professor: Wt.string.isRequired,
    department: Wt.string.isRequired,
    description: Wt.string.isRequired,
    skills_needed: Wt.arrayOf(Wt.string).isRequired,
    openings: Wt.number.isRequired,
    funding_status: Wt.string.isRequired,
  }).isRequired,
  userSkills: Wt.arrayOf(Wt.string),
};
Ff.defaultProps = { userSkills: [] };
function bh() {
  const [c, r] = R.useState([]),
    [o, f] = R.useState(!0),
    [d, m] = R.useState(''),
    [S, x] = R.useState(''),
    [b, v] = R.useState(''),
    [M, T] = R.useState([]);
  R.useEffect(() => {
    const L = localStorage.getItem('labconnect_skills');
    L && T(JSON.parse(L));
  }, []);
  const q = R.useCallback(async () => {
    f(!0);
    try {
      const L = new URLSearchParams();
      (d && L.append('search', d),
        S && L.append('department', S),
        b && L.append('funding', b));
      const H = await (await fetch(`/api/labs?${L.toString()}`)).json();
      (M.length > 0 &&
        H.sort((V, k) => {
          const J = V.skills_needed.filter((rt) =>
            M.some((bt) => bt.toLowerCase() === rt.toLowerCase()),
          ).length;
          return (
            k.skills_needed.filter((rt) =>
              M.some((bt) => bt.toLowerCase() === rt.toLowerCase()),
            ).length - J
          );
        }),
        r(H));
    } catch (L) {
      console.error('Failed to fetch labs:', L);
    } finally {
      f(!1);
    }
  }, [d, S, b, M]);
  R.useEffect(() => {
    q();
  }, [q]);
  const K = [
    'Computer Science',
    'Electrical Engineering',
    'Data Science',
    'Information Systems',
    'Biomedical Engineering',
    'Mechanical Engineering',
    'Computer Engineering',
    'Artificial Intelligence',
    'Cybersecurity',
    'Robotics',
    'Physics',
    'Mathematics',
  ];
  return O.jsxs('div', {
    className: 'lab-list-page',
    children: [
      O.jsxs('div', {
        className: 'lab-list-header',
        children: [
          O.jsx('h1', { children: 'Browse Research Labs' }),
          O.jsx('p', {
            children: 'Find labs that match your skills and research interests',
          }),
        ],
      }),
      O.jsxs('form', {
        className: 'lab-filters',
        onSubmit: (L) => {
          (L.preventDefault(), q());
        },
        children: [
          O.jsx('input', {
            type: 'text',
            placeholder: 'Search labs, professors, topics...',
            value: d,
            onChange: (L) => m(L.target.value),
            className: 'filter-search',
          }),
          O.jsxs('select', {
            value: S,
            onChange: (L) => x(L.target.value),
            className: 'filter-select',
            children: [
              O.jsx('option', { value: '', children: 'All Departments' }),
              K.map((L) => O.jsx('option', { value: L, children: L }, L)),
            ],
          }),
          O.jsxs('select', {
            value: b,
            onChange: (L) => v(L.target.value),
            className: 'filter-select',
            children: [
              O.jsx('option', { value: '', children: 'All Funding' }),
              O.jsx('option', { value: 'funded', children: 'Funded' }),
              O.jsx('option', {
                value: 'partially_funded',
                children: 'Partially Funded',
              }),
              O.jsx('option', { value: 'unfunded', children: 'Unfunded' }),
            ],
          }),
          O.jsx('button', {
            type: 'submit',
            className: 'btn btn-primary',
            children: 'Search',
          }),
          O.jsx('button', {
            type: 'button',
            className: 'btn btn-secondary',
            onClick: () => {
              (m(''), x(''), v(''));
            },
            children: 'Clear',
          }),
        ],
      }),
      O.jsxs('p', {
        className: 'lab-count',
        children: [c.length, ' labs found'],
      }),
      o
        ? O.jsx('p', { className: 'loading-text', children: 'Loading labs...' })
        : c.length === 0
          ? O.jsx('p', {
              className: 'empty-text',
              children: 'No labs found. Try different filters.',
            })
          : O.jsx('div', {
              className: 'lab-grid',
              children: c.map((L) =>
                O.jsx(Ff, { lab: L, userSkills: M }, L._id),
              ),
            }),
    ],
  });
}
function lg() {
  const { id: c } = Uh(),
    r = Kf(),
    [o, f] = R.useState(null),
    [d, m] = R.useState(!0),
    [S, x] = R.useState([]);
  (R.useEffect(() => {
    const M = localStorage.getItem('labconnect_skills');
    M && x(JSON.parse(M));
  }, []),
    R.useEffect(() => {
      async function M() {
        try {
          const T = await fetch(`/api/labs/${c}`);
          if (!T.ok) throw new Error('Lab not found');
          f(await T.json());
        } catch (T) {
          console.error(T);
        } finally {
          m(!1);
        }
      }
      M();
    }, [c]));
  const b = async () => {
    if (window.confirm('Are you sure you want to delete this lab listing?'))
      try {
        (await fetch(`/api/labs/${c}`, { method: 'DELETE' }), r('/labs'));
      } catch (M) {
        console.error('Delete failed:', M);
      }
  };
  if (d)
    return O.jsx('p', { className: 'loading-text', children: 'Loading...' });
  if (!o)
    return O.jsx('p', { className: 'empty-text', children: 'Lab not found.' });
  const v = {
    funded: 'Funded',
    unfunded: 'Unfunded',
    partially_funded: 'Partially Funded',
  };
  return O.jsxs('div', {
    className: 'lab-detail',
    children: [
      O.jsx('button', {
        type: 'button',
        className: 'btn btn-back',
        onClick: () => r('/labs'),
        children: '← Back to Labs',
      }),
      O.jsxs('div', {
        className: 'lab-detail-card',
        children: [
          O.jsxs('div', {
            className: 'lab-detail-header',
            children: [
              O.jsxs('div', {
                children: [
                  O.jsx('h1', { children: o.name }),
                  O.jsx('p', {
                    className: 'lab-detail-professor',
                    children: o.professor,
                  }),
                  O.jsx('span', {
                    className: 'lab-detail-department',
                    children: o.department,
                  }),
                ],
              }),
              O.jsx(si, { userSkills: S, labSkills: o.skills_needed }),
            ],
          }),
          O.jsxs('div', {
            className: 'lab-detail-section',
            children: [
              O.jsx('h2', { children: 'About This Lab' }),
              O.jsx('p', { children: o.description }),
            ],
          }),
          O.jsxs('div', {
            className: 'lab-detail-section',
            children: [
              O.jsx('h2', { children: 'Skills Needed' }),
              O.jsx('div', {
                className: 'lab-detail-skills',
                children: o.skills_needed.map((M) =>
                  O.jsxs(
                    'span',
                    {
                      className: `skill-tag ${S.some((T) => T.toLowerCase() === M.toLowerCase()) ? 'skill-match' : ''}`,
                      children: [
                        M,
                        S.some((T) => T.toLowerCase() === M.toLowerCase()) &&
                          ' ✓',
                      ],
                    },
                    M,
                  ),
                ),
              }),
            ],
          }),
          O.jsxs('div', {
            className: 'lab-detail-meta',
            children: [
              O.jsxs('div', {
                className: 'meta-item',
                children: [
                  O.jsx('strong', { children: 'Openings:' }),
                  ' ',
                  o.openings,
                ],
              }),
              O.jsxs('div', {
                className: 'meta-item',
                children: [
                  O.jsx('strong', { children: 'Funding:' }),
                  ' ',
                  v[o.funding_status] || o.funding_status,
                ],
              }),
              o.website &&
                O.jsxs('div', {
                  className: 'meta-item',
                  children: [
                    O.jsx('strong', { children: 'Website:' }),
                    ' ',
                    O.jsx('a', {
                      href: o.website,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      children: o.website,
                    }),
                  ],
                }),
            ],
          }),
          O.jsxs('div', {
            className: 'lab-detail-actions',
            children: [
              O.jsx('button', {
                type: 'button',
                className: 'btn btn-primary btn-lg',
                children: 'Apply to This Lab',
              }),
              O.jsx(kl, {
                to: `/labs/${o._id}/edit`,
                className: 'btn btn-secondary',
                children: 'Edit Listing',
              }),
              O.jsx('button', {
                type: 'button',
                className: 'btn btn-danger',
                onClick: b,
                children: 'Delete',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Eh() {
  const { id: c } = Uh(),
    r = Kf(),
    o = !!c,
    [f, d] = R.useState({
      name: '',
      professor: '',
      department: '',
      description: '',
      openings: 1,
      funding_status: 'unfunded',
      website: '',
    }),
    [m, S] = R.useState([]),
    [x, b] = R.useState('');
  R.useEffect(() => {
    o &&
      (async () => {
        try {
          const H = await (await fetch(`/api/labs/${c}`)).json();
          (d({
            name: H.name || '',
            professor: H.professor || '',
            department: H.department || '',
            description: H.description || '',
            openings: H.openings || 1,
            funding_status: H.funding_status || 'unfunded',
            website: H.website || '',
          }),
            S(H.skills_needed || []));
        } catch (B) {
          console.error('Failed to load lab:', B);
        }
      })();
  }, [c, o]);
  const v = (B) => {
      const { name: H, value: V } = B.target;
      d((k) => ({ ...k, [H]: V }));
    },
    M = () => {
      const B = x.trim();
      B && !m.includes(B) && (S((H) => [...H, B]), b(''));
    },
    T = (B) => S((H) => H.filter((V) => V !== B)),
    q = (B) => {
      B.key === 'Enter' && (B.preventDefault(), M());
    },
    K = async (B) => {
      B.preventDefault();
      const H = { ...f, openings: Number(f.openings), skills_needed: m };
      try {
        const V = o ? `/api/labs/${c}` : '/api/labs',
          J = await fetch(V, {
            method: o ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(H),
          });
        if (J.ok) {
          const dt = await J.json();
          r(o ? `/labs/${c}` : `/labs/${dt._id}`);
        } else alert('Failed to save lab listing');
      } catch (V) {
        console.error('Submit error:', V);
      }
    },
    L = [
      'Computer Science',
      'Electrical Engineering',
      'Data Science',
      'Information Systems',
      'Biomedical Engineering',
      'Mechanical Engineering',
      'Computer Engineering',
      'Artificial Intelligence',
      'Cybersecurity',
      'Robotics',
      'Physics',
      'Mathematics',
    ];
  return O.jsxs('div', {
    className: 'lab-form-page',
    children: [
      O.jsx('h1', { children: o ? 'Edit Lab Listing' : 'Post a New Lab' }),
      O.jsxs('form', {
        className: 'lab-form',
        onSubmit: K,
        children: [
          O.jsxs('div', {
            className: 'form-group',
            children: [
              O.jsx('label', { htmlFor: 'name', children: 'Lab Name' }),
              O.jsx('input', {
                id: 'name',
                name: 'name',
                type: 'text',
                value: f.name,
                onChange: v,
                placeholder: 'e.g., Machine Learning Research Lab',
                required: !0,
              }),
            ],
          }),
          O.jsxs('div', {
            className: 'form-group',
            children: [
              O.jsx('label', {
                htmlFor: 'professor',
                children: 'Professor / PI',
              }),
              O.jsx('input', {
                id: 'professor',
                name: 'professor',
                type: 'text',
                value: f.professor,
                onChange: v,
                placeholder: 'e.g., Dr. Sarah Chen',
                required: !0,
              }),
            ],
          }),
          O.jsxs('div', {
            className: 'form-row',
            children: [
              O.jsxs('div', {
                className: 'form-group',
                children: [
                  O.jsx('label', {
                    htmlFor: 'department',
                    children: 'Department',
                  }),
                  O.jsxs('select', {
                    id: 'department',
                    name: 'department',
                    value: f.department,
                    onChange: v,
                    required: !0,
                    children: [
                      O.jsx('option', {
                        value: '',
                        children: 'Select department',
                      }),
                      L.map((B) =>
                        O.jsx('option', { value: B, children: B }, B),
                      ),
                    ],
                  }),
                ],
              }),
              O.jsxs('div', {
                className: 'form-group',
                children: [
                  O.jsx('label', { htmlFor: 'openings', children: 'Openings' }),
                  O.jsx('input', {
                    id: 'openings',
                    name: 'openings',
                    type: 'number',
                    min: '0',
                    max: '20',
                    value: f.openings,
                    onChange: v,
                  }),
                ],
              }),
              O.jsxs('div', {
                className: 'form-group',
                children: [
                  O.jsx('label', {
                    htmlFor: 'funding_status',
                    children: 'Funding',
                  }),
                  O.jsxs('select', {
                    id: 'funding_status',
                    name: 'funding_status',
                    value: f.funding_status,
                    onChange: v,
                    children: [
                      O.jsx('option', { value: 'funded', children: 'Funded' }),
                      O.jsx('option', {
                        value: 'partially_funded',
                        children: 'Partially Funded',
                      }),
                      O.jsx('option', {
                        value: 'unfunded',
                        children: 'Unfunded',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          O.jsxs('div', {
            className: 'form-group',
            children: [
              O.jsx('label', {
                htmlFor: 'description',
                children: 'Research Description',
              }),
              O.jsx('textarea', {
                id: 'description',
                name: 'description',
                value: f.description,
                onChange: v,
                placeholder: "Describe your lab's research focus...",
                rows: '5',
                required: !0,
              }),
            ],
          }),
          O.jsxs('div', {
            className: 'form-group',
            children: [
              O.jsx('label', { children: 'Skills Needed' }),
              O.jsxs('div', {
                className: 'skill-input-row',
                children: [
                  O.jsx('input', {
                    type: 'text',
                    value: x,
                    onChange: (B) => b(B.target.value),
                    onKeyDown: q,
                    placeholder: 'Type a skill and press Enter',
                  }),
                  O.jsx('button', {
                    type: 'button',
                    className: 'btn btn-primary btn-sm',
                    onClick: M,
                    children: 'Add',
                  }),
                ],
              }),
              O.jsx('div', {
                className: 'skill-tags',
                children: m.map((B) =>
                  O.jsxs(
                    'span',
                    {
                      className: 'skill-tag-removable',
                      children: [
                        B,
                        O.jsx('button', {
                          type: 'button',
                          onClick: () => T(B),
                          children: '×',
                        }),
                      ],
                    },
                    B,
                  ),
                ),
              }),
            ],
          }),
          O.jsxs('div', {
            className: 'form-group',
            children: [
              O.jsx('label', {
                htmlFor: 'website',
                children: 'Lab Website (optional)',
              }),
              O.jsx('input', {
                id: 'website',
                name: 'website',
                type: 'url',
                value: f.website,
                onChange: v,
                placeholder: 'https://...',
              }),
            ],
          }),
          O.jsxs('div', {
            className: 'form-actions',
            children: [
              O.jsx('button', {
                type: 'submit',
                className: 'btn btn-primary btn-lg',
                children: o ? 'Update Listing' : 'Create Listing',
              }),
              O.jsx('button', {
                type: 'button',
                className: 'btn btn-secondary',
                onClick: () => r('/labs'),
                children: 'Cancel',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ag() {
  return O.jsxs(X0, {
    children: [
      O.jsx(F0, {}),
      O.jsx('main', {
        className: 'main-content',
        children: O.jsxs(g0, {
          children: [
            O.jsx(Ha, { path: '/', element: O.jsx(bh, {}) }),
            O.jsx(Ha, { path: '/labs', element: O.jsx(bh, {}) }),
            O.jsx(Ha, { path: '/labs/new', element: O.jsx(Eh, {}) }),
            O.jsx(Ha, { path: '/labs/:id', element: O.jsx(lg, {}) }),
            O.jsx(Ha, { path: '/labs/:id/edit', element: O.jsx(Eh, {}) }),
          ],
        }),
      }),
    ],
  });
}
bv.createRoot(document.getElementById('root')).render(
  O.jsx(R.StrictMode, { children: O.jsx(ag, {}) }),
);
