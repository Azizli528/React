import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const TodoForm = () => {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return;
    dispatch(addTodo(title))
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        type='text' 
        placeholder='type task' 
      />
      <button type="submit">add</button>
    </form>
  )
}

export default TodoForm