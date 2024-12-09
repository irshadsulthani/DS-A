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
        let result = []
        let visit = new Set()

        const explore = (vertex) =>{
            if (!visit.has(vertex)) {
                visit.add(vertex)
                result.push(vertex)
                for(let near of this.list[vertex]){
                    explore(near)
                }
            }
        }
        explore(start)
        return result
    }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')

g.addEdge('A','B')
g.addEdge('B','C')
g.addEdge('C','D')

console.log(g.dfs('A'));

