//Given a linked list, determine if it has a cycle in it.

//To represent a cycle in the given linked list, 
//we use an integer pos which represents the position (0-indexed) 
//in the linked list where tail connects to. 
//If pos is -1, then there is no cycle in the linked list.

//Input: head = [3,2,0,-4], pos = 1
//Output: true
//Explanation: There is a cycle in the linked list, 
//where tail connects to the second node.

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, 
// where tail connects to the first node.

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Hash Table

function ListNode(val) {
	this.val = val;
	this.next = null;
}

function hasCycle(head) {
	if (!head) {
		return false;
	}
	let dict = new Set();
	while (head.next) {
		if ( dict.has(head.next) ) {
			return true;
		}else {
			dict.add(head.next);
			head = head.next;
		}
	}
	return false;
}










