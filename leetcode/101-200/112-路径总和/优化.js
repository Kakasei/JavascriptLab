// 之前的写法实际上是在统计有多少条满足target的路线，会遍历整棵树，应当在找到满足条件的路径时就立刻结束
// 优化后的写法
// TODO反复揣摩，递归的题目可真难啊

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // 两种边界情况
    if (root === null) {
        return false;
    }
    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }

    // 将问题划分为子问题
    if (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    ) {
        return true;
    } else {
        return false;
    }
};
