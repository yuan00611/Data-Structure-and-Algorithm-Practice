// Let's call an array A a mountain if the following properties hold:

// A.length >= 3
// There exists some 
// 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// Given an array that is definitely a mountain, return any i such that 
// A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Input: [0,1,0]
// Output: 1

// Input: [0,2,1,0]
// Output: 1

function peakIndexInMountainArray(A) {
	let left = 0;
	let right = A.length - 1;
	
	while(left <= right) {
		let mid = Math.floor((left + right) / 2);
		// console.log('left', left);
		// console.log('right', right);
		// console.log('mid', mid);
		if (A[mid] > A[mid + 1] && A[mid] > A[mid - 1]) {
			return mid;
		} else if (A[mid] > A[mid + 1] && A[mid] < A[mid - 1]) {
			right = mid - 1;
		} else if (A[mid] < A[mid + 1] && A[mid] > A[mid - 1]) {
			left = mid + 1;
		}
	}
}

console.log(peakIndexInMountainArray([3,4,5,1]));
console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,2,1,0]));
console.log(peakIndexInMountainArray([0,6,7,9,3,2,1,0]));








