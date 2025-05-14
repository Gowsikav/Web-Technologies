let arr = [2, 3, 4, 6, -3, 9, -2, 8];
let square = arr.map((n) => {
  return n * n;
});
console.log(arr);
console.log(square);

// find - first element that satisfy the condition

let negative = arr.find((n) => {
  return n < 0;
});
console.log("Negative Element:", negative);

// findIndex - first index that satisfy the condition
let index = arr.findIndex((n) => {
  return n < 0;
});

console.log("Index: ", index);

// some()

let num = [2000, 4000, 1000, -443, 999];
let a = num.some((n) => {
  return n < 0;
});
console.log(a); //true because it contain one negative

let b = num.every((n) => {
  return n > 0;
});

console.log(b); //false because not all element are >0
