/**
 Do not return anything, modify matrix in-place instead.
 */

function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;

    const DIRECTION = [[-1, 0]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                for (const dir of DIRECTION) {
                    let k = i + dir[0],
                        l = j + dir[1];
                    while (
                        k >= 0 &&
                        k < m &&
                        l >= 0 &&
                        l < n &&
                        matrix[k][l] !== 0
                    ) {
                        matrix[k][l] = 1;
                        k += dir[0];
                        l += dir[1];
                    }
                }
            }
        }
    }
}
