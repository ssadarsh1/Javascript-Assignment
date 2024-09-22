let numbers = 131;
let numbers1 = 123;

function isPalindromeNumber(num) {
  let str = num.toString();
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return str === reverse;
}

console.log(isPalindromeNumber(numbers)); // true
console.log(isPalindromeNumber(numbers1)); // false
