// 展平嵌套数组，前端面试似乎经常考这种题
// 看了答案后发现还是比较简单的
// TODO需要二刷，目前先掌握好递归写法

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
    arr: MultiDimensionalArray,
    n: number,
): MultiDimensionalArray {
    const ans: MultiDimensionalArray = [];
    const flatten = (arr: MultiDimensionalArray, n: number) => {
        for (const item of arr) {
            if (Array.isArray(item) && n > 0) {
                flatten(item, n - 1);
            } else {
                ans.push(item);
            }
        }
    };
    flatten(arr, n);
    return ans;
};
