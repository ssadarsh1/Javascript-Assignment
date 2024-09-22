//intersection of two arrays
// It identifying elements that are present in both arrays
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [4, 5, 6, 7, 8, 9];

function intersectionOfArr(arr1, arr2) {
  let intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}
let result = intersectionOfArr(array1, array2);
console.log(result); //  4,5,6
