// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. 
// Each operand may be an integer or another expression.

// Note:

// Division between two integers should truncate toward zero.
// The given RPN expression is always valid. 
// That means the expression would always evaluate to a result 
// and there won't be any divide by zero operation.

// Input: ["2", "1", "+", "3", "*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Input: ["4", "13", "5", "/", "+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// Output: 22

function evalRPN(tokens) {
	let num_stack = [];
	let ans;
	for(let i = 0; i < tokens.length; i++){
		if(parseInt(tokens[i])){
			num_stack.push(parseInt(tokens[i]));
		} else if (tokens[i] === '0') {
			num_stack.push(0);
		} else if(tokens[i] === '+') {
			let tmp = num_stack.pop() + num_stack.pop();
			num_stack.push(tmp);
		} else if(tokens[i] === '-') {
			let tmp1 = num_stack.pop();
			let tmp2 = num_stack.pop();
			num_stack.push(tmp2 - tmp1);
		} else if(tokens[i] === '*') {
			let tmp = num_stack.pop() * num_stack.pop();
			num_stack.push(tmp);
		} else if(tokens[i] === '/') {
			let tmp1 = num_stack.pop();
			let tmp2 = num_stack.pop();
			if (tmp2 / tmp1 >= 0) {
				num_stack.push(Math.floor(tmp2 / tmp1));
			} else {
				num_stack.push(Math.ceil(tmp2 / tmp1));
			}
		}
	}
	return num_stack[0];
}


console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
console.log(evalRPN(["0", "3", "/"]));
console.log(evalRPN(["4","-2","/","2","-3","-","-"]));
console.log(evalRPN(["-78","-33","196","+","-19","-","115","+","-","-99","/","-18","8","*","-86","-","-","16","/","26","-14","-","-","47","-","101","-","163","*","143","-","0","-","171","+","120","*","-60","+","156","/","173","/","-24","11","+","21","/","*","44","*","180","70","-40","-","*","86","132","-84","+","*","-","38","/","/","21","28","/","+","83","/","-31","156","-","+","28","/","95","-","120","+","8","*","90","-","-94","*","-73","/","-62","/","93","*","196","-","-59","+","187","-","143","/","-79","-89","+","-"]));


//https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/solution/javascriptti-jie-by-webson_leo/
const SIGN = {
    '*' : (a, b) => a * b,
    '/' : (a, b) => Math.trunc(a / b),
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b
}
var evalRPN = function(tokens) {
    const stack = [];
    tokens.forEach(item => {
        if (item in SIGN){
            const b = stack.pop();
            const a = stack.pop();
            const res = SIGN[item](a, b);
            stack.push(res);
        }
        else stack.push(Number(item));
    })
    return stack.pop();
};












