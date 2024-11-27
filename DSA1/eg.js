// // class Node {
// //     constructor (data){
// //         this.data = data
// //         this.next = null;
// //     }
// // }

// // class LinkedList {
// //     constructor(){
// //         this.head = null
// //     }

// //     append(value){
// //         let node = new Node(value)
// //         if(this.head === null){
// //             this.head = node
// //         }else{
// //             let current = this.head
// //             while(current.next){
// //                 current = current.next
// //             }
// //             current.next = node
// //         }
// //         }
// //         prepend(value){
// //             let node = new Node(value)

// //             node.next = this.head
// //             this.head = node
// //         }

// //         print(){
// //             let current = this.head;

// //             while(current){
// //                 console.log(current.data);
// //                 current = current.next
// //             }
// //         }

// // }

// // let list3 = new LinkedList()

// // list3.append(5)
// // list3.prepend(10)
// // list3.prepend(2)
// // list3.append(20)

// // list3.print()



// class Node{
//     constructor(data){
//         this.data = data;
//         this.head = null;
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null;
//     }
//     append(value){
//         let node = new Node(value)
//         if(this.head == null){

//             this.head = node
//         }else{
//             let current = this.head

//             while(current.next){
//                 current = current.next

//             }
//             current.next = node

//         }
//     }
//     prepend(value){
//         let node = new Node(value)

//            node.next = this.head

//            this.head = node
//     }
//     print(){
//         let current = this.head;
//         while(current){
//             console.log(current.data);
//             current = current.next
//         }
//     }
// }

// let newlist = new linkedList()

// newlist.prepend(2)
// newlist.append(10)
// newlist.append(20)
// newlist.prepend(1)

// newlist.print()

// function linearSearch (arr, target){
//     for(let i = 0; i < arr.length;i++){
//         if(arr[i] ===  target){
//             return i;
//         }
//     }
//     return 'number ios invalide'
// }

// let array = [10,20,30,40,50]

// console.log(linearSearch(array,4))


class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class list{
    constructor(){
        this.head = null;
    }

    append(value){
        let node = new Node(value)

        if( this.head == null){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
    }
    prepent(value){
        let node = new Node(value)

        node.next = this.head

        this.head = node
    }

    print(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

let list2 = new list()

list2.append(20)
list2.append(30)
list2.prepent(5)

console.log(list2);


list2.print()