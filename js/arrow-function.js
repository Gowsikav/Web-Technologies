var greet=()=>{
    console.log("Hello everyone!");
}

greet();


let val=(a,b)=>a+b;

console.log(val(5,10));


let square=num=>
    {
        console.log("The square of the number ",num);
        return num*num;
    }

console.log(square(6));

let para=()=>{
    console.log("This is an arrow function without parameters");
}
para();

let para1=name=>{
    console.log("This is an arrow function with one parameter: ",name);
}

para1("god");