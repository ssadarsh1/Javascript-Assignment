let str = "Hello, World!";
function countCharOccurrences(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

console.log(countCharOccurrences(str));
// { H: 1, e: 1, l: 3, o: 2, ',': 1,  : 1, W: 1, r: 1, d: 1, '!': 1 }
