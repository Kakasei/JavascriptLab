// 前缀和+两数之和

function subarraySum(nums: number[], k: number): number {
    const n = nums.length;
    // 前缀和数组
    const s = new Array(n + 1);
    s[0] = 0;
    for (let i = 0; i < n; i++) {
        s[i + 1] = s[i] + nums[i];
    }

    let result = 0;
    // [前缀和,数量]
    const map = new Map();
    for (let i = 0; i <= n; i++) {
        const a = s[i] - k;
        if (map.has(a)) {
            result += map.get(a);
        }
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    return result;
}
