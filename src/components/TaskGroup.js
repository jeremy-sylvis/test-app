import React, { Component } from 'react';

class TaskColumn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3>{this.props.title}</h3>
        )
    }
}

export default TaskColumn;