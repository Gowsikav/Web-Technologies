// Higher order function is which accepts call back function
// built in higher order functions are map, filter, reduce

let data=[1,3,5,7,9,10,36]

let square=data.map(x=>x*x);
console.log(square); 

let even=data.filter(x=>x%2===0);
console.log(even);

let sum=data.reduce((acc,x)=>acc+x,0);;
console.log(sum);
