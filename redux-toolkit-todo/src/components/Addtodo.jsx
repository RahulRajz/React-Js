import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Addtodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addTodohandler(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <>
      <form onSubmit={addTodohandler}>
        <input
          type="text"
          placeholder="Enter todo Here...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"> Add Todo </button>
      </form>
    </>
  );
};

export default Addtodo;
