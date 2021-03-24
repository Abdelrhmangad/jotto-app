import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrates from "./congrates";

const defaultProps = { success: false };

/**
 * Factory function to create a shallowWrapper for congrates component
 * @function setup
 * @param {{objec}} props - component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProp = { ...defaultProps, ...props };
  return shallow(<Congrates {...setupProp} />);
};

test("renders without errors", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("should renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("should renders non-empty congrates when `success` prop is true ", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text()).not.toBe(0);
});

test("doesn't throw an error when recieving unexpected props", () => {
  const expectedProps = { success: true };
  // check if the Congrates component get the right props will not throw an error
  // if some time at the future it thorws an error we must check for the props passed to congrates component all over the app
  checkProps(Congrates, expectedProps);
});
