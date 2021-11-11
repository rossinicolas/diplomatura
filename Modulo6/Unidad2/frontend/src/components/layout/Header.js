import React from "react";
import "../../styles/components/layout/Header.css";

export const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <div className="logo">
          <img src="images/logo-aguila.png" width="15%" alt="logo-aguila" />
          <h1>Basquet del Club Atlético Estudiantes</h1>
        </div>
      </div>
    </header>
  );
};
