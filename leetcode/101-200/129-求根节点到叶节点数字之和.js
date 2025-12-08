// 二叉树+递归，自己想到的解法，一次通过
// TODO反复练习，需要完全掌握，面试真题

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
 * @return {number}
 */
var sumNumbers = function (root) {
    let result = 0;
    const dfs = (node, sum) => {
        if (node === null) {
            return;
        }
        sum += node.val;
        if (node.left === null && node.right === null) {
            result += sum;
        } else {
            dfs(node.left, sum * 10);
            dfs(node.right, sum * 10);
        }
    };
    dfs(root, 0);
    return result;
};
