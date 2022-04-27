import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/todoList";
import "./App.css";

function App() {
  // STATES
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // USE EFFECTS
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveToLocal();
    filterHandler();
  }, [todos, status]);

  // FUNCTIONS
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  // returning JSX
  return (
    <div className="App">
      <header>
        <h1>Jatin's To-Do List</h1>
      </header>
      {/* form  */}
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        // saveToLocal={saveToLocal}
      />

      {/* list  */}
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
