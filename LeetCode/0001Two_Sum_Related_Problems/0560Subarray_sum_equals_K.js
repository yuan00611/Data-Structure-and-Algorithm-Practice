// Given an array of integers and an integer k, you need to find the total number 
// of continuous subarrays whose sum equals to k.

// Input:nums = [1,1,1], k = 2
// Output: 2

// Constraints:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and 
// the range of the integer k is [-1e7, 1e7].

function subarraySum(nums, k) {

}

//https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/he-wei-kde-zi-shu-zu-by-leetcode-solution/
var subarraySum = function(nums, k) {
    let count = 0;
    for (let start = 0; start < nums.length; ++start) {
        let sum = 0;
        for (let end = start; end >= 0; --end) {
            sum += nums[end];
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
};

var subarraySum = function(nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) count += mp.get(pre - k);
        if (mp.has(pre)) mp.set(pre, mp.get(pre) + 1);
        else mp.set(pre, 1);
    }
    return count;
};





