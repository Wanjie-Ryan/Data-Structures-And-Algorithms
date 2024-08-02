// you need to identify the pivot element in the array by the following ways:
// 1. Pick the first element as pivot
// 2. Pick the last element as pivot
// 3. Pick a random element as pivot
// 4. Pick median as pivot

// Traverse the array and put everything that is smaller than the pivot into a left array and everything that is greater than the pivot into a right array
// Repeat the process for the individual left and right arrays until you have an array of length 1 which is sorted by definition
// Repeatedly concatenate the left array, the pivot and the right array to get the sorted array

function QuickSort(arr) {
  if (arr.length < 2) {
    return arr; // base case: an array of length 1 is already sorted.
  }
  // find the pivot of the array, which in our case is the last element of the array.
  let pivot = arr[arr.length - 1];
  // console.log(pivot);
  // traverse the array and put the elements in a left and right array.
  let left = [];
  let right = [];
  // a for loop to traverse the array.
  for (let i = 0; i < arr.length - 1; i++) {
    // if the element is less than the pivot, it will be pushed to the left of the array, and if greater, it will be pushed to the right of the array.
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }

    // repeat the above process for the right and left sub array, and concatenate it with the pivot element
    // this here is recusrion, and to exit a recusrion we need a base case
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

let arr = [8, 20, -2, 4, -6];
QuickSort(arr);
// console.log(arr)
console.log(QuickSort(arr));
