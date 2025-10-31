/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 * 
 * 定长滑动窗口套路题
 */
var minimumRecolors = function (blocks, k) {
    let cur = 0  // 当前窗口白块的数量

    // 初始化窗口
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') {
            cur++
        }
    }
    let min = cur

    // 滑动窗口=>更新
    for (let i = k; i < blocks.length; i++) {
        if (blocks[i] === 'W') {
            cur++
        }
        if (blocks[i - k] === 'W') {
            cur--
        }
        min = Math.min(min, cur)
    }

    return min
};