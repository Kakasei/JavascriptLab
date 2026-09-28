// dp解法时间复杂度为O(n^2)，还有更优的贪心+二分解法时间复杂度为O(nlogn)
function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    // dp[i]表示以nums[i]为结尾的子序列的最长长度
    const dp = new Array(n);
    dp[0] = 1;

    for (let i = 1; i < n; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}
