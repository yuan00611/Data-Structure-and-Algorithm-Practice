// Given two strings s and t , write a function to determine 
// if t is an anagram of s.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? 
// How would you adapt your solution to such case?

function isAnagram(s, t) {
	return s.split('').sort().join('') === t.split('').sort().join(''));
}

var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    for (let c of t) {
        if (!counts[c]) return false;
        counts[c]--;
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

