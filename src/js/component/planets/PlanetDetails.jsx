import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Card } from "react-bootstrap";

const PlanetDetails = () => {
  const { store } = useContext(Context);

  if (!store.selectedPlanet) return null;

  const { name, diameter, climate, terrain, population } = store.selectedPlanet;

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Diameter:</strong> {diameter} km
          <br />
          <strong>Climate:</strong> {climate}
          <br />
          <strong>Terrain:</strong> {terrain}
          <br />
          <strong>Population:</strong> {population}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlanetDetails;
