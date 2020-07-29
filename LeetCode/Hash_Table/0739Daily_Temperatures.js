//Given a list of daily temperatures T, return a list such that, 
//for each day in the input, tells you how many days you would have to wait 
//until a warmer temperature. 
//If there is no future day for which this is possible, put 0 instead.

//For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], 
//your output should be [1, 1, 4, 2, 1, 1, 0, 0].

//Note: The length of temperatures will be in the range [1, 30000]. 
//Each temperature will be an integer in the range [30, 100].

function dailyTemperatures(T) {
	let ans = Array(T.length).fill(0);
	let stack = [];
	for(let i = 0; i < T.length; i++) {
		if (!stack) {
			stack.push(i);
		} 
		let count = stack.length - 1;
		while (T[i] > T[stack[count]] && count >= 0) {
			ans[stack[count]] = i - stack[count];
			stack.splice(count,1);
			count--;
		}
		stack.push(i);
		// console.log(stack);
	}
	return ans;
}

let T = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(T));

