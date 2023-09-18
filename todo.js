const taskNameInput = document.getElementById("taskName");
const taskPriorityInput = document.getElementById("taskPriority");
const taskDueDateInput = document.getElementById("taskDueDate");
const tasksList = document.getElementById("tasks");

function addTask() {
    const taskName = taskNameInput.value;
    const taskPriority = taskPriorityInput.value;
    const taskDueDate = taskDueDateInput.value;

    if (taskName.trim() === "") {
        alert("Task name cannot be empty.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        ${taskName} - Priority: ${taskPriority} - Due Date: ${taskDueDate}
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    tasksList.appendChild(taskItem);

    // Clear input fields
    taskNameInput.value = "";
    taskPriorityInput.value = "";
    taskDueDateInput.value = "";
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
