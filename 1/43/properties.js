function countProperties(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Input must be a non-null object.";
  }

  return Object.keys(obj).length;
}
const exampleObject = {
  name: "Alice",
  age: 30,
  profession: "Engineer",
};

const propertyCount = countProperties(exampleObject);
console.log(`The number of properties in the object: ${propertyCount}`); //The number of properties in the object: 3
