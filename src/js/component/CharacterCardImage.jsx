import React from "react";
import PropTypes from "prop-types";
// import starWarsImag from "../../img/sc1.png"; // Importa la imagen

const CharacterCardImage = ({ style, url }) => {
  return (
    <div
      className="w-100 d-flex justify-content-center overflow-hidden"
      style={{ height: style.height || "380px", ...style }}
    >
      <img
        src={url}
        className="img-fluid w-100 h-100"
        style={{ objectFit: "cover" }}
        alt="Character"
      />
    </div>
  );
};

CharacterCardImage.propTypes = {
  style: PropTypes.object,
};

CharacterCardImage.defaultProps = {
  style: { height: "380px", objectFit: "cover" },
};

export default CharacterCardImage;
