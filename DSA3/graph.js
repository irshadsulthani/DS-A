class Graph {
    constructor() {
        this.list = {}
    }
    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = []
        }
    }
    addEdge(v1, v2) {
        if (this.list[v1]) {
            this.list[v1].push(v2)
        }
        if (this.list[v2]) {
            this.list[v2].push(v1)
        }
    }
    dfs(start) {
        const result = []
        const visit = new Set()

        function explore(vertex) {
            if (!visit.has(vertex)) {
                visit.add(vertex)
                result.push(vertex)
                for(let near of this.list[vertex]){
                    explore(near)
                }
            }
        }
        explore.call(this, start)
        return result;
    }
}