let addButton = document.getElementById("addbtn");
let addInput = document.getElementById("addSearch");
let tasks = document.getElementById("tasks");


function createTask(text){
    let newTask = document.createElement("li");
    let label = document.createElement("label");
    label.innerHTML =text;
    let b2 = document.createElement("button");
    b2.className ="vBtn";
    b2.innerHTML = "Выполнено";
    newTask.appendChild(label);
    newTask.appendChild(b2);
    

    return newTask;
}
function createTaskFinish(text){
    let newTask = document.createElement("li");
    let label = document.createElement("label");
    label.classList.add("l")
    label.innerHTML =text;
    let b2 = document.createElement("button");
    b2.className ="deleteBtn";
    b2.innerHTML = "Удалить";
    newTask.appendChild(label);
    newTask.appendChild(b2);
    

    return newTask;
}



function AddTask(){
    if(addInput.value!=""){
        let task = createTask(addInput.value);
        tasks.appendChild(task);
        bind(task);
        addInput.value ="";
    }
}

addButton.onclick = AddTask;


function AddTaskFinish(){
    let text = this.parentNode.firstChild.textContent;
    let ListItem = createTaskFinish(text);
    finish.appendChild(ListItem);
    bind2(ListItem);
    let task = this.parentNode;
    ul = task.parentNode;
    ul.removeChild(task);
    

}
function taskDelete(){
    let task = this.parentNode;
    ul = task.parentNode;
    ul.removeChild(task);
}



function bind(obj){
    let vButton = obj.querySelector("button.vBtn");
    //let delButton = obj.querySelector("button.deleteBtn");

    vButton.onclick = AddTaskFinish;
    //delButton.onclick = taskDelete;
}

function bind2(obj){
    let delButton = obj.querySelector("button.deleteBtn");
    
    delButton.onclick = taskDelete;
}

