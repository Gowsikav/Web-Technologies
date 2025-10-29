// function

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));


// function expression

function add() {
    console.log("Addition function");
};

add()

let sum=add;

sum();

// arrow function

let multiply = (x,y) => x*y;

console.log("Multiply: ", multiply(4,5));

let divide=(x,y)=>{
    console.log("division arrow function");
    return x/y;
}

console.log("Divide: ",divide(20,4));