import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congulatory message
 * @function
 * @returns {JSX.Element} - render component or(null) if success props is false
 */

const Congrates = (props) => {
  if (props.success) {
    return (
      <div
        data-test="component-congrats"
        className="alert alert-success text-center"
      >
        <span data-test="congrats-message">
          Congratulations you guessed the right word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
Congrates.propTypes = {
  success: PropTypes.bool.isRequired,
  counter: PropTypes.number,
};
export default Congrates;
