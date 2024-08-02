// Divide the array into sub arrays, each containing only one element. (An array with one element is considered sorted)
// Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.

function MergeSort(arr){

    // base case for recursion

    if(arr.length < 2){
        return arr;
    }

    // dividing the array until they contain only one element
    let mid = Math.floor(arr.length/2)
    // for the left array, we will consider every element apart from the middle element itself
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    return Merge(MergeSort(leftArr), MergeSort(rightArr))

}

// the function Merge will receive the right and left arrays as parameters
function Merge(leftArr, rightArr){

    let sortedArr = []

    // as long as the left and right array are not empty..........
    while(leftArr.length && rightArr.length){

        if(leftArr[0] <= rightArr[0]){
            // the .shift is used to remove the first element from the array.
            sortedArr.push(leftArr.shift()) // we remove the first element from the left array and push it into the sorted array
        }
        else{
            sortedArr.push(rightArr.shift()) // we remove the first element from the right array and push it into
        }


    }
   return [...sortedArr, ...leftArr, ...rightArr]

}

let arr = [8, 20, -2, 4, -6];
MergeSort(arr)
// console.log(arr)
console.log(MergeSort(arr));
