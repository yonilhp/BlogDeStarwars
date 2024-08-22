// src/components/CharacterCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import CharacterCardImage from "./CharacterCardImage.jsx";

const CharacterCard = ({ character, onViewMore }) => {
  return (
    <Card
      className="mx-2"
      style={{ width: "250px", height: "350px", position: "relative" }}
    >
      <CharacterCardImage
        alt={character.name || "Character Image"} // Texto alternativo para la imagen
        style={{ height: "240px", objectFit: "cover" }} // Estilo de la imagen
      />
      <Card.Body
        className="d-flex flex-column"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        <Card.Title className="text-center">
          {character.name || "No Name Available"}
        </Card.Title>
        <Button
          variant="primary"
          className="mt-auto"
          onClick={() => onViewMore(character.uid)}
        >
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
