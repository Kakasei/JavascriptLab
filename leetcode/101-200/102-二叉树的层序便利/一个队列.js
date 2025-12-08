// 只使用一个队列就能层序遍历，核心点在于每次遍历一层时给队列长度拍一个快照，约束循环次数，这样就不会在出队入队的过程中越界
// TODO二叉树的层序遍历是最基础的题目，需要完全掌握这种解法

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

    const queue = [root];
    const result = [];

    while (queue.length) {
        // 对当前队列长度拍一个快照
        const curLevelLength = queue.length;
        // 放当前层的所有节点
        const curLevelNodes = [];
        for (let i = 0; i < curLevelLength; i++) {
            const node = queue.shift();
            curLevelNodes.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(curLevelNodes);
    }

    return result;
};
