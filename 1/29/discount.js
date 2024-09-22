function calculateDiscount(totalAmount) {
  let discountPercentage;

  if (totalAmount < 50) {
    discountPercentage = 0;
  } else if (totalAmount >= 50 && totalAmount < 100) {
    discountPercentage = 10;
  } else if (totalAmount >= 100 && totalAmount < 200) {
    discountPercentage = 20;
  } else {
    // totalAmount >= 200
    discountPercentage = 30;
  }

  // Calculate the discount amount
  const discountAmount = (discountPercentage / 100) * totalAmount;

  // Calculate the final amount after applying the discount
  const finalAmount = totalAmount - discountAmount;

  return finalAmount;
}
const purchaseAmount = 150; // Change this value to test different amounts
const finalAmount = calculateDiscount(purchaseAmount);
console.log(
  `The final amount after discount for $${purchaseAmount.toFixed(
    2
  )} is: $${finalAmount.toFixed(2)}`
);
