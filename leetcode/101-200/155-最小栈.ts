// TODO反复揣摩

class MinStack {
    // 一开始我们把这道题想简单了，以为只要用一个变量保存一下最小值就行，以至于没能理解题目要我们干啥
    // 如果只是用一个变量保存栈的最小值，当弹出元素正好为最小值时，此时无法知道最新的最小值是多少
    // 核心思路，栈节点定义为[node0,node1]
    // node0是元素val，node1则保存从栈底到该节点之间的最小元素
    private stack: number[][];
    constructor() {
        // 精妙的处理，在栈底放一个哑节点，避免了空栈时的特殊处理
        this.stack = [[0, Infinity]];
    }

    push(val: number): void {
        this.stack.push([val, Math.min(this.getMin(), val)]);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        const arr = this.stack.at(-1) as number[];
        return arr[0];
    }

    getMin(): number {
        const arr = this.stack.at(-1) as number[];
        return arr[1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
