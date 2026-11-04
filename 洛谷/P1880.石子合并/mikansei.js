const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const tokens = input.split(/\s+/).map(Number);
const n = tokens[0];
const stones = tokens.slice(1);
const nums = stones.concat(stones);

// dp[l][r]表示合并l到r区间的最小得分和最大得分
const minDP = new Array(2 * n);
for (let i = 0; i < 2 * n; i++) {
    minDP[i] = new Array(2 * n);
}
const maxDP = new Array(2 * n);
for (let i = 0; i < 2 * n; i++) {
    maxDP[i] = new Array(2 * n);
}

for (let length = 1; length <= n; length++) {
    for (let l = 0; l + length - 1 < 2 * n; l++) {
        const r = l + length - 1;
        if (length == 1) {
            minDP[l][r] = 0;
            maxDP[l][r] = 0;
            continue;
        }

        let min = Infinity;
        let max = -Infinity;
        const sum = nums.slice(l, r + 1).reduce((sum, cur) => sum + cur, 0);
        for (let k = l; k < r; k++) {
            min = Math.min(min, minDP[l][k] + minDP[k + 1][r] + sum);
            minDP[l][r] = min;
            max = Math.max(max, maxDP[l][k] + maxDP[k + 1][r] + sum);
            maxDP[l][r] = max;
        }
    }
}

let min = Infinity;
let max = -Infinity;
for (let l = 0; l + n - 1 < 2 * n; l++) {
    const r = l + n - 1;
    min = Math.min(min, minDP[l][r]);
    max = Math.max(max, maxDP[l][r]);
}
console.log(min);
console.log(max);
