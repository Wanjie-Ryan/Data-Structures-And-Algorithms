//Q. Given a positive integer 'n' determine if the number is a power of 2 or not

function power(n) {
  if (n < 1) {
    console.log("Please provide a positive integer");

    return;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
 
console.log(power(2));
console.log(power(6));
console.log(power(24));
console.log(power(32));
console.log(power(123450));

// console.log(Math.pow(2,4))
// Time complexity is O(log n) because the value of n is divided by half per every iteration
