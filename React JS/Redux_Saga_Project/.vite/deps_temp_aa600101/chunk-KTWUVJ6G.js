// node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js
var createSymbol = function createSymbol2(name) {
  return "@@redux-saga/" + name;
};
var CANCEL = createSymbol("CANCEL_PROMISE");
var CHANNEL_END_TYPE = createSymbol("CHANNEL_END");
var IO = createSymbol("IO");
var MATCH = createSymbol("MATCH");
var MULTICAST = createSymbol("MULTICAST");
var SAGA_ACTION = createSymbol("SAGA_ACTION");
var SELF_CANCELLATION = createSymbol("SELF_CANCELLATION");
var TASK = createSymbol("TASK");
var TASK_CANCEL = createSymbol("TASK_CANCEL");
var TERMINATE = createSymbol("TERMINATE");
var SAGA_LOCATION = createSymbol("LOCATION");

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@redux-saga/is/dist/redux-saga-is.esm.js
var undef = function undef2(v) {
  return v === null || v === void 0;
};
var notUndef = function notUndef2(v) {
  return v !== null && v !== void 0;
};
var func = function func2(f) {
  return typeof f === "function";
};
var string = function string2(s) {
  return typeof s === "string";
};
var array = Array.isArray;
var object = function object2(obj) {
  return obj && !array(obj) && typeof obj === "object";
};
var promise = function promise2(p) {
  return p && func(p.then);
};
var iterator = function iterator2(it) {
  return it && func(it.next) && func(it.throw);
};
var task = function task2(t) {
  return t && t[TASK];
};
var buffer = function buffer2(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var pattern = function pattern2(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern2));
};
var channel = function channel2(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc2(f) {
  return func(f) && f.hasOwnProperty("toString");
};
var symbol = function symbol2(sym) {
  return Boolean(sym) && typeof Symbol === "function" && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast2(ch) {
  return channel(ch) && ch[MULTICAST];
};
var effect = function effect2(eff) {
  return eff && eff[IO];
};

// node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js
var MAX_SIGNED_INT = 2147483647;
function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }
  if (ms > MAX_SIGNED_INT) {
    throw new Error("delay only supports a maximum value of " + MAX_SIGNED_INT + "ms");
  }
  var timeoutId;
  var promise3 = new Promise(function(resolve) {
    timeoutId = setTimeout(resolve, Math.min(MAX_SIGNED_INT, ms), val);
  });
  promise3[CANCEL] = function() {
    clearTimeout(timeoutId);
  };
  return promise3;
}
var redux_saga_delay_p_esm_default = delayP;

