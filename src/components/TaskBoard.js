import React from 'react';
import TaskGroup from './TaskGroup';

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
        var keys = Object.keys(this.taskStates);
        var max = Math.max(keys);

        var nextId = task.stateId++;
        if (nextId > max) return;

        task.stateId = nextId;
    }

    // Demote the given task to the previous Task status.
    // If the new task status would be invalid, do nothing.
    demoteTask(task) {
        var nextId = task.stateId--;
        if (nextId < 0) return;
        
        task.stateId = nextId;
    }
}

class TaskBoard extends React.Component {
    constructor(props) {
        super(props);

        this.taskStateManager = new TaskStateManager();
    }

    render() {
        const taskGroups = [];

        let tasks = this.props.tasks;

        this.props.taskGroups.forEach((taskGroup) => {
            taskGroups.push(
                <TaskGroup title={taskGroup.title} tasks={tasks} key={taskGroup.title} isEditable={taskGroup.isEditable} promoteTaskAction={this.taskStateManager.promoteTask} demoteTaskAction={this.taskStateManager.demoteTask} />
            );
        });

        return (
            <div className="TaskBoard">
                {taskGroups}
            </div>
        );
    }
}

export default TaskBoard;