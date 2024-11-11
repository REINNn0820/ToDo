const addTask = document.createElement("button");
addTask.classList.add("addTask");

const body = document.createElement("div");
body.classList.add("body");

const header = document.createElement("div");
header.classList.add("header");

document.body.appendChild(body);
body.appendChild(header);

const headerDot = document.createElement("div");
headerDot.classList.add("headerDot");
header.appendChild(headerDot);

const headerP = document.createElement("p");
headerP.classList.add("headerP");
headerP.innerText = "TO DO";
header.appendChild(headerP);

const headerNumber = document.createElement("h4");
headerNumber.classList.add("headerNumber");
headerNumber.innerText = "5";
header.appendChild(headerNumber);

const main = document.createElement("div");
main.classList.add("main");
body.appendChild("main");

function getName() {
  let yourname = prompt();
  document.getElementById("output").innerHTML = yourname;
}
function deleteName() {
  let disappear = "";
  document.getElementById("output").innerHTML = disappear;
}
