// 简单题，没啥好说的

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    for (let p = m + n - 1; p >= 0; p--) {
        if (i < 0) {
            nums1[p] = nums2[j--];
        } else if (j < 0) {
            nums1[p] = nums1[i--];
        } else {
            nums1[p] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
        }
    }
}
