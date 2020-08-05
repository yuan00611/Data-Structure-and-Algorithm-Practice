// Given an array of strings, group anagrams together.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note:
// All inputs will be in lowercase.
// The order of your output does not matter.

function groupAnagrams(strs) {
	let ans = [];
	let count = 0;
	let dict = {};
	for(let i = 0; i < strs.length; i++){
		if (!dict.hasOwnProperty(strs[i].split("").sort().join(''))) {
			dict[strs[i].split("").sort().join('')] = count;
			ans.push([]);
			ans[count].push(strs[i]);
			count++;
		} else {
			ans[dict[strs[i].split("").sort().join('')]].push(strs[i]);
		}
	}
	return ans;
}

//https://leetcode-cn.com/problems/group-anagrams/solution/liang-chong-fang-fa-ding-yi-jian-zhi-by-jingyuanya/
var groupAnagrams = function(strs) {
    let res = {};
    for(let i=0;i<strs.length;i++){
        let s = strs[i].split('').sort().join('');
        if(!res[s]){
            res[s] = [];
        }
        res[s].push(strs[i])
    }
    return Object.values(res);
};

var groupAnagrams = function(strs) {
    let res = {},
        primes = [3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103 ];
    for(let i=0;i<strs.length;i++){
        let key = 1;
        for(let j=0;j<strs[i].length;j++){
            key *= primes[strs[i].charCodeAt(j)-97];
        }
        if(!res[key]){
            res[key] = [];
        }
        res[key].push(strs[i])
    }
    return Object.values(res);
};


strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));