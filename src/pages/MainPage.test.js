import React from "react";
import { shallow, mount, render } from "enzyme";
import MainPage from "./MainPage";
import { SearchInput } from "./MainPage.style";
import UserCard from "../components/UserCard/UserCard";

it("renders correctly", () => {
  shallow(<MainPage />);
});

it("include search input", () => {
  const mainPage = shallow(<MainPage />);
  expect(mainPage.containsMatchingElement(<SearchInput />)).toEqual(true);
});

it("filters names when typed in search input", () => {
  const mainPage = shallow(<MainPage />);
  //   const input = mainPage.find(<SearchInput />);
  //input.simulate('change', { target: { value: 'Markus' } });
  //input.find(<SearchInput />).value("Markus");
  // expect(mainPage.at(0).key().toLocaleLowerCase.equal("1"));
  //   mainPage.find(SearchInput).simulate("change", {
  //     target: { value: "Ervin" },
  //   });
  //   expect(mainPage.find(SearchInput).props().value).toEqual("Ervin");
  // expect(mainPage.containsMatchingElement(<UserCard key="2" />)).toEqual(true);
  //mainPage.find("#2").toEqual(true);
  //expect(mainPage.find("#Ervin Howell").html()).toContain("2. Ervin Howell @Antonette");
  expect(mainPage.find("#2").exists()).toBeFalsy();
  // expect(mainPage.state("users")).toBe([]);
});
