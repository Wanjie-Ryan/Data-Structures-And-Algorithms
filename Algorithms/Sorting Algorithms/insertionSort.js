// Given an array of integers, sort the array
// virtually split the array into a sorted and an unsorted part
// Assume that the first element is already sorted and the remaining elements are unsorted
// select an unsorted element and compare with all elements in the sorted part
// if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part.Else, shift larger elements in the sorted part towards the right.
// insert the selected element at the right index
// repeat till all unsorted elements are placed in the right order
// if the number being compared is bigger than the other, then you shift the bigger number to the right.

function InsertionSort(arr) {
  // we start from index 1 because we assume that the first element of the array is already sorted.
  // the for loop itarates over the unsorted part of the array
  for (var i = 1; i < arr.length; i++) {
    // this number to be inserted needs to be compared with each element of the sorted part.
    let numberToInsert = arr[i];
    // j refers to the index of the sorted element
    let j = i - 1;
    // the sorted elements can be more than one, we need logic to iterate over the sorted parts of the elements

    // in this condition check if the sorted element is greater than the element to insert, otherwise, there is no need to iterate
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
InsertionSort(arr);
console.log(arr);

// the Big O notation for this is O(n^2) it has a nested loop
