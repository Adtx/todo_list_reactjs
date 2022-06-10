import React,  { useState } from 'react'

function TodoForm({ edit, onSubmit}) {

    const [input, setInput] = useState(edit ? edit.value : '')

    function handleSubmit(e) {
        e.preventDefault()

        onSubmit({
            id: edit ? edit.id : Math.floor(Math.random() * 10000),
            text: input,
            complete: edit ? edit.complete: false
        })
        if(!edit) setInput('')
    }

    const buttonText = edit ? 'Update' : 'Add todo'

  return (
    <div>
        <form action="" className="todo-form" onSubmit={handleSubmit}>
            <input type="text" autoFocus placeholder="Add a todo" value={input} name="text" className="todo-input edit" onChange={e => setInput(e.target.value)}/>
            <button className="todo-button edit">{buttonText}</button>
        </form>
    </div>
  )
}

export default TodoForm