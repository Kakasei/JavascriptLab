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

// TODO二叉树+回溯基础题,需要完全掌握
// 注意写的时候又忘记了数组的浅拷贝问题！！！

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    if (root === null) {
        return [];
    }
    const routes: number[][] = [];
    const path: number[] = [];
    let sum = 0;
    const dfs = (node: TreeNode) => {
        const val = node.val;
        path.push(val);
        sum += val;
        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                routes.push([...path]);
            }
        } else {
            if (node.left) {
                dfs(node.left);
            }
            if (node.right) {
                dfs(node.right);
            }
        }
        path.pop();
        sum -= val;
        return;
    };
    dfs(root as TreeNode);

    return routes;
}
