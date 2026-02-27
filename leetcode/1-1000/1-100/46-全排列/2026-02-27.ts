function permute(nums: number[]): number[][] {
    const n = nums.length;
    const result: number[][] = [];
    // 当前的排列
    const path: number[] = [];
    // 标记元素是否已经参与了排列
    const flags = new Array(n).fill(false);

    // 递归枚举第i到第n的所有排列
    const recursion = (i: number = 0) => {
        if (i === n) {
            result.push([...path]);
            return;
        }
        for (let j = 0; j < n; j++) {
            if (flags[j] === false) {
                path.push(nums[j]);
                flags[j] = true;
                recursion(i + 1);
                path.pop();
                flags[j] = false;
            }
        }
    };
    recursion();

    return result;
}
