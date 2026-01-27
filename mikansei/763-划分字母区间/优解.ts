// TODO熟练掌握这种简明的解法

function partitionLabels(s: string): number[] {
    const n = s.length;
    const result = [];
    const arr: number[] = new Array(26);
    const baseCode = "a".charCodeAt(0);

    for (let i = 0; i < n; i++) {
        const index = s[i].charCodeAt(0) - baseCode;

        arr[index] = i;
    }

    let left = 0,
        right = 0;
    for (let i = 0; i < n; i++) {
        const index = s[i].charCodeAt(0) - baseCode;

        if (i === right) {
            result.push(right - left + 1);
            left = i + 1;
        } else {
            right = Math.max(right, arr[index]);
        }
    }

    return result;
}
