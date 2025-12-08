/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isUnivalTree(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }
    if (root.left && root.right === null) {
        return isUnivalTree(root.left) && root.left.val === root.val;
    }
    if (root.left === null && root.right) {
        return isUnivalTree(root.right) && root.right.val === root.val;
    }
    if (root.left && root.right) {
        return (
            isUnivalTree(root.left) &&
            isUnivalTree(root.right) &&
            root.left.val === root.val &&
            root.right.val === root.val
        );
    }
    return true;
}
