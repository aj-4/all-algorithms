class EWGraph {
    constructor() {
        this.edges = [];
        this.vertices = [];      
    }
    addPoint(val = this.edges.length) {
        this.vertices.push(val);
    }
    addEdge(from, to, weight) {
        if (!this.edges[from]) this.edges[from] = [];
        if (!this.edges[to]) this.edges[to] = [];

        let edge = new Edge(from, to, weight);
        this.edges[from].push(new Edge(from, to, weight));
        this.edges[to].push(new Edge(from, to, weight));        
    }
    compare(edge1, edge2) {
        edge1.compareTo(edge2);
    }
}

class Edge {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
    either(){
        return this.from;
    }
    other(vertex) {
        if (vertex === this.from) return this.from;
        return this.to;
    }
    compareTo(that) {
        if (this.weight < that.weight) return -1;
        else if (this.weight > that.weight) return 1;
        else return 0;
    }
}

module.exports = EWGraph;