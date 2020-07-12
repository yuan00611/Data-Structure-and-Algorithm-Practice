//You are a professional robber planning to rob houses along a street. 
//Each house has a certain amount of money stashed, the only constraint 
//stopping you from robbing each of them is that adjacent houses have 
//security system connected and it will automatically contact the police 
//if two adjacent houses were broken into on the same night.

//Given a list of non-negative integers representing the amount of money 
//of each house, determine the maximum amount of money you can rob tonight 
//without alerting the police.

//Input: nums = [1,2,3,1]
//Output: 4
//Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//             Total amount you can rob = 1 + 3 = 4.

//Input: nums = [2,7,9,3,1]
//Output: 12
//Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//             Total amount you can rob = 2 + 9 + 1 = 12.

//0 <= nums.length <= 100
//0 <= nums[i] <= 400

function rob(nums) {
	if (!nums.length) {
		return 0;
	} else if (nums.length === 1) {
		return nums[0];
	}  else if (nums.length === 2) {
		return Math.max(nums[0], nums[1]);
	}
	let p1 = nums[0];	
	let p2 = nums[1];
	// console.log(p1, p2);
	for (let i = 2; i < nums.length; i++) {
		if (p1 + nums[i] >= p2) {
			let temp = p2;
			p2 = p1 + nums[i];
			if (temp > p1) {
				p1 = temp;
			}
		} else {
			let temp = p1;
			p1 = p2;
			p2 = temp + nums[i];
		}
		// console.log(p1, p2);
	}
	return Math.max(p1, p2);
}

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([2,1,2,1,1,2,1,2,1,2]));


thinkfwd's avatar
thinkfwd
67
Last Edit: November 24, 2019 10:56 PM

479 VIEWS

Hey Everyone,

I decided to do a video explaination of the problem here.
Please leave me a comment and let me know where I can improve ! there are graphics in this solution !




//Youtube: https://www.youtube.com/watch?v=EZRYtQF2t1k
function rob2(nums) {
    if(!nums.length) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    for(let i=2; i<nums.length; i++){
        nums[i] = Math.max(nums[i-2]+nums[i], (nums[i-3] || 0) +nums[i])
    }
    return Math.max(nums[nums.length-1], nums[nums.length-2]);
};


function rob3(nums) {
	return nums.reduce(function(p, n) { 
	    return [p[1], Math.max(p[0] + n, p[1])]; 
	}, [0,0])[1];
} 


