//Given an array of integers that is already sorted in ascending order, 
//find two numbers such that they add up to a specific target number.

//The function twoSum should return indices of the two numbers such that 
//they add up to the target, where index1 must be less than index2.

//Your returned answers (both index1 and index2) are not zero-based.
//You may assume that each input would have exactly one solution and 
//you may not use the same element twice.

//Input: numbers = [2,7,11,15], target = 9
//Output: [1,2]

//Hash Table
function twoSum(nums, target) {
	if (nums.length === 2) {
		return [1, 2];
	}
	let hashTable = {};
	for (let i = 0; i < nums.length; i++) {
		if (hashTable.hasOwnProperty(target - nums[i])) {
			return [hashTable[target - nums[i]], i];
		} else {
			hashTable[nums[i]] = i;
		}
	}
}

//Two Pointer
function twoSum2(nums, target) {
	if (nums.length === 2) {
		return [1, 2];
	}
	let first = 0;
	let last = nums.length - 1;
	while (first < last) {
		if (nums[first] + nums[last] === target) {
			return [first+1, last+1];
		} else if (nums[first] + nums[last] > target) {
			last--;
		} else {
			first++;
		}
	}
}

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([2, 5, 5, 11], 10));






