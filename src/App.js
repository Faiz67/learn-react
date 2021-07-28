import './App.css';
import { Header } from './My Components/Header'
import { Footer } from './My Components/Footer';
import { Todos } from './My Components/Todos';
import React, { useState } from 'react';
import { NewTodo } from './My Components/NewTodo';

function App() {
const onDelete = (todo) => {
  console.log('This on Delete Works', todo)
  setTodos(todos.filter((e) => {
    return e!==todo;
  }))
}

const newTodo = (title, desc) =>{
  console.log('Your New Todo is', title, desc)
  let sno;
  if(todos.length===0)(
    sno = 0
  )
  else(
    sno = todos[todos.length-1].sno + 1
  )
   
  const myTodo = {
    sno: sno,
    task: title,
    Description: desc
  }
  console.log(myTodo);
  setTodos([...todos, myTodo]);
}

const [todos, setTodos] = useState([]);

  return (
    <>
    <Header title="Welcome to My App" searchBar={false}/>
    <NewTodo newTodo={newTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    
    </>
  );
}

export default App;
