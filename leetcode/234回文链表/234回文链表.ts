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
//暴力法

function isPalindrome(head: ListNode | null): boolean {
  const arr: number[] = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let n = arr.length;
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    if (arr[i] !== arr[n - 1 - i]) {
      return false;
    }
  }
  return true;
}
