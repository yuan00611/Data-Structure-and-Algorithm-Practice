// Given a binary tree and a sum, find all root-to-leaf paths 
// where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var pathSum = function(root, sum) {
	if(!root) return false;
	let ans = [];
	function dfs(node, t_sum, arr) {
		if(t_sum === 0 && !node.left && !node.right) {
			ans.push(arr);
		}
		
		console.log('sum', t_sum);
		console.log('array', arr);
		if(node.left) {
			arr.push(node.left.val);
			dfs(node.left, t_sum - node.val, arr);
		}
		if(node.right) {
			arr.push(node.right.val);
			dfs(node.right, t_sum - node.val, arr);
		}
		arr.pop();
	}
	dfs(root, sum - root.val, [root.val]);
	return ans;
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

console.log(pathSum(t1_1, 22));












