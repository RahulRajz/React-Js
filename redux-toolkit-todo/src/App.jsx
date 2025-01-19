import "./App.css";
import Addtodo from "./components/Addtodo";
import Todo from "./components/Todo";

function App() {
  
  return (
    <>
      <div>
        <h1>Redux Toolkit</h1>
        <Addtodo />
        <Todo />
      </div>
    </>
  );
}

export default App;
