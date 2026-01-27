class TrieNode {
    children: (TrieNode | null)[];
    isEnd: boolean;
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let cur = this.root;
        for (const c of word) {
            const index = c.charCodeAt(0) - "a".charCodeAt(0);
            if (cur.children[index] === null) {
                cur.children[index] = new TrieNode();
            }
            cur = cur.children[index];
        }
        cur.isEnd = true;
    }

    search(word: string): boolean {
        let cur = this.root;
        for (const c of word) {
            const index = c.charCodeAt(0) - "a".charCodeAt(0);
            if (cur.children[index] === null) {
                return false;
            }
            cur = cur.children[index];
        }
        return cur.isEnd ? true : false;
    }

    startsWith(prefix: string): boolean {
        let cur = this.root;
        for (const c of prefix) {
            const index = c.charCodeAt(0) - "a".charCodeAt(0);
            if (cur.children[index] === null) {
                return false;
            }
            cur = cur.children[index];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
