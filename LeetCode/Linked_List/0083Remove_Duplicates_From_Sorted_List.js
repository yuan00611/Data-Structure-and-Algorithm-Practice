// Given a sorted linked list, delete all duplicates such that each 
// element appear only once.

// Input: 1->1->2
// Output: 1->2

// Input: 1->1->2->3->3
// Output: 1->2->3

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

function deleteDuplicates(head) {
	let cur = head;
	while (cur && cur.next) {
		if (cur.val === cur.next.val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return head;
}

let l1_1 = new ListNode(2);
let l1_2 = new ListNode(1, l1_1);
let l1_3 = new ListNode(1, l1_2);
console.log(l1_3);

console.log(deleteDuplicates(l1_3));

let l2_1 = new ListNode(3);
let l2_2 = new ListNode(3, l2_1);
let l2_3 = new ListNode(2, l2_2);
let l2_4 = new ListNode(1, l2_3);
let l2_5 = new ListNode(1, l2_4);
console.log(l2_5);

console.log(deleteDuplicates(l2_5));














