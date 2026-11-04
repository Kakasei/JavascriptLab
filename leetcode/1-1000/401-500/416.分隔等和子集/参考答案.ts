function canPartition(nums: number[]): boolean {
    const n = nums.length;
    const sum = nums.reduce((sum, cur) => sum + cur, 0);
    if (sum % 2 !== 0) {
        return false;
    }
    const half = sum / 2;

    // dp[i][j]表示前i个元素能否装满容量为j的背包
    const dp: boolean[][] = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(half + 1);
    }
    dp[0].fill(false);
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= half; j++) {
            dp[i][j] = j >= nums[i - 1] ? dp[i - 1][j] || dp[i - 1][j - nums[i - 1]] : dp[i - 1][j];
        }
    }

    return dp[n][half];
}
