let numbers = [1, 2, 3, 4, 5, 6];

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let result = sumOfArray(numbers);
console.log("The sum of elements is", result); // 21
