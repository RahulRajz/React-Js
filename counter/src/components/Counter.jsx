import { useState } from "react";

const Counter = () => {

    const [count, setState] = useState(0)

  return <>
    <div className="container">
        <p>You have Clicked {count} times</p>
        <button className="btn btn-primary" onClick={()=>{setState(count+1)}}>Click Here!</button>
        <button className="btn btn-primary" onClick={()=>{setState(count-1)}}>Click Here!</button>
    </div>
  </>
}
export default Counter;
