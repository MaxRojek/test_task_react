import React from "react";
import { shallow, mount, render } from "enzyme";
import filterUsersList from "./FilterUsersList";

describe("test filtering function", () => {
  const names = [{ name: "Max" }, { name: "Kris" }, { name: "Mark" }, { name: "Brad" }];

  it("check filtering", () => {
    const filteredArr = filterUsersList("Max", names);

    expect(filteredArr[0].name).toBe("Max");
  });

  it("check if return empty array when no results", () => {
    const filteredArr = filterUsersList("Marcin", names);

    expect(filteredArr.length).toEqual(0);
  });
});
