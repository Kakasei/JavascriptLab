// TODO忘记

Promise._all = function (promises) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(promises) === false) {
            throw new TypeError("类型错误");
        }

        const n = promises.length;
        if (n === 0) {
            resolve([]);
            return;
        }

        const result = [];
        let count = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    result[index] = value;
                    count++;
                    if (count === n) {
                        resolve(result);
                        return;
                    }
                })
                .catch((error) => {
                    reject(error);
                    return;
                });
        });
    });
};
