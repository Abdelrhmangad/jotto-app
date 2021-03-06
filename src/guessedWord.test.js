import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import GuessedWord from "./guessedWord";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatched: 1 }],
};
/**
 * Factory function to create a shallowWrapper for congrates component
 * @function setup
 * @param {{objec}} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProp = { ...defaultProps, ...props };
  return shallow(<GuessedWord {...setupProp} />);
};

test("should not throw error when pass expected props", () => {
  checkProps(GuessedWord, defaultProps);
});

describe("if there are no words guessed", () => {
  // we did this, so we can access wrapper through all our tests at this describe block
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without errors", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  const guessedWords = [
    { guessedWord: "gad", letterMatched: 3 },
    { guessedWord: "Aya", letterMatched: 1 },
    { guessedWord: "Esraa", letterMatched: 2 },
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test('renders "guessedWords" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("correct number of guessed Words ", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
});
