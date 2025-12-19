// 自己想到的解法，我们的思路是先交换左右子树，然后递归地展平左右子树，然后将左子树黏在右子树的尾部
// 但是我们不知道右子树的尾部在哪，所以每次都要循环去找尾部，使得时间复杂上升了
// 我们的分治的思路其实是对的，但是可以再优化一下尾部的方法

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root === null) {
        return;
    }

    [root.left, root.right] = [root.right, root.left];
    if (root.right) flatten(root.right);
    if (root.left) flatten(root.left);
    let p = root;
    while (p.right) {
        p = p.right;
    }
    p.right = root.left;
    root.left = null;
};
