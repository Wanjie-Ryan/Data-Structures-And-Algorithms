function fibonacci (n){

    // the array is initialized with 0 and 1 because they are the first numbers in the sequence
    var fiboArray = [0,1]

    // populate the array with the remaining elements from the 3rd element till n while satisfying the condition that the every number should be the sum of the previous two numbers

    for(let i=2; i<n; i++){

        fiboArray[i] = fiboArray[i-1] + fiboArray[i-2]
    }

    return fiboArray

}

console.log(fibonacci(4))

// the big o for this task will be o(n), because the for loop is dependent on the input size