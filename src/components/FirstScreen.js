import React from "react";
import "../styles/FirstScreen.css";
import { Link } from "react-router-dom";

function FirstScreen () {
  return (
   
    <div className="text_container">
        <span className="title">¡Hola terrícola!</span>
        <p className="paragraph"> Mi nombre es Terricoleta y tengo una misión: 
            conseguir que te unas a Nuestro Clan.
            Para ello
            necesito que desbloquees cada una de las pantallas
            y consigas los 10 huevos mágicos.
        </p>
        <span className="end_title">¿Te atreves a conseguirlo?</span>
        <Link to="/SecondScreen">
    <button className="next_btn">SIGUIENTE</button>
    </Link>
    </div>
   
  );
}

export { FirstScreen };