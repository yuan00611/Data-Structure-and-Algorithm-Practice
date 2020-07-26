//Given a Binary Search Tree and a target number, 
//return true if there exist two elements in the BST such that 
//their sum is equal to the given target.

// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 9

// Output: True


let collection = new Set();
function findTarget(root, k) {
	if (!root) {
		return false;
	} 
	if (collection.has(k - root.value)) {
		return true;
	} 
	collection.add(k - root.value);
	
	if (root.left) {
		findTarget(root.left, k);
	} else {
		return false;
	}
	if (root.right) {
		findTarget(root.right, k);
	} else {
		return false;
	}

}




