class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BST {
    constructor () {
        this.root = null
    }
    insert (value) {
        let node = new Node(value)
        if (!this.root) {
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
    checkHeight(node = this.root) {
        if (!node) {
            return -1
        }
        const leftHeight = this.checkHeight(node.left)
        const rightHeight = this.checkHeight(node.right)

        return Math.max(leftHeight, rightHeight) + 1
    }
}


const b1 = new BST()

b1.insert(30)
b1.insert(10)
b1.insert(20)
b1.insert(40)
b1.insert(50)


console.log(b1);

console.log('the height of the tree is :', b1.checkHeight());
