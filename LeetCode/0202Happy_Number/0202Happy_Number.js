//Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: 
// Starting with any positive integer, replace the number by the sum of the squares 
// of its digits, and repeat the process until the number equals 1 (where it will stay),
// or it loops endlessly in a cycle which does not include 1. 
// Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Input: 19
// Output: true
// Explanation: (2是平方)
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

function isHappy(n) {
	let repeated = new Set();
	// repeated.add(n);
	let num = n;
	while(!repeated.has(num)){
		ans = 0
		repeated.add(num);
		for(let i = 0; i < num.toString().length; i++){
			ans += Math.pow(num.toString()[i], 2);
		}		
		num = ans;
		// console.log(repeated);
	}
	if (num === 1) {
		return true;
	} else if (repeated.has(num)) {
		return false;
	}
}


x = 536
console.log(x.toString().length)

console.log(isHappy(19));
console.log(isHappy(20));
console.log(isHappy(21));






