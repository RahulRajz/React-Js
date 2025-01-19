// Multiple Dependencies

import { useEffect, useState } from "React";
const Varient4 =()=>{

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    function handleCount(){
        setCount(count+1);
    }
    function handleTotal(){
        setTotal(total+1);
    }
    useEffect(()=>{
        alert("It will run every time when count/total is updated");
    },[count,total])

    return <>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleCount}>Click Here!</button>
            <br />
            <h1>Total: {total}</h1>
            <button onClick={handleTotal}>Click Here!</button>
        </div>
    </>
}
export default Varient4;