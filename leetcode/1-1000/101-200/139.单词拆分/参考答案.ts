// dp[i]表示前i个字符是否能拆分
// 状态转移：对于长度为i的子串，若长度为j的子串已经能被拆分，且slice(j,i)子串也能被拆分，则整个长度为i的子串可以被拆分
function wordBreak(s: string, wordDict: string[]): boolean {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    // 空串视作可以被拆分
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.slice(j, i)) === true) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}
