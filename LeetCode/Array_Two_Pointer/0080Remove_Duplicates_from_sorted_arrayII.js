// Given a sorted array nums, remove the duplicates in-place such that 
// duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array, you must do this by modifying 
// the input array in-place with O(1) extra memory.

// Given nums = [1,1,1,2,2,3],
// Your function should return length = 5, with the first five elements 
// of nums being 1, 1, 2, 2 and 3 respectively.

// Given nums = [0,0,1,1,1,1,2,3,3],
// Your function should return length = 7, with the first seven elements 
// of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.


const removeDuplicates = (nums) => {
  let j = 0;
  let i = 0;

  for (; i < nums.length; i += 1){
    if (nums[i] !== nums[i + 2]) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  return j;
};

var removeDuplicates = function(nums) {
    for(let i=2;i<nums.length;i++){
        if(nums[i-2] === nums[i]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));




