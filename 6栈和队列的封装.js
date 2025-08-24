//  栈 先进后出
function Stack() {
  this.stack = [];
}

// 入栈
Stack.prototype.push = function (item) {
  this.stack.push(item);
};

// 出栈
Stack.prototype.pop = function () {
  return this.stack.pop();
};
// 获取栈顶元素
Stack.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};

// 获取栈的大小
Stack.prototype.size = function () {
  return this.stack.length;
};

// 栈是否为空
Stack.prototype.isEmpty = function () {
  return this.stack.length === 0;
};

const test = new Stack();
test.push(1);
test.push(2);
test.push(3);
// console.log(test.peek());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.size());
// console.log(test.isEmpty());
// console.log(test.stack);

// 队列 先进先出
function Queue() {
  this.queue = [];
}
// 入队
Queue.prototype.enqueue = function (item) {
  this.queue.push(item);
};
// 出队
Queue.prototype.dequeue = function () {
  return this.queue.shift();
};
// 获取队列大小
Queue.prototype.size = function () {
  return this.queue.length;
};
// 队列是否为空
Queue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};
// 队列的前端元素
Queue.prototype.front = function () {
  return this.queue[0];
};
// 队列的后端元素
Queue.prototype.back = function () {
  return this.queue[this.queue.length - 1];
};

const test2 = new Queue();
test2.enqueue(1);
test2.enqueue(2);
test2.enqueue(3);
console.log(test2.front());
console.log(test2.back());
console.log(test2.size());
console.log(test2.isEmpty());
console.log(test2.queue);
console.log(test2.dequeue());
