//Given a linked list, return the node where the cycle begins. 
//If there is no cycle, return null.

// To represent a cycle in the given linked list, we use an integer pos 
// which represents the position (0-indexed) in the linked list where tail connects to. 
// If pos is -1, then there is no cycle in the linked list.

// Note: Do not modify the linked list.

function detectCycle(head) {
	let p1 = head;
	let p2 = head;
	while (p2) {
		if (!p2.next) {
			return null;
		}
		p1 = p1.next;
		p2 = p2.next.next;
		if (p1 === p2) {
			p1 = head;
			while (true) {
				if (p1 === p2) {
					return p1;
				}
				p1 = p1.next;
				p2 = p2.next;
				
			}
		} 
	} 
	return null;	
}


