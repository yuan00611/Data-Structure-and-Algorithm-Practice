//Given a 32-bit signed integer, reverse digits of an integer.

//Input: 123
//Output: 321

//Input: -123
//Output: -321

//Input: 120
//Output: 21

function reverse(x) {
	if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31) + 1) {
		return 0;
	}
	ans = [];
	if (x < 0) {
		ans.push('-');
	}
	let x_s = Math.abs(x).toString();
	for(let i = x_s.length - 1; i >= 0 ; i--){
		ans.push(x_s[i]);
	}
	return parseInt(ans.join(''));
}


console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

var reverse2 = function(x) {
  const absReversed = Math.abs(x).toString().split('').reverse().join('');
  if (absReversed > 2**31) return 0;
  return absReversed * Math.sign(x);
};




