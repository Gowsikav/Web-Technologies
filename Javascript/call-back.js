function display(name) {
  console.log(name);
}

function find(a, print) {
  console.log(a);
  print("hello");
}

find(10, display);

// function display passed as argument to find function
// we can change the name the address point to the function so no issue in name
// without () we have to pass and get the function
// while invoking only have to use ()
