/*//////////////////////
build Stack -- using Array
技術上來說速度比Linked List快一點，因為記憶體就在旁邊
記憶體消耗比較Linked List小(還需要存pointer)
//////////////////////*/

class MyStack {
	constructor(){
		this.data = [];
	}
	push(item){
		this.data.push(item);
		return this;
	}
	pop(){
		this.data.pop();
		return this;
	}
	peek(){
		return this.data[this.data.length - 1];
	}
}

// const myStack1 = new MyStack();
// console.log(myStack1.peek());
// console.log(myStack1.push('google'));
// console.log(myStack1.push('udemy'));
// console.log(myStack1.push('discord'));
// console.log(myStack1.pop());
// console.log(myStack1.pop());
// console.log(myStack1.pop());

/*//////////////////////
build Stack -- using Linked List
有更多dynamic memory，不像Array 一定要預留好一個連續的記憶體
//////////////////////*/

class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class MyStack2 {
	constructor(){
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peek(){
		return this.top;
	}
	push(value){
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;
		if (this.bottom === null) {
			this.bottom = newNode;
		}
		this.length++;
		return this;
	}
	pop(){
		this.top = this.top.next;
		this.length--;
		if (this.length === 0) {
			this.bottom = null;
		}
		return this;
	}
	isEmpty(){
		if (this.length > 0) {
			return false;
		}else {
			return true;
		}
	}
}

// const myStack = new MyStack2();
// console.log(myStack.peek());
// console.log(myStack.push('google'));
// console.log(myStack.peek());
// console.log(myStack.push('Udemy'));
// console.log(myStack.peek());
// console.log(myStack.push('Discord'));
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

/*//////////////////////
build Queue -- using Linked List
Linked List可以有比較好的bigO(O(1))，Array如果delete第一個會需要O(n)
//////////////////////*/


class MyQueue {
	constructor(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	enqueue(value){
		const newNode = new Node(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}
	dequeue(){
		if (!this.first) {
			return null;
		}
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.length--;
		return this;
	}
	peek(){
		return this.first;
	}
}

const myQueue = new MyQueue();
console.log(myQueue.peek());
console.log(myQueue.enqueue('Joy'));
console.log(myQueue.enqueue('Matt'));
console.log(myQueue.enqueue('Pavel'));
console.log(myQueue.enqueue('Samir'));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());




