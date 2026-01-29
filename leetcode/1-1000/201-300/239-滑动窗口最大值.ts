function maxSlidingWindow(nums: number[], k: number): number[] {
    const n = nums.length;
    const queue: number[] = [];
    const ans = [];

    for (let i = 1; i < k - 1; i++) {
        while (nums[i] >= nums[queue.at(-1)!]) {
            queue.pop();
        }
        queue.push(i);
    }

    for (let i = 0; i < n; i++) {
        // 入，维护单调队列性质
        while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);

        // 出
        if (i - queue[0] >= k) {
            queue.shift();
        }

        // 更新
        if (i >= k - 1) {
            ans.push(nums[queue[0]]);
        }
    }

    return ans;
}
