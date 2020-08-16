// Given a string which consists of lowercase or uppercase letters, 
// find the length of the longest palindromes that can be built with 
// those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Input: "abccccdd"
// Output: 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

function longestPalindrome(s) {
	dict = {};
	for(let i = 0; i < s.length; i++){
		if (dict.hasOwnProperty(s[i])) {
			dict[s[i]]++;
		} else {
			dict[s[i]] = 1;
		}
	}
	let ans = 0;
	let odd = false;
	for(let j in dict){
		if (dict[j] % 2 === 0) {
			ans += dict[j];
		} else {
			ans += dict[j] - 1;
			odd = true;
		}
	}
	return odd ? ans + 1 : ans;
}

console.log(longestPalindrome('abccccdd'));





