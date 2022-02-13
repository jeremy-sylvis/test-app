import React, { Component } from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskModel: this.props.task
        }

        this.promoteTask = this.promoteTask.bind(this)
        this.demoteTask = this.demoteTask.bind(this)
    }

    promoteTask() {
        let taskModel = this.state.taskModel;
        this.props.taskStateManager.promoteTask(taskModel);
        this.props.taskDataSource.updateTask(taskModel);
    }

    demoteTask() {
        let taskModel = this.state.taskModel;
        this.props.taskStateManager.demoteTask(taskModel);
        this.props.taskDataSource.updateTask(taskModel);
    }

    render() {
        return (
            <div className="Task">
                <div className="TaskTitle">
                    <span>{this.props.task.title}</span>
                </div>
                <div className="TaskDescription">
                    <p>{this.props.task.description}</p>
                </div>
                <div className="TaskFooter">
                    <button name="demoteTask" onClick={this.demoteTask}>&lt;- Move</button>
                    <button name="promoteTask" onClick={this.promoteTask}>Move -&gt;</button>
                </div>
            </div>
        )
    }
}

export default Task;