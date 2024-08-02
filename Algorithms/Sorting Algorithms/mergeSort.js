// Divide the array into sub arrays, each containing only one element. (An array with one element is considered sorted)
// Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.

function MergeSort(arr){

    // base case for recursion

    if(arr.length < 2){
        return arr;
    }

    let mid = Math.floor(arr.length/2)

}

let arr = [8, 20, -2, 4, -6];
MergeSort(arr)
console.log(arr)
console.log(MergeSort(arr));
