// Q. Given a sorted array of n elements and a target element t, find the index of t in the array. Return -1 if the target element is not found
// BinarySearch only works for sorted arrays
// find the middle element of the array, compare your target value to the middle element, if the target value is equal to the middle element, return the index of the middle element, if the target value is less than the middle element, then search the left half of the array, if the target value is greater than the middle element, then search the right half of the array, repeat the process until the target value is found or the array is empty

function BinarySearch(array, x) {
  // we will have 2 pointers that will point to the left most side of the array, and to the right most side of the array.
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    // the math.floor is important because if the array is even the middle index might be a decimal therefore the math.floor is used to bring it to the closest lower whole number
    let mid = Math.floor((left + right) / 2);

    if (x === array[mid]) {
      return mid;
    }
    if (x < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// The Big O for this code is O(log n) as the input size is reduced by half, the number of executions increases.

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
