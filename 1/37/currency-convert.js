function convertCurrency(amount, currencyType) {
  let convertedAmount;

  // Determine the conversion based on currency type

  if (currencyType === "USD") {
    convertedAmount = amount * 75; // 1 USD to 75 INR
  } else if (currencyType === "EUR") {
    convertedAmount = amount * 90; // 1 EUR to 90 INR
  } else if (currencyType === "GBP") {
    convertedAmount = amount * 100; // 1 GBP to 100 INR
  } else {
    return "Invalid currency type";
  }

  return convertedAmount.toFixed(2);
}

console.log(convertCurrency(1, "USD")); // 75.00
console.log(convertCurrency(5, "EUR")); // 450.00
console.log(convertCurrency(10, "GBP")); // 1000.00
console.log(convertCurrency(100, "IND")); // Invalid currency type
