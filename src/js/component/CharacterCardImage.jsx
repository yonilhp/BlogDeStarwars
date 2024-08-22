import React from "react";
import PropTypes from "prop-types";
import starWarsImag from "../../img/sc1.png"; // Importa la imagen

const CharacterCardImage = ({ alt, style }) => {
  return (
    <div className="ratio ratio-4x3">
      <img
        src={starWarsImag}
        alt={alt}
        className="card-img-top"
        style={style}
      />
    </div>
  );
};

CharacterCardImage.propTypes = {
  alt: PropTypes.string.isRequired,
  style: PropTypes.object,
};

CharacterCardImage.defaultProps = {
  style: { height: "240px", objectFit: "cover" },
};

export default CharacterCardImage;
