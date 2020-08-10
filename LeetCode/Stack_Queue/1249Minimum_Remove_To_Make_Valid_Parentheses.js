// Given a string s of '(' , ')' and lowercase English characters. 

// Your task is to remove the minimum number of parentheses ( '(' or ')', 
// in any positions ) so that the resulting parentheses string is valid 
// and return any valid string.

// Formally, a parentheses string is valid if and only if:

// *It is the empty string, contains only lowercase characters, or
// *It can be written as AB (A concatenated with B), 
//   where A and B are valid strings, or
// *It can be written as (A), where A is a valid string.

// Constraints:
// *1 <= s.length <= 10^5
// *s[i] is one of  '(' , ')' and lowercase English letters.

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

// Input: s = "(a(b(c)d)"
// Output: "a(b(c)d)"

function minRemoveToMakeValid(s) {
	if(!s) return s;
	stack = [];
	for(let i = 0; i < s.length; i++){
		if (stack.length === 0 && s[i] === ')') {
			s = s.slice(0,i) + s.slice(i+1);
			i--;
		} else if (s[i] === '(') {
			stack.push(s[i]);
		} else if (s[i] === ')') {
			stack.pop();
		}
	}
	while (stack.length > 0) {
		last = s.lastIndexOf('(');
		s = s.slice(0,last) + s.slice(last+1);
		stack.pop();
	}
	return s;
}

//https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/discuss/474353/Stack-Based-or-Easy-to-Understand-or-Faster-than-99-or-JavaScript-Solution
var minRemoveToMakeValid = function(str) {
    str = str.split("");
	let stack = [];
    for(let i = 0; i<str.length; i++){
        if(str[i]==="(")
            stack.push(i);
        else if(str[i]===")"){
            if(stack.length) stack.pop();
            else str[i]="";
        }
    }
    
    for(let i of stack) str[i] = "";
    
    return str.join("");
	
}

console.log(minRemoveToMakeValid('lee(t(c)o)de)'));
console.log(minRemoveToMakeValid('a)b(c)d'));
console.log(minRemoveToMakeValid('))(('));




