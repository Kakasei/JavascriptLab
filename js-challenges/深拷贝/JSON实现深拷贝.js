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
    symbol: Symbol("SSR"),
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

const copy1 = JSON.parse(JSON.stringify(origin));
console.log(copy1);
