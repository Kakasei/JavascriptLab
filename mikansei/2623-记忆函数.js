/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        if (cache.has(JSON.stringify(args))) {
            return cache.get(JSON.stringify(args));
        } else {
            const result = fn(...args);
            cache.set(JSON.stringify(args), result);
            return result;
        }
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
