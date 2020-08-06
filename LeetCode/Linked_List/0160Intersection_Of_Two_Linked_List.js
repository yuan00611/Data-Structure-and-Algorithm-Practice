// Write a program to find the node at which the intersection 
// of two singly linked lists begins.

// Notes:

// *If the two linked lists have no intersection at all, return null.
// *The linked lists must retain their original structure 
//  after the function returns.
// *You may assume there are no cycles anywhere in the entire linked structure.
// *Each value on each linked list is in the range [1, 10^9].
// *Your code should preferably run in O(n) time and use only O(1) memory.

//雙指針
//https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/tu-jie-xiang-jiao-lian-biao-by-user7208t/
function getIntersectionNode(headA, headB) {
	let p1 = headA;
	let p2 = headB;
	while (p1 || p2) {
		if(p1 === p2) return p1;
		p1 = (p1 === null ? headB : p1.next);
		p2 = (p2 === null ? headA : p2.next);
	}
	return null;
}