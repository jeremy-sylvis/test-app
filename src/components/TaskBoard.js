import React, { Component } from 'react';
import TaskGroup from './TaskGroup';

class TaskBoard extends React.Component {
    render() {
        const taskGroups = [];

        this.props.taskGroups.forEach((taskGroup) => {
            taskGroups.push(
                <TaskGroup title={taskGroup.title} key={taskGroup.title} />
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