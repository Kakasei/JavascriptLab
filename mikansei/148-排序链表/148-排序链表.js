// 自己琢磨的写法，可以通过，本质上是插入排序，显然时间复杂度是O(n)
// 关于链表的排序，需要想到归并排序，时间可以做到O(nlogn)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (head === null) {
        return null;
    }
    let front = head;
    let end = head;

    let cur = head.next;
    while (cur) {
        if (cur.val <= front.val) {
            end.next = cur.next;
            cur.next = front;
            front = cur;
            cur = end.next;
        } else if (cur.val >= end.val) {
            end = cur;
            cur = end.next;
        } else {
            let scan = front;
            while (scan.next.val < cur.val) {
                scan = scan.next;
            }
            end.next = cur.next;
            cur.next = scan.next;
            scan.next = cur;
            cur = end.next;
        }
    }

    return front;
};
