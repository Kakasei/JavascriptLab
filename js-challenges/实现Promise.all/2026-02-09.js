Promise._all = function (promises) {
    return new Promise((resolve, reject) => {
        // 别忘了处理边界情况1，输入参数错误
        if (Array.isArray(promises) === false) {
            throw new TypeError("必须传入数组");
        }
        const n = promises.length;
        // 边界情况2，空数组
        if (n === 0) {
            resolve([]);
            return;
        }

        let count = 0;
        const result = [];

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    count++;
                    result[index] = value;
                    if (count === n) {
                        resolve(result);
                        return;
                    }
                })
                .catch((reason) => {
                    reject(reason);
                    return;
                });
        });
    });
};
