function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>();
    const n = s.length;
    let left = 0;
    let max = 0;
    for (let right = 0; right < n; right++) {
        if (set.has(s[right]) === false) {
            set.add(s[right]);
            max = Math.max(right - left + 1, max);
        } else {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
        }
    }
    return max;
}
