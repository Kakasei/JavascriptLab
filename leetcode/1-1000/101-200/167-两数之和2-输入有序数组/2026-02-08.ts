function twoSum(numbers: number[], target: number): number[] {
    const n = numbers.length;

    let left = 0,
        right = n - 1;
    while (true) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            break;
        }
    }
    return [left + 1, right + 1];
}
