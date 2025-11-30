// 前缀和+用散列表枚举右维护左（类似两数之和）+同余
// 感觉还是挺有难度的，自己想到了前缀和+两数之和但是超时了，完全不知道要用同余的性质来优化
// TODO还需要再理解
function minSubarray(nums: number[], p: number): number {
    const n = nums.length;
    const s = new Array(n + 1);
    s[0] = 0;
    for (let i = 0; i < n; i++) {
        s[i + 1] = nums[i] + s[i];
    }
    if (s[n] < p) return -1;
    const target = s[n] % p;
    if (target === 0) return 0;
    const map = new Map();
    let minDistance = Infinity;
    for (let i = 0; i <= n; i++) {
        s[i] = s[i] % p;
        if (map.has((s[i] + p - target) % p)) {
            minDistance = Math.min(
                minDistance,
                i - map.get((s[i] + p - target) % p),
            );
        }
        map.set(s[i], i);
    }
    return minDistance === Infinity || minDistance === n ? -1 : minDistance;
}
