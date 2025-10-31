/**
 * @param {number[]} target
 * @return {number}
 * 
 * 学到了差分数组的概念
 * 
 * 
 */
var minNumberOperations = function (target) {
    const arr = new Array(target.length)
    arr[0] = target[0]
    for (let i = 1; i < target.length; i++) {
        arr[i] = target[i] - target[i - 1]
    }

    let result = 0

    for (const n of arr) {
        if (n > 0) result += n
    }

    return result
};