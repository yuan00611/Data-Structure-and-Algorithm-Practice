//Given an array of integers, return indices of the two numbers 
//such that they add up to a specific target.

//You may assume that each input would have exactly one solution, 
//and you may not use the same element twice.

//Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

function twoSum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums.slice(i+1).indexOf(target - nums[i]) !== -1 ) {
			return ans = [i, nums.slice(i+1).indexOf(target - nums[i]) + 1 + i];
		}
	}
	return false;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));

//Hash Table
function twoSum2(nums, target) {
	if (nums.length === 2) {
		return [0,1];
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

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 2, 3], 6));
console.log(twoSum2([2, 5, 5, 11], 10));

function twoSum3(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        // if compliment exists, return compliment index and i
        if (hash.hasOwnProperty(nums[i])) return [hash[nums[i]], i];
        
        // else, save the compliment
        const compliment = target - nums[i];
        hash[compliment] = i;
    }
};

console.log(twoSum3([2, 7, 11, 15], 9));
console.log(twoSum3([3, 2, 4], 6));
console.log(twoSum3([3, 2, 3], 6));
console.log(twoSum3([2, 5, 5, 11], 10));
