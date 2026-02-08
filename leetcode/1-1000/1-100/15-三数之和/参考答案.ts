function threeSum(nums: number[]): number[][] {
    const n = nums.length;
    nums.sort((a, b) => {
        return a - b;
    });
    const answer = [];

    for (let i = 0; i < n - 2; i++) {
        const target = nums[i];
        if (nums[i - 1] === target) {
            continue;
        }
        if (target > 0) {
            break;
        }
        let left = i + 1,
            right = n - 1;
        while (left < right) {
            if (nums[left] + nums[right] + target > 0) {
                right--;
            } else if (nums[left] + nums[right] + target < 0) {
                left++;
            } else {
                answer.push([nums[left], nums[right], target]);
                do {
                    left++;
                } while (nums[left] === nums[left - 1]);
                do {
                    right--;
                } while (nums[right] === nums[right + 1]);
            }
        }
    }

    return answer;
}
