// 无法拷贝方法和Symbol
const origin = {
    name: "Kakasei",
    details: {
        age: 18,
        gender: "non-binary",
    },
    girlfriend: undefined,
    fn: () => {
        console.log("hello");
    },
    // symbol: Symbol("SSR"),
    time: new Date(),
    state: {
        hp: Infinity,
        mp: NaN,
    },
    技能: new Map([["fire", "火球术"]]),
    装备: new Set([["剑", "盾"]]),
    正则: /boss/i,
};

console.log(origin);

const copy = structuredClone(origin);

console.log(copy);


// 会丢失原型链信息
class User {
    greet() {
        console.log("hello");
    }
}

const user = new User();

const userCopy = structuredClone(user);

console.log(userCopy instanceof User);
