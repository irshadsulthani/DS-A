class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BSt {
    constructor(){
        this.root = null
    }
    insert (value) {
        const node = new Node(value)
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
            }else {
                if (current.right === null) {
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
}


const b1 = new BSt()

b1.insert(20)
b1.insert(30)
b1.insert(10)  
b1.insert(40)

console.log(b1);

console.log('The tree height is :', b1.getHeight());

console.log('is Balanced :',b1.isBalnced());
