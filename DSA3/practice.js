class Node {
    constructor(value){
        this.value =  value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if (this.root === null) {
            this.root = node
            return
        }
        let current = this.root
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = node
                    return
                }
                current = current.left
            }else{
                if (current.right === null) {
                    current.right = node
                    return
                }
                current = current.right
            }
        }
    }
    preOrder(node = this.root){
        if (!node)  return 
        
        console.log(node.value);
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    inOrder(node = this.root){
        if(!node) return
        this.inOrder(node.left)
        console.log(node.value);
        this.inOrder(node.right)
    }
    postOrder(node = this.root) {
        if (!node) return 
        
        this.postOrder(node.left);
        this.postOrder(node.right)
        console.log(node.value);
    }
    bfs(node = this.root) {
        if(!node) return []
        let queue = [node]
        let result = []

        while (queue.length > 0) {
            const node1 = queue.shift()
            result.push(node1.value)
            if(node1.left) queue.push(node1.left)
            if(node1.right) queue.push(node1.right)
        }
    return result
    }
    checkHeight(node = this.root){
        if (node === null) {
            return {isBalance: true, height : 0}
        }
        let left = this.checkHeight(node.left)
        let right = this.checkHeight(node.right)
        const height = Math.max(left.height, right.height) + 1
        const isBalance = left.isBalance && right.isBalance && Math.abs(left.height - right.height) <= 1
        return {isBalance, height}
    }
    isBalancecheck(){
        return this.checkHeight().isBalance
    }
    getHeight(){
        return this.checkHeight().height
    }
}


const t1 = new BST()

t1.insert(20)
t1.insert(30)
t1.insert(10)
t1.insert(20)

console.log('preOrder');

t1.preOrder()

console.log('Post Order');
t1.postOrder()

console.log('in Order');
t1.inOrder()

console.log('Level Order');
console.log(t1.bfs());

console.log('balane');
console.log(t1.isBalancecheck());

console.log('height');
console.log(t1.getHeight());







