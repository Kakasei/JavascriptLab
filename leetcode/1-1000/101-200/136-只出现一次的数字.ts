// 异或的性质之一，两个相同的数做异或，会相抵消

function singleNumber(nums: number[]): number {
    let answer = 0;

    for (const n of nums) {
        answer ^= n;
    }

    return answer;
}
