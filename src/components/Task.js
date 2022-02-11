import React, { Component } from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Task">
                <div className="TaskTitle">
                    <span>{this.props.title}</span>
                </div>
                <div className="TaskDescription">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Task;