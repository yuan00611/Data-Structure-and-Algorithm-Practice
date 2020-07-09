//Given an integer array nums, find the contiguous subarray 
//(containing at least one number) which has the largest sum and return its sum.

//Input: [-2,1,-3,4,-1,2,1,-5,4],
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums) {
	let max = 0;
	for (let i = 0; i < nums.length; i++){
		for(let j = 1; j <= nums.length; j++){
			let newNums = nums.slice(i,j);
			const arrSum = newNums.reduce(function (accumulator, currentValue) {
  				return accumulator + currentValue
			}, 0)
			if (arrSum > max) {
				max = arrSum;
			}
		}
	}
	return max;
}

number = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(number));

//Kadane's algorithm implementation w/ explanation
//1.set initials
	//1.1 first value in the array. It doesn’t matter to us 
	//	  whether max is positive or negative.
	//1.2 we need an intermediate current positive value, because 
	//		a negative value does not interest us
//2.At this point we've covered first value in the array, that's why 
//	we will move through array starting from the 1 index.
//3.current += nums[i] means that every time we take a new value, 
//	we will sum it with the past current value. 
//	This will help us discard lower values in the next step.
//4.max = Math.max(max, current) means that we choose only the highest value 
//	(previous max or new current).
//5.current = Math.max(current, 0) means that if the value was negative, 
//	then we throw it away and set zero as default. 
//	Why? Because it makes no sense to summarize the negative values, they simply 
//	do not interest us. The previous step is enough to compare negative values. 
//	There we will choose the minimum negative value 
//	(if it is the case i.e [-10, -3, -5, -2, -6] will return only -2 
//	because it is the highest value from the negative ones.

//https://zhuanlan.zhihu.com/p/96014673

function maxSubArray2(nums) {
    let max = nums[0];
    let current = Math.max(max, 0);
    
    for (let i = 1; i < nums.length; i += 1) {
        current += nums[i];
        max = Math.max(max, current);
        current = Math.max(current, 0);
    }
    
    return max;
};

number = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray2(number));


