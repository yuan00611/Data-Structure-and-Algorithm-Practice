function TwoSum(nums, target) {
	dic = {};
	for(let i = 0; i < nums.length; i++){
		if (dic.hasOwnProperty(nums[i])) {
			return [dic[nums[i]], i];
		} else {
			dic[target - nums[i]] = i;
		}
	}
}

console.log(TwoSum([2,7,11,15], 9));