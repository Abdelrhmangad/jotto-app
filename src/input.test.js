// //! Testing Redux is here
// import React from "react";
// import { shallow } from "enzyme";
// import { findByTestAttr, storeFacroty } from "../test/testUtils";
// import Input from "./input";
test("should fasdf", () => {});

// const setup = (initialState = {}) => {
//   const store = storeFacroty(initialState);
//   //* get to the input component by diving through the higher order component exported from input.js file {which is connect component}
//   // console.log(shallow(<Input store={store} />).debug());
//   //* here we provide reduc store as a prop to wrapper
//   const wrapper = shallow(<Input store={store} />)
//     .dive()
//     .dive();
//   return wrapper;
// };
// describe("render", () => {
//   describe("word has not been guessed", () => {
//     let wrapper;
//     beforeEach(() => {
//       const initialState = { success: false };
//       wrapper = setup(initialState);
//     });
//     test("should render component without any error", () => {
//       const component = findByTestAttr(wrapper, "component-input");
//       expect(component.length).toBe(1);
//     });
//     test("should render input box without any error", () => {
//       const inputBox = findByTestAttr(wrapper, "input-box");
//       expect(inputBox.length).toBe(1);
//     });
//     test("should render submit Button without any error", () => {
//       const submitButton = findByTestAttr(wrapper, "submit-button");
//       expect(submitButton.length).toBe(1);
//     });
//   });

//   describe("word has been guessed", () => {
//     let wrapper;
//     beforeEach(() => {
//       const initialState = { success: true };
//       wrapper = setup(initialState);
//     });
//     test("should render component without any error", () => {
//       const component = findByTestAttr(wrapper, "component-input");
//       expect(component.length).toBe(1);
//     });
//     // to make sure that this component didnt reneder when props where changed {success: true}
//     test("should render input box without any error", () => {
//       const inputBox = findByTestAttr(wrapper, "input-box");
//       expect(inputBox.length).toBe(0);
//     });

//     // to make sure that this component didnt reneder when props where changed {success: true}
//     test("should render submit Button without any error", () => {
//       const submitButton = findByTestAttr(wrapper, "submit-button");
//       expect(submitButton.length).toBe(0);
//     });
//   });
// });

// describe("update State", () => {});
