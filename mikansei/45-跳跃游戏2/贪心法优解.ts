function jump(nums: number[]): number {
    const n = nums.length;
    if (n === 1) return 0;

    let step = 0;
    let nextRight = -1;
    let curRight = 0;

    for (let i = 0; i < n; i++) {
        nextRight = Math.max(nextRight, i + nums[i]);
        if (nextRight >= n - 1) {
            break;
        }
        if (i === curRight) {
            step++;
            curRight = nextRight;
        }
    }
    return step + 1;
}
