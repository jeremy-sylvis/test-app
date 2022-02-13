import React from 'react';
import Task from './Task'
import EditTask from './EditTask'
import { default as TaskModel} from '../data/Task';

class TaskGroup extends React.Component {
    constructor(props) {
        super(props);

        let taskData = this.props.taskDataSource.getTasks();
        let filteredTasks = this.filterTasksByStatusId(taskData);

        this.state = {
            filterId: this.props.filterId,
            taskData: this.props.taskDataSource.getTasks(),
            tasks: filteredTasks,
            isEditing: false
        };

        this.startAddTask = this.startAddTask.bind(this);
        this.finishAddTask = this.finishAddTask.bind(this);
        this.handleTaskChanges = this.handleTaskChanges.bind(this);

        this.editTask = React.createRef();
    }

    componentDidMount() {
        this.props.taskDataSource.addChangeListener(this.handleTaskChanges);
    }

    componentWillUnmount() {
        this.props.taskDataSource.removeChangeListener(this.handleTaskChanges);
    }

    handleTaskChanges() {
        let taskData = this.props.taskDataSource.getTasks();
        let filteredTasks = this.filterTasksByStatusId(taskData);

        this.setState({
            taskData: this.props.taskDataSource.getTasks(),
            tasks: filteredTasks
        });
    }

    filterTasksByStatusId(tasks) {
        let filteredTasks = [];

        tasks.forEach((task) => {
            if (task.statusId === this.props.filterId) {
                filteredTasks.push(
                    <Task task={task} key={task.taskId} taskDataSource={this.props.taskDataSource} taskStateManager={this.props.taskStateManager} />
                );
            }
        });

        return filteredTasks
    }

    // Begin the process of adding a new task.
    startAddTask() {
        this.setState({
            isEditing: true
        })
    };

    // End the process of adding a task, creating a new Task component with the resulting title and description.
    finishAddTask() {
        let editTask = this.editTask.current;

        let newTask = new TaskModel(editTask.state.title, editTask.state.description, 0);

        this.props.taskDataSource.addTask(newTask);

        this.setState({
            isEditing: false
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