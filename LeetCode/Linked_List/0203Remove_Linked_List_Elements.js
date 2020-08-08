// Remove all elements from a linked list of integers that have value val.

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function removeElements(head, val) {
	let res = new ListNode();
	res.next = head;
	let cur = res;

	while (cur.next) {
		if (cur.next.val === val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return res.next;
}

let l1_1 = new ListNode(6);
let l1_2 = new ListNode(5, l1_1);
let l1_3 = new ListNode(4, l1_2);
let l1_4 = new ListNode(3, l1_3);
let l1_5 = new ListNode(6, l1_4);
let l1_6 = new ListNode(2, l1_5);
let l1_7 = new ListNode(1, l1_6);
console.log(l1_7);

console.log(removeElements(l1_7, 6));

