import React from 'react'
import { Outlet } from 'react-router'

const TodoLayout = () => {
    return (
        <div className="todo-layout">
            <Outlet />
        </div>
    )
}

export default TodoLayout;
