let tasks = []; 

function addTask() {
    let taskInput = document.getElementById('taskInput').value;

    if (taskInput.trim() === '') {
        return;
    }

    tasks.push(taskInput);
    document.getElementById('taskInput').value = '';
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        let taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `<p>${task}</p><button>X</button>`;
        taskList.appendChild(taskElement);
    });
}

function removeTask(task) {
    tasks = tasks.filter(t => t !== task);
    renderTasks();
}

renderTasks();