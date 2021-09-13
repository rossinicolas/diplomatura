import React from "react";
import "../styles/components/pages/HomePage.css";

export const HomePage = () => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img
          src="images/home/cancha.JPG"
          width="100%"
          height="1%"
          alt="cancha"
        />
      </div>
      <div className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
          <p>
            Información, resultados, novedades y todo sobre el Basquet del Club
            Atletico Estudiantes de Paraná, Entre Rios.
          </p>
        </div>
        <div className="redes right">
          <h2>Redes Sociales</h2>
          <div className="iconoRedes">
            <a href="https://www.facebook.com/cae.basquetparana/">
              <img src="images/home/icono_face.png" alt="iconoFace" />
            </a>
            <a href="https://www.instagram.com/cae.basquet/?hl=es">
              <img src="images/home/icono_instagram.png" alt="iconoInsta" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
