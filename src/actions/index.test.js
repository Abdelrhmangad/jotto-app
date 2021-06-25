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

    //instead of talking with actuall http server we mimic a server using moxios and make it returns a response we gave to it
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // this will return a promise and wait for it to resolve and then run the test
    // !take care here you must return store.dispatch()
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
