collections = {
	'{': '}',
	'[': ']',
	'(': ')'
}

function isValid(s){
	stack = [];
	if (s.length === 0) {
		return true;
	} else if (s.length % 2 !== 0) {
		return false;
	}
	for(let i = 0; i < s.length; i++){
		if (collections.hasOwnProperty(s[i])) {
			stack.push(s[i]);
		} else {
			if (collections[stack[stack.length - 1]] === s[i] ) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	if (stack.length !== 0) {
		return false;
	} else {
		return true;
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



