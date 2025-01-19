import React from "react";
const App =()=>{

  let fruits = ["Apple", "Mango", "Orange", "Banana","Grapes"];
  // let fruits = [];
  // if(fruits.length===0){
  //   return <h3>Nothing </h3>
  // }
  // let msg = fruits.length===0 ? <div>Nothing</div>:<div>Something Present</div>;

  return <>
  <h1>Fruits</h1>
  {/* {msg} */}
  {fruits.length===0 && <div><h2>Nothing </h2></div>}
  {fruits.map((item)=>(
      <div key={item}>{item}</div>
    ))}

  </>
}
export default App;