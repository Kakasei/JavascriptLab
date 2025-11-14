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
 * 
 * 简单的遍历链表，一次通过
 */

function getDecimalValue(head: ListNode | null): number {
  let arr = [];
  let result = 0;

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  for (const item of arr) {
    result <<= 1;

    if (item === 1) {
      result |= 1;
    }
  }

  return result
}
