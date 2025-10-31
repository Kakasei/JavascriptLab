/**
 * @param {number[]} nums
 * @return {number[]}
 * 1、lowbit
 *
 */
var singleNumber = function (nums) {
  let xorAll = 0;
  for (const n of nums) {
    xorAll ^= n;
  }

  const lowbit = xorAll & -xorAll;

  let xor1 = 0,
    xor0 = 0;
  for (const n of nums) {
    if (n & lowbit) {
      xor1 ^= n;
    } else {
      xor0 ^= n;
    }
  }

  return [xor0, xor1];
};
