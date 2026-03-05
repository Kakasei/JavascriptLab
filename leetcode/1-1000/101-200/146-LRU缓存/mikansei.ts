class LinklistNode {
    key: number;
    value: number;
    next: LinklistNode | null;
    prev: LinklistNode | null;
    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    #capacity: number;
    #dummy: LinklistNode;
    #map: Map<number, LinklistNode>;
    constructor(capacity: number) {
        this.#capacity = capacity;
        this.#map = new Map<number, LinklistNode>();
        this.#dummy = new LinklistNode(-1, -1);
    }

    get(key: number): number {}

    put(key: number, value: number): void {
        if (this.#map.has(key)) {
            const node =this.#map.get(key)
            node!.prev!.next=node!.next
            node!.next!.prev=node!.prev
            this.#dummy.next=node!
            node!.prev=this.#dummy

        } else {
            const node = new LinklistNode(key, value);
            this.#map.set(key, node);

            node.next=this.#dummy.next
            this.#dummy.next=node
            node.prev=this.#dummy
            node.next!.prev=node

            // 若超出了容量，则删除最旧的缓存
            if(this.#map.size>this.#capacity){
                const tail = this.#dummy.prev

                tail!.prev!.next=this.#dummy
                tail!.next=null
                this.#dummy.prev=tail!.prev
                tail!.prev=null

                this.#map.delete(node.key)
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
