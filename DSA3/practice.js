class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BSt{
    constructor(){
        this.root =  null
    }
    insert (value) {
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
            } else {
                if (current.right === null) {
                    current.right = node
                    return 
                }
                current.right = current
            }
        }
    }
}

const bs = new BSt()

bs.insert(5)
bs.insert(2)
bs.insert(1)
bs.insert(10)

console.log(bs);

