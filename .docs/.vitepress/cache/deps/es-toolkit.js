import {
  after,
  ary,
  camelCase,
  capitalize,
  chunk,
  clamp,
  clone,
  cloneDeep,
  cloneDeepWith,
  compact,
  debounce,
  deburr,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  escape,
  escapeRegExp,
  fill,
  findKey,
  flatten,
  flow,
  flowRight,
  groupBy,
  head,
  identity,
  inRange,
  initial,
  intersection,
  intersectionBy,
  intersectionWith,
  invert,
  isArray,
  isArrayBuffer,
  isBuffer,
  isDate,
  isEqual,
  isEqualWith,
  isFunction,
  isLength,
  isMap,
  isNil,
  isNull,
  isObjectLike,
  isPlainObject,
  isPlainObject2,
  isPrimitive,
  isRegExp,
  isSet,
  isSymbol2 as isSymbol,
  isTypedArray,
  isUndefined,
  isWeakMap,
  isWeakSet,
  kebabCase,
  last,
  lowerCase,
  lowerFirst,
  mapKeys,
  mapValues,
  maxBy,
  mean,
  meanBy,
  memoize,
  minBy,
  negate,
  noop,
  once,
  pad,
  partial,
  partialRight,
  pull,
  random,
  randomInt,
  range,
  remove,
  rest,
  sample,
  sampleSize,
  shuffle,
  snakeCase,
  sum,
  tail,
  take,
  takeRight,
  trim,
  trimEnd,
  trimStart,
  unary,
  unescape,
  uniq,
  uniqBy,
  uniqWith,
  unzip,
  upperCase,
  upperFirst,
  windowed,
  without,
  words,
  zip
} from "./chunk-DBOZYYYL.js";
import {
  __publicField
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/at.mjs
function at(arr, indices) {
  const result = new Array(indices.length);
  const length = arr.length;
  for (let i = 0; i < indices.length; i++) {
    let index = indices[i];
    index = Number.isInteger(index) ? index : Math.trunc(index) || 0;
    if (index < 0) {
      index += length;
    }
    result[i] = arr[index];
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/countBy.mjs
function countBy(arr, mapper) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = mapper(item);
    result[key] = (result[key] ?? 0) + 1;
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/flatMap.mjs
function flatMap(arr, iteratee, depth = 1) {
  return flatten(arr.map((item) => iteratee(item)), depth);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/flattenDeep.mjs
function flattenDeep(arr) {
  return flatten(arr, Infinity);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/flatMapDeep.mjs
function flatMapDeep(arr, iteratee) {
  return flattenDeep(arr.map((item) => iteratee(item)));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/forEachRight.mjs
function forEachRight(arr, callback) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    callback(element, i, arr);
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/isSubset.mjs
function isSubset(superset, subset) {
  return difference(subset, superset).length === 0;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/isSubsetWith.mjs
function isSubsetWith(superset, subset, areItemsEqual) {
  return differenceWith(subset, superset, areItemsEqual).length === 0;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/keyBy.mjs
function keyBy(arr, getKeyFromItem) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = getKeyFromItem(item);
    result[key] = item;
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/_internal/compareValues.mjs
function compareValues(a, b, order) {
  if (a < b) {
    return order === "asc" ? -1 : 1;
  }
  if (a > b) {
    return order === "asc" ? 1 : -1;
  }
  return 0;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/orderBy.mjs
function orderBy(arr, criteria, orders) {
  return arr.slice().sort((a, b) => {
    const ordersLength = orders.length;
    for (let i = 0; i < criteria.length; i++) {
      const order = ordersLength > i ? orders[i] : orders[ordersLength - 1];
      const criterion = criteria[i];
      const criterionIsFunction = typeof criterion === "function";
      const valueA = criterionIsFunction ? criterion(a) : a[criterion];
      const valueB = criterionIsFunction ? criterion(b) : b[criterion];
      const result = compareValues(valueA, valueB, order);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  });
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/partition.mjs
function partition(arr, isInTruthy) {
  const truthy = [];
  const falsy = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (isInTruthy(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  }
  return [truthy, falsy];
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/pullAt.mjs
function pullAt(arr, indicesToRemove) {
  const removed = at(arr, indicesToRemove);
  const indices = new Set(indicesToRemove.slice().sort((x, y) => y - x));
  for (const index of indices) {
    arr.splice(index, 1);
  }
  return removed;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/sortBy.mjs
function sortBy(arr, criteria) {
  return orderBy(arr, criteria, ["asc"]);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/takeRightWhile.mjs
function takeRightWhile(arr, shouldContinueTaking) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!shouldContinueTaking(arr[i])) {
      return arr.slice(i + 1);
    }
  }
  return arr.slice();
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/takeWhile.mjs
function takeWhile(arr, shouldContinueTaking) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!shouldContinueTaking(item)) {
      break;
    }
    result.push(item);
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/toFilled.mjs
function toFilled(arr, value, start = 0, end = arr.length) {
  const length = arr.length;
  const finalStart = Math.max(start >= 0 ? start : length + start, 0);
  const finalEnd = Math.min(end >= 0 ? end : length + end, length);
  const newArr = arr.slice();
  for (let i = finalStart; i < finalEnd; i++) {
    newArr[i] = value;
  }
  return newArr;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/union.mjs
function union(arr1, arr2) {
  return uniq(arr1.concat(arr2));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/unionBy.mjs
function unionBy(arr1, arr2, mapper) {
  return uniqBy(arr1.concat(arr2), mapper);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/unionWith.mjs
function unionWith(arr1, arr2, areItemsEqual) {
  return uniqWith(arr1.concat(arr2), areItemsEqual);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/unzipWith.mjs
function unzipWith(target, iteratee) {
  const maxLength = Math.max(...target.map((innerArray) => innerArray.length));
  const result = new Array(maxLength);
  for (let i = 0; i < maxLength; i++) {
    const group = new Array(target.length);
    for (let j = 0; j < target.length; j++) {
      group[j] = target[j][i];
    }
    result[i] = iteratee(...group);
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/xor.mjs
function xor(arr1, arr2) {
  return difference(union(arr1, arr2), intersection(arr1, arr2));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/xorBy.mjs
function xorBy(arr1, arr2, mapper) {
  const union2 = unionBy(arr1, arr2, mapper);
  const intersection2 = intersectionBy(arr1, arr2, mapper);
  return differenceBy(union2, intersection2, mapper);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/xorWith.mjs
function xorWith(arr1, arr2, areElementsEqual) {
  const union2 = unionWith(arr1, arr2, areElementsEqual);
  const intersection2 = intersectionWith(arr1, arr2, areElementsEqual);
  return differenceWith(union2, intersection2, areElementsEqual);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/zipObject.mjs
function zipObject(keys, values) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/array/zipWith.mjs
function zipWith(arr1, ...rest2) {
  const arrs = [arr1, ...rest2.slice(0, -1)];
  const combine = rest2[rest2.length - 1];
  const maxIndex = Math.max(...arrs.map((arr) => arr.length));
  const result = Array(maxIndex);
  for (let i = 0; i < maxIndex; i++) {
    const elements = arrs.map((arr) => arr[i]);
    result[i] = combine(...elements);
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/error/AbortError.mjs
var AbortError = class extends Error {
  constructor(message = "The operation was aborted") {
    super(message);
    this.name = "AbortError";
  }
};

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/error/TimeoutError.mjs
var TimeoutError = class extends Error {
  constructor(message = "The operation was timed out") {
    super(message);
    this.name = "TimeoutError";
  }
};

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/function/asyncNoop.mjs
async function asyncNoop() {
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/function/before.mjs
function before(n, func) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n must be a non-negative integer.");
  }
  let counter = 0;
  return (...args) => {
    if (++counter < n) {
      return func(...args);
    }
    return void 0;
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/function/curry.mjs
function curry(func) {
  if (func.length === 0 || func.length === 1) {
    return func;
  }
  return function(arg) {
    return makeCurry(func, func.length, [arg]);
  };
}
function makeCurry(origin, argsLength, args) {
  if (args.length === argsLength) {
    return origin(...args);
  } else {
    const next = function(arg) {
      return makeCurry(origin, argsLength, [...args, arg]);
    };
    return next;
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/function/curryRight.mjs
function curryRight(func) {
  if (func.length === 0 || func.length === 1) {
    return func;
  }
  return function(arg) {
    return makeCurryRight(func, func.length, [arg]);
  };
}
function makeCurryRight(origin, argsLength, args) {
  if (args.length === argsLength) {
    return origin(...args);
  } else {
    const next = function(arg) {
      return makeCurryRight(origin, argsLength, [arg, ...args]);
    };
    return next;
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/promise/delay.mjs
function delay(ms, { signal } = {}) {
  return new Promise((resolve, reject) => {
    const abortError = () => {
      reject(new AbortError());
    };
    const abortHandler = () => {
      clearTimeout(timeoutId);
      abortError();
    };
    if (signal == null ? void 0 : signal.aborted) {
      return abortError();
    }
    const timeoutId = setTimeout(() => {
      signal == null ? void 0 : signal.removeEventListener("abort", abortHandler);
      resolve();
    }, ms);
    signal == null ? void 0 : signal.addEventListener("abort", abortHandler, { once: true });
  });
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/function/retry.mjs
var DEFAULT_DELAY = 0;
var DEFAULT_RETRIES = Number.POSITIVE_INFINITY;
async function retry(func, _options) {
  let delay$1;
  let retries;
  let signal;
  if (typeof _options === "number") {
    delay$1 = DEFAULT_DELAY;
    retries = _options;
    signal = void 0;
  } else {
    delay$1 = (_options == null ? void 0 : _options.delay) ?? DEFAULT_DELAY;
    retries = (_options == null ? void 0 : _options.retries) ?? DEFAULT_RETRIES;
    signal = _options == null ? void 0 : _options.signal;
  }
  let error;
  for (let attempts = 0; attempts < retries; attempts++) {
    if (signal == null ? void 0 : signal.aborted) {
      throw error ?? new Error(`The retry operation was aborted due to an abort signal.`);
    }
    try {
      return await func();
    } catch (err) {
      error = err;
      const currentDelay = typeof delay$1 === "function" ? delay$1(attempts) : delay$1;
      await delay(currentDelay);
    }
  }
  throw error;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/function/spread.mjs
function spread(func) {
  return function(argsArr) {
    return func.apply(this, argsArr);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/function/throttle.mjs
function throttle(func, throttleMs, { signal, edges = ["leading", "trailing"] } = {}) {
  let pendingAt = null;
  const debounced = debounce(func, throttleMs, { signal, edges });
  const throttled = function(...args) {
    if (pendingAt == null) {
      pendingAt = Date.now();
    } else {
      if (Date.now() - pendingAt >= throttleMs) {
        pendingAt = Date.now();
        debounced.cancel();
      }
    }
    debounced(...args);
  };
  throttled.cancel = debounced.cancel;
  throttled.flush = debounced.flush;
  return throttled;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/math/median.mjs
function median(nums) {
  if (nums.length === 0) {
    return NaN;
  }
  const sorted = nums.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  } else {
    return sorted[middleIndex];
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/math/medianBy.mjs
function medianBy(items, getValue) {
  const nums = items.map((x) => getValue(x));
  return median(nums);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/math/rangeRight.mjs
function rangeRight(start, end, step = 1) {
  if (end == null) {
    end = start;
    start = 0;
  }
  if (!Number.isInteger(step) || step === 0) {
    throw new Error(`The step value must be a non-zero integer.`);
  }
  const length = Math.max(Math.ceil((end - start) / step), 0);
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = start + (length - i - 1) * step;
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/math/round.mjs
function round(value, precision = 0) {
  if (!Number.isInteger(precision)) {
    throw new Error("Precision must be an integer.");
  }
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/math/sumBy.mjs
function sumBy(items, getValue) {
  let result = 0;
  for (let i = 0; i < items.length; i++) {
    result += getValue(items[i]);
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/flattenObject.mjs
function flattenObject(object, { delimiter = "." } = {}) {
  return flattenObjectImpl(object, "", delimiter);
}
function flattenObjectImpl(object, prefix = "", delimiter = ".") {
  const result = {};
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = object[key];
    const prefixedKey = prefix ? `${prefix}${delimiter}${key}` : key;
    if (isPlainObject(value) && Object.keys(value).length > 0) {
      Object.assign(result, flattenObjectImpl(value, prefixedKey, delimiter));
      continue;
    }
    if (Array.isArray(value)) {
      Object.assign(result, flattenObjectImpl(value, prefixedKey, delimiter));
      continue;
    }
    result[prefixedKey] = value;
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/merge.mjs
function merge(target, source) {
  const sourceKeys = Object.keys(source);
  for (let i = 0; i < sourceKeys.length; i++) {
    const key = sourceKeys[i];
    const sourceValue = source[key];
    const targetValue = target[key];
    if (Array.isArray(sourceValue)) {
      if (Array.isArray(targetValue)) {
        target[key] = merge(targetValue, sourceValue);
      } else {
        target[key] = merge([], sourceValue);
      }
    } else if (isPlainObject(sourceValue)) {
      if (isPlainObject(targetValue)) {
        target[key] = merge(targetValue, sourceValue);
      } else {
        target[key] = merge({}, sourceValue);
      }
    } else if (targetValue === void 0 || sourceValue !== void 0) {
      target[key] = sourceValue;
    }
  }
  return target;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/mergeWith.mjs
function mergeWith(target, source, merge2) {
  const sourceKeys = Object.keys(source);
  for (let i = 0; i < sourceKeys.length; i++) {
    const key = sourceKeys[i];
    const sourceValue = source[key];
    const targetValue = target[key];
    const merged = merge2(targetValue, sourceValue, key, target, source);
    if (merged != null) {
      target[key] = merged;
    } else if (Array.isArray(sourceValue)) {
      target[key] = mergeWith(targetValue ?? [], sourceValue, merge2);
    } else if (isObjectLike(targetValue) && isObjectLike(sourceValue)) {
      target[key] = mergeWith(targetValue ?? {}, sourceValue, merge2);
    } else if (targetValue === void 0 || sourceValue !== void 0) {
      target[key] = sourceValue;
    }
  }
  return target;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/omit.mjs
function omit(obj, keys) {
  const result = { ...obj };
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    delete result[key];
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/omitBy.mjs
function omitBy(obj, shouldOmit) {
  const result = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];
    if (!shouldOmit(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/pick.mjs
function pick(obj, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (Object.hasOwn(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/pickBy.mjs
function pickBy(obj, shouldPick) {
  const result = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];
    if (shouldPick(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/toCamelCaseKeys.mjs
function toCamelCaseKeys(obj) {
  if (isArray(obj)) {
    return obj.map((item) => toCamelCaseKeys(item));
  }
  if (isPlainObject(obj)) {
    const result = {};
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const camelKey = camelCase(key);
      const camelCaseKeys = toCamelCaseKeys(obj[key]);
      result[camelKey] = camelCaseKeys;
    }
    return result;
  }
  return obj;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/toMerged.mjs
function toMerged(target, source) {
  return merge(cloneDeep(target), source);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/object/toSnakeCaseKeys.mjs
function toSnakeCaseKeys(obj) {
  if (isArray(obj)) {
    return obj.map((item) => toSnakeCaseKeys(item));
  }
  if (isPlainObject2(obj)) {
    const result = {};
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const snakeKey = snakeCase(key);
      const snakeCaseKeys = toSnakeCaseKeys(obj[key]);
      result[snakeKey] = snakeCaseKeys;
    }
    return result;
  }
  return obj;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isBlob.mjs
function isBlob(x) {
  if (typeof Blob === "undefined") {
    return false;
  }
  return x instanceof Blob;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isBoolean.mjs
function isBoolean(x) {
  return typeof x === "boolean";
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isBrowser.mjs
function isBrowser() {
  return typeof window !== "undefined" && (window == null ? void 0 : window.document) != null;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isError.mjs
function isError(value) {
  return value instanceof Error;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isFile.mjs
function isFile(x) {
  if (typeof File === "undefined") {
    return false;
  }
  return isBlob(x) && x instanceof File;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isJSON.mjs
function isJSON(value) {
  if (typeof value !== "string") {
    return false;
  }
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isJSONValue.mjs
function isJSONValue(value) {
  switch (typeof value) {
    case "object": {
      return value === null || isJSONArray(value) || isJSONObject(value);
    }
    case "string":
    case "number":
    case "boolean": {
      return true;
    }
    default: {
      return false;
    }
  }
}
function isJSONArray(value) {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every((item) => isJSONValue(item));
}
function isJSONObject(obj) {
  if (!isPlainObject(obj)) {
    return false;
  }
  const keys = Reflect.ownKeys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];
    if (typeof key !== "string") {
      return false;
    }
    if (!isJSONValue(value)) {
      return false;
    }
  }
  return true;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isNode.mjs
function isNode() {
  var _a;
  return typeof process !== "undefined" && ((_a = process == null ? void 0 : process.versions) == null ? void 0 : _a.node) != null;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isNotNil.mjs
function isNotNil(x) {
  return x != null;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isPromise.mjs
function isPromise(value) {
  return value instanceof Promise;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/predicate/isString.mjs
function isString(value) {
  return typeof value === "string";
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/promise/semaphore.mjs
var Semaphore = class {
  constructor(capacity) {
    __publicField(this, "capacity");
    __publicField(this, "available");
    __publicField(this, "deferredTasks", []);
    this.capacity = capacity;
    this.available = capacity;
  }
  async acquire() {
    if (this.available > 0) {
      this.available--;
      return;
    }
    return new Promise((resolve) => {
      this.deferredTasks.push(resolve);
    });
  }
  release() {
    const deferredTask = this.deferredTasks.shift();
    if (deferredTask != null) {
      deferredTask();
      return;
    }
    if (this.available < this.capacity) {
      this.available++;
    }
  }
};

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/promise/mutex.mjs
var Mutex = class {
  constructor() {
    __publicField(this, "semaphore", new Semaphore(1));
  }
  get isLocked() {
    return this.semaphore.available === 0;
  }
  async acquire() {
    return this.semaphore.acquire();
  }
  release() {
    this.semaphore.release();
  }
};

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/promise/timeout.mjs
async function timeout(ms) {
  await delay(ms);
  throw new TimeoutError();
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/promise/withTimeout.mjs
async function withTimeout(run, ms) {
  return Promise.race([run(), timeout(ms)]);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/string/constantCase.mjs
function constantCase(str) {
  const words$1 = words(str);
  return words$1.map((word) => word.toUpperCase()).join("_");
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/string/pascalCase.mjs
function pascalCase(str) {
  const words$1 = words(str);
  return words$1.map((word) => capitalize(word)).join("");
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/string/reverseString.mjs
function reverseString(value) {
  return [...value].reverse().join("");
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/string/startCase.mjs
function startCase(str) {
  const words$1 = words(str.trim());
  let result = "";
  for (let i = 0; i < words$1.length; i++) {
    const word = words$1[i];
    if (result) {
      result += " ";
    }
    result += word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return result;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/util/attempt.mjs
function attempt(func) {
  try {
    return [null, func()];
  } catch (error) {
    return [error, null];
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/util/attemptAsync.mjs
async function attemptAsync(func) {
  try {
    const result = await func();
    return [null, result];
  } catch (error) {
    return [error, null];
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/util/invariant.mjs
function invariant(condition, message) {
  if (condition) {
    return;
  }
  throw new Error(message);
}
export {
  AbortError,
  Mutex,
  Semaphore,
  TimeoutError,
  after,
  ary,
  asyncNoop,
  at,
  attempt,
  attemptAsync,
  before,
  camelCase,
  capitalize,
  chunk,
  clamp,
  clone,
  cloneDeep,
  cloneDeepWith,
  compact,
  constantCase,
  countBy,
  curry,
  curryRight,
  debounce,
  deburr,
  delay,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  escape,
  escapeRegExp,
  fill,
  findKey,
  flatMap,
  flatMapDeep,
  flatten,
  flattenDeep,
  flattenObject,
  flow,
  flowRight,
  forEachRight,
  groupBy,
  head,
  identity,
  inRange,
  initial,
  intersection,
  intersectionBy,
  intersectionWith,
  invariant,
  invert,
  isArrayBuffer,
  isBlob,
  isBoolean,
  isBrowser,
  isBuffer,
  isDate,
  isEqual,
  isEqualWith,
  isError,
  isFile,
  isFunction,
  isJSON,
  isJSONArray,
  isJSONObject,
  isJSONValue,
  isLength,
  isMap,
  isNil,
  isNode,
  isNotNil,
  isNull,
  isPlainObject,
  isPrimitive,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isSubset,
  isSubsetWith,
  isSymbol,
  isTypedArray,
  isUndefined,
  isWeakMap,
  isWeakSet,
  kebabCase,
  keyBy,
  last,
  lowerCase,
  lowerFirst,
  mapKeys,
  mapValues,
  maxBy,
  mean,
  meanBy,
  median,
  medianBy,
  memoize,
  merge,
  mergeWith,
  minBy,
  negate,
  noop,
  omit,
  omitBy,
  once,
  orderBy,
  pad,
  partial,
  partialRight,
  partition,
  pascalCase,
  pick,
  pickBy,
  pull,
  pullAt,
  random,
  randomInt,
  range,
  rangeRight,
  remove,
  rest,
  retry,
  reverseString,
  round,
  sample,
  sampleSize,
  shuffle,
  snakeCase,
  sortBy,
  spread,
  startCase,
  sum,
  sumBy,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  throttle,
  timeout,
  toCamelCaseKeys,
  toFilled,
  toMerged,
  toSnakeCaseKeys,
  trim,
  trimEnd,
  trimStart,
  unary,
  unescape,
  union,
  unionBy,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  unzip,
  unzipWith,
  upperCase,
  upperFirst,
  windowed,
  withTimeout,
  without,
  words,
  xor,
  xorBy,
  xorWith,
  zip,
  zipObject,
  zipWith
};
//# sourceMappingURL=es-toolkit.js.map
