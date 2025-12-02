/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (head.next === null) return head;
    let prev = head,
        cur = head.next;
    while (cur) {
        const newNode = new ListNode(gcd(cur.val, prev.val), cur);
        prev.next = newNode;
        prev = cur;
        cur = cur.next;
    }
    return head;
}

const gcd = (a: number, b: number): number => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};
