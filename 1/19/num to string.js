//convert a number to string

let num = 456;

// convert to string using Number method
let str = num.toString();
console.log(str); //456
console.log(typeof str); // string

// String() function
let str1 = String(num);
console.log(str1); //456
console.log(typeof str1); // string

// templete literals
let str2 = `${num}`;
console.log(str2); //456
console.log(typeof str2); // string

//  concatenation
let str3 = num + "";
console.log(str3); //456
console.log(typeof str3); // string
