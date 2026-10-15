import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo, editTodo } from '../features/todo/todoSlice'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  const handleEditClick = (todo) => {
    setEditId(todo.id)
    setEditText(todo.title)
  }

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, title: editText }))
    }
    setEditId(null)
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '8px' }}>
            {editId === todo.id ? (
              <>
                <input 
                  type="text" 
                  value={editText} 
                  onChange={(e) => setEditText(e.target.value)} 
                />
                <button onClick={() => handleSave(todo.id)}>save</button>
                <button onClick={() => setEditId(null)}>cancel</button>
              </>
            ) : (
              <>
                <span 
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  style={{ 
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    marginRight: '10px',
                    cursor: 'pointer'
                  }}
                >
                  {todo.title}
                </span>
                <button onClick={() => handleEditClick(todo)}>edit</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList