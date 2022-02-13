class TaskStateManager {
    constructor() {
        this.taskStates = {
            0: 'To-Do',
            1: 'In Progress',
            2: 'Done'
        };

        this.promoteTask = this.promoteTask.bind(this);
        this.demoteTask = this.demoteTask.bind(this);
        this.getTaskStateNames = this.getTaskStateNames.bind(this);
    }

    getTaskStateNames() {
        let values = [];
        this.taskStates.forEach((key) => {
            values.push(this.taskStates[key]);
        });

        return values;
    }

    // Promote the given task to the next Task status.
    // If the new task status would be invalid, do nothing.
    promoteTask(task) {
        var keys = Object.keys(this.taskStates).map((s) => parseInt(s));
        var max = Math.max(...keys);

        var nextId = task.statusId + 1;
        if (nextId > max) return;

        task.statusId = nextId;
    }

    // Demote the given task to the previous Task status.
    // If the new task status would be invalid, do nothing.
    demoteTask(task) {
        var nextId = task.statusId - 1;
        if (nextId < 0) return;
        
        task.statusId = nextId;
    }
}

export default TaskStateManager;