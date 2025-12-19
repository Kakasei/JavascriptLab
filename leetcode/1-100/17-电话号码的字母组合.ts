// TODO回溯的最基础题，hot100，需要完全掌握
// 这似乎是排列问题，排列问题的递归函数与组合问题的递归函数的含义似乎有点不同
// 这个排列问题的递归函数的功能是枚举第i个元素到末尾第n个元素的所有排列情况

function letterCombinations(digits: string): string[] {
    const MAP = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz",
    ];
    const result: string[] = [];
    let current: string[] = [];

    const trackback = (i: number) => {
        const letters = MAP[Number(digits[i])];
        for (const c of letters) {
            current.push(c);
            if (i === digits.length - 1) {
                result.push(current.join(""));
            } else {
                trackback(i + 1);
            }
            current.pop();
        }
    };
    trackback(0);

    return result;
}
