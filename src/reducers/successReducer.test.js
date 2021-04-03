import { actionTypes } from "../actions";
import successReducer from "./successReducer";

// test("should return default intiaial state when no action is passed ", () => {
//   const newState = successReducer(undefined, {});
//   expect(newState).toBe(false);
// });
test("return `true` for action type CORRECT_GUESS", () => {
  const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
