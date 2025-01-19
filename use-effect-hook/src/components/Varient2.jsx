// That runs on only first render
import {useEffect ,useState } from "React";
const Varient2 =()=>{

    const [count, setCount] = useState(0);
    function handleClick(){        
        setCount(count+1);
    }

    useEffect(()=>{
        alert("I will run on only first Render");
    },[])

    return <>
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Click Here!</button>
        </div>
    </>
}
export default Varient2;