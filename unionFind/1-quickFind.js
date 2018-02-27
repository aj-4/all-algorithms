
//quick find
//not optimized, quadratic time

class UF {
    constructor(n){
        this.ids = [];
        for (let i = 0; i < n; i++) {
            this.ids.push(i);
        }
    }
    union(num1, num2) {
        let id1 = this.ids[num1];
        let id2 = this.ids[num2];
        for (let i = 0; i < this.ids.length; i++) {
            if (this.ids[i] === id1) {
                this.ids[i] = id2;
            }
        }
    }
    connected(num1, num2) {
        return this.ids[num1] === this.ids[num2]
    }
}

//quick find tests
module.exports = UF;