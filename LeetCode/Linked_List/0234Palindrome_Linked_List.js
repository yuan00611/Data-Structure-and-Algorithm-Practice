// Given a singly linked list, determine if it is a palindrome.

// Input: 1->2
// Output: false

// Input: 1->2->2->1
// Output: true

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function isPalindrome(head) {
	if (!head) {
		return head;
	}
	let newList = new ListNode(head.val);
	let tail = head;
	while (tail.next) {
		let node = new ListNode(tail.next.val, null);
		node.next = newList;
		newList = node;
		tail = tail.next;
	}
	while (newList.next) {
		if (newList.val !== head.val) {
			return false;
		} else {
			newList = newList.next;
			head = head.next;
		}
	}
	return true;
}

let l1_1 = new ListNode(1);
let l1_2 = new ListNode(2, l1_1);
let l1_3 = new ListNode(2, l1_2);
let l1_4 = new ListNode(1, l1_3);
console.log(l1_4);

let l2_1 = new ListNode(2);
let l2_2 = new ListNode(1, l2_1);
console.log(l2_2);

console.log(isPalindrome(l1_4));
console.log(isPalindrome(l2_2));


//三、快慢指针 + 剪枝+ 翻转
var isPalindrome = function(head) {
    if(head === null) return true;
    let nextHalf = getNextHalf(head);
    let curHalf = reserve(nextHalf);
    while(head && curHalf) {
        if(head.val !== curHalf.val) return false;
        head = head.next;
        curHalf = curHalf.next;
    }
    return true;
};
const reserve = function(head) {
    let prev = null;
    let cur = head;
    while(cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}
const getNextHalf = function(head) { // 获取链表的头半部分,返回链表的后半部分
    let slow = head;
    let fast = head;
    while(fast.next!== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let temp = slow.next;
    slow.next = null; // 切掉链表的后半部分
    return temp;
}

作者：fanzhanxiang
链接：https://leetcode-cn.com/problems/palindrome-linked-list/solution/hui-wen-lian-biao-by-fanzhanxiang/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


