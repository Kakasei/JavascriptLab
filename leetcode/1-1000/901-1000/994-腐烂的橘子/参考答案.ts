function orangesRotting(grid: number[][]): number {
    const direction = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    const m = grid.length;
    const n = grid[0].length;
    let time = 0;
    let fresh = 0;
    let queue: number[][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            } else if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    // 考虑[2,1,2]的情况，下一轮变为[2,2,2]时
    // 此时所有橘子都已经腐烂，直接可以退出
    // 因此需要在循环条件里加上 fresh，所有橘子都腐烂时直接退出
    while (fresh && queue.length > 0) {
        const cur = queue;
        queue = [];
        for (const [i, j] of cur) {
            for (const dir of direction) {
                const ni = i + dir[0];
                const nj = j + dir[1];

                if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] === 1) {
                    queue.push([ni, nj]);
                    grid[ni][nj] = 2;
                    fresh--;
                }
            }
        }
        time++;
    }

    return fresh > 0 ? -1 : time;
}
