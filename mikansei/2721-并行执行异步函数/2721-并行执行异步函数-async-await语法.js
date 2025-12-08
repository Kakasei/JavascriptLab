/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([]);
        }

        let resolvedCount = 0;
        const arr = new Array(functions.length);

        functions.forEach(async (fn, index) => {
            try {
                const value = await fn();
                arr[index] = value;
                resolvedCount++;
                if (resolvedCount === functions.length) {
                    resolve(arr);
                }
            } catch (error) {
                reject(error);
            }
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
