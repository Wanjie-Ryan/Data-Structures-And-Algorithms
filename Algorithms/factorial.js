// Q. Given an Integer 'n' find the factorial of the integer

function factorial(n) {
  let facArray = [];
  let summation = 1;

  for (let i = 1; i <= n; i++) {
    facArray.push(i);
    // the i-1 is necessary because arrays start from index 0, and therefore in our case i started from 1 so you need to subtract 1 for the value to start from index 0
    summation *= facArray[i - 1];
  }

  return summation;
}

console.log(factorial(1));
