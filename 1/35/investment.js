function calculateInvestmentReturn(principal, interestRate, years) {
  let investmentType;

  if (interestRate <= 5) {
    investmentType = "Low risk";
  } else if (interestRate > 5 && interestRate <= 10) {
    investmentType = "Medium risk";
  } else {
    investmentType = "High risk";
  }

  const totalAmount = principal + principal * (interestRate / 100) * years;

  return {
    totalAmount: totalAmount.toFixed(2), // Total amount rounded to two decimal places
    investmentType: investmentType,
  };
}

let result = calculateInvestmentReturn(20000, 5, 7); // 20000=>principal,7=>intreset. rate,7=>years
console.log("Investment Type: " + result.investmentType); // Investment Type: Low risk
console.log("Total Amount after 5 years: $" + result.totalAmount); // Total Amount after 5 years: $1300
