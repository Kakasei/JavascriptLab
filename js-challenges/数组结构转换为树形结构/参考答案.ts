// 数组结构转换为树形结构
// 题目定义：
// 输入扁平数组，输出树形结构
// 输入扁平数组（不保证输入父节点一定出现在子节点前）
// 父节点的parentId为null
// 不存在循环引用
// 最顶层可能有多个节点，即森林
const list = [
    { id: 2, parentId: 1, name: "研发部" },
    { id: 1, parentId: null, name: "总部" },
    { id: 3, parentId: 1, name: "市场部" },
    { id: 4, parentId: 2, name: "前端组" },
];

const tree = [
    {
        id: 1,
        parentId: null,
        name: "总部",
        children: [
            {
                id: 2,
                parentId: 1,
                name: "研发部",
                children: [
                    {
                        id: 4,
                        parentId: 2,
                        name: "前端组",
                        children: [],
                    },
                ],
            },
            {
                id: 3,
                parentId: 1,
                name: "市场部",
                children: [],
            },
        ],
    },
];

// 参考答案和思路：
// map+两次遍历，第一次遍历将每个数组项转换为树节点
// 第二次遍历，将每个树节点接到它的父节点上
function arrayToTree(array: any) {
    const map = new Map();
    const root = [];

    for (const item of array) {
        map.set(item.id, {
            ...item,
            children: [],
        });
    }

    for (const item of array) {
        if (item.parentId === null) {
            root.push(map.get(item.id));
        } else {
            map.get(item.parentId).children.push(map.get(item.id));
        }
    }

    return root;
}

console.dir(arrayToTree(list), {
    depth: null,
});
