"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form"); //selects the first form
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function savTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    savTodos();
    input.value = '';
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        savTodos();
    });
    newLI.append(checkbox);
    newLI.append(todo.text);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
// form.addEventListener("submit", function(e) { //ts knows e is and event
//     e.preventDefault();
//     console.log("SUBMITTED!")
// })
// btn.addEventListener("click", ()=>{
//     alert("You entered : " + input.value);
//      input.value = '';
//     // (input as HTMLInputElement).value;
//     // (<HTMLInputElement>input).value;
// });
let mystery = "Hello World!!!";
// type assertion : as : you tell TS what type it is going to be
const numChars = mystery.length;
