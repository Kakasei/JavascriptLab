// 暴力法
// TODO可用前缀和+差分优化
function rangeAddQueries(n: number, queries: number[][]): number[][] {
  // 初始化
  const matrix: number[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0);
  }

  for (const [r1, c1, r2, c2] of queries) {
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        matrix[r][c]++;
      }
    }
  }

  return matrix
}
