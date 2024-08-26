import React, { useContext, useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PlanetCardImage from "./PlanetCardImage.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../store/appContext.js";

const PlanetCard = ({ planet, onViewMore, url }) => {
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(store.favorites.some((fav) => fav.uid === planet.uid));
  }, [store.favorites, planet.uid]);

  const handleToggleFavorite = () => {
    actions.toggleFavorite(planet);
  };

  return (
    <Card
      className="mx-2"
      style={{ width: "250px", height: "350px", position: "relative" }}
    >
      <PlanetCardImage
        url={url}
        alt={planet.name || "Planet Image"}
        style={{ height: "240px", objectFit: "cover" }}
      />
      <Card.Body
        className="d-flex flex-column"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        <Card.Title className="text-center">
          {planet.name || "No Name Available"}
        </Card.Title>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Button variant="primary" onClick={() => onViewMore(planet.uid, url)}>
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

export default PlanetCard;
