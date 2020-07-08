//Given a numver N return the index value of the 
//Fibonacci sequence, where the sequence is:

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
//the pattern of the sequence is that each value is the sum 
//of the 2 previous values, that means that for N = 5 -> 2+3

//O(n)
function fibonacciIterative(n) {
	if (n < 2) {
		return n;
	}
	let seqArray = [0, 1]
	for (let i = 2; i <= n; i++){
		newNum = seqArray[i-2] + seqArray[i-1];
		seqArray.push(newNum);
	}
	return seqArray[n];
} 

console.log('fibonacciIterative', fibonacciIterative(10));

//O(2^n)
function fibonacciIterativeRecursive(n) {
	if (n < 2) {
		return n;
	}
	return fibonacciIterativeRecursive(n-1) + fibonacciIterativeRecursive(n-2);
}

console.log('fibonacciIterativeRecursive', fibonacciIterativeRecursive(10));





