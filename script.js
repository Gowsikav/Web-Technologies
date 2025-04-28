let h = (document.getElementsByClassName("h").innerText = "Javascript");

let para = (document.getElementById("para").innerText =
  "Welcome to X-workz ODC");

let btn = document.getElementById("btn");
btn.onclick = () => {
  btn.style.color = "red";
};

function b() {
  alert("Button clicked");
}

let btn3 = document.querySelector("#btn3").addEventListener("mouseover", check);
function check() {
  console.log("mouse over");
}

document.querySelector(".heading").addEventListener("mouseover", () => {
  console.log("heading mouseover");
});

document.querySelector("#paragraph").innerText = "Welcome to Javascript course";

/* document.querySelector(".time").addEventListener("click", () => {
  alert(Date());
}); */

document.querySelector("#button").addEventListener("click", (event) => {
  console.log("hello", event);
});
