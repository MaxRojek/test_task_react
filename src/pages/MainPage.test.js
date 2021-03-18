import React from "react";
import { shallow } from "enzyme";
import { render, screen, act } from "@testing-library/react";
import MainPage from "./MainPage";
import { SearchInput } from "./MainPage.style";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: "Leanne Graham",
          surname: "Graham",
        },
        { id: 2, name: "Mario", surname: "Graham" },
      ]),
  })
);

it("renders correctly", () => {
  shallow(<MainPage />);
});

it("include search input", () => {
  const mainPage = shallow(<MainPage />);
  expect(mainPage.containsMatchingElement(<SearchInput />)).toEqual(true);
});

describe("MainPage", () => {
  it("fetch users", async () => {
    await act(async () => render(<MainPage />));
    // expect(container.innerHTML).toMatch("Leanne Graham");
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
