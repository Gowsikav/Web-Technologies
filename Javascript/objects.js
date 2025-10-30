let cap = {
  name: "Gowsi",
  age: 21,
  marks: [90, 80, 70],
  address: {
    state: "tamilnadu",
    pincode: 621207,
  },
};

console.log(cap.name);  // to accesss
console.log(cap.marks);
console.log(cap.address.pincode);

console.log(cap["age"]);

cap.address.city = "Trichy";  // to add new property

cap.isHuman = true;

console.log(cap);

delete cap.marks;  // to delete property
console.log(cap);

cap.address.city='bangalore';  // to modify property
console.log(cap);

console.log(cap.age == undefined);

cap.price=null;  
console.log(cap.price == undefined); // true, not present in object

console.log("price" in cap);  // returns true if property exists


  //  to iterate over object properties
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
console.log(key,": ",user[key]);

console.log(user.key); // it wil not work always 'undefined'
}

let val1={
  addr:{city:"trichy"},
  user:"gowsi"
};
let val2=val1;

val1.user="hello";  // both will reflect the change

console.log(val1);
console.log(val2); 


let col=Object.assign({},val1); // swallow copy, nested object will reflect the change
console.log(col);
// first level properties are copied but nested objects are referenced
col.user="hi"; // only col will change
col.addr.city='chennai';  // both will reflect the change
console.log("original: ",val1);
console.log("swallow copy: ",col);

let clone= structuredClone(val1);
console.log(clone==val1);// deep copy

clone.addr.city='madurai'; // only clone will change
console.log("original: ",val1);
console.log("deep copy:",clone);

console.log(val1.toString());  // returns [object Object]
console.log(val1.valueOf());   // returns the object itself