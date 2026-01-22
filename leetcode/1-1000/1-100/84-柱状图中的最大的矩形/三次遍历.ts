function largestRectangleArea(heights: number[]): number {
    const n = heights.length;

    // 对于柱子i，寻找比其更矮的下一个柱子
    // 显然这种在序列中，寻找下一个比它更小的的值，可以用单调栈来做
    const right: number[] = new Array(n).fill(n);
    let stack: number[] = [];

    for (let i = 0; i < n; i++) {
        const curHeight = heights[i];
        while (stack.length > 0 && curHeight < heights[stack.at(-1)!]) {
            const index = stack.pop()!;
            right[index] = i;
        }

        stack.push(i);
    }

    const left: number[] = new Array(n).fill(-1);
    stack = [];

    // 同理，这里寻找更矮的上一个柱子
    for (let i = n - 1; i >= 0; i--) {
        const curHeight = heights[i];
        while (stack.length > 0 && curHeight < heights[stack.at(-1)!]) {
            const index = stack.pop()!;
            left[index] = i;
        }

        stack.push(i);
    }

    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, heights[i] * (right[i] - left[i] - 1));
    }

    return max;
}
