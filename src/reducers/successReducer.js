import { actionTypes } from "../actions";

/**
 * @funciton successReducer
 * @param {Array} state - Array of Guessed Words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.COREECT_GUESS:
      return true;
    default:
      return state;
  }
};
