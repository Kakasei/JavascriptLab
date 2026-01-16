// 压根想不到怎么做，看了题解
// TODO快手日常实习真题，hot100，需要完全掌握

function merge(intervals: number[][]): number[][] {
    intervals.sort((a: number[], b: number[]): number => {
        return a[0] - b[0];
    });

    const result: number[][] = [];
    result.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        const lastResult = result.length - 1;
        // 需要合并
        if (intervals[i][0] <= result[lastResult][1]) {
            result[lastResult][1] = Math.max(
                result[lastResult][1],
                intervals[i][1],
            );
        } else {
            result.push(intervals[i]);
        }
    }

    return result;
}
