/*
Graph
 */


function Graph() {
    this.list = [];
    this.addEdge = function(x,y) {
        if(this.list[x]) this.list[x].push(y);
        else this.list[x] = [y];
        if(this.list[y]) this.list[y].push(x);
        else this.list[y] = [x];
    };

    this.countEdges = function() {
        let count = 0;
        for(let i in this.list) {
            count += this.list[i].length;
        }
        console.log("Count of Edges", count/2);
    };
    this.countNodes = function() {
        console.log("Count of Nodes", this.list.length);
    };

    this.dfs = function(node) {
        let visited = [];
        let visitedFrom = [];

        let rDFS = function(list, node, fromNode) {
            if(!visited[node]) {
                visited[node] = true;
                visitedFrom[node] = fromNode;
                console.log(node);
                for(let i in list[node]) rDFS(list, list[node][i], node)
            }
        };
        rDFS(this.list, node);
        console.log(visited);
    };

    this.findPath = function(node,y) {
        let visited = [];
        let visitedFrom = [];

        let rDFS = function(list, node, fromNode) {
            if(!visited[node]) {
                visited[node] = true;
                visitedFrom[node] = fromNode;
                for(let i in list[node]) rDFS(list, list[node][i], node)
            }
        };
        rDFS(this.list, node);

        let path = [y];
        let src = y;
        while(visitedFrom[src] !== node) {
            path.push(visitedFrom[src]);
            src = visitedFrom[src];
        }
        path.push(node);
        console.log(path.reverse());
    };

    this.bfs = function(src) {
        let queue = [src];
        let visited = [];
        let visitedFrom = [];
        let distCtr = 0;
        let dist = [];

        visited[src] = true;
        visitedFrom[src] = src;
        dist[src] = 0;

        while(queue.length > 0) {
            let node = queue.shift();
            let adj = this.list[node];
            for(let i in adj) {
                if(!visited[adj[i]]) {
                    visited[adj[i]] = true;
                    visitedFrom[adj[i]] = node;
                    dist[adj[i]] = dist[node] + 1;
                    queue.push(adj[i]);
                }
            }
        }
        console.log("visited", visited);
        console.log("visitedFrom", visitedFrom);
        console.log("dist", dist);
    };

    this.shortestPath = function(src, y) {
        let queue = [src];
        let visited = [];
        let visitedFrom = [];
        let distCtr = 0;
        let dist = [];

        visited[src] = true;
        visitedFrom[src] = src;
        dist[src] = 0;

        while(queue.length > 0) {
            let node = queue.shift();
            let adj = this.list[node];
            for(let i in adj) {
                if(!visited[adj[i]]) {
                    visited[adj[i]] = true;
                    visitedFrom[adj[i]] = node;
                    dist[adj[i]] = dist[node] + 1;
                    queue.push(adj[i]);
                }
            }
        }

        let path = [y];
        let dest = y;
        while(visitedFrom[dest] !== src) {
            path.push(visitedFrom[dest]);
            dest = visitedFrom[dest];
        }
        path.push(src);
        console.log(path.reverse());
    };
    this.connectedComponents = function() {
        let visited = [];
        let visitedFrom = [];
        let ccId = [];

        let rDFS = function(list, node, fromNode, id) {
            if(!visited[node]) {
                visited[node] = true;
                visitedFrom[node] = fromNode;
                ccId[node] = id;
                for(let i in list[node]) rDFS(list, list[node][i], node, id)
            }
        };
        for(let i in this.list) rDFS(this.list, i, i, i)
        console.log(ccId);
    };
}

let g = new Graph();
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(0,5);
g.addEdge(0,6);
g.addEdge(3,4);
g.addEdge(3,5);
g.addEdge(4,5);
g.addEdge(4,6);
g.addEdge(7,8);
g.addEdge(9,10);
g.addEdge(9,11);
g.addEdge(9,12);
g.addEdge(11,12);
g.countEdges();
g.countNodes();
// g.dfs(9);
// g.bfs(0);
// g.findPath(0,4);
// g.shortestPath(0,4);
g.connectedComponents();