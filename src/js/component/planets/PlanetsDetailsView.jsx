import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import PlanetCardImage from "./PlanetCardImage.jsx";
import PlanetDetails from "./PlanetDetails.jsx";
import { Container, Row, Col } from "react-bootstrap";

const PlanetDetailsView = () => {
  const { uid } = useParams(); // Obtenemos la ID de la URL
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPlanetDetails(uid); // Cargamos los detalles del personaje
  }, [uid]);

  return (
    // <Container className="my-5" style={{background: "linear-gradient(to right, #1f4037, #99f2c8)",}}>
    //   {store.selectedPlanet ? (
    //     <Row className="d-flex flex-column align-items-center">
    //       <h1 className="text-danger">{store.selectedPlanet.name}</h1>
    //       <PlanetCardImage
    //         url={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
    //         alt={store.selectedPlanet.name}
    //         style={{ height: "400px", width: "300px", objectFit: "cover" }}
    //       />
    //       <PlanetDetails />
    //     </Row>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </Container>
    <Container className="my-5" style={{ background: "linear-gradient(to right, #1f4037, #99f2c8)" }}>
      {store.selectedPlanet ? (
        <Row className="d-flex align-items-stretch"> {/* Cambiado a align-items-stretch */}
          <Col md={6} className="text-center">
            <div style={{ minHeight: "500px", margin: "20px 0"}}> {/* Margen arriba y abajo */}
              <PlanetCardImage
                url={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                alt={store.selectedPlanet.name}
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
            <h1 className="text-danger">{store.selectedPlanet.name}</h1>
            <PlanetDetails />
          </Col>
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default PlanetDetailsView;