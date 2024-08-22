import React from "react";
import { Link } from "react-router-dom";
import StarWarsImagen from "../../img/sc2.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src={StarWarsImagen}
          alt="Star Wars Logo"
          className="navbar-brand mb-0 h1"
          style={{ maxHeight: "50px" }} // Ajusta la altura máxima de la imagen si es necesario
        />
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};
