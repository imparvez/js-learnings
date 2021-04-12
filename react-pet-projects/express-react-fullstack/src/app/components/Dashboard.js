import React from 'react'
import { connect } from 'react-redux'
import TaskList from './TaskList'

const Dashboard = ({ groups }) => (
    <div>
        <h2>Dashboard</h2>
        {
            groups.map(group => (
                <TaskList key={group.id} id={group.id} name={group.name} />
            ))
        }
    </div>
)

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

const ConnectedDashboard = connect(mapStateToProps)(Dashboard)

export default ConnectedDashboard