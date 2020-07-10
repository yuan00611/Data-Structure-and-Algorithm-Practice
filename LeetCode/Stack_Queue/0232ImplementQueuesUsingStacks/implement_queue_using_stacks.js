//Implement the following operations of a queue using stacks.

//push(x) -- Push element x to the back of queue.
//pop() -- Removes the element from in front of queue.
//peek() -- Get the front element.
//empty() -- Return whether the queue is empty.

//Example
//MyQueue queue = new MyQueue();
//queue.push(1);
//queue.push(2);  
//queue.peek();  // returns 1
//queue.pop();   // returns 1
//queue.empty(); // returns false

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.stack1.length > 1) {
    	this.stack2.push(this.stack1.pop());
    }
    let pop = this.stack1.pop();
    while (this.stack2.length) {
    	this.stack1.push(this.stack2.pop());
    }
    return pop;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.stack1.length > 1) {
    	this.stack2.push(this.stack1.pop());
    }
    let peek = this.stack1.pop();
    this.stack1.push(peek);
    while (this.stack2.length) {
    	this.stack1.push(this.stack2.pop());
    }
    return peek;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
	return this.stack1.length ? false : true;
};

 
//Your MyQueue object will be instantiated and called as such:
  var obj = new MyQueue();
  console.log(obj.stack1);
  obj.push(1);
  obj.push(2);
  console.log(obj.stack1);
  console.log(obj.peek());
  console.log(obj.pop());
  console.log(obj.stack1);
  console.log(obj.empty());
  console.log(obj.pop());
  console.log(obj.stack1);
  console.log(obj.empty());

 