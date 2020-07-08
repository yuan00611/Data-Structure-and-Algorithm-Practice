let calculation = 0;

//O(n)
function fibonacciMaster() {
	let cache = {};
	return function fib(n) {
		calculation++;
		if (n in cache) {
			return cache[n];
		}else {
			if (n < 2) {
				return n;
			} else {
				cache[n] = fib(n-1) + fib(n-2);
				return cache[n];
			}
		}
	}
}

const fasterFib = fibonacciMaster();

console.log('DP', fasterFib(13));
console.log('We did ' + calculation + ' calculations');