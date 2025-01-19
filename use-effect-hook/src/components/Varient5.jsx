// Add a clean-up function

import { useEffect, useState } from "React";
const Varient5 =()=>{

    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }
    useEffect(()=>{
        alert("Count is updated");

        return ()=>{
            alert("Count is unmounted from UI");
        }
    },[count])

    return <>
        <div>
            <h1>Cout: {count}</h1>
            <button onClick={handleClick}>Click Here!</button>
        </div>
    </>
}
export default Varient5;