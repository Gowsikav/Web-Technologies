document.getElementById("title").textContent = "Title Changed Automatically!";
document.getElementById("para").textContent =
  "Paragraph updated automatically.";

const item1 = document.createElement("li");
item1.textContent = "First New item added!";
document.getElementById("list").appendChild(item1);

document.querySelector("#title").style.color = "blue";
document.querySelector("#para").style.fontSize = "18px";

const item2 = document.createElement("li");
item2.textContent = "Second New item added!";
document.querySelector("#list").appendChild(item2);
