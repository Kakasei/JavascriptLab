/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timeoutID;
    function warpper(...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => {
                fn.apply(this, args);
            }, t);
        } else {
            timeoutID = setTimeout(() => {
                fn.apply(this, args);
            }, t);
        }
    }
    return warpper;
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
