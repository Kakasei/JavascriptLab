function maximalSquare(matrix: string[][]): number {
    const m = matrix.length;
    const n = matrix[0].length;
    let answer = 0;

    function maxSquare(i: number, j: number): number {
        let cur = 0;
        while (true) {
            for (let k = i; k <= i + cur; k++) {
                if (matrix[k][j + cur] !== "1") {
                    return cur * cur;
                }
            }
            for (let l = j; l < j + cur; l++) {
                if (matrix[i + cur][l] !== "1") {
                    return cur * cur;
                }
            }
            cur++;
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            answer = Math.max(answer, maxSquare(i, j));
        }
    }

    return answer;
}
