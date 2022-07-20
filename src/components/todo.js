import React from "react";
import "../App.css";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((element) => element.key !== todo.key));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.key === todo.key) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completedHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodoHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
