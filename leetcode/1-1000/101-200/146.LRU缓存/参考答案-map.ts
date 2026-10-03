// js的Map是可以记住键值对的插入顺序的！所以Map可以直接替代hash表+双向链表

class LRUCache {
    private capacity: number;
    private map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map<number, number>();
    }

    get(key: number): number {
        const value = this.map.get(key);
        if (value === undefined) {
            return -1;
        }

        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    put(key: number, value: number): void {
        // 若键值对已经存在，则删了再重新set，这样会将其放到map的末尾，即刷新了缓存
        if (this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, value);
        } else {
            this.map.set(key, value);

            // 若超出了缓存容量，则利用map迭代器，删掉map最开头的键值对，即最旧的缓存
            if (this.map.size > this.capacity) {
                const iterator = this.map.keys();
                this.map.delete(iterator.next().value as number);
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
