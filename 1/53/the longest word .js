let sentence = "This is a sample sentence with multiples words";
function findLongestWord(sentence) {
  const words = sentence.split(" ");
  return words.reduce((a, b) => (a.length > b.length ? a : b));
}
console.log(findLongestWord(sentence)); // multiples
