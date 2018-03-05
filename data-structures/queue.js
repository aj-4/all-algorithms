const LL = require('./linkedList');

class Queue {
    constructor(){
        this.store = new LL();
    }
    enq(val) {
        this.store.addToTail(val);
    }
    dq() {
        return this.store.rmFromHead();
    }
}

module.exports = Queue;