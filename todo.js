const todo = [];
function addOne(newTodo) {
  todo.push(newTodo);
}

const addTask = document.createElement("button");
addTask.innerText = "addTask";
addTask.classList.add("addTask");
document.body.appendChild(addTask);

addTask.onclick = function () {
  const input = prompt("enter");

  render();
};

const wholebody = document.createElement("div");
wholebody.classList.add("wholebody");
document.body.appendChild(wholebody);

const header = document.createElement("div");
header.classList.add("header");

wholebody.appendChild(header);
console.log(wholebody);

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

const hero = document.createElement("div");
hero.classList.add("hero");
wholebody.appendChild(hero);

function render() {
  const todoList = document.querySelector(".hero");
  todoList.innerHTML = "";
  console.log(todoList);

  for (let i = 0; i < todo.length; i++) {
    const item = todo[i];
    const element = document.createElement("div");
    const titleEl = document.createElement("p");
    titleEl.innerText = item.name;

    const btnEl = document.createElement("i");
    btnEl.classList.add("fa-solid fa-pen-to-square");

    element.appendChild(titleEl);
    element.appendChild(btnEl);
    todoList.appendChild(element);
  }
}
