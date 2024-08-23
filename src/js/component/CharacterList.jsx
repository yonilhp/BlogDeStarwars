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

  return (
    <Container className="bg-secondary">
      <h1 className="text-danger">Characters</h1>
      <Row
        className={`overflow-auto flex-nowrap ${showModal ? "opacity-50" : ""}`}
      >
        {store.characters.map((character) => (
          <CharacterCard
            key={character.uid}
            character={character}
            onViewMore={handleViewMore}
            url={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
          />
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Character Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {store.selectedCharacter && (
            <div className="d-flex flex-column">
              <CharacterCardImage
                url={store.selectedCharacter.uid}
                alt={store.selectedCharacter.name}
                style={{ height: "380px" }}
              />
              <CharacterDetails />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CharacterList;
