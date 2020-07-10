//Implement the following operations of a stack using queues.

//push(x) -- Push element x onto stack.
//pop() -- Removes the element on top of the stack.
//top() -- Get the top element.
//empty() -- Return whether the stack is empty.

//Example
// MyStack stack = new MyStack();
// stack.push(1);
// stack.push(2);  
// stack.top();   // returns 2
// stack.pop();   // returns 2
// stack.empty(); // returns false

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue1.length > 1) {
    	this.queue2.push(this.queue1.shift());
    }

    let pop = this.queue1.shift();
	while (this.queue2.length) {
		this.queue1.push(this.queue2.shift());
	}
	return pop;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while (this.queue1.length > 1) {
    	this.queue2.push(this.queue1.shift());
    }

    let peek = this.queue1.shift();
	while (this.queue2.length) {
		this.queue1.push(this.queue2.shift());
	}
	this.queue1.push(peek);
	return peek;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length ? false : true;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

 var obj = new MyStack();
 obj.push(1);
 obj.push(2);
 console.log(obj.queue1);
 console.log(obj.top());
 console.log(obj.queue1);
 console.log(obj.pop());
 console.log(obj.queue1);
 console.log(obj.empty());