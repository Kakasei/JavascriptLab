// 看了题解
// 相向双指针基础题
function twoSum(numbers: number[], target: number): number[] {
    let l = 0,
        r = numbers.length - 1;
    while (l < r) {
        if (numbers[l] + numbers[r] > target) {
            r--;
        } else if (numbers[l] + numbers[r] < target) {
            l++;
        } else {
            break;
        }
    }
    return [l + 1, r + 1];
}
