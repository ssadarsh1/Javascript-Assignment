// Replacing words

let sentence = "The quick brown fox jumps over the lazy dog.";

let word = "quick";
let index = sentence.indexOf(word);
console.log(`The word "${word}" is found at index ${index}.`);

let updatedSentence = sentence.replace(word, "slow");
console.log("Updated sentence:", updatedSentence); //The slow brown fox jumps over the lazy dog.
