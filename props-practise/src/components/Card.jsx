const Card = (props)=>{
    return <>
        <div className="user-container">
            <p id="user-name">{props.name}</p>
            <img id="user-img" src={props.img} alt={props.img} />
            <p>{props.desc}</p>
        </div>
    </>
}
export default Card;