let colors = ["red", "green", "blue", "yellow", "purple"];

colors.splice(2, 1); // it will change the content by removing or adding the existing element
console.log(colors); // ['red', 'green', 'yellow', 'purple']

colors.splice(2, 0, "Orange", "Pink"); // it will change the content by removing or adding the existing element
console.log(colors); // ['red', 'green', 'Orange', 'Pink', 'yellow', 'purple']

// creating new subarray
let colorsSubArr = colors.slice(0, 3);
console.log(colorsSubArr); // ['red', 'green', 'Orange']
