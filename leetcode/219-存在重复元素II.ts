// 学习了用for...of和array.entries()方法同时迭代数组的索引和值
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map: Map<number, number> = new Map();

    for (const [index, value] of nums.entries()) {
        const n = map.get(value);
        if (n === undefined) {
            map.set(value, index);
        } else {
            if (index - n <= k) {
                return true;
            } else {
                map.set(value, index);
            }
        }
    }
    return false;
}
