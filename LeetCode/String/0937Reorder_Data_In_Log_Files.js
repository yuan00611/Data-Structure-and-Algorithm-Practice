//You have an array of logs.  Each log is a space delimited string of words.

// For each log, the first word in each log is an alphanumeric identifier.  

// Then, either:
// Each word after the identifier will consist only of lowercase letters, or;
// Each word after the identifier will consist only of digits.
// We will call these two varieties of logs letter-logs and digit-logs.  
// It is guaranteed that each log has at least one word after its identifier.

// Reorder the logs so that all of the letter-logs come before any digit-log.  
// The letter-logs are ordered lexicographically ignoring identifier, with the 
// identifier used in case of ties.  
// The digit-logs should be put in their original order.

// Return the final order of the logs.

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

// 0 <= logs.length <= 100
// 3 <= logs[i].length <= 100
// logs[i] is guaranteed to have an identifier, and a word after the identifier.

function reorderLogFiles(logs) {
	let dig = [];
	let lett = [];
	for(let i = 0; i < logs.length; i++){
		let lastCode = logs[i][logs[i].length - 1].charCodeAt();
		if (lastCode >= 97 && lastCode <= 122) {
			lett.push(logs[i]);
		}else {
			dig.push(logs[i]);
		}
	}
	//把前面貼到後面
	lett.sort((a, b) => {
	    a = a.substring(a.indexOf(' ') + 1) + a.substring(0, a.indexOf(' '))
	    b = b.substring(b.indexOf(' ') + 1) + b.substring(0, a.indexOf(' '))
	    return a.localeCompare(b)
  })
	let ans = lett.concat(dig);
	return ans;
}

logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];
console.log(reorderLogFiles(logs));


console.log(logs[0][logs[0].indexOf(' ')+1]);






