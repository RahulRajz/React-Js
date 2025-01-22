import { useCallback, useState } from 'react';
import './App.css'
import ChildComponents from './components/ChildComponents';

const App =()=>{
  const [count, setCount] = useState(0);

  const handleClick = useCallback(()=>{
    setCount(count+1);
  }, [])



  return <>
  <div>
   <h1> Count: {count}</h1>
   <button onClick={handleClick}>Update</button>
  </div>
  <br />
  <div>
    <ChildComponents 
    btnName = "Click Me .."
    handleClick={handleClick}
    />
  </div>
  </>
}
export default App;