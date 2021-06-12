let todoList = document.getElementById("todos");
let inputTodo = document.getElementById("todo-input");
let addButton = document.getElementById("add-btn");
let removeAllButton = document.getElementById("remove-all-btn");

let dataFromLocal = localStorage.getItem("todos");

let todos;

if(dataFromLocal) {
    todos = JSON.parse(dataFromLocal)
}else{
    todos = [];
}

//nomal
// let render = () => {
//     let todosData = ""
//     if (todos.length > 0) {
//         for (let i = 0; i < todos.length; i++) {
//             todosData += "<tr>"
//             todosData += "<td>" + todos[i] + "</td>"
//             todosData += "<td class='text-right'> <i class='far fa-edit' onclick='edit("+ i +")' ></i> <i class='far fa-times-circle' onclick='edit("+ i +")'></i></td>"
//             todosData += "</tr>"         
//         }
//     }
//     return todoList.innerHTML = todosData;
// }

let render = () => {
    if (todos.length > 0) {
        removeAllButton.style.display = "inline"
    }else{
        removeAllButton.style.display = "none"
    }
    let todosData = todos.map((ele,index)=>{
        return "<tr><td>" + ele + "</td><td class='text-right'> <i class='far fa-edit' onclick='edit("+ index +")' ></i> <i class='far fa-times-circle' onclick='remove("+ index +")'></i></td></tr>";
    })
    return todoList.innerHTML = todosData.join("");
}


let add = () => {
    let todo = inputTodo.value;

    if(todo != ''){
        todos.push(todo);
        inputTodo.value = '';
        document.getElementById("alert").style.display = "none"
    }else{
        document.getElementById("alert").style.display = "block"
    }

    localStorage.setItem("todos", JSON.stringify(todos))

    render();
}
addButton.addEventListener("click", add);

let edit = (item) => {
    let valueToEdit = todos[item];
    todos.splice(item, 1);
    localStorage.setItem("todos", JSON.stringify(todos))
    render();
    inputTodo.value = valueToEdit;

}

let remove = (item) => {
    todos.splice(item, 1);
    localStorage.setItem("todos", JSON.stringify(todos))
    render();
}

let removeAll = () => {
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos))
    render();
}
removeAllButton.addEventListener("click", removeAll);

render();