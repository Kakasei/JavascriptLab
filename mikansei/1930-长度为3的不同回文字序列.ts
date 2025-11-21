// 看了题解才做出来
function countPalindromicSubsequence(s: string): number {
    let result = 0;
    const map: Map<string, number[]> = new Map();

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const arr = map.get(c);

        if (arr === undefined) {
            map.set(c, [i]);
        } else {
            arr[1] = i;
        }
    }

    for (const [c, arr] of map) {
        if (arr[1]) {
            const set: Set<string> = new Set();
            for (let i = arr[0] + 1; i < arr[1]; i++) {
                set.add(s[i]);
            }
            result += set.size;
        }
    }
    return result;
}
