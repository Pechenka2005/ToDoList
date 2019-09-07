let addButton = document.getElementById("addbtn");
let addInput = document.getElementById("addSearch");
let tasks = document.getElementById("tasks");


function createTask(text){
    let newTask = document.createElement("li");
    let label = document.createElement("label");
    label.innerHTML =text;
    let b1 = document.createElement("button");
    b1.innerHTML = "Изменить";
    let b2 = document.createElement("button");
    b2.innerHTML = "Удалить";
    newTask.appendChild(label);
    newTask.appendChild(b1);
    newTask.appendChild(b2);
    return newTask;
}

function AddTask(){
    if(addInput.value!=""){
        let task = createTask(addInput.value);
        tasks.appendChild(task);
        addInput.value ="";
    }
}
addButton.onclick = AddTask;

