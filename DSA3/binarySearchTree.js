class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)

        if(this.root === null){
            this.root = node
            return;
        }
        let current = this.root
        while (true) {
            if (value < current.value) {
                if (current.left == null) {
                    current.left = node
                    return
                }
                current = current.left
            }else {
                if(current.right == null){
                    current.right = node
                    return
                }
                current = current.right
            }
        }
    }
    checkHeightAndBalanced(node = this.root){
        if (node === null) {
            return { height : 0, isBalnce : true }
        }
        const leftHeight = this.checkHeightAndBalanced(node.left)
        const rightHeight = this.checkHeightAndBalanced(node.right)

        const height =  Math.max(leftHeight.height, rightHeight.height) + 1

        const isBalnce = leftHeight.isBalnce && rightHeight.isBalnce && Math.abs(leftHeight.height - rightHeight.height) <= 1

        return {height , isBalnce}
    }
    isBalnced(){
        return this.checkHeightAndBalanced().isBalnce
    }
    getHeight() {
        return this.checkHeightAndBalanced().height
    }
    heightCheck(node = this.root){
        if (node === null) {
            return -1
        }
        let leftHeight = this.heightCheck(node.left)
        let rightHeight = this.heightCheck(node.right)

        return Math.max(leftHeight,rightHeight) + 1
    } 
    preOrder(node = this.root) {
        if (!node) {
            return 'Nothing'
        }
        console.log(node.value);
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    postOrder(node = this.root) {
        if (!node) {
            return 'no'
        }
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value);
    }
    inOrder(node = this.root) {
        if (!node) {
            return 'Nothing'
        }
        this.inOrder(node.left)
        console.log(node.value);
        this.inOrder(node.right)
    }
    bfs(node = this.root ) {
        if (!node) {
            return []
        }
        const queue = [node]
        const result = []
        while (queue.length > 0) {
            const node1 = queue.shift()
            result.push(node1.value)

            if(node1.left) queue.push(node1.left)
            if(node1.right) queue.push(node1.right)
        }
    return result
    }
}

const b1 = new BST()

b1.insert(20)
b1.insert(30)
b1.insert(10)
b1.insert(40-20)
b1.insert(50)
b1.insert(60) 
b1.insert(80)



console.log(b1.heightCheck());


console.log(b1);

console.log('BFS order or level order');

console.log(b1.bfs());


