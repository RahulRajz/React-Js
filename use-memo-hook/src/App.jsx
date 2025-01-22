import { useMemo, useState } from 'react';
import './App.css'
const App =()=>{

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleUpdate(){
    setCount(count+1)
  }

  function expensiveTask(num){
    console.log("Inside Expensive Task");
    for(let i=0;i<1000000000;i++){}
    return num*2; 
  }

  let doubleVal = useMemo(()=>(expensiveTask(input)), [input]);

  return <>
  <div>
    <h1> Count: {count}</h1>
    <button onClick={handleUpdate}>Update</button>
    <br />
    <input type="number"
    placeholder='Enter number'
    onChange={(e)=>setInput(e.target.value)} />
    <h3> Double: {doubleVal}</h3>
  </div>
  </>
}
export default App;