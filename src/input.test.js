import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFacroty } from "../test/testUtils";
import Input from "./input";

const setup = (initialState = {}) => {
  const store = storeFacroty(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  console.log(wrapper.debug());
};
setup();
describe("render", () => {
  describe("word has not been guessed", () => {
    test("should render component without any error", () => {});
    test("should render iput box without any error", () => {});
    test("should render submit Button without any error", () => {});
  });
  describe("word has been guessed", () => {
    test("should render component without any error", () => {});
    test("doesn't render iput box ", () => {});
    test("doesn't render submit Button without any error", () => {});
  });
});

describe("update State", () => {});
