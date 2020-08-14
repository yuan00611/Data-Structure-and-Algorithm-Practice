// Given a collection of intervals, merge all overlapping intervals.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

function merge(intervals) {
	if(!intervals) return intervals;
	let ans = [];
	intervals.sort((a,b) => a[0] - b[0]);
	for(let i = 0; i < intervals.length; i++){
		if (ans.length !== 0 && ans[ans.length - 1][1] >= intervals[i][0]) {
			let tmp = ans.pop();
			ans.push([tmp[0], Math.max(intervals[i][1], tmp[1])]);
		} else {
			ans.push(intervals[i]);
		}
	}
	return ans;
}

let arr = [[10,15],[1,3],[2,6],[8,10],[15,18]]
console.log(arr.sort((a,b) => a[0] - b[0]));

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,4],[2,3]]));








