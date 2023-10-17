import React from "react";
import PropTypes from "prop-types";

function NavBar({ onPreviousClick, onNextClick, hasPrevious, hasNext }) {
  return (
    <div className="navbar">
      {hasPrevious && (
        <button className="prev-button" onClick={onPreviousClick}>
          Précédent
        </button>
      )}
      {hasNext && (
        <button className="next-button" onClick={onNextClick}>
          Suivant
        </button>
      )}
    </div>
  );
}

NavBar.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
};

export default NavBar;
