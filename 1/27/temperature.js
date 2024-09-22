function temperatureStatus(temperature) {
  if (temperature < 15) {
    return "Cold";
  } else if (temperature >= 15 && temperature <= 30) {
    return "Warm";
  } else {
    return "Hot";
  }
}
let temperature1 = temperatureStatus(10);
console.log(temperature1); //Cold
let temperature2 = temperatureStatus(25);
console.log(temperature2); //Warm
let temperature3 = temperatureStatus(35);
console.log(temperature3); // Hot
