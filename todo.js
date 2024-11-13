let todo = [];

function modal() {
  const border = document.createElement("div");
  border.classList.add("modal");
  render();
}

function addOne(newTodo) {
  todo.push(newTodo);
}

function render() {
  const todoList = document.querySelector("#tasks");
  todoList.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    const item = todo[i];
    const element = document.createElement("div");
    element.classList.add("todo-item");
    const titleEl = document.createElement("p");
    titleEl.innerText = item.name;

    const btnEl = document.createElement("i");
    btnEl.classList.add("fa-solid fa-pen-to-square");

    element.appendChild(titleEl);
    element.appendChild(btnEl);
    todoList.appendChild(element);
    render();
  }
}

function addToDo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";
}
function saveToDo() {
  const inputValue = document.getElementById("task-name").value;
  const statusValue = document.getElementById("task-status").value;
  todo.push({
    name: inputValue,
    status: statusValue,
  });
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  console.log(inputValue);
  console.log(statusValue);
  render();
}
