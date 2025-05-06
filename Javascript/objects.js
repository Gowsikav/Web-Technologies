let cap = {
  name: "Gowsi",
  age: 21,
  marks: [90, 80, 70],
  address: {
    state: "tamilnadu",
    pincode: 621207,
  },
};

console.log(cap.name);
console.log(cap.marks);
console.log(cap.address.pincode);

console.log(cap["age"]);

cap.address.city = "Trichy";

cap.isHuman = true;

console.log(cap);

delete cap.marks;
console.log(cap);
