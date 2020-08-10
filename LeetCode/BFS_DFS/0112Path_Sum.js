// Given a binary tree and a sum, determine if the tree has 
// a root-to-leaf path such that adding up all the values along the path 
// equals the given sum.

// Note: A leaf is a node with no children.

// Example:
// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// var hasPathSum = function(root, sum) {
// 	if(!root) return false;
// 	function dfs(node, t_sum){
// 		if (!node) {
// 			if (t_sum === sum) {
// 				return true;
// 			} else {
// 				return false;
// 			}
// 		} else {
// 			t_sum += node.val;
// 		}
// 		console.log(t_sum);
// 		return dfs(node.left, t_sum) || dfs(node.right, t_sum);
// 	}	
// 	return dfs(root, 0);
// }

function hasPathSum(root, sum) {
	if(!root) return false;

	if(!root.left && !root.right) return (sum - root.val) === 0;

	return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}

let t1_7 = new TreeNode(7);
let t1_2_2 = new TreeNode(2);

let t1_11 = new TreeNode(11, t1_7, t1_2_2);

let t1_1_1 = new TreeNode(1);
let t1_13 = new TreeNode(13);
let t1_4 = new TreeNode(4, null, t1_1_1);

let t1_2 = new TreeNode(4, t1_11, null);
let t1_3 = new TreeNode(8, t1_13, t1_4);
let t1_1 = new TreeNode(5, t1_2, t1_3);
console.log(t1_1);

let t2_2 = new TreeNode(2);
let t2_1 = new TreeNode(1, t2_2);

console.log(t2_1);

console.log(hasPathSum(t1_1, 22));

console.log(hasPathSum(t2_1, 1));











