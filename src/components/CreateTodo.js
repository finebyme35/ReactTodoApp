
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const CreateTodo = ({onCreate}) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.random(),
            name,
            description,
            completed:false
        }
        onCreate(newTodo);
        navigate('/todo');
    }

    return (
        <div className="form">
            <form className="form-area" onSubmit={addTodo}>
                    <div className="form-group">
                        <div className="form-group-area">
                            <h1 className="form-group-area-title">Add Todo Form</h1>

                            <label htmlFor="form-name" className="form-name-label">Name:</label>
                            <input type="text"
                            id="form-name"
                            name="form-name"
                            className="form-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ></input>
                            <label htmlFor="form-description" className="form-description-label">Description:</label>
                            <textarea rows={5} cols={50}
                            id="form-description"
                            name="form-description"
                            className="form-description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                            
                            <button type="submit" className="btn btn-submit">Add Todo</button>
                        </div>
                    </div>  
            </form>
        </div>
    )
}

export default CreateTodo;
