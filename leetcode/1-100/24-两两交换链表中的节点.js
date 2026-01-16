// 更换链表结点顺序类型的题目，虽然有点繁琐但是本质上不难
// TODO反复揣摩，hot100

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
var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    const dummy = new ListNode(-1, head);
    let node0 = dummy;

    // 相当于以node0为操作的中心，若node0后存在两个结点便执行两两交换
    while (node0.next && node0.next.next) {
        const node1 = node0.next;
        const node2 = node0.next.next;

        node1.next = node2.next;
        node2.next = node1;
        node0.next = node2;

        node0 = node1;
    }

    return dummy.next;
};
