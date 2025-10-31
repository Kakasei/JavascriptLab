/**
 * @param {number} n
 * @return {number}
 *
1、学到了Math.clz32的用法
 Math.clz32() 函数返回一个 32 位无符号整数的二进制表示中前导零的数量。
2、把1左移一定位数再减1即可得到全1的二进制数
 */
var smallestNumber = function (n) {
  const c = 32 - Math.clz32(n);
  return (1 << c) - 1;
};
