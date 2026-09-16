// 第k大的元素等价于升序排序后下标为n-k的元素
// 为了能在O(n)时间找到第k大元素，必须使用快速选择算法
// 快速选择算法的核心partition算法能在O(n)的时间，将一个元素放置在它应该处于的位置，且它的前面的都比它小，后面的都比它大
// 每轮partition可以筛掉一半的元素
// partition算法也是快速排序的核心
function findKthLargest(nums: number[], k: number): number {
    function partition(left: number, right: number) {
        const index = left + Math.floor(Math.random() * (right - left + 1));
        const pivot = nums[index];
        [nums[index], nums[left]] = [nums[left], nums[index]];

        let i = left + 1;
        let j = right;
        while (true) {
            while (i <= j && nums[i] < pivot) {
                i++;
            }
            while (i <= j && nums[j] > pivot) {
                j--;
            }
            if (i >= j) {
                break;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
        [nums[left], nums[j]] = [nums[j], nums[left]];

        return j;
    }

    const n = nums.length;
    let left = 0;
    let right = n - 1;
    while (true) {
        const p = partition(left, right);
        if (p < n - k) {
            left = p + 1;
        } else if (p > n - k) {
            right = p - 1;
        } else {
            return nums[p];
        }
    }
}
