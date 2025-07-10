const inptField = document.querySelector("#inpt");
const addBtn = document.querySelector("#add");
const ul = document.querySelector("#task-list")


function createList() {

    // Check if there is no input then dont run the code
    if (inptField.value != "") {

        // creating new list item
        const li = document.createElement("li");
        li.classList.add("list-item");

        // Create "Task Complete" button
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "✓";
        doneBtn.classList.add("li-btn", "done-btn");

        // Show The Text Which User Enterd, Inside A Newly Created Span Element Which Is Inside The List Item(li)
        const span = document.createElement("span");
        span.textContent = inptField.value;
        span.classList.add("item-text", "task-text");

        // Create "Delete" button
        const dltBtn = document.createElement("button");
        dltBtn.textContent = "✕";
        dltBtn.classList.add("li-btn", "delete-btn");

        // Append/Show Newly Created li elements 
        li.appendChild(doneBtn);
        li.appendChild(span);
        li.appendChild(dltBtn);
        ul.appendChild(li);

        // When Delete Button Pressed, Remove That Specific li
        dltBtn.addEventListener("click", () => {
            li.remove();
        })

        // When Complete Button Pressed, Show The li item as done
        doneBtn.addEventListener("click", () => {
            span.classList.toggle("done");
        })

    }

    // Reset The Input Field To Default
    inptField.value = "";
}

// 'Enter' Key Prees Event
window.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        createList();
    }
});

// Add Button Event
addBtn.addEventListener("click", createList);