// binary search using recursion

// function recursionusingBinary(arr,target,left = 0, right = arr.length -1) {
//     if(left > right){
//         return 'Not found';
//     }

//     let mid = Math.floor((left + right)/2)
//     if(arr[mid] === target){
//         return mid;
//     }else if (arr[mid] < target) {
//         return recursionusingBinary(arr,target,mid + 1, right)
//     }else{
//         return recursionusingBinary(arr, target,left, mid -1)
//     }
// }

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length -1

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)

//         if (arr[mid] === target) {
//             return mid;
//         }else if (arr[mid] < target) {
//             left = mid + 1;
//         }else{
//             right = mid - 1;
//         }
//     }
//     return 'Not found' ;
// }

function binarySearch(arr,target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) /2)

        if (arr[mid] === target) {
            return mid;
        }else if (arr[mid] < target) {
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return 'Not found'
}



function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target ) {
            arr[i] = 0
            return i;
        }
    }
    return 'not found'
}

// function recursionusingBinary(arr,target,left = 0,right = arr.length - 1) {
//     if (left > right) {
//         return 'Not Found';
//     }
//     let mid = Math.floor((left + right ) /2)
//     if (arr[mid] === target) {
//         return mid;
//     }else if (arr[mid] < target) {
//         return recursionusingBinary(arr,target,left = mid + 1,right)
//     }else{
//         return recursionusingBinary(arr,target,left,right = mid-1)
//     }
   
// }

// function binary(arr,target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right)/2)

//         if(arr[mid] === target){
//             return mid
//         }else if (arr[mid] < target) {
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }
//     return 'not Found'
// }

// let array = [10,20,30,40,50,60,70]

// console.log(binary(array,30));

// console.log(array);

class Node{
    constructor(data){
        this.data = data
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    append(value){
       let node = new Node(value)
       if(this.head === null){
           this.head = node
       }else{
           let current = this.head
           while(current.next){
               current = current.next
           }
           current.next = node;
       }
       this.size++
    }
}



let list1 = new linkedList()
console.log(list1.append(10))
console.log(list1.getSize())