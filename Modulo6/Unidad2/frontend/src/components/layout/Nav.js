import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/layout/Nav.css";

export const Nav = () => {
  return (
    <nav>
      <div className="holder">
        <ul>
          <li>
            <NavLink activeClassName="activo" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activo" exact to="/nosotros">
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activo" exact to="/categorias">
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activo" exact to="/galeria">
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activo" exact to="/novedades">
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activo" exact to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
