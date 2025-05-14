let num = [2, 4, 19, 8, 30, 67, 29, 10];
let even = num.filter((n) => {
  return n % 2 == 0;
});
console.log(even);

// add all the element
let num1 = [1, 2, 3, 5, 7];
let result = num1.reduce((acc, value) => {
  let updatesum = acc + value;
  return updatesum;
}, 0);

console.log(result);
let sum = 0;
num1.forEach((n) => {
  sum = sum + n;
});

console.log("Sum of array: " + sum);

// method chaining

let person = [
  { age: 12, gender: "m" },
  { age: 22, gender: "f" },
  { age: 25, gender: "m" },
  { age: 12, gender: "m" },
  { age: 17, gender: "f" },
];

let maleAge = person
  .filter((obj) => {
    return obj.gender == "m";
  })
  .map((male) => {
    return male.age;
  });

console.log("Male Ages :", maleAge);
