// Given a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// var rightSideView = function(root){
// 	let ans = [];
//     if (!root) {
// 		return [];
// 	}
// 	function check(root){
// 		if (root) {
// 			ans.push(root.val);
// 		} 
// 		if (root.right) {
// 			check(root.right);
// 		} else if (root.left) {
// 			check(root.left);
// 		}
// 	}
// 	check(root);
// 	return ans;
// }

//https://leetcode-cn.com/problems/binary-tree-right-side-view/solution/shen-du-you-xian-sou-suo-by-shetia-2/

//BFS
var rightSideView = function(root){
	if(!root) return [];
	let ans = [];
	let queue = [root];
	function check(root){
		while (queue.length > 0) {
			let len = queue.length;
			while(len) {
				let cur = queue.shift();
				if(len === 1) ans.push(cur.val);
				if(cur.left) queue.push(cur.left);
				if(cur.right) queue.push(cur.right);
				len--;
			}
		}
	}
	check(root);
	return ans;
}

let t1_5 = new TreeNode(5);
let t1_4 = new TreeNode(4);
let t1_2 = new TreeNode(2, null, t1_5);
let t1_3 = new TreeNode(3, null, t1_4);
let t1_1 = new TreeNode(1, t1_2, t1_3);
console.log(t1_1);

console.log(rightSideView(t1_1));

//DFS
var rightSideView = function(root) {
  if(!root) return []
  let arr = []
  dfs(root, 0, arr)
  return arr
};
function dfs (root, step, res) {
  if(root){
    if(res.length === step){
      res.push(root.val)           // 当数组长度等于当前 深度 时, 把当前的值加入数组
    }
    // console.log(step, '-------', res)
    dfs(root.right, step + 1, res) // 先从右边开始, 当右边没了, 再轮到左边
    dfs(root.left, step + 1, res)
  }
}








