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

function maxDepth(root) {
	if (!root) {
		return 0;
	} else {
		let left = maxDepth(root.left);
		let right = maxDepth(root.right);
		return Math.max(left, right) + 1;
	}
}




