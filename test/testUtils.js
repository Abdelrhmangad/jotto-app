//! THIS FILE IS FOR TESTING PURPOSES IS ALTERANTIVE FOR THE ORIGINAL ONE CALLED configureStore.js at src folder
import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/reducers/index";
import { middlewares } from "../src/configureStore";

/**
 * Create with imported reducers. middlewares
 * globals: rootReducer,  middlewares
 * @param {object} initialState - initial state for store
 * @function storeFactory
 * @returns {Store}
 */

export const storeFactory = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};
/**
 * Return node s with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {String} val of data-test attriubte for search
 * @returns {ShallowWrapper}
 */

export default (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
