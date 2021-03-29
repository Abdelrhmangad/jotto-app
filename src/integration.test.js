import { storeFactory } from "../test/testUtils";
// guessWord is an action creator
import { guessWord } from "./actions";

describe("guessWord action dispatcher", () => {
  let secretWord = "party";
  let unsuccessfulGuess = "train";
  describe("no guessed words -- user will start to use the app and, he didn't guess words yet ", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      // we passed the secretWord as initial state to the store to keep it as a state
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess -- first user guess was incorrect", () => {
      // we send (dispatched) the guessedWord to the store.
      store.dispatch(guessWord(unsuccessfulGuess));
      // we get the state of the store after guessing.
      const newState = store.getState();
      // that the state we expect to get from the store.
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };
      // we use toEqual because we coparing two objects here which are mutable data types
      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed word -- user has already guessed some incorrect guessed words", () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
