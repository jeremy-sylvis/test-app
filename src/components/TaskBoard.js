import React from 'react';
import TaskGroup from './TaskGroup';

class TaskBoard extends React.Component {
    render() {
        const taskGroups = [];

        this.props.taskGroups.forEach((taskGroup) => {
            taskGroups.push(
                <TaskGroup title={taskGroup.title} key={taskGroup.title} filterId={taskGroup.filterId} isEditable={taskGroup.isEditable} taskDataSource={this.props.taskDataSource} taskStateManager={this.props.taskStateManager} />
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