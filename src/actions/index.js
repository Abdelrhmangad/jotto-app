export const actionTypes = {
  COREECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

/**
 * @function correctGuess
 * @returns {Object}- action object with type 'CORRECT_GUESS'
 */
// export function correctGuess() {
//   return { type: actionTypes.CORRECT_GUESS };
// }

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *  and (conditionally) dispatches CORRECT_GUESS action
 * @fucntion guessWord
 * @param {string} guessedWord - Guessed word
 * @returns {function} - Redux Thunk fucntion
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {};
};
