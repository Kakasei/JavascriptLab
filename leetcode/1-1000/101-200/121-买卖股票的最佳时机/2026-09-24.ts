function maxProfit(prices: number[]): number {
    const n = prices.length;
    let result = 0;
    let low = prices[0];

    for (let i = 1; i < n; i++) {
        if (prices[i] < low) {
            low = prices[i];
            continue;
        }

        if (prices[i] - low > result) {
            result = prices[i] - low;
        }
    }

    return result;
}
