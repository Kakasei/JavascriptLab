// 对象字面量语法{}等价于new Object()，Object是JS内置的一个构造函数，既然是构造函数，显然这个构造函数身上有prototype属性

const obj = {
    a:1
}

console.log(obj);
console.log(obj.constructor);


