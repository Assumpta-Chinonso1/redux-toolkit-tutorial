  /*import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './Components/TodoSlice';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Redux Toolkit Todo App</h1>

      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo"
        />
        <button onClick={handleAddTodo} className="add-button">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              className="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(index))}
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
            <div className="todo-actions">
              <button onClick={() => dispatch(deleteTodo(index))} className="delete-button">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;*/


import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggledTodo } from './Components/TodoSlice';


const App = () => {

  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  const handleTodo = () => {
    if(input.trim() !== ''){
      dispatch(addTodo(input))
    setInput('')

  }
}

  return (
    <div className='todo-container'>
      <h1 className="todo-heading">Redux ToolKit Todo-List</h1>

      <div className="input-group">
        <input type="text"
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter a Todo'/>


        <button onClick={handleTodo} className='add-button'>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input type="checkbox" 
            className='checkbox'
            checked = {todo.completed} 
            onChange={() => toggledTodo(dispatch(index))}/>
            <span className = {`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
            </span>

            <div className="todo-actions">
              <button onClick={() => dispatch(toggledTodo(deleteTodo))} className='delete-button'>Delete</button>
            </div>

          </li>
        ))}
      </ul>
         
    </div>
  )
}

export default App





