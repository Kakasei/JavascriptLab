function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const path: number[] = [];
    const queue: number[] = [...nums];

    // 递归函数recursion(i)的含义是枚举第i个元素到第末尾n个元素的所有排列
    const recursion = (i: number) => {
        // 递归边界
        if (i >= nums.length) {
            result.push([...path]);
        } else {
            const length = queue.length;
            for (let j = 0; j < length; j++) {
                path.push(queue.shift() as number);
                recursion(i + 1);
            }
        }
        // 回溯
        queue.push(path.pop() as number);
    };
    recursion(0);

    return result;
}
