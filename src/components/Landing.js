import React from "react";
import "../styles/Landing.css";
import portada from "../images/portada-app.png" 

function Landing () {
  return (
    <>
    <div className="loading">
      <img className="landing_container" src={portada} />  
       <button className="loading_btn">COMENZAR</button>
    </div>
    </>
  );
}

export { Landing };