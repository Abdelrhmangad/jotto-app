import moxios from "moxios";

import { storeFactory } from "../../test/testUtils";
//! we will be testing this getSecretWord Reducer
import { getSecretWord } from "./index";

describe("getSecretWord Action Creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("should adds response word to state", () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // this will return a promise and wait for it to resolve and then run the test
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
