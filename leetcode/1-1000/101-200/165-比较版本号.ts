// 思路是很简单的，根本算不上中等题，不过学到了字符串转数字的细节

function compareVersion(version1: string, version2: string): number {
    const ver1 = version1.split(".");
    const ver2 = version2.split(".");

    const n = Math.max(ver1.length, ver2.length);

    for (let i = 0; i < n; i++) {
        const v1 = ver1[i] === undefined ? 0 : Number(ver1[i]);
        const v2 = ver2[i] === undefined ? 0 : Number(ver2[i]);
        if (v1 === v2) {
            continue;
        }
        return v1 > v2 ? 1 : -1;
    }
    return 0;
}
