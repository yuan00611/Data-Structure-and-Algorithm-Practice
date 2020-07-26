//Given an array nums of n integers, are there elements a, b, c in nums 
//such that a + b + c = 0? 
//Find all unique triplets in the array which gives the sum of zero.

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

//排序＋雙指針
//去重複很重要！
//https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/

function threeSum(nums) {
	
	ans = [];
	nums.sort((a,b) => a-b);
	
	for(let i = 0; i < nums.length ; i++) {
		if (nums[i] > 0) {
			break;
		}
		if(i > 0 && nums[i] == nums[i-1]) continue;
		p1 = i+1;
		p2 = nums.length - 1;
		while(p1 < p2) {
			if(nums[i] + nums[p1] + nums[p2] > 0){
				p2 --;
			} else if(nums[i] + nums[p1] + nums[p2] < 0) {
				p1++;
			} else {
				ans.push([nums[i], nums[p1], nums[p2]]);
				while(p1 < p2 && nums[p1] == nums[p1+1]) p1++;
				while(p1 < p2 && nums[p2] == nums[p2-1]) p2--;
				p1++;
				p2--;
			}
		}	
	}
	return ans;
}

a = [[0,0,0]]
// console.log(a.indexOf([0,0,0]))

console.log(threeSum([0,0,0,0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2,0,1,1,2]));
// console.log([-1, 0, 1, 2, -1, -4].sort((a,b)=>a-b));




