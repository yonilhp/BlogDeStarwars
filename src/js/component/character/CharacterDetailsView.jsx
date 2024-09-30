import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import CharacterCardImage from "./CharacterCardImage.jsx";
import CharacterDetails from "./CharacterDetails.jsx";
import { Container, Row, Col } from "react-bootstrap";

const CharacterDetailsView = () => {
  const { uid } = useParams(); // Obtenemos la ID de la URL
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCharacterDetails(uid); // Cargamos los detalles del personaje
  }, [uid]);

  return (
    <Container className="my-5" style={{ background: "linear-gradient(to right, #1f4037, #99f2c8)" }}>
      {store.selectedCharacter ? (
        <Row className="d-flex align-items-stretch"> {/* Cambiado a align-items-stretch */}
          <Col md={6} className="text-center">
            <div style={{ minHeight: "500px", margin: "20px 0"}}> {/* Margen arriba y abajo */}
              <CharacterCardImage
                url={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                alt={store.selectedCharacter.name}
                className="img-fluid" // Clase Bootstrap para hacer la imagen responsive
                style={{ 
                  maxHeight: "100%", // Cambiado a 100% para llenar el div
                  maxWidth: "100%", 
                  height: "auto", 
                  width: "auto", 
                  objectFit: "contain",
                  borderRadius: "15px",
                  background: "linear-gradient(to right, #ffcc00, #ff6600)", // Gradiente de amarillo a anaranjado
                }}
              />
            </div>
          </Col>
          <Col md={6} style={{ minHeight: "500px" }}> {/* Asegurando que tenga la misma altura */}
            <h1 className="text-danger">{store.selectedCharacter.name}</h1>
            <CharacterDetails />
          </Col>
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default CharacterDetailsView;
