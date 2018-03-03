class Graph {
    constructor() {
        this.points = [];
    }
    addPt(val) {
        this.points.push(new Point(val));
    }
    addEdge(from, to) {
        this.points[from].edges.push(to);
    }
    topSort(){
        //postOrderStack
        const pOs = [];
        const marked = [];
        for (let pt of this.points) {
            if (!marked[pt.val]){
                this.DFS(pt.val, pOs, marked);
            }
        }
        return pOs.reverse();
    }
    DFS(val, pOs, marked){
        marked[val] = true;        
        for (let pt of this.points[val].edges) {
            if (!marked[pt]) {
                this.DFS(pt, pOs, marked);
            }
        }
        pOs.push(val);                                
    }
}

class Point {
    constructor(val) {
        this.val = val;
        this.edges = [];
    }
}

let graph = new Graph;
graph.addPt(0);
graph.addPt(1);
graph.addPt(2);
graph.addPt(3);
graph.addPt(4);
graph.addPt(5);
graph.addPt(6);

graph.addEdge(0, 1);
graph.addEdge(0, 5);
graph.addEdge(0, 2);
graph.addEdge(1, 4);
graph.addEdge(3, 6);
graph.addEdge(3, 2);
graph.addEdge(3, 5);
graph.addEdge(3, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 4);
graph.addEdge(6, 0);

console.log(graph.topSort());