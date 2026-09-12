// 二维dp
// 核心状态转移方程思路：
// dp[i][j]表示text1的前i前缀字符串与text2的前j前缀字符串的最长公共子序列长度
// 假设在两个字符串后各加一个字符，若这两个字符相等，相当于最长公共子序列长度+1
// 即dp[i][j]=dp[i-1][j-1]+1

function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;

    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}
