// 简单题，按题目字面意思理解编码即可，一次通过
function isOneBitCharacter(bits: number[]): boolean {
    let flag = false;
    const l = bits.length;
    for (let i = 0; i < l; i++) {
        if (bits[i]) {
            i++;
            if (i !== l - 1) {
                continue;
            } else {
                return false;
            }
        }
    }
    return true;
}
