// That runs on every Render
import {useEffect, useState} from 'React';
const Varient1=()=>{
    const [count , setCount] = useState(0);
    
    function handleClick(){
        setCount(count+1);
    }
    useEffect(()=>{
        alert("I will run on Every Time");
        
    })

    return <>
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Click Here!</button>
    </div>
    </>
}
export default Varient1;