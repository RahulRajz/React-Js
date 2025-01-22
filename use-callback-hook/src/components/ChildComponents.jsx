import React from "react";

const ChildComponents = (props) => {
    console.log("Child Components got re-render again and again");
  
    return (
      <div>
        <button onClick={props.handleClick}>{props.btnName}</button>
      </div>
    );
  }

export default ChildComponents;
