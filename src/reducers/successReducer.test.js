import { actionTypes } from "../actions";
import successReducer from "./successReducer";

// test("should return default intiaial state when no action is passed ", () => {
//   const newState = successReducer(undefined, {});
//   expect(newState).toBe(false);
// });
test("should return state of true upon recieving an action of type CORRECT_GUESS", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.COREECT_GUESS,
  });
  expect(newState).toBe(true);
});
