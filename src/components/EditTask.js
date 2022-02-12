import React from 'react';

class EditTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            description: null
        }
    }

    render() {
        return (
            <div className="EditTask">
                <div className="EditTaskTitle">
                    <input type="text" name="title" placeholder="Task Title" onChange={e => this.setState({title: e.target.value})} />
                </div>
                <div className="EditTaskDescription">
                    <input type="text" name="description" placeholder="Task Description" onChange={e => this.setState({description: e.target.value})} />
                </div>
            </div>
        )
    }
}

export default EditTask;