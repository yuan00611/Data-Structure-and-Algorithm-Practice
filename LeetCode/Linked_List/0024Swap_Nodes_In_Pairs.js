// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself 
// may be changed.

// Given 1->2->3->4, you should return the list as 2->1->4->3.

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

function swapPairs(head) {
	let newHead = new ListNode(0, head);
	let temp = newHead;
	while(temp.next && temp.next.next) {
		let start = temp.next;
		let end = temp.next.next;
		temp.next = end;
		start.next = end.next;
		end.next = start;
		temp = start;
	}
	return newHead.next;
}


let l2_1 = new ListNode(4);
let l2_2 = new ListNode(3, l2_1);
let l2_3 = new ListNode(2, l2_2);
let l2_4 = new ListNode(1, l2_3);
console.log(l2_4);

console.log(swapPairs(l2_4));









