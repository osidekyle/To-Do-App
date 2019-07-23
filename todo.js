var addButton = document.getElementById("add");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList");
var doneList = document.getElementById("doneList");
var things = document.getElementById('things');
var thingsDone = document.getElementById("thingsDone");

addButton.addEventListener('click', function(){
    var task = taskInput.value;
    things.innerHTML="Things To Do Today";
    if(task.trim()){
        var newItem = document.createElement("LI");
        var taskText  = document.createTextNode(task);
        newItem.appendChild(taskText);
        taskInput.value = '';
       var doneButton = document.createElement("BUTTON");
        doneButton.innerHTML = "Done";
        doneButton.className = 'remove';
        doneButton.addEventListener("click", function(){
            thingsDone.innerHTML='Things Done Today';
            var taskItem = doneButton.parentElement;
            taskList.removeChild(taskItem);
            doneList.appendChild(taskItem);
            taskItem.removeChild(doneButton);
        
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
    doneList.innerHTML='';
    things.innerHTML='';
    thingsDone.innerHTML='';
});




