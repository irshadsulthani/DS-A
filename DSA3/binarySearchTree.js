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
      if(!node ) return []
      let result = []
      let queue = [node]
      while (queue.length > 0) {
         const node1 = queue.shift()
         result.push(node1.value)
         if(node1.left) queue.push(node1.left)
         if(node1.right)  queue.push(node1.right)
      }
    return result
    }
    findMin(node = this.root) {
        if(!node) return null;
        while (node.left) {
            node = node.left
        }
        return node.value
    }
    findMax(node = this.root) {
        if (!node ) {
            return null
        }
        while (node.right) {
            node = node.right
        }
        return node.value
    }
    findCloset(target, node = this.root) {
        let closet = node.value
        while (node) {
            if (Math.abs(target - closet) > Math.abs(target - node.value)) {
                closet = node.value
            }
            if (target < node.value) {
                node = node.left
            }else if (target > node.value) {
                node = node.right
            }else{
                break;
            }
        }
        return closet;
    }
    delete(value, node = this.root) {
     if (!node ) {
        return null
     }   
     if (value < node.value) {
        node.left = this.delete(value , node.left)
     }else if (value > node.value) {
        node.right = this.delete(value, node.right)
     }else{
        if (!node.left && !node.right) {
            return null
        }
        if (!node.left) {
            return node.right
        }
        if (!node.right) {
            return node.left
        }
        let success = this.findMin(node.right)
        node.value = success
        node.right = this.delete(success, node.right)
     }
     return node
   }
   search(value, node = this.root){
    if (!node) {
        return false
    }
    if(value < node.value) {
        return this.search(value, node.left)
    }else if(value > node.value){
        return this.search(value, node.right)
    }else{
        return true
    }
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


console.log('searchiong',b1.search(20));

console.log('BFS order or level order');

console.log(b1.bfs());
// b1.delete(50)
// console.log(b1.bfs());


// console.log('Max value',b1.findMin());
// console.log('min value',b1.findMax());
// console.log('Close value', b1.findCloset(90));





