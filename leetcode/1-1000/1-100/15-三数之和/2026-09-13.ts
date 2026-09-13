// 三刷，三数之和的核心思路看来还是没有忘记
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; nums[i] <= 0; i++) {
        const target = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right && nums[right] >= 0) {
            if (target + nums[left] + nums[right] > 0) {
                right--;
            } else if (target + nums[left] + nums[right] < 0) {
                left++;
            } else {
                result.push([target, nums[left], nums[right]]);
                left++;
                while (nums[left - 1] === nums[left]) {
                    left++;
                }
                right--;
                while (nums[right + 1] === nums[right]) {
                    right--;
                }
            }
        }
        while (nums[i + 1] === nums[i]) {
            i++;
        }
    }

    return result;
}
