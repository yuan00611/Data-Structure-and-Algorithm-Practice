//You are climbing a stair case. It takes n steps to reach to the top.

//Each time you can either climb 1 or 2 steps. 
//In how many distinct ways can you climb to the top?

//Input: 2
//Output: 2
//Explanation: There are two ways to climb to the top.
//1. 1 step + 1 step
//2. 2 steps

//Constraints: 1 <= n <= 45

//fibonacci!! 1 2 3 5 8 13 21 34

function climbStairs() {
	let cache = {};
	return function climb(n) {
		if(n in cache) {
	    	return cache[n];
	    } else {
	    	if (n <= 3) {
	    		return n;
	    		cache[n] = n;
	    	} else {
	    		cache[n] = climb(n-1) + climb(n-2);
	    		return cache[n];
	    	}
	    }
	}
};

const f = climbStairs();
console.log(f(10));

function climbStairs2(n) {
	if (n <= 3) {
		return n;
	} else {
		ans = climbStairs2(n-1) + climbStairs2(n-2);
		return ans;
	}
};

console.log(climbStairs2(10));


function climbStair3(n) {
	if (n < 3) {
		return n;
	}
	ans = [1, 2, 3];
	for(let i = 4 ; i <= n; i++){
		let x = ans[ans.length - 1] + ans[ans.length - 2];
		ans.push(x);
	}
	return ans.pop();
}

console.log(climbStair3(10));

let seen = {};
var climbStairs4 = function(n) {
    if(n < 3) return n;
    if(!(n in seen)) {
        seen[n] = climbStairs(n-1) + climbStairs(n-2);
    }
    return seen[n];
};



