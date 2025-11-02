/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 1、链表删除节点的模板方法
 * 2、哑节点
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(0, head);
  let cur = head;
  let pre = dummy;

  while (cur) {
    if (cur.val === val) {
      cur = cur.next;
      pre.next = cur;
    } else {
      cur = cur.next;
      pre = pre.next;
    }
  }

  return dummy.next;
};
