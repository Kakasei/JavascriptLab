// 二维动态规划基础题
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if (obstacleGrid[0][0] === 1) return 0;
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp: number[][] = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }
    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 0) {
            dp[0][i] = 1;
        } else {
            for (let j = i; j < n; j++) {
                dp[0][j] = 0;
            }
            break;
        }
    }
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 0) {
            dp[i][0] = 1;
        } else {
            for (let j = i; j < m; j++) {
                dp[j][0] = 0;
            }
            break;
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            } else {
                dp[i][j] = 0;
            }
        }
    }

    return dp[m - 1][n - 1];
}
