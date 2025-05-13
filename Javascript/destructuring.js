let arr = ["hello", 1, true];

let [a, b, c, d] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d); // undefined

let car = {
  name: "bmw",
  price: 120000,
  address: {
    city: "kattuputhur",
    pincode: 621207,
  },
};

// name should be same
let { name, price } = car;

console.log(name);
console.log(price);

// change the name

let { name: carName, price: carPrice } = car;
console.log(carName);
console.log(carPrice);

// to access nested object

let {
  address: { city, pincode },
} = car;

console.log(city);
console.log(pincode);

// to change name

let {
  address: { city: place, pincode: number },
} = car;
console.log(place);
console.log(number);
