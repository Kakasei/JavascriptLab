// 递归解法，和leetcode-2625的思路是一样的，只是实现细节上有一些区别
const arr = [1, 2, [3, 4, [5, 6]]];

Array.prototype._flat = function (depth = 1) {
    let result = [];
    for (const item of this) {
        if (Array.isArray(item) && depth > 0) {
            result = result.concat(item._flat(depth - 1));
        } else {
            result.push(item);
        }
    }
    return result;
};

console.log(arr._flat());
