// leetcode困难题，但是靠自己就琢磨出来了，似乎不算难

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function maxPathSum(root: TreeNode | null): number {
    let result = -Infinity;
    function dfs(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        result = Math.max(
            result,
            node.val,
            node.val + left,
            node.val + right,
            node.val + left + right,
        );
        return Math.max(node.val, node.val + left, node.val + right);
    }
    dfs(root);

    return result;
}
