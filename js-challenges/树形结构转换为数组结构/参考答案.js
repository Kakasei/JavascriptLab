const data = [
    {
        id: 1,
        text: "节点1",
        parentId: 0,
        children: [
            {
                id: 2,
                text: "节点1_1",
                parentId: 1,
            },
        ],
    },
];

function treeToArray(data) {
    const result = [];

    const dfs = (tree) => {
        tree.forEach((item) => {
            // 最好不要动原始数据，而是解构到新的对象
            const { children, ...obj } = item;
            result.push(obj);
            if (children) {
                dfs(children);
            }
        });
    };
    dfs(data);
    return result;
}

console.log(treeToArray(data));
