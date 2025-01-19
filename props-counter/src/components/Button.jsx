const Button=(props)=>{
    return <>
    <div>
        <p>{props.children}</p>
       <button onClick={props.handleClick}>Click Here!</button> 
    </div>
    </>
}
export default Button;