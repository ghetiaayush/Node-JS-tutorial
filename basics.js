//How to Use Variables and Functions
var a = 10; // function scope variable
let b = 20; // block scope variable
const c = 30;
a = 100;
b = 200;
// c = 300; this will give an error because const value cannot be changed
console.log(a + b + c);

// You can redeclare and reassign var and let values but You cannot change a const value — this will give an error.

//How to Use Conditions and Loops
if (a == 20) {
   console.log("this is if condition");
}
 else {
   console.log("this is else condition");
}

//For Loop Example
for (var a = 0; a <= 10; a++) {
  console.log(a);
}

//while Loop Example
var i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

//Function Example
function fruit(item) {console.log("fruit is " + item);}
fruit("apple");
fruit("banana");

//How to Use Arrays and Objects
// Array Example
var user = ["anil", "sam", "peter", "bruce"];
for (var a = 0; a < user.length; a++) {
  console.log(user[a]);
}

// Object Example
var person = {name: "anil", age: 25, city: "new york"};
console.log("Name: " + person.name + ", Age: " + person.age + ", City: " + person.city);

//How to Import Functions or Variables From Another File
const data = require("./data.js");
console.log(data.userName);
