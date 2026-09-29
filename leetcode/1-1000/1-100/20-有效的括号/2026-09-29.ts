function isValid(s: string): boolean {
    const arr = [];

    function check(c1: string, c2: string) {
        if (c1 === "(") {
            return c2 === ")";
        }
        if (c1 === "[") {
            return c2 === "]";
        }
        if (c1 === "{") {
            return c2 === "}";
        }
    }

    for (const c of s) {
        if (c === "(" || c === "[" || c === "{") {
            arr.push(c);
        } else {
            if (check(arr[arr.length - 1], c) === true) {
                arr.pop();
            } else {
                return false;
            }
        }
    }
    return arr.length === 0;
}
