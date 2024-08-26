import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext.js";
import { Row, Container, Modal } from "react-bootstrap";
import PlanetCard from "./PlanetCard.jsx";
import PlanetCardImage from "./PlanetCardImage.jsx";
import PlanetDetails from "./PlanetDetails.jsx";

const PlanetList = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    actions.loadPlanets(); // Cargar planetas
  }, []);

  const handleViewMore = (uid, url) => {
    actions.loadPlanetDetails(uid);
    actions.setPlanetImageUrl(url); // Guarda la URL de la imagen en el estado global
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="bg-secondary">
      <h1 className="text-danger">Planets</h1>
      <Row
        className={`overflow-auto flex-nowrap ${showModal ? "opacity-50" : ""}`}
      >
        {store.planets.map((planet) => (
          <PlanetCard
            key={planet.uid}
            planet={planet}
            onViewMore={handleViewMore}
            url={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
          />
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Planet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {store.selectedPlanet && (
            <div className="d-flex flex-column">
              <PlanetCardImage
                url={store.planetImageUrl} // Usa la URL de la imagen almacenada
                alt={store.selectedPlanet.name}
                style={{ height: "380px" }}
              />
              <PlanetDetails />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PlanetList;
