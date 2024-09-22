// second minimum number

let number = [5, 2, 8, 10, 20];
function forSecondMinimum(arr) {
  let minimum = arr[0];
  let secondMinimum = arr[1];

  if (minimum > secondMinimum) {
    [minimum, secondMinimum] = [secondMinimum, minimum];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < minimum) {
      secondMinimum = minimum;
      minimum = arr[i];
    } else if (arr[i] < secondMinimum && arr[i] !== minimum) {
      secondMinimum = arr[i];
    }
  }
  return secondMinimum;
}

console.log(forSecondMinimum(number)); // 5
