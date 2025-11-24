// 动态规划的经典题目，零钱兑换问题
// TODO反复揣摩
function coinChange(coins: number[], amount: number): number {
    const dp: number[] = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const c of coins) {
            if (i - c >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - c]);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
