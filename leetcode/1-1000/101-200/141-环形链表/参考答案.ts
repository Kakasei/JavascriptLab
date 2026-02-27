class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function hasCycle(head: ListNode | null): boolean {
    // 处理空链
    if (head === null) {
        return false;
    }
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next!;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}
