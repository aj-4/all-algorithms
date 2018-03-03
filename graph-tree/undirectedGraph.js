class Graph {
    constructor() {
        this.edgeTo = [];
        this.points = []
    }
    addPoint(val = this.points.length) {
        this.points.push(new Point(val));
    }
    addEdge(from, to) {
        this.points[from].edges.push(to);
    }
    DFS(from, target) {
        let q = [this.points[from]];
        const path = [];        
        const marked = [];
        const edgeTo = [];
        while(q.length) {
            let pt = q.shift();
            if (pt.value === target) {
                let val = target;
                while (val !== from) {
                    path.push(val);
                    val = edgeTo[val];
                }
                path.push(val);
                break;
            }
            for (let edge of pt.edges) {
                if (!marked[edge]) {
                    marked[edge] = true;
                    edgeTo[edge] = pt.value;
                    q.unshift(this.points[edge]);
                }
            }
        }
        return path.reverse();        
    }
    BFS(from, target) {
        const stack = [this.points[from]];
        const path = [];
        const marked = [];
        const edgeTo = [];
        while (stack.length) {
            let pt = stack.pop();
            if (target === pt.value) {
                let link = target;
                while (link !== from) {
                    path.push(link);
                    link = edgeTo[link];
                }
                path.push(link);
            }
            for (let edge of pt.edges) {
                if (!marked[edge]) {
                    marked[edge] = true;
                    edgeTo[edge] = pt.value;
                    stack.push(this.points[edge]);
                }
            }
        }
        console.log(edgeTo);
        return path.reverse();
    }
}

class Point {
    constructor(val) {
        this.value = val;
        this.edges = [];
    }
}

let graf = new Graph();
graf.addPoint();
graf.addPoint();
graf.addPoint();
graf.addPoint();

console.log(graf.points.length === 4);
console.log(graf.points[1].value === 1);

graf.addEdge(0,1);
graf.addEdge(1,2);
graf.addEdge(2,3);

console.log(graf.DFS(0, 3));
console.log(graf.BFS(0, 2));