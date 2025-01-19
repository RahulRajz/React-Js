// It will runs on every time when count is updated

import { useEffect, useState } from "React";
const Varient3 =()=>{

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }
    useEffect(()=>{
        alert("It will run every time when count is updated");
    },[count])

    return <>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Click Here!</button>
        </div>
    </>
}
export default Varient3;