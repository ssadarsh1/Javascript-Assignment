// second largest number in an array

let number = [5, 2, 8, 10, 20];

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  if (secondMax === -Infinity) {
    return null;
  }

  return secondMax;
}
console.log(findSecondLargest(number)); // 10
