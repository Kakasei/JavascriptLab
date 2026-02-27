const _get = (obj, path, defaultValue = "undefined") => {
    let paths = [];
    if (Array.isArray(path)) {
        paths = path;
    } else {
        paths = path.replace(/\[/, ".").replace(/\]/, "").split(".");
    }

    let result = obj;
    for (const key of paths) {
        if (result === undefined || result === null) {
            return defaultValue;
        }
        result = result[key];
    }
    return result === undefined ? defaultValue : result;
};

// 测试
const object = { a: [{ b: { c: 3 } }] };

console.log(_get(object, "a[0].b.c"));

console.log(_get(object, ["a", "0", "b", "c"]));

console.log(_get(object, "a.b.c", "default"));
