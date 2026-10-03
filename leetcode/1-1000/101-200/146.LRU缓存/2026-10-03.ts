class LRUCache {
    private capacity: number;
    private map = new Map();

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        const value = this.map.get(key);
        if (value !== undefined) {
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        const v = this.map.get(key);
        if (v !== undefined) {
            this.map.delete(key);
            this.map.set(key, value);
            return;
        } else {
            if (this.map.size < this.capacity) {
                this.map.set(key, value);
                return;
            } else {
                this.map.delete(this.map.keys().next().value);
                this.map.set(key, value);
                return;
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
