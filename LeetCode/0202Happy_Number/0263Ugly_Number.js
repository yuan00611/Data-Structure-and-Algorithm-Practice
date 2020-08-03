// Write a program to check whether a given number is an ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Input: 6
// Output: true
// Explanation: 6 = 2 × 3

// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2

// Input: 14
// Output: false 
// Explanation: 14 is not ugly since it includes another prime factor 7.

// 1. 1 is typically treated as an ugly number.
// 2. Input is within the 32-bit signed integer range: [−2 ^ 31,  2 ^ 31 − 1].

function isUgly(num) {
	if(num <= 0) return false;
	while (num % 2 === 0) {
		num /= 2;
	}
	while (num % 3 === 0) {
		num /= 3;
	}
	while (num % 5 === 0) {
		num /= 5;
	}
	return num === 1;
}

console.log(isUgly(8));
console.log(isUgly(6));
console.log(isUgly(14));





