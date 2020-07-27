//Reverse a singly linked list.

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// A linked list can be reversed either iteratively or recursively. 
// Could you implement both?

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function reverseList(head) {
	if (!head) {
		return head;
	}
	let newList = new ListNode(head.val, null);
	let tail = head;
	while (tail.next !== null){
		let node = new ListNode(tail.next.val, null);
		node.next = newList;
		newList = node;
		tail = tail.next;
	}
	return newList;
}

//https://leetcode-cn.com/problems/reverse-linked-list/solution/js-san-chong-jie-fa-di-gui-wei-di-gui-die-dai-by-n/
var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while (curr) {
        let tmp = curr.next;    // 1. 临时存储当前指针后续内容
        curr.next = prev;       // 2. 反转链表
        prev = curr;            // 3. 接收反转结果
        curr = tmp;             // 4. 接回临时存储的后续内容
    }
    return prev;
};


let l1_1 = new ListNode(5);
let l1_2 = new ListNode(4, l1_1);
let l1_3 = new ListNode(3, l1_2);
let l1_4 = new ListNode(2, l1_3);
let l1_5 = new ListNode(1, l1_4);
console.log(l1_5);

console.log(reverseList(l1_5));