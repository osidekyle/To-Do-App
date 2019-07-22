var addButton = document.getElementById("add");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList");
var done = document

addButton.addEventListener('click', function(){
    var task = taskInput.value;
    if(task.trim()){
        var newItem = document.createElement("LI");
        var taskText  = document.createTextNode(task);
        newItem.appendChild(taskText);
        taskInput.value = '';
       var doneButton = document.createElement("BUTTON");
        doneButton.innerHTML = "Done";
        doneButton.className = 'remove';
        doneButton.addEventListener("click", function(){
            var taskItem = doneButton.parentElement;
            taskList.removeChild(taskItem);
        });
        
        newItem.appendChild(doneButton);    
        taskList.appendChild(newItem);
        


       
    }
    else{
        alert("Task cannot be empty");
    }
});

var clearButton = document.getElementById("clear");

clearButton.addEventListener('click', function(){
    taskList.innerHTML = '';
});