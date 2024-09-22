// using array methods to remove and add the elements

const fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange']

fruits.pop();
console.log(fruits); // ['Apple', 'Banana', 'Mango']

fruits.shift();
console.log(fruits); // ['Banana', 'Mango']

fruits.unshift("Grape");
console.log(fruits); // ['Grape', 'Banana', 'Mango']
