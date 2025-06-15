import {
  CASE_SPLIT_PATTERN,
  after,
  argumentsTag,
  ary,
  booleanTag,
  camelCase,
  capitalize,
  chunk,
  clamp,
  clone,
  cloneDeep,
  cloneDeepWith,
  compact,
  copyProperties,
  debounce,
  deburr,
  difference,
  differenceBy,
  differenceWith,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  eq,
  escape,
  escapeRegExp,
  fill,
  findKey,
  flatten,
  flow,
  flowRight,
  getSymbols,
  getTag,
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
  isPlainObject2 as isPlainObject,
  isPrimitive,
  isRegExp,
  isSet,
  isSymbol,
  isSymbol2,
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
  meanBy,
  memoize,
  minBy,
  negate,
  noop,
  numberTag,
  once,
  pad,
  partialImpl,
  partialRightImpl,
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
  stringTag,
  tail,
  take,
  takeRight,
  toFinite,
  toInteger,
  toNumber,
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
  __export
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/castArray.mjs
function castArray(value) {
  if (arguments.length === 0) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/toArray.mjs
function toArray(value) {
  return Array.isArray(value) ? value : Array.from(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
function isArrayLike(value) {
  return value != null && typeof value !== "function" && isLength(value.length);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/chunk.mjs
function chunk2(arr, size2 = 1) {
  size2 = Math.max(Math.floor(size2), 0);
  if (size2 === 0 || !isArrayLike(arr)) {
    return [];
  }
  return chunk(toArray(arr), size2);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/compact.mjs
function compact2(arr) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return compact(Array.from(arr));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/concat.mjs
function concat(...values2) {
  return flatten(values2);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isArrayLikeObject.mjs
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/difference.mjs
function difference2(arr, ...values2) {
  if (!isArrayLikeObject(arr)) {
    return [];
  }
  const arr1 = toArray(arr);
  const arr2 = [];
  for (let i = 0; i < values2.length; i++) {
    const value = values2[i];
    if (isArrayLikeObject(value)) {
      arr2.push(...Array.from(value));
    }
  }
  return difference(arr1, arr2);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/last.mjs
function last2(array) {
  if (!isArrayLike(array)) {
    return void 0;
  }
  return last(toArray(array));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/flattenArrayLike.mjs
function flattenArrayLike(values2) {
  const result2 = [];
  for (let i = 0; i < values2.length; i++) {
    const arrayLike = values2[i];
    if (!isArrayLikeObject(arrayLike)) {
      continue;
    }
    for (let j = 0; j < arrayLike.length; j++) {
      result2.push(arrayLike[j]);
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/isDeepKey.mjs
function isDeepKey(key) {
  switch (typeof key) {
    case "number":
    case "symbol": {
      return false;
    }
    case "string": {
      return key.includes(".") || key.includes("[") || key.includes("]");
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/toKey.mjs
function toKey(value) {
  var _a;
  if (typeof value === "string" || typeof value === "symbol") {
    return value;
  }
  if (Object.is((_a = value == null ? void 0 : value.valueOf) == null ? void 0 : _a.call(value), -0)) {
    return "-0";
  }
  return String(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/toPath.mjs
function toPath(deepKey) {
  const result2 = [];
  const length = deepKey.length;
  if (length === 0) {
    return result2;
  }
  let index = 0;
  let key = "";
  let quoteChar = "";
  let bracket = false;
  if (deepKey.charCodeAt(0) === 46) {
    result2.push("");
    index++;
  }
  while (index < length) {
    const char = deepKey[index];
    if (quoteChar) {
      if (char === "\\" && index + 1 < length) {
        index++;
        key += deepKey[index];
      } else if (char === quoteChar) {
        quoteChar = "";
      } else {
        key += char;
      }
    } else if (bracket) {
      if (char === '"' || char === "'") {
        quoteChar = char;
      } else if (char === "]") {
        bracket = false;
        result2.push(key);
        key = "";
      } else {
        key += char;
      }
    } else {
      if (char === "[") {
        bracket = true;
        if (key) {
          result2.push(key);
          key = "";
        }
      } else if (char === ".") {
        if (key) {
          result2.push(key);
          key = "";
        }
      } else {
        key += char;
      }
    }
    index++;
  }
  if (key) {
    result2.push(key);
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/get.mjs
function get(object, path, defaultValue) {
  if (object == null) {
    return defaultValue;
  }
  switch (typeof path) {
    case "string": {
      const result2 = object[path];
      if (result2 === void 0) {
        if (isDeepKey(path)) {
          return get(object, toPath(path), defaultValue);
        } else {
          return defaultValue;
        }
      }
      return result2;
    }
    case "number":
    case "symbol": {
      if (typeof path === "number") {
        path = toKey(path);
      }
      const result2 = object[path];
      if (result2 === void 0) {
        return defaultValue;
      }
      return result2;
    }
    default: {
      if (Array.isArray(path)) {
        return getWithPath(object, path, defaultValue);
      }
      if (Object.is(path == null ? void 0 : path.valueOf(), -0)) {
        path = "-0";
      } else {
        path = String(path);
      }
      const result2 = object[path];
      if (result2 === void 0) {
        return defaultValue;
      }
      return result2;
    }
  }
}
function getWithPath(object, path, defaultValue) {
  if (path.length === 0) {
    return defaultValue;
  }
  let current = object;
  for (let index = 0; index < path.length; index++) {
    if (current == null) {
      return defaultValue;
    }
    current = current[path[index]];
  }
  if (current === void 0) {
    return defaultValue;
  }
  return current;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/property.mjs
function property(path) {
  return function(object) {
    return get(object, path);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isObject.mjs
function isObject(value) {
  return value !== null && (typeof value === "object" || typeof value === "function");
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isMatch.mjs
function isMatch(target, source) {
  if (source === target) {
    return true;
  }
  switch (typeof source) {
    case "object": {
      if (source == null) {
        return true;
      }
      const keys2 = Object.keys(source);
      if (target == null) {
        return keys2.length === 0;
      }
      if (Array.isArray(source)) {
        return isArrayMatch(target, source);
      }
      if (source instanceof Map) {
        return isMapMatch(target, source);
      }
      if (source instanceof Set) {
        return isSetMatch(target, source);
      }
      for (let i = 0; i < keys2.length; i++) {
        const key = keys2[i];
        if (!isPrimitive(target) && !(key in target)) {
          return false;
        }
        if (source[key] === void 0 && target[key] !== void 0) {
          return false;
        }
        if (source[key] === null && target[key] !== null) {
          return false;
        }
        if (!isMatch(target[key], source[key])) {
          return false;
        }
      }
      return true;
    }
    case "function": {
      if (Object.keys(source).length > 0) {
        return isMatch(target, { ...source });
      }
      return false;
    }
    default: {
      if (!isObject(target)) {
        return eq(target, source);
      }
      return !source;
    }
  }
}
function isMapMatch(target, source) {
  if (source.size === 0) {
    return true;
  }
  if (!(target instanceof Map)) {
    return false;
  }
  for (const [key, value] of source.entries()) {
    if (!isMatch(target.get(key), value)) {
      return false;
    }
  }
  return true;
}
function isArrayMatch(target, source) {
  if (source.length === 0) {
    return true;
  }
  if (!Array.isArray(target)) {
    return false;
  }
  const countedIndex = /* @__PURE__ */ new Set();
  for (let i = 0; i < source.length; i++) {
    const sourceItem = source[i];
    const index = target.findIndex((targetItem, index2) => {
      return isMatch(targetItem, sourceItem) && !countedIndex.has(index2);
    });
    if (index === -1) {
      return false;
    }
    countedIndex.add(index);
  }
  return true;
}
function isSetMatch(target, source) {
  if (source.size === 0) {
    return true;
  }
  if (!(target instanceof Set)) {
    return false;
  }
  return isArrayMatch([...target], [...source]);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/matches.mjs
function matches(source) {
  source = cloneDeep(source);
  return (target) => {
    return isMatch(target, source);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs
function cloneDeepWith2(obj, cloneValue) {
  return cloneDeepWith(obj, (value, key, object, stack) => {
    const cloned = cloneValue == null ? void 0 : cloneValue(value, key, object, stack);
    if (cloned != null) {
      return cloned;
    }
    if (typeof obj !== "object") {
      return void 0;
    }
    switch (Object.prototype.toString.call(obj)) {
      case numberTag:
      case stringTag:
      case booleanTag: {
        const result2 = new obj.constructor(obj == null ? void 0 : obj.valueOf());
        copyProperties(result2, obj);
        return result2;
      }
      case argumentsTag: {
        const result2 = {};
        copyProperties(result2, obj);
        result2.length = obj.length;
        result2[Symbol.iterator] = obj[Symbol.iterator];
        return result2;
      }
      default: {
        return void 0;
      }
    }
  });
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs
function cloneDeep2(obj) {
  return cloneDeepWith2(obj);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/isIndex.mjs
var IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = Number.MAX_SAFE_INTEGER) {
  switch (typeof value) {
    case "number": {
      return Number.isInteger(value) && value >= 0 && value < length;
    }
    case "symbol": {
      return false;
    }
    case "string": {
      return IS_UNSIGNED_INTEGER.test(value);
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isArguments.mjs
function isArguments(value) {
  return value !== null && typeof value === "object" && getTag(value) === "[object Arguments]";
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/has.mjs
function has(object, path) {
  let resolvedPath;
  if (Array.isArray(path)) {
    resolvedPath = path;
  } else if (typeof path === "string" && isDeepKey(path) && (object == null ? void 0 : object[path]) == null) {
    resolvedPath = toPath(path);
  } else {
    resolvedPath = [path];
  }
  if (resolvedPath.length === 0) {
    return false;
  }
  let current = object;
  for (let i = 0; i < resolvedPath.length; i++) {
    const key = resolvedPath[i];
    if (current == null || !Object.hasOwn(current, key)) {
      const isSparseIndex = (Array.isArray(current) || isArguments(current)) && isIndex(key) && key < current.length;
      if (!isSparseIndex) {
        return false;
      }
    }
    current = current[key];
  }
  return true;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/matchesProperty.mjs
function matchesProperty(property2, source) {
  switch (typeof property2) {
    case "object": {
      if (Object.is(property2 == null ? void 0 : property2.valueOf(), -0)) {
        property2 = "-0";
      }
      break;
    }
    case "number": {
      property2 = toKey(property2);
      break;
    }
  }
  source = cloneDeep2(source);
  return function(target) {
    const result2 = get(target, property2);
    if (result2 === void 0) {
      return has(target, property2);
    }
    if (source === void 0) {
      return result2 === void 0;
    }
    return isMatch(result2, source);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/iteratee.mjs
function iteratee(value) {
  if (value == null) {
    return identity;
  }
  switch (typeof value) {
    case "function": {
      return value;
    }
    case "object": {
      if (Array.isArray(value) && value.length === 2) {
        return matchesProperty(value[0], value[1]);
      }
      return matches(value);
    }
    case "string":
    case "symbol":
    case "number": {
      return property(value);
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/differenceBy.mjs
function differenceBy2(arr, ..._values) {
  if (!isArrayLikeObject(arr)) {
    return [];
  }
  const iteratee$1 = last2(_values);
  const values2 = flattenArrayLike(_values);
  if (isArrayLikeObject(iteratee$1)) {
    return difference(Array.from(arr), values2);
  }
  return differenceBy(Array.from(arr), values2, iteratee(iteratee$1));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/differenceWith.mjs
function differenceWith2(array, ...values2) {
  if (!isArrayLikeObject(array)) {
    return [];
  }
  const comparator = last2(values2);
  const flattenedValues = flattenArrayLike(values2);
  if (typeof comparator === "function") {
    return differenceWith(Array.from(array), flattenedValues, comparator);
  }
  return difference(Array.from(array), flattenedValues);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/drop.mjs
function drop2(collection, itemsCount = 1, guard) {
  if (!isArrayLike(collection)) {
    return [];
  }
  itemsCount = guard ? 1 : toInteger(itemsCount);
  return drop(toArray(collection), itemsCount);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/dropRight.mjs
function dropRight2(collection, itemsCount = 1, guard) {
  if (!isArrayLike(collection)) {
    return [];
  }
  itemsCount = guard ? 1 : toInteger(itemsCount);
  return dropRight(toArray(collection), itemsCount);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/dropRightWhile.mjs
function dropRightWhile2(arr, predicate) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return dropRightWhileImpl(Array.from(arr), predicate);
}
function dropRightWhileImpl(arr, predicate) {
  switch (typeof predicate) {
    case "function": {
      return dropRightWhile(arr, (item, index, arr2) => Boolean(predicate(item, index, arr2)));
    }
    case "object": {
      if (Array.isArray(predicate) && predicate.length === 2) {
        const key = predicate[0];
        const value = predicate[1];
        return dropRightWhile(arr, matchesProperty(key, value));
      } else {
        return dropRightWhile(arr, matches(predicate));
      }
    }
    case "symbol":
    case "number":
    case "string": {
      return dropRightWhile(arr, property(predicate));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/dropWhile.mjs
function dropWhile2(arr, predicate) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return dropWhileImpl(toArray(arr), predicate);
}
function dropWhileImpl(arr, predicate) {
  switch (typeof predicate) {
    case "function": {
      return dropWhile(arr, (item, index, arr2) => Boolean(predicate(item, index, arr2)));
    }
    case "object": {
      if (Array.isArray(predicate) && predicate.length === 2) {
        const key = predicate[0];
        const value = predicate[1];
        return dropWhile(arr, matchesProperty(key, value));
      } else {
        return dropWhile(arr, matches(predicate));
      }
    }
    case "number":
    case "symbol":
    case "string": {
      return dropWhile(arr, property(predicate));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/isIterateeCall.mjs
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  if (typeof index === "number" && isArrayLike(object) && isIndex(index) && index < object.length || typeof index === "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/every.mjs
function every(source, doesMatch, guard) {
  if (!source) {
    return true;
  }
  const values2 = Array.isArray(source) ? source : Object.values(source);
  if (guard && isIterateeCall(source, doesMatch, guard)) {
    doesMatch = void 0;
  }
  if (!doesMatch) {
    doesMatch = identity;
  }
  switch (typeof doesMatch) {
    case "function": {
      if (!Array.isArray(source)) {
        const keys2 = Object.keys(source);
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          const value = source[key];
          if (!doesMatch(value, key, source)) {
            return false;
          }
        }
        return true;
      }
      return values2.every(doesMatch);
    }
    case "object": {
      if (Array.isArray(doesMatch) && doesMatch.length === 2) {
        const key = doesMatch[0];
        const value = doesMatch[1];
        return values2.every(matchesProperty(key, value));
      } else {
        return values2.every(matches(doesMatch));
      }
    }
    case "symbol":
    case "number":
    case "string": {
      return values2.every(property(doesMatch));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isString.mjs
function isString(value) {
  return typeof value === "string" || value instanceof String;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/fill.mjs
function fill2(array, value, start = 0, end = array ? array.length : 0) {
  if (!isArrayLike(array)) {
    return [];
  }
  if (isString(array)) {
    return array;
  }
  start = Math.floor(start);
  end = Math.floor(end);
  if (!start) {
    start = 0;
  }
  if (!end) {
    end = 0;
  }
  return fill(array, value, start, end);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/filter.mjs
function filter(source, predicate) {
  if (!source) {
    return [];
  }
  const collection = isArray(source) ? source : Object.values(source);
  predicate = iteratee(predicate);
  if (!Array.isArray(source)) {
    const result2 = [];
    const keys2 = Object.keys(source);
    const length = isArrayLike(source) ? source.length : keys2.length;
    for (let i = 0; i < length; i++) {
      const key = keys2[i];
      const value = source[key];
      if (predicate(value, key, source)) {
        result2.push(value);
      }
    }
    return result2;
  }
  return collection.filter(predicate);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/find.mjs
function find(source, _doesMatch, fromIndex = 0) {
  if (!source) {
    return void 0;
  }
  if (fromIndex < 0) {
    fromIndex = Math.max(source.length + fromIndex, 0);
  }
  const doesMatch = iteratee(_doesMatch);
  if (typeof doesMatch === "function" && !Array.isArray(source)) {
    const keys2 = Object.keys(source);
    for (let i = fromIndex; i < keys2.length; i++) {
      const key = keys2[i];
      const value = source[key];
      if (doesMatch(value, key, source)) {
        return value;
      }
    }
    return void 0;
  }
  const values2 = Array.isArray(source) ? source.slice(fromIndex) : Object.values(source).slice(fromIndex);
  return values2.find(doesMatch);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/findIndex.mjs
function findIndex(arr, doesMatch, fromIndex = 0) {
  if (!arr) {
    return -1;
  }
  if (fromIndex < 0) {
    fromIndex = Math.max(arr.length + fromIndex, 0);
  }
  const subArray = Array.from(arr).slice(fromIndex);
  let index = -1;
  switch (typeof doesMatch) {
    case "function": {
      index = subArray.findIndex(doesMatch);
      break;
    }
    case "object": {
      if (Array.isArray(doesMatch) && doesMatch.length === 2) {
        const key = doesMatch[0];
        const value = doesMatch[1];
        index = subArray.findIndex(matchesProperty(key, value));
      } else {
        index = subArray.findIndex(matches(doesMatch));
      }
      break;
    }
    case "number":
    case "symbol":
    case "string": {
      index = subArray.findIndex(property(doesMatch));
    }
  }
  return index === -1 ? -1 : index + fromIndex;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/findLast.mjs
function findLast(source, _doesMatch, fromIndex) {
  if (!source) {
    return void 0;
  }
  const length = Array.isArray(source) ? source.length : Object.keys(source).length;
  fromIndex = toInteger(fromIndex ?? length - 1);
  if (fromIndex < 0) {
    fromIndex = Math.max(length + fromIndex, 0);
  } else {
    fromIndex = Math.min(fromIndex, length - 1);
  }
  const doesMatch = iteratee(_doesMatch);
  if (typeof doesMatch === "function" && !Array.isArray(source)) {
    const keys2 = Object.keys(source);
    for (let i = fromIndex; i >= 0; i--) {
      const key = keys2[i];
      const value = source[key];
      if (doesMatch(value, key, source)) {
        return value;
      }
    }
    return void 0;
  }
  const values2 = Array.isArray(source) ? source.slice(0, fromIndex + 1) : Object.values(source).slice(0, fromIndex + 1);
  return values2.findLast(doesMatch);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/findLastIndex.mjs
function findLastIndex(arr, doesMatch, fromIndex = arr ? arr.length - 1 : 0) {
  if (!arr) {
    return -1;
  }
  if (fromIndex < 0) {
    fromIndex = Math.max(arr.length + fromIndex, 0);
  } else {
    fromIndex = Math.min(fromIndex, arr.length - 1);
  }
  const subArray = toArray(arr).slice(0, fromIndex + 1);
  switch (typeof doesMatch) {
    case "function": {
      return subArray.findLastIndex(doesMatch);
    }
    case "object": {
      if (Array.isArray(doesMatch) && doesMatch.length === 2) {
        const key = doesMatch[0];
        const value = doesMatch[1];
        return subArray.findLastIndex(matchesProperty(key, value));
      } else {
        return subArray.findLastIndex(matches(doesMatch));
      }
    }
    case "number":
    case "symbol":
    case "string": {
      return subArray.findLastIndex(property(doesMatch));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/flatten.mjs
function flatten2(value, depth = 1) {
  const result2 = [];
  const flooredDepth = Math.floor(depth);
  if (!isArrayLike(value)) {
    return result2;
  }
  const recursive = (arr, currentDepth) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (currentDepth < flooredDepth && (Array.isArray(item) || Boolean(item == null ? void 0 : item[Symbol.isConcatSpreadable]) || item !== null && typeof item === "object" && Object.prototype.toString.call(item) === "[object Arguments]")) {
        if (Array.isArray(item)) {
          recursive(item, currentDepth + 1);
        } else {
          recursive(Array.from(item), currentDepth + 1);
        }
      } else {
        result2.push(item);
      }
    }
  };
  recursive(Array.from(value), 0);
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/map.mjs
function map(collection, _iteratee) {
  if (!collection) {
    return [];
  }
  const keys2 = isArrayLike(collection) || Array.isArray(collection) ? range(0, collection.length) : Object.keys(collection);
  const iteratee$1 = iteratee(_iteratee ?? identity);
  const result2 = new Array(keys2.length);
  for (let i = 0; i < keys2.length; i++) {
    const key = keys2[i];
    const value = collection[key];
    result2[i] = iteratee$1(value, key, collection);
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/flatMap.mjs
function flatMap(collection, iteratee2) {
  if (isNil(collection)) {
    return [];
  }
  const mapped = isNil(iteratee2) ? map(collection) : map(collection, iteratee2);
  return flatten2(mapped, 1);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/flattenDeep.mjs
function flattenDeep(value) {
  return flatten2(value, Infinity);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/flattenDepth.mjs
function flattenDepth(value, depth = 1) {
  return flatten2(value, depth);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/forEach.mjs
function forEach(collection, callback = identity) {
  if (!collection) {
    return collection;
  }
  const keys2 = isArrayLike(collection) || Array.isArray(collection) ? range(0, collection.length) : Object.keys(collection);
  for (let i = 0; i < keys2.length; i++) {
    const key = keys2[i];
    const value = collection[key];
    const result2 = callback(value, key, collection);
    if (result2 === false) {
      break;
    }
  }
  return collection;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/forEachRight.mjs
function forEachRight(collection, callback = identity) {
  if (!collection) {
    return collection;
  }
  const keys2 = isArrayLike(collection) ? range(0, collection.length) : Object.keys(collection);
  for (let i = keys2.length - 1; i >= 0; i--) {
    const key = keys2[i];
    const value = collection[key];
    const result2 = callback(value, key, collection);
    if (result2 === false) {
      break;
    }
  }
  return collection;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/groupBy.mjs
function groupBy2(source, _getKeyFromItem) {
  if (source == null) {
    return {};
  }
  const items = isArrayLike(source) ? Array.from(source) : Object.values(source);
  const getKeyFromItem = iteratee(_getKeyFromItem ?? identity);
  return groupBy(items, getKeyFromItem);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/head.mjs
function head2(arr) {
  if (!isArrayLike(arr)) {
    return void 0;
  }
  return head(toArray(arr));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/includes.mjs
function includes(source, target, fromIndex, guard) {
  if (source == null) {
    return false;
  }
  if (guard || !fromIndex) {
    fromIndex = 0;
  } else {
    fromIndex = toInteger(fromIndex);
  }
  if (isString(source)) {
    if (fromIndex > source.length || target instanceof RegExp) {
      return false;
    }
    if (fromIndex < 0) {
      fromIndex = Math.max(0, source.length + fromIndex);
    }
    return source.includes(target, fromIndex);
  }
  if (Array.isArray(source)) {
    return source.includes(target, fromIndex);
  }
  const keys2 = Object.keys(source);
  if (fromIndex < 0) {
    fromIndex = Math.max(0, keys2.length + fromIndex);
  }
  for (let i = fromIndex; i < keys2.length; i++) {
    const value = Reflect.get(source, keys2[i]);
    if (eq(value, target)) {
      return true;
    }
  }
  return false;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/indexOf.mjs
function indexOf(array, searchElement, fromIndex) {
  if (!isArrayLike(array)) {
    return -1;
  }
  if (Number.isNaN(searchElement)) {
    fromIndex = fromIndex ?? 0;
    if (fromIndex < 0) {
      fromIndex = Math.max(0, array.length + fromIndex);
    }
    for (let i = fromIndex; i < array.length; i++) {
      if (Number.isNaN(array[i])) {
        return i;
      }
    }
    return -1;
  }
  return Array.from(array).indexOf(searchElement, fromIndex);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/initial.mjs
function initial2(arr) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return initial(Array.from(arr));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/intersection.mjs
function intersection2(...arrays) {
  if (arrays.length === 0) {
    return [];
  }
  if (!isArrayLikeObject(arrays[0])) {
    return [];
  }
  let result2 = uniq(Array.from(arrays[0]));
  for (let i = 1; i < arrays.length; i++) {
    const array = arrays[i];
    if (!isArrayLikeObject(array)) {
      return [];
    }
    result2 = intersection(result2, Array.from(array));
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/intersectionBy.mjs
function intersectionBy2(array, ...values2) {
  if (!isArrayLikeObject(array)) {
    return [];
  }
  const lastValue = last(values2);
  if (lastValue === void 0) {
    return Array.from(array);
  }
  let result2 = uniq(Array.from(array));
  const count = isArrayLikeObject(lastValue) ? values2.length : values2.length - 1;
  for (let i = 0; i < count; ++i) {
    const value = values2[i];
    if (!isArrayLikeObject(value)) {
      return [];
    }
    if (isArrayLikeObject(lastValue)) {
      result2 = intersectionBy(result2, Array.from(value), identity);
    } else if (typeof lastValue === "function") {
      result2 = intersectionBy(result2, Array.from(value), (value2) => lastValue(value2));
    } else if (typeof lastValue === "string") {
      result2 = intersectionBy(result2, Array.from(value), property(lastValue));
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/uniq.mjs
function uniq2(arr) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return uniq(Array.from(arr));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/intersectionWith.mjs
function intersectionWith2(firstArr, ...otherArrs) {
  if (firstArr == null) {
    return [];
  }
  const _comparator = last2(otherArrs);
  let comparator = eq;
  let uniq$1 = uniq2;
  if (typeof _comparator === "function") {
    comparator = _comparator;
    uniq$1 = uniqPreserve0;
    otherArrs.pop();
  }
  let result2 = uniq$1(Array.from(firstArr));
  for (let i = 0; i < otherArrs.length; ++i) {
    const otherArr = otherArrs[i];
    if (otherArr == null) {
      return [];
    }
    result2 = intersectionWith(result2, Array.from(otherArr), comparator);
  }
  return result2;
}
function uniqPreserve0(arr) {
  const result2 = [];
  const added = /* @__PURE__ */ new Set();
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (added.has(item)) {
      continue;
    }
    result2.push(item);
    added.add(item);
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/join.mjs
function join(array, separator = ",") {
  if (!isArrayLike(array)) {
    return "";
  }
  return Array.from(array).join(separator);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/reduce.mjs
function reduce(collection, iteratee2 = identity, accumulator) {
  if (!collection) {
    return accumulator;
  }
  let keys2;
  let startIndex = 0;
  if (isArrayLike(collection)) {
    keys2 = range(0, collection.length);
    if (accumulator == null && collection.length > 0) {
      accumulator = collection[0];
      startIndex += 1;
    }
  } else {
    keys2 = Object.keys(collection);
    if (accumulator == null) {
      accumulator = collection[keys2[0]];
      startIndex += 1;
    }
  }
  for (let i = startIndex; i < keys2.length; i++) {
    const key = keys2[i];
    const value = collection[key];
    accumulator = iteratee2(accumulator, value, key, collection);
  }
  return accumulator;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/keyBy.mjs
function keyBy(collection, iteratee$1) {
  if (!isArrayLike(collection) && !isObjectLike(collection)) {
    return {};
  }
  const keyFn = iteratee(iteratee$1 ?? identity);
  return reduce(collection, (result2, value) => {
    const key = keyFn(value);
    result2[key] = value;
    return result2;
  }, {});
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/lastIndexOf.mjs
function lastIndexOf(array, searchElement, fromIndex) {
  if (!isArrayLike(array) || array.length === 0) {
    return -1;
  }
  const length = array.length;
  let index = fromIndex ?? length - 1;
  if (fromIndex != null) {
    index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
  }
  if (Number.isNaN(searchElement)) {
    for (let i = index; i >= 0; i--) {
      if (Number.isNaN(array[i])) {
        return i;
      }
    }
  }
  return Array.from(array).lastIndexOf(searchElement, index);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/nth.mjs
function nth(array, n = 0) {
  if (!isArrayLikeObject(array) || array.length === 0) {
    return void 0;
  }
  n = toInteger(n);
  if (n < 0) {
    n += array.length;
  }
  return array[n];
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/compareValues.mjs
function getPriority(a) {
  if (typeof a === "symbol") {
    return 1;
  }
  if (a === null) {
    return 2;
  }
  if (a === void 0) {
    return 3;
  }
  if (a !== a) {
    return 4;
  }
  return 0;
}
var compareValues = (a, b, order) => {
  if (a !== b) {
    const aPriority = getPriority(a);
    const bPriority = getPriority(b);
    if (aPriority === bPriority && aPriority === 0) {
      if (a < b) {
        return order === "desc" ? 1 : -1;
      }
      if (a > b) {
        return order === "desc" ? -1 : 1;
      }
    }
    return order === "desc" ? bPriority - aPriority : aPriority - bPriority;
  }
  return 0;
};

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/isKey.mjs
var regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var regexIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (Array.isArray(value)) {
    return false;
  }
  if (typeof value === "number" || typeof value === "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return typeof value === "string" && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value)) || object != null && Object.hasOwn(object, value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/orderBy.mjs
function orderBy(collection, criteria, orders, guard) {
  if (collection == null) {
    return [];
  }
  orders = guard ? void 0 : orders;
  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }
  if (!Array.isArray(criteria)) {
    criteria = criteria == null ? [null] : [criteria];
  }
  if (criteria.length === 0) {
    criteria = [null];
  }
  if (!Array.isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  orders = orders.map((order) => String(order));
  const getValueByNestedPath = (object, path) => {
    let target = object;
    for (let i = 0; i < path.length && target != null; ++i) {
      target = target[path[i]];
    }
    return target;
  };
  const getValueByCriterion = (criterion, object) => {
    if (object == null || criterion == null) {
      return object;
    }
    if (typeof criterion === "object" && "key" in criterion) {
      if (Object.hasOwn(object, criterion.key)) {
        return object[criterion.key];
      }
      return getValueByNestedPath(object, criterion.path);
    }
    if (typeof criterion === "function") {
      return criterion(object);
    }
    if (Array.isArray(criterion)) {
      return getValueByNestedPath(object, criterion);
    }
    if (typeof object === "object") {
      return object[criterion];
    }
    return object;
  };
  const preparedCriteria = criteria.map((criterion) => {
    if (Array.isArray(criterion) && criterion.length === 1) {
      criterion = criterion[0];
    }
    if (criterion == null || typeof criterion === "function" || Array.isArray(criterion) || isKey(criterion)) {
      return criterion;
    }
    return { key: criterion, path: toPath(criterion) };
  });
  const preparedCollection = collection.map((item) => ({
    original: item,
    criteria: preparedCriteria.map((criterion) => getValueByCriterion(criterion, item))
  }));
  return preparedCollection.slice().sort((a, b) => {
    for (let i = 0; i < preparedCriteria.length; i++) {
      const comparedResult = compareValues(a.criteria[i], b.criteria[i], orders[i]);
      if (comparedResult !== 0) {
        return comparedResult;
      }
    }
    return 0;
  }).map((item) => item.original);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/partition.mjs
function partition(source, predicate) {
  if (!source) {
    return [[], []];
  }
  const collection = isArrayLike(source) ? source : Object.values(source);
  predicate = iteratee(predicate);
  const matched = [];
  const unmatched = [];
  for (let i = 0; i < collection.length; i++) {
    const value = collection[i];
    if (predicate(value)) {
      matched.push(value);
    } else {
      unmatched.push(value);
    }
  }
  return [matched, unmatched];
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/pull.mjs
function pull2(arr, ...valuesToRemove) {
  return pull(arr, valuesToRemove);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/pullAll.mjs
function pullAll(arr, valuesToRemove = []) {
  return pull(arr, Array.from(valuesToRemove));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/pullAllBy.mjs
function pullAllBy(arr, valuesToRemove, _getValue) {
  const getValue = iteratee(_getValue);
  const valuesSet = new Set(Array.from(valuesToRemove).map((x) => getValue(x)));
  let resultIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = getValue(arr[i]);
    if (valuesSet.has(value)) {
      continue;
    }
    if (!Object.hasOwn(arr, i)) {
      delete arr[resultIndex++];
      continue;
    }
    arr[resultIndex++] = arr[i];
  }
  arr.length = resultIndex;
  return arr;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/copyArray.mjs
function copyArray(source, array) {
  const length = source.length;
  if (array == null) {
    array = Array(length);
  }
  for (let i = 0; i < length; i++) {
    array[i] = source[i];
  }
  return array;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/pullAllWith.mjs
function pullAllWith(array, values2, comparator) {
  if ((array == null ? void 0 : array.length) == null || (values2 == null ? void 0 : values2.length) == null) {
    return array;
  }
  if (array === values2) {
    values2 = copyArray(values2);
  }
  let resultLength = 0;
  if (comparator == null) {
    comparator = (a, b) => eq(a, b);
  }
  const valuesArray = Array.isArray(values2) ? values2 : Array.from(values2);
  const hasUndefined = valuesArray.includes(void 0);
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      const shouldRemove = valuesArray.some((value) => comparator(array[i], value));
      if (!shouldRemove) {
        array[resultLength++] = array[i];
      }
      continue;
    }
    if (!hasUndefined) {
      delete array[resultLength++];
    }
  }
  array.length = resultLength;
  return array;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/at.mjs
function at(object, ...paths) {
  if (paths.length === 0) {
    return [];
  }
  const allPaths = [];
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    if (!isArrayLike(path) || isString(path)) {
      allPaths.push(path);
      continue;
    }
    for (let j = 0; j < path.length; j++) {
      allPaths.push(path[j]);
    }
  }
  const result2 = [];
  for (let i = 0; i < allPaths.length; i++) {
    result2.push(get(object, allPaths[i]));
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/unset.mjs
function unset(obj, path) {
  if (obj == null) {
    return true;
  }
  switch (typeof path) {
    case "symbol":
    case "number":
    case "object": {
      if (Array.isArray(path)) {
        return unsetWithPath(obj, path);
      }
      if (typeof path === "number") {
        path = toKey(path);
      } else if (typeof path === "object") {
        if (Object.is(path == null ? void 0 : path.valueOf(), -0)) {
          path = "-0";
        } else {
          path = String(path);
        }
      }
      if ((obj == null ? void 0 : obj[path]) === void 0) {
        return true;
      }
      try {
        delete obj[path];
        return true;
      } catch {
        return false;
      }
    }
    case "string": {
      if ((obj == null ? void 0 : obj[path]) === void 0 && isDeepKey(path)) {
        return unsetWithPath(obj, toPath(path));
      }
      try {
        delete obj[path];
        return true;
      } catch {
        return false;
      }
    }
  }
}
function unsetWithPath(obj, path) {
  const parent = get(obj, path.slice(0, -1), obj);
  const lastKey = path[path.length - 1];
  if ((parent == null ? void 0 : parent[lastKey]) === void 0) {
    return true;
  }
  try {
    delete parent[lastKey];
    return true;
  } catch {
    return false;
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/pullAt.mjs
function pullAt(array, ..._indices) {
  const indices = flatten2(_indices, 1);
  if (!array) {
    return Array(indices.length);
  }
  const result2 = at(array, indices);
  const indicesToPull = indices.map((index) => isIndex(index, array.length) ? Number(index) : index).sort((a, b) => b - a);
  for (const index of new Set(indicesToPull)) {
    if (isIndex(index, array.length)) {
      Array.prototype.splice.call(array, index, 1);
      continue;
    }
    if (isKey(index, array)) {
      delete array[toKey(index)];
      continue;
    }
    const path = isArray(index) ? index : toPath(index);
    unset(array, path);
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/reduceRight.mjs
function reduceRight(collection, iteratee2 = identity, accumulator) {
  if (!collection) {
    return accumulator;
  }
  let keys2;
  let startIndex;
  if (isArrayLike(collection)) {
    keys2 = range(0, collection.length).reverse();
    if (accumulator == null && collection.length > 0) {
      accumulator = collection[collection.length - 1];
      startIndex = 1;
    } else {
      startIndex = 0;
    }
  } else {
    keys2 = Object.keys(collection).reverse();
    if (accumulator == null) {
      accumulator = collection[keys2[0]];
      startIndex = 1;
    } else {
      startIndex = 0;
    }
  }
  for (let i = startIndex; i < keys2.length; i++) {
    const key = keys2[i];
    const value = collection[key];
    accumulator = iteratee2(accumulator, value, key, collection);
  }
  return accumulator;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/negate.mjs
function negate2(func) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  return function(...args) {
    return !func.apply(this, args);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/reject.mjs
function reject(source, predicate) {
  return filter(source, negate2(iteratee(predicate)));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/remove.mjs
function remove2(arr, shouldRemoveElement) {
  return remove(arr, iteratee(shouldRemoveElement));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/reverse.mjs
function reverse(array) {
  if (array == null) {
    return array;
  }
  return array.reverse();
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/sample.mjs
function sample2(collection) {
  if (collection == null) {
    return void 0;
  }
  if (isArrayLike(collection)) {
    return sample(toArray(collection));
  }
  return sample(Object.values(collection));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/clamp.mjs
function clamp2(value, bound1, bound2) {
  if (Number.isNaN(bound1)) {
    bound1 = 0;
  }
  if (Number.isNaN(bound2)) {
    bound2 = 0;
  }
  return clamp(value, bound1, bound2);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isMap.mjs
function isMap2(value) {
  return isMap(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/toArray.mjs
function toArray2(value) {
  if (value == null) {
    return [];
  }
  if (isArrayLike(value) || isMap2(value)) {
    return Array.from(value);
  }
  if (typeof value === "object") {
    return Object.values(value);
  }
  return [];
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/sampleSize.mjs
function sampleSize2(collection, size2, guard) {
  const arrayCollection = toArray2(collection);
  if (guard ? isIterateeCall(collection, size2, guard) : size2 === void 0) {
    size2 = 1;
  } else {
    size2 = clamp2(toInteger(size2), 0, arrayCollection.length);
  }
  return sampleSize(arrayCollection, size2);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/values.mjs
function values(object) {
  return Object.values(object);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isNil.mjs
function isNil2(x) {
  return x == null;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/shuffle.mjs
function shuffle2(collection) {
  if (isNil2(collection)) {
    return [];
  }
  if (isArray(collection)) {
    return shuffle(collection);
  }
  if (isArrayLike(collection)) {
    return shuffle(Array.from(collection));
  }
  if (isObjectLike(collection)) {
    return shuffle(values(collection));
  }
  return [];
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/size.mjs
function size(target) {
  if (isNil(target)) {
    return 0;
  }
  if (target instanceof Map || target instanceof Set) {
    return target.size;
  }
  return Object.keys(target).length;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/slice.mjs
function slice(array, start, end) {
  if (!isArrayLike(array)) {
    return [];
  }
  const length = array.length;
  if (end === void 0) {
    end = length;
  } else if (typeof end !== "number" && isIterateeCall(array, start, end)) {
    start = 0;
    end = length;
  }
  start = toInteger(start);
  end = toInteger(end);
  if (start < 0) {
    start = Math.max(length + start, 0);
  } else {
    start = Math.min(start, length);
  }
  if (end < 0) {
    end = Math.max(length + end, 0);
  } else {
    end = Math.min(end, length);
  }
  const resultLength = Math.max(end - start, 0);
  const result2 = new Array(resultLength);
  for (let i = 0; i < resultLength; ++i) {
    result2[i] = array[start + i];
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/some.mjs
function some(source, predicate, guard) {
  if (!source) {
    return false;
  }
  if (guard != null) {
    predicate = void 0;
  }
  if (!predicate) {
    predicate = identity;
  }
  const values2 = Array.isArray(source) ? source : Object.values(source);
  switch (typeof predicate) {
    case "function": {
      if (!Array.isArray(source)) {
        const keys2 = Object.keys(source);
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          const value = source[key];
          if (predicate(value, key, source)) {
            return true;
          }
        }
        return false;
      }
      return values2.some(predicate);
    }
    case "object": {
      if (Array.isArray(predicate) && predicate.length === 2) {
        const key = predicate[0];
        const value = predicate[1];
        return values2.some(matchesProperty(key, value));
      } else {
        return values2.some(matches(predicate));
      }
    }
    case "number":
    case "symbol":
    case "string": {
      return values2.some(property(predicate));
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/sortBy.mjs
function sortBy(collection, ...criteria) {
  const length = criteria.length;
  if (length > 1 && isIterateeCall(collection, criteria[0], criteria[1])) {
    criteria = [];
  } else if (length > 2 && isIterateeCall(criteria[0], criteria[1], criteria[2])) {
    criteria = [criteria[0]];
  }
  return orderBy(collection, flatten(criteria), ["asc"]);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isNaN.mjs
function isNaN(value) {
  return Number.isNaN(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/sortedIndexBy.mjs
var MAX_ARRAY_LENGTH = 4294967295;
var MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;
function sortedIndexBy(array, value, iteratee$1, retHighest) {
  let low = 0;
  let high = array == null ? 0 : array.length;
  if (high === 0 || isNil2(array)) {
    return 0;
  }
  const iterateeFunction = iteratee(iteratee$1);
  const transformedValue = iterateeFunction(value);
  const valIsNaN = isNaN(transformedValue);
  const valIsNull = isNull(transformedValue);
  const valIsSymbol = isSymbol(transformedValue);
  const valIsUndefined = isUndefined(transformedValue);
  while (low < high) {
    let setLow;
    const mid = Math.floor((low + high) / 2);
    const computed = iterateeFunction(array[mid]);
    const othIsDefined = !isUndefined(computed);
    const othIsNull = isNull(computed);
    const othIsReflexive = !isNaN(computed);
    const othIsSymbol = isSymbol(computed);
    if (valIsNaN) {
      setLow = retHighest || othIsReflexive;
    } else if (valIsUndefined) {
      setLow = othIsReflexive && (retHighest || othIsDefined);
    } else if (valIsNull) {
      setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
    } else if (valIsSymbol) {
      setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
    } else if (othIsNull || othIsSymbol) {
      setLow = false;
    } else {
      setLow = retHighest ? computed <= transformedValue : computed < transformedValue;
    }
    if (setLow) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return Math.min(high, MAX_ARRAY_INDEX);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isNumber.mjs
function isNumber(value) {
  return typeof value === "number" || value instanceof Number;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/sortedIndex.mjs
var MAX_ARRAY_LENGTH2 = 4294967295;
var HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH2 >>> 1;
function sortedIndex(array, value) {
  if (isNil(array)) {
    return 0;
  }
  let low = 0, high = isNil(array) ? low : array.length;
  if (isNumber(value) && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    while (low < high) {
      const mid = low + high >>> 1;
      const compute = array[mid];
      if (!isNull(compute) && !isSymbol2(compute) && compute < value) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }
  return sortedIndexBy(array, value, (value2) => value2);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/sortedIndexOf.mjs
function sortedIndexOf(array, value) {
  if (!(array == null ? void 0 : array.length)) {
    return -1;
  }
  const index = sortedIndex(array, value);
  if (index < array.length && eq(array[index], value)) {
    return index;
  }
  return -1;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/sortedLastIndexBy.mjs
function sortedLastIndexBy(array, value, iteratee2) {
  return sortedIndexBy(array, value, iteratee2, true);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/sortedLastIndex.mjs
var MAX_ARRAY_LENGTH3 = 4294967295;
var HALF_MAX_ARRAY_LENGTH2 = MAX_ARRAY_LENGTH3 >>> 1;
function sortedLastIndex(array, value) {
  if (isNil(array)) {
    return 0;
  }
  let high = array.length;
  if (!isNumber(value) || Number.isNaN(value) || high > HALF_MAX_ARRAY_LENGTH2) {
    return sortedLastIndexBy(array, value, (value2) => value2);
  }
  let low = 0;
  while (low < high) {
    const mid = low + high >>> 1;
    const compute = array[mid];
    if (!isNull(compute) && !isSymbol2(compute) && compute <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return high;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/tail.mjs
function tail2(arr) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return tail(toArray(arr));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/take.mjs
function take2(arr, count = 1, guard) {
  count = guard ? 1 : toInteger(count);
  if (count < 1 || !isArrayLike(arr)) {
    return [];
  }
  return take(toArray(arr), count);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/takeRight.mjs
function takeRight2(arr, count = 1, guard) {
  count = guard ? 1 : toInteger(count);
  if (count <= 0 || !isArrayLike(arr)) {
    return [];
  }
  return takeRight(toArray(arr), count);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/takeRightWhile.mjs
function takeRightWhile(_array, predicate) {
  if (!isArrayLikeObject(_array)) {
    return [];
  }
  const array = toArray(_array);
  const index = array.findLastIndex(negate(iteratee(predicate)));
  return array.slice(index + 1);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/takeWhile.mjs
function takeWhile(array, predicate) {
  if (!isArrayLikeObject(array)) {
    return [];
  }
  const _array = toArray(array);
  const index = _array.findIndex(negate2(iteratee(predicate)));
  return index === -1 ? _array : _array.slice(0, index);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/union.mjs
function union(...arrays) {
  const validArrays = arrays.filter(isArrayLikeObject);
  const flattened = flatten2(validArrays, 1);
  return uniq(flattened);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/unionBy.mjs
function unionBy(...values2) {
  const lastValue = last(values2);
  const flattened = flattenArrayLike(values2);
  if (isArrayLikeObject(lastValue) || lastValue == null) {
    return uniq(flattened);
  }
  return uniqBy(flattened, iteratee(lastValue));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/unionWith.mjs
function unionWith(...values2) {
  const lastValue = last(values2);
  const flattened = flattenArrayLike(values2);
  if (isArrayLikeObject(lastValue) || lastValue == null) {
    return uniq(flattened);
  }
  return uniqWith(flattened, lastValue);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/uniqBy.mjs
function uniqBy2(array, iteratee$1) {
  if (!isArrayLikeObject(array)) {
    return [];
  }
  return uniqBy(Array.from(array), iteratee(iteratee$1));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/uniqWith.mjs
function uniqWith2(arr, comparator) {
  if (!isArrayLike(arr)) {
    return [];
  }
  return typeof comparator === "function" ? uniqWith(Array.from(arr), comparator) : uniq2(Array.from(arr));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/unzip.mjs
function unzip2(array) {
  if (!isArrayLikeObject(array) || !array.length) {
    return [];
  }
  array = isArray(array) ? array : Array.from(array);
  array = array.filter((item) => isArrayLikeObject(item));
  return unzip(array);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/unzipWith.mjs
function unzipWith(array, iteratee2) {
  if (!isArrayLikeObject(array) || !array.length) {
    return [];
  }
  const unziped = isArray(array) ? unzip(array) : unzip(Array.from(array, (value) => Array.from(value)));
  if (!iteratee2) {
    return unziped;
  }
  const result2 = new Array(unziped.length);
  for (let i = 0; i < unziped.length; i++) {
    const value = unziped[i];
    result2[i] = iteratee2(...value);
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/without.mjs
function without2(array, ...values2) {
  if (!isArrayLikeObject(array)) {
    return [];
  }
  return without(Array.from(array), ...values2);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/xor.mjs
function xor(...arrays) {
  const itemCounts = /* @__PURE__ */ new Map();
  for (let i = 0; i < arrays.length; i++) {
    const array = arrays[i];
    if (!isArrayLikeObject(array)) {
      continue;
    }
    const itemSet = new Set(toArray2(array));
    for (const item of itemSet) {
      if (!itemCounts.has(item)) {
        itemCounts.set(item, 1);
      } else {
        itemCounts.set(item, itemCounts.get(item) + 1);
      }
    }
  }
  const result2 = [];
  for (const [item, count] of itemCounts) {
    if (count === 1) {
      result2.push(item);
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/xorBy.mjs
function xorBy(...values2) {
  const lastValue = last2(values2);
  let mapper = identity;
  if (!isArrayLikeObject(lastValue) && lastValue != null) {
    mapper = iteratee(lastValue);
    values2 = values2.slice(0, -1);
  }
  const arrays = values2.filter(isArrayLikeObject);
  const union2 = unionBy(...arrays, mapper);
  const intersections = windowed(arrays, 2).map(([arr1, arr2]) => intersectionBy2(arr1, arr2, mapper));
  return differenceBy2(union2, unionBy(...intersections, mapper), mapper);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/xorWith.mjs
function xorWith(...values2) {
  const lastValue = last2(values2);
  let comparator = (a, b) => a === b;
  if (typeof lastValue === "function") {
    comparator = lastValue;
    values2 = values2.slice(0, -1);
  }
  const arrays = values2.filter(isArrayLikeObject);
  const union2 = unionWith(...arrays, comparator);
  const intersections = windowed(arrays, 2).map(([arr1, arr2]) => intersectionWith2(arr1, arr2, comparator));
  return differenceWith2(union2, unionWith(...intersections, comparator), comparator);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/zip.mjs
function zip2(...arrays) {
  if (!arrays.length) {
    return [];
  }
  return zip(...arrays.filter((group) => isArrayLikeObject(group)));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/assignValue.mjs
var assignValue = (object, key, value) => {
  const objValue = object[key];
  if (!(Object.hasOwn(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    object[key] = value;
  }
};

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/zipObject.mjs
function zipObject(keys2 = [], values2 = []) {
  const result2 = {};
  for (let i = 0; i < keys2.length; i++) {
    assignValue(result2, keys2[i], values2[i]);
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/updateWith.mjs
function updateWith(obj, path, updater, customizer) {
  if (obj == null && !isObject(obj)) {
    return obj;
  }
  const resolvedPath = isKey(path, obj) ? [path] : Array.isArray(path) ? path : typeof path === "string" ? toPath(path) : [path];
  let current = obj;
  for (let i = 0; i < resolvedPath.length && current != null; i++) {
    const key = toKey(resolvedPath[i]);
    let newValue;
    if (i === resolvedPath.length - 1) {
      newValue = updater(current[key]);
    } else {
      const objValue = current[key];
      const customizerResult = customizer(objValue);
      newValue = customizerResult !== void 0 ? customizerResult : isObject(objValue) ? objValue : isIndex(resolvedPath[i + 1]) ? [] : {};
    }
    assignValue(current, key, newValue);
    current = current[key];
  }
  return obj;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/set.mjs
function set(obj, path, value) {
  return updateWith(obj, path, () => value, () => void 0);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/zipObjectDeep.mjs
function zipObjectDeep(keys2, values2) {
  const result2 = {};
  if (!isArrayLike(keys2)) {
    return result2;
  }
  if (!isArrayLike(values2)) {
    values2 = [];
  }
  const zipped = zip(Array.from(keys2), Array.from(values2));
  for (let i = 0; i < zipped.length; i++) {
    const [key, value] = zipped[i];
    if (key != null) {
      set(result2, key, value);
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/array/zipWith.mjs
function zipWith(...combine) {
  let iteratee2 = combine.pop();
  if (!isFunction(iteratee2)) {
    combine.push(iteratee2);
    iteratee2 = void 0;
  }
  if (!(combine == null ? void 0 : combine.length)) {
    return [];
  }
  const result2 = unzip2(combine);
  if (iteratee2 == null) {
    return result2;
  }
  return result2.map((group) => iteratee2(...group));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/after.mjs
function after2(n, func) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  n = toInteger(n);
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args);
    }
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/ary.mjs
function ary2(func, n = func.length, guard) {
  if (guard) {
    n = func.length;
  }
  if (Number.isNaN(n) || n < 0) {
    n = 0;
  }
  return ary(func, n);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/attempt.mjs
function attempt(func, ...args) {
  try {
    return func(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/before.mjs
function before(n, func) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  let result2;
  n = toInteger(n);
  return function(...args) {
    if (--n > 0) {
      result2 = func.apply(this, args);
    }
    if (n <= 1 && func) {
      func = void 0;
    }
    return result2;
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/bind.mjs
function bind(func, thisObj, ...partialArgs) {
  const bound = function(...providedArgs) {
    const args = [];
    let startIndex = 0;
    for (let i = 0; i < partialArgs.length; i++) {
      const arg = partialArgs[i];
      if (arg === bind.placeholder) {
        args.push(providedArgs[startIndex++]);
      } else {
        args.push(arg);
      }
    }
    for (let i = startIndex; i < providedArgs.length; i++) {
      args.push(providedArgs[i]);
    }
    if (this instanceof bound) {
      return new func(...args);
    }
    return func.apply(thisObj, args);
  };
  return bound;
}
var bindPlaceholder = Symbol("bind.placeholder");
bind.placeholder = bindPlaceholder;

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/bindKey.mjs
function bindKey(object, key, ...partialArgs) {
  const bound = function(...providedArgs) {
    const args = [];
    let startIndex = 0;
    for (let i = 0; i < partialArgs.length; i++) {
      const arg = partialArgs[i];
      if (arg === bindKey.placeholder) {
        args.push(providedArgs[startIndex++]);
      } else {
        args.push(arg);
      }
    }
    for (let i = startIndex; i < providedArgs.length; i++) {
      args.push(providedArgs[i]);
    }
    if (this instanceof bound) {
      return new object[key](...args);
    }
    return object[key].apply(object, args);
  };
  return bound;
}
var bindKeyPlaceholder = Symbol("bindKey.placeholder");
bindKey.placeholder = bindKeyPlaceholder;

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/curry.mjs
function curry(func, arity = func.length, guard) {
  arity = guard ? func.length : arity;
  arity = Number.parseInt(arity, 10);
  if (Number.isNaN(arity) || arity < 1) {
    arity = 0;
  }
  const wrapper = function(...partialArgs) {
    const holders = partialArgs.filter((item) => item === curry.placeholder);
    const length = partialArgs.length - holders.length;
    if (length < arity) {
      return makeCurry(func, arity - length, partialArgs);
    }
    if (this instanceof wrapper) {
      return new func(...partialArgs);
    }
    return func.apply(this, partialArgs);
  };
  wrapper.placeholder = curryPlaceholder;
  return wrapper;
}
function makeCurry(func, arity, partialArgs) {
  function wrapper(...providedArgs) {
    const holders = providedArgs.filter((item) => item === curry.placeholder);
    const length = providedArgs.length - holders.length;
    providedArgs = composeArgs(providedArgs, partialArgs);
    if (length < arity) {
      return makeCurry(func, arity - length, providedArgs);
    }
    if (this instanceof wrapper) {
      return new func(...providedArgs);
    }
    return func.apply(this, providedArgs);
  }
  wrapper.placeholder = curryPlaceholder;
  return wrapper;
}
function composeArgs(providedArgs, partialArgs) {
  const args = [];
  let startIndex = 0;
  for (let i = 0; i < partialArgs.length; i++) {
    const arg = partialArgs[i];
    if (arg === curry.placeholder && startIndex < providedArgs.length) {
      args.push(providedArgs[startIndex++]);
    } else {
      args.push(arg);
    }
  }
  for (let i = startIndex; i < providedArgs.length; i++) {
    args.push(providedArgs[i]);
  }
  return args;
}
var curryPlaceholder = Symbol("curry.placeholder");
curry.placeholder = curryPlaceholder;

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/curryRight.mjs
function curryRight(func, arity = func.length, guard) {
  arity = guard ? func.length : arity;
  arity = Number.parseInt(arity, 10);
  if (Number.isNaN(arity) || arity < 1) {
    arity = 0;
  }
  const wrapper = function(...partialArgs) {
    const holders = partialArgs.filter((item) => item === curryRight.placeholder);
    const length = partialArgs.length - holders.length;
    if (length < arity) {
      return makeCurryRight(func, arity - length, partialArgs);
    }
    if (this instanceof wrapper) {
      return new func(...partialArgs);
    }
    return func.apply(this, partialArgs);
  };
  wrapper.placeholder = curryRightPlaceholder;
  return wrapper;
}
function makeCurryRight(func, arity, partialArgs) {
  function wrapper(...providedArgs) {
    const holders = providedArgs.filter((item) => item === curryRight.placeholder);
    const length = providedArgs.length - holders.length;
    providedArgs = composeArgs2(providedArgs, partialArgs);
    if (length < arity) {
      return makeCurryRight(func, arity - length, providedArgs);
    }
    if (this instanceof wrapper) {
      return new func(...providedArgs);
    }
    return func.apply(this, providedArgs);
  }
  wrapper.placeholder = curryRightPlaceholder;
  return wrapper;
}
function composeArgs2(providedArgs, partialArgs) {
  const placeholderLength = partialArgs.filter((arg) => arg === curryRight.placeholder).length;
  const rangeLength = Math.max(providedArgs.length - placeholderLength, 0);
  const args = [];
  let providedIndex = 0;
  for (let i = 0; i < rangeLength; i++) {
    args.push(providedArgs[providedIndex++]);
  }
  for (let i = 0; i < partialArgs.length; i++) {
    const arg = partialArgs[i];
    if (arg === curryRight.placeholder) {
      if (providedIndex < providedArgs.length) {
        args.push(providedArgs[providedIndex++]);
      } else {
        args.push(arg);
      }
    } else {
      args.push(arg);
    }
  }
  return args;
}
var curryRightPlaceholder = Symbol("curryRight.placeholder");
curryRight.placeholder = curryRightPlaceholder;

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/debounce.mjs
function debounce2(func, debounceMs = 0, options = {}) {
  if (typeof options !== "object") {
    options = {};
  }
  const { signal, leading = false, trailing = true, maxWait } = options;
  const edges = Array(2);
  if (leading) {
    edges[0] = "leading";
  }
  if (trailing) {
    edges[1] = "trailing";
  }
  let result2 = void 0;
  let pendingAt = null;
  const _debounced = debounce(function(...args) {
    result2 = func.apply(this, args);
    pendingAt = null;
  }, debounceMs, { signal, edges });
  const debounced = function(...args) {
    if (maxWait != null) {
      if (pendingAt === null) {
        pendingAt = Date.now();
      }
      if (Date.now() - pendingAt >= maxWait) {
        result2 = func.apply(this, args);
        pendingAt = Date.now();
        _debounced.cancel();
        _debounced.schedule();
        return result2;
      }
    }
    _debounced.apply(this, args);
    return result2;
  };
  const flush = () => {
    _debounced.flush();
    return result2;
  };
  debounced.cancel = _debounced.cancel;
  debounced.flush = flush;
  return debounced;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/defer.mjs
function defer(func, ...args) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  return setTimeout(func, 1, ...args);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/delay.mjs
function delay(func, wait, ...args) {
  if (typeof func !== "function") {
    throw new TypeError("Expected a function");
  }
  return setTimeout(func, toNumber(wait) || 0, ...args);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/flip.mjs
function flip(func) {
  return function(...args) {
    return func.apply(this, args.reverse());
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/flow.mjs
function flow2(...funcs) {
  const flattenFuncs = flatten(funcs, 1);
  if (flattenFuncs.some((func) => typeof func !== "function")) {
    throw new TypeError("Expected a function");
  }
  return flow(...flattenFuncs);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/flowRight.mjs
function flowRight2(...funcs) {
  const flattenFuncs = flatten(funcs, 1);
  if (flattenFuncs.some((func) => typeof func !== "function")) {
    throw new TypeError("Expected a function");
  }
  return flowRight(...flattenFuncs);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/nthArg.mjs
function nthArg(n = 0) {
  return function(...args) {
    return args.at(toInteger(n));
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/partial.mjs
function partial(func, ...partialArgs) {
  return partialImpl(func, partial.placeholder, ...partialArgs);
}
partial.placeholder = Symbol("compat.partial.placeholder");

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/partialRight.mjs
function partialRight(func, ...partialArgs) {
  return partialRightImpl(func, partialRight.placeholder, ...partialArgs);
}
partialRight.placeholder = Symbol("compat.partialRight.placeholder");

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/rearg.mjs
function rearg(func, ...indices) {
  const flattenIndices = flatten2(indices);
  return function(...args) {
    const reorderedArgs = flattenIndices.map((i) => args[i]).slice(0, args.length);
    for (let i = reorderedArgs.length; i < args.length; i++) {
      reorderedArgs.push(args[i]);
    }
    return func.apply(this, reorderedArgs);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/rest.mjs
function rest2(func, start = func.length - 1) {
  start = Number.parseInt(start, 10);
  if (Number.isNaN(start) || start < 0) {
    start = func.length - 1;
  }
  return rest(func, start);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/spread.mjs
function spread(func, argsIndex = 0) {
  argsIndex = Number.parseInt(argsIndex, 10);
  if (Number.isNaN(argsIndex) || argsIndex < 0) {
    argsIndex = 0;
  }
  return function(...args) {
    const array = args[argsIndex];
    const params = args.slice(0, argsIndex);
    if (array) {
      params.push(...array);
    }
    return func.apply(this, params);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/throttle.mjs
function throttle(func, throttleMs = 0, options = {}) {
  if (typeof options !== "object") {
    options = {};
  }
  const { leading = true, trailing = true, signal } = options;
  return debounce2(func, throttleMs, {
    leading,
    trailing,
    signal,
    maxWait: throttleMs
  });
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/function/wrap.mjs
function wrap(value, wrapper) {
  return function(...args) {
    const wrapFn = isFunction(wrapper) ? wrapper : identity;
    return wrapFn.apply(this, [value, ...args]);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/toString.mjs
function toString(value) {
  if (value == null) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(toString).join(",");
  }
  const result2 = String(value);
  if (result2 === "0" && Object.is(Number(value), -0)) {
    return "-0";
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/add.mjs
function add(value, other) {
  if (value === void 0 && other === void 0) {
    return 0;
  }
  if (value === void 0 || other === void 0) {
    return value ?? other;
  }
  if (typeof value === "string" || typeof other === "string") {
    value = toString(value);
    other = toString(other);
  } else {
    value = toNumber(value);
    other = toNumber(other);
  }
  return value + other;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/decimalAdjust.mjs
function decimalAdjust(type, number, precision = 0) {
  number = Number(number);
  if (Object.is(number, -0)) {
    number = "-0";
  }
  precision = Math.min(Number.parseInt(precision, 10), 292);
  if (precision) {
    const [magnitude, exponent = 0] = number.toString().split("e");
    let adjustedValue = Math[type](Number(`${magnitude}e${Number(exponent) + precision}`));
    if (Object.is(adjustedValue, -0)) {
      adjustedValue = "-0";
    }
    const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
    return Number(`${newMagnitude}e${Number(newExponent) - precision}`);
  }
  return Math[type](Number(number));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/ceil.mjs
function ceil(number, precision = 0) {
  return decimalAdjust("ceil", number, precision);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/divide.mjs
function divide(value, other) {
  if (value === void 0 && other === void 0) {
    return 1;
  }
  if (value === void 0 || other === void 0) {
    return value ?? other;
  }
  if (typeof value === "string" || typeof other === "string") {
    value = toString(value);
    other = toString(other);
  } else {
    value = toNumber(value);
    other = toNumber(other);
  }
  return value / other;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/floor.mjs
function floor(number, precision = 0) {
  return decimalAdjust("floor", number, precision);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/inRange.mjs
function inRange2(value, minimum, maximum) {
  if (!minimum) {
    minimum = 0;
  }
  if (maximum != null && !maximum) {
    maximum = 0;
  }
  if (minimum != null && typeof minimum !== "number") {
    minimum = Number(minimum);
  }
  if (maximum == null && minimum === 0) {
    return false;
  }
  if (maximum != null && typeof maximum !== "number") {
    maximum = Number(maximum);
  }
  if (maximum != null && minimum > maximum) {
    [minimum, maximum] = [maximum, minimum];
  }
  if (minimum === maximum) {
    return false;
  }
  return inRange(value, minimum, maximum);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/max.mjs
function max(items = []) {
  let maxElement = items[0];
  let max2 = void 0;
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (max2 == null || element > max2) {
      max2 = element;
      maxElement = element;
    }
  }
  return maxElement;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/maxBy.mjs
function maxBy2(items, iteratee$1) {
  if (items == null) {
    return void 0;
  }
  return maxBy(Array.from(items), iteratee(iteratee$1));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/sumBy.mjs
function sumBy(array, iteratee$1) {
  if (!array || !array.length) {
    return 0;
  }
  if (iteratee$1 != null) {
    iteratee$1 = iteratee(iteratee$1);
  }
  let result2 = void 0;
  for (let i = 0; i < array.length; i++) {
    const current = iteratee$1 ? iteratee$1(array[i]) : array[i];
    if (current !== void 0) {
      if (result2 === void 0) {
        result2 = current;
      } else {
        result2 += current;
      }
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/sum.mjs
function sum(array) {
  return sumBy(array);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/mean.mjs
function mean(nums) {
  const length = nums ? nums.length : 0;
  return length === 0 ? NaN : sum(nums) / length;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/meanBy.mjs
function meanBy2(items, iteratee$1) {
  if (items == null) {
    return NaN;
  }
  return meanBy(Array.from(items), iteratee(iteratee$1));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/min.mjs
function min(items = []) {
  let minElement = items[0];
  let min2 = void 0;
  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (min2 == null || element < min2) {
      min2 = element;
      minElement = element;
    }
  }
  return minElement;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/minBy.mjs
function minBy2(items, iteratee$1) {
  if (items == null) {
    return void 0;
  }
  return minBy(Array.from(items), iteratee(iteratee$1));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/multiply.mjs
function multiply(value, other) {
  if (value === void 0 && other === void 0) {
    return 1;
  }
  if (value === void 0 || other === void 0) {
    return value ?? other;
  }
  if (typeof value === "string" || typeof other === "string") {
    value = toString(value);
    other = toString(other);
  } else {
    value = toNumber(value);
    other = toNumber(other);
  }
  return value * other;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/parseInt.mjs
function parseInt(string, radix = 0, guard) {
  if (guard) {
    radix = 0;
  }
  return Number.parseInt(string, radix);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/random.mjs
function random2(...args) {
  let minimum = 0;
  let maximum = 1;
  let floating = false;
  switch (args.length) {
    case 1: {
      if (typeof args[0] === "boolean") {
        floating = args[0];
      } else {
        maximum = args[0];
      }
      break;
    }
    case 2: {
      if (typeof args[1] === "boolean") {
        maximum = args[0];
        floating = args[1];
      } else {
        minimum = args[0];
        maximum = args[1];
      }
    }
    case 3: {
      if (typeof args[2] === "object" && args[2] != null && args[2][args[1]] === args[0]) {
        minimum = 0;
        maximum = args[0];
        floating = false;
      } else {
        minimum = args[0];
        maximum = args[1];
        floating = args[2];
      }
    }
  }
  if (typeof minimum !== "number") {
    minimum = Number(minimum);
  }
  if (typeof maximum !== "number") {
    minimum = Number(maximum);
  }
  if (!minimum) {
    minimum = 0;
  }
  if (!maximum) {
    maximum = 0;
  }
  if (minimum > maximum) {
    [minimum, maximum] = [maximum, minimum];
  }
  minimum = clamp2(minimum, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  maximum = clamp2(maximum, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  if (minimum === maximum) {
    return minimum;
  }
  if (floating) {
    return random(minimum, maximum + 1);
  } else {
    return randomInt(minimum, maximum + 1);
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/range.mjs
function range2(start, end, step) {
  if (step && typeof step !== "number" && isIterateeCall(start, end, step)) {
    end = step = void 0;
  }
  start = toFinite(start);
  if (end === void 0) {
    end = start;
    start = 0;
  } else {
    end = toFinite(end);
  }
  step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
  const length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result2 = new Array(length);
  for (let index = 0; index < length; index++) {
    result2[index] = start;
    start += step;
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/rangeRight.mjs
function rangeRight(start, end, step) {
  if (step && typeof step !== "number" && isIterateeCall(start, end, step)) {
    end = step = void 0;
  }
  start = toFinite(start);
  if (end === void 0) {
    end = start;
    start = 0;
  } else {
    end = toFinite(end);
  }
  step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
  const length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result2 = new Array(length);
  for (let index = length - 1; index >= 0; index--) {
    result2[index] = start;
    start += step;
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/round.mjs
function round(number, precision = 0) {
  return decimalAdjust("round", number, precision);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/math/subtract.mjs
function subtract(value, other) {
  if (value === void 0 && other === void 0) {
    return 0;
  }
  if (value === void 0 || other === void 0) {
    return value ?? other;
  }
  if (typeof value === "string" || typeof other === "string") {
    value = toString(value);
    other = toString(other);
  } else {
    value = toNumber(value);
    other = toNumber(other);
  }
  return value - other;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/isPrototype.mjs
function isPrototype(value) {
  const constructor = value == null ? void 0 : value.constructor;
  const prototype = typeof constructor === "function" ? constructor.prototype : Object.prototype;
  return value === prototype;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isTypedArray.mjs
function isTypedArray2(x) {
  return isTypedArray(x);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/times.mjs
function times(n, getValue) {
  n = toInteger(n);
  if (n < 1 || !Number.isSafeInteger(n)) {
    return [];
  }
  const result2 = new Array(n);
  for (let i = 0; i < n; i++) {
    result2[i] = typeof getValue === "function" ? getValue(i) : i;
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/keys.mjs
function keys(object) {
  if (isArrayLike(object)) {
    return arrayLikeKeys(object);
  }
  const result2 = Object.keys(Object(object));
  if (!isPrototype(object)) {
    return result2;
  }
  return result2.filter((key) => key !== "constructor");
}
function arrayLikeKeys(object) {
  const indices = times(object.length, (index) => `${index}`);
  const filteredKeys = new Set(indices);
  if (isBuffer(object)) {
    filteredKeys.add("offset");
    filteredKeys.add("parent");
  }
  if (isTypedArray2(object)) {
    filteredKeys.add("buffer");
    filteredKeys.add("byteLength");
    filteredKeys.add("byteOffset");
  }
  return [...indices, ...Object.keys(object).filter((key) => !filteredKeys.has(key))];
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/assign.mjs
function assign(object, ...sources) {
  for (let i = 0; i < sources.length; i++) {
    assignImpl(object, sources[i]);
  }
  return object;
}
function assignImpl(object, source) {
  const keys$1 = keys(source);
  for (let i = 0; i < keys$1.length; i++) {
    const key = keys$1[i];
    if (!(key in object) || !eq(object[key], source[key])) {
      object[key] = source[key];
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/keysIn.mjs
function keysIn(object) {
  if (object == null) {
    return [];
  }
  switch (typeof object) {
    case "object":
    case "function": {
      if (isArrayLike(object)) {
        return arrayLikeKeysIn(object);
      }
      if (isPrototype(object)) {
        return prototypeKeysIn(object);
      }
      return keysInImpl(object);
    }
    default: {
      return keysInImpl(Object(object));
    }
  }
}
function keysInImpl(object) {
  const result2 = [];
  for (const key in object) {
    result2.push(key);
  }
  return result2;
}
function prototypeKeysIn(object) {
  const keys2 = keysInImpl(object);
  return keys2.filter((key) => key !== "constructor");
}
function arrayLikeKeysIn(object) {
  const indices = times(object.length, (index) => `${index}`);
  const filteredKeys = new Set(indices);
  if (isBuffer(object)) {
    filteredKeys.add("offset");
    filteredKeys.add("parent");
  }
  if (isTypedArray2(object)) {
    filteredKeys.add("buffer");
    filteredKeys.add("byteLength");
    filteredKeys.add("byteOffset");
  }
  return [...indices, ...keysInImpl(object).filter((key) => !filteredKeys.has(key))];
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/assignIn.mjs
function assignIn(object, ...sources) {
  for (let i = 0; i < sources.length; i++) {
    assignInImpl(object, sources[i]);
  }
  return object;
}
function assignInImpl(object, source) {
  const keys2 = keysIn(source);
  for (let i = 0; i < keys2.length; i++) {
    const key = keys2[i];
    if (!(key in object) || !eq(object[key], source[key])) {
      object[key] = source[key];
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/assignInWith.mjs
function assignInWith(object, ...sources) {
  let getValueToAssign = sources[sources.length - 1];
  if (typeof getValueToAssign === "function") {
    sources.pop();
  } else {
    getValueToAssign = void 0;
  }
  for (let i = 0; i < sources.length; i++) {
    assignInWithImpl(object, sources[i], getValueToAssign);
  }
  return object;
}
function assignInWithImpl(object, source, getValueToAssign) {
  const keys2 = keysIn(source);
  for (let i = 0; i < keys2.length; i++) {
    const key = keys2[i];
    const objValue = object[key];
    const srcValue = source[key];
    const newValue = (getValueToAssign == null ? void 0 : getValueToAssign(objValue, srcValue, key, object, source)) ?? srcValue;
    if (!(key in object) || !eq(objValue, newValue)) {
      object[key] = newValue;
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/assignWith.mjs
function assignWith(object, ...sources) {
  let getValueToAssign = sources[sources.length - 1];
  if (typeof getValueToAssign === "function") {
    sources.pop();
  } else {
    getValueToAssign = void 0;
  }
  for (let i = 0; i < sources.length; i++) {
    assignWithImpl(object, sources[i], getValueToAssign);
  }
  return object;
}
function assignWithImpl(object, source, getValueToAssign) {
  const keys$1 = keys(source);
  for (let i = 0; i < keys$1.length; i++) {
    const key = keys$1[i];
    const objValue = object[key];
    const srcValue = source[key];
    const newValue = (getValueToAssign == null ? void 0 : getValueToAssign(objValue, srcValue, key, object, source)) ?? srcValue;
    if (!(key in object) || !eq(objValue, newValue)) {
      object[key] = newValue;
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/create.mjs
function create(prototype, properties) {
  const proto = isObject(prototype) ? Object.create(prototype) : {};
  if (properties != null) {
    const propsKeys = keys(properties);
    for (let i = 0; i < propsKeys.length; i++) {
      const key = propsKeys[i];
      const propsValue = properties[key];
      assignValue(proto, key, propsValue);
    }
  }
  return proto;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/defaults.mjs
function defaults(object, ...sources) {
  object = Object(object);
  const objectProto = Object.prototype;
  let length = sources.length;
  const guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }
  for (let i = 0; i < length; i++) {
    const source = sources[i];
    const keys2 = Object.keys(source);
    for (let j = 0; j < keys2.length; j++) {
      const key = keys2[j];
      const value = object[key];
      if (value === void 0 || !Object.hasOwn(object, key) && eq(value, objectProto[key])) {
        object[key] = source[key];
      }
    }
  }
  return object;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/findKey.mjs
function findKey2(obj, predicate) {
  if (!isObject(obj)) {
    return void 0;
  }
  return findKeyImpl(obj, predicate);
}
function findKeyImpl(obj, predicate) {
  if (typeof predicate === "function") {
    return findKey(obj, predicate);
  }
  if (typeof predicate === "object") {
    if (Array.isArray(predicate)) {
      const key = predicate[0];
      const value = predicate[1];
      return findKey(obj, matchesProperty(key, value));
    }
    return findKey(obj, matches(predicate));
  }
  if (typeof predicate === "string") {
    return findKey(obj, property(predicate));
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/forIn.mjs
function forIn(object, iteratee2 = identity) {
  if (object == null) {
    return object;
  }
  for (const key in object) {
    const result2 = iteratee2(object[key], key, object);
    if (result2 === false) {
      break;
    }
  }
  return object;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/forInRight.mjs
function forInRight(object, iteratee2 = identity) {
  if (object == null) {
    return object;
  }
  const keys2 = [];
  for (const key in object) {
    keys2.push(key);
  }
  for (let i = keys2.length - 1; i >= 0; i--) {
    const key = keys2[i];
    const result2 = iteratee2(object[key], key, object);
    if (result2 === false) {
      break;
    }
  }
  return object;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/forOwn.mjs
function forOwn(object, iteratee2 = identity) {
  if (object == null) {
    return object;
  }
  const iterable = Object(object);
  const keys$1 = keys(object);
  for (let i = 0; i < keys$1.length; ++i) {
    const key = keys$1[i];
    if (iteratee2(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return object;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/forOwnRight.mjs
function forOwnRight(object, iteratee2 = identity) {
  if (object == null) {
    return object;
  }
  const iterable = Object(object);
  const keys$1 = keys(object);
  for (let i = keys$1.length - 1; i >= 0; --i) {
    const key = keys$1[i];
    if (iteratee2(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return object;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/fromPairs.mjs
function fromPairs(pairs) {
  if (!isArrayLike(pairs) && !(pairs instanceof Map)) {
    return {};
  }
  const result2 = {};
  for (const [key, value] of pairs) {
    result2[key] = value;
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/functions.mjs
function functions(object) {
  if (object == null) {
    return [];
  }
  return keys(object).filter((key) => typeof object[key] === "function");
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/functionsIn.mjs
function functionsIn(object) {
  if (object == null) {
    return [];
  }
  const result2 = [];
  for (const key in object) {
    if (isFunction(object[key])) {
      result2.push(key);
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/hasIn.mjs
function hasIn(object, path) {
  let resolvedPath;
  if (Array.isArray(path)) {
    resolvedPath = path;
  } else if (typeof path === "string" && isDeepKey(path) && (object == null ? void 0 : object[path]) == null) {
    resolvedPath = toPath(path);
  } else {
    resolvedPath = [path];
  }
  if (resolvedPath.length === 0) {
    return false;
  }
  let current = object;
  for (let i = 0; i < resolvedPath.length; i++) {
    const key = resolvedPath[i];
    if (current == null || !(key in Object(current))) {
      const isSparseIndex = (Array.isArray(current) || isArguments(current)) && isIndex(key) && key < current.length;
      if (!isSparseIndex) {
        return false;
      }
    }
    current = current[key];
  }
  return true;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/invertBy.mjs
function invertBy(object, iteratee2) {
  const result2 = {};
  if (isNil(object)) {
    return result2;
  }
  if (iteratee2 == null) {
    iteratee2 = identity;
  }
  const keys2 = Object.keys(object);
  for (let i = 0; i < keys2.length; i++) {
    const key = keys2[i];
    const value = object[key];
    const valueStr = iteratee2(value);
    if (Array.isArray(result2[valueStr])) {
      result2[valueStr].push(key);
    } else {
      result2[valueStr] = [key];
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/mapKeys.mjs
function mapKeys2(object, getNewKey) {
  getNewKey = getNewKey ?? identity;
  switch (typeof getNewKey) {
    case "string":
    case "symbol":
    case "number":
    case "object": {
      return mapKeys(object, property(getNewKey));
    }
    case "function": {
      return mapKeys(object, getNewKey);
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/mapValues.mjs
function mapValues2(object, getNewValue) {
  getNewValue = getNewValue ?? identity;
  switch (typeof getNewValue) {
    case "string":
    case "symbol":
    case "number":
    case "object": {
      return mapValues(object, property(getNewValue));
    }
    case "function": {
      return mapValues(object, getNewValue);
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/mergeWith.mjs
function mergeWith(object, ...otherArgs) {
  const sources = otherArgs.slice(0, -1);
  const merge2 = otherArgs[otherArgs.length - 1];
  let result2 = object;
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    result2 = mergeWithDeep(result2, source, merge2, /* @__PURE__ */ new Map());
  }
  return result2;
}
function mergeWithDeep(target, source, merge2, stack) {
  if (isPrimitive(target)) {
    target = Object(target);
  }
  if (source == null || typeof source !== "object") {
    return target;
  }
  if (stack.has(source)) {
    return clone(stack.get(source));
  }
  stack.set(source, target);
  if (Array.isArray(source)) {
    source = source.slice();
    for (let i = 0; i < source.length; i++) {
      source[i] = source[i] ?? void 0;
    }
  }
  const sourceKeys = [...Object.keys(source), ...getSymbols(source)];
  for (let i = 0; i < sourceKeys.length; i++) {
    const key = sourceKeys[i];
    let sourceValue = source[key];
    let targetValue = target[key];
    if (isArguments(sourceValue)) {
      sourceValue = { ...sourceValue };
    }
    if (isArguments(targetValue)) {
      targetValue = { ...targetValue };
    }
    if (typeof Buffer !== "undefined" && Buffer.isBuffer(sourceValue)) {
      sourceValue = cloneDeep2(sourceValue);
    }
    if (Array.isArray(sourceValue)) {
      if (typeof targetValue === "object" && targetValue != null) {
        const cloned = [];
        const targetKeys = Reflect.ownKeys(targetValue);
        for (let i2 = 0; i2 < targetKeys.length; i2++) {
          const targetKey = targetKeys[i2];
          cloned[targetKey] = targetValue[targetKey];
        }
        targetValue = cloned;
      } else {
        targetValue = [];
      }
    }
    const merged = merge2(targetValue, sourceValue, key, target, source, stack);
    if (merged != null) {
      target[key] = merged;
    } else if (Array.isArray(sourceValue)) {
      target[key] = mergeWithDeep(targetValue, sourceValue, merge2, stack);
    } else if (isObjectLike(targetValue) && isObjectLike(sourceValue)) {
      target[key] = mergeWithDeep(targetValue, sourceValue, merge2, stack);
    } else if (targetValue == null && isPlainObject(sourceValue)) {
      target[key] = mergeWithDeep({}, sourceValue, merge2, stack);
    } else if (targetValue == null && isTypedArray2(sourceValue)) {
      target[key] = cloneDeep2(sourceValue);
    } else if (targetValue === void 0 || sourceValue !== void 0) {
      target[key] = sourceValue;
    }
  }
  return target;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/merge.mjs
function merge(object, ...sources) {
  return mergeWith(object, ...sources, noop);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/omit.mjs
function omit(obj, ...keysArr) {
  if (obj == null) {
    return {};
  }
  const result2 = cloneDeep(obj);
  for (let i = 0; i < keysArr.length; i++) {
    let keys2 = keysArr[i];
    switch (typeof keys2) {
      case "object": {
        if (!Array.isArray(keys2)) {
          keys2 = Array.from(keys2);
        }
        for (let j = 0; j < keys2.length; j++) {
          const key = keys2[j];
          unset(result2, key);
        }
        break;
      }
      case "string":
      case "symbol":
      case "number": {
        unset(result2, keys2);
        break;
      }
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/getSymbolsIn.mjs
function getSymbolsIn(object) {
  const result2 = [];
  while (object) {
    result2.push(...getSymbols(object));
    object = Object.getPrototypeOf(object);
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/omitBy.mjs
function omitBy(obj, shouldOmit) {
  if (obj == null) {
    return {};
  }
  const result2 = {};
  if (shouldOmit == null) {
    return {};
  }
  const keys2 = isArrayLike(obj) ? range(0, obj.length) : [...keysIn(obj), ...getSymbolsIn(obj)];
  for (let i = 0; i < keys2.length; i++) {
    const key = isSymbol(keys2[i]) ? keys2[i] : keys2[i].toString();
    const value = obj[key];
    if (!shouldOmit(value, key, obj)) {
      result2[key] = value;
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/pick.mjs
function pick(obj, ...keysArr) {
  if (isNil2(obj)) {
    return {};
  }
  const result2 = {};
  for (let i = 0; i < keysArr.length; i++) {
    let keys2 = keysArr[i];
    switch (typeof keys2) {
      case "object": {
        if (!Array.isArray(keys2)) {
          if (isArrayLike(keys2)) {
            keys2 = Array.from(keys2);
          } else {
            keys2 = [keys2];
          }
        }
        break;
      }
      case "string":
      case "symbol":
      case "number": {
        keys2 = [keys2];
        break;
      }
    }
    for (const key of keys2) {
      const value = get(obj, key);
      if (value === void 0 && !has(obj, key)) {
        continue;
      }
      if (typeof key === "string" && Object.hasOwn(obj, key)) {
        result2[key] = value;
      } else {
        set(result2, key, value);
      }
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/pickBy.mjs
function pickBy(obj, shouldPick) {
  if (obj == null) {
    return {};
  }
  const result2 = {};
  if (shouldPick == null) {
    return obj;
  }
  const keys2 = isArrayLike(obj) ? range(0, obj.length) : [...keysIn(obj), ...getSymbolsIn(obj)];
  for (let i = 0; i < keys2.length; i++) {
    const key = isSymbol(keys2[i]) ? keys2[i] : keys2[i].toString();
    const value = obj[key];
    if (shouldPick(value, key, obj)) {
      result2[key] = value;
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/propertyOf.mjs
function propertyOf(object) {
  return function(path) {
    return get(object, path);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/result.mjs
function result(object, path, defaultValue) {
  if (isKey(path, object)) {
    path = [path];
  } else if (!Array.isArray(path)) {
    path = toPath(toString(path));
  }
  const pathLength = Math.max(path.length, 1);
  for (let index = 0; index < pathLength; index++) {
    const value = object == null ? void 0 : object[toKey(path[index])];
    if (value === void 0) {
      return typeof defaultValue === "function" ? defaultValue.call(object) : defaultValue;
    }
    object = typeof value === "function" ? value.call(object) : value;
  }
  return object;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/toDefaulted.mjs
function toDefaulted(object, ...sources) {
  const cloned = cloneDeep2(object);
  return defaults(cloned, ...sources);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/mapToEntries.mjs
function mapToEntries(map2) {
  const arr = new Array(map2.size);
  const keys2 = map2.keys();
  const values2 = map2.values();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [keys2.next().value, values2.next().value];
  }
  return arr;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/setToEntries.mjs
function setToEntries(set2) {
  const arr = new Array(set2.size);
  const values2 = set2.values();
  for (let i = 0; i < arr.length; i++) {
    const value = values2.next().value;
    arr[i] = [value, value];
  }
  return arr;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/toPairs.mjs
function toPairs(object) {
  if (object instanceof Set) {
    return setToEntries(object);
  }
  if (object instanceof Map) {
    return mapToEntries(object);
  }
  const keys$1 = keys(object);
  const result2 = new Array(keys$1.length);
  for (let i = 0; i < keys$1.length; i++) {
    const key = keys$1[i];
    const value = object[key];
    result2[i] = [key, value];
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/toPairsIn.mjs
function toPairsIn(object) {
  if (object instanceof Set) {
    return setToEntries(object);
  }
  if (object instanceof Map) {
    return mapToEntries(object);
  }
  const keys2 = keysIn(object);
  const result2 = new Array(keys2.length);
  for (let i = 0; i < keys2.length; i++) {
    const key = keys2[i];
    const value = object[key];
    result2[i] = [key, value];
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isBuffer.mjs
function isBuffer2(x) {
  return isBuffer(x);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/transform.mjs
function transform(object, iteratee$1 = identity, accumulator) {
  const isArrayOrBufferOrTypedArray = Array.isArray(object) || isBuffer2(object) || isTypedArray2(object);
  iteratee$1 = iteratee(iteratee$1);
  if (accumulator == null) {
    if (isArrayOrBufferOrTypedArray) {
      accumulator = [];
    } else if (isObject(object) && isFunction(object.constructor)) {
      accumulator = Object.create(Object.getPrototypeOf(object));
    } else {
      accumulator = {};
    }
  }
  if (object == null) {
    return accumulator;
  }
  forEach(object, (value, key, object2) => iteratee$1(accumulator, value, key, object2));
  return accumulator;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/update.mjs
function update(obj, path, updater) {
  return updateWith(obj, path, updater, () => void 0);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/object/valuesIn.mjs
function valuesIn(object) {
  const keys2 = keysIn(object);
  const result2 = new Array(keys2.length);
  for (let i = 0; i < keys2.length; i++) {
    const key = keys2[i];
    result2[i] = object[key];
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/conformsTo.mjs
function conformsTo(target, source) {
  if (source == null) {
    return true;
  }
  if (target == null) {
    return Object.keys(source).length === 0;
  }
  const keys2 = Object.keys(source);
  for (let i = 0; i < keys2.length; i++) {
    const key = keys2[i];
    const predicate = source[key];
    const value = target[key];
    if (value === void 0 && !(key in target) || !predicate(value)) {
      return false;
    }
  }
  return true;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/conforms.mjs
function conforms(source) {
  source = cloneDeep(source);
  return function(object) {
    return conformsTo(object, source);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isArrayBuffer.mjs
function isArrayBuffer2(value) {
  return isArrayBuffer(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isBoolean.mjs
function isBoolean(value) {
  return typeof value === "boolean" || value instanceof Boolean;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isDate.mjs
function isDate2(value) {
  return isDate(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isElement.mjs
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isEmpty.mjs
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value)) {
    if (typeof value.splice !== "function" && typeof value !== "string" && (typeof Buffer === "undefined" || !Buffer.isBuffer(value)) && !isTypedArray2(value) && !isArguments(value)) {
      return false;
    }
    return value.length === 0;
  }
  if (typeof value === "object") {
    if (value instanceof Map || value instanceof Set) {
      return value.size === 0;
    }
    const keys2 = Object.keys(value);
    if (isPrototype(value)) {
      return keys2.filter((x) => x !== "constructor").length === 0;
    }
    return keys2.length === 0;
  }
  return true;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isEqualWith.mjs
function isEqualWith2(a, b, areValuesEqual = noop) {
  if (typeof areValuesEqual !== "function") {
    areValuesEqual = noop;
  }
  return isEqualWith(a, b, (...args) => {
    const result2 = areValuesEqual(...args);
    if (result2 !== void 0) {
      return Boolean(result2);
    }
    if (a instanceof Map && b instanceof Map) {
      return isEqualWith2(Array.from(a), Array.from(b), after(2, areValuesEqual));
    }
    if (a instanceof Set && b instanceof Set) {
      return isEqualWith2(Array.from(a), Array.from(b), after(2, areValuesEqual));
    }
  });
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isError.mjs
function isError(value) {
  return getTag(value) === "[object Error]";
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isFinite.mjs
function isFinite(value) {
  return Number.isFinite(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isInteger.mjs
function isInteger(value) {
  return Number.isInteger(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isRegExp.mjs
function isRegExp2(value) {
  return isRegExp(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isSafeInteger.mjs
function isSafeInteger(value) {
  return Number.isSafeInteger(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isSet.mjs
function isSet2(value) {
  return isSet(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isWeakMap.mjs
function isWeakMap2(value) {
  return isWeakMap(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/predicate/isWeakSet.mjs
function isWeakSet2(value) {
  return isWeakSet(value);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/normalizeForCase.mjs
function normalizeForCase(str) {
  if (typeof str !== "string") {
    str = toString(str);
  }
  return str.replace(/['\u2019]/g, "");
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/camelCase.mjs
function camelCase2(str) {
  return camelCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/deburr.mjs
function deburr2(str) {
  return deburr(toString(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/endsWith.mjs
function endsWith(str, target, position = str.length) {
  return str.endsWith(target, position);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/escape.mjs
function escape2(string) {
  return escape(toString(string));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/escapeRegExp.mjs
function escapeRegExp2(str) {
  return escapeRegExp(toString(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/kebabCase.mjs
function kebabCase2(str) {
  return kebabCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/lowerCase.mjs
function lowerCase2(str) {
  return lowerCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/lowerFirst.mjs
function lowerFirst2(str) {
  return lowerFirst(toString(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/pad.mjs
function pad2(str, length, chars = " ") {
  return pad(toString(str), length, chars);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/padEnd.mjs
function padEnd(str, length = 0, chars = " ") {
  return toString(str).padEnd(length, chars);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/padStart.mjs
function padStart(str, length = 0, chars = " ") {
  return toString(str).padStart(length, chars);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/repeat.mjs
function repeat(str, n, guard) {
  if (guard ? isIterateeCall(str, n, guard) : n === void 0) {
    n = 1;
  } else {
    n = toInteger(n);
  }
  return toString(str).repeat(n);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/replace.mjs
function replace(target = "", pattern, replacement) {
  if (arguments.length < 3) {
    return toString(target);
  }
  return toString(target).replace(pattern, replacement);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/snakeCase.mjs
function snakeCase2(str) {
  return snakeCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/split.mjs
function split(string = "", separator, limit) {
  return toString(string).split(separator, limit);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/startCase.mjs
function startCase(str) {
  const words$1 = words(normalizeForCase(str).trim());
  let result2 = "";
  for (let i = 0; i < words$1.length; i++) {
    const word = words$1[i];
    if (result2) {
      result2 += " ";
    }
    if (word === word.toUpperCase()) {
      result2 += word;
    } else {
      result2 += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/startsWith.mjs
function startsWith(str, target, position = 0) {
  return str.startsWith(target, position);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/template.mjs
var esTemplateRegExp = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var unEscapedRegExp = /['\n\r\u2028\u2029\\]/g;
var noMatchExp = /($^)/;
var escapeMap = /* @__PURE__ */ new Map([
  ["\\", "\\"],
  ["'", "'"],
  ["\n", "n"],
  ["\r", "r"],
  ["\u2028", "u2028"],
  ["\u2029", "u2029"]
]);
function escapeString(match) {
  return `\\${escapeMap.get(match)}`;
}
var templateSettings = {
  escape: /<%-([\s\S]+?)%>/g,
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  variable: "",
  imports: {
    _: {
      escape: escape2,
      template
    }
  }
};
function template(string, options, guard) {
  var _a, _b, _c;
  string = toString(string);
  if (guard) {
    options = templateSettings;
  }
  options = defaults({ ...options }, templateSettings);
  const delimitersRegExp = new RegExp([
    ((_a = options.escape) == null ? void 0 : _a.source) ?? noMatchExp.source,
    ((_b = options.interpolate) == null ? void 0 : _b.source) ?? noMatchExp.source,
    options.interpolate ? esTemplateRegExp.source : noMatchExp.source,
    ((_c = options.evaluate) == null ? void 0 : _c.source) ?? noMatchExp.source,
    "$"
  ].join("|"), "g");
  let lastIndex = 0;
  let isEvaluated = false;
  let source = `__p += ''`;
  for (const match of string.matchAll(delimitersRegExp)) {
    const [fullMatch, escapeValue, interpolateValue, esTemplateValue, evaluateValue] = match;
    const { index } = match;
    source += ` + '${string.slice(lastIndex, index).replace(unEscapedRegExp, escapeString)}'`;
    if (escapeValue) {
      source += ` + _.escape(${escapeValue})`;
    }
    if (interpolateValue) {
      source += ` + ((${interpolateValue}) == null ? '' : ${interpolateValue})`;
    } else if (esTemplateValue) {
      source += ` + ((${esTemplateValue}) == null ? '' : ${esTemplateValue})`;
    }
    if (evaluateValue) {
      source += `;
${evaluateValue};
 __p += ''`;
      isEvaluated = true;
    }
    lastIndex = index + fullMatch.length;
  }
  const imports = defaults({ ...options.imports }, templateSettings.imports);
  const importsKeys = Object.keys(imports);
  const importValues = Object.values(imports);
  const sourceURL = `//# sourceURL=${options.sourceURL ? String(options.sourceURL).replace(/[\r\n]/g, " ") : `es-toolkit.templateSource[${Date.now()}]`}
`;
  const compiledFunction = `function(${options.variable || "obj"}) {
    let __p = '';
    ${options.variable ? "" : "if (obj == null) { obj = {}; }"}
    ${isEvaluated ? `function print() { __p += Array.prototype.join.call(arguments, ''); }` : ""}
    ${options.variable ? source : `with(obj) {
${source}
}`}
    return __p;
  }`;
  const result2 = attempt(() => new Function(...importsKeys, `${sourceURL}return ${compiledFunction}`)(...importValues));
  result2.source = compiledFunction;
  if (result2 instanceof Error) {
    throw result2;
  }
  return result2;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/toLower.mjs
function toLower(value) {
  return toString(value).toLowerCase();
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/toUpper.mjs
function toUpper(value) {
  return toString(value).toUpperCase();
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/trim.mjs
function trim2(str, chars, guard) {
  if (str == null) {
    return "";
  }
  if (guard != null || chars == null) {
    return str.toString().trim();
  }
  switch (typeof chars) {
    case "string": {
      return trim(str, chars.toString().split(""));
    }
    case "object": {
      if (Array.isArray(chars)) {
        return trim(str, chars.flatMap((x) => x.toString().split("")));
      } else {
        return trim(str, chars.toString().split(""));
      }
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/trimEnd.mjs
function trimEnd2(str, chars, guard) {
  if (str == null) {
    return "";
  }
  if (guard != null || chars == null) {
    return str.toString().trimEnd();
  }
  switch (typeof chars) {
    case "string": {
      return trimEnd(str, chars.toString().split(""));
    }
    case "object": {
      if (Array.isArray(chars)) {
        return trimEnd(str, chars.flatMap((x) => x.toString().split("")));
      } else {
        return trimEnd(str, chars.toString().split(""));
      }
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/trimStart.mjs
function trimStart2(str, chars, guard) {
  if (str == null) {
    return "";
  }
  if (guard != null || chars == null) {
    return str.toString().trimStart();
  }
  switch (typeof chars) {
    case "string": {
      return trimStart(str, chars.toString().split(""));
    }
    case "object": {
      if (Array.isArray(chars)) {
        return trimStart(str, chars.flatMap((x) => x.toString().split("")));
      } else {
        return trimStart(str, chars.toString().split(""));
      }
    }
  }
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/unescape.mjs
function unescape2(str) {
  return unescape(toString(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/upperCase.mjs
function upperCase2(str) {
  return upperCase(normalizeForCase(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/upperFirst.mjs
function upperFirst2(str) {
  return upperFirst(toString(str));
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/string/words.mjs
function words2(str, pattern = CASE_SPLIT_PATTERN, guard) {
  const input = toString(str);
  pattern = guard ? CASE_SPLIT_PATTERN : pattern;
  const words3 = Array.from(input.match(pattern) ?? []);
  return words3.filter((x) => x !== "");
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/cond.mjs
function cond(pairs) {
  const length = pairs.length;
  const processedPairs = pairs.map((pair) => {
    const predicate = pair[0];
    const func = pair[1];
    if (!isFunction(func)) {
      throw new TypeError("Expected a function");
    }
    return [iteratee(predicate), func];
  });
  return function(...args) {
    for (let i = 0; i < length; i++) {
      const pair = processedPairs[i];
      const predicate = pair[0];
      const func = pair[1];
      if (predicate.apply(this, args)) {
        return func.apply(this, args);
      }
    }
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/constant.mjs
function constant(value) {
  return () => value;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/defaultTo.mjs
function defaultTo(value, defaultValue) {
  if (value == null || Number.isNaN(value)) {
    return defaultValue;
  }
  return value;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/gt.mjs
function gt(value, other) {
  if (typeof value === "string" && typeof other === "string") {
    return value > other;
  }
  return toNumber(value) > toNumber(other);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/gte.mjs
function gte(value, other) {
  if (typeof value === "string" && typeof other === "string") {
    return value >= other;
  }
  return toNumber(value) >= toNumber(other);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/invoke.mjs
function invoke(object, path, args = []) {
  if (object == null) {
    return;
  }
  switch (typeof path) {
    case "string": {
      if (typeof object === "object" && Object.hasOwn(object, path)) {
        return invokeImpl(object, [path], args);
      }
      return invokeImpl(object, toPath(path), args);
    }
    case "number":
    case "symbol": {
      return invokeImpl(object, [path], args);
    }
    default: {
      if (Array.isArray(path)) {
        return invokeImpl(object, path, args);
      } else {
        return invokeImpl(object, [path], args);
      }
    }
  }
}
function invokeImpl(object, path, args) {
  const parent = get(object, path.slice(0, -1), object);
  if (parent == null) {
    return void 0;
  }
  let lastKey = last2(path);
  const lastValue = lastKey == null ? void 0 : lastKey.valueOf();
  if (typeof lastValue === "number") {
    lastKey = toKey(lastValue);
  } else {
    lastKey = String(lastKey);
  }
  const func = get(parent, lastKey);
  return func == null ? void 0 : func.apply(parent, args);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/lt.mjs
function lt(value, other) {
  if (typeof value === "string" && typeof other === "string") {
    return value < other;
  }
  return toNumber(value) < toNumber(other);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/lte.mjs
function lte(value, other) {
  if (typeof value === "string" && typeof other === "string") {
    return value <= other;
  }
  return toNumber(value) <= toNumber(other);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/method.mjs
function method(path, ...args) {
  return function(object) {
    return invoke(object, path, args);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/methodOf.mjs
function methodOf(object, ...args) {
  return function(path) {
    return invoke(object, path, args);
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/now.mjs
function now() {
  return Date.now();
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/over.mjs
function over(...iteratees) {
  if (iteratees.length === 1 && Array.isArray(iteratees[0])) {
    iteratees = iteratees[0];
  }
  const funcs = iteratees.map((item) => iteratee(item));
  return function(...args) {
    return funcs.map((func) => func.apply(this, args));
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/overEvery.mjs
function overEvery(...predicates) {
  return function(...values2) {
    for (let i = 0; i < predicates.length; ++i) {
      const predicate = predicates[i];
      if (!Array.isArray(predicate)) {
        if (!iteratee(predicate).apply(this, values2)) {
          return false;
        }
        continue;
      }
      for (let j = 0; j < predicate.length; ++j) {
        if (!iteratee(predicate[j]).apply(this, values2)) {
          return false;
        }
      }
    }
    return true;
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/overSome.mjs
function overSome(...predicates) {
  return function(...values2) {
    for (let i = 0; i < predicates.length; ++i) {
      const predicate = predicates[i];
      if (!Array.isArray(predicate)) {
        if (iteratee(predicate).apply(this, values2)) {
          return true;
        }
        continue;
      }
      for (let j = 0; j < predicate.length; ++j) {
        if (iteratee(predicate[j]).apply(this, values2)) {
          return true;
        }
      }
    }
    return false;
  };
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/stubArray.mjs
function stubArray() {
  return [];
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/stubFalse.mjs
function stubFalse() {
  return false;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/stubObject.mjs
function stubObject() {
  return {};
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/stubString.mjs
function stubString() {
  return "";
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/stubTrue.mjs
function stubTrue() {
  return true;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/MAX_ARRAY_LENGTH.mjs
var MAX_ARRAY_LENGTH4 = 4294967295;

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/toLength.mjs
function toLength(value) {
  if (value == null) {
    return 0;
  }
  const length = Math.floor(Number(value));
  return clamp2(length, 0, MAX_ARRAY_LENGTH4);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/toPlainObject.mjs
function toPlainObject(value) {
  const plainObject = {};
  const valueKeys = keysIn(value);
  for (let i = 0; i < valueKeys.length; i++) {
    const key = valueKeys[i];
    const objValue = value[key];
    if (key === "__proto__") {
      Object.defineProperty(plainObject, key, {
        configurable: true,
        enumerable: true,
        value: objValue,
        writable: true
      });
    } else {
      plainObject[key] = objValue;
    }
  }
  return plainObject;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/_internal/MAX_SAFE_INTEGER.mjs
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/toSafeInteger.mjs
function toSafeInteger(value) {
  if (value == null) {
    return 0;
  }
  return clamp2(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/util/uniqueId.mjs
var idCounter = 0;
function uniqueId(prefix = "") {
  const id = ++idCounter;
  return `${prefix}${id}`;
}

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/compat.mjs
var compat_exports = {};
__export(compat_exports, {
  add: () => add,
  after: () => after2,
  ary: () => ary2,
  assign: () => assign,
  assignIn: () => assignIn,
  assignInWith: () => assignInWith,
  assignWith: () => assignWith,
  at: () => at,
  attempt: () => attempt,
  before: () => before,
  bind: () => bind,
  bindKey: () => bindKey,
  camelCase: () => camelCase2,
  capitalize: () => capitalize,
  castArray: () => castArray,
  ceil: () => ceil,
  chunk: () => chunk2,
  clamp: () => clamp2,
  clone: () => clone,
  cloneDeep: () => cloneDeep2,
  cloneDeepWith: () => cloneDeepWith2,
  compact: () => compact2,
  concat: () => concat,
  cond: () => cond,
  conforms: () => conforms,
  conformsTo: () => conformsTo,
  constant: () => constant,
  create: () => create,
  curry: () => curry,
  curryRight: () => curryRight,
  debounce: () => debounce2,
  deburr: () => deburr2,
  defaultTo: () => defaultTo,
  defaults: () => defaults,
  defer: () => defer,
  delay: () => delay,
  difference: () => difference2,
  differenceBy: () => differenceBy2,
  differenceWith: () => differenceWith2,
  divide: () => divide,
  drop: () => drop2,
  dropRight: () => dropRight2,
  dropRightWhile: () => dropRightWhile2,
  dropWhile: () => dropWhile2,
  each: () => forEach,
  eachRight: () => forEachRight,
  endsWith: () => endsWith,
  eq: () => eq,
  escape: () => escape2,
  escapeRegExp: () => escapeRegExp2,
  every: () => every,
  extend: () => assignIn,
  extendWith: () => assignInWith,
  fill: () => fill2,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex,
  findKey: () => findKey2,
  findLast: () => findLast,
  findLastIndex: () => findLastIndex,
  first: () => head2,
  flatMap: () => flatMap,
  flatten: () => flatten2,
  flattenDeep: () => flattenDeep,
  flattenDepth: () => flattenDepth,
  flip: () => flip,
  floor: () => floor,
  flow: () => flow2,
  flowRight: () => flowRight2,
  forEach: () => forEach,
  forEachRight: () => forEachRight,
  forIn: () => forIn,
  forInRight: () => forInRight,
  forOwn: () => forOwn,
  forOwnRight: () => forOwnRight,
  fromPairs: () => fromPairs,
  functions: () => functions,
  functionsIn: () => functionsIn,
  get: () => get,
  groupBy: () => groupBy2,
  gt: () => gt,
  gte: () => gte,
  has: () => has,
  hasIn: () => hasIn,
  head: () => head2,
  identity: () => identity,
  inRange: () => inRange2,
  includes: () => includes,
  indexOf: () => indexOf,
  initial: () => initial2,
  intersection: () => intersection2,
  intersectionBy: () => intersectionBy2,
  intersectionWith: () => intersectionWith2,
  invert: () => invert,
  invertBy: () => invertBy,
  invoke: () => invoke,
  isArguments: () => isArguments,
  isArray: () => isArray,
  isArrayBuffer: () => isArrayBuffer2,
  isArrayLike: () => isArrayLike,
  isArrayLikeObject: () => isArrayLikeObject,
  isBoolean: () => isBoolean,
  isBuffer: () => isBuffer2,
  isDate: () => isDate2,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isEqualWith: () => isEqualWith2,
  isError: () => isError,
  isFinite: () => isFinite,
  isFunction: () => isFunction,
  isInteger: () => isInteger,
  isLength: () => isLength,
  isMap: () => isMap2,
  isMatch: () => isMatch,
  isNaN: () => isNaN,
  isNil: () => isNil2,
  isNull: () => isNull,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isObjectLike: () => isObjectLike,
  isPlainObject: () => isPlainObject,
  isRegExp: () => isRegExp2,
  isSafeInteger: () => isSafeInteger,
  isSet: () => isSet2,
  isString: () => isString,
  isSymbol: () => isSymbol,
  isTypedArray: () => isTypedArray2,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap2,
  isWeakSet: () => isWeakSet2,
  iteratee: () => iteratee,
  join: () => join,
  kebabCase: () => kebabCase2,
  keyBy: () => keyBy,
  keys: () => keys,
  keysIn: () => keysIn,
  last: () => last2,
  lastIndexOf: () => lastIndexOf,
  lowerCase: () => lowerCase2,
  lowerFirst: () => lowerFirst2,
  lt: () => lt,
  lte: () => lte,
  map: () => map,
  mapKeys: () => mapKeys2,
  mapValues: () => mapValues2,
  matches: () => matches,
  matchesProperty: () => matchesProperty,
  max: () => max,
  maxBy: () => maxBy2,
  mean: () => mean,
  meanBy: () => meanBy2,
  memoize: () => memoize,
  merge: () => merge,
  mergeWith: () => mergeWith,
  method: () => method,
  methodOf: () => methodOf,
  min: () => min,
  minBy: () => minBy2,
  multiply: () => multiply,
  negate: () => negate2,
  noop: () => noop,
  now: () => now,
  nth: () => nth,
  nthArg: () => nthArg,
  omit: () => omit,
  omitBy: () => omitBy,
  once: () => once,
  orderBy: () => orderBy,
  over: () => over,
  overEvery: () => overEvery,
  overSome: () => overSome,
  pad: () => pad2,
  padEnd: () => padEnd,
  padStart: () => padStart,
  parseInt: () => parseInt,
  partial: () => partial,
  partialRight: () => partialRight,
  partition: () => partition,
  pick: () => pick,
  pickBy: () => pickBy,
  property: () => property,
  propertyOf: () => propertyOf,
  pull: () => pull2,
  pullAll: () => pullAll,
  pullAllBy: () => pullAllBy,
  pullAllWith: () => pullAllWith,
  pullAt: () => pullAt,
  random: () => random2,
  range: () => range2,
  rangeRight: () => rangeRight,
  rearg: () => rearg,
  reduce: () => reduce,
  reduceRight: () => reduceRight,
  reject: () => reject,
  remove: () => remove2,
  repeat: () => repeat,
  replace: () => replace,
  rest: () => rest2,
  result: () => result,
  reverse: () => reverse,
  round: () => round,
  sample: () => sample2,
  sampleSize: () => sampleSize2,
  set: () => set,
  shuffle: () => shuffle2,
  size: () => size,
  slice: () => slice,
  snakeCase: () => snakeCase2,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  sortedIndexBy: () => sortedIndexBy,
  sortedIndexOf: () => sortedIndexOf,
  sortedLastIndex: () => sortedLastIndex,
  sortedLastIndexBy: () => sortedLastIndexBy,
  split: () => split,
  spread: () => spread,
  startCase: () => startCase,
  startsWith: () => startsWith,
  stubArray: () => stubArray,
  stubFalse: () => stubFalse,
  stubObject: () => stubObject,
  stubString: () => stubString,
  stubTrue: () => stubTrue,
  subtract: () => subtract,
  sum: () => sum,
  sumBy: () => sumBy,
  tail: () => tail2,
  take: () => take2,
  takeRight: () => takeRight2,
  takeRightWhile: () => takeRightWhile,
  takeWhile: () => takeWhile,
  template: () => template,
  templateSettings: () => templateSettings,
  throttle: () => throttle,
  times: () => times,
  toArray: () => toArray2,
  toDefaulted: () => toDefaulted,
  toFinite: () => toFinite,
  toInteger: () => toInteger,
  toLength: () => toLength,
  toLower: () => toLower,
  toNumber: () => toNumber,
  toPairs: () => toPairs,
  toPairsIn: () => toPairsIn,
  toPath: () => toPath,
  toPlainObject: () => toPlainObject,
  toSafeInteger: () => toSafeInteger,
  toString: () => toString,
  toUpper: () => toUpper,
  transform: () => transform,
  trim: () => trim2,
  trimEnd: () => trimEnd2,
  trimStart: () => trimStart2,
  unary: () => unary,
  unescape: () => unescape2,
  union: () => union,
  unionBy: () => unionBy,
  unionWith: () => unionWith,
  uniq: () => uniq2,
  uniqBy: () => uniqBy2,
  uniqWith: () => uniqWith2,
  uniqueId: () => uniqueId,
  unset: () => unset,
  unzip: () => unzip2,
  unzipWith: () => unzipWith,
  update: () => update,
  updateWith: () => updateWith,
  upperCase: () => upperCase2,
  upperFirst: () => upperFirst2,
  values: () => values,
  valuesIn: () => valuesIn,
  without: () => without2,
  words: () => words2,
  wrap: () => wrap,
  xor: () => xor,
  xorBy: () => xorBy,
  xorWith: () => xorWith,
  zip: () => zip2,
  zipObject: () => zipObject,
  zipObjectDeep: () => zipObjectDeep,
  zipWith: () => zipWith
});

// node_modules/.pnpm/es-toolkit@1.37.2/node_modules/es-toolkit/dist/compat/toolkit.mjs
var toolkit = (value) => {
  return value;
};
Object.assign(toolkit, compat_exports);
toolkit.partial.placeholder = toolkit;
toolkit.partialRight.placeholder = toolkit;
export {
  add,
  after2 as after,
  ary2 as ary,
  assign,
  assignIn,
  assignInWith,
  assignWith,
  at,
  attempt,
  before,
  bind,
  bindKey,
  camelCase2 as camelCase,
  capitalize,
  castArray,
  ceil,
  chunk2 as chunk,
  clamp2 as clamp,
  clone,
  cloneDeep2 as cloneDeep,
  cloneDeepWith2 as cloneDeepWith,
  compact2 as compact,
  concat,
  cond,
  conforms,
  conformsTo,
  constant,
  create,
  curry,
  curryRight,
  debounce2 as debounce,
  deburr2 as deburr,
  toolkit as default,
  defaultTo,
  defaults,
  defer,
  delay,
  difference2 as difference,
  differenceBy2 as differenceBy,
  differenceWith2 as differenceWith,
  divide,
  drop2 as drop,
  dropRight2 as dropRight,
  dropRightWhile2 as dropRightWhile,
  dropWhile2 as dropWhile,
  forEach as each,
  forEachRight as eachRight,
  endsWith,
  eq,
  escape2 as escape,
  escapeRegExp2 as escapeRegExp,
  every,
  assignIn as extend,
  assignInWith as extendWith,
  fill2 as fill,
  filter,
  find,
  findIndex,
  findKey2 as findKey,
  findLast,
  findLastIndex,
  head2 as first,
  flatMap,
  flatten2 as flatten,
  flattenDeep,
  flattenDepth,
  flip,
  floor,
  flow2 as flow,
  flowRight2 as flowRight,
  forEach,
  forEachRight,
  forIn,
  forInRight,
  forOwn,
  forOwnRight,
  fromPairs,
  functions,
  functionsIn,
  get,
  groupBy2 as groupBy,
  gt,
  gte,
  has,
  hasIn,
  head2 as head,
  identity,
  inRange2 as inRange,
  includes,
  indexOf,
  initial2 as initial,
  intersection2 as intersection,
  intersectionBy2 as intersectionBy,
  intersectionWith2 as intersectionWith,
  invert,
  invertBy,
  invoke,
  isArguments,
  isArray,
  isArrayBuffer2 as isArrayBuffer,
  isArrayLike,
  isArrayLikeObject,
  isBoolean,
  isBuffer2 as isBuffer,
  isDate2 as isDate,
  isElement,
  isEmpty,
  isEqual,
  isEqualWith2 as isEqualWith,
  isError,
  isFinite,
  isFunction,
  isInteger,
  isLength,
  isMap2 as isMap,
  isMatch,
  isNaN,
  isNil2 as isNil,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isRegExp2 as isRegExp,
  isSafeInteger,
  isSet2 as isSet,
  isString,
  isSymbol,
  isTypedArray2 as isTypedArray,
  isUndefined,
  isWeakMap2 as isWeakMap,
  isWeakSet2 as isWeakSet,
  iteratee,
  join,
  kebabCase2 as kebabCase,
  keyBy,
  keys,
  keysIn,
  last2 as last,
  lastIndexOf,
  lowerCase2 as lowerCase,
  lowerFirst2 as lowerFirst,
  lt,
  lte,
  map,
  mapKeys2 as mapKeys,
  mapValues2 as mapValues,
  matches,
  matchesProperty,
  max,
  maxBy2 as maxBy,
  mean,
  meanBy2 as meanBy,
  memoize,
  merge,
  mergeWith,
  method,
  methodOf,
  min,
  minBy2 as minBy,
  multiply,
  negate2 as negate,
  noop,
  now,
  nth,
  nthArg,
  omit,
  omitBy,
  once,
  orderBy,
  over,
  overEvery,
  overSome,
  pad2 as pad,
  padEnd,
  padStart,
  parseInt,
  partial,
  partialRight,
  partition,
  pick,
  pickBy,
  property,
  propertyOf,
  pull2 as pull,
  pullAll,
  pullAllBy,
  pullAllWith,
  pullAt,
  random2 as random,
  range2 as range,
  rangeRight,
  rearg,
  reduce,
  reduceRight,
  reject,
  remove2 as remove,
  repeat,
  replace,
  rest2 as rest,
  result,
  reverse,
  round,
  sample2 as sample,
  sampleSize2 as sampleSize,
  set,
  shuffle2 as shuffle,
  size,
  slice,
  snakeCase2 as snakeCase,
  some,
  sortBy,
  sortedIndex,
  sortedIndexBy,
  sortedIndexOf,
  sortedLastIndex,
  sortedLastIndexBy,
  split,
  spread,
  startCase,
  startsWith,
  stubArray,
  stubFalse,
  stubObject,
  stubString,
  stubTrue,
  subtract,
  sum,
  sumBy,
  tail2 as tail,
  take2 as take,
  takeRight2 as takeRight,
  takeRightWhile,
  takeWhile,
  template,
  templateSettings,
  throttle,
  times,
  toArray2 as toArray,
  toDefaulted,
  toFinite,
  toInteger,
  toLength,
  toLower,
  toNumber,
  toPairs,
  toPairsIn,
  toPath,
  toPlainObject,
  toSafeInteger,
  toString,
  toUpper,
  transform,
  trim2 as trim,
  trimEnd2 as trimEnd,
  trimStart2 as trimStart,
  unary,
  unescape2 as unescape,
  union,
  unionBy,
  unionWith,
  uniq2 as uniq,
  uniqBy2 as uniqBy,
  uniqWith2 as uniqWith,
  uniqueId,
  unset,
  unzip2 as unzip,
  unzipWith,
  update,
  updateWith,
  upperCase2 as upperCase,
  upperFirst2 as upperFirst,
  values,
  valuesIn,
  without2 as without,
  words2 as words,
  wrap,
  xor,
  xorBy,
  xorWith,
  zip2 as zip,
  zipObject,
  zipObjectDeep,
  zipWith
};
//# sourceMappingURL=es-toolkit_compat.js.map
