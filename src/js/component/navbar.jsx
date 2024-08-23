import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StarWarsImagen from "../../img/sc2.png";
import { Dropdown } from "react-bootstrap"; // Importamos Dropdown de Bootstrap
import { Context } from "../store/appContext"; // Importamos el contexto
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { store, actions } = useContext(Context); // Usamos el contexto

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src={StarWarsImagen}
          alt="Star Wars Logo"
          className="navbar-brand mb-0 h1"
          style={{ maxHeight: "50px" }}
        />
      </Link>
      <div className="ml-auto">
        <Dropdown align="end">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Favorites ({store.favorites.length})
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {store.favorites.length === 0 ? (
              <Dropdown.Item>No favorites added</Dropdown.Item>
            ) : (
              store.favorites.map((fav, index) => (
                <Dropdown.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  {fav.name}
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => actions.toggleFavorite(fav)} // Permite eliminar el favorito
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  />
                </Dropdown.Item>
              ))
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
