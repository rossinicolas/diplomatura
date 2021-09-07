import React from "react";
import "../styles/components/pages/Categorias.css";

export const Categorias = () => {
  return (
    <main className="holder">
      <h2>Categorias</h2>
      <div className="categoria">
        <img src="images/categorias/escuelita.JPG" alt="escuelita" />
        <div className="info">
          <h4>Escuelita</h4>
          <p>
            Nivel inicial de chicos entre 4 y 7 años de edad que comienzan a dar
            sus primeros pasos en esta disciplina.
          </p>
        </div>
      </div>
      <div className="categoria">
        <img src="images/categorias/minibasquet.JPG" alt="mini" />
        <div className="info">
          <h4>Minibasquet</h4>
          <p>
            Categoría de chicos y chicas hasta los 12 años en la cual, se
            comienza a tomar conocimietos de fundamentos básicos del juego de
            una manera lúdica.
          </p>
        </div>
      </div>
      <div className="categoria">
        <img src="images/categorias/formativas.JPG" alt="formativas" />
        <div className="info">
          <h4>Formativas</h4>
          <p>
            Jugadores y Jugadoras de entre 13 años y 19 años que fortalecen su
            juego mediante la competencia deportiva.
          </p>
        </div>
      </div>
      <div className="categoria">
        <img src="images/categorias/primera.jpg" alt="primera" />
        <div className="info">
          <h4>Primera División</h4>
          <p>
            Plantel superior que participa de competancias locales, regionales y
            nacionales.
          </p>
        </div>
      </div>
    </main>
  );
};
