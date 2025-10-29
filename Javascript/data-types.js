 
let num=19;
let num2=3.14;

let name="World";

let isActive=true;

let adminName;
let emptyValue=null;

console.log("Number: ",num);
console.log("Float Number: ",num2);
console.log("String: ",name);
console.log("Boolean: ",isActive);
console.log("Undefined value: ",adminName);
console.log("Null value: ",emptyValue);

// typeof operator   (not function)
console.log("Data type of num: ",typeof(num));
console.log("Data type of num2: ",typeof num2);
console.log("Data type of name: ",typeof name);
console.log("Data type of isActive: ",typeof isActive);
console.log("Data type of adminName: ",typeof adminName);
console.log("Data type of emptyValue: ",typeof emptyValue); 


// Type conversion
let value= "123n"; 
console.log("Data type of value: ",Number(value));

let attempt="";
console.log("Data type of attempt: ",Boolean(attempt)); 

console.log(27**(1/3));
console.log(4**(1/2));