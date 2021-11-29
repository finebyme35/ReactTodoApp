
import React from 'react'
import { NavLink } from 'react-router-dom'

const Toolbar = () => {
    return (
        <nav className="toolbar">
            <h1><NavLink to='/' className="toolbar-title">T0 D0 APP</NavLink></h1>
            <div className="toolbar-link">
                <NavLink to='/' className="toolbar-link-item">Home Page</NavLink>
                <NavLink to='/todo' className="toolbar-link-item">Todo Page</NavLink>
                <NavLink to='/create' className="toolbar-link-item">Create TODO Page</NavLink>
            </div>
        </nav>
    )
}

export default Toolbar;