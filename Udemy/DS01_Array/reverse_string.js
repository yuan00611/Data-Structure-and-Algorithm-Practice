//Create a function that reverses a string

/*//////////////////////
My Answer
//////////////////////*/

function reverse(str) {
	let ans = '';
	for(let i = str.length-1; i >= 0; i--){
		ans += str[i];
	}
	return ans;
}

var intro = 'Hi, my name is Debbie!';
x = reverse(intro);
console.log('x', x);

/*//////////////////////
Andrei's Answer
//////////////////////*/
function reverse2(str) {
	//check input
	if(!str || str.length < 2 || typeof str !== 'string'){
		return 'hmm that is not good';
	}
	const backwards = [];
	const totalItems = str.length - 1;
	for(let i = totalItems; i >= 0; i--){
		backwards.push(str[i]);
	}

	return backwards.join('');
}

y = reverse2(intro);
console.log('y', y);

//built-in func
function reverse3(str){
	//check input
	if(!str || str.length < 2 || typeof str !== 'string'){
		return 'hmm that is not good';
	} 
	return str.split('').reverse().join('');
}

z = reverse3(intro);
console.log('z', z);

//ES6 syntax
const reverse4 = str => str.split('').reverse().join('');

a = reverse4(intro);
console.log('a', a);

//desctucture
const reverse5 = str => [...str].reverse().join('');

b = reverse5(intro);
console.log('b', b);









