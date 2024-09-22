function calculateFinalPrice(totalPrice, membershipType) {
  let discount = 0; // 0%
  if (membershipType === "silver") {
    discount = 10; //10%
  } else if (membershipType === "gold") {
    discount = 20; //20%
  }
  let discountPrice = (discount / 100) * totalPrice;
  let finalAmount = totalPrice - discountPrice;
  return finalAmount;
}
console.log(calculateFinalPrice(1000, "regular")); // 1000 => 0% discount
console.log(calculateFinalPrice(2000, "silver")); // 1800 => 10% discount
console.log(calculateFinalPrice(3000, "gold")); // 2400 => 20% discount
