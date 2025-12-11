setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);


function sayHello() {
  console.log("Hello");
}

setTimeout(sayHello, 1000);


setTimeout(function() {
  console.log("This is a delayed message");
}, 1500);

// after all synchronous code execution asynchronous code will execute
for (let i = 1; i <= 5; i++) {
    console.log("Message " + i);
}


function calculate(a, b, callback) {
  return callback(a, b);
}

// function which is passed as argument is call back
// which receives is higher order
function add(x, y) {
  return x + y;
}

console.log("Added: ",calculate(10, 20, add));





