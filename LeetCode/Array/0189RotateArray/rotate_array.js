//Given an array, rotate the array to the right by k steps, where k is non-negative.

//Input: nums = [1,2,3,4,5,6,7], k = 3
//Output: [5,6,7,1,2,3,4]

function rotateArray(nums, k) {
	let ans = nums.splice(nums.length-k, k);
	ans = ans.concat(nums);
	return ans;
}

nums = [1,2,3,4,5,6,7];
k = 3;
console.log(rotateArray(nums, k));

function rotate(nums, k) {
	for (let i = 0; i < k; i++){
		nums.unshift(nums.pop());
	}
	return nums;
}

k = 3
nums = [1,2,3,4,5,6,7];
console.log(rotate(nums, k));

function rotate2(nums, k) {
	while(k-- > 0) nums.unshift(nums.pop());
	return nums;
};

k = 3
nums = [1,2,3,4,5,6,7];
console.log(rotate2(nums, k));



