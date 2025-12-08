// 自己琢磨的方法，有点笨但是能过

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
    let count = 0;
    const dfs = (node, sum) => {
        if (node === null) {
            return;
        }
        sum += node.val;
        if (node.left) {
            dfs(node.left, sum);
        }
        if (node.right) {
            dfs(node.right, sum);
        }
        if (node.left === null && node.right === null && sum === targetSum) {
            count++;
        }
    };
    dfs(root, 0);
    return count ? true : false;
};
