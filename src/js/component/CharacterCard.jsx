import React from "react";
import { Card, Button } from "react-bootstrap";
import starWarsImag from "../../img/sc1.png";

const CharacterCard = ({ character, onViewMore }) => {
  return (
    <Card
      className="mx-2"
      style={{ width: "250px", height: "350px", position: "relative" }}
    >
      <div className="ratio ratio-4x3">
        <Card.Img
          src={starWarsImag}
          className="card-img-top"
          style={{ height: "240px", objectFit: "cover" }}
        />
      </div>
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
