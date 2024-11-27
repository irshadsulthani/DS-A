// let str = 'hello world'

// function remove(str,letter = 'l',result = '',i = 0) {

//     if(str.length === i){
//         return result
//     }

//     if (str[i] !== letter) {
//         result += str[i]
//     }
    
//     return remove(str,letter,result,i+1)
// }

// console.log(remove(str));

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null
//     }
// }

// class singlyList{
//     constructor(){
//         this.head = null
//     }

//     append(value){
//         let node = new Node(value)
//         if (this.head === null) {
//             this.head = node
//         }else{
//             let current = this.head
//             while (current.next) {
//                 current = current.next
//             }
//             current.next = node
//         }
//     }
//     prepend(value){
//         let node = new Node(value)

//         node.next = this.head
//         this.head = node
//     }
//     removeDupe(){
//         let current = this.head
//         while (current) {
//             let value = current
//             while (value.next) {
//                 if (value.next.data === current.data) {
//                     value.next = value.next.next
//                 }else{
//                     value = value.next
//                 }
//             }
//             current = current.next
//         }
//     }
//     findMid(){
//         if (!this.head) {
//             return nul
//         }

//         let fast = this.head
//         let slow = this.head

//         while (fast !== null && fast.next !== null) {
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow.data
//     }
//     print(){
//         let value = ''
//         let current = this.head
//         while (current) {
//             value += `${current.data} `
//             current = current.next
//         }
//         console.log(value);
//     }
// }

// let list1 = new singlyList()

// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(4)
// list1.append(5)
// list1.append(6)
// list1.append(7)
// list1.append(8)
// list1.append(9)
// list1.append(10)
// list1.append(11)



// list1.print()

// list1.removeDupe()

// console.log(list1.findMid());


class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class doublyList{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(value){
        let node = new Node(value)
        if (!this.head) {
            this.head = this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
    }
    listSum(){
        let current = this.head
        let sum = 0
        while (current !== null) {
            if (current.data % 2 !== 0) {
                sum += current.data   
            }
            current = current.next
        }
        return sum
    }
    findMid(){
        let slow = this.head
        let fast = this.head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow.data
    }
    front(){
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
            
        }
    }
    back(){
        let current = this.tail
        while (current) {
            console.log(current.data);
            current = current.prev
            
        }
    }
}

let list = new doublyList()

list.append(10)
list.append(1)
list.append(2)
list.append(3)
list.append(20)
list.append(30)

list.back()

console.log('sum value ',list.listSum());
