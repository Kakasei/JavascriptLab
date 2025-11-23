// 为了盈利最大，显然是在最低点买入最高点卖出，且必须先买入再卖出
// 记录下至今为止的最低点，当新的一天到来时，对比若在今天卖出是否盈利最大，并且对比今天是否为最低点
// 经过所有天数后便得到盈利最大值
// 从数学角度看，这道题是带时序约束的最值差问题
// 从算法角度看，目前解法的思想是贪心，每一步都是当前状态下的最优解
// 更深的层面，这题是一道动态规划题目，不过我们还没开始学习动态规划，需要之后再重做这题
// TODO
function maxProfit(prices: number[]): number {
    let lowest = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - lowest);
        }
    }
    return profit;
}
