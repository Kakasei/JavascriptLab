// 迭代写法，我似乎误打误撞写出了被称为颜色标记法的方法？
// TODO这是二叉树的最基础题型，也是hot100题，一定要完全掌握

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
    const stack: any[] = [root];

    while (stack.length) {
        const node = stack.pop();
        if (node === null) {
            continue;
        }
        if (typeof node === "number") {
            result.push(node as number);
            continue;
        }

        stack.push(node.right);
        stack.push(node.val);
        stack.push(node.left);
    }

    return result;
}
