const strings = ['a', 'b', 'c', 'd'];

/*//////////////////////
介紹function
//////////////////////*/

//lookup
console.log(strings[0]); //O(1)

//push  
strings.push('e') //O(1)

//pop  
strings.pop(); //O(1)

//unshift 放在第一個 (insert)
strings.unshift('x');  //O(n)

//splice 插在中間，也可以刪掉一些東西(insert&delete)
strings.splice(2, 0, 'alien');  //O(n)

console.log(strings);

/*//////////////////////
build Array 
//////////////////////*/
class MyArray{
	constructor(){
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}
	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}
	pop(){
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}
	shiftItems(index) {
		for (let i = index; i < this.length - 1 ; i++) {
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length-1];
		this.length--;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}
}

const newArray = new MyArray();
x = newArray.push('hi');
newArray.push('I');
newArray.push('am');
newArray.push('Debbie');
newArray.push('!');
y = newArray.pop();
console.log(newArray);
console.log(x);
console.log(y);
console.log(newArray.get(3));
newArray.delete(0);
console.log(newArray);


