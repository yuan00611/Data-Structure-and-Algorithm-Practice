// Given a sorted array and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 2
// Output: 1

// Input: [1,3,5,6], 7
// Output: 4

// Input: [1,3,5,6], 0
// Output: 0

//O(n)
function searchInsert(nums, target) {
	if (nums.indexOf(target) !== -1) {
		return nums.indexOf(target);
	} else if (nums[0] > target) {
		return 0;
	} else if (nums[nums.length - 1] < target) {
		return nums.length;
	} else {
		for(let i = 0; i < nums.length; i++){
			if (target < nums[i+1] && target > nums[i]) {
				return i+1;
			} 
		}		
	}
}

//O(log(n))
function searchInsert(nums, target) {
	if (nums[0] > target) {
		return 0;
	} else if (nums[nums.length - 1] < target) {
		return nums.length;
	}
	let left = 0;
	let right = nums.length;
	while (left < right) {
		let mid = Math.floor((left+right) / 2);
	 	if (target === nums[mid]) {
	 		return mid;
	 	} else if (target > nums[mid]) {
	 		left = mid + 1;
	 	} else {
	 		right = mid;
	 	}
	}
	return left;
}



console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));






