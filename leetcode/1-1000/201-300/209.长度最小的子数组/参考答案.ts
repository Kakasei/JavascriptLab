// 滑动窗口，不是很难
function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length;
    let l = 0;
    let result = Infinity;
    let cur = 0;

    for (let r = 0; r < n; r++) {
        cur += nums[r];
        while (cur - nums[l] >= target) {
            cur -= nums[l];
            l++;
        }
        if (cur >= target) {
            result = Math.min(result, r - l + 1);
        }
    }

    return result === Infinity ? 0 : result;
}
