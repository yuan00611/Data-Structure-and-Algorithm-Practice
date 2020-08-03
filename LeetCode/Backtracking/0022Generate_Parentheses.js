//Given n pairs of parentheses, write a function to generate all combinations 
//of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

var generateParenthesis = function(n) {
	if (n === 0) {
		return [];
	} else if (n === 1) {
		return ['()'];
	}
    let ans = [];
    function backtrack(combination, left, right){
    	if (combination.length === 2 * n) {
    		ans.push(combination);
    	}
    	if (left < n) {
    		backtrack(combination + '(', left + 1 , right);
    	}
    	if (left > right) {
    		backtrack(combination + ')', left, right + 1);
    	}
    }
	backtrack('', 0, 0);
	return ans;

};

console.log(generateParenthesis(0));
console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
