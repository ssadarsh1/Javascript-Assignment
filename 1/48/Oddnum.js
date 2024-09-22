let odd = [1, 2, 3, 4, 5, 6];

function sumOfOddNumber(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      sum += num[i];
    }
  }
  return sum;
}
console.log(sumOfOddNumber(odd)); // 9(1+3+5)
