function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let fibSequence = [0, 1];
    while (fibSequence.length < n) {
      fibSequence.push(
        fibSequence[fibSequence.length - 1] +
          fibSequence[fibSequence.length - 2]
      );
    }
    return fibSequence;
  }
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
