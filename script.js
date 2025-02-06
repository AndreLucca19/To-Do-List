let task = [];

function addTask() {
    let taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        task.push(taskInput);
        document.getElementById('taskInput').value = '';
        renderTaskList();
    }
}

