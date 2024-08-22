import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";

const CharacterDetails = () => {
  const { store } = useContext(Context);

  if (!store.selectedCharacter) return null;

  const { name, height, hair_color, eye_color, gender } =
    store.selectedCharacter;

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Height:</strong> {height} cm
          <br />
          <strong>Hair Color:</strong> {hair_color}
          <br />
          <strong>Eye Color:</strong> {eye_color}
          <br />
          <strong>Gender:</strong> {gender}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CharacterDetails;
