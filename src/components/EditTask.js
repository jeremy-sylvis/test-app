import React, { Component } from 'react';

class EditTask extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="EditTask">
                <div className="EditTaskTitle">
                    <input type="text" name="title" placeholder="Task Title" />
                </div>
                <div className="EditTaskDescription">
                    <input type="text" name="description" placeholder="Task Description" />
                </div>
            </div>
        )
    }
}

export default EditTask;