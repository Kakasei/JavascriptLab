// 0-1背包基础题，二维数组解法
// TODO反复揣摩
function canPartition(nums: number[]): boolean {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    if (sum % 2 !== 0) return false;
    const target = sum / 2;

    // dp[i][c]表示，在[0,i]物品挑选，能否刚好装满容量为c的背包
    const dp = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        dp[i] = new Array(target + 1);
    }

    // 初始化边界，在[0,0]物品中挑选，可以刚好装满容量为0的背包（一个都不拿）
    dp[0][0] = true;
    for (let i = 1; i <= target; i++) {
        if (nums[0] === i) dp[0][i] = true;
        else dp[0][i] = false;
    }

    for (let i = 1; i < nums.length; i++) {
        for (let c = 0; c <= target; c++) {
            // 若拿了第c个物品使得背包刚好装满
            // 或是不拿第c个物品背包也早已装满
            if (dp[i - 1][c - nums[i]] || dp[i - 1][c]) {
                dp[i][c] = true;
            } else {
                dp[i][c] = false;
            }
        }
    }
    return dp[nums.length - 1][target];
}
