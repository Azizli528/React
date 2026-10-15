import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoApp = () => {
  const todos = useSelector((state) => state.todos.todos)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default TodoApp