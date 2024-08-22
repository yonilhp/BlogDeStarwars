import React from "react";
import { Card, Button } from "react-bootstrap";

const CharacterCard = ({ character, onViewMore }) => {
  return (
    <Card className="mx-2" style={{ minWidth: "200px" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Button variant="primary" onClick={() => onViewMore(character.uid)}>
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
