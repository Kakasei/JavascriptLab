// 注意二叉搜索树的一个性质：中序遍历二叉搜索树的结果是一个有序序列
// TODO二叉搜索树基础题，hot100，需要完全掌握

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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let prev = -Infinity;
    let flag = true;

    const dfs = (node) => {
        if (flag === false) {
            return;
        }
        if (node === null) {
            return;
        }
        dfs(node.left);
        if (node.val <= prev) {
            flag = false;
            return;
        }
        prev = node.val;
        dfs(node.right);
        return;
    };

    dfs(root);
    return flag;
};
