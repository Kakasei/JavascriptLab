/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

var reorderList = function (head) {
    const dummyHead = new ListNode(-1, head);
    let slow = dummyHead,
        fast = dummyHead;

    // 快慢指针找中点
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
        if (fast.next !== null) fast = fast.next;
    }

    let second = slow.next;
    slow.next = null;
    const dummy2 = new ListNode(-1, null);

    // 头插法反转second
    while (second !== null) {
        const temp = second;
        second = second.next;
        temp.next = dummy2.next;
        dummy2.next = temp;
    }

    // 交错合并
    let first = head;
    second = dummy2.next;

    while (second !== null) {
        const temp = second;
        second = second.next;
        temp.next = first.next;
        first.next = temp;
        first = first.next.next;
    }
};
