// Given an array of size n, find the majority element. 
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and 
// the majority element always exist in the array.

// Input: [3,2,3]
// Output: 3

// Input: [2,2,1,1,1,2,2]
// Output: 2

//hash table
function majorityElement(nums) {
	dict = {};
	for(let i = 0; i < nums.length; i++){
		if(!dict.hasOwnProperty(nums[i])) {
			dict[nums[i]] = 1;
		} else {
			dict[nums[i]]++;
		}
	}

	for(let key in dict){
		if (dict[key] > (nums.length / 2)) {
			return key;
		}
	}
}

//sort
var majorityElement = function(nums) {
  nums.sort((a,b) => a - b)
  return nums[Math.floor(nums.length / 2)]
};

//Boyer-Moore 投票法
var majorityElement = function(nums) {
  let x = 0
  let m = 0
  for(let n of nums){
    if(m === 0) x = n
    m += x === n ? 1 : -1
  }
  return x
};


console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));




