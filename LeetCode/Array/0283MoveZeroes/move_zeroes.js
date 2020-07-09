//Given an array nums, write a function to move all 0's to the end of it 
//while maintaining the relative order of the non-zero elements.

//Input: [0,1,0,3,12]
//Output: [1,3,12,0,0]

//1. You must do this in-place without making a copy of the array.
//2. Minimize the total number of operations.

function moveZeroes(nums) {
	let count = 0;
	//check contain zero or not
	if (!nums.includes(0)) {
		return nums;
	} else {
		while (nums.indexOf(0) !== -1) {
			nums.splice(nums.indexOf(0), 1);
			count++;
		}
		for(let i = 0; i < count;i++){
			nums.push(0);
		}
	}
	return nums;

}

var number1 = [0,1,0,3,12];
console.log('1', moveZeroes(number1))

function moveZeroes2(nums) {
    for(let i = nums.length; i >= 0; i--){
		if(nums[i] === 0){
			nums.splice(i, 1);
			nums.push(0);
		}
    }
    return nums;
};

var number2 = [0,1,0,3,12];
console.log('2', moveZeroes2(number2));



