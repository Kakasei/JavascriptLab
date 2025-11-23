// 动态规划基础题，递推写法
// 但是没有优化空间复杂度
// TODO
function minCostClimbingStairs(cost: number[]): number {
    const f = new Array(cost.length + 1);
    f[0] = 0;
    f[1] = 0;
    for (let i = 2; i <= cost.length; i++) {
        f[i] = Math.min(f[i - 1] + cost[i - 1], f[i - 2] + cost[i - 2]);
    }
    return f[cost.length];
}
