// 不定长滑窗，入-出-更新
// 优化后精简的解法

function lengthOfLongestSubstring(s: string): number {
    const n = s.length;
    const window = new Set();
    let max = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        const char = s[right];

        while (window.has(char)) {
            window.delete(s[left]);
            left++;
        }
        window.add(char);

        max = Math.max(max, right - left + 1);
    }
    return max;
}
