import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  let initTodo;
  // if todos is not present in local storage, then set it to an empty array
  // else set it to the value present in local storage
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
    // JSON.stringify() is used to convert a JavaScript object into a JSON string
    // localStorage.setItem() is used to store data in the browser's local storage
    // Here we are storing the todos array in the local storage with the key "todos"
  };

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // we cannot directly modify the state in react
    // we have to use the setTodos function to update the state
    // setTodos is an asynchronous function
    // console.log("Deleted", todos);
  };

  // useState is a hook that allows us to use state in functional components
  // todos is the state variable that holds the array of todos
  // setTodos is the function that allows us to update the todos state

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <> 
      <Router>
        <Header title="My ToDos List" searchBar={false} />

        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
