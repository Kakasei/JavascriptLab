// 这道题有两个注意点
// 1.js的number只能准确表达10^16以内的整数，这道题最坏情况下会超，要用bigint存
// 2.所有两数之积的累和问题，可以用前缀和优化复杂度
// TODO抽空再做一遍
function countTrapezoids(points: number[][]): number {
    const MOD = BigInt(1e9 + 7);
    let result = 0n;
    const map = new Map();
    for (const [x, y] of points) {
        map.set(y, (map.get(y) || 0) + 1);
    }
    const arr: bigint[] = [];
    const s: bigint[] = [];
    s[0] = 0n;
    let i = 0;
    for (const [_, n] of map) {
        if (n >= 2) {
            const bigN = BigInt(n);
            arr[i] = (bigN * (bigN - 1n)) / 2n;
            s[i + 1] = s[i] + arr[i];
            i++;
        }
    }

    for (let i = 1; i < arr.length; i++) {
        result += (arr[i] * s[i]) % MOD;
    }
    return Number(result % MOD);
}
