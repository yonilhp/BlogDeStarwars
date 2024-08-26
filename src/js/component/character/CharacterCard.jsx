import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import CharacterCardImage from "./CharacterCardImage.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../store/appContext.js"; // Importamos el contexto

const CharacterCard = ({ character, onViewMore, url }) => {
  const { store, actions } = useContext(Context); // Usamos el contexto para obtener acciones y store
  const [isFavorite, setIsFavorite] = useState(
    store.favorites.some((fav) => fav.uid === character.uid)
  );

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    actions.toggleFavorite(character);
  };

  return (
    <Card
      className="mx-2"
      style={{ width: "250px", height: "350px", position: "relative" }}
    >
      <CharacterCardImage
        url={url}
        alt={character.name || "Character Image"}
        style={{ height: "240px", objectFit: "cover" }}
      />
      <Card.Body
        className="d-flex flex-column"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        <Card.Title className="text-center">
          {character.name || "No Name Available"}
        </Card.Title>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Button
            variant="primary"
            onClick={() => onViewMore(character.uid, url)} // Pasamos la URL de la imagen
          >
            Ver más
          </Button>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={handleToggleFavorite}
            style={{
              color: isFavorite ? "red" : "gray",
              cursor: "pointer",
              marginLeft: "10px",
              fontSize: "1.5rem",
            }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
