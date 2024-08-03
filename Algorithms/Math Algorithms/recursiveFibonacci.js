// recursive is where the solution depends on solutions to smaller instances of the same problem
// Q. Given a number 'n' find the nth element of the fibonacci sequence

// Tips for recursive solutions
// 1. Figure out how to break down the problem into smaller versions of the same problem
// 2. Identify the base case for recursion - a condition that terminates the recursion

// if F represents a function to calculate the Fibonacci number, then:
// Fn = Fn-1 + Fn-2

function recursiveFunction(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFunction(n - 1) + recursiveFunction(n - 2);
}

console.log(recursiveFunction(6));

// the big o for this code is O(2^n), the function multiplies itself as it goes down the recursion tree in the base of 2, 2*3.
