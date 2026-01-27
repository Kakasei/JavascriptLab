function partitionLabels(s: string): number[] {
    const result: number[] = [];
    const n = s.length;

    let set: Set<string> = new Set();
    const findLetterLastIndex = (letter: string, index: number) => {
        let lastIndex = -Infinity;
        for (let i = index; i < n; i++) {
            if (s[i] === letter) {
                lastIndex = i;
            }
        }

        return lastIndex;
    };

    let curRight = -1;
    let left;
    for (let i = 0; i < n; i++) {
        if (set.has(s[i]) === false) {
            set.add(s[i]);
            const index = findLetterLastIndex(s[i], i);
            // 若是首字母，记录下左边界
            if (curRight === -1) {
                // 若首字母只出现一次，直接push(1)
                if (index === -Infinity) {
                    result.push(1);
                    continue;
                }
                left = i;
            }

            curRight = Math.max(curRight, index);
        }
        // 找到了一个划分
        if (i === curRight) {
            result.push(curRight - left! + 1);
            curRight = -1;
            set = new Set();
        }
    }

    return result;
}
