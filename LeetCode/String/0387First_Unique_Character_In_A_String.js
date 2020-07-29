//Given a string, find the first non-repeating character in it and return its index. 
//If it doesn't exist, return -1.

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

function firstUniqChar(s) {
	for(let i = 0; i < s.length; i++){
		if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
			return s.indexOf(s[i]);
		}
	}
	return -1;
}

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));