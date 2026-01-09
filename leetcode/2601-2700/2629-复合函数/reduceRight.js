// 学习一下reduceRight的用法，其实也没啥难的

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        return functions.reduceRight((accumulator, currentValue) => {
            return currentValue(accumulator);
        }, x);
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
