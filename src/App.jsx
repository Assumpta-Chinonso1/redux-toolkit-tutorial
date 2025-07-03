
import React, { useState } from 'react'
import { useSelector } from 'react-redux';



const App = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state)=> state.todos.todos)
  
  return (
    <div>
      
    </div>
  )
}

export default App








