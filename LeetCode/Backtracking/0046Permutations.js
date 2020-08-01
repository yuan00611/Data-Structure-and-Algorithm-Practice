// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]


var permute = function(nums) {
  let results = [];

  let permutations = (current, remaining) => {
    if(remaining.length <= 0) results.push(current.slice());
    else {
      for(let i = 0; i < remaining.length; i++) { // Loop through remaining elements
        current.push(remaining[i]); // Insert the iTH element onto the end of current
        permutations(current.slice(), remaining.slice(0, i).concat(remaining.slice(i+1))); // Recurse with inserted element removed
        current.pop(); // Remove last inserted element for next iteration
      }
    }
  };

  permutations([], nums);
  return results;
};

// var permute = function(nums) {
// 	output = [];
// 	function backtrack(path){
// 		if (path.length === nums.length) {
// 			output.push(path);
// 		}
// 		for(let n of nums){
// 			if (!path.includes(n)) {
// 				path.push(n);
// 				backtrack(path.slice());
// 				path.pop();
// 			}
// 		}
// 	}
// 	backtrack([]);
// 	return output;
// }



console.log(permute([1,2,3]));




