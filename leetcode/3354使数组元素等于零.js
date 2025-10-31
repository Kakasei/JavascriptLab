/**
 * @param {number[]} nums
 * @return {number}
 * 前缀和？
 */


var countValidSelections = function (nums) {
  const map = new Map();
  let count = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    if (nums[i] === 0) {
      map.set(i, count);
    }
  }
  for (const [index, leftCount] of map) {
    switch (count - 2 * leftCount) {
      case 0:
        result += 2;
        break;
      case 1:
        result++;
        break;
      case -1:
        result++;
        break;
      default:
        break;
    }
  }

  return result;
};
