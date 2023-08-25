/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
  if (n <= 1) {
    return false;
}

for (let number=2; number<n; number++ ){ //untuk memeriksa apakah ada pembagi lain selain 1 dan n
  if (n%number === 0) {
    return false
  }
}

return true
  }
  
  console.log(isPrime(9));
  console.log(isPrime(43));








