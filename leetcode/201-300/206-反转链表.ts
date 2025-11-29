// 最经典的反转链表
// 头插法
// TODO反复揣摩

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

// 我们比较喜欢的反转链表的方式是头插法
// 创建一个新链表，将待反转的链表节点一个个地通过头插法插入
function reverseList(head: ListNode | null): ListNode | null {
    // 创建一个新链表，用于存放反转链表
    const dummy = new ListNode(-1, null);
    // 反转链表的头部，初始为null
    let reverseHead = null;

    // 头插法，将原来的链表节点一个个插入到反转链表中
    let cur = head;
    while (cur) {
        dummy.next = cur;
        cur = cur.next;
        dummy.next.next = reverseHead;
        reverseHead = dummy.next;
    }

    return dummy.next;
}
