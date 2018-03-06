class UF {
    constructor(vertices) {
        this.ids = vertices;
        this.sizes = [];
        for (let i = 0; i < this.ids.length; i++) {
            this.sizes.push(1);
        }
    }
    root(num) {
        //gets the route of a given path
        while (this.ids[num] !== num) {
            num = this.ids[num];
        }
        return this.ids[num];
    }
    union(val1, val2) {
        let root1 = this.root(val1);
        let root2 = this.root(val2);
        if (root1 === root2) return;
        if (this.sizes[root1] > this.sizes[root2]) {
            this.ids[val2] = this.ids[val1];
            this.sizes[root1] += this.sizes[root2]
        } else {
            this.ids[val1] = this.ids[val2];  
            this.sizes[root2] += this.sizes[root1]            
        }
    }
    connected(val1, val2) {
        return this.ids[val1] === this.ids[val2];
    }
}

module.exports = UF;