// TODO网友面试真题，需要掌握这种简洁的写法

function isValid(s: string): boolean {
    const stack: string[] = [];

    const map: Map<string, string> = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);

    for (const c of s) {
        // 若是右括号，则检查与栈顶元素是否匹配
        if (map.has(c)) {
            if (stack.at(-1) === map.get(c)) {
                stack.pop();
            } else {
                return false;
            }
        } // 若是左括号，则直接入栈
        else {
            stack.push(c);
        }
    }
    return stack.length === 0 ? true : false;
}
