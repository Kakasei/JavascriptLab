// TODO动态规划解法，代码很简单，但是自己想不到这种解法
// 此外还有基于前缀和的解法


function maxSubArray(nums: number[]): number {
    const n = nums.length;
    const dp = new Array(n);
    dp[0] = nums[0];
    let max = nums[0];

    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
        max = Math.max(max, dp[i]);
    }

    return max;
}
