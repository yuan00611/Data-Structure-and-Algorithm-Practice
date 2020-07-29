//Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and 
// for the multiples of five output “Buzz”. 
// For numbers which are multiples of both three and five output “FizzBuzz”.

function fizzBuzz(n) {
	let ans = [];
	for(let i = 1; i <= n; i++){
		if (i % 15 === 0) {
			ans.push('FizzBuzz');
		}else if (i % 5 === 0) {
			ans.push('Buzz');
		} else if (i % 3 === 0) {
			ans.push('Fizz');
		} else {
			ans.push(i.toString());
		}
	}
	return ans;
}

console.log(fizzBuzz(15));