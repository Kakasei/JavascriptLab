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

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const traver = (node: TreeNode | null) => {
        if (node === null) {
            return;
        }
        traver(node.left);
        result.push(node.val);
        traver(node.right);
    };
    traver(root);
    return result;
}
