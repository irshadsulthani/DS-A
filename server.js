class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class list{
    constructor(){
        this.head = null
    }
    append(value){
        let node = new Node(value)
        if (this.head === null) {
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
    }
    prepend(value){
        let node = new Node(value)
        node.next = this.head
        this.head = node
    }
    isCircular(){
        if (!this.head) {
            return false
        }
        let slow = this.head
        let fast = this.head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return true
            }
        }
        return false

    }
    reverse(){
        let prev = null
        let current = this.head
        let next = null
        while (current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    removeDupe(){
        let current = this.head
        while (current) {
            let value = current
            while (value.next) {
                if (value.next.data === current.data) {
                    value.next = value.next.next
                }else{
                    value = value.next
                }
            }
            current = current.next
        }
    }
    print() {
        let output = '';
        let current = this.head;
    
        while (current) {
            output += ` ${current.data} `;
            current = current.next;
        }
    
        console.log(output);
    }
    
}



const list1 = new list()

list1.append(20)
list1.append(21)
list1.append(21)
list1.prepend(51)
list1.print()

// list1.head.next = list1.head
// console.log('is circular aahno',list1.isCircular());

list1.removeDupe()
list1.reverse()
list1.print()


