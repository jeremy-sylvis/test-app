import React, { Component } from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
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
                    <button name="demoteTask" onClick={this.props.demoteTaskAction}>&lt;- Move</button>
                    <button name="promoteTask" onClick={this.props.promoteTaskAction}>Move -&gt;</button>
                </div>
            </div>
        )
    }
}

export default Task;