//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

//For example, two is written as II in Roman numeral, just two one's added together. 
//Twelve is written as, XII, which is simply X + II. 
//The number twenty seven is written as XXVII, which is XX + V + II.

//Roman numerals are usually written largest to smallest from left to right. 
//However, the numeral for four is not IIII. 
//Instead, the number four is written as IV. 
//Because the one is before the five we subtract it making four. 
//The same principle applies to the number nine, which is written as IX. 
//There are six instances where subtraction is used:

//I can be placed before V (5) and X (10) to make 4 and 9. 
//X can be placed before L (50) and C (100) to make 40 and 90. 
//C can be placed before D (500) and M (1000) to make 400 and 900.

//Given a roman numeral, convert it to an integer. 
//Input is guaranteed to be within the range from 1 to 3999.

//Input: "III"
//Output: 3

//Input: "IV"
//Output: 4

//Input: "IX"
//Output: 9

//Input: "LVIII"
//Output: 58

//Input: "MCMXCIV"
//Output: 1994
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romanToInt(s) {
	let ans = 0;
	for(let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case 'M':
				ans += 1000;
				break;
			case 'D':
				ans += 500;
				break;
			case 'L':
				ans += 50;
				break;
			case 'V':
				ans += 5;
				break;
			case 'C':
				if (s.indexOf('M') > i) {
					ans -= 100;
				} else if (s.lastIndexOf('M') > i) {
					ans -= 100;
				} else if (s.indexOf('M') < i && s.indexOf('D') > i) {
					ans -= 100;
				} else {
					ans += 100;
				}
				break;
			case 'X':
				if (s.indexOf('C') > i) {
					ans -= 10;
				} else if (s.lastIndexOf('C') > i) {
					ans -= 10;
				} else if (s.indexOf('C') < i && s.indexOf('L') > i) {
					ans -= 10;
				} else {
					ans += 10;
				}
				break;
			case 'I':
				if (s.indexOf('X') > i) {
					ans -= 1;
				} else if (s.lastIndexOf('X') > i) {
					ans -= 1;
				} else if ((s.indexOf('X') < i) && (s.indexOf('V') > i)) {
					ans -= 1;
				} else {
					ans += 1;
				}
				break;
		}
	}
	return ans;
}

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("MMCCCXCIX"));



symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt2 = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};




