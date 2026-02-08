function twoSum(nums: number[], target: number): number[] {
    const n = nums.length;
    const map = new Map<number, number>();
    for (let i = 0; i < n; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i])! , i];
        }
        map.set(nums[i], i);
    }
}
