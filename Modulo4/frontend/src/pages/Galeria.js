import React from "react";
import "../styles/components/pages/Galeria.css";

export const Galeria = () => {
  return (
    <main className="holder">
      <h2>Galeria</h2>
      <div className="galeria">
        <div className="foto">
          <img src="images/galeria/foto1.png" alt="foto1" />
        </div>
        <div className="foto">
          <img src="images/galeria/foto2.jpg" alt="foto2" />
        </div>
        <div className="foto">
          <img src="images/galeria/foto3.JPG" alt="foto3" />
        </div>
        <div className="foto">
          <img src="images/galeria/foto4.JPG" alt="foto4" />
        </div>
        <div className="foto">
          <img src="images/galeria/foto5.JPG" alt="foto5" />
        </div>
        <div className="foto">
          <img src="images/galeria/foto6.JPG" alt="foto6" />
        </div>
        <div className="foto">
          <img src="images/galeria/foto7.JPG" alt="foto7" />
        </div>
      </div>
    </main>
  );
};
