class Graph {
    constructor() {
        this.points = [];
    }
    addPoint(val = this.points.length) {
        this.points.push(new Point(val));
    }
    addEdge(from, to) {
        this.points[from].edges.push(to);
    }
    DFS(from, target) {
        const paths = [];
        this._checkPath(from, target, paths);
        return paths;
    }
    _checkPath(from, target, paths, visited = []) {
        visited = visited.slice();
        visited.push(from);
        for (let edge of this.points[from].edges) {
            if (this.points[edge].value === target) {
                visited.push(edge);
                paths.push(visited);
                return;
            }
            if (!visited.includes(edge)) {
                this._checkPath(edge, target, paths, visited);
            }
        }
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
graf.addEdge(1,3);
graf.addEdge(0, 3);

console.log(graf.DFS(0, 3));