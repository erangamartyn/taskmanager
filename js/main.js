// Create a new TaskList
const myTaskList = new TaskList();

// Add some tasks
myTaskList.addTask('Compelete JavaScript Project', '2025-05-17');
myTaskList.addTask('Learn New JavaScript Concept', '2025-05-18');

// List all Task
console.log('Task in the List');
myTaskList.listTask();

// Change the task's status
myTaskList.tasks[0].markAsDone(); // Mark the first Task as done.

// List all the task to see the update
console.log(`After changing the first task's status`);
myTaskList.listTask();


// Remove a task
myTaskList.removeTask('Learn New JavaScript Concept');

// List task again to confirm the removal
console.log(`After deleting a task`);
myTaskList.listTask();

// Get total number of tasks
console.log(`Total Tasks: ${myTaskList.getTotalTask()}`);


