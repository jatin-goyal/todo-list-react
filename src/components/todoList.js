import React from "react";
import "../App";
import Todo from "./todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.key}
            text={todo.text}
            completed={todo.completed}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
