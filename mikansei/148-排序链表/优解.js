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

// 合并两有序链表，并尾插到tail后，返回tail
const merge = (head1, head2, tail) => {
    while (head1 && head2) {
        if (head1.val <= head2.val) {
            tail.next = head1;
            tail = tail.next;
            head1 = head1.next;
        } else {
            tail.next = head2;
            tail = tail.next;
            head2 = head2.next;
        }
    }
    if (head1 === null) {
        tail.next = head2;
    } else {
        tail.next = head1;
    }

    while (tail.next) {
        tail = tail.next;
    }
    return tail;
};

// 从链表中拆下指定长度的链表
const split =(head,step)=>{
    const splitedListHead = head
    for(let i=0;i<step-1;i++){
        if(head===null){
            return [splitedListHead,null]
        }
        head=head.next
    }
    return [splitedListHead,head]
}

var sortList = function (head) {
    // 遍历链表，计算链表长度
    let length = 0;
    let scan = head;
    while (scan) {
        length++;
        scan = scan.next;
    }

    const dummy = new ListNode(0, null);
    let tail = dummy;

    // 倍增法归并排序，从原链表上拆下2个长度为step的链表，归并到dummy中
    for (let step = 1; step < length; step *= 2) {
        while (head) {
            let [head1,head]=split(head)
            let[head2,head]=split(head.next)
            let temp = head
            head=head.next


            for (let i = 0; i < step - 1; i++) {
                head = head.next;
            }
            // 拆下第1个长度为step的链表
            let prev = head;
            head = head.next;
            prev.next = null;

            for (let i = 0; i < step - 1; i++) {
                head = head.next;
            }
            // 拆下第2个长度为step的链表
            prev = head;
            head = head.next;
            prev.next = null;

            // 归并这两个链表
            tail = merge(head1, head2, tail);
        }
    }
};
