//Merge two sorted linked lists and return it as a new sorted list. 
//The new list should be made by splicing together the nodes of the first two lists.

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

//Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
    var mergedHead = { val : -1, next : null },
        crt = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;
    
    return mergedHead.next;
};