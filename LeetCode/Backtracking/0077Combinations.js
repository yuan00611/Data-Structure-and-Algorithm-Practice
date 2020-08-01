// Given two integers n and k, return all possible combinations 
// of k numbers out of 1 ... n.

// Example:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// var combine = function(n, k) {
// 	let num_array = Array.from(Array(n), (_, i) => i + 1);
//     let output = [];
//     function backtrack(combination, other_num) {
//     	if (combination.length === k) {
//     		output.push(combination);
//     	} else {
//     		for(let i = 0; i < other_num.length; i++){
//     			if (combination.length === 0 || combination[combination.length - 1] < other_num[i]) {
//     				combination.push(other_num[i]);
// 	    			backtrack(combination.slice(), other_num.slice(0,i).concat(other_num.slice(i+1)));
// 	    			combination.pop();
//     			}
//     		}
//     	}
//     }
// 	backtrack([], num_array);
// 	return output;
// };

var combine = function(n, k) {
    let output = [];
    function backtrack(combination, index) {
    	if (combination.length === k) {
    		output.push(combination);
    	} else {
    		for(let i = index; i <= n; i++){
				combination.push(i);
    			backtrack(combination.slice(), i+1);
    			combination.pop();
    		}
    	}
    }
	backtrack([], 1);
	return output;
};


// var combine = function(n, k) {
//     const combinations = [];
    
//     const build = (arr, index) => {
//         if (arr.length === k) return combinations.push(arr.slice());
        
//         for (let i = index; i <= n; i++) {
//             arr.push(i);
//             build(arr, i + 1);
//             arr.pop();
//         }
//     };
    
//     build([], 1);
    
//     return combinations;
// };

console.log(combine(4, 2));




