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

function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }

    const result: number[] = [];
    inorder(root, result);

    return result;
}

const inorder = (root: TreeNode | null, result: number[]) => {
    if (root === null) {
        return;
    }

    inorder(root.left, result);
    result.push(root.val);
    inorder(root.right, result);
};
