// 不定长滑动窗口

function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;

    let maxLength = 1;
    const set = new Set<string>();
    let l = 0;
    set.add(s[l]);
    for (let r = 1; r < s.length; r++) {
        if (!set.has(s[r])) {
            set.add(s[r]);
            maxLength = Math.max(maxLength, set.size);
        } else {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
        }
    }
    return maxLength;
}
