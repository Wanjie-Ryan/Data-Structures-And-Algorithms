// Q. Given a number 'n' determine if the number is prime or not
// prime number is only divisible by one and itself
// prime number is greater than 1
function Prime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(Prime(6));
console.log(Prime(5));
console.log(Prime(10));
console.log(Prime(57));

// the big O for the code above is O(n), as the time factor is dependent on the input size
