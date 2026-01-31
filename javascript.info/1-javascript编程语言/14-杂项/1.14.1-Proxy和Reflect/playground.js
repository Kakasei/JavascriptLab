// 1、含getter的对象
const parent = {
    // 我们将name设为私有属性，只能通过name这个getter来访问
    _name: "hotaru",
    // 注意，这里使用了this
    get name() {
        return this._name;
    },
};

// 2、我们给parent加一个代理
const proxy = new Proxy(parent, {
    // 代理中设了一个get陷阱，虽然这个陷阱中只是打印一句话
    // 接着仍然去访问源对象的属性，这里用的是看起来很常规很正确的target[prop]语法
    get(target, prop, receiver) {
        console.log("触发了get陷阱");
        return Reflect.get(target, prop, receiver);
    },
});

// 3、接着创建一个child对象，并使其继承自parent的代理proxy
const child = {
    _name: "Kakasei",
};
Object.setPrototypeOf(child, proxy);

// 4、我们访问child.name，意图是调用child的原型身上的name这个getter，从而返回child的_name值Kakasei
// 但实际会是什么结果？
console.log(child.name);
