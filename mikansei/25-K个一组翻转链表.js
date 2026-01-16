/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const dummy = new ListNode(-1, head);
    let front = dummy;

    while (true) {
        // 扫描一次，检查是否还有k个结点
        let scan = front;
        let flag = false;
        for (let i = 0; i < k; i++) {
            if (scan.next) {
                scan = scan.next;
            } else {
                flag = true;
                break;
            }
        }
        // 若没有k个结点了，则跳出
        if (flag) {
            break;
        } // 满足翻转条件，开始头插法翻转
        else {
            let pseudoHead = scan.next;
            let temp = front.next;
            // 提前存好下一次翻转要用的front结点
            const nextFront = front.next;
            for (let i = 0; i < k; i++) {
                // 准备好当前参与头插的结点和下次头插的结点
                let cur = temp;
                temp = cur.next;

                // 头插
                front.next = cur;
                cur.next = pseudoHead;
                pseudoHead = cur;
            }
            front = nextFront;
        }
    }

    return dummy.next;
};
