// Given two arrays, write a function to compute their intersection.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// *Each element in the result should appear as many times as it shows in 
//  both arrays.
// *The result can be in any order.

// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

function intersect(nums1, nums2) {
	let dict = {};
	for(let i = 0; i < nums1.length; i++){
		if (dict.hasOwnProperty(nums1[i])) {
			dict[nums1[i]]++;
		} else {
			dict[nums1[i]] = 1;
		}
	}
	let ans = [];
	for(let j = 0; j < nums2.length; j++){
		if(dict.hasOwnProperty(nums2[j]) && dict[nums2[j]] > 0){
			dict[nums2[j]]--;
			ans.push(nums2[j]);
		}
	}
	return ans;
}

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));













