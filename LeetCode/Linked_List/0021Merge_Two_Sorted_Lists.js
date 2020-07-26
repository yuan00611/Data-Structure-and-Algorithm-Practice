//Merge two sorted linked lists and return it as a new sorted list. 
//The new list should be made by splicing together the nodes of the first two lists.

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}


function mergeTwoLists(l1, l2) {
	const l_head = new ListNode(-1);
	let prev = l_head;

	while (l1 && l2) {
		if (l1.val >= l2.val) {
			prev.next = l2;
			l2 = l2.next;
		} else {
			prev.next = l1;
			l1 = l1.next;
		}
		prev = prev.next;
	}
	prev.next = l1 || l2;
	return l_head.next;
}

let l1_1 = new ListNode(4);
let l1_2 = new ListNode(3, l1_1);
let l1_3 = new ListNode(1, l1_2);
console.log(l1_3);

let l2_1 = new ListNode(4);
let l2_2 = new ListNode(2, l2_1);
let l2_3 = new ListNode(1, l2_2);
console.log(l2_3);


console.log(mergeTwoLists(l1_3, l2_3));
