// 利用二进制来枚举从空集到全集的所有子集

function subsets(nums: number[]): number[][] {
    const n = nums.length;
    const result = [];

    for (let i = 0; i < 1 << n; i++) {
        const subset = [];
        for (let j = 0; j < n; j++) {
            if ((i >> j) & 1) {
                subset.push(nums[n - j - 1]);
            }
        }
        result.push(subset);
    }
    return result;
}
