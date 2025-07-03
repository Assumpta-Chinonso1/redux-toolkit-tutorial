import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggledTodo } from './Components/TodoSlice'
import './App.css'



const App = () => {
  const [input, setInput] = useState('')
  const todos = useSelector((state)=> state.todos.todos)
  const dispatch = useDispatch()

  const handleTodo = (e) =>{
    if(input.trim() !== ''){
      e.preventDefault()
      dispatch(addTodo(input))
      setInput('')
    }
  }
  return (
    <div className='todo-container'>
      <h1 className="todo-heading">
        ReduxToolKit Todo-list
      </h1>

      <div className="input-group">
        <input type="text" 
        value={input}
        placeholder='Enter a todo'
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleTodo} className="add-button">
          Add
        </button>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
                <div className="todo-left">
              <input type="checkbox" 
              className='checkbox'
              checked={todo.completed} 
              onChange={() => dispatch(toggledTodo(index))}
              />
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </span>
            </div>
                   <button onClick={() => dispatch(deleteTodo(index))} className="delete-button">
              Delete
             </button>
            </li>
          ))}
        </ul>
      </div>
       
    </div>
  )
}

export default App









