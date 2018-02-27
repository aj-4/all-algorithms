
//weighted quick union
//will balance to put the smaller tree below
//improvement to log n

//path compression
//points all nodes to the grandparent

class weightedUF {
    constructor(n) {
        this.ids = [];
        for (let i = 0; i < n; i++) {
            this.ids.push(i);
        }
        this.sz = Array(n);
    }
    root(num) {
        while (this.ids[num] !== num) {
            this.ids[num] = this.ids[this.ids[num]]
            num = this.ids[num];
        }
        return num;
    }
    union(num1, num2) {
        let id1 = this.root(num1);
        let id2 = this.root(num2);
        this.ids[id1] = this.ids[id2];
        if (id1 === id2) return;
        if (this.sz[id1] < this.sz[id2]) { this.ids[id1] = id2; }
        else { this.ids[id2] = id1 }
    }
    connected(num1, num2) {
        return this.root(num1) === this.root(num2);
    }
}

//quick find tests
module.exports = weightedUF;