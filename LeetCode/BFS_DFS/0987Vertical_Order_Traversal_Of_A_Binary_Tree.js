// Given a binary tree, return the vertical order traversal of its nodes values.

// For each node at position (X, Y), its left and right children 
// respectively will be at positions (X-1, Y-1) and (X+1, Y-1).

// Running a vertical line from X = -infinity to X = +infinity, 
// whenever the vertical line touches some nodes, 
// we report the values of the nodes in order from top to bottom 
// (decreasing Y coordinates).

// If two nodes have the same position, 
// then the value of the node that is reported first is the value that is smaller.

// Return an list of non-empty reports in order of X coordinate.  
// Every report will have a list of values of nodes.

// Input: [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Explanation: 
// Without loss of generality, we can assume the root node is at position (0, 0):
// Then, the node with value 9 occurs at position (-1, -1);
// The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
// The node with value 20 occurs at position (1, -1);
// The node with value 7 occurs at position (2, -2).

// Input: [1,2,3,4,5,6,7]
// Output: [[4],[2],[1,5,6],[3],[7]]
// Explanation: 
// The node with value 5 and the node with value 6 have the same position according to the given scheme.
// However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var verticalTraversal = function(root) {
	if (!root) {
		return [];
	}
	let dict = {};

	function traverse(node, x, y) {
		if(!dict.hasOwnProperty(x)){
			dict[x] = [];
		} 
		dict[x].push(node.val);
		dict[x].sort(function(a,b){
	    	if(b.y==a.y)
	    		return a.val-b.val
	    	return b.y-a.y
	    })

		if(node.left) traverse(node.left, x-1, y-1);
		if(node.right) traverse(node.right, x+1, y-1);

	}
	traverse(root, 0, 0);
	let order = Object.keys(dict).sort((a, b) => a-b);
	let ans = [];
	order.forEach(function(x){
      ans.push(dict[x])
    })
	return ans;
}

let t1_4 = new TreeNode(4);
let t1_5 = new TreeNode(5);

let t1_6 = new TreeNode(6);
let t1_7 = new TreeNode(7);

let t1_2 = new TreeNode(2, t1_4, t1_5);
let t1_3 = new TreeNode(3, t1_6, t1_7);
let t1_1 = new TreeNode(1, t1_2, t1_3);
console.log(t1_1);


console.log(verticalTraversal(t1_1));







