/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve([]);
        }

        const arr = new Array(functions.length);
        let resolvedCount = 0;

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then((value) => {
                    arr[i] = value;
                    resolvedCount++;
                    if (resolvedCount === functions.length) {
                        resolve(arr);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        }


    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */



        functions.forEach((fn, index) => {
            fn()
                .then((value) => {
                    arr[index] = value;
                    resolvedCount++;
                    if (resolvedCount === functions.length) {
                        resolve(arr);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });