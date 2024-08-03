// in Bubble sort, you manually compare 2 elements, if the left element is greater than the right element, then pick the left element store it somehwere then assign the right element to the left element, and then assign that left element to the right element........
// Problem
// Write a function that takes an array of integers and sorts it using the Bubble Sort algorithm. Return the sorted array.
function BubbleSort(arr) {
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

let arr = [64, 34, 25, 12, 22, 11, 90];
BubbleSort(arr);
console.log(arr);
