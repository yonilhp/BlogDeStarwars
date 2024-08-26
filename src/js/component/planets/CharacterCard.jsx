import React, { useContext, useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import CharacterCardImage from "./CharacterCardImage.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../store/appContext.js";

const CharacterCard = ({ character, onViewMore, url }) => {
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);

  // Efecto para sincronizar el estado local `isFavorite` con el estado global `store.favorites`
  useEffect(() => {
    setIsFavorite(store.favorites.some((fav) => fav.uid === character.uid));
  }, [store.favorites, character.uid]);

  const handleToggleFavorite = () => {
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
            onClick={() => onViewMore(character.uid, url)}
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
