import React from "react";
import { Card, Button } from "react-bootstrap";
import starWarsImag from "../../img/sc1.png";

const CharacterCard = ({ character, onViewMore }) => {
  return (
    <Card className="mx-2" style={{ width: "200px", height: "300px" }}>
      <div className="ratio ratio-4x3">
        <Card.Img
          src={starWarsImag}
          className="card-img-top"
          style={{ height: "175px", objectFit: "cover" }}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center">{character.name}</Card.Title>
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
