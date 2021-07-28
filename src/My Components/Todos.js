import React from 'react'
import {TodoList} from './TodoList'
export const Todos = (props) => {
    return (
        <div className="container">
            {props.todos.length===0 ? "No Todos to Display" : 
            props.todos.map((todo)=>{
                return <TodoList todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
                }
            
            
        </div>
    )
}
