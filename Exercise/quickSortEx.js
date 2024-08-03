// in quick sort, you solve the question by picking a pivot, preferablly, the last element, and everything that is smaller than that pivot is shifted to the left of the pivot and everything that is greater is shifted to the right of the pivot, this is done through recursion

function QuickSort(arr) {
  // base point for recusrion
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

let arr = [10, 7, 8, 9, 1, 5];

console.log(QuickSort(arr));
