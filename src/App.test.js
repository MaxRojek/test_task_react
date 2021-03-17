import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
it("App renders correctly", () => {
  shallow(<App />);
});
