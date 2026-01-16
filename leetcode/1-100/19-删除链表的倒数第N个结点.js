// TODO快慢指针，看了一眼提示才写出来，hot100，反复揣摩

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let cur = head;
    let delay = head;

    for (let i = 0; i < n; i++) {
        cur = cur.next;
    }

    // 若要删的刚好是头结点
    if (cur === null) {
        return head.next;
    }

    while (cur.next) {
        cur = cur.next;
        delay = delay.next;
    }

    let temp = delay.next;
    delay.next = temp.next;
    temp.next = null;

    return head;
};
