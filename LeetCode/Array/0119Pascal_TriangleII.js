// Given a non-negative index k where k ≤ 33, return the kth index row 
// of the Pascal's triangle.

// Note that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly 
// above it.

// Input: 3
// Output: [1,3,3,1]

function getRow(rowIndex) {
	ans = [[1], [1,1]];
	for(let i = 3; i <= rowIndex+1; i++){
		let row = [1,1];
		for(let j = 1; j <= i - 2; j++){
			row.splice(j, 0, ans[ans.length - 1][j-1] + ans[ans.length - 1][j]);
		}
		ans.push(row);
	}
	return ans[rowIndex];
}

console.log(getRow(0));
console.log(getRow(3));
console.log(getRow(4));



