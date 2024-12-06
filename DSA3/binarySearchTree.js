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
b1.delete(50)
console.log(b1.bfs());


// console.log('Max value',b1.findMin());
// console.log('min value',b1.findMax());
// console.log('Close value', b1.findCloset(90));





