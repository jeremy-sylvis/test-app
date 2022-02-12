import React, { Component } from 'react';
import Task from './Task'
import EditTask from './EditTask'

class TaskGroup extends React.Component {
    addTask() {
        //show the "add task" ui
    };

    render() {
        const tasks = [];

        this.props.tasks.forEach((task) => {
            tasks.push(
                <Task title={task.title} key={task.title} description={task.description} />
            );
        });

        var isEditable = false;
        if (this.props.isEditable) {
            isEditable = true;
        }

        return (
            <div className="TaskGroup">
                <div className="TaskGroupHeader">
                    <span>{this.props.title}</span>
                </div>
                <div className="TaskGroupTaskList">
                    {tasks}
                </div>
                {/* 
                TODO: Ideally, TaskGroup wouldn't be aware of the state check against its own type to determine whether or not to add this element - ideally, it would be composed in.
                This is a step in the right direction, I think - the behavior is still controlled from outside rather than being magic.
                */}
                {isEditable &&
                    <div className="TaskGroupFooter">
                        <button onClick={this.addTask}>+ Add a Card</button>
                    </div>
                }
            </div>
        )
    }
}

export default TaskGroup;