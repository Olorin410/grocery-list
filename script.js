document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let category = document.getElementById("category").value;
    let item = document.getElementById("item").value;
    let list = document.getElementById(category);

    let listItem = document.createElement("li");
    listItem.textContent = item;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.float = "right";

    deleteButton.addEventListener("click", function() {
        list.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    document.getElementById("item").value = "";
});