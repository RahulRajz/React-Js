function Random(){
    let number = Math.floor(Math.random()*100)

    return <h4 style={{'background': 'violet'}}>
        Random Number is: {number}
    </h4>
}
export default Random;