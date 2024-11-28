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
}

const b1 = new BST()

b1.insert(20)
b1.insert(30)
b1.insert(10)
b1.insert(30)
b1.insert(30)

console.log(b1);
