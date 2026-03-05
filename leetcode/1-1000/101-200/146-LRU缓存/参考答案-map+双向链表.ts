// 这道题质量挺高的，熟悉了很多知识点：
// 类，js的井号#私有元素的概念，ts的private
// 双向链表，双向链表哑节点以及初始化技巧
// map的value存指针指向链表，既能O(1)时间查找，又能维护一个顺序

class LinklistNode {
    // 实际上手写了之后发现，node还是必须要有key这个字段的，在超出缓存容量时需要删掉最旧的缓存，这个删的过程需要用到key
    key: number;
    value: number;
    prev: LinklistNode | null = null;
    next: LinklistNode | null = null;
    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    private capacity: number;

    // dummy双向链表哑节点，推荐初始化时将哑节点next prev都指向dummy本身，规避了边界情况的判断
    // dummy.next是链表头部，是最新的缓存。同理，dummy.prev是链表尾部，是最旧的缓存
    private dummy: LinklistNode;
    private map: Map<number, LinklistNode>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.dummy = new LinklistNode(-1, -1);
        this.dummy.next = this.dummy;
        this.dummy.prev = this.dummy;
        this.map = new Map<number, LinklistNode>();
    }

    get(key: number): number {
        // 意图查找的值在缓存中，可以直接拿到，并且刷新该缓存
        if (this.map.has(key)) {
            const node = this.map.get(key) as LinklistNode;

            this.moveToHead(node);

            return node.value;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            // 替换新的value
            const node = this.map.get(key) as LinklistNode;
            node.value = value;

            this.moveToHead(node);
        } else {
            const node = new LinklistNode(key, value);
            this.map.set(key, node);

            // 插入新的node到链表头部
            node.next = this.dummy.next;
            this.dummy.next = node;
            node.prev = this.dummy;
            node.next!.prev = node;

            // 若超出了缓存容量，则要删掉链表尾节点，即删除最旧的缓存
            if (this.map.size > this.capacity) {
                const tail = this.dummy.prev;
                tail!.prev!.next = this.dummy;
                tail!.next = null;
                this.dummy.prev = tail!.prev;
                tail!.prev = null;

                this.map.delete(tail!.key);
            }
        }
    }

    // 将给定节点抽取出来，放到链表头部，即刷新缓存
    // 这里选择使用ts中的private语法来约束私有性
    // 因为我们现在是在刷题，private这种软约束不容易影响速度，如果是实际开发中写业务之类的，感觉还是用#更好
    private moveToHead(node: LinklistNode) {
        // 抽取出node
        node.prev!.next = node.next;
        node.next!.prev = node.prev;

        // 放到链表头部
        node.next = this.dummy.next;
        this.dummy.next = node;
        node.prev = this.dummy;
        node.next!.prev = node;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
