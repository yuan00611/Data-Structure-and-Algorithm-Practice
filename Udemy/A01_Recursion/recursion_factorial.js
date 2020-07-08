//Write two functions that finds the factorial of any number.
//One should use recursive, the other should just use a for loop

//O(n)
function findFactorialRecursive(number) {
	if (number === 2) {
		return 2;
	} else if (number === 1) {
		return 1;
	}
	return number * findFactorialRecursive(number-1);
}

// O(n)
function findFactorialIterative(number) {
	let answer = 1;
	for(let i = 1; i <= number; i++){
		answer *= i;
	}
	return answer;
}

console.log('Recursive', findFactorialRecursive(5));
console.log('Iterative', findFactorialIterative(5));