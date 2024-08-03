// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

let search = function BinarySearch (array, target){

    let left = 0;
    let right = array.length -1;

    while(left <= right){
        let mid = Math.floor((left + right)/2)

        if(target == array[mid]){
            // return array[mid];
            return mid;
        }
        if(target < array[mid]){
            right = mid -1
        }
        else{
            left = mid +1
        }

    }
    return left


}

console.log(search([1,3,5,6], 5))
// console.log(BinarySearch([1,3,5,6], 2))
// console.log(BinarySearch([1,3,5,6], 7))