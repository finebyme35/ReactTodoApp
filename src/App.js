import CreateTodo from "./components/CreateTodo";
import EditTodo from "./screens/EditTodo";
import HomePage from "./screens/HomePage";
import TodoPage from "./screens/TodoPage";
import {Routes, Route} from 'react-router-dom'
import TodoLayout from "./layouts/TodoLayout";
import Toolbar from "./components/Toolbar";
import { useState } from "react";

const todos = [{
  id: Math.random(),
  name: "Todo 1",
  description: "todos completed",
  completed: true
},
{
  id: Math.random(),
  name: "Todo 2",
  description: "todos is created",
  completed: false
}]

function App() {
  const [todo, setTodo] = useState(todos);
  const addTodo = (todos) => setTodo([...todo, todos])
  const editTodo = (editTodos) => {
    const editsTodo = todo.map(todos => {
      if(todos.id === editTodos.id)
        return editTodos
      
      return todos

    })
    setTodo(editsTodo)
    
  }
  const deleteTodo = (id) => {
    const filteredTodos = todo.filter(todos => todos.id !== id)
    setTodo(filteredTodos);
  }
  return (
    <>
    <Toolbar />
      <div className="container">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/create' element={<CreateTodo onCreate={addTodo}/>} />
          <Route path="/todo" element={<TodoLayout />}>
              <Route path=':id' element={<EditTodo todo={todo} onUpdate={editTodo}/>} />
              <Route index element={<TodoPage todo={todo} onDelete={deleteTodo} onUpdate={editTodo}/>} />
          </Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
