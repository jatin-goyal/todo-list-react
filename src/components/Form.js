import React from "react";
import "../App.css";
import { FaPlusSquare } from "react-icons/fa";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, key: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <FaPlusSquare className="fa-2xl" />
      </button>

      <div className="select">
        <select
          onChange={(e) => setStatus(e.target.value)}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        {/* <i className="fa-solid fa-square-caret-down fa-2xl"></i> */}
      </div>
    </form>
  );
};

export default Form;
