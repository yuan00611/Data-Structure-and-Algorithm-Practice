//Given a binary tree, determine if it is a valid binary search tree (BST).

//Assume a BST is defined as follows:
//The left subtree of a node contains only nodes with keys less than the node's key.
//The right subtree of a node contains only nodes with keys greater than the node's key.
//Both the left and right subtrees must also be binary search trees.

 //   2
 //  / \
 // 1   3
//Input: [2,1,3]
//Output: true

  //   5
  //  / \
  // 1   4
  //    / \
  //   3   6
// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

var isValidBST = function(root) {
	const check = (root, min, max) => {
		if (!root) {
			return true;
		}
		if (min !== null && root.val <= min.val) {
			return false;
		}
		if (max !== null && root.val >= max.val) {
			return false;
		}
		return check(root.left, min, root) && check(root.right, root, max);
	}
	return check(root, null, null);
}







