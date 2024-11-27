// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class linkedList{
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
//     toArray(arr){
//         for(let i = 0 ; i< arr.length;i++){
//             return this.append(arr[i])
//         }
//     }
//     print(){
//         let print = '';
//         let current = this.head
//         while (current) {
//             print += `${current.data} `
//             current = current.next
//         }
//         console.log(print);
        
//     }
// }

// let list1 = new linkedList()


// list1.append(10)

// let array = [1,2,3,4]

// list1.toArray(array)

// list1.print()

// function removeDupe(str,i = 0,result = '') {

// if (str.length === i) {
//     return result
// }

// if (str[i] === str[i +1]) {
//     result += str[i]
// }

// return removeDupe(str,i+1,result)
// }

// let str = 'aassddffgg'

// console.log(removeDupe(str));

let arr1 = [1,2,3,4,5]
let arr2 = [2,3,7,8]
let arr3 = [2,3,9,4,5]

console.log([...arr1,[...arr2],...arr3]);


function isPal(str,left = 0,right = str.length -1) {
    if (left > right) {
        return true
    }
    if (str[left] !== str[right]) {
        return false
    }
    return isPal(str,left +1,right -1)
}

console.log(isPal('malayalam'));

