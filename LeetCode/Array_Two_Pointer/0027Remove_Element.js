// Given an array nums and a value val, remove all instances of that value 
// in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying 
// the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you 
// leave beyond the new length.

// Given nums = [3,2,2,3], val = 3,
// Your function should return length = 2, with the first two elements of nums being 2.

// Given nums = [0,1,2,2,3,0,4,2], val = 2,
// Your function should return length = 5, with the first five elements 
// of nums containing 0, 1, 3, 0, and 4.

function removeElement(nums, val) {
	for(let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2));
console.log(removeElement([3,2,2,3], 3));


var removeElement = function(nums, val) {
    while(nums.indexOf(val,0) >= 0) {
        nums.splice(nums.indexOf(val,0), 1);
    }
    return nums.length;
};





