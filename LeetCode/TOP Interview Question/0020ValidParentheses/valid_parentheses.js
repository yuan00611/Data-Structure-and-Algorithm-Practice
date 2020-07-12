//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
//determine if the input string is valid.

//An input string is valid if:
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.

//Note that an empty string is also considered valid.

//Input: "()"
//Output: true

//Input: "()[]{}"
//Output: true

//Input: "(]"
//Output: false

//Input: "([)]"
//Output: false

//Input: "{[]}"
//Output: true

let symbol = {
	'(' : ')',
	'[' : ']',
	'{' : '}'
}
function isValid(s) {
	if (!s.length) {
		return true;
	} else if (s.length % 2 === 1) {
		return false;
	}
	wait = [];
	for (let i = 0; i < s.length; i++) {
		if (!symbol.hasOwnProperty(s[i]) && !wait.length) {
			return false;
		}
		if (symbol.hasOwnProperty(s[i])) {
			wait.push(s[i]);
		} else {
			if (symbol[wait[wait.length - 1]] === s[i] ) {
				wait.pop();
			} else {
				return false;
			}
		}
	}
	if (!wait.length) {
		return true;
	} else {
		return false;
	}
}


console.log('T', isValid(''));
console.log('F', isValid(']'));
console.log('F', isValid('][}'));
console.log('T', isValid('()'));
console.log('T', isValid('()[]{}'));
console.log('F', isValid('([)]'));
console.log('T', isValid('{[]}'));
console.log('F', isValid('(('));

const isValid2 = function([...s]) {
  const hash = {'(': ')', '[': ']', '{': '}'};
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined) stack.push(s[i]);
    else if (hash[stack.pop()] !== s[i]) return false;
  }
  return stack.length ? false : true;
};




