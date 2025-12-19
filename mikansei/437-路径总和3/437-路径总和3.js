// 自己琢磨的写法，debug了几次，数组和map的浅拷贝不熟练
// 这道题实际上是在560-和为K的子数组的基础上结合了二叉树
// 正确的做法除了用前缀和+两数之和，还要用回溯的思想节省时空复杂度，不过写这道题的时候我还没怎么掌握回溯
// TODO优化

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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (root === null) {
        return 0;
    }

    let result = 0;

    const dfs = (node, arr, map, i) => {
        arr[i] = arr[i - 1] + node.val;

        result += map.get(arr[i] - targetSum) ?? 0;
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);

        const mapCopy = new Map(map);
        const arrCopy = arr.slice();
        if (node.left) {
            dfs(node.left, arr, map, i + 1);
        }
        if (node.right) {
            dfs(node.right, arrCopy, mapCopy, i + 1);
        }
    };
    dfs(root, [0], new Map().set(0, 1), 1);

    return result;
};
