Promise._all = function (promises) {
    return new Promise((resolve, reject) => {
        // 1、错误处理
        if (Array.isArray(promises) === false) {
            throw new TypeError("必须传入数组");
        }

        const result = [];
        let count = 0;
        const length = promises.length;

        // 2、边界情况，空数组直接兑现就行了
        if (length === 0) {
            resolve([]);
            return;
        }

        // 3、并发启动所有Promise（速度极快地逐个启动，近似并发）
        promises.forEach((promise, index) => {
            // 小技巧，使用Promise.resolve包一层，以兼容非promise值
            Promise.resolve(promise)
                .then((value) => {
                    result[index] = value;
                    count++;
                    if (count === length) {
                        resolve(result);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
};

// 测试
const p1 = Promise.resolve(1);
const p2 = 2;
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(3);
    }, 1000);
});

Promise._all([p1, p2, p3]).then((result) => console.log(result));

const p4 = Promise.reject(4);

Promise._all([p1, p2, p4]).catch((error) => console.log(error));
