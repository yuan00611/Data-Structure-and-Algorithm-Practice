// Given a linked list, remove the n-th node from the end of list 
// and return its head.

// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.

// Given n will always be valid.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function removeNthFromEnd(head, n) {
	let ans = new ListNode();
	ans.next = head;

	let p1 = ans;
	let p2 = ans;
	while (p1.next) {
		p1 = p1.next;
		n--;
		if (n < 0) {
			p2 = p2.next;
		}
	}
	p2.next = p2.next.next;
	return ans.next;
}


let l1_3 = new ListNode(5);
let l1_4 = new ListNode(4, l1_3);
let l1_5 = new ListNode(3, l1_4);
let l1_6 = new ListNode(2, l1_5);
let l1_7 = new ListNode(1, l1_6);
console.log(l1_7);


console.log(removeNthFromEnd(l1_7, 2).next);




