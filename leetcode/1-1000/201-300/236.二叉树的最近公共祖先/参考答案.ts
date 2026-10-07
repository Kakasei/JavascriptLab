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

// 对于一个根节点root，递归其左右子树，返回该树的给定节点的最近公共祖先
// 若左右子树中都不存在给定节点，显然返回null
// 左右子树中一侧存在，则返回该侧
// 两侧都存在，则返回自身
// 递归时只要找到了一个给定节点就立刻返回
/**
 *
 * @param root
 * @param p
 * @param q
 * @returns 返回值为以root为根节点的树中的最近公共祖先
 */
function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    function dfs(root: TreeNode | null): TreeNode | null {
        if (root === null) {
            return null;
        }
        if (root === p || root === q) {
            return root;
        }

        const left = dfs(root.left);
        const right = dfs(root.right);

        if (left !== null && right !== null) {
            return root;
        }
        return left ?? right ?? null;
    }

    return dfs(root);
}
