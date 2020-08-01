// Given a string containing digits from 2-9 inclusive, return all possible 
// letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. 
// Note that 1 does not map to any letters.

function letterCombinations(digits) {
	if (!digits) { return []; }
    const strMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let result = [""]; 
    for(let num of digits){
    	let nextResult = [];
    	let str = strMap[num];
    	for(let t of result){
    		for(let s of str) {
    			nextResult.push(t + s);
    			console.log(nextResult);
    		}
    	}
    	result = nextResult;
    }
    return result;
}

console.log(letterCombinations("23"));

//https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/guan-fang-jie-ti-si-lu-by-tian-bai-cai/
var letterCombinations = function(digits) {
    var phone = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    var output = []
    function backtrack(combination, next_digits) {
        // 如果没有更多的数字去检查
        if(next_digits.length === 0) {
            // combination已经完成
            output.push(combination)
        }
        // 如果还有数字则去检查
        else {
            // 迭代map中所有的字母
            // 下一个可用的数字
            for(let letter of phone[next_digits[0]]) {
                // 把当前的字母插入到combination中
                // 并且继续到下一个数字
                backtrack(combination + letter, next_digits.substring(1))
            }
        }
    }
    if(digits) {
        backtrack('', digits)
    }
    return output;
};












