// 渐进式实现深拷贝
// 深拷贝1，可以处理数组
const deepCopy1 = (target) => {
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
            cloneTarget[key] = deepCopy1(target[key]);
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
const deepCopy2 = (target, map = new WeakMap()) => {
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
            cloneTarget[key] = deepCopy2(target[key], map);
        }
    }

    return cloneTarget;
};

// 深拷贝3，可以处理各种类型的数据结构
// 为了处理如Date RegExp Set Map等数据结构，对于它们，我们不能用{}作为空容器，必须用它们对应的构造函数

function deepCopy3(target, map = new WeakMap()) {
    // 1、处理基本类型
    if (typeof target !== "object" || target === null) {
        return target;
    }

    // 2、处理特殊对象Date和RegExp
    if (target instanceof Date) {
        return new Date(target);
    }
    if (target instanceof RegExp) {
        return new RegExp(target);
    }

    // 3、处理循环引用
    if (map.has(target)) {
        return map.get(target);
    }

    // 4、初始化其他特殊对象的空容器，可以利用target.constructor拿到Array Set Map Object等的构造函数
    const copyTarget = new target.constructor();

    // 5、记录到map中
    map.set(target, copyTarget);

    // 6、处理Set
    if (target instanceof Set) {
        for (const value of target) {
            copyTarget.add(deepCopy3(value, map));
        }
        return copyTarget;
    }

    // 7、处理Map，注意我们总是忘记，map是不能用for...in来遍历的，如果要同时拿到map的key和value，用for...of+解构
    if (target instanceof Map) {
        for (const [key, value] of target) {
            copyTarget.set(key, deepCopy3(value, map));
        }
        return copyTarget;
    }

    // 8、处理普通Object或Array
    // 深拷贝是要把源对象身上包括不可枚举属性在内全都拷贝的，Reflect.ownKeys可以拿到对象身上的所有key（包括Symbol类型）
    // 而Object.keys只能拿到可枚举属性
    Reflect.ownKeys(target).forEach((key) => {
        copyTarget[key] = deepCopy3(target[key], map);
    });
    return copyTarget;
}

// 测试对象
const obj = {
    name: "Hotaru",
    age: 16,
    hobbies: ["gaming", "coding"],
    info: { height: 146 },
    birth: new Date("2007-10-10"),
    reg: /^xyz/gi,
    empty: null,
    func: () => console.log("I am a function"),
    map: new Map([["key1", "value1"]]),
};
// 制造循环引用
obj.self = obj;

const objCopy = deepCopy3(obj);
console.log(objCopy);

// console.log(obj.constructor);
