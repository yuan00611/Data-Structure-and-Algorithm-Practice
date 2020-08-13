// Given a sorted linked list, delete all nodes that have duplicate numbers, 
// leaving only distinct numbers from the original list.

// Return the linked list sorted as well.

// Input: 1->2->3->3->4->4->5
// Output: 1->2->5

// Input: 1->1->1->2->3
// Output: 2->3

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

// function deleteDuplicates(head) {
// 	if(!head) return head;
// 	let newHead = new ListNode(-1, head);
// 	let p1 = head;
// 	let p2 = head.next;
// 	let count = 0;
// 	while (p1 && p2) {
// 		if (p2.val !== p1.val && count > 0) {
// 			p1.val = p2.val;
// 			p1.next = p2.next;
// 			count = 0;
// 		} else if(p2.val !== p1.val){
// 			p1 = p1.next;
// 		} else {
// 			count++;
// 		}
// 		p2 = p2.next;
// 	}
// 	if (count > 0) {
// 		p1 = p2;
// 	}
// 	return newHead.next;
// }

var deleteDuplicates = function(head) {
    let fakeHead = new ListNode(0)
    fakeHead.next = head;
    let prev = fakeHead, curr = head;
    while (curr) {
        while (curr.next && curr.val == curr.next.val)
            curr = curr.next
        if (prev.next == curr)
            prev = curr
        else
            prev.next = curr.next
        curr = curr.next
    }
    return fakeHead.next
};

let l1_1 = new ListNode(5);
let l1_2 = new ListNode(4, l1_1);
let l1_3 = new ListNode(4, l1_2);
let l1_4 = new ListNode(3, l1_3);
let l1_5 = new ListNode(3, l1_4);
let l1_6 = new ListNode(2, l1_5);
let l1_7 = new ListNode(1, l1_6);
console.log(l1_7);

console.log(deleteDuplicates(l1_7));

let l2_1 = new ListNode(3);
let l2_2 = new ListNode(2, l2_1);
let l2_3 = new ListNode(1, l2_2);
let l2_4 = new ListNode(1, l2_3);
let l2_5 = new ListNode(1, l2_4);
console.log(l2_5);

console.log(deleteDuplicates(l2_5));



