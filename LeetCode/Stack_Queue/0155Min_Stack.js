// Design a stack that supports push, pop, top, and retrieving the minimum element 
// in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

//https://leetcode-cn.com/problems/min-stack/solution/zui-xiao-zhan-by-leetcode-solution/

var MinStack = function() {
    this.data = [];
    this.min = [Number.MAX_SAFE_INTEGER];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x);
    this.min.push(Math.min(x, this.min[this.min.length-1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.data.pop();
    this.min.pop();    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};

minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // return -3
minStack.pop();
console.log(minStack.top());   // return 0
console.log(minStack.getMin());// return -2







