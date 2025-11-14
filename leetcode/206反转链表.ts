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

// 头插法

function reverseList(head: ListNode | null): ListNode | null {
    // pre指向新链表的头节点
    let pre = null
    // 新链表的哑节点
    const dummy = new ListNode(0,pre)

    // cur指向旧链表的头节点
    let cur  = head

    while(cur){
        dummy.next = cur
        cur = cur.next
        dummy.next.next = pre
        pre = dummy.next
    }

    return dummy.next
}
