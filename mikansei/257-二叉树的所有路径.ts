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
// 二叉树+回溯的最基础题
// 顺便巩固了Array.join方法

function binaryTreePaths(root: TreeNode | null): string[] {
    const routes: string[] = [];
    const path: number[] = [];
    const dfs = (node: TreeNode) => {
        path.push(node.val);
        // 若当前是叶子节点，则添加到结果中，相当于探索到了尽头，此时需要弹出（回溯）
        if (node.left === null && node.right === null) {
            routes.push(path.join("->"));
            path.pop();
            return;
        } // 探索完左右分支后也要回溯
        else {
            if (node.left) {
                dfs(node.left);
            }
            if (node.right) {
                dfs(node.right);
            }
            path.pop();
            return;
        }
    };
    dfs(root as TreeNode);
    return routes;
}
