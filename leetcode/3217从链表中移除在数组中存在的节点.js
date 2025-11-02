/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 1、链表删除节点的基础题
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    const set = new Set(nums)

    const dummy = new ListNode(0, head)
    let cur = head
    let pre = dummy
    while (cur) {
        if (set.has(cur.val)) {
            cur = cur.next
            pre.next = cur
        } else {
            cur = cur.next
            pre = pre.next
        }
    }

    return dummy.next
};