(function () {
  const R = document.createElement('link').relList;
  if (R && R.supports && R.supports('modulepreload')) return;
  for (const M of document.querySelectorAll('link[rel="modulepreload"]')) re(M);
  new MutationObserver((M) => {
    for (const H of M)
      if (H.type === 'childList')
        for (const J of H.addedNodes)
          J.tagName === 'LINK' && J.rel === 'modulepreload' && re(J);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(M) {
    const H = {};
    return (
      M.integrity && (H.integrity = M.integrity),
      M.referrerPolicy && (H.referrerPolicy = M.referrerPolicy),
      M.crossOrigin === 'use-credentials'
        ? (H.credentials = 'include')
        : M.crossOrigin === 'anonymous'
          ? (H.credentials = 'omit')
          : (H.credentials = 'same-origin'),
      H
    );
  }
  function re(M) {
    if (M.ep) return;
    M.ep = !0;
    const H = m(M);
    fetch(M.href, H);
  }
})();
function Fa(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, 'default')
    ? h.default
    : h;
}
var Ei = { exports: {} },
  gr = {},
  Ci = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca;
function Df() {
  if (Ca) return F;
  Ca = 1;
  var h = Symbol.for('react.element'),
    R = Symbol.for('react.portal'),
    m = Symbol.for('react.fragment'),
    re = Symbol.for('react.strict_mode'),
    M = Symbol.for('react.profiler'),
    H = Symbol.for('react.provider'),
    J = Symbol.for('react.context'),
    K = Symbol.for('react.forward_ref'),
    A = Symbol.for('react.suspense'),
    pe = Symbol.for('react.memo'),
    X = Symbol.for('react.lazy'),
    ee = Symbol.iterator;
  function q(c) {
    return c === null || typeof c != 'object'
      ? null
      : ((c = (ee && c[ee]) || c['@@iterator']),
        typeof c == 'function' ? c : null);
  }
  var Ee = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Oe = Object.assign,
    b = {};
  function Y(c, y, I) {
    ((this.props = c),
      (this.context = y),
      (this.refs = b),
      (this.updater = I || Ee));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (c, y) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, c, y, 'setState');
    }),
    (Y.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    }));
  function Ze() {}
  Ze.prototype = Y.prototype;
  function V(c, y, I) {
    ((this.props = c),
      (this.context = y),
      (this.refs = b),
      (this.updater = I || Ee));
  }
  var j = (V.prototype = new Ze());
  ((j.constructor = V), Oe(j, Y.prototype), (j.isPureReactComponent = !0));
  var se = Array.isArray,
    Ce = Object.prototype.hasOwnProperty,
    ye = { current: null },
    Ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(c, y, I) {
    var U,
      $ = {},
      W = null,
      te = null;
    if (y != null)
      for (U in (y.ref !== void 0 && (te = y.ref),
      y.key !== void 0 && (W = '' + y.key),
      y))
        Ce.call(y, U) && !Ne.hasOwnProperty(U) && ($[U] = y[U]);
    var G = arguments.length - 2;
    if (G === 1) $.children = I;
    else if (1 < G) {
      for (var ie = Array(G), Qe = 0; Qe < G; Qe++) ie[Qe] = arguments[Qe + 2];
      $.children = ie;
    }
    if (c && c.defaultProps)
      for (U in ((G = c.defaultProps), G)) $[U] === void 0 && ($[U] = G[U]);
    return {
      $$typeof: h,
      type: c,
      key: W,
      ref: te,
      props: $,
      _owner: ye.current,
    };
  }
  function lt(c, y) {
    return {
      $$typeof: h,
      type: c.type,
      key: y,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function Je(c) {
    return typeof c == 'object' && c !== null && c.$$typeof === h;
  }
  function kt(c) {
    var y = { '=': '=0', ':': '=2' };
    return (
      '$' +
      c.replace(/[=:]/g, function (I) {
        return y[I];
      })
    );
  }
  var pt = /\/+/g;
  function We(c, y) {
    return typeof c == 'object' && c !== null && c.key != null
      ? kt('' + c.key)
      : y.toString(36);
  }
  function ut(c, y, I, U, $) {
    var W = typeof c;
    (W === 'undefined' || W === 'boolean') && (c = null);
    var te = !1;
    if (c === null) te = !0;
    else
      switch (W) {
        case 'string':
        case 'number':
          te = !0;
          break;
        case 'object':
          switch (c.$$typeof) {
            case h:
            case R:
              te = !0;
          }
      }
    if (te)
      return (
        (te = c),
        ($ = $(te)),
        (c = U === '' ? '.' + We(te, 0) : U),
        se($)
          ? ((I = ''),
            c != null && (I = c.replace(pt, '$&/') + '/'),
            ut($, y, I, '', function (Qe) {
              return Qe;
            }))
          : $ != null &&
            (Je($) &&
              ($ = lt(
                $,
                I +
                  (!$.key || (te && te.key === $.key)
                    ? ''
                    : ('' + $.key).replace(pt, '$&/') + '/') +
                  c
              )),
            y.push($)),
        1
      );
    if (((te = 0), (U = U === '' ? '.' : U + ':'), se(c)))
      for (var G = 0; G < c.length; G++) {
        W = c[G];
        var ie = U + We(W, G);
        te += ut(W, y, I, ie, $);
      }
    else if (((ie = q(c)), typeof ie == 'function'))
      for (c = ie.call(c), G = 0; !(W = c.next()).done; )
        ((W = W.value), (ie = U + We(W, G++)), (te += ut(W, y, I, ie, $)));
    else if (W === 'object')
      throw (
        (y = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (y === '[object Object]'
              ? 'object with keys {' + Object.keys(c).join(', ') + '}'
              : y) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    return te;
  }
  function mt(c, y, I) {
    if (c == null) return c;
    var U = [],
      $ = 0;
    return (
      ut(c, U, '', '', function (W) {
        return y.call(I, W, $++);
      }),
      U
    );
  }
  function Fe(c) {
    if (c._status === -1) {
      var y = c._result;
      ((y = y()),
        y.then(
          function (I) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = I));
          },
          function (I) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = I));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = y)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var fe = { current: null },
    _ = { transition: null },
    O = {
      ReactCurrentDispatcher: fe,
      ReactCurrentBatchConfig: _,
      ReactCurrentOwner: ye,
    };
  function C() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (F.Children = {
      map: mt,
      forEach: function (c, y, I) {
        mt(
          c,
          function () {
            y.apply(this, arguments);
          },
          I
        );
      },
      count: function (c) {
        var y = 0;
        return (
          mt(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          mt(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!Je(c))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return c;
      },
    }),
    (F.Component = Y),
    (F.Fragment = m),
    (F.Profiler = M),
    (F.PureComponent = V),
    (F.StrictMode = re),
    (F.Suspense = A),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (F.act = C),
    (F.cloneElement = function (c, y, I) {
      if (c == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            c +
            '.'
        );
      var U = Oe({}, c.props),
        $ = c.key,
        W = c.ref,
        te = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((W = y.ref), (te = ye.current)),
          y.key !== void 0 && ($ = '' + y.key),
          c.type && c.type.defaultProps)
        )
          var G = c.type.defaultProps;
        for (ie in y)
          Ce.call(y, ie) &&
            !Ne.hasOwnProperty(ie) &&
            (U[ie] = y[ie] === void 0 && G !== void 0 ? G[ie] : y[ie]);
      }
      var ie = arguments.length - 2;
      if (ie === 1) U.children = I;
      else if (1 < ie) {
        G = Array(ie);
        for (var Qe = 0; Qe < ie; Qe++) G[Qe] = arguments[Qe + 2];
        U.children = G;
      }
      return {
        $$typeof: h,
        type: c.type,
        key: $,
        ref: W,
        props: U,
        _owner: te,
      };
    }),
    (F.createContext = function (c) {
      return (
        (c = {
          $$typeof: J,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: H, _context: c }),
        (c.Consumer = c)
      );
    }),
    (F.createElement = Pe),
    (F.createFactory = function (c) {
      var y = Pe.bind(null, c);
      return ((y.type = c), y);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (c) {
      return { $$typeof: K, render: c };
    }),
    (F.isValidElement = Je),
    (F.lazy = function (c) {
      return { $$typeof: X, _payload: { _status: -1, _result: c }, _init: Fe };
    }),
    (F.memo = function (c, y) {
      return { $$typeof: pe, type: c, compare: y === void 0 ? null : y };
    }),
    (F.startTransition = function (c) {
      var y = _.transition;
      _.transition = {};
      try {
        c();
      } finally {
        _.transition = y;
      }
    }),
    (F.unstable_act = C),
    (F.useCallback = function (c, y) {
      return fe.current.useCallback(c, y);
    }),
    (F.useContext = function (c) {
      return fe.current.useContext(c);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (c) {
      return fe.current.useDeferredValue(c);
    }),
    (F.useEffect = function (c, y) {
      return fe.current.useEffect(c, y);
    }),
    (F.useId = function () {
      return fe.current.useId();
    }),
    (F.useImperativeHandle = function (c, y, I) {
      return fe.current.useImperativeHandle(c, y, I);
    }),
    (F.useInsertionEffect = function (c, y) {
      return fe.current.useInsertionEffect(c, y);
    }),
    (F.useLayoutEffect = function (c, y) {
      return fe.current.useLayoutEffect(c, y);
    }),
    (F.useMemo = function (c, y) {
      return fe.current.useMemo(c, y);
    }),
    (F.useReducer = function (c, y, I) {
      return fe.current.useReducer(c, y, I);
    }),
    (F.useRef = function (c) {
      return fe.current.useRef(c);
    }),
    (F.useState = function (c) {
      return fe.current.useState(c);
    }),
    (F.useSyncExternalStore = function (c, y, I) {
      return fe.current.useSyncExternalStore(c, y, I);
    }),
    (F.useTransition = function () {
      return fe.current.useTransition();
    }),
    (F.version = '18.3.1'),
    F
  );
}
var Na;
function Li() {
  return (Na || ((Na = 1), (Ci.exports = Df())), Ci.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function If() {
  if (Pa) return gr;
  Pa = 1;
  var h = Li(),
    R = Symbol.for('react.element'),
    m = Symbol.for('react.fragment'),
    re = Object.prototype.hasOwnProperty,
    M = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(K, A, pe) {
    var X,
      ee = {},
      q = null,
      Ee = null;
    (pe !== void 0 && (q = '' + pe),
      A.key !== void 0 && (q = '' + A.key),
      A.ref !== void 0 && (Ee = A.ref));
    for (X in A) re.call(A, X) && !H.hasOwnProperty(X) && (ee[X] = A[X]);
    if (K && K.defaultProps)
      for (X in ((A = K.defaultProps), A)) ee[X] === void 0 && (ee[X] = A[X]);
    return {
      $$typeof: R,
      type: K,
      key: q,
      ref: Ee,
      props: ee,
      _owner: M.current,
    };
  }
  return ((gr.Fragment = m), (gr.jsx = J), (gr.jsxs = J), gr);
}
var za;
function Ff() {
  return (za || ((za = 1), (Ei.exports = If())), Ei.exports);
}
var S = Ff(),
  ke = Li();
const Uf = Fa(ke);
var Tl = {},
  Ni = { exports: {} },
  $e = {},
  Pi = { exports: {} },
  zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Af() {
  return (
    La ||
      ((La = 1),
      (function (h) {
        function R(_, O) {
          var C = _.length;
          _.push(O);
          e: for (; 0 < C; ) {
            var c = (C - 1) >>> 1,
              y = _[c];
            if (0 < M(y, O)) ((_[c] = O), (_[C] = y), (C = c));
            else break e;
          }
        }
        function m(_) {
          return _.length === 0 ? null : _[0];
        }
        function re(_) {
          if (_.length === 0) return null;
          var O = _[0],
            C = _.pop();
          if (C !== O) {
            _[0] = C;
            e: for (var c = 0, y = _.length, I = y >>> 1; c < I; ) {
              var U = 2 * (c + 1) - 1,
                $ = _[U],
                W = U + 1,
                te = _[W];
              if (0 > M($, C))
                W < y && 0 > M(te, $)
                  ? ((_[c] = te), (_[W] = C), (c = W))
                  : ((_[c] = $), (_[U] = C), (c = U));
              else if (W < y && 0 > M(te, C))
                ((_[c] = te), (_[W] = C), (c = W));
              else break e;
            }
          }
          return O;
        }
        function M(_, O) {
          var C = _.sortIndex - O.sortIndex;
          return C !== 0 ? C : _.id - O.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var H = performance;
          h.unstable_now = function () {
            return H.now();
          };
        } else {
          var J = Date,
            K = J.now();
          h.unstable_now = function () {
            return J.now() - K;
          };
        }
        var A = [],
          pe = [],
          X = 1,
          ee = null,
          q = 3,
          Ee = !1,
          Oe = !1,
          b = !1,
          Y = typeof setTimeout == 'function' ? setTimeout : null,
          Ze = typeof clearTimeout == 'function' ? clearTimeout : null,
          V = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function j(_) {
          for (var O = m(pe); O !== null; ) {
            if (O.callback === null) re(pe);
            else if (O.startTime <= _)
              (re(pe), (O.sortIndex = O.expirationTime), R(A, O));
            else break;
            O = m(pe);
          }
        }
        function se(_) {
          if (((b = !1), j(_), !Oe))
            if (m(A) !== null) ((Oe = !0), Fe(Ce));
            else {
              var O = m(pe);
              O !== null && fe(se, O.startTime - _);
            }
        }
        function Ce(_, O) {
          ((Oe = !1), b && ((b = !1), Ze(Pe), (Pe = -1)), (Ee = !0));
          var C = q;
          try {
            for (
              j(O), ee = m(A);
              ee !== null && (!(ee.expirationTime > O) || (_ && !kt()));

            ) {
              var c = ee.callback;
              if (typeof c == 'function') {
                ((ee.callback = null), (q = ee.priorityLevel));
                var y = c(ee.expirationTime <= O);
                ((O = h.unstable_now()),
                  typeof y == 'function'
                    ? (ee.callback = y)
                    : ee === m(A) && re(A),
                  j(O));
              } else re(A);
              ee = m(A);
            }
            if (ee !== null) var I = !0;
            else {
              var U = m(pe);
              (U !== null && fe(se, U.startTime - O), (I = !1));
            }
            return I;
          } finally {
            ((ee = null), (q = C), (Ee = !1));
          }
        }
        var ye = !1,
          Ne = null,
          Pe = -1,
          lt = 5,
          Je = -1;
        function kt() {
          return !(h.unstable_now() - Je < lt);
        }
        function pt() {
          if (Ne !== null) {
            var _ = h.unstable_now();
            Je = _;
            var O = !0;
            try {
              O = Ne(!0, _);
            } finally {
              O ? We() : ((ye = !1), (Ne = null));
            }
          } else ye = !1;
        }
        var We;
        if (typeof V == 'function')
          We = function () {
            V(pt);
          };
        else if (typeof MessageChannel < 'u') {
          var ut = new MessageChannel(),
            mt = ut.port2;
          ((ut.port1.onmessage = pt),
            (We = function () {
              mt.postMessage(null);
            }));
        } else
          We = function () {
            Y(pt, 0);
          };
        function Fe(_) {
          ((Ne = _), ye || ((ye = !0), We()));
        }
        function fe(_, O) {
          Pe = Y(function () {
            _(h.unstable_now());
          }, O);
        }
        ((h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (h.unstable_continueExecution = function () {
            Oe || Ee || ((Oe = !0), Fe(Ce));
          }),
          (h.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (lt = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (h.unstable_getFirstCallbackNode = function () {
            return m(A);
          }),
          (h.unstable_next = function (_) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = q;
            }
            var C = q;
            q = O;
            try {
              return _();
            } finally {
              q = C;
            }
          }),
          (h.unstable_pauseExecution = function () {}),
          (h.unstable_requestPaint = function () {}),
          (h.unstable_runWithPriority = function (_, O) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var C = q;
            q = _;
            try {
              return O();
            } finally {
              q = C;
            }
          }),
          (h.unstable_scheduleCallback = function (_, O, C) {
            var c = h.unstable_now();
            switch (
              (typeof C == 'object' && C !== null
                ? ((C = C.delay),
                  (C = typeof C == 'number' && 0 < C ? c + C : c))
                : (C = c),
              _)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = C + y),
              (_ = {
                id: X++,
                callback: O,
                priorityLevel: _,
                startTime: C,
                expirationTime: y,
                sortIndex: -1,
              }),
              C > c
                ? ((_.sortIndex = C),
                  R(pe, _),
                  m(A) === null &&
                    _ === m(pe) &&
                    (b ? (Ze(Pe), (Pe = -1)) : (b = !0), fe(se, C - c)))
                : ((_.sortIndex = y), R(A, _), Oe || Ee || ((Oe = !0), Fe(Ce))),
              _
            );
          }),
          (h.unstable_shouldYield = kt),
          (h.unstable_wrapCallback = function (_) {
            var O = q;
            return function () {
              var C = q;
              q = O;
              try {
                return _.apply(this, arguments);
              } finally {
                q = C;
              }
            };
          }));
      })(zi)),
    zi
  );
}
var Ta;
function Vf() {
  return (Ta || ((Ta = 1), (Pi.exports = Af())), Pi.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja;
function Bf() {
  if (ja) return $e;
  ja = 1;
  var h = Li(),
    R = Vf();
  function m(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var re = new Set(),
    M = {};
  function H(e, t) {
    (J(e, t), J(e + 'Capture', t));
  }
  function J(e, t) {
    for (M[e] = t, e = 0; e < t.length; e++) re.add(t[e]);
  }
  var K = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    A = Object.prototype.hasOwnProperty,
    pe =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    X = {},
    ee = {};
  function q(e) {
    return A.call(ee, e)
      ? !0
      : A.call(X, e)
        ? !1
        : pe.test(e)
          ? (ee[e] = !0)
          : ((X[e] = !0), !1);
  }
  function Ee(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function Oe(e, t, n, r) {
    if (t === null || typeof t > 'u' || Ee(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function b(e, t, n, r, l, u, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i));
  }
  var Y = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      Y[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      Y[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        Y[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      Y[e] = new b(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        Y[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Y[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      Y[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Y[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Y[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Ze = /[\-:]([a-z])/g;
  function V(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Ze, V);
      Y[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(Ze, V);
        Y[t] = new b(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Ze, V);
      Y[t] = new b(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new b(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function j(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (Oe(t, n, l, r) && (n = null),
      r || l === null
        ? q(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var se = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ce = Symbol.for('react.element'),
    ye = Symbol.for('react.portal'),
    Ne = Symbol.for('react.fragment'),
    Pe = Symbol.for('react.strict_mode'),
    lt = Symbol.for('react.profiler'),
    Je = Symbol.for('react.provider'),
    kt = Symbol.for('react.context'),
    pt = Symbol.for('react.forward_ref'),
    We = Symbol.for('react.suspense'),
    ut = Symbol.for('react.suspense_list'),
    mt = Symbol.for('react.memo'),
    Fe = Symbol.for('react.lazy'),
    fe = Symbol.for('react.offscreen'),
    _ = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (_ && e[_]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var C = Object.assign,
    c;
  function y(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        c = (t && t[1]) || '';
      }
    return (
      `
` +
      c +
      e
    );
  }
  var I = !1;
  function U(e, t) {
    if (!e || I) return '';
    I = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (p) {
            r = p;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == 'string') {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            i = l.length - 1,
            o = u.length - 1;
          1 <= i && 0 <= o && l[i] !== u[o];

        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                  var s =
                    `
` + l[i].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      s.includes('<anonymous>') &&
                      (s = s.replace('<anonymous>', e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      ((I = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : '') ? y(e) : '';
  }
  function $(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y('Lazy');
      case 13:
        return y('Suspense');
      case 19:
        return y('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = U(e.type, !1)), e);
      case 11:
        return ((e = U(e.type.render, !1)), e);
      case 1:
        return ((e = U(e.type, !0)), e);
      default:
        return '';
    }
  }
  function W(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Ne:
        return 'Fragment';
      case ye:
        return 'Portal';
      case lt:
        return 'Profiler';
      case Pe:
        return 'StrictMode';
      case We:
        return 'Suspense';
      case ut:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case kt:
          return (e.displayName || 'Context') + '.Consumer';
        case Je:
          return (e._context.displayName || 'Context') + '.Provider';
        case pt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case mt:
          return (
            (t = e.displayName || null),
            t !== null ? t : W(e.type) || 'Memo'
          );
        case Fe:
          ((t = e._payload), (e = e._init));
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  function te(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return W(t);
      case 8:
        return t === Pe ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function G(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function ie(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function Qe(e) {
    var t = ie(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            ((r = '' + i), u.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = '' + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function kr(e) {
    e._valueTracker || (e._valueTracker = Qe(e));
  }
  function Ti(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = ie(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Sr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function jl(e, t) {
    var n = t.checked;
    return C({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ji(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = G(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Ri(e, t) {
    ((t = t.checked), t != null && j(e, 'checked', t, !1));
  }
  function Rl(e, t) {
    Ri(e, t);
    var n = G(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (t.hasOwnProperty('value')
      ? Ml(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Ml(e, t.type, G(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Mi(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (
        !(
          (r !== 'submit' && r !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n));
  }
  function Ml(e, t, n) {
    (t !== 'number' || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var Mn = Array.isArray;
  function sn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + G(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ol(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return C({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Oi(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ''), (n = t));
    }
    e._wrapperState = { initialValue: G(n) };
  }
  function Di(e, t) {
    var n = G(t.value),
      r = G(t.defaultValue);
    (n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r));
  }
  function Ii(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function Fi(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Dl(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Fi(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var _r,
    Ui = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          _r = _r || document.createElement('div'),
            _r.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = _r.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function On(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ua = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Dn).forEach(function (e) {
    Ua.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]));
    });
  });
  function Ai(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Vi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Ai(n, t[n], r);
        (n === 'float' && (n = 'cssFloat'),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Aa = C(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Il(e, t) {
    if (t) {
      if (Aa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(m(62));
    }
  }
  function Fl(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
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
  var Ul = null;
  function Al(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Vl = null,
    an = null,
    cn = null;
  function Bi(e) {
    if ((e = rr(e))) {
      if (typeof Vl != 'function') throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), Vl(e.stateNode, e.type, t));
    }
  }
  function Hi(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function $i() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), Bi(e), t)) for (e = 0; e < t.length; e++) Bi(t[e]);
    }
  }
  function Wi(e, t) {
    return e(t);
  }
  function Qi() {}
  var Bl = !1;
  function Ki(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Wi(e, t, n);
    } finally {
      ((Bl = !1), (an !== null || cn !== null) && (Qi(), $i()));
    }
  }
  function In(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(m(231, t, typeof n));
    return n;
  }
  var Hl = !1;
  if (K)
    try {
      var Fn = {};
      (Object.defineProperty(Fn, 'passive', {
        get: function () {
          Hl = !0;
        },
      }),
        window.addEventListener('test', Fn, Fn),
        window.removeEventListener('test', Fn, Fn));
    } catch {
      Hl = !1;
    }
  function Va(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (g) {
      this.onError(g);
    }
  }
  var Un = !1,
    xr = null,
    Er = !1,
    $l = null,
    Ba = {
      onError: function (e) {
        ((Un = !0), (xr = e));
      },
    };
  function Ha(e, t, n, r, l, u, i, o, s) {
    ((Un = !1), (xr = null), Va.apply(Ba, arguments));
  }
  function $a(e, t, n, r, l, u, i, o, s) {
    if ((Ha.apply(this, arguments), Un)) {
      if (Un) {
        var p = xr;
        ((Un = !1), (xr = null));
      } else throw Error(m(198));
      Er || ((Er = !0), ($l = p));
    }
  }
  function Xt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Yi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Xi(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function Wa(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return (Xi(l), e);
          if (u === r) return (Xi(l), t);
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) ((n = l), (r = u));
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === n) {
            ((i = !0), (n = l), (r = u));
            break;
          }
          if (o === r) {
            ((i = !0), (r = l), (n = u));
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === n) {
              ((i = !0), (n = u), (r = l));
              break;
            }
            if (o === r) {
              ((i = !0), (r = u), (n = l));
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Gi(e) {
    return ((e = Wa(e)), e !== null ? Zi(e) : null);
  }
  function Zi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Zi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ji = R.unstable_scheduleCallback,
    qi = R.unstable_cancelCallback,
    Qa = R.unstable_shouldYield,
    Ka = R.unstable_requestPaint,
    me = R.unstable_now,
    Ya = R.unstable_getCurrentPriorityLevel,
    Wl = R.unstable_ImmediatePriority,
    bi = R.unstable_UserBlockingPriority,
    Cr = R.unstable_NormalPriority,
    Xa = R.unstable_LowPriority,
    eo = R.unstable_IdlePriority,
    Nr = null,
    ht = null;
  function Ga(e) {
    if (ht && typeof ht.onCommitFiberRoot == 'function')
      try {
        ht.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var it = Math.clz32 ? Math.clz32 : qa,
    Za = Math.log,
    Ja = Math.LN2;
  function qa(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Za(e) / Ja) | 0)) | 0);
  }
  var Pr = 64,
    zr = 4194304;
  function An(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Lr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = An(o)) : ((u &= i), u !== 0 && (r = An(u)));
    } else ((i = n & ~l), i !== 0 ? (r = An(i)) : u !== 0 && (r = An(u)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - it(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function ba(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ec(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var i = 31 - it(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = ba(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function Ql(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function to() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - it(t)),
      (e[t] = n));
  }
  function tc(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - it(n),
        u = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u));
    }
  }
  function Yl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - it(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var Z = 0;
  function no(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ro,
    Xl,
    lo,
    uo,
    io,
    Gl = !1,
    Tr = [],
    Lt = null,
    Tt = null,
    jt = null,
    Bn = new Map(),
    Hn = new Map(),
    Rt = [],
    nc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function oo(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Lt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Tt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        jt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Bn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Hn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = rr(t)), t !== null && Xl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function rc(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return ((Lt = $n(Lt, e, t, n, r, l)), !0);
      case 'dragenter':
        return ((Tt = $n(Tt, e, t, n, r, l)), !0);
      case 'mouseover':
        return ((jt = $n(jt, e, t, n, r, l)), !0);
      case 'pointerover':
        var u = l.pointerId;
        return (Bn.set(u, $n(Bn.get(u) || null, e, t, n, r, l)), !0);
      case 'gotpointercapture':
        return (
          (u = l.pointerId),
          Hn.set(u, $n(Hn.get(u) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function so(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Yi(n)), t !== null)) {
            ((e.blockedOn = t),
              io(e.priority, function () {
                lo(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function jr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ul = r), n.target.dispatchEvent(r), (Ul = null));
      } else return ((t = rr(n)), t !== null && Xl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ao(e, t, n) {
    jr(e) && n.delete(t);
  }
  function lc() {
    ((Gl = !1),
      Lt !== null && jr(Lt) && (Lt = null),
      Tt !== null && jr(Tt) && (Tt = null),
      jt !== null && jr(jt) && (jt = null),
      Bn.forEach(ao),
      Hn.forEach(ao));
  }
  function Wn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Gl ||
        ((Gl = !0),
        R.unstable_scheduleCallback(R.unstable_NormalPriority, lc)));
  }
  function Qn(e) {
    function t(l) {
      return Wn(l, e);
    }
    if (0 < Tr.length) {
      Wn(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Lt !== null && Wn(Lt, e),
        Tt !== null && Wn(Tt, e),
        jt !== null && Wn(jt, e),
        Bn.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
      (so(n), n.blockedOn === null && Rt.shift());
  }
  var fn = se.ReactCurrentBatchConfig,
    Rr = !0;
  function uc(e, t, n, r) {
    var l = Z,
      u = fn.transition;
    fn.transition = null;
    try {
      ((Z = 1), Zl(e, t, n, r));
    } finally {
      ((Z = l), (fn.transition = u));
    }
  }
  function ic(e, t, n, r) {
    var l = Z,
      u = fn.transition;
    fn.transition = null;
    try {
      ((Z = 4), Zl(e, t, n, r));
    } finally {
      ((Z = l), (fn.transition = u));
    }
  }
  function Zl(e, t, n, r) {
    if (Rr) {
      var l = Jl(e, t, n, r);
      if (l === null) (mu(e, t, r, Mr, n), oo(e, r));
      else if (rc(l, e, t, n, r)) r.stopPropagation();
      else if ((oo(e, r), t & 4 && -1 < nc.indexOf(e))) {
        for (; l !== null; ) {
          var u = rr(l);
          if (
            (u !== null && ro(u),
            (u = Jl(e, t, n, r)),
            u === null && mu(e, t, r, Mr, n),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else mu(e, t, r, null, n);
    }
  }
  var Mr = null;
  function Jl(e, t, n, r) {
    if (((Mr = null), (e = Al(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Yi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Mr = e), null);
  }
  function co(e) {
    switch (e) {
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
        return 1;
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
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (Ya()) {
          case Wl:
            return 1;
          case bi:
            return 4;
          case Cr:
          case Xa:
            return 16;
          case eo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    ql = null,
    Or = null;
  function fo() {
    if (Or) return Or;
    var e,
      t = ql,
      n = t.length,
      r,
      l = 'value' in Mt ? Mt.value : Mt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ir() {
    return !0;
  }
  function po() {
    return !1;
  }
  function Ke(e) {
    function t(n, r, l, u, i) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var o in e)
        e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ir
          : po),
        (this.isPropagationStopped = po),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Ir));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ir));
        },
        persist: function () {},
        isPersistent: Ir,
      }),
      t
    );
  }
  var dn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bl = Ke(dn),
    Kn = C({}, dn, { view: 0, detail: 0 }),
    oc = Ke(Kn),
    eu,
    tu,
    Yn,
    Fr = C({}, Kn, {
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
      getModifierState: ru,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Yn &&
              (Yn && e.type === 'mousemove'
                ? ((eu = e.screenX - Yn.screenX), (tu = e.screenY - Yn.screenY))
                : (tu = eu = 0),
              (Yn = e)),
            eu);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : tu;
      },
    }),
    mo = Ke(Fr),
    sc = C({}, Fr, { dataTransfer: 0 }),
    ac = Ke(sc),
    cc = C({}, Kn, { relatedTarget: 0 }),
    nu = Ke(cc),
    fc = C({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dc = Ke(fc),
    pc = C({}, dn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    mc = Ke(pc),
    hc = C({}, dn, { data: 0 }),
    ho = Ke(hc),
    vc = {
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
    yc = {
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
    gc = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function wc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gc[e])
        ? !!t[e]
        : !1;
  }
  function ru() {
    return wc;
  }
  var kc = C({}, Kn, {
      key: function (e) {
        if (e.key) {
          var t = vc[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Dr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? yc[e.keyCode] || 'Unidentified'
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
      getModifierState: ru,
      charCode: function (e) {
        return e.type === 'keypress' ? Dr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Dr(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Sc = Ke(kc),
    _c = C({}, Fr, {
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
    vo = Ke(_c),
    xc = C({}, Kn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ru,
    }),
    Ec = Ke(xc),
    Cc = C({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nc = Ke(Cc),
    Pc = C({}, Fr, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    zc = Ke(Pc),
    Lc = [9, 13, 27, 32],
    lu = K && 'CompositionEvent' in window,
    Xn = null;
  K && 'documentMode' in document && (Xn = document.documentMode);
  var Tc = K && 'TextEvent' in window && !Xn,
    yo = K && (!lu || (Xn && 8 < Xn && 11 >= Xn)),
    go = ' ',
    wo = !1;
  function ko(e, t) {
    switch (e) {
      case 'keyup':
        return Lc.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function So(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var pn = !1;
  function jc(e, t) {
    switch (e) {
      case 'compositionend':
        return So(t);
      case 'keypress':
        return t.which !== 32 ? null : ((wo = !0), go);
      case 'textInput':
        return ((e = t.data), e === go && wo ? null : e);
      default:
        return null;
    }
  }
  function Rc(e, t) {
    if (pn)
      return e === 'compositionend' || (!lu && ko(e, t))
        ? ((e = fo()), (Or = ql = Mt = null), (pn = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return yo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Mc = {
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
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Mc[e.type] : t === 'textarea';
  }
  function xo(e, t, n, r) {
    (Hi(r),
      (t = Hr(t, 'onChange')),
      0 < t.length &&
        ((n = new bl('onChange', 'change', null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Gn = null,
    Zn = null;
  function Oc(e) {
    Bo(e, 0);
  }
  function Ur(e) {
    var t = gn(e);
    if (Ti(t)) return e;
  }
  function Dc(e, t) {
    if (e === 'change') return t;
  }
  var Eo = !1;
  if (K) {
    var uu;
    if (K) {
      var iu = 'oninput' in document;
      if (!iu) {
        var Co = document.createElement('div');
        (Co.setAttribute('oninput', 'return;'),
          (iu = typeof Co.oninput == 'function'));
      }
      uu = iu;
    } else uu = !1;
    Eo = uu && (!document.documentMode || 9 < document.documentMode);
  }
  function No() {
    Gn && (Gn.detachEvent('onpropertychange', Po), (Zn = Gn = null));
  }
  function Po(e) {
    if (e.propertyName === 'value' && Ur(Zn)) {
      var t = [];
      (xo(t, Zn, e, Al(e)), Ki(Oc, t));
    }
  }
  function Ic(e, t, n) {
    e === 'focusin'
      ? (No(), (Gn = t), (Zn = n), Gn.attachEvent('onpropertychange', Po))
      : e === 'focusout' && No();
  }
  function Fc(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Ur(Zn);
  }
  function Uc(e, t) {
    if (e === 'click') return Ur(t);
  }
  function Ac(e, t) {
    if (e === 'input' || e === 'change') return Ur(t);
  }
  function Vc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ot = typeof Object.is == 'function' ? Object.is : Vc;
  function Jn(e, t) {
    if (ot(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!A.call(t, l) || !ot(e[l], t[l])) return !1;
    }
    return !0;
  }
  function zo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lo(e, t) {
    var n = zo(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = zo(n);
    }
  }
  function To(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? To(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function jo() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Bc(e) {
    var t = jo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      To(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ou(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          'selectionStart' in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            u = Math.min(r.start, l);
          ((r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = Lo(n, u)));
          var i = Lo(n, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Hc = K && 'documentMode' in document && 11 >= document.documentMode,
    mn = null,
    su = null,
    qn = null,
    au = !1;
  function Ro(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    au ||
      mn == null ||
      mn !== Sr(r) ||
      ((r = mn),
      'selectionStart' in r && ou(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (qn && Jn(qn, r)) ||
        ((qn = r),
        (r = Hr(su, 'onSelect')),
        0 < r.length &&
          ((t = new bl('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
  }
  function Ar(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var hn = {
      animationend: Ar('Animation', 'AnimationEnd'),
      animationiteration: Ar('Animation', 'AnimationIteration'),
      animationstart: Ar('Animation', 'AnimationStart'),
      transitionend: Ar('Transition', 'TransitionEnd'),
    },
    cu = {},
    Mo = {};
  K &&
    ((Mo = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    'TransitionEvent' in window || delete hn.transitionend.transition);
  function Vr(e) {
    if (cu[e]) return cu[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mo) return (cu[e] = t[n]);
    return e;
  }
  var Oo = Vr('animationend'),
    Do = Vr('animationiteration'),
    Io = Vr('animationstart'),
    Fo = Vr('transitionend'),
    Uo = new Map(),
    Ao =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Ot(e, t) {
    (Uo.set(e, t), H(t, [e]));
  }
  for (var fu = 0; fu < Ao.length; fu++) {
    var du = Ao[fu],
      $c = du.toLowerCase(),
      Wc = du[0].toUpperCase() + du.slice(1);
    Ot($c, 'on' + Wc);
  }
  (Ot(Oo, 'onAnimationEnd'),
    Ot(Do, 'onAnimationIteration'),
    Ot(Io, 'onAnimationStart'),
    Ot('dblclick', 'onDoubleClick'),
    Ot('focusin', 'onFocus'),
    Ot('focusout', 'onBlur'),
    Ot(Fo, 'onTransitionEnd'),
    J('onMouseEnter', ['mouseout', 'mouseover']),
    J('onMouseLeave', ['mouseout', 'mouseover']),
    J('onPointerEnter', ['pointerout', 'pointerover']),
    J('onPointerLeave', ['pointerout', 'pointerover']),
    H(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    H(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    H('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    H(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    H(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    H(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var bn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Qc = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(bn)
    );
  function Vo(e, t, n) {
    var r = e.type || 'unknown-event';
    ((e.currentTarget = n), $a(r, t, void 0, e), (e.currentTarget = null));
  }
  function Bo(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              p = o.currentTarget;
            if (((o = o.listener), s !== u && l.isPropagationStopped()))
              break e;
            (Vo(l, o, p), (u = s));
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (p = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            (Vo(l, o, p), (u = s));
          }
      }
    }
    if (Er) throw ((e = $l), (Er = !1), ($l = null), e);
  }
  function le(e, t) {
    var n = t[ku];
    n === void 0 && (n = t[ku] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ho(t, e, 2, !1), n.add(r));
  }
  function pu(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ho(n, e, r, t));
  }
  var Br = '_reactListening' + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Br]) {
      ((e[Br] = !0),
        re.forEach(function (n) {
          n !== 'selectionchange' && (Qc.has(n) || pu(n, !1, e), pu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), pu('selectionchange', !1, t));
    }
  }
  function Ho(e, t, n, r) {
    switch (co(t)) {
      case 1:
        var l = uc;
        break;
      case 4:
        l = ic;
        break;
      default:
        l = Zl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Hl ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function mu(e, t, n, r, l) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (((i = Gt(o)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Ki(function () {
      var p = u,
        g = Al(n),
        w = [];
      e: {
        var v = Uo.get(e);
        if (v !== void 0) {
          var x = bl,
            N = e;
          switch (e) {
            case 'keypress':
              if (Dr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              x = Sc;
              break;
            case 'focusin':
              ((N = 'focus'), (x = nu));
              break;
            case 'focusout':
              ((N = 'blur'), (x = nu));
              break;
            case 'beforeblur':
            case 'afterblur':
              x = nu;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              x = mo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              x = ac;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              x = Ec;
              break;
            case Oo:
            case Do:
            case Io:
              x = dc;
              break;
            case Fo:
              x = Nc;
              break;
            case 'scroll':
              x = oc;
              break;
            case 'wheel':
              x = zc;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              x = mc;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              x = vo;
          }
          var P = (t & 4) !== 0,
            he = !P && e === 'scroll',
            f = P ? (v !== null ? v + 'Capture' : null) : v;
          P = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k),
                f !== null &&
                  ((k = In(a, f)), k != null && P.push(tr(a, k, d)))),
              he)
            )
              break;
            a = a.return;
          }
          0 < P.length &&
            ((v = new x(v, N, null, n, g)), w.push({ event: v, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((v = e === 'mouseover' || e === 'pointerover'),
            (x = e === 'mouseout' || e === 'pointerout'),
            v &&
              n !== Ul &&
              (N = n.relatedTarget || n.fromElement) &&
              (Gt(N) || N[St]))
          )
            break e;
          if (
            (x || v) &&
            ((v =
              g.window === g
                ? g
                : (v = g.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            x
              ? ((N = n.relatedTarget || n.toElement),
                (x = p),
                (N = N ? Gt(N) : null),
                N !== null &&
                  ((he = Xt(N)), N !== he || (N.tag !== 5 && N.tag !== 6)) &&
                  (N = null))
              : ((x = null), (N = p)),
            x !== N)
          ) {
            if (
              ((P = mo),
              (k = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (a = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((P = vo),
                (k = 'onPointerLeave'),
                (f = 'onPointerEnter'),
                (a = 'pointer')),
              (he = x == null ? v : gn(x)),
              (d = N == null ? v : gn(N)),
              (v = new P(k, a + 'leave', x, n, g)),
              (v.target = he),
              (v.relatedTarget = d),
              (k = null),
              Gt(g) === p &&
                ((P = new P(f, a + 'enter', N, n, g)),
                (P.target = d),
                (P.relatedTarget = he),
                (k = P)),
              (he = k),
              x && N)
            )
              t: {
                for (P = x, f = N, a = 0, d = P; d; d = vn(d)) a++;
                for (d = 0, k = f; k; k = vn(k)) d++;
                for (; 0 < a - d; ) ((P = vn(P)), a--);
                for (; 0 < d - a; ) ((f = vn(f)), d--);
                for (; a--; ) {
                  if (P === f || (f !== null && P === f.alternate)) break t;
                  ((P = vn(P)), (f = vn(f)));
                }
                P = null;
              }
            else P = null;
            (x !== null && $o(w, v, x, P, !1),
              N !== null && he !== null && $o(w, he, N, P, !0));
          }
        }
        e: {
          if (
            ((v = p ? gn(p) : window),
            (x = v.nodeName && v.nodeName.toLowerCase()),
            x === 'select' || (x === 'input' && v.type === 'file'))
          )
            var z = Dc;
          else if (_o(v))
            if (Eo) z = Ac;
            else {
              z = Fc;
              var L = Ic;
            }
          else
            (x = v.nodeName) &&
              x.toLowerCase() === 'input' &&
              (v.type === 'checkbox' || v.type === 'radio') &&
              (z = Uc);
          if (z && (z = z(e, p))) {
            xo(w, z, n, g);
            break e;
          }
          (L && L(e, v, p),
            e === 'focusout' &&
              (L = v._wrapperState) &&
              L.controlled &&
              v.type === 'number' &&
              Ml(v, 'number', v.value));
        }
        switch (((L = p ? gn(p) : window), e)) {
          case 'focusin':
            (_o(L) || L.contentEditable === 'true') &&
              ((mn = L), (su = p), (qn = null));
            break;
          case 'focusout':
            qn = su = mn = null;
            break;
          case 'mousedown':
            au = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((au = !1), Ro(w, n, g));
            break;
          case 'selectionchange':
            if (Hc) break;
          case 'keydown':
          case 'keyup':
            Ro(w, n, g);
        }
        var T;
        if (lu)
          e: {
            switch (e) {
              case 'compositionstart':
                var D = 'onCompositionStart';
                break e;
              case 'compositionend':
                D = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                D = 'onCompositionUpdate';
                break e;
            }
            D = void 0;
          }
        else
          pn
            ? ko(e, n) && (D = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (D = 'onCompositionStart');
        (D &&
          (yo &&
            n.locale !== 'ko' &&
            (pn || D !== 'onCompositionStart'
              ? D === 'onCompositionEnd' && pn && (T = fo())
              : ((Mt = g),
                (ql = 'value' in Mt ? Mt.value : Mt.textContent),
                (pn = !0))),
          (L = Hr(p, D)),
          0 < L.length &&
            ((D = new ho(D, e, null, n, g)),
            w.push({ event: D, listeners: L }),
            T ? (D.data = T) : ((T = So(n)), T !== null && (D.data = T)))),
          (T = Tc ? jc(e, n) : Rc(e, n)) &&
            ((p = Hr(p, 'onBeforeInput')),
            0 < p.length &&
              ((g = new ho('onBeforeInput', 'beforeinput', null, n, g)),
              w.push({ event: g, listeners: p }),
              (g.data = T))));
      }
      Bo(w, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = In(e, n)),
        u != null && r.unshift(tr(e, u, l)),
        (u = In(e, t)),
        u != null && r.push(tr(e, u, l))),
        (e = e.return));
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function $o(e, t, n, r, l) {
    for (var u = t._reactName, i = []; n !== null && n !== r; ) {
      var o = n,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = In(n, u)), s != null && i.unshift(tr(n, s, o)))
          : l || ((s = In(n, u)), s != null && i.push(tr(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Kc = /\r\n?/g,
    Yc = /\u0000|\uFFFD/g;
  function Wo(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Kc,
        `
`
      )
      .replace(Yc, '');
  }
  function $r(e, t, n) {
    if (((t = Wo(t)), Wo(e) !== t && n)) throw Error(m(425));
  }
  function Wr() {}
  var hu = null,
    vu = null;
  function yu(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var gu = typeof setTimeout == 'function' ? setTimeout : void 0,
    Xc = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Qo = typeof Promise == 'function' ? Promise : void 0,
    Gc =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Qo < 'u'
          ? function (e) {
              return Qo.resolve(null).then(e).catch(Zc);
            }
          : gu;
  function Zc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wu(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            (e.removeChild(l), Qn(t));
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    Qn(t);
  }
  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Ko(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yn = Math.random().toString(36).slice(2),
    vt = '__reactFiber$' + yn,
    nr = '__reactProps$' + yn,
    St = '__reactContainer$' + yn,
    ku = '__reactEvents$' + yn,
    Jc = '__reactListeners$' + yn,
    qc = '__reactHandles$' + yn;
  function Gt(e) {
    var t = e[vt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[St] || n[vt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ko(e); e !== null; ) {
            if ((n = e[vt])) return n;
            e = Ko(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[vt] || e[St]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[nr] || null;
  }
  var Su = [],
    wn = -1;
  function It(e) {
    return { current: e };
  }
  function ue(e) {
    0 > wn || ((e.current = Su[wn]), (Su[wn] = null), wn--);
  }
  function ne(e, t) {
    (wn++, (Su[wn] = e.current), (e.current = t));
  }
  var Ft = {},
    Te = It(Ft),
    Ue = It(!1),
    Zt = Ft;
  function kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in n) l[u] = t[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ae(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Kr() {
    (ue(Ue), ue(Te));
  }
  function Yo(e, t, n) {
    if (Te.current !== Ft) throw Error(m(168));
    (ne(Te, t), ne(Ue, n));
  }
  function Xo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, te(e) || 'Unknown', l));
    return C({}, n, r);
  }
  function Yr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ft),
      (Zt = Te.current),
      ne(Te, e),
      ne(Ue, Ue.current),
      !0
    );
  }
  function Go(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Xo(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ue(Ue),
        ue(Te),
        ne(Te, e))
      : ue(Ue),
      ne(Ue, n));
  }
  var _t = null,
    Xr = !1,
    _u = !1;
  function Zo(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  function bc(e) {
    ((Xr = !0), Zo(e));
  }
  function Ut() {
    if (!_u && _t !== null) {
      _u = !0;
      var e = 0,
        t = Z;
      try {
        var n = _t;
        for (Z = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((_t = null), (Xr = !1));
      } catch (l) {
        throw (_t !== null && (_t = _t.slice(e + 1)), Ji(Wl, Ut), l);
      } finally {
        ((Z = t), (_u = !1));
      }
    }
    return null;
  }
  var Sn = [],
    _n = 0,
    Gr = null,
    Zr = 0,
    qe = [],
    be = 0,
    Jt = null,
    xt = 1,
    Et = '';
  function qt(e, t) {
    ((Sn[_n++] = Zr), (Sn[_n++] = Gr), (Gr = e), (Zr = t));
  }
  function Jo(e, t, n) {
    ((qe[be++] = xt), (qe[be++] = Et), (qe[be++] = Jt), (Jt = e));
    var r = xt;
    e = Et;
    var l = 32 - it(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - it(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (xt = (1 << (32 - it(t) + l)) | (n << l) | r),
        (Et = u + e));
    } else ((xt = (1 << u) | (n << l) | r), (Et = e));
  }
  function xu(e) {
    e.return !== null && (qt(e, 1), Jo(e, 1, 0));
  }
  function Eu(e) {
    for (; e === Gr; )
      ((Gr = Sn[--_n]), (Sn[_n] = null), (Zr = Sn[--_n]), (Sn[_n] = null));
    for (; e === Jt; )
      ((Jt = qe[--be]),
        (qe[be] = null),
        (Et = qe[--be]),
        (qe[be] = null),
        (xt = qe[--be]),
        (qe[be] = null));
  }
  var Ye = null,
    Xe = null,
    oe = !1,
    st = null;
  function qo(e, t) {
    var n = rt(5, null, null, 0);
    ((n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function bo(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ye = e), (Xe = Dt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ye = e), (Xe = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: xt, overflow: Et } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = rt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ye = e),
              (Xe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Cu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Nu(e) {
    if (oe) {
      var t = Xe;
      if (t) {
        var n = t;
        if (!bo(e, t)) {
          if (Cu(e)) throw Error(m(418));
          t = Dt(n.nextSibling);
          var r = Ye;
          t && bo(e, t)
            ? qo(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ye = e));
        }
      } else {
        if (Cu(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ye = e));
      }
    }
  }
  function es(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ye = e;
  }
  function Jr(e) {
    if (e !== Ye) return !1;
    if (!oe) return (es(e), (oe = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !yu(e.type, e.memoizedProps))),
      t && (t = Xe))
    ) {
      if (Cu(e)) throw (ts(), Error(m(418)));
      for (; t; ) (qo(e, t), (t = Dt(t.nextSibling)));
    }
    if ((es(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                Xe = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Xe = null;
      }
    } else Xe = Ye ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    for (var e = Xe; e; ) e = Dt(e.nextSibling);
  }
  function xn() {
    ((Xe = Ye = null), (oe = !1));
  }
  function Pu(e) {
    st === null ? (st = [e]) : st.push(e);
  }
  var ef = se.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (i) {
              var o = l.refs;
              i === null ? delete o[u] : (o[u] = i);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != 'string') throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function qr(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      )
    );
  }
  function ns(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rs(e) {
    function t(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function n(f, a) {
      if (!e) return null;
      for (; a !== null; ) (t(f, a), (a = a.sibling));
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        (a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling));
      return f;
    }
    function l(f, a) {
      return ((f = Kt(f, a)), (f.index = 0), (f.sibling = null), f);
    }
    function u(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function i(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function o(f, a, d, k) {
      return a === null || a.tag !== 6
        ? ((a = gi(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var z = d.type;
      return z === Ne
        ? g(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == 'object' &&
                z !== null &&
                z.$$typeof === Fe &&
                ns(z) === a.type))
          ? ((k = l(a, d.props)), (k.ref = lr(f, a, d)), (k.return = f), k)
          : ((k = _l(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = lr(f, a, d)),
            (k.return = f),
            k);
    }
    function p(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = wi(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function g(f, a, d, k, z) {
      return a === null || a.tag !== 7
        ? ((a = on(d, f.mode, k, z)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function w(f, a, d) {
      if ((typeof a == 'string' && a !== '') || typeof a == 'number')
        return ((a = gi('' + a, f.mode, d)), (a.return = f), a);
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case Ce:
            return (
              (d = _l(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = lr(f, null, a)),
              (d.return = f),
              d
            );
          case ye:
            return ((a = wi(a, f.mode, d)), (a.return = f), a);
          case Fe:
            var k = a._init;
            return w(f, k(a._payload), d);
        }
        if (Mn(a) || O(a))
          return ((a = on(a, f.mode, d, null)), (a.return = f), a);
        qr(f, a);
      }
      return null;
    }
    function v(f, a, d, k) {
      var z = a !== null ? a.key : null;
      if ((typeof d == 'string' && d !== '') || typeof d == 'number')
        return z !== null ? null : o(f, a, '' + d, k);
      if (typeof d == 'object' && d !== null) {
        switch (d.$$typeof) {
          case Ce:
            return d.key === z ? s(f, a, d, k) : null;
          case ye:
            return d.key === z ? p(f, a, d, k) : null;
          case Fe:
            return ((z = d._init), v(f, a, z(d._payload), k));
        }
        if (Mn(d) || O(d)) return z !== null ? null : g(f, a, d, k, null);
        qr(f, d);
      }
      return null;
    }
    function x(f, a, d, k, z) {
      if ((typeof k == 'string' && k !== '') || typeof k == 'number')
        return ((f = f.get(d) || null), o(a, f, '' + k, z));
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case Ce:
            return (
              (f = f.get(k.key === null ? d : k.key) || null),
              s(a, f, k, z)
            );
          case ye:
            return (
              (f = f.get(k.key === null ? d : k.key) || null),
              p(a, f, k, z)
            );
          case Fe:
            var L = k._init;
            return x(f, a, d, L(k._payload), z);
        }
        if (Mn(k) || O(k)) return ((f = f.get(d) || null), g(a, f, k, z, null));
        qr(a, k);
      }
      return null;
    }
    function N(f, a, d, k) {
      for (
        var z = null, L = null, T = a, D = (a = 0), xe = null;
        T !== null && D < d.length;
        D++
      ) {
        T.index > D ? ((xe = T), (T = null)) : (xe = T.sibling);
        var Q = v(f, T, d[D], k);
        if (Q === null) {
          T === null && (T = xe);
          break;
        }
        (e && T && Q.alternate === null && t(f, T),
          (a = u(Q, a, D)),
          L === null ? (z = Q) : (L.sibling = Q),
          (L = Q),
          (T = xe));
      }
      if (D === d.length) return (n(f, T), oe && qt(f, D), z);
      if (T === null) {
        for (; D < d.length; D++)
          ((T = w(f, d[D], k)),
            T !== null &&
              ((a = u(T, a, D)),
              L === null ? (z = T) : (L.sibling = T),
              (L = T)));
        return (oe && qt(f, D), z);
      }
      for (T = r(f, T); D < d.length; D++)
        ((xe = x(T, f, D, d[D], k)),
          xe !== null &&
            (e &&
              xe.alternate !== null &&
              T.delete(xe.key === null ? D : xe.key),
            (a = u(xe, a, D)),
            L === null ? (z = xe) : (L.sibling = xe),
            (L = xe)));
      return (
        e &&
          T.forEach(function (Yt) {
            return t(f, Yt);
          }),
        oe && qt(f, D),
        z
      );
    }
    function P(f, a, d, k) {
      var z = O(d);
      if (typeof z != 'function') throw Error(m(150));
      if (((d = z.call(d)), d == null)) throw Error(m(151));
      for (
        var L = (z = null), T = a, D = (a = 0), xe = null, Q = d.next();
        T !== null && !Q.done;
        D++, Q = d.next()
      ) {
        T.index > D ? ((xe = T), (T = null)) : (xe = T.sibling);
        var Yt = v(f, T, Q.value, k);
        if (Yt === null) {
          T === null && (T = xe);
          break;
        }
        (e && T && Yt.alternate === null && t(f, T),
          (a = u(Yt, a, D)),
          L === null ? (z = Yt) : (L.sibling = Yt),
          (L = Yt),
          (T = xe));
      }
      if (Q.done) return (n(f, T), oe && qt(f, D), z);
      if (T === null) {
        for (; !Q.done; D++, Q = d.next())
          ((Q = w(f, Q.value, k)),
            Q !== null &&
              ((a = u(Q, a, D)),
              L === null ? (z = Q) : (L.sibling = Q),
              (L = Q)));
        return (oe && qt(f, D), z);
      }
      for (T = r(f, T); !Q.done; D++, Q = d.next())
        ((Q = x(T, f, D, Q.value, k)),
          Q !== null &&
            (e && Q.alternate !== null && T.delete(Q.key === null ? D : Q.key),
            (a = u(Q, a, D)),
            L === null ? (z = Q) : (L.sibling = Q),
            (L = Q)));
      return (
        e &&
          T.forEach(function (Of) {
            return t(f, Of);
          }),
        oe && qt(f, D),
        z
      );
    }
    function he(f, a, d, k) {
      if (
        (typeof d == 'object' &&
          d !== null &&
          d.type === Ne &&
          d.key === null &&
          (d = d.props.children),
        typeof d == 'object' && d !== null)
      ) {
        switch (d.$$typeof) {
          case Ce:
            e: {
              for (var z = d.key, L = a; L !== null; ) {
                if (L.key === z) {
                  if (((z = d.type), z === Ne)) {
                    if (L.tag === 7) {
                      (n(f, L.sibling),
                        (a = l(L, d.props.children)),
                        (a.return = f),
                        (f = a));
                      break e;
                    }
                  } else if (
                    L.elementType === z ||
                    (typeof z == 'object' &&
                      z !== null &&
                      z.$$typeof === Fe &&
                      ns(z) === L.type)
                  ) {
                    (n(f, L.sibling),
                      (a = l(L, d.props)),
                      (a.ref = lr(f, L, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, L);
                  break;
                } else t(f, L);
                L = L.sibling;
              }
              d.type === Ne
                ? ((a = on(d.props.children, f.mode, k, d.key)),
                  (a.return = f),
                  (f = a))
                : ((k = _l(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = lr(f, a, d)),
                  (k.return = f),
                  (f = k));
            }
            return i(f);
          case ye:
            e: {
              for (L = d.key; a !== null; ) {
                if (a.key === L)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    (n(f, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = f),
                      (f = a));
                    break e;
                  } else {
                    n(f, a);
                    break;
                  }
                else t(f, a);
                a = a.sibling;
              }
              ((a = wi(d, f.mode, k)), (a.return = f), (f = a));
            }
            return i(f);
          case Fe:
            return ((L = d._init), he(f, a, L(d._payload), k));
        }
        if (Mn(d)) return N(f, a, d, k);
        if (O(d)) return P(f, a, d, k);
        qr(f, d);
      }
      return (typeof d == 'string' && d !== '') || typeof d == 'number'
        ? ((d = '' + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = gi(d, f.mode, k)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return he;
  }
  var En = rs(!0),
    ls = rs(!1),
    br = It(null),
    el = null,
    Cn = null,
    zu = null;
  function Lu() {
    zu = Cn = el = null;
  }
  function Tu(e) {
    var t = br.current;
    (ue(br), (e._currentValue = t));
  }
  function ju(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Nn(e, t) {
    ((el = e),
      (zu = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ve = !0), (e.firstContext = null)));
  }
  function et(e) {
    var t = e._currentValue;
    if (zu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (el === null) throw Error(m(308));
        ((Cn = e), (el.dependencies = { lanes: 0, firstContext: e }));
      } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Ru(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function us(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ru(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ct(e, r)
    );
  }
  function Ct(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var At = !1;
  function Mu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function is(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Nt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (B & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ct(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Ru(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ct(e, n)
    );
  }
  function tl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  function os(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (u === null ? (l = u = i) : (u = u.next = i), (n = n.next));
        } while (n !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    At = !1;
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        p = s.next;
      ((s.next = null), i === null ? (u = p) : (i.next = p), (i = s));
      var g = e.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (o = g.lastBaseUpdate),
        o !== i &&
          (o === null ? (g.firstBaseUpdate = p) : (o.next = p),
          (g.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var w = l.baseState;
      ((i = 0), (g = p = s = null), (o = u));
      do {
        var v = o.lane,
          x = o.eventTime;
        if ((r & v) === v) {
          g !== null &&
            (g = g.next =
              {
                eventTime: x,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var N = e,
              P = o;
            switch (((v = t), (x = n), P.tag)) {
              case 1:
                if (((N = P.payload), typeof N == 'function')) {
                  w = N.call(x, w, v);
                  break e;
                }
                w = N;
                break e;
              case 3:
                N.flags = (N.flags & -65537) | 128;
              case 0:
                if (
                  ((N = P.payload),
                  (v = typeof N == 'function' ? N.call(x, w, v) : N),
                  v == null)
                )
                  break e;
                w = C({}, w, v);
                break e;
              case 2:
                At = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (v = l.effects),
            v === null ? (l.effects = [o]) : v.push(o));
        } else
          ((x = {
            eventTime: x,
            lane: v,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            g === null ? ((p = g = x), (s = w)) : (g = g.next = x),
            (i |= v));
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          ((v = o),
            (o = v.next),
            (v.next = null),
            (l.lastBaseUpdate = v),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (g === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = g),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((i |= l.lane), (l = l.next));
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      ((nn |= i), (e.lanes = i), (e.memoizedState = w));
    }
  }
  function ss(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function'))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var ur = {},
    yt = It(ur),
    ir = It(ur),
    or = It(ur);
  function en(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function Ou(e, t) {
    switch ((ne(or, t), ne(ir, e), ne(yt, ur), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dl(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Dl(t, e)));
    }
    (ue(yt), ne(yt, t));
  }
  function Pn() {
    (ue(yt), ue(ir), ue(or));
  }
  function as(e) {
    en(or.current);
    var t = en(yt.current),
      n = Dl(t, e.type);
    t !== n && (ne(ir, e), ne(yt, n));
  }
  function Du(e) {
    ir.current === e && (ue(yt), ue(ir));
  }
  var ae = It(0);
  function rl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Iu = [];
  function Fu() {
    for (var e = 0; e < Iu.length; e++)
      Iu[e]._workInProgressVersionPrimary = null;
    Iu.length = 0;
  }
  var ll = se.ReactCurrentDispatcher,
    Uu = se.ReactCurrentBatchConfig,
    tn = 0,
    ce = null,
    ge = null,
    Se = null,
    ul = !1,
    sr = !1,
    ar = 0,
    tf = 0;
  function je() {
    throw Error(m(321));
  }
  function Au(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!ot(e[n], t[n])) return !1;
    return !0;
  }
  function Vu(e, t, n, r, l, u) {
    if (
      ((tn = u),
      (ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? uf : of),
      (e = n(r, l)),
      sr)
    ) {
      u = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= u)) throw Error(m(301));
        ((u += 1),
          (Se = ge = null),
          (t.updateQueue = null),
          (ll.current = sf),
          (e = n(r, l)));
      } while (sr);
    }
    if (
      ((ll.current = sl),
      (t = ge !== null && ge.next !== null),
      (tn = 0),
      (Se = ge = ce = null),
      (ul = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Bu() {
    var e = ar !== 0;
    return ((ar = 0), e);
  }
  function gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Se === null ? (ce.memoizedState = Se = e) : (Se = Se.next = e), Se);
  }
  function tt() {
    if (ge === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ge.next;
    var t = Se === null ? ce.memoizedState : Se.next;
    if (t !== null) ((Se = t), (ge = e));
    else {
      if (e === null) throw Error(m(310));
      ((ge = e),
        (e = {
          memoizedState: ge.memoizedState,
          baseState: ge.baseState,
          baseQueue: ge.baseQueue,
          queue: ge.queue,
          next: null,
        }),
        Se === null ? (ce.memoizedState = Se = e) : (Se = Se.next = e));
    }
    return Se;
  }
  function cr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Hu(e) {
    var t = tt(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = ge,
      l = r.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        ((l.next = u.next), (u.next = i));
      }
      ((r.baseQueue = l = u), (n.pending = null));
    }
    if (l !== null) {
      ((u = l.next), (r = r.baseState));
      var o = (i = null),
        s = null,
        p = u;
      do {
        var g = p.lane;
        if ((tn & g) === g)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action)));
        else {
          var w = {
            lane: g,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((o = s = w), (i = r)) : (s = s.next = w),
            (ce.lanes |= g),
            (nn |= g));
        }
        p = p.next;
      } while (p !== null && p !== u);
      (s === null ? (i = r) : (s.next = o),
        ot(r, t.memoizedState) || (Ve = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (ce.lanes |= u), (nn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $u(e) {
    var t = tt(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = (l = l.next);
      do ((u = e(u, i.action)), (i = i.next));
      while (i !== l);
      (ot(u, t.memoizedState) || (Ve = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, r];
  }
  function cs() {}
  function fs(e, t) {
    var n = ce,
      r = tt(),
      l = t(),
      u = !ot(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Ve = !0)),
      (r = r.queue),
      Wu(ms.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (Se !== null && Se.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        fr(9, ps.bind(null, n, r, l, t), void 0, null),
        _e === null)
      )
        throw Error(m(349));
      (tn & 30) !== 0 || ds(n, t, l);
    }
    return l;
  }
  function ds(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ce.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ps(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), hs(t) && vs(e));
  }
  function ms(e, t, n) {
    return n(function () {
      hs(t) && vs(e);
    });
  }
  function hs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ot(e, n);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var t = Ct(e, 1);
    t !== null && dt(t, e, 1, -1);
  }
  function ys(e) {
    var t = gt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = lf.bind(null, ce, e)),
      [t.memoizedState, e]
    );
  }
  function fr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function gs() {
    return tt().memoizedState;
  }
  function il(e, t, n, r) {
    var l = gt();
    ((ce.flags |= e),
      (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ol(e, t, n, r) {
    var l = tt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ge !== null) {
      var i = ge.memoizedState;
      if (((u = i.destroy), r !== null && Au(r, i.deps))) {
        l.memoizedState = fr(t, n, u, r);
        return;
      }
    }
    ((ce.flags |= e), (l.memoizedState = fr(1 | t, n, u, r)));
  }
  function ws(e, t) {
    return il(8390656, 8, e, t);
  }
  function Wu(e, t) {
    return ol(2048, 8, e, t);
  }
  function ks(e, t) {
    return ol(4, 2, e, t);
  }
  function Ss(e, t) {
    return ol(4, 4, e, t);
  }
  function _s(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function xs(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      ol(4, 4, _s.bind(null, t, e), n)
    );
  }
  function Qu() {}
  function Es(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Cs(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ns(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n))
      : (ot(n, t) ||
          ((n = to()), (ce.lanes |= n), (nn |= n), (e.baseState = !0)),
        t);
  }
  function nf(e, t) {
    var n = Z;
    ((Z = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Uu.transition;
    Uu.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Z = n), (Uu.transition = r));
    }
  }
  function Ps() {
    return tt().memoizedState;
  }
  function rf(e, t, n) {
    var r = Wt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zs(e))
    )
      Ls(t, n);
    else if (((n = us(e, t, n, r)), n !== null)) {
      var l = Ie();
      (dt(n, e, r, l), Ts(n, t, r));
    }
  }
  function lf(e, t, n) {
    var r = Wt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (zs(e)) Ls(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            o = u(i, n);
          if (((l.hasEagerState = !0), (l.eagerState = o), ot(o, i))) {
            var s = t.interleaved;
            (s === null
              ? ((l.next = l), Ru(t))
              : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = us(e, t, l, r)),
        n !== null && ((l = Ie()), dt(n, e, r, l), Ts(n, t, r)));
    }
  }
  function zs(e) {
    var t = e.alternate;
    return e === ce || (t !== null && t === ce);
  }
  function Ls(e, t) {
    sr = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Ts(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n));
    }
  }
  var sl = {
      readContext: et,
      useCallback: je,
      useContext: je,
      useEffect: je,
      useImperativeHandle: je,
      useInsertionEffect: je,
      useLayoutEffect: je,
      useMemo: je,
      useReducer: je,
      useRef: je,
      useState: je,
      useDebugValue: je,
      useDeferredValue: je,
      useTransition: je,
      useMutableSource: je,
      useSyncExternalStore: je,
      useId: je,
      unstable_isNewReconciler: !1,
    },
    uf = {
      readContext: et,
      useCallback: function (e, t) {
        return ((gt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: et,
      useEffect: ws,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          il(4194308, 4, _s.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return il(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = gt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = gt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = rf.bind(null, ce, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = gt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ys,
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        return (gt().memoizedState = e);
      },
      useTransition: function () {
        var e = ys(!1),
          t = e[0];
        return ((e = nf.bind(null, e[1])), (gt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ce,
          l = gt();
        if (oe) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), _e === null)) throw Error(m(349));
          (tn & 30) !== 0 || ds(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          ws(ms.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          fr(9, ps.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = gt(),
          t = _e.identifierPrefix;
        if (oe) {
          var n = Et,
            r = xt;
          ((n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = ar++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':'));
        } else ((n = tf++), (t = ':' + t + 'r' + n.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: et,
      useCallback: Es,
      useContext: et,
      useEffect: Wu,
      useImperativeHandle: xs,
      useInsertionEffect: ks,
      useLayoutEffect: Ss,
      useMemo: Cs,
      useReducer: Hu,
      useRef: gs,
      useState: function () {
        return Hu(cr);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        var t = tt();
        return Ns(t, ge.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(cr)[0],
          t = tt().memoizedState;
        return [e, t];
      },
      useMutableSource: cs,
      useSyncExternalStore: fs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: et,
      useCallback: Es,
      useContext: et,
      useEffect: Wu,
      useImperativeHandle: xs,
      useInsertionEffect: ks,
      useLayoutEffect: Ss,
      useMemo: Cs,
      useReducer: $u,
      useRef: gs,
      useState: function () {
        return $u(cr);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e) {
        var t = tt();
        return ge === null ? (t.memoizedState = e) : Ns(t, ge.memoizedState, e);
      },
      useTransition: function () {
        var e = $u(cr)[0],
          t = tt().memoizedState;
        return [e, t];
      },
      useMutableSource: cs,
      useSyncExternalStore: fs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function at(e, t) {
    if (e && e.defaultProps) {
      ((t = C({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ku(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : C({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ie(),
        l = Wt(e),
        u = Nt(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = Vt(e, u, l)),
        t !== null && (dt(t, e, l, r), tl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ie(),
        l = Wt(e),
        u = Nt(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Vt(e, u, l)),
        t !== null && (dt(t, e, l, r), tl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ie(),
        r = Wt(e),
        l = Nt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Vt(e, l, r)),
        t !== null && (dt(t, e, r, n), tl(t, e, r)));
    },
  };
  function js(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, u)
          : !0
    );
  }
  function Rs(e, t, n) {
    var r = !1,
      l = Ft,
      u = t.contextType;
    return (
      typeof u == 'object' && u !== null
        ? (u = et(u))
        : ((l = Ae(t) ? Zt : Te.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? kn(e, l) : Ft)),
      (t = new t(n, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function Ms(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Yu(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mu(e));
    var u = t.contextType;
    (typeof u == 'object' && u !== null
      ? (l.context = et(u))
      : ((u = Ae(t) ? Zt : Te.current), (l.context = kn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == 'function' && (Ku(e, t, u, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && al.enqueueReplaceState(l, l.state, null),
        nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function zn(e, t) {
    try {
      var n = '',
        r = t;
      do ((n += $(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Xu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Gu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var af = typeof WeakMap == 'function' ? WeakMap : Map;
  function Os(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (ci = r)), Gu(e, t));
      }),
      n
    );
  }
  function Ds(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Gu(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == 'function' &&
        (n.callback = function () {
          (Gu(e, t),
            typeof r != 'function' &&
              (Ht === null ? (Ht = new Set([this])) : Ht.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : '',
          });
        }),
      n
    );
  }
  function Is(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new af();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = xf.bind(null, e, t, n)), t.then(e, e));
  }
  function Fs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Us(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Nt(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var cf = se.ReactCurrentOwner,
    Ve = !1;
  function De(e, t, n, r) {
    t.child = e === null ? ls(t, null, n, r) : En(t, e.child, n, r);
  }
  function As(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Nn(t, l),
      (r = Vu(e, t, n, r, u, l)),
      (n = Bu()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Pt(e, t, l))
        : (oe && n && xu(t), (t.flags |= 1), De(e, t, r, l), t.child)
    );
  }
  function Vs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' &&
        !yi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Bs(e, t, u, r, l))
        : ((e = _l(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref)
      )
        return Pt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Kt(u, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Bs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref)
        if (((Ve = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ve = !0);
        else return ((t.lanes = e.lanes), Pt(e, t, l));
    }
    return Zu(e, t, n, r, l);
  }
  function Hs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ne(Tn, Ge),
          (Ge |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ne(Tn, Ge),
            (Ge |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : n),
          ne(Tn, Ge),
          (Ge |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ne(Tn, Ge),
        (Ge |= r));
    return (De(e, t, l, n), t.child);
  }
  function $s(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Zu(e, t, n, r, l) {
    var u = Ae(n) ? Zt : Te.current;
    return (
      (u = kn(t, u)),
      Nn(t, l),
      (n = Vu(e, t, n, r, u, l)),
      (r = Bu()),
      e !== null && !Ve
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Pt(e, t, l))
        : (oe && r && xu(t), (t.flags |= 1), De(e, t, n, l), t.child)
    );
  }
  function Ws(e, t, n, r, l) {
    if (Ae(n)) {
      var u = !0;
      Yr(t);
    } else u = !1;
    if ((Nn(t, l), t.stateNode === null))
      (fl(e, t), Rs(t, n, r), Yu(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == 'object' && p !== null
        ? (p = et(p))
        : ((p = Ae(n) ? Zt : Te.current), (p = kn(t, p)));
      var g = n.getDerivedStateFromProps,
        w =
          typeof g == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function';
      (w ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((o !== r || s !== p) && Ms(t, i, r, p)),
        (At = !1));
      var v = t.memoizedState;
      ((i.state = v),
        nl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || v !== s || Ue.current || At
          ? (typeof g == 'function' && (Ku(t, n, g, r), (s = t.memoizedState)),
            (o = At || js(t, n, o, r, v, s, p))
              ? (w ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = p),
            (r = o))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((i = t.stateNode),
        is(e, t),
        (o = t.memoizedProps),
        (p = t.type === t.elementType ? o : at(t.type, o)),
        (i.props = p),
        (w = t.pendingProps),
        (v = i.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = et(s))
          : ((s = Ae(n) ? Zt : Te.current), (s = kn(t, s))));
      var x = n.getDerivedStateFromProps;
      ((g =
        typeof x == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function') ||
        (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof i.componentWillReceiveProps != 'function') ||
        ((o !== w || v !== s) && Ms(t, i, r, s)),
        (At = !1),
        (v = t.memoizedState),
        (i.state = v),
        nl(t, r, i, l));
      var N = t.memoizedState;
      o !== w || v !== N || Ue.current || At
        ? (typeof x == 'function' && (Ku(t, n, x, r), (N = t.memoizedState)),
          (p = At || js(t, n, p, r, v, N, s) || !1)
            ? (g ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' &&
                  i.componentWillUpdate(r, N, s),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(r, N, s)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (o === e.memoizedProps && v === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = N)),
          (i.props = r),
          (i.state = N),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != 'function' ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (o === e.memoizedProps && v === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ju(e, t, n, r, u, l);
  }
  function Ju(e, t, n, r, l, u) {
    $s(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Go(t, n, !1), Pt(e, t, u));
    ((r = t.stateNode), (cf.current = t));
    var o =
      i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = En(t, e.child, null, u)), (t.child = En(t, null, o, u)))
        : De(e, t, o, u),
      (t.memoizedState = r.state),
      l && Go(t, n, !0),
      t.child
    );
  }
  function Qs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Yo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Yo(e, t.context, !1),
      Ou(e, t.containerInfo));
  }
  function Ks(e, t, n, r, l) {
    return (xn(), Pu(l), (t.flags |= 256), De(e, t, n, r), t.child);
  }
  var qu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ys(e, t, n) {
    var r = t.pendingProps,
      l = ae.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ne(ae, l & 1),
      e === null)
    )
      return (
        Nu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((i = r.children),
            (e = r.fallback),
            u
              ? ((r = t.mode),
                (u = t.child),
                (i = { mode: 'hidden', children: i }),
                (r & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = i))
                  : (u = xl(i, r, 0, null)),
                (e = on(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = bu(n)),
                (t.memoizedState = qu),
                e)
              : ei(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return ff(e, t, i, r, o, l, n);
    if (u) {
      ((u = r.fallback), (i = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: 'hidden', children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (t.deletions = null))
          : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Kt(o, u)) : ((u = on(u, i, n, null)), (u.flags |= 2)),
        (u.return = t),
        (r.return = t),
        (r.sibling = u),
        (t.child = r),
        (r = u),
        (u = t.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? bu(n)
            : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions,
              }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = qu),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Kt(u, { mode: 'visible', children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ei(e, t) {
    return (
      (t = xl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && Pu(r),
      En(t, e.child, null, n),
      (e = ei(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ff(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Xu(Error(m(422)))), cl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = xl({ mode: 'visible', children: r.children }, l, 0, null)),
            (u = on(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && En(t, e.child, null, i),
            (t.child.memoizedState = bu(i)),
            (t.memoizedState = qu),
            u);
    if ((t.mode & 1) === 0) return cl(e, t, i, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return (
        (r = o),
        (u = Error(m(419))),
        (r = Xu(u, r, void 0)),
        cl(e, t, i, r)
      );
    }
    if (((o = (i & e.childLanes) !== 0), Ve || o)) {
      if (((r = _e), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), Ct(e, l), dt(r, e, l, -1)));
      }
      return (vi(), (r = Xu(Error(m(421)))), cl(e, t, i, r));
    }
    return l.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ef.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (Xe = Dt(l.nextSibling)),
        (Ye = t),
        (oe = !0),
        (st = null),
        e !== null &&
          ((qe[be++] = xt),
          (qe[be++] = Et),
          (qe[be++] = Jt),
          (xt = e.id),
          (Et = e.overflow),
          (Jt = t)),
        (t = ei(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), ju(e.return, t, n));
  }
  function ti(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = n),
        (u.tailMode = l));
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((De(e, t, r.children, n), (r = ae.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
          else if (e.tag === 19) Xs(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((ne(ae, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && rl(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ti(t, !1, l, n, u));
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ti(t, !0, n, null, u);
          break;
        case 'together':
          ti(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Pt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = Kt(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function df(e, t, n) {
    switch (t.tag) {
      case 3:
        (Qs(t), xn());
        break;
      case 5:
        as(t);
        break;
      case 1:
        Ae(t.type) && Yr(t);
        break;
      case 4:
        Ou(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ne(br, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ne(ae, ae.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ys(e, t, n)
              : (ne(ae, ae.current & 1),
                (e = Pt(e, t, n)),
                e !== null ? e.sibling : null);
        ne(ae, ae.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Gs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ne(ae, ae.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Hs(e, t, n));
    }
    return Pt(e, t, n);
  }
  var Zs, ni, Js, qs;
  ((Zs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (ni = function () {}),
    (Js = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(yt.current));
        var u = null;
        switch (n) {
          case 'input':
            ((l = jl(e, l)), (r = jl(e, r)), (u = []));
            break;
          case 'select':
            ((l = C({}, l, { value: void 0 })),
              (r = C({}, r, { value: void 0 })),
              (u = []));
            break;
          case 'textarea':
            ((l = Ol(e, l)), (r = Ol(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != 'function' &&
              typeof r.onClick == 'function' &&
              (e.onclick = Wr);
        }
        Il(n, r);
        var i;
        n = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === 'style') {
              var o = l[p];
              for (i in o) o.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
            } else
              p !== 'dangerouslySetInnerHTML' &&
                p !== 'children' &&
                p !== 'suppressContentEditableWarning' &&
                p !== 'suppressHydrationWarning' &&
                p !== 'autoFocus' &&
                (M.hasOwnProperty(p)
                  ? u || (u = [])
                  : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((o = l?.[p]),
            r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          )
            if (p === 'style')
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ''));
                for (i in s)
                  s.hasOwnProperty(i) &&
                    o[i] !== s[i] &&
                    (n || (n = {}), (n[i] = s[i]));
              } else (n || (u || (u = []), u.push(p, n)), (n = s));
            else
              p === 'dangerouslySetInnerHTML'
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(p, s))
                : p === 'children'
                  ? (typeof s != 'string' && typeof s != 'number') ||
                    (u = u || []).push(p, '' + s)
                  : p !== 'suppressContentEditableWarning' &&
                    p !== 'suppressHydrationWarning' &&
                    (M.hasOwnProperty(p)
                      ? (s != null && p === 'onScroll' && le('scroll', e),
                        u || o === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        n && (u = u || []).push('style', n);
        var p = u;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (qs = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function dr(e, t) {
    if (!oe)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function pf(e, t, n) {
    var r = t.pendingProps;
    switch ((Eu(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Re(t), null);
      case 1:
        return (Ae(t.type) && Kr(), Re(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          ue(Ue),
          ue(Te),
          Fu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), st !== null && (pi(st), (st = null)))),
          ni(e, t),
          Re(t),
          null
        );
      case 5:
        Du(t);
        var l = en(or.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Js(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Re(t), null);
          }
          if (((e = en(yt.current)), Jr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[vt] = t), (r[nr] = u), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                (le('cancel', r), le('close', r));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                le('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < bn.length; l++) le(bn[l], r);
                break;
              case 'source':
                le('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                (le('error', r), le('load', r));
                break;
              case 'details':
                le('toggle', r);
                break;
              case 'input':
                (ji(r, u), le('invalid', r));
                break;
              case 'select':
                ((r._wrapperState = { wasMultiple: !!u.multiple }),
                  le('invalid', r));
                break;
              case 'textarea':
                (Oi(r, u), le('invalid', r));
            }
            (Il(n, u), (l = null));
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === 'children'
                  ? typeof o == 'string'
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, o, e),
                      (l = ['children', o]))
                    : typeof o == 'number' &&
                      r.textContent !== '' + o &&
                      (u.suppressHydrationWarning !== !0 &&
                        $r(r.textContent, o, e),
                      (l = ['children', '' + o]))
                  : M.hasOwnProperty(i) &&
                    o != null &&
                    i === 'onScroll' &&
                    le('scroll', r);
              }
            switch (n) {
              case 'input':
                (kr(r), Mi(r, u, !0));
                break;
              case 'textarea':
                (kr(r), Ii(r));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof u.onClick == 'function' && (r.onclick = Wr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Fi(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = i.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = i.createElement(n, { is: r.is }))
                    : ((e = i.createElement(n)),
                      n === 'select' &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = !0)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[vt] = t),
              (e[nr] = r),
              Zs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Fl(n, r)), n)) {
                case 'dialog':
                  (le('cancel', e), le('close', e), (l = r));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (le('load', e), (l = r));
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < bn.length; l++) le(bn[l], e);
                  l = r;
                  break;
                case 'source':
                  (le('error', e), (l = r));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (le('error', e), le('load', e), (l = r));
                  break;
                case 'details':
                  (le('toggle', e), (l = r));
                  break;
                case 'input':
                  (ji(e, r), (l = jl(e, r)), le('invalid', e));
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = C({}, r, { value: void 0 })),
                    le('invalid', e));
                  break;
                case 'textarea':
                  (Oi(e, r), (l = Ol(e, r)), le('invalid', e));
                  break;
                default:
                  l = r;
              }
              (Il(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === 'style'
                    ? Vi(e, s)
                    : u === 'dangerouslySetInnerHTML'
                      ? ((s = s ? s.__html : void 0), s != null && Ui(e, s))
                      : u === 'children'
                        ? typeof s == 'string'
                          ? (n !== 'textarea' || s !== '') && On(e, s)
                          : typeof s == 'number' && On(e, '' + s)
                        : u !== 'suppressContentEditableWarning' &&
                          u !== 'suppressHydrationWarning' &&
                          u !== 'autoFocus' &&
                          (M.hasOwnProperty(u)
                            ? s != null && u === 'onScroll' && le('scroll', e)
                            : s != null && j(e, u, s, i));
                }
              switch (n) {
                case 'input':
                  (kr(e), Mi(e, r, !1));
                  break;
                case 'textarea':
                  (kr(e), Ii(e));
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + G(r.value));
                  break;
                case 'select':
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? sn(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        sn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = Wr);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Re(t), null);
      case 6:
        if (e && t.stateNode != null) qs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(m(166));
          if (((n = en(or.current)), en(yt.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[vt] = t),
              (u = r.nodeValue !== n) && ((e = Ye), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[vt] = t),
              (t.stateNode = r));
        }
        return (Re(t), null);
      case 13:
        if (
          (ue(ae),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (oe && Xe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ts(), xn(), (t.flags |= 98560), (u = !1));
          else if (((u = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[vt] = t;
            } else
              (xn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Re(t), (u = !1));
          } else (st !== null && (pi(st), (st = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ae.current & 1) !== 0
                  ? we === 0 && (we = 3)
                  : vi())),
            t.updateQueue !== null && (t.flags |= 4),
            Re(t),
            null);
      case 4:
        return (
          Pn(),
          ni(e, t),
          e === null && er(t.stateNode.containerInfo),
          Re(t),
          null
        );
      case 10:
        return (Tu(t.type._context), Re(t), null);
      case 17:
        return (Ae(t.type) && Kr(), Re(t), null);
      case 19:
        if ((ue(ae), (u = t.memoizedState), u === null)) return (Re(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) dr(u, !1);
          else {
            if (we !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = rl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      dr(u, !1),
                      r = i.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    ((u = n),
                      (e = r),
                      (u.flags &= 14680066),
                      (i = u.alternate),
                      i === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = i.childLanes),
                          (u.lanes = i.lanes),
                          (u.child = i.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = i.memoizedProps),
                          (u.memoizedState = i.memoizedState),
                          (u.updateQueue = i.updateQueue),
                          (u.type = i.type),
                          (e = i.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (ne(ae, (ae.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              me() > jn &&
              ((t.flags |= 128), (r = !0), dr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                dr(u, !0),
                u.tail === null &&
                  u.tailMode === 'hidden' &&
                  !i.alternate &&
                  !oe)
              )
                return (Re(t), null);
            } else
              2 * me() - u.renderingStartTime > jn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), dr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = u.last),
              n !== null ? (n.sibling = i) : (t.child = i),
              (u.last = i));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = me()),
            (t.sibling = null),
            (n = ae.current),
            ne(ae, r ? (n & 1) | 2 : n & 1),
            t)
          : (Re(t), null);
      case 22:
      case 23:
        return (
          hi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Ge & 1073741824) !== 0 &&
              (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Re(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function mf(e, t) {
    switch ((Eu(t), t.tag)) {
      case 1:
        return (
          Ae(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          ue(Ue),
          ue(Te),
          Fu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Du(t), null);
      case 13:
        if (
          (ue(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(m(340));
          xn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ue(ae), null);
      case 4:
        return (Pn(), null);
      case 10:
        return (Tu(t.type._context), null);
      case 22:
      case 23:
        return (hi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    Me = !1,
    hf = typeof WeakSet == 'function' ? WeakSet : Set,
    E = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          de(e, t, r);
        }
      else n.current = null;
  }
  function ri(e, t, n) {
    try {
      n();
    } catch (r) {
      de(e, t, r);
    }
  }
  var bs = !1;
  function vf(e, t) {
    if (((hu = Rr), (e = jo()), ou(e))) {
      if ('selectionStart' in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              o = -1,
              s = -1,
              p = 0,
              g = 0,
              w = e,
              v = null;
            t: for (;;) {
              for (
                var x;
                w !== n || (l !== 0 && w.nodeType !== 3) || (o = i + l),
                  w !== u || (r !== 0 && w.nodeType !== 3) || (s = i + r),
                  w.nodeType === 3 && (i += w.nodeValue.length),
                  (x = w.firstChild) !== null;

              )
                ((v = w), (w = x));
              for (;;) {
                if (w === e) break t;
                if (
                  (v === n && ++p === l && (o = i),
                  v === u && ++g === r && (s = i),
                  (x = w.nextSibling) !== null)
                )
                  break;
                ((w = v), (v = w.parentNode));
              }
              w = x;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      vu = { focusedElem: e, selectionRange: n }, Rr = !1, E = t;
      E !== null;

    )
      if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (E = e));
      else
        for (; E !== null; ) {
          t = E;
          try {
            var N = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (N !== null) {
                    var P = N.memoizedProps,
                      he = N.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? P : at(t.type, P),
                        he
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = t.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = '')
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (k) {
            de(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (E = e));
            break;
          }
          E = t.return;
        }
    return ((N = bs), (bs = !1), N);
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && ri(t, n, u));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function li(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function ea(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ea(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[vt],
          delete t[nr],
          delete t[ku],
          delete t[Jc],
          delete t[qc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ta(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ta(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Wr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, t, n), e = e.sibling; e !== null; )
        (ui(e, t, n), (e = e.sibling));
  }
  function ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ii(e, t, n), e = e.sibling; e !== null; )
        (ii(e, t, n), (e = e.sibling));
  }
  var ze = null,
    ct = !1;
  function Bt(e, t, n) {
    for (n = n.child; n !== null; ) (ra(e, t, n), (n = n.sibling));
  }
  function ra(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == 'function')
      try {
        ht.onCommitFiberUnmount(Nr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Me || Ln(n, t);
      case 6:
        var r = ze,
          l = ct;
        ((ze = null),
          Bt(e, t, n),
          (ze = r),
          (ct = l),
          ze !== null &&
            (ct
              ? ((e = ze),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ze.removeChild(n.stateNode)));
        break;
      case 18:
        ze !== null &&
          (ct
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8
                ? wu(e.parentNode, n)
                : e.nodeType === 1 && wu(e, n),
              Qn(e))
            : wu(ze, n.stateNode));
        break;
      case 4:
        ((r = ze),
          (l = ct),
          (ze = n.stateNode.containerInfo),
          (ct = !0),
          Bt(e, t, n),
          (ze = r),
          (ct = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Me &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            ((u = u.tag),
              i !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ri(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Bt(e, t, n);
        break;
      case 1:
        if (
          !Me &&
          (Ln(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == 'function')
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (o) {
            de(n, t, o);
          }
        Bt(e, t, n);
        break;
      case 21:
        Bt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Me = (r = Me) || n.memoizedState !== null), Bt(e, t, n), (Me = r))
          : Bt(e, t, n);
        break;
      default:
        Bt(e, t, n);
    }
  }
  function la(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new hf()),
        t.forEach(function (r) {
          var l = Cf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function ft(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var u = e,
            i = t,
            o = i;
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                ((ze = o.stateNode), (ct = !1));
                break e;
              case 3:
                ((ze = o.stateNode.containerInfo), (ct = !0));
                break e;
              case 4:
                ((ze = o.stateNode.containerInfo), (ct = !0));
                break e;
            }
            o = o.return;
          }
          if (ze === null) throw Error(m(160));
          (ra(u, i, l), (ze = null), (ct = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          de(l, t, p);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (ua(t, e), (t = t.sibling));
  }
  function ua(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ft(t, e), wt(e), r & 4)) {
          try {
            (pr(3, e, e.return), pl(3, e));
          } catch (P) {
            de(e, e.return, P);
          }
          try {
            pr(5, e, e.return);
          } catch (P) {
            de(e, e.return, P);
          }
        }
        break;
      case 1:
        (ft(t, e), wt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if (
          (ft(t, e),
          wt(e),
          r & 512 && n !== null && Ln(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            On(l, '');
          } catch (P) {
            de(e, e.return, P);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = n !== null ? n.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === 'input' &&
                u.type === 'radio' &&
                u.name != null &&
                Ri(l, u),
                Fl(o, i));
              var p = Fl(o, u);
              for (i = 0; i < s.length; i += 2) {
                var g = s[i],
                  w = s[i + 1];
                g === 'style'
                  ? Vi(l, w)
                  : g === 'dangerouslySetInnerHTML'
                    ? Ui(l, w)
                    : g === 'children'
                      ? On(l, w)
                      : j(l, g, w, p);
              }
              switch (o) {
                case 'input':
                  Rl(l, u);
                  break;
                case 'textarea':
                  Di(l, u);
                  break;
                case 'select':
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var x = u.value;
                  x != null
                    ? sn(l, !!u.multiple, x, !1)
                    : v !== !!u.multiple &&
                      (u.defaultValue != null
                        ? sn(l, !!u.multiple, u.defaultValue, !0)
                        : sn(l, !!u.multiple, u.multiple ? [] : '', !1));
              }
              l[nr] = u;
            } catch (P) {
              de(e, e.return, P);
            }
        }
        break;
      case 6:
        if ((ft(t, e), wt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (P) {
            de(e, e.return, P);
          }
        }
        break;
      case 3:
        if (
          (ft(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Qn(t.containerInfo);
          } catch (P) {
            de(e, e.return, P);
          }
        break;
      case 4:
        (ft(t, e), wt(e));
        break;
      case 13:
        (ft(t, e),
          wt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ai = me())),
          r & 4 && la(e));
        break;
      case 22:
        if (
          ((g = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Me = (p = Me) || g), ft(t, e), (Me = p)) : ft(t, e),
          wt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !g && (e.mode & 1) !== 0)
          )
            for (E = e, g = e.child; g !== null; ) {
              for (w = E = g; E !== null; ) {
                switch (((v = E), (x = v.child), v.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, v, v.return);
                    break;
                  case 1:
                    Ln(v, v.return);
                    var N = v.stateNode;
                    if (typeof N.componentWillUnmount == 'function') {
                      ((r = v), (n = v.return));
                      try {
                        ((t = r),
                          (N.props = t.memoizedProps),
                          (N.state = t.memoizedState),
                          N.componentWillUnmount());
                      } catch (P) {
                        de(r, n, P);
                      }
                    }
                    break;
                  case 5:
                    Ln(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      sa(w);
                      continue;
                    }
                }
                x !== null ? ((x.return = v), (E = x)) : sa(w);
              }
              g = g.sibling;
            }
          e: for (g = null, w = e; ; ) {
            if (w.tag === 5) {
              if (g === null) {
                g = w;
                try {
                  ((l = w.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == 'function'
                          ? u.setProperty('display', 'none', 'important')
                          : (u.display = 'none'))
                      : ((o = w.stateNode),
                        (s = w.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty('display')
                            ? s.display
                            : null),
                        (o.style.display = Ai('display', i))));
                } catch (P) {
                  de(e, e.return, P);
                }
              }
            } else if (w.tag === 6) {
              if (g === null)
                try {
                  w.stateNode.nodeValue = p ? '' : w.memoizedProps;
                } catch (P) {
                  de(e, e.return, P);
                }
            } else if (
              ((w.tag !== 22 && w.tag !== 23) ||
                w.memoizedState === null ||
                w === e) &&
              w.child !== null
            ) {
              ((w.child.return = w), (w = w.child));
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              (g === w && (g = null), (w = w.return));
            }
            (g === w && (g = null),
              (w.sibling.return = w.return),
              (w = w.sibling));
          }
        }
        break;
      case 19:
        (ft(t, e), wt(e), r & 4 && la(e));
        break;
      case 21:
        break;
      default:
        (ft(t, e), wt(e));
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ta(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (On(l, ''), (r.flags &= -33));
            var u = na(e);
            ii(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = na(e);
            ui(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        de(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yf(e, t, n) {
    ((E = e), ia(e));
  }
  function ia(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || dl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Me;
          o = dl;
          var p = Me;
          if (((dl = i), (Me = s) && !p))
            for (E = l; E !== null; )
              ((i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? aa(l)
                  : s !== null
                    ? ((s.return = i), (E = s))
                    : aa(l));
          for (; u !== null; ) ((E = u), ia(u), (u = u.sibling));
          ((E = l), (dl = o), (Me = p));
        }
        oa(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && u !== null
          ? ((u.return = l), (E = u))
          : oa(e);
    }
  }
  function oa(e) {
    for (; E !== null; ) {
      var t = E;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Me || pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Me)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : at(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && ss(t, u, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (i !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  ss(t, i, n);
                }
                break;
              case 5:
                var o = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = o;
                  var s = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      s.autoFocus && n.focus();
                      break;
                    case 'img':
                      s.src && (n.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var p = t.alternate;
                  if (p !== null) {
                    var g = p.memoizedState;
                    if (g !== null) {
                      var w = g.dehydrated;
                      w !== null && Qn(w);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          Me || (t.flags & 512 && li(t));
        } catch (v) {
          de(t, t.return, v);
        }
      }
      if (t === e) {
        E = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function sa(e) {
    for (; E !== null; ) {
      var t = E;
      if (t === e) {
        E = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (E = n));
        break;
      }
      E = t.return;
    }
  }
  function aa(e) {
    for (; E !== null; ) {
      var t = E;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
            } catch (s) {
              de(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                de(t, l, s);
              }
            }
            var u = t.return;
            try {
              li(t);
            } catch (s) {
              de(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              li(t);
            } catch (s) {
              de(t, i, s);
            }
        }
      } catch (s) {
        de(t, t.return, s);
      }
      if (t === e) {
        E = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (E = o));
        break;
      }
      E = t.return;
    }
  }
  var gf = Math.ceil,
    ml = se.ReactCurrentDispatcher,
    oi = se.ReactCurrentOwner,
    nt = se.ReactCurrentBatchConfig,
    B = 0,
    _e = null,
    ve = null,
    Le = 0,
    Ge = 0,
    Tn = It(0),
    we = 0,
    mr = null,
    nn = 0,
    hl = 0,
    si = 0,
    hr = null,
    Be = null,
    ai = 0,
    jn = 1 / 0,
    zt = null,
    vl = !1,
    ci = null,
    Ht = null,
    yl = !1,
    $t = null,
    gl = 0,
    vr = 0,
    fi = null,
    wl = -1,
    kl = 0;
  function Ie() {
    return (B & 6) !== 0 ? me() : wl !== -1 ? wl : (wl = me());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (B & 2) !== 0 && Le !== 0
        ? Le & -Le
        : ef.transition !== null
          ? (kl === 0 && (kl = to()), kl)
          : ((e = Z),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : co(e.type))),
            e);
  }
  function dt(e, t, n, r) {
    if (50 < vr) throw ((vr = 0), (fi = null), Error(m(185)));
    (Vn(e, n, r),
      ((B & 2) === 0 || e !== _e) &&
        (e === _e && ((B & 2) === 0 && (hl |= n), we === 4 && Qt(e, Le)),
        He(e, r),
        n === 1 &&
          B === 0 &&
          (t.mode & 1) === 0 &&
          ((jn = me() + 500), Xr && Ut())));
  }
  function He(e, t) {
    var n = e.callbackNode;
    ec(e, t);
    var r = Lr(e, e === _e ? Le : 0);
    if (r === 0)
      (n !== null && qi(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && qi(n), t === 1))
        (e.tag === 0 ? bc(fa.bind(null, e)) : Zo(fa.bind(null, e)),
          Gc(function () {
            (B & 6) === 0 && Ut();
          }),
          (n = null));
      else {
        switch (no(r)) {
          case 1:
            n = Wl;
            break;
          case 4:
            n = bi;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = eo;
            break;
          default:
            n = Cr;
        }
        n = wa(n, ca.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ca(e, t) {
    if (((wl = -1), (kl = 0), (B & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = Lr(e, e === _e ? Le : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = B;
      B |= 2;
      var u = pa();
      (_e !== e || Le !== t) && ((zt = null), (jn = me() + 500), ln(e, t));
      do
        try {
          Sf();
          break;
        } catch (o) {
          da(e, o);
        }
      while (!0);
      (Lu(),
        (ml.current = u),
        (B = l),
        ve !== null ? (t = 0) : ((_e = null), (Le = 0), (t = we)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Ql(e)), l !== 0 && ((r = l), (t = di(e, l)))),
        t === 1)
      )
        throw ((n = mr), ln(e, 0), Qt(e, r), He(e, me()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !wf(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((u = Ql(e)), u !== 0 && ((r = u), (t = di(e, u)))),
            t === 1))
        )
          throw ((n = mr), ln(e, 0), Qt(e, r), He(e, me()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, Be, zt);
            break;
          case 3:
            if (
              (Qt(e, r),
              (r & 130023424) === r && ((t = ai + 500 - me()), 10 < t))
            ) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ie(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = gu(un.bind(null, e, Be, zt), t);
              break;
            }
            un(e, Be, zt);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - it(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
            }
            if (
              ((r = l),
              (r = me() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * gf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = gu(un.bind(null, e, Be, zt), r);
              break;
            }
            un(e, Be, zt);
            break;
          case 5:
            un(e, Be, zt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (He(e, me()), e.callbackNode === n ? ca.bind(null, e) : null);
  }
  function di(e, t) {
    var n = hr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Be), (Be = n), t !== null && pi(t)),
      e
    );
  }
  function pi(e) {
    Be === null ? (Be = e) : Be.push.apply(Be, e);
  }
  function wf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!ot(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Qt(e, t) {
    for (
      t &= ~si,
        t &= ~hl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - it(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function fa(e) {
    if ((B & 6) !== 0) throw Error(m(327));
    Rn();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return (He(e, me()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && ((t = r), (n = di(e, r)));
    }
    if (n === 1) throw ((n = mr), ln(e, 0), Qt(e, t), He(e, me()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, Be, zt),
      He(e, me()),
      null
    );
  }
  function mi(e, t) {
    var n = B;
    B |= 1;
    try {
      return e(t);
    } finally {
      ((B = n), B === 0 && ((jn = me() + 500), Xr && Ut()));
    }
  }
  function rn(e) {
    $t !== null && $t.tag === 0 && (B & 6) === 0 && Rn();
    var t = B;
    B |= 1;
    var n = nt.transition,
      r = Z;
    try {
      if (((nt.transition = null), (Z = 1), e)) return e();
    } finally {
      ((Z = r), (nt.transition = n), (B = t), (B & 6) === 0 && Ut());
    }
  }
  function hi() {
    ((Ge = Tn.current), ue(Tn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Xc(n)), ve !== null))
      for (n = ve.return; n !== null; ) {
        var r = n;
        switch ((Eu(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Kr());
            break;
          case 3:
            (Pn(), ue(Ue), ue(Te), Fu());
            break;
          case 5:
            Du(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            ue(ae);
            break;
          case 19:
            ue(ae);
            break;
          case 10:
            Tu(r.type._context);
            break;
          case 22:
          case 23:
            hi();
        }
        n = n.return;
      }
    if (
      ((_e = e),
      (ve = e = Kt(e.current, null)),
      (Le = Ge = t),
      (we = 0),
      (mr = null),
      (si = hl = nn = 0),
      (Be = hr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            u = n.pending;
          if (u !== null) {
            var i = u.next;
            ((u.next = l), (r.next = i));
          }
          n.pending = r;
        }
      bt = null;
    }
    return e;
  }
  function da(e, t) {
    do {
      var n = ve;
      try {
        if ((Lu(), (ll.current = sl), ul)) {
          for (var r = ce.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((tn = 0),
          (Se = ge = ce = null),
          (sr = !1),
          (ar = 0),
          (oi.current = null),
          n === null || n.return === null)
        ) {
          ((we = 1), (mr = t), (ve = null));
          break;
        }
        e: {
          var u = e,
            i = n.return,
            o = n,
            s = t;
          if (
            ((t = Le),
            (o.flags |= 32768),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var p = s,
              g = o,
              w = g.tag;
            if ((g.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var v = g.alternate;
              v
                ? ((g.updateQueue = v.updateQueue),
                  (g.memoizedState = v.memoizedState),
                  (g.lanes = v.lanes))
                : ((g.updateQueue = null), (g.memoizedState = null));
            }
            var x = Fs(i);
            if (x !== null) {
              ((x.flags &= -257),
                Us(x, i, o, u, t),
                x.mode & 1 && Is(u, p, t),
                (t = x),
                (s = p));
              var N = t.updateQueue;
              if (N === null) {
                var P = new Set();
                (P.add(s), (t.updateQueue = P));
              } else N.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Is(u, p, t), vi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (oe && o.mode & 1) {
            var he = Fs(i);
            if (he !== null) {
              ((he.flags & 65536) === 0 && (he.flags |= 256),
                Us(he, i, o, u, t),
                Pu(zn(s, o)));
              break e;
            }
          }
          ((u = s = zn(s, o)),
            we !== 4 && (we = 2),
            hr === null ? (hr = [u]) : hr.push(u),
            (u = i));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var f = Os(u, s, t);
                os(u, f);
                break e;
              case 1:
                o = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == 'function' ||
                    (d !== null &&
                      typeof d.componentDidCatch == 'function' &&
                      (Ht === null || !Ht.has(d))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var k = Ds(u, o, t);
                  os(u, k);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ha(n);
      } catch (z) {
        ((t = z), ve === n && n !== null && (ve = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function pa() {
    var e = ml.current;
    return ((ml.current = sl), e === null ? sl : e);
  }
  function vi() {
    ((we === 0 || we === 3 || we === 2) && (we = 4),
      _e === null ||
        ((nn & 268435455) === 0 && (hl & 268435455) === 0) ||
        Qt(_e, Le));
  }
  function Sl(e, t) {
    var n = B;
    B |= 2;
    var r = pa();
    (_e !== e || Le !== t) && ((zt = null), ln(e, t));
    do
      try {
        kf();
        break;
      } catch (l) {
        da(e, l);
      }
    while (!0);
    if ((Lu(), (B = n), (ml.current = r), ve !== null)) throw Error(m(261));
    return ((_e = null), (Le = 0), we);
  }
  function kf() {
    for (; ve !== null; ) ma(ve);
  }
  function Sf() {
    for (; ve !== null && !Qa(); ) ma(ve);
  }
  function ma(e) {
    var t = ga(e.alternate, e, Ge);
    ((e.memoizedProps = e.pendingProps),
      t === null ? ha(e) : (ve = t),
      (oi.current = null));
  }
  function ha(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = pf(n, t, Ge)), n !== null)) {
          ve = n;
          return;
        }
      } else {
        if (((n = mf(n, t)), n !== null)) {
          ((n.flags &= 32767), (ve = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((we = 6), (ve = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        ve = t;
        return;
      }
      ve = t = e;
    } while (t !== null);
    we === 0 && (we = 5);
  }
  function un(e, t, n) {
    var r = Z,
      l = nt.transition;
    try {
      ((nt.transition = null), (Z = 1), _f(e, t, n, r));
    } finally {
      ((nt.transition = l), (Z = r));
    }
    return null;
  }
  function _f(e, t, n, r) {
    do Rn();
    while ($t !== null);
    if ((B & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (tc(e, u),
      e === _e && ((ve = _e = null), (Le = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        wa(Cr, function () {
          return (Rn(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = nt.transition), (nt.transition = null));
      var i = Z;
      Z = 1;
      var o = B;
      ((B |= 4),
        (oi.current = null),
        vf(e, n),
        ua(n, e),
        Bc(vu),
        (Rr = !!hu),
        (vu = hu = null),
        (e.current = n),
        yf(n),
        Ka(),
        (B = o),
        (Z = i),
        (nt.transition = u));
    } else e.current = n;
    if (
      (yl && ((yl = !1), ($t = e), (gl = l)),
      (u = e.pendingLanes),
      u === 0 && (Ht = null),
      Ga(n.stateNode),
      He(e, me()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = ci), (ci = null), e);
    return (
      (gl & 1) !== 0 && e.tag !== 0 && Rn(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === fi ? vr++ : ((vr = 0), (fi = e))) : (vr = 0),
      Ut(),
      null
    );
  }
  function Rn() {
    if ($t !== null) {
      var e = no(gl),
        t = nt.transition,
        n = Z;
      try {
        if (((nt.transition = null), (Z = 16 > e ? 16 : e), $t === null))
          var r = !1;
        else {
          if (((e = $t), ($t = null), (gl = 0), (B & 6) !== 0))
            throw Error(m(331));
          var l = B;
          for (B |= 4, E = e.current; E !== null; ) {
            var u = E,
              i = u.child;
            if ((E.flags & 16) !== 0) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (E = p; E !== null; ) {
                    var g = E;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, g, u);
                    }
                    var w = g.child;
                    if (w !== null) ((w.return = g), (E = w));
                    else
                      for (; E !== null; ) {
                        g = E;
                        var v = g.sibling,
                          x = g.return;
                        if ((ea(g), g === p)) {
                          E = null;
                          break;
                        }
                        if (v !== null) {
                          ((v.return = x), (E = v));
                          break;
                        }
                        E = x;
                      }
                  }
                }
                var N = u.alternate;
                if (N !== null) {
                  var P = N.child;
                  if (P !== null) {
                    N.child = null;
                    do {
                      var he = P.sibling;
                      ((P.sibling = null), (P = he));
                    } while (P !== null);
                  }
                }
                E = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && i !== null)
              ((i.return = u), (E = i));
            else
              e: for (; E !== null; ) {
                if (((u = E), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  ((f.return = u.return), (E = f));
                  break e;
                }
                E = u.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var d = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && d !== null)
              ((d.return = i), (E = d));
            else
              e: for (i = a; E !== null; ) {
                if (((o = E), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, o);
                    }
                  } catch (z) {
                    de(o, o.return, z);
                  }
                if (o === i) {
                  E = null;
                  break e;
                }
                var k = o.sibling;
                if (k !== null) {
                  ((k.return = o.return), (E = k));
                  break e;
                }
                E = o.return;
              }
          }
          if (
            ((B = l), Ut(), ht && typeof ht.onPostCommitFiberRoot == 'function')
          )
            try {
              ht.onPostCommitFiberRoot(Nr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((Z = n), (nt.transition = t));
      }
    }
    return !1;
  }
  function va(e, t, n) {
    ((t = zn(n, t)),
      (t = Os(e, t, 1)),
      (e = Vt(e, t, 1)),
      (t = Ie()),
      e !== null && (Vn(e, 1, t), He(e, t)));
  }
  function de(e, t, n) {
    if (e.tag === 3) va(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          va(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (Ht === null || !Ht.has(r)))
          ) {
            ((e = zn(n, e)),
              (e = Ds(t, e, 1)),
              (t = Vt(t, e, 1)),
              (e = Ie()),
              t !== null && (Vn(t, 1, e), He(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function xf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ie()),
      (e.pingedLanes |= e.suspendedLanes & n),
      _e === e &&
        (Le & n) === n &&
        (we === 4 || (we === 3 && (Le & 130023424) === Le && 500 > me() - ai)
          ? ln(e, 0)
          : (si |= n)),
      He(e, t));
  }
  function ya(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = Ie();
    ((e = Ct(e, t)), e !== null && (Vn(e, t, n), He(e, n)));
  }
  function Ef(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ya(e, n));
  }
  function Cf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    (r !== null && r.delete(t), ya(e, n));
  }
  var ga;
  ga = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ue.current) Ve = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Ve = !1), df(e, t, n));
        Ve = (e.flags & 131072) !== 0;
      }
    else ((Ve = !1), oe && (t.flags & 1048576) !== 0 && Jo(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (fl(e, t), (e = t.pendingProps));
        var l = kn(t, Te.current);
        (Nn(t, n), (l = Vu(null, t, r, e, l, n)));
        var u = Bu();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ae(r) ? ((u = !0), Yr(t)) : (u = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Mu(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Yu(t, r, e, n),
              (t = Ju(null, t, r, !0, u, n)))
            : ((t.tag = 0), oe && u && xu(t), De(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (fl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Pf(r)),
            (e = at(r, e)),
            l)
          ) {
            case 0:
              t = Zu(null, t, r, e, n);
              break e;
            case 1:
              t = Ws(null, t, r, e, n);
              break e;
            case 11:
              t = As(null, t, r, e, n);
              break e;
            case 14:
              t = Vs(null, t, r, at(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : at(r, l)),
          Zu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : at(r, l)),
          Ws(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Qs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            is(e, t),
            nl(t, r, null, n));
          var i = t.memoizedState;
          if (((r = i.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              ((l = zn(Error(m(423)), t)), (t = Ks(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(m(424)), t)), (t = Ks(e, t, r, n, l)));
              break e;
            } else
              for (
                Xe = Dt(t.stateNode.containerInfo.firstChild),
                  Ye = t,
                  oe = !0,
                  st = null,
                  n = ls(t, null, r, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((xn(), r === l)) {
              t = Pt(e, t, n);
              break e;
            }
            De(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          as(t),
          e === null && Nu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          yu(r, l) ? (i = null) : u !== null && yu(r, u) && (t.flags |= 32),
          $s(e, t),
          De(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && Nu(t), null);
      case 13:
        return Ys(e, t, n);
      case 4:
        return (
          Ou(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : De(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : at(r, l)),
          As(e, t, r, l, n)
        );
      case 7:
        return (De(e, t, t.pendingProps, n), t.child);
      case 8:
        return (De(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (De(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (i = l.value),
            ne(br, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (ot(u.value, i)) {
              if (u.children === l.children && !Ue.current) {
                t = Pt(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        ((s = Nt(-1, n & -n)), (s.tag = 2));
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var g = p.pending;
                          (g === null
                            ? (s.next = s)
                            : ((s.next = g.next), (g.next = s)),
                            (p.pending = s));
                        }
                      }
                      ((u.lanes |= n),
                        (s = u.alternate),
                        s !== null && (s.lanes |= n),
                        ju(u.return, n, t),
                        (o.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(m(341));
                  ((i.lanes |= n),
                    (o = i.alternate),
                    o !== null && (o.lanes |= n),
                    ju(i, n, t),
                    (i = u.sibling));
                } else i = u.child;
                if (i !== null) i.return = u;
                else
                  for (i = u; i !== null; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((u = i.sibling), u !== null)) {
                      ((u.return = i.return), (i = u));
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          (De(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Nn(t, n),
          (l = et(l)),
          (r = r(l)),
          (t.flags |= 1),
          De(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = at(r, t.pendingProps)),
          (l = at(r.type, l)),
          Vs(e, t, r, l, n)
        );
      case 15:
        return Bs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : at(r, l)),
          fl(e, t),
          (t.tag = 1),
          Ae(r) ? ((e = !0), Yr(t)) : (e = !1),
          Nn(t, n),
          Rs(t, r, l),
          Yu(t, r, l, n),
          Ju(null, t, r, !0, e, n)
        );
      case 19:
        return Gs(e, t, n);
      case 22:
        return Hs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function wa(e, t) {
    return Ji(e, t);
  }
  function Nf(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function rt(e, t, n, r) {
    return new Nf(e, t, n, r);
  }
  function yi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Pf(e) {
    if (typeof e == 'function') return yi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === pt)) return 11;
      if (e === mt) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = rt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function _l(e, t, n, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == 'function')) yi(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
      e: switch (e) {
        case Ne:
          return on(n.children, l, u, t);
        case Pe:
          ((i = 8), (l |= 8));
          break;
        case lt:
          return (
            (e = rt(12, n, t, l | 2)),
            (e.elementType = lt),
            (e.lanes = u),
            e
          );
        case We:
          return (
            (e = rt(13, n, t, l)),
            (e.elementType = We),
            (e.lanes = u),
            e
          );
        case ut:
          return (
            (e = rt(19, n, t, l)),
            (e.elementType = ut),
            (e.lanes = u),
            e
          );
        case fe:
          return xl(n, l, u, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Je:
                i = 10;
                break e;
              case kt:
                i = 9;
                break e;
              case pt:
                i = 11;
                break e;
              case mt:
                i = 14;
                break e;
              case Fe:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = rt(i, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = u),
      t
    );
  }
  function on(e, t, n, r) {
    return ((e = rt(7, e, r, t)), (e.lanes = n), e);
  }
  function xl(e, t, n, r) {
    return (
      (e = rt(22, e, r, t)),
      (e.elementType = fe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function gi(e, t, n) {
    return ((e = rt(6, e, null, t)), (e.lanes = n), e);
  }
  function wi(e, t, n) {
    return (
      (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function zf(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Kl(0)),
      (this.expirationTimes = Kl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ki(e, t, n, r, l, u, i, o, s) {
    return (
      (e = new zf(e, t, n, o, s)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = rt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Mu(u),
      e
    );
  }
  function Lf(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ye,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ka(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ae(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ae(n)) return Xo(e, n, t);
    }
    return t;
  }
  function Sa(e, t, n, r, l, u, i, o, s) {
    return (
      (e = ki(n, r, !0, e, l, u, i, o, s)),
      (e.context = ka(null)),
      (n = e.current),
      (r = Ie()),
      (l = Wt(n)),
      (u = Nt(r, l)),
      (u.callback = t ?? null),
      Vt(n, u, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      He(e, r),
      e
    );
  }
  function El(e, t, n, r) {
    var l = t.current,
      u = Ie(),
      i = Wt(l);
    return (
      (n = ka(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nt(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Vt(l, t, i)),
      e !== null && (dt(e, l, i, u), tl(e, l, i)),
      i
    );
  }
  function Cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function _a(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Si(e, t) {
    (_a(e, t), (e = e.alternate) && _a(e, t));
  }
  function Tf() {
    return null;
  }
  var xa =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function _i(e) {
    this._internalRoot = e;
  }
  ((Nl.prototype.render = _i.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      El(e, t, null, null);
    }),
    (Nl.prototype.unmount = _i.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            El(null, e, null, null);
          }),
            (t[St] = null));
        }
      }));
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = uo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      (Rt.splice(n, 0, e), n === 0 && so(e));
    }
  };
  function xi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Ea() {}
  function jf(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var u = r;
        r = function () {
          var p = Cl(i);
          u.call(p);
        };
      }
      var i = Sa(t, r, e, 0, null, !1, !1, '', Ea);
      return (
        (e._reactRootContainer = i),
        (e[St] = i.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var p = Cl(s);
        o.call(p);
      };
    }
    var s = ki(e, 0, !1, null, null, !1, !1, '', Ea);
    return (
      (e._reactRootContainer = s),
      (e[St] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        El(t, s, n, r);
      }),
      s
    );
  }
  function zl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == 'function') {
        var o = l;
        l = function () {
          var s = Cl(i);
          o.call(s);
        };
      }
      El(t, i, e, l);
    } else i = jf(n, t, e, l, r);
    return Cl(i);
  }
  ((ro = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 &&
            (Yl(t, n | 1),
            He(t, me()),
            (B & 6) === 0 && ((jn = me() + 500), Ut()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Ct(e, 1);
          if (r !== null) {
            var l = Ie();
            dt(r, e, 1, l);
          }
        }),
          Si(e, 1));
    }
  }),
    (Xl = function (e) {
      if (e.tag === 13) {
        var t = Ct(e, 134217728);
        if (t !== null) {
          var n = Ie();
          dt(t, e, 134217728, n);
        }
        Si(e, 134217728);
      }
    }),
    (lo = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Ct(e, t);
        if (n !== null) {
          var r = Ie();
          dt(n, e, t, r);
        }
        Si(e, t);
      }
    }),
    (uo = function () {
      return Z;
    }),
    (io = function (e, t) {
      var n = Z;
      try {
        return ((Z = e), t());
      } finally {
        Z = n;
      }
    }),
    (Vl = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((Rl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Qr(r);
                if (!l) throw Error(m(90));
                (Ti(r), Rl(r, l));
              }
            }
          }
          break;
        case 'textarea':
          Di(e, n);
          break;
        case 'select':
          ((t = n.value), t != null && sn(e, !!n.multiple, t, !1));
      }
    }),
    (Wi = mi),
    (Qi = rn));
  var Rf = { usingClientEntryPoint: !1, Events: [rr, gn, Qr, Hi, $i, mi] },
    yr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Mf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Gi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Tf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ll.isDisabled && Ll.supportsFiber)
      try {
        ((Nr = Ll.inject(Mf)), (ht = Ll));
      } catch {}
  }
  return (
    ($e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf),
    ($e.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!xi(t)) throw Error(m(200));
      return Lf(e, t, null, n);
    }),
    ($e.createRoot = function (e, t) {
      if (!xi(e)) throw Error(m(299));
      var n = !1,
        r = '',
        l = xa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ki(e, 1, !1, null, null, n, !1, r, l)),
        (e[St] = t.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new _i(t)
      );
    }),
    ($e.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(m(188))
          : ((e = Object.keys(e).join(',')), Error(m(268, e)));
      return ((e = Gi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    ($e.flushSync = function (e) {
      return rn(e);
    }),
    ($e.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !0, n);
    }),
    ($e.hydrateRoot = function (e, t, n) {
      if (!xi(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = '',
        i = xa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Sa(t, null, e, 1, n ?? null, l, !1, u, i)),
        (e[St] = t.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Nl(t);
    }),
    ($e.render = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !1, n);
    }),
    ($e.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            zl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[St] = null));
            });
          }),
          !0)
        : !1;
    }),
    ($e.unstable_batchedUpdates = mi),
    ($e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return zl(e, t, n, !1, r);
    }),
    ($e.version = '18.3.1-next-f1338f8080-20240426'),
    $e
  );
}
var Ra;
function Hf() {
  if (Ra) return Ni.exports;
  Ra = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (R) {
        console.error(R);
      }
  }
  return (h(), (Ni.exports = Bf()), Ni.exports);
}
var Ma;
function $f() {
  if (Ma) return Tl;
  Ma = 1;
  var h = Hf();
  return ((Tl.createRoot = h.createRoot), (Tl.hydrateRoot = h.hydrateRoot), Tl);
}
var Wf = $f();
const Qf = Fa(Wf),
  Kf = 60,
  Yf = 3,
  Xf = 10,
  Gf = 50,
  Zf = 5,
  Oa = [
    { id: 'maguro', label: 'まぐろ', reading: 'maguro', price: 100 },
    { id: 'ebi', label: 'えび', reading: 'ebi', price: 90 },
    { id: 'ika', label: 'いか', reading: 'ika', price: 80 },
    { id: 'anago', label: 'あなご', reading: 'anago', price: 120 },
    { id: 'uni', label: 'うに', reading: 'uni', price: 200 },
    { id: 'ikura', label: 'いくら', reading: 'ikura', price: 150 },
    { id: 'hamachi', label: 'はまち', reading: 'hamachi', price: 110 },
    { id: 'salmon', label: 'サーモン', reading: 'saamon', price: 130 },
    { id: 'tamago', label: '玉子', reading: 'tamago', price: 70 },
    { id: 'kappa', label: 'かっぱ巻き', reading: 'kappamaki', price: 60 },
    { id: 'tekka', label: '鉄火巻き', reading: 'tekkamaki', price: 80 },
    { id: 'kani', label: 'かに', reading: 'kani', price: 90 },
    { id: 'unagi', label: 'うなぎ', reading: 'unagi', price: 180 },
    { id: 'hokkigai', label: 'ほっき貝', reading: 'hokkigai', price: 140 },
    { id: 'hotate', label: 'ほたて', reading: 'hotate', price: 150 },
    { id: 'shirako', label: '白子', reading: 'shirako', price: 160 },
    { id: 'kazunoko', label: '数の子', reading: 'kazunoko', price: 170 },
    { id: 'kani-miso', label: 'かにみそ', reading: 'kanimiso', price: 190 },
    { id: 'awabi', label: 'あわび', reading: 'awabi', price: 210 },
    { id: 'sayori', label: 'さより', reading: 'sayori', price: 120 },
  ],
  Jf = (h) => Math.floor(Math.random() * h),
  wr = (h) => {
    const R = h ? Oa.filter((m) => m.id !== h) : Oa;
    return R[Jf(R.length)];
  },
  Da = (h) => ({ ...h, typed: '', remaining: h.reading, mistakes: 0 }),
  Ia = (h, R) => {
    const m = Array.from({ length: Math.max(R - 1, 0) }, () => wr());
    return {
      status: 'idle',
      timeLimit: h,
      timeLeft: h,
      activePlate: null,
      upcomingPlates: m,
      completedPlates: [],
      metrics: {
        score: 0,
        combo: 0,
        maxCombo: 0,
        correctChars: 0,
        missedChars: 0,
        coins: 0,
      },
      startedAt: null,
    };
  },
  qf = (h) => /[a-z]/.test(h),
  bf = (h) => {
    const R = Kf,
      m = Yf,
      [re, M] = ke.useState(() => Ia(R, m)),
      H = ke.useRef(null),
      J = ke.useRef(null),
      K = ke.useCallback(() => {
        H.current !== null &&
          (window.clearInterval(H.current), (H.current = null));
      }, []),
      A = ke.useCallback(() => {
        (K(), M((V) => ({ ...V, status: 'finished', timeLeft: 0 })));
      }, [K]),
      pe = ke.useCallback(() => {
        M((V) => {
          if (V.status !== 'running') return V;
          const j = V.timeLeft - 1;
          return j <= 0
            ? (window.setTimeout(A, 0), { ...V, timeLeft: 0 })
            : { ...V, timeLeft: j };
        });
      }, [A]),
      X = ke.useCallback(() => {
        const V = wr(),
          j = Array.from({ length: Math.max(m - 1, 0) }, () => wr(V.id));
        ((J.current = Date.now()),
          M((se) => ({ ...se, activePlate: Da(V), upcomingPlates: j })));
      }, [m]),
      ee = ke.useCallback(() => {
        (K(), (H.current = window.setInterval(pe, 1e3)));
      }, [K, pe]),
      q = ke.useCallback(() => {
        (K(), (J.current = null), M(Ia(R, m)));
      }, [m, K, R]),
      Ee = ke.useCallback(() => {
        (q(),
          M((V) => ({
            ...V,
            status: 'running',
            timeLeft: V.timeLimit,
            startedAt: Date.now(),
          })),
          X(),
          ee());
      }, [X, q, ee]),
      Oe = ke.useCallback(() => {
        Ee();
      }, [Ee]),
      b = ke.useCallback((V) => {
        M((j) => ({ ...j, completedPlates: [...j.completedPlates, V] }));
      }, []),
      Y = ke.useCallback(() => {
        M((V) => {
          const j = V.upcomingPlates[0] ?? wr(V.activePlate?.id),
            se = wr(j?.id),
            Ce = [...V.upcomingPlates.slice(1), se];
          return (
            (J.current = Date.now()),
            { ...V, activePlate: Da(j), upcomingPlates: Ce }
          );
        });
      }, [m]),
      Ze = ke.useCallback(
        (V) => {
          M((j) => {
            if (j.status !== 'running' || !j.activePlate) return j;
            const se = V.length === 1 ? V.toLowerCase() : V;
            if (!qf(se)) return j;
            const Ce = j.activePlate.remaining.charAt(0);
            if (!Ce) return j;
            if (se === Ce) {
              const ye = j.activePlate.typed + Ce,
                Ne = j.activePlate.remaining.slice(1),
                Pe = j.metrics.combo + 1,
                lt = j.metrics.score + Xf + Pe,
                Je = {
                  ...j.metrics,
                  combo: Pe,
                  maxCombo: Math.max(j.metrics.maxCombo, Pe),
                  correctChars: j.metrics.correctChars + 1,
                  score: lt,
                };
              if (Ne.length === 0) {
                const kt = {
                  ...j.activePlate,
                  typed: ye,
                  remaining: '',
                  mistakes: j.activePlate.mistakes,
                  completed: !0,
                  durationMs: J.current ? Date.now() - J.current : 0,
                };
                return (
                  window.setTimeout(() => {
                    (b(kt), Y());
                  }, 0),
                  {
                    ...j,
                    activePlate: {
                      ...j.activePlate,
                      typed: ye,
                      remaining: '',
                      mistakes: j.activePlate.mistakes,
                    },
                    metrics: {
                      ...Je,
                      combo: Pe,
                      score: lt + Gf,
                      coins: j.metrics.coins + (j.activePlate?.price ?? 0),
                    },
                  }
                );
              }
              return {
                ...j,
                activePlate: { ...j.activePlate, typed: ye, remaining: Ne },
                metrics: Je,
              };
            }
            return {
              ...j,
              activePlate: {
                ...j.activePlate,
                mistakes: j.activePlate.mistakes + 1,
              },
              metrics: {
                ...j.metrics,
                combo: 0,
                missedChars: j.metrics.missedChars + 1,
                score: Math.max(0, j.metrics.score - Zf),
              },
            };
          });
        },
        [Y, b]
      );
    return (
      ke.useEffect(() => {
        re.status !== 'running' || re.timeLeft > 0 || A();
      }, [A, re.status, re.timeLeft]),
      ke.useEffect(() => () => K(), [K]),
      ke.useMemo(
        () => ({ ...re, start: Ee, restart: Oe, handleKeyInput: Ze }),
        [Ze, Oe, Ee, re]
      )
    );
  };
function ed({ onStart: h }) {
  return S.jsxs('section', {
    className: 'title-screen',
    children: [
      S.jsx('h2', { children: 'ようこそ 寿司打 へ' }),
      S.jsx('p', {
        children:
          '次々と流れてくる寿司ネタをローマ字でタイピングして食べよう！',
      }),
      S.jsxs('ul', {
        className: 'title-screen__tips',
        children: [
          S.jsx('li', { children: '制限時間は 60 秒です。' }),
          S.jsx('li', {
            children:
              '正しくタイプするとスコアが伸び、コンボで高得点を狙えます。',
          }),
          S.jsx('li', {
            children: 'ミスするとコンボが途切れてしまうので注意！',
          }),
        ],
      }),
      S.jsx('button', {
        type: 'button',
        className: 'title-screen__start',
        onClick: h,
        children: 'ゲームスタート',
      }),
      S.jsx('p', {
        className: 'title-screen__hint',
        children: 'Enter または スペースキー でも開始できます。',
      }),
    ],
  });
}
function td({ metrics: h, timeLeft: R }) {
  const m =
    h.correctChars + h.missedChars === 0
      ? 100
      : Math.round((h.correctChars / (h.correctChars + h.missedChars)) * 100);
  return S.jsxs('section', {
    className: 'score-board',
    children: [
      S.jsxs('div', {
        className: 'score-board__item',
        children: [
          S.jsx('span', {
            className: 'score-board__label',
            children: 'スコア',
          }),
          S.jsx('strong', {
            className: 'score-board__value',
            children: h.score,
          }),
        ],
      }),
      S.jsxs('div', {
        className: 'score-board__item',
        children: [
          S.jsx('span', {
            className: 'score-board__label',
            children: '残り時間',
          }),
          S.jsxs('strong', {
            className: 'score-board__value',
            children: [R, 's'],
          }),
        ],
      }),
      S.jsxs('div', {
        className: 'score-board__item',
        children: [
          S.jsx('span', {
            className: 'score-board__label',
            children: 'コンボ',
          }),
          S.jsx('strong', {
            className: 'score-board__value',
            children: h.combo,
          }),
          S.jsxs('span', {
            className: 'score-board__sub',
            children: ['最大 ', h.maxCombo],
          }),
        ],
      }),
      S.jsxs('div', {
        className: 'score-board__item',
        children: [
          S.jsx('span', {
            className: 'score-board__label',
            children: '正タイプ',
          }),
          S.jsx('strong', {
            className: 'score-board__value',
            children: h.correctChars,
          }),
        ],
      }),
      S.jsxs('div', {
        className: 'score-board__item',
        children: [
          S.jsx('span', {
            className: 'score-board__label',
            children: 'ミスタイプ',
          }),
          S.jsx('strong', {
            className: 'score-board__value',
            children: h.missedChars,
          }),
        ],
      }),
      S.jsxs('div', {
        className: 'score-board__item',
        children: [
          S.jsx('span', {
            className: 'score-board__label',
            children: '正確率',
          }),
          S.jsxs('strong', {
            className: 'score-board__value',
            children: [m, '%'],
          }),
        ],
      }),
      S.jsxs('div', {
        className: 'score-board__item',
        children: [
          S.jsx('span', {
            className: 'score-board__label',
            children: '獲得した皿',
          }),
          S.jsxs('strong', {
            className: 'score-board__value',
            children: [h.coins, ' 円'],
          }),
        ],
      }),
    ],
  });
}
const nd = (h) =>
  S.jsxs('span', {
    className: 'sushi-card__reading',
    children: [
      S.jsx('span', {
        className: 'sushi-card__reading-typed',
        children: h.typed,
      }),
      S.jsx('span', {
        className: 'sushi-card__reading-remaining',
        children: h.remaining,
      }),
    ],
  });
function rd({ activePlate: h, upcoming: R }) {
  return S.jsxs('section', {
    className: 'sushi-lane',
    children: [
      h
        ? S.jsxs('article', {
            className: 'sushi-card sushi-card--active',
            children: [
              S.jsx('h2', {
                className: 'sushi-card__label',
                children: h.label,
              }),
              nd(h),
              S.jsxs('span', {
                className: 'sushi-card__price',
                children: [h.price, ' 円'],
              }),
            ],
          })
        : S.jsx('article', {
            className: 'sushi-card sushi-card--placeholder',
            children: S.jsx('p', { children: 'スペースでスタート' }),
          }),
      S.jsx('div', {
        className: 'sushi-lane__queue',
        children: R.map((m) =>
          S.jsxs(
            'article',
            {
              className: 'sushi-card',
              children: [
                S.jsx('h3', {
                  className: 'sushi-card__label',
                  children: m.label,
                }),
                S.jsx('span', {
                  className: 'sushi-card__reading',
                  children: m.reading,
                }),
                S.jsxs('span', {
                  className: 'sushi-card__price',
                  children: [m.price, ' 円'],
                }),
              ],
            },
            m.id
          )
        ),
      }),
    ],
  });
}
function ld({ state: h }) {
  return S.jsxs('section', {
    className: 'game-screen',
    children: [
      S.jsx(td, { metrics: h.metrics, timeLeft: h.timeLeft }),
      S.jsx(rd, { activePlate: h.activePlate, upcoming: h.upcomingPlates }),
      S.jsx('p', {
        className: 'game-screen__hint',
        children: 'キーボードでローマ字入力しよう。',
      }),
    ],
  });
}
function ud({ metrics: h, completed: R, onRetry: m }) {
  const re =
    h.correctChars + h.missedChars === 0
      ? 100
      : Math.round((h.correctChars / (h.correctChars + h.missedChars)) * 100);
  return S.jsxs('section', {
    className: 'result-summary',
    children: [
      S.jsxs('header', {
        className: 'result-summary__header',
        children: [
          S.jsx('h2', { children: 'お疲れさまでした！' }),
          S.jsxs('p', { children: ['今日の握りは ', R.length, ' 皿でした。'] }),
        ],
      }),
      S.jsxs('dl', {
        className: 'result-summary__stats',
        children: [
          S.jsxs('div', {
            children: [
              S.jsx('dt', { children: 'スコア' }),
              S.jsx('dd', { children: h.score }),
            ],
          }),
          S.jsxs('div', {
            children: [
              S.jsx('dt', { children: '最大コンボ' }),
              S.jsx('dd', { children: h.maxCombo }),
            ],
          }),
          S.jsxs('div', {
            children: [
              S.jsx('dt', { children: '正確率' }),
              S.jsxs('dd', { children: [re, '%'] }),
            ],
          }),
          S.jsxs('div', {
            children: [
              S.jsx('dt', { children: 'ミスタイプ' }),
              S.jsx('dd', { children: h.missedChars }),
            ],
          }),
          S.jsxs('div', {
            children: [
              S.jsx('dt', { children: '獲得皿' }),
              S.jsxs('dd', { children: [h.coins, ' 円分'] }),
            ],
          }),
        ],
      }),
      S.jsx('button', {
        type: 'button',
        className: 'result-summary__retry',
        onClick: m,
        children: 'もう一度遊ぶ',
      }),
      S.jsx('ul', {
        className: 'result-summary__list',
        children: R.map((M) =>
          S.jsxs(
            'li',
            {
              children: [
                S.jsx('span', {
                  className: 'result-summary__list-label',
                  children: M.label,
                }),
                S.jsx('span', {
                  className: 'result-summary__list-reading',
                  children: M.reading,
                }),
                S.jsxs('span', {
                  className: 'result-summary__list-time',
                  children: [(M.durationMs / 1e3).toFixed(1), 's'],
                }),
                S.jsxs('span', {
                  className: 'result-summary__list-miss',
                  children: ['ミス ', M.mistakes],
                }),
              ],
            },
            `${M.id}-${M.typed}`
          )
        ),
      }),
    ],
  });
}
function id({ metrics: h, completedPlates: R, onRetry: m }) {
  return S.jsx('section', {
    className: 'result-screen',
    children: S.jsx(ud, { metrics: h, completed: R, onRetry: m }),
  });
}
const od = (h) => {
  if (!(h instanceof HTMLElement)) return !1;
  const R = h.tagName;
  return R === 'INPUT' || R === 'TEXTAREA' || h.isContentEditable;
};
function sd() {
  const {
    status: h,
    timeLeft: R,
    activePlate: m,
    upcomingPlates: re,
    metrics: M,
    completedPlates: H,
    start: J,
    restart: K,
    handleKeyInput: A,
  } = bf();
  return (
    ke.useEffect(() => {
      const pe = (X) => {
        if (!od(X.target)) {
          if (h === 'idle' && (X.key === 'Enter' || X.key === ' ')) {
            (X.preventDefault(), J());
            return;
          }
          if (h === 'finished' && (X.key === 'Enter' || X.key === ' ')) {
            (X.preventDefault(), K());
            return;
          }
          h === 'running' && X.key.length === 1 && A(X.key);
        }
      };
      return (
        window.addEventListener('keydown', pe),
        () => window.removeEventListener('keydown', pe)
      );
    }, [A, K, J, h]),
    S.jsxs('div', {
      className: 'app',
      children: [
        S.jsxs('header', {
          className: 'app__header',
          children: [
            S.jsx('h1', { children: '寿司打クローン' }),
            S.jsx('p', {
              children: 'ローマ字タイピングで次々と皿を獲得しよう！',
            }),
          ],
        }),
        S.jsxs('main', {
          className: 'app__main',
          children: [
            h === 'idle' && S.jsx(ed, { onStart: J }),
            h === 'running' &&
              S.jsx(ld, {
                state: {
                  timeLeft: R,
                  activePlate: m,
                  upcomingPlates: re,
                  metrics: M,
                },
              }),
            h === 'finished' &&
              S.jsx(id, { metrics: M, completedPlates: H, onRetry: K }),
          ],
        }),
      ],
    })
  );
}
Qf.createRoot(document.getElementById('root')).render(
  S.jsx(Uf.StrictMode, { children: S.jsx(sd, {}) })
);
