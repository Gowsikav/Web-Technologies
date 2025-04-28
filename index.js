var name = "Ram";
var age = 25;
var isStudent = true;
var middleName;
var empty = null;
var big = 9007199254740991n;
var id = Symbol("id");
var person = {
  name: "Bob",
  age: 30,
};

var numbers = [1, 2, 3, 4];

function greet() {
  console.log("greet function");
}
greet();

console.log(name);
console.log(age);
console.log(isStudent);
console.log(middleName);
console.log(empty);
console.log(big);
console.log(id);
console.log(person);

console.log(a);
var a = 10;

var a;
console.log(a);
a = 10;
let c = 70;
sayHello();
function sayHello() {
  console.log("Hello!");
  var b = 10;
}

//console.log(b);
// console.log(c);

// console.log("start");
// setTimeout(() => {
//   console.log("hello");
// }, 8000);

// console.log("stop");

// function declaration

function addition() {
  console.log("10 + 20 is ", 10 + 20);
}

addition();

// function expression

let sub = function subtract(a, b) {
  console.log("Subtraction:", a - b);
};

sub(20, 10);

// arrow function

let mul = (a, b) => {
  console.log("Multiply ", a, " * ", b, " is ", a * b);
};
mul(5, 2);

// anonymous function

let div = function (a, b) {
  console.log("Divide ", a, " * ", b, " is ", a / b);
};

div(20, 5);

// call back

function display(message) {
  message();
  console.log("Call back function");
}

function message() {
  console.log("Message function");
}

display(message);

let head = (document.getElementById("h").innerText = "World");

let btn = document.getElementById("btn");
btn.onclick = () => {
  btn.style.color = "red";
};

function b() {
  alert("Button clicked");
}

let btn3 = document.querySelector("#btn3").addEventListener("mouseover", check);
function check() {
  console.log("mouse over");
}
