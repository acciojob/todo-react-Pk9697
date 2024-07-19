
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo,setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos((prev) => [...prev, { id: Date.now(), text: todo }]);
      setTodo('');
    }
  }

  return (
    <div className="main">
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <input name="todo" value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="Enter Todo" />
      <button onClick={handleAddTodo}>Add Todo</button>

      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <p>{todo.text}</p>
          <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App
