// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a 
// single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, 
// except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
	let ans = new ListNode(-1);
	let cur = ans;
	let carry = 0;
	while (l1 || l2) {
		let x = (l1) ? l1.val : 0;
        let y = (l2) ? l2.val : 0;
		let sum = x + y + carry;
		carry = Math.floor(sum / 10);
		let node = new ListNode(sum % 10);
		cur.next = node;
		cur = cur.next;
		if(l1) l1 = l1.next;
		if(l2) l2 = l2.next;
	}
	if(carry > 0) {
		cur.next = new ListNode(carry);
	}	
	return ans.next;
}

var addTwoNumbers2 = function(l1, l2) {
    let node = new ListNode('head');
    let temp = node;//哑结点
    let add = 0;//是否进一
    let sum = 0;//新链表当前未取余的值 = 链表1值 + 链表2值 + add;

    //遍历，直到最长的都为空
    while(l1 || l2){
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
        temp.next = new ListNode(sum % 10);//取余则为新链表的值
        temp = temp.next;
        add = sum >= 10 ? 1 : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    add && (temp.next = new ListNode(add));
    return node.next;
};


let l1_1 = new ListNode(3);
let l1_2 = new ListNode(4, l1_1);
let l1_3 = new ListNode(2, l1_2);
console.log(l1_3);

let l2_1 = new ListNode(4);
let l2_2 = new ListNode(6, l2_1);
let l2_3 = new ListNode(5, l2_2);
console.log(l2_3);

console.log(addTwoNumbers(l1_3, l2_3));




