document.addEventListener('DOMContentLoaded' , () => {
    let taskInput = document.getElementById
    ('task-input');
    let addTaskBtn = document.getElementById
    ('add-task-btn');
    let taskList = document.getElementById
    ('task-list')

    let addTask = (event) => {
        let taskText = taskInput.ariaValueMax.trim();
        if(!taskText) {
            return;
        }

        let li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) =>{
        if(e.key === 'Enter'){
            addTask(e);
        }
    });
})