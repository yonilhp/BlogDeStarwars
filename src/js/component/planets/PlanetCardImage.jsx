import React from "react";
import PropTypes from "prop-types";

const PlanetCardImage = ({ style, url }) => {
  return (
    <div
      className="w-100 d-flex justify-content-center overflow-hidden"
      style={{ height: style.height || "380px", ...style }}
    >
      <img
        src={url}
        className="img-fluid w-100 h-100"
        style={{ objectFit: "cover" }}
        alt="Planet"
      />
    </div>
  );
};

PlanetCardImage.propTypes = {
  style: PropTypes.object,
};

PlanetCardImage.defaultProps = {
  style: { height: "380px", objectFit: "cover" },
};

export default PlanetCardImage;
