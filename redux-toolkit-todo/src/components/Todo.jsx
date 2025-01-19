import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>My Todo</h1>
      </div>
      {todos.map((todo) => (
        <li type="1" key={todo.id}>
          {todo.text}

          <button onClick={() => dispatch(removeTodo(todo.id))}>
            Remove Todo
          </button>
        </li>
      ))}
    </>
  );
};

export default Todo;
