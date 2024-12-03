class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }
    insert(value) {
        const node = new Node(value)
        if(!this.root){
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
            }else {
                if (current.right === null) {
                    current.right = node
                    return
                }
                current = current.right
            }
        }
    }
    heightAndBalanceCheck(node = this.root) {
        if (node === null) {
            return { height : 0 , Balance: true }
        }
        const leftHeight = this.heightAndBalanceCheck(node.left)
        const rightHeight = this.heightAndBalanceCheck(node.right)

        const height = Math.max(leftHeight.height, rightHeight.height) + 1
        
        const Balance = leftHeight.Balance && rightHeight.Balance && Math.abs(leftHeight.height - rightHeight.height) <= 1

        return { height, Balance }
    }
    getHeight(){
        return this.heightAndBalanceCheck().height
    }
    getBalance(){
        return this.heightAndBalanceCheck().Balance
    }
    preOrder(node = this.root){
        if (node === null) {
            return 'nothing'
        }
        console.log(node.value);
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    postOrder(node = this.root) {
        if (node === null) {
            return 'Nothing to print'
        }
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value);
    }
    inOrder(node = this.root) {
        if (node === null) {
            return 'Nothing to print'
        }
        this.inOrder(node.left)
        console.log(node.value);
        this.inOrder(node.right)
    }
    bfs(node = this.root) {
        if (!node) {
            return []

            
        }
        const queue = [node]
        const result = []
        while (queue.length > 0) {
            const node1 = queue.shift()
            result.push(node1.value)

            if(node1.left) queue.push(node1.left)
            if (node1.right) queue.push(node1.right)    
        }
    return result
    }
}


const b1 = new BST()

b1.insert(30)
b1.insert(60)
b1.insert(10)
b1.insert(20)
// b1.insert(150)
b1.insert(7)
b1.insert(8)
console.log('its the pre order');

b1.preOrder()

console.log('posst order is this');
b1.postOrder()

console.log(b1);

console.log('the height is :',b1.getHeight());
console.log('is blanace :', b1.getBalance());

console.log('iin Order');

b1.inOrder()


console.log('BFS order or Level Order');

console.log(b1.bfs());



