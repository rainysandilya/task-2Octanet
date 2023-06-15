// script.js
document.addEventListener("DOMContentLoaded", function() {
    var todoInput = document.getElementById("todo-input");
    var addButton = document.getElementById("add-btn");
    var todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", function() {
      var task = todoInput.value.trim();
  
      if (task !== "") {
        var li = document.createElement("li");
        li.textContent = task;
  
        li.addEventListener("click", function() {
          li.classList.toggle("completed");
        });
  
        todoList.appendChild(li);
        todoInput.value = "";
      }
    });
  
    todoInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        addButton.click();
      }
    });
  });
  