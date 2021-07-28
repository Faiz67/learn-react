import React from 'react'

export const TodoList = ({todo, onDelete}) => {
    return (
        <div>
            <h1>{todo.task}</h1>
            <p>{todo.Description}</p>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
        </div>
    )
}