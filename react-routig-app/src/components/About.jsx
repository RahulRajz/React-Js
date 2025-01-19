import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact");
  }
  return (
    <div>
      About Page
      <button onClick={handleClick}>Contact Us</button>
    </div>
  );
};

export default About;
