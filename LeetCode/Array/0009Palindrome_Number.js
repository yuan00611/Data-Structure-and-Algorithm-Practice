// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.

// Input: 121
// Output: true

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. 
// From right to left, it becomes 121-. Therefore it is not a palindrome.

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function isPalindrome(x) {
	if (x < 0) {
		return false;
	} else if (x < 10) {
		return true;
	}
	x_s = x.toString();
	p1 = 0;
	p2 = x_s.length - 1;
	for (let i = 0; i < x_s.length / 2; i++){
		if (x_s[p1] !== x_s[p2]) {
			return false;
		} else {
			p1++;
			p2--;
		}
	}
	return true;
}

console.log(isPalindrome(121));



