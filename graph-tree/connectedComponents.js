class Graph {
    constructor() {
        this.points = [];
    }
    addPt(value) {
        this.points.push(new Point(value));
    }
    addEdge(from, to) {
        this.points[from].edges.push(to);
        this.points[to].edges.push(from);
    }
    CC() {
        const marked = [];
        const id = [];
        let count = 0;
        for (let point of this.points) {
            if (!marked[point.value]) {
                id[point.value] = count;                
                this.DFS(point.value, marked, id, count);
                count++                
            }
        }
        return id;
    }
    DFS(point, marked, id, count) {
        id[point] = count;
        marked[point] = true;
        for (let conn of this.points[point].edges) {
            if (!marked[conn]) {
                this.DFS(conn, marked, id, count);
            }
        }
    }
}

class Point {
    constructor(value){
        this.value = value
        this.edges = [];
    }
}

//tests
let graph = new Graph;
graph.addPt(0);
graph.addPt(1);
graph.addPt(2);
graph.addPt(3);
graph.addPt(4);
graph.addPt(5);
graph.addPt(6);
graph.addPt(7);
graph.addPt(8);
graph.addPt(9);

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);

graph.addEdge(5, 6);
graph.addEdge(6, 7);

graph.addEdge(8, 9);

console.log(graph.CC());