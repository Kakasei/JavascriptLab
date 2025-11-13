// 使用对顶堆动态维护中位数
// 学习datastructures-js库的优先队列的用法

import {
  MinPriorityQueue,
  MaxPriorityQueue,
} from "@datastructures-js/priority-queue";

class MedianFinder {
  private maxPriorityQueue = new MaxPriorityQueue<number>();
  private minPriorityQueue = new MinPriorityQueue<number>();

  constructor() {}

  addNum(num: number): void {
    if (this.maxPriorityQueue.isEmpty()) {
      this.maxPriorityQueue.enqueue(num);
    } else if (num <= (this.maxPriorityQueue.front() as number)) {
      this.maxPriorityQueue.enqueue(num);
    } else if (num >= (this.minPriorityQueue.front() ?? -Infinity)) {
      this.minPriorityQueue.enqueue(num);
    } else {
      this.maxPriorityQueue.enqueue(num);
    }

    // 维持左右队列元素数量平衡，确保左右元素相等或左边只比右边多一个
    if (this.maxPriorityQueue.size() - this.minPriorityQueue.size() === 2) {
      this.minPriorityQueue.enqueue(this.maxPriorityQueue.dequeue() as number);
    } else if (
      this.minPriorityQueue.size() - this.maxPriorityQueue.size() ===
      1
    ) {
      this.maxPriorityQueue.enqueue(this.minPriorityQueue.dequeue() as number);
    }
  }

  findMedian(): number {
    if (this.maxPriorityQueue.size() - this.minPriorityQueue.size() === 1) {
      return this.maxPriorityQueue.front() as number;
    } else {
      return (
        ((this.maxPriorityQueue.front() as number) +
          (this.minPriorityQueue.front() as number)) /
        2
      );
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
