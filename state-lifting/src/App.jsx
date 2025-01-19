import Panel from "./compontnts/panel";
import { useState } from "react";

function App() {

  const [active, setActive] = useState(0);

  return (
    <>
     <h1>State Lifting Practise</h1>
     <Panel title="React Js" active={active===0} onshow={()=>setActive(0)}>
      Learn By Love Babbar
     </Panel>

     <Panel title="Node Js" active={active===1} onshow={()=>setActive(1)}>
      Learn by Shreyansh Coding
     </Panel>
    </>
  )
}

export default App
