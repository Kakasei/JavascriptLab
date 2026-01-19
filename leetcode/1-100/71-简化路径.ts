// 理解题意就很简单

function simplifyPath(path: string): string {
    const result: string[] = [];

    for (const item of path.split("/")) {
        if (item === "..") {
            result.pop();
        } else if (item === "" || item === ".") {
            continue;
        } else {
            result.push(item);
        }
    }

    return `/${result.join("/")}`;
}
