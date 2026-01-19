// 有点不理解为啥这题是中等，基本上读懂题就会做了，pass

function buildArray(target: number[], n: number): string[] {
    const result: string[] = [];
    const l = target.length;
    let p = 0;
    for (let i = 1; i <= n; i++) {
        if (p === l) {
            return result;
        }
        if (target[p] === i) {
            result.push("Push");
            p++;
        } else if (target[p] !== i) {
            result.push("Push");
            result.push("Pop");
        }
    }
    return result;
}
