import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about");
  }

  return (
    <div>
      <button onClick={handleClick}>About</button>
    </div>
  );
};

export default Home;
