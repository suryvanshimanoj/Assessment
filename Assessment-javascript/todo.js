   
    function addTodo() {
        var newTodo = document.getElementById("newTodo").value; 
        var todoList = document.getElementById("todoList"); 

        if (newTodo !== "") {
            var li = document.createElement("li"); 
            li.appendChild(document.createTextNode(newTodo)); 

            todoList.appendChild(li); 

            
            document.cookie = "todos=" + encodeURIComponent(todoList.innerHTML);
        }

        document.getElementById("newTodo").value = "";
    }

    
    function displayTodos() {
        var todoList = document.getElementById("todoList");
        var todos = getCookie("todos");

        if (todos !== "") {
            todoList.innerHTML = decodeURIComponent(todos);
        }
    }

    
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");

        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }

        return "";
    }
    
    document.getElementById("addTodo").addEventListener("click", addTodo);

    window.addEventListener("load", displayTodos);