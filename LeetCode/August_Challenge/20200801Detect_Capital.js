// Given a word, you need to judge whether the usage of capitals 
// in it is right or not.

// We define the usage of capitals in a word to be right 
// when one of the following cases holds:

// 1. All letters in this word are capitals, like "USA".
// 2. All letters in this word are not capitals, like "leetcode".
// 3. Only the first letter in this word is capital, like "Google".

// Otherwise, we define that this word doesn't use capitals in a right way.
 
// Input: "USA"
// Output: True

// Input: "FlaG"
// Output: False

function detectCapitalUse(word) {
	let capital = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	if (word === word.toUpperCase()) {
		return true;
	} else if (word === word.toLowerCase()) {
		return true;
	} else if (word === capital) {
		return true;
	} else {
		return false;
	}
}

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('leetcode'));
console.log(detectCapitalUse('Google'));
console.log(detectCapitalUse('FlaG'));

