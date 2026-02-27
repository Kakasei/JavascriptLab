Promise._allSettled = (promises) => {
    return new Promise((resolve, reject) => {
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
                    result[index] = { status: "fulfilled", value };
                })
                .catch((reason) => {
                    result[index] = { status: "rejected", reason };
                })
                .finally(() => {
                    count++;
                    if (count === n) {
                        resolve(result);
                        return;
                    }
                });
        });
    });
};
