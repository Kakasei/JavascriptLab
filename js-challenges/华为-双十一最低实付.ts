const [a, b, c] = readline().trim().split(" ").map(Number);
const must = readline().trim().split(" ").map(Number);
const optional = b > 0 ? readline().trim().split(" ").map(Number) : [];
const yhq = [];
for (let i = 0; i < c; i++) {
    yhq.push(readline().trim().split(" ").map(Number));
}

let mustSum = must.reduce((sum, item) => sum + item, 0);
let result = mustSum;

// 先枚举选哪些凑单商品
for (let i = 0; i < 1 << b; i++) {
    let sum = mustSum;
    for (let j = 0; j < b; j++) {
        if ((i >> j) & 1) {
            sum += optional[j];
        }
    }

    // 再枚举选哪些优惠券，以及使用顺序
    const used = new Array(c).fill(0);
    function dfs(price: number) {
        for (let i = 0; i < c; i++) {
            if (used[i] === 1) continue;
            const [f, g, d] = yhq[i];
            if (price < g) continue;
            const curPrice = f === 0 ? price - d : Math.floor((price * d) / 100);
            used[i] = 1;
            result = Math.min(result, Math.max(0, curPrice));
            dfs(curPrice);
            uesd[i] = 0;
        }
    }
    dfs(sum);
}
