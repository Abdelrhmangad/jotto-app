import { actionTypes } from "../actions";

// this is will fired every time an action is dispatched
/**
 * @function secretWordReducer
 * @param {string} state - State before reducer
 * @param {action} action - Action sent to reducer
 * @returns {string} - New State (secret word payload from action)
 */
const secretWordReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export default secretWordReducer;
