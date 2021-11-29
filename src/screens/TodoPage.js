import React from 'react'
import { Link } from 'react-router-dom'
function TodoPage ({todo, onDelete, onUpdate}){
    

    const toggleCompleted = (id) => {
        const selectedTodo = todo.find(todos => todos.id === id);
        const toDo = {
            ...selectedTodo,
            completed: !selectedTodo.completed
        }
        onUpdate(toDo);
    }


    return (
        <div class="card">
            {
                todo ? 
                todo.map(todos => (
                    <div className="todo-card" key={todos.id}>
                        <h1 className="todo-name">{todos.name}</h1>
                        <h5 className="todo-description">{todos.description}</h5>
                        <Link to={`${todos.id}`} className="btn btn-warning">Edit</Link>
                        <button className="btn btn-danger" onClick={() => onDelete(todos.id)}>Delete</button>
                         
                        <button 
                        className={`btn ${todos.completed ? 'btn-completed' : 'btn-notcompleted'}`}
                        onClick={() => toggleCompleted(todos.id)}>
                            {todos.completed ? 'Completed' : 'Not Completed'}</button>
                        
                        
                        </div>
                )) : <h1>... LOADİNG TODO!!!</h1>
            }
        </div>
        
    )
}

export default TodoPage;
