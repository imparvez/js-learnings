import React from 'react'
import { connect } from 'react-redux'

const TaskList = ({ tasks, name }) => (
    <div>
        <h2>{name}</h2>
        {tasks.map(task => <div key={task.id}>{task.name}</div>)}
    </div>
)

const mapStateToProps = (state, ownProps) => {
    // ownProps is nothing but the one send from parent in this case.
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
}

export default connect(mapStateToProps)(TaskList)