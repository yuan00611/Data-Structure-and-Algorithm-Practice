// Given an array A of non-negative integers, half of the integers in A are odd, 
// and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; 
// and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

function sortArrayByParityII(A) {
	let ans = [];
	let odd = [];
	let even = [];
	for(let i = 0; i < A.length; i++) {
		if (A[i] % 2 === 0) {
			even.push(A[i]);
		} else {
			odd.push(A[i]);
		}
	}
	for(let j = 0; j < A.length / 2; j++){
		ans.push(even[j], odd[j]);
	}
	return ans;
}

console.log(sortArrayByParityII([4,2,5,7]));




