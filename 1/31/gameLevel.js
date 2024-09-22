let determineGameLevel = function (score) {
  let level;
  let message;

  if (score >= 0 && score <= 49) {
    level = "Beginner";
    message = "Keep practicing, you're doing great!";
  } else if (score >= 50 && score <= 79) {
    level = "Intermediate";
    message = "You're improving! Keep it up!";
  } else if (score >= 80 && score <= 100) {
    level = "Advanced";
    message = "Excellent work! You're a pro!";
  } else {
    return "Invalid score ,Please score between 0 and 100";
  }
  return level, message;
};
console.log(determineGameLevel("49")); // Keep practicing, you're doing great!
console.log(determineGameLevel("70")); // You're improving! Keep it up!
console.log(determineGameLevel("90")); // Excellent work! You're a pro!
console.log(determineGameLevel("-1")); // Invalid score ,Please score between 0 and 100
