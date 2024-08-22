import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Row, Container } from "react-bootstrap";
import CharacterCard from "../component/CharacterCard.jsx";
import CharacterDetails from "../component/CharacterDetails.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCharacters();
  }, []);

  const handleViewMore = (uid) => {
    actions.loadCharacterDetails(uid);
  };

  return (
    <Container>
      <Row className="overflow-auto flex-nowrap">
        {store.characters.map((character) => (
          <CharacterCard
            key={character.uid}
            character={character}
            onViewMore={handleViewMore}
          />
        ))}
      </Row>

      <CharacterDetails />
    </Container>
  );
};
