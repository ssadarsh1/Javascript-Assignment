// Leap year

function isLeapyear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap Year";
      } else {
        return "Not a Leap Year";
      }
    } else {
      return "Leap Year";
    }
  } else {
    return "Not a Leap Year";
  }
}
console.log(isLeapyear(2024)); // Leap Year
console.log(isLeapyear(2023)); // Not a Leap Year
