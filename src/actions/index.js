import { getLetterMatchCount } from "../helpers/index";
export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *  and (conditionally) dispatches CORRECT_GUESS action
 * @fucntion guessWord
 * @param {string} guessedWord - Guessed word
 * @returns {function} - Redux Thunk fucntion
 */

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};
