import { createSlice } from "@reduxjs/toolkit";
const savedTodos = JSON.parse(localStorage.getItem("todos")) || []

const initialState = {
    todos : savedTodos
}
export const todoSlice = createSlice({
    name : "todo",
    initialState ,
    reducers : {
        addTodo : (state , action) =>{
            state.todos.push({
                id:Date.now(),
                title:action.payload,
                completed:false
            })
        },

        deleteTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        toggleTodo : (state , action) => {
            const todo = state.todos.find((todo) => todo.id == action.payload)

            if(todo){
                todo.completed = !todo.completed
            }
        },

        editTodo : (state , action) => {
            const todo = state.todos.find((todo) => todo.id == action.payload.id)
            if(todo){
                todo.title = action.payload.title
            }
        }
    },
})

export const {addTodo , deleteTodo , editTodo , toggleTodo} = todoSlice.actions
export default todoSlice.reducer