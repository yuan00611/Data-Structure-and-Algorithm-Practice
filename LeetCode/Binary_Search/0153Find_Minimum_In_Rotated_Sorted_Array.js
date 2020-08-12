// Suppose an array sorted in ascending order is rotated at some pivot 
// unknown to you beforehand.
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// Input: [3,4,5,1,2] 
// Output: 1

// Input: [4,5,6,7,0,1,2]
// Output: 0


var findMin = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};



console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));





