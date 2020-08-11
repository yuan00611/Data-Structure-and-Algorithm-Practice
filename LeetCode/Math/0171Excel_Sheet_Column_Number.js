// Given a column title as appear in an Excel sheet, 
// return its corresponding column number.

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Input: "A"
// Output: 1

// Input: "AB"
// Output: 28

// Input: "ZY"
// Output: 701

// 1 <= s.length <= 7
// s consists only of uppercase English letters.
// s is between "A" and "FXSHRXW".

function titleToNumber(s) {
	let digits = 1;
	let ans = 0;
	for(let i = s.length - 1; i >= 0; i--){
		let temp =  (s.charCodeAt(i) - 64) * digits;
		ans += temp;
		digits *= 26;
		// console.log(temp);
		// console.log(ans);
		// console.log(digits);
	}
	return ans;
}

console.log(titleToNumber('A'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));



