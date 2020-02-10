import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import React from "react";
import Forms from "./pages/sign in/Forms";
import App from "../src/App";

configure({ adapter: new Adapter() });

it("render", () => {
  expect(shallow(<Forms />)).toMatchSnapshot();
});
