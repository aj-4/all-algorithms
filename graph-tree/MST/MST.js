const EWG = require('./EWUgraph');
const PQ = require('../../data-structures/minHeap');

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
        this.edges = [];
        this.kruskal(EWGraph);
    }
    *[Symbol.iterator](){

    }
    kruskal(graph){
        let pq = new PQ('weight');
        for (let vertex of graph.edges) {
            for (let edge of vertex) {
                pq.add(edge);                
            }
        }
    }
    prim(graph) {
        
    }
    weight(){
        const wt = 0;
        for (let edge of this) {
            wt+= edge.weight;
        }
        return wt;
    }
}

new MST(ewg);
