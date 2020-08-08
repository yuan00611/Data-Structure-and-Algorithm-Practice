// Given an absolute path for a file (Unix-style), simplify it. 
// Or in other words, convert it to the canonical path.

// In a UNIX-style file system, a period . refers to the current directory. 
// Furthermore, a double period .. moves the directory up a level.

// Note that the returned canonical path must always begin with a slash /, 
// and there must be only a single slash / between two directory names. 
// The last directory name (if it exists) must not end with a trailing /. 
// Also, the canonical path must be the shortest string representing 
// the absolute path.

// Input: "/home/"
// Output: "/home"

// Input: "/../"
// Output: "/"

// Input: "/home//foo/"
// Output: "/home/foo"

// Input: "/a/./b/../../c/"
// Output: "/c"

// Input: "/a/../../b/../c//.//"
// Output: "/c"

// Input: "/a//b////c/d//././/.."
// Output: "/a/b/c"

function simplifyPath(path) {
	let stack = [];
	let p = path.split('/');
	for(let i of p){
		if (i === '' || i === '.') {
			continue;
		} else if (i === '..') {
			stack.pop();
		} else {
			stack.push(i);
		}
	}
	return '/' + stack.join('/');
}


//https://leetcode-cn.com/problems/simplify-path/solution/71-simplify-path-ti-jie-javascript-by-raymond-yan/
// var simplifyPath = function(path) {
//     const stack = [];
//     const pathArr = path.split('/');
    
//     for (let item of pathArr) {
//         if (item === '' || item === '.') {
//             continue;
//         } else if (item === '..') {
//             stack.pop();
//         } else {
//             stack.push(item);
//         }
//     }

//     return '/' + stack.join('/');
// };

console.log(simplifyPath('/a/./b/../../c/'));
