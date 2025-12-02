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

function hasCycle(head: ListNode | null): boolean {
    if (head === null) return false;
    let slow = head,
        fast = head;
    while (fast) {
        fast = fast.next?.next;
        if (fast === slow) {
            return true;
        }
        slow = slow.next;
    }
    return false;
}
