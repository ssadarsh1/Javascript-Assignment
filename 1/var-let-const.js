// var is a functional scope it can be redeclared and reinitialize the value

var num = 20;
var num = 30; //redeclare
num = 40; //reassign
console.log(num);

// let is a block scope we can reinitial the value but we cannot redeclare the value

let a = 10;
// let a = 10; // we cannot redeclare
a = 20; // can reinitial
console.log(a);

//const is a block scope we cannot redeclare and we cannot reinitial the value
const variable = 100;

// const variable = 200; // we cannot redeclare
// variable = 300; // we cannot reinitial
console.log(variable);
