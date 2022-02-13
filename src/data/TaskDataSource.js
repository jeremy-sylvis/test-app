import Task from './Task'

class TaskDataSource {
    constructor() {
        this.changeListeners = [];

        this.tasks = [
            new Task(1, 'Implement moving Task between groups', 'We need the ability to move a task to In Progress and/or Done.', 0),
            new Task(2, 'Clean up TaskGroup styling', 'Give TaskGroup a bit better visual separation and some softened edges', 2),
            new Task(3, 'Layout Task component', 'Create the component for Task and its layout/styling', 2), 
            new Task(4, 'Style Task component', 'Hit Task with a rough pretty-up pass', 2),
            new Task(5, 'Get familiar with React component trees', 'Get a rough foundation of understanding the interplay between a given React component and its child components', 2),
            new Task(6, 'Set up Node.js', 'Install Node.js and any prerequisites/dependencies', 2)
        ];
    }

    getTasks() {
        return this.tasks;
    }

    createTask(task) {
        this.tasks.push(task);

        this.changeListeners.forEach((c) => c());
    }

    updateTask(task) {
        // Find the existing task
        let existingTask = this.tasks.find((t) => t.taskId === task.taskId);
        if (existingTask == null) return;

        // Get its index. There's probably a cleaner function for combining these operations without resulting to a home-rolled for loop...
        let existingTaskIndex = this.tasks.indexOf(existingTask);

        // Replace the old task with the new
        this.tasks[existingTaskIndex] = task;

        this.changeListeners.forEach((c) => c());
    }

    addChangeListener(callback) {
        this.changeListeners.push(callback);
    }

    removeChangeListener(callback) {
        let index = this.changeListeners.indexOf(callback);
        if (index > -1) {
            this.changeListeners.splice(index, 1);
        }
    }
}

export default TaskDataSource ;