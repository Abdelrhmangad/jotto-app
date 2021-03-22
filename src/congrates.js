import React from "react";

/**
 * Functional react component for congulatory message
 * @function
 * @returns {JSX.Element} - render component or(null) if success props is false
 */

const Congrates = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations you guessed the right word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

export default Congrates;
