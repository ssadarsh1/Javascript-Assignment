//  string variable text with mixed case letters

let sentence = "The quick brown fox jumps over the lazy dog.";

// slice()
let sliceString = sentence.slice(4, 10);
console.log(sliceString); // "quick brown"

// substring()
let subString = sentence.substring(4, 10);
console.log(subString); // "quick brown"

// substr()
let subStr = sentence.substr(11, 10);
console.log(subStr); // rown fox j

// split()

console.log("Split:", sentence.split(" ")); // "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."

// replace()
console.log("Replace:", sentence.replace("quick", "slow")); //  "The slow brown fox jumps over the lazy dog."

// indexOf()
console.log("IndexOf:", sentence.indexOf("brown")); //  IndexOf: 10

// lastIndexOf()
console.log("LastIndexOf:", sentence.lastIndexOf("jump")); // LastIndexOf: 20

// includes()
console.log("Includes:", sentence.includes("quick")); //  true
