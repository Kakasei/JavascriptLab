// 最经典的反转链表
// 头插法
// TODO反复揣摩

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// 我们比较喜欢的反转链表的方式是头插法
// 创建一个新链表，将待反转的链表节点一个个地通过头插法插入
function reverseList(head: ListNode | null): ListNode | null {
    // reverseHead指向反转链表的头部
    let reverseHead = null;
    // cur指向还未进行反转的链表的头部
    let cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = reverseHead;
        reverseHead = cur;
        cur = next;
    }
    return reverseHead;
}
