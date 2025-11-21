/**
 Do not return anything, modify nums in-place instead.
 */
// 一次通过，这道题如果只求做对的话还是很简单的
function moveZeroes(nums: number[]): void {
    let zeroCount = 0;
    for (const [i, n] of nums.entries()) {
        if (n === 0) {
            zeroCount++;
        } else {
            nums[i - zeroCount] = n;
        }
    }
    for (let i = 0, end = nums.length - 1; i < zeroCount; i++) {
        nums[end - i] = 0;
    }
}
