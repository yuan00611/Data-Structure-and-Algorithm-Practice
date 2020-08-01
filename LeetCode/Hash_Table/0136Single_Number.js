//Given a non-empty array of integers, every element appears twice except for one. 
//Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. 
// Could you implement it without using extra memory?


// Input: [2,2,1]
// Output: 1

// Input: [4,1,2,1,2]
// Output: 4

function singleNumber(nums) {
	dict = {};
	for(let i = 0; i < nums.length; i++) {
		if (!dict.hasOwnProperty(nums[i])) {
			dict[nums[i]] = 1;
		} else {
			dict[nums[i]]++;
		}
	}
	for(var key in dict) {
		if (dict[key] === 1) {
			return key;
		}
	}
}

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));

function singleNumber2(nums) {
	let ans;
	for(let i = 0; i < nums.length; i++){
		ans ^= nums[i];
	}
	return ans;
}

console.log(singleNumber2([2,2,1]));
console.log(singleNumber2([4,1,2,1,2]));





