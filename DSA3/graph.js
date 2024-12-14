class Graph {
    constructor(){
        this.list = {}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = []
        }
    }
    addEdge(v1, v2){
        if(this.list[v1]) this.list[v1].push(v2)
        if(this.list[v2]) this.list[v2].push(v1)
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
    bfs(start){
        let result = []
        let visit = new Set()
        let queue = [start]

        visit.add(start)

        while (queue.length) {
            let vertex = queue.shift()
            result.push(vertex)
            for(const near of this.list[vertex]){
                if(!visit.has(near)){
                    visit.add(near)
                    queue.push(near)
                }
            }
        }
        return result
    }
    vertexWithMostEdges(){
        let maxDegree = 0
        let maxVertex = null
        for(let vertex in this.list) {
            let degree =  this.list[vertex].length
            if(degree > maxDegree){
                maxDegree = degree
                maxVertex = vertex
            }
        }
        return maxVertex
    }
    secondSandL(){
        let degree = Object.keys(this.list)
        .map(vertex => ({vertex , degree: this.list[vertex].length}))
        .sort((a,b) => a.degree - b.degree)

        let small = degree[1]
        let largest = degree[degree.length - 2]

        return {'Small':small, 'Largest' :largest}
    }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')

g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('C','D')

console.log('DFS',g.dfs('C'));
console.log('BFS',g.bfs('C'));
console.log('most edges',g.vertexWithMostEdges());

console.log(g.secondSandL());




