// 在ai那学到的更优的bfs解法，核心点有：
// 统计初始所有的新鲜橘子数量，从而可以确认是否有孤岛
// 分层bfs
// 时间复杂度已是优解，不过实现细节还能再优化一下

function orangesRotting(grid: number[][]): number {
    const m = grid.length,
        n = grid[0].length;
    const DIRECTION = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    const queue: number[][] = [];
    let freshOrange = 0;
    let minute = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                for (const dir of DIRECTION) {
                    const k = i + dir[0],
                        l = j + dir[1];
                    if (k >= 0 && k < m && l >= 0 && l < n && grid[k][l] === 1) {
                        // 即将被感染的节点置为3，并入队
                        grid[k][l] = 3;
                        queue.push([k, l]);
                    }
                }
            }
            // 第一轮统计所有新鲜橘子和即将被感染的橘子的数量，用于检测是否存在孤岛
            if (grid[i][j] === 1 || grid[i][j] === 3) {
                freshOrange++;
            }
        }
    }

    while (queue.length > 0) {
        minute++;
        const curLength = queue.length;
        for (let c = 0; c < curLength; c++) {
            const [i, j] = queue.shift() as number[];
            grid[i][j] = 2;
            freshOrange--;
            for (const dir of DIRECTION) {
                const k = i + dir[0],
                    l = j + dir[1];
                if (k >= 0 && k < m && l >= 0 && l < n && grid[k][l] === 1) {
                    // 即将被感染的节点置为3
                    grid[k][l] = 3;
                    queue.push([k, l]);
                }
            }
        }
    }

    if (freshOrange > 0) {
        return -1;
    }

    return minute;
}
