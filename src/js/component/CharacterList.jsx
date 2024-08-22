import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Row, Container, Modal } from "react-bootstrap";
import CharacterCard from "./CharacterCard.jsx";
import CharacterCardImage from "./CharacterCardImage.jsx";
import CharacterDetails from "./CharacterDetails.jsx";

const CharacterList = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    actions.loadCharacters();
  }, []);

  const handleViewMore = (uid) => {
    actions.loadCharacterDetails(uid);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  // Asegúrate de que store.selectedCharacter esté definido antes de acceder a él
  const selectedCharacter = store.selectedCharacter || {};

  return (
    <Container>
      <Row
        className={`overflow-auto flex-nowrap ${showModal ? "opacity-50" : ""}`}
      >
        {store.characters.map((character) => (
          <CharacterCard
            key={character.uid}
            character={character}
            onViewMore={handleViewMore}
          />
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Character Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCharacter && (
            <>
              <CharacterCardImage
                alt={selectedCharacter.name}
                style={{ height: "240px", objectFit: "cover" }} // Ajusta el estilo según sea necesario
              />
              <CharacterDetails />
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CharacterList;
