import './App.css';
import { Header } from './My Components/Header'
import { Footer } from './My Components/Footer';
import { Todos } from './My Components/Todos';
import React, { useState, useEffect } from 'react';
import { NewTodo } from './My Components/NewTodo';
import { About } from "./My Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log('This on Delete Works', todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const newTodo = (title, desc) => {
    console.log('Your New Todo is', title, desc)
    let sno;
    if (todos.length === 0) (
      sno = 0
    )
    else (
      sno = todos[todos.length - 1].sno + 1
    )

    const myTodo = {
      sno: sno,
      task: title,
      Description: desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);



  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="Welcome to My App" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <NewTodo newTodo={newTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>

          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
