const inptField = document.querySelector("#inpt");
const addBtn = document.querySelector("#add");
const ul = document.querySelector("#task-list");

// Load existing tasks from localStorage, or set to an empty array if nothing exists
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks to localStorage (convert array to JSON string)
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render all tasks in the list
function renderTasks() {
    ul.innerHTML = ""; // Clear the <ul> first to avoid duplicates

    // Loop through each task and create corresponding UI
    tasks.forEach((task, index) => {
        // Create <li> for each task
        const li = document.createElement("li");
        li.classList.add("list-item");

        // Create "Done" button
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "✓";
        doneBtn.classList.add("li-btn", "done-btn");

        // Create <span> to display task text
        const span = document.createElement("span");
        span.textContent = task.text;
        span.classList.add("item-text", "task-text");

        // If task is marked as done, add the "done" class (line-through)
        if (task.done) {
            span.classList.add("done");
        }

        // Create "Delete" button
        const dltBtn = document.createElement("button");
        dltBtn.textContent = "✕";
        dltBtn.classList.add("li-btn", "delete-btn");

        // When "Done" button is clicked, toggle task's 'done' status
        doneBtn.addEventListener("click", () => {
            task.done = !task.done;                     // Toggle
            saveTasks();                                // Save to localStorage
            renderTasks();                              // Refresh the list visually
        });

        // When "Delete" button is clicked, remove task from array
        dltBtn.addEventListener("click", () => {
            tasks.splice(index, 1); // Remove one task at current index
            saveTasks();            // Update storage
            renderTasks();          // Refresh list
        });

        // Add buttons and text to <li>, then add <li> to <ul>
        li.appendChild(doneBtn);
        li.appendChild(span);
        li.appendChild(dltBtn);
        ul.appendChild(li);
    });
}

// Create a new task and add it to the list
function createList() {
    const input = inptField.value.trim(); // Trim whitespace

    // Only create task if input is not empty
    if (input !== "") {
        tasks.push({ text: input, done: false }); // Add to task array
        saveTasks();                              // Save to localStorage
        renderTasks();                            // Render updated list
        inptField.value = "";                     // Clear input field
    }
}

// Add task on "Enter" key press
window.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        createList();
    }
});

// Add task on "Add" button click
addBtn.addEventListener("click", createList);

// When the page loads, render existing tasks
renderTasks();
