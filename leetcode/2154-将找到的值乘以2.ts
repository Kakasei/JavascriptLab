// 我是啥比，若需要在一组数据中反复查找，要想到用散列表
function findFinalValue(nums: number[], original: number): number {
    const set: Set<number> = new Set();

    for (const n of nums) {
        if (n === original) {
            original *= 2;
        } else if (n % original === 0) {
            set.add(n);
        }
    }

    while (set.has(original)) {
        original *= 2;
    }

    return original;
}
