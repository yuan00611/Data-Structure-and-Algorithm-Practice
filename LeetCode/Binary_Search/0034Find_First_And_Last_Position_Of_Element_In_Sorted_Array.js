// Given an array of integers nums sorted in ascending order, 
// find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non decreasing array.
// -10^9 <= target <= 10^9

//https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/js-er-fen-fa-by-hblvsjtu/
var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1, mid;
    while (left <= right) {
        mid = (left + right) >> 1;
        if (nums[mid] === target) break;
        if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    if(left > right) return [-1, -1];
    let i = mid, j = mid;
    while(nums[i] === nums[i - 1]) i--;
    while(nums[j] === nums[j + 1]) j++;
    return [i, j];
};


function searchRange(nums, target) {
	if (nums.indexOf(target) === -1) {
		return [-1, -1];
	} else {
		let L = nums.indexOf(target);
		let R = nums.lastIndexOf(target);
		return [L,R];
	}
	
}

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));






