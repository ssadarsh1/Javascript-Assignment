// removing falsy values

let arr = [1, 0, "hello", "", true, false, null, undefined, NaN, 2];

function removeFalseValues(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!arr[i]) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(removeFalseValues(arr)); //[1, 'hello', true, 2]
