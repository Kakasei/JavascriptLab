// 渐进式实现深拷贝
// 深拷贝1，可以处理数组
const deepClone1 = (target) => {
    // 基本类型number string boolean null等，直接返回
    if (typeof target !== "object" || typeof target === null) {
        return target;
    }

    // 判断是数组还是对象，以便初始化空容器
    const cloneTarget = Array.isArray(target) ? [] : {};

    // 遍历属性，递归拷贝
    for (const key in target) {
        // 防御代码，for...in会将对象的原型中的属性也迭代出来
        // 显然我们只需要克隆对象自身的属性
        if (Object.hasOwn(target, key)) {
            cloneTarget[key] = deepClone1(target[key]);
        }
    }

    return cloneTarget;
};

// 深拷贝2，可以处理循环引用
// 递归拷贝有点类似dfs，顺着嵌套的对象一直递归地拷贝下去，但无论怎么拷贝，源对象中每条属性、每个对象都只会被拷贝一次！
// 因此，开辟一个额外空间作为「访问清单」，存储已经拷贝过的属性或对象
// 若意图拷贝一个已经拷贝过的对象，说明遇到了循环引用，此时应当将拷贝对象返回去，从而使得拷贝对象也能同样构造出循环引用的结构
// 显然这个额外空间的数据结构最适合使用Map，进一步地，应当使用WeakMap
// 但WeakMap是啥，我们还没有很了解
const deepClone2 = (target, map = new WeakMap()) => {
    // 原始类型直接返回值
    if (typeof target !== "object" || typeof target === null) {
        return target;
    }

    // 处理循环引用核心机制，若这个对象已经被拷贝过了，则返回克隆体
    if (map.has(target)) {
        return map.get(target);
    }

    const cloneTarget = Array.isArray(target) ? [] : {};
    map.set(target, cloneTarget);

    for (const key in target) {
        if (Object.hasOwn(target, key)) {
            cloneTarget[key] = deepClone2(target[key], map);
        }
    }

    return cloneTarget;
};

const obj = {};
obj.isself = obj;

const objCopy = deepClone2(obj);
console.log(objCopy);
