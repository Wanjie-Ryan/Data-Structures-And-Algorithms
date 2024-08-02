// you need to identify the pivot element in the array by the following ways:
// 1. Pick the first element as pivot
// 2. Pick the last element as pivot
// 3. Pick a random element as pivot
// 4. Pick median as pivot

// Traverse the array and put everything that is smaller than the pivot into a left array and everything that is greater than the pivot into a right array
// Repeat the process for the individual left and right arrays until you have an array of length 1 which is sorted by definition
// Repeatedly concatenate the left array, the pivot and the right array to get the sorted array