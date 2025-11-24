// 动态规划，自己想出来的解法，一次通过
// TODO优化时间复杂度
// 实际上这是一道背包问题...我还没学到背包问题
function numSquares(n: number): number {
    const f: number[] = [];
    for (let i = 1; i <= n; i++) {
        let root = Math.sqrt(i);
        if (root % 1 === 0) {
            f[i] = 1;
        } else {
            let floorRoot = Math.floor(root);
            const arr = [];
            for (let j = floorRoot; j > 0; j--) {
                arr.push(f[Math.pow(j, 2)] + f[i - Math.pow(j, 2)]);
            }
            f[i] = Math.min(...arr);
        }
    }
    return f[n];
}
