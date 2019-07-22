var addButton = document.getElementById("add");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList");

addButton.addEventListener('click', function(){
    var task = taskInput.value;
    if(task.trim()){
        var newItem = document.createElement("LI");
        var taskText  = document.createTextNode(task);
        newItem.appendChild(taskText);
        taskInput.value = '';
        taskList.appendChild(newItem);
    }
    else{
        alert("Task cannot be empty")
    }
})

var clearButton = document.getElementById("clear");

clearButton.addEventListener('click', function(){
    taskList.innerHTML = '';
})