const inptField = document.querySelector("#inpt");
const addBtn = document.querySelector("#add");
const ul = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
    const taskValue = inptField.value.trim();

    if (taskValue !== "") {
        const newLi = document.createElement("li");

        // Done button
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "✔";
        doneBtn.classList.add("done");
        doneBtn.title = "Mark as done";

        // Task text
        const taskText = document.createElement("span");
        taskText.textContent = taskValue;
        taskText.classList.add("text");

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add("delete");
        deleteBtn.title = "Delete task";

        // Mark as done
        doneBtn.addEventListener("click", () => {
            taskText.classList.toggle("completed");
        });

        // Delete task
        deleteBtn.addEventListener("click", () => {
            newLi.remove();
        });

        // Build list item
        newLi.appendChild(doneBtn);
        newLi.appendChild(taskText);
        newLi.appendChild(deleteBtn);

        // Add to list
        ul.appendChild(newLi);

        // Clear input
        inptField.value = "";
    }
});
