// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path 
// from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// Ans: 3

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function maxDepth(root) {
	if (!root) {
		return 1;
	} else {
		let left = maxDepth(root.left);
		let right = maxDepth(root.right);
		return Math.max(left, right) + 1;
	}
}

let t1_2 = new TreeNode(2);
let t1_3 = new TreeNode(3);
let t1_1 = new TreeNode(1, t1_2, t1_3);
console.log(t1_1);





