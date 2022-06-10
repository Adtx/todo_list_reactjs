import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {

    const [todos, setTodos] = useState([])

   function addTodo(todo) {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return 
        }
        const newTodos = [todo, ...todos]
        
        setTodos(newTodos)
    }
    
    function updateTodo(id, newValue) {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return 
        }
        setTodos(todos => todos.map(todo => todo.id === id ? newValue : todo))
    }

    function removeTodo(id) {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    function completeTodo(id) {

        setTodos(todos => todos.map(todo => todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo))

        /* let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.iscomplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos) */
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList