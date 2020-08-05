// Given an integer (signed 32 bits), 
// write a function to check whether it is a power of 4.

// Input: 16
// Output: true

// Input: 5
// Output: false


function isPowerOfFour(num) {
	if (num <= 0) {
		return false;
	} else if (num === 1) {
		return true;
	}
	let x = num.toString(2).split("").reverse().join("");
	console.log(x);
	let count = 0;
	for(let i = 0; i < x.length; i++){
		if(i === 0 && x[i] === '1'){
			return false;
		} else if (i % 2 === 1 && x[i] === '1') {
			return false;
		} else if (i % 2 === 0 && x[i] === '1') {
			count++;
		}
		if (count > 1) {
			return false;
		}
	}
	return true;
}

var isPowerOfFour = function(num) {
	return (num > 0) && (num - (num & -num) === 0) && ((num & 0xaaaaaaaa) === 0);
};

console.log(isPowerOfFour(20));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));