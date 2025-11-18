// 看了题解，反复debug了几次才写出来
// 对一个升序数组向左偏移了n次，问偏移后数组nums中最小值
// 偏移后，nums还是由两个升序数组组成的，且左侧的升序数组的最小值始终大于右侧升序数组的最大值
// 注意到nums的最后一个值是右侧数组的最大值
// 考虑二分，每次与最后一个元素nums[right]比较
// 若中点比该元素大，则中点处于左侧数组中，可以排除包括中点在内的所有左侧元素，因为排除的部分必定有序且大于数组最小值
// 若中点比该元素小，则中点处于右侧数组中，可以排除不包括中点在内的所有右侧元素，不包括中点是因为中点可能就是最小值
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            return nums[left];
        }
    }
    return nums[left];
}
