const Panel=(props)=>{
    return <>
    <div>
        <h3>{props.title}</h3>
        {props.active ? (<p>{props.children}</p>) : (<button onClick={props.onshow}>Show</button>)}
    </div>
    </>
}
export default Panel;