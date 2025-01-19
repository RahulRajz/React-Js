import { useState } from "react";
import Button from "./components/Button";

const App=()=>{

  const [count, setState] = useState(0);

  function handleClick(){
    setState(count+1);
  }

  return <>
  <p>You have Clicked {count}</p>
  <Button handleClick = {handleClick}/>
  </>
}
export default App;