// 输入示例
const tree = [
    {
        id: 1,
        name: "总部",
        children: [
            {
                id: 2,
                name: "研发部",
                children: [
                    {
                        id: 4,
                        name: "前端组",
                        children: [],
                    },
                ],
            },
            {
                id: 3,
                name: "市场部",
                children: [],
            },
        ],
    },
    {
        id: 5,
        name: "分公司",
        children: [],
    },
];

// 预期输出
[
    { id: 1, parentId: null, name: "总部" },
    { id: 2, parentId: 1, name: "研发部" },
    { id: 4, parentId: 2, name: "前端组" },
    { id: 3, parentId: 1, name: "市场部" },
    { id: 5, parentId: null, name: "分公司" },
];

function treeToArray(tree: any) {
    const result: any[] = [];
    function dfs(nodes: any, parentId?: number) {
        for (const node of nodes) {
            result.push({
                id: node.id,
                parentId: parentId ?? null,
                name: node.name,
            });
            dfs(node.children, node.id);
        }
    }

    dfs(tree);
    return result;
}

const result = treeToArray(tree);

console.dir(result, { depth: null });
