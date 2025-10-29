// variables are used to store the information

let message="hello";

// naming convention camelcase  
// letters,digits,$ and _ are only allowed
// first letter not digit
// apple and APPLE are different


/* let – is a modern variable declaration.
var – is an old-school variable declaration.
const – is like let, but the value of the variable can’t be changed. */


let admin='john';
admin="peter";

console.log("Admin name: ",admin);

// let admin='hello'; SyntaxError: Identifier 'admin' has already been declared
// console.log(admin); 

// Variables declared using const are called “constants”. They cannot be reassigned

const customer='john';
// customer="peter";     TypeError: Assignment to constant variable. 

console.log("Customer name: ",customer);
