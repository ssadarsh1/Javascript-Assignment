let suggestClothing = function (temperature) {
  let suggestion;

  if (temperature < 0) {
    suggestion = "Wear a heavy coat and thermal wear.";
  } else if (temperature > 0 && temperature < 15) {
    suggestion = "Wear a jacket.";
  } else if (temperature > 16 && temperature < 25) {
    suggestion = "Wear a light sweater.";
  } else if (temperature > 25) {
    suggestion = "Wear shorts and a t-shirt.";
  }
  return suggestion;
};
console.log(suggestClothing(-10)); // Wear a heavy coat and thermal wear.
console.log(suggestClothing(12)); // Wear a jacket.
console.log(suggestClothing(22)); // Wear a light sweater.
console.log(suggestClothing(30)); // Wear shorts and a t-shirt.
