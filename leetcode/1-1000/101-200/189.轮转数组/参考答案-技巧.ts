// 神奇的技巧，让我自己想是想不到的
// 时间复杂度O(n)
// 空间复杂度O(1)

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;

    const kk = k % n;
    let i = 0;
    let j = n - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    i = 0;
    j = kk - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    i = kk;
    j = n - 1;
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    return;
}
