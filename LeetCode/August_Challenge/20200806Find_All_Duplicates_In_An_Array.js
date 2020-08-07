// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 
// some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Input: [4,3,2,7,8,2,3,1]
// Output: [2,3]

//time limit exceed
// function findDuplicates(nums) {
// 	ans = new Set();
// 	for(let i = 0; i < nums.length; i++){
// 		if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
// 			ans.add(nums[i]);
// 		}
// 	}
// 	return Array.from(ans);
// }

var findDuplicates = function(nums) {
    const result = []
    for (let i = 0; i < nums.length; i++){
        const index = Math.abs(nums[i]) - 1
        if (nums[index] < 0){
            result.push(index + 1)
        }
        nums[index] = -Math.abs(nums[index])
    }
    return result
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));