// 递归+记忆化搜索
function climbStairs(n: number): number {
    const memo: number[] = new Array(n + 1).fill(0);
    const dfs = (i: number): number => {
        if (i === 0 || i === 1) {
            return 1;
        }
        if (memo[i] !== 0) {
            return memo[i];
        }
        memo[i] = dfs(i - 1) + dfs(i - 2);
        return memo[i];
    };
    return dfs(n);
}
