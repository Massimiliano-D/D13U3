document.addEventListener("DOMContentLoaded", function () {
  let taskInput = document.getElementById("task-input");
  let addButton = document.getElementById("add-button");
  let taskList = document.getElementById("task-list");

  addButton.addEventListener("click", function () {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
      let task = document.createElement("li");
      task.textContent = taskText;
      task.addEventListener("click", function () {
        this.classList.toggle("completed");
      });
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "DAJE!";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", function () {
        const risultato = confirm("NUN GIOCA'!");
        if (risultato) this.parentNode.remove();
      });
      task.appendChild(deleteButton);
      taskList.appendChild(task);
      taskInput.value = "";
    }
  });
});
