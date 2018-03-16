const EWG = require('./EWUgraph');
const Q = require('../../data-structures/queue');
const PQ = require('../../data-structures/minHeap');
const UF = require('../../data-structures/unionFind');

let ewg = new EWG();
ewg.addPoint();
ewg.addPoint();
ewg.addPoint();
ewg.addPoint();

ewg.addEdge(0, 1, 5);
ewg.addEdge(0, 3, 10);
ewg.addEdge(1, 2, 2);
ewg.addEdge(2, 3, 5);
ewg.addEdge(3, 1, 4);

class MST {
    constructor(EWGraph) {
        this.edges = new Q;
        this.size = 0;
        this.prim(EWGraph);
    }
    *[Symbol.iterator]() {
        for (let edge of this.edges) {
            yield edge;
        }
    }
    printPath(){
        for (let path of this) {
            console.log(path);
        }
    }
    kruskal(graph){
        //add graph edges into min PQ by weight
        let pq = new PQ('weight');
        let uf = new UF(graph.vertices);
        for (let vertex of graph.edges) {
            for (let edge of vertex) {
                pq.add(edge);                
            }
        }
        
        while(!pq.isEmpty() && this.size < graph.vertices.length) {
            let edge = pq.rmMin();
            
            let v1 = edge.either();
            let v2 = edge.other();
            if (!uf.connected(v1, v2)) {
                uf.union(v1, v2);
                this.edges.enq(edge);
                this.size++;
            }
        }
        return this.edges;
    }
    prim(graph) {
        //starts from 0, takes shortest connected to graph
        let pq = new PQ('weight');
        let marked = [];
        for (let point in graph.edges) {
            marked.push(false);
        }
        this._visit(graph, 0, marked, pq);
        while(!pq.isEmpty()) {
            console.log('pq is', pq);
            
            let e = pq.rmMin();
            let v = e.either(), w = e.other();
            if (marked[v] && marked[w]) continue;
            this.edges.enq(e);
            if (!marked[v]) this._visit(graph, v, marked, pq);
            if (!marked[w]) this._visit(graph, w, marked, pq);            
        }

        return this.edges;
    }
    _visit(graph, v, marked, pq) {
        marked[v] = true;
        
        for (let edge of graph.edges[v]) {
            console.log('marked:', marked);
            
            console.log('edge:', marked[edge.other(v)]);            
            if (!marked[edge.other(v)]) {
                pq.add(edge);
            }
        }
    }
    weight(){
        const wt = 0;
        for (let edge of this) {
            wt+= edge.weight;
        }
        return wt;
    }
}

let mst = new MST(ewg);

mst.printPath();