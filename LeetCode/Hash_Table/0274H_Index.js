// Given an array of citations (each citation is a non-negative integer) 
// of a researcher, write a function to compute the researcher's h-index.

// According to the definition of h-index on Wikipedia: 
// "A scientist has index h if h of his/her N papers have at least h citations 
// each, and the other N − h papers have no more than h citations each."

// Input: citations = [3,0,6,1,5]
// Output: 3 
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total 
// 			 and each of them had received 3, 0, 6, 1, 5 
// 			 citations respectively. 
//              Since the researcher has 3 papers with at least 3 citations 
//              each and the remaining two with no more than 3 citations each, 
//              her h-index is 3.
// Note: If there are several possible values for h, the maximum one 
// is taken as the h-index.

function hIndex(citations){
	if (citations.length === 0) {
		return 0;
	}
	citations.sort((a,b) => a - b);
	let ans = 0;
	for(let i = 0; i < citations.length; i++){
		if (citations[i] === citations.length - i && citations[i+1] > citations.length - i) {
			ans = citations[i];
			return ans;
		} else if (citations[i] > citations.length - i) {
			ans = citations.length - i;
			return ans;
		} else if (citations[i] === citations.length - i) {
			ans = citations[i];
			return ans;
		}
	}
	return ans;
}

//https://leetcode-cn.com/problems/h-index/solution/jsshuang-bai-jie-fa-by-ghter123/
var hIndex = function (citations) {
    citations = citations.sort((a, b) => a - b)
    let maxH = 0
    for (let i = 0; i < citations.length; i++) {
        let temp = 0
        if (citations[i] <= citations.length - i) {
            temp = citations[i]
        } else {
            temp = citations.length - i
        }
        if (maxH < temp) maxH = temp
    }
    return maxH
};


console.log(hIndex([3,0,6,1,5]));
console.log(hIndex([100]));
console.log(hIndex([0,0,4,4]));















