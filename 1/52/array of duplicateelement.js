let numbers = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7];

function duplicateElements(arr) {
  let duplicateArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (duplicateArr.indexOf(arr[i]) === -1) {
      duplicateArr.push(arr[i]);
    }
  }
  return duplicateArr;
}
let result = duplicateElements(numbers);
console.log(result); //  1, 2, 3, 4, 5, 6, 7
