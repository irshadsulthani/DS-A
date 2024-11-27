//    creating a linked list

   class Node {
       constructor(data){
           this.data = data,
           this.next = null
       }
   }

   class linkedlist {
       constructor(){
           this.head = null
       }

       append(value){
           let node = new Node(value)

           if(this.head == null){
               this.head = node
           }else{
               let current = this.head
               while(current.next){
                   current = current.next
               }
               current.next =  node
           }
       }
       prepend(value){
           let node = new Node(value)

           node.next = this.head

           this.head = node
       }

   }

   let list1 = new linkedlist()

   list1.append(10)
   list1.append(1)
   list1.append(5)
   list1.prepend(25)
   console.log(list1)


  class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }
  
    class LinkedList {
      constructor() {
        this.head = null;
      }
  
      append(value) {
        let node = new Node(value);
  
        if (this.head === null) {
          this.head = node;
        } else {
          let current = this.head;
          while (current.next) {
            current = current.next;
          }
          current.next = node;
        }
      }
  
      prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
      }
  
      printList() {
        let current = this.head;
        while (current) {
          console.log(current.data);
          current = current.next;
        }
      }
    }
  
    let lit1 = new LinkedList();
    list1.prepend(5);
    list1.append(2);
    list1.append(3);
    list1.append(3);
    list1.append(3);
    list1.append(3);

    list1.printList();  
  

  function linearSearch(arr,target){
      for(let i = 0; i<arr.length;i++){
          if(arr[i]==target){
              return i;
          }
      }
      return -1;

  }

  let array = [20,30,40,50,60]

  console.log(linearSearch(array,60));

  function factorial(value) {
      if(value < 0){
          return 'Please give proper number'
      }
      if(value === 1){
          return 1;
      }
      return value * factorial(value -1)
  }

  console.log('factofy',factorial(5))



 class Node{
     constructor(data){
         this.data = data;
         this.next = null
     }
 }

 class linkedList{
     constructor(){
         this.head = null
     }
     append(value){
         let node = new Node(value)
         if (this.head == null) {
             this.head = node
         }else{
             let current = this.head

             while(current.next){
                 current = current.next
             }
             current.next = node
         }
     }

     formArray(arr){
         for(let i = 0 ;i<arr.length;i++){
             this.append(arr[i])
         }
     }

     prepend(value){
         let node = new Node(value)

         node.next = this.head

         this.head = node
     }
     print(){
         let current = this.head

         while(current){
             console.log(current.data);
             current = current.next
         }
     }
     reverse(){
         let prev = null;
         let current = this.head
         let next = null;

         while(current){
             next = current.next
             current.next = prev
             prev = current
             current = next
         }
         this.head = prev
     }
     removeDupicated() {
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
 }

 let newList = new linkedList()

 let arry = [10,20,3,4,5,3,7,10,20]
 newList.prepend(20)
 newList.formArray(array)
 console.log('before');
 newList.print()
 console.log('after');
 newList.reverse()
 newList.print()


class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class list {
    constructor(){
        this.head = null;
    }
    append(value){
        let node = new Node(value)
        if (this.head === null) {
            this.head = node
        }else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }
    formArray(arr){
        for (let i = 0; i < arr.length; i++) {
            this.append(arr[i])
        }
    }
    prepend(value){
        let node = new Node(value)

        node.next = this.head

        this.head = node
    }
    reverse(){
        let prev = null;
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
dupicateRemove(){
    let current = this.head
    while (current) {
        let value = current
        while (value.next) {
            if(value.next.data === current.data){
                value.next = value.next.next
            }else{
                value = value.next
            }
        }
        current = current.next
    }
}
    print(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

let ararrr = [23,1,2,3,2,3,2,1,7]


let list6 = new list()
list6.formArray(ararrr)


list6.append(90)
list6.append(49)
list6.prepend(2)
console.log('before');
console.log(list6);

list6.print()

console.log('after');

list6.dupicateRemove()

list6.print()


function sort(arr){
    for(let i = 0;i<arr.length-1;i++){
        for(let j = 0;i<arr.length-1-i;j++){
            if(arr[j] === arr[j]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

let arr = [6,3,4,4,3,6,5,2]

array.sort()

let unique = []

for(let i = 0;i<array.length;i++){
    let isduplicate = false

    for(let j = 0 ;j<unique.length;j++){
        if (array[i] === unique[j]) {
            isduplicate = true;
            break;
        }
    }
    if (!isduplicate) {
        unique.push(array[i])
    }
}

console.log(array);

let array5 = [6,5,9,8,7,4,6,3,2]

for(let i = 0 ; i <array.length-1;i++){
    for (let j = 0; j < array.length-1-i; j++) {
        if (array[j] > array [j+1]) {
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
    }

    append(value){
        let node = new Node(value)
        if(this.head === null){
            this.head = node
        }else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }
    prepend(value){
        let node  = new Node(value)

        node.next = this.head

        this.head = node
    }
    getSize(){
        let count = 0;
        let current = this.head
        while (current) {
            count++;
            current = current.next;
        }
        return count
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
    print(){
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

let list5 = new linkedList()

list5.append(10)
list5.append(20)
list5.prepend(30)
console.log('size',list5.getSize());
// console.log(list5);
list5.reverse()
list5.print()

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
    }
    append(value){
        let node = new Node(value)
        if (this.head === null) {
            this.head = node
        }else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }
}

let list3 = new linkedList()

list1.append(5)
list1.append(6)

console.log(list1);



function binarySearch(arr,target) {
    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right)/2)

        if (arr[mid] === target) {
            arr[mid] = 0
            return mid ;
        }else if (arr[mid] < target) {
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return 'Not found'
}

console.log(binarySearch(array,4));
console.log(array);


function recursion(arr){
    if (arr ) {
        
    }
}

let hy = 'hihihellohellohihihihihheloo';

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class linkedList{
    constructor(){
      this.head = null 
      this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    

    append(value){
        let node = new Node(value);

        if (this.head === null) {
            this.head = node
        }else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    getSize(){
        return this.size
    }
    prepend(value){
        let node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
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
    print(){
        let current = this.head
        let printValue = ''
        while (current) {
            printValue += `${current.data} `
            current = current.next
        }
        console.log(printValue);

    }
}

let linkedList = new linkedList()
list1.append(5)
list1.append(10)
list1.append(15)
list1.append(20)
list1.prepend(30)
list1.prepend(10)

console.log('size',list1.getSize());


console.log('before');
list1.print();
console.log('after');
list1.reverse();
list1.print();



class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    append(value){
        let node = new Node(value)

        if (this.head === null) {
            this.head = node
        }else{
          let  current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++
    }
    getSize(){
        return this.size
    }
    prepend(value){
        let node = new Node(value)
        node.next = this.head;
        this.head = node;
        this.size++
    }
    reverse(){
        let prev = null;
        let current = this.head;
        let next = null

        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    insert ( value, index ){
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head;
            let i = 0;
            while (i < index - 1) {
                prev = prev.next;
                i++
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    removeNode(index){
        if (index < 0 || index >= this.size) {
            return null;
        }
        let remove;
        if (index === 0) {
            remove = this.head;
            this.head = this.head.next
        }else{
            let prev = this.head;
            let i = 0;
            while (i < index -1) {
                prev = prev.next;
                i++
            }
            remove = prev.next
            prev.next = remove.next
        }
        this.size--;
        return remove.data;
    }
    removeValue(value){
        if (this.isEmpty()) {
            return null;
        }
    }
    print(){
        let current = this.head;
        let printValue = ''
        while (current) {
            printValue += `${current.data} `
            current = current.next
        }
        console.log(printValue);
    }
}

let list = new linkedList();
list1.append(20)
list1.prepend(30)
list1.append(50)
list1.prepend(60)
list1.insert(15,2)
list1.reverse()
console.log('before..');
list1.print()
console.log(list1.removeNode(2));
console.log('aftere');
list1.print()


console.log('after');

list1.reverse()
list1.print()


class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size === 0;
    }
   append(value){
    let node = new Node(value)
    if (this.isEmpty()) {
        this.head = node
    }else{
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node;
    }
    this.size++
   }
   prepend(value){
    let node = new Node(value)

    node.next = this.head;
    this.head = node
    this.size++
   }
   insert(value,index){
    if (index < 0 || index > this.size) {
        return
    }
    if (index === 0) {
        return this.prepend(value)
    }else{
        const node = new Node(value);
        let prev = this.head
        let i = 0;
        while (i < index -1) {
            prev = prev.next;
            i++
        }
        node.next = prev.next;
        prev.next = node
        this.size++
    }
   }
   remove(index){
    if (index < 0 || index > this.size) {
        return null;
    }
    let remove;
    if (index === 0) {
        remove = this.head
        this.head = this.head.next
    }else{
        let prev = this.head;
        let i = 0;
        while (i < index -1) {
            prev = prev.next;
            i++
        }
        remove =  prev.next
        prev.next = remove.next
    }
    this.size--
    return remove.data
   }
   reverse(){
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev
        prev = current
        current = next
    }
    this.head = prev
   }

   isCircular(){
    if (!this.head) {
        return false
    }
    let fast = this.head;
    let slow = this.head
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }
    return false

   }
   removeDupe(){
    let current = this.head;
    while (current) {
        let value = current;
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
    print(){
        let current = this.head;
        let printValue = ''
        while (current) {
            printValue += `${current.data} `
            current = current.next
        }
        console.log(printValue);
    }
}


