import React from "react";
import PropTypes from "prop-types";
import starWarsImag from "../../img/sc1.png"; // Importa la imagen

const CharacterCardImage = ({ alt, style }) => {
  return (
    <div
      className="w-100 d-flex justify-content-center overflow-hidden"
      style={{ height: style.height || "380px", ...style }}
    >
      <img
        src={starWarsImag}
        alt={alt}
        className="img-fluid w-100 h-100"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

CharacterCardImage.propTypes = {
  alt: PropTypes.string.isRequired,
  style: PropTypes.object,
};

CharacterCardImage.defaultProps = {
  style: { height: "380px", objectFit: "cover" },
};

export default CharacterCardImage;
