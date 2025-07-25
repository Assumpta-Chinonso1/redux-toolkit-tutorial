import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, deleteTodos, toggledTodos } from './Components/TodoSlice';
import './App.css'



const App = () => {
    const [input, setInput] = useState('');
    const todos = useSelector((state)=> state.todos.todos)
    const dispatch = useDispatch();

    const handleTodo = (e) => {
        e.preventDefault();

        if(input.trim() !== '') {
            dispatch(addTodos(input));
            setInput('')
        }
    }
    
   return (
          <div className='todo-container'>
              <h1 className="todo-heading"> ReduxToolKit Todo-List </h1>

      <div className="input-group">

        <input type="text" 
               value={input}
                  onChange={(e)=> setInput(e.target.value)}/>
                 <button onClick={handleTodo} className="add-button"> Add </button>
                </div>

      <ul className="todo-list">
        {todos.map((todo, index)=>(
            <li key={index} className="todo-item">
                <div className="todo-left">
                  <input type="checkbox" 
                    className='checkbox'
                      checked={todo.completed}
                      onChange={()=> dispatch(toggledTodos(index))}/>

                    <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                      {todo.text}
                    </span>

                </div>
                <button onClick={()=> dispatch(deleteTodos(index))} className="delete-button"> Delete </button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default App









