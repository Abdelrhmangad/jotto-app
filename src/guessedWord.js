import React from "react";
import PropTypes from "prop-types";

function GuessedWord(props) {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Please Guess a word !</span>
    );
  }
  return (
    <div>
      <div data-test="component-guessedWords">{contents}</div>
    </div>
  );
}

GuessedWord.prototype = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatched: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWord;
