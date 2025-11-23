// 递推
function climbStairs(n: number): number {
    return dp(n);
}

const dp = (n: number): number => {
    if (n === 0 || n === 1) {
        return 1;
    }
    let prev1 = 1,
        prev2 = 1;
    let current = 0;
    for (let i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return current;
};
