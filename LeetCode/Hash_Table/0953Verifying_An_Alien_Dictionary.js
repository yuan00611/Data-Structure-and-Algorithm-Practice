// In an alien language, surprisingly they also use english lowercase letters, 
// but possibly in a different order. 
// The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, 
// and the order of the alphabet, return true if and only if the given words 
// are sorted lexicographicaly in this alien language.


// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, 
// then the sequence is sorted.

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, 
// then words[0] > words[1], hence the sequence is unsorted.

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, 
// and the second string is shorter (in size.) 
// According to lexicographical rules "apple" > "app", because 'l' > '∅', 
// where '∅' is defined as the blank character which is less than any other character

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.

const isAlienSorted = (words, order) => {
    let charPosition = new Map()
    for(let position = 0; position < order.length; position++){
        let char = order[position]
        charPosition.set(char, position)
    }
    for(let i = 1; i < words.length; i++){
        let prev = words[i-1], curr = words[i]
        if(charPosition.get(prev[0]) > charPosition.get(curr[0]))return false
        else if(prev[0] === curr[0]){
            let pointer = 1
            while(prev[pointer] === curr[pointer])pointer++
            if(curr[pointer] === undefined)return false
            if(charPosition.get(prev[pointer]) > charPosition.get(curr[pointer]))return false
        }
    }
    return true
};


// 作者：pengyouyi
// 链接：https://leetcode-cn.com/problems/verifying-an-alien-dictionary/solution/yan-zheng-wai-xing-yu-ci-dian-by-pengyouyi/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var isAlienSorted = function(words, order) {
    let map = new Array(26);
    for(let i = 0; i < order.length; i++){
        map[order[i].charCodeAt()-97] = i;
    }
    for(let i = 1; i < words.length; i++){
        if(map[words[i][0].charCodeAt()-97] <= map[words[i-1][0].charCodeAt()-97]) return false;
    }
    return true;
};

// function isAlienSorted(words, order) {
// 	let charOrder = {'': 0};
// 	for(let i = 0; i < order.length; i++){
// 		charOrder[order[i]] = i+1;
// 	}
// 	return words.reduce((prev, next) => {
// 		let i = 0;
// 		while(prev[i] && next[i]){
// 			console.log(prev[i], next[i]);
// 			console.log(charOrder[prev[i]], charOrder[next[i]]);
// 			if (charOrder[prev[i]] > charOrder[next[i]]) {
// 				return false;
// 			}  else if (charOrder[prev[i]] === charOrder[next[i]]) {
// 				i++;
// 			} else {
// 				break;
// 			}
// 		}
// 		if (next[i] === undefined) {
// 			return false;
// 		}
// 		if (charOrder[prev[i]] > charOrder[next[i]]) {
// 			return false;
// 		}
// 		return true;
// 	});
// }

console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"));












