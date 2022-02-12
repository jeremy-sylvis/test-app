import React from 'react';
import Task from './Task'
import EditTask from './EditTask'

class TaskGroup extends React.Component {
    constructor(props) {
        super(props);

        let tasks = [];
        this.props.tasks.forEach((task) => {
            tasks.push(
                <Task title={task.title} key={task.title} description={task.description} />
            );
        });

        this.state = {
            tasks: tasks,
            isEditing: false
        };

        this.startAddTask = this.startAddTask.bind(this);
        this.finishAddTask = this.finishAddTask.bind(this);

        this.editTask = React.createRef();
    }

    // Begin the process of adding a new task.
    startAddTask() {
        this.setState({
            isEditing: true
        })
    };

    // End the process of adding a task, creating a new Task component with the resulting title and description.
    finishAddTask() {
        let tasks = this.state.tasks;
        let editTask = this.editTask.current;

        tasks.push(
            <Task key={editTask.state.title} title={editTask.state.title} description={editTask.state.description} />
        );

        this.setState({
            isEditing: false,
            tasks: tasks
        });
    }

    render() {
        return (
            <div className="TaskGroup">
                <div className="TaskGroupHeader">
                    <span>{this.props.title}</span>
                </div>
                <div className="TaskGroupTaskList">
                    {this.state.tasks}
                </div>
                {/* 
                TODO: Ideally, TaskGroup wouldn't be aware of the state check against its own type to determine whether or not to add this element - ideally, it would be composed in.
                This is a step in the right direction, I think - the behavior is still controlled from outside rather than being magic.
                */}
                {this.props.isEditable && !this.state.isEditing &&
                    <div className="TaskGroupFooter">
                        <button onClick={this.startAddTask}>+ Add a Card</button>
                    </div>
                }
                {this.state.isEditing &&
                    <div className="EditTaskContainer">
                        <EditTask ref={this.editTask} />
                        <button onClick={this.finishAddTask}>Add Task</button>
                    </div>
                }
            </div>
        )
    }
}

export default TaskGroup;