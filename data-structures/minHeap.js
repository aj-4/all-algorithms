class MinHeap {
    constructor(sortBy) {
        this.store = [null];
        this.sortBy = sortBy;
    }
    add(node){
        this.store.push(node);
        this._bubble();
    }
    isEmpty() {
        return this.store.length < 2;
    }
    min() {
        return this.store[1];
    }
    rmMin(){
        let temp = this.store[1];
        this.store[1] = this.store[this.store.length - 1];
        this.store[this.store.length - 1] = temp;
        let node = this.store.pop();
        this._sink();
        return node;
    }
    _sink(on = 1){
        let onNode = this.store[on];
        let onVal = onNode ? this.store[on][this.sortBy] : Number.MIN_SAFE_INTEGER;

        let c1i = on * 2;
        let c2i = on * 2 + 1;
        let c1 = this.store[c1i];
        let c2 = this.store[c2i];
        let c1val = c1 ? c1[this.sortBy] : Number.MAX_SAFE_INTEGER;
        let c2val = c2? c2[this.sortBy] : Number.MAX_SAFE_INTEGER;

        if (c1val < onVal || c2val < onVal) {
            if (c1val < c2val) {
                this.store[c1i] = onNode;
                this.store[on] = c1;
                this._sink(c1i);                
            } else {
                this.store[c2i] = onNode;
                this.store[on] = c2;                
                this._sink(c2i);          
            }
        }
    }  
    _bubble(on = this.store.length - 1){
        
        let parent = on >> 1;
        if (parent < 1) return;
        let p = this.store[parent];
        let pval = p[this.sortBy];

        let onNode = this.store[on];
        let onVal = this.store[on][this.sortBy];

        if (pval > onVal) {
            this.store[parent] = onNode;
            this.store[on] = p;
            this._bubble(parent);
        }
    }
}

// //test
// let mh = new MinHeap;
// mh.add(5);
// mh.add(6);
// mh.add(2);
// mh.add(8);
// mh.add(4);
// mh.add(9);
// mh.add(3);
// mh.add(1);

// console.log(mh.min());
// console.log(mh.rmMin());
// console.log(mh.rmMin());
// console.log(mh.rmMin());

module.exports = MinHeap;