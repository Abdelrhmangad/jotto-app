export const actionTypes = {
  COREECT_GUESS: "CORRECT_GUESS",
};

/**
 * @function correctGuess
 * @returns {Object}- action object with type 'CORRECT_GUESS'
 */
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
