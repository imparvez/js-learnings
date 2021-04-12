import React from 'react'
import { connect } from 'react-redux'
import { requestTaskCreation } from '../store/mutation'

const TaskList = ({ tasks, name, id, createNewTask }) => (
    <div>
        <h2>{name}</h2>
        {tasks.map(task => <div key={task.id}>{task.name}</div>)}
        <button onClick={() => createNewTask(id)}>Add New Task</button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask(id) {
            console.log('Creating new task ', id)
            dispatch(requestTaskCreation(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)