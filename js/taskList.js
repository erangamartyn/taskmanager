function TaskList() {
    this.tasks = [];
}

// Method to add a task
TaskList.prototype.addTask = function(name, dueDate){
    const task = new Task(name, dueDate);
    this.tasks.push(task);
}

// Method to remove a task
TaskList.prototype.removeTask = function (taskName) {
    this.tasks = this.tasks.filter(task => task.name !== taskName);
}

// Method to list all tasks
TaskList.prototype.listTask = function(){
    this.tasks.forEach(task => task.display());
}

// Method get total tasks
TaskList.prototype.getTotalTask = function () {
    return this.tasks.length;
}
