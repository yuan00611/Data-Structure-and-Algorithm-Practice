// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from 
// the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

//https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/solution/li-jie-zhe-dao-ti-de-jie-shu-tiao-jian-by-user7208/

function minDepth(root) {
	if (!root) {
		return 0;
	} 
	if (root.left === null && root.right === null) {
		return 1;
	}
	let m1 = minDepth(root.left);
	let m2 = minDepth(root.right);
	if (root.left === null || root.right === null) {
		return m1 + m2 + 1;
	}
	return Math.min(m1, m2) + 1;
}


function minDepth(root) {
	if (!root) {
		return 0;
	} 
	let m1 = minDepth(root.left);
	let m2 = minDepth(root.right);
	return root.left === null || root.right === null ? m1 + m2 + 1 : Math.min(m1, m2) + 1;
}




