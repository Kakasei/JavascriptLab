// 二分查找例题的变形，核心思想是一样的
function searchMatrix(matrix: number[][], target: number): boolean {
    let left = 0;
    const r = matrix.length;
    const c = matrix[0].length;
    let right = r * c - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midR = Math.floor(mid / c);
        const midC = mid - midR * c;

        if (matrix[midR][midC] === target) {
            return true;
        } else if (matrix[midR][midC] < target) {
            left = mid + 1;
        } else if (matrix[midR][midC] > target) {
            right = mid - 1;
        }
    }
    return false;
}
