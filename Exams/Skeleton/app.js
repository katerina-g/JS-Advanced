function solve() {
    const taskInput = document.getElementById("task").value;
    const descriptionInput = document.getElementById("description").value;
    const dateInput = document.getElementById("date").value;
    const addButton = document.getElementById("add");
    addButton.addEventListener("click", addFunc);

    function addFunc(e) {
        if (taskInput != " " && descriptionInput != " " && dateInput != " ") {
            let article = document.createElement("article")
        }
    }
}