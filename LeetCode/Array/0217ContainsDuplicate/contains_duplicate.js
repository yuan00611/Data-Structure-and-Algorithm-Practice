//Given an array of integers, find if the array contains any duplicates.

//Your function should return true if any value appears at least twice in 
//the array, and it should return false if every element is distinct.

//Input: [1,2,3,1]
//Output: true

//Input: [1,2,3,4]
//Output: false

//Input: [1,1,1,3,3,4,3,2,4,2]
//Output: true

function containsDuplicate(nums) {
	let dict = new Set();
	for(let i = 0; i < nums.length; i++){
		if (!dict.has(nums[i])) {
			dict.add(nums[i]);
		} else {
			return true;
		}
	}
	return false;
}

num1 = [1,2,3,1];
num2 = [1,2,3,4];
num3 = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate(num1));
console.log(containsDuplicate(num2));
console.log(containsDuplicate(num3));

function containsDuplicate2(nums) {
	return new Set(nums).size !== nums.length ? true : false; 
}

console.log(containsDuplicate2(num1));
console.log(containsDuplicate2(num2));
console.log(containsDuplicate2(num3));




