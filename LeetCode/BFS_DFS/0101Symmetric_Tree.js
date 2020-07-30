// Given a binary tree, check whether it is a mirror of itself 
// (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isSymmetric = function(root) {
	const check = (left, right) => {
		if (!left && !right) {
			return true;
		}
		if (left && right) {
			return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
		} 
		return false;
	}
	return !root || check(root.left, root.right);
}


// function isSymmetric(root) {
// 	if (!root.left.val && !root.right.val) {
// 		return true;
// 	}
// 	if (!root.left.val || !root.right.val) {
// 		return false;
// 	}
// 	if (root.left.val === root.right.val) {
// 		if(root.left.left.val === root.right.right.val && root.left.right.val === root.right.left.val){
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// 	return isSymmetric(root.left) && isSymmetric(root.right);
// }

















