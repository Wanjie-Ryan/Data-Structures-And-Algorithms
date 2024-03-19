// Q. Given an integer 'n', find the factorial of that integer
// the formula is n! = n * (n-1)
// a base case is added to prevent an infinte solution
function Recursivefactorial(n) {
  if (n === 0) {
    return 1;
  }
  // if(n == 1){
  //     return 1;
  // }
  else {
    return n * Recursivefactorial(n - 1);
  }
}

console.log(Recursivefactorial(1));

// the Big O for this code is O(n), as n increases, the number of executions increases at the same pace
// When the function `Recursivefactorial(n)` is called with \( n = 5 \), it follows the recursive approach to calculate the factorial of \( n \).

// Let's walk through the steps:

// 1. **Function Call with \( n = 5 \)**:
//    - The function `Recursivefactorial(5)` is called.

// 2. **Base Case Check**:
//    - The function checks if \( n \) is equal to 0. Since \( n \) is not equal to 0, the base case is not triggered, and the function proceeds.

// 3. **Recursion**:
//    - The function returns \( n \) multiplied by the result of calling `Recursivefactorial(n - 1)`.
//    - In this case, it returns \( 5 \times Recursivefactorial(5 - 1) \), which is \( 5 \times Recursivefactorial(4) \).

// 4. **Recursive Call with \( n = 4 \)**:
//    - The function `Recursivefactorial(4)` is called.

// 5. **Base Case Check**:
//    - The function checks if \( n \) is equal to 0. Since \( n \) is not equal to 0, the base case is not triggered, and the function proceeds.

// 6. **Recursion**:
//    - The function returns \( n \) multiplied by the result of calling `Recursivefactorial(n - 1)`.
//    - In this case, it returns \( 4 \times Recursivefactorial(4 - 1) \), which is \( 4 \times Recursivefactorial(3) \).

// 7. **Recursive Call with \( n = 3 \)**:
//    - The function `Recursivefactorial(3)` is called.

// 8. **Base Case Check**:
//    - The function checks if \( n \) is equal to 0. Since \( n \) is not equal to 0, the base case is not triggered, and the function proceeds.

// 9. **Recursion**:
//    - The function returns \( n \) multiplied by the result of calling `Recursivefactorial(n - 1)`.
//    - In this case, it returns \( 3 \times Recursivefactorial(3 - 1) \), which is \( 3 \times Recursivefactorial(2) \).

// 10. **Recursive Call with \( n = 2 \)**:
//     - The function `Recursivefactorial(2)` is called.

// 11. **Base Case Check**:
//     - The function checks if \( n \) is equal to 0. Since \( n \) is not equal to 0, the base case is not triggered, and the function proceeds.

// 12. **Recursion**:
//     - The function returns \( n \) multiplied by the result of calling `Recursivefactorial(n - 1)`.
//     - In this case, it returns \( 2 \times Recursivefactorial(2 - 1) \), which is \( 2 \times Recursivefactorial(1) \).

// 13. **Recursive Call with \( n = 1 \)**:
//     - The function `Recursivefactorial(1)` is called.

// 14. **Base Case Check**:
//     - The function checks if \( n \) is equal to 0. Since \( n \) is not equal to 0, the base case is not triggered, and the function proceeds.

// 15. **Recursion**:
//     - The function returns \( n \) multiplied by the result of calling `Recursivefactorial(n - 1)`.
//     - In this case, it returns \( 1 \times Recursivefactorial(1 - 1) \), which is \( 1 \times Recursivefactorial(0) \).

// 16. **Recursive Call with \( n = 0 \)**:
//     - The function `Recursivefactorial(0)` is called.

// 17. **Base Case Check**:
//     - The function checks if \( n \) is equal to 0. Since \( n \) is equal to 0, the base case is triggered.

// 18. **Base Case Return**:
//     - The base case returns 1.

// 19. **Backtracking and Calculations**:
//     - The previous recursive calls start backtracking.
//     - The result of each call is calculated and returned.
//     - \( Recursivefactorial(1) = 1 \times 1 = 1 \)
//     - \( Recursivefactorial(2) = 2 \times 1 = 2 \)
//     - \( Recursivefactorial(3) = 3 \times 2 = 6 \)
//     - \( Recursivefactorial(4) = 4 \times 6 = 24 \)
//     - \( Recursivefactorial(5) = 5 \times 24 = 120 \)

// 20. **Final Result**:
//     - The function `Recursivefactorial(5)` returns 120.

// So, \( 5! = 120 \)
