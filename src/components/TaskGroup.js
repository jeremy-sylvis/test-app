import React, { Component } from 'react';
import Task from './Task'

class TaskGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tasks = [];

        this.props.tasks.forEach((task) => {
            tasks.push(
                <Task title={task.title} key={task.title} description={task.description} />
            );
        });

        return (
            <div className="TaskGroup">
                <div className="TaskGroupHeader">
                    <span>{this.props.title}</span>
                </div>
                <div className="TaskGroupTaskList">
                    {tasks}
                </div>
            </div>
        )
    }
}

export default TaskGroup;