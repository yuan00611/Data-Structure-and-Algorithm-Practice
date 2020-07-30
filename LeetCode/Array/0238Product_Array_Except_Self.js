// Given an array nums of n integers where n > 1,  
// return an array output such that output[i] is equal to the product of 
// all the elements of nums except nums[i].

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

//Constraint: It's guaranteed that the product of the elements of 
//any prefix or suffix of the array (including the whole array) fits in 
//a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? 
// (The output array does not count as extra space for the purpose of 
// space complexity analysis.)

// function productExceptSelf(nums) {
// 	let ans = new Array(nums.length).fill(1);
// 	for(let i = 0; i < nums.length; i++){
// 		let count = 0;
// 		let num = 1;
// 		while (count < nums.length) {
// 			if (count !== i) {
// 				num *= nums[count];
// 			} 
// 			count++;
// 		}
// 		ans[i] = num;
// 	}
// 	return ans;
// }

// let nums = [1,2,3,4];
// console.log(productExceptSelf(nums));

//https://leetcode-cn.com/problems/product-of-array-except-self/solution/chu-zi-shen-yi-wai-shu-zu-de-cheng-ji-by-leetcode-/

function productExceptSelf(nums) {
	let ans = new Array(nums.length).fill(1);
	let left = new Array(nums.length).fill(1);
	let right = new Array(nums.length).fill(1);
	left[0] = 1;
	for(let i = 1; i < nums.length; i++){
		left[i] = left[i - 1] * nums[i-1];
	}
	console.log(left);
	right[right.length - 1] = 1;
	for(let j = nums.length -2; j >= 0; j--){
		right[j] = right[j+1] * nums[j+1];
	}
	console.log(right);
	for(let k = 0; k < nums.length; k++){
		ans[k] = left[k] * right[k];
	}
	return ans;
}

let nums = [1,2,3,4];
console.log(productExceptSelf(nums));


function productExceptSelf2(nums) {
	let ans = new Array(nums.length).fill(1);
	for(let i = 1; i < nums.length; i++){
		ans[i] = ans[i-1] * nums[i-1];
	}

	let R = 1;
	for(let j = nums.length - 1; j >= 0; j--) {
		ans[j] *= R;
		R *= nums[j]; 
	}
	return ans;
}

console.log(productExceptSelf2(nums));









