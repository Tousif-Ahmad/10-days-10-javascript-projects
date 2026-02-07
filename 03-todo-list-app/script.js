const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

function addTodo() {
  if (input.value === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");

  span.innerText = input.value;
  delBtn.innerText = "X";
  delBtn.className = "delete";

  // complete task
  span.onclick = () => {
    li.classList.toggle("completed");
  };

  // delete task
  delBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
}
