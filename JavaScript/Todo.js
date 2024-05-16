    // Function to add a new todo item
    function addTodo() {
        var newTodo = document.getElementById("newTodo").value; // Get the value from the input field
        var todoList = document.getElementById("todoList"); // Get the ul element

        if (newTodo !== "") {
            var li = document.createElement("li"); // Create a new li element
            li.appendChild(document.createTextNode(newTodo)); // Add the text to the li element

            todoList.appendChild(li); // Add the li element to the ul

            // Store the updated todo list in cookies
            document.cookie = "todos=" + encodeURIComponent(todoList.innerHTML);
        }

        document.getElementById("newTodo").value = ""; // Clear the input field
    }

    // Function to retrieve and display todos from cookies
    function displayTodos() {
        var todoList = document.getElementById("todoList");
        var todos = getCookie("todos");

        if (todos !== "") {
            todoList.innerHTML = decodeURIComponent(todos);
        }
    }

    // Function to get the value of a cookie by its name
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");

        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }

        return "";
    }

    // Add event listener to the button
    document.getElementById("addTodo").addEventListener("click", addTodo);

    // Display todos when the page loads
    window.addEventListener("load", displayTodos);