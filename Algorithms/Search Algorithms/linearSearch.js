// Q. Given an array of n elements and a target element t find the index of t in the array. return -1 if the target element is not found

// 1. When we have static array

// function linearSearch(x){

//     let array = [1,4,5,6,7,8]

//     for(let i=0; i<array.length; i++){

//         if(x == array[i]){
//             return i
//         }

//     }
//     return -1

// }

// console.log(linearSearch(5))

// 2. Working with dynamic array

function DynamicArray(arr, x) {
  // let array =[]

  for (let i = 0; i < arr.length; i++) {
    // array.push(arr[i])
    // console.log(arr[i])
    if (x === arr[i]) {
      return i;
    }
  }
  return -1;
  // console.log(array)
}

// The Big O for this code is O(n)
// As the number of items in the array increases, the number of time of iteration also increases

console.log(DynamicArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
console.log(DynamicArray([-5, 2, 10, 4, 6], 6));
console.log(DynamicArray([-5, 2, 10, 4, 6], 20));
