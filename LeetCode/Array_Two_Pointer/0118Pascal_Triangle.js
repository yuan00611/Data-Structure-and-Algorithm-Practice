//Given a non-negative integer numRows, generate the first numRows of 
//Pascal's triangle.

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

function generate(numRows){
	if (numRows === 0) {
		return [];
	} else if (numRows === 1) {
		return [[1]];
	} else if (numRows === 2) {
		return [[1], [1,1]];
	}
	ans = [[1], [1,1]];
	for(let i = 3; i <= numRows; i++){
		let row = [1,1];
		for(let j = 1; j <= i - 2; j++){
			row.splice(j, 0, ans[ans.length - 1][j-1] + ans[ans.length - 1][j]);
		}
		ans.push(row);
	}
	return ans;
}

console.log(generate(0));
console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
console.log(generate(5));
console.log(generate(6));
console.log(generate(7));