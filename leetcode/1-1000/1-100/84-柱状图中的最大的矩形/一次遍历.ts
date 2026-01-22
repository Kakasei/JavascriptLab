// TODO反复揣摩，一次遍历的解法自己根本想不到，但是还是可以理解的

function largestRectangleArea(heights: number[]): number {
    // 精妙，在原数组前后都加上高为-1的虚拟柱子，使得所有柱子都一定会结算面积
    const newHeights = [-1, ...heights, -1];
    const n = newHeights.length;
    const stack: number[] = [0];

    let max = -Infinity;
    for (let i = 1; i < n; i++) {
        // 我们知道，当确定了一个柱子的左右边界（左右边界是左右两边第一个更矮的柱子）时，就可以结算其最大面积了
        // 对于栈顶的柱子i，由于单调栈的性质，柱子i的再下面的柱子i-1，一定是其左边界！
        // 当枚举到新柱子不满足单调性时，显然这个新柱子就是栈顶柱子的右边界！
        while (newHeights[i] < newHeights[stack.at(-1)!]) {
            const height = newHeights[stack.pop()!];
            const width = i - stack.at(-1)! - 1;
            max = Math.max(max, height * width);
        }

        stack.push(i);
    }
    return max;
}
