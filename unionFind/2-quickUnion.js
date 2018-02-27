
//quick find
//not optimized, quadratic time

class quickUnionUF {
    constructor(n) {
        this.ids = [];
        for (let i = 0; i < n; i++) {
            this.ids.push(i);
        }
    }
    root(num) {
        while (this.ids[num] !== num) {
            num = this.ids[num];
        }
        return num;
    }
    union(num1, num2) {
        let id1 = this.root(num1);
        let id2 = this.root(num2);
        this.ids[id1] = this.ids[id2];
    }
    connected(num1, num2) {
        return this.root(num1) === this.root(num2);
    }
}

//quick find tests
module.exports = quickUnionUF;