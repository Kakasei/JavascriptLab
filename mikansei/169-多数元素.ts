// 多数众数

function majorityElement(nums: number[]): number {
    let ans = 0,
        hp = 0;
    for (const n of nums) {
        if (hp === 0) {
            ans = n;
            hp = 1;
        } else {
            hp += n === ans ? 1 : -1;
        }
    }
    return ans;
}
