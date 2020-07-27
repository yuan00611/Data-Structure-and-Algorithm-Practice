//Given a non-empty array of digits representing a non-negative integer, 
//increment one to the integer.

//The digits are stored such that the most significant digit is 
//at the head of the list, and each element in the array contains a single digit.

//You may assume the integer does not contain any leading zero, 
//except the number 0 itself.

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// function plusOne(digits) {
// 	let num = parseInt(digits.join('')) + 1;
// 	let ans = [];
// 	for(let i = 0; i < num.toString().length; i++){
// 		ans.push(num.toString()[i]);
// 	}
// 	return ans;
// }

function plusOne(digits) {
	digits[digits.length - 1] = digits[digits.length - 1] + 1;
	for(let i = digits.length - 1; i >= 0; i--){
		if (digits[i].toString().length > 1) {
			digits[i] = 0;
			if (digits[i - 1]) {
				digits[i - 1] ++;
			}else {
				digits.unshift(1);
			}
			
		}
	}
	return digits;
}

console.log(plusOne([9]));
console.log(plusOne([1,2,3]));
console.log(plusOne([1,2,9]));
console.log(plusOne([1,9,9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));


