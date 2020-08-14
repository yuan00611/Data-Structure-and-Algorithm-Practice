// Given two arrays, write a function to compute their intersection.

// Input: nums1 = c, nums2 = [2,2]
// Output: [2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

function intersection(nums1, nums2){
	let set1 = new Set(nums1);
	let set2 = new Set(nums2);
	let ans = [];
	for(let i of set1){
		if(set2.has(i)){
			ans.push(i);
		}
	}
	return ans;
}

console.log(intersection([4,9,5], [9,4,9,8,4]));











