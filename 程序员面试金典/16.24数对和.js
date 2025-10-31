/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 
 * 两数之和的变种
 */
var pairSums = function (nums, target) {
  const map = new Map();
  const result = [];
  for (const n of nums) {
    //若target-n存在于map，则从map中取出一个target-n，与n组合在一起
    //若不存在，则向map中存入一个n
    if (map.get(target - n)) {
      result.push([n, target - n]);
      map.set(target - n, map.get(target - n) - 1);
    } else {
      map.set(n, map.get(n) ? map.get(n) + 1 : 1);
    }
  }
  return result;
};
