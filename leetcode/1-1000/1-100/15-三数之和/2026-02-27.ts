// 半个月过后虽然会写，但是又忘了参考答案的写法...
function threeSum(nums: number[]): number[][] {
    nums.sort((a: number, b: number) => {
        return a - b;
    });
    const result: number[][] = [];
    const n = nums.length;

    // 虽然这里不加index<n-1也不影响，但既然我们都用ts了，最好就避免掉所有隐式类型转换，提升速度
    function nextNum(index: number) {
        while (index < n - 1 && nums[index] === nums[index + 1]) {
            index++;
        }
        return index + 1;
    }
    function prevNum(index: number) {
        while (index > 0 && nums[index] === nums[index - 1]) {
            index--;
        }
        return index - 1;
    }

    let i = 0;
    while (nums[i] <= 0 && i < n - 2) {
        const target = nums[i];
        let j = i + 1,
            k = n - 1;
        while (j < k) {
            if (target + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j = nextNum(j);
                k = prevNum(k);
            } else if (target + nums[j] + nums[k] > 0) {
                k = prevNum(k);
            } else {
                j = nextNum(j);
            }
        }

        i = nextNum(i);
    }

    return result;
}
