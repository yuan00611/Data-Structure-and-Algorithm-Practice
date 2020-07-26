//Given a sorted array nums, remove the duplicates in-place such that 
//each element appear only once and return the new length.

//Do not allocate extra space for another array, 
//you must do this by modifying the input array in-place with O(1) extra memory.

//Given nums = [1,1,2],
//Your function should return length = 2, with the first two elements of nums 
//being 1 and 2 respectively.
//It doesn't matter what you leave beyond the returned length.

function removeDuplicates(nums) {
	let i = 1;
	if (!nums.length) {
		return 0;
	}
	return nums.reduce((prev, next, idx) => {
		if (idx === nums.length - 1) {
			if (next !== prev) {
				nums[i] = next;
				console.log(nums);
				return i + 1;
			} else {
				return i;
			}			
		}	
		if (next !== prev) {
			nums[i] = next;
			i++;
			return next;
		} else {
			return prev;
		}
    });
};


// let nums0 = [1,1,2];
// let nums1 = [0,0,1,1,1,2,2,3,3,4];
// let nums2 = [1,1,1,2,2,3,3,4,5,6];
// let nums3 = [1,1,1,2,2,3,3,4,5,6,7,7,7];
// let nums4 = [2,2,3,3,4,5,6,7,7,7,8,8,9];
// console.log('2', removeDuplicates(nums0));
// console.log('5', removeDuplicates(nums1));
// console.log('6', removeDuplicates(nums2));
// console.log('7', removeDuplicates(nums3));
// console.log('8', removeDuplicates(nums4));
// console.log(nums);


var removeDuplicates2 = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};

var removeDuplicates3 = function(nums) {
    for (i = 0; i < nums.length; i++) {
        //Next number is identical to current one
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
};

var removeDuplicates4 = function(nums) {
    nums.splice(0, nums.length, ...(new Set(nums)));
};

function removeDuplicates5(nums) {
	let p1 = 0;
	let p2 = 1;
	while (p2 < nums.length) {
		if (nums[p1] !== nums[p2]) {
			nums[p1+1] = nums[p2];
			p1++;
		} 
		p2++;
	}
	return p1+1;
}

let nums0 = [1,1,2];
let nums1 = [0,0,1,1,1,2,2,3,3,4];
let nums2 = [1,1,1,2,2,3,3,4,5,6];
let nums3 = [1,1,1,2,2,3,3,4,5,6,7,7,7];
let nums4 = [2,2,3,3,4,5,6,7,7,7,8,8,9];
console.log('2', removeDuplicates5(nums0));
console.log('5', removeDuplicates5(nums1));
console.log('6', removeDuplicates5(nums2));
console.log('7', removeDuplicates5(nums3));
console.log('8', removeDuplicates5(nums4));

