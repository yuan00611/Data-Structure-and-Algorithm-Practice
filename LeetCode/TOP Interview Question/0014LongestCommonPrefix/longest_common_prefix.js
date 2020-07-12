//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

//Input: ["flower","flow","flight"]
//Output: "fl"

//Input: ["dog","racecar","car"]
//Output: ""

//All given inputs are in lowercase letters a-z.

function longestCommonPrefix(strs) {
	if (!strs.length) {
		return '';
	}
	let min = Number.MAX_SAFE_INTEGER;
	let index = 0;
	for(let i = 0; i < strs.length; i++) {
		if (strs[i].length < min) {
			min = strs[i].length;
			index = i;
		}
	}
	prefix = strs[index];
	for(let i = 0; i < strs.length; i++) {
		for(let j = 0; j <  strs[i].length; j++) {
			if (strs[i][j] !== prefix[j]) {
				prefix = prefix.substring(0, j);
			}
		}
	}
	return prefix;
}

arr1 = ["flower","flow","flight"];
arr2 = ["dog","racecar","car"];
arr3 = ["aa","a"];
console.log(longestCommonPrefix(arr1));
console.log(longestCommonPrefix(arr2));
console.log(longestCommonPrefix(arr3));

var longestCommonPrefix2 = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};

console.log(longestCommonPrefix2(arr1));
console.log(longestCommonPrefix2(arr2));
console.log(longestCommonPrefix2(arr3));
