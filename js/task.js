function Task(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    this.status = 'Pending';
}


// Method to mark the task as completed.
Task.prototype.markAsDone = function () {
    this.status = 'Done';
}

// Method to display task information
Task.prototype.display = function () {
    console.log(`${this.name}'s due date is ${this.dueDate}. The task's status is ${this.status}.`);
}



