import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './Components/TodoSlice';

const App = () => {
  const [input, setInput] = useState('');

  // Access the todos from Redux state
  const todos = useSelector((state) => state.todos.todos);

  // Dispatch is used to send actions to Redux
  const dispatch = useDispatch();

  // Handle add todo
  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Redux Toolkit Todo App</h1>

      <div style={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo"
          style={styles.input}
        />
        <button onClick={handleAddTodo} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.todoItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(index))}
              style={styles.checkbox}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(index))} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '500px',
    margin: 'auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  input: {
    padding: '0.5rem',
    width: '60%',
    marginRight: '0.5rem',
  },
  addButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#8758ff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    borderBottom: '1px solid #ccc',
    paddingBottom: '0.5rem',
  },
  checkbox: {
    marginRight: '1rem',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '0.3rem 0.9rem',
    cursor: 'pointer',
  },
};

export default App;


