// Given a string, determine if it is a palindrome, considering only 
// alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, 
// we define empty string as valid palindrome.

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Input: "race a car"
// Output: false

function isPalindrome(s) {
	s = s.toLowerCase();
	let newS = '';
	for(let i = 0; i < s.length; i++) {
		if ((s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) || (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)) {
			newS += s[i];
		}
	}
	let p1 = 0;
	let p2 = newS.length - 1;
	while (p1 <= p2) {
		if (newS[p1] === newS[p2]) {
			p1++;
			p2--
		} else {
			return false;
		}
	}
	return true;
}


console.log(isPalindrome('race a car'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0P'));


