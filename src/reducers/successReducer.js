import { actionTypes } from "../actions";

/**
 * @funciton successReducer
 * @param {Array} state - Array of Guessed Words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state { success: true } if the the guessed word is true to display congrates div
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
