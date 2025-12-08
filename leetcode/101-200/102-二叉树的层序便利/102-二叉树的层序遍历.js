// 最基础的二叉树层序遍历，显然想到了用队列
// 自己琢磨的解法，一次通过，但是用了两个队列，仍有优化空间

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }

    const queue1 = [root];
    const queue2 = [];
    const result = [];
    let level = 0;

    while (queue1.length || queue2.length) {
        if (queue1.length) {
            while (queue1.length) {
                const node = queue1.shift();
                if (result[level] === undefined) {
                    result[level] = [node.val];
                } else {
                    result[level].push(node.val);
                }
                if (node.left) {
                    queue2.push(node.left);
                }
                if (node.right) {
                    queue2.push(node.right);
                }
            }
        } else {
            while (queue2.length) {
                const node = queue2.shift();
                if (result[level] === undefined) {
                    result[level] = [node.val];
                } else {
                    result[level].push(node.val);
                }
                if (node.left) {
                    queue1.push(node.left);
                }
                if (node.right) {
                    queue1.push(node.right);
                }
            }
        }
        level++;
    }

    return result;
};
