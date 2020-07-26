// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as 
// one sorted array.

// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) 
// to hold additional elements from nums2.

// Constraints:
// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n

// function merge(nums1, m, nums2, n) {
// 	let p1 = 0;
// 	let p2 = 0;
// 	while(p1 < m + n) {
// 		if (p1 < m && p2 < n) {
// 			if (nums1[p1] >= nums2[p2]) {
// 				nums1.splice(p1, 0, nums2[p2]);
// 				nums1.pop();
// 				p2++;
// 				m++;
// 			} else {
// 				p1++;
// 			}
// 		} else {
// 			nums1.splice(p1, 0, nums2[p2]);
// 			nums1.pop();
// 			p1++;
// 			p2++;
// 		}
// 	}
// 	return nums1;
// }

//https://leetcode.com/problems/merge-sorted-array/discuss/29501/JavaSCript-Solution

function merge(nums1, m, nums2, n) {
    var x = 0,
        y = 0;
    
    nums1.splice(m, nums1.length);
    nums2.splice(n, nums2.length);
    
    while(y < n){
        if(nums2[y] < nums1[x] || nums1[x] === undefined){
            nums1.splice(x, 0, nums2[y]);
            x++;
            y++;    
        } else {
            x++;
        }
    }
    return nums1;
};

nums1 = [1,2,3,0,0,0];
m = 3;
nums2 = [2,5,6];
n = 3;
console.log(merge(nums1, m, nums2, n));

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
console.log(merge(nums1, m, nums2, n));


nums1_1 = [-1,0,0,3,3,3,0,0,0];
m_1 = 6;
nums2_1 = [1,2,2];
n_1 = 3;
console.log(merge(nums1_1, m_1, nums2_1, n_1));



