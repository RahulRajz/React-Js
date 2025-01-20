import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  // const [count, setCounter] = useState(0);
  // // let val = useRef(0);
  // let btnRef = useRef();

  // function handleincr(){
  //   setCounter(count + 1)

  // val.current = val.current+1;
  // console.log("Value: ",val.current);

  // }
  // function handledecr(){
  //   setCounter(count -1)
  // }

  // function hanldeColor(){
  //   btnRef.current.style.backgroundColor = 'green';
  // }

    const [time, setTime] = useState(0);
    const timeRef = useRef(null);

  function handleStart(){
    timeRef.current = setInterval(()=>{
      setTime(time=>time+1)
    },1000);
  }
  function handleStop(){
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function handleReset(){
    handleStop()
    setTime(0);
  }


  return (
    <>
      <div>
        {/* <h1> Count: {count}</h1> <br />
      <button ref={btnRef} onClick={handleincr}>Increment</button> <br /> <br />
      <button onClick={handledecr}>Decrement</button> <br /> <br />
      <button onClick={hanldeColor}>Change Button Color</button>  */}

      <h1>StopWatch: {time} seconds</h1> <br />
      <button onClick={handleStart}>Start</button> <br /><br />
      <button onClick={handleStop}>Stop</button> <br /><br />
      <button onClick={handleReset}>Reset</button> <br /><br />
      </div>
    </>
  );
};
export default App;
