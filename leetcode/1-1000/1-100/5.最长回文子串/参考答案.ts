// 中心扩展法
function longestPalindrome(s: string): string {
    const n = s.length;
    let resultLeft = 0;
    let resultRight = 0;
    for (let i = 0; i < n; i++) {
        // 奇数长度回文串
        let l = i;
        let r = i;
        while (l >= 0 && r < n && s[l] === s[r]) {
            l--;
            r++;
        }
        // 循环结束时，l和r是多走了一步的，将它们退回去，指向回文串的左右
        l++;
        r--;
        if (r - l + 1 > resultRight - resultLeft + 1) {
            resultLeft = l;
            resultRight = r;
        }

        // 偶数长度回文串
        l = i;
        r = i + 1;
        while (l >= 0 && r < n && s[l] === s[r]) {
            l--;
            r++;
        }
        l++;
        r--;
        if (r - l + 1 > resultRight - resultLeft + 1) {
            resultLeft = l;
            resultRight = r;
        }
    }

    return s.slice(resultLeft, resultRight + 1);
}
