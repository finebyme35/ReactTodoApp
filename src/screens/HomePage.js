
import React from 'react'
import { NavLink } from 'react-router-dom';

 const HomePage = () => {
    return (
        <div className="main-content">
            <div className="main-content-items">
                <h1 className="main-title">Welcome to Todo App</h1>
                <NavLink to='/todo' className="main-button">Todo Page</NavLink>
            </div>
        </div>
    )
}

export default HomePage;
