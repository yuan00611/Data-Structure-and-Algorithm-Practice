// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical 
// and the nodes have the same value.

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function isSameTree(p, q) {
	if (!p && !q) {
		return true;
	}
	if (!p || !q || p.val !== q.val) {
		return false;
	} 
	
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}


let t1_2 = new TreeNode(2);
let t1_3 = new TreeNode(3);
let t1_1 = new TreeNode(1, t1_2, t1_3);
console.log(t1_1);

let t2_2 = new TreeNode(2);
let t2_3 = new TreeNode(3);
let t2_1 = new TreeNode(1, t2_2, t2_3);
console.log(t2_1);

console.log(isSameTree(t1_1, t2_1));

let t3_2 = new TreeNode(2);
let t3_3 = new TreeNode(null);
let t3_1 = new TreeNode(1, t3_2, t3_3);
console.log(t3_1);

let t4_2 = new TreeNode(null);
let t4_3 = new TreeNode(2);
let t4_1 = new TreeNode(1, t4_2, t4_3);
console.log(t4_1);

console.log(isSameTree(t3_1, t4_1));


