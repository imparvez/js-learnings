import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navigation = () => (
    <div>
        <Link to='/dashboard'>My Dashboard</Link>
    </div>
)

const ConnectedNavigation = connect(state => state)(Navigation)

export default ConnectedNavigation