// 我感觉这道题的核心是掌握查找
// 注意到散列表和散列集查找的时间复杂度是O(1)，建散列集和散列表的时间复杂度是O(n)，这道题用散列集就够了
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let max = 0;
  for (const n of set) {
    if (set.has(n - 1)) continue;
    let long = 1;
    while (set.has(n + long)) {
      long++;
    }
    max = Math.max(max, long);
  }

  return max;
}
