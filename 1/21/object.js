// converting array to string & number , convert object to string & number

let arr = [1, 2, 3];

// converting array to string using String method
let convertArr = String(arr); //
console.log(convertArr);
console.log(typeof convertArr); // string

let convertArray = Number(arr);
console.log(convertArray); // NaN
console.log(typeof convertArray); // number

let obj = {
  name: "abc",
  age: 30,
};

let objToString = String(obj); //
let objToNumber = Number(obj); //

console.log(objToString); // [object Object]
console.log(objToNumber); // NaN