// node_modules/@redux-saga/core/dist/io-22ea0cf9.js
var konst = function konst2(v) {
  return function() {
    return v;
  };
};
var kTrue = konst(true);
var noop = function noop2() {
};
if (typeof Proxy !== "undefined") {
  noop = new Proxy(noop, {
    set: function set() {
      throw internalErr("There was an attempt to assign a property to internal `noop` function.");
    }
  });
}
var identity = function identity2(v) {
  return v;
};
var hasSymbol = typeof Symbol === "function";
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : "@@asyncIterator";
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols2(target, source) {
  _extends(target, source);
  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function(s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap2(mapper, arr) {
  var _ref;
  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array2, item) {
  var index = array2.indexOf(item);
  if (index >= 0) {
    array2.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    fn();
  };
}
var kThrow = function kThrow2(err) {
  throw err;
};
var kReturn = function kReturn2(value) {
  return {
    value,
    done: true
  };
};
function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }
  if (name === void 0) {
    name = "iterator";
  }
  var iterator3 = {
    meta: {
      name
    },
    next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };
  if (typeof Symbol !== "undefined") {
    iterator3[Symbol.iterator] = function() {
      return iterator3;
    };
  }
  return iterator3;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr2(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning2(ctx, props) {
  return (ctx ? ctx + "." : "") + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n";
var createEmptyArray = function createEmptyArray2(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch2(dispatch) {
  return function(action) {
    if (true) {
      check(action, function(ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }
    return dispatch(Object.defineProperty(action, SAGA_ACTION, {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate2(res) {
  return res === TERMINATE;
};
var shouldCancel = function shouldCancel2(res) {
  return res === TASK_CANCEL;
};
var shouldComplete = function shouldComplete2(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;
  if (true) {
    check(totalCount, function(c) {
      return c > 0;
    }, "createAllStyleChildCallbacks: get an empty array or object");
  }
  var completedCount = 0;
  var completed;
  var results = array(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};
  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }
  keys.forEach(function(key) {
    var chCbAtKey = function chCbAtKey2(res, isErr) {
      if (completed) {
        return;
      }
      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };
    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });
  parentCallback.cancel = function() {
    if (!completed) {
      completed = true;
      keys.forEach(function(key) {
        return childCallbacks[key].cancel();
      });
    }
  };
  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || "anonymous",
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[SAGA_LOCATION];
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a, b) {
    return function() {
      return a(b.apply(void 0, arguments));
    };
  });
}
var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};
function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }
  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;
  var push = function push2(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };
  var take2 = function take3() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };
  var flush2 = function flush3() {
    var items = [];
    while (length) {
      items.push(take2());
    }
    return items;
  };
  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put2(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush2();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;
          default:
        }
      }
    },
    take: take2,
    flush: flush2
  };
}
var none = function none2() {
  return zeroBuffer;
};
var fixed = function fixed2(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping2(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding2(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding2(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};
var buffers = Object.freeze({
  __proto__: null,
  none,
  fixed,
  dropping,
  sliding,
  expanding
});
var TAKE = "TAKE";
var PUT = "PUT";
var ALL = "ALL";
var RACE = "RACE";
var CALL = "CALL";
var CPS = "CPS";
var FORK = "FORK";
var JOIN = "JOIN";
var CANCEL2 = "CANCEL";
var SELECT = "SELECT";
var ACTION_CHANNEL = "ACTION_CHANNEL";
var CANCELLED = "CANCELLED";
var FLUSH = "FLUSH";
var GET_CONTEXT = "GET_CONTEXT";
var SET_CONTEXT = "SET_CONTEXT";
var effectTypes = Object.freeze({
  __proto__: null,
  TAKE,
  PUT,
  ALL,
  RACE,
  CALL,
  CPS,
  FORK,
  JOIN,
  CANCEL: CANCEL2,
  SELECT,
  ACTION_CHANNEL,
  CANCELLED,
  FLUSH,
  GET_CONTEXT,
  SET_CONTEXT
});
var TEST_HINT = "\n(HINT: if you are getting these errors in tests, consider using createMockTask from @redux-saga/testing-utils)";
var makeEffect = function makeEffect2(type, payload) {
  var _ref;
  return _ref = {}, _ref[IO] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};
var isForkEffect = function isForkEffect2(eff) {
  return effect(eff) && eff.type === FORK;
};
var detach = function detach2(eff) {
  if (true) {
    check(eff, isForkEffect, "detach(eff): argument must be a fork effect");
  }
  return makeEffect(FORK, _extends({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = "*";
  }
  if (arguments.length) {
    check(arguments[0], notUndef, "take(patternOrChannel): patternOrChannel is undefined");
  }
  if (pattern(patternOrChannel)) {
    if (notUndef(multicastPattern)) {
      console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types");
    }
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }
  if (multicast(patternOrChannel) && notUndef(multicastPattern) && pattern(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }
  if (channel(patternOrChannel)) {
    if (notUndef(multicastPattern)) {
      console.warn("take(channel) takes one argument but two were provided. Second argument is ignored.");
    }
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }
  if (true) {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe2() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel$1, action) {
  if (true) {
    if (arguments.length > 1) {
      check(channel$1, notUndef, "put(channel, action): argument channel is undefined");
      check(channel$1, channel, "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, notUndef, "put(channel, action): argument action is undefined");
    } else {
      check(channel$1, notUndef, "put(action): argument action is undefined");
    }
  }
  if (undef(action)) {
    action = channel$1;
    channel$1 = void 0;
  }
  return makeEffect(PUT, {
    channel: channel$1,
    action
  });
}
var putResolve = function putResolve2() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
}
var validateFnDescriptor = function validateFnDescriptor2(effectName, fnDescriptor) {
  check(fnDescriptor, notUndef, effectName + ": argument fn is undefined or null");
  if (func(fnDescriptor)) {
    return;
  }
  var context = null;
  var fn;
  if (array(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, notUndef, effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (object(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, notUndef, effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, func, effectName + ": argument fn is not function");
    return;
  }
  if (context && string(fn)) {
    check(context[fn], func, effectName + ': context arguments has no such method - "' + fn + '"');
    return;
  }
  check(fn, func, effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};
function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;
  if (func(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (array(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }
    if (context && string(fn) && func(context[fn])) {
      fn = context[fn];
    }
  }
  return {
    context,
    fn,
    args
  };
}
var isNotDelayEffect = function isNotDelayEffect2(fn) {
  return fn !== delay;
};
function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (true) {
    var arg0 = typeof args[0] === "number" ? args[0] : "ms";
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor("call", fnDescriptor);
  }
  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }
  var fnDescriptor = [context, fn];
  if (true) {
    validateFnDescriptor("apply", fnDescriptor);
  }
  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  if (true) {
    validateFnDescriptor("cps", fnDescriptor);
  }
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  if (true) {
    validateFnDescriptor("fork", fnDescriptor);
    check(fnDescriptor, function(arg) {
      return !effect(arg);
    }, "fork: argument must not be an effect");
  }
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  if (true) {
    validateFnDescriptor("spawn", fnDescriptor);
  }
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }
  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  if (true) {
    if (arguments.length > 1) {
      throw new Error("join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.");
    }
    if (array(taskOrTasks)) {
      taskOrTasks.forEach(function(t) {
        check(t, task, "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, task, "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }
  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = SELF_CANCELLATION;
  }
  if (true) {
    if (arguments.length > 1) {
      throw new Error("cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.");
    }
    if (array(taskOrTasks)) {
      taskOrTasks.forEach(function(t) {
        check(t, task, "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== SELF_CANCELLATION && notUndef(taskOrTasks)) {
      check(taskOrTasks, task, "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }
  return makeEffect(CANCEL2, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }
  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }
  if (arguments.length) {
    check(arguments[0], notUndef, "select(selector, [...]): argument selector is undefined");
    check(selector, func, "select(selector, [...]): argument " + selector + " is not a function");
  }
  return makeEffect(SELECT, {
    selector,
    args
  });
}
function actionChannel(pattern$1, buffer$1) {
  if (true) {
    check(pattern$1, pattern, "actionChannel(pattern,...): argument pattern is not valid");
    if (arguments.length > 1) {
      check(buffer$1, notUndef, "actionChannel(pattern, buffer): argument buffer is undefined");
      check(buffer$1, buffer, "actionChannel(pattern, buffer): argument " + buffer$1 + " is not a valid buffer");
    }
  }
  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel$1) {
  if (true) {
    check(channel$1, channel, "flush(channel): argument " + channel$1 + " is not valid channel");
  }
  return makeEffect(FLUSH, channel$1);
}
function getContext(prop) {
  if (true) {
    check(prop, string, "getContext(prop): argument " + prop + " is not a string");
  }
  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    check(props, object, createSetContextWarning(null, props));
  }
  return makeEffect(SET_CONTEXT, props);
}
var delay = call.bind(null, redux_saga_delay_p_esm_default);

export {
  CANCEL,
  CHANNEL_END_TYPE,
  IO,
  MATCH,
  MULTICAST,
  SAGA_ACTION,
  SELF_CANCELLATION,
  TASK,
  TASK_CANCEL,
  TERMINATE,
  SAGA_LOCATION,
  _extends,
  undef,
  notUndef,
  func,
  string,
  array,
  object,
  promise,
  iterator,
  buffer,
  channel,
  stringableFunc,
  symbol,
  kTrue,
  noop,
  identity,
  asyncIteratorSymbol,
  check,
  assignWithSymbols,
  flatMap,
  remove,
  once,
  makeIterator,
  logError,
  internalErr,
  createSetContextWarning,
  createEmptyArray,
  wrapSagaDispatch,
  shouldTerminate,
  shouldCancel,
  shouldComplete,
  createAllStyleChildCallbacks,
  getMetaInfo,
  getLocation,
  compose,
  none,
  sliding,
  expanding,
  buffers,
  TAKE,
  PUT,
  ALL,
  RACE,
  CALL,
  CPS,
  FORK,
  JOIN,
  CANCEL2,
  SELECT,
  ACTION_CHANNEL,
  CANCELLED,
  FLUSH,
  GET_CONTEXT,
  SET_CONTEXT,
  effectTypes,
  detach,
  take,
  takeMaybe,
  put,
  putResolve,
  all,
  race,
  call,
  apply,
  cps,
  fork,
  spawn,
  join,
  cancel,
  select,
  actionChannel,
  cancelled,
  flush,
  getContext,
  setContext,
  delay
};
//# sourceMappingURL=chunk-KTWUVJ6G.js.map
