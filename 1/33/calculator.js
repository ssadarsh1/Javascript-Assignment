function advancedCalculator(num1, num2, operator) {
  let calculation;
  switch (operator) {
    case "+":
      calculation = num1 + num2;
      break;
    case "-":
      calculation = num1 - num2;
      break;
    case "*":
      calculation = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Error:Division by zero is not allowed";
      } else {
        calculation = num1 / num2;
        break;
      }
    case "%":
      calculation = num1 % num2;
      break;
    default:
      return "Error: Invalid operator .Please use +,-,*,/,%";
  }
  return calculation;
}
console.log(advancedCalculator(10, 5, "+")); // 15
console.log(advancedCalculator(8, 2, "-")); // 6
console.log(advancedCalculator(8, 5, "*")); // 40
console.log(advancedCalculator(10, 4, "/")); // 0.8
console.log(advancedCalculator(5, 5, "%")); // 4
