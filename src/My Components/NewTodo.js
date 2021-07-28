import React, { useState } from 'react';

export const NewTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            alert('Title or Description cannot be empty')
        }
        else {
            props.newTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container">
            <h1 className="text-center my-3">Add a New Todo</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Todo Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Add an new Todo Title" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Todo Description</label>
                <textarea className="form-control" id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} rows="3" placeholder="Description of the Todo"></textarea>
            </div>
            <button className="btn btn-success btn-sm" onClick={submit}>Add</button>
        </div>
    )
}

