// 组合问题，尝试和排列一样用队列记录还没参与组合的元素，但是行不通
// 实际上，与排列不同，我们应当从选或不选的角度来考虑组合问题，类似0-1背包
// TODO组合+回溯问题，hot100，反复揣摩

function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const n = nums.length;
    let combination: number[] = [];

    // recursion(i)枚举选或不选第i个元素参与组合
    const recursion = (i: number) => {
        if (i === n) {
            result.push([...combination]);
            return;
        }
        // 选
        combination.push(nums[i]);
        recursion(i + 1);
        combination.pop();

        // 不选
        recursion(i + 1);
    };
    recursion(0);

    return result;
}
