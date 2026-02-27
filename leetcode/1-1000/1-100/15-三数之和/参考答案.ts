// 排序数组，枚举x，求y和z，问题便转换为两数之和2
function threeSum(nums: number[]): number[][] {
    const n = nums.length;
    nums.sort((a, b) => {
        return a - b;
    });
    const result = [];

    for (let i = 0; i < n - 2; i++) {
        // 枚举x
        const x = nums[i];
        // 跳过重复的x
        if (nums[i - 1] === x) {
            continue;
        }
        // 优化剪枝
        if (x > 0) {
            break;
        }
        let j = i + 1,
            k = n - 1;
        while (j < k) {
            if (nums[j] + nums[k] + x > 0) {
                k--;
            } else if (nums[j] + nums[k] + x < 0) {
                j++;
            } else {
                result.push([nums[j], nums[k], x]);
                do {
                    j++;
                } while (nums[j] === nums[j - 1]);
                do {
                    k--;
                } while (nums[k] === nums[k + 1]);
            }
        }
    }

    return result;
}
