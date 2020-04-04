function MyCircularQueue(capacity) {
    this.queue = [];
    this.capacity = capacity + 1;
    this.h = this.t = 0;
    this.Front = function() {
        if (this.isEmpty()) return -1;
        return this.queue[this.h];
    };
    this.Rear = function() {
        if (this.isEmpty()) return -1;
        return this.queue[this.t - 1];
    };
    this.enQueue = function(value) {
        if (this.isFull()) return false;
        this.t %= this.capacity;
        this.queue[this.t] = value;
        this.t++;
        return true;
    };
    this.deQueue = function() {
        if (this.isEmpty()) return false;
        this.h++;
        this.h %= this.capacity;
        return true;
    };
    this.isEmpty = function() {
        return this.h === this.t;
    };
    this.isFull = function() {
        return (this.t + 1) % this.capacity === this.h;
    };
}

circularQueue = new MyCircularQueue(3); // set the size to be 3
console.log(circularQueue.enQueue(1));  // return true
console.log(circularQueue.h, circularQueue.t);
console.log(circularQueue.enQueue(2));  // return true
console.log(circularQueue.h, circularQueue.t);
console.log(circularQueue.enQueue(3));  // return true
console.log(circularQueue.h, circularQueue.t);
console.log(circularQueue.enQueue(4));  // return false, the queue is full
console.log(circularQueue.h, circularQueue.t);
console.log(circularQueue.Rear());  // return 3
console.log(circularQueue.isFull());  // return true
console.log(circularQueue.deQueue());  // return true
console.log(circularQueue.enQueue(4));  // return true
console.log(circularQueue.Rear());  // return 4