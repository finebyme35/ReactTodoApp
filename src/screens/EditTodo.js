import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router';
import { Link } from 'react-router-dom';

const EditTodo = ({todo, onUpdate}) => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    const saveTodo = (e) => {
        e.preventDefault();
        const updatedTodo = {
            id: Number(id),
            name,
            description,
            completed
        }
        onUpdate(updatedTodo)
    }
    useEffect(() => {
        const selectedTodo = todo.find(todos => todos.id === Number(id))
        setName(selectedTodo.name)
        setDescription(selectedTodo.description)
        setCompleted(selectedTodo.completed)
    }, [id, todo])

    return (
        <div className="form">
        <form className="form-area" onSubmit={saveTodo}>
                <div className="form-group">
                    <div className="form-group-area">
                    <h1 className="form-group-area-title">Edit Todo Form</h1>

                    <label htmlFor="form-name" className="form-name-label">Name:</label>
                    <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="form-name"
                    name="form-name"
                    className="form-name"></input>
                    <label htmlFor="form-description" className="form-description-label">Description:</label>
                    <textarea rows={5} cols={50} 
                    id="form-description"
                    name="form-description"
                    className="form-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <label htmlFor="form-completed" className="form-completed-label">Completed</label>
                    <input type="checkbox" 
                    id="form-completed" 
                    name="form-completed"
                    className="form-completed"
                    value={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    ></input>
                    <label className="form-completed-custom-label" htmlFor="form-completed">
                        {completed ? 'Completed' : 'Not Completed'}
                    </label>
                    <button type="submit" className="btn btn-edit"><Link to='/todo' className="btn-link">Save Todo</Link></button>
                    </div>
                </div>  
        </form>
    </div>

    )
}

export default EditTodo;
