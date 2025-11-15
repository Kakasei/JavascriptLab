// 双指针
// 1、学习了一些BigInt的用法
// 2、注意科学计数法中1x10的9次方应当写成1e9而不是10e9

function numSub(s: string): number {
  let result = BigInt(0);

  let l = 0,
    r;

  while (l < s.length) {
    if (s[l] === "1") {
      // 右指针移动到全1子串的末尾
      for (r = l + 1; r < s.length; r++) {
        if (s[r] === "0") break;
      }
      r--;

      result += BigInt(((1 + (r - l + 1)) * (r - l + 1)) / 2);

      // 左指针移动
      l += r - l + 1 + 1;
    } else {
      l++;
    }
  }

  return Number(result % BigInt(1e9 + 7));
}
