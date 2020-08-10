// Suppose an array sorted in ascending order is rotated 
// at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. 
// If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

function search(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let mid = Math.floor((left + right) / 2);
	if(target < nums[left] && target > nums[right]) return -1;
	if(target > nums[left]) right = mid;
	if (target < nums[right]) { left = mid };
	while (left <= right) {
		if (nums[mid] === target) {
			return mid;
		} else if (target > mid) {
			left = mid;
		} else if (target < mid) {
			right = mid;
		}
		mid = Math.floor((left + right) / 2);
	}
	return -1;
}


console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([4,5,6,7,0,1,2], 0));





