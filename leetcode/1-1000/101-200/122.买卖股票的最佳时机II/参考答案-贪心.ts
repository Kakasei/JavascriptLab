// 只讨论这道题的话，贪心很简单能做出来
// 不过也有dp的写法，暂时还没去研究
function maxProfit(prices: number[]): number {
    const n = prices.length;
    let result = 0;
    let low = Infinity;

    for (let i = 0; i < n; i++) {
        if (prices[i] <= low) {
            low = prices[i];
        } else {
            result += prices[i] - low;
            low = prices[i];
        }
    }

    return result;
}
