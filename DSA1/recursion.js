// sum finding using recursionSum

// function recursionSum(arr,sum = 0,i = 0) {
//     if(arr.length  === i){
//         return sum;
//     }
//     sum += arr[i]
//     i++

//     return recursionSum(arr,sum,i)

// }

// let array = [1,2,3,6,4]

// console.log(recursionSum(array));


// function recursionEvenNumbers(arr,sum = 0,i=0) {
//     if (arr.length === i) {
//         return sum;
//     }

//     if(arr[i] % 2 !== 0){
//         sum += arr[i]
//     }
//     i++
//     return recursionEvenNumbers(arr,sum,i)
// }

// let array = [1,2,3,6,4,5,7]

// console.log(recursionEvenNumbers(array));

// finding count using recursion

// function findingCount(str,count = 0,i=0) {
//     if (str.length-1 === i) {
//         return count
//     }

//     if (str[i] === 'h' && str[i+1] === 'i') {
//         count++
//     }
//     i++

//     return findingCount(str,count,i)
// }

// let string ='hihellohihihihi';

// console.log(findingCount(string));

function recursionEvenNumbers(arr,sum = 0, i = 0) {
    if(arr.length === i){
        return sum;
    }
    if (arr[i] % 2 !==0 ) {
        sum += arr[i]
    }
    return recursionEvenNumbers(arr,sum,i+1)
}

function recursionusingBinary(arr, target , left = 0 , right = arr.length-1) {
    if (left > right) {
        return 'Not found';
    }
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
        return mid;
    }else if (arr[mid] < target) {
        return recursionusingBinary(arr,target,left = mid + 1, right)
    }else{
        return recursionusingBinary(arr,target,left, right =  mid-1)
    }
}

function countofhi(str,count = 0,i = 0) {
    if (str.length === i) {
        return count;
    }
    if (str[i] === 'h' && str[i + 1] === 'i') {
        count++
    }
    i++
    return countofhi(str,count,i)
}

let str = 'hihellohihihihellohihi'

console.log(countofhi(str));
let count = 0
for (let i = 0; i < str.length-1; i++) {
    if (str[i] === 'h' && str[i + 1] === 'i') {
        count++
    }
}
console.log(count);