// Given an array of integers, sort the array (ascending or descending)
// poor sorting algorithm, used as a stepping stone, to learn other algorithms
// compare adjacent elements in the array and swap the positions if they are in the intended order. 
// Repeat the instruction as you step through each element in thee array
// once you step through the whole array with no swaps, the array is sorted
// the highest number is said to have bubbled to the top, hence the name bubble sort

function BubbleSort(arr){

    let swapped
    do{
      swapped = false
        
        for(var i =0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                // so what is happening here is that, we are comparing 2 values, if the left value is greater than the right value, then we assign the left value to a variable called temp, the left element is left empty, we then assign the right element to the vaccated left element, and the then the right element has been left empty, we assign the temp to the right element
                var temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i +1] = temp
                swapped = true
            }
        }
    }while(swapped)


}

let arr = [8, 20, -2, 4, -6]
BubbleSort(arr)
console.log(arr)