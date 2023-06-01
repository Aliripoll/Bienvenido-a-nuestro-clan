import React from "react";
import "../styles/Landing.css";
import portada from "../images/dofus-group.png";
import { Link } from "react-router-dom";

function Landing () {
  return (
    <>
    <div className="loading">
      <div className="text_title">
        <p className="title_welcome">Bienvenido a </p>
        <span className="title_span">Nuestro Clan</span>
      </div>

        <img className="landing_img" src={portada} />
    <Link to="/Pantalla2">
    <button className="loading_btn">COMENZAR</button>
    </Link>
           
    </div>
    </>
  );
}

export { Landing };